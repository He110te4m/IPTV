import { utcToZonedTime } from 'date-fns-tz'
import { startOfDay } from 'date-fns'

export function getToday() {
  const now = new Date()

  const beijingTime = utcToZonedTime(now, 'Asia/Shanghai')
  const beijingMidnight = startOfDay(beijingTime)
  console.log(`current date: ${beijingMidnight.toString()}`)

  return beijingMidnight
}
