import { blend } from '../source'

test('no point provided', () => {
  expect(blend(120, 255)).toEqual(120)
})

test('point is 0', () => {
  expect(blend(120, 255, 0)).toEqual(120)
})

test('point is 1', () => {
  expect(blend(120, 255, 1)).toEqual(255)
})

test('to highest – point is 0.7', () => {
  expect(blend(120, 255, 0.7)).toEqual(223)
})

test('to lowest – point is 0.7', () => {
  expect(blend(120, 0, 0.7)).toEqual(66)
})

test('to mid – point is 0.5', () => {
  expect(blend(120, 127, 0.5)).toEqual(124)
})

test('from lowest to highest – point is 0.5', () => {
  expect(blend(0, 255, 0.5)).toEqual(180)
})
