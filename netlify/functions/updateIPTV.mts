import { resolve } from 'node:path'
import { existsSync } from 'node:fs'
import type { Config } from '@netlify/functions'
import type { Channel } from '../../src/types/channel'
import { calcCUTV } from '../../src/cutv'
import { mergeChannels } from '../../src/merge'
import { generatePlayList, writePlayList } from '../../src/playlist'
import { getToday } from '../../src/date'

async function task() {
  const outputFile = resolve('dist', formatFileName())
  globalThis.console.log(`output file: ${outputFile}`)
  if (existsSync(outputFile)) {
    return
  }

  const cutvChannels = calcCUTV()
  const handlePlayList = async (channels: Channel[]) => mergeChannels(channels, cutvChannels)
  const sourcePath = resolve('./dist/iptv.m3u8')
  globalThis.console.log(`read file: ${sourcePath}`)
  const playList = await handlePlayList(await generatePlayList([sourcePath]))
  await writePlayList(playList, outputFile)
}

export default task

export const config: Config = {
  schedule: '@hourly',
}

function formatFileName() {
  return `iptv-${getToday()}.m3u8`
}
