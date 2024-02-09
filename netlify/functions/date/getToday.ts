export function getToday(timezone = 8) {
  const _date = new Date()
  const date = getTimeByZone(_date, timezone)
  date.setHours(0, 0, 0, 0)
  globalThis.console.log(`today: ${date.toString()}`)
  return date.getTime()
}

function getTimeByZone(date: Date, timezone: number) {
  // 本地时间距离（GMT时间）毫秒数
  const nowDate = date.getTime()
  // 本地时间和格林威治时间差，单位分钟
  const offset_GMT = new Date().getTimezoneOffset()
  //  反推到格林尼治时间
  const GMT = nowDate + offset_GMT * 60 * 1000
  //  获取指定时区时间
  const targetDate = new Date(GMT + timezone * 60 * 60 * 1000)

  return targetDate
}
