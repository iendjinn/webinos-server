NDEF Message[¶](#NDEF-Message)
==============================

``` {.webidl .prettyprint}
  // the properties for NDEF records
  // definitions come from the NFC Forum
  interface NfcNdefRecord {
    readonly attribute DOMString tnf;
    readonly attribute DOMString type;
    readonly attribute DOMString id;
    readonly attribute byte[] payload;
  };
```

An NDEF message is an array of records as defined above.

