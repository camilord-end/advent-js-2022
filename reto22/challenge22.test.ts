import { checkStepNumbers } from '.'

test('checkStepNumbers should return a boolean', () => {
  expect(
    typeof checkStepNumbers(
      ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
      [1, 33, 10, 2, 44, 20]
    )
  ).toBe('boolean')
})

test('checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],[1, 33, 10, 2, 44, 20]) should return true', () => {
  expect(
    checkStepNumbers(
      ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
      [1, 33, 10, 2, 44, 20]
    )
  ).toStrictEqual(true)
})

test('checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) should return false', () => {
  expect(
    checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10])
  ).toStrictEqual(false)
})

test('checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10]) should return true', () => {
  expect(
    checkStepNumbers(['tree_1', 'tree_1', 'house'], [1, 2, 10])
  ).toStrictEqual(true)
})

test('checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6]) should return false', () => {
  expect(
    checkStepNumbers(
      [
        'house',
        'house',
        'tree_1',
        'tree_1',
        'house',
        'tree_2',
        'tree_2',
        'tree_3'
      ],
      [5, 2, 1, 2, 3, 4, 5, 6]
    )
  ).toStrictEqual(false)
})
