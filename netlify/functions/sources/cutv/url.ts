import type { Channel } from './consts'
import { generatePathname } from './pathname'

export function generateCUTVUrl(date: Date, channel: Channel) {
  const pathname = generatePathname(date, channel.pathname)

  return `https://${channel.cutvName}-tsl.cutv.com/${channel.pathname}/500/${pathname}.m3u8`
}
