import { useEffect, useRef } from 'react'
import { LAB_COLOR_PALETTES, LAB_STYLE_PRESETS } from '../../labDesign/defaults'
import { LAB_FONT_OPTIONS } from '../../labDesign/fonts'
import type { LabFontId, LabStylePreset } from '../../labDesign/types'
import { useLabDesign } from '../../hooks/useLabDesign'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { ColorField } from './ColorField'
import './LabDesignPanel.css'

export function LabDesignPanel() {
  const { t } = useSiteLanguage()
  const copy = t.labDesign
  const { design, panelOpen, closePanel, setDesign, setColors, resetDesign } = useLabDesign()
  const panelRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!panelOpen) return

    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePanel()
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKey)
    }
  }, [closePanel, panelOpen])

  if (!panelOpen) return null

  const styleLabel = (preset: LabStylePreset) => copy.styles[preset]

  return (
    <div className="lab-design-overlay" onClick={closePanel} role="presentation">
      <aside
        ref={panelRef}
        className="lab-design-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lab-design-panel-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="lab-design-panel__header">
          <div>
            <p className="lab-design-panel__eyebrow">{copy.panelEyebrow}</p>
            <h2 id="lab-design-panel-title" className="lab-design-panel__title">
              {copy.panelTitle}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="lab-design-panel__close"
            onClick={closePanel}
            aria-label={copy.close}
          >
            ×
          </button>
        </header>

        <div className="lab-design-panel__body">
          <section className="lab-design-group" aria-labelledby="lab-design-colors">
            <h3 id="lab-design-colors" className="lab-design-group__title">
              {copy.colorsTitle}
            </h3>
            <p className="lab-design-group__hint">{copy.colorsHint}</p>

            <div className="lab-design-palettes" role="list" aria-label={copy.palettesAria}>
              {LAB_COLOR_PALETTES.map((palette) => (
                <button
                  key={palette.id}
                  type="button"
                  role="listitem"
                  className="lab-design-palette"
                  onClick={() => setColors(palette)}
                  aria-label={copy.paletteApply}
                >
                  <span className="lab-design-palette__dots" aria-hidden="true">
                    <span style={{ background: palette.primary }} />
                    <span style={{ background: palette.background }} />
                    <span style={{ background: palette.text }} />
                    <span style={{ background: palette.surface }} />
                  </span>
                </button>
              ))}
            </div>

            <div className="lab-design-fields">
              <ColorField
                label={copy.primary}
                value={design.colors.primary}
                onChange={(primary) => setColors({ primary })}
              />
              <ColorField
                label={copy.background}
                value={design.colors.background}
                onChange={(background) => setColors({ background })}
              />
              <ColorField
                label={copy.text}
                value={design.colors.text}
                onChange={(text) => setColors({ text })}
              />
              <ColorField
                label={copy.surface}
                value={design.colors.surface}
                onChange={(surface) => setColors({ surface })}
              />
            </div>
          </section>

          <section className="lab-design-group" aria-labelledby="lab-design-type">
            <h3 id="lab-design-type" className="lab-design-group__title">
              {copy.typographyTitle}
            </h3>

            <div className="lab-design-fields">
              <label className="lab-design-field">
                <span className="lab-design-field__label">{copy.displayFont}</span>
                <select
                  className="lab-design-select"
                  value={design.fontDisplay}
                  onChange={(event) =>
                    setDesign({ fontDisplay: event.target.value as LabFontId })
                  }
                >
                  {design.fontDisplay === 'syne' ? (
                    <option value="syne">{copy.defaultDisplayFont}</option>
                  ) : null}
                  {LAB_FONT_OPTIONS.map((font) => (
                    <option key={font.id} value={font.id}>
                      {font.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="lab-design-field">
                <span className="lab-design-field__label">{copy.bodyFont}</span>
                <select
                  className="lab-design-select"
                  value={design.fontBody}
                  onChange={(event) => setDesign({ fontBody: event.target.value as LabFontId })}
                >
                  {LAB_FONT_OPTIONS.map((font) => (
                    <option key={font.id} value={font.id}>
                      {font.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="lab-design-type-preview" aria-hidden="true">
              <p className="lab-design-type-preview__title">{copy.previewTitle}</p>
              <p className="lab-design-type-preview__body">{copy.previewBody}</p>
              <span className="lab-design-type-preview__button">{copy.previewButton}</span>
            </div>
          </section>

          <section className="lab-design-group" aria-labelledby="lab-design-style">
            <h3 id="lab-design-style" className="lab-design-group__title">
              {copy.styleTitle}
            </h3>
            <div className="lab-design-chips" role="radiogroup" aria-label={copy.styleTitle}>
              {LAB_STYLE_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  role="radio"
                  aria-checked={design.stylePreset === preset}
                  className={`lab-design-chip${design.stylePreset === preset ? ' lab-design-chip--active' : ''}`}
                  onClick={() => setDesign({ stylePreset: preset })}
                >
                  {styleLabel(preset)}
                </button>
              ))}
            </div>
          </section>
        </div>

        <footer className="lab-design-panel__footer">
          <button type="button" className="lab-design-reset" onClick={resetDesign}>
            {copy.reset}
          </button>
        </footer>
      </aside>
    </div>
  )
}
