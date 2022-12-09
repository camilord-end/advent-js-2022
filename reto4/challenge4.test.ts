import { fitsInOneBox } from '.'

const test2 = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 }
]
const test3 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]
const test4 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]
const test5 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2 }
]
const test6 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

test('return type must be boolean', () => {
  const result = fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 }
  ])
  expect(result).toEqual(expect.any(Boolean))
})

test(`input ${JSON.stringify(test2)} should return false`, () => {
  expect(fitsInOneBox(test2)).toBe(false)
})

test(`input ${JSON.stringify(test3)} should return true`, () => {
  expect(fitsInOneBox(test3)).toStrictEqual(true)
})

test(`input ${JSON.stringify(test4)} should return false`, () => {
  expect(fitsInOneBox(test4)).toStrictEqual(false)
})

test(`input ${JSON.stringify(test5)} should return false`, () => {
  expect(fitsInOneBox(test5)).toStrictEqual(false)
})

test(`input ${JSON.stringify(test6)} should return true`, () => {
  expect(fitsInOneBox(test6)).toStrictEqual(true)
})
