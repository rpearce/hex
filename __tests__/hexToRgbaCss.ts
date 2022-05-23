import { hexToRgbaCss } from '../source'

test('pure hex-8', () => {
  expect(hexToRgbaCss('0099ff80')).toEqual('rgba(0,153,255,0.5)')
  expect(hexToRgbaCss('00000027')).toEqual('rgba(0,0,0,0.15)')
  expect(hexToRgbaCss('FFFFFF88')).toEqual('rgba(255,255,255,0.53)')
})

test('prefixed hex-8', () => {
  expect(hexToRgbaCss('#0099ff80')).toEqual('rgba(0,153,255,0.5)')
  expect(hexToRgbaCss('#00000027')).toEqual('rgba(0,0,0,0.15)')
  expect(hexToRgbaCss('#FFFFFF88')).toEqual('rgba(255,255,255,0.53)')
})

test('pure hex-6', () => {
  expect(hexToRgbaCss('0099ff')).toEqual('rgba(0,153,255,1)')
  expect(hexToRgbaCss('000000')).toEqual('rgba(0,0,0,1)')
  expect(hexToRgbaCss('FFFFFF')).toEqual('rgba(255,255,255,1)')
})

test('prefixed hex-6', () => {
  expect(hexToRgbaCss('#0099ff')).toEqual('rgba(0,153,255,1)')
  expect(hexToRgbaCss('#000000')).toEqual('rgba(0,0,0,1)')
  expect(hexToRgbaCss('#FFFFFF')).toEqual('rgba(255,255,255,1)')
})

test('pure hex-4', () => {
  expect(hexToRgbaCss('09f9')).toEqual('rgba(0,153,255,0.6)')
  expect(hexToRgbaCss('0009')).toEqual('rgba(0,0,0,0.6)')
  expect(hexToRgbaCss('FFF9')).toEqual('rgba(255,255,255,0.6)')
})

test('prefixed hex-4', () => {
  expect(hexToRgbaCss('#09f9')).toEqual('rgba(0,153,255,0.6)')
  expect(hexToRgbaCss('#0009')).toEqual('rgba(0,0,0,0.6)')
  expect(hexToRgbaCss('#FFF9')).toEqual('rgba(255,255,255,0.6)')
})

test('pure hex-3', () => {
  expect(hexToRgbaCss('09f')).toEqual('rgba(0,153,255,1)')
  expect(hexToRgbaCss('000')).toEqual('rgba(0,0,0,1)')
  expect(hexToRgbaCss('FFF')).toEqual('rgba(255,255,255,1)')
})

test('prefixed hex-3', () => {
  expect(hexToRgbaCss('#09f')).toEqual('rgba(0,153,255,1)')
  expect(hexToRgbaCss('#000')).toEqual('rgba(0,0,0,1)')
  expect(hexToRgbaCss('#FFF')).toEqual('rgba(255,255,255,1)')
})

test('alpha provided', () => {
  expect(hexToRgbaCss('0099ff', 0)).toEqual('rgba(0,153,255,0)')
  expect(hexToRgbaCss('0099ff80', 0.3)).toEqual('rgba(0,153,255,0.3)')
  expect(hexToRgbaCss('0099ff', 0.2)).toEqual('rgba(0,153,255,0.2)')
  expect(hexToRgbaCss('09f9', 0.7)).toEqual('rgba(0,153,255,0.7)')
  expect(hexToRgbaCss('09f', 0.45)).toEqual('rgba(0,153,255,0.45)')
  expect(hexToRgbaCss('0099ff', 1)).toEqual('rgba(0,153,255,1)')
})
