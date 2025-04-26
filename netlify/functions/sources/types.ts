import type { parseM3U } from '@iptv/playlist'

export type Channel = ReturnType<typeof parseM3U>['channels'][number]

type MaybePromise<T> = T | Promise<T>

export interface Source {
  get(date: Date): MaybePromise<Channel[]>
}
