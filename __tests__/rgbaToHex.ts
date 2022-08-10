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

test('swamp - alpha is 1', () => {
  expect(rgbaToHex([142, 166, 8, 1])).toEqual('#8ea608ff')
})

test('seafoam greenish - alpah is 0.5', () => {
  expect(rgbaToHex([56, 255, 202, 0.5])).toEqual('#38ffca7f')
})

test('handles when values are too high', () => {
  expect(rgbaToHex([ 256, 256, 256, 1 ])).toEqual('#ffffffff')
})

test('handles when alues are too low', () => {
  expect(rgbaToHex([ -5, -5, -5, 1 ])).toEqual('#000000ff')
})
