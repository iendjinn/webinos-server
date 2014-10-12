Writing[¶](#Writing)
====================

To write to a tag having discovered one:

``` {.javascript .prettyprint}
// called when the Tag is discovered
function listener (event)
{
  var nfc = Webinos.nfc;

  // read the tag here if you want ...

  // prepare an NDEF message
  var message = [
    nfc.textRecord("Have a nice day!");
  ];

  // and write it back to the Tag
  event.tag.write(message, success, fail);
}

function success ()
{
  console.log("successfully wrote message to Tag");
}

function fail ()
{
  console.log("failed to write message to Tag");
}
```

There could be more than one Tag in range, e.g. you might have several
in your wallet. This approach allows you to write back to the same Tag
that you just read.

