import { cleaningPlayList } from './cleaningPlayList'
import type { Channel } from '~/types/channel'

export async function mergeChannels(sources: Channel[], ...additions: Channel[][]) {
  return cleaningPlayList(sources.concat(...additions))
}
