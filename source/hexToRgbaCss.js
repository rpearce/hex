import hexToRgba from './hexToRgba'

// hexToRgbaCss :: (String, Number) -> String Rgba
const hexToRgbaCss = (str, alpha) => {
  const [ r, g, b, _a ] = hexToRgba(str)
  const a = alpha || _a
  return `rgba(${r},${g},${b},${a})`
}

export default hexToRgbaCss
