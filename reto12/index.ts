export function selectSleigh(
  distance: number,
  sleighs: { name: string; consumption: number }[]
) {
  const filtered = sleighs
    .filter(({ consumption }) => consumption * distance <= 20)
    .at(-1)
  return filtered ? filtered.name : null
}
