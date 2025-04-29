import express, { Router } from 'express'
import serverless from 'serverless-http'
import { getIPTVSources } from './sources'

const isDev = process.env.DEV === 'true'

const api = express()

const router = Router()
router.get('/iptv', async (req, res) => {
  const content = await getIPTVSources()
  if (isDev || req.query.preview) {
    res.send(createPreviewContent(content))
    return
  }

  res.set('Content-Disposition', '"iptv.m3u8"')
  res.set('Content-Type', 'application/x-mpegURL; charset=utf-8')
  res.set('Cache-Control', 'no-cache')
  /* eslint-disable-next-line n/prefer-global/buffer */
  res.end(Buffer.from(content))
})

api.use('/api/', router)

export const handler = serverless(api)

function createPreviewContent(content: string) {
  return `
<pre>
${content}
</pre>
`.trim()
}
