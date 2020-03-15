// Formula source: https://stackoverflow.com/a/29321264/680394

import { integer } from './customTypes'

type BlendAlpha = (x: integer, y: integer, n?: number) => integer

const blendAlpha: BlendAlpha = (x, y, n = 0) =>
  Number(((1 - n) * x + n * y).toFixed(2))

export default blendAlpha
