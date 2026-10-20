import { useState } from 'react'
import type { CentreProposalCopy, CentreProposalDashTab } from '../../i18n/centreProposal/types'
import './CentreProposalApp.css'

const TAB_ORDER: CentreProposalDashTab[] = [
  'resum',
  'calendari',
  'classes',
  'alumnes',
  'abonaments',
]

interface DashboardMockupProps {
  copy: CentreProposalCopy
  compact?: boolean
}

export function DashboardMockup({ copy, compact = false }: DashboardMockupProps) {
  const [tab, setTab] = useState<CentreProposalDashTab>('resum')
  const demo = copy.demo

  return (
    <div
      className={`centre-demo__dash centre-demo__dash--mock${compact ? ' centre-demo__dash--compact' : ''}`}
      aria-label={demo.dashboardBadge}
    >
      <nav className="centre-demo__sidebar" aria-label={demo.dashboardBadge}>
        {TAB_ORDER.map((id) => (
          <button
            key={id}
            type="button"
            aria-current={tab === id ? 'page' : undefined}
            onClick={() => setTab(id)}
          >
            {demo.dashTabs[id]}
          </button>
        ))}
      </nav>

      <div className="centre-demo__panel">
        {!compact ? (
          <p className="centre-demo__panel-badge">{demo.interactiveLabel}</p>
        ) : null}

        {tab === 'resum' ? (
          <>
            <h1>{demo.dashboard.resum.title}</h1>
            <p className="centre-demo__panel-lead">{demo.dashboard.resum.lead}</p>
            <ul className="centre-demo__card-list">
              {demo.dashboard.resum.rows.map((row) => (
                <li key={row.time} className="centre-demo__card">
                  <div className="centre-demo__card-head">
                    <span>{row.time}</span>
                    <span
                      className={`centre-demo__pill${
                        row.occupancy.includes('10/10') ? ' centre-demo__pill--warn' : ''
                      }`}
                    >
                      {row.occupancy}
                    </span>
                  </div>
                  <p className="centre-demo__card-meta">{row.meta}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {tab === 'calendari' ? (
          <>
            <h1>{demo.dashboard.calendari.title}</h1>
            <p className="centre-demo__panel-lead">{demo.dashboard.calendari.lead}</p>
            <ul className="centre-demo__card-list">
              {demo.dashboard.calendari.days.map((day) => (
                <li key={day.label} className="centre-demo__card">
                  <div className="centre-demo__card-head">
                    <span>{day.label}</span>
                  </div>
                  <p className="centre-demo__card-meta">{day.meta}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {tab === 'classes' ? (
          <>
            <h1>{demo.dashboard.classes.title}</h1>
            <p className="centre-demo__panel-lead">{demo.dashboard.classes.lead}</p>
            <ul className="centre-demo__card-list">
              {demo.dashboard.classes.rows.map((row) => (
                <li key={row.name} className="centre-demo__card">
                  <div className="centre-demo__card-head">
                    <span>{row.name}</span>
                    <span>{row.capacity}</span>
                  </div>
                  <p className="centre-demo__card-meta">{row.meta}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {tab === 'alumnes' ? (
          <>
            <h1>{demo.dashboard.alumnes.title}</h1>
            <p className="centre-demo__panel-lead">{demo.dashboard.alumnes.lead}</p>
            <ul className="centre-demo__card-list">
              {demo.dashboard.alumnes.rows.map((row) => (
                <li key={row.name} className="centre-demo__card">
                  <div className="centre-demo__card-head">
                    <span>{row.name}</span>
                    <span>{row.plan}</span>
                  </div>
                  <p className="centre-demo__card-meta">{row.meta}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {tab === 'abonaments' ? (
          <>
            <h1>{demo.dashboard.abonaments.title}</h1>
            <p className="centre-demo__panel-lead">{demo.dashboard.abonaments.lead}</p>
            <ul className="centre-demo__card-list">
              {demo.dashboard.abonaments.rows.map((row) => (
                <li key={row.name} className="centre-demo__card">
                  <div className="centre-demo__card-head">
                    <span>{row.name}</span>
                    <span>{row.price}</span>
                  </div>
                  <p className="centre-demo__card-meta">{row.meta}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  )
}
