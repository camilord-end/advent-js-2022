export function printTable(gifts: { name: string; quantity: number }[]) {
  const giftLen = Math.max(
    ...gifts.map(({ name }) => {
      return name.length
    }),
    4
  )
  const quantityLen = Math.max(
    ...gifts.map(({ quantity }) => {
      return quantity.toString().length
    }),
    8
  )
  const bottom = `**${'*'.repeat(giftLen)}***${'*'.repeat(quantityLen)}**`
  const top = `++${'+'.repeat(giftLen)}+++${'+'.repeat(quantityLen)}++\n`
  const gH = `Gift${' '.repeat(giftLen - 4)}`
  const qH = `Quantity${' '.repeat(quantityLen - 8)}`
  const header = `| ${gH} | ${qH} |\n`
  const divider = `| ${'-'.repeat(giftLen)} | ${'-'.repeat(quantityLen)} |\n`
  const body = gifts
    .map(({ name, quantity }) => {
      let nLen = name.length
      let qLen = quantity.toString().length
      let nBody = `${name}${' '.repeat(giftLen - nLen)}`
      let qBody = `${quantity}${' '.repeat(quantityLen - qLen)}`
      return `| ${nBody} | ${qBody} |\n`
    })
    .join('')
  return top + header + divider + body + bottom
}
