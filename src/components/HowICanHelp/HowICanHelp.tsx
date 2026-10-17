import type { CSSProperties } from 'react'
import { serviceIds } from '../../data/services'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './HowICanHelp.css'

export function HowICanHelp() {
  const headerRef = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()
  const copy = t.services

  return (
    <section
      id="serveis"
      className="how-i-can-help"
      aria-labelledby="services-heading"
    >
      <div className="how-i-can-help__inner">
        <header className="how-i-can-help__header reveal" ref={headerRef}>
          <p className="how-i-can-help__eyebrow">{copy.eyebrow}</p>
          <h2 id="services-heading" className="how-i-can-help__title">
            {copy.title}
          </h2>
          <p className="how-i-can-help__lead">{copy.lead}</p>
        </header>

        <ul className="how-i-can-help__grid">
          {serviceIds.map((id, index) => {
            const item = copy.items[id]
            if (!item) return null

            return (
              <li key={id}>
                <article
                  className="how-i-can-help__card reveal"
                  style={{ '--reveal-delay': `${index * 0.06}s` } as CSSProperties}
                >
                  <span className="how-i-can-help__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="how-i-can-help__card-title">{item.title}</h3>
                  <p className="how-i-can-help__card-text">{item.description}</p>
                </article>
              </li>
            )
          })}
        </ul>

        <div className="how-i-can-help__footer reveal">
          <a href={copy.ctaHref} className="how-i-can-help__cta">
            {copy.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
