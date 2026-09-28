import { useState } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { analyzeIncident } from './api'
import type { IncidentAnalysis } from './types'
import './IncidentBriefApp.css'

const EMPTY_ANALYSIS: IncidentAnalysis = {
  whatHappened: '',
  businessImpact: '',
  recommendedAction: '',
}

interface IncidentBriefAppProps {
  embedded?: boolean
}

export function IncidentBriefApp({ embedded = false }: IncidentBriefAppProps) {
  const { language, t } = useSiteLanguage()
  const app = t.apps.incidentBrief

  const [input, setInput] = useState('')
  const [analysis, setAnalysis] = useState<IncidentAnalysis>(EMPTY_ANALYSIS)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const hasAnalysis = Boolean(
    analysis.whatHappened || analysis.businessImpact || analysis.recommendedAction,
  )

  const handleAnalyze = async () => {
    const trimmed = input.trim()
    if (!trimmed) {
      setError(app.errors.emptyInput)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const result = await analyzeIncident(trimmed, language)
      setAnalysis(result)
    } catch (caught) {
      setAnalysis(EMPTY_ANALYSIS)
      const message = caught instanceof Error ? caught.message : app.errors.generic
      setError(
        message.includes('OPENAI_API_KEY') ? app.errors.missingApiKey : message || app.errors.generic,
      )
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setInput('')
    setAnalysis(EMPTY_ANALYSIS)
    setError(null)
  }

  return (
    <div className={`incident-brief${embedded ? ' incident-brief--embedded' : ''}`}>
      {embedded ? null : (
        <header className="incident-brief__header">
          <p className="incident-brief__eyebrow">{app.eyebrow}</p>
          <h1 className="incident-brief__title">{app.title}</h1>
          <p className="incident-brief__subtitle">{app.subtitle}</p>
        </header>
      )}

      <div className="incident-brief__layout">
        <section className="incident-brief__panel incident-brief__panel--input" aria-labelledby="incident-brief-input-heading">
          <h2 id="incident-brief-input-heading" className="incident-brief__panel-title">
            {app.inputLabel}
          </h2>
          <textarea
            className="incident-brief__textarea"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={app.inputPlaceholder}
            spellCheck={false}
          />
          <div className="incident-brief__actions">
            <button
              type="button"
              className="incident-brief__button incident-brief__button--primary"
              onClick={handleAnalyze}
              disabled={loading}
            >
              {loading ? app.analyzing : app.analyze}
            </button>
            <button
              type="button"
              className="incident-brief__button incident-brief__button--ghost"
              onClick={handleClear}
              disabled={loading}
            >
              {app.clear}
            </button>
          </div>
          {error ? <p className="incident-brief__error">{error}</p> : null}
        </section>

        <section className="incident-brief__panel incident-brief__panel--output" aria-labelledby="incident-brief-output-heading">
          <h2 id="incident-brief-output-heading" className="incident-brief__panel-title">
            {app.outputTitle}
          </h2>

          <div className="incident-brief__sections">
            <article className="incident-brief__section">
              <h3 className="incident-brief__section-title">{app.sections.whatHappened}</h3>
              <p
                className={`incident-brief__section-body${hasAnalysis ? ' incident-brief__section-body--filled' : ''}`}
              >
                {hasAnalysis ? analysis.whatHappened : app.emptySection}
              </p>
            </article>

            <article className="incident-brief__section">
              <h3 className="incident-brief__section-title">{app.sections.businessImpact}</h3>
              <p
                className={`incident-brief__section-body${hasAnalysis ? ' incident-brief__section-body--filled' : ''}`}
              >
                {hasAnalysis ? analysis.businessImpact : app.emptySection}
              </p>
            </article>

            <article className="incident-brief__section">
              <h3 className="incident-brief__section-title">{app.sections.recommendedAction}</h3>
              <p
                className={`incident-brief__section-body${hasAnalysis ? ' incident-brief__section-body--filled' : ''}`}
              >
                {hasAnalysis ? analysis.recommendedAction : app.emptySection}
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}
