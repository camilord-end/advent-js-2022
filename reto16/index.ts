export function fixLetter(letter: string) {
  let correction = letter.replace(/([,.?!])([^,.?!])/g, '$1 $2')
  let correction2 = correction.replace(/\s+/g, ' ')
  let correction3 = correction2.replace(/([,.?!]{2,})/g, ($1) => {
    return $1[0]
  })
  let correction4 = correction3.replace(
    /([.?!])(\s)([A-z])/g,
    (_, $1, $2, $3) => {
      return $1 + $2 + $3.toUpperCase()
    }
  )
  let correction5 = correction4.replace(/(santa claus)/gi, 'Santa Claus')

  let correction6 = correction5.trim().replace(/\s([,.?!])/g, '$1')

  let correction7 = correction6.replace(/^([A-z])/g, ($1) => {
    return $1.toUpperCase()
  })
  let correction8 = correction7.replace(/([^.?!])$/g, '$1.')

  return correction8
}
