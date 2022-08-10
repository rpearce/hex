export interface RgbaToHex {
  (rgba?: [number?, number?, number?, number?] | []): string
}

export const rgbaToHex: RgbaToHex = ([r = 0, g = 0, b = 0, a = 1] = []) => {
  const hex = [r, g, b].map(x =>
    Math
      .min(255, Math.max(0, Math.round(x)))
      .toString(16)
      .padStart(2, '0')
  ).join('')

  const alpha = (a * 255)
    .toString(16)
    .padStart(2, '0')
    .slice(0, 2)

  return `#${hex}${alpha}`
}
