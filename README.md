# localDataStorage
localDataStorage is an interface for the HTML5 localStorage API that endeavors to
1) respect native data types that are set/get to storage (not just strings),
2) provide lightweight data obfuscation,
3) automatically compress strings,
4) facilitate query by key (name) as well as query by (key) value, and 
5) encourage segmented shared storage within the same domain by prefixing keys.
