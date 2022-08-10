import { parse } from '../source/index'

test('undefined', () => {
  expect(parse()).toEqual('')
})

test('empty string', () => {
  expect(parse('')).toEqual('')
})

test('pure hex-8', () => {
  expect(parse('0099ff80')).toEqual('0099ff80')
  expect(parse('00000080')).toEqual('00000080')
  expect(parse('FFFFFF80')).toEqual('FFFFFF80')
})

test('prefixed hex-8', () => {
  expect(parse('#0099ff80')).toEqual('0099ff80')
  expect(parse('#00000080')).toEqual('00000080')
  expect(parse('#FFFFFF80')).toEqual('FFFFFF80')
})

test('pure hex-6', () => {
  expect(parse('0099ff')).toEqual('0099ff')
  expect(parse('000000')).toEqual('000000')
  expect(parse('FFFFFF')).toEqual('FFFFFF')
})

test('prefixed hex-6', () => {
  expect(parse('#0099ff')).toEqual('0099ff')
  expect(parse('#000000')).toEqual('000000')
  expect(parse('#FFFFFF')).toEqual('FFFFFF')
})

test('pure hex-4', () => {
  expect(parse('09f8')).toEqual('0099ff88')
  expect(parse('0008')).toEqual('00000088')
  expect(parse('FFF8')).toEqual('FFFFFF88')
})

test('prefixed hex-4', () => {
  expect(parse('#09f8')).toEqual('0099ff88')
  expect(parse('#0008')).toEqual('00000088')
  expect(parse('#FFF8')).toEqual('FFFFFF88')
})

test('pure hex-3', () => {
  expect(parse('09f')).toEqual('0099ff')
  expect(parse('000')).toEqual('000000')
  expect(parse('FFF')).toEqual('FFFFFF')
})

test('prefixed hex-3', () => {
  expect(parse('#09f')).toEqual('0099ff')
  expect(parse('#000')).toEqual('000000')
  expect(parse('#fff')).toEqual('ffffff')
})
