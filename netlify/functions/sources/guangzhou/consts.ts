export interface Channel {
  name: string
  pathname: string
  cutvName: string
}

interface ChannelMap {
  [key: string]: Channel
}

export const channelMap: ChannelMap = {
  // 广州
  gzzh: { name: '广州综合', pathname: '31', cutvName: 'gzbn' },
  gzxw: { name: '广州新闻', pathname: '32', cutvName: 'gzbn' },
  gzjs: { name: '广州竞赛', pathname: '35', cutvName: 'gzbn' },
  gzyy: { name: '广州影视', pathname: '36', cutvName: 'gzbn' },
  gzfz: { name: '广州法治', pathname: '34', cutvName: 'gzbn' },
  gzngds: { name: '广州南国都市', pathname: '33', cutvName: 'gzbn' },
}
