export function normalizeHex(input: string): string | null {
  const trimmed = input.trim()
  const match = trimmed.match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)
  if (!match) return null

  let hex = match[1]
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  return `#${hex.toLowerCase()}`
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const normalized = normalizeHex(hex)
  if (!normalized) return null
  const value = normalized.slice(1)
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  }
}

export function mixHex(a: string, b: string, weightB: number): string {
  const rgbA = hexToRgb(a)
  const rgbB = hexToRgb(b)
  if (!rgbA || !rgbB) return a

  const weightA = 1 - weightB
  const r = Math.round(rgbA.r * weightA + rgbB.r * weightB)
  const g = Math.round(rgbA.g * weightA + rgbB.g * weightB)
  const blue = Math.round(rgbA.b * weightA + rgbB.b * weightB)

  return `#${[r, g, blue].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`
}
