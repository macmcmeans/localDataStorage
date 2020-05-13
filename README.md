# localDataStorage
This is a synchronous javascript interface for the HTML5 localStorage API that--
1) transparently sets/gets key values using data "types" such as Array, Boolean, Date, Float, Integer, Null, Object and String;
2) provides lightweight data obfuscation;
3) intelligently compresses strings automatically;
4) facilitates query by key (name), query by (key) value and query by existence; 
5) enforces segmented shared storage within the same domain by prefixing keys; and
6) allows you to monitor localStorage change events on the same page/tab.

<br>&nbsp;<br>
Version 1.3.0<br>
Author: W. "Mac" McMeans<br>
Date: 4 MAY 2020
<br>&nbsp;<br>

# Script tag usage
```
<script src="localDataStorage-1.3.0.min.js"></script>
```

## Application:
Primary usage is the ability to seamlessly *set/get* keys for typically-used data types.
While it's trivial to perform conversion, having it handled by the storage interface itself is
exceptionally convenient. Javascript supports several primitives, and extending them into
localStorage seemed a logical step. Tracking them requires 2 bytes of memory overhead, per key value.

Key values may be obfuscated using *safeset/safeget*. A master scramble key may be set globally, or
individual scramble keys may be used per each *safeset/safeget* call. Scramble keys can be any value, and
of any type (array, boolean, date, float, integer, etc.) Key values that have been *safeset* with an
individual scramble key can always be retrieved, but cannot be reconstructed apart from the same
individual scramble key with which they were obfuscated. The global scramble key is stored in the
interface as a convenience, but individual scramble keys are not. The global scramble key may be accessed
using *setscramblekey/getscramblekey* methods.

Scrambling is not encryption. For example, no attempt is made to conceal data lengths by artificially padding
to a minimum length. This would be counter-productive to minimizing memory usage.

Strings are intelligently compressed on-the-fly. This means they are first analyzed to determine
whether compression would lower the actual byte count in storage, and if so, are silently
compressed/decompressed. This works well for common English texts (short-length, 7-bit ASCII), and not
much else.

