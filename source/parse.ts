interface Repeat {
  (hex: string): string
}

const repeat: Repeat = x => x.split('').map(y => y + y).join('')

export interface Parse {
  (hex?: string): string
}

export const parse: Parse = (x = '') => {
  const hex = x.replace(/^#/, '')
  const len = hex.length
  return len === 3 || len === 4 ? repeat(hex) : hex
}
