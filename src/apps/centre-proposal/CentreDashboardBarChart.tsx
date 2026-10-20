export type DashboardBar = {
  label: string
  valueLabel: string
  amount: number
  highlight?: boolean
}

interface CentreDashboardBarChartProps {
  title: string
  bars: DashboardBar[]
}

export function CentreDashboardBarChart({ title, bars }: CentreDashboardBarChartProps) {
  const max = Math.max(...bars.map((b) => b.amount), 1)

  return (
    <figure className="centre-demo__chart">
      <figcaption className="centre-demo__chart-title">{title}</figcaption>
      <div className="centre-demo__chart-bars" role="img" aria-label={title}>
        {bars.map((bar) => (
          <div key={`${bar.label}-${bar.valueLabel}`} className="centre-demo__chart-col">
            <span className="centre-demo__chart-value">{bar.valueLabel}</span>
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
