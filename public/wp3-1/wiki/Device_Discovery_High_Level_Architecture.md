Device Discovery High Level Architecture[¶](#Device-Discovery-High-Level-Architecture)
======================================================================================

**THIS DOCUMENT IS WORK IN PROGRESS**

The goal of the high level architecture presented here is to enable
discussion on design decisions regarding device discovery (and possibly
broader).

Throughout the text, important issues that should be addressed are
indicated like so:

  ------------------ ------------------------- -------------------------------------------
  ![](Discuss.png)   **Discussion required**   To be or not to be, what is the question?
  ------------------ ------------------------- -------------------------------------------

Note that everything in this document is subject to change and in no way
represents some final view. It also should not be regarded as a design,
but merely a sequence of issues that need be addressed in the near
future.

Approach[¶](#Approach)
----------------------

A somewhat complete picture of device discovery is painted here based on
a number of scenario's using a number of different actors and devices.
Read on!

Assumptions[¶](#Assumptions)
----------------------------

-   Installing webinos on a device (the process of securely retrieving,
    installing and configuring the runtime) is a separate issue. In
    other words: only after initial setup a device is considered
    discoverable
-   Service discovery and device discovery are branches on the same
    tree. Nevertheless only the latter is addressed here.
-   All webinos devices have a runtime installed that is capable of
    connecting to the webinos cloud (which - in this context - is an
    abstract central administration thingy).
-   All users have a unique ID (which is not to be confused with their
    name)
-   All devices with a webinos runtime have a unique ID (which is not to
    be confused with their name)
-   Applications are web only, and not delivered by webinos but use
    webinos through JavaScript APIs

  ------------------ ------------------------- ----------------------------------------------------------
  ![](Discuss.png)   **Discussion required**   Are these assumptions accurate? Spurious? Any omissions?
  ------------------ ------------------------- ----------------------------------------------------------

Comments on the Assumptions by Sven:

-   Assumption 1: Agreed. We from the User Identity sub-topic group will
    have to see how users and devices will obtain their IDs and how
    joining users and devices to webinos should work. As always, we are
    open for suggestions!
-   Assumption 3: I'm afraid there is a double assignment of the term
    *webinos cloud* in the project. It is also used to summarise all the
    devices which belong to the same user and which are interconnected.
    I believe it is better to use anther term. **It is necessary to
    flesh out ASAP what this central entity actually means/does.** We'll
    need that to further refine our work. I was hoping that Discovery
    and/or the Overlay Network will be capable of discovering the
    central online entity of webinos once there is Internet access for a
    device. What is the purpose of this online entity from your
    perspective? The User Identity group has planned to have a registrar
    and an Identity Provider as online entities which cover various
    features. Please see our [User Identity and Data Management
    Discussion
    page](User%20Identity%20and%20Data%20Management%20Discussion%20page.html)
    for details.
-   Assumptions 4 and 5: what is the difference between ID and name? A
    name can also be an ID.
-   Assumption 6: this is also my understanding.

Comments on the comments on the Assumptions by Sven by Victor :-) :

-   Ad 3) true, webinos cloud means a lot. Personally I see the
    federation of webinos servers as the webinos cloud. E.g. if we
    decide to go with XMPP the webinos cloud would be the collection of
    all federated XMPP servers on the world that are running the webinos
    plugin.
-   Ad 4 and 5) An ID is an identifier, a computer-usable name. A name
    is a human-readable name. I can imagine that devices have both, in
    which case we would need to support aliases (a user would only
    bother giving names to devices/services/apps that they can actually
    see and that have some importance to them). The important confusion
    to avoid is that between names and addresses though.

