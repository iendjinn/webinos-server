API types[¶](#API-types)
========================

JavaScript APIs[¶](#JavaScript-APIs)
------------------------------------

A JavaScript API is the most common way to provide web application
access to device hardware and software resources. [Web Interface
Description Language](http://www.w3.org/TR/WebIDL/ "Web IDL") is used to
specify JavaScript APIs.

A typical example of a JavaScript API is the [W3C Contacts
API](http://dev.w3.org/2009/dap/contacts/). The usage of the
"contacts.find" method is examplified below:

// Perform an address book search. Obtain the 'name' and 'emails'
properties and initially filter the list to Contact records containing
'Bob':

    navigator.contacts.find(  ['name', 'emails'], successCallback, errorCallback, {filter: 'Bob'} );

The example above illustrates an asynchronous JavaScript method, which
is very common for JS device APIs. Asynchronous methods return
immediately and notify the caller at some point in the future of the
results via callback methods. Methods that may take a long time to be
executed or that may be subject to security prompt must be defined as
asynchronous methods. The successCallback above is a function to be
invoked in case of success and the errorCallback is a function to call
when the asynchronous operation fails.

Using HTML-elements[¶](#Using-HTML-elements)
--------------------------------------------

In some cases access to device resources can be provided through a
simple html-element. One example is the [W3C HTML Media Capture
specification](http://dev.w3.org/2009/dap/camera/). This specification
states that if an input element in the File Upload state contains accept
attribute with values image/\*, audio/\*, or video/\*, the user agent
can invoke a file picker that allows respectively the user to take a
picture, record a sound file, or record a video in addition to selecting
an existing file from the file system. Furthermore, a new “capture”
attribute may be added to the input element. This attribute gives a hint
to the user agent on the source of the input. The “capture” attribute
can take the values camera, camcorder, microphone and filesystem.

For example, the following code indicates that the user is expected to
upload an image from the device camera:

    < input type="file" accept="image/* " capture="camera"  id="capture" >

When rendering this code the user agent will open the camera viewfinder
and allow the user to take a picture.

HTML "file-picker" based access to device resources is very straight
forward and intuitive for users and provide for "implicit user consent"
as the user must provide a tangible action to allow access to the
requested resource. For example navigating to a folder in the file
system and selecting a file or using the camera viewfinder and pressing
the shutter button to take a picture.

Using DOM events[¶](#Using-DOM-events)
--------------------------------------

For providing web applications access to data that is frequently
updated, for example data from sensors in the device, a DOM event based
interface is often applicable. Examples are the [W3C DeviceOrientation
Event
Specification](http://dev.w3.org/geo/api/spec-source-orientation.html)
and the [W3C Battery Status Event
Specification](http://dev.w3.org/2009/dap/system-info/battery-status.html).
Several new Webinos APIs are also DOM event based.

An event based API is defined by adding attributes to the [DOM event
interface](http://www.w3.org/TR/2011/WD-DOM-Level-3-Events-20110531/#interface-Event).
For example, the DeviceOrientation Event Specification defines an
"deviceorienationevent", which has three attributes for device
orientation, alpha angle, beta angle and gamma angle.

A web application can register to listen to DOM events using the
addEventListener method. For example, registering to receive
deviceorientation events could be done with the code below:

    window.addEventListener("deviceorientation", function(event) {          // code for processing the the device orientation event data, i.e.  event.alpha, event.beta and          // event.gamma      }, true);

The second parameter is a method that is called whenever an event occurs
of type "deviceorientation".

Using REST[¶](#Using-REST)
--------------------------

REST (Representational State Transfer) APIs are frequently used on the
web. Such an API is specified as a URI and the requested
resource/service is accessed through the standard HTTP methods GET,
POST, PUT, DELETE.

A simple example is a Twitter API for retrieving the 20 most recent
statuses. In this example the requested data is returned in JSON
format.\
 <http://api.twitter.com/1/statuses/public_timeline.json>

One major advantage with REST APIs is that a requested resource/service
could be situtated "anywhere", in the cloud or in the device, but still
be accessed with the same API. By implementing access to local
resources/services through “Virtual Local Web Servers” REST APIs could
also be used to access local in-device resources/services.

Furthermore REST is stateless, which facilitates scalable solutions so
that many users can be supported.

If coding gets complicated when REST APIs are used then JavaScript
"wrapper" methods can be created to facilitate for developers. These
"wrapper" methods do not have to be standardized and could be provided
by exstablished JavaScript library/framework providers.

