import { checkJump } from '.'

test('checkJump([]) should return a boolean value', () => {
  const result = checkJump([])
  expect(result).toEqual(expect.any(Boolean))
})

test('checkJump([1, 2, 1]) should return true', () => {
  expect(checkJump([1, 2, 1])).toStrictEqual(true)
})

test('checkJump([1, 3, 8, 5, 2]) should return true', () => {
  expect(checkJump([1, 3, 8, 5, 2])).toStrictEqual(true)
})

test('checkJump([1, 7, 3, 5]) should return false', () => {
  expect(checkJump([1, 7, 3, 5])).toStrictEqual(false)
})

test('checkJump([1, 2, 3, 2, 1]) should return true', () => {
  expect(checkJump([1, 2, 3, 2, 1])).toStrictEqual(true)
})

test('checkJump([1, 2, 2, 2, 1]) should return true', () => {
  expect(checkJump([1, 2, 2, 2, 1])).toStrictEqual(true)
})

test('checkJump([0, 1, 0]) should return true', () => {
  expect(checkJump([0, 1, 0])).toStrictEqual(true)
})

test('checkJump([2, 2, 2, 2]) should return false', () => {
  expect(checkJump([2, 2, 2, 2])).toStrictEqual(false)
})

test('checkJump([1, 2, 3]) should return false', () => {
  expect(checkJump([1, 2, 3])).toStrictEqual(false)
})

test('checkJump([1, 2, 3, 2, 1, 2, 3]) should return false', () => {
  expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toStrictEqual(false)
})

test('checkJump([1, 1000, 900, 800]) should return true', () => {
  expect(checkJump([1, 1000, 900, 800])).toStrictEqual(true)
})

test('checkJump([1, 1000, 100, 800]) should return false', () => {
  expect(checkJump([1, 1000, 100, 800])).toStrictEqual(false)
})

test('checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])', () => {
  expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toStrictEqual(true)
})

test('checkJump([1, 2, 3, 1, 3, 1]) should return false', () => {
  expect(checkJump([1, 2, 3, 1, 3, 1])).toStrictEqual(false)
})

test('checkJump([1, 3, 2, 5, 4, 3, 2, 1]) should return false', () => {
  expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toStrictEqual(false)
})
