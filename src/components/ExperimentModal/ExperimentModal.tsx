import { useEffect, useRef } from 'react'
import type { Experiment } from '../../data/experiments'
import { getExperimentCopy } from '../../i18n'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { ExperimentApp } from '../ExperimentApp/ExperimentApp'
import { isInteractiveExperiment } from '../ExperimentApp/experimentApps'
import { ExperimentPreview } from '../ExperimentPreview/ExperimentPreview'
import './ExperimentModal.css'

interface ExperimentModalProps {
  experiment: Experiment | null
  onClose: () => void
}

export function ExperimentModal({ experiment, onClose }: ExperimentModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const { t } = useSiteLanguage()

  useEffect(() => {
    if (!experiment) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [experiment, onClose])

  if (!experiment) return null

  const isInteractive = isInteractiveExperiment(experiment.previewType)
  const copy = getExperimentCopy(t, experiment.id)

  return (
    <div className="experiment-modal" role="presentation">
      <button
        type="button"
        className="experiment-modal__backdrop"
        onClick={onClose}
        aria-label={t.modal.closeAria}
      />

      <div
        ref={dialogRef}
        className={`experiment-modal__dialog ${isInteractive ? 'experiment-modal__dialog--app' : ''} ${experiment.id === 'breathe' ? 'experiment-modal__dialog--breathe' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="experiment-modal-title"
      >
        <div
          className={`experiment-modal__preview ${isInteractive ? 'experiment-modal__preview--app' : ''} ${experiment.id === 'breathe' ? 'experiment-modal__preview--breathe' : ''}`}
        >
          {isInteractive ? (
            <ExperimentApp type={experiment.previewType} />
          ) : (
            <ExperimentPreview type={experiment.previewType} />
          )}
        </div>

        <div className="experiment-modal__content">
          <div className="experiment-modal__meta">
            <span className="experiment-modal__category">{copy.category}</span>
          </div>

          <h3 id="experiment-modal-title" className="experiment-modal__title">
            {copy.name}
          </h3>
          <p className="experiment-modal__description">{copy.description}</p>

          <button
            ref={closeRef}
            type="button"
            className="experiment-modal__close"
            onClick={onClose}
          >
            {t.modal.close}
          </button>
        </div>
      </div>
    </div>
  )
}
