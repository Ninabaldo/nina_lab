import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  getStoredTheme,
  getSystemTheme,
  storeTheme,
  type Theme,
} from '../lib/preferences'
import { SiteThemeContext } from './siteThemeContext'

function resolveInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme()
}

const THEME_COLORS: Record<Theme, string> = {
  light: '#f5f2eb',
  dark: '#161514',
}

export function SiteThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(resolveInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', THEME_COLORS[theme])
  }, [theme])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === 'light' ? 'dark' : 'light'
      storeTheme(next)
      return next
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <SiteThemeContext.Provider value={value}>{children}</SiteThemeContext.Provider>
  )
}
