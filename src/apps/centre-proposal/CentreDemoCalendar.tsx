import { useMemo, useState } from 'react'
import type { Language } from '../../lib/preferences'
import type { DemoClassId } from './centreDemoContext'
import {
  buildDemoCalendarEvents,
  DEMO_WEEK_MONDAY,
  demoWeekDays,
  eventsForDate,
  formatDemoWeekRange,
  formatMonthTitle,
  isDemoMonth,
  monthGridCells,
  type DemoCalendarEventTemplate,
} from './demoCalendarData'
import type { CentreProposalCopy } from '../../i18n/centreProposal/types'

export type CalendarViewMode = 'week' | 'month'

type CentreDemoCalendarProps = {
  copy: CentreProposalCopy
  language: Language
  viewWeekLabel: string
  viewMonthLabel: string
  compact?: boolean
  /** Week as day list inside the phone mockup; grid on centre dashboard. */
  surface?: 'phone' | 'dashboard'
  onBookClass?: (id: DemoClassId) => void
  isClassFull?: (id: DemoClassId) => boolean
  liveClassId?: DemoClassId | null
}

const LOCALE_MAP: Record<Language, string> = {
  en: 'en-GB',
  es: 'es-ES',
  ca: 'ca-ES',
  fr: 'fr-FR',
  it: 'it-IT',
}

function weekdayHeaders(language: Language): string[] {
  const locale = LOCALE_MAP[language]
  const monday = new Date(2026, 9, 19)
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d.toLocaleDateString(locale, { weekday: 'narrow' })
  })
}

function EventChip({
  event,
  compact,
  showDetail,
  full,
  live,
  onBook,
}: {
  event: { classId: DemoClassId | null; timeLabel: string; title: string; detail: string }
  compact?: boolean
  showDetail?: boolean
  full?: boolean
  live?: boolean
  onBook?: () => void
}) {
  const bookable = event.classId && onBook && !full
  const Tag = bookable ? 'button' : 'div'
  return (
    <Tag
      type={bookable ? 'button' : undefined}
      className={`centre-demo__cal-event${compact ? ' centre-demo__cal-event--compact' : ''}${
        live ? ' centre-demo__cal-event--live' : ''
      }${full ? ' centre-demo__cal-event--full' : ''}`}
      title={`${event.timeLabel} · ${event.title}${event.detail ? ` · ${event.detail}` : ''}`}
      disabled={bookable ? false : undefined}
      onClick={bookable ? onBook : undefined}
    >
      <span className="centre-demo__cal-event-time">{event.timeLabel}</span>
      <span className="centre-demo__cal-event-title">{event.title}</span>
      {showDetail && event.detail ? (
        <span className="centre-demo__cal-event-detail">{event.detail}</span>
      ) : null}
    </Tag>
  )
}

