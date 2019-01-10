import test from 'ava'
import { hexToRgba } from '../source'

test('pure hex-8', t => {
  t.deepEqual(hexToRgba('0099ff80'), [ 0, 153, 255, 0.5 ])
  t.deepEqual(hexToRgba('00000027'), [ 0, 0, 0, 0.15 ])
  t.deepEqual(hexToRgba('FFFFFF88'), [ 255, 255, 255, 0.53 ])
})

test('prefixed hex-8', t => {
  t.deepEqual(hexToRgba('#0099ff80'), [ 0, 153, 255, 0.5 ])
  t.deepEqual(hexToRgba('#00000027'), [ 0, 0, 0, 0.15 ])
  t.deepEqual(hexToRgba('#FFFFFF88'), [ 255, 255, 255, 0.53 ])
})

test('pure hex-6', t => {
  t.deepEqual(hexToRgba('0099ff'), [ 0, 153, 255, 1 ])
  t.deepEqual(hexToRgba('000000'), [ 0, 0, 0, 1 ])
  t.deepEqual(hexToRgba('FFFFFF'), [ 255, 255, 255, 1 ])
})

test('prefixed hex-6', t => {
  t.deepEqual(hexToRgba('#0099ff'), [ 0, 153, 255, 1 ])
  t.deepEqual(hexToRgba('#000000'), [ 0, 0, 0, 1 ])
  t.deepEqual(hexToRgba('#FFFFFF'), [ 255, 255, 255, 1 ])
})

test('pure hex-4', t => {
  t.deepEqual(hexToRgba('09f9'), [ 0, 153, 255, 0.6 ])
  t.deepEqual(hexToRgba('FFF9'), [ 255, 255, 255, 0.6 ])
  t.deepEqual(hexToRgba('0009'), [ 0, 0, 0, 0.6 ])
})

test('prefixed hex-4', t => {
  t.deepEqual(hexToRgba('#09f9'), [ 0, 153, 255, 0.6 ])
  t.deepEqual(hexToRgba('#FFF9'), [ 255, 255, 255, 0.6 ])
  t.deepEqual(hexToRgba('#0009'), [ 0, 0, 0, 0.6 ])
})

test('pure hex-3', t => {
  t.deepEqual(hexToRgba('09f'), [ 0, 153, 255, 1 ])
  t.deepEqual(hexToRgba('FFF'), [ 255, 255, 255, 1 ])
  t.deepEqual(hexToRgba('000'), [ 0, 0, 0, 1 ])
})

test('prefixed hex-3', t => {
  t.deepEqual(hexToRgba('#09f'), [ 0, 153, 255, 1 ])
  t.deepEqual(hexToRgba('#FFF'), [ 255, 255, 255, 1 ])
  t.deepEqual(hexToRgba('#000'), [ 0, 0, 0, 1 ])
})
