PZH Deployment[¶](#PZH-Deployment)
==================================

-   [PZH Deployment](#PZH-Deployment)
    -   [Introduction](#Introduction)
    -   [Deployment Options](#Deployment-Options)
        -   [Monolithic PZH Provider](#Monolithic-PZH-Provider)
        -   [Virtualised PZH](#Virtualised-PZH)
        -   [Microkernel-style PZH](#Microkernel-style-PZH)
    -   [Current Implementation of PZH](#Current-Implementation-of-PZH)
        -   [Monolithic PZH provider](#Monolithic-PZH-provider)
            -   [Monolithic PZH provider
                initialization](#Monolithic-PZH-provider-initialization)
            -   [PZH Creation](#PZH-Creation)
            -   [PZP Enrolment](#PZP-Enrolment)
            -   [PZP Revoke](#PZP-Revoke)
            -   [PZH - PZH connection](#PZH-PZH-connection)
    -   [Deployment Diagram](#Deployment-Diagram)
    -   [Various component interaction in
        PZH](#Various-component-interaction-in-PZH)
        -   [Session Manager](#Session-Manager)
        -   [Certificate Manager](#Certificate-Manager)
        -   [Synchronisation](#Synchronisation)
        -   [Messaging & Routing](#Messaging-38-Routing)
        -   [Policy Manager](#Policy-Manager)

Introduction[¶](#Introduction)
------------------------------

A PZH in webinos is an entity that is always addressable over public IP
network. Typical services it provides are certificate signing,
synchronising, policy enforcement, and establish connections between
different devices and other Personal Zones. In this section we cover
about the PZH deployment options, current implementation details,
deployment details of PZH and PZH component diagram.

Deployment Options[¶](#Deployment-Options)
------------------------------------------

There are several implementation options for the PZH, many of which have
different profiles with respect to security and privacy. In this section
we will outline some of the options for those designing the architecture
of a particular PZH or PZH provider.

### Monolithic PZH Provider[¶](#Monolithic-PZH-Provider)

The approach taken in the webinos implementation is to create a single
process - a PZH Provider - which creates multiple conceptual PZHs. The
provider component contains capabilities for:

-   TLS server for PZP and external PZH connections
-   Routing
-   Certificate management - issuing, revoking certificates, enrol
    devices
-   Policy enforcement
-   Synchronisation of core files (policy, certificates)

Further features can be provided by cloud based PZP's, which are the
same as normal PZP's but are hosted as online services rather than on
physical end-user devices. The aim of such PZP's are to provide services
such as context database.

### Virtualised PZH[¶](#Virtualised-PZH)

Another approach to PZH deployment is the creation of a single piece of
server software offering just one PZH. This platform can then run as a
virtual machine, with one virtual machine per person. In this model,
each PZH is a self-contained system with its own copy of the common
functionality provided by the webinos runtime. This style allows the PZH
to be easily provisioned, since copies of pre-configured PZHs can easily
be maintained and instantiated when needed. Furthermore, migration
features provided in a virtualised environment would enable users to
easily switch between PZH providers.

This style offers two approaches for enriching the functionality
provided by the PZH: paired VMs and VM patching. In a paired VM
approach, new services are deployed as virtual machines, similar to the
way the PZH is deployed. The service VMs are then paired with the PZH
instance to ensure that the two can work together in a secure manner. In
the VM patching approach, new services are added to the PZH by either
patching the PZH instance or installing new software on the PZH VM. The
former can be considered a "virtualised microkernel approach" and the
latter a "virtualised monolithic approach"

### Microkernel-style PZH[¶](#Microkernel-style-PZH)

The final approach is the definition of a PZH as a set of distributed
communicating services based around a single "kernel", analogous to a
microkernel operating system. In this model, the PZH core entity has the
following features:

-   TLS server for PZP and external PZH connections
-   Routing
-   Policy enforcement
-   Synchronisation of core files (policy, certificates)

Other services can be provided by entirely independent service providers

-   Certificate management - issuing, revoking certificates, enrolling
    devices

This can effectively be offered by another "virtual" PZP or a similar
service. The advantage to this approach is that this service can be more
securely implemented. This service might also be contained within one
device owned by the end user, rather than an online service.

-   Synchronised application storage

This can be implemented on a separate file store and be made accessible
to the PZH when necessary.

-   Context storage

This can be implemented on a separate file store and provide
message-level encryption for incoming context data.

Current Implementation of PZH[¶](#Current-Implementation-of-PZH)
----------------------------------------------------------------

The [current PZH
implementation](https://github.com/habibvirji/Webinos-Platform/tree/v0.6.0)
is based on a monolithic PZH provider approach. In the implementation
cycle, the first implementation was a Virtualised Monolithic PZH but was
later updated to run as Monolithic PZH provider. This section does not
mandate implementing PZH as a monolithic PZH but shows implementation
details of the current implementation.

### Monolithic PZH provider[¶](#Monolithic-PZH-provider)

A Monolithic PZH provider includes multiple PZH's in one process. The
reason for this implementation was each PZH requires its own port. This
leads to the problem of a PZP knowing on which port PZH is running
currently. Dedicating a complete virtual machine is not required as a
single instance of the PZH does not have a high traffic load and does
not perform server side request handling for APIs. The Monolithic PZH
provider approach allows multiple PZH's each capable of running in their
own context and using separate certificates to run at one IP address and
port.

The Monolithic PZH provider is the actual TLS server which forwards
request to the PZH instance when any request comes. It does not perform
any activity of its own. The current service hosted at pzh.webinos.org
is running as a Monolithic PZH.

Each PZH connection is differentiated based on the servername, the URI
of the PZH, which the PZP sends in its TLS connection request. If the
TLS connection has the proper certificate corresponding to the provided
servername then the connection is accepted or else the connection is
rejected. It mandates that the PZP knows its PZH address, otherwise a
connection is not possible.

In order for each PZH to run with its own certificate, SNI (Server Name
Indication) mechanism is used. SNI enables each PZH to have a separate
certificate but run on the same IP number and port number. This allows
Monolithic PZH to host multiple PZHs but each running with its own
certificate.

The Monolithic PZH is also responsible for initializing a web server.
The web server provides users to login via OpenId credentials. After
successful login, the web server loads the respective PZH Administration
page for the PZH owner. The web server differentiates PZH's based on the
authentication information provided by the OpenId provider. For example:
If user A authenticates via OpenId provider example.org, after
authentication <a@example.org> is the identity of PZH used by web server
to load PZH administration for the PZH owner.

#### Monolithic PZH provider initialization[¶](#Monolithic-PZH-provider-initialization)

The Monolithic PZH provider should be running in the cloud or on a
publicly accessible IP address. Information about the PZH providers
should be provided as REST service on a trusted source. The PZP before
enrollment connects to the trusted source to fetch a white list of the
available PZH provider hostnames. A hostname is resolved to the
correspondingIP address before connecting. The publicly accessible IP
address if used for PZH provider, there is no mechanism to fetch this
information. It is assumed the user who does not use white listed PZH
provider know about the PZH provider IP address.

The Monolithic PZH provider initialization involves creating a
connection, master certificate, and private key. This master certificate
should be signed by a trusted authority. These certificates are loaded
for initializing the TLS server. The TLS server runs at port 80 and
address "0.0.0.0".

Once the Monolithic PZH provider is up and running, it loads all
existing enrolled PZH's. Then it initializes a web server with the
certificates signed from the trusted authority. The web server
certificate is tied with the provider address such as example.org. Once
certificates are made available then it is started at address "0.0.0.0"
and run at 443 port.

![](pzh_farm_initialization.png)\
Figure 1: The PZH provider certificate generation and web server
initialization

#### PZH Creation[¶](#PZH-Creation)

The Monolithic PZH provider functionality is broken into functionality
provided through the web server and functionality provided by a TLS
server. The enrolment task for PZH and PZP are handled in the web
server.

The PZH can be created via the PZH provider's web server. The user can
login to their choice of the OpenId provider, once authenticated if
certificates are not present they are created. These certificates are
then added in the SNI context of the PZH provider running. In case
certificates are already present, they are already loaded in the SNI
context and do not need to be reloaded. If PZH provider has to be
restarted it loads PZH certificate in SNI context.

The PZP connecting at PZH provider are differentiated based on the
servername. The Servername should match with the name used in the SNI
context.

![](pzh_authentication_creation.png)\
Figure 2: Authentication creation

#### PZP Enrolment[¶](#PZP-Enrolment)

The enrolment mechanism allows the PZP to become part of the personal
zone. The end results of the enrollment are a set of certificates that
the PZP gets from the PZH. These certificates allows the PZP to connect
with the PZH TLS server and communicate with other personal zone PZP's.

The enrollment mechanism is done through the PZH provider web server.
The user initializes a PZP which has not been enrolled in any personal
zone. It enables option of the "Connect to PZH", this triggers fetching
a white list of the PZH provider. The user can select the PZH provider
or enter an hostname or IP address where the PZH provider is hosted. The
login page is fetched from the user's selected PZH provider web server.
This login page should provide user with options to select an OpenId
provider. The user is authenticated through the selected OpenId
provider. The OpenId provider redirects to the PZH provider web server
if successfully authenticated. The OpenId provider also provides
information about the user such as name, country and email id. This
information is then used to formulate identity for the PZH.

The PZH provider web server then redirects back to the PZP from where
request originated along with information whether the PZH exists, the
PZH identity based on the information provided by OpenId provider, and
the authentication token. The PZP on receiving of authentication
response gets the user consent about enrolment of the PZP. If the user
consents to create the PZP at the mentioned PZH, the PZP sends the CSR
(certificate sign request) and authentication token to the PZH provider
web server.

The PZH provider forwards to request to the PZH. The PZH validates the
authentication token, if it matches a signed certificate is generated.
The PZH provider is agnostic to the enrolment process; it just forwards
all received requests to the respective PZH. All communication with the
PZH provider is based on the details fetched through OpenId provider.

![](pzp_enroll.png)\
Figure 3: PZP Enrolment in PZH

#### PZP Revoke[¶](#PZP-Revoke)

The user can revoke the PZP that it does not want to be part of the
personal zone. The PZP revoke can be done from the PZH Admin page. This
functionality is handled in the PZH provider web server.

The user can select the option for revoking device through the PZH
administration page. Revoke device will present list of the PZP that are
enrolled in the personal zone. The user can select the PZP they want to
revoke, on selection the PZP identity is sent to the PZH. The PZH then
using certificate manager generates a new CRL. The CRL contains
information about the PZP certificate signature details that has been
revoked. Generated CRL is then synchronised across personal zones using
the PZH TLS Server.

The PZP that has been revoked cannot connect to PZH, the personal zone
PZP's and the trusted other zone's PZH. The PZP revoke could also
involve remote wipe of details. If revoked PZP connects to PZH, it gets
certificate revoked event and remote wipe event. On receipt of this
event, the PZP deletes all the personal data.

![](pzp_revoke.png)\
Figure 4: PZP Revoke

#### PZH - PZH connection[¶](#PZH-PZH-connection)

A PZH to PZH connection involves the PZH authenticating each other and
exchanging certificates. The connecting process is initiated via user
using PZH web server. To find another PZH, web finger along with other
user email id can be used or else if user knows the PZH url they can
enter directly.

The PZH URL includes information about the PZH provider. The PZH
provider details are resolved and request for the certificate exchange
is requested for a particular PZH is requested. Details about the
authentication steps are covered in
[PKI](/wp3-3/wiki/Personal_Zone_Key_Infrastructure).

The PZH authentication is a binary process involving both parties to
validate each other. Once they agree, the respective master certificates
of the PZH's are exchanged. On completion of certificate exchange, PZH
that initiated request connects to another PZH TLS server. Since both
ends have proper master certificates to validate connection certificate,
connection is accepted.

The PZHs synchronises certificates across the PZP's. These allow the
PZPs to communicate with other zone devices when the PZH is not
reachable.

![](pzh_pzh_connection.png)\
Figure 5: PZH to PZH connection

Deployment Diagram[¶](#Deployment-Diagram)
------------------------------------------

![](pzh_deployment_v2.png)\
Figure 6: PZH deployment

Various component interaction in PZH[¶](#Various-component-interaction-in-PZH)
------------------------------------------------------------------------------

In the above sections, the PZH functionality implemented in the PZH
provider was presented. In this section we cover the component
interaction in the PZH which provides the overall webinos PZH
functionality.

![](pzh_components.png)\
Figure 7: PZH Component Diagram

### Session Manager[¶](#Session-Manager)

The Session manager initializes the PZH Provider, PZH, The Messaging
Manager, and The Policy Manager. The main entities of session manager
are the TLS server and the web server. The server performs different set
of functionality respectively and was covered in previous section in
more detail.

The Session Manager does device authentication using certificate
manager. Certificate manager is responsible to generate and verify for
the session manager. Session manager interaction with the certificate
manager is during device enrolment and device connection.

The Session Manager is responsible for loading configuration details for
PZH when it starts. It stores PZH details for persistent purpose and
uses the information during connection and during import and export.

Physical storage of configuration detail differs on different platforms.
To support multiple different platforms, The Session Manager creates the
webinosRoot at the following locations:

  ---------- ------------------------------
  Platform   Path
  Linux      \$HOME/.webinos
  Windows    <span>appdata</span>/webinos
  MAC OS     \$HOME/.webinos
  Android    /External\_Storage/.webinos
  ---------- ------------------------------

Inside webinosRoot, for each PZH it creates a directory based on user
name. Inside this folder it creates below listed file and directories.
The structure is important as based on this structure synchronisation is
performed.

  ----------------------------- --------------------------------------------------------------------------------
  Path                          Content
  /pzh.json                     This file contains information about PZH.
  /devicelist.json              This file contains the list of known devices and users
  /crl.pem                      This file contains the certificate revocation list
  /policies/                    This folder contains all XACML policy files
  /policies/manifest/           This folder contains application manifest file
  /policies/exception/          This folder contains exceptions that should not be synchronised across devices
  /certificates/external/       This folder contains certificate files referring to other users' PZHs and PZPs
  /certificates/internal/pzp/   This folder contains certificate files referring to the user's own PZPs
  /certificates/internal/pzh/   This folder contains certificate files referring to the user's own PZH
  /userdata/                    This folder contains any other user profile data and preferences
  ----------------------------- --------------------------------------------------------------------------------

The Synchronisation Manager is invoked by the Session Manager when PZP
or PZH connects. The Synchronisation Manager scans above directories and
if there are any differences send updates to PZP.

The Messaging Manager is initialized along with session manager. The
Messaging Manager is needed for routing packets inside the personal zone
and for communicating with service discovery manager. In order to work
along with the messaging manager, register message is exchanged with
information about the session identity.

The Service Discovery Manager is supported at PZH to hold service
information for various PZP's and connected PZH. The PZP when it
connects sends list of registered services. All this information is hold
in service discovery manager. The PZP searching for service queries PZH
to get list of current services available.

The Policy Manager works along with the Session Manager to allow or deny
connection request or a service request.

The Session Manager is implemented purely in JavaScript and uses several
nodejs modules.

### Certificate Manager[¶](#Certificate-Manager)

The Certificate manager generates set of certificates and key. Various
certificate and keys generated are:

1.  PZH master key: A master private key of PZH, this key should be
    protected and not exchanged outside PZH.
2.  PZH master CA certificate: This is the PZH master certificate and
    contains public key. This certificate is exchanged across personal
    zone. In PZH deployment, this certificate should be signed by a
    trusted authority.
3.  PZH connection key: The connection key is associated with the
    connection certificate; this is a private key and should be properly
    protected.
4.  PZH connection certificate: PZH uses these certificate for TLS
    server, these certificate are signed using PZH master key and master
    CA certificate.
5.  PZH web server certificate: PZH web server certificate are not
    generated for each PZH but instead they are generated only for the
    PZH provider. This certificate should be signed by trusted authority
    and is associated with provider address.
6.  PZP certificate: PZP enrolling at PZH are signed using PZH master CA
    certificate and master key.

Other functionality it providers includes checking of certificate
signature to validate if the certificate is from the trusted source.
This is performed when PZP tries to connect PZH.

The Certificate manager is implemented in native code C++ using OpenSSL
library.

### Synchronisation[¶](#Synchronisation)

The Synchronisation Manager works in tandem with session manager. When a
PZP or PZH connect to the personal zone, it synchronises contents of the
directories presented in session manager section.

The main items to synchronise are certificates and policy files. The
items selected are based on policy files and user preferences.

During first time connect of PZP, all available information is sent from
PZH to PZP. In subsequent connections, it uses the rsync algorithm to
synchronise only changed sections.

The synchronisation implementation is in JavaScript and is based on the
rsync algorithm.

### Messaging & Routing[¶](#Messaging-38-Routing)

The Messaging Manager supports functionality for routing, support for
event API and service discovery API. The Messaging Manager allows
storing and forwarding of messages inside the personal zone and to the
devices outside personal zone.

Messaging relies on the Session Manager for two endpoints to be
connected. Endpoints once connect register with the Messaging Manager
with their identity. This identity is used by messaging to route
packets.

It supports communication with two APIs:

1.  Event API: Event API supports PZPs to subscribe for events across
    personal zone at PZH. PZH then publishes event information across
    devices as they are available.
2.  Service Discovery API: Services hosted on PZP are updated at PZH to
    enable them being searchable across personal zone. Messaging
    interacts with the service discovery manager to allow PZPs to
    register service and allow other PZP's to search those services.

### Policy Manager[¶](#Policy-Manager)

The Policy Manager is a policy enforcer in PZH. It provides three types
of action: one time allows, defaults allow, and default deny. Depending
on the policies, a particular action can be performed in the policy
manager.

It works along with the Session Manager to decide whether to accept
connection from the particular source. Session manager relies on policy
manager in particular for connection outside personal zone. For example:
if user A has been allowed to access device A but not device B. This
kind of restriction can be done via policy manager.

The Policy Manager works along with messaging manager to handle service
invocation request. The services are checked if they are available and
if they can be accessed by the request originator.

