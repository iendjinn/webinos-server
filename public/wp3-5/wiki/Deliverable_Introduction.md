Introduction[¶](#Introduction)
==============================

In this document we define the security architecture for the webinos
project. The webinos project aims to deliver a cross-device web
application runtime environment, providing inter-device communication
and interaction. The development of this runtime environment will help
to provide a seamless end-user experience with web applications. The
webinos consortium aims to make several innovations in the runtime
environment, and, as a research project, it aims to go beyond the
current state of the art in web application technology. The majority of
the specification work is being carried out in two other documents: the
System Specification ([Webinos-D31](Webinos-D31.html)) and API
Specification ([Webinos-D32](Webinos-D32.html)).

One of the most important areas for improvement in existing web
application technology is the provision of better security and privacy.
webinos-enabled web applications will be able to support important and
high value functionality such as electronic payment and may store
confidential and valuable information belonging to companies or
individuals. At the same time, vulnerabilities in web technology are
being discovered regularly, with large projects such as OWASP
([OWASP](OWASP.html)) dedicated to cataloguing and mitigating the most
common and severe. Furthermore, user privacy is an increasing concern,
and mobile applications frequently appear in the news for violating user
expectations for how their data are collected and used
([Leyden2011](Leyden2011.html)).

A key challenge facing the webinos project is that existing threats to
security and privacy could potentially have a greater impact on webinos
than on existing systems, due to the capability for cross-device
interaction and standardised architecture. From the outset we have been
aware that an insecure webinos platform could result in the creation of
cross-device malware. This malware could capture sensitive private
information or commercially valuable data or even create a large,
cross-platform botnet capable of launching denial of service attacks
against people and organisations. These threats are real, and must be
solved in the webinos architecture. The webinos project has therefore
been considering security and privacy issues from the beginning, and
this document represents the first iteration of the webinos security and
privacy architecture.

There is another compelling reason for the creation of a webinos
security and privacy architecture: the standardisation of security and
privacy controls and interfaces which will increase usability and reduce
development effort. At present, each device manufacturer provides
different interfaces and conceptual models for securing applications and
protecting users. This makes the task of securing all personal devices
challenging for users. By unifying the interface and allowing the
management of security policies on all devices to be done on the most
appropriate platform (on a device with a large screen and keyboard, for
example) users will be able to make better decisions than they can at
present. This document therefore describes a security and privacy
architecture capable of providing standardised access controls and
features applicable to all four device domains.

Document Structure and Scope[¶](#Document-Structure-and-Scope)
--------------------------------------------------------------

This document is structured in the following way. The rest of this
section covers the methodology used to create the security and privacy
architecture, principles followed and provides a high-level overview of
the architecture itself. The background section discusses related
security architectures, including Android, BONDI, iOS and WebOS, and
analyses what can be learned from them. An initial threat overview is
then given, including the top ten relevant threats from the OWASP
project and early results from task 2.8 where the main threat analysis
is taking place. The architecture section contains requirements and
specifications for security and privacy-related components of the
webinos architecture, and is the main contribution of this document. It
includes details on the following components:

-   the security policy architecture;
-   the privacy policy architecture;
-   authentication and user identity management;
-   runtime authorisation;
-   privileged applications;
-   secure storage;
-   security for extensions;
-   personal zone security;
-   platform integrity protection, resilience and attestation;
-   application certification, installation and trust;
-   device permissions; and
-   session security.

The next section discusses guidelines for the implementation of the
webinos platform, with particular guidance for privacy and secure
development of the network architecture, communication and the runtime
itself. This is followed by a discussion of the cloud security models
which are relevant to webinos. Following this, the [Updates to Security
Requirements](Updates%20to%20Security%20Requirements.html) section
contains a list of new or modified requirements which were identified
when creating the security architecture. We then conclude and give
guidance on how best to use this document.

This security and privacy architecture document is not designed to be
read on its own, and frequently refers to previous webinos
documentation, including specification deliverables 3.1 and 3.2, the
requirements in deliverable 2.2 and the user expectations work in
deliverable 2.7 and early results from 2.8. Deliverable D3.1 in
particular must be read before this document in order to introduce the
key webinos system components. Due to the overlap between the system
specification ([Webinos-D31](Webinos-D31.html)) and this document, some
of the key architectural components are presented more thoroughly in the
other document. This is because they are fundamental to the design of
the system and cannot be separated from it. This includes the sections
on security policies, authentication, messaging, and privileged
applications.

Methodology[¶](#Methodology)
----------------------------

The webinos security architecture was developed using the following
methodology. Importantly, we aimed to keep security aligned with the
rest of the specification efforts, so that insecure designs were
identified and avoided early on in the planning phase of the project. We
took several measures to make this happen:

1.  Every area of the specification in ([Webinos-D31](Webinos-D31.html))
    involved a partner with security expertise who was also involved in
    the security and privacy work.
2.  We kept track of emerging security and privacy issues in the
    specification work using the project wiki and discussed them on
    frequent conference calls and meetings.
3.  We used the Personas defined in ([Webinos-D27](Webinos-D27.html)) as
    authorities to make security and privacy design decisions.
4.  We used the misuse cases and environment models developed in
    ([Webinos-D28](Webinos-D28.html)) to identify new threats and
    potential vulnerabilities.

Throughout the design of the webinos security architecture, we also
tried to follow well-established guidelines and principles. These have
been drawn from academic literature and were followed throughout the
duration of the development of the webinos platform.

### Security Principles.[¶](#Security-Principles)

The following security patterns are from
([Garfinkel2005](Garfinkel2005.html)).

-   *Good Security Now (Don’t Wait for Perfect)*. Ensure that systems
    offering some security features are deployed now, rather than
    leaving these systems sitting on the shelf while “perfect” security
    systems are being developed for the future.
-   *Provide Standardized Security Policies (No Policy Kit)*. Provide a
    small number of standardized security conﬁgurations that can be
    audited, documented, and\
    taught to users.
-   *Least Surprise / Least Astonishment*. Ensure that the system acts
    in accordance with the user’s expectations.
-   *Explicit User Audit*. Allow the user to inspect all user-generated
    information stored in the system to see if information is present
    and verify that it is accurate. There should be no hidden data.
-   *Explicit Item Delete*. Give the user a way to delete what is shown,
    where it is shown.
-   *Reset to Installation*. Provide a means for removing all personal
    or private information associated with an application or operating
    system in a single, conﬁrmed, and ideally delayed operation
-   *Complete Delete*. Ensure that when the user deletes the visible
    representation of something, the hidden representations are deleted
    as well
-   *Leverage Existing Identiﬁcation*. Use existing identiﬁcation
    schemes, rather than trying to create new ones.
-   *Create Keys When Needed*. Ensure that cryptographic protocols that
    can use keys will have access to keys, even if those keys were not
    signed by the private key of a well-known Certiﬁcate Authority
-   *Track Received Key*. Make it possible for the user to know if this
    is the ﬁrst time that a key has been received, if the key has been
    used just a few times, or if it is used frequently.
-   *Migrate and Backup Key*. Prevent users from losing their valuable
    secret keys.
-   *Disclose Signiﬁcant Deviations*. Inform the user when an object
    (software or physical) is likely to behave in a manner that is
    signiﬁcantly different than expected. Ideally the disclosure should
    be made by the object’s creator.
-   *Install Before Execute*. Ensure that programs cannot run unless
    they have been properly installed.
-   *Distinguish Between Run and Open*. Distinguish the act of running a
    program from the opening of a data ﬁle.
-   *Disable by Default*. Ensure that systems does not enable services,
    servers, and other signiﬁcant but potentially surprising and
    security-relevant functionality unless there is a need to do so.
-   *Warn When Unsafe*. Periodically warn of unsafe conﬁgurations or
    actions. It is important to limit the frequency of warnings so that
    the user does not become habituated to them.
-   *Distinguish Security Levels*. Give the user a simple way to
    distinguish between similar operations that are more-secure and
    less-secure. The visual indications should be consistent across
    products, packages and vendors.

The following are more general, and many have been taken from the
classic Saltzer and Schroeder paper ([Saltzer75](Saltzer75.html)).

-   *Economy of mechanism*: Keep the design as simple and small as
    possible. Prefer the most simple option available during design.
-   *Fail-safe defaults*: Base access decisions on permission rather
    than exclusion.
-   *Least privilege*: Every program and every user of the system should
    operate using the least set of privileges necessary to complete the
    job. This is often not possible, but is particularly relevant when
    designing components which are large enough to be considered
    potentially untrustworthy. E.g. a browser. They should be given the
    minimum privilege possible so that compromise has the least impact.
-   *Compromise recording*: It is sometimes suggested that mechanisms
    that reliably record that a compromise of information has occurred
    can be used in place of more elaborate mechanisms that completely
    prevent loss.
-   Do not reinvent the wheel: use existing technology where possible.
-   Reduce the number and size of trusted components.
-   Isolate individual components where possible.

### Privacy principles[¶](#Privacy-principles)

We aimed to avoid the following five Privacy Pitfalls
([Lederer04](Lederer04.html)) in webinos:

-   obscuring potential information flow;
-   obscuring actual information flow;
-   emphasizing configuration over action;
-   lacking coarse-grained control; and
-   inhibiting existing practice.

In addition, we also took advantage of the wealth of information
available from the OWASP project ([OWASP](OWASP.html)) and in the
[Background section](Background%20section.html) of this document we have
listed the top ten threats and identified how they relate to the webinos
platform.

High-level Overview of the Security Architecture[¶](#High-level-Overview-of-the-Security-Architecture)
------------------------------------------------------------------------------------------------------

The webinos security and privacy model consists of many components,
processes and guidelines. This section provides a brief overview of how
they fit together and describes the components which are responsible for
securing each part of the system. Our initial approach was to start with
concepts used in WAC ([WAC](WAC.html)) and apply them to a distributed
environment.

The most significant feature is the *[security policy
architecture](security%20policy%20architecture.html)*, which primarily
controls applications' access to device features, but also states rules
about inter-device communication and event handling. The policy
architecture also controls the storage and use of context data and is
the main way in which user privacy can be protected. Policies are
written in XACML and enforced at the Policy Enforcement Point, a key
component in the personal zone proxy and personal zone hub. Policies are
synchronised between user devices either via the personal zone hub or
peer-to-peer, an important capability when two devices communicate for
the first time and need to share credentials.

Policies are generated when an application is first installed and
initially requests permission for accessing local resources. Permissions
are defined in XML and included in the manifest file, as proposed in the
*[device permissions](device%20permissions.html)* section. The user is
prompted to authorise the permissions using GUIs discussed in the
*[runtime authorisation](runtime%20authorisation.html)* section, and is
able to selectively grant and deny them. All permissions contain details
of the privacy policies the application will follow. The user may also
have their own, separate privacy policy defined on the platform (see
*[the privacy policy
architecture](the%20privacy%20policy%20architecture.html)* section). If
the user's policy is in conflict with an application's, they will be
warned at install time or first use. Applications will also be installed
only if they contain valid, comprehensive certificates from their
author, as defined in the section on *[application
certificates](application%20certificates.html)*.

When interacting with webinos applications, users will need to
authenticate both to the personal zone (to enable cross-device
interaction) and potentially with the applications themselves. Webinos
enables this through the [authentication
architecture](authentication%20architecture.html) which is detailed in
deliverable D3.1. It reduces the need for users to have and remember
passwords, a significant security benefit, by creating a webinos single
sign-on system. Security for the sessions established in single sign-on
and elsewhere are discussed in the section on *[session
security](session%20security.html)*.

To support other parts of the platform, webinos will also provide
[secure storage](secure%20storage.html) for data such as credentials,
policies and personal information. [Extensions](Extensions.html) and
*[privileged applications](privileged%20applications.html)* -
application given access to lower level runtime features - have also
been considered, and have various security controls and restrictions
applied to them. In addition, the runtime will support mechanisms to
protect and report its integrity, as defined in the *[platform integrity
section](platform%20integrity%20section.html)*, so that remote relying
parties can be sure that only trusted versions of the webinos runtime
and applications are being used. This section also discussed the various
threats from malware to the platform and how the implementation might
protect itself from compromise.

Finally, issues involving the [administration of the personal
zone](administration%20of%20the%20personal%20zone.html) are part of the
security architecture. These include how a zone is initially
instantiated, how devices join and are revoked, how a personal zone hub
is installed, and how users can change zones later on.

Definitions of terms[¶](#Definitions-of-terms)
----------------------------------------------

For a glossary of terms, please refer to the glossary page in the
([Webinos-D31](Webinos-D31.html)) document.

