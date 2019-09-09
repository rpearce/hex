import test from 'ava'
import { rgbaCssBlend } from '../source'

test('purple to white – point is 0.7', t => {
  t.is(
    rgbaCssBlend('rgba(120, 55, 168, 1)', 'rgba(255, 255, 255, 1)', 0.7),
    'rgba(223,215,232,1)'
  )
})

test('purple to black – point is 0.7', t => {
  t.is(
    rgbaCssBlend('rgba(120, 55, 168, 1)', 'rgba(0, 0, 0, 1)', 0.7),
    'rgba(66,30,92,1)'
  )
})

test('orange to white – point is 0.7', t => {
  t.is(
    rgbaCssBlend('rgba(255, 102, 2, 1)', 'rgba(255, 255, 255, 1)', 0.7),
    'rgba(255,221,213,1)'
  )
})

test('orange to black – point is 0.7', t => {
  t.is(
    rgbaCssBlend('rgba(255, 102, 2, 1)', 'rgba(0, 0, 0, 1)', 0.7),
    'rgba(140,56,1,1)'
  )
})

test('purple to orange – point is 0.5', t => {
  t.is(
    rgbaCssBlend('rgba(120, 55, 168, 1)', 'rgba(255, 102, 2, 1)', 0.5),
    'rgba(199,82,119,1)'
  )
})

test('purple to white – point is 0.7 – half opacity', t => {
  t.is(
    rgbaCssBlend('rgba(120, 55, 168, 0.5)', 'rgba(255, 255, 255, 1)', 0.7),
    'rgba(223,215,232,0.85)'
  )
})
