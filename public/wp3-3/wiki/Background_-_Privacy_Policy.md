Background - Privacy and data handling policies[¶](#Background-Privacy-and-data-handling-policies)
==================================================================================================

-   [Background - Privacy and data handling
    policies](#Background-Privacy-and-data-handling-policies)
    -   [Scope](#Scope)
        -   [Useful readings](#Useful-readings)
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

Scope[¶](#Scope)
----------------

This section describes the results of the investigations on privacy
handling on webinos architecture.

### Useful readings[¶](#Useful-readings)

-   [PrimeLife: Report on
    policies](http://www.primelife.eu/images/stories/deliverables/d5.2.2-second_research_report_on_policies-public.pdf)

Privacy architecture[¶](#Privacy-architecture)
----------------------------------------------

### PrimeLife findings[¶](#PrimeLife-findings)

Here follows a brief description of PrimeLife attempt to define an
architecture and language for privacy policy specification. This will
likely be of inspiration for the webinos definition of policy privacy
architecture. Majority of information provided here comes from PrimeLife
deliverable
[D5.3.4](http://www.primelife.eu/images/stories/deliverables/d5.3.4-report_on_design_and_implementation-public.pdf)
The analysis is particularly focused on the PrimeLife Privacy Policy
Language (PPL) designed for handling access control and privacy.

### Subjects[¶](#Subjects)

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

### Language main components[¶](#Language-main-components)

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

### New elements[¶](#New-elements)

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

### Matching mechanisms[¶](#Matching-mechanisms)

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

P3P vs XACML[¶](#P3P-vs-XACML)
------------------------------

More than one privacy language are available. In the following a brief
description of P3P and XACML is provided.

### Platform for Privacy Preferences Project (P3P)[¶](#Platform-for-Privacy-Preferences-Project-P3P)

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

### eXtensible Access Control Markup Language (XACML)[¶](#eXtensible-Access-Control-Markup-Language-XACML)

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

### Pros and cons[¶](#Pros-and-cons)

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

Ontology investigation[¶](#Ontology-investigation)
--------------------------------------------------

### P3P ontology[¶](#P3P-ontology)

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

### OWL ontology[¶](#OWL-ontology)

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

Allow downstream usage[¶](#Allow-downstream-usage)
--------------------------------------------------

In webinos allowing the downstream would not only be impossible, because
the data controller entity is the application itself and, therefore, it
does not have a matching engine, but it would also break the paradigm
that has been considered so far, that leverage the concept of the
application as untrusted third-party entity. Consequently data handling
in webinos is expressed using a subset of the PPL language that does not
include the *\<authzDownstreamUsage\>* tag, because the downstream usage
is always denied.

Respecting data handling policies[¶](#Respecting-data-handling-policies)
------------------------------------------------------------------------

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

