import moment from 'moment-timezone'

const timeZone = 'Asia/Shanghai'

export function getToday() {
  const today = moment().tz(timeZone)

  console.log(`current date: ${today.format('YYYY-MM-DD HH:mm:ss')}`)

  return today.unix()
}
