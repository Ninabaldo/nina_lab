import { useEffect, useState } from 'react'
import type { CentreProposalCopy, CentreProposalStudentTab } from '../../i18n/centreProposal/types'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { CentreDemoCalendar } from './CentreDemoCalendar'
import { useCentreDemo, type DemoClassId } from './centreDemoContext'
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
  const { language } = useSiteLanguage()
  const demo = copy.demo
  const labels = demo.student.labels
  const {
    selectedClassId,
    studentBookedYoga,
    yogaSpotsLeft,
    toast,
    openBooking,
    confirmBooking,
    cancelBooking,
    clearToast,
    isClassFull,
  } = useCentreDemo()

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => clearToast(), 2600)
    return () => window.clearTimeout(timer)
  }, [toast, clearToast])

  const selectedClass = demo.student.horaris.classes.find((c) => c.id === selectedClassId)
  const canConfirm = selectedClassId === 'yoga' && !studentBookedYoga && yogaSpotsLeft > 0

  const startBooking = (id: DemoClassId) => {
    if (isClassFull(id)) return
    openBooking(id)
    setTab('reserves')
  }

  return (
    <div
      className={`centre-demo__phone centre-demo__phone--mock${compact ? ' centre-demo__phone--compact' : ''}`}
      aria-label={demo.studentBadge}
    >
      <div
        className={`centre-demo__phone-status${compact ? ' centre-demo__phone-status--compact' : ''}`}
      >
        {labels.tapHint}
      </div>

      <div className="centre-demo__phone-screen">
        {toast ? (
          <div
            className={`centre-demo__toast centre-demo__toast--${toast}`}
            role="status"
            aria-live="polite"
          >
            {toast === 'booked' ? labels.toastBooked : labels.toastCancelled}
          </div>
        ) : null}

        <div key={tab} className="centre-demo__screen-pane">
          {tab === 'horaris' ? (
            <>
              <h2 className="centre-demo__screen-title">{demo.student.horaris.title}</h2>
              <CentreDemoCalendar
                copy={copy}
                language={language}
                viewWeekLabel={demo.student.horaris.viewWeek}
                viewMonthLabel={demo.student.horaris.viewMonth}
                compact={compact}
                onBookClass={(id) => startBooking(id)}
                isClassFull={isClassFull}
                liveClassId={studentBookedYoga ? 'yoga' : selectedClassId}
              />
            </>
          ) : null}

          {tab === 'reserves' ? (
            <>
              <h2 className="centre-demo__screen-title">{demo.student.reserves.title}</h2>
              {selectedClass ? (
                <p className="centre-demo__screen-lead">
                  {selectedClass.name} · {selectedClass.meta.split('·').slice(0, 2).join('·')}
                </p>
              ) : null}
              <button
                type="button"
                className="centre-demo__action centre-demo__action--primary"
                disabled={!canConfirm}
                onClick={() => {
                  confirmBooking()
                  setTab('meves')
                }}
              >
                {demo.student.reserves.confirm}
              </button>
              {studentBookedYoga ? (
                <button
                  type="button"
                  className="centre-demo__action centre-demo__action--ghost"
                  onClick={() => {
                    cancelBooking()
                    setTab('horaris')
                  }}
                >
                  {demo.student.reserves.cancel}
                </button>
              ) : null}
            </>
          ) : null}

          {tab === 'meves' ? (
            <>
              <h2 className="centre-demo__screen-title">{demo.student.meves.title}</h2>
              <p className="centre-demo__section-label">{demo.student.meves.upcomingLabel}</p>
              {studentBookedYoga ? (
                <ul className="centre-demo__card-list">
                  <li className="centre-demo__card centre-demo__card--live">
                    <div className="centre-demo__card-head">
                      <span>{demo.student.meves.upcoming.name}</span>
                      <span>{demo.student.meves.upcoming.status}</span>
                    </div>
                    <p className="centre-demo__card-meta">{demo.student.meves.upcoming.meta}</p>
                    <button
                      type="button"
                      className="centre-demo__inline-cancel"
                      onClick={() => {
                        cancelBooking()
                        setTab('horaris')
                      }}
                    >
                      {demo.student.reserves.cancel}
                    </button>
                  </li>
                </ul>
              ) : (
                <p className="centre-demo__empty">{labels.tapHint}</p>
              )}
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
