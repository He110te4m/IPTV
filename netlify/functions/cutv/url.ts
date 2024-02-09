import type { Channel } from './consts'
import { generatePathname } from './pathname'

export function generateCUTVUrl(channel: Channel) {
  const pathname = generatePathname(channel.pathname)

  return `https://${channel.cutvName}-tsl.cutv.com/${channel.pathname}/500/${pathname}.m3u8`
}
