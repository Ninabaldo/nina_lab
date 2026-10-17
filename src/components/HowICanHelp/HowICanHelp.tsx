import type { CSSProperties } from 'react'
import { serviceIds } from '../../data/services'
import type { ServiceId } from '../../data/services'
import type { ServiceOfferingCopy } from '../../i18n/types'
import { ServicePreview } from './ServicePreview'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { ScrollReveal } from '../ScrollReveal/ScrollReveal'
import './HowICanHelp.css'

interface ServiceCardProps {
  serviceId: ServiceId
  index: number
  item: ServiceOfferingCopy
  modelLabel: string
}

function ServiceCard({ serviceId, index, item, modelLabel }: ServiceCardProps) {
  return (
    <ScrollReveal
      as="article"
      className="how-i-can-help__card"
      style={{ '--reveal-delay': `${index * 0.06}s` } as CSSProperties}
    >
      <ServicePreview serviceId={serviceId} />
      <div className="how-i-can-help__card-body">
        <span className="how-i-can-help__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="how-i-can-help__card-title">{item.title}</h3>
        <p className="how-i-can-help__card-text">{item.description}</p>
        <p className="how-i-can-help__model">
        <span className="how-i-can-help__model-label">{modelLabel}</span>
          {item.model}
        </p>
      </div>
    </ScrollReveal>
  )
}

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
                <ServiceCard
                  serviceId={id}
                  index={index}
                  item={item}
                  modelLabel={copy.modelLabel}
                />
              </li>
            )
          })}
        </ul>

        <ScrollReveal className="how-i-can-help__footer">
          <a href={copy.ctaHref} className="how-i-can-help__cta">
            {copy.cta}
            <span aria-hidden="true">→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
