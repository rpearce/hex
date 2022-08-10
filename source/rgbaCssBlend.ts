import { blend } from './blend'
import { blendAlpha } from './blendAlpha'
import { parseRgba } from './parseRgba'
import { rgbaToRgbaCss } from './rgbaToRgbaCss'

export interface RgbaCssBlend {
  (rgbaA: string, rgbaB: string, alpha: number): string
}

export const rgbaCssBlend: RgbaCssBlend = (x, y, n) => {
  const [rX, gX, bX, aX] = parseRgba(x)
  const [rY, gY, bY, aY] = parseRgba(y)

  return rgbaToRgbaCss([
    blend(rX, rY, n),
    blend(gX, gY, n),
    blend(bX, bY, n),
    blendAlpha(aX, aY, n),
  ])
}
