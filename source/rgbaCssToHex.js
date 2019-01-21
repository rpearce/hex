import parseRgba from './parseRgba'
import rgbaToHex from './rgbaToHex'

// rgbaCssToHex :: String Rgba -> String Hex
const rgbaCssToHex = x => {
  return rgbaToHex(parseRgba(x))
}

export default rgbaCssToHex
