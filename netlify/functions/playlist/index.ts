import { parseM3U } from '@iptv/playlist'
import { iptvSource } from './sources'

export async function generatePlayList() {
  return iptvSource.flatMap(source => parseM3U(source).channels)
}
