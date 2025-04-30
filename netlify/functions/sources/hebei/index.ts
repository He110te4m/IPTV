import type { Source } from '../types'
import { generateHebeiPlaylist } from './generator'

export default {
  async get() {
    return generateHebeiPlaylist()
  },
} satisfies Source
