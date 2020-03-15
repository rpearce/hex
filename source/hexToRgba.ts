import { integer, stringHex, stringHexAlpha } from './customTypes'
import parse from './parse'

type GetAlpha = (alpha: stringHexAlpha) => number

const getAlpha: GetAlpha = x =>
  x ? parseFloat((parseInt(x, 16) / 0xff).toFixed(2)) : 1

type HexToRgba = (hex: stringHex) => [integer, integer, integer, number]

const hexToRgba: HexToRgba = x => {
  const hex = parse(x)
  const head = hex.slice(0, 6)
  const tail = hex.slice(6)
  const n = parseInt(head, 16)
  return [(n >> 16) & 0xff, (n >> 8) & 0xff, (n >> 0) & 0xff, getAlpha(tail)]
}

export default hexToRgba
