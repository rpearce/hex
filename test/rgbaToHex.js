import test from 'ava'
import { rgbaToHex } from '../source'

test('undefined', t => {
  t.is(rgbaToHex(), '#000000ff')
})

test('empty array', t => {
  t.is(rgbaToHex([]), '#000000ff')
})

test('purple – no alpha', t => {
  t.is(rgbaToHex([120, 55, 168]), '#7837a8ff')
})

test('purple – alpha is 1', t => {
  t.is(rgbaToHex([120, 55, 168, 1]), '#7837a8ff')
})

test('purple – alpha is 0.5', t => {
  t.is(rgbaToHex([120, 55, 168, 0.5]), '#7837a87f')
})

test('purple – alpha is 0', t => {
  t.is(rgbaToHex([120, 55, 168, 0]), '#7837a800')
})
