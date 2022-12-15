import { getOptimalPath } from '.'

test('getOptimalPath should return a number', () => {
  const mock = getOptimalPath([[0], [7, 4], [2, 4, 6]])
  expect(mock).toEqual(expect.any(Number))
})

test('getOptimalPath([[0], [7, 4], [2, 4, 6]]) should return 8', () => {
  expect(getOptimalPath([[0], [7, 4], [2, 4, 6]])).toStrictEqual(8)
})

test('getOptimalPath([[0], [2, 3]]) shoudl return 2', () => {
  expect(getOptimalPath([[0], [2, 3]])).toStrictEqual(2)
})

test('getOptimalPath([[0], [3, 4], [9, 8, 1]]) should return 5', () => {
  expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toStrictEqual(5)
})

test('getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) should return 8', () => {
  expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toStrictEqual(
    8
  )
})

test('getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]]) should return 7', () => {
  expect(
    getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])
  ).toStrictEqual(7)
})
