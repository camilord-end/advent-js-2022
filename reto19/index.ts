export function sortToys(toys: string[], positions: number[]): string[] {
  let solution: string[] = []
  const min = Math.min(...positions)
  const norm: number[] = positions.map((n) => n - min)
  toys.forEach((toy, index) => (solution[norm[index]] = toy))
  return solution
}
