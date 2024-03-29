API specification alignment with task 4.1 API implementations and further work on the APIs[¶](#API-specification-alignment-with-task-41-API-implementations-and-further-work-on-the-APIs)
=========================================================================================================================================================================================

Our API specifications need to be aligned with what we actually
implemented in task 4.1. Furthermore, for referred API specifications,
we should feedback our implementation experiences to the original
organization owning the specification, e.g. W3C.

This wiki summarizes differences in the API implementations compared to
the task 3.2 API specifications at [Webinos phase 1 API
specifications](http://dev.webinos.org/specifications/draft/). The API
implementation status could be found at [WP4 delivery
status](/wp4/wiki/Delivery_status).
Any other suggestions for improvements of the API should also be stated.

For each API the main responsible API editor is also stated. This is a
preliminary proposal. Please provide feedback on this.

[The Context module](http://dev.webinos.org/specifications/draft/context.html)[¶](#The-Context-module)
------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Christos / NTUA (Dieter/IBBT supports)

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

In the 3.1 deliverable for context the focus was on the integration of
the Context API with the rest of the proposed (then) webinos
architecture, together with a set of specifications revolving around the
potential usage of the API by webinos applications, while providing a
few points on the actual implementation architecture. It was soon
discovered during 4.1 that there was an important strategic decision to
be taken. The Context API had to leave part of the data handling of the
contextual information to the application developers by providing a
number of tools to create, store, extract and analyse contextual
information, while at the same time provide automatic mechanisms that
store contextual information already transferred throughout the
platform. The result was the introduction of the term and structure of
"Context Object". A Context Object refers to a notion similar to a meme.
It's the minimum of data that are required to define any single personal
contextual piece of information (e.g. MyLocation, MyHouse, MyFriend,
MyFavoriteTVChannel etc).

The definitions of what pieces of data form a complete Context Object,
where, when and how to find them are included in Context Vocabularies.
These are text files in json structure. There are two forms of Context
Vocabularies that were created in 4.1. The first one is the API Context
Vocabulary, which is read-only to the application developer and contains
definitions of Context Objects that utilise the RPC API calls that are
made by applications to automatically store Context Objects. The second
one is the Application Context Vocabulary, which contains the
definitions of Context Objects created by applications. Application
Context Objects are not stored automatically, but rather are requested
to be stored by the application that defined each.

The Context Objects are flattened and stored on an SQLite3 database
located on the PZH. If a connection to the PZH is not available (Virgin
Mode), the data are stored in a temporary file as a buffer, until a
connection to the PZH is available. The extraction of the Context
Objects is performed via a custom SQL query builder created for the
Context API. All the events relating to Context pass through the Policy
Manager.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

The new requirements to be added include the registration of context
objects to be extracted and stored locally per device, either based on
simple extraction rules or more complex rules that describe Context
Objects as results of more complex queries, without the requirement of a
connection with the PZH. For example, a statistical rule applied on the
MyLocations Context Objects can generate a more permanent Context Object
called MyHome or MyWorkPlace.

Another requirement is the addition of a background service that will
store API Context Objects while the PZP is running and without an
application making specific API calls. The registration of such
listeners should be implemented in the same way that Application Context
Objects are defined through the Policy Manager.

Additionally, with the advancement of the Policy Manager and the ability
to create more complex policy rules, each Context API call will have a
number of policy events relating to it in the following axes:

-   Context API Method
-   Read/Write
-   Application making the request
-   Data Object (Context Object, rule to be added/updated etc)

[The events module](http://dev.webinos.org/specifications/draft/events.html)[¶](#The-events-module)
---------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Andre Paul / Fraunhofer

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

-   forwarding messages is not implemented
-   cc / bcc for the adressing fields is not implemented
-   caching is not implemented
-   API implementation design currently relies on permanent availability
    of the event API service (should run on PZH)
-   WebinosEventEntity is not yet clearly defined (how to address a
    certain application, where to get the own application ID that can be
    used by others to send messages)

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

-   simplify API through removal of forwarding and cc/bcc parts from the
    spec.

[The AppLauncher module](http://dev.webinos.org/specifications/draft/launcher.html)[¶](#The-AppLauncher-module)
---------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Andre Paul / Fraunhofer

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

-   appInstalled() and PendingOperation/cancel is not implemented
-   do we need a speparation between application ID as in config.xml and
    an instance of an application (what if we have installed two
    services or applications of the same type)?
-   implementation currently just takes arbitrary (system depended)
    arguments, thus, implementation is nut inter-operable
-   since we do not have widget run-times yet its not possible to start
    webinos applications using this API

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

For August 31 delivery no changes will be done but in the longer term we
should consider to use Web-intents instead.

[The messaging module](http://dev.webinos.org/specifications/draft/messaging.html)[¶](#The-messaging-module)
------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Fraunhofer (Christian Fuhrhop)

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

Implementation on Android done for sms.\
More problematic for mms since no apis available. Reading mms can be
done with a direct access to android db (difficult to find a clear
documentation on this); not yet investigated how to send mms.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

Removed two obvious bugs from spec (wrong ID number on TYPE\_IM, double
sendMessage definition).\
WAC has now added 'isInSync' attribute and 'sync()' method to
MsgAttachment interface. We probably should copy that.

[The NFC module](http://dev.webinos.org/specifications/draft/nfc.html)[¶](#The-NFC-module)
------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Hans Myrhaug / Ambisense, Stefano Vercelli / TIM, Dave Raggett / W3C

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

The 3.2 specification for the NFC API was never implemented. Some
preliminary work was done on Linux with integrating node.js and libnfc,
using a usb stick for the NFC reader. Some experiments were also
conducted on the Nexus S phone using the Android NFC API. The original
plan was to then get up to speed with the build process for the webinos
personal zone proxy and then work on implementing the NFC API as
specified in the 3.2 deliverable. Unfortunately, other work items got in
the way. Some progress was made on building the PZP for Android using
Ant on Linux, but this proved harder than expected.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

To develop a new version of the NFC API aligned to the anticipated
direction for the [proposed W3C NFC Working
Group](http://www.w3.org/2012/05/nfc-wg-charter.html) and background as
set out in the [W3C NFC
wiki](http://www.w3.org/2009/dap/wiki/Near_field_communications_(NFC))

-   Reading NDEF messages
-   Writing NDEF messages
-   Setting NFC tags to read-only
-   Formatting NDEF compatible NFC tags
-   Peer to peer push of NDEF messages between NFC devices
-   Peer to peer HTML message channel between NFC devices supporting
    LLCP
-   Application Program Data Unit (APDU) support
-   Card emulation support, e.g. for APDU based operations

The API will build upon ideas in the B2G, PhoneGap, Tizen, and webinos
phase 1 APIs for NFC. One particular goal will be to read and write to
specific NFC tags when there are multiple tags within the range of the
NFC device, e.g. as can happen when there are several cards with NFC
tags in your wallet. It remains to be seen how easy it will be to
implement support for LLCP, APDU and card emulation. It is likely that
this may not be possible for all webinos supported platforms.

-   Slides at attachment:webinos-nfc.pdf

<!-- -->

-   [Revised NFC API](Revised%20NFC%20API.html)

[The payment module](http://dev.webinos.org/specifications/draft/payment.html)[¶](#The-payment-module)
------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Fraunhofer (Christian Fuhrhop)

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

Implemented for dummy payment and for GSMA payment API.\
BlueVia implementation started but never finished.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

No usable handling for Payment Provider interface page - possibly not\
attainable with current structure. (In many cases payment providers\
require a redirect to their web page - something the PZP can't handle\
itself, but probably needs to be covered by the application itself.)\
Also, payment providers usually direct back to the original web page,\
which is a somewhat vague concept for a locally running web app.

[The Sensors module](http://dev.webinos.org/specifications/draft/sensors.html)[¶](#The-Sensors-module)
------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Claes Nilsson - SoMC

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

All changes applies to the implementation for Android.

-   Skipped normalized values in sensor event as I did't see any use for
    them. See
    <http://dev.webinos.org/specifications/draft/sensors.html#::sensors::SensorEvent>

<!-- -->

-   I didn't implement exception with raises as this is not supported by
    the latest widl-specification:
    <http://dev.w3.org/2006/webapi/WebIDL/#idl-exceptions>. DOM
    exceptions to be used instead.

<!-- -->

-   Implemented more sensor types based on Android sensor API
    (proximity, humidity). I also implemented support for orientation
    related sensors (accelerometer, gyro, compass) to facilitate
    testing. However, these sensor types should not be included in the
    API specification as these sensors are covered by the
    DeviceOrientation API and we shouldn't confuse developers.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

-   W3C is currently specifying a set of small sensor specific APIs for
    typical in-device sensors such as proximity, ambient light, ambient
    humidity, ambient temperature, etc. We should consider to use these
    APIs for these sensor types instead of the generic Webinos sensor
    API

<!-- -->

-   We should add new sensor types for external sensors:
    -   Heart rate monitor (Ziran provide link to use case?)
    -   M2M sensors (Notes from Stefano Vercelli follow):
        -   For m2m applications we need to support many different
            sensors; we can add some of them to specs (sensors for
            Arduino boards), but leave it open for developers to add
            their own;
        -   Add to ConfigureSensorOptions interface a generic
            configuration string (json formatted) that can be specified
            for every new sensor in case they need particular
            configurations;
        -   We need a different way to set data rate of sensor. It can
            be an unsigned long; if equal to 0 means send an event when
            the value changes, otherwise it's number of ms between two
            events; we may need to configure a sensor to send an event
            once a day...
        -   Input from Stefano for needed sensors expected.

<!-- -->

-   Other proposed changes:
    -   Align with latest W3C approach to event based APIs, see for
        example [W3C Battery Status
        API](http://dvcs.w3.org/hg/dap/raw-file/tip/battery/Overview.html)
    -   Add humidity sensor type (if we not use the W3C API instead)
    -   Clarify that remove EventListener should be used to stop
        listening. Example?
    -   Specify a default value for “rate”, e.g. SENSOR\_DELAY\_UI

<!-- -->

-   If Webinos supports Web Intents a a generic means for users to
    select sensors in response to application requests would be
    possible. This would allow for the use of sensors on different
    devices, either on the local area network, or remote, somewhere on
    the Internet.

[The discovery module](http://dev.webinos.org/specifications/draft/servicediscovery.html)[¶](#The-discovery-module)
-------------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Alexander Futász/Franhofer

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

Not implemented are:

-   DiscoveryInterface: getServiceId, createService
-   Service: The constants are missing, state (is there but unused)
-   FindCallback: onLost
-   BindCallback: onUnbind, onServiceAvailable, onServiceUnavailable,
    onError (though these could have been implemented by individual
    services)
-   PendingOperation
-   Discovery across multiple Personal Zones (PZs)

Other changes:

-   DiscoveryInterface.findServices From the filter parameter just the
    zoneId property is used.
-   Service.bind is ambiguous as JavaScript defines a bind functions for
    all JavaScript objects. Therefore Service.bind is renamed to
    Service.bindService.
-   Service.bindService doesn't respect the optional serviceId argument.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

It would be good to be able to use wildcards when searching for
ServiceTypes. For example right now it's not possible to find all
services, no matter what the ServiceType may be. Also the Sensor API has
multiple ServiceTypes which are similar but different, so it's not
possible to search for all Sensor services.

Maybe get rid of the mechanism that allows to bypass calling
findServices by using createService and then binding the created service
by using a previously stored serviceId. Seems nobody had use for this so
far, also this bypass kind of defeats the purpose of a **discovery**
mechanism.

[The tv module](http://dev.webinos.org/specifications/draft/tv.html)[¶](#The-tv-module)
---------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Martin Lasak - Franhofer

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

-   Added getScreenshot(base64 pic) interface to return a screenshot,
    base64 coded, of the current channel. (Paolo)

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

Martin:\
After reviewing the new TV Control API [1] and due to problems with the
old spec from development point of view i would take the chance and
suggest two changes to this API:

Webidl excerpt (IS):

dictionary Channel {\
 ChannelType channelType;\
 DOMString name;\
 DOMString longName;\
 Stream stream;\
 TVSource tvsource;\
};

Webidl excerpt (SHOULD BE):

dictionary Channel {\
 ChannelType channelType;\
 DOMString name;\
 DOMString longName;\
 MediaStream stream;\
};

Reason for using MediaStream type is to be better aligned with WebRTC.
Stream is not definded elsewhere anyway (maybe provoking confusion and
in reality/implementation just “casted” to DOMString
![;)](/redmine/plugin_assets/redmine_wiki_extensions/images/wink.png)

Reason for excluding the tvsource attribute: get rid of a cyclic
structure that shows up very unhandy when trying to serialize the
Channel object (e.g. JSON.stringify throws an exception). Imo we won’t
lose much.

A last remark: even if it is not specified, on the implementation side a
unique identifier for a channel is needed. So my question is do we need
to specify such an object? Such a identifier should not point uniquely
to a certain frequency/bearer/technology but should uniquely identify
the Channel object itself.

Alexander: I agree with Martin’s proposed changes. The cyclic property
structure indeed holds some problems and might have been not considered
when designing the spec.

Paolo: Having a getScreenshot(base64 pic) interface to return a
screenshot, base64 coded, of the current channel. Or instead of a
screenshot a poster it's either way's fine with me and doesn't look like
a fallback. I think that adding it would also be useful for all the
social related, upcoming apps that might need this feature.

[The userprofile module](http://dev.webinos.org/specifications/draft/userprofile.html)[¶](#The-userprofile-module)
------------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Ronny Gräfe - Deutsche Telecom

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

The UserProfile API is not implemented in phase 1 of WP4.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

OpenID implementation. OpenID was already implemented for PZH demo.
After investigations it is clear, that it could be used for userprofile
(see "OpenID Attribute Exchange"
<http://openid.net/specs/openid-attribute-exchange-1_0.html>)

[The vehicle module](http://dev.webinos.org/specifications/draft/vehicle.html)[¶](#The-vehicle-module)
------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Simon Isenberg - BMW

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

-   need to add LightEvents and StatusEvents as additions to the
    ControlEvents
-   need to update NavigationEvents

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

............

[The webinoscore module](http://dev.webinos.org/specifications/draft/webinoscore.html)[¶](#The-webinoscore-module)
------------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Claes Nilsson - SoMC

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

Assume no differences.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

....

[The widget module](http://dev.webinos.org/specifications/draft/widget.html)[¶](#The-widget-module)
---------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Andre Paul - Fraunhofer

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

-   For Android the implementation complies to the original W3C Widget
    specification and the webinos additons are not implemented.
-   On other platforms it is not yet implemented (due to lack of widget
    run-times)
-   it depends on 3.3 work if the webinos extensions will be kept in the
    phase II release

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

-   webinos extension defines notify() function in order to notify the
    user that something happened. We should consider to replace this
    with W3C Web Notifications API
    <http://dev.w3.org/2006/webapi/WebNotifications/publish/Notifications.html>

[The ContactsWrapper module](http://dev.webinos.org/specifications/draft/contacts.html)[¶](#The-ContactsWrapper-module)
-----------------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Christian Fuhrhop - Fraunhofer (specifications), Paolo Vergori - ISMB
(alignment)

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

Contacts API has been implemented in WP4.1 introducing further level of
abstraction, to what has been specified in WP3.2.\
The only method that the wrapper exports is the *Find* function. This
method has been implemented exactly like specification says. The
difference it's that this method isn't exposed directly, but an
intermediate level, named *contactsModule.js*, is in charge of
distinguish between local contacts and remote contacts. The names that
has been given was just purely to separate two completely different
implementations: Thunderbird and Google. Therefore, the exposed methods
accepts an object, named *parameters*, that has a *parameter.type*
propriety to do this dichotomous choice.\
Moreover, the *parameters* has the contact proprieties in it, in order
to apply the filter, as a first parameter of the *find*. Afterwards, a
function named *makeW3Ccontacts* proceed to translate a contact in a W3C
Contact type.\
The decision to introduce this abstraction level was taken, in order to
support multiple implementations for different contacts services.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

Note: This is a W3C DAP WG specification and proposed changes should be
input to W3C DAP or System Level API WG.

-   Add create, add, update and delete for contacts. This is not
    included in the original W3C Contacts API as this API is to be used
    in the pure browser context. However, with the policy based API
    access control system in Webinos writable contacts could be added
    without without violating security.
-   Change W3C style find function to WAC style findContacts function to
    be more consistent with new functions.
-   Move API from 'wrapper' APIs to webinos API, since it's now a
    mixture of W3C and WAC elements and no longer just a wrapper around
    W3C stuff.

[The Calendar module](http://dev.webinos.org/specifications/draft/calendar.html)[¶](#The-Calendar-module)
---------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

TBD

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

Not implemented in phase 1.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

Note: This is a W3C DAP WG specification and proposed changes should be
input to W3C DAP or System Level API WG.

Follow W3C work on calendar APIs. It is expected that a Web Intents API
for simplified access to calendars will be specified in the Device APIs
Working Group, and a more complete solution in the proposed System
Applications Working Group. As this work has not yet started within W3C
it is proposed to keep the current reference to the existing Calendar
API in the task 3.4 delivery.

[Device status module](http://dev.webinos.org/specifications/draft/devicestatus.html) and [Device status vocabulary](http://dev.webinos.org/specifications/draft/vocabulary.html)[¶](#Device-status-module-and-Device-status-vocabulary)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Christian Furhop/Fraunhofer

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

-   The methods to watch for properties changes are not yet implemented.
-   Vocabulary is partially implemented

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

Webinos phase 1 refers to WAC devicestatus module and has an Webinos
version of the WAC devicestatus vocabulary module that adds properties.
However, the latest version of the WAC devicestatus module
(<http://specs.wacapps.net/devicestatus/index.html>) includes the
vocabulary.

For phase a Webinos version of latest version of the WAC devicestatus
module including added properties has been created.

For the future consider aligment with W3C DAP Network information API
(<http://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html>) and
Battery Status API
(<http://dvcs.w3.org/hg/dap/raw-file/tip/battery/Overview.html>) and
other coming device status APIs.

[The device orientation module](http://dev.webinos.org/specifications/draft/deviceorientation.html)[¶](#The-device-orientation-module)
--------------------------------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Paddy Byers / Impleo

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

To be completed....

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

Note: This is a W3C Geolocation WG specification and proposed changes
should be input to W3C Geolocation WG.

[The file reader module](http://dev.webinos.org/specifications/draft/filereader.html), [The file writer module](http://dev.webinos.org/specifications/draft/filewriter.html), [The file system module](http://dev.webinos.org/specifications/draft/filedirandsystem.html)[¶](#The-file-reader-module-The-file-writer-module-The-file-system-module)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Felix-Johannes Jendrusch - Fraunhofer

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

The current implementation is ahead of Task 3.2 specifications (see
[APIs: The file reader
module](http://dev.webinos.org/specifications/draft/filereader.html),
[APIs: The file writer
module](http://dev.webinos.org/specifications/draft/filewriter.html),
and [APIs: The file system
module](http://dev.webinos.org/specifications/draft/filedirandsystem.html))
but behind current W3C WebApps WG Working and Editor's Drafts (see [File
API](http://dev.w3.org/2006/webapi/FileAPI/), [File API:
Writer](http://www.w3.org/TR/file-writer-api/), [File API: Directories
and System](http://www.w3.org/TR/file-system-api/)). Currently, the
three specifications don't match, or, taking Editor's Drafts into
account, are subject to more or less heavy changes.

I recommend to wait until all three specifications match again.
Furthermore, I propose to tighten integration between webinos's and the
Browser's File API, e.g., reuse the Browser's Blob object.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

The proposed changes (better integration between webinos and the
Browser) are webinos-only features and not required to be input to W3C
WebApps WG.

[The geolocation module](http://dev.webinos.org/specifications/draft/geolocation.html)[¶](#The-geolocation-module)
------------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Victor Klos / TNO (implementted by Paddy/Impleo)

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

To be completed....

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

Note: This is a W3C Geolocation WG specification and proposed changes
should be input to W3C Geolocation WG.

[The authentication module](http://dev.webinos.org/specifications/draft/authentication.html)[¶](#The-authentication-module)
---------------------------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Andrea Atzeni / Polito

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

-   All API methods use callback. In task 3.2 specification, only
    *authentication()* uses callback.
-   *isAuthenticated()* should check the authentication freshness,
    instead actually it reports only if a user is authenticated or not.
-   Currently there is not integration with policies.
-   Not mentioned in the specification, *authenticate()* performs a
    persistent authentication (since it interacts with the underlying
    system, it is valid also for other application in the same PZP)
-   API methods receive the username as a parameter.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

#### Check authentication freshness[¶](#Check-authentication-freshness)

-   Considering that *getAuthenticationStatus()* can return
    *lastAuthTime*, combining it with *isAuthenticated()* the
    application can choose what interval is admissible. Currently the
    application can't force the reauthentication, so if the user is
    already authenticated but the application decide that the
    authentication is expired, the application can't use authentication
    API to authenticate the user.
    -   A solution could be to allow the application to reset the
        authentication status or to force the reauthentication, but
        these features could expose authentication API to misuses.
-   Embedding authentication time evaluation inside *isAuthenticated()*,
    the webinos platform can mandate a time interval in spite of the
    application (developer) will.
    -   Since this seems a kind of policy task associated to the
        authentication, it could be better to delegate it to the policy
        manager. For example *isAuthenticated()* could call the policy
        manager with the user as a subject and a new authentication API
        feature as a resource. The policy manager could call
        *getAuthenticationStatus()* to know *lastAuthTime* and return a
        "deny" if the authentication is expired.

#### Specification independent suggestions[¶](#Specification-independent-suggestions)

The API should use OS provided authentication mechanisms. The
possibility to use PAM under linux and MacOS was investigated.

#### API usage scenario[¶](#API-usage-scenario)

[Authentication API usage
scenario](/wp2-4/wiki/Authentication_API_usage_scenario)

[The gallery module](http://dev.webinos.org/specifications/draft/gallery.html)[¶](#The-gallery-module)
------------------------------------------------------------------------------------------------------

### Responsible editor[¶](#Responsible-editor)

Stefano Vercelli (Telecom Italia)

### Differences in task 4.1 implementation compared with task 3.2 specification (phase 1 API)[¶](#Differences-in-task-41-implementation-compared-with-task-32-specification-phase-1-API)

Only partial implementations done in task 4.1.

### Other suggestions for this API specification[¶](#Other-suggestions-for-this-API-specification)

In phase 1 Webinos adopted w3c gallery api
(<http://dev.w3.org/2009/dap/gallery/>). This spec now has been shelved,
so we are checking other specs to refer to.\
The following table summarizes some possible solutions:

  -------------- -------------- -------------- -------------- --------------
  **Candidate    **Short        **Implementati **Gaps**       **Notes**
  existing API** Description**  on                            
                                Status**                      

  Mozilla        It's a simple                                Not
  DeviceStorage  filesystem api                               interesting
  (<https://wiki                                              for our needs
  .mozilla.org/W                                              
  ebAPI/DeviceSt                                              
  orageAPI>)                                                  

  w3c gallery                                                 If webinos
  (web intent                                                 does not
  based):                                                     support web
  <https://dvcs.                                              intents, we
  w3.org/hg/dap/                                              should skip
  raw-file/16185                                              this api
  b62381d/galler                                              
  y/index.html>                                               

  Tizen          It is a more                                 Suggestion is
  mediaContent   complete                                     to select it
  (<https://deve version of the                               for webinos
  loper.tizen.or shelved w3c                                  
  g/help/index.j api                                          
  sp?topic=%2For                                              
  g.tizen.help.w                                              
  eb.api.device%                                              
  2Ftizen%2Fmedi                                              
  acontent.html>                                              
  )                                                           

                                                              
  -------------- -------------- -------------- -------------- --------------

The Mozilla DeviceStorage api is a filesystem api with less
functionalities than the w3c filesystem apis we adopted; so it's not
interesting for our purposes.\
The Tizen mediaContent api is similar to the gallery api previously
adopted; it also adds some functionalities (for example the possibility
to edit some metadata of the media object).\
The new w3c gallery (based on web intents).

