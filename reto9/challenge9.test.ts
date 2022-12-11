import { countTime } from '.'

test('countTime() should return a number', () => {
  const result = countTime([])
  expect(result).toEqual(expect.any(Number))
})

test('countTime([0, 1, 1, 0, 1]) should return 7', () => {
  expect(countTime([0, 1, 1, 0, 1])).toStrictEqual(7)
})

test('countTime([0, 0, 0, 1]) should return 21', () => {
  expect(countTime([0, 0, 0, 1])).toStrictEqual(21)
})

test('countTime([0, 0, 1, 0, 0]) should return 28', () => {
  expect(countTime([0, 0, 1, 0, 0])).toStrictEqual(28)
})

test('countTime([1, 0, 0, 1, 0, 0]) should return 14', () => {
  expect(countTime([1, 0, 0, 1, 0, 0])).toStrictEqual(14)
})

test('countTime([1, 1, 0, 0, 0, 0]) should return 28', () => {
  expect(countTime([1, 1, 0, 0, 0, 0])).toStrictEqual(28)
})

test('countTime([1, 1, 1]) should return 0', () => {
  expect(countTime([1, 1, 1])).toStrictEqual(0)
})
