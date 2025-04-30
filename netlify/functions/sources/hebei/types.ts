interface Format {
  streamSource: number
  liveStream: string
  title: string
  fileTypeId: string
  url: string
  liveSourceType: string
}

interface LiveVideo {
  formats: Format[]
  type: string
  poster: string
  liveSourceType: string
}

interface PraiseInfo {
  flag: string
  id: string
}

interface CustomStyle {
  imgPath: string[]
  type: string
}

interface Movie {
  shareThumbnail?: string
  wordNumber: number
  shareTitle?: string
  AppCustomParams: string
  liveKey: string
  shareUrl?: string
  liveUri: string
  liveID: string
  shareSummary?: string
  favorTag?: string
}

interface AppCustomParams {
  customStyle: CustomStyle
  movie: Movie
}

interface SubscripInfo {
  flag: string
  id: string
}

interface NewsItem {
  resuourceId: number
  prop4: string
  keyword: string
  originalPublishDate: string
  workFlowStatus: string
  poster: string
  referTarget: string
  specialArticleList: any[]
  specialRecommendArticleList: any[]
  publishCatalogs: string
  shareCount: number
  advertisementFlag: number
  articleId: number
  status: number
  barrageFlag: string
  praiseCount: number
  refername: string
  classifyId: any[]
  label: any[]
  liveVideo: LiveVideo[]
  video: any[]
  videoCount: number
  audioCount: number
  liveVideoCount: number
  addUser: string
  liveActivityFlag: string
  praiseInfo: PraiseInfo
  id: number
  authorId: number
  author: string
  type: number
  secondType: number
  title: string
  referType: number
  logo: string
  specialLogo: string
  description: string
  summary: string
  commentFlag: string
  url: string
  h5Url: string
  linkType: string
  vrType: string
  vrUrl: any[]
  isVideo: number
  catalogId: string
  catalogInnerCode: string
  ireporter: string
  liveUrl: string
  liveAudio: any[]
  duration: number
  hitCount: number
  liveActivityCount: number
  commentCount: number
  isOpenVirtualHitCount: string
  virtualHitCount: number
  subTitle: string
  shortTitle: string
  favorCount: string
  catalogname: string
  catalogurl: string
  adDownload: string
  videoId: string
  publishDate: string
  workFlowId: string
  addTime: string
  modifyTime: string
  redirectUrl: string
  followCount: number
  introduction: string
  auditId: string
  workflowUser: string
  favorTag: string
  appCustomParams: AppCustomParams
  appCustomParams1: AppCustomParams
  image: any[]
  subscripInfo: SubscripInfo
  textFlag: string
}

interface ReturnData {
  pages: string
  page: string
  total: string
  pageSize: string
  banner: any[]
  news: NewsItem[]
}

interface ApiResponse {
  returnCode: string
  returnDesc: string
  returnData: ReturnData
}

export type { ApiResponse, NewsItem }
