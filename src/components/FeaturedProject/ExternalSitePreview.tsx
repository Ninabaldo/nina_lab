import './ExternalSitePreview.css'

const IFRAME_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'

interface ExternalSitePreviewProps {
  url: string
  title: string
  static?: boolean
}

export function ExternalSitePreview({ url, title, static: isStatic = false }: ExternalSitePreviewProps) {
  return (
    <div
      className={`external-site-preview${isStatic ? ' external-site-preview--static' : ''}`}
      aria-hidden={isStatic ? true : undefined}
    >
      <iframe
        className="external-site-preview__frame"
        src={url}
        title={title}
        loading="lazy"
        allow={IFRAME_ALLOW}
        tabIndex={isStatic ? -1 : 0}
      />
    </div>
  )
}
