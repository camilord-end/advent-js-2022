export function wrapping(gifts: string[]): string[] {
  return gifts.map(
    (gift) =>
      `${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(
        gift.length + 2
      )}`
  )
}
