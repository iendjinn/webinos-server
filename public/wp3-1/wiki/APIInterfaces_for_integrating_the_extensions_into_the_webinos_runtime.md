API/Interfaces for integrating the extensions into the webinos runtime[¶](#APIInterfaces-for-integrating-the-extensions-into-the-webinos-runtime)
=================================================================================================================================================

The following functional interfaces have to be embedded by the extension
developer.

interface for loading an extensions[¶](#interface-for-loading-an-extensions)
----------------------------------------------------------------------------

The extension must implement a pre-defined funtion which is the hook for
the webinos runtime to interact with it (comparable to the
NP\_Initialize() in NPAPI or the init() in Node.js). This function will
also

interfaces for exposing attributes, properties and functions of the extension to the application[¶](#interfaces-for-exposing-attributes-properties-and-functions-of-the-extension-to-the-application)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The extension must expose in a pre-defined way the attributes,
properties and functions which shall be accessible by applications. This
is basically a directory, which maps native components to components
accessible by the app developer.

interfaces for emitting extension specific events[¶](#interfaces-for-emitting-extension-specific-events)
--------------------------------------------------------------------------------------------------------

An extension should be able to emit events, on which applications can
subscribe to. The mechanism how an extension developer can define and
invoke events must be specified inside webinos.

