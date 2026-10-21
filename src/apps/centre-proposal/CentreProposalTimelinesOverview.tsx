import type { CentreProposalCopy } from '../../i18n/centreProposal/types'
import { SOFTWARE_IDS } from './pricing'

export function CentreProposalTimelinesOverview({ copy }: { copy: CentreProposalCopy }) {
  const cfg = copy.configurator

  return (
    <div className="cp-timelines-overview" id="terminis" aria-labelledby="cp-timelines-heading">
      <h3 id="cp-timelines-heading" className="cp-timelines-overview__title">
        {cfg.step1.timelinesHeading}
      </h3>
      <ul className="cp-timelines-overview__list">
        {SOFTWARE_IDS.map((id) => {
          const pack = cfg.software[id]
          return (
            <li key={id} className="cp-timelines-overview__row">
              <span className="cp-timelines-overview__plan">{pack.title}</span>
              <span className="cp-timeline-badge cp-timeline-badge--compact">{pack.timeline}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
