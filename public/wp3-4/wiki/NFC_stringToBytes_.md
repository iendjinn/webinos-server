stringToBytes[¶](#stringToBytes)
================================

``` {.webidl .prettyprint}
  byte[] stringToBytes(DOMString string);
```

This is a helper method for converting strings to byte arrays for use in
NDEF messages. It maps 16 bit Unicode characters into a byte array in
the big-endian manner with the most significant byte appearing first.

