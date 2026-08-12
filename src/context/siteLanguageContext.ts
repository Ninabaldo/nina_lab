import { createContext } from 'react'
import type { Language } from '../lib/preferences'
import type { SiteTranslations } from '../i18n/types'

export interface SiteLanguageContextValue {
  language: Language
  t: SiteTranslations
  setLanguage: (language: Language) => void
}

export const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null)
