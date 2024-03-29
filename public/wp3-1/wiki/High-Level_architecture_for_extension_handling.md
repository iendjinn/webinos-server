perspectives on extensions in webinos[¶](#perspectives-on-extensions-in-webinos)
================================================================================

From my point of view there are different stakeholder with contrary
expactions towards extensions in webinos involved. So far four have been
identified.

Developer of Webinos Apps (DEV)[¶](#Developer-of-Webinos-Apps-DEV)
------------------------------------------------------------------

The app developer wants to built a unique app, which requires some
special features only availabe in an extensions. Extensions provide
access to uncommon device capabilites by defintion

Extension developer/provider[¶](#Extension-developerprovider)
-------------------------------------------------------------

An extension developer wants others to use his extension. Potentially
due to financial, political or security related concerns he wants to
know, which application is using his extension and wants to grant access
rights to the developers

User (USR)[¶](#User-USR)
------------------------

On the one hand the user wants to know which extensions are running on
his device and may want to be able to disable or remove an extension
from his device. On the other hand he might not want to deal with
installing extensions and keeping them up to date.

Device Manufacturer (DMH)[¶](#Device-Manufacturer-DMH)
------------------------------------------------------

A device manufacturer might wants to know which extension is running on
his platform and my want to disallow certain extensions and apps using
an extension on his platform due to financial, political or security
related reasons.

I tried to stick with stakeholders from the glossary, but the developer
of an extension is somehow different to a 3rd party service provider or
a developer of a webinos app, because he has direct access to device
capabilites. So we might want to introduce the extension developer as
another stakeholder in webinos. From my understanding the third party
provider is someone who exposes Services on the web, for instance Google
Maps.

High level architecture[¶](#High-level-architecture)
====================================================

![](http://dev.webinos.org/redmine/attachments/download/424/high-level-architecture.png)

As a follow up to the motivation of the stakeholders involved in the
extension handling I came up with a first draft on the high-level
architecture for extension handling in webinos, which highlights the
interfaces to other functional units in webinos and breaks down the
extension handling into smaller packages.\
In the extension handling we have to find answers to the following
questions:

-   How can applications make use of an extension?
-   How can an extension be deployed and provisioned to a device?
-   How can we ensure that only authorized applications can use an
    extension and only authorized extensions are being deployed?
-   How do we access the device features?

To answer these questions we have to interact with the *API Access
Control* to authorize the access to an Extension API, to *Discovery* to
locate a requested feature in our webinos environment and to the
*Application Handling*.

How does an app make use of an extension?[¶](#How-does-an-app-make-use-of-an-extension)
---------------------------------------------------------------------------------------

In a first step the application has to request a feature. This can be
done dynamically (request feature) or statically (stated in the app
manifest). The developer must be able to handle exceptions, if the
extension is not available for various reasons.

The request for a feature has to be handled by the discovery and api
access control modules. The discovery module is used to determine if the
feature is available on the device or remotely. If the feature is
available the API access control has to decide, if the application is
allowed to use the extension.

In order to determine wether an extension is available on the device or
not the extension manager is used to provide this information. It keeps
track of available features on the device. Furthermore the extension
manager triggers the API Access Control module to set the access rights
to an extension.

### What kind of output is needed for that?[¶](#What-kind-of-output-is-needed-for-that)

-   \(1) DataFormat in the WidgetHandling for statically requesting a feature
-   \(1) DEV API for requesting an extension
-   \(1) DEV API to determine the status of an extension. The BONDI extension
    handling API might be a good fit (see
    <http://bondi.omtp.org/1.1/security/BONDI_Architecture_and_Security_v1.1.pdf>,
    Page 39, 64 ff).
-   \(2) API at the extension manager to retrieve information on an
    extension.
-   \(3) API at the discovery-module to announce the availability of an
    extension.
-   \(4) API at the API access control to configure the access rights to an
    extension
-   DataScheme to store information on locally available extensions

How can an extension be deployed and discovered?[¶](#How-can-an-extension-be-deployed-and-discovered)
-----------------------------------------------------------------------------------------------------

It’s highly beneficial, if an extension can be installed and updated
remotely on a device. For this reason we might want use a global
extension repository, where the information about the extension (and the
extension itself) are being stored. If the extension manager gets a
request for an extension, which is not already installed on the client,
the manager queries the extension repository to retrieve information on
the availability of an extension. If an extension is available, the
extension manager initiates the installation and configuration of the
extension

### What kind of output is needed?[¶](#What-kind-of-output-is-needed)

-   DataScheme to store information on extension (supported and
    authorized devices, authorized applications) on the extension
    repository
-   Protocol to store an extension on the device
-   API at the extension repository to retrieve information on available
    extensions
-   API at the discovery module to announce the availability of an
    extension
-   API at the API Access Control to configure accessibility of an
    extension

How can we ensure that only authorized applications can use an extension and only authorized extensions are being deployed?[¶](#How-can-we-ensure-that-only-authorized-applications-can-use-an-extension-and-only-authorized-extensions-are-being-deployed)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If an extension is published on the extension repository, the developer
has to select on which devices the extension should be available.
Depending on this selection the extension might have to be tested and
approved by the device manufacturer or other entity.\
The extension manager uses information on authorized device types to
configure the access control to the feature on the device.

### What kind of output is needed?[¶](#What-kind-of-output-is-needed)

-   DataScheme to store information about an extension
-   Process for approving an extension
-   Process for submitting an extension

How to we access the device features?[¶](#How-to-we-access-the-device-features)
-------------------------------------------------------------------------------

We already discussing several different approaches for accessing the
device capabilites:

-   NPAPIs
-   one NPAPI with integrated V8 engine
-   local web server

Other[¶](#Other)
----------------

In the motivation section I stated that the user might want to know,
what extensions are being installed on his device and by whom they are
used. For that reason an app for monitoring the extensions has to be
available on the client.

### What kind of output is needed?[¶](#What-kind-of-output-is-needed)

-   API at the extension manager to retrieve information on active,
    installed extensions
-   API to manage the access controls for the features (visibility of
    the extension – only my device, my devices, trusted devices, …)

