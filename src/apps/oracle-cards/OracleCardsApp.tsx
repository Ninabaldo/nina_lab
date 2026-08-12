import { useMemo, useState } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import {
  getOracleDeck,
  pickRandomOracleCard,
  type OracleCard,
  type OracleIntention,
} from './oracleData'
import type { OracleTheme } from './oracleMeta'
import { OracleIllustration } from './OracleIllustration'
import './OracleCardsApp.css'

const INTENTIONS: OracleIntention[] = ['love', 'relations', 'work', 'open']

export function OracleCardsApp() {
  const { language, t } = useSiteLanguage()
  const app = t.apps.oracleCards

  const deck = useMemo(() => getOracleDeck(language), [language])
  const [intention, setIntention] = useState<OracleIntention>('open')
  const [drawn, setDrawn] = useState<OracleCard | null>(null)
  const [revealing, setRevealing] = useState(false)

  const themeLabels: Record<OracleTheme, string> = {
    love: app.themeLove,
    relations: app.themeRelations,
    work: app.themeWork,
  }

  const intentionLabels: Record<OracleIntention, string> = {
    love: app.themeLove,
    relations: app.themeRelations,
    work: app.themeWork,
    open: app.intentionOpen,
  }

  const introCopy: Record<OracleIntention, string> = {
    love: app.introLove,
    relations: app.introRelations,
    work: app.introWork,
    open: app.introOpen,
  }

  const revealCopy: Record<OracleIntention, string> = {
    love: app.revealLove,
    relations: app.revealRelations,
    work: app.revealWork,
    open: app.revealOpen,
  }

  const handleDraw = () => {
    if (revealing) return
    setRevealing(true)
    window.setTimeout(() => {
      setDrawn((prev) => pickRandomOracleCard(deck, { exclude: prev ?? undefined, intention }))
      setRevealing(false)
    }, 320)
  }

  const handleIntentionChange = (next: OracleIntention) => {
    setIntention(next)
    setDrawn(null)
  }

  return (
    <div className="oracle-cards">
      <fieldset className="oracle-cards__intentions">
        <legend className="oracle-cards__intentions-label">{app.intentionLabel}</legend>
        <div className="oracle-cards__intentions-row">
          {INTENTIONS.map((item) => (
            <button
              key={item}
              type="button"
              className={`oracle-cards__intention ${intention === item ? 'oracle-cards__intention--active' : ''}`}
              onClick={() => handleIntentionChange(item)}
              aria-pressed={intention === item}
            >
              {intentionLabels[item]}
            </button>
          ))}
        </div>
      </fieldset>

      {!drawn && (
        <p className="oracle-cards__intro">{introCopy[intention]}</p>
      )}

      <div className={`oracle-cards__stage ${revealing ? 'oracle-cards__stage--revealing' : ''}`}>
        {drawn ? (
          <article className={`oracle-cards__card oracle-cards__card--face oracle-cards__card--v${drawn.variant}`}>
            <div className="oracle-cards__card-top">
              <span className="oracle-cards__number">{String(drawn.id).padStart(2, '0')}</span>
              <span className="oracle-cards__theme">{themeLabels[drawn.theme]}</span>
            </div>
            <OracleIllustration symbol={drawn.symbol} variant={drawn.variant} />
            <div className="oracle-cards__message-wrap">
              <span className="oracle-cards__for-you">{revealCopy[intention]}</span>
              <p className="oracle-cards__message">&ldquo;{drawn.text}&rdquo;</p>
            </div>
          </article>
        ) : (
          <div className="oracle-cards__card oracle-cards__card--back" aria-hidden="true">
            <div className="oracle-cards__back-ring" />
            <span className="oracle-cards__back-mark">✦</span>
          </div>
        )}
      </div>

      <button type="button" className="oracle-cards__btn" onClick={handleDraw} disabled={revealing}>
        {drawn ? app.drawAgain : app.draw}
      </button>
    </div>
  )
}
