import { integer } from './customTypes'

type RgbaToHex = (rgba?: [integer?, integer?, integer?, number?] | []) => string

const rgbaToHex: RgbaToHex = ([r = 0, g = 0, b = 0, a = 1] = []) => {
  const rgbN = (1 << 24) | (r << 16) | (g << 8) | b
  const hex = rgbN.toString(16).slice(1)
  const alpha = (a * 255)
    .toString(16)
    .padStart(2, '0')
    .slice(0, 2)
  return `#${hex}${alpha}`
}

export default rgbaToHex
