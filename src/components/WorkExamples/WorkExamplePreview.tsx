import type { WorkExamplePreview as PreviewSpec } from '../../data/workExamples'
import { ExperimentPreview } from '../ExperimentPreview/ExperimentPreview'
import './WorkExamplePreview.css'

interface WorkExamplePreviewProps {
  preview: PreviewSpec
}

export function WorkExamplePreview({ preview }: WorkExamplePreviewProps) {
  if (preview.kind === 'experiment') {
    return (
      <div className="work-example-preview work-example-preview--experiment">
        <ExperimentPreview type={preview.previewType} />
      </div>
    )
  }

  return (
    <div
      className={`work-example-preview work-example-preview--${preview.kind}`}
      aria-hidden="true"
    >
      {preview.kind === 'project' && (
        <>
          <span className="work-example-preview__device-notch" />
          <span className="work-example-preview__device-line work-example-preview__device-line--wide" />
          <span className="work-example-preview__device-line" />
          <span className="work-example-preview__device-pill" />
        </>
      )}
      {preview.kind === 'tool' && (
        <>
          <span className="work-example-preview__tool-row" />
          <span className="work-example-preview__tool-box" />
          <span className="work-example-preview__tool-box work-example-preview__tool-box--accent" />
        </>
      )}
      {preview.kind === 'site' && (
        <>
          <span className="work-example-preview__site-bar" />
          <span className="work-example-preview__site-hero" />
          <span className="work-example-preview__site-grid">
            <span />
            <span />
          </span>
        </>
      )}
    </div>
  )
}
