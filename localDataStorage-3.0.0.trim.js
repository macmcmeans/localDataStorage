/*/
/////////////////////////////////////////////////////////////////////////////////////////////
localDataStorage 3.0.0
https://cdn.jsdelivr.net/gh/macmcmeans/localDataStorage@master/localDataStorage-3.0.0.trim.js
/////////////////////////////////////////////////////////////////////////////////////////////
Copyright 2017 - 2022 William P. "Mac" McMeans
LICENSE: BSD 3-Clause License
*/
const localDataStorage = function(e, r) {
    return function e(r, t) {
        "use strict";
        let n, o = {
            this: [ "is" ],
            not: [ "cryptographic", "strength" ]
        }, i = 0, f = "localDataStorage";
        n = new BroadcastChannel(f);
        const s = "𝗡𝗼 𝘀𝗲𝗲𝗱 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱", u = "𝗡𝗼 𝗸𝗲𝘆 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱", l = "𝗡𝗼 𝗸𝗲𝘆 𝘃𝗮𝗹𝘂𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱", c = "𝗩𝗮𝗹𝘂𝗲 𝗶𝘀 𝗮𝗻 𝘂𝗻𝘀𝘂𝗽𝗽𝗼𝗿𝘁𝗲𝗱 𝘁𝘆𝗽𝗲", h = "𝗞𝗲𝘆 𝗱𝗼𝗲𝘀 𝗻𝗼𝘁 𝗲𝘅𝗶𝘀𝘁", d = "𝗞𝗲𝘆 𝗺𝘂𝘀𝘁 𝗯𝗲 𝗮𝗻 𝗔𝗿𝗿𝗮𝘆 𝗞𝗲𝘆", w = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝗱𝗮𝘁𝗮 𝘁𝘆𝗽𝗲", g = "𝗡𝗼 𝗱𝗮𝘁𝗮 𝘁𝘆𝗽𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱", y = "𝗡𝗼 𝗶𝗻𝗱𝗲𝘅 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱", v = "𝗜𝗹𝗹𝗲𝗴𝗮𝗹 𝗶𝗻𝗱𝗲𝘅 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱", p = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝘀𝘁𝗿𝗶𝗻𝗴 𝗶𝗻𝗱𝗲𝘅 𝗸𝗲𝘆𝘄𝗼𝗿𝗱", b = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝗻𝘂𝗺𝗲𝗿𝗶𝗰 𝗶𝗻𝗱𝗲𝘅", m = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝗶𝗻𝗱𝗲𝘅", E = "𝗡𝗼 𝘀𝘁𝗿𝗶𝗻𝗴 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱", k = [ "array", "bigint", "boolean", "date", "float", "integer", "null", "number", "object", "string" ], S = String.fromCodePoint(1), N = String.fromCodePoint(2), A = String.fromCodePoint(3), O = String.fromCodePoint(4), _ = String.fromCodePoint(5), C = String.fromCodePoint(6), x = String.fromCodePoint(7), J = String.fromCodePoint(8), I = String.fromCodePoint(9), P = String.fromCodePoint(10), T = "__storage_test__", j = new Date().getTime() + ":" + (1e8 * Math.random() | 0), M = "" === r ? "" : void 0 === r ? j : r, R = function() {
            return se(), function(e) {
                let r, t = T;
                try {
                    return (r = window[e]).setItem(t, t), r.removeItem(t), !0;
                } catch (e) {
                    return !1;
                }
            }("localStorage");
        }, D = function() {
            return function(e) {
                var r, t, n, o, i, f = new Uint32Array(3), a = "", s = "aleaPRNG 1.1";
                function u(e) {
                    var i, f, s = (i = 4022871197, (f = function(e) {
                        for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                            var n = .02519603282416938 * (i += e.charCodeAt(r));
                            n -= i = n >>> 0, i = (n *= i) >>> 0, i += 4294967296 * (n -= i);
                        }
                        return 2.3283064365386963e-10 * (i >>> 0);
                    }).version = "Mash 0.9", f);
                    r = s(" "), t = s(" "), n = s(" "), o = 1;
                    for (var u = 0; u < e.length; u++) (r -= s(e[u])) < 0 && (r += 1), (t -= s(e[u])) < 0 && (t += 1), 
                    (n -= s(e[u])) < 0 && (n += 1);
                    a = s.version, s = null;
                }
                function l(e) {
                    return parseInt(e, 10) === e;
                }
                var c = function() {
                    var e = 2091639 * r + 2.3283064365386963e-10 * o;
                    return r = t, t = n, n = e - (o = 0 | e);
                };
                return c.fract53 = function() {
                    return c() + 1.1102230246251565e-16 * (2097152 * c() | 0);
                }, c.int32 = function() {
                    return 4294967296 * c();
                }, c.cycle = function(e) {
                    (e = void 0 === e ? 1 : +e) < 1 && (e = 1);
                    for (var r = 0; r < e; r++) c();
                }, c.range = function() {
                    var e, r;
                    return r = 1 === arguments.length ? arguments[e = 0] : (e = arguments[0], arguments[1]), 
                    arguments[0] > arguments[1] && (e = arguments[1], r = arguments[0]), l(e) && l(r) ? Math.floor(c() * (r - e + 1)) + e : c() * (r - e) + e;
                }, c.restart = function() {
                    u(i);
                }, c.seed = function() {
                    u(Array.prototype.slice.call(arguments));
                }, c.version = function() {
                    return s;
                }, c.versions = function() {
                    return s + ", " + a;
                }, 0 === e.length && (window.crypto.getRandomValues(f), e = [ f[0], f[1], f[2] ]), 
                u(i = e), c;
            }(Array.prototype.slice.call(arguments));
        }, B = function() {
            const e = "0123456789", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", t = "abcdefghijklmnopqrstuvwxyz", n = e + r + t + "+/!#$%&()*,-:;<=>?@[]^_`{|}~\\. '\"¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĆćĈĉĊċČčĜĝĞğĠġĢģĤĥĦħĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŊŋŔŕŖŗŘřŜŝŞşŠšŢţŤťŦŧŲųŴŵŶŷŸŹźŻżŽžΔΛΣΓ", o = "./" + e + r + t, i = function(e) {
                var r, t;
                if (void 0 === e) r = o; else if ("number" == typeof e) {
                    if (e < 2) throw new Error("Glyph set must contain at least 2 graphemes");
                    r = n.slice(0, e);
                } else if (e instanceof Array) {
                    if ("number" == typeof (t = e = Number(e[0])) && 0 != t && !t) throw new Error("Array must be number");
                    if (e < 2) throw new Error("Glyph set must contain at least 2 graphemes");
                    r = (r = f(n, e)).slice(0, e);
                } else if ("BASE64" === e.toUpperCase()) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; else if ("B64" === e.toUpperCase()) r = o; else if ("UUENCODE" === e.toUpperCase()) r = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_"; else if ("XXENCODE" === e.toUpperCase()) r = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; else if ("BINHEX" === e.toUpperCase()) r = "!\"#$%&'()*+,-0123456789@ABCDEFGHIJKLMNPQRSTUVXYZ[`abcdefhijklmpqr"; else if ("7BIT" === e.toUpperCase()) r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/!#$%&()*,-:;<=>?@[]^_`{|}~\\. '\""; else if ("FPN" === e.toUpperCase()) r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/!#$%&()*,-:;<=>?@[]^_`{|}~\\"; else {
                    if (e.length < 2) throw new Error("Glyph set must contain at least 2 graphemes");
                    if (a(e)) throw new Error("Glyph set contains duplicate graphemes");
                    r = e;
                }
                return r;
            }, f = function(e, r) {
                var t, n, o;
                return o = .059886774281039834 * (n = r), o += 21845.33332824707, o -= n = 0 | o, 
                n = 0 | (o *= n), t = function(e) {
                    return function(e) {
                        function r(r) {
                            var f = r;
                            if (r < 10) throw new Error("Specified seed must be greater than 9");
                            t = (f += "").length, n = "";
                            for (var a = 0; a < t; a++) n += f[t - a - 1];
                            "string" == typeof e && (t = 2 * (t + 1)), o = +("0." + n), i = +("0." + t);
                            for (var s = 0; s < 20; s++) o = ((i += o) * o + i) % 1;
                        }
                        var t, n, o, i, f = new Date().getTime();
                        r(e || f);
                        var a = function() {
                            return o = ((i += o) * o + i) % 1;
                        };
                        return a.seed = function(e) {
                            r(e);
                        }, a;
                    }(e);
                }((n ^= 4294967296 * (o -= n)) >>> 0), function(e, r) {
                    var t, n = e.length;
                    for (r = r || function() {
                        var e = new Uint32Array(2);
                        return window.crypto.getRandomValues(e), parseFloat("0." + e[0] + e[1]);
                    }; --n; ) e[t = Math.floor(r() * (n + 1))] = [ e[n], e[n] = e[t] ][0];
                }(e = e.split(""), t), e.join("");
            }, a = function(e) {
                for (var r = e.length, t = 0; t < r; t++) for (var n = e[t], o = t + 1; o <= r - 1; o++) if (n === e[o]) return !0;
                return !1;
            }, s = function(e, r, t) {
                var n, o = i(r), a = o.length, s = Math.floor(e), u = "";
                for (void 0 !== t && (o = f(o, t)); n = s % a, u = o.charAt(n) + u, 0 !== (s = Math.floor(s / a)); ) ;
                return u;
            }, u = function(e, r, t) {
                var n = i(r), o = n.length, a = 0;
                void 0 !== t && (n = f(n, t));
                for (var s = 0; s < e.length; s++) a = a * o + n.indexOf(e[s]);
                return a;
            };
            return {
                base10ToRadix: function(e, r, t) {
                    if (e !== parseInt(e, 10) && "fpn" !== r.toLowerCase()) throw new Error("Number must be positive integer in Base-10");
                    if (void 0 !== t && "number" != typeof t) throw new Error("Scramble key must be a number");
                    if ("fpn" === r.toLowerCase() && (e + "").includes(".")) {
                        let r = (e + "").split("."), n = s(+r[0], "fpn", t), o = s(+r[1], "fpn", t), i = "";
                        return "0" === (r[1] + "").substr(0, 1) && (i = " "), n + "." + i + o;
                    }
                    return s(e, r, t);
                },
                changeRadix: function(e, r, t, n) {
                    var o = this.radixToBase10(e, r, n);
                    return this.base10ToRadix(o, t, n);
                },
                radixToBase10: function(e, r, t) {
                    if (void 0 !== t && "number" != typeof t) throw new Error("Scramble key must be a number");
                    if ("fpn" === r.toLowerCase() && e.includes(".")) {
                        let r = e.split("."), n = u(r[0], "fpn", t) + "", o = "";
                        return r[1].includes(" ") ? (r[1] = r[1].replace(" ", ""), o = "0" + u(r[1], "fpn", t)) : o = u(r[1], "fpn", t) + "", 
                        +(n + "." + o);
                    }
                    return u(e, r, t);
                },
                version: function() {
                    return "customRadix v1.1.0";
                }
            };
        }(), L = function() {
            let r = e.toString(), t = (n = 4022871197, function(e) {
                for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                    var o = .02519603282416938 * (n += e.charCodeAt(r));
                    o -= n = o >>> 0, n = (o *= n) >>> 0, n += 4294967296 * (o -= n);
                }
                return 2.3283064365386963e-10 * (n >>> 0);
            })(r) + "";
            var n;
            return t = +(t = t.replace("0.", ""));
        }(), K = function(e) {
            let r, t = "";
            const n = function(r) {
                return e.substr(-1, 1) === r;
            }, o = function(e) {
                return e.substr(0, e.length - 1);
            }, i = function(e) {
                return JSON.parse(e, le);
            };
            if (void 0 === e) throw new Error("𝗡𝗼 𝘃𝗮𝗹𝘂𝗲 𝘁𝗼 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝗳𝗿𝗼𝗺");
            if (function() {
                let e = arguments.length, r = Object.values(arguments);
                return {
                    areIn(t) {
                        for (let n = 0; n < e; n++) if (r[n] === t) return !0;
                        return !1;
                    },
                    total: () => e
                };
            }(O, _, C, x, J, I, A, P).areIn(e.substr(-1, 1))) "" === t && n(r = A) && (e = o(e), 
            t = e = Ce(e)), "" === t && n(r = P) && (t = e = o(e)), "" === t && n(r = x) && (e = o(e), 
            t = B.radixToBase10(e, "7BIT"), t = new Date(t)), "" === t && n(r = O) && (t = i(e = o(e))), 
            "" === t && n(r = J) && (e = o(e), t = B.radixToBase10(e, "FPN")), "" === t && n(r = C) && (t = "1" === (e = o(e))), 
            "" === t && n(r = _) && (e = o(e), t = BigInt(e)), "" === t && n(r = I) && (t = i(e = o(e))); else if ("presumed bigint" === ie("VALUE_OVERRIDE", e)) e = e.substring(0, e.length - 1), 
            t = BigInt(e); else if ("{" === e[0] || "[" === e[0]) try {
                t = i(e);
            } catch (r) {
                t = e;
            } else t = e == +e ? +e : e;
            return t;
        }, U = function(e) {
            let r = "", t = "";
            if (void 0 === e) throw new Error("𝗡𝗼 𝘃𝗮𝗹𝘂𝗲 𝘁𝗼 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝘁𝗼");
            return "string" == typeof e ? (t = "string", r = P, ue(e) && (t = "compressed string", 
            e = q(e), r = A)) : "object" == typeof e && e instanceof Date ? (t = "date", r = x, 
            e = +e, e = B.base10ToRadix(e, "7BIT")) : "object" == typeof e && e instanceof Array ? (t = "array", 
            r = O, e = JSON.stringify(e, ce)) : "number" == typeof e ? (t = "integer", -1 !== (e + "").indexOf(".") && (t = "float"), 
            r = J, e = B.base10ToRadix(e, "FPN")) : "boolean" == typeof e ? (t = "boolean", 
            r = C, e = Number(e), e += "") : "bigint" == typeof e ? (t = "bigint", r = _, e += "") : "object" == typeof e && (t = "object", 
            null === e && (t = "null"), r = I, e = JSON.stringify(e, ce)), "" !== r && (e += r), 
            [ e, t ];
        }, q = function(e) {
            return Ne.compress(e);
        }, G = function(e) {
            localStorage.removeItem(e);
        }, F = function(e, r = !1) {
            let t = 0, n = 1024;
            for (r && (n = 1e3); e > n; ) t++, e /= n;
            return e = (e = 1 == e ? "1 byte" : e.toFixed(2) + " " + [ "bytes", "KB", "MB" ][t]).replace(".00 ", " ");
        }, V = function(e, r) {
            var t, n = e.length;
            for (r = r || a; --n; ) e[t = Math.floor(r() * (n + 1))] = [ e[n], e[n] = e[t] ][0];
        }, X = function(e, r) {
            for (var t, n = new Array(e.length), o = new Array(e.length), i = e.length, f = 0; f < i; f++) o[f] = f;
            for (f = i - 1; f > 0; f--) t = Math.floor(r() * (f + 1)), o[f] = [ o[t], o[t] = o[f] ][0];
            for (f = 0; f < i; f++) n[o[f]] = e[f];
            return n;
        }, Q = function(e) {
            let r = .059886774281039834 * e;
            return r += 21845.33332824707, r -= e = 0 | r, e = 0 | (r *= e), (e ^= 4294967296 * (r -= e)) >>> 0;
        }, H = function(e) {
            if (void 0 === e) throw new Error(u);
            let r = pe(e);
            return r ? K(r) : void 0;
        }, Y = function(e = !1) {
            let r, t = $(), n = new Array();
            for (let o = localStorage.length; o--; ) (r = localStorage.key(o)).substr(0, t.length) === t && (e && (r = Ae(r)), 
            n.push(r));
            return n;
        }, Z = function(e = !1) {
            let r = new Array();
            for (let t in Le) "#" === t.substr(0, 1) && (e && (t = Oe(t)), r.push(t));
            return r;
        }, z = function(e) {
            for (var r = (e = "" + e).length, t = r - 1; t >= 0; t--) {
                let n = e.charCodeAt(t);
                n > 127 && 2047 >= n ? r++ : n > 2047 && 65535 >= n && (r += 2), n >= 56320 && 57343 >= n && t--;
            }
            return r;
        }, W = function(e) {
            return _e(e = "" + e).length;
        }, $ = function() {
            return M + ".";
        }, ee = function(e) {
            return fe(be(e));
        }, re = function(e) {
            if (void 0 === e) return;
            let r = "bigint" == typeof e ? e.toString() : JSON.stringify(e, ce), t = 0, n = "", o = "";
            const i = function(e) {
                return De(e)();
            };
            var f;
            n = e instanceof Array ? "ARRAY1" : "bigint" == typeof e ? "BIGINT2" : "boolean" == typeof e ? "BOOLEAN4" : e instanceof Date ? "DATE8" : "number" == typeof e ? (e + "").includes(".") ? "FLOAT16" : "INTEGER32" : "string" == typeof e ? "STRING64" : "OBJECT128", 
            o = r + r.length + n + i(r) + i((f = r, Array.from(f).reverse().join("")));
            for (let e = 0; e < o.length; e++) t += o.codePointAt(e);
            return [ t, o ];
        }, te = function(e) {
            return $() + e;
        }, ne = function(e) {
            return H(te(e));
        }, oe = function(e) {
            return U(e)[1];
        }, ie = function(e, r) {
            if (void 0 === e) throw new Error(u);
            let t = "", n = "";
            const i = function(e) {
                return n.includes(e);
            };
            if (void 0 === r) {
                if (!ae(e)) return;
                n = pe(e);
            } else n = r;
            return !function() {
                let e = arguments.length, r = Object.values(arguments);
                return {
                    areIn(t) {
                        for (let n = 0; n < e; n++) if (r[n] === t) return !0;
                        return !1;
                    },
                    total: () => e
                };
            }(O, _, C, x, J, I, A, P).areIn(n.substr(-1, 1)) ? "[" === n[0] ? t = "presumed array" : "{" === n[0] ? t = "presumed object" : "n" === n.substr(-1, 1) && parseInt(n, 10) === +n.substring(0, n.length - 1) ? t = "presumed bigint" : n == +n ? t = "presumed number" : (null !== e && (n = Be(n, o, e.replace($(), "")), 
            n = xe(n, o, e.replace($(), ""))), i(P) ? t = "obfuscated string" : i(_) ? t = "obfuscated bigint" : i(x) ? t = "obfuscated date" : i(O) ? t = "obfuscated array" : i(J) ? (t = "obfuscated number", 
            t = n.includes(".") ? "obfuscated float" : "obfuscated integer") : t = i(C) ? "obfuscated boolean" : i(I) ? "obfuscated object" : "presumed string") : (i(A) && (t = "compressed string"), 
            "" === t && i(P) && (t = "string"), "" === t && i(x) && (t = "date"), "" === t && i(O) && (t = "array"), 
            "" === t && i(J) && (t = "number", t = n.includes(".") ? "float" : "integer"), "" === t && i(C) && (t = "boolean"), 
            "" === t && i(_) && (t = "bigint"), "" === t && i(I) && (t = "object", n[0] + n[1] + n[2] + n[3] === "null" && (t = "null"))), 
            t;
        }, fe = function(e) {
            let r = "", t = typeof e;
            return "string" === t && (r = "string", e.includes(A) && (r = "compressed string")), 
            "" === r && "number" === t && (r = (e + "").includes(".") ? "float" : "integer"), 
            "" === r && "boolean" === t && (r = "boolean"), "" === r && "bigint" === t && (r = "bigint"), 
            "" === r && "object" === t ? r = e instanceof Array ? "array" : e instanceof Date ? "date" : null === e ? "null" : "object" : "" === r && (r = "unknown"), 
            r;
        }, ae = function(e) {
            return null !== pe(e);
        }, se = function() {
            Le.version = "localDataStorage 3.0.0", Le.channel = f;
        }, ue = function(e) {
            let r = !1, t = !1, n = Ne.compress(e) + A;
            return r = e === K(n), t = z(n) + 0 <= z(e + P), !(!r || !t);
        }, le = function(e, r) {
            return "string" == typeof r && "`" === r.substr(-1, 1) && "n" === r.substr(-2, 1) && parseInt(r, 10) === +r.substring(0, r.length - 2) ? BigInt(r.substring(0, r.length - 2)) : r;
        }, ce = function(e, r) {
            return "bigint" == typeof r ? r.toString() + "n`" : r;
        }, he = function(e) {
            let r = Y(!0).join(""), t = 0;
            return void 0 === e ? t = z(r) : ae(e) && (t = z(Ae(e))), t;
        }, de = function(e) {
            let r = Y().join(""), t = 0;
            return void 0 === e ? t = z(r) : ae(e) && (t = z(e)), t;
        }, we = function(e) {
            let r = Y().join(""), t = 0;
            return void 0 === e ? t = z(r) : ae(e) && (t = z(e)), t *= 2;
        }, ge = e => () => (2 ** 31 - 1 & (e = Math.imul(48271, e))) / 2 ** 31, ye = e => r => (e = e + 1831565813 | 0, 
        r = Math.imul(e ^ e >>> 15, 1 | e), r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, 
        ((r ^ r >>> 14) >>> 0) / 2 ** 32), ve = function(e) {
            return e.sort((e, r) => ("$" === (e + "").substr(0, 1) ? (e + "").substr(1, (e + "").length) : e + "").localeCompare(r, "en", {
                ignorePunctuation: !0,
                numeric: !0,
                sensitivity: "base"
            }));
        }, pe = function(e) {
            let r;
            try {
                r = localStorage.getItem(e);
            } catch (e) {
                throw new Error("𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝗿𝗲𝗮𝗱𝗶𝗻𝗴 𝗳𝗿𝗼𝗺 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲");
            }
            return r;
        }, be = function(e) {
            return Le["#" + e];
        }, me = function(e) {
            return Array.from(e).reverse().join("");
        }, Ee = function(e, r, t, o, i, a, s, u, l, c, h) {
            let d = {}, w = new Date(), g = new CustomEvent("localDataStorage", {
                detail: {
                    prefix: e,
                    method: r,
                    message: t,
                    date: w,
                    timestamp: +w,
                    oldkey: o,
                    newkey: i,
                    oldval: "bigint" === u ? a : JSON.stringify(a, ce),
                    newval: "bigint" === l ? s : JSON.stringify(s, ce),
                    oldtype: u,
                    newtype: l,
                    oldbase: c,
                    newbase: h
                },
                bubbles: !1,
                cancelable: !0
            });
            document.dispatchEvent(g), "" !== f && (d = {
                id: "localDataStorage",
                prefix: e,
                method: r,
                message: t,
                date: w,
                timestamp: +w,
                oldkey: o,
                newkey: i,
                oldval: "bigint" === u ? a : JSON.stringify(a, ce),
                newval: "bigint" === l ? s : JSON.stringify(s, ce),
                oldtype: u,
                newtype: l,
                oldbase: c,
                newbase: h
            }, n.postMessage(d));
        }, ke = function() {
            let e = Y(!0), r = e.length, t = new Array(r), n = new Array();
            for (let n = r; n--; ) t[n] = H(te(e[n]));
            return 0 === (n = function(e) {
                let r = new Array(), t = new Array(), n = e.length;
                for (let o = 0; o < n; o++) t = e[o], e.lastIndexOf(t) !== o && -1 === r.indexOf(t) && r.push(t);
                return r;
            }(t)).length ? [] : n;
        }, Se = function(e, r, t) {
            let n = De(t), o = ye(n()), i = "", f = "", a = re(r)[0] + re(t)[0], s = Q(a) + "", u = me(s), l = Number(u), c = "" + l + a, h = (b = 100, 
            m = 999, Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 * (m - b + 1)) + b + ""), d = D(c, s, u + h), w = Number((l + "").charAt(2)) + Number((l + "").charAt(1)) + Number((l + "").charAt(0)), g = W(re(t)[1]) + W(re(r)[1]) + w, y = JSON.stringify(r, ce), v = De(y), p = ge(v());
            D();
            var b, m;
            for (let e = g; e--; ) d() < .75 && o(), o() > .75 && p();
            if (o() > .5) {
                i = e.split(" ");
                for (let e = 0; e < i.length; e++) (f = i[e]).length > 2 && (f = f.split(""), V(f, o), 
                f = f.join("")), i[e] = f;
                e = i.join(" ");
            }
            return e = (e += S).split(""), V(e, d), (e = e.join("")) + h;
        }, Ne = function() {
            const e = function() {};
            return e.codebook = {
                " ": 0,
                the: 1,
                '","': 2,
                '":"': 3,
                '"}}': 4,
                of: 5,
                o: 6,
                and: 7,
                '":{"': 8,
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
                "https://": 67,
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
                "s, ": 133,
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
                "https://www.": 219,
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
            }, e.make_reverse_codebook = function(e) {
                let r = new Array(e.length), t = 0;
                for (let n in e) r[t++] = n;
                return r;
            }, e.flush_verbatim = function(e) {
                var r, t, n, o;
                for (t = [], e.length > 1 ? (t.push(String.fromCodePoint(255)), t.push(String.fromCodePoint(e.length - 1))) : t.push(String.fromCodePoint(254)), 
                n = 0, o = e.length; n < o; n++) r = e[n], t.push(r);
                return t;
            }, e.compress = function(r) {
                var t, n, o, i, f, a, s;
                for (a = "", f = [], o = 0; o < r.length; ) {
                    for (n = !1, i = e.longestKeyLength, r.length - o < e.longestKeyLength && (i = r.length - o), 
                    i = s = i; i <= 0 ? s < 0 : s > 0; i = i <= 0 ? ++s : --s) if (null != (t = e.codebook[r.substr(o, i)])) {
                        a && (f = f.concat(e.flush_verbatim(a)), a = ""), f.push(String.fromCodePoint(t)), 
                        o += i, n = !0;
                        break;
                    }
                    n || (a += r[o], o++, 256 === a.length && (f = f.concat(e.flush_verbatim(a)), a = ""));
                }
                return a && (f = f.concat(e.flush_verbatim(a))), f.join("");
            }, e.decompress = function(r) {
                var t, n, o, i, f, a;
                for (i = "", n = function() {
                    var e, n, o;
                    for (o = [], t = e = 0, n = r.length; 0 <= n ? e < n : e > n; t = 0 <= n ? ++e : --e) o.push(r.codePointAt(t));
                    return o;
                }(), t = 0; t < n.length; ) if (254 === n[t]) {
                    if (t + 1 > n.length) throw "Malformed SMAZ";
                    i += r[t + 1], t += 2;
                } else if (255 === n[t]) {
                    if (t + n[t + 1] + 2 >= n.length) throw "Malformed SMAZ";
                    for (o = f = 0, a = n[t + 1] + 1; 0 <= a ? f < a : f > a; o = 0 <= a ? ++f : --f) i += r[t + 2 + o];
                    t += 3 + n[t + 1];
                } else i += e.reverse_codebook[n[t]], t++;
                return i;
            }, e.getLongestKeyLength = function(e) {
                let r = 0, t = 0;
                for (let n = 0; n < e.length; n++) e[n].length > t && (r = n, t = e[n].length);
                return e[r].length;
            }, e.reverse_codebook = e.make_reverse_codebook(e.codebook), e.longestKeyLength = e.getLongestKeyLength(e.reverse_codebook), 
            e;
        }(), Ae = function(e) {
            return e.slice($().length, e.length);
        }, Oe = function(e) {
            return e.replace("#", "");
        }, _e = function(e) {
            for (var r, t, n = [], o = 0, i = e.length; i > o; ) (r = e.charCodeAt(o++)) >= 55296 && 56319 >= r && i > o ? 56320 == (64512 & (t = e.charCodeAt(o++))) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(r), 
            o--) : n.push(r);
            return n;
        }, Ce = function(e) {
            return Ne.decompress(e);
        }, xe = function(e, r, t) {
            let n = e.substr(-3), o = e.replace(n, ""), i = De(t), f = ye(i()), a = "", s = "", u = 0, l = re(r)[0] + re(t)[0], c = Q(l) + "", h = me(c), d = Number(h), w = D("" + d + l, c, h + n), g = Number((d + "").charAt(2)) + Number((d + "").charAt(1)) + Number((d + "").charAt(0));
            for (let e = W(re(t)[1]) + W(re(r)[1]) + g; e--; ) w() < .75 && f(), f();
            if (o = o.split(""), u = (o = (o = X(o, w)).join("")).indexOf(S), o = o.substr(0, u), 
            f() > .5) {
                a = o.split(" ");
                for (let e = 0; e < a.length; e++) (s = a[e]).length > 2 && (s = s.split(""), s = (s = X(s, f)).join("")), 
                a[e] = s;
                o = a.join(" ");
            }
            return o;
        }, Je = function() {
            setTimeout(() => Le.length = Y().length, 0), Le.version = "localDataStorage 3.0.0";
        }, Ie = function(e) {
            let r = "", t = 0, n = new Array(), o = 0, i = "", f = "";
            if (void 0 === e) {
                for (let e = o = (n = Y()).length; e--; ) i = n[e], r += f = (f = (f = (f = (f = (f = (f = (f = (f = (f = pe(i)).replace(O, "")).replace(_, "")).replace(C, "")).replace(x, "")).replace(J, "")).replace(I, "")).replace(P, "")).replace(A, "")).replace(N, "");
                t = z(r);
            } else ae(e) && (f = (f = (f = (f = (f = (f = (f = (f = (f = (f = pe(e)).replace(O, "")).replace(_, "")).replace(C, "")).replace(x, "")).replace(J, "")).replace(I, "")).replace(P, "")).replace(A, "")).replace(N, ""), 
            t = z(f));
            return t;
        }, Pe = function(e) {
            let r = "", t = 0, n = new Array(), o = 0, i = "", f = "";
            if (void 0 === e) {
                for (let e = o = (n = Y()).length; e--; ) i = n[e], r += f = pe(i);
                t = z(r);
            } else ae(e) && (f = pe(e), t = z(f));
            return t;
        }, Te = function(e) {
            return 2 * Pe(e);
        }, je = function(e) {
            let r = !0, t = typeof e;
            for (let e = k.length; e--; ) if (t === k[e]) {
                r = !1;
                break;
            }
            return r;
        }, Me = function(e, r) {
            return "]" === JSON.stringify(e, ce).substr(-1) ? function(e, r) {
                let t = !1, n = !0;
                if (e.length === r.length) {
                    for (let t = 0; t < e.length && !0 == (n = -1 !== r.indexOf(e[t])); t++) ;
                    t = n;
                }
                return t;
            }(e, r) : e === r;
        }, Re = function(e, r) {
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            try {
                localStorage.setItem(e, r);
            } catch (e) {
                throw !e || "QUOTA_EXCEEDED_ERR" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name && "QuotaExceededError" !== e.name ? new Error("𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝘄𝗿𝗶𝘁𝗶𝗻𝗴 𝘁𝗼 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲") : new Error("𝗖𝗮𝗻𝗻𝗼𝘁 𝗮𝘀𝘀𝗶𝗴𝗻 𝘃𝗮𝗹𝘂𝗲 𝗯𝗲𝗰𝗮𝘂𝘀𝗲 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲 𝗾𝘂𝗼𝘁𝗮 𝗶𝘀 𝗳𝘂𝗹𝗹");
            }
        }, De = function(e) {
            for (var r, t = 0, n = 2166136261; t < e.length; t++) r = (r = Math.imul(e.charCodeAt(t), 3432918353)) << 15 | r >>> 17, 
            n = (n ^= Math.imul(r, 461845907)) << 13 | n >>> 19, n = Math.imul(n, 5) + 3864292196 | 0;
            return n ^= e.length, function() {
                return n ^= n >>> 16, n = Math.imul(n, 2246822507), n ^= n >>> 13, n = Math.imul(n, 3266489909), 
                (n ^= n >>> 16) >>> 0;
            };
        }, Be = function(e, r, t) {
            let n = JSON.stringify(r, ce), o = De(n), i = ge(o()), f = De(t), a = ye(f()), s = "", u = re(r)[0], l = Q(u) + "", c = me(l), h = Number(c) + re(t)[0] + re(r)[0], d = h + "", w = u + "", g = o() + "", y = D(d, w, g), v = u + Number((h + "").charAt(0)) + Number((h + "").charAt(1)) + Number((h + "").charAt(2)) + Number(l.charAt(0)), p = W(re(t)[1]) + W(re(r)[1]) + v, b = (A = 4022871197, 
            function(e) {
                for (var r = 0, t = (e = e.toString()).length; r < t; r++) {
                    var n = .02519603282416938 * (A += e.charCodeAt(r));
                    n -= A = n >>> 0, A = (n *= A) >>> 0, A += 4294967296 * (n -= A);
                }
                return 2.3283064365386963e-10 * (A >>> 0);
            }), m = re(r)[1], E = 0, k = 0, S = 0, N = 0;
            var A;
            e += "";
            for (let e = 0; e < p; e++) y() > .75 && a(), a() > .55 && i();
            for (let r = 0, t = e.length; r < t; r++) E = Math.floor(256 * y()) + 0, a() < .45 && (E += (O = 1, 
            _ = 100, Math.floor(i() * (_ - O + 1)) + O)), S = E, N = u, k = Math.floor(b(m) * (N - S + 1)) + S, 
            y() < a() ? s += String.fromCodePoint(E ^ e.codePointAt(r)) : s += String.fromCodePoint(k ^ e.codePointAt(r));
            var O, _;
            return s;
        }, Le = function(e = !1) {
            let r = "", t = "" === f ? " (not currently broadcasting)" : ", broadcasting on channel " + f;
            return e ? (r = !0 === i ? ". " + Le.showquotaused() : " where " + F(Le.showquotaused(!0)) + " are used", 
            "localDataStorage v3.0.0 (checksum " + L + ") using " + ("" === M ? "no prefix" : "prefix " + M) + " with quota of " + Le.quota + r + t) : function() {
                if (!R()) return !1;
                const e = {};
                return e.version = Le.version, e.checksum = L, e.prefix = M, e.quota = Le.quota, 
                e.bytes_used = Le.showquotaused(!0), e.channel = Le.channel, {
                    localDataStorage: e
                };
            }();
        };
        Le._backup = function(e, r) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (!Le._haskey(e)) throw new Error("𝗦𝗼𝘂𝗿𝗰𝗲 𝗺𝗲𝗺𝗼𝗿𝘆 𝗸𝗲𝘆 𝗱𝗼𝗲𝘀 𝗻𝗼𝘁 𝗲𝘅𝗶𝘀𝘁");
            let t = Le._get(e), n = Le._showtype(e), o = "", f = "", a = "", s = "";
            const l = function() {
                o = U(t)[0], Re(te(e), o);
            };
            if (ae(te(e))) {
                if (!r) throw new Error("𝗕𝗮𝗰𝗸𝘂𝗽 𝗰𝗮𝗻𝗻𝗼𝘁 𝗼𝘃𝗲𝗿𝘄𝗿𝗶𝘁𝗲 𝗲𝘅𝗶𝘀𝘁𝗶𝗻𝗴 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲 𝗸𝗲𝘆");
                if (a = ne(e), s = ie(te(e)), l(), o = ne(e), f = ie(te(e)), !Me(t, o) || n !== f) throw new Error("𝗕𝗮𝗰𝗸𝘂𝗽 𝗲𝗿𝗿𝗼𝗿: 𝗰𝗮𝗻𝗻𝗼𝘁 𝗼𝘃𝗲𝗿𝘄𝗿𝗶𝘁𝗲 𝗲𝘅𝗶𝘀𝘁𝗶𝗻𝗴 𝗸𝗲𝘆");
                if (Le._remove(e), Ee($(), "backup", "key value change", e, e, a, o, s, f, "memory", "disk"), 
                i) return "Existing localStorage key has been overwritten by Memory Key and the value verified";
            } else {
                if (l(), o = ne(e), f = ie(te(e)), !Me(t, o) || n !== f) throw new Error("𝗕𝗮𝗰𝗸𝘂𝗽 𝗲𝗿𝗿𝗼𝗿: 𝗰𝗮𝗻𝗻𝗼𝘁 𝗰𝗿𝗲𝗮𝘁𝗲 𝗻𝗲𝘄 𝗸𝗲𝘆");
                if (Le._remove(e), Ee($(), "backup", "create new key", void 0, e, void 0, o, void 0, f, "memory", "disk"), 
                i) return "New localStorage created from Memory Key (value verified)";
            }
        }, Le.broadcast = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error("𝗡𝗼 𝗯𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁 𝗰𝗵𝗮𝗻𝗻𝗲𝗹 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱");
            "" === e ? (n.close(), i && console.log("Broadcast Channel API closed")) : (f = e, 
            n = new BroadcastChannel(f), i && console.log(`Broadcasting on channel ${f}`));
        }, Le.bytes = function(e) {
            if (!R()) return !1;
            let r;
            return void 0 === e ? F(Ie() + he()) : "0 bytes" !== (r = F(Ie(te(e)) + he(te(e)))) ? r : void 0;
        }, Le.bytesall = function(e) {
            if (!R()) return !1;
            let r;
            return void 0 === e ? F(Pe() + de()) : "0 bytes" !== (r = F(Pe(te(e)) + de(te(e)))) ? r : void 0;
        }, Le.bytesmem = function(e) {
            if (!R()) return !1;
            let r;
            return void 0 === e ? F(Te() + we()) : "0 bytes" !== (r = F(Te(te(e)) + we(te(e)))) ? r : void 0;
        }, Le.cancrunch = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(l);
            if ("string" != typeof e) throw new Error("𝗗𝗮𝘁𝗮 𝘁𝘆𝗽𝗲 𝗺𝘂𝘀𝘁 𝗯𝗲 𝘀𝘁𝗿𝗶𝗻𝗴");
            return ue(e);
        }, Le.chopget = function(e) {
            if (!R()) return !1;
            let r, t;
            return ae(te(e)) ? (r = ne(e), t = ie(te(e)), G(te(e)), Ee($(), "chopget", "excise key", e, void 0, r, void 0, t, void 0, "disk", "disk"), 
            Le.length -= 1, Je(), r) : void 0;
        }, Le._chopget = function(e) {
            let r;
            return Le._haskey(e) ? (r = Le._get(e), Le._remove(e), r) : void 0;
        }, Le.clear = function() {
            if (!R()) return !1;
            let e, r, t, n = $(), o = Y(), i = o.length;
            for (let f = i; f--; ) e = o[f], r = H(e), t = ie(e), G(e), Ee(n, "clear", "remove all keys", e, void 0, r, void 0, t, void 0, "disk", "disk");
            return Le.length = 0, 1 === i ? "1 key removed" : i + " keys removed";
        }, Le._clear = function() {
            let e = Z();
            for (let r = e.length; r--; ) Reflect.deleteProperty(Le, e[r]);
        }, Le.contains = function(e, r) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            if (!ae(te(e))) return;
            if ("array" !== ie(te(e))) throw new Error(d);
            let t = !1, n = ne(e);
            for (let e = 0; e < n.length; e++) if (JSON.stringify(n[e], ce) === JSON.stringify(r, ce)) {
                t = !0;
                break;
            }
            return t;
        }, Le.copy = function(e, r) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error("𝗡𝗼 𝘀𝗼𝘂𝗿𝗰𝗲 𝗸𝗲𝘆 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱");
            if (void 0 === r) throw new Error("𝗡𝗼 𝗱𝗲𝘀𝘁𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗸𝗲𝘆 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱");
            if (!ae(te(e))) throw new Error("𝗦𝗼𝘂𝗿𝗰𝗲 𝗸𝗲𝘆 𝗱𝗼𝗲𝘀 𝗻𝗼𝘁 𝗲𝘅𝗶𝘀𝘁");
            if (ae(te(r))) throw new Error("𝗖𝗮𝗻𝗻𝗼𝘁 𝗼𝘃𝗲𝗿𝘄𝗿𝗶𝘁𝗲 𝗲𝘅𝗶𝘀𝘁𝗶𝗻𝗴 𝗱𝗲𝘀𝘁𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗸𝗲𝘆");
            let t, n = pe(te(e));
            if (n.substr(0, 1) === N) throw new Error("𝗖𝗮𝗻𝗻𝗼𝘁 𝗰𝗼𝗽𝘆 𝗮𝗻 𝗼𝗯𝗳𝘂𝘀𝗰𝗮𝘁𝗲𝗱 𝗸𝗲𝘆");
            return t = ie(null, n), Re(te(r), n), Ee($(), "copy", "create new key", e, r, void 0, n, void 0, t, "disk", "disk"), 
            Le.length += 1, Je(), i ? "Created new key " + r + " with value copied from existing key " + e : void 0;
        }, Le.countdupes = function() {
            if (!R()) return !1;
            let e = "", r = ke().length;
            return i ? (e = 0 === r ? "No duplicate values" : 1 === r ? "One duplicate value" : r + " duplicate values") + " in storage" : ke().length;
        }, Le.crunch = function(e) {
            if (!R()) return !1;
            if ("symbol" == typeof e) throw new Error(c);
            return q(e);
        }, Le.export = function(e = "unsafe") {
            if (!R()) return !1;
            let r = Y(!0), t = r.length, n = M, o = new Array(t), i = new Array(), f = new Array(), a = +new Date(), s = {};
            "safe" !== e && "unsafe" !== e && (e = "unsafe");
            for (let u = 0; u < t; u++) o[u] = pe(M + "." + r[u]), f[u] = [ r[u], o[u] ], i.push(f[u]), 
            ve(i), s = {
                ts: a,
                mode: e,
                keycount: t,
                prefix: n,
                keys: i
            };
            return s;
        }, Le.forcehasval = function(e) {
            if (!R()) return !1;
            if (je(e)) throw new Error(c);
            let r = !1;
            for (let t = localStorage.length; t--; ) e == pe(localStorage.key(t)) && (r = !0);
            return r;
        }, Le.forceget = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return pe(te(e));
        }, Le.forceset = function(e, r) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            let t = oe(r), n = ne(e), o = ie(te(e)), i = "bigint" === o ? n : JSON.stringify(n, ce), f = "bigint" === t ? r + "n" : r + "", a = JSON.stringify(f, ce);
            r += "bigint" === t ? "n" : "", Re(te(e), r), i === a && "string" === o || (void 0 === n ? (Ee($(), "forceset", "create new key", void 0, e, n, f, o, "string", "disk", "disk"), 
            Le.length += 1, Je()) : Ee($(), "forceset", "key value change", e, void 0, n, f, o, "string", "disk", "disk"));
        }, Le.get = function(e) {
            return !!R() && ne(e);
        }, Le._get = function(e) {
            let r = Reflect.get(Le, "#" + e);
            return "string" == typeof r && (r = K(r)), r;
        }, Le.getscramblekey = function() {
            return !!R() && o;
        }, Le.haskey = function(e) {
            return !!R() && ae(te(e));
        }, Le._haskey = function(e) {
            return Reflect.has(Le, "#" + e);
        }, Le.hastype = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(g);
            if ("symbol" === e.toLowerCase()) throw new Error(c);
            if (!k.includes(e.toLowerCase())) throw new Error(w);
            e = e.toLowerCase();
            let r, t = "", n = Y(), o = !1;
            for (let i = n.length; i--; ) if (r = n[i], t = ie(r), "number" === e && ("float" === t || "integer" === t) || "number" !== e && t === e) {
                o = !0;
                break;
            }
            return o;
        }, Le.hasval = function(e) {
            return !!R() && function(e) {
                let r = JSON.stringify(e, ce), t = "", n = "", o = !1;
                for (let e = localStorage.length; e--; ) if ((n = localStorage.key(e)).includes($()) && r === (t = JSON.stringify(H(n), ce))) {
                    o = !0;
                    break;
                }
                return o;
            }(e);
        }, Le.import = function(e, r = "") {
            if (!R()) return !1;
            let t, n, o = new Array(), i = e.keycount, f = e.prefix, a = new Date(e.ts), s = e.mode, u = 0, l = M, c = "", h = "";
            if ("safe" !== s && "unsafe" !== s && (s = "unsafe"), "" !== r && ("safe" !== r && "unsafe" !== r && (r = "unsafe"), 
            s = r), "safe" === s ? console.log("Importing upto " + i + (1 === i ? " key " : " keys ") + "from " + a + "...") : console.log("Overwriting " + i + (1 === i ? " key " : " keys ") + "from " + a + "..."), 
            l === f) {
                for (let r = 0; r < i; r++) t = (o = e.keys[r])[0], n = o[1], "safe" === s && ae(h = M + "." + t) || (Le.forceset(t, n), 
                u++);
                c = 0 === u ? "No keys" : 1 === u ? "One key" : u + " keys", console.log(c + " imported");
            } else console.log("No keys imported: prefix does not match storage");
        }, Le.isarray = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "array" === ie(te(e));
        }, Le.isbigint = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "bigint" === ie(te(e));
        }, Le.isboolean = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "boolean" === ie(te(e));
        }, Le.iscrunch = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "compressed string" === ie(te(e));
        }, Le.isdate = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "date" === ie(te(e));
        }, Le.isfloat = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "float" === ie(te(e));
        }, Le.isinteger = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "integer" === ie(te(e));
        }, Le.isnull = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "null" === ie(te(e));
        }, Le.isnumber = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "float" === ie(te(e)) || "integer" === ie(te(e));
        }, Le.isobject = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "object" === ie(te(e));
        }, Le.isstring = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            return "string" === ie(te(e)) || "compressed string" === ie(te(e));
        }, Le._isarray = function(e) {
            if (void 0 === e) throw new Error(u);
            return "array" === ee(e);
        }, Le._isbigint = function(e) {
            if (void 0 === e) throw new Error(u);
            return "bigint" === ee(e);
        }, Le._isboolean = function(e) {
            if (void 0 === e) throw new Error(u);
            return "boolean" === ee(e);
        }, Le._iscrunch = function(e) {
            if (void 0 === e) throw new Error(u);
            return "compressed string" === ee(e);
        }, Le._isdate = function(e) {
            if (void 0 === e) throw new Error(u);
            return "date" === ee(e);
        }, Le._isfloat = function(e) {
            if (void 0 === e) throw new Error(u);
            return "float" === ee(e);
        }, Le._isinteger = function(e) {
            if (void 0 === e) throw new Error(u);
            return "integer" === ee(e);
        }, Le._isnull = function(e) {
            if (void 0 === e) throw new Error(u);
            return "null" === ee(e);
        }, Le._isnumber = function(e) {
            if (void 0 === e) throw new Error(u);
            return "float" === ee(e) || "integer" === ee(e);
        }, Le._isobject = function(e) {
            if (void 0 === e) throw new Error(u);
            return "object" === ee(e);
        }, Le._isstring = function(e) {
            if (void 0 === e) throw new Error(u);
            return "string" === ee(e) || "compressed string" === ee(e);
        }, Le.key = function(e, r = !1) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(y);
            if (e !== Number(e)) throw new Error(v);
            if (e < 0) throw new Error(v);
            let t = Y(), n = t.length;
            return r && ve(t), e < n ? t[e] : void 0;
        }, Le._key = function(e, r = !1) {
            if (void 0 === e) throw new Error(y);
            if (e !== Number(e)) throw new Error(v);
            if (e < 0) throw new Error(v);
            let t = Z(), n = t.length;
            return r && ve(t), e < n ? Oe(t[e]) : void 0;
        }, Le.keybytes = function(e) {
            if (!R()) return !1;
            let r;
            return void 0 === e ? F(he()) : "0 bytes" !== (r = F(he(te(e)))) ? r : void 0;
        }, Le.keybytesall = function(e) {
            if (!R()) return !1;
            let r;
            return void 0 === e ? F(de()) : "0 bytes" !== (r = F(de(te(e)))) ? r : void 0;
        }, Le.keybytesmem = function(e) {
            if (!R()) return !1;
            let r;
            return void 0 === e ? F(we()) : "0 bytes" !== (r = F(we(te(e)))) ? r : void 0;
        }, Le.keys = function() {
            return !!R() && (Le.length = Y().length, Le.length);
        }, Le._keys = function() {
            return Z().length;
        }, Le.listdupes = function(e = !0) {
            if (!R()) return !1;
            let r = function(e) {
                let r = ke(), t = {}, n = {}, o = "", i = localStorage.length;
                if (e && ve(r), r.length) for (let t = 0, f = r.length; t < f; t++) {
                    let f = new Array();
                    for (let e = i; e--; ) o = localStorage.key(e), JSON.stringify(H(o), ce) === JSON.stringify(r[t], ce) && (o = Ae(o), 
                    f.push(o));
                    e && ve(f), n[t] = {
                        value: r[t],
                        keys: f,
                        keycount: f.length
                    };
                }
                return t = {
                    dupecount: r.length,
                    dupes: n
                };
            }(e);
            return 0 !== r.dupecount ? r : void 0;
        }, Le.poke = function(e, r, t) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            if (!ae(te(e))) throw new Error(h);
            if ("array" !== ie(te(e))) throw new Error(d);
            let n = ne(e), o = n.length, i = o + 1, f = "";
            if (void 0 === t) t = i; else if ("string" == typeof t) if ("start" === t.toLowerCase()) t = 0; else {
                if ("end" !== t.toLowerCase()) throw new Error(p);
                t = i;
            } else {
                if ("number" != typeof t) throw new Error(m);
                if (t < 1) t = 0; else if (t > o) t = i; else if (!(t > 0 && t < i)) throw new Error(b);
            }
            t === i ? (n.push(r), f = "append") : 0 === t ? (n.unshift(r), f = "prepend") : (n.splice(t - 1, 1, r), 
            f = "replace"), f += " value";
            let a, s = ne(e), w = ie(te(e)), g = "bigint" === w ? s : JSON.stringify(s, ce), y = U(r)[1], v = "bigint" === y ? a : JSON.stringify(a, ce);
            n = U(n)[0], Re(te(e), n), a = ne(e), g === v && w === y || Ee($(), "poke", f, e, void 0, s, a, w, y, "disk", "disk");
        }, Le.pull = function(e, r, t = !1) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (!ae(te(e))) return;
            if ("array" !== ie(te(e))) throw new Error(d);
            let n = ne(e), o = n.length, i = o + 1, f = "", a = 0, s = !t;
            if (void 0 === r) r = i; else if ("string" == typeof r) {
                if ("start" === r.toLowerCase()) r = 0; else if ("end" === r.toLowerCase()) r = i; else if ("" === r) throw new Error(p);
            } else if ("number" == typeof r) {
                if (s) if (r < 2) r = 0; else if (r > o) r = i; else if (!(r > 0 && r < i)) throw new Error(b);
            } else if ("bigint" == typeof r) ; else if ("number" == typeof r) ; else if ("boolean" == typeof r) ; else if ("object" != typeof r) throw new Error(m);
            if (s && r === i) n.pop(), f = "from end"; else if (s && 0 === r) n.shift(), f = "from start"; else if (s && "number" == typeof r) n.splice(r - 1, 1), 
            f = "from contents"; else {
                for (let e = 0; e < n.length; e++) if (JSON.stringify(n[e], ce) === JSON.stringify(r, ce)) {
                    a = e + 1;
                    break;
                }
                if (!a) return;
                n.splice(a - 1, 1), f = "from contents";
            }
            let l, c = ne(e), h = ie(te(e)), w = "bigint" === h ? c : JSON.stringify(c, ce), g = JSON.stringify(l, ce);
            n = U(n)[0], Re(te(e), n), l = ne(e), w === g && void 0 === h || JSON.stringify(c, ce) !== JSON.stringify(l, ce) && Ee($(), "pull", "remove value " + f, e, void 0, c, l, h, void 0, "disk", "disk");
        }, Le.pullall = function(e, r) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            if (!ae(te(e))) return;
            if ("array" !== ie(te(e))) throw new Error(d);
            let t = ne(e);
            !function(e, r) {
                let t = e.length;
                for (;t--; ) e[t] === r && e.splice(e.indexOf(r), 1);
            }(t, r);
            let n, o = ne(e), i = ie(te(e)), f = "bigint" === i ? o : JSON.stringify(o, ce), a = JSON.stringify(n, ce);
            t = U(t)[0], Re(te(e), t), n = ne(e), f === a && void 0 === i || JSON.stringify(o, ce) !== JSON.stringify(n, ce) && Ee($(), "pullall", "remove all values from contents", e, void 0, o, n, i, void 0, "disk", "disk");
        }, Le.push = function(e, r, t) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            if (ae(te(e)) && "array" !== ie(te(e))) throw new Error(d);
            if (ae(te(e))) {
                let n = ne(e), o = n.length, i = o + 1, f = "";
                if (void 0 === t) t = i; else if ("string" == typeof t) if ("start" === t.toLowerCase()) t = 0; else {
                    if ("end" !== t.toLowerCase()) throw new Error(p);
                    t = i;
                } else {
                    if ("number" != typeof t) throw new Error(m);
                    if (t < 2) t = 0; else if (t > o) t = i; else if (!(t > 0 && t < i)) throw new Error(b);
                }
                t === i ? (n.push(r), f = "append") : 0 === t ? (n.unshift(r), f = "prepend") : (n.splice(t - 1, 0, r), 
                f = "insert"), f += " value";
                let a, s = ne(e), u = ie(te(e)), l = "bigint" === u ? s : JSON.stringify(s, ce), c = U(r)[1], h = "bigint" === c ? a : JSON.stringify(a, ce);
                n = U(n)[0], Re(te(e), n), a = ne(e), l === h && u === c || Ee($(), "push", f, e, void 0, s, a, u, c, "disk", "disk");
            } else {
                let t = new Array(), n = arguments.length;
                if (n > 2) {
                    for (let e = 1; e < n; e++) "array" === oe(arguments[e]) ? t = t.concat(arguments[e]) : t.push(arguments[e]);
                    r = t;
                } else if ("array" !== oe(r)) {
                    for (let e = 1; e < n; e++) t.push(arguments[e]);
                    r = t;
                }
                let o = ne(e), i = ie(te(e)), f = ("bigint" === i || JSON.stringify(o, ce), r), a = U(r)[1];
                "bigint" === a || JSON.stringify(f, ce);
                r = U(r)[0], Re(te(e), r), Ee($(), "push", "create new key", void 0, e, o, f, i, a, "disk", "disk"), 
                Le.length += 1, Je();
            }
        }, Le.remove = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            let r = ne(e), t = ie(te(e));
            return ae(te(e)) ? (G(te(e)), Ee($(), "remove", "remove key", e, void 0, r, void 0, t, void 0, "disk", "disk"), 
            Le.length -= 1, Je(), i ? "key removed" : void 0) : void 0;
        }, Le._remove = function(e) {
            Reflect.deleteProperty(Le, "#" + e);
        }, Le.rename = function(e, r) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (!ae(te(e))) throw new Error(h);
            if (void 0 === r) throw new Error("𝗡𝗼 𝗻𝗲𝘄 𝗸𝗲𝘆 𝗻𝗮𝗺𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱");
            if (e === r) throw new Error("𝗖𝗮𝗻𝗻𝗼𝘁 𝗿𝗲𝗻𝗮𝗺𝗲 𝗸𝗲𝘆 𝘁𝗼 𝗶𝘁𝘀 𝗼𝘄𝗻 𝗻𝗮𝗺𝗲");
            if (ae(te(r))) throw new Error("𝗗𝗲𝘀𝘁𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗸𝗲𝘆 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗲𝘅𝗶𝘀𝘁𝘀");
            let t = ne(e), n = ie(te(e)), o = U(t)[0];
            G(te(e)), Re(te(r), o), Ee($(), "rename", "key name change", e, r, t, t, n, n, "disk", "disk");
        }, Le._restore = function(e, r) {
            if (void 0 === e) throw new Error(u);
            if (!ae(te(e))) throw new Error("𝗦𝗼𝘂𝗿𝗰𝗲 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲 𝗸𝗲𝘆 𝗱𝗼𝗲𝘀 𝗻𝗼𝘁 𝗲𝘅𝗶𝘀𝘁");
            let t = ne(e), n = ie(te(e)), o = "", f = "", a = "", s = "";
            if (Le._haskey(e)) {
                if (!r) throw new Error("𝗥𝗲𝘀𝘁𝗼𝗿𝗲 𝗰𝗮𝗻𝗻𝗼𝘁 𝗼𝘃𝗲𝗿𝘄𝗿𝗶𝘁𝗲 𝗲𝘅𝗶𝘀𝘁𝗶𝗻𝗴 𝗺𝗲𝗺𝗼𝗿𝘆 𝗸𝗲𝘆");
                if (a = Le._get(e), s = Le._showtype(e), Le._set(e, t), o = Le._get(e), f = Le._showtype(e), 
                !Me(t, o) || n !== f) throw new Error("𝗥𝗲𝘀𝘁𝗼𝗿𝗲 𝗲𝗿𝗿𝗼𝗿: 𝗰𝗮𝗻𝗻𝗼𝘁 𝗼𝘃𝗲𝗿𝘄𝗿𝗶𝘁𝗲 𝗲𝘅𝗶𝘀𝘁𝗶𝗻𝗴 𝗸𝗲𝘆");
                if (G(te(e)), Ee($(), "restore", "key value change", e, e, a, o, s, f, "disk", "memory"), 
                i) return "Existing Memory Key has been overwritten from localStorage and the value verified";
            } else {
                if (Le._set(e, t), o = Le._get(e), f = Le._showtype(e), !Me(t, o) || n !== f) throw new Error("𝗥𝗲𝘀𝘁𝗼𝗿𝗲 𝗲𝗿𝗿𝗼𝗿: 𝗰𝗮𝗻𝗻𝗼𝘁 𝗰𝗿𝗲𝗮𝘁𝗲 𝗻𝗲𝘄 𝗸𝗲𝘆");
                if (G(te(e)), Ee($(), "restore", "create new key", void 0, e, void 0, o, void 0, f, "disk", "memory"), 
                i) return "New Memory Key created from localStorage (value verified)";
            }
        }, Le.safeget = function(e, r) {
            if (!R()) return !1;
            let t;
            if (ae(te(e))) {
                if ((t = pe(te(e))).substr(0, 1) !== N) throw new Error("𝗞𝗲𝘆 𝗶𝘀 𝗻𝗼𝘁 𝗼𝗯𝗳𝘂𝘀𝗰𝗮𝘁𝗲𝗱");
                return t = t.substr(1), void 0 === r ? (t = Be(t, o, e), t = xe(t, o, e)) : (t = Be(t, r, e), 
                t = xe(t, r, e)), t = K(t);
            }
        }, Le.safeset = function(e, r, t) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            let n = "", f = pe(te(e)), a = null === f ? void 0 : f, s = ie(te(e)), h = "bigint" === s ? a : JSON.stringify(a, ce), d = "", w = "obfuscated key", g = JSON.stringify(d, ce);
            if (r = U(r)[0], void 0 === t ? (r = Se(r, o, e), r = Be(r, o, e), n = " with global scramble key") : (r = Se(r, t, e), 
            r = Be(r, t, e), n = " with user scramble key"), r = N + r, Re(te(e), r), d = pe(te(e)), 
            h !== g || s !== w) if (void 0 === a) {
                if (Ee($(), "safeset", "create new key" + n, void 0, e, a, d, s, w, "disk", "disk"), 
                Le.length += 1, Je(), i) return "New obfuscated key created" + n;
            } else if (a !== d && (Ee($(), "safeset", "key value change" + n, e, void 0, a, d, s, w, "disk", "disk"), 
            i)) return "Existing key has been overwritten with obfuscated value created" + n;
        }, Le.set = function(e, r) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            let t = ne(e), n = ie(te(e)), o = "bigint" === n ? t : JSON.stringify(t, ce), f = r, a = U(r)[1], s = "bigint" === a ? f : JSON.stringify(f, ce);
            if (r = U(r)[0], Re(te(e), r), o !== s || n !== a) if (void 0 === t) {
                if (Ee($(), "set", "create new key", void 0, e, t, f, n, a, "disk", "disk"), Le.length += 1, 
                Je(), i) return "New " + a + " key created";
            } else if (Ee($(), "set", "key value change", e, void 0, t, f, n, a, "disk", "disk"), 
            i) return "Existing key has been overwritten";
        }, Le._set = function(e, r) {
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            "string" == typeof r && (r = U(r)[0]), Reflect.set(Le, "#" + e, r);
        }, Le.setscramblekey = function(e) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error("𝗡𝗼 𝘀𝗰𝗿𝗮𝗺𝗯𝗹𝗲 𝗸𝗲𝘆 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱");
            if (je(e)) throw new Error(c);
            return o = e, i ? "The new global scramble key is set" : void 0;
        }, Le.showdupes = function(e = !0) {
            if (!R()) return !1;
            let r = ke();
            return e && ve(r), r.length ? r : i ? "No duplicate values in storage" : void 0;
        }, Le.showkeys = function(e, r = !0, t = !0) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(l);
            if (je(e)) throw new Error(c);
            let n, o = "", f = new Array(), a = Y();
            for (let t = a.length; t--; ) n = a[t], o = H(n), JSON.stringify(o, ce) === JSON.stringify(e, ce) && (r && (n = Ae(n)), 
            f.push(n));
            return t && ve(f), f.length ? f : i ? "No keys have that value" : void 0;
        }, Le.showkeytypes = function(e, r = !0, t = !0) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(g);
            if ("symbol" === e.toLowerCase()) throw new Error(c);
            if (!k.includes(e.toLowerCase())) throw new Error(w);
            e = e.toLowerCase();
            let n, o = "", f = new Array(), a = Y();
            for (let t = a.length; t--; ) n = a[t], o = ie(n), ("number" === e && ("float" === o || "integer" === o) || "number" !== e && o === e) && (r && (n = Ae(n)), 
            f.push(n));
            return t && ve(f), f.length ? f : i ? "No keys are of that type" : void 0;
        }, Le.showprefix = function() {
            return !!R() && (i ? "The key prefix (" + M + ".) adds " + _keyNameOverhead + " to each key name (stored using " + _keyNameOverhead2 + ")" : M + ".");
        }, Le.showquota = function() {
            if (!R()) return !1;
            const e = function() {
                let e, r = 0;
                try {
                    for (r = 250; r <= 2e4; r += 250) localStorage.setItem(T, new Array(1024 * r + 1).join("~"));
                } catch (e) {
                    localStorage.setItem(T + T, r - 250);
                }
                return e = localStorage.getItem(T + T), e = parseInt(e, 10), e *= 1e3, G(T), G(T + T), 
                e;
            }();
            return Le.quota = F(e, !0), i ? "Total storage allocated is " + F(e, !0) + " (consuming " + F(2 * e, !0) + " of memory)" : F(e, !0);
        }, Le.showquotaused = function(e = !1) {
            if (!R()) return !1;
            let r, t, n, o = "", f = localStorage.length;
            if (0 !== localStorage.length) {
                for (let e = f; e--; ) o += (r = localStorage.key(e)) + (t = pe(r));
                return n = z(o), e ? n : i ? "Total storage used is " + F(n) + " (consuming " + F(2 * n, !0) + " of memory)" : F(n);
            }
            return F(0);
        }, Le.showtype = function(e) {
            if (!R()) return !1;
            let r;
            if (void 0 === e) throw new Error(u);
            return r = ie(te(e)), i ? void 0 === r ? "Key does not exist and cannot be checked" : "array" === r ? "This key is an Array Key" : "Key has value whose data type is " + r : r;
        }, Le._showtype = function(e) {
            if (void 0 === e) throw new Error(u);
            let r = "", t = be(e);
            return r = fe(t);
        }, Le.shufflestring = function(e, r, t) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(E);
            if (void 0 === r) throw new Error(s);
            if (void 0 === t) throw new Error(u);
            return Se(e, r, t);
        }, Le.size = function(e) {
            if (!R()) return !1;
            let r = ne(e);
            return void 0 !== r && (r = W(r)), i ? void 0 === r ? "Key does not exist and cannot be checked" : "Key value has " + r + " codepoints" : r;
        }, Le.softset = function(e, r) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            let t, n = U(r)[1], o = r;
            return ae(te(e)) ? 1 === i ? "Key already exists and cannot be overwritten" : void 0 : (r = U(r)[0], 
            Re(te(e), r), Ee($(), "softset", "create new key", void 0, e, void 0, o, void 0, n, "disk", "disk"), 
            Le.length += 1, Je(), 1 === i ? t = "array" === n ? "New Array Key created" : "New " + n + " key created" : void 0);
        }, Le._store = function(e = !1) {
            let r, t, n = Z(!0), o = n.length, i = new Array();
            e && ve(n);
            for (let e = 0; e < o; e++) r = n[e], t = Reflect.get(Le, "#" + r), i.push([ r, t ]);
            return 0 === i.length ? void 0 : i;
        }, Le.uncrunch = function(e) {
            return !!R() && Ce(e);
        }, Le.unshufflestring = function(e, r, t) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(E);
            if (void 0 === r) throw new Error(s);
            if (void 0 === t) throw new Error(u);
            return xe(e, r, t);
        }, Le.valbytes = function(e) {
            if (!R()) return !1;
            let r;
            return void 0 === e ? F(Ie()) : "0 bytes" !== (r = F(Ie(te(e)))) ? r : void 0;
        }, Le.valbytesall = function(e) {
            if (!R()) return !1;
            let r;
            return void 0 === e ? F(Pe()) : "0 bytes" !== (r = F(Pe(te(e)))) ? r : void 0;
        }, Le.valbytesmem = function(e) {
            if (!R()) return !1;
            let r;
            return void 0 === e ? F(Te()) : "0 bytes" !== (r = F(Te(te(e)))) ? r : void 0;
        }, Le.verbosity = function(e) {
            return !!R() && (void 0 !== (e = Boolean(e)) && function(e) {
                i = Boolean(e);
            }(e), "Verbosity is " + (i ? "on" : "off"));
        }, Le.where = function(e, r) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(u);
            if (void 0 === r) throw new Error(l);
            if (je(r)) throw new Error(c);
            if (!ae(te(e))) return;
            if ("array" !== ie(te(e))) throw new Error(d);
            let t = !1, n = ne(e);
            for (let e = 0; e < n.length; e++) if (JSON.stringify(n[e], ce) === JSON.stringify(r, ce)) {
                t = e + 1;
                break;
            }
            return i ? "Value was found in the Array Key at position " + t : t;
        }, Le.xorstring = function(e, r, t) {
            if (!R()) return !1;
            if (void 0 === e) throw new Error(E);
            if (void 0 === r) throw new Error(s);
            if (void 0 === t) throw new Error(u);
            return Be(e, r, t);
        };
        try {
            localStorage.length;
            Le.version = "localDataStorage 3.0.0", Object.defineProperty(Le, "length", {
                enumerable: !1,
                configurable: !1,
                writable: !0,
                value: Y().length
            });
            let e = F(z(Le.showprefix())), o = F(2 * z(Le.showprefix()));
            return function() {
                Le.quota = Le.showquota();
                let i, f = !1, a = !1, s = localStorage.length, u = Le.showprefix();
                if (R()) {
                    if (void 0 !== r || t && t.includes("/q") || (a = !0, console.info("No prefix specified. Creating a %crandom %cprefix --\x3e %c" + u, "font-style: italic;", "font-style: normal;", "font-weight: bold;")), 
                    "" !== r || t && -1 !== t.indexOf("/q") || console.info("Empty prefix given (%c" + u + "%c), but a usable prefix is %cstrongly recommended%c to organize keys!", "font-weight: bold;", "font-style: normal;", "text-decoration: underline;", "text-decoration: none;"), 
                    t && -1 !== t.indexOf("/q") || console.log("💼 localDataStorage instantiated. " + (!0 === a ? "The random prefix" : "Your specified prefix") + " (%c" + u + "%c) adds " + e + " to every key name (stored using " + o + ").", "font-weight: bold;", "font-style: normal;"), 
                    t && t.includes("/w")) {
                        for (let e = s; e--; ) if (-1 !== (i = localStorage.key(e)).indexOf(u)) {
                            f = !0;
                            break;
                        }
                        f && console.warn("%cAttention! %cKeys with this prefix already exist in localStorage for this domain!", "color: rgb(230,0,0); font-weight: bold;", "color: rgb(230,0,0);");
                    }
                    t && t.includes("/t") && function() {
                        let e = !1;
                        return Le.safeset(T, T, T), T === Le.safeget(T, T) && (e = !0), Le.remove(T), e;
                    }() && console.log("Tested good: The localStorage API is available");
                } else n.close(), console.warn("%cWarning! Cannot access localStorage! %cBailing out...", "color: rgb(230,0,0); font-weight: bold;", "color: rgb(230,0,0);");
            }(), Le;
        } catch (e) {
            n.close(), console.error("%cFatal error! %cThe localStorage API appears to be disabled! Please check your browser’s settings for cookies and storage.", "color: rgb(230,0,0); font-weight: bold;", "color: rgb(230,0,0);");
        }
    }(e, r);
};
