import { collectGoogleFontQueries, getFontStack } from './fonts'
import type { LabDesignState } from './types'
import { mixHex } from './colorUtils'

const LAB_DESIGN_PROPS = [
  '--color-bg',
  '--color-bg-alt',
  '--color-bg-warm',
  '--color-text',
  '--color-text-muted',
  '--color-text-light',
  '--color-border',
  '--color-accent-sage',
  '--color-accent-coral',
  '--color-primary',
  '--font-display',
  '--font-body',
] as const

const FONT_LINK_ID = 'nina-lab-design-fonts'

export function clearLabDesign(): void {
  const root = document.documentElement
  for (const prop of LAB_DESIGN_PROPS) {
    root.style.removeProperty(prop)
  }
  delete root.dataset.labStyle
  document.getElementById(FONT_LINK_ID)?.remove()
}

export function applyLabDesign(state: LabDesignState): void {
  const root = document.documentElement
  const { colors, fontDisplay, fontBody, stylePreset } = state

  const warm = mixHex(colors.background, colors.surface, 0.45)
  const muted = mixHex(colors.text, colors.background, 0.55)
  const light = mixHex(colors.text, colors.background, 0.72)
  const border = mixHex(colors.surface, colors.text, 0.12)
  const accentSecondary = mixHex(colors.primary, colors.text, 0.25)

  root.style.setProperty('--color-bg', colors.background)
  root.style.setProperty('--color-bg-alt', colors.surface)
  root.style.setProperty('--color-bg-warm', warm)
  root.style.setProperty('--color-text', colors.text)
  root.style.setProperty('--color-text-muted', muted)
  root.style.setProperty('--color-text-light', light)
  root.style.setProperty('--color-border', border)
  root.style.setProperty('--color-accent-sage', colors.primary)
  root.style.setProperty('--color-accent-coral', accentSecondary)
  root.style.setProperty('--color-primary', colors.primary)
  root.style.setProperty('--font-display', getFontStack(fontDisplay))
  root.style.setProperty('--font-body', getFontStack(fontBody))
  root.dataset.labStyle = stylePreset

  const queries = collectGoogleFontQueries(fontDisplay, fontBody)
  const link = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null
  if (queries.length === 0) {
    link?.remove()
    return
  }

  const href = `https://fonts.googleapis.com/css2?${queries.map((q) => `family=${q}`).join('&')}&display=swap`
  if (link) {
    if (link.href !== href) link.href = href
    return
  }

  const next = document.createElement('link')
  next.id = FONT_LINK_ID
  next.rel = 'stylesheet'
  next.href = href
  document.head.appendChild(next)

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', colors.background)
}
