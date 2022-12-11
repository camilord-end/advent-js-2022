export function checkPart(part: string): boolean {
  function palindrome(word: string) {
    const r: string = [...word.slice(-(word.length / 2))].reverse().join('')
    const l: string = word.slice(0, word.length / 2)
    return l === r
  }
  function checkSub(word: string) {
    let palArr: boolean[] = []
    for (let i = 0; i < word.length; i++) {
      const l: string = word.slice(0, i)
      const r: string = word.slice(i + 1, word.length)
      palArr.push(palindrome(l + r))
    }
    return palArr.includes(true)
  }
  return palindrome(part) || checkSub(part)
}
