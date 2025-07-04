/*! For license information please see main.0b6896de.js.LICENSE.txt */
!(function () {
  var e = {
      47: function (e, t, n) {
        var r;
        (r = function () {
          return (function (e) {
            var t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var o = (t[r] = { i: r, l: !1, exports: {} });
              return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
              }),
              (n.r = function (e) {
                'undefined' !== typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (
                  (n.r(r),
                  Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                  2 & t && 'string' != typeof e)
                )
                  for (var o in e)
                    n.d(
                      r,
                      o,
                      function (t) {
                        return e[t];
                      }.bind(null, o)
                    );
                return r;
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, 'a', t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ''),
              n((n.s = 20))
            );
          })([
            function (e, t) {
              var r = {};
              (e.exports = r),
                (function () {
                  (r._baseDelta = 1e3 / 60),
                    (r._nextId = 0),
                    (r._seed = 0),
                    (r._nowStartTime = +new Date()),
                    (r._warnedOnce = {}),
                    (r._decomp = null),
                    (r.extend = function (e, t) {
                      var n, o;
                      'boolean' === typeof t ? ((n = 2), (o = t)) : ((n = 1), (o = !0));
                      for (var a = n; a < arguments.length; a++) {
                        var i = arguments[a];
                        if (i)
                          for (var l in i)
                            o && i[l] && i[l].constructor === Object
                              ? e[l] && e[l].constructor !== Object
                                ? (e[l] = i[l])
                                : ((e[l] = e[l] || {}), r.extend(e[l], o, i[l]))
                              : (e[l] = i[l]);
                      }
                      return e;
                    }),
                    (r.clone = function (e, t) {
                      return r.extend({}, t, e);
                    }),
                    (r.keys = function (e) {
                      if (Object.keys) return Object.keys(e);
                      var t = [];
                      for (var n in e) t.push(n);
                      return t;
                    }),
                    (r.values = function (e) {
                      var t = [];
                      if (Object.keys) {
                        for (var n = Object.keys(e), r = 0; r < n.length; r++) t.push(e[n[r]]);
                        return t;
                      }
                      for (var o in e) t.push(e[o]);
                      return t;
                    }),
                    (r.get = function (e, t, n, r) {
                      t = t.split('.').slice(n, r);
                      for (var o = 0; o < t.length; o += 1) e = e[t[o]];
                      return e;
                    }),
                    (r.set = function (e, t, n, o, a) {
                      var i = t.split('.').slice(o, a);
                      return (r.get(e, t, 0, -1)[i[i.length - 1]] = n), n;
                    }),
                    (r.shuffle = function (e) {
                      for (var t = e.length - 1; t > 0; t--) {
                        var n = Math.floor(r.random() * (t + 1)),
                          o = e[t];
                        (e[t] = e[n]), (e[n] = o);
                      }
                      return e;
                    }),
                    (r.choose = function (e) {
                      return e[Math.floor(r.random() * e.length)];
                    }),
                    (r.isElement = function (e) {
                      return 'undefined' !== typeof HTMLElement
                        ? e instanceof HTMLElement
                        : !!(e && e.nodeType && e.nodeName);
                    }),
                    (r.isArray = function (e) {
                      return '[object Array]' === Object.prototype.toString.call(e);
                    }),
                    (r.isFunction = function (e) {
                      return 'function' === typeof e;
                    }),
                    (r.isPlainObject = function (e) {
                      return 'object' === typeof e && e.constructor === Object;
                    }),
                    (r.isString = function (e) {
                      return '[object String]' === toString.call(e);
                    }),
                    (r.clamp = function (e, t, n) {
                      return e < t ? t : e > n ? n : e;
                    }),
                    (r.sign = function (e) {
                      return e < 0 ? -1 : 1;
                    }),
                    (r.now = function () {
                      if ('undefined' !== typeof window && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        if (window.performance.webkitNow) return window.performance.webkitNow();
                      }
                      return Date.now ? Date.now() : new Date() - r._nowStartTime;
                    }),
                    (r.random = function (t, n) {
                      return (
                        (n = 'undefined' !== typeof n ? n : 1),
                        (t = 'undefined' !== typeof t ? t : 0) + e() * (n - t)
                      );
                    });
                  var e = function () {
                    return (r._seed = (9301 * r._seed + 49297) % 233280), r._seed / 233280;
                  };
                  (r.colorToNumber = function (e) {
                    return (
                      3 == (e = e.replace('#', '')).length &&
                        (e =
                          e.charAt(0) +
                          e.charAt(0) +
                          e.charAt(1) +
                          e.charAt(1) +
                          e.charAt(2) +
                          e.charAt(2)),
                      parseInt(e, 16)
                    );
                  }),
                    (r.logLevel = 1),
                    (r.log = function () {
                      console &&
                        r.logLevel > 0 &&
                        r.logLevel <= 3 &&
                        console.log.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (r.info = function () {
                      console &&
                        r.logLevel > 0 &&
                        r.logLevel <= 2 &&
                        console.info.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (r.warn = function () {
                      console &&
                        r.logLevel > 0 &&
                        r.logLevel <= 3 &&
                        console.warn.apply(
                          console,
                          ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                        );
                    }),
                    (r.warnOnce = function () {
                      var e = Array.prototype.slice.call(arguments).join(' ');
                      r._warnedOnce[e] || (r.warn(e), (r._warnedOnce[e] = !0));
                    }),
                    (r.deprecated = function (e, t, n) {
                      e[t] = r.chain(function () {
                        r.warnOnce('\ud83d\udd05 deprecated \ud83d\udd05', n);
                      }, e[t]);
                    }),
                    (r.nextId = function () {
                      return r._nextId++;
                    }),
                    (r.indexOf = function (e, t) {
                      if (e.indexOf) return e.indexOf(t);
                      for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
                      return -1;
                    }),
                    (r.map = function (e, t) {
                      if (e.map) return e.map(t);
                      for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
                      return n;
                    }),
                    (r.topologicalSort = function (e) {
                      var t = [],
                        n = [],
                        o = [];
                      for (var a in e) n[a] || o[a] || r._topologicalSort(a, n, o, e, t);
                      return t;
                    }),
                    (r._topologicalSort = function (e, t, n, o, a) {
                      var i = o[e] || [];
                      n[e] = !0;
                      for (var l = 0; l < i.length; l += 1) {
                        var s = i[l];
                        n[s] || t[s] || r._topologicalSort(s, t, n, o, a);
                      }
                      (n[e] = !1), (t[e] = !0), a.push(e);
                    }),
                    (r.chain = function () {
                      for (var e = [], t = 0; t < arguments.length; t += 1) {
                        var n = arguments[t];
                        n._chained ? e.push.apply(e, n._chained) : e.push(n);
                      }
                      var r = function () {
                        for (
                          var t, n = new Array(arguments.length), r = 0, o = arguments.length;
                          r < o;
                          r++
                        )
                          n[r] = arguments[r];
                        for (r = 0; r < e.length; r += 1) {
                          var a = e[r].apply(t, n);
                          'undefined' !== typeof a && (t = a);
                        }
                        return t;
                      };
                      return (r._chained = e), r;
                    }),
                    (r.chainPathBefore = function (e, t, n) {
                      return r.set(e, t, r.chain(n, r.get(e, t)));
                    }),
                    (r.chainPathAfter = function (e, t, n) {
                      return r.set(e, t, r.chain(r.get(e, t), n));
                    }),
                    (r.setDecomp = function (e) {
                      r._decomp = e;
                    }),
                    (r.getDecomp = function () {
                      var e = r._decomp;
                      try {
                        e || 'undefined' === typeof window || (e = window.decomp),
                          e || 'undefined' === typeof n.g || (e = n.g.decomp);
                      } catch (t) {
                        e = null;
                      }
                      return e;
                    });
                })();
            },
            function (e, t) {
              var n = {};
              (e.exports = n),
                (n.create = function (e) {
                  var t = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                  return e && n.update(t, e), t;
                }),
                (n.update = function (e, t, n) {
                  (e.min.x = 1 / 0), (e.max.x = -1 / 0), (e.min.y = 1 / 0), (e.max.y = -1 / 0);
                  for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.x > e.max.x && (e.max.x = o.x),
                      o.x < e.min.x && (e.min.x = o.x),
                      o.y > e.max.y && (e.max.y = o.y),
                      o.y < e.min.y && (e.min.y = o.y);
                  }
                  n &&
                    (n.x > 0 ? (e.max.x += n.x) : (e.min.x += n.x),
                    n.y > 0 ? (e.max.y += n.y) : (e.min.y += n.y));
                }),
                (n.contains = function (e, t) {
                  return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y;
                }),
                (n.overlaps = function (e, t) {
                  return (
                    e.min.x <= t.max.x &&
                    e.max.x >= t.min.x &&
                    e.max.y >= t.min.y &&
                    e.min.y <= t.max.y
                  );
                }),
                (n.translate = function (e, t) {
                  (e.min.x += t.x), (e.max.x += t.x), (e.min.y += t.y), (e.max.y += t.y);
                }),
                (n.shift = function (e, t) {
                  var n = e.max.x - e.min.x,
                    r = e.max.y - e.min.y;
                  (e.min.x = t.x), (e.max.x = t.x + n), (e.min.y = t.y), (e.max.y = t.y + r);
                });
            },
            function (e, t) {
              var n = {};
              (e.exports = n),
                (n.create = function (e, t) {
                  return { x: e || 0, y: t || 0 };
                }),
                (n.clone = function (e) {
                  return { x: e.x, y: e.y };
                }),
                (n.magnitude = function (e) {
                  return Math.sqrt(e.x * e.x + e.y * e.y);
                }),
                (n.magnitudeSquared = function (e) {
                  return e.x * e.x + e.y * e.y;
                }),
                (n.rotate = function (e, t, n) {
                  var r = Math.cos(t),
                    o = Math.sin(t);
                  n || (n = {});
                  var a = e.x * r - e.y * o;
                  return (n.y = e.x * o + e.y * r), (n.x = a), n;
                }),
                (n.rotateAbout = function (e, t, n, r) {
                  var o = Math.cos(t),
                    a = Math.sin(t);
                  r || (r = {});
                  var i = n.x + ((e.x - n.x) * o - (e.y - n.y) * a);
                  return (r.y = n.y + ((e.x - n.x) * a + (e.y - n.y) * o)), (r.x = i), r;
                }),
                (n.normalise = function (e) {
                  var t = n.magnitude(e);
                  return 0 === t ? { x: 0, y: 0 } : { x: e.x / t, y: e.y / t };
                }),
                (n.dot = function (e, t) {
                  return e.x * t.x + e.y * t.y;
                }),
                (n.cross = function (e, t) {
                  return e.x * t.y - e.y * t.x;
                }),
                (n.cross3 = function (e, t, n) {
                  return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x);
                }),
                (n.add = function (e, t, n) {
                  return n || (n = {}), (n.x = e.x + t.x), (n.y = e.y + t.y), n;
                }),
                (n.sub = function (e, t, n) {
                  return n || (n = {}), (n.x = e.x - t.x), (n.y = e.y - t.y), n;
                }),
                (n.mult = function (e, t) {
                  return { x: e.x * t, y: e.y * t };
                }),
                (n.div = function (e, t) {
                  return { x: e.x / t, y: e.y / t };
                }),
                (n.perp = function (e, t) {
                  return { x: (t = !0 === t ? -1 : 1) * -e.y, y: t * e.x };
                }),
                (n.neg = function (e) {
                  return { x: -e.x, y: -e.y };
                }),
                (n.angle = function (e, t) {
                  return Math.atan2(t.y - e.y, t.x - e.x);
                }),
                (n._temp = [
                  n.create(),
                  n.create(),
                  n.create(),
                  n.create(),
                  n.create(),
                  n.create(),
                ]);
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(2),
                a = n(0);
              (r.create = function (e, t) {
                for (var n = [], r = 0; r < e.length; r++) {
                  var o = e[r],
                    a = { x: o.x, y: o.y, index: r, body: t, isInternal: !1 };
                  n.push(a);
                }
                return n;
              }),
                (r.fromPath = function (e, t) {
                  var n = [];
                  return (
                    e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi, function (e, t, r) {
                      n.push({ x: parseFloat(t), y: parseFloat(r) });
                    }),
                    r.create(n, t)
                  );
                }),
                (r.centre = function (e) {
                  for (var t, n, a, i = r.area(e, !0), l = { x: 0, y: 0 }, s = 0; s < e.length; s++)
                    (a = (s + 1) % e.length),
                      (t = o.cross(e[s], e[a])),
                      (n = o.mult(o.add(e[s], e[a]), t)),
                      (l = o.add(l, n));
                  return o.div(l, 6 * i);
                }),
                (r.mean = function (e) {
                  for (var t = { x: 0, y: 0 }, n = 0; n < e.length; n++)
                    (t.x += e[n].x), (t.y += e[n].y);
                  return o.div(t, e.length);
                }),
                (r.area = function (e, t) {
                  for (var n = 0, r = e.length - 1, o = 0; o < e.length; o++)
                    (n += (e[r].x - e[o].x) * (e[r].y + e[o].y)), (r = o);
                  return t ? n / 2 : Math.abs(n) / 2;
                }),
                (r.inertia = function (e, t) {
                  for (var n, r, a = 0, i = 0, l = e, s = 0; s < l.length; s++)
                    (r = (s + 1) % l.length),
                      (a +=
                        (n = Math.abs(o.cross(l[r], l[s]))) *
                        (o.dot(l[r], l[r]) + o.dot(l[r], l[s]) + o.dot(l[s], l[s]))),
                      (i += n);
                  return (t / 6) * (a / i);
                }),
                (r.translate = function (e, t, n) {
                  n = 'undefined' !== typeof n ? n : 1;
                  var r,
                    o = e.length,
                    a = t.x * n,
                    i = t.y * n;
                  for (r = 0; r < o; r++) (e[r].x += a), (e[r].y += i);
                  return e;
                }),
                (r.rotate = function (e, t, n) {
                  if (0 !== t) {
                    var r,
                      o,
                      a,
                      i,
                      l = Math.cos(t),
                      s = Math.sin(t),
                      u = n.x,
                      c = n.y,
                      f = e.length;
                    for (i = 0; i < f; i++)
                      (o = (r = e[i]).x - u),
                        (a = r.y - c),
                        (r.x = u + (o * l - a * s)),
                        (r.y = c + (o * s + a * l));
                    return e;
                  }
                }),
                (r.contains = function (e, t) {
                  for (var n, r = t.x, o = t.y, a = e.length, i = e[a - 1], l = 0; l < a; l++) {
                    if (((n = e[l]), (r - i.x) * (n.y - i.y) + (o - i.y) * (i.x - n.x) > 0))
                      return !1;
                    i = n;
                  }
                  return !0;
                }),
                (r.scale = function (e, t, n, a) {
                  if (1 === t && 1 === n) return e;
                  var i, l;
                  a = a || r.centre(e);
                  for (var s = 0; s < e.length; s++)
                    (i = e[s]),
                      (l = o.sub(i, a)),
                      (e[s].x = a.x + l.x * t),
                      (e[s].y = a.y + l.y * n);
                  return e;
                }),
                (r.chamfer = function (e, t, n, r, i) {
                  (t = 'number' === typeof t ? [t] : t || [8]),
                    (n = 'undefined' !== typeof n ? n : -1),
                    (r = r || 2),
                    (i = i || 14);
                  for (var l = [], s = 0; s < e.length; s++) {
                    var u = e[s - 1 >= 0 ? s - 1 : e.length - 1],
                      c = e[s],
                      f = e[(s + 1) % e.length],
                      d = t[s < t.length ? s : t.length - 1];
                    if (0 !== d) {
                      var p = o.normalise({ x: c.y - u.y, y: u.x - c.x }),
                        m = o.normalise({ x: f.y - c.y, y: c.x - f.x }),
                        v = Math.sqrt(2 * Math.pow(d, 2)),
                        y = o.mult(a.clone(p), d),
                        g = o.normalise(o.mult(o.add(p, m), 0.5)),
                        h = o.sub(c, o.mult(g, v)),
                        b = n;
                      -1 === n && (b = 1.75 * Math.pow(d, 0.32)),
                        (b = a.clamp(b, r, i)) % 2 === 1 && (b += 1);
                      for (var x = Math.acos(o.dot(p, m)) / b, w = 0; w < b; w++)
                        l.push(o.add(o.rotate(y, x * w), h));
                    } else l.push(c);
                  }
                  return l;
                }),
                (r.clockwiseSort = function (e) {
                  var t = r.mean(e);
                  return (
                    e.sort(function (e, n) {
                      return o.angle(t, e) - o.angle(t, n);
                    }),
                    e
                  );
                }),
                (r.isConvex = function (e) {
                  var t,
                    n,
                    r,
                    o,
                    a = 0,
                    i = e.length;
                  if (i < 3) return null;
                  for (t = 0; t < i; t++)
                    if (
                      ((r = (t + 2) % i),
                      (o = (e[(n = (t + 1) % i)].x - e[t].x) * (e[r].y - e[n].y)),
                      (o -= (e[n].y - e[t].y) * (e[r].x - e[n].x)) < 0
                        ? (a |= 1)
                        : o > 0 && (a |= 2),
                      3 === a)
                    )
                      return !1;
                  return 0 !== a || null;
                }),
                (r.hull = function (e) {
                  var t,
                    n,
                    r = [],
                    a = [];
                  for (
                    (e = e.slice(0)).sort(function (e, t) {
                      var n = e.x - t.x;
                      return 0 !== n ? n : e.y - t.y;
                    }),
                      n = 0;
                    n < e.length;
                    n += 1
                  ) {
                    for (
                      t = e[n];
                      a.length >= 2 && o.cross3(a[a.length - 2], a[a.length - 1], t) <= 0;

                    )
                      a.pop();
                    a.push(t);
                  }
                  for (n = e.length - 1; n >= 0; n -= 1) {
                    for (
                      t = e[n];
                      r.length >= 2 && o.cross3(r[r.length - 2], r[r.length - 1], t) <= 0;

                    )
                      r.pop();
                    r.push(t);
                  }
                  return r.pop(), a.pop(), r.concat(a);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(3),
                a = n(2),
                i = n(7),
                l = n(0),
                s = n(1),
                u = n(11);
              !(function () {
                (r._timeCorrection = !0),
                  (r._inertiaScale = 4),
                  (r._nextCollidingGroupId = 1),
                  (r._nextNonCollidingGroupId = -1),
                  (r._nextCategory = 1),
                  (r._baseDelta = 1e3 / 60),
                  (r.create = function (t) {
                    var n = {
                        id: l.nextId(),
                        type: 'body',
                        label: 'Body',
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: o.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
                        position: { x: 0, y: 0 },
                        force: { x: 0, y: 0 },
                        torque: 0,
                        positionImpulse: { x: 0, y: 0 },
                        constraintImpulse: { x: 0, y: 0, angle: 0 },
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: { x: 0, y: 0 },
                        angularVelocity: 0,
                        isSensor: !1,
                        isStatic: !1,
                        isSleeping: !1,
                        motion: 0,
                        sleepThreshold: 60,
                        density: 0.001,
                        restitution: 0,
                        friction: 0.1,
                        frictionStatic: 0.5,
                        frictionAir: 0.01,
                        collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                        slop: 0.05,
                        timeScale: 1,
                        render: {
                          visible: !0,
                          opacity: 1,
                          strokeStyle: null,
                          fillStyle: null,
                          lineWidth: null,
                          sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 },
                        },
                        events: null,
                        bounds: null,
                        chamfer: null,
                        circleRadius: 0,
                        positionPrev: null,
                        anglePrev: 0,
                        parent: null,
                        axes: null,
                        area: 0,
                        mass: 0,
                        inertia: 0,
                        deltaTime: 1e3 / 60,
                        _original: null,
                      },
                      r = l.extend(n, t);
                    return e(r, t), r;
                  }),
                  (r.nextGroup = function (e) {
                    return e ? r._nextNonCollidingGroupId-- : r._nextCollidingGroupId++;
                  }),
                  (r.nextCategory = function () {
                    return (r._nextCategory = r._nextCategory << 1), r._nextCategory;
                  });
                var e = function (e, t) {
                  (t = t || {}),
                    r.set(e, {
                      bounds: e.bounds || s.create(e.vertices),
                      positionPrev: e.positionPrev || a.clone(e.position),
                      anglePrev: e.anglePrev || e.angle,
                      vertices: e.vertices,
                      parts: e.parts || [e],
                      isStatic: e.isStatic,
                      isSleeping: e.isSleeping,
                      parent: e.parent || e,
                    }),
                    o.rotate(e.vertices, e.angle, e.position),
                    u.rotate(e.axes, e.angle),
                    s.update(e.bounds, e.vertices, e.velocity),
                    r.set(e, {
                      axes: t.axes || e.axes,
                      area: t.area || e.area,
                      mass: t.mass || e.mass,
                      inertia: t.inertia || e.inertia,
                    });
                  var n = e.isStatic
                      ? '#14151f'
                      : l.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']),
                    i = e.isStatic ? '#555' : '#ccc',
                    c = e.isStatic && null === e.render.fillStyle ? 1 : 0;
                  (e.render.fillStyle = e.render.fillStyle || n),
                    (e.render.strokeStyle = e.render.strokeStyle || i),
                    (e.render.lineWidth = e.render.lineWidth || c),
                    (e.render.sprite.xOffset +=
                      -(e.bounds.min.x - e.position.x) / (e.bounds.max.x - e.bounds.min.x)),
                    (e.render.sprite.yOffset +=
                      -(e.bounds.min.y - e.position.y) / (e.bounds.max.y - e.bounds.min.y));
                };
                (r.set = function (e, t, n) {
                  var o;
                  for (o in ('string' === typeof t && ((o = t), ((t = {})[o] = n)), t))
                    if (Object.prototype.hasOwnProperty.call(t, o))
                      switch (((n = t[o]), o)) {
                        case 'isStatic':
                          r.setStatic(e, n);
                          break;
                        case 'isSleeping':
                          i.set(e, n);
                          break;
                        case 'mass':
                          r.setMass(e, n);
                          break;
                        case 'density':
                          r.setDensity(e, n);
                          break;
                        case 'inertia':
                          r.setInertia(e, n);
                          break;
                        case 'vertices':
                          r.setVertices(e, n);
                          break;
                        case 'position':
                          r.setPosition(e, n);
                          break;
                        case 'angle':
                          r.setAngle(e, n);
                          break;
                        case 'velocity':
                          r.setVelocity(e, n);
                          break;
                        case 'angularVelocity':
                          r.setAngularVelocity(e, n);
                          break;
                        case 'speed':
                          r.setSpeed(e, n);
                          break;
                        case 'angularSpeed':
                          r.setAngularSpeed(e, n);
                          break;
                        case 'parts':
                          r.setParts(e, n);
                          break;
                        case 'centre':
                          r.setCentre(e, n);
                          break;
                        default:
                          e[o] = n;
                      }
                }),
                  (r.setStatic = function (e, t) {
                    for (var n = 0; n < e.parts.length; n++) {
                      var r = e.parts[n];
                      (r.isStatic = t),
                        t
                          ? ((r._original = {
                              restitution: r.restitution,
                              friction: r.friction,
                              mass: r.mass,
                              inertia: r.inertia,
                              density: r.density,
                              inverseMass: r.inverseMass,
                              inverseInertia: r.inverseInertia,
                            }),
                            (r.restitution = 0),
                            (r.friction = 1),
                            (r.mass = r.inertia = r.density = 1 / 0),
                            (r.inverseMass = r.inverseInertia = 0),
                            (r.positionPrev.x = r.position.x),
                            (r.positionPrev.y = r.position.y),
                            (r.anglePrev = r.angle),
                            (r.angularVelocity = 0),
                            (r.speed = 0),
                            (r.angularSpeed = 0),
                            (r.motion = 0))
                          : r._original &&
                            ((r.restitution = r._original.restitution),
                            (r.friction = r._original.friction),
                            (r.mass = r._original.mass),
                            (r.inertia = r._original.inertia),
                            (r.density = r._original.density),
                            (r.inverseMass = r._original.inverseMass),
                            (r.inverseInertia = r._original.inverseInertia),
                            (r._original = null));
                    }
                  }),
                  (r.setMass = function (e, t) {
                    var n = e.inertia / (e.mass / 6);
                    (e.inertia = n * (t / 6)),
                      (e.inverseInertia = 1 / e.inertia),
                      (e.mass = t),
                      (e.inverseMass = 1 / e.mass),
                      (e.density = e.mass / e.area);
                  }),
                  (r.setDensity = function (e, t) {
                    r.setMass(e, t * e.area), (e.density = t);
                  }),
                  (r.setInertia = function (e, t) {
                    (e.inertia = t), (e.inverseInertia = 1 / e.inertia);
                  }),
                  (r.setVertices = function (e, t) {
                    t[0].body === e ? (e.vertices = t) : (e.vertices = o.create(t, e)),
                      (e.axes = u.fromVertices(e.vertices)),
                      (e.area = o.area(e.vertices)),
                      r.setMass(e, e.density * e.area);
                    var n = o.centre(e.vertices);
                    o.translate(e.vertices, n, -1),
                      r.setInertia(e, r._inertiaScale * o.inertia(e.vertices, e.mass)),
                      o.translate(e.vertices, e.position),
                      s.update(e.bounds, e.vertices, e.velocity);
                  }),
                  (r.setParts = function (e, t, n) {
                    var a;
                    for (
                      t = t.slice(0), e.parts.length = 0, e.parts.push(e), e.parent = e, a = 0;
                      a < t.length;
                      a++
                    ) {
                      var i = t[a];
                      i !== e && ((i.parent = e), e.parts.push(i));
                    }
                    if (1 !== e.parts.length) {
                      if ((n = 'undefined' === typeof n || n)) {
                        var l = [];
                        for (a = 0; a < t.length; a++) l = l.concat(t[a].vertices);
                        o.clockwiseSort(l);
                        var s = o.hull(l),
                          u = o.centre(s);
                        r.setVertices(e, s), o.translate(e.vertices, u);
                      }
                      var c = r._totalProperties(e);
                      (e.area = c.area),
                        (e.parent = e),
                        (e.position.x = c.centre.x),
                        (e.position.y = c.centre.y),
                        (e.positionPrev.x = c.centre.x),
                        (e.positionPrev.y = c.centre.y),
                        r.setMass(e, c.mass),
                        r.setInertia(e, c.inertia),
                        r.setPosition(e, c.centre);
                    }
                  }),
                  (r.setCentre = function (e, t, n) {
                    n
                      ? ((e.positionPrev.x += t.x),
                        (e.positionPrev.y += t.y),
                        (e.position.x += t.x),
                        (e.position.y += t.y))
                      : ((e.positionPrev.x = t.x - (e.position.x - e.positionPrev.x)),
                        (e.positionPrev.y = t.y - (e.position.y - e.positionPrev.y)),
                        (e.position.x = t.x),
                        (e.position.y = t.y));
                  }),
                  (r.setPosition = function (e, t, n) {
                    var r = a.sub(t, e.position);
                    n
                      ? ((e.positionPrev.x = e.position.x),
                        (e.positionPrev.y = e.position.y),
                        (e.velocity.x = r.x),
                        (e.velocity.y = r.y),
                        (e.speed = a.magnitude(r)))
                      : ((e.positionPrev.x += r.x), (e.positionPrev.y += r.y));
                    for (var i = 0; i < e.parts.length; i++) {
                      var l = e.parts[i];
                      (l.position.x += r.x),
                        (l.position.y += r.y),
                        o.translate(l.vertices, r),
                        s.update(l.bounds, l.vertices, e.velocity);
                    }
                  }),
                  (r.setAngle = function (e, t, n) {
                    var r = t - e.angle;
                    n
                      ? ((e.anglePrev = e.angle),
                        (e.angularVelocity = r),
                        (e.angularSpeed = Math.abs(r)))
                      : (e.anglePrev += r);
                    for (var i = 0; i < e.parts.length; i++) {
                      var l = e.parts[i];
                      (l.angle += r),
                        o.rotate(l.vertices, r, e.position),
                        u.rotate(l.axes, r),
                        s.update(l.bounds, l.vertices, e.velocity),
                        i > 0 && a.rotateAbout(l.position, r, e.position, l.position);
                    }
                  }),
                  (r.setVelocity = function (e, t) {
                    var n = e.deltaTime / r._baseDelta;
                    (e.positionPrev.x = e.position.x - t.x * n),
                      (e.positionPrev.y = e.position.y - t.y * n),
                      (e.velocity.x = (e.position.x - e.positionPrev.x) / n),
                      (e.velocity.y = (e.position.y - e.positionPrev.y) / n),
                      (e.speed = a.magnitude(e.velocity));
                  }),
                  (r.getVelocity = function (e) {
                    var t = r._baseDelta / e.deltaTime;
                    return {
                      x: (e.position.x - e.positionPrev.x) * t,
                      y: (e.position.y - e.positionPrev.y) * t,
                    };
                  }),
                  (r.getSpeed = function (e) {
                    return a.magnitude(r.getVelocity(e));
                  }),
                  (r.setSpeed = function (e, t) {
                    r.setVelocity(e, a.mult(a.normalise(r.getVelocity(e)), t));
                  }),
                  (r.setAngularVelocity = function (e, t) {
                    var n = e.deltaTime / r._baseDelta;
                    (e.anglePrev = e.angle - t * n),
                      (e.angularVelocity = (e.angle - e.anglePrev) / n),
                      (e.angularSpeed = Math.abs(e.angularVelocity));
                  }),
                  (r.getAngularVelocity = function (e) {
                    return ((e.angle - e.anglePrev) * r._baseDelta) / e.deltaTime;
                  }),
                  (r.getAngularSpeed = function (e) {
                    return Math.abs(r.getAngularVelocity(e));
                  }),
                  (r.setAngularSpeed = function (e, t) {
                    r.setAngularVelocity(e, l.sign(r.getAngularVelocity(e)) * t);
                  }),
                  (r.translate = function (e, t, n) {
                    r.setPosition(e, a.add(e.position, t), n);
                  }),
                  (r.rotate = function (e, t, n, o) {
                    if (n) {
                      var a = Math.cos(t),
                        i = Math.sin(t),
                        l = e.position.x - n.x,
                        s = e.position.y - n.y;
                      r.setPosition(e, { x: n.x + (l * a - s * i), y: n.y + (l * i + s * a) }, o),
                        r.setAngle(e, e.angle + t, o);
                    } else r.setAngle(e, e.angle + t, o);
                  }),
                  (r.scale = function (e, t, n, a) {
                    var i = 0,
                      l = 0;
                    a = a || e.position;
                    for (var c = 0; c < e.parts.length; c++) {
                      var f = e.parts[c];
                      o.scale(f.vertices, t, n, a),
                        (f.axes = u.fromVertices(f.vertices)),
                        (f.area = o.area(f.vertices)),
                        r.setMass(f, e.density * f.area),
                        o.translate(f.vertices, { x: -f.position.x, y: -f.position.y }),
                        r.setInertia(f, r._inertiaScale * o.inertia(f.vertices, f.mass)),
                        o.translate(f.vertices, { x: f.position.x, y: f.position.y }),
                        c > 0 && ((i += f.area), (l += f.inertia)),
                        (f.position.x = a.x + (f.position.x - a.x) * t),
                        (f.position.y = a.y + (f.position.y - a.y) * n),
                        s.update(f.bounds, f.vertices, e.velocity);
                    }
                    e.parts.length > 1 &&
                      ((e.area = i),
                      e.isStatic || (r.setMass(e, e.density * i), r.setInertia(e, l))),
                      e.circleRadius && (t === n ? (e.circleRadius *= t) : (e.circleRadius = null));
                  }),
                  (r.update = function (e, t) {
                    var n = (t = ('undefined' !== typeof t ? t : 1e3 / 60) * e.timeScale) * t,
                      i = r._timeCorrection ? t / (e.deltaTime || t) : 1,
                      c = 1 - e.frictionAir * (t / l._baseDelta),
                      f = (e.position.x - e.positionPrev.x) * i,
                      d = (e.position.y - e.positionPrev.y) * i;
                    (e.velocity.x = f * c + (e.force.x / e.mass) * n),
                      (e.velocity.y = d * c + (e.force.y / e.mass) * n),
                      (e.positionPrev.x = e.position.x),
                      (e.positionPrev.y = e.position.y),
                      (e.position.x += e.velocity.x),
                      (e.position.y += e.velocity.y),
                      (e.deltaTime = t),
                      (e.angularVelocity =
                        (e.angle - e.anglePrev) * c * i + (e.torque / e.inertia) * n),
                      (e.anglePrev = e.angle),
                      (e.angle += e.angularVelocity);
                    for (var p = 0; p < e.parts.length; p++) {
                      var m = e.parts[p];
                      o.translate(m.vertices, e.velocity),
                        p > 0 && ((m.position.x += e.velocity.x), (m.position.y += e.velocity.y)),
                        0 !== e.angularVelocity &&
                          (o.rotate(m.vertices, e.angularVelocity, e.position),
                          u.rotate(m.axes, e.angularVelocity),
                          p > 0 &&
                            a.rotateAbout(m.position, e.angularVelocity, e.position, m.position)),
                        s.update(m.bounds, m.vertices, e.velocity);
                    }
                  }),
                  (r.updateVelocities = function (e) {
                    var t = r._baseDelta / e.deltaTime,
                      n = e.velocity;
                    (n.x = (e.position.x - e.positionPrev.x) * t),
                      (n.y = (e.position.y - e.positionPrev.y) * t),
                      (e.speed = Math.sqrt(n.x * n.x + n.y * n.y)),
                      (e.angularVelocity = (e.angle - e.anglePrev) * t),
                      (e.angularSpeed = Math.abs(e.angularVelocity));
                  }),
                  (r.applyForce = function (e, t, n) {
                    var r = t.x - e.position.x,
                      o = t.y - e.position.y;
                    (e.force.x += n.x), (e.force.y += n.y), (e.torque += r * n.y - o * n.x);
                  }),
                  (r._totalProperties = function (e) {
                    for (
                      var t = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        n = 1 === e.parts.length ? 0 : 1;
                      n < e.parts.length;
                      n++
                    ) {
                      var r = e.parts[n],
                        o = r.mass !== 1 / 0 ? r.mass : 1;
                      (t.mass += o),
                        (t.area += r.area),
                        (t.inertia += r.inertia),
                        (t.centre = a.add(t.centre, a.mult(r.position, o)));
                    }
                    return (t.centre = a.div(t.centre, t.mass)), t;
                  });
              })();
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(0);
              (r.on = function (e, t, n) {
                for (var r, o = t.split(' '), a = 0; a < o.length; a++)
                  (r = o[a]),
                    (e.events = e.events || {}),
                    (e.events[r] = e.events[r] || []),
                    e.events[r].push(n);
                return n;
              }),
                (r.off = function (e, t, n) {
                  if (t) {
                    'function' === typeof t && ((n = t), (t = o.keys(e.events).join(' ')));
                    for (var r = t.split(' '), a = 0; a < r.length; a++) {
                      var i = e.events[r[a]],
                        l = [];
                      if (n && i) for (var s = 0; s < i.length; s++) i[s] !== n && l.push(i[s]);
                      e.events[r[a]] = l;
                    }
                  } else e.events = {};
                }),
                (r.trigger = function (e, t, n) {
                  var r,
                    a,
                    i,
                    l,
                    s = e.events;
                  if (s && o.keys(s).length > 0) {
                    n || (n = {}), (r = t.split(' '));
                    for (var u = 0; u < r.length; u++)
                      if ((i = s[(a = r[u])])) {
                        ((l = o.clone(n, !1)).name = a), (l.source = e);
                        for (var c = 0; c < i.length; c++) i[c].apply(e, [l]);
                      }
                  }
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(5),
                a = n(0),
                i = n(1),
                l = n(4);
              (r.create = function (e) {
                return a.extend(
                  {
                    id: a.nextId(),
                    type: 'composite',
                    parent: null,
                    isModified: !1,
                    bodies: [],
                    constraints: [],
                    composites: [],
                    label: 'Composite',
                    plugin: {},
                    cache: { allBodies: null, allConstraints: null, allComposites: null },
                  },
                  e
                );
              }),
                (r.setModified = function (e, t, n, o) {
                  if (
                    ((e.isModified = t),
                    t &&
                      e.cache &&
                      ((e.cache.allBodies = null),
                      (e.cache.allConstraints = null),
                      (e.cache.allComposites = null)),
                    n && e.parent && r.setModified(e.parent, t, n, o),
                    o)
                  )
                    for (var a = 0; a < e.composites.length; a++) {
                      var i = e.composites[a];
                      r.setModified(i, t, n, o);
                    }
                }),
                (r.add = function (e, t) {
                  var n = [].concat(t);
                  o.trigger(e, 'beforeAdd', { object: t });
                  for (var i = 0; i < n.length; i++) {
                    var l = n[i];
                    switch (l.type) {
                      case 'body':
                        if (l.parent !== l) {
                          a.warn(
                            'Composite.add: skipped adding a compound body part (you must add its parent instead)'
                          );
                          break;
                        }
                        r.addBody(e, l);
                        break;
                      case 'constraint':
                        r.addConstraint(e, l);
                        break;
                      case 'composite':
                        r.addComposite(e, l);
                        break;
                      case 'mouseConstraint':
                        r.addConstraint(e, l.constraint);
                    }
                  }
                  return o.trigger(e, 'afterAdd', { object: t }), e;
                }),
                (r.remove = function (e, t, n) {
                  var a = [].concat(t);
                  o.trigger(e, 'beforeRemove', { object: t });
                  for (var i = 0; i < a.length; i++) {
                    var l = a[i];
                    switch (l.type) {
                      case 'body':
                        r.removeBody(e, l, n);
                        break;
                      case 'constraint':
                        r.removeConstraint(e, l, n);
                        break;
                      case 'composite':
                        r.removeComposite(e, l, n);
                        break;
                      case 'mouseConstraint':
                        r.removeConstraint(e, l.constraint);
                    }
                  }
                  return o.trigger(e, 'afterRemove', { object: t }), e;
                }),
                (r.addComposite = function (e, t) {
                  return e.composites.push(t), (t.parent = e), r.setModified(e, !0, !0, !1), e;
                }),
                (r.removeComposite = function (e, t, n) {
                  var o = a.indexOf(e.composites, t);
                  if ((-1 !== o && r.removeCompositeAt(e, o), n))
                    for (var i = 0; i < e.composites.length; i++)
                      r.removeComposite(e.composites[i], t, !0);
                  return e;
                }),
                (r.removeCompositeAt = function (e, t) {
                  return e.composites.splice(t, 1), r.setModified(e, !0, !0, !1), e;
                }),
                (r.addBody = function (e, t) {
                  return e.bodies.push(t), r.setModified(e, !0, !0, !1), e;
                }),
                (r.removeBody = function (e, t, n) {
                  var o = a.indexOf(e.bodies, t);
                  if ((-1 !== o && r.removeBodyAt(e, o), n))
                    for (var i = 0; i < e.composites.length; i++)
                      r.removeBody(e.composites[i], t, !0);
                  return e;
                }),
                (r.removeBodyAt = function (e, t) {
                  return e.bodies.splice(t, 1), r.setModified(e, !0, !0, !1), e;
                }),
                (r.addConstraint = function (e, t) {
                  return e.constraints.push(t), r.setModified(e, !0, !0, !1), e;
                }),
                (r.removeConstraint = function (e, t, n) {
                  var o = a.indexOf(e.constraints, t);
                  if ((-1 !== o && r.removeConstraintAt(e, o), n))
                    for (var i = 0; i < e.composites.length; i++)
                      r.removeConstraint(e.composites[i], t, !0);
                  return e;
                }),
                (r.removeConstraintAt = function (e, t) {
                  return e.constraints.splice(t, 1), r.setModified(e, !0, !0, !1), e;
                }),
                (r.clear = function (e, t, n) {
                  if (n)
                    for (var o = 0; o < e.composites.length; o++) r.clear(e.composites[o], t, !0);
                  return (
                    t
                      ? (e.bodies = e.bodies.filter(function (e) {
                          return e.isStatic;
                        }))
                      : (e.bodies.length = 0),
                    (e.constraints.length = 0),
                    (e.composites.length = 0),
                    r.setModified(e, !0, !0, !1),
                    e
                  );
                }),
                (r.allBodies = function (e) {
                  if (e.cache && e.cache.allBodies) return e.cache.allBodies;
                  for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++)
                    t = t.concat(r.allBodies(e.composites[n]));
                  return e.cache && (e.cache.allBodies = t), t;
                }),
                (r.allConstraints = function (e) {
                  if (e.cache && e.cache.allConstraints) return e.cache.allConstraints;
                  for (var t = [].concat(e.constraints), n = 0; n < e.composites.length; n++)
                    t = t.concat(r.allConstraints(e.composites[n]));
                  return e.cache && (e.cache.allConstraints = t), t;
                }),
                (r.allComposites = function (e) {
                  if (e.cache && e.cache.allComposites) return e.cache.allComposites;
                  for (var t = [].concat(e.composites), n = 0; n < e.composites.length; n++)
                    t = t.concat(r.allComposites(e.composites[n]));
                  return e.cache && (e.cache.allComposites = t), t;
                }),
                (r.get = function (e, t, n) {
                  var o, a;
                  switch (n) {
                    case 'body':
                      o = r.allBodies(e);
                      break;
                    case 'constraint':
                      o = r.allConstraints(e);
                      break;
                    case 'composite':
                      o = r.allComposites(e).concat(e);
                  }
                  return o
                    ? 0 ===
                      (a = o.filter(function (e) {
                        return e.id.toString() === t.toString();
                      })).length
                      ? null
                      : a[0]
                    : null;
                }),
                (r.move = function (e, t, n) {
                  return r.remove(e, t), r.add(n, t), e;
                }),
                (r.rebase = function (e) {
                  for (
                    var t = r.allBodies(e).concat(r.allConstraints(e)).concat(r.allComposites(e)),
                      n = 0;
                    n < t.length;
                    n++
                  )
                    t[n].id = a.nextId();
                  return e;
                }),
                (r.translate = function (e, t, n) {
                  for (var o = n ? r.allBodies(e) : e.bodies, a = 0; a < o.length; a++)
                    l.translate(o[a], t);
                  return e;
                }),
                (r.rotate = function (e, t, n, o) {
                  for (
                    var a = Math.cos(t), i = Math.sin(t), s = o ? r.allBodies(e) : e.bodies, u = 0;
                    u < s.length;
                    u++
                  ) {
                    var c = s[u],
                      f = c.position.x - n.x,
                      d = c.position.y - n.y;
                    l.setPosition(c, { x: n.x + (f * a - d * i), y: n.y + (f * i + d * a) }),
                      l.rotate(c, t);
                  }
                  return e;
                }),
                (r.scale = function (e, t, n, o, a) {
                  for (var i = a ? r.allBodies(e) : e.bodies, s = 0; s < i.length; s++) {
                    var u = i[s],
                      c = u.position.x - o.x,
                      f = u.position.y - o.y;
                    l.setPosition(u, { x: o.x + c * t, y: o.y + f * n }), l.scale(u, t, n);
                  }
                  return e;
                }),
                (r.bounds = function (e) {
                  for (var t = r.allBodies(e), n = [], o = 0; o < t.length; o += 1) {
                    var a = t[o];
                    n.push(a.bounds.min, a.bounds.max);
                  }
                  return i.create(n);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(4),
                a = n(5),
                i = n(0);
              (r._motionWakeThreshold = 0.18),
                (r._motionSleepThreshold = 0.08),
                (r._minBias = 0.9),
                (r.update = function (e, t) {
                  for (
                    var n = t / i._baseDelta, a = r._motionSleepThreshold, l = 0;
                    l < e.length;
                    l++
                  ) {
                    var s = e[l],
                      u = o.getSpeed(s),
                      c = o.getAngularSpeed(s),
                      f = u * u + c * c;
                    if (0 === s.force.x && 0 === s.force.y) {
                      var d = Math.min(s.motion, f),
                        p = Math.max(s.motion, f);
                      (s.motion = r._minBias * d + (1 - r._minBias) * p),
                        s.sleepThreshold > 0 && s.motion < a
                          ? ((s.sleepCounter += 1),
                            s.sleepCounter >= s.sleepThreshold / n && r.set(s, !0))
                          : s.sleepCounter > 0 && (s.sleepCounter -= 1);
                    } else r.set(s, !1);
                  }
                }),
                (r.afterCollisions = function (e) {
                  for (var t = r._motionSleepThreshold, n = 0; n < e.length; n++) {
                    var o = e[n];
                    if (o.isActive) {
                      var a = o.collision,
                        i = a.bodyA.parent,
                        l = a.bodyB.parent;
                      if (
                        !((i.isSleeping && l.isSleeping) || i.isStatic || l.isStatic) &&
                        (i.isSleeping || l.isSleeping)
                      ) {
                        var s = i.isSleeping && !i.isStatic ? i : l,
                          u = s === i ? l : i;
                        !s.isStatic && u.motion > t && r.set(s, !1);
                      }
                    }
                  }
                }),
                (r.set = function (e, t) {
                  var n = e.isSleeping;
                  t
                    ? ((e.isSleeping = !0),
                      (e.sleepCounter = e.sleepThreshold),
                      (e.positionImpulse.x = 0),
                      (e.positionImpulse.y = 0),
                      (e.positionPrev.x = e.position.x),
                      (e.positionPrev.y = e.position.y),
                      (e.anglePrev = e.angle),
                      (e.speed = 0),
                      (e.angularSpeed = 0),
                      (e.motion = 0),
                      n || a.trigger(e, 'sleepStart'))
                    : ((e.isSleeping = !1), (e.sleepCounter = 0), n && a.trigger(e, 'sleepEnd'));
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(3),
                a = n(9);
              !(function () {
                var e = [],
                  t = { overlap: 0, axis: null },
                  n = { overlap: 0, axis: null };
                (r.create = function (e, t) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: e,
                    bodyB: t,
                    parentA: e.parent,
                    parentB: t.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [],
                  };
                }),
                  (r.collides = function (e, i, l) {
                    if ((r._overlapAxes(t, e.vertices, i.vertices, e.axes), t.overlap <= 0))
                      return null;
                    if ((r._overlapAxes(n, i.vertices, e.vertices, i.axes), n.overlap <= 0))
                      return null;
                    var s,
                      u,
                      c = l && l.table[a.id(e, i)];
                    c
                      ? (s = c.collision)
                      : (((s = r.create(e, i)).collided = !0),
                        (s.bodyA = e.id < i.id ? e : i),
                        (s.bodyB = e.id < i.id ? i : e),
                        (s.parentA = s.bodyA.parent),
                        (s.parentB = s.bodyB.parent)),
                      (e = s.bodyA),
                      (i = s.bodyB),
                      (u = t.overlap < n.overlap ? t : n);
                    var f = s.normal,
                      d = s.supports,
                      p = u.axis,
                      m = p.x,
                      v = p.y;
                    m * (i.position.x - e.position.x) + v * (i.position.y - e.position.y) < 0
                      ? ((f.x = m), (f.y = v))
                      : ((f.x = -m), (f.y = -v)),
                      (s.tangent.x = -f.y),
                      (s.tangent.y = f.x),
                      (s.depth = u.overlap),
                      (s.penetration.x = f.x * s.depth),
                      (s.penetration.y = f.y * s.depth);
                    var y = r._findSupports(e, i, f, 1),
                      g = 0;
                    if (
                      (o.contains(e.vertices, y[0]) && (d[g++] = y[0]),
                      o.contains(e.vertices, y[1]) && (d[g++] = y[1]),
                      g < 2)
                    ) {
                      var h = r._findSupports(i, e, f, -1);
                      o.contains(i.vertices, h[0]) && (d[g++] = h[0]),
                        g < 2 && o.contains(i.vertices, h[1]) && (d[g++] = h[1]);
                    }
                    return 0 === g && (d[g++] = y[0]), (d.length = g), s;
                  }),
                  (r._overlapAxes = function (e, t, n, r) {
                    var o,
                      a,
                      i,
                      l,
                      s,
                      u,
                      c = t.length,
                      f = n.length,
                      d = t[0].x,
                      p = t[0].y,
                      m = n[0].x,
                      v = n[0].y,
                      y = r.length,
                      g = Number.MAX_VALUE,
                      h = 0;
                    for (s = 0; s < y; s++) {
                      var b = r[s],
                        x = b.x,
                        w = b.y,
                        S = d * x + p * w,
                        k = m * x + v * w,
                        C = S,
                        _ = k;
                      for (u = 1; u < c; u += 1)
                        (l = t[u].x * x + t[u].y * w) > C ? (C = l) : l < S && (S = l);
                      for (u = 1; u < f; u += 1)
                        (l = n[u].x * x + n[u].y * w) > _ ? (_ = l) : l < k && (k = l);
                      if ((o = (a = C - k) < (i = _ - S) ? a : i) < g && ((g = o), (h = s), o <= 0))
                        break;
                    }
                    (e.axis = r[h]), (e.overlap = g);
                  }),
                  (r._projectToAxis = function (e, t, n) {
                    for (var r = t[0].x * n.x + t[0].y * n.y, o = r, a = 1; a < t.length; a += 1) {
                      var i = t[a].x * n.x + t[a].y * n.y;
                      i > o ? (o = i) : i < r && (r = i);
                    }
                    (e.min = r), (e.max = o);
                  }),
                  (r._findSupports = function (t, n, r, o) {
                    var a,
                      i,
                      l,
                      s,
                      u,
                      c = n.vertices,
                      f = c.length,
                      d = t.position.x,
                      p = t.position.y,
                      m = r.x * o,
                      v = r.y * o,
                      y = Number.MAX_VALUE;
                    for (u = 0; u < f; u += 1)
                      (s = m * (d - (i = c[u]).x) + v * (p - i.y)) < y && ((y = s), (a = i));
                    return (
                      (y = m * (d - (l = c[(f + a.index - 1) % f]).x) + v * (p - l.y)),
                      m * (d - (i = c[(a.index + 1) % f]).x) + v * (p - i.y) < y
                        ? ((e[0] = a), (e[1] = i), e)
                        : ((e[0] = a), (e[1] = l), e)
                    );
                  });
              })();
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(16);
              (r.create = function (e, t) {
                var n = e.bodyA,
                  o = e.bodyB,
                  a = {
                    id: r.id(n, o),
                    bodyA: n,
                    bodyB: o,
                    collision: e,
                    contacts: [],
                    activeContacts: [],
                    separation: 0,
                    isActive: !0,
                    confirmedActive: !0,
                    isSensor: n.isSensor || o.isSensor,
                    timeCreated: t,
                    timeUpdated: t,
                    inverseMass: 0,
                    friction: 0,
                    frictionStatic: 0,
                    restitution: 0,
                    slop: 0,
                  };
                return r.update(a, e, t), a;
              }),
                (r.update = function (e, t, n) {
                  var r = e.contacts,
                    a = t.supports,
                    i = e.activeContacts,
                    l = t.parentA,
                    s = t.parentB,
                    u = l.vertices.length;
                  (e.isActive = !0),
                    (e.timeUpdated = n),
                    (e.collision = t),
                    (e.separation = t.depth),
                    (e.inverseMass = l.inverseMass + s.inverseMass),
                    (e.friction = l.friction < s.friction ? l.friction : s.friction),
                    (e.frictionStatic =
                      l.frictionStatic > s.frictionStatic ? l.frictionStatic : s.frictionStatic),
                    (e.restitution = l.restitution > s.restitution ? l.restitution : s.restitution),
                    (e.slop = l.slop > s.slop ? l.slop : s.slop),
                    (t.pair = e),
                    (i.length = 0);
                  for (var c = 0; c < a.length; c++) {
                    var f = a[c],
                      d = f.body === l ? f.index : u + f.index,
                      p = r[d];
                    p ? i.push(p) : i.push((r[d] = o.create(f)));
                  }
                }),
                (r.setActive = function (e, t, n) {
                  t
                    ? ((e.isActive = !0), (e.timeUpdated = n))
                    : ((e.isActive = !1), (e.activeContacts.length = 0));
                }),
                (r.id = function (e, t) {
                  return e.id < t.id ? 'A' + e.id + 'B' + t.id : 'A' + t.id + 'B' + e.id;
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(3),
                a = n(2),
                i = n(7),
                l = n(1),
                s = n(11),
                u = n(0);
              (r._warming = 0.4),
                (r._torqueDampen = 1),
                (r._minLength = 1e-6),
                (r.create = function (e) {
                  var t = e;
                  t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }),
                    t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
                  var n = t.bodyA ? a.add(t.bodyA.position, t.pointA) : t.pointA,
                    r = t.bodyB ? a.add(t.bodyB.position, t.pointB) : t.pointB,
                    o = a.magnitude(a.sub(n, r));
                  (t.length = 'undefined' !== typeof t.length ? t.length : o),
                    (t.id = t.id || u.nextId()),
                    (t.label = t.label || 'Constraint'),
                    (t.type = 'constraint'),
                    (t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7)),
                    (t.damping = t.damping || 0),
                    (t.angularStiffness = t.angularStiffness || 0),
                    (t.angleA = t.bodyA ? t.bodyA.angle : t.angleA),
                    (t.angleB = t.bodyB ? t.bodyB.angle : t.angleB),
                    (t.plugin = {});
                  var i = {
                    visible: !0,
                    lineWidth: 2,
                    strokeStyle: '#ffffff',
                    type: 'line',
                    anchors: !0,
                  };
                  return (
                    0 === t.length && t.stiffness > 0.1
                      ? ((i.type = 'pin'), (i.anchors = !1))
                      : t.stiffness < 0.9 && (i.type = 'spring'),
                    (t.render = u.extend(i, t.render)),
                    t
                  );
                }),
                (r.preSolveAll = function (e) {
                  for (var t = 0; t < e.length; t += 1) {
                    var n = e[t],
                      r = n.constraintImpulse;
                    n.isStatic ||
                      (0 === r.x && 0 === r.y && 0 === r.angle) ||
                      ((n.position.x += r.x), (n.position.y += r.y), (n.angle += r.angle));
                  }
                }),
                (r.solveAll = function (e, t) {
                  for (var n = u.clamp(t / u._baseDelta, 0, 1), o = 0; o < e.length; o += 1) {
                    var a = e[o],
                      i = !a.bodyA || (a.bodyA && a.bodyA.isStatic),
                      l = !a.bodyB || (a.bodyB && a.bodyB.isStatic);
                    (i || l) && r.solve(e[o], n);
                  }
                  for (o = 0; o < e.length; o += 1)
                    (i = !(a = e[o]).bodyA || (a.bodyA && a.bodyA.isStatic)),
                      (l = !a.bodyB || (a.bodyB && a.bodyB.isStatic)),
                      i || l || r.solve(e[o], n);
                }),
                (r.solve = function (e, t) {
                  var n = e.bodyA,
                    o = e.bodyB,
                    i = e.pointA,
                    l = e.pointB;
                  if (n || o) {
                    n && !n.isStatic && (a.rotate(i, n.angle - e.angleA, i), (e.angleA = n.angle)),
                      o &&
                        !o.isStatic &&
                        (a.rotate(l, o.angle - e.angleB, l), (e.angleB = o.angle));
                    var s = i,
                      u = l;
                    if (
                      (n && (s = a.add(n.position, i)), o && (u = a.add(o.position, l)), s && u)
                    ) {
                      var c = a.sub(s, u),
                        f = a.magnitude(c);
                      f < r._minLength && (f = r._minLength);
                      var d,
                        p,
                        m,
                        v,
                        y,
                        g = (f - e.length) / f,
                        h =
                          e.stiffness >= 1 || 0 === e.length
                            ? e.stiffness * t
                            : e.stiffness * t * t,
                        b = e.damping * t,
                        x = a.mult(c, g * h),
                        w = (n ? n.inverseMass : 0) + (o ? o.inverseMass : 0),
                        S = w + ((n ? n.inverseInertia : 0) + (o ? o.inverseInertia : 0));
                      if (b > 0) {
                        var k = a.create();
                        (m = a.div(c, f)),
                          (y = a.sub(
                            (o && a.sub(o.position, o.positionPrev)) || k,
                            (n && a.sub(n.position, n.positionPrev)) || k
                          )),
                          (v = a.dot(m, y));
                      }
                      n &&
                        !n.isStatic &&
                        ((p = n.inverseMass / w),
                        (n.constraintImpulse.x -= x.x * p),
                        (n.constraintImpulse.y -= x.y * p),
                        (n.position.x -= x.x * p),
                        (n.position.y -= x.y * p),
                        b > 0 &&
                          ((n.positionPrev.x -= b * m.x * v * p),
                          (n.positionPrev.y -= b * m.y * v * p)),
                        (d =
                          (a.cross(i, x) / S) *
                          r._torqueDampen *
                          n.inverseInertia *
                          (1 - e.angularStiffness)),
                        (n.constraintImpulse.angle -= d),
                        (n.angle -= d)),
                        o &&
                          !o.isStatic &&
                          ((p = o.inverseMass / w),
                          (o.constraintImpulse.x += x.x * p),
                          (o.constraintImpulse.y += x.y * p),
                          (o.position.x += x.x * p),
                          (o.position.y += x.y * p),
                          b > 0 &&
                            ((o.positionPrev.x += b * m.x * v * p),
                            (o.positionPrev.y += b * m.y * v * p)),
                          (d =
                            (a.cross(l, x) / S) *
                            r._torqueDampen *
                            o.inverseInertia *
                            (1 - e.angularStiffness)),
                          (o.constraintImpulse.angle += d),
                          (o.angle += d));
                    }
                  }
                }),
                (r.postSolveAll = function (e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                      u = n.constraintImpulse;
                    if (!(n.isStatic || (0 === u.x && 0 === u.y && 0 === u.angle))) {
                      i.set(n, !1);
                      for (var c = 0; c < n.parts.length; c++) {
                        var f = n.parts[c];
                        o.translate(f.vertices, u),
                          c > 0 && ((f.position.x += u.x), (f.position.y += u.y)),
                          0 !== u.angle &&
                            (o.rotate(f.vertices, u.angle, n.position),
                            s.rotate(f.axes, u.angle),
                            c > 0 && a.rotateAbout(f.position, u.angle, n.position, f.position)),
                          l.update(f.bounds, f.vertices, n.velocity);
                      }
                      (u.angle *= r._warming), (u.x *= r._warming), (u.y *= r._warming);
                    }
                  }
                }),
                (r.pointAWorld = function (e) {
                  return {
                    x: (e.bodyA ? e.bodyA.position.x : 0) + (e.pointA ? e.pointA.x : 0),
                    y: (e.bodyA ? e.bodyA.position.y : 0) + (e.pointA ? e.pointA.y : 0),
                  };
                }),
                (r.pointBWorld = function (e) {
                  return {
                    x: (e.bodyB ? e.bodyB.position.x : 0) + (e.pointB ? e.pointB.x : 0),
                    y: (e.bodyB ? e.bodyB.position.y : 0) + (e.pointB ? e.pointB.y : 0),
                  };
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(2),
                a = n(0);
              (r.fromVertices = function (e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                  var r = (n + 1) % e.length,
                    i = o.normalise({ x: e[r].y - e[n].y, y: e[n].x - e[r].x }),
                    l = 0 === i.y ? 1 / 0 : i.x / i.y;
                  t[(l = l.toFixed(3).toString())] = i;
                }
                return a.values(t);
              }),
                (r.rotate = function (e, t) {
                  if (0 !== t)
                    for (var n = Math.cos(t), r = Math.sin(t), o = 0; o < e.length; o++) {
                      var a,
                        i = e[o];
                      (a = i.x * n - i.y * r), (i.y = i.x * r + i.y * n), (i.x = a);
                    }
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(3),
                a = n(0),
                i = n(4),
                l = n(1),
                s = n(2);
              (r.rectangle = function (e, t, n, r, l) {
                l = l || {};
                var s = {
                  label: 'Rectangle Body',
                  position: { x: e, y: t },
                  vertices: o.fromPath('L 0 0 L ' + n + ' 0 L ' + n + ' ' + r + ' L 0 ' + r),
                };
                if (l.chamfer) {
                  var u = l.chamfer;
                  (s.vertices = o.chamfer(
                    s.vertices,
                    u.radius,
                    u.quality,
                    u.qualityMin,
                    u.qualityMax
                  )),
                    delete l.chamfer;
                }
                return i.create(a.extend({}, s, l));
              }),
                (r.trapezoid = function (e, t, n, r, l, s) {
                  s = s || {};
                  var u,
                    c = n * (l *= 0.5),
                    f = c + (1 - 2 * l) * n,
                    d = f + c;
                  u =
                    l < 0.5
                      ? 'L 0 0 L ' + c + ' ' + -r + ' L ' + f + ' ' + -r + ' L ' + d + ' 0'
                      : 'L 0 0 L ' + f + ' ' + -r + ' L ' + d + ' 0';
                  var p = {
                    label: 'Trapezoid Body',
                    position: { x: e, y: t },
                    vertices: o.fromPath(u),
                  };
                  if (s.chamfer) {
                    var m = s.chamfer;
                    (p.vertices = o.chamfer(
                      p.vertices,
                      m.radius,
                      m.quality,
                      m.qualityMin,
                      m.qualityMax
                    )),
                      delete s.chamfer;
                  }
                  return i.create(a.extend({}, p, s));
                }),
                (r.circle = function (e, t, n, o, i) {
                  o = o || {};
                  var l = { label: 'Circle Body', circleRadius: n };
                  i = i || 25;
                  var s = Math.ceil(Math.max(10, Math.min(i, n)));
                  return s % 2 === 1 && (s += 1), r.polygon(e, t, s, n, a.extend({}, l, o));
                }),
                (r.polygon = function (e, t, n, l, s) {
                  if (((s = s || {}), n < 3)) return r.circle(e, t, l, s);
                  for (var u = (2 * Math.PI) / n, c = '', f = 0.5 * u, d = 0; d < n; d += 1) {
                    var p = f + d * u,
                      m = Math.cos(p) * l,
                      v = Math.sin(p) * l;
                    c += 'L ' + m.toFixed(3) + ' ' + v.toFixed(3) + ' ';
                  }
                  var y = {
                    label: 'Polygon Body',
                    position: { x: e, y: t },
                    vertices: o.fromPath(c),
                  };
                  if (s.chamfer) {
                    var g = s.chamfer;
                    (y.vertices = o.chamfer(
                      y.vertices,
                      g.radius,
                      g.quality,
                      g.qualityMin,
                      g.qualityMax
                    )),
                      delete s.chamfer;
                  }
                  return i.create(a.extend({}, y, s));
                }),
                (r.fromVertices = function (e, t, n, r, u, c, f, d) {
                  var p,
                    m,
                    v,
                    y,
                    g,
                    h,
                    b,
                    x,
                    w,
                    S,
                    k = a.getDecomp();
                  for (
                    p = Boolean(k && k.quickDecomp),
                      r = r || {},
                      v = [],
                      u = 'undefined' !== typeof u && u,
                      c = 'undefined' !== typeof c ? c : 0.01,
                      f = 'undefined' !== typeof f ? f : 10,
                      d = 'undefined' !== typeof d ? d : 0.01,
                      a.isArray(n[0]) || (n = [n]),
                      w = 0;
                    w < n.length;
                    w += 1
                  )
                    if (
                      ((g = n[w]),
                      !(y = o.isConvex(g)) &&
                        !p &&
                        a.warnOnce(
                          "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                        ),
                      y || !p)
                    )
                      (g = y ? o.clockwiseSort(g) : o.hull(g)),
                        v.push({ position: { x: e, y: t }, vertices: g });
                    else {
                      var C = g.map(function (e) {
                        return [e.x, e.y];
                      });
                      k.makeCCW(C),
                        !1 !== c && k.removeCollinearPoints(C, c),
                        !1 !== d && k.removeDuplicatePoints && k.removeDuplicatePoints(C, d);
                      var _ = k.quickDecomp(C);
                      for (h = 0; h < _.length; h++) {
                        var P = _[h].map(function (e) {
                          return { x: e[0], y: e[1] };
                        });
                        (f > 0 && o.area(P) < f) || v.push({ position: o.centre(P), vertices: P });
                      }
                    }
                  for (h = 0; h < v.length; h++) v[h] = i.create(a.extend(v[h], r));
                  if (u)
                    for (h = 0; h < v.length; h++) {
                      var E = v[h];
                      for (b = h + 1; b < v.length; b++) {
                        var M = v[b];
                        if (l.overlaps(E.bounds, M.bounds)) {
                          var T = E.vertices,
                            A = M.vertices;
                          for (x = 0; x < E.vertices.length; x++)
                            for (S = 0; S < M.vertices.length; S++) {
                              var I = s.magnitudeSquared(s.sub(T[(x + 1) % T.length], A[S])),
                                L = s.magnitudeSquared(s.sub(T[x], A[(S + 1) % A.length]));
                              I < 5 && L < 5 && ((T[x].isInternal = !0), (A[S].isInternal = !0));
                            }
                        }
                      }
                    }
                  return v.length > 1
                    ? ((m = i.create(a.extend({ parts: v.slice(0) }, r))),
                      i.setPosition(m, { x: e, y: t }),
                      m)
                    : v[0];
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(0),
                a = n(8);
              (r.create = function (e) {
                return o.extend({ bodies: [], pairs: null }, e);
              }),
                (r.setBodies = function (e, t) {
                  e.bodies = t.slice(0);
                }),
                (r.clear = function (e) {
                  e.bodies = [];
                }),
                (r.collisions = function (e) {
                  var t,
                    n,
                    o = [],
                    i = e.pairs,
                    l = e.bodies,
                    s = l.length,
                    u = r.canCollide,
                    c = a.collides;
                  for (l.sort(r._compareBoundsX), t = 0; t < s; t++) {
                    var f = l[t],
                      d = f.bounds,
                      p = f.bounds.max.x,
                      m = f.bounds.max.y,
                      v = f.bounds.min.y,
                      y = f.isStatic || f.isSleeping,
                      g = f.parts.length,
                      h = 1 === g;
                    for (n = t + 1; n < s; n++) {
                      var b = l[n];
                      if ((E = b.bounds).min.x > p) break;
                      if (
                        !(m < E.min.y || v > E.max.y) &&
                        (!y || (!b.isStatic && !b.isSleeping)) &&
                        u(f.collisionFilter, b.collisionFilter)
                      ) {
                        var x = b.parts.length;
                        if (h && 1 === x) (_ = c(f, b, i)) && o.push(_);
                        else
                          for (var w = x > 1 ? 1 : 0, S = g > 1 ? 1 : 0; S < g; S++)
                            for (var k = f.parts[S], C = ((d = k.bounds), w); C < x; C++) {
                              var _,
                                P = b.parts[C],
                                E = P.bounds;
                              d.min.x > E.max.x ||
                                d.max.x < E.min.x ||
                                d.max.y < E.min.y ||
                                d.min.y > E.max.y ||
                                ((_ = c(k, P, i)) && o.push(_));
                            }
                      }
                    }
                  }
                  return o;
                }),
                (r.canCollide = function (e, t) {
                  return e.group === t.group && 0 !== e.group
                    ? e.group > 0
                    : 0 !== (e.mask & t.category) && 0 !== (t.mask & e.category);
                }),
                (r._compareBoundsX = function (e, t) {
                  return e.bounds.min.x - t.bounds.min.x;
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(0);
              (r.create = function (e) {
                var t = {};
                return (
                  e ||
                    o.log(
                      'Mouse.create: element was undefined, defaulting to document.body',
                      'warn'
                    ),
                  (t.element = e || document.body),
                  (t.absolute = { x: 0, y: 0 }),
                  (t.position = { x: 0, y: 0 }),
                  (t.mousedownPosition = { x: 0, y: 0 }),
                  (t.mouseupPosition = { x: 0, y: 0 }),
                  (t.offset = { x: 0, y: 0 }),
                  (t.scale = { x: 1, y: 1 }),
                  (t.wheelDelta = 0),
                  (t.button = -1),
                  (t.pixelRatio = parseInt(t.element.getAttribute('data-pixel-ratio'), 10) || 1),
                  (t.sourceEvents = {
                    mousemove: null,
                    mousedown: null,
                    mouseup: null,
                    mousewheel: null,
                  }),
                  (t.mousemove = function (e) {
                    var n = r._getRelativeMousePosition(e, t.element, t.pixelRatio);
                    e.changedTouches && ((t.button = 0), e.preventDefault()),
                      (t.absolute.x = n.x),
                      (t.absolute.y = n.y),
                      (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                      (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                      (t.sourceEvents.mousemove = e);
                  }),
                  (t.mousedown = function (e) {
                    var n = r._getRelativeMousePosition(e, t.element, t.pixelRatio);
                    e.changedTouches ? ((t.button = 0), e.preventDefault()) : (t.button = e.button),
                      (t.absolute.x = n.x),
                      (t.absolute.y = n.y),
                      (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                      (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                      (t.mousedownPosition.x = t.position.x),
                      (t.mousedownPosition.y = t.position.y),
                      (t.sourceEvents.mousedown = e);
                  }),
                  (t.mouseup = function (e) {
                    var n = r._getRelativeMousePosition(e, t.element, t.pixelRatio);
                    e.changedTouches && e.preventDefault(),
                      (t.button = -1),
                      (t.absolute.x = n.x),
                      (t.absolute.y = n.y),
                      (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                      (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                      (t.mouseupPosition.x = t.position.x),
                      (t.mouseupPosition.y = t.position.y),
                      (t.sourceEvents.mouseup = e);
                  }),
                  (t.mousewheel = function (e) {
                    (t.wheelDelta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))),
                      e.preventDefault();
                  }),
                  r.setElement(t, t.element),
                  t
                );
              }),
                (r.setElement = function (e, t) {
                  (e.element = t),
                    t.addEventListener('mousemove', e.mousemove),
                    t.addEventListener('mousedown', e.mousedown),
                    t.addEventListener('mouseup', e.mouseup),
                    t.addEventListener('mousewheel', e.mousewheel),
                    t.addEventListener('DOMMouseScroll', e.mousewheel),
                    t.addEventListener('touchmove', e.mousemove),
                    t.addEventListener('touchstart', e.mousedown),
                    t.addEventListener('touchend', e.mouseup);
                }),
                (r.clearSourceEvents = function (e) {
                  (e.sourceEvents.mousemove = null),
                    (e.sourceEvents.mousedown = null),
                    (e.sourceEvents.mouseup = null),
                    (e.sourceEvents.mousewheel = null),
                    (e.wheelDelta = 0);
                }),
                (r.setOffset = function (e, t) {
                  (e.offset.x = t.x),
                    (e.offset.y = t.y),
                    (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                    (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
                }),
                (r.setScale = function (e, t) {
                  (e.scale.x = t.x),
                    (e.scale.y = t.y),
                    (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                    (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
                }),
                (r._getRelativeMousePosition = function (e, t, n) {
                  var r,
                    o,
                    a = t.getBoundingClientRect(),
                    i = document.documentElement || document.body.parentNode || document.body,
                    l = void 0 !== window.pageXOffset ? window.pageXOffset : i.scrollLeft,
                    s = void 0 !== window.pageYOffset ? window.pageYOffset : i.scrollTop,
                    u = e.changedTouches;
                  return (
                    u
                      ? ((r = u[0].pageX - a.left - l), (o = u[0].pageY - a.top - s))
                      : ((r = e.pageX - a.left - l), (o = e.pageY - a.top - s)),
                    {
                      x: r / ((t.clientWidth / (t.width || t.clientWidth)) * n),
                      y: o / ((t.clientHeight / (t.height || t.clientHeight)) * n),
                    }
                  );
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(0);
              (r._registry = {}),
                (r.register = function (e) {
                  if (
                    (r.isPlugin(e) ||
                      o.warn(
                        'Plugin.register:',
                        r.toString(e),
                        'does not implement all required fields.'
                      ),
                    e.name in r._registry)
                  ) {
                    var t = r._registry[e.name],
                      n = r.versionParse(e.version).number,
                      a = r.versionParse(t.version).number;
                    n > a
                      ? (o.warn(
                          'Plugin.register:',
                          r.toString(t),
                          'was upgraded to',
                          r.toString(e)
                        ),
                        (r._registry[e.name] = e))
                      : n < a
                      ? o.warn(
                          'Plugin.register:',
                          r.toString(t),
                          'can not be downgraded to',
                          r.toString(e)
                        )
                      : e !== t &&
                        o.warn(
                          'Plugin.register:',
                          r.toString(e),
                          'is already registered to different plugin object'
                        );
                  } else r._registry[e.name] = e;
                  return e;
                }),
                (r.resolve = function (e) {
                  return r._registry[r.dependencyParse(e).name];
                }),
                (r.toString = function (e) {
                  return 'string' === typeof e
                    ? e
                    : (e.name || 'anonymous') + '@' + (e.version || e.range || '0.0.0');
                }),
                (r.isPlugin = function (e) {
                  return e && e.name && e.version && e.install;
                }),
                (r.isUsed = function (e, t) {
                  return e.used.indexOf(t) > -1;
                }),
                (r.isFor = function (e, t) {
                  var n = e.for && r.dependencyParse(e.for);
                  return !e.for || (t.name === n.name && r.versionSatisfies(t.version, n.range));
                }),
                (r.use = function (e, t) {
                  if (((e.uses = (e.uses || []).concat(t || [])), 0 !== e.uses.length)) {
                    for (
                      var n = r.dependencies(e), a = o.topologicalSort(n), i = [], l = 0;
                      l < a.length;
                      l += 1
                    )
                      if (a[l] !== e.name) {
                        var s = r.resolve(a[l]);
                        s
                          ? r.isUsed(e, s.name) ||
                            (r.isFor(s, e) ||
                              (o.warn(
                                'Plugin.use:',
                                r.toString(s),
                                'is for',
                                s.for,
                                'but installed on',
                                r.toString(e) + '.'
                              ),
                              (s._warned = !0)),
                            s.install
                              ? s.install(e)
                              : (o.warn(
                                  'Plugin.use:',
                                  r.toString(s),
                                  'does not specify an install function.'
                                ),
                                (s._warned = !0)),
                            s._warned
                              ? (i.push('\ud83d\udd36 ' + r.toString(s)), delete s._warned)
                              : i.push('\u2705 ' + r.toString(s)),
                            e.used.push(s.name))
                          : i.push('\u274c ' + a[l]);
                      }
                    i.length > 0 && o.info(i.join('  '));
                  } else
                    o.warn(
                      'Plugin.use:',
                      r.toString(e),
                      'does not specify any dependencies to install.'
                    );
                }),
                (r.dependencies = function (e, t) {
                  var n = r.dependencyParse(e),
                    a = n.name;
                  if (!(a in (t = t || {}))) {
                    (e = r.resolve(e) || e),
                      (t[a] = o.map(e.uses || [], function (t) {
                        r.isPlugin(t) && r.register(t);
                        var a = r.dependencyParse(t),
                          i = r.resolve(t);
                        return (
                          i && !r.versionSatisfies(i.version, a.range)
                            ? (o.warn(
                                'Plugin.dependencies:',
                                r.toString(i),
                                'does not satisfy',
                                r.toString(a),
                                'used by',
                                r.toString(n) + '.'
                              ),
                              (i._warned = !0),
                              (e._warned = !0))
                            : i ||
                              (o.warn(
                                'Plugin.dependencies:',
                                r.toString(t),
                                'used by',
                                r.toString(n),
                                'could not be resolved.'
                              ),
                              (e._warned = !0)),
                          a.name
                        );
                      }));
                    for (var i = 0; i < t[a].length; i += 1) r.dependencies(t[a][i], t);
                    return t;
                  }
                }),
                (r.dependencyParse = function (e) {
                  return o.isString(e)
                    ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e) ||
                        o.warn('Plugin.dependencyParse:', e, 'is not a valid dependency string.'),
                      { name: e.split('@')[0], range: e.split('@')[1] || '*' })
                    : { name: e.name, range: e.range || e.version };
                }),
                (r.versionParse = function (e) {
                  var t = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                  t.test(e) ||
                    o.warn('Plugin.versionParse:', e, 'is not a valid version or range.');
                  var n = t.exec(e),
                    r = Number(n[4]),
                    a = Number(n[5]),
                    i = Number(n[6]);
                  return {
                    isRange: Boolean(n[1] || n[2]),
                    version: n[3],
                    range: e,
                    operator: n[1] || n[2] || '',
                    major: r,
                    minor: a,
                    patch: i,
                    parts: [r, a, i],
                    prerelease: n[7],
                    number: 1e8 * r + 1e4 * a + i,
                  };
                }),
                (r.versionSatisfies = function (e, t) {
                  t = t || '*';
                  var n = r.versionParse(t),
                    o = r.versionParse(e);
                  if (n.isRange) {
                    if ('*' === n.operator || '*' === e) return !0;
                    if ('>' === n.operator) return o.number > n.number;
                    if ('>=' === n.operator) return o.number >= n.number;
                    if ('~' === n.operator)
                      return o.major === n.major && o.minor === n.minor && o.patch >= n.patch;
                    if ('^' === n.operator)
                      return n.major > 0
                        ? o.major === n.major && o.number >= n.number
                        : n.minor > 0
                        ? o.minor === n.minor && o.patch >= n.patch
                        : o.patch === n.patch;
                  }
                  return e === t || '*' === e;
                });
            },
            function (e, t) {
              var n = {};
              (e.exports = n),
                (n.create = function (e) {
                  return { vertex: e, normalImpulse: 0, tangentImpulse: 0 };
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(7),
                a = n(18),
                i = n(13),
                l = n(19),
                s = n(5),
                u = n(6),
                c = n(10),
                f = n(0),
                d = n(4);
              (r.create = function (e) {
                e = e || {};
                var t = f.extend(
                  {
                    positionIterations: 6,
                    velocityIterations: 4,
                    constraintIterations: 2,
                    enableSleeping: !1,
                    events: [],
                    plugin: {},
                    gravity: { x: 0, y: 1, scale: 0.001 },
                    timing: { timestamp: 0, timeScale: 1, lastDelta: 0, lastElapsed: 0 },
                  },
                  e
                );
                return (
                  (t.world = e.world || u.create({ label: 'World' })),
                  (t.pairs = e.pairs || l.create()),
                  (t.detector = e.detector || i.create()),
                  (t.grid = { buckets: [] }),
                  (t.world.gravity = t.gravity),
                  (t.broadphase = t.grid),
                  (t.metrics = {}),
                  t
                );
              }),
                (r.update = function (e, t) {
                  var n,
                    d = f.now(),
                    p = e.world,
                    m = e.detector,
                    v = e.pairs,
                    y = e.timing,
                    g = y.timestamp;
                  (t = 'undefined' !== typeof t ? t : f._baseDelta),
                    (t *= y.timeScale),
                    (y.timestamp += t),
                    (y.lastDelta = t);
                  var h = { timestamp: y.timestamp, delta: t };
                  s.trigger(e, 'beforeUpdate', h);
                  var b = u.allBodies(p),
                    x = u.allConstraints(p);
                  for (
                    p.isModified && (i.setBodies(m, b), u.setModified(p, !1, !1, !0)),
                      e.enableSleeping && o.update(b, t),
                      r._bodiesApplyGravity(b, e.gravity),
                      t > 0 && r._bodiesUpdate(b, t),
                      c.preSolveAll(b),
                      n = 0;
                    n < e.constraintIterations;
                    n++
                  )
                    c.solveAll(x, t);
                  c.postSolveAll(b), (m.pairs = e.pairs);
                  var w = i.collisions(m);
                  l.update(v, w, g),
                    e.enableSleeping && o.afterCollisions(v.list),
                    v.collisionStart.length > 0 &&
                      s.trigger(e, 'collisionStart', { pairs: v.collisionStart });
                  var S = f.clamp(20 / e.positionIterations, 0, 1);
                  for (a.preSolvePosition(v.list), n = 0; n < e.positionIterations; n++)
                    a.solvePosition(v.list, t, S);
                  for (
                    a.postSolvePosition(b), c.preSolveAll(b), n = 0;
                    n < e.constraintIterations;
                    n++
                  )
                    c.solveAll(x, t);
                  for (
                    c.postSolveAll(b), a.preSolveVelocity(v.list), n = 0;
                    n < e.velocityIterations;
                    n++
                  )
                    a.solveVelocity(v.list, t);
                  return (
                    r._bodiesUpdateVelocities(b),
                    v.collisionActive.length > 0 &&
                      s.trigger(e, 'collisionActive', { pairs: v.collisionActive }),
                    v.collisionEnd.length > 0 &&
                      s.trigger(e, 'collisionEnd', { pairs: v.collisionEnd }),
                    r._bodiesClearForces(b),
                    s.trigger(e, 'afterUpdate', h),
                    (e.timing.lastElapsed = f.now() - d),
                    e
                  );
                }),
                (r.merge = function (e, t) {
                  if ((f.extend(e, t), t.world)) {
                    (e.world = t.world), r.clear(e);
                    for (var n = u.allBodies(e.world), a = 0; a < n.length; a++) {
                      var i = n[a];
                      o.set(i, !1), (i.id = f.nextId());
                    }
                  }
                }),
                (r.clear = function (e) {
                  l.clear(e.pairs), i.clear(e.detector);
                }),
                (r._bodiesClearForces = function (e) {
                  for (var t = e.length, n = 0; n < t; n++) {
                    var r = e[n];
                    (r.force.x = 0), (r.force.y = 0), (r.torque = 0);
                  }
                }),
                (r._bodiesApplyGravity = function (e, t) {
                  var n = 'undefined' !== typeof t.scale ? t.scale : 0.001,
                    r = e.length;
                  if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                    for (var o = 0; o < r; o++) {
                      var a = e[o];
                      a.isStatic ||
                        a.isSleeping ||
                        ((a.force.y += a.mass * t.y * n), (a.force.x += a.mass * t.x * n));
                    }
                }),
                (r._bodiesUpdate = function (e, t) {
                  for (var n = e.length, r = 0; r < n; r++) {
                    var o = e[r];
                    o.isStatic || o.isSleeping || d.update(o, t);
                  }
                }),
                (r._bodiesUpdateVelocities = function (e) {
                  for (var t = e.length, n = 0; n < t; n++) d.updateVelocities(e[n]);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(3),
                a = n(0),
                i = n(1);
              (r._restingThresh = 2),
                (r._restingThreshTangent = Math.sqrt(6)),
                (r._positionDampen = 0.9),
                (r._positionWarming = 0.8),
                (r._frictionNormalMultiplier = 5),
                (r._frictionMaxStatic = Number.MAX_VALUE),
                (r.preSolvePosition = function (e) {
                  var t,
                    n,
                    r,
                    o = e.length;
                  for (t = 0; t < o; t++)
                    (n = e[t]).isActive &&
                      ((r = n.activeContacts.length),
                      (n.collision.parentA.totalContacts += r),
                      (n.collision.parentB.totalContacts += r));
                }),
                (r.solvePosition = function (e, t, n) {
                  var o,
                    i,
                    l,
                    s,
                    u,
                    c,
                    f,
                    d,
                    p = r._positionDampen * (n || 1),
                    m = a.clamp(t / a._baseDelta, 0, 1),
                    v = e.length;
                  for (o = 0; o < v; o++)
                    (i = e[o]).isActive &&
                      !i.isSensor &&
                      ((s = (l = i.collision).parentA),
                      (u = l.parentB),
                      (c = l.normal),
                      (i.separation =
                        c.x * (u.positionImpulse.x + l.penetration.x - s.positionImpulse.x) +
                        c.y * (u.positionImpulse.y + l.penetration.y - s.positionImpulse.y)));
                  for (o = 0; o < v; o++)
                    (i = e[o]).isActive &&
                      !i.isSensor &&
                      ((s = (l = i.collision).parentA),
                      (u = l.parentB),
                      (c = l.normal),
                      (d = i.separation - i.slop * m),
                      (s.isStatic || u.isStatic) && (d *= 2),
                      s.isStatic ||
                        s.isSleeping ||
                        ((f = p / s.totalContacts),
                        (s.positionImpulse.x += c.x * d * f),
                        (s.positionImpulse.y += c.y * d * f)),
                      u.isStatic ||
                        u.isSleeping ||
                        ((f = p / u.totalContacts),
                        (u.positionImpulse.x -= c.x * d * f),
                        (u.positionImpulse.y -= c.y * d * f)));
                }),
                (r.postSolvePosition = function (e) {
                  for (
                    var t = r._positionWarming, n = e.length, a = o.translate, l = i.update, s = 0;
                    s < n;
                    s++
                  ) {
                    var u = e[s],
                      c = u.positionImpulse,
                      f = c.x,
                      d = c.y,
                      p = u.velocity;
                    if (((u.totalContacts = 0), 0 !== f || 0 !== d)) {
                      for (var m = 0; m < u.parts.length; m++) {
                        var v = u.parts[m];
                        a(v.vertices, c),
                          l(v.bounds, v.vertices, p),
                          (v.position.x += f),
                          (v.position.y += d);
                      }
                      (u.positionPrev.x += f),
                        (u.positionPrev.y += d),
                        f * p.x + d * p.y < 0 ? ((c.x = 0), (c.y = 0)) : ((c.x *= t), (c.y *= t));
                    }
                  }
                }),
                (r.preSolveVelocity = function (e) {
                  var t,
                    n,
                    r = e.length;
                  for (t = 0; t < r; t++) {
                    var o = e[t];
                    if (o.isActive && !o.isSensor) {
                      var a = o.activeContacts,
                        i = a.length,
                        l = o.collision,
                        s = l.parentA,
                        u = l.parentB,
                        c = l.normal,
                        f = l.tangent;
                      for (n = 0; n < i; n++) {
                        var d = a[n],
                          p = d.vertex,
                          m = d.normalImpulse,
                          v = d.tangentImpulse;
                        if (0 !== m || 0 !== v) {
                          var y = c.x * m + f.x * v,
                            g = c.y * m + f.y * v;
                          s.isStatic ||
                            s.isSleeping ||
                            ((s.positionPrev.x += y * s.inverseMass),
                            (s.positionPrev.y += g * s.inverseMass),
                            (s.anglePrev +=
                              s.inverseInertia *
                              ((p.x - s.position.x) * g - (p.y - s.position.y) * y))),
                            u.isStatic ||
                              u.isSleeping ||
                              ((u.positionPrev.x -= y * u.inverseMass),
                              (u.positionPrev.y -= g * u.inverseMass),
                              (u.anglePrev -=
                                u.inverseInertia *
                                ((p.x - u.position.x) * g - (p.y - u.position.y) * y)));
                        }
                      }
                    }
                  }
                }),
                (r.solveVelocity = function (e, t) {
                  var n,
                    o,
                    i,
                    l,
                    s = t / a._baseDelta,
                    u = s * s * s,
                    c = -r._restingThresh * s,
                    f = r._restingThreshTangent,
                    d = r._frictionNormalMultiplier * s,
                    p = r._frictionMaxStatic,
                    m = e.length;
                  for (i = 0; i < m; i++) {
                    var v = e[i];
                    if (v.isActive && !v.isSensor) {
                      var y = v.collision,
                        g = y.parentA,
                        h = y.parentB,
                        b = g.velocity,
                        x = h.velocity,
                        w = y.normal.x,
                        S = y.normal.y,
                        k = y.tangent.x,
                        C = y.tangent.y,
                        _ = v.activeContacts,
                        P = _.length,
                        E = 1 / P,
                        M = g.inverseMass + h.inverseMass,
                        T = v.friction * v.frictionStatic * d;
                      for (
                        b.x = g.position.x - g.positionPrev.x,
                          b.y = g.position.y - g.positionPrev.y,
                          x.x = h.position.x - h.positionPrev.x,
                          x.y = h.position.y - h.positionPrev.y,
                          g.angularVelocity = g.angle - g.anglePrev,
                          h.angularVelocity = h.angle - h.anglePrev,
                          l = 0;
                        l < P;
                        l++
                      ) {
                        var A = _[l],
                          I = A.vertex,
                          L = I.x - g.position.x,
                          N = I.y - g.position.y,
                          R = I.x - h.position.x,
                          z = I.y - h.position.y,
                          B = b.x - N * g.angularVelocity,
                          O = b.y + L * g.angularVelocity,
                          F = B - (x.x - z * h.angularVelocity),
                          D = O - (x.y + R * h.angularVelocity),
                          V = w * F + S * D,
                          j = k * F + C * D,
                          U = v.separation + V,
                          H = Math.min(U, 1),
                          W = (H = U < 0 ? 0 : H) * T;
                        j < -W || j > W
                          ? ((o = j > 0 ? j : -j),
                            (n = v.friction * (j > 0 ? 1 : -1) * u) < -o
                              ? (n = -o)
                              : n > o && (n = o))
                          : ((n = j), (o = p));
                        var $ = L * S - N * w,
                          q = R * S - z * w,
                          Q = E / (M + g.inverseInertia * $ * $ + h.inverseInertia * q * q),
                          G = (1 + v.restitution) * V * Q;
                        if (((n *= Q), V < c)) A.normalImpulse = 0;
                        else {
                          var K = A.normalImpulse;
                          (A.normalImpulse += G),
                            A.normalImpulse > 0 && (A.normalImpulse = 0),
                            (G = A.normalImpulse - K);
                        }
                        if (j < -f || j > f) A.tangentImpulse = 0;
                        else {
                          var X = A.tangentImpulse;
                          (A.tangentImpulse += n),
                            A.tangentImpulse < -o && (A.tangentImpulse = -o),
                            A.tangentImpulse > o && (A.tangentImpulse = o),
                            (n = A.tangentImpulse - X);
                        }
                        var Y = w * G + k * n,
                          Z = S * G + C * n;
                        g.isStatic ||
                          g.isSleeping ||
                          ((g.positionPrev.x += Y * g.inverseMass),
                          (g.positionPrev.y += Z * g.inverseMass),
                          (g.anglePrev += (L * Z - N * Y) * g.inverseInertia)),
                          h.isStatic ||
                            h.isSleeping ||
                            ((h.positionPrev.x -= Y * h.inverseMass),
                            (h.positionPrev.y -= Z * h.inverseMass),
                            (h.anglePrev -= (R * Z - z * Y) * h.inverseInertia));
                      }
                    }
                  }
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(9),
                a = n(0);
              (r.create = function (e) {
                return a.extend(
                  {
                    table: {},
                    list: [],
                    collisionStart: [],
                    collisionActive: [],
                    collisionEnd: [],
                  },
                  e
                );
              }),
                (r.update = function (e, t, n) {
                  var r,
                    a,
                    i,
                    l,
                    s = e.list,
                    u = s.length,
                    c = e.table,
                    f = t.length,
                    d = e.collisionStart,
                    p = e.collisionEnd,
                    m = e.collisionActive;
                  for (d.length = 0, p.length = 0, m.length = 0, l = 0; l < u; l++)
                    s[l].confirmedActive = !1;
                  for (l = 0; l < f; l++)
                    (i = (r = t[l]).pair)
                      ? (i.isActive ? m.push(i) : d.push(i),
                        o.update(i, r, n),
                        (i.confirmedActive = !0))
                      : ((c[(i = o.create(r, n)).id] = i), d.push(i), s.push(i));
                  var v = [];
                  for (u = s.length, l = 0; l < u; l++)
                    (i = s[l]).confirmedActive ||
                      (o.setActive(i, !1, n),
                      p.push(i),
                      i.collision.bodyA.isSleeping || i.collision.bodyB.isSleeping || v.push(l));
                  for (l = 0; l < v.length; l++)
                    (i = s[(a = v[l] - l)]), s.splice(a, 1), delete c[i.id];
                }),
                (r.clear = function (e) {
                  return (
                    (e.table = {}),
                    (e.list.length = 0),
                    (e.collisionStart.length = 0),
                    (e.collisionActive.length = 0),
                    (e.collisionEnd.length = 0),
                    e
                  );
                });
            },
            function (e, t, n) {
              var r = (e.exports = n(21));
              (r.Axes = n(11)),
                (r.Bodies = n(12)),
                (r.Body = n(4)),
                (r.Bounds = n(1)),
                (r.Collision = n(8)),
                (r.Common = n(0)),
                (r.Composite = n(6)),
                (r.Composites = n(22)),
                (r.Constraint = n(10)),
                (r.Contact = n(16)),
                (r.Detector = n(13)),
                (r.Engine = n(17)),
                (r.Events = n(5)),
                (r.Grid = n(23)),
                (r.Mouse = n(14)),
                (r.MouseConstraint = n(24)),
                (r.Pair = n(9)),
                (r.Pairs = n(19)),
                (r.Plugin = n(15)),
                (r.Query = n(25)),
                (r.Render = n(26)),
                (r.Resolver = n(18)),
                (r.Runner = n(27)),
                (r.SAT = n(28)),
                (r.Sleeping = n(7)),
                (r.Svg = n(29)),
                (r.Vector = n(2)),
                (r.Vertices = n(3)),
                (r.World = n(30)),
                (r.Engine.run = r.Runner.run),
                r.Common.deprecated(
                  r.Engine,
                  'run',
                  'Engine.run \u27a4 use Matter.Runner.run(engine) instead'
                );
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(15),
                a = n(0);
              (r.name = 'matter-js'),
                (r.version = '0.19.0'),
                (r.uses = []),
                (r.used = []),
                (r.use = function () {
                  o.use(r, Array.prototype.slice.call(arguments));
                }),
                (r.before = function (e, t) {
                  return (e = e.replace(/^Matter./, '')), a.chainPathBefore(r, e, t);
                }),
                (r.after = function (e, t) {
                  return (e = e.replace(/^Matter./, '')), a.chainPathAfter(r, e, t);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(6),
                a = n(10),
                i = n(0),
                l = n(4),
                s = n(12),
                u = i.deprecated;
              (r.stack = function (e, t, n, r, a, i, s) {
                for (
                  var u, c = o.create({ label: 'Stack' }), f = e, d = t, p = 0, m = 0;
                  m < r;
                  m++
                ) {
                  for (var v = 0, y = 0; y < n; y++) {
                    var g = s(f, d, y, m, u, p);
                    if (g) {
                      var h = g.bounds.max.y - g.bounds.min.y,
                        b = g.bounds.max.x - g.bounds.min.x;
                      h > v && (v = h),
                        l.translate(g, { x: 0.5 * b, y: 0.5 * h }),
                        (f = g.bounds.max.x + a),
                        o.addBody(c, g),
                        (u = g),
                        (p += 1);
                    } else f += a;
                  }
                  (d += v + i), (f = e);
                }
                return c;
              }),
                (r.chain = function (e, t, n, r, l, s) {
                  for (var u = e.bodies, c = 1; c < u.length; c++) {
                    var f = u[c - 1],
                      d = u[c],
                      p = f.bounds.max.y - f.bounds.min.y,
                      m = f.bounds.max.x - f.bounds.min.x,
                      v = d.bounds.max.y - d.bounds.min.y,
                      y = {
                        bodyA: f,
                        pointA: { x: m * t, y: p * n },
                        bodyB: d,
                        pointB: { x: (d.bounds.max.x - d.bounds.min.x) * r, y: v * l },
                      },
                      g = i.extend(y, s);
                    o.addConstraint(e, a.create(g));
                  }
                  return (e.label += ' Chain'), e;
                }),
                (r.mesh = function (e, t, n, r, l) {
                  var s,
                    u,
                    c,
                    f,
                    d,
                    p = e.bodies;
                  for (s = 0; s < n; s++) {
                    for (u = 1; u < t; u++)
                      (c = p[u - 1 + s * t]),
                        (f = p[u + s * t]),
                        o.addConstraint(e, a.create(i.extend({ bodyA: c, bodyB: f }, l)));
                    if (s > 0)
                      for (u = 0; u < t; u++)
                        (c = p[u + (s - 1) * t]),
                          (f = p[u + s * t]),
                          o.addConstraint(e, a.create(i.extend({ bodyA: c, bodyB: f }, l))),
                          r &&
                            u > 0 &&
                            ((d = p[u - 1 + (s - 1) * t]),
                            o.addConstraint(e, a.create(i.extend({ bodyA: d, bodyB: f }, l)))),
                          r &&
                            u < t - 1 &&
                            ((d = p[u + 1 + (s - 1) * t]),
                            o.addConstraint(e, a.create(i.extend({ bodyA: d, bodyB: f }, l))));
                  }
                  return (e.label += ' Mesh'), e;
                }),
                (r.pyramid = function (e, t, n, o, a, i, s) {
                  return r.stack(e, t, n, o, a, i, function (t, r, i, u, c, f) {
                    var d = Math.min(o, Math.ceil(n / 2)),
                      p = c ? c.bounds.max.x - c.bounds.min.x : 0;
                    if (!(u > d) && !(i < (u = d - u) || i > n - 1 - u))
                      return (
                        1 === f && l.translate(c, { x: (i + (n % 2 === 1 ? 1 : -1)) * p, y: 0 }),
                        s(e + (c ? i * p : 0) + i * a, r, i, u, c, f)
                      );
                  });
                }),
                (r.newtonsCradle = function (e, t, n, r, i) {
                  for (var l = o.create({ label: 'Newtons Cradle' }), u = 0; u < n; u++) {
                    var c = s.circle(e + u * (1.9 * r), t + i, r, {
                        inertia: 1 / 0,
                        restitution: 1,
                        friction: 0,
                        frictionAir: 1e-4,
                        slop: 1,
                      }),
                      f = a.create({ pointA: { x: e + u * (1.9 * r), y: t }, bodyB: c });
                    o.addBody(l, c), o.addConstraint(l, f);
                  }
                  return l;
                }),
                u(
                  r,
                  'newtonsCradle',
                  'Composites.newtonsCradle \u27a4 moved to newtonsCradle example'
                ),
                (r.car = function (e, t, n, r, i) {
                  var u = l.nextGroup(!0),
                    c = 0.5 * -n + 20,
                    f = 0.5 * n - 20,
                    d = o.create({ label: 'Car' }),
                    p = s.rectangle(e, t, n, r, {
                      collisionFilter: { group: u },
                      chamfer: { radius: 0.5 * r },
                      density: 2e-4,
                    }),
                    m = s.circle(e + c, t + 0, i, { collisionFilter: { group: u }, friction: 0.8 }),
                    v = s.circle(e + f, t + 0, i, { collisionFilter: { group: u }, friction: 0.8 }),
                    y = a.create({
                      bodyB: p,
                      pointB: { x: c, y: 0 },
                      bodyA: m,
                      stiffness: 1,
                      length: 0,
                    }),
                    g = a.create({
                      bodyB: p,
                      pointB: { x: f, y: 0 },
                      bodyA: v,
                      stiffness: 1,
                      length: 0,
                    });
                  return (
                    o.addBody(d, p),
                    o.addBody(d, m),
                    o.addBody(d, v),
                    o.addConstraint(d, y),
                    o.addConstraint(d, g),
                    d
                  );
                }),
                u(r, 'car', 'Composites.car \u27a4 moved to car example'),
                (r.softBody = function (e, t, n, o, a, l, u, c, f, d) {
                  (f = i.extend({ inertia: 1 / 0 }, f)),
                    (d = i.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, d));
                  var p = r.stack(e, t, n, o, a, l, function (e, t) {
                    return s.circle(e, t, c, f);
                  });
                  return r.mesh(p, n, o, u, d), (p.label = 'Soft Body'), p;
                }),
                u(r, 'softBody', 'Composites.softBody \u27a4 moved to softBody and cloth examples');
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(9),
                a = n(0),
                i = a.deprecated;
              (r.create = function (e) {
                return a.extend(
                  { buckets: {}, pairs: {}, pairsList: [], bucketWidth: 48, bucketHeight: 48 },
                  e
                );
              }),
                (r.update = function (e, t, n, o) {
                  var a,
                    i,
                    l,
                    s,
                    u,
                    c = n.world,
                    f = e.buckets,
                    d = !1;
                  for (a = 0; a < t.length; a++) {
                    var p = t[a];
                    if (
                      (!p.isSleeping || o) &&
                      (!c.bounds ||
                        !(
                          p.bounds.max.x < c.bounds.min.x ||
                          p.bounds.min.x > c.bounds.max.x ||
                          p.bounds.max.y < c.bounds.min.y ||
                          p.bounds.min.y > c.bounds.max.y
                        ))
                    ) {
                      var m = r._getRegion(e, p);
                      if (!p.region || m.id !== p.region.id || o) {
                        (p.region && !o) || (p.region = m);
                        var v = r._regionUnion(m, p.region);
                        for (i = v.startCol; i <= v.endCol; i++)
                          for (l = v.startRow; l <= v.endRow; l++) {
                            s = f[(u = r._getBucketId(i, l))];
                            var y =
                                i >= m.startCol &&
                                i <= m.endCol &&
                                l >= m.startRow &&
                                l <= m.endRow,
                              g =
                                i >= p.region.startCol &&
                                i <= p.region.endCol &&
                                l >= p.region.startRow &&
                                l <= p.region.endRow;
                            !y && g && g && s && r._bucketRemoveBody(e, s, p),
                              (p.region === m || (y && !g) || o) &&
                                (s || (s = r._createBucket(f, u)), r._bucketAddBody(e, s, p));
                          }
                        (p.region = m), (d = !0);
                      }
                    }
                  }
                  d && (e.pairsList = r._createActivePairsList(e));
                }),
                i(r, 'update', 'Grid.update \u27a4 replaced by Matter.Detector'),
                (r.clear = function (e) {
                  (e.buckets = {}), (e.pairs = {}), (e.pairsList = []);
                }),
                i(r, 'clear', 'Grid.clear \u27a4 replaced by Matter.Detector'),
                (r._regionUnion = function (e, t) {
                  var n = Math.min(e.startCol, t.startCol),
                    o = Math.max(e.endCol, t.endCol),
                    a = Math.min(e.startRow, t.startRow),
                    i = Math.max(e.endRow, t.endRow);
                  return r._createRegion(n, o, a, i);
                }),
                (r._getRegion = function (e, t) {
                  var n = t.bounds,
                    o = Math.floor(n.min.x / e.bucketWidth),
                    a = Math.floor(n.max.x / e.bucketWidth),
                    i = Math.floor(n.min.y / e.bucketHeight),
                    l = Math.floor(n.max.y / e.bucketHeight);
                  return r._createRegion(o, a, i, l);
                }),
                (r._createRegion = function (e, t, n, r) {
                  return {
                    id: e + ',' + t + ',' + n + ',' + r,
                    startCol: e,
                    endCol: t,
                    startRow: n,
                    endRow: r,
                  };
                }),
                (r._getBucketId = function (e, t) {
                  return 'C' + e + 'R' + t;
                }),
                (r._createBucket = function (e, t) {
                  return (e[t] = []);
                }),
                (r._bucketAddBody = function (e, t, n) {
                  var r,
                    a = e.pairs,
                    i = o.id,
                    l = t.length;
                  for (r = 0; r < l; r++) {
                    var s = t[r];
                    if (!(n.id === s.id || (n.isStatic && s.isStatic))) {
                      var u = i(n, s),
                        c = a[u];
                      c ? (c[2] += 1) : (a[u] = [n, s, 1]);
                    }
                  }
                  t.push(n);
                }),
                (r._bucketRemoveBody = function (e, t, n) {
                  var r,
                    i = e.pairs,
                    l = o.id;
                  t.splice(a.indexOf(t, n), 1);
                  var s = t.length;
                  for (r = 0; r < s; r++) {
                    var u = i[l(n, t[r])];
                    u && (u[2] -= 1);
                  }
                }),
                (r._createActivePairsList = function (e) {
                  var t,
                    n,
                    r = e.pairs,
                    o = a.keys(r),
                    i = o.length,
                    l = [];
                  for (n = 0; n < i; n++) (t = r[o[n]])[2] > 0 ? l.push(t) : delete r[o[n]];
                  return l;
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(3),
                a = n(7),
                i = n(14),
                l = n(5),
                s = n(13),
                u = n(10),
                c = n(6),
                f = n(0),
                d = n(1);
              (r.create = function (e, t) {
                var n = (e ? e.mouse : null) || (t ? t.mouse : null);
                n ||
                  (e && e.render && e.render.canvas
                    ? (n = i.create(e.render.canvas))
                    : t && t.element
                    ? (n = i.create(t.element))
                    : ((n = i.create()),
                      f.warn(
                        'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
                      )));
                var o = {
                    type: 'mouseConstraint',
                    mouse: n,
                    element: null,
                    body: null,
                    constraint: u.create({
                      label: 'Mouse Constraint',
                      pointA: n.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: '#90EE90', lineWidth: 3 },
                    }),
                    collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                  },
                  a = f.extend(o, t);
                return (
                  l.on(e, 'beforeUpdate', function () {
                    var t = c.allBodies(e.world);
                    r.update(a, t), r._triggerEvents(a);
                  }),
                  a
                );
              }),
                (r.update = function (e, t) {
                  var n = e.mouse,
                    r = e.constraint,
                    i = e.body;
                  if (0 === n.button) {
                    if (r.bodyB) a.set(r.bodyB, !1), (r.pointA = n.position);
                    else
                      for (var u = 0; u < t.length; u++)
                        if (
                          ((i = t[u]),
                          d.contains(i.bounds, n.position) &&
                            s.canCollide(i.collisionFilter, e.collisionFilter))
                        )
                          for (var c = i.parts.length > 1 ? 1 : 0; c < i.parts.length; c++) {
                            var f = i.parts[c];
                            if (o.contains(f.vertices, n.position)) {
                              (r.pointA = n.position),
                                (r.bodyB = e.body = i),
                                (r.pointB = {
                                  x: n.position.x - i.position.x,
                                  y: n.position.y - i.position.y,
                                }),
                                (r.angleB = i.angle),
                                a.set(i, !1),
                                l.trigger(e, 'startdrag', { mouse: n, body: i });
                              break;
                            }
                          }
                  } else
                    (r.bodyB = e.body = null),
                      (r.pointB = null),
                      i && l.trigger(e, 'enddrag', { mouse: n, body: i });
                }),
                (r._triggerEvents = function (e) {
                  var t = e.mouse,
                    n = t.sourceEvents;
                  n.mousemove && l.trigger(e, 'mousemove', { mouse: t }),
                    n.mousedown && l.trigger(e, 'mousedown', { mouse: t }),
                    n.mouseup && l.trigger(e, 'mouseup', { mouse: t }),
                    i.clearSourceEvents(t);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(2),
                a = n(8),
                i = n(1),
                l = n(12),
                s = n(3);
              (r.collides = function (e, t) {
                for (
                  var n = [], r = t.length, o = e.bounds, l = a.collides, s = i.overlaps, u = 0;
                  u < r;
                  u++
                ) {
                  var c = t[u],
                    f = c.parts.length,
                    d = 1 === f ? 0 : 1;
                  if (s(c.bounds, o))
                    for (var p = d; p < f; p++) {
                      var m = c.parts[p];
                      if (s(m.bounds, o)) {
                        var v = l(m, e);
                        if (v) {
                          n.push(v);
                          break;
                        }
                      }
                    }
                }
                return n;
              }),
                (r.ray = function (e, t, n, a) {
                  a = a || 1e-100;
                  for (
                    var i = o.angle(t, n),
                      s = o.magnitude(o.sub(t, n)),
                      u = 0.5 * (n.x + t.x),
                      c = 0.5 * (n.y + t.y),
                      f = l.rectangle(u, c, s, a, { angle: i }),
                      d = r.collides(f, e),
                      p = 0;
                    p < d.length;
                    p += 1
                  ) {
                    var m = d[p];
                    m.body = m.bodyB = m.bodyA;
                  }
                  return d;
                }),
                (r.region = function (e, t, n) {
                  for (var r = [], o = 0; o < e.length; o++) {
                    var a = e[o],
                      l = i.overlaps(a.bounds, t);
                    ((l && !n) || (!l && n)) && r.push(a);
                  }
                  return r;
                }),
                (r.point = function (e, t) {
                  for (var n = [], r = 0; r < e.length; r++) {
                    var o = e[r];
                    if (i.contains(o.bounds, t))
                      for (var a = 1 === o.parts.length ? 0 : 1; a < o.parts.length; a++) {
                        var l = o.parts[a];
                        if (i.contains(l.bounds, t) && s.contains(l.vertices, t)) {
                          n.push(o);
                          break;
                        }
                      }
                  }
                  return n;
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(4),
                a = n(0),
                i = n(6),
                l = n(1),
                s = n(5),
                u = n(2),
                c = n(14);
              !(function () {
                var e, t;
                'undefined' !== typeof window &&
                  ((e =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (e) {
                      window.setTimeout(function () {
                        e(a.now());
                      }, 1e3 / 60);
                    }),
                  (t =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (r._goodFps = 30),
                  (r._goodDelta = 1e3 / 60),
                  (r.create = function (e) {
                    var t = {
                        engine: null,
                        element: null,
                        canvas: null,
                        mouse: null,
                        frameRequestId: null,
                        timing: {
                          historySize: 60,
                          delta: 0,
                          deltaHistory: [],
                          lastTime: 0,
                          lastTimestamp: 0,
                          lastElapsed: 0,
                          timestampElapsed: 0,
                          timestampElapsedHistory: [],
                          engineDeltaHistory: [],
                          engineElapsedHistory: [],
                          elapsedHistory: [],
                        },
                        options: {
                          width: 800,
                          height: 600,
                          pixelRatio: 1,
                          background: '#14151f',
                          wireframeBackground: '#14151f',
                          hasBounds: !!e.bounds,
                          enabled: !0,
                          wireframes: !0,
                          showSleeping: !0,
                          showDebug: !1,
                          showStats: !1,
                          showPerformance: !1,
                          showBounds: !1,
                          showVelocity: !1,
                          showCollisions: !1,
                          showSeparations: !1,
                          showAxes: !1,
                          showPositions: !1,
                          showAngleIndicator: !1,
                          showIds: !1,
                          showVertexNumbers: !1,
                          showConvexHulls: !1,
                          showInternalEdges: !1,
                          showMousePosition: !1,
                        },
                      },
                      n = a.extend(t, e);
                    return (
                      n.canvas &&
                        ((n.canvas.width = n.options.width || n.canvas.width),
                        (n.canvas.height = n.options.height || n.canvas.height)),
                      (n.mouse = e.mouse),
                      (n.engine = e.engine),
                      (n.canvas = n.canvas || d(n.options.width, n.options.height)),
                      (n.context = n.canvas.getContext('2d')),
                      (n.textures = {}),
                      (n.bounds = n.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: n.canvas.width, y: n.canvas.height },
                      }),
                      (n.controller = r),
                      (n.options.showBroadphase = !1),
                      1 !== n.options.pixelRatio && r.setPixelRatio(n, n.options.pixelRatio),
                      a.isElement(n.element) && n.element.appendChild(n.canvas),
                      n
                    );
                  }),
                  (r.run = function (t) {
                    !(function o(a) {
                      (t.frameRequestId = e(o)),
                        n(t, a),
                        r.world(t, a),
                        (t.options.showStats || t.options.showDebug) && r.stats(t, t.context, a),
                        (t.options.showPerformance || t.options.showDebug) &&
                          r.performance(t, t.context, a);
                    })();
                  }),
                  (r.stop = function (e) {
                    t(e.frameRequestId);
                  }),
                  (r.setPixelRatio = function (e, t) {
                    var n = e.options,
                      r = e.canvas;
                    'auto' === t && (t = p(r)),
                      (n.pixelRatio = t),
                      r.setAttribute('data-pixel-ratio', t),
                      (r.width = n.width * t),
                      (r.height = n.height * t),
                      (r.style.width = n.width + 'px'),
                      (r.style.height = n.height + 'px');
                  }),
                  (r.lookAt = function (e, t, n, r) {
                    (r = 'undefined' === typeof r || r),
                      (t = a.isArray(t) ? t : [t]),
                      (n = n || { x: 0, y: 0 });
                    for (
                      var o = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, i = 0;
                      i < t.length;
                      i += 1
                    ) {
                      var l = t[i],
                        s = l.bounds ? l.bounds.min : l.min || l.position || l,
                        u = l.bounds ? l.bounds.max : l.max || l.position || l;
                      s &&
                        u &&
                        (s.x < o.min.x && (o.min.x = s.x),
                        u.x > o.max.x && (o.max.x = u.x),
                        s.y < o.min.y && (o.min.y = s.y),
                        u.y > o.max.y && (o.max.y = u.y));
                    }
                    var f = o.max.x - o.min.x + 2 * n.x,
                      d = o.max.y - o.min.y + 2 * n.y,
                      p = e.canvas.height,
                      m = e.canvas.width / p,
                      v = f / d,
                      y = 1,
                      g = 1;
                    v > m ? (g = v / m) : (y = m / v),
                      (e.options.hasBounds = !0),
                      (e.bounds.min.x = o.min.x),
                      (e.bounds.max.x = o.min.x + f * y),
                      (e.bounds.min.y = o.min.y),
                      (e.bounds.max.y = o.min.y + d * g),
                      r &&
                        ((e.bounds.min.x += 0.5 * f - f * y * 0.5),
                        (e.bounds.max.x += 0.5 * f - f * y * 0.5),
                        (e.bounds.min.y += 0.5 * d - d * g * 0.5),
                        (e.bounds.max.y += 0.5 * d - d * g * 0.5)),
                      (e.bounds.min.x -= n.x),
                      (e.bounds.max.x -= n.x),
                      (e.bounds.min.y -= n.y),
                      (e.bounds.max.y -= n.y),
                      e.mouse &&
                        (c.setScale(e.mouse, {
                          x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                          y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height,
                        }),
                        c.setOffset(e.mouse, e.bounds.min));
                  }),
                  (r.startViewTransform = function (e) {
                    var t = e.bounds.max.x - e.bounds.min.x,
                      n = e.bounds.max.y - e.bounds.min.y,
                      r = t / e.options.width,
                      o = n / e.options.height;
                    e.context.setTransform(
                      e.options.pixelRatio / r,
                      0,
                      0,
                      e.options.pixelRatio / o,
                      0,
                      0
                    ),
                      e.context.translate(-e.bounds.min.x, -e.bounds.min.y);
                  }),
                  (r.endViewTransform = function (e) {
                    e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0);
                  }),
                  (r.world = function (e, t) {
                    var n,
                      o = a.now(),
                      f = e.engine,
                      d = f.world,
                      p = e.canvas,
                      m = e.context,
                      y = e.options,
                      g = e.timing,
                      h = i.allBodies(d),
                      b = i.allConstraints(d),
                      x = y.wireframes ? y.wireframeBackground : y.background,
                      w = [],
                      S = [],
                      k = { timestamp: f.timing.timestamp };
                    if (
                      (s.trigger(e, 'beforeRender', k),
                      e.currentBackground !== x && v(e, x),
                      (m.globalCompositeOperation = 'source-in'),
                      (m.fillStyle = 'transparent'),
                      m.fillRect(0, 0, p.width, p.height),
                      (m.globalCompositeOperation = 'source-over'),
                      y.hasBounds)
                    ) {
                      for (n = 0; n < h.length; n++) {
                        var C = h[n];
                        l.overlaps(C.bounds, e.bounds) && w.push(C);
                      }
                      for (n = 0; n < b.length; n++) {
                        var _ = b[n],
                          P = _.bodyA,
                          E = _.bodyB,
                          M = _.pointA,
                          T = _.pointB;
                        P && (M = u.add(P.position, _.pointA)),
                          E && (T = u.add(E.position, _.pointB)),
                          M &&
                            T &&
                            (l.contains(e.bounds, M) || l.contains(e.bounds, T)) &&
                            S.push(_);
                      }
                      r.startViewTransform(e),
                        e.mouse &&
                          (c.setScale(e.mouse, {
                            x: (e.bounds.max.x - e.bounds.min.x) / e.options.width,
                            y: (e.bounds.max.y - e.bounds.min.y) / e.options.height,
                          }),
                          c.setOffset(e.mouse, e.bounds.min));
                    } else
                      (S = b),
                        (w = h),
                        1 !== e.options.pixelRatio &&
                          e.context.setTransform(
                            e.options.pixelRatio,
                            0,
                            0,
                            e.options.pixelRatio,
                            0,
                            0
                          );
                    !y.wireframes || (f.enableSleeping && y.showSleeping)
                      ? r.bodies(e, w, m)
                      : (y.showConvexHulls && r.bodyConvexHulls(e, w, m),
                        r.bodyWireframes(e, w, m)),
                      y.showBounds && r.bodyBounds(e, w, m),
                      (y.showAxes || y.showAngleIndicator) && r.bodyAxes(e, w, m),
                      y.showPositions && r.bodyPositions(e, w, m),
                      y.showVelocity && r.bodyVelocity(e, w, m),
                      y.showIds && r.bodyIds(e, w, m),
                      y.showSeparations && r.separations(e, f.pairs.list, m),
                      y.showCollisions && r.collisions(e, f.pairs.list, m),
                      y.showVertexNumbers && r.vertexNumbers(e, w, m),
                      y.showMousePosition && r.mousePosition(e, e.mouse, m),
                      r.constraints(S, m),
                      y.hasBounds && r.endViewTransform(e),
                      s.trigger(e, 'afterRender', k),
                      (g.lastElapsed = a.now() - o);
                  }),
                  (r.stats = function (e, t, n) {
                    for (
                      var r = e.engine, o = r.world, a = i.allBodies(o), l = 0, s = 0, u = 0;
                      u < a.length;
                      u += 1
                    )
                      l += a[u].parts.length;
                    var c = {
                      Part: l,
                      Body: a.length,
                      Cons: i.allConstraints(o).length,
                      Comp: i.allComposites(o).length,
                      Pair: r.pairs.list.length,
                    };
                    for (var f in ((t.fillStyle = '#0e0f19'),
                    t.fillRect(s, 0, 302.5, 44),
                    (t.font = '12px Arial'),
                    (t.textBaseline = 'top'),
                    (t.textAlign = 'right'),
                    c)) {
                      var d = c[f];
                      (t.fillStyle = '#aaa'),
                        t.fillText(f, s + 55, 8),
                        (t.fillStyle = '#eee'),
                        t.fillText(d, s + 55, 26),
                        (s += 55);
                    }
                  }),
                  (r.performance = function (e, t) {
                    var n = e.engine,
                      o = e.timing,
                      a = o.deltaHistory,
                      i = o.elapsedHistory,
                      l = o.timestampElapsedHistory,
                      s = o.engineDeltaHistory,
                      u = o.engineElapsedHistory,
                      c = n.timing.lastDelta,
                      d = f(a),
                      p = f(i),
                      m = f(s),
                      v = f(u),
                      y = f(l) / d || 0,
                      g = 1e3 / d || 0,
                      h = 60;
                    (t.fillStyle = '#0e0f19'),
                      t.fillRect(0, 50, 370, 34),
                      r.status(
                        t,
                        10,
                        69,
                        h,
                        4,
                        a.length,
                        Math.round(g) + ' fps',
                        g / r._goodFps,
                        function (e) {
                          return a[e] / d - 1;
                        }
                      ),
                      r.status(
                        t,
                        82,
                        69,
                        h,
                        4,
                        s.length,
                        c.toFixed(2) + ' dt',
                        r._goodDelta / c,
                        function (e) {
                          return s[e] / m - 1;
                        }
                      ),
                      r.status(
                        t,
                        154,
                        69,
                        h,
                        4,
                        u.length,
                        v.toFixed(2) + ' ut',
                        1 - v / r._goodFps,
                        function (e) {
                          return u[e] / v - 1;
                        }
                      ),
                      r.status(
                        t,
                        226,
                        69,
                        h,
                        4,
                        i.length,
                        p.toFixed(2) + ' rt',
                        1 - p / r._goodFps,
                        function (e) {
                          return i[e] / p - 1;
                        }
                      ),
                      r.status(
                        t,
                        298,
                        69,
                        h,
                        4,
                        l.length,
                        y.toFixed(2) + ' x',
                        y * y * y,
                        function (e) {
                          return (l[e] / a[e] / y || 0) - 1;
                        }
                      );
                  }),
                  (r.status = function (e, t, n, r, o, i, l, s, u) {
                    (e.strokeStyle = '#888'),
                      (e.fillStyle = '#444'),
                      (e.lineWidth = 1),
                      e.fillRect(t, n + 7, r, 1),
                      e.beginPath(),
                      e.moveTo(t, n + 7 - o * a.clamp(0.4 * u(0), -2, 2));
                    for (var c = 0; c < r; c += 1)
                      e.lineTo(t + c, n + 7 - (c < i ? o * a.clamp(0.4 * u(c), -2, 2) : 0));
                    e.stroke(),
                      (e.fillStyle = 'hsl(' + a.clamp(25 + 95 * s, 0, 120) + ',100%,60%)'),
                      e.fillRect(t, n - 7, 4, 4),
                      (e.font = '12px Arial'),
                      (e.textBaseline = 'middle'),
                      (e.textAlign = 'right'),
                      (e.fillStyle = '#eee'),
                      e.fillText(l, t + r, n - 5);
                  }),
                  (r.constraints = function (e, t) {
                    for (var n = t, r = 0; r < e.length; r++) {
                      var o = e[r];
                      if (o.render.visible && o.pointA && o.pointB) {
                        var i,
                          l,
                          s = o.bodyA,
                          c = o.bodyB;
                        if (
                          ((i = s ? u.add(s.position, o.pointA) : o.pointA),
                          'pin' === o.render.type)
                        )
                          n.beginPath(), n.arc(i.x, i.y, 3, 0, 2 * Math.PI), n.closePath();
                        else {
                          if (
                            ((l = c ? u.add(c.position, o.pointB) : o.pointB),
                            n.beginPath(),
                            n.moveTo(i.x, i.y),
                            'spring' === o.render.type)
                          )
                            for (
                              var f,
                                d = u.sub(l, i),
                                p = u.perp(u.normalise(d)),
                                m = Math.ceil(a.clamp(o.length / 5, 12, 20)),
                                v = 1;
                              v < m;
                              v += 1
                            )
                              (f = v % 2 === 0 ? 1 : -1),
                                n.lineTo(
                                  i.x + d.x * (v / m) + p.x * f * 4,
                                  i.y + d.y * (v / m) + p.y * f * 4
                                );
                          n.lineTo(l.x, l.y);
                        }
                        o.render.lineWidth &&
                          ((n.lineWidth = o.render.lineWidth),
                          (n.strokeStyle = o.render.strokeStyle),
                          n.stroke()),
                          o.render.anchors &&
                            ((n.fillStyle = o.render.strokeStyle),
                            n.beginPath(),
                            n.arc(i.x, i.y, 3, 0, 2 * Math.PI),
                            n.arc(l.x, l.y, 3, 0, 2 * Math.PI),
                            n.closePath(),
                            n.fill());
                      }
                    }
                  }),
                  (r.bodies = function (e, t, n) {
                    var r,
                      o,
                      a,
                      i,
                      l = n,
                      s = (e.engine, e.options),
                      u = s.showInternalEdges || !s.wireframes;
                    for (a = 0; a < t.length; a++)
                      if ((r = t[a]).render.visible)
                        for (i = r.parts.length > 1 ? 1 : 0; i < r.parts.length; i++)
                          if ((o = r.parts[i]).render.visible) {
                            if (
                              (s.showSleeping && r.isSleeping
                                ? (l.globalAlpha = 0.5 * o.render.opacity)
                                : 1 !== o.render.opacity && (l.globalAlpha = o.render.opacity),
                              o.render.sprite && o.render.sprite.texture && !s.wireframes)
                            ) {
                              var c = o.render.sprite,
                                f = m(e, c.texture);
                              l.translate(o.position.x, o.position.y),
                                l.rotate(o.angle),
                                l.drawImage(
                                  f,
                                  f.width * -c.xOffset * c.xScale,
                                  f.height * -c.yOffset * c.yScale,
                                  f.width * c.xScale,
                                  f.height * c.yScale
                                ),
                                l.rotate(-o.angle),
                                l.translate(-o.position.x, -o.position.y);
                            } else {
                              if (o.circleRadius)
                                l.beginPath(),
                                  l.arc(o.position.x, o.position.y, o.circleRadius, 0, 2 * Math.PI);
                              else {
                                l.beginPath(), l.moveTo(o.vertices[0].x, o.vertices[0].y);
                                for (var d = 1; d < o.vertices.length; d++)
                                  !o.vertices[d - 1].isInternal || u
                                    ? l.lineTo(o.vertices[d].x, o.vertices[d].y)
                                    : l.moveTo(o.vertices[d].x, o.vertices[d].y),
                                    o.vertices[d].isInternal &&
                                      !u &&
                                      l.moveTo(
                                        o.vertices[(d + 1) % o.vertices.length].x,
                                        o.vertices[(d + 1) % o.vertices.length].y
                                      );
                                l.lineTo(o.vertices[0].x, o.vertices[0].y), l.closePath();
                              }
                              s.wireframes
                                ? ((l.lineWidth = 1), (l.strokeStyle = '#bbb'), l.stroke())
                                : ((l.fillStyle = o.render.fillStyle),
                                  o.render.lineWidth &&
                                    ((l.lineWidth = o.render.lineWidth),
                                    (l.strokeStyle = o.render.strokeStyle),
                                    l.stroke()),
                                  l.fill());
                            }
                            l.globalAlpha = 1;
                          }
                  }),
                  (r.bodyWireframes = function (e, t, n) {
                    var r,
                      o,
                      a,
                      i,
                      l,
                      s = n,
                      u = e.options.showInternalEdges;
                    for (s.beginPath(), a = 0; a < t.length; a++)
                      if ((r = t[a]).render.visible)
                        for (l = r.parts.length > 1 ? 1 : 0; l < r.parts.length; l++) {
                          for (
                            o = r.parts[l], s.moveTo(o.vertices[0].x, o.vertices[0].y), i = 1;
                            i < o.vertices.length;
                            i++
                          )
                            !o.vertices[i - 1].isInternal || u
                              ? s.lineTo(o.vertices[i].x, o.vertices[i].y)
                              : s.moveTo(o.vertices[i].x, o.vertices[i].y),
                              o.vertices[i].isInternal &&
                                !u &&
                                s.moveTo(
                                  o.vertices[(i + 1) % o.vertices.length].x,
                                  o.vertices[(i + 1) % o.vertices.length].y
                                );
                          s.lineTo(o.vertices[0].x, o.vertices[0].y);
                        }
                    (s.lineWidth = 1), (s.strokeStyle = '#bbb'), s.stroke();
                  }),
                  (r.bodyConvexHulls = function (e, t, n) {
                    var r,
                      o,
                      a,
                      i = n;
                    for (i.beginPath(), o = 0; o < t.length; o++)
                      if ((r = t[o]).render.visible && 1 !== r.parts.length) {
                        for (
                          i.moveTo(r.vertices[0].x, r.vertices[0].y), a = 1;
                          a < r.vertices.length;
                          a++
                        )
                          i.lineTo(r.vertices[a].x, r.vertices[a].y);
                        i.lineTo(r.vertices[0].x, r.vertices[0].y);
                      }
                    (i.lineWidth = 1), (i.strokeStyle = 'rgba(255,255,255,0.2)'), i.stroke();
                  }),
                  (r.vertexNumbers = function (e, t, n) {
                    var r,
                      o,
                      a,
                      i = n;
                    for (r = 0; r < t.length; r++) {
                      var l = t[r].parts;
                      for (a = l.length > 1 ? 1 : 0; a < l.length; a++) {
                        var s = l[a];
                        for (o = 0; o < s.vertices.length; o++)
                          (i.fillStyle = 'rgba(255,255,255,0.2)'),
                            i.fillText(
                              r + '_' + o,
                              s.position.x + 0.8 * (s.vertices[o].x - s.position.x),
                              s.position.y + 0.8 * (s.vertices[o].y - s.position.y)
                            );
                      }
                    }
                  }),
                  (r.mousePosition = function (e, t, n) {
                    var r = n;
                    (r.fillStyle = 'rgba(255,255,255,0.8)'),
                      r.fillText(
                        t.position.x + '  ' + t.position.y,
                        t.position.x + 5,
                        t.position.y - 5
                      );
                  }),
                  (r.bodyBounds = function (e, t, n) {
                    var r = n,
                      o = (e.engine, e.options);
                    r.beginPath();
                    for (var a = 0; a < t.length; a++)
                      if (t[a].render.visible)
                        for (var i = t[a].parts, l = i.length > 1 ? 1 : 0; l < i.length; l++) {
                          var s = i[l];
                          r.rect(
                            s.bounds.min.x,
                            s.bounds.min.y,
                            s.bounds.max.x - s.bounds.min.x,
                            s.bounds.max.y - s.bounds.min.y
                          );
                        }
                    o.wireframes
                      ? (r.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (r.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (r.lineWidth = 1),
                      r.stroke();
                  }),
                  (r.bodyAxes = function (e, t, n) {
                    var r,
                      o,
                      a,
                      i,
                      l = n,
                      s = (e.engine, e.options);
                    for (l.beginPath(), o = 0; o < t.length; o++) {
                      var u = t[o],
                        c = u.parts;
                      if (u.render.visible)
                        if (s.showAxes)
                          for (a = c.length > 1 ? 1 : 0; a < c.length; a++)
                            for (r = c[a], i = 0; i < r.axes.length; i++) {
                              var f = r.axes[i];
                              l.moveTo(r.position.x, r.position.y),
                                l.lineTo(r.position.x + 20 * f.x, r.position.y + 20 * f.y);
                            }
                        else
                          for (a = c.length > 1 ? 1 : 0; a < c.length; a++)
                            for (r = c[a], i = 0; i < r.axes.length; i++)
                              l.moveTo(r.position.x, r.position.y),
                                l.lineTo(
                                  (r.vertices[0].x + r.vertices[r.vertices.length - 1].x) / 2,
                                  (r.vertices[0].y + r.vertices[r.vertices.length - 1].y) / 2
                                );
                    }
                    s.wireframes
                      ? ((l.strokeStyle = 'indianred'), (l.lineWidth = 1))
                      : ((l.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                        (l.globalCompositeOperation = 'overlay'),
                        (l.lineWidth = 2)),
                      l.stroke(),
                      (l.globalCompositeOperation = 'source-over');
                  }),
                  (r.bodyPositions = function (e, t, n) {
                    var r,
                      o,
                      a,
                      i,
                      l = n,
                      s = (e.engine, e.options);
                    for (l.beginPath(), a = 0; a < t.length; a++)
                      if ((r = t[a]).render.visible)
                        for (i = 0; i < r.parts.length; i++)
                          (o = r.parts[i]),
                            l.arc(o.position.x, o.position.y, 3, 0, 2 * Math.PI, !1),
                            l.closePath();
                    for (
                      s.wireframes
                        ? (l.fillStyle = 'indianred')
                        : (l.fillStyle = 'rgba(0,0,0,0.5)'),
                        l.fill(),
                        l.beginPath(),
                        a = 0;
                      a < t.length;
                      a++
                    )
                      (r = t[a]).render.visible &&
                        (l.arc(r.positionPrev.x, r.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                        l.closePath());
                    (l.fillStyle = 'rgba(255,165,0,0.8)'), l.fill();
                  }),
                  (r.bodyVelocity = function (e, t, n) {
                    var r = n;
                    r.beginPath();
                    for (var a = 0; a < t.length; a++) {
                      var i = t[a];
                      if (i.render.visible) {
                        var l = o.getVelocity(i);
                        r.moveTo(i.position.x, i.position.y),
                          r.lineTo(i.position.x + l.x, i.position.y + l.y);
                      }
                    }
                    (r.lineWidth = 3), (r.strokeStyle = 'cornflowerblue'), r.stroke();
                  }),
                  (r.bodyIds = function (e, t, n) {
                    var r,
                      o,
                      a = n;
                    for (r = 0; r < t.length; r++)
                      if (t[r].render.visible) {
                        var i = t[r].parts;
                        for (o = i.length > 1 ? 1 : 0; o < i.length; o++) {
                          var l = i[o];
                          (a.font = '12px Arial'),
                            (a.fillStyle = 'rgba(255,255,255,0.5)'),
                            a.fillText(l.id, l.position.x + 10, l.position.y - 10);
                        }
                      }
                  }),
                  (r.collisions = function (e, t, n) {
                    var r,
                      o,
                      a,
                      i,
                      l = n,
                      s = e.options;
                    for (l.beginPath(), a = 0; a < t.length; a++)
                      if ((r = t[a]).isActive)
                        for (o = r.collision, i = 0; i < r.activeContacts.length; i++) {
                          var u = r.activeContacts[i].vertex;
                          l.rect(u.x - 1.5, u.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      s.wireframes
                        ? (l.fillStyle = 'rgba(255,255,255,0.7)')
                        : (l.fillStyle = 'orange'),
                        l.fill(),
                        l.beginPath(),
                        a = 0;
                      a < t.length;
                      a++
                    )
                      if ((r = t[a]).isActive && ((o = r.collision), r.activeContacts.length > 0)) {
                        var c = r.activeContacts[0].vertex.x,
                          f = r.activeContacts[0].vertex.y;
                        2 === r.activeContacts.length &&
                          ((c = (r.activeContacts[0].vertex.x + r.activeContacts[1].vertex.x) / 2),
                          (f = (r.activeContacts[0].vertex.y + r.activeContacts[1].vertex.y) / 2)),
                          o.bodyB === o.supports[0].body || !0 === o.bodyA.isStatic
                            ? l.moveTo(c - 8 * o.normal.x, f - 8 * o.normal.y)
                            : l.moveTo(c + 8 * o.normal.x, f + 8 * o.normal.y),
                          l.lineTo(c, f);
                      }
                    s.wireframes
                      ? (l.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (l.strokeStyle = 'orange'),
                      (l.lineWidth = 1),
                      l.stroke();
                  }),
                  (r.separations = function (e, t, n) {
                    var r,
                      o,
                      a,
                      i,
                      l,
                      s = n,
                      u = e.options;
                    for (s.beginPath(), l = 0; l < t.length; l++)
                      if ((r = t[l]).isActive) {
                        a = (o = r.collision).bodyA;
                        var c = 1;
                        (i = o.bodyB).isStatic || a.isStatic || (c = 0.5),
                          i.isStatic && (c = 0),
                          s.moveTo(i.position.x, i.position.y),
                          s.lineTo(
                            i.position.x - o.penetration.x * c,
                            i.position.y - o.penetration.y * c
                          ),
                          (c = 1),
                          i.isStatic || a.isStatic || (c = 0.5),
                          a.isStatic && (c = 0),
                          s.moveTo(a.position.x, a.position.y),
                          s.lineTo(
                            a.position.x + o.penetration.x * c,
                            a.position.y + o.penetration.y * c
                          );
                      }
                    u.wireframes
                      ? (s.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (s.strokeStyle = 'orange'),
                      s.stroke();
                  }),
                  (r.inspector = function (e, t) {
                    e.engine;
                    var n,
                      r = e.selected,
                      o = e.render,
                      a = o.options;
                    if (a.hasBounds) {
                      var i = o.bounds.max.x - o.bounds.min.x,
                        l = o.bounds.max.y - o.bounds.min.y,
                        s = i / o.options.width,
                        u = l / o.options.height;
                      t.scale(1 / s, 1 / u), t.translate(-o.bounds.min.x, -o.bounds.min.y);
                    }
                    for (var c = 0; c < r.length; c++) {
                      var f = r[c].data;
                      switch (
                        (t.translate(0.5, 0.5),
                        (t.lineWidth = 1),
                        (t.strokeStyle = 'rgba(255,165,0,0.9)'),
                        t.setLineDash([1, 2]),
                        f.type)
                      ) {
                        case 'body':
                          (n = f.bounds),
                            t.beginPath(),
                            t.rect(
                              Math.floor(n.min.x - 3),
                              Math.floor(n.min.y - 3),
                              Math.floor(n.max.x - n.min.x + 6),
                              Math.floor(n.max.y - n.min.y + 6)
                            ),
                            t.closePath(),
                            t.stroke();
                          break;
                        case 'constraint':
                          var d = f.pointA;
                          f.bodyA && (d = f.pointB),
                            t.beginPath(),
                            t.arc(d.x, d.y, 10, 0, 2 * Math.PI),
                            t.closePath(),
                            t.stroke();
                      }
                      t.setLineDash([]), t.translate(-0.5, -0.5);
                    }
                    null !== e.selectStart &&
                      (t.translate(0.5, 0.5),
                      (t.lineWidth = 1),
                      (t.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (t.fillStyle = 'rgba(255,165,0,0.1)'),
                      (n = e.selectBounds),
                      t.beginPath(),
                      t.rect(
                        Math.floor(n.min.x),
                        Math.floor(n.min.y),
                        Math.floor(n.max.x - n.min.x),
                        Math.floor(n.max.y - n.min.y)
                      ),
                      t.closePath(),
                      t.stroke(),
                      t.fill(),
                      t.translate(-0.5, -0.5)),
                      a.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0);
                  });
                var n = function (e, t) {
                    var n = e.engine,
                      o = e.timing,
                      a = o.historySize,
                      i = n.timing.timestamp;
                    (o.delta = t - o.lastTime || r._goodDelta),
                      (o.lastTime = t),
                      (o.timestampElapsed = i - o.lastTimestamp || 0),
                      (o.lastTimestamp = i),
                      o.deltaHistory.unshift(o.delta),
                      (o.deltaHistory.length = Math.min(o.deltaHistory.length, a)),
                      o.engineDeltaHistory.unshift(n.timing.lastDelta),
                      (o.engineDeltaHistory.length = Math.min(o.engineDeltaHistory.length, a)),
                      o.timestampElapsedHistory.unshift(o.timestampElapsed),
                      (o.timestampElapsedHistory.length = Math.min(
                        o.timestampElapsedHistory.length,
                        a
                      )),
                      o.engineElapsedHistory.unshift(n.timing.lastElapsed),
                      (o.engineElapsedHistory.length = Math.min(o.engineElapsedHistory.length, a)),
                      o.elapsedHistory.unshift(o.lastElapsed),
                      (o.elapsedHistory.length = Math.min(o.elapsedHistory.length, a));
                  },
                  f = function (e) {
                    for (var t = 0, n = 0; n < e.length; n += 1) t += e[n];
                    return t / e.length || 0;
                  },
                  d = function (e, t) {
                    var n = document.createElement('canvas');
                    return (
                      (n.width = e),
                      (n.height = t),
                      (n.oncontextmenu = function () {
                        return !1;
                      }),
                      (n.onselectstart = function () {
                        return !1;
                      }),
                      n
                    );
                  },
                  p = function (e) {
                    var t = e.getContext('2d');
                    return (
                      (window.devicePixelRatio || 1) /
                      (t.webkitBackingStorePixelRatio ||
                        t.mozBackingStorePixelRatio ||
                        t.msBackingStorePixelRatio ||
                        t.oBackingStorePixelRatio ||
                        t.backingStorePixelRatio ||
                        1)
                    );
                  },
                  m = function (e, t) {
                    var n = e.textures[t];
                    return n || (((n = e.textures[t] = new Image()).src = t), n);
                  },
                  v = function (e, t) {
                    var n = t;
                    /(jpg|gif|png)$/.test(t) && (n = 'url(' + t + ')'),
                      (e.canvas.style.background = n),
                      (e.canvas.style.backgroundSize = 'contain'),
                      (e.currentBackground = t);
                  };
              })();
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(5),
                a = n(17),
                i = n(0);
              !(function () {
                var e, t, n;
                'undefined' !== typeof window &&
                  ((e =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame),
                  (t =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  e ||
                    ((e = function (e) {
                      n = setTimeout(function () {
                        e(i.now());
                      }, 1e3 / 60);
                    }),
                    (t = function () {
                      clearTimeout(n);
                    })),
                  (r.create = function (e) {
                    var t = i.extend(
                      {
                        fps: 60,
                        deltaSampleSize: 60,
                        counterTimestamp: 0,
                        frameCounter: 0,
                        deltaHistory: [],
                        timePrev: null,
                        frameRequestId: null,
                        isFixed: !1,
                        enabled: !0,
                      },
                      e
                    );
                    return (
                      (t.delta = t.delta || 1e3 / t.fps),
                      (t.deltaMin = t.deltaMin || 1e3 / t.fps),
                      (t.deltaMax = t.deltaMax || 1e3 / (0.5 * t.fps)),
                      (t.fps = 1e3 / t.delta),
                      t
                    );
                  }),
                  (r.run = function (t, n) {
                    return (
                      'undefined' !== typeof t.positionIterations && ((n = t), (t = r.create())),
                      (function o(a) {
                        (t.frameRequestId = e(o)), a && t.enabled && r.tick(t, n, a);
                      })(),
                      t
                    );
                  }),
                  (r.tick = function (e, t, n) {
                    var r,
                      i = t.timing;
                    e.isFixed
                      ? (r = e.delta)
                      : ((r = n - e.timePrev || e.delta),
                        (e.timePrev = n),
                        e.deltaHistory.push(r),
                        (e.deltaHistory = e.deltaHistory.slice(-e.deltaSampleSize)),
                        (r =
                          (r =
                            (r = Math.min.apply(null, e.deltaHistory)) < e.deltaMin
                              ? e.deltaMin
                              : r) > e.deltaMax
                            ? e.deltaMax
                            : r),
                        (e.delta = r));
                    var l = { timestamp: i.timestamp };
                    o.trigger(e, 'beforeTick', l),
                      (e.frameCounter += 1),
                      n - e.counterTimestamp >= 1e3 &&
                        ((e.fps = e.frameCounter * ((n - e.counterTimestamp) / 1e3)),
                        (e.counterTimestamp = n),
                        (e.frameCounter = 0)),
                      o.trigger(e, 'tick', l),
                      o.trigger(e, 'beforeUpdate', l),
                      a.update(t, r),
                      o.trigger(e, 'afterUpdate', l),
                      o.trigger(e, 'afterTick', l);
                  }),
                  (r.stop = function (e) {
                    t(e.frameRequestId);
                  }),
                  (r.start = function (e, t) {
                    r.run(e, t);
                  });
              })();
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(8),
                a = n(0).deprecated;
              (r.collides = function (e, t) {
                return o.collides(e, t);
              }),
                a(r, 'collides', 'SAT.collides \u27a4 replaced by Collision.collides');
            },
            function (e, t, n) {
              var r = {};
              (e.exports = r), n(1);
              var o = n(0);
              (r.pathToVertices = function (e, t) {
                'undefined' === typeof window ||
                  'SVGPathSeg' in window ||
                  o.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                var n,
                  a,
                  i,
                  l,
                  s,
                  u,
                  c,
                  f,
                  d,
                  p,
                  m,
                  v = [],
                  y = 0,
                  g = 0,
                  h = 0;
                t = t || 15;
                var b = function (e, t, n) {
                    var r = n % 2 === 1 && n > 1;
                    if (!d || e != d.x || t != d.y) {
                      d && r ? ((p = d.x), (m = d.y)) : ((p = 0), (m = 0));
                      var o = { x: p + e, y: m + t };
                      (!r && d) || (d = o), v.push(o), (g = p + e), (h = m + t);
                    }
                  },
                  x = function (e) {
                    var t = e.pathSegTypeAsLetter.toUpperCase();
                    if ('Z' !== t) {
                      switch (t) {
                        case 'M':
                        case 'L':
                        case 'T':
                        case 'C':
                        case 'S':
                        case 'Q':
                          (g = e.x), (h = e.y);
                          break;
                        case 'H':
                          g = e.x;
                          break;
                        case 'V':
                          h = e.y;
                      }
                      b(g, h, e.pathSegType);
                    }
                  };
                for (
                  r._svgPathToAbsolute(e), i = e.getTotalLength(), u = [], n = 0;
                  n < e.pathSegList.numberOfItems;
                  n += 1
                )
                  u.push(e.pathSegList.getItem(n));
                for (c = u.concat(); y < i; ) {
                  if ((s = u[e.getPathSegAtLength(y)]) != f) {
                    for (; c.length && c[0] != s; ) x(c.shift());
                    f = s;
                  }
                  switch (s.pathSegTypeAsLetter.toUpperCase()) {
                    case 'C':
                    case 'T':
                    case 'S':
                    case 'Q':
                    case 'A':
                      (l = e.getPointAtLength(y)), b(l.x, l.y, 0);
                  }
                  y += t;
                }
                for (n = 0, a = c.length; n < a; ++n) x(c[n]);
                return v;
              }),
                (r._svgPathToAbsolute = function (e) {
                  for (
                    var t,
                      n,
                      r,
                      o,
                      a,
                      i,
                      l = e.pathSegList,
                      s = 0,
                      u = 0,
                      c = l.numberOfItems,
                      f = 0;
                    f < c;
                    ++f
                  ) {
                    var d = l.getItem(f),
                      p = d.pathSegTypeAsLetter;
                    if (/[MLHVCSQTA]/.test(p)) 'x' in d && (s = d.x), 'y' in d && (u = d.y);
                    else
                      switch (
                        ('x1' in d && (r = s + d.x1),
                        'x2' in d && (a = s + d.x2),
                        'y1' in d && (o = u + d.y1),
                        'y2' in d && (i = u + d.y2),
                        'x' in d && (s += d.x),
                        'y' in d && (u += d.y),
                        p)
                      ) {
                        case 'm':
                          l.replaceItem(e.createSVGPathSegMovetoAbs(s, u), f);
                          break;
                        case 'l':
                          l.replaceItem(e.createSVGPathSegLinetoAbs(s, u), f);
                          break;
                        case 'h':
                          l.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(s), f);
                          break;
                        case 'v':
                          l.replaceItem(e.createSVGPathSegLinetoVerticalAbs(u), f);
                          break;
                        case 'c':
                          l.replaceItem(e.createSVGPathSegCurvetoCubicAbs(s, u, r, o, a, i), f);
                          break;
                        case 's':
                          l.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(s, u, a, i), f);
                          break;
                        case 'q':
                          l.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(s, u, r, o), f);
                          break;
                        case 't':
                          l.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(s, u), f);
                          break;
                        case 'a':
                          l.replaceItem(
                            e.createSVGPathSegArcAbs(
                              s,
                              u,
                              d.r1,
                              d.r2,
                              d.angle,
                              d.largeArcFlag,
                              d.sweepFlag
                            ),
                            f
                          );
                          break;
                        case 'z':
                        case 'Z':
                          (s = t), (u = n);
                      }
                    ('M' != p && 'm' != p) || ((t = s), (n = u));
                  }
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var o = n(6);
              n(0),
                (r.create = o.create),
                (r.add = o.add),
                (r.remove = o.remove),
                (r.clear = o.clear),
                (r.addComposite = o.addComposite),
                (r.addBody = o.addBody),
                (r.addConstraint = o.addConstraint);
            },
          ]);
        }),
          (e.exports = r());
      },
      463: function (e, t, n) {
        'use strict';
        var r = n(791),
          o = n(296);
        function a(e) {
          for (
            var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + 'Capture', t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function v(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var y = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            y[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            y[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
            y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
            function (e) {
              y[e] = new v(e, 2, !1, e, null, !1, !1);
            }
          ),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            y[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            y[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            y[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function h(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = y.hasOwnProperty(t) ? y[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!f.call(m, e) ||
                    (!f.call(p, e) && (d.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(g, h);
            y[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(g, h);
              y[t] = new v(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(g, h);
            y[t] = new v(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new v(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          S = Symbol.for('react.portal'),
          k = Symbol.for('react.fragment'),
          C = Symbol.for('react.strict_mode'),
          _ = Symbol.for('react.profiler'),
          P = Symbol.for('react.provider'),
          E = Symbol.for('react.context'),
          M = Symbol.for('react.forward_ref'),
          T = Symbol.for('react.suspense'),
          A = Symbol.for('react.suspense_list'),
          I = Symbol.for('react.memo'),
          L = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var N = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var R = Symbol.iterator;
        function z(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (R && e[R]) || e['@@iterator'])
            ? e
            : null;
        }
        var B,
          O = Object.assign;
        function F(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              B = (t && t[1]) || '';
            }
          return '\n' + B + e;
        }
        var D = !1;
        function V(e, t) {
          if (!e || D) return '';
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && 'string' === typeof u.stack) {
              for (
                var o = u.stack.split('\n'),
                  a = r.stack.split('\n'),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var s = '\n' + o[i].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            s.includes('<anonymous>') &&
                            (s = s.replace('<anonymous>', e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? F(e) : '';
        }
        function j(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F('Lazy');
            case 13:
              return F('Suspense');
            case 19:
              return F('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = V(e.type, !1));
            case 11:
              return (e = V(e.type.render, !1));
            case 1:
              return (e = V(e.type, !0));
            default:
              return '';
          }
        }
        function U(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case k:
              return 'Fragment';
            case S:
              return 'Portal';
            case _:
              return 'Profiler';
            case C:
              return 'StrictMode';
            case T:
              return 'Suspense';
            case A:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || 'Context') + '.Consumer';
              case P:
                return (e._context.displayName || 'Context') + '.Provider';
              case M:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case I:
                return null !== (t = e.displayName || null) ? t : U(e.type) || 'Memo';
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return U(t);
            case 8:
              return t === C ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t) return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = $(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            'undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return O({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
            });
        }
        function Y(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1);
        }
        function Z(e, t) {
          Y(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') && ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value)))
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + W(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return O({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function ae(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
        }
        function le(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function se(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? le(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e)
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ['Webkit', 'ms', 'Moz', 'O'];
        function ve(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n || 'number' !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function ye(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                o = ve(n, t[n], r);
              'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
          });
        });
        var ge = O(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function he(e, t) {
          if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && 'object' !== typeof t.style) throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          ke = null,
          Ce = null;
        function _e(e) {
          if ((e = xo(e))) {
            if ('function' !== typeof Se) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = So(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          ke ? (Ce ? Ce.push(e) : (Ce = [e])) : (ke = e);
        }
        function Ee() {
          if (ke) {
            var e = ke,
              t = Ce;
            if (((Ce = ke = null), _e(e), t)) for (e = 0; e < t.length; e++) _e(t[e]);
          }
        }
        function Me(e, t) {
          return e(t);
        }
        function Te() {}
        var Ae = !1;
        function Ie(e, t, n) {
          if (Ae) return e(t, n);
          Ae = !0;
          try {
            return Me(e, t, n);
          } finally {
            (Ae = !1), (null !== ke || null !== Ce) && (Te(), Ee());
          }
        }
        function Le(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = So(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Ne = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, 'passive', {
              get: function () {
                Ne = !0;
              },
            }),
              window.addEventListener('test', Re, Re),
              window.removeEventListener('test', Re, Re);
          } catch (ce) {
            Ne = !1;
          }
        function ze(e, t, n, r, o, a, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Be = !1,
          Oe = null,
          Fe = !1,
          De = null,
          Ve = {
            onError: function (e) {
              (Be = !0), (Oe = e);
            },
          };
        function je(e, t, n, r, o, a, i, l, s) {
          (Be = !1), (Oe = null), ze.apply(Ve, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Ue(e) !== e) throw Error(a(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return We(o), e;
                    if (i === r) return We(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = o.unstable_scheduleCallback,
          Ge = o.unstable_cancelCallback,
          Ke = o.unstable_shouldYield,
          Xe = o.unstable_requestPaint,
          Ye = o.unstable_now,
          Ze = o.unstable_getCurrentPriorityLevel,
          Je = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = ft(l)) : 0 !== (a &= i) && (r = ft(a));
          } else 0 !== (i = n & ~o) ? (r = ft(i)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function yt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function ht(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var wt,
          St,
          kt,
          Ct,
          _t,
          Pt = !1,
          Et = [],
          Mt = null,
          Tt = null,
          At = null,
          It = new Map(),
          Lt = new Map(),
          Nt = [],
          Rt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function zt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Mt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Tt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              At = null;
              break;
            case 'pointerover':
            case 'pointerout':
              It.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Lt.delete(t.pointerId);
          }
        }
        function Bt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = xo(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Ot(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void _t(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = xo(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Vt() {
          (Pt = !1),
            null !== Mt && Ft(Mt) && (Mt = null),
            null !== Tt && Ft(Tt) && (Tt = null),
            null !== At && Ft(At) && (At = null),
            It.forEach(Dt),
            Lt.forEach(Dt);
        }
        function jt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt || ((Pt = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, Vt)));
        }
        function Ut(e) {
          function t(t) {
            return jt(t, e);
          }
          if (0 < Et.length) {
            jt(Et[0], e);
            for (var n = 1; n < Et.length; n++) {
              var r = Et[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Mt && jt(Mt, e),
              null !== Tt && jt(Tt, e),
              null !== At && jt(At, e),
              It.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < Nt.length;
            n++
          )
            (r = Nt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn; )
            Ot(n), null === n.blockedOn && Nt.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Wt = !0;
        function $t(e, t, n, r) {
          var o = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = a);
          }
        }
        function qt(e, t, n, r) {
          var o = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = a);
          }
        }
        function Qt(e, t, n, r) {
          if (Wt) {
            var o = Kt(e, t, n, r);
            if (null === o) Wr(e, t, r, Gt, n), zt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case 'focusin':
                    return (Mt = Bt(Mt, e, t, n, r, o)), !0;
                  case 'dragenter':
                    return (Tt = Bt(Tt, e, t, n, r, o)), !0;
                  case 'mouseover':
                    return (At = Bt(At, e, t, n, r, o)), !0;
                  case 'pointerover':
                    var a = o.pointerId;
                    return It.set(a, Bt(It.get(a) || null, e, t, n, r, o)), !0;
                  case 'gotpointercapture':
                    return (a = o.pointerId), Lt.set(a, Bt(Lt.get(a) || null, e, t, n, r, o)), !0;
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== o; ) {
                var a = xo(o);
                if (
                  (null !== a && wt(a),
                  null === (a = Kt(e, t, n, r)) && Wr(e, t, r, Gt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Kt(e, t, n, r) {
          if (((Gt = null), null !== (e = bo((e = we(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Yt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            o = 'value' in Yt ? Yt.value : Yt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Jt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            O(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          fn = O({}, un, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = O({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== sn &&
                    (sn && 'mousemove' === e.type
                      ? ((an = e.screenX - sn.screenX), (ln = e.screenY - sn.screenY))
                      : (ln = an = 0),
                    (sn = e)),
                  an);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ln;
            },
          }),
          mn = on(pn),
          vn = on(O({}, pn, { dataTransfer: 0 })),
          yn = on(O({}, fn, { relatedTarget: 0 })),
          gn = on(O({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          hn = O({}, un, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          }),
          bn = on(hn),
          xn = on(O({}, un, { data: 0 })),
          wn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          Sn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          kn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function Cn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e];
        }
        function _n() {
          return Cn;
        }
        var Pn = O({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? Sn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: _n,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          En = on(Pn),
          Mn = on(
            O({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tn = on(
            O({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            })
          ),
          An = on(O({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          In = O({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = on(In),
          Nn = [9, 13, 27, 32],
          Rn = c && 'CompositionEvent' in window,
          zn = null;
        c && 'documentMode' in document && (zn = document.documentMode);
        var Bn = c && 'TextEvent' in window && !zn,
          On = c && (!Rn || (zn && 8 < zn && 11 >= zn)),
          Fn = String.fromCharCode(32),
          Dn = !1;
        function Vn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Nn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function jn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var Un = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Hn[e.type] : 'textarea' === t;
        }
        function $n(e, t, n, r) {
          Pe(r),
            0 < (t = qr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Qn = null;
        function Gn(e) {
          Fr(e, 0);
        }
        function Kn(e) {
          if (Q(wo(e))) return e;
        }
        function Xn(e, t) {
          if ('change' === e) return t;
        }
        var Yn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = 'oninput' in document;
            if (!Jn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'), (Jn = 'function' === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Yn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent('onpropertychange', nr), (Qn = qn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Kn(Qn)) {
            var t = [];
            $n(t, Qn, e, we(e)), Ie(Gn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Qn = n), (qn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function or(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Kn(Qn);
        }
        function ar(e, t) {
          if ('click' === e) return Kn(t);
        }
        function ir(e, t) {
          if ('input' === e || 'change' === e) return Kn(t);
        }
        var lr =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!f.call(t, o) || !lr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function mr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
              if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a));
                var i = cr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ('function' === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var vr = c && 'documentMode' in document && 11 >= document.documentMode,
          yr = null,
          gr = null,
          hr = null,
          br = !1;
        function xr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          br ||
            null == yr ||
            yr !== G(r) ||
            ('selectionStart' in (r = yr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (hr && sr(hr, r)) ||
              ((hr = r),
              0 < (r = qr(gr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var Sr = {
            animationend: wr('Animation', 'AnimationEnd'),
            animationiteration: wr('Animation', 'AnimationIteration'),
            animationstart: wr('Animation', 'AnimationStart'),
            transitionend: wr('Transition', 'TransitionEnd'),
          },
          kr = {},
          Cr = {};
        function _r(e) {
          if (kr[e]) return kr[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Cr) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Cr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          'TransitionEvent' in window || delete Sr.transitionend.transition);
        var Pr = _r('animationend'),
          Er = _r('animationiteration'),
          Mr = _r('animationstart'),
          Tr = _r('transitionend'),
          Ar = new Map(),
          Ir =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Lr(e, t) {
          Ar.set(e, t), s(t, [e]);
        }
        for (var Nr = 0; Nr < Ir.length; Nr++) {
          var Rr = Ir[Nr];
          Lr(Rr.toLowerCase(), 'on' + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Lr(Pr, 'onAnimationEnd'),
          Lr(Er, 'onAnimationIteration'),
          Lr(Mr, 'onAnimationStart'),
          Lr('dblclick', 'onDoubleClick'),
          Lr('focusin', 'onFocus'),
          Lr('focusout', 'onBlur'),
          Lr(Tr, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          s(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(' ')
          ),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          s('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          s(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(' ')
          ),
          s(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
          ),
          s(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
          );
        var zr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Br = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zr));
        function Or(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, s, u) {
              if ((je.apply(this, arguments), Be)) {
                if (!Be) throw Error(a(198));
                var c = Oe;
                (Be = !1), (Oe = null), Fe || ((Fe = !0), (De = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && o.isPropagationStopped())) break e;
                  Or(o, l, u), (a = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  Or(o, l, u), (a = s);
                }
            }
          }
          if (Fe) throw ((e = De), (Fe = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[yo];
          void 0 === n && (n = t[yo] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Vr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var jr = '_reactListening' + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[jr]) {
            (e[jr] = !0),
              i.forEach(function (t) {
                'selectionchange' !== t && (Br.has(t) || Vr(t, !1, e), Vr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[jr] || ((t[jr] = !0), Vr('selectionchange', !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var o = $t;
              break;
            case 4:
              o = qt;
              break;
            default:
              o = Qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ne || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === o ||
                        (8 === s.nodeType && s.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = bo(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ie(function () {
            var r = a,
              o = we(n),
              i = [];
            e: {
              var l = Ar.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    s = En;
                    break;
                  case 'focusin':
                    (u = 'focus'), (s = yn);
                    break;
                  case 'focusout':
                    (u = 'blur'), (s = yn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    s = yn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = mn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = vn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = Tn;
                    break;
                  case Pr:
                  case Er:
                  case Mr:
                    s = gn;
                    break;
                  case Tr:
                    s = An;
                    break;
                  case 'scroll':
                    s = dn;
                    break;
                  case 'wheel':
                    s = Ln;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = Mn;
                }
                var c = 0 !== (4 & t),
                  f = !c && 'scroll' === e,
                  d = c ? (null !== l ? l + 'Capture' : null) : l;
                c = [];
                for (var p, m = r; null !== m; ) {
                  var v = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v), null !== d && null != (v = Le(m, d)) && c.push($r(m, v, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < c.length && ((l = new s(l, u, null, n, o)), i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[vo])) &&
                  (s || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !== (u = (u = n.relatedTarget || n.toElement) ? bo(u) : null) &&
                        (u !== (f = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = mn),
                  (v = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (m = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = Mn), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (m = 'pointer')),
                  (f = null == s ? l : wo(s)),
                  (p = null == u ? l : wo(u)),
                  ((l = new c(v, m + 'leave', s, n, o)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  bo(o) === r &&
                    (((c = new c(d, m + 'enter', u, n, o)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  s && u)
                )
                  e: {
                    for (d = u, m = 0, p = c = s; p; p = Qr(p)) m++;
                    for (p = 0, v = d; v; v = Qr(v)) p++;
                    for (; 0 < m - p; ) (c = Qr(c)), m--;
                    for (; 0 < p - m; ) (d = Qr(d)), p--;
                    for (; m--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Qr(c)), (d = Qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Gr(i, l, s, c, !1), null !== u && null !== f && Gr(i, f, u, c, !0);
              }
              if (
                'select' === (s = (l = r ? wo(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === l.type)
              )
                var y = Xn;
              else if (Wn(l))
                if (Yn) y = ir;
                else {
                  y = or;
                  var g = rr;
                }
              else
                (s = l.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === l.type || 'radio' === l.type) &&
                  (y = ar);
              switch (
                (y && (y = y(e, r))
                  ? $n(i, y, n, o)
                  : (g && g(e, l, r),
                    'focusout' === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      'number' === l.type &&
                      ee(l, 'number', l.value)),
                (g = r ? wo(r) : window),
                e)
              ) {
                case 'focusin':
                  (Wn(g) || 'true' === g.contentEditable) && ((yr = g), (gr = r), (hr = null));
                  break;
                case 'focusout':
                  hr = gr = yr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), xr(i, n, o);
                  break;
                case 'selectionchange':
                  if (vr) break;
                case 'keydown':
                case 'keyup':
                  xr(i, n, o);
              }
              var h;
              if (Rn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Vn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
              b &&
                (On &&
                  'ko' !== n.locale &&
                  (Un || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Un && (h = en())
                    : ((Zt = 'value' in (Yt = o) ? Yt.value : Yt.textContent), (Un = !0))),
                0 < (g = qr(r, b)).length &&
                  ((b = new xn(b, e, null, n, o)),
                  i.push({ event: b, listeners: g }),
                  h ? (b.data = h) : null !== (h = jn(n)) && (b.data = h))),
                (h = Bn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return jn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Dn = !0), Fn);
                        case 'textInput':
                          return (e = t.data) === Fn && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return 'compositionend' === e || (!Rn && Vn(e, t))
                          ? ((e = en()), (Jt = Zt = Yt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return On && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, 'onBeforeInput')).length &&
                  ((o = new xn('onBeforeInput', 'beforeinput', null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = h));
            }
            Fr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Le(e, n)) && r.unshift($r(e, a, o)),
              null != (a = Le(e, t)) && r.push($r(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              o
                ? null != (s = Le(n, a)) && i.unshift($r(n, s, l))
                : o || (null != (s = Le(n, a)) && i.push($r(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Kr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ('string' === typeof e ? e : '' + e).replace(Kr, '\n').replace(Xr, '');
        }
        function Zr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(a(425));
        }
        function Jr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = 'function' === typeof setTimeout ? setTimeout : void 0,
          oo = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          ao = 'function' === typeof Promise ? Promise : void 0,
          io =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof ao
              ? function (e) {
                  return ao.resolve(null).then(e).catch(lo);
                }
              : ro;
        function lo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function so(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ('/$' === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Ut(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = o;
          } while (n);
          Ut(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = '__reactFiber$' + fo,
          mo = '__reactProps$' + fo,
          vo = '__reactContainer$' + fo,
          yo = '__reactEvents$' + fo,
          go = '__reactListeners$' + fo,
          ho = '__reactHandles$' + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[vo] || n[po])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function xo(e) {
          return !(e = e[po] || e[vo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function So(e) {
          return e[mo] || null;
        }
        var ko = [],
          Co = -1;
        function _o(e) {
          return { current: e };
        }
        function Po(e) {
          0 > Co || ((e.current = ko[Co]), (ko[Co] = null), Co--);
        }
        function Eo(e, t) {
          Co++, (ko[Co] = e.current), (e.current = t);
        }
        var Mo = {},
          To = _o(Mo),
          Ao = _o(!1),
          Io = Mo;
        function Lo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Mo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function No(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ro() {
          Po(Ao), Po(To);
        }
        function zo(e, t, n) {
          if (To.current !== Mo) throw Error(a(168));
          Eo(To, t), Eo(Ao, n);
        }
        function Bo(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, H(e) || 'Unknown', o));
          return O({}, n, r);
        }
        function Oo(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mo),
            (Io = To.current),
            Eo(To, e),
            Eo(Ao, Ao.current),
            !0
          );
        }
        function Fo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Bo(e, t, Io)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Po(Ao),
              Po(To),
              Eo(To, e))
            : Po(Ao),
            Eo(Ao, n);
        }
        var Do = null,
          Vo = !1,
          jo = !1;
        function Uo(e) {
          null === Do ? (Do = [e]) : Do.push(e);
        }
        function Ho() {
          if (!jo && null !== Do) {
            jo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Do;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Do = null), (Vo = !1);
            } catch (o) {
              throw (null !== Do && (Do = Do.slice(e + 1)), Qe(Je, Ho), o);
            } finally {
              (bt = t), (jo = !1);
            }
          }
          return null;
        }
        var Wo = [],
          $o = 0,
          qo = null,
          Qo = 0,
          Go = [],
          Ko = 0,
          Xo = null,
          Yo = 1,
          Zo = '';
        function Jo(e, t) {
          (Wo[$o++] = Qo), (Wo[$o++] = qo), (qo = e), (Qo = t);
        }
        function ea(e, t, n) {
          (Go[Ko++] = Yo), (Go[Ko++] = Zo), (Go[Ko++] = Xo), (Xo = e);
          var r = Yo;
          e = Zo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Yo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Zo = a + e);
          } else (Yo = (1 << a) | (n << o) | r), (Zo = e);
        }
        function ta(e) {
          null !== e.return && (Jo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === qo; ) (qo = Wo[--$o]), (Wo[$o] = null), (Qo = Wo[--$o]), (Wo[$o] = null);
          for (; e === Xo; )
            (Xo = Go[--Ko]),
              (Go[Ko] = null),
              (Zo = Go[--Ko]),
              (Go[Ko] = null),
              (Yo = Go[--Ko]),
              (Go[Ko] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function la(e, t) {
          var n = Lu(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function sa(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xo ? { id: Yo, overflow: Zo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!sa(e, t)) {
                if (ua(e)) throw Error(a(418));
                t = uo(n.nextSibling);
                var r = ra;
                t && sa(e, t) ? la(r, n) : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function fa(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
          ra = e;
        }
        function da(e) {
          if (e !== ra) return !1;
          if (!aa) return fa(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = 'head' !== (t = e.type) && 'body' !== t && !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ua(e)) throw (pa(), Error(a(418)));
            for (; t; ) la(e, t), (t = uo(t.nextSibling));
          }
          if ((fa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      oa = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = uo(e.nextSibling);
        }
        function ma() {
          (oa = ra = null), (aa = !1);
        }
        function va(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ya = x.ReactCurrentBatchConfig;
        function ga(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = O({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ha = _o(null),
          ba = null,
          xa = null,
          wa = null;
        function Sa() {
          wa = xa = ba = null;
        }
        function ka(e) {
          var t = ha.current;
          Po(ha), (e._currentValue = t);
        }
        function Ca(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function _a(e, t) {
          (ba = e),
            (wa = xa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Pa(e) {
          var t = e._currentValue;
          if (wa !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === xa)) {
              if (null === ba) throw Error(a(308));
              (xa = e), (ba.dependencies = { lanes: 0, firstContext: e });
            } else xa = xa.next = e;
          return t;
        }
        var Ea = null;
        function Ma(e) {
          null === Ea ? (Ea = [e]) : Ea.push(e);
        }
        function Ta(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o ? ((n.next = n), Ma(t)) : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Aa(e, r)
          );
        }
        function Aa(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ia = !1;
        function La(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Na(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ra(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function za(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ts))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Aa(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Ma(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Aa(e, n)
          );
        }
        function Ba(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), ht(e, n);
          }
        }
        function Oa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fa(e, t, n, r) {
          var o = e.updateQueue;
          Ia = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (a = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var f = o.baseState;
            for (i = 0, c = u = s = null, l = a; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ('function' === typeof (m = v.payload)) {
                        f = m.call(p, f, d);
                        break e;
                      }
                      f = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d = 'function' === typeof (m = v.payload) ? m.call(p, f, d) : m) ||
                        void 0 === d
                      )
                        break e;
                      f = O({}, f, d);
                      break e;
                    case 2:
                      Ia = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64), null === (d = o.effects) ? (o.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (o.lastBaseUpdate = d),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (o.baseState = s),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Os |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Da(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), 'function' !== typeof o)) throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Va = new r.Component().refs;
        function ja(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : O({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ua = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Ra(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (ru(t, e, o, r), Ba(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Ra(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (ru(t, e, o, r), Ba(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              o = Ra(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = za(e, o, r)) && (ru(t, e, r, n), Ba(t, e, r));
          },
        };
        function Ha(e, t, n, r, o, a, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype || !t.prototype.isPureReactComponent || !sr(n, r) || !sr(o, a);
        }
        function Wa(e, t, n) {
          var r = !1,
            o = Mo,
            a = t.contextType;
          return (
            'object' === typeof a && null !== a
              ? (a = Pa(a))
              : ((o = No(t) ? Io : To.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Lo(e, o) : Mo)),
            (t = new t(n, a)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ua),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function $a(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ua.enqueueReplaceState(t, t.state, null);
        }
        function qa(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Va), La(e);
          var a = t.contextType;
          'object' === typeof a && null !== a
            ? (o.context = Pa(a))
            : ((a = No(t) ? Io : To.current), (o.context = Lo(e, a))),
            (o.state = e.memoizedState),
            'function' === typeof (a = t.getDerivedStateFromProps) &&
              (ja(e, t, a, n), (o.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof o.getSnapshotBeforeUpdate ||
              ('function' !== typeof o.UNSAFE_componentWillMount &&
                'function' !== typeof o.componentWillMount) ||
              ((t = o.state),
              'function' === typeof o.componentWillMount && o.componentWillMount(),
              'function' === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              t !== o.state && Ua.enqueueReplaceState(o, o.state, null),
              Fa(e, n, o, r),
              (o.state = e.memoizedState)),
            'function' === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Qa(e, t, n) {
          if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Va && (t = o.refs = {}), null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ('string' !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ga(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
              )
            ))
          );
        }
        function Ka(e) {
          return (0, e._init)(e._payload);
        }
        function Xa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Ru(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ('object' === typeof a && null !== a && a.$$typeof === L && Ka(a) === t.type))
              ? (((r = o(t, n.props)).ref = Qa(e, t, n)), (r.return = e), r)
              : (((r = zu(n.type, n.key, n.props, null, e.mode, r)).ref = Qa(e, t, n)),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Bu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Fu('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = zu(t.type, t.key, t.props, null, e.mode, n)).ref = Qa(e, null, t)),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Du(t, e.mode, n)).return = e), t;
                case L:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t)) return ((t = Bu(t, e.mode, n, null)).return = e), t;
              Ga(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== o ? null : s(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === o ? u(e, t, n, r) : null;
                case S:
                  return n.key === o ? c(e, t, n, r) : null;
                case L:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== o ? null : f(e, t, n, r, null);
              Ga(e, n);
            }
            return null;
          }
          function m(e, t, n, r, o) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return s(t, (e = e.get(n) || null), '' + r, o);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case S:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case L:
                  return m(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || z(r)) return f(t, (e = e.get(n) || null), r, o, null);
              Ga(t, r);
            }
            return null;
          }
          function v(o, a, l, s) {
            for (
              var u = null, c = null, f = a, v = (a = 0), y = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((y = f), (f = null)) : (y = f.sibling);
              var g = p(o, f, l[v], s);
              if (null === g) {
                null === f && (f = y);
                break;
              }
              e && f && null === g.alternate && t(o, f),
                (a = i(g, a, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (f = y);
            }
            if (v === l.length) return n(o, f), aa && Jo(o, v), u;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(o, l[v], s)) &&
                  ((a = i(f, a, v)), null === c ? (u = f) : (c.sibling = f), (c = f));
              return aa && Jo(o, v), u;
            }
            for (f = r(o, f); v < l.length; v++)
              null !== (y = m(f, o, v, l[v], s)) &&
                (e && null !== y.alternate && f.delete(null === y.key ? v : y.key),
                (a = i(y, a, v)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Jo(o, v),
              u
            );
          }
          function y(o, l, s, u) {
            var c = z(s);
            if ('function' !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var f = (c = null), v = l, y = (l = 0), g = null, h = s.next();
              null !== v && !h.done;
              y++, h = s.next()
            ) {
              v.index > y ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(o, v, h.value, u);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(o, v),
                (l = i(b, l, y)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (h.done) return n(o, v), aa && Jo(o, y), c;
            if (null === v) {
              for (; !h.done; y++, h = s.next())
                null !== (h = d(o, h.value, u)) &&
                  ((l = i(h, l, y)), null === f ? (c = h) : (f.sibling = h), (f = h));
              return aa && Jo(o, y), c;
            }
            for (v = r(o, v); !h.done; y++, h = s.next())
              null !== (h = m(v, o, y, h.value, u)) &&
                (e && null !== h.alternate && v.delete(null === h.key ? y : h.key),
                (l = i(h, l, y)),
                null === f ? (c = h) : (f.sibling = h),
                (f = h));
            return (
              e &&
                v.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Jo(o, y),
              c
            );
          }
          return function e(r, a, i, s) {
            if (
              ('object' === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              'object' === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling), ((a = o(c, i.props.children)).return = r), (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u &&
                            null !== u &&
                            u.$$typeof === L &&
                            Ka(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = Qa(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === k
                      ? (((a = Bu(i.props.children, r.mode, s, i.key)).return = r), (r = a))
                      : (((s = zu(i.type, i.key, i.props, null, r.mode, s)).ref = Qa(r, a, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case S:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling), ((a = o(a, i.children || [])).return = r), (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Du(i, r.mode, s)).return = r), (r = a);
                  }
                  return l(r);
                case L:
                  return e(r, a, (c = i._init)(i._payload), s);
              }
              if (te(i)) return v(r, a, i, s);
              if (z(i)) return y(r, a, i, s);
              Ga(r, i);
            }
            return ('string' === typeof i && '' !== i) || 'number' === typeof i
              ? ((i = '' + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = Fu(i, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Ya = Xa(!0),
          Za = Xa(!1),
          Ja = {},
          ei = _o(Ja),
          ti = _o(Ja),
          ni = _o(Ja);
        function ri(e) {
          if (e === Ja) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((Eo(ni, t), Eo(ti, e), Eo(ei, Ja), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, '');
              break;
            default:
              t = se((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          Po(ei), Eo(ei, t);
        }
        function ai() {
          Po(ei), Po(ti), Po(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = se(t, e.type);
          t !== n && (Eo(ti, e), Eo(ei, n));
        }
        function li(e) {
          ti.current === e && (Po(ei), Po(ti));
        }
        var si = _o(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = x.ReactCurrentDispatcher,
          pi = x.ReactCurrentBatchConfig,
          mi = 0,
          vi = null,
          yi = null,
          gi = null,
          hi = !1,
          bi = !1,
          xi = 0,
          wi = 0;
        function Si() {
          throw Error(a(321));
        }
        function ki(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ci(e, t, n, r, o, i) {
          if (
            ((mi = i),
            (vi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, o)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (xi = 0), 25 <= i)) throw Error(a(301));
              (i += 1), (gi = yi = null), (t.updateQueue = null), (di.current = ul), (e = n(r, o));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== yi && null !== yi.next),
            (mi = 0),
            (gi = yi = vi = null),
            (hi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function _i() {
          var e = 0 !== xi;
          return (xi = 0), e;
        }
        function Pi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === gi ? (vi.memoizedState = gi = e) : (gi = gi.next = e), gi;
        }
        function Ei() {
          if (null === yi) {
            var e = vi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = yi.next;
          var t = null === gi ? vi.memoizedState : gi.next;
          if (null !== t) (gi = t), (yi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (yi = e).memoizedState,
              baseState: yi.baseState,
              baseQueue: yi.baseQueue,
              queue: yi.queue,
              next: null,
            }),
              null === gi ? (vi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Mi(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function Ti(e) {
          var t = Ei(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = yi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var f = c.lane;
              if ((mi & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d), (vi.lanes |= f), (Os |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (vi.lanes |= i), (Os |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ai(e) {
          var t = Ei(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            lr(i, t.memoizedState) || (xl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ii() {}
        function Li(e, t) {
          var n = vi,
            r = Ei(),
            o = t(),
            i = !lr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (xl = !0)),
            (r = r.queue),
            Wi(zi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || i || (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), Di(9, Ri.bind(null, n, r, o, t), void 0, null), null === As))
              throw Error(a(349));
            0 !== (30 & mi) || Ni(n, t, o);
          }
          return o;
        }
        function Ni(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (vi.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ri(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Bi(t) && Oi(e);
        }
        function zi(e, t, n) {
          return n(function () {
            Bi(t) && Oi(e);
          });
        }
        function Bi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Oi(e) {
          var t = Aa(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Fi(e) {
          var t = Pi();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Mi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vi, e)),
            [t.memoizedState, e]
          );
        }
        function Di(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Vi() {
          return Ei().memoizedState;
        }
        function ji(e, t, n, r) {
          var o = Pi();
          (vi.flags |= e), (o.memoizedState = Di(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ui(e, t, n, r) {
          var o = Ei();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== yi) {
            var i = yi.memoizedState;
            if (((a = i.destroy), null !== r && ki(r, i.deps)))
              return void (o.memoizedState = Di(t, n, a, r));
          }
          (vi.flags |= e), (o.memoizedState = Di(1 | t, n, a, r));
        }
        function Hi(e, t) {
          return ji(8390656, 8, e, t);
        }
        function Wi(e, t) {
          return Ui(2048, 8, e, t);
        }
        function $i(e, t) {
          return Ui(4, 2, e, t);
        }
        function qi(e, t) {
          return Ui(4, 4, e, t);
        }
        function Qi(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Gi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ui(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function Ki() {}
        function Xi(e, t) {
          var n = Ei();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Yi(e, t) {
          var n = Ei();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zi(e, t, n) {
          return 0 === (21 & mi)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)), (e.memoizedState = n))
            : (lr(n, t) || ((n = vt()), (vi.lanes |= n), (Os |= n), (e.baseState = !0)), t);
        }
        function Ji(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ei().memoizedState;
        }
        function tl(e, t, n) {
          var r = nu(e);
          if (
            ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), rl(e))
          )
            ol(t, n);
          else if (null !== (n = Ta(e, t, n, r))) {
            ru(n, e, r, tu()), al(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nu(e),
            o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (rl(e)) ol(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s ? ((o.next = o), Ma(t)) : ((o.next = s.next), (s.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = Ta(e, t, o, r)) && (ru(n, e, r, (o = tu())), al(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vi || (null !== t && t === vi);
        }
        function ol(e, t) {
          bi = hi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function al(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), ht(e, n);
          }
        }
        var il = {
            readContext: Pa,
            useCallback: Si,
            useContext: Si,
            useEffect: Si,
            useImperativeHandle: Si,
            useInsertionEffect: Si,
            useLayoutEffect: Si,
            useMemo: Si,
            useReducer: Si,
            useRef: Si,
            useState: Si,
            useDebugValue: Si,
            useDeferredValue: Si,
            useTransition: Si,
            useMutableSource: Si,
            useSyncExternalStore: Si,
            useId: Si,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Pa,
            useCallback: function (e, t) {
              return (Pi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Pa,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                ji(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return ji(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return ji(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Pi();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = Pi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Pi().memoizedState = e);
            },
            useState: Fi,
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return (Pi().memoizedState = e);
            },
            useTransition: function () {
              var e = Fi(!1),
                t = e[0];
              return (e = Ji.bind(null, e[1])), (Pi().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vi,
                o = Pi();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === As)) throw Error(a(349));
                0 !== (30 & mi) || Ni(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Hi(zi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Di(9, Ri.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Pi(),
                t = As.identifierPrefix;
              if (aa) {
                var n = Zo;
                (t = ':' + t + 'R' + (n = (Yo & ~(1 << (32 - it(Yo) - 1))).toString(32) + n)),
                  0 < (n = xi++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = wi++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Pa,
            useCallback: Xi,
            useContext: Pa,
            useEffect: Wi,
            useImperativeHandle: Gi,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Yi,
            useReducer: Ti,
            useRef: Vi,
            useState: function () {
              return Ti(Mi);
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return Zi(Ei(), yi.memoizedState, e);
            },
            useTransition: function () {
              return [Ti(Mi)[0], Ei().memoizedState];
            },
            useMutableSource: Ii,
            useSyncExternalStore: Li,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Pa,
            useCallback: Xi,
            useContext: Pa,
            useEffect: Wi,
            useImperativeHandle: Gi,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Yi,
            useReducer: Ai,
            useRef: Vi,
            useState: function () {
              return Ai(Mi);
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              var t = Ei();
              return null === yi ? (t.memoizedState = e) : Zi(t, yi.memoizedState, e);
            },
            useTransition: function () {
              return [Ai(Mi)[0], Ei().memoizedState];
            },
            useMutableSource: Ii,
            useSyncExternalStore: Li,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += j(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = '\nError generating stack: ' + a.message + '\n' + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = 'function' === typeof WeakMap ? WeakMap : Map;
        function ml(e, t, n) {
          ((n = Ra(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $s || (($s = !0), (qs = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = Ra(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  'function' !== typeof r && (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
              }),
            n
          );
        }
        function yl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Pu.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function hl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ra(-1, 1)).tag = 2), za(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Za(t, null, n, r) : Ya(t, e.child, n, r);
        }
        function Sl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            _a(t, o),
            (r = Ci(e, t, n, r, a, o)),
            (n = _i()),
            null === e || xl
              ? (aa && n && ta(t), (t.flags |= 1), wl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $l(e, t, o))
          );
        }
        function kl(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return 'function' !== typeof a ||
              Nu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zu(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Cl(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref)
              return $l(e, t, o);
          }
          return (t.flags |= 1), ((e = Ru(a, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function Cl(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (sr(a, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), $l(e, t, o);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return El(e, t, n, r, o);
        }
        function _l(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                Eo(Rs, Ns),
                (Ns |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  Eo(Rs, Ns),
                  (Ns |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== a ? a.baseLanes : n),
                Eo(Rs, Ns),
                (Ns |= r);
            }
          else
            null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
              Eo(Rs, Ns),
              (Ns |= r);
          return wl(e, t, o, n), t.child;
        }
        function Pl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function El(e, t, n, r, o) {
          var a = No(n) ? Io : To.current;
          return (
            (a = Lo(t, a)),
            _a(t, o),
            (n = Ci(e, t, n, r, a, o)),
            (r = _i()),
            null === e || xl
              ? (aa && r && ta(t), (t.flags |= 1), wl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $l(e, t, o))
          );
        }
        function Ml(e, t, n, r, o) {
          if (No(n)) {
            var a = !0;
            Oo(t);
          } else a = !1;
          if ((_a(t, o), null === t.stateNode)) Wl(e, t), Wa(t, n, r), qa(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            'object' === typeof u && null !== u
              ? (u = Pa(u))
              : (u = Lo(t, (u = No(n) ? Io : To.current)));
            var c = n.getDerivedStateFromProps,
              f = 'function' === typeof c || 'function' === typeof i.getSnapshotBeforeUpdate;
            f ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && $a(t, i, r, u)),
              (Ia = !1);
            var d = t.memoizedState;
            (i.state = d),
              Fa(t, r, i, o),
              (s = t.memoizedState),
              l !== r || d !== s || Ao.current || Ia
                ? ('function' === typeof c && (ja(t, n, c, r), (s = t.memoizedState)),
                  (l = Ia || Ha(t, n, l, r, d, s, u))
                    ? (f ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount && i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount && (t.flags |= 4194308))
                    : ('function' === typeof i.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ('function' === typeof i.componentDidMount && (t.flags |= 4194308), (r = !1));
          } else {
            (i = t.stateNode),
              Na(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : ga(t.type, l)),
              (i.props = u),
              (f = t.pendingProps),
              (d = i.context),
              'object' === typeof (s = n.contextType) && null !== s
                ? (s = Pa(s))
                : (s = Lo(t, (s = No(n) ? Io : To.current)));
            var p = n.getDerivedStateFromProps;
            (c = 'function' === typeof p || 'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== s) && $a(t, i, r, s)),
              (Ia = !1),
              (d = t.memoizedState),
              (i.state = d),
              Fa(t, r, i, o);
            var m = t.memoizedState;
            l !== f || d !== m || Ao.current || Ia
              ? ('function' === typeof p && (ja(t, n, p, r), (m = t.memoizedState)),
                (u = Ia || Ha(t, n, u, r, d, m, s) || !1)
                  ? (c ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, m, s),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, m, s)),
                    'function' === typeof i.componentDidUpdate && (t.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (i.props = r),
                (i.state = m),
                (i.context = s),
                (r = u))
              : ('function' !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Tl(e, t, n, r, a, o);
        }
        function Tl(e, t, n, r, o, a) {
          Pl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Fo(t, n, !1), $l(e, t, a);
          (r = t.stateNode), (bl.current = t);
          var l = i && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Ya(t, e.child, null, a)), (t.child = Ya(t, null, l, a)))
              : wl(e, t, l, a),
            (t.memoizedState = r.state),
            o && Fo(t, n, !0),
            t.child
          );
        }
        function Al(e) {
          var t = e.stateNode;
          t.pendingContext
            ? zo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && zo(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function Il(e, t, n, r, o) {
          return ma(), va(o), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Ll,
          Nl,
          Rl,
          zl,
          Bl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ol(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fl(e, t, n) {
          var r,
            o = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Eo(si, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (s = { mode: 'hidden', children: s }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Ou(s, o, 0, null)),
                      (e = Bu(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Ol(n)),
                      (t.memoizedState = Bl),
                      e)
                    : Dl(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Vl(e, t, l, (r = fl(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (o = t.mode),
                    (r = Ou({ mode: 'visible', children: r.children }, o, 0, null)),
                    ((i = Bu(i, o, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ya(t, e.child, null, l),
                    (t.child.memoizedState = Ol(l)),
                    (t.memoizedState = Bl),
                    i);
              if (0 === (1 & t.mode)) return Vl(e, t, l, null);
              if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset)) var s = r.dgst;
                return (r = s), Vl(e, t, l, (r = fl((i = Error(a(419))), r, void 0)));
              }
              if (((s = 0 !== (l & e.childLanes)), xl || s)) {
                if (null !== (r = As)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Aa(e, o), ru(r, e, o, -1));
                }
                return yu(), Vl(e, t, l, (r = fl(Error(a(421)))));
              }
              return '$?' === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Mu.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = uo(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Go[Ko++] = Yo),
                    (Go[Ko++] = Zo),
                    (Go[Ko++] = Xo),
                    (Yo = e.id),
                    (Zo = e.overflow),
                    (Xo = t)),
                  (t = Dl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, o, r, i, n);
          if (l) {
            (l = o.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: 'hidden', children: o.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((o = t.child).childLanes = 0), (o.pendingProps = u), (t.deletions = null))
                : ((o = Ru(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r ? (l = Ru(r, l)) : ((l = Bu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Ol(n)
                  : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Bl),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Ru(l, { mode: 'visible', children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Dl(e, t) {
          return (
            ((t = Ou({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Vl(e, t, n, r) {
          return (
            null !== r && va(r),
            Ya(t, e.child, null, n),
            ((e = Dl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function jl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ca(e.return, t, n);
        }
        function Ul(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Hl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && jl(e, n, t);
                else if (19 === e.tag) jl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Eo(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case 'forwards':
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (o = n), (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Ul(t, !1, o, n, a);
                break;
              case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ui(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Ul(t, !0, n, null, a);
                break;
              case 'together':
                Ul(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Os |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Ru((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((n = n.sibling = Ru(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function ql(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Gl(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ql(t), null;
            case 1:
            case 17:
              return No(t.type) && Ro(), Ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Po(Ao),
                Po(To),
                fi(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (da(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== ia && (lu(ia), (ia = null)))),
                Nl(e, t),
                Ql(t),
                null
              );
            case 5:
              li(t);
              var o = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Rl(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Ql(t), null;
                }
                if (((e = ri(ei.current)), da(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (((r[po] = t), (r[mo] = i), (e = 0 !== (1 & t.mode)), n)) {
                    case 'dialog':
                      Dr('cancel', r), Dr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Dr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (o = 0; o < zr.length; o++) Dr(zr[o], r);
                      break;
                    case 'source':
                      Dr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Dr('error', r), Dr('load', r);
                      break;
                    case 'details':
                      Dr('toggle', r);
                      break;
                    case 'input':
                      X(r, i), Dr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!i.multiple }), Dr('invalid', r);
                      break;
                    case 'textarea':
                      oe(r, i), Dr('invalid', r);
                  }
                  for (var s in (he(n, i), (o = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      'children' === s
                        ? 'string' === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning && Zr(r.textContent, u, e),
                            (o = ['children', u]))
                          : 'number' === typeof u &&
                            r.textContent !== '' + u &&
                            (!0 !== i.suppressHydrationWarning && Zr(r.textContent, u, e),
                            (o = ['children', '' + u]))
                        : l.hasOwnProperty(s) && null != u && 'onScroll' === s && Dr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      q(r), J(r, i, !0);
                      break;
                    case 'textarea':
                      q(r), ie(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === o.nodeType ? o : o.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = le(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = s.createElement('div')).innerHTML = '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          'select' === n &&
                            ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[po] = t),
                    (e[mo] = r),
                    Ll(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case 'dialog':
                        Dr('cancel', e), Dr('close', e), (o = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Dr('load', e), (o = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (o = 0; o < zr.length; o++) Dr(zr[o], e);
                        o = r;
                        break;
                      case 'source':
                        Dr('error', e), (o = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Dr('error', e), Dr('load', e), (o = r);
                        break;
                      case 'details':
                        Dr('toggle', e), (o = r);
                        break;
                      case 'input':
                        X(e, r), (o = K(e, r)), Dr('invalid', e);
                        break;
                      case 'option':
                      default:
                        o = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = O({}, r, { value: void 0 })),
                          Dr('invalid', e);
                        break;
                      case 'textarea':
                        oe(e, r), (o = re(e, r)), Dr('invalid', e);
                    }
                    for (i in (he(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        'style' === i
                          ? ye(e, c)
                          : 'dangerouslySetInnerHTML' === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : 'children' === i
                          ? 'string' === typeof c
                            ? ('textarea' !== n || '' !== c) && de(e, c)
                            : 'number' === typeof c && de(e, '' + c)
                          : 'suppressContentEditableWarning' !== i &&
                            'suppressHydrationWarning' !== i &&
                            'autoFocus' !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && 'onScroll' === i && Dr('scroll', e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case 'input':
                        q(e), J(e, r, !1);
                        break;
                      case 'textarea':
                        q(e), ie(e);
                        break;
                      case 'option':
                        null != r.value && e.setAttribute('value', '' + W(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof o.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ql(t), null;
            case 6:
              if (e && null != t.stateNode) zl(e, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode) throw Error(a(166));
                if (((n = ri(ni.current)), ri(ei.current), da(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t),
                    (t.stateNode = r);
              }
              return Ql(t), null;
            case 13:
              if (
                (Po(si),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (aa && null !== oa && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  pa(), ma(), (t.flags |= 98560), (i = !1);
                else if (((i = da(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                      throw Error(a(317));
                    i[po] = t;
                  } else ma(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  Ql(t), (i = !1);
                } else null !== ia && (lu(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current) ? 0 === zs && (zs = 3) : yu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ql(t),
                  null);
            case 4:
              return ai(), Nl(e, t), null === e && Ur(t.stateNode.containerInfo), Ql(t), null;
            case 10:
              return ka(t.type._context), Ql(t), null;
            case 19:
              if ((Po(si), null === (i = t.memoizedState))) return Ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) ql(i, !1);
                else {
                  if (0 !== zs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ui(e))) {
                        for (
                          t.flags |= 128,
                            ql(i, !1),
                            null !== (r = s.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return Eo(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ye() > Hs &&
                    ((t.flags |= 128), (r = !0), ql(i, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      ql(i, !0),
                      null === i.tail && 'hidden' === i.tailMode && !s.alternate && !aa)
                    )
                      return Ql(t), null;
                  } else
                    2 * Ye() - i.renderingStartTime > Hs &&
                      1073741824 !== n &&
                      ((t.flags |= 128), (r = !0), ql(i, !1), (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s), (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = si.current),
                  Eo(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ql(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ns) && (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Kl(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                No(t.type) && Ro(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                ai(),
                Po(Ao),
                Po(To),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if ((Po(si), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(a(340));
                ma();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return Po(si), null;
            case 4:
              return ai(), null;
            case 10:
              return ka(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ll = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Nl = function () {}),
          (Rl = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ri(ei.current);
              var a,
                i = null;
              switch (n) {
                case 'input':
                  (o = K(e, o)), (r = K(e, r)), (i = []);
                  break;
                case 'select':
                  (o = O({}, o, { value: void 0 })), (r = O({}, r, { value: void 0 })), (i = []);
                  break;
                case 'textarea':
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  'function' !== typeof o.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (he(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ('style' === c) {
                    var s = o[c];
                    for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ('style' === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ''));
                      for (a in u)
                        u.hasOwnProperty(a) && s[a] !== u[a] && (n || (n = {}), (n[a] = u[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : 'children' === c
                      ? ('string' !== typeof u && 'number' !== typeof u) ||
                        (i = i || []).push(c, '' + u)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && 'onScroll' === c && Dr('scroll', e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push('style', n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (zl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xl = !1,
          Yl = !1,
          Zl = 'function' === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                _u(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            _u(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && ts(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function os(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po], delete t[mo], delete t[yo], delete t[go], delete t[ho]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; ) us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; ) cs(e, t, n), (e = e.sibling);
        }
        var fs = null,
          ds = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) ms(e, t, n), (n = n.sibling);
        }
        function ms(e, t, n) {
          if (at && 'function' === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Yl || es(n, t);
            case 6:
              var r = fs,
                o = ds;
              (fs = null),
                ps(e, t, n),
                (ds = o),
                null !== (fs = r) &&
                  (ds
                    ? ((e = fs),
                      (n = n.stateNode),
                      8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                    : fs.removeChild(n.stateNode));
              break;
            case 18:
              null !== fs &&
                (ds
                  ? ((e = fs),
                    (n = n.stateNode),
                    8 === e.nodeType ? so(e.parentNode, n) : 1 === e.nodeType && so(e, n),
                    Ut(e))
                  : so(fs, n.stateNode));
              break;
            case 4:
              (r = fs),
                (o = ds),
                (fs = n.stateNode.containerInfo),
                (ds = !0),
                ps(e, t, n),
                (fs = r),
                (ds = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Yl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && ts(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (!Yl && (es(n, t), 'function' === typeof (r = n.stateNode).componentWillUnmount))
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  _u(n, t, l);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yl = (r = Yl) || null !== n.memoizedState), ps(e, t, n), (Yl = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function vs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zl()),
              t.forEach(function (t) {
                var r = Tu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ys(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (fs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (fs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === fs) throw Error(a(160));
                ms(i, l, o), (fs = null), (ds = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                _u(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ys(t, e), hs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), os(3, e);
                } catch (y) {
                  _u(e, e.return, y);
                }
                try {
                  rs(5, e, e.return);
                } catch (y) {
                  _u(e, e.return, y);
                }
              }
              break;
            case 1:
              ys(t, e), hs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if ((ys(t, e), hs(e), 512 & r && null !== n && es(n, n.return), 32 & e.flags)) {
                var o = e.stateNode;
                try {
                  de(o, '');
                } catch (y) {
                  _u(e, e.return, y);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    'input' === s && 'radio' === i.type && null != i.name && Y(o, i), be(s, l);
                    var c = be(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1];
                      'style' === f
                        ? ye(o, d)
                        : 'dangerouslySetInnerHTML' === f
                        ? fe(o, d)
                        : 'children' === f
                        ? de(o, d)
                        : b(o, f, d, c);
                    }
                    switch (s) {
                      case 'input':
                        Z(o, i);
                        break;
                      case 'textarea':
                        ae(o, i);
                        break;
                      case 'select':
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var m = i.value;
                        null != m
                          ? ne(o, !!i.multiple, m, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : '', !1));
                    }
                    o[mo] = i;
                  } catch (y) {
                    _u(e, e.return, y);
                  }
              }
              break;
            case 6:
              if ((ys(t, e), hs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (y) {
                  _u(e, e.return, y);
                }
              }
              break;
            case 3:
              if ((ys(t, e), hs(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  Ut(t.containerInfo);
                } catch (y) {
                  _u(e, e.return, y);
                }
              break;
            case 4:
            default:
              ys(t, e), hs(e);
              break;
            case 13:
              ys(t, e),
                hs(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate && null !== o.alternate.memoizedState) ||
                    (Us = Ye())),
                4 & r && vs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Yl = (c = Yl) || f), ys(t, e), (Yl = c)) : ys(t, e),
                hs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Jl = e, f = e.child; null !== f; ) {
                    for (d = Jl = f; null !== Jl; ) {
                      switch (((m = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var v = p.stateNode;
                          if ('function' === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (y) {
                              _u(r, n, y);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Ss(d);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Jl = m)) : Ss(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (o = d.stateNode),
                          c
                            ? 'function' === typeof (i = o.style).setProperty
                              ? i.setProperty('display', 'none', 'important')
                              : (i.display = 'none')
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (s.style.display = ve('display', l)));
                      } catch (y) {
                        _u(e, e.return, y);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? '' : d.memoizedProps;
                      } catch (y) {
                        _u(e, e.return, y);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
                }
              }
              break;
            case 19:
              ys(t, e), hs(e), 4 & r && vs(e);
            case 21:
          }
        }
        function hs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (de(o, ''), (r.flags &= -33)), cs(e, ss(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              _u(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Jl = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var o = Jl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Xl;
              if (!i) {
                var l = o.alternate,
                  s = (null !== l && null !== l.memoizedState) || Yl;
                l = Xl;
                var u = Yl;
                if (((Xl = i), (Yl = s) && !u))
                  for (Jl = o; null !== Jl; )
                    (s = (i = Jl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(o)
                        : null !== s
                        ? ((s.return = i), (Jl = s))
                        : ks(o);
                for (; null !== a; ) (Jl = a), xs(a, t, n), (a = a.sibling);
                (Jl = o), (Xl = l), (Yl = u);
              }
              ws(e);
            } else 0 !== (8772 & o.subtreeFlags) && null !== a ? ((a.return = o), (Jl = a)) : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yl || os(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yl)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ga(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Da(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Da(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus();
                            break;
                          case 'img':
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ut(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Yl || (512 & t.flags && as(t));
              } catch (p) {
                _u(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    os(4, t);
                  } catch (s) {
                    _u(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      _u(t, o, s);
                    }
                  }
                  var a = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    _u(t, a, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    _u(t, i, s);
                  }
              }
            } catch (s) {
              _u(t, t.return, s);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var Cs,
          _s = Math.ceil,
          Ps = x.ReactCurrentDispatcher,
          Es = x.ReactCurrentOwner,
          Ms = x.ReactCurrentBatchConfig,
          Ts = 0,
          As = null,
          Is = null,
          Ls = 0,
          Ns = 0,
          Rs = _o(0),
          zs = 0,
          Bs = null,
          Os = 0,
          Fs = 0,
          Ds = 0,
          Vs = null,
          js = null,
          Us = 0,
          Hs = 1 / 0,
          Ws = null,
          $s = !1,
          qs = null,
          Qs = null,
          Gs = !1,
          Ks = null,
          Xs = 0,
          Ys = 0,
          Zs = null,
          Js = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ts) ? Ye() : -1 !== Js ? Js : (Js = Ye());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ts) && 0 !== Ls
            ? Ls & -Ls
            : null !== ya.transition
            ? (0 === eu && (eu = vt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Ys) throw ((Ys = 0), (Zs = null), Error(a(185)));
          gt(e, n, r),
            (0 !== (2 & Ts) && e === As) ||
              (e === As && (0 === (2 & Ts) && (Fs |= n), 4 === zs && su(e, Ls)),
              ou(e, r),
              1 === n && 0 === Ts && 0 === (1 & t.mode) && ((Hs = Ye() + 500), Vo && Ho()));
        }
        function ou(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                s = o[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = dt(e, e === As ? Ls : 0);
          if (0 === r) null !== n && Ge(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Vo = !0), Uo(e);
                  })(uu.bind(null, e))
                : Uo(uu.bind(null, e)),
                io(function () {
                  0 === (6 & Ts) && Ho();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Au(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (eu = 0), 0 !== (6 & Ts))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = dt(e, e === As ? Ls : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var o = Ts;
            Ts |= 2;
            var i = vu();
            for ((As === e && Ls === t) || ((Ws = null), (Hs = Ye() + 500), pu(e, t)); ; )
              try {
                bu();
                break;
              } catch (s) {
                mu(e, s);
              }
            Sa(),
              (Ps.current = i),
              (Ts = o),
              null !== Is ? (t = 0) : ((As = null), (Ls = 0), (t = zs));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (o = mt(e)) && ((r = o), (t = iu(e, o))), 1 === t))
              throw ((n = Bs), pu(e, 0), su(e, r), ou(e, Ye()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!lr(a(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = gu(e, r)) && 0 !== (i = mt(e)) && ((r = i), (t = iu(e, i))), 1 === t))
              )
                throw ((n = Bs), pu(e, 0), su(e, r), ou(e, Ye()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  Su(e, js, Ws);
                  break;
                case 3:
                  if ((su(e, r), (130023424 & r) === r && 10 < (t = Us + 500 - Ye()))) {
                    if (0 !== dt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(Su.bind(null, e, js, Ws), t);
                    break;
                  }
                  Su(e, js, Ws);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * _s(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(Su.bind(null, e, js, Ws), r);
                    break;
                  }
                  Su(e, js, Ws);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ou(e, Ye()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Vs;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = js), (js = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === js ? (js = e) : js.push.apply(js, e);
        }
        function su(e, t) {
          for (
            t &= ~Ds, t &= ~Fs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ts)) throw Error(a(327));
          ku();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ou(e, Ye()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Bs), pu(e, 0), su(e, t), ou(e, Ye()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, js, Ws),
            ou(e, Ye()),
            null
          );
        }
        function cu(e, t) {
          var n = Ts;
          Ts |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ts = n) && ((Hs = Ye() + 500), Vo && Ho());
          }
        }
        function fu(e) {
          null !== Ks && 0 === Ks.tag && 0 === (6 & Ts) && ku();
          var t = Ts;
          Ts |= 1;
          var n = Ms.transition,
            r = bt;
          try {
            if (((Ms.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ms.transition = n), 0 === (6 & (Ts = t)) && Ho();
          }
        }
        function du() {
          (Ns = Rs.current), Po(Rs);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Is))
            for (n = Is.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && Ro();
                  break;
                case 3:
                  ai(), Po(Ao), Po(To), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Po(si);
                  break;
                case 10:
                  ka(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((As = e),
            (Is = e = Ru(e.current, null)),
            (Ls = Ns = t),
            (zs = 0),
            (Bs = null),
            (Ds = Fs = Os = 0),
            (js = Vs = null),
            null !== Ea)
          ) {
            for (t = 0; t < Ea.length; t++)
              if (null !== (r = (n = Ea[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            Ea = null;
          }
          return e;
        }
        function mu(e, t) {
          for (;;) {
            var n = Is;
            try {
              if ((Sa(), (di.current = il), hi)) {
                for (var r = vi.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                hi = !1;
              }
              if (
                ((mi = 0),
                (gi = yi = vi = null),
                (bi = !1),
                (xi = 0),
                (Es.current = null),
                null === n || null === n.return)
              ) {
                (zs = 1), (Bs = t), (Is = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ls),
                  (s.flags |= 32768),
                  null !== u && 'object' === typeof u && 'function' === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var m = gl(l);
                  if (null !== m) {
                    (m.flags &= -257), hl(m, l, s, 0, t), 1 & m.mode && yl(i, c, t), (u = c);
                    var v = (t = m).updateQueue;
                    if (null === v) {
                      var y = new Set();
                      y.add(u), (t.updateQueue = y);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    yl(i, c, t), yu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (aa && 1 & s.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256), hl(g, l, s, 0, t), va(cl(u, s));
                    break e;
                  }
                }
                (i = u = cl(u, s)),
                  4 !== zs && (zs = 2),
                  null === Vs ? (Vs = [i]) : Vs.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536), (t &= -t), (i.lanes |= t), Oa(i, ml(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var h = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ('function' === typeof h.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === Qs || !Qs.has(b))))
                      ) {
                        (i.flags |= 65536), (t &= -t), (i.lanes |= t), Oa(i, vl(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(n);
            } catch (x) {
              (t = x), Is === n && null !== n && (Is = n = n.return);
              continue;
            }
            break;
          }
        }
        function vu() {
          var e = Ps.current;
          return (Ps.current = il), null === e ? il : e;
        }
        function yu() {
          (0 !== zs && 3 !== zs && 2 !== zs) || (zs = 4),
            null === As || (0 === (268435455 & Os) && 0 === (268435455 & Fs)) || su(As, Ls);
        }
        function gu(e, t) {
          var n = Ts;
          Ts |= 2;
          var r = vu();
          for ((As === e && Ls === t) || ((Ws = null), pu(e, t)); ; )
            try {
              hu();
              break;
            } catch (o) {
              mu(e, o);
            }
          if ((Sa(), (Ts = n), (Ps.current = r), null !== Is)) throw Error(a(261));
          return (As = null), (Ls = 0), zs;
        }
        function hu() {
          for (; null !== Is; ) xu(Is);
        }
        function bu() {
          for (; null !== Is && !Ke(); ) xu(Is);
        }
        function xu(e) {
          var t = Cs(e.alternate, e, Ns);
          (e.memoizedProps = e.pendingProps), null === t ? wu(e) : (Is = t), (Es.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Gl(n, t, Ns))) return void (Is = n);
            } else {
              if (null !== (n = Kl(n, t))) return (n.flags &= 32767), void (Is = n);
              if (null === e) return (zs = 6), void (Is = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Is = t);
            Is = t = e;
          } while (null !== t);
          0 === zs && (zs = 5);
        }
        function Su(e, t, n) {
          var r = bt,
            o = Ms.transition;
          try {
            (Ms.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Ks);
                if (0 !== (6 & Ts)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === As && ((Is = As = null), (Ls = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Gs ||
                    ((Gs = !0),
                    Au(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ms.transition), (Ms.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Ts;
                  (Ts |= 4),
                    (Es.current = null),
                    (function (e, t) {
                      if (((eo = Wt), pr((e = dr())))) {
                        if ('selectionStart' in e)
                          var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window)
                                .getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  d !== n || (0 !== o && 3 !== d.nodeType) || (s = l + o),
                                    d !== i || (0 !== r && 3 !== d.nodeType) || (u = l + r),
                                    3 === d.nodeType && (l += d.nodeValue.length),
                                    null !== (m = d.firstChild);

                                )
                                  (p = d), (d = m);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === o && (s = l),
                                    p === i && ++f === r && (u = l),
                                    null !== (m = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = m;
                              }
                              n = -1 === s || -1 === u ? null : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n }, Wt = !1, Jl = t;
                        null !== Jl;

                      )
                        if (((e = (t = Jl).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var y = v.memoizedProps,
                                        g = v.memoizedState,
                                        h = t.stateNode,
                                        b = h.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? y : ga(t.type, y),
                                          g
                                        );
                                      h.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = '')
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              _u(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (v = ns), (ns = !1);
                    })(e, n),
                    gs(n, e),
                    mr(to),
                    (Wt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bs(n, e, o),
                    Xe(),
                    (Ts = s),
                    (bt = l),
                    (Ms.transition = i);
                } else e.current = n;
                if (
                  (Gs && ((Gs = !1), (Ks = e), (Xs = o)),
                  (i = e.pendingLanes),
                  0 === i && (Qs = null),
                  (function (e) {
                    if (at && 'function' === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(n.stateNode),
                  ou(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
                if ($s) throw (($s = !1), (e = qs), (qs = null), e);
                0 !== (1 & Xs) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i) ? (e === Zs ? Ys++ : ((Ys = 0), (Zs = e))) : (Ys = 0),
                  Ho();
              })(e, t, n, r);
          } finally {
            (Ms.transition = o), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Ks) {
            var e = xt(Xs),
              t = Ms.transition,
              n = bt;
            try {
              if (((Ms.transition = null), (bt = 16 > e ? 16 : e), null === Ks)) var r = !1;
              else {
                if (((e = Ks), (Ks = null), (Xs = 0), 0 !== (6 & Ts))) throw Error(a(331));
                var o = Ts;
                for (Ts |= 4, Jl = e.current; null !== Jl; ) {
                  var i = Jl,
                    l = i.child;
                  if (0 !== (16 & Jl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jl = c; null !== Jl; ) {
                          var f = Jl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jl = d);
                          else
                            for (; null !== Jl; ) {
                              var p = (f = Jl).sibling,
                                m = f.return;
                              if ((is(f), f === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Jl = p);
                                break;
                              }
                              Jl = m;
                            }
                        }
                      }
                      var v = i.alternate;
                      if (null !== v) {
                        var y = v.child;
                        if (null !== y) {
                          v.child = null;
                          do {
                            var g = y.sibling;
                            (y.sibling = null), (y = g);
                          } while (null !== y);
                        }
                      }
                      Jl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l) (l.return = i), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (i = Jl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var h = i.sibling;
                      if (null !== h) {
                        (h.return = i.return), (Jl = h);
                        break e;
                      }
                      Jl = i.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var x = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x) (x.return = l), (Jl = x);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (s = Jl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              os(9, s);
                          }
                        } catch (S) {
                          _u(s, s.return, S);
                        }
                      if (s === l) {
                        Jl = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Jl = w);
                        break e;
                      }
                      Jl = s.return;
                    }
                }
                if (((Ts = o), Ho(), at && 'function' === typeof at.onPostCommitFiberRoot))
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ms.transition = t);
            }
          }
          return !1;
        }
        function Cu(e, t, n) {
          (e = za(e, (t = ml(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (gt(e, 1, t), ou(e, t));
        }
        function _u(e, t, n) {
          if (3 === e.tag) Cu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Cu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch && (null === Qs || !Qs.has(r)))
                ) {
                  (t = za(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (gt(t, 1, e), ou(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Pu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            As === e &&
              (Ls & n) === n &&
              (4 === zs || (3 === zs && (130023424 & Ls) === Ls && 500 > Ye() - Us)
                ? pu(e, 0)
                : (Ds |= n)),
            ou(e, t);
        }
        function Eu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Aa(e, t)) && (gt(e, t, n), ou(e, n));
        }
        function Mu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Eu(e, n);
        }
        function Tu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Eu(e, n);
        }
        function Au(e, t) {
          return Qe(e, t);
        }
        function Iu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, t, n, r) {
          return new Iu(e, t, n, r);
        }
        function Nu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ru(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zu(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), 'function' === typeof e)) Nu(e) && (l = 1);
          else if ('string' === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Bu(n.children, o, i, t);
              case C:
                (l = 8), (o |= 8);
                break;
              case _:
                return ((e = Lu(12, n, t, 2 | o)).elementType = _), (e.lanes = i), e;
              case T:
                return ((e = Lu(13, n, t, o)).elementType = T), (e.lanes = i), e;
              case A:
                return ((e = Lu(19, n, t, o)).elementType = A), (e.lanes = i), e;
              case N:
                return Ou(n, o, i, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case E:
                      l = 9;
                      break e;
                    case M:
                      l = 11;
                      break e;
                    case I:
                      l = 14;
                      break e;
                    case L:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ''));
            }
          return ((t = Lu(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t;
        }
        function Bu(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e;
        }
        function Ou(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = N),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e;
        }
        function Du(e, t, n) {
          return (
            ((t = Lu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Vu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = yt(0)),
            (this.expirationTimes = yt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = yt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function ju(e, t, n, r, o, a, i, l, s) {
          return (
            (e = new Vu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Lu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            La(a),
            e
          );
        }
        function Uu(e) {
          if (!e) return Mo;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (No(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (No(n)) return Bo(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, o, a, i, l, s) {
          return (
            ((e = ju(n, r, !0, e, 0, a, 0, l, s)).context = Uu(null)),
            (n = e.current),
            ((a = Ra((r = tu()), (o = nu(n)))).callback = void 0 !== t && null !== t ? t : null),
            za(n, a, o),
            (e.current.lanes = o),
            gt(e, o, r),
            ou(e, r),
            e
          );
        }
        function Wu(e, t, n, r) {
          var o = t.current,
            a = tu(),
            i = nu(o);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ra(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = za(o, t, i)) && (ru(e, o, i, a), Ba(e, o, i)),
            i
          );
        }
        function $u(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        Cs = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ao.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Al(t), ma();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        No(t.type) && Oo(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Eo(ha, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Eo(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Fl(e, t, n)
                            : (Eo(si, 1 & si.current),
                              null !== (e = $l(e, t, n)) ? e.sibling : null);
                        Eo(si, 1 & si.current);
                        break;
                      case 19:
                        if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Hl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                          Eo(si, si.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), _l(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var o = Lo(t, To.current);
              _a(t, n), (o = Ci(null, t, r, e, o, n));
              var i = _i();
              return (
                (t.flags |= 1),
                'object' === typeof o &&
                null !== o &&
                'function' === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    No(r) ? ((i = !0), Oo(t)) : (i = !1),
                    (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                    La(t),
                    (o.updater = Ua),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    qa(t, r, e, n),
                    (t = Tl(null, t, r, !0, i, n)))
                  : ((t.tag = 0), aa && i && ta(t), wl(null, t, o, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Nu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === M) return 11;
                        if (e === I) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ga(r, e)),
                  o)
                ) {
                  case 0:
                    t = El(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ml(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Sl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, ga(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                El(e, t, r, (o = t.elementType === r ? o : ga(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ml(e, t, r, (o = t.elementType === r ? o : ga(r, o)), n)
              );
            case 3:
              e: {
                if ((Al(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  Na(e, t),
                  Fa(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Il(e, t, r, n, (o = cl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Il(e, t, r, n, (o = cl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = uo(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Za(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ma(), r === o)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o) ? (l = null) : null !== i && no(r, i) && (t.flags |= 32),
                Pl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return Fl(e, t, n);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ya(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Sl(e, t, r, (o = t.elementType === r ? o : ga(r, o)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  Eo(ha, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !Ao.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ra(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f ? (u.next = u) : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Ca(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag) l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Ca(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                wl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                _a(t, n),
                (r = r((o = Pa(o)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (o = ga((r = t.type), t.pendingProps)), kl(e, t, r, (o = ga(r.type, o)), n);
            case 15:
              return Cl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ga(r, o)),
                Wl(e, t),
                (t.tag = 1),
                No(r) ? ((e = !0), Oo(t)) : (e = !1),
                _a(t, n),
                Wa(t, r, o),
                qa(t, r, o, n),
                Tl(null, t, r, !0, e, n)
              );
            case 19:
              return Hl(e, t, n);
            case 22:
              return _l(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Gu =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Ju() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ('function' === typeof o) {
              var l = o;
              o = function () {
                var e = $u(i);
                l.call(e);
              };
            }
            Wu(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ('function' === typeof r) {
                  var a = r;
                  r = function () {
                    var e = $u(i);
                    a.call(e);
                  };
                }
                var i = Hu(t, r, e, 0, null, !1, 0, '', Ju);
                return (
                  (e._reactRootContainer = i),
                  (e[vo] = i.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  fu(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ('function' === typeof r) {
                var l = r;
                r = function () {
                  var e = $u(s);
                  l.call(e);
                };
              }
              var s = ju(e, 0, !1, null, 0, !1, 0, '', Ju);
              return (
                (e._reactRootContainer = s),
                (e[vo] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                fu(function () {
                  Wu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, o, r);
          return $u(i);
        }
        (Xu.prototype.render = Ku.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Wu(e, t, null, null);
          }),
          (Xu.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fu(function () {
                  Wu(null, e, null, null);
                }),
                  (t[vo] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ct();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Nt.length && 0 !== t && t < Nt[n].priority; n++);
              Nt.splice(n, 0, e), 0 === n && Ot(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (ht(t, 1 | n), ou(t, Ye()), 0 === (6 & Ts) && ((Hs = Ye() + 500), Ho()));
                }
                break;
              case 13:
                fu(function () {
                  var t = Aa(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Aa(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Qu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Aa(e, t);
              if (null !== n) ru(n, e, t, tu());
              Qu(e, t);
            }
          }),
          (Ct = function () {
            return bt;
          }),
          (_t = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((Z(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = So(r);
                      if (!o) throw Error(a(90));
                      Q(r), Z(r, o);
                    }
                  }
                }
                break;
              case 'textarea':
                ae(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Me = cu),
          (Te = fu);
        var tc = { usingClientEntryPoint: !1, Events: [xo, wo, So, Pe, Ee, cu] },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (at = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Yu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: S,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Yu(e)) throw Error(a(299));
            var n = !1,
              r = '',
              o = Gu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = ju(e, 1, !1, null, 0, n, 0, r, o)),
              (e[vo] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Ku(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(',')), Error(a(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Yu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = '',
              l = Gu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[vo] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Xu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (fu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[vo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      250: function (e, t, n) {
        'use strict';
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        'use strict';
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        'use strict';
        var r = n(791),
          o = Symbol.for('react.element'),
          a = Symbol.for('react.fragment'),
          i = Object.prototype.hasOwnProperty,
          l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return { $$typeof: o, type: e, key: u, ref: c, props: a, _owner: l.current };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        'use strict';
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          y = {};
        function g(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = y), (this.updater = n || m);
        }
        function h() {}
        function b(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = y), (this.updater = n || m);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (h.prototype = g.prototype);
        var x = (b.prototype = new h());
        (x.constructor = b), v(x, g.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = '' + t.key), t))
              S.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps) for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
          return { $$typeof: n, type: e, key: i, ref: l, props: a, _owner: k.current };
        }
        function P(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var E = /\/+/g;
        function M(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function T(e, t, o, a, i) {
          var l = typeof e;
          ('undefined' !== l && 'boolean' !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case 'string':
              case 'number':
                s = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = '' === a ? '.' + M(s, 0) : a),
              w(i)
                ? ((o = ''),
                  null != e && (o = e.replace(E, '$&/') + '/'),
                  T(i, t, o, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (P(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (s && s.key === i.key)
                          ? ''
                          : ('' + i.key).replace(E, '$&/') + '/') +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (a = '' === a ? '.' : a + ':'), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + M((l = e[u]), u);
              s += T(l, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += T((l = l.value), t, o, (c = a + M(l, u++)), i);
          else if ('object' === l)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return s;
        }
        function A(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, '', '', function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function I(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          N = { transition: null },
          R = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: N, ReactCurrentOwner: k };
        (t.Children = {
          map: A,
          forEach: function (e, t, n) {
            A(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              A(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              A(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e))
              throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var o = v({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = k.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              o.children = s;
            }
            return { $$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: l };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: I };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = N.transition;
            N.transition = {};
            try {
              e();
            } finally {
              N.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error('act(...) is not supported in production builds of React.');
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      791: function (e, t, n) {
        'use strict';
        e.exports = n(117);
      },
      184: function (e, t, n) {
        'use strict';
        e.exports = n(374);
      },
      813: function (e, t) {
        'use strict';
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > a(s, n))
                u < o && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if ('object' === typeof performance && 'function' === typeof performance.now) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          v = !1,
          y = !1,
          g = 'function' === typeof setTimeout ? setTimeout : null,
          h = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((y = !1), x(e), !v))
            if (null !== r(u)) (v = !0), N(S);
            else {
              var t = r(c);
              null !== t && R(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (v = !1), y && ((y = !1), h(P), (P = -1)), (m = !0);
          var a = p;
          try {
            for (x(n), d = r(u); null !== d && (!(d.expirationTime > n) || (e && !T())); ) {
              var i = d.callback;
              if ('function' === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof l ? (d.callback = l) : d === r(u) && o(u),
                  x(n);
              } else o(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && R(w, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = a), (m = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          C = !1,
          _ = null,
          P = -1,
          E = 5,
          M = -1;
        function T() {
          return !(t.unstable_now() - M < E);
        }
        function A() {
          if (null !== _) {
            var e = t.unstable_now();
            M = e;
            var n = !0;
            try {
              n = _(!0, e);
            } finally {
              n ? k() : ((C = !1), (_ = null));
            }
          } else C = !1;
        }
        if ('function' === typeof b)
          k = function () {
            b(A);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var I = new MessageChannel(),
            L = I.port2;
          (I.port1.onmessage = A),
            (k = function () {
              L.postMessage(null);
            });
        } else
          k = function () {
            g(A, 0);
          };
        function N(e) {
          (_ = e), C || ((C = !0), k());
        }
        function R(e, n) {
          P = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || m || ((v = !0), N(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ('object' === typeof a && null !== a
                ? (a = 'number' === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) && e === r(c) && (y ? (h(P), (P = -1)) : (y = !0), R(w, a - i)))
                : ((e.sortIndex = l), n(u, e), v || m || ((v = !0), N(S))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        'use strict';
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return 'static/js/' + e + '.395e056b.chunk.js';
    }),
    (n.miniCssF = function (e) {}),
    (n.g = (function () {
      if ('object' === typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = 'newton-balls:';
      n.l = function (r, o, a, i) {
        if (e[r]) e[r].push(o);
        else {
          var l, s;
          if (void 0 !== a)
            for (var u = document.getElementsByTagName('script'), c = 0; c < u.length; c++) {
              var f = u[c];
              if (f.getAttribute('src') == r || f.getAttribute('data-webpack') == t + a) {
                l = f;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement('script')).charset = 'utf-8'),
            (l.timeout = 120),
            n.nc && l.setAttribute('nonce', n.nc),
            l.setAttribute('data-webpack', t + a),
            (l.src = r)),
            (e[r] = [o]);
          var d = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var o = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                o &&
                  o.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(d.bind(null, void 0, { type: 'timeout', target: l }), 12e4);
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.p = '/'),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var a = new Promise(function (n, r) {
              o = e[t] = [n, r];
            });
            r.push((o[2] = a));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              function (r) {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ('load' === r.type ? 'missing' : r.type),
                    i = r && r.target && r.target.src;
                  (l.message = 'Loading chunk ' + t + ' failed.\n(' + a + ': ' + i + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = a),
                    (l.request = i),
                    o[1](l);
                }
              },
              'chunk-' + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var o,
            a,
            i = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in l) n.o(l, o) && (n.m[o] = l[o]);
            if (s) s(n);
          }
          for (t && t(r); u < i.length; u++) (a = i[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunknewton_balls = self.webpackChunknewton_balls || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      'use strict';
      var e = n(791),
        t = n(250);
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (; !(s = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
              } catch (c) {
                (u = !0), (o = c);
              } finally {
                try {
                  if (!s && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                } finally {
                  if (u) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' === typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var a = n(47),
        i = n(184),
        l = function (t) {
          var n = t.numPendulums,
            r = t.alpha,
            o = t.bounciness,
            l = t.initialAngle,
            s = (0, e.useRef)(null),
            u = (800 * r + 2 * r * 0) / (n + 2 * r),
            c = (800 - 2 * (u - 0)) / (2 * n),
            f = u - 0 + c,
            d = 2 * c;
          return (
            (0, e.useEffect)(
              function () {
                for (
                  var e = a.Engine.create(),
                    t = s.current,
                    r = a.Render.create({
                      element: t.parentElement,
                      canvas: t,
                      engine: e,
                      options: {
                        width: 800,
                        height: 400,
                        wireframes: !1,
                        background: 'rgb(255, 255, 255)',
                      },
                    }),
                    i = 0;
                  i < n;
                  i++
                ) {
                  var p = f + i * d,
                    m = 0 === i ? p - (u - 0) * Math.sin(l) : p,
                    v = 0 === i ? (u - 0) * Math.cos(l) : u,
                    y = a.Bodies.circle(m, v, c, {
                      restitution: o,
                      friction: 0,
                      frictionAir: 0.001,
                      frictionStatic: 0,
                      slop: 0,
                      render: { fillStyle: 'rgb(63, 181, 255)' },
                    }),
                    g = a.Bodies.rectangle(p, 0, 1, 1, { isStatic: !0, render: { visible: !0 } }),
                    h = a.Constraint.create({
                      bodyA: g,
                      bodyB: y,
                      pointA: { x: 0, y: 0 },
                      pointB: { x: 0, y: 0 },
                      stiffness: 0,
                      damping: 0.1,
                      render: { lineWidth: 2, strokeStyle: 'black' },
                    });
                  a.World.add(e.world, [g, y, h]);
                }
                var b = a.Mouse.create(r.canvas),
                  x = a.MouseConstraint.create(e, {
                    mouse: b,
                    constraint: { stiffness: 0.2, render: { visible: !1 } },
                  });
                a.World.add(e.world, x);
                var w = a.Runner.create();
                return (
                  a.Runner.run(w, e),
                  a.Render.run(r),
                  function () {
                    a.Render.stop(r), a.Runner.stop(w);
                  }
                );
              },
              [c, d, f, u, o, n, l]
            ),
            (0, i.jsx)('canvas', { ref: s })
          );
        };
      var s = function () {
          var t = o((0, e.useState)(10), 2),
            n = t[0],
            r = t[1],
            a = o((0, e.useState)(10), 2),
            s = a[0],
            u = a[1],
            c = o((0, e.useState)(1), 2),
            f = c[0],
            d = c[1],
            p = o((0, e.useState)(0), 2),
            m = p[0],
            v = p[1];
          return (0, i.jsxs)('div', {
            className: 'App',
            children: [
              (0, i.jsxs)('form', {
                className: 'input-form',
                onSubmit: function (e) {
                  e.preventDefault();
                },
                children: [
                  (0, i.jsxs)('label', {
                    children: [
                      'Number of Pendulums:',
                      (0, i.jsx)('input', {
                        type: 'number',
                        value: n,
                        onChange: function (e) {
                          return e.target.value && r(parseInt(e.target.value));
                        },
                      }),
                    ],
                  }),
                  (0, i.jsxs)('label', {
                    children: [
                      'Relative String Length:',
                      (0, i.jsx)('input', {
                        type: 'number',
                        value: s,
                        onChange: function (e) {
                          return e.target.value && u(parseFloat(e.target.value));
                        },
                      }),
                    ],
                  }),
                  (0, i.jsxs)('label', {
                    children: [
                      'Bounciness:',
                      (0, i.jsx)('input', {
                        type: 'number',
                        value: f,
                        onChange: function (e) {
                          return e.target.value && d(parseFloat(e.target.value));
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)('button', {
                onClick: function () {
                  v(Math.PI / 4);
                },
                style: {
                  backgroundColor: '#3fb5ff',
                  color: 'white',
                  padding: '4px 8px',
                  fontSize: '16px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                },
                children: 'Drop First Ball',
              }),
              (0, i.jsx)('br', {}),
              (0, i.jsx)(l, { numPendulums: n, alpha: s, bounciness: f, initialAngle: m }),
            ],
          });
        },
        u = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  o = t.getFCP,
                  a = t.getLCP,
                  i = t.getTTFB;
                n(e), r(e), o(e), a(e), i(e);
              });
        };
      t
        .createRoot(document.getElementById('root'))
        .render((0, i.jsx)(e.StrictMode, { children: (0, i.jsx)(s, {}) })),
        u();
    })();
})();
//# sourceMappingURL=main.0b6896de.js.map
