T35 Phase 2 Activities[¶](#T35-Phase-2-Activities)
==================================================

Timeline - [36 Work Breakdown](.html)

-   [T35 Phase 2 Activities](#T35-Phase-2-Activities)
    -   [1 - Updating and documenting the security
        framework](#1-Updating-and-documenting-the-security-framework)
        -   [1.1 - Creating a list of assets, based on 2.8 asset models
            and the
            implementation](#11-Creating-a-list-of-assets-based-on-28-asset-models-and-the-implementation)
        -   [1.2 - Producing UML deployment diagrams for each platform
            and the PZH
            Farm.](#12-Producing-UML-deployment-diagrams-for-each-platform-and-the-PZH-Farm)
        -   [1.3 - Producing sequence or communication diagrams for
            interactions between
            components.](#13-Producing-sequence-or-communication-diagrams-for-interactions-between-components)
        -   [1.5 - Further documentation of the policy
            framework](#15-Further-documentation-of-the-policy-framework)
        -   [1.6 - Further documentation of the authentication
            system](#16-Further-documentation-of-the-authentication-system)
        -   [1.7 - Further documentation of key, data and credential
            management](#17-Further-documentation-of-key-data-and-credential-management)
        -   [1.8 - Architectural risk analysis - updating the list of
            threats, misuse cases and attack
            trees.](#18-Architectural-risk-analysis-updating-the-list-of-threats-misuse-cases-and-attack-trees)
        -   [1.9 - State of the art survey](#19-State-of-the-art-survey)
        -   [1.10 Investigate websocket issue and WRT PZP
            communication](#110-Investigate-websocket-issue-and-WRT-PZP-communication)
        -   [1.11 Per-API Analysis](#111-Per-API-Analysis)
    -   [2 - Addressing new issues and
        requirements](#2-Addressing-new-issues-and-requirements)
        -   [2.1 - Cloud security.](#21-Cloud-security)
        -   [2.2 - Security evaluation.](#22-Security-evaluation)
        -   [2.3 - Security lifecycle: best practices and guidance
            (technical, organisational,
            user)](#23-Security-lifecycle-best-practices-and-guidance-technical-organisational-user)
        -   [2.4 - DDoS protection](#24-DDoS-protection)
        -   [2.5 - PZH-based security
            controls](#25-PZH-based-security-controls)
        -   [2.6 - Browser-safe APIs](#26-Browser-safe-APIs)
        -   [2.7 - Investigate recommendations for Content Security
            Policy for
            webinos](#27-Investigate-recommendations-for-Content-Security-Policy-for-webinos)
        -   [2.8 - Defining application types and differences in the
            security
            model](#28-Defining-application-types-and-differences-in-the-security-model)
        -   [2.9 - Secure UI requirements and
            specification](#29-Secure-UI-requirements-and-specification)
        -   [2.10 - Securing data at rest](#210-Securing-data-at-rest)
        -   [2.11 - Threat model](#211-Threat-model)

1 - Updating and documenting the security framework[¶](#1-Updating-and-documenting-the-security-framework)
----------------------------------------------------------------------------------------------------------

First, we have to update the security framework based on our
implementation and developments over the past year. This includes:

### 1.1 - Creating a list of assets, based on 2.8 asset models and the implementation[¶](#11-Creating-a-list-of-assets-based-on-28-asset-models-and-the-implementation)

I am working on this:
</t3-5/wiki/Risk_Management_-_Assets>

I would also like this to be reviewed by POLITO.

### 1.2 - Producing UML deployment diagrams for each platform and the PZH Farm.[¶](#12-Producing-UML-deployment-diagrams-for-each-platform-and-the-PZH-Farm)

This is work in progress, and I expect that SAMSUNG, BMW and FOKUS will
primarily do this work, with my support:
</t3-5/wiki/Risk_Management_-_Deployment_Diagrams>

More on deployment diagrams can be found here:
<http://www.agilemodeling.com/artifacts/deploymentDiagram.htm> as well
as in any good UML book.

### 1.3 - Producing sequence or communication diagrams for interactions between components.[¶](#13-Producing-sequence-or-communication-diagrams-for-interactions-between-components)

At least the following events need to have sequence or communication
diagrams to explain:

-   An application communicating with an API on a local PZP
-   An application communicating with an API on a PZP on another device
    in the zone
-   An application communicating with an API on a PZP on another device
    in a different zone
-   Accessing the web interface of the PZH and authenticating the user
-   Creating a PZH
-   Adding a new device to a personal zone
-   Removing a device from a personal zone

I expect POLITO, CATANIA, IMPLEO and other WP3 partners in T3.3 to work
on this. Oxford will produce some examples and we will then request help
from other partners.

</t3-5/wiki/Risk_Management_-_Communication_Diagrams>

### 1.5 - Further documentation of the policy framework[¶](#15-Further-documentation-of-the-policy-framework)

This involves creating sets of example and default policies, and
documenting the Policy Enforcement Points in the architecture. It also
requires documentation of those things which are *not* under the control
of the policy framework.

I expect CATANIA to lead this work.

### 1.6 - Further documentation of the authentication system[¶](#16-Further-documentation-of-the-authentication-system)

This involves writing an explanation for how the authentication system
works, how the different authentication systems fit together, and how it
interacts with the policy enforcement system. The level of
authentication required for each action (by default) should be exlained.
It will also require the creation of a few misuse cases to document
potential problems.

This will also involve an analysis of the privacy implications of the
authentication framework. Within scope is the task of identifying
improvements to the framework to solve identity issues.

I expect POLITO and OXFORD to work on this primarily.

### 1.7 - Further documentation of key, data and credential management[¶](#17-Further-documentation-of-key-data-and-credential-management)

This involves documenting each place where data is/can be stored, where
keys and credentials are used, and how they are (or are not) protected.
This will be closely linked with (1.1). The existing secure storage
analysis plus the key storage implementations will be the primary
inputs.

I expect OXFORD to work on this with support from SAMSUNG and IMPLEO.

### 1.8 - Architectural risk analysis - updating the list of threats, misuse cases and attack trees.[¶](#18-Architectural-risk-analysis-updating-the-list-of-threats-misuse-cases-and-attack-trees)

[Architectural Risk Analysis Guidelines](.html)

-   </t3-5/wiki/Architectural_Risk_Analysis_Guidelines>
-   [Automated Weakness Analysis with
    CAIRIS](Automated%20Weakness%20Analysis%20with%20CAIRIS.html)

We will add more risks, threats, vulnerabilities, misuse cases and
attack trees, building on earlier work. However, it will be an
*architectural* risk analysis based on the deployment diagrams, security
features and components we know exist. This includes (1) looking at
known attacks patterns (e.g. OWASP top attacks), (2) identify
assumptions made by these components which may break (e.g. what could an
attacker do to each component?) and (3) looking at the components and
any known flaws in libraries/tools. Where possible, attack trees will be
created to better explain any threats.

This process relies upon diagrams existing, and will therefore require
(1.1)-(1.7) to have started. It will also use notes I have been taking
all year (
</t3-5/wiki/Interim_report#Resources-38-Ideas>
). A focus of this investigation will be Denial of Service attacks.

This process also requires security expertise, and I therefore expect
OXFORD and POLITO to work on it primarily. I would also like FOKUS and
TNO to help, if Martin and Victor have time.

### 1.9 - State of the art survey[¶](#19-State-of-the-art-survey)

We will look at Tizen and B2G / Mozilla for state of the art analysis.
We will compare their security architectures, e.g.
<https://wiki.mozilla.org/Apps/Security>

Oxford and W3C will primarily look into this, with the aim of producing
a survey paper.

IMPLEO interested in WebIntents + Security analysis. May help
introducing us to Tizen.

### 1.10 Investigate websocket issue and WRT \<-\> PZP communication[¶](#110-Investigate-websocket-issue-and-WRT-PZP-communication)

IMPLEO to lead.

### 1.11 Per-API Analysis[¶](#111-Per-API-Analysis)

Each API will be analysed with respect to threats and risks.\
Page: [D036\_API\_Security\_Issues](.html)

OXFORD to lead

2 - Addressing new issues and requirements[¶](#2-Addressing-new-issues-and-requirements)
----------------------------------------------------------------------------------------

According to the DoW we have to handle some more issues in phase two of
the security framework. In particular:

### 2.1 - Cloud security.[¶](#21-Cloud-security)

The reviewers wanted to see a better analysis of cloud security issues.
An outline of the expected result can be seen here:

</t3-5/wiki/Cloud_Security_and_Privacy#webinos-in-the-cloud>

I expect OXFORD and POLITO to work on this.

Suggestion - look at home router scenario for PZH and hardware security.

### 2.2 - Security evaluation.[¶](#22-Security-evaluation)

This will involve coming up with a evaluation framework for webinos
platforms. How do we test whether any particular implementation of
webinos is secure?

I suggest we do not address this issue due to time constraints. If we do
decide to do this later, it can be done after the 3.6 deliverable
deadline.

### 2.3 - Security lifecycle: best practices and guidance (technical, organisational, user)[¶](#23-Security-lifecycle-best-practices-and-guidance-technical-organisational-user)

This involves coming up with better guidance for webinos developers,
webinos app developers, users of webinos and organisations wishing to
support webinos devices.

I suggest we do not address this issue due to time constraints. If we do
decide to do this later, it can be done after the 3.6 deliverable
deadline.

### 2.4 - DDoS protection[¶](#24-DDoS-protection)

This involves identifying how we can mitigate the risk to web
applications and webinos platforms from DDoS. Steps:

-   Identify the most likely DDoS-based threats (part of 1.4)
-   Identify which of our APIs would be most vulnerable to DDoS and
    therefore require protection
-   Identify architectural components and designs which may increase
    exposure to DDoS threats - e.g. are nodejs or the XACML engine
    particularly vulnerable?
-   Identify mitigating techniques, tools or changes in spec which might
    solve these problems

I expect OXFORD to work on this

### 2.5 - PZH-based security controls[¶](#25-PZH-based-security-controls)

This involves specifying the security and privacy features that must be
implemented by the PZH. Many of these are to help users who lose a
device or have it stolen/compromised. At present this just consists of
revocation, but could also include some of:

-   remote wiping of application data
-   intrusion detection
-   "phone home" functionality
-   personal zone hub migration between farms

This should fit with the OMA DM specifications / standards.

I expect this to be implemented with WP4 by SAMSUNG and BMW supported by
OXFORD.

### 2.6 - Browser-safe APIs[¶](#26-Browser-safe-APIs)

This involves analysing our current APIs and identifying those which can
be made browser safe, and what changes are necessary.

This will be lead by W3C

### 2.7 - Investigate recommendations for Content Security Policy for webinos[¶](#27-Investigate-recommendations-for-Content-Security-Policy-for-webinos)

This involves identifying recommendations for how apps should use CSP
and CORS in different contexts.

Bearing in mind that Mozilla are specifying a CSP profile for 'trusted
apps'

### 2.8 - Defining application types and differences in the security model[¶](#28-Defining-application-types-and-differences-in-the-security-model)

This involves defining any differences in security between browser-based
and WRT-based apps, and how webinos will treat them. Ideally, we don't
want there to be any difference.

### 2.9 - Secure UI requirements and specification[¶](#29-Secure-UI-requirements-and-specification)

This involves defining the measures that webinos will take to
authenticate the system to the user, so that any UI notifications are
difficult for an app to spoof. Dave has worked on this a little already.

The paper we have referred to previously -
<http://dl.acm.org/citation.cfm?doid=1073001.1073009>

### 2.10 - Securing data at rest[¶](#210-Securing-data-at-rest)

This involves providing an analysis of what data protection features are
necessary / proposed.

This will be related to -
</wp4/wiki/Secure_Storage_Analysis>

### 2.11 - Threat model[¶](#211-Threat-model)

This involves specifying our threat model for webinos. This is closely
related to the Entity Definitions work and the API analysis -
</t3-5/wiki/Security_Assumptions_and_Trusted_Components>

------------------------------------------------------------------------
