/*///////////////////////////////////////////////////////////////////////////////////////////////////
localDataStorage 1.3.0
/////////////////////////////////////////////////////////////////////////////////////////////////////
This version is
Copyright (c) 2017, 2020 W. "Mac" McMeans
All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
This version of localDataStorage incorporates SMAZ (a simple string compression library written in C)
by Salvatore Sanfilippo (https://github.com/antirez/smaz), under a BSD license. The derivative work
included in this project (a javascript port of C code) was written by personalcomputer
(https://github.com/personalcomputer/smaz.js), under the same BSD license. 
/////////////////////////////////////////////////////////////////////////////////////////////////////
SMAZ
/////////////////////////////////////////////////////////////////////////////////////////////////////
Original work Copyright (c) 2006-2009 Salvatore Sanfilippo, BSD License.
Derivative work Copyright (c) 2013 John Miller. BSD License
All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    * Neither the name of Smaz nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////*/

var localDataStorage = function(e, r) {
    return function(o, i) {
        "use strict";
        if (void 0 !== i || !o || "/q" !== o && "/w" !== o || (i = o, o = ""), i && "/q" !== i && "/w" !== i) throw new Error("𝖨𝗇𝗏𝖺𝗅𝗂𝖽 𝗌𝗐𝗂𝗍𝖼𝗁 𝗌𝗎𝗉𝗉𝗅𝗂𝖾𝖽, 𝗎𝗌𝖾 /𝗾 𝗈𝗋 /𝘄");
        var e, r, t, n, a, f = "1.3.0", u = "𝖳𝗁𝖾 𝗄𝖾𝗒 𝗂𝗌 𝗎𝗇𝖽𝖾𝖿𝗂𝗇𝖾𝖽", c = "𝖳𝗁𝖾 𝗄𝖾𝗒 𝗏𝖺𝗅𝗎𝖾 𝗂𝗌 𝗎𝗇𝖽𝖾𝖿𝗂𝗇𝖾𝖽", l = "𝖭𝗈 𝗄𝖾𝗒 𝗏𝖺𝗅𝗎𝖾 𝗐𝖺𝗌 𝗌𝗎𝗉𝗉𝗅𝗂𝖾𝖽", s = function() {
            return String.fromCodePoint(128);
        }, h = function() {
            return String.fromCodePoint(129);
        }, d = function() {
            return String.fromCodePoint(141);
        }, g = function() {
            return String.fromCodePoint(142);
        }, v = function() {
            return String.fromCodePoint(143);
        }, w = function() {
            return String.fromCodePoint(144);
        }, m = 123456789, y = "" === o ? "" : ".", p = function() {
            return function(e) {
                var i, a, f, u, r, t = new Uint32Array(3), c = "", n = "aleaPRNG 1.1";
                function o(e) {
                    var o, r, t = (o = 4022871197, (r = function(e) {
                        for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                            var n = .02519603282416938 * (o += e.charCodeAt(r));
                            n -= o = n >>> 0, o = (n *= o) >>> 0, o += 4294967296 * (n -= o);
                        }
                        return 2.3283064365386963e-10 * (o >>> 0);
                    }).version = "Mash 0.9", r);
                    i = t(" "), a = t(" "), f = t(" "), u = 1;
                    for (var n = 0; n < e.length; n++) (i -= t(e[n])) < 0 && (i += 1), (a -= t(e[n])) < 0 && (a += 1), 
                    (f -= t(e[n])) < 0 && (f += 1);
                    c = t.version, t = null;
                }
                function l(e) {
                    return parseInt(e, 10) === e;
                }
                var s = function() {
                    var e = 2091639 * i + 2.3283064365386963e-10 * u;
                    return i = a, a = f, f = e - (u = 0 | e);
                };
                return s.fract53 = function() {
                    return s() + 11102230246251565e-32 * (2097152 * s() | 0);
                }, s.int32 = function() {
                    return 4294967296 * s();
                }, s.cycle = function(e) {
                    (e = void 0 === e ? 1 : +e) < 1 && (e = 1);
                    for (var r = 0; r < e; r++) s();
                }, s.range = function() {
                    var e, r;
                    return r = 1 === arguments.length ? arguments[e = 0] : (e = arguments[0], arguments[1]), 
                    arguments[0] > arguments[1] && (e = arguments[1], r = arguments[0]), l(e) && l(r) ? Math.floor(s() * (r - e + 1)) + e : s() * (r - e) + e;
                }, s.restart = function() {
                    o(r);
                }, s.seed = function() {
                    o(Array.prototype.slice.call(arguments));
                }, s.version = function() {
                    return n;
                }, s.versions = function() {
                    return n + ", " + c;
                }, 0 === e.length && (window.crypto.getRandomValues(t), e = [ t[0], t[1], t[2] ]), 
                o(r = e), s;
            }(Array.prototype.slice.call(arguments));
        }, b = (e = new Date().getTime(), r = e + "", t = Math.random(), n = p(e, r, t), 
        a = +r.slice(-2), n.cycle(a), e + ":" + n.int32()), S = void 0 === o ? b : "" === o ? "" : o, O = function(e) {
            var r, t = "__storage_test__";
            try {
                return (r = window[e]).setItem(t, t), r.removeItem(t), !0;
            } catch (e) {
                return !1;
            }
        }("localStorage"), x = !1, k = function(r) {
            var e, t = "";
            if (void 0 === r) throw new Error("No value to convert from");
            if (-1 === r.indexOf(h()) && -1 === r.indexOf(d()) && -1 === r.indexOf(g()) && -1 === r.indexOf(v()) && -1 === r.indexOf(w())) if ("{" === r[0] || "[" === r[0]) try {
                t = JSON.parse(r);
            } catch (e) {
                t = r;
            } else t = r == +r ? +r : r; else "" === t && (e = h(), -1 !== r.indexOf(e) && (-1 !== (r = r.substr(0, r.indexOf(e))).indexOf(s()) && (r = r.substr(1, r.length), 
            r = H(r)), t = r)), "" === t && (e = d(), -1 !== r.indexOf(e) && (r = r.substr(0, r.indexOf(e)), 
            t = new Date(JSON.parse(r)))), "" === t && (e = g(), -1 !== r.indexOf(e) && (r = r.substr(0, r.indexOf(e)), 
            t = parseFloat(r))), "" === t && (e = v(), -1 !== r.indexOf(e) && (t = "1" === (r = r.substr(0, r.indexOf(e))))), 
            "" === t && (e = w(), -1 !== r.indexOf(e) && (r = r.substr(0, r.indexOf(e)), t = JSON.parse(r)));
            return t;
        }, E = function(e) {
            var r = "", t = "";
            if (void 0 === e) throw new Error("No value to convert to");
            return "string" == typeof e ? (t = "string", r = h(), q(e) && (t = "compressed string", 
            e = A(e), e = s() + e)) : "object" == typeof e && (e instanceof Date || e == new Date(e)) ? (t = "date", 
            r = d(), e = JSON.stringify(e)) : "number" == typeof e ? (t = "integer", -1 !== (e + "").indexOf(".") && (t = "float"), 
            r = g(), e += "") : "boolean" == typeof e ? (t = "boolean", r = v(), e = Number(e), 
            e += "") : "object" == typeof e && (t = "object", e instanceof Array && (t = "array"), 
            r = w(), e = JSON.stringify(e)), "" !== r && (e += r), [ e, t ];
        }, A = function(e) {
            return L.compress(e);
        }, N = function(e) {
            for (var r = 0; 1024 < e; ) r++, e /= 1024;
            return e + " " + [ "bytes", "KB", "MB" ][r];
        }, C = new Intl.Collator(void 0, {
            usage: "sort",
            numeric: !0
        }), I = function(e) {
            var r = .059886774281039834 * e;
            return r += 21845.33332824707, r -= e = 0 | r, e = 0 | (r *= e), (e ^= 4294967296 * (r -= e)) >>> 0;
        }, J = function(e) {
            if (void 0 === e) throw new Error(u);
            var r = localStorage.getItem(e);
            return r ? k(r) : void 0;
        }, _ = function(e) {
            for (var r = (e = "" + e).length, t = r - 1; 0 <= t; t--) {
                var n = e.charCodeAt(t);
                127 < n && n <= 2047 ? r++ : 2047 < n && n <= 65535 && (r += 2), 56320 <= n && n <= 57343 && t--;
            }
            return r;
        }, D = function(e) {
            return Z(e = "" + e).length;
        }, j = function() {
            var e = G(), r = {}, t = "";
            if (e.length) for (var n = 0, o = e.length; n < o; n++) {
                for (var i = new Array(), a = 0, f = localStorage.length; a < f; a++) t = localStorage.key(a), 
                JSON.stringify(J(t)) === JSON.stringify(e[n]) && (t = V(t), i.push(t));
                i = i.sort(C.compare), r[n] = {
                    keycount: i.length,
                    keylist: i,
                    keyvalue: e[n]
                };
            }
            return {
                count: e.length,
                dupes: r
            };
        }, M = function() {
            return S + y;
        }, R = function(e) {
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
        }, T = function(e) {
            return M() + e;
        }, P = function(e) {
            if (void 0 === e) throw new Error("No key specified");
            var r = "", t = "";
            if ("undefined" == typeof _valueToCheck) {
                if (!B(e)) return;
                if ("" === (t = localStorage.getItem(e))) return "undefined";
            } else t = _valueToCheck;
            return -1 === t.indexOf(h()) && -1 === t.indexOf(d()) && -1 === t.indexOf(g()) && -1 === t.indexOf(v()) && -1 === t.indexOf(w()) ? "[" === t[0] ? r = "presumed array" : "{" === t[0] ? r = "presumed object" : t == +t ? r = "presumed number" : (t = $(t, m, e), 
            -1 !== (t = X(t, m, e)).indexOf(h()) ? r = "scrambled string" : -1 !== t.indexOf(d()) ? r = "scrambled date" : -1 !== t.indexOf(g()) ? (r = "scrambled number", 
            r = -1 !== t.indexOf(".") ? "scrambled float" : "scrambled integer") : -1 !== t.indexOf(v()) ? r = "scrambled boolean" : -1 !== t.indexOf(w()) ? (r = "scrambled object", 
            "[" === t[0] && (r = "scrambled array")) : r = "presumed string") : ("" === r && -1 !== t.indexOf(h()) && (r = "string", 
            -1 !== t.indexOf(s()) && (r = "compressed string")), "" === r && -1 !== t.indexOf(d()) && (r = "date"), 
            "" === r && -1 !== t.indexOf(g()) && (r = "number", r = -1 !== t.indexOf(".") ? "float" : "integer"), 
            "" === r && -1 !== t.indexOf(v()) && (r = "boolean"), "" === r && -1 !== t.indexOf(w()) && (r = "object", 
            t[0] + t[1] + t[2] + t[3] === "null" && (r = "null"), "[" === t[0] && (r = "array"))), 
            r;
        }, B = function(e) {
            return null !== localStorage.getItem(e);
        }, q = function(e) {
            var r, t;
            return r = e === L.decompress(L.compress(e)), t = _(L.compress(e)) + 3 < _(e), !(!r || !t);
        }, z = function(e) {
            var r = "", t = 0;
            if (void 0 === e) {
                for (var n = 0, o = localStorage.length; n < o; ++n) r += localStorage.key(n);
                t = _(r);
            } else B(e) && (t = _(e));
            return t *= 2;
        }, Q = function(e) {
            return Array.from(e).reverse().join("");
        }, U = function(e, r, t, n, o, i, a, f) {
            var u = new CustomEvent("localDataStorage", {
                detail: {
                    message: e,
                    method: r,
                    key: t,
                    oldval: n,
                    newval: o,
                    oldtype: i,
                    newtype: a,
                    prefix: f,
                    timestamp: +new Date()
                },
                bubbles: !1,
                cancelable: !0
            });
            document.dispatchEvent(u);
        }, F = function(e, r) {
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(c);
            try {
                localStorage.setItem(e, r);
            } catch (e) {
                throw !e || "QUOTA_EXCEEDED_ERR" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name && "QuotaExceededError" !== e.name ? new Error("An error occurred writing to localStorage") : new Error("Quota exceeded for localStorage");
            }
        }, G = function(e) {
            var r, t, n = new Array(), o = 0;
            if (void 0 !== e) {
                for (var i = 0, a = localStorage.length; i < a; i++) -1 !== (t = localStorage.key(i)).indexOf(M()) && J(t) === e && o++;
                return o;
            }
            for (i = 0, a = localStorage.length; i < a; i++) -1 !== (t = localStorage.key(i)).indexOf(M()) && (n[o++] = localStorage.getItem(t));
            return 0 === (r = function(e) {
                for (var r = new Array(), t = new Array(), n = 0, o = e.length; n < o; n++) t = e[n], 
                e.lastIndexOf(t) !== n && -1 === r.indexOf(t) && r.push(t);
                for (n = 0, o = r.length; n < o; n++) r[n] = k(r[n]);
                return r;
            }(n)).length ? [] : r;
        }, K = function(e, r, t) {
            for (var n = R(r)[0] + R(t)[0], o = I(n) + "", i = Q(o), a = Number(i), f = p("my", a, "seed"), u = Number((a + "").charAt(2)) + Number((a + "").charAt(1)) + Number((a + "").charAt(0)), c = D(R(t)[1]) + D(R(r)[1]) + u, l = 0; l < c; l++) f();
            return function(e, r) {
                var t, n = e.length;
                for (r = r || function() {
                    var e = new Uint32Array(2);
                    return window.crypto.getRandomValues(e), +("0." + e[0] + e[1]);
                }; --n; ) e[t = Math.floor(r() * (n + 1))] = [ e[n], e[n] = e[t] ][0];
            }(e = (e = Q(e)).split(""), f), e = e.join("");
        }, L = function() {
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
        }(), V = function(e) {
            return e.slice(M().length, e.length);
        }, Z = function(e) {
            for (var r, t, n = [], o = 0, i = e.length; o < i; ) 55296 <= (r = e.charCodeAt(o++)) && r <= 56319 && o < i ? 56320 == (64512 & (t = e.charCodeAt(o++))) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(r), 
            o--) : n.push(r);
            return n;
        }, H = function(e) {
            return L.decompress(e);
        }, X = function(e, r, t) {
            for (var n = R(r)[0] + R(t)[0], o = I(n) + "", i = Q(o), a = Number(i), f = p("my", a, "seed"), u = Number((a + "").charAt(2)) + Number((a + "").charAt(1)) + Number((a + "").charAt(0)), c = D(R(t)[1]) + D(R(r)[1]) + u, l = 0; l < c; l++) f();
            return e = (e = function(e, r) {
                for (var t, n = new Array(e.length), o = new Array(e.length), i = e.length, a = 0; a < i; a++) o[a] = a;
                for (a = i - 1; 0 < a; a--) t = Math.floor(r() * (a + 1)), o[a] = [ o[t], o[t] = o[a] ][0];
                for (a = 0; a < i; a++) n[o[a]] = e[a];
                return n;
            }(e = e.split(""), f)).join(""), e = Q(e);
        }, Y = function(e) {
            var r = "", t = 0;
            if (void 0 === e) {
                for (var n = 0, o = localStorage.length; n < o; ++n) r += J(localStorage.key(n));
                t = _(r);
            } else B(e) && (t = "boolean" === P(e) ? 1 : _(J(e)));
            return t *= 2;
        }, W = function(e) {
            var r = "", t = 0;
            if (void 0 === e) {
                for (var n = 0, o = localStorage.length; n < o; ++n) r += localStorage.getItem(localStorage.key(n));
                t = _(r);
            } else B(e) && (t = _(localStorage.getItem(e)));
            return t *= 2;
        }, $ = function(e, r, t) {
            var o, n = "", i = R(r)[0], a = I(i) + "", f = Q(a), u = Number(f) + R(t)[0] + R(r)[0], c = p("my", u + "", "seed"), l = i + Number((u + "").charAt(0)) + Number((u + "").charAt(1)) + Number((u + "").charAt(2)) + Number(a.charAt(0)), s = D(R(t)[1]) + D(R(r)[1]) + l, h = (o = 4022871197, 
            function(e) {
                for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                    var n = .02519603282416938 * (o += e.charCodeAt(r));
                    n -= o = n >>> 0, o = (n *= o) >>> 0, o += 4294967296 * (n -= o);
                }
                return 2.3283064365386963e-10 * (o >>> 0);
            }), d = R(r)[1], g = 0, v = 0, w = 0, m = 0;
            e += "";
            for (var y = 0; y < s; y++) c();
            y = 0;
            for (var b = e.length; y < b; y++) w = g = Math.floor(257 * c()) + 0, m = i, v = Math.floor(h(d) * (m - w + 1)) + w, 
            c() < .537 ? n += String.fromCharCode(g ^ e.charCodeAt(y)) : n += String.fromCharCode(v ^ e.charCodeAt(y));
            return n;
        }, ee = function() {
            return "localDataStorage 1.3.0 using prefix " + S;
        };
        ee.bytes = function(e) {
            return O ? N(void 0 !== e ? Y(T(e)) + z(T(e)) : Y() + z()) : x;
        }, ee.bytesall = function(e) {
            return O ? N(void 0 !== e ? W(T(e)) + z(T(e)) : W() + z()) : x;
        }, ee.chopget = function(e) {
            if (!O) return x;
            var r, t = "";
            return B(T(e)) ? (t = J(T(e)), r = this.showtype(e), localStorage.removeItem(T(e)), 
            U("excise key", "chopget", e, t, void 0, r, void 0, M()), t) : void 0;
        }, ee.clear = function() {
            if (!O) return x;
            for (var e, r = 0, t = localStorage.length; t--; ) -1 !== (e = localStorage.key(t)).indexOf(M()) && (localStorage.removeItem(e), 
            r++);
            return r + (1 === r ? " key removed" : " keys removed");
        }, ee.countdupes = function(e) {
            return O ? void 0 === e ? G().length : G(e) : x;
        }, ee.crunch = function(e) {
            return O ? A(e) : x;
        }, ee.forcehasval = function(e) {
            if (!O) return x;
            for (var r = !1, t = 0, n = localStorage.length; t < n; t++) e == localStorage.getItem(localStorage.key(t)) && (r = !0);
            return r;
        }, ee.forceget = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return localStorage.getItem(T(e));
        }, ee.forceset = function(e, r) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(c);
            var t = J(T(e)), n = this.showtype(e), o = r, i = E(r)[1];
            F(T(e), r), JSON.stringify(t) === JSON.stringify(o) && n === i || U(void 0 === t ? "create new key" : "key value change", "forceset", e, t, o, n, i, M());
        }, ee.get = function(e) {
            return O ? J(T(e)) : x;
        }, ee.getkey = function(e) {
            return ee.showkey(e);
        }, ee.getscramblekey = function() {
            return O ? m : x;
        }, ee.getvalue = function(e) {
            return ee.get(e);
        }, ee.haskey = function(e) {
            return O ? B(T(e)) : x;
        }, ee.hasval = function(e) {
            return O ? function(e) {
                for (var r = JSON.stringify(e), t = "", n = 0, o = localStorage.length; n < o; n++) if (-1 !== (t = localStorage.key(n)).indexOf(M()) && r === JSON.stringify(J(t))) return !0;
                return !1;
            }(e) : x;
        }, ee.isArray = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return "array" === P(T(e));
        }, ee.isBoolean = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return "boolean" === P(T(e));
        }, ee.isDate = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return "date" === P(T(e));
        }, ee.isFloat = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return "float" === P(T(e));
        }, ee.isInteger = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return "integer" === P(T(e));
        }, ee.isNumber = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return "float" === P(T(e)) || "integer" === P(T(e));
        }, ee.isObject = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return "object" === P(T(e));
        }, ee.isString = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return "string" === P(T(e));
        }, ee.keybytes = function(e) {
            return O ? N(void 0 === e ? z() : z(T(e))) : x;
        }, ee.keys = function() {
            if (!O) return x;
            for (var e = 0, r = localStorage.length; r--; ) -1 !== localStorage.key(r).indexOf(M()) && e++;
            return e;
        }, ee.listdupes = function() {
            return O ? j() : x;
        }, ee.remove = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            var r = J(T(e)), t = this.showtype(e);
            localStorage.removeItem(T(e)), U("remove key", "remove", e, r, void 0, t, void 0, M());
        }, ee.rename = function(e, r) {
            if (!O) return x;
            var t = this.forceget(e);
            this.remove(e), this.forceset(r, t);
        }, ee.safeget = function(e, r) {
            var t;
            return O ? B(T(e)) ? (t = localStorage.getItem(T(e)), t = void 0 === r ? (t = $(t, m, e), 
            X(t, m, e)) : (t = $(t, r, e), X(t, r, e)), t = k(t)) : void 0 : x;
        }, ee.safeset = function(e, r, t) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(c);
            var n, o = "", i = null === this.forceget(e) ? void 0 : this.forceget(e), a = this.showtype(e), f = "scrambled key";
            r = E(r)[0], o = void 0 === t ? (r = K(r, m, e), r = $(r, m, e), " using global scramble key") : (r = K(r, t, e), 
            r = $(r, t, e), " using user scramble key"), F(T(e), r), i !== (n = this.forceget(e)) && U(void 0 === i ? "create new key" + o : "key value change" + o, "safeset", e, i, n, a, f, M());
        }, ee.set = function(e, r) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(c);
            var t = J(T(e)), n = this.showtype(e), o = r, i = E(r)[1];
            r = E(r)[0], F(T(e), r), JSON.stringify(t) === JSON.stringify(o) && n === i || U(void 0 === t ? "create new key" : "key value change", "set", e, t, o, n, i, M());
        }, ee.setscramblekey = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error("𝖭𝗈 𝗌𝖼𝗋𝖺𝗆𝖻𝗅𝖾 𝗄𝖾𝗒 𝗐𝖺𝗌 𝗌𝗉𝖾𝖼𝗂𝖿𝗂𝖾𝖽");
            m = e;
        }, ee.showdupes = function() {
            return O ? G().sort() : x;
        }, ee.showkey = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(l);
            for (var r = "", t = new Array(), n = "", o = 0, i = 0, a = localStorage.length; i < a; i++) -1 !== (n = localStorage.key(i)).indexOf(M()) && (t[o++] = n);
            t.sort();
            for (i = 0, a = t.length; i < a; i++) if (n = t[i], r = J(n), JSON.stringify(r) === JSON.stringify(e)) return V(n);
        }, ee.showkeys = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(l);
            for (var r = j(), t = r.count, n = JSON.stringify(e), o = "", i = (new Array(), 
            0); i < t; i++) if (o = r.dupes[i].value, n === (o = JSON.stringify(o))) return r.dupes[i].keys.sort(C.compare);
        }, ee.showprefix = function() {
            return O ? M() : x;
        }, ee.showtype = function(e) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            return P(T(e));
        }, ee.size = function(e) {
            return O ? B(T(e)) ? D(J(T(e))) : void 0 : x;
        }, ee.softset = function(e, r) {
            if (!O) return x;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(c);
            B(T(e)) || F(T(e), r);
        }, ee.uncrunch = function(e) {
            return O ? H(e) : x;
        }, ee.valbytes = function(e) {
            return O ? N(void 0 === e ? Y() : Y(T(e))) : x;
        }, ee.valbytesall = function(e) {
            return O ? N(void 0 === e ? W() : W(T(e))) : x;
        }, ee.version = f;
        var re = N(_(ee.showprefix())), te = N(2 * _(ee.showprefix()));
        return function() {
            var e = !1, r = !1;
            if (O) {
                if (void 0 !== o || i && -1 !== i.indexOf("/q") || (r = !0, console.info("No prefix specified. Creating a %crandom %cprefix --\x3e %c" + ee.showprefix(), "font-style: italic;", "font-style: normal;", "font-weight: bold;")), 
                "" !== o || i && -1 !== i.indexOf("/q") || console.info("Empty prefix given (%c" + ee.showprefix() + "%c), but a usable prefix is %cstrongly recommended%c to organize keys!", "font-weight: bold;", "font-style: normal;", "text-decoration: underline;", "text-decoration: none;"), 
                i && -1 !== i.indexOf("/q") || console.log("localDataStorage instantiated. The " + (!0 === r ? "random" : "specified") + " prefix (%c" + ee.showprefix() + "%c) adds " + re + " to every key name (stored using " + te + ").", "font-weight: bold;", "font-style: normal;"), 
                i && -1 !== i.indexOf("/w")) {
                    for (var t = 0, n = localStorage.length; t < n; t++) if (-1 !== localStorage.key(t).indexOf(S + y)) {
                        e = !0;
                        break;
                    }
                    e && console.warn("%cAttention! %cKeys with this prefix already exist in localStorage for this domain!", "color: rgb(230,0,0); font-weight: bold;", "color: rgb(230,0,0);");
                }
            } else console.warn("%cError! Cannot access localStorage! %cBailing out...", "color: rgb(230,0,0); font-weight: bold;", "color: rgb(230,0,0);");
        }(), ee;
    }(e, r);
};
