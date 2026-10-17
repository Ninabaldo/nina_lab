import type { ServiceId } from '../../data/services'
import './ServicePreview.css'

interface ServicePreviewProps {
  serviceId: ServiceId
}

export function ServicePreview({ serviceId }: ServicePreviewProps) {
  return (
    <div
      className={`service-preview service-preview--${serviceId}`}
      aria-hidden="true"
    >
      {serviceId === 'smallWebApps' && (
        <>
          <div className="service-preview__chrome">
            <span />
            <span />
            <span />
          </div>
          <div className="service-preview__app">
            <span className="service-preview__app-icon" />
            <span className="service-preview__app-line service-preview__app-line--short" />
            <span className="service-preview__app-line" />
            <span className="service-preview__app-btn" />
          </div>
        </>
      )}

      {serviceId === 'interactiveExperiences' && (
        <>
          <span className="service-preview__orb service-preview__orb--1" />
          <span className="service-preview__orb service-preview__orb--2" />
          <span className="service-preview__orb service-preview__orb--3" />
          <div className="service-preview__choices">
            <span className="service-preview__choice service-preview__choice--on">A</span>
            <span className="service-preview__choice">B</span>
          </div>
          <span className="service-preview__result" />
        </>
      )}

      {serviceId === 'websitesMicrosites' && (
        <>
          <div className="service-preview__site-nav">
            <span className="service-preview__site-logo" />
            <span className="service-preview__site-link" />
            <span className="service-preview__site-link service-preview__site-link--short" />
          </div>
          <div className="service-preview__site-hero">
            <span className="service-preview__site-headline" />
            <span className="service-preview__site-sub" />
            <span className="service-preview__site-cta" />
          </div>
        </>
      )}

      {serviceId === 'businessTools' && (
        <>
          <div className="service-preview__dash">
            <span className="service-preview__bar service-preview__bar--1" />
            <span className="service-preview__bar service-preview__bar--2" />
            <span className="service-preview__bar service-preview__bar--3" />
          </div>
          <div className="service-preview__flow">
            <span className="service-preview__flow-box" />
            <span className="service-preview__flow-arrow" />
            <span className="service-preview__flow-doc" />
          </div>
        </>
      )}

      {serviceId === 'educationalProducts' && (
        <>
          <div className="service-preview__lesson-steps">
            <span className="service-preview__step service-preview__step--done" />
            <span className="service-preview__step service-preview__step--active" />
            <span className="service-preview__step" />
          </div>
          <div className="service-preview__lesson">
            <span className="service-preview__lesson-title" />
            <span className="service-preview__lesson-block" />
            <span className="service-preview__lesson-block service-preview__lesson-block--dim" />
          </div>
        </>
      )}
    </div>
  )
}
