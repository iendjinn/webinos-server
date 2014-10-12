Policy Delegation Report[¶](#Policy-Delegation-Report)
======================================================

-   [Policy Delegation Report](#Policy-Delegation-Report)
    -   [Policy Structure](#Policy-Structure)
        -   [Profiles (Places) - XACML
            environment](#Profiles-Places-XACML-environment)
    -   [Type of policy file](#Type-of-policy-file)
        -   [General policies](#General-policies)
        -   [Application-specific
            Policies](#Application-specific-Policies)
        -   [Manufacturer policies](#Manufacturer-policies)
    -   [Provision of policies by a third
        party](#Provision-of-policies-by-a-third-party)
    -   [Simple delegation / abdication](#Simple-delegation-abdication)
    -   [Language-level enforced
        delegation](#Language-level-enforced-delegation)
    -   [Policy evaluation](#Policy-evaluation)
    -   [Other notes](#Other-notes)
        -   [Policy hierarchy](#Policy-hierarchy)
        -   [To Prompt or Not](#To-Prompt-or-Not)

Policy Structure[¶](#Policy-Structure)
--------------------------------------

The adoption of a standardised policy structure will assist with the
efficiency of processing access request decisions. The earlier a
fragment of the overall XACML policy set can be be deemed "Not
Applicable' the fewer resources are needed to process that portion of
the policy set. With this in mind, a decision needs to be taken as to
which target elements will yield the highest returns in this respect.
Additionally, the choice of combining algorithms can also have an impact
on the overall efficiency of reaching an access control decision.

It is also worth considering the way in which a resource owner may use a
policy editor to develop a policy set that will be used by a number of
pzps.

The proposed synchronisation model is to have a single policy set that
is replicated across all devices. With this in mind it would probably be
most efficient to structure the policy set in the following way:

     1 <policy-set combine="COMBINING STRATEGY" description="pzh_policy_set">
     2 
     3     <policy-set combine="COMBINING STRATEGY" description="Universally_Applicable_Items">    
     4         <target/> 
     5         <policy combine="COMBINING STRATEGY" description="Item1">
     6             <target>
     7                 -- Appropriate target selection
     8             </target>
     9             <rule effect="EFFECT">
    10                 <target>
    11                     -- Appropriate target selection
    12                 </target>
    13                 <condition> 
    14                     -- Appropriate condition
    15                 </condition>
    16             </rule>
    17             .
    18             .
    19             .
    20             <rule effect="EFFECT">
    21                 <target>
    22                     -- Appropriate target selection
    23                 </target>
    24                 <condition> 
    25                     -- Appropriate condition
    26                 </condition>
    27             </rule>
    28         </policy>
    29         .
    30         .
    31         .
    32         <policy .....>
    33             <rule .... > </rule>
    34             <rule .... > </rule>
    35         </policy>
    36     </policy-set>
    37 
    38     <policy-set combine="COMBINING STRATEGY" description="pzp_1_policy_set">    
    39         <target>
    40             <subject> "pzp_1_policy_set" </subject>
    41         <target>
    42         <policy combine="COMBINING STRATEGY" description="SERVICE_1">
    43             <target>
    44                 -- Appropriate target selection
    45             </target>
    46             <rule effect="EFFECT">
    47                 <target>
    48                     -- Appropriate target selection
    49                 </target>
    50                 <condition> 
    51                     -- Appropriate condition
    52                 </condition>
    53             </rule>
    54             .
    55             .
    56             .
    57             <rule effect="EFFECT">
    58                 <target>
    59                     -- Appropriate target selection
    60                 </target>
    61                 <condition> 
    62                     -- Appropriate condition
    63                 </condition>
    64             </rule>
    65         </policy>
    66         .
    67         .
    68         .
    69         <policy .....>
    70             <rule ....> </rule>
    71             <rule ....> </rule>
    72         </policy>
    73     </policy-set>
    74 
    75     <policy-set combine="COMBINING STRATEGY" description="pzp_2_policy_set">   
    76         <target>
    77             <subject> "pzp_2_policy_set" </subject>
    78         <target>
    79         .
    80         .
    81         .
    82     </policy-set>
    83 
    84     .
    85     .
    86     .
    87     .
    88 
    89     <policy-set combine="COMBINING STRATEGY" description="pzp_n_policy_set">  
    90         <target>
    91             <subject> "pzp_n_policy_set" </subject>
    92         <target> 
    93         .
    94         .
    95         .
    96     </policy-set>
    97 
    98 </policy-set>

With this structure the various policy sets have the following
characteristics:

-   The outer policy set has an empty target section which makes the
    overall policy universally applicable. The choice of combining
    algorithm would probably usually be a "xxxxx-override-algorithm"
    depending how the individual elements of the overall policy are
    constructor.
-   The first internal layer of policy sets are made up of a universally
    applicable policy set followed by a policy set for each pzp.
    -   The universally applicable policy set contains access control
        information pertinent to the items that are common to all pzps.
    -   Each of the following policy sets has a target which matches a
        particular pzp (device?) and therefore contains access control
        information pertinent to that individual pzp.

Within each inner policy set the structure is more fluid, although it
would probably be best to have a policy which contains common elements
and a number of policies which relate to individual
applications/services.

**Note:** If multiple pzps have the same application/service installed
and they each want to use the same access control policy for that
application/service we could use XML file inclusion and have a file
which contains the policy relating to the application which is included
in the policy set of each of the pzps which wish to use the same access
control settings.

### Profiles (Places) - XACML environment[¶](#Profiles-Places-XACML-environment)

There are a number of external environmental factors that may impact
upon an access control decision. Some examples of such policies are:

-   a policy based on temporal concerns, such as this service is only
    available for uses between 09:00 and 17:00 on Mondays.
-   a policy based on internet connection, such as a high data
    throughput service should only be accessed by a mobile device when
    it has a wifi connection and be denied if the connection is a data
    limited 3g connection.
-   a policy based on locality, such as you may only want a bluetooth
    service to operative when you are at a particular geographic
    location.
-   a policy based on the identity of a wifi service, you may only want
    certain media sharing to occur on you home wifi and not the
    corporate wifi.

To enable a policy writer to develop policies which take account of
environmental considerations, we need to have several things in place.
Firstly we need to have a mechanism for the policy decision point to
have access to the necessary environmental variables it requires to make
a decision. Secondly, we should have a defined list of variable that
will always be available. Without both of these in place it is
impossible to write sensible policies as we will not know which
environmental properties we will have available to base the policy on.

The environmental properties that are used within a policy could be
referenced in two places in a XACML policy. The first place they could
be referenced is in the target section of a policy set, policy or rule.
In addition they could be referenced in the condition part of a rule.

A minimum set of environmental properties that should be considered
include:

-   Date
-   Time (and time zone)
-   Internet connection type

> -   wifi
> -   nG (3g/4g....)
> -   service identity if wifi

-   Device type (mobile phone, tablet, laptop, desktop, car etc)
-   GPS location (is available)

Type of policy file[¶](#Type-of-policy-file)
--------------------------------------------

### General policies[¶](#General-policies)

These policies relate to high level policy decisions such as always
denying Fred access to this zone.

### Application-specific Policies[¶](#Application-specific-Policies)

Each application could have a dedicated policy file.

### Manufacturer policies[¶](#Manufacturer-policies)

Policies provided by the manufacture that limit the user in some way.
This may be to prevent the user from making unsafe changes by accessing
certain functions. There are issues surrounding how these policies are
secured and prevented form being modified by a general user.

Provision of policies by a third party[¶](#Provision-of-policies-by-a-third-party)
----------------------------------------------------------------------------------

When installing an application a choice should be given to the user
about how they wish to define the access control policy for that
application. The choices could be:

-   Define their own policy for the application.
-   Use a default policy that is bundled with the application.
-   Download a default policy from a trusted third party supplier of
    policies for applications.

Here we will only consider the third party supply of policies.

For a trusted third part to able to supply standard access control
policies it will need to know the API calls (Note: Should this be API
calls or Service calls) that the application utilises. These calls need
to be categorised into those essential to provide the basic
functionality of the application as opposed to those that the
application would use for enhanced functions or recording activities.
With this information the trusted third party could supply a policy that
would be restrictive enough to be considered 'safe' to use, for a given
definition of 'safe'.

Simple delegation / abdication[¶](#Simple-delegation-abdication)
----------------------------------------------------------------

Language-level enforced delegation[¶](#Language-level-enforced-delegation)
--------------------------------------------------------------------------

Features that allow delegation to be controlled

Policy evaluation[¶](#Policy-evaluation)
----------------------------------------

If a multiple policy hierarchy is adopted then the policy decision point
needs to enforce this.

If we adopt the practice of having multiple policy files which relate to
concerns that may be overlapping, we need to define a standard
methodology of evaluation.\
The order of evaluations will be important, as a user may give rights
that a manufacture would prefer not to give.\
It is also important to have a mechanism in place that allows a policy
that is given '\_priority\_' to make one of several access control
decisions. THe obvious ones are:

-   **Permit** - allow the requester to perform this operation with this
    resource
-   **Deny** - Do not allow this operation on this resource to be
    performed by the requestor.
-   **Not Applicable** - allow a policy further down the chain decide.
-   **Deny but allow override** - If no policy has a definite policy
    decision about this request then deny otherwise use the subsequent
    policy decision. Additional constraints could be imposed on this
    form of 'delegation' by using the obligation mechanism.

If there is to be a hierarchy of policy files, this will need to be
defined within the policy decision point (PDP). The PDP will need to
read each policy set in order and decide on the subsequent action
depending on the result of the evaluation of the request against the
current policy set.

If we make an assumption that the hierarchy will be something like:

1.  Manufacturers policy
2.  Users Global policy
3.  Applications policy

With this hierarchy we could adopt the idea proposed by SV.

[SV] Let’s suppose we have the following policy files: manufacturer,
user and various application policies. Our idea (Andrea and Cesare
please confirm) is that first you check manufacturer policy: if it
denies access, then the result will be a deny; if it allows (or prompts)
then you check another policy file: if the request was from a specific
app you check the corresponding policy app, otherwise you check the user
policy.\
The meaning of all this is that the manufacturer (or another authority)
can deny some functionalities of your device and the user cannot
overwrite this rule (the example is a limited access to vehicle api on a
bmw car).

Decisions that would have to be made which would include determining if
the user policy took precedence over the application policy.

There are inherent difficulties with ensuring that the manufactures
policy is considered. Firstly it could be deleted or manually edited.
There may be methods utilising trusted platform techniques, which are
beyond the scope of this section.

Other notes[¶](#Other-notes)
----------------------------

[SV] This policy can be easily written; on device D there will be a
policy that says: if request for Feature F comes from user U, app A and
device X then allow/deny/prompt… All this is in a single file:\

     1 <policy combine="first-applicable" description=" ">
     2     <target>
     3         <subject>
     4             <subject-match attr="used-id" match="U"/>
     5             <subject-match attr="id" match="A"/>
     6             <subject-match attr="requestor-id" match="X"/>
     7         </subject>
     8     </target>
     9     <rule effect="permit">
    10         <condition combine="and">
    11             <resource-match attr="api-feature" match="F"/>
    12         </condition>
    13     </rule>
    14 </policy>

### Policy hierarchy[¶](#Policy-hierarchy)

[SV] Let’s suppose we have the following policy files: manufacturer,
user and various application policies. Our idea (Andrea and Cesare
please confirm) is that first you check manufacturer policy: if it
denies access, then the result will be a deny; if it allows (or prompts)
then you check another policy file: if the request was from a specific
app you check the corresponding policy app, otherwise you check the user
policy.\
The meaning of all this is that the manufacturer (or another authority)
can deny some functionalities of your device and the user cannot
overwrite this rule (the example is a limited access to vehicle api on a
bmw car).

### To Prompt or Not[¶](#To-Prompt-or-Not)

The model for prompting appears to assume that any prompt will currently
be responded to in a timely fashion and give a synchronous response to
the requestor. Is there currently a timeout for the request for an
access control decision?

Should we really extend the XACML list of effects with the various
prompts. I feel that the same overall result could be achieved by using
the obligation mechanism which is a part of the XACML specification. The
obligation could request that the enforcement point provides a prompt
but it would be associated with an actual access control decision.

Prompt blanket

if prompt is the access decision - then it checks for decisions that
have been stored previously

