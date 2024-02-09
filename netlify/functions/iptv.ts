import express, { Router } from 'express'
import serverless from 'serverless-http'
import { writeM3U } from '@iptv/playlist'
import { calcCUTV } from './cutv'
import { mergeChannels } from './merge'
import { generatePlayList } from './playlist'
import type { Channel } from './types/channel'

const api = express()

const router = Router()
router.get('/iptv', async (req, res) => {
  const content = await getCurrentIPTVList()
  res.set('Content-Disposition', '"iptv.m3u8"')
  res.set('Content-Type', 'application/x-mpegURL; charset=utf-8')
  res.set('Cache-Control', 'no-cache')
  // eslint-disable-next-line n/prefer-global/buffer
  res.end(Buffer.from(content))
})

api.use('/api/', router)

export const handler = serverless(api)

async function getCurrentIPTVList() {
  const cutvChannels = calcCUTV()
  const handlePlayList = async (channels: Channel[]) => mergeChannels(channels, cutvChannels)
  const playList = await handlePlayList(await generatePlayList())
  return writeM3U({
    channels: playList,
  })
}
