import { useMemo, useState } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './SplitBillApp.css'

interface Person {
  id: string
  name: string
}

const TIP_OPTIONS = [10, 15, 20] as const

function formatEuro(amount: number): string {
  return `€${amount.toFixed(2)}`
}

export function SplitBillApp() {
  const { t } = useSiteLanguage()
  const app = t.apps.splitBill

  const [total, setTotal] = useState('50')
  const [tip, setTip] = useState<number>(15)
  const [people, setPeople] = useState<Person[]>(() => [
    { id: crypto.randomUUID(), name: `${app.person} 1` },
    { id: crypto.randomUUID(), name: `${app.person} 2` },
  ])

  const calculation = useMemo(() => {
    const subtotal = Math.max(0, parseFloat(total) || 0)
    const tipAmount = subtotal * (tip / 100)
    const grandTotal = subtotal + tipAmount
    const perPerson = people.length > 0 ? grandTotal / people.length : 0
    return { subtotal, tipAmount, grandTotal, perPerson }
  }, [total, tip, people.length])

  const addPerson = () => {
    if (people.length >= 8) return
    setPeople((current) => [
      ...current,
      { id: crypto.randomUUID(), name: `${app.person} ${current.length + 1}` },
    ])
  }

  const removePerson = (id: string) => {
    if (people.length <= 1) return
    setPeople((current) => current.filter((person) => person.id !== id))
  }

  const updateName = (id: string, name: string) => {
    setPeople((current) =>
      current.map((person) => (person.id === id ? { ...person, name } : person)),
    )
  }

  return (
    <div className="split-bill">
      <div className="split-bill__field">
        <label className="split-bill__label" htmlFor="split-bill-total">
          {app.billTotal}
        </label>
        <div className="split-bill__input-wrap">
          <span className="split-bill__currency">€</span>
          <input
            id="split-bill-total"
            type="number"
            min="0"
            step="0.01"
            value={total}
            onChange={(event) => setTotal(event.target.value)}
            className="split-bill__input"
          />
        </div>
      </div>

      <div className="split-bill__field">
        <span className="split-bill__label">{app.tip}</span>
        <div className="split-bill__tip-options" role="radiogroup" aria-label={app.tipAria}>
          {TIP_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={tip === option}
              className={`split-bill__tip ${tip === option ? 'split-bill__tip--active' : ''}`}
              onClick={() => setTip(option)}
            >
              {option}%
            </button>
          ))}
        </div>
      </div>

      <div className="split-bill__people">
        <div className="split-bill__people-header">
          <span className="split-bill__label">{app.people}</span>
          <button
            type="button"
            className="split-bill__add"
            onClick={addPerson}
            disabled={people.length >= 8}
          >
            {app.add}
          </button>
        </div>

        <ul className="split-bill__list">
          {people.map((person) => (
            <li key={person.id} className="split-bill__person">
              <input
                type="text"
                value={person.name}
                onChange={(event) => updateName(person.id, event.target.value)}
                className="split-bill__name"
                aria-label={person.name}
              />
              <span className="split-bill__share">{formatEuro(calculation.perPerson)}</span>
              <button
                type="button"
                className="split-bill__remove"
                onClick={() => removePerson(person.id)}
                disabled={people.length <= 1}
                aria-label={`${app.removeAria} ${person.name}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="split-bill__summary">
        <div className="split-bill__row">
          <span>{app.subtotal}</span>
          <span>{formatEuro(calculation.subtotal)}</span>
        </div>
        <div className="split-bill__row">
          <span>{app.tip} ({tip}%)</span>
          <span>{formatEuro(calculation.tipAmount)}</span>
        </div>
        <div className="split-bill__row split-bill__row--total">
          <span>{app.total}</span>
          <span>{formatEuro(calculation.grandTotal)}</span>
        </div>
      </div>
    </div>
  )
}
