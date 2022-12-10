export function createCube(size: number): string {
  let topArr: string[] = []
  let bottomArr: string[] = []
  for (let i = 0; i < size; i++) {
    topArr.push(
      ' '.repeat(size - 1 - i) +
        '/\\'.repeat(i + 1) +
        '_' +
        '\\_'.repeat(size - 1) +
        '\\'
    )
    bottomArr.push(' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size))
  }
  return [topArr, bottomArr].flat().join('\n')
}
