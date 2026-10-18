import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import { PhoneFrame } from '../PhoneFrame/PhoneFrame'
import { useNarrowViewport } from '../../hooks/useNarrowViewport'
import './MobileSitePreview.css'

const IFRAME_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'

/** Logical iPhone viewport — apps lay out as on a real device. */
const SCREEN_WIDTH = 393
const SCREEN_HEIGHT = 852
/** Simulator chrome width (393px screen + horizontal bezel padding). */
const DEVICE_OUTER_WIDTH = 413
/** Bezel + island + screen (matches .phone-frame--simulator layout). */
const DEVICE_OUTER_HEIGHT = 905

interface MobileSitePreviewProps {
  url: string
  title: string
  static?: boolean
  /** Same scale as project cards (list + open project). */
  compact?: boolean
  /** Open project: use full viewport on phones (no simulator chrome). */
  embed?: boolean
  logoUrl?: string
  logoVariant?: 'nook' | 'scopo' | 'picked' | 'sync'
}

export function MobileSitePreview({
  url,
  title,
  static: isStatic = false,
  compact = true,
  embed = false,
  logoUrl,
  logoVariant,
}: MobileSitePreviewProps) {
  const narrowViewport = useNarrowViewport()
  const useNativeEmbed = embed && !isStatic
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    setIframeLoaded(false)
  }, [url])

  if (useNativeEmbed) {
    return (
      <div
        className={`mobile-site-preview mobile-site-preview--native${
          narrowViewport ? ' mobile-site-preview--native-phone' : ' mobile-site-preview--native-desktop'
        }`}
      >
        <iframe
          key={url}
          className="mobile-site-preview__native-frame"
          src={url}
          title={title}
          loading="eager"
          allow={IFRAME_ALLOW}
        />
      </div>
    )
  }

  const showLogo = Boolean(logoUrl)

  return (
    <div
      className={`mobile-site-preview${isStatic ? ' mobile-site-preview--static' : ''}${
        compact ? ' mobile-site-preview--compact' : ''
      }${embed ? ' mobile-site-preview--embed' : ''}`}
      aria-hidden={isStatic ? true : undefined}
      style={
        {
          '--screen-width': `${SCREEN_WIDTH}px`,
          '--screen-height': `${SCREEN_HEIGHT}px`,
          '--device-width': `${DEVICE_OUTER_WIDTH}px`,
          '--device-height': `${DEVICE_OUTER_HEIGHT}px`,
        } as CSSProperties
      }
    >
      <div className="mobile-site-preview__viewport">
        <PhoneFrame variant="simulator" className="mobile-site-preview__device">
          <div className="mobile-site-preview__screen">
            {showLogo ? (
              <div
                className={`mobile-site-preview__fallback${
                  logoVariant ? ` mobile-site-preview__fallback--${logoVariant}` : ''
                }`}
                aria-hidden={iframeLoaded ? true : undefined}
              >
                <img className="mobile-site-preview__logo" src={logoUrl} alt="" loading="lazy" />
              </div>
            ) : null}
            <iframe
              key={url}
              className={`mobile-site-preview__frame${iframeLoaded ? ' is-loaded' : ''}`}
              src={url}
              title={title}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT}
              loading={isStatic ? 'lazy' : 'eager'}
              allow={IFRAME_ALLOW}
              tabIndex={isStatic ? -1 : 0}
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </PhoneFrame>
      </div>
    </div>
  )
}
