import { readFile } from 'node:fs/promises'
import { parseM3U } from '@iptv/playlist'

export async function readPlayList(playListFiles: string[]) {
  return Promise.allSettled(
    playListFiles.map(async (playListPath) => {
      const playListContent = await readFile(playListPath)
      const playList = parseM3U(playListContent.toString())

      return playList.channels
    }),
  ).then(list => list.flatMap(item => item.status === 'fulfilled' ? item.value : []))
}
