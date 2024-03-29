Browser and Runtime Definition - Security considerations[¶](#Browser-and-Runtime-Definition-Security-considerations)
====================================================================================================================

A conventional browser[¶](#A-conventional-browser)
--------------------------------------------------

A conventional browser, such as Chrome, Firefox or Internet Explorer is
capable of parsing and executing a number of different types of pages,
which differ subtly in how they are identified and where they are
stored.

  Type                       Description
  -------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Basic HTML**             any backward compatible HTML content HTML5,4 3 etc
  **HTML5 AppCache**         HTML5 content with a manifest descriptor, which describes set of web resources that in combination constitute a web application (hence its name: application cache). These resources may be defined to be be available offline
  **Proprietary manifest**   A secondary manifest (Chrome uses CRX <http://code.google.com/chrome/extensions/apps.html> ,Firefox <https://wiki.mozilla.org/Labs/Apps/Manifest>) which describes additional meta data pertaining to the application (name, icon etc.), holds permission requests and the adds potential to digitally sign the manifest

All three of these application types can be delivered either over HTTP
or HTTPs. This is significant for applications that are granted
permissions, because HTTP delivered content is highly susceptible to man
in the middle attacks.

### Conventional browser sand boxing[¶](#Conventional-browser-sand-boxing)

Web pages running under a conventional browser run within a sandbox.
There are two dimensions to this sandbox

1.  Network sandbox, more commonly known as same origin policy
    <http://www.w3.org/Security/wiki/Same_Origin_Policy>, which limits
    the domains from which further network resources can be access from
2.  Functional sandbox: which is an implied and well understood
    restriction of the type of functions that a web page may access
    (generally thought JavaScript APIs), without explicit use permission

As the web has evolved the number of features and functions that could
be deemed a security risk and operate outside of an acceptable
functional sandbox has been increasing

As an example if we look "under the hood" in Chrome, we can see that
permission for an application to access to following capabilities can be
set on a domain by domain basis

    mouse disablefull screennotificationslocationpopups pluginsJavascriptimages cookies

Generally their are three scenairos under which permission is granted by
the user for the application to access such capabilities

  Permission Grant Mechanism   Description
  ---------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  DEFAULT ON                   Where although there is a potential security risk it is deemed mild enough for the default setting to be ON, *images* and *cookies* from the list above fall into this category
  REQUEST ON FIRST USE         The user is presented with a dialog at point of first use, asking whether permission is granted, *location* and *notifications* fall in this category
  REQUEST ON INSTALL           The user is presented with a dialog at point of installation asking whether permission is granted. These apply also to *location* and *notifications* features, but if the permission has been requested in the proprietary manifest then on first use permission can be disregarded <http://code.google.com/chrome/extensions/manifest.html#permissions>

The important issues for browser based permission security are:

-   The granularity upon which permission is granted for normal web
    pages is typically domain of origin. All pages from this domain are
    granted the requested access
-   These permissions are cached by the use agent and are
    non-interoperable with other User Agents
-   These permissions are typically asked of the user at point of first
    use
-   Proprietary manifests, offer the opportunity to override the policy
    of "request permission on first use" and allow the permission to be
    granted at point of install
-   The permission perimeter for application declared through a manifest
    differs to a normal web pages in that, for Chrome at least, the
    permission request explicitly identifies the domain (multiple
    domains and domain matches) to which the permission applies
-   HTML5 AppCache on the does not directly refer to security
    permissions. However, becuase it defines a set of resources that may
    be cached locally, in the absence of a network connection, the
    AppCache manifest does define an implied narrower security
    perimeter.

TODO check

-   that "permissions" are active to offline content
-   that appcache and crx manifest to interact in the way described

TODO from a users perspective how different is a hosted app with
AppCache (triggering a use visible permission request) to a packaged app

A conventional runtime[¶](#A-conventional-runtime)
--------------------------------------------------

A conventional widget runtime such as WAC, Tizen, Wookie etc differs
from a browser in following critical ways

-   Widget content must be locally installed and held within the zip
    container. No remote resources can be accessed
-   Manifest is described using XML rather than JSON
-   Permissions (whether network permission WARP or API permission
    feature) are granted only to local pages, unlike CRX permissions
    which can grant permission to remote hosts also
-   A widget is uniquely identified by properties of the certificate
    singing chain as opposed to origin domain

Webinos PZP roles and responsibilities[¶](#Webinos-PZP-roles-and-responsibilities)
----------------------------------------------------------------------------------

Webinos PZP integration requirements[¶](#Webinos-PZP-integration-requirements)
------------------------------------------------------------------------------

Webinos Broswer PZP Integration[¶](#Webinos-Broswer-PZP-Integration)
--------------------------------------------------------------------

### Web Socket solution[¶](#Web-Socket-solution)

### Browser extension/plugin solution[¶](#Browser-extensionplugin-solution)

Webinos WRT Integration[¶](#Webinos-WRT-Integration)
----------------------------------------------------

Webinos PZP as a Service Host[¶](#Webinos-PZP-as-a-Service-Host)
----------------------------------------------------------------
