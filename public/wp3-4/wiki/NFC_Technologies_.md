NFC Technologies[¶](#NFC-Technologies)
======================================

``` {.webidl .prettyprint}
  // enumeration of tag technologies
  [NoInterfaceObject]
  interface NfCTagTech {
    const DOMString "OTHERS";
    const DOMString "NFCA";
    const DOMString "NFCB";
    const DOMString "NFCF";
    const DOMString "NFCV";
    const DOMString "ISODEP";
    const DOMString "NDEF";
  };
```

This is an enumeration of string constants for the various kinds of NFC
technologies that are generally supported by NFC devices.

