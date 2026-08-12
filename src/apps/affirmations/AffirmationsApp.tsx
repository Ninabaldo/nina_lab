import { useMemo, useState } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { affirmationsByLanguage, pickRandomAffirmation } from './affirmationsData'
import './AffirmationsApp.css'

export function AffirmationsApp() {
  const { language, t } = useSiteLanguage()
  const app = t.apps.affirmations

  const list = useMemo(() => affirmationsByLanguage[language], [language])

  const [current, setCurrent] = useState(() => pickRandomAffirmation(list))
  const [fading, setFading] = useState(false)

  const handleNew = () => {
    setFading(true)
    window.setTimeout(() => {
      setCurrent((prev) => pickRandomAffirmation(list, prev))
      setFading(false)
    }, 220)
  }

  return (
    <div className="affirmations">
      <blockquote
        className={`affirmations__quote ${fading ? 'affirmations__quote--fading' : ''}`}
      >
        <p className="affirmations__text">&ldquo;{current.text}&rdquo;</p>
        <footer className="affirmations__author">{current.author}</footer>
      </blockquote>

      <button type="button" className="affirmations__btn" onClick={handleNew}>
        {app.newAffirmation}
      </button>
    </div>
  )
}
