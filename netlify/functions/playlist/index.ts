import { parseM3U } from '@iptv/playlist'
import { getIPTVSources } from '../source'

export async function generatePlayList() {
  const iptvSources = await getIPTVSources()
  return iptvSources.flatMap(source => parseM3U(source).channels)
}
