import { calcCUTV } from './cutv'
import { mergeChannels } from './merge'
import { generatePlayList, writePlayList } from './playlist'
import type { Channel } from './types/channel'

main()

async function main() {
  await updateIPTV()
}

async function updateIPTV() {
  const cutvChannels = calcCUTV()
  const handlePlayList = async (channels: Channel[]) => mergeChannels(channels, cutvChannels)
  const playList = await handlePlayList(await generatePlayList())
  await writePlayList(playList)
}
