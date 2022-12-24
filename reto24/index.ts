export function canExit(maze: string[][]) {
  let startPos: number[] = []
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 'S') {
        startPos = [i, j]
        break
      }
    }
  }
  let queue = [startPos]
  let visited = new Set()
  while (queue.length > 0) {
    let current = queue.shift()
    //@ts-ignore
    let row = current[0]
    //@ts-ignore
    let col = current[1]
    if (maze[row][col] === 'E') {
      return true
    }
    if (
      row > 0 &&
      maze[row - 1][col] !== 'W' &&
      !visited.has(`${row - 1},${col}`)
    ) {
      queue.push([row - 1, col])
      visited.add(`${row - 1},${col}`)
    }
    if (
      row < maze.length - 1 &&
      maze[row + 1][col] !== 'W' &&
      !visited.has(`${row + 1},${col}`)
    ) {
      queue.push([row + 1, col])
      visited.add(`${row + 1},${col}`)
    }
    if (
      col > 0 &&
      maze[row][col - 1] !== 'W' &&
      !visited.has(`${row},${col - 1}`)
    ) {
      queue.push([row, col - 1])
      visited.add(`${row},${col - 1}`)
    }
    if (
      col < maze[row].length - 1 &&
      maze[row][col + 1] !== 'W' &&
      !visited.has(`${row},${col + 1}`)
    ) {
      queue.push([row, col + 1])
      visited.add(`${row},${col + 1}`)
    }
  }

  return false
}
