import { useCallback, useEffect, useRef, useState } from 'react'
import {
  formatTime,
  type PhaseStep,
  type SessionPhase,
  type SessionStatus,
} from './breathingConstants'

interface SessionConfig {
  totalSeconds: number
  pattern: PhaseStep[]
}

interface UseBreathingSessionOptions {
  totalSeconds: number
  pattern: PhaseStep[]
}

export function useBreathingSession({ totalSeconds, pattern }: UseBreathingSessionOptions) {
  const [status, setStatus] = useState<SessionStatus>('idle')
  const [phase, setPhase] = useState<SessionPhase>('inhale')
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [phaseProgress, setPhaseProgress] = useState(0)
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds)
  const [activeConfig, setActiveConfig] = useState<SessionConfig>({
    totalSeconds,
    pattern,
  })

  const phaseIndexRef = useRef(0)
  const phaseElapsedRef = useRef(0)
  const sessionElapsedRef = useRef(0)
  const lastTickRef = useRef(0)
  const rafRef = useRef(0)
  const patternRef = useRef(pattern)
  const totalSecondsRef = useRef(totalSeconds)

  useEffect(() => {
    patternRef.current = activeConfig.pattern
    totalSecondsRef.current = activeConfig.totalSeconds
  }, [activeConfig])

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    phaseIndexRef.current = 0
    phaseElapsedRef.current = 0
    sessionElapsedRef.current = 0
    lastTickRef.current = 0
    setActiveConfig({ totalSeconds, pattern })
    setStatus('idle')
    setPhase(pattern[0]?.phase ?? 'inhale')
    setPhaseIndex(0)
    setPhaseProgress(0)
    setRemainingSeconds(totalSeconds)
  }, [pattern, totalSeconds])

  const start = useCallback(
    (config?: SessionConfig) => {
      const nextConfig = config ?? { totalSeconds, pattern }
      patternRef.current = nextConfig.pattern
      totalSecondsRef.current = nextConfig.totalSeconds
      phaseIndexRef.current = 0
      phaseElapsedRef.current = 0
      sessionElapsedRef.current = 0
      lastTickRef.current = performance.now()
      setActiveConfig(nextConfig)
      setPhase(nextConfig.pattern[0]?.phase ?? 'inhale')
      setPhaseIndex(0)
      setPhaseProgress(0)
      setRemainingSeconds(nextConfig.totalSeconds)
      setStatus('active')
    },
    [pattern, totalSeconds],
  )

  const pause = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    setStatus('paused')
  }, [])

  const resume = useCallback(() => {
    lastTickRef.current = performance.now()
    setStatus('active')
  }, [])

  const end = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    setStatus('complete')
    setRemainingSeconds(0)
  }, [])

  useEffect(() => {
    if (status !== 'active') return

    const tick = (now: number) => {
      const delta = now - lastTickRef.current
      lastTickRef.current = now

      phaseElapsedRef.current += delta
      sessionElapsedRef.current += delta

      const currentPattern = patternRef.current
      const currentStep = currentPattern[phaseIndexRef.current]
      const phaseDuration = currentStep?.durationMs ?? 4000
      const progress = Math.min(phaseElapsedRef.current / phaseDuration, 1)

      setPhaseProgress(progress)
      setPhase(currentStep?.phase ?? 'inhale')
      setPhaseIndex(phaseIndexRef.current)

      if (phaseElapsedRef.current >= phaseDuration) {
        phaseIndexRef.current = (phaseIndexRef.current + 1) % currentPattern.length
        phaseElapsedRef.current = 0
        const nextStep = currentPattern[phaseIndexRef.current]
        setPhase(nextStep?.phase ?? 'inhale')
        setPhaseIndex(phaseIndexRef.current)
        setPhaseProgress(0)
      }

      const sessionTotal = totalSecondsRef.current
      const remaining = Math.max(0, sessionTotal - sessionElapsedRef.current / 1000)
      const rounded = Math.ceil(remaining)

      if (remaining <= 0) {
        setRemainingSeconds(0)
        setStatus('complete')
        return
      }

      setRemainingSeconds(rounded)
      rafRef.current = requestAnimationFrame(tick)
    }

    lastTickRef.current = performance.now()
    rafRef.current = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafRef.current)
  }, [status])

  const sessionTotal = activeConfig.totalSeconds
  const elapsedSeconds =
    status === 'idle'
      ? 0
      : status === 'complete'
        ? sessionTotal
        : sessionTotal - remainingSeconds

  const elapsedMinutes = Math.floor(elapsedSeconds / 60)
  const totalMinutes = Math.ceil(sessionTotal / 60)

  return {
    status,
    phase,
    phaseIndex,
    phaseProgress,
    pattern: activeConfig.pattern,
    remainingSeconds: status === 'idle' ? totalSeconds : remainingSeconds,
    elapsedSeconds,
    elapsedMinutes,
    totalMinutes,
    formattedTime: formatTime(status === 'idle' ? totalSeconds : remainingSeconds),
    start,
    pause,
    resume,
    end,
    reset,
  }
}
