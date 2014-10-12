Policy Architecture[¶](#Policy-Architecture)
============================================

Introduction and focus[¶](#Introduction-and-focus)
==================================================

Introduction ~~and gap analysis~~[¶](#Introduction-and-gap-analysis)
--------------------------------------------------------------------

The role of the policy manager is to enforce privacy and access control
requests - coming from local and remote requestors - in order to manage
the disclosure of personal data and to control access to personal zone
capabilities and features. This is done by matching requests to
resources from users and applications against written policies in order
to determine an access control decision. This decision could be to allow
or deny access to the requested resources, or involve further
interaction and consent with the resource owner.

<span style="background:yellow;">Review comment: Everything below this
line isn't really needed in a specification. Suggest removing and adding
to WP4 wiki as documentation</span>

The task 3.1 specified mainly the access control architecture and how to
integrate it with a privacy management architecture which was not
completely defined.

The specification proposed in the task 3.1 was not fully implemented
during task 4.1. In particular\
In the current implementation the policies are written in an xml file
(following the format specified
[here](/wp3-1/wiki/Spec_-_Security#Policy-Format)
in task 3.1). In this file it's possible to specify multiple sets of
policies: every set has a "combine" rule that is used to determine which
policy shall be applied, eg. with the "first-matching-target" combine
rule, every request shall be matched against the first policy which
matches the request's target. At the actual stage of implementation, the
target of a policy could be users, apps, devices or mix of them.\
The policy manager can recognize every feature specified for APIs in the
task 3.2 ([APIs
specs](http://dev.webinos.org/specifications/draft/index.html)) and also
the ones specified
[here](/wp3-1/wiki/Spec_-_Security#Action-features)
in the task 3.1.\
The policy manager defines also through it's Node.js wrapper, a method
to enforce requests: an example of usage can be found
[here](/wp4/wiki/W3C_contacts_module)
.\
At the moment only the Contacts Module, Device Status API, the Context
Manager and some demos have integrated the policy enforcement.

### Main differences: 3.1 specs vs 4.1 implementation[¶](#Main-differences-31-specs-vs-41-implementation)

These are the main differences between the current implementation and
what has been specified:

-   there are not PIP and Context Handler, since it was expected a
    deeper integration between policy and context manager. Management of
    obligations is not implemented as well.

<!-- -->

-   The Policy manager action is voluntary, in the sense that calls to
    policy manager functions must be explicitly inserted. This seems
    slightly contrasting with the PEP put in the XACML engine (in T3.1
    specification), that suggest a mandatory control for all APIs (BTW,
    this would be in line with the Context manager behavior, which
    listen every RPCs)

<!-- -->

-   The privacy part (DHDF, P3P etc) has been investigated but not
    implemented.

<!-- -->

-   Different prompt types are not fully implemented (the Policy manager
    is ready to be extended with "session" and blanket" prompt types,
    but at the moment only *one-shot* is fully available).
-   actual implementation lacks of a mechanism to synchronize policies
    and taken decisions (PDP Cache) among devices
-   IDs in policies are not stored in "Trusted records" and the generic
    values for targets cannot be used

Focus[¶](#Focus)
----------------

In this task the focus should be on the privacy management system
(proposed architecture review + privacy policies language) and on a more
detailed mechanism to share policies and related resources among users'
devices.\
Another point to work on are the privileged applications: for example in
this task the functionalities for a graphic policy editor could be
defined.

Privacy enforcement point[¶](#Privacy-enforcement-point)
========================================================

Page moved to [Background - Privacy
Policy](/wp3-3/wiki/Background_-_Privacy_Policy)
and [Spec - Privacy
Policy](/wp3-3/wiki/Spec_-_Privacy_Policy)

<span style="background:yellow;">The name 'privacy enforcement point' is
not ideal. I believe this section refers to policy enforcement in
general, not just for privacy, and I suggest renaming to 'access control
policy enforcement'</span>

-   [Policy Architecture](#Policy-Architecture)
-   [Introduction and focus](#Introduction-and-focus)
    -   [Introduction and gap analysis](#Introduction-and-gap-analysis)
        -   [Main differences: 3.1 specs vs 4.1
            implementation](#Main-differences-31-specs-vs-41-implementation)
    -   [Focus](#Focus)
-   [Privacy enforcement point](#Privacy-enforcement-point)
    -   [Scope](#Scope)
        -   [Useful readings](#Useful-readings)
    -   [Background (informative)](#Background-informative)
        -   [Privacy architecture](#Privacy-architecture)
            -   [PrimeLife findings](#PrimeLife-findings)
            -   [Subjects](#Subjects)
            -   [Language main components](#Language-main-components)
            -   [New elements](#New-elements)
            -   [Matching mechanisms](#Matching-mechanisms)
        -   [P3P vs XACML](#P3P-vs-XACML)
            -   [Platform for Privacy Preferences Project
                (P3P)](#Platform-for-Privacy-Preferences-Project-P3P)
            -   [eXtensible Access Control Markup Language
                (XACML)](#eXtensible-Access-Control-Markup-Language-XACML)
            -   [Pros and cons](#Pros-and-cons)
        -   [Ontology investigation](#Ontology-investigation)
            -   [P3P ontology](#P3P-ontology)
            -   [OWL ontology](#OWL-ontology)
        -   [Manifests synchronization](#Manifests-synchronization)
        -   [Allow downstream usage](#Allow-downstream-usage)
        -   [Respecting data handling
            policies](#Respecting-data-handling-policies)
    -   [Specification](#Specification)
        -   [Data handling](#Data-handling)
            -   [Authorization](#Authorization)
            -   [Obligations](#Obligations)
        -   [Policy matching and
            evaluation](#Policy-matching-and-evaluation)
            -   [Policy matching](#Policy-matching)
            -   [Obligations matching](#Obligations-matching)
        -   [Synchronization concerning
            privacy](#Synchronization-concerning-privacy)
            -   [Manifests synchronization and
                usage](#Manifests-synchronization-and-usage)
            -   [Example of exceptions.xml](#Example-of-exceptionsxml)
            -   [Example of policy.xml](#Example-of-policyxml)
-   [Synchronisation and coherence](#Synchronisation-and-coherence)
    -   [Access control policy elements to
        synchronise](#Access-control-policy-elements-to-synchronise)
    -   [Cross-Device Policy Synchronisation Scenarios (to
        update)](#Cross-Device-Policy-Synchronisation-Scenarios-to-update)
-   [Policy Editor](#Policy-Editor)
    -   [Introduction](#Introduction)
    -   [Multi user Environment](#Multi-user-Environment)
    -   [JavaScript Policy Editor UI](#JavaScript-Policy-Editor-UI)
    -   [Requirements](#Requirements)
    -   [Policy Editor Deployment](#Policy-Editor-Deployment)
    -   [Offline Edit Local Policy and Online edit remote
        Policy](#Offline-Edit-Local-Policy-and-Online-edit-remote-Policy)
    -   [Code Example](#Code-Example)
    -   [Screenshots](#Screenshots)
-   [Grammars for access control and privacy
    policies](#Grammars-for-access-control-and-privacy-policies)
    -   [Access control policies](#Access-control-policies)
    -   [References](#References)
        -   [RELAXNGCS](#RELAXNGCS)
        -   [WACXMLSP](#WACXMLSP)

<span style="background:yellow;">The following sections (up until
'specification') do not appear to be specification material. I suggest
they are moved either to a new, *informative* part of the specification
area, or are removed from this document.</span>

Scope[¶](#Scope)
----------------

This section describes the results of the investigations on privacy
handling on webinos architecture.

### Useful readings[¶](#Useful-readings)

-   [PrimeLife: Report on
    policies](http://www.primelife.eu/images/stories/deliverables/d5.2.2-second_research_report_on_policies-public.pdf)

Background (informative)[¶](#Background-informative)
----------------------------------------------------

### Privacy architecture[¶](#Privacy-architecture)

#### PrimeLife findings[¶](#PrimeLife-findings)

Here follows a brief description of PrimeLife attempt to define an
architecture and language for privacy policy specification. This will
likely be of inspiration for the webinos definition of policy privacy
architecture. Majority of information provided here comes from PrimeLife
deliverable
[D5.3.4](http://www.primelife.eu/images/stories/deliverables/d5.3.4-report_on_design_and_implementation-public.pdf)
The analysis is particularly focused on the PrimeLife Privacy Policy
Language (PPL) designed for handling access control and privacy.

#### Subjects[¶](#Subjects)

PrimeLife defines different privacy editors, actors who can define their
specific privacy rules, that can be conflicting.

-   Data controller, who is the entity which alone or jointly with
    others determines the purposes\
    and means of the processing of personal data
-   Data subject, who is the person whose personal data are collected,
    held or processed by the Data Controller.

The language would be used by

-   the Data Controller to specify the access restrictions to the
    resources that he offers;
-   the Data Subject to specify access restrictions to her personal
    information, and how she wants her information to be treated by the
    Data Controller afterwards;
-   the Data Controller to specify how "implicitly" collected personal
    information (e.g. IP addresses) will be treated;
-   the Data Subject to specify how it wants this implicit information
    to be treated.

#### Language main components[¶](#Language-main-components)

-   target :it describes the resource, the subject, and the environment
    variables for which this rule is applicable.\
    It is described by a *\<xacml:Target\>* element containing a number
    of nested *\<xacml:AnyOf\>* and *\<xacml:AllOf\>* elements.

<!-- -->

-   credential requirements (introduced by PPL): it describes the
    credentials that need to be presented in order to be granted access
    to the resource;

<!-- -->

-   provisional actions (introduced by PPL): it describes which actions
    (e.g., revealing attributes or signing statements) have to be
    performed by the requestor in order to be granted access;

<!-- -->

-   condition (improved compared to XACML standard): specifying further
    restrictions on the applicability of the rule beyond those specified
    in the target and the credential requirements.\
    The *\<xacml:Condition\>* contains an element of type
    *\<xacml:Expression\>* that evaluates to a Boolean.\
    \<CredentialAttributeDesignator\> is a new element of type
    *\<xacml:Expression\>* that can be used inside a
    *\<xacml:Condition\>* to retrieve an attribute value from a
    presented credential.

<!-- -->

-   data handling policies (introduced by PPL): describing how the
    information that needs to be revealed to satisfy this rule will be
    treated afterwards.

<!-- -->

-   data handling preferences (introduced by PPL): describing how the
    information contained in the resource that is protected by this rule
    has to be treated.

#### New elements[¶](#New-elements)

-   authorization element: augmented with *\<AuthzUseForPurpose\>.*,
    which enumerates a list of purposes authorized to use the
    information, and\
    *\<AuthzDownstreamUsage\>*, which gives the permission to forward
    the information protected by this policy to a third party. This
    authorization enables the data subject to specify the policy under
    which the information will be made available.

<!-- -->

-   credential requirements: Each rule can contain a
    *\<CredentialRequirements\>* element to specify the credentials. The
    *\<CredentialRequirements\>* element contains a separate
    *\<Credential\>* element for each credential that needs to be
    presented, plus a *\<Condition\>* element describing the conditions
    that the attributes of these credentials have to satisfy.\
    The *\<Credential\>* element can contain restrictions that apply to
    the credential. These restrictions can be expressed two ways: by
    means of a list of *\<AttributeMatchAnyOf\>* elements within the
    *\<Credential\>* element, or by means of the generic
    *\<xacml:Condition\>* element that is a sibling of the list of
    *\<Credential\>* elements, and that contains all other conditions
    related to the credential attributes.

<!-- -->

-   data handling policies: *\<DataHandlingPolicy\>* element expresses
    what will happen to the information about the Data Subject collected
    during an access request. A data handling policy consists of a set
    of authorizations, contained in an *\<AuthorizationsSet\>* element
    (composed of *\<AuthzUseForPurpose\>* and *\<AuthzDownstreamUsage\>*
    elements), that the Data Controller wants to obtain on the collected
    information, and a set of obligations, expressed in a
    *\<ObligationsSet\>* element, that he promises to adhere to.\
    Obligations are specified inside *\<Obligation\>* elements, which on
    their turn contain a *\<TriggersSet\>* element describing the events
    that trigger the obligation, an *\<Action\>* element describing the
    action to be performed, and a *\<Validity\>* element describing the
    validity time frame of the obligation.

<!-- -->

-   data handling preferences: The data handling preferences of a rule,
    embedded in the *\<DataHandlingPreferences\>* element, specify how
    the information obtained from the resource protected by this rule is
    to be treated after access is granted. The preferences are expressed
    by means of a set of authorizations and obligations, just like data
    handling policies. Data handling preferences always describe how the
    resource protected by the rule itself has to be treated, while data
    handling policies pertain to information that a requester will have
    to reveal in order to be granted access to the resource.

<!-- -->

-   sticky policies: The sticky policy associated to a resource, meaning
    the agreed-upon sets of granted authorizations and promised
    obligations with respect to a resource, is expressed in the
    \<StickyPolicy\> element. The sticky policy is usually the result of
    an automated matching procedure between the data subject's data
    handling preferences and the data controller's data handling policy.

<!-- -->

-   provisional actions: This element describes a set of provisional
    actions that needs to be fulfilled in order to satisfy an access
    control rule for certain server-side resource. The schema of the
    *\<ProvisionalAction\>* element is consciously kept independent of
    the particular provisional action that needs to be fulfilled, in
    order to allow the possibility for the future extensions with the
    new provisional action types.\
    In the current version of PPL specification the list of possible
    provisional actions includes revealing of users' (requestor)
    attributes, signing a statement, "spending" the credential which is
    understood as a mean of restricting number of times that the same
    credential can be used.

Note: PPL doesn't use the standard *\<xacml:Obligations\>* element to
specify the obligations because it can only be used to specify
obligations that the local PEP enforces to the resource being protected.
It cannot be used for data handling preferences either, since the latter
specify obligations that the recipient of the resource has to adhere to,
rather than the PEP that is protecting access to the resource.

#### Matching mechanisms[¶](#Matching-mechanisms)

For the basic XACML part, the tool used is the java-based Heras-af
(<http://www.herasaf.org/>). For the Primelife privacy extension part,
PrimeLife defines an Obligations Matching Engine (OME). A new component
of this kind is required in PrimeLife because particular emphasis is
given, to protect the privacy, to the obligations, which defines how
information must be treated when not under the data subject control
(e.g. how much time can be kept and stored, if they must be anonymized,
if they can be forwarded to third parties, ...).\
Usually OME performs the matching at the data subject side, but this
operation can be performed also at the data controller side: If the
information is considered for forwarding to a third party (named
"downstream data controller"), the data controller performs a matching
between its policy and the downstream data controller.\
The evaluation is performed comparing the user preferences versus the
data controller policies, for each obligation. The result is "true" if
the policy is more restrictive than the preference, "false" otherwise.
An obligation is more restrictive if is more restrictive both on the
action and on the trigger part. More restrictive on the trigger means
that for each preference trigger there exists a more restrictive trigger
in the policy counterpart (in the policy part can be present more
triggers than in the preferences). Action and trigger matching is not
fully defined, open to future extension and what "more restrictive"
means could slightly differ between different OME's implementation.

### P3P vs XACML[¶](#P3P-vs-XACML)

More than one privacy language are available. In the following a brief
description of P3P and XACML is provided.

#### Platform for Privacy Preferences Project (P3P)[¶](#Platform-for-Privacy-Preferences-Project-P3P)

From the W3C working group the P3P is define as follows.

The Platform for Privacy Preferences Project (P3P) enables Web sites to
express their privacy practices in a standard format that can be
retrieved automatically and interpreted easily by user agents. P3P user
agents will allow users to be informed of site practices (in both
machine- and human-readable formats) and to automate decision-making
based on these practices when appropriate. Thus users need not read the
privacy policies at every site they visit.

Although P3P provides a technical mechanism for ensuring that users can
be informed about privacy policies before they release personal
information, it does not provide a technical mechanism for making sure
sites act according to their policies. Products implementing this
specification MAY provide some assistance in that regard, but that is up
to specific implementations and outside the scope of this specification.
However, P3P is complementary to laws and self-regulatory programs that
can provide enforcement mechanisms. In addition, P3P does not include
mechanisms for transferring data or for securing personal data in
transit or storage. P3P may be built into tools designed to facilitate
data transfer. These tools should include appropriate security
safeguards.

#### eXtensible Access Control Markup Language (XACML)[¶](#eXtensible-Access-Control-Markup-Language-XACML)

The eXtensible Access Control Markup Language defines a core XML schema
for representing authorization and entitlement policies.\
It is an OASIS standard for managing access control policy. Released in
2003 and based on XML, the Sun-developed XACML was designed to become a
universal standard for describing who has access to which resources.
XACML includes a policy language and a query language that results in a
Permit, Deny, Intermediate (error in query) or Not Applicable response.\
XACML queries, which are typically in the SAML format, are sent to a
Policy Enforcement Point (PEP), located at the file server or Web
server, which forms a request to the Policy Decision Point (PDP). The
PDP determines the answer based on policy and sends back its
determination to the PEP. Both the PEP and PDP may be the same
application in the same server or distributed across the network.

#### Pros and cons[¶](#Pros-and-cons)

P3P a language specifically designed to handle privacy, but it has been
designed for handle privacy on websites and has not successfully being
extended to handle privacy on applications, yet.

As a matter of fact, Policy Manager already use a reduced set version of
XACML and in order to maintain a certain coherence its use would be
preferable. Moreover, bindings between privacy and policy rules would be
easier to implement and maintain.

From the maturity perspective, definitely XACML is widely used and
already existing projects, such as PrimeLife, has already been using it.
On the other hand, P3P has not achieve such level of maturity and
adoption.

In conclusion, in spite of the fact that both languages would require a
`semantic driven` extension, XACML has been found to suit better webinos
needs.

### Ontology investigation[¶](#Ontology-investigation)

#### P3P ontology[¶](#P3P-ontology)

The elements from the P3P ontology are used by PrimeLife in
authorization tags ([PrimeLife: report on design and
implementation](http://primelife.ercim.eu/images/stories/deliverables/d5.3.4-report_on_design_and_implementation-public.pdf)):

    http://www.w3.org/2002/01/P3Pv1/current
    http://www.w3.org/2002/01/P3Pv1/admin
    http://www.w3.org/2002/01/P3Pv1/develop
    http://www.w3.org/2002/01/P3Pv1/tailoring
    http://www.w3.org/2002/01/P3Pv1/pseudo-analysis
    http://www.w3.org/2002/01/P3Pv1/pseudo-decision
    http://www.w3.org/2002/01/P3Pv1/individual-analysis
    http://www.w3.org/2002/01/P3Pv1/individual-decision
    http://www.w3.org/2002/01/P3Pv1/contact
    http://www.w3.org/2002/01/P3Pv1/historical
    http://www.w3.org/2002/01/P3Pv1/telemarketing
    http://www.w3.org/2006/01/P3Pv11/account
    http://www.w3.org/2006/01/P3Pv11/arts
    http://www.w3.org/2006/01/P3Pv11/browsing
    http://www.w3.org/2006/01/P3Pv11/charity
    http://www.w3.org/2006/01/P3Pv11/communicate
    http://www.w3.org/2006/01/P3Pv11/custom
    http://www.w3.org/2006/01/P3Pv11/delivery
    http://www.w3.org/2006/01/P3Pv11/downloads
    http://www.w3.org/2006/01/P3Pv11/education
    http://www.w3.org/2006/01/P3Pv11/feedback
    http://www.w3.org/2006/01/P3Pv11/finmgt
    http://www.w3.org/2006/01/P3Pv11/gambling
    http://www.w3.org/2006/01/P3Pv11/gaming
    http://www.w3.org/2006/01/P3Pv11/government
    http://www.w3.org/2006/01/P3Pv11/health
    http://www.w3.org/2006/01/P3Pv11/login
    http://www.w3.org/2006/01/P3Pv11/marketing
    http://www.w3.org/2006/01/P3Pv11/news
    http://www.w3.org/2006/01/P3Pv11/payment
    http://www.w3.org/2006/01/P3Pv11/sales
    http://www.w3.org/2006/01/P3Pv11/search
    http://www.w3.org/2006/01/P3Pv11/state
    http://www.w3.org/2006/01/P3Pv11/surveys

The purposes associated to the URIs are defined in [P3P 1.1
specification](http://www.w3.org/TR/P3P11/) .

An additional purpose is defined to indicate that data can be used for
purposes that are not specified at the time of transmission.\

    http://www.primelife.eu/purposes/unspecified

#### OWL ontology[¶](#OWL-ontology)

The OWL Web Ontology Language ([OWL Web Ontology Language
Reference](http://www.w3.org/TR/owl-ref/)) is designed for use by
applications that need to process the content of information instead of
just presenting information to humans.\
OWL language has been designed to facilitate processing of Web contents
by providing additional vocabulary along with a formal semantics.\
Resources are described following the [Resource Description
Framework](http://www.w3.org/TR/2002/WD-rdf-concepts-20021108/ "RDF"),
through an [RDF
Schema](http://www.w3.org/TR/2002/WD-rdf-concepts-20021108/).

OWL provides three increasingly expressive sublanguages designed for use
by specific communities of implementers and users.

-   **OWL Lite**: supports those users primarily needing a
    classification hierarchy and simple constraints. For example, while
    it supports cardinality constraints, it only permits cardinality
    values of 0 or 1. It should be simpler to provide tool support for
    OWL Lite than its more expressive relatives, and OWL Lite provides a
    quick migration path for thesauri and other taxonomies. Owl Lite
    also has a lower formal complexity than OWL DL, see the section on
    OWL Lite in the OWL Reference for further details.

<!-- -->

-   **OWL DL**: supports those users who want the maximum expressiveness
    while retaining computational completeness (all conclusions are
    guaranteed to be computable) and decidability (all computations will
    finish in finite time). OWL DL includes all OWL language constructs,
    but they can be used only under certain restrictions (for example,
    while a class may be a subclass of many classes, a class cannot be
    an instance of another class). OWL DL is so named due to its
    correspondence with description logics, a field of research that has
    studied the logics that form the formal foundation of OWL.

<!-- -->

-   **OWL Full**: is meant for users who want maximum expressiveness and
    the syntactic freedom of RDF with no computational guarantees. For
    example, in OWL Full a class can be treated simultaneously as a
    collection of individuals and as an individual in its own right. OWL
    Full allows an ontology to augment the meaning of the pre-defined
    (RDF or OWL) vocabulary. It is unlikely that any reasoning software
    will be able to support complete reasoning for every feature of OWL
    Full.

OWL is part of the growing stack of W3C recommendations related to the
Semantic Web.

From a webinos perspective, OWL is very complete as a language and it's
semantic driven. Although it is very complicated to get used to it.\
Introducing such high entrance barriers by adopting this solution to
describe resources in an application manifest, would affect application
development and this should be considered.

### Manifests synchronization[¶](#Manifests-synchronization)

Synchronization of policies among different PZPs, in the same Personal
Zone, could affect the privacy handling, taking into consideration the
scenario where the application asks for using API on another device. The
issue to face there, is that the polled PZP does not have all the
elements it needs to locally generate at runtime the decision: it lacks
the application data handling policies.

In order to sort this out, two different solutions could be taken into
account.

-   attach the application manifest (containing the data handling
    policies) to all the request that the application does
    -   PROS
        -   no further mechanisms of synchronization are involved
        -   it is not required to PZP to sign the attached manifest,
            because manifest provenance is guaranteed by the secure
            channel
    -   CONS
        -   overhead introduced in order to attach the application
            manifest to each request made by the application
        -   the application could deliver a different version of the
            data handling policies to different PZPs
        -   the application could change the data handling policies
            asking for less permissions in a deny case
        -   non trivial to implement a coherence control of the data
            handling policies across different personal zone, due to
            possible different application versions, with different
            manifests, installed

<!-- -->

-   synchronize all the applications manifest among all PZPs that
    belongs to the same personal zone
    -   PROS
        -   application does not have any control to its manifest after
            being installed
    -   CONS
        -   overhead introduced by synchronizing all PZPs belonging the
            same PZ, with all the application manifests installed in the
            Personal Zone

In this second scenario the communication across different PZs must be
specified. Synchronization across different Personal Zone is not a
feasible solution, especially if it aim is to synchronize all the
manifests of all the application installed in a Personal Zone. This
would just not only introduce a big overhead due to the amount of data
exchanged, but it also might break the privacy paradigm by delivering
the installed applications list outside the personal zone.

### Allow downstream usage[¶](#Allow-downstream-usage)

In webinos allowing the downstream would not only be impossible, because
the data controller entity is the application itself and, therefore, it
does not have a matching engine, but it would also break the paradigm
that has been considered so far, that leverage the concept of the
application as untrusted third-party entity.

### Respecting data handling policies[¶](#Respecting-data-handling-policies)

Data handling policies are a declaration from the application that
states its intentions about disclosed data.\
Considering applications that will run in the webinos Run Time (WRT),
the WRT itself could be the place where is feasible for the webinos
backend to verify that the application respects the data handling policy
declaration.\
Nevertheless, this behaviour introduce a high computational complexity
in order to oblige the application to respect declared limits of data
usage. Furthermore, having control on some actions is still not possible
even if we consider an invasive supervision by the WRT.\
In case of applications that runs in a browser, there is no feasible way
to check their behaviour and in this scenario data handling policies
cannot be enforced if the application is considered as untrusted.\
The feasible idea that stays behind is that data handling policies are
meant as a *"contract"* to from the application to the user that is
informed by webinos on what the application declares to do with the
data. This will help the user judging the application and prevent its
use if the behaviour is unclear or doesn't respect the obligations.

<span style="background:yellow;">The following sections are more what I
expect to see in a specification.</span>

Specification[¶](#Specification)
--------------------------------

<span style="background:yellow;">It would be useful to restructure this
and add some basics about where policy enforcement must happen (the
enforcement points) and what an application developer can expect to
happen to a resource request.</span>

### Data handling[¶](#Data-handling)

Two different entities are involved in data handling:

-   **data controller**: in our case is the application side. Is the
    entity that receive the data.
-   **data subject**: in the webinos scenario is the PZ, therefore the
    PZP and the PZH. Is the entity that holds the data.

In webinos data handling policies and preferences are expressed using
the PrimeLife Privacy Language (PPL) and the P3P ontology described
~~above~~ in ([PrimeLife: report on design and
implementation](http://primelife.ercim.eu/images/stories/deliverables/d5.3.4-report_on_design_and_implementation-public.pdf)),
particularly the authorization tags.

#### Authorization[¶](#Authorization)

<span style="background:yellow;">It isn't clear *where* this XML would
actually be written. Is it in a widget manifest? Is it in a policy.xml
file?</span>

Authorization is the first part of data handling where
preferences/intentions are declared.\
In the following example pseudonymous analysis only is allowed, using
the *\<Purpose\>* tag.

    1 <AuthorizationsSet>
    2     <AuthzUseForPurpose>
    3         <Purpose>http://www.w3.org/2002/01/P3Pv1/pseudo-analysis</Purpose>
    4     </AuthzUseForPurpose>
    5 </AuthorizationsSet>

#### Obligations[¶](#Obligations)

Obligations are a subset of data handling policies where additional
constraints are declared.\
Moreover, in this other section of this example it is required the data
deletion (using the *\<ActionDeletePersonalData/\>* tag) within five
days (using *\<Start\>* and *\<MaxDelay\>* tags).

     1 <ObligationsSet>
     2     <Obligation>
     3         <TriggersSet>
     4             <TriggerAtTime>
     5                 <Start><StartNow/></Start>
     6                 <MaxDelay>
     7                     <Duration>P0Y0M5DT0H0M0S</Duration>
     8                 </MaxDelay>
     9             </TriggerAtTime>
    10         </TriggersSet>
    11         <ActionDeletePersonalData/>
    12     </Obligation>
    13 </ObligationsSet>

### Policy matching and evaluation[¶](#Policy-matching-and-evaluation)

<span style="background:yellow;">Which 'allow/deny decision'?
Where?</span>

The allow/deny decision is the result of an automated matching procedure
between the application policies and the user policies.\
Application policies are composed of access control policies and data
handling policies.\
User policies are composed of access control policies and data handling
preferences.\
Privacy-related allow/deny decision is the result of the matching
between data subject's data handling preferences and data controller's
data handling policies.

<span style="background:yellow;">This diagram is useful, but perhaps
misleading. Surely the Policy is generated by the widget processor,
which is (in the current implementation) part of the PZP? It also looks
like there are two channels between the WRT and PZP (websocket and RPC)
when these are both the same, AFAIK.</span>

![](/redmine/attachments/download/2489)

<span style="background:yellow;">The following sentence doesn't tell me
very much</span>\
~~It is very important to find out how to match data handling policies
and data handling preferences. Of course actions of interpretation and
binding are required.~~

#### Policy matching[¶](#Policy-matching)

Policy matching can be divided into three sections:

1.  XACML access control (rows 2-9 in the following example). This is
    the usual matching of XACML policies <span
    style="background:yellow;"> matching to what?</span>.
2.  PPL tags that not fall within data handling obligations. For example
    data handling authorization (rows 11-15 in the following example)
    and provisional action (rows 32-35). Matching algorithms are the
    same as for XACML access control.
3.  Data handling obligations (rows 16-30 in the following example).
    They are different from XACML obligations and require different
    matching algorithms.

<!-- -->

     1 <Policy>
     2     <Target>
     3         <Subject>
     4             <Subject-match attr="distributor-key-fingerprint" match="[the fingerprint of the application distributor]"/>
     5         </Subject>
     6     </Target>
     7     <Rule effect="prompt-blanket">
     8         <Resource-match attr="device-cap" match="http://www.w3.org/ns/api-perms/geolocation"/>
     9     </Rule>
    10     <DataHandlingPreference PolicyId="#pseudo-analysisDHP">
    11         <AuthorizationsSet>
    12             <AuthzUseForPurpose>
    13                 <Purpose>http://www.w3.org/2002/01/P3Pv1/pseudo-analysis</Purpose>
    14             </AuthzUseForPurpose>
    15         </AuthorizationsSet>
    16         <ObligationsSet>
    17             <Obligation>
    18                 <TriggersSet>
    19                     <TriggerAtTime>
    20                         <Start>
    21                             <StartNow/>
    22                         </Start>
    23                         <MaxDelay>
    24                             <Duration>P0Y0M7DT0H0M0S</Duration>
    25                         </MaxDelay>
    26                     </TriggerAtTime>
    27                 </TriggersSet>
    28             <ActionDeletePersonalData/>
    29             <Obligation>
    30         <ObligationsSet>
    31     </DataHandlingPreference>
    32     <ProvisionalAction ActionId="http://www.primelife.eu/ppl/RevealUnderDHP">
    33         <AttributeValue>http://www.webinos.org/GeolocationData</AttributeValue>
    34         <AttributeValue>#pseudo-analysisDHP</AttributeValue>
    35     </ProvisionalAction>
    36 </Policy>

#### Obligations matching[¶](#Obligations-matching)

Exact match algorithm can't be used matching obligations. Data subject
obligations (in data handling preference) and data controller
obligations (in data handling policy) must be compared evaluating which
obligations are more restrictive.\
If data controller obligations are not less restrictive than data
subject obligations, it means that data subject obligations are not
violated, so there is a match.\
If data controller obligations are less restrictive than data subject
obligations, there is a mismatch that must be notified to the user to
decide whether to send the requested data or discard the transaction.\
Obligations are composed of actions (row 28 in the previous example) and
triggers (rows 18-27 in the previous example), so an obligation is more
restrictive if it is more restrictive in both, actions and triggers. All
triggers in the preferences must be in the policy, but the policy can
specify more triggers.\
What "more restrictive" means depends on matching rules defined in the
matching engine implementation.\
For example a data handling policy ensuring data deletion is more
restrictive if time specified in the *\<Duration\>* tag is shorter than
data handling preferences requirement (row 24). It can be more difficult
to define the notion of "more restrictive" for example when the
obligation require to send periodically an email to inform the user
about access to his data. Notifications sent with a shorter time
interval can be considered more restrictive or can be considered spam.

### Synchronization concerning privacy[¶](#Synchronization-concerning-privacy)

<span style="background:yellow;">Suggest rewording based on the new
synchronisation definitions</span>

Synchronization is a topic related to the whole policy process and not
just to the privacy side.\
The *allow/deny* decision is generated from the aforementioned
Obligation Matching Engine and calculated at run-time. Hence, from the
privacy perspective, policy preferences must be consistent and
synchronized.

The main idea is to have an *exceptions.xml* file that goes alongside
with the existing *policy.xml*.\
Synchronization will treat these policy files as follows:

-   *policy.xml*: will be synchronized across the whole personal zone.
    It is the same for every device and it gathers inside itself all the
    preferences that the user has specified.
-   *exceptions.xml*: is an exception file that specifies particular
    preferences for a specific device.

Synchronization conflicts are settled by a `master copy` of the
*policy.xml* file, stored in the PZH.

The exceptions file is a XACML-like file where strong denial rules are
specified that target resources on the local device. In order to
maintain consistency, the file is uploaded from the PZP to the PZH. A
version control mechanism should also be implemented, in order to
synchronize it to the latest copy of the local *exception.xml* file. On
the other hand, synchronization is never considered from PZH to PZP.\
In order to maintain persistence and being consistent on modifications,
the *exceptions.xml* file should be editable just from the PZP that owns
it. The reason why it is also uploaded to the PZH is because it must be
displayable from the policy editor on the PZH. Uploading it, helps to
understand why a request is denied on a device, from the Personal Zone
Hub policy administration interface, without requiring
editing/displaying it on to the device.

#### Manifests synchronization and usage[¶](#Manifests-synchronization-and-usage)

In order to allow data handling policies and data handling preferences
matching when calling a remote API, the called PZP must have the
application data handling policies.\
Inside the Personal Zone, all manifests of all installed applications
are synchronized across the Personal Zone. This means that a device has
all the manifests that are installed on all other devices, in order to
be ready to answer to a request to that comes from the same personal
zone. Conflicts are settled by separately storing different versions of
the manifest of same the application.\
When calling an API outside the Personal Zone, the application manifest
is attached to the call. The policy manager of the calling PZP
intercepts the request, attaches the manifest, and forwards the request
to the called PZP.

<span style="background:yellow;">Is it the application manifest
attached, or an identifier of the application manifest? The whole
manifest might be unnecessary, but I don't have a strong opinion.</span>

under construction

<span style="background:yellow;">These diagrams are great - they need to
fit onto A4, though</span>

![](/redmine/attachments/download/2507)\
![](/redmine/attachments/download/2508)\
![](/redmine/attachments/download/2506)

**Use**

**Language**

**Synchronization**

**Editability**

*policy.xml*

contains all the policies and the rules related to all APIs of targeted
devices inside the personal zone,\
with the opportunity to specify, through some attributes, combination of
rules device/application/APIs related

reduced XACML

non-blind synchronization across the personal zone

editable by policy editor

*exceptions.xml*

contains strong restrictions related to the device where it's stored.
It's copied on the PZH with informative intent.\
It has higher priority to the *policy.xml* file, because its
restrictions are device specific.

reduced XACML

version controlled and uploaded on PZH, but never synchronized

editable only by policy editor on PZP

*manifests*

contains the ~~Access Control Policies~~ <span
style="background:yellow;">feature tags</span>, that specify which APIs
and data the application wants to retrieve,\
and the data handling policies that are a declaration statement of the
application intents about gathered data

Access Control Policies: XACML-like, data handling policies: PPL tags

synchronized across the whole personal zone

not editable

<span style="background:yellow;">It looks like we're making a change
from the widget manifest specifications - we need to go into more detail
if so. Widget manifests just define \<feature\> tags</span>

#### Example of *exceptions.xml*[¶](#Example-of-exceptionsxml)

The following example is meant to show a specific deny rule, in this
case is the dial of the camera, to every application.

     1 <policy-set combine="deny-overrides">
     2     <policy combine="first-applicable">
     3         <target/>
     4 
     5          <rule effect="deny">
     6              <condition>
     7                  <resource-match attr="api-feature" match="http://www.w3.org/ns/api-perms/mediacapture"/>
     8              </condition>
     9          </rule>  
    10 
    11          <rule effect="permit"/>
    12     </policy>
    13 
    14     <policy>
    15         [...]
    16     </policy>
    17 
    18     [...]
    19 
    20 </policy-set>

#### Example of *policy.xml*[¶](#Example-of-policyxml)

In the following example a policy that involves a specific user, a
device and targets a specific application.

     1 
     2 <policy-set combine="deny-overrides">
     3     <policy combine="first-applicable">
     4         <target>
     5             <subject>
     6                 <subject-match attr="id" match="appID"/>
     7                 <subject-match attr="version" match="1.0"/>
     8                 <subject-match attr="user-id" match="pzh.isp.com/jessica@example.com/Jessica's+Mobile/App "/>
     9             </subject>
    10         </target>
    11 
    12         <rule effect="deny">
    13             <condition combine="or">
    14                 <resource-match attr="api-feature" match="http://www.w3.org/ns/api-perms/contacts.read"/>
    15             </condition>
    16         </rule>
    17 
    18         <rule effect="permit">
    19             [...]
    20         </rule>
    21 
    22         <rule effect="deny" />
    23     </policy>
    24 </policy-set>

<span style="background:yellow;">Can we link to any more examples
anywhere? WAC have a whole repository, I believe.</span>

---

Synchronisation and coherence[¶](#Synchronisation-and-coherence)
================================================================

<span style="background:yellow;">Suggest rewording from
'synchronisation' based on new definitions. Perhaps 'consistency' not
coherence?</span>

-   [Policy Architecture](#Policy-Architecture)
-   [Introduction and focus](#Introduction-and-focus)
    -   [Introduction and gap analysis](#Introduction-and-gap-analysis)
        -   [Main differences: 3.1 specs vs 4.1
            implementation](#Main-differences-31-specs-vs-41-implementation)
    -   [Focus](#Focus)
-   [Privacy enforcement point](#Privacy-enforcement-point)
    -   [Scope](#Scope)
        -   [Useful readings](#Useful-readings)
    -   [Background (informative)](#Background-informative)
        -   [Privacy architecture](#Privacy-architecture)
            -   [PrimeLife findings](#PrimeLife-findings)
            -   [Subjects](#Subjects)
            -   [Language main components](#Language-main-components)
            -   [New elements](#New-elements)
            -   [Matching mechanisms](#Matching-mechanisms)
        -   [P3P vs XACML](#P3P-vs-XACML)
            -   [Platform for Privacy Preferences Project
                (P3P)](#Platform-for-Privacy-Preferences-Project-P3P)
            -   [eXtensible Access Control Markup Language
                (XACML)](#eXtensible-Access-Control-Markup-Language-XACML)
            -   [Pros and cons](#Pros-and-cons)
        -   [Ontology investigation](#Ontology-investigation)
            -   [P3P ontology](#P3P-ontology)
            -   [OWL ontology](#OWL-ontology)
        -   [Manifests synchronization](#Manifests-synchronization)
        -   [Allow downstream usage](#Allow-downstream-usage)
        -   [Respecting data handling
            policies](#Respecting-data-handling-policies)
    -   [Specification](#Specification)
        -   [Data handling](#Data-handling)
            -   [Authorization](#Authorization)
            -   [Obligations](#Obligations)
        -   [Policy matching and
            evaluation](#Policy-matching-and-evaluation)
            -   [Policy matching](#Policy-matching)
            -   [Obligations matching](#Obligations-matching)
        -   [Synchronization concerning
            privacy](#Synchronization-concerning-privacy)
            -   [Manifests synchronization and
                usage](#Manifests-synchronization-and-usage)
            -   [Example of exceptions.xml](#Example-of-exceptionsxml)
            -   [Example of policy.xml](#Example-of-policyxml)
-   [Synchronisation and coherence](#Synchronisation-and-coherence)
    -   [Access control policy elements to
        synchronise](#Access-control-policy-elements-to-synchronise)
    -   [Cross-Device Policy Synchronisation Scenarios (to
        update)](#Cross-Device-Policy-Synchronisation-Scenarios-to-update)
-   [Policy Editor](#Policy-Editor)
    -   [Introduction](#Introduction)
    -   [Multi user Environment](#Multi-user-Environment)
    -   [JavaScript Policy Editor UI](#JavaScript-Policy-Editor-UI)
    -   [Requirements](#Requirements)
    -   [Policy Editor Deployment](#Policy-Editor-Deployment)
    -   [Offline Edit Local Policy and Online edit remote
        Policy](#Offline-Edit-Local-Policy-and-Online-edit-remote-Policy)
    -   [Code Example](#Code-Example)
    -   [Screenshots](#Screenshots)
-   [Grammars for access control and privacy
    policies](#Grammars-for-access-control-and-privacy-policies)
    -   [Access control policies](#Access-control-policies)
    -   [References](#References)
        -   [RELAXNGCS](#RELAXNGCS)
        -   [WACXMLSP](#WACXMLSP)

Access control policy elements to synchronise[¶](#Access-control-policy-elements-to-synchronise)
------------------------------------------------------------------------------------------------

This section describe which elements of a policy can be synchronized in
order to share policies among PZPs and PZH in a coherent way.

In the access control policies grammar
([Grammars\_for\_access\_control\_and\_privacy\_policies](/redmine/projects/wp3-3/wiki/Grammars_for_access_control_and_privacy_policies#Access-control-policies)),
some elements (i.e. policy-set, policy, rule) contain an id attribute
useful for synchronisation purposes.

Cross-Device Policy Synchronisation Scenarios (to update)[¶](#Cross-Device-Policy-Synchronisation-Scenarios-to-update)
----------------------------------------------------------------------------------------------------------------------

<span style="background:yellow;">As per conversation with Salvatore -
needs updating.</span>

***Installing an app ('A') on device 'D', granting it permissions, and
then wanting to allow it to use device 'E':***

-   Assume device 'D' and 'E' are used only by the user Justin.
-   Justin "installs" 'A' on 'D'.
-   At end of install process, after granting the application some
    permissions, Justin is prompted "This application can be used on
    multiple devices. Install on [list of user devices and tick box]"
-   Justin selects that the application should be installed on device
    'E' as well.
-   Prompt: "Give application permission to access the same resources? /
    Customise permissions / Ask me later?"
-   Justin clicks "give same resources"
-   Webinos runtime creates a message to device 'E' containing
    instructions for doing this.\
     o Name of application, permissions granted on this device\
     o Justin's credentials/signature
-   Message queued to be sent on the overlay network to the other
    device, using a secure transport session. This may happen
    immediately if possible (e.g. if device 'D' is a home server) or may
    wait for a proximity event, or may be queued on a cloud service
    waiting for the user to interact with device 'D' in the future.

***Using device 'D' to remove permission for app 'A' to access resource
'R' on all devices (Device 'D' and 'E'):***

-   Peter has been using app 'A' and decides he doesn't trust it after
    being told by a friend that it sends data to advertisers.
-   He is using device 'D', as this is his main device
-   He navigates to the policy management area (or maybe he right-clicks
    on the application icon) and selects "remove".
-   He is asked whether he wants it to be removed across all of his
    devices (a list of his local devices might be selected) and he
    clicks on all of them.
-   Webinos runtime generates a signed update message to each device in
    his cloud, including device 'E', in a secure manner:\
     o "Remove app", app name\
     o user credentials, device credentials
-   These are sent when the device is able to connect to other devices
    and when these devices are capable of authenticating themselves
-   Depending on the device security policies, the deletion may happen
    automatically, or the app might be isolated and require local
    permission to delete

***Using device 'D' to authorise app 'A' to access resource 'P' on
device 'E' (E and D owned by the same user):***\
***Using device 'D' to authorise app 'A' to access resource 'P' on
device 'E' (E and D owned by different users):***

-   Helen is using app 'A' and wants to use it to access her friend
    Gloria's photos on device 'D'.
-   She selects to discover other devices, and finds Gloria's device 'D'
-   She requests access to photos on 'D'.
-   Gloria's device prompts Gloria to allow this and presents Alice's
    device details, as well as the history of communication with this
    device.
-   Gloria approves the communication
-   Gloria's runtime adds a temporary permission for the photo app
    (resource 'P') on Gloria's phone

***Updating labels on stored user data - marking some as 'private' on
device 'D' and having the same data on device 'E' automatically
tagged:***

-   Gloria decides to make sure her personal data is being protected
    appropriately
-   She looks at her webinos device to see what data about her is known
-   Some data is marked as "private" and other data is not.
-   She notes that her "place of work" is listed but not marked as
    private
-   She tags this data as "private" and therefore all policies apply to
    it that apply to other private data.
-   She tells webinos to update this setting on all her devices
-   Webinos queues a signed policy update request for device 'E':\
     o Update policy, data item, new XACML\
     o User credentials, device credentials

***Registering device 'F' as being a trusted device with respect to
device 'D' and device 'E':***

-   Anna has just bought a new tablet PC ('F'), and would like it to
    automatically synchronise with other devices
-   She uses it to discover her mobile phone ('D'), a webinos device.
-   On discovery, she selects the mobile phone symbol and chooses to
    join the "local webinos device cloud"
-   Untrusted message from tablet to phone:\
     o "device join", device ID
-   This prompts her mobile phone to authenticate her
-   She enters her credentials into the phone
-   The phone adds this device to a "known" and "personal devices" set
-   The tablet PC downloads the relevant set of policies (as well as
    profile info - out of scope ) from the mobile phone and applies
    them. This includes the identity of other devices in the cloud.

Policy Editor[¶](#Policy-Editor)
================================

-   [Policy Architecture](#Policy-Architecture)
-   [Introduction and focus](#Introduction-and-focus)
    -   [Introduction and gap analysis](#Introduction-and-gap-analysis)
        -   [Main differences: 3.1 specs vs 4.1
            implementation](#Main-differences-31-specs-vs-41-implementation)
    -   [Focus](#Focus)
-   [Privacy enforcement point](#Privacy-enforcement-point)
    -   [Scope](#Scope)
        -   [Useful readings](#Useful-readings)
    -   [Background (informative)](#Background-informative)
        -   [Privacy architecture](#Privacy-architecture)
            -   [PrimeLife findings](#PrimeLife-findings)
            -   [Subjects](#Subjects)
            -   [Language main components](#Language-main-components)
            -   [New elements](#New-elements)
            -   [Matching mechanisms](#Matching-mechanisms)
        -   [P3P vs XACML](#P3P-vs-XACML)
            -   [Platform for Privacy Preferences Project
                (P3P)](#Platform-for-Privacy-Preferences-Project-P3P)
            -   [eXtensible Access Control Markup Language
                (XACML)](#eXtensible-Access-Control-Markup-Language-XACML)
            -   [Pros and cons](#Pros-and-cons)
        -   [Ontology investigation](#Ontology-investigation)
            -   [P3P ontology](#P3P-ontology)
            -   [OWL ontology](#OWL-ontology)
        -   [Manifests synchronization](#Manifests-synchronization)
        -   [Allow downstream usage](#Allow-downstream-usage)
        -   [Respecting data handling
            policies](#Respecting-data-handling-policies)
    -   [Specification](#Specification)
        -   [Data handling](#Data-handling)
            -   [Authorization](#Authorization)
            -   [Obligations](#Obligations)
        -   [Policy matching and
            evaluation](#Policy-matching-and-evaluation)
            -   [Policy matching](#Policy-matching)
            -   [Obligations matching](#Obligations-matching)
        -   [Synchronization concerning
            privacy](#Synchronization-concerning-privacy)
            -   [Manifests synchronization and
                usage](#Manifests-synchronization-and-usage)
            -   [Example of exceptions.xml](#Example-of-exceptionsxml)
            -   [Example of policy.xml](#Example-of-policyxml)
-   [Synchronisation and coherence](#Synchronisation-and-coherence)
    -   [Access control policy elements to
        synchronise](#Access-control-policy-elements-to-synchronise)
    -   [Cross-Device Policy Synchronisation Scenarios (to
        update)](#Cross-Device-Policy-Synchronisation-Scenarios-to-update)
-   [Policy Editor](#Policy-Editor)
    -   [Introduction](#Introduction)
    -   [Multi user Environment](#Multi-user-Environment)
    -   [JavaScript Policy Editor UI](#JavaScript-Policy-Editor-UI)
    -   [Requirements](#Requirements)
    -   [Policy Editor Deployment](#Policy-Editor-Deployment)
    -   [Offline Edit Local Policy and Online edit remote
        Policy](#Offline-Edit-Local-Policy-and-Online-edit-remote-Policy)
    -   [Code Example](#Code-Example)
    -   [Screenshots](#Screenshots)
-   [Grammars for access control and privacy
    policies](#Grammars-for-access-control-and-privacy-policies)
    -   [Access control policies](#Access-control-policies)
    -   [References](#References)
        -   [RELAXNGCS](#RELAXNGCS)
        -   [WACXMLSP](#WACXMLSP)

Introduction[¶](#Introduction)
------------------------------

The Policy Editor provides support for viewing and editing policies
based on the webinos policy standards. You can define and modify which
policies apply to which entities. The Policy Editor GUI helps specify in
which services applications are allowed to access. It can also be used
to define trusted relationships with other devices in order to share
services.

The Policy Editor is an application with access to functionality that
normal applications shouldn’t: i.e., the ability to edit XACML policy
files used by the PZP. This is identified by the fact that the policy
editor requests access to the File API and then to the specific files
used by the webinos policy framework. There's a requirement that users
are properly authenticated before making changes to access control
policies with any tool which is reflected in the Authentication section.

**Policy documents**: These are XACML documents that conform to the
Policy standards. They declare policies together with the subjects to
which the policies apply. You can load policy documents onto the Web
Policy Editor to view, load or modify.

**Policies**: These specify policy requirements. Policies are derived
from the policy declarations contained in a policy document and are
created automatically when a policy document is loaded.

**Group policy**: It is a nice way of managing Users, PZP’s. It is can
provide infrastructure in the webinos project that is used to centralize
and automate the management of configuration or policy settings for
users and PZP’s. Group Policies are the rules that can be applied to
PZP’s using the Policy Editor UI. These rules can be used significantly
to improve the baseline security of the webinos.

Multi user Environment[¶](#Multi-user-Environment)
--------------------------------------------------

Policies are used to limit specific applications, users and devices from
doing things that the personal zone owner might not want them to do.
webinos represents policies using XACML as defined in previous parts of
this specification. It is expected that a webinos PZP will also have a
graphical user interface to create and manage a consistent and correct
security policy.

In this section we describe one implementation of a graphical user
interface with the simplicity of a simple menu-driven editor that not
only provides webinos with a policy in the specified syntax but also
integrates techniques to support administrative policy verification.
This mechanism should enable the user to clearly and correctly specify
the policy and also support user verification that the specified policy
is free of inconsistencies and contradictions. The purpose of this work
is to analyze, design and implement a policy editor interface that
guides a user to specify various attributes of the webinos security
policy. The policy is stored in an intermediate XACML format.

JavaScript Policy Editor UI[¶](#JavaScript-Policy-Editor-UI)
------------------------------------------------------------

Although XACML provides the flexibility to edit the policy file in any
XACML editor, it would still be convenient to provide a graphical user
interface to manipulate the policy file. This would help to eliminate
inadvertent errors, and would enable global policy decisions to be
applied throughout the policy file. An experienced system administrator
could still capitalize on the use of the XACML policy format and edit
the file in the absence of the graphical user interface (GUI), but for
normal users a JavaScript based GUI was therefore proposed to create,
view and modify the Policies. Using the File API that webinos provides
we can have drop-down menus and dialog boxes that guide the user to
input various parameters required for the policy file. To enable
maintenance of the GUI, called the Policy-Editor, a separate XACML
configuration file was used to feed the data.

Requirements[¶](#Requirements)
------------------------------

The Policy Editor implements the following requirements:

**User policy authoring** - Security policies shall be authorable by
users.

**User policy editor** - Policies shall be created and modified by users
using a webinos policy editor(webinos shall allow users to express their
privacy preferences consistently).

Policy Editor Deployment[¶](#Policy-Editor-Deployment)
------------------------------------------------------

![local](/redmine/attachments/download/2819 "local")

Offline Edit Local Policy and Online edit remote Policy[¶](#Offline-Edit-Local-Policy-and-Online-edit-remote-Policy)
--------------------------------------------------------------------------------------------------------------------

![Local\_Policies](/redmine/attachments/download/3008 "Local_Policies")

Alice has two devices registered in her Personal Zone that are connected
to the PZH (Personal Zone Hub) through PZP1 (Personal Zone Proxy 1) and
PZP2 (Personal Zone Proxy 2). She opens the Policy Editor on PZP1 and
this presents GUI for Policy editing (PZP1\_PolicyEditor). The PZP1
fetches and loads the selected Policy files to the PZP1\_PolicyEditor
and displays the files to Alice. She edits the File and saves them in
her PZP1 which is on her Device 1. She decides to connect to the
internet so that the updated file gets synchronized to the Device 2. She
authenticates to the PZH and gets connected (see the Authentication
specification for more details). The files are synchronized to the PZP
on the Device 2. Each PZP regularly synchronises policies from the PZH
which are available to the connected PZP's. The Policy Editor allows the
user to interact with a GUI, Once the user has created policies they can
be modified, copied and moved within the PZP. These changes are enacted
by the PZP's.

Code Example[¶](#Code-Example)
------------------------------

The Policy Editor is an application that the core webinos runtime
provides. It uses the similar specification provided by the File API for
representing file objects in web applications, as well as
programmatically selecting them and accessing their data. The Policy
Editor includes the basic Interfaces that File API uses, WebIDL
declaration included in the W3C File Reader specification like:

The complete webinos specification for File API can be found under the
link : <http://dev.webinos.org/specifications/draft/filereader.html>\
The complete W3C specification for the File API can be found under the
link: <http://www.w3.org/TR/2010/WD-FileAPI-20101026/>

A Policy File can be created, copy, modified and move by using the File
API.

    $(document).bind("file.create", utils.bind(this.create, this));
    $(document).bind("file.copy", utils.bind(this.copy, this));
    $(document).bind("file.modify", utils.bind(this.modify, this));
    $(document).bind("file.move", utils.bind(this.move, this)); 

The .bind() method is used for attaching an event handler directly to
elements. Handlers are attached to the currently selected elements in
the jQuery object, so those elements must exist at the point the call to
.bind() occurs. For example, in the call.bind('create', handler), the
string create is the event type, and the stringname is the namespace,
similarly it applies for copy, modify and move.

Screenshots[¶](#Screenshots)
----------------------------

Below some screenshots of a basic webinos policy editor are presented.
These screeshots show three phases of the editing process:

-   binding to PZH/PZP,
-   policy list retrieval
-   policy editing

![](/redmine/attachments/download/3009)\
![](/redmine/attachments/download/3010)\
![](/redmine/attachments/download/3011)\
![](/redmine/attachments/download/3012)

**Sources**

[1] <http://dev.webinos.org/specifications/draft/filereader.html>\
[2] <http://www.w3.org/TR/2010/WD-FileAPI-20101026/>

Grammars for access control and privacy policies[¶](#Grammars-for-access-control-and-privacy-policies)
======================================================================================================

Policies can be edited by users through the Policy Editor (described in
the previous section) or manually. Manual editing must be done taking in
account the grammar provided in this section in order to avoid parsing
problems. The grammars presented respect the RELAX NG Compact Syntax
([RELAXNGCS](/redmine/projects/wp3-3/wiki/Policy#RELAXNGCS))

Access control policies[¶](#Access-control-policies)
----------------------------------------------------

The grammar for access control policies comes from the one defined in
WAC ([WACXMLSP](/redmine/projects/wp3-3/wiki/Policy#WACXMLSP)) with PPL
extensions.

     1 namespace a = "http://relaxng.org/ns/compatibility/annotations/1.0" 
     2 datatypes xs = "http://www.w3.org/2001/XMLSchema-datatypes" 
     3 
     4 policy-set =
     5   element policy-set {
     6     policy-set.attlist, target?, (policy-set | policy)*
     7   }
     8 policy-set.attlist &=
     9   [ a:defaultValue = "deny-overrides" ]
    10   attribute combine {
    11     "deny-overrides" | "permit-overrides" | "first-matching-target" 
    12   }?,
    13   attribute id { text }?
    14 
    15 policy = element policy { policy.attlist, target?, rule* }
    16 policy.attlist &=
    17   [ a:defaultValue = "deny-overrides" ]
    18   attribute combine {
    19     "deny-overrides" | "permit-overrides" | "first-applicable" 
    20   }?,
    21   attribute description { text }?,
    22   attribute id { text }?
    23 
    24 rule = element rule { rule.attlist, condition? }
    25 rule.attlist &=
    26   [ a:defaultValue = "permit" ]
    27   attribute effect {
    28     "permit" 
    29     | "prompt-blanket" 
    30     | "prompt-session" 
    31     | "prompt-oneshot" 
    32     | "deny" 
    33   }?,
    34   [ a:defaultValue = "none" ]
    35   attribute require-reauth {
    36     "none" 
    37     | "local" 
    38     | "remote" 
    39   }?,
    40   [ a:defaultValue = "0" ]
    41   attribute auth-expires-after-min { xs:nonNegativeInteger }?,
    42   attribute id { text }?
    43 
    44 target = element target { target.attlist, subject+ }
    45 target.attlist &= empty
    46 
    47 subject = element subject { subject.attlist, subject-match+ }
    48 subject.attlist &= empty
    49 
    50 condition =
    51   element condition {
    52     condition.attlist,
    53     (condition | subject-match | resource-match | environment-match)+
    54   }
    55 condition.attlist &=
    56   [ a:defaultValue = "and" ] attribute combine { "and" | "or" }?
    57 
    58 match-attrs =
    59   attribute attr { text },
    60   attribute match { text }?,
    61   [ a:defaultValue = "glob" ]
    62   attribute func { "equal" | "glob" | "regexp" }?
    63 
    64 subject-match = element subject-match { subject-match.attlist, text }
    65 subject-match.attlist &= match-attrs
    66 
    67 match-model = (text | subject-attr | resource-attr | environment-attr)*
    68 
    69 resource-match =
    70   element resource-match { resource-match.attlist, match-model }
    71 resource-match.attlist &= match-attrs
    72 
    73 environment-match =
    74   element environment-match { environment-match.attlist, match-model }
    75 environment-match.attlist &= match-attrs
    76 
    77 attr-attrs = attribute attr { text }
    78 subject-attr = element subject-attr { subject-attr.attlist, empty }
    79 subject-attr.attlist &= attr-attrs
    80 resource-attr = element resource-attr { resource-attr.attlist, empty }
    81 resource-attr.attlist &= attr-attrs
    82 environment-attr =
    83   element environment-attr { environment-attr.attlist, empty }
    84 environment-attr.attlist &= attr-attrs
    85 
    86 start = policy-set
    87 start |= policy

References[¶](#References)
--------------------------

### RELAXNGCS[¶](#RELAXNGCS)

[RELAX NG Compact Syntax](http://relaxng.org/compact-20021121.html)

### WACXMLSP[¶](#WACXMLSP)

[WAC: XML definition of Security
Policy](http://specs.wacapps.net/2.0/jun2011/core/wacxml.rnc "RelaxNG")

