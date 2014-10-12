Spec - Security[¶](#Spec-Security)
==================================

Conceptual Architecture[¶](#Conceptual-Architecture)
----------------------------------------------------

In Webinos the concept of security is extended in two directions:
resources access control and privacy protection.

As reported in the preceding sections one of the most widely used and
flexible solutions is represented by XACML
([OASISXACML](OASISXACML.html)). The XACML specification defines an
XML-based language and an architecture for the expression and evaluation
of access control policies but doesn't provide neither privacy
protection nor the specification and evaluation of credential
restrictions in the policies.\
With the PrimeLife extension ([PRIMELIFE](PRIMELIFE.html)) the privacy
requirements can be fulfilled: the user has control of his personal data
and can negotiate its disclosure with the access control system.

### XACML architecture (Data flow)[¶](#XACML-architecture-Data-flow)

XACML (eXtensible Access Control Markup Language) is an OASIS standard
([OASISXACML](OASISXACML.html)) for access control systems that defines
a language for the description of XML access control policies and an
architecture to enforce access control decisions.

The XACML architecture depicted in the figure is composed of the
following elements:

***Access Requestor***: the entity which requires the capability.

***Policy Enforcement Point (PEP)***: the entity that performs access
control, by making decision requests and enforcing authorization
decisions. It also try to execute the Obligations and doesn't grant
access if is unable to complete these actions.

***Obligations***: operations specified in a policy that should be
performed by the PEP in conjunction with the enforcement of an
authorization decision. These operations must be carried out before or
after an access is granted.

***Policy Decision Point (PDP)***: the main decision point for the
access requests. It collects all the necessary information from other
actors and concludes an authorization decision.

***Context Handler***: the entity which sends a policy evaluation
request to the PDP and manage context-based information.

***Policy Information Point (PIP)***: the entity that acts as a source
of attribute values that are retrieved from several internal or external
parties like resources, subjects, environment and so on.

***Policy Administration Point (PAP)***: the repository for the
policies, it manages policies and provides them to the Policy Decision
Point.

***Resources / Subjects / Environment***: parties that provide
attributes to the PIP.

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

In a chronological order the data flow sequence is:

1.  Policies and policy sets are defined in the PAP and made available
    to the PDP.
2.  The Access Requestor sends a request to the PEP for the access to
    the specified resource.
3.  The PEP translate the request in native format and sends it to the
    XACML Context Handler. This may include attributes of the subjects,
    resources, actions, and environment.
4.  The Context Handler creates an XACML request context and sends a
    policy evaluation request to the PDP.
5.  The PDP, in order to evaluate the policies, queries the Context
    Handler for attributes of the subject, resource, action, and
    environment.
6.  The Context Handler obtains the attributes either from the request
    context created in step 4, or from the PIP.
7.  The PIP collects attributes about subject, resource and environment.
8.  The PIP returns the requested attributes to the Context Handler.
9.  Optionally, the Context Handler includes the resource in the
    context.
10. The Context Handler returns to the PDP the requested attributes.
11. The PDP sends the response context (including the authorization
    decision) to the Context Handler.
12. The Context Handler sends to the PEP the response context in native
    response format.
13. The PEP tries to execute obligations.

### XACML extended with PrimeLife for webinos (Data flow)[¶](#XACML-extended-with-PrimeLife-for-webinos-Data-flow)

The architecture chosen to achieve the goals on security and privacy
outlined by webinos, is an XACML distributed architecture integrated
with the PrimeLife extension.\
PrimeLife is a research project on privacy and identity management,
funded by the European Commission from 2008 to 2011
([PRIMELIFE](PRIMELIFE.html)). The project proposes an extension to the
standard XACML architecture allowing among other things the support of
privacy data handling policies on systems with a resource access control
based on XACML.

The main motivations behind the choice of the PrimeLife extension, other
than the support of data-handling privacy policies are:

-   Introduction of negotiation in the evaluation process: negotiation
    allows an incremental evaluation of access control policies and
    reduces the disclosure of personal data.
-   Support for credential-based restrictions (digital credential and
    certified attributes)
-   Legislation support (EU privacy directives)
-   PrimeLife is an open-source European Project

The complete architecture, depicted below, contains new components that
are PZH and PZP defined in the high level webinos architecture, Decision
Wrapper, Access Manager, DHDF, Data Reader and Request Context derived
from the PrimeLife extension and the PDPC (PDPCache) generally included
in XACML's PDP component. Follows the description of these components:

***Personal Zone Proxy (PZP)***: defined in the preceding sections, in
this context can act in four ways

-   enforces authorization decisions at device level
-   synchronizes request context data with other devices
-   synchronizes PDP policies with other devices
-   verifies credentials towards the request context

***Personal Zone Hub (PZH)***: defined in the preceding sections, in
this context can act in three ways:

-   as a data synchronizer towards the request context (via PZP)
-   as a policy synchronizer towards the PDP / PDPC (via PZP)
-   as a credential system (responsible for credential verification)
    towards the request context (via PZP)

***Decision Wrapper***: responsible for driving the access control
policy evaluation and enforcement.

***Access Manager***: the entity in charge of taking the final decision
by combining the XACML access.\
control and the DHDF data.

***DHDF Engine***: Data Handling Decision Function engine provides
privacy and data handling functionalities.\
It does not implement a complete privacy-aware access control system,
but rather it is responsible for\
the management and evaluation of data handling policies only.

***Data Reader***: responsible for abstracting the communication with
the Request Context.

***Request Context***: responsible for managing all contextual
information; it stores all the data and\
credentials released by a user in a given session.

***PDPC***: the PDP cache, stores PDP decisions that could be share
among personal devices.

![ digraph G { "Remote\\nAccess\\nRequestor"[shape=box] "Access
Requestor"[shape=box] "Credential\\nSystem"[shape=box] "Overlay
Network"[shape=ellipse] "Webinos Cloud\\nPDPC - PIP -
PAP"[shape=ellipse] node [shape=box, fillcolor=lightgray, style="filled,
rounded"] {rank = same; "Access Requestor"; "Decision Wrapper"} {rank =
same; "DHDF\\nEngine"; "Access Manager"} {rank = same; "PEP";
"Obligations"} {rank = same; "Context Handler"; "PDP"; "PDPC"} {rank =
same; "PIP"; "PZP"; "Webinos Cloud\\nPDPC - PIP - PAP"} {rank = same;
"Data Reader"; "Request\\nContext"; "Credential\\nSystem"}
"Remote\\nAccess\\nRequestor" -\> "Overlay Network" -\> "PZH/PZP" -\>
"Decision Wrapper" "Access Requestor" -\> "Decision Wrapper" "Decision
Wrapper" -\> "Access Manager" "DHDF\\nEngine" -\> "Access Manager"
[dir=back] "Access Manager" -\> "PEP" -\> "Obligations" "PEP" -\>
"Context Handler" "PIP" -\> "Context Handler" [dir=back] "Context
Handler" -\> "PDP" [dir=both] "PDP" -\> "PDPC" "PDP" -\> "PAP"
[dir=both] "PDPC" -\> "PZP" [dir=both] "PAP" -\> "PZP" [dir=both]
"PIP" -\> "PZP" -\> "Webinos Cloud\\nPDPC - PIP - PAP" [dir=both]
"PIP" -\> "Data Reader" "DHDF\\nEngine" -\> "Data Reader" "Data
Reader" -\> "Request\\nContext" "Request\\nContext" -\>
"Credential\\nSystem" [dir=back] }
](/redmine/wiki_external_filter/filter?index=0&macro=graphviz&name=6191211b4467c5385b7cfbf4636dfff7dc9431f9b1ac0894c2d1025fafbc81f8)
![ digraph G { "Remote\\nAccess\\nRequestor"[shape=box] "Access
Requestor"[shape=box] "Credential\\nSystem"[shape=box] "Overlay
Network"[shape=ellipse] "Webinos Cloud\\nPDPC - PIP -
PAP"[shape=ellipse] node [shape=box, fillcolor=lightgray, style="filled,
rounded"] {rank = same; "Access Requestor"; "Decision Wrapper"} {rank =
same; "DHDF\\nEngine"; "Access Manager"} {rank = same; "PEP";
"Obligations"} {rank = same; "Context Handler"; "PDP"; "PDPC"} {rank =
same; "PIP"; "PZP"; "Webinos Cloud\\nPDPC - PIP - PAP"} {rank = same;
"Data Reader"; "Request\\nContext"; "Credential\\nSystem"}
"Remote\\nAccess\\nRequestor" -\> "Overlay Network" -\> "PZH/PZP" -\>
"Decision Wrapper" "Access Requestor" -\> "Decision Wrapper" "Decision
Wrapper" -\> "Access Manager" "DHDF\\nEngine" -\> "Access Manager"
[dir=back] "Access Manager" -\> "PEP" -\> "Obligations" "PEP" -\>
"Context Handler" "PIP" -\> "Context Handler" [dir=back] "Context
Handler" -\> "PDP" [dir=both] "PDP" -\> "PDPC" "PDP" -\> "PAP"
[dir=both] "PDPC" -\> "PZP" [dir=both] "PAP" -\> "PZP" [dir=both]
"PIP" -\> "PZP" -\> "Webinos Cloud\\nPDPC - PIP - PAP" [dir=both]
"PIP" -\> "Data Reader" "DHDF\\nEngine" -\> "Data Reader" "Data
Reader" -\> "Request\\nContext" "Request\\nContext" -\>
"Credential\\nSystem" [dir=back] }
](/redmine/wiki_external_filter/filter?index=1&macro=graphviz&name=6191211b4467c5385b7cfbf4636dfff7dc9431f9b1ac0894c2d1025fafbc81f8)

The data flow sequence is exposed by the three scenarios presented in
the "Formal Specification" paragraph.\
Although Obligations are included in the architecture they will be
handled in the phase 2.

More aspects on security and privacy will be pointed out in the 3.5
deliverable ([D035](D035.html))

