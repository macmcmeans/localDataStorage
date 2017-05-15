# localDataStorage
localDataStorage is an interface for the HTML5 localStorage API that endeavors to
1) respect native data types that are set/get to storage (not just strings),
2) provide lightweight data obfuscation,
3) automatically compress strings,
4) facilitate query by key (name) as well as query by (key) value, and 
5) encourage segmented shared storage within the same domain by prefixing keys.


Primary usage is the ability to seamlessly set/get keys for native data type values (array, boolean,
date, float, integer, object or string). While it's trivial to perform conversion, having it handled by the
storage interface itself is exceptionally convenient. Javascript supports several data types, and
extending them into localStorage seemed a logical step. Tracking them requires 2 bytes of memory
overhead, per key value.

Key values may be obfuscated using safeset/safeget. A master scramble key may be set globally, or
individual scramble keys may be used per each safeset/safeget call. Scramble keys can be any value, and
of any type (array, boolean, date, float, integer, etc.) Key values that have been safeset with an
individual scramble key can always be retrieved, but cannot be reconstructed apart from the same
individual scramble key with which they were obfuscated. The global scramble key is stored in the
interface as a convenience, but individual scramble keys are not. The global scramble key may be accessed
using setscramblekey/getscramblekey methods. Scrambling is not encryption. For example, no attempt is
made to conceal data lengths by artificially padding to a minimum amount. This would be counter-productive
to minimizing memory usage.

Data strings are intelligently compressed on-the-fly. This means strings are first analyzed to determine
whether compression would lower the actual byte count in storage, and if so, they are silently
compressed/decompressed. This works well for common English texts (short-length, 7-bit ASCII), and not
much else.

