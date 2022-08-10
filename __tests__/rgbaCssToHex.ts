import { rgbaCssToHex } from '../source/index'

test('undefined', () => {
  expect(rgbaCssToHex()).toEqual('#000000ff')
})

test('empty string', () => {
  expect(rgbaCssToHex('')).toEqual('#000000ff')
})

test('purple – alpha is 1', () => {
  expect(rgbaCssToHex('rgba(120, 55, 168, 1)')).toEqual('#7837a8ff')
})

test('purple – alpha is 0.5', () => {
  expect(rgbaCssToHex('rgba(120, 55, 168, 0.5)')).toEqual('#7837a87f')
})

test('purple – alpha is 0.3', () => {
  expect(rgbaCssToHex('rgba(120, 55, 168, 0.3)')).toEqual('#7837a84c')
})
