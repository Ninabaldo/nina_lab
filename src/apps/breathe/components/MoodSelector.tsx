import { useLanguage } from '../hooks/useLanguage'
import './MoodSelector.css'

interface MoodSelectorProps {
  value?: number
  onChange: (value: number | undefined) => void
  label?: string
  optional?: boolean
}

const MOOD_VALUES = [1, 2, 3, 4, 5] as const

export function MoodSelector({ value, onChange, label, optional }: MoodSelectorProps) {
  const { t } = useLanguage()
  const question = label ?? t.moodQuestion

  return (
    <div className="mood-selector">
      <p className="mood-selector__label">{question}</p>
      <div className="mood-selector__options" role="radiogroup" aria-label={question}>
        {MOOD_VALUES.map((mood) => (
          <button
            key={mood}
            type="button"
            role="radio"
            aria-checked={value === mood}
            className={`mood-selector__option ${value === mood ? 'mood-selector__option--active' : ''}`}
            onClick={() => onChange(value === mood && optional ? undefined : mood)}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  )
}
