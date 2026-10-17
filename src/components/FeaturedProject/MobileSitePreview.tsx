import { PhoneFrame } from '../PhoneFrame/PhoneFrame'
import './MobileSitePreview.css'

const IFRAME_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'

interface MobileSitePreviewProps {
  url: string
  title: string
  static?: boolean
}

export function MobileSitePreview({
  url,
  title,
  static: isStatic = false,
}: MobileSitePreviewProps) {
  return (
    <div
      className={`mobile-site-preview${isStatic ? ' mobile-site-preview--static' : ''}`}
      aria-hidden={isStatic ? true : undefined}
    >
      <PhoneFrame className="mobile-site-preview__phone">
        <iframe
          key={url}
          className="mobile-site-preview__frame"
          src={url}
          title={title}
          loading="lazy"
          allow={IFRAME_ALLOW}
          tabIndex={isStatic ? -1 : 0}
        />
      </PhoneFrame>
    </div>
  )
}
