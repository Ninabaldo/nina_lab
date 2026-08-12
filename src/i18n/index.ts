import ca from './ca'
import en from './en'
import es from './es'
import fr from './fr'
import type { Language, SiteTranslations } from './types'

export type { Language, SiteTranslations, ExperimentCopy } from './types'

export const translations: Record<Language, SiteTranslations> = {
  en,
  es,
  ca,
  fr,
}

export function getExperimentCopy(
  t: SiteTranslations,
  id: string,
): { name: string; description: string; category: string } {
  return (
    t.experiments.items[id] ?? {
      name: id,
      description: '',
      category: '',
    }
  )
}
