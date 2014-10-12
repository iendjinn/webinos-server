Background - Foundations[¶](#Background-Foundations)
====================================================

Introduction[¶](#Introduction)
------------------------------

The foundations section is about specifying the technological background
of webinos applications including application packaging and life-cycle.
This also includes functional and non-functional requirements of webinos
Web Run-Time (WRT) environments, e.g., how to pass applications to
webinos WRTs and how to share applications across WRTs.

Scope[¶](#Scope)
----------------

### What's in scope[¶](#Whats-in-scope)

Foundations define how webinos look like from a technical point of view.
In general it defines the packaging and configuration of webinos
applications as well as the life-cycle including requirements on the WRT
which are related to application handling and interoperability across
WRTs. It also includes how webinos applications can be packaged for
distributed application use cases including the exposure of application
functions. Thus, applications will be able to share their functionality
across distributed components of an application as well as across other
full applications.

### What's out of scope[¶](#Whats-out-of-scope)

Allowing Web based applications to access device specific features
introduces security risks. The foundations specification does not define
the webinos security framework, this is done in separate sections and
deliverables, but it includes relations where needed. Also content
protection like DRM or licensing is out of scope.

Webinos applications will be created using Web technologies, e.g.,
JavaScript, CSS and HTML. To achieve a good level of interoperability
between WRTs a common set of supported Web technologies is crucial but
elaborating on Web technologies to be supported by webinos WRTs and
defining which features of which Web technology must be supported is not
discussed in the foundations section. Instead, WAC has done much work
here and the outcome is referenced and mandated for webinos WRTs.

Review of State of the Art[¶](#Review-of-State-of-the-Art)
----------------------------------------------------------

In general applications have a central entry point for both, installing
and executing which makes them easy to transport, install and use. Web
technology based applications are commonly hosted on Web servers where
each document is linked to other documents which are needed for proper
rendering. This approach provides a good mechanism to access an
application simply using an URL. But there is a lack of descriptive data
for all those content (including e.g. JavaScript). META data like the
author, an application description or links to contacting the author can
be valuable for the user. This information can be added to native
applications like MS Windows executables. In addition, in the Web there
is no means to describe which documents belonging to an application and
are needed for a proper execution. In this section some recent
approaches for packaging Web content together as a whole application are
described.

### Google Web application packaging (.crx)[¶](#Google-Web-application-packaging-crx)

Chrome Google introduced support for installable hosted and packaged Web
applications (stored in .crx format). Therefore the developer has to
write a JSON based manifest file (manifest.json) that contains some
metadata about the application. This manifest.json file must then be
placed in a .crx file, which basically is a renamed zip file.

**Example of Usage taken from Google Chrome Developer Page [CRX]**\

     1 {
     2   "name": "Google Mail",
     3   "description": "Read your gmail",
     4   "version": "1",
     5   "app": {
     6     "urls": [
     7       "*://mail.google.com/mail/",
     8       "*://www.google.com/mail/" 
     9     ],
    10     "launch": {
    11       "web_url": "http://mail.google.com/mail/" 
    12     }
    13   },
    14   "icons": {
    15     "128": "icon_128.png" 
    16   },
    17   "permissions": [
    18     "unlimitedStorage",
    19     "notifications" 
    20   ]
    21 }

The JSON example describes the Google Mail Web application as
installable hosted application, the application URLs pointing to remote
locations using the *web\_url* key. In addition to the provided
metadata, HTML5 permissions can be requested during installation. If the
user clicks a link to a .crx file within the Chrome Web browser the
application is installed to the Google Chrome application Gallery.

If the developer don't want to maintain a server that serves a hosted
application or if he want to provide the best off-line case experience
he can create a packaged application. To make an application a fully
packaged application the contents are placed in the .crx file and the
manifest file must include these details:

    1   "app": {
    2     "launch": {
    3       "local_path": "main.html" 
    4     }
    5   },

In addition to access to common Web features installable applications
can have access to Google Chrome's extension APIs, e.g., manipulating
context menus or creating background pages. To stimulate the usage of
Google's application packaging, Google's Web application store supports
.crx files which can be uploaded to the store using a developer
frontend. Afterwards they are search and brows-able in the store where
they can be installed from to the local application Gallery.

### Mozilla Web Applications[¶](#Mozilla-Web-Applications)

In early 2011 Mozilla announced the Open Web Apps project [OpenWebApps]
which aims to allow everyone to develop its own Web application store.
This also includes the definition of application packages and the
possibility of installing them. Mozilla also uses JSON based manifest
file that includes human readable and machine readable metadata about
the application. Applications are able to "self-install" using an API
call provided by Mozilla Browsers (navigator.apps.install()). Manifest
files can be served as files where the file extension .webapp or via
HTTP where the content type application/x-web-app-manifest-json should
be used. Off-line usage is supported through the use of HTML5 AppCache,
while an API to check the online status is provided.

**Example of Usage taken from Mozilla Developer Page [OpenWebApps]**\

     1     {
     2       "version": "1.0",
     3       "name": "MozillaBall",
     4       "description": "Exciting Open Web development action!",
     5       "icons": {
     6         "16": "/img/icon-16.png",
     7         "48": "/img/icon-48.png",
     8         "128": "/img/icon-128.png" 
     9       },
    10       "widget": {
    11         "path": "/widget.html",
    12         "width": 100,
    13         "height": 200
    14       },
    15       "developer": {
    16         "name": "Mozilla Labs",
    17         "url": "http://mozillalabs.com" 
    18       },
    19       "installs_allowed_from": [
    20         "https://appstore.mozillalabs.com" 
    21       ],
    22       "locales": {
    23               "es": {
    24           "description": "¡Acción abierta emocionante del desarrollo del Web!",
    25           "developer": {
    26             "url": "http://es.mozillalabs.com/" 
    27           }
    28         },
    29         "it": {
    30           "description": "Azione aperta emozionante di sviluppo di fotoricettore!",
    31           "developer": {
    32             "url": "http://it.mozillalabs.com/" 
    33           }
    34         }
    35       },
    36       "default_locale": "en" 
    37     }

### HTML5 AppCache[¶](#HTML5-AppCache)

W3C’s HTML5 introduced an application cache, which allows Web content
available on the local device for off-line usage. Thus, online based
applications can be used without internet connection. To add AppCache
support to a Website, a specific manifest file must be provided on a
server that must be referenced from each HTML page of the whole
application. The manifest defines which parts can be online and which
must be available offline. In addition a fallback can be provided for
the files only accessible when online.

**Example of Usage HTML5 AppCache [AppCache]**\

     1 CACHE MANIFEST
     2 NETWORK:
     3 /online.cgi
     4 CACHE:
     5 /offline.css
     6 /offline.js
     7 /offline.jpg
     8 FALLBACK:
     9 /fallback.html
    10 

### W3C Widgets[¶](#W3C-Widgets)

The W3C Web Applications Working Group started to work on Widget
specifications [W3CWidgetFamily], small packaged and installable web
applications, back in 2006. Currently the main specifications relatated
to packaging and configuration, APIs, and signing are in a last call
phase which means that the specifications are mainly completed and W3C
recommendations are upcoming. A W3C Widget is basically ZIP file which
contains web documents like html, css, or JavaScript in addition to
media files like pictures. Everything a Widget needs to be functional
must be located in this application package which ensures off-line
capability. For describing the content of the package a manifest file is
contained which contains meta data like author, application description,
desired screen modes and signatures.

Following small example describes a Widget with an attached title an an
application icon, which can be shown to the user by the Widget runtime,
and a start file, which is used by the Widget runtime to execute the
application.

**Example of Usage W3C Widget configuration file**\

    1 <widget xmlns="http://www.w3.org/ns/widgets">  
    2   <name>Hello World Widget</name>  
    3   <content src="index.html"/>  
    4   <icon src="icon.png"/>  
    5 </widget>

Additional specifications of the W3C Widget family describing API access
to the applications meta data, how to update widgets over HTTP, and how
to sign and validate the origin of Widgets.

### Opera Widgets[¶](#Opera-Widgets)

The Opera Widget [OperaWidgets] specification has slightly differences
compared to the W3C one. The configuration file contains information
about the author, the application, potential icons and security related
requirements while the packaging is also a ZIP file with a replaced
extension from .zip to .wgt. However, Opera claims that they will
support W3C Widgets if the specifications are final. In addition to
accessing the configuration documents meta data the Opera APIs providing
basic application live cycle management, e.g., allow applications to
reacting on events like "gone to background" or "gone to foreground".
The following example shows the same semantics than the W3C description.

**Example of Usage W3C Widget configuration file**\

    1 <?xml version='1.0' encoding='UTF-8'?>
    2 <widget>
    3   <widgetname>Hello World Widget</widgetname>
    4   <icon>icon.png</icon>  
    5 </widget>

### WAC Widgets[¶](#WAC-Widgets)

Widgets as specified in the Wholesale Application Community are
compliant to W3C Widgets with additions related to security and privacy.
For example WAC defines a policy system to protect access to device
features and user data which must be declared in the Widget
configuration document and evaluated during installation of the Widget.

Extensions[¶](#Extensions)
--------------------------

Extensions background[¶](#Extensions-background)
================================================

Extensions for webinos[¶](#Extensions-for-webinos)
--------------------------------------------------

Extensions in webinos provides access to unique device features as
stated in requirement CAP-DWB-FHG-002 and described in the use case
WOS-UC-TA3-004 "Embedding Proprietary Extensions".

In order to enable third party developers to build and use extensions a
sub system to handle extensions has to be established.

In the browser space there are several solutions available, which we can
leverage from. However, there is a fine distinction between browser
plug-ins (e.g., Adobe Flash) and extensions/add-ons (e.g., Firebug).
Whereas plug-ins add support for alternative content types to the
rendering engine (which can be embedded into a web application),
extensions modify or add to existing functionality of the browser. From
a generic stand point three distinctive parts have to be specified for
the extension handling:

1.  Application APIs for accessing extensions inside a webinos
    application,
2.  Pre-defined interfaces for integrating the extension into the
    webinos runtime (e.g., initialize function of the extension, mapping
    of extension methods/attributes to JavaScript methods/attributes)
3.  Data scheme for providing metadata about the extension (e.g., name,
    supported platforms)

Furthermore we can distinguish extensions in webinos by its "user
group". There are on the one hand platform specific extensions, which
are available to all applications executed on the device and on the
other hand there are extensions which can be coupled to a specific
application.

The platform specific model is used in the general browser plug-in
concept. Once the plug-in is installed on the device, the plug-in will
be used by all web application, which embeds an object mapped to the
specific MIME-Type of the plug-in.

The concept of application specific extensions has been applied in HP
webOS Plug-in Development Kit (PDK) [HP-PDK]. A similar approach can be
found in Chrome extensions, where an extension can embed a NPAPI plug-in
[Chrome-NPAPI].

### State-of-the-Art extensions and plug-ins in the browser environment[¶](#State-of-the-Art-extensions-and-plug-ins-in-the-browser-environment)

In the state-of-art analysis we are going to evaluate different
solutions for extensions in webinos such as browser-plug-in (NPAPI),
browser extensions (Chrome extensions) and JavaScript engine add-ons and
provide a recommendation, which solution shall be incorporated into the
webinos runtime.

#### Plug-in standards[¶](#Plug-in-standards)

The Netscape Plug-in API (NPAPI) has been adopted by all major browser
platforms ranging from Webkit browsers (Safari, Chrome) to Firefox and
Opera. MS Internet Explorer does not support NPAPI in favour of ActiveX.

Plug-in are executed directly on the underlying operating system. NPAPI
plug-in are browser independent but heavily rely on the operating
systems especially for 2D and 3D graphical output or audio output. For
each operating system the plug-in needs to be customized and compiled.
However, there are a few frameworks such as [FireBreath] or [Luce]
available for simplifying the cross-platform development of NPAPI
plug-ins.

In order to provide a richer interaction between a web application and a
NPAPI plug-in, the NPAPI addition "npruntime" was introduced. npruntime
has been adopted by all major platforms as well. [npruntime]

Google proposed an extension to NPAPI called PEPPER (or PPAPI) to reduce
the dependencies between the plug-in and the operating system. Currently
PPAPI is only supported by Chrome [PPAPI]. Mozilla stated that they are
not interested in working on PPAPI at the moment [moz-ppapi].

The unlimited and direct access to the operating system for plug-ins
raises many security considerations, but is nevertheless an important
factor to build unique web applications and enabling the access to
unique device features. To overcome the security concerns about NPAPI
Google introduced the Google Native Client project (NaCl) to execute
native code in a sandboxed environment and prohibits the access to all
hardware resources (e.g. file-system).

Due to the lack of support for PEPPER in different browser runtime and
the limited usability of NaCl we are going to focus our analysis on
plug-ins on NPAPI.

##### Using a NPAPI plug-in

From web application developer’s perspective the usage of a plug-in is
fairly simple. The following lines of code describe, how an app
developer checks, if a plug-in for given MIME-Type is already installed
on the device and how the web application can interact with the plug-in
afterwards.

    1 if (navigator.mimeTypes["application/webinos-extension-x1"] &&
    2     navigator.mimeTypes["application/webinos-extension-x1"].enabledPlugin != null){
    3   document.write('<embed type="application/webinos-extension-x1">');
    4   var embed = document.embeds[0];
    5   embed.nativeMethod();
    6   alert(embed.nativeProperty);
    7   embed.nativeProperty.anotherNativeMethod();
    8 }

##### Building a NPAPI plug-in

The NPAPI standard mandates the developer to embed methods inside the
plug-in for interaction with the browser, as described in the following
document [npapi-plugin-side-api]. These methods include the
initialization (`NP_Initialize`), terminiation (`NPP_Destroy`) of the
plug-in as well as receiving information about the supported MIME-Types
(`NP_GetMIMEDescription`) and version of the plug-in (`NPP_GetValue`).
`NPP_GetValue` also provides mechanism to handle requests from the web
application.

As described in [npapi-browser-side-api] and [npruntime] the browser
itself have to embed several methods in order to support NPAPI plug-ins.
The API exposed by the browser to plug-in incorporates methods to invoke
JavaScript functions of a web application (`NPN_Invoke`), to allocate
memory of the browser mem space (`NPN_MemAlloc`) or to receive
information about the browser engine (`NPN_GetValue`).

#### Extensions[¶](#Extensions)

There are no cross-browser extension standards available. Each browser
engine provides a different set of functionality for its extensions.

Firefox provides for their add-ons a nice interface called js-cytpes to
invoke native libraries without the need to integrate an extensions into
Mozilla's XPCOM architecture. The js-ctypes is detailed in the following
section. The interaction possibility between a web application and the
extension are fairly limited and is possible using events.

Extensions in Chrome are a zipped bundle of files (HTML, CSS,
JavaScript, images). Extensions are essentially web pages with access to
all the APIs that the browser provides to web pages. They can interact
with web pages or servers using content scripts or cross-origin
XMLHttpRequests. Additionally extensions can also interact
programmatically with browser features such as bookmarks and tabs.

However, there are no direct mechanisms available for extensions to call
JavaScript functions of a web page or vice versa. JS functions can be
invoked using DOM manipulation.

Although there is no API provided to interact with the underlying
operating system, NPAPI plug-ins can be part of zipped bundle.

A prototype chrome extensions for webinos built with the webinos
discovery plug-ins underlines the weakness in communicating between the
web-app and the extension.

#### Direct JavaScript additions[¶](#Direct-JavaScript-additions)

The JavaScript engine plays a crucial role in the webinos runtime. For
that we are going to analyze two projects, which propose methods to
access the native functions outside of the JavaScript engine. These two
projects are add-ons in Node.js [node.js] and as already mentioned
js-ctypes for Firefox extensions [js-ctypes].

#### js-cytpes[¶](#js-cytpes)

js-cytpes is an interface for add-ons in firefox running inside the
chrome. The add-on cannot interact with scripts of a web application.\
js-ctypes is a slim interface to call native libraries stored on the
hosting device. It enables the access to these libraries, but does not
provide any methods to store or install platform specific binaries. The
following code snippet illustrates how js-cytpes can be used by a
developer to open the native message box on a Windows system.

     1 /* importing the js-ctype library */
     2 Components.utils.import("resource://gre/modules/ctypes.json");
     3 /* TODO */
     4 var lib = ctypes.open("C:\\WINDOWS\\system32\\user32.dll");
     5 /* Declare the signature of the function we are going to call */
     6 var msgBox = lib.declare("MessageBoxW", ctypes.winapi_abi, ctypes.int32_t, ctypes.int32_t,ctypes.jschar.ptr, ctypes.jschar.ptr,ctypes.int32_t);
     7 var MB_OK = 3;
     8 /* triggering the previous declared function*/
     9 var ret = msgBox(0, "Hello world", "title", MB_OK);
    10 lib.close();

\
[using-js-ctypes]

#### node.js addons[¶](#nodejs-addons)

Node.js is a server-side JavaScript environment that uses an
asynchronous event-driven model. It is based on Google's JavaScript
engine V8. Add-ons for node.js are dynamically linked shared objects and
provide glue to C and C++ libraries [node.js].

From an application developer perspective the usage of an add-on in
Node.js is straight forward as illustrated in the following code
snippet.

    1 var extension = require(./extension);
    2 extension.doSomething();
    3 

The development of an add-on in node.js involves knowledge of numerous
libraries:

1.  V8 JavaScript library for creating objects, calling functions etc
2.  libev, a C event loop library, if there is need to wait for a file
    descriptor to become readable, wait for a timer, or wait for a
    signal to received one will need to interface with libev. That is,
    if you perform any I/O, libev will need to be used. Node uses the
    EV\_DEFAULT event loop.
3.  libeio, a C thread pool library for executing blocking POSIX system
    calls asynchronously.

All Node add-ons must export a function called `init` with the following
signature:

    1 extern 'C' void init (Handle<Object> target)

### Mapping requirements to technical solutions and Recommendation for the webinos runtime[¶](#Mapping-requirements-to-technical-solutions-and-Recommendation-for-the-webinos-runtime)

Table X compares the different solutions with the relevant requirement
developed in work package 2. The table provides an overview how the
different solutions fulfil the relevant requirements.

  ------------------ ------------------ ------------------ ------------------
                     **NPAPI**          **js-ctypes**      **Node.js
                                                           Add-ons**

  (CAP-DWB-FHG-002)  Designed to add    Enables the        Enables the
  The webinos        support for        developer to call  developer to
  runtime SHOULD     additional         native libraries   execute native
  allow access to    MIME-types for the within JavaScript. code on the OS
  non-webinos APIs   rendering engine.  No graphical       level. (Add-on is
  to device features Plug-in is         output inside the  statically
                     executed on the OS web-application    linked). No
                     level. It supports supported.         graphic output
                     graphical output                      inside the
                     inside a                              web-application
                     web-application.                      possible.

  (PS-DWP-ISMB-202)  Not supported.     Not supported.     Not supported.
  The Webinos        Mechanisms for     Mechanisms need to Mechanisms need to
  runtime MUST       (dis)allowing to   be integrated      be integrated
  ensure that an     load plug-in needs                    
  application does   to be integrated                      
  not access device                                        
  features,                                                
  extensions and                                           
  content other than                                       
  those associated                                         
  to it.                                                   

  (CAP-DEV-FHG-100)  Not supported.     Not supported      Partially
  Access to resource Addition would be                     supported. Server
  on remote devices  required. Hard to                     module of Node.js
  SHALL be available enable since NPAPI                    could be used to
                     is tightly coupled                    make extensions
                     to the web                            remotely
                     application DOM                       available.
                     events. What about                    Middleware for
                     the graphical                         exposing the data
                     output? What about                    needs to be
                     the graphical                         developed.
                     output, when                          
                     remotely accessed?                    

  It SHALL be        Partially          Not integrated in  Not supported
  possible to define fulfilled. For     the system yet     
  meta-packages      application                           
  containing a       specific                              
  collection of      extensions, the                       
  applications       plug-in is part of                    
  and/or extensions. the application                       
                     package and could                     
                     be described in                       
                     the                                   
                     packages/applicati                    
                     on                                    
                     manifest                              

  Extensions SHALL   NPAPI is one       No package system  Each node.js
  be packaged in a   binary file. Meta  defined            add-on is
  way that is as     data about a NPAPI                    described by a
  similar as         plug-in such as                       manifest file in
  possible to        name, version,                        JSON syntax.
  applications.      description is                        Add-ons are not
                     stored in the                         packaged, but are
                     binary itself.                        stored in a
                                                           separate folder

  Extensions SHALL   Partially                             Extension API is
  be treated in a    fulfilled: Plug-in                    used in the same
  way that is        is embedded object                    way as the regular
  similar and        in HTML and                           APIs
  consistent with    provides a                            
  standard device    scriptable                            
  features.          interface.                            

  An Extension that  Must be specified  JavaScript code is Must be specified
  contains           in the metadata    OS specific.       in the metadata
  platform-specific  description of the Platform           description of the
  code MUST be       application        association needs  application
  associated with                       to be integrated   
  the supported                                            
  platform(s).                                             
  ------------------ ------------------ ------------------ ------------------

For local usage a solution based on NPAPI is the most compelling one.
It's widely supported in browser runtimes and supports graphical output
on the device. The graphical output could be relevant for games (one of
the reasons, why HP/Palm introduced the webOS PDK). A remote access to a
NPAPI plug-in could be achieved, but would be limited to its scripting
interface.

### Security aspects[¶](#Security-aspects)

Security aspects are detailed in WP 3.5

### Policies[¶](#Policies)

In order to control the utilization of third party developers
extensions, as those defined in this section, two attributes should be
introduced to complete the list defined in
[Policy](/redmine/projects/wp3-3/wiki/Policy#Resource-Attributes):

  Attribute       Type   Value
  --------------- ------ -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  service         URI    URI that identifies the service
  app-extension   URI    URI that identifies the extension. If for the extension is not defined an URI, this will be composed by the application URI followed by the name of the extension (using percent-encoding for special characters [RFC3986](/redmine/projects/wp3-3/wiki/Policy#RFC3986) ) eg. the URI for the extension named "Extension 1" from the manifest of "Application A" which URI is "http://www.ApplicationA.com" will be "http://www.ApplicationA.com/Extension%201"

Resources[¶](#Resources)
------------------------

[Chrome-NPAPI] <http://code.google.com/chrome/extensions/npapi.html>\
[HP-PDK]
<https://developer.palm.com/content/api/dev-guide/pdk/overview.html>\
[FF-Addons] <https://addons.mozilla.org/en-US/firefox/browse/type:7>\
[Chrome-Extensions]\
[FireBreath]
<http://www.firebreath.org/display/documentation/FireBreath+Home>\
[Luce] <http://www.rawmaterialsoftware.com/juce.php>\
[npruntime]
<https://developer.mozilla.org/en/Gecko_Plugin_API_Reference/Scripting_plugins>\
[npapi-browser-side-api]
<https://developer.mozilla.org/en/Gecko_Plugin_API_Reference%3aBrowser_Side_Plug-in_API>\
[npapi-plugin-side-api]
<https://developer.mozilla.org/en/Gecko_Plugin_API_Reference/Plug-in_Side_Plug-in_API>\
[NaCl] <http://code.google.com/p/nativeclient/>\
[PPAPI] <http://code.google.com/p/ppapi/>\
[moz-pepper] <https://wiki.mozilla.org/NPAPI:Pepper>\
[node.js] <http://nodejs.org/docs/v0.4.8/api/addons.html>\
[js-ctypes]
<https://developer.mozilla.org/en/JavaScript_code_modules/ctypes.jsm>\
[using-js-ctypes]
<https://developer.mozilla.org/en/js-ctypes/Using_js-ctypes>

Recommendations from state of the art[¶](#Recommendations-from-state-of-the-art)
--------------------------------------------------------------------------------

W3C Widget specifications describing different parts around packaging
and handling Web applications. This includes packaging, signing and the
definition of APIs which is all also relevant for Webinos. Also these
specifications are in a closely to final stage and will be W3C
recommendations soon and the industry is adapting it (e.g., WAC and
Opera). Thus Webinos should base its application definition on the W3C
Widget specifications and extend them in order to meet additional
webinos requirements like distributed application design and exposing
functions as service appropriate.

References[¶](#References)
--------------------------

[CRX] <http://code.google.com/chrome/apps/docs/developers_guide.html>\
[OpenWebApps] <https://developer.mozilla.org/en/OpenWebApps>\
[AppCache] <http://dev.w3.org/html5/spec/offline.html>\
[W3CWidgets] <http://www.w3.org/2008/webapps/wiki/WidgetSpecs>\
[W3CWidgetFamily] <http://www.w3.org/2008/webapps/wiki/WidgetSpecs>\
[OperaWidgets] <http://dev.opera.com/sdk/>

