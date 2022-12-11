import { getCompleted } from '.'

test('getCompleted("","") should return a string', () => {
  const mock = getCompleted('', '')
  expect(mock).toEqual(expect.any(String))
})

test('getCompleted("01:00:00", "03:00:00") should return 1/3', () => {
  expect(getCompleted('01:00:00', '03:00:00')).toStrictEqual('1/3')
})

test('getCompleted("02:00:00", "04:00:00") should return 1/2', () => {
  expect(getCompleted('02:00:00', '04:00:00')).toStrictEqual('1/2')
})

test('getCompleted("01:00:00", "01:00:00") should return 1/1', () => {
  expect(getCompleted('01:00:00', '01:00:00')).toStrictEqual('1/1')
})

test('getCompleted("00:10:00", "01:00:00") should return 1/6', () => {
  expect(getCompleted('00:10:00', '01:00:00')).toStrictEqual('1/6')
})

test('getCompleted("01:10:10", "03:30:30") should return 1/3', () => {
  expect(getCompleted('01:10:10', '03:30:30')).toStrictEqual('1/3')
})

test('getCompleted(02:20:20, 03:30:30) should return 2/3', () => {
  expect(getCompleted('02:20:20', '03:30:30')).toStrictEqual('2/3')
})

test('getCompleted("03:30:30", "05:50:50") should return 3/5', () => {
  expect(getCompleted('03:30:30', '05:50:50')).toStrictEqual('3/5')
})