Technical Use Cases[¶](#Technical-Use-Cases)
--------------------------------------------

Here are depicted and briefly presented use-cases particularly relevant
for policy sub-task.

### WOS-UC-TA8-002: Interpreting policies and taking access control decisions[¶](#WOS-UC-TA8-002-Interpreting-policies-and-taking-access-control-decisions)

**Normal Flow**

***Pre-Condition***\
The User has a tablet PC running webinos.\
The User has a photo collection on his tablet PC which he would like to
share with other people.\
The webinos platform has a set of policies installed. These are not
contradictory - a decision can always be taken based on their content.

***Flow***\
1. The User has installed a new photo-sharing Application.\
2. The photo-sharing Application automatically tries to upload his
photos to a shared repository.\
3. Accessing photos stored on the webinos Device - his tablet pc -
results in an access-control request to the webinos platform.\
4. webinos takes the event (Application X accessing File F) and checks
against the set of policies (PS) installed.\
5. The policies allow this action, and the photo-sharing app resumes
uploading photos.

***Post-Condition***\
The correct access control decision is taken with respect to all
policies.

**Alternate Flow (optional)**

***Pre-Condition***\
Same as normal flow.

***Post-Condition***\
5. The policies do not allow this action and the Application is not able
to upload any files.\
6. The Application fails gracefully, informing the User of why it is
unable to complete the request.\
7. The access control decision is logged.

**Alternate Flow (optional)**\
***Pre-Condition***\
Same as normal flow.

***Post-Condition***\
5. The policies require an extra condition before allowing this action:
in this case, requesting User input to confirm that this behaviour is
permitted.\
6. webinos prompts the User to confirm that access to photos is
allowed.\
7. The User agrees.\
8. The photo-sharing Application resumes uploading photos.

### Sequence diagram analysis: WOS-UC-TA8-002 - Interpreting policies and taking access control decisions[¶](#Sequence-diagram-analysis-WOS-UC-TA8-002-Interpreting-policies-and-taking-access-control-decisions)

<div class="uml">title usecase WOS-UV-TA8-002

actor "User" as usr

participant "photo-sharing\napplication" as app
participant "PEP" as pep
participant "PDP" as pdp
participant "shared\nrepository" as rep

autonumber
note over usr
	this entity includes
	both the real user and
	the webinos front-end
end note

app -> pep : photos upload attempt
pep -> pdp : policies check

alt normal flow
	note over pep, pdp
		policies allow photo upload
	end note
	pdp -> pep : operation granted
	pep -> app : action allowed
	app -> rep : photos upload
else alternate flow
	autonumber 3
	note over pep, pdp
		policies do not allow photo upload
	end note
	pdp -> pep : operation denied
	pep -> app : action not allowed
	app -> usr : upload aborted
	note over usr, app
		the access control
		decision is logged
	end note
else alternate flow
	autonumber 3
	note over pep, pdp
		policies require user confirm
		before allowing photo upload
	end note
	pdp -> pep : confirm requested
	pep -> usr : ask for confirm
	usr -> pep : operation granted
	pep -> app : action allowed
	app -> rep : photos upload
end<div>

### WOS-UC-TA8-003: Enforcing multiple policies on multiple devices[¶](#WOS-UC-TA8-003-Enforcing-multiple-policies-on-multiple-devices)

**Normal Flow**\
***Flow***\
1. The User has a Mobile phone and an in-car entertainment System.\
2. The User decides that he does not want to alert local networks to his
presence.\
3. He uses webinos to specify that his Devices should remain hidden and
not discoverable. He does this on his Mobile phone.

***Post-Condition***\
Any webinos Device used by the User subsequently will not be
discoverable by a remote network. This includes his car whenever he is
using it.

**Alternate Flow**\
***Pre-Condition***\
A User has both personal and work photos on his webinos Device.

***Flow***\
1. The User uses a Mobile phone provided by his company, a professional
photography business.\
2. He has configured it to allow him to share personal information with
certain social networking Applications.\
3. One of the Applications encourages the sharing of personal photos.\
4. He does not see a problem with sharing the photos on his Device, and
proceeds, allowing the potential upload of all photos on his Device.\
5. However, the company policy protects all the photos owned by the
company, many of which he has inadvertently given permission to. These
are forbidden from being used by non-trusted Applications.\
6. The webinos policy engine interprets the User's policy and the
company policy - knowing that the company, as the phone's owner, takes
precedence - and denies access to the relevant photos.

***Post-Condition***\
The User can only share his own photos with his social network
Application, not any of the company's copyrighted photos.

### Sequence diagram analysis: WOS-UC-TA8-003 - Enforcing multiple policies on multiple devices (normal flow)[¶](#Sequence-diagram-analysis-WOS-UC-TA8-003-Enforcing-multiple-policies-on-multiple-devices-normal-flow)

<div class="uml">title usecase WOS-UV-TA8-003\nnormal flow

actor "User" as usr
participant "mobile privacy\ndashboard" as mobile_pd
participant "mobile discovery\nservice" as mobile_sd
participant "mobile\nPEP" as mobile_pep
participant "mobile\nPDP" as mobile_pdp
participant "cloud\nPDPC" as cloud_pdpc
participant "in-car\nPDP" as car_pdp
participant "in-car\nPEP" as car_pep
participant "in-car discovery\nservice" as car_sd

autonumber

usr -> mobile_pd : set hidden mode
mobile_pd -> mobile_pep : privacy setting modification attempt
mobile_pep -> mobile_pdp : policies check
mobile_pdp -> mobile_pep : operation granted
mobile_pep -> mobile_pd : action allowed
mobile_pd -> mobile_pdp : new privacy settings
note over mobile_pdp, cloud_pdpc
	through mobile PDPC
	and mobile PZP
end note
mobile_pdp -> cloud_pdpc : policy update
note over cloud_pdpc, car_pdp
	through in-car PZP
	and in-car PDPC
end note
cloud_pdpc -> car_pdp : policy update

== mobile discovery ==

note over mobile_pdp
	assumption: a hello message arrives to the discovery service
	alternative assumption: the PEP may recognize a hello message and filter
	it accordingly to the policy, avoiding to send it to the discovery service
end note

note over mobile_sd
	a nearby device tries
	to sense the mobile
end note

mobile_sd -> mobile_pep : discovery attempt
mobile_pep -> mobile_pdp : policies check
mobile_pdp -> mobile_pep : operation denied
mobile_pep -> mobile_sd : action not allowed

== in-car system discovery==

note over car_sd
	a nearby device tries to
	sense the in-car system
end note

car_sd -> car_pep : discovery attempt
car_pep -> car_pdp : policies check
car_pdp -> car_pep : operation denied
car_pep -> car_sd : action not allowed</div>

### WOS-UC-TA8-007: Policy authoring tools[¶](#WOS-UC-TA8-007-Policy-authoring-tools)

**Normal Flow**\
***Pre-Condition***\
The Developer's company has ownership of company Devices and is able to
set policies which cannot be overridden by the End Users.

***Flow***\
1. The Developer knows that webinos policies are written in a standard
language and he downloads a webinos policy editing tools to help him
create a suitable policy for his requirements.\
2. He uses the tool to select the class of assets which she is concerned
about - all data owned by the company.\
3. He then sets a mandatory policy that this data is not allowed to be
shared with any Application not signed by the company. All access to the
data should also be logged.\
4. He also selects a default policy for personal data, stating that it
should not be shared with Applications by default.\
5. The Developer modifies various other settings until he is happy with
the policy.\
6. The tool provides several examples of how his policy would be
applied, and what it allows and denies access to.\
7. He then tests his policy against several example Device
configurations that the tool supports. This shows him that Devices using
his policy would still be able to run, but would not be able to access
company data.\
8. He saves the policy and signs it to mark it as a trusted company
policy.

***Post-Condition***\
The company policy can be applied to all Devices the company owns and
will control webinos Applications in the ways defined by the Developer.

**Alternate Flow (optional)**\
***Flow***\
7. The Developer tests the policy and realizes that it prevents
Applications from accessing any data on the Devices. This is shown to
him using the policy tool.\
8. He realizes his mistake and modifies the policy suitably.

### Sequence diagram analysis: WOS-UC-TA8-007 - Policy authoring tools[¶](#Sequence-diagram-analysis-WOS-UC-TA8-007-Policy-authoring-tools)

<div class="uml">actor "developer" as dev
participant "policy tool" as tool
participant "PEP" as pep
participant "PDP" as pdp

autonumber

note over tool
	assumption: policies are tested into the
	device and not into a policy tool environment
end note

dev -> tool : set up company policies
tool -> pep : policies modification attempt

pep -> pdp : policies check
pdp -> pep : operation granted
pep -> tool : action allowed
tool -> pdp : new policies set up

== test ==

dev -> tool : company data sharing test
tool -> pep : share company data
pep -> pdp : policies check
pdp -> pep : operation denied
pep -> tool : action not allowed
tool -> dev : company data sharing not allowed

dev -> tool : personal data sharing test
tool -> pep : share personal data
pep -> pdp : policies check

alt normal flow
	pdp -> pep : operation granted
	pep -> tool : action allowed
	tool -> dev : personal data sharing allowed
	note over dev, tool
		Test succesfull. The developer saves
		the policy and signs it to mark it
		as a trusted company policy
	end note
else alternate flow
	autonumber 16
	pdp -> pep : operation denied
	pep -> tool : action not allowed
	tool -> dev : personal data sharing not allowed
	note over dev, tool
		Test unsuccesfull. The developer 
		modifies policies
	end note
end</div>

Here some further use-cases whose aim is to highlight policy
interactions.

### Cross-Device Policy Synchronisation[¶](#Cross-Device-Policy-Synchronisation)

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

Policy Format[¶](#Policy-Format)
--------------------------------

Policies are expressed in the simplified XACML format defined in
"BONDI's Architecture & Security Requirements (Appendices) v1.1"
([BONDIA&S](BONDIA&S.html)) following the grammar provided by WAC
([WACXMLSP](WACXMLSP.html)). This format has been used as a basis in
different specifications as W3C DAP ([DAPWG](DAPWG.html)) and WAC
([WACDS](WACDS.html)).\
In the following sections are described only the updates to the BONDI
policy format:

-   Some new attributes enhance the subject's information to fit webinos
    needs on distribution of policies between devices and cross device
    interaction.
-   Two new attributes enhance the resource's information to identify
    services and the extensions that could be declared in an application
    manifest.

For further details and all points not covered here refer to
([BONDIA&S](BONDIA&S.html)).

IDs in policies[¶](#IDs-in-policies)
------------------------------------

All IDs used in policies to match "subjects" and services (which are
"resources") are URIs coming from the data described below.

Whenever an entity (user, device, application or service) is registered
for the first time in a PZP/PZH, a record with some basic identity
information is stored locally to the PZP/PZH.\
These trusting records - mainly used to convert a generic ID in a handy
URI (loosely coupling them) and to locate the trusted entity's
certificates - should contain the following information:

-   ID: according to the entity could be one of the following
    -   User ID eg. webinos/facebbok/google ID
    -   Device ID eg. MAC address, IMEI, HD serial number
    -   Service/application ID eg. URI, URL
-   Friendly Name: name that could be prompted in a dialog
-   URI: generated on the fly the first time and the used to address the
    entity.
-   Certificates: list of URL/paths to certificates
-   Extensions: [For the phase2] for custom metadata and validation
    rules, e.g. checking IP addresses, MAC addresses, attestation data.

To synchronize these information PZPs/PZH can use JSON array. No format
is defined to store locally these data.

**JSON definition of a single trusting record:**\

     1 {
     2   "id": "...",
     3   "friendly-name": "...",
     4   "uri": "...",
     5   "certificates": [
     6   ...
     7   ],
     8   "extensions": {
     9    ...
    10   }
    11 }

Policy Subject[¶](#Policy-Subject)
----------------------------------

Given a policy, the policy subject define the entity to which the policy
will be applied. A policy may be applied to many subjects that are
called target of the policy.

The subject form used is of the following type:

"User U can access Feature F of Device D through the application A
running in a Device X"

"Device D" is also identified as target device whilst the "Device X" is
identified as requestor device.

There are four basic information points in this subject:

1.  WHO want to access a resource: could be an user (generic or not) or
    a group
2.  WHERE the access requestor is: make possible to differentiate a
    local access (INTRA-DEVICE) from a remote access (INTRA-PZ or
    EXTRA-PZ)
3.  WHERE the resource is: allow to use the same policy file for many
    devices
4.  WHICH application is used: could be used to differentiate behaviour
    for application of different authors, distributors etc..

These information may be all present or not and in this case will be
used the default values (referring to the INTRA-DEVICE scenario)

Pros:

-   The user is represented explicitly.
-   Policies can be copied to multiple devices without changes.
-   Can represent complex scenarios.

Cons:

-   Could be not so intuitive, but the user will manage policies by
    simple tools
-   The policy is user-dependent, but default policies could be defined
    using some "generic users" (see User Info paragraph
    ([User-Info](User-Info.html))).

Subject Attributes[¶](#Subject-Attributes)
------------------------------------------

The subject attributes are divided in three groups:

1.  Widget/Website Identity
2.  Devices Info
3.  User Info

the first group comes from the "B.4 Subject Attributes" section of
([BONDIA&S](BONDIA&S.html)) and defines the properties used to identify
the applications (widgets/websites).

The only changes to this set are related to the attributes "id", "uri"
and "uri-top" that other than the values defined in
([BONDIA&S](BONDIA&S.html)) could contain one of the following URIs:

-   <http://www.webinos.org/subject/info/id/trusted>
-   <http://www.webinos.org/subject/info/id/not-trusted>

The other two groups regarding to the devices and users information are
presented below

### Devices Info[¶](#Devices-Info)

The Devices Info attributes express which device will apply the policies
(the target) and which will try to access the features of the first one
(the requestor).\
If the target-id is absent then the target device will be the "current
device" and in a similar way if the requestor-id is absent the requestor
will be the "current device".\
The "current device" is the device that enforces the policy.

  ------------------ ---------- ----------------------------------------------------------------------------------------------------------------------------------------
  **Attribute**      **Type**   **Value**
  target-id          URI        ID of the device where the policy will be enforced. An ID could be a generic device URI (see list below) or a PZP generated one
  target-domain      URI        Domain of the target device. Refer to the domain URIs listed below
  requestor-id       URI        ID of the device requesting resources. An ID could be a generic device URI (see list below) or a PZP generated one
  requestor-domain   URI        Domain of the requestor device. Refer to the domain URIs listed below
  webinos-enabled    Boolean    True if requestor device is webinos enabled. If this attribute is not specified doesn't matter if the device is webinos enabled or not
  ------------------ ---------- ----------------------------------------------------------------------------------------------------------------------------------------

***Generic device URIs:***

-   <http://www.webinos.org/subject/device-info/id/device> (default)
-   <http://www.webinos.org/subject/device-info/id/pz-device> (trusted
    device)
-   <http://www.webinos.org/subject/device-info/id/pz-shared-device>
    (trusted device)
-   <http://www.webinos.org/subject/info/id/trusted> (any trusted
    device)
-   <http://www.webinos.org/subject/info/id/not-trusted>
-   <http://www.webinos.org/subject/info/id/any>

***Domain URIs:***

-   <http://www.webinos.org/subject/device-info/domain/automotive>
-   <http://www.webinos.org/subject/device-info/domain/desktop>
-   <http://www.webinos.org/subject/device-info/domain/home-media>
-   <http://www.webinos.org/subject/device-info/domain/mobile>

<http://www.webinos.org/subject/device-info/domain/> is the default
domain URI value and represents all domains.

### User Info[¶](#User-Info)

The User Info attributes allow to define the user to which a policy is
referred. If the user-id is absent then the subject refers to any user.

  --------------------------- ---------- -------------------------------------------------------------------------------------------------------------------------------
  **Attribute**               **Type**   **Value**
  user-id                     URI        ID of the user to which the policy will be applied. An ID could be a generic user URI (see list below) or a PZP generated one
  user-key-cn                 String     The common name of the certificate for the user signature
  user-key-fingerprint        String     The fingerprint of the certificate for the user signature
  user-key-root-cn            String     The common name of the root certificate for the user signature
  user-key-root-fingerprint   String     The fingerprint of the root certificate for the user signature
  --------------------------- ---------- -------------------------------------------------------------------------------------------------------------------------------

***Generic user URIs:***

-   <http://www.webinos.org/subject/user-info/id/pz-owner> (trusted
    user)
-   <http://www.webinos.org/subject/user-info/id/pz-member> (trusted
    user)
-   <http://www.webinos.org/subject/user-info/id/trusted-by-pz-owner>
-   <http://www.webinos.org/subject/user-info/id/trusted-by-pz-member>
-   <http://www.webinos.org/subject/info/id/trusted> (user trusted by
    PZ-owner and any PZ-member)
