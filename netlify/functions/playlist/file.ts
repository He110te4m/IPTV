import glob from 'fast-glob'

export async function getAllPlayList() {
  console.log({
    dir: __dirname,
    cwd: process.cwd(),
  })
  return glob('./sources/**/*.m3u?(8)', { absolute: true, onlyFiles: true })
}
