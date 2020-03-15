import { stringHex } from './customTypes'

type Repeat = (hex: stringHex) => stringHex

const repeat: Repeat = x => [...x].map(y => y + y).join('')

type Parse = (hex?: stringHex) => stringHex

const parse: Parse = (x = '') => {
  const hex: string = x.replace(/^#/, '')
  const len = hex.length
  return len === 3 || len === 4 ? repeat(hex) : hex
}

export default parse
