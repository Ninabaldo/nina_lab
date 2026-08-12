import type { BreathingGoal } from '../hooks/breathingConstants'
import { useLanguage } from '../hooks/useLanguage'
import type { DurationMinutes, WeekStats } from '../storage'
import { BreathingOrb } from './BreathingOrb'
import { DurationSelector } from './DurationSelector'
import { GoalSelector } from './GoalSelector'
import { MoodSelector } from './MoodSelector'
import { WeekSummary } from './WeekSummary'
import './BreatheHome.css'

interface BreatheHomeProps {
  goal: BreathingGoal
  duration: DurationMinutes
  moodBefore?: number
  weekStats: WeekStats
  embedded?: boolean
  onGoalChange: (goal: BreathingGoal) => void
  onDurationChange: (minutes: DurationMinutes) => void
  onMoodBeforeChange: (value: number | undefined) => void
  onStart: () => void
  onQuickReset: () => void
}

export function BreatheHome({
  goal,
  duration,
  moodBefore,
  weekStats,
  embedded,
  onGoalChange,
  onDurationChange,
  onMoodBeforeChange,
  onStart,
  onQuickReset,
}: BreatheHomeProps) {
  const { t } = useLanguage()

  return (
    <div className="breathe-home">
      <div className="breathe-home__intro">
        <h1 className="breathe-home__title">{t.appName}</h1>
        <p className="breathe-home__tagline">
          {t.tagline1}
          <br />
          {t.tagline2}
        </p>
      </div>

      <div className="breathe-home__orb">
        <BreathingOrb phase="inhale" phaseProgress={0.35} reducedMotion />
      </div>

      <div className="breathe-home__controls">
        <GoalSelector value={goal} onChange={onGoalChange} />
        <DurationSelector value={duration} onChange={onDurationChange} />
        <MoodSelector
          value={moodBefore}
          onChange={onMoodBeforeChange}
          optional
        />
        <button type="button" className="breathe-home__start" onClick={onStart}>
          {t.start}
        </button>
        <button type="button" className="breathe-home__quick" onClick={onQuickReset}>
          {t.quickReset}
          <span className="breathe-home__quick-duration">{t.quickResetDuration}</span>
        </button>
      </div>

      <WeekSummary stats={weekStats} compact={embedded} />
    </div>
  )
}
