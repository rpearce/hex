import hexToRgba from './hexToRgba'
import rgbaToRgbaCss from './rgbaToRgbaCss'

// hexToRgbaCss :: (String, Number) -> String Rgba
const hexToRgbaCss = (str, alpha) => {
  const [ r, g, b, _a ] = hexToRgba(str)
  const a = alpha || _a
  return rgbaToRgbaCss([ r, g, b, a ])
}

export default hexToRgbaCss
