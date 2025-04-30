export interface Channel {
  name: string
  pathname: string
  cutvName: string
}

interface ChannelMap {
  [key: string]: Channel
}
// 608807420
// 631780532
// 631780421
// 624878271
// 608807419
// 608807416
// 673168121
// 624878396
// 624878356
// 673168140
// 624878405
// 608807423
// 667987558
// 624878440
// 673168185
// 673168256
// 673168223
// 884121956
// 624878970
// 708869532
// 609006476
// 609006487
// 609017205
// 609006450
// 609006446
// 609154345
// 651632648
// 738910838
// 783847495
// 790187291
// 623899368
// 608917627
export const channelMap: ChannelMap = {
  cctv1: { name: 'CCTV1综合', pathname: '608807420', cutvName: 'cctv' },
  cctv2: { name: 'CCTV2财经', pathname: '631780532', cutvName: 'cctv' },
  cctv3: { name: 'CCTV3综艺', pathname: '624878271', cutvName: 'cctv' },
  cctv4: { name: 'CCTV4中文国际', pathname: '631780421', cutvName: 'cctv' },
  cctv4a: { name: 'CCTV4美洲', pathname: '608807416', cutvName: 'cctv' },
  cctv4o: { name: 'CCTV4欧洲', pathname: '608807419', cutvName: 'cctv' },
  cctv6: { name: 'CCTV6电影', pathname: '624878396', cutvName: 'cctv' },
  cctv7: { name: 'CCTV7国防军事', pathname: '673168121', cutvName: 'cctv' },
  cctv8: { name: 'CCTV8电视剧', pathname: '624878356', cutvName: 'cctv' },
  cctv10: { name: 'CCTV10科教', pathname: '624878405', cutvName: 'cctv' },
  cctv11: { name: 'CCTV11戏曲', pathname: '667987558', cutvName: 'cctv' },
  cctv12: { name: 'CCTV12社会与法', pathname: '673168185', cutvName: 'cctv' },
  cctv14: { name: 'CCTV14少儿', pathname: '624878440', cutvName: 'cctv' },
  cctv15: { name: 'CCTV15音乐', pathname: '673168223', cutvName: 'cctv' },
  cctv17: { name: 'CCTV17农业农村', pathname: '673168256', cutvName: 'cctv' },
  fxzl: { name: 'CCTV发现之旅', pathname: '624878970', cutvName: 'cctv' },
  lgs: { name: 'CCTV老故事', pathname: '884121956', cutvName: 'cctv' },
  zxs: { name: 'CCTV中学生', pathname: '708869532', cutvName: 'cctv' },
  cgtn: { name: 'CGTN', pathname: '609017205', cutvName: 'cctv' },
  cgtnjl: { name: 'CGTN纪录', pathname: '609006487', cutvName: 'cctv' },
  cgtne: { name: 'CCTV西班牙语', pathname: '609006450', cutvName: 'cctv' },
  cgtnf: { name: 'CCTV法语', pathname: '609006476', cutvName: 'cctv' },
  cgtna: { name: 'CCTV阿拉伯语', pathname: '609154345', cutvName: 'cctv' },
  cgtnr: { name: 'CCTV俄语', pathname: '609006446', cutvName: 'cctv' },
  dfws: { name: '东方卫视', pathname: '651632648', cutvName: 'dfws' },
  sxws: { name: '陕西卫视', pathname: '738910838', cutvName: 'sxws' },
  hnws: { name: '河南卫视', pathname: '790187291', cutvName: 'hnws' },
  jxws: { name: '江西卫视', pathname: '783847495', cutvName: 'jxws' },
  jsws: { name: '江苏卫视', pathname: '623899368', cutvName: 'jsws' },
  dwqws: { name: '大湾区卫视', pathname: '608917627', cutvName: 'dwqws' },
}
