import { useContext } from 'react'
import { LabDesignContext } from '../context/labDesignContext'

export function useLabDesign() {
  const value = useContext(LabDesignContext)
  if (!value) {
    throw new Error('useLabDesign must be used within LabDesignProvider')
  }
  return value
}
