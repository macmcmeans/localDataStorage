/*///////////////////////////////////////////////////////////////////////////////////////////////////
localDataStorage 1.3.1
https://gitcdn.link/cdn/macmcmeans/localDataStorage/master/localDataStorage-1.3.1.js
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
/////////////////////////////////////////////////////////////////////////////////////////////////////
This version of localDataStorage incorporates alvoPRNG (a pseudo random number generator) by
Ribeiro Alvo (http://www.number.com.pt/index.html), under a BSD license. 
/////////////////////////////////////////////////////////////////////////////////////////////////////
alvoPRNG 1.0
/////////////////////////////////////////////////////////////////////////////////////////////////////
Copyright (c) 2017, Ribeiro Alvo
All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////*/

var localDataStorage = function( _specifiedPrefix, _switch ) {
    return( function( _storageKeyPrefix, _userswitch ) {
        "use strict";

        if( _storageKeyPrefix && _storageKeyPrefix === '/q' && typeof _userswitch === 'undefined' ) {
            _userswitch = _storageKeyPrefix;
            _storageKeyPrefix = '';
        }
        if( _userswitch && _userswitch !== '/q' ) { throw new Error( "Invalid switch supplied" ); }


        var _version = '1.3.1'
            , txt1 = "Key is undefined"
            , txt2 = "Key's value is undefined"
            , txt3 = "No key value supplied"
            , txt4 = "No scramble key specified"

            // 2 bytes overhead per flag
            , _getCrunch  = function() { return String.fromCodePoint( 128 ); }

            , _getString  = function() { return String.fromCodePoint( 129 ); }
            , _getDate    = function() { return String.fromCodePoint( 141 ); }
            , _getNumber  = function() { return String.fromCodePoint( 142 ); }
            , _getBoolean = function() { return String.fromCodePoint( 143 ); }
            , _getObject  = function() { return String.fromCodePoint( 144 ); }
            //, _getObject  = function() { return String.fromCodePoint( 157 ); }
            // 128, 129, 141-144, 149, 157, 158

            , _scrambleKey = 123456789

            , __prefix = function() {
                var _now = new Date();
                return _now.getTime() + ':' + ( Math.random() * 100000000 | 0 );
            }()

            , _prefix = ( _storageKeyPrefix === '' ? '' : typeof _storageKeyPrefix === 'undefined' ? __prefix : _storageKeyPrefix )

            , __isStorageAvailable = function( _type ) { 
                var storage
                    , x = '__storage_test__'
                ;

                //_type = 'localStorage';

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

            , __storageIsAvailable = __isStorageAvailable( 'localStorage' )

            // simple PRNG
            , _alvoPRNG = function(r) {
                return function(r) {
                    "use strict";
                    function n(n) {
                        var o = n;
                        if (n < 10) throw new Error("Specified seed must be greater than 9");
                        o += "", t = o.length, e = "";
                        for (var f = 0; f < t; f++) e += o[t - f - 1];
                        "string" == typeof r && (t = 2 * (t + 1)), u = +("0." + e), i = +("0." + t);
                        for (var a = 0; a < 20; a++) i += u, u = (i * u + i) % 1;
                    }
                    var t, e, u, i, o, f = function() {
                        return new Date().getTime();
                    }();
                    o = r || f, n(o);
                    var a = function() {
                        return i += u, u = (i * u + i) % 1;
                    }, c = function() {
                        return a();
                    };
                    return c.seed = function(r) {
                        n(r);
                    }, c;
                }(r);
            }


            // convert a localStorage string into its original primitive object (Number, Date, String, etc.) based on embedded flags
            // markers are at the end of the value
            , _convertFromString = function( _value ) {
                var _recovered_value = ''
                    , _recoveredType
                ;

                if( typeof _value === 'undefined' ) { throw new Error( "No value to convert from" ); }

                // check for embedded flags
                if(
                    _value.indexOf( _getString()  ) === -1 &&
                    _value.indexOf( _getDate()    ) === -1 &&
                    _value.indexOf( _getNumber()  ) === -1 &&
                    _value.indexOf( _getBoolean() ) === -1 &&
                    _value.indexOf( _getObject()  ) === -1
                
                // and if none, treat the key as a regular localStorage value
                ){

                    // assume it's an object, or an array, that has been stringified, if possible
                    if( _value[ 0 ] === "{" || _value[ 0 ] === "[" ) {
                        try{
                            _recovered_value = JSON.parse( _value );
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
            
                // but flags are found, so parse it out 
                } else {

                    if( _recovered_value === '' ) {
                        _recoveredType = _getString();
                        if( _value.indexOf( _recoveredType ) !== -1 ) {
                            _value = _value.substr( 0, _value.indexOf( _recoveredType ) );

                            // is it compressed?
                            if( _value.indexOf( _getCrunch() ) !== -1 ) { 
                                _value = _value.substr( 1, _value.length )
                                _value = _uncrunch( _value );
                            }
                            _recovered_value = _value;
                        }
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = _getDate();
                        if( _value.indexOf( _recoveredType ) !== -1 ) {
                            _value = _value.substr( 0, _value.indexOf( _recoveredType ) );
                            _recovered_value = new Date( JSON.parse( _value ) );
                        } 
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = _getNumber();
                        if( _value.indexOf( _recoveredType ) !== -1 ) {
                            _value = _value.substr( 0, _value.indexOf( _recoveredType ) );
                            _recovered_value = parseFloat( _value );
                        }
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = _getBoolean();
                        if( _value.indexOf( _recoveredType ) !== -1 ) {
                            _value = _value.substr( 0, _value.indexOf( _recoveredType ) );
                            _recovered_value = _value === '1' ? true : false;
                        }
                    }
                    if( _recovered_value === '' ) {
                        _recoveredType = _getObject();
                        if( _value.indexOf( _recoveredType ) !== -1 ) {
                            _value = _value.substr( 0, _value.indexOf( _recoveredType ) );
                            _recovered_value = JSON.parse( _value );
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
                var _marker = ''
                    , _type = ''
                ;

                if( typeof value === 'undefined' ) { throw new Error( "No value to convert to" ); }

                // strings
                if( typeof value === 'string'  ) {
                    _type = 'string';
                    _marker = _getString();

                    // only try to compress strings
                    if( _isCrunchable( value ) ) {
                        _type = 'compressed string';

                        value = _crunch( value );
                        value = _getCrunch() + value; 
                    }
                
                } else
                
                // dates
                if( typeof value === 'object' && ( value instanceof Date || value == new Date( value ) ) ) { 
                    _type = 'date';
                    _marker = _getDate();
                    value = JSON.stringify( value );

                } else

                // numbers
                if( typeof value === 'number'  ) {
                    _type = 'integer';
                    if( ( value + '' ).indexOf( '.' ) !== -1 ) { _type = 'float'; }

                    _marker = _getNumber();
                    value += ''

                } else

                // booleans
                if( typeof value === 'boolean' ) {
                    _type = 'boolean';
                    _marker = _getBoolean();

                    value = Number( value );
                    value += ''

                } else

                // all other objects
                if( typeof value === "object" ) {
                    _type = 'object';
                    
                    if( value === null ) { _type = 'null'; }

                    if( value instanceof Array ) { _type = 'array'; }

                    _marker = _getObject();
                    value = JSON.stringify( value );
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
            , _describeSize = function( _val ) {
                var _units = [ "bytes", "KB", "MB" ]
                    , _sizeUnit = 0
                ;
                while( _val > 1024 ) { _sizeUnit++; _val /= 1024; }
                return _val.toFixed( 2 ) + " " + _units[ _sizeUnit ];
            }

            // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript/4760279#4760279
            // helper sort function
            , __dynamicSort = function( property ) {
                var sortOrder = 1;
                if( property[ 0 ] === "-" ) {
                    sortOrder = -1;
                    property = property.substr( 1 );
                }

                return function( a, b ) {
                    var result = ( a[ property ] < b[ property ] ) ? -1 : ( a[ property ] > b[ property ]) ? 1 : 0;
                    return result * sortOrder;
                }
            }

            // helper sort function
            , __dynamicSortMultiple = function() {
                /*
                * save the arguments object as it will be overwritten
                * note that arguments object is an array-like object
                * consisting of the names of the properties to sort by
                */
                var props = arguments;
            
                return function ( obj1, obj2 ) {
                    var i = 0, result = 0, numberOfProperties = props.length;
                    /* try getting a different result from 0 (equal)
                    * as long as we have extra properties to compare
                    */
                    while( result === 0 && i < numberOfProperties ) {
                        result = __dynamicSort( props[ i ] )( obj1, obj2 );
                        i++;
                    }
                
                    return result;
                }
            }

            // in-place array shuffle (no copy made)
            // internally uses window.crypto for CSPRNG (for non-recoverable shuffle), but
            // this can be overridden with a ref to another PRNG
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
                var r = .059886774281039834 * n;
                return r += 21845.33332824707, n = 0 | r, r -= n, r *= n, n = 0 | r, r -= n, (n ^= 4294967296 * r) >>> 0;
            }

            // basic read from localStorage
            , _get = function( key ) {
                if( typeof key === 'undefined' ) { throw new Error( txt1 ); }

                var _value = localStorage.getItem( key );
        
                if( !_value ) {
                    return undefined;
                } else {
                    return _convertFromString( _value );        
                }
            }

            // returns count of bytes in string
            , _getByteCount = function( t ) {
                t = "" + t;
                for (var r = t.length, n = r - 1; n >= 0; n--) {
                    var e = t.charCodeAt(n);
                    e > 127 && 2047 >= e ? r++ : e > 2047 && 65535 >= e && (r += 2), e >= 56320 && 57343 >= e && n--;
                }
                return r;
            }

            // returns count of codepoints in string
            , _getCodePointCount = function( t ) {
                return t = "" + t, __ucs2decode( t ).length;
            }

            // create an object defining duplicate values and their associated keys
            , _getDuplicates = function() {
                var dupes = _showDupes()
                    , _keyNamesObj = {}
                    , _keyNames = {}
                    , _tempKey = ''
                ;

                if( dupes.length ) {
                
                    for( var ii = 0, len = dupes.length; ii < len; ii++ ) {
                        var _keyNameParts = new Array();

                        for( var i = 0, l = localStorage.length; i < l; i++ ) {
                            _tempKey = localStorage.key( i );

                            if( JSON.stringify( _get( _tempKey ) ) === JSON.stringify( dupes[ ii ] ) ) {
                                _tempKey = _stripPrefix( _tempKey );
                                _keyNameParts.push( _tempKey );
                            }
                        }

                        _keyNames[ ii ] = { 
                            'value'  : dupes[ ii ]
                            , 'keys' : _keyNameParts
                        }
                    }
                }

                _keyNamesObj = {
                    'dupecount' : dupes.length
                    , 'dupes'   : _keyNames 
                }

                return _keyNamesObj;
                }

            // show the prefix prepended to all key names
            , _getKeyPrefix = function() {
                return _prefix + '.';
            }

            // convert input to integer based on value and data type
            // returns [ integer, objectString ]
            , _getNumberFromObject = function( _input ) {
                if( typeof _input === 'undefined' ) { return; }

                var _json = JSON.stringify( _input )
                    , _num = 0
                    , _type = ''
                    , _convert = ''
                    , _reverseIt = function( _string ) { 
                        return Array.from( _string ).reverse().join( '' ); 
                    }
                    // standard JAVA hashCode
                    , _hashCode = function( _string ) {
                        var hash = 0
                            , chr
                        ;
                        if( _string.length === 0 ) { return hash };
                        for( var i = 0, l = _string.length; i < l; i++ ) {
                            chr = _string.charCodeAt( i );
                            hash = (( hash << 5 ) - hash ) + chr;
                            hash |= 0; // Convert to 32bit integer
                        }
                        return hash;
                    }
                ;
                
                // arrays
                if( _input instanceof Array ) { 
                    _type = 'ARRAY1';

                } else

                // booleans
                if( typeof _input === 'boolean' ) {
                    _type = 'BOOLEAN2';

                } else

                // dates
                if( _input instanceof Date ) { 
                    _type = 'DATE4';

                } else

                // numbers
                if( typeof _input === 'number'  ) {
                    if( ( _input + '' ).indexOf( '.' ) !== -1 ) {
                        _type = 'FLOAT8';
                    } else {
                        _type = 'INTEGER16';
                    }

                } else

                // strings
                if( typeof _input === 'string'  ) {
                    _type = 'STRING32'

                // other objects
                } else {
                    _type = 'OBJECT64';
                }

                // may need canonical JSON stringify in the future (https://github.com/mirkokiefer/canonical-json)
                _convert = ( 
                    _json + 
                    _json.length + 
                    _type +
                    _hashCode( _json ) +
                    _hashCode( _reverseIt( _json ) ) 
                );

                for( var i = 0; i < _convert.length; i++ ) {
                    _num += _convert.charCodeAt( i );
                }

                return [_num, _convert];
            }
            
            // return key with prefix
            , _getPrefixedKey = function( key ) {
                return _getKeyPrefix() + key;
            }

            // find all duplicate key values in _array (strict check; match value and type)
            , _getStrictDuplicates = function( _array ) {
                var _dupes = new Array()
                    , _tempDupe = new Array()
                ;

                for( var i = 0, l = _array.length; i < l; i++ ) {
                    _tempDupe = _array[ i ]; // unconverted localStorage string (much easier to check)

                    if( ( _array.lastIndexOf( _tempDupe ) !== i ) && ( _dupes.indexOf( _tempDupe ) === -1 ) ) {
                        _dupes.push( _tempDupe );
                    }
                }

                // now that we have all the dupes, convert 'em back to their original data types
                for( var i = 0, l = _dupes.length; i < l; i++ ) {
                    _dupes[ i ] = _convertFromString( _dupes[ i ] );
                }

                return _dupes;
            }

            // return the primitive data type of the key's value
            // if _valueToCheck is specified, skip storage retrieval and just return the value type
            , _getValueType = function( key ) {
                if( typeof key === 'undefined' ) { throw new Error( "No key specified" ); }

                var _recoveredType = ''
                    , _value = ''
                ;

                if( typeof _valueToCheck === 'undefined' ) {
                    if( _haskey( key ) ) {
                        _value = localStorage.getItem( key );
                        if( _value === '' ) { return 'undefined'; }

                    } else {
                        return undefined;
                    }

                } else {
                    _value = _valueToCheck;
                }

                // check for embedded flags
                if(
                    _value.indexOf( _getString()  ) === -1 &&
                    _value.indexOf( _getDate()    ) === -1 &&
                    _value.indexOf( _getNumber()  ) === -1 &&
                    _value.indexOf( _getBoolean() ) === -1 &&
                    _value.indexOf( _getObject()  ) === -1
                
                // and if none, treat the key as a regular localStorage value
                ){

                    // assume it's an object, or an array, that has been stringified, if possible
                    if( _value[ 0 ] === "[" ) {
                        _recoveredType = 'presumed array';

                    } else
                    if( _value[ 0 ] === "{" ) {
                        _recoveredType = 'presumed object';


                    // assume it's a typical localStorage string
                    } else {
                        
                        // is it a possible number (int or float)?
                        if( _value == +_value ) {
                            _recoveredType = 'presumed number';

                        // nope, just a regular key value
                        } else {

                            // can we unscramble it using the current default global scramble key?
                            _value = _xorString(       _value, _scrambleKey, key );              
                            _value = _unshuffleString( _value, _scrambleKey, key );

                            if( _value.indexOf( _getString()  ) !== -1 ) {
                                _recoveredType = 'scrambled string';
                            
                            } else
                            if( _value.indexOf( _getDate()    ) !== -1 ) {
                                _recoveredType = 'scrambled date';

                            } else
                            if( _value.indexOf( _getNumber()  ) !== -1 ) {
                                _recoveredType = 'scrambled number';

                                if( _value.indexOf( '.' ) !== -1 ) {
                                    _recoveredType = 'scrambled float';
                                } else {
                                    _recoveredType = 'scrambled integer';
                                }

                            } else
                            if( _value.indexOf( _getBoolean() ) !== -1 ) {
                                _recoveredType = 'scrambled boolean';

                            } else
                            if( _value.indexOf( _getObject()  ) !== -1 ) {
                                _recoveredType = 'scrambled object';

                                if( _value[ 0 ] === "[" ) {
                                    _recoveredType = 'scrambled array';
                                }

                        
                            // nope...
                            } else {
                                _recoveredType = 'presumed string';
                            }
                        }
                    }
            
                // but flags are found, so parse it out 
                } else {

                    if( _recoveredType === '' ) {
                        if( _value.indexOf( _getString() ) !== -1 ) {
                            _recoveredType = 'string';

                            // is it compressed?
                            if( _value.indexOf( _getCrunch() ) !== -1 ) { 
                                _recoveredType = 'compressed string';
                            }

                            /*
                            // is it a Date() string (not instanceof) ?
                            if( _value.slice( 0, -1 ) == new Date( _value ) ) { 
                                _recoveredType = 'date string';
                            }
                            */
                        }
                    }
                    if( _recoveredType === '' ) {
                        if( _value.indexOf( _getDate() ) !== -1 ) {
                            _recoveredType = 'date';
                        } 
                    }
                    if( _recoveredType === '' ) {
                        if( _value.indexOf( _getNumber() ) !== -1 ) {
                            _recoveredType = 'number';

                            if( _value.indexOf( '.' ) !== -1 ) {
                                _recoveredType = 'float';
                            } else {
                                _recoveredType = 'integer';
                            }
                        }
                    }
                    if( _recoveredType === '' ) {
                        if( _value.indexOf( _getBoolean() ) !== -1 ) {
                            _recoveredType = 'boolean';
                        }
                    }
                    if( _recoveredType === '' ) {
                        if( _value.indexOf( _getObject() ) !== -1 ) {
                            _recoveredType = 'object';

                            if( _value[ 0 ] + _value[ 1 ] + _value[ 2 ] + _value[ 3 ] === 'null' ) {
                                _recoveredType = 'null';
                            }

                            if( _value[ 0 ] === "[" ) {
                                _recoveredType = 'array';
                            }
                        }
                    }
                }

                return _recoveredType;
            }

            // boolean test whether key exists
            , _haskey = function( key ) {
                return localStorage.getItem( key ) !== null ? true : false;
            }

            // boolean test whether value exists
            , _hasval = function( value ) {
                var _val = JSON.stringify( value )
                    , _test = ''
                    , _key = ''
                ;

                // loop through all localStorage keys and only check the ones prefixed for this instance
                for( var i = 0, l = localStorage.length; i < l; i++ ) {
                    _key = localStorage.key( i );

                    if( _key.indexOf( _getKeyPrefix() ) !== -1 ) {
                        _test = JSON.stringify( _get( _key ) );
                        if( _val === _test ) { return true; }
                    }
                }

                return false;
            }

            // boolean check
            // determine if _text safely compresses, if it compresses to a smaller size, and
            // whether the smaller size (plus the marker) is worth the OP
            // the marker flag (like the others) is 2 bytes (stored as 4 bytes)
            , _isCrunchable = function( _text ) {
                var _crunchable = false
                    , _withinSize = false
                    , _margin = 3
                 ;

                _crunchable = ( _text === _SMAZ.decompress( _SMAZ.compress( _text ) ) ? true : false );
                _withinSize = ( _getByteCount( _SMAZ.compress( _text ) ) + _margin < _getByteCount( _text ) ? true : false );

                if( _crunchable && _withinSize ) {
                    return true;
                } else {
                    return false;
                }
            }

            // get total bytes of the specified key name (not its value), or
            // total bytes of all keys if no key specified
            , _kbytes = function( key ) {
                var allStrings = ''
                    , size = 0 
                ;
                
                // check all keys
                if( typeof key === 'undefined' ) {
                    for( var i = 0, len = localStorage.length; i < len; ++i ) {
                        allStrings += localStorage.key( i );
                    }
                
                    size = _getByteCount( allStrings );

                // check specified key
                } else {                        

                    if( _haskey( key ) ) {
                        size = _getByteCount( key );
                    }
                }                    
                
                // each character is stored in UC2/UTF16 format (2 bytes storage per each byte of data)
                size *= 2;
                
                return size;
            }

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

            // slightly better solution that relies on ES6 StringIterator and `Array.from`
            // https://mathiasbynens.be/notes/javascript-unicode
            , _reverse = function( _string ) {
                return Array.from( _string ).reverse().join( '' );
            }

            // create a custom event to be triggered on key value changes
            , _sendLocalDataStorageEvent = function( _msg, _methodName, _oldKey, _newKey, _oldValue, _newValue, _oldType, _newType, _prefix ) {
                var event = new CustomEvent(
                    "localDataStorage"
                    , {
                        'detail' : 
                            {
                                'message'     : _msg
                                , 'method'    : _methodName
                                , 'oldkey'    : _oldKey
                                , 'newkey'    : _newKey
                                , 'oldval'    : JSON.stringify( _oldValue )
                                , 'newval'    : JSON.stringify( _newValue ) 
                                , 'oldtype'   : _oldType
                                , 'newtype'   : _newType
                                , 'prefix'    : _prefix
                                , 'timestamp' : +new Date()  
                            }
                        , bubbles    : false
                        , cancelable : true
                    }
                );

                document.dispatchEvent( event );
            }

            // basic write to localStorage
            , _setKeyValuePair = function( key, value ) {
                if( typeof key   === 'undefined' ) { throw new Error( txt1 ); }
                if( typeof value === 'undefined' ) { throw new Error( txt2 ); }

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
                        throw new Error( "Quota exceeded for localStorage" );

                    } else {
                        throw new Error( "An error occurred writing to localStorage" );
                    }
                }
            }

            , _setScramblekey = function( _skey ) {
                _scrambleKey = _skey;
            }

            // returns an array of duplicate values (not key names), if any
            , _showDupes = function() {
                    var dupes = new Array()
                    , inc = 0
                    , temp
                    , _key
                ;

                // loop through all localStorage keys and copy the ones prefixed for this instance
                for( var i = 0, len = localStorage.length; i < len; i++ ) {
                    _key = localStorage.key( i );

                    if( _key.indexOf( _getKeyPrefix() ) !== -1 ) {
                        dupes[ inc++ ] = localStorage.getItem( _key );
                    }
                }

                // check prefixed keys for duplicate values
                temp = _getStrictDuplicates( dupes );

                return ( temp.length === 0 ? [] : temp );
            }
            
            // deterministically shuffle _string using _keySeed (and _keyName)
            // a) convert _keySeed & _keyName to unique integer derivative values and add them
            // b) hash the value and convert the integer to string
            // c) reverse it
            // d) convert it to a number and init the PRNG with it
            // e) create an "initialization vector" for the PRNG using values derived from PRNG's seed value...
            // f) ...added to codepoint counts of _keyName & _keySeed string derivatives
            // g) run the PRNG to "warm it up" to discard any goofy initial values it might have
            // h) reverse the value to be shuffled (_string)
            // i) shuffle it using the PRNG
            , _shuffleString = function( _string, _keySeed, _keyName ) { 
                var hasher   = 
                        _getNumberFromObject( _keySeed )[ 0 ] + 
                        _getNumberFromObject( _keyName )[ 0 ]
                    , hashed = ( _foldFPHash( hasher ) + '' )
                    , hashor = _reverse( hashed )
                    , hashee = Number( hashor )
                    , prng = _alvoPRNG( hashee )
                    , ivprep = 
                        Number( ( hashee + '' ).charAt( 2 ) ) + 
                        Number( ( hashee + '' ).charAt( 1 ) ) + 
                        Number( ( hashee + '' ).charAt( 0 ) )  
                    , ivrounds = 
                        _getCodePointCount( _getNumberFromObject( _keyName )[ 1 ] ) + 
                        _getCodePointCount( _getNumberFromObject( _keySeed )[ 1 ] ) + 
                        ivprep 
                ;

                for( var i = 0; i < ivrounds; i++ ) { prng(); }

                _string += (
                    String.fromCharCode( Math.floor( Math.random() * ( 1000 - 35 + 1 ) ) + 35 ) +
                    String.fromCharCode( Math.floor( Math.random() * ( 1000 - 35 + 1 ) ) + 35 ) +
                    String.fromCharCode( Math.floor( Math.random() * ( 1000 - 35 + 1 ) ) + 35 ) +
                    String.fromCharCode( Math.floor( Math.random() * ( 1000 - 35 + 1 ) ) + 35 ) 
                 );


                _string = _reverse( _string );
                _string = _string.split( '' );
                _fisherYatesDurstenfeldKnuthShuffle( _string, prng );
                _string = _string.join( '' );

                return _string;
            }



            // 7-bit ASCII text de/compressor
            , _SMAZ = function() {
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
                for (var r, n, e = [], o = 0, u = t.length; u > o; ) r = t.charCodeAt(o++), r >= 55296 && 56319 >= r && u > o ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? e.push(((1023 & r) << 10) + (1023 & n) + 65536) : (e.push(r), o--)) : e.push(r);
                return e;
            }

            // decompress simple 7-bit ASCII text strings
            , _uncrunch = function( _crunchedText ) {
                return _SMAZ.decompress( _crunchedText );
            }

            // restore a shuffled string
            , _unshuffleString = function( _string, _keySeed, _keyName ) {
                var hasher   =
                        _getNumberFromObject( _keySeed )[ 0 ] + 
                        _getNumberFromObject( _keyName )[ 0 ]
                    , hashed = ( _foldFPHash( hasher ) + '' )
                    , hashor = _reverse( hashed )
                    , hashee = Number( hashor )
                    , prng = _alvoPRNG( hashee )
                    , ivprep = 
                        Number( ( hashee + '' ).charAt( 2 ) ) + 
                        Number( ( hashee + '' ).charAt( 1 ) ) + 
                        Number( ( hashee + '' ).charAt( 0 ) )  
                    , ivrounds = 
                        _getCodePointCount( _getNumberFromObject( _keyName )[ 1 ] ) + 
                        _getCodePointCount( _getNumberFromObject( _keySeed )[ 1 ] ) + 
                        ivprep 
                ;
                
                for( var i = 0; i < ivrounds; i++ ) { prng(); }

                _string = _string.split( '' );
                _string = _fisherYatesDurstenfeldKnuthUnshuffle( _string, prng );
                _string = _string.join( '' );
                _string = _reverse( _string );



                return _string;
            }

            // get total bytes of the specified key's value, or
            // total bytes of all key values if no key specified
            , _vbytes = function( key ) {
                var allStrings = ''
                    , size = 0 
                ;
                
                // check all keys
                if( typeof key === 'undefined' ) {
                    for( var i = 0, len = localStorage.length; i < len; ++i ) {
                        allStrings += _get( localStorage.key( i ) );
                    }
                
                    size = _getByteCount( allStrings );
                
                // check specified key
                } else {                        

                    if( _haskey( key ) ) {
                        
                        // booleans are stored using 1 byte
                        if( _getValueType( key ) === 'boolean' ) {
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
            , _vbytesAll = function( key ) {
                var allStrings = ''
                    , size = 0 
                ;
                
                // check for all keys
                if( typeof key === 'undefined' ) {
                    for( var i = 0, len = localStorage.length; i < len; ++i ) {
                        allStrings += localStorage.getItem( localStorage.key( i ) );
                    }
                
                    size = _getByteCount( allStrings );
                
                // check specified key
                } else { 

                    if( _haskey( key ) ) {
                        size = _getByteCount( localStorage.getItem( key ) );
                    }
                }                    
                
                size *= 2;
                
                return size;
            }

            // XOR _string against a PRNG seeded with _keySeed
            // this needs to be made stronger
            , _xorString = function( _string, _keySeed, _keyName ) { 
                var output = ''
                    , hasher = _getNumberFromObject( _keySeed )[ 0 ]
                    , hashed = ( _foldFPHash( hasher ) + '' )
                    , hashor = _reverse( hashed )
                    , hashee = 
                        Number( hashor )                      + 
                        _getNumberFromObject( _keyName )[ 0 ] +
                        _getNumberFromObject( _keySeed )[ 0 ]
                    , hashim = ( hashee + '' )
                    , prng = _alvoPRNG( hashim )
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
                    , maxA = 256
                    , minB =   0
                    , maxB =   0
                    , _swapPoint   = .537
                ;

                //console.log( hasher, hashed, hashor, hashee, hashim, ivprep, ivrounds, hashet )

                _string += '';

                for( var i = 0; i < ivrounds; i++ ) { prng(); }

                //debugger;
                for( var i = 0, l = _string.length; i < l; i++ ) {
                    keyA = Math.floor( prng()           * ( maxA - minA + 1 ) ) + minA;

                    minB = keyA;
                    maxB = hasher;
                    keyB = Math.floor( hashes( hashet ) * ( maxB - minB + 1 ) ) + minB;  

                    //output += String.fromCharCode( ( keyA + keyB ) ^ _string.charCodeAt( i ) );
                    if( prng() < _swapPoint ) {
                        output += String.fromCharCode( keyA ^ _string.charCodeAt( i ) );

                    } else {
                        output += String.fromCharCode( keyB ^ _string.charCodeAt( i ) );
                    }
                }

                return output;
            }
        
            , lds = function() {
                return 'localDataStorage ' + _version + ' using ' + ( _prefix === '' ? 'no prefix' : _prefix ); 
            }
        ;

        // returns total bytes used by both the key's name and the key's data, in the domain
        // if a key is specified, returns data for that key alone
        // storage requirements for the embedded flags are not considered, just the raw data
        lds.bytes = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key !== 'undefined' ) {
                return _describeSize( _vbytes( _getPrefixedKey( key ) ) + _kbytes( _getPrefixedKey( key ) ) );
            } else {
                return _describeSize( _vbytes() + _kbytes() );
            }
        }

        // returns total bytes used by both the key's name and the key's data, in the domain
        // if a key is specified, returns data for that key alone
        // storage requirements for the embedded flags are counted
        lds.bytesall = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key !== 'undefined' ) {
                return _describeSize( _vbytesAll( _getPrefixedKey( key ) ) + _kbytes( _getPrefixedKey( key ) ) );
            } else {
                return _describeSize( _vbytesAll() + _kbytes() );
            }
        }

        // get key and immediately remove it
        // fails silently returning undefined if key does not exist
        lds.chopget = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            var _oldValue
                , _oldType
            ;

            if( _haskey( _getPrefixedKey( key ) ) ) {
                _oldValue = _get( _getPrefixedKey( key ) );
                _oldType = this.showtype( key );

                localStorage.removeItem( _getPrefixedKey( key ) );

                // trigger our "localDataStorage" event with some data
                _sendLocalDataStorageEvent( 'excise key', 'chopget', key, undefined, _oldValue, undefined, _oldType, undefined, _getKeyPrefix() );

                return _oldValue;
            
            } else {
                return undefined;
            }
        }

        // deletes all prefixed keys, in the domain, using the native API
        // does not delete keys created outside this instance
        lds.clear = function() {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            var _keysWhacked = 0
                , _localStorageKey
                , _ourKey
                , _oldValue
                , _oldType
                , _keyPrefix = _getKeyPrefix()
            ;

            // loop through all localStorage keys and whack the ones prefixed for this instance
            for( var i = localStorage.length; i--; ) {
                _localStorageKey = localStorage.key( i );

                if( _localStorageKey.indexOf( _keyPrefix ) !== -1 ) {
                    _ourKey = _localStorageKey.replace( _keyPrefix, '' );

                    _oldValue = _get( _getPrefixedKey( _ourKey ) );
                    _oldType  = this.showtype( _ourKey );

                    localStorage.removeItem( _localStorageKey );
                    _keysWhacked++;

                    // trigger our "localDataStorage" event with some data
                    _sendLocalDataStorageEvent( 'remove all keys', 'clear', _ourKey, undefined, _oldValue, undefined, _oldType, undefined, _keyPrefix );
                } 
            }

            return _keysWhacked + ( _keysWhacked === 1 ? ' key removed' : ' keys removed' );
        }

        // returns a count of duplicate key values, if any
        lds.countdupes = function() {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _showDupes().length;
        }

        // returns compressed text
        lds.crunch = function( _text ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _crunch( _text );
        }

        // boolean test whether value exists as native localStorage string
        lds.forcehasval = function( value ) {
            var _return = false;

            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            for( var i = 0, l = localStorage.length; i < l; i++ ) {
                if( value == localStorage.getItem( localStorage.key( i ) ) ) { _return = true; }
            }

            return _return;
        } 

        // get the key, but neither perform type checking nor attempt to restore data type based on composition
        lds.forceget = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return localStorage.getItem( _getPrefixedKey( key ) );
        }

        // set the key, but neither perform type checking nor embed flags based on composition 
        lds.forceset = function( key, value ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key   === 'undefined' ) { throw new Error( txt1 ); }
            if( typeof value === 'undefined' ) { throw new Error( txt2 ); }

            var _oldValue   = _get( _getPrefixedKey( key ) )
                , _oldType  = this.showtype( key )
                , _newValue = value
                , _newType  = _convertToString( value )[ 1 ]
            ;

            value += '';
            _setKeyValuePair( _getPrefixedKey( key ), value );

            // trigger our "localDataStorage" event with some data
            if( JSON.stringify( _oldValue ) !== JSON.stringify( _newValue ) || _oldType !== _newType ) {
                if( typeof _oldValue === 'undefined' ) {
                    _sendLocalDataStorageEvent( 'create new key', 'forceset', undefined, key, _oldValue, _newValue, _oldType, _newType, 'string' );
                } else {
                    _sendLocalDataStorageEvent( 'key value change', 'forceset', key, undefined, _oldValue, _newValue, _oldType, _newType, 'string' );
                }
            }
        }

        // gets value of key, respecting its type if set by this utility;
        // otherwise returns obvious object if it can be deduced,
        // else returns typical localStorage string
        // fails silently returning undefined if key does not exist
        lds.get = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _get( _getPrefixedKey( key ) );
        }

        // returns the "global" scramble key
        lds.getscramblekey = function() {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _scrambleKey;
        }

        // boolean check whether key exists (under this prefix in this domain)
        lds.haskey = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _haskey( _getPrefixedKey( key ) );
        }

        // boolean check whether value exists (under this prefix in this domain)
        lds.hasval = function( value ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _hasval( value );
        }

        // boolean helper functions...
        lds.isarray = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return ( 'array' === _getValueType( _getPrefixedKey( key ) ) ); 
        }
        lds.isboolean = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return ( 'boolean' === _getValueType( _getPrefixedKey( key ) ) ); 
        }
        lds.isdate = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return ( 'date' === _getValueType( _getPrefixedKey( key ) ) ); 
        }
        lds.isfloat = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return ( 'float' === _getValueType( _getPrefixedKey( key ) ) ); 
        }
        lds.isinteger = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return ( 'integer' === _getValueType( _getPrefixedKey( key ) ) ); 
        }
        lds.isnull = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return ( 'null' === _getValueType( _getPrefixedKey( key ) ) ); 
        }
        lds.isnumber = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return (
                'float'   === _getValueType( _getPrefixedKey( key ) )
                ||
                'integer' === _getValueType( _getPrefixedKey( key ) )
            ); 
        }
        lds.isobject = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return ( 'object' === _getValueType( _getPrefixedKey( key ) ) ); 
        }
        lds.isstring = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return ( 'string' === _getValueType( _getPrefixedKey( key ) ) ); 
        }

        // returns either
        // a) total bytes of the specified key name (not its value), or
        // b) total bytes of all keys if no key specified
        lds.keybytes = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) {
                return _describeSize( _kbytes() );
            } else {
                return _describeSize( _kbytes( _getPrefixedKey( key ) ) );    
            }
        }

        // returns a count of keys (under this prefix in this domain)
        lds.keys = function() {
            var _key = ''
                , _tally = 0
            ;

            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            // loop through all localStorage keys and count the ones prefixed for this instance
            for( var i = localStorage.length; i--; ) {
                _key = localStorage.key( i );
                if( _key.indexOf( _getKeyPrefix() ) !== -1 ) { _tally++; }
            }

            return _tally;
        }
        
        // get an object showing duplicate values, their keys, and counts 
        lds.listdupes = function() {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _getDuplicates();
        }

        // deletes existing key
        lds.remove = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }

            var _oldValue   = _get( _getPrefixedKey( key ) )
                , _oldType  = this.showtype( key )
            ;

            if( _haskey( _getPrefixedKey( key ) ) ) {
                localStorage.removeItem( _getPrefixedKey( key ) );

                // trigger our "localDataStorage" event with some data
                _sendLocalDataStorageEvent( 'remove key', 'remove', key, undefined, _oldValue, undefined, _oldType, undefined, _getKeyPrefix() );
                
                return '1 key removed';

            } else {
                return '0 keys removed';
            }
        }

        // rename a key
        lds.rename = function( key, newKey ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key    === 'undefined' ) { throw new Error( "You must supply a key to rename." ); }
            if( !_haskey( _getPrefixedKey( key ) ) ) { throw new Error( "The supplied key does not exist" ); }
            if( typeof newKey === 'undefined' ) { throw new Error( "You must supply a new name for the existing key." ); }
            if( key === newKey ) { throw new Error( "Cannot rename an existing key to its current name." )}
            if( _haskey( _getPrefixedKey( newKey ) ) ) { throw new Error( "Cannot perform rename, as " + newKey + " already exists." ); }


            var _oldValue   = _get( _getPrefixedKey( key ) )
                , _oldType  = this.showtype( key )
                , _newValue = _convertToString( _oldValue )[ 0 ]
            ;

            localStorage.removeItem( _getPrefixedKey( key ) );
            _setKeyValuePair( _getPrefixedKey( newKey ), _newValue );

            _sendLocalDataStorageEvent( 'key name change', 'rename', key, newKey, _oldValue, _oldValue, _oldType, _oldType, _getKeyPrefix() );
        }

        // gets value of obfuscated key
        // fails silently returning undefined if key does not exist
        lds.safeget = function( key, userScrambleKey ) {
            var value;

            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( _haskey( _getPrefixedKey( key ) ) ) {
                value = localStorage.getItem( _getPrefixedKey( key ) );

                if( typeof userScrambleKey === 'undefined' ) {
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
        lds.safeset = function( key, value, userScrambleKey ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key ===   'undefined' ) { throw new Error( txt1 ); }
            if( typeof value === 'undefined' ) { throw new Error( txt2 ); }

            var _scrambleType = ''
                , _oldValue = ( this.forceget( key ) === null ? undefined : this.forceget( key ) ) 
                , _oldType  = this.showtype( key )
                , _newValue = ''
                , _newType  = 'scrambled key'
            ;

            value = _convertToString( value )[ 0 ];

            if( typeof userScrambleKey === 'undefined' ) {
                value = _shuffleString( value, _scrambleKey, key );
                value = _xorString(     value, _scrambleKey, key );

                _scrambleType = ' using global scramble key';
                //_oldValue  = this.safeget( key, _scrambleKey );

            } else {
                value = _shuffleString( value, userScrambleKey, key );
                value = _xorString(     value, userScrambleKey, key );

                _scrambleType = ' using user scramble key';
                //_oldValue  = this.safeget( key, userScrambleKey );
            }

            //_newValue = value; //this.forceget( key ); //value;

            _setKeyValuePair( _getPrefixedKey( key ), value );    

            _newValue = this.forceget( key ); //value;


            // trigger our "localDataStorage" event with some data
            if( _oldValue !== _newValue ) {
                if( typeof _oldValue === 'undefined' ) {
                    _sendLocalDataStorageEvent( 'create new key'   + _scrambleType, 'safeset', undefined, key, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
                } else {
                    _sendLocalDataStorageEvent( 'key value change' + _scrambleType, 'safeset', key, undefined, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
                }
            }
        }

        // sets key to value, respecting the data type
        lds.set = function( key, value ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key ===   'undefined' ) { throw new Error( txt1 ); }
            if( typeof value === 'undefined' ) { throw new Error( txt2 ); }

            var _oldValue   = _get( _getPrefixedKey( key ) )
                , _oldType  = this.showtype( key )
                , _newValue = value
                , _newType  = _convertToString( value )[ 1 ]
            ;

            value = _convertToString( value )[ 0 ];
            _setKeyValuePair( _getPrefixedKey( key ), value );

            // trigger our "localDataStorage" event with some data, only if a new key was created or an existing key was changed
            if( JSON.stringify( _oldValue ) !== JSON.stringify( _newValue ) || _oldType !== _newType ) {
                if( typeof _oldValue === 'undefined' ) {
                    _sendLocalDataStorageEvent( 'create new key', 'set', undefined, key, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
                } else {
                    _sendLocalDataStorageEvent( 'key value change', 'set', key, undefined, _oldValue, _newValue, _oldType, _newType, _getKeyPrefix() );
                }
            }
        }

        // set the "global" scramble key
        lds.setscramblekey = function( _scrambleKey ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof _scrambleKey === 'undefined' ) { throw new Error( txt4 ); }
            _setScramblekey( _scrambleKey );
        }

        // returns an array of duplicate key values, if any
        lds.showdupes = function() {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _showDupes();
        }

        // show key of value, returns first found sorted alphabetically
        // this is the complement to 'get' (get value of key)
        lds.showkey = function( value ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof value === 'undefined' ) { throw new Error( txt3 ); }

            var _tempVal = ''
                , tempArray = new Array()
                , _tempKey = ''
                , _tk = 0
            ;

            // loop through all localStorage keys and pull out the ones prefixed for this instance
            for( var i = 0, l = localStorage.length; i < l; i++ ) {
                _tempKey = localStorage.key( i );
                
                if( _tempKey.indexOf( _getKeyPrefix() ) !== -1 ) {
                    tempArray[ _tk++ ] = _tempKey;
                }
            }

            tempArray.sort();   // maybe unnecessary

            for( var i = 0, l = tempArray.length; i < l; i++ ) {
                _tempKey = tempArray[ i ];
                _tempVal = _get( _tempKey );

                if( JSON.stringify( _tempVal ) === JSON.stringify( value ) ) {
                    return _stripPrefix( _tempKey );
                }
            }

            return undefined;
        }

        // get all the keys matching value
        lds.showkeys = function( value ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof value === 'undefined' ) { throw new Error( txt3 ); }

            var _dupeObject = _getDuplicates()
                , _len = _dupeObject.dupecount
                , _val = JSON.stringify( value )
                , _test = ''
            ;

            for( var i = 0; i < _len; i++ ) {
                _test = _dupeObject.dupes[ i ].value;
                _test = JSON.stringify( _test );

                if( _val === _test ) { return _dupeObject.dupes[ i ].keys; }
            }

            return undefined;
        }                   

        // returns the full internal prefix used for all keys
        lds.showprefix = function() {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _prefix + '.';
        }

        // returns data type of key value
        lds.showtype = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) { throw new Error( txt1 ); }
            return _getValueType( _getPrefixedKey( key ) ); 
        }

        // returns count of codepoints in key's value (not length, not byte count, not grapheme count)
        lds.size = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( _haskey( _getPrefixedKey( key ) ) ) {
                return _getCodePointCount( _get( _getPrefixedKey( key ) ) );
            }
        }

        // sets key to value, respecting the data type; will not overwrite an existing key
        lds.softset = function( key, value ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key   === 'undefined' ) { throw new Error( txt1 ); }
            if( typeof value === 'undefined' ) { throw new Error( txt2 ); }

            var _newType  = _convertToString( value )[ 1 ];

            if( !_haskey( _getPrefixedKey( key ) ) ) {
                _setKeyValuePair( _getPrefixedKey( key ), value );

                // trigger our "localDataStorage" event with some data
                _sendLocalDataStorageEvent( 'create new key', 'softset', undefined, key, undefined, value, undefined, _newType, _getKeyPrefix() );
            }
        }

        // returns decompressed text
        lds.uncrunch = function( _crunchedText ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            return _uncrunch( _crunchedText );
        }

        // get total bytes of the specified key's value, or total bytes of all key values if no key specified
        // storage requirements for the embedded flags are not considered, just the raw data
        lds.valbytes = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) {
                return _describeSize( _vbytes() );
            } else {
                return _describeSize( _vbytes( _getPrefixedKey( key ) ) );    
            }
        }

        // get total bytes of the specified key's value, or total bytes of all key values if no key specified
        // storage requirements for the embedded flags are calculated
        lds.valbytesall = function( key ) {
            if( !__storageIsAvailable ) { return __storageIsAvailable; }

            if( typeof key === 'undefined' ) {
                return _describeSize( _vbytesAll() );
            } else {
                return _describeSize( _vbytesAll( _getPrefixedKey( key ) ) );    
            }
        }

        lds.version = _version;

        var _keyNameOverhead    = _describeSize( _getByteCount( _prefix + '.' )     )
            , _keyNameOverhead2 = _describeSize( _getByteCount( _prefix + '.' ) * 2 )
        ;


        (function() {

            // initialization checks and feedback
            var _keysExist = false
                , _key
            ;

            if( _userswitch && _userswitch.indexOf( '/q' ) !== -1 ) {
            } else {

                if( __storageIsAvailable ) {
                 
                    if( typeof _storageKeyPrefix === 'undefined' ) {
                        console.info( 'No prefix specified. Creating a %cgnarly %crandom prefix for use --> %c' + _prefix + '.', 'font-style: italic;', 'font-style: normal;', 'font-weight: bold;' );
                    
                    } else
                    if( _storageKeyPrefix === '' ) {
                        console.info( 'Empty prefix given, but a usable prefix is %cstrongly recommended%c to organize keys!', 'text-decoration: underline;', 'text-decoration: none;' );
                    
                    } else {
                        for( var i = 0, l = localStorage.length; i < l; i++ ) {
                            _key = localStorage.key( i );
                            if( _key.indexOf( _prefix + '.' ) !== -1 ) {
                                _keysExist = true;
                                break;
                            } 
                        }

                        if( _keysExist ) {
                            console.warn( '%cAttention! %cKeys with this prefix already exist in localStorage for this domain!', 'color: red; font-weight: bold;', 'color: red;' );
                        } else {
                            console.log( 'Instantiated. Prefix adds ' + _keyNameOverhead + ' to every key name (stored using ' + _keyNameOverhead2 + ').' );
                        }
                    }

                } else {
                    console.warn( '%cAttention! Cannot access localStorage! %cBailing out...', 'color: red; font-weight: bold;', 'color: red;' );
                }
            }
            /////////////////////////////////////

        })()

        return lds;

    })( _specifiedPrefix, _switch );
};