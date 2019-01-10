import test from 'ava'
import { hexToRgbaCss } from '../source'

test('pure hex-8', t => {
  t.deepEqual(hexToRgbaCss('0099ff80'), 'rgba(0,153,255,0.5)')
  t.deepEqual(hexToRgbaCss('00000027'), 'rgba(0,0,0,0.15)')
  t.deepEqual(hexToRgbaCss('FFFFFF88'), 'rgba(255,255,255,0.53)')
})

test('prefixed hex-8', t => {
  t.deepEqual(hexToRgbaCss('#0099ff80'), 'rgba(0,153,255,0.5)')
  t.deepEqual(hexToRgbaCss('#00000027'), 'rgba(0,0,0,0.15)')
  t.deepEqual(hexToRgbaCss('#FFFFFF88'), 'rgba(255,255,255,0.53)')
})

test('pure hex-6', t => {
  t.deepEqual(hexToRgbaCss('0099ff'), 'rgba(0,153,255,1)')
  t.deepEqual(hexToRgbaCss('000000'), 'rgba(0,0,0,1)')
  t.deepEqual(hexToRgbaCss('FFFFFF'), 'rgba(255,255,255,1)')
})

test('prefixed hex-6', t => {
  t.deepEqual(hexToRgbaCss('#0099ff'), 'rgba(0,153,255,1)')
  t.deepEqual(hexToRgbaCss('#000000'), 'rgba(0,0,0,1)')
  t.deepEqual(hexToRgbaCss('#FFFFFF'), 'rgba(255,255,255,1)')
})

test('pure hex-4', t => {
  t.deepEqual(hexToRgbaCss('09f9'), 'rgba(0,153,255,0.6)')
  t.deepEqual(hexToRgbaCss('0009'), 'rgba(0,0,0,0.6)')
  t.deepEqual(hexToRgbaCss('FFF9'), 'rgba(255,255,255,0.6)')
})

test('prefixed hex-4', t => {
  t.deepEqual(hexToRgbaCss('#09f9'), 'rgba(0,153,255,0.6)')
  t.deepEqual(hexToRgbaCss('#0009'), 'rgba(0,0,0,0.6)')
  t.deepEqual(hexToRgbaCss('#FFF9'), 'rgba(255,255,255,0.6)')
})

test('pure hex-3', t => {
  t.deepEqual(hexToRgbaCss('09f'), 'rgba(0,153,255,1)')
  t.deepEqual(hexToRgbaCss('000'), 'rgba(0,0,0,1)')
  t.deepEqual(hexToRgbaCss('FFF'), 'rgba(255,255,255,1)')
})

test('prefixed hex-3', t => {
  t.deepEqual(hexToRgbaCss('#09f'), 'rgba(0,153,255,1)')
  t.deepEqual(hexToRgbaCss('#000'), 'rgba(0,0,0,1)')
  t.deepEqual(hexToRgbaCss('#FFF'), 'rgba(255,255,255,1)')
})
