import { readFile } from 'node:fs/promises'
import process from 'node:process'
import { parseM3U } from '@iptv/playlist'
import type { Channel } from '~/types/channel'

const isDev = process.env.DEV?.toLowerCase() === 'true'

export async function cleaningPlayList(playListPath: string) {
  const playListContent = await readFile(playListPath)
  const playList = parseM3U(playListContent.toString())

  const cleanedPlayListChannel: Channel[] = []
  const promiseQueue = playList.channels.map(
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
