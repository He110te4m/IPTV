export interface Channel {
  name: string
  pathname: string
  cutvName: string
}

interface ChannelMap {
  [key: string]: Channel
}

export const channelMap: ChannelMap = {
  // 汕头
  stxwzh: { name: '汕头新闻综合', pathname: 'lKGXIQa', cutvName: 'sttv' },
  // stjjsh: { name: '汕头经济生活', pathname: '7xjJK9d', cutvName: 'sttv' },
  // styswy: { name: '汕头影视文艺', pathname: 'G7Kql7a', cutvName: 'sttv' },
  // stdt: { name: '汕头动态', pathname: 'L3y6rt8', cutvName: 'sttv' },
}
