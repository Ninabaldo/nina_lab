export type LabFontId =
  | 'inter'
  | 'space-grotesk'
  | 'dm-sans'
  | 'playfair-display'
  | 'poppins'
  | 'syne'

export type LabStylePreset = 'minimal' | 'editorial' | 'tech' | 'playful'

export interface LabDesignColors {
  primary: string
  background: string
  text: string
  surface: string
}

export interface LabDesignState {
  colors: LabDesignColors
  fontDisplay: LabFontId
  fontBody: LabFontId
  stylePreset: LabStylePreset
}

export interface LabColorPalette extends LabDesignColors {
  id: string
}
