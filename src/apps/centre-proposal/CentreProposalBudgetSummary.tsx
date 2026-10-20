import { useState } from 'react'
import type { CentreProposalCopy } from '../../i18n/centreProposal/types'
import type { Language } from '../../lib/preferences'
import { AnimatedTotal } from './AnimatedTotal'
import {
  ADDON_IDS,
  ADDON_PRICES_EUR,
  MAINTENANCE_PRICES_EUR,
  SOFTWARE_PRICES_EUR,
  STORE_PUBLISHING_EUR,
  type AddonId,
  type MaintenanceId,
  type SoftwareId,
  formatEuro,
  isAddonIncluded,
  softwareHasApps,
  sumSelectedAddons,
} from './pricing'

const PER_MONTH: Record<string, string> = {
  ca: '/mes',
  es: '/mes',
  en: '/mo',
  fr: '/mois',
  it: '/mese',
}

type CentreProposalBudgetSummaryProps = {
  copy: CentreProposalCopy
  language: Language
  softwareId: SoftwareId
  selectedAddons: Record<AddonId, boolean>
  storePublishing: boolean
  maintenanceId: MaintenanceId
  implementationTotal: number
  pulseKey: number
  compact?: boolean
  onPrepare?: () => void
  showStoreFees?: boolean
}

export function CentreProposalBudgetSummary({
  copy,
  language,
  softwareId,
  selectedAddons,
  storePublishing,
  maintenanceId,
  implementationTotal,
  pulseKey,
  compact = false,
  onPrepare,
  showStoreFees = true,
}: CentreProposalBudgetSummaryProps) {
  const cfg = copy.configurator
  const perMonth = PER_MONTH[language] ?? '/mes'
  const [breakdownOpen, setBreakdownOpen] = useState(false)

  const software = cfg.software[softwareId]
  const addonsTotal = sumSelectedAddons(softwareId, selectedAddons)
  const paidAddons = ADDON_IDS.filter(
    (id) => !isAddonIncluded(softwareId, id) && selectedAddons[id],
  )
  const maintenancePrice = MAINTENANCE_PRICES_EUR[maintenanceId]
  const maintenanceLabel = cfg.maintenance[maintenanceId]

  return (
    <aside
      className={`cp-budget${compact ? ' cp-budget--compact' : ''}`}
      aria-labelledby="cp-budget-heading"
    >
      <h3 id="cp-budget-heading" className="cp-budget__title">
        {cfg.summary.title}
      </h3>

      <dl className="cp-budget__lines">
        <div className="cp-budget__line">
          <dt>{cfg.summary.software}</dt>
          <dd>{software.title}</dd>
        </div>
        <div className="cp-budget__line">
          <dt>{cfg.summary.addons}</dt>
          <dd>
            {paidAddons.length === 0
              ? cfg.summary.addonsNone
              : paidAddons
                  .map((id) => copy.section02.addons[id].title)
                  .join(', ')}
          </dd>
        </div>
        {softwareHasApps(softwareId) ? (
          <div className="cp-budget__line">
            <dt>{cfg.summary.storePublishing}</dt>
            <dd>
              {storePublishing
                ? formatEuro(STORE_PUBLISHING_EUR, language)
                : cfg.summary.storePublishingOff}
            </dd>
          </div>
        ) : null}
      </dl>

      <div className="cp-budget__totals">
        <p className="cp-budget__total-row">
          <span>{cfg.summary.implementation}</span>
          <AnimatedTotal
            pulseKey={pulseKey}
            className="cp-budget__amount"
            value={formatEuro(implementationTotal, language)}
          />
        </p>
        <p className="cp-budget__total-row cp-budget__total-row--muted">
          <span>{cfg.summary.maintenance}</span>
          <span className="cp-budget__amount cp-budget__amount--muted">
            {maintenancePrice > 0
              ? `${formatEuro(maintenancePrice, language)}${perMonth}`
              : cfg.summary.maintenanceNone}
            {maintenancePrice > 0 ? ` · ${maintenanceLabel.title}` : ''}
          </span>
        </p>
      </div>

      <details
        className="cp-budget__breakdown"
        open={breakdownOpen}
        onToggle={(e) => setBreakdownOpen((e.target as HTMLDetailsElement).open)}
      >
        <summary>{cfg.summary.breakdownToggle}</summary>
        <ul className="cp-budget__breakdown-list">
          <li>
            <span>{software.title}</span>
            <span>{formatEuro(SOFTWARE_PRICES_EUR[softwareId], language)}</span>
          </li>
          {paidAddons.map((id) => (
            <li key={id}>
              <span>{copy.section02.addons[id].title}</span>
              <span>{formatEuro(ADDON_PRICES_EUR[id], language)}</span>
            </li>
          ))}
          {storePublishing && softwareHasApps(softwareId) ? (
            <li>
              <span>{cfg.step2.storePublishing.title}</span>
              <span>{formatEuro(STORE_PUBLISHING_EUR, language)}</span>
            </li>
          ) : null}
          {addonsTotal === 0 && !storePublishing ? (
            <li className="cp-budget__breakdown-empty">{cfg.summary.addonsNone}</li>
          ) : null}
        </ul>
      </details>

      {showStoreFees && softwareHasApps(softwareId) ? (
        <div className="cp-budget__store-fees">
          <p className="cp-budget__store-fees-title">{cfg.summary.storeFeesTitle}</p>
          <ul>
            <li>{cfg.summary.storeFeesApple}</li>
            <li>{cfg.summary.storeFeesGoogle}</li>
          </ul>
          <p className="cp-budget__store-fees-note">{cfg.summary.storeFeesNote}</p>
        </div>
      ) : null}

      {onPrepare && !compact ? (
        <button type="button" className="centre-proposal__button centre-proposal__button--primary cp-budget__cta" onClick={onPrepare}>
          {cfg.proposal.prepareCta}
        </button>
      ) : null}
    </aside>
  )
}
