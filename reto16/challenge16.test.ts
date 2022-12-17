import { fixLetter } from '.'

test('fixLetter should return a string', () => {
  const mock = fixLetter(' xd')
  expect(mock).toEqual(expect.any(String))
})

test('fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `) should return "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye."', () => {
  expect(
    fixLetter(
      ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
    )
  ).toStrictEqual(
    'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
  )
})

test('fixLetter("  Hi Santa claus. I`m a girl from Barcelona , Spain . please, send me a bike.  Is it possible?") should return "Hi Santa Claus. I`m a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"', () => {
  expect(
    fixLetter(
      '  Hi Santa claus. I`m a girl from Barcelona , Spain . please, send me a bike.  Is it possible?'
    )
  ).toStrictEqual(
    'Hi Santa Claus. I`m a girl from Barcelona, Spain. Please, send me a bike. Is it possible?'
  )
})

test('fixLetter("  hi    santa    claus ") should return "Hi Santa Claus."', () => {
  expect(fixLetter('  hi    santa    claus ')).toStrictEqual('Hi Santa Claus.')
})

test('fixLetter("  hi    santa    claus . santa claus is the best  ") should return "Hi Santa Claus. Santa Claus is the best."', () => {
  expect(
    fixLetter('  hi    santa    claus . santa claus is the best  ')
  ).toStrictEqual('Hi Santa Claus. Santa Claus is the best.')
})

test('fixLetter("  hi,santa claus. are you there ?   ") should return "Hi, Santa Claus. Are you there?"', () => {
  expect(fixLetter('  hi,santa claus. are you there ?   ')).toStrictEqual(
    'Hi, Santa Claus. Are you there?'
  )
})

test('fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ") should return "Hey Santa Claus. I want a bike. I want a videogame!"', () => {
  expect(
    fixLetter('Hey santa Claus .  I want a bike.   I want a videogame! ')
  ).toStrictEqual('Hey Santa Claus. I want a bike. I want a videogame!')
})
