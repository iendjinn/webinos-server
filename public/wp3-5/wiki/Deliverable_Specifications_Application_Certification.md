Application Certification, Installation and Trust[¶](#Application-Certification-Installation-and-Trust)
-------------------------------------------------------------------------------------------------------

### Introduction[¶](#Introduction)

Whether or not an application is run will depend on whether it is
trusted. There are two ways in standard web app security technologies in
which trust is expressed: through pre-installed certificates on the
runtime (much like the use of transport level security on the browser)
and through user authorisation at application install or runtime. In
this section we consider the process by which trust is established in
applications at install time and beyond.

### Background[¶](#Background)

#### Requirements[¶](#Requirements)

This section of the specification aims to satisfy (partially) the
following requirements:

-   [PS-USR-Oxford-51](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-51)
    : Users shall be able to view a list of all of their webinos
    applications and show the authority that certified the application.
-   [ID-DEV-POLITO-017](/wp2-2/wiki/DeliverableVersionAll#ID-DEV-POLITO-017)
    : An application should be able to unambiguously prove its
    developer's identity.
-   [PS-DEV-ambiesense-25](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-25)
    : The webinos runtime shall protect policies from tampering or
    modification by unauthorised applications. The only authorised
    applications shall be from signed, trusted sources, which may be
    defined by the manufacturer, network provider, or end user.
-   [PS-DEV-Oxford-77](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-77)
    : The webinos policy editing tool shall allow policy specification
    based on assets including data, data classes, signing authorities
    and APIs.
-   [LC-DEV-ISMB-006](/wp2-2/wiki/DeliverableVersionAll#LC-DEV-ISMB-006)
    : An application must be associated with a method (e.g. digital
    signature) for the webinos runtime to perform origin authenticity
    and integrity checking.
-   [PS-DWP-ISMB-022](/wp2-2/wiki/DeliverableVersionAll#PS-DWP-ISMB-022)
    : Before being installed or updated, origin authenticity and
    integrity checks shall be performed by the webinos runtime on the
    application.
-   [PS-USR-Oxford-105](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-105)
    : The webinos Runtime Environment shall protect the integrity of
    application instances as they are transferred between devices.

#### Related technology and research[¶](#Related-technology-and-research)

The fundamental background concepts are those of public key cryptography
([Garfinkel1996](Garfinkel1996.html)) and OCSP ([OCSP](OCSP.html)).
Examples of related problems include PGP, browser security models and
certificate revocation.

The WAC ([WAC](WAC.html)) and BONDI ([BONDI](BONDI.html)) specifications
propose an approach for verifying the authenticity and integrity of
applications using certificates. Webinos will largely follow these
specifications, with some exceptions, as outlined in the following
sections. Also relevant is the W3C working draft for XML digital
signatures for widgets ([WidgetSignatures](WidgetSignatures.html)).

#### Threats[¶](#Threats)

The main threat is the general one of malware being installed on a
webinos platform and then performing unwanted actions, perhaps stealing
user data or taking part in a botnet. There are many ways this could
occur, in this section of the deliverable we focus on the following
threats:

-   A user installs an application & grants it access to the system
    without understanding what the application is capable of doing
-   Malware masquerades as a legitimate application in order to gain the
    trust of the user, who then installs it.
-   A legitimate application is installed, but then loads external data
    which has been modified in a way that violates user security
    requirements or modifies the application to behave in an
    untrustworthy manner.

This section of the deliverable concentrates on install-time trust
decisions as well as restricting the application from loading
untrustworthy external code. Threats involving the corruption of code
while on the device, or modification of the runtime itself are not
considered.

### Components[¶](#Components)

Application integrity and authenticity is enforced by the webinos
runtime, in particular the personal zone proxy and policy enforcement
components. These connect to the following other pieces of
functionality:

-   The application installer
-   The application launcher
-   Secure storage for certificates
-   Application packaging, manifests and resources
-   Certificate update & revocation on the PZH and PZP

### Processes[¶](#Processes)

#### Installation of applications[¶](#Installation-of-applications)

The installation (or first use) of an application is the time when a
trust decision must be made. If the application is not trusted at all,
it should not be installed. If there is doubt about the provenance of
the application - whether it is from the right source and has the right
name - it should also not be installed. The following steps are taken
from WAC ([WAC](WAC.html)) and modified for the webinos install process:

Local applications will be "installed" in the following way:

1.  A new application is downloaded
2.  The application contains at least one digital signature file
    containing signatures of all files in the downloaded application
    which are not themselves signature files
    ([WidgetSignatures](WidgetSignatures.html)). The application will
    also contain a manifest.
3.  Signatures are verified against the signing key and content of the
    application, as per ([WidgetSignatures](WidgetSignatures.html)).
4.  Webinos will check to see which of the signing authorities that were
    used to sign the application have certificates with roots in those
    installed in the platform.
5.  The user will be informed if none of the signing authorities are
    trusted by the platform and advised not to use the application.
6.  Standard widget security and privacy control checks and
    authorisation.

Local applications may refer to remote content, such as through
importing javascript in *\<script src="http://example.com/myjs.js" /\>*
statements. This is a potential attack vector unless the content is
accessed securely, or the content is signed. In webinos, one of these
two options must be followed. Either the script "src" must point to a
https location, trusted by the webinos runtime, or the script must has a
signature file linked in the html, e.g.: "\<script
src="http://example.com/myjs.js" sigfile="http://example.com/sig.xml
/\>".

Hosted applications will be "installed" in the following way:

1.  Webinos browser visits URL of the application
2.  The application must be hosted on an HTTPS page
3.  The application will have a digital signature index document giving
    a list of locations for digital signatures.
4.  Signatures are verified against the signing key and content of the
    application, as per ([WidgetSignatures](WidgetSignatures.html)).
    Signatures may refer to any parts of the application - and
    developers are encouraged to give signatures for all static content.
    The manifest must be signed.
5.  Webinos will check to see which of the signing authorities (for whom
    certificates will be provided in the application) have certificates
    with roots in those installed in the platform
6.  The user will be informed if none of the signing authorities are
    trusted by the platform and advised not to use the application.
7.  Standard widget security and privacy control checks and
    authorisation.

All applications must have signed manifests, but they may be signed by
keys with self-signed certificates. User policies will dictate whether
this is supported by the runtime. The PZH and PZP must store the
association between the application and its certificate, and a different
self-signed certificate cannot be used for subsequent versions of the
application.

#### Update of applications and certificates[¶](#Update-of-applications-and-certificates)

Local widgets can be updated by following proposals described in
Deliverable 3.1 ([Webinos-D31](Webinos-D31.html)) and the W3C Widget
Update Working Draft ([WidgetUpdates](WidgetUpdates.html)).

Remotely hosted widgets require no special mechanism to be updated.
However, the signature files must also be updated to correspond to the
new version. The webinos runtime will check each signed remote file
every time it is downloaded, to make sure it has not been modified. If
it has been modified, the signature and manifest will be re-downloaded
and updated.

#### Revocation and management of certificates[¶](#Revocation-and-management-of-certificates)

The webinos application security framework relies upon valid
certificates being used and the webinos runtime containing a set of
trusted certificates, much like a web browser. Webinos must periodically
(as well as when the certificate is first installed) check each
certificate is valid, and use OCSP to check that it has not been
revoked. This task should be performed to the personal zone hub, which
can make the necessary updates and synchronise them between all user
devices.

### Future directions[¶](#Future-directions)

The processes outlined in this section are largely built on WAC. Further
improvements and novel research will be investigated in phase 2,
including the following topics.

#### Social network reputation and review system[¶](#Social-network-reputation-and-review-system)

Application certificates are one source for information on
trustworthiness, but social networks may provide more useful
information. If 90% of the user's friends rate an application highly,
this information may help the user decide whether to trust the
application or not. Recommendations from particular users might trigger
policy settings which allow the application to be installed with minimal
authorisation.

#### Attestation of hosted applications[¶](#Attestation-of-hosted-applications)

Hosted applications may be running on insecure remote platforms. This
could be assessed through use of attestation on the host
([Lyle2010](Lyle2010.html)). If the host is found to be running in an
untrustworthy configuration then the application may not be installed,
or if the host changes configuration it could result in a new
assessment.

#### Remote code execution[¶](#Remote-code-execution)

Applications will be able to send code to other personal zone devices to
be executed, for performance or power consumption reasons. The security
process required for managing this is not included in this deliverable
and will need to be analysed during implementation and future design
work.

#### Public key usability[¶](#Public-key-usability)

The public key certificate system proposed has all of the problems
associated with certificates: they are difficult to use and do not scale
well to large systems. More time should be spent investigating
alternatives.

