NfcEventCallBack[¶](#NfcEventCallBack)
======================================

``` {.webidl .prettyprint}
  // call back for NDEF events
  callback NfcEventCallBack = void (NfcNdefEvent event);
```

This is a call back for notifying the presence of NFC tags. The event
property is defined as follows:

``` {.webidl .prettyprint}
  // the NFC event has a single property -- the NFC Tag
  interface NfcNdefEvent : DOMEvent {
    readonly attribute NfcTag tag; 
  };
```
