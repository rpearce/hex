import test from 'ava'
import { blend } from '../source'

test('no point provided', t => {
  t.is(blend(120, 255), 120)
})

test('point is 0', t => {
  t.is(blend(120, 255, 0), 120)
})

test('point is 1', t => {
  t.is(blend(120, 255, 1), 255)
})

test('to highest – point is 0.7', t => {
  t.is(blend(120, 255, 0.7), 223)
})

test('to lowest – point is 0.7', t => {
  t.is(blend(120, 0, 0.7), 66)
})

test('to mid – point is 0.5', t => {
  t.is(blend(120, 127, 0.5), 124)
})

test('from lowest to highest – point is 0.5', t => {
  t.is(blend(0, 255, 0.5), 180)
})
