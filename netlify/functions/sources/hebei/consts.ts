export interface Channel {
  name: string
  pathname: string
  cutvName: string
}

interface ChannelMap {
  [key: string]: Channel
}

export const channelMap: ChannelMap = {
  // 河北
  hbws: { name: '河北卫视', pathname: 'hbws', cutvName: 'hebei' },
  jjsh: { name: '经济生活', pathname: 'jjsh', cutvName: 'hebei' },
  nmpd: { name: '农民频道', pathname: 'nmpd', cutvName: 'hebei' },
  hbds: { name: '河北都市', pathname: 'hbds', cutvName: 'hebei' },
  hbys: { name: '河北影视剧', pathname: 'hbys', cutvName: 'hebei' },
  sekj: { name: '少儿科教', pathname: 'sekj', cutvName: 'hebei' },
  hbgg: { name: '河北公共', pathname: 'hbgg', cutvName: 'hebei' },
  sjgw: { name: '三佳购物', pathname: 'sjgw', cutvName: 'hebei' },
}
