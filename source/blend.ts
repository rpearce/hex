// Forumula source: https://stackoverflow.com/a/29321264/680394

export interface Blend {
  (x: number, y: number, n?: number): number
}

export const blend: Blend = (x, y, n = 0) =>
  Math.round(Math.sqrt((1 - n) * Math.pow(x, 2) + n * Math.pow(y, 2)))
