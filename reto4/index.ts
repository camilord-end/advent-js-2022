export function fitsInOneBox(boxes: { l: number; w: number; h: number }[]) {
  let result: boolean = true
  let sortedBoxes = boxes.sort((i, j) => {
    return i.l + i.w + i.h - (j.l + j.w + j.h)
  })
  sortedBoxes.forEach(({ l, w, h }, index) => {
    if (sortedBoxes[index + 1]) {
      let checkL = l < sortedBoxes[index + 1].l
      let checkW = w < sortedBoxes[index + 1].w
      let checkH = h < sortedBoxes[index + 1].h
      if (!(checkL && checkW && checkH)) {
        result = false
      }
    }
  })
  return result
}
