export type ChannelId = string

export interface VideoStream {
  url: string
  [key: string]: any
}

export interface ChannelInfo {
  update_id: number
  image: string
  hotline: string
  FM: string
  streams: string[]
  isprograms: number
  description: string
  interact: string
  video_streams: string[]
  article_id: string
  compere_str: string
  name: string
  logo: string
  time: string
  live: string
  cid: number
}

export interface ApiResponse {
  timestamp: number
  sign: string
  [key: string]: any
}

export interface HandlerResponse {
  statusCode: number
  headers: {
    [key: string]: string
  }
  body: string
}
