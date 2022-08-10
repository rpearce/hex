import { parse } from './parse'

interface GetAlpha {
  (alpha: string): number
}

const getAlpha: GetAlpha = x =>
  x ? parseFloat((parseInt(x, 16) / 0xff).toFixed(2)) : 1

export interface HexToRgba {
  (hex: string): [number, number, number, number]
}

export const hexToRgba: HexToRgba = x => {
  const hex = parse(x)
  const head = hex.slice(0, 6)
  const tail = hex.slice(6)
  const n = parseInt(head, 16)
  return [(n >> 16) & 0xff, (n >> 8) & 0xff, (n >> 0) & 0xff, getAlpha(tail)]
}
