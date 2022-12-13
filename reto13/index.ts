const lastBackup = 1546300800

const changes = [
  [1, 1546300800],
  [2, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
  [3, 1546301100]
]

export function getFilesToBackup(
  lastBackup: number,
  changes: number[][]
): number[] {
  let filtered = changes.filter((file) => file[1] > lastBackup)
  let unique: Set<number> = new Set()
  filtered.forEach((fileid) => unique.add(fileid[0]))
  return [...unique].sort((a, b) => a - b)
}

getFilesToBackup(lastBackup, changes)
