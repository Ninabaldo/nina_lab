import { useEffect } from 'react'

/** Keeps the page fixed (no shift) while a full-screen PDF overlay is shown. */
export function usePdfScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return

    const scrollY = window.scrollY
    const scrollbarWidth = Math.max(0, window.innerWidth - document.documentElement.clientWidth)
    const { body, documentElement: html } = document

    const prev = {
      bodyOverflow: body.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      htmlOverflow: html.style.overflow,
    }

    body.classList.add('cp-pdf-lock')
    body.style.setProperty('--cp-pdf-scrollbar', `${scrollbarWidth}px`)
    body.style.overflow = 'hidden'
    body.style.paddingRight = `${scrollbarWidth}px`
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    html.style.overflow = 'hidden'

    return () => {
      body.classList.remove('cp-pdf-lock')
      body.style.removeProperty('--cp-pdf-scrollbar')
      body.style.overflow = prev.bodyOverflow
      body.style.paddingRight = prev.bodyPaddingRight
      body.style.position = prev.bodyPosition
      body.style.top = prev.bodyTop
      body.style.width = prev.bodyWidth
      html.style.overflow = prev.htmlOverflow
      window.scrollTo(0, scrollY)
    }
  }, [active])
}
