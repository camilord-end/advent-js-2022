export function getCompleted(part: string, total: string): string {
  function toSecs(arr: string): number {
    let arrString = arr.split(':')
    let hts: number = Number(arrString[0]) * 3600
    let mts: number = Number(arrString[1]) * 60
    return hts + mts + Number(arrString[2])
  }
  function findHcf(numerator: number, denominator: number): string {
    let mcd: number = numerator
    let aux: number = denominator
    while (aux) {
      let t: number = aux
      aux = mcd % aux
      mcd = t
    }
    return `${numerator / mcd}/${denominator / mcd}`
  }
  const solution = findHcf(toSecs(part), toSecs(total))
  return solution
}
