Webinos Architecture[¶](#Webinos-Architecture)
==============================================

-   [Webinos Architecture](#Webinos-Architecture)
    -   [Introduction](#Introduction)
    -   [Applications and Services](#Applications-and-Services)
    -   [Personal Zones](#Personal-Zones)
    -   [Binding, privacy and security](#Binding-privacy-and-security)
    -   [Extensibility](#Extensibility)
        -   [Events or call-backs](#Events-or-call-backs)
    -   [Webinos in the browser](#Webinos-in-the-browser)
        -   [Synchronization and secure
            storage](#Synchronization-and-secure-storage)
    -   [Personal Zone Hub](#Personal-Zone-Hub)
        -   [NAT traversal and efficient use of communication
            networks](#NAT-traversal-and-efficient-use-of-communication-networks)

Introduction[¶](#Introduction)
------------------------------

This section will describe the webinos architecture, which is centered
around the notion of a Personal Zone as a means to organize your
personal devices and services. Each device, whether it be a mobile,
tablet, desktop, TV or in-car head unit, includes a Web browser that is
extended to enable the device to be a part of the Personal Zone. The
Personal Zone Hub runs on a Web server with a public URL, and provides
the means for other people to access your devices and services subject
to your preferences. All devices in the Zone have access to a shared
model of the context, this allows them to operate when offline, or when
temporarily unable to access the Internet.

The webinos architecture seeks to make it easier for Web application
developers to create applications that span devices and firewalls. This
is achieved through:

-   Logical communication paths based on trust relationships, and
    decoupled from underlying interconnect technologies
-   Simple access to local and remote services
-   Simple discovery of devices/services
-   Trust based on social relationships between people
-   Adaptation based upon access to the context

<!-- -->

      Comment: the above "trust based on social relationships" isn't really true.

\

      Comment (CF): Yes - the original intent somewhat got lost and we haven't regained it or aren't likely to - we should remove that.

The simplicity of the high level APIs for Web application developers is
realized through 3rd party components that layer on top of lower level
APIs and mask the complexity involved. It is anticipated that this will
lead to a market for such components as demand is stimulated by the
continuing evolution of devices and interconnect technologies. This in
turn will feed the market for services provided by Web developers. This
report mainly focuses on the high level APIs exposed to web developers,
and further reports are expected to elaborate on the lower level APIs
and protocols as a basis for interoperability across implementations of
the webinos platform.

Applications and Services[¶](#Applications-and-Services)
--------------------------------------------------------

Applications may be downloaded and installed on devices, or they may be
hosted by servers, with components that are dynamically downloaded when
needed. Applications can make use of services, and in turn can provide
services. Services may include a user interface exposed as part of an
application, e.g. within an HTML iframe element. The ability to combine
and tailor services is used to support "mashups". Applications are
essentially services that can be installed or bookmarked.

Personal Zones[¶](#Personal-Zones)
----------------------------------

We individually own an increasing number of devices, for instance, a
smart phone, tablet and desktop computer, TV, and other consumer
devices. The Personal Zone provides a basis for managing your devices,
together with the services you run on them. This includes personal
services you use in the Cloud. The Personal Zone supports:

-   Single sign-on, where you authenticate yourself to a device, and the
    device authenticates to the zone. This avoids the need for
    establishing direct peering relationships between each pair of
    devices. It also allows for stronger authentication with the
    services you use. No more typing user ids and passwords into web
    page forms! Note that the architecture allows for situations where
    you are offline, e.g. when you are away from home and are currently
    unable to access the Internet.

<!-- -->

     Comment: We need to drop the "single sign-on" phrase, I think.  While we did aim to do it, I don't think it's likely to be implemented considering the various authentication approaches different web apps take.  We can talk about a consistent cross-device authentication within and between personal zones, but probably not for apps. 

\

      Comment (CF): I'd leave it as it is. The device authentication is (or at least should be) as described. And an app can figure out the current user, this avoiding web forms. So while it might be slightly hyperbolic (and I would consider removing the line "No more typing user ids and passwords into web page forms!" since it's promotion-speak and should not be in a spec), I see nothing wrong with the statement itself.

-   Shared model of the context. This covers users, device capabilities
    and properties, and the environment. It enables applications to
    dynamically adapt to changes, and to increase usability by
    exploiting the context.

<!-- -->

-   Synchronization across the devices in the zone. This includes
    support for distributed authentication, as well as personal
    preferences, and replication of service-specific data, e.g. social
    contacts, and appointments. Synchronization is essential for
    supporting offline usage.

<!-- -->

-   Discovery and access to services. This includes local discovery,
    e.g. of services exposed by your devices, whether connected through
    WiFi, Bluetooth, or USB, as well as remote discovery for services
    exposed in the Cloud. The high level discovery API allows Web
    developers to search for all local services, or to filter by service
    type and context, or even to locate a named service instance. Remote
    discovery is based upon the URL for a Personal Zone, or an email
    address or phone number, or even someone's name or pseudonym.

<!-- -->

    Comment "Remote discovery is based on existing user names and addresses, resolving to a URI for a personal zone" perhaps?

\

    Comment (Wei Guo) "Local" and "remote" terminologies might need to be clearly defined in Discovery. 

-   Licenses for the services you have purchased and run as part of your
    Personal Zone. This includes locally installed applications and
    hosted applications, dynamically loaded from web servers. The aim is
    to provide an open market for web developers that is not controlled
    by a single vendor.

<!-- -->

-   Trust relationships based upon social graphs. You have full access
    to all of the devices in your Personal Zone, as well as to shared
    devices, e.g. a network enabled TV that is accessed through the
    home's WiFi network, and shared by all family members. You can
    determine which of your devices are visible to your friends, and
    what services they can make use of. This is based upon preferences
    associated with your social graph. The preferences are updated as
    you make decisions in the course of using services, or through a
    Zone preference editor.

<!-- -->

     Comment: This should be removed.  I don't think we have plans to do this.

\

     Comment (CF): Agreed. This was a plan when we started, but we can't really achieve that or put it into webinos, so we should stop pretending.

Binding, privacy and security[¶](#Binding-privacy-and-security)
---------------------------------------------------------------

The webinos platform provides each device with an API for accessing
services exposed directly by the Personal Zone. An example is the method
used to discover services matching the given service type and context
constraints. The method is asynchronous, and results in call backs as
service instances are discovered. Developers can then provide a user
interface for selecting between alternatives, where the list is
dynamically updated as services become available or cease to be
available. The approach allows web developers to offer users the means
to obtain further information about each of the choices, as well as to
record preferences for use in future situations.

The process of binding to a service (having first discovered it)
involves:

-   mutual authentication, where the Zone authenticates the service, and
    the service authenticates the Zone
-   secure communication through the use of transport or application
    layer encryption, and checks against man in the middle attacks,
    spoofed IP addresses and spoofed DNS records

<!-- -->

     Comment: you can skip the "checks against man in the middle attacks, spoofed IP addresses and spoofed DNS records" as we're already saying mutual authentication.

\

     Comment (CF): Yes, but it sounds good and it does clarify the situation - even with mutual authentication,
    you still could have a man-in-the-middle attack. (Depending on how you implement the mutual authentication and whether you ensured that you had proper authentication when exchanging the certificates in the first place. So this just clarifies that we are considering such issues, so I would let it stay.

\

     Comment (JPL): How about "secure communication through the use of cryptographic protocols, protecting against eavesdropping and man-in-the-middle attacks".  Man-in-the-middle attacks tend to either take advantage of a lack of mutual authentication or attack a weakness in the mutual authentication process.

-   agreement on data handling obligations as set out in the service's
    privacy policy
-   reviewing and granting the request by the service for elevated
    privileges

The architecture allows for an extensible set of authentication
technologies, including those needed for existing (non-webinos)
services, such as facebook. Users are able to set up multiple
pseudonymous identities and to choose which of them should apply in the
current situation. Webinos-based services provide authentication
requirements and account management information expressed in JSON. To
cater for privacy, webinos provides support for machine interpretable
privacy policies based upon a subset of P3P also expressed in JSON,
together with a link to full human readable policies. Users can further
make use of third party assessments of services, e.g. black lists of
harmful services, and crowd-sourced assessments. The webinos platform
provides a secure basis for executing applications in which error prone
features are disabled by default, where such features are a common
source of attacks.

    Comment: we actually haven't implemented multiple pseudonymous identities.  It's on a TODO list, but I doubt it'll happen.  We also won't actually be implementing anything around blacklists or crowd-sourced assessments, so might be worth dropping that.

\

     Comment (CF): Agreed. We had been planning much more on social connection based features and almost none of them made it into the actual spec. So it makes sense to remove the references from the overview.

Applications (or embedded services) can request elevated privileges.
This is typically handled when the application first runs, and the
user's decision recorded for subsequent uses. A Zone API enables
applications to request a list of privileges, and should be accompanied
by information on what the application needs these for. The underlying
model is that of notice and consent. The associated user interface is
provided by the webinos platform, and not by the applications. A further
user interface is provided to enable users to review and revoke
decisions. The device itself may impose security policies, e.g. white
listing which services may have particular privileges.

Extensibility[¶](#Extensibility)
--------------------------------

The webinos platform APIs are designed for extensibility. It is common
to pass an object as an argument to a method where the object supports
one or more interfaces. These interfaces are interpreted by third party
components, and such third parties are also responsible for documenting
the extensions. Web developers can call a standard QueryInterface method
to cast an object to a named interface, when necessary to avoid name
clashes.

### Events or call-backs[¶](#Events-or-call-backs)

Having been discovered and bound, a service is exposed as an object in
the web page's script execution environment. This object acts as local
proxy for the service, which may be provided by a remote device. A
design decision is whether to support DOM eventing along with the
capture/bubble module. The alternative is to allow web page developers
to register a simple call back function, or to pass an object supporting
a given interface, i.e. with a named method that is used as a call back.
The DOM eventing model fits well when markup elements are used as
proxies for services, with the content of the element acting as
constraints on the service type and context.

Webinos in the browser[¶](#Webinos-in-the-browser)
--------------------------------------------------

A "Webinos" object is exposed as part of the global namespace for web
page scripts, and provides the core set of webinos APIs as methods and
properties. The implementation may further involve scripts and other
resources running as part of browser extensions (Chrome extension or
Firefox addon). These may in turn make use of browser (NPAPI) plugins or
local servers where native code is needed for discovery or for service
adapters, etc. An example is the discovery of devices connected via USB,
where a native code driver is dynamically loaded based upon the vendor
and product ids. Service adapters may involve a combination of a low
level native code driver together with a script library to interface the
service to web page scripts.

    Comment: this needs to be updated to reflect our current approach.

### Synchronization and secure storage[¶](#Synchronization-and-secure-storage)

Every webinos device will need some secure storage to support
authentication, personal preferences, policies and other data requiring
synchronization. Synchronization involves detecting and merging
differences, and asking the user to resolve conflicts, taking into
account periods of offline usage. The process involves a comparison of
clocks as a basis for correcting for skews prior to comparing the time
of each change. The approach is inspired by work on distributed revision
control and 3 way merge algorithms for tree structured data.
Synchronization takes place when a device connects to the Personal Zone,
and when changes occur. This is also coupled with local discovery, to
enable a shared model of the context. For IP-based networks, multicast
announcements and query responses can be observed to update a local
cache. Information which needs to be kept private can be protected and
accessed through HTTP together with transport layer security (TLS) and
authentication. Different parts of the context have different security
requirements, and it may be appropriate to encrypt them with different
keys.

    Comment: drop references to secure storage and encrypting with different keys.

The Personal Zone is exposed as a local API in each webinos enabled
device. This needs to function even when the device is operating in
isolation, or with a subset of devices in the absence of access to the
Internet. This relies on being able to synchronize the devices in a peer
to peer model. Synchronization depends on being able to merge changes,
and to detect and resolve conflicting changes. If the context data model
is independent, then one approach is to simply take the latest change to
a particular part of the context. If the context data model has
inter-dependencies, the updated model needs to satisfy the integrity
constraints. A transactional treatment of changes can help with this, as
well as with providing support for rolling back changes. Synchronization
and secure access to the context form a crucial part of the webinos
platform. Browsers already support mechanisms for recording preferences
and application specific storage, e.g. cookies. Webinos could build upon
this with additional database files held as part of the browser profile,
and accessible from trusted code in browser extensions.

Personal Zone Hub[¶](#Personal-Zone-Hub)
----------------------------------------

To enable external access to your zone, webinos defines a Personal Zone
Hub (PZH) as a service that is accessible via the public Internet. This
could for instance, be provided as a value-added service to users by
Internet Service Providers or it could be integrated in the DSL router
at home. The Personal Zone Hub is identified by a URL and supports a
RESTful API based upon JSON RPC. The hub is part of your Personal Zone
and supports access by you from other devices, e.g. when you walk into
an Internet Cafe, enabling you to access your Zone's devices and
services for the duration of a browsing session. It also enables access
by others, subject to the policies that you have defined.

Personal Zone Hubs collectively form a federated social Web with support
for social messaging based upon your relationship to other people. For
instance, you could keep a diary and allow your friends to add comments.
Your Zone Hub can subscribe to near instant notifications when a topic
(feed URL) you are interested in is updated. You can install third party
social applications to suit your interests.

    Comment: really?  Can you?

\

    Comment (CF): You can always install third party applications to do something... But, as before, we should remove the social connectivity references as far as the platform is concerned, since we moved away from that and pushed all such functionality into the realm of the apps. 

The Personal Zone Hub further provides support for discovering other
hubs based upon someone's full name or pseudonym. This is implemented as
a federated discovery process across hubs, starting from your own hub.
The results are ranked according to a measure of social relevance,
drawing upon information provided in your profile, or gleaned from other
sources. The process is trusted with access to personal data for ranking
purposes, but is designed to avoid disclosing such data, except as
permitted by the owner's policies. Distributed hash tables provide a
solution for locating candidate matches, but further work is needed to
determine the best approach for implementing a scale-able solution for
privacy friendly ranking of results.

    Comment: I'm not sure this is true.  Discovery is going to be implemented through WebFinger and existing online identities.  No federated process.

\

    Comment (CF): Not sure on this one. Since we still got the discovery spec, I'd suggest handling this when we know the results. I don't think we've actually mandated WebFinger yet (though it'll happen). And I'm not sure whether we'll mandate that as the only discovery process. So we keep the comment, and see the status on final editing. 

\

    Comment (JPL):WebFinger is in the 3.1 specs (Authentication, for one) although it isn't necessarily the only method. 

Personal Zone Hubs can also be discovered starting from someone's email
address or phone number. The email addresses domain name can be used to
locate a query service (typically provided by the domain owner). Note
that users may choose to limit discovery, e.g. to people within a given
group, or to prevent discovery altogether, in which case it is up to the
user to communicate the URL for their Personal Zone Hub to others as
needed.

### NAT traversal and efficient use of communication networks[¶](#NAT-traversal-and-efficient-use-of-communication-networks)

The Personal Zone Hub supports the establishment of UDP or TCP
connections across well behaved Network Address Translation boundaries.
This will not normally effect web developers, as the webinos platform
hides the establishment of such connections. The Personal Zone Hub can
also help with the efficient use of communication networks, e.g. by
tunneling events through a shared connection rather than setting up new
peer to peer connections, which is expensive on current mobile networks.
Common NAT devices have TCP session timeouts of 30 minutes to several
hours versus just a few minutes for UDP. Longer lived connections can be
realized at a virtual level, with SMS wake up messages to re-establish
lapsed connections, providing a means for maximizing battery life on
mobile devices.

Reviewed. (George Voulgaris)

