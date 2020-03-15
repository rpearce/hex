import { rgbaToHex } from '../source'

test('undefined', () => {
  expect(rgbaToHex()).toEqual('#000000ff')
})

test('empty array', () => {
  expect(rgbaToHex([])).toEqual('#000000ff')
})

test('purple – no alpha', () => {
  expect(rgbaToHex([120, 55, 168])).toEqual('#7837a8ff')
})

test('purple – alpha is 1', () => {
  expect(rgbaToHex([120, 55, 168, 1])).toEqual('#7837a8ff')
})

test('purple – alpha is 0.5', () => {
  expect(rgbaToHex([120, 55, 168, 0.5])).toEqual('#7837a87f')
})

test('purple – alpha is 0', () => {
  expect(rgbaToHex([120, 55, 168, 0])).toEqual('#7837a800')
})
