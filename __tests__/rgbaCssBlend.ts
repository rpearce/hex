import { rgbaCssBlend } from '../source/index'

test('purple to white – point is 0.7', () => {
  expect(
    rgbaCssBlend('rgba(120, 55, 168, 1)', 'rgba(255, 255, 255, 1)', 0.7)
  ).toEqual('rgba(223,215,232,1)')
})

test('purple to black – point is 0.7', () => {
  expect(
    rgbaCssBlend('rgba(120, 55, 168, 1)', 'rgba(0, 0, 0, 1)', 0.7)
  ).toEqual('rgba(66,30,92,1)')
})

test('orange to white – point is 0.7', () => {
  expect(
    rgbaCssBlend('rgba(255, 102, 2, 1)', 'rgba(255, 255, 255, 1)', 0.7)
  ).toEqual('rgba(255,221,213,1)')
})

test('orange to black – point is 0.7', () => {
  expect(rgbaCssBlend('rgba(255, 102, 2, 1)', 'rgba(0, 0, 0, 1)', 0.7)).toEqual(
    'rgba(140,56,1,1)'
  )
})

test('purple to orange – point is 0.5', () => {
  expect(
    rgbaCssBlend('rgba(120, 55, 168, 1)', 'rgba(255, 102, 2, 1)', 0.5)
  ).toEqual('rgba(199,82,119,1)')
})

test('purple to white – point is 0.7 – half opacity', () => {
  expect(
    rgbaCssBlend('rgba(120, 55, 168, 0.5)', 'rgba(255, 255, 255, 1)', 0.7)
  ).toEqual('rgba(223,215,232,0.85)')
})
