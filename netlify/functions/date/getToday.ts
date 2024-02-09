import moment from 'moment-timezone'

const timeZone = 'Asia/Shanghai'

export function getToday() {
  const today = moment()
    .tz(timeZone)
    .startOf('day')
    .valueOf()

  console.log(`today: ${today}`)
  return today
}
