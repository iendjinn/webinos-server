Spec - Foundations[¶](#Spec-Foundations)
========================================

The Foundations specification is about defining the structure of webinos
applications and how they are able to interact with webinos. This also
includes packaging of applications, application APIs and embedding
webinos extensions in applications.

Formal Specification of Webinos Application[¶](#Formal-Specification-of-Webinos-Application)
--------------------------------------------------------------------------------------------

A webinos application is defined as follows (citing D2.2):

    An application written using webinos technologies that will run on a device, across a range of devices reflecting the domains mobile,
    stationary devices, automotive or home media and/or server. The application will be able to securely and consistently access device specific features,
    communicate over the cloud and adjust to the device and context specific situation.

Webinos technologies include several existing and upcoming web
technologies, as well as webinos-specific add-ons which enable
applications to be developed for multiple platforms. This including
access to device features, transparent communication across devices, and
secure application execution. The relevant web technologies, if already
available, are referred in the dedicated sections of this specification.

![](Webinos_Application_Package_Neu.png)

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

### Packaging[¶](#Packaging)

The core structure and content of webinos applications is defined
through the W3C Widget Packaging and Configuration [Widgets]
specification. Webinos application packaging, as a superset of W3C
Widget packaging, adds some further features to this specification in
order to meet additional requirements. The following requirements show
that webinos must conform with various W3C specifications.

`WRT-01: The webinos WRT MUST be capable of processing widget packages as defined in [Widgets].`

`WRT-02: The webinos WRT MUST support the [WidgetDigSig] specification in order to verify the author and/or distributor of the application.`

`WRT-03: The webinos WRT MUST support application network access control as defined in the Widget Access Request Policy [WARP] for applications that want to communicate with remote resources.`

`WRT-04: The webinos WRT MUST implement the URI scheme as defined in [WidgetURI] to address resources within W3C Widget and webinos application packages.`

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

### Application Interface[¶](#Application-Interface)

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
    12     //Widget standard attributes
    13     readonly attribute DOMString     author;
    14     readonly attribute DOMString     authorEmail;
    15     readonly attribute DOMString     authorHref;
    16     readonly attribute DOMString     description;
    17     readonly attribute DOMString     id;
    18     readonly attribute DOMString     name;
    19     readonly attribute DOMString     shortName;
    20     readonly attribute Storage       preferences;
    21     readonly attribute DOMString     version;
    22     readonly attribute unsigned long height;
    23     readonly attribute unsigned long width;
    24 };

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

The following specification for distributed webinos applications will
add more extensions to the Widget application interface as well as to
the Widget packaging and configuration specification which are described
more comprehensively and have their own sections in the document.

### Distributed Webinos Applications[¶](#Distributed-Webinos-Applications)

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

### Use Case Examples[¶](#Use-Case-Examples)

**1 Smart Text Input:**

`Using a smartphone as text input device for applications running on a TV set. Here, the smartphone not only sends key-codes to the “main” application, it also shows some appropriate graphics in order to support the text input. In addition, the outsourced code running on the smartphone may check the text input in order to prevent sending of unnecessary or incorrect data to the “main” application.`

**2 Smart sensors:**

`Assume that an application wants to be informed when remotely available sensor data (real sensor or any another webinos enable/compatible device) crosses a specific measurement threshold. The application could check the sensor reading periodically and take some action based on this. Since this would produce unnecessary traffic and needs the primary application to run continuously, it would be better to only get a sensor event if the threshold is reached. To achieve this, the application may outsource a piece of code to the desired sensor or device. The code locally checks the sensor/requested data until the threshold is reached. The outsourced code informs the “main” application via an event system about this so that the application can perform a specific action.`

**3 Component sharing:**

`The Android Intent programming paradigm (see http://developer.android.com/reference/android/content/Intent.html) allows easy sharing of application components between other applications. For example a tiny application is only designed for picking a location from a map and providing the attached geographic location for the selected map position. Since this task is common across multiple applications it would be an ideal candidate for cross application sharing of services. Thus, the application is able to be invoked from other applications and could send back the result to the calling application. Other possibilities like these borrowed from Android Intents could be provided to webinos applications by using the application distribution mechanism not only for distributing applications but also for sharing application features. `

### Packaging of Distributable Applications[¶](#Packaging-of-Distributable-Applications)

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

![](Webinos_Application_Package_Neu_2.png)

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

![](Webinos_Application_Package_Neu_3.png)

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

**Application Installation on multiple Devices**

**Automatic Deployment**

During installation of a parent application its child applications, if
any, can be automatically installed on the same device as the parent
application. The WRT may provide the possibility to also install child
applications on other devices if not prohibited by the child application
definition in the configuration file (config.xml).

The child application that should be installed on other devices must
provide a child element in the application’s configuration document.
This will trigger the webinos runtime to install the related child
application. If the element is absent, the related child application
will not be automatically deployed.

**Example of Usage:**

    1 <widget xmlns="http://www.w3.org/ns/widgets" 
    2    xmlns:webinos="http://www.webinos.org/webinosapplication" 
    3    id=”http://exampleapp.org/app1” webinos:type="container">
    4        <webinos:child webinos:install="any">child1.wgt</webinos:child>
    5        <webinos:child webinos:install=”local”>child2.wgt</webinos:child>
    6        <webinos:child>child3.wgt</webinos:child>
    7 </widget>

-   Line 3: The application package is defined as type 'container'. This
    means that no parent application exists in the application package
    but, if defined in the manifest, child applications can be installed
    when the WRT processes the application package, it is a convenience
    mode for installing multiple applications using only one package.
    After the WRT finished processing the package it can be removed from
    the device because there is no application that can be executed. If
    no parent and no child applications are defined nothing has to be
    installed and the application package can be removed. The type
    attribute is optional. If the type is set to 'container' the content
    element is not evaluated and can be absent. The other way round, if
    the container attribute is absent, the content element must be
    declared in the manifest.
-   Line 4-5: The install attribute specifies whether a child
    application should be installed directly after installing the main
    application package (set to 'any' or 'local') or not (any other
    value or absent). If not set to one of the allowed values, child
    applications can be installed later using the webinos Widget API.
    Before starting installation of a webinos application the WRT has to
    check if any declared child applications are available. If not the
    installation process must be cancelled and the user must be informed
    about an invalid application package. If *install* is set to 'any'
    the WRT must show a native WRT dialog to the user containing a set
    of available devices where the child application can be installed on
    to the user. Available devices could be every device of the user’s
    personal zone or other devices accessible to the user. The WRT must
    show information about the child application available in the
    configuration document (e.g., author, title, version,
    description,...) to the user based on the application package source
    and destination device, to allow the user to double check what will
    be installed. If 'any' is specified, the user may select one, more
    or all available devices for installing the child application.
    Afterwards the WRT has to install the application on the selected
    device as specified in section Inter-Runtime Application Deployment.
    If set to 'local' the related child application must be installed on
    the same device as the main application was previously installed.
    The user does not have to select a target device, but should be
    informed that this will install only locally.
-   Line 6: Each child application contained in the application package
    must be advertised using the child element. Child applications
    contained in the package but not advertised in the configuration
    document are rejected by the WRT and, thus, cannot be automatically
    installed during application installation phase or using the webinos
    Widget API. Before starting installation of a webinos application
    the WRT has to check if any child application declared in the
    configuration document is also physically available in the package.
    If not the installation process must be cancelled and the user must
    be informed about an invalid application package.

`Note: In future versions more advanced automatic deployment mechanisms may be introduced which allowing stating a number of filters within the remote-install element of the configuration document in order to define appropriate devices for application deployment.`

**On Request Deployment**

Webinos allows remote installation during installation of the parent
application and it is also possible to deploy code on demand at the
application runtime. Webinos provides an application deployment API
using the Widget interface which takes the application ID of the child
that should be installed. The application ID must be specified in the
configuration document of the child as specified in [Widgets]. Following
the WebIDL specification for deploying child applications:

     1 
     2 [Callback=FunctionOnly, NoInterfaceObject] interface DeploymentSuccessCallback {
     3     //called if a child application was successfully installed
     4     //childID is the application id which was used during deployChild
     5     //serviceID is the unique application id that can be used to explicitly address the deployed service within webinos service discovery
     6     void onSuccess(in DOMString childID, in DOMString serviceID);
     7  };
     8 [Callback=FunctionOnly, NoInterfaceObject] interface DeploymentErrorCallback {
     9       void onError (in DeploymentError error);
    10  };
    11 
    12 interface DeploymentError {
    13       const unsigned short INSTALLATION_CANCELED_BY_USER = 101;
    14       const unsigned short PERMISSION_DENIED_ERROR  = 102;
    15       const unsigned short NOT_REACHABLE  = 103;
    16       const unsigned short UNKNOWN_APPLICATION_ID  = 104;
    17       const unsigned short ALREADY_INSTALLED = 105;
    18       const unsigned short INSTALLATION_ERROR_OTHER = 106;
    19       readonly attribute unsigned short code;
    20       readonly attribute DOMString applicationID;
    21 };  
    22 
    23 interface Widget {
    24         //Deploys a child application known to the WRT through the definition in the application s manifest
    25         //file on another device. If local = false or not specified the WRT has to provide a list of available
    26         //devices to the user where the application should be installed on, if local = true the WRT has to
    27         //install the selected child on the same device as the API is bound to.
    28         void deployChild(in DeploymentSuccessCallback onSuccess, in DeploymentErrorCallback onError, in DOMString childApplicationID, in optional boolean local);
    29 }

To install a child on a selected remote device the webinos device
discovery API can be used to find available Widget API services on other
devices where deployChild can be used remotely.

### Exposing Application Functionalities as Service to other Applications[¶](#Exposing-Application-Functionalities-as-Service-to-other-Applications)

As introduced in the beginning of this section webinos application may
share its functionalities across other applications. To make functions
available to others the shared element containing a number of
shared-function and shared-api elements must be added to the
application's configuration document. The content of the shared-function
element must be a JavaScript function defined in the JavaScript part of
the application which will be accessible to other applications using
webinos discovery services and searching for services with the type
defined in the id attribute of the widget element. To group functions
and allow exposing of multiple APIs at the same time the shared-api
element can be used. The shared-api element must have an api-name
attribute which uniquely identifies the exposed API. The service can
then be instantiated by using the webinos discovery service while using
the api-name as input parameter for the service type of the service that
should be discovered.

Example of Usage:

     1 <widget xmlns="http://www.w3.org/ns/widgets" 
     2    xmlns:webinos="http://www.webinos.org/webinosapplication" 
     3    id="http://exampleapp.org/app1">
     4        <webinos:shared>
     5             <webinos:shared-api api-name="http://www.w3.org/ns/api-perms/geolocation">
     6         <webinos:shared-function>watchPosition</webinos:shared-function>
     7         <webinos:shared-function>getCurrentPosition</webinos:shared-function>
     8         <webinos:shared-function>clearWatch</webinos:shared-function>
     9             </webinos:shared-api>
    10         <webinos:shared-function>exampleFuntion</webinos:shared-function>
    11        </webinos:shared>
    12        <content src="widget.html"/>
    13 </widget>

The visibility of the shared functions can be restricted to be only
accessible by a parent application, a child application or an
application running in the same personal zone. To define this, the
visibility attribute of the shared-function element can be used. For
example:

`<webinos:shared-function visibility=”parent”>function1</webinos:shared-function> allows only a parent application to access function1.`\
`<webinos:shared-function visibility=”child”>function2</webinos:shared-function> allows only a child application to access function2.`\
`<webinos:shared-function visibility=”personal-zone”>function3</webinos:shared-function> allows only applications running in the same personal zone as the service application to access function3.`

To define whether the service is permanently available (always running)
or only after the application was started by the user or using the
Applauncher API the available attribute of the shared element can be
used. If it is set to 'permanent' the application is always running,
thus, the exposed functions can be found by using the discovery API at
any time the hosting device is connected. All other values or the absent
of the attribute results in unavailability of the service unless the
application that exposes the service functions is started.

    1 <widget xmlns="http://www.w3.org/ns/widgets" 
    2    xmlns:webinos="http://www.webinos.org/webinosapplication" 
    3    id="http://exampleapp.org/app1">
    4        <webinos:shared available="permanent">
    5             ...
    6        </webinos:shared>
    7        <content src="widget.html"/>
    8 </widget>

To use functions exposed by webinos applications a reference to the
application is needed. To get a reference to an object that provides
access to the exposed functions the webinos JavaScript discovery API can
be used while providing the query with the unique identifier of the API
or application. The object returned by the webinos runtime is enriched
with the Widget interface containing the application name, description,
author, and version name beside of the features provided by the queried
interface. For example accessing function 1 from the above example would
in JavaScript look like:

     1   function showMap(location){
     2           //doing some logic 
     3   }
     4 
     5   function successCB(myLocationService) {
     6           alert('Service ' + myLocationService.displayName + ' ready to use');
     7 
     8           //invoking a function exposed by the application
     9           myLocationService.webinos.extensions.getCurrentPosition(showMap);
    10   }
    11 
    12   function successCB2(myservice) {
    13           alert('Service ' + object.displayName + ' ready to use');
    14 
    15           //invoking a function exposed by the application
    16           myservice.webinos.extensions.exampleFuntion();
    17   }
    18 
    19   window.webinos.findServices({api:'http://www.w3.org/ns/api-perms/geolocation'}, {onFound:successCB});
    20   window.webinos.findServices({api:'http://exampleapp.org/app1'}, {onFound:successCB2});                                          
    21 

The actual functionality, the signature of the functions as well as the
function names of the exposed functions must be known to the developer.
A semantic description of the functions behaviour is out of scope of the
specification. As you can see in the above example the default name
space where an API is attached to in the returned object is
webinos.extensions. Each exposed function is available using this
prefix. If it is needed to make the exposed functions available under a
specific path then this can be optionally defined using the api-path
attribute of the shared-api element (e.g., if the application exposes a
well known API, such as geolocation, that has a defined way of accessing
it).

**Example of Usage: Defining an API path for an exposed API**\

     1 <widget xmlns="http://www.w3.org/ns/widgets" 
     2    xmlns:webinos="http://www.webinos.org/webinosapplication" 
     3    id="http://exampleapp.org/app1">
     4        <webinos:shared>
     5             <webinos:shared-api api-name="http://www.w3.org/ns/api-perms/geolocation" api-path="window.navigator.geolocation">
     6         <webinos:shared-function>watchPosition</webinos:shared-function>
     7         <webinos:shared-function>getCurrentPosition</webinos:shared-function>
     8         <webinos:shared-function>clearWatch</webinos:shared-function>
     9             </webinos:shared-api>
    10        </webinos:shared>
    11        <content src="widget.html"/>
    12 </widget>

Using the above example makes the API available under
myLocationService.navigator.geolocation.getCurrentPosition() instead of
myLocationService.webinos.extensions.getCurrentPosition(showMap) when
the api-path is not declared.

**Interfacing between Child and Parent Applications**

Since webinos supports a distributed application design the possibility
of communication between application parts must be assured by the
system. Webinos supports this by providing information about deployed
child applications. As introduced in the previous section webinos
provides a unique service ID for deployed child applications. This
service ID can either be used for instantiating a remote binding to the
child application in order to use exposed functions (if any) or it can
be used to uniquely address an application within the webinos event API.
Thus, a parent application can communicate with its child applications.

For the other way around, to let the child application know the unique
identity of its parent application, the child application can be
explicitly informed about the parent's identifier. Thus, after the
parent receives a success callback it should instantiate the client and
call a function which takes the parent's identifier using the
getServiceId function from the ServiceDiscovery API. An exemplary flow
could be:

     1 
     2 function bindcallback(Service service){
     3       service.setParent(window.webinos.discovery.getServiceId("http://www.webinos.org/webinosapplication"));
     4 };
     5 
     6 function onError(in DeploymentError error){
     7        alert(error.code);
     8 };
     9 
    10 function onSuccess(in DOMString childID, in DOMString serviceID){
    11       var service = window.webinos.discovery.createService();
    12       service.bind({onBind:bindcallback},childID);
    13 };
    14 
    15 window.widget.deployChild(onSuccess, onError, "http://www.exampleapp.org/app1");
    16 

### Hosted Webinos Applications[¶](#Hosted-Webinos-Applications)

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

In addition to the absolute path of the start document of a hosted
application the scope of the application must be defined using the
access element in order to allow access to needed documents and to apply
related policies.

The access element is defined in the Widget Access Request Policy [WARP]
which is applied for hosted applications.

**Example of Usage:** Application is defined using a root path\

    1 <widget xmlns="http://www.w3.org/ns/widgets">
    2   <content src="http://www.hostedapps.com/hostedApp1/run.html"/>
    3   <access origin="http://www.hostedapps.com/hostedApp1/"/>
    4 </widget>

**Example of Usage:** Application is defined using absolute paths to the
applications documents\

    1 <widget xmlns="http://www.w3.org/ns/widgets">
    2   <content src="http://www.hostedapps.com/hostedApp2/run.html"/>
    3   <access origin="http://www.hostedapps.com/hostedApp2/run.html"/>
    4   <access origin="http://www.hostedapps.com/hostedApp2/style.css"/>
    5   <access origin="http://www.hostedapps.com/hostedApp2/main.js"/>
    6 </widget>

Formal Specification Webinos Web Runtime Environment[¶](#Formal-Specification-Webinos-Web-Runtime-Environment)
--------------------------------------------------------------------------------------------------------------

This section specifies a number of functional and non functional
requirements related to the WRT itself. This includes how webinos
applications are shared between devices, how the application life cycle
is handled, how webinos applications can be installed on WRTs, and which
Web technologies must be supported by webinos WRTs in order to define a
common set of available functionality.

### Inter-Runtime Application Deployment[¶](#Inter-Runtime-Application-Deployment)

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

### Application Life Cycle[¶](#Application-Life-Cycle)

Webinos applications can be made available through a number of different
deployment methods including installation via web sites, application
stores, file system, other webinos web runtimes, simple application
sharing and application advertisement, and execution of hosted
applications (no installation). Upon installation of a webinos
application package, the web runtime must process the package as
specified in the webinos application packaging specification.
Additionally a webinos web runtime must implement the following
requirements.

`WRT-05: The WRT MUST sent a User Agent Identification containing vendor, name, version of WRT with each HTTP/HTTPS request to be used for identifying available features provided by the WRT.`

`WRT-06: If possible the webinos WRT MUST catch content which is of MIME type application/widget in order to install the application or execute the application if already installed and up to date.`

`WRT-07: If possible the webinos WRT MUST catch the invocation of files with a .wgt extension in order to install the application or execute the application if already installed and up to date.`

`WRT-08: The WRT MAY check the applications configuration document for compatibility with the features provided by the runtime.`

`WRT-09: The WRT MUST provide means to install locally available applications on another device which can be selected by the user in conformance with section 2 of this specification.`

`WRT-10: The WRT MUST provide a list of application available to the user for local installation or remote usage.`

`WRT-11: The WRT MUST delete all data specific to an application if the application is uninstalled. This includes the un-installation of any child applications if they are depended on the parent application.`

`WRT-12: The WRT MUST use secure storage for webinos applications that are marked as copy protected. This should not allow to view, export, modify, or any other access of the application by other applications or the user (WAC).`

`WRT-13: The WRT MUST use encrypted storage for webinos applications in case that external or general accessible storage space is used (WAC) for storing application data.`

**Notify Widgets to Web Browsers**

It is possible to notify the availability of widgets to Web browsers
using the HTML \<link\> element in common web sites. Thus, common Web
Browsers may show the availability of installable applications to the
user including the possibility of installing them into the system. In
advance, the browser should check if a Widget handler, e.g., a webinos
WRT, is registered in the system. The \<link\> element's type attribute
must be set to "application/widget" to define the MIME type of the
linked resource. The *title* attribute should be set to the widgets
title. The *href* attribute must contain the link to the application
package. The link type defined by the *rel* attribute must be set to
"alternate".

    1 <link rel="alternate" 
    2   type="application/widget" 
    3   title="Application Title" 
    4   href="http://www.applicationhost.com/application.wgt">
    5 </link>

**Life Cycle API**

Webinos provides some APIs to allow developers to manage their
application's life cycle during application execution. While the
application itself cannot influence its execution life cycle status
Webinos allows for registering callbacks in case the application will be
destroyed and can't be resumed, will go to background/foreground or will
be stopped/started again or resumed.

     1 interface NotifySuccessCallback{
     2 
     3     //Called if an event was accepted by the user. If provided, the notification id is passed in to link the success to a specific event
     4     onSuccess(in DOMString id);
     5 }
     6 
     7 interface Widget {
     8 
     9     //allows an application to trigger calling destroy from the runtime
    10     void exit();
    11 
    12     //sends the application to background if possible so that it is not visible to the user anymore
    13     //if possible by the platform the application execution goes on
    14     void hide();
    15 
    16     //asks the WRT wheather the application is currently hidden (not visible to the user) or not
    17     //if the application is hidden it may notify an event to the user using notify
    18     boolean isHidden();
    19 
    20     //Triggers the WRT to notify occurrence of an event, as described using the parameters, to the user
    21     //The user can click the event. If the application is in background and the user accepted the event
    22     //, e.g., by clicking on it, the application must be brought back to foreground. The notify success
    23     //callback is then called after onForeground was called.
    24     void notify(in NotifySuccessCallback onSuccess, in NotifyErrorCallback onError, in DOMString title, in optional DOMString shortDescription, in optional DOMString id, in optional DOMString icon);
    25 
    26     //To cancel a previous notify because it is updated or expired (if ongoing / not clicked by the user)
    27     void cancelNotify(in DOMString id);
    28 
    29     //Callback function which is called if the application will be shut down by the WRT. All application memory
    30     //assigned to the application will be freed after returning out of this function.
    31     void onDestroy();
    32 
    33     //Callback function which is called after the application was put to background, e.g., another application
    34     //goes to foreground and the application is not visible any more. After calling onBackground the application
    35     //is still running but not visible anymore.
    36     void onBackground();
    37 
    38     //Callback function which is called if the application goes to foreground after previously going to background.
    39     void onForeground();
    40 
    41     //Callback function which is called if application execution is stopped by the WRT.
    42     void onStop();
    43 
    44     //Callback function which is called if application execution is continued after previously interrupted.
    45     void onStart();
    46 
    47 };

**Application Update**

[WidgetUpdate] defines how packaged web applications (Widgets) can be
updated over http. For hosted web applications without any content in
the application package there is no need for local update checks. All
updates are applied directly remotely on the hosting web server and
locally applied at the next execution of the application.

`The webinos WRT MUST be capable of updating webinos application packages as defined in W3C Widget Updates over HTTP [WidgetUpdate].`

Child applications may also be updated using [WidgetUpdate]. Another
option for can be re-installing the child application which is initiated
by it’s parent application which was previously updated using
[WidgetUpdate]. Here, the new version of the application that should be
re-installed must be different from the version currently installed.
Otherwise its rejected.

**Application de-installation**

The WRT must provide functionalities to permanently remove applications
from the device on demand of the user. It may appear the
child-applications on other devices become non-functional without their
parent application. The developer can declare this within the
configuration document in the child element. If the optional attribute
*parentneeded* is set to true the WRT has to store the application
instance IDs provided by the remote installation process. These IDs must
be used to request de-installation on remote devices in case the parent
application is deleted.

**Example of Usage:**

    1 <widget xmlns="http://www.w3.org/ns/widgets" 
    2    xmlns:webinos="http://www.webinos.org/webinosapplication" 
    3    id=”http://exampleapp.org/app1” webinos:type="container">
    4        <webinos:child webinos:parentneeded=”true”>child2.wgt</webinos:child>
    5 </widget>

**Events for remote de-installation**\
Event type must be:
<http://webinos.org/events/application/request-deinstallation>\
Event payload must be a JSON object with following attributes:\

    1 {
    2     id: [the application ID of the application that should be deleted]
    3     uniqueID: [the unique instance id of the application that represents exactly this application installation]
    4 }

Event type must be:
<http://webinos.org/events/application/request-deinstallation-response>\
Event payload must be a JSON object with following attributes:\

    1 {
    2     code: [error code as specified in the DeploymentError of the webinos widget specification or 1 in case of successfull de-installation]
    3     id: [the application ID of the application that should be deleted]
    4     uniqueID: [the unique instance id of the application that represents exactly this application installation]
    5 }

In case a remote de-installation was not successful the WRT has to
inform the user about this and about that a manual de-installation may
be needed.

**Automatic execution of Applications**

Beside user driven application execution, webinos applications can be
automatically initiated by events coming from webinos itself or from
other applications. Webinos WRT allows registering for event types which
triggers the execution of the application. Events for automatic
execution can be application specific ones or predefine webinos events.
Subscription to application execution events can be made
programmatically using the webinos Event API and described using a new
webinos element as child of the \<content\> element in the applications
configuration document.

**Example of Usage:** Descriptive registration for application execution
events\

    1 <widget xmlns="http://www.w3.org/ns/widgets" xmlns:webinos="http://www.webinos.org/webinosapplication" webinos:type="background">
    2   <content src="http://www.hostedapps.com/hostedApp2/run.js"/ >
    3     <webinos:start>http://webinos.org/events/core/BOOT_UP_COMPLETED</webinos:start>
    4     <webinos:start>http://www.hostedapps.com/hostedApp2/eventtypes/event1</webinos:start>
    5   </content>
    6 </widget>

Predefined Events that must be supported by the WRT:

**<http://webinos.org/events/core/BOOT_UP_COMPLETED>**\
If the device and the WRT is ready to execute applications the WRT must
auto start applications registered to this event.

**Applications without UI**

Webinos application can be executed in a no user interaction (UI) mode
which means that the application is invisible to the user and the user
cannot directly interact with the application. After starting a
background application it will be executed and is responsive to
potential incoming request as long as the application is running (not
stopped by the user or by the service itself). To express that an
application is a no UI application type *type* attribute is added to the
\<widget\> element of the application's configuration document. If
*type* is 'background' the application is marked as no UI / background
application. In any other cases the application is handled as normal
application. The WRT must provide means to manage background
applications by the user. E.g., start a background application, show
running background applications and terminate background applications.

**Example of Usage:** Declaring an application as background
application\

    1 <widget xmlns="http://www.w3.org/ns/widgets" xmlns:webinos="http://www.webinos.org/webinosapplication" webinos:type="background">
    2   <content src="http://www.hostedapps.com/hostedApp2/run.js"/>
    3 </widget>

### Extensions in webinos[¶](#Extensions-in-webinos)

Extensions Specification[¶](#Extensions-Specification)
======================================================

Specification[¶](#Specification)
--------------------------------

The webinos runtime must support the NPAPI standard. The specification
to build NPAPI plugins and a NPAPI compliant runtime is out of scope of
this document. The NPAPI plug-ins and a NPAPI compliant runtime are
specified in
([NPAPI-Browser-Side-Api](/redmine/projects/wp3-1/wiki/Extensions_Specification#NPAPI-Browser-Side-Api)),
([NPAPI-Plugin-Side-Api](/redmine/projects/wp3-1/wiki/Extensions_Specification#NPAPI-Plugin-Side-Api)),
and
([Npruntime](/redmine/projects/wp3-1/wiki/Extensions_Specification#Npruntime)).

This specification covers how to declare a NPAPI plug-in as an extension
in the application manifest, how the installation should be handled by
the webinos runtime and how functions of an extensions can be made
available to other applications. Security aspects of extensions are
covered in [WP
3.5](/t3-5/wiki/Deliverable_Specifications_Extension_Handling)

Bundeling extensions to an application package allows us to manage them
in the same way as regular applications (cf.
[LC-ASP-ISMB-112](/wp2-2/wiki/DeliverableVersionAll#LC-ASP-ISMB-112)).
Furhtermore it allows us to expose functions of the extension using the
same mechansims as for exposing and sharing functions of applications
and features (cf.
[LC-DWP-ISMB-009](/wp2-2/wiki/DeliverableVersionAll#LC-DWP-ISMB-009)).

### Integrating a NPAPI plug-in into an application package[¶](#Integrating-a-NPAPI-plug-in-into-an-application-package)

Webinos allows you to integrate a NPAPI plug-in into your application
package. The extension is than distributed with the application itself.
The installation of the plug-in is handled by the webinos platform. In
order to enable the runtime to handle the installation of the plug-in,
some metadata has to be specified inside the application manifest
including the name, location of the binary files, and supported
platforms. This meta data is needed for the lifecylemanagement of the
plug-in.

The following example illustrates, how an application description making
use of this feature looks like.

     1 <webinos:plugins>
     2     <webinos:plugin>
     3         <webinos:name>foo</webinos:name>
     4         <webinos:platforms>
     5             <webinos:platform>
     6                 <webinos:name>win32</webinos:name>
     7                 <webinos:path>plugins/win32/foo.dll</webinos:name>
     8             </webinos:platform>
     9             <webinos:platform>
    10                 <webinos:name>linux</webinos:name>
    11                 <webinos:path>plugins/linux/foo.o</webinos:name>
    12             </webinos:platform>
    13         </platforms>
    14     </webinos:plugin>
    15 </webinos:plugins>

#### The `plugins` element

The plugins element lists all plug-ins, which are part of the
application package. An application package can contain more than one
plug-in.

![](http://dev.webinos.org/redmine/attachments/705/plugins.png)

Context in which this element is used: As a child of the widget
element.\
Content model: complex type of `tPlugins`\
Sequence: zero or one

The complex type of `tPlugins` is defined as followed

    1 <complexType name="tPlugins">
    2     <sequence>
    3         <element name="plugin" type="webinos:tPlugin"></element>
    4     </sequence>
    5 </complexType>

#### The `plugin` element

The plugin element defines the information about a single plug-in.

![](http://dev.webinos.org/redmine/attachments/706/tplugin.png)

Context in which this element is used: As a child of the plugins
element.\
Content model: complex type tPlugin\
Seqeunce: one ore many\
Attributes: none

The complex type for a tPlugin is defined as followed:

    1 <complexType name="tPlugin">
    2     <sequence minOccurs="1" maxOccurs="1">
    3         <element name="name" type="string"></element>
    4         <sequence minOccurs="1" maxOccurs="unbounded">
    5             <element name="platforms" type="webinos:tPlatform"></element>
    6         </sequence>
    7     </sequence>
    8 </complexType>

#### `name` element of plugin:

Defines the name of the plugin.

Context in which this element is used: As a child of a plugin element.\
Content model: string\
Occurrences: one\
Attributes: none

#### `platforms` element of plugin

The `platforms` element is the container for the defintion of the
supported platforms by the plug-in

Context in which this element is used: As a child of a plugin element.\
Content model: complex type tPlatforms\
Occurence: one\
Attributes: none

The complex type `tPlatforms` is defined as followed:

    1     <complexType name="tPlatforms">
    2         <sequence>
    3             <element name="platform" type="webinos:tPlatform"></element>
    4         </sequence>
    5     </complexType>

#### `platform` element of platforms

Defines a supported platform for plugin inlcuding the platform specific
binary.

Context in which this element is used: As a child of the platforms
element.\
Content model: complex type tPlatforms\
Occurence: one or many\
Attributes: none

The complex type `tPlatform` is defined as followed:

    1 <complexType name="tPlatform">
    2     <sequence minOccurs="1" maxOccurs="1">
    3         <element name="name" type="string" minOccurs="1" maxOccurs="1"></element>
    4         <element name="path" type="string" minOccurs="1" maxOccurs="1"></element>
    5     </sequence>
    6 </complexType>

#### `name` of platform

Defines the platform name of the binary

Context in which this element is used: As a child of a platform
element.\
Content model: String\
Sequence: one

#### `path` of platform

Defines the path to binary for the specific platform relative to the
location of the application manifest.

Context in which this element is used: As a child of a platform
element.\
Content model: String\
Sequence: one

#### XML-Schema for plug-in packaging[¶](#XML-Schema-for-plug-in-packaging)

The following code shows extension specific application meta data in
form of a XML schema.

     1 <?xml version="1.0" encoding="UTF-8"?>
     2 <schema targetNamespace="http://www.webinos.org/webinosapplication" elementFormDefault="qualified" xmlns="http://www.w3.org/2001/XMLSchema" xmlns:webinos="http://www.webinos.org/webinosapplication">
     3     <complexType name="tPlugins">
     4         <sequence>
     5             <element name="plugin" type="webinos:tPlugin"></element>
     6         </sequence>
     7     </complexType>
     8     <element name="plugins" type="webinos:tPlugins"></element>
     9     <complexType name="tPlugin">
    10         <sequence minOccurs="1" maxOccurs="1">
    11             <element name="name" type="string"></element>
    12             <element name="platforms" type="webinos:tPlatform"></element>
    13         </sequence>
    14 
    15     </complexType>
    16     <complexType name="tPlatform">
    17         <sequence minOccurs="1" maxOccurs="1">
    18             <element name="name" type="string" minOccurs="1" maxOccurs="1"></element>
    19             <element name="path" type="string" minOccurs="1" maxOccurs="1"></element>
    20         </sequence>
    21     </complexType>
    22 
    23     <complexType name="tPlatforms">
    24         <sequence>
    25             <element name="platform" type="webinos:tPlatform"></element>
    26         </sequence>
    27     </complexType>
    28 </schema>

### Remote usage of plug-in functions[¶](#Remote-usage-of-plug-in-functions)

The remote usage of the plug-in can be enabled by building a JavaScript
wrapper around the plug-in itself and exposing the functionality as
described in [Exposing in Application Functionalities as Service to
other
Application](/wp3-1/wiki/Spec_-_Foundations#Exposing-Application-Functionalities-as-Service-to-other-Applications).

The following example illustrates, how a NPAPI method is being made
available to other applications running in the same personal zone.

#### Application manifest[¶](#Application-manifest)

     1 <widget xmlns="http://www.w3.org/ns/widgets" xmlns:webinos="http://www.webinos.org/webinosapplication" id="http://exampleapp.org/app1">
     2     <content src="widget.html"/>
     3     <webinos:copy-restricted webinos:restricted-to="personal-zone"/>
     4     <webinos:shared>
     5         <webinos:shared-function visibility="personal-zone">myExposedPluginFunction</webinos:shared-function>
     6        </webinos:shared>
     7        <webinos:plugins>
     8         <webinos:plugin>
     9             <webinos:name>foo</webinos:name>
    10             <webinos:platforms>
    11                 <webinos:platform>
    12                     <webinos:name>linux</webinos:name>
    13                     <webinos:path>plugins/meego/foo.so</webinos:name>
    14                 </webinos:platform>
    15             </platforms>
    16         </webinos:plugin>
    17     </webinos:plugins>
    18 </widget>

The application packages conatins a NPAPI plug-in called `foo` (cf. line
9), which is supported on linux (cf. line 12). Furthermore the
application exposes a Javascript function callled
`myExposedPluginFunction` (cf. line 5). This javascript function is
wrapper function for an exposed NPAPI function as shown in the following
code snipplet.

#### content.html[¶](#contenthtml)

     1 <html>
     2     <head>
     3     </head>
     4     <body>
     5         <script>
     6             var myPlugin;    
     7             if (navigator.mimeTypes["application/webinos-extension-foo"] && navigator.mimeTypes["application/webinos-extension-foo"].enabledPlugin != null){
     8                 document.write('<embed type="application/webinos-extension-foo"  id="plugin">');
     9                 myPlugin = document.getElementById('plugin');
    10             }else{
    11                 myPlugin = null;
    12             }
    13             function myExposedPluginFunction(){
    14                 if(myPlugin != null){
    15                     return myPlugin.getSomething();
    16                 }else{
    17                     return throw "method not supported";
    18                 }
    19             }
    20         </script>
    21     </body>
    22 </html>

In line 7 the application checks, if a plugin exists for a speicifc MIME
type. If so, an embed object is added to the DOM (cf. line 8), which
makes it possible to call methods of a NPAPI plugin from Javascript. In
line 15 the exposed NPAPI method `doSomenting` is called. If the
`myExposedPluginFunction()` is called and the MIMEType is not supported,
the method throws an error (cf. line 17).

### Installation and execution of an extension[¶](#Installation-and-execution-of-an-extension)

During the installion process of the application, the webinos runtime
determines the correct NPAPI binary for the platform and stores it on
the local machine, so that rendering engine can iniate the plugin, when
executing the application.\
Since NPAPI plug-ins are indified by the supporting MIME-Type inside a
web rendering engine, the webinos runtime must be able to associate each
NPAPI plug-in to a webinos application and make only those installed
plug-ins available which are associated to an application.

### Security considerations[¶](#Security-considerations)

We recommend that only applications using plug-in are only executed if
they have been signed and approved by some entity. The signing process
is defined in [WP
3.5](/t3-5/wiki/Deliverable_Specifications_Extension_Handling)

References[¶](#References)
--------------------------

### Npruntime[¶](#Npruntime)

Mozilla Developer Network: Scripting plugins\
Fetched June 2011\
<https://developer.mozilla.org/en/Gecko_Plugin_API_Reference/Scripting_plugins>

### NPAPI-Browser-Side-Api[¶](#NPAPI-Browser-Side-Api)

Mozilla Developer Network: Browser Side Plug-in API\
Fetched June 2011\
<https://developer.mozilla.org/en/Gecko_Plugin_API_Reference%3aBrowser_Side_Plug-in_API>

### NPAPI-Plugin-Side-Api[¶](#NPAPI-Plugin-Side-Api)

Mozilla Developer Network: Plug-in Side Plug-in API\
Fetched June 2011\
<https://developer.mozilla.org/en/Gecko_Plugin_API_Reference/Plug-in_Side_Plug-in_API>

### Web Technologies[¶](#Web-Technologies)

`Note: The following section is preliminary and may be subject to change in future versions of the specification.`

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

Beside of the definition of web technologies to be supported
[WACWebTech] defines URI schemes to allow launching of specific
applications. The following URI schemes must be supported by webinos
runtimes:

-   "http/https" in order to launch a web browser
-   "tel" in order to initiate a call
-   "sms" in order to send a short message service (SMS) message
-   "mmsto" in order to send a multimedia massaging service (MMS)
    message
-   "mailto" in order to send an email message
-   "data" in order to directly embed content (e.g.,
    data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAA...)

4. References[¶](#4-References)
===============================

[Widgets] <http://www.w3.org/TR/widgets/>\
[WidgetAPI] <http://www.w3.org/TR/2011/WD-widgets-apis-20110607/>\
[WidgetUpdate] <http://www.w3.org/TR/2010/WD-widgets-updates-20100928/>\
[WidgetURI] <http://www.w3.org/TR/2009/WD-widgets-uri-20091008/>\
[WidgetDigSig] <http://www.w3.org/TR/2011/WD-widgets-digsig-20110607/>\
[WARP] <http://www.w3.org/TR/2010/CR-widgets-access-20100420/>\
[WAC] <http://specs.wacapps.net/2.0/jun2011/>\
[WACWebTech]
<http://specs.wacapps.net/2.0/jun2011/core/web-standards.html>

