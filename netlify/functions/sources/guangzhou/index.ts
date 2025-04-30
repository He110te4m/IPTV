import type { Source } from '../types'
import { generateGuangzhouPlaylist } from './generator'

export default {
  async get() {
    return generateGuangzhouPlaylist()
  },
} satisfies Source
