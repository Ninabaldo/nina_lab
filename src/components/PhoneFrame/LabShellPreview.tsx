import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from '../../lib/preferences'
import { PhoneFrame } from './PhoneFrame'
import './LabShellPreview.css'

export function LabShellPreview() {
  const { language, t } = useSiteLanguage()

  return (
    <div className="hero__phone">
      <PhoneFrame>
        <div className="lab-shell">
          <div className="lab-shell__toolbar">
            <span className="lab-shell__lang">{LANGUAGE_LABELS[language]} ▾</span>
            <span className="lab-shell__theme" aria-hidden="true">◐</span>
          </div>

          <div className="lab-shell__intro">
            <p className="lab-shell__name">{t.hero.phoneTitle}</p>
            <p className="lab-shell__subtitle">
              {t.hero.subtitle1}
              <br />
              {t.hero.subtitle2}
            </p>
          </div>

          <div className="lab-shell__grid" aria-hidden="true">
            <span className="lab-shell__tile lab-shell__tile--timer" />
            <span className="lab-shell__tile lab-shell__tile--life" />
            <span className="lab-shell__tile lab-shell__tile--bill" />
            <span className="lab-shell__tile lab-shell__tile--quote" />
          </div>

          <p className="lab-shell__meta">
            {t.hero.phoneMeta}
            <span className="lab-shell__langs">
              {SUPPORTED_LANGUAGES.map((code) => LANGUAGE_LABELS[code]).join(' · ')}
            </span>
          </p>
        </div>
      </PhoneFrame>
    </div>
  )
}
