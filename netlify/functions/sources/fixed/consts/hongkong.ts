import { parseM3U } from '@iptv/playlist'

const channels = parseM3U(`
#EXTM3U
#EXTINF:-1,tvg-id="香港卫视" tvg-name="香港卫视" tvg-logo="https://epg.112114.xyz/logo/香港卫视.png" group-title="卫视",香港卫视
http://zhibo.hkstv.tv/livestream/mutfysrq/playlist.m3u8
`).channels

export default channels
