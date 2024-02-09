import { getToday } from '../date'

export function generatePathname(hash: string): string {
  return pathname(hash)
}

function pathname(e: string): string {
  const o = getToday()
  let r = 0
  let d = -1
  let l = 0
  for (let a = 0; a < e.length; a++) {
    const p = e.charCodeAt(a)
    r += p
    d !== -1 && (l += d - p)
    d = p
  }
  const s = (r += l).toString(36)
  let c = o.toString(36)
  let u = 0
  for (let a = 0; a < c.length; a++) {
    u += c.charCodeAt(a)
  }
  c = c.substr(5) + c.substr(0, 5)
  let h
  let v
  const f = Math.abs(u - r)
  const g = (c = s.split('').reverse().join('') + c).substr(0, 4)
  const w = c.substr(4)
  const m = []
  const b = new Date(o).getDay() % 2
  console.log(JSON.stringify({ c, b }, null, 2))
  for (let a = 0; a < e.length; a++) {
    if (a % 2 === b) {
      m.push(c.charAt(a % c.length))
    } else {
      h = e.charAt(a - 1)
      if (h) {
        v = g.indexOf(h)
        if (v === -1) {
          m.push(h)
        } else {
          m.push(w.charAt(v))
        }
      } else {
        m.push(g.charAt(a))
      }
    }
  }

  console.log(JSON.stringify({
    f,
    m,
    e,
  }, null, 2))
  return ((f.toString(36).split('').reverse().join('')) + m.join('')).substr(0, e.length)
}
