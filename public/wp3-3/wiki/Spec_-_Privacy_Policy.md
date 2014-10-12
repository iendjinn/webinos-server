Privacy and data handling policies[¶](#Privacy-and-data-handling-policies)
==========================================================================

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
        -   [Object synchronization concerning
            privacy](#Object-synchronization-concerning-privacy)
            -   [Manifests synchronization and
                usage](#Manifests-synchronization-and-usage)
            -   [Example of exceptions.xml](#Example-of-exceptionsxml)
            -   [Example of policy.xml](#Example-of-policyxml)
    -   [Widget manifest example](#Widget-manifest-example)
    -   [References](#References)
        -   [PrimeLifeRDI](#PrimeLifeRDI)
        -   [P3P11](#P3P11)

Specification[¶](#Specification)
--------------------------------

[JPL]: If the previous section is not going to be part of the
specification, we can't reference it here in this way.\
<span style="background:green;"> [PV] If the previous section is not
going to be included in the deliverable, I think section editor or main
editor should take care of copy and paste it. Assuming that background
inclusion is not out of the question.</span>\
<span style="background:lightgreen;"> [SM] Background section no more
needed</span>

As anticipated in [conceptual
architecture](conceptual%20architecture.html), the webinos platform's
security and privacy requirements are achieved through the definition of
an enforcement system based on access control and privacy policies.\
While the access control policies are discussed in the previous section,
this one focus on privacy and data handling specifications.\
The following diagram depicts a brief overview of the mechanisms
involving privacy and data handling policies. The definition and usage
of the shown elements, such as *policy.xml*, *exceptions.xml* and
*manifest.xml* is reported in the following sections.

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
days (using *\<Start\>* and *\<MaxDelay\>* tags).

What does this 5-day requirement refer to?\
<span style="background:green;"> [PV] This was a part of a bigger
example that has been divided. The 5 days is an obligation that states
that data must be deleted from the application in 5 days. Polito can be
more precise, I think.</span>

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
    2     <AttributeValue>http://webinos.org/geolocation</AttributeValue>
    3     <AttributeValue>#pseudo-analysisDHP</AttributeValue>
    4     <DeveloperProvidedDescription language="EN">
    5       The geolocation feature is required by this application in order to customise search results.
    6     </DeveloperProvidedDescription>
    7   </ProvisionalAction>

[JPL] I just made some changes here - can you check that this makes
sense for \#pseudo-analysisDHP ? If this is correct, it might be worth
updating the example at the end of this spec, too. I think this example
makes more sense...\
<span style="background:green;"> [PV] It does. Changing the last example
accordingly...</span>

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

1.  XACML access control (rows 2-9 in the following example). This is
    the usual matching of XACML policies to application required
    features.
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
     8         <Resource-match attr="device-cap" match="http://webinos.org/geolocation"/>
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
    32     <ProvisionalAction>
    33         <AttributeValue>http://www.webinos.org/geolocation</AttributeValue>
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

### Object synchronization concerning privacy[¶](#Object-synchronization-concerning-privacy)

Object synchronisation (as defined in the [Glossary](.html)) is required
for general access control, not just for privacy.

The decision to allow or deny an access request is generated from the
matching engine and calculated at run-time. Hence, from the privacy
perspective, policies must be synchronised across the personal zone in
order to make sure that they are consistently followed on all devices.

The main idea is to have an *exceptions.xml* file that goes alongside
with the existing *policy.xml*. Synchronization will treat these policy
files as follows:

-   ***policy.xml***: will be synchronized across the whole personal
    zone. It is the same for every device and it gathers inside itself
    all the preferences that the user has specified.
-   ***exceptions.xml***: is an exception file that specifies particular
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

contains the *feature* tags, that specify which APIs and data the
application wants to retrieve,\
and the data handling policies that are a declaration statement of the
application intents about gathered data

Access Control Policies: XACML-like, data handling policies: PPL tags

synchronized across the whole personal zone

not editable

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

Widget manifest example[¶](#Widget-manifest-example)
----------------------------------------------------

In the example below an example concerning the widget manifest is
provided.\
In order to bind the data handling policies with the related obligation,
a provisional action took place. If there is more than one to be binded,
the *\<ProvisionalActions\>* tag must be used.

     1 <widget>
     2     <feature name="http://webinos.org/geolocation" required="true" />
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
    13                         <Start>
    14                             <StartNow/>
    15                         </Start>
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
    26         <AttributeValue>http://webinos.org/geolocation</AttributeValue>
    27         <AttributeValue>#pseudo-analysisDHP</AttributeValue>
    28                 <DeveloperProvidedDescription language="EN">
    29                   The geolocation feature is required by this application in order to customise search results.
    30                 </DeveloperProvidedDescription>
    31     </ProvisionalAction>
    32 </widget>

References[¶](#References)
--------------------------

### PrimeLifeRDI[¶](#PrimeLifeRDI)

<http://www.primelife.eu/images/stories/deliverables/d5.3.4-report_on_design_and_implementation-public.pdf>

### P3P11[¶](#P3P11)

<http://www.w3.org/TR/P3P11/>

