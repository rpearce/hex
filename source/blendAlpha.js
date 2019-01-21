// Formula source: https://stackoverflow.com/a/29321264/680394

// blendAlpha :: (Integer, Integer, Number) -> Integer
const blendAlpha = (x, y, n=0) =>
  Number(((1 - n) * x + n * y).toFixed(2))

export default blendAlpha
