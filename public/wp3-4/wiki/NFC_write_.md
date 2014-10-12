write[¶](#write)
================

``` {.webidl .prettyprint}
  void write(NfcNdefRecord[] ndefMessage,
             SuccessCallBack success, FailCallBack fail);
```

This method can be called on an open NFC tag to write an NDEF message.
It will fail if the tag is read-only.

