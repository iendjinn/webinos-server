Policy Architecture[¶](#Policy-Architecture)
============================================

Where do all components fit together?

Back-link to the [Policy Management main
page](Policy%20Management%20main%20page.html).

Requirements referring to the architecture of Policy Management[¶](#Requirements-referring-to-the-architecture-of-Policy-Management)
====================================================================================================================================

-   [Selection of architectural requirements from D2.2](.html)
-   [Components with architectural requirements and notes](.html)

Notes[¶](#Notes)
----------------

-   It would be nice to integrate Obligation policies from PRIME -
    <http://spdp.dti.unimi.it/papers/wisg09-ADPPS.pdf>
-   Where does context fit in? What about the Policy Information Point?
-   Access Negotiation within XACML Architecture -
    <http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.118.7718&rep=rep1&type=pdf>

Single Device Structure[¶](#Single-Device-Structure)
====================================================

-   Simple XACML-like architecture


<div class="uml">WebinosRuntime o-- DeviceAPIs
WebinosRuntime o-- PEP
WebinosRuntime o-- LocalData
WebinosRuntime o-- Comms
WebinosRuntime o-- Apps

Apps --> PEP

PEP --> LocalData
PEP --> Comms
PEP --> DeviceAPIs

PEP "1" - "1" PDP
PDP "1" - PAP
PAP "1" -- "*" XACMLPolicy</div>

Multi-Device Distributed Structure[¶](#Multi-Device-Distributed-Structure)
==========================================================================

-   Added PDPC, PIP and PAP communication with webinos network (Problem:
    synchronization)

A rough sketch:

![](webinos-diagram-policy.jpg)

Data flow (XACML only)[¶](#Data-flow-XACML-only)
------------------------------------------------

[Architecture
Proposal](http://dev.webinos.org/redmine/attachments/download/428/policy_management__architecture.odp "data-flow")
[TODO: add PrimeLife extension]

![ digraph G { "Remote\\nAccess\\nRequestor\\n(W-Agent)"[shape=box]
"Access Requestor"[shape=box] "Overlay Network"[shape=ellipse] "Webinos
Cloud\\nPDPC - PIP - PAP"[shape=ellipse] node [shape=box,
fillcolor=lightgray, style="filled, rounded"] {rank = same; "Access
Requestor"; "PEP"; "obligations"} {rank = same; "PDP"; "Context
Handler"; "PIP"} {rank = same; "PDPC"; "Resources"; "Subjects";
"Environment"} {rank = same; "PAP"; "W-Agent"; "Webinos Cloud\\nPDPC -
PIP - PAP"} "Remote\\nAccess\\nRequestor\\n(W-Agent)" -\> "Overlay
Network" -\> "W-agent" -\> "PEP" "Access Requestor" -\> "PEP" -\>
"obligations" "PEP" -\> "Context Handler" "PDP" -\> "Context Handler"
[dir=both] "Context Handler" -\> "PIP" "Resources" -\> "Context Handler"
"PDP" -\> "PDPC" "PIP" -\> "Resources" "PIP" -\> "Subjects" "PIP" -\>
"Environment" "PDP" -\> "PAP" [dir=both] "PDPC" -\> "W-Agent" [dir=both]
"PAP" -\> "W-Agent" [dir=both] "PIP" -\> "W-Agent" [dir=both]
"W-Agent" -\> "Webinos Cloud\\nPDPC - PIP - PAP" [dir=both] }
](/redmine/wiki_external_filter/filter?index=0&macro=graphviz&name=94691c90b8831858ca36d07aa3f772b08083e2b52922340ca22692a793bacd03)
![ digraph G { "Remote\\nAccess\\nRequestor\\n(W-Agent)"[shape=box]
"Access Requestor"[shape=box] "Overlay Network"[shape=ellipse] "Webinos
Cloud\\nPDPC - PIP - PAP"[shape=ellipse] node [shape=box,
fillcolor=lightgray, style="filled, rounded"] {rank = same; "Access
Requestor"; "PEP"; "obligations"} {rank = same; "PDP"; "Context
Handler"; "PIP"} {rank = same; "PDPC"; "Resources"; "Subjects";
"Environment"} {rank = same; "PAP"; "W-Agent"; "Webinos Cloud\\nPDPC -
PIP - PAP"} "Remote\\nAccess\\nRequestor\\n(W-Agent)" -\> "Overlay
Network" -\> "W-agent" -\> "PEP" "Access Requestor" -\> "PEP" -\>
"obligations" "PEP" -\> "Context Handler" "PDP" -\> "Context Handler"
[dir=both] "Context Handler" -\> "PIP" "Resources" -\> "Context Handler"
"PDP" -\> "PDPC" "PIP" -\> "Resources" "PIP" -\> "Subjects" "PIP" -\>
"Environment" "PDP" -\> "PAP" [dir=both] "PDPC" -\> "W-Agent" [dir=both]
"PAP" -\> "W-Agent" [dir=both] "PIP" -\> "W-Agent" [dir=both]
"W-Agent" -\> "Webinos Cloud\\nPDPC - PIP - PAP" [dir=both] }
](/redmine/wiki_external_filter/filter?index=1&macro=graphviz&name=94691c90b8831858ca36d07aa3f772b08083e2b52922340ca22692a793bacd03)

Distributed Architecture Based on PrimeLife (XACML+PRIME extensions)[¶](#Distributed-Architecture-Based-on-PrimeLife-XACMLPRIME-extensions)
===========================================================================================================================================

-   Similar to the distribuited XACML-like version proposed above, but
    integrated in a PrimeLife architecture
-   Introduction of DHDF for data-handling policies
-   Introduction of some abstraction components (Decision Wrapper, Data
    Reader)
-   Intrduction of Credential System

Motivations behind this choice:[¶](#Motivations-behind-this-choice)
-------------------------------------------------------------------

-   Negotiation (PIP indentifying missing attributes needed, incremental
    evalutation of access control policies, minimal disclosure)
-   Credential-based restrictions (digital credential and certified
    attributes)
-   Data-handling policies (in addition to the traditional XACML access
    control policies), e.g. privacy policies defined user-side, privacy
    level handling
-   Legislation support (EU privacy directives)
-   Open-source European Project

Data flow (XAMCL extended with PrimeLife)[¶](#Data-flow-XAMCL-extended-with-PrimeLife)
--------------------------------------------------------------------------------------

![ digraph G { "Remote\\nAccess\\nRequestor\\n(W-Agent)"[shape=box]
"Access Requestor"[shape=box] "Credential\\nSystem"[shape=box] "Overlay
Network"[shape=ellipse] "Webinos Cloud\\nPDPC - PIP -
PAP"[shape=ellipse] node [shape=box, fillcolor=lightgray, style="filled,
rounded"] {rank = same; "Access Requestor"; "Decision Wrapper"} {rank =
same; "DHDF\\nEngine"; "Access Manager"} {rank = same; "PEP";
"obligations"} {rank = same; "Context Handler"; "PDP"; "PDPC"} {rank =
same; "PIP"; "W-Agent"; "Webinos Cloud\\nPDPC - PIP - PAP"} {rank =
same; "Data Reader"; "Request\\nContext"; "Credential\\nSystem"}
"Remote\\nAccess\\nRequestor\\n(W-Agent)" -\> "Overlay Network" -\>
"W-agent" -\> "Decision Wrapper" "Access Requestor" -\> "Decision
Wrapper" "Decision Wrapper" -\> "Access Manager" "DHDF\\nEngine" -\>
"Access Manager" [dir=back] "Access Manager" -\> "PEP" -\> "obligations"
"PEP" -\> "Context Handler" "PIP" -\> "Context Handler" [dir=back]
"Context Handler" -\> "PDP" [dir=both] "PDP" -\> "PDPC" "PDP" -\> "PAP"
[dir=both] "PDPC" -\> "W-Agent" [dir=both] "PAP" -\> "W-Agent"
[dir=both] "PIP" -\> "W-Agent" -\> "Webinos Cloud\\nPDPC - PIP - PAP"
[dir=both] "PIP" -\> "Data Reader" "DHDF\\nEngine" -\> "Data Reader"
"Data Reader" -\> "Request\\nContext" "Request\\nContext" -\>
"Credential\\nSystem" [dir=back] }
](/redmine/wiki_external_filter/filter?index=0&macro=graphviz&name=b901af2e24cc36fa7ea15012624e47b24050fd0034fbd56dae3700d987768b20)
![ digraph G { "Remote\\nAccess\\nRequestor\\n(W-Agent)"[shape=box]
"Access Requestor"[shape=box] "Credential\\nSystem"[shape=box] "Overlay
Network"[shape=ellipse] "Webinos Cloud\\nPDPC - PIP -
PAP"[shape=ellipse] node [shape=box, fillcolor=lightgray, style="filled,
rounded"] {rank = same; "Access Requestor"; "Decision Wrapper"} {rank =
same; "DHDF\\nEngine"; "Access Manager"} {rank = same; "PEP";
"obligations"} {rank = same; "Context Handler"; "PDP"; "PDPC"} {rank =
same; "PIP"; "W-Agent"; "Webinos Cloud\\nPDPC - PIP - PAP"} {rank =
same; "Data Reader"; "Request\\nContext"; "Credential\\nSystem"}
"Remote\\nAccess\\nRequestor\\n(W-Agent)" -\> "Overlay Network" -\>
"W-agent" -\> "Decision Wrapper" "Access Requestor" -\> "Decision
Wrapper" "Decision Wrapper" -\> "Access Manager" "DHDF\\nEngine" -\>
"Access Manager" [dir=back] "Access Manager" -\> "PEP" -\> "obligations"
"PEP" -\> "Context Handler" "PIP" -\> "Context Handler" [dir=back]
"Context Handler" -\> "PDP" [dir=both] "PDP" -\> "PDPC" "PDP" -\> "PAP"
[dir=both] "PDPC" -\> "W-Agent" [dir=both] "PAP" -\> "W-Agent"
[dir=both] "PIP" -\> "W-Agent" -\> "Webinos Cloud\\nPDPC - PIP - PAP"
[dir=both] "PIP" -\> "Data Reader" "DHDF\\nEngine" -\> "Data Reader"
"Data Reader" -\> "Request\\nContext" "Request\\nContext" -\>
"Credential\\nSystem" [dir=back] }
](/redmine/wiki_external_filter/filter?index=1&macro=graphviz&name=b901af2e24cc36fa7ea15012624e47b24050fd0034fbd56dae3700d987768b20)

Distributed architecture, proposal of merging based on the current Overlay/authentication architecture (PZP and PZH components). Case 1: requests come from an application inside the device[¶](#Distributed-architecture-proposal-of-merging-based-on-the-current-Overlayauthentication-architecture-PZP-and-PZH-components-Case-1-requests-come-from-an-application-inside-the-device)
========================================================================================================================================================================================================================================================================================================================================================================================

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

Flow description and assumptions[¶](#Flow-description-and-assumptions)
----------------------------------------------------------------------

Access requestor: the entity requesting access to a resource

Personal Zone Proxy (PZP): in this context the PZP acts in four ways\
- enforces authorization decisions at device level\
- synchronizes request context data with other devices\
- synchronizes PDP policies with other devices\
- verifies credentials towards the request context

Decision wrapper: responsible for driving the access control policy
evaluation and enforcement

Access manager: the entity in charge of taking the final decision by
combining the XACML access\
control and the DHDF data.

PEP: the entity that performs access control, by making decision
requests and enforcing\
authorization decisions

Obligations: operations specified in a policy that should be performed
by the PEP in conjunction\
with the enforcement of an authorization decision

Context handler: the system entity that converts decision requests in
the native request format\
to the XACML canonical form and converts authorization decisions in the
XACML canonical form\
to the native response format

PDP: the entity that evaluates applicable policy and renders an
authorization decision

PIP: the entity that acts as a source of attribute values

Data reader: responsible for abstracting the communication with the
Request Context

Request context: responsible for managing all contextual information; it
stores all the data and\
credentials released by a user in a given session

DHDF engine: Data Handling Decision Function engine provides privacy and
data handling functionalities.\
It does not implement a complete privacy-aware access control system,
but rather it is responsible for\
the management and evaluation of data handling policies only

Personal Zone Hub (PZH): in this context the PZH acts in three ways:\
- as a data synchronizer towards the request context (via PZP)\
- as a policy synchronizer towards the PDP (via PZP)\
- as a credential system (responsible for credential verification)
towards the request context (via PZP)

0\. PZP update policies and make them available to the PDP\
1. The access requestor sends an access request to the PZP\
2. The PZP sends the request for access to the decision wrapper\
3. The decision wrapper forwards the request towards the access manager,
together with the possible relevant\
data handling policies attached to the requested resources

XACML engine branch {\
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
 15. The PEP fulfills the obligations\
 16. The PEP returns the access decision to the access manager\
}

Privacy enhanced branch {\
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

Distributed architecture, proposal of merging based on the current Overlay/authentication architecture (PZP and PZH components). Case 2: requests come from outside the Device[¶](#Distributed-architecture-proposal-of-merging-based-on-the-current-Overlayauthentication-architecture-PZP-and-PZH-components-Case-2-requests-come-from-outside-the-Device)
============================================================================================================================================================================================================================================================================================================================================================

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

Flow description and assumptions[¶](#Flow-description-and-assumptions)
----------------------------------------------------------------------

Remote access requestor: the entity requesting access to a resource

Personal Zone Proxy (PZP): in this context the PZP enforces
authorization decisions at device level

Decision wrapper: responsible for driving the access control policy
evaluation and enforcement

Access manager: the entity in charge of taking the final decision by
combining the XACML access\
control and the DHDF data.

PEP: the entity that performs access control, by making decision
requests and enforcing\
authorization decisions

Obligations: operations specified in a policy that should be performed
by the PEP in conjunction\
with the enforcement of an authorization decision

Context handler: the system entity that converts decision requests in
the native request format\
to the XACML canonical form and converts authorization decisions in the
XACML canonical form\
to the native response format

PDP: the entity that evaluates applicable policy and renders an
authorization decision\
PDPC: the PDP cache

PIP: the entity that acts as a source of attribute values

PAP: the entity that creates a policy or policy set

Data reader: responsible for abstracting the communication with the
Request Context

Request context: responsible for managing all contextual information; it
stores all the data and\
credentials released by a user in a given session

DHDF engine: Data Handling Decision Function engine provides privacy and
data handling functionalities.\
It does not implement a complete privacy-aware access control system,
but rather it is responsible for\
the management and evaluation of data handling policies only

Personal Zone Hub (PZH): in this context the PZH acts in three ways:\
- as a data synchronizer towards the request context\
- as a policy synchronizer towards the PDPC\
- as a credential system (responsible for credential verification)
towards the request context

0\. PAP update policies and make them available to the PDP\
1. The remote access requestor sends an access request to the PZH across
the overlay network\
2. The PZH sends the request for access to the decision wrapper\
3. The decision wrapper forwards the request towards the access manager,
together with the possible relevant\
data handling policies attached to the requested resources

XACML engine branch {\
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
 15. The PEP fulfills the obligations\
 16. The PEP returns the access decision to the access manager\
}

Privacy enhanced branch {\
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

Distributed architecture, proposal of merging based on the current Overlay/authentication architecture (PZP and PZH components). Case 3: requests come from outside the Device, and no Personal Hub is reachable (or it is not contacted for resource usage optimization[¶](#Distributed-architecture-proposal-of-merging-based-on-the-current-Overlayauthentication-architecture-PZP-and-PZH-components-Case-3-requests-come-from-outside-the-Device-and-no-Personal-Hub-is-reachable-or-it-is-not-contacted-for-resource-usage-optimization)
==============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

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

Flow description and assumptions\
Remote access requestor: the entity requesting access to a resource[¶](#Flow-description-and-assumptionsRemote-access-requestor-the-entity-requesting-access-to-a-resource)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Personal Zone Proxy (PZP): in this context the PZP acts in four ways\
- enforces authorization decisions at device level\
- synchronizes request context data with other devices\
- synchronizes PDP policies with other devices\
- verifies credentials towards the request context

Decision wrapper: responsible for driving the access control policy
evaluation and enforcement

Access manager: the entity in charge of taking the final decision by
combining the XACML access\
control and the DHDF data.

PEP: the entity that performs access control, by making decision
requests and enforcing\
authorization decisions

Obligations: operations specified in a policy that should be performed
by the PEP in conjunction\
with the enforcement of an authorization decision

Context handler: the system entity that converts decision requests in
the native request format\
to the XACML canonical form and converts authorization decisions in the
XACML canonical form\
to the native response format

PDP: the entity that evaluates applicable policy and renders an
authorization decision

PIP: the entity that acts as a source of attribute values

Data reader: responsible for abstracting the communication with the
Request Context

Request context: responsible for managing all contextual information; it
stores all the data and\
credentials released by a user in a given session

DHDF engine: Data Handling Decision Function engine provides privacy and
data handling functionalities.\
It does not implement a complete privacy-aware access control system,
but rather it is responsible for\
the management and evaluation of data handling policies only

0\. PZP update policies and make them available to the PDP\
1. The remote access requestor sends an access request to the PZP across
the overlay network\
2. The PZP sends the request for access to the decision wrapper\
3. The decision wrapper forwards the request towards the access manager,
together with the possible relevant\
data handling policies attached to the requested resources

XACML engine branch {\
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
 15. The PEP fulfills the obligations\
 16. The PEP returns the access decision to the access manager\
}

Privacy enhanced branch {\
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

Policy events[¶](#Policy-events)
--------------------------------

Open issues[¶](#Open-issues)
============================

Where and how are policies stored on each device (BONDI)[¶](#Where-and-how-are-policies-stored-on-each-device-BONDI)
--------------------------------------------------------------------------------------------------------------------

[From section 6.2.2 of BONDI Architecture and Security v1.1]:\
“The requirements here are based on the assumption that a device has a
locally stored Security Policy, which is made up of one or more
separately configurable fragments, each in BONDI XML security policy
format. No structure is imposed by BONDI at this release on the
partitioning of complete Security Policies into fragments.”

