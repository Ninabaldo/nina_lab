import { CentreDemoProvider } from './centreDemoContext'
import { StudentAppMockup } from './StudentAppMockup'
import { useCentreProposalCopy } from './useCentreProposalCopy'
import './CentreProposalApp.css'

export function StudentAppDemo() {
  const copy = useCentreProposalCopy()

  return (
    <CentreDemoProvider>
    <div className="centre-demo">
      <header className="centre-demo__bar">
        <a href="/proposta-centre" className="centre-demo__back">
          {copy.demo.back}
        </a>
        <span className="centre-demo__badge">{copy.demo.studentBadge}</span>
      </header>

      <div className="centre-demo__layout">
        <StudentAppMockup copy={copy} />
      </div>

      <p className="centre-demo__disclaimer">{copy.demo.disclaimer}</p>
    </div>
    </CentreDemoProvider>
  )
}
