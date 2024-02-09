import { DateTime } from 'luxon'

export function getToday() {
  const today = DateTime.now()
    .setZone('Asia/Shanghai')
    .startOf('day')
    .toJSDate()

  console.log('current date', today)

  return today
}
