import type { BreathingGoal } from '../hooks/breathingConstants'
import { useLanguage } from '../hooks/useLanguage'
import { storeGoal } from '../storage'
import './GoalSelector.css'

interface GoalSelectorProps {
  value: BreathingGoal
  onChange: (goal: BreathingGoal) => void
  disabled?: boolean
}

const OPTIONS: BreathingGoal[] = ['calm', 'focus', 'reset', 'sleep']

export function GoalSelector({ value, onChange, disabled }: GoalSelectorProps) {
  const { t } = useLanguage()

  const labels: Record<BreathingGoal, string> = {
    calm: t.goalCalm,
    focus: t.goalFocus,
    reset: t.goalReset,
    sleep: t.goalSleep,
  }

  const handleChange = (goal: BreathingGoal) => {
    onChange(goal)
    storeGoal(goal)
  }

  return (
    <div className="goal-selector">
      <p className="goal-selector__label">{t.goalQuestion}</p>
      <div className="goal-selector__options" role="radiogroup" aria-label={t.goalQuestion}>
        {OPTIONS.map((goal) => (
          <button
            key={goal}
            type="button"
            role="radio"
            aria-checked={value === goal}
            className={`goal-selector__option ${value === goal ? 'goal-selector__option--active' : ''}`}
            onClick={() => handleChange(goal)}
            disabled={disabled}
          >
            {labels[goal]}
          </button>
        ))}
      </div>
    </div>
  )
}
