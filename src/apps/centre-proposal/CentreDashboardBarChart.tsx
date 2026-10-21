export type DashboardBar = {
  label: string
  valueLabel: string
  amount: number
  highlight?: boolean
}

interface CentreDashboardBarChartProps {
  title: string
  bars: DashboardBar[]
  /** Large callout for the highlighted period (e.g. current month total). */
  featured?: { periodLabel: string; amount: string; hint?: string }
}

export function CentreDashboardBarChart({ title, bars, featured }: CentreDashboardBarChartProps) {
  const max = Math.max(...bars.map((b) => b.amount), 1)
  const barsAria = bars.map((b) => `${b.label}: ${b.valueLabel}`).join(', ')

  return (
    <figure className={`centre-demo__chart${featured ? ' centre-demo__chart--featured' : ''}`}>
      <figcaption className="centre-demo__chart-title">{title}</figcaption>
      {featured ? (
        <div className="centre-demo__chart-feature">
          <p className="centre-demo__chart-feature-label">{featured.periodLabel}</p>
          <p className="centre-demo__chart-feature-value">{featured.amount}</p>
          {featured.hint ? <p className="centre-demo__chart-feature-hint">{featured.hint}</p> : null}
        </div>
      ) : null}
      <div
        className="centre-demo__chart-bars"
        role="img"
        aria-label={featured ? `${title}. ${barsAria}` : title}
      >
        {bars.map((bar) => (
          <div key={`${bar.label}-${bar.valueLabel}`} className="centre-demo__chart-col">
            {!featured ? (
              <span className="centre-demo__chart-value">{bar.valueLabel}</span>
            ) : (
              <span className="centre-demo__chart-value centre-demo__chart-value--spacer" aria-hidden />
            )}
            <div className="centre-demo__chart-track">
              <div
                className={`centre-demo__chart-bar${bar.highlight ? ' centre-demo__chart-bar--hi' : ''}`}
                style={{ height: `${Math.max(8, Math.round((bar.amount / max) * 100))}%` }}
              />
            </div>
            <span className="centre-demo__chart-label">{bar.label}</span>
          </div>
        ))}
      </div>
    </figure>
  )
}
