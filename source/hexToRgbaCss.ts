import { numberAlpha, stringHex, stringRgba } from './customTypes'
import hexToRgba from './hexToRgba'
import rgbaToRgbaCss from './rgbaToRgbaCss'

export interface HexToRgbaCss {
  (hex: stringHex, alpha?: numberAlpha): stringRgba
}

const hexToRgbaCss: HexToRgbaCss = (str, alpha) => {
  const [r, g, b, _a] = hexToRgba(str)
  const a = alpha ?? _a
  return rgbaToRgbaCss([r, g, b, a])
}

export default hexToRgbaCss
