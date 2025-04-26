import { parseM3U } from '@iptv/playlist'
import type { Source } from '../types'
import { sourceUrl, timeout } from './consts'

export default {
  async get() {
    return (await getIPTVSources()).flatMap(source => parseM3U(source).channels)
  },
} satisfies Source

async function getIPTVSources() {
  const abortController = new AbortController()
  setTimeout(() => abortController.abort(), timeout)

  const allSources = await Promise.allSettled(
    sourceUrl.map(async url => (await fetch(url, { signal: abortController.signal })).text()),
  )

  return allSources.flatMap(item => item.status === 'fulfilled' ? item.value : [])
}
