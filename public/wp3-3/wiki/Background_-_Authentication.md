Background - Authentication[¶](#Background-Authentication)
==========================================================

Introduction[¶](#Introduction)
------------------------------

User authenticity is the property granting that the user who wishes to
access the system is whom he declared to be.\
Verifying the user identity is often the first step for granting other
security properties, like authorization (what the user can do) and
access control (what resources the user can access).

The webinos framework aims to grant authentication property in a
user-friendly fashion, hiding to the user and to the application
developer, most of the more complicated aspects of the authentication
mechanisms.

Scope[¶](#Scope)
----------------

### What's in scope[¶](#Whats-in-scope)

Authentication topic involves:

-   Authentication to the personal zone (user authentication with the
    personal zone hub).
-   Authentication outside the personal zone (user authentication with
    the service provider). Preliminary analysis of problems and possible
    solutions, more analysis is deferred to phase 2
-   Personal zone identity data management (where the user credentials
    are stored, how are used, how are synchronized with personal zone
    proxies).

### What's out of scope[¶](#Whats-out-of-scope)

Anonymous authentication methods (e.g. group signature, direct anonymous
attestation, Idemix) and identity based encryption methods are deferred
to phase 2.

Review of State of the Art[¶](#Review-of-State-of-the-Art)
----------------------------------------------------------

### OpenID[¶](#OpenID)

OpenID is a user centric, decentralized authentication protocol using
web technologies allowing single sign on. An OpenID provider can do the
authentication of a user for some service and the service does not have
to store identity or credential information.

OpenID uses standard HTTP (S) requests and responses. Protocol
extensions exist for example for attribute exchange. The identifier used
is either a HTTP (S) URI or an XRI (Extensible Resource Identifier)

### OAuth[¶](#OAuth)

It allows a resource owner to grant a client access without giving away
its credentials for the resource. OAuth uses web technology (HTTP (S))
to give fine grained access.\
The client requests authorization from the resource owner. The
authorization request can be made directly to the resource owner, or
preferably indirectly via an intermediary such as an authorization
server.\
The client receives an authorization grant and requests an access token
by authenticating with the authorization server using its client
credentials and presenting the authorization grant. If the client
credentials and the authorization grant are valid, the authentication
server issues an access token.\
The client requests the protected resource from the resource server and
authenticates by presenting the access token.\
If the access token is valid, the resource server provides access to the
resource.

### WebID - Web Identification and Discovery[¶](#WebID-Web-Identification-and-Discovery)

[WebID](WebID.html) is an early draft by W3C which intends to define how
to perform user authentication on the Web using X.509 certificates, TLS
and URIs. The user agent (UA) is associated to the user by a URI. Both
endpoints use TLS to exchange their X.509 certificates for
authentication. At the moment, it is not clear if WebID will evolve to a
standard, but if so, it would be quite interesting for webinos as WebID
relies on widely used technologies.

### Liberty Alliance / Kantara[¶](#Liberty-Alliance-Kantara)

Liberty alliance is a consortium for developing a distributed identity
management system. It includes an Identity Federation Framework (ID-FF),
an Identity Web Service Framework (ID-WSF) and Identity Services
Interface Specifications (ID-SIS). ID-FF enables identity federation and
management and it is designed to work with heterogeneous platforms and
with all types of network devices; ID-WSF provides a framework for
creating, discovering, and consuming interoperable identity services;
ID-SIS are a collection of specifications for interoperable services to
be build on top of ID-WSF.\
The work of the Liberty Alliance is transitioning to the Kantara
Initiative.

The Alliance adopts and extends industry standards, rather than attempt
to develop similar specifications.\
ID-FF Liberty architecture needs an Identity Provider (IdP) and uses
HTTP protocol to exchange messages between IdP and Service Provider to
authenticate the User Agent.\
ID-WSF is a foundational layer that utilizes the ID-FF and provides
services. The Discovery Service determines where the needed resources
are located (e.g. user attributes). The Interaction Service allows an
IdP to interact with the owner of the resource that it is exposing. The
Data Services supports the storage and update of specific data
attributes regarding a user.\
ID-SIS provides specifications for interoperable services (e.g.
Geo-location Service, Personal Profile Service Specification, Employee
Profile Service Specification, Contact Book Service Specification).

### Shibboleth / SAML[¶](#Shibboleth-SAML)

It's an open source implementation of SAML 2.0 specifications. It
provides an authentication and authorization infrastructure to allow
federated web single sign on and attribute exchange. A user
authenticates with his organizational credentials. The organization (or
identity provider) passes the minimal identity information necessary to
the service manager to enable an authorization decision.

SAML 2.0 is an XML-based open standard for exchanging authentication and
authorization data between an identity provider and a service provider.
Its specifications recommend SSL 3.0 or TLS 1.0 for transport-level
security; XML Signature and XML Encryption for message-level security.
SAML 2.0 permits direct use of XML Encryption in various places,
including an \<EncryptedID\> element that can replace the usual
\<NameID\> element.\
SAML 2.0 allows for arbitrary mappings between any two formats by using
the \<NameIDPolicy\> element to describe the properties of the
identifier to be returned.

### Kerberos[¶](#Kerberos)

Kerberos is a mutual client/server authentication system designed to
establish sessions and support the secure transfer of data. Kerberos can
be used as a single sign on mechanism.

It requires a trusted third party and uses tickets and ticket granting
tickets to allow it to scale to multiple services without repeated user
authentication. Kerberos does not require the use of asymmetric
cryptography and uses time stamps for validity periods.

### Identity mechanism of XMPP[¶](#Identity-mechanism-of-XMPP)

XMPP is an XML based protocol for near-real-time messaging, presence and
request-response services using for confidential and integral message
exchange TLS.

The XMPP identifier (e.g. node@domain/resource) has as mandatory field
only the domain identifier and is used to address an endpoint. To
authenticate an endpoint SASL is used enabling a server to offer
multiple authentication methods from which a client can choose.

### Identity Metasystem[¶](#Identity-Metasystem)

"The Identity Metasystem is an interoperable architecture for digital
identity that enables people to have and employ a collection of digital
identities based on multiple underlying technologies, implementations,
and providers."

Three different parties participate in the Metasystem:

-   **Identity Providers**, which issue digital identities.
-   **Relying Parties**, which require identities.
-   **Subjects**, which are the individuals and other entities about
    whom claims are made.

Five key areas compose the Identity Metasystem:

-   Identity representation using the data elements carried in
    Information Cards (called claims). Claims are carried in security
    tokens in the same way adopted per web service security (called
    WS\_Security, an extension to SOAP to apply security to web
    services).

<!-- -->

-   A negotiation process among identity providers, relying parties, and
    subjects. Negotiation occurs using WS-SecurityPolicy (an extension
    of WS-Security) statements exchanged using WS-MetadataExchange (a
    Web Services protocol specification). Identity Metasystem is
    flexible enough to carry various format of token and different kinds
    of claims needed for a digital identity interaction

<!-- -->

-   An encapsulating protocol to obtain claims and requirements. The
    WS-Trust (an extension of WS-Security) and WS-Federation (an
    Identity Federation specification) protocols are used to carry
    requests for security tokens and responses containing those tokens.

<!-- -->

-   A means to bridge technology and organizational boundaries using
    claims transformation. Security Token Services (STSs) as defined in
    WS-Trust (an extension of WS-Security) are used to transform claim
    contents and formats.

<!-- -->

-   A consistent user experience across multiple contexts, technologies,
    and operators. This is achieved via Identity Selector client
    software such as Windows CardSpace representing digital identities
    owned by users as visual Information Cards.

### Firefox account manager[¶](#Firefox-account-manager)

The Account Manager allows users to create new accounts with optional
randomly generated passwords, and log into and out of them with a click.

The Account Manager specification proposes two changes to Web sites:

1.  The browser needs to know how to register, sign in, and sign out. A
    static JSON document describes what methods the site supports and
    how they should be executed.
2.  The browser needs a way to check which user (if any) is currently
    signed in. To do this the site has to set an HTTP header or to
    supply a URL the browser will ping.

Recommendations from state of the art[¶](#Recommendations-from-state-of-the-art)
--------------------------------------------------------------------------------

SAML 2.0 standard could be useful to exchange authentication data
outside the personal zone, to log into external services. It can also be
used to login to the personal zone (to be more precise to login to the
personal zone hub) and to synchronize authentication data among the
personal zone hub and the personal zone proxies.\
An account manager similar to the Firefox one could be hosted on the
personal zone hub (with a copy into the personal zone proxies) to
implement a more user-friendly authentication mechanism.

References[¶](#References)
--------------------------

### OpenID[¶](#OpenID)

Open standard for authenticating users, Home page, <http://openid.net/>

### OAuth[¶](#OAuth)

Open protocol to allow secure API authorization, Home page,
<http://oauth.net/>

### Liberty[¶](#Liberty)

Liberty Alliance - consortium for developing a distributed identity
management system, Home page, <http://www.projectliberty.org/>

### Kantara[¶](#Kantara)

Initiative to help ensure secure, identity-based, online interactions,
Home page, <http://kantarainitiative.org/>

### SAML[¶](#SAML)

Security Assertion Markup Language standard suite v2.0, Home page,
<http://www.oasis-open.org/standards#samlv2.0>

### Shibboleth[¶](#Shibboleth)

Standards based, open source software package for web single sign-on,
Home page, <http://shibboleth.internet2.edu/>

### Kerberos[¶](#Kerberos)

The Kerberos Network Authentication Protocol, home page,
<http://web.mit.edu/kerberos/>

### XMPP[¶](#XMPP)

Extensible Messaging and Presence Protocol, Request for Comment 3920,
<http://tools.ietf.org/html/rfc3920>

### SASL[¶](#SASL)

Simple Authentication and Security Layer, Request for Comment 4422,
<http://tools.ietf.org/html/rfc4422>

### IdMetasystem[¶](#IdMetasystem)

Information Card wikipage,
<http://en.wikipedia.org/wiki/Information_Card>

### FirefoxAM[¶](#FirefoxAM)

Firefox Account Manager, Mozilla Hacks article "Account Manager coming
to Firefox",
<http://hacks.mozilla.org/2010/04/account-manager-coming-to-firefox/>

### WebID[¶](#WebID)

WebID - Web Identification and Discovery, W3C Editor's Draft,\
<http://www.w3.org/2005/Incubator/webid/spec/>.

