import { useCallback, useState } from 'react'
import {
  BREATHING_PATTERNS,
  QUICK_RESET_SECONDS,
  type BreathingGoal,
} from './hooks/breathingConstants'
import { useBreathingSession } from './hooks/useBreathingSession'
import { BreatheHome } from './components/BreatheHome'
import { BreathingSession } from './components/BreathingSession'
import {
  getStoredDuration,
  getStoredGoal,
  getWeekStats,
  saveSession,
  type DurationMinutes,
  type SessionGoal,
  type WeekStats,
} from './storage'
import './BreatheApp.css'

interface BreatheAppProps {
  embedded?: boolean
  staticPreview?: boolean
}

function BreatheAppContent({ embedded, staticPreview }: BreatheAppProps) {
  const [goal, setGoal] = useState<BreathingGoal>(() => getStoredGoal())
  const [duration, setDuration] = useState<DurationMinutes>(() => getStoredDuration())
  const [moodBefore, setMoodBefore] = useState<number | undefined>()
  const [moodAfter, setMoodAfter] = useState<number | undefined>()
  const [isQuickReset, setIsQuickReset] = useState(false)
  const [weekStats, setWeekStats] = useState<WeekStats>(() => getWeekStats())

  const session = useBreathingSession({
    totalSeconds: duration * 60,
    pattern: BREATHING_PATTERNS[goal],
  })

  const isSessionView =
    session.status === 'active' ||
    session.status === 'paused' ||
    session.status === 'complete'

  const handleStart = () => {
    if (staticPreview) return
    setIsQuickReset(false)
    setMoodAfter(undefined)
    session.start({
      totalSeconds: duration * 60,
      pattern: BREATHING_PATTERNS[goal],
    })
  }

  const handleQuickReset = () => {
    if (staticPreview) return
    setIsQuickReset(true)
    setMoodBefore(undefined)
    setMoodAfter(undefined)
    session.start({
      totalSeconds: QUICK_RESET_SECONDS,
      pattern: BREATHING_PATTERNS.reset,
    })
  }

  const sessionGoal: SessionGoal = isQuickReset ? 'quick' : goal
  const durationMinutes = isQuickReset ? 1 : duration

  const persistSession = useCallback(() => {
    saveSession({
      date: new Date().toISOString(),
      durationMinutes,
      goal: sessionGoal,
      moodBefore: isQuickReset ? undefined : moodBefore,
      moodAfter,
    })
    setWeekStats(getWeekStats())
  }, [durationMinutes, sessionGoal, moodBefore, moodAfter, isQuickReset])

  const handleClose = () => {
    if (session.status === 'complete') {
      persistSession()
    }
    setIsQuickReset(false)
    setMoodBefore(undefined)
    setMoodAfter(undefined)
    session.reset()
  }

  const handleBreatheAgain = () => {
    persistSession()
    setIsQuickReset(false)
    setMoodBefore(undefined)
    setMoodAfter(undefined)
    session.reset()
  }

  const handleEnd = () => {
    setIsQuickReset(false)
    setMoodBefore(undefined)
    setMoodAfter(undefined)
    session.reset()
  }

  const className = [
    'breathe-app',
    embedded ? 'breathe-app--compact' : 'breathe-app--standalone',
    staticPreview ? 'breathe-app--static' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      {isSessionView ? (
        <BreathingSession
          status={session.status}
          phase={session.phase}
          phaseIndex={session.phaseIndex}
          phaseProgress={session.phaseProgress}
          pattern={session.pattern}
          formattedTime={session.formattedTime}
          elapsedMinutes={session.elapsedMinutes}
          totalMinutes={session.totalMinutes}
          durationMinutes={durationMinutes}
          isQuickReset={isQuickReset}
          moodBefore={moodBefore}
          moodAfter={moodAfter}
          onMoodAfterChange={setMoodAfter}
          onPause={session.pause}
          onResume={session.resume}
          onEnd={handleEnd}
          onClose={handleClose}
          onBreatheAgain={handleBreatheAgain}
        />
      ) : (
        <BreatheHome
          goal={goal}
          duration={duration}
          moodBefore={moodBefore}
          weekStats={weekStats}
          embedded={embedded}
          onGoalChange={setGoal}
          onDurationChange={setDuration}
          onMoodBeforeChange={setMoodBefore}
          onStart={handleStart}
          onQuickReset={handleQuickReset}
        />
      )}
    </div>
  )
}

export function BreatheApp(props: BreatheAppProps) {
  return <BreatheAppContent {...props} />
}

export function BreatheStaticPreview() {
  return <BreatheAppContent staticPreview />
}
