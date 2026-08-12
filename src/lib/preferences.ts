export type Theme = 'light' | 'dark'
export type Language = 'en' | 'es' | 'ca' | 'fr'

const KEYS = {
  theme: 'nina-lab-theme',
  language: 'nina-lab-language',
} as const

export function getStoredTheme(): Theme | null {
  const value =
    localStorage.getItem(KEYS.theme) ?? localStorage.getItem('breathe-theme')
  if (value === 'light' || value === 'dark') return value
  return null
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function storeTheme(theme: Theme) {
  localStorage.setItem(KEYS.theme, theme)
}

export function getStoredLanguage(): Language | null {
  const value =
    localStorage.getItem(KEYS.language) ?? localStorage.getItem('breathe-language')
  if (value === 'en' || value === 'es' || value === 'ca' || value === 'fr') return value
  return null
}

export function storeLanguage(language: Language) {
  localStorage.setItem(KEYS.language, language)
}

export function detectBrowserLanguage(): Language {
  const codes = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const code of codes) {
    const normalized = code.toLowerCase().split('-')[0]
    if (normalized === 'ca') return 'ca'
    if (normalized === 'es') return 'es'
    if (normalized === 'fr') return 'fr'
    if (normalized === 'en') return 'en'
  }

  return 'en'
}

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'EN',
  es: 'ES',
  ca: 'CA',
  fr: 'FR',
}

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'es', 'ca', 'fr']
