import glob from 'fast-glob'
import { resolve } from 'node:path'

export async function getAllPlayList() {
  console.log({
    dir: __dirname,
    cwd: process.cwd(),
  })
  return glob('./sources/**/*.m3u?(8)', { absolute: true, onlyFiles: true, cwd: resolve(__dirname, '..') })
}
