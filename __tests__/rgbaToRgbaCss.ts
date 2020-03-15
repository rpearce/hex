import { rgbaToRgbaCss } from '../source'

test('undefined', () => {
  expect(rgbaToRgbaCss()).toEqual('rgba(0,0,0,1)')
})

test('empty array', () => {
  expect(rgbaToRgbaCss([])).toEqual('rgba(0,0,0,1)')
})

test('no alpha', () => {
  expect(rgbaToRgbaCss([120, 55, 168])).toEqual('rgba(120,55,168,1)')
})

test('alpha is 1', () => {
  expect(rgbaToRgbaCss([120, 55, 168, 1])).toEqual('rgba(120,55,168,1)')
})

test('alpha is 0.3', () => {
  expect(rgbaToRgbaCss([120, 55, 168, 0.3])).toEqual('rgba(120,55,168,0.3)')
})
