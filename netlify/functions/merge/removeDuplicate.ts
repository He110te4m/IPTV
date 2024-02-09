import type { Channel } from '../types/channel'

export function removeDuplicate(channels: Channel[]) {
  const cache = new Map<string, Channel>()

  channels.forEach((channel) => {
    if (!channel.url || cache.has(formatCacheKey(channel))) {
      return
    }

    cache.set(formatCacheKey(channel), channel)
  })

  return Array.from(cache.values())
}

function formatCacheKey(channel: Channel) {
  return `${channel.url}-${channel.name}`
}
