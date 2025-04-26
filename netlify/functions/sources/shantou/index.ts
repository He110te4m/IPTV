import type { Channel, Source } from '../types'
import { channelMap } from './consts'
import { generateShantouPlaylist } from './generator'

export default {
  get(date: Date) {
    const channels: Channel[] = []
    Object.keys(channelMap).forEach((key) => {
      const channel = channelMap[key]
      channels.push({
        name: channel.name,
        url: generateShantouPlaylist(date, channel.pathname),
        groupTitle: 'CUTV',
        tvgName: channel.name,
        tvgLogo: `https://epg.112114.xyz/logo/${channel.name}.png`,
      })
    })

    return channels
  },
} satisfies Source
