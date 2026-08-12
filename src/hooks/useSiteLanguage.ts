import { useContext } from 'react'
import { SiteLanguageContext } from '../context/siteLanguageContext'

export function useSiteLanguage() {
  const context = useContext(SiteLanguageContext)
  if (!context) throw new Error('useSiteLanguage must be used within SiteLanguageProvider')
  return context
}
