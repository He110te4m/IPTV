import { resolve } from 'node:path'
import { existsSync } from 'node:fs'
import express, { Router } from 'express'
import serverless from 'serverless-http'
import { getToday } from '../../src/date'

const api = express()

const router = Router()
router.get('/hello', (req, res) => {
  let file = resolve(`./dist/${getToday()}.m3u8`)
  if (!existsSync(file)) {
    file = resolve('./dist/iptv.m3u8')
  }

  res.sendFile(file)
})

api.use('/api/', router)

export const handler = serverless(api)
