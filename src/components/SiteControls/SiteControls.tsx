import { useEffect, useRef, useState } from 'react'
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES, type Language } from '../../lib/preferences'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { useSiteTheme } from '../../hooks/useSiteTheme'
import './SiteControls.css'

export function SiteControls() {
  const { language, setLanguage, t } = useSiteLanguage()
  const { theme, toggleTheme } = useSiteTheme()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const selectLanguage = (next: Language) => {
    setLanguage(next)
    setOpen(false)
  }

  return (
    <div className="site-controls">
      <div className="site-controls__group" ref={containerRef}>
        <button
          type="button"
          className="site-controls__trigger"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label={t.controls.language}
        >
          {LANGUAGE_LABELS[language]}
          <span className="site-controls__caret" aria-hidden="true">▾</span>
        </button>

        {open && (
          <ul className="site-controls__menu" role="listbox" aria-label={t.controls.language}>
            {SUPPORTED_LANGUAGES.map((code) => (
              <li key={code} role="option" aria-selected={language === code}>
                <button
                  type="button"
                  className={`site-controls__option ${language === code ? 'site-controls__option--active' : ''}`}
                  onClick={() => selectLanguage(code)}
                >
                  {LANGUAGE_LABELS[code]}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="button"
        className="site-controls__theme"
        onClick={toggleTheme}
        aria-label={theme === 'light' ? t.controls.themeLight : t.controls.themeDark}
      >
        <span aria-hidden="true">{theme === 'light' ? '◐' : '◑'}</span>
      </button>
    </div>
  )
}
