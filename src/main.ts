import { cleaningPlayList, getAllPlayList, writePlayList } from './utils'

main()

async function main() {
  const allPlayList = await getAllPlayList()
  const checkQueue = await Promise.allSettled(
    allPlayList.map(cleaningPlayList),
  )

  writePlayList(
    checkQueue.flatMap(item => item.status === 'fulfilled' ? item.value : []),
  )
}
