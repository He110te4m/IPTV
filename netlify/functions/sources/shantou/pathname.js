/* eslint-disable */

export function pathname(o, e) {
  var a, r = 0, d = -1, l = 0;
  for (a = 0; a < e.length; a++) {
    var p = e.charCodeAt(a);
    r += p;
    if (-1 != d) {
      l += d - p;
    }
    d = p;
  }

  var s = (r += l).toString(36);
  var c = o.toString(36);
  var u = 0;

  for (var a2 = 0; a2 < c.length; a2++) {
    u += c.charCodeAt(a2);
  }

  c = c.substr(5) + c.substr(0, 5);
  var h, v, f = Math.abs(u - r);
  c = s.split("").reverse().join("") + c;
  var g = c.substr(0, 4);
  var w = c.substr(4);
  var m = [];
  var b = new Date(o).getDay() % 2;

  for (var a3 = 0; a3 < e.length; a3++) {
    if (a3 % 2 == b) {
      m.push(c.charAt(a3 % c.length));
    } else {
      h = e.charAt(a3 - 1);
      if (h) {
        v = g.indexOf(h);
        if (-1 == v) {
          m.push(h);
        } else {
          m.push(w.charAt(v));
        }
      } else {
        m.push(g.charAt(a3));
      }
    }
  }

  return ((f.toString(36).split("").reverse().join("")) + m.join("")).substr(0, e.length);
}
