window.jQuery || function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        var i = [],
            n = t.document,
            r = i.slice,
            o = i.concat,
            s = i.push,
            a = i.indexOf,
            l = {},
            c = l.toString,
            u = l.hasOwnProperty,
            d = {},
            h = "2.2.4",
            p = function(t, e) {
                return new p.fn.init(t, e)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            g = /^-ms-/,
            m = /-([\da-z])/gi,
            v = function(t, e) {
                return e.toUpperCase()
            };

        function y(t) {
            var e = !!t && "length" in t && t.length,
                i = p.type(t);
            return "function" !== i && !p.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        p.fn = p.prototype = {
            jquery: h,
            constructor: p,
            selector: "",
            length: 0,
            toArray: function() {
                return r.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : r.call(this)
            },
            pushStack: function(t) {
                var e = p.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return p.each(this, t)
            },
            map: function(t) {
                return this.pushStack(p.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(r.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: s,
            sort: i.sort,
            splice: i.splice
        }, p.extend = p.fn.extend = function() {
            var t, e, i, n, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || p.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = s[e], s !== (n = t[e]) && (c && n && (p.isPlainObject(n) || (r = p.isArray(n))) ? (r ? (r = !1, o = i && p.isArray(i) ? i : []) : o = i && p.isPlainObject(i) ? i : {}, s[e] = p.extend(c, o, n)) : void 0 !== n && (s[e] = n));
            return s
        }, p.extend({
            expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === p.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !p.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== p.type(t) || t.nodeType || p.isWindow(t)) return !1;
                if (t.constructor && !u.call(t, "constructor") && !u.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || u.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                (t = p.trim(t)) && (1 === t.indexOf("use strict") ? ((e = n.createElement("script")).text = t, n.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(g, "ms-").replace(m, v)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, n = 0;
                if (y(t))
                    for (i = t.length; i > n && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(f, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (y(Object(t)) ? p.merge(i, "string" == typeof t ? [t] : t) : s.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : a.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n = [], r = 0, o = t.length, s = !i; o > r; r++) !e(t[r], r) !== s && n.push(t[r]);
                return n
            },
            map: function(t, e, i) {
                var n, r, s = 0,
                    a = [];
                if (y(t))
                    for (n = t.length; n > s; s++) null != (r = e(t[s], s, i)) && a.push(r);
                else
                    for (s in t) null != (r = e(t[s], s, i)) && a.push(r);
                return o.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, o;
                return "string" == typeof e && (i = t[e], e = t, t = i), p.isFunction(t) ? (n = r.call(arguments, 2), (o = function() {
                    return t.apply(e || this, n.concat(r.call(arguments)))
                }).guid = t.guid = t.guid || p.guid++, o) : void 0
            },
            now: Date.now,
            support: d
        }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = i[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            l["[object " + e + "]"] = e.toLowerCase()
        });
        var w = function(t) {
            var e, i, n, r, o, s, a, l, c, u, d, h, p, f, g, m, v, y, w, b = "sizzle" + 1 * new Date,
                x = t.document,
                _ = 0,
                C = 0,
                S = ot(),
                T = ot(),
                k = ot(),
                E = function(t, e) {
                    return t === e && (d = !0), 0
                },
                F = 1 << 31,
                L = {}.hasOwnProperty,
                D = [],
                q = D.pop,
                A = D.push,
                P = D.push,
                O = D.slice,
                M = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                z = "[\\x20\\t\\r\\n\\f]",
                j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                I = "\\[" + z + "*(" + j + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + z + "*\\]",
                B = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                R = new RegExp(z + "+", "g"),
                H = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                W = new RegExp("^" + z + "*," + z + "*"),
                G = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
                $ = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
                U = new RegExp(B),
                V = new RegExp("^" + j + "$"),
                X = {
                    ID: new RegExp("^#(" + j + ")"),
                    CLASS: new RegExp("^\\.(" + j + ")"),
                    TAG: new RegExp("^(" + j + "|[*])"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + N + ")$", "i"),
                    needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                tt = /'|\\/g,
                et = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
                it = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                nt = function() {
                    h()
                };
            try {
                P.apply(D = O.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
            } catch (t) {
                P = {
                    apply: D.length ? function(t, e) {
                        A.apply(t, O.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function rt(t, e, n, r) {
                var o, a, c, u, d, f, v, y, _ = e && e.ownerDocument,
                    C = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return n;
                if (!r && ((e ? e.ownerDocument || e : x) !== p && h(e), e = e || p, g)) {
                    if (11 !== C && (f = J.exec(t)))
                        if (o = f[1]) {
                            if (9 === C) {
                                if (!(c = e.getElementById(o))) return n;
                                if (c.id === o) return n.push(c), n
                            } else if (_ && (c = _.getElementById(o)) && w(e, c) && c.id === o) return n.push(c), n
                        } else {
                            if (f[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = f[3]) && i.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(o)), n
                        } if (i.qsa && !k[t + " "] && (!m || !m.test(t))) {
                        if (1 !== C) _ = e, y = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((u = e.getAttribute("id")) ? u = u.replace(tt, "\\$&") : e.setAttribute("id", u = b), a = (v = s(t)).length, d = V.test(u) ? "#" + u : "[id='" + u + "']"; a--;) v[a] = d + " " + gt(v[a]);
                            y = v.join(","), _ = K.test(t) && pt(e.parentNode) || e
                        }
                        if (y) try {
                            return P.apply(n, _.querySelectorAll(y)), n
                        } catch (t) {} finally {
                            u === b && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(H, "$1"), e, n, r)
            }

            function ot() {
                var t = [];
                return function e(i, r) {
                    return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = r
                }
            }

            function st(t) {
                return t[b] = !0, t
            }

            function at(t) {
                var e = p.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function lt(t, e) {
                for (var i = t.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = e
            }

            function ct(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || F) - (~t.sourceIndex || F);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function ut(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function dt(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function ht(t) {
                return st(function(e) {
                    return e = +e, st(function(i, n) {
                        for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function pt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in i = rt.support = {}, o = rt.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, h = rt.setDocument = function(t) {
                    var e, r, s = t ? t.ownerDocument || t : x;
                    return s !== p && 9 === s.nodeType && s.documentElement ? (f = (p = s).documentElement, g = !o(p), (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", nt, !1) : r.attachEvent && r.attachEvent("onunload", nt)), i.attributes = at(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), i.getElementsByTagName = at(function(t) {
                        return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                    }), i.getElementsByClassName = Z.test(p.getElementsByClassName), i.getById = at(function(t) {
                        return f.appendChild(t).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                    }), i.getById ? (n.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }, n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete n.find.ID, n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return o
                    }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                        return void 0 !== e.getElementsByClassName && g ? e.getElementsByClassName(t) : void 0
                    }, v = [], m = [], (i.qsa = Z.test(p.querySelectorAll)) && (at(function(t) {
                        f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + z + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                    }), at(function(t) {
                        var e = p.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + z + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (i.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(t) {
                        i.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", B)
                    }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(f.compareDocumentPosition), w = e || Z.test(f.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, E = e ? function(t, e) {
                        if (t === e) return d = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === x && w(x, t) ? -1 : e === p || e.ownerDocument === x && w(x, e) ? 1 : u ? M(u, t) - M(u, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return d = !0, 0;
                        var i, n = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            s = [t],
                            a = [e];
                        if (!r || !o) return t === p ? -1 : e === p ? 1 : r ? -1 : o ? 1 : u ? M(u, t) - M(u, e) : 0;
                        if (r === o) return ct(t, e);
                        for (i = t; i = i.parentNode;) s.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; s[n] === a[n];) n++;
                        return n ? ct(s[n], a[n]) : s[n] === x ? -1 : a[n] === x ? 1 : 0
                    }, p) : p
                }, rt.matches = function(t, e) {
                    return rt(t, null, null, e)
                }, rt.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== p && h(t), e = e.replace($, "='$1']"), i.matchesSelector && g && !k[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                        var n = y.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {}
                    return rt(e, p, null, [t]).length > 0
                }, rt.contains = function(t, e) {
                    return (t.ownerDocument || t) !== p && h(t), w(t, e)
                }, rt.attr = function(t, e) {
                    (t.ownerDocument || t) !== p && h(t);
                    var r = n.attrHandle[e.toLowerCase()],
                        o = r && L.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                    return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, rt.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, rt.uniqueSort = function(t) {
                    var e, n = [],
                        r = 0,
                        o = 0;
                    if (d = !i.detectDuplicates, u = !i.sortStable && t.slice(0), t.sort(E), d) {
                        for (; e = t[o++];) e === t[o] && (r = n.push(o));
                        for (; r--;) t.splice(n[r], 1)
                    }
                    return u = null, t
                }, r = rt.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += r(e);
                    return i
                }, (n = rt.selectors = {
                    cacheLength: 50,
                    createPseudo: st,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && U.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(et, it).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = S[t + " "];
                            return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && S(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(n) {
                                var r = rt.attr(n, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(R, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, i, n, r) {
                            var o = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === r ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var c, u, d, h, p, f, g = o !== s ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    w = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (h = e; h = h[g];)
                                                if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (w = (p = (c = (u = (d = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === _ && c[1]) && c[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (w = p = 0) || f.pop();)
                                            if (1 === h.nodeType && ++w && h === e) {
                                                u[t] = [_, p, w];
                                                break
                                            }
                                    } else if (y && (w = p = (c = (u = (d = (h = e)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === _ && c[1]), !1 === w)
                                        for (;
                                            (h = ++p && h && h[g] || (w = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++w || (y && ((u = (d = h[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [_, w]), h !== e)););
                                    return (w -= r) === n || w % n == 0 && w / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                            return r[b] ? r(e) : r.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, i) {
                                for (var n, o = r(t, e), s = o.length; s--;) t[n = M(t, o[s])] = !(i[n] = o[s])
                            }) : function(t) {
                                return r(t, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: st(function(t) {
                            var e = [],
                                i = [],
                                n = a(t.replace(H, "$1"));
                            return n[b] ? st(function(t, e, i, r) {
                                for (var o, s = n(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function(t, r, o) {
                                return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                            }
                        }),
                        has: st(function(t) {
                            return function(e) {
                                return rt(t, e).length > 0
                            }
                        }),
                        contains: st(function(t) {
                            return t = t.replace(et, it),
                                function(e) {
                                    return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                                }
                        }),
                        lang: st(function(t) {
                            return V.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                                function(e) {
                                    var i;
                                    do {
                                        if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === f
                        },
                        focus: function(t) {
                            return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !n.pseudos.empty(t)
                        },
                        header: function(t) {
                            return Q.test(t.nodeName)
                        },
                        input: function(t) {
                            return Y.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: ht(function() {
                            return [0]
                        }),
                        last: ht(function(t, e) {
                            return [e - 1]
                        }),
                        eq: ht(function(t, e, i) {
                            return [0 > i ? i + e : i]
                        }),
                        even: ht(function(t, e) {
                            for (var i = 0; e > i; i += 2) t.push(i);
                            return t
                        }),
                        odd: ht(function(t, e) {
                            for (var i = 1; e > i; i += 2) t.push(i);
                            return t
                        }),
                        lt: ht(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                            return t
                        }),
                        gt: ht(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = n.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) n.pseudos[e] = ut(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) n.pseudos[e] = dt(e);

            function ft() {}

            function gt(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function mt(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    o = C++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, o)
                } : function(e, i, s) {
                    var a, l, c, u = [_, o];
                    if (s) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, s)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r) {
                                if ((a = (l = (c = e[b] || (e[b] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[n]) && a[0] === _ && a[1] === o) return u[2] = a[2];
                                if (l[n] = u, u[2] = t(e, i, s)) return !0
                            }
                }
            }

            function vt(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function yt(t, e, i, n, r) {
                for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (i && !i(o, n, r) || (s.push(o), c && e.push(a)));
                return s
            }

            function wt(t, e, i, n, r, o) {
                return n && !n[b] && (n = wt(n)), r && !r[b] && (r = wt(r, o)), st(function(o, s, a, l) {
                    var c, u, d, h = [],
                        p = [],
                        f = s.length,
                        g = o || function(t, e, i) {
                            for (var n = 0, r = e.length; r > n; n++) rt(t, e[n], i);
                            return i
                        }(e || "*", a.nodeType ? [a] : a, []),
                        m = !t || !o && e ? g : yt(g, h, t, a, l),
                        v = i ? r || (o ? t : f || n) ? [] : s : m;
                    if (i && i(m, v, a, l), n)
                        for (c = yt(v, p), n(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[p[u]] = !(m[p[u]] = d));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                                r(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(d = v[u]) && (c = r ? M(o, d) : h[u]) > -1 && (o[c] = !(s[c] = d))
                        }
                    } else v = yt(v === s ? v.splice(f, v.length) : v), r ? r(null, s, v, l) : P.apply(s, v)
                })
            }

            function bt(t) {
                for (var e, i, r, o = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, u = mt(function(t) {
                        return t === e
                    }, a, !0), d = mt(function(t) {
                        return M(e, t) > -1
                    }, a, !0), h = [function(t, i, n) {
                        var r = !s && (n || i !== c) || ((e = i).nodeType ? u(t, i, n) : d(t, i, n));
                        return e = null, r
                    }]; o > l; l++)
                    if (i = n.relative[t[l].type]) h = [mt(vt(h), i)];
                    else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
                            for (r = ++l; o > r && !n.relative[t[r].type]; r++);
                            return wt(l > 1 && vt(h), l > 1 && gt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(H, "$1"), i, r > l && bt(t.slice(l, r)), o > r && bt(t = t.slice(r)), o > r && gt(t))
                        }
                        h.push(i)
                    } return vt(h)
            }

            function xt(t, e) {
                var i = e.length > 0,
                    r = t.length > 0,
                    o = function(o, s, a, l, u) {
                        var d, f, m, v = 0,
                            y = "0",
                            w = o && [],
                            b = [],
                            x = c,
                            C = o || r && n.find.TAG("*", u),
                            S = _ += null == x ? 1 : Math.random() || .1,
                            T = C.length;
                        for (u && (c = s === p || s || u); y !== T && null != (d = C[y]); y++) {
                            if (r && d) {
                                for (f = 0, s || d.ownerDocument === p || (h(d), a = !g); m = t[f++];)
                                    if (m(d, s || p, a)) {
                                        l.push(d);
                                        break
                                    } u && (_ = S)
                            }
                            i && ((d = !m && d) && v--, o && w.push(d))
                        }
                        if (v += y, i && y !== v) {
                            for (f = 0; m = e[f++];) m(w, b, s, a);
                            if (o) {
                                if (v > 0)
                                    for (; y--;) w[y] || b[y] || (b[y] = q.call(l));
                                b = yt(b)
                            }
                            P.apply(l, b), u && !o && b.length > 0 && v + e.length > 1 && rt.uniqueSort(l)
                        }
                        return u && (_ = S, c = x), w
                    };
                return i ? st(o) : o
            }
            return ft.prototype = n.filters = n.pseudos, n.setFilters = new ft, s = rt.tokenize = function(t, e) {
                var i, r, o, s, a, l, c, u = T[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (a = t, l = [], c = n.preFilter; a;) {
                    for (s in i && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = G.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(H, " ")
                        }), a = a.slice(i.length)), n.filter) !(r = X[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? rt.error(t) : T(t, l).slice(0)
            }, a = rt.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    o = k[t + " "];
                if (!o) {
                    for (e || (e = s(t)), i = e.length; i--;)(o = bt(e[i]))[b] ? n.push(o) : r.push(o);
                    (o = k(t, xt(r, n))).selector = t
                }
                return o
            }, l = rt.select = function(t, e, r, o) {
                var l, c, u, d, h, p = "function" == typeof t && t,
                    f = !o && s(t = p.selector || t);
                if (r = r || [], 1 === f.length) {
                    if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && i.getById && 9 === e.nodeType && g && n.relative[c[1].type]) {
                        if (!(e = (n.find.ID(u.matches[0].replace(et, it), e) || [])[0])) return r;
                        p && (e = e.parentNode), t = t.slice(c.shift().value.length)
                    }
                    for (l = X.needsContext.test(t) ? 0 : c.length; l-- && (u = c[l], !n.relative[d = u.type]);)
                        if ((h = n.find[d]) && (o = h(u.matches[0].replace(et, it), K.test(c[0].type) && pt(e.parentNode) || e))) {
                            if (c.splice(l, 1), !(t = o.length && gt(c))) return P.apply(r, o), r;
                            break
                        }
                }
                return (p || a(t, f))(o, e, !g, r, !e || K.test(t) && pt(e.parentNode) || e), r
            }, i.sortStable = b.split("").sort(E).join("") === b, i.detectDuplicates = !!d, h(), i.sortDetached = at(function(t) {
                return 1 & t.compareDocumentPosition(p.createElement("div"))
            }), at(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || lt("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), i.attributes && at(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || lt("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), at(function(t) {
                return null == t.getAttribute("disabled")
            }) || lt(N, function(t, e, i) {
                var n;
                return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), rt
        }(t);
        p.find = w, p.expr = w.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = w.uniqueSort, p.text = w.getText, p.isXMLDoc = w.isXML, p.contains = w.contains;
        var b = function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && p(t).is(i)) break;
                        n.push(t)
                    } return n
            },
            x = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            _ = p.expr.match.needsContext,
            C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            S = /^.[^:#\[\.,]*$/;

        function T(t, e, i) {
            if (p.isFunction(e)) return p.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return p.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (S.test(e)) return p.filter(e, t, i);
                e = p.filter(e, t)
            }
            return p.grep(t, function(t) {
                return a.call(e, t) > -1 !== i
            })
        }
        p.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? p.find.matchesSelector(n, t) ? [n] : [] : p.find.matches(t, p.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, p.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(p(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (p.contains(r[e], this)) return !0
                }));
                for (e = 0; i > e; e++) p.find(t, r[e], n);
                return (n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(T(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(T(this, t || [], !0))
            },
            is: function(t) {
                return !!T(this, "string" == typeof t && _.test(t) ? p(t) : t || [], !1).length
            }
        });
        var k, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (p.fn.init = function(t, e, i) {
            var r, o;
            if (!t) return this;
            if (i = i || k, "string" == typeof t) {
                if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : E.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof p ? e[0] : e, p.merge(this, p.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), C.test(r[1]) && p.isPlainObject(e))
                        for (r in e) p.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                return (o = n.getElementById(r[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = n, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : p.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(p) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), p.makeArray(t, this))
        }).prototype = p.fn, k = p(n);
        var F = /^(?:parents|prev(?:Until|All))/,
            L = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function D(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        p.fn.extend({
            has: function(t) {
                var e = p(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (p.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, r = this.length, o = [], s = _.test(t) || "string" != typeof t ? p(t, e || this.context) : 0; r > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && p.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        } return this.pushStack(o.length > 1 ? p.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? a.call(p(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(p.uniqueSort(p.merge(this.get(), p(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), p.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return b(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return b(t, "parentNode", i)
            },
            next: function(t) {
                return D(t, "nextSibling")
            },
            prev: function(t) {
                return D(t, "previousSibling")
            },
            nextAll: function(t) {
                return b(t, "nextSibling")
            },
            prevAll: function(t) {
                return b(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return b(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return b(t, "previousSibling", i)
            },
            siblings: function(t) {
                return x((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return x(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || p.merge([], t.childNodes)
            }
        }, function(t, e) {
            p.fn[t] = function(i, n) {
                var r = p.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = p.filter(n, r)), this.length > 1 && (L[t] || p.uniqueSort(r), F.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var q, A = /\S+/g;

        function P() {
            n.removeEventListener("DOMContentLoaded", P), t.removeEventListener("load", P), p.ready()
        }
        p.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return p.each(t.match(A) || [], function(t, i) {
                    e[i] = !0
                }), e
            }(t) : p.extend({}, t);
            var e, i, n, r, o = [],
                s = [],
                a = -1,
                l = function() {
                    for (r = t.once, n = e = !0; s.length; a = -1)
                        for (i = s.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, i = !1);
                    t.memory || (i = !1), e = !1, r && (o = i ? [] : "")
                },
                c = {
                    add: function() {
                        return o && (i && !e && (a = o.length - 1, s.push(i)), function e(i) {
                            p.each(i, function(i, n) {
                                p.isFunction(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== p.type(n) && e(n)
                            })
                        }(arguments), i && !e && l()), this
                    },
                    remove: function() {
                        return p.each(arguments, function(t, e) {
                            for (var i;
                                (i = p.inArray(e, o, i)) > -1;) o.splice(i, 1), a >= i && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? p.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return r = s = [], o = i = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = s = [], i || (o = i = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, i) {
                        return r || (i = [t, (i = i || []).slice ? i.slice() : i], s.push(i), e || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return c
        }, p.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", p.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return p.Deferred(function(i) {
                                p.each(e, function(e, o) {
                                    var s = p.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && p.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? p.extend(t, n) : n
                        }
                    },
                    r = {};
                return n.pipe = n.then, p.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    n[o[1]] = s.add, a && s.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? n : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), n.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, i, n, o = 0,
                    s = r.call(arguments),
                    a = s.length,
                    l = 1 !== a || t && p.isFunction(t.promise) ? a : 0,
                    c = 1 === l ? t : p.Deferred(),
                    u = function(t, i, n) {
                        return function(o) {
                            i[t] = this, n[t] = arguments.length > 1 ? r.call(arguments) : o, n === e ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), i = new Array(a), n = new Array(a); a > o; o++) s[o] && p.isFunction(s[o].promise) ? s[o].promise().progress(u(o, i, e)).done(u(o, n, s)).fail(c.reject) : --l;
                return l || c.resolveWith(n, s), c.promise()
            }
        }), p.fn.ready = function(t) {
            return p.ready.promise().done(t), this
        }, p.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? p.readyWait++ : p.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== t && --p.readyWait > 0 || (q.resolveWith(n, [p]), p.fn.triggerHandler && (p(n).triggerHandler("ready"), p(n).off("ready"))))
            }
        }), p.ready.promise = function(e) {
            return q || (q = p.Deferred(), "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(p.ready) : (n.addEventListener("DOMContentLoaded", P), t.addEventListener("load", P))), q.promise(e)
        }, p.ready.promise();
        var O = function(t, e, i, n, r, o, s) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === p.type(i))
                    for (a in r = !0, i) O(t, e, a, i[a], !0, o, s);
                else if (void 0 !== n && (r = !0, p.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(p(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : c ? e.call(t) : l ? e(t[0], i) : o
            },
            M = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };

        function N() {
            this.expando = p.expando + N.uid++
        }
        N.uid = 1, N.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!M(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, M(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[e] = i;
                else
                    for (n in e) r[n] = e[n];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, p.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, r, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t);
                    else {
                        p.isArray(e) ? n = e.concat(e.map(p.camelCase)) : (r = p.camelCase(e), e in o ? n = [e, r] : n = (n = r) in o ? [n] : n.match(A) || []), i = n.length;
                        for (; i--;) delete o[n[i]]
                    }(void 0 === e || p.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !p.isEmptyObject(e)
            }
        };
        var z = new N,
            j = new N,
            I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            B = /[A-Z]/g;

        function R(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(B, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : I.test(i) ? p.parseJSON(i) : i)
                    } catch (t) {}
                    j.set(t, e, i)
                } else i = void 0;
            return i
        }
        p.extend({
            hasData: function(t) {
                return j.hasData(t) || z.hasData(t)
            },
            data: function(t, e, i) {
                return j.access(t, e, i)
            },
            removeData: function(t, e) {
                j.remove(t, e)
            },
            _data: function(t, e, i) {
                return z.access(t, e, i)
            },
            _removeData: function(t, e) {
                z.remove(t, e)
            }
        }), p.fn.extend({
            data: function(t, e) {
                var i, n, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = j.get(o), 1 === o.nodeType && !z.get(o, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && (0 === (n = s[i].name).indexOf("data-") && (n = p.camelCase(n.slice(5)), R(o, n, r[n])));
                        z.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    j.set(this, t)
                }) : O(this, function(e) {
                    var i, n;
                    if (o && void 0 === e) {
                        if (void 0 !== (i = j.get(o, t) || j.get(o, t.replace(B, "-$&").toLowerCase()))) return i;
                        if (n = p.camelCase(t), void 0 !== (i = j.get(o, n))) return i;
                        if (void 0 !== (i = R(o, n, void 0))) return i
                    } else n = p.camelCase(t), this.each(function() {
                        var i = j.get(this, n);
                        j.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && j.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    j.remove(this, t)
                })
            }
        }), p.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = z.get(t, e), i && (!n || p.isArray(i) ? n = z.access(t, e, p.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = p.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    o = p._queueHooks(t, e);
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, function() {
                    p.dequeue(t, e)
                }, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return z.get(t, i) || z.access(t, i, {
                    empty: p.Callbacks("once memory").add(function() {
                        z.remove(t, [e + "queue", i])
                    })
                })
            }
        }), p.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? p.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = p.queue(this, t, e);
                    p._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && p.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    p.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = p.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --n || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(i = z.get(o[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var H = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            W = new RegExp("^(?:([+-])=|)(" + H + ")([a-z%]*)$", "i"),
            G = ["Top", "Right", "Bottom", "Left"],
            $ = function(t, e) {
                return t = e || t, "none" === p.css(t, "display") || !p.contains(t.ownerDocument, t)
            };

        function U(t, e, i, n) {
            var r, o = 1,
                s = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return p.css(t, e, "")
                },
                l = a(),
                c = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                u = (p.cssNumber[e] || "px" !== c && +l) && W.exec(p.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3], i = i || [], u = +l || 1;
                do {
                    u /= o = o || ".5", p.style(t, e, u + c)
                } while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
        }
        var V = /^(?:checkbox|radio)$/i,
            X = /<([\w:-]+)/,
            Y = /^$|\/(?:java|ecma)script/i,
            Q = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function Z(t, e) {
            var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && p.nodeName(t, e) ? p.merge([t], i) : i
        }

        function J(t, e) {
            for (var i = 0, n = t.length; n > i; i++) z.set(t[i], "globalEval", !e || z.get(e[i], "globalEval"))
        }
        Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
        var K = /<|&#?\w+;/;

        function tt(t, e, i, n, r) {
            for (var o, s, a, l, c, u, d = e.createDocumentFragment(), h = [], f = 0, g = t.length; g > f; f++)
                if ((o = t[f]) || 0 === o)
                    if ("object" === p.type(o)) p.merge(h, o.nodeType ? [o] : o);
                    else if (K.test(o)) {
                for (s = s || d.appendChild(e.createElement("div")), a = (X.exec(o) || ["", ""])[1].toLowerCase(), l = Q[a] || Q._default, s.innerHTML = l[1] + p.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                p.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
            } else h.push(e.createTextNode(o));
            for (d.textContent = "", f = 0; o = h[f++];)
                if (n && p.inArray(o, n) > -1) r && r.push(o);
                else if (c = p.contains(o.ownerDocument, o), s = Z(d.appendChild(o), "script"), c && J(s), i)
                for (u = 0; o = s[u++];) Y.test(o.type || "") && i.push(o);
            return d
        }! function() {
            var t = n.createDocumentFragment().appendChild(n.createElement("div")),
                e = n.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var et = /^key/,
            it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            nt = /^([^.]*)(?:\.(.+)|)/;

        function rt() {
            return !0
        }

        function ot() {
            return !1
        }

        function st() {
            try {
                return n.activeElement
            } catch (t) {}
        }

        function at(t, e, i, n, r, o) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), e) at(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = ot;
            else if (!r) return t;
            return 1 === o && (s = r, (r = function(t) {
                return p().off(t), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = p.guid++)), t.each(function() {
                p.event.add(this, e, r, n, i)
            })
        }
        p.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var o, s, a, l, c, u, d, h, f, g, m, v = z.get(t);
                if (v)
                    for (i.handler && (i = (o = i).handler, r = o.selector), i.guid || (i.guid = p.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                            return void 0 !== p && p.event.triggered !== e.type ? p.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(A) || [""]).length; c--;) f = m = (a = nt.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), f && (d = p.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = p.event.special[f] || {}, u = p.extend({
                        type: f,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && p.expr.match.needsContext.test(r),
                        namespace: g.join(".")
                    }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, g, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), p.event.global[f] = !0)
            },
            remove: function(t, e, i, n, r) {
                var o, s, a, l, c, u, d, h, f, g, m, v = z.hasData(t) && z.get(t);
                if (v && (l = v.events)) {
                    for (c = (e = (e || "").match(A) || [""]).length; c--;)
                        if (f = m = (a = nt.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), f) {
                            for (d = p.event.special[f] || {}, h = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) u = h[o], !r && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(t, g, v.handle) || p.removeEvent(t, f, v.handle), delete l[f])
                        } else
                            for (f in l) p.event.remove(t, f + e[c], i, n, !0);
                    p.isEmptyObject(l) && z.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = p.event.fix(t);
                var e, i, n, o, s, a = [],
                    l = r.call(arguments),
                    c = (z.get(this, "events") || {})[t.type] || [],
                    u = p.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                    for (a = p.event.handlers.call(this, t, c), e = 0;
                        (o = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, i = 0;
                            (s = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (n = ((p.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (n = [], i = 0; a > i; i++) void 0 === n[r = (o = e[i]).selector + " "] && (n[r] = o.needsContext ? p(r, this).index(l) > -1 : p.find(r, this, null, [l]).length), n[r] && n.push(o);
                            n.length && s.push({
                                elem: l,
                                handlers: n
                            })
                        } return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, r, o, s = e.button;
                    return null == t.pageX && null != e.clientX && (r = (i = t.target.ownerDocument || n).documentElement, o = i.body, t.pageX = e.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[p.expando]) return t;
                var e, i, r, o = t.type,
                    s = t,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = it.test(o) ? this.mouseHooks : et.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new p.Event(s), e = r.length; e--;) t[i = r[e]] = s[i];
                return t.target || (t.target = n), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== st() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === st() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return p.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, p.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, p.Event = function(t, e) {
            return this instanceof p.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? rt : ot) : this.type = t, e && p.extend(this, e), this.timeStamp = t && t.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(t, e)
        }, p.Event.prototype = {
            constructor: p.Event,
            isDefaultPrevented: ot,
            isPropagationStopped: ot,
            isImmediatePropagationStopped: ot,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = rt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = rt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = rt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, p.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            p.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = t.relatedTarget,
                        r = t.handleObj;
                    return n && (n === this || p.contains(this, n)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), p.fn.extend({
            on: function(t, e, i, n) {
                return at(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return at(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, p(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = ot), this.each(function() {
                    p.event.remove(this, t, i, e)
                })
            }
        });
        var lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ct = /<script|<style|<link/i,
            ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            dt = /^true\/(.*)/,
            ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function pt(t, e) {
            return p.nodeName(t, "table") && p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function ft(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function gt(t) {
            var e = dt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function mt(t, e) {
            var i, n, r, o, s, a, l, c;
            if (1 === e.nodeType) {
                if (z.hasData(t) && (o = z.access(t), s = z.set(e, o), c = o.events))
                    for (r in delete s.handle, s.events = {}, c)
                        for (i = 0, n = c[r].length; n > i; i++) p.event.add(e, r, c[r][i]);
                j.hasData(t) && (a = j.access(t), l = p.extend({}, a), j.set(e, l))
            }
        }

        function vt(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && V.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function yt(t, e, i, n) {
            e = o.apply([], e);
            var r, s, a, l, c, u, h = 0,
                f = t.length,
                g = f - 1,
                m = e[0],
                v = p.isFunction(m);
            if (v || f > 1 && "string" == typeof m && !d.checkClone && ut.test(m)) return t.each(function(r) {
                var o = t.eq(r);
                v && (e[0] = m.call(this, r, o.html())), yt(o, e, i, n)
            });
            if (f && (s = (r = tt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
                for (l = (a = p.map(Z(r, "script"), ft)).length; f > h; h++) c = r, h !== g && (c = p.clone(c, !0, !0), l && p.merge(a, Z(c, "script"))), i.call(t[h], c, h);
                if (l)
                    for (u = a[a.length - 1].ownerDocument, p.map(a, gt), h = 0; l > h; h++) c = a[h], Y.test(c.type || "") && !z.access(c, "globalEval") && p.contains(u, c) && (c.src ? p._evalUrl && p._evalUrl(c.src) : p.globalEval(c.textContent.replace(ht, "")))
            }
            return t
        }

        function wt(t, e, i) {
            for (var n, r = e ? p.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || p.cleanData(Z(n)), n.parentNode && (i && p.contains(n.ownerDocument, n) && J(Z(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        p.extend({
            htmlPrefilter: function(t) {
                return t.replace(lt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, r, o, s, a = t.cloneNode(!0),
                    l = p.contains(t.ownerDocument, t);
                if (!(d.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || p.isXMLDoc(t)))
                    for (s = Z(a), n = 0, r = (o = Z(t)).length; r > n; n++) vt(o[n], s[n]);
                if (e)
                    if (i)
                        for (o = o || Z(t), s = s || Z(a), n = 0, r = o.length; r > n; n++) mt(o[n], s[n]);
                    else mt(t, a);
                return (s = Z(a, "script")).length > 0 && J(s, !l && Z(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, r = p.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (M(i)) {
                        if (e = i[z.expando]) {
                            if (e.events)
                                for (n in e.events) r[n] ? p.event.remove(i, n) : p.removeEvent(i, n, e.handle);
                            i[z.expando] = void 0
                        }
                        i[j.expando] && (i[j.expando] = void 0)
                    }
            }
        }), p.fn.extend({
            domManip: yt,
            detach: function(t) {
                return wt(this, t, !0)
            },
            remove: function(t) {
                return wt(this, t)
            },
            text: function(t) {
                return O(this, function(t) {
                    return void 0 === t ? p.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return yt(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pt(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return yt(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = pt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return yt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return yt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (p.cleanData(Z(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return p.clone(this, t, e)
                })
            },
            html: function(t) {
                return O(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ct.test(t) && !Q[(X.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = p.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (p.cleanData(Z(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return yt(this, arguments, function(e) {
                    var i = this.parentNode;
                    p.inArray(this, t) < 0 && (p.cleanData(Z(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), p.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            p.fn[t] = function(t) {
                for (var i, n = [], r = p(t), o = r.length - 1, a = 0; o >= a; a++) i = a === o ? this : this.clone(!0), p(r[a])[e](i), s.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var bt, xt = {
            HTML: "block",
            BODY: "block"
        };

        function _t(t, e) {
            var i = p(e.createElement(t)).appendTo(e.body),
                n = p.css(i[0], "display");
            return i.detach(), n
        }

        function Ct(t) {
            var e = n,
                i = xt[t];
            return i || ("none" !== (i = _t(t, e)) && i || ((e = (bt = (bt || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = _t(t, e), bt.detach()), xt[t] = i), i
        }
        var St = /^margin/,
            Tt = new RegExp("^(" + H + ")(?!px)[a-z%]+$", "i"),
            kt = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            Et = function(t, e, i, n) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                for (o in r = i.apply(t, n || []), e) t.style[o] = s[o];
                return r
            },
            Ft = n.documentElement;

        function Lt(t, e, i) {
            var n, r, o, s, a = t.style;
            return "" !== (s = (i = i || kt(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== s || p.contains(t.ownerDocument, t) || (s = p.style(t, e)), i && !d.pixelMarginRight() && Tt.test(s) && St.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
        }

        function Dt(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }! function() {
            var e, i, r, o, s = n.createElement("div"),
                a = n.createElement("div");
            if (a.style) {
                function l() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ft.appendChild(s);
                    var n = t.getComputedStyle(a);
                    e = "1%" !== n.top, o = "2px" === n.marginLeft, i = "4px" === n.width, a.style.marginRight = "50%", r = "4px" === n.marginRight, Ft.removeChild(s)
                }
                a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), p.extend(d, {
                    pixelPosition: function() {
                        return l(), e
                    },
                    boxSizingReliable: function() {
                        return null == i && l(), i
                    },
                    pixelMarginRight: function() {
                        return null == i && l(), r
                    },
                    reliableMarginLeft: function() {
                        return null == i && l(), o
                    },
                    reliableMarginRight: function() {
                        var e, i = a.appendChild(n.createElement("div"));
                        return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Ft.appendChild(s), e = !parseFloat(t.getComputedStyle(i).marginRight), Ft.removeChild(s), a.removeChild(i), e
                    }
                })
            }
        }();
        var qt = /^(none|table(?!-c[ea]).+)/,
            At = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Pt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ot = ["Webkit", "O", "Moz", "ms"],
            Mt = n.createElement("div").style;

        function Nt(t) {
            if (t in Mt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Ot.length; i--;)
                if ((t = Ot[i] + e) in Mt) return t
        }

        function zt(t, e, i) {
            var n = W.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function jt(t, e, i, n, r) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === i && (s += p.css(t, i + G[o], !0, r)), n ? ("content" === i && (s -= p.css(t, "padding" + G[o], !0, r)), "margin" !== i && (s -= p.css(t, "border" + G[o] + "Width", !0, r))) : (s += p.css(t, "padding" + G[o], !0, r), "padding" !== i && (s += p.css(t, "border" + G[o] + "Width", !0, r)));
            return s
        }

        function It(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = kt(t),
                s = "border-box" === p.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if ((0 > (r = Lt(t, e, o)) || null == r) && (r = t.style[e]), Tt.test(r)) return r;
                n = s && (d.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + jt(t, e, i || (s ? "border" : "content"), n, o) + "px"
        }

        function Bt(t, e) {
            for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++)(n = t[s]).style && (o[s] = z.get(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && $(n) && (o[s] = z.access(n, "olddisplay", Ct(n.nodeName)))) : (r = $(n), "none" === i && r || z.set(n, "olddisplay", r ? i : p.css(n, "display"))));
            for (s = 0; a > s; s++)(n = t[s]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function Rt(t, e, i, n, r) {
            return new Rt.prototype.init(t, e, i, n, r)
        }
        p.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = Lt(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = p.camelCase(e),
                        l = t.style;
                    return e = p.cssProps[a] || (p.cssProps[a] = Nt(a) || a), s = p.cssHooks[e] || p.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : ("string" === (o = typeof i) && (r = W.exec(i)) && r[1] && (i = U(t, e, r), o = "number"), void(null != i && i == i && ("number" === o && (i += r && r[3] || (p.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var r, o, s, a = p.camelCase(e);
                return e = p.cssProps[a] || (p.cssProps[a] = Nt(a) || a), (s = p.cssHooks[e] || p.cssHooks[a]) && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = Lt(t, e, n)), "normal" === r && e in Pt && (r = Pt[e]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
            }
        }), p.each(["height", "width"], function(t, e) {
            p.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? qt.test(p.css(t, "display")) && 0 === t.offsetWidth ? Et(t, At, function() {
                        return It(t, e, n)
                    }) : It(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var r, o = n && kt(t),
                        s = n && jt(t, e, n, "border-box" === p.css(t, "boxSizing", !1, o), o);
                    return s && (r = W.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = p.css(t, e)), zt(0, i, s)
                }
            }
        }), p.cssHooks.marginLeft = Dt(d.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(Lt(t, "marginLeft")) || t.getBoundingClientRect().left - Et(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), p.cssHooks.marginRight = Dt(d.reliableMarginRight, function(t, e) {
            return e ? Et(t, {
                display: "inline-block"
            }, Lt, [t, "marginRight"]) : void 0
        }), p.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            p.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + G[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }, St.test(t) || (p.cssHooks[t + e].set = zt)
        }), p.fn.extend({
            css: function(t, e) {
                return O(this, function(t, e, i) {
                    var n, r, o = {},
                        s = 0;
                    if (p.isArray(e)) {
                        for (n = kt(t), r = e.length; r > s; s++) o[e[s]] = p.css(t, e[s], !1, n);
                        return o
                    }
                    return void 0 !== i ? p.style(t, e, i) : p.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return Bt(this, !0)
            },
            hide: function() {
                return Bt(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    $(this) ? p(this).show() : p(this).hide()
                })
            }
        }), p.Tween = Rt, Rt.prototype = {
            constructor: Rt,
            init: function(t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || p.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (p.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = Rt.propHooks[this.prop];
                return t && t.get ? t.get(this) : Rt.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = Rt.propHooks[this.prop];
                return this.options.duration ? this.pos = e = p.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Rt.propHooks._default.set(this), this
            }
        }, Rt.prototype.init.prototype = Rt.prototype, Rt.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = p.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    p.fx.step[t.prop] ? p.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[p.cssProps[t.prop]] && !p.cssHooks[t.prop] ? t.elem[t.prop] = t.now : p.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, Rt.propHooks.scrollTop = Rt.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, p.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, p.fx = Rt.prototype.init, p.fx.step = {};
        var Ht, Wt, Gt = /^(?:toggle|show|hide)$/,
            $t = /queueHooks$/;

        function Ut() {
            return t.setTimeout(function() {
                Ht = void 0
            }), Ht = p.now()
        }

        function Vt(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) r["margin" + (i = G[n])] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function Xt(t, e, i) {
            for (var n, r = (Yt.tweeners[e] || []).concat(Yt.tweeners["*"]), o = 0, s = r.length; s > o; o++)
                if (n = r[o].call(i, e, t)) return n
        }

        function Yt(t, e, i) {
            var n, r, o = 0,
                s = Yt.prefilters.length,
                a = p.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Ht || Ut(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), o = 0, s = c.tweens.length; s > o; o++) c.tweens[o].run(n);
                    return a.notifyWith(t, [c, n, i]), 1 > n && s ? i : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: p.extend({}, e),
                    opts: p.extend(!0, {
                        specialEasing: {},
                        easing: p.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Ht || Ut(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = p.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (function(t, e) {
                    var i, n, r, o, s;
                    for (i in t)
                        if (r = e[n = p.camelCase(i)], o = t[i], p.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (s = p.cssHooks[n]) && "expand" in s)
                            for (i in o = s.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = r);
                        else e[n] = r
                }(u, c.opts.specialEasing); s > o; o++)
                if (n = Yt.prefilters[o].call(c, t, u, c.opts)) return p.isFunction(n.stop) && (p._queueHooks(c.elem, c.opts.queue).stop = p.proxy(n.stop, n)), n;
            return p.map(u, Xt, c), p.isFunction(c.opts.start) && c.opts.start.call(t, c), p.fx.timer(p.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        p.Animation = p.extend(Yt, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return U(i.elem, t, W.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    p.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(A);
                    for (var i, n = 0, r = t.length; r > n; n++) i = t[n], Yt.tweeners[i] = Yt.tweeners[i] || [], Yt.tweeners[i].unshift(e)
                },
                prefilters: [function(t, e, i) {
                    var n, r, o, s, a, l, c, u = this,
                        d = {},
                        h = t.style,
                        f = t.nodeType && $(t),
                        g = z.get(t, "fxshow");
                    for (n in i.queue || (null == (a = p._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || l()
                        }), a.unqueued++, u.always(function() {
                            u.always(function() {
                                a.unqueued--, p.queue(t, "fx").length || a.empty.fire()
                            })
                        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = p.css(t, "display")) ? z.get(t, "olddisplay") || Ct(t.nodeName) : c) && "none" === p.css(t, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", u.always(function() {
                            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                        })), e)
                        if (r = e[n], Gt.exec(r)) {
                            if (delete e[n], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                                if ("show" !== r || !g || void 0 === g[n]) continue;
                                f = !0
                            }
                            d[n] = g && g[n] || p.style(t, n)
                        } else c = void 0;
                    if (p.isEmptyObject(d)) "inline" === ("none" === c ? Ct(t.nodeName) : c) && (h.display = c);
                    else
                        for (n in g ? "hidden" in g && (f = g.hidden) : g = z.access(t, "fxshow", {}), o && (g.hidden = !f), f ? p(t).show() : u.done(function() {
                                p(t).hide()
                            }), u.done(function() {
                                var e;
                                for (e in z.remove(t, "fxshow"), d) p.style(t, e, d[e])
                            }), d) s = Xt(f ? g[n] : 0, n, u), n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
                }],
                prefilter: function(t, e) {
                    e ? Yt.prefilters.unshift(t) : Yt.prefilters.push(t)
                }
            }), p.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? p.extend({}, t) : {
                    complete: i || !i && e || p.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !p.isFunction(e) && e
                };
                return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue)
                }, n
            }, p.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter($).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var r = p.isEmptyObject(t),
                        o = p.speed(e, i, n),
                        s = function() {
                            var e = Yt(this, p.extend({}, t), o);
                            (r || z.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = p.timers,
                            s = z.get(this);
                        if (r) s[r] && s[r].stop && n(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && $t.test(r) && n(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                        !e && i || p.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, i = z.get(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            o = p.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, p.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), p.each(["toggle", "show", "hide"], function(t, e) {
                var i = p.fn[e];
                p.fn[e] = function(t, n, r) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(Vt(e, !0), t, n, r)
                }
            }), p.each({
                slideDown: Vt("show"),
                slideUp: Vt("hide"),
                slideToggle: Vt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                p.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), p.timers = [], p.fx.tick = function() {
                var t, e = 0,
                    i = p.timers;
                for (Ht = p.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || p.fx.stop(), Ht = void 0
            }, p.fx.timer = function(t) {
                p.timers.push(t), t() ? p.fx.start() : p.timers.pop()
            }, p.fx.interval = 13, p.fx.start = function() {
                Wt || (Wt = t.setInterval(p.fx.tick, p.fx.interval))
            }, p.fx.stop = function() {
                t.clearInterval(Wt), Wt = null
            }, p.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, p.fn.delay = function(e, i) {
                return e = p.fx && p.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
                    var r = t.setTimeout(i, e);
                    n.stop = function() {
                        t.clearTimeout(r)
                    }
                })
            },
            function() {
                var t = n.createElement("input"),
                    e = n.createElement("select"),
                    i = e.appendChild(n.createElement("option"));
                t.type = "checkbox", d.checkOn = "" !== t.value, d.optSelected = i.selected, e.disabled = !0, d.optDisabled = !i.disabled, (t = n.createElement("input")).value = "t", t.type = "radio", d.radioValue = "t" === t.value
            }();
        var Qt, Zt = p.expr.attrHandle;
        p.fn.extend({
            attr: function(t, e) {
                return O(this, p.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    p.removeAttr(this, t)
                })
            }
        }), p.extend({
            attr: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? p.prop(t, e, i) : (1 === o && p.isXMLDoc(t) || (e = e.toLowerCase(), r = p.attrHooks[e] || (p.expr.match.bool.test(e) ? Qt : void 0)), void 0 !== i ? null === i ? void p.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = p.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!d.radioValue && "radio" === e && p.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    o = e && e.match(A);
                if (o && 1 === t.nodeType)
                    for (; i = o[r++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), Qt = {
            set: function(t, e, i) {
                return !1 === e ? p.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, p.each(p.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = Zt[e] || p.find.attr;
            Zt[e] = function(t, e, n) {
                var r, o;
                return n || (o = Zt[e], Zt[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, Zt[e] = o), r
            }
        });
        var Jt = /^(?:input|select|textarea|button)$/i,
            Kt = /^(?:a|area)$/i;
        p.fn.extend({
            prop: function(t, e) {
                return O(this, p.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[p.propFix[t] || t]
                })
            }
        }), p.extend({
            prop: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && p.isXMLDoc(t) || (e = p.propFix[e] || e, r = p.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = p.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Jt.test(t.nodeName) || Kt.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), d.optSelected || (p.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            p.propFix[this.toLowerCase()] = this
        });
        var te = /[\t\r\n\f]/g;

        function ee(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        p.fn.extend({
            addClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (p.isFunction(t)) return this.each(function(e) {
                    p(this).addClass(t.call(this, e, ee(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(A) || []; i = this[l++];)
                        if (r = ee(i), n = 1 === i.nodeType && (" " + r + " ").replace(te, " ")) {
                            for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            r !== (a = p.trim(n)) && i.setAttribute("class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (p.isFunction(t)) return this.each(function(e) {
                    p(this).removeClass(t.call(this, e, ee(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(A) || []; i = this[l++];)
                        if (r = ee(i), n = 1 === i.nodeType && (" " + r + " ").replace(te, " ")) {
                            for (s = 0; o = e[s++];)
                                for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                            r !== (a = p.trim(n)) && i.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : p.isFunction(t) ? this.each(function(i) {
                    p(this).toggleClass(t.call(this, i, ee(this), e), e)
                }) : this.each(function() {
                    var e, n, r, o;
                    if ("string" === i)
                        for (n = 0, r = p(this), o = t.match(A) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = ee(this)) && z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : z.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + ee(i) + " ").replace(te, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ie = /\r/g,
            ne = /[\x20\t\r\n\f]+/g;
        p.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = p.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (null == (r = n ? t.call(this, i, p(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : p.isArray(r) && (r = p.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = p.valHooks[r.type] || p.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(ie, "") : null == i ? "" : i : void 0
            }
        }), p.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = p.find.attr(t, "value");
                        return null != e ? e : p.trim(p.text(t)).replace(ne, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (((i = n[l]).selected || l === r) && (d.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !p.nodeName(i.parentNode, "optgroup"))) {
                                if (e = p(i).val(), o) return e;
                                s.push(e)
                            } return s
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, o = p.makeArray(e), s = r.length; s--;)((n = r[s]).selected = p.inArray(p.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), p.each(["radio", "checkbox"], function() {
            p.valHooks[this] = {
                set: function(t, e) {
                    return p.isArray(e) ? t.checked = p.inArray(p(t).val(), e) > -1 : void 0
                }
            }, d.checkOn || (p.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var re = /^(?:focusinfocus|focusoutblur)$/;
        p.extend(p.event, {
            trigger: function(e, i, r, o) {
                var s, a, l, c, d, h, f, g = [r || n],
                    m = u.call(e, "type") ? e.type : e,
                    v = u.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !re.test(m + p.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), d = m.indexOf(":") < 0 && "on" + m, (e = e[p.expando] ? e : new p.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), i = null == i ? [e] : p.makeArray(i, [e]), f = p.event.special[m] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, i))) {
                    if (!o && !f.noBubble && !p.isWindow(r)) {
                        for (c = f.delegateType || m, re.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                        l === (r.ownerDocument || n) && g.push(l.defaultView || l.parentWindow || t)
                    }
                    for (s = 0;
                        (a = g[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? c : f.bindType || m, (h = (z.get(a, "events") || {})[e.type] && z.get(a, "handle")) && h.apply(a, i), (h = d && a[d]) && h.apply && M(a) && (e.result = h.apply(a, i), !1 === e.result && e.preventDefault());
                    return e.type = m, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), i) || !M(r) || d && p.isFunction(r[m]) && !p.isWindow(r) && ((l = r[d]) && (r[d] = null), p.event.triggered = m, r[m](), p.event.triggered = void 0, l && (r[d] = l)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = p.extend(new p.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                p.event.trigger(n, null, e)
            }
        }), p.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    p.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? p.event.trigger(t, e, i, !0) : void 0
            }
        }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            p.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), p.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), d.focusin = "onfocusin" in t, d.focusin || p.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                p.event.simulate(e, t.target, p.event.fix(t))
            };
            p.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = z.access(n, e);
                    r || n.addEventListener(t, i, !0), z.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = z.access(n, e) - 1;
                    r ? z.access(n, e, r) : (n.removeEventListener(t, i, !0), z.remove(n, e))
                }
            }
        });
        var oe = t.location,
            se = p.now(),
            ae = /\?/;
        p.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, p.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + e), i
        };
        var le = /#.*$/,
            ce = /([?&])_=[^&]*/,
            ue = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            de = /^(?:GET|HEAD)$/,
            he = /^\/\//,
            pe = {},
            fe = {},
            ge = "*/".concat("*"),
            me = n.createElement("a");

        function ve(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    o = e.toLowerCase().match(A) || [];
                if (p.isFunction(i))
                    for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function ye(t, e, i, n) {
            var r = {},
                o = t === fe;

            function s(a) {
                var l;
                return r[a] = !0, p.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                }), l
            }
            return s(e.dataTypes[0]) || !r["*"] && s("*")
        }

        function we(t, e) {
            var i, n, r = p.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && p.extend(!0, t, n), t
        }
        me.href = oe.href, p.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: oe.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(oe.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ge,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": p.parseJSON,
                    "text xml": p.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? we(we(t, p.ajaxSettings), e) : we(p.ajaxSettings, t)
            },
            ajaxPrefilter: ve(pe),
            ajaxTransport: ve(fe),
            ajax: function(e, i) {
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var r, o, s, a, l, c, u, d, h = p.ajaxSetup({}, i),
                    f = h.context || h,
                    g = h.context && (f.nodeType || f.jquery) ? p(f) : p.event,
                    m = p.Deferred(),
                    v = p.Callbacks("once memory"),
                    y = h.statusCode || {},
                    w = {},
                    b = {},
                    x = 0,
                    _ = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; e = ue.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return x || (t = b[i] = b[i] || t, w[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return x || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > x)
                                    for (e in t) y[e] = [y[e], t[e]];
                                else C.always(t[C.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || _;
                            return r && r.abort(e), S(0, e), this
                        }
                    };
                if (m.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, h.url = ((e || h.url || oe.href) + "").replace(le, "").replace(he, oe.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = p.trim(h.dataType || "*").toLowerCase().match(A) || [""], null == h.crossDomain) {
                    c = n.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = me.protocol + "//" + me.host != c.protocol + "//" + c.host
                    } catch (t) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = p.param(h.data, h.traditional)), ye(pe, h, i, C), 2 === x) return C;
                for (d in (u = p.event && h.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !de.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (ae.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = ce.test(o) ? o.replace(ce, "$1_=" + se++) : o + (ae.test(o) ? "&" : "?") + "_=" + se++)), h.ifModified && (p.lastModified[o] && C.setRequestHeader("If-Modified-Since", p.lastModified[o]), p.etag[o] && C.setRequestHeader("If-None-Match", p.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ge + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, C, h) || 2 === x)) return C.abort();
                for (d in _ = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[d](h[d]);
                if (r = ye(fe, h, i, C)) {
                    if (C.readyState = 1, u && g.trigger("ajaxSend", [C, h]), 2 === x) return C;
                    h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        x = 1, r.send(w, S)
                    } catch (t) {
                        if (!(2 > x)) throw t;
                        S(-1, t)
                    }
                } else S(-1, "No Transport");

                function S(e, i, n, a) {
                    var c, d, w, b, _, S = i;
                    2 !== x && (x = 2, l && t.clearTimeout(l), r = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (b = function(t, e, i) {
                        for (var n, r, o, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (r in a)
                                if (a[r] && a[r].test(n)) {
                                    l.unshift(r);
                                    break
                                } if (l[0] in i) o = l[0];
                        else {
                            for (r in i) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    o = r;
                                    break
                                }
                                s || (s = r)
                            }
                            o = o || s
                        }
                        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
                    }(h, C, n)), b = function(t, e, i, n) {
                        var r, o, s, a, l, c = {},
                            u = t.dataTypes.slice();
                        if (u[1])
                            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                        for (o = u.shift(); o;)
                            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o]))
                                for (r in c)
                                    if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(h, b, C, c), c ? (h.ifModified && ((_ = C.getResponseHeader("Last-Modified")) && (p.lastModified[o] = _), (_ = C.getResponseHeader("etag")) && (p.etag[o] = _)), 204 === e || "HEAD" === h.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, d = b.data, c = !(w = b.error))) : (w = S, !e && S || (S = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (i || S) + "", c ? m.resolveWith(f, [d, S, C]) : m.rejectWith(f, [C, S, w]), C.statusCode(y), y = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? d : w]), v.fireWith(f, [C, S]), u && (g.trigger("ajaxComplete", [C, h]), --p.active || p.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function(t, e, i) {
                return p.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return p.get(t, void 0, e, "script")
            }
        }), p.each(["get", "post"], function(t, e) {
            p[e] = function(t, i, n, r) {
                return p.isFunction(i) && (r = r || n, n = i, i = void 0), p.ajax(p.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, p.isPlainObject(t) && t))
            }
        }), p._evalUrl = function(t) {
            return p.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, p.fn.extend({
            wrapAll: function(t) {
                var e;
                return p.isFunction(t) ? this.each(function(e) {
                    p(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = p(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return p.isFunction(t) ? this.each(function(e) {
                    p(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = p(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = p.isFunction(t);
                return this.each(function(i) {
                    p(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                }).end()
            }
        }), p.expr.filters.hidden = function(t) {
            return !p.expr.filters.visible(t)
        }, p.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var be = /%20/g,
            xe = /\[\]$/,
            _e = /\r?\n/g,
            Ce = /^(?:submit|button|image|reset|file)$/i,
            Se = /^(?:input|select|textarea|keygen)/i;

        function Te(t, e, i, n) {
            var r;
            if (p.isArray(e)) p.each(e, function(e, r) {
                i || xe.test(t) ? n(t, r) : Te(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== p.type(e)) n(t, e);
            else
                for (r in e) Te(t + "[" + r + "]", e[r], i, n)
        }
        p.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    e = p.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(t) || t.jquery && !p.isPlainObject(t)) p.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) Te(i, t[i], e, r);
            return n.join("&").replace(be, "+")
        }, p.fn.extend({
            serialize: function() {
                return p.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = p.prop(this, "elements");
                    return t ? p.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !p(this).is(":disabled") && Se.test(this.nodeName) && !Ce.test(t) && (this.checked || !V.test(t))
                }).map(function(t, e) {
                    var i = p(this).val();
                    return null == i ? null : p.isArray(i) ? p.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(_e, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(_e, "\r\n")
                    }
                }).get()
            }
        }), p.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var ke = {
                0: 200,
                1223: 204
            },
            Ee = p.ajaxSettings.xhr();
        d.cors = !!Ee && "withCredentials" in Ee, d.ajax = Ee = !!Ee, p.ajaxTransport(function(e) {
            var i, n;
            return d.cors || Ee && !e.crossDomain ? {
                send: function(r, o) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(ke[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (i) throw t
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
        }), p.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return p.globalEval(t), t
                }
            }
        }), p.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), p.ajaxTransport("script", function(t) {
            var e, i;
            if (t.crossDomain) return {
                send: function(r, o) {
                    e = p("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), n.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        });
        var Fe = [],
            Le = /(=)\?(?=&|$)|\?\?/;
        p.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Fe.pop() || p.expando + "_" + se++;
                return this[t] = !0, t
            }
        }), p.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, o, s, a = !1 !== e.jsonp && (Le.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Le.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = p.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Le, "$1" + r) : !1 !== e.jsonp && (e.url += (ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || p.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === o ? p(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, Fe.push(r)), s && p.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), p.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || n;
            var r = C.exec(t),
                o = !i && [];
            return r ? [e.createElement(r[1])] : (r = tt([t], e, o), o && o.length && p(o).remove(), p.merge([], r.childNodes))
        };
        var De = p.fn.load;

        function qe(t) {
            return p.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        p.fn.load = function(t, e, i) {
            if ("string" != typeof t && De) return De.apply(this, arguments);
            var n, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (n = p.trim(t.slice(a)), t = t.slice(0, a)), p.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && p.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(n ? p("<div>").append(p.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                s.each(function() {
                    i.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            p.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), p.expr.filters.animated = function(t) {
            return p.grep(p.timers, function(e) {
                return t === e.elem
            }).length
        }, p.offset = {
            setOffset: function(t, e, i) {
                var n, r, o, s, a, l, c = p.css(t, "position"),
                    u = p(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), o = p.css(t, "top"), l = p.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), p.isFunction(e) && (e = e.call(t, i, p.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : u.css(d)
            }
        }, p.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    p.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = n && n.ownerDocument;
                return o ? (e = o.documentElement, p.contains(e, n) ? (r = n.getBoundingClientRect(), i = qe(o), {
                    top: r.top + i.pageYOffset - e.clientTop,
                    left: r.left + i.pageXOffset - e.clientLeft
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === p.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), p.nodeName(t[0], "html") || (n = t.offset()), n.top += p.css(t[0], "borderTopWidth", !0), n.left += p.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - p.css(i, "marginTop", !0),
                        left: e.left - n.left - p.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === p.css(t, "position");) t = t.offsetParent;
                    return t || Ft
                })
            }
        }), p.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            p.fn[t] = function(n) {
                return O(this, function(t, n, r) {
                    var o = qe(t);
                    return void 0 === r ? o ? o[e] : t[n] : void(o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : t[n] = r)
                }, t, n, arguments.length)
            }
        }), p.each(["top", "left"], function(t, e) {
            p.cssHooks[e] = Dt(d.pixelPosition, function(t, i) {
                return i ? (i = Lt(t, e), Tt.test(i) ? p(t).position()[e] + "px" : i) : void 0
            })
        }), p.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            p.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                p.fn[n] = function(n, r) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        s = i || (!0 === n || !0 === r ? "margin" : "border");
                    return O(this, function(e, i, n) {
                        var r;
                        return p.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? p.css(e, i, s) : p.style(e, i, n, s)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), p.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return p
        });
        var Ae = t.jQuery,
            Pe = t.$;
        return p.noConflict = function(e) {
            return t.$ === p && (t.$ = Pe), e && t.jQuery === p && (t.jQuery = Ae), p
        }, e || (t.jQuery = t.$ = p), p
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        t.ui = t.ui || {}, t.ui.version = "1.12.1";
        var e = 0,
            i = Array.prototype.slice;
        t.cleanData = function(e) {
                return function(i) {
                    var n, r, o;
                    for (o = 0; null != (r = i[o]); o++) try {
                        (n = t._data(r, "events")) && n.remove && t(r).triggerHandler("remove")
                    } catch (t) {}
                    e(i)
                }
            }(t.cleanData), t.widget = function(e, i, n) {
                var r, o, s, a = {},
                    l = e.split(".")[0],
                    c = l + "-" + (e = e.split(".")[1]);
                return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][c.toLowerCase()] = function(e) {
                    return !!t.data(e, c)
                }, t[l] = t[l] || {}, r = t[l][e], o = t[l][e] = function(t, e) {
                    return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
                }, t.extend(o, r, {
                    version: n.version,
                    _proto: t.extend({}, n),
                    _childConstructors: []
                }), (s = new i).options = t.widget.extend({}, s.options), t.each(n, function(e, n) {
                    return t.isFunction(n) ? void(a[e] = function() {
                        function t() {
                            return i.prototype[e].apply(this, arguments)
                        }

                        function r(t) {
                            return i.prototype[e].apply(this, t)
                        }
                        return function() {
                            var e, i = this._super,
                                o = this._superApply;
                            return this._super = t, this._superApply = r, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                        }
                    }()) : void(a[e] = n)
                }), o.prototype = t.widget.extend(s, {
                    widgetEventPrefix: r && s.widgetEventPrefix || e
                }, a, {
                    constructor: o,
                    namespace: l,
                    widgetName: e,
                    widgetFullName: c
                }), r ? (t.each(r._childConstructors, function(e, i) {
                    var n = i.prototype;
                    t.widget(n.namespace + "." + n.widgetName, o, i._proto)
                }), delete r._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
            }, t.widget.extend = function(e) {
                for (var n, r, o = i.call(arguments, 1), s = 0, a = o.length; a > s; s++)
                    for (n in o[s]) r = o[s][n], o[s].hasOwnProperty(n) && void 0 !== r && (e[n] = t.isPlainObject(r) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], r) : t.widget.extend({}, r) : r);
                return e
            }, t.widget.bridge = function(e, n) {
                var r = n.prototype.widgetFullName || e;
                t.fn[e] = function(o) {
                    var s = "string" == typeof o,
                        a = i.call(arguments, 1),
                        l = this;
                    return s ? this.length || "instance" !== o ? this.each(function() {
                        var i, n = t.data(this, r);
                        return "instance" === o ? (l = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
                    }) : l = void 0 : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each(function() {
                        var e = t.data(this, r);
                        e ? (e.option(o || {}), e._init && e._init()) : t.data(this, r, new n(o, this))
                    })), l
                }
            }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(i, n) {
                    n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === n && this.destroy()
                        }
                    }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    var e = this;
                    this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                        e._removeClass(i, t)
                    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element
                },
                option: function(e, i) {
                    var n, r, o, s = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (s = {}, n = e.split("."), e = n.shift(), n.length) {
                            for (r = s[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) r[n[o]] = r[n[o]] || {}, r = r[n[o]];
                            if (e = n.pop(), 1 === arguments.length) return void 0 === r[e] ? null : r[e];
                            r[e] = i
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                            s[e] = i
                        } return this._setOptions(s), this
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this
                },
                _setOption: function(t, e) {
                    return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                },
                _setOptionClasses: function(e) {
                    var i, n, r;
                    for (i in e) r = this.classesElementLookup[i], e[i] !== this.options.classes[i] && r && r.length && (n = t(r.get()), this._removeClass(r, i), n.addClass(this._classes({
                        element: n,
                        keys: i,
                        classes: e,
                        add: !0
                    })))
                },
                _setOptionDisabled: function(t) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _classes: function(e) {
                    function i(i, o) {
                        var s, a;
                        for (a = 0; i.length > a; a++) s = r.classesElementLookup[i[a]] || t(), s = e.add ? t(t.unique(s.get().concat(e.element.get()))) : t(s.not(e.element).get()), r.classesElementLookup[i[a]] = s, n.push(i[a]), o && e.classes[i[a]] && n.push(e.classes[i[a]])
                    }
                    var n = [],
                        r = this;
                    return e = t.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, e), this._on(e.element, {
                        remove: "_untrackClassesElement"
                    }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
                },
                _untrackClassesElement: function(e) {
                    var i = this;
                    t.each(i.classesElementLookup, function(n, r) {
                        -1 !== t.inArray(e.target, r) && (i.classesElementLookup[n] = t(r.not(e.target).get()))
                    })
                },
                _removeClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !1)
                },
                _addClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !0)
                },
                _toggleClass: function(t, e, i, n) {
                    n = "boolean" == typeof n ? n : i;
                    var r = "string" == typeof t || null === t,
                        o = {
                            extra: r ? e : i,
                            keys: r ? t : e,
                            element: r ? this.element : t,
                            add: n
                        };
                    return o.element.toggleClass(this._classes(o), n), this
                },
                _on: function(e, i, n) {
                    var r, o = this;
                    "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = r = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, r = this.widget()), t.each(n, function(n, s) {
                        function a() {
                            return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? o[s] : s).apply(o, arguments) : void 0
                        }
                        "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                        var l = n.match(/^([\w:-]*)\s*(.*)$/),
                            c = l[1] + o.eventNamespace,
                            u = l[2];
                        u ? r.on(c, u, a) : i.on(c, a)
                    })
                },
                _off: function(e, i) {
                    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                },
                _delay: function(t, e) {
                    var i = this;
                    return setTimeout(function() {
                        return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                    }, e || 0)
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e), this._on(e, {
                        mouseenter: function(e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e), this._on(e, {
                        focusin: function(e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(e, i, n) {
                    var r, o, s = this.options[e];
                    if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                        for (r in o) r in i || (i[r] = o[r]);
                    return this.element.trigger(i, n), !(t.isFunction(s) && !1 === s.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
                }
            }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(e, i) {
                t.Widget.prototype["_" + e] = function(n, r, o) {
                    "string" == typeof r && (r = {
                        effect: r
                    });
                    var s, a = r ? !0 === r || "number" == typeof r ? i : r.effect || i : e;
                    "number" == typeof(r = r || {}) && (r = {
                        duration: r
                    }), s = !t.isEmptyObject(r), r.complete = o, r.delay && n.delay(r.delay), s && t.effects && t.effects.effect[a] ? n[e](r) : a !== e && n[a] ? n[a](r.duration, r.easing, o) : n.queue(function(i) {
                        t(this)[e](), o && o.call(n[0]), i()
                    })
                }
            }), t.widget,
            function() {
                function e(t, e, i) {
                    return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
                }

                function i(e, i) {
                    return parseInt(t.css(e, i), 10) || 0
                }
                var n, r = Math.max,
                    o = Math.abs,
                    s = /left|center|right/,
                    a = /top|center|bottom/,
                    l = /[\+\-]\d+(\.[\d]+)?%?/,
                    c = /^\w+/,
                    u = /%$/,
                    d = t.fn.position;
                t.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== n) return n;
                        var e, i, r = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            o = r.children()[0];
                        return t("body").append(r), e = o.offsetWidth, r.css("overflow", "scroll"), e === (i = o.offsetWidth) && (i = r[0].clientWidth), r.remove(), n = e - i
                    },
                    getScrollInfo: function(e) {
                        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                            n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                            r = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                        return {
                            width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                            height: r ? t.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(e) {
                        var i = t(e || window),
                            n = t.isWindow(i[0]),
                            r = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: n,
                            isDocument: r,
                            offset: !n && !r ? t(e).offset() : {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: i.outerWidth(),
                            height: i.outerHeight()
                        }
                    }
                }, t.fn.position = function(n) {
                    if (!n || !n.of) return d.apply(this, arguments);
                    n = t.extend({}, n);
                    var u, h, p, f, g, m, v = t(n.of),
                        y = t.position.getWithinInfo(n.within),
                        w = t.position.getScrollInfo(y),
                        b = (n.collision || "flip").split(" "),
                        x = {};
                    return m = function(e) {
                        var i = e[0];
                        return 9 === i.nodeType ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: 0,
                                left: 0
                            }
                        } : t.isWindow(i) ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: e.scrollTop(),
                                left: e.scrollLeft()
                            }
                        } : i.preventDefault ? {
                            width: 0,
                            height: 0,
                            offset: {
                                top: i.pageY,
                                left: i.pageX
                            }
                        } : {
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            offset: e.offset()
                        }
                    }(v), v[0].preventDefault && (n.at = "left top"), h = m.width, p = m.height, f = m.offset, g = t.extend({}, f), t.each(["my", "at"], function() {
                        var t, e, i = (n[this] || "").split(" ");
                        1 === i.length && (i = s.test(i[0]) ? i.concat(["center"]) : a.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = s.test(i[0]) ? i[0] : "center", i[1] = a.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), x[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                    }), 1 === b.length && (b[1] = b[0]), "right" === n.at[0] ? g.left += h : "center" === n.at[0] && (g.left += h / 2), "bottom" === n.at[1] ? g.top += p : "center" === n.at[1] && (g.top += p / 2), u = e(x.at, h, p), g.left += u[0], g.top += u[1], this.each(function() {
                        var s, a, l = t(this),
                            c = l.outerWidth(),
                            d = l.outerHeight(),
                            m = i(this, "marginLeft"),
                            _ = i(this, "marginTop"),
                            C = c + m + i(this, "marginRight") + w.width,
                            S = d + _ + i(this, "marginBottom") + w.height,
                            T = t.extend({}, g),
                            k = e(x.my, l.outerWidth(), l.outerHeight());
                        "right" === n.my[0] ? T.left -= c : "center" === n.my[0] && (T.left -= c / 2), "bottom" === n.my[1] ? T.top -= d : "center" === n.my[1] && (T.top -= d / 2), T.left += k[0], T.top += k[1], s = {
                            marginLeft: m,
                            marginTop: _
                        }, t.each(["left", "top"], function(e, i) {
                            t.ui.position[b[e]] && t.ui.position[b[e]][i](T, {
                                targetWidth: h,
                                targetHeight: p,
                                elemWidth: c,
                                elemHeight: d,
                                collisionPosition: s,
                                collisionWidth: C,
                                collisionHeight: S,
                                offset: [u[0] + k[0], u[1] + k[1]],
                                my: n.my,
                                at: n.at,
                                within: y,
                                elem: l
                            })
                        }), n.using && (a = function(t) {
                            var e = f.left - T.left,
                                i = e + h - c,
                                s = f.top - T.top,
                                a = s + p - d,
                                u = {
                                    target: {
                                        element: v,
                                        left: f.left,
                                        top: f.top,
                                        width: h,
                                        height: p
                                    },
                                    element: {
                                        element: l,
                                        left: T.left,
                                        top: T.top,
                                        width: c,
                                        height: d
                                    },
                                    horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                    vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                                };
                            c > h && h > o(e + i) && (u.horizontal = "center"), d > p && p > o(s + a) && (u.vertical = "middle"), u.important = r(o(e), o(i)) > r(o(s), o(a)) ? "horizontal" : "vertical", n.using.call(this, t, u)
                        }), l.offset(t.extend(T, {
                            using: a
                        }))
                    })
                }, t.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var i, n = e.within,
                                o = n.isWindow ? n.scrollLeft : n.offset.left,
                                s = n.width,
                                a = t.left - e.collisionPosition.marginLeft,
                                l = o - a,
                                c = a + e.collisionWidth - s - o;
                            e.collisionWidth > s ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - s - o, t.left += l - i) : t.left = c > 0 && 0 >= l ? o : l > c ? o + s - e.collisionWidth : o : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = r(t.left - a, t.left)
                        },
                        top: function(t, e) {
                            var i, n = e.within,
                                o = n.isWindow ? n.scrollTop : n.offset.top,
                                s = e.within.height,
                                a = t.top - e.collisionPosition.marginTop,
                                l = o - a,
                                c = a + e.collisionHeight - s - o;
                            e.collisionHeight > s ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - s - o, t.top += l - i) : t.top = c > 0 && 0 >= l ? o : l > c ? o + s - e.collisionHeight : o : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = r(t.top - a, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var i, n, r = e.within,
                                s = r.offset.left + r.scrollLeft,
                                a = r.width,
                                l = r.isWindow ? r.scrollLeft : r.offset.left,
                                c = t.left - e.collisionPosition.marginLeft,
                                u = c - l,
                                d = c + e.collisionWidth - a - l,
                                h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                f = -2 * e.offset[0];
                            0 > u ? (0 > (i = t.left + h + p + f + e.collisionWidth - a - s) || o(u) > i) && (t.left += h + p + f) : d > 0 && (((n = t.left - e.collisionPosition.marginLeft + h + p + f - l) > 0 || d > o(n)) && (t.left += h + p + f))
                        },
                        top: function(t, e) {
                            var i, n, r = e.within,
                                s = r.offset.top + r.scrollTop,
                                a = r.height,
                                l = r.isWindow ? r.scrollTop : r.offset.top,
                                c = t.top - e.collisionPosition.marginTop,
                                u = c - l,
                                d = c + e.collisionHeight - a - l,
                                h = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                f = -2 * e.offset[1];
                            0 > u ? (0 > (n = t.top + h + p + f + e.collisionHeight - a - s) || o(u) > n) && (t.top += h + p + f) : d > 0 && (((i = t.top - e.collisionPosition.marginTop + h + p + f - l) > 0 || d > o(i)) && (t.top += h + p + f))
                        }
                    },
                    flipfit: {
                        left: function() {
                            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                }
            }(), t.ui.position, t.fn.form = function() {
                return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
            }, t.ui.formResetMixin = {
                _formResetHandler: function() {
                    var e = t(this);
                    setTimeout(function() {
                        var i = e.data("ui-form-reset-instances");
                        t.each(i, function() {
                            this.refresh()
                        })
                    })
                },
                _bindFormResetHandler: function() {
                    if (this.form = this.element.form(), this.form.length) {
                        var t = this.form.data("ui-form-reset-instances") || [];
                        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                    }
                },
                _unbindFormResetHandler: function() {
                    if (this.form.length) {
                        var e = this.form.data("ui-form-reset-instances");
                        e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                    }
                }
            }, t.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }, t.fn.extend({
                uniqueId: function() {
                    var t = 0;
                    return function() {
                        return this.each(function() {
                            this.id || (this.id = "ui-id-" + ++t)
                        })
                    }
                }(),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                    })
                }
            }), t.ui.safeActiveElement = function(t) {
                var e;
                try {
                    e = t.activeElement
                } catch (i) {
                    e = t.body
                }
                return e || (e = t.body), e.nodeName || (e = t.body), e
            }, t.widget("ui.menu", {
                version: "1.12.1",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-caret-1-e"
                    },
                    items: "> *",
                    menus: "ul",
                    position: {
                        my: "left top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                        role: this.options.role,
                        tabIndex: 0
                    }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                        "mousedown .ui-menu-item": function(t) {
                            t.preventDefault()
                        },
                        "click .ui-menu-item": function(e) {
                            var i = t(e.target),
                                n = t(t.ui.safeActiveElement(this.document[0]));
                            !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(e) {
                            if (!this.previousFilter) {
                                var i = t(e.target).closest(".ui-menu-item"),
                                    n = t(e.currentTarget);
                                i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                            }
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(t, e) {
                            var i = this.active || this.element.find(this.options.items).eq(0);
                            e || this.focus(t, i)
                        },
                        blur: function(e) {
                            this._delay(function() {
                                !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                            })
                        },
                        keydown: "_keydown"
                    }), this.refresh(), this._on(this.document, {
                        click: function(t) {
                            this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                        }
                    })
                },
                _destroy: function() {
                    var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
                        var e = t(this);
                        e.data("ui-menu-submenu-caret") && e.remove()
                    })
                },
                _keydown: function(e) {
                    var i, n, r, o, s = !0;
                    switch (e.keyCode) {
                        case t.ui.keyCode.PAGE_UP:
                            this.previousPage(e);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            this.nextPage(e);
                            break;
                        case t.ui.keyCode.HOME:
                            this._move("first", "first", e);
                            break;
                        case t.ui.keyCode.END:
                            this._move("last", "last", e);
                            break;
                        case t.ui.keyCode.UP:
                            this.previous(e);
                            break;
                        case t.ui.keyCode.DOWN:
                            this.next(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this.collapse(e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                            break;
                        case t.ui.keyCode.ENTER:
                        case t.ui.keyCode.SPACE:
                            this._activate(e);
                            break;
                        case t.ui.keyCode.ESCAPE:
                            this.collapse(e);
                            break;
                        default:
                            s = !1, n = this.previousFilter || "", o = !1, r = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), r === n ? o = !0 : r = n + r, i = this._filterMenuItems(r), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (r = String.fromCharCode(e.keyCode), i = this._filterMenuItems(r)), i.length ? (this.focus(e, i), this.previousFilter = r, this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1e3)) : delete this.previousFilter
                    }
                    s && e.preventDefault()
                },
                _activate: function(t) {
                    this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
                },
                refresh: function() {
                    var e, i, n, r, o = this,
                        s = this.options.icons.submenu,
                        a = this.element.find(this.options.menus);
                    this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = a.filter(":not(.ui-menu)").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var e = t(this),
                            i = e.prev(),
                            n = t("<span>").data("ui-menu-submenu-caret", !0);
                        o._addClass(n, "ui-menu-icon", "ui-icon " + s), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                    }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                        var e = t(this);
                        o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
                    }), r = (n = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    }), this._addClass(n, "ui-menu-item")._addClass(r, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    } [this.options.role]
                },
                _setOption: function(t, e) {
                    if ("icons" === t) {
                        var i = this.element.find(".ui-menu-icon");
                        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                    }
                    this._super(t, e)
                },
                _setOptionDisabled: function(t) {
                    this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
                },
                focus: function(t, e) {
                    var i, n, r;
                    this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), r = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(r, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                        this._close()
                    }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                        item: e
                    })
                },
                _scrollIntoView: function(e) {
                    var i, n, r, o, s, a;
                    this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, r = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), s = this.activeMenu.height(), a = e.outerHeight(), 0 > r ? this.activeMenu.scrollTop(o + r) : r + a > s && this.activeMenu.scrollTop(o + r - s + a))
                },
                blur: function(t, e) {
                    e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                        item: this.active
                    }), this.active = null)
                },
                _startOpening: function(t) {
                    clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                        this._close(), this._open(t)
                    }, this.delay))
                },
                _open: function(e) {
                    var i = t.extend({
                        of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
                },
                collapseAll: function(e, i) {
                    clearTimeout(this.timer), this.timer = this._delay(function() {
                        var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                        n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
                    }, this.delay)
                },
                _close: function(t) {
                    t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
                },
                _closeOnDocumentClick: function(e) {
                    return !t(e.target).closest(".ui-menu").length
                },
                _isDivider: function(t) {
                    return !/[^\-\u2014\u2013\s]/.test(t.text())
                },
                collapse: function(t) {
                    var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    e && e.length && (this._close(), this.focus(t, e))
                },
                expand: function(t) {
                    var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    e && e.length && (this._open(e.parent()), this._delay(function() {
                        this.focus(t, e)
                    }))
                },
                next: function(t) {
                    this._move("next", "first", t)
                },
                previous: function(t) {
                    this._move("prev", "last", t)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(t, e, i) {
                    var n;
                    this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
                },
                nextPage: function(e) {
                    var i, n, r;
                    return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, r = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        return 0 > (i = t(this)).offset().top - n - r
                    }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
                },
                previousPage: function(e) {
                    var i, n, r;
                    return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, r = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        return (i = t(this)).offset().top - n + r > 0
                    }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(e) {
                    this.active = this.active || t(e.target).closest(".ui-menu-item");
                    var i = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
                },
                _filterMenuItems: function(e) {
                    var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        n = RegExp("^" + i, "i");
                    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                        return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
                    })
                }
            }), t.widget("ui.autocomplete", {
                version: "1.12.1",
                defaultElement: "<input>",
                options: {
                    appendTo: null,
                    autoFocus: !1,
                    delay: 300,
                    minLength: 1,
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    source: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    response: null,
                    search: null,
                    select: null
                },
                requestIndex: 0,
                pending: 0,
                _create: function() {
                    var e, i, n, r = this.element[0].nodeName.toLowerCase(),
                        o = "textarea" === r,
                        s = "input" === r;
                    this.isMultiLine = o || !s && this._isContentEditable(this.element), this.valueMethod = this.element[o || s ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                        keydown: function(r) {
                            if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                            e = !1, n = !1, i = !1;
                            var o = t.ui.keyCode;
                            switch (r.keyCode) {
                                case o.PAGE_UP:
                                    e = !0, this._move("previousPage", r);
                                    break;
                                case o.PAGE_DOWN:
                                    e = !0, this._move("nextPage", r);
                                    break;
                                case o.UP:
                                    e = !0, this._keyEvent("previous", r);
                                    break;
                                case o.DOWN:
                                    e = !0, this._keyEvent("next", r);
                                    break;
                                case o.ENTER:
                                    this.menu.active && (e = !0, r.preventDefault(), this.menu.select(r));
                                    break;
                                case o.TAB:
                                    this.menu.active && this.menu.select(r);
                                    break;
                                case o.ESCAPE:
                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(r), r.preventDefault());
                                    break;
                                default:
                                    i = !0, this._searchTimeout(r)
                            }
                        },
                        keypress: function(n) {
                            if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                            if (!i) {
                                var r = t.ui.keyCode;
                                switch (n.keyCode) {
                                    case r.PAGE_UP:
                                        this._move("previousPage", n);
                                        break;
                                    case r.PAGE_DOWN:
                                        this._move("nextPage", n);
                                        break;
                                    case r.UP:
                                        this._keyEvent("previous", n);
                                        break;
                                    case r.DOWN:
                                        this._keyEvent("next", n)
                                }
                            }
                        },
                        input: function(t) {
                            return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                        },
                        focus: function() {
                            this.selectedItem = null, this.previous = this._value()
                        },
                        blur: function(t) {
                            return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                        }
                    }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                        role: null
                    }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                        mousedown: function(e) {
                            e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                                delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                            })
                        },
                        menufocus: function(e, i) {
                            var n, r;
                            return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                                t(e.target).trigger(e.originalEvent)
                            })) : (r = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                                item: r
                            }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(r.value), void((n = i.item.attr("aria-label") || r.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
                        },
                        menuselect: function(e, i) {
                            var n = i.item.data("ui-autocomplete-item"),
                                r = this.previous;
                            this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = r, this._delay(function() {
                                this.previous = r, this.selectedItem = n
                            })), !1 !== this._trigger("select", e, {
                                item: n
                            }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                        }
                    }), this.liveRegion = t("<div>", {
                        role: "status",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _destroy: function() {
                    clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
                },
                _setOption: function(t, e) {
                    this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
                },
                _isEventTargetInWidget: function(e) {
                    var i = this.menu.element[0];
                    return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
                },
                _closeOnClickOutside: function(t) {
                    this._isEventTargetInWidget(t) || this.close()
                },
                _appendTo: function() {
                    var e = this.options.appendTo;
                    return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
                },
                _initSource: function() {
                    var e, i, n = this;
                    t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                        n(t.ui.autocomplete.filter(e, i.term))
                    }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, r) {
                        n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                            url: i,
                            data: e,
                            dataType: "json",
                            success: function(t) {
                                r(t)
                            },
                            error: function() {
                                r([])
                            }
                        })
                    }) : this.source = this.options.source
                },
                _searchTimeout: function(t) {
                    clearTimeout(this.searching), this.searching = this._delay(function() {
                        var e = this.term === this._value(),
                            i = this.menu.element.is(":visible"),
                            n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                        (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
                    }, this.options.delay)
                },
                search: function(t, e) {
                    return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
                },
                _search: function(t) {
                    this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                        term: t
                    }, this._response())
                },
                _response: function() {
                    var e = ++this.requestIndex;
                    return t.proxy(function(t) {
                        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                    }, this)
                },
                __response: function(t) {
                    t && (t = this._normalize(t)), this._trigger("response", null, {
                        content: t
                    }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
                },
                close: function(t) {
                    this.cancelSearch = !0, this._close(t)
                },
                _close: function(t) {
                    this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
                },
                _change: function(t) {
                    this.previous !== this._value() && this._trigger("change", t, {
                        item: this.selectedItem
                    })
                },
                _normalize: function(e) {
                    return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                        return "string" == typeof e ? {
                            label: e,
                            value: e
                        } : t.extend({}, e, {
                            label: e.label || e.value,
                            value: e.value || e.label
                        })
                    })
                },
                _suggest: function(e) {
                    var i = this.menu.element.empty();
                    this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                        of: this.element
                    }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                        mousedown: "_closeOnClickOutside"
                    })
                },
                _resizeMenu: function() {
                    var t = this.menu.element;
                    t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
                },
                _renderMenu: function(e, i) {
                    var n = this;
                    t.each(i, function(t, i) {
                        n._renderItemData(e, i)
                    })
                },
                _renderItemData: function(t, e) {
                    return this._renderItem(t, e).data("ui-autocomplete-item", e)
                },
                _renderItem: function(e, i) {
                    return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
                },
                _move: function(t, e) {
                    return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
                },
                widget: function() {
                    return this.menu.element
                },
                _value: function() {
                    return this.valueMethod.apply(this.element, arguments)
                },
                _keyEvent: function(t, e) {
                    (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
                },
                _isContentEditable: function(t) {
                    if (!t.length) return !1;
                    var e = t.prop("contentEditable");
                    return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
                }
            }), t.extend(t.ui.autocomplete, {
                escapeRegex: function(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                },
                filter: function(e, i) {
                    var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                    return t.grep(e, function(t) {
                        return n.test(t.label || t.value || t)
                    })
                }
            }), t.widget("ui.autocomplete", t.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function(t) {
                            return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function(e) {
                    var i;
                    this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
                }
            }), t.ui.autocomplete, t.widget("ui.tooltip", {
                version: "1.12.1",
                options: {
                    classes: {
                        "ui-tooltip": "ui-corner-all ui-widget-shadow"
                    },
                    content: function() {
                        var e = t(this).attr("title") || "";
                        return t("<a>").text(e).html()
                    },
                    hide: !0,
                    items: "[title]:not([disabled])",
                    position: {
                        my: "left top+15",
                        at: "left bottom",
                        collision: "flipfit flip"
                    },
                    show: !0,
                    track: !1,
                    close: null,
                    open: null
                },
                _addDescribedBy: function(e, i) {
                    var n = (e.attr("aria-describedby") || "").split(/\s+/);
                    n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
                },
                _removeDescribedBy: function(e) {
                    var i = e.data("ui-tooltip-id"),
                        n = (e.attr("aria-describedby") || "").split(/\s+/),
                        r = t.inArray(i, n); - 1 !== r && n.splice(r, 1), e.removeData("ui-tooltip-id"), (n = t.trim(n.join(" "))) ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
                },
                _create: function() {
                    this._on({
                        mouseover: "open",
                        focusin: "open"
                    }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                        role: "log",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
                },
                _setOption: function(e, i) {
                    var n = this;
                    this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                        n._updateContent(e.element)
                    })
                },
                _setOptionDisabled: function(t) {
                    this[t ? "_disable" : "_enable"]()
                },
                _disable: function() {
                    var e = this;
                    t.each(this.tooltips, function(i, n) {
                        var r = t.Event("blur");
                        r.target = r.currentTarget = n.element[0], e.close(r, !0)
                    }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                        var e = t(this);
                        return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
                    }))
                },
                _enable: function() {
                    this.disabledTitles.each(function() {
                        var e = t(this);
                        e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                    }), this.disabledTitles = t([])
                },
                open: function(e) {
                    var i = this,
                        n = t(e ? e.target : this.element).closest(this.options.items);
                    n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                        var e, n = t(this);
                        n.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                            element: this,
                            title: n.attr("title")
                        }, n.attr("title", ""))
                    }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
                },
                _updateContent: function(t, e) {
                    var i, n = this.options.content,
                        r = this,
                        o = e ? e.type : null;
                    return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : void((i = n.call(t[0], function(i) {
                        r._delay(function() {
                            t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                        })
                    })) && this._open(e, t, i))
                },
                _open: function(e, i, n) {
                    function r(t) {
                        c.of = t, s.is(":hidden") || s.position(c)
                    }
                    var o, s, a, l, c = t.extend({}, this.options.position);
                    if (n) {
                        if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                        i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), s = o.tooltip, this._addDescribedBy(i, s.attr("id")), s.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), (l = t("<div>").html(s.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                            mousemove: r
                        }), r(e)) : s.position(t.extend({
                            of: i
                        }, this.options.position)), s.hide(), this._show(s, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() {
                            s.is(":visible") && (r(c.of), clearInterval(a))
                        }, t.fx.interval)), this._trigger("open", e, {
                            tooltip: s
                        })
                    }
                },
                _registerCloseHandlers: function(e, i) {
                    var n = {
                        keyup: function(e) {
                            if (e.keyCode === t.ui.keyCode.ESCAPE) {
                                var n = t.Event(e);
                                n.currentTarget = i[0], this.close(n, !0)
                            }
                        }
                    };
                    i[0] !== this.element[0] && (n.remove = function() {
                        this._removeTooltip(this._find(i).tooltip)
                    }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
                },
                close: function(e) {
                    var i, n = this,
                        r = t(e ? e.currentTarget : this.element),
                        o = this._find(r);
                    return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), r.data("ui-tooltip-title") && !r.attr("title") && r.attr("title", r.data("ui-tooltip-title")), this._removeDescribedBy(r), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                        n._removeTooltip(t(this))
                    }), r.removeData("ui-tooltip-open"), this._off(r, "mouseleave focusout keyup"), r[0] !== this.element[0] && this._off(r, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                        t(i.element).attr("title", i.title), delete n.parents[e]
                    }), o.closing = !0, this._trigger("close", e, {
                        tooltip: i
                    }), o.hiding || (o.closing = !1)))) : void r.removeData("ui-tooltip-open")
                },
                _tooltip: function(e) {
                    var i = t("<div>").attr("role", "tooltip"),
                        n = t("<div>").appendTo(i),
                        r = i.uniqueId().attr("id");
                    return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[r] = {
                        element: e,
                        tooltip: i
                    }
                },
                _find: function(t) {
                    var e = t.data("ui-tooltip-id");
                    return e ? this.tooltips[e] : null
                },
                _removeTooltip: function(t) {
                    t.remove(), delete this.tooltips[t.attr("id")]
                },
                _appendTo: function(t) {
                    var e = t.closest(".ui-front, dialog");
                    return e.length || (e = this.document[0].body), e
                },
                _destroy: function() {
                    var e = this;
                    t.each(this.tooltips, function(i, n) {
                        var r = t.Event("blur"),
                            o = n.element;
                        r.target = r.currentTarget = o[0], e.close(r, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                    }), this.liveRegion.remove()
                }
            }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
                options: {
                    tooltipClass: null
                },
                _tooltip: function() {
                    var t = this._superApply(arguments);
                    return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
                }
            }), t.ui.tooltip
    }),
    function(t) {
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
    }(function() {
        "use strict";

        function t(t) {
            t.preventDefault()
        }

        function e(t) {
            return "number" == typeof t && !isNaN(t) && isFinite(t)
        }

        function i(t, e, i) {
            i > 0 && (o(t, e), setTimeout(function() {
                s(t, e)
            }, i))
        }

        function n(t) {
            return Array.isArray(t) ? t : [t]
        }

        function r(t) {
            var e = (t = String(t)).split(".");
            return e.length > 1 ? e[1].length : 0
        }

        function o(t, e) {
            t.classList ? t.classList.add(e) : t.className += " " + e
        }

        function s(t, e) {
            t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
        }

        function a(t) {
            var e = void 0 !== window.pageXOffset,
                i = "CSS1Compat" === (t.compatMode || "");
            return {
                x: e ? window.pageXOffset : i ? t.documentElement.scrollLeft : t.body.scrollLeft,
                y: e ? window.pageYOffset : i ? t.documentElement.scrollTop : t.body.scrollTop
            }
        }

        function l(t, e) {
            return 100 / (e - t)
        }

        function c(t, e) {
            return 100 * e / (t[1] - t[0])
        }

        function u(t, e) {
            for (var i = 1; t >= e[i];) i += 1;
            return i
        }

        function d(t, e, i) {
            if (i >= t.slice(-1)[0]) return 100;
            var n, r, o, s, a = u(i, t);
            return n = t[a - 1], r = t[a], o = e[a - 1], s = e[a], o + function(t, e) {
                return c(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0])
            }([n, r], i) / l(o, s)
        }

        function h(t, e, i, n) {
            if (100 === n) return n;
            var r, o, s = u(n, t);
            return i ? n - (r = t[s - 1]) > ((o = t[s]) - r) / 2 ? o : r : e[s - 1] ? t[s - 1] + function(t, e) {
                return Math.round(t / e) * e
            }(n - t[s - 1], e[s - 1]) : n
        }

        function p(t, i, n) {
            var r;
            if ("number" == typeof i && (i = [i]), "[object Array]" !== Object.prototype.toString.call(i)) throw new Error("noUiSlider (" + j + "): 'range' contains invalid value.");
            if (!e(r = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !e(i[0])) throw new Error("noUiSlider (" + j + "): 'range' value isn't numeric.");
            n.xPct.push(r), n.xVal.push(i[0]), r ? n.xSteps.push(!isNaN(i[1]) && i[1]) : isNaN(i[1]) || (n.xSteps[0] = i[1]), n.xHighestCompleteStep.push(0)
        }

        function f(t, e, i) {
            if (!e) return !0;
            i.xSteps[t] = c([i.xVal[t], i.xVal[t + 1]], e) / l(i.xPct[t], i.xPct[t + 1]);
            var n = (i.xVal[t + 1] - i.xVal[t]) / i.xNumSteps[t],
                r = Math.ceil(Number(n.toFixed(3)) - 1),
                o = i.xVal[t] + i.xNumSteps[t] * r;
            i.xHighestCompleteStep[t] = o
        }

        function g(t, e, i) {
            this.xPct = [], this.xVal = [], this.xSteps = [i || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
            var n, r = [];
            for (n in t) t.hasOwnProperty(n) && r.push([t[n], n]);
            for (r.sort(r.length && "object" == typeof r[0][0] ? function(t, e) {
                    return t[0][0] - e[0][0]
                } : function(t, e) {
                    return t[0] - e[0]
                }), n = 0; n < r.length; n++) p(r[n][1], r[n][0], this);
            for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) f(n, this.xNumSteps[n], this)
        }

        function m(t) {
            if (function(t) {
                    return "object" == typeof t && "function" == typeof t.to && "function" == typeof t.from
                }(t)) return !0;
            throw new Error("noUiSlider (" + j + "): 'format' requires 'to' and 'from' methods.")
        }

        function v(t, i) {
            if (!e(i)) throw new Error("noUiSlider (" + j + "): 'step' is not numeric.");
            t.singleStep = i
        }

        function y(t, e) {
            if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + j + "): 'range' is not an object.");
            if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + j + "): Missing 'min' or 'max' in 'range'.");
            if (e.min === e.max) throw new Error("noUiSlider (" + j + "): 'range' 'min' and 'max' cannot be equal.");
            t.spectrum = new g(e, t.snap, t.singleStep)
        }

        function w(t, e) {
            if (e = n(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + j + "): 'start' option is incorrect.");
            t.handles = e.length, t.start = e
        }

        function b(t, e) {
            if (t.snap = e, "boolean" != typeof e) throw new Error("noUiSlider (" + j + "): 'snap' option must be a boolean.")
        }

        function x(t, e) {
            if (t.animate = e, "boolean" != typeof e) throw new Error("noUiSlider (" + j + "): 'animate' option must be a boolean.")
        }

        function _(t, e) {
            if (t.animationDuration = e, "number" != typeof e) throw new Error("noUiSlider (" + j + "): 'animationDuration' option must be a number.")
        }

        function C(t, e) {
            var i, n = [!1];
            if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
                for (i = 1; i < t.handles; i++) n.push(e);
                n.push(!1)
            } else {
                if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + j + "): 'connect' option doesn't match handle count.");
                n = e
            }
            t.connect = n
        }

        function S(t, e) {
            switch (e) {
                case "horizontal":
                    t.ort = 0;
                    break;
                case "vertical":
                    t.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider (" + j + "): 'orientation' option is invalid.")
            }
        }

        function T(t, i) {
            if (!e(i)) throw new Error("noUiSlider (" + j + "): 'margin' option must be numeric.");
            if (0 !== i && (t.margin = t.spectrum.getMargin(i), !t.margin)) throw new Error("noUiSlider (" + j + "): 'margin' option is only supported on linear sliders.")
        }

        function k(t, i) {
            if (!e(i)) throw new Error("noUiSlider (" + j + "): 'limit' option must be numeric.");
            if (t.limit = t.spectrum.getMargin(i), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + j + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
        }

        function E(t, i) {
            if (!e(i)) throw new Error("noUiSlider (" + j + "): 'padding' option must be numeric.");
            if (0 !== i) {
                if (t.padding = t.spectrum.getMargin(i), !t.padding) throw new Error("noUiSlider (" + j + "): 'padding' option is only supported on linear sliders.");
                if (t.padding < 0) throw new Error("noUiSlider (" + j + "): 'padding' option must be a positive number.");
                if (t.padding >= 50) throw new Error("noUiSlider (" + j + "): 'padding' option must be less than half the range.")
            }
        }

        function F(t, e) {
            switch (e) {
                case "ltr":
                    t.dir = 0;
                    break;
                case "rtl":
                    t.dir = 1;
                    break;
                default:
                    throw new Error("noUiSlider (" + j + "): 'direction' option was not recognized.")
            }
        }

        function L(t, e) {
            if ("string" != typeof e) throw new Error("noUiSlider (" + j + "): 'behaviour' must be a string containing options.");
            var i = e.indexOf("tap") >= 0,
                n = e.indexOf("drag") >= 0,
                r = e.indexOf("fixed") >= 0,
                o = e.indexOf("snap") >= 0,
                s = e.indexOf("hover") >= 0;
            if (r) {
                if (2 !== t.handles) throw new Error("noUiSlider (" + j + "): 'fixed' behaviour must be used with 2 handles");
                T(t, t.start[1] - t.start[0])
            }
            t.events = {
                tap: i || o,
                drag: n,
                fixed: r,
                snap: o,
                hover: s
            }
        }

        function D(t, e) {
            if (!1 !== e)
                if (!0 === e) {
                    t.tooltips = [];
                    for (var i = 0; i < t.handles; i++) t.tooltips.push(!0)
                } else {
                    if (t.tooltips = n(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + j + "): must pass a formatter for all handles.");
                    t.tooltips.forEach(function(t) {
                        if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + j + "): 'tooltips' must be passed a formatter or 'false'.")
                    })
                }
        }

        function q(t, e) {
            t.ariaFormat = e, m(e)
        }

        function A(t, e) {
            t.format = e, m(e)
        }

        function P(t, e) {
            if (void 0 !== e && "string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + j + "): 'cssPrefix' must be a string or `false`.");
            t.cssPrefix = e
        }

        function O(t, e) {
            if (void 0 !== e && "object" != typeof e) throw new Error("noUiSlider (" + j + "): 'cssClasses' must be an object.");
            if ("string" == typeof t.cssPrefix)
                for (var i in t.cssClasses = {}, e) e.hasOwnProperty(i) && (t.cssClasses[i] = t.cssPrefix + e[i]);
            else t.cssClasses = e
        }

        function M(t, e) {
            if (!0 !== e && !1 !== e) throw new Error("noUiSlider (" + j + "): 'useRequestAnimationFrame' option should be true (default) or false.");
            t.useRequestAnimationFrame = e
        }

        function N(t) {
            var e = {
                    margin: 0,
                    limit: 0,
                    padding: 0,
                    animate: !0,
                    animationDuration: 300,
                    ariaFormat: I,
                    format: I
                },
                i = {
                    step: {
                        r: !1,
                        t: v
                    },
                    start: {
                        r: !0,
                        t: w
                    },
                    connect: {
                        r: !0,
                        t: C
                    },
                    direction: {
                        r: !0,
                        t: F
                    },
                    snap: {
                        r: !1,
                        t: b
                    },
                    animate: {
                        r: !1,
                        t: x
                    },
                    animationDuration: {
                        r: !1,
                        t: _
                    },
                    range: {
                        r: !0,
                        t: y
                    },
                    orientation: {
                        r: !1,
                        t: S
                    },
                    margin: {
                        r: !1,
                        t: T
                    },
                    limit: {
                        r: !1,
                        t: k
                    },
                    padding: {
                        r: !1,
                        t: E
                    },
                    behaviour: {
                        r: !0,
                        t: L
                    },
                    ariaFormat: {
                        r: !1,
                        t: q
                    },
                    format: {
                        r: !1,
                        t: A
                    },
                    tooltips: {
                        r: !1,
                        t: D
                    },
                    cssPrefix: {
                        r: !1,
                        t: P
                    },
                    cssClasses: {
                        r: !1,
                        t: O
                    },
                    useRequestAnimationFrame: {
                        r: !1,
                        t: M
                    }
                },
                n = {
                    connect: !1,
                    direction: "ltr",
                    behaviour: "tap",
                    orientation: "horizontal",
                    cssPrefix: "noUi-",
                    cssClasses: {
                        target: "target",
                        base: "base",
                        origin: "origin",
                        handle: "handle",
                        handleLower: "handle-lower",
                        handleUpper: "handle-upper",
                        horizontal: "horizontal",
                        vertical: "vertical",
                        background: "background",
                        connect: "connect",
                        ltr: "ltr",
                        rtl: "rtl",
                        draggable: "draggable",
                        drag: "state-drag",
                        tap: "state-tap",
                        active: "active",
                        tooltip: "tooltip",
                        pips: "pips",
                        pipsHorizontal: "pips-horizontal",
                        pipsVertical: "pips-vertical",
                        marker: "marker",
                        markerHorizontal: "marker-horizontal",
                        markerVertical: "marker-vertical",
                        markerNormal: "marker-normal",
                        markerLarge: "marker-large",
                        markerSub: "marker-sub",
                        value: "value",
                        valueHorizontal: "value-horizontal",
                        valueVertical: "value-vertical",
                        valueNormal: "value-normal",
                        valueLarge: "value-large",
                        valueSub: "value-sub"
                    },
                    useRequestAnimationFrame: !0
                };
            t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(i).forEach(function(r) {
                if (void 0 === t[r] && void 0 === n[r]) {
                    if (i[r].r) throw new Error("noUiSlider (" + j + "): '" + r + "' is required.");
                    return !0
                }
                i[r].t(e, void 0 === t[r] ? n[r] : t[r])
            }), e.pips = t.pips;
            var r = [
                ["left", "top"],
                ["right", "bottom"]
            ];
            return e.style = r[e.dir][e.ort], e.styleOposite = r[e.dir ? 0 : 1][e.ort], e
        }

        function z(e, r, l) {
            function c(t, e) {
                var i = K.createElement("div");
                return e && o(i, e), t.appendChild(i), i
            }

            function u(t, e) {
                var i = c(t, r.cssClasses.origin),
                    n = c(i, r.cssClasses.handle);
                return n.setAttribute("data-handle", e), n.setAttribute("tabindex", "0"), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", r.ort ? "vertical" : "horizontal"), 0 === e ? o(n, r.cssClasses.handleLower) : e === r.handles - 1 && o(n, r.cssClasses.handleUpper), i
            }

            function d(t, e) {
                return !!e && c(t, r.cssClasses.connect)
            }

            function h(t, e) {
                return !!r.tooltips[e] && c(t.firstChild, r.cssClasses.tooltip)
            }

            function p(t, e, i) {
                function n(t, e) {
                    var i = e === r.cssClasses.value,
                        n = i ? l : u;
                    return e + " " + (i ? d : h)[r.ort] + " " + n[t]
                }

                function s(t, o) {
                    o[1] = o[1] && e ? e(o[0], o[1]) : o[1];
                    var s = c(a, !1);
                    s.className = n(o[1], r.cssClasses.marker), s.style[r.style] = t + "%", o[1] && ((s = c(a, !1)).className = n(o[1], r.cssClasses.value), s.style[r.style] = t + "%", s.innerText = i.to(o[0]))
                }
                var a = K.createElement("div"),
                    l = [r.cssClasses.valueNormal, r.cssClasses.valueLarge, r.cssClasses.valueSub],
                    u = [r.cssClasses.markerNormal, r.cssClasses.markerLarge, r.cssClasses.markerSub],
                    d = [r.cssClasses.valueHorizontal, r.cssClasses.valueVertical],
                    h = [r.cssClasses.markerHorizontal, r.cssClasses.markerVertical];
                return o(a, r.cssClasses.pips), o(a, 0 === r.ort ? r.cssClasses.pipsHorizontal : r.cssClasses.pipsVertical), Object.keys(t).forEach(function(e) {
                    s(e, t[e])
                }), a
            }

            function f() {
                var t;
                H && ((t = H).parentElement.removeChild(t), H = null)
            }

            function g(t) {
                f();
                var e = t.mode,
                    i = t.density || 1,
                    n = t.filter || !1,
                    r = function(t, e, i) {
                        if ("range" === t || "steps" === t) return Y.xVal;
                        if ("count" === t) {
                            if (!e) throw new Error("noUiSlider (" + j + "): 'values' required for mode 'count'.");
                            var n, r = 100 / (e - 1),
                                o = 0;
                            for (e = [];
                                (n = o++ * r) <= 100;) e.push(n);
                            t = "positions"
                        }
                        return "positions" === t ? e.map(function(t) {
                            return Y.fromStepping(i ? Y.getStep(t) : t)
                        }) : "values" === t ? i ? e.map(function(t) {
                            return Y.fromStepping(Y.getStep(Y.toStepping(t)))
                        }) : e : void 0
                    }(e, t.values || !1, t.stepped || !1),
                    o = function(t, e, i) {
                        function n(t, e) {
                            return (t + e).toFixed(7) / 1
                        }
                        var r = {},
                            o = Y.xVal[0],
                            s = Y.xVal[Y.xVal.length - 1],
                            a = !1,
                            l = !1,
                            c = 0;
                        return (i = function(t) {
                            return t.filter(function(t) {
                                return !this[t] && (this[t] = !0)
                            }, {})
                        }(i.slice().sort(function(t, e) {
                            return t - e
                        })))[0] !== o && (i.unshift(o), a = !0), i[i.length - 1] !== s && (i.push(s), l = !0), i.forEach(function(o, s) {
                            var u, d, h, p, f, g, m, v, y, w = o,
                                b = i[s + 1];
                            if ("steps" === e && (u = Y.xNumSteps[s]), u || (u = b - w), !1 !== w && void 0 !== b)
                                for (u = Math.max(u, 1e-7), d = w; b >= d; d = n(d, u)) {
                                    for (m = (f = (p = Y.toStepping(d)) - c) / t, y = f / (v = Math.round(m)), h = 1; v >= h; h += 1) r[(c + h * y).toFixed(5)] = ["x", 0];
                                    g = i.indexOf(d) > -1 ? 1 : "steps" === e ? 2 : 0, !s && a && (g = 0), d === b && l || (r[p.toFixed(5)] = [d, g]), c = p
                                }
                        }), r
                    }(i, e, r),
                    s = t.format || {
                        to: Math.round
                    };
                return H = $.appendChild(p(o, n, s))
            }

            function m() {
                var t = z.getBoundingClientRect(),
                    e = "offset" + ["Width", "Height"][r.ort];
                return 0 === r.ort ? t.width || z[e] : t.height || z[e]
            }

            function v(t, e, i, n) {
                var o = function(e) {
                        return !$.hasAttribute("disabled") && (! function(t, e) {
                            return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
                        }($, r.cssClasses.tap) && (!!(e = function(t, e) {
                            var i, n, r = 0 === t.type.indexOf("touch"),
                                o = 0 === t.type.indexOf("mouse"),
                                s = 0 === t.type.indexOf("pointer");
                            if (0 === t.type.indexOf("MSPointer") && (s = !0), r) {
                                if (t.touches.length > 1) return !1;
                                i = t.changedTouches[0].pageX, n = t.changedTouches[0].pageY
                            }
                            return e = e || a(K), (o || s) && (i = t.clientX + e.x, n = t.clientY + e.y), t.pageOffset = e, t.points = [i, n], t.cursor = o || s, t
                        }(e, n.pageOffset)) && (!(t === W.start && void 0 !== e.buttons && e.buttons > 1) && ((!n.hover || !e.buttons) && (G || e.preventDefault(), e.calcPoint = e.points[r.ort], void i(e, n))))))
                    },
                    s = [];
                return t.split(" ").forEach(function(t) {
                    e.addEventListener(t, o, !!G && {
                        passive: !0
                    }), s.push([t, o])
                }), s
            }

            function y(t) {
                var e = 100 * (t - function(t, e) {
                    var i = t.getBoundingClientRect(),
                        n = t.ownerDocument,
                        r = n.documentElement,
                        o = a(n);
                    return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (o.x = 0), e ? i.top + o.y - r.clientTop : i.left + o.x - r.clientLeft
                }(z, r.ort)) / m();
                return r.dir ? 100 - e : e
            }

            function w(t, e, i, n) {
                var r = i.slice(),
                    o = [!t, t],
                    s = [t, !t];
                n = n.slice(), t && n.reverse(), n.length > 1 ? n.forEach(function(t, i) {
                    var n = E(r, t, r[t] + e, o[i], s[i], !1);
                    !1 === n ? e = 0 : (e = n - r[t], r[t] = n)
                }) : o = s = [!0];
                var a = !1;
                n.forEach(function(t, n) {
                    a = D(t, i[t] + e, o[n], s[n]) || a
                }), a && n.forEach(function(t) {
                    b("update", t), b("slide", t)
                })
            }

            function b(t, e, i) {
                Object.keys(Z).forEach(function(n) {
                    var o = n.split(".")[0];
                    t === o && Z[n].forEach(function(t) {
                        t.call(R, Q.map(r.format.to), e, Q.slice(), i || !1, U.slice())
                    })
                })
            }

            function x(t, e) {
                "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && C(t, e)
            }

            function _(t, e) {
                if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return C(t, e);
                var i = (r.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
                w(i > 0, 100 * i / e.baseSize, e.locations, e.handleNumbers)
            }

            function C(e, i) {
                X && (s(X, r.cssClasses.active), X = !1), e.cursor && (et.style.cursor = "", et.removeEventListener("selectstart", t)), J.forEach(function(t) {
                    tt.removeEventListener(t[0], t[1])
                }), s($, r.cssClasses.drag), L(), i.handleNumbers.forEach(function(t) {
                    b("change", t), b("set", t), b("end", t)
                })
            }

            function S(e, i) {
                if (1 === i.handleNumbers.length) {
                    var n = I[i.handleNumbers[0]];
                    if (n.hasAttribute("disabled")) return !1;
                    o(X = n.children[0], r.cssClasses.active)
                }
                e.stopPropagation();
                var s = v(W.move, tt, _, {
                        startCalcPoint: e.calcPoint,
                        baseSize: m(),
                        pageOffset: e.pageOffset,
                        handleNumbers: i.handleNumbers,
                        buttonsProperty: e.buttons,
                        locations: U.slice()
                    }),
                    a = v(W.end, tt, C, {
                        handleNumbers: i.handleNumbers
                    }),
                    l = v("mouseout", tt, x, {
                        handleNumbers: i.handleNumbers
                    });
                J = s.concat(a, l), e.cursor && (et.style.cursor = getComputedStyle(e.target).cursor, I.length > 1 && o($, r.cssClasses.drag), et.addEventListener("selectstart", t, !1)), i.handleNumbers.forEach(function(t) {
                    b("start", t)
                })
            }

            function T(t) {
                t.stopPropagation();
                var e = y(t.calcPoint),
                    n = function(t) {
                        var e = 100,
                            i = !1;
                        return I.forEach(function(n, r) {
                            if (!n.hasAttribute("disabled")) {
                                var o = Math.abs(U[r] - t);
                                e > o && (i = r, e = o)
                            }
                        }), i
                    }(e);
                return !1 !== n && (r.events.snap || i($, r.cssClasses.tap, r.animationDuration), D(n, e, !0, !0), L(), b("slide", n, !0), b("update", n, !0), b("change", n, !0), b("set", n, !0), void(r.events.snap && S(t, {
                    handleNumbers: [n]
                })))
            }

            function k(t) {
                var e = y(t.calcPoint),
                    i = Y.getStep(e),
                    n = Y.fromStepping(i);
                Object.keys(Z).forEach(function(t) {
                    "hover" === t.split(".")[0] && Z[t].forEach(function(t) {
                        t.call(R, n)
                    })
                })
            }

            function E(t, e, i, n, o, s) {
                return I.length > 1 && (n && e > 0 && (i = Math.max(i, t[e - 1] + r.margin)), o && e < I.length - 1 && (i = Math.min(i, t[e + 1] - r.margin))), I.length > 1 && r.limit && (n && e > 0 && (i = Math.min(i, t[e - 1] + r.limit)), o && e < I.length - 1 && (i = Math.max(i, t[e + 1] - r.limit))), r.padding && (0 === e && (i = Math.max(i, r.padding)), e === I.length - 1 && (i = Math.min(i, 100 - r.padding))), !((i = function(t) {
                    return Math.max(Math.min(t, 100), 0)
                }(i = Y.getStep(i))) === t[e] && !s) && i
            }

            function F(t) {
                return t + "%"
            }

            function L() {
                V.forEach(function(t) {
                    var e = U[t] > 50 ? -1 : 1,
                        i = 3 + (I.length + e * t);
                    I[t].childNodes[0].style.zIndex = i
                })
            }

            function D(t, e, i, n) {
                return !1 !== (e = E(U, t, e, i, n, !1)) && (function(t, e) {
                    U[t] = e, Q[t] = Y.fromStepping(e);
                    var i = function() {
                        I[t].style[r.style] = F(e), q(t), q(t + 1)
                    };
                    window.requestAnimationFrame && r.useRequestAnimationFrame ? window.requestAnimationFrame(i) : i()
                }(t, e), !0)
            }

            function q(t) {
                if (B[t]) {
                    var e = 0,
                        i = 100;
                    0 !== t && (e = U[t - 1]), t !== B.length - 1 && (i = U[t]), B[t].style[r.style] = F(e), B[t].style[r.styleOposite] = F(100 - i)
                }
            }

            function A(t, e) {
                null !== t && !1 !== t && ("number" == typeof t && (t = String(t)), !1 === (t = r.format.from(t)) || isNaN(t) || D(e, Y.toStepping(t), !1, !1))
            }

            function P(t, e) {
                var o = n(t),
                    s = void 0 === U[0];
                e = void 0 === e || !!e, o.forEach(A), r.animate && !s && i($, r.cssClasses.tap, r.animationDuration), V.forEach(function(t) {
                    D(t, U[t], !0, !1)
                }), L(), V.forEach(function(t) {
                    b("update", t), null !== o[t] && e && b("set", t)
                })
            }

            function O() {
                var t = Q.map(r.format.to);
                return 1 === t.length ? t[0] : t
            }

            function M(t, e) {
                Z[t] = Z[t] || [], Z[t].push(e), "update" === t.split(".")[0] && I.forEach(function(t, e) {
                    b("update", e)
                })
            }
            var z, I, B, R, H, W = window.navigator.pointerEnabled ? {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                } : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                },
                G = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        window.addEventListener("test", null, e)
                    } catch (t) {}
                    return t
                }(),
                $ = e,
                U = [],
                V = [],
                X = !1,
                Y = r.spectrum,
                Q = [],
                Z = {},
                J = null,
                K = e.ownerDocument,
                tt = K.documentElement,
                et = K.body;
            if ($.noUiSlider) throw new Error("noUiSlider (" + j + "): Slider was already initialized.");
            return function(t) {
                    o(t, r.cssClasses.target), 0 === r.dir ? o(t, r.cssClasses.ltr) : o(t, r.cssClasses.rtl), 0 === r.ort ? o(t, r.cssClasses.horizontal) : o(t, r.cssClasses.vertical), z = c(t, r.cssClasses.base)
                }($),
                function(t, e) {
                    I = [], (B = []).push(d(e, t[0]));
                    for (var i = 0; i < r.handles; i++) I.push(u(e, i)), V[i] = i, B.push(d(e, t[i + 1]))
                }(r.connect, z), R = {
                    destroy: function() {
                        for (var t in r.cssClasses) r.cssClasses.hasOwnProperty(t) && s($, r.cssClasses[t]);
                        for (; $.firstChild;) $.removeChild($.firstChild);
                        delete $.noUiSlider
                    },
                    steps: function() {
                        return U.map(function(t, e) {
                            var i = Y.getNearbySteps(t),
                                n = Q[e],
                                r = i.thisStep.step,
                                o = null;
                            !1 !== r && n + r > i.stepAfter.startValue && (r = i.stepAfter.startValue - n), o = n > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep, 100 === t ? r = null : 0 === t && (o = null);
                            var s = Y.countStepDecimals();
                            return null !== r && !1 !== r && (r = Number(r.toFixed(s))), null !== o && !1 !== o && (o = Number(o.toFixed(s))), [o, r]
                        })
                    },
                    on: M,
                    off: function(t) {
                        var e = t && t.split(".")[0],
                            i = e && t.substring(e.length);
                        Object.keys(Z).forEach(function(t) {
                            var n = t.split(".")[0],
                                r = t.substring(n.length);
                            e && e !== n || i && i !== r || delete Z[t]
                        })
                    },
                    get: O,
                    set: P,
                    reset: function(t) {
                        P(r.start, t)
                    },
                    __moveHandles: function(t, e, i) {
                        w(t, e, U, i)
                    },
                    options: l,
                    updateOptions: function(t, e) {
                        var i = O(),
                            n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                        n.forEach(function(e) {
                            void 0 !== t[e] && (l[e] = t[e])
                        });
                        var o = N(l);
                        n.forEach(function(e) {
                            void 0 !== t[e] && (r[e] = o[e])
                        }), Y = o.spectrum, r.margin = o.margin, r.limit = o.limit, r.padding = o.padding, r.pips && g(r.pips), U = [], P(t.start || i, e)
                    },
                    target: $,
                    removePips: f,
                    pips: g
                },
                function(t) {
                    t.fixed || I.forEach(function(t, e) {
                        v(W.start, t.children[0], S, {
                            handleNumbers: [e]
                        })
                    }), t.tap && v(W.start, z, T, {}), t.hover && v(W.move, z, k, {
                        hover: !0
                    }), t.drag && B.forEach(function(e, i) {
                        if (!1 !== e && 0 !== i && i !== B.length - 1) {
                            var n = I[i - 1],
                                s = I[i],
                                a = [e];
                            o(e, r.cssClasses.draggable), t.fixed && (a.push(n.children[0]), a.push(s.children[0])), a.forEach(function(t) {
                                v(W.start, t, S, {
                                    handles: [n, s],
                                    handleNumbers: [i - 1, i]
                                })
                            })
                        }
                    })
                }(r.events), P(r.start), r.pips && g(r.pips), r.tooltips && function() {
                    var t = I.map(h);
                    M("update", function(e, i, n) {
                        if (t[i]) {
                            var o = e[i];
                            !0 !== r.tooltips[i] && (o = r.tooltips[i].to(n[i])), t[i].innerHTML = o
                        }
                    })
                }(), M("update", function(t, e, i, n, o) {
                    V.forEach(function(t) {
                        var e = I[t],
                            n = E(U, t, 0, !0, !0, !0),
                            s = E(U, t, 100, !0, !0, !0),
                            a = o[t],
                            l = r.ariaFormat.to(i[t]);
                        e.children[0].setAttribute("aria-valuemin", n.toFixed(1)), e.children[0].setAttribute("aria-valuemax", s.toFixed(1)), e.children[0].setAttribute("aria-valuenow", a.toFixed(1)), e.children[0].setAttribute("aria-valuetext", l)
                    })
                }), R
        }
        var j = "10.0.0";
        g.prototype.getMargin = function(t) {
            var e = this.xNumSteps[0];
            if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + j + "): 'limit', 'margin' and 'padding' must be divisible by step.");
            return 2 === this.xPct.length && c(this.xVal, t)
        }, g.prototype.toStepping = function(t) {
            return d(this.xVal, this.xPct, t)
        }, g.prototype.fromStepping = function(t) {
            return function(t, e, i) {
                if (i >= 100) return t.slice(-1)[0];
                var n, r = u(i, e);
                return function(t, e) {
                    return e * (t[1] - t[0]) / 100 + t[0]
                }([t[r - 1], t[r]], (i - (n = e[r - 1])) * l(n, e[r]))
            }(this.xVal, this.xPct, t)
        }, g.prototype.getStep = function(t) {
            return h(this.xPct, this.xSteps, this.snap, t)
        }, g.prototype.getNearbySteps = function(t) {
            var e = u(t, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[e - 2],
                    step: this.xNumSteps[e - 2],
                    highestStep: this.xHighestCompleteStep[e - 2]
                },
                thisStep: {
                    startValue: this.xVal[e - 1],
                    step: this.xNumSteps[e - 1],
                    highestStep: this.xHighestCompleteStep[e - 1]
                },
                stepAfter: {
                    startValue: this.xVal[e - 0],
                    step: this.xNumSteps[e - 0],
                    highestStep: this.xHighestCompleteStep[e - 0]
                }
            }
        }, g.prototype.countStepDecimals = function() {
            var t = this.xNumSteps.map(r);
            return Math.max.apply(null, t)
        }, g.prototype.convert = function(t) {
            return this.getStep(this.toStepping(t))
        };
        var I = {
            to: function(t) {
                return void 0 !== t && t.toFixed(2)
            },
            from: Number
        };
        return {
            version: j,
            create: function(t, e) {
                if (!t || !t.nodeName) throw new Error("noUiSlider (" + j + "): create requires a single element, got: " + t);
                var i = z(t, N(e), e);
                return t.noUiSlider = i, i
            }
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var s = e || window.event,
                a = l.call(arguments, 1),
                c = 0,
                d = 0,
                h = 0,
                p = 0,
                f = 0,
                g = 0;
            if ((e = t.event.fix(s)).type = "mousewheel", "detail" in s && (h = -1 * s.detail), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * h, h = 0), c = 0 === h ? d : h, "deltaY" in s && (c = h = -1 * s.deltaY), "deltaX" in s && (d = s.deltaX, 0 === h && (c = -1 * d)), 0 !== h || 0 !== d) {
                if (1 === s.deltaMode) {
                    var m = t.data(this, "mousewheel-line-height");
                    c *= m, h *= m, d *= m
                } else if (2 === s.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    c *= v, h *= v, d *= v
                }
                if (p = Math.max(Math.abs(h), Math.abs(d)), (!o || o > p) && (o = p, n(s, p) && (o /= 40)), n(s, p) && (c /= 40, d /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), u.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    f = e.clientX - y.left, g = e.clientY - y.top
                }
                return e.deltaX = d, e.deltaY = h, e.deltaFactor = o, e.offsetX = f, e.offsetY = g, e.deltaMode = 0, a.unshift(e, c, d, h), r && clearTimeout(r), r = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
            }
        }

        function i() {
            o = null
        }

        function n(t, e) {
            return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        var r, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var c = s.length; c;) t.event.fixHooks[s[--c]] = t.event.mouseHooks;
        var u = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = a.length; i;) this.addEventListener(a[--i], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var i = t(e),
                    n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var s = e || window.event,
                a = l.call(arguments, 1),
                c = 0,
                d = 0,
                h = 0,
                p = 0,
                f = 0,
                g = 0;
            if ((e = t.event.fix(s)).type = "mousewheel", "detail" in s && (h = -1 * s.detail), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * h, h = 0), c = 0 === h ? d : h, "deltaY" in s && (c = h = -1 * s.deltaY), "deltaX" in s && (d = s.deltaX, 0 === h && (c = -1 * d)), 0 !== h || 0 !== d) {
                if (1 === s.deltaMode) {
                    var m = t.data(this, "mousewheel-line-height");
                    c *= m, h *= m, d *= m
                } else if (2 === s.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    c *= v, h *= v, d *= v
                }
                if (p = Math.max(Math.abs(h), Math.abs(d)), (!o || o > p) && (o = p, n(s, p) && (o /= 40)), n(s, p) && (c /= 40, d /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), u.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    f = e.clientX - y.left, g = e.clientY - y.top
                }
                return e.deltaX = d, e.deltaY = h, e.deltaFactor = o, e.offsetX = f, e.offsetY = g, e.deltaMode = 0, a.unshift(e, c, d, h), r && clearTimeout(r), r = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
            }
        }

        function i() {
            o = null
        }

        function n(t, e) {
            return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        var r, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var c = s.length; c;) t.event.fixHooks[s[--c]] = t.event.mouseHooks;
        var u = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = a.length; i;) this.addEventListener(a[--i], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var i = t(e),
                    n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
    }(function(t) {
        var e, i, n;
        e = "function" == typeof define && define.amd, i = "undefined" != typeof module && module.exports, n = "https:" == document.location.protocol ? "https:" : "http:", e || (i ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + n + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
            function() {
                var e, i = "mCustomScrollbar",
                    n = "mCS",
                    r = ".mCustomScrollbar",
                    o = {
                        setTop: 0,
                        setLeft: 0,
                        axis: "y",
                        scrollbarPosition: "inside",
                        scrollInertia: 950,
                        autoDraggerLength: !0,
                        alwaysShowScrollbar: 0,
                        snapOffset: 0,
                        mouseWheel: {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            deltaFactor: "auto",
                            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                        },
                        scrollButtons: {
                            scrollType: "stepless",
                            scrollAmount: "auto"
                        },
                        keyboard: {
                            enable: !0,
                            scrollType: "stepless",
                            scrollAmount: "auto"
                        },
                        contentTouchScroll: 25,
                        documentTouchScroll: !0,
                        advanced: {
                            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                            updateOnContentResize: !0,
                            updateOnImageLoad: "auto",
                            autoUpdateTimeout: 60
                        },
                        theme: "light",
                        callbacks: {
                            onTotalScrollOffset: 0,
                            onTotalScrollBackOffset: 0,
                            alwaysTriggerOffsets: !0
                        }
                    },
                    s = 0,
                    a = {},
                    l = window.attachEvent && !window.addEventListener ? 1 : 0,
                    c = !1,
                    u = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                    d = {
                        init: function(e) {
                            var e = t.extend(!0, {}, o, e),
                                i = h.call(this);
                            if (e.live) {
                                var l = e.liveSelector || this.selector || r,
                                    c = t(l);
                                if ("off" === e.live) return void f(l);
                                a[l] = setTimeout(function() {
                                    c.mCustomScrollbar(e), "once" === e.live && c.length && f(l)
                                }, 500)
                            } else f(l);
                            return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : g(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
                                enable: !0,
                                scrollAmount: "auto",
                                axis: "y",
                                preventDefault: !1,
                                deltaFactor: "auto",
                                normalizeDelta: !1,
                                invert: !1
                            }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = m(e.scrollButtons.scrollType), p(e), t(i).each(function() {
                                var i = t(this);
                                if (!i.data(n)) {
                                    i.data(n, {
                                        idx: ++s,
                                        opt: e,
                                        scrollRatio: {
                                            y: null,
                                            x: null
                                        },
                                        overflowed: null,
                                        contentReset: {
                                            y: null,
                                            x: null
                                        },
                                        bindEvents: !1,
                                        tweenRunning: !1,
                                        sequential: {},
                                        langDir: i.css("direction"),
                                        cbOffsets: null,
                                        trigger: null,
                                        poll: {
                                            size: {
                                                o: 0,
                                                n: 0
                                            },
                                            img: {
                                                o: 0,
                                                n: 0
                                            },
                                            change: {
                                                o: 0,
                                                n: 0
                                            }
                                        }
                                    });
                                    var r = i.data(n),
                                        o = r.opt,
                                        a = i.data("mcs-axis"),
                                        l = i.data("mcs-scrollbar-position"),
                                        c = i.data("mcs-theme");
                                    a && (o.axis = a), l && (o.scrollbarPosition = l), c && (o.theme = c, p(o)), v.call(this), r && o.callbacks.onCreate && "function" == typeof o.callbacks.onCreate && o.callbacks.onCreate.call(this), t("#mCSB_" + r.idx + "_container img:not(." + u[2] + ")").addClass(u[2]), d.update.call(null, i)
                                }
                            })
                        },
                        update: function(e, i) {
                            var r = e || h.call(this);
                            return t(r).each(function() {
                                var e = t(this);
                                if (e.data(n)) {
                                    var r = e.data(n),
                                        o = r.opt,
                                        s = t("#mCSB_" + r.idx + "_container"),
                                        a = t("#mCSB_" + r.idx),
                                        l = [t("#mCSB_" + r.idx + "_dragger_vertical"), t("#mCSB_" + r.idx + "_dragger_horizontal")];
                                    if (!s.length) return;
                                    r.tweenRunning && V(e), i && r && o.callbacks.onBeforeUpdate && "function" == typeof o.callbacks.onBeforeUpdate && o.callbacks.onBeforeUpdate.call(this), e.hasClass(u[3]) && e.removeClass(u[3]), e.hasClass(u[4]) && e.removeClass(u[4]), a.css("max-height", "none"), a.height() !== e.height() && a.css("max-height", e.height()), w.call(this), "y" === o.axis || o.advanced.autoExpandHorizontalScroll || s.css("width", y(s)), r.overflowed = S.call(this), F.call(this), o.autoDraggerLength && x.call(this), _.call(this), k.call(this);
                                    var c = [Math.abs(s[0].offsetTop), Math.abs(s[0].offsetLeft)];
                                    "x" !== o.axis && (r.overflowed[0] ? l[0].height() > l[0].parent().height() ? T.call(this) : (X(e, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }), r.contentReset.y = null) : (T.call(this), "y" === o.axis ? E.call(this) : "yx" === o.axis && r.overflowed[1] && X(e, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), "y" !== o.axis && (r.overflowed[1] ? l[1].width() > l[1].parent().width() ? T.call(this) : (X(e, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    }), r.contentReset.x = null) : (T.call(this), "x" === o.axis ? E.call(this) : "yx" === o.axis && r.overflowed[0] && X(e, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), i && r && (2 === i && o.callbacks.onImageLoad && "function" == typeof o.callbacks.onImageLoad ? o.callbacks.onImageLoad.call(this) : 3 === i && o.callbacks.onSelectorChange && "function" == typeof o.callbacks.onSelectorChange ? o.callbacks.onSelectorChange.call(this) : o.callbacks.onUpdate && "function" == typeof o.callbacks.onUpdate && o.callbacks.onUpdate.call(this)), U.call(this)
                                }
                            })
                        },
                        scrollTo: function(e, i) {
                            if (void 0 !== e && null != e) {
                                var r = h.call(this);
                                return t(r).each(function() {
                                    var r = t(this);
                                    if (r.data(n)) {
                                        var o = r.data(n),
                                            s = o.opt,
                                            a = {
                                                trigger: "external",
                                                scrollInertia: s.scrollInertia,
                                                scrollEasing: "mcsEaseInOut",
                                                moveDragger: !1,
                                                timeout: 60,
                                                callbacks: !0,
                                                onStart: !0,
                                                onUpdate: !0,
                                                onComplete: !0
                                            },
                                            l = t.extend(!0, {}, a, i),
                                            c = G.call(this, e),
                                            u = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                        c[0] = $.call(this, c[0], "y"), c[1] = $.call(this, c[1], "x"), l.moveDragger && (c[0] *= o.scrollRatio.y, c[1] *= o.scrollRatio.x), l.dur = nt() ? 0 : u, setTimeout(function() {
                                            null !== c[0] && void 0 !== c[0] && "x" !== s.axis && o.overflowed[0] && (l.dir = "y", l.overwrite = "all", X(r, c[0].toString(), l)), null !== c[1] && void 0 !== c[1] && "y" !== s.axis && o.overflowed[1] && (l.dir = "x", l.overwrite = "none", X(r, c[1].toString(), l))
                                        }, l.timeout)
                                    }
                                })
                            }
                        },
                        stop: function() {
                            var e = h.call(this);
                            return t(e).each(function() {
                                var e = t(this);
                                e.data(n) && V(e)
                            })
                        },
                        disable: function(e) {
                            var i = h.call(this);
                            return t(i).each(function() {
                                var i = t(this);
                                i.data(n) && (i.data(n), U.call(this, "remove"), E.call(this), e && T.call(this), F.call(this, !0), i.addClass(u[3]))
                            })
                        },
                        destroy: function() {
                            var e = h.call(this);
                            return t(e).each(function() {
                                var r = t(this);
                                if (r.data(n)) {
                                    var o = r.data(n),
                                        s = o.opt,
                                        a = t("#mCSB_" + o.idx),
                                        l = t("#mCSB_" + o.idx + "_container"),
                                        c = t(".mCSB_" + o.idx + "_scrollbar");
                                    s.live && f(s.liveSelector || t(e).selector), U.call(this, "remove"), E.call(this), T.call(this), r.removeData(n), J(this, "mcs"), c.remove(), l.find("img." + u[2]).removeClass(u[2]), a.replaceWith(l.contents()), r.removeClass(i + " _" + n + "_" + o.idx + " " + u[6] + " " + u[7] + " " + u[5] + " " + u[3]).addClass(u[4])
                                }
                            })
                        }
                    },
                    h = function() {
                        return "object" != typeof t(this) || t(this).length < 1 ? r : this
                    },
                    p = function(e) {
                        e.autoDraggerLength = !(t.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : e.scrollbarPosition
                    },
                    f = function(t) {
                        a[t] && (clearTimeout(a[t]), J(a, t))
                    },
                    g = function(t) {
                        return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
                    },
                    m = function(t) {
                        return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
                    },
                    v = function() {
                        var e = t(this),
                            r = e.data(n),
                            o = r.opt,
                            s = o.autoExpandScrollbar ? " " + u[1] + "_expand" : "",
                            a = ["<div id='mCSB_" + r.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + r.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + s + "'><div class='" + u[12] + "'><div id='mCSB_" + r.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + r.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + r.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + s + "'><div class='" + u[12] + "'><div id='mCSB_" + r.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                            l = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical",
                            c = "yx" === o.axis ? a[0] + a[1] : "x" === o.axis ? a[1] : a[0],
                            d = "yx" === o.axis ? "<div id='mCSB_" + r.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                            h = o.autoHideScrollbar ? " " + u[6] : "",
                            p = "x" !== o.axis && "rtl" === r.langDir ? " " + u[7] : "";
                        o.setWidth && e.css("width", o.setWidth), o.setHeight && e.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === r.langDir ? "989999px" : o.setLeft, e.addClass(i + " _" + n + "_" + r.idx + h + p).wrapInner("<div id='mCSB_" + r.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + l + "'><div id='mCSB_" + r.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + r.langDir + "' /></div>");
                        var f = t("#mCSB_" + r.idx),
                            g = t("#mCSB_" + r.idx + "_container");
                        "y" === o.axis || o.advanced.autoExpandHorizontalScroll || g.css("width", y(g)), "outside" === o.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), f.addClass("mCSB_outside").after(c)) : (f.addClass("mCSB_inside").append(c), g.wrap(d)), b.call(this);
                        var m = [t("#mCSB_" + r.idx + "_dragger_vertical"), t("#mCSB_" + r.idx + "_dragger_horizontal")];
                        m[0].css("min-height", m[0].height()), m[1].css("min-width", m[1].width())
                    },
                    y = function(e) {
                        var i = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
                                return t(this).outerWidth(!0)
                            }).get())],
                            n = e.parent().width();
                        return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
                    },
                    w = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = i.opt,
                            o = t("#mCSB_" + i.idx + "_container");
                        if (r.advanced.autoExpandHorizontalScroll && "y" !== r.axis) {
                            o.css({
                                width: "auto",
                                "min-width": 0,
                                "overflow-x": "scroll"
                            });
                            var s = Math.ceil(o[0].scrollWidth);
                            3 === r.advanced.autoExpandHorizontalScroll || 2 !== r.advanced.autoExpandHorizontalScroll && s > o.parent().width() ? o.css({
                                width: s,
                                "min-width": "100%",
                                "overflow-x": "inherit"
                            }) : o.css({
                                "overflow-x": "inherit",
                                position: "absolute"
                            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
                                "min-width": "100%",
                                position: "relative"
                            }).unwrap()
                        }
                    },
                    b = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = i.opt,
                            o = t(".mCSB_" + i.idx + "_scrollbar:first"),
                            s = et(r.scrollButtons.tabindex) ? "tabindex='" + r.scrollButtons.tabindex + "'" : "",
                            a = ["<a href='#' class='" + u[13] + "' " + s + " />", "<a href='#' class='" + u[14] + "' " + s + " />", "<a href='#' class='" + u[15] + "' " + s + " />", "<a href='#' class='" + u[16] + "' " + s + " />"],
                            l = ["x" === r.axis ? a[2] : a[0], "x" === r.axis ? a[3] : a[1], a[2], a[3]];
                        r.scrollButtons.enable && o.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                    },
                    x = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = t("#mCSB_" + i.idx),
                            o = t("#mCSB_" + i.idx + "_container"),
                            s = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                            a = [r.height() / o.outerHeight(!1), r.width() / o.outerWidth(!1)],
                            c = [parseInt(s[0].css("min-height")), Math.round(a[0] * s[0].parent().height()), parseInt(s[1].css("min-width")), Math.round(a[1] * s[1].parent().width())],
                            u = l && c[1] < c[0] ? c[0] : c[1],
                            d = l && c[3] < c[2] ? c[2] : c[3];
                        s[0].css({
                            height: u,
                            "max-height": s[0].parent().height() - 10
                        }).find(".mCSB_dragger_bar").css({
                            "line-height": c[0] + "px"
                        }), s[1].css({
                            width: d,
                            "max-width": s[1].parent().width() - 10
                        })
                    },
                    _ = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = t("#mCSB_" + i.idx),
                            o = t("#mCSB_" + i.idx + "_container"),
                            s = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                            a = [o.outerHeight(!1) - r.height(), o.outerWidth(!1) - r.width()],
                            l = [a[0] / (s[0].parent().height() - s[0].height()), a[1] / (s[1].parent().width() - s[1].width())];
                        i.scrollRatio = {
                            y: l[0],
                            x: l[1]
                        }
                    },
                    C = function(t, e, i) {
                        var n = i ? u[0] + "_expanded" : "",
                            r = t.closest(".mCSB_scrollTools");
                        "active" === e ? (t.toggleClass(u[0] + " " + n), r.toggleClass(u[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(u[0]), r.removeClass(u[1])) : (t.addClass(u[0]), r.addClass(u[1])))
                    },
                    S = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = t("#mCSB_" + i.idx),
                            o = t("#mCSB_" + i.idx + "_container"),
                            s = null == i.overflowed ? o.height() : o.outerHeight(!1),
                            a = null == i.overflowed ? o.width() : o.outerWidth(!1),
                            l = o[0].scrollHeight,
                            c = o[0].scrollWidth;
                        return l > s && (s = l), c > a && (a = c), [s > r.height(), a > r.width()]
                    },
                    T = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = i.opt,
                            o = t("#mCSB_" + i.idx),
                            s = t("#mCSB_" + i.idx + "_container"),
                            a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
                        if (V(e), ("x" !== r.axis && !i.overflowed[0] || "y" === r.axis && i.overflowed[0]) && (a[0].add(s).css("top", 0), X(e, "_resetY")), "y" !== r.axis && !i.overflowed[1] || "x" === r.axis && i.overflowed[1]) {
                            var l = dx = 0;
                            "rtl" === i.langDir && (l = o.width() - s.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), s.css("left", l), a[1].css("left", dx), X(e, "_resetX")
                        }
                    },
                    k = function() {
                        var e, i = t(this),
                            r = i.data(n),
                            o = r.opt;
                        r.bindEvents || (D.call(this), o.contentTouchScroll && q.call(this), A.call(this), o.mouseWheel.enable && function n() {
                            e = setTimeout(function() {
                                t.event.special.mousewheel ? (clearTimeout(e), P.call(i[0])) : n()
                            }, 100)
                        }(), j.call(this), B.call(this), o.advanced.autoScrollOnFocus && I.call(this), o.scrollButtons.enable && R.call(this), o.keyboard.enable && H.call(this), r.bindEvents = !0)
                    },
                    E = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = i.opt,
                            o = n + "_" + i.idx,
                            s = ".mCSB_" + i.idx + "_scrollbar",
                            a = t("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + s + " ." + u[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + s + ">a"),
                            l = t("#mCSB_" + i.idx + "_container");
                        r.advanced.releaseDraggableSelectors && a.add(t(r.advanced.releaseDraggableSelectors)), r.advanced.extraDraggableSelectors && a.add(t(r.advanced.extraDraggableSelectors)), i.bindEvents && (t(document).add(t(!M() || top.document)).unbind("." + o), a.each(function() {
                            t(this).unbind("." + o)
                        }), clearTimeout(e[0]._focusTimeout), J(e[0], "_focusTimeout"), clearTimeout(i.sequential.step), J(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), J(l[0], "onCompleteTimeout"), i.bindEvents = !1)
                    },
                    F = function(e) {
                        var i = t(this),
                            r = i.data(n),
                            o = r.opt,
                            s = t("#mCSB_" + r.idx + "_container_wrapper"),
                            a = s.length ? s : t("#mCSB_" + r.idx + "_container"),
                            l = [t("#mCSB_" + r.idx + "_scrollbar_vertical"), t("#mCSB_" + r.idx + "_scrollbar_horizontal")],
                            c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                        "x" !== o.axis && (r.overflowed[0] && !e ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), a.removeClass(u[8] + " " + u[10])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[0].css("display", "none"), a.removeClass(u[10])) : (l[0].css("display", "none"), a.addClass(u[10])), a.addClass(u[8]))), "y" !== o.axis && (r.overflowed[1] && !e ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), a.removeClass(u[9] + " " + u[11])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[1].css("display", "none"), a.removeClass(u[11])) : (l[1].css("display", "none"), a.addClass(u[11])), a.addClass(u[9]))), r.overflowed[0] || r.overflowed[1] ? i.removeClass(u[5]) : i.addClass(u[5])
                    },
                    L = function(e) {
                        var i = e.type,
                            n = e.target.ownerDocument !== document && null !== frameElement ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
                            r = M() && e.target.ownerDocument !== top.document && null !== frameElement ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
                        switch (i) {
                            case "pointerdown":
                            case "MSPointerDown":
                            case "pointermove":
                            case "MSPointerMove":
                            case "pointerup":
                            case "MSPointerUp":
                                return n ? [e.originalEvent.pageY - n[0] + r[0], e.originalEvent.pageX - n[1] + r[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                            case "touchstart":
                            case "touchmove":
                            case "touchend":
                                var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                                    s = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                                return e.target.ownerDocument !== document ? [o.screenY, o.screenX, s > 1] : [o.pageY, o.pageX, s > 1];
                            default:
                                return n ? [e.pageY - n[0] + r[0], e.pageX - n[1] + r[1], !1] : [e.pageY, e.pageX, !1]
                        }
                    },
                    D = function() {
                        function e(t, e, n, r) {
                            if (p[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, i.attr("id") === h[1]) var o = "x",
                                l = (i[0].offsetLeft - e + r) * a.scrollRatio.x;
                            else var o = "y",
                                l = (i[0].offsetTop - t + n) * a.scrollRatio.y;
                            X(s, l.toString(), {
                                dir: o,
                                drag: !0
                            })
                        }
                        var i, r, o, s = t(this),
                            a = s.data(n),
                            u = a.opt,
                            d = n + "_" + a.idx,
                            h = ["mCSB_" + a.idx + "_dragger_vertical", "mCSB_" + a.idx + "_dragger_horizontal"],
                            p = t("#mCSB_" + a.idx + "_container"),
                            f = t("#" + h[0] + ",#" + h[1]),
                            g = u.advanced.releaseDraggableSelectors ? f.add(t(u.advanced.releaseDraggableSelectors)) : f,
                            m = u.advanced.extraDraggableSelectors ? t(!M() || top.document).add(t(u.advanced.extraDraggableSelectors)) : t(!M() || top.document);
                        f.bind("contextmenu." + d, function(t) {
                            t.preventDefault()
                        }).bind("mousedown." + d + " touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function(e) {
                            if (e.stopImmediatePropagation(), e.preventDefault(), K(e)) {
                                c = !0, l && (document.onselectstart = function() {
                                    return !1
                                }), N.call(p, !1), V(s);
                                var n = (i = t(this)).offset(),
                                    a = L(e)[0] - n.top,
                                    d = L(e)[1] - n.left,
                                    h = i.height() + n.top,
                                    f = i.width() + n.left;
                                h > a && a > 0 && f > d && d > 0 && (r = a, o = d), C(i, "active", u.autoExpandScrollbar)
                            }
                        }).bind("touchmove." + d, function(t) {
                            t.stopImmediatePropagation(), t.preventDefault();
                            var n = i.offset(),
                                s = L(t)[0] - n.top,
                                a = L(t)[1] - n.left;
                            e(r, o, s, a)
                        }), t(document).add(m).bind("mousemove." + d + " pointermove." + d + " MSPointerMove." + d, function(t) {
                            if (i) {
                                var n = i.offset(),
                                    s = L(t)[0] - n.top,
                                    a = L(t)[1] - n.left;
                                if (r === s && o === a) return;
                                e(r, o, s, a)
                            }
                        }).add(g).bind("mouseup." + d + " touchend." + d + " pointerup." + d + " MSPointerUp." + d, function() {
                            i && (C(i, "active", u.autoExpandScrollbar), i = null), c = !1, l && (document.onselectstart = null), N.call(p, !0)
                        })
                    },
                    q = function() {
                        function i(t) {
                            if (!tt(t) || c || L(t)[2]) e = 0;
                            else {
                                e = 1, _ = 0, C = 0, u = 1, S.removeClass("mCS_touch_action");
                                var i = D.offset();
                                d = L(t)[0] - i.top, h = L(t)[1] - i.left, z = [L(t)[0], L(t)[1]]
                            }
                        }

                        function r(t) {
                            if (tt(t) && !c && !L(t)[2] && (k.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!C || _) && u)) {
                                m = Q();
                                var e = F.offset(),
                                    i = L(t)[0] - e.top,
                                    n = L(t)[1] - e.left,
                                    r = "mcsLinearOut";
                                if (A.push(i), P.push(n), z[2] = Math.abs(L(t)[0] - z[0]), z[3] = Math.abs(L(t)[1] - z[1]), T.overflowed[0]) var o = q[0].parent().height() - q[0].height(),
                                    s = d - i > 0 && i - d > -o * T.scrollRatio.y && (2 * z[3] < z[2] || "yx" === k.axis);
                                if (T.overflowed[1]) var a = q[1].parent().width() - q[1].width(),
                                    p = h - n > 0 && n - h > -a * T.scrollRatio.x && (2 * z[2] < z[3] || "yx" === k.axis);
                                s || p ? (B || t.preventDefault(), _ = 1) : (C = 1, S.addClass("mCS_touch_action")), B && t.preventDefault(), b = "yx" === k.axis ? [d - i, h - n] : "x" === k.axis ? [null, h - n] : [d - i, null], D[0].idleTimer = 250, T.overflowed[0] && l(b[0], O, r, "y", "all", !0), T.overflowed[1] && l(b[1], O, r, "x", N, !0)
                            }
                        }

                        function o(t) {
                            if (!tt(t) || c || L(t)[2]) e = 0;
                            else {
                                e = 1, t.stopImmediatePropagation(), V(S), g = Q();
                                var i = F.offset();
                                p = L(t)[0] - i.top, f = L(t)[1] - i.left, A = [], P = []
                            }
                        }

                        function s(t) {
                            if (tt(t) && !c && !L(t)[2]) {
                                u = 0, t.stopImmediatePropagation(), _ = 0, C = 0, v = Q();
                                var e = F.offset(),
                                    i = L(t)[0] - e.top,
                                    n = L(t)[1] - e.left;
                                if (!(v - m > 30)) {
                                    var r = "mcsEaseOut",
                                        o = 2.5 > (w = 1e3 / (v - g)),
                                        s = o ? [A[A.length - 2], P[P.length - 2]] : [0, 0];
                                    y = o ? [i - s[0], n - s[1]] : [i - p, n - f];
                                    var d = [Math.abs(y[0]), Math.abs(y[1])];
                                    w = o ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [w, w];
                                    var h = [Math.abs(D[0].offsetTop) - y[0] * a(d[0] / w[0], w[0]), Math.abs(D[0].offsetLeft) - y[1] * a(d[1] / w[1], w[1])];
                                    b = "yx" === k.axis ? [h[0], h[1]] : "x" === k.axis ? [null, h[1]] : [h[0], null], x = [4 * d[0] + k.scrollInertia, 4 * d[1] + k.scrollInertia];
                                    var S = parseInt(k.contentTouchScroll) || 0;
                                    b[0] = d[0] > S ? b[0] : 0, b[1] = d[1] > S ? b[1] : 0, T.overflowed[0] && l(b[0], x[0], r, "y", N, !1), T.overflowed[1] && l(b[1], x[1], r, "x", N, !1)
                                }
                            }
                        }

                        function a(t, e) {
                            var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                            return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
                        }

                        function l(t, e, i, n, r, o) {
                            t && X(S, t.toString(), {
                                dur: e,
                                scrollEasing: i,
                                dir: n,
                                overwrite: r,
                                drag: o
                            })
                        }
                        var u, d, h, p, f, g, m, v, y, w, b, x, _, C, S = t(this),
                            T = S.data(n),
                            k = T.opt,
                            E = n + "_" + T.idx,
                            F = t("#mCSB_" + T.idx),
                            D = t("#mCSB_" + T.idx + "_container"),
                            q = [t("#mCSB_" + T.idx + "_dragger_vertical"), t("#mCSB_" + T.idx + "_dragger_horizontal")],
                            A = [],
                            P = [],
                            O = 0,
                            N = "yx" === k.axis ? "none" : "all",
                            z = [],
                            j = D.find("iframe"),
                            I = ["touchstart." + E + " pointerdown." + E + " MSPointerDown." + E, "touchmove." + E + " pointermove." + E + " MSPointerMove." + E, "touchend." + E + " pointerup." + E + " MSPointerUp." + E],
                            B = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                        D.bind(I[0], function(t) {
                            i(t)
                        }).bind(I[1], function(t) {
                            r(t)
                        }), F.bind(I[0], function(t) {
                            o(t)
                        }).bind(I[2], function(t) {
                            s(t)
                        }), j.length && j.each(function() {
                            t(this).bind("load", function() {
                                M(this) && t(this.contentDocument || this.contentWindow.document).bind(I[0], function(t) {
                                    i(t), o(t)
                                }).bind(I[1], function(t) {
                                    r(t)
                                }).bind(I[2], function(t) {
                                    s(t)
                                })
                            })
                        })
                    },
                    A = function() {
                        function i(t, e, i) {
                            l.type = i && r ? "stepped" : "stepless", l.scrollAmount = 10, W(o, t, e, "mcsLinearOut", i ? 60 : null)
                        }
                        var r, o = t(this),
                            s = o.data(n),
                            a = s.opt,
                            l = s.sequential,
                            u = n + "_" + s.idx,
                            d = t("#mCSB_" + s.idx + "_container"),
                            h = d.parent();
                        d.bind("mousedown." + u, function() {
                            e || r || (r = 1, c = !0)
                        }).add(document).bind("mousemove." + u, function(t) {
                            if (!e && r && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                                var n = d.offset(),
                                    o = L(t)[0] - n.top + d[0].offsetTop,
                                    c = L(t)[1] - n.left + d[0].offsetLeft;
                                o > 0 && o < h.height() && c > 0 && c < h.width() ? l.step && i("off", null, "stepped") : ("x" !== a.axis && s.overflowed[0] && (0 > o ? i("on", 38) : o > h.height() && i("on", 40)), "y" !== a.axis && s.overflowed[1] && (0 > c ? i("on", 37) : c > h.width() && i("on", 39)))
                            }
                        }).bind("mouseup." + u + " dragend." + u, function() {
                            e || (r && (r = 0, i("off", null)), c = !1)
                        })
                    },
                    P = function() {
                        function e(e, n) {
                            if (V(i), !z(i, e.target)) {
                                var s = "auto" !== o.mouseWheel.deltaFactor ? parseInt(o.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                                    u = o.scrollInertia;
                                if ("x" === o.axis || "x" === o.mouseWheel.axis) var d = "x",
                                    h = [Math.round(s * r.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
                                    p = "auto" !== o.mouseWheel.scrollAmount ? h[1] : h[0] >= a.width() ? .9 * a.width() : h[0],
                                    f = Math.abs(t("#mCSB_" + r.idx + "_container")[0].offsetLeft),
                                    g = c[1][0].offsetLeft,
                                    m = c[1].parent().width() - c[1].width(),
                                    v = "y" === o.mouseWheel.axis ? e.deltaY || n : e.deltaX;
                                else var d = "y",
                                    h = [Math.round(s * r.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
                                    p = "auto" !== o.mouseWheel.scrollAmount ? h[1] : h[0] >= a.height() ? .9 * a.height() : h[0],
                                    f = Math.abs(t("#mCSB_" + r.idx + "_container")[0].offsetTop),
                                    g = c[0][0].offsetTop,
                                    m = c[0].parent().height() - c[0].height(),
                                    v = e.deltaY || n;
                                "y" === d && !r.overflowed[0] || "x" === d && !r.overflowed[1] || ((o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (v = -v), o.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== g || 0 > v && g !== m || o.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 5 && !o.mouseWheel.normalizeDelta && (p = e.deltaFactor, u = 17), X(i, (f - v * p).toString(), {
                                    dir: d,
                                    dur: u
                                }))
                            }
                        }
                        if (t(this).data(n)) {
                            var i = t(this),
                                r = i.data(n),
                                o = r.opt,
                                s = n + "_" + r.idx,
                                a = t("#mCSB_" + r.idx),
                                c = [t("#mCSB_" + r.idx + "_dragger_vertical"), t("#mCSB_" + r.idx + "_dragger_horizontal")],
                                u = t("#mCSB_" + r.idx + "_container").find("iframe");
                            u.length && u.each(function() {
                                t(this).bind("load", function() {
                                    M(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + s, function(t, i) {
                                        e(t, i)
                                    })
                                })
                            }), a.bind("mousewheel." + s, function(t, i) {
                                e(t, i)
                            })
                        }
                    },
                    O = new Object,
                    M = function(e) {
                        var i = !1,
                            n = !1,
                            r = null;
                        if (void 0 === e ? n = "#empty" : void 0 !== t(e).attr("id") && (n = t(e).attr("id")), !1 !== n && void 0 !== O[n]) return O[n];
                        if (e) {
                            try {
                                var o = e.contentDocument || e.contentWindow.document;
                                r = o.body.innerHTML
                            } catch (t) {}
                            i = null !== r
                        } else {
                            try {
                                var o = top.document;
                                r = o.body.innerHTML
                            } catch (t) {}
                            i = null !== r
                        }
                        return !1 !== n && (O[n] = i), i
                    },
                    N = function(t) {
                        var e = this.find("iframe");
                        if (e.length) {
                            var i = t ? "auto" : "none";
                            e.css("pointer-events", i)
                        }
                    },
                    z = function(e, i) {
                        var r = i.nodeName.toLowerCase(),
                            o = e.data(n).opt.mouseWheel.disableOver;
                        return t.inArray(r, o) > -1 && !(t.inArray(r, ["select", "textarea"]) > -1 && !t(i).is(":focus"))
                    },
                    j = function() {
                        var e, i = t(this),
                            r = i.data(n),
                            o = n + "_" + r.idx,
                            s = t("#mCSB_" + r.idx + "_container"),
                            a = s.parent(),
                            l = t(".mCSB_" + r.idx + "_scrollbar ." + u[12]);
                        l.bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o, function(i) {
                            c = !0, t(i.target).hasClass("mCSB_dragger") || (e = 1)
                        }).bind("touchend." + o + " pointerup." + o + " MSPointerUp." + o, function() {
                            c = !1
                        }).bind("click." + o, function(n) {
                            if (e && (e = 0, t(n.target).hasClass(u[12]) || t(n.target).hasClass("mCSB_draggerRail"))) {
                                V(i);
                                var o = t(this),
                                    l = o.find(".mCSB_dragger");
                                if (o.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                    if (!r.overflowed[1]) return;
                                    var c = "x",
                                        d = n.pageX > l.offset().left ? -1 : 1,
                                        h = Math.abs(s[0].offsetLeft) - d * (.9 * a.width())
                                } else {
                                    if (!r.overflowed[0]) return;
                                    var c = "y",
                                        d = n.pageY > l.offset().top ? -1 : 1,
                                        h = Math.abs(s[0].offsetTop) - d * (.9 * a.height())
                                }
                                X(i, h.toString(), {
                                    dir: c,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                        })
                    },
                    I = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = i.opt,
                            o = n + "_" + i.idx,
                            s = t("#mCSB_" + i.idx + "_container"),
                            a = s.parent();
                        s.bind("focusin." + o, function() {
                            var i = t(document.activeElement),
                                n = s.find(".mCustomScrollBox").length;
                            i.is(r.advanced.autoScrollOnFocus) && (V(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = n ? 17 * n : 0, e[0]._focusTimeout = setTimeout(function() {
                                var t = [it(i)[0], it(i)[1]],
                                    n = [s[0].offsetTop, s[0].offsetLeft],
                                    o = [n[0] + t[0] >= 0 && n[0] + t[0] < a.height() - i.outerHeight(!1), n[1] + t[1] >= 0 && n[0] + t[1] < a.width() - i.outerWidth(!1)],
                                    l = "yx" !== r.axis || o[0] || o[1] ? "all" : "none";
                                "x" === r.axis || o[0] || X(e, t[0].toString(), {
                                    dir: "y",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: l,
                                    dur: 0
                                }), "y" === r.axis || o[1] || X(e, t[1].toString(), {
                                    dir: "x",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: l,
                                    dur: 0
                                })
                            }, e[0]._focusTimer))
                        })
                    },
                    B = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = n + "_" + i.idx,
                            o = t("#mCSB_" + i.idx + "_container").parent();
                        o.bind("scroll." + r, function() {
                            0 === o.scrollTop() && 0 === o.scrollLeft() || t(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
                        })
                    },
                    R = function() {
                        var e = t(this),
                            i = e.data(n),
                            r = i.opt,
                            o = i.sequential,
                            s = n + "_" + i.idx,
                            a = ".mCSB_" + i.idx + "_scrollbar",
                            l = t(a + ">a");
                        l.bind("contextmenu." + s, function(t) {
                            t.preventDefault()
                        }).bind("mousedown." + s + " touchstart." + s + " pointerdown." + s + " MSPointerDown." + s + " mouseup." + s + " touchend." + s + " pointerup." + s + " MSPointerUp." + s + " mouseout." + s + " pointerout." + s + " MSPointerOut." + s + " click." + s, function(n) {
                            function s(t, i) {
                                o.scrollAmount = r.scrollButtons.scrollAmount, W(e, t, i)
                            }
                            if (n.preventDefault(), K(n)) {
                                var a = t(this).attr("class");
                                switch (o.type = r.scrollButtons.scrollType, n.type) {
                                    case "mousedown":
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                        if ("stepped" === o.type) return;
                                        c = !0, i.tweenRunning = !1, s("on", a);
                                        break;
                                    case "mouseup":
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseout":
                                    case "pointerout":
                                    case "MSPointerOut":
                                        if ("stepped" === o.type) return;
                                        c = !1, o.dir && s("off", a);
                                        break;
                                    case "click":
                                        if ("stepped" !== o.type || i.tweenRunning) return;
                                        s("on", a)
                                }
                            }
                        })
                    },
                    H = function() {
                        function e(e) {
                            function n(t, e) {
                                s.type = o.keyboard.scrollType, s.scrollAmount = o.keyboard.scrollAmount, "stepped" === s.type && r.tweenRunning || W(i, t, e)
                            }
                            switch (e.type) {
                                case "blur":
                                    r.tweenRunning && s.dir && n("off", null);
                                    break;
                                case "keydown":
                                case "keyup":
                                    var a = e.keyCode ? e.keyCode : e.which,
                                        l = "on";
                                    if ("x" !== o.axis && (38 === a || 40 === a) || "y" !== o.axis && (37 === a || 39 === a)) {
                                        if ((38 === a || 40 === a) && !r.overflowed[0] || (37 === a || 39 === a) && !r.overflowed[1]) return;
                                        "keyup" === e.type && (l = "off"), t(document.activeElement).is(d) || (e.preventDefault(), e.stopImmediatePropagation(), n(l, a))
                                    } else if (33 === a || 34 === a) {
                                        if ((r.overflowed[0] || r.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                            V(i);
                                            var h = 34 === a ? -1 : 1;
                                            if ("x" === o.axis || "yx" === o.axis && r.overflowed[1] && !r.overflowed[0]) var p = "x",
                                                f = Math.abs(c[0].offsetLeft) - h * (.9 * u.width());
                                            else var p = "y",
                                                f = Math.abs(c[0].offsetTop) - h * (.9 * u.height());
                                            X(i, f.toString(), {
                                                dir: p,
                                                scrollEasing: "mcsEaseInOut"
                                            })
                                        }
                                    } else if ((35 === a || 36 === a) && !t(document.activeElement).is(d) && ((r.overflowed[0] || r.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
                                        if ("x" === o.axis || "yx" === o.axis && r.overflowed[1] && !r.overflowed[0]) var p = "x",
                                            f = 35 === a ? Math.abs(u.width() - c.outerWidth(!1)) : 0;
                                        else var p = "y",
                                            f = 35 === a ? Math.abs(u.height() - c.outerHeight(!1)) : 0;
                                        X(i, f.toString(), {
                                            dir: p,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                            }
                        }
                        var i = t(this),
                            r = i.data(n),
                            o = r.opt,
                            s = r.sequential,
                            a = n + "_" + r.idx,
                            l = t("#mCSB_" + r.idx),
                            c = t("#mCSB_" + r.idx + "_container"),
                            u = c.parent(),
                            d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                            h = c.find("iframe"),
                            p = ["blur." + a + " keydown." + a + " keyup." + a];
                        h.length && h.each(function() {
                            t(this).bind("load", function() {
                                M(this) && t(this.contentDocument || this.contentWindow.document).bind(p[0], function(t) {
                                    e(t)
                                })
                            })
                        }), l.attr("tabindex", "0").bind(p[0], function(t) {
                            e(t)
                        })
                    },
                    W = function(e, i, r, o, s) {
                        function a(t) {
                            c.snapAmount && (d.scrollAmount = c.snapAmount instanceof Array ? "x" === d.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
                            var i = "stepped" !== d.type,
                                n = s || (t ? i ? f / 1.5 : g : 1e3 / 60),
                                r = t ? i ? 7.5 : 40 : 2.5,
                                u = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                                p = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
                                m = "x" === d.dir[0] ? u[1] + d.dir[1] * (p[1] * r) : u[0] + d.dir[1] * (p[0] * r),
                                v = "x" === d.dir[0] ? u[1] + d.dir[1] * parseInt(d.scrollAmount) : u[0] + d.dir[1] * parseInt(d.scrollAmount),
                                y = "auto" !== d.scrollAmount ? v : m,
                                w = o || (t ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                                b = !!t;
                            return t && 17 > n && (y = "x" === d.dir[0] ? u[1] : u[0]), X(e, y.toString(), {
                                dir: d.dir[0],
                                scrollEasing: w,
                                dur: n,
                                onComplete: b
                            }), t ? void(d.dir = !1) : (clearTimeout(d.step), void(d.step = setTimeout(function() {
                                a()
                            }, n)))
                        }
                        var l = e.data(n),
                            c = l.opt,
                            d = l.sequential,
                            h = t("#mCSB_" + l.idx + "_container"),
                            p = "stepped" === d.type,
                            f = c.scrollInertia < 26 ? 26 : c.scrollInertia,
                            g = c.scrollInertia < 1 ? 17 : c.scrollInertia;
                        switch (i) {
                            case "on":
                                if (d.dir = [r === u[16] || r === u[15] || 39 === r || 37 === r ? "x" : "y", r === u[13] || r === u[15] || 38 === r || 37 === r ? -1 : 1], V(e), et(r) && "stepped" === d.type) return;
                                a(p);
                                break;
                            case "off":
                                clearTimeout(d.step), J(d, "step"), V(e), (p || l.tweenRunning && d.dir) && a(!0)
                        }
                    },
                    G = function(e) {
                        var i = t(this).data(n).opt,
                            r = [];
                        return "function" == typeof e && (e = e()), e instanceof Array ? r = e.length > 1 ? [e[0], e[1]] : "x" === i.axis ? [null, e[0]] : [e[0], null] : (r[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e, r[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e), "function" == typeof r[0] && (r[0] = r[0]()), "function" == typeof r[1] && (r[1] = r[1]()), r
                    },
                    $ = function(e, i) {
                        if (null != e && void 0 !== e) {
                            var r = t(this),
                                o = r.data(n),
                                s = o.opt,
                                a = t("#mCSB_" + o.idx + "_container"),
                                l = a.parent(),
                                c = typeof e;
                            i || (i = "x" === s.axis ? "x" : "y");
                            var u = "x" === i ? a.outerWidth(!1) - l.width() : a.outerHeight(!1) - l.height(),
                                h = "x" === i ? a[0].offsetLeft : a[0].offsetTop,
                                p = "x" === i ? "left" : "top";
                            switch (c) {
                                case "function":
                                    return e();
                                case "object":
                                    var f = e.jquery ? e : t(e);
                                    if (!f.length) return;
                                    return "x" === i ? it(f)[1] : it(f)[0];
                                case "string":
                                case "number":
                                    if (et(e)) return Math.abs(e);
                                    if (-1 !== e.indexOf("%")) return Math.abs(u * parseInt(e) / 100);
                                    if (-1 !== e.indexOf("-=")) return Math.abs(h - parseInt(e.split("-=")[1]));
                                    if (-1 !== e.indexOf("+=")) {
                                        var g = h + parseInt(e.split("+=")[1]);
                                        return g >= 0 ? 0 : Math.abs(g)
                                    }
                                    if (-1 !== e.indexOf("px") && et(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                                    if ("top" === e || "left" === e) return 0;
                                    if ("bottom" === e) return Math.abs(l.height() - a.outerHeight(!1));
                                    if ("right" === e) return Math.abs(l.width() - a.outerWidth(!1));
                                    if ("first" === e || "last" === e) {
                                        var f = a.find(":" + e);
                                        return "x" === i ? it(f)[1] : it(f)[0]
                                    }
                                    return t(e).length ? "x" === i ? it(t(e))[1] : it(t(e))[0] : (a.css(p, e), void d.update.call(null, r[0]))
                            }
                        }
                    },
                    U = function(e) {
                        function i(t) {
                            clearTimeout(a[0].autoUpdate), d.update.call(null, r[0], t)
                        }
                        var r = t(this),
                            o = r.data(n),
                            s = o.opt,
                            a = t("#mCSB_" + o.idx + "_container");
                        return e ? (clearTimeout(a[0].autoUpdate), void J(a[0], "autoUpdate")) : void
                        function e() {
                            return clearTimeout(a[0].autoUpdate), 0 === r.parents("html").length ? void(r = null) : void(a[0].autoUpdate = setTimeout(function() {
                                return s.advanced.updateOnSelectorChange && (o.poll.change.n = function() {
                                    !0 === s.advanced.updateOnSelectorChange && (s.advanced.updateOnSelectorChange = "*");
                                    var t = 0,
                                        e = a.find(s.advanced.updateOnSelectorChange);
                                    return s.advanced.updateOnSelectorChange && e.length > 0 && e.each(function() {
                                        t += this.offsetHeight + this.offsetWidth
                                    }), t
                                }(), o.poll.change.n !== o.poll.change.o) ? (o.poll.change.o = o.poll.change.n, void i(3)) : s.advanced.updateOnContentResize && (o.poll.size.n = r[0].scrollHeight + r[0].scrollWidth + a[0].offsetHeight + r[0].offsetHeight + r[0].offsetWidth, o.poll.size.n !== o.poll.size.o) ? (o.poll.size.o = o.poll.size.n, void i(1)) : !s.advanced.updateOnImageLoad || "auto" === s.advanced.updateOnImageLoad && "y" === s.axis || (o.poll.img.n = a.find("img").length, o.poll.img.n === o.poll.img.o) ? void((s.advanced.updateOnSelectorChange || s.advanced.updateOnContentResize || s.advanced.updateOnImageLoad) && e()) : (o.poll.img.o = o.poll.img.n, void a.find("img").each(function() {
                                    ! function(e) {
                                        if (t(e).hasClass(u[2])) i();
                                        else {
                                            var n = new Image;
                                            n.onload = function(t, e) {
                                                return function() {
                                                    return e.apply(t, arguments)
                                                }
                                            }(n, function() {
                                                this.onload = null, t(e).addClass(u[2]), i(2)
                                            }), n.src = e.src
                                        }
                                    }(this)
                                }))
                            }, s.advanced.autoUpdateTimeout))
                        }()
                    },
                    V = function(e) {
                        var i = e.data(n),
                            r = t("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
                        r.each(function() {
                            Z.call(this)
                        })
                    },
                    X = function(e, i, r) {
                        function o(t) {
                            return a && l.callbacks[t] && "function" == typeof l.callbacks[t]
                        }

                        function s() {
                            var t = [h[0].offsetTop, h[0].offsetLeft],
                                i = [v[0].offsetTop, v[0].offsetLeft],
                                n = [h.outerHeight(!1), h.outerWidth(!1)],
                                o = [d.height(), d.width()];
                            e[0].mcs = {
                                content: h,
                                top: t[0],
                                left: t[1],
                                draggerTop: i[0],
                                draggerLeft: i[1],
                                topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(n[0]) - o[0])),
                                leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(n[1]) - o[1])),
                                direction: r.dir
                            }
                        }
                        var a = e.data(n),
                            l = a.opt,
                            c = {
                                trigger: "internal",
                                dir: "y",
                                scrollEasing: "mcsEaseOut",
                                drag: !1,
                                dur: l.scrollInertia,
                                overwrite: "all",
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            },
                            r = t.extend(c, r),
                            u = [r.dur, r.drag ? 0 : r.dur],
                            d = t("#mCSB_" + a.idx),
                            h = t("#mCSB_" + a.idx + "_container"),
                            p = h.parent(),
                            f = l.callbacks.onTotalScrollOffset ? G.call(e, l.callbacks.onTotalScrollOffset) : [0, 0],
                            g = l.callbacks.onTotalScrollBackOffset ? G.call(e, l.callbacks.onTotalScrollBackOffset) : [0, 0];
                        if (a.trigger = r.trigger, 0 === p.scrollTop() && 0 === p.scrollLeft() || (t(".mCSB_" + a.idx + "_scrollbar").css("visibility", "visible"), p.scrollTop(0).scrollLeft(0)), "_resetY" !== i || a.contentReset.y || (o("onOverflowYNone") && l.callbacks.onOverflowYNone.call(e[0]), a.contentReset.y = 1), "_resetX" !== i || a.contentReset.x || (o("onOverflowXNone") && l.callbacks.onOverflowXNone.call(e[0]), a.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                            if (!a.contentReset.y && e[0].mcs || !a.overflowed[0] || (o("onOverflowY") && l.callbacks.onOverflowY.call(e[0]), a.contentReset.x = null), !a.contentReset.x && e[0].mcs || !a.overflowed[1] || (o("onOverflowX") && l.callbacks.onOverflowX.call(e[0]), a.contentReset.x = null), l.snapAmount) {
                                var m = l.snapAmount instanceof Array ? "x" === r.dir ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount;
                                i = function(t, e, i) {
                                    return Math.round(t / e) * e - i
                                }(i, m, l.snapOffset)
                            }
                            switch (r.dir) {
                                case "x":
                                    var v = t("#mCSB_" + a.idx + "_dragger_horizontal"),
                                        y = "left",
                                        w = h[0].offsetLeft,
                                        b = [d.width() - h.outerWidth(!1), v.parent().width() - v.width()],
                                        x = [i, 0 === i ? 0 : i / a.scrollRatio.x],
                                        _ = f[1],
                                        S = g[1],
                                        T = _ > 0 ? _ / a.scrollRatio.x : 0,
                                        k = S > 0 ? S / a.scrollRatio.x : 0;
                                    break;
                                case "y":
                                    var v = t("#mCSB_" + a.idx + "_dragger_vertical"),
                                        y = "top",
                                        w = h[0].offsetTop,
                                        b = [d.height() - h.outerHeight(!1), v.parent().height() - v.height()],
                                        x = [i, 0 === i ? 0 : i / a.scrollRatio.y],
                                        _ = f[0],
                                        S = g[0],
                                        T = _ > 0 ? _ / a.scrollRatio.y : 0,
                                        k = S > 0 ? S / a.scrollRatio.y : 0
                            }
                            x[1] < 0 || 0 === x[0] && 0 === x[1] ? x = [0, 0] : x[1] >= b[1] ? x = [b[0], b[1]] : x[0] = -x[0], e[0].mcs || (s(), o("onInit") && l.callbacks.onInit.call(e[0])), clearTimeout(h[0].onCompleteTimeout), Y(v[0], y, Math.round(x[1]), u[1], r.scrollEasing), !a.tweenRunning && (0 === w && x[0] >= 0 || w === b[0] && x[0] <= b[0]) || Y(h[0], y, Math.round(x[0]), u[0], r.scrollEasing, r.overwrite, {
                                onStart: function() {
                                    r.callbacks && r.onStart && !a.tweenRunning && (o("onScrollStart") && (s(), l.callbacks.onScrollStart.call(e[0])), a.tweenRunning = !0, C(v), a.cbOffsets = [l.callbacks.alwaysTriggerOffsets || w >= b[0] + _, l.callbacks.alwaysTriggerOffsets || -S >= w])
                                },
                                onUpdate: function() {
                                    r.callbacks && r.onUpdate && o("whileScrolling") && (s(), l.callbacks.whileScrolling.call(e[0]))
                                },
                                onComplete: function() {
                                    if (r.callbacks && r.onComplete) {
                                        "yx" === l.axis && clearTimeout(h[0].onCompleteTimeout);
                                        var t = h[0].idleTimer || 0;
                                        h[0].onCompleteTimeout = setTimeout(function() {
                                            o("onScroll") && (s(), l.callbacks.onScroll.call(e[0])), o("onTotalScroll") && x[1] >= b[1] - T && a.cbOffsets[0] && (s(), l.callbacks.onTotalScroll.call(e[0])), o("onTotalScrollBack") && x[1] <= k && a.cbOffsets[1] && (s(), l.callbacks.onTotalScrollBack.call(e[0])), a.tweenRunning = !1, h[0].idleTimer = 0, C(v, "hide")
                                        }, t)
                                    }
                                }
                            })
                        }
                    },
                    Y = function(t, e, i, n, r, o, s) {
                        function a() {
                            y.stop || (g || d.call(), g = Q() - f, l(), g >= y.time && (y.time = g > y.time ? g + c - (g - y.time) : g + c - 1, y.time < g + 1 && (y.time = g + 1)), y.time < n ? y.id = u(a) : p.call())
                        }

                        function l() {
                            n > 0 ? (y.currVal = function(t, e, i, n, r) {
                                switch (r) {
                                    case "linear":
                                    case "mcsLinear":
                                        return i * t / n + e;
                                    case "mcsLinearOut":
                                        return t /= n, t--, i * Math.sqrt(1 - t * t) + e;
                                    case "easeInOutSmooth":
                                        return 1 > (t /= n / 2) ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
                                    case "easeInOutStrong":
                                        return 1 > (t /= n / 2) ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (2 - Math.pow(2, -10 * t)) + e);
                                    case "easeInOut":
                                    case "mcsEaseInOut":
                                        return 1 > (t /= n / 2) ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
                                    case "easeOutSmooth":
                                        return t /= n, -i * (--t * t * t * t - 1) + e;
                                    case "easeOutStrong":
                                        return i * (1 - Math.pow(2, -10 * t / n)) + e;
                                    case "easeOut":
                                    case "mcsEaseOut":
                                    default:
                                        var o = (t /= n) * t,
                                            s = o * t;
                                        return e + i * (.499999999999997 * s * o + -2.5 * o * o + 5.5 * s + -6.5 * o + 4 * t)
                                }
                            }(y.time, m, w, n, r), v[e] = Math.round(y.currVal) + "px") : v[e] = i + "px", h.call()
                        }
                        t._mTween || (t._mTween = {
                            top: {},
                            left: {}
                        });
                        var c, u, s = s || {},
                            d = s.onStart || function() {},
                            h = s.onUpdate || function() {},
                            p = s.onComplete || function() {},
                            f = Q(),
                            g = 0,
                            m = t.offsetTop,
                            v = t.style,
                            y = t._mTween[e];
                        "left" === e && (m = t.offsetLeft);
                        var w = i - m;
                        y.stop = 0, "none" !== o && null != y.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(y.id) : clearTimeout(y.id), y.id = null), c = 1e3 / 60, y.time = g + c, u = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                            return l(), setTimeout(t, .01)
                        }, y.id = u(a)
                    },
                    Q = function() {
                        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                    },
                    Z = function() {
                        var t = this;
                        t._mTween || (t._mTween = {
                            top: {},
                            left: {}
                        });
                        for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                            var n = e[i];
                            t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id), t._mTween[n].id = null, t._mTween[n].stop = 1)
                        }
                    },
                    J = function(t, e) {
                        try {
                            delete t[e]
                        } catch (i) {
                            t[e] = null
                        }
                    },
                    K = function(t) {
                        return !(t.which && 1 !== t.which)
                    },
                    tt = function(t) {
                        var e = t.originalEvent.pointerType;
                        return !(e && "touch" !== e && 2 !== e)
                    },
                    et = function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    },
                    it = function(t) {
                        var e = t.parents(".mCSB_container");
                        return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
                    },
                    nt = function() {
                        var t = function() {
                            var t = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var e = 0; e < t.length; e++)
                                if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                            return null
                        }();
                        return !!t && document[t]
                    };
                t.fn[i] = function(e) {
                    return d[e] ? d[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : d.init.apply(this, arguments)
                }, t[i] = function(e) {
                    return d[e] ? d[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : d.init.apply(this, arguments)
                }, t[i].defaults = o, window[i] = !0, t(window).bind("load", function() {
                    t(r)[i](), t.extend(t.expr[":"], {
                        mcsInView: t.expr[":"].mcsInView || function(e) {
                            var i, n, r = t(e),
                                o = r.parents(".mCSB_container");
                            if (o.length) return i = o.parent(), (n = [o[0].offsetTop, o[0].offsetLeft])[0] + it(r)[0] >= 0 && n[0] + it(r)[0] < i.height() - r.outerHeight(!1) && n[1] + it(r)[1] >= 0 && n[1] + it(r)[1] < i.width() - r.outerWidth(!1)
                        },
                        mcsInSight: t.expr[":"].mcsInSight || function(e, i, n) {
                            var r, o, s, a, l = t(e),
                                c = l.parents(".mCSB_container"),
                                u = "exact" === n[3] ? [
                                    [1, 0],
                                    [1, 0]
                                ] : [
                                    [.9, .1],
                                    [.6, .4]
                                ];
                            if (c.length) return r = [l.outerHeight(!1), l.outerWidth(!1)], s = [c[0].offsetTop + it(l)[0], c[0].offsetLeft + it(l)[1]], o = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], s[0] - o[0] * (a = [r[0] < o[0] ? u[0] : u[1], r[1] < o[1] ? u[0] : u[1]])[0][0] < 0 && s[0] + r[0] - o[0] * a[0][1] >= 0 && s[1] - o[1] * a[1][0] < 0 && s[1] + r[1] - o[1] * a[1][1] >= 0
                        },
                        mcsOverflow: t.expr[":"].mcsOverflow || function(e) {
                            var i = t(e).data(n);
                            if (i) return i.overflowed[0] || i.overflowed[1]
                        }
                    })
                })
            }()
    }),
    function(t, e, i, n) {
        function r(e, i) {
            this.settings = null, this.options = t.extend({}, r.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
                this._handlers[i] = t.proxy(this[i], this)
            }, this)), t.each(r.Plugins, t.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(r.Workers, t.proxy(function(e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        r.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, r.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, r.Type = {
            Event: "event",
            State: "state"
        }, r.Plugins = {}, r.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    r = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(r), t.css = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    r = !this.settings.autoWidth,
                    o = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = r ? e * i : this._items[n].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var e = [],
                    i = this._items,
                    n = this.settings,
                    r = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(i.length / 2),
                    s = n.loop && i.length ? n.rewind ? r : Math.max(r, o) : 0,
                    a = "",
                    l = "";
                for (s /= 2; s--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, r = 0, o = []; ++i < e;) n = o[i - 1] || 0, r = this._widths[this.relative(i)] + this.settings.margin, o.push(n + r * t);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, r = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + o,
                    a = s + this.width() * r,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * r, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], r.prototype.initialize = function() {
            var e, i, r;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, r = this.$element.children(i).width(), e.length && r <= 0 && this.preloadAutoWidthImages(e));
            this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, r.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                r = null;
            i ? (t.each(i, function(t) {
                t <= e && t > n && (n = Number(t))
            }), "function" == typeof(r = t.extend({}, this.options, i[n])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : r = t.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: r
                }
            }), this._breakpoint = n, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, r.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, r.prototype.prepare = function(e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, r.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), r = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(r), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, r.prototype.width = function(t) {
            switch (t = t || r.Width.Default) {
                case r.Width.Inner:
                case r.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, r.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, r.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, r.prototype.onResize = function() {
            return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
        }, r.prototype.registerEventHandlers = function() {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
        }, r.prototype.onDragStart = function(e) {
            var n = null;
            3 !== e.which && (t.support.transform ? n = {
                x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            } : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, r.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                r = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, r);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
        }, r.prototype.onDragEnd = function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
                r = this._drag.stage.current,
                o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, r.prototype.closest = function(e, i) {
            var n = -1,
                r = this.width(),
                o = this.coordinates();
            return this.settings.freeDrag || t.each(o, t.proxy(function(t, s) {
                return "left" === i && e > s - 30 && e < s + 30 ? n = t : "right" === i && e > s - r - 30 && e < s - r + 30 ? n = t + 1 : this.op(e, "<", s) && this.op(e, ">", o[t + 1] || s - r) && (n = "left" === i ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
        }, r.prototype.animate = function(e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : i ? this.$stage.animate({
                left: e + "px"
            }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: e + "px"
            })
        }, r.prototype.is = function(t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, r.prototype.current = function(t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, r.prototype.invalidate = function(e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
                return e
            })
        }, r.prototype.reset = function(t) {
            (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, r.prototype.normalize = function(t, e) {
            var i = this._items.length,
                r = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + r) && (t = ((t - r / 2) % i + i) % i + r / 2), t
        }, r.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, r.prototype.maximum = function(t) {
            var e, i, n, r = this.settings,
                o = this._coordinates.length;
            if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (r.autoWidth || r.merge) {
                for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
                o = e + 1
            } else o = r.center ? this._items.length - 1 : this._items.length - r.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0)
        }, r.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, r.prototype.items = function(t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, r.prototype.mergers = function(t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, r.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                r = i + this._items.length,
                o = function(t) {
                    return t % 2 == 0 ? r + t / 2 : i - (t + 1) / 2
                };
            return e === n ? t.map(this._clones, function(t, e) {
                return o(e)
            }) : t.map(this._clones, function(t, i) {
                return t === e ? o(i) : null
            })
        }, r.prototype.speed = function(t) {
            return t !== n && (this._speed = t), this._speed
        }, r.prototype.coordinates = function(e) {
            var i, r = 1,
                o = e - 1;
            return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * r) : i = this._coordinates[o] || 0, i = Math.ceil(i))
        }, r.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, r.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                r = t - this.relative(i),
                o = (r > 0) - (r < 0),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(r) > s / 2 && (r += -1 * o * s), (n = (((t = i + r) - a) % s + s) % s + a) !== t && n - r <= l && n - r > 0 && (i = n - r, t = n, this.reset(i))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, r.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, r.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, r.prototype.onTransitionEnd = function(t) {
            if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, r.prototype.viewport = function() {
            var n;
            return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
        }, r.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, r.prototype.add = function(e, i) {
            var r = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                content: e,
                position: i
            }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: i
            })
        }, r.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, r.prototype.preloadAutoWidthImages = function(e) {
            e.each(t.proxy(function(e, i) {
                this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                    i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }, this))
        }, r.prototype.destroy = function() {
            for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, r.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : t < i;
                case ">":
                    return n ? t < i : t > i;
                case ">=":
                    return n ? t <= i : t >= i;
                case "<=":
                    return n ? t >= i : t <= i
            }
        }, r.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, r.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, r.prototype.trigger = function(e, i, n, o, s) {
            var a = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = t.camelCase(t.grep(["on", e, n], function(t) {
                    return t
                }).join("-").toLowerCase()),
                c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, a, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(c)
            }), this.register({
                type: r.Type.Event,
                name: e
            }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
        }, r.prototype.enter = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, r.prototype.leave = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, r.prototype.register = function(e) {
            if (e.type === r.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) {
                        return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, t.event.special[e.name].owl = !0
                }
            } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n
            }, this)))
        }, r.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, r.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, r.prototype.pointer = function(t) {
            var i = {
                x: null,
                y: null
            };
            return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
        }, r.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, r.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, t.fn.gFOwlCarousel = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    o = n.data("owl.carousel");
                o || (o = new r(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                    o.register({
                        type: r.Type.Event,
                        name: i
                    }), o.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }, o))
                })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
            })
        }, t.fn.gFOwlCarousel.Constructor = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, r.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, r.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, r.prototype.destroy = function() {
            var t, i;
            for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.AutoRefresh = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, r = i.center && -1 * n || 0, o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + r, s = this._core.clones().length, a = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); r++ < n;) this.load(s / 2 + this._core.relative(o)), s && t.each(this._core.clones(this._core.relative(o)), a), o++
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            lazyLoad: !1
        }, r.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                r = n && n.find(".owl-lazy");
            !r || t.inArray(n.get(0), this._loaded) > -1 || (r.each(t.proxy(function(i, n) {
                var r, o = t(n),
                    s = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
                this._core.trigger("load", {
                    element: o,
                    url: s
                }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                    o.css("opacity", 1), this._core.trigger("loaded", {
                        element: o,
                        url: s
                    }, "lazy")
                }, this)).attr("src", s) : ((r = new Image).onload = t.proxy(function() {
                    o.css({
                        "background-image": 'url("' + s + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: o,
                        url: s
                    }, "lazy")
                }, this), r.src = s)
            }, this)), this._loaded.push(n.get(0)))
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Lazy = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, r.prototype.update = function() {
            var e, i = this._core._current,
                n = i + this._core.settings.items,
                r = this._core.$stage.children().toArray().slice(i, n),
                o = [];
            t.each(r, function(e, i) {
                o.push(t(i).height())
            }), e = Math.max.apply(null, o), this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.AutoHeight = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                    }
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        r.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, r.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                r = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                s = t.attr("href");
            if (!s) throw new Error("Missing video URL.");
            if ((n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
            else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[s] = {
                type: i,
                id: n,
                width: r,
                height: o
            }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
        }, r.prototype.thumbnail = function(e, i) {
            var n, r, o = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                s = e.find("img"),
                a = "src",
                l = "",
                c = this._core.settings,
                u = function(t) {
                    '<div class="owl-video-play-icon"></div>',
                    n = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                    e.after(n),
                    e.after('<div class="owl-video-play-icon"></div>')
                };
            if (e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return u(s.attr(a)), s.remove(), !1;
            "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(r)) : "vimeo" === i.type ? t.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    r = t[0].thumbnail_large, u(r)
                }
            }) : "vzaar" === i.type && t.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    r = t.framegrab_url, u(r)
                }
            })
        }, r.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, r.prototype.play = function(e) {
            var i, n = t(e.target).closest("." + this._core.settings.itemClass),
                r = this._videos[n.attr("data-video")],
                o = r.width || "100%",
                s = r.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === r.type ? i = '<iframe width="' + o + '" height="' + s + '" src="//www.youtube.com/embed/' + r.id + "?autoplay=1&rel=0&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type ? i = '<iframe src="//player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + o + '" height="' + s + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === r.type && (i = '<iframe frameborder="0"height="' + s + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + r.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
        }, r.prototype.isInFullScreen = function() {
            var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Video = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        r.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, r.prototype.swap = function() {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    r = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(s)), o && r.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
            }
        }, r.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Animate = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var r = function(e) {
            this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, i) {
                    t.namespace && this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
        };
        r.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, r.prototype.play = function(t, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, r.prototype._getNextTimeout = function(n, r) {
            return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
            }, this), n || this._core.settings.autoplayTimeout)
        }, r.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, r.prototype.stop = function() {
            this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, r.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.autoplay = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var r = function(e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        r.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, r.prototype.initialize = function() {
            var e, i = this._core.settings;
            for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                    this.prev(i.navSpeed)
                }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                    this.next(i.navSpeed)
                }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                    var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                    e.preventDefault(), this.to(n, i.dotsSpeed)
                }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
        }, r.prototype.destroy = function() {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, r.prototype.update = function() {
            var t, e, i = this._core.clones().length / 2,
                n = i + this._core.items().length,
                r = this._core.maximum(!0),
                o = this._core.settings,
                s = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
            if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
                    if (e >= s || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(r, t - i),
                                end: t - i + s - 1
                            }), Math.min(r, t - i) === r) break;
                        e = 0, 0
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, r.prototype.draw = function() {
            var e, i = this._core.settings,
                n = this._core.items().length <= i.items,
                r = this._core.relative(this._core.current()),
                o = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, r.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, r.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy(function(t, i) {
                return t.start <= e && t.end >= e
            }, this)).pop()
        }, r.prototype.getPosition = function(e) {
            var i, n, r = this._core.settings;
            return "page" == r.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += r.slideBy : i -= r.slideBy), i
        }, r.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, r.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, r.prototype.to = function(e, i, n) {
            var r;
            !n && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Navigation = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var r = function(i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            r = t.map(this._hashes, function(t, e) {
                                return t === n ? e : null
                            }).join();
                        if (!r || e.location.hash.slice(1) === r) return;
                        e.location.hash = r
                    }
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var i = e.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    r = this._hashes[i] && n.index(this._hashes[i]);
                void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
            }, this))
        };
        r.Defaults = {
            URLhashListener: !1
        }, r.prototype.destroy = function() {
            var i, n;
            for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.gFOwlCarousel.Constructor.Plugins.Hash = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        function r(e, i) {
            var r = !1,
                o = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + a.join(o + " ") + o).split(" "), function(t, e) {
                if (s[e] !== n) return r = !i || e, !1
            }), r
        }

        function o(t) {
            return r(t, !0)
        }
        var s = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            c = function() {
                return !!r("transform")
            },
            u = function() {
                return !!r("perspective")
            },
            d = function() {
                return !!r("animation")
            };
        (function() {
            return !!r("transition")
        })() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), d() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c() && (t.support.transform = new String(o("transform")), t.support.transform3d = u())
    }(window.Zepto || window.jQuery, window, document),
    function(t, e) {
        var i = function() {
            e(t.gFLazySizes), t.removeEventListener("lazyunveilread", i, !0)
        };
        e = e.bind(null, t, t.document), "object" == typeof module && module.exports ? e(require("gFLazySizes")) : t.gFLazySizes ? i() : t.addEventListener("lazyunveilread", i, !0)
    }(window, function(t, e, i) {
        "use strict";

        function n(e, i) {
            var n, r, o, s, a = t.getComputedStyle(e);
            for (n in r = e.parentNode, s = {
                    isPicture: !(!r || !h.test(r.nodeName || ""))
                }, o = function(t, i) {
                    var n = e.getAttribute("data-" + t);
                    if (!n) {
                        var r = a.getPropertyValue("--ls-" + t);
                        r && (n = r.trim())
                    }
                    if (n) {
                        if ("true" == n) n = !0;
                        else if ("false" == n) n = !1;
                        else if (d.test(n)) n = parseFloat(n);
                        else if ("function" == typeof l[t]) n = l[t](e, n);
                        else if (m.test(n)) try {
                            n = JSON.parse(n)
                        } catch (t) {}
                        s[t] = n
                    } else t in l && "function" != typeof l[t] ? s[t] = l[t] : i && "function" == typeof l[t] && (s[t] = l[t](e, n))
                }, l) o(n);
            return i.replace(g, function(t, e) {
                e in s || o(e, !0)
            }), s
        }

        function r(t, i, n) {
            var r = 0,
                o = 0,
                s = n;
            if (t) {
                if ("container" === i.ratio) {
                    for (r = s.scrollWidth, o = s.scrollHeight; !(r && o || s === e);) r = (s = s.parentNode).scrollWidth, o = s.scrollHeight;
                    r && o && (i.ratio = i.traditionalRatio ? o / r : r / o)
                }(t = function(t, e) {
                    var i = [];
                    return i.srcset = [], e.absUrl && (y.setAttribute("href", t), t = y.href), t = ((e.prefix || "") + t + (e.postfix || "")).replace(g, function(t, i) {
                        return u[typeof e[i]] ? e[i] : t
                    }), e.widths.forEach(function(n) {
                        var r = e.widthmap[n] || n,
                            o = e.aspectratio || e.ratio,
                            s = !e.aspectratio && l.traditionalRatio,
                            a = {
                                u: t.replace(p, r).replace(f, o ? s ? Math.round(n * o) : Math.round(n / o) : ""),
                                w: n
                            };
                        i.push(a), i.srcset.push(a.c = a.u + " " + n + "w")
                    }), i
                }(t, i)).isPicture = i.isPicture, b && "IMG" == n.nodeName.toUpperCase() ? n.removeAttribute(a.srcsetAttr) : n.setAttribute(a.srcsetAttr, t.srcset.join(", ")), Object.defineProperty(n, "_lazyrias", {
                    value: t,
                    writable: !0
                })
            }
        }

        function o(t, e) {
            var r = n(t, e);
            return l.modifyOptions.call(t, {
                target: t,
                details: r,
                detail: r
            }), i.fire(t, "lazyriasmodifyoptions", r), r
        }

        function s(t) {
            return t.getAttribute(t.getAttribute("data-srcattr") || l.srcAttr) || t.getAttribute(a.srcsetAttr) || t.getAttribute(a.srcAttr) || t.getAttribute("data-pfsrcset") || ""
        }
        var a, l, c = i.cfg,
            u = {
                string: 1,
                number: 1
            },
            d = /^\-*\+*\d+\.*\d*$/,
            h = /^picture$/i,
            p = /\s*\{\s*width\s*\}\s*/i,
            f = /\s*\{\s*height\s*\}\s*/i,
            g = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,
            m = /^\[.*\]|\{.*\}$/,
            v = /^(?:auto|\d+(px)?)$/,
            y = e.createElement("a"),
            w = e.createElement("img"),
            b = "srcset" in w && !("sizes" in w),
            x = !!t.HTMLPictureElement && !b;
        ! function() {
            var t, e = {
                prefix: "",
                postfix: "",
                srcAttr: "data-src",
                absUrl: !1,
                modifyOptions: function() {},
                widthmap: {},
                ratio: !1,
                traditionalRatio: !1,
                aspectratio: !1
            };
            for (t in (a = i && i.cfg).supportsType || (a.supportsType = function(t) {
                    return !t
                }), a.rias || (a.rias = {}), "widths" in (l = a.rias) || (l.widths = [], function(t) {
                    for (var e, i = 0; !e || e < 3e3;)(i += 5) > 30 && (i += 1), e = 36 * i, t.push(e)
                }(l.widths)), e) t in l || (l[t] = e[t])
        }(), addEventListener("lazybeforesizes", function(t) {
            var e, n, c, u, d, h, f, g, m, y, w, b, C;
            if (t.detail.instance == i && (e = t.target, t.detail.dataAttr && !t.defaultPrevented && !l.disabled && (m = e.getAttribute(a.sizesAttr) || e.getAttribute("sizes")) && v.test(m))) {
                if (c = o(e, n = s(e)), w = p.test(c.prefix) || p.test(c.postfix), c.isPicture && (u = e.parentNode))
                    for (h = 0, f = (d = u.getElementsByTagName("source")).length; h < f; h++)(w || p.test(g = s(d[h]))) && (r(g, c, d[h]), b = !0);
                w || p.test(n) ? (r(n, c, e), b = !0) : b && ((C = []).srcset = [], C.isPicture = !0, Object.defineProperty(e, "_lazyrias", {
                    value: C,
                    writable: !0
                })), b && (x ? e.removeAttribute(a.srcAttr) : "auto" != m && (y = {
                    width: parseInt(m, 10)
                }, _({
                    target: e,
                    detail: y
                })))
            }
        }, !0);
        var _ = function() {
            var n = function(t, e) {
                    return t.w - e.w
                },
                r = function(t, e) {
                    var n;
                    return !t._lazyrias && i.pWS && (n = i.pWS(t.getAttribute(a.srcsetAttr || ""))).length && (Object.defineProperty(t, "_lazyrias", {
                        value: n,
                        writable: !0
                    }), e && t.parentNode && (n.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase())), t._lazyrias
                },
                o = function(e) {
                    var n = t.devicePixelRatio || 1,
                        r = i.getX && i.getX(e);
                    return Math.min(r || n, 2.4, n)
                },
                s = function(e, i) {
                    var s, a, l, c, u, d;
                    if ((u = e._lazyrias).isPicture && t.matchMedia)
                        for (a = 0, l = (s = e.parentNode.getElementsByTagName("source")).length; a < l; a++)
                            if (r(s[a]) && !s[a].getAttribute("type") && (!(c = s[a].getAttribute("media")) || (matchMedia(c) || {}).matches)) {
                                u = s[a]._lazyrias;
                                break
                            } return (!u.w || u.w < i) && (u.w = i, u.d = o(e), d = function(t) {
                        for (var e, i, n = t.length, r = t[n - 1], o = 0; o < n; o++)
                            if ((r = t[o]).d = r.w / t.w, r.d >= t.d) {
                                !r.cached && (e = t[o - 1]) && e.d > t.d - .13 * Math.pow(t.d, 2.2) && (i = Math.pow(e.d - .6, 1.6), e.cached && (e.d += .15 * i), e.d + (r.d - t.d) * i > t.d && (r = e));
                                break
                            } return r
                    }(u.sort(n))), d
                },
                l = function(n) {
                    if (n.detail.instance == i) {
                        var o, u = n.target;
                        if (!b && (t.respimage || t.picturefill || c.pf)) return void e.removeEventListener("lazybeforesizes", l);
                        ("_lazyrias" in u || n.detail.dataAttr && r(u, !0)) && (o = s(u, n.detail.width)) && o.u && u._lazyrias.cur != o.u && (u._lazyrias.cur = o.u, o.cached = !0, i.rAF(function() {
                            u.setAttribute(a.srcAttr, o.u), u.setAttribute("src", o.u)
                        }))
                    }
                };
            return x ? l = function() {} : addEventListener("lazybeforesizes", l), l
        }()
    }),
    function(t, e) {
        var i = function(t, e, i) {
            "use strict";
            var n, r;
            if (function() {
                    var e, i = {
                        lazyClass: "gflazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    for (e in r = t.gFLazySizesConfig || t.gFLazySizesConfig || {}, i) e in r || (r[e] = i[e])
                }(), !e || !e.getElementsByClassName) return {
                init: function() {},
                cfg: r,
                noSupport: !0
            };
            var o = e.documentElement,
                s = t.HTMLPictureElement,
                a = "addEventListener",
                l = "getAttribute",
                c = t[a].bind(t),
                u = t.setTimeout,
                d = t.requestAnimationFrame || u,
                h = t.requestIdleCallback,
                p = /^picture$/i,
                f = ["load", "error", "lazyincluded", "_lazyloaded"],
                g = {},
                m = Array.prototype.forEach,
                v = function(t, e) {
                    return g[e] || (g[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), g[e].test(t[l]("class") || "") && g[e]
                },
                y = function(t, e) {
                    v(t, e) || t.setAttribute("class", (t[l]("class") || "").trim() + " " + e)
                },
                w = function(t, e) {
                    var i;
                    (i = v(t, e)) && t.setAttribute("class", (t[l]("class") || "").replace(i, " "))
                },
                b = function(t, e, i) {
                    var n = i ? a : "removeEventListener";
                    i && b(t, e), f.forEach(function(i) {
                        t[n](i, e)
                    })
                },
                x = function(t, i, r, o, s) {
                    var a = e.createEvent("Event");
                    return r || (r = {}), r.instance = n, a.initEvent(i, !o, !s), a.detail = r, t.dispatchEvent(a), a
                },
                _ = function(e, i) {
                    var n;
                    !s && (n = t.picturefill || r.pf) ? (i && i.src && !e[l]("srcset") && e.setAttribute("srcset", i.src), n({
                        reevaluate: !0,
                        elements: [e]
                    })) : i && i.src && (e.src = i.src)
                },
                C = function(t, e) {
                    return (getComputedStyle(t, null) || {})[e]
                },
                S = function(t, e, i) {
                    for (i = i || t.offsetWidth; i < r.minSize && e && !t._gFLazySizesWidth;) i = e.offsetWidth, e = e.parentNode;
                    return i
                },
                T = function() {
                    var t, i, n = [],
                        r = [],
                        o = n,
                        s = function() {
                            var e = o;
                            for (o = n.length ? r : n, t = !0, i = !1; e.length;) e.shift()();
                            t = !1
                        },
                        a = function(n, r) {
                            t && !r ? n.apply(this, arguments) : (o.push(n), i || (i = !0, (e.hidden ? u : d)(s)))
                        };
                    return a._lsFlush = s, a
                }(),
                k = function(t, e) {
                    return e ? function() {
                        T(t)
                    } : function() {
                        var e = this,
                            i = arguments;
                        T(function() {
                            t.apply(e, i)
                        })
                    }
                },
                E = function(t) {
                    var e, n = 0,
                        o = r.throttleDelay,
                        s = r.ricTimeout,
                        a = function() {
                            e = !1, n = i.now(), t()
                        },
                        l = h && s > 49 ? function() {
                            h(a, {
                                timeout: s
                            }), s !== r.ricTimeout && (s = r.ricTimeout)
                        } : k(function() {
                            u(a)
                        }, !0);
                    return function(t) {
                        var r;
                        (t = !0 === t) && (s = 33), e || (e = !0, (r = o - (i.now() - n)) < 0 && (r = 0), t || r < 9 ? l() : u(l, r))
                    }
                },
                F = function(t) {
                    var e, n, r = function() {
                            e = null, t()
                        },
                        o = function() {
                            var t = i.now() - n;
                            t < 99 ? u(o, 99 - t) : (h || r)(r)
                        };
                    return function() {
                        n = i.now(), e || (e = u(o, 99))
                    }
                },
                L = function() {
                    var s, h, f, g, S, L, q, A, P, O, M, N, z = /^img$/i,
                        j = /^iframe$/i,
                        I = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent),
                        B = 0,
                        R = 0,
                        H = -1,
                        W = function(t) {
                            R--, (!t || R < 0 || !t.target) && (R = 0)
                        },
                        G = function(t) {
                            return null == N && (N = "hidden" == C(e.body, "visibility")), N || !("hidden" == C(t.parentNode, "visibility") && "hidden" == C(t, "visibility"))
                        },
                        $ = function(t, i) {
                            var n, r = t,
                                s = G(t);
                            for (A -= i, M += i, P -= i, O += i; s && (r = r.offsetParent) && r != e.body && r != o;)(s = (C(r, "opacity") || 1) > 0) && "visible" != C(r, "overflow") && (n = r.getBoundingClientRect(), s = O > n.left && P < n.right && M > n.top - 1 && A < n.bottom + 1);
                            return s
                        },
                        U = function() {
                            var t, i, a, c, u, d, p, f, m, v, y, w, b = n.elements;
                            if ((g = r.loadMode) && R < 8 && (t = b.length)) {
                                for (i = 0, H++; i < t; i++)
                                    if (b[i] && !b[i]._lazyRace)
                                        if (!I || n.prematureUnveil && n.prematureUnveil(b[i])) K(b[i]);
                                        else if ((f = b[i][l]("data-expand")) && (d = 1 * f) || (d = B), v || (v = !r.expand || r.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : r.expand, n._defEx = v, y = v * r.expFactor, w = r.hFac, N = null, B < y && R < 1 && H > 2 && g > 2 && !e.hidden ? (B = y, H = 0) : B = g > 1 && H > 1 && R < 6 ? v : 0), m !== d && (L = innerWidth + d * w, q = innerHeight + d, p = -1 * d, m = d), a = b[i].getBoundingClientRect(), (M = a.bottom) >= p && (A = a.top) <= q && (O = a.right) >= p * w && (P = a.left) <= L && (M || O || P || A) && (r.loadHidden || G(b[i])) && (h && R < 3 && !f && (g < 3 || H < 4) || $(b[i], d))) {
                                    if (K(b[i]), u = !0, R > 9) break
                                } else !u && h && !c && R < 4 && H < 4 && g > 2 && (s[0] || r.preloadAfterLoad) && (s[0] || !f && (M || O || P || A || "auto" != b[i][l](r.sizesAttr))) && (c = s[0] || b[i]);
                                c && !u && K(c)
                            }
                        },
                        V = E(U),
                        X = function(t) {
                            var e = t.target;
                            e._lazyCache ? delete e._lazyCache : (W(t), y(e, r.loadedClass), w(e, r.loadingClass), b(e, Q), x(e, "lazyloaded"))
                        },
                        Y = k(X),
                        Q = function(t) {
                            Y({
                                target: t.target
                            })
                        },
                        Z = function(t) {
                            var e, i = t[l](r.srcsetAttr);
                            (e = r.customMedia[t[l]("data-media") || t[l]("media")]) && t.setAttribute("media", e), i && t.setAttribute("srcset", i)
                        },
                        J = k(function(t, e, i, n, o) {
                            var s, a, c, d, h, g;
                            (h = x(t, "lazybeforeunveil", e)).defaultPrevented || (n && (i ? y(t, r.autosizesClass) : t.setAttribute("sizes", n)), a = t[l](r.srcsetAttr), s = t[l](r.srcAttr), o && (c = t.parentNode, d = c && p.test(c.nodeName || "")), g = e.firesLoad || "src" in t && (a || s || d), h = {
                                target: t
                            }, y(t, r.loadingClass), g && (clearTimeout(f), f = u(W, 2500), b(t, Q, !0)), d && m.call(c.getElementsByTagName("source"), Z), a ? t.setAttribute("srcset", a) : s && !d && (j.test(t.nodeName) ? function(t, e) {
                                try {
                                    t.contentWindow.location.replace(e)
                                } catch (i) {
                                    t.src = e
                                }
                            }(t, s) : t.src = s), o && (a || d) && _(t, {
                                src: s
                            })), t._lazyRace && delete t._lazyRace, w(t, r.lazyClass), T(function() {
                                var e = t.complete && t.naturalWidth > 1;
                                g && !e || (e && y(t, "ls-is-cached"), X(h), t._lazyCache = !0, u(function() {
                                    "_lazyCache" in t && delete t._lazyCache
                                }, 9)), "lazy" == t.loading && R--
                            }, !0)
                        }),
                        K = function(t) {
                            if (!t._lazyRace) {
                                var e, i = z.test(t.nodeName),
                                    n = i && (t[l](r.sizesAttr) || t[l]("sizes")),
                                    o = "auto" == n;
                                (!o && h || !i || !t[l]("src") && !t.srcset || t.complete || v(t, r.errorClass) || !v(t, r.lazyClass)) && (e = x(t, "lazyunveilread").detail, o && D.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, R++, J(t, e, o, n, i))
                            }
                        },
                        tt = F(function() {
                            r.loadMode = 3, V()
                        }),
                        et = function() {
                            3 == r.loadMode && (r.loadMode = 2), tt()
                        },
                        it = function() {
                            if (!h) {
                                if (i.now() - S < 999) return void u(it, 999);
                                h = !0, r.loadMode = 3, V(), c("scroll", et, !0)
                            }
                        };
                    return {
                        _: function() {
                            S = i.now(), n.elements = e.getElementsByClassName(r.lazyClass), s = e.getElementsByClassName(r.lazyClass + " " + r.preloadClass), c("scroll", V, !0), c("resize", V, !0), c("pageshow", function(t) {
                                if (t.persisted) {
                                    var i = e.querySelectorAll("." + r.loadingClass);
                                    i.length && i.forEach && d(function() {
                                        i.forEach(function(t) {
                                            t.complete && K(t)
                                        })
                                    })
                                }
                            }), t.MutationObserver ? new MutationObserver(V).observe(o, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (o[a]("DOMNodeInserted", V, !0), o[a]("DOMAttrModified", V, !0), setInterval(V, 999)), c("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(t) {
                                e[a](t, V, !0)
                            }), /d$|^c/.test(e.readyState) ? it() : (c("load", it), e[a]("DOMContentLoaded", V), u(it, 2e4)), n.elements.length ? (U(), T._lsFlush()) : V()
                        },
                        checkElems: V,
                        unveil: K,
                        _aLSL: et
                    }
                }(),
                D = function() {
                    var t, i = k(function(t, e, i, n) {
                            var r, o, s;
                            if (t._gFLazySizesWidth = n, n += "px", t.setAttribute("sizes", n), p.test(e.nodeName || ""))
                                for (r = e.getElementsByTagName("source"), o = 0, s = r.length; o < s; o++) r[o].setAttribute("sizes", n);
                            i.detail.dataAttr || _(t, i.detail)
                        }),
                        n = function(t, e, n) {
                            var r, o = t.parentNode;
                            o && (n = S(t, o, n), (r = x(t, "lazybeforesizes", {
                                width: n,
                                dataAttr: !!e
                            })).defaultPrevented || (n = r.detail.width) && n !== t._gFLazySizesWidth && i(t, o, r, n))
                        },
                        o = F(function() {
                            var e, i = t.length;
                            if (i)
                                for (e = 0; e < i; e++) n(t[e])
                        });
                    return {
                        _: function() {
                            t = e.getElementsByClassName(r.autosizesClass), c("resize", o)
                        },
                        checkElems: o,
                        updateElem: n
                    }
                }(),
                q = function() {
                    !q.i && e.getElementsByClassName && (q.i = !0, D._(), L._())
                };
            return u(function() {
                r.init && q()
            }), n = {
                cfg: r,
                autoSizer: D,
                loader: L,
                init: q,
                uP: _,
                aC: y,
                rC: w,
                hC: v,
                fire: x,
                gW: S,
                rAF: T
            }
        }(t, t.document, Date);
        t.gFLazySizes = i, "object" == typeof module && module.exports && (module.exports = i)
    }("undefined" != typeof window ? window : {}),
    function(t, e) {
        if (t) {
            var i = function() {
                e(t.gFLazySizes), t.removeEventListener("lazyunveilread", i, !0)
            };
            e = e.bind(null, t, t.document), "object" == typeof module && module.exports ? e(require("gFLazySizes")) : t.gFLazySizes ? i() : t.addEventListener("lazyunveilread", i, !0)
        }
    }("undefined" != typeof window ? window : 0, function(t, e, i) {
        "use strict";
        if (t.addEventListener) {
            var n = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                r = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
                o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
                s = /^picture$/i,
                a = i.cfg,
                l = {
                    getParent: function(e, i) {
                        var n = e,
                            r = e.parentNode;
                        return i && "prev" != i || !r || !s.test(r.nodeName || "") || (r = r.parentNode), "self" != i && (n = "prev" == i ? e.previousElementSibling : i && (r.closest || t.jQuery) && (r.closest ? r.closest(i) : jQuery(r).closest(i)[0]) || r), n
                    },
                    getFit: function(t) {
                        var e, i, n = function(t) {
                                return getComputedStyle(t, null) || {}
                            }(t),
                            s = n.content || n.fontFamily,
                            a = {
                                fit: t._gFLazySizesParentFit || t.getAttribute("data-parent-fit")
                            };
                        return !a.fit && s && (e = s.match(r)) && (a.fit = e[1]), a.fit ? (!(i = t._gFLazySizesParentContainer || t.getAttribute("data-parent-container")) && s && (e = s.match(o)) && (i = e[1]), a.parent = l.getParent(t, i)) : a.fit = n.objectFit, a
                    },
                    getImageRatio: function(e) {
                        var i, r, o, l, c, u, d, h = e.parentNode,
                            p = h && s.test(h.nodeName || "") ? h.querySelectorAll("source, img") : [e];
                        for (i = 0; i < p.length; i++)
                            if (r = (e = p[i]).getAttribute(a.srcsetAttr) || e.getAttribute("srcset") || e.getAttribute("data-pfsrcset") || e.getAttribute("data-risrcset") || "", o = e._lsMedia || e.getAttribute("media"), o = a.customMedia[e.getAttribute("data-media") || o] || o, r && (!o || (t.matchMedia && matchMedia(o) || {}).matches)) {
                                (l = parseFloat(e.getAttribute("data-aspectratio"))) || ((c = r.match(n)) ? "w" == c[2] ? (u = c[1], d = c[3]) : (u = c[3], d = c[1]) : (u = e.getAttribute("width"), d = e.getAttribute("height")), l = u / d);
                                break
                            } return l
                    },
                    calculateSize: function(t, e) {
                        var i, n, r, o = this.getFit(t),
                            s = o.fit,
                            a = o.parent;
                        return "width" == s || ("contain" == s || "cover" == s) && (n = this.getImageRatio(t)) ? (a ? e = a.clientWidth : a = t, r = e, "width" == s ? r = e : (i = e / a.clientHeight) && ("cover" == s && i < n || "contain" == s && i > n) && (r = e * (n / i)), r) : e
                    }
                };
            i.parentFit = l, e.addEventListener("lazybeforesizes", function(t) {
                if (!t.defaultPrevented && t.detail.instance == i) {
                    var e = t.target;
                    t.detail.width = l.calculateSize(e, t.detail.width)
                }
            })
        }
    });
var GLiquid = {
    author: "Matt McCray <darthapo@gmail.com>",
    version: "1.3.2",
    readTemplateFile: function(t) {
        throw "This GLiquid context does not allow includes."
    },
    registerFilters: function(t) {
        GLiquid.Template.registerFilter(t)
    },
    parse: function(t) {
        return GLiquid.Template.parse(t)
    },
    extensions: {}
};
GLiquid.extensions.object = {}, GLiquid.extensions.object.update = function(t) {
        for (var e in t) this[e] = t[e];
        return this
    }, GLiquid.extensions.object.hasKey = function(t) {
        return !!this[t]
    }, GLiquid.extensions.object.hasValue = function(t) {
        for (var e in this)
            if (this[e] == t) return !0;
        return !1
    }, GLiquid.extensions.object.isEmpty = function(t) {
        if (!t || "" === GLiquid.extensions.stringTools.strip(t.toString())) return !0;
        if (t.length && t.length > 0) return !1;
        if ("number" == typeof t) return !1;
        for (var e in t)
            if (t[e]) return !1;
        return !0
    }, GLiquid.extensions.stringTools = {}, GLiquid.extensions.stringTools.capitalize = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()
    }, GLiquid.extensions.stringTools.strip = function(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }, GLiquid.extensions.arrayTools = {}, GLiquid.extensions.arrayTools.last = function(t) {
        return t[t.length - 1]
    }, GLiquid.extensions.arrayTools.indexOf = function(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] == e) return i;
        return -1
    }, GLiquid.extensions.arrayTools.map = function(t, e) {
        var i = t.length;
        if ("function" != typeof e) throw "GLiquid.extensions.arrayTools.map requires first argument to be a function";
        for (var n = new Array(i), r = arguments[2], o = 0; o < i; o++) o in t && (n[o] = e.call(r, t[o], o, t));
        return n
    }, GLiquid.extensions.arrayTools.flatten = function(t) {
        for (var e = t.length, i = [], n = 0; n < e; n++) t[n] instanceof Array ? i = i.concat(t[n]) : i.push(t[n]);
        return i
    }, GLiquid.extensions.arrayTools.each = function(t, e) {
        var i = t.length;
        if ("function" != typeof e) throw "GLiquid.extensions.arrayTools.each requires first argument to be a function";
        for (var n = arguments[2], r = 0; r < i; r++) r in t && e.call(n, t[r], r, t);
        return null
    }, GLiquid.extensions.arrayTools.include = function(t, e) {
        return t.length, GLiquid.extensions.arrayTools.indexOf(t, e) >= 0
    },
    function() {
        var t = !1,
            e = /xyz/.test(function() {
                xyz
            }) ? /\b_super\b/ : /.*/;
        this.Class = function() {}, this.Class.extend = function(i) {
            var n = this.prototype;
            t = !0;
            var r = new this;
            for (var o in t = !1, i) r[o] = "function" == typeof i[o] && "function" == typeof n[o] && e.test(i[o]) ? function(t, e) {
                return function() {
                    var i = this._super;
                    this._super = n[t];
                    var r = e.apply(this, arguments);
                    return this._super = i, r
                }
            }(o, i[o]) : i[o];

            function s() {
                !t && this.init && this.init.apply(this, arguments)
            }
            return s.prototype = r, s.prototype.constructor = s, s.extend = arguments.callee, s
        }
    }.call(GLiquid), GLiquid.Tag = GLiquid.Class.extend({
        init: function(t, e, i) {
            this.tagName = t, this.markup = e, this.nodelist = this.nodelist || [], this.parse(i)
        },
        parse: function(t) {},
        render: function(t) {
            return ""
        }
    }), GLiquid.Block = GLiquid.Tag.extend({
        init: function(t, e, i) {
            this.blockName = t, this.blockDelimiter = "end" + this.blockName, this._super(t, e, i)
        },
        parse: function(t) {
            this.nodelist || (this.nodelist = []), this.nodelist.length = 0;
            var e = t.shift();
            for (t.push(""); t.length;) {
                if (/^\{\%/.test(e)) {
                    var i = e.match(/^\{\%\s*(\w+)\s*(.*)?\%\}$/);
                    if (!i) throw "Tag '" + e + "' was not properly terminated with: %}";
                    if (this.blockDelimiter == i[1]) return void this.endTag();
                    i[1] in GLiquid.Template.tags ? this.nodelist.push(new GLiquid.Template.tags[i[1]](i[1], i[2], t)) : this.unknownTag(i[1], i[2], t)
                } else /^\{\{/.test(e) ? this.nodelist.push(this.createVariable(e)) : this.nodelist.push(e);
                e = t.shift()
            }
            this.assertMissingDelimitation()
        },
        endTag: function() {},
        unknownTag: function(t, e, i) {
            switch (t) {
                case "else":
                    throw this.blockName + " tag does not expect else tag";
                case "end":
                    throw "'end' is not a valid delimiter for " + this.blockName + " tags. use " + this.blockDelimiter;
                default:
                    throw "Unknown tag: " + t
            }
        },
        createVariable: function(t) {
            var e = t.match(/^\{\{(.*)\}\}$/);
            if (e) return new GLiquid.Variable(e[1]);
            throw "Variable '" + t + "' was not properly terminated with: }}"
        },
        render: function(t) {
            return this.renderAll(this.nodelist, t)
        },
        renderAll: function(t, e) {
            return GLiquid.extensions.arrayTools.map(t || [], function(t, i) {
                var n = "";
                try {
                    n = t.render ? t.render(e) : t
                } catch (t) {
                    n = e.handleError(t)
                }
                return n
            })
        },
        assertMissingDelimitation: function() {
            throw this.blockName + " tag was never closed"
        }
    }), GLiquid.Document = GLiquid.Block.extend({
        init: function(t) {
            this.blockDelimiter = [], this.parse(t)
        },
        assertMissingDelimitation: function() {}
    }), GLiquid.Strainer = GLiquid.Class.extend({
        init: function(t) {
            this.context = t
        },
        respondTo: function(t) {
            return !(t = t.toString()).match(/^__/) && !GLiquid.extensions.arrayTools.include(GLiquid.Strainer.requiredMethods, t) && t in this
        }
    }), GLiquid.Strainer.filters = {}, GLiquid.Strainer.globalFilter = function(t) {
        for (var e in t) GLiquid.Strainer.filters[e] = t[e]
    }, GLiquid.Strainer.requiredMethods = ["respondTo", "context"], GLiquid.Strainer.create = function(t) {
        var e = new GLiquid.Strainer(t);
        for (var i in GLiquid.Strainer.filters) e[i] = GLiquid.Strainer.filters[i];
        return e
    }, GLiquid.Context = GLiquid.Class.extend({
        init: function(t, e, i) {
            this.scopes = [t || {}], this.registers = e || {}, this.errors = [], this.rethrowErrors = i, this.strainer = GLiquid.Strainer.create(this)
        },
        get: function(t) {
            return this.resolve(t)
        },
        set: function(t, e) {
            this.scopes[0][t] = e
        },
        hasKey: function(t) {
            return !!this.resolve(t)
        },
        push: function() {
            var t = {};
            return this.scopes.unshift(t), t
        },
        merge: function(t) {
            return GLiquid.extensions.object.update.call(this.scopes[0], t)
        },
        pop: function() {
            if (1 == this.scopes.length) throw "Context stack error";
            return this.scopes.shift()
        },
        stack: function(t, e) {
            var i = null;
            this.push();
            try {
                i = t.apply(e || this.strainer)
            } finally {
                this.pop()
            }
            return i
        },
        invoke: function(t, e) {
            return this.strainer.respondTo(t) ? this.strainer[t].apply(this.strainer, e) : 0 == e.length ? null : e[0]
        },
        resolve: function(t) {
            switch (t) {
                case null:
                case "nil":
                case "null":
                case "":
                    return null;
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "blank":
                case "empty":
                    return "";
                default:
                    if (/^'(.*)'$/.test(t)) return t.replace(/^'(.*)'$/, "$1");
                    if (/^"(.*)"$/.test(t)) return t.replace(/^"(.*)"$/, "$1");
                    if (/^(\d+)$/.test(t)) return parseInt(t.replace(/^(\d+)$/, "$1"));
                    if (/^(\d[\d\.]+)$/.test(t)) return parseFloat(t.replace(/^(\d[\d\.]+)$/, "$1"));
                    if (/^\((\S+)\.\.(\S+)\)$/.test(t)) {
                        var e = t.match(/^\((\S+)\.\.(\S+)\)$/),
                            i = parseInt(e[1]),
                            n = parseInt(e[2]),
                            r = [];
                        if (isNaN(i) || isNaN(n)) {
                            i = e[1].charCodeAt(0);
                            for (var o = (n = e[2].charCodeAt(0)) - i + 1, s = 0; s < o; s++) r.push(String.fromCharCode(s + i))
                        } else
                            for (o = n - i + 1, s = 0; s < o; s++) r.push(s + i);
                        return r
                    }
                    return this.variable(t)
            }
        },
        findVariable: function(t) {
            for (var e = 0; e < this.scopes.length; e++) {
                var i = this.scopes[e];
                if (i && void 0 !== i[t]) {
                    var n = i[t];
                    return "function" == typeof n && (n = n.apply(this), i[t] = n), n && this._isObject(n) && "toGLiquid" in n && (n = n.toGLiquid()), n && this._isObject(n) && "setContext" in n && n.setContext(self), n
                }
            }
            return null
        },
        variable: function(t) {
            if ("string" != typeof t) return null;
            var e = t.match(/\[[^\]]+\]|(?:[\w\-]\??)+/g),
                i = e.shift(),
                n = i.match(/^\[(.*)\]$/);
            n && (i = this.resolve(n[1]));
            var r = this.findVariable(i),
                o = this;
            return r && GLiquid.extensions.arrayTools.each(e, function(t) {
                var e = t.match(/^\[(.*)\]$/);
                if (e) t = o.resolve(e[1]), "function" == typeof r[t] && (r[t] = r[t].apply(this)), r = r[t], o._isObject(r) && "toGLiquid" in r && (r = r.toGLiquid());
                else {
                    if ((o._isObject(r) || "hash" == typeof r) && t in r) {
                        var i = r[t];
                        "function" == typeof i && (i = r[t] = i.apply(o)), r = o._isObject(i) && "toGLiquid" in i ? i.toGLiquid() : i
                    } else if (/^\d+$/.test(t)) {
                        var n = parseInt(t);
                        "function" == typeof r[n] && (r[n] = r[n].apply(o)), r = o._isObject(r) && o._isObject(r[n]) && "toGLiquid" in r[n] ? r[n].toGLiquid() : r[n]
                    } else {
                        if (!r || "function" != typeof r[t] || !GLiquid.extensions.arrayTools.include(["length", "size", "first", "last"], t)) return r = null;
                        "toGLiquid" in (r = r[t].apply(t)) && (r = r.toGLiquid())
                    }
                    o._isObject(r) && "setContext" in r && r.setContext(o)
                }
            }), r
        },
        addFilters: function(t) {
            t = GLiquid.extensions.arrayTools.flatten(t), GLiquid.extensions.arrayTools.each(t, function(t) {
                if (!this._isObject(t)) throw "Expected object but got: " + typeof t;
                this.strainer.addMethods(t)
            })
        },
        handleError: function(t) {
            if (this.errors.push(t), this.rethrowErrors) throw t;
            return "GLiquid error: " + (t.message ? t.message : t.description ? t.description : t)
        },
        _isObject: function(t) {
            return null != t && "object" == typeof t
        }
    }), GLiquid.Template = GLiquid.Class.extend({
        init: function() {
            this.root = null, this.registers = {}, this.assigns = {}, this.errors = [], this.rethrowErrors = !1
        },
        parse: function(t) {
            return this.root = new GLiquid.Document(GLiquid.Template.tokenize(t)), this
        },
        render: function() {
            if (!this.root) return "";
            var t = {
                    ctx: arguments[0],
                    filters: arguments[1],
                    registers: arguments[2]
                },
                e = null;
            t.ctx instanceof GLiquid.Context ? (e = t.ctx, this.assigns = e.assigns, this.registers = e.registers) : (t.ctx && GLiquid.extensions.object.update.call(this.assigns, t.ctx), t.registers && GLiquid.extensions.object.update.call(this.registers, t.registers), e = new GLiquid.Context(this.assigns, this.registers, this.rethrowErrors)), t.filters && e.addFilters(arg.filters);
            try {
                return this.root.render(e).join("")
            } finally {
                this.errors = e.errors
            }
        },
        renderWithErrors: function() {
            var t = this.rethrowErrors;
            this.rethrowErrors = !0;
            var e = this.render.apply(this, arguments);
            return this.rethrowErrors = t, e
        }
    }), GLiquid.Template.tags = {}, GLiquid.Template.registerTag = function(t, e) {
        GLiquid.Template.tags[t] = e
    }, GLiquid.Template.registerFilter = function(t) {
        GLiquid.Strainer.globalFilter(t)
    }, GLiquid.Template.tokenize = function(t) {
        var e = t.split(/(\{\%.*?\%\}|\{\{.*?\}\}?)/);
        return "" == e[0] && e.shift(), e
    }, GLiquid.Template.parse = function(t) {
        return (new GLiquid.Template).parse(t)
    }, GLiquid.Variable = GLiquid.Class.extend({
        init: function(t) {
            this.markup = t, this.name = null, this.filters = [];
            var e = this,
                i = t.match(/\s*("[^"]+"|'[^']+'|[^\s,|]+)/);
            if (i) {
                this.name = i[1];
                var n = t.match(/\|\s*(.*)/);
                if (n) {
                    var r = n[1].split(/\|/);
                    GLiquid.extensions.arrayTools.each(r, function(t) {
                        var i = t.match(/\s*(\w+)/);
                        if (i) {
                            var n = i[1],
                                r = [];
                            GLiquid.extensions.arrayTools.each(GLiquid.extensions.arrayTools.flatten(t.match(/(?:[:|,]\s*)("[^"]+"|'[^']+'|[^\s,|]+)/g) || []), function(t) {
                                var e = t.match(/^[\s|:|,]*(.*?)[\s]*$/);
                                e && r.push(e[1])
                            }), e.filters.push([n, r])
                        }
                    })
                }
            }
        },
        render: function(t) {
            if (null == this.name) return "";
            var e = t.get(this.name);
            return GLiquid.extensions.arrayTools.each(this.filters, function(i) {
                var n = i[0],
                    r = GLiquid.extensions.arrayTools.map(i[1] || [], function(e) {
                        return t.get(e)
                    });
                r.unshift(e), e = t.invoke(n, r)
            }), e
        }
    }), GLiquid.Condition = GLiquid.Class.extend({
        init: function(t, e, i) {
            this.left = t, this.operator = e, this.right = i, this.childRelation = null, this.childCondition = null, this.attachment = null
        },
        evaluate: function(t) {
            t = t || new GLiquid.Context;
            var e = this.interpretCondition(this.left, this.right, this.operator, t);
            switch (this.childRelation) {
                case "or":
                    return e || this.childCondition.evaluate(t);
                case "and":
                    return e && this.childCondition.evaluate(t);
                default:
                    return e
            }
        },
        or: function(t) {
            this.childRelation = "or", this.childCondition = t
        },
        and: function(t) {
            this.childRelation = "and", this.childCondition = t
        },
        attach: function(t) {
            return this.attachment = t, this.attachment
        },
        isElse: !1,
        interpretCondition: function(t, e, i, n) {
            if (!i) return n.get(t);
            if (t = n.get(t), e = n.get(e), !(i = GLiquid.Condition.operators[i])) throw "Unknown operator " + i;
            return i(t, e)
        },
        toString: function() {
            return "<Condition " + this.left + " " + this.operator + " " + this.right + ">"
        }
    }), GLiquid.Condition.operators = {
        "==": function(t, e) {
            return t == e
        },
        "=": function(t, e) {
            return t == e
        },
        "!=": function(t, e) {
            return t != e
        },
        "<>": function(t, e) {
            return t != e
        },
        "<": function(t, e) {
            return t < e
        },
        ">": function(t, e) {
            return t > e
        },
        "<=": function(t, e) {
            return t <= e
        },
        ">=": function(t, e) {
            return t >= e
        },
        contains: function(t, e) {
            return "[object Array]" === Object.prototype.toString.call(t) ? GLiquid.extensions.arrayTools.indexOf(t, e) >= 0 : t.match(e)
        },
        hasKey: function(t, e) {
            return GLiquid.extensions.object.hasKey.call(t, e)
        },
        hasValue: function(t, e) {
            return GLiquid.extensions.object.hasValue.call(t, e)
        }
    }, GLiquid.ElseCondition = GLiquid.Condition.extend({
        isElse: !0,
        evaluate: function(t) {
            return !0
        },
        toString: function() {
            return "<ElseCondition>"
        }
    }), GLiquid.Drop = GLiquid.Class.extend({
        setContext: function(t) {
            this.context = t
        },
        beforeMethod: function(t) {},
        invokeDrop: function(t) {
            var e = this.beforeMethod();
            return !e && t in this && (e = this[t].apply(this)), e
        },
        hasKey: function(t) {
            return !0
        }
    });
var split, hackObjectEach = function(t) {
    if ("function" != typeof t) throw "Object.each requires first argument to be a function";
    var e = 0,
        i = arguments[1];
    for (var n in this) {
        var r = this[n],
            o = [n, r];
        o.key = n, o.value = r, t.call(i, o, e, this), e++
    }
    return null
};
GLiquid.Template.registerTag("assign", GLiquid.Tag.extend({
        tagSyntax: /((?:\(?[\w\-\.\[\]]\)?)+)\s*=\s*(.+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'assign' - Valid syntax: assign [var] = [source]";
            this.to = n[1], this.from = n[2], this._super(t, e, i)
        },
        render: function(t) {
            var e = new GLiquid.Variable(this.from);
            return GLiquid.extensions.arrayTools.last(t.scopes)[this.to.toString()] = e.render(t), ""
        }
    })), GLiquid.Template.registerTag("cache", GLiquid.Block.extend({
        tagSyntax: /(\w+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'cache' - Valid syntax: cache [var]";
            this.to = n[1], this._super(t, e, i)
        },
        render: function(t) {
            var e = this._super(t);
            return GLiquid.extensions.arrayTools.last(t.scopes)[this.to] = GLiquid.extensions.arrayTools.flatten([e]).join(""), ""
        }
    })), GLiquid.Template.registerTag("capture", GLiquid.Block.extend({
        tagSyntax: /(\w+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'capture' - Valid syntax: capture [var]";
            this.to = n[1], this._super(t, e, i)
        },
        render: function(t) {
            var e = this._super(t);
            return GLiquid.extensions.arrayTools.last(t.scopes)[this.to.toString()] = GLiquid.extensions.arrayTools.flatten([e]).join(""), ""
        }
    })), GLiquid.Template.registerTag("case", GLiquid.Block.extend({
        tagSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)/,
        tagWhenSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)(?:(?:\s+or\s+|\s*\,\s*)("[^"]+"|'[^']+'|[^\s,|]+.*))?/,
        init: function(t, e, i) {
            this.blocks = [], this.nodelist = [];
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'case' - Valid syntax: case [condition]";
            this.left = n[1], this._super(t, e, i)
        },
        unknownTag: function(t, e, i) {
            switch (t) {
                case "when":
                    this.recordWhenCondition(e);
                    break;
                case "else":
                    this.recordElseCondition(e);
                    break;
                default:
                    this._super(t, e, i)
            }
        },
        render: function(t) {
            var e = this,
                i = [],
                n = !0;
            return t.stack(function() {
                for (var r = 0; r < e.blocks.length; r++) {
                    var o = e.blocks[r];
                    if (o.isElse) return 1 == n && (i = GLiquid.extensions.arrayTools.flatten([i, e.renderAll(o.attachment, t)])), i;
                    o.evaluate(t) && (n = !1, i = GLiquid.extensions.arrayTools.flatten([i, e.renderAll(o.attachment, t)]))
                }
            }), i
        },
        recordWhenCondition: function(t) {
            for (; t;) {
                var e = t.match(this.tagWhenSyntax);
                if (!e) throw "Syntax error in tag 'case' - Valid when condition: {% when [condition] [or condition2...] %} ";
                t = e[2];
                var i = new GLiquid.Condition(this.left, "==", e[1]);
                this.blocks.push(i), this.nodelist = i.attach([])
            }
        },
        recordElseCondition: function(t) {
            if ("" != GLiquid.extensions.stringTools.strip(t || "")) throw "Syntax error in tag 'case' - Valid else condition: {% else %} (no parameters) ";
            var e = new GLiquid.ElseCondition;
            this.blocks.push(e), this.nodelist = e.attach([])
        }
    })), GLiquid.Template.registerTag("comment", GLiquid.Block.extend({
        render: function(t) {
            return ""
        }
    })), GLiquid.Template.registerTag("cycle", GLiquid.Tag.extend({
        tagSimpleSyntax: /"[^"]+"|'[^']+'|[^\s,|]+/,
        tagNamedSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)\s*\:\s*(.*)/,
        init: function(t, e, i) {
            var n;
            if (n = e.match(this.tagNamedSyntax)) this.variables = this.variablesFromString(n[2]), this.name = n[1];
            else {
                if (!(n = e.match(this.tagSimpleSyntax))) throw "Syntax error in 'cycle' - Valid syntax: cycle [name :] var [, var2, var3 ...]";
                this.variables = this.variablesFromString(e), this.name = "'" + this.variables.toString() + "'"
            }
            this._super(t, e, i)
        },
        render: function(t) {
            var e = this,
                i = t.get(e.name),
                n = "";
            return t.registers.cycle || (t.registers.cycle = {}), t.registers.cycle[i] || (t.registers.cycle[i] = 0), t.stack(function() {
                var r = t.registers.cycle[i],
                    o = t.get(e.variables[r]);
                (r += 1) == e.variables.length && (r = 0), t.registers.cycle[i] = r, n = o
            }), n
        },
        variablesFromString: function(t) {
            return GLiquid.extensions.arrayTools.map(t.split(","), function(t) {
                var e = t.match(/\s*("[^"]+"|'[^']+'|[^\s,|]+)\s*/);
                return e[1] ? e[1] : null
            })
        }
    })), GLiquid.Template.registerTag("for", GLiquid.Block.extend({
        tagSyntax: /(\w+)\s+in\s+((?:\(?[\w\-\.\[\]]\)?)+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (!n) throw "Syntax error in 'for loop' - Valid syntax: for [item] in [collection]";
            this.variableName = n[1], this.collectionName = n[2], this.name = this.variableName + "-" + this.collectionName, this.attributes = {}, e.replace(this.tagSyntax, "");
            var r = e.match(/(\w*?)\s*\:\s*("[^"]+"|'[^']+'|[^\s,|]+)/g);
            r && GLiquid.extensions.arrayTools.each(r, function(t) {
                t = t.split(":"), this.attributes[GLiquid.extensions.stringTools.strip(t[0])] = GLiquid.extensions.stringTools.strip(t[1])
            }, this), this._super(t, e, i)
        },
        render: function(t) {
            var e = this,
                i = [],
                n = t.get(this.collectionName) || [],
                r = [0, n.length];
            if (t.registers.for || (t.registers.for = {}), this.attributes.limit || this.attributes.offset) {
                var o, s, a, l = null;
                r = [a = "continue" == this.attributes.offset ? t.registers.for[this.name] : t.get(this.attributes.offset) || 0, (s = (o = t.get(this.attributes.limit)) ? a + o + 1 : n.length) - 1], t.registers.for[this.name] = s
            }
            return (l = n.slice(r[0], r[1])) && 0 != l.length ? (t.stack(function() {
                var n = l.length;
                GLiquid.extensions.arrayTools.each(l, function(r, o) {
                    t.set(e.variableName, r), t.set("forloop", {
                        name: e.name,
                        length: n,
                        index: o + 1,
                        index0: o,
                        rindex: n - o,
                        rindex0: n - o - 1,
                        first: 0 == o,
                        last: o == n - 1
                    }), i.push((e.renderAll(e.nodelist, t) || []).join(""))
                })
            }), GLiquid.extensions.arrayTools.flatten([i]).join("")) : ""
        }
    })), GLiquid.Template.registerTag("if", GLiquid.Block.extend({
        tagSyntax: /("[^"]+"|'[^']+'|[^\s,|]+)\s*([=!<>a-z_]+)?\s*("[^"]+"|'[^']+'|[^\s,|]+)?/,
        init: function(t, e, i) {
            this.nodelist = [], this.blocks = [], this.pushBlock("if", e), this._super(t, e, i)
        },
        unknownTag: function(t, e, i) {
            GLiquid.extensions.arrayTools.include(["elsif", "else"], t) ? this.pushBlock(t, e) : this._super(t, e, i)
        },
        render: function(t) {
            var e = this,
                i = "";
            return t.stack(function() {
                for (var n = 0; n < e.blocks.length; n++) {
                    var r = e.blocks[n];
                    if (r.evaluate(t)) return void(i = e.renderAll(r.attachment, t))
                }
            }), GLiquid.extensions.arrayTools.flatten([i]).join("")
        },
        pushBlock: function(t, e) {
            var i;
            if ("else" == t) i = new GLiquid.ElseCondition;
            else {
                var n = e.split(/\b(and|or)\b/).reverse();
                if (!(o = n.shift().match(this.tagSyntax))) throw "Syntax Error in tag '" + t + "' - Valid syntax: " + t + " [expression]";
                for (var r = new GLiquid.Condition(o[1], o[2], o[3]); n.length > 0;) {
                    var o, s = n.shift();
                    if (!(o = n.shift().match(this.tagSyntax))) throw "Syntax Error in tag '" + t + "' - Valid syntax: " + t + " [expression]";
                    var a = new GLiquid.Condition(o[1], o[2], o[3]);
                    a[s](r), r = a
                }
                i = r
            }
            i.attach([]), this.blocks.push(i), this.nodelist = i.attachment
        }
    })), GLiquid.Template.registerTag("ifchanged", GLiquid.Block.extend({
        render: function(t) {
            var e = this,
                i = "";
            return t.stack(function() {
                var n = e.renderAll(e.nodelist, t).join("");
                n != t.registers.ifchanged && (i = n, t.registers.ifchanged = i)
            }), i
        }
    })), GLiquid.Template.registerTag("include", GLiquid.Tag.extend({
        tagSyntax: /((?:"[^"]+"|'[^']+'|[^\s,|]+)+)(\s+(?:with|for)\s+((?:"[^"]+"|'[^']+'|[^\s,|]+)+))?/,
        init: function(t, e, i) {
            var n = (e || "").match(this.tagSyntax);
            if (!n) throw "Error in tag 'include' - Valid syntax: include '[template]' (with|for) [object|collection]";
            this.templateName = n[1], this.templateNameVar = this.templateName.substring(1, this.templateName.length - 1), this.variableName = n[3], this.attributes = {};
            var r = e.match(/(\w*?)\s*\:\s*("[^"]+"|'[^']+'|[^\s,|]+)/g);
            r && GLiquid.extensions.arrayTools.each(r, function(t) {
                t = t.split(":"), this.attributes[GLiquid.extensions.stringTools.strip(t[0])] = GLiquid.extensions.stringTools.strip(t[1])
            }, this), this._super(t, e, i)
        },
        render: function(t) {
            var e = this,
                i = GLiquid.readTemplateFile(t.get(this.templateName)),
                n = GLiquid.parse(i),
                r = t.get(this.variableName || this.templateNameVar),
                o = "";
            return t.stack(function() {
                e.attributes.each = hackObjectEach, e.attributes.each(function(e) {
                    t.set(e.key, t.get(e.value))
                }), r instanceof Array ? o = GLiquid.extensions.arrayTools.map(r, function(i) {
                    return t.set(e.templateNameVar, i), n.render(t)
                }) : (t.set(e.templateNameVar, r), o = n.render(t))
            }), o = GLiquid.extensions.arrayTools.flatten([o]).join("")
        }
    })), GLiquid.Template.registerTag("unless", GLiquid.Template.tags.if.extend({
        render: function(t) {
            var e = this,
                i = "";
            return t.stack(function() {
                if ((r = e.blocks[0]).evaluate(t))
                    for (var n = 1; n < e.blocks.length; n++) {
                        var r;
                        if ((r = e.blocks[n]).evaluate(t)) return void(i = e.renderAll(r.attachment, t))
                    } else i = e.renderAll(r.attachment, t)
            }), GLiquid.extensions.arrayTools.flatten([i]).join("")
        }
    })), GLiquid.Template.registerTag("raw", GLiquid.Block.extend({
        parse: function(t) {
            this.nodelist || (this.nodelist = []), this.nodelist.length = 0;
            var e = t.shift();
            for (t.push(""); t.length;) {
                if (/^\{\%/.test(e)) {
                    var i = e.match(/^\{\%\s*(\w+)\s*(.*)?\%\}$/);
                    if (i && this.blockDelimiter == i[1]) return void this.endTag()
                }
                this.nodelist.push(e || ""), e = t.shift()
            }
            this.assertMissingDelimitation()
        },
        render: function(t) {
            return this.nodelist.join("")
        }
    })), GLiquid.Template.registerTag("increment", GLiquid.Tag.extend({
        tagSyntax: /((?:\(?[\w\-\.\[\]]\)?)+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (console.log(t, e, i), console.log(n[1]), !n) throw "Syntax error in 'assign' - Valid syntax: increment [var]";
            this.name = n[1], this._super(t, e, i)
        },
        render: function(t) {
            var e, i = this.name;
            return t.registers.increment || (t.registers.increment = {}), t.registers.increment[i] || (t.registers.increment[i] = 0), e = String(t.registers.increment[i]), t.registers.increment[i]++, e
        }
    })), GLiquid.Template.registerTag("decrement", GLiquid.Tag.extend({
        tagSyntax: /((?:\(?[\w\-\.\[\]]\)?)+)/,
        init: function(t, e, i) {
            var n = e.match(this.tagSyntax);
            if (console.log(t, e, i), console.log(n[1]), !n) throw "Syntax error in 'assign' - Valid syntax: decrement [var]";
            this.name = n[1], this._super(t, e, i)
        },
        render: function(t) {
            var e, i = this.name;
            return t.registers.decrement || (t.registers.decrement = {}), t.registers.decrement[i] || (t.registers.decrement[i] = -1), e = String(t.registers.decrement[i]), t.registers.decrement[i]--, e
        }
    })),
    function(t) {
        var e = function(t, e) {
            function i(t, e) {
                return void 0 === t ? e : t
            }

            function n(t, e, n, r) {
                if (e = i(e, 2), n = i(n, ","), r = i(r, "."), isNaN(t) || null == t) return 0;
                var o = t;
                return "undefined" == typeof DoublyGlobalCurrency && Shopify && Shopify.currency && Shopify.currency.rate && 1 != parseFloat(Shopify.currency.rate) && (o = Math.round(t * parseFloat(Shopify.currency.rate))), (o = (o = parseFloat(parseFloat(o).toFixed(e)) / 100).toFixed(e).split("."))[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n) + (o[1] ? r + o[1] : "")
            }
            "string" == typeof t && (t = t.replace(".", ""));
            var r = "",
                o = /\{\{\s*(\w+)\s*\}\}/,
                s = e;
            switch (s.match(o)[1]) {
                case "amount":
                    r = n(t, 2);
                    break;
                case "amount_no_decimals":
                    r = n(t, 0);
                    break;
                case "amount_with_comma_separator":
                    r = n(t, 2, ".", ",");
                    break;
                case "amount_with_space_separator":
                    r = n(t, 2, " ", ",");
                    break;
                case "amount_with_period_and_space_separator":
                    r = n(t, 2, " ", ".");
                    break;
                case "amount_no_decimals_with_comma_separator":
                    r = n(t, 0, ".", ",");
                    break;
                case "amount_no_decimals_with_space_separator":
                    r = n(t, 0, ".", "");
                    break;
                case "amount_with_space_separator":
                    r = n(t, 2, ",", "");
                    break;
                case "amount_with_apostrophe_separator":
                    r = n(t, 2, "'", ".");
                default:
                    r = n(t, 2)
            }
            return s.replace(o, r)
        };
        t.Template.registerFilter({
            _HTML_ESCAPE_MAP: {
                "&": "&amp;",
                ">": "&gt;",
                "<": "&lt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            size: function(t) {
                return t.length ? t.length : 0
            },
            downcase: function(t) {
                return t.toString().toLowerCase()
            },
            upcase: function(t) {
                return t.toString().toUpperCase()
            },
            capitalize: function(e) {
                return t.extensions.stringTools.capitalize(e.toString())
            },
            handle: function(t) {
                return t.toLowerCase().replace(/("|'|\\|\(|\)|\[|\])/g, "").replace(/\W+/g, "-").replace(/^-+|-+$/g, "")
            },
            escape: function(t) {
                var e = this;
                return t.replace(/[&<>"']/g, function(t) {
                    return e._HTML_ESCAPE_MAP[t]
                })
            },
            url_encode: function(t) {
                return encodeURIComponent(t)
            },
            h: function(t) {
                var e = this;
                return t.replace(/[&<>"']/g, function(t) {
                    return e._HTML_ESCAPE_MAP[t]
                })
            },
            default: function(e, i) {
                return t.extensions.object.isEmpty(e) ? i : e
            },
            truncate: function(t, e, i) {
                return t && "" != t ? (e = e || 50, i = i || "...", t.slice(0, e), t.length > e ? t.slice(0, e) + i : t) : ""
            },
            truncate_words: function(t, e, i) {
                if (!t || "" == t) return "";
                e = parseInt(e || 15), i = i || "...";
                var n = t.toString().split(" "),
                    r = Math.max(e, 0);
                return n.length > r ? n.slice(0, r).join(" ") + i : t
            },
            strip_html: function(t) {
                return t.toString().replace(/<.*?>/g, "")
            },
            strip_newlines: function(t) {
                return t.toString().replace(/\n/g, "")
            },
            join: function(t, e) {
                return e = e || " ", Array.isArray(t) ? t.join(e) : t
            },
            split: function(t, e) {
                return e = e || " ", t.split(e)
            },
            sort: function(t) {
                return t.sort()
            },
            custom_sort: function(t) {
                return t.sort(function(t, e) {
                    return parseInt(t) - parseInt(e)
                })
            },
            reverse: function(t) {
                return t.reverse()
            },
            replace: function(t, e, i) {
                return i = i || "", t.toString().replace(new RegExp(e, "g"), i)
            },
            replace_first: function(t, e, i) {
                return i = i || "", t.toString().replace(new RegExp(e, ""), i)
            },
            newline_to_br: function(t) {
                return t.toString().replace(/\n/g, "<br/>\n")
            },
            date: function(t, e) {
                var i;
                return t instanceof Date && (i = t), i instanceof Date || "now" != t || (i = new Date), i instanceof Date || "number" != typeof t || (i = new Date(1e3 * t)), i instanceof Date || "string" != typeof t || (i = new Date(Date.parse(t))), i instanceof Date ? "%s" == e ? Math.round(i.getTime() / 1e3) : i.strftime(e) : t
            },
            first: function(t) {
                return t[0]
            },
            last: function(t) {
                return (t = t)[t.length - 1]
            },
            minus: function(t, e) {
                return (Number(t) || 0) - (Number(e) || 0)
            },
            plus: function(t, e) {
                return (Number(t) || 0) + (Number(e) || 0)
            },
            times: function(t, e) {
                return (Number(t) || 0) * (Number(e) || 0)
            },
            divided_by: function(t, e) {
                return (Number(t) || 0) / (Number(e) || 0)
            },
            modulo: function(t, e) {
                return (Number(t) || 0) % (Number(e) || 0)
            },
            map: function(t, e) {
                t = t || [];
                for (var i = [], n = 0; n < t.length; n++) i.push(t[n][e]);
                return i
            },
            escape_once: function(t) {
                var e = this;
                return t.replace(/["><']|&(?!([a-zA-Z]+|(#\d+));)/g, function(t) {
                    return e._HTML_ESCAPE_MAP[t]
                })
            },
            remove: function(t, e) {
                return t.toString().replace(new RegExp(e, "g"), "")
            },
            remove_first: function(t, e) {
                return t.toString().replace(e, "")
            },
            prepend: function(t, e) {
                return "" + (e || "").toString() + (t || "").toString()
            },
            append: function(t, e) {
                return "" + (t || "").toString() + (e || "").toString()
            },
            money: function(t) {
                return e(t, window.moneyFormat)
            },
            money_with_currency: function(t) {
                return e(t, window.moneyFormat)
            },
            money_without_trailing_zeros: function(t) {
                return e(t, window.moneyFormat)
            },
            money_without_currency: function(t) {
                return e(t, window.moneyFormat)
            },
            round: function(t) {
                return parseInt(Math.round(t))
            },
            floor: function(t) {
                return parseInt(Math.floor(t))
            },
            ceil: function(t) {
                return parseInt(Math.ceil(t))
            },
            img_url: function(t, e, i) {
                i = i || !1;
                var n = t.split(".").pop(),
                    r = t.lastIndexOf(n) - 1;
                return t.slice(0, r) + "_" + e + t.slice(r)
            },
            img_ladyload_url: function(t, e) {
                e = e || !1;
                var i = t.split(".").pop(),
                    n = t.lastIndexOf(i) - 1;
                return t.slice(0, n) + "_{width}x" + t.slice(n)
            },
            img_lazyload_url: function(t, e) {
                e = e || !1;
                var i = t.split(".").pop(),
                    n = t.lastIndexOf(i) - 1;
                return t.slice(0, n) + "_{width}x" + t.slice(n)
            },
            file_img_url: function(t, e, i) {
                i = i || !1, i = t.split(".").pop();
                var n = t.lastIndexOf(i) - 1;
                return t = t.slice(0, n) + "_" + e + t.slice(n), window.filesUrl + t
            },
            crop: function(t, e) {
                var i = t.split(".").pop(),
                    n = t.lastIndexOf(i) - 1;
                return t.slice(0, n) + "_crop_" + e + t.slice(n)
            },
            json: function(t) {
                return JSON.stringify(t)
            },
            parseJson: function(t) {
                return JSON.parse(t)
            },
            asset_img_url: function(t, e) {
                var i = t.split(".").pop(),
                    n = t.lastIndexOf(i) - 1;
                return t = t.slice(0, n) + "_" + e + t.slice(n), window.assetsUrl + t
            },
            asset_url: function(t) {
                return window.assetsUrl + t
            }
        })
    }(GLiquid), (new Date).strftime || (Date.ext = {}, Date.ext.util = {}, Date.ext.util.xPad = function(t, e, i) {
        for (void 0 === i && (i = 10); parseInt(t, 10) < i && i > 1; i /= 10) t = e.toString() + t;
        return t.toString()
    }, Date.prototype.locale = "en-GB", document.getElementsByTagName("html") && document.getElementsByTagName("html")[0].lang && (Date.prototype.locale = document.getElementsByTagName("html")[0].lang), Date.ext.locales = {}, Date.ext.locales.en = {
        a: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        A: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        b: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        B: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        c: "%a %d %b %Y %T %Z",
        p: ["AM", "PM"],
        P: ["am", "pm"],
        x: "%d/%m/%y",
        X: "%T"
    }, "undefined" != typeof JSON ? Date.ext.locales["en-US"] = JSON.parse(JSON.stringify(Date.ext.locales.en)) : Date.ext.locales["en-US"] = Date.ext.locales.en, Date.ext.locales["en-US"].c = "%a %d %b %Y %r %Z", Date.ext.locales["en-US"].x = "%D", Date.ext.locales["en-US"].X = "%r", Date.ext.locales["en-GB"] = Date.ext.locales.en, Date.ext.locales["en-AU"] = Date.ext.locales["en-GB"], Date.ext.formats = {
        a: function(t) {
            return Date.ext.locales[t.locale].a[t.getDay()]
        },
        A: function(t) {
            return Date.ext.locales[t.locale].A[t.getDay()]
        },
        b: function(t) {
            return Date.ext.locales[t.locale].b[t.getMonth()]
        },
        B: function(t) {
            return Date.ext.locales[t.locale].B[t.getMonth()]
        },
        c: "toLocaleString",
        C: function(t) {
            return Date.ext.util.xPad(parseInt(t.getFullYear() / 100, 10), 0)
        },
        d: ["getDate", "0"],
        e: ["getDate", " "],
        g: function(t) {
            return Date.ext.util.xPad(parseInt(Date.ext.util.G(t) / 100, 10), 0)
        },
        G: function(t) {
            var e = t.getFullYear(),
                i = parseInt(Date.ext.formats.V(t), 10),
                n = parseInt(Date.ext.formats.W(t), 10);
            return n > i ? e++ : 0 === n && i >= 52 && e--, e
        },
        H: ["getHours", "0"],
        I: function(t) {
            var e = t.getHours() % 12;
            return Date.ext.util.xPad(0 === e ? 12 : e, 0)
        },
        j: function(t) {
            var e = t - new Date(t.getFullYear() + "/1/1 GMT");
            e += 6e4 * t.getTimezoneOffset();
            var i = parseInt(e / 6e4 / 60 / 24, 10) + 1;
            return Date.ext.util.xPad(i, 0, 100)
        },
        m: function(t) {
            return Date.ext.util.xPad(t.getMonth() + 1, 0)
        },
        M: ["getMinutes", "0"],
        p: function(t) {
            return Date.ext.locales[t.locale].p[t.getHours() >= 12 ? 1 : 0]
        },
        P: function(t) {
            return Date.ext.locales[t.locale].P[t.getHours() >= 12 ? 1 : 0]
        },
        S: ["getSeconds", "0"],
        u: function(t) {
            var e = t.getDay();
            return 0 === e ? 7 : e
        },
        U: function(t) {
            var e = parseInt(Date.ext.formats.j(t), 10),
                i = 6 - t.getDay(),
                n = parseInt((e + i) / 7, 10);
            return Date.ext.util.xPad(n, 0)
        },
        V: function(t) {
            var e = parseInt(Date.ext.formats.W(t), 10),
                i = new Date(t.getFullYear() + "/1/1").getDay(),
                n = e + (i > 4 || i <= 1 ? 0 : 1);
            return 53 == n && new Date(t.getFullYear() + "/12/31").getDay() < 4 ? n = 1 : 0 === n && (n = Date.ext.formats.V(new Date(t.getFullYear() - 1 + "/12/31"))), Date.ext.util.xPad(n, 0)
        },
        w: "getDay",
        W: function(t) {
            var e = parseInt(Date.ext.formats.j(t), 10),
                i = 7 - Date.ext.formats.u(t),
                n = parseInt((e + i) / 7, 10);
            return Date.ext.util.xPad(n, 0, 10)
        },
        y: function(t) {
            return Date.ext.util.xPad(t.getFullYear() % 100, 0)
        },
        Y: "getFullYear",
        z: function(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : "+") + Date.ext.util.xPad(parseInt(Math.abs(e / 60), 10), 0) + Date.ext.util.xPad(e % 60, 0)
        },
        Z: function(t) {
            return t.toString().replace(/^.*\(([^)]+)\)$/, "$1")
        },
        "%": function(t) {
            return "%"
        }
    }, Date.ext.aggregates = {
        c: "locale",
        D: "%m/%d/%y",
        h: "%b",
        n: "\n",
        r: "%I:%M:%S %p",
        R: "%H:%M",
        t: "\t",
        T: "%H:%M:%S",
        x: "locale",
        X: "locale"
    }, Date.ext.aggregates.z = Date.ext.formats.z(new Date), Date.ext.aggregates.Z = Date.ext.formats.Z(new Date), Date.ext.unsupported = {}, Date.prototype.strftime = function(t) {
        this.locale in Date.ext.locales || (this.locale.replace(/-[a-zA-Z]+$/, "") in Date.ext.locales ? this.locale = this.locale.replace(/-[a-zA-Z]+$/, "") : this.locale = "en-GB");
        for (var e = this; t.match(/%[cDhnrRtTxXzZ]/);) t = t.replace(/%([cDhnrRtTxXzZ])/g, function(t, i) {
            var n = Date.ext.aggregates[i];
            return "locale" == n ? Date.ext.locales[e.locale][i] : n
        });
        var i = t.replace(/%([aAbBCdegGHIjmMpPSuUVwWyY%])/g, function(t, i) {
            var n = Date.ext.formats[i];
            return "string" == typeof n ? e[n]() : "function" == typeof n ? n.call(e, e) : "object" == typeof n && "string" == typeof n[0] ? Date.ext.util.xPad(e[n[0]](), n[1]) : i
        });
        return e = null, i
    }), split = split || function(t) {
        var e, i = String.prototype.split,
            n = void 0 === /()??/.exec("")[1];
        return e = function(t, e, r) {
            if ("[object RegExp]" !== Object.prototype.toString.call(e)) return i.call(t, e, r);
            var o, s, a, l, c = [],
                u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
                d = 0;
            for (e = new RegExp(e.source, u + "g"), t += "", n || (o = new RegExp("^" + e.source + "$(?!\\s)", u)), r = void 0 === r ? -1 >>> 0 : r >>> 0;
                (s = e.exec(t)) && !((a = s.index + s[0].length) > d && (c.push(t.slice(d, s.index)), !n && s.length > 1 && s[0].replace(o, function() {
                    for (var t = 1; t < arguments.length - 2; t++) void 0 === arguments[t] && (s[t] = void 0)
                }), s.length > 1 && s.index < t.length && Array.prototype.push.apply(c, s.slice(1)), l = s[0].length, d = a, c.length >= r));) e.lastIndex === s.index && e.lastIndex++;
            return d === t.length ? !l && e.test("") || c.push("") : c.push(t.slice(d)), c.length > r ? c.slice(0, r) : c
        }, String.prototype.split = function(t, i) {
            return e(this, t, i)
        }, e
    }(), "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = GLiquid), exports.GLiquid = GLiquid), "function" != typeof Object.assign && (Object.assign = function(t) {
        "use strict";
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        t = Object(t);
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            if (null != i)
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
    });
var gF = jQuery.noConflict(!0),
    windowSize = window.innerWidth ? window.innerWidth : 0 != document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth,
    isMobileOrTablet = !1;

function toggleCheckboxFilter(t, e) {
    if (globofilter.queryParams.hasOwnProperty("page") && globofilter.queryParams.page > 1 && delete globofilter.queryParams.page, globofilter.queryParams.hasOwnProperty("filter") || (globofilter.queryParams.filter = {}), globofilter.queryParams.filter.hasOwnProperty(t)) {
        var i = globofilter.queryParams.filter[t].indexOf(e.toString());
        i > -1 ? 1 == globofilter.queryParams.filter[t].length ? delete globofilter.queryParams.filter[t] : globofilter.queryParams.filter[t].splice(i, 1) : globofilter.queryParams.filter[t].push(e.toString())
    } else globofilter.queryParams.filter[t] = [e.toString()];
    globofilter.getFilterData("all", !0)
}

function toggleRadioFilter(t, e) {
    if (globofilter.queryParams.hasOwnProperty("page") && globofilter.queryParams.page > 1 && delete globofilter.queryParams.page, globofilter.queryParams.hasOwnProperty("filter") || (globofilter.queryParams.filter = {}), globofilter.queryParams.filter.hasOwnProperty(t)) {
        var i = globofilter.queryParams.filter[t].indexOf(e.toString());
        i > -1 ? 1 == globofilter.queryParams.filter[t].length ? delete globofilter.queryParams.filter[t] : globofilter.queryParams.filter[t].splice(i, 1) : globofilter.queryParams.filter[t] = [e.toString()]
    } else globofilter.queryParams.filter[t] = [e.toString()];
    globofilter.getFilterData("all", !0)
}

function addRangeFilter(t, e) {
    globofilter.queryParams.hasOwnProperty("page") && 1 < globofilter.queryParams.page && delete globofilter.queryParams.page, globofilter.queryParams.hasOwnProperty("filter") || (globofilter.queryParams.filter = {}), globofilter.queryParams.filter[t] = [e], globofilter.getFilterData("all", !0)
}

function removeFilter(t) {
    globofilter.queryParams.hasOwnProperty("filter") || (globofilter.queryParams.filter = {}), delete globofilter.queryParams.filter[t], globofilter.getFilterData("all", !0)
}

function removeFilterValue(t, e) {
    globofilter.queryParams.hasOwnProperty("filter") && globofilter.queryParams.filter.hasOwnProperty(t) && (1 == globofilter.queryParams.filter[t].length ? delete globofilter.queryParams.filter[t] : globofilter.queryParams.filter[t].indexOf(e.toString()) > -1 && globofilter.queryParams.filter[t].splice(globofilter.queryParams.filter[t].indexOf(e.toString()), 1), globofilter.getFilterData("all", !0))
}

function setPage(t) {
    if (globofilter.appInstalled) return globofilter.queryParams.page = t, globofilter.getFilterData("products", !0), gF("html,body").animate({
        scrollTop: gF("#gf-grid").offset().top
    }, 300), !1
}

function changeSortBy(t) {
    if (globofilter.appInstalled) return globofilter.queryParams.sort_by = t, globofilter.queryParams.hasOwnProperty("page") && globofilter.queryParams.page > 1 && delete globofilter.queryParams.page, globofilter.getFilterData("products", !0), !1
}

function loadMore() {
    return globofilter.queryParams.hasOwnProperty("page") ? globofilter.queryParams.page = parseInt(globofilter.queryParams.page) + 1 : globofilter.queryParams.page = 2, gF(".gf-loadmore-btn").attr("disabled", !0), globofilter.getFilterData("loadmore", !0), !1
}

function setLimit(t) {
    globofilter.appInstalled && (globofilter.queryParams.hasOwnProperty("page") && 1 < globofilter.queryParams.page && delete globofilter.queryParams.page, globofilter.queryParams.limit = t, globofilter.getFilterData("products", !0))
}

function clearAllFilter() {
    globofilter.queryParams.hasOwnProperty("filter") && (delete globofilter.queryParams.filter, delete globofilter.queryParams.page, globofilter.getFilterData("all", !0))
}! function(t) {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (isMobileOrTablet = !0)
}(navigator.userAgent || navigator.vendor || window.opera), windowSize < 768 && (isMobileOrTablet = !0), gF(document).keyup(function(t) {
    27 == t.keyCode && gF("html").removeClass("offcanvas-open")
}), gF(document).on("click", "#gf-overlay", function(t) {
    gF("html").removeClass("offcanvas-open")
}), gF(document).on("mouseup", function(t) {
    "undefined" != typeof globofilter && (gF("#gf-tree").is(t.target) || 0 !== gF("#gf-tree").has(t.target).length || gF("html").removeClass("offcanvas-open"), !gF(".gf-filter-contents").is(t.target) && 0 === gF(".gf-filter-contents").has(t.target).length && windowSize >= 768 && (gF(".gf-top_one .gf-option-block").addClass("is-collapsed"), globofilter.state.hasOwnProperty("filters") || (globofilter.state.filters = []), gF(".gf-option-block").each(function() {
        var t = parseInt(gF(this).attr("data-filter-id"));
        globofilter.state.filters[t] = gF(this).hasClass("is-collapsed") ? 1 : 0
    })))
}), gF(document).on("mouseup", "#quick-view-modal", function(t) {
    var e = gF(".gfqv-product-wrapper");
    e.is(t.target) || 0 !== e.has(t.target).length || (gF(".quick-view-modal").fadeOut(300, function() {
        gF(".quick-view-modal").remove()
    }), gF("body").removeClass("modal-open"))
}), gF(document).on("click", ".gf-left .gf-block-title h3, .gf-offcanvas .gf-block-title h3", function(t) {
    "undefined" != typeof globofilter && (gF(this).closest(".gf-option-block, .gf-selection-wrapper").toggleClass("is-collapsed"), globofilter.state.hasOwnProperty("filters") || (globofilter.state.filters = []), gF(".gf-option-block").each(function() {
        var t = parseInt(gF(this).attr("data-filter-id"));
        globofilter.state.filters[t] = gF(this).hasClass("is-collapsed") ? 1 : 0
    }), windowSize >= 768 && gF(".gf-block-scroll:visible").mCustomScrollbar({
        scrollInertia: 300
    }))
}), gF(document).on("click", ".gf-top_one .gf-block-title h3", function() {
    gF(this).closest(".gf-option-block").toggleClass("is-collapsed").siblings().addClass("is-collapsed"), globofilter.state.hasOwnProperty("filters") || (globofilter.state.filters = []), gF(".gf-option-block").each(function() {
        var t = parseInt(gF(this).attr("data-filter-id"));
        globofilter.state.filters[t] = gF(this).hasClass("is-collapsed") ? 1 : 0
    }), windowSize >= 768 && gF(".gf-block-scroll:visible").mCustomScrollbar({
        scrollInertia: 300
    })
}), gF(document).ready(function() {
    "undefined" != typeof globofilter && (1 == globofilter.filter.isLoadMore && gF("#gf_pagination_wrap").remove(), gF(window).scroll(function() {
        1 == globofilter.filter.isLoadMore && gF("#gf_pagination_wrap").length && !gF("body").hasClass("gf-loadmore") && gF(window).scrollTop() > gF("#gf_pagination_wrap").offset().top - gF(window).height() && (gF("body").addClass("gf-loadmore"), globofilter.queryParams.page = globofilter.queryParams.page || 1, globofilter.queryParams.page++, globofilter.getFilterData("loadmore", !1))
    })), gF(document).on("click", ".spf-product__swatch", function(t) {
        gF(t.currentTarget).addClass("is-selected").siblings().removeClass("is-selected");
        var e = null,
            i = gF(t.currentTarget).closest(".spf-product-card"),
            n = i.find(".spf-product__form-btn-addtocart"),
            r = [];
        if (gF(i).find(".spf-product__swatch.is-selected").each(function() {
                r.push(gF(this).attr("title"))
            }), gF(i).find(".spf-product__variants option").each(function() {
                var t = gF(this).text().split(" / ");
                0 != r.filter(function(e) {
                    return -1 == gF.inArray(e, t)
                }).length || null != e && (e.available || 1 != gF(this).attr("data-available")) || (e = {
                    id: Number(gF(this).attr("value")),
                    price: "" != gF(this).attr("data-price") ? Number(gF(this).attr("data-price")) : null,
                    compare_at_price: "" != gF(this).attr("data-compare_at_price") ? Number(gF(this).attr("data-compare_at_price")) : null,
                    available: "true" == gF(this).attr("data-available"),
                    image: "" != gF(this).attr("data-image") ? gF(this).attr("data-image") : null
                })
            }), null == e) n.prop("disabled", !0).find("span").text(n.attr("data-unavailable"));
        else {
            gF(i).find(".spf-product__variants").val(e.id), e.available ? n.prop("disabled", !1).find("span").text(n.attr("data-available")) : n.prop("disabled", !0).find("span").text(n.attr("data-soldout"));
            var o = GLiquid.parse('{% if compare_at_price > price %}<span class="spf-product-card__oldprice">{{ compare_at_price | money }}</span><span class="spf-product-card__saleprice">{{ price | money }}</span>{% else %}<span class="spf-product-card__price">{{ price | money }}</span>{% endif %}').render({
                compare_at_price: e.compare_at_price,
                price: e.price
            });
            if (gF(i).find(".spf-product-card__price-wrapper").html(o), i.find('.spf-product-card__image[data-variants*="' + e.id + '"]').length) {
                i.find(".spf-product-card__image").addClass("spf-product-card__image-hidden").removeClass("spf-product-card__image-secondary spf-product-card__image-main"), i.find('.spf-product-card__image[data-variants*="' + e.id + '"]').first().addClass("spf-product-card__image-main").removeClass("spf-product-card__image-hidden");
                var s = i.find('.spf-product-card__image[data-variants*="' + e.id + '"]').first().index(),
                    a = s == i.find(".spf-product-card__image").length - 1 ? 0 : s + 1;
                i.find(".spf-product-card__image").eq(a).removeClass("spf-product-card__image-hidden").addClass("spf-product-card__image-secondary")
            }
        }
    }), 0 < gF(".item-images-wrapper").length && gF(document).on("click", ".item-images-wrapper a", function(t) {
        if (!gF(t.currentTarget).hasClass("active")) {
            var e = gF(t.currentTarget).data("_image");
            gF(t.currentTarget).closest(".item-images-wrapper").find("a").removeClass("active"), gF(t.currentTarget).addClass("active"), gF(t.currentTarget).closest(".product-item-advanced-wrapper").find("img.mpt-image").attr("src", e)
        }
    }), gF(document).on("click", ".image-navigation", function(t) {
        var e = gF(t.currentTarget).closest(".spf-product-card").find(".spf-product-card__image-wrapper"),
            i = e.find(".spf-product-card__image").length - 1;
        if (i > 0)
            if (gF(t.currentTarget).hasClass("next")) {
                e.find(".spf-product-card__image-main").removeClass("spf-product-card__image-main").addClass("spf-product-card__image-hidden"), e.find(".spf-product-card__image-secondary").addClass("spf-product-card__image-main").removeClass("spf-product-card__image-secondary");
                var n = (r = e.find(".spf-product-card__image-main").index()) == i ? 0 : r + 1;
                e.find(".spf-product-card__image").eq(n).removeClass("spf-product-card__image-hidden").addClass("spf-product-card__image-secondary")
            } else {
                e.find(".spf-product-card__image-secondary").addClass("spf-product-card__image-hidden").removeClass("spf-product-card__image-secondary"), e.find(".spf-product-card__image-main").removeClass("spf-product-card__image-main").addClass("spf-product-card__image-secondary");
                var r, o = 0 == (r = e.find(".spf-product-card__image-secondary").index()) ? i : r - 1;
                e.find(".spf-product-card__image").eq(o).removeClass("spf-product-card__image-hidden").addClass("spf-product-card__image-main")
            }
    }), gF(document).on("click", ".gf-option-box li div a + span", function(t) {
        gF(this).closest("div").next("ul").slideToggle(), gF(this).closest("li").toggleClass("is-collapsed")
    })
}), window.onpopstate = function(t) {
    null != t.state && void 0 !== t.state.filter_id && (globofilter.queryParams = t.state, globofilter.getFilterData("all", !1))
};
var GloboFilter = function(t) {
    this.queryParams = {}, this.state = {}, this.appInstalled = !0, this.api = t.api, this.shop = t.shop, this.filter = t.filter, this.collection = t.collection, this.customer = t.customer, this.selector = t.selector, this.search = t.search, this.data = {}, this.template = {
        quickview: '<div id="quick-view-modal" class="quick-view-modal gf-modal" tabindex="-1" role="dialog"><div class="modal-content"><div class="container">{{productHTML}}</div></div></div>',
        loading: '<div class="gf-tree-overlay"><svg class="lds-spinner" width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(30 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(60 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(90 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(120 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(150 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(180 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(210 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(240 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(270 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(300 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(330 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate></rect></g></svg></div>'
    }, gF("html").addClass("spf-has-filter spf-status-loading")
};
GloboFilter.prototype.initSearch = function() {
    var t = this,
        e = !1;
    gF("script").each(function() {
        -1 != gF(this).text().indexOf("globo.filter.init.js?") && -1 != gF(this).text().indexOf("asyncLoad") && -1 == gF(this).text().indexOf("initSchema") && (e = !0)
    }), e ? (gF("html").removeClass("spf-status-loading"), gF(' form[action*="search"] input[type="text"], form[action*="search"] input[type="search"], .search-input, #text-search ').each(function() {
        var e = gF(this);
        e.autocomplete({
            minLength: 2,
            source: function(e, i) {
                gF.ajax({
                    url: t.api.searchUrl,
                    method: "get",
                    dataType: "jsonp",
                    data: {
                        shop: t.shop.domain,
                        term: e.term
                    },
                    success: function(t) {
                        var e;
                        i(t), "function" == typeof Event ? e = new Event("globoFilterSearchCompleted") : (e = document.createEvent("Event")).initEvent("globoFilterSearchCompleted", !0, !0), window.dispatchEvent(e)
                    }
                })
            },
            position: {
                of: e,
                my: "left top",
                at: "left bottom"
            }
        }).focus(function() {
            e.autocomplete("search")
        }).data("ui-autocomplete")._renderItem = function(t, e) {
            var i = GLiquid.parse(gF("#gspfSearchResult").html());
            return resultHTML = i.render({
                result: e
            }), gF(resultHTML).appendTo(t)
        }
    })) : this.appInstalled = !1
}, GloboFilter.prototype.initFilter = function() {
    var t = !1;
    if (gF("script").each(function() {
            -1 != gF(this).text().indexOf("globo.filter.init.js?") && -1 != gF(this).text().indexOf("asyncLoad") && -1 == gF(this).text().indexOf("initSchema") && (t = !0)
        }), !t) return this.appInstalled = !1, void gF("#gf-products").attr("id", "");
    if (globofilter.shop.themeStoreId && gF("html").addClass("theme-store-id-" + globofilter.shop.themeStoreId), 1 == globofilter.filter.layout ? gF("html").addClass("gf-left") : 2 == globofilter.filter.layout ? gF("html").addClass("gf-top_one") : 3 == globofilter.filter.layout && gF("html").addClass("gf-offcanvas"), 2 == globofilter.filter.swatch_mode && gF("html").addClass("swatch-round"), !globofilter.filter.id) return gF("#gf-products").attr("id", ""), console.log("Smart Product Filter has been disabled on this collection"), void gF("html").removeClass("spf-has-filter spf-status-loading gf-left");
    if (!gF("#gf-products").length && !gF(this.selector.products).length) return gF("html").removeClass("spf-has-filter spf-status-loading gf-left"), void console.log("Products selector is not define");
    gF("#gf-products").length || gF(this.selector.products).first().attr("id", "gf-products"), gF("#gf-products").wrap('<div id="gf-grid"></div>'), gF(".load-more__icon").remove(), gF(".product-list").removeClass("collection-matrix"), gF("#CollectionAjaxResult").attr("id", ""), gF("#CollectionAjaxContent").attr("id", ""), 796 == globofilter.shop.themeStoreId && gF(".template-search #gf-grid").wrap('<div class="page-width"></div>'), 450 == globofilter.shop.themeStoreId && (gF("#gf-grid").wrap('<div class="row"></div>'), gF("#gf-products").removeClass("blocklayout")), 829 == globofilter.shop.themeStoreId && (gF("#gf-products").removeClass("card-list__column"), gF(".card-list.grid").removeClass("card-list").removeClass("grid")), 677 == globofilter.shop.themeStoreId && gF("#gf-products").removeClass("jiggly-split product-list cf"), gF("#gf-tree").length ? (3 == globofilter.filter.layout || windowSize < 768) && gF("#gf-tree").appendTo("body") : 3 == globofilter.filter.layout || windowSize < 768 ? gF('<div id="gf-tree"></div>').appendTo("body") : 857 == globofilter.shop.themeStoreId && 1 == globofilter.filter.layout && gF(".grid__item--sidebar").length ? gF('<div id="gf-tree"></div>').appendTo(".grid__item--sidebar") : 801 == globofilter.shop.themeStoreId && 1 == globofilter.filter.layout && gF(".collection-sidebar-wrapper").length ? gF('<div id="gf-tree"></div>').appendTo(".collection-sidebar-wrapper") : 464 == globofilter.shop.themeStoreId && 1 == globofilter.filter.layout && gF(".sidebar").length ? gF('<div id="gf-tree"></div>').appendTo(".sidebar") : 686 == globofilter.shop.themeStoreId && 1 == globofilter.filter.layout && gF("#sidebar").length ? gF('<div id="gf-tree"></div>').appendTo("#sidebar") : gF("body").hasClass("warehouse--v1") && gF(".layout .layout__section.layout__section--secondary .card").length ? gF('<div id="gf-tree"></div>').prependTo(".layout .layout__section.layout__section--secondary .card") : gF('<div id="gf-tree"></div>').insertBefore("#gf-grid"), gF("#gf-grid").prepend(gF("#gspfFilterSort").html()), gF(window).on("resize", function() {
        (window.innerWidth ? window.innerWidth : 0 != document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth) < 768 ? 3 != globofilter.filter.layout && 0 == gF("body > #gf-tree").length && gF("#gf-tree").appendTo("body") : gF("body > #gf-tree").length > 0 && gF("#gf-tree").insertBefore("#gf-grid")
    }), gF(this.selector.pagination).length ? gF(this.selector.pagination).attr("id", "gf_pagination_wrap").appendTo("#gf-grid") : gF("#gf-grid").append('<div id="gf_pagination_wrap"></div>'), this.setDefaultParams();
    var e = this.getFilterParams();
    this.queryParams = this.mergeObject(this.queryParams, e), this.getFilterData("all", !0)
}, GloboFilter.prototype.setDefaultParams = function() {
    var t = this.mergeObject({}, this.queryParams);
    t.filter_id = t.hasOwnProperty("filter_id") ? t.filter_id : this.filter.id, t.shop = t.hasOwnProperty("shop") ? t.shop : this.shop.domain, t.collection = t.hasOwnProperty("collection") ? t.collection : this.collection.id, t.sort_by = t.hasOwnProperty("sort_by") ? t.sort_by : this.collection.sort, null != this.collection.tags && "" != this.collection.tags && (t.currentTags = this.collection.tags), null != this.collection.excludeTags && "" != this.collection.excludeTags && (t.excludeTags = this.collection.excludeTags), null != this.collection.vendor && "" != this.collection.vendor && (t.vendor = this.collection.vendor), null != this.collection.type && "" != this.collection.type && (t.type = this.collection.type), null != this.collection.term && "" != this.collection.term && (t.q = this.collection.term), this.queryParams = t
}, GloboFilter.prototype.getFilterParams = function() {
    var t = {},
        e = window.location.search;
    if ((e = void 0 === e || !1 === e ? window.location.search : "?" + e.split("?")[1]).length)
        for (var i, n = 0, r = e.substr(1).split("&"); n < r.length; n++)
            if ((i = r[n].split("=")).length > 1) {
                var o = decodeURIComponent(i[0]),
                    s = decodeURIComponent(i[1]);
                if (o.indexOf("gf_") > -1) {
                    t.hasOwnProperty("filter") || (t.filter = {});
                    var a = parseInt(o.replace("gf_", ""));
                    s.indexOf("+") > -1 ? t.filter[a] = s.split("+") : t.filter[a] = [s.toString()]
                } else t.hasOwnProperty(o) ? t[o].push(s.toString()) : t[o] = s.toString()
            } return t
}, GloboFilter.prototype.generateUrl = function(t) {
    window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
    var e = Object.assign({}, t),
        i = window.location.origin + window.location.pathname;
    return e.hasOwnProperty("filter") && (Object.keys(e.filter).map(function(t, i) {
        var n = e.filter[t].map(function(t, e) {
            return t
        });
        e["gf_" + t] = n.join("+")
    }), delete e.filter), delete e.filter_id, delete e.shop, delete e.collection, delete e.event, delete e.currentTags, delete e.excludeTags, e.hasOwnProperty("page") && 1 == e.page && delete e.page, e.hasOwnProperty("sort_by") && e.sort_by == this.collection.sort && delete e.sort_by, Object.keys(e).length > 0 && (i += "?" + Object.keys(e).map(function(t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
    }).join("&")), {
        url: i,
        params: t
    }
}, GloboFilter.prototype.buildFilterTree = function(t) {
    var e = GLiquid.parse(gF("#gspfFilterTree").html());
    return t.filters = t.filters.map(function(t) {
        return "Collection" == t.attribute && t.tree && (t.tree = t.tree.map(function(e) {
            var i = t.values.find(function(t) {
                return t.value + "" == e.id + ""
            });
            return i ? (e.label = i.label, e.value = i.value, e.count = i.count, e.selected = i.selected, e.children && (e.children = e.children.map(function(e) {
                var i = t.values.find(function(t) {
                    return t.value + "" == e.id + ""
                });
                return i ? (e.label = i.label, e.value = i.value, e.count = i.count, e.selected = i.selected, e.children && (e.children = e.children.map(function(e) {
                    var i = t.values.find(function(t) {
                        return t.value + "" == e.id + ""
                    });
                    return i ? (e.label = i.label, e.value = i.value, e.count = i.count, e.selected = i.selected) : e.delete = !0, e
                }).filter(function(t) {
                    return !t.delete
                }))) : e.delete = !0, e
            }).filter(function(t) {
                return !t.delete
            }))) : e.delete = !0, e
        }).filter(function(t) {
            return !t.delete
        })), t
    }), console.log(t.filters), e.render({
        filters: t.filters,
        has_filter: t.has_filter,
        swatches: this.shop.swatches,
        pagination: t.pagination,
        images: this.shop.images
    })
}, GloboFilter.prototype.buildPagination = function(t) {
    return 1 == t.last_page ? "" : 1 != this.filter.isLoadMore && 2 != this.filter.isLoadMore || t.hasMorePages ? 1 == this.filter.isLoadMore ? gF("#gspfPagination").length ? gF("#gspfPagination").html() : '<svg class="lds-spinner" width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(30 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(60 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(90 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(120 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(150 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(180 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(210 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(240 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(270 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(300 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(330 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#000"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate></rect></g></svg>' : 2 == this.filter.isLoadMore ? gF("#gspfPagination").length ? gF("#gspfPagination").html() : '<button onclick="loadMore()" class="btn btn-primary gf-loadmore-btn">Load More</button>' : GLiquid.parse(gF("#gspfPagination").html()).render({
        paginate: t
    }) : ""
}, GloboFilter.prototype.buildProductsHTML = function(t) {
    var e = this,
        i = GLiquid.parse(gF("#gspfProduct").html().replace(/scripttag/g, "script"));
    return productsHTML = "", section = {
        id: "collection-template",
        settings: {}
    }, void 0 !== gF("#gf-products").data("settings") && (section.settings = gF("#gf-products").data("settings")), void 0 !== gF("#gf-products").data("sectionId") && (section.id = gF("#gf-products").data("sectionId")), gF.each(t, function(t, n) {
        productHTML = i.render({
            product: e.productTransform(n),
            swatches: e.shop.swatches,
            images: e.shop.images,
            section: section,
            customer: e.customer,
            currencyFormat: window.moneyFormat
        }), productsHTML += productHTML
    }), productsHTML
}, GloboFilter.prototype.getBrowserWidth = function() {
    var t = window,
        e = document,
        i = e.documentElement,
        n = e.getElementsByTagName("body")[0];
    return t.innerWidth || i.clientWidth || n.clientWidth
}, GloboFilter.prototype.productTransform = function(t) {
    if (t.price = null, t.price_varies = !1, t.price_min = null, t.price_max = null, t.compare_at_price = null, t.compare_at_price_max = null, t.compare_at_price_min = null, t.selected_or_first_available_variant = !1, t.first_available_variant = !1, t.available = !1, Object.defineProperty(t, "type", Object.getOwnPropertyDescriptor(t, "product_type")), Object.defineProperty(t, "featured_image", Object.getOwnPropertyDescriptor(t, "image")), delete t.image, Object.defineProperty(t, "description", Object.getOwnPropertyDescriptor(t, "body_html")), delete t.body_html, t.featured_image ? (t.featured_image.aspect_ratio = t.featured_image.width / t.featured_image.height, null == t.featured_image.alt && (t.featured_image.alt = t.title)) : t.featured_image = {
            id: 0,
            src: this.shop.no_image_url,
            width: this.shop.product_image.width,
            height: this.shop.product_image.height,
            aspect_ratio: this.shop.product_image.width / this.shop.product_image.height * 100,
            alt: t.title
        }, null != t.images)
        for (var e in t.images) t.images[e].aspect_ratio = t.images[e].width / t.images[e].height, null == t.images[e].alt && (t.images[e].alt = t.title);
    for (var e in t.variants) {
        if (t.variants[e].price = parseFloat(100 * t.variants[e].price), (null == t.price_min || t.price_min > t.variants[e].price) && (t.price_min = t.variants[e].price), (null == t.price_max || t.price_max < t.variants[e].price) && (t.price_max = t.variants[e].price), t.variants[e].available && (null == t.price || t.price > t.variants[e].price) && (t.price = t.variants[e].price), t.variants[e].compare_at_price && (t.variants[e].compare_at_price = parseFloat(100 * t.variants[e].compare_at_price), (null == t.compare_at_price_min || t.compare_at_price_min > t.variants[e].compare_at_price) && (t.compare_at_price_min = t.variants[e].compare_at_price), (null == t.compare_at_price_max || t.compare_at_price_max < t.variants[e].compare_at_price) && (t.compare_at_price_max = t.variants[e].compare_at_price), t.variants[e].available && (null == t.compare_at_price || t.compare_at_price > t.variants[e].compare_at_price) && (t.compare_at_price = t.variants[e].compare_at_price)), t.variants[e].image_id)
            for (var i in t.images) t.images[i].id == t.variants[e].image_id && (t.variants[e].image = t.images[i]);
        t.variants[e].available && !t.first_available_variant && (t.first_available_variant = t.variants[e], t.available = !0), t.variants[e].selected && !t.selected_or_first_available_variant && (t.selected_or_first_available_variant = t.variants[e]), t.variants[e].options = [], t.variants[e].option1 && t.variants[e].options.push(t.variants[e].option1), t.variants[e].option2 && t.variants[e].options.push(t.variants[e].option2), t.variants[e].option3 && t.variants[e].options.push(t.variants[e].option3)
    }
    return t.first_available_variant || (t.first_available_variant = t.variants[0]), t.selected_or_first_available_variant || (t.selected_or_first_available_variant = t.first_available_variant), t.price_varies = t.price_min < t.price_max, null == t.price && (t.price = t.price_min), null == t.compare_at_price && (t.compare_at_price = t.compare_at_price_min), t.url = (globofilter.collection.handle ? "/collections/" + globofilter.collection.handle : "") + "/products/" + t.handle, t.tags = null != t.tags ? t.tags : [], t
}, GloboFilter.prototype.revertFilter = function() {
    gF("html").removeClass("gf-left gf-top_one spf-loading gf-offcanvas swatch-round spf-has-filter spf-status-loading spf-status-failed spf-status-loaded spf-filtered gf-products-hidden"), globofilter.shop.themeStoreId && gF("html").removeClass("theme-store-id-" + globofilter.shop.themeStoreId), gF("#gf-products, #gf-grid, #gf_pagination_wrap").attr("id", ""), gF("#gf-tree, .gf-sort-wrap").remove()
}, GloboFilter.prototype.beforeGetFilterData = function() {
    gF("html").addClass("spf-loading"), 0 == gF("#gf-tree .gf-tree-overlay").length && gF("#gf-tree").append(this.template.loading)
}, GloboFilter.prototype.getFilterData = function(t, e) {
    if (e = e || !1, "loadmore" == t && (e = !1), e) {
        var i = globofilter.generateUrl(this.queryParams);
        window == window.top && history.pushState(i.params, "", i.url)
    }
    var n = this;
    this.queryParams.event = t, gF.ajax({
        url: n.api.filterUrl,
        type: "get",
        data: gF.param(this.queryParams),
        dataType: "json",
        beforeSend: function() {
            n.beforeGetFilterData(), gF("html").addClass("spf-status-loading")
        },
        success: function(t) {
            t.processing ? n.revertFilter() : (n.data = Object.assign(n.data, Object.assign({}, t)), "complete" == document.readyState && gF("#gf-products").length ? n.renderUI(t) : gF(document).ready(function() {
                n.renderUI(t)
            }))
        },
        done: function() {
            gF("html").removeClass("spf-status-loading").addClass("spf-status-loaded")
        },
        error: function() {
            n.revertFilter()
        }
    })
}, GloboFilter.prototype.renderUI = function(t) {
    var e = this;
    if (gF("html").removeClass("gf-products-hidden spf-loading"), gF("#gf-tree .lds-spinner").remove(), t.hasOwnProperty("has_filter") && (t.has_filter ? gF("html").addClass("spf-filtered") : gF("html").removeClass("spf-filtered")), void 0 !== t.filters && (e.state.hasOwnProperty("filters") || (e.state.filters = []), t.filters.forEach(function(i, n) {
            void 0 !== e.state.filters[i.id] ? t.filters[n].is_collapse = e.state.filters[i.id] : (t.filters[n].is_collapse = i.is_collapse, e.state.filters[i.id] = t.filters[n].is_collapse)
        }), gF("#gf-tree").html(e.buildFilterTree(t)), e.buildFilterRangeSlider(), windowSize >= 768 && gF(".gf-block-scroll:visible").mCustomScrollbar({
            scrollInertia: 300
        })), void 0 !== t.products) {
        var i = t.products.length ? e.buildProductsHTML(t.products) : gF("#gf_no_products").html();
        "loadmore" == e.queryParams.event ? (gF(".gf-loadmore-replace").remove(), gF("#gf-products").append(i)) : gF("#gf-products").html(i)
    }
    gF("html").removeClass("spf-status-loading spf-status-failed").addClass("spf-status-loaded"), void 0 !== t.pagination && (e.filter.isLoadMore ? (t.pagination.hasMorePages ? gF("#gf_pagination_wrap").length ? gF("#gf_pagination_wrap").html(e.buildPagination(t.pagination)) : gF("#gf-grid").append('<div id="gf_pagination_wrap">' + e.buildPagination(t.pagination) + "</div>") : gF("#gf_pagination_wrap").remove(), gF("body").removeClass("gf-loadmore")) : gF("#gf_pagination_wrap").html(e.buildPagination(t.pagination)), gF("#gspfResultsCountTemplate").length && gF("#gspfResultsCount").length && gF("#gspfResultsCount").html(GLiquid.parse(gF("#gspfResultsCountTemplate").html()).render({
        paginate: t.pagination
    })), gF("#gspfResultsTitleTemplate").length && (document.title = GLiquid.parse(gF("#gspfResultsTitleTemplate").html()).render({
        paginate: t.pagination
    })));
    var n = e.queryParams.limit || e.collection.limit;
    gF("#setLimit").val(n), gF("#changeSortBy").val(e.queryParams.sort_by), e.renderUICallback()
}, GloboFilter.prototype.renderUICallback = function() {
    var t;
    ("function" == typeof Event ? t = new Event("globoFilterRenderCompleted") : (t = document.createEvent("Event")).initEvent("globoFilterRenderCompleted", !0, !0), window.dispatchEvent(t), "function" == typeof Event ? t = new Event("resize") : (t = document.createEvent("Event")).initEvent("resize", !0, !0), window.dispatchEvent(t), "function" == typeof Event ? t = new Event("qview-grid-updated") : (t = document.createEvent("Event")).initEvent("qview-grid-updated", !0, !0), document.dispatchEvent(t), "undefined" != typeof judgeme && (judgeme.badge(), judgeme.customizeBadges()), window._swat ? window._swat.initializeActionButtons("#gf-products") : (window.SwymCallbacks = window.SwymCallbacks || [], window.SwymCallbacks.push(function() {
        window._swat.initializeActionButtons("#gf-products")
    })), "undefined" != typeof ReloadSmartWishlist && ReloadSmartWishlist(), "undefined" != typeof iwish_addCollection && gF(".iWishAddColl.iwishcheck").on("click", function(t) {
        t.preventDefault();
        var e = gF(this).attr("data-variant");
        return iwish_addCollection(gF(this), e), !1
    }), "undefined" != typeof iwishCheckColl && iwishCheckColl(), "undefined" != typeof FHSPROD && labelInit(FHSPROD, gF), "undefined" != typeof SECOMAPP && void 0 !== SECOMAPP.pl && "function" == typeof SECOMAPP.pl.labelCollections && (SECOMAPP.pl.pisRegex = '#gf-products a[href*="/products/"]:has(img)', SECOMAPP.pl.labelCollections(!0)), void 0 !== window.SPR && (window.SPR.initDomEls(), window.SPR.loadBadges()), "undefined" != typeof yotpo) && (new Yotpo.API(yotpo).refreshWidgets(), yotpo.initWidgets());
    gF("[translatable]").addClass("translatable");
    if ((0 == gF("body > #gf-tree").length && 3 == this.filter.layout || windowSize < 768) && gF("#gf-tree").appendTo("body"), "undefined" != typeof ProductListItemView && gF(".product-list-item").length && gF(".product-list-item").each(function() {
            new ProductListItemView({
                el: this
            })
        }), gF('[name="currencies"]').length && "undefined" != typeof Currency && void 0 !== Currency.convertAll && Currency.convertAll(window.shopCurrency, gF("[name=currencies]").val()), "undefined" != typeof SCAShopify && (SCAShopify.jQuery(document).unbind("click.fb-start"), SCAShopify.loaded = !1, SCAQVinit = void 0, gF.getScript(gF('script[src*="sca-qv-"]').attr("src"))), "undefined" != typeof StampedFn && "function" == typeof StampedFn.loadBadges && StampedFn.loadBadges(), gF(".rivyo_product_review_badge").length > 0) {
        var e = gF("#th_shop_url").attr("content"),
            i = new Array;
        void 0 !== e && (e = e.replace(/^https?\:\/\//i, "")), gF(".rivyo_product_review_badge").each(function(t, n) {
            i.push(gF(this).data("handle")), t === gF(".rivyo_product_review_badge").length - 1 && gF.ajax({
                url: "//thimatic-apps.com/product_review/get_review_rating_update.php",
                type: "post",
                dataType: "json",
                data: {
                    shop: e,
                    product_handles: i
                },
                success: function(t) {
                    gF(".rivyo_product_review_badge").html(t.empty.html), gF.each(t, function(t, e) {
                        gF('.rivyo_product_review_badge[data-handle="' + t + '"]').html(e.html)
                    })
                },
                error: function(t, e) {
                    console.log(t)
                }
            })
        })
    }
    gF(".CurrencySelector__Select").length && "this.form.submit()" != gF(".CurrencySelector__Select").attr("onchange") && document.querySelectorAll(".CurrencySelector__Select").forEach(function(t) {
        var e = document.createEvent("Event");
        e.initEvent("change", !0, !0), t.dispatchEvent(e)
    });
    "undefined" != typeof DoublyGlobalCurrency && gF("select.currency-switcher").length && DoublyGlobalCurrency.convertAll(gF("select.currency-switcher").val()), ("undefined" != typeof Currency && void 0 !== Currency.moneyFormats || "undefined" != typeof ACSCurrency && void 0 !== ACSCurrency.moneyFormats) && "undefined" != typeof mlvedaload && mlvedaload(), "undefined" != typeof BOLD && void 0 !== BOLD.common && void 0 !== BOLD.common.eventEmitter && BOLD.common.eventEmitter.emit("BOLD_CURRENCY_double_check"), gF(".theme-store-id-714.spf-has-filter .button--quick-shop").mouseup(function() {
        var t = gF(this);
        gF.ajax({
            url: t.attr("href"),
            type: "get",
            dataType: "html",
            success: function(e) {
                t.closest(".product-item").append(e), t.trigger("click")
            }
        })
    }), "undefined" != typeof initQuickView && gF("#container").length && initQuickView(gF("#container")), gF("#gf_pagination_wrap a, #gf-tree a, .gf-sort-wrap a").addClass("js-no-transition").attr("data-no-instant", !0), "undefined" != typeof shop_now_handler && gF(".shop-now-button").off("click", shop_now_handler).on("click", shop_now_handler), "undefined" != typeof roar && (void 0 !== roar.currenciesCallback && roar.currenciesCallback(), void 0 !== roar.addToCart && roar.addToCart(), void 0 !== roar.addToWishlist && roar.addToWishlist(), void 0 !== roar.handleCompare && roar.handleCompare(), void 0 !== roar.removeToWishlist && roar.removeToWishlist(), void 0 !== roar.handleQuickshop && roar.handleQuickshop()), "undefined" != typeof collection && void 0 !== collection.init && collection.init()
}, GloboFilter.searchValues = function(t) {
    var e = gF(t).val(),
        i = gF(t).closest(".gf-block-content");
    "" == e ? i.find("li").show() : (i.find('li a:not([title*="' + e + '" i])').parent().hide(), i.find('li a[title*="' + e + '" i]').parent().show())
}, GloboFilter.prototype.buildFilterRangeSlider = function() {
    gF(".gf-range-slider").each(function() {
        var t = gF(this).data("id"),
            e = gF(this).data("attribute"),
            i = gF(this).data("min"),
            n = gF(this).data("max"),
            r = document.getElementById("slider-" + t),
            o = document.getElementById("ranger-" + t),
            s = document.getElementById("min-" + t),
            a = document.getElementById("max-" + t),
            l = [s.value, a.value];
        noUiSlider.create(r, {
            start: l,
            connect: !0,
            step: .01,
            range: {
                min: i,
                max: n
            },
            pips: {
                mode: "range",
                density: 20,
                format: {
                    to: function(t) {
                        return parseFloat(t.toFixed(2))
                    },
                    from: function(t) {
                        return t
                    }
                }
            }
        }), s.addEventListener("change", function() {
            r.noUiSlider.set([this.value, null]);
            var t = r.noUiSlider.get();
            t[0] != i || t[1] != n ? (o.value = t[0] + ":" + t[1], addRangeFilter(e, o.value)) : (o.value = "", removeFilter(e))
        }), a.addEventListener("change", function() {
            r.noUiSlider.set([null, this.value]);
            var t = r.noUiSlider.get();
            t[0] != i || t[1] != n ? (o.value = t[0] + ":" + t[1], addRangeFilter(e, o.value)) : (o.value = "", removeFilter(e))
        }), r.noUiSlider.on("slide", function(t, e) {
            e ? a.value = t[e] : s.value = t[e]
        }), r.noUiSlider.on("change", function(t, r) {
            t[0] != i || t[1] != n ? (o.value = t[0] + ":" + t[1], addRangeFilter(e, o.value)) : (o.value = "", removeFilter(e))
        })
    })
}, GloboFilter.prototype.parseQuery = function(t) {
    for (var e = t.split("&"), i = {}, n = 0; n < e.length; n++) {
        var r = e[n].split("="),
            o = decodeURIComponent(r[0]),
            s = decodeURIComponent(r[1]);
        if (void 0 === i[o]) i[o] = decodeURIComponent(s);
        else if ("string" == typeof i[o]) {
            var a = [i[o], decodeURIComponent(s)];
            i[o] = a
        } else i[o].push(decodeURIComponent(s))
    }
    return i
}, GloboFilter.prototype.formatMoney = function(t, e) {
    function i(t, e) {
        return void 0 === t ? e : t
    }

    function n(t, e, n, r) {
        if (e = i(e, 2), n = i(n, ","), r = i(r, "."), isNaN(t) || null == t) return 0;
        var o = (t = (t / 100).toFixed(e)).split(".");
        return o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n) + (o[1] ? r + o[1] : "")
    }
    "string" == typeof t && (t = t.replace(".", ""));
    var r = "",
        o = /\{\{\s*(\w+)\s*\}\}/,
        s = e;
    switch (s.match(o)[1]) {
        case "amount":
            r = n(t, 2);
            break;
        case "amount_no_decimals":
            r = n(t, 0);
            break;
        case "amount_with_comma_separator":
            r = n(t, 2, ".", ",");
            break;
        case "amount_with_space_separator":
            r = n(t, 2, " ", ",");
            break;
        case "amount_with_period_and_space_separator":
            r = n(t, 2, " ", ".");
            break;
        case "amount_no_decimals_with_comma_separator":
            r = n(t, 0, ".", ",");
            break;
        case "amount_no_decimals_with_space_separator":
            r = n(t, 0, ".", "");
            break;
        case "amount_with_space_separator":
            r = n(t, 2, ",", "");
            break;
        case "amount_with_apostrophe_separator":
            r = n(t, 2, "'", ".")
    }
    return s.replace(o, r)
}, GloboFilter.prototype.mergeObject = function(t, e) {
    for (var i in e) try {
        t[i] = e[i].constructor == Object ? this.mergeObject(t[i], e[i]) : e[i]
    } catch (n) {
        t[i] = e[i]
    }
    return t
}, GloboFilter.prototype.toggleCanvas = function() {
    gF("html").toggleClass("offcanvas-open"), windowSize >= 768 && gF(".gf-block-scroll:visible").mCustomScrollbar({
        scrollInertia: 300
    }), 0 == gF("#gf-overlay").length && gF('<div id="gf-overlay"></div>').insertAfter("#gf-tree")
}, GloboFilter.prototype.quickView = function(t) {
    return gF.ajax({
        url: t + "?view=gf_quickview",
        type: "get",
        dataType: "html",
        success: function(t) {
            gF("body").addClass("modal-open").append(t), gF("#product-images-product-quickview-template").gFOwlCarousel({
                loop: !0,
                margin: 0,
                items: 1,
                dots: !0,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                nav: !0
            }), gF(".gfqv-close-modal").click(function() {
                return gF(".quick-view-modal").fadeOut(300, function() {
                    gF(".quick-view-modal").remove()
                }), gF("body").removeClass("modal-open"), !1
            }), gF(".quantity .decrease").click(function() {
                if ((t = parseInt(gF(this).next("input").val()) - 1) < 1) var t = 1;
                gF(this).next().val(t)
            }), gF(".quantity .increase").click(function() {
                var t = parseInt(gF(this).prev("input").val());
                gF(this).prev().val(t + 1)
            }), gF("#gfqv-select").change(function() {
                var t = JSON.parse(document.getElementById("ProductJson-product-template").innerHTML),
                    e = gF(this).val();
                gF.each(t.variants, function(t, i) {
                    if (i.id == e)
                        if (i && i.available) {
                            gF("#gfqv-btn").removeAttr("disabled").removeClass("disabled");
                            var n = GLiquid.parse("{{ price | money }}");
                            if (gF("#product-quickview-price .money").html(n.render({
                                    price: i.price
                                })), i.price < i.compare_at_price) {
                                var r = GLiquid.parse("{{ price | money }}");
                                gF("#product-quickview-oldprice .money").html(r.render({
                                    price: i.compare_at_price
                                })).show()
                            } else gF("#product-quickview-oldprice .money").hide()
                        } else gF("#quickview-template-submit").addClass("disabled").attr("disabled", "disabled")
                })
            })
        }
    }), !1
};