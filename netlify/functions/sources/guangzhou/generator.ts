import type { Channel as M3UChannel } from '../types'
import type { Channel } from './consts'
import { channelMap } from './consts'

interface ChannelData {
  stationNumber: string
  httpUrl: string
}

interface ResponseData {
  data: ChannelData[]
}

const map = new Map<string, Channel>()
for (const channel of Object.values(channelMap)) {
  map.set(channel.pathname, channel)
}

export async function generateGuangzhouPlaylist() {
  const response = await fetch('https://gzbn.gztv.com:7443/plus-cloud-manage-app/liveChannel/queryLiveChannelList?type=1')
  const data = await response.json() as ResponseData

  const channels: M3UChannel[] = []
  for (const item of data.data) {
    const channel = map.get(item.stationNumber)
    if (channel) {
      channels.push({
        name: channel.name,
        url: item.httpUrl,
        groupTitle: '广州 TV',
        tvgName: channel.name,
        tvgLogo: `https://epg.112114.xyz/logo/${channel.name}.png`,
      })
    }
  }

  return channels
}
