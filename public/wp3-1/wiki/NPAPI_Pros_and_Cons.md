[Back to plug-in/extension
handling](%20Back%20to%20plug-in/extension%20handling.html)

NPAPI[¶](#NPAPI)
================

A cross browser plug-in which uses OS functionality to support plug-in.\
See Habib's presentation about how NPAPI works in FF (bottom of the
page).

Pros[¶](#Pros)
--------------

-   Event handling, Networking function and Onscreen drawing
-   Widely adopted and supported in all major browser except Microsoft
    IE.

Cons[¶](#Cons)
--------------

-   Considered to be weak standard, every browser has its own
    interpretation
-   Restricted to using local OS functionality. Not cross platform.
-   Look and feel differ in each native environment
-   Runs in same context of the parent process, it is not spawned as a
    new thread\#

What could we use in webinos from NPAPI?[¶](#What-could-we-use-in-webinos-from-NPAPI)
-------------------------------------------------------------------------------------

### API for making use of an plugin (perspective app developer)[¶](#API-for-making-use-of-an-plugin-perspective-app-developer)

A standard browser plugin is embeded into the web app using the
`<embed>`. By specifiying the MIME-type of the object the registered
plugin for this MIME type is loaded.

    1 <embed type="application/webinos-extension-x1">

In addition an API for checking the availability of a plugin for a given
MIME-type is available.\

    1 <script type="text/javascript">
    2 if (navigator.mimeTypes["application/webinos-extension-x1"] &&
    3     navigator.mimeTypes["application/webinos-extension-x1"].enabledPlugin != null)
    4   document.write('<embed type="application/webinos-extension-x1">');
    5 </script>

### API for making a plugin installable by the browser[¶](#API-for-making-a-plugin-installable-by-the-browser)

The name, a description, a version number and the supported MIME-Type
must be specified by the plugin developer. For specifying these
attributes the following functions from the npfunctions.h header file
must be implemented:\

    1 NP_EXPORT(const char*) NP_GetMIMEDescription()
    2 NP_EXPORT(char*) NP_GetPluginVersion()
    3 // Called during initialization to retrieve the plug-in's name and
    4 // description, which will appear in the navigator.plugins DOM
    5 // object which is used to populate about:plugins.
    6 NP_EXPORT(NPError) NP_GetValue(void* future, NPPVariable aVariable, void* aValue)
     

### Interface for making methods, properties and attributes of the plugin available and firing events[¶](#Interface-for-making-methods-properties-and-attributes-of-the-plugin-available-and-firing-events)

TODO

Link collection[¶](#Link-collection)
------------------------------------

-   [How Plug-ins detection works in
    Firefox](https://wiki.mozilla.org/Plugins:PluginDirectory/HowPluginDetectionWorks)
-   [Information Hub Plugins on
    developer.mozilla.org](https://developer.mozilla.org/en/Plugins)
-   [API Reference for NPAPI in
    Firefox](https://developer.mozilla.org/en/Gecko_Plugin_API_Reference)
-   [Overview on Plugin development for
    Firefox](https://developer.mozilla.org/en/Gecko_Plugin_API_Reference/Plug-in_Development_Overview#Building_Plug-ins)
-   [Plugin development for
    WebKit](http://developer.apple.com/library/mac/#documentation/InternetWeb/Conceptual/WebKit_PluginProgTopic/WebKit_PluginProgTopic.pdf)
-   [Tutorial on building a NPAPI
    plug-in](http://colonelpanic.net/2009/03/building-a-firefox-plugin-part-one/)
-   [Plugin Architecture in
    Chromium](https://sites.google.com/a/chromium.org/dev/developers/design-documents/plugin-architecture)

