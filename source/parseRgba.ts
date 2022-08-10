const RGBA_REGEX = /[0-9.]+/gi

export interface ParseRgba {
  (rgba?: string): [number, number, number, number]
}

export const parseRgba: ParseRgba = (x = '') => {
  const [r = '0', g = '0', b = '0', a = '1'] = x.match(RGBA_REGEX) || []

  return [
    parseInt(r, 10),
    parseInt(g, 10),
    parseInt(b, 10),
    parseFloat(a),
  ]
}
