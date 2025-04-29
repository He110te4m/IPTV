import md5 from 'md5'
import { getNow } from '../../utils/parse'
import { generatePathname } from './pathname'

export function generateShantouPlaylist(date: Date, id: string) {
  const livekey = generatePathname(date, id)
  const t = (Math.round(getNow().getTime() / 1000) + 7200).toString(16)
  const sign = md5(`bf9b2cab35a9c38857b82aabf99874aa96b9ffbb/${id}/500/${livekey}.m3u8${t}`)

  return `https://sttv-hls.strtv.cn/${id}/500/${livekey}.m3u8?sign=${sign}&t=${t}`
}

// function pathname(today: Date, e: string): string {
//   const o = today.valueOf()
//   globalThis.console.log(`o: ${o}`)
//   let r = 0
//   let d = -1
//   let l = 0
//   for (let a = 0; a < e.length; a++) {
//     const p = e.charCodeAt(a)
//     r += p
//     if (d !== -1) {
//       l += d - p
//     }
//     d = p
//   }
//   const s = (r += l).toString(36)
//   let c = o.toString(36)
//   let u = 0
//   for (let a = 0; a < c.length; a++) {
//     u += c.charCodeAt(a)
//   }
//   c = c.substr(5) + c.substr(0, 5)
//   let h
//   let v
//   const f = Math.abs(u - r)
//   c = s.split('').reverse().join('') + c

//   const g = c.substr(0, 4)
//   const w = c.substr(4)
//   const m = []
//   const b = today.getDay() % 2

//   for (let a = 0; a < e.length; a++) {
//     if (a % 2 === b) {
//       m.push(c.charAt(a % c.length))
//     } else {
//       h = e.charAt(a - 1)
//       if (h) {
//         v = g.indexOf(h)
//         if (v === -1) {
//           m.push(h)
//         } else {
//           m.push(w.charAt(v))
//         }
//       } else {
//         m.push(g.charAt(a))
//       }
//     }
//   }

//   return ((f.toString(36).split('').reverse().join('')) + m.join('')).substr(0, e.length)
// }
