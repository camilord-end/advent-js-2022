export function carryGifts(gifts: string[], maxWeight: number) {
  let sol: string[] = []
  let aux: string = ''
  let filtered: string[] = gifts.filter((gift) => gift.length <= maxWeight)
  filtered.forEach((gift, index) => {
    let bagTry: string = aux + ' ' + gift
    let bagW: number = (aux.trim() + gift).replace(' ', '').length
    if (bagW > maxWeight) {
      sol.push(aux)
      aux = filtered[index]
    } else {
      aux = bagTry
    }
  })
  if (aux) {
    sol.push(aux)
  }
  return sol.map((e) => e.trim())
}
