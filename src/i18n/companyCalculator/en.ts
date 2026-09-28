import type { CompanyCalculatorCopy } from '../types'

export const companyCalculatorEn: CompanyCalculatorCopy = {
  eyebrow: 'Analysis tool',
  title: 'Financial Company Calculator',
  subtitle: 'Explore key company metrics from public market data — for learning, not investment advice.',
  tickerLabel: 'Company ticker',
  tickerPlaceholder: 'NVDA',
  analyze: 'Analyze',
  analyzing: 'Analyzing…',
  loading: 'Fetching company data…',
  notAvailable: '—',
  companyHeaderAria: 'Company overview',
  metricsAria: 'Financial metrics',
  latestTradingDay: 'Latest trading day',
  sourcesTitle: 'Data sources',
  disclaimer:
    'This tool is for educational analysis only. It does not provide personalized investment advice.',
  sources: {
    price: 'Price — Alpha Vantage market quote',
    eps: 'EPS — Alpha Vantage diluted TTM EPS',
    roe: 'ROE — Alpha Vantage return on equity (TTM)',
    pe: 'P/E — calculated by Nina\'s Lab (price ÷ diluted TTM EPS)',
    debtEquity: 'Debt / Equity — calculated by Nina\'s Lab from latest quarterly balance sheet',
    netDebtEbitda:
      'Net Debt / EBITDA — calculated by Nina\'s Lab from latest quarter net debt and TTM EBITDA',
    peg: 'PEG — provider-calculated Alpha Vantage value',
  },
  errors: {
    invalidTicker: 'Enter a valid ticker symbol (letters, numbers, dots or hyphens).',
    rateLimit: 'Data provider rate limit reached. Please try again later.',
    noData: 'Financial data is unavailable for this ticker right now.',
    network: 'Could not reach the server. Check your connection and try again.',
    unknown: 'Something went wrong while fetching company data.',
  },
  metrics: {
    eps: {
      label: 'EPS',
      tooltipTitle: 'Earnings per share',
      tooltipBody: 'Diluted earnings per share over the trailing twelve months (TTM).',
      tooltipPeriod: 'Period: TTM diluted EPS.',
      tooltipSource: 'Source: Alpha Vantage overview data.',
    },
    pe: {
      label: 'P/E',
      tooltipTitle: 'Price to earnings',
      tooltipBody: 'Current share price divided by diluted TTM earnings per share.',
      tooltipPeriod: 'Period: trailing (TTM EPS).',
      tooltipSource: 'Source: calculated by Nina\'s Lab.',
    },
    peg: {
      label: 'PEG',
      tooltipTitle: 'Price / earnings to growth',
      tooltipBody:
        'A valuation ratio that adjusts P/E for expected earnings growth. Nina\'s Lab displays the provider value as-is.',
      tooltipPeriod: 'Period: provider-defined (Alpha Vantage).',
      tooltipSource: 'Source: Alpha Vantage overview data.',
    },
    roe: {
      label: 'ROE',
      tooltipTitle: 'Return on equity',
      tooltipBody: 'How efficiently a company generates profit from shareholder equity.',
      tooltipPeriod: 'Period: trailing twelve months (TTM).',
      tooltipSource: 'Source: Alpha Vantage overview data.',
    },
    debtEquity: {
      label: 'Debt / Equity',
      tooltipTitle: 'Debt to equity',
      tooltipBody:
        'Total debt divided by total shareholder equity from the latest quarterly balance sheet.',
      tooltipPeriod: 'Balance sheet date: {date}.',
      tooltipSource: 'Source: calculated by Nina\'s Lab.',
    },
    netDebtEbitda: {
      label: 'Net Debt / EBITDA',
      tooltipTitle: 'Net debt to EBITDA',
      tooltipBody:
        'Net debt (total debt minus cash) divided by the sum of EBITDA from the latest four quarters.',
      tooltipPeriod: 'Net debt as of {date}; EBITDA summed over the last four quarters.',
      tooltipSource: 'Source: calculated by Nina\'s Lab.',
    },
  },
}
