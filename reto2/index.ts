export function countHours(year: number, holidays: string[]): number {
  let hours: number = 0
  holidays.forEach((holiday) => {
    let holidayDate = new Date(`${year}/${holiday}`)
    if (!(holidayDate.getDay() === 0) && !(holidayDate.getDay() === 6)) {
      hours = hours + 2
    }
  })
  return hours
}
