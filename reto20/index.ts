interface RaindeerType {
  type: string
  weightCapacity: number
}

interface GiftsType {
  country: string
  weight: number
}

/*
 
 For example. To France (17) you would not send seventeen diesel reindeer (17 * 1). There are reindeer with greater load capacity, but you would not send a nuclear reindeer (50), since you would be wasting its capacity. An electric reindeer (10) would be sent, one gasoline (5) and two diesel (2 * 1).

To Spain (37) you could not send a team made up of three electric reindeer (3 * 10), one gasoline (5) and two diesel (2 * 1), since there cannot be more electric reindeer than gasoline. Nor two electric reindeer (2 * 10), three gasoline (3 * 5) and two diesel (2 * 1), since there cannot be more gasoline than diesel. You would have to send two electric reindeer (2 * 10), two gasoline (2 * 5) and seven diesel (7 * 1).
 */
export function howManyReindeers(
  reindeerTypes: RaindeerType[],
  gifts: GiftsType[]
) {
  let solution = []

  const posibleReins = (arr: RaindeerType[], weight: number) => {
    let pos = arr.filter(({ weightCapacity }) => weightCapacity < weight)
    let weightAux = weight
    while (weightAux > 0) {}
    return pos
  }

  solution = gifts.map(({ country, weight }) => {
    let reindeers = posibleReins(reindeerTypes, weight)
    console.log(country, reindeers)
    return { country, reindeers }
  })
  return solution
}

const rT = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gfts = [{ country: 'France', weight: 17 }]

console.log(howManyReindeers(rT, gfts))
