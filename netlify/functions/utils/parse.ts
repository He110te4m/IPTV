// import moment from 'moment-timezone'
import { isNumber, isString } from './is'

export function parseDate(date?: unknown): number {
  const today = getToday()

  if (isString(date)) {
    let timestamp = today.getTime()
    try {
      timestamp = new Date(date).getTime()
    } catch (e) {
      console.error(e)
    }
    return timestamp
  }

  if (isNumber(date)) {
    const bit = String(date)
    if (bit.length === 10) {
      return Math.floor(date * 1000)
    }

    return date
  }

  return today.getTime()
}

// const timeZone = 'Asia/Shanghai'

export function getToday() {
  // const today = moment()
  //   .tz(timeZone)
  //   .startOf('day')

  // return today.toDate()
  const now = getNow()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  globalThis.console.log(`today: ${today}`)

  return today
}

export function getNow() {
  // const now = moment()
  //   .tz(timeZone)

  // return now.toDate()

  return new Date()
}
