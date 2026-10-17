import { useId } from 'react'
import { normalizeHex } from '../../labDesign/colorUtils'
import './LabDesignPanel.css'

interface ColorFieldProps {
  label: string
  value: string
  onChange: (hex: string) => void
}

export function ColorField({ label, value, onChange }: ColorFieldProps) {
  const inputId = useId()
  const safeHex = normalizeHex(value) ?? '#000000'

  return (
    <div className="lab-design-field">
      <label className="lab-design-field__label" htmlFor={inputId}>
        {label}
      </label>
      <div className="lab-design-color">
        <span
          className="lab-design-color__swatch"
          style={{ backgroundColor: safeHex }}
          aria-hidden="true"
        />
        <input
          id={inputId}
          type="color"
          className="lab-design-color__picker"
          value={safeHex}
          onChange={(event) => {
            const next = normalizeHex(event.target.value)
            if (next) onChange(next)
          }}
          aria-label={label}
        />
        <input
          type="text"
          className="lab-design-color__hex"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={() => {
            const next = normalizeHex(value)
            if (next) onChange(next)
          }}
          spellCheck={false}
          autoComplete="off"
          inputMode="text"
          aria-label={`${label} HEX`}
        />
      </div>
    </div>
  )
}
