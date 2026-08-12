import type { JSX } from 'react'
import { AffirmationsApp } from '../../apps/affirmations/AffirmationsApp'
import { BreatheApp } from '../../apps/breathe/BreatheApp'
import { ColorStudioApp } from '../../apps/color-studio/ColorStudioApp'
import { FocusTimerApp } from '../../apps/focus-timer/FocusTimerApp'
import { OracleCardsApp } from '../../apps/oracle-cards/OracleCardsApp'
import { SplitBillApp } from '../../apps/split-bill/SplitBillApp'
import type { ExperimentPreviewType } from '../../data/experiments'

const appComponents: Partial<Record<ExperimentPreviewType, () => JSX.Element>> = {
  breathe: () => <BreatheApp embedded />,
  timer: FocusTimerApp,
  colors: ColorStudioApp,
  bill: SplitBillApp,
  affirmations: AffirmationsApp,
  oracle: OracleCardsApp,
}

interface ExperimentAppProps {
  type: ExperimentPreviewType
}

export function ExperimentApp({ type }: ExperimentAppProps) {
  const AppComponent = appComponents[type]
  if (!AppComponent) return null
  return <AppComponent />
}
