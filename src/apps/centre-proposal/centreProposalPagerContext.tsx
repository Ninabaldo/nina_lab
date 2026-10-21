import { createContext, useContext } from 'react'

export type CentreProposalSlideId =
  | 'intro'
  | 'student'
  | 'dashboard'
  | 'config'
  | 'next'
  | 'handover'
  | 'external'

export type CentreProposalPagerApi = {
  enabled: boolean
  activeIndex: number
  slideCount: number
  goToIndex: (index: number) => void
  goToId: (id: CentreProposalSlideId) => void
}

const CentreProposalPagerContext = createContext<CentreProposalPagerApi | null>(null)

export function CentreProposalPagerProvider({
  value,
  children,
}: {
  value: CentreProposalPagerApi
  children: React.ReactNode
}) {
  return (
    <CentreProposalPagerContext.Provider value={value}>
      {children}
    </CentreProposalPagerContext.Provider>
  )
}

export function useCentreProposalPager(): CentreProposalPagerApi | null {
  return useContext(CentreProposalPagerContext)
}

const ELEMENT_TO_SLIDE: Record<string, CentreProposalSlideId> = {
  experiencies: 'student',
  configura: 'config',
  continuitat: 'handover',
  'costos-externs': 'external',
}

export function useProposalNavigation() {
  const pager = useCentreProposalPager()

  return (elementId: string) => {
    if (pager?.enabled) {
      const slideId = ELEMENT_TO_SLIDE[elementId]
      if (slideId) pager.goToId(slideId)
      return
    }
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
