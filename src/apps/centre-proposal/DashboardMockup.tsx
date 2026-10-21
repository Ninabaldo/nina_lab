import { useState } from 'react'
import type { CentreProposalCopy, CentreProposalDashTab } from '../../i18n/centreProposal/types'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { CentreDashboardBarChart } from './CentreDashboardBarChart'
import { CentreDashboardInvoicesTable } from './CentreDashboardInvoicesTable'
import { CentreDashboardStaffTable } from './CentreDashboardStaffTable'
import { CentreDashboardStudentTable } from './CentreDashboardStudentTable'
import { CentreDemoCalendar } from './CentreDemoCalendar'
import { useCentreDemo } from './centreDemoContext'
import './CentreProposalApp.css'

const TAB_ORDER: CentreProposalDashTab[] = [
  'resum',
  'calendari',
  'classes',
  'personal',
  'alumnes',
  'factures',
  'abonaments',
]

interface DashboardMockupProps {
  copy: CentreProposalCopy
  compact?: boolean
}

export function DashboardMockup({ copy, compact = false }: DashboardMockupProps) {
  const { language } = useSiteLanguage()
  const [tab, setTab] = useState<CentreProposalDashTab>('resum')
  const [activeRow, setActiveRow] = useState<string | null>(null)
  const demo = copy.demo
  const { yogaOccupancy, yogaCapacity, confirmedBookings, studentBookedYoga, isClassFull } =
    useCentreDemo()

  const resum = demo.dashboard.resum
  const revenueKpi = resum.kpis.find((k) => k.id === 'revenue')
  const secondaryKpis = resum.kpis.filter((k) => k.id !== 'revenue')
  const highlightedMonth = resum.charts.monthly.find((bar) => bar.highlight)

  const resumLead = resum.leadTemplate
    .replace('{bookings}', String(confirmedBookings))
    .replace('{full}', '2')

  const occupancyForRow = (id: 'yoga' | 'pilates') => {
    if (id === 'yoga') return `${yogaOccupancy}/${yogaCapacity}`
    return '10/10'
  }

  const kpiValue = (id: string, value: string) => {
    if (id === 'bookingsToday') return value.replace('{n}', String(confirmedBookings))
    return value
  }

  const staticEnrollment: Record<string, string> = {
    stretching: '6',
    hiit: '14',
    spin: '11',
    barre: '8',
    meditation: '5',
    familia: '9',
  }

  const classEnrollment = (row: (typeof demo.dashboard.classes.rows)[number]) => {
    if (row.id === 'yoga') return `${yogaOccupancy}/${row.capacity}`
    if (row.id === 'pilates') return `10/${row.capacity}`
    const n = row.id ? staticEnrollment[row.id] : undefined
    return n ? `${n}/${row.capacity}` : `0/${row.capacity}`
  }

  return (
    <div
      className={`centre-demo__dash centre-demo__dash--mock${compact ? ' centre-demo__dash--compact' : ''}${
        studentBookedYoga ? ' centre-demo__dash--synced' : ''
      }`}
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

        <div key={tab} className="centre-demo__screen-pane">
          {tab === 'resum' ? (
            <>
              <h1>{resum.title}</h1>
              <p className="centre-demo__panel-lead centre-demo__panel-lead--live">{resumLead}</p>
              {revenueKpi ? (
                <div className="centre-demo__revenue-spotlight" role="group" aria-label={revenueKpi.label}>
                  <p className="centre-demo__revenue-spotlight-label">{revenueKpi.label}</p>
                  <p className="centre-demo__revenue-spotlight-value">{revenueKpi.value}</p>
                  <p className="centre-demo__revenue-spotlight-hint">{revenueKpi.hint}</p>
                </div>
              ) : null}
              <div className="centre-demo__kpi-grid centre-demo__kpi-grid--secondary" role="list">
                {secondaryKpis.map((kpi) => {
                  const live = kpi.id === 'bookingsToday' && studentBookedYoga
                  return (
                    <div
                      key={kpi.id}
                      role="listitem"
                      className={`centre-demo__kpi${live ? ' centre-demo__kpi--live' : ''}`}
                    >
                      <p className="centre-demo__kpi-label">{kpi.label}</p>
                      <p className="centre-demo__kpi-value">{kpiValue(kpi.id, kpi.value)}</p>
                      <p className="centre-demo__kpi-hint">{kpi.hint}</p>
                    </div>
                  )
                })}
              </div>
              <h2 className="centre-demo__panel-subtitle">{resum.chartsTitle}</h2>
              <div className="centre-demo__chart-row">
                <CentreDashboardBarChart
                  title={resum.charts.monthlyTitle}
                  bars={resum.charts.monthly}
                  featured={
                    revenueKpi && highlightedMonth
                      ? {
                          periodLabel: highlightedMonth.label,
                          amount: revenueKpi.value,
                          hint: revenueKpi.hint,
                        }
                      : undefined
                  }
                />
                <CentreDashboardBarChart
                  title={resum.charts.annualTitle}
                  bars={resum.charts.annual}
                />
              </div>
              <h2 className="centre-demo__panel-subtitle">{resum.paymentsTitle}</h2>
              <ul className="centre-demo__payment-list">
                {resum.payments.map((payment) => (
                  <li key={`${payment.label}-${payment.meta}`} className="centre-demo__payment">
                    <div className="centre-demo__payment-head">
                      <span className="centre-demo__payment-label">{payment.label}</span>
                      <span className="centre-demo__payment-amount">{payment.amount}</span>
                    </div>
                    <p className="centre-demo__payment-meta">
                      <span
                        className={`centre-demo__payment-tone centre-demo__payment-tone--${payment.tone}`}
                      />
                      {payment.meta}
                    </p>
                  </li>
                ))}
              </ul>
              <h2 className="centre-demo__panel-subtitle">{resum.scheduleTitle}</h2>
              <ul className="centre-demo__card-list">
                {resum.rows.map((row) => {
                  const occupancy = occupancyForRow(row.id)
                  const warn = occupancy.includes('10/10')
                  const live = row.id === 'yoga' && studentBookedYoga
                  return (
                    <li key={row.id}>
                      <button
                        type="button"
                        className={`centre-demo__card centre-demo__card--action${
                          activeRow === row.id ? ' centre-demo__card--active' : ''
                        }${live ? ' centre-demo__card--live' : ''}`}
                        onClick={() => setActiveRow(row.id)}
                      >
                        <div className="centre-demo__card-head">
                          <span>{row.time}</span>
                          <span
                            key={occupancy}
                            className={`centre-demo__pill centre-demo__pill--live${
                              warn ? ' centre-demo__pill--warn' : ''
                            }`}
                          >
                            {occupancy}
                          </span>
                        </div>
                        <p className="centre-demo__card-meta">{row.meta}</p>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </>
          ) : null}

          {tab === 'calendari' ? (
            <>
              <h1>{demo.dashboard.calendari.title}</h1>
              <p className="centre-demo__panel-lead">{demo.dashboard.calendari.lead}</p>
              <CentreDemoCalendar
                copy={copy}
                language={language}
                viewWeekLabel={demo.dashboard.calendari.viewWeek}
                viewMonthLabel={demo.dashboard.calendari.viewMonth}
                compact={compact}
                surface="dashboard"
                isClassFull={isClassFull}
                liveClassId={studentBookedYoga ? 'yoga' : null}
              />
            </>
          ) : null}

          {tab === 'classes' ? (
            <>
              <h1>{demo.dashboard.classes.title}</h1>
              <p className="centre-demo__panel-lead">{demo.dashboard.classes.lead}</p>
              <ul className="centre-demo__card-list">
                {demo.dashboard.classes.rows.map((row) => {
                  const enrolled = classEnrollment(row)
                  const full =
                    row.id === 'pilates' ||
                    (row.id === 'yoga' && yogaOccupancy >= yogaCapacity)
                  const live = row.id === 'yoga' && studentBookedYoga
                  return (
                    <li
                      key={row.name}
                      className={`centre-demo__card${live ? ' centre-demo__card--live' : ''}`}
                    >
                      <div className="centre-demo__card-head">
                        <span>{row.name}</span>
                        <span
                          className={`centre-demo__pill${full ? ' centre-demo__pill--warn' : ''}${
                            live ? ' centre-demo__pill--live' : ''
                          }`}
                        >
                          {enrolled} {demo.dashboard.classes.studentsLabel}
                        </span>
                      </div>
                      <p className="centre-demo__card-meta">{row.meta}</p>
                    </li>
                  )
                })}
              </ul>
            </>
          ) : null}

          {tab === 'personal' ? (
            <>
              <h1>{demo.dashboard.personal.title}</h1>
              <p className="centre-demo__panel-lead">{demo.dashboard.personal.lead}</p>
              <CentreDashboardStaffTable copy={copy} />
            </>
          ) : null}

          {tab === 'alumnes' ? (
            <>
              <h1>{demo.dashboard.alumnes.title}</h1>
              <p className="centre-demo__panel-lead">{demo.dashboard.alumnes.lead}</p>
              <CentreDashboardStudentTable
                copy={copy}
                highlightStudentId={studentBookedYoga ? 'maria' : null}
                registeredCount={
                  demo.dashboard.resum.kpis.find((k) => k.id === 'activeStudents')?.value ?? '212'
                }
              />
            </>
          ) : null}

          {tab === 'factures' ? (
            <>
              <h1>{demo.dashboard.factures.title}</h1>
              <p className="centre-demo__panel-lead">{demo.dashboard.factures.lead}</p>
              <CentreDashboardInvoicesTable copy={copy} />
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
    </div>
  )
}
