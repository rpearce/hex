import { hexBlend } from '../source/index'

test('purple to white – point is 0', () => {
  expect(hexBlend('#7837A8', '#FFF', 0)).toEqual('#7837a8')
})

test('purple to white – point is 1', () => {
  expect(hexBlend('#7837A8', '#FFF', 1)).toEqual('#ffffff')
})

test('purple to white – point is 0.7', () => {
  expect(hexBlend('#7837A8', '#FFF', 0.7)).toEqual('#dfd7e8')
})

test('purple to black – point is 0.7', () => {
  expect(hexBlend('#7837A8', '#000', 0.7)).toEqual('#421e5c')
})

test('orange to white – point is 0.7', () => {
  expect(hexBlend('#ff6602', '#FFF', 0.7)).toEqual('#ffddd5')
})

test('orange to black – point is 0.7', () => {
  expect(hexBlend('#ff6602', '#000', 0.7)).toEqual('#8c3801')
})

test('purple to orange – point is 0.5', () => {
  expect(hexBlend('#7837A8', '#ff6602', 0.5)).toEqual('#c75277')
})

test('purple to white – point is 0.7 – half opacity', () => {
  expect(hexBlend('#7837A880', '#FFF', 0.7)).toEqual('#dfd7e8d8')
})
