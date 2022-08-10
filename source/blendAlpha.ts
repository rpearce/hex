// Formula source: https://stackoverflow.com/a/29321264/680394

export interface BlendAlpha {
  (x: number, y: number, n?: number): number
}

export const blendAlpha: BlendAlpha = (x, y, n = 0) =>
  Number(((1 - n) * x + n * y).toFixed(2))
