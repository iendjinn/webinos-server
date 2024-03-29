Implementation Architecture[¶](#Implementation-Architecture)
============================================================

Device discovery faces challenges of multiplicity of networking
technology. Different internetworking technologies are likely to adopt a
variety of discovery protocols among themselves. As a result, the
services information & presentations from different discovery processes
vary depending on the discovery mechanisms used. While on the other
hand, web developers don’t want to know the details of the bearers and
prefer to have generic structures for different services. A solution as
shown in Figure 1 is to provide two layers of APIs - a high level
discovery and context APIs in webinos using Javascript libraries built
on top on lower level one specific to each interconnect technology, with
mappings between under layer details to the generic upper layer
discovery API.

![](http://dev.webinos.org/redmine/attachments/580/implementation_arch_discovery.png)

This solution will bring two benefits:

-   Reduces effort for developing applications
-   Tolerance to changes in networking technologies, addressing schemes
    and topologies

In this section, we will look at the implementation issues from the
following aspects:

-   Low level native code & APIs
-   High level JavaScript APIs
-   Mappings/wrappings between lower level and high level
    implementations

The descriptions are based on the use scenarios described in the earlier
part of Discovery section.

Scenario 1 - George wants to view his mobile hosted MP4s on his set top box and both devices have access to the internet¶[¶](#Scenario-1-George-wants-to-view-his-mobile-hosted-MP4s-on-his-set-top-box-and-both-devices-have-access-to-the-internet¶)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Implementation 1.1: Set Box can be reached via local connection. George to discover his set box via local discovery – Internet access is not essential.[¶](#Implementation-11-Set-Box-can-be-reached-via-local-connection-George-to-discover-his-set-box-via-local-discovery-–-Internet-access-is-not-essential)

**Aspect 1:** Low level native codes & APIs - George’s mobile scans for
his set box with any local discovery implementations. We give a few
examples as below:

-   Avahi - Zeroconf implementation

Avahi is a zeroconf implementation It provides a good range of for
multicast DNS/DNS-SD service discovery. It is under the GNU Lesser
General Public License (LGPL). With the advantage being open source over
Apple’s Bojour implementation, Avahi had already become the de-facto
standard implementation of mDNS/DNS-SD on free operating systems such as
Linux.

Avahi provides a set of language bindings, e.g . python, C, C++. It
ships with most Linux and \*BSD distributions. Avahi source codes are
available to download free online.

Following figure illustrated some main APIs used in avahi.

-   BlueZ - Bluetooth

BlueZ is a widespread Bluetooth stack implementations initially
developed by Qualcomm. It is included with the official Linux kernel
distributions. As of 2006, the BlueZ stack supports all core Bluetooth
protocols and layers [wiki]. BlueZ provides a set of language bindings
such as python, C, Java, C++ etc.

[In our implementation, hci\_inquiry performs a Bluetooth device
discovery and returns a list of detected devices and some basic
information about them in the variable.]

-   UPnP implementations. There are a few open sources UPnP
    implementations existing for Linux system, e.g. gupnp-tools and
    upnp-inspector. Since these implementations may come with a lot
    dependencies, e.g gupnp implementation depends on glib etc. As SSDP
    protocol is not so complicated itself, an alternative way is to
    write our own SSDP codes. See
    [<http://www.w3.org/2011/04/discovery.html>]

<!-- -->

-   OpenSLP – SLP

The OpenSLP project is an effort to develop an open-source
implementation of the IETF Service Location Protocol suitable for
commercial and non-commercial application. It is under the Caldera
Systems open source license - a license that is legally compatible with
the popular BSD open source license[ <http://www.openslp.org/>]. OpenSLP
is hosted by SourceForge.net and source code and binaries are free for
download.

Main APIs:

Registration - SLPReg (..., service\_type, service\_attribute,
callback...);\
Service find - SLPFindSrvs (..., service\_type, filter, callback...);

**Aspect 2:** High level JS discovery implementations

The high level discovery implementation is to expose both low level
discovery interfaces, device and service features to web developers and
end users, ideally in JavaScript. This means to advertise, find and bind
services via web page scripts. The scripts listen for requests from
other browsers and then respond in some manner. This might involve
extensions on the current browsers with a server of some kind.
Extensions on browser out the scope of discovery and will not be
discussed here. High level discovery APIs that are going to be exposed
to web developers, however, should be defined and illustrated. Details
on high level JavaScript APIs are described in API & protocol sections.

Exchange device/service request and response messages are handled by
event handling or messaging. It can be implemented in http level or
socket level. Refer event handling and dependencies sections for details
on messaging exchange.

**Aspect 3:** Mappings/wrappings between lower level & high level
implementations

To expose low level native codes to high level Javascript, one option is
to use a cross browser plugin. Following figure shows an example on
exposing avahi\_service\_browser\_new() api to a Javascript object using
NPAPI. Refer section on plugin for more details on Browser
plug-in/extension handling .

Scenario 2 - George wants to listet to Pauls MP4s on his mobile - mobile to mobile, and both have access to the internet¶[¶](#Scenario-2-George-wants-to-listet-to-Pauls-MP4s-on-his-mobile-mobile-to-mobile-and-both-have-access-to-the-internet¶)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Scenario 3 - George has music hosted on a web service, and wants to listen to them on his own mobile device¶[¶](#Scenario-3-George-has-music-hosted-on-a-web-service-and-wants-to-listen-to-them-on-his-own-mobile-device¶)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
