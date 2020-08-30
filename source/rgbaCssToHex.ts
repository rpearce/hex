import { stringHex, stringRgba } from './customTypes'
import parseRgba from './parseRgba'
import rgbaToHex from './rgbaToHex'

export interface RgbaCssToHex {
  (rgba?: stringRgba): stringHex
}

const rgbaCssToHex: RgbaCssToHex = x => {
  return rgbaToHex(parseRgba(x))
}

export default rgbaCssToHex
