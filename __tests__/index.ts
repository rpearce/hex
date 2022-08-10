import {
  blend,
  blendAlpha,
  hexBlend,
  hexToRgba,
  hexToRgbaCss,
  parse,
  parseRgba,
  rgbaCssBlend,
  rgbaCssToHex,
  rgbaToHex,
  rgbaToRgbaCss,
} from '../source/index'

test('blend is defined', () => {
  expect(blend).toBeDefined()
})

test('blendAlpha is defined', () => {
  expect(blendAlpha).toBeDefined()
})

test('hexBlend is defined', () => {
  expect(hexBlend).toBeDefined()
})

test('hexToRgba is defined', () => {
  expect(hexToRgba).toBeDefined()
})

test('hexToRgbaCss is defined', () => {
  expect(hexToRgbaCss).toBeDefined()
})

test('parse is defined', () => {
  expect(parse).toBeDefined()
})

test('parseRgba is defined', () => {
  expect(parseRgba).toBeDefined()
})

test('rgbaCssBlend is defined', () => {
  expect(rgbaCssBlend).toBeDefined()
})

test('rgbaCssToHex is defined', () => {
  expect(rgbaCssToHex).toBeDefined()
})

test('rgbaToHex is defined', () => {
  expect(rgbaToHex).toBeDefined()
})

test('rgbaToRgbaCss is defined', () => {
  expect(rgbaToRgbaCss).toBeDefined()
})
