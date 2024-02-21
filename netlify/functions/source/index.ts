import fetch from 'node-fetch'
import { chaozhouSource } from './chaozhou'

const sourceUrl = [
  'https://iptv.002397.xyz/fmml_ipv6.m3u',
  'https://iptv.002397.xyz/ycl_iptv.m3u',
  'https://iptv.002397.xyz/m_iptv.m3u',
  'https://iptv.002397.xyz/q_bj_iptv_unicom.m3u',
]

export async function getIPTVSources() {
  const allSources = await Promise.allSettled(
    sourceUrl.map(async url => (await fetch(url)).text()),
  )

  return [
    chaozhouSource,
  ].concat(
    allSources.flatMap(item => item.status === 'fulfilled' ? item.value : []),
  )
}
