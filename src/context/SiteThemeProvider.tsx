import { useEffect, type ReactNode } from 'react'

export function SiteThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.dataset.theme = 'light'
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', '#f5f2eb')
  }, [])

  return children
}
