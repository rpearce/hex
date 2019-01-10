import test from 'ava'
import { hexToRgba, hexToRgbaCss, parse } from '../source'

test('hexToRgba is defined', t => {
  t.not(hexToRgba, undefined)
})

test('hexToRgbaCss is defined', t => {
  t.not(hexToRgbaCss, undefined)
})

test('parse is defined', t => {
  t.not(parse, undefined)
})
