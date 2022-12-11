import { checkPart } from '.'

test('checkPart should return a boolean', () => {
  const result = checkPart('')
  expect(result).toEqual(expect.any(Boolean))
})

test('checkPart("uwu") should return true', () => {
  expect(checkPart('uwu')).toStrictEqual(true)
})

test('checkPart("midu") should return false', () => {
  expect(checkPart('midu')).toStrictEqual(false)
})

test('checkPart("lolol") should return true', () => {
  expect(checkPart('lolol')).toStrictEqual(true)
})

test('checkPart("yolooloy") should return true', () => {
  expect(checkPart('yolooloy')).toStrictEqual(true)
})

test('checkPart("zzzoonzzz") should return true', () => {
  expect(checkPart('zzzoonzzz')).toStrictEqual(true)
})
