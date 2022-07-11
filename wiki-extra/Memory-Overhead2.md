There is a difference between the memory required to store a key value and the memory consumed in the process. For JavaScript, consumption is doubled that of storage.

The following table illustrates memory storage and consumption, for both a key name and its value, as well as the available methods for determining each:

Prefix | Example | Key<br>Name | Key<br>Memory<br>Storage<br>_[keybytes](.keybytes)_ | Full Key<br>Memory<br>Storage⑴<br>_[keybytesall](.keybytesall)_ | Full Key<br>Memory<br>Consumed<br>_[keybytesmem](.keybytesmem)_ | Data<br>Type | Data<br>Value | Internally<br>Stored As | Value<br>Memory<br>Storage<br>_[valbytes](.valbytes)_ | Full Value<br>Memory<br>Storage⑵<br>_[valbytesall](.valbytesall)_ | Full Value<br>Memory<br>Consumed<br>_[valbytesmem](.valbytesmem)_
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
☝    | _.set( 'skey1', 'test string' )_ | ☝    | ☝       | ☝       | ☝       | Compressed<br>String | 'EM>ÃF' | EM>ÃF� | 6 bytes | 7 bytes | 14 bytes⑶

<br><br>
⑴ includes the namespace prefix (6 bytes, in this example)<br>
⑵ includes the data type marker flag (always 1 byte)<br>
⑶ text compression, even on a small scale, can make an impact (uncompressed this string would consume 22 bytes, not 14)
