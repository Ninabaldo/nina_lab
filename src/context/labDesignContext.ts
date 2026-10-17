import { createContext } from 'react'
import type { LabDesignState } from '../labDesign/types'

export interface LabDesignContextValue {
  design: LabDesignState
  panelOpen: boolean
  openPanel: () => void
  closePanel: () => void
  setDesign: (patch: Partial<LabDesignState> | ((prev: LabDesignState) => LabDesignState)) => void
  setColors: (patch: Partial<LabDesignState['colors']>) => void
  resetDesign: () => void
}

export const LabDesignContext = createContext<LabDesignContextValue | null>(null)
