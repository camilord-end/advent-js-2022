import { dryNumber } from '.'

test('dryNumber should return an array', () => {
  const mock = dryNumber(1, 2)
  expect(mock).toEqual(expect.any(Array))
})

test('dryNumber(1, 15) should return [1,10,11,12,13,14,15]', () => {
  expect(dryNumber(1, 15)).toStrictEqual([1, 10, 11, 12, 13, 14, 15])
})

test('dryNumber(2, 20) should return [2,12,20]', () => {
  expect(dryNumber(2, 20)).toStrictEqual([2, 12, 20])
})

test('dryNumber(3, 33) should return [3,13,23,30,31,32,33]', () => {
  expect(dryNumber(3, 33)).toStrictEqual([3, 13, 23, 30, 31, 32, 33])
})

test('dryNumber(4, 45) should return [4,14,24,34,40,41,42,43,44,45]', () => {
  expect(dryNumber(4, 45)).toStrictEqual([
    4, 14, 24, 34, 40, 41, 42, 43, 44, 45
  ])
})

test('dryNumber(5, 55) should return [5,15,25,35,45,50,51,52,53,54,55]', () => {
  expect(dryNumber(5, 55)).toStrictEqual([
    5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55
  ])
})

test('dryNumber(9, 8) should return []', () => {
  expect(dryNumber(9, 8)).toStrictEqual([])
})
