import { resolve } from 'node:path'
import type { Config } from '@netlify/functions'
import type { Channel } from '../../src/types/channel'
import { calcCUTV } from '../../src/cutv'
import { mergeChannels } from '../../src/merge'
import { generatePlayList } from '../../src/playlist'

async function task() {
  const cutvChannels = calcCUTV()
  const handlePlayList = async (channels: Channel[]) => mergeChannels(channels, cutvChannels)
  const sourcePath = resolve('./dist/iptv.m3u8')
  globalThis.console.log(`read file: ${sourcePath}`)
  await generatePlayList(handlePlayList, [sourcePath])
}

export default task

task()

export const config: Config = {
  schedule: '@hourly',
}
