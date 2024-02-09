import { resolve } from 'node:path'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import express, { Router } from 'express'
import serverless from 'serverless-http'
import { getToday } from '../../src/date'

const api = express()

const router = Router()
router.get('/hello', async (req, res) => {
  let file = resolve(`./dist/${getToday()}.m3u8`)
  if (!existsSync(file)) {
    file = resolve('./dist/iptv.m3u8')
  }

  const buff = await readFile(file)
  res.set('Content-Disposition', 'iptv.m3u8')
  res.end(buff)
})

api.use('/api/', router)

export const handler = serverless(api)
