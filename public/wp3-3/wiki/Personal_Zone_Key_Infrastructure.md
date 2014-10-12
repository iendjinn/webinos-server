Personal Zone Key Infrastructure[¶](#Personal-Zone-Key-Infrastructure)
======================================================================

-   [Personal Zone Key
    Infrastructure](#Personal-Zone-Key-Infrastructure)
    -   [Abstract](#Abstract)
    -   [Terminology](#Terminology)
    -   [Certificate hierarchy
        overview](#Certificate-hierarchy-overview)
        -   [PZH keys and certificates](#PZH-keys-and-certificates)
        -   [PZP keys and certificates](#PZP-keys-and-certificates)
        -   [Example 1: a personal zone with one user identity and two
            PZPs](#Example-1-a-personal-zone-with-one-user-identity-and-two-PZPs)
        -   [Example 2: a personal zone with two identities and two
            PZPs, but with PZH host using its own TLS and web server
            certificates](#Example-2-a-personal-zone-with-two-identities-and-two-PZPs-but-with-PZH-host-using-its-own-TLS-and-web-server-certificates)
    -   [Key specifications](#Key-specifications)
    -   [Certificate exchange](#Certificate-exchange)
        -   [Peer-to-peer](#Peer-to-peer)
        -   [PZP to PZH](#PZP-to-PZH)
            -   [Certificate exchange through OpenId
                authentication](#Certificate-exchange-through-OpenId-authentication)
            -   [Certificate exchange over
                email](#Certificate-exchange-over-email)
    -   [Key Storage Interface](#Key-Storage-Interface)
    -   [Key backup and recovery](#Key-backup-and-recovery)

Abstract[¶](#Abstract)
----------------------

This specification document describes the use, management and
distribution of keys and certificates within a personal zone. Keys and
certificates are used to create secure connections between devices and
are the way in which personal zones are created.

Terminology[¶](#Terminology)
----------------------------

The following extracts from the Glossary will be useful for readers of
this section:

  Term    Definition
  ------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  CA      Certificate Authority. An infrastructure that issues certificates signed by or chained to a root certificate owned by the organization operating the CA infrastructure. CA-operating organizations typically own multiple root certificates, and apply various certification practices, e.g. level of business or domain validation required for issuing certificates signed by a particular root certificate. [Source: WAC]
  CRL     Certificate Revocation List. "A CRL is a time stamped list identifying revoked certificates which is signed by a CA or CRL issuer and made freely available in a public repository". [Source: [RFC 3280](http://www.ietf.org/rfc/rfc3280.txt)]
  TLS     "the Transport Layer Security (TLS) protocol... provides communications privacy over the Internet. The protocol allows client/server applications to communicate in a way that is designed to prevent eavesdropping, tampering, or message forgery." [Source: [RFC 2246](http://www.ietf.org/rfc/rfc2246.txt)]
  SHCBK   Symmetrised Hash Commitment Before Knowledge (SHCBK) protocol. This protocol is designed to bootstrap security between a group of people in the absence of a public key infrastructure. It allows people to establish a secure, authenticated channel through comparing a short digest. More details can be found on the paper [Authentication protocols based on low-bandwidth unspoofable channels: a comparative survey](http://www.cs.ox.ac.uk/files/2857/Compara.pdf) by Long Nguyen and Bill Roscoe.

Certificate hierarchy overview[¶](#Certificate-hierarchy-overview)
------------------------------------------------------------------

The personal zone hub (PZH) is the certificate authority for a personal
zone. The PZH issues a certificate for itself as well as certificates
for all proxies in the zone. In particular for the PZH "master" CA
certificates and associated public/private keys are created, as well as
a *PZH TLS server/client certificate*, (the PZH, in [X509
terminology](http://tools.ietf.org/html/rfc5280#section-4.2.1.12), may
act both as client and server). The latter and the certificates for the
proxies in the zone are used to create mutually-authenticated TLS
sessions. The PZH also has a web interface which uses a separate
certificate. The CA certificate is self-signed by the service provider
who owns the infrastructure the PZH is running on. If a user has a
reliable home internet connection, then the PZH can optionally be hosted
by a home router or server. In this case, either the CA certificate
would be self-signed or signed by the manufacturer.

Each PZP also has a master CA certificate which it uses to create
several other keys. This certificate is signed by the PZH when the PZP
is enrolled. The CA key then issues a TLS client key for the PZP to
create connections to the PZH, as well as encryption keys and keys for
the widget renderer to communicate with the PZP.

### PZH keys and certificates[¶](#PZH-keys-and-certificates)

The PZH will have multiple CA certificates and keys. Each CA certificate
may correspond to an OpenID identity. E.g., Alice Smith who is hosting
her PZH at hubprovider.com might have the following PZH CA certificates:

  ------------------- ---------- --------------------------------------- --------------------------------
  OpenID              Key        Certificate common name                 Certificate email address
  <alice@foo.com>     CA Key 1   Pzh:hubprovider.com:<alice@foo.com>     <alice@foo.com>
  <a.smith@bar.com>   CA Key 2   Pzh:hubprovider.com:<a.smith@bar.com>   <a.smith@bar.com>
  [none]              CA Key 3   Pzh:hubprovider.com:[random string]     [randomstring]@hubprovider.com
  ------------------- ---------- --------------------------------------- --------------------------------

The PZH will have other several keys and certificates, in the following
categories:

  ------------------ --------------------------------------------------------------------------------- ------------------------------------------------------------
  Key                Use                                                                               Certificate
  TLS (client) key   Client key for outgoing connections to other PZHs                                 Signed by one of the PZH CA keys
  TLS (server) key   The TLS server key used to accept incoming connections from other PZHs and PZPs   Either signed by a CA key or by a generic PZH provider key
  Web server key     Running the PZH Web Server                                                        Either signed by a CA key or by a generic PZH provider key
  CRL key            Signing CRLs for the revocation of PZPs                                           Signed by one of the PZH CA keys
  ------------------ --------------------------------------------------------------------------------- ------------------------------------------------------------

Every key with a certificate issued by a PZH CA must be duplicated for
each CA key that exists.

### PZP keys and certificates[¶](#PZP-keys-and-certificates)

Each PZP will have the following keys and certificates:

  ------------------------ ------------------------------------------------------------------- -------------------------------------------------------------------------
  Key                      Use                                                                 Certificate
  PZP CA key               Creating certificates for other keys. Root identity for this key.   Signed by one of the PZH CA keys. Common name = Pzp:[user id]:[pzpname]
  PZP TLS client key       Client key for connecting to the PZH and other PZPs                 Signed by one of the PZP CA keys (any, default: first)
  PZP encryption key       Key that may be used to decrypt incoming data                       Signed by one of the PZP CA keys (any, default: first)
  PZP WebSocket key        Key used as a server to the WebSocket connection from the browser   Signed by one of the PZP CA keys (any, default: first)
  PZP Browser client key   Key used to identify the browser to the WebSocket connection.       Signed by one of the PZP CA keys (any, default: first)
  ------------------------ ------------------------------------------------------------------- -------------------------------------------------------------------------

For each PZH CA key and certificate, there ought to be a new PZP CA
*certificate* at the very least. It can be argued that there would need
to be multiple keys, too.

For true unlinkability each PZP key certificate ought to be replicated
for each PZH CA certificate and user identity. However, these are only
used when either (a) connecting to the PZH, where pseudonymity and
unlinkability are not important, or (b) when connecting to another PZP
locally, peer-to-peer. We make the assumption that local peer-to-peer
connections do not have the same pseudonymity and unlinkability
requirements in the general case. This aspect of the specification can
be changed if this is found to not be the case.

### Example 1: a personal zone with one user identity and two PZPs[¶](#Example-1-a-personal-zone-with-one-user-identity-and-two-PZPs)

This diagram does not show the multiplicity of keys or certificates for
different identities.

![](http://dev.webinos.org/redmine/attachments/download/2256)

### Example 2: a personal zone with two identities and two PZPs, but with PZH host using its own TLS and web server certificates[¶](#Example-2-a-personal-zone-with-two-identities-and-two-PZPs-but-with-PZH-host-using-its-own-TLS-and-web-server-certificates)

![](http://dev.webinos.org/redmine/attachments/download/2260)

Key specifications[¶](#Key-specifications)
------------------------------------------

  ----------- ----------- ----------- ----------- ----------- -----------
  Artefact    Type        Created by  Constraints Held by     Details

  PZH CA key  private key PZH         2048+ bits  PZH         Master CA
                                                              signing key
                                                              for signing
                                                              new
                                                              certificate
                                                              s
                                                              for PZPs.
                                                              One of the
                                                              root keys
                                                              for the
                                                              zone

  PZH CA key  X509        PZH/PZH                 PZH,PZPs,ex Signed by
  certificate certificate provider                ternals     the PZH
                                                              provider or
                                                              self
                                                              signed. CN
                                                              =
                                                              "Pzh:[provi
                                                              der]:[user
                                                              identity]"

  PZH TLS     private key PZH         2048+ bits  PZH         PZH TLS
  (client)                                                    Client key
  key                                                         for
                                                              outgoing
                                                              TLS
                                                              connections
                                                              to other
                                                              PZHs. May
                                                              be combined
                                                              with the
                                                              server key

  PZH TLS     X509        PZH                     PZH         Signed by
  (client)    certificate                                     the PZH CA
  certificate                                                 key. CN =
                                                              the domain
                                                              name of
                                                              this PZH +
                                                              user id +
                                                              'client'

  PZH TLS     private key PZH         2048+ bits  PZH         The TLS
  (server)                                                    server key
  key                                                         used to
                                                              accept
                                                              incoming
                                                              connections
                                                              from other
                                                              PZHs and
                                                              PZPs. If a
                                                              generic TLS
                                                              host key is
                                                              used
                                                              instead,
                                                              this is
                                                              unnecessary
                                                              .

  PZH TLS     X509        PZH                     PZH,PZPs,ex Signed by
  (server)    certificate                         ternals     the PZH CA
  certificate                                                 key. CN =
                                                              the domain
                                                              name of
                                                              this PZH +
                                                              user id +
                                                              'server'

  PZH Web     private key PZH         2048+ bits  PZH         The HTTPS
  server key                                                  web server
                                                              key used to
                                                              host the
                                                              PZH web
                                                              server
                                                              interface.
                                                              If a
                                                              generic PZH
                                                              host web
                                                              server key
                                                              is used
                                                              instead,
                                                              this is
                                                              unnecessary
                                                              .

  PZH Web     X509        PZH                     PZH,PZPs,ex Signed by
  server      certificate                         ternals     the PZH CA
  certificate                                                 key or a
                                                              trusted
                                                              root
                                                              authority
                                                              such as
                                                              Verisign.
                                                              CN = the
                                                              domain name
                                                              of this PZH

  PZH CRL key private key PZH         2048+ bits  PZH         Signing
                                                              CRLs for
                                                              the
                                                              revocation
                                                              of PZPs

  PZH CRL key X509        PZH                     PZH,PZPs,ex Signed by
  certificate certificate                         ternals     the PZH CA
                                                              key. CN =
                                                              PZH + user
                                                              id + 'crl'

  PZP CA key  private key PZP         2048+ bits  PZP         Used to
                                                              create
                                                              certificate
                                                              s
                                                              for other
                                                              keys. One
                                                              of the root
                                                              identities
                                                              for this
                                                              device

  PZP CA key  X509        PZH                     PZH,PZPs,ex Multiple
  certificate certificate                         ternals     certificate
                                                              s,
                                                              one per
                                                              user
                                                              identity,
                                                              each signed
                                                              by a PZH
                                                              master CA.

  PZP TLS     private key PZP         2048+ bits  PZP         Client key
  client key                                                  for
                                                              connecting
                                                              to the PZH
                                                              and other
                                                              PZPs

  PZP TLS     X509        PZP                     PZH,PZPs,ex Multiple
  client key  certificate                         ternals     certificate
  certificate                                                 s,
                                                              one per
                                                              user
                                                              identity,
                                                              each signed
                                                              by a PZH
                                                              master CA.

  PZP         private key PZP         2048+ bits  PZP         Encryption
  encryption                                                  key used
  key                                                         for
                                                              message-lev
                                                              el
                                                              encryption
                                                              (to be
                                                              defined)

  PZP         X509        PZP                     PZH,PZPs,ex Signed by
  encryption  certificate                         ternals     the PZP CA
  key                                                         key
  certificate                                                 

  PZP         private key PZP         2048+ bits  PZP         Key used as
  WebSocket                                                   a server to
  key                                                         the
                                                              WebSocket
                                                              connection
                                                              from the
                                                              browser

  PZP         X509        PZP                     Browser/WRT Signed by
  WebSocket   certificate                         only        the PZP CA
  key                                                         key (any)
  certificate                                                 

  PZP Browser private key PZP         2048+ bits  PZP         Key used to
  client key                                                  identify
                                                              the browser
                                                              to the
                                                              WebSocket
                                                              connection.

  PZP Browser X509        PZP                     PZP, PZH    Signed by
  key         certificate                                     the PZP CA
  certificate                                                 key (any)

  PZH Host    private key PZH Host    2048+ bits  PZH Host    The TLS
  Generic TLS                                                 server key
  key                                                         used to
                                                              accept
                                                              incoming
                                                              connections
                                                              from any
                                                              PZHs and
                                                              PZPs
                                                              connecting
                                                              to any PZHs
                                                              hosted by
                                                              this PZH
                                                              hosting
                                                              provider

  PZH Host    X509        PZH Host                PZH Host    Signed by
  Generic TLS certificate                                     any entity
  key cert.                                                   the PZH
                                                              Host wants
                                                              it to be.
                                                              Not
                                                              necessarily
                                                              any.

  PZH Host    private key PZH Host    Unspecified PZH Host    The web
  Web HTTPS                                                   server key
  key                                                         used to
                                                              host PZH
                                                              web
                                                              interfaces
                                                              at this
                                                              hosting
                                                              provider

  PZH Host    X509        Web signing             PZH Host    Signed by a
  Web HTTPS   certificate authority                           public
  key cert.                                                   trusted CA,
                                                              such as
                                                              verisign

  PZP         token       PZH         single-use, New PZP,    A short
  enrolment                           3 byte,     PZH         token
  code                                expires                 issued by
                                      quickly,                the PZH to
                                      human-reada             authenticat
                                      ble                     e
                                                              a new
                                                              device.
                                                              Only used
                                                              once and
                                                              must be
                                                              used within
                                                              a short
                                                              timespan of
                                                              the token
                                                              being
                                                              issued.
  ----------- ----------- ----------- ----------- ----------- -----------

Certificate exchange[¶](#Certificate-exchange)
----------------------------------------------

PZH CA certificates must be exchanged when two devices in different
personal zones communicate for the first time. The following two
scenarios describe how certificate exchange occurs when users are in
proximity (e.g. connecting over the same WiFi) or when users are
connecting remotely over the internet.

### Peer-to-peer[¶](#Peer-to-peer)

Exchanging certificates between two users who are in physical proximity
is the device pairing problem. We intend to do the same using the SHCBK
key agreement protocol (see
[here](http://www.cs.ox.ac.uk/bill.roscoe/publications/120.pdf) ) with
either a *word-matching and number-typing* or *repeated numeric
comparison* scheme for code comparison (see
[this](http://dl.acm.org/citation.cfm?id=2175905) for more detail).

Details of the implementation of this certificate exchange protocol can
be found in the links above. The following diagram shows how it fits
into the peer-to-peer connection scenario:

![](pzp-localpeers.png)\
([bigger](http://dev.webinos.org/redmine/attachments/download/2503))

### PZP to PZH[¶](#PZP-to-PZH)

We imagine a scenario where Alice wants to access one of Bob's device
APIs over the internet, but neither of them have connected to each other
before. We assume that Alice and Bob know each other's email or social
network identity, but are not in physical proximity.

Certificate exchange differs from enrolment in that PZHs are always
peers of each other, and the performing certificate exchange does not
imply a trusted relationship. Successful exchange of certificates *does*
imply that each PZH trusts that the other belongs to the person that
they expect. For instance, Alice and Bob's PZHs exchanging certificates
only implies that Alice believes she has the correct PZH certificate for
Bob and that Bob believes he has the correct certificate for Alice. No
policy settings are changed nor information given away - the PZHs are
not granted any additional access to each other's personal zones.

There are several ways that webinos certificate exchange can be
implemented, all of which provide guarantees that mutual authentication
is achieved.

#### Certificate exchange through OpenId authentication[¶](#Certificate-exchange-through-OpenId-authentication)

1.  The first step is discovery. Alice either already knows Bob's
    personal zone hub URL (he may have shared it through email or his
    address book entry) or she uses an identifier for Bob (such as his
    email address) to discover it.
2.  Alice visits Bob's PZH URL (pzh.example.com/bob/request-access ) and
    requests access to his resources.
3.  This prompts Alice to 'log in' via OpenID. Bob's PZH therefore gains
    verified knowledge of Alice's email address.
4.  Bob's PZH redirects to Alice's PZH (
    pzh.webinos.org/alice/send-details ) sending Bob's details to it,
    along with a short token.
5.  Alice's PZH sends a signed request to Bob's PZH containing her CA
    certificate and the token from Bob. Bob's certificate is
    automatically added to her zone's list of known users.
6.  Bob's PZH checks the token and then prompts Bob that Alice (with a
    certain email address) wants to access his personal zone. Bob then
    decides whether he knows and trusts Alice or not.

Because Alice had discovered Bob based on an already-known identity or
URL, we assume that no further identity assertion from Bob is required.

Tokens are not re-used and this process only occurs when two users
communicate for the first time, peer-to-peer and online certificate
exchange is not possible.

A state chart for this process can be found below:

![](pzh-cert-exchange.png)\
([bigger](http://dev.webinos.org/redmine/attachments/download/2505))

#### Certificate exchange over email[¶](#Certificate-exchange-over-email)

1.  Alice types Bob's email address into her PZH.
2.  Alice's PZH discovers Bob's PZH address and downloads his
    certificate, adding it to her store of 'known users'
3.  Alice's PZH sends Bob an email from Alice's email account (or the
    PZH provider's email account) containing a link to Alice's PZH and
    telling Bob that she would like to access his resources
4.  Bob clicks on the link
5.  This goes to Alice's PZH which redirects to **Bob's** PZH, complete
    with her CA certificate and PZH details
6.  Bob approves the addition of these details to the list of 'known
    users' in his personal zone.

This method relies upon the security of the email addresses used, and
the authenticity of email headers, neither of which can necessarily be
guaranteed. As such, this method should only be used in circumstances
where both of these factors do hold, such as when PZH providers are well
known authorities and also issue email addresses for users.

Key Storage Interface[¶](#Key-Storage-Interface)
------------------------------------------------

Confidential key storage is a required feature of any OS running a
webinos PZP. More details about the specific implementations of key
storage can be found in the [PZP Deployment](.html) informative
specification documents.

All private keys described above that are held by a PZP must be stored
in a secure key storage facility. Such a facility must make sure that
the key is accessible only to the PZP and not any other application. The
best implementation of key storage would also protect the key from being
copied off the hard drive, and might even be implemented using secure
hardware such as a Trusted Platform Module or secure element. The key
storage facility MAY require users to enter a password or have logged in
using their normal account credentials. However, this is left as an
option depending on platform.

The following code example shows the interface that has been implemented
in webinos for storing and retrieving keys.

    1  ks.put(secretKey,secret);
    2  var secret = ks.get(secretKey);
    3  ks.delete(secretKey)

Key backup and recovery[¶](#Key-backup-and-recovery)
----------------------------------------------------

The personal zone system does not require an explicit recovery system.
The OpenID provider will manage loss of passwords or user credentials.
For PZPs, in the instance that a key is compromised or lost the device
can be revoked and then re-added.

