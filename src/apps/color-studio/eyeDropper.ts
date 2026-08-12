export function isEyeDropperSupported(): boolean {
  if (typeof window === 'undefined') return false
  if (!('EyeDropper' in window)) return false
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

export async function pickColorFromScreen(): Promise<string | null> {
  if (!isEyeDropperSupported() || !window.EyeDropper) return null

  try {
    const dropper = new window.EyeDropper()
    const result = await dropper.open()
    return result.sRGBHex
  } catch {
    return null
  }
}

declare global {
  interface EyeDropperResult {
    sRGBHex: string
  }

  interface EyeDropper {
    open: () => Promise<EyeDropperResult>
  }

  interface EyeDropperConstructor {
    new (): EyeDropper
  }

  interface Window {
    EyeDropper?: EyeDropperConstructor
  }
}

export {}
