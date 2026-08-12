import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { selectProfile } from './scoring'
import type { Choice, ProfileId } from './types'
import { QUESTION_IDS } from './types'
import './LifeAlgorithmApp.css'

const TOTAL = QUESTION_IDS.length
const ADVANCE_MS = 420

type Phase = 'intro' | 'question' | 'result'

const QUESTION_ACCENTS = [
  'coral',
  'sage',
  'blue',
  'yellow',
  'coral',
  'sage',
  'blue',
  'yellow',
  'sage',
  'coral',
] as const

export function LifeAlgorithmApp() {
  const { t } = useSiteLanguage()
  const app = t.apps.lifeAlgorithm

  const [phase, setPhase] = useState<Phase>('intro')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Choice[]>([])
  const [selected, setSelected] = useState<Choice | null>(null)
  const [exiting, setExiting] = useState(false)
  const [profileId, setProfileId] = useState<ProfileId | null>(null)
  const advanceTimer = useRef<number | null>(null)

  const clearAdvanceTimer = useCallback(() => {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current)
      advanceTimer.current = null
    }
  }, [])

  useEffect(() => () => clearAdvanceTimer(), [clearAdvanceTimer])

  const reset = () => {
    clearAdvanceTimer()
    setPhase('intro')
    setQuestionIndex(0)
    setAnswers([])
    setSelected(null)
    setExiting(false)
    setProfileId(null)
  }

  const handleStart = () => {
    setPhase('question')
    setQuestionIndex(0)
    setAnswers([])
    setSelected(null)
    setExiting(false)
  }

  const handleSelect = (choice: Choice) => {
    if (selected || exiting) return

    setSelected(choice)
    advanceTimer.current = window.setTimeout(() => {
      setExiting(true)
      advanceTimer.current = window.setTimeout(() => {
        const nextAnswers = [...answers, choice]
        setAnswers(nextAnswers)
        setSelected(null)
        setExiting(false)

        if (nextAnswers.length >= TOTAL) {
          setProfileId(selectProfile(nextAnswers))
          setPhase('result')
          return
        }

        setQuestionIndex(nextAnswers.length)
      }, 220)
    }, ADVANCE_MS)
  }

  const progress = phase === 'question' ? ((questionIndex + 1) / TOTAL) * 100 : 0
  const questionId = QUESTION_IDS[questionIndex]
  const question = questionId ? app.questions[questionId] : null
  const profile = profileId ? app.profiles[profileId] : null

  return (
    <div
      className={`life-algo life-algo--${phase}`}
      style={{ '--life-progress': `${progress}%` } as CSSProperties}
    >
      {phase === 'intro' && (
        <div className="life-algo__screen life-algo__screen--intro">
          <p className="life-algo__lab">{app.lab}</p>
          <h2 className="life-algo__title">{app.title}</h2>
          <p className="life-algo__subtitle">{app.subtitle}</p>
          <p className="life-algo__hint">{app.introHint}</p>
          <button type="button" className="life-algo__start" onClick={handleStart}>
            {app.start}
          </button>
        </div>
      )}

      {phase === 'question' && question && questionId && (
        <div
          className={`life-algo__screen life-algo__screen--question ${exiting ? 'life-algo__screen--exit' : ''}`}
          key={questionId}
        >
          <div className="life-algo__progress-wrap">
            <div className="life-algo__progress-meta">
              <span className="life-algo__progress-count">
                {String(questionIndex + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
              </span>
            </div>
            <div className="life-algo__progress-track" aria-hidden="true">
              <span className="life-algo__progress-fill" />
            </div>
          </div>

          <p className="life-algo__theme">{question.theme}</p>

          <div className="life-algo__choices">
            {(['a', 'b'] as const).map((side) => {
              const option = question[side]
              const isSelected = selected === side
              const accent = QUESTION_ACCENTS[questionIndex]

              return (
                <button
                  key={side}
                  type="button"
                  className={`life-algo__choice life-algo__choice--${accent} ${isSelected ? 'life-algo__choice--selected' : ''} ${selected && !isSelected ? 'life-algo__choice--dimmed' : ''}`}
                  onClick={() => handleSelect(side)}
                  disabled={Boolean(selected)}
                  aria-pressed={isSelected}
                >
                  <span className="life-algo__choice-label">{option.label}</span>
                  <span className="life-algo__choice-detail">{option.detail}</span>
                  <span className="life-algo__choice-sub">{option.subdetail}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {phase === 'result' && profile && profileId && (
        <div className="life-algo__screen life-algo__screen--result">
          <p className="life-algo__result-eyebrow">{app.resultEyebrow}</p>
          <h2 className="life-algo__result-name">{profile.name}</h2>
          <p className="life-algo__result-city">
            {app.resultLead.replace('{city}', profile.city)}
          </p>
          <span className="life-algo__city-mark" aria-hidden="true">
            {profile.city}
          </span>

          <section className="life-algo__block">
            <h3 className="life-algo__block-title">{app.yourVersion}</h3>
            <p className="life-algo__block-text">{profile.lifestyle}</p>
          </section>

          <section className="life-algo__block">
            <h3 className="life-algo__block-title">{app.idealDay}</h3>
            <ol className="life-algo__timeline">
              {profile.timeline.map((item) => (
                <li key={`${item.time}-${item.activity}`} className="life-algo__timeline-item">
                  <span className="life-algo__timeline-time">{item.time}</span>
                  <span className="life-algo__timeline-activity">{item.activity}</span>
                </li>
              ))}
            </ol>
          </section>

          <ul className="life-algo__observations">
            <li>
              <span className="life-algo__obs-label">{app.obsYouValue}</span>
              <span className="life-algo__obs-value">{profile.observations.value}</span>
            </li>
            <li>
              <span className="life-algo__obs-label">{app.obsYouNeed}</span>
              <span className="life-algo__obs-value">{profile.observations.need}</span>
            </li>
            <li>
              <span className="life-algo__obs-label">{app.obsYouEnjoy}</span>
              <span className="life-algo__obs-value">{profile.observations.enjoy}</span>
            </li>
            <li>
              <span className="life-algo__obs-label">{app.obsYouMiss}</span>
              <span className="life-algo__obs-value">{profile.observations.miss}</span>
            </li>
          </ul>

          <div className="life-algo__closing">
            <p>{app.closing1}</p>
            <p>{app.closing2}</p>
          </div>

          <button type="button" className="life-algo__retry" onClick={reset}>
            {app.tryAgain}
          </button>
        </div>
      )}
    </div>
  )
}
