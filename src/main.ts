import { calcCUTV } from './cutv'
import { mergePlayList } from './merge'

main()

async function main() {
  const cutvChannels = calcCUTV()
  await mergePlayList(cutvChannels)
}
