import type { JSX } from 'react'
import { BreatheStaticPreview } from '../../apps/breathe/BreatheApp'
import type { ExperimentPreviewType } from '../../data/experiments'
import './ExperimentPreview.css'

interface ExperimentPreviewProps {
  type: ExperimentPreviewType
}

function BreathePreview() {
  return (
    <div className="preview preview--breathe">
      <BreatheStaticPreview />
    </div>
  )
}

function TimerPreview() {
  return (
    <div className="preview preview--timer">
      <div className="preview-timer">
        <svg viewBox="0 0 80 80" className="preview-timer__ring">
          <circle cx="40" cy="40" r="34" fill="none" stroke="var(--color-border)" strokeWidth="3" />
          <circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="var(--color-accent-sage)"
            strokeWidth="3"
            strokeDasharray="213.6"
            strokeDashoffset="53"
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>
        <span className="preview-timer__time">25:00</span>
      </div>
    </div>
  )
}

function LifePreview() {
  return (
    <div className="preview preview--life">
      <div className="preview-life">
        <span className="preview-life__count">01</span>
        <span className="preview-life__divider" aria-hidden="true" />
        <span className="preview-life__total">10</span>
      </div>
    </div>
  )
}

function BillPreview() {
  return (
    <div className="preview preview--bill">
      <div className="preview-bill">
        <div className="preview-bill__row">
          <span>Ana</span>
          <span>€12.50</span>
        </div>
        <div className="preview-bill__row">
          <span>Marco</span>
          <span>€12.50</span>
        </div>
        <div className="preview-bill__row preview-bill__row--total">
          <span>Total</span>
          <span>€50.00</span>
        </div>
        <div className="preview-bill__divider" />
        <div className="preview-bill__people">
          <span className="preview-bill__avatar">A</span>
          <span className="preview-bill__avatar">M</span>
          <span className="preview-bill__avatar">L</span>
          <span className="preview-bill__avatar preview-bill__avatar--add">+</span>
        </div>
      </div>
    </div>
  )
}

function AffirmationsPreview() {
  return (
    <div className="preview preview--affirmations">
      <div className="preview-affirmations">
        <p className="preview-affirmations__text">
          &ldquo;Lo que niegas te somete; lo que aceptas te transforma.&rdquo;
        </p>
        <span className="preview-affirmations__author">Carl Jung</span>
        <span className="preview-affirmations__btn">Nueva afirmación</span>
      </div>
    </div>
  )
}

const previewComponents: Record<ExperimentPreviewType, () => JSX.Element> = {
  breathe: BreathePreview,
  timer: TimerPreview,
  life: LifePreview,
  bill: BillPreview,
  affirmations: AffirmationsPreview,
}

export function ExperimentPreview({ type }: ExperimentPreviewProps) {
  const PreviewComponent = previewComponents[type]
  return <PreviewComponent />
}
