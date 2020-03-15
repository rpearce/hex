// Forumula source: https://stackoverflow.com/a/29321264/680394

import { integer } from './customTypes'

type Blend = (x: integer, y: integer, n?: number) => integer

const blend: Blend = (x, y, n = 0) =>
  Math.round(Math.sqrt((1 - n) * Math.pow(x, 2) + n * Math.pow(y, 2)))

export default blend
