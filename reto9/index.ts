export function countTime(leds: number[]): number {
  let zeroArr: string[] = leds.join('').split('1')
  let fix = zeroArr[zeroArr.length - 1]
  zeroArr[0] = zeroArr[0] + fix
  zeroArr.splice(-1)
  let longestSub: number[] = zeroArr.map((item) => item.length)
  return Math.max(...longestSub) * 7
}
