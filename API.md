# API Documentation

## Installation
```
$ npm i @rpearce/hex
```

## Usage

### `hexToRgbaCss`

```haskell
hexToRgbaCss :: (String, Number) -> String Rgba
```

```js
import { hexToRgbaCss } from '@rpearce/hex'

// hex-8
hexToRgbaCss('0099ff80') // 'rgba(0,153,255,0.5)'
hexToRgbaCss('#0099ff80') // 'rgba(0,153,255,0.5)'
hexToRgbaCss('#0099ff80', 0.3) // 'rgba(0,153,255,0.3)'

// hex-6
hexToRgbaCss('0099ff') // 'rgba(0,153,255,1)'
hexToRgbaCss('#0099ff') // 'rgba(0,153,255,1)'
hexToRgbaCss('#0099ff', 0.2) // 'rgba(0,153,255,0.2)'

// hex-4
hexToRgbaCss('09f9') // 'rgba(0,153,255,0.6)'
hexToRgbaCss('#09f9') // 'rgba(0,153,255,0.6)'
hexToRgbaCss('#09f9', 0.12) // 'rgba(0,153,255,0.12)'

// hex-3
hexToRgbaCss('09f') // 'rgba(0,153,255,1)'
hexToRgbaCss('#09f') // 'rgba(0,153,255,1)'
hexToRgbaCss('#09f', 0.45) // 'rgba(0,153,255,0.45)'
```

### `hexToRgba`

```haskell
hexToRgba :: String -> [ Integer, Integer, Integer, Number ]
```

```js
import { hexToRgba } from '@rpearce/hex'

// hex-8
hexToRgba('0099ff80') // [ 0, 153, 255, 0.5 ]
hexToRgba('#0099ff80') // [ 0, 153, 255, 0.5 ]

// hex-6
hexToRgba('0099ff') // [ 0, 153, 255, 1 ]
hexToRgba('#0099ff') // [ 0, 153, 255, 1 ]

// hex-4
hexToRgba('09f9') // [ 0, 153, 255, 0.6 ]
hexToRgba('#09f9') // [ 0, 153, 255, 0.6 ]

// hex-3
hexToRgba('09f') // [ 0, 153, 255, 1 ]
hexToRgba('#09f') // [ 0, 153, 255, 1 ]
```

### `parse`

```haskell
parse :: String -> String Hex
```

```js
import { parse } from '@rpearce/hex'

// hex-8
parse('0099ff80') // '0099ff80'
parse('#0099ff80') // '0099ff80'

// hex-6
parse('0099ff') // '0099ff'
parse('#0099ff') // '0099ff'

// hex-4
parse('09f8') // '0099ff88'
parse('#09f8') // '0099ff88'

// hex-3
parse('09f') // '0099ff'
parse('#09f') // '0099ff'
```
