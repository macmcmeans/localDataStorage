/*/////////////////////////////////////////////
localDataStorage 1.3.1
https://github.com/macmcmeans/localDataStorage/blob/master/localDataStorage-1.3.1.trim.js
///////////////////////////////////////////////
Copyright 2017 - 2022 William P. "Mac" McMeans
LICENSE: BSD 3-Clause License
*/
var localDataStorage = function(e, r) {
    return function(n, o) {
        "use strict";
        if (n && "/q" === n && void 0 === o && (o = n, n = ""), o && "/q" !== o) throw new Error("Invalid switch supplied");
        var e = "1.3.1", u = "Key is undefined", s = "Key's value is undefined", f = "No key value supplied", i = function() {
            return String.fromCodePoint(128);
        }, a = function() {
            return String.fromCodePoint(129);
        }, c = function() {
            return String.fromCodePoint(141);
        }, l = function() {
            return String.fromCodePoint(142);
        }, d = function() {
            return String.fromCodePoint(143);
        }, h = function() {
            return String.fromCodePoint(144);
        }, g = 123456789, r = new Date().getTime() + ":" + (1e8 * Math.random() | 0), v = "" === n ? "" : void 0 === n ? r : n, m = function(e) {
            var r, t = "__storage_test__";
            try {
                return (r = window[e]).setItem(t, t), r.removeItem(t), !0;
            } catch (e) {
                return !1;
            }
        }("localStorage"), p = function(e) {
            return function(o) {
                function r(e) {
                    var r = e;
                    if (e < 10) throw new Error("Specified seed must be greater than 9");
                    i = (r += "").length, a = "";
                    for (var t = 0; t < i; t++) a += r[i - t - 1];
                    "string" == typeof o && (i = 2 * (i + 1)), f = +("0." + a), u = +("0." + i);
                    for (var n = 0; n < 20; n++) f = ((u += f) * f + u) % 1;
                }
                var i, a, f, u, e = new Date().getTime();
                r(o || e);
                var t = function() {
                    return f = ((u += f) * f + u) % 1;
                };
                return t.seed = function(e) {
                    r(e);
                }, t;
            }(e);
        }, w = function(r) {
            var e, t = "";
            if (void 0 === r) throw new Error("No value to convert from");
            if (-1 === r.indexOf(a()) && -1 === r.indexOf(c()) && -1 === r.indexOf(l()) && -1 === r.indexOf(d()) && -1 === r.indexOf(h())) if ("{" === r[0] || "[" === r[0]) try {
                t = JSON.parse(r);
            } catch (e) {
                t = r;
            } else t = r == +r ? +r : r; else "" === t && (e = a(), -1 !== r.indexOf(e) && (-1 !== (r = r.substr(0, r.indexOf(e))).indexOf(i()) && (r = r.substr(1, r.length), 
            r = Q(r)), t = r)), "" === t && (e = c(), -1 !== r.indexOf(e) && (r = r.substr(0, r.indexOf(e)), 
            t = new Date(JSON.parse(r)))), "" === t && (e = l(), -1 !== r.indexOf(e) && (r = r.substr(0, r.indexOf(e)), 
            t = parseFloat(r))), "" === t && (e = d(), -1 !== r.indexOf(e) && (t = "1" === (r = r.substr(0, r.indexOf(e))))), 
            "" === t && (e = h(), -1 !== r.indexOf(e) && (r = r.substr(0, r.indexOf(e)), t = JSON.parse(r)));
            return t;
        }, y = function(e) {
            var r = "", t = "";
            if (void 0 === e) throw new Error("No value to convert to");
            return "string" == typeof e ? (t = "string", r = a(), M(e) && (t = "compressed string", 
            e = b(e), e = i() + e)) : "object" == typeof e && (e instanceof Date || e == new Date(e)) ? (t = "date", 
            r = c(), e = JSON.stringify(e)) : "number" == typeof e ? (t = "integer", -1 !== (e + "").indexOf(".") && (t = "float"), 
            r = l(), e += "") : "boolean" == typeof e ? (t = "boolean", r = d(), e = Number(e), 
            e += "") : "object" == typeof e && (t = "object", null === e && (t = "null"), e instanceof Array && (t = "array"), 
            r = h(), e = JSON.stringify(e)), "" !== r && (e += r), [ e, t ];
        }, b = function(e) {
            return B.compress(e);
        }, t = function(e) {
            for (var r = 0; 1024 < e; ) r++, e /= 1024;
            return e.toFixed(2) + " " + [ "bytes", "KB", "MB" ][r];
        }, S = function(e) {
            var r = .059886774281039834 * e;
            return r += 21845.33332824707, r -= e = 0 | r, e = 0 | (r *= e), (e ^= 4294967296 * (r -= e)) >>> 0;
        }, O = function(e) {
            if (void 0 === e) throw new Error(u);
            var r = localStorage.getItem(e);
            return r ? w(r) : void 0;
        }, x = function(e) {
            for (var r = (e = "" + e).length, t = r - 1; 0 <= t; t--) {
                var n = e.charCodeAt(t);
                127 < n && n <= 2047 ? r++ : 2047 < n && n <= 65535 && (r += 2), 56320 <= n && n <= 57343 && t--;
            }
            return r;
        }, k = function(e) {
            return K(e = "" + e).length;
        }, E = function() {
            var e = R(), r = {}, t = "";
            if (e.length) for (var n = 0, o = e.length; n < o; n++) {
                for (var i = new Array(), a = 0, f = localStorage.length; a < f; a++) t = localStorage.key(a), 
                JSON.stringify(O(t)) === JSON.stringify(e[n]) && (t = z(t), i.push(t));
                r[n] = {
                    value: e[n],
                    keys: i
                };
            }
            return {
                dupecount: e.length,
                dupes: r
            };
        }, C = function() {
            return v + ".";
        }, A = function(e) {
            if (void 0 !== e) {
                var r, t = JSON.stringify(e), n = 0, o = "", i = "", a = function(e) {
                    var r = 0;
                    if (0 === e.length) return r;
                    for (var t = 0, n = e.length; t < n; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
                    return r;
                };
                o = e instanceof Array ? "ARRAY1" : "boolean" == typeof e ? "BOOLEAN2" : e instanceof Date ? "DATE4" : "number" == typeof e ? -1 !== (e + "").indexOf(".") ? "FLOAT8" : "INTEGER16" : "string" == typeof e ? "STRING32" : "OBJECT64", 
                i = t + t.length + o + a(t) + a((r = t, Array.from(r).reverse().join("")));
                for (var f = 0; f < i.length; f++) n += i.charCodeAt(f);
                return [ n, i ];
            }
        }, N = function(e) {
            return C() + e;
        }, I = function(e) {
            if (void 0 === e) throw new Error("No key specified");
            var r = "", t = "";
            if ("undefined" == typeof _valueToCheck) {
                if (!J(e)) return;
                if ("" === (t = localStorage.getItem(e))) return "undefined";
            } else t = _valueToCheck;
            return -1 === t.indexOf(a()) && -1 === t.indexOf(c()) && -1 === t.indexOf(l()) && -1 === t.indexOf(d()) && -1 === t.indexOf(h()) ? "[" === t[0] ? r = "presumed array" : "{" === t[0] ? r = "presumed object" : t == +t ? r = "presumed number" : (t = Y(t, g, e), 
            -1 !== (t = q(t, g, e)).indexOf(a()) ? r = "scrambled string" : -1 !== t.indexOf(c()) ? r = "scrambled date" : -1 !== t.indexOf(l()) ? (r = "scrambled number", 
            r = -1 !== t.indexOf(".") ? "scrambled float" : "scrambled integer") : -1 !== t.indexOf(d()) ? r = "scrambled boolean" : -1 !== t.indexOf(h()) ? (r = "scrambled object", 
            "[" === t[0] && (r = "scrambled array")) : r = "presumed string") : ("" === r && -1 !== t.indexOf(a()) && (r = "string", 
            -1 !== t.indexOf(i()) && (r = "compressed string")), "" === r && -1 !== t.indexOf(c()) && (r = "date"), 
            "" === r && -1 !== t.indexOf(l()) && (r = "number", r = -1 !== t.indexOf(".") ? "float" : "integer"), 
            "" === r && -1 !== t.indexOf(d()) && (r = "boolean"), "" === r && -1 !== t.indexOf(h()) && (r = "object", 
            t[0] + t[1] + t[2] + t[3] === "null" && (r = "null"), "[" === t[0] && (r = "array"))), 
            r;
        }, J = function(e) {
            return null !== localStorage.getItem(e);
        }, M = function(e) {
            var r, t;
            return r = e === B.decompress(B.compress(e)), t = x(B.compress(e)) + 3 < x(e), !(!r || !t);
        }, _ = function(e) {
            var r = "", t = 0;
            if (void 0 === e) {
                for (var n = 0, o = localStorage.length; n < o; ++n) r += localStorage.key(n);
                t = x(r);
            } else J(e) && (t = x(e));
            return t *= 2;
        }, D = function(e) {
            return Array.from(e).reverse().join("");
        }, T = function(e, r, t, n, o, i, a, f, u) {
            var s = new CustomEvent("localDataStorage", {
                detail: {
                    message: e,
                    method: r,
                    oldkey: t,
                    newkey: n,
                    oldval: JSON.stringify(o),
                    newval: JSON.stringify(i),
                    oldtype: a,
                    newtype: f,
                    prefix: u,
                    timestamp: +new Date()
                },
                bubbles: !1,
                cancelable: !0
            });
            document.dispatchEvent(s);
        }, j = function(e, r) {
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(s);
            try {
                localStorage.setItem(e, r);
            } catch (e) {
                throw !e || "QUOTA_EXCEEDED_ERR" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name && "QuotaExceededError" !== e.name ? new Error("An error occurred writing to localStorage") : new Error("Quota exceeded for localStorage");
            }
        }, R = function() {
            for (var e, r, t = new Array(), n = 0, o = 0, i = localStorage.length; o < i; o++) -1 !== (r = localStorage.key(o)).indexOf(C()) && (t[n++] = localStorage.getItem(r));
            return 0 === (e = function(e) {
                for (var r = new Array(), t = new Array(), n = 0, o = e.length; n < o; n++) t = e[n], 
                e.lastIndexOf(t) !== n && -1 === r.indexOf(t) && r.push(t);
                for (n = 0, o = r.length; n < o; n++) r[n] = w(r[n]);
                return r;
            }(t)).length ? [] : e;
        }, P = function(e, r, t) {
            for (var n = A(r)[0] + A(t)[0], o = S(n) + "", i = D(o), a = Number(i), f = p(a), u = Number((a + "").charAt(2)) + Number((a + "").charAt(1)) + Number((a + "").charAt(0)), s = k(A(t)[1]) + k(A(r)[1]) + u, c = 0; c < s; c++) f();
            return e += String.fromCharCode(Math.floor(966 * Math.random()) + 35) + String.fromCharCode(Math.floor(966 * Math.random()) + 35) + String.fromCharCode(Math.floor(966 * Math.random()) + 35) + String.fromCharCode(Math.floor(966 * Math.random()) + 35), 
            function(e, r) {
                var t, n = e.length;
                for (r = r || function() {
                    var e = new Uint32Array(2);
                    return window.crypto.getRandomValues(e), +("0." + e[0] + e[1]);
                }; --n; ) e[t = Math.floor(r() * (n + 1))] = [ e[n], e[n] = e[t] ][0];
            }(e = (e = D(e)).split(""), f), e = e.join("");
        }, B = function() {
            function u() {}
            return u.codebook = {
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
            }, u.reverse_codebook = [ " ", "the", "e", "t", "a", "of", "o", "and", "i", "n", "s", "e ", "r", " th", " t", "in", "he", "th", "h", "he ", "to", "\r\n", "l", "s ", "d", " a", "an", "er", "c", " o", "d ", "on", " of", "re", "of ", "t ", ", ", "is", "u", "at", "   ", "n ", "or", "which", "f", "m", "as", "it", "that", "\n", "was", "en", "  ", " w", "es", " an", " i", "\r", "f ", "g", "p", "nd", " s", "nd ", "ed ", "w", "ed", "http://", "for", "te", "ing", "y ", "The", " c", "ti", "r ", "his", "st", " in", "ar", "nt", ",", " to", "y", "ng", " h", "with", "le", "al", "to ", "b", "ou", "be", "were", " b", "se", "o ", "ent", "ha", "ng ", "their", '"', "hi", "from", " f", "in ", "de", "ion", "me", "v", ".", "ve", "all", "re ", "ri", "ro", "is ", "co", "f t", "are", "ea", ". ", "her", " m", "er ", " p", "es ", "by", "they", "di", "ra", "ic", "not", "s, ", "d t", "at ", "ce", "la", "h ", "ne", "as ", "tio", "on ", "n t", "io", "we", " a ", "om", ", a", "s o", "ur", "li", "ll", "ch", "had", "this", "e t", "g ", "e\r\n", " wh", "ere", " co", "e o", "a ", "us", " d", "ss", "\n\r\n", "\r\n\r", '="', " be", " e", "s a", "ma", "one", "t t", "or ", "but", "el", "so", "l ", "e s", "s,", "no", "ter", " wa", "iv", "ho", "e a", " r", "hat", "s t", "ns", "ch ", "wh", "tr", "ut", "/", "have", "ly ", "ta", " ha", " on", "tha", "-", " l", "ati", "en ", "pe", " re", "there", "ass", "si", " fo", "wa", "ec", "our", "who", "its", "z", "fo", "rs", ">", "ot", "un", "<", "im", "th ", "nc", "ate", "><", "ver", "ad", " we", "ly", "ee", " n", "id", " cl", "ac", "il", "</", "rt", " wi", "div", "e, ", " it", "whi", " ma", "ge", "x", "e c", "men", ".com" ], 
            u.flush_verbatim = function(e) {
                var r, t, n, o;
                for (t = [], 1 < e.length ? (t.push(String.fromCharCode(255)), t.push(String.fromCharCode(e.length - 1))) : t.push(String.fromCharCode(254)), 
                n = 0, o = e.length; n < o; n++) r = e[n], t.push(r);
                return t;
            }, u.compress = function(e) {
                var r, t, n, o, i, a, f;
                for (a = "", i = [], n = 0; n < e.length; ) {
                    for (t = !1, o = 7, e.length - n < 7 && (o = e.length - n), o = f = o; o <= 0 ? f < 0 : 0 < f; o = o <= 0 ? ++f : --f) if (null != (r = u.codebook[e.substr(n, o)])) {
                        a && (i = i.concat(u.flush_verbatim(a)), a = ""), i.push(String.fromCharCode(r)), 
                        n += o, t = !0;
                        break;
                    }
                    t || (a += e[n], n++, 256 === a.length && (i = i.concat(u.flush_verbatim(a)), a = ""));
                }
                return a && (i = i.concat(u.flush_verbatim(a))), i.join("");
            }, u.decompress = function(n) {
                var o, e, r, t, i, a;
                for (t = "", e = function() {
                    var e, r, t;
                    for (t = [], o = e = 0, r = n.length; 0 <= r ? e < r : r < e; o = 0 <= r ? ++e : --e) t.push(n.charCodeAt(o));
                    return t;
                }(), o = 0; o < e.length; ) if (254 === e[o]) {
                    if (o + 1 > e.length) throw "Malformed SMAZ";
                    t += n[o + 1], o += 2;
                } else if (255 === e[o]) {
                    if (o + e[o + 1] + 2 >= e.length) throw "Malformed SMAZ";
                    for (r = i = 0, a = e[o + 1] + 1; 0 <= a ? i < a : a < i; r = 0 <= a ? ++i : --i) t += n[o + 2 + r];
                    o += 3 + e[o + 1];
                } else t += u.reverse_codebook[e[o]], o++;
                return t;
            }, u;
        }(), z = function(e) {
            return e.slice(C().length, e.length);
        }, K = function(e) {
            for (var r, t, n = [], o = 0, i = e.length; o < i; ) 55296 <= (r = e.charCodeAt(o++)) && r <= 56319 && o < i ? 56320 == (64512 & (t = e.charCodeAt(o++))) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(r), 
            o--) : n.push(r);
            return n;
        }, Q = function(e) {
            return B.decompress(e);
        }, q = function(e, r, t) {
            for (var n = A(r)[0] + A(t)[0], o = S(n) + "", i = D(o), a = Number(i), f = p(a), u = Number((a + "").charAt(2)) + Number((a + "").charAt(1)) + Number((a + "").charAt(0)), s = k(A(t)[1]) + k(A(r)[1]) + u, c = 0; c < s; c++) f();
            return e = (e = function(e, r) {
                for (var t, n = new Array(e.length), o = new Array(e.length), i = e.length, a = 0; a < i; a++) o[a] = a;
                for (a = i - 1; 0 < a; a--) t = Math.floor(r() * (a + 1)), o[a] = [ o[t], o[t] = o[a] ][0];
                for (a = 0; a < i; a++) n[o[a]] = e[a];
                return n;
            }(e = e.split(""), f)).join(""), e = D(e);
        }, F = function(e) {
            var r = "", t = 0;
            if (void 0 === e) {
                for (var n = 0, o = localStorage.length; n < o; ++n) r += O(localStorage.key(n));
                t = x(r);
            } else J(e) && (t = "boolean" === I(e) ? 1 : x(O(e)));
            return t *= 2;
        }, U = function(e) {
            var r = "", t = 0;
            if (void 0 === e) {
                for (var n = 0, o = localStorage.length; n < o; ++n) r += localStorage.getItem(localStorage.key(n));
                t = x(r);
            } else J(e) && (t = x(localStorage.getItem(e)));
            return t *= 2;
        }, Y = function(e, r, t) {
            var o, n = "", i = A(r)[0], a = S(i) + "", f = D(a), u = Number(f) + A(t)[0] + A(r)[0], s = p(u + ""), c = i + Number((u + "").charAt(0)) + Number((u + "").charAt(1)) + Number((u + "").charAt(2)) + Number(a.charAt(0)), l = k(A(t)[1]) + k(A(r)[1]) + c, d = (o = 4022871197, 
            function(e) {
                for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                    var n = .02519603282416938 * (o += e.charCodeAt(r));
                    n -= o = n >>> 0, o = (n *= o) >>> 0, o += 4294967296 * (n -= o);
                }
                return 2.3283064365386963e-10 * (o >>> 0);
            }), h = A(r)[1], g = 0, v = 0, m = 0, w = 0;
            e += "";
            for (var y = 0; y < l; y++) s();
            y = 0;
            for (var b = e.length; y < b; y++) m = g = Math.floor(257 * s()) + 0, w = i, v = Math.floor(d(h) * (w - m + 1)) + m, 
            s() < .537 ? n += String.fromCharCode(g ^ e.charCodeAt(y)) : n += String.fromCharCode(v ^ e.charCodeAt(y));
            return n;
        }, G = function() {
            return "localDataStorage 1.3.1 using " + ("" === v ? "no prefix" : v);
        };
        G.bytes = function(e) {
            return m ? t(void 0 !== e ? F(N(e)) + _(N(e)) : F() + _()) : m;
        }, G.bytesall = function(e) {
            return m ? t(void 0 !== e ? U(N(e)) + _(N(e)) : U() + _()) : m;
        }, G.chopget = function(e) {
            return m ? J(N(e)) ? (r = O(N(e)), t = this.showtype(e), localStorage.removeItem(N(e)), 
            T("excise key", "chopget", e, void 0, r, void 0, t, void 0, C()), r) : void 0 : m;
            var r, t;
        }, G.clear = function() {
            if (!m) return m;
            for (var e, r, t, n, o = 0, i = C(), a = localStorage.length; a--; ) -1 !== (e = localStorage.key(a)).indexOf(i) && (r = e.replace(i, ""), 
            t = O(N(r)), n = this.showtype(r), localStorage.removeItem(e), o++, T("remove all keys", "clear", r, void 0, t, void 0, n, void 0, i));
            return o + (1 === o ? " key removed" : " keys removed");
        }, G.countdupes = function() {
            return m ? R().length : m;
        }, G.crunch = function(e) {
            return m ? b(e) : m;
        }, G.forcehasval = function(e) {
            var r = !1;
            if (!m) return m;
            for (var t = 0, n = localStorage.length; t < n; t++) e == localStorage.getItem(localStorage.key(t)) && (r = !0);
            return r;
        }, G.forceget = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return localStorage.getItem(N(e));
        }, G.forceset = function(e, r) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(s);
            var t = O(N(e)), n = this.showtype(e), o = r, i = y(r)[1];
            r += "", j(N(e), r), JSON.stringify(t) === JSON.stringify(o) && n === i || (void 0 === t ? T("create new key", "forceset", void 0, e, t, o, n, i, "string") : T("key value change", "forceset", e, void 0, t, o, n, i, "string"));
        }, G.get = function(e) {
            return m ? O(N(e)) : m;
        }, G.getscramblekey = function() {
            return m ? g : m;
        }, G.haskey = function(e) {
            return m ? J(N(e)) : m;
        }, G.hasval = function(e) {
            return m ? function(e) {
                for (var r = JSON.stringify(e), t = "", n = 0, o = localStorage.length; n < o; n++) if (-1 !== (t = localStorage.key(n)).indexOf(C()) && r === JSON.stringify(O(t))) return !0;
                return !1;
            }(e) : m;
        }, G.isarray = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return "array" === I(N(e));
        }, G.isboolean = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return "boolean" === I(N(e));
        }, G.isdate = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return "date" === I(N(e));
        }, G.isfloat = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return "float" === I(N(e));
        }, G.isinteger = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return "integer" === I(N(e));
        }, G.isnull = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return "null" === I(N(e));
        }, G.isnumber = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return "float" === I(N(e)) || "integer" === I(N(e));
        }, G.isobject = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return "object" === I(N(e));
        }, G.isstring = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return "string" === I(N(e));
        }, G.keybytes = function(e) {
            return m ? t(void 0 === e ? _() : _(N(e))) : m;
        }, G.keys = function() {
            var e = 0;
            if (!m) return m;
            for (var r = localStorage.length; r--; ) -1 !== localStorage.key(r).indexOf(C()) && e++;
            return e;
        }, G.listdupes = function() {
            return m ? E() : m;
        }, G.remove = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            var r = O(N(e)), t = this.showtype(e);
            return J(N(e)) ? (localStorage.removeItem(N(e)), T("remove key", "remove", e, void 0, r, void 0, t, void 0, C()), 
            "1 key removed") : "0 keys removed";
        }, G.rename = function(e, r) {
            if (!m) return m;
            if (void 0 === e) throw new Error("You must supply a key to rename.");
            if (!J(N(e))) throw new Error("The supplied key does not exist");
            if (void 0 === r) throw new Error("You must supply a new name for the existing key.");
            if (e === r) throw new Error("Cannot rename an existing key to its current name.");
            if (J(N(r))) throw new Error("Cannot perform rename, as " + r + " already exists.");
            var t = O(N(e)), n = this.showtype(e), o = y(t)[0];
            localStorage.removeItem(N(e)), j(N(r), o), T("key name change", "rename", e, r, t, t, n, n, C());
        }, G.safeget = function(e, r) {
            var t;
            return m ? J(N(e)) ? (t = localStorage.getItem(N(e)), t = void 0 === r ? (t = Y(t, g, e), 
            q(t, g, e)) : (t = Y(t, r, e), q(t, r, e)), t = w(t)) : void 0 : m;
        }, G.safeset = function(e, r, t) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(s);
            var n, o = "", i = null === this.forceget(e) ? void 0 : this.forceget(e), a = this.showtype(e), f = "scrambled key";
            r = y(r)[0], o = void 0 === t ? (r = P(r, g, e), r = Y(r, g, e), " using global scramble key") : (r = P(r, t, e), 
            r = Y(r, t, e), " using user scramble key"), j(N(e), r), i !== (n = this.forceget(e)) && (void 0 === i ? T("create new key" + o, "safeset", void 0, e, i, n, a, f, C()) : T("key value change" + o, "safeset", e, void 0, i, n, a, f, C()));
        }, G.set = function(e, r) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(s);
            var t = O(N(e)), n = this.showtype(e), o = r, i = y(r)[1];
            r = y(r)[0], j(N(e), r), JSON.stringify(t) === JSON.stringify(o) && n === i || (void 0 === t ? T("create new key", "set", void 0, e, t, o, n, i, C()) : T("key value change", "set", e, void 0, t, o, n, i, C()));
        }, G.setscramblekey = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error("No scramble key specified");
            g = e;
        }, G.showdupes = function() {
            return m ? R() : m;
        }, G.showkey = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(f);
            for (var r = "", t = new Array(), n = "", o = 0, i = 0, a = localStorage.length; i < a; i++) -1 !== (n = localStorage.key(i)).indexOf(C()) && (t[o++] = n);
            t.sort();
            for (i = 0, a = t.length; i < a; i++) if (n = t[i], r = O(n), JSON.stringify(r) === JSON.stringify(e)) return z(n);
        }, G.showkeys = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(f);
            for (var r = E(), t = r.dupecount, n = JSON.stringify(e), o = "", i = 0; i < t; i++) if (o = r.dupes[i].value, 
            n === (o = JSON.stringify(o))) return r.dupes[i].keys;
        }, G.showprefix = function() {
            return m ? v + "." : m;
        }, G.showtype = function(e) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            return I(N(e));
        }, G.size = function(e) {
            return m ? J(N(e)) ? k(O(N(e))) : void 0 : m;
        }, G.softset = function(e, r) {
            if (!m) return m;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(s);
            var t = y(r)[1];
            J(N(e)) || (j(N(e), r), T("create new key", "softset", void 0, e, void 0, r, void 0, t, C()));
        }, G.uncrunch = function(e) {
            return m ? Q(e) : m;
        }, G.valbytes = function(e) {
            return m ? t(void 0 === e ? F() : F(N(e))) : m;
        }, G.valbytesall = function(e) {
            return m ? t(void 0 === e ? U() : U(N(e))) : m;
        }, G.version = e;
        var L = t(x(v + ".")), Z = t(2 * x(v + "."));
        return function() {
            var e = !1;
            if (o && -1 !== o.indexOf("/q")) ; else if (m) if (void 0 === n) console.info("No prefix specified. Creating a %cgnarly %crandom prefix for use --\x3e %c" + v + ".", "font-style: italic;", "font-style: normal;", "font-weight: bold;"); else if ("" === n) console.info("Empty prefix given, but a usable prefix is %cstrongly recommended%c to organize keys!", "text-decoration: underline;", "text-decoration: none;"); else {
                for (var r = 0, t = localStorage.length; r < t; r++) if (-1 !== localStorage.key(r).indexOf(v + ".")) {
                    e = !0;
                    break;
                }
                e ? console.warn("%cAttention! %cKeys with this prefix already exist in localStorage for this domain!", "color: red; font-weight: bold;", "color: red;") : console.log("Instantiated. Prefix adds " + L + " to every key name (stored using " + Z + ").");
            } else console.warn("%cAttention! Cannot access localStorage! %cBailing out...", "color: red; font-weight: bold;", "color: red;");
        }(), G;
    }(e, r);
};