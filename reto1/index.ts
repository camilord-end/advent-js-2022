export function wrapping(gifts: string[]) {
  return gifts.map((gift) => {
    let l = '*'.repeat(gift.length + 2)
    let m = '\n*' + gift + '*\n'
    return l + m + l
  })
}
