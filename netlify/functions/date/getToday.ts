import moment from 'moment'

export function getToday(timezone = 8) {
  return moment().utcOffset(timezone)
}
