import { getToday } from '../date'

export function generatePathname(hash: string): string {
  return pathname(hash)
}
function pathname(e) {
  for (var o = getToday(), a = 0, r = 0, d = -1, l = 0; a < e.length; a++) {
    var p = e.charCodeAt(a);
    r += p,
      -1 != d && (l += d - p),
      d = p
  }
  var s = (r += l).toString(36), c = o.toString(36), u = 0;
  for (a = 0; a < c.length; a++)
    u += c.charCodeAt(a);
  c = c.substr(5) + c.substr(0, 5);
  var h, v, f = Math.abs(u - r), g = (c = s.split("").reverse().join("") + c).substr(0, 4), w = c.substr(4), m = new Array, b = new Date(o).getDay() % 2;
  for (a = 0; a < e.length; a++) {
    a % 2 == b ? m.push(c.charAt(a % c.length)) : (h = e.charAt(a - 1)) ? -1 == (v = g.indexOf(h)) ? m.push(h) : m.push(w.charAt(v)) : m.push(g.charAt(a))
  }
  return ((f.toString(36).split("").reverse().join("")) + m.join("")).substr(0, e.length);
};
