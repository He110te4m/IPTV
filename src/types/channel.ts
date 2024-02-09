import type { parseM3U } from '@iptv/playlist'

export type Channel = ReturnType<typeof parseM3U>['channels'][number]
