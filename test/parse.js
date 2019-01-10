import test from 'ava'
import { parse } from '../source'

test('undefined', t => {
  t.is(parse(), '')
})

test('empty string', t => {
  t.is(parse(''), '')
})

test('pure hex-8', t => {
  t.is(parse('0099ff80'), '0099ff80')
  t.is(parse('00000080'), '00000080')
  t.is(parse('FFFFFF80'), 'FFFFFF80')
})

test('prefixed hex-8', t => {
  t.is(parse('#0099ff80'), '0099ff80')
  t.is(parse('#00000080'), '00000080')
  t.is(parse('#FFFFFF80'), 'FFFFFF80')
})

test('pure hex-6', t => {
  t.is(parse('0099ff'), '0099ff')
  t.is(parse('000000'), '000000')
  t.is(parse('FFFFFF'), 'FFFFFF')
})

test('prefixed hex-6', t => {
  t.is(parse('#0099ff'), '0099ff')
  t.is(parse('#000000'), '000000')
  t.is(parse('#FFFFFF'), 'FFFFFF')
})

test('pure hex-4', t => {
  t.is(parse('09f8'), '0099ff88')
  t.is(parse('0008'), '00000088')
  t.is(parse('FFF8'), 'FFFFFF88')
})

test('prefixed hex-4', t => {
  t.is(parse('#09f8'), '0099ff88')
  t.is(parse('#0008'), '00000088')
  t.is(parse('#FFF8'), 'FFFFFF88')
})

test('pure hex-3', t => {
  t.is(parse('09f'), '0099ff')
  t.is(parse('000'), '000000')
  t.is(parse('FFF'), 'FFFFFF')
})

test('prefixed hex-3', t => {
  t.is(parse('#09f'), '0099ff')
  t.is(parse('#000'), '000000')
  t.is(parse('#fff'), 'ffffff')
})
