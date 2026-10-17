import { useContext } from 'react'
import { ContactContext } from '../context/contactContext'

export function useContact() {
  const value = useContext(ContactContext)
  if (!value) {
    throw new Error('useContact must be used within ContactProvider')
  }
  return value
}
