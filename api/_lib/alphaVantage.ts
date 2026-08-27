const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query'
const TICKER_PATTERN = /^[A-Z][A-Z0-9.-]{0,9}$/

export type AlphaVantageFunction =
  | 'GLOBAL_QUOTE'
  | 'OVERVIEW'
  | 'INCOME_STATEMENT'
  | 'BALANCE_SHEET'
  | 'EARNINGS'

export type CompanyDataSource =
  | 'quote'
  | 'overview'
  | 'incomeStatement'
  | 'balanceSheet'
  | 'earnings'

export interface AlphaVantageFetchResult<T> {
  source: CompanyDataSource
  data: T | null
  error: string | null
}

export function normalizeTicker(raw: unknown): string | null {
  if (typeof raw !== 'string') return null

  const ticker = raw.trim().toUpperCase()
  if (!ticker || !TICKER_PATTERN.test(ticker)) return null

  return ticker
}

export function getAlphaVantageError(data: unknown): string | null {
  if (!data || typeof data !== 'object') {
    return 'Alpha Vantage returned an invalid response.'
  }

  const payload = data as Record<string, unknown>

  if (typeof payload['Error Message'] === 'string') {
    return payload['Error Message']
  }

  if (typeof payload['Note'] === 'string') {
    return payload['Note']
  }

  if (typeof payload['Information'] === 'string') {
    return payload['Information']
  }

  return null
}

export async function fetchAlphaVantage<T>(
  apiKey: string,
  ticker: string,
  fn: AlphaVantageFunction,
): Promise<T> {
  const url = new URL(ALPHA_VANTAGE_BASE_URL)
  url.searchParams.set('function', fn)
  url.searchParams.set('symbol', ticker)
  url.searchParams.set('apikey', apiKey)

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Alpha Vantage request failed with status ${response.status}.`)
  }

  const data = (await response.json()) as T
  const errorMessage = getAlphaVantageError(data)

  if (errorMessage) {
    throw new Error(errorMessage)
  }

  return data
}

export interface GlobalQuoteResponse {
  'Global Quote'?: Record<string, string>
}

export function cleanGlobalQuote(data: GlobalQuoteResponse) {
  const quote = data['Global Quote']
  if (!quote) return null

  return {
    symbol: quote['01. symbol'] ?? null,
    open: quote['02. open'] ?? null,
    high: quote['03. high'] ?? null,
    low: quote['04. low'] ?? null,
    price: quote['05. price'] ?? null,
    volume: quote['06. volume'] ?? null,
    latestTradingDay: quote['07. latest trading day'] ?? null,
    previousClose: quote['08. previous close'] ?? null,
    change: quote['09. change'] ?? null,
    changePercent: quote['10. change percent'] ?? null,
  }
}

export async function fetchCompanyDataset<T>(
  apiKey: string,
  ticker: string,
  source: CompanyDataSource,
  fn: AlphaVantageFunction,
): Promise<AlphaVantageFetchResult<T>> {
  try {
    const data = await fetchAlphaVantage<T>(apiKey, ticker, fn)
    return { source, data, error: null }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown Alpha Vantage error.'
    return { source, data: null, error: message }
  }
}

const REQUEST_INTERVAL_MS = 1200

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

type DatasetRequest = {
  source: CompanyDataSource
  fn: AlphaVantageFunction
}

export async function fetchCompanyDatasets(
  apiKey: string,
  ticker: string,
  requests: DatasetRequest[],
): Promise<AlphaVantageFetchResult<unknown>[]> {
  const results: AlphaVantageFetchResult<unknown>[] = []

  for (let index = 0; index < requests.length; index += 1) {
    const request = requests[index]
    if (index > 0) {
      await sleep(REQUEST_INTERVAL_MS)
    }

    results.push(await fetchCompanyDataset(apiKey, ticker, request.source, request.fn))
  }

  return results
}

export function isRateLimitMessage(message: string): boolean {
  const normalized = message.toLowerCase()
  return (
    normalized.includes('frequency') ||
    normalized.includes('rate limit') ||
    normalized.includes('per second') ||
    normalized.includes('sparingly') ||
    normalized.includes('thank you for using alpha vantage')
  )
}
