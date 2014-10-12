Set Read Only[¶](#Set-Read-Only)
================================

To prevent further modifications to a Tag you can do the following:

``` {.javascript .prettyprint}
  tag.makeReadOnly(success, fail);

...

function success ()
{
  console.log("successfully make Tag read-only");
}

function fail ()
{
  console.log("failed to make Tag read-only");
}
```
