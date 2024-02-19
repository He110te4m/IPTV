import fetch from 'node-fetch'
import { chaozhouSource } from './chaozhou'

export async function getIPTVSources() {
  const allSources = await Promise.allSettled([
    (await fetch('https://iptv.b2og.com/fmml_ipv6.m3u')).text(),
  ])

  return [chaozhouSource].concat(
    allSources.flatMap(item => item.status === 'fulfilled' ? item.value : []),
  )
}
