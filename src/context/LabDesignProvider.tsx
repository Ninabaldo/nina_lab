import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { applyLabDesign, clearLabDesign } from '../labDesign/applyLabDesign'
import { LAB_DESIGN_DEFAULTS, LAB_DESIGN_STORAGE_KEY } from '../labDesign/defaults'
import type { LabDesignState } from '../labDesign/types'
import { LabDesignContext } from './labDesignContext'

function readStoredDesign(): LabDesignState | null {
  try {
    const raw = sessionStorage.getItem(LAB_DESIGN_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as LabDesignState
  } catch {
    return null
  }
}

function storeDesign(state: LabDesignState) {
  try {
    sessionStorage.setItem(LAB_DESIGN_STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* ignore quota errors */
  }
}

export function LabDesignProvider({ children }: { children: ReactNode }) {
  const [design, setDesignState] = useState<LabDesignState>(
    () => readStoredDesign() ?? LAB_DESIGN_DEFAULTS,
  )
  const [panelOpen, setPanelOpen] = useState(false)

  useEffect(() => {
    applyLabDesign(design)
    storeDesign(design)
  }, [design])

  const setDesign = useCallback(
    (patch: Partial<LabDesignState> | ((prev: LabDesignState) => LabDesignState)) => {
      setDesignState((prev) => (typeof patch === 'function' ? patch(prev) : { ...prev, ...patch }))
    },
    [],
  )

  const setColors = useCallback((patch: Partial<LabDesignState['colors']>) => {
    setDesignState((prev) => ({
      ...prev,
      colors: { ...prev.colors, ...patch },
    }))
  }, [])

  const resetDesign = useCallback(() => {
    sessionStorage.removeItem(LAB_DESIGN_STORAGE_KEY)
    clearLabDesign()
    setDesignState({ ...LAB_DESIGN_DEFAULTS })
  }, [])

  const value = useMemo(
    () => ({
      design,
      panelOpen,
      openPanel: () => setPanelOpen(true),
      closePanel: () => setPanelOpen(false),
      setDesign,
      setColors,
      resetDesign,
    }),
    [design, panelOpen, resetDesign, setColors, setDesign],
  )

  return <LabDesignContext.Provider value={value}>{children}</LabDesignContext.Provider>
}
