import { sortToys } from '.'

test('sortToys should return an array', () => {
  const mock = sortToys(['a', 'b'], [1, 2])
  expect(mock).toEqual(expect.any(Array))
})

test('sortToys(["ball", "doll", "car", "puzzle"], [2, 3, 1, 0]) should return ["puzzle","car","ball","doll"]', () => {
  expect(
    sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])
  ).toStrictEqual(['puzzle', 'car', 'ball', 'doll'])
})

test('sortToys(["pc", "xbox", "ps4", "switch", "nintendo"], [3, 1, 0, 2, 4]) should return ["ps4","xbox","switch","pc","nintendo"]', () => {
  expect(
    sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])
  ).toStrictEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
})

test('sortToys(["pc", "xbox", "ps4", "switch", "nintendo"], [8, 6, 5, 7, 9]) should return ["ps4","xbox","switch","pc","nintendo"]', () => {
  expect(
    sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])
  ).toStrictEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
})

test('sortToys(["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l"], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]) should return ["l","a","b","c","d","e","f","g","h","j","k"]', () => {
  expect(
    sortToys(
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
      [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]
    )
  ).toStrictEqual(['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'])
})
