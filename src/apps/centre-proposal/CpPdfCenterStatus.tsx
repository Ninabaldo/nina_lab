import { createPortal } from 'react-dom'

interface CpPdfCenterStatusProps {
  message: string
}

export function CpPdfCenterStatus({ message }: CpPdfCenterStatusProps) {
  return createPortal(
    <>
      <div className="cp-pdf-status-backdrop" aria-hidden />
      <div className="cp-pdf-status" role="status" aria-live="polite" aria-busy="true">
        <span className="cp-pdf-spinner" aria-hidden />
        <span>{message}</span>
      </div>
    </>,
    document.body,
  )
}
