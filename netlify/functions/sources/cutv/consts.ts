export interface Channel {
  name: string
  pathname: string
  cutvName: string
}

interface ChannelMap {
  [key: string]: Channel
}

export const channelMap: ChannelMap = {
  // 太原
  tyxwzh: { name: '太原新闻综合', pathname: '49VAfrw', cutvName: 'tytv' },
  tyjjsh: { name: '太原经济生活', pathname: 'u8BmT6h', cutvName: 'tytv' },
  tysjfz: { name: '太原社教法制', pathname: 'phsry3e', cutvName: 'tytv' },
  tyys: { name: '太原影视', pathname: 'J4EX72D', cutvName: 'tytv' },
  tywt: { name: '太原文体', pathname: 'rk8Z088', cutvName: 'tytv' },
  tyblg: { name: '太原佰乐购', pathname: 'iancgyD', cutvName: 'tytv' },

  // 阳泉
  yqzh: { name: '阳泉综合', pathname: 'TxShwDD', cutvName: 'yqtv' },
  yqkj: { name: '阳泉科教', pathname: 'oWhK645', cutvName: 'yqtv' },

  // 贵阳
  gyxwzh: { name: '贵阳新闻综合', pathname: 'f5QDCfV', cutvName: 'gytv' },
  gyjjsh: { name: '贵阳经济生活', pathname: 'ud4Og9z', cutvName: 'gytv' },
  gyfz: { name: '贵阳法治', pathname: 'o0KnE21', cutvName: 'gytv' },
  gyds: { name: '贵阳都市', pathname: 't6twAhp', cutvName: 'gytv' },

  // 南昌
  ncxwzh: { name: '南昌新闻综合', pathname: 'EF2cTu3', cutvName: 'nctv' },
  ncds: { name: '南昌都市', pathname: 'qcX8E7B', cutvName: 'nctv' },
  nczf: { name: '南昌资讯', pathname: 'cV2gp2d', cutvName: 'nctv' },
  ncdtds: { name: '南昌公共', pathname: 'n27bmcx', cutvName: 'nctv' },

  // // 汕头
  // stxwzh: { name: '汕头新闻综合', pathname: 'lKGXIQa', cutvName: 'sttv' },
  // stjjsh: { name: '汕头经济生活', pathname: '7xjJK9d', cutvName: 'sttv' },
  // styswy: { name: '汕头影视文艺', pathname: 'G7Kql7a', cutvName: 'sttv' },
  // stdt: { name: '汕头动态', pathname: 'L3y6rt8', cutvName: 'sttv' },

  // 珠海
  zhxw: { name: '珠海新闻', pathname: 'zZGtroL', cutvName: 'zhtv' },
  zhsh: { name: '珠海生活', pathname: 'HtyU8ou', cutvName: 'zhtv' },

  // 台州
  tzxwzh: { name: '台州新闻综合', pathname: 'n5YzUtt', cutvName: 'tztv' },
  tzyswh: { name: '台州文化生活', pathname: 'Hcj0hKp', cutvName: 'tztv' },
  tzggcf: { name: '台州城市生活', pathname: '25qamuz', cutvName: 'tztv' },
}
