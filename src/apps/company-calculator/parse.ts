const MISSING_VALUES = new Set(['none', 'null', 'undefined', '-'])

export function isMissing(value: unknown): boolean {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') {
    const trimmed = value.trim()
    return trimmed === '' || MISSING_VALUES.has(trimmed.toLowerCase())
  }
  return false
}

export function parseNumeric(value: unknown): number | null {
  if (isMissing(value)) return null

  const parsed = typeof value === 'number' ? value : Number(String(value).replace(/,/g, ''))
  if (!Number.isFinite(parsed)) return null

  return parsed
}

export function safeDivide(numerator: number | null, denominator: number | null): number | null {
  if (numerator === null || denominator === null || denominator === 0) return null
  const result = numerator / denominator
  return Number.isFinite(result) ? result : null
}

export function sortReportsByDate<T extends { fiscalDateEnding?: string }>(
  reports: T[] | undefined,
): T[] {
  if (!reports?.length) return []

  return [...reports].sort((left, right) => {
    const leftDate = left.fiscalDateEnding ?? ''
    const rightDate = right.fiscalDateEnding ?? ''
    return rightDate.localeCompare(leftDate)
  })
}
