import { createContext } from 'react'
import type { Theme } from '../lib/preferences'

export interface SiteThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const SiteThemeContext = createContext<SiteThemeContextValue | null>(null)
