import moment from 'moment-timezone'

const timeZone = 'Asia/Shanghai'

export function getToday() {
  const today = moment()
    .tz(timeZone)
    .startOf('day')

  globalThis.console.log(`today: ${today.toDate()}`)
  return today
}
