export function executeCommands(commands: string[]) {
  const normalizeNumber = (number: number) => {
    if (number > 255) return number - 256
    if (number < 0) return number + 256
    return number
  }
  const dictionary = {
    MOV: (a: string, b: string, registers: number[]) => {
      const pos1 = Number(a.slice(1))
      const pos2 = Number(b.slice(1))
      registers[pos2] = a.includes('V')
        ? normalizeNumber(registers[pos1])
        : Number(a)
    },
    ADD: (a: string, b: string, registers: number[]) => {
      const pos1 = Number(a.slice(1))
      const pos2 = Number(b.slice(1))
      registers[pos1] = normalizeNumber(registers[pos1] + registers[pos2])
    },
    DEC: (a: string, _: any, registers: number[]) => {
      const pos1 = Number(a.slice(1))
      registers[pos1] = normalizeNumber(registers[pos1] - 1)
    },
    INC: (a: string, _: any, registers: number[]) => {
      const pos1 = Number(a.slice(1))
      registers[pos1] = normalizeNumber(registers[pos1] + 1)
    },
    JMP: (
      a: number,
      _: any,
      registers: number[],
      commands: string[],
      current: number
    ) => {
      if (registers[0] === 0) return

      commands.slice(a, current + 1).forEach((command) => {
        const [action, args] = command.split(' ')
        const [pos1, pos2] = args.split(',')
        //@ts-ignore
        dictionary[action](
          pos1,
          pos2,
          registers,
          commands,
          commands.indexOf(command)
        )
      })
    }
  }

  let registers = [0, 0, 0, 0, 0, 0, 0, 0]
  commands.forEach((command) => {
    const [action, args] = command.split(' ')
    const [pos1, pos2] = args.split(',')
    //@ts-ignore
    dictionary[action](
      pos1,
      pos2,
      registers,
      commands,
      commands.indexOf(command)
    )
  })
  return registers
}
