import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations } from '../i18n'
import {
  detectBrowserLanguage,
  storeLanguage,
  getStoredLanguage,
  type Language,
} from '../lib/preferences'
import { SiteLanguageContext } from './siteLanguageContext'

function resolveInitialLanguage(): Language {
  return getStoredLanguage() ?? detectBrowserLanguage()
}

export function SiteLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(resolveInitialLanguage)

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    storeLanguage(next)
    document.documentElement.lang = next
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      t: translations[language],
      setLanguage,
    }),
    [language, setLanguage],
  )

  return (
    <SiteLanguageContext.Provider value={value}>{children}</SiteLanguageContext.Provider>
  )
}
