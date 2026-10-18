export type ProjectPreviewLogoVariant = 'nook' | 'scopo' | 'picked' | 'sync'

const PROJECT_PREVIEW_LOGOS: Record<ProjectPreviewLogoVariant, string> = {
  nook: '/brand/nook-wordmark.svg',
  scopo: 'https://scopo-omega.vercel.app/favicon.svg',
  picked: 'https://picked-beta.vercel.app/brand/picked-wordmark.png',
  sync: 'https://sync-ebon-zeta.vercel.app/icon.png',
}

export function getProjectPreviewLogo(projectId: string): string | undefined {
  if (projectId in PROJECT_PREVIEW_LOGOS) {
    return PROJECT_PREVIEW_LOGOS[projectId as ProjectPreviewLogoVariant]
  }
  return undefined
}

export function getProjectPreviewLogoVariant(
  projectId: string,
): ProjectPreviewLogoVariant | undefined {
  if (projectId in PROJECT_PREVIEW_LOGOS) {
    return projectId as ProjectPreviewLogoVariant
  }
  return undefined
}
