export function formatCurrency(value: number | null, currency = 'USD'): string | null {
  if (value === null) return null

  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function formatRatio(value: number | null, digits = 2): string | null {
  if (value === null) return null
  return value.toFixed(digits)
}

export function formatPercent(value: number | null, digits = 1): string | null {
  if (value === null) return null
  return `${(value * 100).toFixed(digits)}%`
}

export function formatMultiple(value: number | null, digits = 2): string | null {
  if (value === null) return null
  return `${value.toFixed(digits)}×`
}
