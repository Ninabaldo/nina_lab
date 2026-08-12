export type BreathingGoal = 'calm' | 'focus' | 'reset' | 'sleep'

export type SessionPhase = 'inhale' | 'hold' | 'exhale'

export type SessionStatus = 'idle' | 'active' | 'paused' | 'complete'

export interface PhaseStep {
  phase: SessionPhase
  durationMs: number
}

export const QUICK_RESET_SECONDS = 60

export const BREATHING_PATTERNS: Record<BreathingGoal, PhaseStep[]> = {
  calm: [
    { phase: 'inhale', durationMs: 4000 },
    { phase: 'exhale', durationMs: 6000 },
  ],
  focus: [
    { phase: 'inhale', durationMs: 4000 },
    { phase: 'hold', durationMs: 4000 },
    { phase: 'exhale', durationMs: 4000 },
    { phase: 'hold', durationMs: 4000 },
  ],
  reset: [
    { phase: 'inhale', durationMs: 4000 },
    { phase: 'exhale', durationMs: 6000 },
  ],
  sleep: [
    { phase: 'inhale', durationMs: 4000 },
    { phase: 'exhale', durationMs: 6000 },
  ],
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export function getHoldLevel(
  pattern: PhaseStep[],
  phaseIndex: number,
): 'expanded' | 'contracted' {
  const prevIndex = (phaseIndex - 1 + pattern.length) % pattern.length
  const prevPhase = pattern[prevIndex]?.phase
  return prevPhase === 'inhale' ? 'expanded' : 'contracted'
}
