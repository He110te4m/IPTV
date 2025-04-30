import { createHash } from 'node:crypto'
import type { Channel as M3UChannel } from '../types'
import type { ApiResponse } from './types'

const API_URL = 'https://api.cmc.hebtv.com/scms/api/com/article/getArticleList?catalogId=32557&siteId=1'

export async function generateHebeiPlaylist() {
  const response = await fetch(API_URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7D11 Safari/528.16',
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json() as ApiResponse
  const channels: M3UChannel[] = []

  for (const newsItem of data.returnData.news) {
    const m3u8 = newsItem.liveVideo[0].formats[0].liveStream
    const liveKey = newsItem.appCustomParams.movie.liveKey
    const liveUri = newsItem.appCustomParams.movie.liveUri
    const t = Math.floor(Date.now() / 1000) + 7200
    const k = createHash('md5').update(liveUri + liveKey + t).digest('hex')
    const playUrl = `${m3u8}?t=${t}&k=${k}`

    channels.push({
      name: newsItem.title,
      url: playUrl,
      groupTitle: '河北 TV',
      tvgName: newsItem.title,
      tvgLogo: newsItem.logo,
    })
  }

  return channels
}
