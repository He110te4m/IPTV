export interface Channel {
  name: string
  pathname: string
  cutvName: string
}

interface ChannelMap {
  [key: string]: Channel
}

export const channelMap: ChannelMap = {
  // 深圳
  szws: { name: '深圳卫视', pathname: 'AxeFRth', cutvName: 'sztv' },
  szse: { name: '深圳少儿', pathname: '1SIQj6s', cutvName: 'sztv' },
  szcj: { name: '深圳财经', pathname: '3vlcoxP', cutvName: 'sztv' },
  szdsj: { name: '深圳电视剧', pathname: '4azbkoY', cutvName: 'sztv' },
  yhgw: { name: '宜和购物', pathname: 'BJ5u5k2', cutvName: 'sztv' },
  szds: { name: '深圳都市', pathname: 'ZwxzUXr', cutvName: 'sztv' },
  szgj: { name: '深圳国际', pathname: 'sztvgjpd', cutvName: 'sztv' },
  szyd: { name: '深圳移动', pathname: 'wDF6KJ3', cutvName: 'sztv' },
}
