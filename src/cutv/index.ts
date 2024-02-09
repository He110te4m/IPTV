import { channelMap } from './consts'
import { generateCUTVUrl } from './url'
import type { Channel } from '~/types/channel'

export function calcCUTV() {
  const channels: Channel[] = []
  Object.keys(channelMap).forEach((key) => {
    const channel = channelMap[key]
    channels.push({
      name: channel.name,
      url: generateCUTVUrl(channel),
      groupTitle: '地方',
      tvgName: channel.name,
      tvgLogo: `https://epg.112114.xyz/logo/${channel.name}.png`,
    })
  })

  return channels
}
