Security and Privacy Review - July 2013[¶](#Security-and-Privacy-Review-July-2013)
==================================================================================

The information in this review is based on the WP2 requirements and an
analysis of the current state of the platform, as of the July meeting in
Oxford. Full requirements are not shown, for brevity.

-   [Security and Privacy Review - July
    2013](#Security-and-Privacy-Review-July-2013)
    -   [High-level review](#High-level-review)
        -   [Access control](#Access-control)
            -   [Original aim](#Original-aim)
            -   [Current status and plans](#Current-status-and-plans)
        -   [Privacy](#Privacy)
            -   [Original aim](#Original-aim)
            -   [Current status and plans](#Current-status-and-plans)
        -   [App permissions](#App-permissions)
            -   [Original aim](#Original-aim)
            -   [Current status and plans](#Current-status-and-plans)
        -   [Authentication](#Authentication)
            -   [Original aim](#Original-aim)
            -   [Current status and plans](#Current-status-and-plans)
        -   [Integrity](#Integrity)
            -   [Original aim](#Original-aim)
            -   [Current status and plans](#Current-status-and-plans)
        -   [Communication](#Communication)
            -   [Original aim](#Original-aim)
            -   [Current status and plans](#Current-status-and-plans)
        -   [Secure storage](#Secure-storage)
            -   [Original aim](#Original-aim)
            -   [Current status and plans](#Current-status-and-plans)
    -   [Implemented Features](#Implemented-Features)
    -   [Missing Features](#Missing-Features)
    -   [Security Assessment](#Security-Assessment)
    -   [Privacy Assessment](#Privacy-Assessment)

High-level review[¶](#High-level-review)
----------------------------------------

### Access control[¶](#Access-control)

#### Original aim[¶](#Original-aim)

-   Development of an attribute-based policy enforcement mechanism,
    based on BONDI and XACML
-   Access control covering data sharing, APIs and runtime events
-   Policy editing features such as delegation, logging of changes, and
    usable policy editing controls.
-   Synchronisation of policies between devices in a personal zone
-   Policy editing based on user preferences and decisions at runtime

#### Current status and plans[¶](#Current-status-and-plans)

We have implemented:

-   An XACML-like policy framework that supports manufacturer, user and
    application-specific policies
-   Policy enforcement points for webinos services / APIs
-   Initial synchronisation of some policy files
-   A notification framework
-   Tests for the policy manager component
-   A policy editing API
-   A policy editor tool (currently only visualisation)

Missing:

-   Policies with time constraints
-   More flexible policy specifications (E.g., supporting more of XACML)
    to allow policies to be written in different ways (MARK: TODO)
-   Access control logging
-   Delegation support. We have produced a document describing the state
    of delegation for the policy framework
-   Integration tests including the policy editor, editor API,
    enforcement and decision points
-   Policy enforcement within the web runtime, for internet permissions

### Privacy[¶](#Privacy)

#### Original aim[¶](#Original-aim)

Webinos aimed to provide the following privacy features:

-   User-determined anonymity. Some aspects of webinos should not
    disclose the identity of the user.
-   Unlinkability. Two applications or services should not be able to
    link the same user in different independent transactions, beyond
    those mechanisms that are already available on the web.
-   Pseudonymity & multiple identities. Users may have multiple
    pseudonyms rather than distinct identities.
-   Disabled identity broadcast. Users should not broadcast their
    identity by default when connecting in a peer-to-peer manner with
    other devices.

#### Current status and plans[¶](#Current-status-and-plans)

We have implemented some support for a PrimeLife-like privacy policy
system. However, these are neither enforced nor used in the platform.

We have not fully implemented any privacy features, and have no plans to
in the short term.

The webinos architecture provides the potential for another privacy
feature: data ownership and disclosure control. However, this was
largely outside of the original privacy goals, and more of an access
control consideration.

### App permissions[¶](#App-permissions)

#### Original aim[¶](#Original-aim)

-   Applications should be constrained by a least-privilege permission
    system
-   Application permissions should include a rationale, explaining what
    the application intends to use a privilege for.
-   Users should be the ultimate arbiter of application permissions, and
    should be able to allow or deny access to a feature.
-   Applications should be isolated from one-another, and from outside
    influence.

#### Current status and plans[¶](#Current-status-and-plans)

-   Applications are constrained by the policy framework. While not
    connected, some work has been done on translating application
    permissions into policies.
-   Application permissions are not documented adequately at present.
-   Non-packaged applications (e.g., websites) are currently allowed,
    but have no way of specifying permissions or isolating from the
    outside world.
-   The webinos WRT has support for Content Security Policies, which
    help to provide application isolation. However, CSP rules are
    untested and support for specifying them in a manifest is not
    available.
-   We specified a rationale in the webinos app manifest. However, this
    is not shown in any installer at present, nor the policy editor.
-   Users have full control of the policy system.
-   No installer exists to configure permissions at install time, but
    mock-up UIs do exist.
-   Application isolation is broken through the file system API and
    various other services.

### Authentication[¶](#Authentication)

#### Original aim[¶](#Original-aim)

-   Authentication of devices
-   Authentication of developers and applications
-   Authentication of users
-   Re-use of web identities for user authentication
-   A revocation scheme for devices, users and applications
-   Out-of-band authentication for users connecting face-to-face
-   Support for devices which are single- and multi-user

#### Current status and plans[¶](#Current-status-and-plans)

-   Devices are authenticated through a PKI, fully implemented (but not
    audited) already
-   Developers and applications are authenticated through
    distributor/author signatures on widgets. Support for this is
    present in theory, but needs more work and testing, and needs to be
    enabled. Author signatures are not supported. More work could also
    be done to make developers identifiable - e.g., suggestions for WAC
    on 'recognised origins' for applications.
-   Users are identified through their personal zone hub. They log into
    this hub with one set of web credentials (Open ID / Facebook /
    Twitter / Other).
-   Users identify each other through their hubs, and through either a
    log-in or invitation token process. This is not sufficiently secure
    at present, but represents an interesting approach for further
    research and analysis.
-   We have no way of authenticating users locally on their device,
    beyond through key storage and local OS mechanisms.
-   Revocation within a personal zone hub is supported through a
    synchronised CRL.
-   Revocation between personal zones is not supported. This needs more
    work and analysis. OCSP or CRLs would both be valid approaches.
-   Out-of-band authentication is supported through the
    Seeing-is-Believing protocol. However, this is just one approach and
    does not satisfy many use cases.
-   Local authentication (for multi-user devices) is missing but badly
    needed. This makes webinos inapplicable on devices with multiple
    users.

### Integrity[¶](#Integrity)

#### Original aim[¶](#Original-aim)

-   The integrity of applications is maintained at install and runtime
-   The integrity of the device platform is attestable and measurable

#### Current status and plans[¶](#Current-status-and-plans)

-   We have implemented partial support for signatures, which provide
    install and runtime integrity checking of applications. This is not
    compulsory at present, but should be.
-   We do not plan to implement any attestation or integrity protection
    mechanism. This is too hard in a multi-platform system.

### Communication[¶](#Communication)

#### Original aim[¶](#Original-aim)

-   Secure association between devices.
-   Transport security.

#### Current status and plans[¶](#Current-status-and-plans)

-   Secure association is supported either through certificate exchange
    and the PKI, or through the seeing-is-believing protocol. However,
    more association mechanisms are needed for many use cases.
-   Secure association is only possible between people, not necessarily
    between people and service providers.
-   Transport-level security is enforced in most places through
    mutually-authenticated TLS sessions.
-   IOT secure transport is not available.
-   The PKI and TLS configuration should be audited.

### Secure storage[¶](#Secure-storage)

#### Original aim[¶](#Original-aim)

-   All data stored by webinos, users and applications should be held
    securely and protected from outside interference and access.

#### Current status and plans[¶](#Current-status-and-plans)

-   Secure storage is not provided by webinos. We require the underlying
    platform to provide full-disk encryption and OS-level isolation of
    data.

Implemented Features[¶](#Implemented-Features)
----------------------------------------------

The webinos platform has implemented or mostly implemented the following
capabilities:

-   Policy manager
-   PZP policy enforcement
-   PZP policy viewing and (nearly) editing
-   Web authentication at the PZH
-   Web certificate exchange and invitations
-   Seeing-is-believing certificate exchange
-   Personal PKI and certificate authorities
-   Transport security through TLS
-   Content Security Policies
-   Widget signing

Many of these are turned off by default, require more work, or need to
be configured.

Missing Features[¶](#Missing-Features)
--------------------------------------

The following features are largely missing:

-   Application-defined least-privilege permissions
-   Local authentication of users on shared devices
-   Further policy editing controls
-   Authentication for public services (e.g., services where the
    consumer should remain anonymous)
-   Revocation between personal zones
-   Delegation of authority to external security service providers or
    friends/family
-   Multi-owner models for devices
-   Lots of policy features, including date and time-specific policies
-   Policy enforcement and isolation controls in the WRT.

Security Assessment[¶](#Security-Assessment)
--------------------------------------------

The webinos source code has not been audited for security at runtime. It
should therefore be assumed to be vulnerable to attack in many ways.
Indeed, there are vulnerabilities documented in the source code at
present.

Another issue is that many security controls are disabled or configured
to be too permissive. For example, the policy manager default is to
allow all applications and users access to everything. Furthermore,
application signature checking is optional.

Users of webinos take on a much greater risk. Because they are exposing
more services to the web, and to other devices, the impact of a security
issue is magnified enormously. This means that webinos is currently both
insecure AND a liability for users. Disclaimers should be added to state
this on all repositories and installers.

The webinos architecture currently operates with a conceptual security
perimeter, defined by the PKI, where any webinos-enabled device is
capable of accessing others in the same personal zone. This means that
one vulnerabilities compromises the entire personal zone. Mitigations,
including exception policies (see the 3.3 specifications) and having
untrusted devices (not allowed to synchronise changes by default) would
be beneficial.

Privacy Assessment[¶](#Privacy-Assessment)
------------------------------------------

The privacy goals of webinos have largely gone unmet. The following
weaknesses are important to acknowledge:

-   Users can only operate when they are identifiable to services. They
    cannot be anonymous after a PZP has been enrolled with a PZH.
-   The webinos.session API is outside of policy enforcement and
    therefore exposes user information without access control.
-   webinos services are identified with a persistent identity string.
    This means that users are linkable by any applications with access
    to the same services. It also makes users increasingly
    fingerprintable.
-   We only support users with one online identity. This is a weakness,
    as users may wish to identify themselves to others via different
    identities, such as Facebook / LinkedIn / Twitter, and so on.

