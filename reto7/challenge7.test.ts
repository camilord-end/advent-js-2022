import { getGiftsToRefill } from '.'

test('function should return an array', () => {
  const result = getGiftsToRefill([], [], [])
  expect(result).toEqual(expect.any(Array))
})

test('getGiftsToRefill(a1, a2, a3) should return ["muñeca","pc"]', () => {
  expect(
    getGiftsToRefill(
      ['bike', 'car', 'bike', 'bike'],
      ['car', 'bike', 'muñeca', 'car'],
      ['bike', 'pc', 'pc']
    )
  ).toStrictEqual(['muñeca', 'pc'])
})

test('getGiftsToRefill([], [], []) should return []', () => {
  expect(getGiftsToRefill([], [], [])).toStrictEqual([])
})

test('getGiftsToRefill(["a", "a"], ["a", "a"], ["a", "a"]) should return []', () => {
  expect(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])).toStrictEqual([])
})

test('getGiftsToRefill(["a", "a"], ["b", "b"], ["c", "c"]) should return ["a","b","c"]', () => {
  expect(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])).toStrictEqual([
    'a',
    'b',
    'c'
  ])
})

test('getGiftsToRefill(["a", "b"], ["c", "d"], ["e", "f"]) should return ["a","b","c","d","e","f"]', () => {
  expect(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])).toStrictEqual([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ])
})
