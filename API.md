# API Documentation

## Installation
```js
$ npm i @rpearce/hex
```

## Usage

### `hexToRgbaCss`

```haskell
(String, Number) -> String Rgba
```

```js
import { hexToRgbaCss } from '@rpearce/hex'

// hex-8
hexToRgbaCss('0099ff80') // 'rgba(0,153,255,0.5)'
hexToRgbaCss('#0099ff80') // 'rgba(0,153,255,0.5)'

// hex-6
hexToRgbaCss('0099ff') // 'rgba(0,153,255,1)'
hexToRgbaCss('#0099ff') // 'rgba(0,153,255,1)'
```

// hex-4
hexToRgbaCss('09f9') // 'rgba(0,153,255,0.6)'
hexToRgbaCss('#09f9') // 'rgba(0,153,255,0.6)'
```

// hex-3
hexToRgbaCss('09f') // 'rgba(0,153,255,1)'
hexToRgbaCss('#09f') // 'rgba(0,153,255,1)'
```

### `hexToRgba`

```haskell
// String -> [ Integer, Integer, Integer, Number ]
```

```js
import { hexToRgba } from '@rpearce/hex'

// hex-8
hexToRgbaCss('0099ff80') // [ 0, 153, 255, 0.5 ]
hexToRgbaCss('#0099ff80') // [ 0, 153, 255, 0.5 ]

// hex-6
hexToRgbaCss('0099ff') // [ 0, 153, 255, 1 ]
hexToRgbaCss('#0099ff') // [ 0, 153, 255, 1 ]
```

// hex-4
hexToRgbaCss('09f9') // [ 0, 153, 255, 0.6 ]
hexToRgbaCss('#09f9') // [ 0, 153, 255, 0.6 ]
```

// hex-3
hexToRgbaCss('09f') // [ 0, 153, 255, 1 ]
hexToRgbaCss('#09f') // [ 0, 153, 255, 1 ]
```

### `parse`

```haskell
String -> String Hex
```

```js
import { parse } from '@rpearce/hex'

// hex-8
hexToRgbaCss('0099ff80') // '0099ff80'
hexToRgbaCss('#0099ff80') // '0099ff80'

// hex-6
hexToRgbaCss('0099ff') // '0099ff'
hexToRgbaCss('#0099ff') // '0099ff'
```

// hex-4
hexToRgbaCss('09f8') // '0099ff88'
hexToRgbaCss('#09f8') // '0099ff88'
```

// hex-3
hexToRgbaCss('09f') // '0099ff'
hexToRgbaCss('#09f') // '0099ff'
```
