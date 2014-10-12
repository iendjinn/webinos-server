Policy Management[¶](#Policy-Management)
========================================

Partners involved in this section[¶](#Partners-involved-in-this-section)
------------------------------------------------------------------------

Primary:

-   University of Catania (UNICT)
-   Telecom Italia (TIS)

Secondary:

-   University of Oxford
-   Politecnico di Torino (Polito)

*Security Contacts: Oxford, Polito, TIS.*

List of relevant technologies and project[¶](#List-of-relevant-technologies-and-project)
----------------------------------------------------------------------------------------

-   XACML
-   SAML
-   OAUTH
-   BONDI (Policy management architecture and BONDI XML policy
    specification(?))
-   PERMIS
-   PrimeLife extensions to XACML

Links[¶](#Links)
----------------

[Policy\_Management\_Current\_State](.html)

[Policy\_Management\_Draft\_Deliverable\_Structure](.html)

Conference call / meeting notes[¶](#Conference-call-meeting-notes)
------------------------------------------------------------------

-   [4th March 2011 Conference
    Call](%204th%20March%202011%20Conference%20Call.html)
-   [9th March 2011 WP3 Report Conference
    Call](%209th%20March%202011%20WP3%20Report%20Conference%20Call.html)
-   [15th March 2011 Skype
    Call](%2015th%20March%202011%20Skype%20Call.html)
-   [1st April 2011 Skype
    Call](%201st%20April%202011%20Skype%20Call.html)
-   [15th April 2011 Skype
    Call](%2015th%20April%202011%20Skype%20Call.html)
-   [20th April 2011 Skype
    Call](%2020th%20April%202011%20Skype%20Call.html)

Area break-down[¶](#Area-break-down)
------------------------------------

-   [Architecture](Architecture.html) (Distributed BONDI):
    -   **Priority: HIGH?**
    -   Where and how are policies stored on each device (BONDI)
    -   Location of policy elements: where should the PEP/PDP/PIP/PAP...
        be?
    -   How to isolate trusted components

<!-- -->

-   [Policy interaction with
    Apps](Policy%20interaction%20with%20Apps.html):
    -   **Priority: ?**
    -   what will the javascript look like? (BONDI)
    -   important events: install/run/iohttpfeature
    -   How will native apps deal with policy: treated like "dumb
        devices"?

<!-- -->

-   [Policy synchronisation, update, and cross-device interaction in
    general](Policy%20synchronisation,%20update,%20and%20cross-device%20interaction%20in%20general.html):
    -   **Priority: HIGH ?**
    -   outsourcing management of security policies to a third party
        (e.g. A/V vendor, a trusted friend)
    -   managing the update process for policies - how to provide
        assurance of the source of a policy update & how policy rules
        interact
    -   managing of policy when the (primary?) policy management points
        (*PIP, PDP, PAP, PEP, ...*) are not reachable

<!-- -->

-   [Policies referring to diverse objects and ranges of user
    devices](Policies%20referring%20to%20diverse%20objects%20and%20ranges%20of%20user%20devices.html):
    -   **Priority: HIGH?**
    -   Need t ocome up with some "Policy use cases" describing examples
        of policies and how they will be used.
    -   (IDM group, new schemas?, this might just be a case of
        prototyping some use cases?)
    -   Describing & attesting device security capabilities as part of
        the policy environment (e.g. "this device has secure storage" or
        "this device can authenticate the user with a finger-print
        reader")
    -   Policy interaction with context: how do policies refer to and
        alter context (BONDI, context group)
    -   Policies referring to "personal" data (can we tag data and then
        refer to it)
    -   Policies referring to "identity" data (are they different from
        generic "personal" data? are they only identifiers or also
        composed by a set of attributes that individually are not
        sensitive?)
    -   Policies referring to a proximity event (e.g. a certain device
        being in range. This might even be considered authN if trusted)
    -   Policies referring to XHRs to certain servers (e.g. a
        firewall-rule like policy)
    -   Policies referring to device resource (battery, CPU) usage
    -   Policies referring to device discovery
    -   Policies referring to the sources of applications, plugins, the
        runtime itself and any updates to these
    -   Policies referring to multiple sources of the same kind of data:
        e.g. location details from Google, GPS and the network provider.
        Can these data sources be grouped? (BONDI, NEW)

<!-- -->

-   [Policy Requests and response
    logging](Policy%20Requests%20and%20response%20logging.html):
    -   **Priority: LOW ?**
    -   Can requests and responses from the Policy enforcement point be
        logged?
    -   may have additional details about the reason for requests and
        decisions

<!-- -->

-   [Policy Protection](Policy%20Protection.html):
    -   **Priority: MEDIUM ?**
    -   How do we protect policies on the device? How do we guarantee
        authenticity and integrity?

<!-- -->

-   [Interpersonal relationships and
    policies](Interpersonal%20relationships%20and%20policies.html):
    -   **Priority: ?**
    -   How do we describe simple use cases like "I want to share my
        calendar with my wife"? Can these concepts be translated easily?

<!-- -->

-   [Usability](Usability.html):
    -   **Priority: LOW?**
    -   Make sure the policies remain usable for the end user by
        creating mock-ups.

<!-- -->

-   [XACML (-like) policies and configuration
    examples](XACML%20(-like)%20policies%20and%20configuration%20examples.html)
    -   **Priority: ?**
    -   Select the best way to represent policies and configuration
        files.

<!-- -->

-   [Privileged Applications](.html)
    -   Now part of Policy management

Outstanding tasks[¶](#Outstanding-tasks)
----------------------------------------

  ----------------------- ----------------------- -----------------------
  **Item**                **Lead**                **Status**

  Policy examples &       Davide, Salvatore       
  workflows for                                   
  cross-device                                    
  interaction, including                          
  non-webinos devices.                            

  Policy examples &       Davide, Salvatore       
  workflows for                                   
  outsourced policy                               
  specification                                   

  Policy examples &       Davide, Salvatore       
  workflows for updates                           
  to applications and                             
  update                                          

  Policy synchronisation  John                    

  Investigation of        Davide, Salvatore       
  Powder/P3P policies for                         
  privacy                                         

  Policy GUI              John                    
  specification &                                 
  guidelines                                      

  Workflow for checking   John                    
  application integrity                           
  and identity                                    

  Standardising error                             
  messages as a result of                         
  “access denied” events                          

  Remote management:                              
  further thoughts needed                         
  on how to implement                             

  Privileged applications Krishna (based on       
                          earlier email)          

  Setup test environments Davide, Salvatore       
  and demos                                       

  Investigate on XACML                            postponed
  delegation                                      

  Combination of identity                         
  management architecture                         
  with policy                                     
  architecture                                    

  Look into JavaScript                            
  APIs as part of context                         
  management to work out                          
  how policies will be                            
  handled in JavaScript                           

  Looking further at                              
  issues of context                               
  handling and policy                             

  Deliverable             All                     
  ----------------------- ----------------------- -----------------------

Other items / considerations[¶](#Other-items-considerations)
------------------------------------------------------------

-   Is the performance/memory usage a constraint ? e.g. we must put
    something remotely in a server because a client resident
    implementation is too expensive
-   How much complexity should we support in requests ? (impact the
    complexity of the xml to be handled and API)
-   Identify the subset of requirements that directly impacts on the
    future Policy Management architectural choices
-   Identify the subset of security expectations that directly impacts
    on the future Policy Management architectural choices
-   [Turin Meeting
    presentation](http://dev.webinos.org/redmine/attachments/download/371/Unict_task_3.1_policyManagement_short.pdf)
-   Working definition of Policy Management: A device exposes a set of
    low level capabilities made available to applications through system
    APIs. Since applications may abuse of these capabilities, we need to
    introduce a component to control the access to them, matching
    external requests against a defined set of rules called policy.
    Policies could be evaluated taking into account context informations
    to obtain a more flexible control system. So, a definition may be:
    *The management of policies, rules, processes and information to
    control access to certain resources. In particular, the collection
    of systems and/or services associated with specific on-line
    resources and/or services that together derive the decision
    (privileges) about whether to allow a given entity to gain access to
    those resources or make use of those services [STORK Glossary and
    Acronyms]*
-   Input needed:
    -   A repository of policies -- from a Policy Administration Point
    -   A Request element that specifies Subject, Resource, Action, and
        Environment -- from Access Requestor
    -   A context -- from environment

