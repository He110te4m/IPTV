import glob from 'fast-glob'

export async function getAllPlayList() {
  return glob('./sources/**/*.m3u?(8)', { absolute: true, onlyFiles: true })
}
