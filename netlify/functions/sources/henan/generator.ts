import { createHash } from 'node:crypto'
import { writeFileSync } from 'node:fs'
import type { Channel as M3UChannel } from '../types'
import { API_SECRET, API_URL, channelMap } from './consts'
import type { ChannelInfo } from './types'

export async function generateHenanUrl(): Promise<M3UChannel[]> {
  const timestamp = Math.floor(Date.now() / 1000)
  const sign = createHash('sha256')
    .update(API_SECRET + timestamp)
    .digest('hex')

  const response = await fetch(API_URL, {
    headers: {
      timestamp: timestamp.toString(),
      sign,
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch channel list: ${response.statusText}`)
  }

  const channels: ChannelInfo[] = await response.json() as ChannelInfo[]
  writeFileSync('henan.json', JSON.stringify(channels, null, 2))
  const m3uChannels: M3UChannel[] = []

  for (const [, channel] of Object.entries(channelMap)) {
    const targetChannel = channels.find(c => c.name === channel.name)
    if (!targetChannel?.video_streams?.[0]) {
      continue
    }

    m3uChannels.push({
      name: channel.name,
      url: targetChannel.video_streams[0],
      groupTitle: '河南 TV',
      tvgName: channel.name,
      tvgLogo: `https://epg.112114.xyz/logo/${channel.cutvName}/${channel.pathname}.png`,
    })
  }

  return m3uChannels
}
