/*/
/////////////////////////////////////////////////////////////////////////////////////////
localDataStorage 2.0.0
https://gitcdn.link/cdn/macmcmeans/localDataStorage/master/localDataStorage-2.0.0.trim.js
/////////////////////////////////////////////////////////////////////////////////////////
Copyright 2017 - 2022 William P. "Mac" McMeans
LICENSE: BSD 3-Clause License
*/
const localDataStorage = function(e, r) {
    return function(e, r) {
        "use strict";
        let t = 123456789,
            n = 0;
        const o = "Key is undefined",
            i = "Key's value is undefined",
            f = "Key must be an Array Key",
            a = ["array", "bigint", "boolean", "date", "float", "integer", "null", "number", "object", "string"],
            u = String.fromCodePoint(128),
            l = String.fromCodePoint(129),
            s = String.fromCodePoint(141),
            c = String.fromCodePoint(142),
            d = String.fromCodePoint(143),
            h = String.fromCodePoint(144),
            g = String.fromCodePoint(149),
            w = String.fromCodePoint(157),
            v = String.fromCodePoint(158),
            y = (new Date).getTime() + ":" + (1e8 * Math.random() | 0),
            p = "" === e ? "" : void 0 === e ? y : e,
            b = function(e) {
                let r, t = "__storage_test__";
                try {
                    return (r = window[e]).setItem(t, t), r.removeItem(t), !0
                } catch (e) {
                    return !1
                }
            },
            m = b("localStorage"),
            S = function() {
                return function(e) {
                    var r, t, n, o, i, f = new Uint32Array(3),
                        a = "",
                        u = "aleaPRNG 1.1";

                    function l(e) {
                        var i, f, u = (i = 4022871197, (f = function(e) {
                            for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                                var n = .02519603282416938 * (i += e.charCodeAt(r));
                                n -= i = n >>> 0, i = (n *= i) >>> 0, i += 4294967296 * (n -= i)
                            }
                            return 2.3283064365386963e-10 * (i >>> 0)
                        }).version = "Mash 0.9", f);
                        r = u(" "), t = u(" "), n = u(" "), o = 1;
                        for (var l = 0; l < e.length; l++)(r -= u(e[l])) < 0 && (r += 1), (t -= u(e[l])) < 0 && (t += 1), (n -= u(e[l])) < 0 && (n += 1);
                        a = u.version, u = null
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
                        l(i)
                    }, c.seed = function() {
                        l(Array.prototype.slice.call(arguments))
                    }, c.version = function() {
                        return u
                    }, c.versions = function() {
                        return u + ", " + a
                    }, 0 === e.length && (window.crypto.getRandomValues(f), e = [f[0], f[1], f[2]]), l(i = e), c
                }(Array.prototype.slice.call(arguments))
            },
            E = function(e) {
                let r, t = "";
                const n = function(r) {
                        return e.includes(r)
                    },
                    o = function(e) {
                        return e.substr(0, e.indexOf(r))
                    },
                    i = function(e) {
                        return JSON.parse(e, B)
                    };
                if (void 0 === e) throw new Error("No value to convert from");
                if (function() {
                        var e = arguments.length,
                            r = Object.values(arguments);
                        return {
                            areIn(t) {
                                for (let n = 0; n < e; n++)
                                    if (r[n] === t) return !0;
                                return !1
                            },
                            total: () => e
                        }
                    }(w, g, d, s, c, h, l).areIn(e.substr(-1, 1))) "" === t && n(r = l) && ((e = o(e)).includes(u) && (e = e.substr(1, e.length), e = te(e)), t = e), "" === t && n(r = s) && (t = i(e = o(e)), t = new Date(t)), "" === t && n(r = w) && (t = i(e = o(e))), "" === t && n(r = c) && (e = o(e), t = parseFloat(e)), "" === t && n(r = d) && (t = "1" === (e = o(e))), "" === t && n(r = g) && (e = o(e), t = BigInt(e)), "" === t && n(r = h) && (t = i(e = o(e)));
                else if ("{" === e[0] || "[" === e[0]) try {
                    t = i(e)
                } catch (r) {
                    t = e
                } else t = e == +e ? +e : e;
                return t
            },
            k = function(e) {
                let r = "",
                    t = "";
                if (void 0 === e) throw new Error("No value to convert to");
                return "string" == typeof e ? (t = "string", r = l, R(e) && (t = "compressed string", e = N(e), e = u + e)) : "object" == typeof e && (e instanceof Date || e == new Date(e)) ? (t = "date", r = s, e = JSON.stringify(e, q)) : "object" == typeof e && e instanceof Array ? (t = "array", r = w, e = JSON.stringify(e, q)) : "number" == typeof e ? (t = "integer", -1 !== (e + "").indexOf(".") && (t = "float"), r = c, e += "") : "boolean" == typeof e ? (t = "boolean", r = d, e = Number(e), e += "") : "bigint" == typeof e ? (t = "bigint", r = g, e += "") : "object" == typeof e && (t = "object", null === e && (t = "null"), r = h, e = JSON.stringify(e, q)), "" !== r && (e += r), [e, t]
            },
            N = function(e) {
                return W.compress(e)
            },
            O = function(e) {
                let r = 0;
                for (; e > 1024;) r++, e /= 1024;
                return e = (e = 1 == e ? "1 byte" : e.toFixed(2) + " " + ["bytes", "KB", "MB"][r]).replace(".00 ", " ")
            },
            x = function(e, r) {
                var t, n = e.length;
                for (r = r || function() {
                        var e = new Uint32Array(2);
                        return window.crypto.getRandomValues(e), +("0." + e[0] + e[1])
                    }; --n;) e[t = Math.floor(r() * (n + 1))] = [e[n], e[n] = e[t]][0]
            },
            A = function(e, r) {
                for (var t, n = new Array(e.length), o = new Array(e.length), i = e.length, f = 0; f < i; f++) o[f] = f;
                for (f = i - 1; f > 0; f--) t = Math.floor(r() * (f + 1)), o[f] = [o[t], o[t] = o[f]][0];
                for (f = 0; f < i; f++) n[o[f]] = e[f];
                return n
            },
            C = function(e) {
                let r = .059886774281039834 * e;
                return r += 21845.33332824707, r -= e = 0 | r, e = 0 | (r *= e), (e ^= 4294967296 * (r -= e)) >>> 0
            },
            J = function(e) {
                if (void 0 === e) throw new Error(o);
                let r = F(e);
                return r ? E(r) : void 0
            },
            I = function(e = !1) {
                let r, t = P(),
                    n = new Array;
                for (let o = localStorage.length; o--;)(r = localStorage.key(o)).substr(0, t.length) === t && (e && (r = ee(r)), n.push(r));
                return n
            },
            j = function(e) {
                for (var r = (e = "" + e).length, t = r - 1; t >= 0; t--) {
                    let n = e.charCodeAt(t);
                    n > 127 && 2047 >= n ? r++ : n > 2047 && 65535 >= n && (r += 2), n >= 56320 && 57343 >= n && t--
                }
                return r
            },
            M = function(e) {
                return re(e = "" + e).length
            },
            P = function() {
                return p + "."
            },
            T = function(e) {
                if (void 0 === e) return;
                let r = "bigint" == typeof e ? e.toString() : JSON.stringify(e, q),
                    t = 0,
                    n = "",
                    o = "";
                const i = function(e) {
                    return ae(e)()
                };
                var f;
                n = e instanceof Array ? "ARRAY1" : "bigint" == typeof e ? "BIGINT2" : "boolean" == typeof e ? "BOOLEAN4" : e instanceof Date ? "DATE8" : "number" == typeof e ? (e + "").includes(".") ? "FLOAT16" : "INTEGER32" : "string" == typeof e ? "STRING64" : "OBJECT128", o = r + r.length + n + i(r) + i((f = r, Array.from(f).reverse().join("")));
                for (let e = 0; e < o.length; e++) t += o.codePointAt(e);
                return [t, o]
            },
            U = function(e) {
                return P() + e
            },
            K = function(e) {
                return J(U(e))
            },
            _ = function(e) {
                return k(e)[1]
            },
            D = function(e) {
                if (void 0 === e) throw new Error("No key specified");
                let r = "",
                    n = "";
                const o = function(e) {
                    return n.includes(e)
                };
                if (L(e)) return n = F(e), ! function() {
                    var e = arguments.length,
                        r = Object.values(arguments);
                    return {
                        areIn(t) {
                            for (let n = 0; n < e; n++)
                                if (r[n] === t) return !0;
                            return !1
                        },
                        total: () => e
                    }
                }(w, g, d, s, c, h, l).areIn(n.substr(-1, 1)) ? "[" === n[0] ? r = "presumed array" : "{" === n[0] ? r = "presumed object" : "n" === n.substr(-1, 1) && parseInt(n, 10) === +n.substring(0, n.length - 1) ? r = "presumed bigint" : n == +n ? r = "presumed number" : (n = ue(n, t, e.replace(P(), "")), n = ne(n, t, e.replace(P(), "")), o(l) ? r = "obfuscated string" : o(g) ? r = "obfuscated bigint" : o(s) ? r = "obfuscated date" : o(w) ? r = "obfuscated array" : o(c) ? (r = "obfuscated number", r = n.includes(".") ? "obfuscated float" : "obfuscated integer") : r = o(d) ? "obfuscated boolean" : o(h) ? "obfuscated object" : "presumed string") : (o(l) && (r = "string", o(u) && (r = "compressed string")), "" === r && o(s) && (r = "date"), "" === r && o(w) && (r = "array"), "" === r && o(c) && (r = "number", r = n.includes(".") ? "float" : "integer"), "" === r && o(d) && (r = "boolean"), "" === r && o(g) && (r = "bigint"), "" === r && o(h) && (r = "object", n[0] + n[1] + n[2] + n[3] === "null" && (r = "null"))), r
            },
            L = function(e) {
                return null !== F(e)
            },
            R = function(e) {
                let r = !1,
                    t = !1,
                    n = W.compress(e);
                return r = e === W.decompress(n), t = j(n) + 4 < j(e), !(!r || !t)
            },
            B = function(e, r) {
                return "string" == typeof r && "`" === r.substr(-1, 1) && "n" === r.substr(-2, 1) && parseInt(r, 10) === +r.substring(0, r.length - 2) ? BigInt(r.substring(0, r.length - 2)) : r
            },
            q = function(e, r) {
                return "bigint" == typeof r ? r.toString() + "n`" : r
            },
            V = function(e) {
                let r = I().join(""),
                    t = 0;
                return void 0 === e ? t = j(r) : L(e) && (t = j(e)), t *= 2
            },
            Y = e => () => (2 ** 31 - 1 & (e = Math.imul(48271, e))) / 2 ** 31,
            z = e => r => (e = e + 1831565813 | 0, r = Math.imul(e ^ e >>> 15, 1 | e), r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 2 ** 32),
            G = function(e) {
                return e.sort((e, r) => ("$" === (e + "").substr(0, 1) ? (e + "").substr(1, (e + "").length) : e + "").localeCompare(r, "en", {
                    ignorePunctuation: !0,
                    numeric: !0,
                    sensitivity: "base"
                }))
            },
            F = function(e) {
                try {
                    var r = localStorage.getItem(e)
                } catch (e) {
                    throw new Error("An error occurred reading from localStorage")
                }
                return r
            },
            Q = function(e) {
                return Array.from(e).reverse().join("")
            },
            Z = function(e, r, t, n, o, i, f, a, u) {
                let l = new CustomEvent("localDataStorage", {
                    detail: {
                        message: e,
                        method: r,
                        oldkey: t,
                        newkey: n,
                        oldval: "bigint" === f ? o : JSON.stringify(o, q),
                        newval: "bigint" === a ? i : JSON.stringify(i, q),
                        oldtype: f,
                        newtype: a,
                        prefix: u,
                        timestamp: +new Date
                    },
                    bubbles: !1,
                    cancelable: !0
                });
                document.dispatchEvent(l)
            },
            H = function(e) {
                t = e
            },
            X = function() {
                let e, r, t = new Array,
                    n = 0;
                for (let e = localStorage.length; e--;)(r = localStorage.key(e)).includes(P()) && (t[n++] = F(r));
                return 0 === (e = function(e) {
                    let r = new Array,
                        t = new Array,
                        n = e.length;
                    for (let o = 0; o < n; o++) t = e[o], e.lastIndexOf(t) !== o && -1 === r.indexOf(t) && r.push(t);
                    for (let e = 0, t = r.length; e < t; e++) r[e] = E(r[e]);
                    return r
                }(t)).length ? [] : e
            },
            $ = function(e, r, t) {
                let n = ae(t),
                    o = z(n()),
                    i = e,
                    f = "",
                    a = "",
                    u = T(r)[0] + T(t)[0],
                    l = C(u) + "",
                    s = Q(l),
                    c = Number(s),
                    d = S("" + c + u, l, s),
                    h = Number((c + "").charAt(2)) + Number((c + "").charAt(1)) + Number((c + "").charAt(0)),
                    g = M(T(t)[1]) + M(T(r)[1]) + h,
                    w = JSON.stringify(r, q),
                    y = ae(w),
                    p = Y(y()),
                    b = S();
                const m = function(e, r) {
                    return Math.floor(b() * (r - e + 1)) + e
                };
                for (let e = 0; e < g; e++) d() < .75 && o(), o() > .75 && p();
                if (o() > .5) {
                    f = e.split(" ");
                    for (let e = 0; e < f.length; e++)(a = f[e]).length > 2 && (a = a.split(""), x(a, o), a = a.join("")), f[e] = a;
                    e = f.join(" ")
                }
                return e = (e += v + function(e) {
                    let r = "",
                        t = m(1, e.length);
                    for (let n = t < 4 ? t + b.range(3, 6) : t; n--;) r += String.fromCodePoint(e.codePointAt(m(0, e.length - 1)) + b.range(-2, 10));
                    return r
                }(i)).split(""), x(e, d), e = e.join("")
            },
            W = function() {
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
                    var t, n, o, i, f, a, u;
                    for (a = "", f = [], o = 0; o < r.length;) {
                        for (n = !1, i = 7, r.length - o < 7 && (i = r.length - o), i = u = i; i <= 0 ? u < 0 : u > 0; i = i <= 0 ? ++u : --u)
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
            ee = function(e) {
                return e.slice(P().length, e.length)
            },
            re = function(e) {
                for (var r, t, n = [], o = 0, i = e.length; i > o;)(r = e.charCodeAt(o++)) >= 55296 && 56319 >= r && i > o ? 56320 == (64512 & (t = e.charCodeAt(o++))) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(r), o--) : n.push(r);
                return n
            },
            te = function(e) {
                return W.decompress(e)
            },
            ne = function(e, r, t) {
                let n = ae(t),
                    o = z(n()),
                    i = "",
                    f = "",
                    a = 0,
                    u = T(r)[0] + T(t)[0],
                    l = C(u) + "",
                    s = Q(l),
                    c = Number(s),
                    d = S("" + c + u, l, s),
                    h = Number((c + "").charAt(2)) + Number((c + "").charAt(1)) + Number((c + "").charAt(0)),
                    g = M(T(t)[1]) + M(T(r)[1]) + h;
                for (let e = 0; e < g; e++) d() < .75 && o(), o();
                if (e = e.split(""), a = (e = (e = A(e, d)).join("")).indexOf(v), e = e.substr(0, a), o() > .5) {
                    i = e.split(" ");
                    for (let e = 0; e < i.length; e++)(f = i[e]).length > 2 && (f = f.split(""), f = (f = A(f, o)).join("")), i[e] = f;
                    e = i.join(" ")
                }
                return e
            },
            oe = function(e) {
                let r = "",
                    t = 0,
                    n = "",
                    o = P(),
                    i = localStorage.length;
                if (void 0 === e) {
                    for (let e = i; e--;) n = (n = localStorage.key(e)).replace(o, ""), L(n = o + n) && ("boolean" === D(n) ? r += "/" : r += J(n));
                    t = j(r)
                } else L(e) && (t = "boolean" === D(e) ? 1 : j(J(e)));
                return t *= 2
            },
            ie = function(e) {
                let r = "",
                    t = 0,
                    n = "",
                    o = P(),
                    i = localStorage.length;
                if (void 0 === e) {
                    for (let e = i; e--;) n = (n = localStorage.key(e)).replace(o, ""), L(n = o + n) && ("boolean" === D(n) ? r += "/" : r += F(n));
                    t = j(r)
                } else L(e) && (t = j(F(e)));
                return t *= 2
            },
            fe = function(e, r) {
                if (void 0 === e) throw new Error(o);
                if (void 0 === r) throw new Error(i);
                try {
                    localStorage.setItem(e, r)
                } catch (e) {
                    throw !e || "QUOTA_EXCEEDED_ERR" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name && "QuotaExceededError" !== e.name ? new Error("An unknown error occurred writing to localStorage") : new Error("Cannot set KEY to VALUE because localStorage quota is full")
                }
            },
            ae = function(e) {
                for (var r, t = 0, n = 2166136261; t < e.length; t++) r = (r = Math.imul(e.charCodeAt(t), 3432918353)) << 15 | r >>> 17, n = (n ^= Math.imul(r, 461845907)) << 13 | n >>> 19, n = Math.imul(n, 5) + 3864292196 | 0;
                return n ^= e.length,
                    function() {
                        return n ^= n >>> 16, n = Math.imul(n, 2246822507), n ^= n >>> 13, n = Math.imul(n, 3266489909), (n ^= n >>> 16) >>> 0
                    }
            },
            ue = function(e, r, t) {
                let n = JSON.stringify(r, q),
                    o = ae(n),
                    i = Y(o()),
                    f = ae(t),
                    a = z(f()),
                    u = "",
                    l = T(r)[0],
                    s = C(l) + "",
                    c = Q(s),
                    d = Number(c) + T(t)[0] + T(r)[0],
                    h = d + "",
                    g = l + "",
                    w = o() + "",
                    v = S(h, g, w),
                    y = l + Number((d + "").charAt(0)) + Number((d + "").charAt(1)) + Number((d + "").charAt(2)) + Number(s.charAt(0)),
                    p = M(T(t)[1]) + M(T(r)[1]) + y,
                    b = (x = 4022871197, function(e) {
                        for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                            var n = .02519603282416938 * (x += e.charCodeAt(r));
                            n -= x = n >>> 0, x = (n *= x) >>> 0, x += 4294967296 * (n -= x)
                        }
                        return 2.3283064365386963e-10 * (x >>> 0)
                    }),
                    m = T(r)[1],
                    E = 0,
                    k = 0,
                    N = 0,
                    O = 0;
                var x;
                e += "";
                for (let e = 0; e < p; e++) v() > .75 && a(), a() > .55 && i();
                for (let r = 0, t = e.length; r < t; r++) E = Math.floor(256 * v()) + 0, a() < .45 && (E += (A = 1, J = 100, Math.floor(i() * (J - A + 1)) + A)), N = E, O = l, k = Math.floor(b(m) * (O - N + 1)) + N, v() < a() ? u += String.fromCodePoint(E ^ e.codePointAt(r)) : u += String.fromCodePoint(k ^ e.codePointAt(r));
                var A, J;
                return u
            },
            le = function() {
                return "localDataStorage 2.0.0 using " + ("" === p ? "no prefix" : "prefix " + p)
            };
        le.bytes = function(e) {
            if (!m) return !1;
            let r;
            return void 0 === e ? O(oe() + V()) : "0 bytes" !== (r = O(oe(U(e)) + V(U(e)))) ? r : void 0
        }, le.bytesall = function(e) {
            if (!m) return !1;
            let r;
            return void 0 === e ? O(ie() + V()) : "0 bytes" !== (r = O(ie(U(e)) + V(U(e)))) ? r : void 0
        }, le.cancrunch = function(e) {
            return !!m && R(e)
        }, le.chopget = function(e) {
            return !!m && (L(U(e)) ? (r = K(e), t = D(U(e)), localStorage.removeItem(U(e)), Z("excise key", "chopget", e, void 0, r, void 0, t, void 0, P()), r) : void 0);
            var r, t
        }, le.clear = function() {
            if (!m) return !1;
            for (var e, r, t, n, o = 0, i = P(), f = localStorage.length; f--;)(e = localStorage.key(f)).includes(i) && (r = e.replace(i, ""), t = K(r), n = D(U(r)), localStorage.removeItem(e), o++, Z("remove all keys", "clear", r, void 0, t, void 0, n, void 0, i));
            return o + (1 === o ? " key" : " keys") + " removed"
        }, le.contains = function(e, r) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (void 0 === r) throw new Error(i);
            if (!L(U(e))) return;
            if ("array" !== D(U(e))) throw new Error(f);
            let t = !1,
                n = K(e);
            for (let e = 0; e < n.length; e++)
                if (JSON.stringify(n[e], q) === JSON.stringify(r, q)) {
                    t = !0;
                    break
                }
            return t
        }, le.countdupes = function() {
            return !!m && X().length
        }, le.crunch = function(e) {
            return !!m && N(e)
        }, le.forcehasval = function(e) {
            if (!m) return !1;
            let r = !1;
            for (let t = localStorage.length; t--;) e == F(localStorage.key(t)) && (r = !0);
            return r
        }, le.forceget = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return F(U(e))
        }, le.forceset = function(e, r) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (void 0 === r) throw new Error(i);
            var t = _(r),
                n = K(e),
                f = D(U(e)),
                a = "bigint" === f ? n : JSON.stringify(n, q),
                u = "bigint" === t ? r + "n" : r + "",
                l = JSON.stringify(u, q);
            r += "bigint" === t ? "n" : "", fe(U(e), r), a === l && "string" === f || (void 0 === n ? Z("create new key", "forceset", void 0, e, n, u, f, "string", P()) : Z("key value change", "forceset", e, void 0, n, u, f, "string", P()))
        }, le.get = function(e) {
            return !!m && K(e)
        }, le.getscramblekey = function() {
            return !!m && t
        }, le.haskey = function(e) {
            return !!m && L(U(e))
        }, le.hastype = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error("No data type supplied");
            if ("symbol" === e.toLowerCase()) throw new Error("Unsupported data type");
            if (!a.includes(e.toLowerCase())) throw new Error("Unknown data type");
            e = e.toLowerCase();
            let r, t = "",
                n = I(),
                o = !1;
            for (let i = n.length; i--;)
                if (r = n[i], t = D(r), "number" === e && ("float" === t || "integer" === t) || "number" !== e && t === e) {
                    o = !0;
                    break
                }
            return o
        }, le.hasval = function(e) {
            return !!m && function(e) {
                let r = JSON.stringify(e, q),
                    t = "",
                    n = "",
                    o = !1;
                for (let e = localStorage.length; e--;)
                    if ((n = localStorage.key(e)).includes(P()) && r === (t = JSON.stringify(J(n), q))) {
                        o = !0;
                        break
                    }
                return o
            }(e)
        }, le.isarray = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "array" === D(U(e))
        }, le.isbigint = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "bigint" === D(U(e))
        }, le.isboolean = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "boolean" === D(U(e))
        }, le.iscrunch = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "compressed string" === D(U(e))
        }, le.isdate = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "date" === D(U(e))
        }, le.isfloat = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "float" === D(U(e))
        }, le.isinteger = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "integer" === D(U(e))
        }, le.isnull = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "null" === D(U(e))
        }, le.isnumber = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "float" === D(U(e)) || "integer" === D(U(e))
        }, le.isobject = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "object" === D(U(e))
        }, le.isstring = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            return "string" === D(U(e)) || "compressed string" === D(U(e))
        }, le.key = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error("Key index is not supplied");
            if (e !== Number(e)) throw new Error("Illegal key index specified");
            if (e < 0) throw new Error("Illegal key index specified");
            let r = I(),
                t = r.length;
            return G(r), e <= t ? r[e] : void 0
        }, le.keybytes = function(e) {
            if (!m) return !1;
            let r;
            return void 0 === e ? O(V()) : "0 bytes" !== (r = O(V(U(e)))) ? r : void 0
        }, le.keys = function() {
            return !!m && I().length
        }, le.listdupes = function(e = !0) {
            if (!m) return !1;
            let r = function(e) {
                let r = X(),
                    t = {},
                    n = {},
                    o = "",
                    i = localStorage.length;
                if (e && G(r), r.length)
                    for (let t = 0, f = r.length; t < f; t++) {
                        let f = new Array;
                        for (let e = i; e--;) o = localStorage.key(e), JSON.stringify(J(o), q) === JSON.stringify(r[t], q) && (o = ee(o), f.push(o));
                        e && G(f), n[t] = {
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
        }, le.poke = function(e, r, t) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (void 0 === r) throw new Error(i);
            if (!L(U(e))) throw new Error("Key does not exist");
            if ("array" !== D(U(e))) throw new Error(f);
            let n = K(e),
                a = n.length,
                u = a + 1,
                l = "";
            if (void 0 === t) t = u;
            else if ("string" == typeof t)
                if ("start" === t.toLowerCase()) t = 0;
                else {
                    if ("end" !== t.toLowerCase()) throw new Error("Unknown string index specified");
                    t = u
                }
            else {
                if ("number" != typeof t) throw new Error("Unknown index type");
                if (t < 1) t = 0;
                else if (t > a) t = u;
                else if (!(t > 0 && t < u)) throw new Error("Unknown numeric index specified")
            }
            t === u ? (n.push(r), l = "append") : 0 === t ? (n.unshift(r), l = "prepend") : (n.splice(t - 1, 1, r), l = "insert"), l += " value";
            var s, c = K(e),
                d = D(U(e)),
                h = "bigint" === d ? c : JSON.stringify(c, q),
                g = k(r)[1],
                w = "bigint" === g ? s : JSON.stringify(s, q);
            n = k(n)[0], fe(U(e), n), s = K(e), h === w && d === g || Z(l, "push", e, void 0, c, s, d, g, P())
        }, le.pull = function(e, r, t = !1) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (!L(U(e))) return;
            if ("array" !== D(U(e))) throw new Error(f);
            let n = K(e),
                i = n.length,
                a = i + 1,
                u = "",
                l = 0,
                s = !t;
            if (void 0 === r) r = a;
            else if ("string" == typeof r) {
                if ("start" === r.toLowerCase()) r = 0;
                else if ("end" === r.toLowerCase()) r = a;
                else if ("" === r) throw new Error("Unknown string index specified")
            } else if ("number" == typeof r) {
                if (s)
                    if (r < 2) r = 0;
                    else if (r > i) r = a;
                else if (!(r > 0 && r < a)) throw new Error("Unknown numeric index specified")
            } else if ("bigint" == typeof r);
            else if ("number" == typeof r);
            else if ("boolean" == typeof r);
            else if ("object" != typeof r) throw new Error("Unknown index type");
            if (s && r === a) n.pop(), u = "from end";
            else if (s && 0 === r) n.shift(), u = "from start";
            else if (s && "number" == typeof r) n.splice(r - 1, 1), u = "from contents";
            else {
                for (let e = 0; e < n.length; e++)
                    if (JSON.stringify(n[e], q) === JSON.stringify(r, q)) {
                        l = e + 1;
                        break
                    }
                if (!l) return;
                n.splice(l - 1, 1), u = "from contents"
            }
            var c, d = K(e),
                h = D(U(e)),
                g = "bigint" === h ? d : JSON.stringify(d, q),
                w = JSON.stringify(c, q);
            n = k(n)[0], fe(U(e), n), c = K(e), g === w && void 0 === h || JSON.stringify(d, q) !== JSON.stringify(c, q) && Z("remove value " + u, "pull", e, void 0, d, c, h, void 0, P())
        }, le.pullall = function(e, r) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (void 0 === r) throw new Error(i);
            if (!L(U(e))) return;
            if ("array" !== D(U(e))) throw new Error(f);
            let t = K(e);
            ! function(e, r) {
                let t = e.length;
                for (; t--;) e[t] === r && e.splice(e.indexOf(r), 1)
            }(t, r);
            var n, a = K(e),
                u = D(U(e)),
                l = "bigint" === u ? a : JSON.stringify(a, q),
                s = JSON.stringify(n, q);
            t = k(t)[0], fe(U(e), t), n = K(e), l === s && void 0 === u || JSON.stringify(a, q) !== JSON.stringify(n, q) && Z("remove all values from contents", "pull", e, void 0, a, n, u, void 0, P())
        }, le.push = function(e, r, t) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (void 0 === r) throw new Error(i);
            if (L(U(e)) && "array" !== D(U(e))) throw new Error(f);
            if (L(U(e))) {
                let o = K(e),
                    i = o.length,
                    f = i + 1,
                    d = "";
                if (void 0 === t) t = f;
                else if ("string" == typeof t)
                    if ("start" === t.toLowerCase()) t = 0;
                    else {
                        if ("end" !== t.toLowerCase()) throw new Error("Unknown string index specified");
                        t = f
                    }
                else {
                    if ("number" != typeof t) throw new Error("Unknown index type");
                    if (t < 2) t = 0;
                    else if (t > i) t = f;
                    else if (!(t > 0 && t < f)) throw new Error("Unknown numeric index specified")
                }
                t === f ? (o.push(r), d = "append") : 0 === t ? (o.unshift(r), d = "prepend") : (o.splice(t - 1, 0, r), d = "insert"), d += " value";
                var n, a = K(e),
                    u = D(U(e)),
                    l = "bigint" === u ? a : JSON.stringify(a, q),
                    s = k(r)[1],
                    c = "bigint" === s ? n : JSON.stringify(n, q);
                o = k(o)[0], fe(U(e), o), n = K(e), l === c && u === s || Z(d, "push", e, void 0, a, n, u, s, P())
            } else {
                let t = new Array,
                    n = arguments.length;
                if (n > 2) {
                    for (let e = 1; e < n; e++) "array" === _(arguments[e]) ? t = t.concat(arguments[e]) : t.push(arguments[e]);
                    r = t
                } else if ("array" !== _(r)) {
                    for (let e = 1; e < n; e++) t.push(arguments[e]);
                    r = t
                }
                let o = K(e),
                    i = D(U(e)),
                    f = ("bigint" === i || JSON.stringify(o, q), r),
                    a = k(r)[1];
                "bigint" === a || JSON.stringify(f, q);
                r = k(r)[0], fe(U(e), r), Z("create new key", "push", void 0, e, o, f, i, a, P())
            }
        }, le.quotaused = function() {
            if (!m) return !1;
            let e, r, t = "",
                n = localStorage.length;
            if (0 !== localStorage.length) {
                for (let o = n; o--;) t += (e = localStorage.key(o)) + (r = F(e));
                return O(2 * j(t))
            }
            return O(0)
        }, le.remove = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            var r = K(e),
                t = D(U(e));
            return L(U(e)) ? (localStorage.removeItem(U(e)), Z("remove key", "remove", e, void 0, r, void 0, t, void 0, P()), n ? "key removed" : void 0) : void 0
        }, le.rename = function(e, r) {
            if (!m) return !1;
            if (void 0 === e) throw new Error("You must supply a key to rename.");
            if (!L(U(e))) throw new Error("The supplied key does not exist");
            if (void 0 === r) throw new Error("You must supply a new name for the existing key.");
            if (e === r) throw new Error("Cannot rename an existing key to its current name.");
            if (L(U(r))) throw new Error("Cannot rename " + e + ", as " + r + " already exists.");
            var t = K(e),
                n = D(U(e)),
                o = k(t)[0];
            localStorage.removeItem(U(e)), fe(U(r), o), Z("key name change", "rename", e, r, t, t, n, n, P())
        }, le.safeget = function(e, r) {
            return !!m && (L(U(e)) ? (n = F(U(e)), void 0 === r ? (n = ue(n, t, e), n = ne(n, t, e)) : (n = ue(n, r, e), n = ne(n, r, e)), n = E(n)) : void 0);
            var n
        }, le.safeset = function(e, r, f) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (void 0 === r) throw new Error(i);
            var a = "",
                u = F(U(e)),
                l = null === u ? void 0 : u,
                s = D(U(e)),
                c = "bigint" === s ? l : JSON.stringify(l, q),
                d = "",
                h = "obfuscated key",
                g = JSON.stringify(d, q);
            if (r = k(r)[0], void 0 === f ? (r = $(r, t, e), r = ue(r, t, e), a = " with global scramble key") : (r = $(r, f, e), r = ue(r, f, e), a = " with user scramble key"), fe(U(e), r), d = F(U(e)), c !== g || s !== h)
                if (void 0 === l) {
                    if (Z("create new key" + a, "safeset", void 0, e, l, d, s, h, P()), n) return "New obfuscated key created" + a
                } else if (l !== d && (Z("key value change" + a, "safeset", e, void 0, l, d, s, h, P()), n)) return "Existing key has been overwritten with obfuscated value created" + a
        }, le.set = function(e, r) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (void 0 === r) throw new Error(i);
            var t = K(e),
                f = D(U(e)),
                a = "bigint" === f ? t : JSON.stringify(t, q),
                u = r,
                l = k(r)[1],
                s = "bigint" === l ? u : JSON.stringify(u, q);
            if (r = k(r)[0], fe(U(e), r), a !== s || f !== l)
                if (void 0 === t) {
                    if (Z("create new key", "set", void 0, e, t, u, f, l, P()), n) return "New " + l + " key created"
                } else if (Z("key value change", "set", e, void 0, t, u, f, l, P()), n) return "Existing key has been overwritten"
        }, le.setscramblekey = function(e) {
            if (!m) return !1;
            if (void 0 === e) throw new Error("No scramble key specified");
            return H(e), n ? "The new global scramble key is set" : void 0
        }, le.showdupes = function(e = !0) {
            if (!m) return !1;
            let r = X();
            return e && G(r), r.length ? r : n ? "No duplicate values in the store" : void 0
        }, le.showkeys = function(e, r = !0, t = !0) {
            if (!m) return !1;
            if (void 0 === e) throw new Error("No key value supplied");
            let o, i = "",
                f = new Array,
                a = I();
            for (let t = a.length; t--;) o = a[t], i = J(o), JSON.stringify(i, q) === JSON.stringify(e, q) && (r && (o = ee(o)), f.push(o));
            return t && G(f), f.length ? f : n ? "No keys have that value" : void 0
        }, le.showkeytypes = function(e, r = !0, t = !0) {
            if (!m) return !1;
            if (void 0 === e) throw new Error("No data type supplied");
            if ("symbol" === e.toLowerCase()) throw new Error("Unsupported data type");
            if (!a.includes(e.toLowerCase())) throw new Error("Unknown data type");
            e = e.toLowerCase();
            let o, i = "",
                f = new Array,
                u = I();
            for (let t = u.length; t--;) o = u[t], i = D(o), ("number" === e && ("float" === i || "integer" === i) || "number" !== e && i === e) && (r && (o = ee(o)), f.push(o));
            return t && G(f), f.length ? f : n ? "No keys are of that type" : void 0
        }, le.showprefix = function() {
            return !!m && (n ? "The key prefix (" + p + ".) adds " + se + " to each key name (stored using " + ce + ")" : p + ".")
        }, le.showtype = function(e) {
            if (!m) return !1;
            let r;
            if (void 0 === e) throw new Error(o);
            return r = D(U(e)), n ? void 0 === r ? "Key does not exist and cannot be checked" : "array" === r ? "This key is an Array Key" : "Key has value whose data type is " + r : r
        }, le.size = function(e) {
            if (!m) return !1;
            let r = K(e);
            return void 0 !== r && (r = M(r)), n ? void 0 === r ? "Key does not exist and cannot be checked" : "Key value has " + r + " codepoints" : r
        }, le.softset = function(e, r) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (void 0 === r) throw new Error(i);
            var t = k(r)[1],
                f = r;
            return L(U(e)) ? 1 === n ? "Key already exists and cannot be overwritten" : void 0 : (r = k(r)[0], fe(U(e), r), Z("create new key", "softset", void 0, e, void 0, f, void 0, t, P()), 1 === n ? "array" === t ? "New Array Key created" : "New " + t + " key created" : void 0)
        }, le.uncrunch = function(e) {
            return !!m && te(e)
        }, le.valbytes = function(e) {
            if (!m) return !1;
            let r;
            return void 0 === e ? O(oe()) : "0 bytes" !== (r = O(oe(U(e)))) ? r : void 0
        }, le.valbytesall = function(e) {
            if (!m) return !1;
            let r;
            return void 0 === e ? O(ie()) : "0 bytes" !== (r = O(ie(U(e)))) ? r : void 0
        }, le.verbosity = function(e) {
            return !!m && (void 0 !== (e = Number(e)) && (0 !== e && 1 !== e || function(e) {
                n = e
            }(e)), "Verbosity is " + (1 === n ? "on" : "off"))
        }, le.where = function(e, r) {
            if (!m) return !1;
            if (void 0 === e) throw new Error(o);
            if (void 0 === r) throw new Error(i);
            if (!L(U(e))) return;
            if ("array" !== D(U(e))) throw new Error(f);
            let t = 0,
                a = K(e);
            for (let e = 0; e < a.length; e++)
                if (JSON.stringify(a[e], q) === JSON.stringify(r, q)) {
                    t = e + 1;
                    break
                }
            return n ? "Value was found in the Array Key at position " + t : t
        }, le.xorString = function(e, r, t) {
            if (!m) return !1;
            if (void 0 === e) throw new Error("No string value supplied");
            if (void 0 === r) throw new Error("No seed value supplied");
            if (void 0 === t) throw new Error(o);
            return ue(e, r, t)
        }, le.unshuffleString = function(e, r, t) {
            if (!m) return !1;
            if (void 0 === e) throw new Error("No string value supplied");
            if (void 0 === r) throw new Error("No seed value supplied");
            if (void 0 === t) throw new Error(o);
            return ne(e, r, t)
        }, le.shuffleString = function(e, r, t) {
            if (!m) return !1;
            if (void 0 === e) throw new Error("No string value supplied");
            if (void 0 === r) throw new Error("No seed value supplied");
            if (void 0 === t) throw new Error(o);
            return $(e, r, t)
        }, le.version = "2.0.0";
        var se = O(j(le.showprefix())),
            ce = O(2 * j(le.showprefix()));
        return function() {
            let t, n, o = !1,
                i = !1,
                f = localStorage.length,
                a = le.showprefix();
            if (m) {
                if (void 0 !== e || r && r.includes("/q") || (i = !0, console.info("No prefix specified. Creating a %crandom %cprefix --\x3e %c" + le.showprefix(), "font-style: italic;", "font-style: normal;", "font-weight: bold;")), "" !== e || r && -1 !== r.indexOf("/q") || console.info("Empty prefix given (%c" + le.showprefix() + "%c), but a usable prefix is %cstrongly recommended%c to organize keys!", "font-weight: bold;", "font-style: normal;", "text-decoration: underline;", "text-decoration: none;"), r && -1 !== r.indexOf("/q") || console.log("💼 localDataStorage instantiated. " + (!0 === i ? "The random prefix" : "Your specified prefix") + " (%c" + a + "%c) adds " + se + " to every key name (stored using " + ce + ").", "font-weight: bold;", "font-style: normal;"), r && r.includes("/w")) {
                    for (let e = f; e--;)
                        if (-1 !== (t = localStorage.key(e)).indexOf(a)) {
                            o = !0;
                            break
                        }
                    o && console.warn("%cAttention! %cKeys with this prefix already exist in localStorage for this domain!", "color: rgb(230,0,0); font-weight: bold;", "color: rgb(230,0,0);")
                }
                r && r.includes("/t") && (n = b("localStorage")) && console.log("Tested: The localStorage API is available")
            } else console.warn("%cError! Cannot access localStorage! %cBailing out...", "color: rgb(230,0,0); font-weight: bold;", "color: rgb(230,0,0);")
        }(), le
    }(e, r)
};
