export function getMaxGifts(
  giftsCities: number[], //possible factors
  maxGifts: number, //number to achieve
  maxCities: number //number of factors
): number {
  let factors: number[][] = []
  factors.push([], [giftsCities[0]])
  giftsCities.shift()

  giftsCities.map((possibleFactor) => {
    const newList = factors.map((factor) => {
      let factorCopy = [...factor]
      if (factorCopy.length < maxCities) {
        factorCopy.push(possibleFactor)
      }
      return factorCopy
    })
    factors = factors.concat(newList)
  })
  factors.shift()
  return Math.max(
    ...factors.map((factor) => {
      let sum = factor.reduce((total, num) => total + num)
      return sum > maxGifts ? 0 : sum
    })
  )
}
