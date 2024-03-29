-   [Application life cycle](#Application-life-cycle)
    -   [Notify web browsers of available
        widgets](#Notify-web-browsers-of-available-widgets)
    -   [Life cycle API](#Life-cycle-API)
    -   [Automatic execution of
        applications](#Automatic-execution-of-applications)
        -   [Example of usage: Descriptive registration for application
            execution
            events](#Example-of-usage-Descriptive-registration-for-application-execution-events)
    -   [Application installation on multiple
        devices](#Application-installation-on-multiple-devices)
        -   [Automatic deployment](#Automatic-deployment)
        -   [On request deployment](#On-request-deployment)
    -   [Application update](#Application-update)
    -   [Application de-installation](#Application-de-installation)
        -   [Example of usage](#Example-of-usage)
        -   [Events for remote
            de-installation](#Events-for-remote-de-installation)
    -   [Exposing application functionalities as service to other
        applications](#Exposing-application-functionalities-as-service-to-other-applications)
    -   [Background applications](#Background-applications)
        -   [Example of usage: Declaring an application as background
            application](#Example-of-usage-Declaring-an-application-as-background-application)
    -   [References](#References)

Application life cycle[¶](#Application-life-cycle)
==================================================

The Life Cycle specification describes runtime requirements related to
the different stages an application can be situated in. For example an
application could be just not installed and thus not available for
execution, it could be running, running in background, be on hold or
others as further described in following sections.

Webinos applications can be made available through a number of different
deployment methods including installation via web sites, application
stores, file system, other webinos web runtimes, simple application
sharing and application advertisement. Upon installation of a webinos
application package, the web runtime must process the package as
specified in the webinos application packaging specification.
Additionally a webinos web runtime must implement the following
requirements regarding the applications life cycle.

`WRTLC-01: The WRT MUST send a User Agent Identification containing vendor, name, version of WRT with each HTTP/HTTPS request to be used for identifying available features provided by the WRT.`

`WRTLC-02: If possible the webinos WRT MUST catch content which is of MIME type application/widget in order to install the application or execute the application if already installed and up to date.`

`WRTLC-03: If possible the webinos WRT MUST catch the invocation of files with a .wgt extension in order to install the application or execute the application if already installed and up to date.`

`WRTLC-04: The WRT MAY check the applications configuration document for compatibility with the features provided by the runtime.`

`WRTLC-05: The WRT MUST provide means to install locally available applications on another device which can be selected by the user in conformance with section 2 of this specification.`

`WRTLC-06: The WRT MUST provide a list of application available to the user for local installation or remote usage.`

`WRTLC-07: The WRT MUST delete all data specific to an application if the application is uninstalled. This includes the un-installation of any child applications if they are depended on the parent application.`

`WRTLC-08: The WRT MUST use secure storage for webinos applications that are marked as copy protected. This should not allow to view, export, modify, or any other access of the application by other applications or the user (WAC).`

`WRTLC-09: The WRT MUST use encrypted storage for webinos applications in case that external or general accessible storage space is used (WAC) for storing application data.`

Notify web browsers of available widgets[¶](#Notify-web-browsers-of-available-widgets)
--------------------------------------------------------------------------------------

It is possible to notify Web browsers of the availability of widgets by
using the HTML \<link\> element in common web sites. Thus, common Web
browsers may show the availability of installable applications to the
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

Life cycle API[¶](#Life-cycle-API)
----------------------------------

Webinos provides some APIs to allow developers to manage their
application's life cycle during application execution. While the
application itself cannot influence its execution life cycle status
webinos allows for registering callbacks in case the application will be
destroyed and can't be resumed, it will go to background/foreground or
will be stopped/started again or resumed.

     1 partial interface Widget {
     2 
     3     //asks the WRT wheather the application is currently hidden (not visible to the user) or not
     4     //if the application is hidden it may notify an event to the user using the notification API.
     5     readonly attribute boolean isHidden;
     6 
     7     //allows an application to trigger calling destroy from the runtime
     8     void exit();
     9 
    10     //sends the application to background if possible so that it is not visible to the user anymore
    11     //if possible by the platform the application execution goes on
    12     void hide(HideSuccessCallback onSuccess, HideErrorCallback onError);
    13 
    14     //Callback function which is called if the application will be shut down by the WRT. All application memory
    15     //assigned to the application will be freed after returning out of this function.
    16     attribute Function?  ondestroy;
    17 
    18     //Callback function which is called after the application was put to background, e.g., another application
    19     //goes to foreground and the application is not visible any more. After calling onBackground the application
    20     //is still running but not visible anymore.
    21     attribute Function?  onbackground;
    22 
    23     //Callback function which is called if the application goes to foreground after previously going to background.
    24     attribute Function?  onforeground;
    25 
    26     //Callback function which is called if application execution is stopped by the WRT.
    27     attribute Function?  onstop;
    28 
    29     //Callback function which is called if application execution is continued after previously interrupted.
    30     attribute Function?  onstart;
    31 
    32 };

Automatic execution of applications[¶](#Automatic-execution-of-applications)
----------------------------------------------------------------------------

Besides user driven application execution, webinos applications can be
automatically started through the webinos runtime after the host system
was booted up completely. Subscribing to this automatic application
execution can be made using the webinos element as child of the
\<content\> element in the applications configuration document.

### Example of usage: Descriptive registration for application execution events[¶](#Example-of-usage-Descriptive-registration-for-application-execution-events)

    1 <widget xmlns="http://www.w3.org/ns/widgets" xmlns:webinos="http://www.webinos.org/webinosapplication" webinos:type="background">
    2   <content src="http://www.hostedapps.com/hostedApp2/run.js"/ >
    3     <webinos:start>http://webinos.org/events/core/BOOT_UP_COMPLETED</webinos:start>
    4   </content>
    5 </widget>

Predefined Events that must be supported by the WRT:

**<http://webinos.org/events/core/BOOT_UP_COMPLETED>**\
If the device and the WRT is ready to execute applications the WRT must
auto start applications registered to this event.

Application installation on multiple devices[¶](#Application-installation-on-multiple-devices)
----------------------------------------------------------------------------------------------

### Automatic deployment[¶](#Automatic-deployment)

During the installation of a parent application its child applications,
if any, can be automatically installed on the same device as the parent
application. The WRT may provide the possibility to also install child
applications on other devices if not prohibited by the child application
definition in the configuration file (config.xml).

The child application that should be installed on other devices must
provide a child element in the application’s configuration document.
This will trigger the webinos runtime to install the related child
application. If the element is absent, the related child application
will not be automatically deployed.

**Example of usage:**

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

<!-- -->

-   Lines 4 and 5: The install attribute specifies whether a child
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
    informed that this will be install only locally.

<!-- -->

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

### On request deployment[¶](#On-request-deployment)

Webinos allows remote installation during installation of the parent
application and it is also possible to deploy code on demand at the
application runtime. Webinos provides an application deployment API
using the Widget interface which takes the application ID of the child
that should be installed. The application ID must be specified in the
configuration document of the child as specified in [Widgets]. Following
the WebIDL specification for deploying child applications:

     1 //called if a child application was successfully installed
     2 //childID is the application id which was used during deployChild
     3 //serviceID is the unique application id that can be used to explicitly address the deployed service within webinos service discovery
     4 callback DeploymentSuccessCallback = void (DOMString childID, DOMString serviceID);
     5 
     6 //called if a child application could not be installed
     7 //applicationID is the application ID the error relates to
     8 //The DOMError explains what failed: SecurityError if permission has been denied, NetworkError if the device is not reachable,
     9 //NotFoundError if the application id is unknown, InvalidStateError if the application is already installed
    10 callback DeploymentErrorCallback = void (DOMString applicationID, DOMError error); 
    11 
    12 interface Widget {
    13         //Deploys a child application known to the WRT through the definition in the application s manifest
    14         //file on another device. If local = false or not specified the WRT has to provide a list of available
    15         //devices to the user where the application should be installed on, if local = true the WRT has to
    16         //install the selected child on the same device as the API is bound to.
    17         void deployChild(in DeploymentSuccessCallback onSuccess, in DeploymentErrorCallback onError, in DOMString childApplicationID, in optional boolean local);
    18 }

To install a child on a selected remote device the webinos device
discovery API can be used to find available Widget API services on other
devices where deployChild can be used remotely. Remote instances of the
widget API will also provide Widget details of the running application
and nothing about any application on remote devices. Thus, the only
difference in using the Widget API directly or via a remote service is
that deployChild will be targeted on another device. This also allows to
enable/disable remote installations triggered by the application for
each device by enabling/disabling the Widget API as service on the
desired devices.

It is important that the WRT or PZP that triggers the remote
installation of an application stores a unique instance identifier of
the installed application. This id must be used in case the main
application is un-installed from the device in order to also remove all
related child applications if needed. For more information regarding
de-installation look into Application de-installation section of this
document.

Application update[¶](#Application-update)
------------------------------------------

[WidgetUpdate] defines how packaged web applications (Widgets) can be
updated over HTTP. For hosted web applications without any content in
the application package there is no need for local update checks. All
updates are applied directly remotely on the hosting web server and
locally applied at the next execution of the application.

`The webinos WRT MUST be capable of updating webinos application packages as defined in W3C Widget Updates over HTTP [WidgetUpdate].`

Child applications may also be updated using [WidgetUpdate]. Another
option can be re-installing the child application which is initiated by
its parent application which was previously updated using
[WidgetUpdate]. Here, the new version of the application that should be
re-installed must be different from the version currently installed.
Otherwise it is rejected.

Application de-installation[¶](#Application-de-installation)
------------------------------------------------------------

The WRT must provide functionalities to permanently remove applications
from the device on demand of the user. It may appear the
child-applications on other devices become non-functional without their
parent application. The developer can declare this within the
configuration document in the child element. If the optional attribute
*parentneeded* is set to true the WRT has to store the application
instance IDs provided by the remote installation process. These IDs must
be used to request de-installation on remote devices in case the parent
application is deleted.

### Example of usage[¶](#Example-of-usage)

    1 <widget xmlns="http://www.w3.org/ns/widgets" 
    2    xmlns:webinos="http://www.webinos.org/webinosapplication" 
    3    id=”http://exampleapp.org/app1” webinos:type="container">
    4        <webinos:child webinos:parentneeded=”true”>child2.wgt</webinos:child>
    5 </widget>

### Events for remote de-installation[¶](#Events-for-remote-de-installation)

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

Exposing application functionalities as service to other applications[¶](#Exposing-application-functionalities-as-service-to-other-applications)
------------------------------------------------------------------------------------------------------------------------------------------------

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

Example of usage:

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

**Example of usage: Defining an API path for an exposed API**\

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

**Interfacing between child and parent applications**

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

Background applications[¶](#Background-applications)
----------------------------------------------------

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

### Example of usage: Declaring an application as background application[¶](#Example-of-usage-Declaring-an-application-as-background-application)

    1 <widget xmlns="http://www.w3.org/ns/widgets" xmlns:webinos="http://www.webinos.org/webinosapplication" webinos:type="background">
    2   <content src="http://www.hostedapps.com/hostedApp2/run.js"/>
    3 </widget>

References[¶](#References)
--------------------------

[WidgetUpdate] W3C, Widgets Updates, available online (accessed
29.08.2012): <http://www.w3.org/TR/widgets-updates/>

