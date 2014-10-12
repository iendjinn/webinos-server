API specification update due to new W3C widl specification[¶](#API-specification-update-due-to-new-W3C-widl-specification)
==========================================================================================================================

Introduction[¶](#Introduction)
------------------------------

Web IDL (”widl”) defines the language we use to define our APIs. Since
task 3.2 W3C has updated the Web IDL specification.

Here is the latest W3C Web IDL specification: "Web IDL W3C Editor’s
Draft": <http://dev.w3.org/2006/webapi/WebIDL/>.

We need to align our API specifications with the latest Web IDL
specification.

widlproc[¶](#widlproc)
----------------------

This is the tool we use to generate the APIs specs from their Web IDL
definitions. It is a command-line utility that transforms Web IDL
fragments into XML.

See
</t3-2/wiki/Tool_Setup_and_Usage>
for information on how to use git and widlproc for creating API
specifications.

Process for each specification editor[¶](#Process-for-each-specification-editor)
--------------------------------------------------------------------------------

The new APIs are being edited in the "newwebidl" branch of the
<http://dev.webinos.org/git/t3-2.git> repository. This repository
contains widlproc executables for Linux, Mac and Windows but it is
intially empty on API widl files.

1.  Create a local clone of the specification repository. The repository
    URL is <http://dev.webinos.org/git/t3-2.git> , and checkout the
    "newwebidl" branch (git checkout newwebidl)
2.  Make necessary updates according to the "Changes" section below.
3.  When specification generation is verfified to work commit and push
    it to the API specification repository.

Public repositories for then generated HTML API specifications[¶](#Public-repositories-for-then-generated-HTML-API-specifications)
----------------------------------------------------------------------------------------------------------------------------------

Public respository for Webinos API specifications according to old
outdated widl-specification is here: [Webinos API specifications
according to outdated widl
specification](http://dev.webinos.org/specifications/draft/).

New repository for Webinos API specifications according to latest widl
specification is here: [Phase 2 API
specifications](http://dev.webinos.org/specifications/new/)

Changes[¶](#Changes)
--------------------

### ”modules” removed[¶](#”modules”-removed)

“module” is no longer a valid keyword for Web IDL. All Webinos API
specifications used ”module”. To adapt to that change:

1.  remove the wrapping module Foo { } declaration in the Web IDL
2.  set the name of the overall API using \\name in the first block of
    comments
3.  the first block of comments should start with /\*\*\<p\>A
    description of the API\</p\>
4.  APIs that refered to other modules definitions (à la
    webinoscore:![:)](/redmine/plugin_assets/redmine_wiki_extensions/images/smile.png)
    should remove the said namespace

### The raises / getraises / setraises keywords are no longer valid[¶](#The-raises-getraises-setraises-keywords-are-no-longer-valid)

See: <http://dev.w3.org/2006/webapi/WebIDL/#idl-exceptions> and
<http://dvcs.w3.org/hg/domcore/raw-file/default/Overview.html#domexception>.
Re-using DOMException with a specific type is now preferred. In the
descriptive text it should be stated which exception is throwed in
certain situations.

### Reusing DOMError instead of per API errors[¶](#Reusing-DOMError-instead-of-per-API-errors)

As much as possible, re-use [DOMError
objects](http://dvcs.w3.org/hg/domcore/raw-file/default/Overview.html#error-types-table)
in error callbacks instead of minting new errors for each API. We should
only define a new interface if the error somehow needs to transmit more
than a name.

### Dictionaries[¶](#Dictionaries)

Dictionaries should be used to define bag of properties. Interfaces had
to be used before.\
See: <http://dev.w3.org/2006/webapi/WebIDL/#idl-dictionaries>.

### New keyword ”Partial”[¶](#New-keyword-”Partial”)

Applied to interfaces and dictionaries, replaces what used to be done
through the unofficial [Supplemental] extended attribute.

### ”Caller” renamed to renamed "legacycaller“[¶](#”Caller”-renamed-to-renamed-legacycaller“)

Has been marked as only for encoding legacy APIs. Might be removed
overall in the next version.

### Callbacks[¶](#Callbacks)

There is now a specific mechanism to describe callback functions (using
the “callback” keyword) that should be used instead of
[NoInterfaceObject] interfaces.

### Constants and enums[¶](#Constants-and-enums)

Instead of using numerical constants (e.g. for error codes), the
preferred approach is to use strings; the list of valid strings can now
be defined using the “enum” keyword: enum Foo { "bar", "baz" };

### Infinite values[¶](#Infinite-values)

For values that need to accept Infinity as a value, the type
"unrestricted float" or "unrestricted double" has to be used.

### Union types[¶](#Union-types)

Where one need a type that is a composition of several other types, a
new syntax for union types is now available.

Example[¶](#Example)
--------------------

An example of an updated API specification: TV API revised
</t3-2/repository/revisions/3188746b34959935988d4ab05a7fd96bae14a001>

