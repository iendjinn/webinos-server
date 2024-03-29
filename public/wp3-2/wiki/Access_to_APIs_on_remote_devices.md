Access to APIs on remote devices[¶](#Access-to-APIs-on-remote-devices)
======================================================================

Problem definition[¶](#Problem-definition)
------------------------------------------

The general problem we have to solve is:

“How to provide a consistent way for web applications to access user’s
resources or any other resources hosted anywhere, i.e. in user’s current
device, in another device connected through the network, at a network
server, or in a locally connected device.”

The problem has two major parts:

-   Service Discovery
-   Access to the service

So this involves not only WP 3.2 but also WP 3.1 for example Discovery,
Communication, Event handling and Overlay networking sub tasks.

A example use case illustrating this issue is:

*A web application running in a TV needs access to a camera and the user
selects to use her mobile phone camera.*

Brainstorming and proposals[¶](#Brainstorming-and-proposals)
------------------------------------------------------------

### Proposal 1: Only local API access to Device Features[¶](#Proposal-1-Only-local-API-access-to-Device-Features)

As of the requirements, user stories and use cases, webinos has to
provide means to push code from one device to another one in order to
execute the code remotely. This could be also used as means to access
device features remotely.

**Two illustrating examples for code outsourcing:**

1 Smart Text Input:\
`Using a smartphone as text input device for applications running on a TV set. Here, the smart phone not only sends key-codes to the “main” application, it also shows some appropriate forms in order to support the text input. In addition, the outsourced code running on the smartphone may check the text input in order to prevent sending of unnecessary or incorrect data to the “main” application.`

2 Smart sensors:\
`Assuming an application wants to be informed when remotely available sensor data (real sensor or any another webinos enable/compatible device) crosses a specific threshold. The application could check periodically the actual value and take some action based on this. Since this would produce unnecessary traffic and needs the primary application to run continously,  it would be better to only get a sensor event if the threshold  is reached. To achieve this, the application may outsource a piece of code to the desired sensor or device. The code locally checks the sensor/requested data until the threshold  is reached. The outsourced code informs the “main” application via an eventing system about this so that the application can take their specific actions.`

Since we have to provide code outsourcing anyway, we can use this
concept to access remotely available device resources. The application
which needs access to a device feature requests a webinos code
outsourcing component to send code or the whole application to devices
which provide the needed features, using a webinos discovery API (or
even to all devices and filter locally).\
After code was deployed (permanent installation or one-time execution)
on the target devices it is automatically (depends on the applied
security mechanism) executed and accesses the local device features via
the provided JavaScript APIs. After doing the work and if needed
(depends on the actual executed code) results could be sent back to the
“main” application via a webinos event API (alternatively direct
stream-able communication mechanisms via socket or http APIs could be
provided).

**How could this look like for a developer in pseudo code:**

//find devices which have a display, text input capabilities and a
geo-location provider\
WebinosDevices devices = webinos.findDevices(“Capability: Display,
TextInput, Geolocation”);

//since we may find multiple ones select one to use\
WebinosDevice device = selectADeviceToUse(devices);

//request to deploy a widget, here another pre-defined widget located in
the widgets resource folder, on the selected device\
DeployedCodeInfo info =
device.deploy(“\\ressources\\textInputWidget.wgt”);

//register an event listener to get notifications if the remote
application has done its work.\
//the actual event listener subscription depends on the webinos eventing
system specification\
this.addEventlistener(info.Event(“textInputSuccessfull”), function (){
//process things on result});

//request to execute the widget if desired (otherwise it is only
installed)\
info.execute();

On the remote device the application is doing its work, e.g., showing
some GUI, allowing the user to enter some text and accessing the
device’s geo-location. Afterwards notify the parent application about
any results.

navigator.geolocation.getCurrentPosition(onPositionReceived);

function onPositionReceived{\
 webinos.eventing.notify(webinos.getContext() .parentApplication,
”textInputSuccessfull”);\
}

A webinos.getContext() API may be provided by webinos and gives
information about the application context. For the here relevant code
outsourcing part it could provide information about the parent
application, i.e., the application that outsourced the current code, in
order to allow to communicate together and to exchange date between both
application parts.

### Proposal 2 (Add-on to Proposal 1): Binding remote Features to local JavaScript Objects[¶](#Proposal-2-Add-on-to-Proposal-1-Binding-remote-Features-to-local-JavaScript-Objects)

Since we have the requirements to outsource code some kind of proposal 1
would be possible in webinos anyway. But in case that forcing developers
to actively think about how to access remote features an approach that
is a bit more transparent could be used.\
The approach is described using the W3C geolocation API which normally
can be used calling

navigator.geolocation.getCurrentPosition();

In this proposal a feature discovery API is provided by webinos which
allows finding all available API implementations which could be placed
on local or remote devices. For example:

//find all known (and accessible) geolocation providers, no matter on
local or remote devices\
GeolocationList availableGeolocationImplementations =
webinos.discovery.findFeature(Geolocation);

//select one of the found geolocation implementations\
Geolocation geolocation =
selectAResult(availableGeolocationImplementations);

//use geolocation API from a remote device the same way as it would be
used from a local device\
geolocation.getCurrentPosition();

In addition the webinos device discovery module may provide information
about the device that provides the concrete geolocation implementation.

**Issue Remote Access Protocol:**

We need to define a protocol that is able to communicate JavaScript
calls to remote devices in a way that does not need remote API
definitions (like REST, WADL, WSDL,…) for each of our JavaScript APIs.
Remotely these calls must interpreted and executed and results are sent
back to the initial requestor of the API call. From the programming
paradigm point of view there is no difference in using a local feature
or a remote feature.\
The actual requirements on such a protocol must be investigated further.
For example, function calls and results must be transmitted between
devices. This mostly relates to JavaScript Objects which can be data
objects or which may be functions again. Functions must be transparently
executed remotely again. In some cases binary data must be transported
for a proper remote API call. For example a picture was remotely taken
and the result is a file reference. This file reference may be a remote
reference but the file could also be transported to the requesting
device to be locally available.

