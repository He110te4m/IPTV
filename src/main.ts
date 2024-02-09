import { calcCUTV } from './cutv'
import { mergeChannels } from './merge'
import { generatePlayList } from './playlist'
import type { Channel } from './types/channel'

main()

async function main() {
  const cutvChannels = calcCUTV()
  const handlePlayList = async (channels: Channel[]) => mergeChannels(channels, cutvChannels)
  await generatePlayList(handlePlayList)
}
