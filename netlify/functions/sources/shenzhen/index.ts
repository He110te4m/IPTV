import type { Channel, Source } from '../types'
import { channelMap } from './consts'
import { generateShantouPlaylist } from './generator'

export default {
  get(date: Date) {
    globalThis.console.log(`date: ${date}, now: ${new Date()}, TZ: ${process.env.TZ}`)
    const channels: Channel[] = []
    Object.keys(channelMap).forEach((key) => {
      const channel = channelMap[key]
      channels.push({
        name: channel.name,
        url: generateShantouPlaylist(date, channel),
        groupTitle: '深圳 TV',
        tvgName: channel.name,
        tvgLogo: `https://epg.112114.xyz/logo/${channel.name}.png`,
      })
    })

    return channels
  },
} satisfies Source
