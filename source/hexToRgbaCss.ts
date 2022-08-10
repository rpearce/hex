import { hexToRgba } from './hexToRgba'
import { rgbaToRgbaCss } from './rgbaToRgbaCss'

export interface HexToRgbaCss {
  (hex: string, alpha?: number): string
}

export const hexToRgbaCss: HexToRgbaCss = (str, alpha) => {
  const [r, g, b, _a] = hexToRgba(str)
  const a = alpha ?? _a
  return rgbaToRgbaCss([r, g, b, a])
}
