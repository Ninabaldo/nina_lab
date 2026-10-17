import type { LabColorPalette, LabDesignState, LabStylePreset } from './types'

export const LAB_DESIGN_STORAGE_KEY = 'nina-lab-design-session'

export const LAB_DESIGN_DEFAULTS: LabDesignState = {
  colors: {
    primary: '#8ba888',
    background: '#f5f2eb',
    text: '#1c1c1c',
    surface: '#ffffff',
  },
  fontDisplay: 'syne',
  fontBody: 'dm-sans',
  stylePreset: 'editorial',
}

export const LAB_COLOR_PALETTES: LabColorPalette[] = [
  {
    id: 'lab-original',
    primary: '#8ba888',
    background: '#f5f2eb',
    text: '#1c1c1c',
    surface: '#ffffff',
  },
  {
    id: 'coral-clay',
    primary: '#e8734a',
    background: '#faf6f2',
    text: '#241f1c',
    surface: '#fffdfb',
  },
  {
    id: 'ocean-calm',
    primary: '#6b9bd2',
    background: '#f2f6fa',
    text: '#1a2330',
    surface: '#ffffff',
  },
  {
    id: 'lime-studio',
    primary: '#a8d95b',
    background: '#f7faef',
    text: '#1c2414',
    surface: '#ffffff',
  },
  {
    id: 'ink-paper',
    primary: '#1c1c1c',
    background: '#f0ebe3',
    text: '#141414',
    surface: '#faf8f5',
  },
]

export const LAB_STYLE_PRESETS: LabStylePreset[] = ['minimal', 'editorial', 'tech', 'playful']
