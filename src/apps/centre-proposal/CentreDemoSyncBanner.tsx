import { useCentreDemo } from './centreDemoContext'
import { useCentreProposalCopy } from './useCentreProposalCopy'

export function CentreDemoSyncBanner() {
  const copy = useCentreProposalCopy()
  const { studentBookedYoga } = useCentreDemo()

  return (
    <p
      className={`centre-proposal__sync-banner${
        studentBookedYoga ? ' centre-proposal__sync-banner--active' : ''
      }`}
      role="status"
      aria-live="polite"
    >
      <span className="centre-proposal__sync-dot" aria-hidden="true" />
      {copy.demo.student.labels.syncHint}
    </p>
  )
}
