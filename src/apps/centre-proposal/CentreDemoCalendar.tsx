import { useMemo, useState } from 'react'
import type { Language } from '../../lib/preferences'
import type { DemoClassId } from './centreDemoContext'
import {
  buildDemoCalendarEvents,
  demoWeekDays,
  eventsForDate,
  formatDemoWeekRange,
  formatMonthTitle,
  isDemoMonth,
  jsDateToIsoDay,
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
  full,
  live,
  onBook,
}: {
  event: { classId: DemoClassId | null; timeLabel: string; title: string; detail: string }
  compact?: boolean
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
      disabled={bookable ? false : undefined}
      onClick={bookable ? onBook : undefined}
    >
      <span className="centre-demo__cal-event-time">{event.timeLabel}</span>
      <span className="centre-demo__cal-event-title">{event.title}</span>
      {!compact && event.detail ? (
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
  onBookClass,
  isClassFull,
  liveClassId,
}: CentreDemoCalendarProps) {
  const [view, setView] = useState<CalendarViewMode>('week')
  const templates = useMemo(() => buildDemoCalendarEvents(copy), [copy])
  const weekDays = useMemo(() => demoWeekDays(language), [language])
  const weekRange = useMemo(() => formatDemoWeekRange(language), [language])
  const monthTitle = useMemo(() => formatMonthTitle(language), [language])
  const headers = useMemo(() => weekdayHeaders(language), [language])

  const renderEvent = (event: DemoCalendarEventTemplate & { timeLabel: string; date: Date }) => {
    const full = event.classId ? isClassFull?.(event.classId) : false
    const live = event.classId != null && event.classId === liveClassId
    return (
      <EventChip
        key={`${event.date.toISOString()}-${event.title}-${event.timeLabel}`}
        event={event}
        compact={compact}
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
      className={`centre-demo__cal${compact ? ' centre-demo__cal--compact' : ''}`}
      data-view={view}
    >
      <div className="centre-demo__cal-toolbar">
        <div className="centre-demo__cal-toggle" role="tablist" aria-label={copy.demo.dashboard.calendari.title}>
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
        compact ? (
          <ul className="centre-demo__cal-week-list">
            {weekDays.map(({ date, label }) => {
              const dayEvents = eventsForDate(date, templates, language)
              if (dayEvents.length === 0) return null
              return (
                <li key={label} className="centre-demo__cal-week-day">
                  <p className="centre-demo__cal-week-day-label">{label}</p>
                  <div className="centre-demo__cal-week-events">
                    {dayEvents.map((ev) => renderEvent(ev))}
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
                  {eventsForDate(date, templates, language).map((ev) => renderEvent(ev))}
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
              const todayHighlight = jsDateToIsoDay(date) === 1 && date.getDate() === 20
              return (
                <div
                  key={date.toISOString()}
                  className={`centre-demo__cal-month-cell${inMonth ? '' : ' centre-demo__cal-month-cell--muted'}${
                    todayHighlight ? ' centre-demo__cal-month-cell--today' : ''
                  }`}
                >
                  <span className="centre-demo__cal-month-day">{date.getDate()}</span>
                  {dayEvents.length > 0 ? (
                    <div className="centre-demo__cal-month-events">
                      {dayEvents.slice(0, compact ? 2 : 3).map((ev) => renderEvent(ev))}
                      {dayEvents.length > (compact ? 2 : 3) ? (
                        <span className="centre-demo__cal-month-more">+{dayEvents.length - (compact ? 2 : 3)}</span>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
