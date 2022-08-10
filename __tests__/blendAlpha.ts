import { blendAlpha } from '../source/index'

test('no point provided', () => {
  expect(blendAlpha(0.1, 0.9)).toEqual(0.1)
})

test('point is 0', () => {
  expect(blendAlpha(0.1, 0.9, 0)).toEqual(0.1)
})

test('point is 1', () => {
  expect(blendAlpha(0.1, 0.9, 1)).toEqual(0.9)
})

test('to highest – point is 0.7', () => {
  expect(blendAlpha(0.1, 1, 0.7)).toEqual(0.73)
})

test('to lowest – point is 0.7', () => {
  expect(blendAlpha(0.4, 0, 0.7)).toEqual(0.12)
})

test('to mid – point is 0.5', () => {
  expect(blendAlpha(0, 0.5, 0.5)).toEqual(0.25)
})

test('from lowest to highest – point is 0.5', () => {
  expect(blendAlpha(0, 1, 0.5)).toEqual(0.5)
})
