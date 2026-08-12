import { useSiteLanguage } from '../../../hooks/useSiteLanguage'
import { translations } from '../translations'
import type { Language } from '../../../lib/preferences'

export function useLanguage() {
  const { language, setLanguage } = useSiteLanguage()

  return {
    language: language as Language,
    t: translations[language],
    setLanguage,
  }
}
