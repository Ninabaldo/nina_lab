import { useEffect, useMemo, useState } from 'react'
import {
  ADDON_IDS,
  ADDON_PRICES_EUR,
  BASE_IMPLEMENTATION_EUR,
  MAINTENANCE_PRICES_EUR,
  type AddonId,
  type MaintenanceId,
  buildProposalMailBody,
  formatEuro,
  sumSelectedAddons,
} from './pricing'
import { AnimatedTotal } from './AnimatedTotal'
import { CentreDemoSyncBanner } from './CentreDemoSyncBanner'
import { CentreDemoProvider } from './centreDemoContext'
import { CentreProposalStickyBudget } from './CentreProposalStickyBudget'
import { DashboardMockup } from './DashboardMockup'
import { StudentAppMockup } from './StudentAppMockup'
import { useCentreProposalCopy } from './useCentreProposalCopy'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './CentreProposalApp.css'

const PROPOSAL_EMAIL = 'holaninabaldo@gmail.com'

const PER_MONTH: Record<string, string> = {
  ca: '/mes',
  es: '/mes',
  en: '/mo',
  fr: '/mois',
}

const initialAddons = (): Record<AddonId, boolean> =>
  Object.fromEntries(ADDON_IDS.map((id) => [id, false])) as Record<AddonId, boolean>

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function CentreProposalApp() {
  const copy = useCentreProposalCopy()
  const { language } = useSiteLanguage()
  const [selectedAddons, setSelectedAddons] = useState(initialAddons)
  const [maintenanceId, setMaintenanceId] = useState<MaintenanceId>('none')
  const [pricePulse, setPricePulse] = useState(0)
  const experiencesRef = useScrollReveal<HTMLElement>()
  const configRef = useScrollReveal<HTMLElement>()

  const addonsTotal = useMemo(() => sumSelectedAddons(selectedAddons), [selectedAddons])
  const implementationTotal = BASE_IMPLEMENTATION_EUR + addonsTotal
  const maintenanceCopy = copy.section03.maintenance[maintenanceId]
  const perMonth = PER_MONTH[language] ?? '/mes'

  useEffect(() => {
    setPricePulse((value) => value + 1)
  }, [implementationTotal])

  const toggleAddon = (id: AddonId) => {
    setSelectedAddons((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const proposalMailHref = useMemo(() => {
    const subject = encodeURIComponent(copy.meta.mailSubject)
    const body = encodeURIComponent(
      buildProposalMailBody(selectedAddons, maintenanceId, copy, language),
    )
    return `mailto:${PROPOSAL_EMAIL}?subject=${subject}&body=${body}`
  }, [selectedAddons, maintenanceId, copy, language])

  return (
    <div className="centre-proposal">
      <CentreProposalStickyBudget
        implementationTotal={implementationTotal}
        pulseKey={pricePulse}
      />
      <header className="centre-proposal__hero centre-proposal__hero--animated">
        <div className="centre-proposal__hero-inner">
          <p className="centre-proposal__eyebrow">{copy.hero.eyebrow}</p>
          <h1 className="centre-proposal__title">{copy.hero.title}</h1>
          <p className="centre-proposal__lead">{copy.hero.lead}</p>
          <p className="centre-proposal__intro">{copy.hero.intro}</p>
          <div className="centre-proposal__hero-actions">
            <button
              type="button"
              className="centre-proposal__button centre-proposal__button--primary"
              onClick={() => scrollToId('experiencies')}
            >
              {copy.hero.ctaExplore}
            </button>
            <button
              type="button"
              className="centre-proposal__button centre-proposal__button--ghost"
              onClick={() => scrollToId('configura')}
            >
              {copy.hero.ctaBudget}
            </button>
          </div>
        </div>
      </header>

      <main className="centre-proposal__main">
        <section
          id="experiencies"
          ref={experiencesRef}
          className="centre-proposal__section reveal"
          aria-labelledby="centre-proposal-exp-heading"
        >
          <p className="centre-proposal__section-index">{copy.section01.index}</p>
          <h2 id="centre-proposal-exp-heading" className="centre-proposal__section-title">
            {copy.section01.title}
          </h2>

          <CentreDemoProvider>
            <CentreDemoSyncBanner />
            <div className="centre-proposal__profiles">
            <article className="centre-proposal__profile">
              <div className="centre-proposal__profile-copy">
                <h3 className="centre-proposal__profile-title">{copy.section01.student.title}</h3>
                <p className="centre-proposal__profile-lead">{copy.section01.student.lead}</p>
                <p className="centre-proposal__profile-demo-label">
                  {copy.section01.student.demoLabel}
                </p>
                <ul className="centre-proposal__feature-list">
                  {copy.section01.student.features.map((feature) => (
                    <li key={feature.label}>
                      <strong>{feature.label}:</strong> {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="centre-proposal__profile-links">
                  <a href="/proposta-centre/alumnes" className="centre-proposal__link-button">
                    {copy.section01.student.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                  <span className="centre-proposal__link-hint">{copy.section01.student.openFull}</span>
                </div>
              </div>
              <div className="centre-proposal__profile-mock">
                <StudentAppMockup copy={copy} compact />
              </div>
            </article>

            <article className="centre-proposal__profile">
              <div className="centre-proposal__profile-copy">
                <h3 className="centre-proposal__profile-title">{copy.section01.dashboard.title}</h3>
                <p className="centre-proposal__profile-lead">{copy.section01.dashboard.lead}</p>
                <p className="centre-proposal__profile-demo-label">
                  {copy.section01.dashboard.demoLabel}
                </p>
                <ul className="centre-proposal__feature-list">
                  {copy.section01.dashboard.features.map((feature) => (
                    <li key={feature.label}>
                      <strong>{feature.label}:</strong> {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="centre-proposal__profile-links">
                  <a href="/proposta-centre/dashboard" className="centre-proposal__link-button">
                    {copy.section01.dashboard.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                  <span className="centre-proposal__link-hint">
                    {copy.section01.dashboard.openFull}
                  </span>
                </div>
              </div>
              <div className="centre-proposal__profile-mock centre-proposal__profile-mock--wide">
                <DashboardMockup copy={copy} compact />
              </div>
            </article>
            </div>
          </CentreDemoProvider>
        </section>

        <section
          id="configura"
          ref={configRef}
          className="centre-proposal__section reveal"
          aria-labelledby="centre-proposal-config-heading"
        >
          <p className="centre-proposal__section-index">{copy.section02.index}</p>
          <h2 id="centre-proposal-config-heading" className="centre-proposal__section-title">
            {copy.section02.title}
          </h2>
          <p className="centre-proposal__section-lead">{copy.section02.lead}</p>

          <article className="centre-proposal__base-card">
            <div className="centre-proposal__base-head">
              <div>
                <h3 className="centre-proposal__card-title">{copy.section02.base.title}</h3>
                <p className="centre-proposal__card-subtitle">{copy.section02.base.subtitle}</p>
              </div>
              <p className="centre-proposal__price-tag">
                {formatEuro(BASE_IMPLEMENTATION_EUR, language)}
                <span className="centre-proposal__price-tag-note">
                  {copy.section02.base.priceNote}
                </span>
              </p>
            </div>
            <p className="centre-proposal__includes-label">{copy.section02.base.includesLabel}</p>
            <ul className="centre-proposal__includes">
              {copy.section02.base.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="centre-proposal__base-note">{copy.section02.base.footnote}</p>
          </article>

          <h3 className="centre-proposal__subsection-title">{copy.section02.addonsTitle}</h3>
          <p className="centre-proposal__subsection-lead">{copy.section02.addonsLead}</p>

          <ul className="centre-proposal__addon-list">
            {ADDON_IDS.map((id) => {
              const addon = copy.section02.addons[id]
              const checked = selectedAddons[id]
              return (
                <li key={id}>
                  <label
                    className={`centre-proposal__addon${checked ? ' centre-proposal__addon--on' : ''}`}
                  >
                    <input
                      type="checkbox"
                      className="centre-proposal__addon-input"
                      checked={checked}
                      onChange={() => toggleAddon(id)}
                    />
                    <span className="centre-proposal__addon-body">
                      <span className="centre-proposal__addon-head">
                        <span className="centre-proposal__addon-title">{addon.title}</span>
                        <span
                          className={`centre-proposal__addon-price${
                            checked ? ' centre-proposal__addon-price--on' : ''
                          }`}
                        >
                          {checked ? copy.section02.addonIncluded : null}
                          <span className="centre-proposal__addon-price-value">
                            {formatEuro(ADDON_PRICES_EUR[id], language)}
                          </span>
                        </span>
                      </span>
                      <span className="centre-proposal__addon-desc">{addon.description}</span>
                      {addon.detail ? (
                        <span className="centre-proposal__addon-detail">{addon.detail}</span>
                      ) : null}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>

          <p className="centre-proposal__addons-running" aria-live="polite" aria-atomic="true">
            <span>{copy.section02.addonsRunningTotal}</span>
            <strong key={pricePulse} className="centre-proposal__addons-running-value">
              {formatEuro(addonsTotal, language)}
            </strong>
          </p>
        </section>

        <section
          className="centre-proposal__section"
          aria-labelledby="centre-proposal-maint-heading"
        >
          <p className="centre-proposal__section-index">{copy.section03.index}</p>
          <h2 id="centre-proposal-maint-heading" className="centre-proposal__section-title">
            {copy.section03.title}
          </h2>
          <p className="centre-proposal__section-lead">{copy.section03.lead}</p>

          <div
            className="centre-proposal__maintenance-list"
            role="radiogroup"
            aria-label={copy.section03.maintenanceGroupLabel}
          >
            {(['none', 'basic', 'extended'] as MaintenanceId[]).map((id) => {
              const option = copy.section03.maintenance[id]
              const selected = maintenanceId === id
              const monthly = MAINTENANCE_PRICES_EUR[id]
              return (
                <label
                  key={id}
                  className={`centre-proposal__maintenance${selected ? ' centre-proposal__maintenance--on' : ''}`}
                >
                  <input
                    type="radio"
                    name="maintenance"
                    className="centre-proposal__maintenance-input"
                    checked={selected}
                    onChange={() => setMaintenanceId(id)}
                  />
                  <span className="centre-proposal__maintenance-body">
                    <span className="centre-proposal__maintenance-head">
                      <span className="centre-proposal__maintenance-title">{option.title}</span>
                      {monthly > 0 ? (
                        <span className="centre-proposal__maintenance-price">
                          {formatEuro(monthly, language)}
                          {perMonth}
                        </span>
                      ) : null}
                    </span>
                    <span className="centre-proposal__maintenance-desc">{option.description}</span>
                    {option.includes ? (
                      <ul className="centre-proposal__maintenance-includes">
                        {option.includes.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : null}
                    {option.extra ? (
                      <span className="centre-proposal__maintenance-extra">{option.extra}</span>
                    ) : null}
                  </span>
                </label>
              )
            })}
          </div>
        </section>

        <section
          id="proposta"
          className="centre-proposal__section centre-proposal__section--summary"
          aria-labelledby="centre-proposal-summary-heading"
        >
          <p className="centre-proposal__section-index">{copy.section04.index}</p>
          <h2 id="centre-proposal-summary-heading" className="centre-proposal__section-title">
            {copy.section04.title}
          </h2>
          <p className="centre-proposal__section-lead">{copy.section04.lead}</p>

          <div className="centre-proposal__summary">
            <dl className="centre-proposal__summary-lines">
              <div className="centre-proposal__summary-row">
                <dt>{copy.section04.rows.base}</dt>
                <dd>{formatEuro(BASE_IMPLEMENTATION_EUR, language)}</dd>
              </div>
              {ADDON_IDS.filter((id) => selectedAddons[id]).map((id) => (
                <div
                  key={id}
                  className="centre-proposal__summary-row centre-proposal__summary-row--detail"
                >
                  <dt>{copy.section02.addons[id].title}</dt>
                  <dd>{formatEuro(ADDON_PRICES_EUR[id], language)}</dd>
                </div>
              ))}
              <div className="centre-proposal__summary-row">
                <dt>{copy.section04.rows.addons}</dt>
                <AnimatedTotal
                  pulseKey={pricePulse}
                  value={
                    addonsTotal > 0
                      ? formatEuro(addonsTotal, language)
                      : copy.section04.rows.addonsNone
                  }
                />
              </div>
              <div className="centre-proposal__summary-row centre-proposal__summary-row--total">
                <dt>{copy.section04.rows.implementation}</dt>
                <AnimatedTotal
                  pulseKey={pricePulse}
                  value={formatEuro(implementationTotal, language)}
                />
              </div>
              <div className="centre-proposal__summary-row">
                <dt>{copy.section04.rows.maintenance}</dt>
                <dd>
                  {maintenanceCopy && MAINTENANCE_PRICES_EUR[maintenanceId] > 0
                    ? `${maintenanceCopy.title} · ${formatEuro(MAINTENANCE_PRICES_EUR[maintenanceId], language)}${perMonth}`
                    : copy.section04.rows.maintenanceOptional}
                </dd>
              </div>
            </dl>

            <a
              href={proposalMailHref}
              className="centre-proposal__button centre-proposal__button--primary"
            >
              {copy.section04.cta}
            </a>
          </div>
        </section>

        <section
          className="centre-proposal__section centre-proposal__section--closing"
          aria-labelledby="centre-proposal-next-heading"
        >
          <p className="centre-proposal__section-index">{copy.section05.index}</p>
          <h2 id="centre-proposal-next-heading" className="centre-proposal__section-title">
            {copy.section05.title}
          </h2>
          {copy.section05.paragraphs.map((paragraph) => (
            <p key={paragraph} className="centre-proposal__closing-text">
              {paragraph}
            </p>
          ))}

          <aside className="centre-proposal__notes" aria-labelledby="centre-proposal-notes-heading">
            <h3 id="centre-proposal-notes-heading" className="centre-proposal__notes-title">
              {copy.section05.notesTitle}
            </h3>
            <ul>
              {copy.section05.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </aside>
        </section>
      </main>

      <footer className="centre-proposal__footer">
        <p>{copy.footer}</p>
      </footer>
    </div>
  )
}
