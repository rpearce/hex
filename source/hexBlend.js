import blend from './blend'
import blendAlpha from './blendAlpha'
import hexToRgba from './hexToRgba'
import rgbaToHex from './rgbaToHex'

// hexBlend :: (String Hex, String Hex, Number) -> String Hex
const hexBlend = (x, y, n) => {
  const [rX, gX, bX, aX] = hexToRgba(x)
  const [rY, gY, bY, aY] = hexToRgba(y)
  const hex = rgbaToHex([
    blend(rX, rY, n),
    blend(gX, gY, n),
    blend(bX, bY, n),
    blendAlpha(aX, aY, n)
  ])

  return aX === 1 && aY === 1 ? hex.slice(0, 7) : hex
}

export default hexBlend
