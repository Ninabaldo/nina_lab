import { useEffect, useState } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './BackToTop.css'

const SHOW_AFTER_PX = 420

export function BackToTop() {
  const { t } = useSiteLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label={t.backToTop.ariaLabel}
    >
      <span className="back-to-top__arrow" aria-hidden="true">
        ↑
      </span>
    </button>
  )
}
