// repeat :: String HexShorthand -> String Hex
const repeat = x => [...x].map(y => y + y).join('')

// parse :: String -> String Hex
const parse = (x = '') => {
  const hex = x.replace(/^#/, '')
  const len = hex.length
  return len === 3 || len === 4 ? repeat(hex) : hex
}

export default parse
