export interface Channel {
  id: string
  name: string
  contId: string
}

export interface PlayUrlResponse {
  body: {
    urlInfo: {
      url: string
    }
  }
}

export interface ChannelList {
  [key: string]: Channel
}
