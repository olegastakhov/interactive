(function (e, t) {
 "object" === typeof exports && "object" === typeof module
  ? (module.exports = t())
  : "function" === typeof define && define.amd
  ? define("webgl-fluid", [], t)
  : "object" === typeof exports
  ? (exports["webgl-fluid"] = t())
  : (e["webgl-fluid"] = t());
})("undefined" !== typeof self ? self : this, function () {
 return (function (e) {
  var t = {};

  function n(r) {
   if (t[r]) return t[r].exports;
   var i = (t[r] = {
    i: r,
    l: !1,
    exports: {},
   });
   return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  return (
   (n.m = e),
   (n.c = t),
   (n.d = function (e, t, r) {
    n.o(e, t) ||
     Object.defineProperty(e, t, {
      enumerable: !0,
      get: r,
     });
   }),
   (n.r = function (e) {
    "undefined" !== typeof Symbol &&
     Symbol.toStringTag &&
     Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module",
     }),
     Object.defineProperty(e, "__esModule", {
      value: !0,
     });
   }),
   (n.t = function (e, t) {
    if ((1 & t && (e = n(e)), 8 & t)) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (
     (n.r(r),
     Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e,
     }),
     2 & t && "string" != typeof e)
    )
     for (var i in e)
      n.d(
       r,
       i,
       function (t) {
        return e[t];
       }.bind(null, i)
      );
    return r;
   }),
   (n.n = function (e) {
    var t =
     e && e.__esModule
      ? function () {
         return e["default"];
        }
      : function () {
         return e;
        };
    return n.d(t, "a", t), t;
   }),
   (n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
   }),
   (n.p = ""),
   n((n.s = "fb15"))
  );
 })({
  "00ee": function (e, t, n) {
   var r = n("b622"),
    i = r("toStringTag"),
    o = {};
   (o[i] = "z"), (e.exports = "[object z]" === String(o));
  },
  "0366": function (e, t, n) {
   var r = n("1c0b");
   e.exports = function (e, t, n) {
    if ((r(e), void 0 === t)) return e;
    switch (n) {
     case 0:
      return function () {
       return e.call(t);
      };
     case 1:
      return function (n) {
       return e.call(t, n);
      };
     case 2:
      return function (n, r) {
       return e.call(t, n, r);
      };
     case 3:
      return function (n, r, i) {
       return e.call(t, n, r, i);
      };
    }
    return function () {
     return e.apply(t, arguments);
    };
   };
  },
  "057f": function (e, t, n) {
   var r = n("fc6a"),
    i = n("241c").f,
    o = {}.toString,
    a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    u = function (e) {
     try {
      return i(e);
     } catch (t) {
      return a.slice();
     }
    };
   e.exports.f = function (e) {
    return a && "[object Window]" == o.call(e) ? u(e) : i(r(e));
   };
  },
  "06cf": function (e, t, n) {
   var r = n("83ab"),
    i = n("d1e7"),
    o = n("5c6c"),
    a = n("fc6a"),
    u = n("c04e"),
    c = n("5135"),
    s = n("0cfb"),
    l = Object.getOwnPropertyDescriptor;
   t.f = r
    ? l
    : function (e, t) {
       if (((e = a(e)), (t = u(t, !0)), s))
        try {
         return l(e, t);
        } catch (n) {}
       if (c(e, t)) return o(!i.f.call(e, t), e[t]);
      };
  },
  "0b25": function (e, t, n) {
   var r = n("a691"),
    i = n("50c4");
   e.exports = function (e) {
    if (void 0 === e) return 0;
    var t = r(e),
     n = i(t);
    if (t !== n) throw RangeError("Wrong length or index");
    return n;
   };
  },
  "0cfb": function (e, t, n) {
   var r = n("83ab"),
    i = n("d039"),
    o = n("cc12");
   e.exports =
    !r &&
    !i(function () {
     return (
      7 !=
      Object.defineProperty(o("div"), "a", {
       get: function () {
        return 7;
       },
      }).a
     );
    });
  },
  "0d3b": function (e, t, n) {
   var r = n("d039"),
    i = n("b622"),
    o = n("c430"),
    a = i("iterator");
   e.exports = !r(function () {
    var e = new URL("b?a=1&b=2&c=3", "http://a"),
     t = e.searchParams,
     n = "";
    return (
     (e.pathname = "c%20d"),
     t.forEach(function (e, r) {
      t["delete"]("b"), (n += r + e);
     }),
     (o && !e.toJSON) ||
      !t.sort ||
      "http://a/c%20d?a=1&c=3" !== e.href ||
      "3" !== t.get("c") ||
      "a=1" !== String(new URLSearchParams("?a=1")) ||
      !t[a] ||
      "a" !== new URL("https://a@b").username ||
      "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
      "xn--e1aybc" !== new URL("http://тест").host ||
      "#%D0%B1" !== new URL("http://a#б").hash ||
      "a1c3" !== n ||
      "x" !== new URL("http://x", void 0).host
    );
   });
  },
  1148: function (e, t, n) {
   "use strict";
   var r = n("a691"),
    i = n("1d80");
   e.exports =
    "".repeat ||
    function (e) {
     var t = String(i(this)),
      n = "",
      o = r(e);
     if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");
     for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (n += t);
     return n;
    };
  },
  1276: function (e, t, n) {
   "use strict";
   var r = n("d784"),
    i = n("44e7"),
    o = n("825a"),
    a = n("1d80"),
    u = n("4840"),
    c = n("8aa5"),
    s = n("50c4"),
    l = n("14c3"),
    f = n("9263"),
    d = n("d039"),
    h = [].push,
    p = Math.min,
    v = 4294967295,
    g = !d(function () {
     return !RegExp(v, "y");
    });
   r(
    "split",
    2,
    function (e, t, n) {
     var r;
     return (
      (r =
       "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length
        ? function (e, n) {
           var r = String(a(this)),
            o = void 0 === n ? v : n >>> 0;
           if (0 === o) return [];
           if (void 0 === e) return [r];
           if (!i(e)) return t.call(r, e, o);
           var u,
            c,
            s,
            l = [],
            d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
            p = 0,
            g = new RegExp(e.source, d + "g");
           while ((u = f.call(g, r))) {
            if (((c = g.lastIndex), c > p && (l.push(r.slice(p, u.index)), u.length > 1 && u.index < r.length && h.apply(l, u.slice(1)), (s = u[0].length), (p = c), l.length >= o))) break;
            g.lastIndex === u.index && g.lastIndex++;
           }
           return p === r.length ? (!s && g.test("")) || l.push("") : l.push(r.slice(p)), l.length > o ? l.slice(0, o) : l;
          }
        : "0".split(void 0, 0).length
        ? function (e, n) {
           return void 0 === e && 0 === n ? [] : t.call(this, e, n);
          }
        : t),
      [
       function (t, n) {
        var i = a(this),
         o = void 0 == t ? void 0 : t[e];
        return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n);
       },
       function (e, i) {
        var a = n(r, e, this, i, r !== t);
        if (a.done) return a.value;
        var f = o(e),
         d = String(this),
         h = u(f, RegExp),
         m = f.unicode,
         b = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (g ? "y" : "g"),
         _ = new h(g ? f : "^(?:" + f.source + ")", b),
         y = void 0 === i ? v : i >>> 0;
        if (0 === y) return [];
        if (0 === d.length) return null === l(_, d) ? [d] : [];
        var x = 0,
         w = 0,
         E = [];
        while (w < d.length) {
         _.lastIndex = g ? w : 0;
         var S,
          A = l(_, g ? d : d.slice(w));
         if (null === A || (S = p(s(_.lastIndex + (g ? 0 : w)), d.length)) === x) w = c(d, w, m);
         else {
          if ((E.push(d.slice(x, w)), E.length === y)) return E;
          for (var T = 1; T <= A.length - 1; T++) if ((E.push(A[T]), E.length === y)) return E;
          w = x = S;
         }
        }
        return E.push(d.slice(x)), E;
       },
      ]
     );
    },
    !g
   );
  },
  "145e": function (e, t, n) {
   "use strict";
   var r = n("7b0b"),
    i = n("23cb"),
    o = n("50c4"),
    a = Math.min;
   e.exports =
    [].copyWithin ||
    function (e, t) {
     var n = r(this),
      u = o(n.length),
      c = i(e, u),
      s = i(t, u),
      l = arguments.length > 2 ? arguments[2] : void 0,
      f = a((void 0 === l ? u : i(l, u)) - s, u - c),
      d = 1;
     s < c && c < s + f && ((d = -1), (s += f - 1), (c += f - 1));
     while (f-- > 0) s in n ? (n[c] = n[s]) : delete n[c], (c += d), (s += d);
     return n;
    };
  },
  "14c3": function (e, t, n) {
   var r = n("c6b6"),
    i = n("9263");
   e.exports = function (e, t) {
    var n = e.exec;
    if ("function" === typeof n) {
     var o = n.call(e, t);
     if ("object" !== typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
     return o;
    }
    if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
    return i.call(e, t);
   };
  },
  "159b": function (e, t, n) {
   var r = n("da84"),
    i = n("fdbc"),
    o = n("17c2"),
    a = n("9112");
   for (var u in i) {
    var c = r[u],
     s = c && c.prototype;
    if (s && s.forEach !== o)
     try {
      a(s, "forEach", o);
     } catch (l) {
      s.forEach = o;
     }
   }
  },
  "170b": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("50c4"),
    o = n("23cb"),
    a = n("4840"),
    u = r.aTypedArray,
    c = r.exportTypedArrayMethod;
   c("subarray", function (e, t) {
    var n = u(this),
     r = n.length,
     c = o(e, r);
    return new (a(n, n.constructor))(n.buffer, n.byteOffset + c * n.BYTES_PER_ELEMENT, i((void 0 === t ? r : o(t, r)) - c));
   });
  },
  "17c2": function (e, t, n) {
   "use strict";
   var r = n("b727").forEach,
    i = n("a640"),
    o = n("ae40"),
    a = i("forEach"),
    u = o("forEach");
   e.exports =
    a && u
     ? [].forEach
     : function (e) {
        return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
       };
  },
  "182d": function (e, t, n) {
   var r = n("f8cd");
   e.exports = function (e, t) {
    var n = r(e);
    if (n % t) throw RangeError("Wrong offset");
    return n;
   };
  },
  "19aa": function (e, t) {
   e.exports = function (e, t, n) {
    if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
    return e;
   };
  },
  "1be4": function (e, t, n) {
   var r = n("d066");
   e.exports = r("document", "documentElement");
  },
  "1c0b": function (e, t) {
   e.exports = function (e) {
    if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
    return e;
   };
  },
  "1c7e": function (e, t, n) {
   var r = n("b622"),
    i = r("iterator"),
    o = !1;
   try {
    var a = 0,
     u = {
      next: function () {
       return {
        done: !!a++,
       };
      },
      return: function () {
       o = !0;
      },
     };
    (u[i] = function () {
     return this;
    }),
     Array.from(u, function () {
      throw 2;
     });
   } catch (c) {}
   e.exports = function (e, t) {
    if (!t && !o) return !1;
    var n = !1;
    try {
     var r = {};
     (r[i] = function () {
      return {
       next: function () {
        return {
         done: (n = !0),
        };
       },
      };
     }),
      e(r);
    } catch (c) {}
    return n;
   };
  },
  "1d80": function (e, t) {
   e.exports = function (e) {
    if (void 0 == e) throw TypeError("Can't call method on " + e);
    return e;
   };
  },
  "1dde": function (e, t, n) {
   var r = n("d039"),
    i = n("b622"),
    o = n("2d00"),
    a = i("species");
   e.exports = function (e) {
    return (
     o >= 51 ||
     !r(function () {
      var t = [],
       n = (t.constructor = {});
      return (
       (n[a] = function () {
        return {
         foo: 1,
        };
       }),
       1 !== t[e](Boolean).foo
      );
     })
    );
   };
  },
  "219c": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = r.aTypedArray,
    o = r.exportTypedArrayMethod,
    a = [].sort;
   o("sort", function (e) {
    return a.call(i(this), e);
   });
  },
  "23cb": function (e, t, n) {
   var r = n("a691"),
    i = Math.max,
    o = Math.min;
   e.exports = function (e, t) {
    var n = r(e);
    return n < 0 ? i(n + t, 0) : o(n, t);
   };
  },
  "23e7": function (e, t, n) {
   var r = n("da84"),
    i = n("06cf").f,
    o = n("9112"),
    a = n("6eeb"),
    u = n("ce4e"),
    c = n("e893"),
    s = n("94ca");
   e.exports = function (e, t) {
    var n,
     l,
     f,
     d,
     h,
     p,
     v = e.target,
     g = e.global,
     m = e.stat;
    if (((l = g ? r : m ? r[v] || u(v, {}) : (r[v] || {}).prototype), l))
     for (f in t) {
      if (((h = t[f]), e.noTargetGet ? ((p = i(l, f)), (d = p && p.value)) : (d = l[f]), (n = s(g ? f : v + (m ? "." : "#") + f, e.forced)), !n && void 0 !== d)) {
       if (typeof h === typeof d) continue;
       c(h, d);
      }
      (e.sham || (d && d.sham)) && o(h, "sham", !0), a(l, f, h, e);
     }
   };
  },
  "241c": function (e, t, n) {
   var r = n("ca84"),
    i = n("7839"),
    o = i.concat("length", "prototype");
   t.f =
    Object.getOwnPropertyNames ||
    function (e) {
     return r(e, o);
    };
  },
  "25a1": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("d58f").right,
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("reduceRight", function (e) {
    return i(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
   });
  },
  "25f0": function (e, t, n) {
   "use strict";
   var r = n("6eeb"),
    i = n("825a"),
    o = n("d039"),
    a = n("ad6d"),
    u = "toString",
    c = RegExp.prototype,
    s = c[u],
    l = o(function () {
     return (
      "/a/b" !=
      s.call({
       source: "a",
       flags: "b",
      })
     );
    }),
    f = s.name != u;
   (l || f) &&
    r(
     RegExp.prototype,
     u,
     function () {
      var e = i(this),
       t = String(e.source),
       n = e.flags,
       r = String(void 0 === n && e instanceof RegExp && !("flags" in c) ? a.call(e) : n);
      return "/" + t + "/" + r;
     },
     {
      unsafe: !0,
     }
    );
  },
  2626: function (e, t, n) {
   "use strict";
   var r = n("d066"),
    i = n("9bf2"),
    o = n("b622"),
    a = n("83ab"),
    u = o("species");
   e.exports = function (e) {
    var t = r(e),
     n = i.f;
    a &&
     t &&
     !t[u] &&
     n(t, u, {
      configurable: !0,
      get: function () {
       return this;
      },
     });
   };
  },
  2954: function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("4840"),
    o = n("d039"),
    a = r.aTypedArray,
    u = r.aTypedArrayConstructor,
    c = r.exportTypedArrayMethod,
    s = [].slice,
    l = o(function () {
     new Int8Array(1).slice();
    });
   c(
    "slice",
    function (e, t) {
     var n = s.call(a(this), e, t),
      r = i(this, this.constructor),
      o = 0,
      c = n.length,
      l = new (u(r))(c);
     while (c > o) l[o] = n[o++];
     return l;
    },
    l
   );
  },
  "2a62": function (e, t, n) {
   var r = n("825a");
   e.exports = function (e) {
    var t = e["return"];
    if (void 0 !== t) return r(t.call(e)).value;
   };
  },
  "2b3d": function (e, t, n) {
   "use strict";
   n("3ca3");
   var r,
    i = n("23e7"),
    o = n("83ab"),
    a = n("0d3b"),
    u = n("da84"),
    c = n("37e8"),
    s = n("6eeb"),
    l = n("19aa"),
    f = n("5135"),
    d = n("60da"),
    h = n("4df4"),
    p = n("6547").codeAt,
    v = n("5fb2"),
    g = n("d44e"),
    m = n("9861"),
    b = n("69f3"),
    _ = u.URL,
    y = m.URLSearchParams,
    x = m.getState,
    w = b.set,
    E = b.getterFor("URL"),
    S = Math.floor,
    A = Math.pow,
    T = "Invalid authority",
    R = "Invalid scheme",
    O = "Invalid host",
    C = "Invalid port",
    L = /[A-Za-z]/,
    D = /[\d+-.A-Za-z]/,
    k = /\d/,
    U = /^(0x|0X)/,
    P = /^[0-7]+$/,
    I = /^\d+$/,
    F = /^[\dA-Fa-f]+$/,
    N = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
    B = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
    M = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
    j = /[\u0009\u000A\u000D]/g,
    z = function (e, t) {
     var n, r, i;
     if ("[" == t.charAt(0)) {
      if ("]" != t.charAt(t.length - 1)) return O;
      if (((n = H(t.slice(1, -1))), !n)) return O;
      e.host = n;
     } else if (Q(e)) {
      if (((t = v(t)), N.test(t))) return O;
      if (((n = G(t)), null === n)) return O;
      e.host = n;
     } else {
      if (B.test(t)) return O;
      for (n = "", r = h(t), i = 0; i < r.length; i++) n += $(r[i], Y);
      e.host = n;
     }
    },
    G = function (e) {
     var t,
      n,
      r,
      i,
      o,
      a,
      u,
      c = e.split(".");
     if ((c.length && "" == c[c.length - 1] && c.pop(), (t = c.length), t > 4)) return e;
     for (n = [], r = 0; r < t; r++) {
      if (((i = c[r]), "" == i)) return e;
      if (((o = 10), i.length > 1 && "0" == i.charAt(0) && ((o = U.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))), "" === i)) a = 0;
      else {
       if (!(10 == o ? I : 8 == o ? P : F).test(i)) return e;
       a = parseInt(i, o);
      }
      n.push(a);
     }
     for (r = 0; r < t; r++)
      if (((a = n[r]), r == t - 1)) {
       if (a >= A(256, 5 - t)) return null;
      } else if (a > 255) return null;
     for (u = n.pop(), r = 0; r < n.length; r++) u += n[r] * A(256, 3 - r);
     return u;
    },
    H = function (e) {
     var t,
      n,
      r,
      i,
      o,
      a,
      u,
      c = [0, 0, 0, 0, 0, 0, 0, 0],
      s = 0,
      l = null,
      f = 0,
      d = function () {
       return e.charAt(f);
      };
     if (":" == d()) {
      if (":" != e.charAt(1)) return;
      (f += 2), s++, (l = s);
     }
     while (d()) {
      if (8 == s) return;
      if (":" != d()) {
       t = n = 0;
       while (n < 4 && F.test(d())) (t = 16 * t + parseInt(d(), 16)), f++, n++;
       if ("." == d()) {
        if (0 == n) return;
        if (((f -= n), s > 6)) return;
        r = 0;
        while (d()) {
         if (((i = null), r > 0)) {
          if (!("." == d() && r < 4)) return;
          f++;
         }
         if (!k.test(d())) return;
         while (k.test(d())) {
          if (((o = parseInt(d(), 10)), null === i)) i = o;
          else {
           if (0 == i) return;
           i = 10 * i + o;
          }
          if (i > 255) return;
          f++;
         }
         (c[s] = 256 * c[s] + i), r++, (2 != r && 4 != r) || s++;
        }
        if (4 != r) return;
        break;
       }
       if (":" == d()) {
        if ((f++, !d())) return;
       } else if (d()) return;
       c[s++] = t;
      } else {
       if (null !== l) return;
       f++, s++, (l = s);
      }
     }
     if (null !== l) {
      (a = s - l), (s = 7);
      while (0 != s && a > 0) (u = c[s]), (c[s--] = c[l + a - 1]), (c[l + --a] = u);
     } else if (8 != s) return;
     return c;
    },
    V = function (e) {
     for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && ((t = r), (n = i)), (r = null), (i = 0)) : (null === r && (r = o), ++i);
     return i > n && ((t = r), (n = i)), t;
    },
    X = function (e) {
     var t, n, r, i;
     if ("number" == typeof e) {
      for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), (e = S(e / 256));
      return t.join(".");
     }
     if ("object" == typeof e) {
      for (t = "", r = V(e), n = 0; n < 8; n++) (i && 0 === e[n]) || (i && (i = !1), r === n ? ((t += n ? ":" : "::"), (i = !0)) : ((t += e[n].toString(16)), n < 7 && (t += ":")));
      return "[" + t + "]";
     }
     return e;
    },
    Y = {},
    W = d({}, Y, {
     " ": 1,
     '"': 1,
     "<": 1,
     ">": 1,
     "`": 1,
    }),
    q = d({}, W, {
     "#": 1,
     "?": 1,
     "{": 1,
     "}": 1,
    }),
    K = d({}, q, {
     "/": 1,
     ":": 1,
     ";": 1,
     "=": 1,
     "@": 1,
     "[": 1,
     "\\": 1,
     "]": 1,
     "^": 1,
     "|": 1,
    }),
    $ = function (e, t) {
     var n = p(e, 0);
     return n > 32 && n < 127 && !f(t, e) ? e : encodeURIComponent(e);
    },
    J = {
     ftp: 21,
     file: null,
     http: 80,
     https: 443,
     ws: 80,
     wss: 443,
    },
    Q = function (e) {
     return f(J, e.scheme);
    },
    Z = function (e) {
     return "" != e.username || "" != e.password;
    },
    ee = function (e) {
     return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
    },
    te = function (e, t) {
     var n;
     return 2 == e.length && L.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || (!t && "|" == n));
    },
    ne = function (e) {
     var t;
     return e.length > 1 && te(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t);
    },
    re = function (e) {
     var t = e.path,
      n = t.length;
     !n || ("file" == e.scheme && 1 == n && te(t[0], !0)) || t.pop();
    },
    ie = function (e) {
     return "." === e || "%2e" === e.toLowerCase();
    },
    oe = function (e) {
     return (e = e.toLowerCase()), ".." === e || "%2e." === e || ".%2e" === e || "%2e%2e" === e;
    },
    ae = {},
    ue = {},
    ce = {},
    se = {},
    le = {},
    fe = {},
    de = {},
    he = {},
    pe = {},
    ve = {},
    ge = {},
    me = {},
    be = {},
    _e = {},
    ye = {},
    xe = {},
    we = {},
    Ee = {},
    Se = {},
    Ae = {},
    Te = {},
    Re = function (e, t, n, i) {
     var o,
      a,
      u,
      c,
      s = n || ae,
      l = 0,
      d = "",
      p = !1,
      v = !1,
      g = !1;
     n || ((e.scheme = ""), (e.username = ""), (e.password = ""), (e.host = null), (e.port = null), (e.path = []), (e.query = null), (e.fragment = null), (e.cannotBeABaseURL = !1), (t = t.replace(M, ""))),
      (t = t.replace(j, "")),
      (o = h(t));
     while (l <= o.length) {
      switch (((a = o[l]), s)) {
       case ae:
        if (!a || !L.test(a)) {
         if (n) return R;
         s = ce;
         continue;
        }
        (d += a.toLowerCase()), (s = ue);
        break;
       case ue:
        if (a && (D.test(a) || "+" == a || "-" == a || "." == a)) d += a.toLowerCase();
        else {
         if (":" != a) {
          if (n) return R;
          (d = ""), (s = ce), (l = 0);
          continue;
         }
         if (n && (Q(e) != f(J, d) || ("file" == d && (Z(e) || null !== e.port)) || ("file" == e.scheme && !e.host))) return;
         if (((e.scheme = d), n)) return void (Q(e) && J[e.scheme] == e.port && (e.port = null));
         (d = ""), "file" == e.scheme ? (s = _e) : Q(e) && i && i.scheme == e.scheme ? (s = se) : Q(e) ? (s = he) : "/" == o[l + 1] ? ((s = le), l++) : ((e.cannotBeABaseURL = !0), e.path.push(""), (s = Se));
        }
        break;
       case ce:
        if (!i || (i.cannotBeABaseURL && "#" != a)) return R;
        if (i.cannotBeABaseURL && "#" == a) {
         (e.scheme = i.scheme), (e.path = i.path.slice()), (e.query = i.query), (e.fragment = ""), (e.cannotBeABaseURL = !0), (s = Te);
         break;
        }
        s = "file" == i.scheme ? _e : fe;
        continue;
       case se:
        if ("/" != a || "/" != o[l + 1]) {
         s = fe;
         continue;
        }
        (s = pe), l++;
        break;
       case le:
        if ("/" == a) {
         s = ve;
         break;
        }
        s = Ee;
        continue;
       case fe:
        if (((e.scheme = i.scheme), a == r)) (e.username = i.username), (e.password = i.password), (e.host = i.host), (e.port = i.port), (e.path = i.path.slice()), (e.query = i.query);
        else if ("/" == a || ("\\" == a && Q(e))) s = de;
        else if ("?" == a) (e.username = i.username), (e.password = i.password), (e.host = i.host), (e.port = i.port), (e.path = i.path.slice()), (e.query = ""), (s = Ae);
        else {
         if ("#" != a) {
          (e.username = i.username), (e.password = i.password), (e.host = i.host), (e.port = i.port), (e.path = i.path.slice()), e.path.pop(), (s = Ee);
          continue;
         }
         (e.username = i.username), (e.password = i.password), (e.host = i.host), (e.port = i.port), (e.path = i.path.slice()), (e.query = i.query), (e.fragment = ""), (s = Te);
        }
        break;
       case de:
        if (!Q(e) || ("/" != a && "\\" != a)) {
         if ("/" != a) {
          (e.username = i.username), (e.password = i.password), (e.host = i.host), (e.port = i.port), (s = Ee);
          continue;
         }
         s = ve;
        } else s = pe;
        break;
       case he:
        if (((s = pe), "/" != a || "/" != d.charAt(l + 1))) continue;
        l++;
        break;
       case pe:
        if ("/" != a && "\\" != a) {
         s = ve;
         continue;
        }
        break;
       case ve:
        if ("@" == a) {
         p && (d = "%40" + d), (p = !0), (u = h(d));
         for (var m = 0; m < u.length; m++) {
          var b = u[m];
          if (":" != b || g) {
           var _ = $(b, K);
           g ? (e.password += _) : (e.username += _);
          } else g = !0;
         }
         d = "";
        } else if (a == r || "/" == a || "?" == a || "#" == a || ("\\" == a && Q(e))) {
         if (p && "" == d) return T;
         (l -= h(d).length + 1), (d = ""), (s = ge);
        } else d += a;
        break;
       case ge:
       case me:
        if (n && "file" == e.scheme) {
         s = xe;
         continue;
        }
        if (":" != a || v) {
         if (a == r || "/" == a || "?" == a || "#" == a || ("\\" == a && Q(e))) {
          if (Q(e) && "" == d) return O;
          if (n && "" == d && (Z(e) || null !== e.port)) return;
          if (((c = z(e, d)), c)) return c;
          if (((d = ""), (s = we), n)) return;
          continue;
         }
         "[" == a ? (v = !0) : "]" == a && (v = !1), (d += a);
        } else {
         if ("" == d) return O;
         if (((c = z(e, d)), c)) return c;
         if (((d = ""), (s = be), n == me)) return;
        }
        break;
       case be:
        if (!k.test(a)) {
         if (a == r || "/" == a || "?" == a || "#" == a || ("\\" == a && Q(e)) || n) {
          if ("" != d) {
           var y = parseInt(d, 10);
           if (y > 65535) return C;
           (e.port = Q(e) && y === J[e.scheme] ? null : y), (d = "");
          }
          if (n) return;
          s = we;
          continue;
         }
         return C;
        }
        d += a;
        break;
       case _e:
        if (((e.scheme = "file"), "/" == a || "\\" == a)) s = ye;
        else {
         if (!i || "file" != i.scheme) {
          s = Ee;
          continue;
         }
         if (a == r) (e.host = i.host), (e.path = i.path.slice()), (e.query = i.query);
         else if ("?" == a) (e.host = i.host), (e.path = i.path.slice()), (e.query = ""), (s = Ae);
         else {
          if ("#" != a) {
           ne(o.slice(l).join("")) || ((e.host = i.host), (e.path = i.path.slice()), re(e)), (s = Ee);
           continue;
          }
          (e.host = i.host), (e.path = i.path.slice()), (e.query = i.query), (e.fragment = ""), (s = Te);
         }
        }
        break;
       case ye:
        if ("/" == a || "\\" == a) {
         s = xe;
         break;
        }
        i && "file" == i.scheme && !ne(o.slice(l).join("")) && (te(i.path[0], !0) ? e.path.push(i.path[0]) : (e.host = i.host)), (s = Ee);
        continue;
       case xe:
        if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
         if (!n && te(d)) s = Ee;
         else if ("" == d) {
          if (((e.host = ""), n)) return;
          s = we;
         } else {
          if (((c = z(e, d)), c)) return c;
          if (("localhost" == e.host && (e.host = ""), n)) return;
          (d = ""), (s = we);
         }
         continue;
        }
        d += a;
        break;
       case we:
        if (Q(e)) {
         if (((s = Ee), "/" != a && "\\" != a)) continue;
        } else if (n || "?" != a)
         if (n || "#" != a) {
          if (a != r && ((s = Ee), "/" != a)) continue;
         } else (e.fragment = ""), (s = Te);
        else (e.query = ""), (s = Ae);
        break;
       case Ee:
        if (a == r || "/" == a || ("\\" == a && Q(e)) || (!n && ("?" == a || "#" == a))) {
         if (
          (oe(d)
           ? (re(e), "/" == a || ("\\" == a && Q(e)) || e.path.push(""))
           : ie(d)
           ? "/" == a || ("\\" == a && Q(e)) || e.path.push("")
           : ("file" == e.scheme && !e.path.length && te(d) && (e.host && (e.host = ""), (d = d.charAt(0) + ":")), e.path.push(d)),
          (d = ""),
          "file" == e.scheme && (a == r || "?" == a || "#" == a))
         )
          while (e.path.length > 1 && "" === e.path[0]) e.path.shift();
         "?" == a ? ((e.query = ""), (s = Ae)) : "#" == a && ((e.fragment = ""), (s = Te));
        } else d += $(a, q);
        break;
       case Se:
        "?" == a ? ((e.query = ""), (s = Ae)) : "#" == a ? ((e.fragment = ""), (s = Te)) : a != r && (e.path[0] += $(a, Y));
        break;
       case Ae:
        n || "#" != a ? a != r && ("'" == a && Q(e) ? (e.query += "%27") : (e.query += "#" == a ? "%23" : $(a, Y))) : ((e.fragment = ""), (s = Te));
        break;
       case Te:
        a != r && (e.fragment += $(a, W));
        break;
      }
      l++;
     }
    },
    Oe = function (e) {
     var t,
      n,
      r = l(this, Oe, "URL"),
      i = arguments.length > 1 ? arguments[1] : void 0,
      a = String(e),
      u = w(r, {
       type: "URL",
      });
     if (void 0 !== i)
      if (i instanceof Oe) t = E(i);
      else if (((n = Re((t = {}), String(i))), n)) throw TypeError(n);
     if (((n = Re(u, a, null, t)), n)) throw TypeError(n);
     var c = (u.searchParams = new y()),
      s = x(c);
     s.updateSearchParams(u.query),
      (s.updateURL = function () {
       u.query = String(c) || null;
      }),
      o ||
       ((r.href = Le.call(r)),
       (r.origin = De.call(r)),
       (r.protocol = ke.call(r)),
       (r.username = Ue.call(r)),
       (r.password = Pe.call(r)),
       (r.host = Ie.call(r)),
       (r.hostname = Fe.call(r)),
       (r.port = Ne.call(r)),
       (r.pathname = Be.call(r)),
       (r.search = Me.call(r)),
       (r.searchParams = je.call(r)),
       (r.hash = ze.call(r)));
    },
    Ce = Oe.prototype,
    Le = function () {
     var e = E(this),
      t = e.scheme,
      n = e.username,
      r = e.password,
      i = e.host,
      o = e.port,
      a = e.path,
      u = e.query,
      c = e.fragment,
      s = t + ":";
     return (
      null !== i ? ((s += "//"), Z(e) && (s += n + (r ? ":" + r : "") + "@"), (s += X(i)), null !== o && (s += ":" + o)) : "file" == t && (s += "//"),
      (s += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : ""),
      null !== u && (s += "?" + u),
      null !== c && (s += "#" + c),
      s
     );
    },
    De = function () {
     var e = E(this),
      t = e.scheme,
      n = e.port;
     if ("blob" == t)
      try {
       return new URL(t.path[0]).origin;
      } catch (r) {
       return "null";
      }
     return "file" != t && Q(e) ? t + "://" + X(e.host) + (null !== n ? ":" + n : "") : "null";
    },
    ke = function () {
     return E(this).scheme + ":";
    },
    Ue = function () {
     return E(this).username;
    },
    Pe = function () {
     return E(this).password;
    },
    Ie = function () {
     var e = E(this),
      t = e.host,
      n = e.port;
     return null === t ? "" : null === n ? X(t) : X(t) + ":" + n;
    },
    Fe = function () {
     var e = E(this).host;
     return null === e ? "" : X(e);
    },
    Ne = function () {
     var e = E(this).port;
     return null === e ? "" : String(e);
    },
    Be = function () {
     var e = E(this),
      t = e.path;
     return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
    },
    Me = function () {
     var e = E(this).query;
     return e ? "?" + e : "";
    },
    je = function () {
     return E(this).searchParams;
    },
    ze = function () {
     var e = E(this).fragment;
     return e ? "#" + e : "";
    },
    Ge = function (e, t) {
     return {
      get: e,
      set: t,
      configurable: !0,
      enumerable: !0,
     };
    };
   if (
    (o &&
     c(Ce, {
      href: Ge(Le, function (e) {
       var t = E(this),
        n = String(e),
        r = Re(t, n);
       if (r) throw TypeError(r);
       x(t.searchParams).updateSearchParams(t.query);
      }),
      origin: Ge(De),
      protocol: Ge(ke, function (e) {
       var t = E(this);
       Re(t, String(e) + ":", ae);
      }),
      username: Ge(Ue, function (e) {
       var t = E(this),
        n = h(String(e));
       if (!ee(t)) {
        t.username = "";
        for (var r = 0; r < n.length; r++) t.username += $(n[r], K);
       }
      }),
      password: Ge(Pe, function (e) {
       var t = E(this),
        n = h(String(e));
       if (!ee(t)) {
        t.password = "";
        for (var r = 0; r < n.length; r++) t.password += $(n[r], K);
       }
      }),
      host: Ge(Ie, function (e) {
       var t = E(this);
       t.cannotBeABaseURL || Re(t, String(e), ge);
      }),
      hostname: Ge(Fe, function (e) {
       var t = E(this);
       t.cannotBeABaseURL || Re(t, String(e), me);
      }),
      port: Ge(Ne, function (e) {
       var t = E(this);
       ee(t) || ((e = String(e)), "" == e ? (t.port = null) : Re(t, e, be));
      }),
      pathname: Ge(Be, function (e) {
       var t = E(this);
       t.cannotBeABaseURL || ((t.path = []), Re(t, e + "", we));
      }),
      search: Ge(Me, function (e) {
       var t = E(this);
       (e = String(e)), "" == e ? (t.query = null) : ("?" == e.charAt(0) && (e = e.slice(1)), (t.query = ""), Re(t, e, Ae)), x(t.searchParams).updateSearchParams(t.query);
      }),
      searchParams: Ge(je),
      hash: Ge(ze, function (e) {
       var t = E(this);
       (e = String(e)), "" != e ? ("#" == e.charAt(0) && (e = e.slice(1)), (t.fragment = ""), Re(t, e, Te)) : (t.fragment = null);
      }),
     }),
    s(
     Ce,
     "toJSON",
     function () {
      return Le.call(this);
     },
     {
      enumerable: !0,
     }
    ),
    s(
     Ce,
     "toString",
     function () {
      return Le.call(this);
     },
     {
      enumerable: !0,
     }
    ),
    _)
   ) {
    var He = _.createObjectURL,
     Ve = _.revokeObjectURL;
    He &&
     s(Oe, "createObjectURL", function (e) {
      return He.apply(_, arguments);
     }),
     Ve &&
      s(Oe, "revokeObjectURL", function (e) {
       return Ve.apply(_, arguments);
      });
   }
   g(Oe, "URL"),
    i(
     {
      global: !0,
      forced: !a,
      sham: !o,
     },
     {
      URL: Oe,
     }
    );
  },
  "2d00": function (e, t, n) {
   var r,
    i,
    o = n("da84"),
    a = n("342f"),
    u = o.process,
    c = u && u.versions,
    s = c && c.v8;
   s ? ((r = s.split(".")), (i = r[0] + r[1])) : a && ((r = a.match(/Edge\/(\d+)/)), (!r || r[1] >= 74) && ((r = a.match(/Chrome\/(\d+)/)), r && (i = r[1]))), (e.exports = i && +i);
  },
  3280: function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("e58c"),
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("lastIndexOf", function (e) {
    return i.apply(o(this), arguments);
   });
  },
  3410: function (e, t, n) {
   var r = n("23e7"),
    i = n("d039"),
    o = n("7b0b"),
    a = n("e163"),
    u = n("e177"),
    c = i(function () {
     a(1);
    });
   r(
    {
     target: "Object",
     stat: !0,
     forced: c,
     sham: !u,
    },
    {
     getPrototypeOf: function (e) {
      return a(o(e));
     },
    }
   );
  },
  "342f": function (e, t, n) {
   var r = n("d066");
   e.exports = r("navigator", "userAgent") || "";
  },
  "35a1": function (e, t, n) {
   var r = n("f5df"),
    i = n("3f8c"),
    o = n("b622"),
    a = o("iterator");
   e.exports = function (e) {
    if (void 0 != e) return e[a] || e["@@iterator"] || i[r(e)];
   };
  },
  "37e8": function (e, t, n) {
   var r = n("83ab"),
    i = n("9bf2"),
    o = n("825a"),
    a = n("df75");
   e.exports = r
    ? Object.defineProperties
    : function (e, t) {
       o(e);
       var n,
        r = a(t),
        u = r.length,
        c = 0;
       while (u > c) i.f(e, (n = r[c++]), t[n]);
       return e;
      };
  },
  "3a7b": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("b727").findIndex,
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("findIndex", function (e) {
    return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
   });
  },
  "3bbe": function (e, t, n) {
   var r = n("861d");
   e.exports = function (e) {
    if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
    return e;
   };
  },
  "3c5d": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("50c4"),
    o = n("182d"),
    a = n("7b0b"),
    u = n("d039"),
    c = r.aTypedArray,
    s = r.exportTypedArrayMethod,
    l = u(function () {
     new Int8Array(1).set({});
    });
   s(
    "set",
    function (e) {
     c(this);
     var t = o(arguments.length > 1 ? arguments[1] : void 0, 1),
      n = this.length,
      r = a(e),
      u = i(r.length),
      s = 0;
     if (u + t > n) throw RangeError("Wrong length");
     while (s < u) this[t + s] = r[s++];
    },
    l
   );
  },
  "3ca3": function (e, t, n) {
   "use strict";
   var r = n("6547").charAt,
    i = n("69f3"),
    o = n("7dd0"),
    a = "String Iterator",
    u = i.set,
    c = i.getterFor(a);
   o(
    String,
    "String",
    function (e) {
     u(this, {
      type: a,
      string: String(e),
      index: 0,
     });
    },
    function () {
     var e,
      t = c(this),
      n = t.string,
      i = t.index;
     return i >= n.length
      ? {
         value: void 0,
         done: !0,
        }
      : ((e = r(n, i)),
        (t.index += e.length),
        {
         value: e,
         done: !1,
        });
    }
   );
  },
  "3f8c": function (e, t) {
   e.exports = {};
  },
  "3fcc": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("b727").map,
    o = n("4840"),
    a = r.aTypedArray,
    u = r.aTypedArrayConstructor,
    c = r.exportTypedArrayMethod;
   c("map", function (e) {
    return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0, function (e, t) {
     return new (u(o(e, e.constructor)))(t);
    });
   });
  },
  "408a": function (e, t, n) {
   var r = n("c6b6");
   e.exports = function (e) {
    if ("number" != typeof e && "Number" != r(e)) throw TypeError("Incorrect invocation");
    return +e;
   };
  },
  4160: function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("17c2");
   r(
    {
     target: "Array",
     proto: !0,
     forced: [].forEach != i,
    },
    {
     forEach: i,
    }
   );
  },
  "428f": function (e, t, n) {
   var r = n("da84");
   e.exports = r;
  },
  "44ad": function (e, t, n) {
   var r = n("d039"),
    i = n("c6b6"),
    o = "".split;
   e.exports = r(function () {
    return !Object("z").propertyIsEnumerable(0);
   })
    ? function (e) {
       return "String" == i(e) ? o.call(e, "") : Object(e);
      }
    : Object;
  },
  "44d2": function (e, t, n) {
   var r = n("b622"),
    i = n("7c73"),
    o = n("9bf2"),
    a = r("unscopables"),
    u = Array.prototype;
   void 0 == u[a] &&
    o.f(u, a, {
     configurable: !0,
     value: i(null),
    }),
    (e.exports = function (e) {
     u[a][e] = !0;
    });
  },
  "44e7": function (e, t, n) {
   var r = n("861d"),
    i = n("c6b6"),
    o = n("b622"),
    a = o("match");
   e.exports = function (e) {
    var t;
    return r(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e));
   };
  },
  "466d": function (e, t, n) {
   "use strict";
   var r = n("d784"),
    i = n("825a"),
    o = n("50c4"),
    a = n("1d80"),
    u = n("8aa5"),
    c = n("14c3");
   r("match", 1, function (e, t, n) {
    return [
     function (t) {
      var n = a(this),
       r = void 0 == t ? void 0 : t[e];
      return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
     },
     function (e) {
      var r = n(t, e, this);
      if (r.done) return r.value;
      var a = i(e),
       s = String(this);
      if (!a.global) return c(a, s);
      var l = a.unicode;
      a.lastIndex = 0;
      var f,
       d = [],
       h = 0;
      while (null !== (f = c(a, s))) {
       var p = String(f[0]);
       (d[h] = p), "" === p && (a.lastIndex = u(s, o(a.lastIndex), l)), h++;
      }
      return 0 === h ? null : d;
     },
    ];
   });
  },
  4840: function (e, t, n) {
   var r = n("825a"),
    i = n("1c0b"),
    o = n("b622"),
    a = o("species");
   e.exports = function (e, t) {
    var n,
     o = r(e).constructor;
    return void 0 === o || void 0 == (n = r(o)[a]) ? t : i(n);
   };
  },
  4930: function (e, t, n) {
   var r = n("d039");
   e.exports =
    !!Object.getOwnPropertySymbols &&
    !r(function () {
     return !String(Symbol());
    });
  },
  "4d63": function (e, t, n) {
   var r = n("83ab"),
    i = n("da84"),
    o = n("94ca"),
    a = n("7156"),
    u = n("9bf2").f,
    c = n("241c").f,
    s = n("44e7"),
    l = n("ad6d"),
    f = n("9f7f"),
    d = n("6eeb"),
    h = n("d039"),
    p = n("69f3").set,
    v = n("2626"),
    g = n("b622"),
    m = g("match"),
    b = i.RegExp,
    _ = b.prototype,
    y = /a/g,
    x = /a/g,
    w = new b(y) !== y,
    E = f.UNSUPPORTED_Y,
    S =
     r &&
     o(
      "RegExp",
      !w ||
       E ||
       h(function () {
        return (x[m] = !1), b(y) != y || b(x) == x || "/a/i" != b(y, "i");
       })
     );
   if (S) {
    var A = function (e, t) {
      var n,
       r = this instanceof A,
       i = s(e),
       o = void 0 === t;
      if (!r && i && e.constructor === A && o) return e;
      w ? i && !o && (e = e.source) : e instanceof A && (o && (t = l.call(e)), (e = e.source)), E && ((n = !!t && t.indexOf("y") > -1), n && (t = t.replace(/y/g, "")));
      var u = a(w ? new b(e, t) : b(e, t), r ? this : _, A);
      return (
       E &&
        n &&
        p(u, {
         sticky: n,
        }),
       u
      );
     },
     T = function (e) {
      e in A ||
       u(A, e, {
        configurable: !0,
        get: function () {
         return b[e];
        },
        set: function (t) {
         b[e] = t;
        },
       });
     },
     R = c(b),
     O = 0;
    while (R.length > O) T(R[O++]);
    (_.constructor = A), (A.prototype = _), d(i, "RegExp", A);
   }
   v("RegExp");
  },
  "4d64": function (e, t, n) {
   var r = n("fc6a"),
    i = n("50c4"),
    o = n("23cb"),
    a = function (e) {
     return function (t, n, a) {
      var u,
       c = r(t),
       s = i(c.length),
       l = o(a, s);
      if (e && n != n) {
       while (s > l) if (((u = c[l++]), u != u)) return !0;
      } else for (; s > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
      return !e && -1;
     };
    };
   e.exports = {
    includes: a(!0),
    indexOf: a(!1),
   };
  },
  "4de4": function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("b727").filter,
    o = n("1dde"),
    a = n("ae40"),
    u = o("filter"),
    c = a("filter");
   r(
    {
     target: "Array",
     proto: !0,
     forced: !u || !c,
    },
    {
     filter: function (e) {
      return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
     },
    }
   );
  },
  "4df4": function (e, t, n) {
   "use strict";
   var r = n("0366"),
    i = n("7b0b"),
    o = n("9bdd"),
    a = n("e95a"),
    u = n("50c4"),
    c = n("8418"),
    s = n("35a1");
   e.exports = function (e) {
    var t,
     n,
     l,
     f,
     d,
     h,
     p = i(e),
     v = "function" == typeof this ? this : Array,
     g = arguments.length,
     m = g > 1 ? arguments[1] : void 0,
     b = void 0 !== m,
     _ = s(p),
     y = 0;
    if ((b && (m = r(m, g > 2 ? arguments[2] : void 0, 2)), void 0 == _ || (v == Array && a(_)))) for (t = u(p.length), n = new v(t); t > y; y++) (h = b ? m(p[y], y) : p[y]), c(n, y, h);
    else for (f = _.call(p), d = f.next, n = new v(); !(l = d.call(f)).done; y++) (h = b ? o(f, m, [l.value, y], !0) : l.value), c(n, y, h);
    return (n.length = y), n;
   };
  },
  "50c4": function (e, t, n) {
   var r = n("a691"),
    i = Math.min;
   e.exports = function (e) {
    return e > 0 ? i(r(e), 9007199254740991) : 0;
   };
  },
  5135: function (e, t) {
   var n = {}.hasOwnProperty;
   e.exports = function (e, t) {
    return n.call(e, t);
   };
  },
  5319: function (e, t, n) {
   "use strict";
   var r = n("d784"),
    i = n("825a"),
    o = n("7b0b"),
    a = n("50c4"),
    u = n("a691"),
    c = n("1d80"),
    s = n("8aa5"),
    l = n("14c3"),
    f = Math.max,
    d = Math.min,
    h = Math.floor,
    p = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    v = /\$([$&'`]|\d\d?)/g,
    g = function (e) {
     return void 0 === e ? e : String(e);
    };
   r("replace", 2, function (e, t, n, r) {
    var m = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
     b = r.REPLACE_KEEPS_$0,
     _ = m ? "$" : "$0";
    return [
     function (n, r) {
      var i = c(this),
       o = void 0 == n ? void 0 : n[e];
      return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r);
     },
     function (e, r) {
      if ((!m && b) || ("string" === typeof r && -1 === r.indexOf(_))) {
       var o = n(t, e, this, r);
       if (o.done) return o.value;
      }
      var c = i(e),
       h = String(this),
       p = "function" === typeof r;
      p || (r = String(r));
      var v = c.global;
      if (v) {
       var x = c.unicode;
       c.lastIndex = 0;
      }
      var w = [];
      while (1) {
       var E = l(c, h);
       if (null === E) break;
       if ((w.push(E), !v)) break;
       var S = String(E[0]);
       "" === S && (c.lastIndex = s(h, a(c.lastIndex), x));
      }
      for (var A = "", T = 0, R = 0; R < w.length; R++) {
       E = w[R];
       for (var O = String(E[0]), C = f(d(u(E.index), h.length), 0), L = [], D = 1; D < E.length; D++) L.push(g(E[D]));
       var k = E.groups;
       if (p) {
        var U = [O].concat(L, C, h);
        void 0 !== k && U.push(k);
        var P = String(r.apply(void 0, U));
       } else P = y(O, h, C, L, k, r);
       C >= T && ((A += h.slice(T, C) + P), (T = C + O.length));
      }
      return A + h.slice(T);
     },
    ];

    function y(e, n, r, i, a, u) {
     var c = r + e.length,
      s = i.length,
      l = v;
     return (
      void 0 !== a && ((a = o(a)), (l = p)),
      t.call(u, l, function (t, o) {
       var u;
       switch (o.charAt(0)) {
        case "$":
         return "$";
        case "&":
         return e;
        case "`":
         return n.slice(0, r);
        case "'":
         return n.slice(c);
        case "<":
         u = a[o.slice(1, -1)];
         break;
        default:
         var l = +o;
         if (0 === l) return t;
         if (l > s) {
          var f = h(l / 10);
          return 0 === f ? t : f <= s ? (void 0 === i[f - 1] ? o.charAt(1) : i[f - 1] + o.charAt(1)) : t;
         }
         u = i[l - 1];
       }
       return void 0 === u ? "" : u;
      })
     );
    }
   });
  },
  5692: function (e, t, n) {
   var r = n("c430"),
    i = n("c6cd");
   (e.exports = function (e, t) {
    return i[e] || (i[e] = void 0 !== t ? t : {});
   })("versions", []).push({
    version: "3.7.0",
    mode: r ? "pure" : "global",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
   });
  },
  "56ef": function (e, t, n) {
   var r = n("d066"),
    i = n("241c"),
    o = n("7418"),
    a = n("825a");
   e.exports =
    r("Reflect", "ownKeys") ||
    function (e) {
     var t = i.f(a(e)),
      n = o.f;
     return n ? t.concat(n(e)) : t;
    };
  },
  "5c6c": function (e, t) {
   e.exports = function (e, t) {
    return {
     enumerable: !(1 & e),
     configurable: !(2 & e),
     writable: !(4 & e),
     value: t,
    };
   };
  },
  "5cc6": function (e, t, n) {
   var r = n("74e8");
   r("Uint8", function (e) {
    return function (t, n, r) {
     return e(this, t, n, r);
    };
   });
  },
  "5f96": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = r.aTypedArray,
    o = r.exportTypedArrayMethod,
    a = [].join;
   o("join", function (e) {
    return a.apply(i(this), arguments);
   });
  },
  "5fb2": function (e, t, n) {
   "use strict";
   var r = 2147483647,
    i = 36,
    o = 1,
    a = 26,
    u = 38,
    c = 700,
    s = 72,
    l = 128,
    f = "-",
    d = /[^\0-\u007E]/,
    h = /[.\u3002\uFF0E\uFF61]/g,
    p = "Overflow: input needs wider integers to process",
    v = i - o,
    g = Math.floor,
    m = String.fromCharCode,
    b = function (e) {
     var t = [],
      n = 0,
      r = e.length;
     while (n < r) {
      var i = e.charCodeAt(n++);
      if (i >= 55296 && i <= 56319 && n < r) {
       var o = e.charCodeAt(n++);
       56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), n--);
      } else t.push(i);
     }
     return t;
    },
    _ = function (e) {
     return e + 22 + 75 * (e < 26);
    },
    y = function (e, t, n) {
     var r = 0;
     for (e = n ? g(e / c) : e >> 1, e += g(e / t); e > (v * a) >> 1; r += i) e = g(e / v);
     return g(r + ((v + 1) * e) / (e + u));
    },
    x = function (e) {
     var t = [];
     e = b(e);
     var n,
      u,
      c = e.length,
      d = l,
      h = 0,
      v = s;
     for (n = 0; n < e.length; n++) (u = e[n]), u < 128 && t.push(m(u));
     var x = t.length,
      w = x;
     x && t.push(f);
     while (w < c) {
      var E = r;
      for (n = 0; n < e.length; n++) (u = e[n]), u >= d && u < E && (E = u);
      var S = w + 1;
      if (E - d > g((r - h) / S)) throw RangeError(p);
      for (h += (E - d) * S, d = E, n = 0; n < e.length; n++) {
       if (((u = e[n]), u < d && ++h > r)) throw RangeError(p);
       if (u == d) {
        for (var A = h, T = i; ; T += i) {
         var R = T <= v ? o : T >= v + a ? a : T - v;
         if (A < R) break;
         var O = A - R,
          C = i - R;
         t.push(m(_(R + (O % C)))), (A = g(O / C));
        }
        t.push(m(_(A))), (v = y(h, S, w == x)), (h = 0), ++w;
       }
      }
      ++h, ++d;
     }
     return t.join("");
    };
   e.exports = function (e) {
    var t,
     n,
     r = [],
     i = e.toLowerCase().replace(h, ".").split(".");
    for (t = 0; t < i.length; t++) (n = i[t]), r.push(d.test(n) ? "xn--" + x(n) : n);
    return r.join(".");
   };
  },
  "60bd": function (e, t, n) {
   "use strict";
   var r = n("da84"),
    i = n("ebb5"),
    o = n("e260"),
    a = n("b622"),
    u = a("iterator"),
    c = r.Uint8Array,
    s = o.values,
    l = o.keys,
    f = o.entries,
    d = i.aTypedArray,
    h = i.exportTypedArrayMethod,
    p = c && c.prototype[u],
    v = !!p && ("values" == p.name || void 0 == p.name),
    g = function () {
     return s.call(d(this));
    };
   h("entries", function () {
    return f.call(d(this));
   }),
    h("keys", function () {
     return l.call(d(this));
    }),
    h("values", g, !v),
    h(u, g, !v);
  },
  "60da": function (e, t, n) {
   "use strict";
   var r = n("83ab"),
    i = n("d039"),
    o = n("df75"),
    a = n("7418"),
    u = n("d1e7"),
    c = n("7b0b"),
    s = n("44ad"),
    l = Object.assign,
    f = Object.defineProperty;
   e.exports =
    !l ||
    i(function () {
     if (
      r &&
      1 !==
       l(
        {
         b: 1,
        },
        l(
         f({}, "a", {
          enumerable: !0,
          get: function () {
           f(this, "b", {
            value: 3,
            enumerable: !1,
           });
          },
         }),
         {
          b: 2,
         }
        )
       ).b
     )
      return !0;
     var e = {},
      t = {},
      n = Symbol(),
      i = "abcdefghijklmnopqrst";
     return (
      (e[n] = 7),
      i.split("").forEach(function (e) {
       t[e] = e;
      }),
      7 != l({}, e)[n] || o(l({}, t)).join("") != i
     );
    })
     ? function (e, t) {
        var n = c(e),
         i = arguments.length,
         l = 1,
         f = a.f,
         d = u.f;
        while (i > l) {
         var h,
          p = s(arguments[l++]),
          v = f ? o(p).concat(f(p)) : o(p),
          g = v.length,
          m = 0;
         while (g > m) (h = v[m++]), (r && !d.call(p, h)) || (n[h] = p[h]);
        }
        return n;
       }
     : l;
  },
  "621a": function (e, t, n) {
   "use strict";
   var r = n("da84"),
    i = n("83ab"),
    o = n("a981"),
    a = n("9112"),
    u = n("e2cc"),
    c = n("d039"),
    s = n("19aa"),
    l = n("a691"),
    f = n("50c4"),
    d = n("0b25"),
    h = n("77a7"),
    p = n("e163"),
    v = n("d2bb"),
    g = n("241c").f,
    m = n("9bf2").f,
    b = n("81d5"),
    _ = n("d44e"),
    y = n("69f3"),
    x = y.get,
    w = y.set,
    E = "ArrayBuffer",
    S = "DataView",
    A = "prototype",
    T = "Wrong length",
    R = "Wrong index",
    O = r[E],
    C = O,
    L = r[S],
    D = L && L[A],
    k = Object.prototype,
    U = r.RangeError,
    P = h.pack,
    I = h.unpack,
    F = function (e) {
     return [255 & e];
    },
    N = function (e) {
     return [255 & e, (e >> 8) & 255];
    },
    B = function (e) {
     return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    },
    M = function (e) {
     return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    },
    j = function (e) {
     return P(e, 23, 4);
    },
    z = function (e) {
     return P(e, 52, 8);
    },
    G = function (e, t) {
     m(e[A], t, {
      get: function () {
       return x(this)[t];
      },
     });
    },
    H = function (e, t, n, r) {
     var i = d(n),
      o = x(e);
     if (i + t > o.byteLength) throw U(R);
     var a = x(o.buffer).bytes,
      u = i + o.byteOffset,
      c = a.slice(u, u + t);
     return r ? c : c.reverse();
    },
    V = function (e, t, n, r, i, o) {
     var a = d(n),
      u = x(e);
     if (a + t > u.byteLength) throw U(R);
     for (var c = x(u.buffer).bytes, s = a + u.byteOffset, l = r(+i), f = 0; f < t; f++) c[s + f] = l[o ? f : t - f - 1];
    };
   if (o) {
    if (
     !c(function () {
      O(1);
     }) ||
     !c(function () {
      new O(-1);
     }) ||
     c(function () {
      return new O(), new O(1.5), new O(NaN), O.name != E;
     })
    ) {
     C = function (e) {
      return s(this, C), new O(d(e));
     };
     for (var X, Y = (C[A] = O[A]), W = g(O), q = 0; W.length > q; ) (X = W[q++]) in C || a(C, X, O[X]);
     Y.constructor = C;
    }
    v && p(D) !== k && v(D, k);
    var K = new L(new C(2)),
     $ = D.setInt8;
    K.setInt8(0, 2147483648),
     K.setInt8(1, 2147483649),
     (!K.getInt8(0) && K.getInt8(1)) ||
      u(
       D,
       {
        setInt8: function (e, t) {
         $.call(this, e, (t << 24) >> 24);
        },
        setUint8: function (e, t) {
         $.call(this, e, (t << 24) >> 24);
        },
       },
       {
        unsafe: !0,
       }
      );
   } else
    (C = function (e) {
     s(this, C, E);
     var t = d(e);
     w(this, {
      bytes: b.call(new Array(t), 0),
      byteLength: t,
     }),
      i || (this.byteLength = t);
    }),
     (L = function (e, t, n) {
      s(this, L, S), s(e, C, S);
      var r = x(e).byteLength,
       o = l(t);
      if (o < 0 || o > r) throw U("Wrong offset");
      if (((n = void 0 === n ? r - o : f(n)), o + n > r)) throw U(T);
      w(this, {
       buffer: e,
       byteLength: n,
       byteOffset: o,
      }),
       i || ((this.buffer = e), (this.byteLength = n), (this.byteOffset = o));
     }),
     i && (G(C, "byteLength"), G(L, "buffer"), G(L, "byteLength"), G(L, "byteOffset")),
     u(L[A], {
      getInt8: function (e) {
       return (H(this, 1, e)[0] << 24) >> 24;
      },
      getUint8: function (e) {
       return H(this, 1, e)[0];
      },
      getInt16: function (e) {
       var t = H(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
       return (((t[1] << 8) | t[0]) << 16) >> 16;
      },
      getUint16: function (e) {
       var t = H(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
       return (t[1] << 8) | t[0];
      },
      getInt32: function (e) {
       return M(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0));
      },
      getUint32: function (e) {
       return M(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
      },
      getFloat32: function (e) {
       return I(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23);
      },
      getFloat64: function (e) {
       return I(H(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52);
      },
      setInt8: function (e, t) {
       V(this, 1, e, F, t);
      },
      setUint8: function (e, t) {
       V(this, 1, e, F, t);
      },
      setInt16: function (e, t) {
       V(this, 2, e, N, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint16: function (e, t) {
       V(this, 2, e, N, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setInt32: function (e, t) {
       V(this, 4, e, B, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint32: function (e, t) {
       V(this, 4, e, B, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat32: function (e, t) {
       V(this, 4, e, j, t, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat64: function (e, t) {
       V(this, 8, e, z, t, arguments.length > 2 ? arguments[2] : void 0);
      },
     });
   _(C, E),
    _(L, S),
    (e.exports = {
     ArrayBuffer: C,
     DataView: L,
    });
  },
  "649e": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("b727").some,
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("some", function (e) {
    return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
   });
  },
  6547: function (e, t, n) {
   var r = n("a691"),
    i = n("1d80"),
    o = function (e) {
     return function (t, n) {
      var o,
       a,
       u = String(i(t)),
       c = r(n),
       s = u.length;
      return c < 0 || c >= s
       ? e
         ? ""
         : void 0
       : ((o = u.charCodeAt(c)), o < 55296 || o > 56319 || c + 1 === s || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343 ? (e ? u.charAt(c) : o) : e ? u.slice(c, c + 2) : a - 56320 + ((o - 55296) << 10) + 65536);
     };
    };
   e.exports = {
    codeAt: o(!1),
    charAt: o(!0),
   };
  },
  "65f0": function (e, t, n) {
   var r = n("861d"),
    i = n("e8b5"),
    o = n("b622"),
    a = o("species");
   e.exports = function (e, t) {
    var n;
    return i(e) && ((n = e.constructor), "function" != typeof n || (n !== Array && !i(n.prototype)) ? r(n) && ((n = n[a]), null === n && (n = void 0)) : (n = void 0)), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
   };
  },
  "69f3": function (e, t, n) {
   var r,
    i,
    o,
    a = n("7f9a"),
    u = n("da84"),
    c = n("861d"),
    s = n("9112"),
    l = n("5135"),
    f = n("c6cd"),
    d = n("f772"),
    h = n("d012"),
    p = u.WeakMap,
    v = function (e) {
     return o(e) ? i(e) : r(e, {});
    },
    g = function (e) {
     return function (t) {
      var n;
      if (!c(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
      return n;
     };
    };
   if (a) {
    var m = f.state || (f.state = new p()),
     b = m.get,
     _ = m.has,
     y = m.set;
    (r = function (e, t) {
     return (t.facade = e), y.call(m, e, t), t;
    }),
     (i = function (e) {
      return b.call(m, e) || {};
     }),
     (o = function (e) {
      return _.call(m, e);
     });
   } else {
    var x = d("state");
    (h[x] = !0),
     (r = function (e, t) {
      return (t.facade = e), s(e, x, t), t;
     }),
     (i = function (e) {
      return l(e, x) ? e[x] : {};
     }),
     (o = function (e) {
      return l(e, x);
     });
   }
   e.exports = {
    set: r,
    get: i,
    has: o,
    enforce: v,
    getterFor: g,
   };
  },
  "6eeb": function (e, t, n) {
   var r = n("da84"),
    i = n("9112"),
    o = n("5135"),
    a = n("ce4e"),
    u = n("8925"),
    c = n("69f3"),
    s = c.get,
    l = c.enforce,
    f = String(String).split("String");
   (e.exports = function (e, t, n, u) {
    var c,
     s = !!u && !!u.unsafe,
     d = !!u && !!u.enumerable,
     h = !!u && !!u.noTargetGet;
    "function" == typeof n && ("string" != typeof t || o(n, "name") || i(n, "name", t), (c = l(n)), c.source || (c.source = f.join("string" == typeof t ? t : ""))),
     e !== r ? (s ? !h && e[t] && (d = !0) : delete e[t], d ? (e[t] = n) : i(e, t, n)) : d ? (e[t] = n) : a(t, n);
   })(Function.prototype, "toString", function () {
    return ("function" == typeof this && s(this).source) || u(this);
   });
  },
  7037: function (e, t, n) {
   function r(t) {
    return (
     "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
      ? (e.exports = r = function (e) {
         return typeof e;
        })
      : (e.exports = r = function (e) {
         return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }),
     r(t)
    );
   }
   n("a4d3"), n("e01a"), n("d28b"), n("e260"), n("d3b7"), n("3ca3"), n("ddb0"), (e.exports = r);
  },
  7156: function (e, t, n) {
   var r = n("861d"),
    i = n("d2bb");
   e.exports = function (e, t, n) {
    var o, a;
    return i && "function" == typeof (o = t.constructor) && o !== n && r((a = o.prototype)) && a !== n.prototype && i(e, a), e;
   };
  },
  "72f7": function (e, t, n) {
   "use strict";
   var r = n("ebb5").exportTypedArrayMethod,
    i = n("d039"),
    o = n("da84"),
    a = o.Uint8Array,
    u = (a && a.prototype) || {},
    c = [].toString,
    s = [].join;
   i(function () {
    c.call({});
   }) &&
    (c = function () {
     return s.call(this);
    });
   var l = u.toString != c;
   r("toString", c, l);
  },
  "735e": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("81d5"),
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("fill", function (e) {
    return i.apply(o(this), arguments);
   });
  },
  7418: function (e, t) {
   t.f = Object.getOwnPropertySymbols;
  },
  "746f": function (e, t, n) {
   var r = n("428f"),
    i = n("5135"),
    o = n("e538"),
    a = n("9bf2").f;
   e.exports = function (e) {
    var t = r.Symbol || (r.Symbol = {});
    i(t, e) ||
     a(t, e, {
      value: o.f(e),
     });
   };
  },
  "74e8": function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("da84"),
    o = n("83ab"),
    a = n("8aa7"),
    u = n("ebb5"),
    c = n("621a"),
    s = n("19aa"),
    l = n("5c6c"),
    f = n("9112"),
    d = n("50c4"),
    h = n("0b25"),
    p = n("182d"),
    v = n("c04e"),
    g = n("5135"),
    m = n("f5df"),
    b = n("861d"),
    _ = n("7c73"),
    y = n("d2bb"),
    x = n("241c").f,
    w = n("a078"),
    E = n("b727").forEach,
    S = n("2626"),
    A = n("9bf2"),
    T = n("06cf"),
    R = n("69f3"),
    O = n("7156"),
    C = R.get,
    L = R.set,
    D = A.f,
    k = T.f,
    U = Math.round,
    P = i.RangeError,
    I = c.ArrayBuffer,
    F = c.DataView,
    N = u.NATIVE_ARRAY_BUFFER_VIEWS,
    B = u.TYPED_ARRAY_TAG,
    M = u.TypedArray,
    j = u.TypedArrayPrototype,
    z = u.aTypedArrayConstructor,
    G = u.isTypedArray,
    H = "BYTES_PER_ELEMENT",
    V = "Wrong length",
    X = function (e, t) {
     var n = 0,
      r = t.length,
      i = new (z(e))(r);
     while (r > n) i[n] = t[n++];
     return i;
    },
    Y = function (e, t) {
     D(e, t, {
      get: function () {
       return C(this)[t];
      },
     });
    },
    W = function (e) {
     var t;
     return e instanceof I || "ArrayBuffer" == (t = m(e)) || "SharedArrayBuffer" == t;
    },
    q = function (e, t) {
     return G(e) && "symbol" != typeof t && t in e && String(+t) == String(t);
    },
    K = function (e, t) {
     return q(e, (t = v(t, !0))) ? l(2, e[t]) : k(e, t);
    },
    $ = function (e, t, n) {
     return !(q(e, (t = v(t, !0))) && b(n) && g(n, "value")) || g(n, "get") || g(n, "set") || n.configurable || (g(n, "writable") && !n.writable) || (g(n, "enumerable") && !n.enumerable) ? D(e, t, n) : ((e[t] = n.value), e);
    };
   o
    ? (N || ((T.f = K), (A.f = $), Y(j, "buffer"), Y(j, "byteOffset"), Y(j, "byteLength"), Y(j, "length")),
      r(
       {
        target: "Object",
        stat: !0,
        forced: !N,
       },
       {
        getOwnPropertyDescriptor: K,
        defineProperty: $,
       }
      ),
      (e.exports = function (e, t, n) {
       var o = e.match(/\d+$/)[0] / 8,
        u = e + (n ? "Clamped" : "") + "Array",
        c = "get" + e,
        l = "set" + e,
        v = i[u],
        g = v,
        m = g && g.prototype,
        A = {},
        T = function (e, t) {
         var n = C(e);
         return n.view[c](t * o + n.byteOffset, !0);
        },
        R = function (e, t, r) {
         var i = C(e);
         n && (r = (r = U(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.view[l](t * o + i.byteOffset, r, !0);
        },
        k = function (e, t) {
         D(e, t, {
          get: function () {
           return T(this, t);
          },
          set: function (e) {
           return R(this, t, e);
          },
          enumerable: !0,
         });
        };
       N
        ? a &&
          ((g = t(function (e, t, n, r) {
           return (
            s(e, g, u),
            O(
             (function () {
              return b(t) ? (W(t) ? (void 0 !== r ? new v(t, p(n, o), r) : void 0 !== n ? new v(t, p(n, o)) : new v(t)) : G(t) ? X(g, t) : w.call(g, t)) : new v(h(t));
             })(),
             e,
             g
            )
           );
          })),
          y && y(g, M),
          E(x(v), function (e) {
           e in g || f(g, e, v[e]);
          }),
          (g.prototype = m))
        : ((g = t(function (e, t, n, r) {
           s(e, g, u);
           var i,
            a,
            c,
            l = 0,
            f = 0;
           if (b(t)) {
            if (!W(t)) return G(t) ? X(g, t) : w.call(g, t);
            (i = t), (f = p(n, o));
            var v = t.byteLength;
            if (void 0 === r) {
             if (v % o) throw P(V);
             if (((a = v - f), a < 0)) throw P(V);
            } else if (((a = d(r) * o), a + f > v)) throw P(V);
            c = a / o;
           } else (c = h(t)), (a = c * o), (i = new I(a));
           L(e, {
            buffer: i,
            byteOffset: f,
            byteLength: a,
            length: c,
            view: new F(i),
           });
           while (l < c) k(e, l++);
          })),
          y && y(g, M),
          (m = g.prototype = _(j))),
        m.constructor !== g && f(m, "constructor", g),
        B && f(m, B, u),
        (A[u] = g),
        r(
         {
          global: !0,
          forced: g != v,
          sham: !N,
         },
         A
        ),
        H in g || f(g, H, o),
        H in m || f(m, H, o),
        S(u);
      }))
    : (e.exports = function () {});
  },
  "77a7": function (e, t) {
   var n = 1 / 0,
    r = Math.abs,
    i = Math.pow,
    o = Math.floor,
    a = Math.log,
    u = Math.LN2,
    c = function (e, t, c) {
     var s,
      l,
      f,
      d = new Array(c),
      h = 8 * c - t - 1,
      p = (1 << h) - 1,
      v = p >> 1,
      g = 23 === t ? i(2, -24) - i(2, -77) : 0,
      m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
      b = 0;
     for (
      e = r(e),
       e != e || e === n
        ? ((l = e != e ? 1 : 0), (s = p))
        : ((s = o(a(e) / u)),
          e * (f = i(2, -s)) < 1 && (s--, (f *= 2)),
          (e += s + v >= 1 ? g / f : g * i(2, 1 - v)),
          e * f >= 2 && (s++, (f /= 2)),
          s + v >= p ? ((l = 0), (s = p)) : s + v >= 1 ? ((l = (e * f - 1) * i(2, t)), (s += v)) : ((l = e * i(2, v - 1) * i(2, t)), (s = 0)));
      t >= 8;
      d[b++] = 255 & l, l /= 256, t -= 8
     );
     for (s = (s << t) | l, h += t; h > 0; d[b++] = 255 & s, s /= 256, h -= 8);
     return (d[--b] |= 128 * m), d;
    },
    s = function (e, t) {
     var r,
      o = e.length,
      a = 8 * o - t - 1,
      u = (1 << a) - 1,
      c = u >> 1,
      s = a - 7,
      l = o - 1,
      f = e[l--],
      d = 127 & f;
     for (f >>= 7; s > 0; d = 256 * d + e[l], l--, s -= 8);
     for (r = d & ((1 << -s) - 1), d >>= -s, s += t; s > 0; r = 256 * r + e[l], l--, s -= 8);
     if (0 === d) d = 1 - c;
     else {
      if (d === u) return r ? NaN : f ? -n : n;
      (r += i(2, t)), (d -= c);
     }
     return (f ? -1 : 1) * r * i(2, d - t);
    };
   e.exports = {
    pack: c,
    unpack: s,
   };
  },
  7839: function (e, t) {
   e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  },
  "7b0b": function (e, t, n) {
   var r = n("1d80");
   e.exports = function (e) {
    return Object(r(e));
   };
  },
  "7c73": function (e, t, n) {
   var r,
    i = n("825a"),
    o = n("37e8"),
    a = n("7839"),
    u = n("d012"),
    c = n("1be4"),
    s = n("cc12"),
    l = n("f772"),
    f = ">",
    d = "<",
    h = "prototype",
    p = "script",
    v = l("IE_PROTO"),
    g = function () {},
    m = function (e) {
     return d + p + f + e + d + "/" + p + f;
    },
    b = function (e) {
     e.write(m("")), e.close();
     var t = e.parentWindow.Object;
     return (e = null), t;
    },
    _ = function () {
     var e,
      t = s("iframe"),
      n = "java" + p + ":";
     return (t.style.display = "none"), c.appendChild(t), (t.src = String(n)), (e = t.contentWindow.document), e.open(), e.write(m("document.F=Object")), e.close(), e.F;
    },
    y = function () {
     try {
      r = document.domain && new ActiveXObject("htmlfile");
     } catch (t) {}
     y = r ? b(r) : _();
     var e = a.length;
     while (e--) delete y[h][a[e]];
     return y();
    };
   (u[v] = !0),
    (e.exports =
     Object.create ||
     function (e, t) {
      var n;
      return null !== e ? ((g[h] = i(e)), (n = new g()), (g[h] = null), (n[v] = e)) : (n = y()), void 0 === t ? n : o(n, t);
     });
  },
  "7db0": function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("b727").find,
    o = n("44d2"),
    a = n("ae40"),
    u = "find",
    c = !0,
    s = a(u);
   u in [] &&
    Array(1)[u](function () {
     c = !1;
    }),
    r(
     {
      target: "Array",
      proto: !0,
      forced: c || !s,
     },
     {
      find: function (e) {
       return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
     }
    ),
    o(u);
  },
  "7dd0": function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("9ed3"),
    o = n("e163"),
    a = n("d2bb"),
    u = n("d44e"),
    c = n("9112"),
    s = n("6eeb"),
    l = n("b622"),
    f = n("c430"),
    d = n("3f8c"),
    h = n("ae93"),
    p = h.IteratorPrototype,
    v = h.BUGGY_SAFARI_ITERATORS,
    g = l("iterator"),
    m = "keys",
    b = "values",
    _ = "entries",
    y = function () {
     return this;
    };
   e.exports = function (e, t, n, l, h, x, w) {
    i(n, t, l);
    var E,
     S,
     A,
     T = function (e) {
      if (e === h && D) return D;
      if (!v && e in C) return C[e];
      switch (e) {
       case m:
        return function () {
         return new n(this, e);
        };
       case b:
        return function () {
         return new n(this, e);
        };
       case _:
        return function () {
         return new n(this, e);
        };
      }
      return function () {
       return new n(this);
      };
     },
     R = t + " Iterator",
     O = !1,
     C = e.prototype,
     L = C[g] || C["@@iterator"] || (h && C[h]),
     D = (!v && L) || T(h),
     k = ("Array" == t && C.entries) || L;
    if (
     (k && ((E = o(k.call(new e()))), p !== Object.prototype && E.next && (f || o(E) === p || (a ? a(E, p) : "function" != typeof E[g] && c(E, g, y)), u(E, R, !0, !0), f && (d[R] = y))),
     h == b &&
      L &&
      L.name !== b &&
      ((O = !0),
      (D = function () {
       return L.call(this);
      })),
     (f && !w) || C[g] === D || c(C, g, D),
     (d[t] = D),
     h)
    )
     if (
      ((S = {
       values: T(b),
       keys: x ? D : T(m),
       entries: T(_),
      }),
      w)
     )
      for (A in S) (v || O || !(A in C)) && s(C, A, S[A]);
     else
      r(
       {
        target: t,
        proto: !0,
        forced: v || O,
       },
       S
      );
    return S;
   };
  },
  "7f9a": function (e, t, n) {
   var r = n("da84"),
    i = n("8925"),
    o = r.WeakMap;
   e.exports = "function" === typeof o && /native code/.test(i(o));
  },
  "81d5": function (e, t, n) {
   "use strict";
   var r = n("7b0b"),
    i = n("23cb"),
    o = n("50c4");
   e.exports = function (e) {
    var t = r(this),
     n = o(t.length),
     a = arguments.length,
     u = i(a > 1 ? arguments[1] : void 0, n),
     c = a > 2 ? arguments[2] : void 0,
     s = void 0 === c ? n : i(c, n);
    while (s > u) t[u++] = e;
    return t;
   };
  },
  "825a": function (e, t, n) {
   var r = n("861d");
   e.exports = function (e) {
    if (!r(e)) throw TypeError(String(e) + " is not an object");
    return e;
   };
  },
  "82f8": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("4d64").includes,
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("includes", function (e) {
    return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
   });
  },
  "83ab": function (e, t, n) {
   var r = n("d039");
   e.exports = !r(function () {
    return (
     7 !=
     Object.defineProperty({}, 1, {
      get: function () {
       return 7;
      },
     })[1]
    );
   });
  },
  8418: function (e, t, n) {
   "use strict";
   var r = n("c04e"),
    i = n("9bf2"),
    o = n("5c6c");
   e.exports = function (e, t, n) {
    var a = r(t);
    a in e ? i.f(e, a, o(0, n)) : (e[a] = n);
   };
  },
  "84c3": function (e, t, n) {
   var r = n("74e8");
   r("Uint16", function (e) {
    return function (t, n, r) {
     return e(this, t, n, r);
    };
   });
  },
  "861d": function (e, t) {
   e.exports = function (e) {
    return "object" === typeof e ? null !== e : "function" === typeof e;
   };
  },
  8875: function (e, t, n) {
   var r, i, o;
   (function (n, a) {
    (i = []), (r = a), (o = "function" === typeof r ? r.apply(t, i) : r), void 0 === o || (e.exports = o);
   })("undefined" !== typeof self && self, function () {
    function e() {
     var t = Object.getOwnPropertyDescriptor(document, "currentScript");
     if (!t && "currentScript" in document && document.currentScript) return document.currentScript;
     if (t && t.get !== e && document.currentScript) return document.currentScript;
     try {
      throw new Error();
     } catch (h) {
      var n,
       r,
       i,
       o = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
       a = /@([^@]*):(\d+):(\d+)\s*$/gi,
       u = o.exec(h.stack) || a.exec(h.stack),
       c = (u && u[1]) || !1,
       s = (u && u[2]) || !1,
       l = document.location.href.replace(document.location.hash, ""),
       f = document.getElementsByTagName("script");
      c === l && ((n = document.documentElement.outerHTML), (r = new RegExp("(?:[^\\n]+?\\n){0," + (s - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i")), (i = n.replace(r, "$1").trim()));
      for (var d = 0; d < f.length; d++) {
       if ("interactive" === f[d].readyState) return f[d];
       if (f[d].src === c) return f[d];
       if (c === l && f[d].innerHTML && f[d].innerHTML.trim() === i) return f[d];
      }
      return null;
     }
    }
    return e;
   });
  },
  8925: function (e, t, n) {
   var r = n("c6cd"),
    i = Function.toString;
   "function" != typeof r.inspectSource &&
    (r.inspectSource = function (e) {
     return i.call(e);
    }),
    (e.exports = r.inspectSource);
  },
  "8aa5": function (e, t, n) {
   "use strict";
   var r = n("6547").charAt;
   e.exports = function (e, t, n) {
    return t + (n ? r(e, t).length : 1);
   };
  },
  "8aa7": function (e, t, n) {
   var r = n("da84"),
    i = n("d039"),
    o = n("1c7e"),
    a = n("ebb5").NATIVE_ARRAY_BUFFER_VIEWS,
    u = r.ArrayBuffer,
    c = r.Int8Array;
   e.exports =
    !a ||
    !i(function () {
     c(1);
    }) ||
    !i(function () {
     new c(-1);
    }) ||
    !o(function (e) {
     new c(), new c(null), new c(1.5), new c(e);
    }, !0) ||
    i(function () {
     return 1 !== new c(new u(2), 1, void 0).length;
    });
  },
  "90e3": function (e, t) {
   var n = 0,
    r = Math.random();
   e.exports = function (e) {
    return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
   };
  },
  9112: function (e, t, n) {
   var r = n("83ab"),
    i = n("9bf2"),
    o = n("5c6c");
   e.exports = r
    ? function (e, t, n) {
       return i.f(e, t, o(1, n));
      }
    : function (e, t, n) {
       return (e[t] = n), e;
      };
  },
  9263: function (e, t, n) {
   "use strict";
   var r = n("ad6d"),
    i = n("9f7f"),
    o = RegExp.prototype.exec,
    a = String.prototype.replace,
    u = o,
    c = (function () {
     var e = /a/,
      t = /b*/g;
     return o.call(e, "a"), o.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
    })(),
    s = i.UNSUPPORTED_Y || i.BROKEN_CARET,
    l = void 0 !== /()??/.exec("")[1],
    f = c || l || s;
   f &&
    (u = function (e) {
     var t,
      n,
      i,
      u,
      f = this,
      d = s && f.sticky,
      h = r.call(f),
      p = f.source,
      v = 0,
      g = e;
     return (
      d &&
       ((h = h.replace("y", "")),
       -1 === h.indexOf("g") && (h += "g"),
       (g = String(e).slice(f.lastIndex)),
       f.lastIndex > 0 && (!f.multiline || (f.multiline && "\n" !== e[f.lastIndex - 1])) && ((p = "(?: " + p + ")"), (g = " " + g), v++),
       (n = new RegExp("^(?:" + p + ")", h))),
      l && (n = new RegExp("^" + p + "$(?!\\s)", h)),
      c && (t = f.lastIndex),
      (i = o.call(d ? n : f, g)),
      d ? (i ? ((i.input = i.input.slice(v)), (i[0] = i[0].slice(v)), (i.index = f.lastIndex), (f.lastIndex += i[0].length)) : (f.lastIndex = 0)) : c && i && (f.lastIndex = f.global ? i.index + i[0].length : t),
      l &&
       i &&
       i.length > 1 &&
       a.call(i[0], n, function () {
        for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (i[u] = void 0);
       }),
      i
     );
    }),
    (e.exports = u);
  },
  "94ca": function (e, t, n) {
   var r = n("d039"),
    i = /#|\.prototype\./,
    o = function (e, t) {
     var n = u[a(e)];
     return n == s || (n != c && ("function" == typeof t ? r(t) : !!t));
    },
    a = (o.normalize = function (e) {
     return String(e).replace(i, ".").toLowerCase();
    }),
    u = (o.data = {}),
    c = (o.NATIVE = "N"),
    s = (o.POLYFILL = "P");
   e.exports = o;
  },
  9861: function (e, t, n) {
   "use strict";
   n("e260");
   var r = n("23e7"),
    i = n("d066"),
    o = n("0d3b"),
    a = n("6eeb"),
    u = n("e2cc"),
    c = n("d44e"),
    s = n("9ed3"),
    l = n("69f3"),
    f = n("19aa"),
    d = n("5135"),
    h = n("0366"),
    p = n("f5df"),
    v = n("825a"),
    g = n("861d"),
    m = n("7c73"),
    b = n("5c6c"),
    _ = n("9a1f"),
    y = n("35a1"),
    x = n("b622"),
    w = i("fetch"),
    E = i("Headers"),
    S = x("iterator"),
    A = "URLSearchParams",
    T = A + "Iterator",
    R = l.set,
    O = l.getterFor(A),
    C = l.getterFor(T),
    L = /\+/g,
    D = Array(4),
    k = function (e) {
     return D[e - 1] || (D[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"));
    },
    U = function (e) {
     try {
      return decodeURIComponent(e);
     } catch (t) {
      return e;
     }
    },
    P = function (e) {
     var t = e.replace(L, " "),
      n = 4;
     try {
      return decodeURIComponent(t);
     } catch (r) {
      while (n) t = t.replace(k(n--), U);
      return t;
     }
    },
    I = /[!'()~]|%20/g,
    F = {
     "!": "%21",
     "'": "%27",
     "(": "%28",
     ")": "%29",
     "~": "%7E",
     "%20": "+",
    },
    N = function (e) {
     return F[e];
    },
    B = function (e) {
     return encodeURIComponent(e).replace(I, N);
    },
    M = function (e, t) {
     if (t) {
      var n,
       r,
       i = t.split("&"),
       o = 0;
      while (o < i.length)
       (n = i[o++]),
        n.length &&
         ((r = n.split("=")),
         e.push({
          key: P(r.shift()),
          value: P(r.join("=")),
         }));
     }
    },
    j = function (e) {
     (this.entries.length = 0), M(this.entries, e);
    },
    z = function (e, t) {
     if (e < t) throw TypeError("Not enough arguments");
    },
    G = s(
     function (e, t) {
      R(this, {
       type: T,
       iterator: _(O(e).entries),
       kind: t,
      });
     },
     "Iterator",
     function () {
      var e = C(this),
       t = e.kind,
       n = e.iterator.next(),
       r = n.value;
      return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n;
     }
    ),
    H = function () {
     f(this, H, A);
     var e,
      t,
      n,
      r,
      i,
      o,
      a,
      u,
      c,
      s = arguments.length > 0 ? arguments[0] : void 0,
      l = this,
      h = [];
     if (
      (R(l, {
       type: A,
       entries: h,
       updateURL: function () {},
       updateSearchParams: j,
      }),
      void 0 !== s)
     )
      if (g(s))
       if (((e = y(s)), "function" === typeof e)) {
        (t = e.call(s)), (n = t.next);
        while (!(r = n.call(t)).done) {
         if (((i = _(v(r.value))), (o = i.next), (a = o.call(i)).done || (u = o.call(i)).done || !o.call(i).done)) throw TypeError("Expected sequence with length 2");
         h.push({
          key: a.value + "",
          value: u.value + "",
         });
        }
       } else
        for (c in s)
         d(s, c) &&
          h.push({
           key: c,
           value: s[c] + "",
          });
      else M(h, "string" === typeof s ? ("?" === s.charAt(0) ? s.slice(1) : s) : s + "");
    },
    V = H.prototype;
   u(
    V,
    {
     append: function (e, t) {
      z(arguments.length, 2);
      var n = O(this);
      n.entries.push({
       key: e + "",
       value: t + "",
      }),
       n.updateURL();
     },
     delete: function (e) {
      z(arguments.length, 1);
      var t = O(this),
       n = t.entries,
       r = e + "",
       i = 0;
      while (i < n.length) n[i].key === r ? n.splice(i, 1) : i++;
      t.updateURL();
     },
     get: function (e) {
      z(arguments.length, 1);
      for (var t = O(this).entries, n = e + "", r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
      return null;
     },
     getAll: function (e) {
      z(arguments.length, 1);
      for (var t = O(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value);
      return r;
     },
     has: function (e) {
      z(arguments.length, 1);
      var t = O(this).entries,
       n = e + "",
       r = 0;
      while (r < t.length) if (t[r++].key === n) return !0;
      return !1;
     },
     set: function (e, t) {
      z(arguments.length, 1);
      for (var n, r = O(this), i = r.entries, o = !1, a = e + "", u = t + "", c = 0; c < i.length; c++) (n = i[c]), n.key === a && (o ? i.splice(c--, 1) : ((o = !0), (n.value = u)));
      o ||
       i.push({
        key: a,
        value: u,
       }),
       r.updateURL();
     },
     sort: function () {
      var e,
       t,
       n,
       r = O(this),
       i = r.entries,
       o = i.slice();
      for (i.length = 0, n = 0; n < o.length; n++) {
       for (e = o[n], t = 0; t < n; t++)
        if (i[t].key > e.key) {
         i.splice(t, 0, e);
         break;
        }
       t === n && i.push(e);
      }
      r.updateURL();
     },
     forEach: function (e) {
      var t,
       n = O(this).entries,
       r = h(e, arguments.length > 1 ? arguments[1] : void 0, 3),
       i = 0;
      while (i < n.length) (t = n[i++]), r(t.value, t.key, this);
     },
     keys: function () {
      return new G(this, "keys");
     },
     values: function () {
      return new G(this, "values");
     },
     entries: function () {
      return new G(this, "entries");
     },
    },
    {
     enumerable: !0,
    }
   ),
    a(V, S, V.entries),
    a(
     V,
     "toString",
     function () {
      var e,
       t = O(this).entries,
       n = [],
       r = 0;
      while (r < t.length) (e = t[r++]), n.push(B(e.key) + "=" + B(e.value));
      return n.join("&");
     },
     {
      enumerable: !0,
     }
    ),
    c(H, A),
    r(
     {
      global: !0,
      forced: !o,
     },
     {
      URLSearchParams: H,
     }
    ),
    o ||
     "function" != typeof w ||
     "function" != typeof E ||
     r(
      {
       global: !0,
       enumerable: !0,
       forced: !0,
      },
      {
       fetch: function (e) {
        var t,
         n,
         r,
         i = [e];
        return (
         arguments.length > 1 &&
          ((t = arguments[1]),
          g(t) &&
           ((n = t.body),
           p(n) === A &&
            ((r = t.headers ? new E(t.headers) : new E()),
            r.has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
            (t = m(t, {
             body: b(0, String(n)),
             headers: b(0, r),
            })))),
          i.push(t)),
         w.apply(this, i)
        );
       },
      }
     ),
    (e.exports = {
     URLSearchParams: H,
     getState: O,
    });
  },
  "99af": function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("d039"),
    o = n("e8b5"),
    a = n("861d"),
    u = n("7b0b"),
    c = n("50c4"),
    s = n("8418"),
    l = n("65f0"),
    f = n("1dde"),
    d = n("b622"),
    h = n("2d00"),
    p = d("isConcatSpreadable"),
    v = 9007199254740991,
    g = "Maximum allowed index exceeded",
    m =
     h >= 51 ||
     !i(function () {
      var e = [];
      return (e[p] = !1), e.concat()[0] !== e;
     }),
    b = f("concat"),
    _ = function (e) {
     if (!a(e)) return !1;
     var t = e[p];
     return void 0 !== t ? !!t : o(e);
    },
    y = !m || !b;
   r(
    {
     target: "Array",
     proto: !0,
     forced: y,
    },
    {
     concat: function (e) {
      var t,
       n,
       r,
       i,
       o,
       a = u(this),
       f = l(a, 0),
       d = 0;
      for (t = -1, r = arguments.length; t < r; t++)
       if (((o = -1 === t ? a : arguments[t]), _(o))) {
        if (((i = c(o.length)), d + i > v)) throw TypeError(g);
        for (n = 0; n < i; n++, d++) n in o && s(f, d, o[n]);
       } else {
        if (d >= v) throw TypeError(g);
        s(f, d++, o);
       }
      return (f.length = d), f;
     },
    }
   );
  },
  "9a1f": function (e, t, n) {
   var r = n("825a"),
    i = n("35a1");
   e.exports = function (e) {
    var t = i(e);
    if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
    return r(t.call(e));
   };
  },
  "9a8c": function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("145e"),
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("copyWithin", function (e, t) {
    return i.call(o(this), e, t, arguments.length > 2 ? arguments[2] : void 0);
   });
  },
  "9bdd": function (e, t, n) {
   var r = n("825a"),
    i = n("2a62");
   e.exports = function (e, t, n, o) {
    try {
     return o ? t(r(n)[0], n[1]) : t(n);
    } catch (a) {
     throw (i(e), a);
    }
   };
  },
  "9bf2": function (e, t, n) {
   var r = n("83ab"),
    i = n("0cfb"),
    o = n("825a"),
    a = n("c04e"),
    u = Object.defineProperty;
   t.f = r
    ? u
    : function (e, t, n) {
       if ((o(e), (t = a(t, !0)), o(n), i))
        try {
         return u(e, t, n);
        } catch (r) {}
       if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
       return "value" in n && (e[t] = n.value), e;
      };
  },
  "9ed3": function (e, t, n) {
   "use strict";
   var r = n("ae93").IteratorPrototype,
    i = n("7c73"),
    o = n("5c6c"),
    a = n("d44e"),
    u = n("3f8c"),
    c = function () {
     return this;
    };
   e.exports = function (e, t, n) {
    var s = t + " Iterator";
    return (
     (e.prototype = i(r, {
      next: o(1, n),
     })),
     a(e, s, !1, !0),
     (u[s] = c),
     e
    );
   };
  },
  "9f7f": function (e, t, n) {
   "use strict";
   var r = n("d039");

   function i(e, t) {
    return RegExp(e, t);
   }
   (t.UNSUPPORTED_Y = r(function () {
    var e = i("a", "y");
    return (e.lastIndex = 2), null != e.exec("abcd");
   })),
    (t.BROKEN_CARET = r(function () {
     var e = i("^r", "gy");
     return (e.lastIndex = 2), null != e.exec("str");
    }));
  },
  a078: function (e, t, n) {
   var r = n("7b0b"),
    i = n("50c4"),
    o = n("35a1"),
    a = n("e95a"),
    u = n("0366"),
    c = n("ebb5").aTypedArrayConstructor;
   e.exports = function (e) {
    var t,
     n,
     s,
     l,
     f,
     d,
     h = r(e),
     p = arguments.length,
     v = p > 1 ? arguments[1] : void 0,
     g = void 0 !== v,
     m = o(h);
    if (void 0 != m && !a(m)) {
     (f = m.call(h)), (d = f.next), (h = []);
     while (!(l = d.call(f)).done) h.push(l.value);
    }
    for (g && p > 2 && (v = u(v, arguments[2], 2)), n = i(h.length), s = new (c(this))(n), t = 0; n > t; t++) s[t] = g ? v(h[t], t) : h[t];
    return s;
   };
  },
  a15b: function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("44ad"),
    o = n("fc6a"),
    a = n("a640"),
    u = [].join,
    c = i != Object,
    s = a("join", ",");
   r(
    {
     target: "Array",
     proto: !0,
     forced: c || !s,
    },
    {
     join: function (e) {
      return u.call(o(this), void 0 === e ? "," : e);
     },
    }
   );
  },
  a434: function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("23cb"),
    o = n("a691"),
    a = n("50c4"),
    u = n("7b0b"),
    c = n("65f0"),
    s = n("8418"),
    l = n("1dde"),
    f = n("ae40"),
    d = l("splice"),
    h = f("splice", {
     ACCESSORS: !0,
     0: 0,
     1: 2,
    }),
    p = Math.max,
    v = Math.min,
    g = 9007199254740991,
    m = "Maximum allowed length exceeded";
   r(
    {
     target: "Array",
     proto: !0,
     forced: !d || !h,
    },
    {
     splice: function (e, t) {
      var n,
       r,
       l,
       f,
       d,
       h,
       b = u(this),
       _ = a(b.length),
       y = i(e, _),
       x = arguments.length;
      if ((0 === x ? (n = r = 0) : 1 === x ? ((n = 0), (r = _ - y)) : ((n = x - 2), (r = v(p(o(t), 0), _ - y))), _ + n - r > g)) throw TypeError(m);
      for (l = c(b, r), f = 0; f < r; f++) (d = y + f), d in b && s(l, f, b[d]);
      if (((l.length = r), n < r)) {
       for (f = y; f < _ - r; f++) (d = f + r), (h = f + n), d in b ? (b[h] = b[d]) : delete b[h];
       for (f = _; f > _ - r + n; f--) delete b[f - 1];
      } else if (n > r) for (f = _ - r; f > y; f--) (d = f + r - 1), (h = f + n - 1), d in b ? (b[h] = b[d]) : delete b[h];
      for (f = 0; f < n; f++) b[f + y] = arguments[f + 2];
      return (b.length = _ - r + n), l;
     },
    }
   );
  },
  a4d3: function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("da84"),
    o = n("d066"),
    a = n("c430"),
    u = n("83ab"),
    c = n("4930"),
    s = n("fdbf"),
    l = n("d039"),
    f = n("5135"),
    d = n("e8b5"),
    h = n("861d"),
    p = n("825a"),
    v = n("7b0b"),
    g = n("fc6a"),
    m = n("c04e"),
    b = n("5c6c"),
    _ = n("7c73"),
    y = n("df75"),
    x = n("241c"),
    w = n("057f"),
    E = n("7418"),
    S = n("06cf"),
    A = n("9bf2"),
    T = n("d1e7"),
    R = n("9112"),
    O = n("6eeb"),
    C = n("5692"),
    L = n("f772"),
    D = n("d012"),
    k = n("90e3"),
    U = n("b622"),
    P = n("e538"),
    I = n("746f"),
    F = n("d44e"),
    N = n("69f3"),
    B = n("b727").forEach,
    M = L("hidden"),
    j = "Symbol",
    z = "prototype",
    G = U("toPrimitive"),
    H = N.set,
    V = N.getterFor(j),
    X = Object[z],
    Y = i.Symbol,
    W = o("JSON", "stringify"),
    q = S.f,
    K = A.f,
    $ = w.f,
    J = T.f,
    Q = C("symbols"),
    Z = C("op-symbols"),
    ee = C("string-to-symbol-registry"),
    te = C("symbol-to-string-registry"),
    ne = C("wks"),
    re = i.QObject,
    ie = !re || !re[z] || !re[z].findChild,
    oe =
     u &&
     l(function () {
      return (
       7 !=
       _(
        K({}, "a", {
         get: function () {
          return K(this, "a", {
           value: 7,
          }).a;
         },
        })
       ).a
      );
     })
      ? function (e, t, n) {
         var r = q(X, t);
         r && delete X[t], K(e, t, n), r && e !== X && K(X, t, r);
        }
      : K,
    ae = function (e, t) {
     var n = (Q[e] = _(Y[z]));
     return (
      H(n, {
       type: j,
       tag: e,
       description: t,
      }),
      u || (n.description = t),
      n
     );
    },
    ue = s
     ? function (e) {
        return "symbol" == typeof e;
       }
     : function (e) {
        return Object(e) instanceof Y;
       },
    ce = function (e, t, n) {
     e === X && ce(Z, t, n), p(e);
     var r = m(t, !0);
     return (
      p(n),
      f(Q, r)
       ? (n.enumerable
          ? (f(e, M) && e[M][r] && (e[M][r] = !1),
            (n = _(n, {
             enumerable: b(0, !1),
            })))
          : (f(e, M) || K(e, M, b(1, {})), (e[M][r] = !0)),
         oe(e, r, n))
       : K(e, r, n)
     );
    },
    se = function (e, t) {
     p(e);
     var n = g(t),
      r = y(n).concat(pe(n));
     return (
      B(r, function (t) {
       (u && !fe.call(n, t)) || ce(e, t, n[t]);
      }),
      e
     );
    },
    le = function (e, t) {
     return void 0 === t ? _(e) : se(_(e), t);
    },
    fe = function (e) {
     var t = m(e, !0),
      n = J.call(this, t);
     return !(this === X && f(Q, t) && !f(Z, t)) && (!(n || !f(this, t) || !f(Q, t) || (f(this, M) && this[M][t])) || n);
    },
    de = function (e, t) {
     var n = g(e),
      r = m(t, !0);
     if (n !== X || !f(Q, r) || f(Z, r)) {
      var i = q(n, r);
      return !i || !f(Q, r) || (f(n, M) && n[M][r]) || (i.enumerable = !0), i;
     }
    },
    he = function (e) {
     var t = $(g(e)),
      n = [];
     return (
      B(t, function (e) {
       f(Q, e) || f(D, e) || n.push(e);
      }),
      n
     );
    },
    pe = function (e) {
     var t = e === X,
      n = $(t ? Z : g(e)),
      r = [];
     return (
      B(n, function (e) {
       !f(Q, e) || (t && !f(X, e)) || r.push(Q[e]);
      }),
      r
     );
    };
   if (
    (c ||
     ((Y = function () {
      if (this instanceof Y) throw TypeError("Symbol is not a constructor");
      var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
       t = k(e),
       n = function (e) {
        this === X && n.call(Z, e), f(this, M) && f(this[M], t) && (this[M][t] = !1), oe(this, t, b(1, e));
       };
      return (
       u &&
        ie &&
        oe(X, t, {
         configurable: !0,
         set: n,
        }),
       ae(t, e)
      );
     }),
     O(Y[z], "toString", function () {
      return V(this).tag;
     }),
     O(Y, "withoutSetter", function (e) {
      return ae(k(e), e);
     }),
     (T.f = fe),
     (A.f = ce),
     (S.f = de),
     (x.f = w.f = he),
     (E.f = pe),
     (P.f = function (e) {
      return ae(U(e), e);
     }),
     u &&
      (K(Y[z], "description", {
       configurable: !0,
       get: function () {
        return V(this).description;
       },
      }),
      a ||
       O(X, "propertyIsEnumerable", fe, {
        unsafe: !0,
       }))),
    r(
     {
      global: !0,
      wrap: !0,
      forced: !c,
      sham: !c,
     },
     {
      Symbol: Y,
     }
    ),
    B(y(ne), function (e) {
     I(e);
    }),
    r(
     {
      target: j,
      stat: !0,
      forced: !c,
     },
     {
      for: function (e) {
       var t = String(e);
       if (f(ee, t)) return ee[t];
       var n = Y(t);
       return (ee[t] = n), (te[n] = t), n;
      },
      keyFor: function (e) {
       if (!ue(e)) throw TypeError(e + " is not a symbol");
       if (f(te, e)) return te[e];
      },
      useSetter: function () {
       ie = !0;
      },
      useSimple: function () {
       ie = !1;
      },
     }
    ),
    r(
     {
      target: "Object",
      stat: !0,
      forced: !c,
      sham: !u,
     },
     {
      create: le,
      defineProperty: ce,
      defineProperties: se,
      getOwnPropertyDescriptor: de,
     }
    ),
    r(
     {
      target: "Object",
      stat: !0,
      forced: !c,
     },
     {
      getOwnPropertyNames: he,
      getOwnPropertySymbols: pe,
     }
    ),
    r(
     {
      target: "Object",
      stat: !0,
      forced: l(function () {
       E.f(1);
      }),
     },
     {
      getOwnPropertySymbols: function (e) {
       return E.f(v(e));
      },
     }
    ),
    W)
   ) {
    var ve =
     !c ||
     l(function () {
      var e = Y();
      return (
       "[null]" != W([e]) ||
       "{}" !=
        W({
         a: e,
        }) ||
       "{}" != W(Object(e))
      );
     });
    r(
     {
      target: "JSON",
      stat: !0,
      forced: ve,
     },
     {
      stringify: function (e, t, n) {
       var r,
        i = [e],
        o = 1;
       while (arguments.length > o) i.push(arguments[o++]);
       if (((r = t), (h(t) || void 0 !== e) && !ue(e)))
        return (
         d(t) ||
          (t = function (e, t) {
           if (("function" == typeof r && (t = r.call(this, e, t)), !ue(t))) return t;
          }),
         (i[1] = t),
         W.apply(null, i)
        );
      },
     }
    );
   }
   Y[z][G] || R(Y[z], G, Y[z].valueOf), F(Y, j), (D[M] = !0);
  },
  a640: function (e, t, n) {
   "use strict";
   var r = n("d039");
   e.exports = function (e, t) {
    var n = [][e];
    return (
     !!n &&
     r(function () {
      n.call(
       null,
       t ||
        function () {
         throw 1;
        },
       1
      );
     })
    );
   };
  },
  a691: function (e, t) {
   var n = Math.ceil,
    r = Math.floor;
   e.exports = function (e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
   };
  },
  a975: function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("b727").every,
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("every", function (e) {
    return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
   });
  },
  a981: function (e, t) {
   e.exports = "undefined" !== typeof ArrayBuffer && "undefined" !== typeof DataView;
  },
  ac1f: function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("9263");
   r(
    {
     target: "RegExp",
     proto: !0,
     forced: /./.exec !== i,
    },
    {
     exec: i,
    }
   );
  },
  ad6d: function (e, t, n) {
   "use strict";
   var r = n("825a");
   e.exports = function () {
    var e = r(this),
     t = "";
    return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
   };
  },
  ae40: function (e, t, n) {
   var r = n("83ab"),
    i = n("d039"),
    o = n("5135"),
    a = Object.defineProperty,
    u = {},
    c = function (e) {
     throw e;
    };
   e.exports = function (e, t) {
    if (o(u, e)) return u[e];
    t || (t = {});
    var n = [][e],
     s = !!o(t, "ACCESSORS") && t.ACCESSORS,
     l = o(t, 0) ? t[0] : c,
     f = o(t, 1) ? t[1] : void 0;
    return (u[e] =
     !!n &&
     !i(function () {
      if (s && !r) return !0;
      var e = {
       length: -1,
      };
      s
       ? a(e, 1, {
          enumerable: !0,
          get: c,
         })
       : (e[1] = 1),
       n.call(e, l, f);
     }));
   };
  },
  ae93: function (e, t, n) {
   "use strict";
   var r,
    i,
    o,
    a = n("e163"),
    u = n("9112"),
    c = n("5135"),
    s = n("b622"),
    l = n("c430"),
    f = s("iterator"),
    d = !1,
    h = function () {
     return this;
    };
   [].keys && ((o = [].keys()), "next" in o ? ((i = a(a(o))), i !== Object.prototype && (r = i)) : (d = !0)),
    void 0 == r && (r = {}),
    l || c(r, f) || u(r, f, h),
    (e.exports = {
     IteratorPrototype: r,
     BUGGY_SAFARI_ITERATORS: d,
    });
  },
  b041: function (e, t, n) {
   "use strict";
   var r = n("00ee"),
    i = n("f5df");
   e.exports = r
    ? {}.toString
    : function () {
       return "[object " + i(this) + "]";
      };
  },
  b0c0: function (e, t, n) {
   var r = n("83ab"),
    i = n("9bf2").f,
    o = Function.prototype,
    a = o.toString,
    u = /^\s*function ([^ (]*)/,
    c = "name";
   r &&
    !(c in o) &&
    i(o, c, {
     configurable: !0,
     get: function () {
      try {
       return a.call(this).match(u)[1];
      } catch (e) {
       return "";
      }
     },
    });
  },
  b39a: function (e, t, n) {
   "use strict";
   var r = n("da84"),
    i = n("ebb5"),
    o = n("d039"),
    a = r.Int8Array,
    u = i.aTypedArray,
    c = i.exportTypedArrayMethod,
    s = [].toLocaleString,
    l = [].slice,
    f =
     !!a &&
     o(function () {
      s.call(new a(1));
     }),
    d =
     o(function () {
      return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString();
     }) ||
     !o(function () {
      a.prototype.toLocaleString.call([1, 2]);
     });
   c(
    "toLocaleString",
    function () {
     return s.apply(f ? l.call(u(this)) : u(this), arguments);
    },
    d
   );
  },
  b622: function (e, t, n) {
   var r = n("da84"),
    i = n("5692"),
    o = n("5135"),
    a = n("90e3"),
    u = n("4930"),
    c = n("fdbf"),
    s = i("wks"),
    l = r.Symbol,
    f = c ? l : (l && l.withoutSetter) || a;
   e.exports = function (e) {
    return o(s, e) || (u && o(l, e) ? (s[e] = l[e]) : (s[e] = f("Symbol." + e))), s[e];
   };
  },
  b64b: function (e, t, n) {
   var r = n("23e7"),
    i = n("7b0b"),
    o = n("df75"),
    a = n("d039"),
    u = a(function () {
     o(1);
    });
   r(
    {
     target: "Object",
     stat: !0,
     forced: u,
    },
    {
     keys: function (e) {
      return o(i(e));
     },
    }
   );
  },
  b680: function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("a691"),
    o = n("408a"),
    a = n("1148"),
    u = n("d039"),
    c = (1).toFixed,
    s = Math.floor,
    l = function (e, t, n) {
     return 0 === t ? n : t % 2 === 1 ? l(e, t - 1, n * e) : l(e * e, t / 2, n);
    },
    f = function (e) {
     var t = 0,
      n = e;
     while (n >= 4096) (t += 12), (n /= 4096);
     while (n >= 2) (t += 1), (n /= 2);
     return t;
    },
    d =
     (c && ("0.000" !== (8e-5).toFixed(3) || "1" !== (0.9).toFixed(0) || "1.25" !== (1.255).toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
     !u(function () {
      c.call({});
     });
   r(
    {
     target: "Number",
     proto: !0,
     forced: d,
    },
    {
     toFixed: function (e) {
      var t,
       n,
       r,
       u,
       c = o(this),
       d = i(e),
       h = [0, 0, 0, 0, 0, 0],
       p = "",
       v = "0",
       g = function (e, t) {
        var n = -1,
         r = t;
        while (++n < 6) (r += e * h[n]), (h[n] = r % 1e7), (r = s(r / 1e7));
       },
       m = function (e) {
        var t = 6,
         n = 0;
        while (--t >= 0) (n += h[t]), (h[t] = s(n / e)), (n = (n % e) * 1e7);
       },
       b = function () {
        var e = 6,
         t = "";
        while (--e >= 0)
         if ("" !== t || 0 === e || 0 !== h[e]) {
          var n = String(h[e]);
          t = "" === t ? n : t + a.call("0", 7 - n.length) + n;
         }
        return t;
       };
      if (d < 0 || d > 20) throw RangeError("Incorrect fraction digits");
      if (c != c) return "NaN";
      if (c <= -1e21 || c >= 1e21) return String(c);
      if ((c < 0 && ((p = "-"), (c = -c)), c > 1e-21))
       if (((t = f(c * l(2, 69, 1)) - 69), (n = t < 0 ? c * l(2, -t, 1) : c / l(2, t, 1)), (n *= 4503599627370496), (t = 52 - t), t > 0)) {
        g(0, n), (r = d);
        while (r >= 7) g(1e7, 0), (r -= 7);
        g(l(10, r, 1), 0), (r = t - 1);
        while (r >= 23) m(1 << 23), (r -= 23);
        m(1 << r), g(1, 1), m(2), (v = b());
       } else g(0, n), g(1 << -t, 0), (v = b() + a.call("0", d));
      return d > 0 ? ((u = v.length), (v = p + (u <= d ? "0." + a.call("0", d - u) + v : v.slice(0, u - d) + "." + v.slice(u - d)))) : (v = p + v), v;
     },
    }
   );
  },
  b727: function (e, t, n) {
   var r = n("0366"),
    i = n("44ad"),
    o = n("7b0b"),
    a = n("50c4"),
    u = n("65f0"),
    c = [].push,
    s = function (e) {
     var t = 1 == e,
      n = 2 == e,
      s = 3 == e,
      l = 4 == e,
      f = 6 == e,
      d = 5 == e || f;
     return function (h, p, v, g) {
      for (var m, b, _ = o(h), y = i(_), x = r(p, v, 3), w = a(y.length), E = 0, S = g || u, A = t ? S(h, w) : n ? S(h, 0) : void 0; w > E; E++)
       if ((d || E in y) && ((m = y[E]), (b = x(m, E, _)), e))
        if (t) A[E] = b;
        else if (b)
         switch (e) {
          case 3:
           return !0;
          case 5:
           return m;
          case 6:
           return E;
          case 2:
           c.call(A, m);
         }
        else if (l) return !1;
      return f ? -1 : s || l ? l : A;
     };
    };
   e.exports = {
    forEach: s(0),
    map: s(1),
    filter: s(2),
    some: s(3),
    every: s(4),
    find: s(5),
    findIndex: s(6),
   };
  },
  be69: function (e, t, n) {
   var r, i, o;
   n("a4d3"),
    n("e01a"),
    n("d28b"),
    n("99af"),
    n("4160"),
    n("c975"),
    n("e260"),
    n("a15b"),
    n("fb6a"),
    n("a434"),
    n("b0c0"),
    n("b680"),
    n("e439"),
    n("3410"),
    n("b64b"),
    n("d3b7"),
    n("4d63"),
    n("ac1f"),
    n("25f0"),
    n("3ca3"),
    n("466d"),
    n("5319"),
    n("1276"),
    n("159b"),
    n("ddb0");
   var a = n("7037");
   !(function (n, u) {
    "object" == a(t) && "undefined" != typeof e ? u(t) : ((i = [t]), (r = u), (o = "function" === typeof r ? r.apply(t, i) : r), void 0 === o || (e.exports = o));
   })(0, function (e) {
    "use strict";

    function t(e, t) {
     var n = e.__state.conversionName.toString(),
      r = Math.round(e.r),
      i = Math.round(e.g),
      o = Math.round(e.b),
      a = e.a,
      u = Math.round(e.h),
      c = e.s.toFixed(1),
      s = e.v.toFixed(1);
     if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
      for (var l = e.hex.toString(16); l.length < 6; ) l = "0" + l;
      return "#" + l;
     }
     return "CSS_RGB" === n
      ? "rgb(" + r + "," + i + "," + o + ")"
      : "CSS_RGBA" === n
      ? "rgba(" + r + "," + i + "," + o + "," + a + ")"
      : "HEX" === n
      ? "0x" + e.hex.toString(16)
      : "RGB_ARRAY" === n
      ? "[" + r + "," + i + "," + o + "]"
      : "RGBA_ARRAY" === n
      ? "[" + r + "," + i + "," + o + "," + a + "]"
      : "RGB_OBJ" === n
      ? "{r:" + r + ",g:" + i + ",b:" + o + "}"
      : "RGBA_OBJ" === n
      ? "{r:" + r + ",g:" + i + ",b:" + o + ",a:" + a + "}"
      : "HSV_OBJ" === n
      ? "{h:" + u + ",s:" + c + ",v:" + s + "}"
      : "HSVA_OBJ" === n
      ? "{h:" + u + ",s:" + c + ",v:" + s + ",a:" + a + "}"
      : "unknown format";
    }

    function n(e, t, n) {
     Object.defineProperty(e, t, {
      get: function () {
       return "RGB" === this.__state.space || z.recalculateRGB(this, t, n), this.__state[t];
      },
      set: function (e) {
       "RGB" !== this.__state.space && (z.recalculateRGB(this, t, n), (this.__state.space = "RGB")), (this.__state[t] = e);
      },
     });
    }

    function r(e, t) {
     Object.defineProperty(e, t, {
      get: function () {
       return "HSV" === this.__state.space || z.recalculateHSV(this), this.__state[t];
      },
      set: function (e) {
       "HSV" !== this.__state.space && (z.recalculateHSV(this), (this.__state.space = "HSV")), (this.__state[t] = e);
      },
     });
    }

    function i(e) {
     if ("0" === e || O.isUndefined(e)) return 0;
     var t = e.match(X);
     return O.isNull(t) ? 0 : parseFloat(t[1]);
    }

    function o(e) {
     var t = e.toString();
     return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0;
    }

    function u(e, t) {
     var n = Math.pow(10, t);
     return Math.round(e * n) / n;
    }

    function c(e, t, n, r, i) {
     return r + ((e - t) / (n - t)) * (i - r);
    }

    function s(e, t, n, r) {
     (e.style.background = ""),
      O.each(te, function (i) {
       e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + r + " 100%); ";
      });
    }

    function l(e) {
     (e.style.background = ""),
      (e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);"),
      (e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
      (e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
      (e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
      (e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);");
    }

    function f(e, t, n) {
     var r = document.createElement("li");
     return t && r.appendChild(t), n ? e.__ul.insertBefore(r, n) : e.__ul.appendChild(r), e.onResize(), r;
    }

    function d(e) {
     Y.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && Y.unbind(window, "unload", e.saveToLocalStorageIfPossible);
    }

    function h(e, t) {
     var n = e.__preset_select[e.__preset_select.selectedIndex];
     n.innerHTML = t ? n.value + "*" : n.value;
    }

    function p(e, t, n) {
     if (
      ((n.__li = t),
      (n.__gui = e),
      O.extend(n, {
       options: function (t) {
        if (arguments.length > 1) {
         var r = n.__li.nextElementSibling;
         return (
          n.remove(),
          g(e, n.object, n.property, {
           before: r,
           factoryArgs: [O.toArray(arguments)],
          })
         );
        }
        if (O.isArray(t) || O.isObject(t)) {
         var i = n.__li.nextElementSibling;
         return (
          n.remove(),
          g(e, n.object, n.property, {
           before: i,
           factoryArgs: [t],
          })
         );
        }
       },
       name: function (e) {
        return (n.__li.firstElementChild.firstElementChild.innerHTML = e), n;
       },
       listen: function () {
        return n.__gui.listen(n), n;
       },
       remove: function () {
        return n.__gui.remove(n), n;
       },
      }),
      n instanceof Q)
     ) {
      var r = new J(n.object, n.property, {
       min: n.__min,
       max: n.__max,
       step: n.__step,
      });
      O.each(["updateDisplay", "onChange", "onFinishChange", "step"], function (e) {
       var t = n[e],
        i = r[e];
       n[e] = r[e] = function () {
        var e = Array.prototype.slice.call(arguments);
        return i.apply(r, e), t.apply(n, e);
       };
      }),
       Y.addClass(t, "has-slider"),
       n.domElement.insertBefore(r.domElement, n.domElement.firstElementChild);
     } else if (n instanceof J) {
      var i = function (t) {
       if (O.isNumber(n.__min) && O.isNumber(n.__max)) {
        var r = n.__li.firstElementChild.firstElementChild.innerHTML,
         i = n.__gui.__listening.indexOf(n) > -1;
        n.remove();
        var o = g(e, n.object, n.property, {
         before: n.__li.nextElementSibling,
         factoryArgs: [n.__min, n.__max, n.__step],
        });
        return o.name(r), i && o.listen(), o;
       }
       return t;
      };
      (n.min = O.compose(i, n.min)), (n.max = O.compose(i, n.max));
     } else
      n instanceof W
       ? (Y.bind(t, "click", function () {
          Y.fakeEvent(n.__checkbox, "click");
         }),
         Y.bind(n.__checkbox, "click", function (e) {
          e.stopPropagation();
         }))
       : n instanceof Z
       ? (Y.bind(t, "click", function () {
          Y.fakeEvent(n.__button, "click");
         }),
         Y.bind(t, "mouseover", function () {
          Y.addClass(n.__button, "hover");
         }),
         Y.bind(t, "mouseout", function () {
          Y.removeClass(n.__button, "hover");
         }))
       : n instanceof ee &&
         (Y.addClass(t, "color"),
         (n.updateDisplay = O.compose(function (e) {
          return (t.style.borderLeftColor = n.__color.toString()), e;
         }, n.updateDisplay)),
         n.updateDisplay());
     n.setValue = O.compose(function (t) {
      return e.getRoot().__preset_select && n.isModified() && h(e.getRoot(), !0), t;
     }, n.setValue);
    }

    function v(e, t) {
     var n = e.getRoot(),
      r = n.__rememberedObjects.indexOf(t.object);
     if (-1 !== r) {
      var i = n.__rememberedObjectIndecesToControllers[r];
      if ((void 0 === i && ((i = {}), (n.__rememberedObjectIndecesToControllers[r] = i)), (i[t.property] = t), n.load && n.load.remembered)) {
       var o = n.load.remembered,
        a = void 0;
       if (o[e.preset]) a = o[e.preset];
       else {
        if (!o[ue]) return;
        a = o[ue];
       }
       if (a[r] && void 0 !== a[r][t.property]) {
        var u = a[r][t.property];
        (t.initialValue = u), t.setValue(u);
       }
      }
     }
    }

    function g(e, t, n, r) {
     if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');
     var i = void 0;
     if (r.color) i = new ee(t, n);
     else {
      var o = [t, n].concat(r.factoryArgs);
      i = re.apply(e, o);
     }
     r.before instanceof G && (r.before = r.before.__li), v(e, i), Y.addClass(i.domElement, "c");
     var a = document.createElement("span");
     Y.addClass(a, "property-name"), (a.innerHTML = i.property);
     var u = document.createElement("div");
     u.appendChild(a), u.appendChild(i.domElement);
     var c = f(e, u, r.before);
     return Y.addClass(c, pe.CLASS_CONTROLLER_ROW), i instanceof ee ? Y.addClass(c, "color") : Y.addClass(c, I(i.getValue())), p(e, c, i), e.__controllers.push(i), i;
    }

    function m(e, t) {
     return document.location.href + "." + t;
    }

    function b(e, t, n) {
     var r = document.createElement("option");
     (r.innerHTML = t), (r.value = t), e.__preset_select.appendChild(r), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
    }

    function _(e, t) {
     t.style.display = e.useLocalStorage ? "block" : "none";
    }

    function y(e) {
     var t = (e.__save_row = document.createElement("li"));
     Y.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), Y.addClass(t, "save-row");
     var n = document.createElement("span");
     (n.innerHTML = "&nbsp;"), Y.addClass(n, "button gears");
     var r = document.createElement("span");
     (r.innerHTML = "Save"), Y.addClass(r, "button"), Y.addClass(r, "save");
     var i = document.createElement("span");
     (i.innerHTML = "New"), Y.addClass(i, "button"), Y.addClass(i, "save-as");
     var o = document.createElement("span");
     (o.innerHTML = "Revert"), Y.addClass(o, "button"), Y.addClass(o, "revert");
     var a = (e.__preset_select = document.createElement("select"));
     if (
      (e.load && e.load.remembered
       ? O.each(e.load.remembered, function (t, n) {
          b(e, n, n === e.preset);
         })
       : b(e, ue, !1),
      Y.bind(a, "change", function () {
       for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
       e.preset = this.value;
      }),
      t.appendChild(a),
      t.appendChild(n),
      t.appendChild(r),
      t.appendChild(i),
      t.appendChild(o),
      ce)
     ) {
      var u = document.getElementById("dg-local-explain"),
       c = document.getElementById("dg-local-storage");
      (document.getElementById("dg-save-locally").style.display = "block"),
       "true" === localStorage.getItem(m(e, "isLocal")) && c.setAttribute("checked", "checked"),
       _(e, u),
       Y.bind(c, "change", function () {
        (e.useLocalStorage = !e.useLocalStorage), _(e, u);
       });
     }
     var s = document.getElementById("dg-new-constructor");
     Y.bind(s, "keydown", function (e) {
      !e.metaKey || (67 !== e.which && 67 !== e.keyCode) || se.hide();
     }),
      Y.bind(n, "click", function () {
       (s.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2)), se.show(), s.focus(), s.select();
      }),
      Y.bind(r, "click", function () {
       e.save();
      }),
      Y.bind(i, "click", function () {
       var t = prompt("Enter a new preset name.");
       t && e.saveAs(t);
      }),
      Y.bind(o, "click", function () {
       e.revert();
      });
    }

    function x(e) {
     function t(t) {
      return t.preventDefault(), (e.width += i - t.clientX), e.onResize(), (i = t.clientX), !1;
     }

     function n() {
      Y.removeClass(e.__closeButton, pe.CLASS_DRAG), Y.unbind(window, "mousemove", t), Y.unbind(window, "mouseup", n);
     }

     function r(r) {
      return r.preventDefault(), (i = r.clientX), Y.addClass(e.__closeButton, pe.CLASS_DRAG), Y.bind(window, "mousemove", t), Y.bind(window, "mouseup", n), !1;
     }
     var i = void 0;
     (e.__resize_handle = document.createElement("div")),
      O.extend(e.__resize_handle.style, {
       width: "6px",
       marginLeft: "-3px",
       height: "200px",
       cursor: "ew-resize",
       position: "absolute",
      }),
      Y.bind(e.__resize_handle, "mousedown", r),
      Y.bind(e.__closeButton, "mousedown", r),
      e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild);
    }

    function w(e, t) {
     (e.domElement.style.width = t + "px"), e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px");
    }

    function E(e, t) {
     var n = {};
     return (
      O.each(e.__rememberedObjects, function (r, i) {
       var o = {},
        a = e.__rememberedObjectIndecesToControllers[i];
       O.each(a, function (e, n) {
        o[n] = t ? e.initialValue : e.getValue();
       }),
        (n[i] = o);
      }),
      n
     );
    }

    function S(e) {
     for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t);
    }

    function A(e) {
     0 !== e.length &&
      ie.call(window, function () {
       A(e);
      }),
      O.each(e, function (e) {
       e.updateDisplay();
      });
    }
    var T = Array.prototype.forEach,
     R = Array.prototype.slice,
     O = {
      BREAK: {},
      extend: function (e) {
       return (
        this.each(
         R.call(arguments, 1),
         function (t) {
          (this.isObject(t) ? Object.keys(t) : []).forEach(
           function (n) {
            this.isUndefined(t[n]) || (e[n] = t[n]);
           }.bind(this)
          );
         },
         this
        ),
        e
       );
      },
      defaults: function (e) {
       return (
        this.each(
         R.call(arguments, 1),
         function (t) {
          (this.isObject(t) ? Object.keys(t) : []).forEach(
           function (n) {
            this.isUndefined(e[n]) && (e[n] = t[n]);
           }.bind(this)
          );
         },
         this
        ),
        e
       );
      },
      compose: function () {
       var e = R.call(arguments);
       return function () {
        for (var t = R.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
        return t[0];
       };
      },
      each: function (e, t, n) {
       if (e)
        if (T && e.forEach && e.forEach === T) e.forEach(t, n);
        else if (e.length === e.length + 0) {
         var r = void 0,
          i = void 0;
         for (r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === this.BREAK) return;
        } else for (var o in e) if (t.call(n, e[o], o) === this.BREAK) return;
      },
      defer: function (e) {
       setTimeout(e, 0);
      },
      debounce: function (e, t, n) {
       var r = void 0;
       return function () {
        var i = this,
         o = arguments,
         a = n || !r;
        clearTimeout(r),
         (r = setTimeout(function () {
          (r = null), n || e.apply(i, o);
         }, t)),
         a && e.apply(i, o);
       };
      },
      toArray: function (e) {
       return e.toArray ? e.toArray() : R.call(e);
      },
      isUndefined: function (e) {
       return void 0 === e;
      },
      isNull: function (e) {
       return null === e;
      },
      isNaN: (function (e) {
       function t(t) {
        return e.apply(this, arguments);
       }
       return (
        (t.toString = function () {
         return e.toString();
        }),
        t
       );
      })(function (e) {
       return isNaN(e);
      }),
      isArray:
       Array.isArray ||
       function (e) {
        return e.constructor === Array;
       },
      isObject: function (e) {
       return e === Object(e);
      },
      isNumber: function (e) {
       return e === e + 0;
      },
      isString: function (e) {
       return e === e + "";
      },
      isBoolean: function (e) {
       return !1 === e || !0 === e;
      },
      isFunction: function (e) {
       return "[object Function]" === Object.prototype.toString.call(e);
      },
     },
     C = [
      {
       litmus: O.isString,
       conversions: {
        THREE_CHAR_HEX: {
         read: function (e) {
          var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
          return (
           null !== t && {
            space: "HEX",
            hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0),
           }
          );
         },
         write: t,
        },
        SIX_CHAR_HEX: {
         read: function (e) {
          var t = e.match(/^#([A-F0-9]{6})$/i);
          return (
           null !== t && {
            space: "HEX",
            hex: parseInt("0x" + t[1].toString(), 0),
           }
          );
         },
         write: t,
        },
        CSS_RGB: {
         read: function (e) {
          var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
          return (
           null !== t && {
            space: "RGB",
            r: parseFloat(t[1]),
            g: parseFloat(t[2]),
            b: parseFloat(t[3]),
           }
          );
         },
         write: t,
        },
        CSS_RGBA: {
         read: function (e) {
          var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
          return (
           null !== t && {
            space: "RGB",
            r: parseFloat(t[1]),
            g: parseFloat(t[2]),
            b: parseFloat(t[3]),
            a: parseFloat(t[4]),
           }
          );
         },
         write: t,
        },
       },
      },
      {
       litmus: O.isNumber,
       conversions: {
        HEX: {
         read: function (e) {
          return {
           space: "HEX",
           hex: e,
           conversionName: "HEX",
          };
         },
         write: function (e) {
          return e.hex;
         },
        },
       },
      },
      {
       litmus: O.isArray,
       conversions: {
        RGB_ARRAY: {
         read: function (e) {
          return (
           3 === e.length && {
            space: "RGB",
            r: e[0],
            g: e[1],
            b: e[2],
           }
          );
         },
         write: function (e) {
          return [e.r, e.g, e.b];
         },
        },
        RGBA_ARRAY: {
         read: function (e) {
          return (
           4 === e.length && {
            space: "RGB",
            r: e[0],
            g: e[1],
            b: e[2],
            a: e[3],
           }
          );
         },
         write: function (e) {
          return [e.r, e.g, e.b, e.a];
         },
        },
       },
      },
      {
       litmus: O.isObject,
       conversions: {
        RGBA_OBJ: {
         read: function (e) {
          return (
           !!(O.isNumber(e.r) && O.isNumber(e.g) && O.isNumber(e.b) && O.isNumber(e.a)) && {
            space: "RGB",
            r: e.r,
            g: e.g,
            b: e.b,
            a: e.a,
           }
          );
         },
         write: function (e) {
          return {
           r: e.r,
           g: e.g,
           b: e.b,
           a: e.a,
          };
         },
        },
        RGB_OBJ: {
         read: function (e) {
          return (
           !!(O.isNumber(e.r) && O.isNumber(e.g) && O.isNumber(e.b)) && {
            space: "RGB",
            r: e.r,
            g: e.g,
            b: e.b,
           }
          );
         },
         write: function (e) {
          return {
           r: e.r,
           g: e.g,
           b: e.b,
          };
         },
        },
        HSVA_OBJ: {
         read: function (e) {
          return (
           !!(O.isNumber(e.h) && O.isNumber(e.s) && O.isNumber(e.v) && O.isNumber(e.a)) && {
            space: "HSV",
            h: e.h,
            s: e.s,
            v: e.v,
            a: e.a,
           }
          );
         },
         write: function (e) {
          return {
           h: e.h,
           s: e.s,
           v: e.v,
           a: e.a,
          };
         },
        },
        HSV_OBJ: {
         read: function (e) {
          return (
           !!(O.isNumber(e.h) && O.isNumber(e.s) && O.isNumber(e.v)) && {
            space: "HSV",
            h: e.h,
            s: e.s,
            v: e.v,
           }
          );
         },
         write: function (e) {
          return {
           h: e.h,
           s: e.s,
           v: e.v,
          };
         },
        },
       },
      },
     ],
     L = void 0,
     D = void 0,
     k = function () {
      D = !1;
      var e = arguments.length > 1 ? O.toArray(arguments) : arguments[0];
      return (
       O.each(C, function (t) {
        if (t.litmus(e))
         return (
          O.each(t.conversions, function (t, n) {
           if (((L = t.read(e)), !1 === D && !1 !== L)) return (D = L), (L.conversionName = n), (L.conversion = t), O.BREAK;
          }),
          O.BREAK
         );
       }),
       D
      );
     },
     U = void 0,
     P = {
      hsv_to_rgb: function (e, t, n) {
       var r = Math.floor(e / 60) % 6,
        i = e / 60 - Math.floor(e / 60),
        o = n * (1 - t),
        a = n * (1 - i * t),
        u = n * (1 - (1 - i) * t),
        c = [
         [n, u, o],
         [a, n, o],
         [o, n, u],
         [o, a, n],
         [u, o, n],
         [n, o, a],
        ][r];
       return {
        r: 255 * c[0],
        g: 255 * c[1],
        b: 255 * c[2],
       };
      },
      rgb_to_hsv: function (e, t, n) {
       var r = Math.min(e, t, n),
        i = Math.max(e, t, n),
        o = i - r,
        a = void 0,
        u = void 0;
       return 0 === i
        ? {
           h: NaN,
           s: 0,
           v: 0,
          }
        : ((u = o / i),
          (a = e === i ? (t - n) / o : t === i ? 2 + (n - e) / o : 4 + (e - t) / o),
          (a /= 6) < 0 && (a += 1),
          {
           h: 360 * a,
           s: u,
           v: i / 255,
          });
      },
      rgb_to_hex: function (e, t, n) {
       var r = this.hex_with_component(0, 2, e);
       return (r = this.hex_with_component(r, 1, t)), this.hex_with_component(r, 0, n);
      },
      component_from_hex: function (e, t) {
       return (e >> (8 * t)) & 255;
      },
      hex_with_component: function (e, t, n) {
       return (n << (U = 8 * t)) | (e & ~(255 << U));
      },
     },
     I =
      "function" == typeof Symbol && "symbol" == a(Symbol.iterator)
       ? function (e) {
          return a(e);
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e);
         },
     F = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     },
     N = (function () {
      function e(e, t) {
       for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
       }
      }
      return function (t, n, r) {
       return n && e(t.prototype, n), r && e(t, r), t;
      };
     })(),
     B = function e(t, n, r) {
      null === t && (t = Function.prototype);
      var i = Object.getOwnPropertyDescriptor(t, n);
      if (void 0 === i) {
       var o = Object.getPrototypeOf(t);
       return null === o ? void 0 : e(o, n, r);
      }
      if ("value" in i) return i.value;
      var a = i.get;
      return void 0 !== a ? a.call(r) : void 0;
     },
     M = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + a(t));
      (e.prototype = Object.create(t && t.prototype, {
       constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0,
       },
      })),
       t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
     },
     j = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ("object" != a(t) && "function" != typeof t) ? e : t;
     },
     z = (function () {
      function e() {
       if ((F(this, e), (this.__state = k.apply(this, arguments)), !1 === this.__state)) throw new Error("Failed to interpret color arguments");
       this.__state.a = this.__state.a || 1;
      }
      return (
       N(e, [
        {
         key: "toString",
         value: function () {
          return t(this);
         },
        },
        {
         key: "toHexString",
         value: function () {
          return t(this, !0);
         },
        },
        {
         key: "toOriginal",
         value: function () {
          return this.__state.conversion.write(this);
         },
        },
       ]),
       e
      );
     })();
    (z.recalculateRGB = function (e, t, n) {
     if ("HEX" === e.__state.space) e.__state[t] = P.component_from_hex(e.__state.hex, n);
     else {
      if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
      O.extend(e.__state, P.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v));
     }
    }),
     (z.recalculateHSV = function (e) {
      var t = P.rgb_to_hsv(e.r, e.g, e.b);
      O.extend(e.__state, {
       s: t.s,
       v: t.v,
      }),
       O.isNaN(t.h) ? O.isUndefined(e.__state.h) && (e.__state.h = 0) : (e.__state.h = t.h);
     }),
     (z.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"]),
     n(z.prototype, "r", 2),
     n(z.prototype, "g", 1),
     n(z.prototype, "b", 0),
     r(z.prototype, "h"),
     r(z.prototype, "s"),
     r(z.prototype, "v"),
     Object.defineProperty(z.prototype, "a", {
      get: function () {
       return this.__state.a;
      },
      set: function (e) {
       this.__state.a = e;
      },
     }),
     Object.defineProperty(z.prototype, "hex", {
      get: function () {
       return "HEX" !== !this.__state.space && (this.__state.hex = P.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
      },
      set: function (e) {
       (this.__state.space = "HEX"), (this.__state.hex = e);
      },
     });
    var G = (function () {
      function e(t, n) {
       F(this, e), (this.initialValue = t[n]), (this.domElement = document.createElement("div")), (this.object = t), (this.property = n), (this.__onChange = void 0), (this.__onFinishChange = void 0);
      }
      return (
       N(e, [
        {
         key: "onChange",
         value: function (e) {
          return (this.__onChange = e), this;
         },
        },
        {
         key: "onFinishChange",
         value: function (e) {
          return (this.__onFinishChange = e), this;
         },
        },
        {
         key: "setValue",
         value: function (e) {
          return (this.object[this.property] = e), this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this;
         },
        },
        {
         key: "getValue",
         value: function () {
          return this.object[this.property];
         },
        },
        {
         key: "updateDisplay",
         value: function () {
          return this;
         },
        },
        {
         key: "isModified",
         value: function () {
          return this.initialValue !== this.getValue();
         },
        },
       ]),
       e
      );
     })(),
     H = {
      HTMLEvents: ["change"],
      MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
      KeyboardEvents: ["keydown"],
     },
     V = {};
    O.each(H, function (e, t) {
     O.each(e, function (e) {
      V[e] = t;
     });
    });
    var X = /(\d+(\.\d+)?)px/,
     Y = {
      makeSelectable: function (e, t) {
       void 0 !== e &&
        void 0 !== e.style &&
        ((e.onselectstart = t
         ? function () {
            return !1;
           }
         : function () {}),
        (e.style.MozUserSelect = t ? "auto" : "none"),
        (e.style.KhtmlUserSelect = t ? "auto" : "none"),
        (e.unselectable = t ? "on" : "off"));
      },
      makeFullscreen: function (e, t, n) {
       var r = n,
        i = t;
       O.isUndefined(i) && (i = !0), O.isUndefined(r) && (r = !0), (e.style.position = "absolute"), i && ((e.style.left = 0), (e.style.right = 0)), r && ((e.style.top = 0), (e.style.bottom = 0));
      },
      fakeEvent: function (e, t, n, r) {
       var i = n || {},
        o = V[t];
       if (!o) throw new Error("Event type " + t + " not supported.");
       var a = document.createEvent(o);
       switch (o) {
        case "MouseEvents":
         var u = i.x || i.clientX || 0,
          c = i.y || i.clientY || 0;
         a.initMouseEvent(t, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, u, c, !1, !1, !1, !1, 0, null);
         break;
        case "KeyboardEvents":
         var s = a.initKeyboardEvent || a.initKeyEvent;
         O.defaults(i, {
          cancelable: !0,
          ctrlKey: !1,
          altKey: !1,
          shiftKey: !1,
          metaKey: !1,
          keyCode: void 0,
          charCode: void 0,
         }),
          s(t, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
         break;
        default:
         a.initEvent(t, i.bubbles || !1, i.cancelable || !0);
       }
       O.defaults(a, r), e.dispatchEvent(a);
      },
      bind: function (e, t, n, r) {
       var i = r || !1;
       return e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), Y;
      },
      unbind: function (e, t, n, r) {
       var i = r || !1;
       return e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), Y;
      },
      addClass: function (e, t) {
       if (void 0 === e.className) e.className = t;
       else if (e.className !== t) {
        var n = e.className.split(/ +/);
        -1 === n.indexOf(t) && (n.push(t), (e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")));
       }
       return Y;
      },
      removeClass: function (e, t) {
       if (t)
        if (e.className === t) e.removeAttribute("class");
        else {
         var n = e.className.split(/ +/),
          r = n.indexOf(t);
         -1 !== r && (n.splice(r, 1), (e.className = n.join(" ")));
        }
       else e.className = void 0;
       return Y;
      },
      hasClass: function (e, t) {
       return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1;
      },
      getWidth: function (e) {
       var t = getComputedStyle(e);
       return i(t["border-left-width"]) + i(t["border-right-width"]) + i(t["padding-left"]) + i(t["padding-right"]) + i(t.width);
      },
      getHeight: function (e) {
       var t = getComputedStyle(e);
       return i(t["border-top-width"]) + i(t["border-bottom-width"]) + i(t["padding-top"]) + i(t["padding-bottom"]) + i(t.height);
      },
      getOffset: function (e) {
       var t = e,
        n = {
         left: 0,
         top: 0,
        };
       if (t.offsetParent)
        do {
         (n.left += t.offsetLeft), (n.top += t.offsetTop), (t = t.offsetParent);
        } while (t);
       return n;
      },
      isActive: function (e) {
       return e === document.activeElement && (e.type || e.href);
      },
     },
     W = (function (e) {
      function t(e, n) {
       F(this, t);
       var r = j(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
        i = r;
       return (
        (r.__prev = r.getValue()),
        (r.__checkbox = document.createElement("input")),
        r.__checkbox.setAttribute("type", "checkbox"),
        Y.bind(
         r.__checkbox,
         "change",
         function () {
          i.setValue(!i.__prev);
         },
         !1
        ),
        r.domElement.appendChild(r.__checkbox),
        r.updateDisplay(),
        r
       );
      }
      return (
       M(t, G),
       N(t, [
        {
         key: "setValue",
         value: function (e) {
          var n = B(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);
          return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), (this.__prev = this.getValue()), n;
         },
        },
        {
         key: "updateDisplay",
         value: function () {
          return (
           !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), (this.__checkbox.checked = !0), (this.__prev = !0)) : ((this.__checkbox.checked = !1), (this.__prev = !1)),
           B(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)
          );
         },
        },
       ]),
       t
      );
     })(),
     q = (function (e) {
      function t(e, n, r) {
       F(this, t);
       var i = j(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
        o = r,
        a = i;
       if (((i.__select = document.createElement("select")), O.isArray(o))) {
        var u = {};
        O.each(o, function (e) {
         u[e] = e;
        }),
         (o = u);
       }
       return (
        O.each(o, function (e, t) {
         var n = document.createElement("option");
         (n.innerHTML = t), n.setAttribute("value", e), a.__select.appendChild(n);
        }),
        i.updateDisplay(),
        Y.bind(i.__select, "change", function () {
         var e = this.options[this.selectedIndex].value;
         a.setValue(e);
        }),
        i.domElement.appendChild(i.__select),
        i
       );
      }
      return (
       M(t, G),
       N(t, [
        {
         key: "setValue",
         value: function (e) {
          var n = B(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);
          return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n;
         },
        },
        {
         key: "updateDisplay",
         value: function () {
          return Y.isActive(this.__select) ? this : ((this.__select.value = this.getValue()), B(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this));
         },
        },
       ]),
       t
      );
     })(),
     K = (function (e) {
      function t(e, n) {
       function r() {
        o.setValue(o.__input.value);
       }
       F(this, t);
       var i = j(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
        o = i;
       return (
        (i.__input = document.createElement("input")),
        i.__input.setAttribute("type", "text"),
        Y.bind(i.__input, "keyup", r),
        Y.bind(i.__input, "change", r),
        Y.bind(i.__input, "blur", function () {
         o.__onFinishChange && o.__onFinishChange.call(o, o.getValue());
        }),
        Y.bind(i.__input, "keydown", function (e) {
         13 === e.keyCode && this.blur();
        }),
        i.updateDisplay(),
        i.domElement.appendChild(i.__input),
        i
       );
      }
      return (
       M(t, G),
       N(t, [
        {
         key: "updateDisplay",
         value: function () {
          return Y.isActive(this.__input) || (this.__input.value = this.getValue()), B(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
         },
        },
       ]),
       t
      );
     })(),
     $ = (function (e) {
      function t(e, n, r) {
       F(this, t);
       var i = j(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
        a = r || {};
       return (
        (i.__min = a.min),
        (i.__max = a.max),
        (i.__step = a.step),
        O.isUndefined(i.__step) ? (0 === i.initialValue ? (i.__impliedStep = 1) : (i.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(i.initialValue)) / Math.LN10)) / 10)) : (i.__impliedStep = i.__step),
        (i.__precision = o(i.__impliedStep)),
        i
       );
      }
      return (
       M(t, G),
       N(t, [
        {
         key: "setValue",
         value: function (e) {
          var n = e;
          return (
           void 0 !== this.__min && n < this.__min ? (n = this.__min) : void 0 !== this.__max && n > this.__max && (n = this.__max),
           void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step),
           B(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, n)
          );
         },
        },
        {
         key: "min",
         value: function (e) {
          return (this.__min = e), this;
         },
        },
        {
         key: "max",
         value: function (e) {
          return (this.__max = e), this;
         },
        },
        {
         key: "step",
         value: function (e) {
          return (this.__step = e), (this.__impliedStep = e), (this.__precision = o(e)), this;
         },
        },
       ]),
       t
      );
     })(),
     J = (function (e) {
      function t(e, n, r) {
       function i() {
        c.__onFinishChange && c.__onFinishChange.call(c, c.getValue());
       }

       function o(e) {
        var t = s - e.clientY;
        c.setValue(c.getValue() + t * c.__impliedStep), (s = e.clientY);
       }

       function a() {
        Y.unbind(window, "mousemove", o), Y.unbind(window, "mouseup", a), i();
       }
       F(this, t);
       var u = j(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
       u.__truncationSuspended = !1;
       var c = u,
        s = void 0;
       return (
        (u.__input = document.createElement("input")),
        u.__input.setAttribute("type", "text"),
        Y.bind(u.__input, "change", function () {
         var e = parseFloat(c.__input.value);
         O.isNaN(e) || c.setValue(e);
        }),
        Y.bind(u.__input, "blur", function () {
         i();
        }),
        Y.bind(u.__input, "mousedown", function (e) {
         Y.bind(window, "mousemove", o), Y.bind(window, "mouseup", a), (s = e.clientY);
        }),
        Y.bind(u.__input, "keydown", function (e) {
         13 === e.keyCode && ((c.__truncationSuspended = !0), this.blur(), (c.__truncationSuspended = !1), i());
        }),
        u.updateDisplay(),
        u.domElement.appendChild(u.__input),
        u
       );
      }
      return (
       M(t, $),
       N(t, [
        {
         key: "updateDisplay",
         value: function () {
          return (this.__input.value = this.__truncationSuspended ? this.getValue() : u(this.getValue(), this.__precision)), B(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
         },
        },
       ]),
       t
      );
     })(),
     Q = (function (e) {
      function t(e, n, r, i, o) {
       function a(e) {
        e.preventDefault();
        var t = d.__background.getBoundingClientRect();
        return d.setValue(c(e.clientX, t.left, t.right, d.__min, d.__max)), !1;
       }

       function u() {
        Y.unbind(window, "mousemove", a), Y.unbind(window, "mouseup", u), d.__onFinishChange && d.__onFinishChange.call(d, d.getValue());
       }

       function s(e) {
        var t = e.touches[0].clientX,
         n = d.__background.getBoundingClientRect();
        d.setValue(c(t, n.left, n.right, d.__min, d.__max));
       }

       function l() {
        Y.unbind(window, "touchmove", s), Y.unbind(window, "touchend", l), d.__onFinishChange && d.__onFinishChange.call(d, d.getValue());
       }
       F(this, t);
       var f = j(
         this,
         (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, {
          min: r,
          max: i,
          step: o,
         })
        ),
        d = f;
       return (
        (f.__background = document.createElement("div")),
        (f.__foreground = document.createElement("div")),
        Y.bind(f.__background, "mousedown", function (e) {
         document.activeElement.blur(), Y.bind(window, "mousemove", a), Y.bind(window, "mouseup", u), a(e);
        }),
        Y.bind(f.__background, "touchstart", function (e) {
         1 === e.touches.length && (Y.bind(window, "touchmove", s), Y.bind(window, "touchend", l), s(e));
        }),
        Y.addClass(f.__background, "slider"),
        Y.addClass(f.__foreground, "slider-fg"),
        f.updateDisplay(),
        f.__background.appendChild(f.__foreground),
        f.domElement.appendChild(f.__background),
        f
       );
      }
      return (
       M(t, $),
       N(t, [
        {
         key: "updateDisplay",
         value: function () {
          var e = (this.getValue() - this.__min) / (this.__max - this.__min);
          return (this.__foreground.style.width = 100 * e + "%"), B(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
         },
        },
       ]),
       t
      );
     })(),
     Z = (function (e) {
      function t(e, n, r) {
       F(this, t);
       var i = j(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
        o = i;
       return (
        (i.__button = document.createElement("div")),
        (i.__button.innerHTML = void 0 === r ? "Fire" : r),
        Y.bind(i.__button, "click", function (e) {
         return e.preventDefault(), o.fire(), !1;
        }),
        Y.addClass(i.__button, "button"),
        i.domElement.appendChild(i.__button),
        i
       );
      }
      return (
       M(t, G),
       N(t, [
        {
         key: "fire",
         value: function () {
          this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
         },
        },
       ]),
       t
      );
     })(),
     ee = (function (e) {
      function t(e, n) {
       function r(e) {
        f(e), Y.bind(window, "mousemove", f), Y.bind(window, "touchmove", f), Y.bind(window, "mouseup", o), Y.bind(window, "touchend", o);
       }

       function i(e) {
        d(e), Y.bind(window, "mousemove", d), Y.bind(window, "touchmove", d), Y.bind(window, "mouseup", a), Y.bind(window, "touchend", a);
       }

       function o() {
        Y.unbind(window, "mousemove", f), Y.unbind(window, "touchmove", f), Y.unbind(window, "mouseup", o), Y.unbind(window, "touchend", o), c();
       }

       function a() {
        Y.unbind(window, "mousemove", d), Y.unbind(window, "touchmove", d), Y.unbind(window, "mouseup", a), Y.unbind(window, "touchend", a), c();
       }

       function u() {
        var e = k(this.value);
        !1 !== e ? ((p.__color.__state = e), p.setValue(p.__color.toOriginal())) : (this.value = p.__color.toString());
       }

       function c() {
        p.__onFinishChange && p.__onFinishChange.call(p, p.__color.toOriginal());
       }

       function f(e) {
        -1 === e.type.indexOf("touch") && e.preventDefault();
        var t = p.__saturation_field.getBoundingClientRect(),
         n = (e.touches && e.touches[0]) || e,
         r = n.clientX,
         i = n.clientY,
         o = (r - t.left) / (t.right - t.left),
         a = 1 - (i - t.top) / (t.bottom - t.top);
        return a > 1 ? (a = 1) : a < 0 && (a = 0), o > 1 ? (o = 1) : o < 0 && (o = 0), (p.__color.v = a), (p.__color.s = o), p.setValue(p.__color.toOriginal()), !1;
       }

       function d(e) {
        -1 === e.type.indexOf("touch") && e.preventDefault();
        var t = p.__hue_field.getBoundingClientRect(),
         n = 1 - (((e.touches && e.touches[0]) || e).clientY - t.top) / (t.bottom - t.top);
        return n > 1 ? (n = 1) : n < 0 && (n = 0), (p.__color.h = 360 * n), p.setValue(p.__color.toOriginal()), !1;
       }
       F(this, t);
       var h = j(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
       (h.__color = new z(h.getValue())), (h.__temp = new z(0));
       var p = h;
       (h.domElement = document.createElement("div")),
        Y.makeSelectable(h.domElement, !1),
        (h.__selector = document.createElement("div")),
        (h.__selector.className = "selector"),
        (h.__saturation_field = document.createElement("div")),
        (h.__saturation_field.className = "saturation-field"),
        (h.__field_knob = document.createElement("div")),
        (h.__field_knob.className = "field-knob"),
        (h.__field_knob_border = "2px solid "),
        (h.__hue_knob = document.createElement("div")),
        (h.__hue_knob.className = "hue-knob"),
        (h.__hue_field = document.createElement("div")),
        (h.__hue_field.className = "hue-field"),
        (h.__input = document.createElement("input")),
        (h.__input.type = "text"),
        (h.__input_textShadow = "0 1px 1px "),
        Y.bind(h.__input, "keydown", function (e) {
         13 === e.keyCode && u.call(this);
        }),
        Y.bind(h.__input, "blur", u),
        Y.bind(h.__selector, "mousedown", function () {
         Y.addClass(this, "drag").bind(window, "mouseup", function () {
          Y.removeClass(p.__selector, "drag");
         });
        }),
        Y.bind(h.__selector, "touchstart", function () {
         Y.addClass(this, "drag").bind(window, "touchend", function () {
          Y.removeClass(p.__selector, "drag");
         });
        });
       var v = document.createElement("div");
       return (
        O.extend(h.__selector.style, {
         width: "122px",
         height: "102px",
         padding: "3px",
         backgroundColor: "#222",
         boxShadow: "0px 1px 3px rgba(0,0,0,0.3)",
        }),
        O.extend(h.__field_knob.style, {
         position: "absolute",
         width: "12px",
         height: "12px",
         border: h.__field_knob_border + (h.__color.v < 0.5 ? "#fff" : "#000"),
         boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
         borderRadius: "12px",
         zIndex: 1,
        }),
        O.extend(h.__hue_knob.style, {
         position: "absolute",
         width: "15px",
         height: "2px",
         borderRight: "4px solid #fff",
         zIndex: 1,
        }),
        O.extend(h.__saturation_field.style, {
         width: "100px",
         height: "100px",
         border: "1px solid #555",
         marginRight: "3px",
         display: "inline-block",
         cursor: "pointer",
        }),
        O.extend(v.style, {
         width: "100%",
         height: "100%",
         background: "none",
        }),
        s(v, "top", "rgba(0,0,0,0)", "#000"),
        O.extend(h.__hue_field.style, {
         width: "15px",
         height: "100px",
         border: "1px solid #555",
         cursor: "ns-resize",
         position: "absolute",
         top: "3px",
         right: "3px",
        }),
        l(h.__hue_field),
        O.extend(h.__input.style, {
         outline: "none",
         textAlign: "center",
         color: "#fff",
         border: 0,
         fontWeight: "bold",
         textShadow: h.__input_textShadow + "rgba(0,0,0,0.7)",
        }),
        Y.bind(h.__saturation_field, "mousedown", r),
        Y.bind(h.__saturation_field, "touchstart", r),
        Y.bind(h.__field_knob, "mousedown", r),
        Y.bind(h.__field_knob, "touchstart", r),
        Y.bind(h.__hue_field, "mousedown", i),
        Y.bind(h.__hue_field, "touchstart", i),
        h.__saturation_field.appendChild(v),
        h.__selector.appendChild(h.__field_knob),
        h.__selector.appendChild(h.__saturation_field),
        h.__selector.appendChild(h.__hue_field),
        h.__hue_field.appendChild(h.__hue_knob),
        h.domElement.appendChild(h.__input),
        h.domElement.appendChild(h.__selector),
        h.updateDisplay(),
        h
       );
      }
      return (
       M(t, G),
       N(t, [
        {
         key: "updateDisplay",
         value: function () {
          var e = k(this.getValue());
          if (!1 !== e) {
           var t = !1;
           O.each(
            z.COMPONENTS,
            function (n) {
             if (!O.isUndefined(e[n]) && !O.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return (t = !0), {};
            },
            this
           ),
            t && O.extend(this.__color.__state, e);
          }
          O.extend(this.__temp.__state, this.__color.__state), (this.__temp.a = 1);
          var n = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0,
           r = 255 - n;
          O.extend(this.__field_knob.style, {
           marginLeft: 100 * this.__color.s - 7 + "px",
           marginTop: 100 * (1 - this.__color.v) - 7 + "px",
           backgroundColor: this.__temp.toHexString(),
           border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")",
          }),
           (this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px"),
           (this.__temp.s = 1),
           (this.__temp.v = 1),
           s(this.__saturation_field, "left", "#fff", this.__temp.toHexString()),
           (this.__input.value = this.__color.toString()),
           O.extend(this.__input.style, {
            backgroundColor: this.__color.toHexString(),
            color: "rgb(" + n + "," + n + "," + n + ")",
            textShadow: this.__input_textShadow + "rgba(" + r + "," + r + "," + r + ",.7)",
           });
         },
        },
       ]),
       t
      );
     })(),
     te = ["-moz-", "-o-", "-webkit-", "-ms-", ""],
     ne = {
      load: function (e, t) {
       var n = t || document,
        r = n.createElement("link");
       (r.type = "text/css"), (r.rel = "stylesheet"), (r.href = e), n.getElementsByTagName("head")[0].appendChild(r);
      },
      inject: function (e, t) {
       var n = t || document,
        r = document.createElement("style");
       (r.type = "text/css"), (r.innerHTML = e);
       var i = n.getElementsByTagName("head")[0];
       try {
        i.appendChild(r);
       } catch (e) {}
      },
     },
     re = function (e, t) {
      var n = e[t];
      return O.isArray(arguments[2]) || O.isObject(arguments[2])
       ? new q(e, t, arguments[2])
       : O.isNumber(n)
       ? O.isNumber(arguments[2]) && O.isNumber(arguments[3])
         ? O.isNumber(arguments[4])
           ? new Q(e, t, arguments[2], arguments[3], arguments[4])
           : new Q(e, t, arguments[2], arguments[3])
         : O.isNumber(arguments[4])
         ? new J(e, t, {
            min: arguments[2],
            max: arguments[3],
            step: arguments[4],
           })
         : new J(e, t, {
            min: arguments[2],
            max: arguments[3],
           })
       : O.isString(n)
       ? new K(e, t)
       : O.isFunction(n)
       ? new Z(e, t, "")
       : O.isBoolean(n)
       ? new W(e, t)
       : null;
     },
     ie =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e) {
       setTimeout(e, 1e3 / 60);
      },
     oe = (function () {
      function e() {
       F(this, e),
        (this.backgroundElement = document.createElement("div")),
        O.extend(this.backgroundElement.style, {
         backgroundColor: "rgba(0,0,0,0.8)",
         top: 0,
         left: 0,
         display: "none",
         zIndex: "1000",
         opacity: 0,
         WebkitTransition: "opacity 0.2s linear",
         transition: "opacity 0.2s linear",
        }),
        Y.makeFullscreen(this.backgroundElement),
        (this.backgroundElement.style.position = "fixed"),
        (this.domElement = document.createElement("div")),
        O.extend(this.domElement.style, {
         position: "fixed",
         display: "none",
         zIndex: "1001",
         opacity: 0,
         WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
         transition: "transform 0.2s ease-out, opacity 0.2s linear",
        }),
        document.body.appendChild(this.backgroundElement),
        document.body.appendChild(this.domElement);
       var t = this;
       Y.bind(this.backgroundElement, "click", function () {
        t.hide();
       });
      }
      return (
       N(e, [
        {
         key: "show",
         value: function () {
          var e = this;
          (this.backgroundElement.style.display = "block"),
           (this.domElement.style.display = "block"),
           (this.domElement.style.opacity = 0),
           (this.domElement.style.webkitTransform = "scale(1.1)"),
           this.layout(),
           O.defer(function () {
            (e.backgroundElement.style.opacity = 1), (e.domElement.style.opacity = 1), (e.domElement.style.webkitTransform = "scale(1)");
           });
         },
        },
        {
         key: "hide",
         value: function () {
          var e = this,
           t = function t() {
            (e.domElement.style.display = "none"), (e.backgroundElement.style.display = "none"), Y.unbind(e.domElement, "webkitTransitionEnd", t), Y.unbind(e.domElement, "transitionend", t), Y.unbind(e.domElement, "oTransitionEnd", t);
           };
          Y.bind(this.domElement, "webkitTransitionEnd", t),
           Y.bind(this.domElement, "transitionend", t),
           Y.bind(this.domElement, "oTransitionEnd", t),
           (this.backgroundElement.style.opacity = 0),
           (this.domElement.style.opacity = 0),
           (this.domElement.style.webkitTransform = "scale(1.1)");
         },
        },
        {
         key: "layout",
         value: function () {
          (this.domElement.style.left = window.innerWidth / 2 - Y.getWidth(this.domElement) / 2 + "px"), (this.domElement.style.top = window.innerHeight / 2 - Y.getHeight(this.domElement) / 2 + "px");
         },
        },
       ]),
       e
      );
     })(),
     ae = (function (e) {
      if (e && "undefined" != typeof window) {
       var t = document.createElement("style");
       return t.setAttribute("type", "text/css"), (t.innerHTML = e), document.head.appendChild(t), e;
      }
     })(
      ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"
     );
    ne.inject(ae);
    var ue = "Default",
     ce = (function () {
      try {
       return !!window.localStorage;
      } catch (e) {
       return !1;
      }
     })(),
     se = void 0,
     le = !0,
     fe = void 0,
     de = !1,
     he = [],
     pe = function e(t) {
      var n = this,
       r = t || {};
      (this.domElement = document.createElement("div")),
       (this.__ul = document.createElement("ul")),
       this.domElement.appendChild(this.__ul),
       Y.addClass(this.domElement, "dg"),
       (this.__folders = {}),
       (this.__controllers = []),
       (this.__rememberedObjects = []),
       (this.__rememberedObjectIndecesToControllers = []),
       (this.__listening = []),
       (r = O.defaults(r, {
        closeOnTop: !1,
        autoPlace: !0,
        width: e.DEFAULT_WIDTH,
       })),
       (r = O.defaults(r, {
        resizable: r.autoPlace,
        hideable: r.autoPlace,
       })),
       O.isUndefined(r.load)
        ? (r.load = {
           preset: ue,
          })
        : r.preset && (r.load.preset = r.preset),
       O.isUndefined(r.parent) && r.hideable && he.push(this),
       (r.resizable = O.isUndefined(r.parent) && r.resizable),
       r.autoPlace && O.isUndefined(r.scrollable) && (r.scrollable = !0);
      var i = ce && "true" === localStorage.getItem(m(this, "isLocal")),
       o = void 0,
       a = void 0;
      if (
       (Object.defineProperties(this, {
        parent: {
         get: function () {
          return r.parent;
         },
        },
        scrollable: {
         get: function () {
          return r.scrollable;
         },
        },
        autoPlace: {
         get: function () {
          return r.autoPlace;
         },
        },
        closeOnTop: {
         get: function () {
          return r.closeOnTop;
         },
        },
        preset: {
         get: function () {
          return n.parent ? n.getRoot().preset : r.load.preset;
         },
         set: function (e) {
          n.parent ? (n.getRoot().preset = e) : (r.load.preset = e), S(this), n.revert();
         },
        },
        width: {
         get: function () {
          return r.width;
         },
         set: function (e) {
          (r.width = e), w(n, e);
         },
        },
        name: {
         get: function () {
          return r.name;
         },
         set: function (e) {
          (r.name = e), a && (a.innerHTML = r.name);
         },
        },
        closed: {
         get: function () {
          return r.closed;
         },
         set: function (t) {
          (r.closed = t), r.closed ? Y.addClass(n.__ul, e.CLASS_CLOSED) : Y.removeClass(n.__ul, e.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = t ? e.TEXT_OPEN : e.TEXT_CLOSED);
         },
        },
        load: {
         get: function () {
          return r.load;
         },
        },
        useLocalStorage: {
         get: function () {
          return i;
         },
         set: function (e) {
          ce && ((i = e), e ? Y.bind(window, "unload", o) : Y.unbind(window, "unload", o), localStorage.setItem(m(n, "isLocal"), e));
         },
        },
       }),
       O.isUndefined(r.parent))
      ) {
       if (((r.closed = !1), Y.addClass(this.domElement, e.CLASS_MAIN), Y.makeSelectable(this.domElement, !1), ce && i)) {
        n.useLocalStorage = !0;
        var u = localStorage.getItem(m(this, "gui"));
        u && (r.load = JSON.parse(u));
       }
       (this.__closeButton = document.createElement("div")),
        (this.__closeButton.innerHTML = e.TEXT_CLOSED),
        Y.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON),
        r.closeOnTop
         ? (Y.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]))
         : (Y.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)),
        Y.bind(this.__closeButton, "click", function () {
         n.closed = !n.closed;
        });
      } else {
       void 0 === r.closed && (r.closed = !0);
       var c = document.createTextNode(r.name);
       Y.addClass(c, "controller-name"),
        (a = f(n, c)),
        Y.addClass(this.__ul, e.CLASS_CLOSED),
        Y.addClass(a, "title"),
        Y.bind(a, "click", function (e) {
         return e.preventDefault(), (n.closed = !n.closed), !1;
        }),
        r.closed || (this.closed = !1);
      }
      r.autoPlace &&
       (O.isUndefined(r.parent) &&
        (le && ((fe = document.createElement("div")), Y.addClass(fe, "dg"), Y.addClass(fe, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(fe), (le = !1)),
        fe.appendChild(this.domElement),
        Y.addClass(this.domElement, e.CLASS_AUTO_PLACE)),
       this.parent || w(n, r.width)),
       (this.__resizeHandler = function () {
        n.onResizeDebounced();
       }),
       Y.bind(window, "resize", this.__resizeHandler),
       Y.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler),
       Y.bind(this.__ul, "transitionend", this.__resizeHandler),
       Y.bind(this.__ul, "oTransitionEnd", this.__resizeHandler),
       this.onResize(),
       r.resizable && x(this),
       (o = function () {
        ce && "true" === localStorage.getItem(m(n, "isLocal")) && localStorage.setItem(m(n, "gui"), JSON.stringify(n.getSaveObject()));
       }),
       (this.saveToLocalStorageIfPossible = o),
       r.parent ||
        (function () {
         var e = n.getRoot();
         (e.width += 1),
          O.defer(function () {
           e.width -= 1;
          });
        })();
     };
    (pe.toggleHide = function () {
     (de = !de),
      O.each(he, function (e) {
       e.domElement.style.display = de ? "none" : "";
      });
    }),
     (pe.CLASS_AUTO_PLACE = "a"),
     (pe.CLASS_AUTO_PLACE_CONTAINER = "ac"),
     (pe.CLASS_MAIN = "main"),
     (pe.CLASS_CONTROLLER_ROW = "cr"),
     (pe.CLASS_TOO_TALL = "taller-than-window"),
     (pe.CLASS_CLOSED = "closed"),
     (pe.CLASS_CLOSE_BUTTON = "close-button"),
     (pe.CLASS_CLOSE_TOP = "close-top"),
     (pe.CLASS_CLOSE_BOTTOM = "close-bottom"),
     (pe.CLASS_DRAG = "drag"),
     (pe.DEFAULT_WIDTH = 245),
     (pe.TEXT_CLOSED = "Close Controls"),
     (pe.TEXT_OPEN = "Open Controls"),
     (pe._keydownHandler = function (e) {
      "text" === document.activeElement.type || (72 !== e.which && 72 !== e.keyCode) || pe.toggleHide();
     }),
     Y.bind(window, "keydown", pe._keydownHandler, !1),
     O.extend(pe.prototype, {
      add: function (e, t) {
       return g(this, e, t, {
        factoryArgs: Array.prototype.slice.call(arguments, 2),
       });
      },
      addColor: function (e, t) {
       return g(this, e, t, {
        color: !0,
       });
      },
      remove: function (e) {
       this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
       var t = this;
       O.defer(function () {
        t.onResize();
       });
      },
      destroy: function () {
       if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
       this.autoPlace && fe.removeChild(this.domElement);
       var e = this;
       O.each(this.__folders, function (t) {
        e.removeFolder(t);
       }),
        Y.unbind(window, "keydown", pe._keydownHandler, !1),
        d(this);
      },
      addFolder: function (e) {
       if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
       var t = {
        name: e,
        parent: this,
       };
       (t.autoPlace = this.autoPlace), this.load && this.load.folders && this.load.folders[e] && ((t.closed = this.load.folders[e].closed), (t.load = this.load.folders[e]));
       var n = new pe(t);
       this.__folders[e] = n;
       var r = f(this, n.domElement);
       return Y.addClass(r, "folder"), n;
      },
      removeFolder: function (e) {
       this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], d(e);
       var t = this;
       O.each(e.__folders, function (t) {
        e.removeFolder(t);
       }),
        O.defer(function () {
         t.onResize();
        });
      },
      open: function () {
       this.closed = !1;
      },
      close: function () {
       this.closed = !0;
      },
      onResize: function () {
       var e = this.getRoot();
       if (e.scrollable) {
        var t = Y.getOffset(e.__ul).top,
         n = 0;
        O.each(e.__ul.childNodes, function (t) {
         (e.autoPlace && t === e.__save_row) || (n += Y.getHeight(t));
        }),
         window.innerHeight - t - 20 < n ? (Y.addClass(e.domElement, pe.CLASS_TOO_TALL), (e.__ul.style.height = window.innerHeight - t - 20 + "px")) : (Y.removeClass(e.domElement, pe.CLASS_TOO_TALL), (e.__ul.style.height = "auto"));
       }
       e.__resize_handle &&
        O.defer(function () {
         e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
        }),
        e.__closeButton && (e.__closeButton.style.width = e.width + "px");
      },
      onResizeDebounced: O.debounce(function () {
       this.onResize();
      }, 50),
      remember: function () {
       if (
        (O.isUndefined(se) &&
         ((se = new oe()).domElement.innerHTML =
          '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'),
        this.parent)
       )
        throw new Error("You can only call remember on a top level GUI.");
       var e = this;
       O.each(Array.prototype.slice.call(arguments), function (t) {
        0 === e.__rememberedObjects.length && y(e), -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t);
       }),
        this.autoPlace && w(this, this.width);
      },
      getRoot: function () {
       for (var e = this; e.parent; ) e = e.parent;
       return e;
      },
      getSaveObject: function () {
       var e = this.load;
       return (
        (e.closed = this.closed),
        this.__rememberedObjects.length > 0 && ((e.preset = this.preset), e.remembered || (e.remembered = {}), (e.remembered[this.preset] = E(this))),
        (e.folders = {}),
        O.each(this.__folders, function (t, n) {
         e.folders[n] = t.getSaveObject();
        }),
        e
       );
      },
      save: function () {
       this.load.remembered || (this.load.remembered = {}), (this.load.remembered[this.preset] = E(this)), h(this, !1), this.saveToLocalStorageIfPossible();
      },
      saveAs: function (e) {
       this.load.remembered || ((this.load.remembered = {}), (this.load.remembered[ue] = E(this, !0))), (this.load.remembered[e] = E(this)), (this.preset = e), b(this, e, !0), this.saveToLocalStorageIfPossible();
      },
      revert: function (e) {
       O.each(
        this.__controllers,
        function (t) {
         this.getRoot().load.remembered ? v(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
        },
        this
       ),
        O.each(this.__folders, function (e) {
         e.revert(e);
        }),
        e || h(this.getRoot(), !1);
      },
      listen: function (e) {
       var t = 0 === this.__listening.length;
       this.__listening.push(e), t && A(this.__listening);
      },
      updateDisplay: function () {
       O.each(this.__controllers, function (e) {
        e.updateDisplay();
       }),
        O.each(this.__folders, function (e) {
         e.updateDisplay();
        });
      },
     });
    var ve = {
      Color: z,
      math: P,
      interpret: k,
     },
     ge = {
      Controller: G,
      BooleanController: W,
      OptionController: q,
      StringController: K,
      NumberController: $,
      NumberControllerBox: J,
      NumberControllerSlider: Q,
      FunctionController: Z,
      ColorController: ee,
     },
     me = {
      dom: Y,
     },
     be = {
      GUI: pe,
     },
     _e = pe,
     ye = {
      color: ve,
      controllers: ge,
      dom: me,
      gui: be,
      GUI: _e,
     };
    (e.color = ve),
     (e.controllers = ge),
     (e.dom = me),
     (e.gui = be),
     (e.GUI = _e),
     (e.default = ye),
     Object.defineProperty(e, "__esModule", {
      value: !0,
     });
   });
  },
  c04e: function (e, t, n) {
   var r = n("861d");
   e.exports = function (e, t) {
    if (!r(e)) return e;
    var n, i;
    if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e)))) return i;
    if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
    if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e)))) return i;
    throw TypeError("Can't convert object to primitive value");
   };
  },
  c1ac: function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("b727").filter,
    o = n("4840"),
    a = r.aTypedArray,
    u = r.aTypedArrayConstructor,
    c = r.exportTypedArrayMethod;
   c("filter", function (e) {
    var t = i(a(this), e, arguments.length > 1 ? arguments[1] : void 0),
     n = o(this, this.constructor),
     r = 0,
     c = t.length,
     s = new (u(n))(c);
    while (c > r) s[r] = t[r++];
    return s;
   });
  },
  c430: function (e, t) {
   e.exports = !1;
  },
  c6b6: function (e, t) {
   var n = {}.toString;
   e.exports = function (e) {
    return n.call(e).slice(8, -1);
   };
  },
  c6cd: function (e, t, n) {
   var r = n("da84"),
    i = n("ce4e"),
    o = "__core-js_shared__",
    a = r[o] || i(o, {});
   e.exports = a;
  },
  c8ba: function (e, t) {
   var n;
   n = (function () {
    return this;
   })();
   try {
    n = n || new Function("return this")();
   } catch (r) {
    "object" === typeof window && (n = window);
   }
   e.exports = n;
  },
  c975: function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("4d64").indexOf,
    o = n("a640"),
    a = n("ae40"),
    u = [].indexOf,
    c = !!u && 1 / [1].indexOf(1, -0) < 0,
    s = o("indexOf"),
    l = a("indexOf", {
     ACCESSORS: !0,
     1: 0,
    });
   r(
    {
     target: "Array",
     proto: !0,
     forced: c || !s || !l,
    },
    {
     indexOf: function (e) {
      return c ? u.apply(this, arguments) || 0 : i(this, e, arguments.length > 1 ? arguments[1] : void 0);
     },
    }
   );
  },
  ca84: function (e, t, n) {
   var r = n("5135"),
    i = n("fc6a"),
    o = n("4d64").indexOf,
    a = n("d012");
   e.exports = function (e, t) {
    var n,
     u = i(e),
     c = 0,
     s = [];
    for (n in u) !r(a, n) && r(u, n) && s.push(n);
    while (t.length > c) r(u, (n = t[c++])) && (~o(s, n) || s.push(n));
    return s;
   };
  },
  ca91: function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("d58f").left,
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("reduce", function (e) {
    return i(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
   });
  },
  cc12: function (e, t, n) {
   var r = n("da84"),
    i = n("861d"),
    o = r.document,
    a = i(o) && i(o.createElement);
   e.exports = function (e) {
    return a ? o.createElement(e) : {};
   };
  },
  cd26: function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = r.aTypedArray,
    o = r.exportTypedArrayMethod,
    a = Math.floor;
   o("reverse", function () {
    var e,
     t = this,
     n = i(t).length,
     r = a(n / 2),
     o = 0;
    while (o < r) (e = t[o]), (t[o++] = t[--n]), (t[n] = e);
    return t;
   });
  },
  ce4e: function (e, t, n) {
   var r = n("da84"),
    i = n("9112");
   e.exports = function (e, t) {
    try {
     i(r, e, t);
    } catch (n) {
     r[e] = t;
    }
    return t;
   };
  },
  cfc3: function (e, t, n) {
   var r = n("74e8");
   r("Float32", function (e) {
    return function (t, n, r) {
     return e(this, t, n, r);
    };
   });
  },
  d012: function (e, t) {
   e.exports = {};
  },
  d039: function (e, t) {
   e.exports = function (e) {
    try {
     return !!e();
    } catch (t) {
     return !0;
    }
   };
  },
  d066: function (e, t, n) {
   var r = n("428f"),
    i = n("da84"),
    o = function (e) {
     return "function" == typeof e ? e : void 0;
    };
   e.exports = function (e, t) {
    return arguments.length < 2 ? o(r[e]) || o(i[e]) : (r[e] && r[e][t]) || (i[e] && i[e][t]);
   };
  },
  d139: function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("b727").find,
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("find", function (e) {
    return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
   });
  },
  d1e7: function (e, t, n) {
   "use strict";
   var r = {}.propertyIsEnumerable,
    i = Object.getOwnPropertyDescriptor,
    o =
     i &&
     !r.call(
      {
       1: 2,
      },
      1
     );
   t.f = o
    ? function (e) {
       var t = i(this, e);
       return !!t && t.enumerable;
      }
    : r;
  },
  d28b: function (e, t, n) {
   var r = n("746f");
   r("iterator");
  },
  d2bb: function (e, t, n) {
   var r = n("825a"),
    i = n("3bbe");
   e.exports =
    Object.setPrototypeOf ||
    ("__proto__" in {}
     ? (function () {
        var e,
         t = !1,
         n = {};
        try {
         (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), e.call(n, []), (t = n instanceof Array);
        } catch (o) {}
        return function (n, o) {
         return r(n), i(o), t ? e.call(n, o) : (n.__proto__ = o), n;
        };
       })()
     : void 0);
  },
  d3b7: function (e, t, n) {
   var r = n("00ee"),
    i = n("6eeb"),
    o = n("b041");
   r ||
    i(Object.prototype, "toString", o, {
     unsafe: !0,
    });
  },
  d44e: function (e, t, n) {
   var r = n("9bf2").f,
    i = n("5135"),
    o = n("b622"),
    a = o("toStringTag");
   e.exports = function (e, t, n) {
    e &&
     !i((e = n ? e : e.prototype), a) &&
     r(e, a, {
      configurable: !0,
      value: t,
     });
   };
  },
  d58f: function (e, t, n) {
   var r = n("1c0b"),
    i = n("7b0b"),
    o = n("44ad"),
    a = n("50c4"),
    u = function (e) {
     return function (t, n, u, c) {
      r(n);
      var s = i(t),
       l = o(s),
       f = a(s.length),
       d = e ? f - 1 : 0,
       h = e ? -1 : 1;
      if (u < 2)
       while (1) {
        if (d in l) {
         (c = l[d]), (d += h);
         break;
        }
        if (((d += h), e ? d < 0 : f <= d)) throw TypeError("Reduce of empty array with no initial value");
       }
      for (; e ? d >= 0 : f > d; d += h) d in l && (c = n(c, l[d], d, s));
      return c;
     };
    };
   e.exports = {
    left: u(!1),
    right: u(!0),
   };
  },
  d5d6: function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("b727").forEach,
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("forEach", function (e) {
    i(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
   });
  },
  d784: function (e, t, n) {
   "use strict";
   n("ac1f");
   var r = n("6eeb"),
    i = n("d039"),
    o = n("b622"),
    a = n("9263"),
    u = n("9112"),
    c = o("species"),
    s = !i(function () {
     var e = /./;
     return (
      (e.exec = function () {
       var e = [];
       return (
        (e.groups = {
         a: "7",
        }),
        e
       );
      }),
      "7" !== "".replace(e, "$<a>")
     );
    }),
    l = (function () {
     return "$0" === "a".replace(/./, "$0");
    })(),
    f = o("replace"),
    d = (function () {
     return !!/./[f] && "" === /./[f]("a", "$0");
    })(),
    h = !i(function () {
     var e = /(?:)/,
      t = e.exec;
     e.exec = function () {
      return t.apply(this, arguments);
     };
     var n = "ab".split(e);
     return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    });
   e.exports = function (e, t, n, f) {
    var p = o(e),
     v = !i(function () {
      var t = {};
      return (
       (t[p] = function () {
        return 7;
       }),
       7 != ""[e](t)
      );
     }),
     g =
      v &&
      !i(function () {
       var t = !1,
        n = /a/;
       return (
        "split" === e &&
         ((n = {}),
         (n.constructor = {}),
         (n.constructor[c] = function () {
          return n;
         }),
         (n.flags = ""),
         (n[p] = /./[p])),
        (n.exec = function () {
         return (t = !0), null;
        }),
        n[p](""),
        !t
       );
      });
    if (!v || !g || ("replace" === e && (!s || !l || d)) || ("split" === e && !h)) {
     var m = /./[p],
      b = n(
       p,
       ""[e],
       function (e, t, n, r, i) {
        return t.exec === a
         ? v && !i
           ? {
              done: !0,
              value: m.call(t, n, r),
             }
           : {
              done: !0,
              value: e.call(n, t, r),
             }
         : {
            done: !1,
           };
       },
       {
        REPLACE_KEEPS_$0: l,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d,
       }
      ),
      _ = b[0],
      y = b[1];
     r(String.prototype, e, _),
      r(
       RegExp.prototype,
       p,
       2 == t
        ? function (e, t) {
           return y.call(e, this, t);
          }
        : function (e) {
           return y.call(e, this);
          }
      );
    }
    f && u(RegExp.prototype[p], "sham", !0);
   };
  },
  da84: function (e, t, n) {
   (function (t) {
    var n = function (e) {
     return e && e.Math == Math && e;
    };
    e.exports =
     n("object" == typeof globalThis && globalThis) ||
     n("object" == typeof window && window) ||
     n("object" == typeof self && self) ||
     n("object" == typeof t && t) ||
     (function () {
      return this;
     })() ||
     Function("return this")();
   }.call(this, n("c8ba")));
  },
  dbb4: function (e, t, n) {
   var r = n("23e7"),
    i = n("83ab"),
    o = n("56ef"),
    a = n("fc6a"),
    u = n("06cf"),
    c = n("8418");
   r(
    {
     target: "Object",
     stat: !0,
     sham: !i,
    },
    {
     getOwnPropertyDescriptors: function (e) {
      var t,
       n,
       r = a(e),
       i = u.f,
       s = o(r),
       l = {},
       f = 0;
      while (s.length > f) (n = i(r, (t = s[f++]))), void 0 !== n && c(l, t, n);
      return l;
     },
    }
   );
  },
  ddb0: function (e, t, n) {
   var r = n("da84"),
    i = n("fdbc"),
    o = n("e260"),
    a = n("9112"),
    u = n("b622"),
    c = u("iterator"),
    s = u("toStringTag"),
    l = o.values;
   for (var f in i) {
    var d = r[f],
     h = d && d.prototype;
    if (h) {
     if (h[c] !== l)
      try {
       a(h, c, l);
      } catch (v) {
       h[c] = l;
      }
     if ((h[s] || a(h, s, f), i[f]))
      for (var p in o)
       if (h[p] !== o[p])
        try {
         a(h, p, o[p]);
        } catch (v) {
         h[p] = o[p];
        }
    }
   }
  },
  df75: function (e, t, n) {
   var r = n("ca84"),
    i = n("7839");
   e.exports =
    Object.keys ||
    function (e) {
     return r(e, i);
    };
  },
  e01a: function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("83ab"),
    o = n("da84"),
    a = n("5135"),
    u = n("861d"),
    c = n("9bf2").f,
    s = n("e893"),
    l = o.Symbol;
   if (i && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
    var f = {},
     d = function () {
      var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
       t = this instanceof d ? new l(e) : void 0 === e ? l() : l(e);
      return "" === e && (f[t] = !0), t;
     };
    s(d, l);
    var h = (d.prototype = l.prototype);
    h.constructor = d;
    var p = h.toString,
     v = "Symbol(test)" == String(l("test")),
     g = /^Symbol\((.*)\)[^)]+$/;
    c(h, "description", {
     configurable: !0,
     get: function () {
      var e = u(this) ? this.valueOf() : this,
       t = p.call(e);
      if (a(f, e)) return "";
      var n = v ? t.slice(7, -1) : t.replace(g, "$1");
      return "" === n ? void 0 : n;
     },
    }),
     r(
      {
       global: !0,
       forced: !0,
      },
      {
       Symbol: d,
      }
     );
   }
  },
  e163: function (e, t, n) {
   var r = n("5135"),
    i = n("7b0b"),
    o = n("f772"),
    a = n("e177"),
    u = o("IE_PROTO"),
    c = Object.prototype;
   e.exports = a
    ? Object.getPrototypeOf
    : function (e) {
       return (e = i(e)), r(e, u) ? e[u] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null;
      };
  },
  e177: function (e, t, n) {
   var r = n("d039");
   e.exports = !r(function () {
    function e() {}
    return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
   });
  },
  e260: function (e, t, n) {
   "use strict";
   var r = n("fc6a"),
    i = n("44d2"),
    o = n("3f8c"),
    a = n("69f3"),
    u = n("7dd0"),
    c = "Array Iterator",
    s = a.set,
    l = a.getterFor(c);
   (e.exports = u(
    Array,
    "Array",
    function (e, t) {
     s(this, {
      type: c,
      target: r(e),
      index: 0,
      kind: t,
     });
    },
    function () {
     var e = l(this),
      t = e.target,
      n = e.kind,
      r = e.index++;
     return !t || r >= t.length
      ? ((e.target = void 0),
        {
         value: void 0,
         done: !0,
        })
      : "keys" == n
      ? {
         value: r,
         done: !1,
        }
      : "values" == n
      ? {
         value: t[r],
         done: !1,
        }
      : {
         value: [r, t[r]],
         done: !1,
        };
    },
    "values"
   )),
    (o.Arguments = o.Array),
    i("keys"),
    i("values"),
    i("entries");
  },
  e2cc: function (e, t, n) {
   var r = n("6eeb");
   e.exports = function (e, t, n) {
    for (var i in t) r(e, i, t[i], n);
    return e;
   };
  },
  e439: function (e, t, n) {
   var r = n("23e7"),
    i = n("d039"),
    o = n("fc6a"),
    a = n("06cf").f,
    u = n("83ab"),
    c = i(function () {
     a(1);
    }),
    s = !u || c;
   r(
    {
     target: "Object",
     stat: !0,
     forced: s,
     sham: !u,
    },
    {
     getOwnPropertyDescriptor: function (e, t) {
      return a(o(e), t);
     },
    }
   );
  },
  e538: function (e, t, n) {
   var r = n("b622");
   t.f = r;
  },
  e58c: function (e, t, n) {
   "use strict";
   var r = n("fc6a"),
    i = n("a691"),
    o = n("50c4"),
    a = n("a640"),
    u = n("ae40"),
    c = Math.min,
    s = [].lastIndexOf,
    l = !!s && 1 / [1].lastIndexOf(1, -0) < 0,
    f = a("lastIndexOf"),
    d = u("indexOf", {
     ACCESSORS: !0,
     1: 0,
    }),
    h = l || !f || !d;
   e.exports = h
    ? function (e) {
       if (l) return s.apply(this, arguments) || 0;
       var t = r(this),
        n = o(t.length),
        a = n - 1;
       for (arguments.length > 1 && (a = c(a, i(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--) if (a in t && t[a] === e) return a || 0;
       return -1;
      }
    : s;
  },
  e893: function (e, t, n) {
   var r = n("5135"),
    i = n("56ef"),
    o = n("06cf"),
    a = n("9bf2");
   e.exports = function (e, t) {
    for (var n = i(t), u = a.f, c = o.f, s = 0; s < n.length; s++) {
     var l = n[s];
     r(e, l) || u(e, l, c(t, l));
    }
   };
  },
  e8b5: function (e, t, n) {
   var r = n("c6b6");
   e.exports =
    Array.isArray ||
    function (e) {
     return "Array" == r(e);
    };
  },
  e91f: function (e, t, n) {
   "use strict";
   var r = n("ebb5"),
    i = n("4d64").indexOf,
    o = r.aTypedArray,
    a = r.exportTypedArrayMethod;
   a("indexOf", function (e) {
    return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
   });
  },
  e95a: function (e, t, n) {
   var r = n("b622"),
    i = n("3f8c"),
    o = r("iterator"),
    a = Array.prototype;
   e.exports = function (e) {
    return void 0 !== e && (i.Array === e || a[o] === e);
   };
  },
  ebb5: function (e, t, n) {
   "use strict";
   var r,
    i = n("a981"),
    o = n("83ab"),
    a = n("da84"),
    u = n("861d"),
    c = n("5135"),
    s = n("f5df"),
    l = n("9112"),
    f = n("6eeb"),
    d = n("9bf2").f,
    h = n("e163"),
    p = n("d2bb"),
    v = n("b622"),
    g = n("90e3"),
    m = a.Int8Array,
    b = m && m.prototype,
    _ = a.Uint8ClampedArray,
    y = _ && _.prototype,
    x = m && h(m),
    w = b && h(b),
    E = Object.prototype,
    S = E.isPrototypeOf,
    A = v("toStringTag"),
    T = g("TYPED_ARRAY_TAG"),
    R = i && !!p && "Opera" !== s(a.opera),
    O = !1,
    C = {
     Int8Array: 1,
     Uint8Array: 1,
     Uint8ClampedArray: 1,
     Int16Array: 2,
     Uint16Array: 2,
     Int32Array: 4,
     Uint32Array: 4,
     Float32Array: 4,
     Float64Array: 8,
    },
    L = function (e) {
     var t = s(e);
     return "DataView" === t || c(C, t);
    },
    D = function (e) {
     return u(e) && c(C, s(e));
    },
    k = function (e) {
     if (D(e)) return e;
     throw TypeError("Target is not a typed array");
    },
    U = function (e) {
     if (p) {
      if (S.call(x, e)) return e;
     } else
      for (var t in C)
       if (c(C, r)) {
        var n = a[t];
        if (n && (e === n || S.call(n, e))) return e;
       }
     throw TypeError("Target is not a typed array constructor");
    },
    P = function (e, t, n) {
     if (o) {
      if (n)
       for (var r in C) {
        var i = a[r];
        i && c(i.prototype, e) && delete i.prototype[e];
       }
      (w[e] && !n) || f(w, e, n ? t : (R && b[e]) || t);
     }
    },
    I = function (e, t, n) {
     var r, i;
     if (o) {
      if (p) {
       if (n) for (r in C) (i = a[r]), i && c(i, e) && delete i[e];
       if (x[e] && !n) return;
       try {
        return f(x, e, n ? t : (R && m[e]) || t);
       } catch (u) {}
      }
      for (r in C) (i = a[r]), !i || (i[e] && !n) || f(i, e, t);
     }
    };
   for (r in C) a[r] || (R = !1);
   if (
    (!R || "function" != typeof x || x === Function.prototype) &&
    ((x = function () {
     throw TypeError("Incorrect invocation");
    }),
    R)
   )
    for (r in C) a[r] && p(a[r], x);
   if ((!R || !w || w === E) && ((w = x.prototype), R)) for (r in C) a[r] && p(a[r].prototype, w);
   if ((R && h(y) !== w && p(y, w), o && !c(w, A)))
    for (r in ((O = !0),
    d(w, A, {
     get: function () {
      return u(this) ? this[T] : void 0;
     },
    }),
    C))
     a[r] && l(a[r], T, r);
   e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: R,
    TYPED_ARRAY_TAG: O && T,
    aTypedArray: k,
    aTypedArrayConstructor: U,
    exportTypedArrayMethod: P,
    exportTypedArrayStaticMethod: I,
    isView: L,
    isTypedArray: D,
    TypedArray: x,
    TypedArrayPrototype: w,
   };
  },
  f5df: function (e, t, n) {
   var r = n("00ee"),
    i = n("c6b6"),
    o = n("b622"),
    a = o("toStringTag"),
    u =
     "Arguments" ==
     i(
      (function () {
       return arguments;
      })()
     ),
    c = function (e, t) {
     try {
      return e[t];
     } catch (n) {}
    };
   e.exports = r
    ? i
    : function (e) {
       var t, n, r;
       return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = c((t = Object(e)), a)) ? n : u ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r;
      };
  },
  f772: function (e, t, n) {
   var r = n("5692"),
    i = n("90e3"),
    o = r("keys");
   e.exports = function (e) {
    return o[e] || (o[e] = i(e));
   };
  },
  f8cd: function (e, t, n) {
   var r = n("a691");
   e.exports = function (e) {
    var t = r(e);
    if (t < 0) throw RangeError("The argument can't be less than 0");
    return t;
   };
  },
  fb15: function (e, t, n) {
   "use strict";
   if ((n.r(t), "undefined" !== typeof window)) {
    var r = window.document.currentScript,
     i = n("8875");
    (r = i()),
     "currentScript" in document ||
      Object.defineProperty(document, "currentScript", {
       get: i,
      });
    var o = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
    o && (n.p = o[1]);
   }
   n("7db0"),
    n("4160"),
    n("e260"),
    n("b0c0"),
    n("d3b7"),
    n("3ca3"),
    n("cfc3"),
    n("5cc6"),
    n("84c3"),
    n("9a8c"),
    n("a975"),
    n("735e"),
    n("c1ac"),
    n("d139"),
    n("3a7b"),
    n("d5d6"),
    n("82f8"),
    n("e91f"),
    n("60bd"),
    n("5f96"),
    n("3280"),
    n("3fcc"),
    n("ca91"),
    n("25a1"),
    n("cd26"),
    n("3c5d"),
    n("2954"),
    n("649e"),
    n("219c"),
    n("170b"),
    n("b39a"),
    n("72f7"),
    n("159b"),
    n("ddb0"),
    n("2b3d");

   function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
   }

   function u(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }

   function c(e, t, n) {
    return t && u(e.prototype, t), n && u(e, n), e;
   }
   n("a4d3"), n("4de4"), n("e439"), n("dbb4"), n("b64b");

   function s(e, t, n) {
    return (
     t in e
      ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0,
        })
      : (e[t] = n),
     e
    );
   }

   function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }

   function f(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         s(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   n("be69");

   function d() {}
   var h = function (e, t) {
    var n = e;

    function r() {
     (this.id = -1), (this.texcoordX = 0), (this.texcoordY = 0), (this.prevTexcoordX = 0), (this.prevTexcoordY = 0), (this.deltaX = 0), (this.deltaY = 0), (this.down = !1), (this.moved = !1), (this.color = [30, 0, 300]);
    }
    De(),
     (t = f(
      {
       IMMEDIATE: !0,
       TRIGGER: "hover",
       SIM_RESOLUTION: 128,
       DYE_RESOLUTION: 1024,
       CAPTURE_RESOLUTION: 512,
       DENSITY_DISSIPATION: 1,
       VELOCITY_DISSIPATION: 0.2,
       PRESSURE: 0.6,
       PRESSURE_ITERATIONS: 20,
       CURL: 30,
       SPLAT_RADIUS: 0.25,
       SPLAT_FORCE: 6000,
       SHADING: true,
       COLORFUL: true,
       COLOR_UPDATE_SPEED: 10,
       PAUSED: false,
       BACK_COLOR: {
        r: 45,
        g: 45,
        b: 159,
       },
       TRANSPARENT: true,
       BLOOM: false,
       BLOOM_ITERATIONS: 8,
       BLOOM_RESOLUTION: 256,
       BLOOM_INTENSITY: 0.8,
       BLOOM_THRESHOLD: 0.6,
       BLOOM_SOFT_KNEE: 0.7,
       SUNRAYS: false,
       SUNRAYS_RESOLUTION: 196,
       SUNRAYS_WEIGHT: 1,
      },
      t
     ));
    var i = [],
     o = [],
     u = [];
    i.push(new r());
    var s = p(n),
     l = s.gl,
     h = s.ext;

    function p(e) {
     var t,
      n,
      r = {
       alpha: !0,
       depth: !1,
       stencil: !1,
       antialias: !1,
       preserveDrawingBuffer: !1,
      },
      i = e.getContext("webgl2", r),
      o = !!i;
     o || (i = e.getContext("webgl", r) || e.getContext("experimental-webgl", r)),
      o ? (i.getExtension("EXT_color_buffer_float"), (n = i.getExtension("OES_texture_float_linear"))) : ((t = i.getExtension("OES_texture_half_float")), (n = i.getExtension("OES_texture_half_float_linear"))),
      i.clearColor(0, 0, 0, 1);
     var a,
      u,
      c,
      s = o ? i.HALF_FLOAT : t.HALF_FLOAT_OES;
     return (
      o ? ((a = v(i, i.RGBA16F, i.RGBA, s)), (u = v(i, i.RG16F, i.RG, s)), (c = v(i, i.R16F, i.RED, s))) : ((a = v(i, i.RGBA, i.RGBA, s)), (u = v(i, i.RGBA, i.RGBA, s)), (c = v(i, i.RGBA, i.RGBA, s))),
      d("send", "event", o ? "webgl2" : "webgl", null == a ? "not supported" : "supported"),
      {
       gl: i,
       ext: {
        formatRGBA: a,
        formatRG: u,
        formatR: c,
        halfFloatTexType: s,
        supportLinearFiltering: n,
       },
      }
     );
    }

    function v(e, t, n, r) {
     if (!g(e, t, n, r))
      switch (t) {
       case e.R16F:
        return v(e, e.RG16F, e.RG, r);
       case e.RG16F:
        return v(e, e.RGBA16F, e.RGBA, r);
       default:
        return null;
      }
     return {
      internalFormat: t,
      format: n,
     };
    }

    function g(e, t, n, r) {
     var i = e.createTexture();
     e.bindTexture(e.TEXTURE_2D, i),
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
      e.texImage2D(e.TEXTURE_2D, 0, t, 4, 4, 0, n, r, null);
     var o = e.createFramebuffer();
     e.bindFramebuffer(e.FRAMEBUFFER, o), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, i, 0);
     var a = e.checkFramebufferStatus(e.FRAMEBUFFER);
     return a == e.FRAMEBUFFER_COMPLETE;
    }

    function m() {
     return /Mobi|Android/i.test(navigator.userAgent);
    }
    m() && (t.DYE_RESOLUTION = 512), h.supportLinearFiltering || ((t.DYE_RESOLUTION = 512), (t.SHADING = !1), (t.BLOOM = !1), (t.SUNRAYS = !1));
    var b = (function () {
      function e(t, n) {
       a(this, e), (this.vertexShader = t), (this.fragmentShaderSource = n), (this.programs = []), (this.activeProgram = null), (this.uniforms = []);
      }
      return (
       c(e, [
        {
         key: "setKeywords",
         value: function (e) {
          for (var t = 0, n = 0; n < e.length; n++) t += it(e[n]);
          var r = this.programs[t];
          if (null == r) {
           var i = w(l.FRAGMENT_SHADER, this.fragmentShaderSource, e);
           (r = y(this.vertexShader, i)), (this.programs[t] = r);
          }
          r != this.activeProgram && ((this.uniforms = x(r)), (this.activeProgram = r));
         },
        },
        {
         key: "bind",
         value: function () {
          l.useProgram(this.activeProgram);
         },
        },
       ]),
       e
      );
     })(),
     _ = (function () {
      function e(t, n) {
       a(this, e), (this.uniforms = {}), (this.program = y(t, n)), (this.uniforms = x(this.program));
      }
      return (
       c(e, [
        {
         key: "bind",
         value: function () {
          l.useProgram(this.program);
         },
        },
       ]),
       e
      );
     })();

    function y(e, t) {
     var n = l.createProgram();
     if ((l.attachShader(n, e), l.attachShader(n, t), l.linkProgram(n), !l.getProgramParameter(n, l.LINK_STATUS))) throw l.getProgramInfoLog(n);
     return n;
    }

    function x(e) {
     for (var t = [], n = l.getProgramParameter(e, l.ACTIVE_UNIFORMS), r = 0; r < n; r++) {
      var i = l.getActiveUniform(e, r).name;
      t[i] = l.getUniformLocation(e, i);
     }
     return t;
    }

    function w(e, t, n) {
     t = E(t, n);
     var r = l.createShader(e);
     if ((l.shaderSource(r, t), l.compileShader(r), !l.getShaderParameter(r, l.COMPILE_STATUS))) throw l.getShaderInfoLog(r);
     return r;
    }

    function E(e, t) {
     if (null == t) return e;
     var n = "";
     return (
      t.forEach(function (e) {
       n += "#define " + e + "\n";
      }),
      n + e
     );
    }
    var S,
     A,
     T,
     R,
     O,
     C,
     L,
     D,
     k = w(
      l.VERTEX_SHADER,
      "\n    precision highp float;\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform vec2 texelSize;\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        vL = vUv - vec2(texelSize.x, 0.0);\n        vR = vUv + vec2(texelSize.x, 0.0);\n        vT = vUv + vec2(0.0, texelSize.y);\n        vB = vUv - vec2(0.0, texelSize.y);\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n"
     ),
     U = w(
      l.VERTEX_SHADER,
      "\n    precision highp float;\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    uniform vec2 texelSize;\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        float offset = 1.33333333;\n        vL = vUv - texelSize * offset;\n        vR = vUv + texelSize * offset;\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n"
     ),
     P = w(
      l.FRAGMENT_SHADER,
      "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    uniform sampler2D uTexture;\n    void main () {\n        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;\n        sum += texture2D(uTexture, vL) * 0.35294117;\n        sum += texture2D(uTexture, vR) * 0.35294117;\n        gl_FragColor = sum;\n    }\n"
     ),
     I = w(l.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    uniform sampler2D uTexture;\n    void main () {\n        gl_FragColor = texture2D(uTexture, vUv);\n    }\n"),
     F = w(
      l.FRAGMENT_SHADER,
      "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float value;\n    void main () {\n        gl_FragColor = value * texture2D(uTexture, vUv);\n    }\n"
     ),
     N = w(l.FRAGMENT_SHADER, "\n    precision mediump float;\n    uniform vec4 color;\n    void main () {\n        gl_FragColor = color;\n    }\n"),
     B = w(
      l.FRAGMENT_SHADER,
      t.TRANSPARENT
       ? "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float aspectRatio;\n    #define SCALE 25.0\n    void main () {\n        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n        float v = mod(uv.x + uv.y, 2.0);\n        v = v * 0.1 + 0.8;\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n"
       : "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float aspectRatio;\n    #define SCALE 25.0\n    void main () {\n        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n        float v = mod(uv.x + uv.y, 2.0);\n        v = v * 0.1 + 0.8;\n        gl_FragColor = vec4(vec3(v), 1.0);\n    }\n"
     ),
     M =
      "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uSunrays;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n    uniform vec2 texelSize;\n    vec3 linearToGamma (vec3 color) {\n        color = max(color, vec3(0));\n        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));\n    }\n    void main () {\n        vec3 c = texture2D(uTexture, vUv).rgb;\n    #ifdef SHADING\n        vec3 lc = texture2D(uTexture, vL).rgb;\n        vec3 rc = texture2D(uTexture, vR).rgb;\n        vec3 tc = texture2D(uTexture, vT).rgb;\n        vec3 bc = texture2D(uTexture, vB).rgb;\n        float dx = length(rc) - length(lc);\n        float dy = length(tc) - length(bc);\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        c *= diffuse;\n    #endif\n    #ifdef BLOOM\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n    #endif\n    #ifdef SUNRAYS\n        float sunrays = texture2D(uSunrays, vUv).r;\n        c *= sunrays;\n    #ifdef BLOOM\n        bloom *= sunrays;\n    #endif\n    #endif\n    #ifdef BLOOM\n        float noise = texture2D(uDithering, vUv * ditherScale).r;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 255.0;\n        bloom = linearToGamma(bloom);\n        c += bloom;\n    #endif\n        float a = max(c.r, max(c.g, c.b));\n        gl_FragColor = vec4(c, a);\n    }\n",
     j = w(
      l.FRAGMENT_SHADER,
      "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform vec3 curve;\n    uniform float threshold;\n    void main () {\n        vec3 c = texture2D(uTexture, vUv).rgb;\n        float br = max(c.r, max(c.g, c.b));\n        float rq = clamp(br - curve.x, 0.0, curve.y);\n        rq = curve.z * rq * rq;\n        c *= max(rq, br - threshold) / max(br, 0.0001);\n        gl_FragColor = vec4(c, 0.0);\n    }\n"
     ),
     z = w(
      l.FRAGMENT_SHADER,
      "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum;\n    }\n"
     ),
     G = w(
      l.FRAGMENT_SHADER,
      "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform float intensity;\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum * intensity;\n    }\n"
     ),
     H = w(
      l.FRAGMENT_SHADER,
      "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    void main () {\n        vec4 c = texture2D(uTexture, vUv);\n        float br = max(c.r, max(c.g, c.b));\n        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);\n        gl_FragColor = c;\n    }\n"
     ),
     V = w(
      l.FRAGMENT_SHADER,
      "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float weight;\n    #define ITERATIONS 16\n    void main () {\n        float Density = 0.3;\n        float Decay = 0.95;\n        float Exposure = 0.7;\n        vec2 coord = vUv;\n        vec2 dir = vUv - 0.5;\n        dir *= 1.0 / float(ITERATIONS) * Density;\n        float illuminationDecay = 1.0;\n        float color = texture2D(uTexture, vUv).a;\n        for (int i = 0; i < ITERATIONS; i++)\n        {\n            coord -= dir;\n            float col = texture2D(uTexture, coord).a;\n            color += col * illuminationDecay * weight;\n            illuminationDecay *= Decay;\n        }\n        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);\n    }\n"
     ),
     X = w(
      l.FRAGMENT_SHADER,
      "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uTarget;\n    uniform float aspectRatio;\n    uniform vec3 color;\n    uniform vec2 point;\n    uniform float radius;\n    void main () {\n        vec2 p = vUv - point.xy;\n        p.x *= aspectRatio;\n        vec3 splat = exp(-dot(p, p) / radius) * color;\n        vec3 base = texture2D(uTarget, vUv).xyz;\n        gl_FragColor = vec4(base + splat, 1.0);\n    }\n"
     ),
     Y = w(
      l.FRAGMENT_SHADER,
      "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform vec2 dyeTexelSize;\n    uniform float dt;\n    uniform float dissipation;\n    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n        vec2 st = uv / tsize - 0.5;\n        vec2 iuv = floor(st);\n        vec2 fuv = fract(st);\n        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    }\n    void main () {\n    #ifdef MANUAL_FILTERING\n        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n        vec4 result = bilerp(uSource, coord, dyeTexelSize);\n    #else\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        vec4 result = texture2D(uSource, coord);\n    #endif\n        float decay = 1.0 + dissipation * dt;\n        gl_FragColor = result / decay;\n    }",
      h.supportLinearFiltering ? null : ["MANUAL_FILTERING"]
     ),
     W = w(
      l.FRAGMENT_SHADER,
      "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n    void main () {\n        float L = texture2D(uVelocity, vL).x;\n        float R = texture2D(uVelocity, vR).x;\n        float T = texture2D(uVelocity, vT).y;\n        float B = texture2D(uVelocity, vB).y;\n        vec2 C = texture2D(uVelocity, vUv).xy;\n        if (vL.x < 0.0) { L = -C.x; }\n        if (vR.x > 1.0) { R = -C.x; }\n        if (vT.y > 1.0) { T = -C.y; }\n        if (vB.y < 0.0) { B = -C.y; }\n        float div = 0.5 * (R - L + T - B);\n        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n    }\n"
     ),
     q = w(
      l.FRAGMENT_SHADER,
      "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n    void main () {\n        float L = texture2D(uVelocity, vL).y;\n        float R = texture2D(uVelocity, vR).y;\n        float T = texture2D(uVelocity, vT).x;\n        float B = texture2D(uVelocity, vB).x;\n        float vorticity = R - L - T + B;\n        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n    }\n"
     ),
     K = w(
      l.FRAGMENT_SHADER,
      "\n    precision highp float;\n    precision highp sampler2D;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uCurl;\n    uniform float curl;\n    uniform float dt;\n    void main () {\n        float L = texture2D(uCurl, vL).x;\n        float R = texture2D(uCurl, vR).x;\n        float T = texture2D(uCurl, vT).x;\n        float B = texture2D(uCurl, vB).x;\n        float C = texture2D(uCurl, vUv).x;\n        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n        force /= length(force) + 0.0001;\n        force *= curl * C;\n        force.y *= -1.0;\n        vec2 vel = texture2D(uVelocity, vUv).xy;\n        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n    }\n"
     ),
     $ = w(
      l.FRAGMENT_SHADER,
      "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n    void main () {\n        float L = texture2D(uPressure, vL).x;\n        float R = texture2D(uPressure, vR).x;\n        float T = texture2D(uPressure, vT).x;\n        float B = texture2D(uPressure, vB).x;\n        float C = texture2D(uPressure, vUv).x;\n        float divergence = texture2D(uDivergence, vUv).x;\n        float pressure = (L + R + B + T - divergence) * 0.25;\n        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n    }\n"
     ),
     J = w(
      l.FRAGMENT_SHADER,
      "\n    precision mediump float;\n    precision mediump sampler2D;\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n    void main () {\n        float L = texture2D(uPressure, vL).x;\n        float R = texture2D(uPressure, vR).x;\n        float T = texture2D(uPressure, vT).x;\n        float B = texture2D(uPressure, vB).x;\n        vec2 velocity = texture2D(uVelocity, vUv).xy;\n        velocity.xy -= vec2(R - L, T - B);\n        gl_FragColor = vec4(velocity, 0.0, 1.0);\n    }\n"
     ),
     Q = (function () {
      return (
       l.bindBuffer(l.ARRAY_BUFFER, l.createBuffer()),
       l.bufferData(l.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), l.STATIC_DRAW),
       l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, l.createBuffer()),
       l.bufferData(l.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), l.STATIC_DRAW),
       l.vertexAttribPointer(0, 2, l.FLOAT, !1, 0, 0),
       l.enableVertexAttribArray(0),
       function (e) {
        l.bindFramebuffer(l.FRAMEBUFFER, e), l.drawElements(l.TRIANGLES, 6, l.UNSIGNED_SHORT, 0);
       }
      );
     })(),
     Z = Ae("LDR_LLL1_0.png"),
     ee = new _(U, P),
     te = new _(k, I),
     ne = new _(k, F),
     re = new _(k, N),
     ie = new _(k, B),
     oe = new _(k, j),
     ae = new _(k, z),
     ue = new _(k, G),
     ce = new _(k, H),
     se = new _(k, V),
     le = new _(k, X),
     fe = new _(k, Y),
     de = new _(k, W),
     he = new _(k, q),
     pe = new _(k, K),
     ve = new _(k, $),
     ge = new _(k, J),
     me = new b(k, M);

    function be() {
     var e = tt(t.SIM_RESOLUTION),
      n = tt(t.DYE_RESOLUTION),
      r = h.halfFloatTexType,
      i = h.formatRGBA,
      o = h.formatRG,
      a = h.formatR,
      u = h.supportLinearFiltering ? l.LINEAR : l.NEAREST;
     (S = null == S ? we(n.width, n.height, i.internalFormat, i.format, r, u) : Se(S, n.width, n.height, i.internalFormat, i.format, r, u)),
      (A = null == A ? we(e.width, e.height, o.internalFormat, o.format, r, u) : Se(A, e.width, e.height, o.internalFormat, o.format, r, u)),
      (T = xe(e.width, e.height, a.internalFormat, a.format, r, l.NEAREST)),
      (R = xe(e.width, e.height, a.internalFormat, a.format, r, l.NEAREST)),
      (O = we(e.width, e.height, a.internalFormat, a.format, r, l.NEAREST)),
      _e(),
      ye();
    }

    function _e() {
     var e = tt(t.BLOOM_RESOLUTION),
      n = h.halfFloatTexType,
      r = h.formatRGBA,
      i = h.supportLinearFiltering ? l.LINEAR : l.NEAREST;
     (C = xe(e.width, e.height, r.internalFormat, r.format, n, i)), (u.length = 0);
     for (var o = 0; o < t.BLOOM_ITERATIONS; o++) {
      var a = e.width >> (o + 1),
       c = e.height >> (o + 1);
      if (a < 2 || c < 2) break;
      var s = xe(a, c, r.internalFormat, r.format, n, i);
      u.push(s);
     }
    }

    function ye() {
     var e = tt(t.SUNRAYS_RESOLUTION),
      n = h.halfFloatTexType,
      r = h.formatR,
      i = h.supportLinearFiltering ? l.LINEAR : l.NEAREST;
     (L = xe(e.width, e.height, r.internalFormat, r.format, n, i)), (D = xe(e.width, e.height, r.internalFormat, r.format, n, i));
    }

    function xe(e, t, n, r, i, o) {
     l.activeTexture(l.TEXTURE0);
     var a = l.createTexture();
     l.bindTexture(l.TEXTURE_2D, a),
      l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, o),
      l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, o),
      l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE),
      l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE),
      l.texImage2D(l.TEXTURE_2D, 0, n, e, t, 0, r, i, null);
     var u = l.createFramebuffer();
     l.bindFramebuffer(l.FRAMEBUFFER, u), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, a, 0), l.viewport(0, 0, e, t), l.clear(l.COLOR_BUFFER_BIT);
     var c = 1 / e,
      s = 1 / t;
     return {
      texture: a,
      fbo: u,
      width: e,
      height: t,
      texelSizeX: c,
      texelSizeY: s,
      attach: function (e) {
       return l.activeTexture(l.TEXTURE0 + e), l.bindTexture(l.TEXTURE_2D, a), e;
      },
     };
    }

    function we(e, t, n, r, i, o) {
     var a = xe(e, t, n, r, i, o),
      u = xe(e, t, n, r, i, o);
     return {
      width: e,
      height: t,
      texelSizeX: a.texelSizeX,
      texelSizeY: a.texelSizeY,
      get read() {
       return a;
      },
      set read(e) {
       a = e;
      },
      get write() {
       return u;
      },
      set write(e) {
       u = e;
      },
      swap: function () {
       var e = a;
       (a = u), (u = e);
      },
     };
    }

    function Ee(e, t, n, r, i, o, a) {
     var u = xe(t, n, r, i, o, a);
     return te.bind(), l.uniform1i(te.uniforms.uTexture, e.attach(0)), Q(u.fbo), u;
    }

    function Se(e, t, n, r, i, o, a) {
     return (e.width == t && e.height == n) || ((e.read = Ee(e.read, t, n, r, i, o, a)), (e.write = xe(t, n, r, i, o, a)), (e.width = t), (e.height = n), (e.texelSizeX = 1 / t), (e.texelSizeY = 1 / n)), e;
    }

    function Ae(e) {
     var t = l.createTexture();
     l.bindTexture(l.TEXTURE_2D, t),
      l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR),
      l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.LINEAR),
      l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.REPEAT),
      l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.REPEAT),
      l.texImage2D(l.TEXTURE_2D, 0, l.RGB, 1, 1, 0, l.RGB, l.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
     var n = {
       texture: t,
       width: 1,
       height: 1,
       attach: function (e) {
        return l.activeTexture(l.TEXTURE0 + e), l.bindTexture(l.TEXTURE_2D, t), e;
       },
      },
      r = new Image();
     return (
      (r.onload = function () {
       (n.width = r.width), (n.height = r.height), l.bindTexture(l.TEXTURE_2D, t), l.texImage2D(l.TEXTURE_2D, 0, l.RGB, l.RGB, l.UNSIGNED_BYTE, r);
      }),
      (r.src = e),
      n
     );
    }

    function Te() {
     var e = [];
     t.SHADING && e.push("SHADING"), t.BLOOM && e.push("BLOOM"), t.SUNRAYS && e.push("SUNRAYS"), me.setKeywords(e);
    }
    Te(), be(), t.IMMEDIATE && He(parseInt(20 * Math.random()) + 5);
    var Re = Date.now(),
     Oe = 0;

    function Ce() {
     var e = Le();
     De() && be(), ke(e), Ue(), t.PAUSED || Pe(e), Ie(null), requestAnimationFrame(Ce);
    }

    function Le() {
     var e = Date.now(),
      t = (e - Re) / 1e3;
     return (t = Math.min(t, 0.016666)), (Re = e), t;
    }

    function De() {
     var e = rt(n.clientWidth),
      t = rt(n.clientHeight);
     return (n.width != e || n.height != t) && ((n.width = e), (n.height = t), !0);
    }

    function ke(e) {
     t.COLORFUL &&
      ((Oe += e * t.COLOR_UPDATE_SPEED),
      Oe >= 1 &&
       ((Oe = et(Oe, 0, 1)),
       i.forEach(function (e) {
        e.color = Je();
       })));
    }

    function Ue() {
     o.length > 0 && He(o.pop()),
      i.forEach(function (e) {
       e.moved && ((e.moved = !1), Ge(e));
      });
    }

    function Pe(e) {
     l.disable(l.BLEND),
      l.viewport(0, 0, A.width, A.height),
      he.bind(),
      l.uniform2f(he.uniforms.texelSize, A.texelSizeX, A.texelSizeY),
      l.uniform1i(he.uniforms.uVelocity, A.read.attach(0)),
      Q(R.fbo),
      pe.bind(),
      l.uniform2f(pe.uniforms.texelSize, A.texelSizeX, A.texelSizeY),
      l.uniform1i(pe.uniforms.uVelocity, A.read.attach(0)),
      l.uniform1i(pe.uniforms.uCurl, R.attach(1)),
      l.uniform1f(pe.uniforms.curl, t.CURL),
      l.uniform1f(pe.uniforms.dt, e),
      Q(A.write.fbo),
      A.swap(),
      de.bind(),
      l.uniform2f(de.uniforms.texelSize, A.texelSizeX, A.texelSizeY),
      l.uniform1i(de.uniforms.uVelocity, A.read.attach(0)),
      Q(T.fbo),
      ne.bind(),
      l.uniform1i(ne.uniforms.uTexture, O.read.attach(0)),
      l.uniform1f(ne.uniforms.value, t.PRESSURE),
      Q(O.write.fbo),
      O.swap(),
      ve.bind(),
      l.uniform2f(ve.uniforms.texelSize, A.texelSizeX, A.texelSizeY),
      l.uniform1i(ve.uniforms.uDivergence, T.attach(0));
     for (var n = 0; n < t.PRESSURE_ITERATIONS; n++) l.uniform1i(ve.uniforms.uPressure, O.read.attach(1)), Q(O.write.fbo), O.swap();
     ge.bind(),
      l.uniform2f(ge.uniforms.texelSize, A.texelSizeX, A.texelSizeY),
      l.uniform1i(ge.uniforms.uPressure, O.read.attach(0)),
      l.uniform1i(ge.uniforms.uVelocity, A.read.attach(1)),
      Q(A.write.fbo),
      A.swap(),
      fe.bind(),
      l.uniform2f(fe.uniforms.texelSize, A.texelSizeX, A.texelSizeY),
      h.supportLinearFiltering || l.uniform2f(fe.uniforms.dyeTexelSize, A.texelSizeX, A.texelSizeY);
     var r = A.read.attach(0);
     l.uniform1i(fe.uniforms.uVelocity, r),
      l.uniform1i(fe.uniforms.uSource, r),
      l.uniform1f(fe.uniforms.dt, e),
      l.uniform1f(fe.uniforms.dissipation, t.VELOCITY_DISSIPATION),
      Q(A.write.fbo),
      A.swap(),
      l.viewport(0, 0, S.width, S.height),
      h.supportLinearFiltering || l.uniform2f(fe.uniforms.dyeTexelSize, S.texelSizeX, S.texelSizeY),
      l.uniform1i(fe.uniforms.uVelocity, A.read.attach(0)),
      l.uniform1i(fe.uniforms.uSource, S.read.attach(1)),
      l.uniform1f(fe.uniforms.dissipation, t.DENSITY_DISSIPATION),
      Q(S.write.fbo),
      S.swap();
    }

    function Ie(e) {
     t.BLOOM && Me(S.read, C), t.SUNRAYS && (je(S.read, S.write, L), ze(L, D, 1)), null != e && t.TRANSPARENT ? l.disable(l.BLEND) : (l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA), l.enable(l.BLEND));
     var n = null == e ? l.drawingBufferWidth : e.width,
      r = null == e ? l.drawingBufferHeight : e.height;
     l.viewport(0, 0, n, r);
     var i = null == e ? null : e.fbo;
     t.TRANSPARENT || Fe(i, Ze(t.BACK_COLOR)), null == e && t.TRANSPARENT && Ne(i), Be(i, n, r);
    }

    function Fe(e, t) {
     re.bind(), l.uniform4f(re.uniforms.color, t.r, t.g, t.b, 1), Q(e);
    }

    function Ne(e) {
     ie.bind(), l.uniform1f(ie.uniforms.aspectRatio, n.width / n.height), Q(e);
    }

    function Be(e, n, r) {
     if ((me.bind(), t.SHADING && l.uniform2f(me.uniforms.texelSize, 1 / n, 1 / r), l.uniform1i(me.uniforms.uTexture, S.read.attach(0)), t.BLOOM)) {
      l.uniform1i(me.uniforms.uBloom, C.attach(1)), l.uniform1i(me.uniforms.uDithering, Z.attach(2));
      var i = nt(Z, n, r);
      l.uniform2f(me.uniforms.ditherScale, i.x, i.y);
     }
     t.SUNRAYS && l.uniform1i(me.uniforms.uSunrays, L.attach(3)), Q(e);
    }

    function Me(e, n) {
     if (!(u.length < 2)) {
      var r = n;
      l.disable(l.BLEND), oe.bind();
      var i = t.BLOOM_THRESHOLD * t.BLOOM_SOFT_KNEE + 1e-4,
       o = t.BLOOM_THRESHOLD - i,
       a = 2 * i,
       c = 0.25 / i;
      l.uniform3f(oe.uniforms.curve, o, a, c), l.uniform1f(oe.uniforms.threshold, t.BLOOM_THRESHOLD), l.uniform1i(oe.uniforms.uTexture, e.attach(0)), l.viewport(0, 0, r.width, r.height), Q(r.fbo), ae.bind();
      for (var s = 0; s < u.length; s++) {
       var f = u[s];
       l.uniform2f(ae.uniforms.texelSize, r.texelSizeX, r.texelSizeY), l.uniform1i(ae.uniforms.uTexture, r.attach(0)), l.viewport(0, 0, f.width, f.height), Q(f.fbo), (r = f);
      }
      l.blendFunc(l.ONE, l.ONE), l.enable(l.BLEND);
      for (var d = u.length - 2; d >= 0; d--) {
       var h = u[d];
       l.uniform2f(ae.uniforms.texelSize, r.texelSizeX, r.texelSizeY), l.uniform1i(ae.uniforms.uTexture, r.attach(0)), l.viewport(0, 0, h.width, h.height), Q(h.fbo), (r = h);
      }
      l.disable(l.BLEND),
       ue.bind(),
       l.uniform2f(ue.uniforms.texelSize, r.texelSizeX, r.texelSizeY),
       l.uniform1i(ue.uniforms.uTexture, r.attach(0)),
       l.uniform1f(ue.uniforms.intensity, t.BLOOM_INTENSITY),
       l.viewport(0, 0, n.width, n.height),
       Q(n.fbo);
     }
    }

    function je(e, n, r) {
     l.disable(l.BLEND),
      ce.bind(),
      l.uniform1i(ce.uniforms.uTexture, e.attach(0)),
      l.viewport(0, 0, n.width, n.height),
      Q(n.fbo),
      se.bind(),
      l.uniform1f(se.uniforms.weight, t.SUNRAYS_WEIGHT),
      l.uniform1i(se.uniforms.uTexture, n.attach(0)),
      l.viewport(0, 0, r.width, r.height),
      Q(r.fbo);
    }

    function ze(e, t, n) {
     ee.bind();
     for (var r = 0; r < n; r++)
      l.uniform2f(ee.uniforms.texelSize, e.texelSizeX, 0), l.uniform1i(ee.uniforms.uTexture, e.attach(0)), Q(t.fbo), l.uniform2f(ee.uniforms.texelSize, 0, e.texelSizeY), l.uniform1i(ee.uniforms.uTexture, t.attach(0)), Q(e.fbo);
    }

    function Ge(e) {
     var n = e.deltaX * t.SPLAT_FORCE,
      r = e.deltaY * t.SPLAT_FORCE;
     Ve(e.texcoordX, e.texcoordY, n, r, e.color);
    }

    function He(e) {
     for (var t = 0; t < e; t++) {
      var n = Je();
      (n.r *= 10), (n.g *= 10), (n.b *= 10);
      var r = Math.random(),
       i = Math.random(),
       o = 1e3 * (Math.random() - 0.5),
       a = 1e3 * (Math.random() - 0.5);
      Ve(r, i, o, a, n);
     }
    }

    function Ve(e, r, i, o, a) {
     l.viewport(0, 0, A.width, A.height),
      le.bind(),
      l.uniform1i(le.uniforms.uTarget, A.read.attach(0)),
      l.uniform1f(le.uniforms.aspectRatio, n.width / n.height),
      l.uniform2f(le.uniforms.point, e, r),
      l.uniform3f(le.uniforms.color, i, o, 0),
      l.uniform1f(le.uniforms.radius, Xe(t.SPLAT_RADIUS / 100)),
      Q(A.write.fbo),
      A.swap(),
      l.viewport(0, 0, S.width, S.height),
      l.uniform1i(le.uniforms.uTarget, S.read.attach(0)),
      l.uniform3f(le.uniforms.color, a.r, a.g, a.b),
      Q(S.write.fbo),
      S.swap();
    }

    function Xe(e) {
     var t = n.width / n.height;
     return t > 1 && (e *= t), e;
    }

    function Ye(e, t, r, i) {
     (e.id = t), (e.down = !0), (e.moved = !1), (e.texcoordX = r / n.width), (e.texcoordY = 1 - i / n.height), (e.prevTexcoordX = e.texcoordX), (e.prevTexcoordY = e.texcoordY), (e.deltaX = 0), (e.deltaY = 0), (e.color = Je());
    }

    function We(e, r, i) {
     "click" === t.TRIGGER && (e.moved = e.down),
      (e.prevTexcoordX = e.texcoordX),
      (e.prevTexcoordY = e.texcoordY),
      (e.texcoordX = r / n.width),
      (e.texcoordY = 1 - i / n.height),
      (e.deltaX = Ke(e.texcoordX - e.prevTexcoordX)),
      (e.deltaY = $e(e.texcoordY - e.prevTexcoordY)),
      "hover" === t.TRIGGER && (e.moved = Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0);
    }

    function qe(e) {
     e.down = !1;
    }

    function Ke(e) {
     var t = n.width / n.height;
     return t < 1 && (e *= t), e;
    }

    function $e(e) {
     var t = n.width / n.height;
     return t > 1 && (e /= t), e;
    }

    function Je() {
     var e = Qe(40, 0, 0.5);
     return (e.r *= 0.15), (e.g *= 0.15), (e.b *= 0.15), e;
    }

    function Qe(e, t, n) {
     var r, i, o, a, u, c, s, l;
     switch (((a = Math.floor(6 * e)), (u = 6 * e - a), (c = n * (1 - t)), (s = n * (1 - u * t)), (l = n * (1 - (1 - u) * t)), a % 6)) {
      case 0:
       (r = n), (i = l), (o = c);
       break;
      case 1:
       (r = s), (i = n), (o = c);
       break;
      case 2:
       (r = c), (i = n), (o = l);
       break;
      case 3:
       (r = c), (i = s), (o = n);
       break;
      case 4:
       (r = l), (i = c), (o = n);
       break;
      case 5:
       (r = n), (i = c), (o = s);
       break;
     }
     return {
      r: r,
      g: i,
      b: o,
     };
    }

    function Ze(e) {
     var t = {
      r: e.r / 255,
      g: e.g / 255,
      b: e.b / 255,
     };
     return t;
    }

    function et(e, t, n) {
     var r = n - t;
     return 0 == r ? t : ((e - t) % r) + t;
    }

    function tt(e) {
     var t = l.drawingBufferWidth / l.drawingBufferHeight;
     t < 1 && (t = 1 / t);
     var n = Math.round(e),
      r = Math.round(e * t);
     return l.drawingBufferWidth > l.drawingBufferHeight
      ? {
         width: r,
         height: n,
        }
      : {
         width: n,
         height: r,
        };
    }

    function nt(e, t, n) {
     return {
      x: t / e.width,
      y: n / e.height,
     };
    }

    function rt(e) {
     var t = window.devicePixelRatio || 1;
     return Math.floor(e * t);
    }

    function it(e) {
     if (0 == e.length) return 0;
     for (var t = 0, n = 0; n < e.length; n++) (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
     return t;
    }
    Ce(),
     n.addEventListener("mousedown", function (e) {
      var t = rt(e.offsetX),
       n = rt(e.offsetY),
       o = i.find(function (e) {
        return -1 == e.id;
       });
      null == o && (o = new r()), Ye(o, -1, t, n);
     }),
     setTimeout(function () {
      n.addEventListener("mousemove", function (e) {
       var t = rt(e.offsetX),
        n = rt(e.offsetY);
       We(i[0], t, n);
      });
     }, 500),
     window.addEventListener("mouseup", function () {
      qe(i[0]);
     }),
     n.addEventListener("touchstart", function (e) {
      e.preventDefault();
      var t = e.targetTouches;
      while (t.length >= i.length) i.push(new r());
      for (var n = 0; n < t.length; n++) {
       var o = rt(t[n].pageX),
        a = rt(t[n].pageY);
       Ye(i[n + 1], t[n].identifier, o, a);
      }
     }),
     n.addEventListener(
      "touchmove",
      function (e) {
       e.preventDefault();
       for (var t = e.targetTouches, n = 0; n < t.length; n++) {
        var r = rt(t[n].pageX),
         o = rt(t[n].pageY);
        We(i[n + 1], r, o);
       }
      },
      !1
     ),
     window.addEventListener("touchend", function (e) {
      for (
       var t = e.changedTouches,
        n = function (e) {
         var n = i.find(function (n) {
          return n.id == t[e].identifier;
         });
         qe(n);
        },
        r = 0;
       r < t.length;
       r++
      )
       n(r);
     }),
     window.addEventListener("keydown", function (e) {
      "KeyP" === e.code && (t.PAUSED = !t.PAUSED), " " === e.key && o.push(parseInt(20 * Math.random()) + 5);
     });
   };
   t["default"] = h;
  },
  fb6a: function (e, t, n) {
   "use strict";
   var r = n("23e7"),
    i = n("861d"),
    o = n("e8b5"),
    a = n("23cb"),
    u = n("50c4"),
    c = n("fc6a"),
    s = n("8418"),
    l = n("b622"),
    f = n("1dde"),
    d = n("ae40"),
    h = f("slice"),
    p = d("slice", {
     ACCESSORS: !0,
     0: 0,
     1: 2,
    }),
    v = l("species"),
    g = [].slice,
    m = Math.max;
   r(
    {
     target: "Array",
     proto: !0,
     forced: !h || !p,
    },
    {
     slice: function (e, t) {
      var n,
       r,
       l,
       f = c(this),
       d = u(f.length),
       h = a(e, d),
       p = a(void 0 === t ? d : t, d);
      if (o(f) && ((n = f.constructor), "function" != typeof n || (n !== Array && !o(n.prototype)) ? i(n) && ((n = n[v]), null === n && (n = void 0)) : (n = void 0), n === Array || void 0 === n)) return g.call(f, h, p);
      for (r = new (void 0 === n ? Array : n)(m(p - h, 0)), l = 0; h < p; h++, l++) h in f && s(r, l, f[h]);
      return (r.length = l), r;
     },
    }
   );
  },
  fc6a: function (e, t, n) {
   var r = n("44ad"),
    i = n("1d80");
   e.exports = function (e) {
    return r(i(e));
   };
  },
  fdbc: function (e, t) {
   e.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
   };
  },
  fdbf: function (e, t, n) {
   var r = n("4930");
   e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
 });
});
