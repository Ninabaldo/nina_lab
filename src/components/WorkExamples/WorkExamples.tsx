import { useState, type CSSProperties, type KeyboardEvent } from 'react'
import { experiments, isExperimentAvailable, type Experiment } from '../../data/experiments'
import { getExperimentCopy } from '../../i18n'
import { getExperimentHref } from '../../lib/experimentLinks'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { ExperimentModal } from '../ExperimentModal/ExperimentModal'
import { ExperimentPreview } from '../ExperimentPreview/ExperimentPreview'
import './WorkExamples.css'

interface LabExampleCardProps {
  experiment: Experiment
  index: number
  onOpen: (experiment: Experiment) => void
}

function LabExampleCard({ experiment, index, onOpen }: LabExampleCardProps) {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()
  const copy = getExperimentCopy(t, experiment.id)
  const available = isExperimentAvailable(experiment)
  const href = getExperimentHref(experiment)
  const openInModal = available && experiment.id !== 'breathe'

  const handleActivate = () => {
    if (!available) return
    if (openInModal) {
      onOpen(experiment)
      return
    }
    window.location.href = href
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!available) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleActivate()
    }
  }

  return (
    <article
      ref={ref}
      className={`work-examples__card reveal${available ? ' work-examples__card--interactive' : ''}`}
      style={{ '--reveal-delay': `${index * 0.05}s` } as CSSProperties}
      role={available ? 'button' : undefined}
      tabIndex={available ? 0 : undefined}
      aria-label={
        available
          ? `${copy.name}. ${t.workExamples.openExperiment}`
          : `${copy.name}. ${t.experiments.comingSoon}`
      }
      aria-disabled={available ? undefined : true}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
    >
      <div className="work-examples__preview">
        {!available ? (
          <span className="work-examples__badge">{t.experiments.comingSoon}</span>
        ) : null}
        <ExperimentPreview type={experiment.previewType} />
      </div>
      <div className="work-examples__body">
        <span className="work-examples__tag">{copy.category}</span>
        <h3 className="work-examples__name">{copy.name}</h3>
        <p className="work-examples__text">{copy.description}</p>
        <span className="work-examples__link" aria-hidden="true">
          {available ? t.workExamples.openExperiment : t.experiments.comingSoon}
          {available ? <span>→</span> : null}
        </span>
      </div>
    </article>
  )
}

export function WorkExamples() {
  const headerRef = useScrollReveal<HTMLElement>()
  const [activeExperiment, setActiveExperiment] = useState<Experiment | null>(null)
  const { t } = useSiteLanguage()
  const copy = t.workExamples

  return (
    <section
      id="exemples"
      className="work-examples"
      aria-labelledby="work-examples-heading"
    >
      <div className="work-examples__inner">
        <header className="work-examples__header reveal" ref={headerRef}>
          <p className="work-examples__eyebrow">{copy.eyebrow}</p>
          <h2 id="work-examples-heading" className="work-examples__title">
            {copy.title}
          </h2>
          <p className="work-examples__lead">{copy.lead}</p>
        </header>

        <ul className="work-examples__grid">
          {experiments.map((experiment, index) => (
            <li key={experiment.id}>
              <LabExampleCard
                experiment={experiment}
                index={index}
                onOpen={setActiveExperiment}
              />
            </li>
          ))}
        </ul>
      </div>

      <ExperimentModal
        experiment={activeExperiment}
        onClose={() => setActiveExperiment(null)}
      />
    </section>
  )
}
