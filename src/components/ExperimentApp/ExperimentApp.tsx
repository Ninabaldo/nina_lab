import type { JSX } from 'react'
import { AffirmationsApp } from '../../apps/affirmations/AffirmationsApp'
import { BreatheApp } from '../../apps/breathe/BreatheApp'
import { FocusTimerApp } from '../../apps/focus-timer/FocusTimerApp'
import { LifeAlgorithmApp } from '../../apps/life-algorithm/LifeAlgorithmApp'
import { SplitBillApp } from '../../apps/split-bill/SplitBillApp'
import type { ExperimentPreviewType } from '../../data/experiments'

const appComponents: Partial<Record<ExperimentPreviewType, () => JSX.Element>> = {
  breathe: () => <BreatheApp embedded />,
  timer: FocusTimerApp,
  life: LifeAlgorithmApp,
  bill: SplitBillApp,
  affirmations: AffirmationsApp,
}

interface ExperimentAppProps {
  type: ExperimentPreviewType
}

export function ExperimentApp({ type }: ExperimentAppProps) {
  const AppComponent = appComponents[type]
  if (!AppComponent) return null
  return <AppComponent />
}
