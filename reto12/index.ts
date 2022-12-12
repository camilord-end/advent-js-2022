const distance = 30
const sleighs = [
  { name: 'Gorusuke', consumption: 0.3 },
  { name: 'Madeval', consumption: 0.5 },
  { name: 'Lolivier', consumption: 0.7 },
  { name: 'Hyuuh', consumption: 1 }
]

export function selectSleigh(
  distance: number,
  sleighs: { name: string; consumption: number }[]
) {
  const filtered = sleighs
    .filter(({ consumption }) => consumption * distance <= 20)
    .at(-1)
  return filtered ? filtered.name : null
}

console.log(selectSleigh(distance, sleighs))
