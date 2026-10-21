import { useEffect, useMemo, useState } from 'react'
import type { CentreProposalCopy } from '../../i18n/centreProposal/types'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { CentreProposalBudgetSummary } from './CentreProposalBudgetSummary'
import { CentreProposalStickyBudget } from './CentreProposalStickyBudget'
import {
  ADDON_GROUPS,
  ADDON_PRICES_EUR,
  MAINTENANCE_IDS,
  MAINTENANCE_PRICES_EUR,
  SOFTWARE_IDS,
  SOFTWARE_PRICES_EUR,
  STORE_PUBLISHING_EUR,
  type AddonId,
  type ConfiguratorStep,
  type MaintenanceId,
  type SoftwareId,
  buildProposalText,
  computeImplementationTotal,
  formatEuro,
  initialAddons,
  isAddonIncluded,
  sanitizeAddonsForSoftware,
  softwareHasApps,
} from './pricing'

function SoftwareVisual({ variant }: { variant: SoftwareId }) {
  return (
    <div className={`cp-soft-visual cp-soft-visual--${variant}`} aria-hidden="true">
      <div className="cp-soft-visual__bar" />
      {variant !== 'web' ? <div className="cp-soft-visual__phone" /> : null}
      {variant === 'full' ? <div className="cp-soft-visual__panel" /> : null}
    </div>
  )
}

const PER_MONTH: Record<string, string> = {
  ca: '/mes',
  es: '/mes',
  en: '/mo',
  fr: '/mois',
  it: '/mese',
}

function PlanTimelineBadge({
  label,
  timeline,
  className,
}: {
  label: string
  timeline: string
  className?: string
}) {
  return (
    <span className={`cp-timeline-badge${className ? ` ${className}` : ''}`}>
      {label} {timeline}
    </span>
  )
}

function ConfiguratorStepNav({
  backLabel,
  changePlanLabel,
  onBack,
  onChangePlan,
  showChangePlan,
}: {
  backLabel: string
  changePlanLabel: string
  onBack: () => void
  onChangePlan: () => void
  showChangePlan: boolean
}) {
  return (
    <div className="cp-config__step-nav" role="navigation" aria-label={backLabel}>
      <button
        type="button"
        className="centre-proposal__button centre-proposal__button--ghost cp-config__nav-btn"
        onClick={onBack}
      >
        ← {backLabel}
      </button>
      {showChangePlan ? (
        <button
          type="button"
          className="centre-proposal__button centre-proposal__button--ghost cp-config__nav-btn cp-config__nav-btn--accent"
          onClick={onChangePlan}
        >
          {changePlanLabel}
        </button>
      ) : null}
    </div>
  )
}

