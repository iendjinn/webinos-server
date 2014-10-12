Extensions Specification[¶](#Extensions-Specification)
======================================================

Specification[¶](#Specification)
--------------------------------

The webinos runtime must support the NPAPI standard. The specification
to build NPAPI plugins and a NPAPI compliant runtime is out of scope of
this document. The NPAPI plug-ins and a NPAPI compliant runtime are
specified in ([NPAPI-Browser-Side-Api](NPAPI-Browser-Side-Api.html)),
([NPAPI-Plugin-Side-Api](NPAPI-Plugin-Side-Api.html)), and
([Npruntime](Npruntime.html)).

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

