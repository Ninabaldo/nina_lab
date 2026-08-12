import { useEffect, useState } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './FocusTimerApp.css'

type TimerStatus = 'idle' | 'running' | 'paused'

const PRESETS = [5, 15, 25] as const

function formatTime(totalSeconds: number): string {
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export function FocusTimerApp() {
  const { t } = useSiteLanguage()
  const app = t.apps.focusTimer

  const [minutes, setMinutes] = useState<number>(25)
  const [remaining, setRemaining] = useState(minutes * 60)
  const [status, setStatus] = useState<TimerStatus>('idle')

  const totalSeconds = minutes * 60

  useEffect(() => {
    if (status !== 'running') return

    const interval = window.setInterval(() => {
      setRemaining((current) => {
        if (current <= 1) {
          window.clearInterval(interval)
          setStatus('idle')
          return totalSeconds
        }
        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(interval)
  }, [status, totalSeconds])

  const progress = totalSeconds > 0 ? 1 - remaining / totalSeconds : 0
  const circumference = 2 * Math.PI * 54
  const offset = circumference * (1 - progress)

  const handlePreset = (preset: number) => {
    if (status === 'running') return
    setMinutes(preset)
    setRemaining(preset * 60)
    setStatus('idle')
  }

  const handleStart = () => setStatus('running')
  const handlePause = () => setStatus('paused')
  const handleResume = () => setStatus('running')
  const handleReset = () => {
    setStatus('idle')
    setRemaining(totalSeconds)
  }

  return (
    <div className="focus-timer">
      <div className="focus-timer__presets" role="radiogroup" aria-label={app.durationAria}>
        {PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            role="radio"
            aria-checked={minutes === preset}
            className={`focus-timer__preset ${minutes === preset ? 'focus-timer__preset--active' : ''}`}
            onClick={() => handlePreset(preset)}
            disabled={status === 'running'}
          >
            {preset} {app.min}
          </button>
        ))}
      </div>

      <div className="focus-timer__display">
        <svg viewBox="0 0 120 120" className="focus-timer__ring" aria-hidden="true">
          <circle cx="60" cy="60" r="54" fill="none" stroke="var(--color-border)" strokeWidth="4" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="var(--color-accent-sage)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 60 60)"
            className="focus-timer__progress"
          />
        </svg>
        <span className="focus-timer__time">{formatTime(remaining)}</span>
      </div>

      <div className="focus-timer__actions">
        {status === 'idle' && (
          <button type="button" className="focus-timer__btn focus-timer__btn--primary" onClick={handleStart}>
            {app.start}
          </button>
        )}
        {status === 'running' && (
          <button type="button" className="focus-timer__btn" onClick={handlePause}>
            {app.pause}
          </button>
        )}
        {status === 'paused' && (
          <>
            <button type="button" className="focus-timer__btn focus-timer__btn--primary" onClick={handleResume}>
              {app.resume}
            </button>
            <button type="button" className="focus-timer__btn" onClick={handleReset}>
              {app.reset}
            </button>
          </>
        )}
        {status === 'running' && (
          <button type="button" className="focus-timer__btn focus-timer__btn--ghost" onClick={handleReset}>
            {app.reset}
          </button>
        )}
      </div>
    </div>
  )
}
