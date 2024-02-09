import { getAllPlayList } from './file'
import { readPlayList } from './readPlayList'

export * from './writePlayList'

export async function generatePlayList(files?: string[]) {
  const playListFiles = files ?? await getAllPlayList()
  return await readPlayList(playListFiles)
}
