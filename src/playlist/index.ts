import { getAllPlayList } from './file'
import { readPlayList } from './readPlayList'
import { writePlayList } from './writePlayList'
import type { Channel } from '~/types/channel'

export async function generatePlayList(handlePlayList: (channels: Channel[]) => Channel[] | Promise<Channel[]>, files?: string[]) {
  const playListFiles = files ?? await getAllPlayList()
  const channels = await readPlayList(playListFiles)

  return writePlayList(await handlePlayList(channels))
}
