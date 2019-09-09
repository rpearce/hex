// rgbaToRgbaCss :: [ Integer, Integer, Integer, Number ] -> String Rgba
const rgbaToRgbaCss = ([r = 0, g = 0, b = 0, a = 1] = []) =>
  `rgba(${r},${g},${b},${a})`

export default rgbaToRgbaCss
