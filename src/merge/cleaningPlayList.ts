import process from 'node:process'
import type { Channel } from '~/types/channel'

const isDev = process.env.DEV?.toLowerCase() === 'true'

export async function cleaningPlayList(channels: Channel[]) {
  const cleanedPlayListChannel: Channel[] = []
  const promiseQueue = channels.map(
    async (channel) => {
      if (!channel.url) {
        return false
      }

      if (process.env.CHECK_SOURCE?.toLowerCase() !== 'true') {
        cleanedPlayListChannel.push(channel)
        return true
      }

      try {
        const res = await fetch(channel.url)
        const isValid = res.status.toString().startsWith('2')
        if (isValid) {
          cleanedPlayListChannel.push(channel)
        }
        isDev && globalThis.console.log(`test ${channel.url} ${isValid ? 'success' : 'fail'}`)
        return isValid
      } catch (error) {
        isDev && globalThis.console.log(`test ${channel.url} fail`)
        return false
      }
    },
  )

  await Promise.all(promiseQueue)
  return cleanedPlayListChannel
}
