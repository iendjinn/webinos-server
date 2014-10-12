-   [webinos Applications and Widget Runtime
    specification](#webinos-Applications-and-Widget-Runtime-specification)
    -   [1. Formal Specification of webinos
        Application](#1-Formal-Specification-of-webinos-Application)
        -   [1.1 Packaging](#11-Packaging)
        -   [1.2 Application Interface](#12-Application-Interface)
        -   [1.3 Distributed Webinos
            Applications](#13-Distributed-Webinos-Applications)
            -   [1.3.1 Use Case Examples](#131-Use-Case-Examples)
            -   [1.3.2 Packaging Distributable
                Applications](#132-Packaging-Distributable-Applications)
        -   [1.4 Hosted Webinos
            Applications](#14-Hosted-Webinos-Applications)
    -   [2 Formal Specification Webinos Web Runtime
        Environment](#2-Formal-Specification-Webinos-Web-Runtime-Environment)
        -   [2.1 Inter-Runtime Application
            Deployment](#21-Inter-Runtime-Application-Deployment)
        -   [2.2 Web Technologies](#22-Web-Technologies)
    -   [3 References](#3-References)

webinos Applications and Widget Runtime specification[¶](#webinos-Applications-and-Widget-Runtime-specification)
================================================================================================================

This specification provides information about the structure of webinos
applications especially the packaging of Web technology based content
and additionally general technology requirements for runtimes that are
able to execute webinos applications.

1. Formal Specification of webinos Application[¶](#1-Formal-Specification-of-webinos-Application)
-------------------------------------------------------------------------------------------------

A webinos application is defined as follows:

    An application written using webinos technologies that will run on a device, across a range of devices reflecting the domains mobile,
    stationary devices, automotive or home media and/or server. The application will be able to securely and consistently access device specific features,
    communicate over the cloud and adjust to the device and context specific situation.

The set webinos technologies include several existing and upcoming web
technologies, as well as webinos-specific add-ons which enable
applications to be developed for multiple platforms. This ~~including~~
includes access to device features, transparent communication across
devices, and secure application execution. The relevant web
technologies, if already available, are referred in the dedicated
sections of this specification.

![](http://dev.webinos.org/redmine/attachments/609/Webinos_Application_Package_Neu.png)

A webinos application package consists of four types of metadata put
together in an application manifest file.

1.  Application metadata provides human-readable semantic information
    about the application itself, e.g., version, description, author
    etc., which can be presented to the user and is accessible by the
    application using APIs.
2.  The content provides all the application and layout logic and also
    media content such as images and video needed by the application.
3.  The deployment and configuration metadata provides information for
    the Web runtime about how to deploy and install the application,
    e.g., whether the application can run in the background or not and
    which view mode the application prefers to use. This metadata also
    contains information about distributed application deployment as
    well as any additional functionality the application will expose.
4.  The runtime and execution metadata part of the application package
    provides information about conditions which must be fulfilled to
    execute the application, e.g., fulfilled policies or conditions
    under which the application may be automatically executed (non user
    driven).

### 1.1 Packaging[¶](#11-Packaging)

The core structure and content of webinos applications is defined
through the W3C Widget Packaging and Configuration [Widgets]
specification. Webinos application packaging, as a superset of W3C
Widget packaging, adds some further features to this specification in
order to meet additional requirements. The following requirements show
that webinos must conform with various W3C specifications.

`WRT-01: The webinos WRT MUST be capable of processing widget packages as defined in [Widgets].`

`WRT-02: The webinos WRT MUST support the [WidgetDigSig] specification in order to verify the author and/or distributor of the application.`

`WRT-03: The webinos WRT MUST implement the URI scheme as defined in [WidgetURI] to address resources within W3C Widget and webinos application packages.`

In addition to the XML elements defined in the Widget configuration
document [Widgets] webinos applications can make use of webinos-specific
extensions. The following separate webinos-specific XML namespace must
be used to reference webinos-specific xml elements.

Webinos Extension XML namespace:
`http://www.webinos.org/webinosapplication`

The following elements are webinos-specific extensions to the metadata
part of the [Widgets] specification and MUST be supported by webinos
WRTs.

**The `distributor` element**

A distributor element represents people or an organization that
distributed the instance of a webinos application. Commonly application
stores are distributors.

Context in which this element is used:
`As a child of the widget element.`\
Content model: `Any.`\
Occurrences: `Zero or one.`\
Attributes: `href, email.`

`The email attribute represents an email address associated with the distributor. The email attribute is optional.`

`The href attribute represents an URI that associates with the distributor. The href attribute is optional.`

**Example of Usage:**\

    1 <widget xmlns="http://www.w3.org/ns/widgets" 
    2    xmlns:webinos="http://www.webinos.org/webinosapplication">
    3        <webinos:distributor email="info@examplarystore.com" href="http://www.exemplarystore.com">
    4            Examplary Store
    5        </webinos:distributor>
    6        <content src="widget.html"/>
    7 </widget>

**The `versionName` attribute of the `widget` element**

A version name element represents the version of the application in a
human-readable manner. The versionName element is optional and is not
used for application life cycle management, e.g., application update.

Context in which this element is used:
`As a parameter of the widget element.`\
Content model: `Any.`\
Occurrences: `Zero or one.`

**Example of Usage:**\

    1 <widget xmlns="http://www.w3.org/ns/widgets" 
    2    xmlns:webinos="http://www.webinos.org/webinosapplication" 
    3    webinos:versionName="Silver">
    4        <content src="widget.html"/>
    5 </widget>

**The `validfor` attribute of the `widget` element**

The *validfor* attributed defines a time period when the application is
valid and can be used. The time frame is specified in elapsed
milliseconds after the first application execution. If the specified
time is elapsed the user should not be able to execute the application
any more. This value gives only the semantic information without any
security or licensing mechanism behind. Additional security, digital
rights management (DRM) or licensing methods are implementation specific
and left unspecified.

Context in which this element is used:
`As a parameter of the widget element.`\
Content model: `Number.`\
Occurrences: `Zero or one.`

**Example of Usage: Application valid for one week**\

    1 <widget xmlns="http://www.w3.org/ns/widgets" 
    2    xmlns:webinos="http://www.webinos.org/webinosapplication" 
    3    webinos:validfor="604800000">
    4        <content src="widget.html"/>
    5 </widget>

**The `validuntil` attribute of the `widget` element**

The *validuntil* attributed defines a date and time until the
application is valid and can be used. The time frame is specified as in
milliseconds whereas the date and time is encoded as milliseconds since
midnight of January 1, 1970, according to universal time. If the
specified date and time is reached the user should not be able to
execute the application any more. This value gives only the semantic
information without any security or licensing mechanism. Additional
security, digital rights management or licensing methods are
implementation specific and left unspecified.

Context in which this element is used:
`As a parameter of the widget element.`\
Content model: `Number.`\
Occurrences: `Zero or one.`

**Example of Usage: Application valid until 12.31.2011 12am.**\

    1 <widget xmlns="http://www.w3.org/ns/widgets" 
    2    xmlns:webinos="http://www.webinos.org/webinosapplication" 
    3    webinos:validuntil="1325332800000">
    4        <content src="widget.html"/>
    5 </widget>

**The `copy-restricted` element**

Adding the *copy-restricted* element to the configuration document
indicates that copy, export or installation of the application on
another device using webinos application sharing features is forbidden.
It is possible to allow copies on devices belonging to the same personal
zone as the device where the application was installed at first, using
the *restricted-to* attribute with the value 'personal-zone'. If the
element is absent no restrictions are applied and exporting the
application to the file system and installing it on another device is
possible if the WRT provides means for exporting applications. The
information provided by the *copy-restricted* element gives only the
semantic information without any security or licensing mechanism.
Additional security, digital rights management or licensing methods are
implementation specific and left unspecified.

Context in which this element is used:
`As a child of the widget element.`\
Content model: `None.`\
Occurrences: `Zero or one.`

Context in which the restricted-to attribute is used:
`As an attribute of the copy-restricted element.`\
Content model: `DOMString.`\
Occurrences: `Zero or one.`

**Example of Usage: Allowing copies on devices of the same zone**\

    1 <widget xmlns="http://www.w3.org/ns/widgets" 
    2    xmlns:webinos="http://www.webinos.org/webinosapplication">
    3        <content src="widget.html"/>
    4        <webinos:copy-restricted webinos:restricted-to="personal-zone"/>
    5 </widget>

### 1.2 Application Interface[¶](#12-Application-Interface)

In [WidgetAPI] the W3C defines an API to access application specific
data defined in the configuration document as well as a persistence
model. This API is used and extended to provide support for the
webinos-specific XML elements defined in this specification.

     1 interface Widget {
     2 
     3     //webinos-specific attributes
     4     readonly attribute DOMString     distributor;
     5     readonly attribute DOMString     distributorEmail;
     6     readonly attribute DOMString     distributorHref;
     7 
     8     readonly attribute DOMString     versionName;
     9     readonly attribute unsigned long long validfor;
    10     readonly attribute unsigned long long validuntil;
    11 
    12     readonly attribute boolean       copyRestricted;
    13     readonly attribute DOMString     restrictedTo;
    14 
    15     //Widget standard attributes
    16     readonly attribute DOMString     author;
    17     readonly attribute DOMString     authorEmail;
    18     readonly attribute DOMString     authorHref;
    19     readonly attribute DOMString     description;
    20     readonly attribute DOMString     id;
    21     readonly attribute DOMString     name;
    22     readonly attribute DOMString     shortName;
    23     readonly attribute Storage       preferences;
    24     readonly attribute DOMString     version;
    25     readonly attribute unsigned long height;
    26     readonly attribute unsigned long width;
    27 };

As shown in the Widget object interface description several
webinos-specific attributes are added. The meaning of each new attribute
is described in the following list.

-   `distributor` attribute: The distributor attribute provides read
    only access to the distributor element's content of the config.xml
    if available. Otherwise this attribute is NULL.
-   `distributorEmail` attribute: The distributorEmail attribute
    provides read only access to the distributor's email adress if
    available. Otherwise this attribute is NULL.
-   `distributorHref` attribute: The distributorHref attribute provides
    read only access to the distributor's URI reference if available.
    Otherwise this attribtue is NULL.
-   `versionName` attribute: A human readable version name. If not set
    in the configuration document it contains the same value as the
    version attribute.
-   `validfor` attribute: A numeric value represented in milliseconds
    that indicates how long the application can be used before usage
    should be prohibited.
-   `validuntil` attribute: A numeric value represented in milliseconds
    since midnight of January 1, 1970, according to universal time that
    indicates until when the application can be used before usage should
    be prohibited.
-   `copyRestricted` attribute: A boolean value that denotes if it is
    allowed to copy the application on any other device (false) or if it
    is forbidden to copy the application to other devices (true)
-   `restrictedTo` attribute: If used the value must be "personal-zone"
    to denote that it is allowed to copy the application to devices
    within the same personal zone.

The following specification for distributed webinos applications will
add more extensions to the Widget application interface as well as to
the Widget packaging and configuration specification which are described
more comprehensively and have their own sections in the document.

### 1.3 Distributed Webinos Applications[¶](#13-Distributed-Webinos-Applications)

Webinos allows the creation of multi-device or distributed applications
not only from the execution environment point of view but also from the
deployment and packaging point of view. Webinos allows developers to
design their applications in a way that applications (or only parts of
them) can be automatically or programmatically deployed on to other
devices, e.g., because they are more suitable for the execution of the
application code because of the application design, the feature access
or because of performance reasons.

The webinos distributed application functionality allows the packaging
of any number of sub-applications, referred to as child applications,
within a main webinos application package, referred to as the parent
application. Child applications are also full webinos applications and
follow the webinos application packaging specification.

Application code encapsulated in child applications can be code where
the developer decides that it makes sense to create specific application
modules for performing certain tasks, the functionalities provided by
the modules can be used by the parent application and also can be shared
between other applications. Thus, application distribution is not only
about outsourcing code to other devices but also about using
functionalities provided by one application across others and
de-coupling application logic.

#### 1.3.1 Use Case Examples[¶](#131-Use-Case-Examples)

**1 Smart Text Input:**

`Using a smartphone as text input device for applications running on a TV set. Here, the smartphone not only sends key-codes to the “main” application, it also shows some appropriate graphics in order to support the text input. In addition, the outsourced code running on the smartphone may check the text input in order to prevent sending of unnecessary or incorrect data to the “main” application.`

**2 Smart sensors:**

`Assume that an application wants to be informed when remotely available sensor data (real sensor or any another webinos enable/compatible device) crosses a specific measurement threshold. The application could check the sensor reading periodically and take some action based on this. Since this would produce unnecessary traffic and needs the primary application to run continuously, it would be better to only get a sensor event if the threshold is reached. To achieve this, the application may outsource a piece of code to the desired sensor or device. The code locally checks the sensor/requested data until the threshold is reached. The outsourced code informs the “main” application via an event system about this so that the application can perform a specific action.`

**3 Component sharing:**

`The Android Intent programming paradigm (see http://developer.android.com/reference/android/content/Intent.html) allows easy sharing of application components between other applications. For example a tiny application is only designed for picking a location from a map and providing the attached geographic location for the selected map position. Since this task is common across multiple applications it would be an ideal candidate for cross application sharing of services. Thus, the application is able to be invoked from other applications and could send back the result to the calling application. Other possibilities like these borrowed from Android Intents could be provided to webinos applications by using the application distribution mechanism not only for distributing applications but also for sharing application features. `

#### 1.3.2 Packaging Distributable Applications[¶](#132-Packaging-Distributable-Applications)

Applications that want to make use of webinos distributed application
features have to declare the child applications which should be made
available. Three child application deployment options can be considered:

-   An application can outsource functionality to the child application
    for any application specific reason, on the same device or other
    device, to be accessible using the webinos discovery service (if
    shared functions are declared).
-   An application can share functions with other applications to allow
    reuse of existing code between multiple applications without
    allowing access to the whole application but to a dedicated
    component.
-   An application can package multiple child applications in one
    application package in order to ship and install multiple
    applications at once.

![](http://dev.webinos.org/redmine/attachments/610/Webinos_Application_Package_Neu_2.png)

To declare code as being a child application two steps are needed:

1.  Package the components to make them distributable.
2.  Declare those components as being distributable.

Packaging a child application as a distributable application works
exactly the same way as packaging a full webinos application. Thus, a
child application could be as content-rich as a full webinos application
but with a dedicated small single purpose. Applications which do not
declare any child application do not need any distributed application
related processing by the WRT. They will be installed as described in
[Widgets].

![](http://dev.webinos.org/redmine/attachments/611/Webinos_Application_Package_Neu_3.png)

`Note: In the current release webinos, supports only pre-defined child applications which are available in the parent’s application package during application installation. Future versions may support dynamic creation of application packages during application runtime by providing appropriate APIs.  Both the parent and child applications must be signed by the same authority.`

Packaged child applications must be placed in the webinos-specific
‘components’ folder which must be located in the root folder of the
parent’s application package.

**Exemplary application structure:**

-   root
    -   config.xml
    -   app.html
    -   icon.png
    -   Scripts
        -   app.js
    -   Styles
        -   small.css
        -   big.css
    -   Components
        -   child1.wgt
        -   child2.wgt
        -   child3.wgt

In addition child applications must be declared in the manifest file of
the main application in order to make use of (remote) installation of
child applications. How this needs to be done is described further in
the related Application Life Cycle specification.

### 1.4 Hosted Webinos Applications[¶](#14-Hosted-Webinos-Applications)

Apart from supporting installable applications, webinos supports the
execution of hosted web applications which does not require a permanent
installation. Hosted applications can also make use of webinos-specific
functionalities if the needed features are declared in the related
application manifest. To attach metadata and configuration data to
hosted applications, the W3C packaging and configuration is extended.
The src attribute of the content element in the application
configuration document of a widget file (.wgt) is allowed to point to an
absolute path outside of the application package. In this case there is
no need to include any other content in the package but it is still
allowed. Thus, mixing local installed content and remote content is
possible.

    1 <widget xmlns="http://www.w3.org/ns/widgets">
    2   <content src="http://www.hostedapps.com/hostedApp1.html"/>
    3 </widget>

Making the hosted application available to the user works the same as
installing a packaged webinos web application. A .wgt package file is
provided to the WRT and processed. If the WRT detects that an
application is a hosted application the WRT has to add links to the
application in order to make them accessible to the user. This, for
example, can be done by placing the referenced application icon in an
application gallery or by maintaining a bookmark list. The WRT has to
inform the user about unavailability of a hosted application if there is
no internet connection available.

In addition a hosted application MUST request access to the origin of
the hosted content by requesting access to the
`http://webinos.org/feature/internet` feature. The widget must also
specify the distinct URIs that are permitted from this origin. For
example, a hosted application with content at <https://www.example.com>
might include the following feature definition:

    1 <feature name="http://webinos.org/feature/internet">
    2     <param name="hosted-origin"   value="https://www.example.com" />
    3     <param name="hosted-page-uri" value="https://www.example.com/index.html" />
    4     <param name="hosted-page-uri" value="https://www.example.com/style.css" />
    5     <param name="hosted-page-uri" value="https://www.example.com/main.js" />
    6 </feature>

Note that the hosted-origin value MUST match the origin of the `src`
value in the `content` tag. If access to other origins is required, see
For access to other origins, see the "Application Security Controls"
section of this specification.

2 Formal Specification Webinos Web Runtime Environment[¶](#2-Formal-Specification-Webinos-Web-Runtime-Environment)
------------------------------------------------------------------------------------------------------------------

This section specifies a number of functional and non functional
requirements related to the WRT itself. This includes how webinos
applications are shared between devices, how the application life cycle
is handled, how webinos applications can be installed on WRTs, and which
Web technologies must be supported by webinos WRTs in order to define a
common set of available functionality.

### 2.1 Inter-Runtime Application Deployment[¶](#21-Inter-Runtime-Application-Deployment)

Webinos provides the ability to exchange webinos applications between
devices including export of applications to the file system to be
manually installed on another device and automatic installation using
provided WRT functionalities. This includes whole application packages
as well as child application packages which are included in a main
application package. If a WRT is asked by the user to install a select
application on another device the WRT has to provided a meaningful UI
for selecting a target device which includes, e.g, discovery of nearby
devices or of devices in the same personal zone.

For installing application on other devices within webinos the following
events are defined and must be supported by the WRT. The same mechanism
is applied if an application for remote deployment is selected using the
JavaScript Widget API for code deployment or the automatic deployment
during application installation time is applied.

**Requesting a Remote Installation on another device:**

Event type must be:
<http://webinos.org/events/application/request-installation>\
Event payload must be a JSON object with following attributes:\

     1 {
     2     name: [the name of the application that should be remotely installed]
     3     description: [the description of the application that should be remotely installed]
     4     version: [the version of the application that should be remotely installed]
     5     author: [the author of the application that should be remotely installed]
     6     id: [the application ID of the application that should be remotely installed]
     7     size: [the size of the application package in number of bytes]
     8     uri: [optional, an URI where the WRT that is requested to install an application can retrieve the application code]
     9     payloadInstallation: [optional, TRUE or FALSE while true means that an application transmission using the webinos event mechanism is requested, e.g, if an uri cannot be provided]
    10 }

**Answer to a remote installation request:**

Event type must be:
<http://webinos.org/events/application/request-installation-response>\
Event payload must be a JSON object with following attributes:\

    1 {
    2     payloadInstallation: [optional, TRUE if an application transmission using the webinos event mechanism is accepted]
    3     code: [optional if payloadInstallation is used, error code as specified in the webinos widget specification extension or 1 for a successful installation]
    4     id: [the application ID of the application that should be remotely installed]
    5     uniqueID: [optional if payloadInstallation is used, a unique id of the application that represents exactly this application installation which can be used for service discovery or remote application launch]
    6 }

**Sending application using payload:**

Event type must be:
[http://webinos.org/events/application/payload-installation?id=[application](http://webinos.org/events/application/payload-installation?id=[application)
id, must be the same as previously requested in request-installation
otherwise the event must be dropped]\
Event payload: [the binary data of the application]

After installation another request-installation-response must be sent to
the initiating device.

### 2.2 Web Technologies[¶](#22-Web-Technologies)

A Web runtime which is able to render webinos applications and wants to
claim to be compliant to the webinos specification must support
following web technologies whereas the concrete mandatory version and
feature set of each one is further defined in the Wholesale Application
Community Core Specification Version 2.0 Section 2 [WACWebTech].

-   XML and HTML Markup Language
-   JavaScript (JS)
-   Cascading Style Sheets (CSS)
-   XmlHttpRequest
-   Scalable Vector Graphics (SVG)

Beside of the definition of web technologies to be supported following
URI schemes to allow launching of specific applications must be
supported by webinos runtimes [WACURI]:

-   "http/https" in order to launch a web browser
-   "tel" in order to initiate a call
-   "sms" in order to send a short message service (SMS) message
-   "mmsto" in order to send a multimedia massaging service (MMS)
    message
-   "mailto" in order to send an email message
-   "data" in order to directly embed content (e.g.,
    data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAA...)

3 References[¶](#3-References)
------------------------------

[Widgets] <http://www.w3.org/TR/widgets/>\
[WidgetAPI] <http://www.w3.org/TR/2011/WD-widgets-apis-20110607/>\
[WidgetUpdate] <http://www.w3.org/TR/2010/WD-widgets-updates-20100928/>\
[WidgetURI] <http://www.w3.org/TR/2009/WD-widgets-uri-20091008/>\
[WidgetDigSig] <http://www.w3.org/TR/2011/WD-widgets-digsig-20110607/>\
[WACWebTech] <http://members.wholesaleappcommunity.com/corespec/>\
[WACURI]
<http://members.wholesaleappcommunity.com/corespec/web-standards.html#toc-uri-schemes>

