import { carryGifts } from '.'

test('carryGifts should return an array', () => {
  const mock = carryGifts(['game', 'bike', 'book', 'toy'], 10)
  expect(mock).toEqual(expect.any(Array))
})

test('carryGifts(["game", "bike", "book", "toy"], 10) should return ["game bike","book toy"]', () => {
  expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toStrictEqual([
    'game bike',
    'book toy'
  ])
})

test('carryGifts(["game", "bike", "book", "toy"], 7) should return ["game","bike","book toy"]', () => {
  expect(carryGifts(['game', 'bike', 'book', 'toy'], 7)).toStrictEqual([
    'game',
    'bike',
    'book toy'
  ])
})

test('carryGifts(["game", "bike", "book", "toy"], 4) should return ["game","bike","book","toy"]', () => {
  expect(carryGifts(['game', 'bike', 'book', 'toy'], 4)).toStrictEqual([
    'game',
    'bike',
    'book',
    'toy'
  ])
})

test('carryGifts(["toy", "gamme", "toy", "bike"], 6) should return ["toy","gamme","toy","bike"]', () => {
  expect(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)).toStrictEqual([
    'toy',
    'gamme',
    'toy',
    'bike'
  ])
})

test('carryGifts(["toy", "toy", "toy", "toy"], 2) should return []', () => {
  expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2)).toStrictEqual([])
})

test('carryGifts(["toy", "toy", "disk", "disk", "toy", "toy"], 7) should return ["toy toy", "disk","disk toy","toy"]', () => {
  expect(
    carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)
  ).toStrictEqual(['toy toy', 'disk', 'disk toy', 'toy'])
})
