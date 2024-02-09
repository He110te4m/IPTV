import { utcToZonedTime } from 'date-fns-tz'

export function getToday() {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const date = utcToZonedTime(now, 'Asia/Shanghai')

  console.log(`current date: ${date.toString()}`)

  return date
}
