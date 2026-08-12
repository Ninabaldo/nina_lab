import ca from './ca'
import en from './en'
import es from './es'
import fr from './fr'
import type { Language, Translations } from './types'

export type { Language, Translations }
export { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from './types'

export const translations: Record<Language, Translations> = {
  en,
  es,
  ca,
  fr,
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
