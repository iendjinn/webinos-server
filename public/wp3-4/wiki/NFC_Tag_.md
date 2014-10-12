NFCTag[¶](#NFCTag)
==================

The NFCTag interface defines properties and methods for NFC tags.

``` {.webidl .prettyprint}
  // the properties and methods for Tags
  interface NfcTag {
    readonly attribute NfCTagTech tech;  
    readonly attribute NfcNdefRecord[] ndefMessage;

    attribute CloseCallBack close;

    void write(NfcNdefRecord[] ndefMessage,
               SuccessCallBack success, FailCallBack fail);

    void makeReadOnly(SuccessCallBack success, FailCallBack fail);
  };
```
