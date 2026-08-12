import type { SessionPhase } from '../hooks/breathingConstants'
import './BreathingOrb.css'

interface BreathingOrbProps {
  phase: SessionPhase
  phaseProgress: number
  holdLevel?: 'expanded' | 'contracted'
  reducedMotion?: boolean
}

function getOrbScale(
  phase: SessionPhase,
  progress: number,
  holdLevel: 'expanded' | 'contracted',
): number {
  const min = 0.72
  const max = 1

  if (phase === 'inhale') {
    return min + (max - min) * progress
  }

  if (phase === 'exhale') {
    return max - (max - min) * progress
  }

  return holdLevel === 'expanded' ? max : min
}

export function BreathingOrb({
  phase,
  phaseProgress,
  holdLevel = 'expanded',
  reducedMotion,
}: BreathingOrbProps) {
  const scale = reducedMotion ? 0.86 : getOrbScale(phase, phaseProgress, holdLevel)

  return (
    <div className="breathing-orb" aria-hidden="true">
      <div
        className={`breathing-orb__ring breathing-orb__ring--outer ${reducedMotion ? 'breathing-orb__ring--static' : ''}`}
        style={{ transform: `scale(${scale * 1.18})` }}
      />
      <div
        className={`breathing-orb__ring breathing-orb__ring--middle ${reducedMotion ? 'breathing-orb__ring--static' : ''}`}
        style={{ transform: `scale(${scale * 1.08})` }}
      />
      <div
        className={`breathing-orb__core ${reducedMotion ? 'breathing-orb__core--static' : ''}`}
        style={{ transform: `scale(${scale})` }}
        data-phase={phase}
      />
    </div>
  )
}
