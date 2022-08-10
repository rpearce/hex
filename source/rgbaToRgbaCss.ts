export interface RgbaToRgbaCss {
  (rgba?: [number?, number?, number?, number?] | []): string
}

export const rgbaToRgbaCss: RgbaToRgbaCss = ([r = 0, g = 0, b = 0, a = 1] = []) =>
  `rgba(${r},${g},${b},${a})`
