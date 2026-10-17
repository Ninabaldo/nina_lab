import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useLabDesign } from '../../hooks/useLabDesign'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './DesignYourLabSection.css'

export function DesignYourLabSection() {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()
  const copy = t.labDesign
  const { openPanel } = useLabDesign()

  return (
    <section
      className="design-your-lab reveal"
      ref={ref}
      aria-labelledby="design-your-lab-heading"
    >
      <div className="design-your-lab__band">
        <article className="design-your-lab__module">
          <div className="design-your-lab__preview" aria-hidden="true">
            <div className="design-your-lab__preview-top">
              <span className="design-your-lab__preview-dot" />
              <span className="design-your-lab__preview-dot design-your-lab__preview-dot--muted" />
              <span className="design-your-lab__preview-dot design-your-lab__preview-dot--muted" />
            </div>
            <div className="design-your-lab__preview-swatch" />
            <div className="design-your-lab__preview-lines">
              <span className="design-your-lab__preview-line design-your-lab__preview-line--title" />
              <span className="design-your-lab__preview-line" />
              <span className="design-your-lab__preview-line design-your-lab__preview-line--short" />
            </div>
            <div className="design-your-lab__preview-palette">
              <span />
              <span />
              <span />
              <span />
            </div>
            <span className="design-your-lab__preview-type">Aa</span>
          </div>

          <div className="design-your-lab__body">
            <p className="design-your-lab__badge">{copy.eyebrow}</p>
            <div className="design-your-lab__copy">
              <h2 id="design-your-lab-heading" className="design-your-lab__title">
                {copy.title}
              </h2>
              <p className="design-your-lab__text">{copy.lead}</p>
            </div>
            <button type="button" className="design-your-lab__cta" onClick={openPanel}>
              {copy.cta}
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
