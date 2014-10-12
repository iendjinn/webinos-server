shareTag[¶](#shareTag)
======================

This is a method for setting a device into a sharing mode for pushing an
NDEF message to another NDEF device.

``` {.webidl .prettyprint}
  // set device to push NDEF message to another NDEF device
  void shareTag(NfcNdefRecord[] message, SuccessCallBack success, FailCallBack fail);
```

It makes use of the success and failure call back pattern. These call
backs are defined in a subsequent section.

