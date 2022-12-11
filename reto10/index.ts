export function checkJump(heights: number[]): boolean {
  const peak: number = Math.max(...heights)
  const peakIndex: number = heights.indexOf(peak)
  const expectedL: string = heights.slice(0, peakIndex).sort().join('')
  const expectedR: string = heights
    .slice(peakIndex + 1)
    .sort()
    .reverse()
    .join('')
  const checkL: boolean = heights.slice(0, peakIndex).join('') === expectedL
  const checkR: boolean = heights.slice(peakIndex + 1).join('') === expectedR
  return checkL && checkR && expectedL.length > 0 && expectedR.length > 0
}