export function CentreProposalConfigurator({ copy }: { copy: CentreProposalCopy }) {
  const { language } = useSiteLanguage()
  const cfg = copy.configurator
  const perMonth = PER_MONTH[language] ?? '/mes'

  const [step, setStep] = useState<ConfiguratorStep>(1)
  const [softwareId, setSoftwareId] = useState<SoftwareId>('webApp')
  const [selectedAddons, setSelectedAddons] = useState(initialAddons)
  const [storePublishing, setStorePublishing] = useState(true)
  const [maintenanceId, setMaintenanceId] = useState<MaintenanceId>('none')
  const [includesModal, setIncludesModal] = useState<SoftwareId | null>(null)
  const [proposalOpen, setProposalOpen] = useState(false)
  const [copyState, setCopyState] = useState<'idle' | 'ok' | 'err'>('idle')
  const [pulseKey, setPulseKey] = useState(0)

  const implementationTotal = useMemo(
    () => computeImplementationTotal(softwareId, selectedAddons, storePublishing),
    [softwareId, selectedAddons, storePublishing],
  )

  useEffect(() => {
    setPulseKey((v) => v + 1)
  }, [implementationTotal])

  const selectSoftware = (id: SoftwareId) => {
    setSoftwareId(id)
    setSelectedAddons((prev) => sanitizeAddonsForSoftware(id, prev))
    if (!softwareHasApps(id)) setStorePublishing(false)
    else setStorePublishing(true)
    setStep(2)
  }

  const toggleAddon = (id: AddonId) => {
    if (isAddonIncluded(softwareId, id)) return
    setSelectedAddons((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const proposalText = useMemo(
    () =>
      buildProposalText(
        softwareId,
        selectedAddons,
        storePublishing,
        maintenanceId,
        copy,
        language,
      ),
    [softwareId, selectedAddons, storePublishing, maintenanceId, copy, language],
  )

  const copyProposal = async () => {
    try {
      await navigator.clipboard.writeText(proposalText)
      setCopyState('ok')
      window.setTimeout(() => setCopyState('idle'), 2200)
    } catch {
      setCopyState('err')
    }
  }

  const openProposal = () => {
    setProposalOpen(true)
    document.getElementById('proposta')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="cp-config">
      <CentreProposalStickyBudget implementationTotal={implementationTotal} pulseKey={pulseKey} />
      <ol className="cp-config__progress" aria-label={copy.section02.title}>
        {(
          [
            [1, cfg.progress.software],
            [2, cfg.progress.customize],
            [3, cfg.progress.maintenance],
          ] as const
        ).map(([n, label]) => (
          <li
            key={n}
            className={`cp-config__progress-item${step === n ? ' is-current' : ''}${
              step > n ? ' is-done' : ''
            }`}
          >
            <span className="cp-config__progress-dot">{n}</span>
            <span>{label}</span>
          </li>
        ))}
      </ol>

      <div className="cp-config__layout">
        <div className="cp-config__main">
          {step === 1 ? (
            <div className="cp-config__step" key="step-1">
              <h3 className="cp-config__step-title">{cfg.step1.title}</h3>
              <p className="cp-config__step-lead">{cfg.step1.lead}</p>
              <p className="cp-config__step-note">{cfg.step1.storeExcludedNote}</p>

              <ul className="cp-soft-grid">
                {SOFTWARE_IDS.map((id) => {
                  const pack = cfg.software[id]
                  const selected = softwareId === id
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        className={`cp-soft-card${selected ? ' cp-soft-card--on' : ''}`}
                        onClick={() => selectSoftware(id)}
                      >
                        <SoftwareVisual variant={id} />
                        <span className="cp-soft-card__price">
                          {formatEuro(SOFTWARE_PRICES_EUR[id], language)}
                          <span className="cp-soft-card__price-note">{cfg.step1.priceNote}</span>
                        </span>
                        <span className="cp-soft-card__title">{pack.title}</span>
                        <PlanTimelineBadge
                          className="cp-soft-card__timeline"
                          label={cfg.step1.timelineLabel}
                          timeline={pack.timeline}
                        />
                        <span className="cp-soft-card__tagline">{pack.tagline}</span>
                        <ul className="cp-soft-card__highlights">
                          {pack.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                        <span
                          role="button"
                          tabIndex={0}
                          className="cp-soft-card__includes-link"
                          onClick={(e) => {
                            e.stopPropagation()
                            setIncludesModal(id)
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              e.stopPropagation()
                              setIncludesModal(id)
                            }
                          }}
                        >
                          {cfg.step1.seeIncludes}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
              <div className="cp-config__timeline-disclaimer">
                {cfg.step1.timelineDisclaimer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="cp-config__step" key="step-2">
              <div className="cp-config__step-head">
                <ConfiguratorStepNav
                  backLabel={cfg.nav.back}
                  changePlanLabel={cfg.step1.changePlan}
                  onBack={() => setStep(1)}
                  onChangePlan={() => setStep(1)}
                  showChangePlan
                />
                <p className="cp-config__current-plan">
                  <span className="cp-config__current-plan-label">{cfg.summary.software}</span>
                  <span className="cp-config__current-plan-name">{cfg.software[softwareId].title}</span>
                </p>
                <h3 className="cp-config__step-title">{cfg.step2.title}</h3>
                <p className="cp-config__step-lead">{cfg.step2.lead}</p>
                <p className="cp-config__plan-timeline">
                  <PlanTimelineBadge
                    label={cfg.step1.timelineLabel}
                    timeline={cfg.software[softwareId].timeline}
                  />
                </p>
              </div>

              {ADDON_GROUPS.map((group) => (
                <div key={group.id} className="cp-addon-group">
                  <h4 className="cp-addon-group__title">{cfg.step2.groups[group.id]}</h4>
                  <ul className="cp-addon-list">
                    {group.addonIds.map((id) => {
                      const addon = copy.section02.addons[id]
                      const included = isAddonIncluded(softwareId, id)
                      const on = included || selectedAddons[id]
                      return (
                        <li key={id}>
                          <div
                            className={`cp-addon-row${on ? ' cp-addon-row--on' : ''}${
                              included ? ' cp-addon-row--included' : ''
                            }`}
                          >
                            <div className="cp-addon-row__copy">
                              <span className="cp-addon-row__title">{addon.title}</span>
                              <span className="cp-addon-row__desc">{addon.description}</span>
                            </div>
                            <span className="cp-addon-row__price">
                              {included ? cfg.step2.includedBadge : formatEuro(ADDON_PRICES_EUR[id], language)}
                            </span>
                            {included ? (
                              <span className="cp-addon-row__badge">{cfg.step2.includedBadge}</span>
                            ) : (
                              <button
                                type="button"
                                className="cp-addon-row__toggle"
                                aria-pressed={selectedAddons[id]}
                                onClick={() => toggleAddon(id)}
                              >
                                {selectedAddons[id] ? cfg.step2.removeLabel : cfg.step2.addLabel}
                              </button>
                            )}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}

              {softwareHasApps(softwareId) ? (
                <div className="cp-store-card">
                  <div className="cp-store-card__copy">
                    <h4 className="cp-store-card__title">{cfg.step2.storePublishing.title}</h4>
                    <p className="cp-store-card__desc">{cfg.step2.storePublishing.description}</p>
                    {!storePublishing ? (
                      <p className="cp-store-card__note">{cfg.step2.storePublishing.offNote}</p>
                    ) : null}
                  </div>
                  <span className="cp-store-card__price">
                    {formatEuro(STORE_PUBLISHING_EUR, language)}
                  </span>
                  <button
                    type="button"
                    className="cp-addon-row__toggle"
                    aria-pressed={storePublishing}
                    onClick={() => setStorePublishing((v) => !v)}
                  >
                    {storePublishing ? cfg.step2.removeLabel : cfg.step2.addLabel}
                  </button>
                </div>
              ) : null}

              <button
                type="button"
                className="centre-proposal__button centre-proposal__button--primary cp-config__continue"
                onClick={() => setStep(3)}
              >
                {cfg.nav.continue}
              </button>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="cp-config__step" key="step-3">
              <div className="cp-config__step-head">
                <ConfiguratorStepNav
                  backLabel={cfg.nav.back}
                  changePlanLabel={cfg.step1.changePlan}
                  onBack={() => setStep(2)}
                  onChangePlan={() => setStep(1)}
                  showChangePlan
                />
                <p className="cp-config__current-plan">
                  <span className="cp-config__current-plan-label">{cfg.summary.software}</span>
                  <span className="cp-config__current-plan-name">{cfg.software[softwareId].title}</span>
                </p>
                <h3 className="cp-config__step-title">{cfg.step3.title}</h3>
                <p className="cp-config__step-lead">{cfg.step3.lead}</p>
                <p className="cp-config__plan-timeline">
                  <PlanTimelineBadge
                    label={cfg.step1.timelineLabel}
                    timeline={cfg.software[softwareId].timeline}
                  />
                </p>
              </div>

              <ul className="cp-maint-grid" role="radiogroup" aria-label={copy.section03.maintenanceGroupLabel}>
                {MAINTENANCE_IDS.map((id) => {
                  const option = cfg.maintenance[id]
                  const selected = maintenanceId === id
                  const monthly = MAINTENANCE_PRICES_EUR[id]
                  return (
                    <li key={id}>
                      <label
                        className={`cp-maint-card${selected ? ' cp-maint-card--on' : ''}`}
                      >
                        <input
                          type="radio"
                          name="cp-maintenance"
                          className="cp-maint-card__input"
                          checked={selected}
                          onChange={() => setMaintenanceId(id)}
                        />
                        <span className="cp-maint-card__price">
                          {monthly > 0
                            ? `${formatEuro(monthly, language)}${perMonth}`
                            : formatEuro(0, language)}
                        </span>
                        <span className="cp-maint-card__title">{option.title}</span>
                        <span className="cp-maint-card__desc">{option.description}</span>
                        {option.includes ? (
                          <ul className="cp-maint-card__includes">
                            {option.includes.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        ) : null}
                      </label>
                    </li>
                  )
                })}
              </ul>

              <button
                type="button"
                className="centre-proposal__button centre-proposal__button--primary cp-config__continue"
                onClick={openProposal}
              >
                {cfg.proposal.prepareCta}
              </button>
            </div>
          ) : null}
        </div>

        <CentreProposalBudgetSummary
          copy={copy}
          language={language}
          softwareId={softwareId}
          selectedAddons={selectedAddons}
          storePublishing={storePublishing}
          maintenanceId={maintenanceId}
          implementationTotal={implementationTotal}
          pulseKey={pulseKey}
          onPrepare={step === 3 ? openProposal : undefined}
        />
      </div>

      <div className="cp-config__mobile-bar" aria-hidden={false}>
        <div className="cp-config__mobile-bar-main">
          <p className="cp-config__mobile-total">
            <span>{cfg.summary.implementation}</span>
            <strong key={pulseKey}>{formatEuro(implementationTotal, language)}</strong>
          </p>
          <p className="cp-config__mobile-timeline">
            {cfg.step1.timelineLabel} {cfg.software[softwareId].timeline}
          </p>
        </div>
        <button
          type="button"
          className="centre-proposal__sticky-cta"
          onClick={openProposal}
        >
          {cfg.summary.mobileCta}
        </button>
      </div>

      {includesModal ? (
        <div
          className="cp-modal-backdrop"
          role="presentation"
          onClick={() => setIncludesModal(null)}
        >
          <dialog
            className="cp-modal"
            open
            aria-labelledby="cp-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 id="cp-modal-title" className="cp-modal__title">
              {cfg.software[includesModal].title}
            </h4>
            <ul className="cp-modal__list">
              {cfg.software[includesModal].includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <button
              type="button"
              className="centre-proposal__button centre-proposal__button--ghost"
              onClick={() => setIncludesModal(null)}
            >
              {cfg.step1.closeIncludes}
            </button>
          </dialog>
        </div>
      ) : null}

      <section
        id="proposta"
        className={`cp-proposal${proposalOpen ? ' cp-proposal--open' : ''}`}
        aria-labelledby="cp-proposal-heading"
      >
        <h3 id="cp-proposal-heading" className="cp-proposal__title">
          {cfg.proposal.title}
        </h3>
        <p className="cp-proposal__lead">{cfg.proposal.readyLead}</p>

        <CentreProposalBudgetSummary
          copy={copy}
          language={language}
          softwareId={softwareId}
          selectedAddons={selectedAddons}
          storePublishing={storePublishing}
          maintenanceId={maintenanceId}
          implementationTotal={implementationTotal}
          pulseKey={pulseKey}
          compact
          showStoreFees
        />

        <pre className="cp-proposal__text">{proposalText}</pre>

        <div className="cp-proposal__actions">
          <button
            type="button"
            className="centre-proposal__button centre-proposal__button--primary"
            onClick={() => void copyProposal()}
          >
            {copyState === 'ok' ? cfg.proposal.copied : cfg.proposal.copyCta}
          </button>
          <button
            type="button"
            className="centre-proposal__button centre-proposal__button--ghost"
            onClick={() => {
              setProposalOpen(false)
              setStep(1)
              document.getElementById('configura')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {cfg.proposal.editCta}
          </button>
        </div>
        {copyState === 'err' ? (
          <p className="cp-proposal__error" role="alert">
            {cfg.proposal.copyError}
          </p>
        ) : null}
      </section>
    </div>
  )
}
