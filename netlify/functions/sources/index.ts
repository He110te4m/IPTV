import { writeM3U } from '@iptv/playlist'
import { getToday } from '../utils/parse'
import type { Channel, Source } from './types'
import shantou from './shantou'
import shenzhen from './shenzhen'
import iptv from './iptv'

const sources: Source[] = [
  shantou,
  shenzhen,
  iptv,
]

export async function getIPTVSources() {
  const date = getToday()
  globalThis.console.log(`date: ${date}, timestamp: ${date.getTime()}`)
  const channels = await Promise.allSettled(sources.map(source => source.get(date)))
    .then(results => results.flatMap(result => result.status === 'fulfilled' ? result.value : []))

  return convertToM3u(channels)
}

function convertToM3u(channels: Channel[]) {
  return writeM3U({
    channels,
  })
}
