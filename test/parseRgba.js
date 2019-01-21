import test from 'ava'
import { parseRgba } from '../source'

test('undefined', t => {
  t.deepEqual(parseRgba(), [ 0, 0, 0, 1 ])
})

test('empty string', t => {
  t.deepEqual(parseRgba(''), [ 0, 0, 0, 1 ])
})

test('purple – no alpha', t => {
  t.deepEqual(parseRgba('rgb(120, 55, 168)'), [ 120, 55, 168, 1 ])
})

test('purple – alpha is 1', t => {
  t.deepEqual(parseRgba('rgba(120, 55, 168, 1)'), [ 120, 55, 168, 1 ])
})

test('purple – alpha is 0.3', t => {
  t.deepEqual(parseRgba('rgba(120, 55, 168, 0.3)'), [ 120, 55, 168, 0.3 ])
})

test('white', t => {
  t.deepEqual(parseRgba('rgba(255, 255, 255, 1)'), [ 255, 255, 255, 1 ])
})

test('black', t => {
  t.deepEqual(parseRgba('rgba(0, 0, 0, 1)'), [ 0, 0, 0, 1 ])
})
