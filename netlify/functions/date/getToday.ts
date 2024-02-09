import moment from 'moment-timezone'

const timeZone = 'Asia/Shanghai'

export function getToday() {
  return moment()
    .tz(timeZone)
    .startOf('day')
    .valueOf()
}
