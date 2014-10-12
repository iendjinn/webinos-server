Policy Example and Elements[¶](#Policy-Example-and-Elements)
============================================================

This page should include lots of examples of policy scenarios and how
these will translate into webinos policies.

[Policy\_Elements\_Context](.html)

Browser-specific policies[¶](#Browser-specific-policies)
========================================================

There are many cases that do not fall so neatly into a XACML structure.
How do we integrate same origin policies? Thoughts needed here.

Relevant work includes WARP, Apache Wookie, [Cross Origin Resource
Sharing](http://www.w3.org/TR/cors/) , [Content Security
Policy](https://dvcs.w3.org/hg/content-security-policy/raw-file/tip/csp-specification.dev.html)

Policy Subject[¶](#Policy-Subject)
==================================

Example: "Application Angrybirds can access Location Settings"

*note Dieter Blomme: If we change this to "Application Angrybirds can
access Location Settings for user identity JohnPersonal" this might
remain usable and be more secure*

Pros:

-   Intuitive for application developers and users
-   Can be copied to multiple devices with immediate effect, but
    additional device-specific conditions could also be applied
-   User is represented as just another item of context data, another
    if-statement in the condition of the policy.
-   Easy to package up for individual applications.

Cons:

-   May result in unexpected behaviour. E.g. allowing access to all the
    media on your phone is a different thing to all the media on your
    PC. it is not clear what the sensible defaults (do you add device
    specific restrictions?) should be.
-   Does not refer to the user in any way, which is bad for multi-user
    systems.

Example2: "User U can access Local Settings of Device D with the
application A, from a Device X registered in the same PZ of Device D"

There are four basic information for the subject:

1.  WHO want to access a resource: could be an user or a group
2.  WHERE access requestor is: make possible differentiate a local
    access (INTRA-DEVICE) from a remote access (INTRA-PZ or EXTRA-PZ)
3.  WHERE the resource is: allow to use the same policy file for many
    devices
4.  WHICH application is used: could be used to differentiate behaviour
    for application of different authors, distributors etc..

These information may be all specified or less

Pros:

-   The user is represented explicitly.
-   Can be copied to multiple devices of a single user.
-   Can represent complex scenarios.

Cons:

-   Could be not so intuitive
-   The policy is dependent on user
    -   Define some generic users could resolve this issue eg.
        Anonymous, PZ-owner, PZ-member, Friend-of-PZ-owner,
        Friend-of-PZ-member, Others

Policy Examples[¶](#Policy-Examples)
====================================

There is the assumption that User U is the user that can phisically
control the device and is logged in (could be the "PZ-owner" or a
"PZ-member")

User U wants to install Application A and grant it access to APIs J0-J9[¶](#User-U-wants-to-install-Application-A-and-grant-it-access-to-APIs-J0-J9)
----------------------------------------------------------------------------------------------------------------------------------------------------

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

User U wants to grant Application A access to APIs J0-J9, but only on device M[¶](#User-U-wants-to-grant-Application-A-access-to-APIs-J0-J9-but-only-on-device-M)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5             <subject-match attr="device-id" match="(Device M)"/>
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

User U wants to grant Application A access to APIs J0-J9, on device M and N. (He does this through device M.)[¶](#User-U-wants-to-grant-Application-A-access-to-APIs-J0-J9-on-device-M-and-N-He-does-this-through-device-M)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5             <subject-match attr="device-id" match="{(Device M), (Device N)}"/>
     6         </subject>
     7     </target>
     8 
     9     <rule effect="permit">
    10         <condition combine="or">
    11                 <resource-match attr="api-feature" match="http://www.webinos.org/action/widget-install"/>
    12 
    13                 <resource-match attr="api-feature" match="(API J0)"/>
    14                 <resource-match attr="api-feature" match="(API J1)"/>
    15                 ...
    16                 <resource-match attr="api-feature" match="(API J9)"/>
    17         </condition>
    18     </rule>
    19 
    20     <rule effect="deny" />
    21 </policy>

User U wants to use Application A under a work pseudonym and Application B under his personal pseudonym. Both are on the same device M.[¶](#User-U-wants-to-use-Application-A-under-a-work-pseudonym-and-Application-B-under-his-personal-pseudonym-Both-are-on-the-same-device-M)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

not covedered yet

User U wants to share his photos (P0-P99) with User V.[¶](#User-U-wants-to-share-his-photos-P0-P99-with-User-V)
---------------------------------------------------------------------------------------------------------------

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="(User V)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition>
    10             <resource-match attr="device-cap" match="(gallery method to access to photos)"/>
    11             <resource-match attr="param:(name of the param that identifies a filename)" match="path_to_photos/P(0|[1..9][0..9]?)" func="regexp"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="deny" />
    16 </policy>

Application A wants to use services provided by Application B, hosted somewhere else.[¶](#Application-A-wants-to-use-services-provided-by-Application-B-hosted-somewhere-else)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition>
    10             <resource-match attr="device-cap" match="(method to access to application's services)"/>
    11             <resource-match attr="param:(name of the param that identifies id of the application)" match="(Application B)"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="deny" />
    16 </policy>

Application A wants to use services provided by Application B, also present on the same device M.[¶](#Application-A-wants-to-use-services-provided-by-Application-B-also-present-on-the-same-device-M)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="id" match="(Application A)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition>
    10             <resource-match attr="device-cap" match="(method to access to application's services)"/>
    11             <resource-match attr="param:(name of the param that identifies id of the application)" match="(Application B)"/>
    12             <resource-match attr="param:(name of the param that identifies id of the hosting location)" match="(device M)"/>
    13         </condition>
    14     </rule>
    15 
    16     <rule effect="deny" />
    17 </policy>

User U works for Company MegaCorp who want to have remote access to work data items W0-W99.[¶](#User-U-works-for-Company-MegaCorp-who-want-to-have-remote-access-to-work-data-items-W0-W99)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

(useful?)

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="group:(Group MegaCorp)"/>
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

User U wants to restrict Application A from using network N.[¶](#User-U-wants-to-restrict-Application-A-from-using-network-N)
-----------------------------------------------------------------------------------------------------------------------------

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

User U wants Application A to work using network N when he is at MegaCorp and wants to use network L when he is at home.[¶](#User-U-wants-Application-A-to-work-using-network-N-when-he-is-at-MegaCorp-and-wants-to-use-network-L-when-he-is-at-home)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
    13                 <environment-match attr="current-checkin-location" match="(Location MegaCorp)">
    14             </condition>
    15             <condition combine="and">
    16                 <resource-match attr="api-feature" match="http://www.webinos.org/action/network-access"/>
    17                 <environment-match attr="bearer-name" match="(Network L)">
    18                 <environment-match attr="current-checkin-location" match="(Location Home)">
    19             </condition>
    20         </condition>
    21     </rule>
    22 
    23     <rule effect="deny" />
    24 </policy>

User U wants third party S to manage his policy settings on his device M[¶](#User-U-wants-third-party-S-to-manage-his-policy-settings-on-his-device-M)
------------------------------------------------------------------------------------------------------------------------------------------------------

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="(User S)"/>
     5             <subject-match attr="device-id" match="(Device M)"/>
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

User U wants third party S to manage his policy settings on all his devices: M, N and O.[¶](#User-U-wants-third-party-S-to-manage-his-policy-settings-on-all-his-devices-M-N-and-O)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="(User S)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition combine="or">
    10             <resource-match attr="api-feature" match="http://www.webinos.org/action/policy-manage"/>
    11         </condition>
    12     </rule>
    13 
    14     <rule effect="deny" />
    15 </policy>

User U is not allowed to install applications on device M.[¶](#User-U-is-not-allowed-to-install-applications-on-device-M)
-------------------------------------------------------------------------------------------------------------------------

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="user-id" match="(User U)"/>
     5             <subject-match attr="device-id" match="(Device M)"/>
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

Application A wants a particular type of authenticated credentials from the User[¶](#Application-A-wants-a-particular-type-of-authenticated-credentials-from-the-User)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

not covered yet

Developer D1 wants to update the required access control policy for application A as part of an upgrade.[¶](#Developer-D1-wants-to-update-the-required-access-control-policy-for-application-A-as-part-of-an-upgrade)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     1 <policy combine="first-applicable">
     2     <target>
     3         <subject>
     4             <subject-match attr="author-key-fingerprint" match="(Author D1)"/>
     5         </subject>
     6     </target>
     7 
     8     <rule effect="permit">
     9         <condition>
    10             <resource-match attr="api-feature" match="http://www.webinos.org/action/policy-manage"/>
    11             <resource-match attr="param:id" match="application-id:(Application A)"/>
    12         </condition>
    13     </rule>
    14 
    15     <rule effect="deny"/>
    16 </policy>

Application A1 wants to access (historic) context information provided by service/sensor S1 on device M.[¶](#Application-A1-wants-to-access-historic-context-information-provided-by-servicesensor-S1-on-device-M)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     1 <!-- SIMILAR TO: User U wants to grant Application A access to APIs J0-J9, but only on device M -->
     2 <policy combine="first-applicable">
     3     <target>
     4         <subject>
     5             <subject-match attr="id" match="(Application A1)"/>
     6             <subject-match attr="device-id" match="(Device M)"/>
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

[Obligations](http://cd-docdb.fnal.gov/cgi-bin/RetrieveFile?docid=2140&version=1&filename=xacml-2-core-specification-on-obligations.txt)[¶](#Obligations)
---------------------------------------------------------------------------------------------------------------------------------------------------------