One may query by key name (to get the key's value), or query by value (to get any matching key names) using
showkey, or query by existence using haskey. Stored values can be checked for duplicates. There are
methods to prevent writing over an existing key (softset), and for deleting a key immediately upon
retrieval (chopget). Memory usage can be analyzed against key values and key names, and key values can
be checked for their data type. Lastly, bypass methods (forceset/forceget) permit accessing
localStorage directly. 

Since HTML5 localStorage is accessible to all processes running in the browser for the domain visited,
it is advisable to have an interface that segments access, as much as possible. To that end, the use of
prefixed keys is strongly encouraged, and localDataStorage will only read/write/delete its own keys.
Unlike the HTML5 API, there is no method in this interface to delete all keys in the domain, only all
prefixed keys.

Multiple instances of localDatStorage can be run against the same domain at the same time. It is
multi-byte unicode-safe. 


DEPENDENCIES:
None.


EXAMPLE USAGE:

<b> Create an instance of localDataStorage using the specified key name prefix</b>
> localData = localDataStorage( 'passphrase.life' )

-->  Instantiated. Prefix adds 16.00 bytes to every key name (stored using 32.00 bytes.   


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
<b> set/get key, bypassing any data type embedding (via localStorage API)</b>
> localData.forceset( 'api', 13579 )

// prep;  all values are stored as strings

> localData.forceget( 'api' )

-->  "13579"

> localData.forceget( 'key6' )

-->  ""2017-05-01T18:39:11.443Z""



<br>&nbsp;<br>
<b> find duplicate key values</b>
> localData.set( 'key8', 'data' )

// prep; now key4 & key8 have the same values

> localData.countdupes()

-->  1

> localData.showdupes()

-->  ["data"]; this key value occurs twice minimum

<br>&nbsp;<br>
// handling duplicates; localData vs localStorage API

> localData.forceset( 'dupekey1', 1234 )                      

// prep; will be stored as a string

> localData.forceset( 'dupekey2', '1234' )                    

// prep; will be stored as a string

<br>&nbsp;<br>
// look for duplicates (among localStorage keys)

> localData.showdupes()                                       

-->  [1234, "data"]

<br>&nbsp;<br>
// remove a key

> localData.remove( 'dupekey1' )                              

// prep

> localData.remove( 'dupekey2' )                              

// prep

> localData.remove( 'key8' )                                  

// prep

<br>&nbsp;<br>
> localData.set( 'dupekey3', 1234 )                           

// stored as string, but recognized as integer

> localData.set( 'dupekey4', '1234' )                         

// stored and recognized as string

<br>&nbsp;<br>
// look for duplicates (among localData types)

> localData.showdupes()                                       

-->  []
<br><i>since data types are respected, no dupes were found</i>                

<br>&nbsp;<br>
> localData.set( 'dupekey1', 1234 )                           

// prep

> localData.set( 'dupekey2', '1234' )                         

// prep

> localData.set( 'key8', 'data' )                             

// prep

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

// prep

> localData.hasval( '89.221' )                                

-->  false
<br><i>the float (number) type does not match the string type</i>

<br>&nbsp;<br>
> localData.forceset( 'LSkey1', 98765 )                       

// prep
<br><i>set key value using localStorage API (handled as string)</i>

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

// prep

> localData.showtype( 'key7' )                                

-->  "object"



<br>&nbsp;<br>
<b> boolean check a key's value type</b>
> localData.isArray( 'key5' )                                 

-->  true

> localData.isFloat( 'testkey' )                              

-->  true

> localData.isNumber( 'testkey' )                             

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
<b> obfuscate key values using global scramble key</b>
> localData.getscramblekey()                                  

-->  123456789; default global scramble key (integer)

> localData.safeset( 'ss1', '007' )                           

-->  (stored scrambled)

> localData.safeget( 'ss1' )                                  

-->  "007"

<br>&nbsp;<br>
> localData.setscramblekey( new Date() )                      

// set new scramble to the date now, as date object

> localData.getscramblekey()                                  

-->  Mon May 01 2017 22:28:11 GMT-0400 (Eastern Daylight Time)

<br>&nbsp;<br>
> localData.safeget( 'ss1' )                                  

-->  (garbled data); different global scramble key used for retrieval

<br>&nbsp;<br>
// obfuscate using individual scramble key

> localData.safeset( 'ss2', 'test', {'scramble': ['key']} )   

-->  (stored scrambled); scramble keys can be any value and of any data type

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

// key4 no longer exists

> localData.get( 'key4' )                                     

-->  undefined

> localData.get( 'key4-renamed' )                             

-->  "data"

<br>&nbsp;<br>
// scrambled keys cannot be renamed; the key name and the value produce the obfuscation

> localData.rename( 'ss1', 'ss1-renamed' )                    

// key ss1 no longer exists

> localData.safeget( 'ss1' )                                  

-->  undefined

> localData.safeget( 'ss1-renamed', 123456789 )               

-->  (garbled data)
<br><i>this was the correct scramble key for the 'ss1' key, but not for the 'ss1-renamed' key</i>

<br>&nbsp;<br>
> localData.rename( 'ss1-renamed', 'ss1' )                    
// key ss1-renamed no longer exists

> localData.safeget( 'ss1-renamed' )                          

-->  undefined

> localData.safeget( 'ss1', 123456789 )                       

-->  "007"                 



<br>&nbsp;<br>
<b> how localDataStorage reacts to values set via the localStorage API</b>
> localData.forceset( 'lsAPIkey', 77.042 )                    

// prep

> localData.forceget( 'lsAPIkey' )                            

-->  "77.042"

> localData.get( 'lsAPIkey' )                                 

-->  77.042
<br><i>localData will coerce value to number when possible</i>

> localData.showtype( 'lsAPIkey' )                            

-->  "presumed number"
<br><i>('presumed' because value was coerced, not set)</i>   



<br>&nbsp;<br>
<b> there are several ways to track memory usage</b>
// show memory required to store key value
> localData.showtype( 'dupekey4' )                            

-->  "string";  prep

> localData.get( 'dupekey4' )                                 

-->  "1234"

> localData.size( 'dupekey4' )                               

-->  4

> localData.valbytes( 'dupekey4' )                            

-->  "8.00 bytes"
<br><i>localStorage uses 16 bits to store 1 byte (only the data is counted)</i>

> localData.valbytesall( 'dupekey4' )                         

-->  "12.00 bytes"
<br><i>now we include the 2-byte embedded data type marker (total data)</i> 

<br>&nbsp;<br>
// show memory required to store key name
> localData.keybytes( 'dupekey4' )                            

-->  "48.00 bytes"
<br><i>the prefix ('passphrase.life' + '.') is 32 bytes, plus key name is 16 bytes more ('dupekey4' ), summing 48 bytes</i>

// show memory used by key-value pair combo

// key name + raw value

> localData.bytes( 'dupekey4' )                               

-->  "56.00 bytes"
<br><i>8 bytes for raw value and 48 bytes for name, i.e. valbytes() + keybytes()</i>

<br>&nbsp;<br>
// key name + total value (include value marker byte)
> localData.bytesall( 'dupekey4' )                            

-->  "60.00 bytes"
<br><i>now includes the embedded data type marker (it's 2 bytes, stored as 4)</i>



<br>&nbsp;<br>
<b> memory usage of compressed key values</b>
> localData.set( 'crunchedkey', 'this is some test data' )    

-->  prep; only strings can be compressed

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

-->  prep

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

-->  prep; 5 graphemes (5 codepoints in 19 bytes)          

> localData.get( 'unicodeKey2' )                              

-->  "🕔🔚🔈🔔♅"

> localData.size( 'unicodeKey2' )                             

-->  5

> localData.valbytes( 'unicodeKey2' )                        

-->  "38.00 bytes"

> localData.valbytesall( 'unicodeKey2' )                      

-->  "42.00 bytes"

<br>&nbsp;<br>
// emojis used for key name, key value & individual scramble key

> localData.safeset( '👊🌐🔷', '💕🚻', '🔙' )

> localData.safeget( '👊🌐🔷', '🔙' )                             

-->  "💕🚻"

<br>&nbsp;<br>
// emojis used in global scramble key

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

-->  prep; create a key in the same domain outside localData

> localData.clear()                                           

-->  "24 keys removed"

> localStorage.getItem( 'API-key' )                           

-->  "test data"
<br><i>any unprefixed localStorage keys are untouched</i>

> localData.safeget( 'Ron Wyden' )                           

-->  undefined
<br><i>all localData keys have been removed</i>




TESTED:
1) Google Chrome on Win64
