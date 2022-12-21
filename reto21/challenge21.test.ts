import { printTable } from '.'

test('printTable should return a string', () => {
  expect(
    typeof printTable([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ])
  ).toBe('string')
})

test('printTable([{ name: "PlayStation 5", quantity: 9234782374892 },{ name: "Book Learn Web Dev", quantity: 23531 }]) should return "\n++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************"', () => {
  expect(
    printTable([
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 }
    ])
  ).toStrictEqual(
    '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************'
  )
})

test('printTable([{ name: "Game", quantity: 2 },{ name: "Bike", quantity: 1 },{ name: "Book", quantity: 3 }]) should return "\n+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************"', () => {
  expect(
    printTable([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ])
  ).toStrictEqual(
    '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************'
  )
})

test('printTable([{ name: "Game", quantity: 10000 }]) should return "\n+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************"', () => {
  expect(printTable([{ name: 'Game', quantity: 10000 }])).toStrictEqual(
    '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************'
  )
})

test('printTable([{ name: "Game", quantity: 1234567890 }]) should return "\n+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************"', () => {
  expect(printTable([{ name: 'Game', quantity: 1234567890 }])).toStrictEqual(
    '+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************'
  )
})

test('printTable([{ name: "Toy", quantity: 12 },{ name: "Mic", quantity: 123 }]) should return "\n+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************"', () => {
  expect(
    printTable([
      { name: 'Toy', quantity: 12 },
      { name: 'Mic', quantity: 123 }
    ])
  ).toStrictEqual(
    '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************'
  )
})
