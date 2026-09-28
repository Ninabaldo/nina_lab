export interface CompanyQuote {
  symbol: string | null
  price: string | null
  latestTradingDay: string | null
}

export interface CompanyOverview {
  Name?: string
  Symbol?: string
  Currency?: string
  DilutedEPSTTM?: string
  PEGRatio?: string
  ReturnOnEquityTTM?: string
}

export interface FinancialReport {
  fiscalDateEnding?: string
  shortLongTermDebtTotal?: string
  shortTermDebt?: string
  longTermDebt?: string
  cashAndCashEquivalentsAtCarryingValue?: string
  totalShareholderEquity?: string
  operatingIncome?: string
  depreciationAndAmortization?: string
  ebitda?: string
}

export interface CompanyApiResponse {
  ticker: string
  fetchedAt: string
  quote: CompanyQuote | null
  overview: CompanyOverview | null
  incomeStatement: {
    quarterlyReports?: FinancialReport[]
  } | null
  balanceSheet: {
    quarterlyReports?: FinancialReport[]
  } | null
  partial?: boolean
  errors?: Array<{ source: string; message: string }>
  error?: string
}

export interface CalculatedMetrics {
  ticker: string
  companyName: string | null
  currency: string
  price: number | null
  latestTradingDay: string | null
  eps: number | null
  pe: number | null
  peg: number | null
  roe: number | null
  debtEquity: number | null
  netDebtToEbitda: number | null
  balanceSheetDate: string | null
}

export type FetchStatus = 'idle' | 'loading' | 'success' | 'error'

export type FetchErrorCode =
  | 'invalid_ticker'
  | 'rate_limit'
  | 'no_data'
  | 'network'
  | 'unknown'

export interface FetchError {
  code: FetchErrorCode
  message?: string
}
