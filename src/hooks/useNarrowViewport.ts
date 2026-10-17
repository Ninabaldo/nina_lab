import { useEffect, useState } from 'react'

const DEFAULT_MAX_WIDTH = 767

export function useNarrowViewport(maxWidth = DEFAULT_MAX_WIDTH): boolean {
  const query = `(max-width: ${maxWidth}px)`

  const [narrow, setNarrow] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setNarrow(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [query])

  return narrow
}
