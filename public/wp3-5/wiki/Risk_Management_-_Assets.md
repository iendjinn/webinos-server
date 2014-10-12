Risk Management - Assets[¶](#Risk-Management-Assets)
====================================================

Asset definitions[¶](#Asset-definitions)
----------------------------------------

Asset

Definition

Link to 2.8 asset

Personal data

Data "owned" by an end user, containing identifiers or information about
the end user's life, lifestyle, interests, activites, etc.

[Personal Calendar
Data](/wp2-8/wiki/Assets#PersonalCalendarData)
,
[PersonalAugmentedRoutePlannerData](/wp2-8/wiki/Assets#PersonalAugmentedRoutePlannerData)
,
[PersonalWebBrowserData](/wp2-8/wiki/Assets#PersonalWebBrowserData)

Profile data

Email address, nationality, language preferences, age, account history,
etc. *Remark(Polito):What is the **account history**? At first glance
could be a borderline set of data. If it involves command given by the
user, it could involve behavior of the user and fall outside user
profile scope, as described in the user profile
API(<http://dev.webinos.org/specifications/draft/userprofile.html>), and
could fall in Context-related stuff. BTW the user profile so far is not
perfectly defined and has been source of misunderstanding, it could be
worth better define its scope to avoid a source of risk from a privacy
perspective*

[User
Profile](/wp2-8/wiki/Assets#User-Profile)

Social graph

The user's social network - who their friends and contacts are. This is
probably provided through a third party, or through context collection.

Contacts

The user's contact list, containing identifiers and addresses (email,
postal, homepages) for other end users

Payment card details

The user's payment card details - sort code, bank account number, bank
name, CVV

Privacy preferences

The user's privacy preferences

[UserPrivacyPreferences](/wp2-8/wiki/Assets#UserPrivacyPreferences)

Credentials

Any secrets used to authenticate and/or authorise a user with a third
party service provider

Auth Tokens

OAuth tokens, kerberos tickets, Bearer tokens, Cookies containing
session ids

Passwords

Stored passwords for remote websites.

Device keys

X509 certificates and keys identifying the device, certified by a PZH

Biometrics

Information that allows for identification and authentication through
human characteristics, like fingerprint or facial recognition

Devices

*Remark(Polito): Since Hw and Sw components have a set of different
security properties, It could be reasonable to separate device HW and
device OS*

Mobile hardware

Smartphone hardware, including the telephony stack, battery, camera,
etc.

Mobile s/w (android)

The operating system - Android.

[Smartphone
PZP](/wp2-8/wiki/Assets#Smartphone_PersonalZoneProxy)
Remark(Polito): Maybe is worth to leave separate the concept of the PZP
and the underlying operating system. Probably have this distinction
hoghlighted could help to identify possible threats

PC hardware

PC hardware - this includes screens, external devices, processor,
battery, etc.

PC s/w (Windows)

The windows operating system and functionality. Key storage, process
integrity, vulnerabilities may all be relevant

PC s/w (Mac)

The mac operating system and functionality

PC s/w (Ubuntu)

The ubuntu operating system and functionality

In-car hardware

Pandaboards and in-car hardware such as screens and input devices

In-car s/w

Ubuntu IVI?

[Car
PZP](/wp2-8/wiki/Assets#Car_PersonalZoneProxy)

TV hardware

Set-top boxes and the TV itself, plus any remote control

TV s/w

Ubuntu again?

Applications

Widget package (zip)

The zip file containing HTML, JavaScript, CSS, manifests and signatures.
Defined: <http://www.w3.org/TR/widgets/#zip-archive>

[Application](/wp2-8/wiki/Assets#Application)
,
[StartFile](/wp2-8/wiki/Assets#StartFile)

Manifest file

The manifest, defined partially in
<http://www.w3.org/TR/widgets/#configuration-document>

[Config
file](/wp2-8/wiki/Assets#Configuration-File)
, [Widget
Metadata](/wp2-8/wiki/Assets#Widget-Metadata)

Content (scripts, data)

Locally held content, originally from the widget package. May contain
anything.

[Resource](/wp2-8/wiki/Assets#Resource)

Remotely hosted content

Remotely held content, not originally in the widget package. May contain
anything.

Widget signatures

The signatures of an application package, created by the author or an
app store

[Signature](/wp2-8/wiki/Assets#Signature)

Adverts

Remotely loaded adverts - probably images - dynamically updated.
Probably served from other origins

Stored app data (local)

Data that apps store for their own use - e.g. settings, histories,
documents, user data - held on the local device

[PersonalRouteAppData](/wp2-8/wiki/Assets#PersonalRouteApplicationData)

Stored app data (remote)

Data that apps store for their own use - e.g. settings, histories,
documents, user data - held on a remote server

[Synchronised App
Data](/wp2-8/wiki/Assets#SynchronisedAppData)

Runtime instance

A software instance of an application

[App
Instance](/wp2-8/wiki/Assets#Application-Instance)

Network

Mobile data network

The mobile network

Local data network

Local networks, such as Wifi, Bluetooth, Zigbee, etc.

Context

[Context
data](/wp2-8/wiki/Assets#Context-Data)

Current location

The results of the Geolocation API - where the device currently is.

Current sensor data

Any readings of the environment - temperature, light levels,
orientation, etc.

Current app usage

How the application is being used at this point in time. E.g. links
being pressed, APIs being invoked, etc.

History of location

Past history of where the device/user has been, in terms of geolocation
data. Accessed through context APIs.

History of sensor data

Past history of sensor data. Accessed through context APIs.

History of app usage

Past history of application usage. Accessed through context APIs.

Sessions

Authenticated online user/app

A session created between a user and a hosted app. TLS + some login
identity - a username password or OpenID credential. App specific.

PZH-PZH session

The TLS session created between a PZH and PZH, authenticated with X509
certificates. This could come after an out-of-band trust relationship
has been established

[Session](/wp2-8/wiki/Assets#Session)

PZP-PZH session

The TLS session created between a PZP and PZH, authenticated with X509
certificates

[Session](/wp2-8/wiki/Assets#Session)

User-PZH session

The session created between a browser and a PZH, authenticated by an
OpenID credential (user) and certificate (PZH)

User-PZP session

The active OS-level "session" between the user and the device PZP they
are using. May be implicit.

PZH

[PZH](/wp2-8/wiki/Assets#PersonalZoneHub)

Synchronisation service

The service hosted by the PZH for synchronising data. Must send and
receive data from PZPs.

[ZoneSyncService](/wp2-8/wiki/Assets#ZoneSynchronizationService)

Routing and messaging

The open port listening for messages which routes to other devices via a
PEP

[RouteService](/wp2-8/wiki/Assets#RouteService)

Storage

Data stored on the PZH - contains personal, app, synchronised data, and
certificates.

Credentials (device key)

The PZH's device key, used for establishing TLS connections

Signing keys

The PZH's signing key, used for creating new PZP certificates. A master
key.

Revocation lists

The list of revoked PZPs and PZHs, signed by the master key.

Context DB

The database of context information collected by various PZPs.

Policy files

XACML policies used by the PZP at the Policy Decision Point. Created
indirectly by users.

[Security
policy](/wp2-8/wiki/Assets#SecurityPolicy)

Policy system (PEP,PDP,...)

The code and artefacts required to implement the policy enforcement and
decision mechanisms. Mostly native code.

[PAP](/wp2-8/wiki/Assets#Policy-Administration-Point)
,
[PDP](/wp2-8/wiki/Assets#Policy-Decision-Point)
,
[PEP](/wp2-8/wiki/Assets#Policy-Enforcement-Point)
,
[PIP](/wp2-8/wiki/Assets#Policy-Information-Point)

Trust configuration / roots

The set of trusted root certificates and PZH certficates used for
authenticating incoming connections.

Saved preferences

Any saved user preferences about the personal zone.

Web interface

The web interface for interacting with the PZH - viewing devices and
status, revocation, changing settings, adding devices, ...

Enrollment system

The part of the PZH responsible for enrolling new devices in the zone

[Registrar](/wp2-8/wiki/Assets#Registrar)

PZP

[PZP](/wp2-8/wiki/Assets#PersonalZoneProxy)
, [in-car
PZP](/wp2-8/wiki/Assets#Car_PersonalZoneProxy)
, [Smartphone
PZP](/wp2-8/wiki/Assets#Smartphone_PersonalZoneProxy)
,
[WebinosRuntime](/wp2-8/wiki/Assets#WebinosRuntime)
, [WebTV
PZP](/wp2-8/wiki/Assets#WebTV_PersonalZoneProxy)

Web interface

The web interface for interacting with the PZP. Undefined functionality.

Synchronisation service

The components used to synchronise data with the personal zone hub and
other proxies.

Routing and messaging

The component used to route a message from the PZP to either the PZH or,
peer-to-peer to another PZP

APIs

The set of implemented APIs on the PZP which expose a device feature

[Device
API](/wp2-8/wiki/Assets#Device-API)
, [Payment
manager](/wp2-8/wiki/Assets#PaymentManager)
, [Service
Instance](/wp2-8/wiki/Assets#Service-Instance)

Stored data

Locally stored application data and user preferences

[Local data
cache](/wp2-8/wiki/Assets#Local-Data-Cache)

Credentials (device key)

RSA private key held in the keystore of the PZP.

Revocation lists

A copy of any CRLs issued by the PZH for devices. Synchronised with the
hub

[PZDeviceList](/wp2-8/wiki/Assets#PersonalZoneDeviceList)

Policy files

The set of XACML policy files used by the personal zone proxy.
Synchronised with the hub

[Security
policy](/wp2-8/wiki/Assets#SecurityPolicy)

Policy system (PEP,PDP,...)

The components responsible for making policy decisions and enforcing
them at all points in the architecture

[PAP](/wp2-8/wiki/Assets#Policy-Administration-Point)
,
[PDP](/wp2-8/wiki/Assets#Policy-Decision-Point)
,
[PEP](/wp2-8/wiki/Assets#Policy-Enforcement-Point)
,
[PIP](/wp2-8/wiki/Assets#Policy-Information-Point)

Trust configuration / roots

The set of trusted root certificates and the devices already identified
by the PZP (e.g. other PZPs, hubs)

[PZDeviceList](/wp2-8/wiki/Assets#PersonalZoneDeviceList)

Saved preferences

Any saved user preferences about the personal zone and this device in
particular.

PZH Farm

Web interface

An interface for creating new hubs, registering as a user and migrating
the hub

Inter-hub routing

Routing messages between different hubs hosted on the same farm

Identity Provider

The OpenID identity provider used to authenticate the user of the
personal zone. Contacted for accessing web interfaces.

[Identity
Provider](/wp2-8/wiki/Assets#Identity-Provider)

Widget Renderer

The software component on each platform used to display web content from
widgets a web applications. Communicates with the PZP.

[Car
WRT](/wp2-8/wiki/Assets#Car_WRT)
, [Smartphone
WRT](/wp2-8/wiki/Assets#Smartphone_WRT)
,
[WebinosRuntime](/wp2-8/wiki/Assets#WebinosRuntime)
, [WebTV
WRT](/wp2-8/wiki/Assets#WebTV_WRT)

Widget Processor

The software component on each platform used to unpack, install and
deploy widgets.

[Car
WRT](/wp2-8/wiki/Assets#Car_WRT)
,
[Sandbox](/wp2-8/wiki/Assets#Sandbox)

Communications

Event messages

JSON RPC messages incorporating messaging attributes and additional
webinos specific payload data and meta-data.

[Event](/wp2-8/wiki/Assets#Event)

Asset security and privacy values[¶](#Asset-security-and-privacy-values)
------------------------------------------------------------------------

This list of assets is drawn primarily from 2.8, as well as updated
architectural models.

Asset

Security

Privacy

Confidentiality

Integrity

Availability

Accountability

Anonymity

Unobservability

Unlinkability

Pseudonymity

Personal data

H+M+L

Profile data

Social graph

Contacts

Payment card details

Privacy preferences

M

Credentials

Auth Tokens

Passwords

Device keys

Devices

Mobile hardware

Mobile s/w (android)

H

PC hardware

PC s/w (Windows)

H

PC s/w (Mac)

H

PC s/w (Ubuntu)

H

In-car hardware

In-car s/w

H

TV hardware

TV s/w

H

Applications

Widget package (zip)

M

M

M

Manifest file

M

M

Content (scripts, data)

M

Remotely hosted content

Widget signatures

M

Adverts

Stored app data (local)

M

Stored app data (remote)

M

M

L

Runtime instance

M

H+M

Network

Mobile data network

Local data network

Context

L

M

M

Current location

Current sensor data

Current app usage

History of location

History of sensor data

History of app usage

Sessions

Authenticated online user/app

PZP-PZH session

H

M

M

User-PZH session

User-PZP session

PZH

L

H

M

Synchronisation service

M

H

Routing and messaging

H

H

H

L

L

L

Storage

Credentials (device key)

Signing keys

Revocation lists

Context DB

Policy files

M

M

Policy system (PEP,PDP,...)

Trust configuration / roots

Saved preferences

Web interface

Enrollment system

M

L

PZP

L+M

H+M

H

M

Web interface

Synchronisation service

Routing and messaging

APIs

H

H

M

Stored data

Credentials (device key)

Revocation lists

L

M

Policy files

Policy system (PEP,PDP,...)

Trust configuration / roots

Saved preferences

PZH Farm

Web interface

Inter-hub routing

Identity Provider

Widget Renderer

L

H

H

Widget Processor

H

Communications

Event messages

M

M

L

Assets to attack trees[¶](#Assets-to-attack-trees)
--------------------------------------------------

Each asset will appear in various attack trees, either being attacked or
mitigating an attack (or both).

Asset

Attacked In

Mitigates In

Personal data

Profile data

Social graph

Contacts

Payment card details

Privacy preferences

Credentials

Auth Tokens

Passwords

Device keys

Devices

Mobile hardware

Mobile s/w (android)

PC hardware

PC s/w (Windows)

PC s/w (Mac)

PC s/w (Ubuntu)

In-car hardware

In-car s/w

TV hardware

TV s/w

Applications

Widget package (zip)

Manifest file

Content (scripts, data)

Remotely hosted content

Widget signatures

Adverts

Stored app data (local)

Stored app data (remote)

Runtime instance

Network

Mobile data network

Local data network

Context

Current location

Current sensor data

Current app usage

History of location

History of sensor data

History of app usage

Sessions

Authenticated online user/app

PZP-PZH session

User-PZH session

User-PZP session

PZH

Synchronisation service

Routing and messaging

Storage

Credentials (device key)

Signing keys

Revocation lists

Context DB

Policy files

Policy system (PEP,PDP,...)

Trust configuration / roots

Saved preferences

Web interface

Enrollment system

PZP

Web interface

Synchronisation service

Routing and messaging

APIs

Stored data

Credentials (device key)

Revocation lists

Policy files

Policy system (PEP,PDP,...)

Trust configuration / roots

Saved preferences

PZH Farm

Web interface

Inter-hub routing

Identity Provider

Widget Renderer

Widget Processor

Communications

Event messages

Discussions[¶](#Discussions)
----------------------------

Interesting question: Which is worse for availability - losing access to
the hub, or the PZP? If you lose the hub, connectivity is lost on all
devices. But at least you can still use the PZP in virgin mode. However,
losing a PZP (if you don't have another device handy) means no access to
the hub anyway... it depends on the context of the user.

