import { CentreDemoProvider } from './centreDemoContext'
import { DashboardMockup } from './DashboardMockup'
import { useCentreProposalCopy } from './useCentreProposalCopy'
import './CentreProposalApp.css'

export function DashboardDemo() {
  const copy = useCentreProposalCopy()

  return (
    <CentreDemoProvider>
    <div className="centre-demo">
      <header className="centre-demo__bar">
        <a href="/proposta-centre" className="centre-demo__back">
          {copy.demo.back}
        </a>
        <span className="centre-demo__badge">{copy.demo.dashboardBadge}</span>
      </header>

      <div className="centre-demo__layout centre-demo__layout--wide">
        <DashboardMockup copy={copy} />
      </div>
    </div>
    </CentreDemoProvider>
  )
}
