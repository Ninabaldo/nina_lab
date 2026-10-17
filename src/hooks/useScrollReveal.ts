import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const reveal = () => {
      element.classList.add('is-visible')
    }

    if (prefersReduced) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.unobserve(element)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -2% 0px' },
    )

    observer.observe(element)

    requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
        reveal()
        observer.unobserve(element)
      }
    })
    return () => observer.disconnect()
  }, [])

  return ref
}