-   <http://www.webinos.org/subject/info/id/not-trusted>
-   <http://www.webinos.org/subject/user-info/id/anonymous>

Resource Attributes[¶](#Resource-Attributes)
--------------------------------------------

In order to control the utilization of third party developers
extensions, as defined in the [Extensions background](.html) section of
this document, the following attribute is introduced to complete the
list defined in "B.5 Resource Attributes" section of
([BONDIA&S](BONDIA&S.html)):

  --------------- ---------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Attribute**   **Type**   **Value**
  service         URI        URI that identifies the service
  app-extension   URI        URI that identifies the extension. If for the extension is not defined an URI, this will be composed by the application URI followed by the name of the extension (using percent-encoding for special characters [RFC3986](RFC3986.html) ) eg. the URI for the extension named "Extension 1" from the manifest of "Application A" which URI is "http://www.ApplicationA.com" will be "http://www.ApplicationA.com/Extension%201"
  --------------- ---------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The attributes "service" and "app-extension" could contain one of the
following URIs:

-   <http://www.webinos.org/resource/info/id/trusted>
-   <http://www.webinos.org/resource/info/id/not-trusted>

Action features[¶](#Action-features)
------------------------------------

The representation of all privileged features that are part of WRT and
can be enforced by policy manager but are invisible to the developers,
is made through the action features listed below that refers to the
widget lifecycle and to the WRT and policy control.

-   <http://www.webinos.org/action/widget-install>
-   <http://www.webinos.org/action/widget-instantiate>
-   <http://www.webinos.org/action/widget-update>
-   <http://www.webinos.org/action/widget-uninstall>
-   <http://www.webinos.org/action/wrt-update>
-   <http://www.webinos.org/action/wrt-monitoring>
-   <http://www.webinos.org/action/data-logging>
-   <http://www.webinos.org/action/network-access>
-   <http://www.webinos.org/action/policy-management>

Policy Examples[¶](#Policy-Examples)
------------------------------------

Below is presented a group of simple policies that cover different
scenarios like widget installation, feature / external services access
control, resource sharing, policies outsourcing and management. The
examples show policies for single and multiple devices.

In the following the "User U" is the user that can physically control
the device and is logged in it.

### User U wants to install Application A and grant it access to APIs J0-J9[¶](#User-U-wants-to-install-Application-A-and-grant-it-access-to-APIs-J0-J9)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition combine="or">
    10                 <resource-match attr="api-feature" match="http://www.webinos.org/action/widget-install"/>
    11 
    12                 <resource-match attr="api-feature" match="(API J0)"/>
    13                 <resource-match attr="api-feature" match="(API J1)"/>
    14                 ...
    15                 <resource-match attr="api-feature" match="(API J9)"/>
    16         </condition>
    17     </rule>
    18 
    19     <rule effect="deny" />
    20 </policy>

### User U wants to grant Application A access to APIs J0-J9, but only on device M[¶](#User-U-wants-to-grant-Application-A-access-to-APIs-J0-J9-but-only-on-device-M)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5             <subject-match attr="target-id" match="(Device M)"/>
     6         </subject>
     7     </target>
     8 
     9     <rule effect="permit">
    10         <condition combine="or">
    11                 <resource-match attr="api-feature" match="(API J0)"/>
    12                 <resource-match attr="api-feature" match="(API J1)"/>
    13                 ...
    14                 <resource-match attr="api-feature" match="(API J9)"/>
    15         </condition>
    16     </rule>
    17 
    18     <rule effect="deny" />
    19 </policy>

### User U wants to grant Application A access to APIs J0-J9, on devices M and N.[¶](#User-U-wants-to-grant-Application-A-access-to-APIs-J0-J9-on-devices-M-and-N)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5             <subject-match attr="target-id" match="{(Device M), (Device N)}"/>
     6         </subject>
     7     </target>
     8 
     9     <rule effect="permit">
    10         <condition combine="or">
    11                 <resource-match attr="api-feature" match="(API J0)"/>
    12                 <resource-match attr="api-feature" match="(API J1)"/>
    13                 ...
    14                 <resource-match attr="api-feature" match="(API J9)"/>
    15         </condition>
    16     </rule>
    17 
    18     <rule effect="deny" />
    19 </policy>

### User U wants to grant Application A access to all extensions defined in its manifest (only on his cars) and to API J0 (on all devices)[¶](#User-U-wants-to-grant-Application-A-access-to-all-extensions-defined-in-its-manifest-only-on-his-cars-and-to-API-J0-on-all-devices)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition combine="or">
    10             <condition>
    11                 <subject-match attr="target-domain" match="http://www.webinos.org/subject/device-info/domain/automotive"/>
    12                 <resource-match attr="app-extension" match="*"/>
    13             </condition>
    14 
    15             <resource-match attr="api-feature" match="(API J0)"/>
    16         </condition>
    17     </rule>
    18 
    19     <rule effect="deny" />
    20 </policy>

### User U wants to share his photos (P0-P99) with User V.[¶](#User-U-wants-to-share-his-photos-P0-P99-with-User-V)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="(User V)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition>
    10             <resource-match attr="device-cap" match="(method to access to photos)"/>
    11             <resource-match attr="param:(name of the param that identifies a photo)" match="path_to_photos/P(0|[1..9][0..9]?)" func="regexp"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="deny" />
    16 </policy>

### Grant Application A to use services provided by Application B, hosted somewhere else (not in the current device).[¶](#Grant-Application-A-to-use-services-provided-by-Application-B-hosted-somewhere-else-not-in-the-current-device)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="deny">
     9         <condition>
    10             <resource-match attr="service" match="(Services exposed by application B)"/>
    11             <subject-match attr="target-id" match="http://www.webinos.org/subject/device-info/id/device"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="permit">
    16         <condition>
    17             <resource-match attr="service" match="(Services exposed by application B)"/>
    18         </condition>
    19     </rule>
    20 
    21     <rule effect="deny" />
    22 </policy>

### Application A wants to use services provided by Application B, also present on the same device M.[¶](#Application-A-wants-to-use-services-provided-by-Application-B-also-present-on-the-same-device-M)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition>
    10             <resource-match attr="device-cap" match="(Services exposed by application B)"/>
    11         </condition>
    12     </rule>
    13 
    14     <rule effect="deny" />
    15 </policy>

### User U works for Company MegaCorp who want to have remote access to work data items W0-W99.[¶](#User-U-works-for-Company-MegaCorp-who-want-to-have-remote-access-to-work-data-items-W0-W99)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="(MegaCorp)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition>
    10             <resource-match attr="device-cap" match="(method to access to work data items)"/>
    11             <resource-match attr="param:(name of the param that identifies a work data item)" match="W(0|[1..9][0..9]?)" func="regexp"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="deny" />
    16 </policy>

### User U wants to restrict Application A from using network N.[¶](#User-U-wants-to-restrict-Application-A-from-using-network-N)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="deny">
     9         <condition>
    10             <resource-match attr="api-feature" match="http://www.webinos.org/action/network-access"/>
    11             <environment-match attr="bearer-name" match="(Network N)">
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="prompt-oneshot" />
    16 </policy>

### User U wants Application A to work using network N when he is at MegaCorp and wants to use network L when he is at home. [For the phase2][¶](#User-U-wants-Application-A-to-work-using-network-N-when-he-is-at-MegaCorp-and-wants-to-use-network-L-when-he-is-at-home-For-the-phase2)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition combine="or">
    10             <condition combine="and">
    11                 <resource-match attr="api-feature" match="http://www.webinos.org/action/network-access"/>
    12                 <environment-match attr="bearer-name" match="(Network N)">
    13                 <environment-match attr="[current-checkin-location]" match="(Location MegaCorp)">
    14             </condition>
    15             <condition combine="and">
    16                 <resource-match attr="api-feature" match="http://www.webinos.org/action/network-access"/>
    17                 <environment-match attr="bearer-name" match="(Network L)">
    18                 <environment-match attr="[current-checkin-location]" match="(Location Home)">
    19             </condition>
    20         </condition>
    21     </rule>
    22 
    23     <rule effect="deny" />
    24 </policy>

### User U wants third party S to manage his policy settings on his device M[¶](#User-U-wants-third-party-S-to-manage-his-policy-settings-on-his-device-M)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="(Third party S)"/>
     5             <subject-match attr="target-id" match="(Device M)"/>
     6         </subject>
     7     </target>
     8 
     9     <rule effect="permit">
    10         <condition combine="or">
    11             <resource-match attr="api-feature" match="http://www.webinos.org/action/policy-manage"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="deny" />
    16 </policy>

### User U wants third party S to manage his policy settings on all his (PZ) devices: M, N and O.[¶](#User-U-wants-third-party-S-to-manage-his-policy-settings-on-all-his-PZ-devices-M-N-and-O)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="(Third party S)"/>
     5             <subject-match attr="target-id" match="http://www.webinos.org/subject/device-info/id/pz-device"/>
     6         </subject>
     7     </target>
     8 
     9     <rule effect="permit">
    10         <condition combine="or">
    11             <resource-match attr="api-feature" match="http://www.webinos.org/action/policy-management"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="deny" />
    16 </policy>

### User U is not allowed to install applications on device M.[¶](#User-U-is-not-allowed-to-install-applications-on-device-M)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="(User U)"/>
     5             <subject-match attr="target-id" match="(Device M)"/>
     6         </subject>
     7     </target>
     8 
     9     <rule effect="deny">
    10         <condition>
    11             <resource-match attr="api-feature" match="http://www.webinos.org/action/widget-install"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="prompt-oneshot"/>
    16 </policy>

### Developer D1 wants to update the required access control policy for application A as part of an upgrade. [For the phase2][¶](#Developer-D1-wants-to-update-the-required-access-control-policy-for-application-A-as-part-of-an-upgrade-For-the-phase2)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="author-key-fingerprint" match="(Author D1)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition>
    10             <resource-match attr="api-feature" match="http://www.webinos.org/action/policy-management"/>
    11             <resource-match attr="param:id" match="(Policy for application A)"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="deny"/>
    16 </policy>

### Application A1 wants to access (historic) context information provided by service/sensor S1 on device M. [For the phase2][¶](#Application-A1-wants-to-access-historic-context-information-provided-by-servicesensor-S1-on-device-M-For-the-phase2)

     1 <!-- SIMILAR TO: User U wants to grant Application A access to APIs J0-J9, but only on device M -->
     2 <policy combine="first-applicable">
     3     <target>
     4         <subject>
     5             <subject-match attr="id" match="(Application A1)"/>
     6             <subject-match attr="target-id" match="(Device M)"/>
     7         </subject>
     8     </target>
     9 
    10     <rule effect="permit">
    11         <condition>
    12             <resource-match attr="api-feature" match="(API that allows to access (historic) context information provided by services/sensors)"/>
    13             <resource-match attr="param:(param that identifies services/sensors)" match="(Service/Sensor S1)"/>
    14         </condition>
    15     </rule>
    16 
    17     <rule effect="deny" />
    18 </policy>

Privilege Apps and Services (Access Control)[¶](#Privilege-Apps-and-Services-Access-Control)
--------------------------------------------------------------------------------------------

Privileged Apps[¶](#Privileged-Apps)
====================================

Specifications[¶](#Specifications)
----------------------------------

Formal Specification:[¶](#Formal-Specification)
-----------------------------------------------

The scope and support of providing Privileged Apps and Services into
webinos applications for security:\
• Preventing unauthorized access, Authenticating users, Enforcing
acceptable user policies\
• Authorizing all user access based on the user’s role\
• Identifying and monitoring shared user or device access\
• Controlling access, Monitoring and reporting on all network, OS
access\
• Only Digitally signed applications for the extensions should be
allowed to be executed by the webinos runtime.\
• Grant access to exchange of Private to Public keys, Certificate,
access tokens, nodes, contextual data between the PZP and PZH.\
• Identify the treats and list the actions in the access control list.
In case of treats block the application or the source to access the
resource or the content and notify the User.\
• Access control policies that restrict the extensions that try to
access the OS services.

The following are the summarised and the identified Privileged
requirements for webinos applications:\
• Interpreting policies and taking access control decisions\
• Enforcing multiple policies on multiple devices\
• Policy Authorizing tools\
• Cross- Device Policy Synchronisation\
• Policies for the Stored data\
• Dynamically Sharing Content with other Users in a Controlled Manner\
• Checking access to APIs – Refers to Content Adaption\
• Create contexts from a pre-defined template

Two ways of using Privileged Apps and Services in webinos for security purpose:[¶](#Two-ways-of-using-Privileged-Apps-and-Services-in-webinos-for-security-purpose)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.) Enforce access control policies at the Runtime Environment.\
2.) An Application which uses system commands and classes which manages
the OS services, access rights, registries, roles based on the users and
so on.

1.) Enforce access control policies at the Web Runtime Environment.[¶](#1-Enforce-access-control-policies-at-the-Web-Runtime-Environment)
-----------------------------------------------------------------------------------------------------------------------------------------

Privileged Apps Policy Examples:\
The detailed description with the examples is shown how to enforce
access control policies at the Web Runtime Environment which can be
found in the Technical Uses Cases and Policy Examples section in the
link below:\
</wp3-1/wiki/Spec_-_Security>

Support of Privileged Apps in webinos:[¶](#Support-of-Privileged-Apps-in-webinos)
---------------------------------------------------------------------------------

**Authentication and Authorization**:

The Privileged Apps in webinos supports from the first level of User
Identity. Authentication is the first step to confirm the user identity
and then to grant other security properties, like authorization,
permissions and access control to what resources that the user can
access all the other webinos devices in the personal zone. The Discovery
Mechanism identifies the other webinos devices in the personal zone and
authenticates the user. The access control logs the Authentication to
the personal zone (user authentication with the personal zone hub). A
Notification pops up in the User’s profile that the device is enabled to
access the other webinos devices in the personal zone. The Privileged
Apps and Services monitors and keeps track of the personal zone identity
and personal zone proxies. Once the public private key mechanism is
generated, retrieving data should be all running in privilege app space
updating the user credential information such as password, certificates,
applications, status. Enable access to recorded decisions when the user
isn't available in real time, e.g. OAuth where a user grants a temporary
right to access personal data one server to another remote server.

There is a common authorization model defined for all the trust domains
and common language for expressing security policies. The Privileged
apps would support authorizations at all levels of granularity. Access
control domain that receives such a request will lookup authorization
policies that are relevant to the authorization request. Storing
Authorization and Certificates in a safe and protected place for the
digitally signed applications, so that tampering with them is prevented.
Once the User Identity is checked the Privileged apps would look and
identify applications which have been granted particular privileges
under this particular user. View a list of all their webinos
applications and show the authority that certified the application for
the users. Privileged apps would have restrictions of the access control
policies on applications from potentially malicious applications that
cause damages and support device integrity to restrict malwares.
Policies shall be enforced to strongly protect from misusing device
capabilities while running. Support customized encryption of any data
stream. Ensuring that only trusted components are downloaded and that
the applications are guaranteed some level of execution and ensure that
an application does not access device features, extensions and content
other than those associated to it. It would delegate decisions to a
trusted third party when appropriate like what restricted capabilities
that an application wants to use and to be able to do so in advance of
installing or running the application.

**Discovery**:

When Discovery retrieves the address information of a device or services
either through local or remote networking access the access control
should check whether the address, devices or services are valid or not
if it is valid then should allow access if not then it should restrict
access. Similarly, If service driver is required to be installed for the
device, privilege application should support the driver this would
require application to be in privilege mode to be able to perform this
action. The Device visibility control, device in multicast mode could be
passive or active listener. (Privilege app should control the device
visibility options). Access control to access different file system area
and obtain user credentials information. Typical File System operation
would linux to access. Capable of setting dynamic access control
policies for device data when initiating an association to another
webinos device.

**Context**:

User A doesn’t wants to allow User B to access his (location, photo,
photo-album, a playlist) and other stuffs across other devices too and
So there Should be some policies defined (example: Resources/File in
Deliverable 3.1 Security Specifications:
</wp3-1/wiki/Spec_-_Security>).
When a context manager (entity) asks for a context data it shall grant
and retrieve the data and the Policies should be able to make a decision
(PDP) and enforce them. Storing of device context in a file system.
Privileged apps to look what purpose limitations and what data handling
obligations will be agreed by the requesting party upon obtaining the
user consent. Review and manage which applications users have granted
permissions to, and in what context.

**Extensions**:

• Only the digitally signed applications for the extensions shall be
allowed to be executed by the webinos runtime.\
• A list of extensions to be logged by the Privileged Apps and
Services.\
• Privileged Apps and Services shall keep track of the Plug-ins,
applications, untrustworthy external code, remote services if accessing
the OS services, or disable them at the first instance in case of
serious threats, or notify the user. By defining access control policies
we can restrict the extensions that try to access the OS level

2.) An Application which uses system commands and classes which manages the OS services, access rights, registries, roles based on the users.[¶](#2-An-Application-which-uses-system-commands-and-classes-which-manages-the-OS-services-access-rights-registries-roles-based-on-the-users)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Since in webinos the Privileged APIs are not provided to the Application
developers. An Application developer has to use the Normal APIs for
developing the applications which does not access critical data. But,
JavaScript APIs for browsers, Extensions, Android classes can be used to
access the critical data. So the these applications have to be signed
with a certificate and stored in the certificate stores in the registry
of the webinos device.

some references of Privileged APIs, ideas from the source:
<http://msdn.microsoft.com/en-us/library/aa455835.aspx>

Application Specification in webinos, whether it is Privileged or Not?[¶](#Application-Specification-in-webinos-whether-it-is-Privileged-or-Not)
------------------------------------------------------------------------------------------------------------------------------------------------

Application execution is based on permissions. Privileged and normal
permissions distinguish what applications can do when they run.
Applications running at the privileged level have the highest
permissions. They can call any API, write to all areas of the registry
(including protected areas), and have full access to system files.
Applications running privileged can also install certificates on the
device. Privileged applications can switch to run kernel mode. Few
applications need to run as privileged. In fact, allowing them to run
privileged allows them to change the operating system environment, and
can threaten the integrity of the device.

Applications running normal cannot access protected registry keys and
system APIs. Untrusted and unprivileged applications are not normal
applications, Most applications run normal. They cannot call trusted
APIs, write to protected areas of the registry, write to system files or
install certificates to protected stores. They can install a certificate
to the Certificate store. Applications do not run if blocked because
they are not allowed to execute. An application could be blocked because
it is not signed by an appropriate certificate, because the user blocks
it after being prompted, and so forth.

Certificate Signing for webinos devices:[¶](#Certificate-Signing-for-webinos-devices)
-------------------------------------------------------------------------------------

OEMs, mobile operators, and application developers use certificates to
sign applications and files that run on a Mobile. Certificates are
contained in certificate stores in the registry of the device.
Privileged Execution Trust Authorities Contains trusted certificates.
Applications signed with a certificate from this store will run with
privileged trust level (Trusted). Unprivileged Execution Trust
Authorities contains normal Certificates. Revocation seems to be a
useful concept for webinos that allows a Mobile Operator or device owner
to block a specific application or group of applications. The device
prevents the execution of the matching binaries. A code signing
certificate or a Certificate Authority (CA) certificate can be blocked
by revoking the corresponding certificate. This way, a specific
application developer or a whole class of applications can be blocked.
An individual executable can be blocked by revoking the hash of the
binary.

Certificate Signature for webinos Application:[¶](#Certificate-Signature-for-webinos-Application)
-------------------------------------------------------------------------------------------------

If an application needs to be run as Privileged on a webinos device,
then the application needs to be signed with a Privilege Certificate. By
signing with a privileged certificate the application can call any API,
and there are essentially no security restrictions on what the
application can do and access. When a privileged application is released
it should be ensured that the application is signed with a certificate
that is in the privileged store of the webinos device. On the webinos
devices the Application Developer should ask the OEM or mobile operator
to sign the application.\
For a Normal application there is no need to sign by the OEM or the
mobile operator and the applications are allowed to run since there is
no need for a privileged certificate that has to be signed.

XACML Policy Examples in Privilege Apps and Services:[¶](#XACML-Policy-Examples-in-Privilege-Apps-and-Services)
---------------------------------------------------------------------------------------------------------------

XACML Policy examples addressed in Privilege Apps and Services are:

• Access to resources/Installation controlled by the manufacturer (that
provides the policy) and then by the user\
• Control an application access to APIs (of an extension or not)\
• Policies for an Application Installer, A process viewer and Policy
management application\
• Merge two Processes\
• HasPrivilegesOfRole Policies and Requests\
• Policies based on Subject and Resource attributes

Please find the examples under this link:\
</wp3-1/wiki/Privileged_Applications>

**Policies based on Subjects and Resources**:

If an authorization decision is required to base on some characteristic
of the subject other than its identity. Then, the most common
application is the subject’s role RBAC (Role Based Access Control).
XACML provides facilities to support this approach. The corresponding
policy must also contain a reference to the subject identified in the
information resource itself.

Attributes of subjects may be identified by the
\<SubjectAttributeDesignator\> element. This element contains a URN that
identifies the attribute. The \<AttributeSelector\> element may contain
an XPath expression over the request context to identify a particular
subject attribute value by its location in the context.

Conceptual components[¶](#Conceptual-components)
------------------------------------------------

Link to the Sequence Diagram in the Draft:
</wp3-1/wiki/Policy_Management_Draft_Deliverable_Structure>\
section: Sequence Diagram Analysis

• Security Policy, Privilege Monitor and Privilege manager:

Security Policy: A collection of access control constraints, abstractly
representable as a policy-set, as defined in the security policy model
in this specification, that describes the circumstances under which Web
Applications are permitted to access Features and underlying Device
Capabilities.

Privilege Monitor and Privilege Manager will log privileged application
activity that would fail under a standard user account. For an
application to log activity you must enable Privilege Monitoring in the
Application Privileges or Shell Integration sections of the policy, when
you insert an application group.

• Access to resources:

Access to Resources based on the security policies and access controls
these resources may be a package, attribute, data related to physical
entities like (CD player, Camera, Engine), Configuration specification,
containing the various files and digital signatures.

• The GUI interfaces for the Privilege Apps and Services are:
Application Installation, Package and Launcher

The Application Installation verifies the digital signature of the
application packages and allows or disallows the installation of an
application based on the packages selected. Launcher verifies that an
application loads the required files. The Packages consists of data
pertaining to the resources, extensions, Manifests and so on.

• Certificate Store:

A certificate store will often have numerous certificates, possibly
issued from a number of a different certification authorities. It
consists of key pairs that encrypt and decrypt the symmetric key used
for encrypting and decrypting data by Encrypting File System, digital
certificates and so on.

Protocols[¶](#Protocols)
------------------------

**Device Management**:

webinos shall provide Device management for updating of the software
that resides on the system or of the system configuration itself.

Supported Device Management scenarios include:

-   Installing application software, a complete image, or critical
    patches and fixes
-   Uninstalling or reinstalling application software
-   Activating or deactivating installed applications
-   Adjusting the user’s configuration

The protocols for the following device management capabilities are:

• Configuration management: These Protocols focuses on establishing and
maintaining consistency of a device's performance and its functional and
physical attributes with its requirements, design, and operational
information throughout the process.\
• Software and hardware management: Its purpose is to provide a standard
interface to configure and operate. It looks for versioning, building,
packaging, configuring and installing.\
• Notification (alert): Represents how a persistent notification is to
be presented to the user using the NotificationManager.\
• Logging: Log if there are any errors, log records to a variety of
destinations such as log files or the console.\
• Remote Monitoring and Remote Diagnostics: Monitor and anaylse the
protocols set on the device and check for network connections remotely.
Identify the faults and errors in the network and diagnose.

**Privacy Certificate Authority Protocols**

• Token Formats:

Security token is a representation of a collection of any claims, so
what to be defined here are the definitions of token formats for this
Privacy-CA protocol. The two token formats are as follows:\
1)Identity Certificate request Token: This token shall be placed in
Identity Credential Request element when Requesting a identity
certificate.\
2)Identity certificate response Token: This token shall be an encrypted
and encoded identity certificate. It is returned from the Privacy CA (A
trusted third party that issues platform identities) to the platform.

• Remote Data Binding Protocol:

The Remote Data Binding Protocol ensures that the tickets are encrypted
by a key that is known only to the ticket issuer, thus event the device
owner cannot access the tickets data.

For Further information on the Protocol specification see in the link:
<http://xml.coverpages.org/TMP-ProtocolV10.pdf>

Security and privacy issues[¶](#Security-and-privacy-issues)
------------------------------------------------------------

• How policies are structured in applications and Decision making\
• Policies related to trusted and untrusted domains\
• Remote Data Binding

Security and privacy issues addressed in Deliverable 3.5

Related Technologies:[¶](#Related-Technologies)
-----------------------------------------------

[Analysis - JavaScript, BONDI and
Android](/redmine/projects/wp3-3/wiki/Analysis_-_JavaScript_BONDI_and_Android)

Formal Specification[¶](#Formal-Specification)
----------------------------------------------

Below are depicted three use cases to show the workflow for:

1.  requests come from an applications inside the device
2.  requests come from outside the Device
3.  requests come from outside the Device, and no Personal Hub is
    reachable (or it is not contacted for resource usage optimization)

### Distributed architecture, Case 1: requests come from an application inside the device[¶](#Distributed-architecture-Case-1-requests-come-from-an-application-inside-the-device)

![ digraph "Local scenario" { subgraph cluster\_legend { label =
"Legend"; color = black; node [shape=box, style="filled, rounded"];
"Starting\\npoint" [fillcolor="\#FFAAAA"]; "Uncertain\\nnode"
[fillcolor=lightyellow]; } subgraph cluster\_pzd { label = "Personal
Zone Device"; color = "\#BBEEFF"; style = filled; subgraph
cluster\_enhanced { label = "Privacy enhanced XACML architecture" color
= "\#99CCFF"; style = filled; // Nodes node [shape=box,
fillcolor=lightgray, style="filled, rounded"]; 7
[label="DHDF\\nEngine"]; 8 [label="Access Manager"]; {rank = same; 7;8}
// Arcs 7 -\> 8 [label="a,d",dir=both]; subgraph cluster\_xacml\_engine
{ label = "XACML engine" color = "\#7799FF"; style = filled; // Nodes
node [shape=box, fillcolor=lightgray, style="filled, rounded"]; 9
[label="PEP"]; 10 [label="Obligations"]; 11 [label="Context Handler"];
12 [label="PDP"]; 14 [label="PIP"]; {rank = same; 9;10} {rank = same;
11;12} // Arcs 9 -\> 10 [label="15"]; 9 -\> 11 [label="5,14",dir=both];
11 -\> 12 [label="6,7\\n12,13",dir=both]; 11 -\> 14
[label="8,11",dir=both]; } } // Nodes node [shape=box,
fillcolor=lightgray, style="filled, rounded"]; 2 [label="Access
Requestor",fillcolor="\#FFAAAA"]; 6 [label="Decision
Wrapper",fillcolor=lightyellow]; 15 [label="Personal\\nZone Proxy"]; 16
[label="Data Reader"]; 17 [label="Request\\nContext"]; {rank = max; 15}
// Arcs 2 -\> 15 [label="1"]; 6 -\> 8 [label="3,17",dir=both]; 8 -\> 9
[label="4,16",dir=both]; 14 -\> 16 [label="9,10" dir=both]; 7 -\> 16
[label="b,c",dir=both,minlen=4]; 16 -\> 17 [dir=both]; 15 -\> 12
[label="0"]; 6 -\> 15 [label="2,18",dir=both,constraint=false]; 17 -\>
15 [dir=both]; } subgraph cluster\_pzhd { label = "Personal Zone\\nHub
Device"; color = "\#BBEEFF"; style = filled; // Nodes node [shape=box,
fillcolor=lightgray, style="filled, rounded"]; h15
[label="Personal\\nZone Hub"]; } // Arcs 15 -\> h15 [dir=both]; }
](/redmine/wiki_external_filter/filter?index=0&macro=graphviz&name=667605d020c3cd902d14ae6ea2d37e0a130bad03edb218f0d24efc8cd665772a)
![ digraph "Local scenario" { subgraph cluster\_legend { label =
"Legend"; color = black; node [shape=box, style="filled, rounded"];
"Starting\\npoint" [fillcolor="\#FFAAAA"]; "Uncertain\\nnode"
[fillcolor=lightyellow]; } subgraph cluster\_pzd { label = "Personal
Zone Device"; color = "\#BBEEFF"; style = filled; subgraph
cluster\_enhanced { label = "Privacy enhanced XACML architecture" color
= "\#99CCFF"; style = filled; // Nodes node [shape=box,
fillcolor=lightgray, style="filled, rounded"]; 7
[label="DHDF\\nEngine"]; 8 [label="Access Manager"]; {rank = same; 7;8}
// Arcs 7 -\> 8 [label="a,d",dir=both]; subgraph cluster\_xacml\_engine
{ label = "XACML engine" color = "\#7799FF"; style = filled; // Nodes
node [shape=box, fillcolor=lightgray, style="filled, rounded"]; 9
[label="PEP"]; 10 [label="Obligations"]; 11 [label="Context Handler"];
12 [label="PDP"]; 14 [label="PIP"]; {rank = same; 9;10} {rank = same;
11;12} // Arcs 9 -\> 10 [label="15"]; 9 -\> 11 [label="5,14",dir=both];
11 -\> 12 [label="6,7\\n12,13",dir=both]; 11 -\> 14
[label="8,11",dir=both]; } } // Nodes node [shape=box,
fillcolor=lightgray, style="filled, rounded"]; 2 [label="Access
Requestor",fillcolor="\#FFAAAA"]; 6 [label="Decision
Wrapper",fillcolor=lightyellow]; 15 [label="Personal\\nZone Proxy"]; 16
[label="Data Reader"]; 17 [label="Request\\nContext"]; {rank = max; 15}
// Arcs 2 -\> 15 [label="1"]; 6 -\> 8 [label="3,17",dir=both]; 8 -\> 9
[label="4,16",dir=both]; 14 -\> 16 [label="9,10" dir=both]; 7 -\> 16
[label="b,c",dir=both,minlen=4]; 16 -\> 17 [dir=both]; 15 -\> 12
[label="0"]; 6 -\> 15 [label="2,18",dir=both,constraint=false]; 17 -\>
15 [dir=both]; } subgraph cluster\_pzhd { label = "Personal Zone\\nHub
Device"; color = "\#BBEEFF"; style = filled; // Nodes node [shape=box,
fillcolor=lightgray, style="filled, rounded"]; h15
[label="Personal\\nZone Hub"]; } // Arcs 15 -\> h15 [dir=both]; }
](/redmine/wiki_external_filter/filter?index=1&macro=graphviz&name=667605d020c3cd902d14ae6ea2d37e0a130bad03edb218f0d24efc8cd665772a)

### Flow description[¶](#Flow-description)

0\. PZP update policies and make them available to the PDP\
1. The access requestor sends an access request to the PZP\
2. The PZP sends the request for access to the decision wrapper\
3. The decision wrapper forwards the request towards the access manager,
together with the possible relevant\
data handling policies attached to the requested resources

*XACML engine branch* {\
 4. The access manager forwards the request to the PEP\
 5. The PEP forwards the request to the context handler\
 6. The context handler constructs an XACML request and sends it to the
PDP\
 7. The PDP requests any additional attributes from the context
handler.\
 8. The context handler requests the attributes from a PIP\
 9. The PIP asks the data reader for requested attributes\
 10. The PIP obtains the requested attributes\
 11. The PIP returns the requested attributes to the context handler\
 12. The context handler sends the requested attributes to the PDP which
evaluates the policy\
 13. The PDP returns the authorization decision to the context handler\
 14. The context handler translates the response to the native response
format of the PEP and returns\
 the response to the PEP\
 15. The PEP fulfils the obligations\
 16. The PEP returns the access decision to the access manager\
}

*Privacy enhanced branch* {\
 a. The access manager forwards the request and the Data Handling
Policies to the DHDF engine\
 b. The DHDF engine asks the data reader for evaluation information\
 c. The DHDF engine obtains information needed for evaluation\
 d. The DFDH engine evaluated DH policies and returns the decision to
the access manager\
}

17\. The access manager combines the XACML access control decision and
the DHDF data handling decision,\
 then it sends the result to the decision wrapper.\
18. The decision wrapper forwards the result to the PZP which enforces
it.

### Distributed architecture, Case 2: requests come from outside the Device[¶](#Distributed-architecture-Case-2-requests-come-from-outside-the-Device)

![ digraph "Hub remote scenario" { subgraph cluster\_legend { label =
"Legend"; color = black; node [shape=box, style="filled, rounded"];
"Starting\\npoint" [fillcolor="\#FFAAAA"]; "Uncertain\\nnode"
[fillcolor=lightyellow]; } // Nodes 1
[label="Remote\\nAccess\\nRequestor", shape=box, fillcolor="\#FFAAAA",
style="filled"]; 4 [label="Overlay Network",shape=ellipse]; subgraph
cluster\_pzd { label = "Personal Zone Device"; color = "\#BBEEFF"; style
= filled; // Nodes node [shape=box, fillcolor=lightgray, style="filled,
rounded"]; 15 [label="Personal\\nZone Proxy"]; } subgraph cluster\_pzhd
{ label = "Personal Zone Hub Device"; color = "\#BBEEFF"; style =
filled; subgraph cluster\_enhanced { label = "Privacy enhanced XACML
architecture" color = "\#99CCFF"; style = filled; // Nodes node
[shape=box, fillcolor=lightgray, style="filled, rounded"]; h7
[label="DHDF\\nEngine"]; h8 [label="Access Manager"]; {rank = same;
h7;h8} // Arcs h8 -\> h7 [label="a,d",dir=both]; subgraph
cluster\_xacml\_engine { label = "XACML engine" color = "\#7799FF";
style = filled; // Nodes node [shape=box, fillcolor=lightgray,
style="filled, rounded"]; h9 [label="PEP"]; h10 [label="Obligations"];
h11 [label="Context Handler"]; h12 [label="PDP"]; h13 [label="PDPC"];
h14 [label="PIP"]; h19 [label="PAP"]; {rank = same; h9;h10} {rank =
same; h11;h12} // Arcs h9 -\> h10 [label="15"]; h9 -\> h11
[label="5,14",dir=both]; h11 -\> h12 [label="6,7\\n12,13",dir=both];
h11 -\> h14 [label="8,11",dir=both]; h12 -\> h13; h12 -\> h19
[label="0",dir=back]; } } // Nodes node [shape=box, fillcolor=lightgray,
style="filled, rounded"]; h6 [label="Decision
Wrapper",fillcolor=lightyellow]; h15 [label="Personal\\nZone Hub"]; h16
[label="Data Reader"]; h17 [label="Request\\nContext"]; {rank = max;
h15} // Arcs h6 -\> h8 [label="3,17",dir=both]; h8 -\> h9
[label="4,16",dir=both]; h13 -\> h15 [dir=both]; h19 -\> h15 [dir=both];
h14 -\> h16 [label="9,10",dir=both]; h7 -\> h16 [label="b,c",dir=both];
h16 -\> h17 [dir=both]; h17 -\> h15 [dir=both]; h15 -\> h6
[label="2,18",dir=both,constraint=false]; } // Arcs 1 -\> 4; 4 -\> h15
[label="1"]; h15 -\> 15 [label="19"]; }
](/redmine/wiki_external_filter/filter?index=0&macro=graphviz&name=fd74f072f93834631a82ff6dcf64dc1499514e79b9ae2d5505ed3917ab1c34d9)
![ digraph "Hub remote scenario" { subgraph cluster\_legend { label =
"Legend"; color = black; node [shape=box, style="filled, rounded"];
"Starting\\npoint" [fillcolor="\#FFAAAA"]; "Uncertain\\nnode"
[fillcolor=lightyellow]; } // Nodes 1
[label="Remote\\nAccess\\nRequestor", shape=box, fillcolor="\#FFAAAA",
style="filled"]; 4 [label="Overlay Network",shape=ellipse]; subgraph
cluster\_pzd { label = "Personal Zone Device"; color = "\#BBEEFF"; style
= filled; // Nodes node [shape=box, fillcolor=lightgray, style="filled,
rounded"]; 15 [label="Personal\\nZone Proxy"]; } subgraph cluster\_pzhd
{ label = "Personal Zone Hub Device"; color = "\#BBEEFF"; style =
filled; subgraph cluster\_enhanced { label = "Privacy enhanced XACML
architecture" color = "\#99CCFF"; style = filled; // Nodes node
[shape=box, fillcolor=lightgray, style="filled, rounded"]; h7
[label="DHDF\\nEngine"]; h8 [label="Access Manager"]; {rank = same;
h7;h8} // Arcs h8 -\> h7 [label="a,d",dir=both]; subgraph
cluster\_xacml\_engine { label = "XACML engine" color = "\#7799FF";
style = filled; // Nodes node [shape=box, fillcolor=lightgray,
style="filled, rounded"]; h9 [label="PEP"]; h10 [label="Obligations"];
h11 [label="Context Handler"]; h12 [label="PDP"]; h13 [label="PDPC"];
h14 [label="PIP"]; h19 [label="PAP"]; {rank = same; h9;h10} {rank =
same; h11;h12} // Arcs h9 -\> h10 [label="15"]; h9 -\> h11
[label="5,14",dir=both]; h11 -\> h12 [label="6,7\\n12,13",dir=both];
h11 -\> h14 [label="8,11",dir=both]; h12 -\> h13; h12 -\> h19
[label="0",dir=back]; } } // Nodes node [shape=box, fillcolor=lightgray,
style="filled, rounded"]; h6 [label="Decision
Wrapper",fillcolor=lightyellow]; h15 [label="Personal\\nZone Hub"]; h16
[label="Data Reader"]; h17 [label="Request\\nContext"]; {rank = max;
h15} // Arcs h6 -\> h8 [label="3,17",dir=both]; h8 -\> h9
[label="4,16",dir=both]; h13 -\> h15 [dir=both]; h19 -\> h15 [dir=both];
h14 -\> h16 [label="9,10",dir=both]; h7 -\> h16 [label="b,c",dir=both];
h16 -\> h17 [dir=both]; h17 -\> h15 [dir=both]; h15 -\> h6
[label="2,18",dir=both,constraint=false]; } // Arcs 1 -\> 4; 4 -\> h15
[label="1"]; h15 -\> 15 [label="19"]; }
](/redmine/wiki_external_filter/filter?index=1&macro=graphviz&name=fd74f072f93834631a82ff6dcf64dc1499514e79b9ae2d5505ed3917ab1c34d9)

### Flow description[¶](#Flow-description)

0\. PAP update policies and make them available to the PDP\
1. The remote access requestor sends an access request to the PZH across
the overlay network\
2. The PZH sends the request for access to the decision wrapper\
3. The decision wrapper forwards the request towards the access manager,
together with the possible relevant\
data handling policies attached to the requested resources

*XACML engine branch* {\
 4. The access manager forwards the request to the PEP\
 5. The PEP forwards the request to the context handler\
 6. The context handler constructs an XACML request and sends it to the
PDP\
 7. The PDP requests any additional attributes from the context
handler.\
 8. The context handler requests the attributes from a PIP\
 9. The PIP asks the data reader for requested attributes\
 10. The PIP obtains the requested attributes\
 11. The PIP returns the requested attributes to the context handler\
 12. The context handler sends the requested attributes to the PDP which
evaluates the policy\
 13. The PDP returns the authorization decision to the context handler\
 14. The context handler translates the response to the native response
format of the PEP and returns\
 the response to the PEP\
 15. The PEP fulfils the obligations\
 16. The PEP returns the access decision to the access manager\
}

*Privacy enhanced branch* {\
 a. The access manager forwards the request and the Data Handling
Policies to the DHDF engine\
 b. The DHDF engine asks the data reader for evaluation information\
 c. The DHDF engine obtains information needed for evaluation\
 d. The DFDH engine evaluated DH policies and returns the decision to
the access manager\
}

17\. The access manager combines the XACML access control decision and
the DHDF data handling decision,\
 then it sends the result to the decision wrapper.\
18. The decision wrapper forwards the result to the PZH\
19. The PZH forwards the result to the PZP which enforces it.

### Distributed architecture, Case 3: requests come from outside the Device, and no Personal Hub is reachable (or it is not contacted for resource usage optimization)[¶](#Distributed-architecture-Case-3-requests-come-from-outside-the-Device-and-no-Personal-Hub-is-reachable-or-it-is-not-contacted-for-resource-usage-optimization)

![ digraph "Proxy remote scenario" { subgraph cluster\_legend { label =
"Legend"; color = black; node [shape=box, style="filled, rounded"];
"Starting\\npoint" [fillcolor="\#FFAAAA"]; "Uncertain\\nnode"
[fillcolor=lightyellow]; } // Nodes 1
[label="Remote\\nAccess\\nRequestor", shape=box, fillcolor="\#FFAAAA",
style="filled"]; 4 [label="Overlay Network",shape=ellipse]; subgraph
cluster\_pzd { label = "Personal Zone Device"; color = "\#BBEEFF"; style
= filled; subgraph cluster\_enhanced { label = "Privacy enhanced XACML
architecture" color = "\#99CCFF"; style = filled; // Nodes node
[shape=box, fillcolor=lightgray, style="filled, rounded"]; 7
[label="DHDF\\nEngine"]; 8 [label="Access Manager"]; {rank = same; 7;8}
// Arcs 8 -\> 7 [label="a,d",dir=both]; subgraph cluster\_xacml\_engine
{ label = "XACML engine" color = "\#7799FF"; style = filled; // Nodes
node [shape=box, fillcolor=lightgray, style="filled, rounded"]; 9
[label="PEP"]; 10 [label="Obligations"]; 11 [label="Context Handler"];
12 [label="PDP"]; 14 [label="PIP"]; {rank = same; 9;10} {rank = same;
11;12} // Arcs 9 -\> 10 [label="15"]; 9 -\> 11 [label="5,14",dir=both];
11 -\> 14 [label="8,11",dir=both]; 11 -\> 12
[label="6,7\\n12,13",dir=both]; } } // Nodes node [shape=box,
fillcolor=lightgray, style="filled, rounded"]; 6 [label="Decision
Wrapper",fillcolor=lightyellow]; 15 [label="Personal\\nZone Proxy"]; 16
[label="Data Reader"]; 17 [label="Request\\nContext"]; {rank = max; 15}
// Arcs 6 -\> 8 [label="3,17"]; 8 -\> 9 [label="4,16",dir=both]; 14 -\>
16 [label="9,10" dir=both]; 7 -\> 16 [label="b,c",dir=both,minlen=4];
16 -\> 17 [dir=both]; 17 -\> 15 [dir=both]; 15 -\> 12 [label="0"];
15 -\> 6 [label="2,18",dir=both,minlen=6]; } // Arcs 1 -\> 4; 4 -\> 15
[label="1"]; }
](/redmine/wiki_external_filter/filter?index=0&macro=graphviz&name=a22f54be77fa8cdd3981513078b2bdd2faa7fb2888d2b360b049278f2b535d3a)
![ digraph "Proxy remote scenario" { subgraph cluster\_legend { label =
"Legend"; color = black; node [shape=box, style="filled, rounded"];
"Starting\\npoint" [fillcolor="\#FFAAAA"]; "Uncertain\\nnode"
[fillcolor=lightyellow]; } // Nodes 1
[label="Remote\\nAccess\\nRequestor", shape=box, fillcolor="\#FFAAAA",
style="filled"]; 4 [label="Overlay Network",shape=ellipse]; subgraph
cluster\_pzd { label = "Personal Zone Device"; color = "\#BBEEFF"; style
= filled; subgraph cluster\_enhanced { label = "Privacy enhanced XACML
architecture" color = "\#99CCFF"; style = filled; // Nodes node
[shape=box, fillcolor=lightgray, style="filled, rounded"]; 7
[label="DHDF\\nEngine"]; 8 [label="Access Manager"]; {rank = same; 7;8}
// Arcs 8 -\> 7 [label="a,d",dir=both]; subgraph cluster\_xacml\_engine
{ label = "XACML engine" color = "\#7799FF"; style = filled; // Nodes
node [shape=box, fillcolor=lightgray, style="filled, rounded"]; 9
[label="PEP"]; 10 [label="Obligations"]; 11 [label="Context Handler"];
12 [label="PDP"]; 14 [label="PIP"]; {rank = same; 9;10} {rank = same;
11;12} // Arcs 9 -\> 10 [label="15"]; 9 -\> 11 [label="5,14",dir=both];
11 -\> 14 [label="8,11",dir=both]; 11 -\> 12
[label="6,7\\n12,13",dir=both]; } } // Nodes node [shape=box,
fillcolor=lightgray, style="filled, rounded"]; 6 [label="Decision
Wrapper",fillcolor=lightyellow]; 15 [label="Personal\\nZone Proxy"]; 16
[label="Data Reader"]; 17 [label="Request\\nContext"]; {rank = max; 15}
// Arcs 6 -\> 8 [label="3,17"]; 8 -\> 9 [label="4,16",dir=both]; 14 -\>
16 [label="9,10" dir=both]; 7 -\> 16 [label="b,c",dir=both,minlen=4];
16 -\> 17 [dir=both]; 17 -\> 15 [dir=both]; 15 -\> 12 [label="0"];
15 -\> 6 [label="2,18",dir=both,minlen=6]; } // Arcs 1 -\> 4; 4 -\> 15
[label="1"]; }
](/redmine/wiki_external_filter/filter?index=1&macro=graphviz&name=a22f54be77fa8cdd3981513078b2bdd2faa7fb2888d2b360b049278f2b535d3a)

### Flow description[¶](#Flow-description)

0\. PZP update policies and make them available to the PDP\
1. The remote access requestor sends an access request to the PZP across
the overlay network\
2. The PZP sends the request for access to the decision wrapper\
3. The decision wrapper forwards the request towards the access manager,
together with the possible relevant\
data handling policies attached to the requested resources

*XACML engine branch* {\
 4. The access manager forwards the request to the PEP\
 5. The PEP forwards the request to the context handler\
 6. The context handler constructs an XACML request and sends it to the
PDP\
 7. The PDP requests any additional attributes from the context
handler.\
 8. The context handler requests the attributes from a PIP\
 9. The PIP asks the data reader for requested attributes\
 10. The PIP obtains the requested attributes\
 11. The PIP returns the requested attributes to the context handler\
 12. The context handler sends the requested attributes to the PDP which
evaluates the policy\
 13. The PDP returns the authorization decision to the context handler\
 14. The context handler translates the response to the native response
format of the PEP and returns\
 the response to the PEP\
 15. The PEP fulfils the obligations\
 16. The PEP returns the access decision to the access manager\
}

*Privacy enhanced branch* {\
 a. The access manager forwards the request and the Data Handling
Policies to the DHDF engine\
 b. The DHDF engine asks the data reader for evaluation information\
 c. The DHDF engine obtains information needed for evaluation\
 d. The DFDH engine evaluated DH policies and returns the decision to
the access manager\
}

17\. The access manager combines the XACML access control decision and
the DHDF data handling decision,\
 then it sends the result to the decision wrapper.\
18. The decision wrapper forwards the result to the PZP which enforces
it.

### Functional and non functional requirements[¶](#Functional-and-non-functional-requirements)

Security requirements selected from "D2.2 Requirements and Developer
Experience Analysis" deliverable ([D022](D022.html))

[ID-USR-Oxford-20](/wp2-2/wiki/DeliverableVersionAll#ID-USR-Oxford-20)\
[ID-DWP-POLITO-101](/wp2-2/wiki/DeliverableVersionAll#ID-DWP-POLITO-101)\
[ID-DEV-POLITO-004](/wp2-2/wiki/DeliverableVersionAll#ID-DEV-POLITO-004)\
[ID-DEV-POLITO-017](/wp2-2/wiki/DeliverableVersionAll#ID-DEV-POLITO-017)\
[ID-DEV-POLITO-018](/wp2-2/wiki/DeliverableVersionAll#ID-DEV-POLITO-018)\
[ID-USR-DT-02](/wp2-2/wiki/DeliverableVersionAll#ID-USR-DT-02)\
[ID-USR-POLITO-010](/wp2-2/wiki/DeliverableVersionAll#ID-USR-POLITO-010)\
[ID-USR-POLITO-011](/wp2-2/wiki/DeliverableVersionAll#ID-USR-POLITO-011)\
[ID-USR-POLITO-013](/wp2-2/wiki/DeliverableVersionAll#ID-USR-POLITO-013)\
[ID-DWP-POLITO-014](/wp2-2/wiki/DeliverableVersionAll#ID-DWP-POLITO-014)\
[DA-DEV-ISMB-004](/wp2-2/wiki/DeliverableVersionAll#DA-DEV-ISMB-004)\
[PS-USR-Oxford-103](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-103)\
[PS-USR-Oxford-104](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-104)\
[PS-USR-Oxford-16](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-16)\
[PS-USR-Oxford-17](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-17)\
[PS-USR-Oxford-41](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-41)\
[PS-DMA-IBBT-003](/wp2-2/wiki/DeliverableVersionAll#PS-DMA-IBBT-003)\
[PS-USR-POLITO-012](/wp2-2/wiki/DeliverableVersionAll#PS-USR-POLITO-012)\
[PS-USR-Oxford-67](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-67)\
[PS-USR-TSI-13](/wp2-2/wiki/DeliverableVersionAll#PS-USR-TSI-13)\
[PS-DEV-Oxford-28](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-28)\
[PS-USR-Oxford-30](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-30)\
[PS-USR-Oxford-54](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-54)\
[PS-USR-Oxford-55](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-55)\
[PS-DEV-Oxford-87](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-87)\
[PS-USR-ambiesense-32](/wp2-2/wiki/DeliverableVersionAll#PS-USR-ambiesense-32)\
[PS-USR-VisionMobile-10](/wp2-2/wiki/DeliverableVersionAll#PS-USR-VisionMobile-10)\
[PS-DEV-VisionMobile-11](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-VisionMobile-11)\
[PS-DWP-VisionMobile-12](/wp2-2/wiki/DeliverableVersionAll#PS-DWP-VisionMobile-12)\
[PS-DEV-ambiesense-14](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-14)\
[PS-DEV-ambiesense-15](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-15)\
[PS-USR-Oxford-113](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-113)\
[PS-USR-Oxford-35](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-35)\
[PS-USR-Oxford-37](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-37)\
[PS-USR-Oxford-38](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-38)\
[PS-USR-Oxford-40](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-40)\
[PS-USR-Oxford-49](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-49)\
[PS-USR-Oxford-50](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-50)\
[PS-USR-Oxford-52](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-52)\
[PS-USR-Oxford-53](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-53)\
[PS-DWP-POLITO-003](/wp2-2/wiki/DeliverableVersionAll#PS-DWP-POLITO-003)\
[PS-USR-Oxford-58](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-58)\
[PS-USR-Oxford-75](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-75)\
[PS-USR-Oxford-80](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-80)\
[PS-USR-Oxford-84](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-84)\
[PS-DEV-IBBT-004](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-IBBT-004)\
[PS-USR-Oxford-114](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-114)\
[PS-USR-Oxford-42](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-42)\
[PS-USR-Oxford-43](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-43)\
[PS-DMA-DEV-Oxford-47](/wp2-2/wiki/DeliverableVersionAll#PS-DMA-DEV-Oxford-47)\
[PS-USR-Oxford-48](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-48)\
[PS-DEV-Oxford-56](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-56)\
[PS-ALL-Oxford-61](/wp2-2/wiki/DeliverableVersionAll#PS-ALL-Oxford-61)\
[PS-USR-Oxford-73](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-73)\
[PS-DEV-Oxford-79](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-79)\
[PS-USR-Oxford-81](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-81)\
[PS-USR-Oxford-82](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-82)\
[PS-USR-Oxford-83](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-83)\
[PS-USR-ISMB-036](/wp2-2/wiki/DeliverableVersionAll#PS-USR-ISMB-036)\
[PS-DEV-ambiesense-25](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-25)\
[PS-USR-DEV-Oxford-44](/wp2-2/wiki/DeliverableVersionAll#PS-USR-DEV-Oxford-44)\
[PS-USR-DEV-Oxford-45](/wp2-2/wiki/DeliverableVersionAll#PS-USR-DEV-Oxford-45)\
[PS-USR-DEV-Oxford-46](/wp2-2/wiki/DeliverableVersionAll#PS-USR-DEV-Oxford-46)\
[PS-USR-Oxford-57](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-57)\
[PS-DEV-Oxford-64](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-64)\
[PS-USR-Oxford-69](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-69)\
[PS-USR-Oxford-72](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-72)\
[PS-DEV-Oxford-88](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-88)\
[PS-DEV-Oxford-89](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-Oxford-89)\
[PS-USR-Oxford-102](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-102)\
[PS-USR-Oxford-123](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-123)\
[PS-DEV-ambiesense-21](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-21)\
[PS-USR-Oxford-116](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-116)\
[PS-USR-Oxford-34](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-34)\
[PS-USR-Oxford-59](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-59)\
[PS-USR-TSI-3](/wp2-2/wiki/DeliverableVersionAll#PS-USR-TSI-3)\
[PS-DWP-ISMB-202](/wp2-2/wiki/DeliverableVersionAll#PS-DWP-ISMB-202)\
[PS-USR-Oxford-120](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-120)\
[NC-DEV-IBBT-009](/wp2-2/wiki/DeliverableVersionAll#NC-DEV-IBBT-009)\
[NC-DWP-IBBT-0010](/wp2-2/wiki/DeliverableVersionAll#NC-DWP-IBBT-0010)\
[NC-DEV-IBBT-0015](/wp2-2/wiki/DeliverableVersionAll#NC-DEV-IBBT-0015)\
[LC-DEV-ISMB-003](/wp2-2/wiki/DeliverableVersionAll#LC-DEV-ISMB-003)\
[LC-DEV-ISMB-006](/wp2-2/wiki/DeliverableVersionAll#LC-DEV-ISMB-006)\
[LC-USR-ISMB-039](/wp2-2/wiki/DeliverableVersionAll#LC-USR-ISMB-039)\
[CAP-DEV-SEMC-001](/wp2-2/wiki/DeliverableVersionAll#CAP-DEV-SEMC-001)\
[TMS-DWP-POLITO-004](/wp2-2/wiki/DeliverableVersionAll#TMS-DWP-POLITO-004)\
[TMS-DWP-POLITO-005](/wp2-2/wiki/DeliverableVersionAll#TMS-DWP-POLITO-005)\
[TMS-DWP-POLITO-006](/wp2-2/wiki/DeliverableVersionAll#TMS-DWP-POLITO-006)\
[TMS-DWP-VOLANTIS-013](/wp2-2/wiki/DeliverableVersionAll#TMS-DWP-VOLANTIS-013)

References[¶](#References)
--------------------------

### ACSOAS[¶](#ACSOAS)

[Access Control Service Oriented Architecture
Security](http://www1.cse.wustl.edu/~jain/cse571-09/ftp/soa/index.html)

### BONDIA&S[¶](#BONDIA38S)

[BONDI's Architecture and Security
Appendices](http://bondi.omtp.org/1.11/security/BONDI_Architecture_and_Security_Appendices_v1.1.pdf),
January 2010

### D022[¶](#D022)

[D2.2 Requirements & developer experience
analysis](http://webinos.org/content/webinos-Requirements_v1.0.3.pdf),
February 2011

### D035[¶](#D035)

[D3.5: Security Architecture - Webinos Project
Deliverable](/t3-5/wiki/Deliverable_Outline),
June 2011.

### DAPWG[¶](#DAPWG)

[Device APIs and Policy Working Group](http://www.w3.org/2009/dap/)

### OASISXACML[¶](#OASISXACML)

[OASIS eXtensible Access Control Markup Language (XACML)
TC](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=xacml)

### PRIMELIFE[¶](#PRIMELIFE)

[PrimeLife](http://www.primelife.eu/)

### RFC3986[¶](#RFC3986)

[Uniform Resource Identifier (URI): Generic
Syntax](http://www.ietf.org/rfc/rfc3986.txt), January 2005

### SUNXACML[¶](#SUNXACML)

[Sun's XACML Implementation](http://sunxacml.sourceforge.net/guide.html)

### WACCS[¶](#WACCS)

[WAC Core Specification: Widget Security and
Privacy](http://specs.wacapps.net/2.0/jun2011/core/widget-security-privacy.html),
June 2011

### WACDS[¶](#WACDS)

[WAC Device
Specifications](http://specs.wacapps.net/2.0/jun2011/index.html), June
2011

### WACXMLSP[¶](#WACXMLSP)

[WAC: XML definition of Security
Policy](http://specs.wacapps.net/2.0/jun2011/core/wacxml.rnc "RelaxNG")

