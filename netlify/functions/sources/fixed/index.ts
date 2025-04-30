import type { Source } from '../types'
import { channels } from './consts'

export default {
  async get() {
    return channels
  },
} satisfies Source
