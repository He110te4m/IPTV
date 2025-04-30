import type { Source } from '../types'
import { generateHenanUrl } from './generator'

export default {
  async get() {
    return generateHenanUrl()
  },
} satisfies Source
