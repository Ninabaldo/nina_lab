import { useEffect, useState } from 'react'
import { formatEuro } from './pricing'
import { useCentreProposalCopy } from './useCentreProposalCopy'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './CentreProposalApp.css'

interface CentreProposalStickyBudgetProps {
  implementationTotal: number
  pulseKey: number
}

export function CentreProposalStickyBudget({
  implementationTotal,
  pulseKey,
}: CentreProposalStickyBudgetProps) {
  const copy = useCentreProposalCopy()
  const { language } = useSiteLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const config = document.getElementById('configura')
    const summary = document.getElementById('proposta')
    if (!config || !summary) return

    const observer = new IntersectionObserver(
      (entries) => {
        const configHit = entries.find((e) => e.target === config)
        const summaryHit = entries.find((e) => e.target === summary)
        if (configHit?.isIntersecting) {
          setVisible(true)
          return
        }
        if (summaryHit?.isIntersecting && summaryHit.intersectionRatio > 0.35) {
          setVisible(false)
        }
      },
      { threshold: [0, 0.15, 0.35] },
    )

    observer.observe(config)
    observer.observe(summary)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`centre-proposal__sticky${visible ? ' centre-proposal__sticky--on' : ''}`}
      aria-hidden={!visible}
    >
      <div className="centre-proposal__sticky-inner">
        <p className="centre-proposal__sticky-label">{copy.configurator.summary.implementation}</p>
        <p key={pulseKey} className="centre-proposal__sticky-total centre-proposal__price--pulse">
          {formatEuro(implementationTotal, language)}
        </p>
        <button
          type="button"
          className="centre-proposal__sticky-cta"
          onClick={() =>
            document.getElementById('proposta')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          {copy.configurator.summary.mobileCta}
        </button>
      </div>
    </div>
  )
}
