"use strict";
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function (t, e) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(void 0, function (t, g, u) {
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function e(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? e(Object(r), !0).forEach(function (t) {
            var e, n, i;
            (e = o),
              (i = r[(n = t)]),
              n in e
                ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[n] = i);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
        : e(Object(r)).forEach(function (t) {
            Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return o;
  }
  (g = g && g.hasOwnProperty("default") ? g.default : g),
    (u = u && u.hasOwnProperty("default") ? u.default : u);
  var n = "transitionend";
  function o(t) {
    var e = this,
      n = !1;
    return (
      g(this).one(_.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || _.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var _ = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = g(t).css("transition-duration"),
        n = g(t).css("transition-delay"),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      g(t).trigger(n);
    },
    supportsTransitionEnd: function () {
      return Boolean(n);
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && _.isElement(r)
                ? "element"
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? _.findShadowRoot(t.parentNode)
          : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    },
    jQueryDetection: function () {
      if (void 0 === g)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = g.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  _.jQueryDetection(),
    (g.fn.emulateTransitionEnd = o),
    (g.event.special[_.TRANSITION_END] = {
      bindType: n,
      delegateType: n,
      handle: function (t) {
        if (g(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var r = "alert",
    a = "bs.alert",
    c = "." + a,
    h = g.fn[r],
    f = {
      CLOSE: "close" + c,
      CLOSED: "closed" + c,
      CLICK_DATA_API: "click" + c + ".data-api",
    },
    d = "alert",
    m = "fade",
    p = "show",
    v = (function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (t.dispose = function () {
          g.removeData(this._element, a), (this._element = null);
        }),
        (t._getRootElement = function (t) {
          var e = _.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = g(t).closest("." + d)[0]),
            n
          );
        }),
        (t._triggerCloseEvent = function (t) {
          var e = g.Event(f.CLOSE);
          return g(t).trigger(e), e;
        }),
        (t._removeElement = function (e) {
          var n = this;
          if ((g(e).removeClass(p), g(e).hasClass(m))) {
            var t = _.getTransitionDurationFromElement(e);
            g(e)
              .one(_.TRANSITION_END, function (t) {
                return n._destroyElement(e, t);
              })
              .emulateTransitionEnd(t);
          } else this._destroyElement(e);
        }),
        (t._destroyElement = function (t) {
          g(t).detach().trigger(f.CLOSED).remove();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this),
              e = t.data(a);
            e || ((e = new i(this)), t.data(a, e)), "close" === n && e[n](this);
          });
        }),
        (i._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
        ]),
        i
      );
    })();
  g(document).on(
    f.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    v._handleDismiss(new v())
  ),
    (g.fn[r] = v._jQueryInterface),
    (g.fn[r].Constructor = v),
    (g.fn[r].noConflict = function () {
      return (g.fn[r] = h), v._jQueryInterface;
    });
  var y = "button",
    E = "bs.button",
    C = "." + E,
    b = ".data-api",
    T = g.fn[y],
    S = "active",
    D = "btn",
    I = "focus",
    w = '[data-toggle^="button"]',
    A = '[data-toggle="buttons"]',
    N = '[data-toggle="button"]',
    O = '[data-toggle="buttons"] .btn',
    k = 'input:not([type="hidden"])',
    P = ".active",
    L = ".btn",
    j = {
      CLICK_DATA_API: "click" + C + b,
      FOCUS_BLUR_DATA_API: "focus" + C + b + " blur" + C + b,
      LOAD_DATA_API: "load" + C + b,
    },
    H = (function () {
      function n(t) {
        this._element = t;
      }
      var t = n.prototype;
      return (
        (t.toggle = function () {
          var t = !0,
            e = !0,
            n = g(this._element).closest(A)[0];
          if (n) {
            var i = this._element.querySelector(k);
            if (i) {
              if ("radio" === i.type)
                if (i.checked && this._element.classList.contains(S)) t = !1;
                else {
                  var o = n.querySelector(P);
                  o && g(o).removeClass(S);
                }
              else
                "checkbox" === i.type
                  ? "LABEL" === this._element.tagName &&
                    i.checked === this._element.classList.contains(S) &&
                    (t = !1)
                  : (t = !1);
              t &&
                ((i.checked = !this._element.classList.contains(S)),
                g(i).trigger("change")),
                i.focus(),
                (e = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains(S)
              ),
            t && g(this._element).toggleClass(S));
        }),
        (t.dispose = function () {
          g.removeData(this._element, E), (this._element = null);
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var t = g(this).data(E);
            t || ((t = new n(this)), g(this).data(E, t)),
              "toggle" === e && t[e]();
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
        ]),
        n
      );
    })();
  g(document)
    .on(j.CLICK_DATA_API, w, function (t) {
      var e = t.target;
      if (
        (g(e).hasClass(D) || (e = g(e).closest(L)[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var n = e.querySelector(k);
        if (
          n &&
          (n.hasAttribute("disabled") || n.classList.contains("disabled"))
        )
          return void t.preventDefault();
        H._jQueryInterface.call(g(e), "toggle");
      }
    })
    .on(j.FOCUS_BLUR_DATA_API, w, function (t) {
      var e = g(t.target).closest(L)[0];
      g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
    }),
    g(window).on(j.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll(O)),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector(k);
        o.checked || o.hasAttribute("checked")
          ? i.classList.add(S)
          : i.classList.remove(S);
      }
      for (
        var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length;
        r < s;
        r++
      ) {
        var a = t[r];
        "true" === a.getAttribute("aria-pressed")
          ? a.classList.add(S)
          : a.classList.remove(S);
      }
    }),
    (g.fn[y] = H._jQueryInterface),
    (g.fn[y].Constructor = H),
    (g.fn[y].noConflict = function () {
      return (g.fn[y] = T), H._jQueryInterface;
    });
  var R = "carousel",
    x = "bs.carousel",
    F = "." + x,
    U = ".data-api",
    W = g.fn[R],
    q = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    M = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    K = "next",
    Q = "prev",
    B = "left",
    V = "right",
    Y = {
      SLIDE: "slide" + F,
      SLID: "slid" + F,
      KEYDOWN: "keydown" + F,
      MOUSEENTER: "mouseenter" + F,
      MOUSELEAVE: "mouseleave" + F,
      TOUCHSTART: "touchstart" + F,
      TOUCHMOVE: "touchmove" + F,
      TOUCHEND: "touchend" + F,
      POINTERDOWN: "pointerdown" + F,
      POINTERUP: "pointerup" + F,
      DRAG_START: "dragstart" + F,
      LOAD_DATA_API: "load" + F + U,
      CLICK_DATA_API: "click" + F + U,
    },
    z = "carousel",
    X = "active",
    $ = "slide",
    G = "carousel-item-right",
    J = "carousel-item-left",
    Z = "carousel-item-next",
    tt = "carousel-item-prev",
    et = "pointer-event",
    nt = ".active",
    it = ".active.carousel-item",
    ot = ".carousel-item",
    rt = ".carousel-item img",
    st = ".carousel-item-next, .carousel-item-prev",
    at = ".carousel-indicators",
    lt = "[data-slide], [data-slide-to]",
    ct = '[data-ride="carousel"]',
    ht = { TOUCH: "touch", PEN: "pen" },
    ut = (function () {
      function r(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(at)),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var t = r.prototype;
      return (
        (t.next = function () {
          this._isSliding || this._slide(K);
        }),
        (t.nextWhenVisible = function () {
          !document.hidden &&
            g(this._element).is(":visible") &&
            "hidden" !== g(this._element).css("visibility") &&
            this.next();
        }),
        (t.prev = function () {
          this._isSliding || this._slide(Q);
        }),
        (t.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(st) &&
              (_.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (t.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(it);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              g(this._element).one(Y.SLID, function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = n < t ? K : Q;
              this._slide(i, this._items[t]);
            }
        }),
        (t.dispose = function () {
          g(this._element).off(F),
            g.removeData(this._element, x),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function (t) {
          return (t = l({}, q, {}, t)), _.typeCheckConfig(R, t, M), t;
        }),
        (t._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next();
          }
        }),
        (t._addEventListeners = function () {
          var e = this;
          this._config.keyboard &&
            g(this._element).on(Y.KEYDOWN, function (t) {
              return e._keydown(t);
            }),
            "hover" === this._config.pause &&
              g(this._element)
                .on(Y.MOUSEENTER, function (t) {
                  return e.pause(t);
                })
                .on(Y.MOUSELEAVE, function (t) {
                  return e.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (t._addTouchEventListeners = function () {
          var e = this;
          if (this._touchSupported) {
            var n = function (t) {
                e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()]
                  ? (e.touchStartX = t.originalEvent.clientX)
                  : e._pointerEvent ||
                    (e.touchStartX = t.originalEvent.touches[0].clientX);
              },
              i = function (t) {
                e._pointerEvent &&
                  ht[t.originalEvent.pointerType.toUpperCase()] &&
                  (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                  e._handleSwipe(),
                  "hover" === e._config.pause &&
                    (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    (e.touchTimeout = setTimeout(function (t) {
                      return e.cycle(t);
                    }, 500 + e._config.interval)));
              };
            g(this._element.querySelectorAll(rt)).on(
              Y.DRAG_START,
              function (t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (g(this._element).on(Y.POINTERDOWN, function (t) {
                    return n(t);
                  }),
                  g(this._element).on(Y.POINTERUP, function (t) {
                    return i(t);
                  }),
                  this._element.classList.add(et))
                : (g(this._element).on(Y.TOUCHSTART, function (t) {
                    return n(t);
                  }),
                  g(this._element).on(Y.TOUCHMOVE, function (t) {
                    return (function (t) {
                      t.originalEvent.touches &&
                      1 < t.originalEvent.touches.length
                        ? (e.touchDeltaX = 0)
                        : (e.touchDeltaX =
                            t.originalEvent.touches[0].clientX - e.touchStartX);
                    })(t);
                  }),
                  g(this._element).on(Y.TOUCHEND, function (t) {
                    return i(t);
                  }));
          }
        }),
        (t._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(ot))
                : []),
            this._items.indexOf(t)
          );
        }),
        (t._getItemByDirection = function (t, e) {
          var n = t === K,
            i = t === Q,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var s = (o + (t === Q ? -1 : 1)) % this._items.length;
          return -1 == s ? this._items[this._items.length - 1] : this._items[s];
        }),
        (t._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(this._element.querySelector(it)),
            o = g.Event(Y.SLIDE, {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n,
            });
          return g(this._element).trigger(o), o;
        }),
        (t._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
            g(e).removeClass(X);
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && g(n).addClass(X);
          }
        }),
        (t._slide = function (t, e) {
          var n,
            i,
            o,
            r = this,
            s = this._element.querySelector(it),
            a = this._getItemIndex(s),
            l = e || (s && this._getItemByDirection(t, s)),
            c = this._getItemIndex(l),
            h = Boolean(this._interval);
          if (
            ((o = t === K ? ((n = J), (i = Z), B) : ((n = G), (i = tt), V)),
            l && g(l).hasClass(X))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
            s &&
            l
          ) {
            (this._isSliding = !0),
              h && this.pause(),
              this._setActiveIndicatorElement(l);
            var u = g.Event(Y.SLID, {
              relatedTarget: l,
              direction: o,
              from: a,
              to: c,
            });
            if (g(this._element).hasClass($)) {
              g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
              var f = parseInt(l.getAttribute("data-interval"), 10);
              f
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = f))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var d = _.getTransitionDurationFromElement(s);
              g(s)
                .one(_.TRANSITION_END, function () {
                  g(l)
                    .removeClass(n + " " + i)
                    .addClass(X),
                    g(s).removeClass(X + " " + i + " " + n),
                    (r._isSliding = !1),
                    setTimeout(function () {
                      return g(r._element).trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(d);
            } else
              g(s).removeClass(X),
                g(l).addClass(X),
                (this._isSliding = !1),
                g(this._element).trigger(u);
            h && this.cycle();
          }
        }),
        (r._jQueryInterface = function (i) {
          return this.each(function () {
            var t = g(this).data(x),
              e = l({}, q, {}, g(this).data());
            "object" === _typeof(i) && (e = l({}, e, {}, i));
            var n = "string" == typeof i ? i : e.slide;
            if (
              (t || ((t = new r(this, e)), g(this).data(x, t)),
              "number" == typeof i)
            )
              t.to(i);
            else if ("string" == typeof n) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            } else e.interval && e.ride && (t.pause(), t.cycle());
          });
        }),
        (r._dataApiClickHandler = function (t) {
          var e = _.getSelectorFromElement(this);
          if (e) {
            var n = g(e)[0];
            if (n && g(n).hasClass(z)) {
              var i = l({}, g(n).data(), {}, g(this).data()),
                o = this.getAttribute("data-slide-to");
              o && (i.interval = !1),
                r._jQueryInterface.call(g(n), i),
                o && g(n).data(x).to(o),
                t.preventDefault();
            }
          }
        }),
        s(r, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return q;
            },
          },
        ]),
        r
      );
    })();
  g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler),
    g(window).on(Y.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll(ct)),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = g(t[e]);
        ut._jQueryInterface.call(i, i.data());
      }
    }),
    (g.fn[R] = ut._jQueryInterface),
    (g.fn[R].Constructor = ut),
    (g.fn[R].noConflict = function () {
      return (g.fn[R] = W), ut._jQueryInterface;
    });
  var ft = "collapse",
    dt = "bs.collapse",
    gt = "." + dt,
    _t = g.fn[ft],
    mt = { toggle: !0, parent: "" },
    pt = { toggle: "boolean", parent: "(string|element)" },
    vt = {
      SHOW: "show" + gt,
      SHOWN: "shown" + gt,
      HIDE: "hide" + gt,
      HIDDEN: "hidden" + gt,
      CLICK_DATA_API: "click" + gt + ".data-api",
    },
    yt = "show",
    Et = "collapse",
    Ct = "collapsing",
    bt = "collapsed",
    Tt = "width",
    St = "height",
    Dt = ".show, .collapsing",
    It = '[data-toggle="collapse"]',
    wt = (function () {
      function a(e, t) {
        (this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(It)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (t) {
                return t === e;
              });
          null !== s &&
            0 < a.length &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var t = a.prototype;
      return (
        (t.toggle = function () {
          g(this._element).hasClass(yt) ? this.hide() : this.show();
        }),
        (t.show = function () {
          var t,
            e,
            n = this;
          if (
            !this._isTransitioning &&
            !g(this._element).hasClass(yt) &&
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(this._parent.querySelectorAll(Dt))
                  .filter(function (t) {
                    return "string" == typeof n._config.parent
                      ? t.getAttribute("data-parent") === n._config.parent
                      : t.classList.contains(Et);
                  })).length &&
              (t = null),
            !(
              t &&
              (e = g(t).not(this._selector).data(dt)) &&
              e._isTransitioning
            ))
          ) {
            var i = g.Event(vt.SHOW);
            if ((g(this._element).trigger(i), !i.isDefaultPrevented())) {
              t &&
                (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                e || g(t).data(dt, null));
              var o = this._getDimension();
              g(this._element).removeClass(Et).addClass(Ct),
                (this._element.style[o] = 0),
                this._triggerArray.length &&
                  g(this._triggerArray)
                    .removeClass(bt)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                s = _.getTransitionDurationFromElement(this._element);
              g(this._element)
                .one(_.TRANSITION_END, function () {
                  g(n._element).removeClass(Ct).addClass(Et).addClass(yt),
                    (n._element.style[o] = ""),
                    n.setTransitioning(!1),
                    g(n._element).trigger(vt.SHOWN);
                })
                .emulateTransitionEnd(s),
                (this._element.style[o] = this._element[r] + "px");
            }
          }
        }),
        (t.hide = function () {
          var t = this;
          if (!this._isTransitioning && g(this._element).hasClass(yt)) {
            var e = g.Event(vt.HIDE);
            if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                _.reflow(this._element),
                g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);
              var i = this._triggerArray.length;
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    s = _.getSelectorFromElement(r);
                  if (null !== s)
                    g([].slice.call(document.querySelectorAll(s))).hasClass(
                      yt
                    ) || g(r).addClass(bt).attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var a = _.getTransitionDurationFromElement(this._element);
              g(this._element)
                .one(_.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    g(t._element)
                      .removeClass(Ct)
                      .addClass(Et)
                      .trigger(vt.HIDDEN);
                })
                .emulateTransitionEnd(a);
            }
          }
        }),
        (t.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (t.dispose = function () {
          g.removeData(this._element, dt),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function (t) {
          return (
            ((t = l({}, mt, {}, t)).toggle = Boolean(t.toggle)),
            _.typeCheckConfig(ft, t, pt),
            t
          );
        }),
        (t._getDimension = function () {
          return g(this._element).hasClass(Tt) ? Tt : St;
        }),
        (t._getParent = function () {
          var t,
            n = this;
          _.isElement(this._config.parent)
            ? ((t = this._config.parent),
              void 0 !== this._config.parent.jquery &&
                (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            i = [].slice.call(t.querySelectorAll(e));
          return (
            g(i).each(function (t, e) {
              n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
            }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function (t, e) {
          var n = g(t).hasClass(yt);
          e.length && g(e).toggleClass(bt, !n).attr("aria-expanded", n);
        }),
        (a._getTargetFromElement = function (t) {
          var e = _.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (a._jQueryInterface = function (i) {
          return this.each(function () {
            var t = g(this),
              e = t.data(dt),
              n = l(
                {},
                mt,
                {},
                t.data(),
                {},
                "object" === _typeof(i) && i ? i : {}
              );
            if (
              (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
              e || ((e = new a(this, n)), t.data(dt, e)),
              "string" == typeof i)
            ) {
              if (void 0 === e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        s(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return mt;
            },
          },
        ]),
        a
      );
    })();
  g(document).on(vt.CLICK_DATA_API, It, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = g(this),
      e = _.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    g(i).each(function () {
      var t = g(this),
        e = t.data(dt) ? "toggle" : n.data();
      wt._jQueryInterface.call(t, e);
    });
  }),
    (g.fn[ft] = wt._jQueryInterface),
    (g.fn[ft].Constructor = wt),
    (g.fn[ft].noConflict = function () {
      return (g.fn[ft] = _t), wt._jQueryInterface;
    });
  var At = "dropdown",
    Nt = "bs.dropdown",
    Ot = "." + Nt,
    kt = ".data-api",
    Pt = g.fn[At],
    Lt = new RegExp("38|40|27"),
    jt = {
      HIDE: "hide" + Ot,
      HIDDEN: "hidden" + Ot,
      SHOW: "show" + Ot,
      SHOWN: "shown" + Ot,
      CLICK: "click" + Ot,
      CLICK_DATA_API: "click" + Ot + kt,
      KEYDOWN_DATA_API: "keydown" + Ot + kt,
      KEYUP_DATA_API: "keyup" + Ot + kt,
    },
    Ht = "disabled",
    Rt = "show",
    xt = "dropup",
    Ft = "dropright",
    Ut = "dropleft",
    Wt = "dropdown-menu-right",
    qt = "position-static",
    Mt = '[data-toggle="dropdown"]',
    Kt = ".dropdown form",
    Qt = ".dropdown-menu",
    Bt = ".navbar-nav",
    Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Yt = "top-start",
    zt = "top-end",
    Xt = "bottom-start",
    $t = "bottom-end",
    Gt = "right-start",
    Jt = "left-start",
    Zt = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    te = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    ee = (function () {
      function c(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var t = c.prototype;
      return (
        (t.toggle = function () {
          if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
            var t = g(this._menu).hasClass(Rt);
            c._clearMenus(), t || this.show(!0);
          }
        }),
        (t.show = function (t) {
          if (
            (void 0 === t && (t = !1),
            !(
              this._element.disabled ||
              g(this._element).hasClass(Ht) ||
              g(this._menu).hasClass(Rt)
            ))
          ) {
            var e = { relatedTarget: this._element },
              n = g.Event(jt.SHOW, e),
              i = c._getParentFromElement(this._element);
            if ((g(i).trigger(n), !n.isDefaultPrevented())) {
              if (!this._inNavbar && t) {
                if (void 0 === u)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var o = this._element;
                "parent" === this._config.reference
                  ? (o = i)
                  : _.isElement(this._config.reference) &&
                    ((o = this._config.reference),
                    void 0 !== this._config.reference.jquery &&
                      (o = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary && g(i).addClass(qt),
                  (this._popper = new u(
                    o,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === g(i).closest(Bt).length &&
                g(document.body).children().on("mouseover", null, g.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                g(this._menu).toggleClass(Rt),
                g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e));
            }
          }
        }),
        (t.hide = function () {
          if (
            !this._element.disabled &&
            !g(this._element).hasClass(Ht) &&
            g(this._menu).hasClass(Rt)
          ) {
            var t = { relatedTarget: this._element },
              e = g.Event(jt.HIDE, t),
              n = c._getParentFromElement(this._element);
            g(n).trigger(e),
              e.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                g(this._menu).toggleClass(Rt),
                g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)));
          }
        }),
        (t.dispose = function () {
          g.removeData(this._element, Nt),
            g(this._element).off(Ot),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function () {
          var e = this;
          g(this._element).on(jt.CLICK, function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (t._getConfig = function (t) {
          return (
            (t = l(
              {},
              this.constructor.Default,
              {},
              g(this._element).data(),
              {},
              t
            )),
            _.typeCheckConfig(At, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._getMenuElement = function () {
          if (!this._menu) {
            var t = c._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(Qt));
          }
          return this._menu;
        }),
        (t._getPlacement = function () {
          var t = g(this._element.parentNode),
            e = Xt;
          return (
            t.hasClass(xt)
              ? ((e = Yt), g(this._menu).hasClass(Wt) && (e = zt))
              : t.hasClass(Ft)
              ? (e = Gt)
              : t.hasClass(Ut)
              ? (e = Jt)
              : g(this._menu).hasClass(Wt) && (e = $t),
            e
          );
        }),
        (t._detectNavbar = function () {
          return 0 < g(this._element).closest(".navbar").length;
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      {},
                      e._config.offset(t.offsets, e._element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (t._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            l({}, t, {}, this._config.popperConfig)
          );
        }),
        (c._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this).data(Nt),
              e = "object" === _typeof(n) ? n : null;
            if (
              (t || ((t = new c(this, e)), g(this).data(Nt, t)),
              "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        (c._clearMenus = function (t) {
          if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
            for (
              var e = [].slice.call(document.querySelectorAll(Mt)),
                n = 0,
                i = e.length;
              n < i;
              n++
            ) {
              var o = c._getParentFromElement(e[n]),
                r = g(e[n]).data(Nt),
                s = { relatedTarget: e[n] };
              if ((t && "click" === t.type && (s.clickEvent = t), r)) {
                var a = r._menu;
                if (
                  g(o).hasClass(Rt) &&
                  !(
                    t &&
                    (("click" === t.type &&
                      /input|textarea/i.test(t.target.tagName)) ||
                      ("keyup" === t.type && 9 === t.which)) &&
                    g.contains(o, t.target)
                  )
                ) {
                  var l = g.Event(jt.HIDE, s);
                  g(o).trigger(l),
                    l.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        g(document.body)
                          .children()
                          .off("mouseover", null, g.noop),
                      e[n].setAttribute("aria-expanded", "false"),
                      r._popper && r._popper.destroy(),
                      g(a).removeClass(Rt),
                      g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)));
                }
              }
            }
        }),
        (c._getParentFromElement = function (t) {
          var e,
            n = _.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (c._dataApiKeydownHandler = function (t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) ||
                      g(t.target).closest(Qt).length))
                )
              : Lt.test(t.which)) &&
            (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !g(this).hasClass(Ht))
          ) {
            var e = c._getParentFromElement(this),
              n = g(e).hasClass(Rt);
            if (n || 27 !== t.which)
              if (n && (!n || (27 !== t.which && 32 !== t.which))) {
                var i = [].slice
                  .call(e.querySelectorAll(Vt))
                  .filter(function (t) {
                    return g(t).is(":visible");
                  });
                if (0 !== i.length) {
                  var o = i.indexOf(t.target);
                  38 === t.which && 0 < o && o--,
                    40 === t.which && o < i.length - 1 && o++,
                    o < 0 && (o = 0),
                    i[o].focus();
                }
              } else {
                if (27 === t.which) {
                  var r = e.querySelector(Mt);
                  g(r).trigger("focus");
                }
                g(this).trigger("click");
              }
          }
        }),
        s(c, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Zt;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return te;
            },
          },
        ]),
        c
      );
    })();
  g(document)
    .on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler)
    .on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler)
    .on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus)
    .on(jt.CLICK_DATA_API, Mt, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        ee._jQueryInterface.call(g(this), "toggle");
    })
    .on(jt.CLICK_DATA_API, Kt, function (t) {
      t.stopPropagation();
    }),
    (g.fn[At] = ee._jQueryInterface),
    (g.fn[At].Constructor = ee),
    (g.fn[At].noConflict = function () {
      return (g.fn[At] = Pt), ee._jQueryInterface;
    });
  var ne = "modal",
    ie = "bs.modal",
    oe = "." + ie,
    re = g.fn[ne],
    se = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    ae = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    le = {
      HIDE: "hide" + oe,
      HIDE_PREVENTED: "hidePrevented" + oe,
      HIDDEN: "hidden" + oe,
      SHOW: "show" + oe,
      SHOWN: "shown" + oe,
      FOCUSIN: "focusin" + oe,
      RESIZE: "resize" + oe,
      CLICK_DISMISS: "click.dismiss" + oe,
      KEYDOWN_DISMISS: "keydown.dismiss" + oe,
      MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
      CLICK_DATA_API: "click" + oe + ".data-api",
    },
    ce = "modal-dialog-scrollable",
    he = "modal-scrollbar-measure",
    ue = "modal-backdrop",
    fe = "modal-open",
    de = "fade",
    ge = "show",
    _e = "modal-static",
    me = ".modal-dialog",
    pe = ".modal-body",
    ve = '[data-toggle="modal"]',
    ye = '[data-dismiss="modal"]',
    Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Ce = ".sticky-top",
    be = (function () {
      function o(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(me)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var t = o.prototype;
      return (
        (t.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (t.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            g(this._element).hasClass(de) && (this._isTransitioning = !0);
            var n = g.Event(le.SHOW, { relatedTarget: t });
            g(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(this._element).on(le.CLICK_DISMISS, ye, function (t) {
                  return e.hide(t);
                }),
                g(this._dialog).on(le.MOUSEDOWN_DISMISS, function () {
                  g(e._element).one(le.MOUSEUP_DISMISS, function (t) {
                    g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (t.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = g.Event(le.HIDE);
            if (
              (g(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = g(this._element).hasClass(de);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(document).off(le.FOCUSIN),
                g(this._element).removeClass(ge),
                g(this._element).off(le.CLICK_DISMISS),
                g(this._dialog).off(le.MOUSEDOWN_DISMISS),
                i)
              ) {
                var o = _.getTransitionDurationFromElement(this._element);
                g(this._element)
                  .one(_.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(o);
              } else this._hideModal();
            }
          }
        }),
        (t.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return g(t).off(oe);
          }),
            g(document).off(le.FOCUSIN),
            g.removeData(this._element, ie),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function () {
          this._adjustDialog();
        }),
        (t._getConfig = function (t) {
          return (t = l({}, se, {}, t)), _.typeCheckConfig(ne, t, ae), t;
        }),
        (t._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var e = g.Event(le.HIDE_PREVENTED);
            if ((g(this._element).trigger(e), e.defaultPrevented)) return;
            this._element.classList.add(_e);
            var n = _.getTransitionDurationFromElement(this._element);
            g(this._element)
              .one(_.TRANSITION_END, function () {
                t._element.classList.remove(_e);
              })
              .emulateTransitionEnd(n),
              this._element.focus();
          } else this.hide();
        }),
        (t._showElement = function (t) {
          var e = this,
            n = g(this._element).hasClass(de),
            i = this._dialog ? this._dialog.querySelector(pe) : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            g(this._dialog).hasClass(ce) && i
              ? (i.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && _.reflow(this._element),
            g(this._element).addClass(ge),
            this._config.focus && this._enforceFocus();
          function o() {
            e._config.focus && e._element.focus(),
              (e._isTransitioning = !1),
              g(e._element).trigger(r);
          }
          var r = g.Event(le.SHOWN, { relatedTarget: t });
          if (n) {
            var s = _.getTransitionDurationFromElement(this._dialog);
            g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();
        }),
        (t._enforceFocus = function () {
          var e = this;
          g(document)
            .off(le.FOCUSIN)
            .on(le.FOCUSIN, function (t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === g(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (t._setEscapeEvent = function () {
          var e = this;
          this._isShown && this._config.keyboard
            ? g(this._element).on(le.KEYDOWN_DISMISS, function (t) {
                27 === t.which && e._triggerBackdropTransition();
              })
            : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS);
        }),
        (t._setResizeEvent = function () {
          var e = this;
          this._isShown
            ? g(window).on(le.RESIZE, function (t) {
                return e.handleUpdate(t);
              })
            : g(window).off(le.RESIZE);
        }),
        (t._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              g(document.body).removeClass(fe),
                t._resetAdjustments(),
                t._resetScrollbar(),
                g(t._element).trigger(le.HIDDEN);
            });
        }),
        (t._removeBackdrop = function () {
          this._backdrop &&
            (g(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function (t) {
          var e = this,
            n = g(this._element).hasClass(de) ? de : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = ue),
              n && this._backdrop.classList.add(n),
              g(this._backdrop).appendTo(document.body),
              g(this._element).on(le.CLICK_DISMISS, function (t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    e._triggerBackdropTransition();
              }),
              n && _.reflow(this._backdrop),
              g(this._backdrop).addClass(ge),
              !t)
            )
              return;
            if (!n) return void t();
            var i = _.getTransitionDurationFromElement(this._backdrop);
            g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            g(this._backdrop).removeClass(ge);
            var o = function () {
              e._removeBackdrop(), t && t();
            };
            if (g(this._element).hasClass(de)) {
              var r = _.getTransitionDurationFromElement(this._backdrop);
              g(this._backdrop)
                .one(_.TRANSITION_END, o)
                .emulateTransitionEnd(r);
            } else o();
          } else t && t();
        }),
        (t._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (t._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (t._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function () {
          var o = this;
          if (this._isBodyOverflowing) {
            var t = [].slice.call(document.querySelectorAll(Ee)),
              e = [].slice.call(document.querySelectorAll(Ce));
            g(t).each(function (t, e) {
              var n = e.style.paddingRight,
                i = g(e).css("padding-right");
              g(e)
                .data("padding-right", n)
                .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
            }),
              g(e).each(function (t, e) {
                var n = e.style.marginRight,
                  i = g(e).css("margin-right");
                g(e)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) - o._scrollbarWidth + "px"
                  );
              });
            var n = document.body.style.paddingRight,
              i = g(document.body).css("padding-right");
            g(document.body)
              .data("padding-right", n)
              .css(
                "padding-right",
                parseFloat(i) + this._scrollbarWidth + "px"
              );
          }
          g(document.body).addClass(fe);
        }),
        (t._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(Ee));
          g(t).each(function (t, e) {
            var n = g(e).data("padding-right");
            g(e).removeData("padding-right"), (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll("" + Ce));
          g(e).each(function (t, e) {
            var n = g(e).data("margin-right");
            void 0 !== n &&
              g(e).css("margin-right", n).removeData("margin-right");
          });
          var n = g(document.body).data("padding-right");
          g(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (t._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = he), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (o._jQueryInterface = function (n, i) {
          return this.each(function () {
            var t = g(this).data(ie),
              e = l(
                {},
                se,
                {},
                g(this).data(),
                {},
                "object" === _typeof(n) && n ? n : {}
              );
            if (
              (t || ((t = new o(this, e)), g(this).data(ie, t)),
              "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n](i);
            } else e.show && t.show(i);
          });
        }),
        s(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return se;
            },
          },
        ]),
        o
      );
    })();
  g(document).on(le.CLICK_DATA_API, ve, function (t) {
    var e,
      n = this,
      i = _.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());
    ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
    var r = g(e).one(le.SHOW, function (t) {
      t.isDefaultPrevented() ||
        r.one(le.HIDDEN, function () {
          g(n).is(":visible") && n.focus();
        });
    });
    be._jQueryInterface.call(g(e), o, this);
  }),
    (g.fn[ne] = be._jQueryInterface),
    (g.fn[ne].Constructor = be),
    (g.fn[ne].noConflict = function () {
      return (g.fn[ne] = re), be._jQueryInterface;
    });
  var Te = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Se = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    Ie =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function we(t, s, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);
    for (
      var n = new window.DOMParser().parseFromString(t, "text/html"),
        a = Object.keys(s),
        l = [].slice.call(n.body.querySelectorAll("*")),
        i = function (t, e) {
          var n = l[t],
            i = n.nodeName.toLowerCase();
          if (-1 === a.indexOf(n.nodeName.toLowerCase()))
            return n.parentNode.removeChild(n), "continue";
          var o = [].slice.call(n.attributes),
            r = [].concat(s["*"] || [], s[i] || []);
          o.forEach(function (t) {
            !(function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Te.indexOf(n) ||
                  Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, r) && n.removeAttribute(t.nodeName);
          });
        },
        o = 0,
        r = l.length;
      o < r;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var Ae = "tooltip",
    Ne = "bs.tooltip",
    Oe = "." + Ne,
    ke = g.fn[Ae],
    Pe = "bs-tooltip",
    Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
    je = ["sanitize", "whiteList", "sanitizeFn"],
    He = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    Re = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    xe = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Se,
      popperConfig: null,
    },
    Fe = "show",
    Ue = "out",
    We = {
      HIDE: "hide" + Oe,
      HIDDEN: "hidden" + Oe,
      SHOW: "show" + Oe,
      SHOWN: "shown" + Oe,
      INSERTED: "inserted" + Oe,
      CLICK: "click" + Oe,
      FOCUSIN: "focusin" + Oe,
      FOCUSOUT: "focusout" + Oe,
      MOUSEENTER: "mouseenter" + Oe,
      MOUSELEAVE: "mouseleave" + Oe,
    },
    qe = "fade",
    Me = "show",
    Ke = ".tooltip-inner",
    Qe = ".arrow",
    Be = "hover",
    Ve = "focus",
    Ye = "click",
    ze = "manual",
    Xe = (function () {
      function i(t, e) {
        if (void 0 === u)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.enable = function () {
          this._isEnabled = !0;
        }),
        (t.disable = function () {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = g(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                g(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (g(this.getTipElement()).hasClass(Me))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            g.removeData(this.element, this.constructor.DATA_KEY),
            g(this.element).off(this.constructor.EVENT_KEY),
            g(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && g(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function () {
          var e = this;
          if ("none" === g(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var t = g.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            g(this.element).trigger(t);
            var n = _.findShadowRoot(this.element),
              i = g.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (t.isDefaultPrevented() || !i) return;
            var o = this.getTipElement(),
              r = _.getUID(this.constructor.NAME);
            o.setAttribute("id", r),
              this.element.setAttribute("aria-describedby", r),
              this.setContent(),
              this.config.animation && g(o).addClass(qe);
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = this._getContainer();
            g(o).data(this.constructor.DATA_KEY, this),
              g.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || g(o).appendTo(l),
              g(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new u(this.element, o, this._getPopperConfig(a))),
              g(o).addClass(Me),
              "ontouchstart" in document.documentElement &&
                g(document.body).children().on("mouseover", null, g.noop);
            var c = function () {
              e.config.animation && e._fixTransition();
              var t = e._hoverState;
              (e._hoverState = null),
                g(e.element).trigger(e.constructor.Event.SHOWN),
                t === Ue && e._leave(null, e);
            };
            if (g(this.tip).hasClass(qe)) {
              var h = _.getTransitionDurationFromElement(this.tip);
              g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
            } else c();
          }
        }),
        (t.hide = function (t) {
          function e() {
            n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i),
              n._cleanTipClass(),
              n.element.removeAttribute("aria-describedby"),
              g(n.element).trigger(n.constructor.Event.HIDDEN),
              null !== n._popper && n._popper.destroy(),
              t && t();
          }
          var n = this,
            i = this.getTipElement(),
            o = g.Event(this.constructor.Event.HIDE);
          if ((g(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (g(i).removeClass(Me),
              "ontouchstart" in document.documentElement &&
                g(document.body).children().off("mouseover", null, g.noop),
              (this._activeTrigger[Ye] = !1),
              (this._activeTrigger[Ve] = !1),
              (this._activeTrigger[Be] = !1),
              g(this.tip).hasClass(qe))
            ) {
              var r = _.getTransitionDurationFromElement(i);
              g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r);
            } else e();
            this._hoverState = "";
          }
        }),
        (t.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (t.addAttachmentClass = function (t) {
          g(this.getTipElement()).addClass(Pe + "-" + t);
        }),
        (t.getTipElement = function () {
          return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
        }),
        (t.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()),
            g(t).removeClass(qe + " " + Me);
        }),
        (t.setElementContent = function (t, e) {
          "object" !== _typeof(e) || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = we(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? g(e).parent().is(t) || t.empty().append(e)
            : t.text(g(e).text());
        }),
        (t.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (t._getPopperConfig = function (t) {
          var e = this;
          return l(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: Qe },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            {},
            this.config.popperConfig
          );
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this.config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      {},
                      e.config.offset(t.offsets, e.element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (t._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : _.isElement(this.config.container)
            ? g(this.config.container)
            : g(document).find(this.config.container);
        }),
        (t._getAttachment = function (t) {
          return Re[t.toUpperCase()];
        }),
        (t._setListeners = function () {
          var i = this;
          this.config.trigger.split(" ").forEach(function (t) {
            if ("click" === t)
              g(i.element).on(
                i.constructor.Event.CLICK,
                i.config.selector,
                function (t) {
                  return i.toggle(t);
                }
              );
            else if (t !== ze) {
              var e =
                  t === Be
                    ? i.constructor.Event.MOUSEENTER
                    : i.constructor.Event.FOCUSIN,
                n =
                  t === Be
                    ? i.constructor.Event.MOUSELEAVE
                    : i.constructor.Event.FOCUSOUT;
              g(i.element)
                .on(e, i.config.selector, function (t) {
                  return i._enter(t);
                })
                .on(n, i.config.selector, function (t) {
                  return i._leave(t);
                });
            }
          }),
            (this._hideModalHandler = function () {
              i.element && i.hide();
            }),
            g(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (t._fixTitle = function () {
          var t = _typeof(this.element.getAttribute("data-original-title"));
          (!this.element.getAttribute("title") && "string" === t) ||
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (t._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || g(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0),
            g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe
              ? (e._hoverState = Fe)
              : (clearTimeout(e._timeout),
                (e._hoverState = Fe),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Fe && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (t._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || g(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = Ue),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    e._hoverState === Ue && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (t._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (t._getConfig = function (t) {
          var e = g(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== je.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = l(
                {},
                this.constructor.Default,
                {},
                e,
                {},
                "object" === _typeof(t) && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            _.typeCheckConfig(Ae, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = we(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (t._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (t._cleanTipClass = function () {
          var t = g(this.getTipElement()),
            e = t.attr("class").match(Le);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (t._handlePopperPlacementChange = function (t) {
          var e = t.instance;
          (this.tip = e.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (t._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (g(t).removeClass(qe),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this).data(Ne),
              e = "object" === _typeof(n) && n;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), g(this).data(Ne, t)),
              "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return xe;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Ae;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return Ne;
            },
          },
          {
            key: "Event",
            get: function () {
              return We;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Oe;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return He;
            },
          },
        ]),
        i
      );
    })();
  (g.fn[Ae] = Xe._jQueryInterface),
    (g.fn[Ae].Constructor = Xe),
    (g.fn[Ae].noConflict = function () {
      return (g.fn[Ae] = ke), Xe._jQueryInterface;
    });
  var $e = "popover",
    Ge = "bs.popover",
    Je = "." + Ge,
    Ze = g.fn[$e],
    tn = "bs-popover",
    en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
    nn = l({}, Xe.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    on = l({}, Xe.DefaultType, { content: "(string|element|function)" }),
    rn = "fade",
    sn = "show",
    an = ".popover-header",
    ln = ".popover-body",
    cn = {
      HIDE: "hide" + Je,
      HIDDEN: "hidden" + Je,
      SHOW: "show" + Je,
      SHOWN: "shown" + Je,
      INSERTED: "inserted" + Je,
      CLICK: "click" + Je,
      FOCUSIN: "focusin" + Je,
      FOCUSOUT: "focusout" + Je,
      MOUSEENTER: "mouseenter" + Je,
      MOUSELEAVE: "mouseleave" + Je,
    },
    hn = (function (t) {
      function i() {
        return t.apply(this, arguments) || this;
      }
      !(function (t, e) {
        (t.prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e);
      })(i, t);
      var e = i.prototype;
      return (
        (e.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (e.addAttachmentClass = function (t) {
          g(this.getTipElement()).addClass(tn + "-" + t);
        }),
        (e.getTipElement = function () {
          return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
        }),
        (e.setContent = function () {
          var t = g(this.getTipElement());
          this.setElementContent(t.find(an), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(ln), e),
            t.removeClass(rn + " " + sn);
        }),
        (e._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (e._cleanTipClass = function () {
          var t = g(this.getTipElement()),
            e = t.attr("class").match(en);
          null !== e && 0 < e.length && t.removeClass(e.join(""));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this).data(Ge),
              e = "object" === _typeof(n) ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), g(this).data(Ge, t)),
              "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return nn;
            },
          },
          {
            key: "NAME",
            get: function () {
              return $e;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return Ge;
            },
          },
          {
            key: "Event",
            get: function () {
              return cn;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Je;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return on;
            },
          },
        ]),
        i
      );
    })(Xe);
  (g.fn[$e] = hn._jQueryInterface),
    (g.fn[$e].Constructor = hn),
    (g.fn[$e].noConflict = function () {
      return (g.fn[$e] = Ze), hn._jQueryInterface;
    });
  var un = "scrollspy",
    fn = "bs.scrollspy",
    dn = "." + fn,
    gn = g.fn[un],
    _n = { offset: 10, method: "auto", target: "" },
    mn = { offset: "number", method: "string", target: "(string|element)" },
    pn = {
      ACTIVATE: "activate" + dn,
      SCROLL: "scroll" + dn,
      LOAD_DATA_API: "load" + dn + ".data-api",
    },
    vn = "dropdown-item",
    yn = "active",
    En = '[data-spy="scroll"]',
    Cn = ".nav, .list-group",
    bn = ".nav-link",
    Tn = ".nav-item",
    Sn = ".list-group-item",
    Dn = ".dropdown",
    In = ".dropdown-item",
    wn = ".dropdown-toggle",
    An = "offset",
    Nn = "position",
    On = (function () {
      function i(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " " +
            bn +
            "," +
            this._config.target +
            " " +
            Sn +
            "," +
            this._config.target +
            " " +
            In),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          g(this._scrollElement).on(pn.SCROLL, function (t) {
            return n._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var t = i.prototype;
      return (
        (t.refresh = function () {
          var e = this,
            t = this._scrollElement === this._scrollElement.window ? An : Nn,
            o = "auto" === this._config.method ? t : this._config.method,
            r = o === Nn ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  n = _.getSelectorFromElement(t);
                if ((n && (e = document.querySelector(n)), e)) {
                  var i = e.getBoundingClientRect();
                  if (i.width || i.height) return [g(e)[o]().top + r, n];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (t.dispose = function () {
          g.removeData(this._element, fn),
            g(this._scrollElement).off(dn),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function (t) {
          if (
            "string" !=
            typeof (t = l({}, _n, {}, "object" === _typeof(t) && t ? t : {}))
              .target
          ) {
            var e = g(t.target).attr("id");
            e || ((e = _.getUID(un)), g(t.target).attr("id", e)),
              (t.target = "#" + e);
          }
          return _.typeCheckConfig(un, t, mn), t;
        }),
        (t._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (t._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (t._activate = function (e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(",").map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            }),
            n = g([].slice.call(document.querySelectorAll(t.join(","))));
          n.hasClass(vn)
            ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn))
            : (n.addClass(yn),
              n
                .parents(Cn)
                .prev(bn + ", " + Sn)
                .addClass(yn),
              n.parents(Cn).prev(Tn).children(bn).addClass(yn)),
            g(this._scrollElement).trigger(pn.ACTIVATE, { relatedTarget: e });
        }),
        (t._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(yn);
            })
            .forEach(function (t) {
              return t.classList.remove(yn);
            });
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this).data(fn),
              e = "object" === _typeof(n) && n;
            if (
              (t || ((t = new i(this, e)), g(this).data(fn, t)),
              "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return _n;
            },
          },
        ]),
        i
      );
    })();
  g(window).on(pn.LOAD_DATA_API, function () {
    for (
      var t = [].slice.call(document.querySelectorAll(En)), e = t.length;
      e--;

    ) {
      var n = g(t[e]);
      On._jQueryInterface.call(n, n.data());
    }
  }),
    (g.fn[un] = On._jQueryInterface),
    (g.fn[un].Constructor = On),
    (g.fn[un].noConflict = function () {
      return (g.fn[un] = gn), On._jQueryInterface;
    });
  var kn = "bs.tab",
    Pn = "." + kn,
    Ln = g.fn.tab,
    jn = {
      HIDE: "hide" + Pn,
      HIDDEN: "hidden" + Pn,
      SHOW: "show" + Pn,
      SHOWN: "shown" + Pn,
      CLICK_DATA_API: "click" + Pn + ".data-api",
    },
    Hn = "dropdown-menu",
    Rn = "active",
    xn = "disabled",
    Fn = "fade",
    Un = "show",
    Wn = ".dropdown",
    qn = ".nav, .list-group",
    Mn = ".active",
    Kn = "> li > .active",
    Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Bn = ".dropdown-toggle",
    Vn = "> .dropdown-menu .active",
    Yn = (function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.show = function () {
          var n = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                g(this._element).hasClass(Rn)) ||
              g(this._element).hasClass(xn)
            )
          ) {
            var t,
              i,
              e = g(this._element).closest(qn)[0],
              o = _.getSelectorFromElement(this._element);
            if (e) {
              var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
              i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
            }
            var s = g.Event(jn.HIDE, { relatedTarget: this._element }),
              a = g.Event(jn.SHOW, { relatedTarget: i });
            if (
              (i && g(i).trigger(s),
              g(this._element).trigger(a),
              !a.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (t = document.querySelector(o)),
                this._activate(this._element, e);
              var l = function () {
                var t = g.Event(jn.HIDDEN, { relatedTarget: n._element }),
                  e = g.Event(jn.SHOWN, { relatedTarget: i });
                g(i).trigger(t), g(n._element).trigger(e);
              };
              t ? this._activate(t, t.parentNode, l) : l();
            }
          }
        }),
        (t.dispose = function () {
          g.removeData(this._element, kn), (this._element = null);
        }),
        (t._activate = function (t, e, n) {
          function i() {
            return o._transitionComplete(t, r, n);
          }
          var o = this,
            r = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? g(e).children(Mn)
                : g(e).find(Kn)
            )[0],
            s = n && r && g(r).hasClass(Fn);
          if (r && s) {
            var a = _.getTransitionDurationFromElement(r);
            g(r)
              .removeClass(Un)
              .one(_.TRANSITION_END, i)
              .emulateTransitionEnd(a);
          } else i();
        }),
        (t._transitionComplete = function (t, e, n) {
          if (e) {
            g(e).removeClass(Rn);
            var i = g(e.parentNode).find(Vn)[0];
            i && g(i).removeClass(Rn),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          if (
            (g(t).addClass(Rn),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            _.reflow(t),
            t.classList.contains(Fn) && t.classList.add(Un),
            t.parentNode && g(t.parentNode).hasClass(Hn))
          ) {
            var o = g(t).closest(Wn)[0];
            if (o) {
              var r = [].slice.call(o.querySelectorAll(Bn));
              g(r).addClass(Rn);
            }
            t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this),
              e = t.data(kn);
            if (
              (e || ((e = new i(this)), t.data(kn, e)), "string" == typeof n)
            ) {
              if (void 0 === e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
        ]),
        i
      );
    })();
  g(document).on(jn.CLICK_DATA_API, Qn, function (t) {
    t.preventDefault(), Yn._jQueryInterface.call(g(this), "show");
  }),
    (g.fn.tab = Yn._jQueryInterface),
    (g.fn.tab.Constructor = Yn),
    (g.fn.tab.noConflict = function () {
      return (g.fn.tab = Ln), Yn._jQueryInterface;
    });
  var zn = "toast",
    Xn = "bs.toast",
    $n = "." + Xn,
    Gn = g.fn[zn],
    Jn = {
      CLICK_DISMISS: "click.dismiss" + $n,
      HIDE: "hide" + $n,
      HIDDEN: "hidden" + $n,
      SHOW: "show" + $n,
      SHOWN: "shown" + $n,
    },
    Zn = "fade",
    ti = "hide",
    ei = "show",
    ni = "showing",
    ii = { animation: "boolean", autohide: "boolean", delay: "number" },
    oi = { animation: !0, autohide: !0, delay: 500 },
    ri = '[data-dismiss="toast"]',
    si = (function () {
      function o(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var t = o.prototype;
      return (
        (t.show = function () {
          var t = this,
            e = g.Event(Jn.SHOW);
          if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
            this._config.animation && this._element.classList.add(Zn);
            var n = function () {
              t._element.classList.remove(ni),
                t._element.classList.add(ei),
                g(t._element).trigger(Jn.SHOWN),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove(ti),
              _.reflow(this._element),
              this._element.classList.add(ni),
              this._config.animation)
            ) {
              var i = _.getTransitionDurationFromElement(this._element);
              g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i);
            } else n();
          }
        }),
        (t.hide = function () {
          if (this._element.classList.contains(ei)) {
            var t = g.Event(Jn.HIDE);
            g(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(ei) &&
              this._element.classList.remove(ei),
            g(this._element).off(Jn.CLICK_DISMISS),
            g.removeData(this._element, Xn),
            (this._element = null),
            (this._config = null);
        }),
        (t._getConfig = function (t) {
          return (
            (t = l(
              {},
              oi,
              {},
              g(this._element).data(),
              {},
              "object" === _typeof(t) && t ? t : {}
            )),
            _.typeCheckConfig(zn, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._setListeners = function () {
          var t = this;
          g(this._element).on(Jn.CLICK_DISMISS, ri, function () {
            return t.hide();
          });
        }),
        (t._close = function () {
          function t() {
            e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN);
          }
          var e = this;
          if ((this._element.classList.remove(ei), this._config.animation)) {
            var n = _.getTransitionDurationFromElement(this._element);
            g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n);
          } else t();
        }),
        (o._jQueryInterface = function (i) {
          return this.each(function () {
            var t = g(this),
              e = t.data(Xn),
              n = "object" === _typeof(i) && i;
            if (
              (e || ((e = new o(this, n)), t.data(Xn, e)), "string" == typeof i)
            ) {
              if (void 0 === e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i](this);
            }
          });
        }),
        s(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ii;
            },
          },
          {
            key: "Default",
            get: function () {
              return oi;
            },
          },
        ]),
        o
      );
    })();
  (g.fn[zn] = si._jQueryInterface),
    (g.fn[zn].Constructor = si),
    (g.fn[zn].noConflict = function () {
      return (g.fn[zn] = Gn), si._jQueryInterface;
    }),
    (t.Alert = v),
    (t.Button = H),
    (t.Carousel = ut),
    (t.Collapse = wt),
    (t.Dropdown = ee),
    (t.Modal = be),
    (t.Popover = hn),
    (t.Scrollspy = On),
    (t.Tab = Yn),
    (t.Toast = si),
    (t.Tooltip = Xe),
    (t.Util = _),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsIi4uLy4uL2pzL3NyYy91dGlsLmpzIiwiLi4vLi4vanMvc3JjL2FsZXJ0LmpzIiwiLi4vLi4vanMvc3JjL2J1dHRvbi5qcyIsIi4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIi4uLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIi4uLy4uL2pzL3NyYy9kcm9wZG93bi5qcyIsIi4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIi4uLy4uL2pzL3NyYy90b29scy9zYW5pdGl6ZXIuanMiLCIuLi8uLi9qcy9zcmMvdG9vbHRpcC5qcyIsIi4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwiLi4vLi4vanMvc3JjL3Njcm9sbHNweS5qcyIsIi4uLy4uL2pzL3NyYy90YWIuanMiLCIuLi8uLi9qcy9zcmMvdG9hc3QuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJfdHlwZW9mIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsInNlbGYiLCJib290c3RyYXAiLCJqUXVlcnkiLCJQb3BwZXIiLCIkIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJkZXNjcmlwdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJjb25maWd1cmFibGUiLCJsZW5ndGgiLCJ3cml0YWJsZSIsImVudW1lcmFibGUiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIm9iaiIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5Iiwia2V5cyIsIk9iamVjdCIsIm93bktleXMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHVzaCIsImFyZ3VtZW50cyIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImRlZmluZVByb3BlcnR5IiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJUUkFOU0lUSU9OX0VORCIsInRyYW5zaXRpb25FbmRFbXVsYXRvciIsImR1cmF0aW9uIiwiX3RoaXMiLCJ0aGlzIiwiY2FsbGVkIiwib25lIiwiVXRpbCIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsImVsZW1lbnQiLCJzZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImhyZWZBdHRyIiwidHJpbSIsInF1ZXJ5U2VsZWN0b3IiLCJlcnIiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImNzcyIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5Iiwic3BsaXQiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJ0cmlnZ2VyIiwic3VwcG9ydHNUcmFuc2l0aW9uRW5kIiwiQm9vbGVhbiIsImlzRWxlbWVudCIsIm5vZGVUeXBlIiwidHlwZUNoZWNrQ29uZmlnIiwiY29tcG9uZW50TmFtZSIsImNvbmZpZyIsImNvbmZpZ1R5cGVzIiwicHJvcGVydHkiLCJjYWxsIiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsInRvU3RyaW5nIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsIlJlZ0V4cCIsInRlc3QiLCJFcnJvciIsInRvVXBwZXJDYXNlIiwiZmluZFNoYWRvd1Jvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsIlNoYWRvd1Jvb3QiLCJwYXJlbnROb2RlIiwicm9vdCIsImpRdWVyeURldGVjdGlvbiIsIlR5cGVFcnJvciIsInZlcnNpb24iLCJmbiIsImpxdWVyeSIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwiZXZlbnQiLCJzcGVjaWFsIiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJhcHBseSIsIk5BTUUiLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsIkV2ZW50IiwiQ0xPU0UiLCJDTE9TRUQiLCJDTElDS19EQVRBX0FQSSIsIkNsYXNzTmFtZSIsIkFsZXJ0IiwiX2VsZW1lbnQiLCJfcHJvdG8iLCJjbG9zZSIsInJvb3RFbGVtZW50IiwiX2dldFJvb3RFbGVtZW50IiwiX3RyaWdnZXJDbG9zZUV2ZW50IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX3JlbW92ZUVsZW1lbnQiLCJkaXNwb3NlIiwicmVtb3ZlRGF0YSIsInBhcmVudCIsImNsb3Nlc3QiLCJjbG9zZUV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsIl9kZXN0cm95RWxlbWVudCIsImRldGFjaCIsInJlbW92ZSIsIl9qUXVlcnlJbnRlcmZhY2UiLCJlYWNoIiwiJGVsZW1lbnQiLCJkYXRhIiwiX2hhbmRsZURpc21pc3MiLCJhbGVydEluc3RhbmNlIiwicHJldmVudERlZmF1bHQiLCJnZXQiLCJvbiIsIm5vQ29uZmxpY3QiLCJEQVRBX0FQSV9LRVkiLCJTZWxlY3RvciIsIkZPQ1VTX0JMVVJfREFUQV9BUEkiLCJMT0FEX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhY3RpdmVFbGVtZW50IiwidGFnTmFtZSIsImZvY3VzIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidG9nZ2xlQ2xhc3MiLCJWRVJTSU9OIiwiYnV0dG9uIiwiaW5wdXRCdG4iLCJ3aW5kb3ciLCJidXR0b25zIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuIiwiYWRkIiwiRGVmYXVsdCIsImludGVydmFsIiwia2V5Ym9hcmQiLCJzbGlkZSIsInBhdXNlIiwid3JhcCIsInRvdWNoIiwiRGVmYXVsdFR5cGUiLCJEaXJlY3Rpb24iLCJTTElERSIsIlNMSUQiLCJLRVlET1dOIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJUT1VDSFNUQVJUIiwiVE9VQ0hNT1ZFIiwiVE9VQ0hFTkQiLCJQT0lOVEVSRE9XTiIsIlBPSU5URVJVUCIsIkRSQUdfU1RBUlQiLCJQb2ludGVyVHlwZSIsIlRPVUNIIiwiUEVOIiwiQ2Fyb3VzZWwiLCJfaXRlbXMiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1BhdXNlZCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRGVsdGFYIiwiX2NvbmZpZyIsIl9nZXRDb25maWciLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfdG91Y2hTdXBwb3J0ZWQiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIl9wb2ludGVyRXZlbnQiLCJQb2ludGVyRXZlbnQiLCJNU1BvaW50ZXJFdmVudCIsIl9hZGRFdmVudExpc3RlbmVycyIsIm5leHQiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJwcmV2IiwiY3ljbGUiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ2aXNpYmlsaXR5U3RhdGUiLCJiaW5kIiwidG8iLCJpbmRleCIsImFjdGl2ZUluZGV4IiwiX2dldEl0ZW1JbmRleCIsImRpcmVjdGlvbiIsIm9mZiIsIl9vYmplY3RTcHJlYWQyIiwiX2hhbmRsZVN3aXBlIiwiYWJzRGVsdGF4IiwiYWJzIiwiX3RoaXMyIiwiX2tleWRvd24iLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsIl90aGlzMyIsInN0YXJ0Iiwib3JpZ2luYWxFdmVudCIsInBvaW50ZXJUeXBlIiwiY2xpZW50WCIsInRvdWNoZXMiLCJlbmQiLCJjbGVhclRpbWVvdXQiLCJlIiwibW92ZSIsIndoaWNoIiwiaW5kZXhPZiIsIl9nZXRJdGVtQnlEaXJlY3Rpb24iLCJpc05leHREaXJlY3Rpb24iLCJpc1ByZXZEaXJlY3Rpb24iLCJsYXN0SXRlbUluZGV4IiwiaXRlbUluZGV4IiwicmVsYXRlZFRhcmdldCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsImV2ZW50RGlyZWN0aW9uTmFtZSIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4Iiwic2xpZGVFdmVudCIsImZyb20iLCJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsImluZGljYXRvcnMiLCJuZXh0SW5kaWNhdG9yIiwiY2hpbGRyZW4iLCJhZGRDbGFzcyIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJfdGhpczQiLCJhY3RpdmVFbGVtZW50SW5kZXgiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJpc0N5Y2xpbmciLCJzbGlkRXZlbnQiLCJuZXh0RWxlbWVudEludGVydmFsIiwicGFyc2VJbnQiLCJkZWZhdWx0SW50ZXJ2YWwiLCJhY3Rpb24iLCJyaWRlIiwiX2RhdGFBcGlDbGlja0hhbmRsZXIiLCJzbGlkZUluZGV4IiwiY2Fyb3VzZWxzIiwiJGNhcm91c2VsIiwiU0hPVyIsIlNIT1dOIiwiSElERSIsIkhJRERFTiIsIkRpbWVuc2lvbiIsIkNvbGxhcHNlIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJpZCIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsIl9zZWxlY3RvciIsIl9wYXJlbnQiLCJfZ2V0UGFyZW50IiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImhpZGUiLCJzaG93IiwiYWN0aXZlcyIsImFjdGl2ZXNEYXRhIiwibm90Iiwic3RhcnRFdmVudCIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJzdHlsZSIsImF0dHIiLCJzZXRUcmFuc2l0aW9uaW5nIiwic2Nyb2xsU2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRyaWdnZXJBcnJheUxlbmd0aCIsImlzVHJhbnNpdGlvbmluZyIsIl9nZXRUYXJnZXRGcm9tRWxlbWVudCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsIiR0aGlzIiwiY3VycmVudFRhcmdldCIsIiR0cmlnZ2VyIiwic2VsZWN0b3JzIiwiJHRhcmdldCIsIlJFR0VYUF9LRVlET1dOIiwiQVJST1dfVVBfS0VZQ09ERSIsIkNMSUNLIiwiS0VZRE9XTl9EQVRBX0FQSSIsIktFWVVQX0RBVEFfQVBJIiwiQXR0YWNobWVudE1hcCIsIm9mZnNldCIsImZsaXAiLCJib3VuZGFyeSIsInJlZmVyZW5jZSIsImRpc3BsYXkiLCJwb3BwZXJDb25maWciLCJEcm9wZG93biIsIl9wb3BwZXIiLCJfbWVudSIsIl9nZXRNZW51RWxlbWVudCIsIl9pbk5hdmJhciIsIl9kZXRlY3ROYXZiYXIiLCJpc0FjdGl2ZSIsImRpc2FibGVkIiwiX2NsZWFyTWVudXMiLCJ1c2VQb3BwZXIiLCJzaG93RXZlbnQiLCJfZ2V0UGFyZW50RnJvbUVsZW1lbnQiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsImJvZHkiLCJub29wIiwiaGlkZUV2ZW50IiwiZGVzdHJveSIsInVwZGF0ZSIsInNjaGVkdWxlVXBkYXRlIiwic3RvcFByb3BhZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJfZ2V0UGxhY2VtZW50IiwiJHBhcmVudERyb3Bkb3duIiwicGxhY2VtZW50IiwiX2dldE9mZnNldCIsIm9mZnNldHMiLCJtb2RpZmllcnMiLCJlbmFibGVkIiwicHJldmVudE92ZXJmbG93IiwiYm91bmRhcmllc0VsZW1lbnQiLCJhcHBseVN0eWxlIiwidG9nZ2xlcyIsImNvbnRleHQiLCJjbGlja0V2ZW50IiwiZHJvcGRvd25NZW51IiwiX2RhdGFBcGlLZXlkb3duSGFuZGxlciIsIml0ZW1zIiwiaXRlbSIsImJhY2tkcm9wIiwiSElERV9QUkVWRU5URUQiLCJGT0NVU0lOIiwiUkVTSVpFIiwiQ0xJQ0tfRElTTUlTUyIsIktFWURPV05fRElTTUlTUyIsIk1PVVNFVVBfRElTTUlTUyIsIk1PVVNFRE9XTl9ESVNNSVNTIiwiTW9kYWwiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2lzU2hvd24iLCJfaXNCb2R5T3ZlcmZsb3dpbmciLCJfaWdub3JlQmFja2Ryb3BDbGljayIsIl9zY3JvbGxiYXJXaWR0aCIsIl9jaGVja1Njcm9sbGJhciIsIl9zZXRTY3JvbGxiYXIiLCJfYWRqdXN0RGlhbG9nIiwiX3NldEVzY2FwZUV2ZW50IiwiX3NldFJlc2l6ZUV2ZW50IiwiX3Nob3dCYWNrZHJvcCIsIl9zaG93RWxlbWVudCIsInRyYW5zaXRpb24iLCJfaGlkZU1vZGFsIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsImhpZGVFdmVudFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiIsIm1vZGFsQm9keSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsInNjcm9sbFRvcCIsIl9lbmZvcmNlRm9jdXMiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJzaG93bkV2ZW50IiwiX3RoaXM1IiwiaGFzIiwiX3RoaXM2IiwiX3RoaXM3IiwiX3RoaXM4IiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfcmVzZXRTY3JvbGxiYXIiLCJfcmVtb3ZlQmFja2Ryb3AiLCJjYWxsYmFjayIsIl90aGlzOSIsImFuaW1hdGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kVG8iLCJiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiIsImNhbGxiYWNrUmVtb3ZlIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJyZWN0IiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsIl9nZXRTY3JvbGxiYXJXaWR0aCIsIl90aGlzMTAiLCJmaXhlZENvbnRlbnQiLCJzdGlja3lDb250ZW50IiwiYWN0dWFsUGFkZGluZyIsImNhbGN1bGF0ZWRQYWRkaW5nIiwiYWN0dWFsTWFyZ2luIiwibWFyZ2luUmlnaHQiLCJjYWxjdWxhdGVkTWFyZ2luIiwicGFkZGluZyIsImVsZW1lbnRzIiwibWFyZ2luIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJfdGhpczExIiwidXJpQXR0cnMiLCJEZWZhdWx0V2hpdGVsaXN0IiwiKiIsImEiLCJhcmVhIiwiYiIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJpbWciLCJsaSIsIm9sIiwicCIsInByZSIsInMiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1IiwidWwiLCJTQUZFX1VSTF9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsInNhbml0aXplSHRtbCIsInVuc2FmZUh0bWwiLCJ3aGl0ZUxpc3QiLCJzYW5pdGl6ZUZuIiwiY3JlYXRlZERvY3VtZW50IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwid2hpdGVsaXN0S2V5cyIsIl9sb29wIiwiZWwiLCJlbE5hbWUiLCJub2RlTmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJhdHRyaWJ1dGVzIiwid2hpdGVsaXN0ZWRBdHRyaWJ1dGVzIiwiY29uY2F0IiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJhdHRyTmFtZSIsIm5vZGVWYWx1ZSIsInJlZ0V4cCIsImF0dHJSZWdleCIsImwiLCJhbGxvd2VkQXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiQ0xBU1NfUFJFRklYIiwiQlNDTFNfUFJFRklYX1JFR0VYIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiYW5pbWF0aW9uIiwidGVtcGxhdGUiLCJ0aXRsZSIsImRlbGF5IiwiaHRtbCIsImNvbnRhaW5lciIsImZhbGxiYWNrUGxhY2VtZW50Iiwic2FuaXRpemUiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiSG92ZXJTdGF0ZSIsIklOU0VSVEVEIiwiRk9DVVNPVVQiLCJUcmlnZ2VyIiwiVG9vbHRpcCIsIl9pc0VuYWJsZWQiLCJfdGltZW91dCIsIl9ob3ZlclN0YXRlIiwiX2FjdGl2ZVRyaWdnZXIiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJkYXRhS2V5IiwiX2dldERlbGVnYXRlQ29uZmlnIiwiY2xpY2siLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsIl9lbnRlciIsIl9sZWF2ZSIsImdldFRpcEVsZW1lbnQiLCJfaGlkZU1vZGFsSGFuZGxlciIsImlzV2l0aENvbnRlbnQiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsIm93bmVyRG9jdW1lbnQiLCJ0aXBJZCIsInNldENvbnRlbnQiLCJhdHRhY2htZW50IiwiX2dldEF0dGFjaG1lbnQiLCJhZGRBdHRhY2htZW50Q2xhc3MiLCJfZ2V0Q29udGFpbmVyIiwiY29tcGxldGUiLCJfZml4VHJhbnNpdGlvbiIsInByZXZIb3ZlclN0YXRlIiwiX2NsZWFuVGlwQ2xhc3MiLCJnZXRUaXRsZSIsInNldEVsZW1lbnRDb250ZW50IiwiY29udGVudCIsInRleHQiLCJlbXB0eSIsImFwcGVuZCIsIm9uQ3JlYXRlIiwiYmVoYXZpb3IiLCJhcnJvdyIsIm9yaWdpbmFsUGxhY2VtZW50IiwiX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSIsIm9uVXBkYXRlIiwiZmluZCIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsInRpdGxlVHlwZSIsImRhdGFBdHRyaWJ1dGVzIiwiZGF0YUF0dHIiLCIkdGlwIiwidGFiQ2xhc3MiLCJqb2luIiwicG9wcGVyRGF0YSIsInBvcHBlckluc3RhbmNlIiwiaW5zdGFuY2UiLCJwb3BwZXIiLCJpbml0Q29uZmlnQW5pbWF0aW9uIiwiUG9wb3ZlciIsIl9Ub29sdGlwIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX2luaGVyaXRzTG9vc2UiLCJfZ2V0Q29udGVudCIsIm1ldGhvZCIsIkFDVElWQVRFIiwiU0NST0xMIiwiT2Zmc2V0TWV0aG9kIiwiU2Nyb2xsU3B5IiwiX3Njcm9sbEVsZW1lbnQiLCJfb2Zmc2V0cyIsIl90YXJnZXRzIiwiX2FjdGl2ZVRhcmdldCIsIl9zY3JvbGxIZWlnaHQiLCJfcHJvY2VzcyIsInJlZnJlc2giLCJhdXRvTWV0aG9kIiwib2Zmc2V0TWV0aG9kIiwib2Zmc2V0QmFzZSIsIl9nZXRTY3JvbGxUb3AiLCJfZ2V0U2Nyb2xsSGVpZ2h0IiwibWFwIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJoZWlnaHQiLCJ0b3AiLCJzb3J0IiwicGFnZVlPZmZzZXQiLCJtYXgiLCJfZ2V0T2Zmc2V0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJtYXhTY3JvbGwiLCJfYWN0aXZhdGUiLCJfY2xlYXIiLCJxdWVyaWVzIiwiJGxpbmsiLCJwYXJlbnRzIiwibm9kZSIsInNjcm9sbFNweXNMZW5ndGgiLCJzY3JvbGxTcHlzIiwiJHNweSIsIlRhYiIsInByZXZpb3VzIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJtYWtlQXJyYXkiLCJoaWRkZW5FdmVudCIsIl90cmFuc2l0aW9uQ29tcGxldGUiLCJhY3RpdmUiLCJkcm9wZG93bkNoaWxkIiwiZHJvcGRvd25FbGVtZW50IiwiZHJvcGRvd25Ub2dnbGVMaXN0IiwiYXV0b2hpZGUiLCJUb2FzdCIsIl9jbG9zZSIsIlNjcm9sbHNweSJdLCJtYXBwaW5ncyI6IitQQUtDLFNBQVVBLEVBQVFDLEdBQ0UsWUFBbkIsb0JBQU9DLFFBQVAsWUFBQUMsUUFBT0QsV0FBMEMsb0JBQVhFLE9BQXlCSCxFQUFRQyxRQUFTRyxRQUFRLFVBQVdBLFFBQVEsY0FDekYsbUJBQVhDLFFBQXlCQSxPQUFPQyxJQUFNRCxPQUFPLENBQUMsVUFBVyxTQUFVLGFBQWNMLEdBQzlEQSxHQUF6QkQsRUFBU0EsR0FBVVEsTUFBcUJDLFVBQVksR0FBSVQsRUFB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QixHQUFNbGdCLGlCQUMvQjVJLEVBQUVvRyxHQUFHWSxJQUFNcEcsWUFBY2tvQixHQUN6QjlvQixFQUFFb0csR0FBR1ksSUFBTXFDLFdBQWMsV0FFdkIsT0FEQXJKLEVBQUVvRyxHQUFHWSxJQUFRRyxHQUNOMmhCLEdBQU1sZ0Isa0Jia3JJYnRKLEVBQVFtSSxNQUFRQSxFQUNoQm5JLEVBQVFvSyxPQUFTQSxFQUNqQnBLLEVBQVFtTixTQUFXQSxHQUNuQm5OLEVBQVFnVCxTQUFXQSxHQUNuQmhULEVBQVErVixTQUFXQSxHQUNuQi9WLEVBQVE4WSxNQUFRQSxHQUNoQjlZLEVBQVFnbUIsUUFBVUEsR0FDbEJobUIsRUFBUTBwQixVQUFZL0MsR0FDcEIzbUIsRUFBUTRvQixJQUFNQSxHQUNkNW9CLEVBQVF3cEIsTUFBUUEsR0FDaEJ4cEIsRUFBUXFpQixRQUFVQSxHQUNsQnJpQixFQUFRcUQsS0FBT0EsRUFFZnZCLE9BQU9ZLGVBQWUxQyxFQUFTLGFBQWMsQ0FBRXlDLE9BQU8iLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gICogQm9vdHN0cmFwIHY0LjQuMSAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgKiBDb3B5cmlnaHQgMjAxMS0yMDE5IFRoZSBCb290c3RyYXAgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2dyYXBocy9jb250cmlidXRvcnMpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ3BvcHBlci5qcycpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAnanF1ZXJ5JywgJ3BvcHBlci5qcyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuYm9vdHN0cmFwID0ge30sIGdsb2JhbC5qUXVlcnksIGdsb2JhbC5Qb3BwZXIpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzLCAkLCBQb3BwZXIpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICQgPSAkICYmICQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/ICRbJ2RlZmF1bHQnXSA6ICQ7XG4gIFBvcHBlciA9IFBvcHBlciAmJiBQb3BwZXIuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFBvcHBlclsnZGVmYXVsdCddIDogUG9wcGVyO1xuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cztcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgICAgaWYgKGkgJSAyKSB7XG4gICAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjQuNC4xKTogdXRpbC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnO1xuICB2YXIgTUFYX1VJRCA9IDEwMDAwMDA7XG4gIHZhciBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDA7IC8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcblxuICBmdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJpbmRUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICAgIGRlbGVnYXRlVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgICBoYW5kbGU6IGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmaW5lZFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKF90aGlzKTtcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yO1xuICAgICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgfVxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogUHVibGljIFV0aWwgQXBpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgdmFyIFV0aWwgPSB7XG4gICAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuICAgIGdldFVJRDogZnVuY3Rpb24gZ2V0VUlEKHByZWZpeCkge1xuICAgICAgZG8ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpOyAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXG4gICAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcblxuICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9LFxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQ6IGZ1bmN0aW9uIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdmFyIHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgICB2YXIgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiAnJztcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQ6IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcblxuXG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kZWxheScpO1xuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpOyAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG5cbiAgICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG5cblxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF07XG4gICAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXTtcbiAgICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSO1xuICAgIH0sXG4gICAgcmVmbG93OiBmdW5jdGlvbiByZWZsb3coZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0sXG4gICAgdHJpZ2dlclRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihUUkFOU0lUSU9OX0VORCk7XG4gICAgfSxcbiAgICAvLyBUT0RPOiBSZW1vdmUgaW4gdjVcbiAgICBzdXBwb3J0c1RyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFRSQU5TSVRJT05fRU5EKTtcbiAgICB9LFxuICAgIGlzRWxlbWVudDogZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZTtcbiAgICB9LFxuICAgIHR5cGVDaGVja0NvbmZpZzogZnVuY3Rpb24gdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlnVHlwZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIHZhciBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV07XG4gICAgICAgICAgdmFyIHZhbHVlVHlwZSA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSk7XG5cbiAgICAgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpICsgXCI6IFwiICsgKFwiT3B0aW9uIFxcXCJcIiArIHByb3BlcnR5ICsgXCJcXFwiIHByb3ZpZGVkIHR5cGUgXFxcIlwiICsgdmFsdWVUeXBlICsgXCJcXFwiIFwiKSArIChcImJ1dCBleHBlY3RlZCB0eXBlIFxcXCJcIiArIGV4cGVjdGVkVHlwZXMgKyBcIlxcXCIuXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGZpbmRTaGFkb3dSb290OiBmdW5jdGlvbiBmaW5kU2hhZG93Um9vdChlbGVtZW50KSB7XG4gICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuXG5cbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbiAgICAgICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH0gLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcblxuXG4gICAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFV0aWwuZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICB9LFxuICAgIGpRdWVyeURldGVjdGlvbjogZnVuY3Rpb24galF1ZXJ5RGV0ZWN0aW9uKCkge1xuICAgICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5LiBqUXVlcnkgbXVzdCBiZSBpbmNsdWRlZCBiZWZvcmUgQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0LicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKTtcbiAgICAgIHZhciBtaW5NYWpvciA9IDE7XG4gICAgICB2YXIgbHRNYWpvciA9IDI7XG4gICAgICB2YXIgbWluTWlub3IgPSA5O1xuICAgICAgdmFyIG1pblBhdGNoID0gMTtcbiAgICAgIHZhciBtYXhNYWpvciA9IDQ7XG5cbiAgICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgVXRpbC5qUXVlcnlEZXRlY3Rpb24oKTtcbiAgc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAnYWxlcnQnO1xuICB2YXIgVkVSU0lPTiA9ICc0LjQuMSc7XG4gIHZhciBEQVRBX0tFWSA9ICdicy5hbGVydCc7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbiAgfTtcbiAgdmFyIEV2ZW50ID0ge1xuICAgIENMT1NFOiBcImNsb3NlXCIgKyBFVkVOVF9LRVksXG4gICAgQ0xPU0VEOiBcImNsb3NlZFwiICsgRVZFTlRfS0VZLFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBBTEVSVDogJ2FsZXJ0JyxcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gIH07XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIEFsZXJ0ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWxlcnQoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBBbGVydC5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZShlbGVtZW50KSB7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICByb290RWxlbWVudCA9IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudCk7XG5cbiAgICAgIGlmIChjdXN0b21FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRSb290RWxlbWVudCA9IGZ1bmN0aW9uIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB2YXIgcGFyZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFwiLlwiICsgQ2xhc3NOYW1lLkFMRVJUKVswXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl90cmlnZ2VyQ2xvc2VFdmVudCA9IGZ1bmN0aW9uIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgICB2YXIgY2xvc2VFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ0xPU0UpO1xuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGNsb3NlRXZlbnQpO1xuICAgICAgcmV0dXJuIGNsb3NlRXZlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuXG4gICAgICBpZiAoISQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAkKGVsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50LCBldmVudCk7XG4gICAgICB9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2Rlc3Ryb3lFbGVtZW50ID0gZnVuY3Rpb24gX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkuZGV0YWNoKCkudHJpZ2dlcihFdmVudC5DTE9TRUQpLnJlbW92ZSgpO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgQWxlcnQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRlbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpO1xuICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEFsZXJ0Ll9oYW5kbGVEaXNtaXNzID0gZnVuY3Rpb24gX2hhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhBbGVydCwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFsZXJ0O1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRJU01JU1MsIEFsZXJ0Ll9oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gQWxlcnQuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFsZXJ0O1xuXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBBbGVydC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQxID0gJ2J1dHRvbic7XG4gIHZhciBWRVJTSU9OJDEgPSAnNC40LjEnO1xuICB2YXIgREFUQV9LRVkkMSA9ICdicy5idXR0b24nO1xuICB2YXIgRVZFTlRfS0VZJDEgPSBcIi5cIiArIERBVEFfS0VZJDE7XG4gIHZhciBEQVRBX0FQSV9LRVkkMSA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDEgPSAkLmZuW05BTUUkMV07XG4gIHZhciBDbGFzc05hbWUkMSA9IHtcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIEJVVFRPTjogJ2J0bicsXG4gICAgRk9DVVM6ICdmb2N1cydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDEgPSB7XG4gICAgREFUQV9UT0dHTEVfQ0FSUk9UOiAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsXG4gICAgREFUQV9UT0dHTEVTOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJidXR0b25cIl0nLFxuICAgIERBVEFfVE9HR0xFU19CVVRUT05TOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSAuYnRuJyxcbiAgICBJTlBVVDogJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknLFxuICAgIEFDVElWRTogJy5hY3RpdmUnLFxuICAgIEJVVFRPTjogJy5idG4nXG4gIH07XG4gIHZhciBFdmVudCQxID0ge1xuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkMSArIERBVEFfQVBJX0tFWSQxLFxuICAgIEZPQ1VTX0JMVVJfREFUQV9BUEk6IFwiZm9jdXNcIiArIEVWRU5UX0tFWSQxICsgREFUQV9BUElfS0VZJDEgKyBcIiBcIiArIChcImJsdXJcIiArIEVWRU5UX0tFWSQxICsgREFUQV9BUElfS0VZJDEpLFxuICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZJDEgKyBEQVRBX0FQSV9LRVkkMVxuICB9O1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBCdXR0b24gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdXR0b24oZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBCdXR0b24ucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIHZhciB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlO1xuICAgICAgdmFyIGFkZEFyaWFQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIHZhciByb290RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChTZWxlY3RvciQxLkRBVEFfVE9HR0xFUylbMF07XG5cbiAgICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkMS5JTlBVVCk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkICYmIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSQxLkFDVElWRSkpIHtcbiAgICAgICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IHJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkMS5BQ1RJVkUpO1xuXG4gICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkMS5BQ1RJVkUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudC50YWdOYW1lID09PSAnTEFCRUwnICYmIGlucHV0LmNoZWNrZWQgPT09IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSQxLkFDVElWRSkpIHtcbiAgICAgICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IGEgcmFkaW8gYnV0dG9uIG9yIGNoZWNrYm94IGRvbid0IGFkZCBhIHBvaW50bGVzcy9pbnZhbGlkIGNoZWNrZWQgcHJvcGVydHkgdG8gdGhlIGlucHV0XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSQxLkFDVElWRSk7XG4gICAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgIGFkZEFyaWFQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCEodGhpcy5fZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgIGlmIChhZGRBcmlhUHJlc3NlZCkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lJDEuQUNUSVZFKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUkMS5BQ1RJVkUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQxKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZJDEpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSQxLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoQnV0dG9uLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQxO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCdXR0b247XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudCQxLkNMSUNLX0RBVEFfQVBJLCBTZWxlY3RvciQxLkRBVEFfVE9HR0xFX0NBUlJPVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmICghJChidXR0b24pLmhhc0NsYXNzKENsYXNzTmFtZSQxLkJVVFRPTikpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yJDEuQlVUVE9OKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIWJ1dHRvbiB8fCBidXR0b24uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbnB1dEJ0biA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDEuSU5QVVQpO1xuXG4gICAgICBpZiAoaW5wdXRCdG4gJiYgKGlucHV0QnRuLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCBpbnB1dEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBCdXR0b24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYnV0dG9uKSwgJ3RvZ2dsZScpO1xuICAgIH1cbiAgfSkub24oRXZlbnQkMS5GT0NVU19CTFVSX0RBVEFfQVBJLCBTZWxlY3RvciQxLkRBVEFfVE9HR0xFX0NBUlJPVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGJ1dHRvbiA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yJDEuQlVUVE9OKVswXTtcbiAgICAkKGJ1dHRvbikudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDEuRk9DVVMsIC9eZm9jdXMoaW4pPyQvLnRlc3QoZXZlbnQudHlwZSkpO1xuICB9KTtcbiAgJCh3aW5kb3cpLm9uKEV2ZW50JDEuTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICAgIC8vIGVuc3VyZSBjb3JyZWN0IGFjdGl2ZSBjbGFzcyBpcyBzZXQgdG8gbWF0Y2ggdGhlIGNvbnRyb2xzJyBhY3R1YWwgdmFsdWVzL3N0YXRlc1xuICAgIC8vIGZpbmQgYWxsIGNoZWNrYm94ZXMvcmVhZGlvIGJ1dHRvbnMgaW5zaWRlIGRhdGEtdG9nZ2xlIGdyb3Vwc1xuICAgIHZhciBidXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDEuREFUQV9UT0dHTEVTX0JVVFRPTlMpKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidXR0b25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgYnV0dG9uID0gYnV0dG9uc1tpXTtcbiAgICAgIHZhciBpbnB1dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDEuSU5QVVQpO1xuXG4gICAgICBpZiAoaW5wdXQuY2hlY2tlZCB8fCBpbnB1dC5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDbGFzc05hbWUkMS5BQ1RJVkUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lJDEuQUNUSVZFKTtcbiAgICAgIH1cbiAgICB9IC8vIGZpbmQgYWxsIGJ1dHRvbiB0b2dnbGVzXG5cblxuICAgIGJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkMS5EQVRBX1RPR0dMRSkpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0gYnV0dG9ucy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgdmFyIF9idXR0b24gPSBidXR0b25zW19pXTtcblxuICAgICAgaWYgKF9idXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIF9idXR0b24uY2xhc3NMaXN0LmFkZChDbGFzc05hbWUkMS5BQ1RJVkUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZSQxLkFDVElWRSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRSQxXSA9IEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkMV0uQ29uc3RydWN0b3IgPSBCdXR0b247XG5cbiAgJC5mbltOQU1FJDFdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDFdID0gSlFVRVJZX05PX0NPTkZMSUNUJDE7XG4gICAgcmV0dXJuIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQyID0gJ2Nhcm91c2VsJztcbiAgdmFyIFZFUlNJT04kMiA9ICc0LjQuMSc7XG4gIHZhciBEQVRBX0tFWSQyID0gJ2JzLmNhcm91c2VsJztcbiAgdmFyIEVWRU5UX0tFWSQyID0gXCIuXCIgKyBEQVRBX0tFWSQyO1xuICB2YXIgREFUQV9BUElfS0VZJDIgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQyID0gJC5mbltOQU1FJDJdO1xuICB2YXIgQVJST1dfTEVGVF9LRVlDT0RFID0gMzc7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGxlZnQgYXJyb3cga2V5XG5cbiAgdmFyIEFSUk9XX1JJR0hUX0tFWUNPREUgPSAzOTsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgcmlnaHQgYXJyb3cga2V5XG5cbiAgdmFyIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDA7IC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG4gIHZhciBTV0lQRV9USFJFU0hPTEQgPSA0MDtcbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgc2xpZGU6IGZhbHNlLFxuICAgIHBhdXNlOiAnaG92ZXInLFxuICAgIHdyYXA6IHRydWUsXG4gICAgdG91Y2g6IHRydWVcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBzbGlkZTogJyhib29sZWFufHN0cmluZyknLFxuICAgIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgd3JhcDogJ2Jvb2xlYW4nLFxuICAgIHRvdWNoOiAnYm9vbGVhbidcbiAgfTtcbiAgdmFyIERpcmVjdGlvbiA9IHtcbiAgICBORVhUOiAnbmV4dCcsXG4gICAgUFJFVjogJ3ByZXYnLFxuICAgIExFRlQ6ICdsZWZ0JyxcbiAgICBSSUdIVDogJ3JpZ2h0J1xuICB9O1xuICB2YXIgRXZlbnQkMiA9IHtcbiAgICBTTElERTogXCJzbGlkZVwiICsgRVZFTlRfS0VZJDIsXG4gICAgU0xJRDogXCJzbGlkXCIgKyBFVkVOVF9LRVkkMixcbiAgICBLRVlET1dOOiBcImtleWRvd25cIiArIEVWRU5UX0tFWSQyLFxuICAgIE1PVVNFRU5URVI6IFwibW91c2VlbnRlclwiICsgRVZFTlRfS0VZJDIsXG4gICAgTU9VU0VMRUFWRTogXCJtb3VzZWxlYXZlXCIgKyBFVkVOVF9LRVkkMixcbiAgICBUT1VDSFNUQVJUOiBcInRvdWNoc3RhcnRcIiArIEVWRU5UX0tFWSQyLFxuICAgIFRPVUNITU9WRTogXCJ0b3VjaG1vdmVcIiArIEVWRU5UX0tFWSQyLFxuICAgIFRPVUNIRU5EOiBcInRvdWNoZW5kXCIgKyBFVkVOVF9LRVkkMixcbiAgICBQT0lOVEVSRE9XTjogXCJwb2ludGVyZG93blwiICsgRVZFTlRfS0VZJDIsXG4gICAgUE9JTlRFUlVQOiBcInBvaW50ZXJ1cFwiICsgRVZFTlRfS0VZJDIsXG4gICAgRFJBR19TVEFSVDogXCJkcmFnc3RhcnRcIiArIEVWRU5UX0tFWSQyLFxuICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZJDIgKyBEQVRBX0FQSV9LRVkkMixcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZJDIgKyBEQVRBX0FQSV9LRVkkMlxuICB9O1xuICB2YXIgQ2xhc3NOYW1lJDIgPSB7XG4gICAgQ0FST1VTRUw6ICdjYXJvdXNlbCcsXG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBTTElERTogJ3NsaWRlJyxcbiAgICBSSUdIVDogJ2Nhcm91c2VsLWl0ZW0tcmlnaHQnLFxuICAgIExFRlQ6ICdjYXJvdXNlbC1pdGVtLWxlZnQnLFxuICAgIE5FWFQ6ICdjYXJvdXNlbC1pdGVtLW5leHQnLFxuICAgIFBSRVY6ICdjYXJvdXNlbC1pdGVtLXByZXYnLFxuICAgIElURU06ICdjYXJvdXNlbC1pdGVtJyxcbiAgICBQT0lOVEVSX0VWRU5UOiAncG9pbnRlci1ldmVudCdcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDIgPSB7XG4gICAgQUNUSVZFOiAnLmFjdGl2ZScsXG4gICAgQUNUSVZFX0lURU06ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nLFxuICAgIElURU06ICcuY2Fyb3VzZWwtaXRlbScsXG4gICAgSVRFTV9JTUc6ICcuY2Fyb3VzZWwtaXRlbSBpbWcnLFxuICAgIE5FWFRfUFJFVjogJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnLFxuICAgIElORElDQVRPUlM6ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycycsXG4gICAgREFUQV9TTElERTogJ1tkYXRhLXNsaWRlXSwgW2RhdGEtc2xpZGUtdG9dJyxcbiAgICBEQVRBX1JJREU6ICdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nXG4gIH07XG4gIHZhciBQb2ludGVyVHlwZSA9IHtcbiAgICBUT1VDSDogJ3RvdWNoJyxcbiAgICBQRU46ICdwZW4nXG4gIH07XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIENhcm91c2VsID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2Fyb3VzZWwoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IG51bGw7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMudG91Y2hTdGFydFggPSAwO1xuICAgICAgdGhpcy50b3VjaERlbHRhWCA9IDA7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkMi5JTkRJQ0FUT1JTKTtcbiAgICAgIHRoaXMuX3RvdWNoU3VwcG9ydGVkID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDA7XG4gICAgICB0aGlzLl9wb2ludGVyRXZlbnQgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQgfHwgd2luZG93Lk1TUG9pbnRlckV2ZW50KTtcblxuICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IENhcm91c2VsLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by5uZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5ORVhUKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLm5leHRXaGVuVmlzaWJsZSA9IGZ1bmN0aW9uIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmICQodGhpcy5fZWxlbWVudCkuaXMoJzp2aXNpYmxlJykgJiYgJCh0aGlzLl9lbGVtZW50KS5jc3MoJ3Zpc2liaWxpdHknKSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5wcmV2ID0gZnVuY3Rpb24gcHJldigpIHtcbiAgICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5QUkVWKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDIuTkVYVF9QUkVWKSkge1xuICAgICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICB0aGlzLmN5Y2xlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmN5Y2xlID0gZnVuY3Rpb24gY3ljbGUoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaW50ZXJ2YWwgJiYgIXRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8udG8gPSBmdW5jdGlvbiB0byhpbmRleCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQyLkFDVElWRV9JVEVNKTtcblxuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRXZlbnQkMi5TTElELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnRvKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGlyZWN0aW9uID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IERpcmVjdGlvbi5ORVhUIDogRGlyZWN0aW9uLlBSRVY7XG5cbiAgICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZJDIpO1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDIpO1xuICAgICAgdGhpcy5faXRlbXMgPSBudWxsO1xuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBudWxsO1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHt9LCBEZWZhdWx0LCB7fSwgY29uZmlnKTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkMiwgY29uZmlnLCBEZWZhdWx0VHlwZSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2hhbmRsZVN3aXBlID0gZnVuY3Rpb24gX2hhbmRsZVN3aXBlKCkge1xuICAgICAgdmFyIGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpO1xuXG4gICAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYO1xuICAgICAgdGhpcy50b3VjaERlbHRhWCA9IDA7IC8vIHN3aXBlIGxlZnRcblxuICAgICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9IC8vIHN3aXBlIHJpZ2h0XG5cblxuICAgICAgaWYgKGRpcmVjdGlvbiA8IDApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDIuS0VZRE9XTiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5fa2V5ZG93bihldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkMi5NT1VTRUVOVEVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnBhdXNlKGV2ZW50KTtcbiAgICAgICAgfSkub24oRXZlbnQkMi5NT1VTRUxFQVZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmN5Y2xlKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcudG91Y2gpIHtcbiAgICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuX3RvdWNoU3VwcG9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKF90aGlzMy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50Lm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgICBfdGhpczMudG91Y2hTdGFydFggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNsaWVudFg7XG4gICAgICAgIH0gZWxzZSBpZiAoIV90aGlzMy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgICAgX3RoaXMzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBtb3ZlID0gZnVuY3Rpb24gbW92ZShldmVudCkge1xuICAgICAgICAvLyBlbnN1cmUgc3dpcGluZyB3aXRoIG9uZSB0b3VjaCBhbmQgbm90IHBpbmNoaW5nXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBfdGhpczMudG91Y2hEZWx0YVggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gX3RoaXMzLnRvdWNoU3RhcnRYO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgZW5kID0gZnVuY3Rpb24gZW5kKGV2ZW50KSB7XG4gICAgICAgIGlmIChfdGhpczMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgX3RoaXMzLnRvdWNoRGVsdGFYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYIC0gX3RoaXMzLnRvdWNoU3RhcnRYO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMzLl9oYW5kbGVTd2lwZSgpO1xuXG4gICAgICAgIGlmIChfdGhpczMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG4gICAgICAgICAgX3RoaXMzLnBhdXNlKCk7XG5cbiAgICAgICAgICBpZiAoX3RoaXMzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzMy50b3VjaFRpbWVvdXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5jeWNsZShldmVudCk7XG4gICAgICAgICAgfSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIF90aGlzMy5fY29uZmlnLmludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJCh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkMi5JVEVNX0lNRykpLm9uKEV2ZW50JDIuRFJBR19TVEFSVCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkMi5QT0lOVEVSRE9XTiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkMi5QT0lOVEVSVVAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBlbmQoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lJDIuUE9JTlRFUl9FVkVOVCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JDIuVE9VQ0hTVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkMi5UT1VDSE1PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBtb3ZlKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkMi5UT1VDSEVORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGVuZChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2tleWRvd24gPSBmdW5jdGlvbiBfa2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZQ09ERTpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZQ09ERTpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldEl0ZW1JbmRleCA9IGZ1bmN0aW9uIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgICAgdGhpcy5faXRlbXMgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZSA/IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkMi5JVEVNKSkgOiBbXTtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldEl0ZW1CeURpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgICB2YXIgaXNOZXh0RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVDtcbiAgICAgIHZhciBpc1ByZXZEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWO1xuXG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgIHZhciBsYXN0SXRlbUluZGV4ID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBpc0dvaW5nVG9XcmFwID0gaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwIHx8IGlzTmV4dERpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleDtcblxuICAgICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVsdGEgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWID8gLTEgOiAxO1xuICAgICAgdmFyIGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgICAgIHJldHVybiBpdGVtSW5kZXggPT09IC0xID8gdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOiB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3RyaWdnZXJTbGlkZUV2ZW50ID0gZnVuY3Rpb24gX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgICAgdmFyIHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpO1xuXG4gICAgICB2YXIgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQyLkFDVElWRV9JVEVNKSk7XG5cbiAgICAgIHZhciBzbGlkZUV2ZW50ID0gJC5FdmVudChFdmVudCQyLlNMSURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZGVFdmVudCk7XG4gICAgICByZXR1cm4gc2xpZGVFdmVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50ID0gZnVuY3Rpb24gX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICAgIHZhciBpbmRpY2F0b3JzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yJDIuQUNUSVZFKSk7XG4gICAgICAgICQoaW5kaWNhdG9ycykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFKTtcblxuICAgICAgICB2YXIgbmV4dEluZGljYXRvciA9IHRoaXMuX2luZGljYXRvcnNFbGVtZW50LmNoaWxkcmVuW3RoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KV07XG5cbiAgICAgICAgaWYgKG5leHRJbmRpY2F0b3IpIHtcbiAgICAgICAgICAkKG5leHRJbmRpY2F0b3IpLmFkZENsYXNzKENsYXNzTmFtZSQyLkFDVElWRSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zbGlkZSA9IGZ1bmN0aW9uIF9zbGlkZShkaXJlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3RvciQyLkFDVElWRV9JVEVNKTtcblxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KTtcblxuICAgICAgdmFyIG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ICYmIHRoaXMuX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB2YXIgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudCk7XG5cbiAgICAgIHZhciBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHZhciBkaXJlY3Rpb25hbENsYXNzTmFtZTtcbiAgICAgIHZhciBvcmRlckNsYXNzTmFtZTtcbiAgICAgIHZhciBldmVudERpcmVjdGlvbk5hbWU7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUKSB7XG4gICAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ2xhc3NOYW1lJDIuTEVGVDtcbiAgICAgICAgb3JkZXJDbGFzc05hbWUgPSBDbGFzc05hbWUkMi5ORVhUO1xuICAgICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBEaXJlY3Rpb24uTEVGVDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ2xhc3NOYW1lJDIuUklHSFQ7XG4gICAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ2xhc3NOYW1lJDIuUFJFVjtcbiAgICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLlJJR0hUO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dEVsZW1lbnQgJiYgJChuZXh0RWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFKSkge1xuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpO1xuXG4gICAgICBpZiAoc2xpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpO1xuXG4gICAgICB2YXIgc2xpZEV2ZW50ID0gJC5FdmVudChFdmVudCQyLlNMSUQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KTtcblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDIuU0xJREUpKSB7XG4gICAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgICAgVXRpbC5yZWZsb3cobmV4dEVsZW1lbnQpO1xuICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICB2YXIgbmV4dEVsZW1lbnRJbnRlcnZhbCA9IHBhcnNlSW50KG5leHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlcnZhbCcpLCAxMCk7XG5cbiAgICAgICAgaWYgKG5leHRFbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWw7XG4gICAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gbmV4dEVsZW1lbnRJbnRlcnZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJChuZXh0RWxlbWVudCkucmVtb3ZlQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUgKyBcIiBcIiArIG9yZGVyQ2xhc3NOYW1lKS5hZGRDbGFzcyhDbGFzc05hbWUkMi5BQ1RJVkUpO1xuICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFICsgXCIgXCIgKyBvcmRlckNsYXNzTmFtZSArIFwiIFwiICsgZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICAgIF90aGlzNC5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJChfdGhpczQuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFKTtcbiAgICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDIuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZJDIpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gX29iamVjdFNwcmVhZDIoe30sIERlZmF1bHQsIHt9LCAkKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHt9LCBfY29uZmlnLCB7fSwgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGU7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVkkMiwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBkYXRhLnRvKGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbYWN0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgYWN0aW9uICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbYWN0aW9uXSgpO1xuICAgICAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICAgICAgZGF0YS5wYXVzZSgpO1xuICAgICAgICAgIGRhdGEuY3ljbGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIENhcm91c2VsLl9kYXRhQXBpQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gX2RhdGFBcGlDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcblxuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXTtcblxuICAgICAgaWYgKCF0YXJnZXQgfHwgISQodGFyZ2V0KS5oYXNDbGFzcyhDbGFzc05hbWUkMi5DQVJPVVNFTCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29uZmlnID0gX29iamVjdFNwcmVhZDIoe30sICQodGFyZ2V0KS5kYXRhKCksIHt9LCAkKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgIHZhciBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKTtcblxuICAgICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZyk7XG5cbiAgICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAgICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZJDIpLnRvKHNsaWRlSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2Fyb3VzZWwsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2Fyb3VzZWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudCQyLkNMSUNLX0RBVEFfQVBJLCBTZWxlY3RvciQyLkRBVEFfU0xJREUsIENhcm91c2VsLl9kYXRhQXBpQ2xpY2tIYW5kbGVyKTtcbiAgJCh3aW5kb3cpLm9uKEV2ZW50JDIuTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYXJvdXNlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkMi5EQVRBX1JJREUpKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciAkY2Fyb3VzZWwgPSAkKGNhcm91c2Vsc1tpXSk7XG5cbiAgICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkY2Fyb3VzZWwsICRjYXJvdXNlbC5kYXRhKCkpO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUUkMl0gPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkMl0uQ29uc3RydWN0b3IgPSBDYXJvdXNlbDtcblxuICAkLmZuW05BTUUkMl0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkMl0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMjtcbiAgICByZXR1cm4gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkMyA9ICdjb2xsYXBzZSc7XG4gIHZhciBWRVJTSU9OJDMgPSAnNC40LjEnO1xuICB2YXIgREFUQV9LRVkkMyA9ICdicy5jb2xsYXBzZSc7XG4gIHZhciBFVkVOVF9LRVkkMyA9IFwiLlwiICsgREFUQV9LRVkkMztcbiAgdmFyIERBVEFfQVBJX0tFWSQzID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkMyA9ICQuZm5bTkFNRSQzXTtcbiAgdmFyIERlZmF1bHQkMSA9IHtcbiAgICB0b2dnbGU6IHRydWUsXG4gICAgcGFyZW50OiAnJ1xuICB9O1xuICB2YXIgRGVmYXVsdFR5cGUkMSA9IHtcbiAgICB0b2dnbGU6ICdib29sZWFuJyxcbiAgICBwYXJlbnQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuICB9O1xuICB2YXIgRXZlbnQkMyA9IHtcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSQzLFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVkkMyxcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSQzLFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSQzLFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkMyArIERBVEFfQVBJX0tFWSQzXG4gIH07XG4gIHZhciBDbGFzc05hbWUkMyA9IHtcbiAgICBTSE9XOiAnc2hvdycsXG4gICAgQ09MTEFQU0U6ICdjb2xsYXBzZScsXG4gICAgQ09MTEFQU0lORzogJ2NvbGxhcHNpbmcnLFxuICAgIENPTExBUFNFRDogJ2NvbGxhcHNlZCdcbiAgfTtcbiAgdmFyIERpbWVuc2lvbiA9IHtcbiAgICBXSURUSDogJ3dpZHRoJyxcbiAgICBIRUlHSFQ6ICdoZWlnaHQnXG4gIH07XG4gIHZhciBTZWxlY3RvciQzID0ge1xuICAgIEFDVElWRVM6ICcuc2hvdywgLmNvbGxhcHNpbmcnLFxuICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG4gIH07XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIENvbGxhcHNlID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29sbGFwc2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1baHJlZj1cXFwiI1wiICsgZWxlbWVudC5pZCArIFwiXFxcIl0sXCIgKyAoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1bZGF0YS10YXJnZXQ9XFxcIiNcIiArIGVsZW1lbnQuaWQgKyBcIlxcXCJdXCIpKSk7XG4gICAgICB2YXIgdG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQzLkRBVEFfVE9HR0xFKSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtID0gdG9nZ2xlTGlzdFtpXTtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pO1xuICAgICAgICB2YXIgZmlsdGVyRWxlbWVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZpbHRlcihmdW5jdGlvbiAoZm91bmRFbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGZvdW5kRWxlbSA9PT0gZWxlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsO1xuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBDb2xsYXBzZS5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDMuU0hPVykpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQzLlNIT1cpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjdGl2ZXM7XG4gICAgICB2YXIgYWN0aXZlc0RhdGE7XG5cbiAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgYWN0aXZlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkMy5BQ1RJVkVTKSkuZmlsdGVyKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gX3RoaXMuX2NvbmZpZy5wYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZSQzLkNPTExBUFNFKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYWN0aXZlcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgICAgYWN0aXZlc0RhdGEgPSAkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvcikuZGF0YShEQVRBX0tFWSQzKTtcblxuICAgICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQkMy5TSE9XKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KTtcblxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLCAnaGlkZScpO1xuXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgICAkKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVkkMywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQzLkNPTExBUFNFKS5hZGRDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTSU5HKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDA7XG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTRUQpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0lORykuYWRkQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0UpLmFkZENsYXNzKENsYXNzTmFtZSQzLlNIT1cpO1xuICAgICAgICBfdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG5cbiAgICAgICAgX3RoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSk7XG5cbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudCQzLlNIT1dOKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICAgICAgdmFyIHNjcm9sbFNpemUgPSBcInNjcm9sbFwiICsgY2FwaXRhbGl6ZWREaW1lbnNpb247XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gdGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXSArIFwicHhcIjtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgISQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDMuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQkMy5ISURFKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KTtcblxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXSArIFwicHhcIjtcbiAgICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTSU5HKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTRSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDMuU0hPVyk7XG4gICAgICB2YXIgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aDtcblxuICAgICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldO1xuICAgICAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0cmlnZ2VyKTtcblxuICAgICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyICRlbGVtID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSk7XG5cbiAgICAgICAgICAgIGlmICghJGVsZW0uaGFzQ2xhc3MoQ2xhc3NOYW1lJDMuU0hPVykpIHtcbiAgICAgICAgICAgICAgJCh0cmlnZ2VyKS5hZGRDbGFzcyhDbGFzc05hbWUkMy5DT0xMQVBTRUQpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIF90aGlzMi5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcblxuICAgICAgICAkKF90aGlzMi5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0lORykuYWRkQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0UpLnRyaWdnZXIoRXZlbnQkMy5ISURERU4pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0VHJhbnNpdGlvbmluZyA9IGZ1bmN0aW9uIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmc7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQzKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBudWxsO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbDtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkMih7fSwgRGVmYXVsdCQxLCB7fSwgY29uZmlnKTtcbiAgICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpOyAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FJDMsIGNvbmZpZywgRGVmYXVsdFR5cGUkMSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldERpbWVuc2lvbiA9IGZ1bmN0aW9uIF9nZXREaW1lbnNpb24oKSB7XG4gICAgICB2YXIgaGFzV2lkdGggPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKERpbWVuc2lvbi5XSURUSCk7XG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFBhcmVudCA9IGZ1bmN0aW9uIF9nZXRQYXJlbnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHBhcmVudDtcblxuICAgICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5wYXJlbnQpKSB7XG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQ7IC8vIEl0J3MgYSBqUXVlcnkgb2JqZWN0XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50WzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZWN0b3IgPSBcIltkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXVtkYXRhLXBhcmVudD1cXFwiXCIgKyB0aGlzLl9jb25maWcucGFyZW50ICsgXCJcXFwiXVwiO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgICAgJChjaGlsZHJlbikuZWFjaChmdW5jdGlvbiAoaSwgZWxlbWVudCkge1xuICAgICAgICBfdGhpczMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksIFtlbGVtZW50XSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzID0gZnVuY3Rpb24gX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIHZhciBpc09wZW4gPSAkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQzLlNIT1cpO1xuXG4gICAgICBpZiAodHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAkKHRyaWdnZXJBcnJheSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDMuQ09MTEFQU0VELCAhaXNPcGVuKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudCA9IGZ1bmN0aW9uIF9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGw7XG4gICAgfTtcblxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gJHRoaXMuZGF0YShEQVRBX0tFWSQzKTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHt9LCBEZWZhdWx0JDEsIHt9LCAkdGhpcy5kYXRhKCksIHt9LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XG5cbiAgICAgICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVkkMywgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKENvbGxhcHNlLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkMTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29sbGFwc2U7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudCQzLkNMSUNLX0RBVEFfQVBJLCBTZWxlY3RvciQzLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciAkdHJpZ2dlciA9ICQodGhpcyk7XG4gICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpO1xuICAgIHZhciBzZWxlY3RvcnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICAkKHNlbGVjdG9ycykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRhcmdldCA9ICQodGhpcyk7XG4gICAgICB2YXIgZGF0YSA9ICR0YXJnZXQuZGF0YShEQVRBX0tFWSQzKTtcbiAgICAgIHZhciBjb25maWcgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdHJpZ2dlci5kYXRhKCk7XG5cbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkdGFyZ2V0LCBjb25maWcpO1xuICAgIH0pO1xuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRSQzXSA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQzXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlO1xuXG4gICQuZm5bTkFNRSQzXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRSQzXSA9IEpRVUVSWV9OT19DT05GTElDVCQzO1xuICAgIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQ0ID0gJ2Ryb3Bkb3duJztcbiAgdmFyIFZFUlNJT04kNCA9ICc0LjQuMSc7XG4gIHZhciBEQVRBX0tFWSQ0ID0gJ2JzLmRyb3Bkb3duJztcbiAgdmFyIEVWRU5UX0tFWSQ0ID0gXCIuXCIgKyBEQVRBX0tFWSQ0O1xuICB2YXIgREFUQV9BUElfS0VZJDQgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ0ID0gJC5mbltOQU1FJDRdO1xuICB2YXIgRVNDQVBFX0tFWUNPREUgPSAyNzsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG4gIHZhciBTUEFDRV9LRVlDT0RFID0gMzI7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHNwYWNlIGtleVxuXG4gIHZhciBUQUJfS0VZQ09ERSA9IDk7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcblxuICB2YXIgQVJST1dfVVBfS0VZQ09ERSA9IDM4OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB1cCBhcnJvdyBrZXlcblxuICB2YXIgQVJST1dfRE9XTl9LRVlDT0RFID0gNDA7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XG5cbiAgdmFyIFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDM7IC8vIE1vdXNlRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRoZSByaWdodCBidXR0b24gKGFzc3VtaW5nIGEgcmlnaHQtaGFuZGVkIG1vdXNlKVxuXG4gIHZhciBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoQVJST1dfVVBfS0VZQ09ERSArIFwifFwiICsgQVJST1dfRE9XTl9LRVlDT0RFICsgXCJ8XCIgKyBFU0NBUEVfS0VZQ09ERSk7XG4gIHZhciBFdmVudCQ0ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZJDQsXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZJDQsXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkNCxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJDQsXG4gICAgQ0xJQ0s6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ0LFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNCArIERBVEFfQVBJX0tFWSQ0LFxuICAgIEtFWURPV05fREFUQV9BUEk6IFwia2V5ZG93blwiICsgRVZFTlRfS0VZJDQgKyBEQVRBX0FQSV9LRVkkNCxcbiAgICBLRVlVUF9EQVRBX0FQSTogXCJrZXl1cFwiICsgRVZFTlRfS0VZJDQgKyBEQVRBX0FQSV9LRVkkNFxuICB9O1xuICB2YXIgQ2xhc3NOYW1lJDQgPSB7XG4gICAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gICAgU0hPVzogJ3Nob3cnLFxuICAgIERST1BVUDogJ2Ryb3B1cCcsXG4gICAgRFJPUFJJR0hUOiAnZHJvcHJpZ2h0JyxcbiAgICBEUk9QTEVGVDogJ2Ryb3BsZWZ0JyxcbiAgICBNRU5VUklHSFQ6ICdkcm9wZG93bi1tZW51LXJpZ2h0JyxcbiAgICBNRU5VTEVGVDogJ2Ryb3Bkb3duLW1lbnUtbGVmdCcsXG4gICAgUE9TSVRJT05fU1RBVElDOiAncG9zaXRpb24tc3RhdGljJ1xuICB9O1xuICB2YXIgU2VsZWN0b3IkNCA9IHtcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxcbiAgICBGT1JNX0NISUxEOiAnLmRyb3Bkb3duIGZvcm0nLFxuICAgIE1FTlU6ICcuZHJvcGRvd24tbWVudScsXG4gICAgTkFWQkFSX05BVjogJy5uYXZiYXItbmF2JyxcbiAgICBWSVNJQkxFX0lURU1TOiAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG4gIH07XG4gIHZhciBBdHRhY2htZW50TWFwID0ge1xuICAgIFRPUDogJ3RvcC1zdGFydCcsXG4gICAgVE9QRU5EOiAndG9wLWVuZCcsXG4gICAgQk9UVE9NOiAnYm90dG9tLXN0YXJ0JyxcbiAgICBCT1RUT01FTkQ6ICdib3R0b20tZW5kJyxcbiAgICBSSUdIVDogJ3JpZ2h0LXN0YXJ0JyxcbiAgICBSSUdIVEVORDogJ3JpZ2h0LWVuZCcsXG4gICAgTEVGVDogJ2xlZnQtc3RhcnQnLFxuICAgIExFRlRFTkQ6ICdsZWZ0LWVuZCdcbiAgfTtcbiAgdmFyIERlZmF1bHQkMiA9IHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgZmxpcDogdHJ1ZSxcbiAgICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gICAgcmVmZXJlbmNlOiAndG9nZ2xlJyxcbiAgICBkaXNwbGF5OiAnZHluYW1pYycsXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSQyID0ge1xuICAgIG9mZnNldDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgZmxpcDogJ2Jvb2xlYW4nLFxuICAgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgZGlzcGxheTogJ3N0cmluZycsXG4gICAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0KSdcbiAgfTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgRHJvcGRvd24gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEcm9wZG93bihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KCk7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuRElTQUJMRUQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzQWN0aXZlID0gJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5TSE9XKTtcblxuICAgICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKTtcblxuICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaG93KHRydWUpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3codXNlUG9wcGVyKSB7XG4gICAgICBpZiAodXNlUG9wcGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgdXNlUG9wcGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuRElTQUJMRUQpIHx8ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50JDQuU0hPVywgcmVsYXRlZFRhcmdldCk7XG5cbiAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICQocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEaXNhYmxlIHRvdGFsbHkgUG9wcGVyLmpzIGZvciBEcm9wZG93biBpbiBOYXZiYXJcblxuXG4gICAgICBpZiAoIXRoaXMuX2luTmF2YmFyICYmIHVzZVBvcHBlcikge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgZm9yIFBvcHBlciBkZXBlbmRlbmN5XG4gICAgICAgICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHBhcmVudDtcbiAgICAgICAgfSBlbHNlIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlOyAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIElmIGJvdW5kYXJ5IGlzIG5vdCBgc2Nyb2xsUGFyZW50YCwgdGhlbiBzZXQgcG9zaXRpb24gdG8gYHN0YXRpY2BcbiAgICAgICAgLy8gdG8gYWxsb3cgdGhlIG1lbnUgdG8gXCJlc2NhcGVcIiB0aGUgc2Nyb2xsIHBhcmVudCdzIGJvdW5kYXJpZXNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuXG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGFyeSAhPT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgICAkKHBhcmVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDQuUE9TSVRJT05fU1RBVElDKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCkpO1xuICAgICAgfSAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuXG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgJChwYXJlbnQpLmNsb3Nlc3QoU2VsZWN0b3IkNC5OQVZCQVJfTkFWKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVyk7XG4gICAgICAkKHBhcmVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykudHJpZ2dlcigkLkV2ZW50KEV2ZW50JDQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5ESVNBQkxFRCkgfHwgISQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDQuSElERSwgcmVsYXRlZFRhcmdldCk7XG5cbiAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudCk7XG5cbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVyk7XG4gICAgICAkKHBhcmVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykudHJpZ2dlcigkLkV2ZW50KEV2ZW50JDQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSk7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQ0KTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSQ0KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fbWVudSA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQ0LkNMSUNLLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgX3RoaXMudG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gX29iamVjdFNwcmVhZDIoe30sIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCwge30sICQodGhpcy5fZWxlbWVudCkuZGF0YSgpLCB7fSwgY29uZmlnKTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkNCwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0TWVudUVsZW1lbnQgPSBmdW5jdGlvbiBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgdGhpcy5fbWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDQuTUVOVSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX21lbnU7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0UGxhY2VtZW50ID0gZnVuY3Rpb24gX2dldFBsYWNlbWVudCgpIHtcbiAgICAgIHZhciAkcGFyZW50RHJvcGRvd24gPSAkKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT007IC8vIEhhbmRsZSBkcm9wdXBcblxuICAgICAgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUkNC5EUk9QVVApKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuVE9QO1xuXG4gICAgICAgIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZSQ0Lk1FTlVSSUdIVCkpIHtcbiAgICAgICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlRPUEVORDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuRFJPUFJJR0hUKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlJJR0hUO1xuICAgICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuRFJPUExFRlQpKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuTEVGVDtcbiAgICAgIH0gZWxzZSBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5NRU5VUklHSFQpKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuQk9UVE9NRU5EO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGxhY2VtZW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2RldGVjdE5hdmJhciA9IGZ1bmN0aW9uIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgICByZXR1cm4gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KCcubmF2YmFyJykubGVuZ3RoID4gMDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRPZmZzZXQgPSBmdW5jdGlvbiBfZ2V0T2Zmc2V0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9mZnNldC5mbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgZGF0YS5vZmZzZXRzID0gX29iamVjdFNwcmVhZDIoe30sIGRhdGEub2Zmc2V0cywge30sIF90aGlzMi5fY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIF90aGlzMi5fZWxlbWVudCkgfHwge30pO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0Lm9mZnNldCA9IHRoaXMuX2NvbmZpZy5vZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0UG9wcGVyQ29uZmlnID0gZnVuY3Rpb24gX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICAgIHZhciBwb3BwZXJDb25maWcgPSB7XG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmZsaXBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTsgLy8gRGlzYWJsZSBQb3BwZXIuanMgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5hcHBseVN0eWxlID0ge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMih7fSwgcG9wcGVyQ29uZmlnLCB7fSwgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyk7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSQ0KTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbDtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSQ0LCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBEcm9wZG93bi5fY2xlYXJNZW51cyA9IGZ1bmN0aW9uIF9jbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LndoaWNoID09PSBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCAhPT0gVEFCX0tFWUNPREUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRvZ2dsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkNC5EQVRBX1RPR0dMRSkpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRvZ2dsZXNbaV0pO1xuXG4gICAgICAgIHZhciBjb250ZXh0ID0gJCh0b2dnbGVzW2ldKS5kYXRhKERBVEFfS0VZJDQpO1xuICAgICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiB0b2dnbGVzW2ldXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyb3Bkb3duTWVudSA9IGNvbnRleHQuX21lbnU7XG5cbiAgICAgICAgaWYgKCEkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoID09PSBUQUJfS0VZQ09ERSkgJiYgJC5jb250YWlucyhwYXJlbnQsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDQuSElERSwgcmVsYXRlZFRhcmdldCk7XG4gICAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudCk7XG5cbiAgICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG5cblxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuX3BvcHBlcikge1xuICAgICAgICAgIGNvbnRleHQuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGRyb3Bkb3duTWVudSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDQuU0hPVyk7XG4gICAgICAgICQocGFyZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNC5TSE9XKS50cmlnZ2VyKCQuRXZlbnQoRXZlbnQkNC5ISURERU4sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50ID0gZnVuY3Rpb24gX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYXJlbnQ7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIDtcblxuICAgIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgPyBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSB8fCBldmVudC53aGljaCAhPT0gRVNDQVBFX0tFWUNPREUgJiYgKGV2ZW50LndoaWNoICE9PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgZXZlbnQud2hpY2ggIT09IEFSUk9XX1VQX0tFWUNPREUgfHwgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU2VsZWN0b3IkNC5NRU5VKS5sZW5ndGgpIDogIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQud2hpY2gpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZSQ0LkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcyk7XG5cbiAgICAgIHZhciBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNC5TSE9XKTtcblxuICAgICAgaWYgKCFpc0FjdGl2ZSAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQWN0aXZlIHx8IGlzQWN0aXZlICYmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUpKSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgICB2YXIgdG9nZ2xlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkNC5EQVRBX1RPR0dMRSk7XG4gICAgICAgICAgJCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW1zID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQ0LlZJU0lCTEVfSVRFTVMpKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICQoaXRlbSkuaXMoJzp2aXNpYmxlJyk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19VUF9LRVlDT0RFICYmIGluZGV4ID4gMCkge1xuICAgICAgICAvLyBVcFxuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gRG93blxuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaXRlbXNbaW5kZXhdLmZvY3VzKCk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhEcm9wZG93biwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT04kNDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0JDI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRUeXBlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDI7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERyb3Bkb3duO1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQkNC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3RvciQ0LkRBVEFfVE9HR0xFLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKS5vbihFdmVudCQ0LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yJDQuTUVOVSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcikub24oRXZlbnQkNC5DTElDS19EQVRBX0FQSSArIFwiIFwiICsgRXZlbnQkNC5LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uX2NsZWFyTWVudXMpLm9uKEV2ZW50JDQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yJDQuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICB9KS5vbihFdmVudCQ0LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3RvciQ0LkZPUk1fQ0hJTEQsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUUkNF0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUUkNF0uQ29uc3RydWN0b3IgPSBEcm9wZG93bjtcblxuICAkLmZuW05BTUUkNF0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkNF0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNDtcbiAgICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkNSA9ICdtb2RhbCc7XG4gIHZhciBWRVJTSU9OJDUgPSAnNC40LjEnO1xuICB2YXIgREFUQV9LRVkkNSA9ICdicy5tb2RhbCc7XG4gIHZhciBFVkVOVF9LRVkkNSA9IFwiLlwiICsgREFUQV9LRVkkNTtcbiAgdmFyIERBVEFfQVBJX0tFWSQ1ID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkNSA9ICQuZm5bTkFNRSQ1XTtcbiAgdmFyIEVTQ0FQRV9LRVlDT0RFJDEgPSAyNzsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG4gIHZhciBEZWZhdWx0JDMgPSB7XG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgZm9jdXM6IHRydWUsXG4gICAgc2hvdzogdHJ1ZVxuICB9O1xuICB2YXIgRGVmYXVsdFR5cGUkMyA9IHtcbiAgICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICAgIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gICAgZm9jdXM6ICdib29sZWFuJyxcbiAgICBzaG93OiAnYm9vbGVhbidcbiAgfTtcbiAgdmFyIEV2ZW50JDUgPSB7XG4gICAgSElERTogXCJoaWRlXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBISURFX1BSRVZFTlRFRDogXCJoaWRlUHJldmVudGVkXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSQ1LFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVkkNSxcbiAgICBGT0NVU0lOOiBcImZvY3VzaW5cIiArIEVWRU5UX0tFWSQ1LFxuICAgIFJFU0laRTogXCJyZXNpemVcIiArIEVWRU5UX0tFWSQ1LFxuICAgIENMSUNLX0RJU01JU1M6IFwiY2xpY2suZGlzbWlzc1wiICsgRVZFTlRfS0VZJDUsXG4gICAgS0VZRE9XTl9ESVNNSVNTOiBcImtleWRvd24uZGlzbWlzc1wiICsgRVZFTlRfS0VZJDUsXG4gICAgTU9VU0VVUF9ESVNNSVNTOiBcIm1vdXNldXAuZGlzbWlzc1wiICsgRVZFTlRfS0VZJDUsXG4gICAgTU9VU0VET1dOX0RJU01JU1M6IFwibW91c2Vkb3duLmRpc21pc3NcIiArIEVWRU5UX0tFWSQ1LFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNSArIERBVEFfQVBJX0tFWSQ1XG4gIH07XG4gIHZhciBDbGFzc05hbWUkNSA9IHtcbiAgICBTQ1JPTExBQkxFOiAnbW9kYWwtZGlhbG9nLXNjcm9sbGFibGUnLFxuICAgIFNDUk9MTEJBUl9NRUFTVVJFUjogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgICBCQUNLRFJPUDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgICBPUEVOOiAnbW9kYWwtb3BlbicsXG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93JyxcbiAgICBTVEFUSUM6ICdtb2RhbC1zdGF0aWMnXG4gIH07XG4gIHZhciBTZWxlY3RvciQ1ID0ge1xuICAgIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxuICAgIE1PREFMX0JPRFk6ICcubW9kYWwtYm9keScsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gICAgREFUQV9ESVNNSVNTOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgICBGSVhFRF9DT05URU5UOiAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCcsXG4gICAgU1RJQ0tZX0NPTlRFTlQ6ICcuc3RpY2t5LXRvcCdcbiAgfTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTW9kYWwgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9kaWFsb2cgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IkNS5ESUFMT0cpO1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSAwO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gTW9kYWwucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDUuRkFERSkpIHtcbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQkNS5TSE9XLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpO1xuXG4gICAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKTtcblxuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG5cbiAgICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KCk7XG5cbiAgICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KCk7XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkNS5DTElDS19ESVNNSVNTLCBTZWxlY3RvciQ1LkRBVEFfRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLl9kaWFsb2cpLm9uKEV2ZW50JDUuTU9VU0VET1dOX0RJU01JU1MsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkub25lKEV2ZW50JDUuTU9VU0VVUF9ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKF90aGlzLl9lbGVtZW50KSkge1xuICAgICAgICAgICAgX3RoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fc2hvd0JhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDUuSElERSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHZhciB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkNS5GQURFKTtcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKTtcblxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKTtcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50JDUuRk9DVVNJTik7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ1LlNIT1cpO1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQkNS5DTElDS19ESVNNSVNTKTtcbiAgICAgICQodGhpcy5fZGlhbG9nKS5vZmYoRXZlbnQkNS5NT1VTRURPV05fRElTTUlTUyk7XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl9oaWRlTW9kYWwoZXZlbnQpO1xuICAgICAgICB9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIFt3aW5kb3csIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2RpYWxvZ10uZm9yRWFjaChmdW5jdGlvbiAoaHRtbEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICQoaHRtbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkkNSk7XG4gICAgICB9KTtcbiAgICAgIC8qKlxuICAgICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEV2ZW50LkZPQ1VTSU5gIGFuZCBgRXZlbnQuQ0xJQ0tfREFUQV9BUElgXG4gICAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICAgKiBJdCB3aWxsIHJlbW92ZSBgRXZlbnQuQ0xJQ0tfREFUQV9BUElgIGV2ZW50IHRoYXQgc2hvdWxkIHJlbWFpblxuICAgICAgICovXG5cbiAgICAgICQoZG9jdW1lbnQpLm9mZihFdmVudCQ1LkZPQ1VTSU4pO1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDUpO1xuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fZGlhbG9nID0gbnVsbDtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBudWxsO1xuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBudWxsO1xuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGw7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsO1xuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSBudWxsO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaGFuZGxlVXBkYXRlID0gZnVuY3Rpb24gaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gX29iamVjdFNwcmVhZDIoe30sIERlZmF1bHQkMywge30sIGNvbmZpZyk7XG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FJDUsIGNvbmZpZywgRGVmYXVsdFR5cGUkMyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICB2YXIgaGlkZUV2ZW50UHJldmVudGVkID0gJC5FdmVudChFdmVudCQ1LkhJREVfUFJFVkVOVEVEKTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudFByZXZlbnRlZCk7XG5cbiAgICAgICAgaWYgKGhpZGVFdmVudFByZXZlbnRlZC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZSQ1LlNUQVRJQyk7XG5cbiAgICAgICAgdmFyIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZSQ1LlNUQVRJQyk7XG4gICAgICAgIH0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zaG93RWxlbWVudCA9IGZ1bmN0aW9uIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQ1LkZBREUpO1xuICAgICAgdmFyIG1vZGFsQm9keSA9IHRoaXMuX2RpYWxvZyA/IHRoaXMuX2RpYWxvZy5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yJDUuTU9EQUxfQk9EWSkgOiBudWxsO1xuXG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG5cbiAgICAgIGlmICgkKHRoaXMuX2RpYWxvZykuaGFzQ2xhc3MoQ2xhc3NOYW1lJDUuU0NST0xMQUJMRSkgJiYgbW9kYWxCb2R5KSB7XG4gICAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUkNS5TSE9XKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDUuU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG5cbiAgICAgIHZhciB0cmFuc2l0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiB0cmFuc2l0aW9uQ29tcGxldGUoKSB7XG4gICAgICAgIGlmIChfdGhpczQuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgIF90aGlzNC5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXM0Ll9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgJChfdGhpczQuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpO1xuICAgICAgICAkKHRoaXMuX2RpYWxvZykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2VuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50JDUuRk9DVVNJTikgLy8gR3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAub24oRXZlbnQkNS5GT0NVU0lOLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiYgX3RoaXM1Ll9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiYgJChfdGhpczUuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIF90aGlzNS5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRFc2NhcGVFdmVudCA9IGZ1bmN0aW9uIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudCQ1LktFWURPV05fRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSQxKSB7XG4gICAgICAgICAgICBfdGhpczYuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudCQ1LktFWURPV05fRElTTUlTUyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0UmVzaXplRXZlbnQgPSBmdW5jdGlvbiBfc2V0UmVzaXplRXZlbnQoKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50JDUuUkVTSVpFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM3LmhhbmRsZVVwZGF0ZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihFdmVudCQ1LlJFU0laRSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5faGlkZU1vZGFsID0gZnVuY3Rpb24gX2hpZGVNb2RhbCgpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpO1xuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5fc2hvd0JhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNS5PUEVOKTtcblxuICAgICAgICBfdGhpczguX3Jlc2V0QWRqdXN0bWVudHMoKTtcblxuICAgICAgICBfdGhpczguX3Jlc2V0U2Nyb2xsYmFyKCk7XG5cbiAgICAgICAgJChfdGhpczguX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQkNS5ISURERU4pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVtb3ZlQmFja2Ryb3AgPSBmdW5jdGlvbiBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgICBpZiAodGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zaG93QmFja2Ryb3AgPSBmdW5jdGlvbiBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgdmFyIGFuaW1hdGUgPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQ1LkZBREUpID8gQ2xhc3NOYW1lJDUuRkFERSA6ICcnO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NOYW1lID0gQ2xhc3NOYW1lJDUuQkFDS0RST1A7XG5cbiAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQkNS5DTElDS19ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoX3RoaXM5Ll9pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgICAgICBfdGhpczkuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXM5Ll90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fYmFja2Ryb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDUuU0hPVyk7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaykuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNS5TSE9XKTtcblxuICAgICAgICB2YXIgY2FsbGJhY2tSZW1vdmUgPSBmdW5jdGlvbiBjYWxsYmFja1JlbW92ZSgpIHtcbiAgICAgICAgICBfdGhpczkuX3JlbW92ZUJhY2tkcm9wKCk7XG5cbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZSQ1LkZBREUpKSB7XG4gICAgICAgICAgdmFyIF9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApO1xuXG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrUmVtb3ZlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrUmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9IC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAgIC8vIHRvZG8gKGZhdCk6IHRoZXNlIHNob3VsZCBwcm9iYWJseSBiZSByZWZhY3RvcmVkIG91dCBvZiBtb2RhbC5qc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICA7XG5cbiAgICBfcHJvdG8uX2FkanVzdERpYWxvZyA9IGZ1bmN0aW9uIF9hZGp1c3REaWFsb2coKSB7XG4gICAgICB2YXIgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICBpZiAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVzZXRBZGp1c3RtZW50cyA9IGZ1bmN0aW9uIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jaGVja1Njcm9sbGJhciA9IGZ1bmN0aW9uIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gcmVjdC5sZWZ0ICsgcmVjdC5yaWdodCA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9nZXRTY3JvbGxiYXJXaWR0aCgpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3NldFNjcm9sbGJhciA9IGZ1bmN0aW9uIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgICAvLyBOb3RlOiBET01Ob2RlLnN0eWxlLnBhZGRpbmdSaWdodCByZXR1cm5zIHRoZSBhY3R1YWwgdmFsdWUgb3IgJycgaWYgbm90IHNldFxuICAgICAgICAvLyAgIHdoaWxlICQoRE9NTm9kZSkuY3NzKCdwYWRkaW5nLXJpZ2h0JykgcmV0dXJucyB0aGUgY2FsY3VsYXRlZCB2YWx1ZSBvciAwIGlmIG5vdCBzZXRcbiAgICAgICAgdmFyIGZpeGVkQ29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQ1LkZJWEVEX0NPTlRFTlQpKTtcbiAgICAgICAgdmFyIHN0aWNreUNvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkNS5TVElDS1lfQ09OVEVOVCkpOyAvLyBBZGp1c3QgZml4ZWQgY29udGVudCBwYWRkaW5nXG5cbiAgICAgICAgJChmaXhlZENvbnRlbnQpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGFjdHVhbFBhZGRpbmcgPSBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGVsZW1lbnQpLmNzcygncGFkZGluZy1yaWdodCcpO1xuICAgICAgICAgICQoZWxlbWVudCkuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpLmNzcygncGFkZGluZy1yaWdodCcsIHBhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgX3RoaXMxMC5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCIpO1xuICAgICAgICB9KTsgLy8gQWRqdXN0IHN0aWNreSBjb250ZW50IG1hcmdpblxuXG4gICAgICAgICQoc3RpY2t5Q29udGVudCkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgYWN0dWFsTWFyZ2luID0gZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodDtcbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZE1hcmdpbiA9ICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcsIGFjdHVhbE1hcmdpbikuY3NzKCdtYXJnaW4tcmlnaHQnLCBwYXJzZUZsb2F0KGNhbGN1bGF0ZWRNYXJnaW4pIC0gX3RoaXMxMC5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCIpO1xuICAgICAgICB9KTsgLy8gQWRqdXN0IGJvZHkgcGFkZGluZ1xuXG4gICAgICAgIHZhciBhY3R1YWxQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICAgIHZhciBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuY3NzKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpLmNzcygncGFkZGluZy1yaWdodCcsIHBhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCIpO1xuICAgICAgfVxuXG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKENsYXNzTmFtZSQ1Lk9QRU4pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3Jlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgIHZhciBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkNS5GSVhFRF9DT05URU5UKSk7XG4gICAgICAkKGZpeGVkQ29udGVudCkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSAkKGVsZW1lbnQpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJztcbiAgICAgIH0pOyAvLyBSZXN0b3JlIHN0aWNreSBjb250ZW50XG5cbiAgICAgIHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlwiICsgU2VsZWN0b3IkNS5TVElDS1lfQ09OVEVOVCkpO1xuICAgICAgJChlbGVtZW50cykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG1hcmdpbiA9ICQoZWxlbWVudCkuZGF0YSgnbWFyZ2luLXJpZ2h0Jyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtYXJnaW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcsIG1hcmdpbikucmVtb3ZlRGF0YSgnbWFyZ2luLXJpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBSZXN0b3JlIGJvZHkgcGFkZGluZ1xuXG4gICAgICB2YXIgcGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuZGF0YSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJyc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0U2Nyb2xsYmFyV2lkdGggPSBmdW5jdGlvbiBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgICAvLyB0aHggZC53YWxzaFxuICAgICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENsYXNzTmFtZSQ1LlNDUk9MTEJBUl9NRUFTVVJFUjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICAgIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZJDUpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gX29iamVjdFNwcmVhZDIoe30sIERlZmF1bHQkMywge30sICQodGhpcykuZGF0YSgpLCB7fSwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZJDUsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldCk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ1O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkMztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudCQ1LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3RvciQ1LkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0O1xuICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpZyA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZJDUpID8gJ3RvZ2dsZScgOiBfb2JqZWN0U3ByZWFkMih7fSwgJCh0YXJnZXQpLmRhdGEoKSwge30sICQodGhpcykuZGF0YSgpKTtcblxuICAgIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQkNS5TSE9XLCBmdW5jdGlvbiAoc2hvd0V2ZW50KSB7XG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIC8vIE9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkdGFyZ2V0Lm9uZShFdmVudCQ1LkhJRERFTiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJChfdGhpczExKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgIF90aGlzMTEuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcsIHRoaXMpO1xuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRSQ1XSA9IE1vZGFsLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQ1XS5Db25zdHJ1Y3RvciA9IE1vZGFsO1xuXG4gICQuZm5bTkFNRSQ1XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRSQ1XSA9IEpRVUVSWV9OT19DT05GTElDVCQ1O1xuICAgIHJldHVybiBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCb290c3RyYXAgKHY0LjQuMSk6IHRvb2xzL3Nhbml0aXplci5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIHVyaUF0dHJzID0gWydiYWNrZ3JvdW5kJywgJ2NpdGUnLCAnaHJlZicsICdpdGVtdHlwZScsICdsb25nZGVzYycsICdwb3N0ZXInLCAnc3JjJywgJ3hsaW5rOmhyZWYnXTtcbiAgdmFyIEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaTtcbiAgdmFyIERlZmF1bHRXaGl0ZWxpc3QgPSB7XG4gICAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICAgIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gICAgYXJlYTogW10sXG4gICAgYjogW10sXG4gICAgYnI6IFtdLFxuICAgIGNvbDogW10sXG4gICAgY29kZTogW10sXG4gICAgZGl2OiBbXSxcbiAgICBlbTogW10sXG4gICAgaHI6IFtdLFxuICAgIGgxOiBbXSxcbiAgICBoMjogW10sXG4gICAgaDM6IFtdLFxuICAgIGg0OiBbXSxcbiAgICBoNTogW10sXG4gICAgaDY6IFtdLFxuICAgIGk6IFtdLFxuICAgIGltZzogWydzcmMnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICAgIGxpOiBbXSxcbiAgICBvbDogW10sXG4gICAgcDogW10sXG4gICAgcHJlOiBbXSxcbiAgICBzOiBbXSxcbiAgICBzbWFsbDogW10sXG4gICAgc3BhbjogW10sXG4gICAgc3ViOiBbXSxcbiAgICBzdXA6IFtdLFxuICAgIHN0cm9uZzogW10sXG4gICAgdTogW10sXG4gICAgdWw6IFtdXG4gIH07XG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gICAqXG4gICAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAgICovXG5cbiAgdmFyIFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlKTp8W14mOi8/I10qKD86Wy8/I118JCkpL2dpO1xuICAvKipcbiAgICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gICAqXG4gICAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAgICovXG5cbiAgdmFyIERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbYS16MC05Ky9dKz0qJC9pO1xuXG4gIGZ1bmN0aW9uIGFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpIHtcbiAgICB2YXIgYXR0ck5hbWUgPSBhdHRyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgICBpZiAodXJpQXR0cnMuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKGF0dHIubm9kZVZhbHVlLm1hdGNoKFNBRkVfVVJMX1BBVFRFUk4pIHx8IGF0dHIubm9kZVZhbHVlLm1hdGNoKERBVEFfVVJMX1BBVFRFUk4pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHJlZ0V4cCA9IGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcihmdW5jdGlvbiAoYXR0clJlZ2V4KSB7XG4gICAgICByZXR1cm4gYXR0clJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwO1xuICAgIH0pOyAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVnRXhwLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGF0dHJOYW1lLm1hdGNoKHJlZ0V4cFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIHdoaXRlTGlzdCwgc2FuaXRpemVGbikge1xuICAgIGlmICh1bnNhZmVIdG1sLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuc2FmZUh0bWw7XG4gICAgfVxuXG4gICAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzYW5pdGl6ZUZuKHVuc2FmZUh0bWwpO1xuICAgIH1cblxuICAgIHZhciBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgIHZhciBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICB2YXIgd2hpdGVsaXN0S2V5cyA9IE9iamVjdC5rZXlzKHdoaXRlTGlzdCk7XG4gICAgdmFyIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChjcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSwgbGVuKSB7XG4gICAgICB2YXIgZWwgPSBlbGVtZW50c1tpXTtcbiAgICAgIHZhciBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAod2hpdGVsaXN0S2V5cy5pbmRleE9mKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0dHJpYnV0ZUxpc3QgPSBbXS5zbGljZS5jYWxsKGVsLmF0dHJpYnV0ZXMpO1xuICAgICAgdmFyIHdoaXRlbGlzdGVkQXR0cmlidXRlcyA9IFtdLmNvbmNhdCh3aGl0ZUxpc3RbJyonXSB8fCBbXSwgd2hpdGVMaXN0W2VsTmFtZV0gfHwgW10pO1xuICAgICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKGkpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FJDYgPSAndG9vbHRpcCc7XG4gIHZhciBWRVJTSU9OJDYgPSAnNC40LjEnO1xuICB2YXIgREFUQV9LRVkkNiA9ICdicy50b29sdGlwJztcbiAgdmFyIEVWRU5UX0tFWSQ2ID0gXCIuXCIgKyBEQVRBX0tFWSQ2O1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDYgPSAkLmZuW05BTUUkNl07XG4gIHZhciBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCc7XG4gIHZhciBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBDTEFTU19QUkVGSVggKyBcIlxcXFxTK1wiLCAnZycpO1xuICB2YXIgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gWydzYW5pdGl6ZScsICd3aGl0ZUxpc3QnLCAnc2FuaXRpemVGbiddO1xuICB2YXIgRGVmYXVsdFR5cGUkNCA9IHtcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gICAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gICAgaHRtbDogJ2Jvb2xlYW4nLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIG9mZnNldDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgICBmYWxsYmFja1BsYWNlbWVudDogJyhzdHJpbmd8YXJyYXkpJyxcbiAgICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICAgIHNhbml0aXplOiAnYm9vbGVhbicsXG4gICAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gICAgd2hpdGVMaXN0OiAnb2JqZWN0JyxcbiAgICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3QpJ1xuICB9O1xuICB2YXIgQXR0YWNobWVudE1hcCQxID0ge1xuICAgIEFVVE86ICdhdXRvJyxcbiAgICBUT1A6ICd0b3AnLFxuICAgIFJJR0hUOiAncmlnaHQnLFxuICAgIEJPVFRPTTogJ2JvdHRvbScsXG4gICAgTEVGVDogJ2xlZnQnXG4gIH07XG4gIHZhciBEZWZhdWx0JDQgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICdmbGlwJyxcbiAgICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gICAgc2FuaXRpemU6IHRydWUsXG4gICAgc2FuaXRpemVGbjogbnVsbCxcbiAgICB3aGl0ZUxpc3Q6IERlZmF1bHRXaGl0ZWxpc3QsXG4gICAgcG9wcGVyQ29uZmlnOiBudWxsXG4gIH07XG4gIHZhciBIb3ZlclN0YXRlID0ge1xuICAgIFNIT1c6ICdzaG93JyxcbiAgICBPVVQ6ICdvdXQnXG4gIH07XG4gIHZhciBFdmVudCQ2ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZJDYsXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZJDYsXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkNixcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJDYsXG4gICAgSU5TRVJURUQ6IFwiaW5zZXJ0ZWRcIiArIEVWRU5UX0tFWSQ2LFxuICAgIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNixcbiAgICBGT0NVU0lOOiBcImZvY3VzaW5cIiArIEVWRU5UX0tFWSQ2LFxuICAgIEZPQ1VTT1VUOiBcImZvY3Vzb3V0XCIgKyBFVkVOVF9LRVkkNixcbiAgICBNT1VTRUVOVEVSOiBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSQ2LFxuICAgIE1PVVNFTEVBVkU6IFwibW91c2VsZWF2ZVwiICsgRVZFTlRfS0VZJDZcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSQ2ID0ge1xuICAgIEZBREU6ICdmYWRlJyxcbiAgICBTSE9XOiAnc2hvdydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDYgPSB7XG4gICAgVE9PTFRJUDogJy50b29sdGlwJyxcbiAgICBUT09MVElQX0lOTkVSOiAnLnRvb2x0aXAtaW5uZXInLFxuICAgIEFSUk9XOiAnLmFycm93J1xuICB9O1xuICB2YXIgVHJpZ2dlciA9IHtcbiAgICBIT1ZFUjogJ2hvdmVyJyxcbiAgICBGT0NVUzogJ2ZvY3VzJyxcbiAgICBDTElDSzogJ2NsaWNrJyxcbiAgICBNQU5VQUw6ICdtYW51YWwnXG4gIH07XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIFRvb2x0aXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb29sdGlwKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJyk7XG4gICAgICB9IC8vIHByaXZhdGVcblxuXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGltZW91dCA9IDA7XG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gJyc7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge307XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsOyAvLyBQcm90ZWN0ZWRcblxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLnRpcCA9IG51bGw7XG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gVG9vbHRpcC5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGVFbmFibGVkID0gZnVuY3Rpb24gdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWQ7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljaztcblxuICAgICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5fbGVhdmUobnVsbCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUkNi5TSE9XKSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub2ZmKCdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG5cbiAgICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNFbmFibGVkID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKTtcblxuICAgICAgaWYgKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IFV0aWwuZmluZFNoYWRvd1Jvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdmFyIGlzSW5UaGVEb20gPSAkLmNvbnRhaW5zKHNoYWRvd1Jvb3QgIT09IG51bGwgPyBzaGFkb3dSb290IDogdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICAgIHZhciB0aXBJZCA9IFV0aWwuZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSk7XG4gICAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpO1xuICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZSQ2LkZBREUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudCkgOiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQ7XG5cbiAgICAgICAgdmFyIGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudCk7XG5cbiAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCk7XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2dldENvbnRhaW5lcigpO1xuXG4gICAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpO1xuXG4gICAgICAgIGlmICghJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAgICQodGlwKS5hcHBlbmRUbyhjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRCk7XG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIodGhpcy5lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSk7XG4gICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUkNi5TSE9XKTsgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcblxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIF90aGlzLl9maXhUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHByZXZIb3ZlclN0YXRlID0gX3RoaXMuX2hvdmVyU3RhdGU7XG4gICAgICAgICAgX3RoaXMuX2hvdmVyU3RhdGUgPSBudWxsO1xuICAgICAgICAgICQoX3RoaXMuZWxlbWVudCkudHJpZ2dlcihfdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTik7XG5cbiAgICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgICBfdGhpcy5fbGVhdmUobnVsbCwgX3RoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDYuRkFERSkpIHtcbiAgICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLnRpcCk7XG4gICAgICAgICAgJCh0aGlzLnRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGlmIChfdGhpczIuX2hvdmVyU3RhdGUgIT09IEhvdmVyU3RhdGUuU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuX2NsZWFuVGlwQ2xhc3MoKTtcblxuICAgICAgICBfdGhpczIuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcblxuICAgICAgICAkKF90aGlzMi5lbGVtZW50KS50cmlnZ2VyKF90aGlzMi5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pO1xuXG4gICAgICAgIGlmIChfdGhpczIuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICAgIF90aGlzMi5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudCk7XG5cbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDYuU0hPVyk7IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5DTElDS10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5GT0NVU10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZTtcblxuICAgICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZSQ2LkZBREUpKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRpcCk7XG4gICAgICAgICQodGlwKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gJyc7XG4gICAgfTtcblxuICAgIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0gLy8gUHJvdGVjdGVkXG4gICAgO1xuXG4gICAgX3Byb3RvLmlzV2l0aENvbnRlbnQgPSBmdW5jdGlvbiBpc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmFkZEF0dGFjaG1lbnRDbGFzcyA9IGZ1bmN0aW9uIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgICAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhDTEFTU19QUkVGSVggKyBcIi1cIiArIGF0dGFjaG1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGlwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMudGlwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoKSB7XG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCQodGlwLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkNi5UT09MVElQX0lOTkVSKSksIHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lJDYuRkFERSArIFwiIFwiICsgQ2xhc3NOYW1lJDYuU0hPVyk7XG4gICAgfTtcblxuICAgIF9wcm90by5zZXRFbGVtZW50Q29udGVudCA9IGZ1bmN0aW9uIHNldEVsZW1lbnRDb250ZW50KCRlbGVtZW50LCBjb250ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgICAvLyBDb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICAgIGNvbnRlbnQgPSBzYW5pdGl6ZUh0bWwoY29udGVudCwgdGhpcy5jb25maWcud2hpdGVMaXN0LCB0aGlzLmNvbmZpZy5zYW5pdGl6ZUZuKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbGVtZW50Lmh0bWwoY29udGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbWVudC50ZXh0KGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRQb3BwZXJDb25maWcgPSBmdW5jdGlvbiBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGVmYXVsdEJzQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgYmVoYXZpb3I6IHRoaXMuY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgZWxlbWVudDogU2VsZWN0b3IkNi5BUlJPV1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZShkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgICBfdGhpczMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHt9LCBkZWZhdWx0QnNDb25maWcsIHt9LCB0aGlzLmNvbmZpZy5wb3BwZXJDb25maWcpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldE9mZnNldCA9IGZ1bmN0aW9uIF9nZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvZmZzZXQuZm4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGRhdGEub2Zmc2V0cyA9IF9vYmplY3RTcHJlYWQyKHt9LCBkYXRhLm9mZnNldHMsIHt9LCBfdGhpczQuY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIF90aGlzNC5lbGVtZW50KSB8fCB7fSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldENvbnRhaW5lciA9IGZ1bmN0aW9uIF9nZXRDb250YWluZXIoKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICAgIH1cblxuICAgICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcy5jb25maWcuY29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQoZG9jdW1lbnQpLmZpbmQodGhpcy5jb25maWcuY29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRBdHRhY2htZW50ID0gZnVuY3Rpb24gX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gQXR0YWNobWVudE1hcCQxW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKTtcbiAgICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAkKF90aGlzNS5lbGVtZW50KS5vbihfdGhpczUuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssIF90aGlzNS5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS50b2dnbGUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRyaWdnZXIuTUFOVUFMKSB7XG4gICAgICAgICAgdmFyIGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOiBfdGhpczUuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTjtcbiAgICAgICAgICB2YXIgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOiBfdGhpczUuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVQ7XG4gICAgICAgICAgJChfdGhpczUuZWxlbWVudCkub24oZXZlbnRJbiwgX3RoaXM1LmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1Ll9lbnRlcihldmVudCk7XG4gICAgICAgICAgfSkub24oZXZlbnRPdXQsIF90aGlzNS5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5fbGVhdmUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzNS5lbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXM1LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHt9LCB0aGlzLmNvbmZpZywge1xuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpeFRpdGxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZml4VGl0bGUgPSBmdW5jdGlvbiBfZml4VGl0bGUoKSB7XG4gICAgICB2YXIgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2VudGVyID0gZnVuY3Rpb24gX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZSQ2LlNIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KTtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1c7XG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2xlYXZlID0gZnVuY3Rpb24gX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpO1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgY29udGV4dC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2lzV2l0aEFjdGl2ZVRyaWdnZXIgPSBmdW5jdGlvbiBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIGZvciAodmFyIHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgdmFyIGRhdGFBdHRyaWJ1dGVzID0gJCh0aGlzLmVsZW1lbnQpLmRhdGEoKTtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhQXR0cikge1xuICAgICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmluZGV4T2YoZGF0YUF0dHIpICE9PSAtMSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uZmlnID0gX29iamVjdFNwcmVhZDIoe30sIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCwge30sIGRhdGFBdHRyaWJ1dGVzLCB7fSwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkNiwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcblxuICAgICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb25maWcudGVtcGxhdGUgPSBzYW5pdGl6ZUh0bWwoY29uZmlnLnRlbXBsYXRlLCBjb25maWcud2hpdGVMaXN0LCBjb25maWcuc2FuaXRpemVGbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0RGVsZWdhdGVDb25maWcgPSBmdW5jdGlvbiBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jbGVhblRpcENsYXNzID0gZnVuY3Rpb24gX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgICB2YXIgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpO1xuICAgICAgdmFyIHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWCk7XG5cbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGgpIHtcbiAgICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlID0gZnVuY3Rpb24gX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgICB2YXIgcG9wcGVySW5zdGFuY2UgPSBwb3BwZXJEYXRhLmluc3RhbmNlO1xuICAgICAgdGhpcy50aXAgPSBwb3BwZXJJbnN0YW5jZS5wb3BwZXI7XG5cbiAgICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKTtcblxuICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChwb3BwZXJEYXRhLnBsYWNlbWVudCkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2ZpeFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfZml4VHJhbnNpdGlvbigpIHtcbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHZhciBpbml0Q29uZmlnQW5pbWF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0aW9uO1xuXG4gICAgICBpZiAodGlwLmdldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkNi5GQURFKTtcbiAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGluaXRDb25maWdBbmltYXRpb247XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZJDYpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZJDYsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUb29sdGlwLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiQ2O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkNDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiTkFNRVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBOQU1FJDY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRBVEFfS0VZXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERBVEFfS0VZJDY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkV2ZW50XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50JDY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkVWRU5UX0tFWVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFVkVOVF9LRVkkNjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGUkNDtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG9vbHRpcDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkLmZuW05BTUUkNl0gPSBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQ2XS5Db25zdHJ1Y3RvciA9IFRvb2x0aXA7XG5cbiAgJC5mbltOQU1FJDZdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJDZdID0gSlFVRVJZX05PX0NPTkZMSUNUJDY7XG4gICAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkNyA9ICdwb3BvdmVyJztcbiAgdmFyIFZFUlNJT04kNyA9ICc0LjQuMSc7XG4gIHZhciBEQVRBX0tFWSQ3ID0gJ2JzLnBvcG92ZXInO1xuICB2YXIgRVZFTlRfS0VZJDcgPSBcIi5cIiArIERBVEFfS0VZJDc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkNyA9ICQuZm5bTkFNRSQ3XTtcbiAgdmFyIENMQVNTX1BSRUZJWCQxID0gJ2JzLXBvcG92ZXInO1xuICB2YXIgQlNDTFNfUFJFRklYX1JFR0VYJDEgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBDTEFTU19QUkVGSVgkMSArIFwiXFxcXFMrXCIsICdnJyk7XG5cbiAgdmFyIERlZmF1bHQkNSA9IF9vYmplY3RTcHJlYWQyKHt9LCBUb29sdGlwLkRlZmF1bHQsIHtcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICsgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgKyAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgKyAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PjwvZGl2PidcbiAgfSk7XG5cbiAgdmFyIERlZmF1bHRUeXBlJDUgPSBfb2JqZWN0U3ByZWFkMih7fSwgVG9vbHRpcC5EZWZhdWx0VHlwZSwge1xuICAgIGNvbnRlbnQ6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xuICB9KTtcblxuICB2YXIgQ2xhc3NOYW1lJDcgPSB7XG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93J1xuICB9O1xuICB2YXIgU2VsZWN0b3IkNyA9IHtcbiAgICBUSVRMRTogJy5wb3BvdmVyLWhlYWRlcicsXG4gICAgQ09OVEVOVDogJy5wb3BvdmVyLWJvZHknXG4gIH07XG4gIHZhciBFdmVudCQ3ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZJDcsXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZJDcsXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkNyxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJDcsXG4gICAgSU5TRVJURUQ6IFwiaW5zZXJ0ZWRcIiArIEVWRU5UX0tFWSQ3LFxuICAgIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNyxcbiAgICBGT0NVU0lOOiBcImZvY3VzaW5cIiArIEVWRU5UX0tFWSQ3LFxuICAgIEZPQ1VTT1VUOiBcImZvY3Vzb3V0XCIgKyBFVkVOVF9LRVkkNyxcbiAgICBNT1VTRUVOVEVSOiBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSQ3LFxuICAgIE1PVVNFTEVBVkU6IFwibW91c2VsZWF2ZVwiICsgRVZFTlRfS0VZJDdcbiAgfTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgUG9wb3ZlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9Ub29sdGlwKSB7XG4gICAgX2luaGVyaXRzTG9vc2UoUG9wb3ZlciwgX1Rvb2x0aXApO1xuXG4gICAgZnVuY3Rpb24gUG9wb3ZlcigpIHtcbiAgICAgIHJldHVybiBfVG9vbHRpcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IFBvcG92ZXIucHJvdG90eXBlO1xuXG4gICAgLy8gT3ZlcnJpZGVzXG4gICAgX3Byb3RvLmlzV2l0aENvbnRlbnQgPSBmdW5jdGlvbiBpc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KCk7XG4gICAgfTtcblxuICAgIF9wcm90by5hZGRBdHRhY2htZW50Q2xhc3MgPSBmdW5jdGlvbiBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoQ0xBU1NfUFJFRklYJDEgKyBcIi1cIiArIGF0dGFjaG1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGlwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMudGlwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoKSB7XG4gICAgICB2YXIgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpOyAvLyBXZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG5cbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yJDcuVElUTEUpLCB0aGlzLmdldFRpdGxlKCkpO1xuXG4gICAgICB2YXIgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LmNhbGwodGhpcy5lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IkNy5DT05URU5UKSwgY29udGVudCk7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ3LkZBREUgKyBcIiBcIiArIENsYXNzTmFtZSQ3LlNIT1cpO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uIF9nZXRDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpIHx8IHRoaXMuY29uZmlnLmNvbnRlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2xlYW5UaXBDbGFzcyA9IGZ1bmN0aW9uIF9jbGVhblRpcENsYXNzKCkge1xuICAgICAgdmFyICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKTtcbiAgICAgIHZhciB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgkMSk7XG5cbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSQ3KTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbDtcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSQ3LCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoUG9wb3ZlciwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICAvLyBHZXR0ZXJzXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT04kNztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0JDU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIk5BTUVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gTkFNRSQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEQVRBX0tFWVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEQVRBX0tFWSQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJFdmVudFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFdmVudCQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJFVkVOVF9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRVZFTlRfS0VZJDc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRUeXBlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBvcG92ZXI7XG4gIH0oVG9vbHRpcCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQuZm5bTkFNRSQ3XSA9IFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FJDddLkNvbnN0cnVjdG9yID0gUG9wb3ZlcjtcblxuICAkLmZuW05BTUUkN10ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkN10gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNztcbiAgICByZXR1cm4gUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSQ4ID0gJ3Njcm9sbHNweSc7XG4gIHZhciBWRVJTSU9OJDggPSAnNC40LjEnO1xuICB2YXIgREFUQV9LRVkkOCA9ICdicy5zY3JvbGxzcHknO1xuICB2YXIgRVZFTlRfS0VZJDggPSBcIi5cIiArIERBVEFfS0VZJDg7XG4gIHZhciBEQVRBX0FQSV9LRVkkNiA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDggPSAkLmZuW05BTUUkOF07XG4gIHZhciBEZWZhdWx0JDYgPSB7XG4gICAgb2Zmc2V0OiAxMCxcbiAgICBtZXRob2Q6ICdhdXRvJyxcbiAgICB0YXJnZXQ6ICcnXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSQ2ID0ge1xuICAgIG9mZnNldDogJ251bWJlcicsXG4gICAgbWV0aG9kOiAnc3RyaW5nJyxcbiAgICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuICB9O1xuICB2YXIgRXZlbnQkOCA9IHtcbiAgICBBQ1RJVkFURTogXCJhY3RpdmF0ZVwiICsgRVZFTlRfS0VZJDgsXG4gICAgU0NST0xMOiBcInNjcm9sbFwiICsgRVZFTlRfS0VZJDgsXG4gICAgTE9BRF9EQVRBX0FQSTogXCJsb2FkXCIgKyBFVkVOVF9LRVkkOCArIERBVEFfQVBJX0tFWSQ2XG4gIH07XG4gIHZhciBDbGFzc05hbWUkOCA9IHtcbiAgICBEUk9QRE9XTl9JVEVNOiAnZHJvcGRvd24taXRlbScsXG4gICAgRFJPUERPV05fTUVOVTogJ2Ryb3Bkb3duLW1lbnUnLFxuICAgIEFDVElWRTogJ2FjdGl2ZSdcbiAgfTtcbiAgdmFyIFNlbGVjdG9yJDggPSB7XG4gICAgREFUQV9TUFk6ICdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nLFxuICAgIEFDVElWRTogJy5hY3RpdmUnLFxuICAgIE5BVl9MSVNUX0dST1VQOiAnLm5hdiwgLmxpc3QtZ3JvdXAnLFxuICAgIE5BVl9MSU5LUzogJy5uYXYtbGluaycsXG4gICAgTkFWX0lURU1TOiAnLm5hdi1pdGVtJyxcbiAgICBMSVNUX0lURU1TOiAnLmxpc3QtZ3JvdXAtaXRlbScsXG4gICAgRFJPUERPV046ICcuZHJvcGRvd24nLFxuICAgIERST1BET1dOX0lURU1TOiAnLmRyb3Bkb3duLWl0ZW0nLFxuICAgIERST1BET1dOX1RPR0dMRTogJy5kcm9wZG93bi10b2dnbGUnXG4gIH07XG4gIHZhciBPZmZzZXRNZXRob2QgPSB7XG4gICAgT0ZGU0VUOiAnb2Zmc2V0JyxcbiAgICBQT1NJVElPTjogJ3Bvc2l0aW9uJ1xuICB9O1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBTY3JvbGxTcHkgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY3JvbGxTcHkoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJyA/IHdpbmRvdyA6IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX3NlbGVjdG9yID0gdGhpcy5fY29uZmlnLnRhcmdldCArIFwiIFwiICsgU2VsZWN0b3IkOC5OQVZfTElOS1MgKyBcIixcIiArICh0aGlzLl9jb25maWcudGFyZ2V0ICsgXCIgXCIgKyBTZWxlY3RvciQ4LkxJU1RfSVRFTVMgKyBcIixcIikgKyAodGhpcy5fY29uZmlnLnRhcmdldCArIFwiIFwiICsgU2VsZWN0b3IkOC5EUk9QRE9XTl9JVEVNUyk7XG4gICAgICB0aGlzLl9vZmZzZXRzID0gW107XG4gICAgICB0aGlzLl90YXJnZXRzID0gW107XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gMDtcbiAgICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub24oRXZlbnQkOC5TQ1JPTEwsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX3Byb2Nlc3MoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgICAgdGhpcy5fcHJvY2VzcygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gU2Nyb2xsU3B5LnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by5yZWZyZXNoID0gZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93ID8gT2Zmc2V0TWV0aG9kLk9GRlNFVCA6IE9mZnNldE1ldGhvZC5QT1NJVElPTjtcbiAgICAgIHZhciBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgPyBhdXRvTWV0aG9kIDogdGhpcy5fY29uZmlnLm1ldGhvZDtcbiAgICAgIHZhciBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBPZmZzZXRNZXRob2QuUE9TSVRJT04gPyB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6IDA7XG4gICAgICB0aGlzLl9vZmZzZXRzID0gW107XG4gICAgICB0aGlzLl90YXJnZXRzID0gW107XG4gICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKTtcbiAgICAgIHZhciB0YXJnZXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSk7XG4gICAgICB0YXJnZXRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0O1xuICAgICAgICB2YXIgdGFyZ2V0U2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgdmFyIHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgICAgLy8gVE9ETyAoZmF0KTogcmVtb3ZlIHNrZXRjaCByZWxpYW5jZSBvbiBqUXVlcnkgcG9zaXRpb24vb2Zmc2V0XG4gICAgICAgICAgICByZXR1cm4gWyQodGFyZ2V0KVtvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSwgdGFyZ2V0U2VsZWN0b3JdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIF90aGlzMi5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pO1xuXG4gICAgICAgIF90aGlzMi5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQ4KTtcbiAgICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub2ZmKEVWRU5UX0tFWSQ4KTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy5fc2VsZWN0b3IgPSBudWxsO1xuICAgICAgdGhpcy5fb2Zmc2V0cyA9IG51bGw7XG4gICAgICB0aGlzLl90YXJnZXRzID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHt9LCBEZWZhdWx0JDYsIHt9LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGlkID0gJChjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICBpZCA9IFV0aWwuZ2V0VUlEKE5BTUUkOCk7XG4gICAgICAgICAgJChjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcsIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy50YXJnZXQgPSBcIiNcIiArIGlkO1xuICAgICAgfVxuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FJDgsIGNvbmZpZywgRGVmYXVsdFR5cGUkNik7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID8gdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFNjcm9sbEhlaWdodCA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldE9mZnNldEhlaWdodCA9IGZ1bmN0aW9uIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fcHJvY2VzcyA9IGZ1bmN0aW9uIF9wcm9jZXNzKCkge1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX2dldFNjcm9sbFRvcCgpICsgdGhpcy5fY29uZmlnLm9mZnNldDtcblxuICAgICAgdmFyIHNjcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpO1xuXG4gICAgICB2YXIgbWF4U2Nyb2xsID0gdGhpcy5fY29uZmlnLm9mZnNldCArIHNjcm9sbEhlaWdodCAtIHRoaXMuX2dldE9mZnNldEhlaWdodCgpO1xuXG4gICAgICBpZiAodGhpcy5fc2Nyb2xsSGVpZ2h0ICE9PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdICYmIHRoaXMuX29mZnNldHNbMF0gPiAwKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZzZXRMZW5ndGggPSB0aGlzLl9vZmZzZXRzLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IG9mZnNldExlbmd0aDsgaS0tOykge1xuICAgICAgICB2YXIgaXNBY3RpdmVUYXJnZXQgPSB0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRoaXMuX3RhcmdldHNbaV0gJiYgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV0gJiYgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pO1xuXG4gICAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX3RhcmdldHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fYWN0aXZhdGUgPSBmdW5jdGlvbiBfYWN0aXZhdGUodGFyZ2V0KSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXQ7XG5cbiAgICAgIHRoaXMuX2NsZWFyKCk7XG5cbiAgICAgIHZhciBxdWVyaWVzID0gdGhpcy5fc2VsZWN0b3Iuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RvciArIFwiW2RhdGEtdGFyZ2V0PVxcXCJcIiArIHRhcmdldCArIFwiXFxcIl0sXCIgKyBzZWxlY3RvciArIFwiW2hyZWY9XFxcIlwiICsgdGFyZ2V0ICsgXCJcXFwiXVwiO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciAkbGluayA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJpZXMuam9pbignLCcpKSkpO1xuXG4gICAgICBpZiAoJGxpbmsuaGFzQ2xhc3MoQ2xhc3NOYW1lJDguRFJPUERPV05fSVRFTSkpIHtcbiAgICAgICAgJGxpbmsuY2xvc2VzdChTZWxlY3RvciQ4LkRST1BET1dOKS5maW5kKFNlbGVjdG9yJDguRFJPUERPV05fVE9HR0xFKS5hZGRDbGFzcyhDbGFzc05hbWUkOC5BQ1RJVkUpO1xuICAgICAgICAkbGluay5hZGRDbGFzcyhDbGFzc05hbWUkOC5BQ1RJVkUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rIGFzIGFjdGl2ZVxuICAgICAgICAkbGluay5hZGRDbGFzcyhDbGFzc05hbWUkOC5BQ1RJVkUpOyAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuXG4gICAgICAgICRsaW5rLnBhcmVudHMoU2VsZWN0b3IkOC5OQVZfTElTVF9HUk9VUCkucHJldihTZWxlY3RvciQ4Lk5BVl9MSU5LUyArIFwiLCBcIiArIFNlbGVjdG9yJDguTElTVF9JVEVNUykuYWRkQ2xhc3MoQ2xhc3NOYW1lJDguQUNUSVZFKTsgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG5cbiAgICAgICAgJGxpbmsucGFyZW50cyhTZWxlY3RvciQ4Lk5BVl9MSVNUX0dST1VQKS5wcmV2KFNlbGVjdG9yJDguTkFWX0lURU1TKS5jaGlsZHJlbihTZWxlY3RvciQ4Lk5BVl9MSU5LUykuYWRkQ2xhc3MoQ2xhc3NOYW1lJDguQUNUSVZFKTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS50cmlnZ2VyKEV2ZW50JDguQUNUSVZBVEUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jbGVhciA9IGZ1bmN0aW9uIF9jbGVhcigpIHtcbiAgICAgIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcikpLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lJDguQUNUSVZFKTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUkOC5BQ1RJVkUpO1xuICAgICAgfSk7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkkOCk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZJDgsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhTY3JvbGxTcHksIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OJDg7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCQ2O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTY3JvbGxTcHk7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKHdpbmRvdykub24oRXZlbnQkOC5MT0FEX0RBVEFfQVBJLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjcm9sbFNweXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IkOC5EQVRBX1NQWSkpO1xuICAgIHZhciBzY3JvbGxTcHlzTGVuZ3RoID0gc2Nyb2xsU3B5cy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gc2Nyb2xsU3B5c0xlbmd0aDsgaS0tOykge1xuICAgICAgdmFyICRzcHkgPSAkKHNjcm9sbFNweXNbaV0pO1xuXG4gICAgICBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRzcHksICRzcHkuZGF0YSgpKTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FJDhdID0gU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRSQ4XS5Db25zdHJ1Y3RvciA9IFNjcm9sbFNweTtcblxuICAkLmZuW05BTUUkOF0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUUkOF0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkODtcbiAgICByZXR1cm4gU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FJDkgPSAndGFiJztcbiAgdmFyIFZFUlNJT04kOSA9ICc0LjQuMSc7XG4gIHZhciBEQVRBX0tFWSQ5ID0gJ2JzLnRhYic7XG4gIHZhciBFVkVOVF9LRVkkOSA9IFwiLlwiICsgREFUQV9LRVkkOTtcbiAgdmFyIERBVEFfQVBJX0tFWSQ3ID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkOSA9ICQuZm5bTkFNRSQ5XTtcbiAgdmFyIEV2ZW50JDkgPSB7XG4gICAgSElERTogXCJoaWRlXCIgKyBFVkVOVF9LRVkkOSxcbiAgICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkOSxcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSQ5LFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVkkOSxcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZJDkgKyBEQVRBX0FQSV9LRVkkN1xuICB9O1xuICB2YXIgQ2xhc3NOYW1lJDkgPSB7XG4gICAgRFJPUERPV05fTUVOVTogJ2Ryb3Bkb3duLW1lbnUnLFxuICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93J1xuICB9O1xuICB2YXIgU2VsZWN0b3IkOSA9IHtcbiAgICBEUk9QRE9XTjogJy5kcm9wZG93bicsXG4gICAgTkFWX0xJU1RfR1JPVVA6ICcubmF2LCAubGlzdC1ncm91cCcsXG4gICAgQUNUSVZFOiAnLmFjdGl2ZScsXG4gICAgQUNUSVZFX1VMOiAnPiBsaSA+IC5hY3RpdmUnLFxuICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJyxcbiAgICBEUk9QRE9XTl9UT0dHTEU6ICcuZHJvcGRvd24tdG9nZ2xlJyxcbiAgICBEUk9QRE9XTl9BQ1RJVkVfQ0hJTEQ6ICc+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG4gIH07XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIFRhYiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhYihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IFRhYi5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUkOS5BQ1RJVkUpIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lJDkuRElTQUJMRUQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhcmdldDtcbiAgICAgIHZhciBwcmV2aW91cztcbiAgICAgIHZhciBsaXN0RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChTZWxlY3RvciQ5Lk5BVl9MSVNUX0dST1VQKVswXTtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICAgIHZhciBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNlbGVjdG9yJDkuQUNUSVZFX1VMIDogU2VsZWN0b3IkOS5BQ1RJVkU7XG4gICAgICAgIHByZXZpb3VzID0gJC5tYWtlQXJyYXkoJChsaXN0RWxlbWVudCkuZmluZChpdGVtU2VsZWN0b3IpKTtcbiAgICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQkOS5ISURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pO1xuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQkOS5TSE9XLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZUV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl9lbGVtZW50LCBsaXN0RWxlbWVudCk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICB2YXIgaGlkZGVuRXZlbnQgPSAkLkV2ZW50KEV2ZW50JDkuSElEREVOLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogX3RoaXMuX2VsZW1lbnRcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudCQ5LlNIT1dOLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgICAgfSk7XG4gICAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZGVuRXZlbnQpO1xuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkOSk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2FjdGl2YXRlID0gZnVuY3Rpb24gX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgYWN0aXZlRWxlbWVudHMgPSBjb250YWluZXIgJiYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBjb250YWluZXIubm9kZU5hbWUgPT09ICdPTCcpID8gJChjb250YWluZXIpLmZpbmQoU2VsZWN0b3IkOS5BQ1RJVkVfVUwpIDogJChjb250YWluZXIpLmNoaWxkcmVuKFNlbGVjdG9yJDkuQUNUSVZFKTtcbiAgICAgIHZhciBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXTtcbiAgICAgIHZhciBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiBhY3RpdmUgJiYgJChhY3RpdmUpLmhhc0NsYXNzKENsYXNzTmFtZSQ5LkZBREUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5fdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spO1xuICAgICAgfTtcblxuICAgICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlKTtcbiAgICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZSQ5LlNIT1cpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fdHJhbnNpdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkOS5BQ1RJVkUpO1xuICAgICAgICB2YXIgZHJvcGRvd25DaGlsZCA9ICQoYWN0aXZlLnBhcmVudE5vZGUpLmZpbmQoU2VsZWN0b3IkOS5EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQpWzBdO1xuXG4gICAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgICAgJChkcm9wZG93bkNoaWxkKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUkOS5BQ1RJVkUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lJDkuQUNUSVZFKTtcblxuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIFV0aWwucmVmbG93KGVsZW1lbnQpO1xuXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lJDkuRkFERSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZSQ5LlNIT1cpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmICQoZWxlbWVudC5wYXJlbnROb2RlKS5oYXNDbGFzcyhDbGFzc05hbWUkOS5EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgICB2YXIgZHJvcGRvd25FbGVtZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yJDkuRFJPUERPV04pWzBdO1xuXG4gICAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgZHJvcGRvd25Ub2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkcm9wZG93bkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3RvciQ5LkRST1BET1dOX1RPR0dMRSkpO1xuICAgICAgICAgICQoZHJvcGRvd25Ub2dnbGVMaXN0KS5hZGRDbGFzcyhDbGFzc05hbWUkOS5BQ1RJVkUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZJDkpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVGFiKHRoaXMpO1xuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVkkOSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFRhYiwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT04kOTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGFiO1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQkOS5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IkOS5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3Nob3cnKTtcbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUUkOV0gPSBUYWIuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FJDldLkNvbnN0cnVjdG9yID0gVGFiO1xuXG4gICQuZm5bTkFNRSQ5XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRSQ5XSA9IEpRVUVSWV9OT19DT05GTElDVCQ5O1xuICAgIHJldHVybiBUYWIuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUkYSA9ICd0b2FzdCc7XG4gIHZhciBWRVJTSU9OJGEgPSAnNC40LjEnO1xuICB2YXIgREFUQV9LRVkkYSA9ICdicy50b2FzdCc7XG4gIHZhciBFVkVOVF9LRVkkYSA9IFwiLlwiICsgREFUQV9LRVkkYTtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCRhID0gJC5mbltOQU1FJGFdO1xuICB2YXIgRXZlbnQkYSA9IHtcbiAgICBDTElDS19ESVNNSVNTOiBcImNsaWNrLmRpc21pc3NcIiArIEVWRU5UX0tFWSRhLFxuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZJGEsXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZJGEsXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkYSxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZJGFcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSRhID0ge1xuICAgIEZBREU6ICdmYWRlJyxcbiAgICBISURFOiAnaGlkZScsXG4gICAgU0hPVzogJ3Nob3cnLFxuICAgIFNIT1dJTkc6ICdzaG93aW5nJ1xuICB9O1xuICB2YXIgRGVmYXVsdFR5cGUkNyA9IHtcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICAgIGRlbGF5OiAnbnVtYmVyJ1xuICB9O1xuICB2YXIgRGVmYXVsdCQ3ID0ge1xuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBhdXRvaGlkZTogdHJ1ZSxcbiAgICBkZWxheTogNTAwXG4gIH07XG4gIHZhciBTZWxlY3RvciRhID0ge1xuICAgIERBVEFfRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJ0b2FzdFwiXSdcbiAgfTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgVG9hc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb2FzdChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcblxuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBUb2FzdC5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudCRhLlNIT1cpO1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lJGEuRkFERSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBfdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZSRhLlNIT1dJTkcpO1xuXG4gICAgICAgIF90aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lJGEuU0hPVyk7XG5cbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudCRhLlNIT1dOKTtcblxuICAgICAgICBpZiAoX3RoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICAgIF90aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oaWRlKCk7XG4gICAgICAgICAgfSwgX3RoaXMuX2NvbmZpZy5kZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUkYS5ISURFKTtcblxuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUkYS5TSE9XSU5HKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUkYS5TSE9XKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50JGEuSElERSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lJGEuU0hPVykpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZSRhLlNIT1cpO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudCRhLkNMSUNLX0RJU01JU1MpO1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJGEpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHt9LCBEZWZhdWx0JDcsIHt9LCAkKHRoaXMuX2VsZW1lbnQpLmRhdGEoKSwge30sIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUkYSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0TGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50JGEuQ0xJQ0tfRElTTUlTUywgU2VsZWN0b3IkYS5EQVRBX0RJU01JU1MsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5oaWRlKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jbG9zZSA9IGZ1bmN0aW9uIF9jbG9zZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgX3RoaXMzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lJGEuSElERSk7XG5cbiAgICAgICAgJChfdGhpczMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQkYS5ISURERU4pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZSRhLlNIT1cpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgVG9hc3QuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRlbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZJGEpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSRhLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFRvYXN0LCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTiRhO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ3O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQkNztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG9hc3Q7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJC5mbltOQU1FJGFdID0gVG9hc3QuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FJGFdLkNvbnN0cnVjdG9yID0gVG9hc3Q7XG5cbiAgJC5mbltOQU1FJGFdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FJGFdID0gSlFVRVJZX05PX0NPTkZMSUNUJGE7XG4gICAgcmV0dXJuIFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgZXhwb3J0cy5BbGVydCA9IEFsZXJ0O1xuICBleHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcbiAgZXhwb3J0cy5DYXJvdXNlbCA9IENhcm91c2VsO1xuICBleHBvcnRzLkNvbGxhcHNlID0gQ29sbGFwc2U7XG4gIGV4cG9ydHMuRHJvcGRvd24gPSBEcm9wZG93bjtcbiAgZXhwb3J0cy5Nb2RhbCA9IE1vZGFsO1xuICBleHBvcnRzLlBvcG92ZXIgPSBQb3BvdmVyO1xuICBleHBvcnRzLlNjcm9sbHNweSA9IFNjcm9sbFNweTtcbiAgZXhwb3J0cy5UYWIgPSBUYWI7XG4gIGV4cG9ydHMuVG9hc3QgPSBUb2FzdDtcbiAgZXhwb3J0cy5Ub29sdGlwID0gVG9vbHRpcDtcbiAgZXhwb3J0cy5VdGlsID0gVXRpbDtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHV0aWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuY29uc3QgTUFYX1VJRCA9IDEwMDAwMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5mdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgcmV0dXJuIHtcbiAgICBiaW5kVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgZGVsZWdhdGVUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBoYW5kbGUoZXZlbnQpIHtcbiAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZmluZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gIH0pXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICB9XG4gIH0sIGR1cmF0aW9uKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xuICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yXG4gICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdWJsaWMgVXRpbCBBcGlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVXRpbCA9IHtcblxuICBUUkFOU0lUSU9OX0VORDogJ2JzVHJhbnNpdGlvbkVuZCcsXG5cbiAgZ2V0VUlEKHByZWZpeCkge1xuICAgIGRvIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuICAgIHJldHVybiBwcmVmaXhcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgICBjb25zdCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6ICcnXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb24gPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpXG4gICAgbGV0IHRyYW5zaXRpb25EZWxheSA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWRlbGF5JylcblxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAgIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbiAgfSxcblxuICByZWZsb3coZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICB9LFxuXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgLy8gVE9ETzogUmVtb3ZlIGluIHY1XG4gIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZVxuICB9LFxuXG4gIHR5cGVDaGVja0NvbmZpZyhjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWUgICAgICAgICA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlICAgICA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKVxuICAgICAgICAgID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcbiAgICAgICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGZpbmRTaGFkb3dSb290KGVsZW1lbnQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICAgIH1cblxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBVdGlsLmZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgfSxcblxuICBqUXVlcnlEZXRlY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKVxuICAgIH1cblxuICAgIGNvbnN0IHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJylcbiAgICBjb25zdCBtaW5NYWpvciA9IDFcbiAgICBjb25zdCBsdE1ham9yID0gMlxuICAgIGNvbnN0IG1pbk1pbm9yID0gOVxuICAgIGNvbnN0IG1pblBhdGNoID0gMVxuICAgIGNvbnN0IG1heE1ham9yID0gNFxuXG4gICAgaWYgKHZlcnNpb25bMF0gPCBsdE1ham9yICYmIHZlcnNpb25bMV0gPCBtaW5NaW5vciB8fCB2ZXJzaW9uWzBdID09PSBtaW5NYWpvciAmJiB2ZXJzaW9uWzFdID09PSBtaW5NaW5vciAmJiB2ZXJzaW9uWzJdIDwgbWluUGF0Y2ggfHwgdmVyc2lvblswXSA+PSBtYXhNYWpvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpXG4gICAgfVxuICB9XG59XG5cblV0aWwualF1ZXJ5RGV0ZWN0aW9uKClcbnNldFRyYW5zaXRpb25FbmRTdXBwb3J0KClcblxuZXhwb3J0IGRlZmF1bHQgVXRpbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2FsZXJ0J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERJU01JU1MgOiAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQ0xPU0UgICAgICAgICAgOiBgY2xvc2Uke0VWRU5UX0tFWX1gLFxuICBDTE9TRUQgICAgICAgICA6IGBjbG9zZWQke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBBTEVSVCA6ICdhbGVydCcsXG4gIEZBREUgIDogJ2ZhZGUnLFxuICBTSE9XICA6ICdzaG93J1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQWxlcnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGNsb3NlKGVsZW1lbnQpIHtcbiAgICBsZXQgcm9vdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJvb3RFbGVtZW50ID0gdGhpcy5fZ2V0Um9vdEVsZW1lbnQoZWxlbWVudClcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21FdmVudCA9IHRoaXMuX3RyaWdnZXJDbG9zZUV2ZW50KHJvb3RFbGVtZW50KVxuXG4gICAgaWYgKGN1c3RvbUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgbGV0IHBhcmVudCAgICAgPSBmYWxzZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICBwYXJlbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoYC4ke0NsYXNzTmFtZS5BTEVSVH1gKVswXVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgY29uc3QgY2xvc2VFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ0xPU0UpXG5cbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoY2xvc2VFdmVudClcbiAgICByZXR1cm4gY2xvc2VFdmVudFxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAoISQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgJChlbGVtZW50KVxuICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoZXZlbnQpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQsIGV2ZW50KSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudClcbiAgICAgIC5kZXRhY2goKVxuICAgICAgLnRyaWdnZXIoRXZlbnQuQ0xPU0VEKVxuICAgICAgLnJlbW92ZSgpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKVxuICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2hhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihcbiAgRXZlbnQuQ0xJQ0tfREFUQV9BUEksXG4gIFNlbGVjdG9yLkRJU01JU1MsXG4gIEFsZXJ0Ll9oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKVxuKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdICAgICAgICAgICAgID0gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFsZXJ0XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IGJ1dHRvbi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2J1dHRvbidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEFDVElWRSA6ICdhY3RpdmUnLFxuICBCVVRUT04gOiAnYnRuJyxcbiAgRk9DVVMgIDogJ2ZvY3VzJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9UT0dHTEVfQ0FSUk9UICAgOiAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsXG4gIERBVEFfVE9HR0xFUyAgICAgICAgIDogJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nLFxuICBEQVRBX1RPR0dMRSAgICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJidXR0b25cIl0nLFxuICBEQVRBX1RPR0dMRVNfQlVUVE9OUyA6ICdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdIC5idG4nLFxuICBJTlBVVCAgICAgICAgICAgICAgICA6ICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJyxcbiAgQUNUSVZFICAgICAgICAgICAgICAgOiAnLmFjdGl2ZScsXG4gIEJVVFRPTiAgICAgICAgICAgICAgIDogJy5idG4nXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBDTElDS19EQVRBX0FQSSAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgRk9DVVNfQkxVUl9EQVRBX0FQSSA6IGBmb2N1cyR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYGJsdXIke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBMT0FEX0RBVEFfQVBJICAgICAgIDogYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBsZXQgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZVxuICAgIGxldCBhZGRBcmlhUHJlc3NlZCA9IHRydWVcbiAgICBjb25zdCByb290RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChcbiAgICAgIFNlbGVjdG9yLkRBVEFfVE9HR0xFU1xuICAgIClbMF1cblxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSU5QVVQpXG5cbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkICYmXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSkge1xuICAgICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gZmFsc2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFKVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudC50YWdOYW1lID09PSAnTEFCRUwnICYmIGlucHV0LmNoZWNrZWQgPT09IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBpdCdzIG5vdCBhIHJhZGlvIGJ1dHRvbiBvciBjaGVja2JveCBkb24ndCBhZGQgYSBwb2ludGxlc3MvaW52YWxpZCBjaGVja2VkIHByb3BlcnR5IHRvIHRoZSBpbnB1dFxuICAgICAgICAgIHRyaWdnZXJDaGFuZ2VFdmVudCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgICAgICQoaW5wdXQpLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5mb2N1cygpXG4gICAgICAgIGFkZEFyaWFQcmVzc2VkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLl9lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkpIHtcbiAgICAgIGlmIChhZGRBcmlhUHJlc3NlZCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJyxcbiAgICAgICAgICAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCdXR0b24odGhpcylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFX0NBUlJPVCwgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldFxuXG4gICAgaWYgKCEkKGJ1dHRvbikuaGFzQ2xhc3MoQ2xhc3NOYW1lLkJVVFRPTikpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yLkJVVFRPTilbMF1cbiAgICB9XG5cbiAgICBpZiAoIWJ1dHRvbiB8fCBidXR0b24uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gd29yayBhcm91bmQgRmlyZWZveCBidWcgIzE1NDA5OTVcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5wdXRCdG4gPSBidXR0b24ucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JTlBVVClcblxuICAgICAgaWYgKGlucHV0QnRuICYmIChpbnB1dEJ0bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgaW5wdXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBCdXR0b24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYnV0dG9uKSwgJ3RvZ2dsZScpXG4gICAgfVxuICB9KVxuICAub24oRXZlbnQuRk9DVVNfQkxVUl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEVfQ0FSUk9ULCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChTZWxlY3Rvci5CVVRUT04pWzBdXG4gICAgJChidXR0b24pLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5GT0NVUywgL15mb2N1cyhpbik/JC8udGVzdChldmVudC50eXBlKSlcbiAgfSlcblxuJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksICgpID0+IHtcbiAgLy8gZW5zdXJlIGNvcnJlY3QgYWN0aXZlIGNsYXNzIGlzIHNldCB0byBtYXRjaCB0aGUgY29udHJvbHMnIGFjdHVhbCB2YWx1ZXMvc3RhdGVzXG5cbiAgLy8gZmluZCBhbGwgY2hlY2tib3hlcy9yZWFkaW8gYnV0dG9ucyBpbnNpZGUgZGF0YS10b2dnbGUgZ3JvdXBzXG4gIGxldCBidXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfVE9HR0xFU19CVVRUT05TKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGJ1dHRvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBidXR0b24gPSBidXR0b25zW2ldXG4gICAgY29uc3QgaW5wdXQgPSBidXR0b24ucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JTlBVVClcbiAgICBpZiAoaW5wdXQuY2hlY2tlZCB8fCBpbnB1dC5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9XG4gIH1cblxuICAvLyBmaW5kIGFsbCBidXR0b24gdG9nZ2xlc1xuICBidXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfVE9HR0xFKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGJ1dHRvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBidXR0b24gPSBidXR0b25zW2ldXG4gICAgaWYgKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBCdXR0b25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICAgPSAnY2Fyb3VzZWwnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgID0gJC5mbltOQU1FXVxuY29uc3QgQVJST1dfTEVGVF9LRVlDT0RFICAgICA9IDM3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGxlZnQgYXJyb3cga2V5XG5jb25zdCBBUlJPV19SSUdIVF9LRVlDT0RFICAgID0gMzkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgcmlnaHQgYXJyb3cga2V5XG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEICAgICAgICA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsIDogNTAwMCxcbiAga2V5Ym9hcmQgOiB0cnVlLFxuICBzbGlkZSAgICA6IGZhbHNlLFxuICBwYXVzZSAgICA6ICdob3ZlcicsXG4gIHdyYXAgICAgIDogdHJ1ZSxcbiAgdG91Y2ggICAgOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbCA6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQgOiAnYm9vbGVhbicsXG4gIHNsaWRlICAgIDogJyhib29sZWFufHN0cmluZyknLFxuICBwYXVzZSAgICA6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcCAgICAgOiAnYm9vbGVhbicsXG4gIHRvdWNoICAgIDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IERpcmVjdGlvbiA9IHtcbiAgTkVYVCAgICAgOiAnbmV4dCcsXG4gIFBSRVYgICAgIDogJ3ByZXYnLFxuICBMRUZUICAgICA6ICdsZWZ0JyxcbiAgUklHSFQgICAgOiAncmlnaHQnXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBTTElERSAgICAgICAgICA6IGBzbGlkZSR7RVZFTlRfS0VZfWAsXG4gIFNMSUQgICAgICAgICAgIDogYHNsaWQke0VWRU5UX0tFWX1gLFxuICBLRVlET1dOICAgICAgICA6IGBrZXlkb3duJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUiAgICAgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgICAgIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gLFxuICBUT1VDSFNUQVJUICAgICA6IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YCxcbiAgVE9VQ0hNT1ZFICAgICAgOiBgdG91Y2htb3ZlJHtFVkVOVF9LRVl9YCxcbiAgVE9VQ0hFTkQgICAgICAgOiBgdG91Y2hlbmQke0VWRU5UX0tFWX1gLFxuICBQT0lOVEVSRE9XTiAgICA6IGBwb2ludGVyZG93biR7RVZFTlRfS0VZfWAsXG4gIFBPSU5URVJVUCAgICAgIDogYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWAsXG4gIERSQUdfU1RBUlQgICAgIDogYGRyYWdzdGFydCR7RVZFTlRfS0VZfWAsXG4gIExPQURfREFUQV9BUEkgIDogYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBDQVJPVVNFTCAgICAgIDogJ2Nhcm91c2VsJyxcbiAgQUNUSVZFICAgICAgICA6ICdhY3RpdmUnLFxuICBTTElERSAgICAgICAgIDogJ3NsaWRlJyxcbiAgUklHSFQgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLXJpZ2h0JyxcbiAgTEVGVCAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLWxlZnQnLFxuICBORVhUICAgICAgICAgIDogJ2Nhcm91c2VsLWl0ZW0tbmV4dCcsXG4gIFBSRVYgICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1wcmV2JyxcbiAgSVRFTSAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtJyxcbiAgUE9JTlRFUl9FVkVOVCA6ICdwb2ludGVyLWV2ZW50J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgQUNUSVZFICAgICAgOiAnLmFjdGl2ZScsXG4gIEFDVElWRV9JVEVNIDogJy5hY3RpdmUuY2Fyb3VzZWwtaXRlbScsXG4gIElURU0gICAgICAgIDogJy5jYXJvdXNlbC1pdGVtJyxcbiAgSVRFTV9JTUcgICAgOiAnLmNhcm91c2VsLWl0ZW0gaW1nJyxcbiAgTkVYVF9QUkVWICAgOiAnLmNhcm91c2VsLWl0ZW0tbmV4dCwgLmNhcm91c2VsLWl0ZW0tcHJldicsXG4gIElORElDQVRPUlMgIDogJy5jYXJvdXNlbC1pbmRpY2F0b3JzJyxcbiAgREFUQV9TTElERSAgOiAnW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b10nLFxuICBEQVRBX1JJREUgICA6ICdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nXG59XG5cbmNvbnN0IFBvaW50ZXJUeXBlID0ge1xuICBUT1VDSCA6ICd0b3VjaCcsXG4gIFBFTiAgIDogJ3Blbidcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2l0ZW1zICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgICAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkICAgICAgPSBmYWxzZVxuICAgIHRoaXMuX2lzU2xpZGluZyAgICAgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ICAgPSBudWxsXG4gICAgdGhpcy50b3VjaFN0YXJ0WCAgICA9IDBcbiAgICB0aGlzLnRvdWNoRGVsdGFYICAgID0gMFxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLklORElDQVRPUlMpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgICAgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCAgICAgID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50IHx8IHdpbmRvdy5NU1BvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRGlyZWN0aW9uLk5FWFQpXG4gICAgfVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiZcbiAgICAgICgkKHRoaXMuX2VsZW1lbnQpLmlzKCc6dmlzaWJsZScpICYmICQodGhpcy5fZWxlbWVudCkuY3NzKCd2aXNpYmlsaXR5JykgIT09ICdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShEaXJlY3Rpb24uUFJFVilcbiAgICB9XG4gIH1cblxuICBwYXVzZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTkVYVF9QUkVWKSkge1xuICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFX0lURU0pXG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9hY3RpdmVFbGVtZW50KVxuXG4gICAgaWYgKGluZGV4ID4gdGhpcy5faXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKEV2ZW50LlNMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGluZGV4ID4gYWN0aXZlSW5kZXhcbiAgICAgID8gRGlyZWN0aW9uLk5FWFRcbiAgICAgIDogRGlyZWN0aW9uLlBSRVZcblxuICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5faXRlbXMgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCAgICAgPSBudWxsXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGF4IC8gdGhpcy50b3VjaERlbHRhWFxuXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIC8vIHN3aXBlIGxlZnRcbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgICAgdGhpcy5wcmV2KClcbiAgICB9XG5cbiAgICAvLyBzd2lwZSByaWdodFxuICAgIGlmIChkaXJlY3Rpb24gPCAwKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbihFdmVudC5LRVlET1dOLCAoZXZlbnQpID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uKEV2ZW50Lk1PVVNFRU5URVIsIChldmVudCkgPT4gdGhpcy5wYXVzZShldmVudCkpXG4gICAgICAgIC5vbihFdmVudC5NT1VTRUxFQVZFLCAoZXZlbnQpID0+IHRoaXMuY3ljbGUoZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2gpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICghdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50Lm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WFxuICAgICAgfSBlbHNlIGlmICghdGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoKGV2ZW50KSA9PiB0aGlzLmN5Y2xlKGV2ZW50KSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5JVEVNX0lNRykpLm9uKEV2ZW50LkRSQUdfU1RBUlQsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5QT0lOVEVSRE9XTiwgKGV2ZW50KSA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlBPSU5URVJVUCwgKGV2ZW50KSA9PiBlbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlBPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuVE9VQ0hTVEFSVCwgKGV2ZW50KSA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlRPVUNITU9WRSwgKGV2ZW50KSA9PiBtb3ZlKGV2ZW50KSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuVE9VQ0hFTkQsIChldmVudCkgPT4gZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWUNPREU6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZQ09ERTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICA/IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSVRFTSkpXG4gICAgICA6IFtdXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgY29uc3QgaXNOZXh0RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVFxuICAgIGNvbnN0IGlzUHJldkRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVZcbiAgICBjb25zdCBhY3RpdmVJbmRleCAgICAgPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBsYXN0SXRlbUluZGV4ICAgPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxXG4gICAgY29uc3QgaXNHb2luZ1RvV3JhcCAgID0gaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXh0RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4XG5cbiAgICBpZiAoaXNHb2luZ1RvV3JhcCAmJiAhdGhpcy5fY29uZmlnLndyYXApIHtcbiAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGEgICAgID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFViA/IC0xIDogMVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTFcbiAgICAgID8gdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOiB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdXG4gIH1cblxuICBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRV9JVEVNKSlcbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5TTElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgdG86IHRhcmdldEluZGV4XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkZUV2ZW50KVxuXG4gICAgcmV0dXJuIHNsaWRlRXZlbnRcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX2luZGljYXRvcnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQUNUSVZFKSlcbiAgICAgICQoaW5kaWNhdG9ycylcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IG5leHRJbmRpY2F0b3IgPSB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5jaGlsZHJlbltcbiAgICAgICAgdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpXG4gICAgICBdXG5cbiAgICAgIGlmIChuZXh0SW5kaWNhdG9yKSB7XG4gICAgICAgICQobmV4dEluZGljYXRvcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc2xpZGUoZGlyZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5BQ1RJVkVfSVRFTSlcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudCAgID0gZWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ICYmXG4gICAgICB0aGlzLl9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcblxuICAgIGxldCBkaXJlY3Rpb25hbENsYXNzTmFtZVxuICAgIGxldCBvcmRlckNsYXNzTmFtZVxuICAgIGxldCBldmVudERpcmVjdGlvbk5hbWVcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUKSB7XG4gICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZS5MRUZUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENsYXNzTmFtZS5ORVhUXG4gICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBEaXJlY3Rpb24uTEVGVFxuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZS5SSUdIVFxuICAgICAgb3JkZXJDbGFzc05hbWUgPSBDbGFzc05hbWUuUFJFVlxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLlJJR0hUXG4gICAgfVxuXG4gICAgaWYgKG5leHRFbGVtZW50ICYmICQobmV4dEVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHNsaWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0xJRCwge1xuICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgfSlcblxuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TTElERSkpIHtcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgICBVdGlsLnJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgICAgJChhY3RpdmVFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICBjb25zdCBuZXh0RWxlbWVudEludGVydmFsID0gcGFyc2VJbnQobmV4dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWludGVydmFsJyksIDEwKVxuICAgICAgaWYgKG5leHRFbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IG5leHRFbGVtZW50SW50ZXJ2YWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlRWxlbWVudClcblxuICAgICAgJChhY3RpdmVFbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICAgICAgICAkKG5leHRFbGVtZW50KVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGAke2RpcmVjdGlvbmFsQ2xhc3NOYW1lfSAke29yZGVyQ2xhc3NOYW1lfWApXG4gICAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkFDVElWRX0gJHtvcmRlckNsYXNzTmFtZX0gJHtkaXJlY3Rpb25hbENsYXNzTmFtZX1gKVxuXG4gICAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudCksIDApXG4gICAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KVxuICAgIH1cblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBsZXQgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIF9jb25maWcgPSB7XG4gICAgICAgICAgLi4uX2NvbmZpZyxcbiAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGVcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2Fyb3VzZWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGF0YS50byhjb25maWcpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7YWN0aW9ufVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2FjdGlvbl0oKVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgICBkYXRhLnBhdXNlKClcbiAgICAgICAgZGF0YS5jeWNsZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgISQodGFyZ2V0KS5oYXNDbGFzcyhDbGFzc05hbWUuQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi4kKHRhcmdldCkuZGF0YSgpLFxuICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLXRvJylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgIH1cblxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSkudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfU0xJREUsIENhcm91c2VsLl9kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG4kKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9SSURFKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNhcm91c2Vscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0ICRjYXJvdXNlbCA9ICQoY2Fyb3VzZWxzW2ldKVxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkY2Fyb3VzZWwsICRjYXJvdXNlbC5kYXRhKCkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2NvbGxhcHNlJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdG9nZ2xlIDogdHJ1ZSxcbiAgcGFyZW50IDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZSA6ICdib29sZWFuJyxcbiAgcGFyZW50IDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBTSE9XICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgU0hPVyAgICAgICA6ICdzaG93JyxcbiAgQ09MTEFQU0UgICA6ICdjb2xsYXBzZScsXG4gIENPTExBUFNJTkcgOiAnY29sbGFwc2luZycsXG4gIENPTExBUFNFRCAgOiAnY29sbGFwc2VkJ1xufVxuXG5jb25zdCBEaW1lbnNpb24gPSB7XG4gIFdJRFRIICA6ICd3aWR0aCcsXG4gIEhFSUdIVCA6ICdoZWlnaHQnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBBQ1RJVkVTICAgICA6ICcuc2hvdywgLmNvbGxhcHNpbmcnLFxuICBEQVRBX1RPR0dMRSA6ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgICAgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMke2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgKSlcblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICAgICAuZmlsdGVyKChmb3VuZEVsZW0pID0+IGZvdW5kRWxlbSA9PT0gZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVzXG4gICAgbGV0IGFjdGl2ZXNEYXRhXG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICBhY3RpdmVzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5BQ1RJVkVTKSlcbiAgICAgICAgLmZpbHRlcigoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gdGhpcy5fY29uZmlnLnBhcmVudFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKS5kYXRhKERBVEFfS0VZKVxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVylcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJylcbiAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgaWYgKHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodHJpZ2dlcilcblxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCAkZWxlbSA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpXG4gICAgICAgICAgaWYgKCEkZWxlbS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgY29uc3QgaGFzV2lkdGggPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKERpbWVuc2lvbi5XSURUSClcbiAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gIH1cblxuICBfZ2V0UGFyZW50KCkge1xuICAgIGxldCBwYXJlbnRcblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFxuXG4gICAgICAvLyBJdCdzIGEgalF1ZXJ5IG9iamVjdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFswXVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5wYXJlbnQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPVxuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJHt0aGlzLl9jb25maWcucGFyZW50fVwiXWBcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG4gICAgJChjaGlsZHJlbikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgIFtlbGVtZW50XVxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAodHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0cmlnZ2VyQXJyYXkpXG4gICAgICAgIC50b2dnbGVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VELCAhaXNPcGVuKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxuICB9XG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICA9ICR0aGlzLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kdGhpcy5kYXRhKCksXG4gICAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgJHRyaWdnZXIgPSAkKHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9ycyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG5cbiAgJChzZWxlY3RvcnMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKHRoaXMpXG4gICAgY29uc3QgZGF0YSAgICA9ICR0YXJnZXQuZGF0YShEQVRBX0tFWSlcbiAgICBjb25zdCBjb25maWcgID0gZGF0YSA/ICd0b2dnbGUnIDogJHRyaWdnZXIuZGF0YSgpXG4gICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCR0YXJnZXQsIGNvbmZpZylcbiAgfSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2VcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICAgICA9ICdkcm9wZG93bidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICAgICA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgICAgID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgICAgICAgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuY29uc3QgU1BBQ0VfS0VZQ09ERSAgICAgICAgICAgID0gMzIgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3Igc3BhY2Uga2V5XG5jb25zdCBUQUJfS0VZQ09ERSAgICAgICAgICAgICAgPSA5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcbmNvbnN0IEFSUk9XX1VQX0tFWUNPREUgICAgICAgICA9IDM4IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHVwIGFycm93IGtleVxuY29uc3QgQVJST1dfRE9XTl9LRVlDT0RFICAgICAgID0gNDAgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgZG93biBhcnJvdyBrZXlcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDMgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5jb25zdCBSRUdFWFBfS0VZRE9XTiAgICAgICAgICAgPSBuZXcgUmVnRXhwKGAke0FSUk9XX1VQX0tFWUNPREV9fCR7QVJST1dfRE9XTl9LRVlDT0RFfXwke0VTQ0FQRV9LRVlDT0RFfWApXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgICAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIEtFWURPV05fREFUQV9BUEkgOiBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIEtFWVVQX0RBVEFfQVBJICAgOiBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRElTQUJMRUQgICAgICAgIDogJ2Rpc2FibGVkJyxcbiAgU0hPVyAgICAgICAgICAgIDogJ3Nob3cnLFxuICBEUk9QVVAgICAgICAgICAgOiAnZHJvcHVwJyxcbiAgRFJPUFJJR0hUICAgICAgIDogJ2Ryb3ByaWdodCcsXG4gIERST1BMRUZUICAgICAgICA6ICdkcm9wbGVmdCcsXG4gIE1FTlVSSUdIVCAgICAgICA6ICdkcm9wZG93bi1tZW51LXJpZ2h0JyxcbiAgTUVOVUxFRlQgICAgICAgIDogJ2Ryb3Bkb3duLW1lbnUtbGVmdCcsXG4gIFBPU0lUSU9OX1NUQVRJQyA6ICdwb3NpdGlvbi1zdGF0aWMnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEQVRBX1RPR0dMRSAgIDogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxcbiAgRk9STV9DSElMRCAgICA6ICcuZHJvcGRvd24gZm9ybScsXG4gIE1FTlUgICAgICAgICAgOiAnLmRyb3Bkb3duLW1lbnUnLFxuICBOQVZCQVJfTkFWICAgIDogJy5uYXZiYXItbmF2JyxcbiAgVklTSUJMRV9JVEVNUyA6ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgVE9QICAgICAgIDogJ3RvcC1zdGFydCcsXG4gIFRPUEVORCAgICA6ICd0b3AtZW5kJyxcbiAgQk9UVE9NICAgIDogJ2JvdHRvbS1zdGFydCcsXG4gIEJPVFRPTUVORCA6ICdib3R0b20tZW5kJyxcbiAgUklHSFQgICAgIDogJ3JpZ2h0LXN0YXJ0JyxcbiAgUklHSFRFTkQgIDogJ3JpZ2h0LWVuZCcsXG4gIExFRlQgICAgICA6ICdsZWZ0LXN0YXJ0JyxcbiAgTEVGVEVORCAgIDogJ2xlZnQtZW5kJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQgICAgICAgOiAwLFxuICBmbGlwICAgICAgICAgOiB0cnVlLFxuICBib3VuZGFyeSAgICAgOiAnc2Nyb2xsUGFyZW50JyxcbiAgcmVmZXJlbmNlICAgIDogJ3RvZ2dsZScsXG4gIGRpc3BsYXkgICAgICA6ICdkeW5hbWljJyxcbiAgcG9wcGVyQ29uZmlnIDogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0ICAgICAgIDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGZsaXAgICAgICAgICA6ICdib29sZWFuJyxcbiAgYm91bmRhcnkgICAgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICByZWZlcmVuY2UgICAgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXkgICAgICA6ICdzdHJpbmcnLFxuICBwb3BwZXJDb25maWcgOiAnKG51bGx8b2JqZWN0KSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCAgPSBlbGVtZW50XG4gICAgdGhpcy5fcG9wcGVyICAgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX21lbnUgICAgID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQWN0aXZlID0gJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIERyb3Bkb3duLl9jbGVhck1lbnVzKClcblxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zaG93KHRydWUpXG4gIH1cblxuICBzaG93KHVzZVBvcHBlciA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpIHx8ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRvdGFsbHkgUG9wcGVyLmpzIGZvciBEcm9wZG93biBpbiBOYXZiYXJcbiAgICBpZiAoIXRoaXMuX2luTmF2YmFyICYmIHVzZVBvcHBlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICAgICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJylcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gcGFyZW50XG4gICAgICB9IGVsc2UgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBqUXVlcnkgZWxlbWVudFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlWzBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgYm91bmRhcnkgaXMgbm90IGBzY3JvbGxQYXJlbnRgLCB0aGVuIHNldCBwb3NpdGlvbiB0byBgc3RhdGljYFxuICAgICAgLy8gdG8gYWxsb3cgdGhlIG1lbnUgdG8gXCJlc2NhcGVcIiB0aGUgc2Nyb2xsIHBhcmVudCdzIGJvdW5kYXJpZXNcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjQyNTFcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYm91bmRhcnkgIT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICAgICQocGFyZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuUE9TSVRJT05fU1RBVElDKVxuICAgICAgfVxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCB0aGlzLl9nZXRQb3BwZXJDb25maWcoKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgJChwYXJlbnQpLmNsb3Nlc3QoU2VsZWN0b3IuTkFWQkFSX05BVikubGVuZ3RoID09PSAwKSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5TSE9XTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSB8fCAhJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5ISURERU4sIHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fbWVudSA9IG51bGxcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDSywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH0pXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX21lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NRU5VKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbWVudVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCAkcGFyZW50RHJvcGRvd24gPSAkKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSlcbiAgICBsZXQgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT01cblxuICAgIC8vIEhhbmRsZSBkcm9wdXBcbiAgICBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QVVApKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlRPUFxuICAgICAgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk1FTlVSSUdIVCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5UT1BFTkRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUFJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5SSUdIVFxuICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QTEVGVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuTEVGVFxuICAgIH0gZWxzZSBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuTUVOVVJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT01FTkRcbiAgICB9XG4gICAgcmV0dXJuIHBsYWNlbWVudFxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KCcubmF2YmFyJykubGVuZ3RoID4gMFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZzZXQuZm4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAgICAgICAgIC4uLnRoaXMuX2NvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCB0aGlzLl9lbGVtZW50KSB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0Lm9mZnNldCA9IHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKSxcbiAgICAgICAgZmxpcDoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5mbGlwXG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyLmpzIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheVxuICAgIGlmICh0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHBvcHBlckNvbmZpZy5tb2RpZmllcnMuYXBwbHlTdHlsZSA9IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucG9wcGVyQ29uZmlnLFxuICAgICAgLi4udGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LndoaWNoID09PSBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggfHxcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggIT09IFRBQl9LRVlDT0RFKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRvZ2dsZXNbaV0pXG4gICAgICBjb25zdCBjb250ZXh0ID0gJCh0b2dnbGVzW2ldKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudVxuICAgICAgaWYgKCEkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJlxuICAgICAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggPT09IFRBQl9LRVlDT0RFKSAmJlxuICAgICAgICAgICQuY29udGFpbnMocGFyZW50LCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwgcmVsYXRlZFRhcmdldClcbiAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuXG4gICAgICBpZiAoY29udGV4dC5fcG9wcGVyKSB7XG4gICAgICAgIGNvbnRleHQuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgJChkcm9wZG93bk1lbnUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgJChwYXJlbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5ISURERU4sIHJlbGF0ZWRUYXJnZXQpKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBwYXJlbnRcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBzdGF0aWMgX2RhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBJZiBzcGFjZSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgICAtIElmIHRyaWdnZXIgaW5zaWRlIHRoZSBtZW51ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSlcbiAgICAgID8gZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggIT09IEVTQ0FQRV9LRVlDT0RFICYmXG4gICAgICAoZXZlbnQud2hpY2ggIT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBldmVudC53aGljaCAhPT0gQVJST1dfVVBfS0VZQ09ERSB8fFxuICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChTZWxlY3Rvci5NRU5VKS5sZW5ndGgpIDogIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQud2hpY2gpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICQodGhpcykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGlmICghaXNBY3RpdmUgJiYgZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IGlzQWN0aXZlICYmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUpKSB7XG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkRBVEFfVE9HR0xFKVxuICAgICAgICAkKHRvZ2dsZSkudHJpZ2dlcignZm9jdXMnKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5WSVNJQkxFX0lURU1TKSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICQoaXRlbSkuaXMoJzp2aXNpYmxlJykpXG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldClcblxuICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHsgLy8gVXBcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHsgLy8gRG93blxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gMFxuICAgIH1cblxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5NRU5VLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oYCR7RXZlbnQuQ0xJQ0tfREFUQV9BUEl9ICR7RXZlbnQuS0VZVVBfREFUQV9BUEl9YCwgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbiAgfSlcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5GT1JNX0NISUxELCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEcm9wZG93blxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ21vZGFsJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wIDogdHJ1ZSxcbiAga2V5Ym9hcmQgOiB0cnVlLFxuICBmb2N1cyAgICA6IHRydWUsXG4gIHNob3cgICAgIDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3AgOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICBmb2N1cyAgICA6ICdib29sZWFuJyxcbiAgc2hvdyAgICAgOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURFX1BSRVZFTlRFRCAgICA6IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICAgICAgICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIFJFU0laRSAgICAgICAgICAgIDogYHJlc2l6ZSR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RJU01JU1MgICAgIDogYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBLRVlET1dOX0RJU01JU1MgICA6IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBNT1VTRVVQX0RJU01JU1MgICA6IGBtb3VzZXVwLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBNT1VTRURPV05fRElTTUlTUyA6IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIFNDUk9MTEFCTEUgICAgICAgICA6ICdtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZScsXG4gIFNDUk9MTEJBUl9NRUFTVVJFUiA6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gIEJBQ0tEUk9QICAgICAgICAgICA6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIE9QRU4gICAgICAgICAgICAgICA6ICdtb2RhbC1vcGVuJyxcbiAgRkFERSAgICAgICAgICAgICAgIDogJ2ZhZGUnLFxuICBTSE9XICAgICAgICAgICAgICAgOiAnc2hvdycsXG4gIFNUQVRJQyAgICAgICAgICAgICA6ICdtb2RhbC1zdGF0aWMnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBESUFMT0cgICAgICAgICA6ICcubW9kYWwtZGlhbG9nJyxcbiAgTU9EQUxfQk9EWSAgICAgOiAnLm1vZGFsLWJvZHknLFxuICBEQVRBX1RPR0dMRSAgICA6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gIERBVEFfRElTTUlTUyAgIDogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gIEZJWEVEX0NPTlRFTlQgIDogJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnLFxuICBTVElDS1lfQ09OVEVOVCA6ICcuc3RpY2t5LXRvcCdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkRJQUxPRylcbiAgICB0aGlzLl9iYWNrZHJvcCAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzU2hvd24gICAgICAgICAgICAgPSBmYWxzZVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICAgPSBmYWxzZVxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyAgICAgPSBmYWxzZVxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoICAgICAgPSAwXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgIHRoaXMuX2NoZWNrU2Nyb2xsYmFyKClcbiAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKFxuICAgICAgRXZlbnQuQ0xJQ0tfRElTTUlTUyxcbiAgICAgIFNlbGVjdG9yLkRBVEFfRElTTUlTUyxcbiAgICAgIChldmVudCkgPT4gdGhpcy5oaWRlKGV2ZW50KVxuICAgIClcblxuICAgICQodGhpcy5fZGlhbG9nKS5vbihFdmVudC5NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRXZlbnQuTU9VU0VVUF9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuRk9DVVNJTilcblxuICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5DTElDS19ESVNNSVNTKVxuICAgICQodGhpcy5fZGlhbG9nKS5vZmYoRXZlbnQuTU9VU0VET1dOX0RJU01JU1MpXG5cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9oaWRlTW9kYWwoZXZlbnQpKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlTW9kYWwoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZWxlbWVudCwgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goKGh0bWxFbGVtZW50KSA9PiAkKGh0bWxFbGVtZW50KS5vZmYoRVZFTlRfS0VZKSlcblxuICAgIC8qKlxuICAgICAqIGBkb2N1bWVudGAgaGFzIDIgZXZlbnRzIGBFdmVudC5GT0NVU0lOYCBhbmQgYEV2ZW50LkNMSUNLX0RBVEFfQVBJYFxuICAgICAqIERvIG5vdCBtb3ZlIGBkb2N1bWVudGAgaW4gYGh0bWxFbGVtZW50c2AgYXJyYXlcbiAgICAgKiBJdCB3aWxsIHJlbW92ZSBgRXZlbnQuQ0xJQ0tfREFUQV9BUElgIGV2ZW50IHRoYXQgc2hvdWxkIHJlbWFpblxuICAgICAqL1xuICAgICQoZG9jdW1lbnQpLm9mZihFdmVudC5GT0NVU0lOKVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2RpYWxvZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICAgPSBudWxsXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoICAgICAgPSBudWxsXG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3QgaGlkZUV2ZW50UHJldmVudGVkID0gJC5FdmVudChFdmVudC5ISURFX1BSRVZFTlRFRClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudFByZXZlbnRlZClcbiAgICAgIGlmIChoaWRlRXZlbnRQcmV2ZW50ZWQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5TVEFUSUMpXG5cbiAgICAgIGNvbnN0IG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU1RBVElDKVxuICAgICAgfSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICBjb25zdCBtb2RhbEJvZHkgPSB0aGlzLl9kaWFsb2cgPyB0aGlzLl9kaWFsb2cucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NT0RBTF9CT0RZKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG5cbiAgICBpZiAoJCh0aGlzLl9kaWFsb2cpLmhhc0NsYXNzKENsYXNzTmFtZS5TQ1JPTExBQkxFKSAmJiBtb2RhbEJvZHkpIHtcbiAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiAgPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZylcblxuICAgICAgJCh0aGlzLl9kaWFsb2cpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgdHJhbnNpdGlvbkNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vZmYoRXZlbnQuRk9DVVNJTikgLy8gR3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAub24oRXZlbnQuRk9DVVNJTiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBfc2V0RXNjYXBlRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LktFWURPV05fRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpXG4gICAgfVxuICB9XG5cbiAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHdpbmRvdykub24oRXZlbnQuUkVTSVpFLCAoZXZlbnQpID0+IHRoaXMuaGFuZGxlVXBkYXRlKGV2ZW50KSlcbiAgICB9IGVsc2Uge1xuICAgICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXG4gICAgfVxuICB9XG5cbiAgX2hpZGVNb2RhbCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGlzLl9yZXNldFNjcm9sbGJhcigpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmUoKVxuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgIGNvbnN0IGFuaW1hdGUgPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgICAgPyBDbGFzc05hbWUuRkFERSA6ICcnXG5cbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENsYXNzTmFtZS5CQUNLRFJPUFxuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKGFuaW1hdGUpXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0tfRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICB9KVxuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcClcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2spXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duICYmIHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrUmVtb3ZlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrUmVtb3ZlKClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKCF0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICBfY2hlY2tTY3JvbGxiYXIoKSB7XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IHJlY3QubGVmdCArIHJlY3QucmlnaHQgPCB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICB9XG5cbiAgX3NldFNjcm9sbGJhcigpIHtcbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIC8vIE5vdGU6IERPTU5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0IHJldHVybnMgdGhlIGFjdHVhbCB2YWx1ZSBvciAnJyBpZiBub3Qgc2V0XG4gICAgICAvLyAgIHdoaWxlICQoRE9NTm9kZSkuY3NzKCdwYWRkaW5nLXJpZ2h0JykgcmV0dXJucyB0aGUgY2FsY3VsYXRlZCB2YWx1ZSBvciAwIGlmIG5vdCBzZXRcbiAgICAgIGNvbnN0IGZpeGVkQ29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5GSVhFRF9DT05URU5UKSlcbiAgICAgIGNvbnN0IHN0aWNreUNvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuU1RJQ0tZX0NPTlRFTlQpKVxuXG4gICAgICAvLyBBZGp1c3QgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgICAkKGZpeGVkQ29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9IGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gJChlbGVtZW50KS5jc3MoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKVxuICAgICAgICAgIC5jc3MoJ3BhZGRpbmctcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkanVzdCBzdGlja3kgY29udGVudCBtYXJnaW5cbiAgICAgICQoc3RpY2t5Q29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0dWFsTWFyZ2luID0gZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodFxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkTWFyZ2luID0gJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcpXG4gICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAuZGF0YSgnbWFyZ2luLXJpZ2h0JywgYWN0dWFsTWFyZ2luKVxuICAgICAgICAgIC5jc3MoJ21hcmdpbi1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZE1hcmdpbikgLSB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGp1c3QgYm9keSBwYWRkaW5nXG4gICAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5jc3MoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgJChkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpXG4gICAgICAgIC5jc3MoJ3BhZGRpbmctcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKVxuICB9XG5cbiAgX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgIC8vIFJlc3RvcmUgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgY29uc3QgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkZJWEVEX0NPTlRFTlQpKVxuICAgICQoZml4ZWRDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcGFkZGluZyA9ICQoZWxlbWVudCkuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID8gcGFkZGluZyA6ICcnXG4gICAgfSlcblxuICAgIC8vIFJlc3RvcmUgc3RpY2t5IGNvbnRlbnRcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtTZWxlY3Rvci5TVElDS1lfQ09OVEVOVH1gKSlcbiAgICAkKGVsZW1lbnRzKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbWFyZ2luID0gJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgaWYgKHR5cGVvZiBtYXJnaW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnLCBtYXJnaW4pLnJlbW92ZURhdGEoJ21hcmdpbi1yaWdodCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFJlc3RvcmUgYm9keSBwYWRkaW5nXG4gICAgY29uc3QgcGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJydcbiAgfVxuXG4gIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHsgLy8gdGh4IGQud2Fsc2hcbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBDbGFzc05hbWUuU0NST0xMQkFSX01FQVNVUkVSXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kKHRoaXMpLmRhdGEoKSxcbiAgICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLnNob3cpIHtcbiAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGxldCB0YXJnZXRcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpXG4gICAgPyAndG9nZ2xlJyA6IHtcbiAgICAgIC4uLiQodGFyZ2V0KS5kYXRhKCksXG4gICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgIH1cblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdGFyZ2V0ID0gJCh0YXJnZXQpLm9uZShFdmVudC5TSE9XLCAoc2hvd0V2ZW50KSA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgLy8gT25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRhcmdldC5vbmUoRXZlbnQuSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoJCh0aGlzKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTW9kYWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiB0b29scy9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IHVyaUF0dHJzID0gW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXVxuXG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRXaGl0ZWxpc3QgPSB7XG4gIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gIGFyZWE6IFtdLFxuICBiOiBbXSxcbiAgYnI6IFtdLFxuICBjb2w6IFtdLFxuICBjb2RlOiBbXSxcbiAgZGl2OiBbXSxcbiAgZW06IFtdLFxuICBocjogW10sXG4gIGgxOiBbXSxcbiAgaDI6IFtdLFxuICBoMzogW10sXG4gIGg0OiBbXSxcbiAgaDU6IFtdLFxuICBoNjogW10sXG4gIGk6IFtdLFxuICBpbWc6IFsnc3JjJywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlKTp8W14mOi8/I10qKD86Wy8/I118JCkpL2dpXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW2EtejAtOSsvXSs9KiQvaVxuXG5mdW5jdGlvbiBhbGxvd2VkQXR0cmlidXRlKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSB7XG4gIGNvbnN0IGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgIGlmICh1cmlBdHRycy5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGF0dHIubm9kZVZhbHVlLm1hdGNoKFNBRkVfVVJMX1BBVFRFUk4pIHx8IGF0dHIubm9kZVZhbHVlLm1hdGNoKERBVEFfVVJMX1BBVFRFUk4pKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoKGF0dHJSZWdleCkgPT4gYXR0clJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICBmb3IgKGxldCBpID0gMCwgbCA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoYXR0ck5hbWUubWF0Y2gocmVnRXhwW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCB3aGl0ZUxpc3QsIHNhbml0aXplRm4pIHtcbiAgaWYgKHVuc2FmZUh0bWwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZuICYmIHR5cGVvZiBzYW5pdGl6ZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3Qgd2hpdGVsaXN0S2V5cyA9IE9iamVjdC5rZXlzKHdoaXRlTGlzdClcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlbCA9IGVsZW1lbnRzW2ldXG4gICAgY29uc3QgZWxOYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHdoaXRlbGlzdEtleXMuaW5kZXhPZihlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQod2hpdGVMaXN0WycqJ10gfHwgW10sIHdoaXRlTGlzdFtlbE5hbWVdIHx8IFtdKVxuXG4gICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBEZWZhdWx0V2hpdGVsaXN0LFxuICBzYW5pdGl6ZUh0bWxcbn0gZnJvbSAnLi90b29scy9zYW5pdGl6ZXInXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgID0gJ3Rvb2x0aXAnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgPSAnNC40LjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgICAgPSAnYnMudG9vbHRpcCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgPSAkLmZuW05BTUVdXG5jb25zdCBDTEFTU19QUkVGSVggICAgICAgICAgPSAnYnMtdG9vbHRpcCdcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCAgICA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IFsnc2FuaXRpemUnLCAnd2hpdGVMaXN0JywgJ3Nhbml0aXplRm4nXVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uICAgICAgICAgOiAnYm9vbGVhbicsXG4gIHRlbXBsYXRlICAgICAgICAgIDogJ3N0cmluZycsXG4gIHRpdGxlICAgICAgICAgICAgIDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyICAgICAgICAgICA6ICdzdHJpbmcnLFxuICBkZWxheSAgICAgICAgICAgICA6ICcobnVtYmVyfG9iamVjdCknLFxuICBodG1sICAgICAgICAgICAgICA6ICdib29sZWFuJyxcbiAgc2VsZWN0b3IgICAgICAgICAgOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHBsYWNlbWVudCAgICAgICAgIDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgb2Zmc2V0ICAgICAgICAgICAgOiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgY29udGFpbmVyICAgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnQgOiAnKHN0cmluZ3xhcnJheSknLFxuICBib3VuZGFyeSAgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgc2FuaXRpemUgICAgICAgICAgOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm4gICAgICAgIDogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHdoaXRlTGlzdCAgICAgICAgIDogJ29iamVjdCcsXG4gIHBvcHBlckNvbmZpZyAgICAgIDogJyhudWxsfG9iamVjdCknXG59XG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE8gICA6ICdhdXRvJyxcbiAgVE9QICAgIDogJ3RvcCcsXG4gIFJJR0hUICA6ICdyaWdodCcsXG4gIEJPVFRPTSA6ICdib3R0b20nLFxuICBMRUZUICAgOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uICAgICAgICAgOiB0cnVlLFxuICB0ZW1wbGF0ZSAgICAgICAgICA6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgdHJpZ2dlciAgICAgICAgICAgOiAnaG92ZXIgZm9jdXMnLFxuICB0aXRsZSAgICAgICAgICAgICA6ICcnLFxuICBkZWxheSAgICAgICAgICAgICA6IDAsXG4gIGh0bWwgICAgICAgICAgICAgIDogZmFsc2UsXG4gIHNlbGVjdG9yICAgICAgICAgIDogZmFsc2UsXG4gIHBsYWNlbWVudCAgICAgICAgIDogJ3RvcCcsXG4gIG9mZnNldCAgICAgICAgICAgIDogMCxcbiAgY29udGFpbmVyICAgICAgICAgOiBmYWxzZSxcbiAgZmFsbGJhY2tQbGFjZW1lbnQgOiAnZmxpcCcsXG4gIGJvdW5kYXJ5ICAgICAgICAgIDogJ3Njcm9sbFBhcmVudCcsXG4gIHNhbml0aXplICAgICAgICAgIDogdHJ1ZSxcbiAgc2FuaXRpemVGbiAgICAgICAgOiBudWxsLFxuICB3aGl0ZUxpc3QgICAgICAgICA6IERlZmF1bHRXaGl0ZWxpc3QsXG4gIHBvcHBlckNvbmZpZyAgICAgIDogbnVsbFxufVxuXG5jb25zdCBIb3ZlclN0YXRlID0ge1xuICBTSE9XIDogJ3Nob3cnLFxuICBPVVQgIDogJ291dCdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEICAgOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQgICA6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBGQURFIDogJ2ZhZGUnLFxuICBTSE9XIDogJ3Nob3cnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBUT09MVElQICAgICAgIDogJy50b29sdGlwJyxcbiAgVE9PTFRJUF9JTk5FUiA6ICcudG9vbHRpcC1pbm5lcicsXG4gIEFSUk9XICAgICAgICAgOiAnLmFycm93J1xufVxuXG5jb25zdCBUcmlnZ2VyID0ge1xuICBIT1ZFUiAgOiAnaG92ZXInLFxuICBGT0NVUyAgOiAnZm9jdXMnLFxuICBDTElDSyAgOiAnY2xpY2snLFxuICBNQU5VQUwgOiAnbWFudWFsJ1xufVxuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb29sdGlwIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcvKScpXG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCAgICAgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCAgICAgICA9IDBcbiAgICB0aGlzLl9ob3ZlclN0YXRlICAgID0gJydcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge31cbiAgICB0aGlzLl9wb3BwZXIgICAgICAgID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29uZmlnICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy50aXAgICAgID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBFVkVOVF9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkXG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgICAgbGV0IGNvbnRleHQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrXG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG5cbiAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKVxuICAgIH1cblxuICAgIHRoaXMuX2lzRW5hYmxlZCAgICAgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCAgICAgICA9IG51bGxcbiAgICB0aGlzLl9ob3ZlclN0YXRlICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5jb25maWcgID0gbnVsbFxuICAgIHRoaXMudGlwICAgICA9IG51bGxcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBVdGlsLmZpbmRTaGFkb3dSb290KHRoaXMuZWxlbWVudClcbiAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSAkLmNvbnRhaW5zKFxuICAgICAgICBzaGFkb3dSb290ICE9PSBudWxsID8gc2hhZG93Um9vdCA6IHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy5lbGVtZW50XG4gICAgICApXG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpcCAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgIGNvbnN0IHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGxhY2VtZW50ICA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudClcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wbGFjZW1lbnRcblxuICAgICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudClcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZ2V0Q29udGFpbmVyKClcbiAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICAgIGlmICghJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAkKHRpcCkuYXBwZW5kVG8oY29udGFpbmVyKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHRoaXMuZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpXG5cbiAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fZml4VHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkhvdmVyU3RhdGUgPSB0aGlzLl9ob3ZlclN0YXRlXG4gICAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgID0gbnVsbFxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pXG5cbiAgICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMudGlwKVxuXG4gICAgICAgICQodGhpcy50aXApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCB0aXAgICAgICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hvdmVyU3RhdGUgIT09IEhvdmVyU3RhdGUuU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cblxuICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkNMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlXG5cbiAgICBpZiAoJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRpcClcblxuICAgICAgJCh0aXApXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb3RlY3RlZFxuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKVxuICB9XG5cbiAgYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhgJHtDTEFTU19QUkVGSVh9LSR7YXR0YWNobWVudH1gKVxuICB9XG5cbiAgZ2V0VGlwRWxlbWVudCgpIHtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkKHRpcC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlRPT0xUSVBfSU5ORVIpKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgICQodGlwKS5yZW1vdmVDbGFzcyhgJHtDbGFzc05hbWUuRkFERX0gJHtDbGFzc05hbWUuU0hPV31gKVxuICB9XG5cbiAgc2V0RWxlbWVudENvbnRlbnQoJGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgLy8gQ29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKS5hcHBlbmQoY29udGVudClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuY29uZmlnLndoaXRlTGlzdCwgdGhpcy5jb25maWcuc2FuaXRpemVGbilcbiAgICAgIH1cblxuICAgICAgJGVsZW1lbnQuaHRtbChjb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAkZWxlbWVudC50ZXh0KGNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KVxuICAgICAgICA6IHRoaXMuY29uZmlnLnRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBiZWhhdmlvcjogdGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRcbiAgICAgICAgfSxcbiAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICBlbGVtZW50OiBTZWxlY3Rvci5BUlJPV1xuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uQ3JlYXRlOiAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5vcmlnaW5hbFBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVXBkYXRlOiAoZGF0YSkgPT4gdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc0NvbmZpZyxcbiAgICAgIC4uLnRoaXMuY29uZmlnLnBvcHBlckNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZzZXQuZm4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAgICAgICAgIC4uLnRoaXMuY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIHRoaXMuZWxlbWVudCkgfHwge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLmNvbmZpZy5vZmZzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0Q29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICAgIH1cblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLmNvbmZpZy5jb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gJCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuICQoZG9jdW1lbnQpLmZpbmQodGhpcy5jb25maWcuY29udGFpbmVyKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkub24oXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSyxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAoZXZlbnQpID0+IHRoaXMudG9nZ2xlKGV2ZW50KVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRyaWdnZXIuTUFOVUFMKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSXG4gICAgICAgICAgPyB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVJcbiAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTlxuICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRyaWdnZXIuSE9WRVJcbiAgICAgICAgICA/IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRVxuICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU09VVFxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KVxuICAgICAgICAgIC5vbihcbiAgICAgICAgICAgIGV2ZW50SW4sXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAgIChldmVudCkgPT4gdGhpcy5fZW50ZXIoZXZlbnQpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5vbihcbiAgICAgICAgICAgIGV2ZW50T3V0LFxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuX2xlYXZlKGV2ZW50KVxuICAgICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub24oXG4gICAgICAnaGlkZS5icy5tb2RhbCcsXG4gICAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyXG4gICAgKVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCB0aXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAnZGF0YS1vcmlnaW5hbC10aXRsZScsXG4gICAgICAgIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJydcbiAgICAgIClcblxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgIClcbiAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgIF0gPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1dcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPV1xuXG4gICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICApXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUlxuICAgICAgXSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5PVVRcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKVxuICB9XG5cbiAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgZm9yIChjb25zdCB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gJCh0aGlzLmVsZW1lbnQpLmRhdGEoKVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpXG4gICAgICAuZm9yRWFjaCgoZGF0YUF0dHIpID0+IHtcbiAgICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5pbmRleE9mKGRhdGFBdHRyKSAhPT0gLTEpIHtcbiAgICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJdXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLndoaXRlTGlzdCwgY29uZmlnLnNhbml0aXplRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGgpIHtcbiAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgY29uc3QgcG9wcGVySW5zdGFuY2UgPSBwb3BwZXJEYXRhLmluc3RhbmNlXG4gICAgdGhpcy50aXAgPSBwb3BwZXJJbnN0YW5jZS5wb3BwZXJcbiAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KHBvcHBlckRhdGEucGxhY2VtZW50KSlcbiAgfVxuXG4gIF9maXhUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvblxuXG4gICAgaWYgKHRpcC5nZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JykgIT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZVxuICAgIHRoaXMuaGlkZSgpXG4gICAgdGhpcy5zaG93KClcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXBcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ3BvcG92ZXInXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5wb3BvdmVyJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuY29uc3QgQ0xBU1NfUFJFRklYICAgICAgICA9ICdicy1wb3BvdmVyJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYICA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBwbGFjZW1lbnQgOiAncmlnaHQnLFxuICB0cmlnZ2VyICAgOiAnY2xpY2snLFxuICBjb250ZW50ICAgOiAnJyxcbiAgdGVtcGxhdGUgIDogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PjwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gIGNvbnRlbnQgOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBGQURFIDogJ2ZhZGUnLFxuICBTSE9XIDogJ3Nob3cnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBUSVRMRSAgIDogJy5wb3BvdmVyLWhlYWRlcicsXG4gIENPTlRFTlQgOiAnLnBvcG92ZXItYm9keSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEICAgOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQgICA6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcblxuICAgIC8vIFdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTZWxlY3Rvci5USVRMRSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLmVsZW1lbnQpXG4gICAgfVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLkNPTlRFTlQpLCBjb250ZW50KVxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcyhgJHtDbGFzc05hbWUuRkFERX0gJHtDbGFzc05hbWUuU0hPV31gKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSB8fFxuICAgICAgdGhpcy5jb25maWcuY29udGVudFxuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gUG9wb3ZlclxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC40LjEpOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3Njcm9sbHNweSdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjQuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0IDogMTAsXG4gIG1ldGhvZCA6ICdhdXRvJyxcbiAgdGFyZ2V0IDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldCA6ICdudW1iZXInLFxuICBtZXRob2QgOiAnc3RyaW5nJyxcbiAgdGFyZ2V0IDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBBQ1RJVkFURSAgICAgIDogYGFjdGl2YXRlJHtFVkVOVF9LRVl9YCxcbiAgU0NST0xMICAgICAgICA6IGBzY3JvbGwke0VWRU5UX0tFWX1gLFxuICBMT0FEX0RBVEFfQVBJIDogYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRFJPUERPV05fSVRFTSA6ICdkcm9wZG93bi1pdGVtJyxcbiAgRFJPUERPV05fTUVOVSA6ICdkcm9wZG93bi1tZW51JyxcbiAgQUNUSVZFICAgICAgICA6ICdhY3RpdmUnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEQVRBX1NQWSAgICAgICAgOiAnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJyxcbiAgQUNUSVZFICAgICAgICAgIDogJy5hY3RpdmUnLFxuICBOQVZfTElTVF9HUk9VUCAgOiAnLm5hdiwgLmxpc3QtZ3JvdXAnLFxuICBOQVZfTElOS1MgICAgICAgOiAnLm5hdi1saW5rJyxcbiAgTkFWX0lURU1TICAgICAgIDogJy5uYXYtaXRlbScsXG4gIExJU1RfSVRFTVMgICAgICA6ICcubGlzdC1ncm91cC1pdGVtJyxcbiAgRFJPUERPV04gICAgICAgIDogJy5kcm9wZG93bicsXG4gIERST1BET1dOX0lURU1TICA6ICcuZHJvcGRvd24taXRlbScsXG4gIERST1BET1dOX1RPR0dMRSA6ICcuZHJvcGRvd24tdG9nZ2xlJ1xufVxuXG5jb25zdCBPZmZzZXRNZXRob2QgPSB7XG4gIE9GRlNFVCAgIDogJ29mZnNldCcsXG4gIFBPU0lUSU9OIDogJ3Bvc2l0aW9uJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnQk9EWScgPyB3aW5kb3cgOiBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fc2VsZWN0b3IgICAgICA9IGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U2VsZWN0b3IuTkFWX0xJTktTfSxgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTZWxlY3Rvci5MSVNUX0lURU1TfSxgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTZWxlY3Rvci5EUk9QRE9XTl9JVEVNU31gXG4gICAgdGhpcy5fb2Zmc2V0cyAgICAgICA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyAgICAgICA9IFtdXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgID0gMFxuXG4gICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vbihFdmVudC5TQ1JPTEwsIChldmVudCkgPT4gdGhpcy5fcHJvY2VzcyhldmVudCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IGF1dG9NZXRob2QgPSB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB0aGlzLl9zY3JvbGxFbGVtZW50LndpbmRvd1xuICAgICAgPyBPZmZzZXRNZXRob2QuT0ZGU0VUIDogT2Zmc2V0TWV0aG9kLlBPU0lUSU9OXG5cbiAgICBjb25zdCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bydcbiAgICAgID8gYXV0b01ldGhvZCA6IHRoaXMuX2NvbmZpZy5tZXRob2RcblxuICAgIGNvbnN0IG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE9mZnNldE1ldGhvZC5QT1NJVElPTlxuICAgICAgPyB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6IDBcblxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGNvbnN0IHRhcmdldHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKVxuXG4gICAgdGFyZ2V0c1xuICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsZXQgdGFyZ2V0XG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAgICAgaWYgKHRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3RvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICBpZiAodGFyZ2V0QkNSLndpZHRoIHx8IHRhcmdldEJDUi5oZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gKGZhdCk6IHJlbW92ZSBza2V0Y2ggcmVsaWFuY2Ugb24galF1ZXJ5IHBvc2l0aW9uL29mZnNldFxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgJCh0YXJnZXQpW29mZnNldE1ldGhvZF0oKS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pXG4gICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLl9vZmZzZXRzLnB1c2goaXRlbVswXSlcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pXG4gICAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fc2VsZWN0b3IgICAgICA9IG51bGxcbiAgICB0aGlzLl9vZmZzZXRzICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3RhcmdldHMgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGFyZ2V0ICE9PSAnc3RyaW5nJykge1xuICAgICAgbGV0IGlkID0gJChjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcpXG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIGlkID0gVXRpbC5nZXRVSUQoTkFNRSlcbiAgICAgICAgJChjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcsIGlkKVxuICAgICAgfVxuICAgICAgY29uZmlnLnRhcmdldCA9IGAjJHtpZH1gXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvd1xuICAgICAgPyB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcbiAgfVxuXG4gIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93XG4gICAgICA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH1cblxuICBfcHJvY2VzcygpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgICAgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuICAgIGNvbnN0IG1heFNjcm9sbCAgICA9IHRoaXMuX2NvbmZpZy5vZmZzZXQgK1xuICAgICAgc2Nyb2xsSGVpZ2h0IC1cbiAgICAgIHRoaXMuX2dldE9mZnNldEhlaWdodCgpXG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsSGVpZ2h0ICE9PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXVxuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdICYmIHRoaXMuX29mZnNldHNbMF0gPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICB0aGlzLl9jbGVhcigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRMZW5ndGggPSB0aGlzLl9vZmZzZXRzLmxlbmd0aFxuICAgIGZvciAobGV0IGkgPSBvZmZzZXRMZW5ndGg7IGktLTspIHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlVGFyZ2V0ID0gdGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0aGlzLl90YXJnZXRzW2ldICYmXG4gICAgICAgICAgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV0gJiZcbiAgICAgICAgICAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgICBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSlcblxuICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX3RhcmdldHNbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FjdGl2YXRlKHRhcmdldCkge1xuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgdGhpcy5fY2xlYXIoKVxuXG4gICAgY29uc3QgcXVlcmllcyA9IHRoaXMuX3NlbGVjdG9yXG4gICAgICAuc3BsaXQoJywnKVxuICAgICAgLm1hcCgoc2VsZWN0b3IpID0+IGAke3NlbGVjdG9yfVtkYXRhLXRhcmdldD1cIiR7dGFyZ2V0fVwiXSwke3NlbGVjdG9yfVtocmVmPVwiJHt0YXJnZXR9XCJdYClcblxuICAgIGNvbnN0ICRsaW5rID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcmllcy5qb2luKCcsJykpKSlcblxuICAgIGlmICgkbGluay5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUERPV05fSVRFTSkpIHtcbiAgICAgICRsaW5rLmNsb3Nlc3QoU2VsZWN0b3IuRFJPUERPV04pLmZpbmQoU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgJGxpbmsuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rIGFzIGFjdGl2ZVxuICAgICAgJGxpbmsuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgJGxpbmsucGFyZW50cyhTZWxlY3Rvci5OQVZfTElTVF9HUk9VUCkucHJldihgJHtTZWxlY3Rvci5OQVZfTElOS1N9LCAke1NlbGVjdG9yLkxJU1RfSVRFTVN9YCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiAubmF2LWxpbmsgaXMgaW5zaWRlIC5uYXYtaXRlbVxuICAgICAgJGxpbmsucGFyZW50cyhTZWxlY3Rvci5OQVZfTElTVF9HUk9VUCkucHJldihTZWxlY3Rvci5OQVZfSVRFTVMpLmNoaWxkcmVuKFNlbGVjdG9yLk5BVl9MSU5LUykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9XG5cbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLnRyaWdnZXIoRXZlbnQuQUNUSVZBVEUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgIH0pXG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSlcbiAgICAgIC5maWx0ZXIoKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpKVxuICAgICAgLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFNjcm9sbFNweSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsU3B5cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1NQWSkpXG4gIGNvbnN0IHNjcm9sbFNweXNMZW5ndGggPSBzY3JvbGxTcHlzLmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSBzY3JvbGxTcHlzTGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgJHNweSA9ICQoc2Nyb2xsU3B5c1tpXSlcbiAgICBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRzcHksICRzcHkuZGF0YSgpKVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTY3JvbGxTcHlcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjQuMSk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgPSAndGFiJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIERST1BET1dOX01FTlUgOiAnZHJvcGRvd24tbWVudScsXG4gIEFDVElWRSAgICAgICAgOiAnYWN0aXZlJyxcbiAgRElTQUJMRUQgICAgICA6ICdkaXNhYmxlZCcsXG4gIEZBREUgICAgICAgICAgOiAnZmFkZScsXG4gIFNIT1cgICAgICAgICAgOiAnc2hvdydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERST1BET1dOICAgICAgICAgICAgICA6ICcuZHJvcGRvd24nLFxuICBOQVZfTElTVF9HUk9VUCAgICAgICAgOiAnLm5hdiwgLmxpc3QtZ3JvdXAnLFxuICBBQ1RJVkUgICAgICAgICAgICAgICAgOiAnLmFjdGl2ZScsXG4gIEFDVElWRV9VTCAgICAgICAgICAgICA6ICc+IGxpID4gLmFjdGl2ZScsXG4gIERBVEFfVE9HR0xFICAgICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLXRvZ2dsZT1cImxpc3RcIl0nLFxuICBEUk9QRE9XTl9UT0dHTEUgICAgICAgOiAnLmRyb3Bkb3duLXRvZ2dsZScsXG4gIERST1BET1dOX0FDVElWRV9DSElMRCA6ICc+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUYWIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJlxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSkgfHxcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0XG4gICAgbGV0IHByZXZpb3VzXG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApWzBdXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgY29uc3QgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTZWxlY3Rvci5BQ1RJVkVfVUwgOiBTZWxlY3Rvci5BQ1RJVkVcbiAgICAgIHByZXZpb3VzID0gJC5tYWtlQXJyYXkoJChsaXN0RWxlbWVudCkuZmluZChpdGVtU2VsZWN0b3IpKVxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHxcbiAgICAgICAgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZhdGUoXG4gICAgICB0aGlzLl9lbGVtZW50LFxuICAgICAgbGlzdEVsZW1lbnRcbiAgICApXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhpZGRlbkV2ZW50ID0gJC5FdmVudChFdmVudC5ISURERU4sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSlcblxuICAgICAgY29uc3Qgc2hvd25FdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pXG5cbiAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZGVuRXZlbnQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudClcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJylcbiAgICAgID8gJChjb250YWluZXIpLmZpbmQoU2VsZWN0b3IuQUNUSVZFX1VMKVxuICAgICAgOiAkKGNvbnRhaW5lcikuY2hpbGRyZW4oU2VsZWN0b3IuQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF1cbiAgICBjb25zdCBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiAoYWN0aXZlICYmICQoYWN0aXZlKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB0aGlzLl90cmFuc2l0aW9uQ29tcGxldGUoXG4gICAgICBlbGVtZW50LFxuICAgICAgYWN0aXZlLFxuICAgICAgY2FsbGJhY2tcbiAgICApXG5cbiAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmUpXG5cbiAgICAgICQoYWN0aXZlKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAkKGFjdGl2ZSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgY29uc3QgZHJvcGRvd25DaGlsZCA9ICQoYWN0aXZlLnBhcmVudE5vZGUpLmZpbmQoXG4gICAgICAgIFNlbGVjdG9yLkRST1BET1dOX0FDVElWRV9DSElMRFxuICAgICAgKVswXVxuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAkKGRyb3Bkb3duQ2hpbGQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgVXRpbC5yZWZsb3coZWxlbWVudClcblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuU0hPVylcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmICQoZWxlbWVudC5wYXJlbnROb2RlKS5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUERPV05fTUVOVSkpIHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChTZWxlY3Rvci5EUk9QRE9XTilbMF1cblxuICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICBjb25zdCBkcm9wZG93blRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRyb3Bkb3duRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRST1BET1dOX1RPR0dMRSkpXG5cbiAgICAgICAgJChkcm9wZG93blRvZ2dsZUxpc3QpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUYWIodGhpcylcbiAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgVGFiLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAnc2hvdycpXG4gIH0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBUYWIuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRhYlxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUYWIuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNC4xKTogdG9hc3QuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3RvYXN0J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNC4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRXZlbnQgPSB7XG4gIENMSUNLX0RJU01JU1MgOiBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIEhJREUgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBGQURFICAgIDogJ2ZhZGUnLFxuICBISURFICAgIDogJ2hpZGUnLFxuICBTSE9XICAgIDogJ3Nob3cnLFxuICBTSE9XSU5HIDogJ3Nob3dpbmcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb24gOiAnYm9vbGVhbicsXG4gIGF1dG9oaWRlICA6ICdib29sZWFuJyxcbiAgZGVsYXkgICAgIDogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uIDogdHJ1ZSxcbiAgYXV0b2hpZGUgIDogdHJ1ZSxcbiAgZGVsYXkgICAgIDogNTAwXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEQVRBX0RJU01JU1MgOiAnW2RhdGEtZGlzbWlzcz1cInRvYXN0XCJdJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9hc3Qge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5TSE9XSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuU0hPV04pXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLkhJREUpXG4gICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlNIT1dJTkcpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbG9zZSgpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNIT1cpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuQ0xJQ0tfRElTTUlTUylcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICBFdmVudC5DTElDS19ESVNNSVNTLFxuICAgICAgU2VsZWN0b3IuREFUQV9ESVNNSVNTLFxuICAgICAgKCkgPT4gdGhpcy5oaWRlKClcbiAgICApXG4gIH1cblxuICBfY2xvc2UoKSB7XG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLkhJREUpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU0hPVylcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyAgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSAgICAgICAgICAgICA9IFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb2FzdFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVG9hc3QuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIl19
