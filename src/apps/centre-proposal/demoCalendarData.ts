import type { CentreProposalCopy } from '../../i18n/centreProposal/types'
import type { Language } from '../../lib/preferences'
import type { DemoClassId } from './centreDemoContext'

/** Demo week: Monday 19 Oct 2026 (aligned with sample copy). */
export const DEMO_CALENDAR_YEAR = 2026
export const DEMO_CALENDAR_MONTH = 9 // October (0-indexed)
export const DEMO_WEEK_MONDAY = 19

export type DemoCalendarEventTemplate = {
  classId: DemoClassId | null
  /** 0 = Monday … 6 = Sunday */
  dayOfWeek: number
  hour: number
  minute: number
  title: string
  detail: string
}

export type DemoCalendarEventInstance = DemoCalendarEventTemplate & {
  date: Date
  timeLabel: string
}

const LOCALE_MAP: Record<Language, string> = {
  en: 'en-GB',
  es: 'es-ES',
  ca: 'ca-ES',
  fr: 'fr-FR',
  it: 'it-IT',
}

export function formatEventTime(hour: number, minute: number, language: Language) {
  const d = new Date(DEMO_CALENDAR_YEAR, DEMO_CALENDAR_MONTH, DEMO_WEEK_MONDAY, hour, minute)
  return d.toLocaleTimeString(LOCALE_MAP[language], { hour: '2-digit', minute: '2-digit' })
}

export function buildDemoCalendarEvents(copy: CentreProposalCopy): DemoCalendarEventTemplate[] {
  const classes = copy.demo.student.horaris.classes
  const yoga = classes.find((c) => c.id === 'yoga')
  const pilates = classes.find((c) => c.id === 'pilates')
  const stretching = classes.find((c) => c.id === 'stretching')

  /** Meta shape: «Weekday · HH:MM · room · instructor» — drop day + time for calendar chips. */
  const detailFromMeta = (meta: string) =>
    meta
      .split('·')
      .map((part) => part.trim())
      .slice(2)
      .join(' · ')

  return [
    {
      classId: 'yoga',
      dayOfWeek: 0,
      hour: 10,
      minute: 0,
      title: yoga?.name ?? 'Yoga',
      detail: yoga ? detailFromMeta(yoga.meta) : '',
    },
    {
      classId: 'pilates',
      dayOfWeek: 0,
      hour: 18,
      minute: 30,
      title: pilates?.name ?? 'Pilates',
      detail: pilates ? detailFromMeta(pilates.meta) : '',
    },
    {
      classId: 'stretching',
      dayOfWeek: 1,
      hour: 9,
      minute: 0,
      title: stretching?.name ?? 'Stretching',
      detail: stretching ? detailFromMeta(stretching.meta) : '',
    },
    {
      classId: null,
      dayOfWeek: 1,
      hour: 19,
      minute: 0,
      title: 'HIIT',
      detail: copy.demo.dashboard.calendari.days[1]?.meta.split('·').pop()?.trim() ?? '',
    },
  ]
}

function mondayOfDemoWeek(): Date {
  return new Date(DEMO_CALENDAR_YEAR, DEMO_CALENDAR_MONTH, DEMO_WEEK_MONDAY)
}

export function jsDateToIsoDay(date: Date): number {
  return (date.getDay() + 6) % 7
}

export function dateInDemoWeek(dayOfWeek: number): Date {
  const monday = mondayOfDemoWeek()
  const d = new Date(monday)
  d.setDate(monday.getDate() + dayOfWeek)
  return d
}

export function eventsForDate(
  date: Date,
  templates: DemoCalendarEventTemplate[],
  language: Language,
): DemoCalendarEventInstance[] {
  const dow = jsDateToIsoDay(date)
  return templates
    .filter((t) => t.dayOfWeek === dow)
    .sort((a, b) => a.hour * 60 + a.minute - (b.hour * 60 + b.minute))
    .map((t) => ({
      ...t,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate(), t.hour, t.minute),
      timeLabel: formatEventTime(t.hour, t.minute, language),
    }))
}

export function demoWeekDays(language: Language): { date: Date; label: string }[] {
  const locale = LOCALE_MAP[language]
  return Array.from({ length: 7 }, (_, dayOfWeek) => {
    const date = dateInDemoWeek(dayOfWeek)
    const label = date.toLocaleDateString(locale, { weekday: 'short', day: 'numeric' })
    return { date, label }
  })
}

export function formatDemoWeekRange(language: Language): string {
  const locale = LOCALE_MAP[language]
  const start = dateInDemoWeek(0)
  const end = dateInDemoWeek(6)
  const sameMonth = start.getMonth() === end.getMonth()
  const startStr = start.toLocaleDateString(locale, {
    day: 'numeric',
    month: sameMonth ? undefined : 'short',
  })
  const endStr = end.toLocaleDateString(locale, { day: 'numeric', month: 'short' })
  return `${startStr} – ${endStr}`
}

export function formatMonthTitle(language: Language): string {
  const locale = LOCALE_MAP[language]
  return new Date(DEMO_CALENDAR_YEAR, DEMO_CALENDAR_MONTH, 1).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  })
}

/** Monday-first grid cells for the demo month (includes leading/trailing days). */
export function monthGridCells(): Date[] {
  const first = new Date(DEMO_CALENDAR_YEAR, DEMO_CALENDAR_MONTH, 1)
  const startPad = jsDateToIsoDay(first)
  const start = new Date(first)
  start.setDate(first.getDate() - startPad)

  const cells: Date[] = []
  for (let i = 0; i < 42; i++) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    cells.push(d)
  }
  return cells
}

export function isDemoMonth(date: Date): boolean {
  return date.getMonth() === DEMO_CALENDAR_MONTH && date.getFullYear() === DEMO_CALENDAR_YEAR
}
