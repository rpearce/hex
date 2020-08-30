import { integer, stringRgba } from './customTypes'

export interface RgbaToRgbaCss {
  (rgba?: [integer?, integer?, integer?, number?] | []): stringRgba
}

const rgbaToRgbaCss: RgbaToRgbaCss = ([r = 0, g = 0, b = 0, a = 1] = []) =>
  `rgba(${r},${g},${b},${a})`

export default rgbaToRgbaCss
