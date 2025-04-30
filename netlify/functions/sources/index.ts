import { writeM3U } from '@iptv/playlist'
import { getToday } from '../utils/parse'
import type { Channel, Source } from './types'
import guangzhou from './guangzhou'
import hebei from './hebei'
import henan from './henan'
import shantou from './shantou'
import shenzhen from './shenzhen'
import fixed from './fixed'
import iptv from './iptv'
import migu from './migu'

const sources: Source[] = [
  shantou,
  shenzhen,
  guangzhou,
  hebei,
  henan,
  migu,
  fixed,
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
