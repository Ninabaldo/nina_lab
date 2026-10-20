import { getCentreProposalCopy } from '../../i18n/centreProposal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'

export function useCentreProposalCopy() {
  const { language } = useSiteLanguage()
  return getCentreProposalCopy(language)
}
