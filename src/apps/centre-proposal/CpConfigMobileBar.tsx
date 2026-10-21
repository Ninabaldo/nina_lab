import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { CentreProposalCopy } from '../../i18n/centreProposal/types'
import type { Language } from '../../lib/preferences'
import { useCentreProposalPager } from './centreProposalPagerContext'
import { CpPdfBusyLabel } from './CpPdfBusyLabel'
import {
  MAINTENANCE_PRICES_EUR,
  type ConfiguratorStep,
  type MaintenanceId,
  formatEuro,
} from './pricing'

const PER_MONTH: Record<string, string> = {
  ca: '/mes',
  es: '/mes',
  en: '/mo',
  fr: '/mois',
  it: '/mese',
}

function useMobileConfiguratorLayout(): boolean {
  const [mobile, setMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 959px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 959px)')
    const sync = () => setMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return mobile
}

function useConfigMobileBarVisible(): boolean {
  const pager = useCentreProposalPager()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (pager?.enabled) {
      setInView(pager.activeIndex === 3)
      return
    }

    const target = document.getElementById('configura')
    if (!target) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) setInView(entry.isIntersecting && entry.intersectionRatio > 0.08)
      },
      { threshold: [0, 0.08, 0.2] },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [pager?.enabled, pager?.activeIndex])

  return inView
}

interface CpConfigMobileBarProps {
  copy: CentreProposalCopy
  language: Language
  step: ConfiguratorStep
  implementationTotal: number
  pulseKey: number
  maintenanceId: MaintenanceId
  proposalOpen: boolean
  pdfBusy: boolean
  onContinue: () => void
  onPrepare: () => void
  onDownloadPdf: () => void
}

export function CpConfigMobileBar({
  copy,
  language,
  step,
  implementationTotal,
  pulseKey,
  maintenanceId,
  proposalOpen,
  pdfBusy,
  onContinue,
  onPrepare,
  onDownloadPdf,
}: CpConfigMobileBarProps) {
  const mobile = useMobileConfiguratorLayout()
  const barVisible = useConfigMobileBarVisible()
  const cfg = copy.configurator
  const perMonth = PER_MONTH[language] ?? '/mes'
  const maintenancePrice = MAINTENANCE_PRICES_EUR[maintenanceId]
  const maintenanceTitle = cfg.maintenance[maintenanceId].title

  if (!mobile || !barVisible) return null

  const handlePrimary = () => {
    if (pdfBusy) return
    if (proposalOpen) {
      onDownloadPdf()
      return
    }
    if (step === 2) {
      onContinue()
      return
    }
    if (step === 3) {
      onPrepare()
    }
  }

  const primaryDisabled = pdfBusy || step === 1
  const primaryLabel =
    proposalOpen
      ? cfg.summary.mobileCta
      : step === 1
        ? cfg.progress.software
        : step === 2
          ? cfg.nav.continue
          : cfg.proposal.prepareCta

  const bar = (
    <div className="cp-config__mobile-bar cp-config__mobile-bar--fixed" aria-hidden={false}>
      <div className="cp-config__mobile-bar-main">
        <p className="cp-config__mobile-total">
          <span>{cfg.summary.implementation}</span>
          <strong key={pulseKey} className="cp-config__mobile-total-amount centre-proposal__price--pulse">
            {formatEuro(implementationTotal, language)}
          </strong>
        </p>
        <p className="cp-config__mobile-maint">
          <span>{cfg.summary.maintenance}</span>
          <span className="cp-config__mobile-maint-value">
            {maintenancePrice > 0
              ? `${formatEuro(maintenancePrice, language)}${perMonth} · ${maintenanceTitle}`
              : cfg.summary.maintenanceNone}
          </span>
        </p>
      </div>
      <button
        type="button"
        className="centre-proposal__sticky-cta"
        disabled={primaryDisabled}
        aria-busy={pdfBusy}
        onClick={handlePrimary}
      >
        {proposalOpen ? (
          <CpPdfBusyLabel busy={false} idleText={primaryLabel} busyText="" />
        ) : (
          primaryLabel
        )}
      </button>
    </div>
  )

  return createPortal(bar, document.body)
}
