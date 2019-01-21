import test from 'ava'
import { hexBlend } from '../source'

test('purple to white – point is 0', t => {
  t.is(hexBlend('#7837A8', '#FFF', 0), '#7837a8')
})

test('purple to white – point is 1', t => {
  t.is(hexBlend('#7837A8', '#FFF', 1), '#ffffff')
})

test('purple to white – point is 0.7', t => {
  t.is(hexBlend('#7837A8', '#FFF', 0.7), '#dfd7e8')
})

test('purple to black – point is 0.7', t => {
  t.is(hexBlend('#7837A8', '#000', 0.7), '#421e5c')
})

test('orange to white – point is 0.7', t => {
  t.is(hexBlend('#ff6602', '#FFF', 0.7), '#ffddd5')
})

test('orange to black – point is 0.7', t => {
  t.is(hexBlend('#ff6602', '#000', 0.7), '#8c3801')
})

test('purple to orange – point is 0.5', t => {
  t.is(hexBlend('#7837A8', '#ff6602', 0.5), '#c75277')
})

test('purple to white – point is 0.7 – half opacity', t => {
  t.is(hexBlend('#7837A880', '#FFF', 0.7), '#dfd7e8d8')
})
