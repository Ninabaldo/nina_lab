import {
  cleanGlobalQuote,
  fetchCompanyDatasets,
  isRateLimitMessage,
  normalizeTicker,
  type GlobalQuoteResponse,
} from './_lib/alphaVantage.js'

interface ApiRequest {
  method?: string
  query: Partial<Record<string, string | string[]>>
}

interface ApiResponse {
  status: (code: number) => ApiResponse
  json: (body: unknown) => ApiResponse
  setHeader: (name: string, value: string) => ApiResponse
}

interface IncomeStatementResponse {
  symbol?: string
  annualReports?: unknown[]
  quarterlyReports?: unknown[]
}

interface BalanceSheetResponse {
  symbol?: string
  annualReports?: unknown[]
  quarterlyReports?: unknown[]
}

interface EarningsResponse {
  symbol?: string
  annualEarnings?: unknown[]
  quarterlyEarnings?: unknown[]
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed. Use GET.' })
  }

  const ticker = normalizeTicker(req.query.ticker)
  if (!ticker) {
    return res.status(400).json({
      error: 'Invalid or missing ticker. Example: /api/company?ticker=NVDA',
    })
  }

  const apiKey = process.env.ALPHA_VANTAGE_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error: 'Server configuration error: ALPHA_VANTAGE_API_KEY is not set.',
    })
  }

  const results = await fetchCompanyDatasets(apiKey, ticker, [
      { source: 'quote', fn: 'GLOBAL_QUOTE' },
      { source: 'overview', fn: 'OVERVIEW' },
      { source: 'incomeStatement', fn: 'INCOME_STATEMENT' },
      { source: 'balanceSheet', fn: 'BALANCE_SHEET' },
      { source: 'earnings', fn: 'EARNINGS' },
    ])

  const [quoteResult, overviewResult, incomeResult, balanceResult, earningsResult] = results

  const errors = results
    .filter((result) => result.error)
    .map((result) => ({
      source: result.source,
      message: result.error as string,
    }))

  const quote = quoteResult.data ? cleanGlobalQuote(quoteResult.data as GlobalQuoteResponse) : null
  const overview =
    overviewResult.data && Object.keys(overviewResult.data).length > 0
      ? overviewResult.data
      : null

  const incomeStatement = incomeResult.data
    ? {
        symbol: (incomeResult.data as IncomeStatementResponse).symbol ?? ticker,
        annualReports: (incomeResult.data as IncomeStatementResponse).annualReports ?? [],
        quarterlyReports: (incomeResult.data as IncomeStatementResponse).quarterlyReports ?? [],
      }
    : null

  const balanceSheet = balanceResult.data
    ? {
        symbol: (balanceResult.data as BalanceSheetResponse).symbol ?? ticker,
        annualReports: (balanceResult.data as BalanceSheetResponse).annualReports ?? [],
        quarterlyReports: (balanceResult.data as BalanceSheetResponse).quarterlyReports ?? [],
      }
    : null

  const earnings = earningsResult.data
    ? {
        symbol: (earningsResult.data as EarningsResponse).symbol ?? ticker,
        annualEarnings: (earningsResult.data as EarningsResponse).annualEarnings ?? [],
        quarterlyEarnings: (earningsResult.data as EarningsResponse).quarterlyEarnings ?? [],
      }
    : null

  const hasData = Boolean(quote || overview || incomeStatement || balanceSheet || earnings)

  const rateLimited = errors.some((entry) => isRateLimitMessage(entry.message))
  if (rateLimited && !hasData) {
    return res.status(429).json({
      error: 'Alpha Vantage API rate limit reached. Please try again later.',
      ticker,
      details: errors,
    })
  }

  if (!hasData) {
    return res.status(502).json({
      error: 'Unable to retrieve company data from Alpha Vantage.',
      ticker,
      details: errors,
    })
  }

  return res.status(200).json({
    ticker,
    fetchedAt: new Date().toISOString(),
    quote,
    overview,
    incomeStatement,
    balanceSheet,
    earnings,
    ...(errors.length > 0 ? { partial: true, errors } : {}),
  })
}
