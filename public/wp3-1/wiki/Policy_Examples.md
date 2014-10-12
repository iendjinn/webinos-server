[Back to Policy Management](Back%20to%20Policy%20Management.html)

XACML (-like) policies and configuration examples[¶](#XACML-like-policies-and-configuration-examples)
=====================================================================================================

Policy examples & workflows for cross-device interaction, including non-webinos devices[¶](#Policy-examples-38-workflows-for-cross-device-interaction-including-non-webinos-devices)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To accomplish this feature we can define in the "target" field of policy
the subject as application+requestor location+( user?). The requestor
location can be one of the following:

-   local device
-   personal zone device
    -   shared personal zone device (that is a concurrently registered
        in two or more PZ)
-   external device
    -   device of an user belonging to my social proximity graph
    -   device of an user NOT belonging to my social proximity graph

We can add to the requestor location an attribute that specifies whether
the device/application is webinos-enabled or not.\
TODO: Replace picture :)\
![](http://dev.webinos.org/redmine/attachments/598/grafico.png)\
Note: we are assuming that a not webinos-enabled application/device can
be registered into a PZ (is that correct?)

Policy examples & workflows for outsourced policy specification[¶](#Policy-examples-38-workflows-for-outsourced-policy-specification)
-------------------------------------------------------------------------------------------------------------------------------------

Policy examples & workflows for updates to applications and update[¶](#Policy-examples-38-workflows-for-updates-to-applications-and-update)
-------------------------------------------------------------------------------------------------------------------------------------------

Policy Examples[¶](#Policy-Examples)
------------------------------------

### XACML policies[¶](#XACML-policies)

-   [XACML Control Login](XACML%20Control%20Login.html) (Source:
    <http://www.oasis-open.org/committees/download.php/2713/Brief_Introduction_to_XACML.html>)

### XACML-like policies[¶](#XACML-like-policies)

-   [WAC Default Security
    Policy](WAC%20Default%20Security%20Policy.html) (Source:
    <http://specs.wacapps.net/2.0/feb2011/core/default_policy.html>)

<!-- -->

-   Access to resources/Installation controlled by the manufacturer
    (that provides the policy) and then by the user\

         1 <policy combine="first-applicable" description="Policy by a manufacturer">
         2         <target>
         3                 <subject>
         4                         <subject-match attr="id" match="[the id (URI) of the extension]"/>
         5                 </subject>
         6         </target>
         7 
         8         <!-- manufacturer let the user to decide (through a prompt) but only if the extesion uses the allowed device-cap -->
         9         <rule effect="prompt-oneshot">
        10                 <condition>
        11                         <resource-match attr="device-cap" match="[a device-cap allowed by the manufacturer]"/>
        12                 </condition>
        13         </rule>
        14 
        15         <!-- deny access decision taken by manufacturer -->
        16         <rule effect="deny"/>
        17 </policy>

<!-- -->

-   Control an application access to APIs (of an extension or not)\

         1 <policy combine="first-applicable" description="Policy by a manufacturer">
         2         <target>
         3                 <subject>
         4                         <subject-match attr="distributor-key-fingerprint" match="[the fingerprint of the application distributor]"/>
         5                 </subject>
         6         </target>
         7 
         8         <!-- manufacturer let not the application to use any of the specified device-caps -->
         9         <rule effect="deny">
        10                 <condition combine="or">
        11                         <resource-match attr="device-cap" match="[a device-cap not allowed by the manufacturer eg. gps.configure]"/>
        12                         <resource-match attr="device-cap" match="[a device-cap not allowed by the manufacturer eg. gps.shutdown]"/>
        13                 </condition>
        14         </rule>
        15 
        16         <!-- manufacturer let the user to decide (through a prompt) but only if the application uses the allowed device-cap -->
        17         <rule effect="prompt-oneshot">
        18                 <condition>
        19                         <resource-match attr="device-cap" match="[a device-cap allowed by the manufacturer eg. gps.readposition]"/>
        20                 </condition>
        21         </rule>
        22 
        23         <!-- deny access decision taken by manufacturer -->
        24         <rule effect="deny"/>
        25 </policy>

Configuration Examples[¶](#Configuration-Examples)
--------------------------------------------------

W3C has published a [specification](http://www.w3.org/TR/widgets/) that
standardizes a packaging format and metadata for widgets.\
BONDI and WAC use the format defined by this
[specification](http://www.w3.org/TR/widgets/) that provides a mechanism
to extend the configuration document format with custom elements and
attributes (also those defined in other specifications) by using a
separate namespace.\
Below there are two basic examples and one with the extensions proposed
by John.

-   [Example configuration document from W3C
    specification](http://www.w3.org/TR/widgets/#example-configuration-document)\

         1 <?xml version="1.0" encoding="UTF-8"?>
         2 <widget xmlns       = "http://www.w3.org/ns/widgets" 
         3         id          = "http://example.org/exampleWidget" 
         4         version     = "2.0 Beta" 
         5         height      = "200" 
         6         width       = "200" 
         7         viewmodes   = "fullscreen">
         8 
         9         <name short="Example 2.0">The example Widget!</name>
        10 
        11         <feature name="http://example.com/camera">
        12                 <param name="autofocus" value="true"/>
        13         </feature>
        14 
        15         <preference name     = "apikey" 
        16                     value    = "ea31ad3a23fd2f" 
        17                     readonly = "true" />
        18 
        19         <description>
        20                 A sample widget to demonstrate some of the possibilities.
        21         </description>
        22 
        23         <author href = "http://foo-bar.example.org/" email = "foo-bar@example.org">Foo Bar Corp</author>
        24 
        25         <icon src="icons/example.png"/>
        26         <icon src="icons/boo.png"/>
        27         <content src="myWidget.html"/>
        28 
        29         <license>
        30                 Example license (based on MIT License)
        31                 Copyright (c) 2008 The Foo Bar Corp.
        32                 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        33                 OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        34                 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        35                 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        36                 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        37                 INSULT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        38                 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        39         </license>
        40 </widget>

<!-- -->

-   Simple WAC configuration for a widget that requires camera and
    filesystem and can use gps for geotagging\

         1 <?xml version="1.0" encoding="UTF-8"?>
         2 <widget xmlns="http://www.w3.org/ns/widgets" id="photomaker" version="1.0">  
         3         <name>PhotoMaker</name>
         4         <description>Take a photo</description>
         5         <author email="foo@example.org">Foo</author>
         6 
         7         <feature name="http://wacapps.net/api/camera" required="true"/>
         8         <feature name="http://wacapps.net/api/filesystem" required="true"/>
         9         <feature name="http://www.w3.org/TR/geolocation-API/" required="false"/>  
        10 
        11         <icon src="icon.png"/>
        12         <content src="index.html"/> 
        13 </widget>

<!-- -->

-   Simple WAC configuration with a hypothetical extension for webinos
    (FIX: to group usage-policies; use POWDER or P3P? )\

         1 <?xml version="1.0" encoding="UTF-8"?>
         2 <widget xmlns         = "http://www.w3.org/ns/widgets" 
         3         xmlns:webinos = "http://dev.webinos.org/" 
         4         id            = "photomaker" 
         5         version       = "1.0">
         6 
         7         <name>PhotoMaker</name>
         8         <description>Take a photo</description>
         9         <author email="foo@example.org">Foo</author>
        10 
        11         <feature name                 = "[eg. http://dev.webinos.org/api/camera]" 
        12                  webinos:location     = "[which device and where this feature is]" 
        13                  webinos:usage-policy = "[reference to a data usage (P3P) policy held elsewhere]" 
        14                  required             = "true"/>
        15 
        16         <feature name                 = "[eg. http://dev.webinos.org/api/filesystem]" 
        17                  webinos:location     = "[which device and where this feature is]" 
        18                  webinos:usage-policy = "[reference to a data usage (P3P) policy held elsewhere]" 
        19                  required             = "true"/>
        20 
        21         <feature name                 = "[eg. http://dev.webinos.org/api/geolocation]" 
        22                  webinos:location     = "[which device and where this feature is]" 
        23                  webinos:usage-policy = "[reference to a data usage (P3P) policy held elsewhere]" 
        24                  required             = "false"/>
        25 
        26         <icon src="icon.png"/>
        27         <content src="index.html"/> 
        28 </widget>

Examples of policies for an application installer, a process viewer and policy management application[¶](#Examples-of-policies-for-an-application-installer-a-process-viewer-and-policy-management-application)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The policies for this set of applications should be very similar to the
policies for the access control. I think that we could define some
features (like in BONDI [see [BONDI Architecture and Security
Appendices](http://bondi.omtp.org/1.1/security/BONDI_Architecture_and_Security_Appendices_v1.1.pdf)
from page 9]) to represent the main actions for widget-lifecycle
(install, instantiate, update, uninstall), monitoring, policy management
(update, remove,..), network access, etc.\
Using these features we can easily control the different actions. For
example if we define the feature
<http://www.webinos.org/actions/widget-install> we can control the
installation of a widget this way:

-   Deny the installation of applications that use externalNetworkAccess
    or XMLHttpRequest, prompt to user (every time) on policy change
    requests, permit all the rest\

         1 <policy combine="first-applicable" description="Operator policy">
         2         <target>
         3                 <subject>
         4                         <subject-match attr="distributor-key-root-fingerprint" match="(Operator root fingerprint)"/>
         5                 </subject>
         6         </target>
         7 
         8         <rule effect="deny">
         9                 <condition combine="and">
        10                         <condition combine="or">
        11                                 <resource-match attr="device-cap" match="XMLHttpRequest"/>
        12                                 <resource-match attr="device-cap" match="externalNetworkAccess"/>
        13                         </condition>
        14                         <resource-match attr="api-feature" match="http://www.webinos.org/actions/widget-install"/>
        15                 </condition>
        16         </rule>
        17 
        18         <rule effect="prompt-oneshot">
        19                 <condition>
        20                         <resource-match attr="api-feature" match="http://www.webinos.org/actions/policy-modify"/>
        21                 </condition>
        22         </rule>
        23 
        24         <rule effect="permit"/>
        25 </policy>


