DEPRECATE - see </wp3-3/wiki/Application_Security_and_Secure_Communication> and Entity definitions pages[¶](#DEPRECATE-see-httpdevwebinosorgredmineprojectswp3-3wikiApplication_Security_and_Secure_Communication-and-Entity-definitions-pages)
======================================================================================================================================================================================================================================================================================

Types of Application[¶](#Types-of-Application)
==============================================

Table of definitions[¶](#Table-of-definitions)
----------------------------------------------

We define the following types of applications within webinos:

  Type   Runs in          Local / hosted   Widget Manifest?   Delivered over   Installed?   Authentication
  ------ ---------------- ---------------- ------------------ ---------------- ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  B-U    Browser          Hosted           No                 HTTP or HTTPS    No           None
  B-A    Browser          Hosted           No                 HTTPS            No           TLS certificate, root trusted by browser
  W-R    Widget runtime   Combination      Yes                File + HTTPS     Yes          Signed widget authenticated by WRT. 'Recognised' as per [WAC specifications](http://specs.wacapps.net/core/#digital-signatures) . HTTPS traffic only from recognised origin.
  W-U    Widget runtime   Combination      Yes                File + HTTPS     Yes          Signed widget, but unrecognised identity (see [WAC specifications](http://specs.wacapps.net/core/#digital-signatures) ). HTTPS traffic only from recognised origin. HTTPS traffic authenticated by widget runtime OR connected to same entity as the widget signature.
  W-H    Widget runtime   Combination      Yes                File + HTTP      Yes          May be unauthenticated and download data from HTTP sources.

This is related to [Types of API](Types%20of%20API.html).

In general, we expect that 'B-U' and 'W-H' categories will be deemed
roughly equivalent.

It is also possible that we do not (in webinos specifications) outline
any default settings for W-R, as we have not created the surrounding
ecosystem to support it.

Browser-based applications[¶](#Browser-based-applications)
----------------------------------------------------------

### Definition[¶](#Definition)

-   Web content served as pages or from an app cache.
-   Execute in the browser

### Security perimeter[¶](#Security-perimeter)

-   Origin - scheme, domain, port.

### Authentication[¶](#Authentication)

TLS/SSL certificates if present.

### Access to APIs[¶](#Access-to-APIs)

Mediated by the policy architecture.\
Unauthenticated content may be unable to have access to some APIs, and
settings may not persist.

Widgets[¶](#Widgets)
--------------------

### Definition[¶](#Definition)

-   Widget Manifest + content
-   Downloaded in a zip file
-   May also be 'hosted' - acquiring content from the web
-   Executes in a widget runtime

### Security perimeter[¶](#Security-perimeter)

-   Widget ID + recognised Origin (see WAC)

### Authentication[¶](#Authentication)

Widgets are signed as per W3C specifications on Widget signatures and
packaging. Widgets may be self-signed.\
Content from the web will come over HTTPS (except in the W-H category)

### Access to APIs[¶](#Access-to-APIs)

Mediated by the policy architecture.\
Widgets with hosted content from non-HTTPS sources may have limited
potential privileges and policies may not persist

Security discussion[¶](#Security-discussion)
--------------------------------------------

-   Difference in installation approach - widgets installed,
    browser-based apps aren't.
-   Unauthenticated web content is worse than unauthenticated /
    self-signed widgets: not installed, and no integrity guarantee.
-   We're not defining trusted or untrusted certificates
-   We should have a set of threats for each type of app?

