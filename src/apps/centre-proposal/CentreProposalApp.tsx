import { CentreDemoSyncBanner } from './CentreDemoSyncBanner'
import { CentreDemoProvider } from './centreDemoContext'
import { CentreProposalConfigurator } from './CentreProposalConfigurator'
import { DashboardMockup } from './DashboardMockup'
import { StudentAppMockup } from './StudentAppMockup'
import { useCentreProposalCopy } from './useCentreProposalCopy'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './CentreProposalApp.css'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function CentreProposalApp() {
  const copy = useCentreProposalCopy()
  const experiencesRef = useScrollReveal<HTMLElement>()
  const configRef = useScrollReveal<HTMLElement>()

  return (
    <div className="centre-proposal">
      <header className="centre-proposal__hero centre-proposal__hero--animated">
        <div className="centre-proposal__hero-decor" aria-hidden="true">
          <span className="centre-proposal__hero-orb centre-proposal__hero-orb--1" />
          <span className="centre-proposal__hero-orb centre-proposal__hero-orb--2" />
          <span className="centre-proposal__hero-orb centre-proposal__hero-orb--3" />
        </div>
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
                    <span className="centre-proposal__link-hint">
                      {copy.section01.student.openFull}
                    </span>
                  </div>
                </div>
                <div className="centre-proposal__profile-mock">
                  <StudentAppMockup copy={copy} compact />
                </div>
              </article>

              <article className="centre-proposal__profile">
                <div className="centre-proposal__profile-copy">
                  <h3 className="centre-proposal__profile-title">
                    {copy.section01.dashboard.title}
                  </h3>
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

          <CentreProposalConfigurator copy={copy} />
        </section>

        <section
          className="centre-proposal__section centre-proposal__section--closing"
          aria-labelledby="centre-proposal-next-heading"
        >
          <p className="centre-proposal__section-index">{copy.section05.index}</p>
          <h2 id="centre-proposal-next-heading" className="centre-proposal__section-title">
            {copy.section05.title}
          </h2>
          <p className="centre-proposal__closing-text">{copy.section05.intro}</p>
          <ul className="centre-proposal__closing-steps">
            {copy.section05.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          {copy.section05.closing.map((paragraph) => (
            <p key={paragraph} className="centre-proposal__closing-text">
              {paragraph}
            </p>
          ))}
        </section>
      </main>

      <footer className="centre-proposal__footer">
        <p>{copy.footer}</p>
      </footer>
    </div>
  )
}
