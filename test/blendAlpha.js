import test from 'ava'
import { blendAlpha } from '../source'

test('no point provided', t => {
  t.is(blendAlpha(0.1, 0.9), 0.1)
})

test('point is 0', t => {
  t.is(blendAlpha(0.1, 0.9, 0), 0.1)
})

test('point is 1', t => {
  t.is(blendAlpha(0.1, 0.9, 1), 0.9)
})

test('to highest – point is 0.7', t => {
  t.is(blendAlpha(0.1, 1, 0.7), 0.73)
})

test('to lowest – point is 0.7', t => {
  t.is(blendAlpha(0.4, 0, 0.7), 0.12)
})

test('to mid – point is 0.5', t => {
  t.is(blendAlpha(0, 0.5, 0.5), 0.25)
})

test('from lowest to highest – point is 0.5', t => {
  t.is(blendAlpha(0, 1, 0.5), 0.5)
})
