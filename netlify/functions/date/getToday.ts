import { DateTime } from 'luxon'

const timeZone = 'Asia/Shanghai'

export function getToday() {
  const today = DateTime.local({ zone: timeZone })
    .toJSDate()

  today.setHours(0, 0, 0, 0)

  console.log('current date', today)

  return today
}
