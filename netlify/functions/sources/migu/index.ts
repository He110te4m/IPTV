import type { Source } from '../types'
import { generateMiguUrls } from './generator'

export default {
  async get() {
    return generateMiguUrls()
  },
} satisfies Source
