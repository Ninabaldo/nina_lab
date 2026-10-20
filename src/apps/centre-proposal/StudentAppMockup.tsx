import { useState } from 'react'
import type { CentreProposalCopy, CentreProposalStudentTab } from '../../i18n/centreProposal/types'
import './CentreProposalApp.css'

const TAB_ORDER: CentreProposalStudentTab[] = [
  'horaris',
  'reserves',
  'meves',
  'abonaments',
  'perfil',
]

interface StudentAppMockupProps {
  copy: CentreProposalCopy
  compact?: boolean
}

export function StudentAppMockup({ copy, compact = false }: StudentAppMockupProps) {
  const [tab, setTab] = useState<CentreProposalStudentTab>('horaris')
  const demo = copy.demo

  return (
    <div
      className={`centre-demo__phone centre-demo__phone--mock${compact ? ' centre-demo__phone--compact' : ''}`}
      aria-label={demo.studentBadge}
    >
      {!compact ? (
        <div className="centre-demo__phone-status">{demo.interactiveLabel}</div>
      ) : (
        <div className="centre-demo__phone-status centre-demo__phone-status--compact">
          {demo.interactiveLabel}
        </div>
      )}
      <div className="centre-demo__phone-screen">
        {tab === 'horaris' ? (
          <>
            <h2 className="centre-demo__screen-title">{demo.student.horaris.title}</h2>
            <ul className="centre-demo__card-list">
              {demo.student.horaris.classes.map((item, index) => (
                <li key={item.name} className="centre-demo__card">
                  <div className="centre-demo__card-head">
                    <span>{item.name}</span>
                    <span
                      className={`centre-demo__pill${
                        index === 1 ? ' centre-demo__pill--warn' : ''
                      }`}
                    >
                      {item.spots}
                    </span>
                  </div>
                  <p className="centre-demo__card-meta">{item.meta}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {tab === 'reserves' ? (
          <>
            <h2 className="centre-demo__screen-title">{demo.student.reserves.title}</h2>
            <p className="centre-demo__screen-lead">{demo.student.reserves.subtitle}</p>
            <button type="button" className="centre-demo__action centre-demo__action--primary">
              {demo.student.reserves.confirm}
            </button>
            <button type="button" className="centre-demo__action centre-demo__action--ghost">
              {demo.student.reserves.cancel}
            </button>
          </>
        ) : null}

        {tab === 'meves' ? (
          <>
            <h2 className="centre-demo__screen-title">{demo.student.meves.title}</h2>
            <p className="centre-demo__section-label">{demo.student.meves.upcomingLabel}</p>
            <ul className="centre-demo__card-list">
              <li className="centre-demo__card">
                <div className="centre-demo__card-head">
                  <span>{demo.student.meves.upcoming.name}</span>
                  <span>{demo.student.meves.upcoming.status}</span>
                </div>
                <p className="centre-demo__card-meta">{demo.student.meves.upcoming.meta}</p>
              </li>
            </ul>
            <p className="centre-demo__section-label">{demo.student.meves.historyLabel}</p>
            <ul className="centre-demo__card-list">
              <li className="centre-demo__card">
                <div className="centre-demo__card-head">
                  <span>{demo.student.meves.history.name}</span>
                </div>
                <p className="centre-demo__card-meta">{demo.student.meves.history.meta}</p>
              </li>
            </ul>
          </>
        ) : null}

        {tab === 'abonaments' ? (
          <>
            <h2 className="centre-demo__screen-title">{demo.student.abonaments.title}</h2>
            <div className="centre-demo__card">
              <div className="centre-demo__card-head">
                <span>{demo.student.abonaments.pack}</span>
                <span className="centre-demo__pill">{demo.student.abonaments.status}</span>
              </div>
              <p className="centre-demo__card-meta">{demo.student.abonaments.meta}</p>
            </div>
          </>
        ) : null}

        {tab === 'perfil' ? (
          <>
            <h2 className="centre-demo__screen-title">{demo.student.perfil.title}</h2>
            <dl className="centre-demo__dl">
              <div>
                <dt>{demo.student.perfil.nameLabel}</dt>
                <dd>{demo.student.perfil.name}</dd>
              </div>
              <div>
                <dt>{demo.student.perfil.emailLabel}</dt>
                <dd>{demo.student.perfil.email}</dd>
              </div>
              <div>
                <dt>{demo.student.perfil.prefsLabel}</dt>
                <dd>{demo.student.perfil.prefs}</dd>
              </div>
            </dl>
          </>
        ) : null}
      </div>
      <nav className="centre-demo__phone-nav" aria-label={demo.studentBadge}>
        {TAB_ORDER.map((id) => (
          <button
            key={id}
            type="button"
            aria-current={tab === id ? 'page' : undefined}
            onClick={() => setTab(id)}
          >
            {demo.studentTabs[id]}
          </button>
        ))}
      </nav>
    </div>
  )
}
