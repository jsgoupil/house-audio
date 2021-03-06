/*
 jQuery v1.7.1 jquery.com | jquery.org/license */
(function (b, g) {
    function q(a) {
        return d.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    function s(a) {
        if (!ib[a]) {
            var r = v.body,
                c = d("<" + a + ">").appendTo(r),
                w = c.css("display");
            c.remove();
            if ("none" === w || "" === w) {
                Ca || (Ca = v.createElement("iframe"), Ca.frameBorder = Ca.width = Ca.height = 0);
                r.appendChild(Ca);
                if (!Ga || !Ca.createElement) Ga = (Ca.contentWindow || Ca.contentDocument).document, Ga.write(("CSS1Compat" === v.compatMode ? "<!doctype html>" : "") + "<html><body>"), Ga.close();
                c = Ga.createElement(a);
                Ga.body.appendChild(c);
                w = d.css(c, "display");
                r.removeChild(Ca)
            }
            ib[a] = w
        }
        return ib[a]
    }
    function p(a, r) {
        var c = {};
        d.each(jb.concat.apply([], jb.slice(0, r)), function () {
            c[this] = a
        });
        return c
    }
    function k() {
        c = g
    }
    function n() {
        setTimeout(k, 0);
        return c = d.now()
    }
    function B() {
        try {
            return new b.XMLHttpRequest
        } catch (a) {}
    }
    function y(a, r, c, w) {
        if (d.isArray(r)) d.each(r, function (r, h) {
            c || Bb.test(a) ? w(a, h) : y(a + "[" + ("object" == typeof h || d.isArray(h) ? r : "") + "]", h, c, w)
        });
        else if (!c && null != r && "object" == typeof r) for (var h in r) y(a + "[" + h + "]", r[h], c, w);
        else w(a,
        r)
    }
    function x(a, r) {
        var c, w, h = d.ajaxSettings.flatOptions || {};
        for (c in r) r[c] !== g && ((h[c] ? a : w || (w = {}))[c] = r[c]);
        w && d.extend(!0, a, w)
    }
    function t(a, d, c, w, h, b) {
        h = h || d.dataTypes[0];
        b = b || {};
        b[h] = !0;
        for (var h = a[h], m = 0, e = h ? h.length : 0, f = a === Ha, j; m < e && (f || !j); m++) j = h[m](d, c, w), "string" == typeof j && (!f || b[j] ? j = g : (d.dataTypes.unshift(j), j = t(a, d, c, w, j, b)));
        (f || !j) && !b["*"] && (j = t(a, d, c, w, "*", b));
        return j
    }
    function o(a) {
        return function (r, c) {
            "string" != typeof r && (c = r, r = "*");
            if (d.isFunction(c)) for (var h = r.toLowerCase().split(kb),
            b = 0, m = h.length, e, f; b < m; b++) e = h[b], (f = /^\+/.test(e)) && (e = e.substr(1) || "*"), e = a[e] = a[e] || [], e[f ? "unshift" : "push"](c)
        }
    }
    function e(a, r, c) {
        var h = "width" === r ? a.offsetWidth : a.offsetHeight,
            b = "width" === r ? sb : tb,
            m = 0,
            e = b.length;
        if (0 < h) {
            if ("border" !== c) for (; m < e; m++) c || (h -= parseFloat(d.css(a, "padding" + b[m])) || 0), "margin" === c ? h += parseFloat(d.css(a, c + b[m])) || 0 : h -= parseFloat(d.css(a, "border" + b[m] + "Width")) || 0;
            return h + "px"
        }
        h = Ua(a, r, r);
        if (0 > h || null == h) h = a.style[r] || 0;
        h = parseFloat(h) || 0;
        if (c) for (; m < e; m++) h += parseFloat(d.css(a,
            "padding" + b[m])) || 0, "padding" !== c && (h += parseFloat(d.css(a, "border" + b[m] + "Width")) || 0), "margin" === c && (h += parseFloat(d.css(a, c + b[m])) || 0);
        return h + "px"
    }
    function f(a, r) {
        r.src ? d.ajax({
            url: r.src,
            async: !1,
            dataType: "script"
        }) : d.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ja, "/*$0*/"));
        r.parentNode && r.parentNode.removeChild(r)
    }
    function j(a) {
        var r = (a.nodeName || "").toLowerCase();
        "input" === r ? u(a) : "script" !== r && "undefined" != typeof a.getElementsByTagName && d.grep(a.getElementsByTagName("input"),
        u)
    }
    function u(a) {
        if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
    }
    function P(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }
    function L(a, r) {
        var c;
        if (1 === r.nodeType) {
            r.clearAttributes && r.clearAttributes();
            r.mergeAttributes && r.mergeAttributes(a);
            c = r.nodeName.toLowerCase();
            if ("object" === c) r.outerHTML = a.outerHTML;
            else if ("input" !== c || "checkbox" !== a.type && "radio" !== a.type) if ("option" === c) r.selected = a.defaultSelected;
            else {
                if ("input" === c || "textarea" === c) r.defaultValue = a.defaultValue
            } else a.checked && (r.defaultChecked = r.checked = a.checked), r.value !== a.value && (r.value = a.value);
            r.removeAttribute(d.expando)
        }
    }
    function H(a, r) {
        if (1 === r.nodeType && d.hasData(a)) {
            var c, h, b;
            h = d._data(a);
            var m = d._data(r, h),
                e = h.events;
            if (e) for (c in delete m.handle, m.events = {}, e) {
                h = 0;
                for (b = e[c].length; h < b; h++) d.event.add(r, c + (e[c][h].namespace ? "." : "") + e[c][h].namespace, e[c][h], e[c][h].data)
            }
            m.data && (m.data = d.extend({},
            m.data))
        }
    }
    function D(a) {
        var d = Ka.split("|"),
            a = a.createDocumentFragment();
        if (a.createElement) for (; d.length;) a.createElement(d.pop());
        return a
    }
    function F(a, r, c) {
        r = r || 0;
        if (d.isFunction(r)) return d.grep(a, function (a, d) {
            return !!r.call(a, d, a) === c
        });
        if (r.nodeType) return d.grep(a, function (a) {
            return a === r === c
        });
        if ("string" == typeof r) {
            var h = d.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if ($a.test(r)) return d.filter(r, h, !c);
            r = d.filter(r, h)
        }
        return d.grep(a, function (a) {
            return 0 <= d.inArray(a, r) === c
        })
    }
    function A() {
        return !0
    }

    function V() {
        return !1
    }
    function I(a, r, c) {
        var h = r + "defer",
            b = r + "queue",
            m = r + "mark",
            e = d._data(a, h);
        e && ("queue" === c || !d._data(a, b)) && ("mark" === c || !d._data(a, m)) && setTimeout(function () {
            !d._data(a, b) && !d._data(a, m) && (d.removeData(a, h, !0), e.fire())
        }, 0)
    }
    function Q(a) {
        for (var r in a) if (!("data" === r && d.isEmptyObject(a[r])) && "toJSON" !== r) return !1;
        return !0
    }
    function ia(a, r, c) {
        if (c === g && 1 === a.nodeType) if (c = "data-" + r.replace(oa, "-$1").toLowerCase(), c = a.getAttribute(c), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : d.isNumeric(c) ? parseFloat(c) : ca.test(c) ? d.parseJSON(c) : c
            } catch (h) {}
            d.data(a, r, c)
        } else c = g;
        return c
    }
    function W(a) {
        var d = S[a] = {}, c, h, a = a.split(/\s+/);
        c = 0;
        for (h = a.length; c < h; c++) d[a[c]] = !0;
        return d
    }
    var v = b.document,
        ea = b.navigator,
        ka = b.location,
        d = function () {
            function a() {
                if (!d.isReady) {
                    try {
                        v.documentElement.doScroll("left")
                    } catch (c) {
                        setTimeout(a, 1);
                        return
                    }
                    d.ready()
                }
            }
            var d = function (a, c) {
                return new d.fn.init(a, c, m)
            }, c = b.jQuery,
                h = b.$,
                m, e = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                Ta =
                    /\S/,
                f = /^\s+/,
                j = /\s+$/,
                k = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                o = /^[\],:{}\s]*$/,
                u = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                n = /(?:^|:|,)(?:\s*\[)+/g,
                t = /(webkit)[ \/]([\w.]+)/,
                x = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                M = /(msie) ([\w.]+)/,
                X = /(mozilla)(?:.*? rv:([\w.]+))?/,
                y = /-([a-z]|[0-9])/ig,
                s = /^-ms-/,
                N = function (a, d) {
                    return (d + "").toUpperCase()
                }, B = ea.userAgent,
                Wa, gb, Nb = Object.prototype.toString,
                P = Object.prototype.hasOwnProperty,
                Db = Array.prototype.push,
                q = Array.prototype.slice,
                D = String.prototype.trim,
                H = Array.prototype.indexOf,
                Lb = {};
            d.fn = d.prototype = {
                constructor: d,
                init: function (a, c, h) {
                    var z, w;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && v.body) return this.context = v, this[0] = v.body, this.selector = a, this.length = 1, this;
                    if ("string" == typeof a) {
                        "<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || 3 > a.length ? z = e.exec(a) : z = [null, a, null];
                        if (z && (z[1] || !c)) {
                            if (z[1]) return w = (c = c instanceof d ? c[0] : c) ? c.ownerDocument || c : v, (h = k.exec(a)) ? d.isPlainObject(c) ? (a = [v.createElement(h[1])], d.fn.attr.call(a, c, !0)) : a = [w.createElement(h[1])] : (h = d.buildFragment([z[1]], [w]), a = (h.cacheable ? d.clone(h.fragment) : h.fragment).childNodes), d.merge(this, a);
                            if ((c = v.getElementById(z[2])) && c.parentNode) {
                                if (c.id !== z[2]) return h.find(a);
                                this.length = 1;
                                this[0] = c
                            }
                            this.context = v;
                            this.selector = a;
                            return this
                        }
                        return !c || c.jquery ? (c || h).find(a) : this.constructor(c).find(a)
                    }
                    if (d.isFunction(a)) return h.ready(a);
                    a.selector !== g && (this.selector = a.selector,
                    this.context = a.context);
                    return d.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return q.call(this, 0)
                },
                get: function (a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function (a, c, h) {
                    var z = this.constructor();
                    d.isArray(a) ? Db.apply(z, a) : d.merge(z, a);
                    z.prevObject = this;
                    z.context = this.context;
                    "find" === c ? z.selector = this.selector + (this.selector ? " " : "") + h : c && (z.selector = this.selector + "." + c + "(" + h + ")");
                    return z
                },
                each: function (a,
                c) {
                    return d.each(this, a, c)
                },
                ready: function (a) {
                    d.bindReady();
                    Wa.add(a);
                    return this
                },
                eq: function (a) {
                    a = +a;
                    return -1 === a ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(q.apply(this, arguments), "slice", q.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(d.map(this, function (d, r) {
                        return a.call(d, r, d)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: Db,
                sort: [].sort,
                splice: [].splice
            };
            d.fn.init.prototype = d.fn;
            d.extend = d.fn.extend = function () {
                var a, c, h, z, w, b, m = arguments[0] || {}, R = 1,
                    e = arguments.length,
                    Ab = !1;
                "boolean" == typeof m && (Ab = m, m = arguments[1] || {}, R = 2);
                "object" != typeof m && !d.isFunction(m) && (m = {});
                for (e === R && (m = this, --R); R < e; R++) if (null != (a = arguments[R])) for (c in a) h = m[c], z = a[c], m !== z && (Ab && z && (d.isPlainObject(z) || (w = d.isArray(z))) ? (w ? (w = !1, b = h && d.isArray(h) ? h : []) : b = h && d.isPlainObject(h) ? h : {}, m[c] = d.extend(Ab, b, z)) : z !== g && (m[c] = z));
                return m
            };
            d.extend({
                noConflict: function (a) {
                    b.$ === d && (b.$ = h);
                    a && b.jQuery === d && (b.jQuery = c);
                    return d
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? d.readyWait++ : d.ready(!0)
                },
                ready: function (a) {
                    if (!0 === a && !--d.readyWait || !0 !== a && !d.isReady) {
                        if (!v.body) return setTimeout(d.ready, 1);
                        d.isReady = !0;
                        !0 !== a && 0 < --d.readyWait || (Wa.fireWith(v, [d]), d.fn.trigger && d(v).trigger("ready").off("ready"))
                    }
                },
                bindReady: function () {
                    if (!Wa) {
                        Wa = d.Callbacks("once memory");
                        if ("complete" === v.readyState) return setTimeout(d.ready, 1);
                        if (v.addEventListener) v.addEventListener("DOMContentLoaded",
                        gb, !1), b.addEventListener("load", d.ready, !1);
                        else if (v.attachEvent) {
                            v.attachEvent("onreadystatechange", gb);
                            b.attachEvent("onload", d.ready);
                            var c = !1;
                            try {
                                c = null == b.frameElement
                            } catch (h) {}
                            v.documentElement.doScroll && c && a()
                        }
                    }
                },
                isFunction: function (a) {
                    return "function" === d.type(a)
                },
                isArray: Array.isArray || function (a) {
                    return "array" === d.type(a)
                },
                isWindow: function (a) {
                    return a && "object" == typeof a && "setInterval" in a
                },
                isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function (a) {
                    return null == a ? "" + a : Lb[Nb.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || "object" !== d.type(a) || a.nodeType || d.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !P.call(a, "constructor") && !P.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    for (var h in a);
                    return h === g || P.call(a, h)
                },
                isEmptyObject: function (a) {
                    for (var d in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw Error(a);
                },
                parseJSON: function (a) {
                    if ("string" != typeof a || !a) return null;
                    a = d.trim(a);
                    if (b.JSON && b.JSON.parse) return b.JSON.parse(a);
                    if (o.test(a.replace(u, "@").replace(p, "]").replace(n, ""))) return (new Function("return " + a))();
                    d.error("Invalid JSON: " + a)
                },
                parseXML: function (a) {
                    var c, h;
                    try {
                        b.DOMParser ? (h = new DOMParser, c = h.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
                    } catch (z) {
                        c = g
                    }(!c || !c.documentElement || c.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + a);
                    return c
                },
                noop: function () {},
                globalEval: function (a) {
                    a && Ta.test(a) && (b.execScript || function (a) {
                        b.eval.call(b,
                        a)
                    })(a)
                },
                camelCase: function (a) {
                    return a.replace(s, "ms-").replace(y, N)
                },
                nodeName: function (a, d) {
                    return a.nodeName && a.nodeName.toUpperCase() === d.toUpperCase()
                },
                each: function (a, c, h) {
                    var z, w = 0,
                        b = a.length,
                        m = b === g || d.isFunction(a);
                    if (h) if (m) for (z in a) {
                        if (!1 === c.apply(a[z], h)) break
                    } else for (; w < b && !1 !== c.apply(a[w++], h););
                    else if (m) for (z in a) {
                        if (!1 === c.call(a[z], z, a[z])) break
                    } else for (; w < b && !1 !== c.call(a[w], w, a[w++]););
                    return a
                },
                trim: D ? function (a) {
                    return null == a ? "" : D.call(a)
                } : function (a) {
                    return null == a ?
                        "" : (a + "").replace(f, "").replace(j, "")
                },
                makeArray: function (a, c) {
                    var h = c || [];
                    if (null != a) {
                        var z = d.type(a);
                        null == a.length || "string" === z || "function" === z || "regexp" === z || d.isWindow(a) ? Db.call(h, a) : d.merge(h, a)
                    }
                    return h
                },
                inArray: function (a, d, r) {
                    var c;
                    if (d) {
                        if (H) return H.call(d, a, r);
                        c = d.length;
                        for (r = r ? 0 > r ? Math.max(0, c + r) : r : 0; r < c; r++) if (r in d && d[r] === a) return r
                    }
                    return -1
                },
                merge: function (a, d) {
                    var r = a.length,
                        c = 0;
                    if ("number" == typeof d.length) for (var h = d.length; c < h; c++) a[r++] = d[c];
                    else for (; d[c] !== g;) a[r++] = d[c++];
                    a.length = r;
                    return a
                },
                grep: function (a, d, r) {
                    for (var c = [], h, r = !! r, z = 0, w = a.length; z < w; z++) h = !! d(a[z], z), r !== h && c.push(a[z]);
                    return c
                },
                map: function (a, c, h) {
                    var z, w, b = [],
                        m = 0,
                        R = a.length;
                    if (a instanceof d || R !== g && "number" == typeof R && (0 < R && a[0] && a[R - 1] || 0 === R || d.isArray(a))) for (; m < R; m++) z = c(a[m], m, h), null != z && (b[b.length] = z);
                    else for (w in a) z = c(a[w], w, h), null != z && (b[b.length] = z);
                    return b.concat.apply([], b)
                },
                guid: 1,
                proxy: function (a, c) {
                    if ("string" == typeof c) var h = a[c],
                        c = a,
                        a = h;
                    if (!d.isFunction(a)) return g;
                    var z = q.call(arguments, 2),
                        h = function () {
                            return a.apply(c, z.concat(q.call(arguments)))
                        };
                    h.guid = a.guid = a.guid || h.guid || d.guid++;
                    return h
                },
                access: function (a, c, h, z, w, b) {
                    var m = a.length;
                    if ("object" == typeof c) {
                        for (var R in c) d.access(a, R, c[R], z, w, h);
                        return a
                    }
                    if (h !== g) {
                        z = !b && z && d.isFunction(h);
                        for (R = 0; R < m; R++) w(a[R], c, z ? h.call(a[R], R, w(a[R], c)) : h, b);
                        return a
                    }
                    return m ? w(a[0], c) : g
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    a = t.exec(a) || x.exec(a) || M.exec(a) || 0 > a.indexOf("compatible") && X.exec(a) || [];
                    return {
                        browser: a[1] || "",
                        version: a[2] || "0"
                    }
                },
                sub: function () {
                    function a(d, r) {
                        return new a.fn.init(d, r)
                    }
                    d.extend(!0, a, this);
                    a.superclass = this;
                    a.fn = a.prototype = this();
                    a.fn.constructor = a;
                    a.sub = this.sub;
                    a.fn.init = function (h, z) {
                        z && z instanceof d && !(z instanceof a) && (z = a(z));
                        return d.fn.init.call(this, h, z, c)
                    };
                    a.fn.init.prototype = a.fn;
                    var c = a(v);
                    return a
                },
                browser: {}
            });
            d.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","), function (a, d) {
                Lb["[object " + d + "]"] = d.toLowerCase()
            });
            B = d.uaMatch(B);
            B.browser && (d.browser[B.browser] = !0, d.browser.version = B.version);
            d.browser.webkit && (d.browser.safari = !0);
            Ta.test("\u00a0") && (f = /^[\s\xA0]+/, j = /[\s\xA0]+$/);
            m = d(v);
            v.addEventListener ? gb = function () {
                v.removeEventListener("DOMContentLoaded", gb, !1);
                d.ready()
            } : v.attachEvent && (gb = function () {
                "complete" === v.readyState && (v.detachEvent("onreadystatechange", gb), d.ready())
            });
            return d
        }(),
        S = {};
    d.Callbacks = function (a) {
        var a = a ? S[a] || W(a) : {}, r = [],
            c = [],
            h, b, m, e, f, j = function (c) {
                var h, z, w, b;
                h = 0;
                for (z = c.length; h < z; h++) w = c[h], b = d.type(w), "array" === b ? j(w) : "function" === b && (!a.unique || !o.has(w)) && r.push(w)
            }, k = function (d, j) {
                j = j || [];
                h = !a.memory || [d, j];
                b = !0;
                f = m || 0;
                m = 0;
                for (e = r.length; r && f < e; f++) if (!1 === r[f].apply(d, j) && a.stopOnFalse) {
                    h = !0;
                    break
                }
                b = !1;
                r && (a.once ? !0 === h ? o.disable() : r = [] : c && c.length && (h = c.shift(), o.fireWith(h[0], h[1])))
            }, o = {
                add: function () {
                    if (r) {
                        var a = r.length;
                        j(arguments);
                        b ? e = r.length : h && !0 !== h && (m = a, k(h[0], h[1]))
                    }
                    return this
                },
                remove: function () {
                    if (r) for (var d = arguments, c = 0, h = d.length; c < h; c++) for (var z = 0; z < r.length && !(d[c] === r[z] && (b && z <= e && (e--, z <= f && f--), r.splice(z--, 1), a.unique)); z++);
                    return this
                },
                has: function (a) {
                    if (r) for (var d = 0, c = r.length; d < c; d++) if (a === r[d]) return !0;
                    return !1
                },
                empty: function () {
                    r = [];
                    return this
                },
                disable: function () {
                    r = c = h = g;
                    return this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    c = g;
                    (!h || !0 === h) && o.disable();
                    return this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (d, r) {
                    c && (b ? a.once || c.push([d, r]) : (!a.once || !h) && k(d, r));
                    return this
                },
                fire: function () {
                    o.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!h
                }
            };
        return o
    };
    var Y = [].slice;
    d.extend({
        Deferred: function (a) {
            var c = d.Callbacks("once memory"),
                h = d.Callbacks("once memory"),
                w = d.Callbacks("memory"),
                b = "pending",
                m = {
                    resolve: c,
                    reject: h,
                    notify: w
                }, e = {
                    done: c.add,
                    fail: h.add,
                    progress: w.add,
                    state: function () {
                        return b
                    },
                    isResolved: c.fired,
                    isRejected: h.fired,
                    then: function (a, d, c) {
                        f.done(a).fail(d).progress(c);
                        return this
                    },
                    always: function () {
                        f.done.apply(f, arguments).fail.apply(f, arguments);
                        return this
                    },
                    pipe: function (a, c, r) {
                        return d.Deferred(function (h) {
                            d.each({
                                done: [a,
                                    "resolve"],
                                fail: [c, "reject"],
                                progress: [r, "notify"]
                            }, function (a, c) {
                                var r = c[0],
                                    z = c[1],
                                    w;
                                d.isFunction(r) ? f[a](function () {
                                    (w = r.apply(this, arguments)) && d.isFunction(w.promise) ? w.promise().then(h.resolve, h.reject, h.notify) : h[z + "With"](this === f ? h : this, [w])
                                }) : f[a](h[z])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (null == a) a = e;
                        else for (var d in e) a[d] = e[d];
                        return a
                    }
                }, f = e.promise({}),
                j;
            for (j in m) f[j] = m[j].fire, f[j + "With"] = m[j].fireWith;
            f.done(function () {
                b = "resolved"
            }, h.disable, w.lock).fail(function () {
                b = "rejected"
            },
            c.disable, w.lock);
            a && a.call(f, f);
            return f
        },
        when: function (a) {
            function c(a) {
                return function (d) {
                    e[a] = 1 < arguments.length ? Y.call(arguments, 0) : d;
                    j.notifyWith(g, e)
                }
            }
            function h(a) {
                return function (d) {
                    w[a] = 1 < arguments.length ? Y.call(arguments, 0) : d;
                    --f || j.resolveWith(j, w)
                }
            }
            var w = Y.call(arguments, 0),
                b = 0,
                m = w.length,
                e = Array(m),
                f = m,
                j = 1 >= m && a && d.isFunction(a.promise) ? a : d.Deferred(),
                g = j.promise();
            if (1 < m) {
                for (; b < m; b++) w[b] && w[b].promise && d.isFunction(w[b].promise) ? w[b].promise().then(h(b), j.reject, c(b)) : --f;
                f || j.resolveWith(j,
                w)
            } else j !== a && j.resolveWith(j, m ? [a] : []);
            return g
        }
    });
    d.support = function () {
        var a, c, h, w, m, e, Ta, f, j, g = v.createElement("div");
        g.setAttribute("className", "t");
        g.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        c = g.getElementsByTagName("*");
        h = g.getElementsByTagName("a")[0];
        if (!c || !c.length || !h) return {};
        w = v.createElement("select");
        m = w.appendChild(v.createElement("option"));
        c = g.getElementsByTagName("input")[0];
        a = {
            leadingWhitespace: 3 === g.firstChild.nodeType,
            tbody: !g.getElementsByTagName("tbody").length,
            htmlSerialize: !! g.getElementsByTagName("link").length,
            style: /top/.test(h.getAttribute("style")),
            hrefNormalized: "/a" === h.getAttribute("href"),
            opacity: /^0.55/.test(h.style.opacity),
            cssFloat: !! h.style.cssFloat,
            checkOn: "on" === c.value,
            optSelected: m.selected,
            getSetAttribute: "t" !== g.className,
            enctype: !! v.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== v.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        c.checked = !0;
        a.noCloneChecked = c.cloneNode(!0).checked;
        w.disabled = !0;
        a.optDisabled = !m.disabled;
        try {
            delete g.test
        } catch (o) {
            a.deleteExpando = !1
        }!g.addEventListener && g.attachEvent && g.fireEvent && (g.attachEvent("onclick", function () {
            a.noCloneEvent = !1
        }), g.cloneNode(!0).fireEvent("onclick"));
        c = v.createElement("input");
        c.value = "t";
        c.setAttribute("type", "radio");
        a.radioValue = "t" === c.value;
        c.setAttribute("checked", "checked");
        g.appendChild(c);
        h = v.createDocumentFragment();
        h.appendChild(g.lastChild);
        a.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.appendChecked = c.checked;
        h.removeChild(c);
        h.appendChild(g);
        g.innerHTML = "";
        b.getComputedStyle && (e = v.createElement("div"), e.style.width = "0", e.style.marginRight = "0", g.style.width = "2px", g.appendChild(e), a.reliableMarginRight = 0 === (parseInt((b.getComputedStyle(e, null) || {
            marginRight: 0
        }).marginRight, 10) || 0));
        if (g.attachEvent) for (f in {
            submit: 1,
            change: 1,
            focusin: 1
        }) e = "on" + f, (j = e in g) || (g.setAttribute(e, "return;"), j = "function" == typeof g[e]), a[f + "Bubbles"] = j;
        h.removeChild(g);
        h = w = m = e = g = c = null;
        d(function () {
            var c, r, h, z, w, b = v.getElementsByTagName("body")[0];
            !b || (c = v.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", b.insertBefore(c, b.firstChild), g = v.createElement("div"), c.appendChild(g), g.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",
            Ta = g.getElementsByTagName("td"), j = 0 === Ta[0].offsetHeight, Ta[0].style.display = "", Ta[1].style.display = "none", a.reliableHiddenOffsets = j && 0 === Ta[0].offsetHeight, g.innerHTML = "", g.style.width = g.style.paddingLeft = "1px", d.boxModel = a.boxModel = 2 === g.offsetWidth, "undefined" != typeof g.style.zoom && (g.style.display = "inline", g.style.zoom = 1, a.inlineBlockNeedsLayout = 2 === g.offsetWidth, g.style.display = "", g.innerHTML = "<div style='width:4px;'></div>", a.shrinkWrapBlocks = 2 !== g.offsetWidth), g.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;",
            g.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", r = g.firstChild, h = r.firstChild, z = r.nextSibling.firstChild.firstChild, w = {
                doesNotAddBorder: 5 !== h.offsetTop,
                doesAddBorderForTableAndCells: 5 === z.offsetTop
            }, h.style.position = "fixed", h.style.top = "20px",
            w.fixedPosition = 20 === h.offsetTop || 15 === h.offsetTop, h.style.position = h.style.top = "", r.style.overflow = "hidden", r.style.position = "relative", w.subtractsBorderForOverflowNotVisible = -5 === h.offsetTop, w.doesNotIncludeMarginInBodyOffset = 1 !== b.offsetTop, b.removeChild(c), g = null, d.extend(a, w))
        });
        return a
    }();
    var ca = /^(?:\{.*\}|\[.*\])$/,
        oa = /([A-Z])/g;
    d.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
            return !!a && !Q(a)
        },
        data: function (a, c, h, w) {
            if (d.acceptData(a)) {
                var b, m;
                b = d.expando;
                var e = "string" == typeof c,
                    f = a.nodeType,
                    j = f ? d.cache : a,
                    o = f ? a[b] : a[b] && b,
                    k = "events" === c;
                if (o && j[o] && (k || w || j[o].data) || !(e && h === g)) {
                    o || (f ? a[b] = o = ++d.uuid : o = b);
                    j[o] || (j[o] = {}, f || (j[o].toJSON = d.noop));
                    if ("object" == typeof c || "function" == typeof c) w ? j[o] = d.extend(j[o], c) : j[o].data = d.extend(j[o].data, c);
                    a = b = j[o];
                    w || (b.data || (b.data = {}), b = b.data);
                    h !== g && (b[d.camelCase(c)] = h);
                    if (k && !b[c]) return a.events;
                    e ? (m = b[c], null == m && (m = b[d.camelCase(c)])) : m = b;
                    return m
                }
            }
        },
        removeData: function (a, c, h) {
            if (d.acceptData(a)) {
                var w, b, m, e = d.expando,
                    f = a.nodeType,
                    j = f ? d.cache : a,
                    g = f ? a[e] : e;
                if (j[g]) {
                    if (c && (w = h ? j[g] : j[g].data)) {
                        d.isArray(c) || (c in w ? c = [c] : (c = d.camelCase(c), c in w ? c = [c] : c = c.split(" ")));
                        b = 0;
                        for (m = c.length; b < m; b++) delete w[c[b]];
                        if (!(h ? Q : d.isEmptyObject)(w)) return
                    }
                    if (!h && (delete j[g].data, !Q(j[g]))) return;
                    d.support.deleteExpando || !j.setInterval ? delete j[g] : j[g] = null;
                    f && (d.support.deleteExpando ? delete a[e] : a.removeAttribute ? a.removeAttribute(e) : a[e] = null)
                }
            }
        },
        _data: function (a, c, h) {
            return d.data(a, c, h, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var c = d.noData[a.nodeName.toLowerCase()];
                if (c) return !0 !== c && a.getAttribute("classid") === c
            }
            return !0
        }
    });
    d.fn.extend({
        data: function (a, c) {
            var h, w, b, m = null;
            if ("undefined" == typeof a) {
                if (this.length && (m = d.data(this[0]), 1 === this[0].nodeType && !d._data(this[0], "parsedAttrs"))) {
                    w = this[0].attributes;
                    for (var e = 0, j = w.length; e < j; e++) b = w[e].name, 0 === b.indexOf("data-") && (b = d.camelCase(b.substring(5)), ia(this[0], b, m[b]));
                    d._data(this[0], "parsedAttrs", !0)
                }
                return m
            }
            if ("object" == typeof a) return this.each(function () {
                d.data(this, a)
            });
            h = a.split(".");
            h[1] = h[1] ? "." + h[1] : "";
            return c === g ? (m = this.triggerHandler("getData" + h[1] + "!", [h[0]]), m === g && this.length && (m = d.data(this[0], a), m = ia(this[0], a, m)), m === g && h[1] ? this.data(h[0]) : m) : this.each(function () {
                var w = d(this),
                    b = [h[0], c];
                w.triggerHandler("setData" + h[1] + "!", b);
                d.data(this, a, c);
                w.triggerHandler("changeData" + h[1] + "!", b)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                d.removeData(this,
                a)
            })
        }
    });
    d.extend({
        _mark: function (a, c) {
            a && (c = (c || "fx") + "mark", d._data(a, c, (d._data(a, c) || 0) + 1))
        },
        _unmark: function (a, c, h) {
            !0 !== a && (h = c, c = a, a = !1);
            if (c) {
                var h = h || "fx",
                    w = h + "mark";
                (a = a ? 0 : (d._data(c, w) || 1) - 1) ? d._data(c, w, a) : (d.removeData(c, w, !0), I(c, h, "mark"))
            }
        },
        queue: function (a, c, h) {
            var w;
            if (a) return c = (c || "fx") + "queue", w = d._data(a, c), h && (!w || d.isArray(h) ? w = d._data(a, c, d.makeArray(h)) : w.push(h)), w || []
        },
        dequeue: function (a, c) {
            var c = c || "fx",
                h = d.queue(a, c),
                w = h.shift(),
                b = {};
            "inprogress" === w && (w = h.shift());
            w && ("fx" === c && h.unshift("inprogress"), d._data(a, c + ".run", b), w.call(a, function () {
                d.dequeue(a, c)
            }, b));
            h.length || (d.removeData(a, c + "queue " + c + ".run", !0), I(a, c, "queue"))
        }
    });
    d.fn.extend({
        queue: function (a, c) {
            "string" != typeof a && (c = a, a = "fx");
            return c === g ? d.queue(this[0], a) : this.each(function () {
                var h = d.queue(this, a, c);
                "fx" === a && "inprogress" !== h[0] && d.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                d.dequeue(this, a)
            })
        },
        delay: function (a, c) {
            a = d.fx ? d.fx.speeds[a] || a : a;
            return this.queue(c || "fx",

            function (d, c) {
                var r = setTimeout(d, a);
                c.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a) {
            function c() {
                --m || h.resolveWith(w, [w])
            }
            "string" != typeof a && (a = g);
            for (var a = a || "fx", h = d.Deferred(), w = this, b = w.length, m = 1, e = a + "defer", j = a + "queue", a = a + "mark", f; b--;) if (f = d.data(w[b], e, g, !0) || (d.data(w[b], j, g, !0) || d.data(w[b], a, g, !0)) && d.data(w[b], e, d.Callbacks("once memory"), !0)) m++, f.add(c);
            c();
            return h.promise()
        }
    });
    var la = /[\n\t\r]/g,
        fa = /\s+/,
        sa = /\r/g,
        C = /^(?:button|input)$/i,
        U = /^(?:button|input|object|select|textarea)$/i,
        T = /^a(?:rea)?$/i,
        E = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        J = d.support.getSetAttribute,
        G, ga, aa;
    d.fn.extend({
        attr: function (a, c) {
            return d.access(this, a, c, !0, d.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                d.removeAttr(this, a)
            })
        },
        prop: function (a, c) {
            return d.access(this, a, c, !0, d.prop)
        },
        removeProp: function (a) {
            a = d.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = g, delete this[a]
                } catch (d) {}
            })
        },
        addClass: function (a) {
            var c, h, w, b, m, e, j;
            if (d.isFunction(a)) return this.each(function (c) {
                d(this).addClass(a.call(this, c, this.className))
            });
            if (a && "string" == typeof a) {
                c = a.split(fa);
                h = 0;
                for (w = this.length; h < w; h++) if (b = this[h], 1 === b.nodeType) if (!b.className && 1 === c.length) b.className = a;
                else {
                    m = " " + b.className + " ";
                    e = 0;
                    for (j = c.length; e < j; e++)~m.indexOf(" " + c[e] + " ") || (m += c[e] + " ");
                    b.className = d.trim(m)
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, h, w, b, m, e, j;
            if (d.isFunction(a)) return this.each(function (c) {
                d(this).removeClass(a.call(this,
                c, this.className))
            });
            if (a && "string" == typeof a || a === g) {
                c = (a || "").split(fa);
                h = 0;
                for (w = this.length; h < w; h++) if (b = this[h], 1 === b.nodeType && b.className) if (a) {
                    m = (" " + b.className + " ").replace(la, " ");
                    e = 0;
                    for (j = c.length; e < j; e++) m = m.replace(" " + c[e] + " ", " ");
                    b.className = d.trim(m)
                } else b.className = ""
            }
            return this
        },
        toggleClass: function (a, c) {
            var h = typeof a,
                w = "boolean" == typeof c;
            return d.isFunction(a) ? this.each(function (h) {
                d(this).toggleClass(a.call(this, h, this.className, c), c)
            }) : this.each(function () {
                if ("string" === h) for (var b, m = 0, e = d(this), j = c, f = a.split(fa); b = f[m++];) j = w ? j : !e.hasClass(b), e[j ? "addClass" : "removeClass"](b);
                else if ("undefined" === h || "boolean" === h) this.className && d._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : d._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            for (var a = " " + a + " ", d = 0, c = this.length; d < c; d++) if (1 === this[d].nodeType && -1 < (" " + this[d].className + " ").replace(la, " ").indexOf(a)) return !0;
            return !1
        },
        val: function (a) {
            var c, h, w, b = this[0];
            if (arguments.length) return w = d.isFunction(a), this.each(function (h) {
                var z = d(this),
                    b;
                if (1 === this.nodeType && (w ? b = a.call(this, h, z.val()) : b = a, null == b ? b = "" : "number" == typeof b ? b += "" : d.isArray(b) && (b = d.map(b, function (a) {
                    return a == null ? "" : a + ""
                })), c = d.valHooks[this.nodeName.toLowerCase()] || d.valHooks[this.type], !c || !("set" in c) || c.set(this, b, "value") === g)) this.value = b
            });
            if (b) {
                if ((c = d.valHooks[b.nodeName.toLowerCase()] || d.valHooks[b.type]) && "get" in c && (h = c.get(b, "value")) !== g) return h;
                h = b.value;
                return "string" == typeof h ? h.replace(sa, "") : null == h ? "" : h
            }
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var d = a.attributes.value;
                    return !d || d.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var c, h, b = a.selectedIndex,
                        m = [],
                        e = a.options,
                        j = "select-one" === a.type;
                    if (0 > b) return null;
                    a = j ? b : 0;
                    for (h = j ? b + 1 : e.length; a < h; a++) if (c = e[a], c.selected && (d.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !d.nodeName(c.parentNode, "optgroup"))) {
                        c = d(c).val();
                        if (j) return c;
                        m.push(c)
                    }
                    return j && !m.length && e.length ? d(e[b]).val() : m
                },
                set: function (a, c) {
                    var h = d.makeArray(c);
                    d(a).find("option").each(function () {
                        this.selected = 0 <= d.inArray(d(this).val(), h)
                    });
                    h.length || (a.selectedIndex = -1);
                    return h
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, h, b) {
            var m, e, j = a.nodeType;
            if (a && 3 !== j && 8 !== j && 2 !== j) {
                if (b && c in d.attrFn) return d(a)[c](h);
                if ("undefined" == typeof a.getAttribute) return d.prop(a, c, h);
                (b = 1 !== j || !d.isXMLDoc(a)) && (c = c.toLowerCase(), e = d.attrHooks[c] || (E.test(c) ? ga : G));
                if (h !== g) {
                    if (null === h) {
                        d.removeAttr(a, c);
                        return
                    }
                    if (e && "set" in e && b && (m = e.set(a, h, c)) !== g) return m;
                    a.setAttribute(c, "" + h);
                    return h
                }
                if (e && "get" in e && b && null !== (m = e.get(a, c))) return m;
                m = a.getAttribute(c);
                return null === m ? g : m
            }
        },
        removeAttr: function (a, c) {
            var h, b, m, e, j = 0;
            if (c && 1 === a.nodeType) {
                b = c.toLowerCase().split(fa);
                for (e = b.length; j < e; j++)(m = b[j]) && (h = d.propFix[m] || m, d.attr(a, m, ""), a.removeAttribute(J ? m : h), E.test(m) && h in a && (a[h] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, c) {
                    if (C.test(a.nodeName) && a.parentNode) d.error("type property can't be changed");
                    else if (!d.support.radioValue && "radio" === c && d.nodeName(a, "input")) {
                        var h = a.value;
                        a.setAttribute("type", c);
                        h && (a.value = h);
                        return c
                    }
                }
            },
            value: {
                get: function (a, c) {
                    return G && d.nodeName(a, "button") ? G.get(a, c) : c in a ? a.value : null
                },
                set: function (a, c, h) {
                    if (G && d.nodeName(a, "button")) return G.set(a, c, h);
                    a.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, h) {
            var b, m, e;
            e = a.nodeType;
            if (a && 3 !== e && 8 !== e && 2 !== e) return (e = 1 !== e || !d.isXMLDoc(a)) && (c = d.propFix[c] || c, m = d.propHooks[c]), h !== g ? m && "set" in m && (b = m.set(a, h, c)) !== g ? b : a[c] = h : m && "get" in m && null !== (b = m.get(a, c)) ? b : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var d = a.getAttributeNode("tabindex");
                    return d && d.specified ? parseInt(d.value, 10) : U.test(a.nodeName) || T.test(a.nodeName) && a.href ? 0 : g
                }
            }
        }
    });
    d.attrHooks.tabindex = d.propHooks.tabIndex;
    ga = {
        get: function (a, c) {
            var h, b = d.prop(a, c);
            return !0 === b || "boolean" != typeof b && (h = a.getAttributeNode(c)) && !1 !== h.nodeValue ? c.toLowerCase() : g
        },
        set: function (a, c, h) {
            var b;
            !1 === c ? d.removeAttr(a, h) : (b = d.propFix[h] || h, b in a && (a[b] = !0), a.setAttribute(h, h.toLowerCase()));
            return h
        }
    };
    J || (aa = {
        name: !0,
        id: !0
    }, G = d.valHooks.button = {
        get: function (a, d) {
            var c;
            return (c = a.getAttributeNode(d)) && (aa[d] ? "" !== c.nodeValue : c.specified) ? c.nodeValue : g
        },
        set: function (a, d, c) {
            var h = a.getAttributeNode(c);
            h || (h = v.createAttribute(c),
            a.setAttributeNode(h));
            return h.nodeValue = d + ""
        }
    }, d.attrHooks.tabindex.set = G.set, d.each(["width", "height"], function (a, c) {
        d.attrHooks[c] = d.extend(d.attrHooks[c], {
            set: function (a, d) {
                if ("" === d) return a.setAttribute(c, "auto"), d
            }
        })
    }), d.attrHooks.contenteditable = {
        get: G.get,
        set: function (a, d, c) {
            "" === d && (d = "false");
            G.set(a, d, c)
        }
    });
    d.support.hrefNormalized || d.each(["href", "src", "width", "height"], function (a, c) {
        d.attrHooks[c] = d.extend(d.attrHooks[c], {
            get: function (a) {
                a = a.getAttribute(c, 2);
                return null === a ? g : a
            }
        })
    });
    d.support.style || (d.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || g
        },
        set: function (a, d) {
            return a.style.cssText = "" + d
        }
    });
    d.support.optSelected || (d.propHooks.selected = d.extend(d.propHooks.selected, {
        get: function (a) {
            a = a.parentNode;
            a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
            return null
        }
    }));
    d.support.enctype || (d.propFix.enctype = "encoding");
    d.support.checkOn || d.each(["radio", "checkbox"], function () {
        d.valHooks[this] = {
            get: function (a) {
                return null === a.getAttribute("value") ?
                    "on" : a.value
            }
        }
    });
    d.each(["radio", "checkbox"], function () {
        d.valHooks[this] = d.extend(d.valHooks[this], {
            set: function (a, c) {
                if (d.isArray(c)) return a.checked = 0 <= d.inArray(d(a).val(), c)
            }
        })
    });
    var xa = /^(?:textarea|input|select)$/i,
        ya = /^([^\.]*)?(?:\.(.+))?$/,
        pa = /\bhover(\.\S+)?\b/,
        K = /^key/,
        ja = /^(?:mouse|contextmenu)|click/,
        da = /^(?:focusinfocus|focusoutblur)$/,
        ba = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        qa = function (a) {
            (a = ba.exec(a)) && (a[1] = (a[1] || "").toLowerCase(), a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)"));
            return a
        }, ta = function (a) {
            return d.event.special.hover ? a : a.replace(pa, "mouseenter$1 mouseleave$1")
        };
    d.event = {
        add: function (a, c, h, b, m) {
            var e, j, f, o, k, u, p, n, t;
            if (!(3 === a.nodeType || 8 === a.nodeType || !c || !h || !(e = d._data(a)))) {
                h.handler && (p = h, h = p.handler);
                h.guid || (h.guid = d.guid++);
                (f = e.events) || (e.events = f = {});
                (j = e.handle) || (e.handle = j = function (a) {
                    return "undefined" != typeof d && (!a || d.event.triggered !== a.type) ? d.event.dispatch.apply(j.elem, arguments) : g
                }, j.elem = a);
                c = d.trim(ta(c)).split(" ");
                for (e = 0; e < c.length; e++) {
                    o = ya.exec(c[e]) || [];
                    k = o[1];
                    u = (o[2] || "").split(".").sort();
                    t = d.event.special[k] || {};
                    k = (m ? t.delegateType : t.bindType) || k;
                    t = d.event.special[k] || {};
                    o = d.extend({
                        type: k,
                        origType: o[1],
                        data: b,
                        handler: h,
                        guid: h.guid,
                        selector: m,
                        quick: qa(m),
                        namespace: u.join(".")
                    }, p);
                    n = f[k];
                    if (!n && (n = f[k] = [], n.delegateCount = 0, !t.setup || !1 === t.setup.call(a, b, u, j))) a.addEventListener ? a.addEventListener(k, j, !1) : a.attachEvent && a.attachEvent("on" + k, j);
                    t.add && (t.add.call(a, o), o.handler.guid || (o.handler.guid = h.guid));
                    m ? n.splice(n.delegateCount++,
                    0, o) : n.push(o);
                    d.event.global[k] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, c, h, b, m) {
            var e = d.hasData(a) && d._data(a),
                j, f, g, o, k, u, n, p, t, x, M;
            if (e && (n = e.events)) {
                c = d.trim(ta(c || "")).split(" ");
                for (j = 0; j < c.length; j++) if (f = ya.exec(c[j]) || [], g = o = f[1], f = f[2], g) {
                    p = d.event.special[g] || {};
                    g = (b ? p.delegateType : p.bindType) || g;
                    x = n[g] || [];
                    k = x.length;
                    f = f ? RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (u = 0; u < x.length; u++) M = x[u], (m || o === M.origType) && (!h || h.guid === M.guid) && (!f || f.test(M.namespace)) && (!b || b === M.selector || "**" === b && M.selector) && (x.splice(u--, 1), M.selector && x.delegateCount--, p.remove && p.remove.call(a, M));
                    0 === x.length && k !== x.length && ((!p.teardown || !1 === p.teardown.call(a, f)) && d.removeEvent(a, g, e.handle), delete n[g])
                } else for (g in n) d.event.remove(a, g + c[j], h, b, !0);
                d.isEmptyObject(n) && (t = e.handle, t && (t.elem = null), d.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (a, c, h, w) {
            if (!h || 3 !== h.nodeType && 8 !== h.nodeType) {
                var m = a.type || a,
                    e = [],
                    j, f, o, k, u, n;
                if (!da.test(m + d.event.triggered) && (0 <= m.indexOf("!") && (m = m.slice(0, -1), j = !0), 0 <= m.indexOf(".") && (e = m.split("."), m = e.shift(), e.sort()), h && !d.event.customEvent[m] || d.event.global[m])) if (a = "object" == typeof a ? a[d.expando] ? a : new d.Event(m, a) : new d.Event(m), a.type = m, a.isTrigger = !0, a.exclusive = j, a.namespace = e.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + e.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, j = 0 > m.indexOf(":") ? "on" + m : "", h) {
                    if (a.result = g, a.target || (a.target = h), c = null != c ? d.makeArray(c) : [], c.unshift(a), k = d.event.special[m] || {}, !(k.trigger && !1 === k.trigger.apply(h, c))) {
                        n = [
                            [h, k.bindType || m]
                        ];
                        if (!w && !k.noBubble && !d.isWindow(h)) {
                            f = k.delegateType || m;
                            e = da.test(f + m) ? h : h.parentNode;
                            for (o = null; e; e = e.parentNode) n.push([e, f]), o = e;
                            o && o === h.ownerDocument && n.push([o.defaultView || o.parentWindow || b, f])
                        }
                        for (f = 0; f < n.length && !a.isPropagationStopped(); f++) e = n[f][0], a.type = n[f][1], (u = (d._data(e, "events") || {})[a.type] && d._data(e, "handle")) && u.apply(e, c), (u = j && e[j]) && d.acceptData(e) && !1 === u.apply(e, c) && a.preventDefault();
                        a.type = m;
                        !w && !a.isDefaultPrevented() && (!k._default || !1 === k._default.apply(h.ownerDocument, c)) && ("click" !== m || !d.nodeName(h, "a")) && d.acceptData(h) && j && h[m] && ("focus" !== m && "blur" !== m || 0 !== a.target.offsetWidth) && !d.isWindow(h) && (o = h[j], o && (h[j] = null), d.event.triggered = m, h[m](), d.event.triggered = g, o && (h[j] = o));
                        return a.result
                    }
                } else for (f in h = d.cache, h) h[f].events && h[f].events[m] && d.event.trigger(a, c, h[f].handle.elem, !0)
            }
        },
        dispatch: function (a) {
            var a = d.event.fix(a || b.event),
                c = (d._data(this,
                    "events") || {})[a.type] || [],
                h = c.delegateCount,
                m = [].slice.call(arguments, 0),
                e = !a.exclusive && !a.namespace,
                j = [],
                f, o, k, u, n, p, t;
            m[0] = a;
            a.delegateTarget = this;
            if (h && !a.target.disabled && (!a.button || "click" !== a.type)) {
                k = d(this);
                k.context = this.ownerDocument || this;
                for (o = a.target; o != this; o = o.parentNode || this) {
                    n = {};
                    p = [];
                    k[0] = o;
                    for (f = 0; f < h; f++) {
                        u = c[f];
                        t = u.selector;
                        if (n[t] === g) {
                            var x = n,
                                y = t,
                                s;
                            if (u.quick) {
                                s = u.quick;
                                var M = o.attributes || {};
                                s = (!s[1] || o.nodeName.toLowerCase() === s[1]) && (!s[2] || (M.id || {}).value === s[2]) && (!s[3] || s[3].test((M["class"] || {}).value))
                            } else s = k.is(t);
                            x[y] = s
                        }
                        n[t] && p.push(u)
                    }
                    p.length && j.push({
                        elem: o,
                        matches: p
                    })
                }
            }
            c.length > h && j.push({
                elem: this,
                matches: c.slice(h)
            });
            for (f = 0; f < j.length && !a.isPropagationStopped(); f++) {
                h = j[f];
                a.currentTarget = h.elem;
                for (c = 0; c < h.matches.length && !a.isImmediatePropagationStopped(); c++) if (u = h.matches[c], e || !a.namespace && !u.namespace || a.namespace_re && a.namespace_re.test(u.namespace)) a.data = u.data, a.handleObj = u, u = ((d.event.special[u.origType] || {}).handle || u.handler).apply(h.elem,
                m), u !== g && (a.result = u, !1 === u && (a.preventDefault(), a.stopPropagation()))
            }
            return a.result
        },
        props: "attrChange,attrName,relatedNode,srcElement,altKey,bubbles,cancelable,ctrlKey,currentTarget,eventPhase,metaKey,relatedTarget,shiftKey,target,timeStamp,view,which".split(","),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function (a, d) {
                null == a.which && (a.which = null != d.charCode ? d.charCode : d.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button,buttons,clientX,clientY,fromElement,offsetX,offsetY,pageX,pageY,screenX,screenY,toElement".split(","),
            filter: function (a, d) {
                var c, h, b, m = d.button,
                    e = d.fromElement;
                null == a.pageX && null != d.clientX && (c = a.target.ownerDocument || v, h = c.documentElement, b = c.body, a.pageX = d.clientX + (h && h.scrollLeft || b && b.scrollLeft || 0) - (h && h.clientLeft || b && b.clientLeft || 0), a.pageY = d.clientY + (h && h.scrollTop || b && b.scrollTop || 0) - (h && h.clientTop || b && b.clientTop || 0));
                !a.relatedTarget && e && (a.relatedTarget = e === a.target ? d.toElement : e);
                !a.which && m !== g && (a.which = m & 1 ? 1 : m & 2 ? 3 : m & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[d.expando]) return a;
            var c,
            h, b = a,
                m = d.event.fixHooks[a.type] || {}, e = m.props ? this.props.concat(m.props) : this.props,
                a = d.Event(b);
            for (c = e.length; c;) h = e[--c], a[h] = b[h];
            a.target || (a.target = b.srcElement || v);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            a.metaKey === g && (a.metaKey = a.ctrlKey);
            return m.filter ? m.filter(a, b) : a
        },
        special: {
            ready: {
                setup: d.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (a, c, h) {
                    d.isWindow(this) && (this.onbeforeunload = h)
                },
                teardown: function (a,
                d) {
                    this.onbeforeunload === d && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, c, h, b) {
            a = d.extend(new d.Event, h, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            b ? d.event.trigger(a, null, c) : d.event.dispatch.call(c, a);
            a.isDefaultPrevented() && h.preventDefault()
        }
    };
    d.event.handle = d.event.dispatch;
    d.removeEvent = v.removeEventListener ? function (a, d, c) {
        a.removeEventListener && a.removeEventListener(d, c, !1)
    } : function (a, d, c) {
        a.detachEvent && a.detachEvent("on" + d, c)
    };
    d.Event = function (a, c) {
        if (!(this instanceof d.Event)) return new d.Event(a,
        c);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? A : V) : this.type = a;
        c && d.extend(this, c);
        this.timeStamp = a && a.timeStamp || d.now();
        this[d.expando] = !0
    };
    d.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = A;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = A;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = A;
            this.stopPropagation()
        },
        isDefaultPrevented: V,
        isPropagationStopped: V,
        isImmediatePropagationStopped: V
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, c) {
        d.event.special[a] = {
            delegateType: c,
            bindType: c,
            handle: function (a) {
                var h = a.relatedTarget,
                    b = a.handleObj,
                    m;
                if (!h || h !== this && !d.contains(this, h)) a.type = b.origType, m = b.handler.apply(this, arguments), a.type = c;
                return m
            }
        }
    });
    d.support.submitBubbles || (d.event.special.submit = {
        setup: function () {
            if (d.nodeName(this, "form")) return !1;
            d.event.add(this, "click._submit keypress._submit", function (a) {
                a = a.target;
                (a = d.nodeName(a, "input") || d.nodeName(a, "button") ? a.form : g) && !a._submit_attached && (d.event.add(a, "submit._submit", function (a) {
                    this.parentNode && !a.isTrigger && d.event.simulate("submit", this.parentNode, a, !0)
                }), a._submit_attached = !0)
            })
        },
        teardown: function () {
            if (d.nodeName(this, "form")) return !1;
            d.event.remove(this, "._submit")
        }
    });
    d.support.changeBubbles || (d.event.special.change = {
        setup: function () {
            if (xa.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) d.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), d.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, d.event.simulate("change", this, a, !0))
                });
                return !1
            }
            d.event.add(this, "beforeactivate._change", function (a) {
                a = a.target;
                xa.test(a.nodeName) && !a._change_attached && (d.event.add(a, "change._change",

                function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && d.event.simulate("change", this.parentNode, a, !0)
                }), a._change_attached = !0)
            })
        },
        handle: function (a) {
            var d = a.target;
            if (this !== d || a.isSimulated || a.isTrigger || "radio" !== d.type && "checkbox" !== d.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            d.event.remove(this, "._change");
            return xa.test(this.nodeName)
        }
    });
    d.support.focusinBubbles || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, c) {
        var h = 0,
            b = function (a) {
                d.event.simulate(c,
                a.target, d.event.fix(a), !0)
            };
        d.event.special[c] = {
            setup: function () {
                0 === h++ && v.addEventListener(a, b, !0)
            },
            teardown: function () {
                0 === --h && v.removeEventListener(a, b, !0)
            }
        }
    });
    d.fn.extend({
        on: function (a, c, h, b, m) {
            var e, j;
            if ("object" == typeof a) {
                "string" != typeof c && (h = c, c = g);
                for (j in a) this.on(j, c, h, a[j], m);
                return this
            }
            null == h && null == b ? (b = c, h = c = g) : null == b && ("string" == typeof c ? (b = h, h = g) : (b = h, h = c, c = g));
            if (!1 === b) b = V;
            else if (!b) return this;
            1 === m && (e = b, b = function (a) {
                d().off(a);
                return e.apply(this, arguments)
            }, b.guid = e.guid || (e.guid = d.guid++));
            return this.each(function () {
                d.event.add(this, a, b, h, c)
            })
        },
        one: function (a, d, c, h) {
            return this.on.call(this, a, d, c, h, 1)
        },
        off: function (a, c, h) {
            if (a && a.preventDefault && a.handleObj) {
                var b = a.handleObj;
                d(a.delegateTarget).off(b.namespace ? b.type + "." + b.namespace : b.type, b.selector, b.handler);
                return this
            }
            if ("object" == typeof a) {
                for (b in a) this.off(b, c, a[b]);
                return this
            }
            if (!1 === c || "function" == typeof c) h = c, c = g;
            !1 === h && (h = V);
            return this.each(function () {
                d.event.remove(this, a, h, c)
            })
        },
        bind: function (a,
        d, c) {
            return this.on(a, null, d, c)
        },
        unbind: function (a, d) {
            return this.off(a, null, d)
        },
        live: function (a, c, h) {
            d(this.context).on(a, this.selector, c, h);
            return this
        },
        die: function (a, c) {
            d(this.context).off(a, this.selector || "**", c);
            return this
        },
        delegate: function (a, c, d, h) {
            return this.on(c, a, d, h)
        },
        undelegate: function (a, c, d) {
            return 1 == arguments.length ? this.off(a, "**") : this.off(c, a, d)
        },
        trigger: function (a, c) {
            return this.each(function () {
                d.event.trigger(a, c, this)
            })
        },
        triggerHandler: function (a, c) {
            if (this[0]) return d.event.trigger(a,
            c, this[0], !0)
        },
        toggle: function (a) {
            var c = arguments,
                h = a.guid || d.guid++,
                b = 0,
                m = function (h) {
                    var m = (d._data(this, "lastToggle" + a.guid) || 0) % b;
                    d._data(this, "lastToggle" + a.guid, m + 1);
                    h.preventDefault();
                    return c[m].apply(this, arguments) || !1
                };
            for (m.guid = h; b < c.length;) c[b++].guid = h;
            return this.click(m)
        },
        hover: function (a, c) {
            return this.mouseenter(a).mouseleave(c || a)
        }
    });
    d.each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),

    function (a, c) {
        d.fn[c] = function (a, d) {
            d == null && (d = a, a = null);
            return arguments.length > 0 ? this.on(c, null, a, d) : this.trigger(c)
        };
        d.attrFn && (d.attrFn[c] = true);
        K.test(c) && (d.event.fixHooks[c] = d.event.keyHooks);
        ja.test(c) && (d.event.fixHooks[c] = d.event.mouseHooks)
    });
    (function () {
        function a(a, c, d, h, r, m) {
            for (var r = 0, z = h.length; r < z; r++) {
                var e = h[r];
                if (e) {
                    for (var j = !1, e = e[a]; e;) {
                        if (e[b] === d) {
                            j = h[e.sizset];
                            break
                        }
                        if (1 === e.nodeType) if (m || (e[b] = d, e.sizset = r), "string" != typeof c) {
                            if (e === c) {
                                j = !0;
                                break
                            }
                        } else if (0 < n.filter(c, [e]).length) {
                            j = e;
                            break
                        }
                        e = e[a]
                    }
                    h[r] = j
                }
            }
        }
        function c(a, d, h, r, m, z) {
            for (var m = 0, e = r.length; m < e; m++) {
                var j = r[m];
                if (j) {
                    for (var f = !1, j = j[a]; j;) {
                        if (j[b] === h) {
                            f = r[j.sizset];
                            break
                        }
                        1 === j.nodeType && !z && (j[b] = h, j.sizset = m);
                        if (j.nodeName.toLowerCase() === d) {
                            f = j;
                            break
                        }
                        j = j[a]
                    }
                    r[m] = f
                }
            }
        }
        var h = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            b = "sizcache" + (Math.random() + "").replace(".", ""),
            m = 0,
            e = Object.prototype.toString,
            j = !1,
            f = !0,
            o = /\\/g,
            k = /\r\n/g,
            u = /\W/;
        [0, 0].sort(function () {
            f = !1;
            return 0
        });
        var n = function (a, c, d, r) {
            var d = d || [],
                b = c = c || v;
            if (1 !== c.nodeType && 9 !== c.nodeType) return [];
            if (!a || "string" != typeof a) return d;
            var m, w, j, f, R, g, M = !0,
                o = n.isXML(c),
                k = [],
                u = a;
            do if (h.exec(""), m = h.exec(u)) if (u = m[3], k.push(m[1]), m[2]) {
                f = m[3];
                break
            }
            while (m);
            if (1 < k.length && x.exec(a)) if (2 === k.length && t.relative[k[0]]) w = P(k[0] + k[1], c, r);
            else for (w = t.relative[k[0]] ? [c] : n(k.shift(), c); k.length;) a = k.shift(), t.relative[a] && (a += k.shift()), w = P(a, w, r);
            else if (!r && 1 < k.length && 9 === c.nodeType && !o && t.match.ID.test(k[0]) && !t.match.ID.test(k[k.length - 1]) && (R = n.find(k.shift(), c, o), c = R.expr ? n.filter(R.expr, R.set)[0] : R.set[0]), c) {
                R = r ? {
                    expr: k.pop(),
                    set: X(r)
                } : n.find(k.pop(), 1 === k.length && ("~" === k[0] || "+" === k[0]) && c.parentNode ? c.parentNode : c, o);
                w = R.expr ? n.filter(R.expr, R.set) : R.set;
                for (0 < k.length ? j = X(w) : M = !1; k.length;) m = g = k.pop(), t.relative[g] ? m = k.pop() : g = "", null == m && (m = c), t.relative[g](j, m, o)
            } else j = [];
            j || (j = w);
            j || n.error(g || a);
            if ("[object Array]" === e.call(j)) if (M) if (c && 1 === c.nodeType) for (a = 0; null != j[a]; a++) j[a] && (!0 === j[a] || 1 === j[a].nodeType && n.contains(c, j[a])) && d.push(w[a]);
            else for (a = 0; null != j[a]; a++) j[a] && 1 === j[a].nodeType && d.push(w[a]);
            else d.push.apply(d, j);
            else X(j, d);
            f && (n(f, b, d, r), n.uniqueSort(d));
            return d
        };
        n.uniqueSort = function (a) {
            if (B && (j = f, a.sort(B), j)) for (var c = 1; c < a.length; c++) a[c] === a[c - 1] && a.splice(c--, 1);
            return a
        };
        n.matches = function (a, c) {
            return n(a, null, null, c)
        };
        n.matchesSelector = function (a, c) {
            return 0 < n(c, null, null, [a]).length
        };
        n.find = function (a,
        c, d) {
            var h, r, b, m, w, z;
            if (!a) return [];
            r = 0;
            for (b = t.order.length; r < b; r++) if (w = t.order[r], m = t.leftMatch[w].exec(a)) if (z = m[1], m.splice(1, 1), "\\" !== z.substr(z.length - 1) && (m[1] = (m[1] || "").replace(o, ""), h = t.find[w](m, c, d), null != h)) {
                a = a.replace(t.match[w], "");
                break
            }
            h || (h = "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName("*") : []);
            return {
                set: h,
                expr: a
            }
        };
        n.filter = function (a, c, d, h) {
            for (var r, b, m, w, z, e, j, f, R = a, M = [], o = c, k = c && c[0] && n.isXML(c[0]); a && c.length;) {
                for (m in t.filter) if (null != (r = t.leftMatch[m].exec(a)) && r[2]) if (e = t.filter[m], z = r[1], b = !1, r.splice(1, 1), "\\" !== z.substr(z.length - 1)) {
                    o === M && (M = []);
                    if (t.preFilter[m]) if (r = t.preFilter[m](r, o, d, M, h, k)) {
                        if (!0 === r) continue
                    } else b = w = !0;
                    if (r) for (j = 0; null != (z = o[j]); j++) z && (w = e(z, r, j, o), f = h ^ w, d && null != w ? f ? b = !0 : o[j] = !1 : f && (M.push(z), b = !0));
                    if (w !== g) {
                        d || (o = M);
                        a = a.replace(t.match[m], "");
                        if (!b) return [];
                        break
                    }
                }
                if (a === R) if (null == b) n.error(a);
                else break;
                R = a
            }
            return o
        };
        n.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        var p = n.getText = function (a) {
            var c,
            d;
            c = a.nodeType;
            var h = "";
            if (c) if (1 === c || 9 === c) {
                if ("string" == typeof a.textContent) return a.textContent;
                if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                for (a = a.firstChild; a; a = a.nextSibling) h += p(a)
            } else {
                if (3 === c || 4 === c) return a.nodeValue
            } else for (c = 0; d = a[c]; c++) 8 !== d.nodeType && (h += p(d));
            return h
        }, t = n.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                },
                type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, c) {
                    var d =
                        "string" == typeof c,
                        h = d && !u.test(c),
                        d = d && !h;
                    h && (c = c.toLowerCase());
                    for (var h = 0, r = a.length, b; h < r; h++) if (b = a[h]) {
                        for (;
                        (b = b.previousSibling) && 1 !== b.nodeType;);
                        a[h] = d || b && b.nodeName.toLowerCase() === c ? b || !1 : b === c
                    }
                    d && n.filter(c, a, !0)
                },
                ">": function (a, c) {
                    var d, h = "string" == typeof c,
                        r = 0,
                        b = a.length;
                    if (h && !u.test(c)) for (c = c.toLowerCase(); r < b; r++) {
                        if (d = a[r]) d = d.parentNode, a[r] = d.nodeName.toLowerCase() === c ? d : !1
                    } else {
                        for (; r < b; r++)(d = a[r]) && (a[r] = h ? d.parentNode : d.parentNode === c);
                        h && n.filter(c, a, !0)
                    }
                },
                "": function (d,
                h, b) {
                    var w, z = m++,
                        e = a;
                    "string" == typeof h && !u.test(h) && (h = h.toLowerCase(), w = h, e = c);
                    e("parentNode", h, z, d, w, b)
                },
                "~": function (d, h, b) {
                    var w, z = m++,
                        e = a;
                    "string" == typeof h && !u.test(h) && (h = h.toLowerCase(), w = h, e = c);
                    e("previousSibling", h, z, d, w, b)
                }
            },
            find: {
                ID: function (a, c, d) {
                    if ("undefined" != typeof c.getElementById && !d) return (a = c.getElementById(a[1])) && a.parentNode ? [a] : []
                },
                NAME: function (a, c) {
                    if ("undefined" != typeof c.getElementsByName) {
                        for (var d = [], h = c.getElementsByName(a[1]), r = 0, b = h.length; r < b; r++) h[r].getAttribute("name") === a[1] && d.push(h[r]);
                        return 0 === d.length ? null : d
                    }
                },
                TAG: function (a, c) {
                    if ("undefined" != typeof c.getElementsByTagName) return c.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, c, d, h, r, b) {
                    a = " " + a[1].replace(o, "") + " ";
                    if (b) return a;
                    for (var b = 0, m; null != (m = c[b]); b++) m && (r ^ (m.className && 0 <= (" " + m.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? d || h.push(m) : d && (c[b] = !1));
                    return !1
                },
                ID: function (a) {
                    return a[1].replace(o, "")
                },
                TAG: function (a) {
                    return a[1].replace(o, "").toLowerCase()
                },
                CHILD: function (a) {
                    if ("nth" === a[1]) {
                        a[2] || n.error(a[0]);
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var c = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = c[1] + (c[2] || 1) - 0;
                        a[3] = c[3] - 0
                    } else a[2] && n.error(a[0]);
                    a[0] = m++;
                    return a
                },
                ATTR: function (a, c, d, h, r, b) {
                    c = a[1] = a[1].replace(o, "");
                    !b && t.attrMap[c] && (a[1] = t.attrMap[c]);
                    a[4] = (a[4] || a[5] || "").replace(o, "");
                    "~=" === a[2] && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function (a, c, d, r, b) {
                    if ("not" === a[1]) if (1 < (h.exec(a[3]) || "").length ||
                        /^\w/.test(a[3])) a[3] = n(a[3], null, null, c);
                    else return a = n.filter(a[3], c, d, 1 ^ b), d || r.push.apply(r, a), !1;
                    else if (t.match.POS.test(a[0]) || t.match.CHILD.test(a[0])) return !0;
                    return a
                },
                POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return !1 === a.disabled && "hidden" !== a.type
                },
                disabled: function (a) {
                    return !0 === a.disabled
                },
                checked: function (a) {
                    return !0 === a.checked
                },
                selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                parent: function (a) {
                    return !!a.firstChild
                },
                empty: function (a) {
                    return !a.firstChild
                },
                has: function (a, c, d) {
                    return !!n(d[3], a).length
                },
                header: function (a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function (a) {
                    var c = a.getAttribute("type"),
                        d = a.type;
                    return "input" === a.nodeName.toLowerCase() && "text" === d && (c === d || null === c)
                },
                radio: function (a) {
                    return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                },
                checkbox: function (a) {
                    return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                },
                file: function (a) {
                    return "input" === a.nodeName.toLowerCase() && "file" === a.type
                },
                password: function (a) {
                    return "input" === a.nodeName.toLowerCase() && "password" === a.type
                },
                submit: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && "submit" === a.type
                },
                image: function (a) {
                    return "input" === a.nodeName.toLowerCase() && "image" === a.type
                },
                reset: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && "reset" === a.type
                },
                button: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return "input" === c && "button" === a.type || "button" === c
                },
                input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, c) {
                    return 0 === c
                },
                last: function (a, c, d, h) {
                    return c === h.length - 1
                },
                even: function (a, c) {
                    return 0 === c % 2
                },
                odd: function (a, c) {
                    return 1 === c % 2
                },
                lt: function (a, c, d) {
                    return c < d[3] - 0
                },
                gt: function (a, c, d) {
                    return c > d[3] - 0
                },
                nth: function (a, c, d) {
                    return d[3] - 0 === c
                },
                eq: function (a, c, d) {
                    return d[3] - 0 === c
                }
            },
            filter: {
                PSEUDO: function (a, c, d, h) {
                    var r = c[1],
                        b = t.filters[r];
                    if (b) return b(a, d, c, h);
                    if ("contains" === r) return 0 <= (a.textContent || a.innerText || p([a]) || "").indexOf(c[3]);
                    if ("not" === r) {
                        c = c[3];
                        d = 0;
                        for (h = c.length; d < h; d++) if (c[d] === a) return !1;
                        return !0
                    }
                    n.error(r)
                },
                CHILD: function (a, c) {
                    var d, h, r, m, z, e;
                    d = c[1];
                    e = a;
                    switch (d) {
                        case "only":
                        case "first":
                            for (; e = e.previousSibling;) if (1 === e.nodeType) return !1;
                            if ("first" === d) return !0;
                            e = a;
                        case "last":
                            for (; e = e.nextSibling;) if (1 === e.nodeType) return !1;
                            return !0;
                        case "nth":
                            d = c[2];
                            h = c[3];
                            if (1 === d && 0 === h) return !0;
                            r = c[0];
                            if ((m = a.parentNode) && (m[b] !== r || !a.nodeIndex)) {
                                z = 0;
                                for (e = m.firstChild; e; e = e.nextSibling) 1 === e.nodeType && (e.nodeIndex = ++z);
                                m[b] = r
                            }
                            e = a.nodeIndex - h;
                            return 0 === d ? 0 === e : 0 === e % d && 0 <= e / d
                    }
                },
                ID: function (a, c) {
                    return 1 === a.nodeType && a.getAttribute("id") === c
                },
                TAG: function (a, c) {
                    return "*" === c && 1 === a.nodeType || !! a.nodeName && a.nodeName.toLowerCase() === c
                },
                CLASS: function (a, c) {
                    return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(c)
                },
                ATTR: function (a, c) {
                    var d = c[1],
                        d = n.attr ? n.attr(a, d) : t.attrHandle[d] ? t.attrHandle[d](a) : null != a[d] ? a[d] : a.getAttribute(d),
                        h = d + "",
                        r = c[2],
                        b = c[4];
                    return null == d ? "!=" === r : !r && n.attr ? null != d : "=" === r ? h === b : "*=" === r ? 0 <= h.indexOf(b) : "~=" === r ? 0 <= (" " + h + " ").indexOf(b) : b ? "!=" === r ? h !== b : "^=" === r ? 0 === h.indexOf(b) : "$=" === r ? h.substr(h.length - b.length) === b : "|=" === r ? h === b || h.substr(0, b.length + 1) === b + "-" : !1 : h && !1 !== d
                },
                POS: function (a, c, d, h) {
                    var r = t.setFilters[c[2]];
                    if (r) return r(a, d, c, h)
                }
            }
        }, x = t.match.POS,
            y = function (a, c) {
                return "\\" + (c - 0 + 1)
            }, M;
        for (M in t.match) t.match[M] = RegExp(t.match[M].source + /(?![^\[]*\])(?![^\(]*\))/.source), t.leftMatch[M] = RegExp(/(^(?:.|\r|\n)*?)/.source + t.match[M].source.replace(/\\(\d+)/g,
        y));
        var X = function (a, c) {
            a = Array.prototype.slice.call(a, 0);
            return c ? (c.push.apply(c, a), c) : a
        };
        try {
            Array.prototype.slice.call(v.documentElement.childNodes, 0)[0].nodeType
        } catch (s) {
            X = function (a, c) {
                var d = 0,
                    h = c || [];
                if ("[object Array]" === e.call(a)) Array.prototype.push.apply(h, a);
                else if ("number" == typeof a.length) for (var r = a.length; d < r; d++) h.push(a[d]);
                else for (; a[d]; d++) h.push(a[d]);
                return h
            }
        }
        var B, N;
        v.documentElement.compareDocumentPosition ? B = function (a, c) {
            return a === c ? (j = !0, 0) : !a.compareDocumentPosition || !c.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(c) & 4 ? -1 : 1
        } : (B = function (a, c) {
            if (a === c) return j = !0, 0;
            if (a.sourceIndex && c.sourceIndex) return a.sourceIndex - c.sourceIndex;
            var d, h, r = [],
                b = [];
            d = a.parentNode;
            h = c.parentNode;
            var m = d;
            if (d === h) return N(a, c);
            if (!d) return -1;
            if (!h) return 1;
            for (; m;) r.unshift(m), m = m.parentNode;
            for (m = h; m;) b.unshift(m), m = m.parentNode;
            d = r.length;
            h = b.length;
            for (m = 0; m < d && m < h; m++) if (r[m] !== b[m]) return N(r[m], b[m]);
            return m === d ? N(a, b[m], -1) : N(r[m], c, 1)
        },
        N = function (a, c, d) {
            if (a === c) return d;
            for (a = a.nextSibling; a;) {
                if (a === c) return -1;
                a = a.nextSibling
            }
            return 1
        });
        (function () {
            var a = v.createElement("div"),
                c = "script" + (new Date).getTime(),
                d = v.documentElement;
            a.innerHTML = "<a name='" + c + "'/>";
            d.insertBefore(a, d.firstChild);
            v.getElementById(c) && (t.find.ID = function (a, c, d) {
                if ("undefined" != typeof c.getElementById && !d) return (c = c.getElementById(a[1])) ? c.id === a[1] || "undefined" != typeof c.getAttributeNode && c.getAttributeNode("id").nodeValue === a[1] ? [c] : g : []
            }, t.filter.ID = function (a, c) {
                var d = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 === a.nodeType && d && d.nodeValue === c
            });
            d.removeChild(a);
            d = a = null
        })();
        (function () {
            var a = v.createElement("div");
            a.appendChild(v.createComment(""));
            0 < a.getElementsByTagName("*").length && (t.find.TAG = function (a, c) {
                var d = c.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                    for (var h = [], r = 0; d[r]; r++) 1 === d[r].nodeType && h.push(d[r]);
                    d = h
                }
                return d
            });
            a.innerHTML = "<a href='#'></a>";
            a.firstChild && "undefined" != typeof a.firstChild.getAttribute &&
                "#" !== a.firstChild.getAttribute("href") && (t.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            });
            a = null
        })();
        v.querySelectorAll && function () {
            var a = n,
                c = v.createElement("div");
            c.innerHTML = "<p class='TEST'></p>";
            if (!c.querySelectorAll || 0 !== c.querySelectorAll(".TEST").length) {
                n = function (c, d, h, r) {
                    d = d || v;
                    if (!r && !n.isXML(d)) {
                        var b = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(c);
                        if (b && (1 === d.nodeType || 9 === d.nodeType)) {
                            if (b[1]) return X(d.getElementsByTagName(c), h);
                            if (b[2] && t.find.CLASS && d.getElementsByClassName) return X(d.getElementsByClassName(b[2]),
                            h)
                        }
                        if (9 === d.nodeType) {
                            if ("body" === c && d.body) return X([d.body], h);
                            if (b && b[3]) {
                                var m = d.getElementById(b[3]);
                                if (!m || !m.parentNode) return X([], h);
                                if (m.id === b[3]) return X([m], h)
                            }
                            try {
                                return X(d.querySelectorAll(c), h)
                            } catch (w) {}
                        } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                            var b = d,
                                z = (m = d.getAttribute("id")) || "__sizzle__",
                                e = d.parentNode,
                                j = /^\s*[+~]/.test(c);
                            m ? z = z.replace(/'/g, "\\$&") : d.setAttribute("id", z);
                            j && e && (d = d.parentNode);
                            try {
                                if (!j || e) return X(d.querySelectorAll("[id='" + z + "'] " + c),
                                h)
                            } catch (f) {} finally {
                                m || b.removeAttribute("id")
                            }
                        }
                    }
                    return a(c, d, h, r)
                };
                for (var d in a) n[d] = a[d];
                c = null
            }
        }();
        (function () {
            var a = v.documentElement,
                c = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (c) {
                var d = !c.call(v.createElement("div"), "div"),
                    h = !1;
                try {
                    c.call(v.documentElement, "[test!='']:sizzle")
                } catch (r) {
                    h = !0
                }
                n.matchesSelector = function (a, r) {
                    r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!n.isXML(a)) try {
                        if (h || !t.match.PSEUDO.test(r) && !/!=/.test(r)) {
                            var b = c.call(a,
                            r);
                            if (b || !d || a.document && 11 !== a.document.nodeType) return b
                        }
                    } catch (m) {}
                    return 0 < n(r, null, null, [a]).length
                }
            }
        })();
        (function () {
            var a = v.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (t.order.splice(1, 0, "CLASS"), t.find.CLASS = function (a, c, d) {
                if ("undefined" != typeof c.getElementsByClassName && !d) return c.getElementsByClassName(a[1])
            },
            a = null))
        })();
        v.documentElement.contains ? n.contains = function (a, c) {
            return a !== c && (a.contains ? a.contains(c) : !0)
        } : v.documentElement.compareDocumentPosition ? n.contains = function (a, c) {
            return !!(a.compareDocumentPosition(c) & 16)
        } : n.contains = function () {
            return !1
        };
        n.isXML = function (a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
        };
        var P = function (a, c, d) {
            for (var h, r = [], b = "", c = c.nodeType ? [c] : c; h = t.match.PSEUDO.exec(a);) b += h[0], a = a.replace(t.match.PSEUDO, "");
            a = t.relative[a] ? a + "*" : a;
            h = 0;
            for (var m = c.length; h < m; h++) n(a, c[h], r, d);
            return n.filter(b, r)
        };
        n.attr = d.attr;
        n.selectors.attrMap = {};
        d.find = n;
        d.expr = n.selectors;
        d.expr[":"] = d.expr.filters;
        d.unique = n.uniqueSort;
        d.text = n.getText;
        d.isXMLDoc = n.isXML;
        d.contains = n.contains
    })();
    var ha = /Until$/,
        Xa = /^(?:parents|prevUntil|prevAll)/,
        za = /,/,
        $a = /^.[^:#\[\.,]*$/,
        Da = Array.prototype.slice,
        Aa = d.expr.match.POS,
        La = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    d.fn.extend({
        find: function (a) {
            var c = this,
                h, b;
            if ("string" != typeof a) return d(a).filter(function () {
                h = 0;
                for (b = c.length; h < b; h++) if (d.contains(c[h], this)) return !0
            });
            var m = this.pushStack("", "find", a),
                e, j, f;
            h = 0;
            for (b = this.length; h < b; h++) if (e = m.length, d.find(a, this[h], m), 0 < h) for (j = e; j < m.length; j++) for (f = 0; f < e; f++) if (m[f] === m[j]) {
                m.splice(j--, 1);
                break
            }
            return m
        },
        has: function (a) {
            var c = d(a);
            return this.filter(function () {
                for (var a = 0, h = c.length; a < h; a++) if (d.contains(this, c[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(F(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(F(this, a, !0), "filter",
            a)
        },
        is: function (a) {
            return !!a && ("string" == typeof a ? Aa.test(a) ? 0 <= d(a, this.context).index(this[0]) : 0 < d.filter(a, this).length : 0 < this.filter(a).length)
        },
        closest: function (a, c) {
            var h = [],
                b, m, e = this[0];
            if (d.isArray(a)) {
                for (m = 1; e && e.ownerDocument && e !== c;) {
                    for (b = 0; b < a.length; b++) d(e).is(a[b]) && h.push({
                        selector: a[b],
                        elem: e,
                        level: m
                    });
                    e = e.parentNode;
                    m++
                }
                return h
            }
            var j = Aa.test(a) || "string" != typeof a ? d(a, c || this.context) : 0;
            b = 0;
            for (m = this.length; b < m; b++) for (e = this[b]; e;) {
                if (j ? -1 < j.index(e) : d.find.matchesSelector(e,
                a)) {
                    h.push(e);
                    break
                }
                e = e.parentNode;
                if (!e || !e.ownerDocument || e === c || 11 === e.nodeType) break
            }
            h = 1 < h.length ? d.unique(h) : h;
            return this.pushStack(h, "closest", a)
        },
        index: function (a) {
            return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : "string" == typeof a ? d.inArray(this[0], d(a)) : d.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, c) {
            var h = "string" == typeof a ? d(a, c) : d.makeArray(a && a.nodeType ? [a] : a),
                b = d.merge(this.get(), h);
            return this.pushStack(!h[0] || !h[0].parentNode || 11 === h[0].parentNode.nodeType || !b[0] || !b[0].parentNode || 11 === b[0].parentNode.nodeType ? b : d.unique(b))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    d.each({
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function (a) {
            return d.dir(a, "parentNode")
        },
        parentsUntil: function (a, c, h) {
            return d.dir(a, "parentNode", h)
        },
        next: function (a) {
            return d.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return d.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return d.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return d.dir(a, "previousSibling")
        },
        nextUntil: function (a, c, h) {
            return d.dir(a, "nextSibling", h)
        },
        prevUntil: function (a, c, h) {
            return d.dir(a, "previousSibling", h)
        },
        siblings: function (a) {
            return d.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return d.sibling(a.firstChild)
        },
        contents: function (a) {
            return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.makeArray(a.childNodes)
        }
    }, function (a, c) {
        d.fn[a] = function (h, b) {
            var m = d.map(this, c, h);
            ha.test(a) || (b = h);
            b && "string" == typeof b && (m = d.filter(b, m));
            m = 1 < this.length && !La[a] ? d.unique(m) : m;
            (1 < this.length || za.test(b)) && Xa.test(a) && (m = m.reverse());
            return this.pushStack(m, a, Da.call(arguments).join(","))
        }
    });
    d.extend({
        filter: function (a, c, h) {
            h && (a = ":not(" + a + ")");
            return 1 === c.length ? d.find.matchesSelector(c[0], a) ? [c[0]] : [] : d.find.matches(a, c)
        },
        dir: function (a, c, h) {
            for (var b = [], a = a[c]; a && 9 !== a.nodeType && (h === g || 1 !== a.nodeType || !d(a).is(h));) 1 === a.nodeType && b.push(a), a = a[c];
            return b
        },
        nth: function (a, c, d) {
            for (var c = c || 1, h = 0; a && !(1 === a.nodeType && ++h === c); a = a[d]);
            return a
        },
        sibling: function (a,
        c) {
            for (var d = []; a; a = a.nextSibling) 1 === a.nodeType && a !== c && d.push(a);
            return d
        }
    });
    var Ka = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ya = / jQuery\d+="(?:\d+|null)"/g,
        ra = /^\s+/,
        ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        wa = /<([\w:]+)/,
        Oa = /<tbody/i,
        Pa = /<|&#?\w+;/,
        Qa = /<(?:script|style)/i,
        ab = /<(?:script|object|embed|option|style)/i,
        Ea = RegExp("<(?:" + Ka + ")", "i"),
        bb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ma = /\/(java|ecma)script/i,
        Ja = /^\s*<!(?:\[CDATA\[|\-\-)/,
        na = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Ra = D(v);
    na.optgroup = na.option;
    na.tbody = na.tfoot = na.colgroup = na.caption = na.thead;
    na.th = na.td;
    d.support.htmlSerialize || (na._default = [1, "div<div>", "</div>"]);
    d.fn.extend({
        text: function (a) {
            return d.isFunction(a) ? this.each(function (c) {
                var h = d(this);
                h.text(a.call(this, c, h.text()))
            }) : "object" != typeof a && a !== g ? this.empty().append((this[0] && this[0].ownerDocument || v).createTextNode(a)) : d.text(this)
        },
        wrapAll: function (a) {
            if (d.isFunction(a)) return this.each(function (c) {
                d(this).wrapAll(a.call(this, c))
            });
            if (this[0]) {
                var c = d(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return d.isFunction(a) ? this.each(function (c) {
                d(this).wrapInner(a.call(this, c))
            }) : this.each(function () {
                var c = d(this),
                    h = c.contents();
                h.length ? h.wrapAll(a) : c.append(a)
            })
        },
        wrap: function (a) {
            var c = d.isFunction(a);
            return this.each(function (h) {
                d(this).wrapAll(c ? a.call(this, h) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = d.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, d.clean(arguments));
                return a
            }
        },
        remove: function (a, c) {
            for (var h = 0, b; null != (b = this[h]); h++) if (!a || d.filter(a, [b]).length)!c && 1 === b.nodeType && (d.cleanData(b.getElementsByTagName("*")), d.cleanData([b])), b.parentNode && b.parentNode.removeChild(b);
            return this
        },
        empty: function () {
            for (var a = 0, c; null != (c = this[a]); a++) for (1 === c.nodeType && d.cleanData(c.getElementsByTagName("*")); c.firstChild;) c.removeChild(c.firstChild);
            return this
        },
        clone: function (a, c) {
            a = null == a ? !1 : a;
            c = null == c ? a : c;
            return this.map(function () {
                return d.clone(this, a, c)
            })
        },
        html: function (a) {
            if (a === g) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Ya, "") : null;
            if ("string" == typeof a && !Qa.test(a) && (d.support.leadingWhitespace || !ra.test(a)) && !na[(wa.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(ua, "<$1></$2>");
                try {
                    for (var c = 0, h = this.length; c < h; c++) 1 === this[c].nodeType && (d.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (b) {
                    this.empty().append(a)
                }
            } else d.isFunction(a) ? this.each(function (c) {
                var h = d(this);
                h.html(a.call(this, c, h.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (d.isFunction(a)) return this.each(function (c) {
                    var h = d(this),
                        b = h.html();
                    h.replaceWith(a.call(this, c, b))
                });
                "string" != typeof a && (a = d(a).detach());
                return this.each(function () {
                    var c = this.nextSibling,
                        h = this.parentNode;
                    d(this).remove();
                    c ? d(c).before(a) : d(h).append(a)
                })
            }
            return this.length ? this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, h) {
            var b, m, e, j = a[0],
                o = [];
            if (!d.support.checkClone && 3 === arguments.length && "string" == typeof j && bb.test(j)) return this.each(function () {
                d(this).domManip(a, c, h, !0)
            });
            if (d.isFunction(j)) return this.each(function (b) {
                var m = d(this);
                a[0] = j.call(this, b, c ? m.html() : g);
                m.domManip(a, c, h)
            });
            if (this[0]) {
                e = j && j.parentNode;
                d.support.parentNode && e && 11 === e.nodeType && e.childNodes.length === this.length ? b = {
                    fragment: e
                } : b = d.buildFragment(a, this, o);
                e = b.fragment;
                1 === e.childNodes.length ? m = e = e.firstChild : m = e.firstChild;
                if (m) {
                    c = c && d.nodeName(m, "tr");
                    m = 0;
                    for (var k = this.length, n = k - 1; m < k; m++) h.call(c ? d.nodeName(this[m], "table") ? this[m].getElementsByTagName("tbody")[0] || this[m].appendChild(this[m].ownerDocument.createElement("tbody")) : this[m] : this[m], b.cacheable || 1 < k && m < n ? d.clone(e, !0, !0) : e)
                }
                o.length && d.each(o, f)
            }
            return this
        }
    });
    d.buildFragment = function (a, c, h) {
        var b, m, e, j, f = a[0];
        c && c[0] && (j = c[0].ownerDocument || c[0]);
        j.createDocumentFragment || (j = v);
        1 === a.length && "string" == typeof f && 512 > f.length && j === v && "<" === f.charAt(0) && !ab.test(f) && (d.support.checkClone || !bb.test(f)) && (d.support.html5Clone || !Ea.test(f)) && (m = !0, e = d.fragments[f], e && 1 !== e && (b = e));
        b || (b = j.createDocumentFragment(), d.clean(a, j, b, h));
        m && (d.fragments[f] = e ? b : 1);
        return {
            fragment: b,
            cacheable: m
        }
    };
    d.fragments = {};
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, c) {
        d.fn[a] = function (h) {
            var b = [],
                h = d(h),
                m = 1 === this.length && this[0].parentNode;
            if (m && 11 === m.nodeType && 1 === m.childNodes.length && 1 === h.length) return h[c](this[0]), this;
            for (var m = 0, e = h.length; m < e; m++) {
                var j = (0 < m ? this.clone(!0) : this).get();
                d(h[m])[c](j);
                b = b.concat(j)
            }
            return this.pushStack(b, a, h.selector)
        }
    });
    d.extend({
        clone: function (a, c, h) {
            var b, m, e;
            d.support.html5Clone || !Ea.test("<" + a.nodeName) ? b = a.cloneNode(!0) : (b = v.createElement("div"), Ra.appendChild(b),
            b.innerHTML = a.outerHTML, b = b.firstChild);
            var j = b;
            if ((!d.support.noCloneEvent || !d.support.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !d.isXMLDoc(a)) {
                L(a, j);
                b = P(a);
                m = P(j);
                for (e = 0; b[e]; ++e) m[e] && L(b[e], m[e])
            }
            if (c && (H(a, j), h)) {
                b = P(a);
                m = P(j);
                for (e = 0; b[e]; ++e) H(b[e], m[e])
            }
            return j
        },
        clean: function (a, c, h, b) {
            c = c || v;
            "undefined" == typeof c.createElement && (c = c.ownerDocument || c[0] && c[0].ownerDocument || v);
            for (var m = [], e, f = 0, g; null != (g = a[f]); f++) if ("number" == typeof g && (g += ""), g) {
                if ("string" == typeof g) if (Pa.test(g)) {
                    g = g.replace(ua, "<$1></$2>");
                    e = (wa.exec(g) || ["", ""])[1].toLowerCase();
                    var o = na[e] || na._default,
                        k = o[0],
                        n = c.createElement("div");
                    c === v ? Ra.appendChild(n) : D(c).appendChild(n);
                    for (n.innerHTML = o[1] + g + o[2]; k--;) n = n.lastChild;
                    if (!d.support.tbody) {
                        k = Oa.test(g);
                        o = "table" === e && !k ? n.firstChild && n.firstChild.childNodes : "<table>" === o[1] && !k ? n.childNodes : [];
                        for (e = o.length - 1; 0 <= e; --e) d.nodeName(o[e], "tbody") && !o[e].childNodes.length && o[e].parentNode.removeChild(o[e])
                    }!d.support.leadingWhitespace && ra.test(g) && n.insertBefore(c.createTextNode(ra.exec(g)[0]),
                    n.firstChild);
                    g = n.childNodes
                } else g = c.createTextNode(g);
                var u;
                if (!d.support.appendChecked) if (g[0] && "number" == typeof (u = g.length)) for (e = 0; e < u; e++) j(g[e]);
                else j(g);
                g.nodeType ? m.push(g) : m = d.merge(m, g)
            }
            if (h) {
                a = function (a) {
                    return !a.type || ma.test(a.type)
                };
                for (f = 0; m[f]; f++) b && d.nodeName(m[f], "script") && (!m[f].type || "text/javascript" === m[f].type.toLowerCase()) ? b.push(m[f].parentNode ? m[f].parentNode.removeChild(m[f]) : m[f]) : (1 === m[f].nodeType && (c = d.grep(m[f].getElementsByTagName("script"), a), m.splice.apply(m, [f + 1, 0].concat(c))), h.appendChild(m[f]))
            }
            return m
        },
        cleanData: function (a) {
            for (var c, h, b = d.cache, m = d.event.special, e = d.support.deleteExpando, j = 0, f; null != (f = a[j]); j++) if (!f.nodeName || !d.noData[f.nodeName.toLowerCase()]) if (h = f[d.expando]) {
                if ((c = b[h]) && c.events) {
                    for (var g in c.events) m[g] ? d.event.remove(f, g) : d.removeEvent(f, g, c.handle);
                    c.handle && (c.handle.elem = null)
                }
                e ? delete f[d.expando] : f.removeAttribute && f.removeAttribute(d.expando);
                delete b[h]
            }
        }
    });
    var Ma = /alpha\([^)]*\)/i,
        cb = /opacity=([^)]*)/,
        O = /([A-Z]|^ms)/g,
        Z = /^-?\d+(?:px)?$/i,
        lb = /^-?\d/,
        mb = /^([\-+])=([\-+.\de]+)/,
        va = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, sb = ["Left", "Right"],
        tb = ["Top", "Bottom"],
        Ua, ub, nb;
    d.fn.css = function (a, c) {
        return 2 === arguments.length && c === g ? this : d.access(this, a, c, !0, function (a, c, h) {
            return h !== g ? d.style(a, c, h) : d.css(a, c)
        })
    };
    d.extend({
        cssHooks: {
            opacity: {
                get: function (a, c) {
                    if (c) {
                        var d = Ua(a, "opacity", "opacity");
                        return "" === d ? "1" : d
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": d.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, h, b) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var m, e = d.camelCase(c),
                    j = a.style,
                    f = d.cssHooks[e],
                    c = d.cssProps[e] || e;
                if (h === g) return f && "get" in f && (m = f.get(a, !1, b)) !== g ? m : j[c];
                b = typeof h;
                "string" === b && (m = mb.exec(h)) && (h = +(m[1] + 1) * +m[2] + parseFloat(d.css(a, c)), b = "number");
                if (!(null == h || "number" === b && isNaN(h))) if ("number" === b && !d.cssNumber[e] && (h += "px"), !f || !("set" in f) || (h = f.set(a,
                h)) !== g) try {
                    j[c] = h
                } catch (o) {}
            }
        },
        css: function (a, c, h) {
            var b, m, c = d.camelCase(c);
            m = d.cssHooks[c];
            c = d.cssProps[c] || c;
            "cssFloat" === c && (c = "float");
            if (m && "get" in m && (b = m.get(a, !0, h)) !== g) return b;
            if (Ua) return Ua(a, c)
        },
        swap: function (a, c, d) {
            var h = {}, b;
            for (b in c) h[b] = a.style[b], a.style[b] = c[b];
            d.call(a);
            for (b in c) a.style[b] = h[b]
        }
    });
    d.curCSS = d.css;
    d.each(["height", "width"], function (a, c) {
        d.cssHooks[c] = {
            get: function (a, h, b) {
                var m;
                if (h) {
                    if (0 !== a.offsetWidth) return e(a, c, b);
                    d.swap(a, va, function () {
                        m = e(a, c, b)
                    });
                    return m
                }
            },
            set: function (a, c) {
                if (!Z.test(c)) return c;
                c = parseFloat(c);
                if (0 <= c) return c + "px"
            }
        }
    });
    d.support.opacity || (d.cssHooks.opacity = {
        get: function (a, c) {
            return cb.test((c && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : c ? "1" : ""
        },
        set: function (a, c) {
            var h = a.style,
                b = a.currentStyle,
                m = d.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                e = b && b.filter || h.filter || "";
            h.zoom = 1;
            if (1 <= c && "" === d.trim(e.replace(Ma, "")) && (h.removeAttribute("filter"), b && !b.filter)) return;
            h.filter = Ma.test(e) ? e.replace(Ma,
            m) : e + " " + m
        }
    });
    d(function () {
        d.support.reliableMarginRight || (d.cssHooks.marginRight = {
            get: function (a, c) {
                var h;
                d.swap(a, {
                    display: "inline-block"
                }, function () {
                    c ? h = Ua(a, "margin-right", "marginRight") : h = a.style.marginRight
                });
                return h
            }
        })
    });
    v.defaultView && v.defaultView.getComputedStyle && (ub = function (a, c) {
        var h, b, m, c = c.replace(O, "-$1").toLowerCase();
        (b = a.ownerDocument.defaultView) && (m = b.getComputedStyle(a, null)) && (h = m.getPropertyValue(c), "" === h && !d.contains(a.ownerDocument.documentElement, a) && (h = d.style(a, c)));
        return h
    });
    v.documentElement.currentStyle && (nb = function (a, c) {
        var d, h, b, m = a.currentStyle && a.currentStyle[c],
            e = a.style;
        null === m && e && (b = e[c]) && (m = b);
        !Z.test(m) && lb.test(m) && (d = e.left, h = a.runtimeStyle && a.runtimeStyle.left, h && (a.runtimeStyle.left = a.currentStyle.left), e.left = "fontSize" === c ? "1em" : m || 0, m = e.pixelLeft + "px", e.left = d, h && (a.runtimeStyle.left = h));
        return "" === m ? "auto" : m
    });
    Ua = ub || nb;
    d.expr && d.expr.filters && (d.expr.filters.hidden = function (a) {
        var c = a.offsetHeight;
        return 0 === a.offsetWidth && 0 === c || !d.support.reliableHiddenOffsets &&
            "none" === (a.style && a.style.display || d.css(a, "display"))
    }, d.expr.filters.visible = function (a) {
        return !d.expr.filters.hidden(a)
    });
    var Eb = /%20/g,
        Bb = /\[\]$/,
        vb = /\r?\n/g,
        Fb = /#.*$/,
        Gb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Hb = /^(?:GET|HEAD)$/,
        Ib = /^\/\//,
        ob = /\?/,
        Jb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        xb = /^(?:select|textarea)/i,
        kb = /\s+/,
        pb = /([?&])_=[^&]*/,
        qb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        Na = d.fn.load,
        Ha = {}, rb = {}, Za, Sa, db = ["*/"] + ["*"];
    try {
        Za = ka.href
    } catch (yb) {
        Za = v.createElement("a"), Za.href = "", Za = Za.href
    }
    Sa = qb.exec(Za.toLowerCase()) || [];
    d.fn.extend({
        load: function (a, c, h) {
            if ("string" != typeof a && Na) return Na.apply(this, arguments);
            if (!this.length) return this;
            var b = a.indexOf(" ");
            if (0 <= b) var m = a.slice(b, a.length),
                a = a.slice(0, b);
            b = "GET";
            c && (d.isFunction(c) ? (h = c, c = g) : "object" == typeof c && (c = d.param(c, d.ajaxSettings.traditional), b = "POST"));
            var e = this;
            d.ajax({
                url: a,
                type: b,
                dataType: "html",
                data: c,
                complete: function (a, c, b) {
                    b = a.responseText;
                    a.isResolved() && (a.done(function (a) {
                        b = a
                    }), e.html(m ? d("<div>").append(b.replace(Jb, "")).find(m) : b));
                    h && e.each(h, [b, c, a])
                }
            });
            return this
        },
        serialize: function () {
            return d.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? d.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || xb.test(this.nodeName) || wb.test(this.type))
            }).map(function (a, c) {
                var h = d(this).val();
                return null == h ? null : d.isArray(h) ? d.map(h, function (a) {
                    return {
                        name: c.name,
                        value: a.replace(vb, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: h.replace(vb, "\r\n")
                }
            }).get()
        }
    });
    d.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function (a, c) {
        d.fn[c] = function (a) {
            return this.on(c, a)
        }
    });
    d.each(["get", "post"], function (a, c) {
        d[c] = function (a, h, b, m) {
            d.isFunction(h) && (m = m || b, b = h, h = g);
            return d.ajax({
                type: c,
                url: a,
                data: h,
                success: b,
                dataType: m
            })
        }
    });
    d.extend({
        getScript: function (a, c) {
            return d.get(a, g, c, "script")
        },
        getJSON: function (a,
        c, h) {
            return d.get(a, c, h, "json")
        },
        ajaxSetup: function (a, c) {
            c ? x(a, d.ajaxSettings) : (c = a, a = d.ajaxSettings);
            x(a, c);
            return a
        },
        ajaxSettings: {
            url: Za,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(Sa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": db
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: o(Ha),
        ajaxTransport: o(rb),
        ajax: function (a, c) {
            function h(a, c, r, z) {
                if (2 !== X) {
                    X = 2;
                    s && clearTimeout(s);
                    y = g;
                    p = z || "";
                    N.readyState = 0 < a ? 4 : 0;
                    var M, n, u, z = c;
                    if (r) {
                        var t = b,
                            x = N,
                            v = t.contents,
                            P = t.dataTypes,
                            q = t.responseFields,
                            D, H, Va, O;
                        for (H in q) H in r && (x[q[H]] = r[H]);
                        for (;
                        "*" === P[0];) P.shift(), D === g && (D = t.mimeType || x.getResponseHeader("content-type"));
                        if (D) for (H in v) if (v[H] && v[H].test(D)) {
                            P.unshift(H);
                            break
                        }
                        if (P[0] in r) Va = P[0];
                        else {
                            for (H in r) {
                                if (!P[0] || t.converters[H + " " + P[0]]) {
                                    Va = H;
                                    break
                                }
                                O || (O = H)
                            }
                            Va = Va || O
                        }
                        Va ? (Va !== P[0] && P.unshift(Va), r = r[Va]) : r = void 0
                    } else r = g;
                    if (200 <= a && 300 > a || 304 === a) {
                        if (b.ifModified) {
                            if (D = N.getResponseHeader("Last-Modified")) d.lastModified[k] = D;
                            if (D = N.getResponseHeader("Etag")) d.etag[k] = D
                        }
                        if (304 === a) z = "notmodified", M = !0;
                        else try {
                            D = b;
                            D.dataFilter && (r = D.dataFilter(r, D.dataType));
                            var Cb = D.dataTypes;
                            H = {};
                            var A, F, K = Cb.length,
                                E, Z = Cb[0],
                                L, Wa, J, G, C;
                            for (A = 1; A < K; A++) {
                                if (1 === A) for (F in D.converters) "string" == typeof F && (H[F.toLowerCase()] = D.converters[F]);
                                L = Z;
                                Z = Cb[A];
                                if ("*" === Z) Z = L;
                                else if ("*" !== L && L !== Z) {
                                    Wa = L + " " + Z;
                                    J = H[Wa] || H["* " + Z];
                                    if (!J) for (G in C = g, H) if (E = G.split(" "), E[0] === L || "*" === E[0]) if (C = H[E[1] + " " + Z]) {
                                        G = H[G];
                                        !0 === G ? J = C : !0 === C && (J = G);
                                        break
                                    }!J && !C && d.error("No conversion from " + Wa.replace(" ", " to "));
                                    !0 !== J && (r = J ? J(r) : C(G(r)))
                                }
                            }
                            n = r;
                            z = "success";
                            M = !0
                        } catch (Mb) {
                            z = "parsererror", u = Mb
                        }
                    } else if (u = z, !z || a) z = "error", 0 > a && (a = 0);
                    N.status = a;
                    N.statusText =
                        "" + (c || z);
                    M ? j.resolveWith(m, [n, z, N]) : j.rejectWith(m, [N, z, u]);
                    N.statusCode(o);
                    o = g;
                    B && e.trigger("ajax" + (M ? "Success" : "Error"), [N, b, M ? n : u]);
                    f.fireWith(m, [N, z]);
                    B && (e.trigger("ajaxComplete", [N, b]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = g);
            var c = c || {}, b = d.ajaxSetup({}, c),
                m = b.context || b,
                e = m !== b && (m.nodeType || m instanceof d) ? d(m) : d.event,
                j = d.Deferred(),
                f = d.Callbacks("once memory"),
                o = b.statusCode || {}, k, n = {}, u = {}, p, x, y, s, M, X = 0,
                B, v, N = {
                    readyState: 0,
                    setRequestHeader: function (a, c) {
                        if (!X) {
                            var d = a.toLowerCase(),
                                a = u[d] = u[d] || a;
                            n[a] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return 2 === X ? p : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (2 === X) {
                            if (!x) for (x = {}; c = Gb.exec(p);) x[c[1].toLowerCase()] = c[2];
                            c = x[a.toLowerCase()]
                        }
                        return c === g ? null : c
                    },
                    overrideMimeType: function (a) {
                        X || (b.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort";
                        y && y.abort(a);
                        h(0, a);
                        return this
                    }
                };
            j.promise(N);
            N.success = N.done;
            N.error = N.fail;
            N.complete = f.add;
            N.statusCode = function (a) {
                if (a) {
                    var c;
                    if (2 > X) for (c in a) o[c] = [o[c],
                    a[c]];
                    else c = a[N.status], N.then(c, c)
                }
                return this
            };
            b.url = ((a || b.url) + "").replace(Fb, "").replace(Ib, Sa[1] + "//");
            b.dataTypes = d.trim(b.dataType || "*").toLowerCase().split(kb);
            null == b.crossDomain && (M = qb.exec(b.url.toLowerCase()), b.crossDomain = !(!M || M[1] == Sa[1] && M[2] == Sa[2] && (M[3] || ("http:" === M[1] ? 80 : 443)) == (Sa[3] || ("http:" === Sa[1] ? 80 : 443))));
            b.data && b.processData && "string" != typeof b.data && (b.data = d.param(b.data, b.traditional));
            t(Ha, b, c, N);
            if (2 === X) return !1;
            B = b.global;
            b.type = b.type.toUpperCase();
            b.hasContent = !Hb.test(b.type);
            B && 0 === d.active++ && d.event.trigger("ajaxStart");
            if (!b.hasContent && (b.data && (b.url += (ob.test(b.url) ? "&" : "?") + b.data, delete b.data), k = b.url, !1 === b.cache)) {
                M = d.now();
                var P = b.url.replace(pb, "$1_=" + M);
                b.url = P + (P === b.url ? (ob.test(b.url) ? "&" : "?") + "_=" + M : "")
            }(b.data && b.hasContent && !1 !== b.contentType || c.contentType) && N.setRequestHeader("Content-Type", b.contentType);
            b.ifModified && (k = k || b.url, d.lastModified[k] && N.setRequestHeader("If-Modified-Since", d.lastModified[k]), d.etag[k] && N.setRequestHeader("If-None-Match",
            d.etag[k]));
            N.setRequestHeader("Accept", b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + ("*" !== b.dataTypes[0] ? ", " + db + "; q=0.01" : "") : b.accepts["*"]);
            for (v in b.headers) N.setRequestHeader(v, b.headers[v]);
            if (b.beforeSend && (!1 === b.beforeSend.call(m, N, b) || 2 === X)) return N.abort(), !1;
            for (v in {
                success: 1,
                error: 1,
                complete: 1
            }) N[v](b[v]);
            if (y = t(rb, b, c, N)) {
                N.readyState = 1;
                B && e.trigger("ajaxSend", [N, b]);
                b.async && 0 < b.timeout && (s = setTimeout(function () {
                    N.abort("timeout")
                }, b.timeout));
                try {
                    X = 1, y.send(n,
                    h)
                } catch (q) {
                    if (2 > X) h(-1, q);
                    else throw q;
                }
            } else h(-1, "No Transport");
            return N
        },
        param: function (a, c) {
            var h = [],
                b = function (a, c) {
                    c = d.isFunction(c) ? c() : c;
                    h[h.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
                };
            c === g && (c = d.ajaxSettings.traditional);
            if (d.isArray(a) || a.jquery && !d.isPlainObject(a)) d.each(a, function () {
                b(this.name, this.value)
            });
            else for (var m in a) y(m, a[m], c, b);
            return h.join("&").replace(Eb, "+")
        }
    });
    d.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Kb = d.now(),
        Ia = /(\=)\?(&|$)|\?\?/i;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return d.expando + "_" + Kb++
        }
    });
    d.ajaxPrefilter("json jsonp", function (a, c, h) {
        c = "application/x-www-form-urlencoded" === a.contentType && "string" == typeof a.data;
        if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (Ia.test(a.url) || c && Ia.test(a.data))) {
            var m, e = a.jsonpCallback = d.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
                j = b[e],
                f = a.url,
                g = a.data,
                o = "$1" + e + "$2";
            !1 !== a.jsonp && (f = f.replace(Ia, o), a.url === f && (c && (g = g.replace(Ia, o)), a.data === g && (f += (/\?/.test(f) ? "&" : "?") + a.jsonp + "=" + e)));
            a.url = f;
            a.data = g;
            b[e] = function (a) {
                m = [a]
            };
            h.always(function () {
                b[e] = j;
                m && d.isFunction(j) && b[e](m[0])
            });
            a.converters["script json"] = function () {
                m || d.error(e + " was not called");
                return m[0]
            };
            a.dataTypes[0] = "json";
            return "script"
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                d.globalEval(a);
                return a
            }
        }
    });
    d.ajaxPrefilter("script", function (a) {
        a.cache === g && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    d.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = v.head || v.getElementsByTagName("head")[0] || v.documentElement;
            return {
                send: function (h, b) {
                    c = v.createElement("script");
                    c.async = "async";
                    a.scriptCharset && (c.charset = a.scriptCharset);
                    c.src = a.url;
                    c.onload = c.onreadystatechange = function (a, h) {
                        if (h || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = g, h || b(200, "success")
                    };
                    d.insertBefore(c, d.firstChild)
                },
                abort: function () {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var eb = b.ActiveXObject ? function () {
            for (var a in Ba) Ba[a](0, 1)
        } : !1,
        Fa = 0,
        Ba;
    d.ajaxSettings.xhr = b.ActiveXObject ? function () {
        var a;
        if (!(a = !this.isLocal && B())) a: {
            try {
                a = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (c) {}
            a = void 0
        }
        return a
    } : B;
    (function (a) {
        d.extend(d.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    })(d.ajaxSettings.xhr());
    d.support.ajax && d.ajaxTransport(function (a) {
        if (!a.crossDomain || d.support.cors) {
            var c;
            return {
                send: function (h,
                m) {
                    var e = a.xhr(),
                        j, f;
                    a.username ? e.open(a.type, a.url, a.async, a.username, a.password) : e.open(a.type, a.url, a.async);
                    if (a.xhrFields) for (f in a.xhrFields) e[f] = a.xhrFields[f];
                    a.mimeType && e.overrideMimeType && e.overrideMimeType(a.mimeType);
                    !a.crossDomain && !h["X-Requested-With"] && (h["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (f in h) e.setRequestHeader(f, h[f])
                    } catch (o) {}
                    e.send(a.hasContent && a.data || null);
                    c = function (h, b) {
                        var z, f, o, k, n;
                        try {
                            if (c && (b || 4 === e.readyState)) if (c = g, j && (e.onreadystatechange = d.noop, eb && delete Ba[j]), b) 4 !== e.readyState && e.abort();
                            else {
                                z = e.status;
                                o = e.getAllResponseHeaders();
                                k = {};
                                (n = e.responseXML) && n.documentElement && (k.xml = n);
                                k.text = e.responseText;
                                try {
                                    f = e.statusText
                                } catch (u) {
                                    f = ""
                                }!z && a.isLocal && !a.crossDomain ? z = k.text ? 200 : 404 : 1223 === z && (z = 204)
                            }
                        } catch (M) {
                            b || m(-1, M)
                        }
                        k && m(z, f, k, o)
                    };
                    !a.async || 4 === e.readyState ? c() : (j = ++Fa, eb && (Ba || (Ba = {}, d(b).unload(eb)), Ba[j] = c), e.onreadystatechange = c)
                },
                abort: function () {
                    c && c(0, 1)
                }
            }
        }
    });
    var ib = {}, Ca, Ga, zb = /^(?:toggle|show|hide)$/,
        fb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        hb, jb = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        c;
    d.fn.extend({
        show: function (a, c, h) {
            var b;
            if (a || 0 === a) return this.animate(p("show", 3), a, c, h);
            c = 0;
            for (h = this.length; c < h; c++) a = this[c], a.style && (b = a.style.display, !d._data(a, "olddisplay") && "none" === b && (b = a.style.display = ""), "" === b && "none" === d.css(a, "display") && d._data(a, "olddisplay", s(a.nodeName)));
            for (c = 0; c < h; c++) if (a = this[c], a.style && (b = a.style.display,
                "" === b || "none" === b)) a.style.display = d._data(a, "olddisplay") || "";
            return this
        },
        hide: function (a, c, h) {
            if (a || 0 === a) return this.animate(p("hide", 3), a, c, h);
            for (var b, c = 0, h = this.length; c < h; c++) a = this[c], a.style && (b = d.css(a, "display"), "none" !== b && !d._data(a, "olddisplay") && d._data(a, "olddisplay", b));
            for (c = 0; c < h; c++) this[c].style && (this[c].style.display = "none");
            return this
        },
        _toggle: d.fn.toggle,
        toggle: function (a, c, h) {
            var b = "boolean" == typeof a;
            d.isFunction(a) && d.isFunction(c) ? this._toggle.apply(this, arguments) : null == a || b ? this.each(function () {
                var c = b ? a : d(this).is(":hidden");
                d(this)[c ? "show" : "hide"]()
            }) : this.animate(p("toggle", 3), a, c, h);
            return this
        },
        fadeTo: function (a, c, d, h) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: c
            }, a, d, h)
        },
        animate: function (a, c, h, b) {
            function m() {
                !1 === e.queue && d._mark(this);
                var c = d.extend({}, e),
                    h = 1 === this.nodeType,
                    b = h && d(this).is(":hidden"),
                    r, z, j, f, w, g, o, k;
                c.animatedProperties = {};
                for (j in a) {
                    r = d.camelCase(j);
                    j !== r && (a[r] = a[j], delete a[j]);
                    z = a[r];
                    d.isArray(z) ? (c.animatedProperties[r] = z[1], z = a[r] = z[0]) : c.animatedProperties[r] = c.specialEasing && c.specialEasing[r] || c.easing || "swing";
                    if ("hide" === z && b || "show" === z && !b) return c.complete.call(this);
                    h && ("height" === r || "width" === r) && (c.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === d.css(this, "display") && "none" === d.css(this, "float") && (!d.support.inlineBlockNeedsLayout || "inline" === s(this.nodeName) ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                null != c.overflow && (this.style.overflow =
                    "hidden");
                for (j in a) h = new d.fx(this, c, j), z = a[j], zb.test(z) ? (k = d._data(this, "toggle" + j) || ("toggle" === z ? b ? "show" : "hide" : 0), k ? (d._data(this, "toggle" + j, "show" === k ? "hide" : "show"), h[k]()) : h[z]()) : (f = fb.exec(z), w = h.cur(), f ? (g = parseFloat(f[2]), o = f[3] || (d.cssNumber[j] ? "" : "px"), "px" !== o && (d.style(this, j, (g || 1) + o), w *= (g || 1) / h.cur(), d.style(this, j, w + o)), f[1] && (g = ("-=" === f[1] ? -1 : 1) * g + w), h.custom(w, g, o)) : h.custom(w, z, ""));
                return !0
            }
            var e = d.speed(c, h, b);
            if (d.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = d.extend({}, a);
            return !1 === e.queue ? this.each(m) : this.queue(e.queue, m)
        },
        stop: function (a, c, h) {
            "string" != typeof a && (h = c, c = a, a = g);
            c && !1 !== a && this.queue(a || "fx", []);
            return this.each(function () {
                var c, b = !1,
                    m = d.timers,
                    r = d._data(this);
                h || d._unmark(!0, this);
                if (null == a) for (c in r) {
                    if (r[c] && r[c].stop && c.indexOf(".run") === c.length - 4) {
                        var e = r[c];
                        d.removeData(this, c, !0);
                        e.stop(h)
                    }
                } else if (r[c = a + ".run"] && r[c].stop) r = r[c], d.removeData(this, c, !0), r.stop(h);
                for (c = m.length; c--;) m[c].elem === this && (null == a || m[c].queue === a) && (h ? m[c](!0) : m[c].saveState(), b = !0, m.splice(c, 1));
                (!h || !b) && d.dequeue(this, a)
            })
        }
    });
    d.each({
        slideDown: p("show", 1),
        slideUp: p("hide", 1),
        slideToggle: p("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, c) {
        d.fn[a] = function (a, d, h) {
            return this.animate(c, a, d, h)
        }
    });
    d.extend({
        speed: function (a, c, h) {
            var b = a && "object" == typeof a ? d.extend({}, a) : {
                complete: h || !h && c || d.isFunction(a) && a,
                duration: a,
                easing: h && c || c && !d.isFunction(c) && c
            };
            b.duration = d.fx.off ? 0 : "number" == typeof b.duration ? b.duration : b.duration in d.fx.speeds ? d.fx.speeds[b.duration] : d.fx.speeds._default;
            if (null == b.queue || !0 === b.queue) b.queue = "fx";
            b.old = b.complete;
            b.complete = function (a) {
                d.isFunction(b.old) && b.old.call(this);
                b.queue ? d.dequeue(this, b.queue) : !1 !== a && d._unmark(this)
            };
            return b
        },
        easing: {
            linear: function (a, c, d, h) {
                return d + h * a
            },
            swing: function (a, c, d, h) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * h + d
            }
        },
        timers: [],
        fx: function (a, c, d) {
            this.options = c;
            this.elem = a;
            this.prop = d;
            c.orig = c.orig || {}
        }
    });
    d.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (d.fx.step[this.prop] || d.fx.step._default)(this)
        },
        cur: function () {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, c = d.css(this.elem, this.prop);
            return isNaN(a = parseFloat(c)) ? !c || "auto" === c ? 0 : c : a
        },
        custom: function (a, h, b) {
            function m(a) {
                return e.step(a)
            }
            var e = this,
                j = d.fx;
            this.startTime = c || n();
            this.end = h;
            this.now = this.start = a;
            this.pos = this.state = 0;
            this.unit = b || this.unit || (d.cssNumber[this.prop] ? "" : "px");
            m.queue = this.options.queue;
            m.elem = this.elem;
            m.saveState = function () {
                e.options.hide && d._data(e.elem, "fxshow" + e.prop) === g && d._data(e.elem, "fxshow" + e.prop, e.start)
            };
            m() && d.timers.push(m) && !hb && (hb = setInterval(j.tick, j.interval))
        },
        show: function () {
            var a = d._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || d.style(this.elem, this.prop);
            this.options.show = !0;
            a !== g ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
            d(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = d._data(this.elem, "fxshow" + this.prop) || d.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function (a) {
            var h, b, m = c || n(),
                e = !0,
                j = this.elem,
                f = this.options;
            if (a || m >= f.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                f.animatedProperties[this.prop] = !0;
                for (h in f.animatedProperties)!0 !== f.animatedProperties[h] && (e = !1);
                if (e) {
                    null != f.overflow && !d.support.shrinkWrapBlocks && d.each(["", "X", "Y"], function (a, c) {
                        j.style["overflow" + c] = f.overflow[a]
                    });
                    f.hide && d(j).hide();
                    if (f.hide || f.show) for (h in f.animatedProperties) d.style(j, h, f.orig[h]), d.removeData(j, "fxshow" + h, !0), d.removeData(j, "toggle" + h, !0);
                    (a = f.complete) && (f.complete = !1, a.call(j))
                }
                return !1
            }
            Infinity == f.duration ? this.now = m : (b = m - this.startTime, this.state = b / f.duration, this.pos = d.easing[f.animatedProperties[this.prop]](this.state, b, 0, 1, f.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return !0
        }
    };
    d.extend(d.fx, {
        tick: function () {
            for (var a, c = d.timers, h = 0; h < c.length; h++) a = c[h], !a() && c[h] === a && c.splice(h--, 1);
            c.length || d.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(hb);
            hb = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                d.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    });
    d.each(["width", "height"], function (a, c) {
        d.fx.step[c] = function (a) {
            d.style(a.elem, c, Math.max(0,
            a.now) + a.unit)
        }
    });
    d.expr && d.expr.filters && (d.expr.filters.animated = function (a) {
        return d.grep(d.timers, function (c) {
            return a === c.elem
        }).length
    });
    var h = /^t(?:able|d|h)$/i,
        m = /^(?:body|html)$/i;
    "getBoundingClientRect" in v.documentElement ? d.fn.offset = function (a) {
        var c = this[0],
            h;
        if (a) return this.each(function (c) {
            d.offset.setOffset(this, a, c)
        });
        if (!c || !c.ownerDocument) return null;
        if (c === c.ownerDocument.body) return d.offset.bodyOffset(c);
        try {
            h = c.getBoundingClientRect()
        } catch (b) {}
        var m = c.ownerDocument,
            e = m.documentElement;
        if (!h || !d.contains(e, c)) return h ? {
            top: h.top,
            left: h.left
        } : {
            top: 0,
            left: 0
        };
        c = m.body;
        m = q(m);
        return {
            top: h.top + (m.pageYOffset || d.support.boxModel && e.scrollTop || c.scrollTop) - (e.clientTop || c.clientTop || 0),
            left: h.left + (m.pageXOffset || d.support.boxModel && e.scrollLeft || c.scrollLeft) - (e.clientLeft || c.clientLeft || 0)
        }
    } : d.fn.offset = function (a) {
        var c = this[0];
        if (a) return this.each(function (c) {
            d.offset.setOffset(this, a, c)
        });
        if (!c || !c.ownerDocument) return null;
        if (c === c.ownerDocument.body) return d.offset.bodyOffset(c);
        var b, m = c.offsetParent,
            e = c.ownerDocument,
            j = e.documentElement,
            f = e.body;
        b = (e = e.defaultView) ? e.getComputedStyle(c, null) : c.currentStyle;
        for (var g = c.offsetTop, o = c.offsetLeft;
        (c = c.parentNode) && c !== f && c !== j && !(d.support.fixedPosition && "fixed" === b.position);) b = e ? e.getComputedStyle(c, null) : c.currentStyle, g -= c.scrollTop, o -= c.scrollLeft, c === m && (g += c.offsetTop, o += c.offsetLeft, d.support.doesNotAddBorder && (!d.support.doesAddBorderForTableAndCells || !h.test(c.nodeName)) && (g += parseFloat(b.borderTopWidth) || 0, o += parseFloat(b.borderLeftWidth) || 0), m = c.offsetParent), d.support.subtractsBorderForOverflowNotVisible && "visible" !== b.overflow && (g += parseFloat(b.borderTopWidth) || 0, o += parseFloat(b.borderLeftWidth) || 0);
        if ("relative" === b.position || "static" === b.position) g += f.offsetTop, o += f.offsetLeft;
        d.support.fixedPosition && "fixed" === b.position && (g += Math.max(j.scrollTop, f.scrollTop), o += Math.max(j.scrollLeft, f.scrollLeft));
        return {
            top: g,
            left: o
        }
    };
    d.offset = {
        bodyOffset: function (a) {
            var c = a.offsetTop,
                h = a.offsetLeft;
            d.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(d.css(a, "marginTop")) || 0, h += parseFloat(d.css(a, "marginLeft")) || 0);
            return {
                top: c,
                left: h
            }
        },
        setOffset: function (a, c, h) {
            var b = d.css(a, "position");
            "static" === b && (a.style.position = "relative");
            var m = d(a),
                e = m.offset(),
                j = d.css(a, "top"),
                f = d.css(a, "left"),
                g = {}, o = {}, k, n;
            ("absolute" === b || "fixed" === b) && -1 < d.inArray("auto", [j, f]) ? (o = m.position(), k = o.top, n = o.left) : (k = parseFloat(j) || 0, n = parseFloat(f) || 0);
            d.isFunction(c) && (c = c.call(a, h, e));
            null != c.top && (g.top = c.top - e.top + k);
            null != c.left && (g.left = c.left - e.left + n);
            "using" in c ? c.using.call(a, g) : m.css(g)
        }
    };
    d.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                c = this.offsetParent(),
                h = this.offset(),
                b = m.test(c[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : c.offset();
            h.top -= parseFloat(d.css(a, "marginTop")) || 0;
            h.left -= parseFloat(d.css(a, "marginLeft")) || 0;
            b.top += parseFloat(d.css(c[0], "borderTopWidth")) || 0;
            b.left += parseFloat(d.css(c[0], "borderLeftWidth")) || 0;
            return {
                top: h.top - b.top,
                left: h.left - b.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || v.body; a && !m.test(a.nodeName) && "static" === d.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    });
    d.each(["Left", "Top"], function (a, c) {
        var h = "scroll" + c;
        d.fn[h] = function (c) {
            var b, m;
            return c === g ? (b = this[0], !b ? null : (m = q(b)) ? "pageXOffset" in m ? m[a ? "pageYOffset" : "pageXOffset"] : d.support.boxModel && m.document.documentElement[h] || m.document.body[h] : b[h]) : this.each(function () {
                (m = q(this)) ? m.scrollTo(a ? d(m).scrollLeft() : c, a ? c : d(m).scrollTop()) : this[h] = c
            })
        }
    });
    d.each(["Height", "Width"], function (a,
    c) {
        var h = c.toLowerCase();
        d.fn["inner" + c] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(d.css(a, h, "padding")) : this[h]() : null
        };
        d.fn["outer" + c] = function (a) {
            var c = this[0];
            return c ? c.style ? parseFloat(d.css(c, h, a ? "margin" : "border")) : this[h]() : null
        };
        d.fn[h] = function (a) {
            var b = this[0];
            if (!b) return null == a ? null : this;
            if (d.isFunction(a)) return this.each(function (c) {
                var b = d(this);
                b[h](a.call(this, c, b[h]()))
            });
            if (d.isWindow(b)) {
                var m = b.document.documentElement["client" + c],
                    e = b.document.body;
                return "CSS1Compat" === b.document.compatMode && m || e && e["client" + c] || m
            }
            return 9 === b.nodeType ? Math.max(b.documentElement["client" + c], b.body["scroll" + c], b.documentElement["scroll" + c], b.body["offset" + c], b.documentElement["offset" + c]) : a === g ? (b = d.css(b, h), m = parseFloat(b), d.isNumeric(m) ? m : b) : this.css(h, "string" == typeof a ? a : a + "px")
        }
    });
    b.jQuery = b.$ = d;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return d
    })
})(window);
(function (b, g) {
    function q(c) {
        return d.isWindow(c) ? c : 9 === c.nodeType ? c.defaultView || c.parentWindow : !1
    }
    function s(c) {
        if (!eb[c]) {
            var h = v.body,
                b = d("<" + c + ">").appendTo(h),
                a = b.css("display");
            b.remove();
            if ("none" === a || "" === a) {
                Fa || (Fa = v.createElement("iframe"), Fa.frameBorder = Fa.width = Fa.height = 0);
                h.appendChild(Fa);
                if (!Ba || !Fa.createElement) Ba = (Fa.contentWindow || Fa.contentDocument).document, Ba.write(("CSS1Compat" === v.compatMode ? "<!doctype html>" : "") + "<html><body>"), Ba.close();
                b = Ba.createElement(c);
                Ba.body.appendChild(b);
                a = d.css(b, "display");
                h.removeChild(Fa)
            }
            eb[c] = a
        }
        return eb[c]
    }
    function p(c, h) {
        var b = {};
        return d.each(zb.concat.apply([], zb.slice(0, h)), function () {
            b[this] = c
        }), b
    }
    function k() {
        fb = g
    }
    function n() {
        try {
            return new b.XMLHttpRequest
        } catch (c) {}
    }
    function B(c, h, b, a) {
        if (d.isArray(h)) d.each(h, function (h, e) {
            b || ub.test(c) ? a(c, e) : B(c + "[" + ("object" == typeof e || d.isArray(e) ? h : "") + "]", e, b, a)
        });
        else if (!b && null != h && "object" == typeof h) for (var e in h) B(c + "[" + e + "]", h[e], b, a);
        else a(c, h)
    }
    function y(c, h) {
        var b, a, e = d.ajaxSettings.flatOptions || {};
        for (b in h) h[b] !== g && ((e[b] ? c : a || (a = {}))[b] = h[b]);
        a && d.extend(!0, c, a)
    }
    function x(c, d, b, a, e, j) {
        e = e || d.dataTypes[0];
        j = j || {};
        j[e] = !0;
        for (var e = c[e], f = 0, o = e ? e.length : 0, k = c === pb, n; f < o && (k || !n); f++) n = e[f](d, b, a), "string" == typeof n && (!k || j[n] ? n = g : (d.dataTypes.unshift(n), n = x(c, d, b, a, n, j)));
        return (k || !n) && !j["*"] && (n = x(c, d, b, a, "*", j)), n
    }
    function t(c) {
        return function (h, b) {
            "string" != typeof h && (b = h, h = "*");
            if (d.isFunction(b)) for (var a = h.toLowerCase().split(ob), e = 0, j = a.length, f, g; e < j; e++) f = a[e], (g = /^\+/.test(f)) && (f = f.substr(1) || "*"), f = c[f] = c[f] || [], f[g ? "unshift" : "push"](b)
        }
    }
    function o(c, h, b) {
        var a = "width" === h ? c.offsetWidth : c.offsetHeight,
            e = "width" === h ? lb : mb;
        if (0 < a) return "border" !== b && d.each(e, function () {
            b || (a -= parseFloat(d.css(c, "padding" + this)) || 0);
            "margin" === b ? a += parseFloat(d.css(c, b + this)) || 0 : a -= parseFloat(d.css(c, "border" + this + "Width")) || 0
        }), a + "px";
        a = va(c, h, h);
        if (0 > a || null == a) a = c.style[h] || 0;
        return a = parseFloat(a) || 0, b && d.each(e, function () {
            a += parseFloat(d.css(c, "padding" + this)) || 0;
            "padding" !== b && (a += parseFloat(d.css(c, "border" + this + "Width")) || 0);
            "margin" === b && (a += parseFloat(d.css(c, b + this)) || 0)
        }), a + "px"
    }
    function e(c, h) {
        h.src ? d.ajax({
            url: h.src,
            async: !1,
            dataType: "script"
        }) : d.globalEval((h.text || h.textContent || h.innerHTML || "").replace(bb, "/*$0*/"));
        h.parentNode && h.parentNode.removeChild(h)
    }
    function f(c) {
        d.nodeName(c, "input") ? j(c) : "getElementsByTagName" in c && d.grep(c.getElementsByTagName("input"), j)
    }
    function j(c) {
        if ("checkbox" === c.type || "radio" === c.type) c.defaultChecked = c.checked
    }
    function u(c) {
        return "getElementsByTagName" in c ? c.getElementsByTagName("*") : "querySelectorAll" in c ? c.querySelectorAll("*") : []
    }
    function P(c, h) {
        var b;
        if (1 === h.nodeType) {
            h.clearAttributes && h.clearAttributes();
            h.mergeAttributes && h.mergeAttributes(c);
            b = h.nodeName.toLowerCase();
            if ("object" === b) h.outerHTML = c.outerHTML;
            else if ("input" !== b || "checkbox" !== c.type && "radio" !== c.type) if ("option" === b) h.selected = c.defaultSelected;
            else {
                if ("input" === b || "textarea" === b) h.defaultValue = c.defaultValue
            } else c.checked && (h.defaultChecked = h.checked = c.checked), h.value !== c.value && (h.value = c.value);
            h.removeAttribute(d.expando)
        }
    }
    function L(c, h) {
        if (1 === h.nodeType && d.hasData(c)) {
            var b = d.expando,
                a = d.data(c),
                e = d.data(h, a);
            if (a = a[b]) {
                var j = a.events,
                    e = e[b] = d.extend({}, a);
                if (j) {
                    delete e.handle;
                    e.events = {};
                    for (var f in j) {
                        b = 0;
                        for (a = j[f].length; b < a; b++) d.event.add(h, f + (j[f][b].namespace ? "." : "") + j[f][b].namespace, j[f][b], j[f][b].data)
                    }
                }
            }
        }
    }
    function H(c, h, b) {
        h = h || 0;
        if (d.isFunction(h)) return d.grep(c, function (a, c) {
            return !!h.call(a, c, a) === b
        });
        if (h.nodeType) return d.grep(c, function (a) {
            return a === h === b
        });
        if ("string" == typeof h) {
            var a = d.grep(c, function (a) {
                return 1 === a.nodeType
            });
            if (Da.test(h)) return d.filter(h, a, !b);
            h = d.filter(h, a)
        }
        return d.grep(c, function (a) {
            return 0 <= d.inArray(a, h) === b
        })
    }
    function D(c, d) {
        return (c && "*" !== c ? c + "." : "") + d.replace(xa, "`").replace(ya, "&")
    }
    function F(c) {
        var h, b, a, e, j, f, g, o, k, n, u, p = [];
        e = [];
        j = d._data(this, "events");
        if (!(c.liveFired === this || !j || !j.live || c.target.disabled || c.button && "click" === c.type)) {
            c.namespace && (u = RegExp("(^|\\.)" + c.namespace.split(".").join("\\.(?:.*\\.)?") +
                "(\\.|$)"));
            c.liveFired = this;
            var t = j.live.slice(0);
            for (g = 0; g < t.length; g++) j = t[g], j.origType.replace(ga, "") === c.type ? e.push(j.selector) : t.splice(g--, 1);
            e = d(c.target).closest(e, c.currentTarget);
            o = 0;
            for (k = e.length; o < k; o++) {
                n = e[o];
                for (g = 0; g < t.length; g++) if (j = t[g], n.selector === j.selector && (!u || u.test(j.namespace)) && !n.elem.disabled) {
                    f = n.elem;
                    a = null;
                    if ("mouseenter" === j.preType || "mouseleave" === j.preType) c.type = j.preType, (a = d(c.relatedTarget).closest(j.selector)[0]) && d.contains(f, a) && (a = f);
                    (!a || a !== f) && p.push({
                        elem: f,
                        handleObj: j,
                        level: n.level
                    })
                }
            }
            o = 0;
            for (k = p.length; o < k; o++) {
                e = p[o];
                if (b && e.level > b) break;
                c.currentTarget = e.elem;
                c.data = e.handleObj.data;
                c.handleObj = e.handleObj;
                u = e.handleObj.origHandler.apply(e.elem, arguments);
                if (!1 === u || c.isPropagationStopped()) if (b = e.level, !1 === u && (h = !1), c.isImmediatePropagationStopped()) break
            }
            return h
        }
    }
    function A(c, h, b) {
        var a = d.extend({}, b[0]);
        a.type = c;
        a.originalEvent = {};
        a.liveFired = g;
        d.event.handle.call(h, a);
        a.isDefaultPrevented() && b[0].preventDefault()
    }
    function V() {
        return !0
    }
    function I() {
        return !1
    }

    function Q(c, h, b) {
        var a = h + "defer",
            e = h + "queue",
            j = h + "mark",
            f = d.data(c, a, g, !0);
        f && ("queue" === b || !d.data(c, e, g, !0)) && ("mark" === b || !d.data(c, j, g, !0)) && setTimeout(function () {
            !d.data(c, e, g, !0) && !d.data(c, j, g, !0) && (d.removeData(c, a, !0), f.resolve())
        }, 0)
    }
    function ia(c) {
        for (var d in c) if ("toJSON" !== d) return !1;
        return !0
    }
    function W(c, h, b) {
        if (b === g && 1 === c.nodeType) if (b = "data-" + h.replace(oa, "-$1").toLowerCase(), b = c.getAttribute(b), "string" == typeof b) {
            try {
                b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : d.isNaN(b) ? ca.test(b) ? d.parseJSON(b) : b : parseFloat(b)
            } catch (a) {}
            d.data(c, h, b)
        } else b = g;
        return b
    }
    var v = b.document,
        ea = b.navigator,
        ka = b.location,
        d = function () {
            function c() {
                if (!d.isReady) {
                    try {
                        v.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(c, 1);
                        return
                    }
                    d.ready()
                }
            }
            var d = function (a, c) {
                return new d.fn.init(a, c, e)
            }, m = b.jQuery,
                a = b.$,
                e, j = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                f = /\S/,
                o = /^\s+/,
                k = /\s+$/,
                n = /\d/,
                u = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                p = /^[\],:{}\s]*$/,
                t = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                x = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                y = /(?:^|:|,)(?:\s*\[)+/g,
                s = /(webkit)[ \/]([\w.]+)/,
                B = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                P = /(msie) ([\w.]+)/,
                q = /(mozilla)(?:.*? rv:([\w.]+))?/,
                M = /-([a-z]|[0-9])/ig,
                X = /^-ms-/,
                H = function (a, c) {
                    return (c + "").toUpperCase()
                }, D = ea.userAgent,
                N, O, A, F = Object.prototype.toString,
                K = Object.prototype.hasOwnProperty,
                Z = Array.prototype.push,
                E = Array.prototype.slice,
                L = String.prototype.trim,
                J = Array.prototype.indexOf,
                G = {};
            return d.fn = d.prototype = {
                constructor: d,
                init: function (a, c, b) {
                    var m, e, r;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && v.body) return this.context = v, this[0] = v.body, this.selector = a, this.length = 1, this;
                    if ("string" == typeof a) {
                        "<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || 3 > a.length ? m = j.exec(a) : m = [null, a, null];
                        if (m && (m[1] || !c)) {
                            if (m[1]) return c = c instanceof d ? c[0] : c, r = c ? c.ownerDocument || c : v, e = u.exec(a), e ? d.isPlainObject(c) ? (a = [v.createElement(e[1])], d.fn.attr.call(a, c, !0)) : a = [r.createElement(e[1])] : (e = d.buildFragment([m[1]], [r]), a = (e.cacheable ? d.clone(e.fragment) : e.fragment).childNodes),
                            d.merge(this, a);
                            if ((c = v.getElementById(m[2])) && c.parentNode) {
                                if (c.id !== m[2]) return b.find(a);
                                this.length = 1;
                                this[0] = c
                            }
                            return this.context = v, this.selector = a, this
                        }
                        return !c || c.jquery ? (c || b).find(a) : this.constructor(c).find(a)
                    }
                    return d.isFunction(a) ? b.ready(a) : (a.selector !== g && (this.selector = a.selector, this.context = a.context), d.makeArray(a, this))
                },
                selector: "",
                jquery: "1.6.4",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return E.call(this, 0)
                },
                get: function (a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function (a, c, b) {
                    var m = this.constructor();
                    return d.isArray(a) ? Z.apply(m, a) : d.merge(m, a), m.prevObject = this, m.context = this.context, "find" === c ? m.selector = this.selector + (this.selector ? " " : "") + b : c && (m.selector = this.selector + "." + c + "(" + b + ")"), m
                },
                each: function (a, c) {
                    return d.each(this, a, c)
                },
                ready: function (a) {
                    return d.bindReady(), O.done(a), this
                },
                eq: function (a) {
                    return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(d.map(this, function (c, d) {
                        return a.call(c, d, c)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: Z,
                sort: [].sort,
                splice: [].splice
            }, d.fn.init.prototype = d.fn, d.extend = d.fn.extend = function () {
                var a, c, b, m, e, r, j = arguments[0] || {}, f = 1,
                    z = arguments.length,
                    o = !1;
                "boolean" == typeof j && (o = j, j = arguments[1] || {}, f = 2);
                "object" != typeof j && !d.isFunction(j) && (j = {});
                for (z === f && (j = this, --f); f < z; f++) if (null != (a = arguments[f])) for (c in a) b = j[c], m = a[c], j !== m && (o && m && (d.isPlainObject(m) || (e = d.isArray(m))) ? (e ? (e = !1, r = b && d.isArray(b) ? b : []) : r = b && d.isPlainObject(b) ? b : {}, j[c] = d.extend(o, r, m)) : m !== g && (j[c] = m));
                return j
            }, d.extend({
                noConflict: function (c) {
                    return b.$ === d && (b.$ = a), c && b.jQuery === d && (b.jQuery = m), d
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? d.readyWait++ : d.ready(!0)
                },
                ready: function (a) {
                    if (!0 === a && !--d.readyWait || !0 !== a && !d.isReady) {
                        if (!v.body) return setTimeout(d.ready,
                        1);
                        d.isReady = !0;
                        !0 !== a && 0 < --d.readyWait || (O.resolveWith(v, [d]), d.fn.trigger && d(v).trigger("ready").unbind("ready"))
                    }
                },
                bindReady: function () {
                    if (!O) {
                        O = d._Deferred();
                        if ("complete" === v.readyState) return setTimeout(d.ready, 1);
                        if (v.addEventListener) v.addEventListener("DOMContentLoaded", A, !1), b.addEventListener("load", d.ready, !1);
                        else if (v.attachEvent) {
                            v.attachEvent("onreadystatechange", A);
                            b.attachEvent("onload", d.ready);
                            var a = !1;
                            try {
                                a = null == b.frameElement
                            } catch (m) {}
                            v.documentElement.doScroll && a && c()
                        }
                    }
                },
                isFunction: function (a) {
                    return "function" === d.type(a)
                },
                isArray: Array.isArray || function (a) {
                    return "array" === d.type(a)
                },
                isWindow: function (a) {
                    return a && "object" == typeof a && "setInterval" in a
                },
                isNaN: function (a) {
                    return null == a || !n.test(a) || isNaN(a)
                },
                type: function (a) {
                    return null == a ? "" + a : G[F.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || "object" !== d.type(a) || a.nodeType || d.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !K.call(a, "constructor") && !K.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    for (var b in a);
                    return b === g || K.call(a, b)
                },
                isEmptyObject: function (a) {
                    for (var c in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw a;
                },
                parseJSON: function (a) {
                    if ("string" != typeof a || !a) return null;
                    a = d.trim(a);
                    if (b.JSON && b.JSON.parse) return b.JSON.parse(a);
                    if (p.test(a.replace(t, "@").replace(x, "]").replace(y, ""))) return (new Function("return " + a))();
                    d.error("Invalid JSON: " + a)
                },
                parseXML: function (a) {
                    var c, m;
                    try {
                        b.DOMParser ? (m = new DOMParser, c = m.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async =
                            "false", c.loadXML(a))
                    } catch (e) {
                        c = g
                    }
                    return (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + a), c
                },
                noop: function () {},
                globalEval: function (a) {
                    a && f.test(a) && (b.execScript || function (a) {
                        b.eval.call(b, a)
                    })(a)
                },
                camelCase: function (a) {
                    return a.replace(X, "ms-").replace(M, H)
                },
                nodeName: function (a, c) {
                    return a.nodeName && a.nodeName.toUpperCase() === c.toUpperCase()
                },
                each: function (a, c, b) {
                    var m, e = 0,
                        r = a.length,
                        j = r === g || d.isFunction(a);
                    if (b) if (j) for (m in a) {
                        if (!1 === c.apply(a[m],
                        b)) break
                    } else for (; e < r && !1 !== c.apply(a[e++], b););
                    else if (j) for (m in a) {
                        if (!1 === c.call(a[m], m, a[m])) break
                    } else for (; e < r && !1 !== c.call(a[e], e, a[e++]););
                    return a
                },
                trim: L ? function (a) {
                    return null == a ? "" : L.call(a)
                } : function (a) {
                    return null == a ? "" : (a + "").replace(o, "").replace(k, "")
                },
                makeArray: function (a, c) {
                    var b = c || [];
                    if (null != a) {
                        var m = d.type(a);
                        null == a.length || "string" === m || "function" === m || "regexp" === m || d.isWindow(a) ? Z.call(b, a) : d.merge(b, a)
                    }
                    return b
                },
                inArray: function (a, c) {
                    if (!c) return -1;
                    if (J) return J.call(c,
                    a);
                    for (var d = 0, h = c.length; d < h; d++) if (c[d] === a) return d;
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        h = 0;
                    if ("number" == typeof c.length) for (var b = c.length; h < b; h++) a[d++] = c[h];
                    else for (; c[h] !== g;) a[d++] = c[h++];
                    return a.length = d, a
                },
                grep: function (a, c, d) {
                    for (var h = [], b, d = !! d, m = 0, e = a.length; m < e; m++) b = !! c(a[m], m), d !== b && h.push(a[m]);
                    return h
                },
                map: function (a, c, b) {
                    var m, e, r = [],
                        j = 0,
                        f = a.length;
                    if (a instanceof d || f !== g && "number" == typeof f && (0 < f && a[0] && a[f - 1] || 0 === f || d.isArray(a))) for (; j < f; j++) m = c(a[j], j, b), null != m && (r[r.length] = m);
                    else for (e in a) m = c(a[e], e, b), null != m && (r[r.length] = m);
                    return r.concat.apply([], r)
                },
                guid: 1,
                proxy: function (a, c) {
                    if ("string" == typeof c) var b = a[c],
                        c = a,
                        a = b;
                    if (!d.isFunction(a)) return g;
                    var m = E.call(arguments, 2),
                        b = function () {
                            return a.apply(c, m.concat(E.call(arguments)))
                        };
                    return b.guid = a.guid = a.guid || b.guid || d.guid++, b
                },
                access: function (a, c, b, m, e, r) {
                    var j = a.length;
                    if ("object" == typeof c) {
                        for (var f in c) d.access(a, f, c[f], m, e, b);
                        return a
                    }
                    if (b !== g) {
                        m = !r && m && d.isFunction(b);
                        for (f = 0; f < j; f++) e(a[f],
                        c, m ? b.call(a[f], f, e(a[f], c)) : b, r);
                        return a
                    }
                    return j ? e(a[0], c) : g
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    a = s.exec(a) || B.exec(a) || P.exec(a) || 0 > a.indexOf("compatible") && q.exec(a) || [];
                    return {
                        browser: a[1] || "",
                        version: a[2] || "0"
                    }
                },
                sub: function () {
                    function a(c, d) {
                        return new a.fn.init(c, d)
                    }
                    d.extend(!0, a, this);
                    a.superclass = this;
                    a.fn = a.prototype = this();
                    a.fn.constructor = a;
                    a.sub = this.sub;
                    a.fn.init = function (b, m) {
                        return m && m instanceof d && !(m instanceof a) && (m = a(m)), d.fn.init.call(this,
                        b, m, c)
                    };
                    a.fn.init.prototype = a.fn;
                    var c = a(v);
                    return a
                },
                browser: {}
            }), d.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","), function (a, c) {
                G["[object " + c + "]"] = c.toLowerCase()
            }), N = d.uaMatch(D), N.browser && (d.browser[N.browser] = !0, d.browser.version = N.version), d.browser.webkit && (d.browser.safari = !0), f.test("\u00a0") && (o = /^[\s\xA0]+/, k = /[\s\xA0]+$/), e = d(v), v.addEventListener ? A = function () {
                v.removeEventListener("DOMContentLoaded", A, !1);
                d.ready()
            } : v.attachEvent && (A = function () {
                "complete" === v.readyState && (v.detachEvent("onreadystatechange", A), d.ready())
            }), d
        }(),
        S = "done,fail,isResolved,isRejected,promise,then,always,pipe".split(","),
        Y = [].slice;
    d.extend({
        _Deferred: function () {
            var c = [],
                h, b, a, e = {
                    done: function () {
                        if (!a) {
                            var b = arguments,
                                m, j, f, g, o;
                            h && (o = h, h = 0);
                            m = 0;
                            for (j = b.length; m < j; m++) f = b[m], g = d.type(f), "array" === g ? e.done.apply(e, f) : "function" === g && c.push(f);
                            o && e.resolveWith(o[0], o[1])
                        }
                        return this
                    },
                    resolveWith: function (d, e) {
                        if (!a && !h && !b) {
                            e = e || [];
                            b = 1;
                            try {
                                for (; c[0];) c.shift().apply(d, e)
                            } finally {
                                h = [d, e], b = 0
                            }
                        }
                        return this
                    },
                    resolve: function () {
                        return e.resolveWith(this, arguments), this
                    },
                    isResolved: function () {
                        return !!b || !! h
                    },
                    cancel: function () {
                        return a = 1, c = [], this
                    }
                };
            return e
        },
        Deferred: function (c) {
            var h = d._Deferred(),
                b = d._Deferred(),
                a;
            return d.extend(h, {
                then: function (a, c) {
                    return h.done(a).fail(c), this
                },
                always: function () {
                    return h.done.apply(h, arguments).fail.apply(this, arguments)
                },
                fail: b.done,
                rejectWith: b.resolveWith,
                reject: b.resolve,
                isRejected: b.isResolved,
                pipe: function (a, c) {
                    return d.Deferred(function (b) {
                        d.each({
                            done: [a,
                                "resolve"],
                            fail: [c, "reject"]
                        }, function (a, c) {
                            var m = c[0],
                                e = c[1],
                                r;
                            d.isFunction(m) ? h[a](function () {
                                (r = m.apply(this, arguments)) && d.isFunction(r.promise) ? r.promise().then(b.resolve, b.reject) : b[e + "With"](this === h ? b : this, [r])
                            }) : h[a](b[e])
                        })
                    }).promise()
                },
                promise: function (c) {
                    if (null == c) {
                        if (a) return a;
                        a = c = {}
                    }
                    for (var d = S.length; d--;) c[S[d]] = h[S[d]];
                    return c
                }
            }), h.done(b.cancel).fail(h.cancel), delete h.cancel, c && c.call(h, h), h
        },
        when: function (c) {
            function h(a) {
                return function (c) {
                    b[a] = 1 < arguments.length ? Y.call(arguments,
                    0) : c;
                    --j || f.resolveWith(f, Y.call(b, 0))
                }
            }
            var b = arguments,
                a = 0,
                e = b.length,
                j = e,
                f = 1 >= e && c && d.isFunction(c.promise) ? c : d.Deferred();
            if (1 < e) {
                for (; a < e; a++) b[a] && d.isFunction(b[a].promise) ? b[a].promise().then(h(a), f.reject) : --j;
                j || f.resolveWith(f, b)
            } else f !== c && f.resolveWith(f, e ? [c] : []);
            return f.promise()
        }
    });
    d.support = function () {
        var c = v.createElement("div"),
            h = v.documentElement,
            b, a, e, j, f, g, o;
        c.setAttribute("className", "t");
        c.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        b = c.getElementsByTagName("*");
        a = c.getElementsByTagName("a")[0];
        if (!b || !b.length || !a) return {};
        e = v.createElement("select");
        j = e.appendChild(v.createElement("option"));
        b = c.getElementsByTagName("input")[0];
        g = {
            leadingWhitespace: 3 === c.firstChild.nodeType,
            tbody: !c.getElementsByTagName("tbody").length,
            htmlSerialize: !! c.getElementsByTagName("link").length,
            style: /top/.test(a.getAttribute("style")),
            hrefNormalized: "/a" === a.getAttribute("href"),
            opacity: /^0.55$/.test(a.style.opacity),
            cssFloat: !! a.style.cssFloat,
            checkOn: "on" === b.value,
            optSelected: j.selected,
            getSetAttribute: "t" !== c.className,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        b.checked = !0;
        g.noCloneChecked = b.cloneNode(!0).checked;
        e.disabled = !0;
        g.optDisabled = !j.disabled;
        try {
            delete c.test
        } catch (k) {
            g.deleteExpando = !1
        }!c.addEventListener && c.attachEvent && c.fireEvent && (c.attachEvent("onclick", function () {
            g.noCloneEvent = !1
        }), c.cloneNode(!0).fireEvent("onclick"));
        b = v.createElement("input");
        b.value = "t";
        b.setAttribute("type", "radio");
        g.radioValue = "t" === b.value;
        b.setAttribute("checked", "checked");
        c.appendChild(b);
        a = v.createDocumentFragment();
        a.appendChild(c.firstChild);
        g.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        c.innerHTML = "";
        c.style.width = c.style.paddingLeft = "1px";
        e = v.getElementsByTagName("body")[0];
        a = v.createElement(e ? "div" : "body");
        j = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        e && d.extend(j, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in j) a.style[o] = j[o];
        a.appendChild(c);
        h = e || h;
        h.insertBefore(a, h.firstChild);
        g.appendChecked = b.checked;
        g.boxModel = 2 === c.offsetWidth;
        "zoom" in c.style && (c.style.display = "inline", c.style.zoom = 1, g.inlineBlockNeedsLayout = 2 === c.offsetWidth, c.style.display = "", c.innerHTML = "<div style='width:4px;'></div>", g.shrinkWrapBlocks = 2 !== c.offsetWidth);
        c.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        e = c.getElementsByTagName("td");
        b = 0 === e[0].offsetHeight;
        e[0].style.display = "";
        e[1].style.display = "none";
        g.reliableHiddenOffsets = b && 0 === e[0].offsetHeight;
        c.innerHTML = "";
        v.defaultView && v.defaultView.getComputedStyle && (f = v.createElement("div"), f.style.width = "0", f.style.marginRight = "0", c.appendChild(f), g.reliableMarginRight = 0 === (parseInt((v.defaultView.getComputedStyle(f, null) || {
            marginRight: 0
        }).marginRight, 10) || 0));
        a.innerHTML = "";
        h.removeChild(a);
        if (c.attachEvent) for (o in {
            submit: 1,
            change: 1,
            focusin: 1
        }) f = "on" + o, (b = f in c) || (c.setAttribute(f,
            "return;"), b = "function" == typeof c[f]), g[o + "Bubbles"] = b;
        return a = a = e = j = e = f = c = b = null, g
    }();
    d.boxModel = d.support.boxModel;
    var ca = /^(?:\{.*\}|\[.*\])$/,
        oa = /([A-Z])/g;
    d.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (c) {
            return c = c.nodeType ? d.cache[c[d.expando]] : c[d.expando], !! c && !ia(c)
        },
        data: function (c, h, b, a) {
            if (d.acceptData(c)) {
                var e, j, f = d.expando,
                    o = "string" == typeof h,
                    k = c.nodeType,
                    n = k ? d.cache : c,
                    u = k ? c[d.expando] : c[d.expando] && d.expando;
                if (u && (!a || !u || !n[u] || n[u][f]) || !(o && b === g)) {
                    u || (k ? c[d.expando] = u = ++d.uuid : u = d.expando);
                    n[u] || (n[u] = {}, k || (n[u].toJSON = d.noop));
                    if ("object" == typeof h || "function" == typeof h) a ? n[u][f] = d.extend(n[u][f], h) : n[u] = d.extend(n[u], h);
                    return e = n[u], a && (e[f] || (e[f] = {}), e = e[f]), b !== g && (e[d.camelCase(h)] = b), "events" === h && !e[h] ? e[f] && e[f].events : (o ? (j = e[h], null == j && (j = e[d.camelCase(h)])) : j = e, j)
                }
            }
        },
        removeData: function (c, h, b) {
            if (d.acceptData(c)) {
                var a,
                e = d.expando,
                    j = c.nodeType,
                    f = j ? d.cache : c,
                    g = j ? c[d.expando] : d.expando;
                if (f[g]) {
                    if (h && (a = b ? f[g][e] : f[g])) if (a[h] || (h = d.camelCase(h)), delete a[h], !ia(a)) return;
                    if (b && (delete f[g][e], !ia(f[g]))) return;
                    h = f[g][e];
                    d.support.deleteExpando || !f.setInterval ? delete f[g] : f[g] = null;
                    h ? (f[g] = {}, j || (f[g].toJSON = d.noop), f[g][e] = h) : j && (d.support.deleteExpando ? delete c[d.expando] : c.removeAttribute ? c.removeAttribute(d.expando) : c[d.expando] = null)
                }
            }
        },
        _data: function (c, h, b) {
            return d.data(c, h, b, !0)
        },
        acceptData: function (c) {
            if (c.nodeName) {
                var h = d.noData[c.nodeName.toLowerCase()];
                if (h) return !0 !== h && c.getAttribute("classid") === h
            }
            return !0
        }
    });
    d.fn.extend({
        data: function (c, h) {
            var b = null;
            if ("undefined" == typeof c) {
                if (this.length && (b = d.data(this[0]), 1 === this[0].nodeType)) for (var a = this[0].attributes, e, j = 0, f = a.length; j < f; j++) e = a[j].name, 0 === e.indexOf("data-") && (e = d.camelCase(e.substring(5)), W(this[0], e, b[e]));
                return b
            }
            if ("object" == typeof c) return this.each(function () {
                d.data(this, c)
            });
            var o = c.split(".");
            return o[1] = o[1] ? "." + o[1] : "", h === g ? (b = this.triggerHandler("getData" + o[1] + "!", [o[0]]), b === g && this.length && (b = d.data(this[0], c), b = W(this[0], c, b)), b === g && o[1] ? this.data(o[0]) : b) : this.each(function () {
                var a = d(this),
                    b = [o[0], h];
                a.triggerHandler("setData" + o[1] + "!", b);
                d.data(this, c, h);
                a.triggerHandler("changeData" + o[1] + "!", b)
            })
        },
        removeData: function (c) {
            return this.each(function () {
                d.removeData(this, c)
            })
        }
    });
    d.extend({
        _mark: function (c, h) {
            c && (h = (h || "fx") + "mark", d.data(c, h, (d.data(c, h, g, !0) || 0) + 1, !0))
        },
        _unmark: function (c, h, b) {
            !0 !== c && (b = h, h = c, c = !1);
            if (h) {
                var b = b || "fx",
                    a = b + "mark";
                (c = c ? 0 : (d.data(h, a, g, !0) || 1) - 1) ? d.data(h, a, c, !0) : (d.removeData(h, a, !0), Q(h, b, "mark"))
            }
        },
        queue: function (c, h, b) {
            if (c) {
                var h = (h || "fx") + "queue",
                    a = d.data(c, h, g, !0);
                return b && (!a || d.isArray(b) ? a = d.data(c, h, d.makeArray(b), !0) : a.push(b)), a || []
            }
        },
        dequeue: function (c, h) {
            var h = h || "fx",
                b = d.queue(c, h),
                a = b.shift();
            "inprogress" === a && (a = b.shift());
            a && ("fx" === h && b.unshift("inprogress"), a.call(c, function () {
                d.dequeue(c, h)
            }));
            b.length || (d.removeData(c, h + "queue", !0), Q(c, h, "queue"))
        }
    });
    d.fn.extend({
        queue: function (c, h) {
            return "string" != typeof c && (h = c, c = "fx"), h === g ? d.queue(this[0], c) : this.each(function () {
                var b = d.queue(this, c, h);
                "fx" === c && "inprogress" !== b[0] && d.dequeue(this, c)
            })
        },
        dequeue: function (c) {
            return this.each(function () {
                d.dequeue(this, c)
            })
        },
        delay: function (c, h) {
            return c = d.fx ? d.fx.speeds[c] || c : c, h = h || "fx", this.queue(h, function () {
                var b = this;
                setTimeout(function () {
                    d.dequeue(b, h)
                }, c)
            })
        },
        clearQueue: function (c) {
            return this.queue(c || "fx", [])
        },
        promise: function (c) {
            function h() {
                --j || b.resolveWith(a, [a])
            }
            "string" != typeof c && (c = g);
            for (var c = c || "fx", b = d.Deferred(), a = this, e = a.length, j = 1, f = c + "defer", o = c + "queue", c = c + "mark", k; e--;) if (k = d.data(a[e], f, g, !0) || (d.data(a[e], o, g, !0) || d.data(a[e], c, g, !0)) && d.data(a[e], f, d._Deferred(), !0)) j++, k.done(h);
            return h(), b.promise()
        }
    });
    var la = /[\n\t\r]/g,
        fa = /\s+/,
        sa = /\r/g,
        C = /^(?:button|input)$/i,
        U = /^(?:button|input|object|select|textarea)$/i,
        T = /^a(?:rea)?$/i,
        E = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        J, G;
    d.fn.extend({
        attr: function (c,
        b) {
            return d.access(this, c, b, !0, d.attr)
        },
        removeAttr: function (c) {
            return this.each(function () {
                d.removeAttr(this, c)
            })
        },
        prop: function (c, b) {
            return d.access(this, c, b, !0, d.prop)
        },
        removeProp: function (c) {
            return c = d.propFix[c] || c, this.each(function () {
                try {
                    this[c] = g, delete this[c]
                } catch (d) {}
            })
        },
        addClass: function (c) {
            var b, m, a, e, j, f, g;
            if (d.isFunction(c)) return this.each(function (a) {
                d(this).addClass(c.call(this, a, this.className))
            });
            if (c && "string" == typeof c) {
                b = c.split(fa);
                m = 0;
                for (a = this.length; m < a; m++) if (e = this[m],
                1 === e.nodeType) if (!e.className && 1 === b.length) e.className = c;
                else {
                    j = " " + e.className + " ";
                    f = 0;
                    for (g = b.length; f < g; f++)~j.indexOf(" " + b[f] + " ") || (j += b[f] + " ");
                    e.className = d.trim(j)
                }
            }
            return this
        },
        removeClass: function (c) {
            var b, m, a, e, j, f, o;
            if (d.isFunction(c)) return this.each(function (a) {
                d(this).removeClass(c.call(this, a, this.className))
            });
            if (c && "string" == typeof c || c === g) {
                b = (c || "").split(fa);
                m = 0;
                for (a = this.length; m < a; m++) if (e = this[m], 1 === e.nodeType && e.className) if (c) {
                    j = (" " + e.className + " ").replace(la, " ");
                    f = 0;
                    for (o = b.length; f < o; f++) j = j.replace(" " + b[f] + " ", " ");
                    e.className = d.trim(j)
                } else e.className = ""
            }
            return this
        },
        toggleClass: function (c, b) {
            var m = typeof c,
                a = "boolean" == typeof b;
            return d.isFunction(c) ? this.each(function (a) {
                d(this).toggleClass(c.call(this, a, this.className, b), b)
            }) : this.each(function () {
                if ("string" === m) for (var e, j = 0, f = d(this), g = b, o = c.split(fa); e = o[j++];) g = a ? g : !f.hasClass(e), f[g ? "addClass" : "removeClass"](e);
                else if ("undefined" === m || "boolean" === m) this.className && d._data(this, "__className__",
                this.className), this.className = this.className || !1 === c ? "" : d._data(this, "__className__") || ""
            })
        },
        hasClass: function (c) {
            for (var c = " " + c + " ", d = 0, b = this.length; d < b; d++) if (1 === this[d].nodeType && -1 < (" " + this[d].className + " ").replace(la, " ").indexOf(c)) return !0;
            return !1
        },
        val: function (c) {
            var b, e, a = this[0];
            if (!arguments.length) return a ? (b = d.valHooks[a.nodeName.toLowerCase()] || d.valHooks[a.type], b && "get" in b && (e = b.get(a, "value")) !== g ? e : (e = a.value, "string" == typeof e ? e.replace(sa, "") : null == e ? "" : e)) : g;
            var j = d.isFunction(c);
            return this.each(function (a) {
                var e = d(this),
                    m;
                if (1 === this.nodeType && (j ? m = c.call(this, a, e.val()) : m = c, null == m ? m = "" : "number" == typeof m ? m += "" : d.isArray(m) && (m = d.map(m, function (a) {
                    return a == null ? "" : a + ""
                })), b = d.valHooks[this.nodeName.toLowerCase()] || d.valHooks[this.type], !b || !("set" in b) || b.set(this, m, "value") === g)) this.value = m
            })
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function (c) {
                    var d = c.attributes.value;
                    return !d || d.specified ? c.value : c.text
                }
            },
            select: {
                get: function (c) {
                    var b, e = c.selectedIndex,
                        a = [],
                        j = c.options,
                        c = "select-one" === c.type;
                    if (0 > e) return null;
                    for (var f = c ? e : 0, g = c ? e + 1 : j.length; f < g; f++) if (b = j[f], b.selected && (d.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !d.nodeName(b.parentNode, "optgroup"))) {
                        b = d(b).val();
                        if (c) return b;
                        a.push(b)
                    }
                    return c && !a.length && j.length ? d(j[e]).val() : a
                },
                set: function (c, b) {
                    var e = d.makeArray(b);
                    return d(c).find("option").each(function () {
                        this.selected = 0 <= d.inArray(d(this).val(), e)
                    }), e.length || (c.selectedIndex = -1), e
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function (c, b, e, a) {
            var j = c.nodeType;
            if (!c || 3 === j || 8 === j || 2 === j) return g;
            if (a && b in d.attrFn) return d(c)[b](e);
            if ("getAttribute" in c) {
                var f, o, a = 1 !== j || !d.isXMLDoc(c);
                return a && (b = d.attrFix[b] || b, o = d.attrHooks[b], o || (E.test(b) ? o = G : J && (o = J))), e !== g ? null === e ? (d.removeAttr(c, b), g) : o && "set" in o && a && (f = o.set(c, e, b)) !== g ? f : (c.setAttribute(b, "" + e), e) : o && "get" in o && a && null !== (f = o.get(c, b)) ? f : (f = c.getAttribute(b),
                null === f ? g : f)
            }
            return d.prop(c, b, e)
        },
        removeAttr: function (c, b) {
            var e;
            1 === c.nodeType && (b = d.attrFix[b] || b, d.attr(c, b, ""), c.removeAttribute(b), E.test(b) && (e = d.propFix[b] || b) in c && (c[e] = !1))
        },
        attrHooks: {
            type: {
                set: function (c, b) {
                    if (C.test(c.nodeName) && c.parentNode) d.error("type property can't be changed");
                    else if (!d.support.radioValue && "radio" === b && d.nodeName(c, "input")) {
                        var e = c.value;
                        return c.setAttribute("type", b), e && (c.value = e), b
                    }
                }
            },
            value: {
                get: function (c, b) {
                    return J && d.nodeName(c, "button") ? J.get(c, b) : b in c ? c.value : null
                },
                set: function (c, b, e) {
                    if (J && d.nodeName(c, "button")) return J.set(c, b, e);
                    c.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (c, b, e) {
            var a = c.nodeType;
            if (!c || 3 === a || 8 === a || 2 === a) return g;
            var j, f;
            return (1 !== a || !d.isXMLDoc(c)) && (b = d.propFix[b] || b, f = d.propHooks[b]), e !== g ? f && "set" in f && (j = f.set(c, e, b)) !== g ? j : c[b] = e : f && "get" in f && null !== (j = f.get(c, b)) ? j : c[b]
        },
        propHooks: {
            tabIndex: {
                get: function (c) {
                    var d = c.getAttributeNode("tabindex");
                    return d && d.specified ? parseInt(d.value, 10) : U.test(c.nodeName) || T.test(c.nodeName) && c.href ? 0 : g
                }
            }
        }
    });
    d.attrHooks.tabIndex = d.propHooks.tabIndex;
    G = {
        get: function (c, b) {
            var e;
            return !0 === d.prop(c, b) || (e = c.getAttributeNode(b)) && !1 !== e.nodeValue ? b.toLowerCase() : g
        },
        set: function (c, b, e) {
            var a;
            return !1 === b ? d.removeAttr(c, e) : (a = d.propFix[e] || e, a in c && (c[a] = !0), c.setAttribute(e, e.toLowerCase())), e
        }
    };
    d.support.getSetAttribute || (J = d.valHooks.button = {
        get: function (c, d) {
            var b;
            return b = c.getAttributeNode(d), b && "" !== b.nodeValue ? b.nodeValue : g
        },
        set: function (c, d, b) {
            var a = c.getAttributeNode(b);
            return a || (a = v.createAttribute(b), c.setAttributeNode(a)), a.nodeValue = d + ""
        }
    }, d.each(["width", "height"], function (c, b) {
        d.attrHooks[b] = d.extend(d.attrHooks[b], {
            set: function (c, a) {
                if ("" === a) return c.setAttribute(b, "auto"), a
            }
        })
    }));
    d.support.hrefNormalized || d.each(["href", "src", "width", "height"], function (c, b) {
        d.attrHooks[b] = d.extend(d.attrHooks[b], {
            get: function (c) {
                c = c.getAttribute(b, 2);
                return null === c ? g : c
            }
        })
    });
    d.support.style || (d.attrHooks.style = {
        get: function (c) {
            return c.style.cssText.toLowerCase() || g
        },
        set: function (c, d) {
            return c.style.cssText = "" + d
        }
    });
    d.support.optSelected || (d.propHooks.selected = d.extend(d.propHooks.selected, {
        get: function (c) {
            c = c.parentNode;
            return c && (c.selectedIndex, c.parentNode && c.parentNode.selectedIndex), null
        }
    }));
    d.support.checkOn || d.each(["radio", "checkbox"], function () {
        d.valHooks[this] = {
            get: function (c) {
                return null === c.getAttribute("value") ? "on" : c.value
            }
        }
    });
    d.each(["radio", "checkbox"], function () {
        d.valHooks[this] = d.extend(d.valHooks[this], {
            set: function (c, b) {
                if (d.isArray(b)) return c.checked = 0 <= d.inArray(d(c).val(), b)
            }
        })
    });
    var ga = /\.(.*)$/,
        aa = /^(?:textarea|input|select)$/i,
        xa = /\./g,
        ya = / /g,
        pa = /[^\w\s.|`]/g,
        K = function (c) {
            return c.replace(pa, "\\$&")
        };
    d.event = {
        add: function (c, b, e, a) {
            if (3 !== c.nodeType && 8 !== c.nodeType) {
                if (!1 === e) e = I;
                else if (!e) return;
                var j, f;
                e.handler && (j = e, e = j.handler);
                e.guid || (e.guid = d.guid++);
                if (f = d._data(c)) {
                    var o = f.events,
                        k = f.handle;
                    o || (f.events = o = {});
                    k || (f.handle = k = function (a) {
                        return "undefined" != typeof d && (!a || d.event.triggered !== a.type) ? d.event.handle.apply(k.elem, arguments) : g
                    });
                    k.elem = c;
                    for (var b = b.split(" "), n, u = 0, p; n = b[u++];) {
                        f = j ? d.extend({}, j) : {
                            handler: e,
                            data: a
                        }; - 1 < n.indexOf(".") ? (p = n.split("."), n = p.shift(), f.namespace = p.slice(0).sort().join(".")) : (p = [], f.namespace = "");
                        f.type = n;
                        f.guid || (f.guid = e.guid);
                        var t = o[n],
                            x = d.event.special[n] || {};
                        if (!t && (t = o[n] = [], !x.setup || !1 === x.setup.call(c, a, p, k))) c.addEventListener ? c.addEventListener(n, k, !1) : c.attachEvent && c.attachEvent("on" + n, k);
                        x.add && (x.add.call(c, f), f.handler.guid || (f.handler.guid = e.guid));
                        t.push(f);
                        d.event.global[n] = !0
                    }
                    c = null
                }
            }
        },
        global: {},
        remove: function (c, b, e, a) {
            if (3 !== c.nodeType && 8 !== c.nodeType) {
                !1 === e && (e = I);
                var j, f, o = 0,
                    k, n, u, p, t, x, y = d.hasData(c) && d._data(c),
                    s = y && y.events;
                if (y && s) if (b && b.type && (e = b.handler, b = b.type), !b || "string" == typeof b &&
                    "." === b.charAt(0)) for (j in b = b || "", s) d.event.remove(c, j + b);
                else {
                    for (b = b.split(" "); j = b[o++];) if (p = j, k = 0 > j.indexOf("."), n = [], k || (n = j.split("."), j = n.shift(), u = RegExp("(^|\\.)" + d.map(n.slice(0).sort(), K).join("\\.(?:.*\\.)?") + "(\\.|$)")), t = s[j]) if (e) {
                        p = d.event.special[j] || {};
                        for (f = a || 0; f < t.length; f++) if (x = t[f], e.guid === x.guid) {
                            if (k || u.test(x.namespace)) null == a && t.splice(f--, 1), p.remove && p.remove.call(c, x);
                            if (null != a) break
                        }
                        if (0 === t.length || null != a && 1 === t.length)(!p.teardown || !1 === p.teardown.call(c, n)) && d.removeEvent(c, j, y.handle), delete s[j]
                    } else for (f = 0; f < t.length; f++) if (x = t[f], k || u.test(x.namespace)) d.event.remove(c, p, x.handler, f), t.splice(f--, 1);
                    d.isEmptyObject(s) && ((b = y.handle) && (b.elem = null), delete y.events, delete y.handle, d.isEmptyObject(y) && d.removeData(c, g, !0))
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, h, e, a) {
            var j = c.type || c,
                f = [],
                o;
            0 <= j.indexOf("!") && (j = j.slice(0, -1), o = !0);
            0 <= j.indexOf(".") && (f = j.split("."), j = f.shift(), f.sort());
            if (e && !d.event.customEvent[j] || d.event.global[j]) {
                c = "object" == typeof c ? c[d.expando] ? c : new d.Event(j, c) : new d.Event(j);
                c.type = j;
                c.exclusive = o;
                c.namespace = f.join(".");
                c.namespace_re = RegExp("(^|\\.)" + f.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (a || !e) c.preventDefault(), c.stopPropagation();
                if (e) {
                    if (!(3 === e.nodeType || 8 === e.nodeType)) {
                        c.result = g;
                        c.target = e;
                        h = null != h ? d.makeArray(h) : [];
                        h.unshift(c);
                        f = e;
                        a = 0 > j.indexOf(":") ? "on" + j : "";
                        do o = d._data(f, "handle"), c.currentTarget = f, o && o.apply(f, h), a && d.acceptData(f) && f[a] && !1 === f[a].apply(f, h) && (c.result = !1, c.preventDefault()), f = f.parentNode || f.ownerDocument || f === c.target.ownerDocument && b;
                        while (f && !c.isPropagationStopped());
                        if (!c.isDefaultPrevented()) {
                            var k, f = d.event.special[j] || {};
                            if ((!f._default || !1 === f._default.call(e.ownerDocument, c)) && ("click" !== j || !d.nodeName(e, "a")) && d.acceptData(e)) {
                                try {
                                    a && e[j] && (k = e[a], k && (e[a] = null), d.event.triggered = j, e[j]())
                                } catch (n) {}
                                k && (e[a] = k);
                                d.event.triggered = g
                            }
                        }
                        return c.result
                    }
                } else d.each(d.cache, function () {
                    var a = this[d.expando];
                    a && a.events && a.events[j] && d.event.trigger(c,
                    h, a.handle.elem)
                })
            }
        },
        handle: function (c) {
            var c = d.event.fix(c || b.event),
                h = ((d._data(this, "events") || {})[c.type] || []).slice(0),
                e = !c.exclusive && !c.namespace,
                a = Array.prototype.slice.call(arguments, 0);
            a[0] = c;
            c.currentTarget = this;
            for (var j = 0, f = h.length; j < f; j++) {
                var o = h[j];
                if (e || c.namespace_re.test(o.namespace)) if (c.handler = o.handler, c.data = o.data, c.handleObj = o, o = o.handler.apply(this, a), o !== g && (c.result = o, !1 === o && (c.preventDefault(), c.stopPropagation())), c.isImmediatePropagationStopped()) break
            }
            return c.result
        },
        props: "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,layerX,layerY,metaKey,newValue,offsetX,offsetY,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(","),
        fix: function (c) {
            if (c[d.expando]) return c;
            for (var b = c, c = d.Event(b), e = this.props.length, a; e;) a = this.props[--e], c[a] = b[a];
            c.target || (c.target = c.srcElement || v);
            3 === c.target.nodeType && (c.target = c.target.parentNode);
            !c.relatedTarget && c.fromElement && (c.relatedTarget = c.fromElement === c.target ? c.toElement : c.fromElement);
            null == c.pageX && null != c.clientX && (e = c.target.ownerDocument || v, b = e.documentElement, e = e.body, c.pageX = c.clientX + (b && b.scrollLeft || e && e.scrollLeft || 0) - (b && b.clientLeft || e && e.clientLeft || 0), c.pageY = c.clientY + (b && b.scrollTop || e && e.scrollTop || 0) - (b && b.clientTop || e && e.clientTop || 0));
            return null == c.which && (null != c.charCode || null != c.keyCode) && (c.which = null != c.charCode ? c.charCode : c.keyCode), !c.metaKey && c.ctrlKey && (c.metaKey = c.ctrlKey), !c.which && c.button !== g && (c.which = c.button & 1 ? 1 : c.button & 2 ? 3 : c.button & 4 ? 2 : 0), c
        },
        guid: 1E8,
        proxy: d.proxy,
        special: {
            ready: {
                setup: d.bindReady,
                teardown: d.noop
            },
            live: {
                add: function (c) {
                    d.event.add(this, D(c.origType, c.selector), d.extend({}, c, {
                        handler: F,
                        guid: c.handler.guid
                    }))
                },
                remove: function (c) {
                    d.event.remove(this, D(c.origType, c.selector), c)
                }
            },
            beforeunload: {
                setup: function (c, b, e) {
                    d.isWindow(this) && (this.onbeforeunload = e)
                },
                teardown: function (c, d) {
                    this.onbeforeunload === d && (this.onbeforeunload = null)
                }
            }
        }
    };
    d.removeEvent = v.removeEventListener ? function (c, d, b) {
        c.removeEventListener && c.removeEventListener(d, b, !1)
    } : function (c, d, b) {
        c.detachEvent && c.detachEvent("on" + d, b)
    };
    d.Event = function (c, b) {
        if (!this.preventDefault) return new d.Event(c, b);
        c && c.type ? (this.originalEvent = c, this.type = c.type, this.isDefaultPrevented = c.defaultPrevented || !1 === c.returnValue || c.getPreventDefault && c.getPreventDefault() ? V : I) : this.type = c;
        b && d.extend(this, b);
        this.timeStamp = d.now();
        this[d.expando] = !0
    };
    d.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = V;
            var c = this.originalEvent;
            !c || (c.preventDefault ? c.preventDefault() : c.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = V;
            var c = this.originalEvent;
            !c || (c.stopPropagation && c.stopPropagation(), c.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = V;
            this.stopPropagation()
        },
        isDefaultPrevented: I,
        isPropagationStopped: I,
        isImmediatePropagationStopped: I
    };
    var ja = function (c) {
        var b = c.relatedTarget,
            e = !1,
            a = c.type;
        c.type = c.data;
        b !== this && (b && (e = d.contains(this, b)), e || (d.event.handle.apply(this, arguments), c.type = a))
    }, da = function (c) {
        c.type = c.data;
        d.event.handle.apply(this, arguments)
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (c, b) {
        d.event.special[c] = {
            setup: function (e) {
                d.event.add(this, b, e && e.selector ? da : ja, c)
            },
            teardown: function (c) {
                d.event.remove(this, b, c && c.selector ? da : ja)
            }
        }
    });
    d.support.submitBubbles || (d.event.special.submit = {
        setup: function () {
            if (d.nodeName(this, "form")) return !1;
            d.event.add(this, "click.specialSubmit", function (c) {
                var b = c.target,
                    e = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type : "";
                ("submit" === e || "image" === e) && d(b).closest("form").length && A("submit", this, arguments)
            });
            d.event.add(this, "keypress.specialSubmit", function (c) {
                var b = c.target,
                    e = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type : "";
                ("text" === e || "password" === e) && d(b).closest("form").length && 13 === c.keyCode && A("submit", this, arguments)
            })
        },
        teardown: function () {
            d.event.remove(this, ".specialSubmit")
        }
    });
    if (!d.support.changeBubbles) {
        var ba, qa = function (c) {
            var b = d.nodeName(c, "input") ? c.type : "",
                e = c.value;
            return "radio" === b || "checkbox" === b ? e = c.checked : "select-multiple" === b ? e = -1 < c.selectedIndex ? d.map(c.options, function (a) {
                return a.selected
            }).join("-") : "" : d.nodeName(c, "select") && (e = c.selectedIndex), e
        }, ta = function (c, b) {
            var e = c.target,
                a, j;
            if (aa.test(e.nodeName) && !e.readOnly && (a = d._data(e, "_change_data"), j = qa(e), ("focusout" !== c.type || "radio" !== e.type) && d._data(e, "_change_data", j), !(a === g || j === a))) if (null != a || j) c.type = "change", c.liveFired = g, d.event.trigger(c, b, e)
        };
        d.event.special.change = {
            filters: {
                focusout: ta,
                beforedeactivate: ta,
                click: function (c) {
                    var b = c.target,
                        e = d.nodeName(b, "input") ? b.type : "";
                    ("radio" === e || "checkbox" === e || d.nodeName(b, "select")) && ta.call(this, c)
                },
                keydown: function (c) {
                    var b = c.target,
                        e = d.nodeName(b, "input") ? b.type : "";
                    (13 === c.keyCode && !d.nodeName(b, "textarea") || 32 === c.keyCode && ("checkbox" === e || "radio" === e) || "select-multiple" === e) && ta.call(this, c)
                },
                beforeactivate: function (c) {
                    c = c.target;
                    d._data(c, "_change_data", qa(c))
                }
            },
            setup: function () {
                if ("file" === this.type) return !1;
                for (var c in ba) d.event.add(this, c + ".specialChange", ba[c]);
                return aa.test(this.nodeName)
            },
            teardown: function () {
                return d.event.remove(this, ".specialChange"), aa.test(this.nodeName)
            }
        };
        ba = d.event.special.change.filters;
        ba.focus = ba.beforeactivate
    }
    d.support.focusinBubbles || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function (c, b) {
        function e(a) {
            var c = d.event.fix(a);
            c.type = b;
            c.originalEvent = {};
            d.event.trigger(c, null, c.target);
            c.isDefaultPrevented() && a.preventDefault()
        }
        var a = 0;
        d.event.special[b] = {
            setup: function () {
                0 === a++ && v.addEventListener(c, e, !0)
            },
            teardown: function () {
                0 === --a && v.removeEventListener(c, e, !0)
            }
        }
    });
    d.each(["bind", "one"], function (c, b) {
        d.fn[b] = function (c, a, e) {
            var j;
            if ("object" == typeof c) {
                for (var f in c) this[b](f, a, c[f], e);
                return this
            }
            if (2 === arguments.length || !1 === a) e = a, a = g;
            "one" === b ? (j = function (a) {
                return d(this).unbind(a, j), e.apply(this, arguments)
            }, j.guid = e.guid || d.guid++) : j = e;
            if ("unload" === c && "one" !== b) this.one(c, a, e);
            else {
                f = 0;
                for (var o = this.length; f < o; f++) d.event.add(this[f], c, j, a)
            }
            return this
        }
    });
    d.fn.extend({
        unbind: function (c, b) {
            if ("object" == typeof c && !c.preventDefault) for (var e in c) this.unbind(e, c[e]);
            else {
                e = 0;
                for (var a = this.length; e < a; e++) d.event.remove(this[e], c, b)
            }
            return this
        },
        delegate: function (c, d, b, a) {
            return this.live(d, b, a, c)
        },
        undelegate: function (c, d, b) {
            return 0 === arguments.length ? this.unbind("live") : this.die(d, null, b, c)
        },
        trigger: function (c, b) {
            return this.each(function () {
                d.event.trigger(c, b, this)
            })
        },
        triggerHandler: function (c,
        b) {
            if (this[0]) return d.event.trigger(c, b, this[0], !0)
        },
        toggle: function (c) {
            var b = arguments,
                e = c.guid || d.guid++,
                a = 0,
                j = function (e) {
                    var m = (d.data(this, "lastToggle" + c.guid) || 0) % a;
                    return d.data(this, "lastToggle" + c.guid, m + 1), e.preventDefault(), b[m].apply(this, arguments) || !1
                };
            for (j.guid = e; a < b.length;) b[a++].guid = e;
            return this.click(j)
        },
        hover: function (c, d) {
            return this.mouseenter(c).mouseleave(d || c)
        }
    });
    var ha = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    d.each(["live", "die"],

    function (c, b) {
        d.fn[b] = function (c, a, e, j) {
            var f = 0,
                o, k, n = j || this.selector,
                u = j ? this : d(this.context);
            if ("object" == typeof c && !c.preventDefault) {
                for (o in c) u[b](o, a, c[o], n);
                return this
            }
            if ("die" === b && !c && j && "." === j.charAt(0)) return u.unbind(j), this;
            if (!1 === a || d.isFunction(a)) e = a || I, a = g;
            for (c = (c || "").split(" "); null != (j = c[f++]);) if (o = ga.exec(j), k = "", o && (k = o[0], j = j.replace(ga, "")), "hover" === j) c.push("mouseenter" + k, "mouseleave" + k);
            else if (o = j, ha[j] ? (c.push(ha[j] + k), j += k) : j = (ha[j] || j) + k, "live" === b) {
                k = 0;
                for (var p = u.length; k < p; k++) d.event.add(u[k], "live." + D(j, n), {
                    data: a,
                    selector: n,
                    handler: e,
                    origType: j,
                    origHandler: e,
                    preType: o
                })
            } else u.unbind("live." + D(j, n), e);
            return this
        }
    });
    d.each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error".split(","), function (c, b) {
        d.fn[b] = function (c, a) {
            return a == null && (a = c, c = null), arguments.length > 0 ? this.bind(b, c, a) : this.trigger(b)
        };
        d.attrFn && (d.attrFn[b] = true)
    });
    (function () {
        function c(a, c, d, b, h, e) {
            for (var h = 0, m = b.length; h < m; h++) {
                var j = b[h];
                if (j) {
                    for (var f = !1, j = j[a]; j;) {
                        if (j.sizcache === d) {
                            f = b[j.sizset];
                            break
                        }
                        if (1 === j.nodeType) if (e || (j.sizcache = d, j.sizset = h), "string" != typeof c) {
                            if (j === c) {
                                f = !0;
                                break
                            }
                        } else if (0 < u.filter(c, [j]).length) {
                            f = j;
                            break
                        }
                        j = j[a]
                    }
                    b[h] = f
                }
            }
        }
        function b(a, c, d, h, e, m) {
            for (var e = 0, j = h.length; e < j; e++) {
                var f = h[e];
                if (f) {
                    for (var r = !1, f = f[a]; f;) {
                        if (f.sizcache === d) {
                            r = h[f.sizset];
                            break
                        }
                        1 === f.nodeType && !m && (f.sizcache = d, f.sizset = e);
                        if (f.nodeName.toLowerCase() === c) {
                            r = f;
                            break
                        }
                        f = f[a]
                    }
                    h[e] = r
                }
            }
        }
        var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            a = 0,
            j = Object.prototype.toString,
            f = !1,
            o = !0,
            k = /\\/g,
            n = /\W/;
        [0, 0].sort(function () {
            return o = !1, 0
        });
        var u = function (a, c, d, b) {
            var d = d || [],
                h = c = c || v;
            if (1 !== c.nodeType && 9 !== c.nodeType) return [];
            if (!a || "string" != typeof a) return d;
            var f, o, g, k, n, z, w = !0,
                x = u.isXML(c),
                y = [],
                B = a;
            do if (e.exec(""), f = e.exec(B)) if (B = f[3], y.push(f[1]), f[2]) {
                k = f[3];
                break
            }
            while (f);
            if (1 < y.length && t.exec(a)) if (2 === y.length && p.relative[y[0]]) o = H(y[0] + y[1], c);
            else for (o = p.relative[y[0]] ? [c] : u(y.shift(), c); y.length;) a = y.shift(), p.relative[a] && (a += y.shift()), o = H(a, o);
            else if (!b && 1 < y.length && 9 === c.nodeType && !x && p.match.ID.test(y[0]) && !p.match.ID.test(y[y.length - 1]) && (n = u.find(y.shift(), c, x), c = n.expr ? u.filter(n.expr, n.set)[0] : n.set[0]), c) {
                n = b ? {
                    expr: y.pop(),
                    set: s(b)
                } : u.find(y.pop(), 1 === y.length && ("~" === y[0] || "+" === y[0]) && c.parentNode ? c.parentNode : c, x);
                o = n.expr ? u.filter(n.expr, n.set) : n.set;
                for (0 < y.length ? g = s(o) : w = !1; y.length;) f = z = y.pop(), p.relative[z] ? f = y.pop() : z = "", null == f && (f = c), p.relative[z](g, f, x)
            } else g = [];
            g || (g = o);
            g || u.error(z || a);
            if ("[object Array]" === j.call(g)) if (w) if (c && 1 === c.nodeType) for (a = 0; null != g[a]; a++) g[a] && (!0 === g[a] || 1 === g[a].nodeType && u.contains(c, g[a])) && d.push(o[a]);
            else for (a = 0; null != g[a]; a++) g[a] && 1 === g[a].nodeType && d.push(o[a]);
            else d.push.apply(d, g);
            else s(g, d);
            return k && (u(k, h, d, b), u.uniqueSort(d)), d
        };
        u.uniqueSort = function (a) {
            if (P && (f = o, a.sort(P), f)) for (var c = 1; c < a.length; c++) a[c] === a[c - 1] && a.splice(c--, 1);
            return a
        };
        u.matches = function (a, c) {
            return u(a, null, null, c)
        };
        u.matchesSelector = function (a, c) {
            return 0 < u(c, null, null, [a]).length
        };
        u.find = function (a, c, d) {
            var b;
            if (!a) return [];
            for (var h = 0, e = p.order.length; h < e; h++) {
                var m, j = p.order[h];
                if (m = p.leftMatch[j].exec(a)) {
                    var f = m[1];
                    m.splice(1, 1);
                    if ("\\" !== f.substr(f.length - 1) && (m[1] = (m[1] || "").replace(k, ""), b = p.find[j](m, c, d), null != b)) {
                        a = a.replace(p.match[j], "");
                        break
                    }
                }
            }
            return b || (b = "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName("*") : []), {
                set: b,
                expr: a
            }
        };
        u.filter = function (a, c, d, b) {
            for (var h, e, m = a, j = [], f = c, r = c && c[0] && u.isXML(c[0]); a && c.length;) {
                for (var o in p.filter) if (null != (h = p.leftMatch[o].exec(a)) && h[2]) {
                    var k, n, z = p.filter[o];
                    n = h[1];
                    e = !1;
                    h.splice(1, 1);
                    if ("\\" !== n.substr(n.length - 1)) {
                        f === j && (j = []);
                        if (p.preFilter[o]) if (h = p.preFilter[o](h, f, d, j, b, r)) {
                            if (!0 === h) continue
                        } else e = k = !0;
                        if (h) for (var w = 0; null != (n = f[w]); w++) if (n) {
                            k = z(n, h, w, f);
                            var t = b ^ !! k;
                            d && null != k ? t ? e = !0 : f[w] = !1 : t && (j.push(n), e = !0)
                        }
                        if (k !== g) {
                            d || (f = j);
                            a = a.replace(p.match[o], "");
                            if (!e) return [];
                            break
                        }
                    }
                }
                if (a === m) if (null == e) u.error(a);
                else break;
                m = a
            }
            return f
        };
        u.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a;
        };
        var p = u.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                },
                type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, c) {
                    var d = "string" == typeof c,
                        b = d && !n.test(c),
                        d = d && !b;
                    b && (c = c.toLowerCase());
                    for (var b = 0, h = a.length, e; b < h; b++) if (e = a[b]) {
                        for (;
                        (e = e.previousSibling) && 1 !== e.nodeType;);
                        a[b] = d || e && e.nodeName.toLowerCase() === c ? e || !1 : e === c
                    }
                    d && u.filter(c, a, !0)
                },
                ">": function (a, c) {
                    var d, b = "string" == typeof c,
                        h = 0,
                        e = a.length;
                    if (b && !n.test(c)) for (c = c.toLowerCase(); h < e; h++) {
                        if (d = a[h]) d = d.parentNode, a[h] = d.nodeName.toLowerCase() === c ? d : !1
                    } else {
                        for (; h < e; h++)(d = a[h]) && (a[h] = b ? d.parentNode : d.parentNode === c);
                        b && u.filter(c, a, !0)
                    }
                },
                "": function (d, e, m) {
                    var j, f = a++,
                        r = c;
                    "string" == typeof e && !n.test(e) && (e = e.toLowerCase(), j = e, r = b);
                    r("parentNode", e, f, d, j, m)
                },
                "~": function (d, e, m) {
                    var j, f = a++,
                        r = c;
                    "string" == typeof e && !n.test(e) && (e = e.toLowerCase(), j = e, r = b);
                    r("previousSibling", e, f, d, j, m)
                }
            },
            find: {
                ID: function (a, c, d) {
                    if ("undefined" != typeof c.getElementById && !d) return (a = c.getElementById(a[1])) && a.parentNode ? [a] : []
                },
                NAME: function (a, c) {
                    if ("undefined" != typeof c.getElementsByName) {
                        for (var d = [], b = c.getElementsByName(a[1]), h = 0, e = b.length; h < e; h++) b[h].getAttribute("name") === a[1] && d.push(b[h]);
                        return 0 === d.length ? null : d
                    }
                },
                TAG: function (a, c) {
                    if ("undefined" != typeof c.getElementsByTagName) return c.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, c, d, b, h, e) {
                    a = " " + a[1].replace(k, "") + " ";
                    if (e) return a;
                    for (var e = 0, j; null != (j = c[e]); e++) j && (h ^ (j.className && 0 <= (" " + j.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? d || b.push(j) : d && (c[e] = !1));
                    return !1
                },
                ID: function (a) {
                    return a[1].replace(k, "")
                },
                TAG: function (a) {
                    return a[1].replace(k, "").toLowerCase()
                },
                CHILD: function (c) {
                    if ("nth" === c[1]) {
                        c[2] || u.error(c[0]);
                        c[2] = c[2].replace(/^\+|\s*/g, "");
                        var d = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === c[2] && "2n" || "odd" === c[2] && "2n+1" || !/\D/.test(c[2]) && "0n+" + c[2] || c[2]);
                        c[2] = d[1] + (d[2] || 1) - 0;
                        c[3] = d[3] - 0
                    } else c[2] && u.error(c[0]);
                    return c[0] = a++, c
                },
                ATTR: function (a, c, d, b, h, e) {
                    c = a[1] = a[1].replace(k, "");
                    return !e && p.attrMap[c] && (a[1] = p.attrMap[c]), a[4] = (a[4] || a[5] || "").replace(k, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
                },
                PSEUDO: function (a, c, d, b, h) {
                    if ("not" === a[1]) if (1 < (e.exec(a[3]) || "").length || /^\w/.test(a[3])) a[3] = u(a[3],
                    null, null, c);
                    else return a = u.filter(a[3], c, d, 1 ^ h), d || b.push.apply(b, a), !1;
                    else if (p.match.POS.test(a[0]) || p.match.CHILD.test(a[0])) return !0;
                    return a
                },
                POS: function (a) {
                    return a.unshift(!0), a
                }
            },
            filters: {
                enabled: function (a) {
                    return !1 === a.disabled && "hidden" !== a.type
                },
                disabled: function (a) {
                    return !0 === a.disabled
                },
                checked: function (a) {
                    return !0 === a.checked
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                parent: function (a) {
                    return !!a.firstChild
                },
                empty: function (a) {
                    return !a.firstChild
                },
                has: function (a, c, d) {
                    return !!u(d[3], a).length
                },
                header: function (a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function (a) {
                    var c = a.getAttribute("type"),
                        d = a.type;
                    return "input" === a.nodeName.toLowerCase() && "text" === d && (c === d || null === c)
                },
                radio: function (a) {
                    return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                },
                checkbox: function (a) {
                    return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                },
                file: function (a) {
                    return "input" === a.nodeName.toLowerCase() && "file" === a.type
                },
                password: function (a) {
                    return "input" === a.nodeName.toLowerCase() &&
                        "password" === a.type
                },
                submit: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && "submit" === a.type
                },
                image: function (a) {
                    return "input" === a.nodeName.toLowerCase() && "image" === a.type
                },
                reset: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && "reset" === a.type
                },
                button: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return "input" === c && "button" === a.type || "button" === c
                },
                input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, c) {
                    return 0 === c
                },
                last: function (a, c, d, b) {
                    return c === b.length - 1
                },
                even: function (a, c) {
                    return 0 === c % 2
                },
                odd: function (a, c) {
                    return 1 === c % 2
                },
                lt: function (a, c, d) {
                    return c < d[3] - 0
                },
                gt: function (a, c, d) {
                    return c > d[3] - 0
                },
                nth: function (a, c, d) {
                    return d[3] - 0 === c
                },
                eq: function (a, c, d) {
                    return d[3] - 0 === c
                }
            },
            filter: {
                PSEUDO: function (a, c, d, b) {
                    var h = c[1],
                        e = p.filters[h];
                    if (e) return e(a, d, c, b);
                    if ("contains" === h) return 0 <= (a.textContent || a.innerText || u.getText([a]) || "").indexOf(c[3]);
                    if ("not" === h) {
                        c = c[3];
                        d = 0;
                        for (b = c.length; d < b; d++) if (c[d] === a) return !1;
                        return !0
                    }
                    u.error(h)
                },
                CHILD: function (a, c) {
                    var d = c[1],
                        b = a;
                    switch (d) {
                        case "only":
                        case "first":
                            for (; b = b.previousSibling;) if (1 === b.nodeType) return !1;
                            if ("first" === d) return !0;
                            b = a;
                        case "last":
                            for (; b = b.nextSibling;) if (1 === b.nodeType) return !1;
                            return !0;
                        case "nth":
                            var d = c[2],
                                h = c[3];
                            if (1 === d && 0 === h) return !0;
                            var e = c[0],
                                j = a.parentNode;
                            if (j && (j.sizcache !== e || !a.nodeIndex)) {
                                for (var m = 0, b = j.firstChild; b; b = b.nextSibling) 1 === b.nodeType && (b.nodeIndex = ++m);
                                j.sizcache = e
                            }
                            b = a.nodeIndex - h;
                            return 0 === d ? 0 === b : 0 === b % d && 0 <= b / d
                    }
                },
                ID: function (a, c) {
                    return 1 === a.nodeType && a.getAttribute("id") === c
                },
                TAG: function (a, c) {
                    return "*" === c && 1 === a.nodeType || a.nodeName.toLowerCase() === c
                },
                CLASS: function (a, c) {
                    return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(c)
                },
                ATTR: function (a, c) {
                    var d = c[1],
                        d = p.attrHandle[d] ? p.attrHandle[d](a) : null != a[d] ? a[d] : a.getAttribute(d),
                        b = d + "",
                        h = c[2],
                        e = c[4];
                    return null == d ? "!=" === h : "=" === h ? b === e : "*=" === h ? 0 <= b.indexOf(e) : "~=" === h ? 0 <= (" " + b + " ").indexOf(e) : e ? "!=" === h ? b !== e : "^=" === h ? 0 === b.indexOf(e) : "$=" === h ? b.substr(b.length - e.length) === e : "|=" === h ? b === e || b.substr(0, e.length + 1) === e + "-" : !1 : b && !1 !== d
                },
                POS: function (a, c, d, b) {
                    var h = p.setFilters[c[2]];
                    if (h) return h(a, d, c, b)
                }
            }
        }, t = p.match.POS,
            x = function (a, c) {
                return "\\" + (c - 0 + 1)
            }, y;
        for (y in p.match) p.match[y] = RegExp(p.match[y].source + /(?![^\[]*\])(?![^\(]*\))/.source), p.leftMatch[y] = RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[y].source.replace(/\\(\d+)/g, x));
        var s = function (a, c) {
            return a = Array.prototype.slice.call(a,
            0), c ? (c.push.apply(c, a), c) : a
        };
        try {
            Array.prototype.slice.call(v.documentElement.childNodes, 0)[0].nodeType
        } catch (B) {
            s = function (a, c) {
                var d = 0,
                    b = c || [];
                if ("[object Array]" === j.call(a)) Array.prototype.push.apply(b, a);
                else if ("number" == typeof a.length) for (var h = a.length; d < h; d++) b.push(a[d]);
                else for (; a[d]; d++) b.push(a[d]);
                return b
            }
        }
        var P, q;
        v.documentElement.compareDocumentPosition ? P = function (a, c) {
            return a === c ? (f = !0, 0) : !a.compareDocumentPosition || !c.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(c) & 4 ? -1 : 1
        } : (P = function (a, c) {
            if (a === c) return f = !0, 0;
            if (a.sourceIndex && c.sourceIndex) return a.sourceIndex - c.sourceIndex;
            var d, b, h = [],
                e = [];
            d = a.parentNode;
            b = c.parentNode;
            var j = d;
            if (d === b) return q(a, c);
            if (!d) return -1;
            if (!b) return 1;
            for (; j;) h.unshift(j), j = j.parentNode;
            for (j = b; j;) e.unshift(j), j = j.parentNode;
            d = h.length;
            b = e.length;
            for (j = 0; j < d && j < b; j++) if (h[j] !== e[j]) return q(h[j], e[j]);
            return j === d ? q(a, e[j], -1) : q(h[j], c, 1)
        }, q = function (a, c, d) {
            if (a === c) return d;
            for (a = a.nextSibling; a;) {
                if (a === c) return -1;
                a = a.nextSibling
            }
            return 1
        });
        u.getText = function (a) {
            for (var c = "", d, b = 0; a[b]; b++) d = a[b], 3 === d.nodeType || 4 === d.nodeType ? c += d.nodeValue : 8 !== d.nodeType && (c += u.getText(d.childNodes));
            return c
        };
        (function () {
            var a = v.createElement("div"),
                c = "script" + (new Date).getTime(),
                d = v.documentElement;
            a.innerHTML = "<a name='" + c + "'/>";
            d.insertBefore(a, d.firstChild);
            v.getElementById(c) && (p.find.ID = function (a, c, d) {
                if ("undefined" != typeof c.getElementById && !d) return (c = c.getElementById(a[1])) ? c.id === a[1] || "undefined" != typeof c.getAttributeNode && c.getAttributeNode("id").nodeValue === a[1] ? [c] : g : []
            }, p.filter.ID = function (a, c) {
                var d = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 === a.nodeType && d && d.nodeValue === c
            });
            d.removeChild(a);
            d = a = null
        })();
        (function () {
            var a = v.createElement("div");
            a.appendChild(v.createComment(""));
            0 < a.getElementsByTagName("*").length && (p.find.TAG = function (a, c) {
                var d = c.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                    for (var b = [], h = 0; d[h]; h++) 1 === d[h].nodeType && b.push(d[h]);
                    d = b
                }
                return d
            });
            a.innerHTML = "<a href='#'></a>";
            a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (p.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            });
            a = null
        })();
        v.querySelectorAll && function () {
            var a = u,
                c = v.createElement("div");
            c.innerHTML = "<p class='TEST'></p>";
            if (!c.querySelectorAll || 0 !== c.querySelectorAll(".TEST").length) {
                u = function (c, d, b, h) {
                    d = d || v;
                    if (!h && !u.isXML(d)) {
                        var e = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(c);
                        if (e && (1 === d.nodeType || 9 === d.nodeType)) {
                            if (e[1]) return s(d.getElementsByTagName(c), b);
                            if (e[2] && p.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(e[2]), b)
                        }
                        if (9 === d.nodeType) {
                            if ("body" === c && d.body) return s([d.body], b);
                            if (e && e[3]) {
                                var j = d.getElementById(e[3]);
                                if (!j || !j.parentNode) return s([], b);
                                if (j.id === e[3]) return s([j], b)
                            }
                            try {
                                return s(d.querySelectorAll(c), b)
                            } catch (m) {}
                        } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                            var e = d,
                                f = (j = d.getAttribute("id")) || "__sizzle__",
                                r = d.parentNode,
                                o = /^\s*[+~]/.test(c);
                            j ? f = f.replace(/'/g, "\\$&") : d.setAttribute("id", f);
                            o && r && (d = d.parentNode);
                            try {
                                if (!o || r) return s(d.querySelectorAll("[id='" + f + "'] " + c), b)
                            } catch (g) {} finally {
                                j || e.removeAttribute("id")
                            }
                        }
                    }
                    return a(c, d, b, h)
                };
                for (var d in a) u[d] = a[d];
                c = null
            }
        }();
        (function () {
            var a = v.documentElement,
                c = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (c) {
                var d = !c.call(v.createElement("div"), "div"),
                    b = !1;
                try {
                    c.call(v.documentElement, "[test!='']:sizzle")
                } catch (h) {
                    b = !0
                }
                u.matchesSelector = function (a, h) {
                    h = h.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!u.isXML(a)) try {
                        if (b || !p.match.PSEUDO.test(h) && !/!=/.test(h)) {
                            var e = c.call(a, h);
                            if (e || !d || a.document && 11 !== a.document.nodeType) return e
                        }
                    } catch (j) {}
                    return 0 < u(h, null, null, [a]).length
                }
            }
        })();
        (function () {
            var a = v.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (p.order.splice(1, 0, "CLASS"), p.find.CLASS = function (a, c, d) {
                if ("undefined" != typeof c.getElementsByClassName && !d) return c.getElementsByClassName(a[1])
            }, a = null))
        })();
        v.documentElement.contains ? u.contains = function (a, c) {
            return a !== c && (a.contains ? a.contains(c) : !0)
        } : v.documentElement.compareDocumentPosition ? u.contains = function (a, c) {
            return !!(a.compareDocumentPosition(c) & 16)
        } : u.contains = function () {
            return !1
        };
        u.isXML = function (a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
        };
        var H = function (a, c) {
            for (var d, b = [], h = "", e = c.nodeType ? [c] : c; d = p.match.PSEUDO.exec(a);) h += d[0], a = a.replace(p.match.PSEUDO, "");
            a = p.relative[a] ? a + "*" : a;
            d = 0;
            for (var j = e.length; d < j; d++) u(a, e[d], b);
            return u.filter(h, b)
        };
        d.find = u;
        d.expr = u.selectors;
        d.expr[":"] = d.expr.filters;
        d.unique = u.uniqueSort;
        d.text = u.getText;
        d.isXMLDoc = u.isXML;
        d.contains = u.contains
    })();
    var Xa = /Until$/,
        za = /^(?:parents|prevUntil|prevAll)/,
        $a = /,/,
        Da = /^.[^:#\[\.,]*$/,
        Aa = Array.prototype.slice,
        La = d.expr.match.POS,
        Ka = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    d.fn.extend({
        find: function (c) {
            var b = this,
                e, a;
            if ("string" != typeof c) return d(c).filter(function () {
                e = 0;
                for (a = b.length; e < a; e++) if (d.contains(b[e], this)) return !0
            });
            var j = this.pushStack("", "find", c),
                f, o, g;
            e = 0;
            for (a = this.length; e < a; e++) if (f = j.length, d.find(c, this[e], j), 0 < e) for (o = f; o < j.length; o++) for (g = 0; g < f; g++) if (j[g] === j[o]) {
                j.splice(o--, 1);
                break
            }
            return j
        },
        has: function (c) {
            var b = d(c);
            return this.filter(function () {
                for (var c = 0, a = b.length; c < a; c++) if (d.contains(this, b[c])) return !0
            })
        },
        not: function (c) {
            return this.pushStack(H(this, c, !1), "not", c)
        },
        filter: function (c) {
            return this.pushStack(H(this, c, !0), "filter",
            c)
        },
        is: function (c) {
            return !!c && ("string" == typeof c ? 0 < d.filter(c, this).length : 0 < this.filter(c).length)
        },
        closest: function (c, b) {
            var e = [],
                a, j, f = this[0];
            if (d.isArray(c)) {
                var o, g = {}, k = 1;
                if (f && c.length) {
                    a = 0;
                    for (j = c.length; a < j; a++) o = c[a], g[o] || (g[o] = La.test(o) ? d(o, b || this.context) : o);
                    for (; f && f.ownerDocument && f !== b;) {
                        for (o in g) a = g[o], (a.jquery ? -1 < a.index(f) : d(f).is(a)) && e.push({
                            selector: o,
                            elem: f,
                            level: k
                        });
                        f = f.parentNode;
                        k++
                    }
                }
                return e
            }
            o = La.test(c) || "string" != typeof c ? d(c, b || this.context) : 0;
            a = 0;
            for (j = this.length; a < j; a++) for (f = this[a]; f;) {
                if (o ? -1 < o.index(f) : d.find.matchesSelector(f, c)) {
                    e.push(f);
                    break
                }
                f = f.parentNode;
                if (!f || !f.ownerDocument || f === b || 11 === f.nodeType) break
            }
            return e = 1 < e.length ? d.unique(e) : e, this.pushStack(e, "closest", c)
        },
        index: function (c) {
            return c ? "string" == typeof c ? d.inArray(this[0], d(c)) : d.inArray(c.jquery ? c[0] : c, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (c, b) {
            var e = "string" == typeof c ? d(c, b) : d.makeArray(c && c.nodeType ? [c] : c),
                a = d.merge(this.get(), e);
            return this.pushStack(!e[0] || !e[0].parentNode || 11 === e[0].parentNode.nodeType || !a[0] || !a[0].parentNode || 11 === a[0].parentNode.nodeType ? a : d.unique(a))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    d.each({
        parent: function (c) {
            return (c = c.parentNode) && 11 !== c.nodeType ? c : null
        },
        parents: function (c) {
            return d.dir(c, "parentNode")
        },
        parentsUntil: function (c, b, e) {
            return d.dir(c, "parentNode", e)
        },
        next: function (c) {
            return d.nth(c, 2, "nextSibling")
        },
        prev: function (c) {
            return d.nth(c, 2, "previousSibling")
        },
        nextAll: function (c) {
            return d.dir(c, "nextSibling")
        },
        prevAll: function (c) {
            return d.dir(c, "previousSibling")
        },
        nextUntil: function (c, b, e) {
            return d.dir(c, "nextSibling", e)
        },
        prevUntil: function (c, b, e) {
            return d.dir(c, "previousSibling", e)
        },
        siblings: function (c) {
            return d.sibling(c.parentNode.firstChild, c)
        },
        children: function (c) {
            return d.sibling(c.firstChild)
        },
        contents: function (c) {
            return d.nodeName(c, "iframe") ? c.contentDocument || c.contentWindow.document : d.makeArray(c.childNodes)
        }
    }, function (c, b) {
        d.fn[c] = function (e, a) {
            var j = d.map(this, b, e),
                f = Aa.call(arguments);
            return Xa.test(c) || (a = e), a && "string" == typeof a && (j = d.filter(a, j)), j = 1 < this.length && !Ka[c] ? d.unique(j) : j, (1 < this.length || $a.test(a)) && za.test(c) && (j = j.reverse()), this.pushStack(j, c, f.join(","))
        }
    });
    d.extend({
        filter: function (c, b, e) {
            return e && (c = ":not(" + c + ")"), 1 === b.length ? d.find.matchesSelector(b[0], c) ? [b[0]] : [] : d.find.matches(c, b)
        },
        dir: function (c, b, e) {
            for (var a = [], c = c[b]; c && 9 !== c.nodeType && (e === g || 1 !== c.nodeType || !d(c).is(e));) 1 === c.nodeType && a.push(c), c = c[b];
            return a
        },
        nth: function (c, d, b) {
            for (var d = d || 1, a = 0; c && !(1 === c.nodeType && ++a === d); c = c[b]);
            return c
        },
        sibling: function (c, d) {
            for (var b = []; c; c = c.nextSibling) 1 === c.nodeType && c !== d && b.push(c);
            return b
        }
    });
    var Ya = / jQuery\d+="(?:\d+|null)"/g,
        ra = /^\s+/,
        ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        wa = /<([\w:]+)/,
        Oa = /<tbody/i,
        Pa = /<|&#?\w+;/,
        Qa = /<(?:script|object|embed|option|style)/i,
        ab = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ea = /\/(java|ecma)script/i,
        bb = /^\s*<!(?:\[CDATA\[|\-\-)/,
        ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1,
                "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    ma.optgroup = ma.option;
    ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead;
    ma.th = ma.td;
    d.support.htmlSerialize || (ma._default = [1, "div<div>", "</div>"]);
    d.fn.extend({
        text: function (c) {
            return d.isFunction(c) ? this.each(function (b) {
                var e = d(this);
                e.text(c.call(this, b, e.text()))
            }) : "object" != typeof c && c !== g ? this.empty().append((this[0] && this[0].ownerDocument || v).createTextNode(c)) : d.text(this)
        },
        wrapAll: function (c) {
            if (d.isFunction(c)) return this.each(function (b) {
                d(this).wrapAll(c.call(this, b))
            });
            if (this[0]) {
                var b = d(c, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var c = this; c.firstChild && 1 === c.firstChild.nodeType;) c = c.firstChild;
                    return c
                }).append(this)
            }
            return this
        },
        wrapInner: function (c) {
            return d.isFunction(c) ? this.each(function (b) {
                d(this).wrapInner(c.call(this, b))
            }) : this.each(function () {
                var b = d(this),
                    e = b.contents();
                e.length ? e.wrapAll(c) : b.append(c)
            })
        },
        wrap: function (c) {
            return this.each(function () {
                d(this).wrapAll(c)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (c) {
                this.nodeType === 1 && this.appendChild(c)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (c) {
                this.nodeType === 1 && this.insertBefore(c, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (c) {
                this.parentNode.insertBefore(c, this)
            });
            if (arguments.length) {
                var c = d(arguments[0]);
                return c.push.apply(c, this.toArray()), this.pushStack(c, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (c) {
                this.parentNode.insertBefore(c, this.nextSibling)
            });
            if (arguments.length) {
                var c = this.pushStack(this, "after", arguments);
                return c.push.apply(c, d(arguments[0]).toArray()), c
            }
        },
        remove: function (c, b) {
            for (var e = 0, a; null != (a = this[e]); e++) if (!c || d.filter(c, [a]).length)!b && 1 === a.nodeType && (d.cleanData(a.getElementsByTagName("*")), d.cleanData([a])), a.parentNode && a.parentNode.removeChild(a);
            return this
        },
        empty: function () {
            for (var c = 0, b; null != (b = this[c]); c++) for (1 === b.nodeType && d.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function (c, b) {
            return c = null == c ? !1 : c, b = null == b ? c : b, this.map(function () {
                return d.clone(this,
                c, b)
            })
        },
        html: function (c) {
            if (c === g) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Ya, "") : null;
            if ("string" == typeof c && !Qa.test(c) && (d.support.leadingWhitespace || !ra.test(c)) && !ma[(wa.exec(c) || ["", ""])[1].toLowerCase()]) {
                c = c.replace(ua, "<$1></$2>");
                try {
                    for (var b = 0, e = this.length; b < e; b++) 1 === this[b].nodeType && (d.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = c)
                } catch (a) {
                    this.empty().append(c)
                }
            } else d.isFunction(c) ? this.each(function (a) {
                var b = d(this);
                b.html(c.call(this, a,
                b.html()))
            }) : this.empty().append(c);
            return this
        },
        replaceWith: function (c) {
            return this[0] && this[0].parentNode ? d.isFunction(c) ? this.each(function (b) {
                var e = d(this),
                    a = e.html();
                e.replaceWith(c.call(this, b, a))
            }) : ("string" != typeof c && (c = d(c).detach()), this.each(function () {
                var b = this.nextSibling,
                    e = this.parentNode;
                d(this).remove();
                b ? d(b).before(c) : d(e).append(c)
            })) : this.length ? this.pushStack(d(d.isFunction(c) ? c() : c), "replaceWith", c) : this
        },
        detach: function (c) {
            return this.remove(c, !0)
        },
        domManip: function (c, b, j) {
            var a,
            f, o, k = c[0],
                n = [];
            if (!d.support.checkClone && 3 === arguments.length && "string" == typeof k && ab.test(k)) return this.each(function () {
                d(this).domManip(c, b, j, !0)
            });
            if (d.isFunction(k)) return this.each(function (a) {
                var e = d(this);
                c[0] = k.call(this, a, b ? e.html() : g);
                e.domManip(c, b, j)
            });
            if (this[0]) {
                o = k && k.parentNode;
                d.support.parentNode && o && 11 === o.nodeType && o.childNodes.length === this.length ? a = {
                    fragment: o
                } : a = d.buildFragment(c, this, n);
                o = a.fragment;
                1 === o.childNodes.length ? f = o = o.firstChild : f = o.firstChild;
                if (f) {
                    b = b && d.nodeName(f,
                        "tr");
                    f = 0;
                    for (var u = this.length, p = u - 1; f < u; f++) j.call(b ? d.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) : this[f] : this[f], a.cacheable || 1 < u && f < p ? d.clone(o, !0, !0) : o)
                }
                n.length && d.each(n, e)
            }
            return this
        }
    });
    d.buildFragment = function (c, b, e) {
        var a, j, f, o;
        return b && b[0] && (o = b[0].ownerDocument || b[0]), o.createDocumentFragment || (o = v), 1 === c.length && "string" == typeof c[0] && 512 > c[0].length && o === v && "<" === c[0].charAt(0) && !Qa.test(c[0]) && (d.support.checkClone || !ab.test(c[0])) && (j = !0, f = d.fragments[c[0]], f && 1 !== f && (a = f)), a || (a = o.createDocumentFragment(), d.clean(c, o, a, e)), j && (d.fragments[c[0]] = f ? a : 1), {
            fragment: a,
            cacheable: j
        }
    };
    d.fragments = {};
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (c, b) {
        d.fn[c] = function (e) {
            var a = [],
                e = d(e),
                j = 1 === this.length && this[0].parentNode;
            if (j && 11 === j.nodeType && 1 === j.childNodes.length && 1 === e.length) return e[b](this[0]), this;
            for (var j = 0, f = e.length; j < f; j++) {
                var o = (0 < j ? this.clone(!0) : this).get();
                d(e[j])[b](o);
                a = a.concat(o)
            }
            return this.pushStack(a, c, e.selector)
        }
    });
    d.extend({
        clone: function (c, b, e) {
            var a = c.cloneNode(!0),
                j, f, o;
            if ((!d.support.noCloneEvent || !d.support.noCloneChecked) && (1 === c.nodeType || 11 === c.nodeType) && !d.isXMLDoc(c)) {
                P(c, a);
                j = u(c);
                f = u(a);
                for (o = 0; j[o]; ++o) f[o] && P(j[o], f[o])
            }
            if (b && (L(c, a), e)) {
                j = u(c);
                f = u(a);
                for (o = 0; j[o]; ++o) L(j[o], f[o])
            }
            return a
        },
        clean: function (c, b, e, a) {
            b = b || v;
            "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || v);
            for (var j = [], o, g = 0, k; null != (k = c[g]); g++) if ("number" == typeof k && (k += ""), k) {
                if ("string" == typeof k) if (Pa.test(k)) {
                    k = k.replace(ua, "<$1></$2>");
                    o = (wa.exec(k) || ["", ""])[1].toLowerCase();
                    var n = ma[o] || ma._default,
                        u = n[0],
                        p = b.createElement("div");
                    for (p.innerHTML = n[1] + k + n[2]; u--;) p = p.lastChild;
                    if (!d.support.tbody) {
                        u = Oa.test(k);
                        n = "table" === o && !u ? p.firstChild && p.firstChild.childNodes : "<table>" === n[1] && !u ? p.childNodes : [];
                        for (o = n.length - 1; 0 <= o; --o) d.nodeName(n[o], "tbody") && !n[o].childNodes.length && n[o].parentNode.removeChild(n[o])
                    }!d.support.leadingWhitespace && ra.test(k) && p.insertBefore(b.createTextNode(ra.exec(k)[0]), p.firstChild);
                    k = p.childNodes
                } else k = b.createTextNode(k);
                var t;
                if (!d.support.appendChecked) if (k[0] && "number" == typeof (t = k.length)) for (o = 0; o < t; o++) f(k[o]);
                else f(k);
                k.nodeType ? j.push(k) : j = d.merge(j, k)
            }
            if (e) {
                c = function (a) {
                    return !a.type || Ea.test(a.type)
                };
                for (g = 0; j[g]; g++) a && d.nodeName(j[g], "script") && (!j[g].type || "text/javascript" === j[g].type.toLowerCase()) ? a.push(j[g].parentNode ? j[g].parentNode.removeChild(j[g]) : j[g]) : (1 === j[g].nodeType && (b = d.grep(j[g].getElementsByTagName("script"), c), j.splice.apply(j, [g + 1, 0].concat(b))), e.appendChild(j[g]))
            }
            return j
        },
        cleanData: function (c) {
            for (var b, e, a = d.cache, j = d.expando, f = d.event.special, o = d.support.deleteExpando, g = 0, k; null != (k = c[g]); g++) if (!k.nodeName || !d.noData[k.nodeName.toLowerCase()]) if (e = k[d.expando]) {
                if ((b = a[e] && a[e][j]) && b.events) {
                    for (var n in b.events) f[n] ? d.event.remove(k, n) : d.removeEvent(k, n, b.handle);
                    b.handle && (b.handle.elem = null)
                }
                o ? delete k[d.expando] : k.removeAttribute && k.removeAttribute(d.expando);
                delete a[e]
            }
        }
    });
    var Ja = /alpha\([^)]*\)/i,
        na = /opacity=([^)]*)/,
        Ra = /([A-Z]|^ms)/g,
        Ma = /^-?\d+(?:px)?$/i,
        cb = /^-?\d/,
        O = /^([\-+])=([\-+.\de]+)/,
        Z = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, lb = ["Left", "Right"],
        mb = ["Top", "Bottom"],
        va, sb, tb;
    d.fn.css = function (c, b) {
        return 2 === arguments.length && b === g ? this : d.access(this, c, b, !0, function (c, a, b) {
            return b !== g ? d.style(c, a, b) : d.css(c, a)
        })
    };
    d.extend({
        cssHooks: {
            opacity: {
                get: function (c,
                d) {
                    if (d) {
                        var b = va(c, "opacity", "opacity");
                        return "" === b ? "1" : b
                    }
                    return c.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": d.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (c, b, e, a) {
            if (c && 3 !== c.nodeType && 8 !== c.nodeType && c.style) {
                var j, f = d.camelCase(b),
                    o = c.style,
                    k = d.cssHooks[f],
                    b = d.cssProps[f] || f;
                if (e === g) return k && "get" in k && (j = k.get(c, !1, a)) !== g ? j : o[b];
                a = typeof e;
                "string" === a && (j = O.exec(e)) && (e = +(j[1] + 1) * +j[2] + parseFloat(d.css(c, b)), a = "number");
                if (!(null == e || "number" === a && isNaN(e))) if ("number" === a && !d.cssNumber[f] && (e += "px"), !k || !("set" in k) || (e = k.set(c, e)) !== g) try {
                    o[b] = e
                } catch (n) {}
            }
        },
        css: function (c, b, e) {
            var a, j, b = d.camelCase(b);
            j = d.cssHooks[b];
            b = d.cssProps[b] || b;
            "cssFloat" === b && (b = "float");
            if (j && "get" in j && (a = j.get(c, !0, e)) !== g) return a;
            if (va) return va(c, b)
        },
        swap: function (c, d, b) {
            var a = {}, e;
            for (e in d) a[e] = c.style[e], c.style[e] = d[e];
            b.call(c);
            for (e in d) c.style[e] = a[e]
        }
    });
    d.curCSS = d.css;
    d.each(["height",
        "width"], function (c, b) {
        d.cssHooks[b] = {
            get: function (c, a, e) {
                var j;
                if (a) return 0 !== c.offsetWidth ? o(c, b, e) : (d.swap(c, Z, function () {
                    j = o(c, b, e)
                }), j)
            },
            set: function (c, a) {
                if (!Ma.test(a)) return a;
                a = parseFloat(a);
                if (0 <= a) return a + "px"
            }
        }
    });
    d.support.opacity || (d.cssHooks.opacity = {
        get: function (c, d) {
            return na.test((d && c.currentStyle ? c.currentStyle.filter : c.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : d ? "1" : ""
        },
        set: function (c, b) {
            var e = c.style,
                a = c.currentStyle,
                j = d.isNaN(b) ? "" : "alpha(opacity=" + 100 * b + ")",
                f = a && a.filter || e.filter || "";
            e.zoom = 1;
            if (1 <= b && "" === d.trim(f.replace(Ja, "")) && (e.removeAttribute("filter"), a && !a.filter)) return;
            e.filter = Ja.test(f) ? f.replace(Ja, j) : f + " " + j
        }
    });
    d(function () {
        d.support.reliableMarginRight || (d.cssHooks.marginRight = {
            get: function (c, b) {
                var e;
                return d.swap(c, {
                    display: "inline-block"
                }, function () {
                    b ? e = va(c, "margin-right", "marginRight") : e = c.style.marginRight
                }), e
            }
        })
    });
    v.defaultView && v.defaultView.getComputedStyle && (sb = function (c, b) {
        var e, a, b = b.replace(Ra, "-$1").toLowerCase();
        if (!(a = c.ownerDocument.defaultView)) return g;
        if (a = a.getComputedStyle(c, null)) e = a.getPropertyValue(b), "" === e && !d.contains(c.ownerDocument.documentElement, c) && (e = d.style(c, b));
        return e
    });
    v.documentElement.currentStyle && (tb = function (c, d) {
        var b, a = c.currentStyle && c.currentStyle[d],
            e = c.runtimeStyle && c.runtimeStyle[d],
            j = c.style;
        return !Ma.test(a) && cb.test(a) && (b = j.left, e && (c.runtimeStyle.left = c.currentStyle.left), j.left = "fontSize" === d ? "1em" : a || 0, a = j.pixelLeft + "px", j.left = b, e && (c.runtimeStyle.left = e)), "" === a ? "auto" : a
    });
    va = sb || tb;
    d.expr && d.expr.filters && (d.expr.filters.hidden = function (c) {
        var b = c.offsetHeight;
        return 0 === c.offsetWidth && 0 === b || !d.support.reliableHiddenOffsets && "none" === (c.style.display || d.css(c, "display"))
    }, d.expr.filters.visible = function (c) {
        return !d.expr.filters.hidden(c)
    });
    var Ua = /%20/g,
        ub = /\[\]$/,
        nb = /\r?\n/g,
        Eb = /#.*$/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        vb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Fb = /^(?:GET|HEAD)$/,
        Gb = /^\/\//,
        wb = /\?/,
        Hb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ib = /^(?:select|textarea)/i,
        ob = /\s+/,
        Jb = /([?&])_=[^&]*/,
        xb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        kb = d.fn.load,
        pb = {}, qb = {}, Na, Ha, rb = ["*/"] + ["*"];
    try {
        Na = ka.href
    } catch (Za) {
        Na = v.createElement("a"), Na.href = "", Na = Na.href
    }
    Ha = xb.exec(Na.toLowerCase()) || [];
    d.fn.extend({
        load: function (c, b, e) {
            if ("string" != typeof c && kb) return kb.apply(this, arguments);
            if (!this.length) return this;
            var a = c.indexOf(" ");
            if (0 <= a) var j = c.slice(a, c.length),
                c = c.slice(0, a);
            a = "GET";
            b && (d.isFunction(b) ? (e = b, b = g) : "object" == typeof b && (b = d.param(b, d.ajaxSettings.traditional), a = "POST"));
            var f = this;
            return d.ajax({
                url: c,
                type: a,
                dataType: "html",
                data: b,
                complete: function (a, c, b) {
                    b = a.responseText;
                    a.isResolved() && (a.done(function (a) {
                        b = a
                    }), f.html(j ? d("<div>").append(b.replace(Hb, "")).find(j) : b));
                    e && f.each(e, [b, c, a])
                }
            }), this
        },
        serialize: function () {
            return d.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? d.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Ib.test(this.nodeName) || vb.test(this.type))
            }).map(function (c, b) {
                var e = d(this).val();
                return null == e ? null : d.isArray(e) ? d.map(e, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(nb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: e.replace(nb, "\r\n")
                }
            }).get()
        }
    });
    d.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function (c, b) {
        d.fn[b] = function (c) {
            return this.bind(b, c)
        }
    });
    d.each(["get", "post"], function (c, b) {
        d[b] = function (c, a, e, j) {
            return d.isFunction(a) && (j = j || e, e = a, a = g), d.ajax({
                type: b,
                url: c,
                data: a,
                success: e,
                dataType: j
            })
        }
    });
    d.extend({
        getScript: function (c, b) {
            return d.get(c, g, b, "script")
        },
        getJSON: function (c, b, e) {
            return d.get(c, b, e, "json")
        },
        ajaxSetup: function (c, b) {
            return b ? y(c, d.ajaxSettings) : (b = c, c = d.ajaxSettings), y(c, b), c
        },
        ajaxSettings: {
            url: Na,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(Ha[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": rb
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: t(pb),
        ajaxTransport: t(qb),
        ajax: function (c, b) {
            function e(c, b, h, m) {
                if (2 !== q) {
                    q = 2;
                    P && clearTimeout(P);
                    B = g;
                    y = m || "";
                    O.readyState = 0 < c ? 4 : 0;
                    var p, t, x, m = b;
                    if (h) {
                        var s = a,
                            v = O,
                            D = s.contents,
                            A = s.dataTypes,
                            F = s.responseFields,
                            K, E,
                            Z, L;
                        for (E in F) E in h && (v[F[E]] = h[E]);
                        for (;
                        "*" === A[0];) A.shift(), K === g && (K = s.mimeType || v.getResponseHeader("content-type"));
                        if (K) for (E in D) if (D[E] && D[E].test(K)) {
                            A.unshift(E);
                            break
                        }
                        if (A[0] in h) Z = A[0];
                        else {
                            for (E in h) {
                                if (!A[0] || s.converters[E + " " + A[0]]) {
                                    Z = E;
                                    break
                                }
                                L || (L = E)
                            }
                            Z = Z || L
                        }
                        h = Z ? (Z !== A[0] && A.unshift(Z), h[Z]) : void 0
                    } else h = g;
                    if (200 <= c && 300 > c || 304 === c) {
                        if (a.ifModified) {
                            if (K = O.getResponseHeader("Last-Modified")) d.lastModified[u] = K;
                            if (K = O.getResponseHeader("Etag")) d.etag[u] = K
                        }
                        if (304 === c) m = "notmodified",
                        p = !0;
                        else try {
                            K = a;
                            K.dataFilter && (h = K.dataFilter(h, K.dataType));
                            var J = K.dataTypes;
                            E = {};
                            var G, C, lb = J.length,
                                ja, I = J[0],
                                S, ka, da, va, Q;
                            for (G = 1; G < lb; G++) {
                                if (1 === G) for (C in K.converters) "string" == typeof C && (E[C.toLowerCase()] = K.converters[C]);
                                S = I;
                                I = J[G];
                                if ("*" === I) I = S;
                                else if ("*" !== S && S !== I) {
                                    ka = S + " " + I;
                                    da = E[ka] || E["* " + I];
                                    if (!da) for (va in Q = g, E) if (ja = va.split(" "), ja[0] === S || "*" === ja[0]) if (Q = E[ja[1] + " " + I]) {
                                        va = E[va];
                                        !0 === va ? da = Q : !0 === Q && (da = va);
                                        break
                                    }!da && !Q && d.error("No conversion from " + ka.replace(" ",
                                        " to "));
                                    !0 !== da && (h = da ? da(h) : Q(va(h)))
                                }
                            }
                            t = h;
                            m = "success";
                            p = !0
                        } catch (mb) {
                            m = "parsererror", x = mb
                        }
                    } else if (x = m, !m || c) m = "error", 0 > c && (c = 0);
                    O.status = c;
                    O.statusText = "" + (b || m);
                    p ? o.resolveWith(j, [t, m, O]) : o.rejectWith(j, [O, m, x]);
                    O.statusCode(n);
                    n = g;
                    H && f.trigger("ajax" + (p ? "Success" : "Error"), [O, a, p ? t : x]);
                    k.resolveWith(j, [O, m]);
                    H && (f.trigger("ajaxComplete", [O, a]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (b = c, c = g);
            var b = b || {}, a = d.ajaxSetup({}, b),
                j = a.context || a,
                f = j !== a && (j.nodeType || j instanceof
                d) ? d(j) : d.event,
                o = d.Deferred(),
                k = d._Deferred(),
                n = a.statusCode || {}, u, p = {}, t = {}, y, s, B, P, v, q = 0,
                H, D, O = {
                    readyState: 0,
                    setRequestHeader: function (a, c) {
                        if (!q) {
                            var d = a.toLowerCase(),
                                a = t[d] = t[d] || a;
                            p[a] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return 2 === q ? y : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (2 === q) {
                            if (!s) for (s = {}; c = Bb.exec(y);) s[c[1].toLowerCase()] = c[2];
                            c = s[a.toLowerCase()]
                        }
                        return c === g ? null : c
                    },
                    overrideMimeType: function (c) {
                        return q || (a.mimeType = c), this
                    },
                    abort: function (a) {
                        return a = a || "abort",
                        B && B.abort(a), e(0, a), this
                    }
                };
            o.promise(O);
            O.success = O.done;
            O.error = O.fail;
            O.complete = k.done;
            O.statusCode = function (a) {
                if (a) {
                    var c;
                    if (2 > q) for (c in a) n[c] = [n[c], a[c]];
                    else c = a[O.status], O.then(c, c)
                }
                return this
            };
            a.url = ((c || a.url) + "").replace(Eb, "").replace(Gb, Ha[1] + "//");
            a.dataTypes = d.trim(a.dataType || "*").toLowerCase().split(ob);
            null == a.crossDomain && (v = xb.exec(a.url.toLowerCase()), a.crossDomain = !(!v || v[1] == Ha[1] && v[2] == Ha[2] && (v[3] || ("http:" === v[1] ? 80 : 443)) == (Ha[3] || ("http:" === Ha[1] ? 80 : 443))));
            a.data && a.processData && "string" != typeof a.data && (a.data = d.param(a.data, a.traditional));
            x(pb, a, b, O);
            if (2 === q) return !1;
            H = a.global;
            a.type = a.type.toUpperCase();
            a.hasContent = !Fb.test(a.type);
            H && 0 === d.active++ && d.event.trigger("ajaxStart");
            if (!a.hasContent && (a.data && (a.url += (wb.test(a.url) ? "&" : "?") + a.data, delete a.data), u = a.url, !1 === a.cache)) {
                v = d.now();
                var A = a.url.replace(Jb, "$1_=" + v);
                a.url = A + (A === a.url ? (wb.test(a.url) ? "&" : "?") + "_=" + v : "")
            }(a.data && a.hasContent && !1 !== a.contentType || b.contentType) && O.setRequestHeader("Content-Type",
            a.contentType);
            a.ifModified && (u = u || a.url, d.lastModified[u] && O.setRequestHeader("If-Modified-Since", d.lastModified[u]), d.etag[u] && O.setRequestHeader("If-None-Match", d.etag[u]));
            O.setRequestHeader("Accept", a.dataTypes[0] && a.accepts[a.dataTypes[0]] ? a.accepts[a.dataTypes[0]] + ("*" !== a.dataTypes[0] ? ", " + rb + "; q=0.01" : "") : a.accepts["*"]);
            for (D in a.headers) O.setRequestHeader(D, a.headers[D]);
            if (!a.beforeSend || !1 !== a.beforeSend.call(j, O, a) && 2 !== q) {
                for (D in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) O[D](a[D]);
                if (B = x(qb,
                a, b, O)) {
                    O.readyState = 1;
                    H && f.trigger("ajaxSend", [O, a]);
                    a.async && 0 < a.timeout && (P = setTimeout(function () {
                        O.abort("timeout")
                    }, a.timeout));
                    try {
                        q = 1, B.send(p, e)
                    } catch (F) {
                        2 > q ? e(-1, F) : d.error(F)
                    }
                } else e(-1, "No Transport");
                return O
            }
            return O.abort(), !1
        },
        param: function (c, b) {
            var e = [],
                a = function (a, c) {
                    c = d.isFunction(c) ? c() : c;
                    e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
                };
            b === g && (b = d.ajaxSettings.traditional);
            if (d.isArray(c) || c.jquery && !d.isPlainObject(c)) d.each(c, function () {
                a(this.name, this.value)
            });
            else for (var j in c) B(j, c[j], b, a);
            return e.join("&").replace(Ua, "+")
        }
    });
    d.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Sa = d.now(),
        db = /(\=)\?(&|$)|\?\?/i;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return d.expando + "_" + Sa++
        }
    });
    d.ajaxPrefilter("json jsonp", function (c, e, j) {
        e = "application/x-www-form-urlencoded" === c.contentType && "string" == typeof c.data;
        if ("jsonp" === c.dataTypes[0] || !1 !== c.jsonp && (db.test(c.url) || e && db.test(c.data))) {
            var a, f = c.jsonpCallback = d.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback,
                o = b[f],
                g = c.url,
                k = c.data,
                n = "$1" + f + "$2";
            return !1 !== c.jsonp && (g = g.replace(db, n), c.url === g && (e && (k = k.replace(db, n)), c.data === k && (g += (/\?/.test(g) ? "&" : "?") + c.jsonp + "=" + f))), c.url = g, c.data = k, b[f] = function (c) {
                a = [c]
            }, j.always(function () {
                b[f] = o;
                a && d.isFunction(o) && b[f](a[0])
            }), c.converters["script json"] = function () {
                return a || d.error(f + " was not called"), a[0]
            }, c.dataTypes[0] = "json", "script"
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (c) {
                return d.globalEval(c), c
            }
        }
    });
    d.ajaxPrefilter("script", function (c) {
        c.cache === g && (c.cache = !1);
        c.crossDomain && (c.type = "GET", c.global = !1)
    });
    d.ajaxTransport("script", function (c) {
        if (c.crossDomain) {
            var d, b = v.head || v.getElementsByTagName("head")[0] || v.documentElement;
            return {
                send: function (a, e) {
                    d = v.createElement("script");
                    d.async = "async";
                    c.scriptCharset && (d.charset = c.scriptCharset);
                    d.src = c.url;
                    d.onload = d.onreadystatechange = function (a,
                    c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, b && d.parentNode && b.removeChild(d), d = g, c || e(200, "success")
                    };
                    b.insertBefore(d, b.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var yb = b.ActiveXObject ? function () {
            for (var c in Ia) Ia[c](0, 1)
        } : !1,
        Kb = 0,
        Ia;
    d.ajaxSettings.xhr = b.ActiveXObject ? function () {
        var c;
        if (!(c = !this.isLocal && n())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : n;
    (function (c) {
        d.extend(d.support, {
            ajax: !! c,
            cors: !! c && "withCredentials" in c
        })
    })(d.ajaxSettings.xhr());
    d.support.ajax && d.ajaxTransport(function (c) {
        if (!c.crossDomain || d.support.cors) {
            var e;
            return {
                send: function (j, a) {
                    var f = c.xhr(),
                        o, k;
                    c.username ? f.open(c.type, c.url, c.async, c.username, c.password) : f.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (k in c.xhrFields) f[k] = c.xhrFields[k];
                    c.mimeType && f.overrideMimeType && f.overrideMimeType(c.mimeType);
                    !c.crossDomain && !j["X-Requested-With"] && (j["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (k in j) f.setRequestHeader(k,
                        j[k])
                    } catch (n) {}
                    f.send(c.hasContent && c.data || null);
                    e = function (b, j) {
                        var m, k, n, u, p;
                        try {
                            if (e && (j || 4 === f.readyState)) if (e = g, o && (f.onreadystatechange = d.noop, yb && delete Ia[o]), j) 4 !== f.readyState && f.abort();
                            else {
                                m = f.status;
                                n = f.getAllResponseHeaders();
                                u = {};
                                (p = f.responseXML) && p.documentElement && (u.xml = p);
                                u.text = f.responseText;
                                try {
                                    k = f.statusText
                                } catch (t) {
                                    k = ""
                                }!m && c.isLocal && !c.crossDomain ? m = u.text ? 200 : 404 : 1223 === m && (m = 204)
                            }
                        } catch (y) {
                            j || a(-1, y)
                        }
                        u && a(m, k, u, n)
                    };
                    !c.async || 4 === f.readyState ? e() : (o = ++Kb, yb && (Ia || (Ia = {}, d(b).unload(yb)), Ia[o] = e), f.onreadystatechange = e)
                },
                abort: function () {
                    e && e(0, 1)
                }
            }
        }
    });
    var eb = {}, Fa, Ba, ib = /^(?:toggle|show|hide)$/,
        Ca = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        Ga, zb = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        fb;
    d.fn.extend({
        show: function (c, b, e) {
            var a;
            if (c || 0 === c) return this.animate(p("show", 3), c, b, e);
            b = 0;
            for (e = this.length; b < e; b++) c = this[b], c.style && (a = c.style.display, !d._data(c, "olddisplay") &&
                "none" === a && (a = c.style.display = ""), "" === a && "none" === d.css(c, "display") && d._data(c, "olddisplay", s(c.nodeName)));
            for (b = 0; b < e; b++) if (c = this[b], c.style && (a = c.style.display, "" === a || "none" === a)) c.style.display = d._data(c, "olddisplay") || "";
            return this
        },
        hide: function (c, b, e) {
            if (c || 0 === c) return this.animate(p("hide", 3), c, b, e);
            c = 0;
            for (b = this.length; c < b; c++) this[c].style && (e = d.css(this[c], "display"), "none" !== e && !d._data(this[c], "olddisplay") && d._data(this[c], "olddisplay", e));
            for (c = 0; c < b; c++) this[c].style && (this[c].style.display =
                "none");
            return this
        },
        _toggle: d.fn.toggle,
        toggle: function (c, b, e) {
            var a = "boolean" == typeof c;
            return d.isFunction(c) && d.isFunction(b) ? this._toggle.apply(this, arguments) : null == c || a ? this.each(function () {
                var b = a ? c : d(this).is(":hidden");
                d(this)[b ? "show" : "hide"]()
            }) : this.animate(p("toggle", 3), c, b, e), this
        },
        fadeTo: function (c, d, b, a) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: d
            }, c, b, a)
        },
        animate: function (c, b, e, a) {
            var j = d.speed(b, e, a);
            return d.isEmptyObject(c) ? this.each(j.complete, [!1]) : (c = d.extend({}, c), this[!1 === j.queue ? "each" : "queue"](function () {
                !1 === j.queue && d._mark(this);
                var a = d.extend({}, j),
                    b = 1 === this.nodeType,
                    e = b && d(this).is(":hidden"),
                    h, f, m, o, g, k, n, u;
                a.animatedProperties = {};
                for (m in c) {
                    h = d.camelCase(m);
                    m !== h && (c[h] = c[m], delete c[m]);
                    f = c[h];
                    d.isArray(f) ? (a.animatedProperties[h] = f[1], f = c[h] = f[0]) : a.animatedProperties[h] = a.specialEasing && a.specialEasing[h] || a.easing || "swing";
                    if ("hide" === f && e || "show" === f && !e) return a.complete.call(this);
                    b && ("height" === h || "width" === h) && (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === d.css(this, "display") && "none" === d.css(this, "float") && (d.support.inlineBlockNeedsLayout ? (o = s(this.nodeName), "inline" === o ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                null != a.overflow && (this.style.overflow = "hidden");
                for (m in c) b = new d.fx(this, a, m), f = c[m], ib.test(f) ? b["toggle" === f ? e ? "show" : "hide" : f]() : (g = Ca.exec(f), k = b.cur(), g ? (n = parseFloat(g[2]),
                u = g[3] || (d.cssNumber[m] ? "" : "px"), "px" !== u && (d.style(this, m, (n || 1) + u), k *= (n || 1) / b.cur(), d.style(this, m, k + u)), g[1] && (n = ("-=" === g[1] ? -1 : 1) * n + k), b.custom(k, n, u)) : b.custom(k, f, ""));
                return !0
            }))
        },
        stop: function (c, b) {
            return c && this.queue([]), this.each(function () {
                var c = d.timers,
                    a = c.length;
                for (b || d._unmark(!0, this); a--;) c[a].elem === this && (b && c[a](!0), c.splice(a, 1))
            }), b || this.dequeue(), this
        }
    });
    d.each({
        slideDown: p("show", 1),
        slideUp: p("hide", 1),
        slideToggle: p("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (c, b) {
        d.fn[c] = function (c, a, d) {
            return this.animate(b, c, a, d)
        }
    });
    d.extend({
        speed: function (c, b, e) {
            var a = c && "object" == typeof c ? d.extend({}, c) : {
                complete: e || !e && b || d.isFunction(c) && c,
                duration: c,
                easing: e && b || b && !d.isFunction(b) && b
            };
            return a.duration = d.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in d.fx.speeds ? d.fx.speeds[a.duration] : d.fx.speeds._default, a.old = a.complete, a.complete = function (c) {
                d.isFunction(a.old) && a.old.call(this);
                !1 !== a.queue ? d.dequeue(this) : !1 !== c && d._unmark(this)
            }, a
        },
        easing: {
            linear: function (c, d, b, a) {
                return b + a * c
            },
            swing: function (c, d, b, a) {
                return (-Math.cos(c * Math.PI) / 2 + 0.5) * a + b
            }
        },
        timers: [],
        fx: function (c, d, b) {
            this.options = d;
            this.elem = c;
            this.prop = b;
            d.orig = d.orig || {}
        }
    });
    d.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (d.fx.step[this.prop] || d.fx.step._default)(this)
        },
        cur: function () {
            if (null == this.elem[this.prop] || this.elem.style && null != this.elem.style[this.prop]) {
                var c, b = d.css(this.elem,
                this.prop);
                return isNaN(c = parseFloat(b)) ? !b || "auto" === b ? 0 : b : c
            }
            return this.elem[this.prop]
        },
        custom: function (c, b, e) {
            function a(a) {
                return j.step(a)
            }
            var j = this,
                f = d.fx;
            this.startTime = fb || (setTimeout(k, 0), fb = d.now());
            this.start = c;
            this.end = b;
            this.unit = e || this.unit || (d.cssNumber[this.prop] ? "" : "px");
            this.now = this.start;
            this.pos = this.state = 0;
            a.elem = this.elem;
            a() && d.timers.push(a) && !Ga && (Ga = setInterval(f.tick, f.interval))
        },
        show: function () {
            this.options.orig[this.prop] = d.style(this.elem, this.prop);
            this.options.show = !0;
            this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
            d(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = d.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function (c) {
            var b = fb || (setTimeout(k, 0), fb = d.now()),
                e = !0,
                a = this.elem,
                j = this.options,
                f, o;
            if (c || b >= j.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                j.animatedProperties[this.prop] = !0;
                for (f in j.animatedProperties)!0 !== j.animatedProperties[f] && (e = !1);
                if (e) {
                    null != j.overflow && !d.support.shrinkWrapBlocks && d.each(["", "X", "Y"], function (c, d) {
                        a.style["overflow" + d] = j.overflow[c]
                    });
                    j.hide && d(a).hide();
                    if (j.hide || j.show) for (var g in j.animatedProperties) d.style(a, g, j.orig[g]);
                    j.complete.call(a)
                }
                return !1
            }
            return Infinity == j.duration ? this.now = b : (o = b - this.startTime, this.state = o / j.duration, this.pos = d.easing[j.animatedProperties[this.prop]](this.state, o, 0, 1, j.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    };
    d.extend(d.fx, {
        tick: function () {
            for (var c = d.timers, b = 0; b < c.length; ++b) c[b]() || c.splice(b--, 1);
            c.length || d.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(Ga);
            Ga = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (c) {
                d.style(c.elem, "opacity", c.now)
            },
            _default: function (c) {
                c.elem.style && null != c.elem.style[c.prop] ? c.elem.style[c.prop] = ("width" === c.prop || "height" === c.prop ? Math.max(0, c.now) : c.now) + c.unit : c.elem[c.prop] = c.now
            }
        }
    });
    d.expr && d.expr.filters && (d.expr.filters.animated = function (c) {
        return d.grep(d.timers, function (d) {
            return c === d.elem
        }).length
    });
    var hb = /^t(?:able|d|h)$/i,
        jb = /^(?:body|html)$/i;
    "getBoundingClientRect" in v.documentElement ? d.fn.offset = function (c) {
        var b = this[0],
            e;
        if (c) return this.each(function (a) {
            d.offset.setOffset(this, c, a)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return d.offset.bodyOffset(b);
        try {
            e = b.getBoundingClientRect()
        } catch (a) {}
        var j = b.ownerDocument,
            f = j.documentElement;
        if (!e || !d.contains(f, b)) return e ? {
            top: e.top,
            left: e.left
        } : {
            top: 0,
            left: 0
        };
        b = j.body;
        j = q(j);
        return {
            top: e.top + (j.pageYOffset || d.support.boxModel && f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
            left: e.left + (j.pageXOffset || d.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
        }
    } : d.fn.offset = function (c) {
        var b = this[0];
        if (c) return this.each(function (a) {
            d.offset.setOffset(this, c, a)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return d.offset.bodyOffset(b);
        d.offset.initialize();
        var e, a = b.offsetParent,
            j = b.ownerDocument,
            f = j.documentElement,
            o = j.body;
        e = (j = j.defaultView) ? j.getComputedStyle(b,
        null) : b.currentStyle;
        for (var g = b.offsetTop, k = b.offsetLeft;
        (b = b.parentNode) && b !== o && b !== f && !(d.offset.supportsFixedPosition && "fixed" === e.position);) e = j ? j.getComputedStyle(b, null) : b.currentStyle, g -= b.scrollTop, k -= b.scrollLeft, b === a && (g += b.offsetTop, k += b.offsetLeft, d.offset.doesNotAddBorder && (!d.offset.doesAddBorderForTableAndCells || !hb.test(b.nodeName)) && (g += parseFloat(e.borderTopWidth) || 0, k += parseFloat(e.borderLeftWidth) || 0), a = b.offsetParent), d.offset.subtractsBorderForOverflowNotVisible && "visible" !== e.overflow && (g += parseFloat(e.borderTopWidth) || 0, k += parseFloat(e.borderLeftWidth) || 0);
        if ("relative" === e.position || "static" === e.position) g += o.offsetTop, k += o.offsetLeft;
        return d.offset.supportsFixedPosition && "fixed" === e.position && (g += Math.max(f.scrollTop, o.scrollTop), k += Math.max(f.scrollLeft, o.scrollLeft)), {
            top: g,
            left: k
        }
    };
    d.offset = {
        initialize: function () {
            var c = v.body,
                b = v.createElement("div"),
                e, a, j, f = parseFloat(d.css(c, "marginTop")) || 0;
            d.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            c.insertBefore(b, c.firstChild);
            e = b.firstChild;
            a = e.firstChild;
            j = e.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = 5 !== a.offsetTop;
            this.doesAddBorderForTableAndCells = 5 === j.offsetTop;
            a.style.position = "fixed";
            a.style.top = "20px";
            this.supportsFixedPosition = 20 === a.offsetTop || 15 === a.offsetTop;
            a.style.position = a.style.top = "";
            e.style.overflow = "hidden";
            e.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = -5 === a.offsetTop;
            this.doesNotIncludeMarginInBodyOffset = c.offsetTop !== f;
            c.removeChild(b);
            d.offset.initialize = d.noop
        },
        bodyOffset: function (c) {
            var b = c.offsetTop,
                e = c.offsetLeft;
            return d.offset.initialize(), d.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(d.css(c,
                "marginTop")) || 0, e += parseFloat(d.css(c, "marginLeft")) || 0), {
                top: b,
                left: e
            }
        },
        setOffset: function (c, b, e) {
            var a = d.css(c, "position");
            "static" === a && (c.style.position = "relative");
            var j = d(c),
                f = j.offset(),
                o = d.css(c, "top"),
                g = d.css(c, "left"),
                k = {}, n = {}, u, p;
            ("absolute" === a || "fixed" === a) && -1 < d.inArray("auto", [o, g]) ? (n = j.position(), u = n.top, p = n.left) : (u = parseFloat(o) || 0, p = parseFloat(g) || 0);
            d.isFunction(b) && (b = b.call(c, e, f));
            null != b.top && (k.top = b.top - f.top + u);
            null != b.left && (k.left = b.left - f.left + p);
            "using" in b ? b.using.call(c,
            k) : j.css(k)
        }
    };
    d.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var c = this[0],
                b = this.offsetParent(),
                e = this.offset(),
                a = jb.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return e.top -= parseFloat(d.css(c, "marginTop")) || 0, e.left -= parseFloat(d.css(c, "marginLeft")) || 0, a.top += parseFloat(d.css(b[0], "borderTopWidth")) || 0, a.left += parseFloat(d.css(b[0], "borderLeftWidth")) || 0, {
                top: e.top - a.top,
                left: e.left - a.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var c = this.offsetParent || v.body; c && !jb.test(c.nodeName) && "static" === d.css(c, "position");) c = c.offsetParent;
                return c
            })
        }
    });
    d.each(["Left", "Top"], function (c, b) {
        var e = "scroll" + b;
        d.fn[e] = function (a) {
            var b, h;
            return a === g ? (b = this[0], b ? (h = q(b), h ? "pageXOffset" in h ? h[c ? "pageYOffset" : "pageXOffset"] : d.support.boxModel && h.document.documentElement[e] || h.document.body[e] : b[e]) : null) : this.each(function () {
                (h = q(this)) ? h.scrollTo(c ? d(h).scrollLeft() : a, c ? a : d(h).scrollTop()) : this[e] = a
            })
        }
    });
    d.each(["Height", "Width"], function (c, b) {
        var e = b.toLowerCase();
        d.fn["inner" + b] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(d.css(a, e, "padding")) : null
        };
        d.fn["outer" + b] = function (a) {
            var c = this[0];
            return c && c.style ? parseFloat(d.css(c, e, a ? "margin" : "border")) : null
        };
        d.fn[e] = function (a) {
            var c = this[0];
            if (!c) return null == a ? null : this;
            if (d.isFunction(a)) return this.each(function (c) {
                var b = d(this);
                b[e](a.call(this, c, b[e]()))
            });
            if (d.isWindow(c)) {
                var j = c.document.documentElement["client" + b],
                    f = c.document.body;
                return "CSS1Compat" === c.document.compatMode && j || f && f["client" + b] || j
            }
            return 9 === c.nodeType ? Math.max(c.documentElement["client" + b], c.body["scroll" + b], c.documentElement["scroll" + b], c.body["offset" + b], c.documentElement["offset" + b]) : a === g ? (c = d.css(c, e), j = parseFloat(c), d.isNaN(j) ? c : j) : this.css(e, "string" == typeof a ? a : a + "px")
        }
    });
    b.jQuery = b.$ = d
})(window);
(function (b, g) {
    function q(b, e) {
        b = "" + b;
        for (e = e || 2; b.length < e;) b = "0" + b;
        return b
    }
    function s(b, g, k) {
        var n = b.getDate(),
            p = b.getDay(),
            t = b.getMonth(),
            b = b.getFullYear(),
            y = {
                d: n,
                dd: q(n),
                ddd: o[k].shortDays[p],
                dddd: o[k].days[p],
                m: t + 1,
                mm: q(t + 1),
                mmm: o[k].shortMonths[t],
                mmmm: o[k].months[t],
                yy: ("" + b).slice(2),
                yyyy: b
            }, g = g.replace(e, function (b) {
                return b in y ? y[b] : b.slice(1, b.length - 1)
            });
        return f.html(g).html()
    }
    function p(b) {
        return parseInt(b, 10)
    }
    function k(b, e) {
        return b.getFullYear() === e.getFullYear() && b.getMonth() == e.getMonth() && b.getDate() == e.getDate()
    }
    function n(b) {
        if (b !== g) {
            if (b.constructor == Date) return b;
            if ("string" == typeof b) {
                var e = b.split("-");
                if (3 == e.length) return new Date(p(e[0]), p(e[1]) - 1, p(e[2]));
                if (!/^-?\d+$/.test(b)) return;
                b = p(b)
            }
            e = new Date;
            return e.setDate(e.getDate() + b), e
        }
    }
    function B(e, f) {
        function x(f, o, g) {
            S = f;
            ea = f.getFullYear();
            ka = f.getMonth();
            d = f.getDate();
            g = g || b.Event("api");
            g.type = "beforeChange";
            fa.trigger(g, [f]);
            g.isDefaultPrevented() || (e.val(s(f, o.format, o.lang)), g.type = "change", fa.trigger(g),
            e.data("date", f), q.hide(g))
        }
        function B(d) {
            d.type = "onShow";
            fa.trigger(d);
            b(document).bind("keydown.d", function (d) {
                if (d.ctrlKey) return !0;
                var f = d.keyCode;
                if (8 == f) return e.val(""), q.hide(d);
                if (27 == f || 9 == f) return q.hide(d);
                if (0 <= b(t).index(f)) {
                    if (!oa) return q.show(d), d.preventDefault();
                    var o = b("#" + A.weeks + " a"),
                        g = b("." + A.focus),
                        k = o.index(g);
                    g.removeClass(A.focus);
                    if (74 == f || 40 == f) k += 7;
                    else if (75 == f || 38 == f) k -= 7;
                    else if (76 == f || 39 == f) k += 1;
                    else if (72 == f || 37 == f) k -= 1;
                    return 41 < k ? (q.addMonth(), g = b("#" + A.weeks +
                        " a:eq(" + (k - 42) + ")")) : 0 > k ? (q.addMonth(-1), g = b("#" + A.weeks + " a:eq(" + (k + 42) + ")")) : g = o.eq(k), g.addClass(A.focus), d.preventDefault()
                }
                return 34 == f ? q.addMonth() : 33 == f ? q.addMonth(-1) : 36 == f ? q.today() : (13 == f && (b(d.target).is("select") || b("." + A.focus).click()), 0 <= b([16, 17, 18, 9]).index(f))
            });
            b(document).bind("click.d", function (d) {
                var f = d.target;
                !b(f).parents("#" + A.root).length && f != e[0] && (!ia || f != ia[0]) && q.hide(d)
            })
        }
        var q = this,
            D = new Date,
            F = D.getFullYear(),
            A = f.css,
            V = o[f.lang],
            I = b("#" + A.root),
            Q = I.find("#" + A.title),
            ia, W, v, ea, ka, d, S = e.attr("data-value") || f.value || e.val(),
            Y = e.attr("min") || f.min,
            ca = e.attr("max") || f.max,
            oa, la;
        0 === Y && (Y = "0");
        S = n(S) || D;
        Y = n(Y || new Date(F + f.yearRange[0], 1, 1));
        ca = n(ca || new Date(F + f.yearRange[1] + 1, 1, -1));
        if (!V) throw "Dateinput: invalid language: " + f.lang;
        "date" == e.attr("type") && (la = e.clone(), F = la.wrap("<div/>").parent().html(), F = b(F.replace(/type/i, "type=text data-orig-type")), f.value && F.val(f.value), e.replaceWith(F), e = F);
        e.addClass(A.input);
        var fa = e.add(q);
        if (!I.length) {
            I = b("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({
                position: "absolute"
            }).attr("id",
            A.root);
            I.children().eq(0).attr("id", A.head).end().eq(1).attr("id", A.body).children().eq(0).attr("id", A.days).end().eq(1).attr("id", A.weeks).end().end().end().find("a").eq(0).attr("id", A.prev).end().eq(1).attr("id", A.next);
            Q = I.find("#" + A.head).find("div").attr("id", A.title);
            if (f.selectors) {
                var sa = b("<select/>").attr("id", A.month),
                    C = b("<select/>").attr("id", A.year);
                Q.html(sa.add(C))
            }
            for (var F = I.find("#" + A.days), U = 0; 7 > U; U++) F.append(b("<span/>").text(V.shortDays[(U + f.firstDay) % 7]));
            b("body").append(I)
        }
        f.trigger && (ia = b("<a/>").attr("href", "#").addClass(A.trigger).click(function (b) {
            return f.toggle ? q.toggle() : q.show(), b.preventDefault()
        }).insertAfter(e));
        var T = I.find("#" + A.weeks),
            C = I.find("#" + A.year),
            sa = I.find("#" + A.month);
        b.extend(q, {
            show: function (d) {
                if (!e.attr("readonly") && !e.attr("disabled") && !oa) {
                    d = d || b.Event();
                    d.type = "onBeforeShow";
                    fa.trigger(d);
                    if (!d.isDefaultPrevented()) {
                        b.each(y, function () {
                            this.hide()
                        });
                        oa = true;
                        sa.unbind("change").change(function () {
                            q.setValue(C.val(), b(this).val())
                        });
                        C.unbind("change").change(function () {
                            q.setValue(b(this).val(),
                            sa.val())
                        });
                        W = I.find("#" + A.prev).unbind("click").click(function () {
                            return W.hasClass(A.disabled) || q.addMonth(-1), false
                        });
                        v = I.find("#" + A.next).unbind("click").click(function () {
                            return v.hasClass(A.disabled) || q.addMonth(), false
                        });
                        q.setValue(S);
                        var o = e.offset();
                        return /iPad/i.test(navigator.userAgent) && (o.top = o.top - b(window).scrollTop()), I.css({
                            top: o.top + e.outerHeight({
                                margins: true
                            }) + f.offset[0],
                            left: o.left + f.offset[1]
                        }), f.speed ? I.show(f.speed, function () {
                            B(d)
                        }) : (I.show(), B(d)), q
                    }
                }
            },
            setValue: function (e,
            j, o) {
                var t = p(j) >= -1 ? new Date(p(e), p(j), p(o == g || isNaN(o) ? 1 : o)) : e || S;
                t < Y ? t = Y : t > ca && (t = ca);
                typeof e == "string" && (t = n(e));
                e = t.getFullYear();
                j = t.getMonth();
                o = t.getDate();
                j == -1 ? (j = 11, e--) : j == 12 && (j = 0, e++);
                if (!oa) return x(t, f), q;
                ka = j;
                ea = e;
                d = o;
                var o = (new Date(e, j, 1 - f.firstDay)).getDay(),
                    y = (new Date(e, j + 1, 0)).getDate(),
                    s = (new Date(e, j - 1 + 1, 0)).getDate(),
                    B;
                if (f.selectors) {
                    sa.empty();
                    b.each(V.months, function (d, f) {
                        Y < new Date(e, d + 1, 1) && ca > new Date(e, d, 0) && sa.append(b("<option/>").html(f).attr("value", d))
                    });
                    C.empty();
                    for (var F = D.getFullYear(), K = F + f.yearRange[0]; K < F + f.yearRange[1]; K++) Y < new Date(K + 1, 0, 1) && ca > new Date(K, 0, 0) && C.append(b("<option/>").text(K));
                    sa.val(j);
                    C.val(e)
                } else Q.html(V.months[j] + " " + e);
                T.empty();
                W.add(v).removeClass(A.disabled);
                for (var F = o ? 0 : -7, L; F < (o ? 42 : 35); F++) {
                    K = b("<a/>");
                    F % 7 === 0 && (B = b("<div/>").addClass(A.week), T.append(B));
                    F < o ? (K.addClass(A.off), L = s - o + F + 1, t = new Date(e, j - 1, L)) : F >= o + y ? (K.addClass(A.off), L = F - y - o + 1, t = new Date(e, j + 1, L)) : (L = F - o + 1, t = new Date(e, j, L), k(S, t) ? K.attr("id", A.current).addClass(A.focus) : k(D, t) && K.attr("id", A.today));
                    Y && t < Y && K.add(W).addClass(A.disabled);
                    ca && t > ca && K.add(v).addClass(A.disabled);
                    K.attr("href", "#" + L).text(L).data("date", t);
                    B.append(K)
                }
                return T.find("a").click(function (d) {
                    var e = b(this);
                    return e.hasClass(A.disabled) || (b("#" + A.current).removeAttr("id"), e.attr("id", A.current), x(e.data("date"), f, d)), false
                }), A.sunday && T.find(A.week).each(function () {
                    var d = f.firstDay ? 7 - f.firstDay : 0;
                    b(this).children().slice(d, d + 1).addClass(A.sunday)
                }), q
            },
            setMin: function (b, d) {
                return Y = n(b), d && S < Y && q.setValue(Y), q
            },
            setMax: function (b, d) {
                return ca = n(b), d && S > ca && q.setValue(ca), q
            },
            today: function () {
                return q.setValue(D)
            },
            addDay: function (b) {
                return this.setValue(ea, ka, d + (b || 1))
            },
            addMonth: function (b) {
                var b = ka + (b || 1),
                    e = (new Date(ea, b + 1, 0)).getDate();
                return this.setValue(ea, b, d <= e ? d : e)
            },
            addYear: function (b) {
                return this.setValue(ea + (b || 1), ka, d)
            },
            destroy: function () {
                e.add(document).unbind("click.d").unbind("keydown.d");
                I.add(ia).remove();
                e.removeData("dateinput").removeClass(A.input);
                la && e.replaceWith(la)
            },
            hide: function (d) {
                if (oa) {
                    d = b.Event();
                    d.type = "onHide";
                    fa.trigger(d);
                    b(document).unbind("click.d").unbind("keydown.d");
                    if (d.isDefaultPrevented()) return;
                    I.hide();
                    oa = false
                }
                return q
            },
            toggle: function () {
                return q.isOpen() ? q.hide() : q.show()
            },
            getConf: function () {
                return f
            },
            getInput: function () {
                return e
            },
            getCalendar: function () {
                return I
            },
            getValue: function (b) {
                return b ? s(S, b, f.lang) : S
            },
            isOpen: function () {
                return oa
            }
        });
        b.each(["onBeforeShow", "onShow", "change", "onHide"], function (d, e) {
            b.isFunction(f[e]) && b(q).bind(e, f[e]);
            q[e] = function (d) {
                return d && b(q).bind(e, d), q
            }
        });
        f.editable || e.bind("focus.d click.d", q.show).keydown(function (d) {
            var e = d.keyCode;
            return !oa && b(t).index(e) >= 0 ? (q.show(d), d.preventDefault()) : d.shiftKey || d.ctrlKey || d.altKey || e == 9 ? true : d.preventDefault()
        });
        n(e.val()) && x(S, f)
    }
    b.tools = b.tools || {
        version: "1.2.6"
    };
    var y = [],
        x, t = [75, 76, 38, 39, 74, 72, 40, 37],
        o = {};
    x = b.tools.dateinput = {
        conf: {
            format: "mm/dd/yy",
            selectors: !1,
            yearRange: [-5, 5],
            lang: "en",
            offset: [0, 0],
            speed: 0,
            firstDay: 0,
            min: g,
            max: g,
            trigger: 0,
            toggle: 0,
            editable: 0,
            css: {
                prefix: "cal",
                input: "date",
                root: 0,
                head: 0,
                title: 0,
                prev: 0,
                next: 0,
                month: 0,
                year: 0,
                days: 0,
                body: 0,
                weeks: 0,
                today: 0,
                current: 0,
                week: 0,
                off: 0,
                sunday: 0,
                focus: 0,
                disabled: 0,
                trigger: 0
            }
        },
        localize: function (e, f) {
            b.each(f, function (b, e) {
                f[b] = e.split(",")
            });
            o[e] = f
        }
    };
    x.localize("en", {
        months: "January,February,March,April,May,June,July,August,September,October,November,December",
        shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
        days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
        shortDays: "Sun,Mon,Tue,Wed,Thu,Fri,Sat"
    });
    var e = /d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,
        f = b("<a/>");
    b.expr[":"].date = function (e) {
        var f = e.getAttribute("type");
        return f && "date" == f || !! b(e).data("dateinput")
    };
    b.fn.dateinput = function (e) {
        if (this.data("dateinput")) return this;
        e = b.extend(!0, {}, x.conf, e);
        b.each(e.css, function (b, f) {
            !f && "prefix" != b && (e.css[b] = (e.css.prefix || "") + (f || b))
        });
        var f;
        return this.each(function () {
            var o = new B(b(this), e);
            y.push(o);
            o = o.getInput().data("dateinput", o);
            f = f ? f.add(o) : o
        }), f ? f : this
    }
})(jQuery);
(function (b) {
    function g(g, k) {
        var n = this,
            B = g.add(n),
            y = b(window),
            x, t, o, e = b.tools.expose && (k.mask || k.expose),
            f = Math.random().toString().slice(10);
        e && ("string" == typeof e && (e = {
            color: e
        }), e.closeOnClick = e.closeOnEsc = !1);
        var j = k.target || g.attr("rel");
        t = j ? b(j) : g;
        if (!t.length) throw "Could not find Overlay: " + j;
        g && -1 == g.index(t) && g.click(function (b) {
            return n.load(b), b.preventDefault()
        });
        b.extend(n, {
            load: function (j) {
                if (n.isOpened()) return n;
                var g = s[k.effect];
                if (!g) throw 'Overlay: cannot find effect : "' + k.effect +
                    '"';
                k.oneInstance && b.each(q, function () {
                    this.close(j)
                });
                j = j || b.Event();
                j.type = "onBeforeLoad";
                B.trigger(j);
                if (j.isDefaultPrevented()) return n;
                o = !0;
                e && b(t).expose(e);
                var p = k.top,
                    x = k.left,
                    D = t.outerWidth({
                        margin: !0
                    }),
                    F = t.outerHeight({
                        margin: !0
                    });
                return "string" == typeof p && (p = "center" == p ? Math.max((y.height() - F) / 2, 0) : parseInt(p, 10) / 100 * y.height()), "center" == x && (x = Math.max((y.width() - D) / 2, 0)), g[0].call(n, {
                    top: p,
                    left: x
                }, function () {
                    o && (j.type = "onLoad", B.trigger(j))
                }), e && k.closeOnClick && b.mask.getMask().one("click",
                n.close), k.closeOnClick && b(document).bind("click." + f, function (e) {
                    b(e.target).parents(t).length || n.close(e)
                }), k.closeOnEsc && b(document).bind("keydown." + f, function (b) {
                    27 == b.keyCode && n.close(b)
                }), n
            },
            close: function (j) {
                if (!n.isOpened()) return n;
                j = j || b.Event();
                j.type = "onBeforeClose";
                B.trigger(j);
                return j.isDefaultPrevented() ? void 0 : (o = !1, s[k.effect][1].call(n, function () {
                    j.type = "onClose";
                    B.trigger(j)
                }), b(document).unbind("click." + f).unbind("keydown." + f), e && b.mask.close(), n)
            },
            getOverlay: function () {
                return t
            },
            getTrigger: function () {
                return g
            },
            getClosers: function () {
                return x
            },
            isOpened: function () {
                return o
            },
            getConf: function () {
                return k
            }
        });
        b.each(["onBeforeLoad", "onStart", "onLoad", "onBeforeClose", "onClose"], function (e, f) {
            b.isFunction(k[f]) && b(n).bind(f, k[f]);
            n[f] = function (e) {
                return e && b(n).bind(f, e), n
            }
        });
        x = t.find(k.close || ".close");
        !x.length && !k.close && (x = b('<a class="close"></a>'), t.prepend(x));
        x.click(function (b) {
            n.close(b)
        });
        k.load && n.load()
    }
    b.tools = b.tools || {
        version: "1.2.6"
    };
    b.tools.overlay = {
        addEffect: function (b,
        g, n) {
            s[b] = [g, n]
        },
        conf: {
            close: null,
            closeOnClick: !0,
            closeOnEsc: !0,
            closeSpeed: "fast",
            effect: "default",
            fixed: !b.browser.msie || 6 < b.browser.version,
            left: "center",
            load: !1,
            mask: null,
            oneInstance: !0,
            speed: "normal",
            target: null,
            top: "10%"
        }
    };
    var q = [],
        s = {};
    b.tools.overlay.addEffect("default", function (g, k) {
        var n = this.getConf(),
            s = b(window);
        n.fixed || (g.top += s.scrollTop(), g.left += s.scrollLeft());
        g.position = n.fixed ? "fixed" : "absolute";
        this.getOverlay().css(g).fadeIn(n.speed, k)
    }, function (b) {
        this.getOverlay().fadeOut(this.getConf().closeSpeed,
        b)
    });
    b.fn.overlay = function (p) {
        var k = this.data("overlay");
        return k ? k : (b.isFunction(p) && (p = {
            onBeforeLoad: p
        }), p = b.extend(!0, {}, b.tools.overlay.conf, p), this.each(function () {
            k = new g(b(this), p);
            q.push(k);
            b(this).data("overlay", k)
        }), p.api ? k : this)
    }
})(jQuery);
(function (b) {
    function g(b) {
        var g = b.offset();
        return {
            top: g.top + b.height() / 2,
            left: g.left + b.width() / 2
        }
    }
    var q = b.tools.overlay,
        s = b(window);
    b.extend(q.conf, {
        start: {
            top: null,
            left: null
        },
        fadeInSpeed: "fast",
        zIndex: 9999
    });
    q.addEffect("apple", function (p, k) {
        var n = this.getOverlay(),
            q = this.getConf(),
            y = this.getTrigger(),
            x = this,
            t = n.outerWidth({
                margin: !0
            }),
            o = n.data("img"),
            e = q.fixed ? "fixed" : "absolute";
        if (!o) {
            o = n.css("backgroundImage");
            if (!o) throw "background-image CSS property not set for overlay";
            o = o.slice(o.indexOf("(") + 1, o.indexOf(")")).replace(/\"/g, "");
            n.css("backgroundImage", "none");
            o = b('<img src="' + o + '"/>');
            o.css({
                border: 0,
                display: "none"
            }).width(t);
            b("body").append(o);
            n.data("img", o)
        }
        var f = q.start.top || Math.round(s.height() / 2),
            j = q.start.left || Math.round(s.width() / 2);
        y && (y = g(y), f = y.top, j = y.left);
        q.fixed ? (f -= s.scrollTop(), j -= s.scrollLeft()) : (p.top += s.scrollTop(), p.left += s.scrollLeft());
        o.css({
            position: "absolute",
            top: f,
            left: j,
            width: 0,
            zIndex: q.zIndex
        }).show();
        p.position = e;
        n.css(p);
        o.animate({
            top: n.css("top"),
            left: n.css("left"),
            width: t
        }, q.speed, function () {
            n.css("zIndex", q.zIndex + 1).fadeIn(q.fadeInSpeed, function () {
                x.isOpened() && !b(this).index(n) ? k.call() : n.hide()
            })
        }).css("position", e)
    }, function (p) {
        var k = this.getOverlay().hide(),
            n = this.getConf(),
            q = this.getTrigger(),
            k = k.data("img"),
            y = {
                top: n.start.top,
                left: n.start.left,
                width: 0
            };
        q && b.extend(y, g(q));
        n.fixed && k.css({
            position: "absolute"
        }).animate({
            top: "+=" + s.scrollTop(),
            left: "+=" + s.scrollLeft()
        }, 0);
        k.animate(y, n.closeSpeed, p)
    })
})(jQuery);
(function (b) {
    function g(b, g) {
        var k = Math.pow(10, g);
        return Math.round(b * k) / k
    }
    function q(b, g) {
        var k = parseInt(b.css(g), 10);
        return k ? k : (k = b[0].currentStyle) && k.width && parseInt(k.width, 10)
    }
    function s(b) {
        return (b = b.data("events")) && b.onSlide
    }
    function p(k, n) {
        function p(b, d, e, j) {
            void 0 === e ? e = d / D * V : j && (e -= n.min);
            I && (e = Math.round(e / I) * I);
            if (void 0 === d || I) d = e * D / V;
            if (isNaN(e)) return f;
            d = Math.max(0, Math.min(d, D));
            e = d / D * V;
            if (j || !B) e += n.min;
            B && (j ? d = D - d : e = n.max - e);
            var e = g(e, Q),
                o = "click" == b.type;
            if (ea && void 0 !== L && !o && (b.type = "onSlide", v.trigger(b, [e, d]), b.isDefaultPrevented())) return f;
            j = o ? n.speed : 0;
            o = o ? function () {
                b.type = "change";
                v.trigger(b, [e])
            } : null;
            return B ? (F.animate({
                top: d
            }, j, o), n.progress && A.animate({
                height: D - d + F.height() / 2
            }, j)) : (F.animate({
                left: d
            }, j, o), n.progress && A.animate({
                width: d + F.width() / 2
            }, j)), L = e, k.val(e), f
        }
        function o() {
            (B = n.vertical || q(u, "height") > q(u, "width")) ? (D = q(u, "height") - q(F, "height"), H = u.offset().top + D) : (D = q(u, "width") - q(F, "width"), H = u.offset().left)
        }
        function e() {
            o();
            f.setValue(void 0 !== n.value ? n.value : n.min)
        }
        var f = this,
            j = n.css,
            u = b("<div><div/><a href='#'/></div>").data("rangeinput", f),
            B, L, H, D;
        k.before(u);
        var F = u.addClass(j.slider).find("a").addClass(j.handle),
            A = u.find("div").addClass(j.progress);
        b.each(["min", "max", "step", "value"], function (b, d) {
            var e = k.attr(d);
            parseFloat(e) && (n[d] = parseFloat(e, 10))
        });
        var V = n.max - n.min,
            I = "any" == n.step ? 0 : n.step,
            Q = n.precision;
        if (void 0 === Q) try {
            Q = I.toString().split(".")[1].length
        } catch (ia) {
            Q = 0
        }
        if ("range" == k.attr("type")) {
            var W = k.clone().wrap("<div/>").parent().html(),
                W = b(W.replace(/type/i, "type=text data-orig-type"));
            W.val(n.value);
            k.replaceWith(W);
            k = W
        }
        k.addClass(j.input);
        var v = b(f).add(k),
            ea = !0;
        b.extend(f, {
            getValue: function () {
                return L
            },
            setValue: function (e, d) {
                return o(), p(d || b.Event("api"), void 0, e, !0)
            },
            getConf: function () {
                return n
            },
            getProgress: function () {
                return A
            },
            getHandle: function () {
                return F
            },
            getInput: function () {
                return k
            },
            step: function (e, d) {
                d = d || b.Event();
                f.setValue(L + ("any" == n.step ? 1 : n.step) * (e || 1), d)
            },
            stepUp: function (b) {
                return f.step(b || 1)
            },
            stepDown: function (b) {
                return f.step(-b || -1)
            }
        });
        b.each(["onSlide", "change"], function (e, d) {
            b.isFunction(n[d]) && b(f).bind(d, n[d]);
            f[d] = function (e) {
                return e && b(f).bind(d, e), f
            }
        });
        F.drag({
            drag: !1
        }).bind("dragStart", function () {
            o();
            ea = s(b(f)) || s(k)
        }).bind("drag", function (b, d, e) {
            if (k.is(":disabled")) return !1;
            p(b, B ? d : e)
        }).bind("dragEnd", function (b) {
            b.isDefaultPrevented() || (b.type = "change", v.trigger(b, [L]))
        }).click(function (b) {
            return b.preventDefault()
        });
        u.click(function (b) {
            if (k.is(":disabled") || b.target == F[0]) return b.preventDefault();
            o();
            var d = B ? F.height() / 2 : F.width() / 2;
            p(b, B ? D - H - d + b.pageY : b.pageX - H - d)
        });
        n.keyboard && k.keydown(function (e) {
            if (!k.attr("readonly")) {
                var d = e.keyCode,
                    j = -1 != b([75, 76, 38, 33, 39]).index(d),
                    o = -1 != b([74, 72, 40, 34, 37]).index(d);
                if ((j || o) && !e.shiftKey && !e.altKey && !e.ctrlKey) return j ? f.step(33 == d ? 10 : 1, e) : o && f.step(34 == d ? -10 : -1, e), e.preventDefault()
            }
        });
        k.blur(function (e) {
            var d = b(this).val();
            d !== L && f.setValue(d, e)
        });
        b.extend(k[0], {
            stepUp: f.stepUp,
            stepDown: f.stepDown
        });
        e();
        D || b(window).load(e)
    }
    b.tools = b.tools || {
        version: "1.2.6"
    };
    var k;
    k = b.tools.rangeinput = {
        conf: {
            min: 0,
            max: 100,
            step: "any",
            steps: 0,
            value: 0,
            precision: void 0,
            vertical: 0,
            keyboard: !0,
            progress: !1,
            speed: 100,
            css: {
                input: "range",
                slider: "slider",
                progress: "progress",
                handle: "handle"
            }
        }
    };
    var n, B;
    b.fn.drag = function (g) {
        return document.ondragstart = function () {
            return !1
        }, g = b.extend({
            x: !0,
            y: !0,
            drag: !0
        }, g), n = n || b(document).bind("mousedown mouseup", function (k) {
            var p = b(k.target);
            if ("mousedown" == k.type && p.data("drag")) {
                var o = p.position(),
                    e = k.pageX - o.left,
                    f = k.pageY - o.top,
                    j = !0;
                n.bind("mousemove.drag",

                function (b) {
                    var o = b.pageX - e,
                        b = b.pageY - f,
                        k = {};
                    g.x && (k.left = o);
                    g.y && (k.top = b);
                    j && (p.trigger("dragStart"), j = !1);
                    g.drag && p.css(k);
                    p.trigger("drag", [b, o]);
                    B = p
                });
                k.preventDefault()
            } else try {
                B && B.trigger("dragEnd")
            } finally {
                n.unbind("mousemove.drag"), B = null
            }
        }), this.data("drag", !0)
    };
    b.expr[":"].range = function (g) {
        var k = g.getAttribute("type");
        return k && "range" == k || !! b(g).filter("input").data("rangeinput")
    };
    b.fn.rangeinput = function (g) {
        if (this.data("rangeinput")) return this;
        var g = b.extend(!0, {}, k.conf, g),
            n;
        return this.each(function () {
            var k = new p(b(this), b.extend(!0, {}, g)),
                k = k.getInput().data("rangeinput", k);
            n = n ? n.add(k) : k
        }), n ? n : this
    }
})(jQuery);
(function (b) {
    function g(g, k) {
        var n = b(k);
        return 2 > n.length ? n : g.parent().find(k)
    }
    function q(p, k) {
        var n = this,
            q = p.add(n),
            y = p.children(),
            x = 0,
            t = k.vertical;
        s || (s = n);
        1 < y.length && (y = b(k.items, p));
        1 < k.size && (k.circular = !1);
        b.extend(n, {
            getConf: function () {
                return k
            },
            getIndex: function () {
                return x
            },
            getSize: function () {
                return n.getItems().size()
            },
            getNaviButtons: function () {
                return j.add(u)
            },
            getRoot: function () {
                return p
            },
            getItemWrap: function () {
                return y
            },
            getItems: function () {
                return y.find(k.item).not("." + k.clonedClass)
            },
            move: function (b, e) {
                return n.seekTo(x + b, e)
            },
            next: function (b) {
                return n.move(k.size, b)
            },
            prev: function (b) {
                return n.move(-k.size, b)
            },
            begin: function (b) {
                return n.seekTo(0, b)
            },
            end: function (b) {
                return n.seekTo(n.getSize() - 1, b)
            },
            focus: function () {
                return s = n, n
            },
            addItem: function (e) {
                return e = b(e), k.circular ? (y.children().last().before(e), y.children().first().replaceWith(e.clone().addClass(k.clonedClass))) : (y.append(e), u.removeClass("disabled")), q.trigger("onAddItem", [e]), n
            },
            seekTo: function (e, f, j) {
                e.jquery || (e *= 1);
                if (k.circular && 0 === e && -1 == x && 0 !== f || !k.circular && 0 > e || e > n.getSize() || -1 > e) return n;
                var o = e;
                e.jquery ? e = n.getItems().index(e) : o = n.getItems().eq(e);
                var g = b.Event("onBeforeSeek");
                if (!j && (q.trigger(g, [e, f]), g.isDefaultPrevented() || !o.length)) return n;
                o = t ? {
                    top: -o.position().top
                } : {
                    left: -o.position().left
                };
                return x = e, s = n, void 0 === f && (f = k.speed), y.animate(o, f, k.easing, j || function () {
                    q.trigger("onSeek", [e])
                }), n
            }
        });
        b.each(["onBeforeSeek", "onSeek", "onAddItem"], function (e, f) {
            b.isFunction(k[f]) && b(n).bind(f,
            k[f]);
            n[f] = function (e) {
                return e && b(n).bind(f, e), n
            }
        });
        if (k.circular) {
            var o = n.getItems().slice(-1).clone().prependTo(y),
                e = n.getItems().eq(1).clone().appendTo(y);
            o.add(e).addClass(k.clonedClass);
            n.onBeforeSeek(function (b, f, j) {
                if (!b.isDefaultPrevented()) {
                    if (-1 == f) return n.seekTo(o, j, function () {
                        n.end(0)
                    }), b.preventDefault();
                    f == n.getSize() && n.seekTo(e, j, function () {
                        n.begin(0)
                    })
                }
            });
            var f = p.parents().add(p).filter(function () {
                if ("none" === b(this).css("display")) return !0
            });
            f.length ? (f.show(), n.seekTo(0, 0, function () {}),
            f.hide()) : n.seekTo(0, 0, function () {})
        }
        var j = g(p, k.prev).click(function (b) {
            b.stopPropagation();
            n.prev()
        }),
            u = g(p, k.next).click(function (b) {
                b.stopPropagation();
                n.next()
            });
        k.circular || (n.onBeforeSeek(function (b, e) {
            setTimeout(function () {
                b.isDefaultPrevented() || (j.toggleClass(k.disabledClass, 0 >= e), u.toggleClass(k.disabledClass, e >= n.getSize() - 1))
            }, 1)
        }), k.initialIndex || j.addClass(k.disabledClass));
        2 > n.getSize() && j.add(u).addClass(k.disabledClass);
        k.mousewheel && b.fn.mousewheel && p.mousewheel(function (b, e) {
            if (k.mousewheel) return n.move(0 > e ? 1 : -1, k.wheelSpeed || 50), !1
        });
        if (k.touch) {
            var P, L;
            y[0].ontouchstart = function (b) {
                b = b.touches[0];
                P = b.clientX;
                L = b.clientY
            };
            y[0].ontouchmove = function (b) {
                if (1 == b.touches.length && !y.is(":animated")) {
                    var e = b.touches[0],
                        f = P - e.clientX,
                        e = L - e.clientY;
                    n[t && 0 < e || !t && 0 < f ? "next" : "prev"]();
                    b.preventDefault()
                }
            }
        }
        k.keyboard && b(document).bind("keydown.scrollable", function (e) {
            if (!(!k.keyboard || e.altKey || e.ctrlKey || e.metaKey || b(e.target).is(":input") || "static" != k.keyboard && s != n)) {
                var f = e.keyCode;
                if (t && !(38 != f && 40 != f)) return n.move(38 == f ? -1 : 1), e.preventDefault();
                if (!t && (37 == f || 39 == f)) return n.move(37 == f ? -1 : 1), e.preventDefault()
            }
        });
        k.initialIndex && n.seekTo(k.initialIndex, 0, function () {})
    }
    b.tools = b.tools || {
        version: "1.2.6"
    };
    b.tools.scrollable = {
        conf: {
            activeClass: "active",
            circular: !1,
            clonedClass: "cloned",
            disabledClass: "disabled",
            easing: "swing",
            initialIndex: 0,
            item: "> *",
            items: ".items",
            keyboard: !0,
            mousewheel: !1,
            next: ".next",
            prev: ".prev",
            size: 1,
            speed: 400,
            vertical: !1,
            touch: !0,
            wheelSpeed: 0
        }
    };
    var s;
    b.fn.scrollable = function (g) {
        var k = this.data("scrollable");
        return k ? k : (g = b.extend({}, b.tools.scrollable.conf, g), this.each(function () {
            k = new q(b(this), g);
            b(this).data("scrollable", k)
        }), g.api ? k : this)
    }
})(jQuery);
(function (b) {
    var g = b.tools.scrollable;
    g.autoscroll = {
        conf: {
            autoplay: !0,
            interval: 3E3,
            autopause: !0
        }
    };
    b.fn.autoscroll = function (q) {
        "number" == typeof q && (q = {
            interval: q
        });
        var s = b.extend({}, g.autoscroll.conf, q),
            p;
        return this.each(function () {
            function g() {
                y = setTimeout(function () {
                    n.next()
                }, s.interval)
            }
            var n = b(this).data("scrollable"),
                q = n.getRoot(),
                y, x = !1;
            n && (p = n);
            n.play = function () {
                y || (x = !1, q.bind("onSeek", g), g())
            };
            n.pause = function () {
                y = clearTimeout(y);
                q.unbind("onSeek", g)
            };
            n.resume = function () {
                x || n.play()
            };
            n.stop = function () {
                x = !0;
                n.pause()
            };
            s.autopause && q.add(n.getNaviButtons()).hover(n.pause, n.resume);
            s.autoplay && n.play()
        }), s.api ? p : this
    }
})(jQuery);
(function (b) {
    function g(g, p) {
        var k = b(p);
        return 2 > k.length ? k : g.parent().find(p)
    }
    var q = b.tools.scrollable;
    q.navigator = {
        conf: {
            navi: ".navi",
            naviItem: null,
            activeClass: "active",
            indexed: !1,
            idPrefix: null,
            history: !1
        }
    };
    b.fn.navigator = function (s) {
        "string" == typeof s && (s = {
            navi: s
        });
        var s = b.extend({}, q.navigator.conf, s),
            p;
        return this.each(function () {
            function k() {
                return y.find(s.naviItem || "> *")
            }
            function n(e) {
                var j = b("<" + (s.naviItem || "a") + "/>").click(function (j) {
                    b(this);
                    q.seekTo(e);
                    j.preventDefault();
                    o && history.pushState({
                        i: e
                    })
                });
                return 0 === e && j.addClass(t), s.indexed && j.text(e + 1), s.idPrefix && j.attr("id", s.idPrefix + e), j.appendTo(y)
            }
            var q = b(this).data("scrollable"),
                y = s.navi.jquery ? s.navi : g(q.getRoot(), s.navi),
                x = q.getNaviButtons(),
                t = s.activeClass,
                o = s.history && !! history.pushState,
                e = q.getConf().size;
            q && (p = q);
            q.getNaviButtons = function () {
                return x.add(y)
            };
            o && (history.pushState({
                i: 0
            }), b(window).bind("popstate", function (b) {
                (b = b.originalEvent.state) && q.seekTo(b.i)
            }));
            k().length ? k().each(function (e) {
                b(this).click(function (j) {
                    b(this);
                    q.seekTo(e);
                    j.preventDefault();
                    o && history.pushState({
                        i: e
                    })
                })
            }) : b.each(q.getItems(), function (b) {
                0 == b % e && n(b)
            });
            q.onBeforeSeek(function (b, j) {
                setTimeout(function () {
                    if (!b.isDefaultPrevented()) {
                        var o = j / e;
                        k().eq(o).length && k().removeClass(t).eq(o).addClass(t)
                    }
                }, 1)
            });
            q.onAddItem(function (b, j) {
                var o = q.getItems().index(j);
                0 == o % e && n(o)
            })
        }), s.api ? p : this
    }
})(jQuery);
(function (b) {
    function g(g, n, p) {
        var s = this,
            x = g.add(this),
            t = g.find(p.tabs),
            o = n.jquery ? n : g.children(n),
            e;
        t.length || (t = g.children());
        o.length || (o = g.parent().find(n));
        o.length || (o = b(n));
        b.extend(this, {
            click: function (f, j) {
                var o = t.eq(f);
                "string" == typeof f && f.replace("#", "") && (o = t.filter("[href*=" + f.replace("#", "") + "]"), f = Math.max(t.index(o), 0));
                if (p.rotate) {
                    var g = t.length - 1;
                    if (0 > f) return s.click(g, j);
                    if (f > g) return s.click(0, j)
                }
                if (!o.length) {
                    if (0 <= e) return s;
                    f = p.initialIndex;
                    o = t.eq(f)
                }
                if (f === e) return s;
                j = j || b.Event();
                j.type = "onBeforeClick";
                x.trigger(j, [f]);
                return j.isDefaultPrevented() ? void 0 : (q[p.effect].call(s, f, function () {
                    e = f;
                    j.type = "onClick";
                    x.trigger(j, [f])
                }), t.removeClass(p.current), o.addClass(p.current), s)
            },
            getConf: function () {
                return p
            },
            getTabs: function () {
                return t
            },
            getPanes: function () {
                return o
            },
            getCurrentPane: function () {
                return o.eq(e)
            },
            getCurrentTab: function () {
                return t.eq(e)
            },
            getIndex: function () {
                return e
            },
            next: function () {
                return s.click(e + 1)
            },
            prev: function () {
                return s.click(e - 1)
            },
            destroy: function () {
                return t.unbind(p.event).removeClass(p.current),
                o.find("a[href^=#]").unbind("click.T"), s
            }
        });
        b.each(["onBeforeClick", "onClick"], function (e, j) {
            b.isFunction(p[j]) && b(s).bind(j, p[j]);
            s[j] = function (e) {
                return e && b(s).bind(j, e), s
            }
        });
        p.history && b.fn.history && (b.tools.history.init(t), p.event = "history");
        t.each(function (e) {
            b(this).bind(p.event, function (b) {
                return s.click(e, b), b.preventDefault()
            })
        });
        o.find("a[href^=#]").bind("click.T", function (e) {
            s.click(b(this).attr("href"), e)
        });
        location.hash && "a" == p.tabs && g.find("[href=" + location.hash + "]").length ? s.click(location.hash) : (0 === p.initialIndex || 0 < p.initialIndex) && s.click(p.initialIndex)
    }
    b.tools = b.tools || {
        version: "1.2.6"
    };
    b.tools.tabs = {
        conf: {
            tabs: "a",
            current: "current",
            onBeforeClick: null,
            onClick: null,
            effect: "default",
            initialIndex: 0,
            event: "click",
            rotate: !1,
            slideUpSpeed: 400,
            slideDownSpeed: 400,
            history: !1
        },
        addEffect: function (b, g) {
            q[b] = g
        }
    };
    var q = {
        "default": function (b, g) {
            this.getPanes().hide().eq(b).show();
            g.call()
        },
        fade: function (b, g) {
            var p = this.getConf(),
                q = p.fadeOutSpeed,
                s = this.getPanes();
            q ? s.fadeOut(q) : s.hide();
            s.eq(b).fadeIn(p.fadeInSpeed,
            g)
        },
        slide: function (b, g) {
            var p = this.getConf();
            this.getPanes().slideUp(p.slideUpSpeed);
            this.getPanes().eq(b).slideDown(p.slideDownSpeed, g)
        },
        ajax: function (b, g) {
            this.getPanes().eq(0).load(this.getTabs().eq(b).attr("href"), g)
        }
    }, s, p;
    b.tools.tabs.addEffect("horizontal", function (g, n) {
        if (!s) {
            var q = this.getPanes().eq(g),
                y = this.getCurrentPane();
            p || (p = this.getPanes().eq(0).width());
            s = !0;
            q.show();
            y.animate({
                width: 0
            }, {
                step: function (b) {
                    q.css("width", p - b)
                },
                complete: function () {
                    b(this).hide();
                    n.call();
                    s = !1
                }
            });
            y.length || (n.call(), s = !1)
        }
    });
    b.fn.tabs = function (k, n) {
        var p = this.data("tabs");
        return p && (p.destroy(), this.removeData("tabs")), b.isFunction(n) && (n = {
            onBeforeClick: n
        }), n = b.extend({}, b.tools.tabs.conf, n), this.each(function () {
            p = new g(b(this), k, n);
            b(this).data("tabs", p)
        }), n.api ? p : this
    }
})(jQuery);
(function (b) {
    function g(g, p) {
        function k(e) {
            var f = b(e);
            return 2 > f.length ? f : g.parent().find(e)
        }
        function n() {
            t = setTimeout(function () {
                x.next()
            }, p.interval)
        }
        var q = this,
            y = g.add(this),
            x = g.data("tabs"),
            t, o = !0,
            e = k(p.next).click(function () {
                x.next()
            }),
            f = k(p.prev).click(function () {
                x.prev()
            });
        b.extend(q, {
            getTabs: function () {
                return x
            },
            getConf: function () {
                return p
            },
            play: function () {
                if (t) return q;
                var e = b.Event("onBeforePlay");
                return y.trigger(e), e.isDefaultPrevented() ? q : (o = !1, y.trigger("onPlay"), y.bind("onClick", n),
                n(), q)
            },
            pause: function () {
                if (!t) return q;
                var e = b.Event("onBeforePause");
                return y.trigger(e), e.isDefaultPrevented() ? q : (t = clearTimeout(t), y.trigger("onPause"), y.unbind("onClick", n), q)
            },
            resume: function () {
                o || q.play()
            },
            stop: function () {
                q.pause();
                o = !0
            }
        });
        b.each(["onBeforePlay", "onPlay", "onBeforePause", "onPause"], function (e, f) {
            b.isFunction(p[f]) && b(q).bind(f, p[f]);
            q[f] = function (e) {
                return b(q).bind(f, e)
            }
        });
        p.autopause && x.getTabs().add(e).add(f).add(x.getPanes()).hover(q.pause, q.resume);
        p.autoplay && q.play();
        p.clickable && x.getPanes().click(function () {
            x.next()
        });
        if (!x.getConf().rotate) {
            var j = p.disabledClass;
            x.getIndex() || f.addClass(j);
            x.onBeforeClick(function (b, o) {
                f.toggleClass(j, !o);
                e.toggleClass(j, o == x.getTabs().length - 1)
            })
        }
    }
    var q;
    q = b.tools.tabs.slideshow = {
        conf: {
            next: ".forward",
            prev: ".backward",
            disabledClass: "disabled",
            autoplay: !1,
            autopause: !0,
            interval: 3E3,
            clickable: !0,
            api: !1
        }
    };
    b.fn.slideshow = function (s) {
        var p = this.data("slideshow");
        return p ? p : (s = b.extend({}, q.conf, s), this.each(function () {
            p = new g(b(this),
            s);
            b(this).data("slideshow", p)
        }), s.api ? p : this)
    }
})(jQuery);
(function (b) {
    function g() {
        if (b.browser.msie) {
            var g = b(document).height(),
                k = b(window).height();
            return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 20 > g - k ? k : g]
        }
        return [b(document).width(), b(document).height()]
    }
    function q(g) {
        if (g) return g.call(b.mask)
    }
    b.tools = b.tools || {
        version: "1.2.6"
    };
    var s;
    s = b.tools.expose = {
        conf: {
            maskId: "exposeMask",
            loadSpeed: "slow",
            closeSpeed: "fast",
            closeOnClick: !0,
            closeOnEsc: !0,
            zIndex: 9998,
            opacity: 0.8,
            startOpacity: 0,
            color: "#fff",
            onLoad: null,
            onClose: null
        }
    };
    var p, k, n, B, y;
    b.mask = {
        load: function (x, t) {
            if (n) return this;
            "string" == typeof x && (x = {
                color: x
            });
            x = x || B;
            B = x = b.extend(b.extend({}, s.conf), x);
            p = b("#" + x.maskId);
            p.length || (p = b("<div/>").attr("id", x.maskId), b("body").append(p));
            var o = g();
            return p.css({
                position: "absolute",
                top: 0,
                left: 0,
                width: o[0],
                height: o[1],
                display: "none",
                opacity: x.startOpacity,
                zIndex: x.zIndex
            }), x.color && p.css("backgroundColor", x.color), !1 === q(x.onBeforeLoad) ? this : (x.closeOnEsc && b(document).bind("keydown.mask", function (e) {
                27 == e.keyCode && b.mask.close(e)
            }),
            x.closeOnClick && p.bind("click.mask", function (e) {
                b.mask.close(e)
            }), b(window).bind("resize.mask", function () {
                b.mask.fit()
            }), t && t.length && (y = t.eq(0).css("zIndex"), b.each(t, function () {
                var e = b(this);
                /relative|absolute|fixed/i.test(e.css("position")) || e.css("position", "relative")
            }), k = t.css({
                zIndex: Math.max(x.zIndex + 1, "auto" == y ? 0 : y)
            })), p.css({
                display: "block"
            }).fadeTo(x.loadSpeed, x.opacity, function () {
                b.mask.fit();
                q(x.onLoad);
                n = "full"
            }), n = !0, this)
        },
        close: function () {
            if (n) {
                if (!1 === q(B.onBeforeClose)) return this;
                p.fadeOut(B.closeSpeed, function () {
                    q(B.onClose);
                    k && k.css({
                        zIndex: y
                    });
                    n = !1
                });
                b(document).unbind("keydown.mask");
                p.unbind("click.mask");
                b(window).unbind("resize.mask")
            }
            return this
        },
        fit: function () {
            if (n) {
                var b = g();
                p.css({
                    width: b[0],
                    height: b[1]
                })
            }
        },
        getMask: function () {
            return p
        },
        isLoaded: function (b) {
            return b ? "full" == n : n
        },
        getConf: function () {
            return B
        },
        getExposed: function () {
            return k
        }
    };
    b.fn.mask = function (g) {
        return b.mask.load(g), this
    };
    b.fn.expose = function (g) {
        return b.mask.load(g, this), this
    }
})(jQuery);
(function () {
    function b(b, o) {
        if (o) for (var e in o) o.hasOwnProperty(e) && (b[e] = o[e]);
        return b
    }
    function g(b, o) {
        var e = [],
            f;
        for (f in b) b.hasOwnProperty(f) && (e[f] = o(b[f]));
        return e
    }
    function q(g, o, e) {
        if (y.isSupported(o.version)) g.innerHTML = y.getHTML(o, e);
        else if (o.expressInstall && y.isSupported([6, 65])) g.innerHTML = y.getHTML(b(o, {
            src: o.expressInstall
        }), {
            MMredirectURL: location.href,
            MMplayerType: "PlugIn",
            MMdoctitle: document.title
        });
        else if (g.innerHTML.replace(/\s/g, "") || (g.innerHTML = "<h2>Flash version " + o.version +
            " or greater is required</h2><h3>" + (0 < x[0] ? "Your version is " + x : "You have no flash plugin installed") + "</h3>" + ("A" == g.tagName ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='" + p + "'>here</a></p>"), "A" == g.tagName && (g.onclick = function () {
            location.href = p
        })), o.onFail) {
            var f = o.onFail.call(this);
            "string" == typeof f && (g.innerHTML = f)
        }
        s && (window[o.id] = document.getElementById(o.id));
        b(this, {
            getRoot: function () {
                return g
            },
            getOptions: function () {
                return o
            },
            getConf: function () {
                return e
            },
            getApi: function () {
                return g.firstChild
            }
        })
    }
    var s = document.all,
        p = "http://www.adobe.com/go/getflashplayer",
        k = "function" == typeof jQuery,
        n = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/,
        B = {
            width: "100%",
            height: "100%",
            id: "_" + ("" + Math.random()).slice(9),
            allowfullscreen: !0,
            allowscriptaccess: "always",
            quality: "high",
            version: [3, 0],
            onFail: null,
            expressInstall: null,
            w3c: !1,
            cachebusting: !1
        };
    window.attachEvent && window.attachEvent("onbeforeunload", function () {
        __flash_unloadHandler = function () {};
        __flash_savedUnloadHandler = function () {}
    });
    window.flashembed = function (g, o, e) {
        "string" == typeof g && (g = document.getElementById(g.replace("#", "")));
        return !g ? void 0 : ("string" == typeof o && (o = {
            src: o
        }), new q(g, b(b({}, B), o), e))
    };
    var y = b(window.flashembed, {
        conf: B,
        getVersion: function () {
            var b, g;
            try {
                g = navigator.plugins["Shockwave Flash"].description.slice(16)
            } catch (e) {
                try {
                    g = (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")) && b.GetVariable("$version")
                } catch (f) {
                    try {
                        g = (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")) && b.GetVariable("$version")
                    } catch (j) {}
                }
            }
            return g = n.exec(g), g ? [g[1], g[3]] : [0, 0]
        },
        asString: function (b) {
            if (null === b || void 0 === b) return null;
            var o = typeof b;
            "object" == o && b.push && (o = "array");
            switch (o) {
                case "string":
                    return b = b.replace(RegExp('(["\\\\])', "g"), "\\$1"), b = b.replace(/^\s?(\d+\.?\d*)%/, "$1pct"), '"' + b + '"';
                case "array":
                    return "[" + g(b, function (b) {
                        return y.asString(b)
                    }).join(",") + "]";
                case "function":
                    return '"function()"';
                case "object":
                    var o = [],
                        e;
                    for (e in b) b.hasOwnProperty(e) && o.push('"' + e + '":' + y.asString(b[e]));
                    return "{" + o.join(",") + "}"
            }
            return ("" + b).replace(/\s/g, " ").replace(/\'/g, '"')
        },
        getHTML: function (g, o) {
            var g = b({}, g),
                e = '<object width="' + g.width + '" height="' + g.height + '" id="' + g.id + '" name="' + g.id + '"';
            g.cachebusting && (g.src += (-1 != g.src.indexOf("?") ? "&" : "?") + Math.random());
            g.w3c || !s ? e += ' data="' + g.src + '" type="application/x-shockwave-flash"' : e += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';
            e += ">";
            if (g.w3c || s) e += '<param name="movie" value="' + g.src + '" />';
            g.width = g.height = g.id = g.w3c = g.src = null;
            g.onFail = g.version = g.expressInstall = null;
            for (var f in g) g[f] && (e += '<param name="' + f + '" value="' + g[f] + '" />');
            f = "";
            if (o) {
                for (var j in o) if (o[j]) {
                    var k = o[j];
                    f += j + "=" + encodeURIComponent(/function|object/.test(typeof k) ? y.asString(k) : k) + "&"
                }
                f = f.slice(0, -1);
                e += '<param name="flashvars" value=\'' + f + "' />"
            }
            return e += "</object>", e
        },
        isSupported: function (b) {
            return x[0] > b[0] || x[0] == b[0] && x[1] >= b[1]
        }
    }),
        x = y.getVersion();
    k && (jQuery.tools = jQuery.tools || {
        version: "1.2.6"
    }, jQuery.tools.flashembed = {
        conf: B
    }, jQuery.fn.flashembed = function (b, g) {
        return this.each(function () {
            jQuery(this).data("flashembed",
            flashembed(this, b, g))
        })
    })
})();
(function (b) {
    function g(b) {
        if (b) {
            var g = s.contentWindow.document;
            g.open().close();
            g.location.hash = b
        }
    }
    var q, s, p, k;
    b.tools = b.tools || {
        version: "1.2.6"
    };
    b.tools.history = {
        init: function (n) {
            k || (b.browser.msie && "8" > b.browser.version ? s || (s = b("<iframe/>").attr("src", "javascript:false;").hide().get(0), b("body").prepend(s), setInterval(function () {
                var g = s.contentWindow.document.location.hash;
                q !== g && b(window).trigger("hash", g)
            }, 100), g(location.hash || "#")) : setInterval(function () {
                var g = location.hash;
                g !== q && b(window).trigger("hash",
                g)
            }, 100), p = p ? p.add(n) : n, n.click(function (k) {
                var n = b(this).attr("href");
                s && g(n);
                if ("#" != n.slice(0, 1)) return location.href = "#" + n, k.preventDefault()
            }), k = !0)
        }
    };
    b(window).bind("hash", function (g, k) {
        k ? p.filter(function () {
            var g = b(this).attr("href");
            return g == k || g == k.replace("#", "")
        }).trigger("history", [k]) : p.eq(0).trigger("history", [k]);
        q = k
    });
    b.fn.history = function (g) {
        return b.tools.history.init(this), this.bind("history", g)
    }
})(jQuery);
(function (b) {
    function g(g) {
        switch (g.type) {
            case "mousemove":
                return b.extend(g.data, {
                    clientX: g.clientX,
                    clientY: g.clientY,
                    pageX: g.pageX,
                    pageY: g.pageY
                });
            case "DOMMouseScroll":
                b.extend(g, g.data);
                g.delta = -g.detail / 3;
                break;
            case "mousewheel":
                g.delta = g.wheelDelta / 120
        }
        return g.type = "wheel", b.event.handle.call(this, g, g.delta)
    }
    b.fn.mousewheel = function (b) {
        return this[b ? "bind" : "trigger"]("wheel", b)
    };
    b.event.special.wheel = {
        setup: function () {
            b.event.add(this, q, g, {})
        },
        teardown: function () {
            b.event.remove(this, q, g)
        }
    };
    var q = b.browser.mozilla ? "DOMMouseScroll" + ("1.9" > b.browser.version ? " mousemove" : "") : "mousewheel"
})(jQuery);
(function (b) {
    function g(g, k, n) {
        var q = n.relative ? g.position().top : g.offset().top,
            s = n.relative ? g.position().left : g.offset().left,
            x = n.position[0],
            q = q - (k.outerHeight() - n.offset[0]),
            s = s + (g.outerWidth() + n.offset[1]);
        /iPad/i.test(navigator.userAgent) && (q -= b(window).scrollTop());
        var t = k.outerHeight() + g.outerHeight();
        "center" == x && (q += t / 2);
        "bottom" == x && (q += t);
        x = n.position[1];
        g = k.outerWidth() + g.outerWidth();
        return "center" == x && (s -= g / 2), "left" == x && (s -= g), {
            top: q,
            left: s
        }
    }
    function q(p, k) {
        var n = this,
            q = p.add(n),
            y,
            x = 0,
            t = 0,
            o = p.attr("title"),
            e = p.attr("data-tooltip"),
            f = s[k.effect],
            j, u = p.is(":input"),
            P = u && p.is(":checkbox, :radio, select, :button, :submit"),
            L = p.attr("type"),
            H = k.events[L] || k.events[u ? P ? "widget" : "input" : "def"];
        if (!f) throw 'Nonexistent effect "' + k.effect + '"';
        H = H.split(/,\s*/);
        if (2 != H.length) throw "Tooltip: bad events configuration for " + L;
        p.bind(H[0], function (b) {
            clearTimeout(x);
            k.predelay ? t = setTimeout(function () {
                n.show(b)
            }, k.predelay) : n.show(b)
        }).bind(H[1], function (b) {
            clearTimeout(t);
            k.delay ? x = setTimeout(function () {
                n.hide(b)
            },
            k.delay) : n.hide(b)
        });
        o && k.cancelDefault && (p.removeAttr("title"), p.data("title", o));
        b.extend(n, {
            show: function (u) {
                if (!y && (e ? y = b(e) : k.tip ? y = b(k.tip).eq(0) : o ? y = b(k.layout).addClass(k.tipClass).appendTo(document.body).hide().append(o) : (y = p.next(), y.length || (y = p.parent().next())), !y.length)) throw "Cannot find tooltip for " + p;
                if (n.isShown()) return n;
                y.stop(!0, !0);
                var s = g(p, y, k);
                k.tip && y.html(p.data("title"));
                u = b.Event();
                u.type = "onBeforeShow";
                q.trigger(u, [s]);
                if (u.isDefaultPrevented()) return n;
                s = g(p, y, k);
                y.css({
                    position: "absolute",
                    top: s.top,
                    left: s.left
                });
                j = !0;
                f[0].call(n, function () {
                    u.type = "onShow";
                    j = "full";
                    q.trigger(u)
                });
                s = k.events.tooltip.split(/,\s*/);
                return y.data("__set") || (y.unbind(s[0]).bind(s[0], function () {
                    clearTimeout(x);
                    clearTimeout(t)
                }), s[1] && !p.is("input:not(:checkbox, :radio), textarea") && y.unbind(s[1]).bind(s[1], function (b) {
                    b.relatedTarget != p[0] && p.trigger(H[1].split(" ")[0])
                }), k.tip || y.data("__set", !0)), n
            },
            hide: function (e) {
                if (!y || !n.isShown()) return n;
                e = b.Event();
                e.type = "onBeforeHide";
                q.trigger(e);
                return e.isDefaultPrevented() ? void 0 : (j = !1, s[k.effect][1].call(n, function () {
                    e.type = "onHide";
                    q.trigger(e)
                }), n)
            },
            isShown: function (b) {
                return b ? "full" == j : j
            },
            getConf: function () {
                return k
            },
            getTip: function () {
                return y
            },
            getTrigger: function () {
                return p
            }
        });
        b.each(["onHide", "onBeforeShow", "onShow", "onBeforeHide"], function (e, f) {
            b.isFunction(k[f]) && b(n).bind(f, k[f]);
            n[f] = function (e) {
                return e && b(n).bind(f, e), n
            }
        })
    }
    b.tools = b.tools || {
        version: "1.2.6"
    };
    b.tools.tooltip = {
        conf: {
            effect: "toggle",
            fadeOutSpeed: "fast",
            predelay: 0,
            delay: 30,
            opacity: 1,
            tip: 0,
            fadeIE: !1,
            position: ["top", "center"],
            offset: [0, 0],
            relative: !1,
            cancelDefault: !0,
            events: {
                def: "mouseenter,mouseleave",
                input: "focus,blur",
                widget: "focus mouseenter,blur mouseleave",
                tooltip: "mouseenter,mouseleave"
            },
            layout: "<div/>",
            tipClass: "tooltip"
        },
        addEffect: function (b, g, n) {
            s[b] = [g, n]
        }
    };
    var s = {
        toggle: [function (b) {
            var g = this.getConf(),
                n = this.getTip(),
                g = g.opacity;
            1 > g && n.css({
                opacity: g
            });
            n.show();
            b.call()
        }, function (b) {
            this.getTip().hide();
            b.call()
        }],
        fade: [function (g) {
            var k = this.getConf();
            !b.browser.msie || k.fadeIE ? this.getTip().fadeTo(k.fadeInSpeed, k.opacity, g) : (this.getTip().show(), g())
        }, function (g) {
            var k = this.getConf();
            !b.browser.msie || k.fadeIE ? this.getTip().fadeOut(k.fadeOutSpeed, g) : (this.getTip().hide(), g())
        }]
    };
    b.fn.tooltip = function (g) {
        var k = this.data("tooltip");
        return k ? k : (g = b.extend(!0, {}, b.tools.tooltip.conf, g), "string" == typeof g.position && (g.position = g.position.split(/,?\s/)), this.each(function () {
            k = new q(b(this), g);
            b(this).data("tooltip", k)
        }), g.api ? k : this)
    }
})(jQuery);
(function (b) {
    var g = b.tools.tooltip;
    g.dynamic = {
        conf: {
            classNames: "top right bottom left"
        }
    };
    b.fn.dynamic = function (q) {
        "number" == typeof q && (q = {
            speed: q
        });
        var q = b.extend({}, g.dynamic.conf, q),
            s = b.extend(!0, {}, q),
            p = q.classNames.split(/\s/),
            k;
        return this.each(function () {
            var g = b(this).tooltip().onBeforeShow(function (g, n) {
                var q = this.getTip(),
                    t = this.getConf();
                k || (k = [t.position[0], t.position[1], t.offset[0], t.offset[1], b.extend({}, t)]);
                b.extend(t, k[4]);
                t.position = [k[0], k[1]];
                t.offset = [k[2], k[3]];
                q.css({
                    visibility: "hidden",
                    position: "absolute",
                    top: n.top,
                    left: n.left
                }).show();
                var o = b.extend(!0, {}, s),
                    e;
                e = b(window);
                var f = e.width() + e.scrollLeft(),
                    j = e.height() + e.scrollTop();
                e = [q.offset().top <= e.scrollTop(), f <= q.offset().left + q.width(), j <= q.offset().top + q.height(), e.scrollLeft() >= q.offset().left];
                a: {
                    for (f = e.length; f--;) if (e[f]) {
                        f = !1;
                        break a
                    }
                    f = !0
                }
                if (!f) {
                    e[2] && (b.extend(t, o.top), t.position[0] = "top", q.addClass(p[0]));
                    e[3] && (b.extend(t, o.right), t.position[1] = "right", q.addClass(p[1]));
                    e[0] && (b.extend(t, o.bottom), t.position[0] = "bottom",
                    q.addClass(p[2]));
                    e[1] && (b.extend(t, o.left), t.position[1] = "left", q.addClass(p[3]));
                    if (e[0] || e[2]) t.offset[0] *= -1;
                    if (e[1] || e[3]) t.offset[1] *= -1
                }
                q.css({
                    visibility: "visible"
                }).hide()
            });
            g.onBeforeShow(function () {
                var b = this.getConf();
                this.getTip();
                setTimeout(function () {
                    b.position = [k[0], k[1]];
                    b.offset = [k[2], k[3]]
                }, 0)
            });
            g.onHide(function () {
                this.getTip().removeClass(q.classNames)
            });
            ret = g
        }), q.api ? ret : this
    }
})(jQuery);
(function (b) {
    var g = b.tools.tooltip;
    b.extend(g.conf, {
        direction: "up",
        bounce: !1,
        slideOffset: 10,
        slideInSpeed: 200,
        slideOutSpeed: 200,
        slideFade: !b.browser.msie
    });
    var q = {
        up: ["-", "top"],
        down: ["+", "top"],
        left: ["-", "left"],
        right: ["+", "left"]
    };
    g.addEffect("slide", function (b) {
        var g = this.getConf(),
            k = this.getTip(),
            n = g.slideFade ? {
                opacity: g.opacity
            } : {}, B = q[g.direction] || q.up;
        n[B[1]] = B[0] + "=" + g.slideOffset;
        g.slideFade && k.css({
            opacity: 0
        });
        k.show().animate(n, g.slideInSpeed, b)
    }, function (g) {
        var p = this.getConf(),
            k = p.slideOffset,
            n = p.slideFade ? {
                opacity: 0
            } : {}, B = q[p.direction] || q.up,
            y = "" + B[0];
        p.bounce && (y = "+" == y ? "-" : "+");
        n[B[1]] = y + "=" + k;
        this.getTip().animate(n, p.slideOutSpeed, function () {
            b(this).hide();
            g.call()
        })
    })
})(jQuery);
(function (b) {
    function g(e, f, j) {
        var g = e.offset().top,
            o = e.offset().left,
            k = j.position.split(/,?\s+/),
            n = k[0],
            k = k[1],
            g = g - (f.outerHeight() - j.offset[0]),
            o = o + (e.outerWidth() + j.offset[1]);
        /iPad/i.test(navigator.userAgent) && (g -= b(window).scrollTop());
        j = f.outerHeight() + e.outerHeight();
        "center" == n && (g += j / 2);
        "bottom" == n && (g += j);
        e = e.outerWidth();
        return "center" == k && (o -= (e + f.outerWidth()) / 2), "left" == k && (o -= e), {
            top: g,
            left: o
        }
    }
    function q(b) {
        function f() {
            return this.getAttribute("type") == b
        }
        return f.key = "[type=" + b + "]",
        f
    }
    function s(e, f, j) {
        function k(e, f, g) {
            if (j.grouped || !e.length) {
                var o;
                !1 === g || b.isArray(g) ? (o = x.messages[f.key || f] || x.messages["*"], o = o[j.lang] || x.messages["*"].en, (f = o.match(/\$\d/g)) && b.isArray(g) && b.each(f, function (b) {
                    o = o.replace(this, g[b])
                })) : o = g[j.lang] || g;
                e.push(o)
            }
        }
        var p = this,
            q = f.add(p),
            e = e.not(":button, :image, :reset, :submit");
        f.attr("novalidate", "novalidate");
        b.extend(p, {
            getConf: function () {
                return j
            },
            getForm: function () {
                return f
            },
            getInputs: function () {
                return e
            },
            reflow: function () {
                return e.each(function () {
                    var e = b(this),
                        f = e.data("msg.el");
                    f && (e = g(e, f, j), f.css({
                        top: e.top,
                        left: e.left
                    }))
                }), p
            },
            invalidate: function (f, g) {
                if (!g) {
                    var k = [];
                    b.each(f, function (b, f) {
                        var j = e.filter("[name='" + b + "']");
                        j.length && (j.trigger("OI", [f]), k.push({
                            input: j,
                            messages: [f]
                        }))
                    });
                    f = k;
                    g = b.Event()
                }
                return g.type = "onFail", q.trigger(g, [f]), g.isDefaultPrevented() || o[j.effect][0].call(p, f, g), p
            },
            reset: function (f) {
                return f = f || e, f.removeClass(j.errorClass).each(function () {
                    var e = b(this).data("msg.el");
                    e && (e.remove(), b(this).data("msg.el", null))
                }).unbind(j.errorInputEvent ||
                    ""), p
            },
            destroy: function () {
                return f.unbind(j.formEvent + ".V").unbind("reset.V"), e.unbind(j.inputEvent + ".V").unbind("change.V"), p.reset()
            },
            checkValidity: function (f, g) {
                f = f || e;
                f = f.not(":disabled");
                if (!f.length) return !0;
                g = g || b.Event();
                g.type = "onBeforeValidate";
                q.trigger(g, [f]);
                if (g.isDefaultPrevented()) return g.result;
                var s = [];
                f.not(":radio:not(:checked)").each(function () {
                    var e = [],
                        f = b(this).data("messages", e),
                        o = n && f.is(":date") ? "onHide.v" : j.errorInputEvent + ".v";
                    f.unbind(o);
                    b.each(t, function () {
                        var b = this[0];
                        if (f.filter(b).length) {
                            var o = this[1].call(p, f, f.val());
                            if (!0 !== o) {
                                g.type = "onBeforeFail";
                                q.trigger(g, [f, b]);
                                if (g.isDefaultPrevented()) return !1;
                                var n = f.attr(j.messageAttr);
                                if (n) return e = [n], !1;
                                k(e, b, o)
                            }
                        }
                    });
                    e.length && (s.push({
                        input: f,
                        messages: e
                    }), f.trigger("OI", [e]), j.errorInputEvent && f.bind(o, function (b) {
                        p.checkValidity(f, b)
                    }));
                    if (j.singleError && s.length) return !1
                });
                var y = o[j.effect];
                if (!y) throw 'Validator: cannot find effect "' + j.effect + '"';
                return s.length ? (p.invalidate(s, g), !1) : (y[1].call(p, f, g), g.type =
                    "onSuccess", q.trigger(g, [f]), f.unbind(j.errorInputEvent + ".v"), !0)
            }
        });
        b.each(["onBeforeValidate", "onBeforeFail", "onFail", "onSuccess"], function (e, f) {
            b.isFunction(j[f]) && b(p).bind(f, j[f]);
            p[f] = function (e) {
                return e && b(p).bind(f, e), p
            }
        });
        j.formEvent && f.bind(j.formEvent + ".V", function (b) {
            if (!p.checkValidity(null, b)) return b.preventDefault();
            b.target = f;
            b.type = j.formEvent
        });
        f.bind("reset.V", function () {
            p.reset()
        });
        e[0] && e[0].validity && e.each(function () {
            this.oninvalid = function () {
                return !1
            }
        });
        f[0] && (f[0].checkValidity = p.checkValidity);
        j.inputEvent && e.bind(j.inputEvent + ".V", function (e) {
            p.checkValidity(b(this), e)
        });
        e.filter(":checkbox, select").filter("[required]").bind("change.V", function (e) {
            var f = b(this);
            (this.checked || f.is("select") && b(this).val()) && o[j.effect][1].call(p, f, e)
        });
        var s = e.filter(":radio").change(function (b) {
            p.checkValidity(s, b)
        });
        b(window).resize(function () {
            p.reflow()
        })
    }
    b.tools = b.tools || {
        version: "1.2.6"
    };
    var p = /\[type=([a-z]+)\]/,
        k = /^-?[0-9]*(\.[0-9]+)?$/,
        n = b.tools.dateinput,
        B = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
        y = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,
        x;
    x = b.tools.validator = {
        conf: {
            grouped: !1,
            effect: "default",
            errorClass: "invalid",
            inputEvent: null,
            errorInputEvent: "keyup",
            formEvent: "submit",
            lang: "en",
            message: "<div/>",
            messageAttr: "data-message",
            messageClass: "error",
            offset: [0, 0],
            position: "center right",
            singleError: !1,
            speed: "normal"
        },
        messages: {
            "*": {
                en: "Please correct this value"
            }
        },
        localize: function (e, f) {
            b.each(f, function (b, f) {
                x.messages[b] = x.messages[b] || {};
                x.messages[b][e] = f
            })
        },
        localizeFn: function (e,
        f) {
            x.messages[e] = x.messages[e] || {};
            b.extend(x.messages[e], f)
        },
        fn: function (e, f, j) {
            b.isFunction(f) ? j = f : ("string" == typeof f && (f = {
                en: f
            }), this.messages[e.key || e] = f);
            (f = p.exec(e)) && (e = q(f[1]));
            t.push([e, j])
        },
        addEffect: function (b, f, j) {
            o[b] = [f, j]
        }
    };
    var t = [],
        o = {
            "default": [function (e) {
                var f = this.getConf();
                b.each(e, function (e, o) {
                    var k = o.input;
                    k.addClass(f.errorClass);
                    var n = k.data("msg.el");
                    n || (n = b(f.message).addClass(f.messageClass).appendTo(document.body), k.data("msg.el", n));
                    n.css({
                        visibility: "hidden"
                    }).find("p").remove();
                    b.each(o.messages, function (e, f) {
                        b("<p/>").html(f).appendTo(n)
                    });
                    n.outerWidth() == n.parent().width() && n.add(n.find("p")).css({
                        display: "inline"
                    });
                    k = g(k, n, f);
                    n.css({
                        visibility: "visible",
                        position: "absolute",
                        top: k.top,
                        left: k.left
                    }).fadeIn(f.speed)
                })
            }, function (e) {
                var f = this.getConf();
                e.removeClass(f.errorClass).each(function () {
                    var e = b(this).data("msg.el");
                    e && e.css({
                        visibility: "hidden"
                    })
                })
            }]
        };
    b.each(["email", "url", "number"], function (e, f) {
        b.expr[":"][f] = function (b) {
            return b.getAttribute("type") === f
        }
    });
    b.fn.oninvalid = function (b) {
        return this[b ? "bind" : "trigger"]("OI", b)
    };
    x.fn(":email", "Please enter a valid email address", function (b, f) {
        return !f || B.test(f)
    });
    x.fn(":url", "Please enter a valid URL", function (b, f) {
        return !f || y.test(f)
    });
    x.fn(":number", "Please enter a numeric value.", function (b, f) {
        return k.test(f)
    });
    x.fn("[max]", "Please enter a value no larger than $1", function (b, f) {
        if ("" === f || n && b.is(":date")) return !0;
        var j = b.attr("max");
        return parseFloat(f) <= parseFloat(j) ? !0 : [j]
    });
    x.fn("[min]", "Please enter a value of at least $1",

    function (b, f) {
        if ("" === f || n && b.is(":date")) return !0;
        var j = b.attr("min");
        return parseFloat(f) >= parseFloat(j) ? !0 : [j]
    });
    x.fn("[required]", "Please complete this mandatory field.", function (b, f) {
        return b.is(":checkbox") ? b.is(":checked") : !! f
    });
    x.fn("[pattern]", function (b) {
        return RegExp("^" + b.attr("pattern") + "$").test(b.val())
    });
    b.fn.validator = function (e) {
        var f = this.data("validator");
        return f && (f.destroy(), this.removeData("validator")), e = b.extend(!0, {}, x.conf, e), this.is("form") ? this.each(function () {
            var j = b(this);
            f = new s(j.find(":input"), j, e);
            j.data("validator", f)
        }) : (f = new s(this, this.eq(0).closest("form"), e), this.data("validator", f))
    }
})(jQuery);
/*
 jQuery UI Effects 1.8.18

 Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 http://docs.jquery.com/UI/Effects/
*/
jQuery.effects || function (b, g) {
    function q(g) {
        var e;
        return g && g.constructor == Array && 3 == g.length ? g : (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)) ? [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10)] : (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)) ? [2.55 * parseFloat(e[1]), 2.55 * parseFloat(e[2]), 2.55 * parseFloat(e[3])] : (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)) ? [parseInt(e[1], 16), parseInt(e[2],
        16), parseInt(e[3], 16)] : (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)) ? [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(g) ? y.transparent : y[b.trim(g).toLowerCase()]
    }
    function s() {
        var b = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            e = {}, f, j;
        if (b && b.length && b[0] && b[b[0]]) for (var g = b.length; g--;) f = b[g], "string" == typeof b[f] && (j = f.replace(/\-(\w)/g, function (b, e) {
            return e.toUpperCase()
        }), e[j] = b[f]);
        else for (f in b) "string" === typeof b[f] && (e[f] = b[f]);
        return e
    }
    function p(g) {
        var e, f;
        for (e in g) f = g[e], (null == f || b.isFunction(f) || e in t || /scrollbar/.test(e) || !/color/i.test(e) && isNaN(parseFloat(f))) && delete g[e];
        return g
    }
    function k(b, e) {
        var f = {
            _: 0
        }, j;
        for (j in e) b[j] != e[j] && (f[j] = e[j]);
        return f
    }
    function n(g, e, f, j) {
        "object" == typeof g && (j = e, f = null, e = g, g = e.effect);
        b.isFunction(e) && (j = e, f = null, e = {});
        if ("number" == typeof e || b.fx.speeds[e]) j = f, f = e, e = {};
        b.isFunction(f) && (j = f, f = null);
        e = e || {};
        f = f || e.duration;
        f = b.fx.off ? 0 : "number" == typeof f ? f : f in b.fx.speeds ? b.fx.speeds[f] : b.fx.speeds._default;
        j = j || e.complete;
        return [g, e, f, j]
    }
    function B(g) {
        return !g || "number" === typeof g || b.fx.speeds[g] || "string" === typeof g && !b.effects[g] ? !0 : !1
    }
    b.effects = {};
    b.each("backgroundColor,borderBottomColor,borderLeftColor,borderRightColor,borderTopColor,borderColor,color,outlineColor".split(","), function (g, e) {
        b.fx.step[e] = function (f) {
            if (!f.colorInit) {
                var j;
                j = f.elem;
                var g = e,
                    o;
                do {
                    o = b.curCSS(j, g);
                    if (o != "" && o != "transparent" || b.nodeName(j, "body")) break;
                    g = "backgroundColor"
                } while (j = j.parentNode);
                j = q(o);
                f.start = j;
                f.end = q(f.end);
                f.colorInit = true
            }
            f.elem.style[e] = "rgb(" + Math.max(Math.min(parseInt(f.pos * (f.end[0] - f.start[0]) + f.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(f.pos * (f.end[1] - f.start[1]) + f.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(f.pos * (f.end[2] - f.start[2]) + f.start[2], 10), 255), 0) + ")"
        }
    });
    var y = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }, x = ["add", "remove", "toggle"],
        t = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    b.effects.animateClass = function (g, e, f, j) {
        b.isFunction(f) && (j = f, f = null);
        return this.queue(function () {
            var n = b(this),
                q = n.attr("style") ||
                    " ",
                t = p(s.call(this)),
                y, B = n.attr("class");
            b.each(x, function (b, e) {
                if (g[e]) n[e + "Class"](g[e])
            });
            y = p(s.call(this));
            n.attr("class", B);
            n.animate(k(t, y), {
                queue: false,
                duration: e,
                easing: f,
                complete: function () {
                    b.each(x, function (b, e) {
                        if (g[e]) n[e + "Class"](g[e])
                    });
                    if (typeof n.attr("style") == "object") {
                        n.attr("style").cssText = "";
                        n.attr("style").cssText = q
                    } else n.attr("style", q);
                    j && j.apply(this, arguments);
                    b.dequeue(this)
                }
            })
        })
    };
    b.fn.extend({
        _addClass: b.fn.addClass,
        addClass: function (g, e, f, j) {
            return e ? b.effects.animateClass.apply(this, [{
                add: g
            },
            e, f, j]) : this._addClass(g)
        },
        _removeClass: b.fn.removeClass,
        removeClass: function (g, e, f, j) {
            return e ? b.effects.animateClass.apply(this, [{
                remove: g
            },
            e, f, j]) : this._removeClass(g)
        },
        _toggleClass: b.fn.toggleClass,
        toggleClass: function (o, e, f, j, k) {
            return "boolean" == typeof e || e === g ? f ? b.effects.animateClass.apply(this, [e ? {
                add: o
            } : {
                remove: o
            },
            f, j, k]) : this._toggleClass(o, e) : b.effects.animateClass.apply(this, [{
                toggle: o
            },
            e, f, j])
        },
        switchClass: function (g, e, f, j, k) {
            return b.effects.animateClass.apply(this, [{
                add: e,
                remove: g
            },
            f, j, k])
        }
    });
    b.extend(b.effects, {
        version: "1.8.18",
        save: function (b, e) {
            for (var f = 0; f < e.length; f++) null !== e[f] && b.data("ec.storage." + e[f], b[0].style[e[f]])
        },
        restore: function (b, e) {
            for (var f = 0; f < e.length; f++) null !== e[f] && b.css(e[f], b.data("ec.storage." + e[f]))
        },
        setMode: function (b, e) {
            "toggle" == e && (e = b.is(":hidden") ? "show" : "hide");
            return e
        },
        getBaseline: function (b, e) {
            var f, j;
            switch (b[0]) {
                case "top":
                    f = 0;
                    break;
                case "middle":
                    f = 0.5;
                    break;
                case "bottom":
                    f = 1;
                    break;
                default:
                    f = b[0] / e.height
            }
            switch (b[1]) {
                case "left":
                    j = 0;
                    break;
                case "center":
                    j = 0.5;
                    break;
                case "right":
                    j = 1;
                    break;
                default:
                    j = b[1] / e.width
            }
            return {
                x: j,
                y: f
            }
        },
        createWrapper: function (g) {
            if (g.parent().is(".ui-effects-wrapper")) return g.parent();
            var e = {
                width: g.outerWidth(!0),
                height: g.outerHeight(!0),
                "float": g.css("float")
            }, f = b("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            }),
                j = document.activeElement;
            g.wrap(f);
            (g[0] === j || b.contains(g[0], j)) && b(j).focus();
            f = g.parent();
            "static" == g.css("position") ? (f.css({
                position: "relative"
            }), g.css({
                position: "relative"
            })) : (b.extend(e, {
                position: g.css("position"),
                zIndex: g.css("z-index")
            }), b.each(["top", "left", "bottom", "right"], function (b, f) {
                e[f] = g.css(f);
                isNaN(parseInt(e[f], 10)) && (e[f] = "auto")
            }), g.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            }));
            return f.css(e).show()
        },
        removeWrapper: function (g) {
            var e, f = document.activeElement;
            return g.parent().is(".ui-effects-wrapper") ? (e = g.parent().replaceWith(g), (g[0] === f || b.contains(g[0], f)) && b(f).focus(),
            e) : g
        },
        setTransition: function (g, e, f, j) {
            j = j || {};
            b.each(e, function (b, e) {
                unit = g.cssUnit(e);
                0 < unit[0] && (j[e] = unit[0] * f + unit[1])
            });
            return j
        }
    });
    b.fn.extend({
        effect: function (g, e, f, j) {
            var k = n.apply(this, arguments),
                p = {
                    options: k[1],
                    duration: k[2],
                    callback: k[3]
                }, k = p.options.mode,
                q = b.effects[g];
            return b.fx.off || !q ? k ? this[k](p.duration, p.callback) : this.each(function () {
                p.callback && p.callback.call(this)
            }) : q.call(this, p)
        },
        _show: b.fn.show,
        show: function (b) {
            if (B(b)) return this._show.apply(this, arguments);
            var e = n.apply(this,
            arguments);
            e[1].mode = "show";
            return this.effect.apply(this, e)
        },
        _hide: b.fn.hide,
        hide: function (b) {
            if (B(b)) return this._hide.apply(this, arguments);
            var e = n.apply(this, arguments);
            e[1].mode = "hide";
            return this.effect.apply(this, e)
        },
        __toggle: b.fn.toggle,
        toggle: function (g) {
            if (B(g) || "boolean" === typeof g || b.isFunction(g)) return this.__toggle.apply(this, arguments);
            var e = n.apply(this, arguments);
            e[1].mode = "toggle";
            return this.effect.apply(this, e)
        },
        cssUnit: function (g) {
            var e = this.css(g),
                f = [];
            b.each(["em", "px", "%",
                "pt"], function (b, g) {
                0 < e.indexOf(g) && (f = [parseFloat(e), g])
            });
            return f
        }
    });
    b.easing.jswing = b.easing.swing;
    b.extend(b.easing, {
        def: "easeOutQuad",
        swing: function (g, e, f, j, k) {
            return b.easing[b.easing.def](g, e, f, j, k)
        },
        easeInQuad: function (b, e, f, j, g) {
            return j * (e /= g) * e + f
        },
        easeOutQuad: function (b, e, f, j, g) {
            return -j * (e /= g) * (e - 2) + f
        },
        easeInOutQuad: function (b, e, f, j, g) {
            return 1 > (e /= g / 2) ? j / 2 * e * e + f : -j / 2 * (--e * (e - 2) - 1) + f
        },
        easeInCubic: function (b, e, f, j, g) {
            return j * (e /= g) * e * e + f
        },
        easeOutCubic: function (b, e, f, j, g) {
            return j * ((e = e / g - 1) * e * e + 1) + f
        },
        easeInOutCubic: function (b, e, f, j, g) {
            return 1 > (e /= g / 2) ? j / 2 * e * e * e + f : j / 2 * ((e -= 2) * e * e + 2) + f
        },
        easeInQuart: function (b, e, f, j, g) {
            return j * (e /= g) * e * e * e + f
        },
        easeOutQuart: function (b, e, f, j, g) {
            return -j * ((e = e / g - 1) * e * e * e - 1) + f
        },
        easeInOutQuart: function (b, e, f, j, g) {
            return 1 > (e /= g / 2) ? j / 2 * e * e * e * e + f : -j / 2 * ((e -= 2) * e * e * e - 2) + f
        },
        easeInQuint: function (b, e, f, j, g) {
            return j * (e /= g) * e * e * e * e + f
        },
        easeOutQuint: function (b, e, f, j, g) {
            return j * ((e = e / g - 1) * e * e * e * e + 1) + f
        },
        easeInOutQuint: function (b, e, f, j, g) {
            return 1 > (e /= g / 2) ? j / 2 * e * e * e * e * e + f : j / 2 * ((e -= 2) * e * e * e * e + 2) + f
        },
        easeInSine: function (b, e, f, j, g) {
            return -j * Math.cos(e / g * (Math.PI / 2)) + j + f
        },
        easeOutSine: function (b, e, f, j, g) {
            return j * Math.sin(e / g * (Math.PI / 2)) + f
        },
        easeInOutSine: function (b, e, f, j, g) {
            return -j / 2 * (Math.cos(Math.PI * e / g) - 1) + f
        },
        easeInExpo: function (b, e, f, j, g) {
            return 0 == e ? f : j * Math.pow(2, 10 * (e / g - 1)) + f
        },
        easeOutExpo: function (b, e, f, j, g) {
            return e == g ? f + j : j * (-Math.pow(2, -10 * e / g) + 1) + f
        },
        easeInOutExpo: function (b, e, f, j, g) {
            return 0 == e ? f : e == g ? f + j : 1 > (e /= g / 2) ? j / 2 * Math.pow(2, 10 * (e - 1)) + f : j / 2 * (-Math.pow(2, -10 * --e) + 2) + f
        },
        easeInCirc: function (b, e, f, j, g) {
            return -j * (Math.sqrt(1 - (e /= g) * e) - 1) + f
        },
        easeOutCirc: function (b, e, f, j, g) {
            return j * Math.sqrt(1 - (e = e / g - 1) * e) + f
        },
        easeInOutCirc: function (b, e, f, j, g) {
            return 1 > (e /= g / 2) ? -j / 2 * (Math.sqrt(1 - e * e) - 1) + f : j / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + f
        },
        easeInElastic: function (b, e, f, j, g) {
            var b = 1.70158,
                k = 0,
                n = j;
            if (0 == e) return f;
            if (1 == (e /= g)) return f + j;
            k || (k = 0.3 * g);
            n < Math.abs(j) ? (n = j, b = k / 4) : b = k / (2 * Math.PI) * Math.asin(j / n);
            return -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * g - b) * 2 * Math.PI / k)) + f
        },
        easeOutElastic: function (b, e, f, j, g) {
            var b = 1.70158,
                k = 0,
                n = j;
            if (0 == e) return f;
            if (1 == (e /= g)) return f + j;
            k || (k = 0.3 * g);
            n < Math.abs(j) ? (n = j, b = k / 4) : b = k / (2 * Math.PI) * Math.asin(j / n);
            return n * Math.pow(2, -10 * e) * Math.sin((e * g - b) * 2 * Math.PI / k) + j + f
        },
        easeInOutElastic: function (b, e, f, j, g) {
            var b = 1.70158,
                k = 0,
                n = j;
            if (0 == e) return f;
            if (2 == (e /= g / 2)) return f + j;
            k || (k = g * 0.3 * 1.5);
            n < Math.abs(j) ? (n = j, b = k / 4) : b = k / (2 * Math.PI) * Math.asin(j / n);
            return 1 > e ? -0.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * g - b) * 2 * Math.PI / k) + f : 0.5 * n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * g - b) * 2 * Math.PI / k) + j + f
        },
        easeInBack: function (b, e, f, j, k, n) {
            n == g && (n = 1.70158);
            return j * (e /= k) * e * ((n + 1) * e - n) + f
        },
        easeOutBack: function (b, e, f, j, k, n) {
            n == g && (n = 1.70158);
            return j * ((e = e / k - 1) * e * ((n + 1) * e + n) + 1) + f
        },
        easeInOutBack: function (b, e, f, j, k, n) {
            n == g && (n = 1.70158);
            return 1 > (e /= k / 2) ? j / 2 * e * e * (((n *= 1.525) + 1) * e - n) + f : j / 2 * ((e -= 2) * e * (((n *= 1.525) + 1) * e + n) + 2) + f
        },
        easeInBounce: function (g, e, f, j, k) {
            return j - b.easing.easeOutBounce(g, k - e, 0, j, k) + f
        },
        easeOutBounce: function (b, e, f, j, g) {
            return (e /= g) < 1 / 2.75 ? j * 7.5625 * e * e + f : e < 2 / 2.75 ? j * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + f : e < 2.5 / 2.75 ? j * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + f : j * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + f
        },
        easeInOutBounce: function (g, e, f, j, k) {
            return e < k / 2 ? 0.5 * b.easing.easeInBounce(g, 2 * e, 0, j, k) + f : 0.5 * b.easing.easeOutBounce(g, 2 * e - k, 0, j, k) + 0.5 * j + f
        }
    })
}(jQuery);
var SpotifyRemote = function (b, g, q) {
    function s(b, d) {
        var e = sa;
        "" == e && (e = document.referrer);
        e = b.url + "&ref=" + encodeURIComponent(e);
        if ($.browser.msie && 8 <= parseInt($.browser.version, 10) && window.XDomainRequest) {
            var f = new XDomainRequest;
            b.abortTimer = setTimeout(function () {}, d + 1E3);
            f.onload = function () {
                clearTimeout(b.abortTimer);
                var d = f.responseText,
                    d = JSON.parse(d);
                b.success(d)
            };
            f.onerror = function () {
                clearTimeout(b.abortTimer);
                b.error && b.error(f.responseText)
            };
            f.ontimeout = function () {
                clearTimeout(b.abortTimer);
                b.error && b.error({
                    type: "timeout"
                })
            };
            f.timeout = d ? d : 5E3;
            f.open("get", e);
            f.send()
        } else b.url = e + "&cors=", b.dataType = "json", $.ajax(b)
    }
    function p() {
        if ("" === ka) for (var b = 0; 10 > b; ++b) ka += String.fromCharCode(Math.floor(26 * Math.random()) + 97);
        return "https://" + ka + ".spotilocal.com"
    }
    function k(b, e) {
        d && (e || (e = 5E3), E = window.open("http://" + location.host + "/openspotify/?spuri=" + b + "&closedelay=" + e, "sp", "status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=0,scrollbars=0,height=80,width=250,left=" + (screen.width - 250) / 2 + ",top=" + (screen.height - 80) / 2))
    }
    function n(b, d, e) {
        var f = p() + ":" + b + "/service/version.json?service=remote";
        s({
            url: f,
            cache: !1,
            success: function (e) {
                ea = b;
                ca = !0;
                E && (E.close(), E = null);
                J = !1 === e.running;
                C = !1;
                F(xa, {
                    running: e.running
                });
                !1 !== e.running && d && d()
            },
            error: function () {
                ca = !1;
                b < v ? n(++b, d, e) : (ka = "", e && e())
            }
        }, 5E3)
    }
    function B() {
        if (I) {
            var b = p() + ":" + ea + "/remote/login.json?csrf=" + A + "&oauth=" + I;
            s({
                url: b,
                cache: !1,
                success: function (b) {
                    b.error && "4102" == b.error.type && (I = "")
                }
            })
        }
    }
    function y(b) {
        var d = 60;
        b && (d = 1);
        b = p() + ":" + ea + "/remote/status.json?csrf=" + A + "&oauth=" + V + "&returnon=login%2Clogout%2Cplay%2Cpause%2Cerror%2Cap&returnafter=" + d;
        Y = !0;
        s({
            url: b,
            cache: !1,
            success: function (b) {
                if (b.error) if (!1 === b.running) J = !0, Y = !1;
                else if ("4110" == b.error.type) S = !1, setTimeout(function () {
                    y(!0)
                }, 1E3), B();
                else if ("4107" == b.error.type) t();
                else if ("4303" == b.error.type) y(!1);
                else {
                    f({
                        track: la,
                        playing: !1
                    });
                    try {
                        console.log("Error: " + b.error.type), console.log(b)
                    } catch (d) {}
                } else C = !0, fa = 0, S = !0, I = null, f(b), y(!1), "" !== Q && setTimeout(function () {
                    j()
                },
                2E3)
            },
            error: function () {
                ca = S = Y = !1;
                o()
            }
        }, 1E3 * d + 5E3)
    }
    function x(b) {
        var d = p() + ":" + ea + "/simplecsrf/token.json?";
        s({
            url: d,
            cache: !1,
            success: function (d) {
                A = d.token;
                b && b(!0)
            }
        })
    }
    function t() {
        x(y)
    }
    function o() {
        n(W, t, e)
    }
    function e() {
        if (fa < (C ? U : T)) {
            fa++;
            var b = 1E3 * fa;
            setTimeout(function () {
                o()
            }, 5E3 >= b ? b : 5E3)
        } else F(ya, {})
    }
    function f(b) {
        !b.track && la && (b = {
            track: la,
            playing: !1
        });
        b.track && (oa = b.playing, F(ga, {
            track: b.track,
            status: oa,
            playing_position: b.playing_position
        }), la = b.track)
    }
    function j() {
        if ("" !== Q) {
            var b = p() + ":" + ea + "/remote/play.json?csrf=" + A + "&oauth=" + V + "&uri=" + Q + "&context=" + ia;
            s({
                url: b,
                cache: !1,
                success: function (b) {
                    b.error ? (b.error.uri = Q, F(pa, b.error)) : f(b);
                    Q = ""
                },
                error: function () {}
            })
        }
    }
    function u() {
        Q = "";
        var b = p() + ":" + ea + "/remote/pause.json?pause=" + oa + "&csrf=" + A + "&oauth=" + V;
        s({
            url: b,
            cache: !1,
            success: function (b) {
                f(b)
            }
        })
    }
    function P() {
        var b = p() + ":" + ea + "/remote/open.json?";
        s({
            url: b,
            cache: !1,
            success: function (b) {
                b.running && (J = !1, L())
            }
        })
    }
    function L() {
        fa = 0;
        C = !1;
        ca ? J ? P() : Y ? S ? la && la.track_resource.uri == Q ? u() : j() : k("spotify:",
        400) : y(!0) : (ca || F(aa, {}), o())
    }
    function H(b, d) {
        void 0 === G[b] && (G[b] = []);
        G[b].push(d)
    }
    function D(b, d) {
        for (var e = G[b], f = e.length - 1; 0 <= f; --f) if (e[f] === d) return e.splice(f, 1), !0;
        return !1
    }
    function F(b, d) {
        for (var e in G[b]) listener = G[b][e], listener(d)
    }
    var A = "",
        V = b,
        I = g ? g : null,
        Q = "",
        ia = "",
        W = 4370,
        v = 4379,
        ea = W,
        ka = "",
        d = null == q ? !0 : q,
        S = !1,
        Y = !1,
        ca = !1,
        oa = !1,
        la = null,
        fa = 0,
        sa = "",
        C = !0,
        U = 2,
        T = 90,
        E, J = !1,
        G = {}, ga = "PLAY_MODE_CHANGED",
        aa = "ON_CLIENT_OPENING",
        xa = "ON_CLIENT_CONNECTED",
        ya = "ON_CLIENT_CONNECTION_FAILED",
        pa = "ON_CLIENT_ERROR";
    $.support.cors = !0;
    $(document).ready(function () {
        setTimeout(function () {
            o()
        }, 500)
    });
    return {
        addPlayModeChangedListener: function (b) {
            H(ga, b)
        },
        addOnClientOpeningListener: function (b) {
            H(aa, b)
        },
        addOnClientConnectedListener: function (b) {
            H(xa, b)
        },
        removeClientConnectedListener: function (b) {
            D(xa, b)
        },
        addOnClientConnectionFailedListener: function (b) {
            H(ya, b)
        },
        removeClientConnectionFailedListener: function (b) {
            D(ya, b)
        },
        addOnClientErrorListener: function (b) {
            H(pa, b)
        },
        playPauseTrack: function (b, d, e) {
            Q = "spotify:" + d + ":" + b;
            ia = e;
            L()
        },
        playSpotifyURI: function (b) {
            ia = Q = b;
            L()
        },
        getCurrentTrack: function () {
            return la
        },
        getCurrentURI: function () {
            return Q
        },
        isClientRunning: function () {
            return ca
        },
        isTrackPlaying: function () {
            return oa
        },
        openSpotifyURI: function (b, d) {
            k(b, d)
        },
        setReferrer: function (b) {
            sa = b
        }
    }
};
var seekerInterval, currentTrack, animations = [],
    animationRunning = !1,
    copyLinkSelectedAtLeastOnce = !1,
    embedCodeSelectedAtLeastOnce = !1,
    downloadViewShowedAtLeastOnce = !1,
    emailRegViewShowedAtLeastOnce = !1,
    mode = "mode-compact",
    ANIMATION_TYPE_SLIDE_LEFT = 0,
    ANIMATION_TYPE_SLIDE_RIGHT = 1,
    PLAYER_HEIGHT = 80,
    PLAYER_MIN_WIDTH = 250,
    ENGAGEVIEW_MIN_HEIGHT = 249,
    BORDER_THICKNESS = 1,
    DOUBLE_BORDER_THICKNESS = 2,
    HTTP_SPOTIFY_OPEN_BASE = "http://open.spotify.com";

function renderWidget() {
    var b = $(window).width(),
        g = $(window).height(),
        q;
    b >= PLAYER_MIN_WIDTH && g >= ENGAGEVIEW_MIN_HEIGHT + PLAYER_HEIGHT ? (mode = "mode-large", $("body").addClass(mode), q = g - PLAYER_HEIGHT, q < b ? b = q + BORDER_THICKNESS : q = b, $(".player, #mainContainer, #engageView").width(b - DOUBLE_BORDER_THICKNESS), $("#mainContainer, #engageView").height(q - BORDER_THICKNESS), $("#content").length && ($("#content").children(), $(".item").width($("#content").width()), $(".track-info").width(b - 33))) : ($("body").addClass(mode),
    $("#mainContainer, #engageView").hide(), b > PLAYER_MIN_WIDTH ? $(".player").width(b - DOUBLE_BORDER_THICKNESS) : $(".player").width(PLAYER_MIN_WIDTH - DOUBLE_BORDER_THICKNESS));
    g = $(".player").width() - PLAYER_HEIGHT;
    $(".player .meta .titles").width($(".player").width() - PLAYER_HEIGHT - 16 - 19);
    $(".player .meta .progress-bar-container").width(g - 16 - $(".player .logo").width());
    g = $("#content").children().first();
    updateStatusBar(g, !0);
    "mode-large" == mode && renderEngageView(contextType, g, q, b);
    "mode-large" === mode && !renderListView && ($("body").addClass("engage"), $("#engageView").show());
    b = Math.ceil(($(window).width() - b) / 2);
    $("#widgetContainer").css({
        opacity: 1,
        left: b
    });
    _populateShareInfo();
    $(".sadguy").css("left", Math.floor(($("#widgetContainer").width() - $(".sadguy").width()) / 2))
}

function renderEngageView(b, g, q, s) {
    if ("track" == b) $("#engageView").show(), $("body").addClass("engage"), $(".contact-shadow").hide(), setAlbumArt($("#engageView .cover-art-container .middle .album-art"), g.attr("data-ca")), $("#engageView .middle .album-art").css({
        width: s - DOUBLE_BORDER_THICKNESS,
        height: q - BORDER_THICKNESS
    }), $("#engageView .covergloss").css({
        position: "relative",
        top: -q,
        left: 0,
        width: s - DOUBLE_BORDER_THICKNESS,
        height: s
    }), $(".middle .album-art").addClass("image-radius"), $("#engageView .album-art.slide").hide();
    else {
        var p = Math.round(0.09 * q),
            b = Math.round(0.8858 * (q - p)),
            k = Math.round(0.015 * q),
            g = Math.round(1.16 * b),
            k = 2 * k + b,
            n = 3 * g + 8;
        $("#engageView .cover-art-container").css({
            width: n,
            height: k,
            position: "relative",
            left: Math.round((s - n) / 2) - 1,
            top: p
        });
        $("#engageView .cover-art-container .album-art-container").css({
            width: g,
            height: k
        });
        $("#engageView .cover-art-container .contact-shadow, #engageView .left, #engageView .middle, #engageView .right").css({
            width: g
        });
        $("#engageView .album-art").css({
            width: b - DOUBLE_BORDER_THICKNESS,
            height: b - DOUBLE_BORDER_THICKNESS
        });
        p = Math.ceil((g - b) / 2);
        s = Math.ceil((k - b) / 2);
        $("#engageView .middle .album-art").css({
            position: "relative",
            top: s,
            left: p
        });
        $("#engageView .middle .covergloss").css({
            position: "absolute",
            top: s,
            left: Math.round(($(".cover-art-container").width() - b + DOUBLE_BORDER_THICKNESS) / 2),
            width: b - DOUBLE_BORDER_THICKNESS,
            height: b
        });
        $("#engageView .left .album-art, #engageView .right .album-art").css({
            position: "relative",
            top: s
        });
        $("#engageView .left .album-art").css({
            left: 2 * p + 10
        });
        $("#engageView .right .album-art").css({
            left: -10
        });
        $("#engageView .album-art.slide").css({
            top: s - b
        });
        $("#engageView .left, #engageView .right").css("height", $("#engageView .middle").height());
        q = Math.round(0.1293 * q);
        $("#engageView .shelf").css({
            bottom: q,
            height: $("#engageView").height() - q
        });
        $("#engageView .cover-art-container .nav-btn").css({
            position: "relative",
            top: -(Math.round(k + $("#engageView .right .nav-btn").height()) / 2)
        });
        "white" == theme ? $(".contact-shadow").attr("src", shadowWhiteImg) : $(".contact-shadow").attr("src", shadowBlackImg);
        q = -(2 * b) + s;
        $(".middle .contact-shadow").css("top",
        q);
        $(".left .contact-shadow").css({
            top: q,
            left: Math.round((g - b - DOUBLE_BORDER_THICKNESS) / 2) - 6
        });
        $(".right .contact-shadow").css({
            top: q,
            left: -1 * Math.round((g - b - DOUBLE_BORDER_THICKNESS) / 2) + 6
        });
        $("#engageView").hide().hide()
    }
    1 == $("#content").children().length && $("#engageView .cover-art-container .left, #engageView .cover-art-container .right").css({
        opacity: 0,
        cursor: "default"
    })
}

function _populateShareInfo() {
    $("#embedcodeval").attr("value", '<iframe src="{0}" frameborder="0" allowtransparency="true" width="{1}" height="{2}"></iframe>'.replace("{0}", "https://" + document.location.host + "/?uri=" + dataContext).replace("{1}", $("#widgetContainer").width()).replace("{2}", $("#widgetContainer").height()));
    for (var b = dataContext.split(":"), g = HTTP_SPOTIFY_OPEN_BASE, q = 1; q < b.length; q++) g += "/" + b[q];
    $("#copyLinkVal").attr("value", g)
}

function updateStatusBar(b, g) {
    currentTrack = b;
    $(".player, #engageView").attr("rel", b.attr("data-track"));
    $(".player .meta .titles .track-name")[0].innerHTML = b.find(".track-title").attr("rel");
    $(".player .meta .titles .artist-name")[0].innerHTML = b.find(".artist").attr("rel");
    $(".player .album-art-container .album-art .art").attr("src") != b.attr("data-ca") && ($(".player .album-art-container .album-art .art").attr("src", defaultCoverImg), $(".player .album-art-container .album-art .art").attr("src", b.attr("data-ca")));
    $(".player .meta .progress-bar-container .time-spent")[0].innerHTML = b.attr("data-duration");
    var q = $(".player .meta .progress-bar-container").width() - ($(".player .meta .progress-bar-container .time-spent").width() + 6) - 4;
    $(".player .meta .progress-bar-container .skip-back").hide();
    $(".player .meta .progress-bar-container .skip-fwd").hide();
    beginAnimation();
    setAlbumArt($("#engageView .cover-art-container .middle .album-art"), b.attr("data-ca"), b.attr("data-index"));
    if ("track" != contextType) {
        $(".player .meta .progress-bar-container .context-title .title-content").width($(".player .meta .progress-bar-container").width() - 25);
        var s = getTrackGivenOffset(currentTrack, -1);
        s ? ($(".player .meta .progress-bar-container .buffer").css("margin-left", 1), $(".player .meta .progress-bar-container .skip-back").show(), q -= 16, setAlbumArt($("#engageView .cover-art-container .left .album-art"), s.attr("data-ca"), s.attr("data-index")), $("#engageView .cover-art-container .left").children().css("display", "block"), $("#engageView .cover-art-container .left").css("cursor", "pointer")) : ($(".player .meta .progress-bar-container .buffer").css("margin-left",
        4), $("#engageView .cover-art-container .left").children().css("display", "none"), $("#engageView .cover-art-container .left").css("cursor", "default"));
        (s = getTrackGivenOffset(currentTrack, 1)) ? (q -= 20, $(".player .meta .progress-bar-container .skip-fwd").show(), setAlbumArt($("#engageView .cover-art-container .right .album-art"), s.attr("data-ca"), s.attr("data-index")), $("#engageView .cover-art-container .right").children().css("display", "block"), $("#engageView .cover-art-container .right").css("cursor",
            "pointer")) : ($("#engageView .cover-art-container .right").children().css("display", "none"), $("#engageView .cover-art-container .right").css("cursor", "default"), q -= 4);
        g && b.length && (q -= 4 < b.attr("data-duration").length ? 26 : 20)
    } else $(".player .meta .progress-bar-container .buffer").css("margin-left", 4);
    $(".player .meta .progress-bar-container .buffer").width(q);
    endAnimation()
}

function setAlbumArt(b, g, q) {
    var s = $(b[0]),
        b = $(b[1]);
    g != s.attr("src") && s.attr({
        src: g,
        "data-index": q
    });
    b && (b.attr("rel", g), -1 == b.attr("data-index") ? (b.attr({
        src: g,
        "data-index": q
    }), b.css("opacity", 0.0010)) : b.attr("data-index") != q && 0 < animations.length && (g = animations[animations.length - 1], b.attr("data-index-new", q), g.type = parseInt(b.attr("data-index"), 10) < q ? ANIMATION_TYPE_SLIDE_LEFT : ANIMATION_TYPE_SLIDE_RIGHT, g.objects.push(b)))
}

function beginAnimation() {
    animation = {
        type: null,
        objects: []
    };
    animations.push(animation)
}

function endAnimation() {
    var b = animations.shift();
    if (!animationRunning && b && 0 < b.objects.length) {
        animationRunning = !0;
        var g = -6 + Math.ceil(($(".cover-art-container").width() - ($("#engageView .left").width() + $("#engageView .right").width()) - ($("#engageView .middle .album-art").width() + 2)) / 2),
            q = b.type == ANIMATION_TYPE_SLIDE_LEFT ? -1 : 1,
            s = function (g, k) {
                b.objects[g].attr("src", b.objects[g].attr("rel"));
                g + 1 == b.objects.length && ($("#engageView .middle .fixed, #engageView .contact-shadow").css("opacity", 1), $("#engageView .left .fixed, #engageView .right .fixed").css("opacity",
                0.55), $("#engageView .covergloss").css("opacity", 1), animationRunning = !1, endAnimation());
                b && b.objects[g].css({
                    left: k,
                    "z-index": 1,
                    opacity: 0.0010
                })
            }, p = function (b, k) {
                return {
                    left: q * (g + b.width() + 2) + k
                }
            };
        for (i = 0; i < b.objects.length; i++) b.objects[i].attr("data-index", b.objects[i].attr("data-index-new")), b.objects[i].css({
            opacity: 1,
            "z-index": 3
        });
        $("#engageView .fixed, #engageView .contact-shadow").css("opacity", 0.0010);
        3 > b.objects.length && $("#engageView .middle .fixed").css("opacity", 1);
        $("#engageView .covergloss").css("opacity",
        0.5);
        var k = parseInt(b.objects[0].css("left"), 10);
        b.objects[0].animate(p(b.objects[0], k), {
            duration: 150,
            easing: "easeInQuad",
            complete: function () {
                s(0, k)
            }
        });
        if (1 < b.objects.length) {
            var n = parseInt(b.objects[1].css("left"), 10);
            b.objects[1].animate(p(b.objects[1], n), {
                duration: 150,
                easing: "easeInQuad",
                complete: function () {
                    s(1, n)
                }
            })
        }
        if (2 < b.objects.length) {
            var B = parseInt(b.objects[2].css("left"), 10);
            b.objects[2].animate(p(b.objects[2], B), {
                duration: 150,
                easing: "easeInQuad",
                complete: function () {
                    s(2, B)
                }
            })
        }
    }
}

function getTrackGivenOffset(b, g) {
    var q = b.parent().children(),
        s = q.length - 1,
        p = Number(b.attr("data-index")),
        k = 0 === p ? -1 : p - 1,
        s = p == s ? -1 : p + 1;
    return 0 < g && -1 == s || 0 > g && -1 == k ? null : $(q[0 < g ? s : k])
}
function nextOrPreviousSong(b) {
    if (currentTrack) {
        var g = getTrackGivenOffset(currentTrack, b);
        g && (g.hasClass("unavailable") ? (currentTrack = g, nextOrPreviousSong(b)) : (updateStatusBar(g), window.triggerPlayPause && window.SPR && window.SPR.isTrackPlaying() && triggerPlayPause(g, null, !0)))
    }
}

function selectNextSong() {
    nextOrPreviousSong(1)
}
function selectPreviousSong() {
    nextOrPreviousSong(-1)
}

function showOverlay(b) {
    2 > b && !spotifyAvailableInCountry && (b = 3);
    (0 === b || 1 === b) && !downloadViewShowedAtLeastOnce ? (downloadViewShowedAtLeastOnce = !0, l(5)) : 3 === b && !emailRegViewShowedAtLeastOnce && (emailRegViewShowedAtLeastOnce = !0, l(6));
    $(".ihavespotify, .helpsupport").show();
    $(".install-tutorial-pop").hide();
    $('[class^="overlay-item-"]').css("display", "none");
    $(".overlay-item-" + b).css("display", "block");
    $("#overlays").overlay({
        mask: {
            loadSpeed: 200,
            color: null
        },
        closeOnClick: !1
    }).load();
    b = $("#widgetContainer").height();
    $(".overlays-container").css("display", "block");
    $("#overlays").overlay().load();
    $("#overlays").css({
        left: 0,
        top: 0
    });
    $(".overlays-main-container").css({
        height: b - DOUBLE_BORDER_THICKNESS,
        width: $("#widgetContainer").width()
    });
    b = Math.ceil(($(window).width() - $("#overlays").width() - DOUBLE_BORDER_THICKNESS) / 2);
    $("#overlays").css("left", b)
}

function closeOverlay() {
    $("#instructionBrowse").scrollable().stop();
    $("#overlays").overlay() && $("#overlays").overlay().isOpened && ($("#overlays").overlay().close(), $(".overlays-container").css("display", "none"))
}
function l(b) {
    $.ajax({
        url: "/l/?t=" + b + "&" + getViewPlayerString() + "&ref=" + encodeURIComponent(frameReferrer)
    })
}
function getView() {
    return contextType + "-" + (!renderListView || "track" == contextType ? "coverart" : "list")
}
function getGACategory() {
    return testLeg + "-" + getView() + "-" + mode
}

function getViewPlayerString() {
    return "v=" + getView() + "&p=" + mode
}
function isSpotified() {
    return "1" == Get_Cookie("spotified")
}
function setSpotified(b) {
    Set_Cookie("spotified", b ? "1" : "0", 365)
}
function Set_Cookie(b, g, q, s, p, k) {
    var n = new Date;
    n.setTime(n.getTime());
    q && (q *= 864E5);
    n = new Date(n.getTime() + q);
    document.cookie = b + "=" + escape(g) + (q ? ";expires=" + n.toGMTString() : "") + (s ? ";path=" + s : "") + (p ? ";domain=" + p : "") + (k ? ";secure" : "")
}

function Get_Cookie(b) {
    var g = document.cookie.split(";"),
        q = "",
        s = "",
        p = "";
    for (i = 0; i < g.length; i++) if (q = g[i].split("="), s = q[0].replace(/^\s+|\s+$/g, ""), s == b) return 1 < q.length && (p = unescape(q[1].replace(/^\s+|\s+$/g, ""))), p;
    return null
}
(function () {
    var b = jQuery.event.special,
        g = "D" + +new Date,
        q = "D" + (+new Date + 1);
    b.scrollstart = {
        setup: function () {
            var q, p = function (g) {
                var n = arguments;
                q ? clearTimeout(q) : (g.type = "scrollstart", jQuery.event.handle.apply(this, n));
                q = setTimeout(function () {
                    q = null
                }, b.scrollstop.latency)
            };
            jQuery(this).bind("scroll", p).data(g, p)
        },
        teardown: function () {
            jQuery(this).unbind("scroll", jQuery(this).data(g))
        }
    };
    b.scrollstop = {
        latency: 300,
        setup: function () {
            var g, p = function (k) {
                var n = this,
                    p = arguments;
                g && clearTimeout(g);
                g = setTimeout(function () {
                    g = null;
                    k.type = "scrollstop";
                    jQuery.event.handle.apply(n, p)
                }, b.scrollstop.latency)
            };
            jQuery(this).bind("scroll", p).data(q, p)
        },
        teardown: function () {
            jQuery(this).unbind("scroll", jQuery(this).data(q))
        }
    }
})();
$(".embed").click(function (b) {
    b.preventDefault();
    showOverlay(2);
    return !1
});
$(".list").click(function (b) {
    b.preventDefault();
    $("#engageView").is(":visible") ? ($("body").removeClass("engage"), $("#engageView").fadeOut(200)) : ($("body").addClass("engage"), $("#engageView").fadeIn(300));
    return !1
});
$("#engageView .cover-art-container .right, .player .meta .progress-bar-container .skip-fwd").click(function (b) {
    b.preventDefault();
    1 < $("#content").children().length && selectNextSong();
    return !1
});
$("#engageView .cover-art-container .left, .player .meta .progress-bar-container .skip-back").click(function (b) {
    b.preventDefault();
    1 < $("#content").children().length && selectPreviousSong();
    return !1
});
$("#embedcodeval").click(function () {
    this.focus();
    this.select();
    embedCodeSelectedAtLeastOnce || l(3);
    embedCodeSelectedAtLeastOnce = !0
});
$("#copyLinkVal").click(function () {
    this.focus();
    this.select();
    copyLinkSelectedAtLeastOnce || l(4);
    copyLinkSelectedAtLeastOnce = !0
});
$(".tc-link").click(function (b) {
    b.preventDefault();
    window.open("http://www.spotify.com/se/legal/end-user-agreement/");
    return !1
});
$(".pp-link").click(function (b) {
    b.preventDefault();
    window.open("http://www.spotify.com/se/legal/privacy-policy/");
    return !1
});
$(".embed-tc-link").click(function (b) {
    b.preventDefault();
    window.open("http://developer.spotify.com/technologies/spotify-play-button/terms-of-use/");
    return !1
});
$(".helpsupport").click(function (b) {
    b.preventDefault();
    window.open("http://www.spotify.com/se/help/overview/");
    return !1
});
$(".submitEmail").click(function (b) {
    b.preventDefault();
    b = $(".text-input-email").attr("value");
    "" !== b && ($.ajax({
        url: "/l/?t=10&email=" + b + "&ref=" + encodeURIComponent(frameReferrer) + "&" + getViewPlayerString()
    }), closeOverlay());
    return !1
});
$(".player .logo").click(function (b) {
    b.preventDefault();
    window.open("http://www.spotify.com/");
    return !1
});
/*
 Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 Licensed under the MIT License (LICENSE.txt).

 Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 Thanks to: Seamus Leahy for adding deltaX and deltaY

 Version: 3.0.6

 Requires: 1.2.2+
*/
(function (b) {
    function g(g) {
        var k = g || window.event,
            n = [].slice.call(arguments, 1),
            q = 0,
            s = 0,
            x = 0,
            g = b.event.fix(k);
        g.type = "mousewheel";
        k.wheelDelta && (q = k.wheelDelta / 120);
        k.detail && (q = -k.detail / 3);
        x = q;
        void 0 !== k.axis && k.axis === k.HORIZONTAL_AXIS && (x = 0, s = -1 * q);
        void 0 !== k.wheelDeltaY && (x = k.wheelDeltaY / 120);
        void 0 !== k.wheelDeltaX && (s = -1 * k.wheelDeltaX / 120);
        n.unshift(g, q, s, x);
        return (b.event.dispatch || b.event.handle).apply(this, n)
    }
    var q = ["DOMMouseScroll", "mousewheel"];
    if (b.event.fixHooks) for (var s = q.length; s;) b.event.fixHooks[q[--s]] = b.event.mouseHooks;
    b.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) for (var b = q.length; b;) this.addEventListener(q[--b], g, !1);
            else this.onmousewheel = g
        },
        teardown: function () {
            if (this.removeEventListener) for (var b = q.length; b;) this.removeEventListener(q[--b], g, !1);
            else this.onmousewheel = null
        }
    };
    b.fn.extend({
        mousewheel: function (b) {
            return b ? this.bind("mousewheel", b) : this.trigger("mousewheel")
        },
        unmousewheel: function (b) {
            return this.unbind("mousewheel", b)
        }
    })
})(jQuery);
/*
 jScrollPane - v2.0.0beta11 - 2011-07-04
 http://jscrollpane.kelvinluck.com/

 Copyright (c) 2010 Kelvin Luck
 Dual licensed under the MIT and GPL licenses.
*/
(function (b, g, q) {
    b.fn.jScrollPane = function (g) {
        function p(g, n) {
            function p(f) {
                var j, n, o, u, x, A = !1,
                    D = !1;
                C = f;
                if (T === q) u = g.scrollTop(), x = g.scrollLeft(), g.css({
                    overflow: "hidden",
                    padding: 0
                }), E = g.innerWidth() + Ea, J = g.innerHeight(), g.width(E), T = b('<div class="jspPane" />').css("padding", ab).append(g.children()), G = b('<div class="jspContainer" />').css({
                    width: E + "px",
                    height: J + "px"
                }).append(T).appendTo(g);
                else {
                    g.css("width", "");
                    A = C.stickToBottom && ea();
                    D = C.stickToRight && ka();
                    if (o = g.innerWidth() + Ea != E || g.outerHeight() != J) E = g.innerWidth() + Ea, J = g.innerHeight(), G.css({
                        width: E + "px",
                        height: J + "px"
                    });
                    if (!o && bb == ga && T.outerHeight() == aa) {
                        g.width(E);
                        return
                    }
                    bb = ga;
                    T.css("width", "");
                    g.width(E);
                    G.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                T.css("overflow", "auto");
                ga = f.contentWidth ? f.contentWidth : T[0].scrollWidth;
                aa = T[0].scrollHeight;
                T.css("overflow", "");
                xa = ga / E;
                ya = aa / J;
                pa = 1 < ya;
                K = 1 < xa;
                if (!K && !pa) g.removeClass("jspScrollable"), T.css({
                    top: 0,
                    width: G.width() - Ea
                }), G.unbind(cb), T.find(":input,a").unbind("focus.jsp"),
                g.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), L(), la();
                else {
                    g.addClass("jspScrollable");
                    if (f = C.maintainPosition && (ba || ha)) j = W(), n = v();
                    s();
                    t();
                    e();
                    f && (Q(D ? ga - E : j, !1), I(A ? aa - J : n, !1));
                    Y();
                    d();
                    sa();
                    C.enableKeyboardNavigation && ca();
                    C.clickOnTrack && P();
                    oa();
                    C.hijackInternalLinks && fa()
                }
                C.autoReinitialise && !Qa ? Qa = setInterval(function () {
                    p(C)
                }, C.autoReinitialiseDelay) : !C.autoReinitialise && Qa && clearInterval(Qa);
                u && g.scrollTop(0) && I(u, !1);
                x && g.scrollLeft(0) && Q(x, !1);
                g.trigger("jsp-initialised", [K || pa])
            }
            function s() {
                pa && (G.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'), b('<div class="jspDragBottom" />'))), b('<div class="jspCap jspCapBottom" />'))), Xa = G.find(">.jspVerticalBar"), za = Xa.find(">.jspTrack"), ja = za.find(">.jspDrag"), C.showArrows && (La = b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", j(0, -1)).bind("click.jsp", S), Ka = b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",
                j(0, 1)).bind("click.jsp", S), C.arrowScrollOnHover && (La.bind("mouseover.jsp", j(0, -1, La)), Ka.bind("mouseover.jsp", j(0, 1, Ka))), f(za, C.verticalArrowPositions, La, Ka)), Da = J, G.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                    Da = Da - b(this).outerHeight()
                }), ja.hover(function () {
                    ja.addClass("jspHover")
                }, function () {
                    ja.removeClass("jspHover")
                }).bind("mousedown.jsp", function (d) {
                    b("html").bind("dragstart.jsp selectstart.jsp", S);
                    ja.addClass("jspActive");
                    var e = d.pageY - ja.position().top;
                    b("html").bind("mousemove.jsp", function (b) {
                        D(b.pageY - e, false)
                    }).bind("mouseup.jsp mouseleave.jsp", H);
                    return false
                }), x())
            }
            function x() {
                za.height(Da + "px");
                ba = 0;
                $a = C.verticalGutter + za.outerWidth();
                T.width(E - $a - Ea);
                try {
                    0 === Xa.position().left && T.css("margin-left", $a + "px")
                } catch (b) {}
            }
            function t() {
                K && (G.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'), b('<div class="jspDragRight" />'))),
                b('<div class="jspCap jspCapRight" />'))), Ya = G.find(">.jspHorizontalBar"), ra = Ya.find(">.jspTrack"), qa = ra.find(">.jspDrag"), C.showArrows && (Oa = b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", j(-1, 0)).bind("click.jsp", S), Pa = b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", j(1, 0)).bind("click.jsp", S), C.arrowScrollOnHover && (Oa.bind("mouseover.jsp", j(-1, 0, Oa)), Pa.bind("mouseover.jsp", j(1, 0, Pa))), f(ra, C.horizontalArrowPositions, Oa, Pa)), qa.hover(function () {
                    qa.addClass("jspHover")
                },

                function () {
                    qa.removeClass("jspHover")
                }).bind("mousedown.jsp", function (d) {
                    b("html").bind("dragstart.jsp selectstart.jsp", S);
                    qa.addClass("jspActive");
                    var e = d.pageX - qa.position().left;
                    b("html").bind("mousemove.jsp", function (b) {
                        A(b.pageX - e, false)
                    }).bind("mouseup.jsp mouseleave.jsp", H);
                    return false
                }), ua = G.innerWidth(), o())
            }
            function o() {
                G.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    ua -= b(this).outerWidth()
                });
                ra.width(ua + "px");
                ha = 0
            }
            function e() {
                if (K && pa) {
                    var d = ra.outerHeight(),
                        e = za.outerWidth();
                    Da -= d;
                    b(Ya).find(">.jspCap:visible,>.jspArrow").each(function () {
                        ua += b(this).outerWidth()
                    });
                    ua -= e;
                    J -= e;
                    E -= d;
                    ra.parent().append(b('<div class="jspCorner" />').css("width", d + "px"));
                    x();
                    o()
                }
                K && T.width(G.outerWidth() - Ea + "px");
                aa = T.outerHeight();
                ya = aa / J;
                K && (wa = Math.ceil(1 / xa * ua), wa > C.horizontalDragMaxWidth ? wa = C.horizontalDragMaxWidth : wa < C.horizontalDragMinWidth && (wa = C.horizontalDragMinWidth), qa.width(wa + "px"), ta = ua - wa, V(ha));
                pa && (Aa = Math.ceil(1 / ya * Da), Aa > C.verticalDragMaxHeight ? Aa = C.verticalDragMaxHeight : Aa < C.verticalDragMinHeight && (Aa = C.verticalDragMinHeight), ja.height(Aa + "px"), da = Da - Aa, F(ba))
            }
            function f(b, d, e, f) {
                var g = "before",
                    j = "after";
                "os" == d && (d = /Mac/.test(navigator.platform) ? "after" : "split");
                d == g ? j = d : d == j && (g = d, d = e, e = f, f = d);
                b[g](e)[j](f)
            }
            function j(b, d, e) {
                return function () {
                    u(b, d, this, e);
                    this.blur();
                    return !1
                }
            }
            function u(d, e, f, g) {
                var f = b(f).addClass("jspActive"),
                    j, k, n = !0,
                    o = function () {
                        0 !== d && U.scrollByX(d * C.arrowButtonSpeed);
                        0 !== e && U.scrollByY(e * C.arrowButtonSpeed);
                        k = setTimeout(o, n ? C.initialDelay : C.arrowRepeatFreq);
                        n = !1
                    };
                o();
                j = g ? "mouseout.jsp" : "mouseup.jsp";
                g = g || b("html");
                g.bind(j, function () {
                    f.removeClass("jspActive");
                    k && clearTimeout(k);
                    k = null;
                    g.unbind(j)
                })
            }
            function P() {
                L();
                pa && za.bind("mousedown.jsp", function (d) {
                    if (d.originalTarget === q || d.originalTarget == d.currentTarget) {
                        var e = b(this),
                            f = e.offset(),
                            g = d.pageY - f.top - ba,
                            j, k = !0,
                            n = function () {
                                var b = e.offset(),
                                    b = d.pageY - b.top - Aa / 2,
                                    f = J * C.scrollPagePercent,
                                    p = da * f / (aa - J);
                                if (0 > g) ba - p > b ? U.scrollByY(-f) : D(b);
                                else if (0 < g) ba + p < b ? U.scrollByY(f) : D(b);
                                else {
                                    o();
                                    return
                                }
                                j = setTimeout(n, k ? C.initialDelay : C.trackClickRepeatFreq);
                                k = !1
                            }, o = function () {
                                j && clearTimeout(j);
                                j = null;
                                b(document).unbind("mouseup.jsp", o)
                            };
                        n();
                        b(document).bind("mouseup.jsp", o);
                        return !1
                    }
                });
                K && ra.bind("mousedown.jsp", function (d) {
                    if (d.originalTarget === q || d.originalTarget == d.currentTarget) {
                        var e = b(this),
                            f = e.offset(),
                            g = d.pageX - f.left - ha,
                            j, k = !0,
                            n = function () {
                                var b = e.offset(),
                                    b = d.pageX - b.left - wa / 2,
                                    f = E * C.scrollPagePercent,
                                    p = ta * f / (ga - E);
                                if (0 > g) ha - p > b ? U.scrollByX(-f) : A(b);
                                else if (0 < g) ha + p < b ? U.scrollByX(f) : A(b);
                                else {
                                    o();
                                    return
                                }
                                j = setTimeout(n, k ? C.initialDelay : C.trackClickRepeatFreq);
                                k = !1
                            }, o = function () {
                                j && clearTimeout(j);
                                j = null;
                                b(document).unbind("mouseup.jsp", o)
                            };
                        n();
                        b(document).bind("mouseup.jsp", o);
                        return !1
                    }
                })
            }
            function L() {
                ra && ra.unbind("mousedown.jsp");
                za && za.unbind("mousedown.jsp")
            }
            function H() {
                b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                ja && ja.removeClass("jspActive");
                qa && qa.removeClass("jspActive")
            }
            function D(b,
            d) {
                pa && ((0 > b ? b = 0 : b > da && (b = da), d === q && (d = C.animateScroll), d) ? U.animate(ja, "top", b, F) : (ja.css("top", b), F(b)))
            }
            function F(b) {
                b === q && (b = ja.position().top);
                G.scrollTop(0);
                ba = b;
                var d = 0 === ba,
                    e = ba == da,
                    b = -(b / da) * (aa - J);
                if (ma != d || na != e) ma = d, na = e, g.trigger("jsp-arrow-change", [ma, na, Ja, Ra]);
                C.showArrows && (La[d ? "addClass" : "removeClass"]("jspDisabled"), Ka[e ? "addClass" : "removeClass"]("jspDisabled"));
                T.css("top", b);
                g.trigger("jsp-scroll-y", [-b, d, e]).trigger("scroll")
            }
            function A(b, d) {
                K && ((0 > b ? b = 0 : b > ta && (b = ta), d === q && (d = C.animateScroll), d) ? U.animate(qa, "left", b, V) : (qa.css("left", b), V(b)))
            }
            function V(b) {
                b === q && (b = qa.position().left);
                G.scrollTop(0);
                ha = b;
                var d = 0 === ha,
                    e = ha == ta,
                    b = -(b / ta) * (ga - E);
                if (Ja != d || Ra != e) Ja = d, Ra = e, g.trigger("jsp-arrow-change", [ma, na, Ja, Ra]);
                C.showArrows && (Oa[d ? "addClass" : "removeClass"]("jspDisabled"), Pa[e ? "addClass" : "removeClass"]("jspDisabled"));
                T.css("left", b);
                g.trigger("jsp-scroll-x", [-b, d, e]).trigger("scroll")
            }
            function I(b, d) {
                D(b / (aa - J) * da, d)
            }
            function Q(b, d) {
                A(b / (ga - E) * ta, d)
            }
            function ia(d,
            e, f) {
                var g, j, k = 0,
                    n = 0,
                    o, p, q;
                try {
                    g = b(d)
                } catch (s) {
                    return
                }
                j = g.outerHeight();
                d = g.outerWidth();
                G.scrollTop(0);
                for (G.scrollLeft(0); !g.is(".jspPane");) if (k += g.position().top, n += g.position().left, g = g.offsetParent(), /^body|html$/i.test(g[0].nodeName)) return;
                g = v();
                o = g + J;
                k < g || e ? p = k - C.verticalGutter : k + j > o && (p = k - J + j + C.verticalGutter);
                p && I(p, f);
                k = W();
                p = k + E;
                n < k || e ? q = n - C.horizontalGutter : n + d > p && (q = n - E + d + C.horizontalGutter);
                q && Q(q, f)
            }
            function W() {
                return -T.position().left
            }
            function v() {
                return -T.position().top
            }
            function ea() {
                var b = aa - J;
                return 20 < b && 10 > b - v()
            }
            function ka() {
                var b = ga - E;
                return 20 < b && 10 > b - W()
            }
            function d() {
                G.unbind(cb).bind(cb, function (b, d, e, f) {
                    b = ha;
                    d = ba;
                    U.scrollBy(e * C.mouseWheelSpeed, -f * C.mouseWheelSpeed, !1);
                    return b == ha && d == ba
                })
            }
            function S() {
                return !1
            }
            function Y() {
                T.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (b) {
                    ia(b.target, !1)
                })
            }
            function ca() {
                function d() {
                    var b = ha,
                        g = ba;
                    switch (e) {
                        case 40:
                            U.scrollByY(C.keyboardSpeed, !1);
                            break;
                        case 38:
                            U.scrollByY(-C.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            U.scrollByY(J * C.scrollPagePercent, !1);
                            break;
                        case 33:
                            U.scrollByY(-J * C.scrollPagePercent, !1);
                            break;
                        case 39:
                            U.scrollByX(C.keyboardSpeed, !1);
                            break;
                        case 37:
                            U.scrollByX(-C.keyboardSpeed, !1)
                    }
                    return f = b != ha || g != ba
                }
                var e, f, j = [];
                K && j.push(Ya[0]);
                pa && j.push(Xa[0]);
                T.focus(function () {
                    g.focus()
                });
                g.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (g) {
                    if (!(g.target !== this && (!j.length || !b(g.target).closest(j).length))) {
                        var k = ha,
                            n = ba;
                        switch (g.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                e = g.keyCode;
                                d();
                                break;
                            case 35:
                                I(aa - J);
                                e = null;
                                break;
                            case 36:
                                I(0), e = null
                        }
                        f = g.keyCode == e && k != ha || n != ba;
                        return !f
                    }
                }).bind("keypress.jsp", function (b) {
                    b.keyCode == e && d();
                    return !f
                });
                C.hideFocus ? (g.css("outline", "none"), "hideFocus" in G[0] && g.attr("hideFocus", !0)) : (g.css("outline", ""), "hideFocus" in G[0] && g.attr("hideFocus", !1))
            }
            function oa() {
                if (location.hash && 1 < location.hash.length) {
                    var d, e, f = escape(location.hash);
                    try {
                        d = b(f)
                    } catch (g) {
                        return
                    }
                    d.length && T.find(f) && (0 === G.scrollTop() ? e = setInterval(function () {
                        0 < G.scrollTop() && (ia(f, !0), b(document).scrollTop(G.position().top), clearInterval(e))
                    }, 50) : (ia(f, !0), b(document).scrollTop(G.position().top)))
                }
            }
            function la() {
                b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")
            }
            function fa() {
                la();
                b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack", function () {
                    var b = this.href.split("#");
                    if (1 < b.length && (b = b[1], 0 < b.length && 0 < T.find("#" + b).length)) return ia("#" + b, !0), !1
                })
            }
            function sa() {
                var b, d, e, f, g, j = !1;
                G.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",

                function (k) {
                    k = k.originalEvent.touches[0];
                    b = W();
                    d = v();
                    e = k.pageX;
                    f = k.pageY;
                    g = !1;
                    j = !0
                }).bind("touchmove.jsp", function (k) {
                    if (j) {
                        var k = k.originalEvent.touches[0],
                            n = ha,
                            o = ba;
                        U.scrollTo(b + e - k.pageX, d + f - k.pageY);
                        g = g || 5 < Math.abs(e - k.pageX) || 5 < Math.abs(f - k.pageY);
                        return n == ha && o == ba
                    }
                }).bind("touchend.jsp", function () {
                    j = !1
                }).bind("click.jsp-touchclick", function () {
                    if (g) return g = !1
                })
            }
            var C, U = this,
                T, E, J, G, ga, aa, xa, ya, pa, K, ja, da, ba, qa, ta, ha, Xa, za, $a, Da, Aa, La, Ka, Ya, ra, ua, wa, Oa, Pa, Qa, ab, Ea, bb, ma = !0,
                Ja = !0,
                na = !1,
                Ra = !1,
                Ma = g.clone(!1, !1).empty(),
                cb = b.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            ab = g.css("paddingTop") + " " + g.css("paddingRight") + " " + g.css("paddingBottom") + " " + g.css("paddingLeft");
            Ea = (parseInt(g.css("paddingLeft"), 10) || 0) + (parseInt(g.css("paddingRight"), 10) || 0);
            b.extend(U, {
                reinitialise: function (d) {
                    d = b.extend({}, C, d);
                    p(d)
                },
                scrollToElement: function (b, d, e) {
                    ia(b, d, e)
                },
                scrollTo: function (b, d, e) {
                    Q(b, e);
                    I(d, e)
                },
                scrollToX: function (b, d) {
                    Q(b, d)
                },
                scrollToY: function (b, d) {
                    I(b, d)
                },
                scrollToPercentX: function (b,
                d) {
                    Q(b * (ga - E), d)
                },
                scrollToPercentY: function (b, d) {
                    I(b * (aa - J), d)
                },
                scrollBy: function (b, d, e) {
                    U.scrollByX(b, e);
                    U.scrollByY(d, e)
                },
                scrollByX: function (b, d) {
                    var e = (W() + Math[0 > b ? "floor" : "ceil"](b)) / (ga - E);
                    A(e * ta, d)
                },
                scrollByY: function (b, d) {
                    var e = (v() + Math[0 > b ? "floor" : "ceil"](b)) / (aa - J);
                    D(e * da, d)
                },
                positionDragX: function (b, d) {
                    A(b, d)
                },
                positionDragY: function (b, d) {
                    D(b, d)
                },
                animate: function (b, d, e, f) {
                    var g = {};
                    g[d] = e;
                    b.animate(g, {
                        duration: C.animateDuration,
                        easing: C.animateEase,
                        queue: !1,
                        step: f
                    })
                },
                getContentPositionX: function () {
                    return W()
                },
                getContentPositionY: function () {
                    return v()
                },
                getContentWidth: function () {
                    return ga
                },
                getContentHeight: function () {
                    return aa
                },
                getPercentScrolledX: function () {
                    return W() / (ga - E)
                },
                getPercentScrolledY: function () {
                    return v() / (aa - J)
                },
                getIsScrollableH: function () {
                    return K
                },
                getIsScrollableV: function () {
                    return pa
                },
                getContentPane: function () {
                    return T
                },
                scrollToBottom: function (b) {
                    D(da, b)
                },
                hijackInternalLinks: function () {
                    fa()
                },
                destroy: function () {
                    var b = v(),
                        d = W();
                    g.removeClass("jspScrollable").unbind(".jsp");
                    g.replaceWith(Ma.append(T.children()));
                    Ma.scrollTop(b);
                    Ma.scrollLeft(d)
                }
            });
            p(n)
        }
        g = b.extend({}, b.fn.jScrollPane.defaults, g);
        b.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            g[this] = g[this] || g.speed
        });
        return this.each(function () {
            var k = b(this),
                n = k.data("jsp");
            n ? n.reinitialise(g) : (n = new p(k, g), k.data("jsp", n))
        })
    };
    b.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: q,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: 0.8
    }
})(jQuery, this);
var SPR, durationTimer, clickedTrack, utilFrame, hideSpinnerTimeout, playButtonClickedAtLeastOnce = !1,
    trackStartedPlayingAtLeastOnce = !1,
    iHaveSpotifyClickedAtLeastOnce = !1,
    installTutorial, MacOS = "MacOS",
    WindowsOS = "WindowsOS",
    OSName = WindowsOS; - 1 != navigator.appVersion.indexOf("Mac") && (OSName = MacOS);

function initIntructionSlider() {
    var b = MacOS;
    OSName == MacOS && (b = WindowsOS);
    $(".items." + b).remove();
    $("#instructionBrowse").scrollable({
        circular: !0,
        mousewheel: !1
    }).navigator().autoscroll({
        interval: 3E3
    });
    $("#instructionBrowse").scrollable().stop()
}
function hideInstallFlow() {
    setSpotified(!0);
    closeOverlay();
    installTutorial && installTutorial.close()
}
function showNotificationBar(b) {
    $("#notifBar #message")[0].innerHTML = b;
    $("#notifBar").animate({
        top: 0
    }, "fast")
}

function hideNotificationBar() {
    $("#notifBar").animate({
        top: -80
    }, "fast")
}
function triggerWebPlayer() {
    utilFrame.src = "player.php?uri=" + SPR.getCurrentURI()
}

function triggerPlayPause(b, g, q) {
    g && g.preventDefault();
    hideNotificationBar();
    if (q && SPR.getCurrentTrack() && 0 === $("." + SPR.getCurrentTrack().track_resource.uri.split(":")[2]).length) return !1;
    playButtonClickedAtLeastOnce || (playButtonClickedAtLeastOnce = !0, l(1));
    clickedTrack = b;
    hideSpinnerTimeout && (clearTimeout(hideSpinnerTimeout), hideSpinnerTimeout = null);
    setTimeout(function () {
        if (clickedTrack) {
            hideSpinners();
            clickedTrack.attr("class", clickedTrack.attr("class") + " loading");
            setTimeout(function () {
                clickedTrack && clickedTrack.removeClass("loading")
            }, 6E4)
        }
    }, 300);
    SPR.playPauseTrack(b.attr("data-track"), b.attr("rel"), context);
    return !1
}

function changePlayModeForTrack(b) {
    var g = b.track,
        q = b.status;
    clickedTrack = null;
    trackId = getTrackId(g);
    seekerInterval && (clearInterval(seekerInterval), seekerInterval = null);
    durationTimer && (clearInterval(durationTimer), durationTimer = null);
    $(".music-playing").removeClass("music-playing").addClass("music-paused");
    g = $(".track-" + trackId);
    if (0 < g.length && (q && ($(".player").removeClass("music-paused").addClass("music-playing"), updateStatusBar(g)), $(".active").removeClass("active"), g.attr("class", q ? "track-" + trackId +
        " music-playing active item " + contextType : "track-" + trackId + " music-paused active item " + contextType), g.each(function (b, g) {
        $(g)
    }), q)) {
        $("#engageView").removeClass("music-paused").addClass("music-playing");
        !trackStartedPlayingAtLeastOnce && playButtonClickedAtLeastOnce && (trackStartedPlayingAtLeastOnce = !0, l(2));
        var s = $(".player .meta .progress-bar-container .buffer").width(),
            q = Number(g.attr("data-duration-ms")),
            g = Math.floor(q / s);
        $(".music-playing .seeker").width(Math.floor(s / q * 1E3 * b.playing_position));
        seekerInterval = setInterval(function () {
            var b = $(".music-playing .seeker").width();
            b < s && $(".music-playing .seeker").width(b + 1)
        }, g);
        var p = 1E3 * b.playing_position;
        $(".player .meta .progress-bar-container .time-spent")[0].innerHTML = readableTime(p);
        durationTimer = setInterval(function () {
            p = p + 1E3;
            $(".player .meta .progress-bar-container .time-spent")[0].innerHTML = readableTime(p)
        }, 1E3)
    }
}

function onClientOpening() {
    isSpotified() ? openClient() : Spotify.RegistrationModule.isCompatible() && spotifyAvailableInCountry ? Spotify.RegistrationModule.open("SPB", frameReferrer, frameReferrer) : setTimeout(function () {
        showOverlay(0)
    }, 500)
}
function onClientConnected() {
    hideInstallFlow()
}
function onClientError(b) {
    showNotificationBar(b.message);
    "4303" == b.type && $(".track-" + b.uri.split(":")[2]).addClass("unavailable")
}

function setupSpotifyRemote() {
    debugger;
    SPR = SpotifyRemote(tokenData);
    SPR.setReferrer(frameReferrer);
    SPR.addPlayModeChangedListener(changePlayModeForTrack);
    SPR.addOnClientOpeningListener(onClientOpening);
    SPR.addOnClientConnectedListener(onClientConnected);
    SPR.addOnClientErrorListener(onClientError)
}
function openContextInSpotify() {
    isSpotified() ? "track" != contextType && SPR.openSpotifyURI(dataContext, 500) : showOverlay(0)
}

function readableTime(b) {
    var g = b / 1E3 / 60,
        b = Math.floor(g),
        g = Math.round(60 * (g - b));
    60 == g && (b++, g = 0);
    return 10 > g ? b + ":0" + g : b + ":" + g
}
function openClient() {
    setTimeout(function () {
        SPR.isClientRunning() || showOverlay(1)
    }, 1E4);
    SPR.openSpotifyURI("spotify:", 1E4)
}
window.attachEvent ? window.attachEvent("onmessage", xdmMsg) : window.addEventListener("message", xdmMsg, !1);

function xdmMsg(b) {
    isSpotified() || setSpotified("yes" == b.data)
}

function getTrackId(b) {
    if (!b) return "";
    if ("ad" != b.track_type) {
        if (0 < $(".track-" + b.track_resource.uri.split(":")[2]).length) return b.track_resource.uri.split(":")[2];
        if (0 < $(".track-" + b.artist_resource.uri.split(":")[2]).length) return b.artist_resource.uri.split(":")[2];
        if (0 < $(".track-" + b.album_resource.uri.split(":")[2]).length) return b.album_resource.uri.split(":")[2]
    }
    return ""
}

function showInstallGuide() {
    var b = "?ref=" + encodeURIComponent(frameReferrer) + "&t=" + testLeg,
        g = (screen.width - 973) / 2,
        q = (screen.height - 400) / 2;
    if (OSName == MacOS || OSName == WindowsOS) installTutorial = window.open("https://" + location.host + "/download/tutorial/" + b, "InstallGuide", "status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=0,scrollbars=0,height=400,width=973,left=" + g + ",top=" + q)
}

function triggerSpotifyDownload() {
    var b = "?ref=" + encodeURIComponent(frameReferrer) + "&t=" + testLeg;
    utilFrame.src = "/download" + b;
    showInstallGuide()
}
function hideSpinners() {
    $(".loading").length && $(".loading").removeClass("loading")
}
$(document).ready(function () {
    initIntructionSlider();
    setupSpotifyRemote();
    renderWidget();
    utilFrame = document.createElement("iframe");
    utilFrame.id = "spotifyUtilFrame";
    $(utilFrame).css("display", "none");
    document.body.appendChild(utilFrame);
    "track" != contextType && $("#mainContainer").jScrollPane()
});
$(".player .album-art-container").click(function (b) {
    triggerPlayPause($(".track-" + $(this).parent().attr("rel")), b)
});
$(".item").click(function (b) {
    triggerPlayPause($(this), b)
});
$("#engageView .middle").click(function (b) {
    triggerPlayPause($(".track-" + $(this).parent().parent().parent().attr("rel")), b)
});
$(".ihavespotify").click(function (b) {
    b.preventDefault();
    hideInstallFlow();
    openClient();
    iHaveSpotifyClickedAtLeastOnce || (iHaveSpotifyClickedAtLeastOnce = !0, l(7));
    return !1
});
$(".download-spotify").click(function (b) {
    b.preventDefault();
    triggerSpotifyDownload();
    return !1
});
$("#notifBar .notifCloseButton").click(function () {
    hideNotificationBar()
});
$("#widgetContainer").hover(function () {
    $(".player .meta .titles").animate({
        width: $(".player").width() - PLAYER_HEIGHT - 8 - $(".right-bar-buttons").width() - 8
    }, 100)
}, function () {
    $(".player .meta .titles").animate({
        width: $(".player").width() - PLAYER_HEIGHT - 8 - 8 - 19
    }, 100)
});
$(".player, .status-header, #mainContainer, #engageView, .overlay-item-2").mousedown(function (b) {
    b.preventDefault()
});
$(".overlay-close-button").click(function () {
    hideSpinners();
    closeOverlay()
});