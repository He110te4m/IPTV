import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { writeM3U } from '@iptv/playlist'

type M3uPlaylist = Parameters<typeof writeM3U>[0]

export async function writePlayList(channels: M3uPlaylist['channels']) {
  const playListContent = writeM3U({
    channels,
  })

  const outputFile = resolve(process.cwd(), './dist/iptv.m3u8')
  await mkdir(dirname(outputFile), { recursive: true })

  return await writeFile(outputFile, playListContent)
}
