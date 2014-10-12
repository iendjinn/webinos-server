addUriTypeListener[¶](#addUriTypeListener)
==========================================

This is a method for registering a call back for NFC tags with NDEF URI
records.

``` {.webidl .prettyprint}
  // add listener for NDEF tags with URI record(s)
  void addUriTypeListener(NfcEventCallBack listener,
      SuccessCallBack success, FailCallBack fail);
```

It makes use of the success and failure call back pattern. These call
backs are defined in a subsequent section.

