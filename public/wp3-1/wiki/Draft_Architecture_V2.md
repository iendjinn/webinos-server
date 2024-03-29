Introduction[¶](#Introduction)
==============================

This is a second version of the draft architecture.

webinos - Personal Zone[¶](#webinos-Personal-Zone)
--------------------------------------------------

The webinos personal zone is an overlay virtual network that acts as an
agent for a user (or other entity)

A Personal Zone had a central hub and many satellite proxies.

The personal zone should have the following properties.

**Addressability**

-   It is permanently addressable on the public internet - this is the
    address of the personal zone hub
    -   Its primary addressing mechanism is a public and unique URI
    -   It may have a number of other **unique** addressing mechanism,
        such as email addresses

**Distributed**

Although a webinos personal zone will always be addressable as a single
entity on the public internet, it will have many local \*instantiations"
on physical devices. (Personal Zone satellites)

-   These webinos personal zone shall aggregate all information it can
    about the different devices on which it is present
-   These devices shall be able to work in isolation, ie when there is
    no public internet.

**Authentication**

An individual user, device should be able to authenticate itself against
a personal zone.

-   when there is access to the public internet, it should do so against
    this single server
-   when there is no access to the pubic internet, there should be local
    mechanisms against which authentication is possible
-   when the device is on its own and unable to access others, e.g.
    offline or in an area without a communications infrastructure

Authentication may involve a discovery mechanism to find an
authenticating party, followed by an exchange of privacy and
authentication policies, and finally the authentication step itself. As
an example, mDNS could be used on a local area network to find the IP
address and port for the authenticating party (a server). Users may be
asked to select between alternative zones. Note: Bluetooth presents some
interesting challenges here! The network despite being short range is
essentially public, and lacks the analog of WiFi's SSID and WPA pass
phrase.

**Other Services**\
The personal zone hub and its satellites must support certain key
infrastructure functions, to allow apps and devices to work online and
offline. e.g

-   GetDevices() - get all devices attached to this zone

Assumptions

-   There is not central webinos server or registry. webinos will
    embrace a **distributed** architecture, in which multiple commercial
    entities can fulfil the roles implied by the personal zone.

### Trust relationships across zones[¶](#Trust-relationships-across-zones)

Some devices in the home are personal (your mobile phone) whilst others
are shared, (the TV). Webinos supports trust relationships across zones
based upon social proximity. Shared home devices could belong to a
family zone, or to that of a member of the family that makes the device
available to others, including visitors to the home.

webinos - Personal Zone proxy[¶](#webinos-Personal-Zone-proxy)
--------------------------------------------------------------

The webinos Personal zone satellite proxy, acts in place of the Personal
Zone hub, when there is no internet access to the central server.

In order to act in its place, certain information needs to be
synchronised between the satellites and the central hub.

Data that should be synchronised:

-   authentication creditability (hashes): so a user can authenticate
    off-line
-   policy rules, initially the whole set - perhaps later a subset - of
    the rules that mediate access between applications and resources
-   trusted devices: cryptographically protected identifiers of trusted
    devices (eg. devices in my personal zone) so that sessions can be
    negotiated as easily as possible
-   trusted users: cryptographically protected identifiers of trusted
    users - so that data can be shared between trusted people when
    offline
-   service tokens: if a service does not accept a webinos token
    (personal zone attestation of user identity) then the zone may cache
    tokens (or full authentication credentials) to grant access to
    services (e.g. facebook)

The personal zone (and its satellites) must be able to expose the
functionality, implied by this data, through consistent apis.

webinos - browser[¶](#webinos-browser)
--------------------------------------

A webinos browser is any web runtime capable of executing webinos code.

In reality this means,

-   can unpack a webinos package (based on w3c widgets)
-   can execute javascript
-   must support a minimal set of webinos core requirements and APIs (to
    be defined)

A webinos browser can make use of webinos services.

webinos - service[¶](#webinos-service)
--------------------------------------

A webinos service is a set of functionality (JavaScript methods, events
and properties), that can be invoked locally or remotely.

A webinos service is identified by a unique URI. This URI denotes the
identity and description of the functionality, not the implementation.

From this URI it is possible to discover a precise description of the
interface (methods and properties exposed)

- this could be webidl itself - or could be xml - or could be a json
translation of the same?

This is called the "webinos service definition"

webinos service invocation[¶](#webinos-service-invocation)
----------------------------------------------------------

A webinos service can be invoked locally or remotely.

A local invocation of a webinos service, is calling a local API

A remote invocation of a webinos service makes use of some form of RPC
schema, perhaps JSON RPC.

The RPC call may be carried over the public internet, the private
internet, or even streamed over a direct hardware connection that does
not support IP (e.g. USB, Bluetooth)

A remote invocation (and perhaps also local invocation) must occur in
the context of a webinos session.

webinos session[¶](#webinos-session)
------------------------------------

A webinos session exists between any 2 or more browsers or services that
are connected.

A session will need some authentication. This should be mutual, and
follow best practices, e.g. avoiding users having to create or type
passwords that are then sent over the network, leading to opportunities
for phishing and dictionary attacks.

A webinos session should be established between trusted entities and
declare full and information about connecting parties, e.g.

-   identity of authenticated user
-   identity of the authenticating party
-   type of hardware device connecting (+ information about device
    discoverable via apis)
-   instance of device connecting (e.g IMEI, MAC address)
-   type of runtime connecting (e.g. browser)
-   instance of runtime connecting (e.g. license number(
-   type of application connecting (eg. widget identifier)
-   instance of application connecting (e.g. named instance)
-   type of connection made over (e.g. blutooth)
-   instance of connection ( e.g. bandwidth)

### webinos pseudonymous sessions[¶](#webinos-pseudonymous-sessions)

It is not always necessary to know someone's full identity before
granting access to services. It may be sufficient to see evidence of
membership of some group, or possession of some other properties, e.g.
older than some age, or a given nationality, etc. In such circumstances,
authentication involves providing proof of attestation of such
properties by a trusted entity.

A special case is that of visitors, where someone is granted access in
the context of a visit. This could be implicit, as in the case where you
tell someone your WiFi SSID and WPA pass phrase. That person's devices
will be able to authenticate to the zones associated with the trusted
network as an anonymous guest. If your guest is already part of your
social graph, then his/her device will be able to authenticate as a
specific friend. The means for achieving this raises some interesting
challenges for privacy. For instance, the device could signal the URI
for its personal zone so that the home can then search for that identity
in the home's social graph. However, before disclosing the URI, the
device may want to check the privacy policy for the home that is
expressed in a standard vocabulary (see [Dave's paper on P3P in
JSON](http://www.w3.org/2010/09/raggett-fresh-take-on-p3p/)).

### Mutual authentication[¶](#Mutual-authentication)

When entering into a session, a device should be able to authenticate
the zone, and the zone to authenticate the device. This is based upon a
previous mutual exchange of security tokens when establishing the trust
relationship.

webinos service hosts[¶](#webinos-service-hosts)
------------------------------------------------

A webinos service host will declare itself as hosting one or more
webinos services.

These services will be discoverable by some standard webinos utility
functions. Although, as whit all things webinos, this will be subject to
successful session creation and policy enforcement.

A webinos service host is capable of receiving an Webinos RPC request
(e.g. processing JSON RPC or similar)

There are different flavours of webinos service hosts

-   A traditional web server: on the public internet, and all capability
    is served over http/https
-   A local web server: as above but available on local address - e.g.
    127.0.0.1
-   Other "servers": as above either local or remote, but may receive
    incoming as raw socket, XMPP or similar
-   A webinos application - it is possible that a web application - or
    widget - could host a webinos service
-   A local API - a local API or NPAPI implemented API, should also
    present itself as a webinos service - the difference being that it
    will only allow apps hosted from its local browser to connect.
-   Packaged code: it is possible that packaged javascript (e.g. a
    Javascript library), could present its external interfaces as
    webinos services - bringing with it certain security benefits.
-   A native application (such as an Android application) could present
    itself as a webinos service
-   other ...?

webinos service clients[¶](#webinos-service-clients)
----------------------------------------------------

There are three flavours of a webinos service client

-   a full webinos browser
-   a traditional web browser (it will lack the out of the box packaging
    and authentication that comes with a webinos client) - but there may
    be JavaScript libraries that can be developed to streamline the
    distinction
-   a native client - one that is not executing JavaScript. Again native
    libraries may be developed that make the connection to webinos
    services easier.

webinos authentication[¶](#webinos-authentication)
--------------------------------------------------

There are several entities to consider in the full cycle of webinos
authentication

-   user
-   device
-   web runtime
-   application
-   personal zone hub
-   service (remote)

The level of trust between these different entities, determines the
simplicity of the authentication process.

