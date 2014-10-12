Recommendation for extensions in webinos[¶](#Recommendation-for-extensions-in-webinos)
======================================================================================

What are extensions in webinos?[¶](#What-are-extensions-in-webinos)
-------------------------------------------------------------------

Extensions in webinos will provide access to non-webinos APIs / unique
device features.\
In order to encourage 3rd party developers to build and use extensions a
technical solution to develop extensions has to be specified.\
From a more generic stand point three distinctive parts have to be
specified for extensions:

1.  3rd party developer APIs for accessing extensions inside a webinos
    application,
2.  pre-defined interfaces for integrating the extension into the
    webinos runtime (e.g., initialize function of the extension, mapping
    of extension methods/attributes to Javascript methods/attributes)
3.  a data-scheme for providing meta data about the extension (e.g.,
    name, supported platforms)

Technical solutions: Browser plug-ins vs. JavaScript add-ons[¶](#Technical-solutions-Browser-plug-ins-vs-JavaScript-add-ons)
----------------------------------------------------------------------------------------------------------------------------

From a technical point of view there are two options available to build
extensions for webinos: Browser plug-ins or add-ons to the JavaScript
engine (a glue between a JavaScript engine and native libraries). The
latter can be combined with an embedded web server to allow a remote
usage of the extension API.

### Browser plug-ins[¶](#Browser-plug-ins)

The general plug-in concept (NPAPI, PEPPER, ActiveX) for web browsers
provides support for 2D/3D output and additional media types inside a
web application. Additionally a plug-in provides a scriptable interface
to the web application, which makes it possible to extend the
“functionality” of the java script engine.\
![](http://dev.webinos.org/redmine/attachments/591/npapi.png)

### Javascript add-ons[¶](#Javascript-add-ons)

Another technical way to built extensions in webinos is to add new
attributes or methods to the javascript-engine. The added
attributes/methods are linked to native libraries. This has been done in
js-ctypes [1] for Firefox add-ons or for add-ons in Node.js [2].\
js-ctypes is an interface to native libraries stored on the hosting
device. js-ctypes enables the access to these libraries. It does not
provide any methods to store or install extension code. The js-ctypes
module in FF is only available to applications running in the chrome and
it cannot interact with scripts of a web application.\
![](http://dev.webinos.org/redmine/attachments/590/js-extensions.png)

    1 Components.utils.import("resource://gre/modules/ctypes.jsm");
    2 var lib = ctypes.open("C:\\WINDOWS\\system32\\user32.dll");
    3 /* Declare the signature of the function we are going to call */
    4 var msgBox = lib.declare("MessageBoxW", ctypes.winapi_abi, ctypes.int32_t, ctypes.int32_t,ctypes.jschar.ptr, ctypes.jschar.ptr,ctypes.int32_t);
    5 var MB_OK = 3;
    6 var ret = msgBox(0, "Hello world", "title", MB_OK);
    7 lib.close();

Node.js is running as a stand alone javascript engine on the device.
Addons are dynamically linked shared objects, which can provide glue to
C and C++ libraries. Node statically compiles all its dependencies into
the executable.

### Local extension server[¶](#Local-extension-server)

Node.js can be coupled with server module in order to make extensions
remotely available. The extension can be then accessed using XHR or a
web socket connection.

![](http://dev.webinos.org/redmine/attachments/589/node.png)

Extension types[¶](#Extension-types)
------------------------------------

We can distinguish extensions by its user group. There are on the hand
platform specific extensions, which are available to all applications
executed on the device and on the other hand there are extensions which
can be coupled to a specific application.

### Platform specific extensions[¶](#Platform-specific-extensions)

The platform specific model is used in the general browser plug-in
concept. Once the plugin is installed on the device, the plug-in will be
used by all web application, which includes an embedded objected mapped
to the specific MIME-Type of the plugin.

### Application specific extension (packaged to the application)[¶](#Application-specific-extension-packaged-to-the-application)

This concept of application specific extensions has been applied in HP
webOS Plugin Development Kit (PDK)[3]. A similar approach can be found
in Chrome extensions, where an extension can embed a NPAPI plugin .Since
the NPAPI binary is platform (OS) specific, a binary for each platform
is included inside the application package [4].

Mapping of extension related requirements to technical solutions[¶](#Mapping-of-extension-related-requirements-to-technical-solutions)
--------------------------------------------------------------------------------------------------------------------------------------

  ------------------ ------------------ ------------------ ------------------
                     **NPAPI**          **js-ctypes**      **Node.js
                                                           Add-ons**

  (CAP-DWB-FHG-002)  designed to add    enables the        enables the
  The webinos        support for        developer to call  developer to
  runtime SHOULD     additional         native libararies  execute native
  allow access to    MIME-types for the within javascript. code on the os
  non-webinos APIs   rendering engine.  no graphical       level. (Addon is
  to device features Plugin is executed output inside the  statically
                     on the OS level.   webapplication     linked). No
                     Supports graphical supported.         graphic output
                     output inside a                       inside the
                     webapplication.                       webapplication
                                                           possible.

  (PS-DWP-ISMB-202)  not supported.     not supported.     not supported.
  The Webinos        Mechanisms for     Mechanisms need to Mechanisms need to
  runtime MUST       (dis-)allwoing to  be integrated      be integrated
  ensure that an     load plugin needs                     
  application does   to integrated                         
  not access device                                        
  features,                                                
  extensions and                                           
  content other than                                       
  those associated                                         
  to it.                                                   

  (CAP-DEV-FHG-100)  not supported.     not supported      partially
  Access to resource Addition would be                     supported. Server
  on remote devices  required.\                            module of Node.js
  SHALL be available Hard to enable,                       could be used to
                     since NPAPI is                        make extensions
                     tidly coupled to                      remotely
                     the DOM of the web                    available.
                     application. What                     Middleware for
                     about the                             exposing the data
                     graphical output?                     needs to be
                     What about the                        developed.
                     graphical output,                     
                     when remotely                         
                     accessed?                             

  It SHALL be        partially          not integrated in  not supported
  possible to define fullfilled. For    the system yet     
  meta-packages      application                           
  containing a       specific                              
  collection of      extensions, the                       
  applications       plugin is part of                     
  and/or extensions. the application                       
                     package and could                     
                     be described in                       
                     the                                   
                     packages/applicati                    
                     on                                    
                     manifest                              

  Extensions SHALL   NPAPI is one       no package system  Each node.js addon
  be packaged in a   binary file. Meta  defined            is described by a
  way that is as     data about a NPAPI                    manifest file in
  similar as         plugin such as                        JSON syntax.
  possible to        name, version,                        Addons are not
  applications.      description is                        packaged, but are
                     stored in the                         stored in a
                     binary itself.                        separate folder

  Extensions SHALL   partially                             extension API is
  be treated in a    fullfilled: Plugin                    used in the same
  way that is        is embedded object                    way as the regular
  similar and        in HTML and                           APIs
  consistent with    provides a                            
  standard device    scriptable                            
  features.          interface.                            

  An Extension that  must be specified  Javascript code is must be specified
  contains           in the Meta data   os specific.       in the Meta data
  platform-specific  description of the platform           description of the
  code MUST be       application        association needs  application
  associated with                       to be integrated   
  the supported                                            
  platform(s).                                             
  ------------------ ------------------ ------------------ ------------------

Considerations for implementation[¶](#Considerations-for-implementation)
------------------------------------------------------------------------

subsystemes which need to be implemented:

-   System to remotely install extensions on the device.
-   System to handle and install plug-ins, which are part of an
    application package
-   policy enforcement for installing extensions on the device and
    enforcing access to an extension

NPAPI:

-   System to enable remote access to the extension

Node.js:

-   Middleware on top of Node.js to expose the APIs of the extension
-   JavaScript stub to access the extension APIs

Recommendation[¶](#Recommendation)
----------------------------------

For local usage a solution based on NPAPI is the most compelling one.
It’s widely supported in browser runtimes and supports graphical output
on the device. The graphical output could be relevant for games (one of
the reasons, why HP/Palm introduced the webOS PDK). A remote access to a
NPAPI plug-in could be achieved, but would be limited to its scripting
interface.

When it comes to remote usage a Node.js based solution seems the most
feasible. But the extension would not be able to render content.
Additionally Node.js would require a second JavaScript engine running on
the device.

[1]
<https://developer.mozilla.org/en/JavaScript_code_modules/ctypes.jsm>\
[2] <http://nodejs.org/docs/v0.3.1/api/addons.html>\
[3]
<https://developer.palm.com/content/api/dev-guide/pdk/overview.html>\
[4] <http://code.google.com/chrome/extensions/npapi.html>

