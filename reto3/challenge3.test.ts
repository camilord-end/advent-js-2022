import { distributeGifts } from '.'

test('the function should return a number', () => {
  const result = distributeGifts(['a', 'b', 'c'], ['d', 'e'])
  expect(result).toEqual(expect.any(Number))
})

test('the function should output 2 when the inputs are ["book", "doll", "ball"],["dasher", "dancer"]', () => {
  expect(distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer']))
})

test('distributeGifts(["a", "b", "c"], ["d", "e"]) should be 1', () => {
  expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toStrictEqual(1)
})

test('it should return 0 if reindeers cant carry any pack: distributeGifts(["videogames", "console"], ["midu"])', () => {
  expect(distributeGifts(['videogames', 'console'], ['midu']))
})

test('distributeGifts(["game", "videoconsole", "computer"], ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]) should be 5', () => {
  expect(
    distributeGifts(
      ['game', 'videoconsole', 'computer'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd'
      ]
    )
  ).toStrictEqual(5)
})

test('distributeGifts(["music"], ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]) should be 26', () => {
  expect(
    distributeGifts(
      ['music'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd'
      ]
    )
  ).toStrictEqual(26)
})
