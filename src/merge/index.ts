import { cleaningPlayList } from './cleaningPlayList'
import { getAllPlayList } from './file'
import { writePlayList } from './writePlayList'
import type { Channel } from '~/types/channel'

export async function mergePlayList(extraChannel: Channel[] = []) {
  const allPlayList = await getAllPlayList()
  const checkQueue = await Promise.allSettled(
    allPlayList.map(cleaningPlayList),
  )

  writePlayList(
    checkQueue
      .flatMap(item => item.status === 'fulfilled' ? item.value : [])
      .concat(extraChannel),
  )
}
