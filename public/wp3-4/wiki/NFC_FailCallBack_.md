FailCallBack[¶](#FailCallBack)
==============================

``` {.webidl .prettyprint}
  // call back with associated operation has failed
  callback FailCallBack = void ();
```

This is a call back for notifying the failure of an operation such as
registering a listener for the presence of NFC tags.

*Should this be extended to pass some information on the nature of the
failure, assuming that such information is available from the underlying
implementation?*

