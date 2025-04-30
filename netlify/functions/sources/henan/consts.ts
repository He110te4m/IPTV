export interface Channel {
  name: string
  pathname: string
  cutvName: string
}

interface ChannelMap {
  [key: string]: Channel
}

export const channelMap: ChannelMap = {
  // 河南
  hnws: { name: '河南卫视', pathname: 'hnws', cutvName: 'henan' },
  hnds: { name: '河南都市', pathname: 'hnds', cutvName: 'henan' },
  hnms: { name: '河南民生', pathname: 'hnms', cutvName: 'henan' },
  hmfz: { name: '河南法治', pathname: 'hmfz', cutvName: 'henan' },
  hndsj: { name: '河南电视剧', pathname: 'hndsj', cutvName: 'henan' },
  hnxw: { name: '河南新闻', pathname: 'hnxw', cutvName: 'henan' },
  htgw: { name: '欢腾购物', pathname: 'htgw', cutvName: 'henan' },
  hngg: { name: '河南公共', pathname: 'hngg', cutvName: 'henan' },
  hnxc: { name: '河南乡村', pathname: 'hnxc', cutvName: 'henan' },
  hngj: { name: '河南国际', pathname: 'hngj', cutvName: 'henan' },
  hnly: { name: '河南梨园', pathname: 'hnly', cutvName: 'henan' },
  wwbk: { name: '文物宝库', pathname: 'wwbk', cutvName: 'henan' },
  wspd: { name: '武术世界', pathname: 'wspd', cutvName: 'henan' },
  jczy: { name: '睛彩中原', pathname: 'jczy', cutvName: 'henan' },
  ydxj: { name: '移动戏曲', pathname: 'ydxj', cutvName: 'henan' },
  xsj: { name: '象视界', pathname: 'xsj', cutvName: 'henan' },
  gxpd: { name: '国学频道', pathname: 'gxpd', cutvName: 'henan' },
}

export const API_URL = 'https://pubmod.hntv.tv/program/getAuth/live/class/xiaobeibi/11'
export const API_SECRET = '6ca114a836ac7d73'
