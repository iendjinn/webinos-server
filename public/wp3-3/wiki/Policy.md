[SM] @Main editor: please put <span
style="background:yellow;">[Background - Access Control Policy](.html),
[Background - Privacy Policy](.html) and [Policy Editor](.html)</span>
in the informative section if exists..

-   [Policy](#Policy)
-   [Conceptual architecture](#Conceptual-architecture)
-   [Access Control Policies](#Access-Control-Policies)
    -   [Policy Format](#Policy-Format)
    -   [Policy Subject](#Policy-Subject)
    -   [Subject Attributes](#Subject-Attributes)
        -   [Apps attributes](#Apps-attributes)
        -   [Devices attributes](#Devices-attributes)
        -   [User attributes](#User-attributes)
    -   [Resource Attributes](#Resource-Attributes)
    -   [Attribute match](#Attribute-match)
    -   [Subject specification](#Subject-specification)
    -   [Target](#Target)
    -   [Decision](#Decision)
    -   [Rule](#Rule)
    -   [Condition](#Condition)
    -   [Policy](#Policy)
    -   [Policy set](#Policy-set)
    -   [Matching function](#Matching-function)
        -   [String equality matching
            function](#String-equality-matching-function)
        -   [Globbing matching function](#Globbing-matching-function)
        -   [Regular expression matching
            function](#Regular-expression-matching-function)
    -   [Combining algorithm](#Combining-algorithm)
        -   [Deny-overrides combining
            algorithm](#Deny-overrides-combining-algorithm)
        -   [Permit-overrides combining
            algorithm](#Permit-overrides-combining-algorithm)
        -   [First-applicable rule combining
            algorithm](#First-applicable-rule-combining-algorithm)
        -   [First-matching-target policy combining
            algorithm](#First-matching-target-policy-combining-algorithm)
    -   [Effect](#Effect)
        -   [Permit](#Permit)
        -   [Deny](#Deny)
        -   [Prompt-X](#Prompt-X)
    -   [Query](#Query)
    -   [Core features](#Core-features)
    -   [API features](#API-features)
    -   [Context features](#Context-features)
    -   [Formal Specification](#Formal-Specification)
        -   [Distributed architecture, Case 1: requests come from an
            application inside the
            device](#Distributed-architecture-Case-1-requests-come-from-an-application-inside-the-device)
        -   [Flow description](#Flow-description)
        -   [Distributed architecture, Case 2: requests come from
            outside the
            Device](#Distributed-architecture-Case-2-requests-come-from-outside-the-Device)
        -   [Flow description](#Flow-description)
        -   [Distributed architecture, Case 3: requests come from
            outside the Device, and no Personal Hub is reachable (or it
            is not contacted for resource usage
            optimization)](#Distributed-architecture-Case-3-requests-come-from-outside-the-Device-and-no-Personal-Hub-is-reachable-or-it-is-not-contacted-for-resource-usage-optimization)
        -   [Flow description](#Flow-description)
-   [Privacy and data handling
    policies](#Privacy-and-data-handling-policies)
    -   [Specification](#Specification)
        -   [Data handling](#Data-handling)
            -   [Authorizations](#Authorizations)
            -   [Obligations](#Obligations)
            -   [Provisional Actions](#Provisional-Actions)
        -   [Policy matching and
            evaluation](#Policy-matching-and-evaluation)
            -   [Policy matching](#Policy-matching)
            -   [Obligations matching](#Obligations-matching)
            -   [Manifests synchronization and
                usage](#Manifests-synchronization-and-usage)
            -   [Example of policy.xml](#Example-of-policyxml)
    -   [Widget manifest example](#Widget-manifest-example)
-   [Default policy](#Default-policy)
-   [Policy Structure](#Policy-Structure)
    -   [Root policy file](#Root-policy-file)
    -   [Manufacturer policies](#Manufacturer-policies)
    -   [User policies](#User-policies)
    -   [Application policies](#Application-policies)
-   [Grammar for access control and privacy
    policies](#Grammar-for-access-control-and-privacy-policies)
    -   [Access control policies](#Access-control-policies)
    -   [References](#References)
        -   [APISI](#APISI)
        -   [XACML](#XACML)
        -   [PrimeLife](#PrimeLife)
        -   [PrimeLifeRDI](#PrimeLifeRDI)
        -   [P3P11](#P3P11)
        -   [BONDIA&S](#BONDIA38S)
        -   [DAPWG](#DAPWG)
        -   [RFC3986](#RFC3986)
        -   [WACDS](#WACDS)
        -   [WACSP](#WACSP)
        -   [WACXMLSP](#WACXMLSP)
        -   [RELAXNGCS](#RELAXNGCS)

Policy[¶](#Policy)
==================

The role of the policy manager is to enforce privacy and access control
requests, coming from local and remote requesters, in order to manage
the disclosure of personal data and to control access to personal zone
device capabilities and features.\
The aforementioned process is done by matching requests to resources
against written policies in order to determine an access control
decision. This decision could be to allow or deny access to the
requested resources, or involve further interaction and consent with the
resource owner.

In the following sessions a brief background overview is provided and
specifications will follow up. Aspects that will be taken into
consideration are access control and privacy policies and the
synchronization mechanisms. Furthermore the policy grammar and some
examples will be presented.

Conceptual architecture[¶](#Conceptual-architecture)
====================================================

The webinos platform's security and privacy goals are primarily achieved
through the introduction of an *access control policy architecture*
based on [XACML](XACML.html) integrated with extensions from
[PrimeLife](PrimeLife.html)

The main motivations behind the choice of the PrimeLife extension, other
than the support of data-handling privacy policies are:

-   Support for credential-based restrictions (digital credential and
    certified attributes)
-   Legislation support (EU privacy directives)
-   PrimeLife is an open-source European Project

The complete architecture - the components for which are described and
depicted below - contains, as well as than the XACML/PrimeLife
components, a PZH and a PZP defined in the high level webinos
architecture and the PDPC (PDPCache) generally included in XACML's PDP
component. The architecture is composed of the following elements:

***Access Requestor***: the entity which requires and requests access to
a resource. For example, an application may request access to a service
defined by a webinos API.

***Personal Zone Hub (PZH)***/ ***Personal Zone Proxy (PZP)***: defined
in the preceding sections, in this context it can act in two ways:

1.  verify credentials
2.  enforce authorization decisions

***Decision Wrapper***: responsible for driving the access control
policy evaluation and enforcement.

***Access Manager***: the entity in charge of taking the final decision
by combining the XACML access control and the DHDF data.

***DHDF Engine***: Data Handling Decision Function engine provides
privacy and data handling functionalities.\
It does not implement a complete privacy-aware access control system,
but rather it is responsible for\
the management and evaluation of data handling policies only.

***Policy Enforcement Point (PEP)***: the entity that performs access
control, by making decision requests and enforcing authorization
decisions. It also tries to execute the Obligations and doesn't grant
access if is unable to complete these actions.

***Policy Decision Point (PDP)***: the main decision point for the
access requests. It collects all the necessary information from other
actors and concludes an authorization decision.

***PDPC***: the PDP cache, stores PDP decisions.

***Policy Information Point (PIP)***: the entity that acts as a source
of attribute values that are retrieved from several internal or external
parties like resources, subjects, environment and so on.

![](architecture.png)

The data flow sequence is exposed by the three scenarios presented in
the "Formal Specification" paragraph.

Access Control Policies[¶](#Access-Control-Policies)
====================================================

Policy Format[¶](#Policy-Format)
--------------------------------

Webinos' policies are expressed in the simplified XACML format defined
for the first time in "BONDI's Architecture & Security Requirements
(Appendices) v1.1" ([BONDIA&S](BONDIA&S.html)) and following the grammar
provided by WAC ([WACXMLSP](WACXMLSP.html)). This format has been used
as a basis in different specifications as W3C DAP ([DAPWG](DAPWG.html))
and WAC ([WACDS](WACDS.html)).\
Starting from the same format some changes are introduced to fulfill
webinos' requirements due to the different structures and aims of the
mentioned frameworks.

The main updates to the BONDI policy format are:

-   Some new attributes related to the subject's information to fit
    webinos' requirements for distribution of policies between devices
    and cross device interaction.
-   Two new attributes related to the resource's information required to
    identify services and the extensions that could be declared in an
    application manifest.
-   Privacy policy elements that are discussed here in [Privacy and data
    handling policies](Privacy%20and%20data%20handling%20policies.html)
    subsection.

Policy Subject[¶](#Policy-Subject)
----------------------------------

Given a policy, the policy subject define the entity to which the policy
will be applied. The set of subjects to which the policy or policy set
applies is called target.

Each subject respects the following template:

"User U can access Feature F of Device D through the application A
running in a Device X".

"Device D" is also identified as target device whilst the "Device X" is
identified as requestor device.

There are four basic information points in this template:

1.  WHO want to access a resource: could be an user or a list of users
2.  WHERE the access requestor is: it should be possible to
    differentiate a local access (INTRA-DEVICE) from a remote access
    (INTRA-PZ or EXTRA-PZ)
3.  WHERE the resource is: allow the same policy file to be used by many
    devices
4.  WHICH application is used: could be used to differentiate behaviour
    for applications from different authors, distributors, and other
    attributes

It's possible that some or all subject's attributes are not specified in
a given subject. In these cases, the default values will be used to
represent missing information.

Subject Attributes[¶](#Subject-Attributes)
------------------------------------------

The subject attributes are divided in three groups:

1.  Apps
2.  Devices
3.  User

### Apps attributes[¶](#Apps-attributes)

The first group comes from the "B.4 Subject Attributes" section of
([BONDIA&S](BONDIA&S.html)) and defines the properties used to identify
widgets and browser-based applications.\
In case of widgets, recognized or unrecognised (see [Webinos
application](Webinos%20application.html)), the attributes are:

  -----------------------------------------------------------------------
  Attribute               Type                    Value
  ----------------------- ----------------------- -----------------------
  class                   String                  This has the value
                                                  "w-r" or "w-u" if and
                                                  only if the subject is
                                                  respectively a
                                                  recognized widget or an
                                                  unrecognized one.

  install-uri             URI                     The URI that the Widget
                                                  Resource was originally
                                                  retrieved from before
                                                  installation, if known,
                                                  otherwise the empty
                                                  bag.

  id                      URI                     The identity of the
                                                  Widget. For a W3C
                                                  Widget specification
                                                  compliant Widget
                                                  Resource, this is the
                                                  value of the id
                                                  attribute of the
                                                  \<widget\> element in
                                                  the Widget
                                                  Configuration Document
                                                  converted from IRI to
                                                  URI based on RFC3987.
                                                  In this case, it is a
                                                  URI that uniquely
                                                  identifies the Widget.
                                                  Empty bag if there is
                                                  no id attribute.

  version                 String                  Version of the Widget
                                                  Resource. For a W3C
                                                  Widget specification
                                                  compliant Widget
                                                  Resource, this is the
                                                  version attribute of
                                                  the \<widget\> element
                                                  in the Widget
                                                  Configuration Document.
                                                  Empty bag if there is
                                                  no version attribute.

  distributor-key-cn      String                  The common name of the
                                                  end entity certificate
                                                  for the applicable
                                                  Widget Resource
                                                  distributor signature.
                                                  Empty bag if none.

  distributor-key -finger String                  The fingerprint of the
  print                                           end-entity certificate
                                                  for the applicable
                                                  Widget Resource
                                                  distributor signature.
                                                  Empty bag if none.

  distributor-key-root-cn String                  The common name of the
                                                  root certificate for
                                                  the applicable Widget
                                                  Resource distributor
                                                  signature. Empty bag if
                                                  none.

  distributor-key-root-fi String                  The fingerprint of the
  ngerprint                                       root certificate for
                                                  the applicable Widget
                                                  Resource distributor
                                                  signature.Empty bag if
                                                  none.

  author-key-cn           String                  The common name of the
                                                  end entity certificate
                                                  for the Widget Resource
                                                  author signature. Empty
                                                  bag if none.

  author-key-fingerprint  String                  The fingerprint of the
                                                  end entity certificate
                                                  for the Widget Resource
                                                  author signature in SDP
                                                  syntax. Empty bag if
                                                  none.

  author-key-root-cn      String                  The common name of the
                                                  root certificate for
                                                  the Widget Resource
                                                  author signature. Empty
                                                  bag if none.

  author-key-root-fingerp String                  The fingerprint of the
  rint                                            root certificate for
                                                  the Widget Resource
                                                  author signature. Empty
                                                  bag if none.

  widget-attr:name                                The value of the named
                                                  attribute of the
                                                  \<widget\> element
                                                  whose type and value
                                                  are set up in the
                                                  Widget Configuration
                                                  Document for use in the
                                                  security framework.
                                                  Empty bag if no such
                                                  named attribute is
                                                  defined.
  -----------------------------------------------------------------------

In case of browser-based applications the attributes are:

  Attribute              Type     Value
  ---------------------- -------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  class                  String   This has the value "b-a" if and only if the subject is a browser-based authenticated application.
  sign-schema            String   The value will be “” (empty string) or "tls” if the page was fetched using HTTPS and the browser has verified that the site certificate’s Common Name matches the host that the page was fetched from, and it has already applied its own policies regarding whether the root certificate is in an acceptable trust domain. “tls-ev” if as “tls”, and, additionally, the site certificate has an extended validation field and the browser's internal policy allows that information to be passed to the security framework.
  uri                    URI      The URI used to access the document that embeds or refers to the JavaScript code, corresponding to the window.location property of the browsing context. In the case of that a Feature is accessed from a child browsing context (for example from within a \<iframe\> within some outer document), this attribute provides the location of the child context.
  uri-top                URI      The URI used to access the browser-based application that embeds or refers to the JavaScript code, corresponding to the top.window property of the browsing context. In the case that the Feature is accessed from a child browsing context (for example from within an \<iframe\>), this attribute provides the location of the top-level browsing context. If the current browsing context is a child of a Widget top-level browsing context, this attribute contains an IRI with the widget: scheme that corresponds to the top-level containing document from the Widget Resource.
  key-root-cn            String   The common name of the root certificate chained to by the site certificate.
  key-root-fingerprint   String   The fingerprint of the root certificate chained to by the site certificate.

The attributes "id", "uri" and "uri-top" other than the values presented
(defined also in [BONDIA&S](BONDIA&S.html)) could contain one of the
following URIs:

-   <http://webinos.org/subject/id/known>
-   <http://webinos.org/subject/id/unknown>

respectively if the widgets and browser-based applications were
previously installed or not. If none of the apps attributes is specified
then will be used the default value representing any
widget/browser-based application:

-   <http://webinos.org/subject/id/any>

**Note:** Browser-based applications can access webinos only if they are
served from an origin with scheme HTTPS (see [First use of a browser
based
application](First%20use%20of%20a%20browser%20based%20application.html)
for further details)

### Devices attributes[¶](#Devices-attributes)

Devices attributes are used in order to express whether a device acts as
a requestor or is a target, specifying its ID, domain and whether it is
webinos enabled.\
If the target-id is absent then the target device will be the *current
device* and in a similar way if the requestor-id is absent the requestor
will be the *current device*.\
The *current device* is the device whose policy manager is reading the
policy to enforce an access request.

  Attribute          Type      Value
  ------------------ --------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  target-id          URI       ID of the device where the policy will be enforced. An ID could be a generic device URI (see list below) or refer to [Entity Definitions](Entity%20Definitions.html) and [Authentication](Authentication.html) sections
  target-domain      URI       Domain of the target device. Refer to the domain URIs listed below
  requestor-id       URI       ID of the device requesting resources. An ID could be a generic device URI (see list below) or a PZP generated one
  requestor-domain   URI       Domain of the requestor device. Refer to the domain URIs listed below
  webinos-enabled    Boolean   True if requestor device is webinos enabled. If this attribute is not specified doesn't matter if the device is webinos enabled or not

***Generic device URIs:***

-   <http://webinos.org/subject/id/device>
-   <http://webinos.org/subject/id/known>
-   <http://webinos.org/subject/id/unknown>
-   <http://webinos.org/subject/id/any> (default)

In this context these URIs represent respectively the *current device* ,
a device whose certificate is already known, a device whose certificate
is currently unknown and any device.\
The *current device* is the device whose policy manager is reading the
policy to enforce an access request.

***Domain URIs:***

-   <http://webinos.org/subject/domain/automotive>
-   <http://webinos.org/subject/domain/desktop>
-   <http://webinos.org/subject/domain/home-media>
-   <http://webinos.org/subject/domain/mobile>

<http://webinos.org/subject/domain/any> is the default domain URI value
and represents all domains.

### User attributes[¶](#User-attributes)

The User attributes allow to define the user to which a policy is
referred. If the user-id is absent then the subject refers to any user.

  Attribute                   Type     Value
  --------------------------- -------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  user-id                     URI      ID of the user to which the policy will be applied. An ID could be a generic user URI (see list below) or refer to [Entity Definitions](Entity%20Definitions.html) and [Authentication](Authentication.html) sections
  user-key-cn                 String   The common name of the certificate for the user signature
  user-key-fingerprint        String   The fingerprint of the certificate for the user signature
  user-key-root-cn            String   The common name of the root certificate for the user signature
  user-key-root-fingerprint   String   The fingerprint of the root certificate for the user signature

***Generic user URIs:***

-   <http://webinos.org/subject/id/device>
-   <http://webinos.org/subject/id/known>
-   <http://webinos.org/subject/id/unknown>
-   <http://webinos.org/subject/id/any> (default)
-   <http://webinos.org/subject/id/PZ-Owner>

In this context these URIs represent respectively the owner of the
*current device*, an user whose certificate is already known, an user
whose certificate is currently unknown, any user, and the Personal Zone
Owner.\
The *current device* is the device whose policy manager is reading the
policy to enforce an access request.

Resource Attributes[¶](#Resource-Attributes)
--------------------------------------------

The following table lists the resource attributes as defined in "B.5
Resource Attributes" section of ([BONDIA&S](BONDIA&S.html)), to which we
added the service-id resource:

  Attribute                      Type          Value
  ------------------------------ ------------- ------------------------------------------------------------------------------------------------------------
  api-feature                    URI           The Identifier of the requested feature
  device-cap                     String        The Identifier of the device capability being accessed
  param:name                     See comment   The value of parameter “name”. This value is determined only in the invoke execution phase
  feature-install-uri            URI           The URI that the API implementation was originally retrieved from before installation
  feature-key-cn                 String        The common name of the end entity certificate for the signature associated with the feature implementation
  feature-key-root-cn            String        The common name of the root certificate for the signature associated with the feature implementation
  feature-key-root-fingerprint   String        The fingerprint of the root certificate of the signature associated with the feature implementation
  service-id                     String        The Identifier of the requested service

Attribute match[¶](#Attribute-match)
------------------------------------

The attribute match statement comes from section B.7 of
[BONDIA&S](BONDIA&S.html) specification. It represents the evaluation of
an attribute against a value and can return true, false or indeterminate
as result.

An attribute match takes the name of subject match or resource match
respectively if the attribute being evaluated is a subject or a resource
attribute.

An attribute match statement can be represented by the following
functions:

    1   matchfunc( modifierfunc( attr ), value ) 

    1   matchfunc( attr, value )

Where `matchfunc` is the matching function that requires two non-boolean
inputs and whose result is a boolean or is undetermined if at least one
input is undetermined.\
The `modifierfunc` is a function that operates on a non-boolean input
and whose result is a non-boolean value or is undetermined if its input
is undetermined.

Subject specification[¶](#Subject-specification)
------------------------------------------------

The subject specification element comes from section B.8 of
[BONDIA&S](BONDIA&S.html) specification. It consists of a conjunctive
sequence of subject matches. A subject specification is evaluated as
follows:

-   is determined and has value TRUE if each of the subject matches has
    value TRUE
-   otherwise, is undetermined if any or the subject matches is
    undetermined
-   otherwise is determined and has value FALSE.

A subject has an id attribute. If an implementation provides a means to
provision a security policy fragment to replace an existing one, this id
can be used to identify the subject to replace. No management of ids is
mandated, therefore it is recommended that a standardised textual
representation of a UUID should be used as the id.

A subject match is an attribute match where the attribute being matched
is a subject attribute, and the match value is a literal string.

Target[¶](#Target)
------------------

The target element comes from section B.9 of [BONDIA&S](BONDIA&S.html)
specification. The target of a policy or policy set identifies the set
of subjects to which the policy or policy set applies. It consists of a
disjunctive sequence of subject specifications and is evaluated as
follows:

-   has value TRUE if at least one of the subject specifications has
    value TRUE
-   otherwise has value FALSE.

A policy or policy-set that has no target explicitly specified is
treated as having a target that evaluates unconditionally to TRUE.\
The target has an id attribute. No management of ids is mandated,
therefore it is recommended that a standardised textual representation
of a UUID should be used as the id.

Decision[¶](#Decision)
----------------------

The decision is defined in section B.10 of [BONDIA&S](BONDIA&S.html)
specification.\
If determined, the result of a rule or policy or policy set is a
decision, either "not applicable" or any one of the effects "permit",
"prompt-blanket", "prompt- session", "prompt-oneshot" or "deny". The
effects are defined in [Effect](Effect.html).\
The result of a rule or policy or policy set may be undetermined under
conditions specified for each below.

Rule[¶](#Rule)
--------------

The rule element comes from section B.11 of [BONDIA&S](BONDIA&S.html)
specification. It consists of a [condition](condition.html), and a
[effect](effect.html) attribute.\
A rule has also an id. If an implementation provides a means to
provision a security policy fragment to replace an existing one, this id
can be used to identify the rule to replace. No management of ids is
mandated, therefore it is recommended that a standardised textual
representation of a UUID should be used as the id.\
The result of a rule (see [decision](decision.html)) is determined if
and only if its condition has a determined value.

Condition[¶](#Condition)
------------------------

The condition of a rule (section B.12 of [BONDIA&S](BONDIA&S.html)
specification) specifies extra criteria that need to be matched before
the rule becomes applicable.\
The condition consists of one or more attribute matches, combined with
AND and OR operators into an arbitrarily nested tree.\
The AND operator is evaluated as follows:

-   is determined and has value "no match" if any input is "no match";
-   otherwise is undetermined if any input is undetermined;
-   otherwise is determined and has value "match".

The OR operator is evaluated as follows:

-   is determined and has value "match" if any input is "match";
-   otherwise is undetermined if any input is undetermined;
-   otherwise is determined and has value "no match".

Policy[¶](#Policy)
------------------

The policy element comes from section B.13 of [BONDIA&S](BONDIA&S.html)
specification. A policy has a target, and a list of zero or more rules
combined using a rule-combining algorithm (see [Combining
algorithm](Combining%20algorithm.html) for the combining algorithms).
Where a directive attribute query finds more than one applicable
directive attribute set, the first one is used.\
A policy optionally has a textual description. It has also an id. If an
implementation provides a means to provision a security policy fragment
to replace an existing one, this id can be used to identify the policy
to replace. No management of ids is mandated, therefore it is
recommended that a standardised textual representation of a UUID should
be used as the id.\
The result of a policy is determined if and only if its combining rule
has determined value.

Policy set[¶](#Policy-set)
--------------------------

The policy set element comes from section B.14 of
[BONDIA&S](BONDIA&S.html) specification.\
A policy set is an element with a list of zero or more policies or
policy sets combined using a policy-combining algorithm (see [Combining
algorithm](Combining%20algorithm.html) for the combining algorithms).
Where a directive attribute query finds more than one applicable
directive attribute set, the first one is used.\
A policy set has an id. If an implementation provides a means to
provision a security policy fragment to replace an existing one, this id
can be used to identify the policy set to replace. No management of ids
is mandated, therefore it is recommended that a standardised textual
representation of a UUID should be used as the id.

The result of a policy is determined if and only if its combining rule
has determined value.

Matching function[¶](#Matching-function)
----------------------------------------

As defined in section B.17 of [BONDIA&S](BONDIA&S.html) specification
the matching function used in an attribute match is one of the
following:

### String equality matching function[¶](#String-equality-matching-function)

True if and only if some string from one input string bag is
byte-for-byte equal to some string from the other input string bag. Thus
an empty bag is not equal to anything, not even another empty bag. An
input of type other than empty bag or string bag is converted to string
bag first.

### Globbing matching function[¶](#Globbing-matching-function)

True if and only if, for some string in the first input string bag, the
entire string matches the glob pattern in some string in the second
input string bag. If either input is the empty bag, the result is false.
An input of type other than empty bag or string bag is converted to
string bag first.

### Regular expression matching function[¶](#Regular-expression-matching-function)

True if and only if, for some string in the first input string bag, some
part of the string matches the regular expression pattern in some string
in the second input string bag. If either input is the empty bag, the
result is false. An input of type other than empty bag or string bag is
converted to string bag first.\
This uses the definition of regular expressions in ECMAScript 3rd
edition.

Combining algorithm[¶](#Combining-algorithm)
--------------------------------------------

As defined in section B.19 of [BONDIA&S](BONDIA&S.html) specification
there are two types of combining algorithms: policy-combining algorithms
and rule-combining algorithms.\
The policy-combining algorithm for a policy set determines how child
policies and policy sets are combined.\
The rule-combining algorithm for a policy determines how child rules are
combined.\
The algorithms are described in the following subsections. The term
child is used to mean the child rules in the policy when applying the
policy's rule- combining algorithm, or the child policies and policy
sets in the policy set when applying the policy set's policy-combining
algorithm.

### Deny-overrides combining algorithm[¶](#Deny-overrides-combining-algorithm)

The deny-overrides combining algorithm is usable as a policy-combining
algorithm and as a rule-combining algorithm. The overall result of a
query is evaluated as follows.

-   If any child evaluates to "deny", then the overall result is "deny".
-   Otherwise, if any child is undetermined, then the overall result is
    undetermined.
-   Otherwise, if any child evaluates to "prompt-oneshot", then the
    overall result is "prompt-oneshot".
-   Otherwise, if any child evaluates to "prompt-session", then the
    overall result is "prompt-session".
-   Otherwise, if any child evaluates to "prompt-blanket", then the
    overall result is "prompt-blanket".
-   Otherwise, if any child evaluates to "permit", then the overall
    result is "permit".
-   Otherwise, the overall result is "inapplicable".

### Permit-overrides combining algorithm[¶](#Permit-overrides-combining-algorithm)

The permit-overrides combining algorithm is usable as a policy-combining
algorithm and as a rule-combining algorithm.The overall result of a
query is evaluated as follows.

-   If any child evaluates to "permit", then the overall result is
    "permit"
-   Otherwise, if any child is undetermined, then the overall result is
    undetermined.
-   Otherwise, if any child evaluates to "prompt-blanket", then the
    overall result is "prompt-blanket".
-   Otherwise, if any child evaluates to "prompt-session", then the
    overall result is "prompt-session".
-   Otherwise, if any child evaluates to "prompt-oneshot", then the
    overall result is "prompt-oneshot".
-   Otherwise, if any child evaluates to "deny", then the overall result
    is "deny".
-   Otherwise, the overall result is "inapplicable".

### First-applicable rule combining algorithm[¶](#First-applicable-rule-combining-algorithm)

The first-applicable rule combining algorithm is usable as a
rule-combining algorithm.\
The overall result of a query is evaluated by processing the children in
written order as follows:

-   if the current child is determined and does not evaluate to
    "inapplicable", the overall result is the result of the current
    child;
-   otherwise, if the current child is undetermined, the overall result
    is undetermined;
-   otherwise, if the current child is determined and has value
    "inapplicable", continue processing at the next child. If already
    processing the final child, the overall result is "inapplicable".

### First-matching-target policy combining algorithm[¶](#First-matching-target-policy-combining-algorithm)

The first-matching-target policy combining algorithm is usable as a
policy- combining algorithm.\
The overall result of a query is evaluated by processing the children in
written order as follows:

-   if the current child has a target that matches the overall result is
    the result of the current child;
-   otherwise, continue processing at the next child. If already
    processing the final child, the overall result is "inapplicable".

Effect[¶](#Effect)
------------------

As defined in section B.20 of [BONDIA&S](BONDIA&S.html) specification
the effect of a rule is one of the following:

### Permit[¶](#Permit)

This effect allows requested access without user interaction.

### Deny[¶](#Deny)

This effect denies requested access without user interaction.

### Prompt-X[¶](#Prompt-X)

The prompt-oneshot, prompt-session and prompt-blanket effects allow
requested access after explicit confirmation by the user. The
implementation MUST prompt the user before allowing access.\
The implementation MUST only provide the user the option to grant
permission up to the maximum allowed by the effect, ie:

-   prompt-oneshot: "deny always", "deny this time", "allow this time";
-   prompt-session: prompt-oneshot options plus "deny for this session",
    "allow for this session";
-   prompt-blanket: prompt-session options plus "allow always".

The implementation MUST provide a means to respond with any available
option that is applicable in the context in which the prompt is
displayed.\
Any default action MUST be at least as restrictive as "deny this time".\
If the user has the option of deferring a response indefinitely and the
user does not respond explicitly, the requested access MUST NOT be
allowed.\
For a Widget, a session lasts while the application is still running and
the terminal has not been switched off or placed in standby mode.\
For a browser-based application, another visit to the same page in the
same Browser tab or window is part of the same session.

Query[¶](#Query)
----------------

As defined in section B.21 of [BONDIA&S](BONDIA&S.html) specification a
query represents a specific instance of a security policy being
evaluated in order to make an access control decision relating to an
attempted operation by a Web Application.\
A query is characterised by the collection of subject attributes
associated with the Web Application instance, the collection of resource
attributes associated with the attempted operation, and the collection
of environment attributes associated with the circumstances of the
attempt. The determinedness of each of these attributes is in accordance
with the execution phase of the attempt.\
A query is evaluated against a policy-set, resulting in a decision in
accordance with the evaluation rules defined in this specification.

Core features[¶](#Core-features)
--------------------------------

The following table contains some core features referring to widget
lifecycle, WRT, network access and policy control functionalities. These
features are not associated to APIs and correspond to action performed
or controlled by the Widget Manager and the Widget Runtime. It's not
required to declare these features inside any widget configuration
document.

  -----------------------------------------------------------------------
  Feature                 Meaning                 Parameters
  ----------------------- ----------------------- -----------------------
  <http://webinos.org/cor Identifies the widget   
  e/widget/install>       installation process    

  <http://webinos.org/cor Identifies the widget   
  e/widget/instantiate>   instantiation           

  <http://webinos.org/cor Identifies the widget   
  e/widget/update>        update process          

  <http://webinos.org/cor Identifies the widget   
  e/widget/uninstall>     removal                 

  <http://webinos.org/cor Identifies the widget   
  e/wrt/update>           update process          

  <http://webinos.org/cor Identifies network IO   param (*uri*) to
  e/network-access>       operation operated by   identify the remote
                          widgets.                resource accessed,
                                                  *roaming* to indicate
                                                  roaming status

  <http://webinos.org/cor Identifies network IO   param (*uri*) to
  e/xhr>                  operation operated by   identify the remote
                          widgets.                resource accessed,
                                                  *roaming* to indicate
                                                  roaming status

  <http://webinos.org/cor Identifies operations   
  e/policy-management>    related to policy files 
                          management              
  -----------------------------------------------------------------------

API features[¶](#API-features)
------------------------------

Feature

API

Parameters example

<http://webinos.org/api/actuators>

Generic Actuator

<http://webinos.org/api/actuators/switch>

<http://webinos.org/api/actuators/linearmotor>

<http://webinos.org/api/actuators/rotationalmotor>

<http://webinos.org/api/actuators/vibratingmotor>

<http://webinos.org/api/actuators/servomotor>

<http://webinos.org/api/actuators/swivelmotor>

<http://webinos.org/api/actuators/thermostat>

<http://webinos.org/api/app2app>

App2App Messaging

<http://webinos.org/api/sync>

AppState Synchronisation

<http://webinos.org/api/sync/find>

<http://webinos.org/api/sync/watch>

<http://webinos.org/api/authentication>

Authentication

<http://webinos.org/api/contacts>

Contacts

id - id of the contact

<http://webinos.org/api/contacts/read>

<http://webinos.org/api/contacts/write>

<http://webinos.org/api/deviceinteraction>

Device Interaction

<http://webinos.org/api/devicestatus>

Device Status

component,\
 aspect,\
 property

<http://webinos.org/api/devicestatus/getproperty>

<http://webinos.org/api/devicestatus/watchproperty>

<http://webinos.org/api/devicestatus/deviceinfo>

<http://webinos.org/api/devicestatus/deviceinfo/getproperty>

<http://webinos.org/api/devicestatus/deviceinfo/watchproperty>

<http://webinos.org/api/devicestatus/networkinfo>

<http://webinos.org/api/devicestatus/networkinfo/getproperty>

<http://webinos.org/api/devicestatus/networkinfo/watchproperty>

<http://webinos.org/api/events>

Event Handling

<http://webinos.org/api/events/create>

<http://webinos.org/api/events/listen>

<http://webinos.org/api/applauncher>

AppLauncher

appId

<http://webinos.org/api/applauncher/launch>

<http://webinos.org/api/applauncher/check>

<http://webinos.org/api/mediacontent>

MediaContent

MediaItemId - Identifier of the mediaItem;\
 MediaDirectoryId - Identifier of the mediaDirectory

<http://webinos.org/api/mediacontent/read>

<http://webinos.org/api/mediacontent/read/find>

<http://webinos.org/api/mediacontent/read/listen>

<http://webinos.org/api/mediacontent/write>

<http://webinos.org/api/mediaplay>

MediaPlay

locationURI - URI of resources allowed or not to be accessed

<http://webinos.org/api/navigation>

Navigation

<http://webinos.org/api/nfc>

NFC

<http://webinos.org/api/nfc/read>

<http://webinos.org/api/nfc/write>

<http://webinos.org/api/notifications>

Web Notification

<http://webinos.org/api/payment>

Payment API

<http://webinos.org/api/remoteUI>

Remote UI

<http://webinos.org/api/secureelement>

Secure Element

aid - Identifier of the applet

<http://webinos.org/api/sensors>

Generic Sensor

<http://webinos.org/api/sensors/configure>

<http://webinos.org/api/sensors/read>

<http://webinos.org/api/sensors/light>

<http://webinos.org/api/sensors/light/configure>

<http://webinos.org/api/sensors/light/read>

<http://webinos.org/api/sensors/noise>

<http://webinos.org/api/sensors/noise/configure>

<http://webinos.org/api/sensors/noise/read>

<http://webinos.org/api/sensors/temperature>

<http://webinos.org/api/sensors/temperature/configure>

<http://webinos.org/api/sensors/temperature/read>

<http://webinos.org/api/sensors/pressure>

<http://webinos.org/api/sensors/pressure/configure>

<http://webinos.org/api/sensors/pressure/read>

<http://webinos.org/api/sensors/proximity>

<http://webinos.org/api/sensors/proximity/configure>

<http://webinos.org/api/sensors/proximity/read>

<http://webinos.org/api/sensors/humidity>

<http://webinos.org/api/sensors/humidity/configure>

<http://webinos.org/api/sensors/humidity/read>

<http://webinos.org/api/sensors/heartratemonitor>

<http://webinos.org/api/sensors/heartratemonitor/configure>

<http://webinos.org/api/sensors/heartratemonitor/read>

<http://webinos.org/api/discovery>

Discovery

URI - URI of the feature that the policy manager will make discoverable
or not

<http://webinos.org/api/tv>

TV Control

TVchannel - channel allowed/denied to be accessed

<http://webinos.org/api/vehicle>

Vehicle

<http://webinos.org/api/vehicle/climate>

<http://webinos.org/api/vehicle/parksensors>

<http://webinos.org/api/vehicle/tripcomputer>

<http://webinos.org/api/vehicle/lights>

<http://webinos.org/api/vehicle/gearbox>

<http://webinos.org/api/vehicle/engineoil>

<http://webinos.org/api/vehicle/seating>

<http://webinos.org/api/vehicle/tires>

<http://webinos.org/api/vehicle/windows>

<http://webinos.org/api/vehicle/doors>

<http://webinos.org/api/corePZinformation>

Webinos core interface

<http://webinos.org/api/widget>

Webinos Widget

<http://webinos.org/api/widget/deploy>

<http://webinos.org/api/w3c/deviceorientation>

W3C DeviceOrientation

<http://webinos.org/api/w3c/file>

W3C File\
 W3C FIle: Writer\
 W3C File: Directories and System

locationURI - URI that refer to a resource in the filesystem

<http://webinos.org/api/w3c/file/read>

<http://webinos.org/api/w3c/file/write>

<http://webinos.org/api/w3c/geolocation>

W3C Geolocation

enableHighAccuracy - [true/false] if it [is/is not] possible to enable
High Accuracy

<http://webinos.org/api/w3c/geolocation/getposition>

<http://webinos.org/api/w3c/geolocation/watchposition>

<http://webinos.org/api/w3c/mediastream>

W3C Media Capture and Streams

sourceType - optional parameter [microphone/camera]

<http://webinos.org/api/w3c/webrtc>

W3C WebRTC

appId - id of recipient application;\
 sourceType - mediaStream type;\
 locationURI - URI of resources allowed or not to be accessed

Context features[¶](#Context-features)
--------------------------------------

Feature

Parameters example

<http://webinos.org/api/context>

context query: the query containing either the data to be stored, the
conditions of the retrieval or the definition of a new context object;\
 API: the API feature URI;\
 appId: a unique identifier for the application creating the context
object;\
 context object name: the name of the context object created by an
application.

<http://webinos.org/api/context/query>

<http://webinos.org/api/context/app>

<http://webinos.org/api/context/app/create>

<http://webinos.org/api/context/app/read>

<http://webinos.org/api/context/schedule>

<http://webinos.org/api/context/schedule/create>

<http://webinos.org/api/context/schedule/read>

<http://webinos.org/api/context/rules>

<http://webinos.org/api/context/rules/create>

<http://webinos.org/api/context/rules/read>

Formal Specification[¶](#Formal-Specification)
----------------------------------------------

Below are depicted three use cases to show the workflow for:

1.  requests come from an applications inside the device
2.  requests come from outside the Device
3.  requests come from outside the Device, and no Personal Hub is
    reachable (or it is not contacted for resource usage optimization)

### Distributed architecture, Case 1: requests come from an application inside the device[¶](#Distributed-architecture-Case-1-requests-come-from-an-application-inside-the-device)

![](distributed_architecture_1.png)

### Flow description[¶](#Flow-description)

1\. The access requestor sends an access request to the PZP\
2. The PZP sends the request for access to the decision wrapper\
3. The decision wrapper forwards the request towards the access manager,
together with the possible relevant\
data handling policies attached to the requested resources

*XACML engine branch* {\
 4. The access manager forwards the request to the PEP\
 5. The PEP forwards the request to the PDP\
 6. The PDP requests any additional attributes from the PIP\
 7. The PIP returns the requested attributes to the PDP which evaluates
the policy\
 8. The PDP returns the authorization decision to the PEP\
 9. The PEP returns the access decision to the access manager\
}

*Privacy enhanced branch* {\
 a. The access manager forwards the request and the Data Handling
Policies to the DHDF engine\
 b. The DHDF engine asks the PIP for evaluation information\
 c. The DHDF engine obtains information needed for evaluation\
 d. The DFDH engine evaluated DH policies and returns the decision to
the access manager\
}

10\. The access manager combines the XACML access control decision and
the DHDF data handling decision,\
 then it sends the result to the decision wrapper.\
11. The decision wrapper forwards the result to the PZP which enforces
it.

### Distributed architecture, Case 2: requests come from outside the Device[¶](#Distributed-architecture-Case-2-requests-come-from-outside-the-Device)

![](distributed_architecture_2.png)

### Flow description[¶](#Flow-description)

1\. The remote access requestor sends an access request to the PZH across
the overlay network\
2. The PZH sends the request for access to the decision wrapper\
3. The decision wrapper forwards the request towards the access manager,
together with the possible relevant\
data handling policies attached to the requested resources

*XACML engine branch* {\
 4. The access manager forwards the request to the PEP\
 5. The PEP forwards the request to the PDP\
 6. The PDP requests any additional attributes from the PIP\
 7. The PIP returns the requested attributes to the PDP which evaluates
the policy\
 8. The PDP returns the authorization decision to the PEP\
 9. The PEP returns the access decision to the access manager\
}

*Privacy enhanced branch* {\
 a. The access manager forwards the request and the Data Handling
Policies to the DHDF engine\
 b. The DHDF engine asks the PIP for evaluation information\
 c. The DHDF engine obtains information needed for evaluation\
 d. The DFDH engine evaluated DH policies and returns the decision to
the access manager\
}

10\. The access manager combines the XACML access control decision and
the DHDF data handling decision,\
 then it sends the result to the decision wrapper.\
11. The decision wrapper forwards the result to the PZH\
12. The PZH forwards the result to the PZP which enforces it.

### Distributed architecture, Case 3: requests come from outside the Device, and no Personal Hub is reachable (or it is not contacted for resource usage optimization)[¶](#Distributed-architecture-Case-3-requests-come-from-outside-the-Device-and-no-Personal-Hub-is-reachable-or-it-is-not-contacted-for-resource-usage-optimization)

![](distributed_architecture_3.png)

### Flow description[¶](#Flow-description)

1\. The remote access requestor sends an access request to the PZP across
the overlay network\
2. The PZP sends the request for access to the decision wrapper\
3. The decision wrapper forwards the request towards the access manager,
together with the possible relevant\
data handling policies attached to the requested resources

*XACML engine branch* {\
 4. The access manager forwards the request to the PEP\
 5. The PEP forwards the request to the PDP\
 6. The PDP requests any additional attributes from the PIP\
 7. The PIP returns the requested attributes to the PDP which evaluates
the policy\
 8. The PDP returns the authorization decision to the PEP\
 9. The PEP returns the access decision to the access manager\
}

*Privacy enhanced branch* {\
 a. The access manager forwards the request and the Data Handling
Policies to the DHDF engine\
 b. The DHDF engine asks the PIP for evaluation information\
 c. The DHDF engine obtains information needed for evaluation\
 d. The DFDH engine evaluated DH policies and returns the decision to
the access manager\
}

10\. The access manager combines the XACML access control decision and
the DHDF data handling decision,\
 then it sends the result to the decision wrapper.\
11. The decision wrapper forwards the result to the PZP which enforces
it.

Privacy and data handling policies[¶](#Privacy-and-data-handling-policies)
==========================================================================

Specification[¶](#Specification)
--------------------------------

As anticipated in [conceptual
architecture](conceptual%20architecture.html), the webinos platform's
security and privacy requirements are achieved through the definition of
an enforcement system based on access control and privacy policies.\
While the access control policies are discussed in the previous section,
this one focus on privacy and data handling specifications.\
The following diagram depicts a brief overview of the mechanisms
involving privacy and data handling policies. ***policy.xml*** is the
policy file containing all the preferences that the user has specified,
***manifest.xml*** is the application's manifest.

![](privacyManifest.png)

### Data handling[¶](#Data-handling)

Data handling refers to the management of user and application data by
applications. [PrimeLife](PrimeLife.html) defines in its "Report on
design and implementation" ([PrimeLifeRDI](PrimeLifeRDI.html)) two
different entities involved in data handling:

-   ***data controller***: which in our case is the application side. Is
    the entity that receives the data.
-   ***data subject***: which in the webinos scenario is the PZ,
    therefore the PZP and the PZH. Is the entity that holds the data.

In webinos data handling policies and preferences are expressed using
the PrimeLife Privacy Language (PPL) and the P3P ontology, particularly
the authorization tags also described in
[PrimeLifeRDI](PrimeLifeRDI.html). The definition of Authorizations,
Obligations and Provisional actions elements come from this same
document.

Data handling policies are defined by the application in its manifest
and data handling preferences are defined by the user in a policy.xml
file. They both are composed of authorizations and obligations.

#### Authorizations[¶](#Authorizations)

Authorizations are the first part of data handling where
preferences/intentions are declared.\
In the policy they are represented by an *\<AuthorizationsSet\>* element
whose child *\<AuthzUseForPurpose\>*, contains a list of purposes
(*\<Purpose\>*) authorized to use the information.\
In the following example the *\<Purpose\>* tag specifies that only the
pseudonymous analysis is allowed.

    1 <AuthorizationsSet>
    2     <AuthzUseForPurpose>
    3         <Purpose>http://www.w3.org/2002/01/P3Pv1/pseudo-analysis</Purpose>
    4     </AuthzUseForPurpose>
    5 </AuthorizationsSet>

The purposes associated to the URIs are defined in P3P 1.1 specification
([P3P11](P3P11.html)).

#### Obligations[¶](#Obligations)

Obligations are a subset of data handling where additional constraints
are declared. They are specified inside *\<Obligation\>* elements, which
on their turn contain a *\<TriggersSet\>* element describing the events
that trigger the obligation, an *\<Action\>* element describing the
action to be performed, and a *\<Validity\>* element describing the
validity time frame of the obligation. Set of obligations, can be
expressed through an *\<ObligationsSet\>* element.

Moreover, in this other section of this example it is required the data
deletion (using the *\<ActionDeletePersonalData/\>* tag) within five
days (using *\<StartTime\>* and *\<MaxDelay\>* tags).

     1 <ObligationsSet>
     2     <Obligation>
     3         <TriggersSet>
     4             <TriggerAtTime>
     5                 <StartTime><StartNow/></StartTime>
     6                 <MaxDelay>
     7                     <Duration>P0Y0M5DT0H0M0S</Duration>
     8                 </MaxDelay>
     9             </TriggerAtTime>
    10         </TriggersSet>
    11         <ActionDeletePersonalData/>
    12     </Obligation>
    13 </ObligationsSet>

#### Provisional Actions[¶](#Provisional-Actions)

Provisional actions are used to bind the authorization set and the
obligations.\
Moreover, a brief description in a human readable language can be
provided by developers for each feature. An attribute named *language*
for this tag identifies which language the description has been written
in. Required feature description will be displayed during the
installation process, depending on the display capacities of the device.
It is recommended that devices display *at least* the first 140
characters.

    1   <ProvisionalAction>
    2     <AttributeValue>http://webinos.org/api/w3c/geolocation</AttributeValue>
    3     <AttributeValue>#pseudo-analysisDHP</AttributeValue>
    4     <DeveloperProvidedDescription language="EN">
    5       The geolocation feature is required by this application in order to customise search results.
    6     </DeveloperProvidedDescription>
    7   </ProvisionalAction>

### Policy matching and evaluation[¶](#Policy-matching-and-evaluation)

The policy manager of the PZP where is located the required resource
must decide whether to allow or deny resource access. This decision is
the result of an automated matching procedure between the application
policies and the user policies.\
Application policies are composed of access control policies and data
handling policies.\
User policies are composed of access control policies and data handling
preferences.\
Privacy-related allow/deny decision is the result of the matching
between data subject's data handling preferences and data controller's
data handling policies.

#### Policy matching[¶](#Policy-matching)

Policy matching is required to map an access control request onto an
application and set of policies. It can be divided into three sections:

1.  XACML access control (rows 2-11 in the following example). This is
    the usual matching of XACML policies to application required
    features.
2.  PPL tags that not fall within data handling obligations. For example
    data handling authorization (rows 13-17 in the following example)
    and provisional action (rows 34-37). Matching algorithms are the
    same as for XACML access control.
3.  Data handling obligations (rows 18-32 in the following example).
    They are different from XACML obligations and require different
    matching algorithms.

<!-- -->

     1 <policy>
     2     <target>
     3         <subject>
     4             <subject-match attr="distributor-key-fingerprint" match="[the fingerprint of the application distributor]"/>
     5         </subject>
     6     </target>
     7     <rule effect="prompt-blanket">
     8         <condition>
     9             <resource-match attr="api-feature" match="http://webinos.org/api/w3c/geolocation"/>
    10         </condition>
    11     </rule>
    12     <DataHandlingPreference policyId="#pseudo-analysisDHP">
    13         <AuthorizationsSet>
    14             <AuthzUseForPurpose>
    15                 <Purpose>http://www.w3.org/2002/01/P3Pv1/pseudo-analysis</Purpose>
    16             </AuthzUseForPurpose>
    17         </AuthorizationsSet>
    18         <ObligationsSet>
    19             <Obligation>
    20                 <TriggersSet>
    21                     <TriggerAtTime>
    22                         <StartTime>
    23                             <StartNow/>
    24                         </StartTime>
    25                         <MaxDelay>
    26                             <Duration>P0Y0M7DT0H0M0S</Duration>
    27                         </MaxDelay>
    28                     </TriggerAtTime>
    29                 </TriggersSet>
    30                 <ActionDeletePersonalData/>
    31             </Obligation>
    32         </ObligationsSet>
    33     </DataHandlingPreference>
    34     <ProvisionalAction>
    35         <AttributeValue>http://webinos.org/api/w3c/geolocation</AttributeValue>
    36         <AttributeValue>#pseudo-analysisDHP</AttributeValue>
    37     </ProvisionalAction>
    38 </policy>

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
Obligations are composed of actions (row 30 in the previous example) and
triggers (rows 20-29 in the previous example), so an obligation is more
restrictive if it is more restrictive in both, actions and triggers. All
triggers in the preferences must be in the policy, but the policy can
specify more triggers.\
What "more restrictive" means depends on matching rules defined in the
matching engine implementation.\
For example a data handling policy ensuring data deletion is more
restrictive if time specified in the *\<Duration\>* tag is shorter than
data handling preferences requirement (row 26). It can be more difficult
to define the notion of "more restrictive" for example when the
obligation require to send periodically an email to inform the user
about access to his data. Notifications sent with a shorter time
interval can be considered more restrictive or can be considered spam.

#### Manifests synchronization and usage[¶](#Manifests-synchronization-and-usage)

In order to allow data handling policies and data handling preferences
matching when calling a remote API, the called PZP must have the
application data handling policies.

Inside the Personal Zone, all manifests of all installed applications
are synchronized across devices. This means that a device has all the
manifests that are installed on all other devices, in order to be ready
to answer to a request to that comes from the same personal zone. The
synchronization of an application's manifest is done immediately after
the application's installation. In case of installation of a newer
version of an already installed application on another device the
conflict is settled by separately storing different versions of the
manifest.\
When calling an API outside the Personal Zone, an information concerning
the application manifest is attached to the call. The policy manager of
the calling PZP intercepts the request, attaches the manifest
information, and forwards the request to the called PZP.

Attaching manifest information does not necessarily mean that the
manifest itself is attached. If the application is published on a public
repository, its manifest is available and it is feasible to attach the
application URI instead. This URI, allows the called policy manager of
the PZP to retrieve the manifest from it.\
If the application has a customized version of the manifest or if it is
not available on a public accessible URI, the completed version of the
manifest is sent.\
On the other hand, a test application could also send a request without
anything attached as a complementary information. By default this is
strongly discouraged and the behavior would be to deny by default
anonymous applications.

To sum up, it is possible to attach to the request:

-   ***application URI***: this is for well know applications, published
    on public repositories. Therefore, the manifest is available.
-   ***application manifest***: the whole manifest is attached if it is
    a customized version of an existing manifest, or if the application
    does not have a public location to post the manifest.
-   ***nothing***: just for test purposes. In this case the application
    is considered as *anonymous* and default preferences would drop
    requests.

Below there is an example of the JSON message attachment.

    1 {
    2     class:"URI",
    3     value:"http://example.org/appManifest.xml" 
    4 }

    1 {
    2     class:"Manifest",
    3     value:"<widget>...</widget>" 
    4 }

In the followings, there are three sequence diagrams that explains
synchronization and requests handling.

![](Privacy-_manifests_synchronization.png)\
![](Privacy-_requests_across_same_personal_zone.png)\
![](Privacy-_requests_across_different_personal_zones.png)

**Use**

**Language**

**Synchronization**

**Editability**

*policy.xml*

contains all the policies and the rules related to all APIs of the
device

reduced XACML

not synchronized

editable by policy editor

*manifests*

contains the *feature* tags, that specify which APIs and data the
application wants to retrieve,\
and the data handling policies that are a declaration statement of the
application intents about gathered data

Access Control Policies: XACML-like, data handling policies: PPL tags

synchronized across the whole personal zone

not editable

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
     8                 <subject-match attr="user-id" match="pzh.isp.com/jessica@example.com/Jessica's+Mobile/App"/>
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

Widget manifest example[¶](#Widget-manifest-example)
----------------------------------------------------

In the example below an example concerning the widget manifest is
provided.\
In order to bind the data handling policies with the related obligation,
a provisional action took place. If there is more than one to be binded,
the *\<ProvisionalActions\>* tag must be used.

     1 <widget>
     2     <feature name="http://webinos.org/api/w3c/geolocation" required="true" />
     3     <DataHandlingPolicy PolicyId="#pseudo-analysisDHP">
     4         <AuthorizationsSet>
     5             <AuthzUseForPurpose>
     6                 <Purpose>http://www.w3.org/2002/01/P3Pv1/pseudo-analysis</Purpose>
     7             </AuthzUseForPurpose>
     8         </AuthorizationsSet>
     9         <ObligationsSet>
    10             <Obligation>
    11                 <TriggersSet>
    12                     <TriggerAtTime>
    13                         <StartTime>
    14                             <StartNow/>
    15                         </StartTime>
    16                         <MaxDelay>
    17                             <Duration>P0Y0M5DT0H0M0S</Duration>
    18                         </MaxDelay>
    19                     </TriggerAtTime>
    20                 </TriggersSet>
    21                 <ActionDeletePersonalData/>
    22             </Obligation>
    23         </ObligationsSet>
    24     </DataHandlingPolicy>
    25     <ProvisionalAction>
    26         <AttributeValue>http://webinos.org/api/w3c/geolocation</AttributeValue>
    27         <AttributeValue>#pseudo-analysisDHP</AttributeValue>
    28                 <DeveloperProvidedDescription language="EN">
    29                   The geolocation feature is required by this application in order to customise search results.
    30                 </DeveloperProvidedDescription>
    31     </ProvisionalAction>
    32 </widget>

Default policy[¶](#Default-policy)
==================================

The default policy is the policy installed with the webinos framework.
This policy takes in account guidelines coming out from the 3.6
Deliverable regarding API Security Issues ([APISI](APISI.html)).

Note: Consider looking for updates in the webinos github repository
before referring to the policy reported below.

      1 <policy-set combine="deny-overrides">
      2     <policy combine="first-applicable">
      3         <target>
      4             <subject>
      5                 <subject-match attr="class" match="b-a"/>
      6             </subject>
      7         </target>
      8 
      9         <rule effect="prompt-blanket">
     10             <condition combine="or">
     11                 <resource-match attr="api-feature" match="http://webinos.org/api/applauncher"/>
     12                 <resource-match attr="api-feature" match="http://webinos.org/api/vehicle"/>
     13                 <resource-match attr="api-feature" match="http://webinos.org/api/devicestatus"/>
     14                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/geolocation"/>
     15                 <resource-match attr="api-feature" match="http://webinos.org/api/navigation"/>
     16                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/mediastream"/>
     17                 <resource-match attr="api-feature" match="http://webinos.org/api/mediacontent"/>
     18                 <resource-match attr="api-feature" match="http://webinos.org/api/app2app"/>
     19                 <resource-match attr="api-feature" match="http://webinos.org/api/secureelement"/>
     20                 <resource-match attr="api-feature" match="http://webinos.org/api/sync"/>
     21                 <resource-match attr="api-feature" match="http://webinos.org/api/notifications"/>
     22                 <resource-match attr="api-feature" match="http://webinos.org/api/remoteUI"/>
     23             </condition>
     24         </rule>
     25 
     26         <rule effect="prompt-session">
     27             <condition combine="or">
     28                 <resource-match attr="api-feature" match="http://webinos.org/api/deviceinteraction"/>
     29                 <resource-match attr="api-feature" match="http://webinos.org/api/sensors"/>
     30                 <resource-match attr="api-feature" match="http://webinos.org/api/actuators"/>
     31                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/file"/>
     32             </condition>
     33         </rule>
     34 
     35         <rule effect="prompt-oneshot">
     36             <condition combine="or">
     37                 <resource-match attr="api-feature" match="http://webinos.org/api/discovery"/>
     38                 <resource-match attr="api-feature" match="http://webinos.org/api/contacts"/>
     39             </condition>
     40         </rule>
     41 
     42         <rule effect="permit">
     43             <condition combine="or">
     44                 <resource-match attr="api-feature" match="http://webinos.org/api/authentication"/>
     45                 <resource-match attr="api-feature" match="http://webinos.org/api/payment"/>
     46                 <resource-match attr="api-feature" match="http://webinos.org/api/tv"/>
     47                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/deviceorientation"/>
     48             </condition>
     49         </rule>
     50 
     51         <rule effect="deny" />
     52     </policy>
     53 
     54     <policy combine="first-applicable">
     55         <target>
     56             <subject>
     57                 <subject-match attr="class" match="w-r"/>
     58             </subject>
     59         </target>
     60 
     61         <rule effect="prompt-blanket">
     62             <condition combine="or">
     63                 <resource-match attr="api-feature" match="http://webinos.org/api/applauncher"/>
     64                 <resource-match attr="api-feature" match="http://webinos.org/api/vehicle"/>
     65                 <resource-match attr="api-feature" match="http://webinos.org/api/contacts.read"/>
     66                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/geolocation"/>
     67                 <resource-match attr="api-feature" match="http://webinos.org/api/navigation"/>
     68                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/mediastream"/>
     69                 <resource-match attr="api-feature" match="http://webinos.org/api/mediacontent"/>
     70                 <resource-match attr="api-feature" match="http://webinos.org/api/app2app"/>
     71                 <resource-match attr="api-feature" match="http://webinos.org/api/secureelement"/>
     72                 <resource-match attr="api-feature" match="http://webinos.org/api/sync"/>
     73                 <resource-match attr="api-feature" match="http://webinos.org/api/remoteUI"/>
     74             </condition>
     75         </rule>
     76 
     77         <rule effect="prompt-session">
     78             <condition combine="or">
     79                 <resource-match attr="api-feature" match="http://webinos.org/api/deviceinteraction"/>
     80                 <resource-match attr="api-feature" match="http://webinos.org/api/sensors"/>
     81                 <resource-match attr="api-feature" match="http://webinos.org/api/actuators"/>
     82                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/file"/>
     83             </condition>
     84         </rule>
     85 
     86         <rule effect="prompt-oneshot">
     87             <condition combine="or">
     88                 <resource-match attr="api-feature" match="http://webinos.org/api/contacts.write"/>
     89             </condition>
     90         </rule>
     91 
     92         <rule effect="permit">
     93             <condition combine="or">
     94                 <resource-match attr="api-feature" match="http://webinos.org/api/authentication"/>
     95                 <resource-match attr="api-feature" match="http://webinos.org/api/payment"/>
     96                 <resource-match attr="api-feature" match="http://webinos.org/api/discovery"/>
     97                 <resource-match attr="api-feature" match="http://webinos.org/api/tv"/>
     98                 <resource-match attr="api-feature" match="http://webinos.org/api/widget"/>
     99                 <resource-match attr="api-feature" match="http://webinos.org/api/devicestatus"/>
    100                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/deviceorientation"/>
    101                 <resource-match attr="api-feature" match="http://webinos.org/api/notifications"/>
    102             </condition>
    103         </rule>
    104 
    105         <rule effect="deny" />
    106     </policy>
    107 
    108     <policy combine="first-applicable">
    109         <target>
    110             <subject>
    111                 <subject-match attr="class" match="w-u"/>
    112             </subject>
    113         </target>
    114 
    115         <rule effect="prompt-blanket">
    116             <condition combine="or">
    117                 <resource-match attr="api-feature" match="http://webinos.org/api/applauncher"/>
    118                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/geolocation"/>
    119                 <resource-match attr="api-feature" match="http://webinos.org/api/navigation"/>
    120                 <resource-match attr="api-feature" match="http://webinos.org/api/mediacontent"/>
    121                 <resource-match attr="api-feature" match="http://webinos.org/api/remoteUI"/>
    122             </condition>
    123         </rule>
    124 
    125         <rule effect="prompt-session">
    126             <condition combine="or">
    127                 <resource-match attr="api-feature" match="http://webinos.org/api/deviceinteraction"/>
    128                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/mediastream"/>
    129                 <resource-match attr="api-feature" match="http://webinos.org/api/app2app"/>
    130                 <resource-match attr="api-feature" match="http://webinos.org/api/secureelement"/>
    131                 <resource-match attr="api-feature" match="http://webinos.org/api/sync"/>
    132             </condition>
    133         </rule>
    134                 <rule effect="prompt-oneshot">
    135             <condition combine="or">
    136                 <resource-match attr="api-feature" match="http://webinos.org/api/discovery"/>
    137                 <resource-match attr="api-feature" match="http://webinos.org/api/sensors"/>
    138                 <resource-match attr="api-feature" match="http://webinos.org/api/actuators"/>
    139                 <resource-match attr="api-feature" match="http://webinos.org/api/widget"/>
    140             </condition>
    141         </rule>        
    142 
    143         <rule effect="permit">
    144             <condition combine="or">
    145                 <resource-match attr="api-feature" match="http://webinos.org/api/authentication"/>
    146                 <resource-match attr="api-feature" match="http://webinos.org/api/payment"/>
    147                 <resource-match attr="api-feature" match="http://webinos.org/api/tv"/>
    148                 <resource-match attr="api-feature" match="http://webinos.org/api/devicestatus"/>
    149                 <resource-match attr="api-feature" match="http://webinos.org/api/w3c/deviceorientation"/>
    150                 <resource-match attr="api-feature" match="http://webinos.org/api/notifications"/>
    151             </condition>
    152         </rule>
    153 
    154         <rule effect="deny" />
    155     </policy>
    156 
    157 </policy-set>

Policy Structure[¶](#Policy-Structure)
======================================

As decided in the [call on 3rd April
2013](https://docs.google.com/document/d/1b3V3QRsNfZDtceppFWpjZIb8yYixgwqgCjWNkyGfpho/edit?usp=sharing),
webinos policies will have the following structure.

Root policy file[¶](#Root-policy-file)
--------------------------------------

The root policy file will never be edited and is used just to pull in
the other policies.

It uses two combining rules: the "Deny-unless-permit" rule requires the
PDP to reply with a 'deny' result if there are any 'not applicable'
results returned from the inner policy. The "Deny-overrides" combining
rule means that any one policy saying "deny" will override the others.
This means that manufacturer policies will override users, which is an
important requirement.

Note that the "Deny-unless-permit" policy needs to be changed to
accommodate Prompt effects as well as Allow, Deny and Not Applicable.
Because no existing combining rule exists, we suggest defining our own,
called "Deny-if-not-applicable" or "Deny-unless-permit-or-prompt".

policy.xml:\

     1 <!DOCTYPE doc [
     2     <!ENTITY manufacturer SYSTEM "manufacturer.xacml">
     3     <!ENTITY user SYSTEM "user.xacml">
     4     <!ENTITY app SYSTEM "app.xacml">
     5 ]>
     6 <policy-set combining-algorithm="Deny-unless-permit-or-prompt">
     7     <policy-set combining-algorithm="Deny-overrides">
     8         &manufacturer;
     9         &user;
    10         &app;
    11     </policy-set>
    12 </policy-set>

As discussed in Turin meeting (June 20th 2013) an alternative proposal
for root policy is the following:

     1 <!DOCTYPE doc [
     2     <!ENTITY manufacturer SYSTEM "manufacturer.xacml">
     3     <!ENTITY user SYSTEM "user.xacml">
     4     <!ENTITY app SYSTEM "app.xacml">
     5 ]>
     6 <policy-set combining-algorithm="Deny-unless-permit-or-prompt">
     7     &manufacturer;
     8     <policy-set combining-algorithm="First-maching-target">
     9         &app;
    10         &user;
    11     </policy-set>
    12 </policy-set>

This way the manufacturer will be combined (using deny-overrides) with
application policy or with user policy (in case application policy does
not exists or returns inapplicable or undetermined).

The "deny-unless-permit-or-prompt" combining algorithm should behave in
a similar way to the "deny-overrides" combining algorithm defined in
<http://www.webinos.org/content/html/D033/Policy.htm>. The exception
being that the "deny-unless-permit-or-prompt" algorithm returns deny if
the result is undetermined. This differers from the XACML 3.0
"deny-unless-permit" definition in that we weight towards *deny* where
as the "deny-unless-permit" is weighted towards *permit*.

If we adopt this approach, the definition of
"deny-unless-permit-or-prompt" becomes:

-   If any child evaluates to "deny", then the overall result is "deny".
-   Otherwise, if any child is "undetermined", then the overall result
    is "deny".
-   Otherwise, if any child evaluates to "prompt-oneshot", then the
    overall result is "prompt-oneshot".
-   Otherwise, if any child evaluates to "prompt-session", then the
    overall result is "prompt-session".
-   Otherwise, if any child evaluates to "prompt-blanket", then the
    overall result is "prompt-blanket".
-   Otherwise, if any child evaluates to "permit", then the overall
    result is "permit".
-   Otherwise, the overall result is "deny".

An alternate definition which weights towards "permit" would be:

-   if any child evaluates to "permit", then the overall result is
    "permit".
-   Otherwise, if any child evaluates to "prompt-blanket", then the
    overall result is "prompt-blanket".
-   Otherwise, if any child evaluates to "prompt-session", then the
    overall result is "prompt-session".
-   Otherwise, if any child evaluates to "prompt-oneshot", then the
    overall result is "prompt-oneshot".
-   Otherwise, the overall result is "deny".

The first definition should be adopted as the algorithm as this
definition supports the goal that the manufactures policy should be able
to override the users policy to restrict access. If the first definition
is used we have the following comparison between
"deny-unless-permit-or-prompt" and "deny-overrides":

Algorithm results (AL = allow, DE = deny, PR = prompt, UN =
undetermined, IN = inapplicable)

  --------- --------- ------------------------------ ----------------
  Input 1   Input 2   Deny-unless-permit-or-prompt   Deny-overrides
  AL        AL        AL                             AL
  AL        DE        DE                             DE
  AL        PR        PR                             PR
  AL        UN        DE                             UN
  AL        IN        AL                             AL
  DE        AL        DE                             DE
  DE        DE        DE                             DE
  DE        PR        DE                             DE
  DE        UN        DE                             DE
  DE        IN        DE                             DE
  PR        AL        PR                             PR
  PR        DE        DE                             DE
  PR        PR        PR                             PR
  PR        UN        DE                             UN
  PR        IN        PR                             PR
  UN        AL        DE                             UN
  UN        DE        DE                             UN
  UN        PR        DE                             UN
  UN        UN        DE                             UN
  UN        IN        DE                             UN
  IN        AL        AL                             AL
  IN        DE        DE                             DE
  IN        PR        PR                             PR
  IN        UN        DE                             UN
  IN        IN        DE                             IN
  --------- --------- ------------------------------ ----------------

Manufacturer policies[¶](#Manufacturer-policies)
------------------------------------------------

We did not decide on the exact structure of manufacturer policies. They
must be write-protected on the platform. They must also have a root
policy set.

User policies[¶](#User-policies)
--------------------------------

These are edited by the policy editor application and may be split
further into other sets.

We did not decide on the exact structure of user policies or combining
rules. These are likely to contain rules about users, devices and
services, such as "Alice can access Bob's geolocation service".

Application policies[¶](#Application-policies)
----------------------------------------------

These are generated at install time and consolidated into one policy
set. These define the least-privilege restrictions on an application,
such that applications can only access resources they ask for.

We did not decide on the exact structure of user policies or combining
rules. A "first applicable" or "only one applicable" rule may be best.

It could be that this policy file simply references individual policy
files for each application, or it could be that this policy file
contains policies for each application.

Grammar for access control and privacy policies[¶](#Grammar-for-access-control-and-privacy-policies)
====================================================================================================

Policies could be edited by users through a graphic policy editor or
manually. Manual editing must be done taking in account the grammar
provided in this section in order to avoid parsing problems. The
grammars presented respect the RELAX NG Compact Syntax
([RELAXNGCS](RELAXNGCS.html))

Access control policies[¶](#Access-control-policies)
----------------------------------------------------

The grammar for access control policies comes from the one defined in
WAC ([WACXMLSP](WACXMLSP.html)) with PPL extensions.

      1 namespace a = "http://relaxng.org/ns/compatibility/annotations/1.0" 
      2 datatypes xs = "http://www.w3.org/2001/XMLSchema-datatypes" 
      3 
      4 policy-set =
      5   element policy-set {
      6     policy-set.attlist, target?, dataHandlingPreferences?, provisionalActions?, (policy-set | policy)*
      7   }
      8 policy-set.attlist &=
      9   [ a:defaultValue = "deny-overrides" ]
     10   attribute combine {
     11     "deny-overrides" | "permit-overrides" | "first-matching-target" 
     12   }?,
     13   attribute id { text }?,
     14   attribute description { text }?
     15 
     16 policy = element policy { policy.attlist, target?, rule*, dataHandlingPreferences?, provisionalActions? }
     17 policy.attlist &=
     18   [ a:defaultValue = "deny-overrides" ]
     19   attribute combine {
     20     "deny-overrides" | "permit-overrides" | "first-applicable" 
     21   }?,
     22   attribute description { text }?,
     23   attribute id { text }?
     24 
     25 dataHandlingPreferences = element dataHandlingPreferences {dataHandlingPreferences.attlist, authorizationsSet?, obligationsSet?}  
     26 dataHandlingPreferences.attlist &= attribute policyId {text}
     27 
     28 authorizationsSet = element authorizationsSet { authzUseForPurpose* }
     29 
     30 obligationsSet = element obligationsSet { obligation* }
     31 
     32 obligation = element obligation { triggersSet, (actionDeletePersonalData | actionAnonymizePersonalData | actionNotifyDataSubject | actionLog | actionSecureLog)? }
     33 
     34 triggersSet = element triggersSet { triggerAtTime*, triggerPersonalDataAccessedForPurpose*, triggerPersonalDataDeleted*, triggerDataSubjectAccess* }
     35 
     36 triggerAtTime = element triggerAtTime { startTime , maxDelay }
     37 
     38 startTime = element startTime { (startNow | dateAndTime)? }
     39 
     40 startNow = element startNow { empty }
     41 
     42 dateAndTime = element dateAndTime { text }
     43 
     44 maxDelay = element maxDelay { duration }
     45 
     46 duration = element duration { text }
     47 
     48 triggerPersonalDataAccessedForPurpose = element triggerPersonalDataAccessedForPurpose {  purpose*, maxDelay }
     49 
     50 triggerPersonalDataDeleted = element triggerPersonalDataDeleted { maxDelay }
     51 
     52 triggerDataSubjectAccess = element triggerDataSubjectAccess { accessURI }
     53 
     54 accessURI = element accessURI { text }
     55 
     56 actionDeletePersonalData = element actionDeletePersonalData { empty }
     57 
     58 actionAnonymizePersonalData = element actionAnonymizePersonalData {empty}
     59 
     60 actionNotifyDataSubject = element actionNotifyDataSubject { media, address }
     61 
     62 media = element media { text }
     63 
     64 address = element address { text }
     65 
     66 actionLog = element actionLog { empty }
     67 
     68 actionSecureLog = element actionSecureLog { empty }
     69 
     70 authzUseForPurpose = element authzUseForPurpose { purpose* }
     71 
     72 purpose =
     73   element purpose {
     74     "http://www.w3.org/2002/01/P3Pv1/current" |
     75     "http://www.w3.org/2002/01/P3Pv1/admin" |
     76     "http://www.w3.org/2002/01/P3Pv1/develop" |
     77     "http://www.w3.org/2002/01/P3Pv1/tailoring" |
     78     "http://www.w3.org/2002/01/P3Pv1/pseudo-analysis" |
     79     "http://www.w3.org/2002/01/P3Pv1/pseudo-decision" |
     80     "http://www.w3.org/2002/01/P3Pv1/individual-analysis" |
     81     "http://www.w3.org/2002/01/P3Pv1/individual-decision" |
     82     "http://www.w3.org/2002/01/P3Pv1/contact" |
     83     "http://www.w3.org/2002/01/P3Pv1/historical" |
     84     "http://www.w3.org/2002/01/P3Pv1/telemarketing" |
     85     "http://www.w3.org/2002/01/P3Pv11/account" |
     86     "http://www.w3.org/2002/01/P3Pv11/arts" |
     87     "http://www.w3.org/2002/01/P3Pv11/browsing" |
     88     "http://www.w3.org/2002/01/P3Pv11/charity" |
     89     "http://www.w3.org/2002/01/P3Pv11/communicate" |
     90     "http://www.w3.org/2002/01/P3Pv11/custom" |
     91     "http://www.w3.org/2002/01/P3Pv11/delivery" |
     92     "http://www.w3.org/2002/01/P3Pv11/downloads" |
     93     "http://www.w3.org/2002/01/P3Pv11/education" |
     94     "http://www.w3.org/2002/01/P3Pv11/feedback" |
     95     "http://www.w3.org/2002/01/P3Pv11/finmgt" |
     96     "http://www.w3.org/2002/01/P3Pv11/gambling" |
     97     "http://www.w3.org/2002/01/P3Pv11/gaming" |
     98     "http://www.w3.org/2002/01/P3Pv11/government" |
     99     "http://www.w3.org/2002/01/P3Pv11/health" |
    100     "http://www.w3.org/2002/01/P3Pv11/login" |
    101     "http://www.w3.org/2002/01/P3Pv11/marketing" |
    102     "http://www.w3.org/2002/01/P3Pv11/news" |
    103     "http://www.w3.org/2002/01/P3Pv11/payment" |
    104     "http://www.w3.org/2002/01/P3Pv11/sales" |
    105     "http://www.w3.org/2002/01/P3Pv11/search" |
    106     "http://www.w3.org/2002/01/P3Pv11/state" |
    107     "http://www.w3.org/2002/01/P3Pv11/surveys" |
    108     "http://www.primelife.eu/purposes/unspecified" 
    109   }
    110 
    111 provisionalActions = element provisionalActions { provisionalAction* }
    112 
    113 provisionalAction = element provisionalAction { attributeValue, attributeValue }
    114 
    115 attributeValue = element attributeValue { text }
    116 
    117 rule = element rule { rule.attlist, condition?, dataHandlingPreferences?, provisionalActions? }
    118 rule.attlist &=
    119   [ a:defaultValue = "permit" ]
    120   attribute effect {
    121     "permit" 
    122     | "prompt-blanket" 
    123     | "prompt-session" 
    124     | "prompt-oneshot" 
    125     | "deny" 
    126   }?,
    127   attribute id { text }?
    128 
    129 target = element target { target.attlist, subject+ }
    130 target.attlist &= 
    131   attribute id { text }?
    132 
    133 subject = element subject { subject.attlist, subject-match+ }
    134 subject.attlist &= empty
    135 
    136 condition =
    137   element condition {
    138     condition.attlist,
    139     (condition | subject-match | resource-match | environment-match)+
    140   }
    141 condition.attlist &=
    142   [ a:defaultValue = "and" ] attribute combine { "and" | "or" }?
    143 
    144 match-attrs =
    145   attribute attr { text },
    146   attribute match { text }?,
    147   [ a:defaultValue = "glob" ]
    148   attribute func { "equal" | "glob" | "regexp" }?
    149 
    150 subject-match = element subject-match { subject-match.attlist, text? }
    151 subject-match.attlist &= match-attrs
    152 
    153 match-model = (text | subject-attr | resource-attr | environment-attr)*
    154 
    155 resource-match =
    156   element resource-match { resource-match.attlist, match-model }
    157 resource-match.attlist &= match-attrs
    158 
    159 environment-match =
    160   element environment-match { environment-match.attlist, match-model }
    161 environment-match.attlist &= match-attrs
    162 
    163 attr-attrs = attribute attr { text }
    164 subject-attr = element subject-attr { subject-attr.attlist, empty }
    165 subject-attr.attlist &= attr-attrs
    166 resource-attr = element resource-attr { resource-attr.attlist, empty }
    167 resource-attr.attlist &= attr-attrs
    168 environment-attr =
    169   element environment-attr { environment-attr.attlist, empty }
    170 environment-attr.attlist &= attr-attrs
    171 
    172 start = policy-set
    173 start |= policy

References[¶](#References)
--------------------------

### APISI[¶](#APISI)

[D036 API Security
Issues](/t3-5/wiki/D036_API_Security_Issues_Includes)

### XACML[¶](#XACML)

[OASIS eXtensible Access Control Markup Language (XACML)
TC](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=xacml)

### PrimeLife[¶](#PrimeLife)

[PrimeLife](http://www.primelife.eu/)

### PrimeLifeRDI[¶](#PrimeLifeRDI)

<http://www.primelife.eu/images/stories/deliverables/d5.3.4-report_on_design_and_implementation-public.pdf>

### P3P11[¶](#P3P11)

<http://www.w3.org/TR/P3P11/>

### BONDIA&S[¶](#BONDIA38S)

[BONDI's Architecture and Security
Appendices](http://bondi.omtp.org/1.11/security/BONDI_Architecture_and_Security_Appendices_v1.1.pdf),
January 2010

### DAPWG[¶](#DAPWG)

[Device APIs and Policy Working Group](http://www.w3.org/2009/dap/)

### RFC3986[¶](#RFC3986)

[Uniform Resource Identifier (URI): Generic
Syntax](http://www.ietf.org/rfc/rfc3986.txt), January 2005

### WACDS[¶](#WACDS)

[WAC Device
Specifications](http://specs.wacapps.net/2.0/jun2011/index.html), June
2011

### WACSP[¶](#WACSP)

[WAC Core Specification section
7.5](http://specs.wacapps.net/core/#security-parameters "Security parameters")

### WACXMLSP[¶](#WACXMLSP)

[WAC: XML definition of Security
Policy](http://specs.wacapps.net/2.0/jun2011/core/wacxml.rnc "RelaxNG")

### RELAXNGCS[¶](#RELAXNGCS)

[RELAX NG Compact Syntax](http://relaxng.org/compact-20021121.html)

