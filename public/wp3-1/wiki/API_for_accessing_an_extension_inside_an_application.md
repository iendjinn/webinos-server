[Back to plug-in/extension
handling](%20Back%20to%20plug-in/extension%20handling.html)

App developer API for accessing an extension inside an application[¶](#App-developer-API-for-accessing-an-extension-inside-an-application)
==========================================================================================================================================

A general API for enabling the interaction between an application and an
extension has to be specified. The process of using an extension shall
be similiar to the standardized access of device features.

Initializing an extension[¶](#Initializing-an-extension)
--------------------------------------------------------

The extension has to be dynamically requested by the developer inside
the web application. The cal returns a scriptable object, which can be
then used to interact with the features exposed by the extension. The
function call is based on the approach in Node.js to embed additional
modules to the javascript runtime.[2]

    1 //Example codet how the access to an extension could look like
    2 //initializing/requesting an extenion
    3 var foo = requireExtension('fooId');

The requireExtension() can throw an ExtensionException, if the access to
the extension could not be authorized, or the extension is not
available.

Accessing properties, accessing and setting attributes or calling methods of an extension[¶](#Accessing-properties-accessing-and-setting-attributes-or-calling-methods-of-an-extension)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

After the initialization the extension shall be useable in the same way
as other device features. For that reason no special API have to be
defined. The accessible properties, attributes and methods of an
extensions has to be defined by the extension developer

     1 
     2 //logging the value of the property 'bar' of the extension foo
     3 console.log(foo.bar);
     4 
     5 //setting the attribute hello of the extentsion foo
     6 foo.hello = 'World'
     7 console.log(foo.hello);
     8 
     9 //calling the function bar() of the extension foo with two parameters
    10 foo.bar("Test", 1);
    11 

Adding/Removing Listener to extension events[¶](#AddingRemoving-Listener-to-extension-events)
---------------------------------------------------------------------------------------------

The asynchronous nature of web application makes it necessary for app
developers to be able to bind to Events emitted by an extension. An app
developer shall be able to bind to these events in the same way as other
predefined events fo web applications. Therefore the function calls for
adding and removing listeners to events fired by an extension are based
on W3C's DOM 3 Event approach^[1](#fn1)^. The developer specifies the
event on which event he is going to subscribe do and the handler to be
called, when the event is fired by the extensions. The event types and
the coresponding event data has to be defined by the extension itself.

    1 //Adding a listener on the 'ready' Event, which is defined by the extension developer. When the event is emitted, the hello function is beeing invoked. hello functions removes the listener again.
    2 foo.addEventListener('ready', hello });
    3 
    4 function hello(data){
    5  console.log(data);
    6  foo.removeListener('ready');
    7 }

Sources[¶](#Sources)
--------------------

[1] <http://www.w3.org/TR/DOM-Level-3-Events/>\
[2] <http://nodejs.org/docs/v0.4.1/api/modules.html>

