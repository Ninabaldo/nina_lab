import { useEffect, useState } from 'react'
import './ExternalSitePreview.css'

const IFRAME_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'

interface ExternalSitePreviewProps {
  url: string
  title: string
  static?: boolean
  logoUrl?: string
  logoVariant?: 'nook' | 'scopo' | 'picked'
}

export function ExternalSitePreview({
  url,
  title,
  static: isStatic = false,
  logoUrl,
  logoVariant,
}: ExternalSitePreviewProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const showLogo = Boolean(logoUrl)

  useEffect(() => {
    setIframeLoaded(false)
  }, [url])

  return (
    <div
      className={`external-site-preview${isStatic ? ' external-site-preview--static' : ''}`}
      aria-hidden={isStatic ? true : undefined}
    >
      {showLogo ? (
        <div
          className={`external-site-preview__fallback${
            logoVariant ? ` external-site-preview__fallback--${logoVariant}` : ''
          }`}
          aria-hidden={iframeLoaded ? true : undefined}
        >
          <img className="external-site-preview__logo" src={logoUrl} alt="" loading="lazy" />
        </div>
      ) : null}
      <div className="external-site-preview__clip">
        <iframe
          key={url}
          className={`external-site-preview__frame${iframeLoaded ? ' is-loaded' : ''}`}
          src={url}
          title={title}
          loading="lazy"
          allow={IFRAME_ALLOW}
          tabIndex={isStatic ? -1 : 0}
          onLoad={() => setIframeLoaded(true)}
        />
      </div>
    </div>
  )
}
