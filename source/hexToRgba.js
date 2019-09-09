import parse from './parse'

const getAlpha = x => (x ? parseFloat((parseInt(x, 16) / 0xff).toFixed(2)) : 1)

// hexToRgba :: String -> [ Integer, Integer, Integer, Number ]
const hexToRgba = x => {
  const hex = parse(x)
  const head = hex.slice(0, 6)
  const tail = hex.slice(6)
  const n = parseInt(head, 16)
  return [(n >> 16) & 0xff, (n >> 8) & 0xff, (n >> 0) & 0xff, getAlpha(tail)]
}

export default hexToRgba
