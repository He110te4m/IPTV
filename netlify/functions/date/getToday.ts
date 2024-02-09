import moment from 'moment-timezone'

const timeZone = 'Asia/Shanghai'

export function getToday() {
  const today = moment()
    .tz(timeZone)
    .startOf('day')
    .toDate()

  globalThis.console.log(`today: ${today}`)
  return today
}
