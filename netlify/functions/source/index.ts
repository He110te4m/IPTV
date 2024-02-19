import fetch from 'node-fetch'
import { chaozhouSource } from './chaozhou'

const sourceUrl = [
  'https://iptv.b2og.com/fmml_ipv6.m3u',
  'https://iptv.b2og.com/ycl_iptv.m3u',
  'https://iptv.b2og.com/m_iptv.m3u',
  'https://iptv.b2og.com/o_cn.m3u',
  'https://iptv.b2og.com/q_bj_iptv_unicom.m3u',
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
