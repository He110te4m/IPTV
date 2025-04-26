interface Channel {
  name: string
  pathname: string
  cutvName: string
}

interface ChannelMap {
  [key: string]: Channel
}

export const channelMap: ChannelMap = {
  // 潮州
  czggpd: { name: '潮州民生频道', pathname: 'czggpd', cutvName: 'czbtv' },
  czzhpd: { name: '潮州综合频道', pathname: 'czzhpd', cutvName: 'czbtv' },
}
