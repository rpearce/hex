# API Documentation

## Installation
```
$ npm i @rpearce/hex
```

## Usage

### `blend`
Blend together two R, G or B (red, green or blue) color numbers.

```haskell
blend :: (Integer, Integer, Number) -> Integer
```

```js
import { blend } from '@rpearce/hex'

blend(120, 255, 0) // 120
blend(120, 255, 1) // 255
blend(120, 255, 0.7) // 223
blend(120, 0, 0.7) // 66
blend(120, 127, 0.5) // 124
```

### `blendAlpha`
Blend together two alpha values.

```haskell
blendAlpha :: (Integer, Integer, Number) -> Integer
```

```js
import { blendAlpha } from '@rpearce/hex'

blendAlpha(0.1, 0.9, 0) // 0.1
blendAlpha(0.1, 0.9, 1) // 0.9
blendAlpha(0.1, 1, 0.7) // 0.73
blendAlpha(0.4, 0, 0.7) // 0.12
blendAlpha(0, 0.5, 0.5) // 0.25
blendAlpha(0, 1, 0.5) // 0.5
```

### `hexBlend`
Blend two hexadecimal color values together, shifting from one color to the next
via a fraction between `0` and `1`. Hexadecimal equivalent to `rgbaCssBlend`.

```haskell
hexBlend :: (String Hex, String Hex, Number) -> String Hex
```

```js
import { hexBlend } from '@rpearce/hex'

hexBlend('#7837A8', '#FFF', 0) // '#7837a8'
hexBlend('#7837A8', '#FFF', 1) // '#ffffff'
hexBlend('#7837A8', '#FFF', 0.7) // '#dfd7e8'
hexBlend('#7837A8', '#000', 0.7) // '#421e5c'
hexBlend('#7837A8', '#ff6602', 0.5) // '#c75277'
hexBlend('#7837A880', '#FFF', 0.7) // '#dfd7e8d8'
```

### `hexToRgba`
Convert hexadecimal color codes to an array of RGBa values.

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

### `hexToRgbaCss`
Convert hexadecimal color codes to `rgba()`.

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

### `parse`
Parse various forms of hexadecimal colors.

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

### `parseRgba`

```haskell
parseRgba :: String Rgba -> [ Integer, Integer, Integer, Number ]
```

```js
import { parseRgba } from '@rpearce/hex'

parseRgba('') // [ 0, 0, 0, 1 ]
parseRgba('rgb(120, 55, 168)') // [ 120, 55, 168, 1 ]
parseRgba('rgba(120, 55, 168, 1)') // [ 120, 55, 168, 1 ]
parseRgba('rgba(120, 55, 168, 0.3)') // [ 120, 55, 168, 0.3 ]
```

### `rgbaCssBlend`
Blend two `rgba()` color values together, shifting from one color to the next
via a fraction between `0` and `1`. RGBa equivalent to `hexBlend`.

```haskell
rgbaCssBlend :: (String Rgba, String Rgba, Number) -> String Rgba
```

```js
import { rgbaCssBlend } from '@rpearce/hex'

rgbaCssBlend('rgba(120, 55, 168, 1)', 'rgba(255, 255, 255, 1)', 0.7) // 'rgba(223,215,232,1)'
rgbaCssBlend('rgba(120, 55, 168, 1)', 'rgba(0, 0, 0, 1)', 0.7) // 'rgba(66,30,92,1)'
rgbaCssBlend('rgba(120, 55, 168, 1)', 'rgba(255, 102, 2, 1)', 0.5) // 'rgba(199,82,119,1)'
```

### `rgbaCssToHex`
Convert `rgba()` to hexadecimal.

```haskell
rgbaCssToHex :: String Rgba -> String Hex
```

```js
import { rgbaCssToHex } from '@rpearce/hex'

rgbaCssToHex('') // '#000000ff'
rgbaCssToHex('rgba(120, 55, 168, 1)') // '#7837a8ff'
rgbaCssToHex('rgba(120, 55, 168, 0.5)') // '#7837a87f'
rgbaCssToHex('rgba(120, 55, 168, 0.3)') // '#7837a84c'
```

### `rgbaToHex`
Convert an array of RGBa values to hexadecimal.

```haskell
rgbaToHex :: [ Integer, Integer, Integer, Number ] -> String Hex
```

```js
import { rgbaToHex } from '@rpearce/hex'

rgbaToHex([]) // '#000000ff'
rgbaToHex([ 120, 55, 168 ]) // '#7837a8ff'
rgbaToHex([ 120, 55, 168, 1 ]) // '#7837a8ff'
rgbaToHex([ 120, 55, 168, 0.5 ]) // '#7837a87f'
rgbaToHex([ 120, 55, 168, 0 ]) // '#7837a800'
```

### `rgbaToRgbaCss`
Convert an array of RGBa values to `rgba()`.

```haskell
rgbaToRgbaCss :: [ Integer, Integer, Integer, Number ] -> String Rgba
```

```js
import { rgbaToRgbaCss } from '@rpearce/hex'

rgbaToRgbaCss([]) // 'rgba(0,0,0,1)'
rgbaToRgbaCss([  120, 55, 168  ]) // 'rgba(120,55,168,1)'
rgbaToRgbaCss([  120, 55, 168, 1 ]) // 'rgba(120,55,168,1)'
rgbaToRgbaCss([  120, 55, 168, 0.3  ]) // 'rgba(120,55,168,0.3)'
```
