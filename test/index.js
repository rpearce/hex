import test from 'ava'
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
  rgbaToRgbaCss
} from '../source'

test('blend is defined', t => {
  t.not(blend, undefined)
})

test('blendAlpha is defined', t => {
  t.not(blendAlpha, undefined)
})

test('hexBlend is defined', t => {
  t.not(hexBlend, undefined)
})

test('hexToRgba is defined', t => {
  t.not(hexToRgba, undefined)
})

test('hexToRgbaCss is defined', t => {
  t.not(hexToRgbaCss, undefined)
})

test('parse is defined', t => {
  t.not(parse, undefined)
})

test('parseRgba is defined', t => {
  t.not(parseRgba, undefined)
})

test('rgbaCssBlend is defined', t => {
  t.not(rgbaCssBlend, undefined)
})

test('rgbaCssToHex is defined', t => {
  t.not(rgbaCssToHex, undefined)
})

test('rgbaToHex is defined', t => {
  t.not(rgbaToHex, undefined)
})

test('rgbaToRgbaCss is defined', t => {
  t.not(rgbaToRgbaCss, undefined)
})
