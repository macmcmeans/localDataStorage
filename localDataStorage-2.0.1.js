/*///////////////////////////////////////////////////////////////////////////////////////////////////
localDataStorage 2.0.1
https://gitcdn.link/cdn/macmcmeans/localDataStorage/master/localDataStorage-2.0.1.js
/////////////////////////////////////////////////////////////////////////////////////////////////////
This version is
Copyright 2017 - 2022 William P. "Mac" McMeans
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
SMAZ 1.1
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
This version of localDataStorage incorporates aleaPRNG (a pseudo random number generator) by W. McMeans. 
/////////////////////////////////////////////////////////////////////////////////////////////////////
aleaPRNG 1.1
//////////////////////////////////////////////////////////////////
https://github.com/macmcmeans/aleaPRNG/blob/master/aleaPRNG-1.1.js
//////////////////////////////////////////////////////////////////
Original work copyright © 2010 Johannes Baagøe, under MIT license
This is a derivative work copyright (c) 2017-2020, W. Mac" McMeans, under BSD license.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
This version of localDataStorage incorporates fisherYatesDurstenfeldKnuthShuffle by W. McMeans. 
/////////////////////////////////////////////////////////////////////////////////////////////////////
fisherYatesDurstenfeldKnuthShuffle 1.2
//////////////////////////////////////////////////////////////////
https://github.com/macmcmeans/fisherYatesDurstenfeldKnuthShuffle/blob/master/fisherYatesDurstenfeldKnuthShuffle-1.2.js
//////////////////////////////////////////////////////////////////
Copyright © 2018, 2020, 2021 W. "Mac" McMeans
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
////////////////////////////////////////////////////////////////*/