Overview[¶](#Overview)
----------------------

### Actors[¶](#Actors)

The following actors play a role in our device discovery scenario's:

![](DeviceDiscoveryActors.png)

  -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------
  User                 a person with a legal relationship with a webinos service provider that has installed or is about to install the webinos runtime on at least one device
  Family Member        a person that shares a household with a webinos user
  Friend w/ Webinos    a person with whom a webinos user has a special trust relationship with and has a webinos account of himself
  Friend wo/ Webinos   a person with whom a webinos user has a special trust relationship with and does NOT have a webinos account
  -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------

Note that the purpose of the family member is **to model everyone with
whom a webinos user has some kind of relation that may disturb a clean
modeling of webinos and webinos devices**. For example, a family member
may be co-owner and co-user of a PVR.

  ------------------ ------------------------- ------------------------------------------------------------------------------------------
  ![](Discuss.png)   **Discussion required**   Do we need all of the actors above or stick to users only, or users and friends, or ...?
  ------------------ ------------------------- ------------------------------------------------------------------------------------------

Comments on the Actors by Sven:

-   I believe the Family Member is strongly required. There is
    interaction with this person in many ways which we have to model:
    -   Family Member also uses the device while not being a webinos
        user (as described in the discussion here).
    -   Family Member is a webinos user like the User and they both use
        the PVR. There is an issue of identification and authentication.
-   Family members typically have unlimited rights to use and access the
    devices in the household whereas friends or others may only have
    temporary access.
-   I believe we need to distinguish three cases. They have implications
    on identification, authentication and discovery.
    -   Case 1: a device is just used by one user = owner (e.g.
        smartphone)
    -   Case 2: a device is used by multiple equal users (e.g. PVR)
    -   Case 3: some functionality of a device is (temporarily) used by
        another person (e.g. media gallery on the smartphone by a
        friend).

Comments on these comments by Victor:

-   Good points. The current formulated family member is specifically
    *not* a webinos user though. With actors it is best to not mix them
    up.
-   So the question becomes (see also your case 2): should webinos
    support co-owned devices natively, or should we model a different
    user?
-   cases 1 and 3 should be supported by webinos, no question about
    that!

### Devices[¶](#Devices)

The actors above use and/or own a couple of devices:

![](DeviceDiscoveryActorsWithDevices.png)

First of all we see a regular webinos user, who has two devices: a
smartphone and an in-car PC. The latter offers navigation, media, has
support for camera's (front and/or back) etc. They are both fully
webinos enabled and connect to the webinos cloud.

The family member of the regular webinos user is here to create havoc,
as explained above. He (or she) uses the PVR, that has webinos
installed. The installed webinos runtime connects to the cloud, but the
family member is not a webinos user.

The webinos user has two friends; one who also has a webinos account,
and another one that doesn't.

Of course the actors may own and use other devices as well but these are
not depicted here and neither are part of the scenario's below.

In addition, there exist devices that are not part of webinos but that
can be used by webinos users and - policies allowing - others. These are
reachable over LANs (e.g. WiFi) and PANs (Personal Area Networks, e.g.
Bluetooth) and hence require a webinos device with compatible
communication skills to proxy for them, like so:

![](DeviceDiscoveryDevices.png)

Three user devices of which only the UPnP Thermostat has no sense of
webinos. Still, it can be used by the smartphone through webinos.

### Modeling Users and Devices[¶](#Modeling-Users-and-Devices)

Users and Devices are not the same. Still, it is difficult to model
these in a reality-aware manner. Sometimes, e.g. with smartphones, the
device and the user of that device *are* considered the same; 'your'
phone number, etc. In situations like these often the user perspective
is that they are the same while the technical perspective leaves the
user unmodeled.

When modeling users and devices as separate, usability may be at stake.
For example, how could you make a distinction between users when you are
behind a television? Have each user login?

For webinos, we should at a technical level assume that users and
devices are different, but allow a default owner (or take some other
technical measure) so as to cater for situations where users in reality
assume equalness.

  ------------------ ------------------------- ----------------------------
  ![](Discuss.png)   **Discussion required**   What is your view on this?
  ------------------ ------------------------- ----------------------------

Comments on Identification by Sven:

-   I fully agree: users and devices are different. If you have a
    communication application (e.g. IM) you need to address the user.
    Thus the user needs to be reachable via a certain device or multiple
    devices. This is why we intend to have the registrar. I believe it
    depends on the use case whether it suffice to only identify the
    owner, to identify all the users of a device and to identify the
    device.
-   Please have a look at our [Questions from User Identity and User
    Data Mgmt to Discovery forum
    entry](http://dev.webinos.org/redmine/boards/7/topics/20), as we are
    discussing similar questions.

Scenarios[¶](#Scenarios)
------------------------

### Terminology and Scope[¶](#Terminology-and-Scope)

Device discovery includes:

-   **existence** - is a device part (directly or by proxy) of the
    webinos realm? (Usually consequence of being registered.)
-   **connectivity** - is it reachable, and if so against what costs?
-   **availability** - is it not being used by someone else?

Of course the question of device **capabilities** (what can I do with
it?) is important as well but is to be addressed as part of service
discovery.

### Overview[¶](#Overview)

In the remainder of this section, the following scenario's are
addressed:

Regarding **existence**:

-   Installing Webinos runtime
-   Registering with webinos cloud
-   Running an application on a webinos-enabled device
-   Using a thermostat in the home network while being somewhere else

Regarding **connectivity**:

-   Recovering from a lost connection
-   Trusting another user while being offline

Regarding **availability**:

-   Programming the PVR while someone else is using it

  ------------------ ------------------------- ------------------------------------
  ![](Discuss.png)   **Discussion required**   Are there scenario's missing here?
  ------------------ ------------------------- ------------------------------------

### SCENARIO - Installing Webinos runtime[¶](#SCENARIO-Installing-Webinos-runtime)

Installing webinos is a three step process:

1.  securely fetch an instance of the webinos runtime installer, e.g.
    through use of a secured app store, or through a direct download.
2.  run the downloaded installer and approve requested priviledges
3.  enter personal info

As a result, the system will generate and distribute all required public
and private keys for the device. If it is a first time install,
additional questions may be posed by the installed, e.g. regarding
default policies to use, e-mail address etc. Also, additional
public/private keys may be generated for other purposes.

The installation process may very well require a live data connection
and use email for verification purposes.

Note that designing the installation process is not part of this
section, but is given here for illustrative purposes only.

### SCENARIO - Registering with webinos cloud[¶](#SCENARIO-Registering-with-webinos-cloud)

When data connectivity is available, the process of registering looks
like this:

![](DeviceDiscoveryRegister.png)

The register command as issued by the user may be implicit, e.g. as a
result of installing the webinos runtime while giving it permissions to
load at device boot.

Peer notification is not made explicit, but can be considered an
asynchronous activity initiated by a register command and performed by
the webinos cloud.

Sometimes, a connection with the webinos cloud may not be available, or
only through great expenses (e.g. while roaming). The scenario would
then unfold like so:

![](DeviceDiscoveryRegisterLocally.png)

Processing the registration activity is thus delegated to a local
module. A system capable of that could look like so:

![](DeviceDiscoveryPolicyManagement.png)

Part of the policy is probably enforced on the device. A remote policy
manager uses a live data connection with the webinos cloud to
negoriate/agree/etc on some other parts, and to retrieve updated
certificates etc. When a data connection is not available, a local
policy manager enforces what is usually done by the cloud, based on
synchronised policies and keys. It can be imagined that some sort of
'freshness' applies to the cached trust information.

### SCENARIO - Running an application on a webinos-enabled device[¶](#SCENARIO-Running-an-application-on-a-webinos-enabled-device)

An application has to 'discover' webinos for itself too. Assumed is that
webinos offers no apps; these come from the greater web:

![](DeviceDiscoveryWebApp.png)

Note that the 'register' block indicates that at that point in time
registration of all applicable devices occurs.

The fetched page in this example could have contained the following
snippet:

     1   <head>
     2     <script language="JavaScript">
     3 
     4         // show all devices on page.
     5         // param array with devices
     6         function showDevices(a) {
     7           // code here
     8         }
     9 
    10         if ("Webinos" in window) {
    11             showDevices( this.webinos.owner.devices );
    12         }
    13     </script>
    14   . . .

The application running on the webinos-enabled browser discovers the
existence of webinos much like it would discover the existence of html5
websockets.

The current device list may be available on the device itself (e.g.
because it has a fast connection all changes may be instantly pushed,
and it knows that) or it may delegate this request to the webinos cloud.
The figure above assumes the first.

### SCENARIO - Using a thermostat in the home network while being somewhere else[¶](#SCENARIO-Using-a-thermostat-in-the-home-network-while-being-somewhere-else)

In the home network, webinos devices may try to discover other
(non-webinos) devices. For example, a PVR might use UPnP discovery like
so:

![](DeviceDiscoveryDiscoverLocal.png)

Firstly, it broadcasts a M-SEARCH message over the network indicating
that it is searching for other UPnP devices. Then, the UPnP thermostat
responds with a NOTIFY, indicating its address and capabilities. Not in
this picture is querying the thermostat device on capabilities,
temperature etc. Secondly, the PVR updates its local device list to the
webinos cloud.

In case a user wants to know the temperature at home, it can do a query
using his smartphone like so:

![](DeviceDiscoveryRemoteThermostat.png)

As we saw earlier, the UPnP thermostat - which includes a temperature
sensor - is found on the local network. The users' smartphone has to
discover it, and in this example the browser on it loads a page with a
suitable app (or from cache, not depicted here) which contains
javascript:

     1   <head>
     2     <script language="JavaScript">
     3         function showTemperature(a) {
     4           // code here
     5         }
     6 
     7         if ("Webinos" in window) {
     8             a = this.webinos.owner.devicesByCapability["QueryTemperature"]; // get all devices that can give temperature reading
     9             b = this.webinos.owner.devicesByLocation[""];                   // get all devices in the home
    10             c = a.union(b);                                                    // calculate all devices that have both
    11             showTemperature( c[0].queryTemp() );                            // use first available device
    12         }
    13     </script>
    14   . . .

Now the correct device has been found, and queryTemp() has been issued
on it. Back to the sequence diagram above: the browser has javascript
which is executed by the webinos runtime which forwards the message over
XMPP to the webinos cloud (the XMPP server) which on its turn forwards
it to the PVR inthe home. Finally, the UPnP proxy in it translates the
message, sends it over the home network, gets the response and sends
that back. Note that the XMPP messaging is specifically designed for
webinos.

### SCENARIO - Programming the PVR while someone is using it[¶](#SCENARIO-Programming-the-PVR-while-someone-is-using-it)

### SCENARIO - Recovering from a lost connection[¶](#SCENARIO-Recovering-from-a-lost-connection)

### SCENARIO - Trusting another user while being offline[¶](#SCENARIO-Trusting-another-user-while-being-offline)

Previous stuff, copy when needed to correct location[¶](#Previous-stuff-copy-when-needed-to-correct-location)
-------------------------------------------------------------------------------------------------------------

We introduce only the standard actors, underneath technology can be
changed as per the requirements. For example, IP address is one of the
actor, what technology it uses underneath is independent such as DHCP,
mDNS or AutoIP.

Most of the device discovery packet exchange mechanism is traditionally
multicast. Each device is responsible for updating about its discovery.

Actors involved[¶](#Actors-involved)
------------------------------------

User

Browser (Based on MIME type, browser initialize and load webinos
extension). This mechanism can change and is a just a general reference
to how browser handles extension.

Discovery Process: Main process that handles the decision unit, local
broker and remote broker.

Decision Unit:

-   It will be primary unit to perform close proximity, physical
    proximity, and social proximity.
-   Decide local broker or remote broker. Depending on the proximity
    decision

Local Broker

-   ZeroConf
-   UPnP

Remote Broker

-   XMPP
-   SIP
-   Web Introducer

IP address Resolver

-   AutoIP
-   mDNS

Device ID and User ID

-   SIP Registrar
-   XMPP Registrar
-   Local device connectivity authentication??

Connection Manager

Web Introducer

-   Provider

### High Level Architecture[¶](#High-Level-Architecture)

The below diagram covers only device already registered, it does not
include first time registered device.

![](DD_HighLevelArch.jpg)

### Decision Unit[¶](#Decision-Unit)

Criteria for checking proximity

-   Device located locally or remotely\
    After IP address is obtained following steps will be performed
-   Network Criteria
    -   Device Description - Device type, name, unique id, URL to
        address the device
    -   Networking Technology - Wireless, wired, paid services
    -   Addressing route - maximum number of hops
-   Proximity
    -   Close/Physical proximity: Distance between discovered device and
        current device location. In case of fixed device it could be
        through the number of hops it requires while in WiFi it could be
        device connected under same AP.
    -   Physical location: GeoLocation API to find current location of
        the device. If offline, the last location could be used.
    -   Social proximity: Depends on how context data is available.
-   User
    -   User ID
    -   Device owned by particular UserID
    -   Find other devices based on UserID
-   Policies
    -   Security

### Local Discovery[¶](#Local-Discovery)

Local Discovery involves (Based on UPnP/ could be added with information
as required by ZeroConf)

IP address resolution

-   Could be done using IP AUTO or mDNS resolve mechanism
-   ZeroConf scenario of performing the IP address check

Device Discovery

-   Requires type
-   Need device id /user id. Mapping between user id and device id.
-   URL for describing services.
-   SSPD or DNS query can be used,

Description

-   Each root device description
-   Each embedded device in root device description
-   Each service provided by each embedded device and variable that
    describes state.
-   Each IP enabled interface should provide its description and service
    it provides .

### Remote Discovery[¶](#Remote-Discovery)

1.  Resolve device located remotely
    -   Depending on user id/device id and authentication with the
    -   Resolve with XMPP server about the location of device.
    -   Establish communication with device running using user ID
    -   Fetch information about device type, device id, service URL.

2.  Fetch description of the service URL based on the device.
3.  Event and control mechanism using XMPP protocol.

### Connection Manager[¶](#Connection-Manager)

Connect to the device and able to access device. This unit could be
responsible for loading driver, use application layer protocol to
communicate with device or use UPnP service description.

