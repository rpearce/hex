import { stringHex, stringRgba } from './customTypes'
import parseRgba from './parseRgba'
import rgbaToHex from './rgbaToHex'

type RgbaCssToHex = (rgba?: stringRgba) => stringHex

const rgbaCssToHex: RgbaCssToHex = x => {
  return rgbaToHex(parseRgba(x))
}

export default rgbaCssToHex
