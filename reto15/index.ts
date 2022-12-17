export function decorateTree(base: string) {
  const t: any = {
    BB: 'B',
    BP: 'R',
    BR: 'P',
    PP: 'P',
    PR: 'B',
    PB: 'R',
    RR: 'R',
    RB: 'P',
    RP: 'B'
  }
  let sol: string[] = []
  sol[0] = base
  while (sol[0].length > 1) {
    let itemArr = sol[0].split(' ')
    let eq = itemArr.map((element, index, a) => {
      return t[element + a[index + 1]]
    })
    sol.unshift(eq.filter((e) => e).join(' '))
  }
  return sol
}
