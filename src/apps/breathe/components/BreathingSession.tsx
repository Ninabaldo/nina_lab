import { useState } from 'react'
import { getHoldLevel, type PhaseStep, type SessionPhase, type SessionStatus } from '../hooks/breathingConstants'
import { useLanguage } from '../hooks/useLanguage'
import { interpolate } from '../lib/interpolate'
import { BreathingOrb } from './BreathingOrb'
import { MoodSelector } from './MoodSelector'
import { SessionTimer } from './SessionTimer'
import './BreathingSession.css'

interface BreathingSessionProps {
  status: SessionStatus
  phase: SessionPhase
  phaseIndex: number
  phaseProgress: number
  pattern: PhaseStep[]
  formattedTime: string
  elapsedMinutes: number
  totalMinutes: number
  durationMinutes: number
  isQuickReset: boolean
  moodBefore?: number
  moodAfter?: number
  onMoodAfterChange: (value: number | undefined) => void
  onPause: () => void
  onResume: () => void
  onEnd: () => void
  onClose: () => void
  onBreatheAgain: () => void
}

export function BreathingSession({
  status,
  phase,
  phaseIndex,
  phaseProgress,
  pattern,
  formattedTime,
  elapsedMinutes,
  totalMinutes,
  durationMinutes,
  isQuickReset,
  moodBefore,
  moodAfter,
  onMoodAfterChange,
  onPause,
  onResume,
  onEnd,
  onClose,
  onBreatheAgain,
}: BreathingSessionProps) {
  const { t } = useLanguage()
  const [confirmingEnd, setConfirmingEnd] = useState(false)

  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const holdLevel =
    phase === 'hold' ? getHoldLevel(pattern, phaseIndex) : 'expanded'

  const instruction =
    phase === 'inhale' ? t.inhale : phase === 'hold' ? t.hold : t.exhale

  const sessionProgress = interpolate(t.sessionProgress, {
    elapsed: elapsedMinutes,
    total: totalMinutes,
  })

  const doneMessage = isQuickReset
    ? t.doneMessageQuick
    : interpolate(t.doneMessage, { minutes: durationMinutes })

  if (status === 'complete') {
    return (
      <div className="breathing-session breathing-session--complete">
        <div className="breathing-session__complete">
          <h2 className="breathing-session__done">{t.done}</h2>
          <p className="breathing-session__done-message">{doneMessage}</p>

          <MoodSelector
            label={t.moodAfterQuestion}
            value={moodAfter}
            onChange={onMoodAfterChange}
          />

          {moodBefore !== undefined && moodAfter !== undefined ? (
            <p className="breathing-session__mood-compare">
              {t.moodBefore}: {moodBefore}
              <span className="breathing-session__mood-sep" aria-hidden="true">·</span>
              {t.moodAfter}: {moodAfter}
            </p>
          ) : null}

          <div className="breathing-session__complete-actions">
            <button type="button" className="breathing-session__close" onClick={onClose}>
              {t.close}
            </button>
            <button
              type="button"
              className="breathing-session__action"
              onClick={onBreatheAgain}
            >
              {t.breatheAgain}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="breathing-session">
      <SessionTimer time={formattedTime} progress={sessionProgress} />

      <div className="breathing-session__center">
        <p className="breathing-session__instruction" aria-live="polite">
          {instruction}
        </p>
        <BreathingOrb
          phase={phase}
          phaseProgress={phaseProgress}
          holdLevel={holdLevel}
          reducedMotion={reducedMotion}
        />
      </div>

      <div className="breathing-session__actions">
        {confirmingEnd ? (
          <div className="breathing-session__confirm">
            <p className="breathing-session__confirm-text">{t.endConfirm}</p>
            <div className="breathing-session__confirm-actions">
              <button
                type="button"
                className="breathing-session__action breathing-session__action--end"
                onClick={() => {
                  setConfirmingEnd(false)
                  onEnd()
                }}
              >
                {t.endConfirmYes}
              </button>
              <button
                type="button"
                className="breathing-session__action"
                onClick={() => setConfirmingEnd(false)}
              >
                {t.endConfirmNo}
              </button>
            </div>
          </div>
        ) : (
          <>
            {status === 'paused' ? (
              <button type="button" className="breathing-session__action" onClick={onResume}>
                {t.resume}
              </button>
            ) : (
              <button type="button" className="breathing-session__action" onClick={onPause}>
                {t.pause}
              </button>
            )}
            <button
              type="button"
              className="breathing-session__action breathing-session__action--end"
              onClick={() => setConfirmingEnd(true)}
            >
              {t.end}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
