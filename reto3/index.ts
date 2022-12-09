export function distributeGifts(
  packOfGifts: string[],
  reindeers: string[]
): number {
  let reindeersCanCarry: number = 0
  for (const rainder of reindeers) {
    reindeersCanCarry += rainder.length * 2
  }
  let packWeights: number = 0
  for (const gift of packOfGifts) {
    packWeights += gift.length
  }
  return Math.floor(reindeersCanCarry / packWeights)
}
//console.log(distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer']))
