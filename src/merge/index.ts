import { cleaningPlayList } from './cleaningPlayList'
import { getAllPlayList } from './file'
import { writePlayList } from './writePlayList'

export async function mergePlayList() {
  const allPlayList = await getAllPlayList()
  const checkQueue = await Promise.allSettled(
    allPlayList.map(cleaningPlayList),
  )

  writePlayList(
    checkQueue.flatMap(item => item.status === 'fulfilled' ? item.value : []),
  )
}
