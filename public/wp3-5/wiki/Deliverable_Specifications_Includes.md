Architecture[¶](#Architecture)
==============================

Security Policy Architecture[¶](#Security-Policy-Architecture)
--------------------------------------------------------------

### Introduction[¶](#Introduction)

This section introduces the policy management architecture discussed in
the "Security and Privacy" chapter of the "D3.1 System specifications"
document
([Webinos-D31](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31)).
The specification itself can be found in
([Webinos-D31](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31)),
but this section explains various security issues, including related
background literature, threats and the security model. Here the focus is
on security rather than privacy.

### Background[¶](#Background)

Consider the common scenario where a device exposes a set of features
and/or low level capabilities made available to applications through
system APIs. Applications may abuse these capabilities, intentionally or
accidentally. We therefore need to introduce a component to control the
access to them, matching external requests against a defined set of
rules called policy.

As the analysis in the [Background
section](/redmine/projects/t3-5/wiki/Deliverable_Background) clearly
demonstrates this base capability is highly prevalent on all native and
web based application platforms, proving that there is strong need.
Because security is so important (especially to the web) it is
imperative that this security policy be standardised and interoperable.
Without well defined portable technologies in this space, web
application ecosystems will become intrinsically tied to application
stores, inhibiting competition and market growth.

This component should, as far as possible, prevent the retention and
redistribution of user's personal data in order to guarantee privacy.

To reach security and privacy protection requirements each request for
access a device feature/capability and each intent for
retain/redistribute personal data is controlled by an enforcement
point - the component cited above - that works using XACML-like policies
for the access control and P3P (JSON) policies for privacy protecion.

#### Requirements[¶](#Requirements)

The following requirements from
([Webinos-D2](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D22))
are relevant to this part of the security architecture.

  ----------------------- ----------------------- -----------------------
  [ID-USR-Oxford-20](http [ID-DWP-POLITO-101](htt [ID-DEV-POLITO-004](htt
  ://dev.webinos.org/redm p://dev.webinos.org/red p://dev.webinos.org/red
  ine/projects/wp2-2/wiki mine/projects/wp2-2/wik mine/projects/wp2-2/wik
  /DeliverableVersionAll# i/DeliverableVersionAll i/DeliverableVersionAll
  ID-USR-Oxford-20)       #ID-DWP-POLITO-101)     #ID-DEV-POLITO-004)

  [ID-DEV-POLITO-017](htt [ID-DEV-POLITO-018](htt [PS-USR-Oxford-103](htt
  p://dev.webinos.org/red p://dev.webinos.org/red p://dev.webinos.org/red
  mine/projects/wp2-2/wik mine/projects/wp2-2/wik mine/projects/wp2-2/wik
  i/DeliverableVersionAll i/DeliverableVersionAll i/DeliverableVersionAll
  #ID-DEV-POLITO-017)     #ID-DEV-POLITO-018)     #PS-USR-Oxford-103)

  [PS-USR-Oxford-104](htt [PS-USR-Oxford-16](http [PS-USR-Oxford-17](http
  p://dev.webinos.org/red ://dev.webinos.org/redm ://dev.webinos.org/redm
  mine/projects/wp2-2/wik ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  i/DeliverableVersionAll /DeliverableVersionAll# /DeliverableVersionAll#
  #PS-USR-Oxford-104)     PS-USR-Oxford-16)       PS-USR-Oxford-17)

  [PS-USR-Oxford-41](http [PS-DMA-IBBT-003](http: [PS-USR-Oxford-67](http
  ://dev.webinos.org/redm //dev.webinos.org/redmi ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ne/projects/wp2-2/wiki/ ine/projects/wp2-2/wiki
  /DeliverableVersionAll# DeliverableVersionAll#P /DeliverableVersionAll#
  PS-USR-Oxford-41)       S-DMA-IBBT-003)         PS-USR-Oxford-67)

  [PS-DEV-Oxford-28](http [PS-USR-Oxford-30](http [PS-USR-Oxford-54](http
  ://dev.webinos.org/redm ://dev.webinos.org/redm ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  /DeliverableVersionAll# /DeliverableVersionAll# /DeliverableVersionAll#
  PS-DEV-Oxford-28)       PS-USR-Oxford-30)       PS-USR-Oxford-54)

  [PS-USR-Oxford-55](http [PS-DEV-Oxford-87](http [PS-USR-Oxford-113](htt
  ://dev.webinos.org/redm ://dev.webinos.org/redm p://dev.webinos.org/red
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki mine/projects/wp2-2/wik
  /DeliverableVersionAll# /DeliverableVersionAll# i/DeliverableVersionAll
  PS-USR-Oxford-55)       PS-DEV-Oxford-87)       #PS-USR-Oxford-113)

  [PS-USR-Oxford-35](http [PS-USR-Oxford-37](http [PS-USR-Oxford-38](http
  ://dev.webinos.org/redm ://dev.webinos.org/redm ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  /DeliverableVersionAll# /DeliverableVersionAll# /DeliverableVersionAll#
  PS-USR-Oxford-35)       PS-USR-Oxford-37)       PS-USR-Oxford-38)

  [PS-USR-Oxford-40](http [PS-USR-Oxford-49](http [PS-USR-Oxford-50](http
  ://dev.webinos.org/redm ://dev.webinos.org/redm ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  /DeliverableVersionAll# /DeliverableVersionAll# /DeliverableVersionAll#
  PS-USR-Oxford-40)       PS-USR-Oxford-49)       PS-USR-Oxford-50)

  [PS-USR-Oxford-52](http [PS-USR-Oxford-53](http [PS-USR-Oxford-58](http
  ://dev.webinos.org/redm ://dev.webinos.org/redm ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  /DeliverableVersionAll# /DeliverableVersionAll# /DeliverableVersionAll#
  PS-USR-Oxford-52)       PS-USR-Oxford-53)       PS-USR-Oxford-58)

  [PS-USR-Oxford-75](http [PS-USR-Oxford-80](http [PS-USR-Oxford-84](http
  ://dev.webinos.org/redm ://dev.webinos.org/redm ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  /DeliverableVersionAll# /DeliverableVersionAll# /DeliverableVersionAll#
  PS-USR-Oxford-75)       PS-USR-Oxford-80)       PS-USR-Oxford-84)

  [PS-DEV-IBBT-004](http: [PS-USR-Oxford-114](htt [PS-USR-Oxford-42](http
  //dev.webinos.org/redmi p://dev.webinos.org/red ://dev.webinos.org/redm
  ne/projects/wp2-2/wiki/ mine/projects/wp2-2/wik ine/projects/wp2-2/wiki
  DeliverableVersionAll#P i/DeliverableVersionAll /DeliverableVersionAll#
  S-DEV-IBBT-004)         #PS-USR-Oxford-114)     PS-USR-Oxford-42)

  [PS-USR-Oxford-43](http [PS-DMA-DEV-Oxford-47]( [PS-USR-Oxford-48](http
  ://dev.webinos.org/redm http://dev.webinos.org/ ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki redmine/projects/wp2-2/ ine/projects/wp2-2/wiki
  /DeliverableVersionAll# wiki/DeliverableVersion /DeliverableVersionAll#
  PS-USR-Oxford-43)       All#PS-DMA-DEV-Oxford-4 PS-USR-Oxford-48)
                          7)                      

  [PS-DEV-Oxford-56](http [PS-ALL-Oxford-61](http [PS-USR-Oxford-73](http
  ://dev.webinos.org/redm ://dev.webinos.org/redm ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  /DeliverableVersionAll# /DeliverableVersionAll# /DeliverableVersionAll#
  PS-DEV-Oxford-56)       PS-ALL-Oxford-61)       PS-USR-Oxford-73)

  [PS-DEV-Oxford-79](http [PS-USR-Oxford-81](http [PS-USR-Oxford-82](http
  ://dev.webinos.org/redm ://dev.webinos.org/redm ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  /DeliverableVersionAll# /DeliverableVersionAll# /DeliverableVersionAll#
  PS-DEV-Oxford-79)       PS-USR-Oxford-81)       PS-USR-Oxford-82)

  [PS-USR-Oxford-83](http [PS-USR-ISMB-036](http: [PS-DEV-ambiesense-25](
  ://dev.webinos.org/redm //dev.webinos.org/redmi http://dev.webinos.org/
  ine/projects/wp2-2/wiki ne/projects/wp2-2/wiki/ redmine/projects/wp2-2/
  /DeliverableVersionAll# DeliverableVersionAll#P wiki/DeliverableVersion
  PS-USR-Oxford-83)       S-USR-ISMB-036)         All#PS-DEV-ambiesense-2
                                                  5)

  [PS-USR-DEV-Oxford-44]( [PS-USR-DEV-Oxford-45]( [PS-USR-DEV-Oxford-46](
  http://dev.webinos.org/ http://dev.webinos.org/ http://dev.webinos.org/
  redmine/projects/wp2-2/ redmine/projects/wp2-2/ redmine/projects/wp2-2/
  wiki/DeliverableVersion wiki/DeliverableVersion wiki/DeliverableVersion
  All#PS-USR-DEV-Oxford-4 All#PS-USR-DEV-Oxford-4 All#PS-USR-DEV-Oxford-4
  4)                      5)                      6)

  [PS-USR-Oxford-57](http [PS-DEV-Oxford-64](http [PS-USR-Oxford-69](http
  ://dev.webinos.org/redm ://dev.webinos.org/redm ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  /DeliverableVersionAll# /DeliverableVersionAll# /DeliverableVersionAll#
  PS-USR-Oxford-57)       PS-DEV-Oxford-64)       PS-USR-Oxford-69)

  [PS-USR-Oxford-72](http [PS-DEV-Oxford-88](http [PS-DEV-Oxford-89](http
  ://dev.webinos.org/redm ://dev.webinos.org/redm ://dev.webinos.org/redm
  ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  /DeliverableVersionAll# /DeliverableVersionAll# /DeliverableVersionAll#
  PS-USR-Oxford-72)       PS-DEV-Oxford-88)       PS-DEV-Oxford-89)

  [PS-USR-Oxford-102](htt [PS-USR-Oxford-123](htt [PS-DEV-ambiesense-21](
  p://dev.webinos.org/red p://dev.webinos.org/red http://dev.webinos.org/
  mine/projects/wp2-2/wik mine/projects/wp2-2/wik redmine/projects/wp2-2/
  i/DeliverableVersionAll i/DeliverableVersionAll wiki/DeliverableVersion
  #PS-USR-Oxford-102)     #PS-USR-Oxford-123)     All#PS-DEV-ambiesense-2
                                                  1)

  [PS-USR-Oxford-116](htt [PS-USR-Oxford-34](http [PS-USR-Oxford-59](http
  p://dev.webinos.org/red ://dev.webinos.org/redm ://dev.webinos.org/redm
  mine/projects/wp2-2/wik ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  i/DeliverableVersionAll /DeliverableVersionAll# /DeliverableVersionAll#
  #PS-USR-Oxford-116)     PS-USR-Oxford-34)       PS-USR-Oxford-59)

  [PS-USR-TSI-3](http://d [PS-DWP-ISMB-202](http: [PS-USR-Oxford-120](htt
  ev.webinos.org/redmine/ //dev.webinos.org/redmi p://dev.webinos.org/red
  projects/wp2-2/wiki/Del ne/projects/wp2-2/wiki/ mine/projects/wp2-2/wik
  iverableVersionAll#PS-U DeliverableVersionAll#P i/DeliverableVersionAll
  SR-TSI-3)               S-DWP-ISMB-202)         #PS-USR-Oxford-120)

  [NC-DEV-IBBT-009](http: [NC-DWP-IBBT-0010](http [NC-DEV-IBBT-0015](http
  //dev.webinos.org/redmi ://dev.webinos.org/redm ://dev.webinos.org/redm
  ne/projects/wp2-2/wiki/ ine/projects/wp2-2/wiki ine/projects/wp2-2/wiki
  DeliverableVersionAll#N /DeliverableVersionAll# /DeliverableVersionAll#
  C-DEV-IBBT-009)         NC-DWP-IBBT-0010)       NC-DEV-IBBT-0015)

  [LC-DEV-ISMB-003](http: [LC-DEV-ISMB-006](http: [LC-USR-ISMB-039](http:
  //dev.webinos.org/redmi //dev.webinos.org/redmi //dev.webinos.org/redmi
  ne/projects/wp2-2/wiki/ ne/projects/wp2-2/wiki/ ne/projects/wp2-2/wiki/
  DeliverableVersionAll#L DeliverableVersionAll#L DeliverableVersionAll#L
  C-DEV-ISMB-003)         C-DEV-ISMB-006)         C-USR-ISMB-039)

  [CAP-DEV-SEMC-001](http [TMS-DWP-POLITO-004](ht [TMS-DWP-POLITO-005](ht
  ://dev.webinos.org/redm tp://dev.webinos.org/re tp://dev.webinos.org/re
  ine/projects/wp2-2/wiki dmine/projects/wp2-2/wi dmine/projects/wp2-2/wi
  /DeliverableVersionAll# ki/DeliverableVersionAl ki/DeliverableVersionAl
  CAP-DEV-SEMC-001)       l#TMS-DWP-POLITO-004)   l#TMS-DWP-POLITO-005)

  [TMS-DWP-POLITO-006](ht                         
  tp://dev.webinos.org/re                         
  dmine/projects/wp2-2/wi                         
  ki/DeliverableVersionAl                         
  l#TMS-DWP-POLITO-006)                           
  ----------------------- ----------------------- -----------------------

#### Threats to security[¶](#Threats-to-security)

Below are pointed out the main threats to security due to the absence or
malfunction of an access control component:

-   Applications can misuse APIs and abuse of them
    -   Collection / stealing of data resources eg. user private data,
        system data
    -   Tampering of data resources and system components
    -   Denial of service attacks

<!-- -->

-   Remote applications can act as local applications in a device
    -   Threats of the preceding case
    -   Unauthorized remote monitoring
    -   Distributed Denial of service attacks

<!-- -->

-   Users can access to any element of a device
    -   Tampering of widgets to change their behaviour or to introduce
        (malicious) content and possible redistribution of them
    -   Tampering of data resources and system components

<!-- -->

-   Remote attackers can act as local users

<!-- -->

-   Unauthorized users and/or applications can act as authorized ones:
    privilege escalation

#### Related technology[¶](#Related-technology)

##### XACML

XACML (eXtensible Access Control Markup Language) is an OASIS standard
for access control systems that defines a language for the description
of XML access control policies and an architecture to enforce access
control decisions.

![ digraph G { "Access Requestor"[shape=box] node [shape=box,
fillcolor=lightgray, style="filled, rounded"] {rank = same; "Access
Requestor"; "PEP"; "Obligations"} {rank = same; "PDP"; "Context
Handler"; "PIP"} {rank = same; "Resources"; "Subjects"; "Environment"}
{rank = same; "PAP"} "Access Requestor" -\> "PEP" [label="2"] "PEP" -\>
"Obligations" [label="13"] "PEP" -\> "Context Handler" [label="3, 12",
dir=both] "PDP" -\> "Context Handler" [label="4, 5, 10, 11", dir=both]
"Context Handler" -\> "PIP" [label="6, 8", dir=both] "Resources" -\>
"Context Handler" [label="9"] "PIP" -\> "Resources" [label="7a"]
"PIP" -\> "Subjects" [label="7b"] "PIP" -\> "Environment" [label="7c"]
"PDP" -\> "PAP" [label="1", dir=both] }
](/redmine/wiki_external_filter/filter?index=0&macro=graphviz&name=b7339a5420ace5591a89d828c72f27f20eb468f5c1e01c7d65a95cc5f8ac8199)
![ digraph G { "Access Requestor"[shape=box] node [shape=box,
fillcolor=lightgray, style="filled, rounded"] {rank = same; "Access
Requestor"; "PEP"; "Obligations"} {rank = same; "PDP"; "Context
Handler"; "PIP"} {rank = same; "Resources"; "Subjects"; "Environment"}
{rank = same; "PAP"} "Access Requestor" -\> "PEP" [label="2"] "PEP" -\>
"Obligations" [label="13"] "PEP" -\> "Context Handler" [label="3, 12",
dir=both] "PDP" -\> "Context Handler" [label="4, 5, 10, 11", dir=both]
"Context Handler" -\> "PIP" [label="6, 8", dir=both] "Resources" -\>
"Context Handler" [label="9"] "PIP" -\> "Resources" [label="7a"]
"PIP" -\> "Subjects" [label="7b"] "PIP" -\> "Environment" [label="7c"]
"PDP" -\> "PAP" [label="1", dir=both] }
](/redmine/wiki_external_filter/filter?index=1&macro=graphviz&name=b7339a5420ace5591a89d828c72f27f20eb468f5c1e01c7d65a95cc5f8ac8199)

The XACML architecture depicted in the figure is composed of the
following elements:

***Access Requestor***: the entity which requires the capability (2).

***Policy Enforcement Point (PEP)***: the entity that performs access
control, by making decision requests (3) and enforcing authorization
decisions (12). It also try to execute the Obligations (13) and doesn't
grant access if is unable to complete these actions.

***Obligations***: operations specified in a policy that should be
performed by the PEP (13) in conjunction with the enforcement of an
authorization decision. These operations must be carried out before or
after an access is granted.

***Policy Decision Point (PDP)***: the main decision point for the
access requests. It collects all the necessary information from other
actors (5, 10) and concludes an authorization decision (11).

***Context Handler***: the entity which sends a policy evaluation
request to the PDP (4) and manage context-based information (6, 8, 9).

***Policy Information Point (PIP)***: the entity that acts as a source
of attribute values that are retrieved from several internal or external
parties like resources (7a), subjects (7b), environment (7c) and so on.

***Policy Administration Point (PAP)***: the repository for the
policies, it manages policies and provides them to the Policy Decision
Point (1).

***Resources / Subjects / Environment***: parties that provide
attributes to the PIP (7a, 7b, 7c).

##### Known threats to an XACML security architecture

Main threats to XACML - pointed out below - are due to the lack of
confidentiality requirements for what concerns the communication between
XACML's components:

-   Eavesdropping
-   Man-in-the-Middle
-   Message tampering / replay

These threats could be mitigated by mutual authentication and a secure
message transport mechanism in addition to the authorization control.

##### PrimeLife

The PrimeLife project defined extensions to XACML to combine access
control with data handling obligations. Information about PrimeLife are
presented in the Privacy section.

### Specifications[¶](#Specifications)

The details of the policy management architecture are discussed in the
"Security and Privacy" chapter from the "D3.1 System specifications"
([Webinos-D31](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31))
document.

### Future Directions[¶](#Future-Directions)

The main features that will be introduced in the phase 2 of
specification work are:

-   Obligation policies. XACML is capable of describing policies which
    include *obligations* on the requester. This is a useful way to
    implement request logging and notifications.
-   Enhancement of context-based information utilization to define
    fine-grained policies. Contextual data could be used to inform
    policy decisions. However, this raises security and privacy issues
    as the reliability and trustworthiness of contextual data is not
    necessarily high. However, work in the PRiMMA project
    ([PRiMMA](/redmine/projects/t3-5/wiki/Deliverable_References#PRiMMA))
    uses contextual information not to make the access control decisions
    but to change the way users are notified. This may be an interesting
    avenue of further research.
-   Outsourcing of policies and remote policy management. We aim to
    allow users to delegate policy management to a third party (such as
    an anti-virus vendor, service provider or trusted friend) to further
    enhance the usability of the system. This requires introduction of
    *delegation policies* which are a relatively new feature of XACML
    3.0. This direction of work is a primary objective for phase 2 of
    the project.
-   Policy tools. It should be easier to design secure applications if
    better tools are available for people to comply with security
    requirements. In phase 2 we intend to design policy editing tools
    for users and other stakeholders to create and assess policies in a
    user-friendly manner.

Privacy Policy Architecture[¶](#Privacy-Policy-Architecture)
------------------------------------------------------------

### Introduction[¶](#Introduction)

User privacy in webinos is provided by description in human-readable
form how sensitive information in managed; this allows users to limit
tracking of their behaviour.

To achieve these goals, webinos will support two privacy-enhancing
features:

-   Do not track header
-   Subset of P3P in JSON

### Threats to privacy[¶](#Threats-to-privacy)

There are numerous threats to user privacy, many of which are outlines
in Deliverable 2.8. For this deliverable we have focused on the issues
described in the table below:

  --------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Threat**                                                                                    **Possible control**
  Applications given too much personal information                                              Access to user data and APIs must be constrained (see Security API).
  Applications given personal information which is used in an unexpected manner                 Privacy policies are key here to regulating this.
  Weak security controls give applications access to information that users are unhappy with.   Robust security controls
  Personal data is linked and combined in unexpected ways                                       Context data could be misused - this is a key part of the webinos architecture and an opportunity for privacy violations if data are shared inappropriately, provide controls to rectify these issues.
  --------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Requirements[¶](#Requirements)

The following requirements have informed the design of the privacy
mitigations

-   [ID-DWP-POLITO-014](/wp2-2/wiki/DeliverableVersionAll#ID-DWP-POLITO-014)
    The communication between devices at non mutually acceptable
    identity privacy level must be avoided.
-   [ID-USR-POLITO-013](/wp2-2/wiki/DeliverableVersionAll#ID-USR-POLITO-013)
    A user should be able to choose the acceptable identity privacy
    level for other webinos enabled devices that are trying to
    communicate with his own device.
-   [PS-DEV-ambiesense-14](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-14)
    Privacy policies change according to applications and external
    circumstances and should be context-enabled.
-   [PS-DEV-ambiesense-21](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-21)
    An application developer must be able to define and control a
    privacy policy for his or her application that is separate from all
    other applications. Any changes to an existing policy must be
    approved by the end user.
-   [PS-DEV-VisionMobile-11](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-VisionMobile-11)
    webinos applications shall be able to query the webinos user privacy
    preferences.
-   [PS-DWP-POLITO-003](/wp2-2/wiki/DeliverableVersionAll#PS-DWP-POLITO-003)
    Non-necessary information leakage should be prevented to protect
    user privacy.
-   [PS-USR-ambiesense-32](/wp2-2/wiki/DeliverableVersionAll#PS-USR-ambiesense-32)
    webinos shall be able to protect the privacy of each user in line
    with the EU privacy directives.
-   [PS-USR-Oxford-104](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-104)
    The webinos runtime shall mediate during the service discovery and
    apply appropriate controls where not provided by another layer or
    protocol for the purpose of enabling and automating privacy and
    security preferences.
-   [PS-USR-Oxford-115](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-115)
    webinos shall encourage good design techniques and principles so
    users are not forced to accept unreasonable privacy policies and
    access control policies.
-   [PS-USR-TSI-13](/wp2-2/wiki/DeliverableVersionAll#PS-USR-TSI-13)
    Webinos shall provide a mechanism for applications to use
    identifications which safeguard personal privacy needs on one hand
    side but allow data sharing for applications on basis of a general
    profile (e.g. temporary unique ID for a given maximum duration)
-   [PS-USR-VisionMobile-10](/wp2-2/wiki/DeliverableVersionAll#PS-USR-VisionMobile-10)
    webinos shall allow users to express their privacy preferences in a
    consistent way.
-   [PS-USR-VisionMobile-11](/wp2-2/wiki/DeliverableVersionAll#PS-USR-VisionMobile-11)
    webinos applications shall be able to query the webinos user privacy
    preferences.
-   [PS-USR-VisionMobile-12](/wp2-2/wiki/DeliverableVersionAll#PS-USR-VisionMobile-12)
    webinos shall use user privacy preferences when granting/denying
    access to user private information.
-   [D-USR-DT-02](/wp2-2/wiki/DeliverableVersionAll#D-USR-DT-02)
    The webinos system must minimise exposure of personal individual
    identifiers or canonical identifiers of webinos entities.
-   [ID-USR-POLITO-010](/wp2-2/wiki/DeliverableVersionAll#ID-USR-POLITO-010)
    A webinos entity should be able to identify itself to a webinos
    application using an abstraction (such as Pseudonym) that is not
    directly linkable to an existing unique identifier of the entity
    (such as a canonical device id).
-   [ID-USR-POLITO-011](/wp2-2/wiki/DeliverableVersionAll#ID-USR-POLITO-011)
    A user may disable the advertising of its identity to webinos
    components and remote applications.
-   [ID-USR-POLITO-020](/wp2-2/wiki/DeliverableVersionAll#ID-USR-POLITO-020)
    A user Digital Identity should be composed of necessary claims only.
-   [ID-USR-POLITO-103](/wp2-2/wiki/DeliverableVersionAll#ID-USR-POLITO-103)
    Leakage of identity information during authentication must and
    during communication phases should be avoided.

### Background[¶](#Background)

#### Examples of application privacy violations[¶](#Examples-of-application-privacy-violations)

-   "Mobile Apps Invading Your Privacy"
    ([Shields2011](/redmine/projects/t3-5/wiki/Deliverable_References#Shields2011))
-   "More Android Malware Uncovered"
    ([Rooney2011](/redmine/projects/t3-5/wiki/Deliverable_References#Rooney2011))
-   "Android app brings cookie stealing to unwashed masses"
    ([Goodin2011](/redmine/projects/t3-5/wiki/Deliverable_References#Goodin2011))
-   "Wave of Trojans breaks over Android"
    ([Leyden2011](/redmine/projects/t3-5/wiki/Deliverable_References#Leyden2011))
-   "Google Web Store quietly purged of nosy apps"
    ([Goodin2011a](/redmine/projects/t3-5/wiki/Deliverable_References#Goodin2011a))
-   "More security woes hit Apple's iOS"
    ([Farrell2011](/redmine/projects/t3-5/wiki/Deliverable_References#Farrell2011))
-   "Privacy Policies, What Good Are They Anyway?"
    ([Dakin2011](/redmine/projects/t3-5/wiki/Deliverable_References#Dakin2011))

#### Existing technology[¶](#Existing-technology)

Several other large software projects have released guidelines and
roadmaps on privacy. The following references are most relevant:

-   Guidelines from the Tor project for Privacy by Design to avoid
    tracking
    ([Perry2011](/redmine/projects/t3-5/wiki/Deliverable_References#Perry2011))
-   Mozilla Privacy Roadmap 2011
    ([MozillaPrivacyRoadmap](/redmine/projects/t3-5/wiki/Deliverable_References#MozillaPrivacyRoadmap))
-   PRiMMA - Privacy Rights Management for Mobile Applications
    ([PRiMMA](/redmine/projects/t3-5/wiki/Deliverable_References#PRiMMA))
-   PrimeLife - Bringing sustainable privacy and identity management to
    future networks and services
    ([PrimeLife](/redmine/projects/t3-5/wiki/Deliverable_References#PrimeLife))

### Components[¶](#Components)

#### Do Not Track[¶](#Do-Not-Track)

This is an HTTP header that informs a website/application that the user
doesn't want to be tracked. The precise syntax of the header, and the
semantics are still under discussion, and likely to be standardized by
W3C in the near future.

#### Subset of P3P in JSON[¶](#Subset-of-P3P-in-JSON)

This enables the application/website to define what classes of data will
be collected, the retention policy, and who the data will be shared
with. A subset of P3P is chosen to enable easy rendering of policies and
differences between a policy and the user's preferences, as well as a
simple UI for the user preferences. The policy links to a full human
readable policy. Policies can be discovered via an HTTP Link header
and/or an HTML link element. This approach is combined with white/black
lists and a means to consult a third party for an independent
assessment. A proof of concept implementation is available from the
PrimeLife project.

Privacy policies will be directly linked to the application "feature"
requests in the manifest. Each feature tag will have an associated
section in the privacy policy. Privacy policies will be located in an
additional file in the web application package.

#### Privacy and Personal Zones[¶](#Privacy-and-Personal-Zones)

The Personal Zone keeps track of personal information, and needs to
protect this. This builds upon earlier work on synchronizing browser
contexts to give users access to their bookmarks and recorded
preferences when logging into a browser session from a new computer. The
context is stored in an encrypted form (see "Secure Storage"), and care
is needed for the management of the decryption key. For browser context
synchronisation, the key doesn't need to be stored on the server, as the
encrypted data is downloaded by the browser and decrypted locally using
a key derived from the user's credentials. For webinos, you can grant
other people access to personal data held on your Personal Zone Hub
based upon your relationship to that person. The Personal Zone Hub
stores the keys to personal data in an encrypted form as a defense
against the situation where an attacker gains access to the server's
files. This necessitates a bootstrap process where the server first
verifies the integrity of the software used to implement the Personal
Zone Hub, and then passes the Hub's master keys to it in a secure way.

A personal profile might be kept by the Personal Zone Hub as a basis for
ranking matches during a federated search for a given user, where the
search performed collectively by the set of personal zone hubs reachable
from the personal graph for the user initiating the search. The search
process will be designed to preserve privacy by minimizing data leakage.

### Applications that adapt to context[¶](#Applications-that-adapt-to-context)

Applications benefit from being able to access the context describing
user preferences, device capabilities and environmental conditions, as
this enables the application to adapt to changing circumstances. Such
access is subject to prior agreement by the user concomitant with the
application agreeing to data handling obligations as part of its privacy
policy.

### Reviewing and revoking recorded permissions[¶](#Reviewing-and-revoking-recorded-permissions)

Webinos will provide the means for users to review and if desired to
revoke recorded permissions relating to personal data, e.g. access to
the user's location.

### Future directions[¶](#Future-directions)

In future releases of these specifications, webinos authentication and
privacy policies will be able to be informed by social networks and
relationships. For example, one possibility involves users being able to
set access control rules on a personal basis, or on the basis of the
"face" they present to their contacts, e.g. immediate friends, work
colleagues and the general public. In such instances, webinos will be
able to warn users of potential loss of privacy when the same contacts
are present in multiple faces, e.g. when the user posts content to
immediate friends, one of whom is a work colleague.

Authentication and User Identity Management[¶](#Authentication-and-User-Identity-Management)
--------------------------------------------------------------------------------------------

### Introduction[¶](#Introduction)

Webinos aims to be an easy-to-use web application framework. Users will
be able to enjoy services across their devices and application
developers will be able to easily implement distributed applications.
webinos supports developers largely by the features that are in place
which are transparent to the application and its developer. One of these
core features is authentication and establishment of a secure
communication channel. Whenever an application needs to communicate with
a service on another device, the webinos runtime establishes the
authenticated and secure communication channel. The application
developer only needs to access the remote API. The user simply
authenticates to one of their device. After authentication the user can
access any of the services on any of the devices in the personal zone.
Details of this architecture are described in deliverable
[D3.1](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31).
The corresponding authentication API is described in deliverable
[D3.2](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D32)

This section focuses on the reasons for authentication architecture
decisions, security considerations and further work yet to be done in
phase II.

### Background[¶](#Background)

Authentication on the web is pretty much left to the web application
developer. It is one of the features which are to be built in
applications. This requires application developers to deal with
identification, authentication, session management and access control.
However, poorly implemented authentication mechanisms and session
management are often reasons for attacks which even draw the attention
of mass media as often large amount of personal user data was stolen. On
the [OWASP Top
10](/redmine/projects/t3-5/wiki/Deliverable_References#OWASP-Top10) of
vulnerabilities of web application, broken authentication and session
management are the top 3. Authentication on the web needs to be improved
in many ways:

-   implementation for the developer needs to be simplified,
-   the developer still has to keep control of authentication if desired
    to tightly adjust authentication to the application's needs,
-   users should no longer be bothered with memorising passwords,
-   users should be informed at any time about their current
    authentication state, and
-   single sign-on (SSO) should be provided for users

Designing such an authentication architecture while retaining the
flexibility needed by vast kinds of applications is challenging. Webinos
approaches this challenge in two steps: first, a webinos-internal
authentication mechanism is designed, second, a authentication mechanism
for services on the open Internet will be designed. At the current stage
of the webinos project, the former has been specified and described in
deliverable
[D3.1](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31).
The latter will be defined in phase II of the project. However, a
high-level architecture is already discussed in
[D3.1](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31),
too.

In webinos, any device can not only act as a client by running a web
application. It can also provide a service at the same time. Services
shall be shared among various devices within webinos. Some of these
devices belong to the same user, others belong to other users. For ease
of use, the overlay network and the discovery service have been
introduced in webinos. They allow the user to easily access services
without the need to know by which devices they are provided and to which
network the devices are connected at the time of usage. Conceptually,
the personal zone has been introduced to define the boundary within
which all devices of the same user can communicate freely using webinos.

The webinos-internal authentication mechanism has been designed to suit
the concept of the personal zone and to be easy to use for users and for
application developers. We deliberately decided to not involve a central
third party in the webinos-internal authentication who can issue and
validate certificates. Having a large public key infrastructure (PKI)
within webinos has three major drawbacks:

1.  it won't scale as any other global PKI does not scale,
2.  it is difficult to determine who should act as certification
    authority for individual users in an open source setting as the one
    of webinos, and
3.  certificate revocation cannot be determined when devices have no
    connection to the open Internet.

As a consequence, it has been decided that each Personal Zone Hub (PZH)
in webinos also acts as the certification authority (CA) for the
personal zone. All devices within the zone possess their own
certificate, issued by the PZH, and they possess the self-signed
CA-certificate of the PZH. Thus each device can validate zone membership
of another device.

When devices of two different personal zones ought to communicate, the
two PZHs of the two involved personal zones need to exchange their
self-signed certificates. Once a PZH caches the certificate of another
PZH, the personal zone of the other PZH is considered trusted.
[D3.1](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31)
describes in detail how such a trust relationship is established.

In fact, each personal zone has its own small PKI. Due to the small
number of devices in a zone and due to the small number of trust
relationships, this kind of certification scales in terms of number of
issued certificates within webinos. However, this webinos-internal
authentication will not work as soon as users are to be authenticated to
services on the open Internet. These services may not be webinos-enabled
and they may not implement the concept of the personal zones. Therefore
in phase II of the webinos project, the authentication mechanism for the
open Internet will be specified. Its purpose is to authenticate the user
to the PZH and to provide means within the PZH to perform SSO with the
service on the open Internet. It is planned to utilise standardised
technologies (e.g. OpenID and OAuth) to achieve that. It is likely that
these technologies are to be extended in order to achieve secure and
easy-to-use authentication on the Internet.

We have decided that in webinos the personal zone represents the user.
Any device or application which is doing something (e.g. communicating
with another device) does this by identifying its personal zone to which
it belongs. Since the user is related to the personal zone, there is a
relation between the user and the applications. The applications and
devices actually act on behalf of the user and represent the user in the
digital world by the certificates which are issued by the PZH. For
intra-zone and inter-zone communication, this is the desired effect. All
the users wish to know who is behind the device or application which
communicates with them. This is the basis on which trust relationships
are established in webinos when personal zone certificates are
exchanged. It follows the idea that people are communicating and they
want to share their devices and applications remotely to improve quality
of their communication.

With that in mind, the idea of using social relations/social proximity
as one factor of identification of users is straightforward. The only
crucial point in this architecture is that users indeed verify that a
device which claims to be the one of a particular user actually belongs
to this user. This is done during exchange of the self-signed
certificate of the PZHs.

For authentication on the open Internet, this is different. There, the
certificate of the PZH cannot be validated. There is the need of
involving established identity providers. Users will be allowed to
combine their existing identifiers with the SSO feature of webinos. No
user will have to create new identifiers when introducing webinos.
Furthermore, the user may not want to reveal the identity. This is why
we will also investigate the use of pseudonyms and partial identities
for authentication.

### Threats to Security[¶](#Threats-to-Security)

The strength of the identification and authentication architecture of
webinos is that it is usable and secure at the same time. However, as
every new architecture, it brings some weak parts which have to be
considered particularly when further detailing the deign and when
implementing it. This subsection enumerates and discusses them, while
the next subsection describes how we plan to address them in the next
design improvement iteration in phase II.

It may be argued that the manual establishment of trust relations
between personal zones by exchanging certificates of the PZH may be
weak. There is no technical or automated means to validate a
certificate. It is up to the user to accept a certificate as valid. Many
users may just click *yes* when they are asked if they wish to trust
this certificate. In the contrary, we believe that the list of
pre-installed certificates in the web browser is as good or bad as the
manual validation. An attacker could easily add own certificates and
provide the manipulated browser for download and some of the simple
certification authorities whose certificates are included in the browser
by default do not have a strong validation of identities when issuing a
certificate. Our concept leaves the decision to the user, making the
user a\
responsible entity in the system. Like in real life, it is up to the
user to determine who they trust. For that to work, they are not
required to understand the complex matter of certificates and PKI. They
always can use any preferred channel to verify with their communication
partners, who are real persons, such as family members or friends, if
both see the same certificate. That's all.

The PZH and the PZP are sensitive components of the webinos
architecture. If an attacker manages to add additional certificates in
the trusted users cache on a PZP or to break into the PZH and issue new
certificates with its CA functionality, the attacker can make the user
to access one of the attacker's service by believing it is the user's
service and the attacker can impersonate as the user by possessing a
device which is assumed to belong to the user. To avoid this, a couple
of requirements MUST be fulfilled:

-   The code base of the PZP and the PZH needs to be as small as
    possible. Both shall only provide necessary features. The smaller
    the code base is the easier it can be verified for correct
    implementation.
-   Specification of the architecture details, the protocols and the
    implementation are to be performed with greatest possible care. See
    the [Security and Privacy
    Guidelines](/redmine/projects/t3-5/wiki/Deliverable_Guidelines)
    section.
-   Sensitive data, such as the certificates of PZHs and private keys
    need to be stored in a tamper-resistant module. Preferably, this
    module is a separate hardware component in the device.
-   Each webinos-enabled device must fulfil the requirements stated in
    the *Specification – Authentication and Identity* section of
    deliverable
    [D3.1](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31).

In webinos, users are authenticated by the devices. Since there is a
broad variety of devices, there is no pre-defined authentication
mechanisms. However, devices shall implement user authentication in a
way that it is strong and reliable and difficult to forge. All in all,
the strength of user authentication in a personal zone is defined by the
device with the weakest authentication mechanism.

### Future Directions[¶](#Future-Directions)

As previously mentioned, in phase II, webinos will have to improve the
design of some of the components from security perspective. These are
enumerated in this subsection. Each paragraph is devoted to one issue.

The authentication on the open Internet will be further detailed. From
the high level design which exists right now, it will be brought to
detail by trying to utilise existing technologies which are established
on the web as much as possible. But we also expect to contribute a new
form of user authentication for the Internet to close the gaps we
identified in this section.

The process of installing the PZP on a device is to be specified in more
detail. No room for attackers shall be left which would allow them to
forge a component during PZP installation in order to avoid that the
attacker can take control of the PZP. A further issue to be decided is
which identifiers of a device (e.g. MAC address, Bluetooth address)
should be mentioned in the certificate of the device in order to tightly
bind the certificate to the device. Tamper-proof binding of the device
to the certificate and privacy concerns need to be balanced.

When a device is lost or stolen, the user has to have the chance to
revoke certificates issued by the PZH and to remotely erase the
certificates and keys on the lost/stolen device. Mechanisms and APIs
will be provided to implement these features. Certificate revocation
also includes notification of all the PZHs which have received the
revoked certificate in the past. Expiry and short-lived certificates may
support this.

Real time communication on mobile devices may require to skip integrity
verification on the secure channel which is set-up by the use of TLS
whenever devices communicate in webinos. Like in the mobile industry
(2G, 3G radio network), for quality of service, there is no integrity
protection on the radio link for voice connections. From security
perspective this is discouraged, as it opens new attack vectors.
However, if it turns out in practice that this is required for
reliability and quality of the real time streams, it has to be
considered.

It is yet to be defined how a user registers with webinos. When a user
establishes one’s personal zone, the PZH has to be installed, the CA has
to be launched and the user shall be the only entity to have access to
most of the PZH features. How all this is bootstrapped will be defined.
Further to that, in case a user loses his device and he only had that
one in the zone, how a new device is added to the already fully
configured zone will be defined.

User authentication is currently only discussed for devices which the
user actively uses (e.g. a mobile phone). However, there are others
which permanently run services without users being
authenticated/logged-in. In the latter case, the PZP needs access to the
private key even without user authentication just from the point in time
where the device was added to the zone. It will be a task of phase II to
elaborate upon this feature.

Runtime Authorisation and User Interfaces[¶](#Runtime-Authorisation-and-User-Interfaces)
----------------------------------------------------------------------------------------

### Introduction[¶](#Introduction)

One aspect of security architectures which is often overlooked is the
process of authorisation: obtaining consent from the user for a
particular action. This involves logical processes as well as graphical
user interfaces. This section does not provide precise implementation
guidelines but specifies the data that will be presented to users during
authorisation and gives examples. This work relates heavily to the
[design
principles](/redmine/projects/t3-5/wiki/Deliverable_introduction#Key-Design-Principles-for-Security-and-Privacy).

This section of the deliverable primarily refers to *runtime user
authorisation*: that is, it does not cover purely policy-dictated
decisions or those based on certificates. in addition, identity
management and log-in/log-out events are not covered here.

### Background[¶](#Background)

#### Requirements[¶](#Requirements)

The following security and privacy requirements from
([Webinos-D22](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D22))
are related to this part of the platform.

-   [PS-DEV-ambiesense-25](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-25)
    : The webinos runtime shall protect policies from tampering or
    modification by unauthorised applications. The only authorised
    applications shall be from signed, trusted sources, which may be
    defined by the manufacturer, network provider, or end user.
-   [PS-DEV-IBBT-004](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-IBBT-004)
    : A publish-subscribe system for event shall exist which requires
    authorisation for application subscriptions. webinos should provide
    a policy system regarding events.
-   [PS-USR-ISMB-036](/wp2-2/wiki/DeliverableVersionAll#PS-USR-ISMB-036)
    : The webinos runtime shall support the download, install, update,
    and removal of security policies. These operations shall required
    authorisation by the user and policies must be checked for
    authenticity and integrity.
-   [PS-USR-Oxford-101](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-101)
    : The user should be able to allow detection of sensors/actuators
    only to authenticated and authorised entities and shall be able to
    prohibit detection.
-   [PS-USR-Oxford-103](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-103)
    : The webinos Runtime Environment shall only allow associations to
    be made between devices when predefined network security practices
    are followed, including transport level security, device
    authentication and user and device authorisation.
-   [PS-USR-Oxford-120](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-120)
    : A webinos Cloud shall determine the services a webinos Device is
    authorised to use before providing access to its services.
-   [PS-USR-Oxford-67](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-67)
    : webinos shall remove access to any additional authorisation
    credentials when a user logs out.
-   [NC-DWP-POLITO-007](/wp2-2/wiki/DeliverableVersionAll#NC-DWP-POLITO-007)
    : The webinos runtime must be able to provide information to
    authorised applications about device physical features. Some
    examples are screen resolution and size, number of audio
    input/output channels, microphone availability, touch screen
    support, proximity.

Based on these requirements and the rest of the specification,
authorisation is required for the following actions:

-   installation and execution of applications;
-   application actions, including:
    -   use, storage and disclosure of application data;
    -   use of device features;
    -   querying device specifications, including supported media
        formats and platform software state;
    -   use, storage and disclosure of contextual user data;
-   granting particular end users access to applications and services;
-   installation and use of policies;
-   the destination of webinos event messages (primarily devices and
    applications);
-   the installation and selection of signing authorities;
-   updating applications and policies; and
-   device and service discovery/detection.

The majority of these do not present any obvious challenges to the user,
or are out of scope of this phase of webinos development (policy
editing, selecting signing authorities). However, in the following
section we identify several areas where some data is expected to be
presented to the user.

We have not considered unauthorised copying and distribution of
applications in this phase of the security architecture, as per
[PS-DEV-ambiesense-02](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-02)
.

#### Related technology and research[¶](#Related-technology-and-research)

##### GUIs from Android:

![](/redmine/attachments/download/616)
![](/redmine/attachments/download/617)
![](/redmine/attachments/download/618)

##### GUIs from iOS

![](/redmine/attachments/download/619)
![](/redmine/attachments/download/620)

### Threats and challenges[¶](#Threats-and-challenges)

Authorisation is used to mitigate threats where entities (applications,
users, devices) attempt to perform an undesirable action. The main
challenges associated with runtime authorisation is usability:
presenting users with enough information to make informed decisions at
runtime (informed consent) while not overloading them with too many
decisions. The result of requiring too many authorisation decisions is
potentially to train users to always select the same "yes" or "no"
response regardless of the situation.

Authorisation decisions may also be cached by the system, an example of
which is the the "sudo" command in some UNIX operating systems. The
caching of these decisions may result in undesired behaviour unless this
is managed appropriately.

### Authorisation User Interfaces[¶](#Authorisation-User-Interfaces)

#### Install-time authorisation[¶](#Install-time-authorisation)

We do not specify the precise interface that must be implemented by the
webinos runtime, as this may differ slightly on each platform. However,
the following example demonstrates our expectations:

![](/redmine/attachments/download/693)

Note that the key difference between this example and that on Android is
that fine-grained permissions can be granted or denied on a
per-permission basis. Furthermore, each permission can state details
about why it is requested and what will happen to the data given to the
application.

#### Inter-device authorisation[¶](#Inter-device-authorisation)

Another place where authorisation will occur is when two devices in
different personal zones attempt to use each others' resources. This is
discussed in the authentication section of Deliverable 3.1.

#### GUIs for authorising discovery and controlling identity[¶](#GUIs-for-authorising-discovery-and-controlling-identity)

While not strictly just to do with authorisation, many requirements
specify that users should be able to control whether their device is
visible and discoverable to others. Similarly, users often assume that
controls on location data are quickly available. The following
interfaces demonstrate our expectations:

![](/redmine/attachments/download/711)

The above example shows the interface presented to the end user when
they are logged in and have made certain online identities available.

![](/redmine/attachments/download/710)

The above example shows a more sophisticated interface presented to the
user who wants to remain anonymous and turn off location and device
discovery.

#### GUIs for identifying application data usage[¶](#GUIs-for-identifying-application-data-usage)

Following the principle of "not obscuring actual information flow"
([Lederer04](/redmine/projects/t3-5/wiki/Deliverable_References#Lederer04)),
we have also considered our expectations of GUIs for showing application
behaviour.

![](/redmine/attachments/download/712)

### Future directions[¶](#Future-directions)

The proposed solutions still have many security and privacy issues.
Firstly, it is unclear whether authorisation dialogues can provide
sufficient information so that *informed consent* is practical. If not,
users will be forced to make decisions without the knowledge they need
to make the right choice. This is fundamental to privacy and a major
problem that webinos aims to avoid. It is expected that further
modification to GUIs will be necessary to get this right.

Another common problem in security and usability is that runtime
authorisation is used inappropriately. Often the runtime must make a
decision about whether to trust another entity (a device, application,
network) and this is pushed to the user who is not able to make a
reasonable choice and will always chose the most convenient option.
Runtime authorisation must occur infrequently and the user must be
reasonably likely to chose to *not* authorise a decision, otherwise it
serves little purpose. To this end, we intend to try and take advantage
of the related research in the PRIMMA project
([PRiMMA](/redmine/projects/t3-5/wiki/Deliverable_References#PRiMMA))
investigating the use of the most appropriate notification system for
user privacy decisions.

Privileged Applications[¶](#Privileged-Applications)
----------------------------------------------------

### Introduction[¶](#Introduction)

A Privileged application is an application that has full access to the
webinos runtime and can use non-public APIs. It can potentially access
and modify standard system controls (policies) and check for specific
user IDs (UIDs), group IDs (GIDs), authorizations, or privileges.
Privileged applications and services in webinos are necessary for the
following situations:

1.  To modify and view security and privacy policies
2.  To modify and view stored context data
3.  To create applications which take advantage of non-public webinos
    APIs. These applications should become non-privileged as soon as the
    APIs are published
4.  To access system commands and classes which manage OS services and
    other sensitive data.
5.  Monitoring system activity and report errors for debugging.

This section describes additional security aspects in the area of
privileged applications and services.

### Background[¶](#Background)

This section includes the technical use cases and requirements
identified from the
([Webinos-D22](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D22))
and
([Webinos-D21](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D21))
in the area of Privileged Apps and Services.

#### Related User Stories[¶](#Related-User-Stories)

WOS-US-7.1: Designing Policy-aware webinos Applications\
WOS-US-7.4: Privacy Controls and Analytics for Corporations and Small
Businesses

#### Related Use Cases[¶](#Related-Use-Cases)

-   WOS-UC-TA8-002: Interpreting policies and making access control
    decisions
-   WOS-UC-TA8-003: Enforcing multiple policies on multiple devices
-   WOS-UC-TA8-007: Policy authoring tools
-   WOS-UC-TA4-013: Dynamically Sharing Content with other Users in a
    Controlled Manner
-   WOS-UC-TA1-008: Webinos Federation
-   WOS-UC-TA4-014: Continuous sharing of a medical file through webinos
    enabled devices
-   WOS-UC-TA7-008: Create contexts from a pre-defined template

#### Related Requirements[¶](#Related-Requirements)

This section of the specification aims to satisfy (partially) the
following requirements:

-   [PS-USR-Oxford-50](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-50)
    : Users shall be provided with the ability to identify applications
    which have been granted particular privileges.
-   [PS-USR-Oxford-51](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-51)
    : Users shall be able to view a list of all of their webinos
    applications and show the authority that certified the application.
-   [PS-USR-Oxford-116](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-116)
    : The webinos Runtime Environment shall protect applications and
    itself from potentially malicious applications and shall protect the
    device from being made unusable or damaged by applications.
-   [PS-DWP-ISMB-202](/wp2-2/wiki/DeliverableVersionAll#PS-DWP-ISMB-202)
    : The webinos runtime must ensure that an application does not
    access device features, extensions and content other than those
    associated to it.
-   [PS-USR-Oxford-35](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-35)
    : webinos access control policies shall be able to specify
    fine-grained controls involving the source and content of an access
    control request.
-   [PS-USR-Oxford-38](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-38)
    : webinos shall allow policies which specify confirmation at runtime
    by a user when an access request decision is required.
-   [PS-USR-Oxford-115](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-115)
    : webinos shall encourage good design techniques and principles so
    users are not forced to accept unreasonable privacy policies and
    access control policies.
-   [PS-USR-Oxford-72](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-72)
    : The webinos system shall support applications which apply access
    control policies to data produced or owned by the application
    developer. These policies may support revocation of access control
    policies.
-   [PS-USR-Oxford-36](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-36)
    : webinos APIs shall provide error results when an access control
    request is denied.
-   [PS-USR-Oxford-34](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-34)
    : webinos shall provide complete mediation of access requests by
    applications and enforce all policies.
-   [PS-USR-Oxford-17](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-17)
    : The webinos Runtime Environment shall be capable of setting
    dynamic access control policies for device data when initiating an
    association to another webinos Device.
-   [PS-DEV-Oxford-28](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-28)
    : The webinos Runtime shall provide access control for context
    structures with user-defined policies.

### Threats[¶](#Threats)

The main threats caused by privileged applications are the following:

-   A *malicious* privileged application could be installed and then
    take control over all aspects of the personal zone. This could
    perform denial of service attacks, steal identity information or
    perform other undesirable activity.
-   An unprivileged application takes advantage of a privileged
    application on the system to access resources and data it should not
    have access to.
-   A privileged application unintentionally exposes private or
    confidential data.

The threats from privileged applications are significant, as discussed
in the following quote:

> ' "As with Windows, the most infected computers are those on which
> users have administrator privileges, the greatest risk of infection is
> faced by those Android systems which have been jailbroken," Kaspersky
> analyst Yury Namestnikov. "Mobile malware communicates with its owners
> using a method that is widely employed by Windows malware – via
> command-and-control centers, which will ultimately lead to the
> emergence of mobile botnets," he adds.'
> ([Leyden2011](/redmine/projects/t3-5/wiki/Deliverable_References#Leyden2011)).

### Security Policy settings for privileged applications[¶](#Security-Policy-settings-for-privileged-applications)

Webinos supports two tiers of access for applications. Normal
applications are capable of anything their XACML policies say they are
capable of doing, which is restricted to accessing only public APIs
defined in
([Webinos-D32](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D32)).
Privileged applications, on the other hand, are capable of accessing any
internal functionality of webinos, including native code execution,
access to secure storage, and more.

A privileged application, like any other webinos application, is signed
by a private signing key. This key must have a certificate held on the
device in and marked in the system policy as being valid for privileged
applications. It is expected that on many devices the only privileged
applications may be those issued by the original manufacturer or network
operator.

When an applications is installed, webinos will mark some applications
as privileged. The rules and impact of doing so are defined as follows:

-   Applications signed with a certificate from the an authority deemed
    to be capable of giving full privileges (i.e. one who's certificate
    is marked by the policy as being allowed to do so) can execute with
    privileged permissions and therefore have full access to the webinos
    device.
-   All other applications run with normal permissions. Applications
    running with normal permissions are constrained by policies, but
    this may allow them to read from protected areas of the personal
    zone storage, and read contents of files stored by the PZP. They
    cannot write to policies, system files, or execute native code.
-   Privileged applications on one device in a personal zone are not
    allowed to have full privileges on another in-zone device. However,
    they are permitted to modify policies and synchronised settings, so
    they can potentially do this if necessary.

### Future Directions[¶](#Future-Directions)

Privileged applications are a necessity in application environments such
as webinos. However, they have a significant risk and should be avoided
where possible. The main focus in the future will be on developing
mitigation strategies for dealing with privileged applications,
including further monitoring, reporting and access control restrictions.
At the same time, the reasons for developing a privileged application
will be removed by exposing more public API functionality (so that
normal applications are able to do more) and improving support for
extensions so that native capabilities are implemented there.

Secure Storage[¶](#Secure-Storage)
----------------------------------

### Introduction[¶](#Introduction)

This section describes conceptual components and threats for securely
storing data in the PZP/PZH. PZP data will be stored locally on the
device and, for PZHs, will be stored in the cloud. Data on both nodes
need to be secured and managed from all threats. The information related
to user identities, key, certificates and password are the one that need
to be guaranteed most of secure storage in the webinos platform.

Functional aspects relating to storage are illustrated in Deliverable
2.1. In some scenarios, it is explicitly mentioned and, in some cases,
assumed that storage is secure during the event flows. The section below
highlights the relevant use cases and user stories.

The API's required for accessing this section are expected to be covered
in Phase 2. The components defined in this section are recommendations
and could be considered during platform implementation.

### Background[¶](#Background)

#### Related User Stories[¶](#Related-User-Stories)

-   WOS-US-2.2: Creating Applications for webinos
-   WOS-US-3.1: Content Sharing Service
-   WOS-US-4.2: Ordering a Video-on-Demand Film
-   WOS-US-5.1: Context Sensitive Triggering

#### Related Use Cases[¶](#Related-Use-Cases)

From WP2.1 Use Case Deliverable

-   WOS-UC-TA4-005: Progressive Download and Store Content in a Secure
    File Storage
-   WOS-UC-TA4-020: Content Sharing and Storage
-   WOS-UC-TA8-012: Local storage of credentials

#### Requirements[¶](#Requirements)

From the Requirements page

-   [PS-DEV-Oxford-86](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-86)
    : The webinos runtime shall support the confidential storage of user
    credentials using usernames and passwords.
-   [PS-USR-Oxford-59](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-59)
    : The webinos runtime environment shall securely store application
    data to prevent disclosure to unauthorised entities.

Requirements for Secure Storage at Personal Zone Proxy/Personal Hub

-   User policies: To store user policies so that they are available
    when user connects to the device
-   User Authentication details: Keys, certificates and password
-   User device details: List of user devices
-   User friend’s list and device information
-   Atomicity of data if updated via user or personal hub based on
    synchronization techniques.
-   If device is shared between multiple users, then storage should not
    be accessible to other user.
-   Context data and analytics data
-   Network storage and photo storage that user uses to store data in
    cloud.

### Components[¶](#Components)

Two most important aspects of storage are file system and key exchange
between devices. File system security is controlled via access control
list and encryption mechanism used to control different file system
area. Key exchange is more about private key and synchronization between
PZP and PZH.

#### Encrypted file system[¶](#Encrypted-file-system)

Traditionally file systems are hierarchically structured stored in the
form of trees. Based on the tree structure, access to different areas is
controlled by access list control mechanism. To be secure, webinos
should aim to provide both access control and encryption mechanisms.

webinos sits on top of underlying OS and the area of the memory
available should be access controlled depending on user and application
usage. Suggested levels of access control to webinos memory area:

-   Unsecured (but still not public): Any application can use this
    memory location where data stored is not required to be secured.
    External user will not be able to access this memory location but
    memory area will not be encrypted.
-   App-specific secure storage: Context data related to the
    application, data collected as part of analytics or any other
    application data can use this storage area. Data security in this
    section is application responsibility. This storage should not allow
    someone scanning memory to collect application collected data. The
    encryption mechanism that application developer can use to secure
    storage in this area will be based on Security Cryptography API's.
-   Webinos platform secure storage: Storage area to store XACML
    policies, user credentials, keys and password. The security for this
    area should be highly secured and access to this area should be user
    credential control. The cryptographic mechanism used will be highly
    secure, and the webinos platform is responsible for secure data
    storage.

The file system architecture implementation is dependent on the
underlying OS and device. Depending on the implementation, the access
control mechanism and encryption specific support to different memory
area should be supported.

#### Key Exchange and Synchronization[¶](#Key-Exchange-and-Synchronization)

Keys and certificates stored in PZP need to be exchanged with PZH. As
part of authentication, keys are exchanged based on a public / private
key mechanism. Private keys that will be used will be securely stored
locally in user devices. Sending devices will send public keys and user
details that a private key can use to decrypt key data. More details
about the private and public key usage are specified in [Authentication
Specification](/wp3-1/wiki/Spec_-_Authentication).

PZH will act as a point for storing relevant data securely for each
device. Synchronization needs to take place when a device connects to
PZH or when there is some context data. As part of webinos platform,
secure storage, certificate or password information might need to be
updated between PZP and PZH.

In order to support webinos, the platform shall guarantee that device
exchanging details are connected securely over TLS, and the user is
securely authenticated with the device. All the data exchanged will be
encrypted using cryptographic mechanism used while authenticating.

### Security and privacy issues[¶](#Security-and-privacy-issues)

Some of the identified security issues and solutions for secure storage
are listed below:

-   Loss/Forgotten Keys: In public private key infrastructure, the
    user's private key plays an important role for authenticating. If a
    user loses or forgets this key then the user will have problem
    authenticating with webino. To handle this, webinos should support a
    forgetten key retrieval mechanism such as the use of mobile phones
    to retrieve password, or PINs sent via SMS to generate new password.
-   Hardware attacks: Lost devices should not diverge user identities,
    password and certificates. To support this, webinos platform will
    require user authentication with device and shall provide cloud
    based service to revoke password and certificate stored in this
    device. Access to secure storage will require credentials.
-   Synchronisation to device with lower encryption capabilities: In
    case devices authenticate with the lower encryption supported
    devices, these need to guarantee that data exchange supports a
    minimum of Digest-MD5 encryption capability.

### Future directions[¶](#Future-directions)

The second phase of webinos development will consider further secure
storage issues. An important feature requiring more work is the
revocation of keys used for encrypted storage. In particular, corporate
use cases require the removal of confidential company data if the device
is lost or stolen. Many existing mobile phones contain this capability,
including Android and RIM, and webinos could provide this on other
devices such as TVs and cars which may otherwise be forgotten.

A further issue is the policies governing the synchronisation of
confidential data. In some cases, applications may want the ability to
synchronise their data store between user devices. However, some data
may be marked so that it is not shared with less-secure devices.
Furthermore, synchronisation policies may govern exactly how some data
is allowed to be stored on each device (e.g. encrypted, using secure
hardware).

Digital Rights Management is another capability we would like to expose
to webinos applications, and the best way of doing so should be included
in phase two of the deliverable to satisfy several ecosystem
requirements.

Finally, we would like to take advantage of the hardware-based
cryptography which exists on some platforms (e.g. the Trusted Platform
Module on the PC) to provide hardware-backed secure storage. This would
allow the device to protect itself from the loss of data even when
malicious software is present or a custom ROM is installed. It would
also increase the security available for a digital rights management
system.

Security for Extensions[¶](#Security-for-Extensions)
----------------------------------------------------

### Introduction[¶](#Introduction)

Webinos extensions will be based on the NPAPI Standard; this raises
several security risks which have to be reflected in the webinos
security architecture. The architecture has to balance the security of
the whole system on the one side and the flexibility of extensions on
the other. An extension requires access to the underlying operating
systems by definition, but breaks the natural sandbox of the browser
runtime.

### Background[¶](#Background)

#### Requirements[¶](#Requirements)

The requirements for the extensions handling focus on the secure
execution of applications (known behaviour of the application), the user
awarness of the functionality and risks exposed by extentsions and the
possibility of the user to control the access to extensions. These
requirements apply to the some extend to the generic access of device
resources.

This section of the specification aims to satisfy (partially) the
following requirements:

-   [PS-USR-Oxford-17](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-17)
    : The webinos Runtime Environment shall be capable of setting
    dynamic access control policies for device data when initiating an
    association to another webinos Device.
-   [PS-USR-Oxford-106](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-106)
    : When installing or using an application for the first time,
    webinos shall make sure that the user trusts the source of the
    application.
-   [PS-USR-Oxford-116](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-116)
    : The webinos Runtime Environment shall protect applications and
    itself from potentially malicious applications and shall protect the
    device from being made unusable or damaged by applications.
-   [PS-DEV-ambiesense-25](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-25)
    : The webinos runtime shall protect policies from tampering or
    modification by unauthorised applications. The only authorised
    applications shall be from signed, trusted sources, which may be
    defined by the manufacturer, network provider, or end user.
-   [PS-DWP-ISMB-202](/wp2-2/wiki/DeliverableVersionAll#PS-DWP-ISMB-202)
    : The webinos runtime must ensure that an application does not
    access device features, extensions and content other than those
    associated to it.
-   [PS-USR-Oxford-53](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-53)
    : webinos policies shall be capable of referring to and specifying
    restrictions on device capabilities and features, application data,
    context and personal information held in webinos, and access to
    other devices and applications.
-   [PS-USR\_DEV-Oxford-44](/wp2-2/wiki/DeliverableVersionAll#PS-USR_DEV-Oxford-44)
    : Applications shall specify at install time (or first use) the
    functionality they require access to.
-   [PS-USR\_DEV-Oxford-45](/wp2-2/wiki/DeliverableVersionAll#PS-USR_DEV-Oxford-45)
    : Users shall be able to specify at application install time (or
    first use) which functionality they permit an application to have
    access to.
-   [PS-USR\_DEV-Oxford-46](/wp2-2/wiki/DeliverableVersionAll#PS-USR_DEV-Oxford-46)
    : Applications shall request for access rights to any device feature
    or policy-controlled item prior to accessing it. If an access
    request is denied, applications shall be notified to deal with this
    gracefully.

#### Related technology and research[¶](#Related-technology-and-research)

Browser vendors have integrated mechanisms to secure the usage of NPAPI
plug-ins:

-   Chrome and Firefox are using a built-in generic NPAPI plug-in for
    identifying missing but required plug-ins. As a back-end
    infrastructure for this; Mozilla and Google maintain a repository
    for trusted NPAPI plug-ins
    ([MozillaPluginDirectory](/redmine/projects/t3-5/wiki/Deliverable_References#MozillaPluginDirectory)).
    The generic plug-in queries the hosted directory for a trusted
    plug-in supporting the unknown MIME-Type, downloads the binary and
    stores the plug-in binary inside the common plug-in folder of the
    device to enable the usage by the browser.

<!-- -->

-   For Chrome extensions embedding NPAPI plug-ins inside extension
    package, Google does not publish the extension on their Chrome app
    store until the extension has been tested against malicious
    behaviour of the NPAPI plug-in.
    ([ChromeNpapiExtensions](/redmine/projects/t3-5/wiki/Deliverable_References#ChromeNpapiExtensions))

<!-- -->

-   Furthermore, Google introduced the Native Client (NaCl) to enable
    the secure execution of native code inside the browser environment.
    But this concepts reduces the possible functionality of an extension
    significantly
    ([GoogleNativeClient](/redmine/projects/t3-5/wiki/Deliverable_References#GoogleNativeClient)).
    The NaCl runtime prohibits all access to OS services (e.g. network
    or file system).

<!-- -->

-   The Firefox add-on "NoScript" illustrates how the user can enable or
    disable specific plug-ins for certain origins (protocol, domain,
    port) depending on his choice.
    ([NoScript](/redmine/projects/t3-5/wiki/Deliverable_References#NoScript))

#### Threats[¶](#Threats)

NPAPI's unrestricted access to operating system - which is needed to
enable extensions in webinos - introduces infinite security risks, such
as:

-   Manipulation of the file system
-   Access to sensitive data
-   Uncontrollable network access

### Components[¶](#Components)

#### The application installer[¶](#The-application-installer)

For extensions that are part of the application package the application
installer verifies the signature of the package and allows or disallows
the installation of application including the plug-in accordingly.
Furthermore the application installer informs the user of the potential
security risks and enables the user to prohibit the installation of the
plug-in (defining policy). After the integrity of the application has
been verified and the user has approved the installation of the
application, the installer extracts the platform relevant NPAPI binary
from the application package and stores it inside the common plug-in
folder of the browser.

![ title installation handling of a webinos application including
extensions (\*) --\> "checking if application manifest contains plugins"
if "" then --\>[yes] "check application signature" if "" then --\>
[valid] "checking if platform is supported" if "" then --\> [true]
"check if policies for plug-in installation exists" if "" then --\>
[true] "check if installation is allowed" if "" then --\> [notallowed]
"continue with regular installation" else --\> [allowed] "store plugin
binary in the rendering engine specific folder" else --\> [ask] "request
permissions from user for installation of extensions" endif else --\>
[false] "request permissions from user for installation of extensions"
if "" then --\> [allowed] "create policy for extensions usage of
specific application" --\> "store plugin binary in the rendering engine
specific folder" --\> "continue with regular installation" else --\>
[notallowed] "create policy for disabling extensions for the specific
application" --\> "continue with regular installation" endif endif
else --\> [false] "continue with regular installation" endif else --\>
[invalid] "abort installation of plugins and inform user about invalid
signature" --\> "continue with regular installation" endif else --\>[no]
"continue with regular installation" --\> (\*) endif
](http://dev.webinos.org/redmine/wiki_external_filter/filter?index=0&macro=plantuml&name=363a51467ebeed557c31d7b31130f246f92ed6a6afcf1c832278438b0655782a)

#### The application launcher[¶](#The-application-launcher)

The application launcher checks the application manifest and the
policies files regarding the usage of the extension and enables the
access to the plug-ins accordingly. The access to extensions is disabled
by default.

#### Secure storage for certificates[¶](#Secure-storage-for-certificates)

The secure storage is used to store the relevant policies and
certificates for the installation and execution of webinos extensions.

#### Application packaging: manifests and resources[¶](#Application-packaging-manifests-and-resources)

Inside the manifest the embedded plug-ins are defined, see
([Webinos-D31](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31))
for more details.

### Future directions[¶](#Future-directions)

The current security concept focuses on the installation and execution
of verified plug-ins. Once the plug-in is installed it has the unlimited
the access to operating system and runs out of the control from the
incorporated security mechanisms.

Depending on the success of extensions in webinos on NPAPI basis, it
will be necessary to incorporate higher security measurements for
extensions on the client side. Nowadays NPAPI plug-ins is usually
executed in a separate OS process. When the browser spawns the new
process the process rights could be restricted to the OS services (e.g.
file access, network) required for the plug-in to be executed. *A
similar approach is done for NaCl: on Windows all privileges for the
NaCl process are limited.*

Personal Zone Security[¶](#Personal-Zone-Security)
--------------------------------------------------

### Introduction[¶](#Introduction)

The Personal Zone is a grouping of devices for the purposes of managing
the devices and associated services belonging to a given person. The
zone appears to each device as a set of local APIs. There is also a zone
hub that is accessible on the public Internet and which serves as an
access point to the zone from the Internet.

This section will cover the security aspects of the mechanisms needed
for:

-   authenticating the user to the zone
-   authenticating a device to the zone
-   authenticating the zone to an application
-   synchronizing context across the zone
-   shared devices, e.g. the family TV
-   cross-zone messaging and authentication
-   discovery and service adapters
-   setting up a personal zone
-   leaving a personal zone
-   joining a personal zone (new device)
-   lost/stolen device interaction (potentially the loss of only device)
-   revocation of device from a personal zone

### Personal Zone Security Processes[¶](#Personal-Zone-Security-Processes)

#### Authenticating the user to the zone[¶](#Authenticating-the-user-to-the-zone)

The exact mechanisms will depend on the device. For a notebook computer
this will involve typing a user name and password. For a mobile device
it might involve typing a personal identification number. For some
situations, the zone may be asked for a stronger authentication of the
user. This could involve the presentation of an additional device, e.g.
a smart card, or the use of biometric data such as swiping a finger
print, or speaking a digit sequence into a microphone. Strong
authentication is needed when the user or application is seeking access
to critical data or services, e.g. when making a bank transfer. This
will take place when needed, and not when the user first authenticates
to the zone.

If you are away from home and aren't carrying any of your normal
devices, it should be possible to access your personal zone from a Web
browser. Ideally, you would have some kind of dumb device such as a
smart card or USB stick to act as a second factor in the login process.
Failing that you will have to fall back to entering a strong user id and
password issued to you by the zone's hosting service.

#### Authenticating a device to the zone[¶](#Authenticating-a-device-to-the-zone)

Each device will need a means to authenticate itself to the zone. This
could be accomplished through a shared secret, or more robustly through
public key cryptography. Each device needs to have been registered with
the zone before it can be authenticated. The registration process
involves the user in order to establish the trust model.

#### Authenticating the zone to an application[¶](#Authenticating-the-zone-to-an-application)

Webinos avoids the need for users to enter an id and password into web
page forms. Instead the zone is able to authenticate the user on his or
her behalf. This relies on machine interpretable information provided by
the application (whether hosted or locally installed). The user may be
asked to select between alternative persona that he or she has
previously set up. This takes place via a UI that is provided by the
browser and clearly distinguishable from the web page.

Authentication can use conventional user ID and passwords, but these
will be created by webinos and never typed by the user. This avoids the
user in having to remember the credentials, and enables the use of
strong passwords that are resistant to dictionary attacks. Better yet is
to use stronger credentials and mutual authentication. This involves a
preliminary exchange of secrets, but avoids the need to send credentials
over the wire. Webinos further provides for the use of anonymous
credentials based upon zero knowledge proofs. This combines strong
identity (e.g. government issued identity cards) with a means to prove
to an application certain properties over that identity, but without
disclosing further information.

#### Synchronizing context across the zone[¶](#Synchronizing-context-across-the-zone)

The context covers:

-   which devices are online as part of the zone
-   personal data that needs to accessible across the zone
-   security information needed for the zone to function

This presumes a means to support secure storage on each device together
with information on how to communicate with each device. The
synchronization mechanism is based upon 3 way merge algorithms
([Lindholm2001](/redmine/projects/t3-5/wiki/Deliverable_References#Lindholm2001),
[GuiffySureMerge](/redmine/projects/t3-5/wiki/Deliverable_References#GuiffySureMerge))
for synchronizing updates to tree structured data. This involves a means
to communicate mutations to such data, along with the time the changes
took place. Further mechanisms are used to synchronize device clocks,
and to ask the user for help when an unresolvable clash is detected.
Devices may not be able to communicate directly with each other, in
which case other devices can act as relays that bridge differences in
interconnect technologies. Synchronization takes place when a device
authenticates with the zone, and when there are changes to the context.

#### Sharing devices, e.g. the family TV[¶](#Sharing-devices-eg-the-family-TV)

Some devices are shared by several people. Such devices can take part in
a personal zone, but are marked as being shared. When running an
application that involves access to private information, the user may be
asked to authenticate himself or herself, e.g. by typing a personal
identification number into the remote control for a networked TV.

#### Cross-zone messaging and authentication[¶](#Cross-zone-messaging-and-authentication)

Personal Zones form part of a federated social Web. You can determine
what devices or services are visible (i.e. discoverable) by others, and
what access control rules apply. This can be done on an individual
basis, or in terms of the "face" you present to a group of contacts,
e.g. your immediate friends, your work colleagues, and the general
public. Cross zone messaging can be relayed through the zone hubs, or
through peer to peer connections set up with the help of the zone hubs.
This architecture permits the optimal use of network resources (e.g. by
tunneling events through a single connection to avoid the costs of
establishing multiple connections) and maximizing battery life (e.g.
through the use of wakeup messages to emulate long lasting connections).

#### Discovery and Service Adapters[¶](#Discovery-and-Service-Adapters)

Local discovery protocols provide open access to information about
supported services, but typically there is a means to inhibit discovery,
e.g. via a web page form provided by the device. In many cases, the
basic discovery report provides a pointer to further information that
can be retrieved via HTTP. This can require authentication, and in
principle could involve the use of transpost layer security via HTTPS.
Authentication will be involved when it comes to browsing the context in
more detail, especially for remote discovery when browsing someone
else's zone.

Having selected a service, it may be necessary to load a service
adapter, e.g. for a device connected via USB, it is typically necessary
to find a driver based on the product and vendor IDs. The adapter may
involve a binary shared object library and a matching JavaScript
library. This introduces security concerns, and webinos may need to
validate the digital signature for the adapter to verify that it comes
from a trusted source, before asking the user to authorize the
installation of the adapter.

#### Setting up a personal zone[¶](#Setting-up-a-personal-zone)

There are several ways in which a personal zone may be instantiated for
the first time. A personal zone begins with a personal zone hub. This
might commonly be administered and hosted by a trusted party, such as an
internet service provider or network operator. We anticipate that they
will offer a cloud-based personal zone hub which is created for you when
you register with them. The personal zone hub will offer a small
web-based user interface for administration, analogous to those provided
by home routers.

#### Security relevant data on the personal zone hub[¶](#Security-relevant-data-on-the-personal-zone-hub)

The personal zone hub contains the following security-relevant data:

-   user profile information for discovery (e.g. public email address,
    telephone number);
-   hub private key & certificate;
-   list of registered devices, complete with details on:
    -   when they last connected;
    -   how they can be contacted;
    -   what their public keys are & copies of they key certificates;
-   synchronised data, including:
    -   list of recognised external devices and keys;
    -   policies;
    -   preferences;
    -   A list of applications installed on zone devices.

This data has security and privacy concerns, and as a result the
personal zone hub must protect its storage and authenticate users
attempting to view or edit any of this data. To mitigate the situation
where an attacker has gained access to the file store used by a web
server hosting the personal zone hub, there needs to be a mechanism
whereby the server verifies the integrity of the Hub's software and
data, and securely passes the Hub's master keys to it. If an attacker is
able to install software on the server or to modify existing software,
the software will be unable to gain access to the master keys needed to
access the zone's data.

#### Registering a new device with your personal zone[¶](#Registering-a-new-device-with-your-personal-zone)

When a new device is first configured, or webinos is installed on it for
the first time, it needs to be registered with your personal zone. If
you have a device that is already registered, it may be possible to peer
that device with the new one, e.g. using some form of local device to
device communication such as near field communication (NFC), Bluetooth,
or WiFi, or even with a USB stick. The peering process involves a human
level protocol step, such as entering a one time PIN, or verifying that
such a PIN has been passed between the two devices. If this is the first
device you are adding to your Personal Zone, or if the two devices have
no means to communicate locally, then a fall back is to register the
device directly with the Personal Zone Hub via a web browser using the
credentials issued to you by the Zone's hosting service.

Finally, the most user-friendly way of creating a paired device and
personal zone hub is to ship the device to the user pre-registered with
the Personal Zone Hub. This can be done in a number of ways. If the user
has no Personal Zone Hub originally, the device retailer might create a
new one and pair the devices before the user purchases them.
Alternatively, they might pre-enter the user's existing personal zone
hub address into the device to allow users to only perform one initial
authentication.

#### Authenticating a user to the personal zone hub[¶](#Authenticating-a-user-to-the-personal-zone-hub)

Webinos aims to avoid complex authentication overheads and reliance on
passwords. As a result, user authentication happens using device
capabilities where possible (see the [user authentication
section](/redmine/projects/t3-5/wiki/Deliverable_Specifications_Authentication_Identity)
for more details). However, when the first device is joined to the
personal zone, there are no device capabilities to take advantage of.

For the initial authentication, therefore, a user name and password will
be necessary. We do not prescribe a particular technique, but suggest
that this capability should be used extremely rarely. Mitigations to
consider include:

-   Not supporting much functionality via the web interface unless
    logged-in using a registered device
-   Not allowing enrolment (except of the initial device) except through
    a registered device and on-device authentication
-   Notification to all devices whenever security-sensitive decisions
    are taken via the web interface (this could be through an
    out-of-bound channel such as a text messages)

The providers of the personal zone hub may also require further
authentication when enrolling devices on making changes.

#### Recovering from loss of credentials[¶](#Recovering-from-loss-of-credentials)

The user is expected to remember the credentials used to authenticate
himself/herself with the Personal Zone. This may vary from device to
device. It should be possible for the user to update these credentials
in the situation where the user has forgotten them. If the user is able
to authenticate to the Zone with another device, a trusted application
can be used to update the user credentials for the device in question.
If no device is able through which the user can authenticate with the
Zone, then a fall back mechanism should be provided with the Personal
Zone Hub, for example, falling back to a strong user id and password
provided by the Zone's hosting service, e.g. as provided when setting up
a Personal Zone.

The Personal Zone is responsible for keeping the credentials for access
to applications. The user only risks loosing these credentials if all of
her devices are lost or destroyed. If any of the user's devices fall
into the wrong hands, the user's personal data is protected and the
device won't be able to access her Personal Zone without that user's
credentials. In principle, a mechanism could be used to delete personal
data after a specified number of failed attempts to authenticate a user
with the device. Bona fide users would be protected from data loss
through previous synchronization with the Zone Hub. Users can revoke the
ability of the device to access the Zone via the Personal Zone Hub. The
revocation is spread across all of the devices in the Zone via the
normal synchronization mechanisms.

#### Unregistering a device from a personal zone[¶](#Unregistering-a-device-from-a-personal-zone)

This is analogous to revoking the device's rights to access the Zone
with the difference that if a device to be unregistered is already
authenticated to the Zone, it can be instructed to delete all personal
data as part of the revocation process. The process would include:

-   The device is contacted by the hub which sends a "delete" event
    (these events can only be sent by the personal zone hub) to it
-   The device responds by deleting all data stored by webinos,
    including the device keys, certificates, user credentials,
    application data and settings. This may be implemented by deleting a
    cryptographic key if secure storage is in use.
-   The device replies with a "complete" event to the personal zone
    proxy
-   If the device cannot be contacted, it will synchronise with the
    personal zone hub and receive the instruction at a later date.
-   The personal zone hub invalidates any certificates referring to the
    device and adds them to its revocation list
-   All other devices in the personal zone will be synchronised with the
    revocation list and list of user devices when they next communicate
    with the personal zone hub.

#### Securely deleting or clearing a personal zone[¶](#Securely-deleting-or-clearing-a-personal-zone)

It should be possible to delete all the data held by the personal zone
hub. The following options should be made available:

1.  Delete all the data held on the personal zone hub, except personal
    zone device identities, certificates and keys
2.  Delete all data stored by all devices within the personal zone,
    except personal zone device identities, certificates and keys
3.  Delete all personal zone-stored data on all devices including device
    identities, certificates and keys
4.  Delete all data held by all applications on all devices including
    device identities, certificates and keys

These options should refer to *secure deletion* which includes removing
any back-ups and overwriting the data storage medium if necessary.

#### Migrating a personal zone hub[¶](#Migrating-a-personal-zone-hub)

This would occur when changing the hosting service for the Hub. A
mechanism is needed to copy the Hub's data to the new location, and to
update all of the devices with the new location, and finally to delete
all personal data at the old location. This process is likely to involve
changing the master keys (see loss of credentials).

The personal zone hub must be able to archive itself into a compressed
single file (or virtual machine) with optional password protection so
that it can be downloaded and re-instantiated elsewhere.

### Future directions[¶](#Future-directions)

Phase 2 of the project will further investigate the user interfaces,
process and mechanisms used to manage personal zone devices. Mechanisms
for in-zone security will also be considered, as discussed in the
[platform
integrity](/redmine/projects/t3-5/wiki/Deliverable_Specifications_Platform_Integrity)
section.

Platform Integrity Protection, Resilience and Attestation[¶](#Platform-Integrity-Protection-Resilience-and-Attestation)
-----------------------------------------------------------------------------------------------------------------------

### Introduction[¶](#Introduction)

Webinos applications will rely upon the runtime environment to provide
consistent behaviour and enforce security requirements. Therefore, any
unauthorised modification of the webinos runtime could have a
catastrophic effect on security and privacy, as the runtime would no
longer be expected to enforce policies or properly implement any
security functionality.

This section outlines a number of ways in which the webinos runtime will
be protected from attacks, as well as how it can report its integrity
status to any relying parties.

### Background[¶](#Background)

#### Requirements[¶](#Requirements)

The following security and privacy requirements from the webinos
requirements document
([Webinos-D22](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D22))
are covered in this part of the platform.

-   [ID-DEV-POLITO-005](/wp2-2/wiki/DeliverableVersionAll#ID-DEV-POLITO-005)
    : A webinos device may be able to provide Attestation of the webinos
    Platform.
-   [ID-DWP-POLITO-102](/wp2-2/wiki/DeliverableVersionAll#ID-DWP-POLITO-102)
    : Proof of webinos component integrity should be provided to
    authorised parties.
-   [PS-USR-Oxford-116](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-116)
    : The webinos Runtime Environment shall protect applications and
    itself from potentially malicious applications and shall protect the
    device from being made unusable or damaged by applications.
-   [PS-USR-Oxford-62](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-62)
    : Applications shall be isolated from each other. An application
    must not be able to view or modify another application's data or
    execution state.

These requirements refer to a webinos runtime's ability to protect
itself from potentially malicious agents (including applications running
on the device, software running on another in-zone device, and external
threats) and maintain and report its integrity.

#### Threats[¶](#Threats)

These components aim to mitigate the following threats facing the
integrity of the webinos platform:

-   Malicious applications exploiting the runtime to get access to
    underlying hardware, data and other applications
-   An external malicious device attacking the runtime remotely
-   The installation and use of a malicious webinos runtime and
    interaction with other devices in the personal zone
-   Compromise of a remotely-hosted personal zone hub
-   The use of a trusted remote device (such as a friend's PC) which
    turns out to have been compromised by malicious software.

One key attack vector to avoid is a remote exploit of the webinos
runtime itself. Because this runtime is aimed to be shared between
multiple devices, an exploit could have a "break once run everywhere"
effect, much like vulnerabilities in Adobe Flash Player
([CVE-2011-2107](/redmine/projects/t3-5/wiki/Deliverable_References#CVE-2011-2107)).

#### Related technology and research[¶](#Related-technology-and-research)

There are several related areas of research. Trusted Execution
Environments have been proposed by ARM with TrustZone (CITE) as well as
alternatives in Intel and AMD Processors
([IntelTXT](/redmine/projects/t3-5/wiki/Deliverable_References#IntelTXT))
in order to provide a secure platform for use cases such as payment and
digital rights management. GlobalPlatform have produced specifications
standardising the Trusted Execution Environment
([GlobalPlatform2010](/redmine/projects/t3-5/wiki/Deliverable_References#GlobalPlatform2010))
which is defined as:

> A Trusted Execution Environment (TEE) is an environment which\
> runs alongside a rich operating system and provides security\
> services to that rich environment. There are multiple technologies\
> which can be used to implement a TEE, and the level of security\
> achieved varies accordingly.

Existing mobile security architectures are described in the
[Background](/redmine/projects/t3-5/wiki/Deliverable_Background) section
of this document. In addition, the Mozilla Security project has
discussed process isolation
([MozillaProcessIsolation](/redmine/projects/t3-5/wiki/Deliverable_References#MozillaProcessIsolation))
in order to protect the integrity of the browser.

Attesting platform integrity is an approach proposed and implemented by
the trusted computing group. A description and overview of attestation
can be found in the TCG specifications
([TCG2007](/redmine/projects/t3-5/wiki/Deliverable_References#TCG2007)),
some of which refer directly to mobile trusted platforms
([TCGMobile](/redmine/projects/t3-5/wiki/Deliverable_References#TCGMobile)).

### Components[¶](#Components)

Most of the planned mitigations to the identified threats are high-level
guidelines, rather than specific instructions. This is because many of
the actual implementations will depend on the underlying platform and
operating system.

There are four principles being followed to mitigate these threats.
Firstly, independent platform components should be isolated from each
other as much as possible, with interaction over pre-defined channels.
Secondly, each component should be as small and conceptually simple as
possible. Thirdly, all foreign input must be validated before entering
the system. Fourthly, where possible, the programs and modules running
on the webinos platform must correspond to a *whitelist* of known
trustworthy programs.

#### Defining the Trusted Computing Base[¶](#Defining-the-Trusted-Computing-Base)

The Personal Zone Proxy on each device (or the Personal Zone Hub) is the
trusted computing base. It is responsible for enforcing security
policies, as well as implementing secure storage, holding certificates,
making connections and synchronising between devices.

As a result, particular care should be taken in the design and
implementation of the personal zone hub. Any features that can be
removed from it should be, and additional code review should be
undertaken of the personal zone proxy. If possible, the personal zone
proxy should be isolated from the rest of the system - perhaps running
as a separate process, or virtual machine.

#### Isolation[¶](#Isolation)

Applications must run in a sandbox, with access to nothing that is not
mediated by the policy enforcement point. Applications must not be able
to interfere with each other, and should not be able to identify whether
or not another application is installed or running, unless they have
been granted this privilege. The method of isolating applications
instances from one another is dependent on the underlying platform, but
might be implemented as separate processes, separate users or even
separate virtual machines.

#### Privileged Applications[¶](#Privileged-Applications)

Privileged applications are a potential vulnerability in the webinos
architecture. The number of them should be reduced as much as possible,
and all should be from authenticated sources. More information can be
found in the [Privileged
Applications](/redmine/projects/t3-5/wiki/Deliverable_Specifications_Privileged_Apps)
section.

#### Attestation API[¶](#Attestation-API)

The Attestation API is documented in
([D3-2](/redmine/projects/t3-5/wiki/Deliverable_References#D3-2)). It
exposes any underlying device capabilities for *integrity reporting*
that may be available. An example of such a capability can be found in
the Trusted Computing Group Specifications for the Trusted Platform
Module
([TCG2007](/redmine/projects/t3-5/wiki/Deliverable_References#TCG2007)).
This Module allows for the reporting of platform configuration registers
(PCRS) which capture the identity of every program executed on the
platform. The purpose behind this is to identify malware and check
compliance with security policies, including patch levels and anti virus
status.

#### Communication firewall[¶](#Communication-firewall)

All communications on the overlay network received by the webinos
runtime needs to be mediated to make sure that it comes from a
(relatively) trusted source. This means that the user might restrict the
ability of his or her device to communicate with other devices. For
example, it might be that the user does not want to allow communication
from unrecognised devices without runtime authorisation, or without
changing the current mode of use. Alternatively, only certain types of
overlay network communications might be allowed for devices outside of
the user's personal zone. We do not prescribe any particular policy, but
do recommend a default:

-   All communication within the personal zone is accepted and processed
    by the target webinos runtime.
-   All communication from devices previously used and authorised is
    supported for the same purpose as originally approved.
-   All communication from other devices not previous authorised is
    rejected, unless it is a service advertisement message, in which
    case it may be accepted unless the device (or message type) is on a
    blacklist.

The firewall is implemented as part of the PEP and policies are defined
in XACML. All communication will be mediated by the PEP.

#### Event validation[¶](#Event-validation)

Webinos events are described in detail in
([Webinos-D31](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31)).
Events are used to communicate between entities for information about
state changes, user actions and so on. The following rules apply to
events from a security standpoint, in addition to the [permissions
framework](/redmine/projects/t3-5/wiki/Deliverable_Specifications_API_Groups):

-   All events must be validated in the way defined in
    ([Webinos-D31](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31)).
-   Any unrecognised event types (those that no application or service
    has registered to listen for) must not be accepted or forwarded
-   All input from events must be treated as untrusted data and cleaned
    and parsed before use
-   Events must come from authorised endpoints unless permitted by the
    above communications firewall.

#### Example attestation protocol[¶](#Example-attestation-protocol)

The following example demonstrates how Attestation might be used to make
strong security guarantees of the endpoint. This example is taken from
([Sailer2004](/redmine/projects/t3-5/wiki/Deliverable_References#Sailer2004)).

Application "MyBankApp" is running on the webinos-enabled endpoint
"Peter's Smartphone". Peter's Smartphone contains a trusted platform
module or mobile trusted module. "BankingApp" communicates with remote
server "http://bank.example.com". MyBankApp is able to manage the user's
personal finances and let the user make medium-value transactions. As a
result, the bank service provider at <http://bank.example.com> wants to
be sure that the correct version of the app is running and that no
malware is interfering with the device.

1.  User starts "MyBankApp"
2.  MyBankApp communicates with <http://bank.example.com>
3.  <http://bank.example.com> asks MyBankApp to attest to its current
    status
4.  MyBankApp uses the Attestation API to request a public key & key
    credential for the local device, Peter's Smartphone.
5.  The key credential is forwarded to <http://bank.example.com>
6.  <http://bank.example.com> assesses the credential and checks to see
    whether the endpoint is a trusted device.
    1.  If not, attestation fails.

7.  <http://bank.example.com> gives MyBankApp a fresh *nonce*, a 20 byte
    random value.
8.  MyBankApp uses this nonce and the public key with the attestation
    API *attestPlatform* on Peter's Smartphone.
9.  Peter's Smartphone returns attestation data, which includes a log of
    the integrity of the platform ("trustChain"), as well as validation
    data from the hardware trusted platform module ("validation data")
    with schema "TPM\_Quote".
10. These values are passed on to <http://bank.example.com>
11. <http://bank.example.com> assesses the validation data and the
    integrity log using standard TCG techniques (see
    ([TCG2007](/redmine/projects/t3-5/wiki/Deliverable_References#TCG2007))).
    1.  If the platform integrity is not trusted, attestation fails
    2.  If the validation data is not trusted, attestation fails

12. <http://bank.example.com> passes MyBankApp a temporary token which
    gives it access to the <http://bank.example.com> banking
    capabilities
13. User authentication is requested via the authentication API
14. The application is now able to perform transactions using remote
    <http://bank.example.com> APIs.

#### Attestation security and privacy issues[¶](#Attestation-security-and-privacy-issues)

Attestation has well known security and privacy implications, as
discussed in
[Lyle10](/redmine/projects/t3-5/wiki/Deliverable_References#Lyle2010):

> "[Attestation] requires the remote party to identify every piece of
> software executed on the platform. This might allow them to
> discriminate based on their own criteria, requiring software from only
> one vendor, for example. This could work against the user’s best
> interests. Furthermore, reporting the exact [software versions] could
> make an attacker’s job easier, as he or she will be able to quickly
> identify which known exploits are appropriate."

### Future directions[¶](#Future-directions)

In future revisions of this specification, we intend to use the personal
zone concept to help check platform integrity. We will investigate
integrating a [MAP
database](http://www.trustedcomputinggroup.org/resources/tnc_ifmap_binding_for_soap_specification)
([MAP](/redmine/projects/t3-5/wiki/Deliverable_References#MAP)) into the
personal zone hub to support the creation of policies restricting access
to a personal zone based on whether a device is in the correct
configuration. MAP databases can be thought of as just simple databases
of facts about devices on a network, standardised by the Trusted
Computing Group.

In addition to this, we would like to investigate secure cloud hosting
for the personal zone hub so that it is protected from attack by
outsiders. Integration with the EU TClouds project
([TClouds](/redmine/projects/t3-5/wiki/Deliverable_References#TClouds))
would be one way of doing this.

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
([Garfinkel1996](/redmine/projects/t3-5/wiki/Deliverable_References#Garfinkel1996))
and OCSP
([OCSP](/redmine/projects/t3-5/wiki/Deliverable_References#OCSP)).
Examples of related problems include PGP, browser security models and
certificate revocation.

The WAC ([WAC](/redmine/projects/t3-5/wiki/Deliverable_References#WAC))
and BONDI
([BONDI](/redmine/projects/t3-5/wiki/Deliverable_References#BONDI))
specifications propose an approach for verifying the authenticity and
integrity of applications using certificates. Webinos will largely
follow these specifications, with some exceptions, as outlined in the
following sections. Also relevant is the W3C working draft for XML
digital signatures for widgets
([WidgetSignatures](/redmine/projects/t3-5/wiki/Deliverable_References#WidgetSignatures)).

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
from WAC ([WAC](/redmine/projects/t3-5/wiki/Deliverable_References#WAC))
and modified for the webinos install process:

Local applications will be "installed" in the following way:

1.  A new application is downloaded
2.  The application contains at least one digital signature file
    containing signatures of all files in the downloaded application
    which are not themselves signature files
    ([WidgetSignatures](/redmine/projects/t3-5/wiki/Deliverable_References#WidgetSignatures)).
    The application will also contain a manifest.
3.  Signatures are verified against the signing key and content of the
    application, as per
    ([WidgetSignatures](/redmine/projects/t3-5/wiki/Deliverable_References#WidgetSignatures)).
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
    application, as per
    ([WidgetSignatures](/redmine/projects/t3-5/wiki/Deliverable_References#WidgetSignatures)).
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
Deliverable 3.1
([Webinos-D31](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31))
and the W3C Widget Update Working Draft
([WidgetUpdates](/redmine/projects/t3-5/wiki/Deliverable_References#WidgetUpdates)).

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
([Lyle2010](/redmine/projects/t3-5/wiki/Deliverable_References#Lyle2010)).
If the host is found to be running in an untrustworthy configuration
then the application may not be installed, or if the host changes
configuration it could result in a new assessment.

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

Device Permissions[¶](#Device-Permissions)
------------------------------------------

### Introduction[¶](#Introduction)

As defined in previous sections, webinos applications must request
access to device and runtime features in order to to use them. These
requests are defined in the application manifest and at install time,
the user is queried to ask whether or not to grant permission. The
following table defines the steps and objects required.

  -------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------ -----------------------------------------------------------------------------------------------------------------------------------------------
  Object                           Definition                                                                                                                                                         Location                                                                 Created by
  Application permission request   The set of permissions requested by the application                                                                                                                The "config.xml" manifest                                                The application developer
  User authorisation               The process of approving an application's permission request                                                                                                       During runtime - when an application is installed or first used          The webinos runtime prompts the user for consent based on the applications permissions. A subset of the permissions requested can be approved
  Policies                         The XACML policies used by the policy decision point uses to make access control decisions about whether an application can access a certain resource or feature   Stored on the platform by the personal zone proxy in a secure location   The runtime upon processing the user's authorisation of application permissions
  -------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------ -----------------------------------------------------------------------------------------------------------------------------------------------

Importantly, the user authorisation stage (as discussed in section
"[authorisation
section](/redmine/projects/t3-5/wiki/Deliverable_Specifications_Authorisation)"
of this document) must allow the user to chose which permissions he or
she is willing to give. This must be made as user-friendly as possible,
so that the user can make a sensible decision with minimal effort. More
details of this process are given in the "[Privacy Policy
Architecture](/redmine/projects/t3-5/wiki/Deliverable_Specifications_Privacy_Policies)"
section. However, one way in which usability can be improved is if
device permissions are group logically in order to minimise the number
of decisions that users have to make. Users should not have to say yes
or no to ever API, but those which are clearly related (or we would
expect to see used together) should be presented in the same section.

This part of the specification defines how application states the
permissions it wants to use, and to which individual APIs the
permissions refer to. The groupings defined in the following
sub-sections are liable to change over the course of the development of
the webinos project, as feedback from experiments on user expectations
of security and privacy should provide better guidelines. Permissions
may refer to the applications' ability to access web addresses, context
data and device and runtime features. We note that these things are
already defined in the manifest using WARP
([W3CWARP](/redmine/projects/t3-5/wiki/Deliverable_References#W3CWARP))
and the Widget \<feature\> tag. However, the additional permissions
allow us to include more information to present to the end user,
including data usage and retention policies. In addition, this provides
a logical separation between what the application requires access to
functionally and what decisions the user needs to make to protect their
security and privacy.

### Background[¶](#Background)

Device feature permissions have been discussed in several other areas.
The W3C "Permissions for Device API Access"
([W3CDAP-Perms](/redmine/projects/t3-5/wiki/Deliverable_References#W3CDAP-Perms))
working draft defines a set of permissions required to access device
features. We use many of the same permissions definitions. The W3C
Feature Permissions is also a useful reference
([W3CFeaturePermissions](/redmine/projects/t3-5/wiki/Deliverable_References#W3CFeaturePermissions)).
There is existing work from WAC specifications
([WAC](/redmine/projects/t3-5/wiki/Deliverable_References#WAC)) in
defining permissions for device features. Finally, permissions in
android manifests
([AndroidManifestPermission](/redmine/projects/t3-5/wiki/Deliverable_References#AndroidManifestPermission))
are also a point of comparison, although we believe that these are too
fine-grained for user authorisation.

### Grouping of webinos APIs and objects[¶](#Grouping-of-webinos-APIs-and-objects)

The following APIs will be grouped together with the following
permissions strings:

  -----------------------------------------------------------------------
  Permission group        APIs                    Parameters
  ----------------------- ----------------------- -----------------------
  servicediscovery        service discovery API   

  sensorinfo              Device Orientation API  

  sensorinfo              Generic SensorActuator  
                          API                     

  sensorinfo              NFC API                 

  geolocation             Geolocation API         

  mediacapture            Media Capture API       

  mediacapture            Gallery API             

  deviceinfo              Devicestatus API        

  deviceinfo              Devicestatus vocabulary 

  deviceinteraction       Device Interaction API  

  deviceinteraction       User Authentication API 

  tvcontrols              TV and STB control API  

  vehicle                 Vehicle API             

  personallife            Contacts API            read/write

  personallife            Calendar API            read/write

  personallife            User Profile API        read/write

  messaging               Messaging API           view/send

  file                    File Reader API         fileuri="URI"

  file                    File Writer API         fileuri="URI"

  file                    File API: Directories   
                          and System              

  file                    Storage of cookies      

  payment                 Payment API             

  otherapplications       Widget execution API    widgeturi="URI"

  otherapplications       Application Launcher    widgeturi="URI"
                          API                     

  otherapplications       Platform Attestation    
                          API                     

  context                 Context APIs & all      
                          implied APIs from       
                          Context                 

  events                  Event handling API      
  -----------------------------------------------------------------------

Permissions for individual APIs can also still be requested using this
permissions framework.

### Permissions in the Manifest[¶](#Permissions-in-the-Manifest)

Applications will request permission to access APIs, web domains and
contextual data by including XML fragments such as the one below in the
manifest.

    <permissions>
        <permit type="API/Group/WARP" URI="API Permission/API URI/WARP access origin field">
            <parameters>
                <parameter name="..." value="..." />
                <!-- E.g. -->
                <parameter name="widgeturi" value="http://example.org/myapp" />
                <parameter name="read" value="true" />
            </parameters>
            <policy> <!-- http://www.w3.org/2010/09/raggett-fresh-take-on-p3p/ -->
                <purposes>
                    <purpose>current</purpose>
                    <purpose>admin</purpose>
                    <purpose>tailoring</purpose>
                    <purpose>individual-analysis</purpose>
                    <purpose>contact</purpose>
                </purposes>
                <recipients>   
                    <recipient>ours</recipient>
                    <recipient>delivery</recipient>
                    <recipient>same</recipient>
                    <recipient>other</recipient>
                    <recipient>unrelated</recipient>
                    <recipient>public</recipient> <!-- Some of these may subsume others when chosen -->
                </recipients>
                <retention>  
                    <retention-reason>no</retention-reason>
                    <retention-reason>legal-obligation</retention-reason>
                    <retention-reason>business-practices</retention-reason>
                    <retention-reason>indefinitely</retention-reason>
                </retention>
                <reason>
                    <reason-text lang="EN"> ... </reason-text>
                    <reason-text lang="ES" url="" />
                </reason>
            </policy>      
        </permit>
    </permissions>

A "permit" tag is required for each permission sought. Permissions can
be either API groups (as defined earlier), individual API URIs, or for
the "access origin" fields used in WARP statements. The "type" field
states which of these options the permission is referring to, and the
URI either points to the group name, API URI or access origin field.
Parameters are required when stated in the above table, and can be used
to restrict the permission sought, for example by requesting permission
to access only certain files or domains. The policy section is required,
and maps to the reduce P3P syntax discussed in the [Privacy Policy
Architecture](/redmine/projects/t3-5/wiki/Deliverable_Specifications_Privacy_Policies)
section. Purpose is the purpose of using the feature access is requested
for, recipients defines who will be given access to any data retrieved,
and retention defines whether data will be stored and why. The reason
field allows the developer to state a short reason (in text) for this
request. We suggest this should be a few lines of text at most.
Different languages are supported, and reasons may refer to remote URLs
to allow for localisation to happen at a later date. However, at least
one reason must be included, and we suggest that these do not point to
long legal privacy documents.

### Permissions for accessing context data[¶](#Permissions-for-accessing-context-data)

Context data is accessed through the context APIs and system defined in
[Webinos-D32](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D32)
and
[Webinos-D31](/redmine/projects/t3-5/wiki/Deliverable_References#Webinos-D31).
However, applications can access many other things through the API as it
may contain information from other applications and features. As a
result, access to context data requires permission to be granted to
several other APIs. The details of which APIs will depend on how the
platform is defined to collect context data, but may include
geolocation, personallife, deviceinfo and more.

Additional security and privacy measures are required for context data.
Context data are stored by the runtime in a context database and can be
collected whenever the device is turned on. Context data can include
information about all aspects of the runtime, APIs and user preferences.
In order to help users with security and privacy concerns, we define the
following extra controls which the runtime will apply to context data,
in addition to the existing permissions requirements:

-   Context gathering and storage is turned off by default in the
    runtime. Users have to explicitly turn it on in order to begin
    collecting context data, and can turn it off at any time.
-   Users can always deny an application access to context if they chose
    to.
-   Context data storage can be emptied and deleted at an time
-   A privileged application exists on the runtime so that users can
    query the context data and see what it holds at any time

### Security and Privacy Issues[¶](#Security-and-Privacy-Issues)

The permissions approach defined in this section has several potential
security, privacy and usability concerns. The grouping of permissions
might lead to unexpected access being granted to an application which is
not in line with user expectations. Furthermore, it might encourage
developers to use more features than they were intending, which runs
counter to the principle of least privilege. For these reasons, we
expect to revise this grouping approach after the study on user
expectations is finished later in the year.

The attaching of privacy policies is an important step, but the impact
of requiring developers to include them is hard to judge. Privacy
policies may be filled in trivially, or copied and pasted from other
sources if they are too onerous to complete. Also possible is that the
"reason" field will be used to link to a remote privacy policy which
will be difficult to read and remain opaque to users. We hope that
providing certain fixed, machine-readable fields will help to avoid this
scenario. Another potential problem is overloading the user with too
much information. While informed consent requires the user to know about
the application, too much information could result in users not reading
the policies at all.

Another concern is that applications should be discouraged from asking
for too many permissions, as this raises user expectations of the number
of privileges a "normal" application might ask for. Requiring each
permission to have a unique "permit" tag may remove the temptation to
request access to too many APIs. However, this could also affect
developer usability, and might cause short-cuts such as copying and
pasting a large set of permissions rather than tailoring them to the
applications. Practical experience may result in these specifications
changing in the future.

Finally, access to context data must be strictly regulated otherwise it
may serve as a side-channel for access to device APIs. Contextual data
may potentially include information from any device API or network, and
therefore could be used to access these features without explicit
permission.

### Future directions[¶](#Future-directions)

In phase two of the project, we intend to look at improving permissions
in terms of usability and revisit the groupings shown in this document.
We will also consider supporting user-definable tags for different APIs
and permissions so that users can quickly and easily allow or deny
applications access to the data and resource they believe to be
sensitive or confidential. We also expect many usability challenges and
opportunities will arise during implementation.

Session Security[¶](#Session-Security)
--------------------------------------

### Introduction[¶](#Introduction)

This section is about how to protect sessions. There are several types
of sessions in webinos, including:

1.  normal web sessions: HTTP out of the box is a stateless, sessionless
    protocol. However, most web server technologies implement a
    "session" construct on the server, using cookies or URL rewriting to
    preserve session across multiple HTTP requests.
2.  sessions between devices within a personal zone, (Intra personal
    zone sessions)
3.  sessions between applications and remote services (External services
    sessions)
4.  sessions between two personal zones
5.  user sessions on the webinos runtime which may move between devices
    (User centric distributed intent sessions)

### Background[¶](#Background)

There is no standard way to implement sessions over traditional HTTP
browser, web server connections. Almost all web server application
frameworks (ASP, Java, PHP) will create their own session constructs on
top, but natively HTTP (being a stateless protocol) does not support it.
This omission comes with its drawbacks, which are outlined in the
Threats section below.

Within webinos the type 2 and type 3 sessions, which are the two
critical communication layers in a distributed webinos flow, are defined
to run exclusively over TLS. This provides both strong integrity and
authentication for the session life-cycle, at the expense of some
performance.

Type 2 and 3 sessions are low level implementation constructs that are
not visible at the end user level

The final class of sessions to be considered from a security perspective
is the distributed notion of a session, as a user completes one specific
activity, over a number of different devices. This is something new that
webinos is introducing, that needs proper exploration.

#### Requirements[¶](#Requirements)

-   Requirement
    [ID-USR-OXFORD-34](/wp2-2/wiki/DeliverableVersionAll#ID-USR-OXFORD-34)
    implies that session data must remain private, as it contains device
    identifiers.
-   Requirement
    [DA-DEV-ambiesense-048](/wp2-2/wiki/DeliverableVersionAll#DA-DEV-ambiesense-048)
    indicates that session data will move between devices
-   Requirement
    [PS-USR-Oxford-71](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-71)
    [PS-USR-Oxford-68](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-68)
    require the webinos runtime to have ultimate control over session
    instantiation and closure, which can be triggered from events.
-   Requirement
    [CAP-DEV-FHG-204](/wp2-2/wiki/DeliverableVersionAll#CAP-DEV-FHG-204)
    indicates that session data can be stored outside the device.

#### Threats[¶](#Threats)

Sessions require protection because the hijacking or unauthorised
disclosure of a session can have security and privacy implications.
Session data may contain private information, but more importantly it
may be possible to use a hijacked session to impersonate a user on an
application. This could then lead to the disclosure of further security
or privacy-sensitive data, as well as potential damage to digital
assets. This is discussed in [OWASP Threat A3 in the Background
section](/redmine/projects/t3-5/wiki/Deliverable_Background#OWASP-threats)
of this document. Good examples of session hijacking are the Firesheep
application
([Firesheep](/redmine/projects/t3-5/wiki/Deliverable_References#Firesheep))
and FaceNiff android application
([FaceNiff](/redmine/projects/t3-5/wiki/Deliverable_References#FaceNiff))
which are both capable of intercepting insecure browser sessions with
social networking websites.

Traditional browser-web server HTTP sessions, that are based upon
cookies, or dynamic URL rewriting are extremely vulnerable to
impersonation attacks. Because HTTP does not support session and session
authentication natively, each application developer is free to
continually make the same mistakes. Mitigating against this threat is,
therefore, very hard as it requires either

1.  a complete re-education of web developers everywhere, or
2.  the introduction of new technologies which help mitigate against the
    issues

The approach taken in webinos is the latter. The webinos session layers
covering intra personal zone traffic and external services traffic are
intended to provide useful tools which attract diligent developers away
from the more dangerous technologies.

Specifically, webinos sessions (type 2+3) offer the following advantages

-   All traffic between zones and services is encrypted to make snooping
    traffic more difficult.
-   All client server sessions are mutually authenticated. This mutual
    authentication includes, user and device
-   All traffic can be monitored at the PZH for anomolies. For example
    sudden changes in IP address, can be challenged be asking the device
    to re-authenticate. This helps mitigate against real time token
    stealing attacks

This means that all traffic within a zone or between zones is encrypted
according in webinos.

The principle adopted in webinos is one of gradual change, to be
encouraged by offering both useful and secure alternatives to
conventional techniques. Attempting to *switch off* traditional cookie
based web server sessions overnight would be too disruptive; this might
put webinos uptake at risk.

However, by offering viable alternatives to traditional session
techniques, with proven security advantages, programmers can be
encouraged to move to a more robust platfrom.

#### Related technology[¶](#Related-technology)

Transport Layer Security (TLS):

-   IETF Transport Layer Security Working Group
    ([IETF-TLSWG](/redmine/projects/t3-5/wiki/Deliverable_References#IETF-TLSWG))
-   TLS protocol, version 1.2, RFC 5246
    ([rfc5246](/redmine/projects/t3-5/wiki/Deliverable_References#rfc5246))

### Specifications[¶](#Specifications)

#### Types of session[¶](#Types-of-session)

Session types are formally defined in the Architecture sub section.
[Webinos session
creation](/redmine/projects/wp3-1/wiki/Webinos_session_creation)

#### Synchronisation[¶](#Synchronisation)

Intra zone sessions, are worthy of specific security consideration, due
the the sensitivity of the information to be exchanged.

As per the specification it is defined that over a PZP-PZH session the
following data should be synchronised.

1.  shared authentication tokens for users, devices, services.
2.  user data
3.  application specific data
4.  context events and stream

Each of these items is obviously highly sensitive, and creates major
issues if leaked.

The first thing to note is that within the webinos architecture, we have
improved upon the current state of the art, in that the 3rd party
application developer no longer has direct access to this data. This is
especially important for authentication tokens and session ids. This
information is now stored within the trusted component (the PZP) and the
application developer now only has indirect access to this data.

As stated however, the PZP now becomes highly trusted. Within the
implementation of the PZP, we must take great care to ensure that

-   all communications with the PZH is done so over secure communication
    channels
-   all data stored/cached at the PZP is at least encrypted, and in an
    ideal world is delegated to a trusted storage
-   the PZP itself is developed to have strong integrity check built in
    or around it, to limit the forms of attack that can be made against
    it.

### Future Directions[¶](#Future-Directions)

We intend to continue to monitor new threats and vulnerabilities to
session protocols and investigate further mechanisms for securing device
identity keys.

