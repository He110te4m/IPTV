import type { Channel } from '../types/channel'
import { cleaningPlayList } from './cleaningPlayList'

export async function mergeChannels(sources: Channel[], ...additions: Channel[][]) {
  return cleaningPlayList(sources.concat(...additions))
}
