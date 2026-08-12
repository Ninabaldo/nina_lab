import { useState } from 'react'
import type { CSSProperties } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { hexToRgb } from './colorUtils'
import { isEyeDropperSupported, pickColorFromScreen } from './eyeDropper'
import './ColorStudioApp.css'

const MAX_HISTORY = 6

export function ColorStudioApp() {
  const { t } = useSiteLanguage()
  const app = t.apps.colorStudio

  const [color, setColor] = useState('#8ba888')
  const [history, setHistory] = useState<string[]>(['#8ba888'])
  const [picking, setPicking] = useState(false)
  const [copied, setCopied] = useState(false)

  const rgb = hexToRgb(color)
  const canPickFromScreen = isEyeDropperSupported()

  const applyColor = (next: string) => {
    const normalized = next.toLowerCase()
    setColor(normalized)
    setHistory((current) => {
      const filtered = current.filter((item) => item !== normalized)
      return [normalized, ...filtered].slice(0, MAX_HISTORY)
    })
  }

  const handlePickFromScreen = async () => {
    setPicking(true)
    const picked = await pickColorFromScreen()
    setPicking(false)
    if (picked) applyColor(picked)
  }

  const handleCopyHex = async () => {
    try {
      await navigator.clipboard.writeText(color.toUpperCase())
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="color-studio">
      <p className="color-studio__label">{app.label}</p>

      <div className="color-studio__meter" style={{ '--meter-color': color } as CSSProperties}>
        <div className="color-studio__sample" aria-hidden="true">
          <span className="color-studio__sample-fill" />
          <span className="color-studio__sample-ring" />
        </div>

        <div className="color-studio__readout">
          <div className="color-studio__hex-row">
            <code className="color-studio__hex">{color.toUpperCase()}</code>
            <button
              type="button"
              className="color-studio__copy"
              onClick={handleCopyHex}
              aria-label={copied ? app.copied : app.copyHex}
            >
              <span aria-hidden="true">📋</span>
            </button>
          </div>
          {rgb && (
            <div className="color-studio__rgb">
              <span><em>R</em> {rgb.r}</span>
              <span><em>G</em> {rgb.g}</span>
              <span><em>B</em> {rgb.b}</span>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        className="color-studio__pick"
        onClick={handlePickFromScreen}
        disabled={!canPickFromScreen || picking}
      >
        <span className="color-studio__pick-icon" aria-hidden="true">◉</span>
        {picking ? app.picking : app.pick}
      </button>

      {!canPickFromScreen && (
        <p className="color-studio__fallback">{app.fallback}</p>
      )}

      {history.length > 0 && (
        <div className="color-studio__history">
          <span className="color-studio__history-label">{app.recent}</span>
          <div className="color-studio__history-swatches">
            {history.map((swatch) => (
              <button
                key={swatch}
                type="button"
                className={`color-studio__history-swatch ${swatch === color ? 'color-studio__history-swatch--active' : ''}`}
                style={{ background: swatch }}
                onClick={() => setColor(swatch)}
                aria-label={`Select ${swatch}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
