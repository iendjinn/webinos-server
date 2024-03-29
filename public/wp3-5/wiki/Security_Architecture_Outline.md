Security Architecture Outline[¶](#Security-Architecture-Outline)
================================================================

-   [Security Architecture Outline](#Security-Architecture-Outline)
    -   [Purpose](#Purpose)
    -   [Key threats and risks in
        webinos](#Key-threats-and-risks-in-webinos)
    -   [Security policy framework](#Security-policy-framework)
        -   [Overview](#Overview)
        -   [Synchronisation](#Synchronisation)
        -   [Key comparison with WAC](#Key-comparison-with-WAC)
        -   [GUIs](#GUIs)
        -   [GUI-less interaction with
            policies](#GUI-less-interaction-with-policies)
    -   [Privacy policy framework](#Privacy-policy-framework)
        -   [Overview](#Overview)
        -   [Requirements](#Requirements)
        -   [GUIs](#GUIs)
    -   [User identity management and
        authentication](#User-identity-management-and-authentication)
        -   [Overview](#Overview)
    -   [Privileged applications](#Privileged-applications)
        -   [Overview](#Overview)
        -   [Details](#Details)
        -   [GUIs](#GUIs)
    -   [Webinos runtime authentication and platform
        integrity](#Webinos-runtime-authentication-and-platform-integrity)
        -   [Platform authentication](#Platform-authentication)
    -   [Protecting the runtime and
        applications](#Protecting-the-runtime-and-applications)
    -   [Web App Threats](#Web-App-Threats)
    -   [Personal zone security](#Personal-zone-security)
        -   [Joining a personal zone for the first
            time](#Joining-a-personal-zone-for-the-first-time)
        -   [Protecting against malicious applications and
            devices](#Protecting-against-malicious-applications-and-devices)
    -   [Protecting application data](#Protecting-application-data)
        -   [Requirements](#Requirements)
        -   [GUIs](#GUIs)
    -   [Default Policies](#Default-Policies)
    -   [Application trust chains](#Application-trust-chains)
        -   [Overview](#Overview)
        -   [Install / first use
            verification](#Install-first-use-verification)
        -   [Remote certificates](#Remote-certificates)
    -   [Change of ownership and change of personal
        zone](#Change-of-ownership-and-change-of-personal-zone)
        -   [Overview](#Overview)
        -   [Additional requirements](#Additional-requirements)
        -   [GUIs](#GUIs)

Purpose[¶](#Purpose)
--------------------

This page provides a summary of the security and privacy architecture
for phase 1 of webinos.

Key threats and risks in webinos[¶](#Key-threats-and-risks-in-webinos)
----------------------------------------------------------------------

    TODO: A summary of the inputs on the [[Links To Tasks]] page

Informally, I think some of the key risks are:

-   Private data disclosure without informed consent. This would be a
    bad thing, and also cause considerable bad press for webinos. Major
    opportunity to present more information to users than with existing
    platforms
-   Identity theft / authentication failure. Having one's web identity
    misused online. This could happen through credential theft or weak
    web-based authentication, or through...:
-   Rogue applications causing data loss, launching denial of service
    attacks and stealing user data. This is a big threat as malware
    which can exploit the runtime effectively has full access to every
    webinos device. The homogeneity of webinos means that a well written
    piece of malware could infect every webinos device!

Security policy framework[¶](#Security-policy-framework)
--------------------------------------------------------

### Overview[¶](#Overview)

The security policy framework takes the WAC/BONDI approach, [based on
this
document](http://public.wholesaleappcommunity.com/redmine/embedded/wac2pubrev/core/widget-security-privacy.html#toc-widget-security-privacy).
Apps have manifests which include a list of all access privileges they
will request. The only modification to this is that these privileges are
linked to privacy policies, and may refer to cross-device interactions.
Examples of policies are
[here](/wp3-1/wiki/Policy_Examples)
and policy interaction point examples are
[here](/wp3-1/wiki/Policy_API) .
These manifests will be interpreted at first use/install time for apps.
Manifests will need to be signed and contain a HMAC of the application
itself.

Policies which do not refer to just application privileges will be
possible in the future, but we have not worked through enough examples
yet.

Slightly out-of-date
[Architecture](/wp3-1/wiki/Policy_Architecture)
documents

### Synchronisation[¶](#Synchronisation)

The other area of novelty for policy management in Webinos is that
policies must work across multiple devices. This means that an
application installed on one device must have the same policies
replicated across devices (in some cases - e.g. access to profile data,
but not in others - e.g. location? Local device data?).

The other requirement is that when an application attempts to access a
service on another device (e.g. an app on my phone wants to access a
video on my home media centre) then policies should be generated and
approved on-the-fly so that no local device access is required. My phone
should be able to authorise all of it. This must also work in the
offline use case.

Policy synchronisation will rely on a separate system - though SyncML or
similar - to keep policies up-to-date on all devices. This version
control system will work in a decentralised manner. Cross-device policy
changes will force synchronisation events. Policy conflicts between
devices must **not** occur and these will be avoided as much as possible
through fine-grained updates.

### [Key comparison with WAC](Key%20comparison%20with%20WAC.html)[¶](#Key-comparison-with-WAC)

### GUIs[¶](#GUIs)

-   GUIs are required to approve application install/first use requests.
    Authorising application requests should include a pre-checked box
    marked "apply to this application on all my devices"
-   GUIs are required to retrospectively check policy settings
-   Quick-access GUIs are required to turn off discovery and make a user
    anonymous or pseudonymous

Current GUI outlines (purely as examples) are on [this
page](/wp3-1/wiki/Policy_Usability)
along with guidance for creating more.

### GUI-less interaction with policies[¶](#GUI-less-interaction-with-policies)

For "headless" webinos runtime instances, policies must be editable
through a command line.

Privacy policy framework[¶](#Privacy-policy-framework)
------------------------------------------------------

### Overview[¶](#Overview)

One of the main challenges for privacy in mobile applications is
simplicity: allowing users to easily identify how their data will be
used and making it easy for developers to specify this about their apps.

The webinos approach is to allow users to specify privacy policies on
their devices and that app manifests must contain data usage policies.
These data usage policies will be checked against user privacy policies
and conflicts will be highlighted on first use/install.

Related: recent results suggest that [75% of applications do not have a
privacy
policy](http://www.futureofprivacy.org/2011/05/12/fpf-finds-nearly-three-quarters-of-most-downloaded-mobile-apps-lack-a-privacy-policy/)

Policies will be expressed either using POWDER or Dave Raggett's
cut-down P3P specification (investigation pending).

### Requirements[¶](#Requirements)

-   *PS-USR-Oxford-121*: A user shall authenticate with a Webinos
    device, before this device shares profile data with any other
    device.

### GUIs[¶](#GUIs)

Privacy GUIs are required to inspect an application's privacy policy and
express the user's own policy. We aim to borrow those developed for
PrimeLife where appropriate. More detail
here:"/wp3-1/wiki/Policy\_Usability".

The potential privacy impact of an application must be made visible
(e.g. "this application can locate you at any time and track where you
have been") as well as the *actual* impact (e.g. "This application
accessed your location on this date at this time") through a policy GUI.
This is in accordance with recommendations from [this
paper](http://portal.acm.org/citation.cfm?id=1037311) .

Coarse-grained controls for anonymity are also required.

User identity management and authentication[¶](#User-identity-management-and-authentication)
--------------------------------------------------------------------------------------------

### Overview[¶](#Overview)

Webinos aims to provide Single Sign On to Personal Zones and solve some
of the usability issues apparent with web authentication.

    TODO: Ask Sven / Andrea to fill in.

[More details on the user identity management and authentication system
are on the 3.1 wiki
page](/wp3-1/wiki/User_ID_and_Data_Management)

Privileged applications[¶](#Privileged-applications)
----------------------------------------------------

### Overview[¶](#Overview)

[3.1 work
area](/wp3-1/wiki/Privileged_Applications)

Some types of applications will need to go further than the APIs webinos
is exposing as part of WP3.2. For example, a policy-management
application will need "blessed" access to the underlying platform. These
are totally trusted.

How webinos will implement these is unclear. However, they will need to
be hard to install and authorise, and may be limited to only those
applications which have been signed by the device manufacturer.

### Details[¶](#Details)

-   Examples of privileged applications & related requirements
    -   ...
-   APIs provided to privileged applications. Is this the
    "Architectural" ones in 3.2? Additional ones needed for policy
    management.
    -   ...
-   Additional limitations places on privileged applications
    -   Policy may dictate that they are signed by a trusted party (e.g.
        the manufacturer)

### GUIs[¶](#GUIs)

-   Differences when installing/first use of a privileged application

Webinos runtime authentication and platform integrity[¶](#Webinos-runtime-authentication-and-platform-integrity)
----------------------------------------------------------------------------------------------------------------

### Platform authentication[¶](#Platform-authentication)

-   Each device will have a webinos runtime keypair and certificate.
    -   This is designed so that devices in the webinos personal zone
        can identify one-another.
    -   The key will be self-signed until it is connected to the
        personal zone hub, which will then sign the certificate and
        record the public key after authentication.
    -   The certificate will contain the extended attributes of the
        device name (or id) and the user name (or any id)
    -   This key is only designed to be used with the personal zone hub
        and will *not* be made accessible to applications for privacy
        reasons.
    -   Keys will *not* be synchronised with the platform, but
        certificates will be.
    -   Requirement: Key *must* be stored securely by the underlying
        operating system
    -   Certificates can be revoked by any member of the personal zone.
        This will force the re-generation of a new key on a device,
        which will in-turn require mutual authentication

        Phase two of the project will investigate use of Identity Based
        Encryption for keys.

Attestation API and authentication

Protecting the runtime and applications[¶](#Protecting-the-runtime-and-applications)
------------------------------------------------------------------------------------

The webinos runtime must be protected from threats including:

-   Malicious applications exploiting the runtime to get access to
    underlying hardware, other application data, etc.
-   An external malicious device attacking the runtime remotely

Webinos cannot dictate at this stage how the runtime should be
implemented, as different platforms have different options available.

    Microkernel & isolation thoughts.  Guidance for implementing the runtime.

Web App Threats[¶](#Web-App-Threats)
------------------------------------

Webinos has the opportunity to mitigate some common threats to web apps.
The current leading experts on this subject are OWASP, and a full
analysis of the top OWASP threats and their relevence to webinos can be
found on this page - [Threats OWASP](.html).

Personal zone security[¶](#Personal-zone-security)
--------------------------------------------------

### Joining a personal zone for the first time[¶](#Joining-a-personal-zone-for-the-first-time)

Webinos must provide the mechanism for joining a personal zone for the
first time. This means authenticating the device and user.

### Protecting against malicious applications and devices[¶](#Protecting-against-malicious-applications-and-devices)

There are several threats here, including devices owned by other people,
devices owned by the zone-owner ("Zowner"?) which have been infected
with malware, and devices which are partially trusted but may be
malicious (a friend's device, compromised by malware).

[Trusted Network Connect](Trusted%20Network%20Connect.html)

Protecting application data[¶](#Protecting-application-data)
------------------------------------------------------------

### Requirements[¶](#Requirements)

The webinos runtime provides applications with the ability to store data
using the W3C File APIs. The runtime is might be required to protect
this data from various attacks, including:

-   Unauthorised write/read/delete access by other applications
-   Unauthorised access by other software on the device (even
    non-webinos software)

For phase 1, we are mostly concerned about cross-application access.
Therefore, we recommend that:

-   application data is stored under a directory and location where only
    the runtime has access
-   the runtime and data storage must be user-specific. That is, on a
    PC, if I log-out of the system and log-in as another user, I should
    not have access to any webinos data.
-   either the operating system or the webinos runtime must mediate all
    application access to filesystem data so that each application only
    has access to its own data.

From the requirements:

-   *PS-USR-Oxford-17*: The Webinos Runtime Environment SHALL be capable
    of setting dynamic access control policies for device data when
    initiating an association to another Webinos Device.
-   *PS-DEV-Oxford-28*: The Webinos Runtime SHALL provide access control
    for context structures with user-defined policies
-   *PS-USR-Oxford-29*: Webinos applications SHALL require authorisation
    from the policy decision point before disclosure of personal data.
-   *PS-USR-Oxford-30*: Webinos shall allow user data to be marked as
    "personal" in order to specify policies on it.
-   *PS-USR-Oxford-54*: Webinos policys SHALL be able to refer to stored
    data
-   *PS-USR-Oxford-112*: The Webinos Runtime Environment SHALL be
    capable of specifying fine-grained security policies on all features
    of devices and user data.
-   *PS-USR-Oxford-53*: webinos policys SHALL be capable of referring to
    and specifying restrictions on device capabilities and features,
    application data, context and personal information held in Webinos,
    and access to other devices and applications.
-   *PS-USR-Oxford-59*: The webinos runtime environment SHALL securely
    store application data to prevent disclosure to unauthorised
    entities. Comment: Application data includes any content or media
    used by the application.
-   *PS-USR-Oxford-62*: Applications SHALL be isolated from each other.
    An application MUST NOT be able to view or modify another
    application's data or execution state
-   *PS-DEV-ambiesense-08*: The Webinos runtime environment SHALL
    support customised encryption of any data stream (independent of its
    data type or format)
-   *PS-DEV-Oxford-88*: Webinos applications MUST explain why access to
    data or APIs is being requested

### GUIs[¶](#GUIs)

The requirements show that we need a GUI for data access control
policies. This should be integrated with the fine-grained application
policy editor for all data owned by a particular application.

Default Policies[¶](#Default-Policies)
--------------------------------------

    Todo: XACML based on /wp3-1/wiki/Policy_Examples

"The Contacts API is another API. I suggest that we should use a more
detailed access control for the user profile. The user should be asked
which data he would like to provide to the apps, e.g. "can read full
profile data", "can read field x". The user profile should not be
editable for the apps."

-   In-zone defaults: Default deny. Allow access to network and
    discovery of services. allow access to basic profile data.
-   Out-of-zone defaults: Default deny. Allow internet access. Prompt
    for all other device access.
-   Privileged apps: Default permit.

Application trust chains[¶](#Application-trust-chains)
------------------------------------------------------

### Overview[¶](#Overview)

    TODO John: Check this against WAC.

Whether or not an application is run will depend on whether it is
trusted. There are two ways in which trust is expressed: through fixed
certificates on the runtime (much like the website-ssl model) and
through user authorisation at install/first use.

### Install / first use verification[¶](#Install-first-use-verification)

Local applications will be "installed" in the following way:

1.  Application is downloaded
2.  Application contains a file with HMACs of all content of the
    downloaded bundle
3.  HMACs are verified against the signing key and content of the
    application
4.  Any number of HMACS may be included from different authorities
5.  Webinos will check to see which of the signing authorities (for whom
    certificates will be provided in the application) have certificates
    with roots in those installed in the platform
6.  The user will be informed if none of the signing authorities are
    trusted by the platform and advised not to use the application.
7.  ... widget security and privacy control checks and authorisation
    follows ...

Hosted applications will be "installed" in the following way:

1.  Webinos browser visits URL of the application
2.  App must be hosted on an HTTPS page
3.  App has a manifest.xml file at a well-known location
4.  Manifest contains HMACs of all content. Webinos checks HMACs before
    any content can be loaded.
5.  Any number of HMACS may be included from different authorities
6.  Webinos will check to see which of the signing authorities (for whom
    certificates will be provided in the application) have certificates
    with roots in those installed in the platform
7.  The user will be informed if none of the signing authorities are
    trusted by the platform and advised not to use the application.
8.  ... widget security and privacy control checks and authorisation
    follows ...

    TODO John: more here. CORS and WARP?

### Remote certificates[¶](#Remote-certificates)

Applications may refer to remote javascript content which is then
executed by the widget. This is not present in the original bundle and
therefore cannot be checked for integrity. It may come from a non-https
source, and therefore DNA spoofing could be an attack vector.
Furthermore, remote scripts can change and be updated. This is probably
not worth worrying about in general, but this limits possible solutions
to the problem.

The webinos solution is to require that all scripts referred to remotely
have additional manifests containing HMACs of the javascript file,
signed by trusted authorities. Each script import must contain both the
URL for the script, URL for a manifest, and the identity of the signing
authority. This manifest can be included in the application or hosted
remotely. It does not need to be hosted on the same domain as the
script.

TODO: more here.

Change of ownership and change of personal zone[¶](#Change-of-ownership-and-change-of-personal-zone)
----------------------------------------------------------------------------------------------------

### Overview[¶](#Overview)

Devices will change ownership. As a result, webinos must have mechanisms
for allowing this and deleting sensitive data and revoking access to a
personal zone. We did not cover this fully in the requirements

### Additional requirements[¶](#Additional-requirements)

-   All certificates and keys must be revoked on other personal zones
    and then deleted.
-   The device must securely delete all application data
-   All profile data must be securely deleted
-   All synchronised data must be deleted, as well as settings for the
    personal zone

### GUIs[¶](#GUIs)

A simple button to do this somewhere would probably be sufficient.