const localDataStorage = function( _specifiedPrefix, _switches ) {
    return( function( _storageKeyPrefix, _userswitches ) {
        "use strict";

        let
            // default scramble key
            _scrambleKey = { "this":['is','not'], "quite":['cryptographic','strength'] }

            // user feedback mode
            , _weAreVerbose = 0
        ;

        const VERSION = '2.0.1'

            , ERROR_10 = "𝗡𝗼 𝘀𝗲𝗲𝗱 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱"
            , ERROR_11 = "𝗡𝗼 𝗸𝗲𝘆 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱"
            , ERROR_12 = "𝗡𝗼 𝗸𝗲𝘆 𝘃𝗮𝗹𝘂𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱"
            , ERROR_13 = "𝗩𝗮𝗹𝘂𝗲 𝗶𝘀 𝗮𝗻 𝘂𝗻𝘀𝘂𝗽𝗽𝗼𝗿𝘁𝗲𝗱 𝘁𝘆𝗽𝗲"
            , ERROR_14 = "𝗡𝗼 𝘀𝗰𝗿𝗮𝗺𝗯𝗹𝗲 𝗸𝗲𝘆 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱"
            , ERROR_15 = "𝗞𝗲𝘆 𝗱𝗼𝗲𝘀 𝗻𝗼𝘁 𝗲𝘅𝗶𝘀𝘁"
            , ERROR_16 = "𝗞𝗲𝘆 𝗺𝘂𝘀𝘁 𝗯𝗲 𝗮𝗻 𝗔𝗿𝗿𝗮𝘆 𝗞𝗲𝘆"
            , ERROR_17 = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝗱𝗮𝘁𝗮 𝘁𝘆𝗽𝗲"
            , ERROR_18 = "𝗡𝗼 𝗱𝗮𝘁𝗮 𝘁𝘆𝗽𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱"
            , ERROR_19 = "𝗡𝗼 𝘃𝗮𝗹𝘂𝗲 𝘁𝗼 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝗳𝗿𝗼𝗺"
            
            , ERROR_20 = "𝗡𝗼 𝘃𝗮𝗹𝘂𝗲 𝘁𝗼 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝘁𝗼"
            , ERROR_21 = "𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝗿𝗲𝗮𝗱𝗶𝗻𝗴 𝗳𝗿𝗼𝗺 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲"
            , ERROR_22 = "𝗖𝗮𝗻𝗻𝗼𝘁 𝗮𝘀𝘀𝗶𝗴𝗻 𝘃𝗮𝗹𝘂𝗲 𝗯𝗲𝗰𝗮𝘂𝘀𝗲 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲 𝗾𝘂𝗼𝘁𝗮 𝗶𝘀 𝗳𝘂𝗹𝗹"
            , ERROR_23 = "𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝘄𝗿𝗶𝘁𝗶𝗻𝗴 𝘁𝗼 𝗹𝗼𝗰𝗮𝗹𝗦𝘁𝗼𝗿𝗮𝗴𝗲"
            , ERROR_24 = "𝗡𝗼 𝗶𝗻𝗱𝗲𝘅 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱"
            , ERROR_25 = "𝗜𝗹𝗹𝗲𝗴𝗮𝗹 𝗶𝗻𝗱𝗲𝘅 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱"
            , ERROR_26 = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝘀𝘁𝗿𝗶𝗻𝗴 𝗶𝗻𝗱𝗲𝘅 𝗸𝗲𝘆𝘄𝗼𝗿𝗱"
            , ERROR_27 = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝗻𝘂𝗺𝗲𝗿𝗶𝗰 𝗶𝗻𝗱𝗲𝘅"
            , ERROR_28 = "𝗨𝗻𝗸𝗻𝗼𝘄𝗻 𝗶𝗻𝗱𝗲𝘅" 
            , ERROR_29 = "𝗡𝗼 𝗻𝗲𝘄 𝗸𝗲𝘆 𝗻𝗮𝗺𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱"
            
            , ERROR_30 = "𝗖𝗮𝗻𝗻𝗼𝘁 𝗿𝗲𝗻𝗮𝗺𝗲 𝗸𝗲𝘆 𝘁𝗼 𝗶𝘁𝘀 𝗼𝘄𝗻 𝗻𝗮𝗺𝗲"
            , ERROR_31 = "𝗗𝗲𝘀𝘁𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗸𝗲𝘆 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗲𝘅𝗶𝘀𝘁𝘀"
            , ERROR_32 = "𝗡𝗼 𝘀𝘁𝗿𝗶𝗻𝗴 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱"

            , SUPPORTED_TYPES = [ 'array', 'bigint', 'boolean', 'date', 'float', 'integer', 'null', 'number', 'object', 'string' ]

            // 2 bytes overhead per flag (stored using 4 bytes)
            //////////////////////////////////////////////////
            , TYPE_CRUNCH  = String.fromCodePoint( 128 )

            , TYPE_STRING  = String.fromCodePoint( 129 )
            , TYPE_DATE    = String.fromCodePoint( 141 )
            , TYPE_NUMBER  = String.fromCodePoint( 142 )
            , TYPE_BOOLEAN = String.fromCodePoint( 143 )
            , TYPE_OBJECT  = String.fromCodePoint( 144 )
            , TYPE_BIGINT  = String.fromCodePoint( 149 )
            , TYPE_ARRAY   = String.fromCodePoint( 157 )
            //////////////////////////////////////////////////

            , SHUFFLE_MARKER = String.fromCodePoint( 158 )

            , STORAGE_TEST = '__storage_test__' 

            , __prefix = function() {
                let _now = new Date();
                return _now.getTime() + ':' + ( Math.random() * 100000000 | 0 );
            }()

            , _prefix = _storageKeyPrefix === '' 
                ? '' 
                : typeof _storageKeyPrefix === 'undefined' 
                    ? __prefix 
                    : _storageKeyPrefix

            , __isStorageAvailable = function( _type ) { 
                let storage
                    , x = STORAGE_TEST
                ;

                try {
                    storage = window[ _type ]
                    storage.setItem( x, x );
                    storage.removeItem( x );
                    return true;
                }
                catch( e ) {
                    return false;
                }
            }

            , _storageIsAvailable = __isStorageAvailable( 'localStorage' )

            /*////////////////////////////////////////////////////////////////////
            aleaPRNG 1.1
            //////////////////////////////////////////////////////////////////////
            Copyright (c) 2017-2020, W. "Mac" McMeans
            LICENSE: BSD 3-Clause License
            https://github.com/macmcmeans/aleaPRNG/blob/master/aleaPRNG-1.1.min.js
            ////////////////////////////////////////////////////////////////////*/
            , _aleaPRNG = function() {
                return function(n) {
                    "use strict";
                    var a, u, i, c, r, t = new Uint32Array(3), f = "", e = "aleaPRNG 1.1";
                    function o(n) {
                        var o, r, t = (o = 4022871197, (r = function(n) {
                            n = n.toString();
                            for (var r = 0, t = n.length; r < t; r++) {
                                var e = .02519603282416938 * (o += n.charCodeAt(r));
                                e -= o = e >>> 0, o = (e *= o) >>> 0, o += 4294967296 * (e -= o);
                            }
                            return 2.3283064365386963e-10 * (o >>> 0);
                        }).version = "Mash 0.9", r);
                        a = t(" "), u = t(" "), i = t(" "), c = 1;
                        for (var e = 0; e < n.length; e++) (a -= t(n[e])) < 0 && (a += 1), (u -= t(n[e])) < 0 && (u += 1), 
                        (i -= t(n[e])) < 0 && (i += 1);
                        f = t.version, t = null;
                    }
                    function l(n) {
                        return parseInt(n, 10) === n;
                    }
                    var s = function() {
                        var n = 2091639 * a + 2.3283064365386963e-10 * c;
                        return a = u, u = i, i = n - (c = 0 | n);
                    };
                    return s.fract53 = function() {
                        return s() + 11102230246251565e-32 * (2097152 * s() | 0);
                    }, s.int32 = function() {
                        return 4294967296 * s();
                    }, s.cycle = function(n) {
                        (n = void 0 === n ? 1 : +n) < 1 && (n = 1);
                        for (var r = 0; r < n; r++) s();
                    }, s.range = function() {
                        var n, r;
                        return r = 1 === arguments.length ? arguments[n = 0] : (n = arguments[0], arguments[1]), 
                        arguments[0] > arguments[1] && (n = arguments[1], r = arguments[0]), l(n) && l(r) ? Math.floor(s() * (r - n + 1)) + n : s() * (r - n) + n;
                    }, s.restart = function() {
                        o(r);
                    }, s.seed = function() {
                        o(Array.prototype.slice.call(arguments));
                    }, s.version = function() {
                        return e;
                    }, s.versions = function() {
                        return e + ", " + f;
                    }, 0 === n.length && (window.crypto.getRandomValues(t), n = [ t[0], t[1], t[2] ]), 
                    o(r = n), s;
                }(Array.prototype.slice.call(arguments));
            }
            //////////////////////////////////////////////////////////////////////

            // convert a localStorage string into its original primitive object (Number, Date, String, etc.) based on embedded flags
            // markers are at the end of the value
            , _convertFromString = function( _value ) {
                let _recovered_value = ''
                    , _recoveredType
                ;
                const thisIsOurType  = function( type ) {
                        return _value.includes( type ); 
                    }
                    , extractTheData = function( val )  {
                        return val.substr( 0, val.indexOf( _recoveredType ) );
                    }
                    , parseTheData   = function( val )  {
                        return JSON.parse( val, _JSONparser );
                    }
                    , anyOfThese = function() {
                        let tally = arguments.length
                            , items = Object.values( arguments )
                        ;
                        
                        let obj = {
                            areIn( source ) {
                                for( let i = 0; i < tally; i++ ) { if( items[ i ] === source ) { return true; } }
                                return false;
                            }
                            , total() { return tally; }
                        };

                        return obj;
                    }
                ;


                if( 'undefined' === typeof _value ) { throw new Error( ERROR_19 ); }

                // check for embedded flags (at end of string)
                if( anyOfThese( TYPE_ARRAY, TYPE_BIGINT, TYPE_BOOLEAN, TYPE_DATE, TYPE_NUMBER, TYPE_OBJECT, TYPE_STRING ).areIn( _value.substr( -1, 1 ) ) ){

                    if( _recovered_value === '' ) {
                        _recoveredType = TYPE_STRING;
                        if( thisIsOurType( _recoveredType ) ) {
                            _value = extractTheData( _value );

                            // is it compressed?
                            if( _value.includes( TYPE_CRUNCH ) ) { 
                                _value = _value.substr( 1, _value.length )
                                _value = _uncrunch( _value );
                            }
                            _recovered_value = _value;
                        }
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = TYPE_DATE;
                        if( thisIsOurType( _recoveredType ) ) {
                            _value = extractTheData( _value );
                            _recovered_value = parseTheData( _value );
                            _recovered_value = new Date( _recovered_value );
                        } 
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = TYPE_ARRAY;
                        if( thisIsOurType( _recoveredType ) ) {
                            _value = extractTheData( _value );
                            _recovered_value = parseTheData( _value );
                        } 
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = TYPE_NUMBER;
                        if( thisIsOurType( _recoveredType ) ) {
                            _value = extractTheData( _value );
                            _recovered_value = parseFloat( _value );    // ints and floats
                        }
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = TYPE_BOOLEAN;
                        if( thisIsOurType( _recoveredType ) ) {
                            _value = extractTheData( _value );
                            _recovered_value = _value === '1' ? true : false;
                        }
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = TYPE_BIGINT;
                        if( thisIsOurType( _recoveredType ) ) {
                            _value = extractTheData( _value );
                            _recovered_value = BigInt( _value );
                        }
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = TYPE_OBJECT;
                        if( thisIsOurType( _recoveredType ) ) {
                            _value = extractTheData( _value );
                            _recovered_value = parseTheData( _value );
                        }
                    }

                } else {

                    if( _getTypeOfKey( 'VALUE_OVERRIDE', _value ) === 'presumed bigint' ) {
                        _value = _value.substring( 0, _value.length - 1 );
                        _recovered_value = BigInt( _value );
                    
                    } else

                    // assume it's an object, or an array, that has been stringified, if possible
                    if( _value[ 0 ] === "{" || _value[ 0 ] === "[" ) {
                        try{
                            _recovered_value = parseTheData( _value );
                        } catch( e ) {
                            _recovered_value = _value;
                        }

                    // assume it's a typical localStorage string
                    } else {
                        
                        // is it a possible number (int or float)?
                        if( _value == +_value ) {
                            _recovered_value = +_value;

                        // nope, just a regular key value (string)
                        } else {
                            _recovered_value = _value;
                        }
                    }
                }

                return _recovered_value;
            }

            // convert a primitive object (Number, Date, String, etc.) to localStorage string
            // embeds data type flags for reconstruction
            // marker flags are 2 bytes each, adding 4 bytes (actual memory used) overhead for each data type stored
            // returns the converted object and its data type
            , _convertToString = function( value ) {
                let _marker = ''
                    , _type = ''
                ;

                if( 'undefined' === typeof value ) { throw new Error( ERROR_20 ); }

                // strings
                if( 'string' === typeof value ) {
                    _type = 'string';
                    _marker = TYPE_STRING;

                    // only try to compress strings
                    if( _isCrunchable( value ) ) {
                        _type = 'compressed string';

                        value = _crunch( value );
                        value = TYPE_CRUNCH + value; 
                    }
                
                } else
                
                // dates
                if( 'object' === typeof value && value instanceof Date  ) { 
                    _type = 'date';
                    _marker = TYPE_DATE;
                    value = JSON.stringify( value, _JSONstringer );

                } else

                // arrays
                if( 'object' === typeof value && value instanceof Array ) { 
                    _type = 'array';
                    _marker = TYPE_ARRAY;
                    value = JSON.stringify( value, _JSONstringer );

                } else

                // numbers
                if( 'number' === typeof value ) {
                    _type = 'integer';
                    if( ( value + '' ).indexOf( '.' ) !== -1 ) { _type = 'float'; }

                    _marker = TYPE_NUMBER;
                    value += '';

                } else

                // booleans
                if( 'boolean' === typeof value ) {
                    _type = 'boolean';
                    _marker = TYPE_BOOLEAN;

                    value = Number( value );
                    value += '';

                } else

                // bigints
                if( 'bigint' === typeof value ) {
                    _type = 'bigint';
                    _marker = TYPE_BIGINT;

                    value += '';

                } else

                // all other objects (null, array, etc.)
                if( 'object' === typeof value ) {
                    _type = 'object';
                    
                    if( value === null ) { _type = 'null'; }

                    _marker = TYPE_OBJECT;
                    value = JSON.stringify( value, _JSONstringer );
                }

                if( _marker !== '' ) {
                    value += _marker;
                }

                return [ value, _type ];
            }

            // compress simple 7-bit ASCII words
            , _crunch = function( _text ) {
                return _SMAZ.compress( _text );
            }

            // friendly formatted output
            , _describeSize = function( _val, _1k = false ) {
                const _units = [ "bytes", "KB", "MB" ];
                let _sizeUnit = 0
                    , k = 1024
                ;

                if( _1k ) { k = 1000; }

                while( _val > k ) { _sizeUnit++; _val /= k; }
                _val = _val == 1 
                    ? '1 byte' 
                    : _val.toFixed( 2 ) + " " + _units[ _sizeUnit ];
                _val = _val.replace( '.00 ', ' ' );

                return _val;
            }

            // in-place array shuffle (no copy made)
            , _fisherYatesDurstenfeldKnuthShuffle = function(n, r) {
                var t, e = n.length, a = function() {
                    var n = new Uint32Array(2);
                    return window.crypto.getRandomValues(n), +("0." + n[0] + n[1]);
                };
                for (r = r || a; --e; ) t = Math.floor(r() * (e + 1)), n[t] = [ n[e], n[e] = n[t] ][0];
            }

            // shuffled array is copied to the restored (unshuffled) array
            , _fisherYatesDurstenfeldKnuthUnshuffle = function(r, e) {
                for (var n, f = new Array(r.length), t = new Array(r.length), a = r.length, h = 0; h < a; h++) t[h] = h;
                for (var h = a - 1; h > 0; h--) n = Math.floor(e() * (h + 1)), t[h] = [ t[n], t[n] = t[h] ][0];
                for (var h = 0; h < a; h++) f[t[h]] = r[h];
                return f;
            }

            // A fast Hash for integer or float. Returns positive integer.
            , _foldFPHash = function(n) {
                let r = .059886774281039834 * n;
                return r += 21845.33332824707, n = 0 | r, r -= n, r *= n, n = 0 | r, r -= n, (n ^= 4294967296 * r) >>> 0;
            }

            // return key's primitive value
            , _get = function( key ) {
                if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }

                let _value = _readLocalStorage( key );
        
                if( !_value ) {
                    return undefined;
                } else {
                    return _convertFromString( _value );        
                }
            }

            // returns unsorted array of prefixed key names in store
            , _getAllKeysThisInstance = function( stripKeyPrefix = false ) {
                let _key
                    , _prefix           = _getKeyPrefix()
                    , _keysThisInstance = new Array()
                    , _len              = localStorage.length
                ;

                // loop through all localStorage keys
                for( let i = _len; i--; ) {
                    _key = localStorage.key( i );

                    // get the ones prefixed for this instance
                    if( _key.substr( 0, _prefix.length ) === _prefix ) {
                        
                        // check if the key prefix should be retained
                        if( stripKeyPrefix ) {
                            _key = _stripPrefix( _key );
                        }

                        // add keyname to list of keys 
                        _keysThisInstance.push( _key );
                    }
                }

                return _keysThisInstance;
            }


            // returns count of bytes in string
            , _getByteCount = function( t ) {
                t = "" + t;
                for (var r = t.length, n = r - 1; n >= 0; n--) {
                    let e = t.charCodeAt(n);
                    e > 127 && 2047 >= e ? r++ : e > 2047 && 65535 >= e && (r += 2), e >= 56320 && 57343 >= e && n--;
                }
                return r;
            }

            // returns count of codepoints in string
            , _getCodePointCount = function( t ) {
                return t = "" + t, __ucs2decode( t ).length;
            }

            // create an object listing duplicate values, their associated keys, and counts
            , _getDuplicates = function( _weShouldSortThis ) {
                let dupes = _showDupes()
                    , _keyNamesObj = {}
                    , _keyNames    = {}
                    , _tempKey     = ''
                    , _len         = localStorage.length
                ;

                if( _weShouldSortThis ) { _naturalSort( dupes ); }

                if( dupes.length ) {
                
                    for( let ii = 0, len = dupes.length; ii < len; ii++ ) {
                        let _keyNameParts = new Array();

                        for( let i = _len; i--; ) {
                            _tempKey = localStorage.key( i );

                            if( JSON.stringify( _get( _tempKey ), _JSONstringer ) === JSON.stringify( dupes[ ii ], _JSONstringer ) ) {
                                _tempKey = _stripPrefix( _tempKey );
                                _keyNameParts.push( _tempKey );
                            }
                        }

                        if( _weShouldSortThis ) { _naturalSort( _keyNameParts ); }

                        _keyNames[ ii ] = { 
                            'value'      : dupes[ ii ]
                            , 'keys'     : _keyNameParts
                            , 'keycount' : _keyNameParts.length
                        }
                    }
                }

                _keyNamesObj = {
                    'dupecount' : dupes.length
                    , 'dupes'   : _keyNames 
                }

                return _keyNamesObj;
            }

            // retrieve the prefix defined when LDS was instantiated
            , _getKeyPrefix = function() {
                return _prefix + '.';
            }

            // convert input to integer based on value and data type
            // returns [ integer, objectString ]
            , _getNumberFromObject = function( _input ) {
                if( 'undefined' === typeof _input ) { return; }

                let _json = typeof _input === 'bigint' 
                    ? _input.toString() 
                    : JSON.stringify( _input, _JSONstringer )
                    
                    , _num     = 0
                    , _type    = ''
                    , _convert = ''
                ;
                const _reverseIt = function( _string ) { 
                        return Array.from( _string ).reverse().join( '' ); 
                    }
                    , _hashCode = function( _string ) {
                        let _rng = _xmur3a( _string );
                        return _rng();
                    }
                ;
                
                // arrays
                if( _input instanceof Array ) { 
                    _type = 'ARRAY1';

                } else

                // bigints
                if( 'bigint' === typeof _input ) {
                    _type = 'BIGINT2'

                } else

                // booleans
                if( 'boolean' === typeof _input ) {
                    _type = 'BOOLEAN4';

                } else

                // dates
                if( _input instanceof Date ) { 
                    _type = 'DATE8';

                } else

                // numbers
                if( 'number' === typeof _input ) {
                    if( ( _input + '' ).includes( '.' ) ) {
                        _type = 'FLOAT16';
                    } else {
                        _type = 'INTEGER32';
                    }

                } else

                // strings
                if( 'string' === typeof _input ) {
                    _type = 'STRING64'

                // other objects
                } else {
                    _type = 'OBJECT128';
                }

                // may need canonical JSON stringify in the future (https://github.com/mirkokiefer/canonical-json)
                _convert = ( 
                    _json              + 
                    _json.length       + 
                    _type              +
                    _hashCode( _json ) +
                    _hashCode( _reverseIt( _json ) ) 
                );

                for( let i = 0; i < _convert.length; i++ ) {
                    _num += _convert.codePointAt( i );
                }

                return [ _num, _convert ];
            }

            // return key with prefix
            , _getPrefixedKey = function( key ) {
                return _getKeyPrefix() + key;
            }

            // find all duplicate key values in _array (strict check; match value and type)
            , _getStrictDuplicates = function( _array ) {
                let _dupes = new Array()
                    , _tempDupe = new Array()
                    , _len = _array.length
                ;

                for( let i = 0; i < _len; i++ ) {
                    _tempDupe = _array[ i ]; // unconverted localStorage string (much easier to check)

                    if( ( _array.lastIndexOf( _tempDupe ) !== i ) && ( _dupes.indexOf( _tempDupe ) === -1 ) ) {
                        _dupes.push( _tempDupe );
                    }
                }

                // now that we have all the dupes, convert 'em back to their original data types
                for( let i = 0, l = _dupes.length; i < l; i++ ) {
                    _dupes[ i ] = _convertFromString( _dupes[ i ] );
                }

                return _dupes;
            }

            // return the primitive value of the prefixed key
            , _getTheKey = function( _key ) {
                return _get( _getPrefixedKey( _key ) );
            }

            // return the data type of value
            , _getTypeOf = function( value ) {
                return _convertToString( value )[ 1 ];
            }

            // return the primitive data type of the key's value
            // when valueToCheck is supplied, no key  lookup is performed
            , _getTypeOfKey = function( key, valueToCheck ) {
                if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }

                let _recoveredType = ''
                    , _value = ''
                ;
                const thisIsOurType = function( type ) { 
                        return _value.includes( type ); 
                    }
                    , anyOfThese = function() {
                        let tally = arguments.length
                            , items = Object.values( arguments )
                        ;
                        
                        let obj = {
                            areIn( source ) {
                                for( let i = 0; i < tally; i++ ) { if( items[ i ] === source ) { return true; } }
                                return false;
                            }
                            , total() { return tally; }
                        };

                        return obj;
                    }
                ;

                // check the type from the value of the key
                if( 'undefined' === typeof valueToCheck ) {

                    if( _haskey( key ) ) {
                        _value = _readLocalStorage( key );
                    } else {
                        return undefined;
                    }

                // check the type from the supplied value
                } else {
                    _value = valueToCheck;
                }

                // check for embedded flags (at end of string)
                if( anyOfThese( TYPE_ARRAY, TYPE_BIGINT, TYPE_BOOLEAN, TYPE_DATE, TYPE_NUMBER, TYPE_OBJECT, TYPE_STRING ).areIn( _value.substr( -1, 1 ) ) ){
                   
                    if( thisIsOurType( TYPE_STRING ) ) {
                        _recoveredType = 'string';

                        // is it compressed?
                        if( thisIsOurType( TYPE_CRUNCH ) ) { 
                            _recoveredType = 'compressed string';
                        }
                    }
                    if( _recoveredType === '' ) {
                        if( thisIsOurType( TYPE_DATE ) ) {
                            _recoveredType = 'date';
                        } 
                    }
                    if( _recoveredType === '' ) {
                        if( thisIsOurType( TYPE_ARRAY ) ) {
                            _recoveredType = 'array';
                        } 
                    }
                    if( _recoveredType === '' ) {
                        if( thisIsOurType( TYPE_NUMBER ) ) {
                            _recoveredType = 'number';

                            if( _value.includes( '.' ) ) {
                                _recoveredType = 'float';
                            } else {
                                _recoveredType = 'integer';
                            }
                        }
                    }
                    if( _recoveredType === '' ) {
                        if( thisIsOurType( TYPE_BOOLEAN ) ) {
                            _recoveredType = 'boolean';
                        }
                    }
                    if( _recoveredType === '' ) {
                        if( thisIsOurType( TYPE_BIGINT ) ) {
                            _recoveredType = 'bigint';
                        }
                    }
                    if( _recoveredType === '' ) {
                        if( thisIsOurType( TYPE_OBJECT ) ) {
                            _recoveredType = 'object';

                            if( _value[ 0 ] + _value[ 1 ] + _value[ 2 ] + _value[ 3 ] === 'null' ) {
                                _recoveredType = 'null';
                            }
                        }
                    }

                
                // there are no embedded flags
                } else {

                    // assume it's an object, or an array, that has been stringified, if possible
                    if( _value[ 0 ] === "[" ) {
                        _recoveredType = 'presumed array';

                    } else
                    if( _value[ 0 ] === "{" ) {
                        _recoveredType = 'presumed object';

                    // assume it's a typical localStorage string
                    } else {

                        // is it a bigint?
                        if( _value.substr( -1, 1 ) === 'n' && parseInt( _value, 10 ) === +( _value.substring( 0, _value.length - 1 ) ) ) {
                            _recoveredType = 'presumed bigint';
                        } else

                        // is it a possible number (int or float)?
                        if( _value == +_value ) {
                            _recoveredType = 'presumed number';

                        // nope, just a regular key value
                        } else {

                            // can we unscramble it using the current global scramble key?
                            _value = _xorString(       _value, _scrambleKey, key.replace( _getKeyPrefix(), '' ) );              
                            _value = _unshuffleString( _value, _scrambleKey, key.replace( _getKeyPrefix(), '' ) );

                            if( thisIsOurType( TYPE_STRING  ) ) {
                                _recoveredType = 'obfuscated string';
                            
                            } else
                            if( thisIsOurType( TYPE_BIGINT  ) ) {
                                _recoveredType = 'obfuscated bigint';

                            } else
                            if( thisIsOurType( TYPE_DATE    ) ) {
                                _recoveredType = 'obfuscated date';

                            } else
                            if( thisIsOurType( TYPE_ARRAY   ) ) {
                                _recoveredType = 'obfuscated array';

                            } else
                            if( thisIsOurType( TYPE_NUMBER  ) ) {
                                _recoveredType = 'obfuscated number';

                                if( _value.includes( '.' ) ) {
                                    _recoveredType = 'obfuscated float';
                                } else {
                                    _recoveredType = 'obfuscated integer';
                                }

                            } else
                            if( thisIsOurType( TYPE_BOOLEAN ) ) {
                                _recoveredType = 'obfuscated boolean';

                            } else
                            if( thisIsOurType( TYPE_OBJECT  ) ) {
                                _recoveredType = 'obfuscated object';
                        
                            // nope...
                            } else {
                                _recoveredType = 'presumed string';
                            }
                        }
                    }
                }

                return _recoveredType;
            }

            // boolean test whether key exists
            , _haskey = function( key ) {
                return _readLocalStorage( key ) !== null ? true : false;
            }

            // boolean test whether value exists
            , _hasval = function( value ) {
                let _val = JSON.stringify( value, _JSONstringer )
                    , _test   = ''
                    , _key    = ''
                    , _return = false
                    , _len    = localStorage.length
                ;

                // loop through all localStorage keys and only check the ones prefixed for this instance
                for( let i = _len; i--; ) {
                    _key = localStorage.key( i );

                    if( _key.includes( _getKeyPrefix() ) ) {
                        _test = JSON.stringify( _get( _key ), _JSONstringer );
                        if( _val === _test ) {
                            _return = true;
                            break;
                        }
                    }
                }

                return _return;
            }

            // boolean check
            // determine if _text safely compresses, if it compresses to a smaller size, and
            // whether the smaller size (plus the marker) is worth the OP
            // the marker flag (like the others) is 2 bytes (stored as 4 bytes)
            , _isCrunchable = function( _text ) {
                let _crunchable   = false
                    , _withinSize = false
                    , _margin     = 4
                    , _compTxt    = _SMAZ.compress( _text )
                    , _decompTxt  = _SMAZ.decompress( _compTxt )
                 ;

                _crunchable = ( ( _text === _decompTxt ) ? true : false );
                _withinSize = ( _getByteCount( _compTxt ) + _margin < _getByteCount( _text ) ? true : false );

                if( _crunchable && _withinSize ) {
                    return true;
                } else {
                    return false;
                }
            }

            // handles parsing bigint
            , _JSONparser = function( name, val ) {
                if( 'string' === typeof val ) {
                    if(
                        val.substr( -1, 1 ) === '`'
                        &&
                        val.substr( -2, 1 ) === 'n'
                        &&
                        parseInt( val, 10 ) === +( val.substring( 0, val.length - 2 ) ) 
                    ){
                        return BigInt( val.substring( 0, val.length - 2 ) );    
                    } else {
                        return val;
                    }
        
                } else {
                    return val;
                }
            }

            // handles stringifying bigint
            , _JSONstringer = function( name, val ) {
                if( 'bigint' === typeof val ) {
                    return val.toString() + 'n`';
                } else {
                    return val;
                }
            }

            // get total bytes of the specified prefixed keyname (not its value), or
            // total bytes of all prefixed keys if no key specified
            , _keyBytes = function( key ) {
                let _ourKeys     = _getAllKeysThisInstance() 
                    , allStrings = _ourKeys.join( '' )
                    , size       = 0 
                ;
                
                // check all keys
                if( 'undefined' === typeof key ) {
                    size = _getByteCount( allStrings );

                // check specified (prefixed) key
                } else {                        

                    if( _haskey( key ) ) {
                        size = _getByteCount( key );
                    } 
                }                    
                
                // each character is stored in UC2/UTF16 format (2 bytes storage per each byte of data)
                size *= 2;
                
                return size;
            }
            
            // Park Miller Lehmer LCG oneliner
            // https://gist.github.com/blixt/f17b47c62508be59987b?permalink_comment_id=2682175#gistcomment-2682175
            , _lcg=s=>()=>(2**31-1&(s=Math.imul(48271,s)))/2**31

            // Baagøe's fast hashing function
            , _Mash = function() {
                var r = 4022871197;
                return function(n) {
                    n = n.toString();
                    for (var t = 0, a = n.length; t < a; t++) {
                        r += n.charCodeAt(t);
                        var e = .02519603282416938 * r;
                        r = e >>> 0, e -= r, e *= r, r = e >>> 0, e -= r, r += 4294967296 * e;
                    }
                    return 2.3283064365386963e-10 * (r >>> 0);
                };
            }

            /*
            Mulberry32 (oneliner). Minimalistic generator utilizing a 32-bit state, originally intended for embedded applications.
            It appears to be very good; the author states it passes all tests of gjrand, and this JavaScript implementation
            is very fast. But since the state is 32-bit like Xorshift, it's period (how long the random sequence lasts before
            repeating) is significantly less than those with 128-bit states, but it's still quite large, at around 4 billion.
            see https://github.com/bryc/code/blob/master/jshash/PRNGs.md
            */
            , _mb32=a=>(t)=>(a=a+1831565813|0,t=Math.imul(a^a>>>15,1|a),t=t+Math.imul(t^t>>>7,61|t)^t,(t^t>>>14)>>>0)/2**32

            // a natural sort
            // https://stackoverflow.com/questions/14599321/javascript-natural-sort/71621852#71621852
            , _naturalSort = function( _array ) {
                return _array.sort( ( a, b ) => ( ( a + '' ).substr( 0, 1 ) === '$' 
                    ? ( a + '' ).substr( 1, ( a + '' ).length ) 
                    : ( a + '' ) ).localeCompare( b, 'en', { ignorePunctuation: true, numeric: true, sensitivity: 'base' } ) )
                ;
            }

            // basic read from localStorage
            , _readLocalStorage = function( key ) {
                try {
                    var value = localStorage.getItem( key );
                }
                catch( exception ) {
                    throw new Error( ERROR_21 );
                }

                return value;
            }

            , _reverse = function( _string ) {
                return Array.from( _string ).reverse().join( '' );
            }

            // create a custom event to be triggered on key name, key value or key type changes
            , _sendLocalDataStorageEvent = function( _msg, _methodName, _oldKey, _newKey, _oldValue, _newValue, _oldType, _newType, _prefix ) {
                let _timestamp = new Date() 
                    , event = new CustomEvent(
                        "localDataStorage"
                        , {
                            'detail' : 
                                {
                                    'message'     : _msg
                                    , 'method'    : _methodName
                                    , 'oldkey'    : _oldKey
                                    , 'newkey'    : _newKey
                                    , 'oldval'    : _oldType === 'bigint' ? _oldValue : JSON.stringify( _oldValue, _JSONstringer )
                                    , 'newval'    : _newType === 'bigint' ? _newValue : JSON.stringify( _newValue, _JSONstringer )
                                    , 'oldtype'   : _oldType
                                    , 'newtype'   : _newType
                                    , 'prefix'    : _prefix
                                    , 'timestamp' : +_timestamp
                                    , 'date'      : _timestamp
                                }
                            , bubbles    : false
                            , cancelable : true
                        }
                    )
                ;

                document.dispatchEvent( event );
            }

            , _setVerbosity = function( value ) {
                _weAreVerbose = value;
            }

            // returns an array of duplicate values (not key names), if any
            , _showDupes = function() {
                let dupes = new Array()
                    , inc = 0
                    , temp
                    , _key
                    , _len = localStorage.length
                ;

                // loop through all localStorage keys and copy the ones prefixed for this instance
                for( let i = _len; i--; ) {
                    _key = localStorage.key( i );

                    if( _key.includes( _getKeyPrefix() ) ) {
                        dupes[ inc++ ] = _readLocalStorage( _key );
                    }
                }

                // check prefixed keys for duplicate values
                temp = _getStrictDuplicates( dupes );

                return ( temp.length === 0 ? [] : temp );
            }
            
            // shuffle a string (almost cryptographically strong when combined with XOR)
            // this is not a pure shuffle
            // this adds "noise" to the shuffled string consisting of random graphemes selected from existing ones in the _string
            , _shuffleString = function( _string, _keySeed, _keyName ) { 
                //return _string;

                let _temp    = _xmur3a( _keyName )  // get a reference to the hash function seeded with our keyname
                    , prng2  = _mb32( _temp() )     // to provide entropy, reseed the RNG each time it is called
                    
                    , _add   = _string
                    , _adder = ''
                    , _added = ''

                    , hasher = 
                        _getNumberFromObject( _keySeed )[ 0 ] + 
                        _getNumberFromObject( _keyName )[ 0 ]
                    , hashed = ( _foldFPHash( hasher ) + '' )
                    , hashor = _reverse( hashed )
                    , hashee = Number( hashor )
                    , hashey = '' + hashee + hasher
                    , prng1  = _aleaPRNG( hashey, hashed, hashor )

                    , ivprep = 
                        Number( ( hashee + '' ).charAt( 2 ) ) + 
                        Number( ( hashee + '' ).charAt( 1 ) ) + 
                        Number( ( hashee + '' ).charAt( 0 ) )  
                    , ivrounds = 
                        _getCodePointCount( _getNumberFromObject( _keyName )[ 1 ] ) + 
                        _getCodePointCount( _getNumberFromObject( _keySeed )[ 1 ] ) + 
                        ivprep

                    // this logic is only needed to shuffle (not to unshuffle)
                    , _temper  = JSON.stringify( _keySeed, _JSONstringer )
                    , _tempest = _xmur3a( _temper )
                    , prng3    = _lcg( _tempest() )

                    // unseeded (monte carlo)
                    , prng4    = _aleaPRNG()
                ;
                const _getRandomInt = function( min, max ) {
                        return Math.floor( prng3() * ( max - min + 1 ) ) + min;
                    }
                    , _getRandumInt = function( min, max ) {
                        return Math.floor( prng4() * ( max - min + 1 ) ) + min;
                    }
                    , _noise = function( _string ) {
                        const rounds = function() { 
                                return _getRandumInt( 1, _string.length ); 
                            }
                            , adjust = function() { 
                                return prng4.range( 2, 20 ); 
                            }
                            , idx    = function() { 
                                return _getRandumInt( 0, _string.length - 1 ); 
                            } 
                        ;
                        let  output = ''
                            , runs = rounds()
                            , xtra = runs < 4 
                                ? runs + prng4.range( 3, 6 ) 
                                : runs
                        ;

                        for( let i = xtra; i--; ) {
                            output += String.fromCodePoint( _string.codePointAt( idx() ) + adjust() );
                        }

                        return output;
                    }
                ;


                // clock the generators
                for( let i = ivrounds; i--; ) {
                    if( prng1() < .75 ) {
                        prng2();
                    }

                    // this logic clocks prng3 off of prng2 and while prng3 is only needed to shuffle,
                    // not to unshuffle, we still have to do the extra clocking of prng2 in the unshuffle
                    if( prng2() > .75 ) {
                        prng3();
                    }
                }


                // shuffle the individual words (if there are any)
                if( prng2() > .5 ) {
                    _adder = _string.split( ' ' );
                  
                    for( let i = 0; i < _adder.length; i++ ) {
                        _added = _adder[ i ];
                        
                        if( _added.length > 2 ) {
                            _added = _added.split( '' );
                            _fisherYatesDurstenfeldKnuthShuffle( _added, prng2 );
                            _added = _added.join( '' );
                        }

                        _adder[ i ] = _added;
                    }

                    _string = _adder.join( ' ' );
                }

                // add a marker flag and then the "noise" (composed of a subset of the same graphemes as the data)
                // once shuffled, the data and noise are indistinguishable 
                _string += SHUFFLE_MARKER + _noise( _add );

                // shuffle the string
                _string = _string.split( '' );
                _fisherYatesDurstenfeldKnuthShuffle( _string, prng1 );
                _string = _string.join( '' );

                return _string;
            }


            // 7-bit ASCII text de/compressor
            , _SMAZ = function() {
                function e() {}
                    return e.codebook = {
                        " ": 0,"the": 1,"e": 2,"t": 3,"a": 4,"of": 5,"o": 6,"and": 7,"i": 8,"n": 9,"s": 10,"e ": 11,"r": 12," th": 13," t": 14,"in": 15,"he": 16,"th": 17,"h": 18,"he ": 19,"to": 20,"\r\n": 21,"l": 22,"s ": 23,"d": 24," a": 25,"an": 26,"er": 27,"c": 28," o": 29,"d ": 30,"on": 31," of": 32,"re": 33,"of ": 34,"t ": 35,", ": 36,"is": 37,"u": 38,"at": 39,"   ": 40,"n ": 41,"or": 42,"which": 43,"f": 44,"m": 45,"as": 46,"it": 47,"that": 48,"\n": 49,"was": 50,"en": 51,"  ": 52," w": 53,"es": 54," an": 55," i": 56,"\r": 57,"f ": 58,"g": 59,"p": 60,"nd": 61," s": 62,"nd ": 63,"ed ": 64,"w": 65,"ed": 66,"http://": 67,"for": 68,"te": 69,"ing": 70,"y ": 71,"The": 72," c": 73,"ti": 74,"r ": 75,"his": 76,"st": 77," in": 78,"ar": 79,"nt": 80,",": 81," to": 82,"y": 83,"ng": 84," h": 85,"with": 86,"le": 87,"al": 88,"to ": 89,"b": 90,"ou": 91,"be": 92,"were": 93," b": 94,"se": 95,"o ": 96,"ent": 97,"ha": 98,"ng ": 99,"their": 100,"\"": 101,"hi": 102,"from": 103," f": 104,"in ": 105,"de": 106,"ion": 107,"me": 108,"v": 109,".": 110,"ve": 111,"all": 112,"re ": 113,"ri": 114,"ro": 115,"is ": 116,"co": 117,"f t": 118,"are": 119,"ea": 120,". ": 121,"her": 122," m": 123,"er ": 124," p": 125,"es ": 126,"by": 127,"they": 128,"di": 129,"ra": 130,"ic": 131,"not": 132,"s,": 133,"d t": 134,"at ": 135,"ce": 136,"la": 137,"h ": 138,"ne": 139,"as ": 140,"tio": 141,"on ": 142,"n t": 143,"io": 144,"we": 145," a ": 146,"om": 147,", a": 148,"s o": 149,"ur": 150,"li": 151,"ll": 152,"ch": 153,"had": 154,"this": 155,"e t": 156,"g ": 157,"e\r\n": 158," wh": 159,"ere": 160," co": 161,"e o": 162,"a ": 163,"us": 164," d": 165,"ss": 166,"\n\r\n": 167,"\r\n\r": 168,"=\"": 169," be": 170," e": 171,"s a": 172,"ma": 173,"one": 174,"t t": 175,"or ": 176,"but": 177,"el": 178,"so": 179,"l ": 180,"e s": 181,"s,": 182,"no": 183,"ter": 184," wa": 185,"iv": 186,"ho": 187,"e a": 188," r": 189,"hat": 190,"s t": 191,"ns": 192,"ch ": 193,"wh": 194,"tr": 195,"ut": 196,"/": 197,"have": 198,"ly ": 199,"ta": 200," ha": 201," on": 202,"tha": 203,"-": 204," l": 205,"ati": 206,"en ": 207,"pe": 208," re": 209,"there": 210,"ass": 211,"si": 212," fo": 213,"wa": 214,"ec": 215,"our": 216,"who": 217,"its": 218,"z": 219,"fo": 220,"rs": 221,">": 222,"ot": 223,"un": 224,"<": 225,"im": 226,"th ": 227,"nc": 228,"ate": 229,"><": 230,"ver": 231,"ad": 232," we": 233,"ly": 234,"ee": 235," n": 236,"id": 237," cl": 238,"ac": 239,"il": 240,"</": 241,"rt": 242," wi": 243,"div": 244,"e, ": 245," it": 246,"whi": 247," ma": 248,"ge": 249,"x": 250,"e c": 251,"men": 252,".com": 253
                }, e.reverse_codebook = [ " ", "the", "e", "t", "a", "of", "o", "and", "i", "n", "s", "e ", "r", " th", " t", "in", "he", "th", "h", "he ", "to", "\r\n", "l", "s ", "d", " a", "an", "er", "c", " o", "d ", "on", " of", "re", "of ", "t ", ", ", "is", "u", "at", "   ", "n ", "or", "which", "f", "m", "as", "it", "that", "\n", "was", "en", "  ", " w", "es", " an", " i", "\r", "f ", "g", "p", "nd", " s", "nd ", "ed ", "w", "ed", "http://", "for", "te", "ing", "y ", "The", " c", "ti", "r ", "his", "st", " in", "ar", "nt", ",", " to", "y", "ng", " h", "with", "le", "al", "to ", "b", "ou", "be", "were", " b", "se", "o ", "ent", "ha", "ng ", "their", '"', "hi", "from", " f", "in ", "de", "ion", "me", "v", ".", "ve", "all", "re ", "ri", "ro", "is ", "co", "f t", "are", "ea", ". ", "her", " m", "er ", " p", "es ", "by", "they", "di", "ra", "ic", "not", "s, ", "d t", "at ", "ce", "la", "h ", "ne", "as ", "tio", "on ", "n t", "io", "we", " a ", "om", ", a", "s o", "ur", "li", "ll", "ch", "had", "this", "e t", "g ", "e\r\n", " wh", "ere", " co", "e o", "a ", "us", " d", "ss", "\n\r\n", "\r\n\r", '="', " be", " e", "s a", "ma", "one", "t t", "or ", "but", "el", "so", "l ", "e s", "s,", "no", "ter", " wa", "iv", "ho", "e a", " r", "hat", "s t", "ns", "ch ", "wh", "tr", "ut", "/", "have", "ly ", "ta", " ha", " on", "tha", "-", " l", "ati", "en ", "pe", " re", "there", "ass", "si", " fo", "wa", "ec", "our", "who", "its", "z", "fo", "rs", ">", "ot", "un", "<", "im", "th ", "nc", "ate", "><", "ver", "ad", " we", "ly", "ee", " n", "id", " cl", "ac", "il", "</", "rt", " wi", "div", "e, ", " it", "whi", " ma", "ge", "x", "e c", "men", ".com" ], 
                e.flush_verbatim = function(e) {
                    var t, o, r, n;
                    for (o = [], e.length > 1 ? (o.push(String.fromCharCode(255)), o.push(String.fromCharCode(e.length - 1))) : o.push(String.fromCharCode(254)), 
                    r = 0, n = e.length; r < n; r++) t = e[r], o.push(t);
                    return o;
                }, e.compress = function(t) {
                    var o, r, n, h, a, i, s;
                    for (i = "", a = [], n = 0; n < t.length; ) {
                        for (r = !1, h = 7, t.length - n < 7 && (h = t.length - n), h = s = h; h <= 0 ? s < 0 : s > 0; h = h <= 0 ? ++s : --s) if (null != (o = e.codebook[t.substr(n, h)])) {
                            i && (a = a.concat(e.flush_verbatim(i)), i = ""), a.push(String.fromCharCode(o)), 
                            n += h, r = !0;
                            break;
                        }
                        r || (i += t[n], n++, 256 === i.length && (a = a.concat(e.flush_verbatim(i)), i = ""));
                    }
                    return i && (a = a.concat(e.flush_verbatim(i))), a.join("");
                }, e.decompress = function(t) {
                    var o, r, n, h, a, i;
                    for (h = "", r = function() {
                        var e, r, n;
                        for (n = [], o = e = 0, r = t.length; 0 <= r ? e < r : e > r; o = 0 <= r ? ++e : --e) n.push(t.charCodeAt(o));
                        return n;
                    }(), o = 0; o < r.length; ) if (254 === r[o]) {
                        if (o + 1 > r.length) throw "Malformed SMAZ";
                        h += t[o + 1], o += 2;
                    } else if (255 === r[o]) {
                        if (o + r[o + 1] + 2 >= r.length) throw "Malformed SMAZ";
                        for (n = a = 0, i = r[o + 1] + 1; 0 <= i ? a < i : a > i; n = 0 <= i ? ++a : --a) h += t[o + 2 + n];
                        o += 3 + r[o + 1];
                    } else h += e.reverse_codebook[r[o]], o++;
                    return h;
                }, e;
            }()


            // remove _prefix, and return just the key
            , _stripPrefix = function ( _key ) {
                return _key.slice( _getKeyPrefix().length, _key.length );
            }

            // helper function called by _getCodePointCount
            , __ucs2decode = function( t ) {
                for( var r, n, e = [], o = 0, u = t.length; u > o; ) r = t.charCodeAt(o++), r >= 55296 && 56319 >= r && u > o ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? e.push(((1023 & r) << 10) + (1023 & n) + 65536) : (e.push(r), o--)) : e.push(r);
                return e;
            }

            // decompress simple 7-bit ASCII text strings
            , _uncrunch = function( _crunchedText ) {
                return _SMAZ.decompress( _crunchedText );
            }

            // restore a shuffled string
            , _unshuffleString = function( _string, _keySeed, _keyName ) {
                let _temp    = _xmur3a( _keyName )
                    , prng2  = _mb32( _temp() )
                    , _add   = _string

                    , _adder = ''
                    , _added = ''
                    , _indx  = 0

                    , hasher = 
                        _getNumberFromObject( _keySeed )[ 0 ] + 
                        _getNumberFromObject( _keyName )[ 0 ]
                    , hashed = ( _foldFPHash( hasher ) + '' )
                    , hashor = _reverse( hashed )
                    , hashee = Number( hashor )
                    , hashey = '' + hashee + hasher
                    , prng1  = _aleaPRNG( hashey, hashed, hashor )
                    , ivprep = 
                        Number( ( hashee + '' ).charAt( 2 ) ) + 
                        Number( ( hashee + '' ).charAt( 1 ) ) + 
                        Number( ( hashee + '' ).charAt( 0 ) )  
                    , ivrounds = 
                        _getCodePointCount( _getNumberFromObject( _keyName )[ 1 ] ) + 
                        _getCodePointCount( _getNumberFromObject( _keySeed )[ 1 ] ) + 
                        ivprep
                ;
                const noop = function(){}; 

                // clock the generators
                for( let i = ivrounds; i--; ) {
                    if( prng1() < .75 ) {
                        prng2();
                    }

                    // this logic clocks prng3 off of prng2 and while prng3 is only needed to shuffle,
                    // not to unshuffle, we still have to do the extra clocking of prng2 in the unshuffle
                    if( prng2() < .25 ) {
                        noop();
                    }
                }


                // unshuffle the string
                _string = _string.split( '' );
                _string = _fisherYatesDurstenfeldKnuthUnshuffle( _string, prng1 );
                _string = _string.join( '' );
                
                // locate the marker flag and remove everything after it
                _indx = _string.indexOf( SHUFFLE_MARKER );
                _string = _string.substr( 0, _indx );


                // unshuffle the individual words
                if( prng2() > .5 ) {
                    _adder = _string.split( ' ' );
                  
                    for( let i = 0; i < _adder.length; i++ ) {

                        _added = _adder[ i ];
                        
                        if( _added.length > 2 ) {
                            _added = _added.split( '' );
                            _added = _fisherYatesDurstenfeldKnuthUnshuffle( _added, prng2 );
                            _added = _added.join( '' );
                        }

                        _adder[ i ] = _added;
                    }

                    _string = _adder.join( ' ' );
                }

                return _string;
            }

            // get total bytes of the specified (prefixed) key's value, or
            // total bytes of all prefixed key values if no key specified
            , _valBytes = function( key ) {
                let allStrings = ''
                    , size     = 0
                    , _keyval  = '' 
                    , _key     = ''
                    , _prefix  = _getKeyPrefix()
                    , _len     = localStorage.length
                ;
                
                // check all keys
                if( 'undefined' === typeof key ) {

                    for( let i = _len; i--; ) {
                        _key = localStorage.key( i );
                        _key = _key.replace( _prefix, '' );
                        _key = _prefix + _key;  

                        if( _haskey( _key ) ) {
                            
                            // booleans are stored using 1 byte
                            if( _getTypeOfKey( _key ) === 'boolean' ) {
                               allStrings += "/";
                            } else {
                               allStrings += _get( _key );
                            }
                        }
                    }
            
                    size = _getByteCount( allStrings );
                
                // check specified key
                } else {                        

                    if( _haskey( key ) ) {
                        
                        // booleans are stored using 1 byte
                        if( _getTypeOfKey( key ) === 'boolean' ) {
                            size = 1;
                        } else {
                            size = _getByteCount( _get( key ) );
                        }
                    }
                }                    
                
                size *= 2;
                
                return size;
            }

            // get all bytes of the specified key's value (including embedded flags), or 
            // total bytes of all key values if no key specified
            // reads direct from localStorage
            , _valBytesAll = function( key ) {
                let allStrings = ''
                    , size     = 0 
                    , _key     = ''
                    , _prefix  = _getKeyPrefix()
                    , _len     = localStorage.length
                ;
                
                // check for all keys
                if( 'undefined' === typeof key ) {

                    for( let i = _len; i--; ) {
                        _key = localStorage.key( i );
                        _key = _key.replace( _prefix, '' );
                        _key = _prefix + _key;  

                        if( _haskey( _key ) ) {
                            
                            // booleans are stored using 1 byte
                            if( _getTypeOfKey( _key ) === 'boolean' ) {
                               allStrings += "/";
                            } else {
                               allStrings += _readLocalStorage( _key );
                            }
                        }
                    }
                
                    size = _getByteCount( allStrings );
                
                // check specified key
                } else { 

                    if( _haskey( key ) ) {
                        size = _getByteCount( _readLocalStorage( key ) );
                    }
                }                    
                
                size *= 2;
                
                return size;
            }

            // check if the value's type is supported
            , _valueIsIllegalType = function( value ) {
                let _return = true
                    , _len  = SUPPORTED_TYPES.length
                    , _type = typeof value
                ;

                for( let i = _len; i--; ) {
                    if( _type === SUPPORTED_TYPES[ i ] ) {
                        _return = false;
                        break;
                    }
                }

                return _return;
            }

            // basic write to localStorage
            , _writeLocalStorage = function( key, value ) {
                if( 'undefined' === typeof key   ) { throw new Error( ERROR_11 ); }
                if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }

                try {
                    localStorage.setItem( key, value );
                }
                catch( exception ) {
                    if( exception &&
                        (
                            exception.name === 'QUOTA_EXCEEDED_ERR'         ||
                            exception.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
                            exception.name === 'QuotaExceededError'
                        )
                    ){
                        throw new Error( ERROR_22 );

                    } else {
                        throw new Error( ERROR_23 );
                    }
                }
            }

            // based on murmurhash3 mixing function
            // https://github.com/bryc/code/blob/master/jshash/PRNGs.md
            , _xmur3a = function( str ) {
                for(var k, i = 0, h = 2166136261 >>> 0; i < str.length; i++) {
                    k = Math.imul(str.charCodeAt(i), 3432918353); k = k << 15 | k >>> 17;
                    h ^= Math.imul(k, 461845907); h = h << 13 | h >>> 19;
                    h = Math.imul(h, 5) + 3864292196 | 0;
                }
                h ^= str.length;
                return function() {
                    h ^= h >>> 16; h = Math.imul(h, 2246822507);
                    h ^= h >>> 13; h = Math.imul(h, 3266489909);
                    h ^= h >>> 16;
                    return h >>> 0;
                }
            }

            // XOR _string against a PRNG seeded with _keySeed
            , _xorString = function( _string, _keySeed, _keyName ) {
                let _temper    = JSON.stringify( _keySeed, _JSONstringer )
                    , _tempest = _xmur3a( _temper )
                    , prng3    = _lcg( _tempest() )

                    , _temp  = _xmur3a( _keyName )  // get a reference to the hash function seeded with our keyname
                    , prng2  = _mb32( _temp() )     // to provide entropy, reseed the RNG each time it is called
                 
                    , output = ''
                    , hasher = _getNumberFromObject( _keySeed )[ 0 ]
                    , hashed = ( _foldFPHash( hasher ) + '' )
                    , hashor = _reverse( hashed )
                    , hashee = 
                        Number( hashor )                      + 
                        _getNumberFromObject( _keyName )[ 0 ] +
                        _getNumberFromObject( _keySeed )[ 0 ]
                    , hashim = ( hashee + '' )
                    , hasham = ( hasher + '' )
                    , hashem = ( _tempest() + '' )
                    , prng1 = _aleaPRNG( hashim, hasham, hashem )

                    , ivprep = 
                        hasher + 
                        Number( ( hashee + '' ).charAt( 0 ) ) + 
                        Number( ( hashee + '' ).charAt( 1 ) ) + 
                        Number( ( hashee + '' ).charAt( 2 ) ) + 
                        Number( ( hashed      ).charAt( 0 ) )  
                    , ivrounds = 
                        _getCodePointCount( _getNumberFromObject( _keyName )[ 1 ] ) + 
                        _getCodePointCount( _getNumberFromObject( _keySeed )[ 1 ] ) + 
                        ivprep 
                    , hashes = _Mash()
                    , hashet = _getNumberFromObject( _keySeed )[ 1 ]
                    , keyA =   0
                    , keyB =   0
                    , minA =   0
                    , maxA = 255
                    , minB =   0
                    , maxB =   0
                ;
                const _getRandomInt = function( min, max ) {
                    return Math.floor( prng3() * ( max - min + 1 ) ) + min;
                }

  
                _string += '';

                // clock the generators
                for( let i = 0; i < ivrounds; i++ ) {
                    if( prng1() > .75 ) {
                        prng2();
                    }

                    if( prng2() > .55 ) {
                        prng3();
                    }
                }

                for( let i = 0, l = _string.length; i < l; i++ ) {
                    keyA = Math.floor( prng1()          * ( maxA - minA + 1 ) ) + minA;
                    if( prng2() < .45 ) { keyA += _getRandomInt( 1, 100 ); }

                    minB = keyA;
                    maxB = hasher;
                    keyB = Math.floor( hashes( hashet ) * ( maxB - minB + 1 ) ) + minB;  

                    if( prng1() < prng2() ) {
                        output += String.fromCodePoint( keyA ^ _string.codePointAt( i ) );

                    } else {
                        output += String.fromCodePoint( keyB ^ _string.codePointAt( i ) );
                    }
                }

                return output;
            }
        
            , lds = function() {
                return 'localDataStorage ' + VERSION + ' using ' + ( _prefix === '' ? 'no prefix' : 'prefix ' + _prefix ); 
            }
        ;

        // returns total bytes used by both the key's name and the key's data, in the domain
        // if a key is specified, returns data for that key alone
        // storage requirements for the embedded flags are not considered, just the raw data
        lds.bytes = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            let _temp;

            if( 'undefined' === typeof key ) {
                return _describeSize( _valBytes() + _keyBytes() );
            } else {
                _temp = _describeSize( _valBytes( _getPrefixedKey( key ) ) + _keyBytes( _getPrefixedKey( key ) ) );
                return _temp !== '0 bytes' ? _temp : undefined;    
            }
        }

        // returns total bytes used by both the key's name and the key's data, in the domain
        // if a key is specified, returns data for that key alone
        // storage requirements for the embedded flags are counted
        lds.bytesall = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            let _temp;

            if( 'undefined' === typeof key ) {
                return _describeSize( _valBytesAll() + _keyBytes() );
            } else {
                _temp = _describeSize( _valBytesAll( _getPrefixedKey( key ) ) + _keyBytes( _getPrefixedKey( key ) ) );
                return _temp !== '0 bytes' ? _temp : undefined;    
            }
        }

        // return boolean whether the value can be crunched
        lds.cancrunch = function( value ) {
            if( !_storageIsAvailable ) { return false; }

            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            return _isCrunchable( value );  
        }

        // get key and immediately remove it
        // fails silently returning undefined if key does not exist
        lds.chopget = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            let _oldValue
                , _oldType
            ;

            if( _haskey( _getPrefixedKey( key ) ) ) {
                _oldValue = _getTheKey( key );
                _oldType  = _getTypeOfKey( _getPrefixedKey( key ) );

                localStorage.removeItem( _getPrefixedKey( key ) );

                _sendLocalDataStorageEvent( 'excise key', 'chopget', key, undefined, _oldValue, undefined, _oldType, undefined, _getKeyPrefix() );

                return _oldValue;
            
            } else {
                return undefined;
            }
        }

        // deletes all prefixed keys, in the domain, using the native API
        // does not delete keys created outside this instance
        lds.clear = function() {
            if( !_storageIsAvailable ) { return false; }

            let _keysWhacked = 0
                , _localStorageKey
                , _ourKey
                , _oldValue
                , _oldType
                , _keyPrefix = _getKeyPrefix()
                , _len       = localStorage.length
            ;

            // loop through all localStorage keys and whack the ones prefixed for this instance
            for( let i = _len; i--; ) {
                _localStorageKey = localStorage.key( i );

                if( _localStorageKey.includes( _keyPrefix ) ) {
                    _ourKey = _localStorageKey.replace( _keyPrefix, '' );

                    _oldValue = _getTheKey( _ourKey );
                    _oldType  = _getTypeOfKey( _getPrefixedKey( _ourKey ) );

                    localStorage.removeItem( _localStorageKey );
                    _keysWhacked++;

                    _sendLocalDataStorageEvent( 'remove all keys', 'clear', _ourKey, undefined, _oldValue, undefined, _oldType, undefined, _keyPrefix );
                } 
            }

            return _keysWhacked + ( _keysWhacked === 1 ? ' key' : ' keys' ) + ' removed';
        }

        // checks whether key (which must be of type array) contains value
        // ex. string search for value 'english' in education key [ 'math', 'english', 'science' ]
        // ex. object search for value {'book':'math'} in education key [ {'book':'math'}, {'book':'english'}, {'book':'science'} ]
        lds.contains = function( key, value ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key   ) { throw new Error( ERROR_11 ); }
            if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }


            if( !_haskey( _getPrefixedKey( key ) ) ) { return undefined; }

            if( 'array' !== _getTypeOfKey( _getPrefixedKey( key ) ) ) { throw new Error( ERROR_16 ); }

            let _return = false
                , _value = _getTheKey( key )
            ;

            for( let i = 0; i < _value.length; i++ ) {
                if( JSON.stringify( _value[ i ], _JSONstringer ) === JSON.stringify( value, _JSONstringer ) ) {
                    _return = true;
                    break;
                }
            }

            return _return;
        }

        // returns a count of duplicate key values, if any
        lds.countdupes = function() {
            if( !_storageIsAvailable ) { return false; }

            return _showDupes().length;
        }

        // returns compressed text
        lds.crunch = function( _text ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'symbol' === typeof _text ) { throw new Error( ERROR_13 ); }

            return _crunch( _text );
        }

        // boolean test whether value exists as native localStorage string
        lds.forcehasval = function( value ) {
            if( !_storageIsAvailable ) { return false; }

            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            let _return = false
                , _len = localStorage.length
            ;


            for( let i = _len; i--; ) {
                if( value == _readLocalStorage( localStorage.key( i ) ) ) { _return = true; }
            }

            return _return;
        } 

        // get the key, but neither perform type checking nor attempt to restore data type based on composition
        lds.forceget = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return _readLocalStorage( _getPrefixedKey( key ) );
        }

        // set the key, but neither perform type checking nor embed flags based on composition 
        lds.forceset = function( key, value ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key   ) { throw new Error( ERROR_11 ); }
            if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            let _incomingValueType = _getTypeOf( value ) //_getTypeOfKey( 'anyKeyName', value )
                , _oldValue        = _getTheKey( key )
                , _oldType         = _getTypeOfKey( _getPrefixedKey( key ) )
                , _oldValueTest    = _oldType === 'bigint' ? _oldValue : JSON.stringify( _oldValue, _JSONstringer )
                , _newValue        = _incomingValueType === 'bigint' ? value + 'n' : value + ''
                , _newType         = 'string' // always string
                , _newValueTest    = _newType === 'bigint' ? _newValue : JSON.stringify( _newValue, _JSONstringer )

            ;

            if( _incomingValueType === 'bigint' ) {
                value += 'n';
            } else {
                value += '';
            }
            _writeLocalStorage( _getPrefixedKey( key ), value );

            if( _oldValueTest !== _newValueTest || _oldType !== _newType ) {
                if( 'undefined' === typeof _oldValue ) {
                    _sendLocalDataStorageEvent( 'create new key',   'forceset', undefined, key, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
                } else {
                    _sendLocalDataStorageEvent( 'key value change', 'forceset', key, undefined, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
                }
            }

        }

        // gets value of key, respecting its type if set by this utility;
        // otherwise returns obvious object if it can be deduced, else returns typical localStorage string
        // key is unique
        // fails silently returning undefined if key does not exist
        lds.get = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            return _getTheKey( key );
        }

        // returns the "global" scramble key
        lds.getscramblekey = function() {
            if( !_storageIsAvailable ) { return false; }

            return _scrambleKey;
        }

        // boolean check whether key exists (under this prefix in this domain)
        lds.haskey = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            return _haskey( _getPrefixedKey( key ) );
        }

        // boolean check whether type of value exists (under this prefix in this domain)
        lds.hastype = function( type ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof type ) { throw new Error( ERROR_18 ); }

            if( type.toLowerCase() === "symbol" ) { throw new Error( ERROR_13 ); }

            if( !SUPPORTED_TYPES.includes( type.toLowerCase() ) ) { throw new Error( ERROR_17 ); }

            type = type.toLowerCase();

            let _tempType   = ''
                , _tempKeys = _getAllKeysThisInstance()
                , _len      = _tempKeys.length
                , _key
                , _found    = false
            ;

            for( let i = _len; i--; ) {
                _key = _tempKeys[ i ];
                _tempType = _getTypeOfKey( _key );
                
                if(
                    ( type === "number"  && ( _tempType === "float" || _tempType === "integer" ) )
                    ||
                    ( type !== "number"  &&   _tempType === type )
                ){

                    _found = true;
                    break;
                }
            }

            return _found;
        }

        // boolean check whether value exists (under this prefix in this domain)
        lds.hasval = function( value ) {
            if( !_storageIsAvailable ) { return false; }

            return _hasval( value );
        }

        // boolean helper functions...
        lds.isarray = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return ( 'array' === _getTypeOfKey( _getPrefixedKey( key ) ) ); 
        }
        lds.isbigint = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return ( 'bigint' === _getTypeOfKey( _getPrefixedKey( key ) ) ); 
        }
        lds.isboolean = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return ( 'boolean' === _getTypeOfKey( _getPrefixedKey( key ) ) ); 
        }
        lds.iscrunch = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return ( 'compressed string' === _getTypeOfKey( _getPrefixedKey( key ) ) ); 
        }
        lds.isdate = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return ( 'date' === _getTypeOfKey( _getPrefixedKey( key ) ) ); 
        }
        lds.isfloat = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return ( 'float' === _getTypeOfKey( _getPrefixedKey( key ) ) ); 
        }
        lds.isinteger = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return ( 'integer' === _getTypeOfKey( _getPrefixedKey( key ) ) ); 
        }
        lds.isnull = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return ( 'null' === _getTypeOfKey( _getPrefixedKey( key ) ) ); 
        }
        lds.isnumber = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return (
                'float'   === _getTypeOfKey( _getPrefixedKey( key ) )
                ||
                'integer' === _getTypeOfKey( _getPrefixedKey( key ) )
            ); 
        }
        lds.isobject = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return ( 'object' === _getTypeOfKey( _getPrefixedKey( key ) ) ); 
        }
        lds.isstring = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            return (
                'string'            === _getTypeOfKey( _getPrefixedKey( key ) ) 
                ||
                'compressed string' === _getTypeOfKey( _getPrefixedKey( key ) )
            ); 
        }

        // returns the key at the index position (from a sorted list of keys under this prefix in this domain)
        lds.key = function( index ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof index ) { throw new Error( ERROR_24 ); }

            if( index !== Number( index )    ) { throw new Error( ERROR_25 ); }
            if( index < 0 ) {                    throw new Error( ERROR_25 ); }

            let _ourKeys = _getAllKeysThisInstance()
                , _tally = _ourKeys.length
            ;

            _naturalSort( _ourKeys );

            if( index <= _tally ) {
                return _ourKeys[ index ];
            } else {
                return undefined;
            }
        }

        // returns either
        // a) total bytes of the specified key name (not its value), or
        // b) total bytes of all keys if no key specified
        lds.keybytes = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            let _temp;

            if( 'undefined' === typeof key ) {
                return _describeSize( _keyBytes() );
            } else {
                _temp = _describeSize( _keyBytes( _getPrefixedKey( key ) ) );
                return _temp !== '0 bytes' ? _temp : undefined;    
            }
        }

        // returns the count of keys (under this prefix in this domain)
        lds.keys = function() {
            if( !_storageIsAvailable ) { return false; }

            return _getAllKeysThisInstance().length;
        }
        
        // get an object showing duplicate values, their keys, and counts 
        lds.listdupes = function( weShouldSortThis = true ) {
            if( !_storageIsAvailable ) { return false; }

            let _object = _getDuplicates( weShouldSortThis );

            if( _object.dupecount !== 0 ) { return _object; }

            return undefined;
        }

        // key must be of type array
        // pushes value into key at index position (default is end of key), overwriting value at index
        // destructive insert
        lds.poke = function( key, value, index ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key   ) { throw new Error( ERROR_11 ); }
            if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            if( !_haskey( _getPrefixedKey( key ) ) ) { throw new Error( ERROR_15 ); }

            if( 'array' !== _getTypeOfKey( _getPrefixedKey( key ) ) ) { throw new Error( ERROR_16 ); }

            let _value      = _getTheKey( key )
                , _count    = _value.length
                , _endIndex = _count + 1
                , _label    = ''
            ;

            // set bounds if we can
            ///////////////////////
            if( 'undefined' === typeof index ) {
                index = _endIndex;

            } else
            if( 'string' === typeof index ) {
                if( index.toLowerCase() === 'start' ) {
                    index = 0;
                
                } else
                if( index.toLowerCase() === 'end' ) {
                    index = _endIndex;
                
                } else {
                    throw new Error( ERROR_26 ); 
                }

            } else
            if( 'number' === typeof index ) {
                if( index < 1 ) {
                    index = 0; 

                } else
                if( index > _count ) { 
                    index = _endIndex 

                } else 
                if( index > 0 && index < _endIndex ) {
                    // noop
                
                } else {
                    throw new Error( ERROR_27 ); 
                }

            } else {
                throw new Error( ERROR_28 ); 
            }
            ///////////////////////


            // default
            if( index === _endIndex ) {
                _value.push( value );
                _label = 'append'
            
            } else
            if( 0 === index ) {
                _value.unshift( value );
                _label = 'prepend'
            
            } else {
                _value.splice( index - 1, 1, value );
                _label = 'replace'
            }

            _label += ' value';

            let _oldValue   = _getTheKey( key )
                , _oldType  = _getTypeOfKey( _getPrefixedKey( key ) )
                , _oldValueTest = _oldType === 'bigint' ? _oldValue : JSON.stringify( _oldValue, _JSONstringer )
                , _newValue
                , _newType  = _convertToString( value )[ 1 ]
                , _newValueTest = _newType === 'bigint' ? _newValue : JSON.stringify( _newValue, _JSONstringer )
            ;

            _value = _convertToString( _value )[ 0 ];
            _writeLocalStorage( _getPrefixedKey( key ), _value );

            _newValue = _getTheKey( key );

            // trigger our "localDataStorage" event with some data, only if a new key was created or an existing key was changed
            if( _oldValueTest !== _newValueTest || _oldType !== _newType ) {
                _sendLocalDataStorageEvent( _label, 'poke', key, undefined, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
            }
        }


        // key must be of type array
        // pulls value out of key at valindex position (default is end of key)
        // by default, when valindex is an integer it is presumed to be an index reference into the array, 
        // but when valIndexIsLiteral is TRUE then valIndex is treated as a
        // value to be searched for in the array
        // destructive delete
        lds.pull = function( key, valindex, valIndexIsLiteral = false ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }

            if( !_haskey( _getPrefixedKey( key ) ) ) { return undefined; }

            if( 'array' !== _getTypeOfKey( _getPrefixedKey( key ) ) ) { throw new Error( ERROR_16 ); }

            let _value                 = _getTheKey( key )
                , _count               = _value.length
                , _endIndex            = _count + 1
                , _label               = ''
                , _valueFound          = 0
                , valIndexIsNotLiteral = !valIndexIsLiteral
            ;

            // set bounds if we can
            ///////////////////////
            if( 'undefined' === typeof valindex ) {
                valindex = _endIndex;

            } else
            if( 'string' === typeof valindex ) {
                if( valindex.toLowerCase() === 'start' ) {
                    valindex = 0;
                
                } else
                if( valindex.toLowerCase() === 'end' ) {
                    valindex = _endIndex;

                } else 
                if( valindex !== '' ) {
                    // noop
                
                } else {
                    throw new Error( ERROR_26 ); 
                }

            } else
            if( 'number' === typeof valindex ) {

                if( valIndexIsNotLiteral ) {
                   if( valindex < 2 ) {
                        valindex = 0; 

                    } else
                    if( valindex > _count ) { 
                        valindex = _endIndex 

                    } else 
                    if( valindex > 0 && valindex < _endIndex ) {
                        // noop
                    
                    } else {
                        throw new Error( ERROR_27 ); 
                    }

                } 

            } else 
            if( 'bigint' === typeof valindex ) {
                // noop

            } else
            if( 'number'  === typeof valindex ) {
                // noop

            } else
            if( 'boolean' === typeof valindex ) {
                // noop

            } else
            if( 'object'  === typeof valindex ) {
                // noop

            } else {
                throw new Error( ERROR_28 ); 
            }
            ///////////////////////


            if( valIndexIsNotLiteral && valindex === _endIndex ) {
                _value.pop();
                _label = 'from end';
            
            } else
            if( valIndexIsNotLiteral && 0 === valindex ) {
                _value.shift();
                _label = 'from start';
            
            } else
            if( valIndexIsNotLiteral && 'number' === typeof valindex ) {
                _value.splice( valindex - 1, 1 );
                _label = 'from contents';
            
            } else {
                for( let i = 0; i < _value.length; i++ ) {
                    if( JSON.stringify( _value[ i ], _JSONstringer ) === JSON.stringify( valindex, _JSONstringer ) ) {
                        _valueFound = i + 1;
                        break;
                    }
                }

                if( _valueFound ) {
                    _value.splice( _valueFound - 1, 1 );
                } else {
                    return undefined;
                }

                _label = 'from contents'
            }

            let _oldValue       = _getTheKey( key )
                , _oldType      = _getTypeOfKey( _getPrefixedKey( key ) )
                , _oldValueTest = _oldType === 'bigint' ? _oldValue : JSON.stringify( _oldValue, _JSONstringer )
                , _newValue
                , _newType      = undefined //_convertToString( value )[ 1 ]
                , _newValueTest = _newType === 'bigint' ? _newValue : JSON.stringify( _newValue, _JSONstringer )
            ;

            _value = _convertToString( _value )[ 0 ];
            _writeLocalStorage( _getPrefixedKey( key ), _value );

            _newValue = _getTheKey( key );

            if( _oldValueTest !== _newValueTest || _oldType !== _newType ) {
                if( JSON.stringify( _oldValue, _JSONstringer ) !== JSON.stringify( _newValue, _JSONstringer ) ) {
                    _sendLocalDataStorageEvent( 'remove value ' + _label, 'pull', key, undefined, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
                }
            }
        }


        // key must be of type array
        // pulls every occurrence of value out of key
        // destructive delete
        lds.pullall = function( key, arrayItem ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key       ) { throw new Error( ERROR_11 ); }
            if( 'undefined' === typeof arrayItem ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( arrayItem ) ) { throw new Error( ERROR_13 ); }

            if( !_haskey( _getPrefixedKey( key ) ) ) { return undefined; }

            if( 'array' !== _getTypeOfKey( _getPrefixedKey( key ) ) ) { throw new Error( ERROR_16 ); }

            let _value = _getTheKey( key );

            const removeItem = function( array, item ) {
                    let i = array.length;

                    while( i-- ) {
                        if( array[ i ] === item ) {
                            array.splice( array.indexOf( item ), 1 );
                        }
                    }
                }
            ;

            removeItem( _value, arrayItem );

            let _oldValue       = _getTheKey( key )
                , _oldType      = _getTypeOfKey( _getPrefixedKey( key ) )
                , _oldValueTest = _oldType === 'bigint' ? _oldValue : JSON.stringify( _oldValue, _JSONstringer )
                , _newValue
                , _newType      = undefined //_convertToString( value )[ 1 ]
                , _newValueTest = _newType === 'bigint' ? _newValue : JSON.stringify( _newValue, _JSONstringer )
            ;

            _value = _convertToString( _value )[ 0 ];
            _writeLocalStorage( _getPrefixedKey( key ), _value );

            _newValue = _getTheKey( key );

            if( _oldValueTest !== _newValueTest || _oldType !== _newType ) {
                if( JSON.stringify( _oldValue, _JSONstringer ) !== JSON.stringify( _newValue, _JSONstringer ) ) {
                    _sendLocalDataStorageEvent( 'remove all values from contents', 'pullall', key, undefined, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
                }
            }
        }


        // key must be of type array
        // pushes value into key at index position (default is end of key)
        // if key does not exist, creates new key of type array with data
        // non-destructive insert
        lds.push = function( key, value, index ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key   ) { throw new Error( ERROR_11 ); }
            if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            //if( !_haskey( _getPrefixedKey( key ) ) ) { throw new Error( ERROR_15 ); }

            if( _haskey( _getPrefixedKey( key ) ) && 'array' !== _getTypeOfKey( _getPrefixedKey( key ) ) ) { throw new Error( ERROR_16 ); }

            // if key does not exist, create it
            if( !_haskey( _getPrefixedKey( key ) ) ) {

                let inval = new Array()
                    , _vals = arguments.length
                ;

                // more than 1 value
                if( _vals > 2 ) {
                    for( let i = 1; i < _vals; i++ ) {
                        if( _getTypeOf( arguments[ i ] ) === 'array' ) {
                            inval = inval.concat( arguments[ i ] );
                        } else {       
                            inval.push( arguments[ i ] );
                        }
                    }

                    value = inval;

                // only 1 value (check if it's not an array)
                } else
                if( _getTypeOf( value ) !== 'array' ) {

                    for( let i = 1; i < _vals; i++ ) {
                        inval.push( arguments[ i ] );
                    }

                    value = inval;
                }

                let _oldValue   = _getTheKey( key )
                    , _oldType  = _getTypeOfKey( _getPrefixedKey( key ) )
                    , _oldValueTest = _oldType === 'bigint' ? _oldValue : JSON.stringify( _oldValue, _JSONstringer )
                    , _newValue = value
                    , _newType  = _convertToString( value )[ 1 ]
                    , _newValueTest = _newType === 'bigint' ? _newValue : JSON.stringify( _newValue, _JSONstringer )
                ;

                value = _convertToString( value )[ 0 ];
                _writeLocalStorage( _getPrefixedKey( key ), value );

                _sendLocalDataStorageEvent( 'create new key', 'push', undefined, key, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );

            // the key exists
            } else {

                let _value = _getTheKey( key )
                    , _count = _value.length
                    , _endIndex = _count + 1
                    , _label = ''
                ;

                // set bounds if we can
                ///////////////////////
                if( 'undefined' === typeof index ) {
                    index = _endIndex;

                } else
                if( 'string' === typeof index ) {
                    if( index.toLowerCase() === 'start' ) {
                        index = 0;
                    
                    } else
                    if( index.toLowerCase() === 'end' ) {
                        index = _endIndex;
                    
                    } else {
                        throw new Error( ERROR_26 ); 
                    }

                } else
                if( 'number' === typeof index ) {
                    if( index < 2 ) {
                        index = 0; 

                    } else
                    if( index > _count ) { 
                        index = _endIndex 

                    } else 
                    if( index > 0 && index < _endIndex ) {
                        // noop
                    
                    } else {
                        throw new Error( ERROR_27 ); 
                    }

                } else {
                    throw new Error( ERROR_28 ); 
                }
                ///////////////////////


                // default
                if( index === _endIndex ) {
                    _value.push( value );
                    _label = 'append'
                
                } else
                if( 0 === index ) {
                    _value.unshift( value );
                    _label = 'prepend'
                
                } else {
                    _value.splice( index - 1, 0, value );
                    _label = 'insert'
                }

                _label += ' value';


                let _oldValue   = _getTheKey( key )
                    , _oldType  = _getTypeOfKey( _getPrefixedKey( key ) )
                    , _oldValueTest = _oldType === 'bigint' ? _oldValue : JSON.stringify( _oldValue, _JSONstringer )
                    , _newValue
                    , _newType  = _convertToString( value )[ 1 ]
                    , _newValueTest = _newType === 'bigint' ? _newValue : JSON.stringify( _newValue, _JSONstringer )
                ;

                _value = _convertToString( _value )[ 0 ];
                _writeLocalStorage( _getPrefixedKey( key ), _value );

                _newValue = _getTheKey( key );

                if( _oldValueTest !== _newValueTest || _oldType !== _newType ) {
                    _sendLocalDataStorageEvent( _label, 'push', key, undefined, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
                }
            }
        }

        // measure localStorage size
        lds.quota = function() {
            if( !_storageIsAvailable ) { return false; }

            var i = 0
                , _qbytes
            ;
            
            try {
                // Test up to 10 MB
                for( i = 250; i <= 10000; i += 250 ) {
                    localStorage.setItem( STORAGE_TEST, new Array( ( i * 1024 ) + 1 ).join( '~' ) );
                }
            
            // set size in KB
            } catch( e ) {
                localStorage.setItem( STORAGE_TEST + STORAGE_TEST, i - 250 );            
            }

            _qbytes = localStorage.getItem( STORAGE_TEST + STORAGE_TEST );
            _qbytes = parseInt( _qbytes, 10 );
            _qbytes *= 1000;

            localStorage.removeItem( STORAGE_TEST );
            localStorage.removeItem( STORAGE_TEST + STORAGE_TEST );

            return _weAreVerbose
                ? 'Total storage allocated is ' + _describeSize( _qbytes, true ) + ' (stored using ' + _describeSize( _qbytes * 2, true ) + ')'
                : _describeSize( _qbytes, true )
        }

        // calculate the amount of bytes used for all keys in the store under this domain (key name and key value) ignoring prefix
        lds.quotaused = function() {
            if( !_storageIsAvailable ) { return false; }

            let allStrings = ''
                , _keyName
                , _keyVal
                , _len = localStorage.length
                , _qbytes
            ;

            if( localStorage.length !== 0 ) {
                // loop through all localStorage keys and get the keyname and keyvalue
                for( let i = _len; i--; ) {
                    _keyName    = localStorage.key( i );
                    _keyVal     = _readLocalStorage( _keyName );
                    allStrings += ( _keyName + _keyVal );
                }

                _qbytes = _getByteCount( allStrings );

                return _weAreVerbose
                    ? 'Total storage used is ' + _describeSize( _qbytes ) + ' (stored using ' + _describeSize( _qbytes * 2 ) + ')'
                    : _describeSize( _qbytes )

            } else {
                return _describeSize( 0 );
            }
        } 

        // deletes an existing key
        lds.remove = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }

            let _oldValue  = _getTheKey( key )
                , _oldType = _getTypeOfKey( _getPrefixedKey( key ) )
            ;

            if( _haskey( _getPrefixedKey( key ) ) ) {
                localStorage.removeItem( _getPrefixedKey( key ) );

                _sendLocalDataStorageEvent( 'remove key', 'remove', key, undefined, _oldValue, undefined, _oldType, undefined, _getKeyPrefix() );
                
                return _weAreVerbose ? 'key removed' : undefined;

            } else {
                return undefined;
            }
        }

        // rename a key
        lds.rename = function( key, newKey ) {
            if( !_storageIsAvailable ) { return false; }

            if( typeof key    === 'undefined'        ) { throw new Error( ERROR_11 );  }
            if( !_haskey( _getPrefixedKey( key ) )   ) { throw new Error( ERROR_15 );  }
            if( typeof newKey === 'undefined'        ) { throw new Error( ERROR_29 ); }
            if( key === newKey                       ) { throw new Error( ERROR_30 ); }
            if( _haskey( _getPrefixedKey( newKey ) ) ) { throw new Error( ERROR_31 ); }

            let _oldValue   = _getTheKey( key )
                , _oldType  = _getTypeOfKey( _getPrefixedKey( key ) )
                , _newValue = _convertToString( _oldValue )[ 0 ]
            ;

            localStorage.removeItem( _getPrefixedKey( key ) );
            _writeLocalStorage( _getPrefixedKey( newKey ), _newValue );

            _sendLocalDataStorageEvent( 'key name change', 'rename', key, newKey, _oldValue, _oldValue, _oldType, _oldType, _getKeyPrefix() );
        }

        // gets value of obfuscated key
        // fails silently returning undefined if key does not exist
        lds.safeget = function( key, userScrambleKey ) {
            if( !_storageIsAvailable ) { return false; }

            let value;

            if( _haskey( _getPrefixedKey( key ) ) ) {
                value = _readLocalStorage( _getPrefixedKey( key ) );

                if( 'undefined' === typeof userScrambleKey ) {
                    value = _xorString(       value, _scrambleKey, key );
                    value = _unshuffleString( value, _scrambleKey, key );

                } else {
                    value = _xorString(       value, userScrambleKey, key );
                    value = _unshuffleString( value, userScrambleKey, key );
                }

                value = _convertFromString( value );
                return value;

            } else {
                return undefined;
            }
        }

        // sets key to value, respecting the type and obfuscating the value
        // the key name iteself is used as part of the obfucation logic, thus
        // if a scrambled key is renamed, its scramble key will no longer work
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.safeset = function( key, value, userScrambleKey ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key   ) { throw new Error( ERROR_11 ); }
            if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            let _scrambleType   = ''
                , _temp         = _readLocalStorage( _getPrefixedKey( key ) )
                , _oldValue     = ( _temp === null ? undefined : _temp ) 
                , _oldType      = _getTypeOfKey( _getPrefixedKey( key ) )
                , _oldValueTest = _oldType === 'bigint' ? _oldValue : JSON.stringify( _oldValue, _JSONstringer )
                , _newValue     = ''
                , _newType      = 'obfuscated key'
                , _newValueTest = _newType === 'bigint' ? _newValue : JSON.stringify( _newValue, _JSONstringer )
            ;

            value = _convertToString( value )[ 0 ];

            if( 'undefined' === typeof userScrambleKey ) {
                value = _shuffleString( value, _scrambleKey, key );
                value = _xorString(     value, _scrambleKey, key );

                _scrambleType = ' with global scramble key';

            } else {
                value = _shuffleString( value, userScrambleKey, key );
                value = _xorString(     value, userScrambleKey, key );

                _scrambleType = ' with user scramble key';
            }

            _writeLocalStorage( _getPrefixedKey( key ), value );    

            _newValue = _readLocalStorage( _getPrefixedKey( key ) );


            if( _oldValueTest !== _newValueTest || _oldType !== _newType ) {
                if( 'undefined' === typeof _oldValue ) {
                    _sendLocalDataStorageEvent( 'create new key'   + _scrambleType, 'safeset', undefined, key, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );

                    if( _weAreVerbose ) { return "New obfuscated key created" + _scrambleType; }

                } else {
                    if( _oldValue !== _newValue ) {
                        _sendLocalDataStorageEvent( 'key value change' + _scrambleType, 'safeset', key, undefined, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
    
                        if( _weAreVerbose ) { return "Existing key has been overwritten with obfuscated value created" + _scrambleType; }
                    }
                }
            }
        }

        // sets key to value, respecting the data type
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.set = function( key, value ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key   ) { throw new Error( ERROR_11 ); }
            if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            let _oldValue       = _getTheKey( key )
                , _oldType      = _getTypeOfKey( _getPrefixedKey( key ) )
                , _oldValueTest = _oldType === 'bigint' ? _oldValue : JSON.stringify( _oldValue, _JSONstringer )
                , _newValue     = value
                , _newType      = _convertToString( value )[ 1 ]
                , _newValueTest = _newType === 'bigint' ? _newValue : JSON.stringify( _newValue, _JSONstringer )
            ;

            value = _convertToString( value )[ 0 ];
            _writeLocalStorage( _getPrefixedKey( key ), value );

            if( _oldValueTest !== _newValueTest || _oldType !== _newType ) {
                if( 'undefined' === typeof _oldValue ) {
                    _sendLocalDataStorageEvent( 'create new key',   'set', undefined, key, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );

                    if( _weAreVerbose ) { return "New " + _newType + " key created"; }

                } else {
                    _sendLocalDataStorageEvent( 'key value change', 'set', key, undefined, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );

                    if( _weAreVerbose ) { return "Existing key has been overwritten"; }
                }
            }
        }

        // set the "global" scramble key
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.setscramblekey = function( _newscrambleKey ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof _newscrambleKey ) { throw new Error( ERROR_14 ); }
            if( _valueIsIllegalType( _newscrambleKey ) ) { throw new Error( ERROR_13 ); }

            _scrambleKey = _newscrambleKey;

            if( _weAreVerbose ) { return "The new global scramble key is set"; }
        }

        // returns an array of duplicate key values, if any
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.showdupes = function( weShouldSortThis = true ) {
            if( !_storageIsAvailable ) { return false; }

            let _tempArray = _showDupes();

            if( weShouldSortThis ) { _naturalSort( _tempArray ); }

            if( _tempArray.length ) { return _tempArray; }

            return _weAreVerbose ? "No duplicate values in the store" : undefined;
        }

        // show all keys having value
        // return array of values, sorted alphabetically (optional)
        // left unsorted, keys are examined in the order found in the store 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.showkeys = function( value, weShouldStripKeyPrefix = true, weShouldSortThis = true ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            let _tempVal     = ''
                , _tempArray = new Array()
                , _tempKeys  = _getAllKeysThisInstance()  // get prefixed keys
                , _len       = _tempKeys.length
                , _key
            ;

            for( let i = _len; i--; ) {
                _key = _tempKeys[ i ];
                _tempVal = _get( _key );
                
                if( JSON.stringify( _tempVal, _JSONstringer ) === JSON.stringify( value, _JSONstringer ) ) {
                    if( weShouldStripKeyPrefix ) {  
                        _key = _stripPrefix( _key );
                    }

                    _tempArray.push( _key );
                }
            }

            if( weShouldSortThis ) { _naturalSort( _tempArray ); }

            if( _tempArray.length ) { return _tempArray; }

            return _weAreVerbose ? "No keys have that value" : undefined;
        }                   

        // show all keys having type of value
        // return array of values, sorted alphabetically (optional)
        // left unsorted, keys are examined in the order found in the store 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.showkeytypes = function( type, weShouldStripKeyPrefix = true, weShouldSortThis = true ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof type                     ) { throw new Error( ERROR_18 ); }

            if( "symbol" === type.toLowerCase()                 ) { throw new Error( ERROR_13 ); }

            if( !SUPPORTED_TYPES.includes( type.toLowerCase() ) ) { throw new Error( ERROR_17 ); }

            type = type.toLowerCase();

            let _tempType    = ''
                , _tempArray = new Array()
                , _tempKeys  = _getAllKeysThisInstance()
                , _len       = _tempKeys.length
                , _key
            ;

            for( let i = _len; i--; ) {
                _key = _tempKeys[ i ];
                _tempType = _getTypeOfKey( _key );
                
                if(
                    ( type === "number"  && ( _tempType === "float" || _tempType === "integer" ) )
                    ||
                    ( type !== "number"  &&   _tempType === type )
                ){

                    if( weShouldStripKeyPrefix ) {  
                        _key = _stripPrefix( _key );
                    }                        

                    _tempArray.push( _key );
                }
            }

            if( weShouldSortThis ) { _naturalSort( _tempArray ); }

            if( _tempArray.length ) { return _tempArray; }

            return _weAreVerbose ? "No keys are of that type" : undefined;
        }                   

        // returns the full internal prefix used for all keys
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.showprefix = function() {
            if( !_storageIsAvailable ) { return false; }

            return _weAreVerbose
                ? "The key prefix (" + _prefix + ".) adds " + _keyNameOverhead + " to each key name (stored using " + _keyNameOverhead2 + ")"
                : _prefix + '.'
            ;
        }

        // returns data type of key value
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.showtype = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            let _returnedValue;

            if( 'undefined' === typeof key ) { throw new Error( ERROR_11 ); }
            
            _returnedValue = _getTypeOfKey( _getPrefixedKey( key ) ); 

            if( _weAreVerbose ) {
                if( 'undefined' === typeof _returnedValue ) {
                    return "Key does not exist and cannot be checked";
                
                } else {
                    if( "array" === _returnedValue ) {
                        return "This key is an Array Key";
                    } else {
                        return "Key has value whose data type is " + _returnedValue;
                    }
                }

            } else {
                return _returnedValue; 
            }
        }

        // returns count of codepoints in key's value (not length, not byte count, not grapheme count)
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.size = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            let _returnedValue = _getTheKey( key );
            
            if( 'undefined' !== typeof _returnedValue ) {
                _returnedValue = _getCodePointCount( _returnedValue );
            }

            if( _weAreVerbose ) {
                if( 'undefined' === typeof _returnedValue ) {
                    return "Key does not exist and cannot be checked";
                
                } else {
                    return "Key value has " + _returnedValue + " codepoints";
                }

            } else {
                return _returnedValue; 
            }
        }

        // sets key to value, respecting the data type; will not overwrite an existing key
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.softset = function( key, value ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key   ) { throw new Error( ERROR_11 ); }
            if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            let  _newType   = _convertToString( value )[ 1 ]
                , _newValue = value
                , _returnLabel
            ;

            // create new key
            if( !_haskey( _getPrefixedKey( key ) ) ) {
                value = _convertToString( value )[ 0 ];
                _writeLocalStorage( _getPrefixedKey( key ), value );

                _sendLocalDataStorageEvent( 'create new key', 'softset', undefined, key, undefined, _newValue, undefined, _newType, _getKeyPrefix() );
            
                _returnLabel = "array" === _newType 
                    ? "New Array Key created" 
                    : "New " + _newType + " key created";

                return ( _weAreVerbose === 1 ? _returnLabel : undefined );

            } else {
                return ( _weAreVerbose === 1 ? "Key already exists and cannot be overwritten" : undefined );
            }
        }

        // returns decompressed text
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.uncrunch = function( _crunchedText ) {
            if( !_storageIsAvailable ) { return false; }

            return _uncrunch( _crunchedText );
        }

        // get total bytes of the specified key's value, or total bytes of all key values if no key specified
        // storage requirements for the embedded flags are not considered, just the raw data
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.valbytes = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            let _temp;

            if( 'undefined' === typeof key ) {
                return _describeSize( _valBytes() );
            } else {
                _temp = _describeSize( _valBytes( _getPrefixedKey( key ) ) );
                return _temp !== '0 bytes' ? _temp : undefined;    
            }
        }

        // get total bytes of the specified key's value, or total bytes of all key values if no key specified
        // storage requirements for the embedded flags are calculated
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.valbytesall = function( key ) {
            if( !_storageIsAvailable ) { return false; }

            let _temp;

            if( 'undefined' === typeof key ) {
                return _describeSize( _valBytesAll() );
            } else {
                _temp = _describeSize( _valBytesAll( _getPrefixedKey( key ) ) );
                return _temp !== '0 bytes' ? _temp : undefined;    
            }
        }

        // set or qoery the feedback mode
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.verbosity = function( value ) {
            if( !_storageIsAvailable ) { return false; }

            value = Number( value );

            if( 'undefined' !== typeof value ) {
                if( value === 0 || value === 1 ) {
                    _setVerbosity( value );
                }
            }

            return "Verbosity is " + ( _weAreVerbose === 1 ? "on" : "off" );
        }

        // checks whether key (which must be of type array) contains value, and returns index
        // ex. string search for value 'english' in education key [ 'math', 'english', 'science' ]
        // ex. object search for value {'book':'math'} in education key [ {'book':'math'}, {'book':'english'}, {'book':'science'} ]
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.where = function( key, value ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof key   ) { throw new Error( ERROR_11 ); }
            if( 'undefined' === typeof value ) { throw new Error( ERROR_12 ); }
            if( _valueIsIllegalType( value ) ) { throw new Error( ERROR_13 ); }

            if( !_haskey( _getPrefixedKey( key ) ) ) { return undefined; }

            if( 'array' !== _getTypeOfKey( _getPrefixedKey( key ) ) ) { throw new Error( ERROR_16 ); }

            let _valueFound = false
                , _value = _getTheKey( key );
            ;

            for( let i = 0; i < _value.length; i++ ) {
                if( JSON.stringify( _value[ i ], _JSONstringer ) === JSON.stringify( value, _JSONstringer ) ) {
                    _valueFound = i + 1;
                    break;
                }
            }

            return _weAreVerbose ? 'Value was found in the Array Key at position ' + _valueFound : _valueFound;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.xorString = function( _string, _keySeed, _keyName ) { 
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof _string  ) { throw new Error( ERROR_32 ); }
            if( 'undefined' === typeof _keySeed ) { throw new Error( ERROR_10 ); }
            if( 'undefined' === typeof _keyName ) { throw new Error( ERROR_11 ); }

            return _xorString( _string, _keySeed, _keyName );
        } 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.unshuffleString = function( _string, _keySeed, _keyName ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof _string  ) { throw new Error( ERROR_32 ); }
            if( 'undefined' === typeof _keySeed ) { throw new Error( ERROR_10 ); }
            if( 'undefined' === typeof _keyName ) { throw new Error( ERROR_11 ); }

            return _unshuffleString( _string, _keySeed, _keyName );
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        lds.shuffleString = function( _string, _keySeed, _keyName ) {
            if( !_storageIsAvailable ) { return false; }

            if( 'undefined' === typeof _string  ) { throw new Error( ERROR_32 ); }
            if( 'undefined' === typeof _keySeed ) { throw new Error( ERROR_10 ); }
            if( 'undefined' === typeof _keyName ) { throw new Error( ERROR_11 ); }

            return _shuffleString( _string, _keySeed, _keyName );
        }


        /////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////


        lds.version = 'localDataStorage ' + VERSION;

        let _keyNameOverhead    = _describeSize( _getByteCount( lds.showprefix() )     )
            , _keyNameOverhead2 = _describeSize( _getByteCount( lds.showprefix() ) * 2 )
        ;

        (function() {

            // initialization checks and feedback
            let _priorKeysExist = false
                , _key
                , _randomPrefix = false
                , _len = localStorage.length
                , _test
                , _thePrefix = lds.showprefix()
                , _test1 = function() {
                    let _return = false;
                    lds.safeset( STORAGE_TEST, STORAGE_TEST, STORAGE_TEST );
                    if( STORAGE_TEST === lds.safeget( STORAGE_TEST, STORAGE_TEST ) ) { _return = true; }
                    lds.remove( STORAGE_TEST );
                    return _return;
                }
            ;

            if( _storageIsAvailable ) {
             
                if( 'undefined' === typeof _storageKeyPrefix && !( _userswitches && _userswitches.includes( '/q' ) ) ) {
                    _randomPrefix = true;
                    console.info( 'No prefix specified. Creating a %crandom %cprefix --> %c' + _thePrefix, 'font-style: italic;', 'font-style: normal;', 'font-weight: bold;' );
                }

                if( '' === _storageKeyPrefix &&                 !( _userswitches && _userswitches.indexOf( '/q' ) !== -1 ) ) {
                    console.info( 'Empty prefix given (%c' + _thePrefix + '%c), but a usable prefix is %cstrongly recommended%c to organize keys!', 'font-weight: bold;', 'font-style: normal;', 'text-decoration: underline;', 'text-decoration: none;' );
                }
        
                if(                                             !( _userswitches && _userswitches.indexOf( '/q' ) !== -1 ) ) {
                    console.log( '💼 localDataStorage instantiated. ' + ( _randomPrefix === true ? 'The random prefix' : 'Your specified prefix' ) + ' (%c' + _thePrefix + '%c) adds ' + _keyNameOverhead + ' to every key name (stored using ' + _keyNameOverhead2 + ').', 'font-weight: bold;', 'font-style: normal;' );
                }

                if( _userswitches && _userswitches.includes( '/w' ) ) { 
                    for( let i = _len; i--; ) {
                        _key = localStorage.key( i );
                        if( _key.indexOf( _thePrefix ) !== -1 ) {
                            _priorKeysExist = true;
                            break;
                        } 
                    }
                    if( _priorKeysExist ) {
                        console.warn( '%cAttention! %cKeys with this prefix already exist in localStorage for this domain!', 'color: rgb(230,0,0); font-weight: bold;', 'color: rgb(230,0,0);' );
                    }
                }
                
                if( _userswitches && _userswitches.includes( '/t' ) ) {
                    if( _test1() ) {
                        console.log( 'Tested good: The localStorage API is available' );
                    }
                }

            } else {
                console.warn( '%cError! Cannot access localStorage! %cBailing out...', 'color: rgb(230,0,0); font-weight: bold;', 'color: rgb(230,0,0);' );
            }

        })()

        return lds;

    })( _specifiedPrefix, _switches );
};
