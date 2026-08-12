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

export function isEyeDropperSupported(): boolean {
  return typeof window !== 'undefined' && 'EyeDropper' in window
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

export {}