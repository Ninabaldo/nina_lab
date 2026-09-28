import { useId, useState, type FormEvent } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import type { CompanyCalculatorCopy } from '../../i18n/types'
import { fetchCompanyData, getFetchErrorCode } from './api'
import { calculateMetrics, hasDisplayableMetrics } from './calculations'
import {
  formatCurrency,
  formatMultiple,
  formatPercent,
  formatRatio,
} from './formatters'
import type { CalculatedMetrics, FetchStatus } from './types'
import './CompanyCalculatorApp.css'

interface MetricCardProps {
  label: string
  value: string | null
  unavailable: string
  tooltipTitle: string
  tooltipBody: string
  tooltipPeriod: string
  tooltipSource: string
}

function MetricCard({
  label,
  value,
  unavailable,
  tooltipTitle,
  tooltipBody,
  tooltipPeriod,
  tooltipSource,
}: MetricCardProps) {
  const tooltipId = useId()
  const [open, setOpen] = useState(false)

  return (
    <article className="company-calc__metric">
      <div className="company-calc__metric-head">
        <span className="company-calc__metric-label">{label}</span>
        <button
          type="button"
          className="company-calc__info"
          aria-label={tooltipTitle}
          aria-expanded={open}
          aria-controls={tooltipId}
          onClick={() => setOpen((current) => !current)}
        >
          i
        </button>
      </div>

      <p className="company-calc__metric-value">{value ?? unavailable}</p>

      {open ? (
        <div id={tooltipId} className="company-calc__tooltip" role="tooltip">
          <p className="company-calc__tooltip-title">{tooltipTitle}</p>
          <p>{tooltipBody}</p>
          <p>{tooltipPeriod}</p>
          <p className="company-calc__tooltip-source">{tooltipSource}</p>
        </div>
      ) : null}
    </article>
  )
}

function buildMetricCards(metrics: CalculatedMetrics, app: CompanyCalculatorCopy) {
  return [
    {
      key: 'eps',
      label: app.metrics.eps.label,
      value: formatRatio(metrics.eps),
      tooltipTitle: app.metrics.eps.tooltipTitle,
      tooltipBody: app.metrics.eps.tooltipBody,
      tooltipPeriod: app.metrics.eps.tooltipPeriod,
      tooltipSource: app.metrics.eps.tooltipSource,
    },
    {
      key: 'pe',
      label: app.metrics.pe.label,
      value: formatRatio(metrics.pe),
      tooltipTitle: app.metrics.pe.tooltipTitle,
      tooltipBody: app.metrics.pe.tooltipBody,
      tooltipPeriod: app.metrics.pe.tooltipPeriod,
      tooltipSource: app.metrics.pe.tooltipSource,
    },
    {
      key: 'peg',
      label: app.metrics.peg.label,
      value: formatRatio(metrics.peg),
      tooltipTitle: app.metrics.peg.tooltipTitle,
      tooltipBody: app.metrics.peg.tooltipBody,
      tooltipPeriod: app.metrics.peg.tooltipPeriod,
      tooltipSource: app.metrics.peg.tooltipSource,
    },
    {
      key: 'roe',
      label: app.metrics.roe.label,
      value: formatPercent(metrics.roe),
      tooltipTitle: app.metrics.roe.tooltipTitle,
      tooltipBody: app.metrics.roe.tooltipBody,
      tooltipPeriod: app.metrics.roe.tooltipPeriod,
      tooltipSource: app.metrics.roe.tooltipSource,
    },
    {
      key: 'debtEquity',
      label: app.metrics.debtEquity.label,
      value: formatRatio(metrics.debtEquity),
      tooltipTitle: app.metrics.debtEquity.tooltipTitle,
      tooltipBody: app.metrics.debtEquity.tooltipBody,
      tooltipPeriod: app.metrics.debtEquity.tooltipPeriod.replace(
        '{date}',
        metrics.balanceSheetDate ?? app.notAvailable,
      ),
      tooltipSource: app.metrics.debtEquity.tooltipSource,
    },
    {
      key: 'netDebtEbitda',
      label: app.metrics.netDebtEbitda.label,
      value: formatMultiple(metrics.netDebtToEbitda),
      tooltipTitle: app.metrics.netDebtEbitda.tooltipTitle,
      tooltipBody: app.metrics.netDebtEbitda.tooltipBody,
      tooltipPeriod: app.metrics.netDebtEbitda.tooltipPeriod.replace(
        '{date}',
        metrics.balanceSheetDate ?? app.notAvailable,
      ),
      tooltipSource: app.metrics.netDebtEbitda.tooltipSource,
    },
  ]
}

