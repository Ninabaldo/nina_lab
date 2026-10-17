import type { LabFontId } from './types'

export interface LabFontOption {
  id: LabFontId
  label: string
  stack: string
  googleQuery?: string
}

export const LAB_FONT_OPTIONS: LabFontOption[] = [
  {
    id: 'inter',
    label: 'Inter',
    stack: "'Inter', system-ui, sans-serif",
    googleQuery: 'Inter:wght@400;500;600',
  },
  {
    id: 'space-grotesk',
    label: 'Space Grotesk',
    stack: "'Space Grotesk', system-ui, sans-serif",
    googleQuery: 'Space+Grotesk:wght@400;500;600;700',
  },
  {
    id: 'dm-sans',
    label: 'DM Sans',
    stack: "'DM Sans', system-ui, sans-serif",
    googleQuery: 'DM+Sans:opsz,wght@9..40,400;500;600',
  },
  {
    id: 'playfair-display',
    label: 'Playfair Display',
    stack: "'Playfair Display', Georgia, serif",
    googleQuery: 'Playfair+Display:wght@500;600;700',
  },
  {
    id: 'poppins',
    label: 'Poppins',
    stack: "'Poppins', system-ui, sans-serif",
    googleQuery: 'Poppins:wght@400;500;600',
  },
]

const SYNE_STACK = "'Syne', system-ui, sans-serif"

export function getFontStack(id: LabFontId): string {
  if (id === 'syne') return SYNE_STACK
  return LAB_FONT_OPTIONS.find((font) => font.id === id)?.stack ?? SYNE_STACK
}

export function collectGoogleFontQueries(display: LabFontId, body: LabFontId): string[] {
  const ids = new Set<LabFontId>([display, body])
  const queries: string[] = []
  for (const id of ids) {
    if (id === 'syne') continue
    const option = LAB_FONT_OPTIONS.find((font) => font.id === id)
    if (option?.googleQuery) queries.push(option.googleQuery)
  }
  return queries
}
