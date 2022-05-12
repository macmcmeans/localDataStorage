/*/
/////////////////////////////////////////////////////////////////////////////////////////
localDataStorage 2.0.1
https://gitcdn.link/cdn/macmcmeans/localDataStorage/master/localDataStorage-2.0.1.trim.js
/////////////////////////////////////////////////////////////////////////////////////////
Copyright 2017 - 2022 William P. "Mac" McMeans
LICENSE: BSD 3-Clause License
*/
const localDataStorage = function(e, r) {
    return function(e, r) {
        "use strict";
        let t = {
                this: ["is", "not"],
                quite: ["cryptographic", "strength"]
            },
            n = 0;
        const o = "𝗡𝗼 𝘀𝗲𝗲𝗱 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱",
            i = "𝗡𝗼 𝗸𝗲𝘆 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱",
            f = "𝗡𝗼 𝗸𝗲𝘆 𝘃𝗮𝗹𝘂𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱",
            a = "𝗩𝗮𝗹𝘂𝗲 𝗶𝘀 𝗮𝗻 𝘂𝗻𝘀𝘂𝗽𝗽𝗼𝗿𝘁𝗲𝗱 𝘁𝘆𝗽𝗲",
            l = "𝗞𝗲𝘆 𝗱𝗼𝗲𝘀 𝗻𝗼𝘁 𝗲𝘅𝗶𝘀𝘁",
            u = "𝗞𝗲𝘆 𝗺𝘂𝘀𝘁 𝗯𝗲 𝗮𝗻 𝗔𝗿𝗿𝗮𝘆 𝗞𝗲𝘆",
            s = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝗱𝗮𝘁𝗮 𝘁𝘆𝗽𝗲",
            c = "𝗡𝗼 𝗱𝗮𝘁𝗮 𝘁𝘆𝗽𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱",
            h = "𝗜𝗹𝗹𝗲𝗴𝗮𝗹 𝗶𝗻𝗱𝗲𝘅 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱",
            d = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝘀𝘁𝗿𝗶𝗻𝗴 𝗶𝗻𝗱𝗲𝘅 𝗸𝗲𝘆𝘄𝗼𝗿𝗱",
            g = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝗻𝘂𝗺𝗲𝗿𝗶𝗰 𝗶𝗻𝗱𝗲𝘅",
            w = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝗶𝗻𝗱𝗲𝘅",
            v = "𝗡𝗼 𝘀𝘁𝗿𝗶𝗻𝗴 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱",
            y = ["array", "bigint", "boolean", "date", "float", "integer", "null", "number", "object", "string"],
            b = String.fromCodePoint(128),
            m = String.fromCodePoint(129),
            p = String.fromCodePoint(141),
            E = String.fromCodePoint(142),
            S = String.fromCodePoint(143),
            N = String.fromCodePoint(144),
            k = String.fromCodePoint(149),
            O = String.fromCodePoint(157),
            A = String.fromCodePoint(158),
            C = "__storage_test__",
            J = (new Date).getTime() + ":" + (1e8 * Math.random() | 0),
            x = "" === e ? "" : void 0 === e ? J : e,
            I = function(e) {
                let r, t = C;
                try {
                    return (r = window[e]).setItem(t, t), r.removeItem(t), !0
                } catch (e) {
                    return !1
                }
            }("localStorage"),
            j = function() {
                return function(e) {
                    var r, t, n, o, i, f = new Uint32Array(3),
                        a = "",
                        l = "aleaPRNG 1.1";

                    function u(e) {
                        var i, f, l = (i = 4022871197, (f = function(e) {
                            for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                                var n = .02519603282416938 * (i += e.charCodeAt(r));
                                n -= i = n >>> 0, i = (n *= i) >>> 0, i += 4294967296 * (n -= i)
                            }
                            return 2.3283064365386963e-10 * (i >>> 0)
                        }).version = "Mash 0.9", f);
                        r = l(" "), t = l(" "), n = l(" "), o = 1;
                        for (var u = 0; u < e.length; u++)(r -= l(e[u])) < 0 && (r += 1), (t -= l(e[u])) < 0 && (t += 1), (n -= l(e[u])) < 0 && (n += 1);
                        a = l.version, l = null
                    }

                    function s(e) {
                        return parseInt(e, 10) === e
                    }
                    var c = function() {
                        var e = 2091639 * r + 2.3283064365386963e-10 * o;
                        return r = t, t = n, n = e - (o = 0 | e)
                    };
                    return c.fract53 = function() {
                        return c() + 1.1102230246251565e-16 * (2097152 * c() | 0)
                    }, c.int32 = function() {
                        return 4294967296 * c()
                    }, c.cycle = function(e) {
                        (e = void 0 === e ? 1 : +e) < 1 && (e = 1);
                        for (var r = 0; r < e; r++) c()
                    }, c.range = function() {
                        var e, r;
                        return r = 1 === arguments.length ? arguments[e = 0] : (e = arguments[0], arguments[1]), arguments[0] > arguments[1] && (e = arguments[1], r = arguments[0]), s(e) && s(r) ? Math.floor(c() * (r - e + 1)) + e : c() * (r - e) + e
                    }, c.restart = function() {
                        u(i)
                    }, c.seed = function() {
                        u(Array.prototype.slice.call(arguments))
                    }, c.version = function() {
                        return l
                    }, c.versions = function() {
                        return l + ", " + a
                    }, 0 === e.length && (window.crypto.getRandomValues(f), e = [f[0], f[1], f[2]]), u(i = e), c
                }(Array.prototype.slice.call(arguments))
            },
            M = function(e) {
                let r, t = "";
                const n = function(r) {
                        return e.includes(r)
                    },
                    o = function(e) {
                        return e.substr(0, e.indexOf(r))
                    },
                    i = function(e) {
                        return JSON.parse(e, X)
                    };
                if (void 0 === e) throw new Error("𝗡𝗼 𝘃𝗮𝗹𝘂𝗲 𝘁𝗼 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝗳𝗿𝗼𝗺");
                if (function() {
                        let e = arguments.length,
                            r = Object.values(arguments);
                        return {
                            areIn(t) {
                                for (let n = 0; n < e; n++)
                                    if (r[n] === t) return !0;
                                return !1
                            },
                            total: () => e
                        }
                    }(O, k, S, p, E, N, m).areIn(e.substr(-1, 1))) "" === t && n(r = m) && ((e = o(e)).includes(b) && (e = e.substr(1, e.length), e = ce(e)), t = e), "" === t && n(r = p) && (t = i(e = o(e)), t = new Date(t)), "" === t && n(r = O) && (t = i(e = o(e))), "" === t && n(r = E) && (e = o(e), t = parseFloat(e)), "" === t && n(r = S) && (t = "1" === (e = o(e))), "" === t && n(r = k) && (e = o(e), t = BigInt(e)), "" === t && n(r = N) && (t = i(e = o(e)));
                else if ("presumed bigint" === Y("VALUE_OVERRIDE", e)) e = e.substring(0, e.length - 1), t = BigInt(e);
                else if ("{" === e[0] || "[" === e[0]) try {
                    t = i(e)
                } catch (r) {
                    t = e
                } else t = e == +e ? +e : e;
                return t
            },
            P = function(e) {
                let r = "",
                    t = "";
                if (void 0 === e) throw new Error("𝗡𝗼 𝘃𝗮𝗹𝘂𝗲 𝘁𝗼 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝘁𝗼");
                return "string" == typeof e ? (t = "string", r = m, H(e) && (t = "compressed string", e = T(e), e = b + e)) : "object" == typeof e && e instanceof Date ? (t = "date", r = p, e = JSON.stringify(e, $)) : "object" == typeof e && e instanceof Array ? (t = "array", r = O, e = JSON.stringify(e, $)) : "number" == typeof e ? (t = "integer", -1 !== (e + "").indexOf(".") && (t = "float"), r = E, e += "") : "boolean" == typeof e ? (t = "boolean", r = S, e = Number(e), e += "") : "bigint" == typeof e ? (t = "bigint", r = k, e += "") : "object" == typeof e && (t = "object", null === e && (t = "null"), r = N, e = JSON.stringify(e, $)), "" !== r && (e += r), [e, t]
            },
            T = function(e) {
                return le.compress(e)
            },
            _ = function(e, r = !1) {
                let t = 0,
                    n = 1024;
                for (r && (n = 1e3); e > n;) t++, e /= n;
                return e = (e = 1 == e ? "1 byte" : e.toFixed(2) + " " + ["bytes", "KB", "MB"][t]).replace(".00 ", " ")
            },
            D = function(e, r) {
                var t, n = e.length;
                for (r = r || function() {
                        var e = new Uint32Array(2);
                        return window.crypto.getRandomValues(e), +("0." + e[0] + e[1])
                    }; --n;) e[t = Math.floor(r() * (n + 1))] = [e[n], e[n] = e[t]][0]
            },
            L = function(e, r) {
                for (var t, n = new Array(e.length), o = new Array(e.length), i = e.length, f = 0; f < i; f++) o[f] = f;
                for (f = i - 1; f > 0; f--) t = Math.floor(r() * (f + 1)), o[f] = [o[t], o[t] = o[f]][0];
                for (f = 0; f < i; f++) n[o[f]] = e[f];
                return n
            },
            R = function(e) {
                let r = .059886774281039834 * e;
                return r += 21845.33332824707, r -= e = 0 | r, e = 0 | (r *= e), (e ^= 4294967296 * (r -= e)) >>> 0
            },
            K = function(e) {
                if (void 0 === e) throw new Error(i);
                let r = ne(e);
                return r ? M(r) : void 0
            },
            B = function(e = !1) {
                let r, t = U(),
                    n = new Array;
                for (let o = localStorage.length; o--;)(r = localStorage.key(o)).substr(0, t.length) === t && (e && (r = ue(r)), n.push(r));
                return n
            },
            q = function(e) {
                for (var r = (e = "" + e).length, t = r - 1; t >= 0; t--) {
                    let n = e.charCodeAt(t);
                    n > 127 && 2047 >= n ? r++ : n > 2047 && 65535 >= n && (r += 2), n >= 56320 && 57343 >= n && t--
                }
                return r
            },
            V = function(e) {
                return se(e = "" + e).length
            },
            U = function() {
                return x + "."
            },
            z = function(e) {
                if (void 0 === e) return;
                let r = "bigint" == typeof e ? e.toString() : JSON.stringify(e, $),
                    t = 0,
                    n = "",
                    o = "";
                const i = function(e) {
                    return ye(e)()
                };
                var f;
                n = e instanceof Array ? "ARRAY1" : "bigint" == typeof e ? "BIGINT2" : "boolean" == typeof e ? "BOOLEAN4" : e instanceof Date ? "DATE8" : "number" == typeof e ? (e + "").includes(".") ? "FLOAT16" : "INTEGER32" : "string" == typeof e ? "STRING64" : "OBJECT128", o = r + r.length + n + i(r) + i((f = r, Array.from(f).reverse().join("")));
                for (let e = 0; e < o.length; e++) t += o.codePointAt(e);
                return [t, o]
            },
            G = function(e) {
                return U() + e
            },
            F = function(e) {
                return K(G(e))
            },
            Q = function(e) {
                return P(e)[1]
            },
            Y = function(e, r) {
                if (void 0 === e) throw new Error(i);
                let n = "",
                    o = "";
                const f = function(e) {
                    return o.includes(e)
                };
                if (void 0 === r) {
                    if (!Z(e)) return;
                    o = ne(e)
                } else o = r;
                return ! function() {
                    let e = arguments.length,
                        r = Object.values(arguments);
                    return {
                        areIn(t) {
                            for (let n = 0; n < e; n++)
                                if (r[n] === t) return !0;
                            return !1
                        },
                        total: () => e
                    }
                }(O, k, S, p, E, N, m).areIn(o.substr(-1, 1)) ? "[" === o[0] ? n = "presumed array" : "{" === o[0] ? n = "presumed object" : "n" === o.substr(-1, 1) && parseInt(o, 10) === +o.substring(0, o.length - 1) ? n = "presumed bigint" : o == +o ? n = "presumed number" : (o = be(o, t, e.replace(U(), "")), o = he(o, t, e.replace(U(), "")), f(m) ? n = "obfuscated string" : f(k) ? n = "obfuscated bigint" : f(p) ? n = "obfuscated date" : f(O) ? n = "obfuscated array" : f(E) ? (n = "obfuscated number", n = o.includes(".") ? "obfuscated float" : "obfuscated integer") : n = f(S) ? "obfuscated boolean" : f(N) ? "obfuscated object" : "presumed string") : (f(m) && (n = "string", f(b) && (n = "compressed string")), "" === n && f(p) && (n = "date"), "" === n && f(O) && (n = "array"), "" === n && f(E) && (n = "number", n = o.includes(".") ? "float" : "integer"), "" === n && f(S) && (n = "boolean"), "" === n && f(k) && (n = "bigint"), "" === n && f(N) && (n = "object", o[0] + o[1] + o[2] + o[3] === "null" && (n = "null"))), n
            },
            Z = function(e) {
                return null !== ne(e)
            },
            H = function(e) {
                let r = !1,
                    t = !1,
                    n = le.compress(e);
                return r = e === le.decompress(n), t = q(n) + 4 < q(e), !(!r || !t)
            },
            X = function(e, r) {
                return "string" == typeof r && "`" === r.substr(-1, 1) && "n" === r.substr(-2, 1) && parseInt(r, 10) === +r.substring(0, r.length - 2) ? BigInt(r.substring(0, r.length - 2)) : r
            },
            $ = function(e, r) {
                return "bigint" == typeof r ? r.toString() + "n`" : r
            },
            W = function(e) {
                let r = B().join(""),
                    t = 0;
                return void 0 === e ? t = q(r) : Z(e) && (t = q(e)), t *= 2
            },
            ee = e => () => (2 ** 31 - 1 & (e = Math.imul(48271, e))) / 2 ** 31,
            re = e => r => (e = e + 1831565813 | 0, r = Math.imul(e ^ e >>> 15, 1 | e), r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 2 ** 32),
            te = function(e) {
                return e.sort((e, r) => ("$" === (e + "").substr(0, 1) ? (e + "").substr(1, (e + "").length) : e + "").localeCompare(r, "en", {
                    ignorePunctuation: !0,
                    numeric: !0,
                    sensitivity: "base"
                }))
            },
            ne = function(e) {
                try {
                    var r = localStorage.getItem(e)
                } catch (e) {
                    throw new Error("𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝗿𝗲𝗮𝗱𝗶𝗻𝗴 𝗳𝗿𝗼𝗺 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲")
                }
                return r
            },
            oe = function(e) {
                return Array.from(e).reverse().join("")
            },
            ie = function(e, r, t, n, o, i, f, a, l) {
                let u = new Date,
                    s = new CustomEvent("localDataStorage", {
                        detail: {
                            message: e,
                            method: r,
                            oldkey: t,
                            newkey: n,
                            oldval: "bigint" === f ? o : JSON.stringify(o, $),
                            newval: "bigint" === a ? i : JSON.stringify(i, $),
                            oldtype: f,
                            newtype: a,
                            prefix: l,
                            timestamp: +u,
                            date: u
                        },
                        bubbles: !1,
                        cancelable: !0
                    });
                document.dispatchEvent(s)
            },
            fe = function() {
                let e, r, t = new Array,
                    n = 0;
                for (let e = localStorage.length; e--;)(r = localStorage.key(e)).includes(U()) && (t[n++] = ne(r));
                return 0 === (e = function(e) {
                    let r = new Array,
                        t = new Array,
                        n = e.length;
                    for (let o = 0; o < n; o++) t = e[o], e.lastIndexOf(t) !== o && -1 === r.indexOf(t) && r.push(t);
                    for (let e = 0, t = r.length; e < t; e++) r[e] = M(r[e]);
                    return r
                }(t)).length ? [] : e
            },
            ae = function(e, r, t) {
                let n = ye(t),
                    o = re(n()),
                    i = e,
                    f = "",
                    a = "",
                    l = z(r)[0] + z(t)[0],
                    u = R(l) + "",
                    s = oe(u),
                    c = Number(s),
                    h = j("" + c + l, u, s),
                    d = Number((c + "").charAt(2)) + Number((c + "").charAt(1)) + Number((c + "").charAt(0)),
                    g = V(z(t)[1]) + V(z(r)[1]) + d,
                    w = JSON.stringify(r, $),
                    v = ye(w),
                    y = ee(v()),
                    b = j();
                const m = function(e, r) {
                    return Math.floor(b() * (r - e + 1)) + e
                };
                for (let e = g; e--;) h() < .75 && o(), o() > .75 && y();
                if (o() > .5) {
                    f = e.split(" ");
                    for (let e = 0; e < f.length; e++)(a = f[e]).length > 2 && (a = a.split(""), D(a, o), a = a.join("")), f[e] = a;
                    e = f.join(" ")
                }
                return e = (e += A + function(e) {
                    let r = "",
                        t = m(1, e.length);
                    for (let n = t < 4 ? t + b.range(3, 6) : t; n--;) r += String.fromCodePoint(e.codePointAt(m(0, e.length - 1)) + b.range(2, 20));
                    return r
                }(i)).split(""), D(e, h), e = e.join("")
            },
            le = function() {
                function e() {}
                return e.codebook = {
                    " ": 0,
                    the: 1,
                    e: 2,
                    t: 3,
                    a: 4,
                    of: 5,
                    o: 6,
                    and: 7,
                    i: 8,
                    n: 9,
                    s: 10,
                    "e ": 11,
                    r: 12,
                    " th": 13,
                    " t": 14,
                    in: 15,
                    he: 16,
                    th: 17,
                    h: 18,
                    "he ": 19,
                    to: 20,
                    "\r\n": 21,
                    l: 22,
                    "s ": 23,
                    d: 24,
                    " a": 25,
                    an: 26,
                    er: 27,
                    c: 28,
                    " o": 29,
                    "d ": 30,
                    on: 31,
                    " of": 32,
                    re: 33,
                    "of ": 34,
                    "t ": 35,
                    ", ": 36,
                    is: 37,
                    u: 38,
                    at: 39,
                    "   ": 40,
                    "n ": 41,
                    or: 42,
                    which: 43,
                    f: 44,
                    m: 45,
                    as: 46,
                    it: 47,
                    that: 48,
                    "\n": 49,
                    was: 50,
                    en: 51,
                    "  ": 52,
                    " w": 53,
                    es: 54,
                    " an": 55,
                    " i": 56,
                    "\r": 57,
                    "f ": 58,
                    g: 59,
                    p: 60,
                    nd: 61,
                    " s": 62,
                    "nd ": 63,
                    "ed ": 64,
                    w: 65,
                    ed: 66,
                    "http://": 67,
                    for: 68,
                    te: 69,
                    ing: 70,
                    "y ": 71,
                    The: 72,
                    " c": 73,
                    ti: 74,
                    "r ": 75,
                    his: 76,
                    st: 77,
                    " in": 78,
                    ar: 79,
                    nt: 80,
                    ",": 81,
                    " to": 82,
                    y: 83,
                    ng: 84,
                    " h": 85,
                    with: 86,
                    le: 87,
                    al: 88,
                    "to ": 89,
                    b: 90,
                    ou: 91,
                    be: 92,
                    were: 93,
                    " b": 94,
                    se: 95,
                    "o ": 96,
                    ent: 97,
                    ha: 98,
                    "ng ": 99,
                    their: 100,
                    '"': 101,
                    hi: 102,
                    from: 103,
                    " f": 104,
                    "in ": 105,
                    de: 106,
                    ion: 107,
                    me: 108,
                    v: 109,
                    ".": 110,
                    ve: 111,
                    all: 112,
                    "re ": 113,
                    ri: 114,
                    ro: 115,
                    "is ": 116,
                    co: 117,
                    "f t": 118,
                    are: 119,
                    ea: 120,
                    ". ": 121,
                    her: 122,
                    " m": 123,
                    "er ": 124,
                    " p": 125,
                    "es ": 126,
                    by: 127,
                    they: 128,
                    di: 129,
                    ra: 130,
                    ic: 131,
                    not: 132,
                    "s,": 133,
                    "d t": 134,
                    "at ": 135,
                    ce: 136,
                    la: 137,
                    "h ": 138,
                    ne: 139,
                    "as ": 140,
                    tio: 141,
                    "on ": 142,
                    "n t": 143,
                    io: 144,
                    we: 145,
                    " a ": 146,
                    om: 147,
                    ", a": 148,
                    "s o": 149,
                    ur: 150,
                    li: 151,
                    ll: 152,
                    ch: 153,
                    had: 154,
                    this: 155,
                    "e t": 156,
                    "g ": 157,
                    "e\r\n": 158,
                    " wh": 159,
                    ere: 160,
                    " co": 161,
                    "e o": 162,
                    "a ": 163,
                    us: 164,
                    " d": 165,
                    ss: 166,
                    "\n\r\n": 167,
                    "\r\n\r": 168,
                    '="': 169,
                    " be": 170,
                    " e": 171,
                    "s a": 172,
                    ma: 173,
                    one: 174,
                    "t t": 175,
                    "or ": 176,
                    but: 177,
                    el: 178,
                    so: 179,
                    "l ": 180,
                    "e s": 181,
                    "s,": 182,
                    no: 183,
                    ter: 184,
                    " wa": 185,
                    iv: 186,
                    ho: 187,
                    "e a": 188,
                    " r": 189,
                    hat: 190,
                    "s t": 191,
                    ns: 192,
                    "ch ": 193,
                    wh: 194,
                    tr: 195,
                    ut: 196,
                    "/": 197,
                    have: 198,
                    "ly ": 199,
                    ta: 200,
                    " ha": 201,
                    " on": 202,
                    tha: 203,
                    "-": 204,
                    " l": 205,
                    ati: 206,
                    "en ": 207,
                    pe: 208,
                    " re": 209,
                    there: 210,
                    ass: 211,
                    si: 212,
                    " fo": 213,
                    wa: 214,
                    ec: 215,
                    our: 216,
                    who: 217,
                    its: 218,
                    z: 219,
                    fo: 220,
                    rs: 221,
                    ">": 222,
                    ot: 223,
                    un: 224,
                    "<": 225,
                    im: 226,
                    "th ": 227,
                    nc: 228,
                    ate: 229,
                    "><": 230,
                    ver: 231,
                    ad: 232,
                    " we": 233,
                    ly: 234,
                    ee: 235,
                    " n": 236,
                    id: 237,
                    " cl": 238,
                    ac: 239,
                    il: 240,
                    "</": 241,
                    rt: 242,
                    " wi": 243,
                    div: 244,
                    "e, ": 245,
                    " it": 246,
                    whi: 247,
                    " ma": 248,
                    ge: 249,
                    x: 250,
                    "e c": 251,
                    men: 252,
                    ".com": 253
                }, e.reverse_codebook = [" ", "the", "e", "t", "a", "of", "o", "and", "i", "n", "s", "e ", "r", " th", " t", "in", "he", "th", "h", "he ", "to", "\r\n", "l", "s ", "d", " a", "an", "er", "c", " o", "d ", "on", " of", "re", "of ", "t ", ", ", "is", "u", "at", "   ", "n ", "or", "which", "f", "m", "as", "it", "that", "\n", "was", "en", "  ", " w", "es", " an", " i", "\r", "f ", "g", "p", "nd", " s", "nd ", "ed ", "w", "ed", "http://", "for", "te", "ing", "y ", "The", " c", "ti", "r ", "his", "st", " in", "ar", "nt", ",", " to", "y", "ng", " h", "with", "le", "al", "to ", "b", "ou", "be", "were", " b", "se", "o ", "ent", "ha", "ng ", "their", '"', "hi", "from", " f", "in ", "de", "ion", "me", "v", ".", "ve", "all", "re ", "ri", "ro", "is ", "co", "f t", "are", "ea", ". ", "her", " m", "er ", " p", "es ", "by", "they", "di", "ra", "ic", "not", "s, ", "d t", "at ", "ce", "la", "h ", "ne", "as ", "tio", "on ", "n t", "io", "we", " a ", "om", ", a", "s o", "ur", "li", "ll", "ch", "had", "this", "e t", "g ", "e\r\n", " wh", "ere", " co", "e o", "a ", "us", " d", "ss", "\n\r\n", "\r\n\r", '="', " be", " e", "s a", "ma", "one", "t t", "or ", "but", "el", "so", "l ", "e s", "s,", "no", "ter", " wa", "iv", "ho", "e a", " r", "hat", "s t", "ns", "ch ", "wh", "tr", "ut", "/", "have", "ly ", "ta", " ha", " on", "tha", "-", " l", "ati", "en ", "pe", " re", "there", "ass", "si", " fo", "wa", "ec", "our", "who", "its", "z", "fo", "rs", ">", "ot", "un", "<", "im", "th ", "nc", "ate", "><", "ver", "ad", " we", "ly", "ee", " n", "id", " cl", "ac", "il", "</", "rt", " wi", "div", "e, ", " it", "whi", " ma", "ge", "x", "e c", "men", ".com"], e.flush_verbatim = function(e) {
                    var r, t, n, o;
                    for (t = [], e.length > 1 ? (t.push(String.fromCharCode(255)), t.push(String.fromCharCode(e.length - 1))) : t.push(String.fromCharCode(254)), n = 0, o = e.length; n < o; n++) r = e[n], t.push(r);
                    return t
                }, e.compress = function(r) {
                    var t, n, o, i, f, a, l;
                    for (a = "", f = [], o = 0; o < r.length;) {
                        for (n = !1, i = 7, r.length - o < 7 && (i = r.length - o), i = l = i; i <= 0 ? l < 0 : l > 0; i = i <= 0 ? ++l : --l)
                            if (null != (t = e.codebook[r.substr(o, i)])) {
                                a && (f = f.concat(e.flush_verbatim(a)), a = ""), f.push(String.fromCharCode(t)), o += i, n = !0;
                                break
                            }
                        n || (a += r[o], o++, 256 === a.length && (f = f.concat(e.flush_verbatim(a)), a = ""))
                    }
                    return a && (f = f.concat(e.flush_verbatim(a))), f.join("")
                }, e.decompress = function(r) {
                    var t, n, o, i, f, a;
                    for (i = "", n = function() {
                            var e, n, o;
                            for (o = [], t = e = 0, n = r.length; 0 <= n ? e < n : e > n; t = 0 <= n ? ++e : --e) o.push(r.charCodeAt(t));
                            return o
                        }(), t = 0; t < n.length;)
                        if (254 === n[t]) {
                            if (t + 1 > n.length) throw "Malformed SMAZ";
                            i += r[t + 1], t += 2
                        } else if (255 === n[t]) {
                        if (t + n[t + 1] + 2 >= n.length) throw "Malformed SMAZ";
                        for (o = f = 0, a = n[t + 1] + 1; 0 <= a ? f < a : f > a; o = 0 <= a ? ++f : --f) i += r[t + 2 + o];
                        t += 3 + n[t + 1]
                    } else i += e.reverse_codebook[n[t]], t++;
                    return i
                }, e
            }(),
            ue = function(e) {
                return e.slice(U().length, e.length)
            },
            se = function(e) {
                for (var r, t, n = [], o = 0, i = e.length; i > o;)(r = e.charCodeAt(o++)) >= 55296 && 56319 >= r && i > o ? 56320 == (64512 & (t = e.charCodeAt(o++))) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(r), o--) : n.push(r);
                return n
            },
            ce = function(e) {
                return le.decompress(e)
            },
            he = function(e, r, t) {
                let n = ye(t),
                    o = re(n()),
                    i = "",
                    f = "",
                    a = 0,
                    l = z(r)[0] + z(t)[0],
                    u = R(l) + "",
                    s = oe(u),
                    c = Number(s),
                    h = j("" + c + l, u, s),
                    d = Number((c + "").charAt(2)) + Number((c + "").charAt(1)) + Number((c + "").charAt(0));
                for (let e = V(z(t)[1]) + V(z(r)[1]) + d; e--;) h() < .75 && o(), o();
                if (e = e.split(""), a = (e = (e = L(e, h)).join("")).indexOf(A), e = e.substr(0, a), o() > .5) {
                    i = e.split(" ");
                    for (let e = 0; e < i.length; e++)(f = i[e]).length > 2 && (f = f.split(""), f = (f = L(f, o)).join("")), i[e] = f;
                    e = i.join(" ")
                }
                return e
            },
            de = function(e) {
                let r = "",
                    t = 0,
                    n = "",
                    o = U(),
                    i = localStorage.length;
                if (void 0 === e) {
                    for (let e = i; e--;) n = (n = localStorage.key(e)).replace(o, ""), Z(n = o + n) && ("boolean" === Y(n) ? r += "/" : r += K(n));
                    t = q(r)
                } else Z(e) && (t = "boolean" === Y(e) ? 1 : q(K(e)));
                return t *= 2
            },
            ge = function(e) {
                let r = "",
                    t = 0,
                    n = "",
                    o = U(),
                    i = localStorage.length;
                if (void 0 === e) {
                    for (let e = i; e--;) n = (n = localStorage.key(e)).replace(o, ""), Z(n = o + n) && ("boolean" === Y(n) ? r += "/" : r += ne(n));
                    t = q(r)
                } else Z(e) && (t = q(ne(e)));
                return t *= 2
            },
            we = function(e) {
                let r = !0,
                    t = typeof e;
                for (let e = y.length; e--;)
                    if (t === y[e]) {
                        r = !1;
                        break
                    }
                return r
            },
            ve = function(e, r) {
                if (void 0 === e) throw new Error(i);
                if (void 0 === r) throw new Error(f);
                try {
                    localStorage.setItem(e, r)
                } catch (e) {
                    throw !e || "QUOTA_EXCEEDED_ERR" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name && "QuotaExceededError" !== e.name ? new Error("𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝘄𝗿𝗶𝘁𝗶𝗻𝗴 𝘁𝗼 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲") : new Error("𝗖𝗮𝗻𝗻𝗼𝘁 𝗮𝘀𝘀𝗶𝗴𝗻 𝘃𝗮𝗹𝘂𝗲 𝗯𝗲𝗰𝗮𝘂𝘀𝗲 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲 𝗾𝘂𝗼𝘁𝗮 𝗶𝘀 𝗳𝘂𝗹𝗹")
                }
            },
            ye = function(e) {
                for (var r, t = 0, n = 2166136261; t < e.length; t++) r = (r = Math.imul(e.charCodeAt(t), 3432918353)) << 15 | r >>> 17, n = (n ^= Math.imul(r, 461845907)) << 13 | n >>> 19, n = Math.imul(n, 5) + 3864292196 | 0;
                return n ^= e.length,
                    function() {
                        return n ^= n >>> 16, n = Math.imul(n, 2246822507), n ^= n >>> 13, n = Math.imul(n, 3266489909), (n ^= n >>> 16) >>> 0
                    }
            },
            be = function(e, r, t) {
                let n = JSON.stringify(r, $),
                    o = ye(n),
                    i = ee(o()),
                    f = ye(t),
                    a = re(f()),
                    l = "",
                    u = z(r)[0],
                    s = R(u) + "",
                    c = oe(s),
                    h = Number(c) + z(t)[0] + z(r)[0],
                    d = h + "",
                    g = u + "",
                    w = o() + "",
                    v = j(d, g, w),
                    y = u + Number((h + "").charAt(0)) + Number((h + "").charAt(1)) + Number((h + "").charAt(2)) + Number(s.charAt(0)),
                    b = V(z(t)[1]) + V(z(r)[1]) + y,
                    m = (O = 4022871197, function(e) {
                        for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                            var n = .02519603282416938 * (O += e.charCodeAt(r));
                            n -= O = n >>> 0, O = (n *= O) >>> 0, O += 4294967296 * (n -= O)
                        }
                        return 2.3283064365386963e-10 * (O >>> 0)
                    }),
                    p = z(r)[1],
                    E = 0,
                    S = 0,
                    N = 0,
                    k = 0;
                var O;
                e += "";
                for (let e = 0; e < b; e++) v() > .75 && a(), a() > .55 && i();
                for (let r = 0, t = e.length; r < t; r++) E = Math.floor(256 * v()) + 0, a() < .45 && (E += (A = 1, C = 100, Math.floor(i() * (C - A + 1)) + A)), N = E, k = u, S = Math.floor(m(p) * (k - N + 1)) + N, v() < a() ? l += String.fromCodePoint(E ^ e.codePointAt(r)) : l += String.fromCodePoint(S ^ e.codePointAt(r));
                var A, C;
                return l
            },
            me = function() {
                return "localDataStorage 2.0.1 using " + ("" === x ? "no prefix" : "prefix " + x)
            };
        me.bytes = function(e) {
            if (!I) return !1;
            let r;
            return void 0 === e ? _(de() + W()) : "0 bytes" !== (r = _(de(G(e)) + W(G(e)))) ? r : void 0
        }, me.bytesall = function(e) {
            if (!I) return !1;
            let r;
            return void 0 === e ? _(ge() + W()) : "0 bytes" !== (r = _(ge(G(e)) + W(G(e)))) ? r : void 0
        }, me.cancrunch = function(e) {
            if (!I) return !1;
            if (we(e)) throw new Error(a);
            return H(e)
        }, me.chopget = function(e) {
            if (!I) return !1;
            let r, t;
            return Z(G(e)) ? (r = F(e), t = Y(G(e)), localStorage.removeItem(G(e)), ie("excise key", "chopget", e, void 0, r, void 0, t, void 0, U()), r) : void 0
        }, me.clear = function() {
            if (!I) return !1;
            let e, r, t, n, o = 0,
                i = U();
            for (let f = localStorage.length; f--;)(e = localStorage.key(f)).includes(i) && (r = e.replace(i, ""), t = F(r), n = Y(G(r)), localStorage.removeItem(e), o++, ie("remove all keys", "clear", r, void 0, t, void 0, n, void 0, i));
            return o + (1 === o ? " key" : " keys") + " removed"
        }, me.contains = function(e, r) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (void 0 === r) throw new Error(f);
            if (we(r)) throw new Error(a);
            if (!Z(G(e))) return;
            if ("array" !== Y(G(e))) throw new Error(u);
            let t = !1,
                n = F(e);
            for (let e = 0; e < n.length; e++)
                if (JSON.stringify(n[e], $) === JSON.stringify(r, $)) {
                    t = !0;
                    break
                }
            return t
        }, me.countdupes = function() {
            return !!I && fe().length
        }, me.crunch = function(e) {
            if (!I) return !1;
            if ("symbol" == typeof e) throw new Error(a);
            return T(e)
        }, me.forcehasval = function(e) {
            if (!I) return !1;
            if (we(e)) throw new Error(a);
            let r = !1;
            for (let t = localStorage.length; t--;) e == ne(localStorage.key(t)) && (r = !0);
            return r
        }, me.forceget = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return ne(G(e))
        }, me.forceset = function(e, r) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (void 0 === r) throw new Error(f);
            if (we(r)) throw new Error(a);
            let t = Q(r),
                n = F(e),
                o = Y(G(e)),
                l = "bigint" === o ? n : JSON.stringify(n, $),
                u = "bigint" === t ? r + "n" : r + "",
                s = JSON.stringify(u, $);
            r += "bigint" === t ? "n" : "", ve(G(e), r), l === s && "string" === o || (void 0 === n ? ie("create new key", "forceset", void 0, e, n, u, o, "string", U()) : ie("key value change", "forceset", e, void 0, n, u, o, "string", U()))
        }, me.get = function(e) {
            return !!I && F(e)
        }, me.getscramblekey = function() {
            return !!I && t
        }, me.haskey = function(e) {
            return !!I && Z(G(e))
        }, me.hastype = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(c);
            if ("symbol" === e.toLowerCase()) throw new Error(a);
            if (!y.includes(e.toLowerCase())) throw new Error(s);
            e = e.toLowerCase();
            let r, t = "",
                n = B(),
                o = !1;
            for (let i = n.length; i--;)
                if (r = n[i], t = Y(r), "number" === e && ("float" === t || "integer" === t) || "number" !== e && t === e) {
                    o = !0;
                    break
                }
            return o
        }, me.hasval = function(e) {
            return !!I && function(e) {
                let r = JSON.stringify(e, $),
                    t = "",
                    n = "",
                    o = !1;
                for (let e = localStorage.length; e--;)
                    if ((n = localStorage.key(e)).includes(U()) && r === (t = JSON.stringify(K(n), $))) {
                        o = !0;
                        break
                    }
                return o
            }(e)
        }, me.isarray = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "array" === Y(G(e))
        }, me.isbigint = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "bigint" === Y(G(e))
        }, me.isboolean = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "boolean" === Y(G(e))
        }, me.iscrunch = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "compressed string" === Y(G(e))
        }, me.isdate = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "date" === Y(G(e))
        }, me.isfloat = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "float" === Y(G(e))
        }, me.isinteger = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "integer" === Y(G(e))
        }, me.isnull = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "null" === Y(G(e))
        }, me.isnumber = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "float" === Y(G(e)) || "integer" === Y(G(e))
        }, me.isobject = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "object" === Y(G(e))
        }, me.isstring = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            return "string" === Y(G(e)) || "compressed string" === Y(G(e))
        }, me.key = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error("𝗡𝗼 𝗶𝗻𝗱𝗲𝘅 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱");
            if (e !== Number(e)) throw new Error(h);
            if (e < 0) throw new Error(h);
            let r = B(),
                t = r.length;
            return te(r), e <= t ? r[e] : void 0
        }, me.keybytes = function(e) {
            if (!I) return !1;
            let r;
            return void 0 === e ? _(W()) : "0 bytes" !== (r = _(W(G(e)))) ? r : void 0
        }, me.keys = function() {
            return !!I && B().length
        }, me.listdupes = function(e = !0) {
            if (!I) return !1;
            let r = function(e) {
                let r = fe(),
                    t = {},
                    n = {},
                    o = "",
                    i = localStorage.length;
                if (e && te(r), r.length)
                    for (let t = 0, f = r.length; t < f; t++) {
                        let f = new Array;
                        for (let e = i; e--;) o = localStorage.key(e), JSON.stringify(K(o), $) === JSON.stringify(r[t], $) && (o = ue(o), f.push(o));
                        e && te(f), n[t] = {
                            value: r[t],
                            keys: f,
                            keycount: f.length
                        }
                    }
                return t = {
                    dupecount: r.length,
                    dupes: n
                }
            }(e);
            return 0 !== r.dupecount ? r : void 0
        }, me.poke = function(e, r, t) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (void 0 === r) throw new Error(f);
            if (we(r)) throw new Error(a);
            if (!Z(G(e))) throw new Error(l);
            if ("array" !== Y(G(e))) throw new Error(u);
            let n = F(e),
                o = n.length,
                s = o + 1,
                c = "";
            if (void 0 === t) t = s;
            else if ("string" == typeof t)
                if ("start" === t.toLowerCase()) t = 0;
                else {
                    if ("end" !== t.toLowerCase()) throw new Error(d);
                    t = s
                }
            else {
                if ("number" != typeof t) throw new Error(w);
                if (t < 1) t = 0;
                else if (t > o) t = s;
                else if (!(t > 0 && t < s)) throw new Error(g)
            }
            t === s ? (n.push(r), c = "append") : 0 === t ? (n.unshift(r), c = "prepend") : (n.splice(t - 1, 1, r), c = "replace"), c += " value";
            let h, v = F(e),
                y = Y(G(e)),
                b = "bigint" === y ? v : JSON.stringify(v, $),
                m = P(r)[1],
                p = "bigint" === m ? h : JSON.stringify(h, $);
            n = P(n)[0], ve(G(e), n), h = F(e), b === p && y === m || ie(c, "poke", e, void 0, v, h, y, m, U())
        }, me.pull = function(e, r, t = !1) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (!Z(G(e))) return;
            if ("array" !== Y(G(e))) throw new Error(u);
            let n = F(e),
                o = n.length,
                f = o + 1,
                a = "",
                l = 0,
                s = !t;
            if (void 0 === r) r = f;
            else if ("string" == typeof r) {
                if ("start" === r.toLowerCase()) r = 0;
                else if ("end" === r.toLowerCase()) r = f;
                else if ("" === r) throw new Error(d)
            } else if ("number" == typeof r) {
                if (s)
                    if (r < 2) r = 0;
                    else if (r > o) r = f;
                else if (!(r > 0 && r < f)) throw new Error(g)
            } else if ("bigint" == typeof r);
            else if ("number" == typeof r);
            else if ("boolean" == typeof r);
            else if ("object" != typeof r) throw new Error(w);
            if (s && r === f) n.pop(), a = "from end";
            else if (s && 0 === r) n.shift(), a = "from start";
            else if (s && "number" == typeof r) n.splice(r - 1, 1), a = "from contents";
            else {
                for (let e = 0; e < n.length; e++)
                    if (JSON.stringify(n[e], $) === JSON.stringify(r, $)) {
                        l = e + 1;
                        break
                    }
                if (!l) return;
                n.splice(l - 1, 1), a = "from contents"
            }
            let c, h = F(e),
                v = Y(G(e)),
                y = "bigint" === v ? h : JSON.stringify(h, $),
                b = JSON.stringify(c, $);
            n = P(n)[0], ve(G(e), n), c = F(e), y === b && void 0 === v || JSON.stringify(h, $) !== JSON.stringify(c, $) && ie("remove value " + a, "pull", e, void 0, h, c, v, void 0, U())
        }, me.pullall = function(e, r) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (void 0 === r) throw new Error(f);
            if (we(r)) throw new Error(a);
            if (!Z(G(e))) return;
            if ("array" !== Y(G(e))) throw new Error(u);
            let t = F(e);
            ! function(e, r) {
                let t = e.length;
                for (; t--;) e[t] === r && e.splice(e.indexOf(r), 1)
            }(t, r);
            let n, o = F(e),
                l = Y(G(e)),
                s = "bigint" === l ? o : JSON.stringify(o, $),
                c = JSON.stringify(n, $);
            t = P(t)[0], ve(G(e), t), n = F(e), s === c && void 0 === l || JSON.stringify(o, $) !== JSON.stringify(n, $) && ie("remove all values from contents", "pullall", e, void 0, o, n, l, void 0, U())
        }, me.push = function(e, r, t) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (void 0 === r) throw new Error(f);
            if (we(r)) throw new Error(a);
            if (Z(G(e)) && "array" !== Y(G(e))) throw new Error(u);
            if (Z(G(e))) {
                let n = F(e),
                    o = n.length,
                    i = o + 1,
                    f = "";
                if (void 0 === t) t = i;
                else if ("string" == typeof t)
                    if ("start" === t.toLowerCase()) t = 0;
                    else {
                        if ("end" !== t.toLowerCase()) throw new Error(d);
                        t = i
                    }
                else {
                    if ("number" != typeof t) throw new Error(w);
                    if (t < 2) t = 0;
                    else if (t > o) t = i;
                    else if (!(t > 0 && t < i)) throw new Error(g)
                }
                t === i ? (n.push(r), f = "append") : 0 === t ? (n.unshift(r), f = "prepend") : (n.splice(t - 1, 0, r), f = "insert"), f += " value";
                let a, l = F(e),
                    u = Y(G(e)),
                    s = "bigint" === u ? l : JSON.stringify(l, $),
                    c = P(r)[1],
                    h = "bigint" === c ? a : JSON.stringify(a, $);
                n = P(n)[0], ve(G(e), n), a = F(e), s === h && u === c || ie(f, "push", e, void 0, l, a, u, c, U())
            } else {
                let t = new Array,
                    n = arguments.length;
                if (n > 2) {
                    for (let e = 1; e < n; e++) "array" === Q(arguments[e]) ? t = t.concat(arguments[e]) : t.push(arguments[e]);
                    r = t
                } else if ("array" !== Q(r)) {
                    for (let e = 1; e < n; e++) t.push(arguments[e]);
                    r = t
                }
                let o = F(e),
                    i = Y(G(e)),
                    f = ("bigint" === i || JSON.stringify(o, $), r),
                    a = P(r)[1];
                "bigint" === a || JSON.stringify(f, $);
                r = P(r)[0], ve(G(e), r), ie("create new key", "push", void 0, e, o, f, i, a, U())
            }
        }, me.quota = function() {
            if (!I) return !1;
            var e, r = 0;
            try {
                for (r = 250; r <= 1e4; r += 250) localStorage.setItem(C, new Array(1024 * r + 1).join("~"))
            } catch (e) {
                localStorage.setItem(C + C, r - 250)
            }
            return e = localStorage.getItem(C + C), e = parseInt(e, 10), e *= 1e3, localStorage.removeItem(C), localStorage.removeItem(C + C), n ? "Total storage allocated is " + _(e, !0) + " (stored using " + _(2 * e, !0) + ")" : _(e, !0)
        }, me.quotaused = function() {
            if (!I) return !1;
            let e, r, t, o = "",
                i = localStorage.length;
            if (0 !== localStorage.length) {
                for (let t = i; t--;) o += (e = localStorage.key(t)) + (r = ne(e));
                return t = q(o), n ? "Total storage used is " + _(t) + " (stored using " + _(2 * t) + ")" : _(t)
            }
            return _(0)
        }, me.remove = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            let r = F(e),
                t = Y(G(e));
            return Z(G(e)) ? (localStorage.removeItem(G(e)), ie("remove key", "remove", e, void 0, r, void 0, t, void 0, U()), n ? "key removed" : void 0) : void 0
        }, me.rename = function(e, r) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (!Z(G(e))) throw new Error(l);
            if (void 0 === r) throw new Error("𝗡𝗼 𝗻𝗲𝘄 𝗸𝗲𝘆 𝗻𝗮𝗺𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱");
            if (e === r) throw new Error("𝗖𝗮𝗻𝗻𝗼𝘁 𝗿𝗲𝗻𝗮𝗺𝗲 𝗸𝗲𝘆 𝘁𝗼 𝗶𝘁𝘀 𝗼𝘄𝗻 𝗻𝗮𝗺𝗲");
            if (Z(G(r))) throw new Error("𝗗𝗲𝘀𝘁𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗸𝗲𝘆 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗲𝘅𝗶𝘀𝘁𝘀");
            let t = F(e),
                n = Y(G(e)),
                o = P(t)[0];
            localStorage.removeItem(G(e)), ve(G(r), o), ie("key name change", "rename", e, r, t, t, n, n, U())
        }, me.safeget = function(e, r) {
            if (!I) return !1;
            let n;
            return Z(G(e)) ? (n = ne(G(e)), void 0 === r ? (n = be(n, t, e), n = he(n, t, e)) : (n = be(n, r, e), n = he(n, r, e)), n = M(n)) : void 0
        }, me.safeset = function(e, r, o) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (void 0 === r) throw new Error(f);
            if (we(r)) throw new Error(a);
            let l = "",
                u = ne(G(e)),
                s = null === u ? void 0 : u,
                c = Y(G(e)),
                h = "bigint" === c ? s : JSON.stringify(s, $),
                d = "",
                g = "obfuscated key",
                w = JSON.stringify(d, $);
            if (r = P(r)[0], void 0 === o ? (r = ae(r, t, e), r = be(r, t, e), l = " with global scramble key") : (r = ae(r, o, e), r = be(r, o, e), l = " with user scramble key"), ve(G(e), r), d = ne(G(e)), h !== w || c !== g)
                if (void 0 === s) {
                    if (ie("create new key" + l, "safeset", void 0, e, s, d, c, g, U()), n) return "New obfuscated key created" + l
                } else if (s !== d && (ie("key value change" + l, "safeset", e, void 0, s, d, c, g, U()), n)) return "Existing key has been overwritten with obfuscated value created" + l
        }, me.set = function(e, r) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (void 0 === r) throw new Error(f);
            if (we(r)) throw new Error(a);
            let t = F(e),
                o = Y(G(e)),
                l = "bigint" === o ? t : JSON.stringify(t, $),
                u = r,
                s = P(r)[1],
                c = "bigint" === s ? u : JSON.stringify(u, $);
            if (r = P(r)[0], ve(G(e), r), l !== c || o !== s)
                if (void 0 === t) {
                    if (ie("create new key", "set", void 0, e, t, u, o, s, U()), n) return "New " + s + " key created"
                } else if (ie("key value change", "set", e, void 0, t, u, o, s, U()), n) return "Existing key has been overwritten"
        }, me.setscramblekey = function(e) {
            if (!I) return !1;
            if (void 0 === e) throw new Error("𝗡𝗼 𝘀𝗰𝗿𝗮𝗺𝗯𝗹𝗲 𝗸𝗲𝘆 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱");
            if (we(e)) throw new Error(a);
            return t = e, n ? "The new global scramble key is set" : void 0
        }, me.showdupes = function(e = !0) {
            if (!I) return !1;
            let r = fe();
            return e && te(r), r.length ? r : n ? "No duplicate values in the store" : void 0
        }, me.showkeys = function(e, r = !0, t = !0) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(f);
            if (we(e)) throw new Error(a);
            let o, i = "",
                l = new Array,
                u = B();
            for (let t = u.length; t--;) o = u[t], i = K(o), JSON.stringify(i, $) === JSON.stringify(e, $) && (r && (o = ue(o)), l.push(o));
            return t && te(l), l.length ? l : n ? "No keys have that value" : void 0
        }, me.showkeytypes = function(e, r = !0, t = !0) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(c);
            if ("symbol" === e.toLowerCase()) throw new Error(a);
            if (!y.includes(e.toLowerCase())) throw new Error(s);
            e = e.toLowerCase();
            let o, i = "",
                f = new Array,
                l = B();
            for (let t = l.length; t--;) o = l[t], i = Y(o), ("number" === e && ("float" === i || "integer" === i) || "number" !== e && i === e) && (r && (o = ue(o)), f.push(o));
            return t && te(f), f.length ? f : n ? "No keys are of that type" : void 0
        }, me.showprefix = function() {
            return !!I && (n ? "The key prefix (" + x + ".) adds " + pe + " to each key name (stored using " + Ee + ")" : x + ".")
        }, me.showtype = function(e) {
            if (!I) return !1;
            let r;
            if (void 0 === e) throw new Error(i);
            return r = Y(G(e)), n ? void 0 === r ? "Key does not exist and cannot be checked" : "array" === r ? "This key is an Array Key" : "Key has value whose data type is " + r : r
        }, me.size = function(e) {
            if (!I) return !1;
            let r = F(e);
            return void 0 !== r && (r = V(r)), n ? void 0 === r ? "Key does not exist and cannot be checked" : "Key value has " + r + " codepoints" : r
        }, me.softset = function(e, r) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (void 0 === r) throw new Error(f);
            if (we(r)) throw new Error(a);
            let t, o = P(r)[1],
                l = r;
            return Z(G(e)) ? 1 === n ? "Key already exists and cannot be overwritten" : void 0 : (r = P(r)[0], ve(G(e), r), ie("create new key", "softset", void 0, e, void 0, l, void 0, o, U()), 1 === n ? t = "array" === o ? "New Array Key created" : "New " + o + " key created" : void 0)
        }, me.uncrunch = function(e) {
            return !!I && ce(e)
        }, me.valbytes = function(e) {
            if (!I) return !1;
            let r;
            return void 0 === e ? _(de()) : "0 bytes" !== (r = _(de(G(e)))) ? r : void 0
        }, me.valbytesall = function(e) {
            if (!I) return !1;
            let r;
            return void 0 === e ? _(ge()) : "0 bytes" !== (r = _(ge(G(e)))) ? r : void 0
        }, me.verbosity = function(e) {
            return !!I && (void 0 !== (e = Number(e)) && (0 !== e && 1 !== e || function(e) {
                n = e
            }(e)), "Verbosity is " + (1 === n ? "on" : "off"))
        }, me.where = function(e, r) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(i);
            if (void 0 === r) throw new Error(f);
            if (we(r)) throw new Error(a);
            if (!Z(G(e))) return;
            if ("array" !== Y(G(e))) throw new Error(u);
            let t = !1,
                o = F(e);
            for (let e = 0; e < o.length; e++)
                if (JSON.stringify(o[e], $) === JSON.stringify(r, $)) {
                    t = e + 1;
                    break
                }
            return n ? "Value was found in the Array Key at position " + t : t
        }, me.xorString = function(e, r, t) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(v);
            if (void 0 === r) throw new Error(o);
            if (void 0 === t) throw new Error(i);
            return be(e, r, t)
        }, me.unshuffleString = function(e, r, t) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(v);
            if (void 0 === r) throw new Error(o);
            if (void 0 === t) throw new Error(i);
            return he(e, r, t)
        }, me.shuffleString = function(e, r, t) {
            if (!I) return !1;
            if (void 0 === e) throw new Error(v);
            if (void 0 === r) throw new Error(o);
            if (void 0 === t) throw new Error(i);
            return ae(e, r, t)
        }, me.version = "localDataStorage 2.0.1";
        let pe = _(q(me.showprefix())),
            Ee = _(2 * q(me.showprefix()));
        return function() {
            let t, n = !1,
                o = !1,
                i = localStorage.length,
                f = me.showprefix();
            if (I) {
                if (void 0 !== e || r && r.includes("/q") || (o = !0, console.info("No prefix specified. Creating a %crandom %cprefix --\x3e %c" + f, "font-style: italic;", "font-style: normal;", "font-weight: bold;")), "" !== e || r && -1 !== r.indexOf("/q") || console.info("Empty prefix given (%c" + f + "%c), but a usable prefix is %cstrongly recommended%c to organize keys!", "font-weight: bold;", "font-style: normal;", "text-decoration: underline;", "text-decoration: none;"), r && -1 !== r.indexOf("/q") || console.log("💼 localDataStorage instantiated. " + (!0 === o ? "The random prefix" : "Your specified prefix") + " (%c" + f + "%c) adds " + pe + " to every key name (stored using " + Ee + ").", "font-weight: bold;", "font-style: normal;"), r && r.includes("/w")) {
                    for (let e = i; e--;)
                        if (-1 !== (t = localStorage.key(e)).indexOf(f)) {
                            n = !0;
                            break
                        }
                    n && console.warn("%cAttention! %cKeys with this prefix already exist in localStorage for this domain!", "color: rgb(230,0,0); font-weight: bold;", "color: rgb(230,0,0);")
                }
                r && r.includes("/t") && function() {
                    let e = !1;
                    return me.safeset(C, C, C), C === me.safeget(C, C) && (e = !0), me.remove(C), e
                }() && console.log("Tested good: The localStorage API is available")
            } else console.warn("%cError! Cannot access localStorage! %cBailing out...", "color: rgb(230,0,0); font-weight: bold;", "color: rgb(230,0,0);")
        }(), me
    }(e, r)
};
