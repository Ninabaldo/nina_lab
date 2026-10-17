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
    <section className="design-your-lab reveal" ref={ref} aria-labelledby="design-your-lab-heading">
      <div className="design-your-lab__inner">
        <div className="design-your-lab__copy">
          <p className="design-your-lab__eyebrow">{copy.eyebrow}</p>
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
    </section>
  )
}
