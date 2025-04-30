import type { Channel as M3UChannel } from '../types'
import { channelMap } from './consts'

export async function generateMiguUrls(): Promise<M3UChannel[]> {
  return Promise.allSettled(
    Object.values(channelMap)
      .map(
        async channel => ({
          name: channel.name,
          url: await getPlayUrl(channel.pathname),
          groupTitle: 'Migu',
          tvgName: channel.name,
          tvgLogo: `https://epg.112114.xyz/logo/${channel.name}.png`,
        }),
      ),
  ).then(
    res => res.flatMap(r => r.status === 'fulfilled' ? r.value : []),
  )
}

function arrkey(chars: string | null, v: number): string {
  const put = ['e', 't', 'c', 'n']
  if (chars !== null) {
    return chars
  }
  return put[v - 1]
}

async function getPlayUrl(id: string): Promise<string> {
  const response = await fetch(`http://a.miguvideo.com/playurl/v1/play/playurlh5?contId=${id}`)
  const data = await response.json() as any
  if (data.code !== '200') {
    throw new Error(`Failed to get play URL: ${data.message}`)
  }
  const e = data.body.urlInfo.url
  const url = new URL(e)
  const params = url.searchParams

  const userid = params.get('userid')?.split('') || []
  const timestamp = params.get('timestamp')?.split('') || []
  const puData = params.get('puData')?.split('') || []
  const ProgramID = id.split('')
  const Channel_ID = '0116_25000000-99000-100300010010001'.split('')
  const number = '2624'.split('')

  const s = puData.length
  const arr_key: string[] = []

  for (let v = 0; v < s / 2; v++) {
    arr_key.push(puData[s - v - 1])
    arr_key.push(puData[v])

    switch (v) {
      case 1:
        arr_key.push(arrkey(userid[Number.parseInt(number[0])], v))
        break
      case 2:
        arr_key.push(arrkey(timestamp[Number.parseInt(number[1])], v))
        break
      case 3:
        arr_key.push(arrkey(ProgramID[Number.parseInt(number[2])], v))
        break
      case 4:
        arr_key.push(arrkey(Channel_ID[Channel_ID.length - Number.parseInt(number[3])], v))
        break
    }
  }

  const ddCalcu = arr_key.join('')
  const p = `${e}&ddCalcu=${ddCalcu}`

  const playResponse = await fetch(p, { method: 'HEAD' })
  const playUrl = playResponse.headers.get('location')

  if (!playUrl) {
    throw new Error('Failed to get play URL')
  }

  return playUrl
}
