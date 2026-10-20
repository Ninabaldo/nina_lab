import type { ReactNode } from 'react'
import { SiteControls } from '../../components/SiteControls/SiteControls'
import './CentreProposalApp.css'

export function CentreProposalShell({ children }: { children: ReactNode }) {
  return (
    <div className="centre-proposal-shell">
      <div className="centre-proposal-shell__lang">
        <SiteControls />
      </div>
      {children}
    </div>
  )
}
