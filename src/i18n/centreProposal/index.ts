import type { Language } from '../types'
import ca from './ca'
import en from './en'
import es from './es'
import fr from './fr'
import type { CentreProposalCopy } from './types'

export type {
  CentreProposalCopy,
  CentreProposalDashTab,
  CentreProposalStudentTab,
} from './types'

const copies: Record<Language, CentreProposalCopy> = { ca, en, es, fr }

export function getCentreProposalCopy(language: Language): CentreProposalCopy {
  return copies[language] ?? ca
}
