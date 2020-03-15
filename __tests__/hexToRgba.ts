import { hexToRgba } from '../source'

test('pure hex-8', () => {
  expect(hexToRgba('0099ff80')).toEqual([0, 153, 255, 0.5])
  expect(hexToRgba('00000027')).toEqual([0, 0, 0, 0.15])
  expect(hexToRgba('FFFFFF88')).toEqual([255, 255, 255, 0.53])
})

test('prefixed hex-8', () => {
  expect(hexToRgba('#0099ff80')).toEqual([0, 153, 255, 0.5])
  expect(hexToRgba('#00000027')).toEqual([0, 0, 0, 0.15])
  expect(hexToRgba('#FFFFFF88')).toEqual([255, 255, 255, 0.53])
})

test('pure hex-6', () => {
  expect(hexToRgba('0099ff')).toEqual([0, 153, 255, 1])
  expect(hexToRgba('000000')).toEqual([0, 0, 0, 1])
  expect(hexToRgba('FFFFFF')).toEqual([255, 255, 255, 1])
})

test('prefixed hex-6', () => {
  expect(hexToRgba('#0099ff')).toEqual([0, 153, 255, 1])
  expect(hexToRgba('#000000')).toEqual([0, 0, 0, 1])
  expect(hexToRgba('#FFFFFF')).toEqual([255, 255, 255, 1])
})

test('pure hex-4', () => {
  expect(hexToRgba('09f9')).toEqual([0, 153, 255, 0.6])
  expect(hexToRgba('FFF9')).toEqual([255, 255, 255, 0.6])
  expect(hexToRgba('0009')).toEqual([0, 0, 0, 0.6])
})

test('prefixed hex-4', () => {
  expect(hexToRgba('#09f9')).toEqual([0, 153, 255, 0.6])
  expect(hexToRgba('#FFF9')).toEqual([255, 255, 255, 0.6])
  expect(hexToRgba('#0009')).toEqual([0, 0, 0, 0.6])
})

test('pure hex-3', () => {
  expect(hexToRgba('09f')).toEqual([0, 153, 255, 1])
  expect(hexToRgba('FFF')).toEqual([255, 255, 255, 1])
  expect(hexToRgba('000')).toEqual([0, 0, 0, 1])
})

test('prefixed hex-3', () => {
  expect(hexToRgba('#09f')).toEqual([0, 153, 255, 1])
  expect(hexToRgba('#FFF')).toEqual([255, 255, 255, 1])
  expect(hexToRgba('#000')).toEqual([0, 0, 0, 1])
})
