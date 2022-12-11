export function getGiftsToRefill(
  a1: string[],
  a2: string[],
  a3: string[]
): string[] {
  return [...new Set([...a1, ...a2, ...a3])].filter((gift) => {
    return (
      Number(a1.includes(gift)) +
        Number(a2.includes(gift)) +
        Number(a3.includes(gift)) ===
      1
    )
  })
}
