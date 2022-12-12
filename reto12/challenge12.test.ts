import { selectSleigh } from '.'

test('selectSleigh should return a string', () => {
  expect(
    typeof selectSleigh(1, [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 }
    ])
  ).toBe('string')
})

test('selectSleigh(1, [{ name: "pheralb", consumption: 0.3 },{ name: "TMChein", consumption: 0.5 }]) should return "TMChein"', () => {
  expect(
    selectSleigh(1, [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 }
    ])
  ).toStrictEqual('TMChein')
})

test('selectSleigh(10, [{ name: "Pedrosillano", consumption: 1 },{ name: "SamarJaffal", consumption: 5 }] should return "Pedrosillano"', () => {
  expect(
    selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 5 }
    ])
  ).toStrictEqual('Pedrosillano')
})

test('selectSleigh(10, [{ name: "Pedrosillano", consumption: 1 },{ name: "SamarJaffal", consumption: 2 },{ name: "marcospage", consumption: 3 }]) should return "SamarJaffal"', () => {
  expect(
    selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])
  ).toStrictEqual('SamarJaffal')
})

test('selectSleigh(50, [{ name: "Pedrosillano", consumption: 1 },{ name: "SamarJaffal", consumption: 2 },{ name: "marcospage", consumption: 3 }] should return null', () => {
  expect(
    selectSleigh(50, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])
  ).toStrictEqual(null)
})
