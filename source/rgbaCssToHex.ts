import { parseRgba } from './parseRgba'
import { rgbaToHex } from './rgbaToHex'

export interface RgbaCssToHex {
  (rgba?: string): string
}

export const rgbaCssToHex: RgbaCssToHex = x => rgbaToHex(parseRgba(x))
