import { useLanguage } from '../hooks/useLanguage'
import type { WeekStats } from '../storage'
import { interpolate } from '../lib/interpolate'
import './WeekSummary.css'

interface WeekSummaryProps {
  stats: WeekStats
  compact?: boolean
}

export function WeekSummary({ stats, compact }: WeekSummaryProps) {
  const { t } = useLanguage()

  if (stats.sessionCount === 0) return null

  return (
    <div className={`week-summary ${compact ? 'week-summary--compact' : ''}`}>
      <p className="week-summary__title">{t.weekTitle}</p>
      <p className="week-summary__stats">
        {interpolate(t.weekSessions, { count: stats.sessionCount })}
        <span className="week-summary__dot" aria-hidden="true">·</span>
        {interpolate(t.weekMinutes, { minutes: stats.totalMinutes })}
      </p>
      <div className="week-summary__days" aria-hidden="true">
        {stats.days.map((active, index) => (
          <span
            key={index}
            className={`week-summary__day ${active ? 'week-summary__day--active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
