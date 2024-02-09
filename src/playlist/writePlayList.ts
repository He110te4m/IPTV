import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { writeM3U } from '@iptv/playlist'
import type { Channel } from '~/types/channel'

const defaultOutputFile = resolve(process.cwd(), './dist/iptv.m3u8')

export async function writePlayList(channels: Channel[], outputFile = defaultOutputFile) {
  const playListContent = writeM3U({
    channels,
  })

  await mkdir(dirname(outputFile), { recursive: true })

  return await writeFile(outputFile, playListContent)
}
