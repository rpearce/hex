import { parseRgba } from '../source'

test('undefined', () => {
  expect(parseRgba()).toEqual([0, 0, 0, 1])
})

test('empty string', () => {
  expect(parseRgba('')).toEqual([0, 0, 0, 1])
})

test('purple – no alpha', () => {
  expect(parseRgba('rgb(120, 55, 168)')).toEqual([120, 55, 168, 1])
})

test('purple – alpha is 1', () => {
  expect(parseRgba('rgba(120, 55, 168, 1)')).toEqual([120, 55, 168, 1])
})

test('purple – alpha is 0.3', () => {
  expect(parseRgba('rgba(120, 55, 168, 0.3)')).toEqual([120, 55, 168, 0.3])
})

test('white', () => {
  expect(parseRgba('rgba(255, 255, 255, 1)')).toEqual([255, 255, 255, 1])
})

test('black', () => {
  expect(parseRgba('rgba(0, 0, 0, 1)')).toEqual([0, 0, 0, 1])
})
