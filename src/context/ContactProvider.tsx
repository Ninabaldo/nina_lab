import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { ContactContext } from './contactContext'

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openContact = useCallback(() => setOpen(true), [])
  const closeContact = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, openContact, closeContact }),
    [open, openContact, closeContact],
  )

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}
