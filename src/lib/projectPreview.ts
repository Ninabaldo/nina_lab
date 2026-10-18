import type { Project } from '../data/projects'
import type { Language } from './preferences'

const NOOK_HOST = 'nook-ochre-eight.vercel.app'
const SCOPO_HOST = 'scopo-omega.vercel.app'
const PICKED_HOST = 'picked-beta.vercel.app'
const SYNC_HOST = 'sync-ebon-zeta.vercel.app'
function hostFromUrl(url: string): string | null {
  try {
    return new URL(url, window.location.origin).hostname
  } catch {
    return null
  }
}

export function getNookPreviewSrc(language: Language): string {
  return `/api/nook-preview?lang=${encodeURIComponent(language)}`
}

export function getScopoPreviewSrc(language: Language): string {
  return `/api/scopo-preview?lang=${encodeURIComponent(language)}`
}

export function getPickedPreviewSrc(language: Language): string {
  return `/api/picked-preview?lang=${encodeURIComponent(language)}`
}

export function getSyncPreviewSrc(language: Language): string {
  return `/api/sync-preview?lang=${encodeURIComponent(language)}`
}

export function resolveProjectPreviewUrl(
  project: Project,
  rawUrl: string,
  language: Language,
): string {
  const host = hostFromUrl(rawUrl)

  if (project.id === 'scopo' || host === SCOPO_HOST) {
    return getScopoPreviewSrc(language)
  }

  if (project.id === 'nook' || host === NOOK_HOST) {
    return getNookPreviewSrc(language)
  }

  if (project.id === 'picked' || host === PICKED_HOST) {
    return getPickedPreviewSrc(language)
  }

  if (project.id === 'sync' || host === SYNC_HOST) {
    return getSyncPreviewSrc(language)
  }

  return rawUrl
}
