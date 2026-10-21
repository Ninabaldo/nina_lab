import { useLayoutEffect } from 'react'

/**
 * While the PDF overlay is open: hide page content (no reflow visible),
 * keep scroll position, avoid body position:fixed jumps.
 */
export function usePdfScrollLock(active: boolean) {
  useLayoutEffect(() => {
    if (!active) return

    document.documentElement.classList.add('cp-pdf-lock')

    return () => {
      document.documentElement.classList.remove('cp-pdf-lock')
    }
  }, [active])
}
