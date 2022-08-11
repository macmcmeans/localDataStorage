# Memory Requirements

👉🏻 **Return to main** [**Wiki**](https://github.com/macmcmeans/localDataStorage/wiki/Memory-Requirements)<br><br>

There is a difference between the memory required to store a key value and the memory consumed in the process. For JavaScript, _consumption_ is doubled that of _storage_.

The following table illustrates memory storage and consumption, for both a key name and its value, as well as the available methods for determining each:

Prefix | Example | Key<br>Name | Key<br>Memory<br>Storage<br>_[keybytes](.keybytes)_ | Full Key<br>Memory<br>Storage&nbsp;⑴<br>_[keybytesall](.keybytesall)_ | Full Key<br>Memory<br>Consumed<br>_[keybytesmem](.keybytesmem)_ | Data<br>Type | Data<br>Value | Internally<br>Stored As | Value<br>Memory<br>Storage<br>_[valbytes](.valbytes)_ | Full Value<br>Memory<br>Storage&nbsp;⑵<br>_[valbytesall](.valbytesall)_ | Full Value<br>Memory<br>Consumed<br>_[valbytesmem](.valbytesmem)_
:-----:| :-----: | :-----: | :-----: | :-----: | :----: | :----: | :-----: | :-----: | :-----: | :-----: | :-----:
lds-1.| _.set( 'skey1', '["x"]' )_       | skey1 | 5 bytes | 11 bytes | 22 bytes | Array  | ["x"]   | ["x"]�   | 5 bytes | 6 bytes  | 12 bytes
☝    | _.set( 'skey1', 12n )_           | ☝    | ☝       | ☝       | ☝       | BigInt  | 12n     | 12�      | 2 bytes | 3 bytes  | 6 bytes
☝    | _.set( 'skey1', true )_          | ☝    | ☝       | ☝       | ☝       | Boolean | true    | 1�       | 1 byte  | 2 bytes  | 4 bytes
☝    | _.set( 'skey1', false )_         | ☝    | ☝       | ☝       | ☝       | Boolean | false   | 0�       | 1 byte  | 2 bytes  | 4 bytes
☝    | _.set( 'skey1', Date() )_        | ☝    | ☝       | ☝       | ☝       | Date    |  ~      | ZVRnbZS� | 7 bytes | 8 bytes  | 16 bytes
☝    | _.set( 'skey1', 19.99 )_         | ☝    | ☝       | ☝       | ☝       | Float   | 19.99   | 19.99�   | 5 bytes | 6 bytes  | 12 bytes
☝    | _.set( 'skey1', 1234 )_          | ☝    | ☝       | ☝       | ☝       | Integer | 1234    | 1234�    | 4 bytes | 5 bytes  | 10 bytes
☝    | _.set( 'skey1', null )_          | ☝    | ☝       | ☝       | ☝       | null    | null    | null�    | 4 bytes | 5 bytes  | 10 bytes
☝    | _.set( 'skey1', {'a':1} )_       | ☝    | ☝       | ☝       | ☝       | Object  | {'a':1} | {'a':1}� | 7 bytes | 8 bytes  | 16 bytes
☝    | _.set( 'skey1', 'lds' )_         | ☝    | ☝       | ☝       | ☝       | String  | 'lds'   | lds�     | 3 bytes | 4 bytes  | 8 bytes
☝    | _.set( 'skey1', 'test string' )_ | ☝    | ☝       | ☝       | ☝       | Compressed<br>String | 'this is some string data' | \x9B8\x17³l>ÃF¥'þa�&nbsp;⑷ | 17 bytes | 18 bytes | 36 bytes&nbsp;⑶

<br><br>
**Footnotes:**<br>
⑴ includes the namespace prefix (6 bytes, in this example)<br>
⑵ includes the data type marker flag (always 1 byte)<br>
⑶ text compression—even on a small scale—makes an impact (uncompressed this string consumes 24 bytes, not 17)<br>
⑷ note that string length is inconsequential (13 in this case); for storage the only metric that counts is byte count