One may query by key name (to get the key's value), or query by value (to get any matching key names) using
*showkey*, or query by existence using *haskey*. Stored values can be checked for duplicates. There are
methods to prevent writing over an existing key *(softset)*, and for deleting a key immediately upon
retrieval *(chopget)*. Memory usage can be analyzed against key values and key names, and key values can
be checked for their data type. Lastly, bypass methods *(forceset/forceget)* permit accessing
localStorage directly. 

Since HTML5 localStorage is accessible to all processes running in the browser for the domain visited,
it is advisable to have an interface that segments access, as much as possible. To that end, the use of
prefixed keys is strongly encouraged, and localDataStorage will only read/write/delete its own keys.
Unlike the HTML5 API, there is no method in this interface to delete all keys in the domain, only all
prefixed keys.

The domain of operation for HTML5 localStorage is specific to the protocol, host & port; and multiple
instances of localDataStorage can be run against the same domain at the same time. It is emoji-friendly
😀😆😊😵, which is to say that key values and key names are multi-byte Unicode-safe. 


## Dependencies:
None.
<br>&nbsp;<br>


## Events
The native localStorage change event is... lacking. Per the whims of your browser, a single page isn't permitted
to listen to change events from any process, even if it triggered them. Now, in the event you'd like to listen out
for changes, localDataStorage will let you. localDataStorage fires an event on key value changes, such as those made
by the set, safeset, chopget or remove methods. The event returns an activity timestamp and message, as well as expected
details about the affected key name with its old and new values. The old and new key value data types are also reported.
Code like the following gets it done:

```
function nowICanSeeLocalStorageChangeEvents( e ) {
    console.log(
        "subscriber: "    + e.currentTarget.nodeName + "\n" +
        "timestamp: "     + e.detail.timestamp + " (" + new Date( e.detail.timestamp ) + ")" + "\n" +
        "prefix: "        + e.detail.prefix  + "\n" +
        "message: "       + e.detail.message + "\n" +
        "method: "        + e.detail.method  + "\n" +
        "key: "           + e.detail.key     + "\n" +
        "old value: "     + e.detail.oldval  + "\n" +
        "new value: "     + e.detail.newval  + "\n" +
        "old data type: " + e.detail.oldtype + "\n" +
        "new data type: " + e.detail.newtype
    );
};
document.addEventListener(
    "localDataStorage"
    , nowICanSeeLocalStorageChangeEvents
    , false
);

```
<br>&nbsp;<br>


## Wiki:
An incomplete <a href="https://github.com/macmcmeans/localDataStorage.js/wiki">wiki is here</a>.
<br>&nbsp;<br>



## Example usage:

<b> Create an instance of localDataStorage using the specified key name prefix</b>
> localData = localDataStorage( 'passphrase.life' )

-->  Instantiated. Prefix adds 16.00 bytes to every key name (stored using 32.00 bytes).   


<br>&nbsp;<br>
<b> typical set/get calls (data types are respected and returned transparently)</b>
> localData.set( 'key1', 19944.25 )

> localData.get( 'key1' )                                     

-->  19944.25

> localData.set( 'key2', 2519944 )

> localData.get( 'key2' )                                     

-->  2519944

> localData.set( 'key3', true )

> localData.get( 'key3' )                                     

-->  true

> localData.set( 'key4', 'data' )

> localData.get( 'key4' )                                     

-->  "data"

> localData.set( 'key5', [1,2,3,4,9] )

> localData.get( 'key5' )                                     

-->  [1, 2, 3, 4, 9]

> localData.set( 'key6', new Date() )

> localData.get( 'key6' )                                     

-->  Mon May 01 2017 14:39:11 GMT-0400 (Eastern Daylight Time)

> localData.set( 'key7', {'a': [1,2,3] } )

> localData.get( 'key7' )                                     

-->  Object {a: Array(3)}




<br>&nbsp;<br>
<b> get the "size" of a key's value (codepoints)</b>
> localData.size( 'key4' )

-->  4
<br><i>total codepoints in value (not length, not graphemes)</i> 




<br>&nbsp;<br>
<b> results when querying a non-existing key</b>
> localData.forceget( 'non-existing key' )

-->  null
<br><i>same as localStorage.getItem( 'non-existing key' )</i>

> localData.get( 'non-existing key' )

-->  undefined
<br><i>the key is undefined because it does not exist, it is NOT null</i>

> localData.chopget( 'non-existing key' )

-->  undefined

> localData.safeget( 'non-existing key' )

-->  undefined



<br>&nbsp;<br>
<b> read then delete a key</b>
> x = localData.chopget( 'key7' )

-->  Object {a: Array(3)}

> localData.get( 'key7' )

-->  undefined



<br>&nbsp;<br>
<b> don't overwrite an existing key</b>
> localData.softset( 'key4', 'new data' )

> localData.get( 'key4' )

-->  "data"   



<br>&nbsp;<br>
<b> set/get key, bypassing any data type embedding, but still observing key prefixes</b>
> localData.forceset( 'api', 13579 )

<i>all values are stored as strings, in this case under the key passphrase.life.api</i>

> localData.forceget( 'api' )

-->  "13579"

> localData.forceget( 'key6' )

-->  ""2017-05-01T18:39:11.443Z""



<br>&nbsp;<br>
<b> find duplicate key values</b>
> localData.set( 'key8', 'data' )

<i>now key4 and key8 have the same values</i>

> localData.countdupes()

-->  1

> localData.showdupes()

-->  ["data"]
<br><i>this key value occurs twice minimum</i>

<br>&nbsp;<br>
// handling duplicates; localData vs localStorage API

> localData.forceset( 'dupekey1', 1234 )                      

<i>will be stored as a string</i>

> localData.forceset( 'dupekey2', '1234' )                    

<i>will be stored as a string</i>

<br>&nbsp;<br>
// look for duplicates (among localStorage keys)

> localData.showdupes()                                       

-->  [1234, "data"]

<br>&nbsp;<br>
// remove a key

> localData.remove( 'dupekey1' )                              

<i>prep</i>

> localData.remove( 'dupekey2' )                              

<i>prep</i>

> localData.remove( 'key8' )                                  

<i>prep</i>

<br>&nbsp;<br>
> localData.set( 'dupekey3', 1234 )                           

<i>stored as string, but recognized as integer</i>

> localData.set( 'dupekey4', '1234' )                         

<i>stored and recognized as string</i>

<br>&nbsp;<br>
// look for duplicates (among localData types)

> localData.showdupes()                                       

-->  []
<br><i>since data types are respected, no dupes were found</i>                

<br>&nbsp;<br>
> localData.set( 'dupekey1', 1234 )                           

<i>prep</i>

> localData.set( 'dupekey2', '1234' )                         

<i>prep</i>

> localData.set( 'key8', 'data' )                             

<i>prep</i>

<br>&nbsp;<br>
> localData.countdupes()                                      

-->  3

> localData.listdupes()                                       

-->  Object {dupecount: 3, dupes: Object}

> localData.listdupes().dupecount                             

-->  3

> localData.listdupes().dupes                                 

-->  Object {0: Object, 1: Object, 2: Object}

> localData.listdupes().dupes[0]                              

-->  Object {value: 1234, keys: Array(2)}

> localData.listdupes().dupes[0].value                        

-->  1234

> localData.listdupes().dupes[0].keys                         

-->  ["dupekey1", "dupekey3"]



<br>&nbsp;<br>
<b> check if key exists</b>
> localData.haskey( 'dupekey3' )                              

-->  true



<br>&nbsp;<br>
<b> check if value exists</b>
> localData.hasval( 1234 )                                   

-->  true
<br><i>checks value AND data type</i>

<br>&nbsp;<br>
> localData.set( 'testkey', 89.221 )                          

<i>prep</i>

> localData.hasval( '89.221' )                                

-->  false
<br><i>the float (number) type does not match the string type</i>

<br>&nbsp;<br>
> localData.forceset( 'LSkey1', 98765 )

<i>set key value using localStorage API (handled as string)</i>

> localData.forcehasval( 98765 )                              

-->  true

> localData.forcehasval( '98765' )                            

-->  true
<br><i>localStorage API does not discern between data types</i>

<br>&nbsp;<br>
> localData.hasval( 98765 )                                   

-->  true
<br><i>localData attempts to coerce any value not explicity set by it</i> 

> localData.hasval( '98765' )                                 

-->  false
<br><i>localData will first coerce a value to a number, if possible</i>



<br>&nbsp;<br>
<b> show key's value type</b>
> localData.showtype( 'dupekey3' )                            

-->  "integer"

> localData.showtype( 'dupekey4' )                            

-->  "string"

> localData.showtype( 'key1' )                                

-->  "float"

> localData.showtype( 'key3' )                                

-->  "boolean"

> localData.showtype( 'key5' )                                

-->  "array"

> localData.showtype( 'key6' )                                

-->  "date"

> localData.set( 'key7', {'local' : ['d', 'a', 't', 'a']} )   

<i>prep</i>

> localData.showtype( 'key7' )                                

-->  "object"



<br>&nbsp;<br>
<b> boolean check the data type of a key's value</b>
> localData.isarray( 'key5' )                                 

-->  true

> localData.isfloat( 'testkey' )                              

-->  true

> localData.isnumber( 'testkey' )                             

-->  true



<br>&nbsp;<br>
<b> query by key value, not key name (returns first found)</b>
> localData.showkey( 1234 )                                   

-->  "dupekey1"

> localData.showkey( '1234' )                                 

-->  "dupekey2"

<br>&nbsp;<br>
// returns all found

> localData.showkeys( 1234 )                                  

-->  ["dupekey1", "dupekey3"]



<br>&nbsp;<br>
<b>using the global scramble key for obfuscation</b>
> localData.getscramblekey()                                  

-->  123456789
<br><i>default global scramble key (integer)</i>

> localData.safeset( 'ss1', '007' )                           

-->  (stored scrambled)

> localData.safeget( 'ss1' )                                  

-->  "007"

<br>&nbsp;<br>
> localData.setscramblekey( new Date() )                      

// set global scramble key to the current date, as date object

> localData.getscramblekey()                                  

-->  Mon May 01 2017 22:28:11 GMT-0400 (Eastern Daylight Time)

<br>&nbsp;<br>
> localData.safeget( 'ss1' )                                  

-->  (garbled data)
<br><i>different global scramble key used for retrieval</i>

<br>&nbsp;<br>
// using an individual scramble key for obfuscation

> localData.safeset( 'ss2', 'test', {'scramble': ['key']} )   

-->  (stored scrambled)
<br><i>scramble keys can be any value and of any data type</i>

> localData.safeget( 'ss2', {'scramble': ['key']} )           

-->  "test"

<br>&nbsp;<br>
> localData.safeget( 'ss1', 123456789 )                       

->  "007"



<br>&nbsp;<br>
<b> safeget will not retrieve an unscrambled key</b>
> localData.safeget( 'key4' )                                 

-->  (garbled data)



<br>&nbsp;<br>
<b> renaming keys</b>
// non-scambled keys can safely be renamed 

> localData.rename( 'key4', 'key4-renamed' )                  

<i>key4 no longer exists</i>

> localData.get( 'key4' )                                     

-->  undefined

> localData.get( 'key4-renamed' )                             

-->  "data"

<br>&nbsp;<br>
// scrambled keys cannot be renamed: the key name and the value together produce the obfuscation

> localData.rename( 'ss1', 'ss1-renamed' )                    

<i>key ss1 no longer exists</i>

> localData.safeget( 'ss1' )                                  

-->  undefined

> localData.safeget( 'ss1-renamed', 123456789 )               

-->  (garbled data)
<br><i>this was the correct scramble key for the 'ss1' key, but not for the 'ss1-renamed' key</i>

<br>&nbsp;<br>
> localData.rename( 'ss1-renamed', 'ss1' )                    
<i>key ss1-renamed no longer exists</i>

> localData.safeget( 'ss1-renamed' )                          

-->  undefined

> localData.safeget( 'ss1', 123456789 )                       

-->  "007"                 



<br>&nbsp;<br>
<b> how localDataStorage reacts to values set via the localStorage API</b>
> localData.forceset( 'lsAPIkey', 77.042 )                    

<i>always stored as a string by the native API</i>

> localData.forceget( 'lsAPIkey' )                            

-->  "77.042"

> localData.get( 'lsAPIkey' )                                 

-->  77.042
<br><i>localData will coerce value to number when possible</i>

> localData.showtype( 'lsAPIkey' )                            

-->  "presumed number"
<br><i>('presumed' because value was coerced, not set)</i>   



<br>&nbsp;<br>
<b>there are several ways to track memory usage</b>

// show memory required to store key value

> localData.showtype( 'dupekey4' )                            

-->  "string";

> localData.get( 'dupekey4' )                                 

-->  "1234"

> localData.size( 'dupekey4' )                               

-->  4

> localData.valbytes( 'dupekey4' )                            

-->  "8.00 bytes"
<br><i>localStorage uses 16 bits to store 1 byte (only the data is counted)</i>

> localData.valbytesall( 'dupekey4' )                         

-->  "12.00 bytes"
<br><i>now we include the 2-byte embedded marker (total data)</i> 

<br>&nbsp;<br>
// show memory required to store key name
> localData.keybytes( 'dupekey4' )                            

-->  "48.00 bytes"
<br><i>the prefix ('passphrase.life' + '.') is 32 bytes, plus key name is 16 bytes more ('dupekey4' ), yielding 48 bytes</i>

<br>&nbsp;<br>
// show memory used by the key-value pair

// key name + raw value

> localData.bytes( 'dupekey4' )                               

-->  "56.00 bytes"
<br><i>8 bytes for raw value and 48 bytes for name, i.e. valbytes + keybytes</i>

<br>&nbsp;<br>
// key name + total value (include value marker byte)
> localData.bytesall( 'dupekey4' )                            

-->  "60.00 bytes"
<br><i>now includes the embedded data type marker (it's 2 bytes, stored as 4)</i>



<br>&nbsp;<br>
<b> view memory usage of compressed key values</b>
> localData.set( 'crunchedkey', 'this is some test data' )    

<i>only strings can be compressed; other data types will ignore compression</i>

> localData.size( 'crunchedkey' )                             

-->  22

> localData.valbytes( 'crunchedkey' )                         

-->  "44.00 bytes"
<br><i>memory used to store raw string of 22 graphemes (each is 7-bit ASCII)</i>

> localData.valbytesall( 'crunchedkey' )                      

-->  "34.00 bytes"
<br><i>total memory required to store compressed string + embedded data type marker</i>



<br>&nbsp;<br>
<b> unicode-safe data storage</b>
> localData.set( 'unicodeKey1', '😀' )                        

<i>storing an emoji; 1 grapheme (1 codepoint in 4 bytes)</i>          

> localData.get( 'unicodeKey1' )                              

--> "😀"

> localData.size( 'unicodeKey1' )                             

--> 1; one codepoint

> localData.valbytes( 'unicodeKey1' )                         

--> "8.00 bytes"

> localData.valbytesall( 'unicodeKey1' )                     

--> "12.00 bytes"

<br>&nbsp;<br>
> localData.set( 'unicodeKey2', '🕔🔚🔈🔔♅' )

<i>storing 5 graphemes (5 codepoints in 19 bytes)</i>          

> localData.get( 'unicodeKey2' )                              

-->  "🕔🔚🔈🔔♅"

> localData.size( 'unicodeKey2' )                             

-->  5

> localData.valbytes( 'unicodeKey2' )                        

-->  "38.00 bytes"

> localData.valbytesall( 'unicodeKey2' )                      

-->  "42.00 bytes"

<br>&nbsp;<br>
// using emojis for key name, key value and individual scramble key

> localData.safeset( '👊🌐🔷', '💕🚻', '🔙' )

> localData.safeget( '👊🌐🔷', '🔙' )                             

-->  "💕🚻"

<br>&nbsp;<br>
// using emojis in the global scramble key

> localData.setscramblekey( '🎵🎶🔶🔻' )

> localData.safeset( 'Ron Wyden', '.@NSAGov 💻📱📡📞🔎👂👀🔚 #EndThisDragnet' )

> localData.safeget( 'Ron Wyden' )                            

-->  ".@NSAGov 💻📱📡📞🔎👂👀🔚 #EndThisDragnet"



<br>&nbsp;<br>
<b> get tally of keys</b>
> localData.keys()                                            

-->  24



<br>&nbsp;<br>
<b> delete all prefixed keys in the domain (unprefixed localStorage keys are not affected)</b>
> localStorage.setItem( 'API-key', 'test data' )

<i>create a key in the same domain completely outside our instance of localDataStorage</i>

> localData.clear()                                           

-->  "24 keys removed"

> localStorage.getItem( 'API-key' )                           

-->  "test data"
<br><i>any unprefixed localStorage keys are untouched</i>

> localData.safeget( 'Ron Wyden' )                           

-->  undefined
<br><i>all localData keys have been removed</i>




## Tested:
Google Chrome on Win 8.1 (x64)
<br>&nbsp;<br>

## Version notes:
* 1.3.0 - 4 MAY 2020

NEW: Implemented the [Alea RNG](https://github.com/macmcmeans/aleaPRNG). Fixed an issue where scrambled key data would randomly become corrupted. Code cleanup.
<br>&nbsp;<br>

* 1.2.0 - 19 JUN 2017

Check if localStorage is available and, if not, gracefully fails when called. This means that all methods will simply return <i>false</i> instead of nasty type errors.
<br>&nbsp;<br>

* 1.1.0 - 17 MAY 2017

NEW: Add ability to listen to key value change events (in same window/tab).
<br>&nbsp;<br>

* 1.0.0 - 15 MAY 2017

Initial release.
<br>&nbsp;<br>

# License (BSD)
Copyright (c) 2017-2020, W. "Mac" McMeans<br>
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
