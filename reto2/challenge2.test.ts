import { countHours } from '.'

test('the function should return a number', () => {
  const result = countHours(2023, ['01/06', '04/01', '12/25'])
  expect(result).toEqual(expect.any(Number))
})

test('should return 4 when the input is "2023,["01/06","04/01","12/25"]"', () => {
  expect(countHours(2023, ['01/06', '04/01', '12/25'])).toStrictEqual(4)
})

test('countHours(2022, ["01/06", "04/01", "12/25"]) should return 4', () => {
  expect(countHours(2022, ['01/06', '04/01', '12/25'])).toStrictEqual(4)
})

test('countHours(1985, ["01/01", "01/06", "02/02", "02/17", "02/28", "06/03", "12/06", "12/25"] should return 10', () => {
  expect(
    countHours(1985, [
      '01/01',
      '01/06',
      '02/02',
      '02/17',
      '02/28',
      '06/03',
      '12/06',
      '12/25'
    ])
  ).toStrictEqual(10)
})

test('countHours(2000, ["01/01"]) should return 0', () => {
  expect(countHours(2000, ['01/01'])).toStrictEqual(0)
})
