-   [Policy Examples](#Policy-Examples)
    -   -   [User U wants to install Application A and grant it access
            to APIs
            J0-J9](#User-U-wants-to-install-Application-A-and-grant-it-access-to-APIs-J0-J9)
        -   [User U wants to grant Application A access to APIs J0-J9,
            but only on device
            M](#User-U-wants-to-grant-Application-A-access-to-APIs-J0-J9-but-only-on-device-M)
        -   [User U wants to grant Application A access to APIs J0-J9,
            on devices M and
            N.](#User-U-wants-to-grant-Application-A-access-to-APIs-J0-J9-on-devices-M-and-N)
        -   [User U wants to grant Application A access to all
            extensions defined in its manifest (only on his cars) and to
            API J0 (on all
            devices)](#User-U-wants-to-grant-Application-A-access-to-all-extensions-defined-in-its-manifest-only-on-his-cars-and-to-API-J0-on-all-devices)
        -   [User U wants to share his photos (P0-P99) with User
            V.](#User-U-wants-to-share-his-photos-P0-P99-with-User-V)
        -   [Grant Application A to use services provided by Application
            B, hosted somewhere else (not in the current
            device).](#Grant-Application-A-to-use-services-provided-by-Application-B-hosted-somewhere-else-not-in-the-current-device)
        -   [Application A wants to use services provided by Application
            B, also present on the same device
            M.](#Application-A-wants-to-use-services-provided-by-Application-B-also-present-on-the-same-device-M)
        -   [User U works for Company MegaCorp who want to have remote
            access to work data items
            W0-W99.](#User-U-works-for-Company-MegaCorp-who-want-to-have-remote-access-to-work-data-items-W0-W99)
        -   [User U wants to restrict Application A from using network
            N.](#User-U-wants-to-restrict-Application-A-from-using-network-N)
        -   [User U wants Application A to work using network N when he
            is at MegaCorp and wants to use network L when he is at
            home. [For the
            phase2]](#User-U-wants-Application-A-to-work-using-network-N-when-he-is-at-MegaCorp-and-wants-to-use-network-L-when-he-is-at-home-For-the-phase2)
        -   [User U wants third party S to manage his policy settings on
            his device
            M](#User-U-wants-third-party-S-to-manage-his-policy-settings-on-his-device-M)
        -   [User U wants third party S to manage his policy settings on
            all his (PZ) devices: M, N and
            O.](#User-U-wants-third-party-S-to-manage-his-policy-settings-on-all-his-PZ-devices-M-N-and-O)
        -   [User U is not allowed to install applications on device
            M.](#User-U-is-not-allowed-to-install-applications-on-device-M)
        -   [Developer D1 wants to update the required access control
            policy for application A as part of an upgrade. [For the
            phase2]](#Developer-D1-wants-to-update-the-required-access-control-policy-for-application-A-as-part-of-an-upgrade-For-the-phase2)
        -   [Application A1 wants to access (historic) context
            information provided by service/sensor S1 on device M. [For
            the
            phase2]](#Application-A1-wants-to-access-historic-context-information-provided-by-servicesensor-S1-on-device-M-For-the-phase2)

Policy Examples[¶](#Policy-Examples)
====================================

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
