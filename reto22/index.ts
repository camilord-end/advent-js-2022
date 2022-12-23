export function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  let res: boolean[] = []
  let unique = [...new Set(systemNames)]
  const getAllIndex = (str: string, arr: string[]) => {
    let indexes: number[] = []
    arr.forEach((element, index) => {
      str === element ? indexes.push(index) : 0
    })
    return indexes
  }
  unique.forEach((item) => {
    let indexes = getAllIndex(item, systemNames)
    let itemNumbers = stepNumbers.filter((_, i) => indexes.includes(i))
    let sortedItemNumbers = [...itemNumbers].sort((a, b) => a - b)
    res.push(itemNumbers.join('') === sortedItemNumbers.join(''))
  })
  return !res.includes(false)
}
