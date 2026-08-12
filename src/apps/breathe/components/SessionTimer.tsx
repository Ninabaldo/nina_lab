import './SessionTimer.css'

interface SessionTimerProps {
  time: string
  progress?: string
}

export function SessionTimer({ time, progress }: SessionTimerProps) {
  return (
    <div className="session-timer-wrap">
      <p className="session-timer" aria-live="polite" aria-atomic="true">
        {time}
      </p>
      {progress ? (
        <p className="session-timer__progress" aria-hidden="true">
          {progress}
        </p>
      ) : null}
    </div>
  )
}
