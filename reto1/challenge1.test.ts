import { wrapping } from './index'

test('Function should return an element of type array', () => {
  const result = wrapping([])
  expect(result).toEqual(expect.any(Array))
})

test('returns an empty string when the input in empty', () => {
  expect(wrapping([])).toStrictEqual([])
})

test('returns an array wrapping the items correctly', () => {
  expect(wrapping(['cat', 'fear'])).toStrictEqual([
    '*****\n*cat*\n*****',
    '******\n*fear*\n******'
  ])
})

test('should return the wrapping of a single string correctly', () => {
  expect(wrapping(['midu'])).toStrictEqual(['******\n*midu*\n******'])
})

test('should return the wrapping of a single string with a single charecter correctly', () => {
  expect(wrapping(['a'])).toStrictEqual(['***\n*a*\n***'])
})
