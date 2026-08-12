import { useLanguage } from '../hooks/useLanguage'
import { storeDuration, type DurationMinutes } from '../storage'
import './DurationSelector.css'

interface DurationSelectorProps {
  value: DurationMinutes
  onChange: (minutes: DurationMinutes) => void
  disabled?: boolean
}

const OPTIONS: DurationMinutes[] = [5, 10, 15]

export function DurationSelector({ value, onChange, disabled }: DurationSelectorProps) {
  const { t } = useLanguage()

  const labels: Record<DurationMinutes, string> = {
    5: t.duration5,
    10: t.duration10,
    15: t.duration15,
  }

  const handleChange = (minutes: DurationMinutes) => {
    onChange(minutes)
    storeDuration(minutes)
  }

  return (
    <div className="duration-selector">
      <p className="duration-selector__label">{t.durationQuestion}</p>
      <div className="duration-selector__options" role="radiogroup" aria-label={t.durationQuestion}>
        {OPTIONS.map((minutes) => (
          <button
            key={minutes}
            type="button"
            role="radio"
            aria-checked={value === minutes}
            className={`duration-selector__option ${value === minutes ? 'duration-selector__option--active' : ''}`}
            onClick={() => handleChange(minutes)}
            disabled={disabled}
          >
            {labels[minutes]}
          </button>
        ))}
      </div>
    </div>
  )
}