export function CentreDemoCalendar({
  copy,
  language,
  viewWeekLabel,
  viewMonthLabel,
  compact = false,
  surface = 'dashboard',
  onBookClass,
  isClassFull,
  liveClassId,
}: CentreDemoCalendarProps) {
  const calendari = copy.demo.dashboard.calendari
  const [view, setView] = useState<CalendarViewMode>(surface === 'dashboard' ? 'month' : 'week')
  const weekAsList = surface === 'phone'
  const monthAgenda = surface === 'dashboard'
  const monthCompact = surface === 'phone' || (compact && !monthAgenda)
  const templates = useMemo(() => buildDemoCalendarEvents(copy), [copy])
  const weekDays = useMemo(() => demoWeekDays(language), [language])
  const weekRange = useMemo(() => formatDemoWeekRange(language), [language])
  const monthTitle = useMemo(() => formatMonthTitle(language), [language])
  const headers = useMemo(() => weekdayHeaders(language), [language])

  const renderEvent = (
    event: DemoCalendarEventTemplate & { timeLabel: string; date: Date },
    opts?: { showDetail?: boolean },
  ) => {
    const full = event.classId ? isClassFull?.(event.classId) : false
    const live = event.classId != null && event.classId === liveClassId
    const showDetail = opts?.showDetail ?? (!compact || weekAsList)
    return (
      <EventChip
        key={`${event.date.toISOString()}-${event.title}-${event.timeLabel}`}
        event={event}
        compact={monthCompact && view === 'month'}
        showDetail={showDetail}
        full={full}
        live={live}
        onBook={
          event.classId && onBookClass ? () => onBookClass(event.classId as DemoClassId) : undefined
        }
      />
    )
  }

  return (
    <div
      className={`centre-demo__cal${monthCompact ? ' centre-demo__cal--compact' : ''}${
        surface === 'phone' ? ' centre-demo__cal--phone' : ''
      }`}
      data-view={view}
    >
      <div className="centre-demo__cal-toolbar">
        <div className="centre-demo__cal-toggle" role="tablist" aria-label={calendari.title}>
          <button
            type="button"
            role="tab"
            aria-selected={view === 'week'}
            className={view === 'week' ? 'is-active' : undefined}
            onClick={() => setView('week')}
          >
            {viewWeekLabel}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === 'month'}
            className={view === 'month' ? 'is-active' : undefined}
            onClick={() => setView('month')}
          >
            {viewMonthLabel}
          </button>
        </div>
        <p className="centre-demo__cal-range">{view === 'week' ? weekRange : monthTitle}</p>
      </div>

      {view === 'week' ? (
        weekAsList ? (
          <ul className="centre-demo__cal-week-list">
            {weekDays.map(({ date, label }) => {
              const dayEvents = eventsForDate(date, templates, language)
              if (dayEvents.length === 0) return null
              return (
                <li key={label} className="centre-demo__cal-week-day">
                  <p className="centre-demo__cal-week-day-label">{label}</p>
                  <div className="centre-demo__cal-week-events">
                    {dayEvents.map((ev) => renderEvent(ev, { showDetail: true }))}
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="centre-demo__cal-week-grid">
            {weekDays.map(({ date, label }) => (
              <div key={label} className="centre-demo__cal-week-col">
                <p className="centre-demo__cal-week-col-head">{label}</p>
                <div className="centre-demo__cal-week-events">
                  {eventsForDate(date, templates, language).map((ev) =>
                    renderEvent(ev, { showDetail: false }),
                  )}
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <>
          <div className="centre-demo__cal-month-head" aria-hidden="true">
            {headers.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
          <div className="centre-demo__cal-month-grid">
            {monthGridCells().map((date) => {
              const inMonth = isDemoMonth(date)
              const dayEvents = inMonth ? eventsForDate(date, templates, language) : []
              const todayHighlight = inMonth && date.getDate() === DEMO_WEEK_MONDAY
              const moreCount = dayEvents.length > 2 ? dayEvents.length - 2 : 0
              return (
                <div
                  key={date.toISOString()}
                  className={`centre-demo__cal-month-cell${inMonth ? '' : ' centre-demo__cal-month-cell--muted'}${
                    todayHighlight ? ' centre-demo__cal-month-cell--today' : ''
                  }${monthAgenda ? ' centre-demo__cal-month-cell--agenda' : ''}`}
                >
                  <div className="centre-demo__cal-month-day-row">
                    <span className="centre-demo__cal-month-day">{date.getDate()}</span>
                    {todayHighlight ? (
                      <span className="centre-demo__cal-month-today">{calendari.todayBadge}</span>
                    ) : null}
                  </div>
                  {dayEvents.length > 0 ? (
                    monthAgenda ? (
                      <ul
                        className="centre-demo__cal-month-agenda"
                        aria-label={dayEvents.map((ev) => `${ev.timeLabel} ${ev.title}`).join(', ')}
                      >
                        {dayEvents.slice(0, 2).map((ev) => {
                          const live = ev.classId != null && ev.classId === liveClassId
                          const tone = ev.classId ?? 'other'
                          return (
                            <li
                              key={`${ev.timeLabel}-${ev.title}`}
                              className={`centre-demo__cal-month-agenda-item centre-demo__cal-month-agenda-item--${tone}${
                                live ? ' centre-demo__cal-month-agenda-item--live' : ''
                              }`}
                              title={`${ev.timeLabel} · ${ev.title}`}
                            >
                              <span className="centre-demo__cal-month-agenda-time">{ev.timeLabel}</span>
                              <span className="centre-demo__cal-month-agenda-title">{ev.title}</span>
                            </li>
                          )
                        })}
                        {moreCount > 0 ? (
                          <li className="centre-demo__cal-month-agenda-more">
                            {calendari.monthMoreEvents.replace('{n}', String(moreCount))}
                          </li>
                        ) : null}
                      </ul>
                    ) : (
                      <div
                        className="centre-demo__cal-month-dots"
                        role="list"
                        aria-label={dayEvents.map((ev) => `${ev.timeLabel} ${ev.title}`).join(', ')}
                      >
                        {dayEvents.slice(0, 4).map((ev) => {
                          const live = ev.classId != null && ev.classId === liveClassId
                          return (
                            <span
                              key={`${ev.timeLabel}-${ev.title}`}
                              role="listitem"
                              className={`centre-demo__cal-month-dot${
                                ev.classId ? ` centre-demo__cal-month-dot--${ev.classId}` : ''
                              }${live ? ' centre-demo__cal-month-dot--live' : ''}`}
                              title={`${ev.timeLabel} · ${ev.title}`}
                            />
                          )
                        })}
                        {dayEvents.length > 4 ? (
                          <span className="centre-demo__cal-month-more">+{dayEvents.length - 4}</span>
                        ) : null}
                      </div>
                    )
                  ) : null}
                </div>
              )
            })}
          </div>
          {monthAgenda ? (
            <div className="centre-demo__cal-legend">
              <p className="centre-demo__cal-legend-title">{calendari.monthLegendTitle}</p>
              <ul className="centre-demo__cal-legend-list">
                {calendari.monthLegend.map((item) => (
                  <li key={item.tone}>
                    <span
                      className={`centre-demo__cal-legend-swatch centre-demo__cal-legend-swatch--${item.tone}`}
                      aria-hidden
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </>
      )}
    </div>
  )
}
