import { useMemo, useState } from 'react'
import type { CentreProposalCopy } from '../../i18n/centreProposal/types'

type InvoiceFilter = 'all' | 'paid' | 'pending' | 'overdue'

interface CentreDashboardInvoicesTableProps {
  copy: CentreProposalCopy
}

const STATUS_TONE: Record<'paid' | 'pending' | 'overdue', 'ok' | 'pending' | 'overdue'> = {
  paid: 'ok',
  pending: 'pending',
  overdue: 'overdue',
}

export function CentreDashboardInvoicesTable({ copy }: CentreDashboardInvoicesTableProps) {
  const factures = copy.demo.dashboard.factures
  const [filter, setFilter] = useState<InvoiceFilter>('all')

  const rows = useMemo(() => {
    if (filter === 'all') return factures.rows
    return factures.rows.filter((row) => row.status === filter)
  }, [factures.rows, filter])

  const countLabel = factures.countTemplate.replace('{n}', String(rows.length))

  const filters: { id: InvoiceFilter; label: string }[] = [
    { id: 'all', label: factures.filters.all },
    { id: 'paid', label: factures.filters.paid },
    { id: 'pending', label: factures.filters.pending },
    { id: 'overdue', label: factures.filters.overdue },
  ]

  return (
    <>
      <div className="centre-demo__db-toolbar">
        <input
          type="search"
          readOnly
          className="centre-demo__db-search"
          placeholder={factures.searchPlaceholder}
          aria-label={factures.searchPlaceholder}
        />
        <p className="centre-demo__db-count">{countLabel}</p>
      </div>

      <div className="centre-demo__invoice-filters" role="tablist" aria-label={factures.title}>
        {filters.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={filter === id}
            className={`centre-demo__invoice-filter${
              filter === id ? ' centre-demo__invoice-filter--active' : ''
            }`}
            onClick={() => setFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="centre-demo__db-wrap">
        <table className="centre-demo__db-table centre-demo__db-table--invoices">
          <thead>
            <tr>
              <th scope="col">{factures.columns.number}</th>
              <th scope="col">{factures.columns.date}</th>
              <th scope="col">{factures.columns.customer}</th>
              <th scope="col">{factures.columns.concept}</th>
              <th scope="col">{factures.columns.amount}</th>
              <th scope="col">{factures.columns.status}</th>
              <th scope="col">{factures.columns.pdf}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="centre-demo__db-row">
                <td data-label={factures.columns.number}>
                  <span className="centre-demo__invoice-number">{row.number}</span>
                </td>
                <td data-label={factures.columns.date}>{row.date}</td>
                <td data-label={factures.columns.customer}>{row.customer}</td>
                <td data-label={factures.columns.concept}>{row.concept}</td>
                <td data-label={factures.columns.amount}>
                  <span className="centre-demo__invoice-amount">{row.amount}</span>
                </td>
                <td data-label={factures.columns.status}>
                  <span
                    className={`centre-demo__db-payment centre-demo__db-payment--${STATUS_TONE[row.status]}`}
                  >
                    {row.statusLabel}
                  </span>
                </td>
                <td data-label={factures.columns.pdf}>
                  <button
                    type="button"
                    className="centre-demo__db-pdf"
                    aria-label={`${factures.downloadPdfLabel}: ${row.pdfFile}`}
                  >
                    <span className="centre-demo__db-pdf-badge" aria-hidden>
                      PDF
                    </span>
                    <span className="centre-demo__db-pdf-name">{row.pdfFile}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
