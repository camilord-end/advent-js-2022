import { decorateTree } from '.'

test('decorateTree should return an array', () => {
  const mock = decorateTree('')
  expect(mock).toEqual(expect.any(Array))
})

test('decorateTree("B P R P") should return ["R","P B","R B B","B P R P"]', () => {
  expect(decorateTree('B P R P')).toStrictEqual([
    'R',
    'P B',
    'R B B',
    'B P R P'
  ])
})

test('decorateTree("B B") should return ["B", "B B"]', () => {
  expect(decorateTree('B B')).toStrictEqual(['B', 'B B'])
})

test('decorateTree("B B P R P R R") should return ["B","R P","B P P","P R B R","P P B B P","B R B B R","B B P R P R R"]', () => {
  expect(decorateTree('B B P R P R R')).toStrictEqual([
    'B',
    'R P',
    'B P P',
    'P R B R',
    'P P B B P',
    'B R B B B R',
    'B B P R P R R'
  ])
})

test('decorateTree("R R P R R") should return ["R","R R","P B P","R B B R","R R P R R"]', () => {
  expect(decorateTree('R R P R R')).toStrictEqual([
    'R',
    'R R',
    'P B P',
    'R B B R',
    'R R P R R'
  ])
})
