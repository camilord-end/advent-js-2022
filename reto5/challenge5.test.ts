import { getMaxGifts } from '.'

test('the function should return a number', () => {
  const result = getMaxGifts([0], 0, 0)
  expect(result).toEqual(expect.any(Number))
})

test('getMaxGifts([12, 3, 11, 5, 7], 20, 3) should return 20', () => {
  expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toStrictEqual(20)
})

test('getMaxGifts([50], 15, 1) should return 0', () => {
  expect(getMaxGifts([50], 15, 1)).toStrictEqual(0)
})

test('getMaxGifts([50], 100, 1) should return 50', () => {
  expect(getMaxGifts([50], 100, 1)).toStrictEqual(50)
})

test('getMaxGifts([50, 70], 100, 1) should return 70', () => {
  expect(getMaxGifts([50, 70], 100, 1)).toStrictEqual(70)
})

test('getMaxGifts([50, 70, 30], 100, 2) should return 100', () => {
  expect(getMaxGifts([50, 70, 30], 100, 2)).toStrictEqual(100)
})

test('getMaxGifts([50, 70, 30], 100, 3) should return 100', () => {
  expect(getMaxGifts([50, 70, 30], 100, 3)).toStrictEqual(100)
})

test('getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4) should return 100', () => {
  expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)).toStrictEqual(100)
})

test('getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000) should return 115', () => {
  expect(
    getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)
  ).toStrictEqual(115)
})
