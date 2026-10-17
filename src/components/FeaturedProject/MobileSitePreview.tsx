import type { CSSProperties } from 'react'
import { PhoneFrame } from '../PhoneFrame/PhoneFrame'
import './MobileSitePreview.css'

const IFRAME_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'

/** Logical iPhone viewport — apps lay out as on a real device. */
const DEVICE_WIDTH = 393
const SCREEN_HEIGHT = 852
/** Bezel + island + screen (matches .phone-frame--simulator layout). */
const DEVICE_HEIGHT = 905

interface MobileSitePreviewProps {
  url: string
  title: string
  static?: boolean
  compact?: boolean
}

export function MobileSitePreview({
  url,
  title,
  static: isStatic = false,
  compact = false,
}: MobileSitePreviewProps) {
  return (
    <div
      className={`mobile-site-preview${isStatic ? ' mobile-site-preview--static' : ''}${
        compact ? ' mobile-site-preview--compact' : ' mobile-site-preview--embed'
      }`}
      aria-hidden={isStatic ? true : undefined}
      style={
        {
          '--device-width': `${DEVICE_WIDTH}px`,
          '--device-height': `${DEVICE_HEIGHT}px`,
          '--screen-height': `${SCREEN_HEIGHT}px`,
        } as CSSProperties
      }
    >
      <div className="mobile-site-preview__viewport">
        <PhoneFrame variant="simulator" className="mobile-site-preview__device">
          <iframe
            key={url}
            className="mobile-site-preview__frame"
            src={url}
            title={title}
            width={DEVICE_WIDTH}
            height={SCREEN_HEIGHT}
            loading="lazy"
            allow={IFRAME_ALLOW}
            tabIndex={isStatic ? -1 : 0}
          />
        </PhoneFrame>
      </div>
    </div>
  )
}
