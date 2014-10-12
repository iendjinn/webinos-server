Security Policy Architecture[¶](#Security-Policy-Architecture)
--------------------------------------------------------------

### Introduction[¶](#Introduction)

This section introduces the policy management architecture discussed in
the "Security and Privacy" chapter of the "D3.1 System specifications"
document ([Webinos-D31](Webinos-D31.html)). The specification itself can
be found in ([Webinos-D31](Webinos-D31.html)), but this section explains
various security issues, including related background literature,
threats and the security model. Here the focus is on security rather
than privacy.

### Background[¶](#Background)

Consider the common scenario where a device exposes a set of features
and/or low level capabilities made available to applications through
system APIs. Applications may abuse these capabilities, intentionally or
accidentally. We therefore need to introduce a component to control the
access to them, matching external requests against a defined set of
rules called policy.

As the analysis in the [Background section](Background%20section.html)
clearly demonstrates this base capability is highly prevalent on all
native and web based application platforms, proving that there is strong
need. Because security is so important (especially to the web) it is
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

The following requirements from ([Webinos-D2](Webinos-D2.html)) are
relevant to this part of the security architecture.

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
([Webinos-D31](Webinos-D31.html)) document.

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
    ([PRiMMA](PRiMMA.html)) uses contextual information not to make the
    access control decisions but to change the way users are notified.
    This may be an interesting avenue of further research.
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

