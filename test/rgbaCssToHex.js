import test from 'ava'
import { rgbaCssToHex } from '../source'

test('undefined', t => {
  t.is(rgbaCssToHex(), '#000000ff')
})

test('empty string', t => {
  t.is(rgbaCssToHex(''), '#000000ff')
})

test('purple – alpha is 1', t => {
  t.is(rgbaCssToHex('rgba(120, 55, 168, 1)'), '#7837a8ff')
})

test('purple – alpha is 0.5', t => {
  t.is(rgbaCssToHex('rgba(120, 55, 168, 0.5)'), '#7837a87f')
})

test('purple – alpha is 0.3', t => {
  t.is(rgbaCssToHex('rgba(120, 55, 168, 0.3)'), '#7837a84c')
})