export function CompanyCalculatorApp() {
  const { t } = useSiteLanguage()
  const app = t.apps.companyCalculator

  const [ticker, setTicker] = useState('NVDA')
  const [status, setStatus] = useState<FetchStatus>('idle')
  const [metrics, setMetrics] = useState<CalculatedMetrics | null>(null)
  const [errorCode, setErrorCode] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmed = ticker.trim()
    if (!trimmed) {
      setStatus('error')
      setErrorCode('invalid_ticker')
      setMetrics(null)
      return
    }

    setStatus('loading')
    setErrorCode(null)
    setMetrics(null)

    try {
      const data = await fetchCompanyData(trimmed)
      const calculated = calculateMetrics(data)

      if (!hasDisplayableMetrics(calculated)) {
        setStatus('error')
        setErrorCode('no_data')
        return
      }

      setMetrics(calculated)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrorCode(getFetchErrorCode(error))
    }
  }

  const errorMessage =
    errorCode === 'invalid_ticker'
      ? app.errors.invalidTicker
      : errorCode === 'rate_limit'
        ? app.errors.rateLimit
        : errorCode === 'no_data'
          ? app.errors.noData
          : errorCode === 'network'
            ? app.errors.network
            : app.errors.unknown

  const metricCards = metrics ? buildMetricCards(metrics, app) : []

  return (
    <div className="company-calc">
      <header className="company-calc__intro">
        <p className="company-calc__eyebrow">{app.eyebrow}</p>
        <h2 className="company-calc__title">{app.title}</h2>
        <p className="company-calc__subtitle">{app.subtitle}</p>
      </header>

      <form className="company-calc__search" onSubmit={handleSubmit}>
        <label className="company-calc__search-label" htmlFor="company-calc-ticker">
          {app.tickerLabel}
        </label>
        <div className="company-calc__search-row">
          <input
            id="company-calc-ticker"
            type="text"
            value={ticker}
            onChange={(event) => setTicker(event.target.value.toUpperCase())}
            placeholder={app.tickerPlaceholder}
            className="company-calc__input"
            autoComplete="off"
            spellCheck={false}
            maxLength={10}
          />
          <button
            type="submit"
            className="company-calc__submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? app.analyzing : app.analyze}
          </button>
        </div>
      </form>

      {status === 'loading' ? (
        <div className="company-calc__loading" role="status" aria-live="polite">
          <span className="company-calc__spinner" aria-hidden="true" />
          <p>{app.loading}</p>
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="company-calc__error" role="alert">
          <p>{errorMessage}</p>
        </div>
      ) : null}

      {status === 'success' && metrics ? (
        <>
          <section className="company-calc__header" aria-label={app.companyHeaderAria}>
            <div>
              <h3 className="company-calc__company-name">
                {metrics.companyName ?? metrics.ticker}
              </h3>
              <p className="company-calc__company-ticker">{metrics.ticker}</p>
            </div>
            <div className="company-calc__price-block">
              <p className="company-calc__price">
                {formatCurrency(metrics.price, metrics.currency) ?? app.notAvailable}
              </p>
              <p className="company-calc__price-meta">
                {app.latestTradingDay}{' '}
                {metrics.latestTradingDay ?? app.notAvailable}
              </p>
            </div>
          </section>

          <section className="company-calc__metrics" aria-label={app.metricsAria}>
            {metricCards.map((metric) => (
              <MetricCard
                key={metric.key}
                label={metric.label}
                value={metric.value}
                unavailable={app.notAvailable}
                tooltipTitle={metric.tooltipTitle}
                tooltipBody={metric.tooltipBody}
                tooltipPeriod={metric.tooltipPeriod}
                tooltipSource={metric.tooltipSource}
              />
            ))}
          </section>

          <footer className="company-calc__sources">
            <p className="company-calc__sources-title">{app.sourcesTitle}</p>
            <ul className="company-calc__sources-list">
              <li>{app.sources.price}</li>
              <li>{app.sources.eps}</li>
              <li>{app.sources.roe}</li>
              <li>{app.sources.pe}</li>
              <li>{app.sources.debtEquity}</li>
              <li>{app.sources.netDebtEbitda}</li>
              <li>{app.sources.peg}</li>
            </ul>
            <p className="company-calc__disclaimer">{app.disclaimer}</p>
          </footer>
        </>
      ) : null}
    </div>
  )
}
