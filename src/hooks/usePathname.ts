import { useEffect, useState } from 'react'

function isInternalPath(href: string) {
  return href.startsWith('/') && !href.startsWith('//')
}

export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)

    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = (event.target as Element | null)?.closest('a[href]')
      if (!(anchor instanceof HTMLAnchorElement)) return
      if (anchor.target && anchor.target !== '_self') return
      if (anchor.hasAttribute('download')) return

      const href = anchor.getAttribute('href')
      if (!href || !isInternalPath(href)) return

      const url = new URL(href, window.location.origin)
      if (url.origin !== window.location.origin) return

      event.preventDefault()

      const nextPath = `${url.pathname}${url.search}${url.hash}`
      const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
      if (nextPath === currentPath) return

      window.history.pushState({}, '', nextPath)
      setPathname(url.pathname)
      window.scrollTo(0, 0)
    }

    window.addEventListener('popstate', onPopState)
    document.addEventListener('click', onDocumentClick)

    return () => {
      window.removeEventListener('popstate', onPopState)
      document.removeEventListener('click', onDocumentClick)
    }
  }, [])

  return pathname
}
