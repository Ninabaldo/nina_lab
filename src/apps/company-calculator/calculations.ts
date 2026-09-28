import { isMissing, parseNumeric, safeDivide, sortReportsByDate } from './parse'
import type { CalculatedMetrics, CompanyApiResponse, FinancialReport } from './types'

function getTotalDebt(report: FinancialReport | undefined): number | null {
  if (!report) return null

  const combined = parseNumeric(report.shortLongTermDebtTotal)
  if (combined !== null) return combined

  const shortTerm = parseNumeric(report.shortTermDebt)
  const longTerm = parseNumeric(report.longTermDebt)

  if (shortTerm === null && longTerm === null) return null
  return (shortTerm ?? 0) + (longTerm ?? 0)
}

function getQuarterlyEbitda(report: FinancialReport): number | null {
  const direct = parseNumeric(report.ebitda)
  if (direct !== null) return direct

  const operatingIncome = parseNumeric(report.operatingIncome)
  const depreciation = parseNumeric(report.depreciationAndAmortization)
  if (operatingIncome === null || depreciation === null) return null

  return operatingIncome + depreciation
}

function getTtmEbitda(reports: FinancialReport[] | undefined): number | null {
  const latestFour = sortReportsByDate(reports).slice(0, 4)
  if (latestFour.length < 4) return null

  let total = 0
  for (const report of latestFour) {
    const ebitda = getQuarterlyEbitda(report)
    if (ebitda === null) return null
    total += ebitda
  }

  return total
}

export function calculateMetrics(data: CompanyApiResponse): CalculatedMetrics {
  const overview = data.overview
  const quote = data.quote
  const latestBalanceSheet = sortReportsByDate(data.balanceSheet?.quarterlyReports)[0]

  const price = parseNumeric(quote?.price)
  const eps = parseNumeric(overview?.DilutedEPSTTM)
  const peg = parseNumeric(overview?.PEGRatio)
  const roe = parseNumeric(overview?.ReturnOnEquityTTM)

  const totalDebt = getTotalDebt(latestBalanceSheet)
  const cash = parseNumeric(latestBalanceSheet?.cashAndCashEquivalentsAtCarryingValue)
  const equity = parseNumeric(latestBalanceSheet?.totalShareholderEquity)

  const netDebt =
    totalDebt !== null && cash !== null ? totalDebt - cash : null

  const ttmEbitda = getTtmEbitda(data.incomeStatement?.quarterlyReports)

  return {
    ticker: data.ticker,
    companyName: isMissing(overview?.Name) ? null : overview?.Name ?? null,
    currency: isMissing(overview?.Currency) ? 'USD' : overview?.Currency ?? 'USD',
    price,
    latestTradingDay: quote?.latestTradingDay ?? null,
    eps,
    pe: safeDivide(price, eps),
    peg,
    roe,
    debtEquity: safeDivide(totalDebt, equity),
    netDebtToEbitda: safeDivide(netDebt, ttmEbitda),
    balanceSheetDate: latestBalanceSheet?.fiscalDateEnding ?? null,
  }
}

export function hasDisplayableMetrics(metrics: CalculatedMetrics): boolean {
  return [
    metrics.price,
    metrics.eps,
    metrics.pe,
    metrics.peg,
    metrics.roe,
    metrics.debtEquity,
    metrics.netDebtToEbitda,
  ].some((value) => value !== null)
}
