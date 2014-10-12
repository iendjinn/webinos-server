bytesToString[¶](#bytesToString)
================================

``` {.webidl .prettyprint}
  DOMString bytesToString(byte[] data);
```

This is a helper method for converting byte arrays from NDEF messages
into strings. This performs the inverse mapping from stringToBytes, and
maps a big-endian byte array into a JavaScript string consisting of 16
bit unicode characters.

