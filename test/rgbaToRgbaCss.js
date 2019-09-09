import test from 'ava'
import { rgbaToRgbaCss } from '../source'

test('undefined', t => {
  t.is(rgbaToRgbaCss(), 'rgba(0,0,0,1)')
})

test('empty array', t => {
  t.is(rgbaToRgbaCss([]), 'rgba(0,0,0,1)')
})

test('no alpha', t => {
  t.is(rgbaToRgbaCss([120, 55, 168]), 'rgba(120,55,168,1)')
})

test('alpha is 1', t => {
  t.is(rgbaToRgbaCss([120, 55, 168, 1]), 'rgba(120,55,168,1)')
})

test('alpha is 0.3', t => {
  t.is(rgbaToRgbaCss([120, 55, 168, 0.3]), 'rgba(120,55,168,0.3)')
})
