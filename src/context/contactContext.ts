import { createContext } from 'react'

export interface ContactContextValue {
  open: boolean
  openContact: () => void
  closeContact: () => void
}

export const ContactContext = createContext<ContactContextValue | null>(null)
