interface CpPdfBusyLabelProps {
  busy: boolean
  idleText: string
  busyText: string
}

export function CpPdfBusyLabel({ busy, idleText, busyText }: CpPdfBusyLabelProps) {
  if (!busy) return <>{idleText}</>
  return (
    <>
      <span className="cp-pdf-spinner" aria-hidden />
      {busyText}
    </>
  )
}
