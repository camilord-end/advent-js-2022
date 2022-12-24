import { canExit } from '.'

test('canExit should return a boolean', () => {
  expect(
    typeof canExit([
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
  ).toBe('boolean')
})

test('canExit([[" ", " ", "W", " ", "S"],[" ", " ", " ", " ", " "],[" ", " ", " , "W", " "],["W", "W", " ", "W", "W"],[" ", " ", " ", " ", "E"]]) should return true', () => {
  expect(
    canExit([
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
  ).toStrictEqual(true)
})

test('canExit([[" ", " ", "W", "W", "S"],[" ", " ", " ", "W", " "],[" ", " ", " ", "W", " "],["W", "W", " ", "W", "W"],[" ", " ", " ", " ", "E"]]) should return false', () => {
  expect(
    canExit([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
  ).toStrictEqual(false)
})

test('canExit([[" ", " ", "W", "W", "S"],[" ", " ", " ", "W", " "],[" ", " ", " ", "W", " "],["W", "W", " ", " ", "W"],[" ", " ", " ", " ", "E"]]) should return false', () => {
  expect(
    canExit([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', ' ', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
  ).toStrictEqual(false)
})

test('canExit([["E", " ", " ", " ", "S"]]) should return true', () => {
  expect(canExit([['E', ' ', ' ', ' ', 'S']])).toStrictEqual(true)
})

test('canExit([["E", " ", "W", " ", "S"]]) should return false', () => {
  expect(canExit([['E', ' ', 'W', ' ', 'S']])).toStrictEqual(false)
})

test('canExit([["E", " ", "W", " ", "S"],[" ", " ", " ", " ", " "],]) should return true', () => {
  expect(
    canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' ']
    ])
  ).toStrictEqual(true)
})

test('canExit([["E", " ", "W", " ", "S"],[" ", " ", " ", " ", " "],["W", "W", "W", "W", "W"],]) should return true', () => {
  expect(
    canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W']
    ])
  ).toStrictEqual(true)
})

test('canExit([["E", " ", "W", " ", "S"],[" ", " ", "W", " ", " "],["W", "W", "W", "W", "W"],]) should return false', () => {
  expect(
    canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', 'W', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W']
    ])
  ).toStrictEqual(false)
})

test('canExit([["E", "S", "W", "W", "W"],["W", "W", "W", "W", "W"],["W", "W", "W", "W", "W"]]) should return true', () => {
  expect(
    canExit([
      ['E', 'S', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W']
    ])
  ).toStrictEqual(true)
})
