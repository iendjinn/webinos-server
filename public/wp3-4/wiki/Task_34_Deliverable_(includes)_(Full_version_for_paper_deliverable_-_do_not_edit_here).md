Task 34 Deliverable (includes) (Full version for paper deliverable - do not edit here)[¶](#Task-34-Deliverable-includes-Full-version-for-paper-deliverable-do-not-edit-here)
============================================================================================================================================================================

Introduction[¶](#Introduction)
==============================

In task 3.4, webinos phase 2 API specifications, the development of the
application programming interface specifications (APIs) has continued in
order to make the desired functionality available to webinos
applications. The phase 1 API specifications created in task 3.2 have
been further developed and new API specifications have been added.

Updates done[¶](#Updates-done)
------------------------------

The work is based on experiences from webinos implementations in WP4 and
WP5, updated use cases/requirements in WP2, evolving webinos
architecture specification in task 3.3 and progress in W3C
standardization. The work done includes for example:

-   Updating all API specifications to align with the latest W3C Web
    IDL-specification and API specification style.
-   Assuring that all API specifications are aligned with the real WP4
    API implementations.
-   Removing APIs specified in task 3.2 but found that we definitively
    don’t need.
-   Specifying, or referring, new APIs found that we need.
-   Aligning with latest versions of referred W3C or other API
    standards.
-   Continuing providing feedback to W3C standardization, working with
    task 8.1.

Overview of webinos phase 2 API categories[¶](#Overview-of-webinos-phase-2-API-categories)
------------------------------------------------------------------------------------------

One of the key elements of webinos is that the framework provides means
to bind to a service object in a remote execution environment. The
webinos Service Discovery API defines how a service is discovered and
how an application can bind to a remote service. The service object will
act as proxy for sending/receiving events to/from the remote peer and
hides the complexity of sending/receiving message between the peers in a
trusted manner. This mechanism is not limited to webinos defined APIs
but is also available for the APIs defined by W3C and referenced by
webinos as well as for user defined APIs. For example, an application
can use the webinos Service Discovery API to search for a geolocation
service on another device and then access this service through the
standard W3C Geolocation API.

The webinos APIs can be divided into a number of categories:

-   **Webinos core interface:** For example the webinos core interface
    that defines the webinos API namespace and gives information about
    the user's personal zone.

<!-- -->

-   **Service discovery and access:** Allows applications to discover
    services/applications on other devices or on network servers and
    access these remote services.

<!-- -->

-   **HW Resources APIs:** APIs allowing applications to access
    information and functionality relating to device HW resources such
    as GPS, camera, NFC, SIM and smart card readers, sensors, etc.

<!-- -->

-   **Application Data APIs:** APIs allowing applications read and write
    access to application capabilites such as contact items, calender
    information, messages, media files, etc.

<!-- -->

-   **Communication APIs:** APIs allowing applications to communicate
    with other applications in the same or another device.

<!-- -->

-   **Application execution APIs:** APIs allowing webinos applications
    to manage its execution or launch other webinos and native
    applications.

<!-- -->

-   **User profile and context APIs:** APIs allowing applications access
    to user profile data and user context.

<!-- -->

-   **Security and Privacy APIs:** APIs related to the security model
    for webinos.

All webinos phase 2 API specifications are available here: [Webinos
phase 2 Device
APIs](http://dev.webinos.org/deliverables/wp3/Deliverable34/)

Given the sensitive nature of the data to which these APIs grant access,
the APIs specified are either secure and privacy-enabling by design or
implemented so that access to APIs are controlled by the Webinos
security framework specified in D3.6.

Further work[¶](#Further-work)
------------------------------

The webinos project will continuously align with ongoing API
standardization in W3C and elsewhere. For example, the [W3C System
Applications Working
Group](http://www.w3.org/2012/05/sysapps-wg-charter.html) is starting up
and is chartered to define a runtime environment, security model, and
associated APIs for building Web applications with comparable
capabilities to native applications. This work is very relevant for
webinos. Furthermore, W3C is also standardizing [Web
Intents](http://www.w3.org/TR/web-intents/) and Web Intents based APIs
and webinos should explore this technology as it is maturing.

However, webinos should not only reuse standard specifications from W3C
or elsewhere but also collaborate with standardization organizations and
impact standardization work in progress. This is done within WP 8.1.

The repository for webinos APIs that are further updated is here:
[webinos latest Device
APIs](http://dev.webinos.org/specifications/new/).

Document structure[¶](#Document-structure)
------------------------------------------

In addition to the tangible API specifications, which of course is the
main part of the delivery, this delivery contains informative sections
which are:

-   Overview of the Web Application API Landscape.
-   Background information on all API specifications included in the
    delivery.
-   Results of the "Web Intents" for webinos investigation.

Web Application API landscape[¶](#Web-Application-API-landscape)
================================================================

This page provides an overview of existing API standardization and
collaboration projects.

World Wide Web Consortium (W3C)[¶](#World-Wide-Web-Consortium-W3C)
------------------------------------------------------------------

The [World Wide Web Consortium](http://www.w3.org/ "W3C") is an
international community where Member organizations, a full-time staff,
and the public work together to develop Web standards. W3C's mission is
"to lead the Web to its full potential". W3C is the most important
organization for standardizing web technology and an extensive set of
APIs for web application developers have been specified by W3C.

**W3C Web Applications (Web Apps) Working Group**

The W3C Web Applications WG provides specifications that enable improved
client-side application development on the Web, including specifications
both for application programming interfaces (APIs) for client-side
development and for markup vocabularies for describing and controlling
client-side application behavior.

This WG hosts a number of API specifications that are core for the web
as an application execution environment. APIs that are implemented in
all browers are for example XMLHTTPRequest and Document Object Model
(DOM). Other important APIs created by the Web Apps WG that are deployed
in modern browers are for example Web Workers, Web Messaging, File
Reading, Server-Sent Events and Web Sockets. The Web Apps WG has also
created a set of specifications for installable web applications, Web
Widgets, that for example are core specifications in web runtime
platforms such as [WAC](http://www.wacapps.net/web/portal/wac-2.0-spec).

See [Web Apps WG
charter](http://www.w3.org/2010/webapps/charter/Overview.html) and [Web
Apps WG Web Site](http://www.w3.org/2008/webapps/). A full list of the
WG's publications and their status can be found at [Web Apps WG
publications](http://www.w3.org/2008/webapps/wiki/PubStatus).

**W3C Device APIs (DAP) Working Group**

The mission of the Device APIs Working Group is to create client-side
APIs that enable the development of Web Applications that interact with
device hardware, services and applications such as the camera,
microphone, system sensors, native address books, calendars and native
messaging applications. Devices in this context include desktop
computers, laptop computers, mobile Internet devices (MIDs), cellular
phones, TVs, cameras and other connected devices. See the [DAP WG
charter](http://www.w3.org/2011/07/DeviceAPICharter).

A full list of API specifications created by the WG is here: [DAP
Roadmap](http://www.w3.org/2009/dap/#roadmap).

Given the sensitive nature of the data and sensors to which these APIs
grant access, the Working Group also aims at crafting APIs that are both
secure and privacy-enabling by design, based on the current Web browser
security model. This entails reusing existing browser-based security
metaphors where they apply and looking into innovative security and
privacy mechanisms where they don’t.

DAP's public web site is here: [W3C DAP](http://www.w3.org/2009/dap/).

**W3C System Applications Working Group**

The System Applications Working Group is chartered to define a runtime
environment, security model, and associated APIs for building Web
applications with comparable capabilities to native applications. This
requires stronger integration with the host platform than is the case
for traditional web pages.

The main distinction between the scope of the DAP WG ("APIs for browser
based Web Applications), and the System Applications WG ("APIs for
System Web Applications") is the security model. Browsers are designed
to cope with the user visiting untrusted web sites, necessitating a
cautious approach to security that narrowly limits what a particular
website can do. The line is drawn at "more harmful than what is
tolerable inside a sandbox". The contrast between the two contexts can
be illustrated by comparing a) an application with limited access to
specific fields in the user's contacts, and b) an application that
implements a contacts manager, where the application is entrusted with
the ability to access, create, delete and update entries. See [System
Applications WG Draft
charter](http://www.w3.org/2012/05/sysapps-wg-charter.html).

**W3C Web Intents task force**

Web Intents is a service discovery mechanism and light-weight RPC system
between web apps, modeled after the similarly-named API in Android. In
W3C a joint DAP WG / Web Apps WG task force is running. See [W3C Web
Intents wiki](http://www.w3.org/wiki/WebIntents) and [W3C Web Intents
public mailing list
archive](http://lists.w3.org/Archives/Public/public-web-intents/).

Google is the main driving player for Web Intents and is editor of the
[W3C draft Web Intents
specification](http://dvcs.w3.org/hg/web-intents/raw-file/tip/spec/Overview.html).
They also manage the [webintents.org site](http://webintents.org/) that
contains use cases and examples of Web Intents services.

In addition Sony has provided the [Web Intents Addendum - Local Services
specification](http://w3c-test.org/dap/wi-addendum-local-services/) that
defines how Services on Web Intents enabled UPnP and mDNS devices can be
discovered and accessed.

Web Intents based APIs are under development within W3C and currently
there are the following drafts:

-   [Pick Media Intent](http://w3c-test.org/dap/gallery/) (Web Intents
    based Gallery API)

<!-- -->

-   [Pick Contacts Intent](http://w3c-test.org/dap/contacts/) (Web
    Intents based Contacts API)

For more information on Web Intents see the "Web Intents for webinos
investigation" section in this delivery.

**W3C Geolocation Working Group**

The mission of the Geolocation Working Group is to define a secure and
privacy-sensitive Geolocation API for accessing location information
from device GPS receiver or network positioning information as well as a
Device Orientation Event specification for using device orientation
information originating from device accelerometer, magnetometer and
gyro.

The Geolocation API is currently implemented in major modern web
browsers and according to public information the Device Orientation
Event specification is at least implemented in iOs browser, Android
browser, Chrome, Firefox for Android and Opera Mobile for Android.

See the [Geolocation WG
Charter](http://www.w3.org/2008/geolocation/charter/charter-2).

**W3C Web Real-Time Communications (Web-RTC) Working Group**

The mission of the recently formed Web Real-Time Communications Working
Group is to define client-side APIs to enable Real-Time Communications
in Web browsers. APIs specified by the WG will enable streaming access
to device capabilities, e.g camera and microphone, and API functions for
establish peer-to-peer connections between Web browsers, independent of
the network protocols used to establish the connections between peers.

See [Web-RTC Working Group
Charter](http://www.w3.org/2011/04/webrtc-charter.html) and [Web-RTC web
site](http://www.w3.org/2011/04/webrtc/)

**Other W3C actvities creating APIs for web applications**

-   The [HTML5 specification](http://www.w3.org/TR/html5/) contains a
    number of APIs for web applications, e.g. an API for playing of
    video and audio to be used with the video and audio elements, an API
    that enabling offline Web applications and a drag & drop API.

<!-- -->

-   The [Web Notifications API](http://www.w3.org/TR/notifications/) is
    an API for displaying simple notifications to the user.

<!-- -->

-   The [Web Events Working Group](http://www.w3.org/2010/webevents/)
    develops specifications for physical multitouch interface events.

<!-- -->

-   The [HTML Speech Incubator
    Group](http://www.w3.org/2005/Incubator/htmlspeech/) investigates
    the feasibility of integrating speech technology in HTML5.

<!-- -->

-   The Near Field Communications (NFC) Working Group is being chartred.
    NFC is a form of short range wireless communication in which NFC
    devices such as mobile can communicate with each other over a
    typical distance of 4cm or less. See [W3C NFC WG draft
    charter](http://www.w3.org/2012/05/nfc-wg-charter.html).

<!-- -->

-   The Audio Working Group is chartered to develop specifications which
    define a client-side script API adding more advanced audio
    capabilities than are currently offered by audio elements. See [W3C
    Audio WG charter](http://www.w3.org/2011/audio/charter/).

<!-- -->

-   The Web Web Cryptography Working Group defines a high-level API
    providing common cryptographic functionality to Web Applications.
    See [W3C Web Web Cryptography Working Group
    charter](http://www.w3.org/2011/11/webcryptography-charter.html)

For more information on W3C standards for Web Applications on Mobile see
[Standards for Web Applications on Mobile: current state and
roadmap](http://www.w3.org/2012/05/mobile-web-app-state/). This document
summarizes the various technologies developed in W3C that increase the
capabilities of Web applications, and how they apply more specifically
to the mobile context.

Web Hypertext Application Technology Working Group (WHATWG)[¶](#Web-Hypertext-Application-Technology-Working-Group-WHATWG)
--------------------------------------------------------------------------------------------------------------------------

[WHATWG](http://www.whatwg.org/) is a community of people interested in
evolving the Web. It focuses primarily on the development of HTML and
APIs needed for Web applications. The WG was founded by individuals of
Apple, the Mozilla Foundation, and Opera Software in 2004, due to
concerns on the W3C’s direction with HTML and XHTML.

WHATWG has provided major input to the W3C HTML5 specification as well
as to other specifications relating to web applications, e.g. Web
Workers, Web Storage, the Web Sockets API, and Server-Sent Events.

WHATWG is a [W3C Community
Group](http://www.w3.org/community/about/#cg).

Mozilla Web API / Firefox Mobile OS (Boot To Gecko)[¶](#Mozilla-Web-API-Firefox-Mobile-OS-Boot-To-Gecko)
--------------------------------------------------------------------------------------------------------

Mozilla has launched the [Boot to Gecko
project](http://www.mozilla.org/en-US/b2g/about/) to create a true
Web-based Mobile Platform, i.e. a browser based Operating System built
entirely on HTML5, Javascript and CSS without the need for an
intermediate OS layer.

The Boot to Gecko project is based on standard APIs but when standards
are missing (including telephony, SMS, camera, bluetooth, USB and NFC),
they are working with standards bodies and other vendors to create them.
This work is driven in the [Mozilla Web API
project](https://wiki.mozilla.org/WebAPI).

Tizen[¶](#Tizen)
----------------

[Tizen](https://www.tizen.org/) provides an operating system and
applications based on HTML5. The Tizen SDK and API allow developers to
use HTML5 and related web technologies to write applications that run
across multiple device segments including smartphones, tablets,
netbooks, in-vehicle infotainment devices, smart TVs, and more.

The Tizen project resides within the [Linux
Foundation](http://www.linuxfoundation.org/collaborate/labs/tizen).

Tizen both uses W3C API specifications and defines their own additional
APIs, e.g. Phone Call API, Bluetooth API, Media Content (Gallery) API
and NFC API. See [Tizen
documentation](https://developer.tizen.org/documentation).

Wholesale Application Community (WAC)[¶](#Wholesale-Application-Community-WAC)
------------------------------------------------------------------------------

The [Wholesale Applications Community](http://www.wacapps.net/ "WAC")
started as an open global alliance made up of leading communications
companies including network operators, device and network equipment
manufacturers, that was committed to make it easier for developers to
innovate by using operator network APIs delivered by a single
cross-operator API platform. Concentrating in Asia for now, WAC also
supports an HTML5 based application platform.

WAC has now been folded into the GSMA, the mobile industry trade body.
The technology side of WAC's work is being split off and bought by
[Apigee](http://www.zdnet.com/blog/gardner/sonoa-becomes-apigee-offers-new-and-rebranded-api-management-and-analysis-product-lines/3868),
an API management firm. As part of the deal, Apigee will continue to
develop the WAC web runtime and APIs and provide them back to the
operators as a managed service.

WAC's current focus is a [Payment
API](http://www.wacapps.net/payment-api) supporting operator billing
through users phone bill.

Full list of WAC specifications can be found here:

-   [WAC Specifications 2.1](http://specs.wacapps.net/)
-   [WAC 1.0](http://specs.wacapps.net/1.0/dec2010/)

PhoneGap[¶](#PhoneGap)
----------------------

[PhoneGap](http://www.phonegap.com/) allows developers to build
applications with web technology that are wrapped into native
applications suited for the target platform giving access to APIs
provided by the native platform. PhoneGap is now an Apache Foundation
project under the name
[Cordova](http://phonegap.com/2012/03/19/phonegap-cordova-and-what%E2%80%99s-in-a-name/).

The following table lists the APIs available for the platforms supported
by PhoneGap: [PhoneGap supported
feature](http://www.phonegap.com/features). For API documentation see
[PhoneGap API reference](http://docs.phonegap.com/).

Google Chrome extension APIs[¶](#Google-Chrome-extension-APIs)
--------------------------------------------------------------

Google Chrome Extensions are applications, created with html, css and
JS, that run inside the Chrome browser and provide additional
functionality, integration with third party websites or services, and
customized browsing experiences. These extensions can use a set of APIs
such as chrome.bookmarks and chrome.tab to interact with the browser.
See [Chrome APIs](http://developer.chrome.com/extensions/api_index.html)
and [Chrome experimental
APIs](http://developer.chrome.com/extensions/experimental.html).

Nokia/Symbian Web Runtime environment[¶](#NokiaSymbian-Web-Runtime-environment)
-------------------------------------------------------------------------------

The [Nokia/Symbian Web
Runtime](http://library.forum.nokia.com/index.jsp?topic=/Web_Developers_Library/GUID-A359B122-CB52-492C-8C0D-0062ED0A6A89.html "WRT")
provides an application environment for web widgets that includes a set
of device APIs, [Symbian Platform Services
2.0](http://library.forum.nokia.com/index.jsp?topic=/Web_Developers_Library/GUID-A359B122-CB52-492C-8C0D-0062ED0A6A89.html).

Background information on webinos phase 1 APIs removed in phase 2[¶](#Background-information-on-webinos-phase-1-APIs-removed-in-phase-2)
========================================================================================================================================

A few APIs have been removed as stated in the table below.

  ------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **API**             **Motivation**
  Media Capture API   Superseeded by the [W3C Media Capture and Streams API](http://dev.w3.org/2011/webrtc/editor/getusermedia.html) that is better aligned with WebRTC and \<video\>/\<audio\>-tag and for which Web browsers implementations exist.
  Attestation API     Not implemented in webinos. Will be turned into an optional research API & possibly a separate project.
  User profile API    Not implemented in webinos. OpenID was implemented for demo purposes. After deeper investigations it is clear, that openID could be used for user profile experience (see <http://openid.net/specs/openid-attribute-exchange-1_0.html>)
  ------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Background information on further development of webinos phase 1 APIs[¶](#Background-information-on-further-development-of-webinos-phase-1-APIs)
================================================================================================================================================

This section describes the updates made in phase 2 to the API
specifications from phase 1 and the rationale behind these updates.

General changes due to migration to latest W3C WIDL specification.[¶](#General-changes-due-to-migration-to-latest-W3C-WIDL-specification)
-----------------------------------------------------------------------------------------------------------------------------------------

Web IDL (”widl”) defines the language webinos uses to define APIs. This
is an interface definition language that can be used to describe
interfaces that are intended to be implemented in web runtimes. Web IDL
is an IDL variant with a number of features that allow the behavior of
common script objects in the web platform to be specified more readily.

Since the webinos phase 1 APIs were specified in task 3.2 W3C has
updated the [Web IDL
specification](http://dev.w3.org/2006/webapi/WebIDL/). In task 3.4 the
webinos API specifications were aligned with the latest W3C Web IDL
specification.

The following general changes have been done to all webinos APIs:

-   “module” is no longer a valid keyword for Web IDL and all webinos
    phase 1 API specifications used ”module”. To adapt to that change
    the wrapping module Foo { } declaration in the Web IDL was removed.

<!-- -->

-   Dictionaries should be used to define bag of properties. Interfaces
    had to be used before.\
    See: <http://dev.w3.org/2006/webapi/WebIDL/#idl-dictionaries>.

<!-- -->

-   Instead of using numerical constants, the preferred approach is to
    use strings; the list of valid strings can now be defined using the
    “enum” keyword: enum Foo { "bar", "baz" };

<!-- -->

-   There is now a specific mechanism to describe callback functions
    (using the “callback” keyword) that is used instead of
    [NoInterfaceObject] interfaces.

<!-- -->

-   Generally [DOMError
    objects](http://dvcs.w3.org/hg/domcore/raw-file/default/Overview.html#error-types-table)
    in error callbacks are used instead of minting new errors for each
    API.

<!-- -->

-   The raises / getraises / setraises keywords are no longer valid.
    Re-using DOMException with a specific type is now preferred. In the
    descriptive text it is stated which exception is thrown in certain
    situations. See:
    <http://dev.w3.org/2006/webapi/WebIDL/#idl-exceptions> and
    <http://dvcs.w3.org/hg/domcore/raw-file/default/Overview.html#domexception>.

Context API[¶](#Context-API)
----------------------------

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
Context API, rather than the SPARQL specified in the previous version.
This change is due to the change off scope for the query language
towards a more structured database. All the events relating to Context
pass through the Policy Manager.

Additionally, a Scheduled API Call has been described to run on a
background Context Service, in order to allow for applications to poll
on contextual information without implementing timers on an ever running
application. This operation is now handled by webinos.

App2App Messaging API (previously named Event Handling API)[¶](#App2App-Messaging-API-previously-named-Event-Handling-API)
--------------------------------------------------------------------------------------------------------------------------

Rewrite based on the channel concept resulting in a smaller, more secure
and more implementable API. Implements indirect inter-application
communication (i.e. the applications do not directly address each
other). The API supports multiple operation modes (e.g., send-receive,
receive-only, p2p) and will use the webinos routing system under the
hood.

AppLauncher API[¶](#AppLauncher-API)
------------------------------------

Functionality of this API remains the same but asking if a certain
(webinos) application is available was changed from a synchronous to an
asynchronous method to be better suited for use in a distributed system
like webinos where RPC calls that may take a while are involved.

Messaging API[¶](#Messaging-API)
--------------------------------

Messaging API remains unchanged from the Version I (except for editorial
fixes made earlier).

As it followed the WAC specification closely and WAC added an isSync
attribute and a sync method on mail attachments, an evaluation was made
on whether this should be included in webinos. The decision was made to
exclude that. Partly on account of WAC messaging inheriting from a
synchonizeable object, which is not present in webinos and partly
because synchronization of mail attachments should be an implementation
issue and not made explicit in the API.

NFC API[¶](#NFC-API)
--------------------

This is a major rewrite from Version I. It reflects the charter for the
proposed W3C NFC Working Group, and draws upon implementation experience
for JavaScript NFC APIs at Mozilla, PhoneGap and others. The new version
of the webinos NFC API includes support for the Link Logical Control
Protocol for pushing NDEF messages between devices, and for
bi-directional asynchronous messaging. The API further allows for
discrimination between different tags for read/write operations when
there are multiple tags within operational range of an NFC controller.

Payment API[¶](#Payment-API)
----------------------------

While the version 1 payment API was sufficient to handle payments in an
idealized world (where payment providers accept webinos authentication
as secure and trustable), currently real payment providers require the
use of their own authentication process and security features. To allow
for this, the checkout method received an additional callback, allowing
payment providers to present security queries, images and web pages to
the user and receive additional confirmation to verify the payment,
based on their own (and not webinos) criteria.

The Generic Sensor API[¶](#The-Generic-Sensor-API)
--------------------------------------------------

The main changes done to this API were removing normalized values in the
sensor event and addition of new sensor types.

In the phase 1 version the sensor events contained both the measured
sensor value in the unit appropriate for the sensor type as well as a
"normalized" value between 0 and 1. However, we have not seen any use
cases for this so normalized values were dropped.

Support for humidity sensor type has been added and the rationale for
this is mainly that this sensor type is now supported in Android and we
want to provide it to webinos applications as well.

Support for heart rate monitor sensors has also been added. Heart rate
monitors are commonly used by runners and we want to provide a simple
API to developers of webinos training applications, such as the webinos
heart rate monitor application.

For the future we plan to add support for external "Internet of
Things"/Machine-to-Machine (M2M) sensors. This is an area that is
explored by webinos. See the [webinos blog on Internet of
things](http://webinos.org/blog/2012/08/13/putting-the-internet-back-in-the-internet-of-things/).
To make the API more generic and extensible and facilitate support for
external sensors we added a generic JSON coded configuration parameter
that can be used to configure specific sensors. We also added position
in the sensor event: in case a sensor has not a fixed position and a gps
module onboard, it can be useful to know the position each time a values
is retrieved.

Furthermore, W3C DAP WG is currently specifying a set of small sensor
specific APIs and as our ambition is to align as much as possible with
W3C we will consider using those APIs, when specifications are mature,
for the sensors supported instead of the webinos Generic Sensor API. W3C
is also standardizing Web Intents and Web Intents based APIs. We should
explore and work with W3C on the possibility to use Web Intents to
discover and interact with internal and external sensors/actuators.

Discovery API[¶](#Discovery-API)
--------------------------------

The Discovery API was only slightly updated. Beside of the general
changes according to WebIDL and DOMError introduction the createService
method was removed from the specification. This method was used in order
to bind to a pre-known service based on the service ID. This can be done
too with just using findService and comparing the returned services. To
not unnecessarily start discovery a serviceID field was added to the
filter field so that only this one service will be returned by the
discovery mechanism.

TV Control API[¶](#TV-Control-API)
----------------------------------

Two changes were made to the API. First was a bug fix which resulted in
cycles between Channels and TV sources. The second on was changing the
Stream attribute that represents a TV Channel to MediaStream. The
MediaStream object is used by the W3C Media Capture and Streams
specification so that there was a match because a TV Channel is "just"
another media source.

Vehicle API[¶](#Vehicle-API)
----------------------------

There are two major updates on the Vehicle API for the second iteration
of the webinos platform. First, the API exposes additional properties
available from the vehicle bus. Secondly we created a new separate API
for satellite navigation related methods of the previous API. The
motivation to create an additional API is that a navigation service can
also be available on other devices such as a smart phone or tablet.

The new supported parameters are:

-   door status (open or closed)
-   window status
-   enigne oil level
-   seat settings

There have been minor changes to follow the W3C recommendations about
API design and newly introduced features in the Web IDL specification.
Where possible, constants have been replaced by enumerations and no
interface objects have been replaced by dictionaries.

There might be further changes to the API in order align the
specification with the efforts in Genivi fo Web API.

The webinos core interface[¶](#The-webinos-core-interface)
----------------------------------------------------------

The additions in this interface are the information about the PZH name,
the PZP name, connection status and application identifier. All these
information are static and hold at the PZP end. The reason for exposing
this information to application developer is use this information to
differentiate between the PZP, the PZH and the Applications on different
devices. It also includes connection status which provides information
whether connected to the PZH or the peer.

Widget API[¶](#Widget-API)
--------------------------

The interface itself was redesigned as extension to the original W3C
Widget API recommendation so that the original attributes and functions
are not copied within the webinos specification but the extensions only.
In addition the notification related functionality was removed from the
specification, instead the W3C Web Notification API is used now for
this.

Contacts API[¶](#Contacts-API)
------------------------------

WAC and W3C APIs have been merged to create the webinos Contacts API
(formerly it was based on the W3C contacts API only). The basic set of
methods have been taken from WAC, to allow not only read access to
contacts, but also the capability to create, add, update and delete
contacts. Since W3C has a more detailed representation of the attributes
of an individual contact, the definition of contact attributes have been
taken from W3C.

Authentication API[¶](#Authentication-API)
------------------------------------------

isAuthenticated and getAuthenticationStatus methods are changed to
asynchronous to better adapt to distributed systems.\
A new callback is defined to receive isAuthenticated response.

MediaContent API (replaces W3C Gallery API)[¶](#MediaContent-API-replaces-W3C-Gallery-API)
------------------------------------------------------------------------------------------

In phase 1 webinos adopted the W3C Gallery API. This specification has
now been shelved, which means that W3C is not pursuing the approach
outlined in the specification anymore. So webinos decided to search a
new reference specification.

Three possible solutions have been checked:

-   The Mozilla DeviceStorage API; this is a filesystem API with less
    functionalities than the W3C filesystem APIs adopted by webinos;
-   The Tizen mediaContent API; this is similar to the W3C Gallery API
    previously adopted; it adds some functionality (for example the
    possibility to edit some metadata of the media object);
-   The new W3C Gallery API; which is based on Web Intents.

The new W3C Gallery API has so far been discarded since the webinos
platform does not yet support Web Intents. The decision is to adopt the
Tizen solution. If and when webinos will add support for Web Intents,
this will be re-investigated and eventually changed to the W3C solution.

WAC Device Status API and Vocabulary module[¶](#WAC-Device-Status-API-and-Vocabulary-module)
--------------------------------------------------------------------------------------------

The webinos phase 1 refers to WAC devicestatus module and has a webinos
version of the WAC devicestatus vocabulary module that adds a number of
properties needed for webinos. However, the latest version of the [WAC
devicestatus module](http://specs.wacapps.net/devicestatus/index.html)
includes the vocabulary. For webinos phase 2 a webinos version of latest
version of the WAC devicestatus module, including the added webinos
properties, has been created.

For the future we should consider alignment with W3C DAP Network
information API
(<http://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html>) and
Battery Status API
(<http://dvcs.w3.org/hg/dap/raw-file/tip/battery/Overview.html>) and
other coming device status APIs.

WAC Device Interaction API[¶](#WAC-Device-Interaction-API)
----------------------------------------------------------

The device interaction API has been adopted directly from WAC. The
primary reason for changing the API from a referred API to a webinos API
is that the status of the WAC APIs seems unclear since the recent
acquisition by GSMA. The intention is to keep the device application API
as closely as possible aligned with the WAC API in the future, provided
there are no legal or organizational reasons not to do so.

W3C Calendar API, W3C DeviceOrientation Event, W3C Geolocation API, W3C File API, W3C File API: Writer, W3C File API: Directories and System[¶](#W3C-Calendar-API-W3C-DeviceOrientation-Event-W3C-Geolocation-API-W3C-File-API-W3C-File-API-Writer-W3C-File-API-Directories-and-System)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

We continue to refer to the W3C specifications without making any
modifications and follow W3C by referring to the latest versions of the
W3C specifications.

Background information on new webinos APIs added in phase 2[¶](#Background-information-on-new-webinos-APIs-added-in-phase-2)
============================================================================================================================

This section describes the rationale behind each new API added in
webinos phase 2.

The Generic Actuator API[¶](#The-Generic-Actuator-API)
------------------------------------------------------

The webinos Generic Actuator API provides applications with an API to
control actuators in the device, connected to the device or in another
device. The API itself could be seen as opposite to the Generic Sensors
API which only allows receiving data from sensors but today it becomes
also more and more relevant to also influence the environment rather
than just monitoring it. The actuator API allows to set values in order
to change the state of an actuator and to influence the environment.
Simple example would be just an actuator of type switch that would for
example allow to turn on/off a light or a radiator or even to open/close
a door. Thereby the actuator API provides a set of possible actuator
types from switch through different types of motors up to thermostats.

Media Capture and Streams (previously named getUserMedia API)[¶](#Media-Capture-and-Streams-previously-named-getUserMedia-API)
------------------------------------------------------------------------------------------------------------------------------

For the second phase of the project it was decided to drop the
referenced [Media Capture API](http://www.w3.org/TR/media-capture-api/)
because of three reasons. First, the work on this specification from W3C
side has been stopped and is not expected to be revived. No
implementation of the original API was performed by the browser vendors.
And finally, beside attempts to implement the Media Capture API for the
Android platform, the API is not covered by any other platform in the
current implementation of the webinos system. An appropriate
substitution namely the [Media Capture and
Streams](http://www.w3.org/TR/mediacapture-streams/) is now referenced
as it promises a better acceptance and is already implemented by several
Web browser vendors, on desktop and mobile. At the core the new
referenced API provides access to the same functionality as the
abandoned API did: capturing media. To align the webinos architecture
the access to the capturing devices the services behind this API needs
to be possible to invoke remotely. But it is strongly required to fulfil
the Web browser security aspects by the service implementation as this
API constitutes a potential privacy threat if capturing devices are
activated without explicit user consent.

PeerConnection API (part of WebRTC)[¶](#PeerConnection-API-part-of-WebRTC)
--------------------------------------------------------------------------

The motivation for the PeerConnection API is mainly founded on the fact
that relaying media content indirectly, via several entities like
multiple personal zone hubs, is obviously ineffective, costly and impose
extra latency that is not acceptable for conversational media streams.
In correspondence to the [WebRTC](http://www.w3.org/TR/webrtc/) effort
which the PeerConnection API is part of, a direct media communication
between multiple Web runtimes may be possible. Besides sharing of media
content, arbitrary data transmissions (peer to peer data channels) are
discussed that could improve the responsiveness in near-realtime
applications. The acceptant for the PeerConnection API is good among Web
Browser vendors and several early implementations exist.

AppState Synchronization API[¶](#AppState-Synchronization-API)
--------------------------------------------------------------

Developing distributed applications that run on several devices forces
the developers to find ways to synchronize a set of variables
representing (partly) the runtime state of the application. With the
instruments provided by the first phase APIs the only choice is to use
application specific events and the immersive utilization of the Event
Handling API. A huge part of the app development is therefore event
specification, which is a repetitive and error-prone task. It is
desirable to mark a set of objects as being shared among multiple
application instances (either of the same application or distinct) and
have the webinos system synchronizing the objects among all participants
automatically.

Access to Secure Elements[¶](#Access-to-Secure-Elements)
--------------------------------------------------------

This provides access to contact and contactless smart cards via the APDU
protocol conforming to ISO/IEC 7816-4.

APDU is a command response protocol for invoking functions executed on a
smart card or similar device. In essence, the command consists of a 4
byte header followed by up to 255 bytes of data. The response contains a
2 byte header followed by up to 256 bytes of data. The headers and data
are specified in a suite of standards from ISO and others. It also
possible to develop custom secure elements using Java cards from
companies such as G&D and Gemalto.

The aim is to give system applications written in JavaScript, and
executing on a web run-time, a lightweight means to establish a channel
with an application on a secure element, to send it commands, and handle
the responses using byte arrays. Applications would have access to the
crypto APIs being developed in the W3C Web Crypto WG. This work would
feed into the W3C System Applications and NFC Working Groups.

Remote UI API[¶](#Remote-UI-API)
--------------------------------

In a number of instances, applications need to provide simple user
interfaces on remote devices. The typical case for that would be an
application (like an e-mail program or a calendar reminder) presenting a
notification on a TV. The TV viewer will probably not use the main
program (e-mail or calendar) on the TV itself, but on some other device
(tablet, laptop). While it is always possible to have an additional web
app that just handles the notification display on a remote device (so an
e-mail application could have the e-mail application and an additional
e-mail notification app for the TV) and this is the preferred way for
any complex interaction, there are many cases where notifications and
inputs form are very limited in functionality and the need to provide
second application and ensure that this is installed on the second
device would introduce unnecessary complications. This is specifically
the case in situations where notifications are very rare and the user
(or application provider) does not see the need to install a secondary
app on a target device. For example, an application that notifies the
user of some critical condition of the car in the garage is likely to
find that the counterpart of the application has not been properly
installed on the TV.

Allowing remote access to the UI of a remote device allows applications
to provide simple notifications and input forms on a remote device in an
easy to use and providable way.

Navigation API[¶](#Navigation-API)
----------------------------------

The Navigation API is a spin off the Vehicle API. Whereas the Vehicle
API provides vehicle specific data, the Navigation API exposes the
functionality to interact with a routing service. These services are not
necessarily restricted to the vehicle environment and can be provided on
smartphones as well. The methods have not been changed.

Web Notifications API[¶](#Web-Notifications-API)
------------------------------------------------

The idea of the Web Notifications API is to show small notifications to
the user in order to notify that "something" that could be of interest
to the user has happened. During the first phase of the project this
functionality was implemented in the webinos Widget API but recently W3C
developed a specific API for notifications so we changed our
specifications to use the W3C API. There were some changes made
regarding security/privacy. The W3C API provides two functions to handle
permission requests. These were removed within webinos in favour of
using the webinos security and policy system.

  ---------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------
  High level Requirements      Notes
  Display notification         An application want's to notify that something happened to the user (new eMail, task completed, etc)
  Discard notification         The user should be able to discard the notification
  Accept notification          The user should be able to accept the notification (for example in order to activate the notifying application so that more details can be shown)
  Close a shown notification   An application should be able to close a shown notification, for example in order to update the notification with a newer one
  ---------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------

Web Intents for webinos investigation[¶](#Web-Intents-for-webinos-investigation)
================================================================================

Introduction[¶](#Introduction)
------------------------------

Web Intents is a service discovery mechanism and light-weight RPC system
between web applications, modeled after the similarly-named API in
Android. Standardization is in progress and W3C runs a joint DAP WG /
Web Applications WG task force. See [W3C Web Intents
wiki](http://www.w3.org/wiki/WebIntents) and [W3C Web Intents public
mailing list
archive](http://lists.w3.org/Archives/Public/public-web-intents/).

Google is the main driving player for Web Intents and is editor of the
[W3C draft Web Intents
specification](http://www.w3.org/TR/2012/WD-web-intents-20120626/). They
also manage the [webintents.org site](http://webintents.org/) that
contains use cases and examples of Web Intents Services. Native support
for Web Intents is currently implemented in Chrome for desktop. However,
Google's plans for supporting Web Intents in Chrome for Android are
currently unclear. Current public information only describes a project
under Google Summer of Code 2012 for integrating Web Intents for Android
Intents, see [WebIntents on
Android](http://code.google.com/p/openintents/wiki/GSoC2012Ideas#WebIntents_on_Android).
The project can be followed at github, [openintents /
gsoc2012](https://github.com/openintents/gsoc2012).

Mozilla has also specified a similar concept called [Web
Activities](https://wiki.mozilla.org/WebAPI/WebActivities) and [Web
Activities: counter-proposal to Web
Intents](http://lists.w3.org/Archives/Public/public-web-intents/2012Jun/0061.html).

W3C is driving Web Intents as the standard for web based service
discovery and it is important to align webinos with Web Intents.
However, the concept is still not established enough for webinos to make
a complete shift to a Web Intents based architecture. Standardization is
in progress and the only existing browser native implementation is
Google Chrome for desktop. We do not yet know how the final standard
will look like. An example is Ian Hickson's proposal for merging the
W3C/Google and Mozilla concepts. See [register\*Handler and Web
Intents](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-July/036719.html).

So far webinos activities on Web Intents have been to impact the
development of the standard in W3C. The webinos project is active in the
W3C Web Intents task force through several partners, Sony, W3C and
Telecom Institute Paris. One example is Sony's submission of the [Web
Intents Addendum - Local
Services](http://w3c-test.org/dap/wi-addendum-local-services/)
specification to support discovery and use of Services on Web Intents
enabled devices in local wifi networks.

This section of the task 3.4 delivery report provides basic information
on Web Intents and gives a high level suggestion for aligning webinos
with Web Intents, i.e. making webinos Services discoverable for Web
Intents enabled web applications.

Web Intents standardization overview[¶](#Web-Intents-standardization-overview)
------------------------------------------------------------------------------

### Web Intents basics[¶](#Web-Intents-basics)

The [W3C Web Intents specification](http://www.w3.org/TR/web-intents/)
is currently a working draft. All three editors are from Google.

The basic Web Intents concepts are:

-   An **Intent** is an action to be performed by a Service and is
    defined by:
    -   **Action**: a URI defining what to do (share, pick, view, etc)
    -   **Type**: the data type to perform the action on (image, url,
        json etc)

<!-- -->

-   A **Client** web app requests an Intent be handled, the User Agent
    allows the user to select which Service to use, and the Service
    performs the action of the Intent, possibly using data passed as
    input in the Intent.
    -   Client Web Apps requests an action to be performed by creating
        an Intent and issuing ”startActivity”.

<!-- -->

-   A **Service** is normally implemented as a web application. It lists
    the Intents it can handle and executes the action of the intent. A
    Service is defined by:
    -   Action it can handle.
    -   Type it can handle.
    -   A Service may return data as output to the Client

<!-- -->

-   Services must be registered prior to being available for Client web
    apps to use and there are several ways to register Web Intents
    Services, for example:
    -   Markup, the \<intent\> tag, is used by web pages that register
        Services. A Web page can register itself or another same domain
        web page as the Service handler.
    -   For the Chrome Web Intents implementation Services are
        registered through the [Chrome manifest
        file](http://code.google.com/chrome/extensions/manifest.html#intents)
    -   Dynamic Service registration based on local network service
        discovery is also specified according to [Web Intents Addendum -
        Local
        Services](http://w3c-test.org/dap/wi-addendum-local-services/).
        See the section below on local network service discovery.
    -   Registration/Unregistration through a JS API is also proposed.

### Web Intents based APIs[¶](#Web-Intents-based-APIs)

Web Applications can use Web Intents as a general service discovery
mechanism and Web Intents based APIs can be used to interact with the
service. However, there is still much to do in standardizing Web Intents
based APIs. Currently there are following W3C drafts:

-   [Pick Media Intent](http://w3c-test.org/dap/gallery/) (Web Intents
    based Gallery API)

<!-- -->

-   [Pick Contacts Intent](http://w3c-test.org/dap/contacts/) (Web
    Intents based Contacts API)

In addition the following pages deal with interaction patterns between
Client and Service applications but they don't specify tangible APIs:

-   [webintents.org](http://webintents.org/) Contains a list of intents
    that Google believes the majority of applications and services will
    use and data formats for interaction between Clients and Services.
    However, the level of detail is not enough for providing full
    interoperability between Clients and Services.

<!-- -->

-   [Web Intents payload data format for MIME
    types](http://www.w3.org/wiki/WebIntents/MIME_Types): Proposes
    payload data format clients must use, and services can expect, when
    using MIME type specifiers.

<!-- -->

-   [Web Intents payload data format for schema.org
    types](http://www.w3.org/wiki/WebIntents/schema.org_Types): Proposes
    payload data format clients must use, and services can expect, when
    using schema.org types are used.

Note that some Web Intents use cases require simple RPC APIs and some
use cases require APIs supporting a longer lasting relation between the
Client application and the Service application.

-   RPC APIs: Client sends payload data to the Service with intents
    attributes and Service returns data with the intents invocation
    method callback function. The W3C [Pick Media
    Intent](http://w3c-test.org/dap/gallery/) API and [Pick Contacts
    Intent](http://w3c-test.org/dap/contacts/) are examples of RPC-based
    APIs.

<!-- -->

-   Message channel based APIs/protocols: Web Intents allows a longer
    lasting relation between the Client and the Service by using an HTML
    message channel. On top of this message channel a high level
    protocols can run. For an example of the case when an HTML message
    channel between the Client and Service pages is used to run a high
    level protocol see slide 18 in the presentation [W3C Web Intents -
    Local Network Service
    Discovery](http://www.w3.org/wiki/images/2/2e/V4_W3C_Web_Intents_-_Local_UPnP_Service_Discovery.pdf).
    Here a high level "TV Control Protocol", independent of low level
    communication (for example UPnP) method and details, is used by the
    Client web application.

When comparing Web Intents with the [webinos Service Discovery
API](http://dev.webinos.org/specifications/new/servicediscovery.html) we
see that one advantage with the webinos API is that existing standard or
webinos JavaScript APIs are used to interact with the discovered and
selected Service. For Web Intents there is still much to be done in
defining the APIs/protocols to use between Clients and Services.

### Web Intents for local network service discovery[¶](#Web-Intents-for-local-network-service-discovery)

Web Intents is a general Service Discovery concept and Services, capable
of executing the requested Action, could be located "anywhere". This
means that Web Intents Services are not only static registered web
services but that they could also be dynamically discovered local
services, e.g. services on UPnP enabled devices in local wifi networks
or services in devices that are locally connected through Bluetooth or
any other short range communication method. These dynamic Services may
or may not have a UI.

To support discovery and usage of Web Intents Services on local network
devices Sony has provided the [Web Intents Addendum - Local
Services](http://w3c-test.org/dap/wi-addendum-local-services/)
specification that defines how Services on Web Intents enabled UPnP and
mDNS devices can be discovered and accessed. There is also a demo and a
presentation, see [WebIntents/SonyMobile - Local Network Service
Discovery](http://www.w3.org/wiki/WebIntents/SonyMobile_-_Local_Network_Service_Discovery).
The basic idea with this proposal is that UPnP and other common low
level service discovery mechanisms should be supported by the UA and
that this will be utilized by the UA's Web Intents implementation to
discover and dynamically register local network services.

The [W3C WebIntents/Home Discovery and Web
Intents](http://www.w3.org/wiki/WebIntents/Home_Discovery_and_Web_Intents)
also lists different use cases and solution proposals for "Home
discovery" with Web Intents.

In addition Opera and CableLabs have submitted an unofficial draft of an
API for discovery and access to local network services that is not based
on Web Intents, [Networked Service Discovery and
Messaging](http://people.opera.com/richt/release/specs/discovery/Overview.html).

### Web Intents and Sensor use cases[¶](#Web-Intents-and-Sensor-use-cases)

It is proposed to use Web Intents as a service discovery mechanism for
sensors and that a generic sensor API will be layered on top of Web
Intents. This work has not yet progressed in W3C so far but it is
important that webinos get involved as well.

### Demos[¶](#Demos)

-   Google's examples and demos at webintents.org:
    <http://examples.webintents.org/> and <http://demos.webintents.org/>
-   Sony Mobile simple Web Intents image picker demo: [SoMC Web Intents
    image picker
    demo](http://dl.dropbox.com/u/30360043/Web%20Intents%20File%20Picker%20V16/index.html)
-   Sony Mobile demo video on Web Intents for local service (UPnP)
    discovery. Use case is "select remote device for to play video and
    control playback". "Video of demo [Play video on remote device using
    Web
    Intents](https://docs.google.com/file/d/0B-2pb_m94nPxRGV5LTRvM0pLaUU/edit)

### Summary of links on Web Intents:[¶](#Summary-of-links-on-Web-Intents)

-   [W3C Web Intents specification](http://www.w3.org/TR/web-intents/)
-   [W3C Web Intents Addendum - Local
    Services](http://w3c-test.org/dap/wi-addendum-local-services/)
-   [Google Web Intents use cases, examples,
    etc](http://webintents.org/)
-   [W3C Web Intents wiki](http://www.w3.org/wiki/WebIntents)
-   [W3C Public W3C Web Intents maling list
    archive](http://lists.w3.org/Archives/Public/public-web-intents/)
-   [W3C wiki WebIntents/SonyMobile - Local Network Service
    Discovery](http://www.w3.org/wiki/WebIntents/SonyMobile_-_Local_Network_Service_Discovery)

Aligning webinos with Web Intents[¶](#Aligning-webinos-with-Web-Intents)
------------------------------------------------------------------------

### Goal[¶](#Goal)

The goal for aligning webinos with Web Intents is to allow web
application to discover and use standard Web Intents Services residing
"anywhere" in the cloud or in the local network as well as Web Intents
enabled webinos Services.

### Where does the User Agent Web Intents implementation reside?[¶](#Where-does-the-User-Agent-Web-Intents-implementation-reside)

Currently support for the Web Intents APIs are implemented in the
browser, either through a native implementation as in Chrome, or through
a JavaScript shim that is included in Client and Service web pages. The
list of registered Services is stored in local memory in the device in
which the browser is running. This model is not perfect for a
cross-device concept as webinos as user's should be able to register
Services that are accessible from the user's all devices.

A proposal has been raised by a webinos partner in W3C on separating a
Web Intents Agent (WIA) from the User Agent and allowing this WIA be
implemented in another entity than the browser, for example the PZP. The
thread starts here:
<http://lists.w3.org/Archives/Public/public-web-intents/2012Jun/0024.html>.

For webinos there are several possibilities, for example:\
1. Reuse the browsers native Web Intents implementation. Currently only
Google Chrome for desktop provides native support for Web Intents but it
is expected that other browsers will follow. This would mean that users
will experience a UI for webinos Web Intents Services that is consistent
with any other Web Intents Services but will limit the possibilities for
webinos to what is provided by the browser implementation and APIs.

2\. De-couple the Web Intents implementation from the browser or widget
runtime and create a webinos implementation of the "Web Intents Agent"
in the PZP. This would make webinos support for Web Intents independent
of browsers and widget engines used and also easier to provide a
repository of registered Web Intents Services that can be shared among
the different devices in a user's personal zone. This repository could
for example be located in the PZH. However, privacy issues, for example
the feature that Client and Service web applications are anonymous to
each other, must be considered.

3\. Implement support for Web Intents for webinos, or parts of Web
Intents, by using browser extension capabilities. The [Chrome socket API
extension](http://developer.chrome.com/trunk/apps/app_network.html)
could for example be used to implement support the Web Intents addendum
for local network services through the ability to get access to UDP.

### Registration of Webinos Web Intents Services[¶](#Registration-of-Webinos-Web-Intents-Services)

The W3C Web Intents specification defines Service registration markup
with the \<intent\> tag,
<http://www.w3.org/TR/web-intents/#registration-markup>. Web pages can
register themselves as Service handlers or other same-origin pages as
Service handlers. However, this Service registration method is currently
not implemented in Chrome. Instead Chrome Web Intents Services must be
registered in the Chrome manifest file manifest.json,
<http://developer.chrome.com/extensions/manifest.html#intents>.

There is also ongoing discussions on adding a JS API for registration
and unregistration.

In addition dynamic registration of Web Intents Services on locally
discovered UPnP and mDNS devices are specified in [Web Intents
Addendum - Local
Services](http://w3c-test.org/dap/wi-addendum-local-services/). Here a
"Web Intents document" retrieved from the discovered UPnP or mDNS device
contains the registration markup.

For webinos it seems reasonable to declare a Service to be Web Intents
enabled in the manifest file. This file could for example contain a link
to an html page that contains registration markup or JS for
registration. Compare with the "Web Intents document" for UPnP and mDNS
devices as described in the [W3C Web Intents Addendum - Local
Services](http://w3c-test.org/dap/wi-addendum-local-services/), section
4.1.3.

It should be considered if there should be two states in the
registration process:

1.  Discovered but unregistered Services are stated as “suggested
    Services” in the Web Intents Service picker.
2.  When the user explicitly has approved, in the Service picker, when
    configuring the system or in any other situation, to use a suggested
    Service it is moved to the list of “selectable Services”.

The Chrome Web Intents implementation works similar to above.

### Service invocation[¶](#Service-invocation)

When a web application invokes an Intent through startActivity () and
the Web Intents Service picker is visible in the User Agent the
suggested and selectable Services that are able to handle the Action and
Type of the Intent is displayed in the Service picker.

Invoking a webinos Web Intents Service is basically done in the same way
as for any other Web Intents Services the webinos access control
framework will control allow or deny access based on Client web
application origin, Service identity and policy settings.

### Interaction between webinos applications and webinos Web Intents Services[¶](#Interaction-between-webinos-applications-and-webinos-Web-Intents-Services)

The section [Web Intents based
APIs](/t3-4/wiki/Web_Intents_for_Webinos_investigation#Web-Intents-based-APIs)
describes the situation on Web Intents based APIs. So far W3C has only
specified RPC like Web Intents based APIs. However, use cases that
require a long lasting relation between the Client application and
Service are common. For example, running a web application that controls
video playback on a remote TV device or running a web application
continuously using data from sensors on a remote device. So we need:

1\. Specified high level protocols that run on top of an html message
channel running between the Client and Service web applications.

2\. The ability to run a Service application in the background, i.e.
hidden with no UI, as many use cases require that the UA continues to
show the Client Web Application after the Service has been selected.

For 1 one idea could be to facilitate for application developers by
creating JS libraries of simple methods on top of the message channel
protocol used to interact with the Service. This would make it possible
to reuse existing JS APIs and use them to access Services selected
through Web Intents. For example, the user has a Web Intents enabled
UPnP device, providing a remote video view Service, The Client web
application communicates with the Service handler page through a high
level “video view” protocol (“Play”, “Stop”, “Pause”, “Resume”, etc). A
JS library could then be included by the Client web application and this
library could have JS methods for Play”, “Stop”, “Pause”, “Resume”, etc.

For 2 the [W3C Web Intents
specification](http://www.w3.org/TR/web-intents/) does currently not
allow "hidden" Services. Only Service disposition with a new browser
window or disposition inline the Service picker is allowed. Google's
motivation for not allowing disposition "hidden" is that running
Services in the background with no UI would be a security issue.
However, there is an action on Sony to propose how disposition "hidden"
could be provided in a secure manner.

### Security and privacy comparison[¶](#Security-and-privacy-comparison)

The existing webinos discovery API and Web Intents have different
security and privacy models which would need to be aligned more closely.
Web Intents define the following access control points:

-   *Registration* - The decision to register an intent service as
    'selectable'.
-   *User consent* - The user's consent is granted when they make the
    decision to select a particular intent service at runtime.
-   *Authenticating users and services* - The standard web model is
    followed. An intent service may require user authentication and
    services may be offered through HTTPS sessions.

In comparison, the webinos discovery system relies on:

-   *Registration* - Each device offering a service must be explicitly
    connected to a personal zone before it can be accessed. This is
    either through enrolment (when adding a new device belonging to the
    user) or through certificate exchange (when connecting to a device
    outside the personal zone).
-   *User consent* - The policy system is used to authorise application
    installation and api invocation. Policies can be set when an
    application is installed or can be modified subsequently. Policies
    can change based on the user's environment, such as whether they are
    roaming or on a local wifi network. A policy might require user
    consent once, every time or never.
-   *Authenticating users and services* - The personal zone overlay
    network is relied upon to mutually authenticate services to users.

These are similar but with key differences. Firstly, registration in
webinos is a more time-consuming process and is most suited to creating
personal networks rather than registering arbitrary services. This
allows authentication to be mutual and (arguably) stronger, but imposes
a higher overhead. Secondly, the consent model in webinos is more
flexible but also more complicated. Thirdly, In Web Intents, the consent
process is combined with a service selection process, which could be
considered an advantage in usability. However, this fails to satisfy use
cases where the application needs to maintain some control over the
services selected (e.g., specifying that they all belong to the same
device) or where the application wants to save the user's choice of
service provider. Finally, the discovery approach in webinos is
currently vulnerable to *fingerprinting* attacks, allowing users to be
tracked between different web applications. Web Intents, in comparison,
are potentially more privacy-preserving as they explicitly don't allow
the enumeration of potential intent service providers.

To align the two models would require the following changes:

-   webinos would need to have altered policy settings which referred to
    the intent service selection process. E.g., a policy would need to
    answer the question: can application X invoke the 'share' intent? In
    this case, the possible policy settings might be:
    -   "yes, show intent selection prompt each time",
    -   "yes, show intent selection prompt the first time",
    -   "yes, always use intent provider Y"
    -   "no"
-   These settings would not make webinos incompatible with web intents,
    and would *still* support flexible use-cases based on user
    environment information.
-   webinos would either need to stop supporting applications which
    require visibility of all services available in a personal zone, or
    support both web intents *and* the discovery API. These would need
    to be made compatible at the API level.
-   webinos services are generally more trusted than arbitrary intent
    service providers. They are hosted on known devices and are likely
    to store data in well-known places. They use a standard
    authentication process which is arguably more trustworthy.
    Furthermore, the privacy implications of using a service provided by
    a personal zone device are likely to be understood. Online web
    intent services, on the other hand, may authenticate users
    differently (or not at all) and may provide no transport security.
    As such, presenting both webinos services and web intent services to
    the user as equal options during intent service selection might be
    misleading. Work would need to be done to identify the best way of
    presenting personal zone services and web services differently to
    users.

### Web Intents versus webinos AppLauncher API[¶](#Web-Intents-versus-webinos-AppLauncher-API)

A question was raised whether Web Intents could be used as an
application launcher mechanism.

The general answer is yes in the context of one web application
launching another web application of a certain type. However, comparing
with the [webinos AppLauncher
module](http://dev.webinos.org/specifications/draft/launcher.html) there
are signficant differences.

webinos AppLauncher module:

-   Provides two methods:
    -   Launch a webinos application that is installed on the same
        device. The application to launch can be either webinos native
        or an installed webinos application and is identified by a
        unique application identity.
    -   Check if a webinos application, identified by a unique
        application identity, is installed on the device.
-   The operation of the API is guided by application execution
    policies, which can be modified by user.

Web Intents:

-   Allows a web application to launch another "Service" web application
    identified by the action the Service performs and a type. For
    example pick an image (action="Pick", type="image/\*") or view a
    video (action="View", type="video/\*"). The User Agent allows the
    user to choose the Service application to use among a list of
    registered Services that are capable of handling this action and
    type. There is also a possibility for a Client application to point
    out a unique Service web application that should be launched, see
    [Explicit
    Intents](http://dvcs.w3.org/hg/web-intents/raw-file/tip/spec/Overview.html#explicit-intents).
-   The Service executing the Intent does not have to be installed in
    the device, it can reside anywhere.
-   The Client web application requesting the action to be performed and
    the executing Service web application are annonymous to each other
    if not an explicit Service is stated when the Client invokes the
    Intent.
-   The security model is based on user consent when selecting a Service
    to use for the requested Action. Operation is not guided by any
    pre-configured application execution policies. However, a Web
    Intents enabled Service can of course implement any standard web
    security mechanisms as needed, e.g.login with user credentials or
    transport layer security.
-   There is currently no explicit method to check the availability of a
    certain Service application and expose this information to the
    requesting Client web application (and I don't think it should due
    to privacy/fingerprinting reasons). However, the specification opens
    up for applications to provide a user controlled check of registered
    Services. According to the Web Intents specification, section 4, 2nd
    paragrah:

> The User Agent must not allow web pages the ability to discover
> passively which services the user has configured to handle particular
> intents, or any intents, whether by enumeration or exact query. There
> may be mechanisms for the user to actively grant this information to
> web pages, but it must not be made available passively.

So, it should be possible to provide a method, that is governed by
webinos security policies, to check registered Web Intents Services.

The conclusion is that Web Intents is a more general concept than
webinos application launching but it should be possible to use Web
Intents as an application launcher mechanism in the webinos context.

