export function getOptimalPath(path: number[][]) {
  function bestPath(row: number, col: number): number {
    const pathStep = path[row][col]
    if (row === path.length - 1) return pathStep
    const min = Math.min(
      bestPath(row + 1, col) + pathStep,
      bestPath(row + 1, col + 1) + pathStep
    )
    return min
  }
  const result: number = bestPath(0, 0)
  return result
}
