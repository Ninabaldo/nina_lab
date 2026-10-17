import type { CSSProperties } from 'react'
import { workExamples } from '../../data/workExamples'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { ScrollReveal } from '../ScrollReveal/ScrollReveal'
import { WorkExamplePreview } from './WorkExamplePreview'
import './WorkExamples.css'

export function WorkExamples() {
  const headerRef = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()
  const copy = t.workExamples

  return (
    <section
      id="exemples"
      className="work-examples"
      aria-labelledby="work-examples-heading"
    >
      <div className="work-examples__inner">
        <header className="work-examples__header reveal" ref={headerRef}>
          <p className="work-examples__eyebrow">{copy.eyebrow}</p>
          <h2 id="work-examples-heading" className="work-examples__title">
            {copy.title}
          </h2>
          <p className="work-examples__lead">{copy.lead}</p>
        </header>

        <ul className="work-examples__grid">
          {workExamples.map((example, index) => {
            const item = copy.items[example.id]
            const serviceLabel = copy.serviceTags[example.serviceId]
            if (!item) return null

            return (
              <li key={example.id}>
                <ScrollReveal
                  as="article"
                  className="work-examples__card"
                  style={{ '--reveal-delay': `${index * 0.05}s` } as CSSProperties}
                >
                  <WorkExamplePreview preview={example.preview} />
                  <div className="work-examples__body">
                    <span className="work-examples__tag">{serviceLabel}</span>
                    <h3 className="work-examples__name">{item.name}</h3>
                    <p className="work-examples__text">{item.description}</p>
                    <a href={example.href} className="work-examples__link">
                      {item.cta}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </ScrollReveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
