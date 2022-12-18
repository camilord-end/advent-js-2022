export function dryNumber(dry: number, numbers: number): number[] {
  const sol: number[] = []
  const dryStr = dry.toString()
  let flag: number = 0
  while (flag < numbers) {
    sol[flag] = flag + 1
    flag++
  }
  let filtered = sol.filter((n) => `${n}`.includes(dryStr))
  return filtered
}
