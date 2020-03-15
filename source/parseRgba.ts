import { integer, stringRgba } from './customTypes'

const regex = /[0-9.]+/gi

type ParseRgba = (rgba?: stringRgba) => [integer, integer, integer, number]

const parseRgba: ParseRgba = (x = '') => {
  const [r = '0', g = '0', b = '0', a = '1'] = x.match(regex) || []
  return [parseInt(r, 10), parseInt(g, 10), parseInt(b, 10), parseFloat(a)]
}

export default parseRgba
