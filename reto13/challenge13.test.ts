import { getFilesToBackup } from '.'

test('getFilesToBackup should return an array', () => {
  const mock = getFilesToBackup(69, [
    [1, 26],
    [2, 89]
  ])
  expect(mock).toEqual(expect.any(Array))
})

test('getFilesToBackup(1546300800, [[2, 1546300800],[3, 1546301100],[1, 1546300800],[11546300900],[1, 1546301000]]) should return [1,3]', () => {
  expect(
    getFilesToBackup(1546300800, [
      [2, 1546300800],
      [3, 1546301100],
      [1, 1546300800],
      [11546300900],
      [1, 1546301000]
    ])
  ).toStrictEqual([1, 3])
})

test('getFilesToBackup(1546300600, [[ 1, 1546300800 ],[ 2, 1546300800 ],[ 1, 1546300900 ],[ 11546301000 ],[ 3, 1546301100 ]]) should return [1,2,3]', () => {
  expect(
    getFilesToBackup(1546300600, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [11546301000],
      [3, 1546301100]
    ])
  ).toStrictEqual([1, 2, 3])
})

test('getFilesToBackup(1556300600, [[ 1, 1546300800 ],[ 2, 1546300800 ],[ 1, 1546300900 ],[ 11546301000 ],[ 3, 1546301100 ]]) should return []', () => {
  expect(
    getFilesToBackup(1556300600, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [11546301000],
      [3, 1546301100]
    ])
  ).toStrictEqual([])
})

test('getFilesToBackup(1556300600, []) should return []', () => {
  expect(getFilesToBackup(1556300600, [])).toStrictEqual([])
})
