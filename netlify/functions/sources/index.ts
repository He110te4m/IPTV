import { writeM3U } from '@iptv/playlist'
import type { Channel, Source } from './types'
import shantou from './shantou'
import cutv from './cutv'

// import iptv from './iptv'

const sources: Source[] = [
  shantou,
  cutv,
  // iptv,
]

export async function getIPTVSources(timestamp: number) {
  const date = new Date(timestamp)
  const channels = await Promise.allSettled(sources.map(source => source.get(date)))
    .then(results => results.flatMap(result => result.status === 'fulfilled' ? result.value : []))

  return convertToM3u(channels)
}

function convertToM3u(channels: Channel[]) {
  return writeM3U({
    channels,
  })
}
