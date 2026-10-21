import { useMemo, useState } from 'react'

export type DashboardBar = {
  label: string
  valueLabel: string
  amount: number
  highlight?: boolean
}

interface CentreDashboardBarChartProps {
  title: string
  bars: DashboardBar[]
  /** Lets users click bars to update the month total callout. */
  selectable?: boolean
  selectHint?: string
}

export function CentreDashboardBarChart({
  title,
  bars,
  selectable = false,
  selectHint,
}: CentreDashboardBarChartProps) {
  const defaultIndex = useMemo(() => {
    const hi = bars.findIndex((b) => b.highlight)
    return hi >= 0 ? hi : Math.max(0, bars.length - 1)
  }, [bars])

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex)
  const selected = bars[selectedIndex] ?? bars[0]
  const max = Math.max(...bars.map((b) => b.amount), 1)
  const showCallout = selectable && selected

  return (
    <figure
      className={`centre-demo__chart${showCallout ? ' centre-demo__chart--featured centre-demo__chart--selectable' : ''}`}
    >
      <figcaption className="centre-demo__chart-title">{title}</figcaption>
      {showCallout ? (
        <div className="centre-demo__chart-feature" aria-live="polite">
          <p className="centre-demo__chart-feature-label">{selected.label}</p>
          <p className="centre-demo__chart-feature-value">{selected.valueLabel}</p>
          {selectHint ? <p className="centre-demo__chart-feature-hint">{selectHint}</p> : null}
        </div>
      ) : null}
      <div
        className="centre-demo__chart-bars"
        role={selectable ? 'group' : 'img'}
        aria-label={selectable ? title : title}
      >
        {bars.map((bar, index) => {
          const isSelected = selectable && index === selectedIndex
          const barHeight = `${Math.max(8, Math.round((bar.amount / max) * 100))}%`
          const colClass = `centre-demo__chart-col${isSelected ? ' centre-demo__chart-col--selected' : ''}`

          const barInner = (
            <>
              {!showCallout ? (
                <span className="centre-demo__chart-value">{bar.valueLabel}</span>
              ) : (
                <span className="centre-demo__chart-value centre-demo__chart-value--spacer" aria-hidden />
              )}
              <div className="centre-demo__chart-track">
                <div
                  className={`centre-demo__chart-bar${
                    isSelected || (!selectable && bar.highlight)
                      ? ' centre-demo__chart-bar--hi'
                      : ''
                  }`}
                  style={{ height: barHeight }}
                />
              </div>
              <span className="centre-demo__chart-label">{bar.label}</span>
            </>
          )

          if (selectable) {
            return (
              <button
                key={`${bar.label}-${bar.valueLabel}`}
                type="button"
                className={`centre-demo__chart-col-btn ${colClass}`}
                aria-pressed={isSelected}
                aria-label={`${bar.label}: ${bar.valueLabel}`}
                onClick={() => setSelectedIndex(index)}
              >
                {barInner}
              </button>
            )
          }

          return (
            <div key={`${bar.label}-${bar.valueLabel}`} className={colClass}>
              {barInner}
            </div>
          )
        })}
      </div>
    </figure>
  )
}
