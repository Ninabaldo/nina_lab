import { useState, type CSSProperties, type KeyboardEvent } from 'react'
import { experiments, isExperimentAvailable } from '../../data/experiments'
import type { Experiment } from '../../data/experiments'
import { getExperimentCopy } from '../../i18n'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { ExperimentPreview } from '../ExperimentPreview/ExperimentPreview'
import { ExperimentModal } from '../ExperimentModal/ExperimentModal'
import './Experiments.css'

interface ExperimentItemProps {
  experiment: Experiment
  index: number
  onOpen: (experiment: Experiment) => void
}

function ExperimentItem({ experiment, index, onOpen }: ExperimentItemProps) {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()
  const copy = getExperimentCopy(t, experiment.id)
  const available = isExperimentAvailable(experiment)

  const handleActivate = () => {
    if (!available) return
    onOpen(experiment)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!available) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleActivate()
    }
  }

  const classNames = [
    'experiment',
    `experiment--${experiment.size}`,
    `experiment--${experiment.id}`,
    'reveal',
    available ? 'experiment--interactive' : 'experiment--coming-soon',
  ].join(' ')

  return (
    <article
      className={classNames}
      ref={ref}
      style={{ '--reveal-delay': `${index * 0.08}s` } as CSSProperties}
      role={available ? 'button' : undefined}
      tabIndex={available ? 0 : undefined}
      aria-label={
        available
          ? `${copy.name}. ${t.experiments.openApp}`
          : `${copy.name}. ${t.experiments.comingSoon}`
      }
      aria-disabled={available ? undefined : true}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
    >
      <div className="experiment__preview">
        {!available && (
          <span className="experiment__badge">{t.experiments.comingSoon}</span>
        )}
        <ExperimentPreview type={experiment.previewType} />
      </div>
      <div className="experiment__info">
        <span className="experiment__category">{copy.category}</span>
        <h3 className="experiment__name">{copy.name}</h3>
        <p className="experiment__description">{copy.description}</p>
        <span className="experiment__cta" aria-hidden="true">
          {available ? t.experiments.tryIt : t.experiments.comingSoon}
          {available && <span className="experiment__cta-arrow">→</span>}
        </span>
      </div>
    </article>
  )
}

export function Experiments() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const [activeExperiment, setActiveExperiment] = useState<Experiment | null>(null)
  const { t } = useSiteLanguage()

  return (
    <section id="experiments" className="experiments" aria-labelledby="experiments-heading">
      <div className="experiments__inner">
        <header className="experiments__header reveal" ref={sectionRef}>
          <h2 id="experiments-heading" className="experiments__title">{t.experiments.title}</h2>
          <p className="experiments__count">
            {experiments.length} {t.experiments.projects}
          </p>
        </header>

        <div className="experiments__grid">
          {experiments.map((experiment, index) => (
            <ExperimentItem
              key={experiment.id}
              experiment={experiment}
              index={index}
              onOpen={setActiveExperiment}
            />
          ))}
        </div>
      </div>

      <ExperimentModal
        experiment={activeExperiment}
        onClose={() => setActiveExperiment(null)}
      />
    </section>
  )
}
