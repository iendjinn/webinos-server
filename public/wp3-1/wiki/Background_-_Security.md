Background - Security and Privacy[¶](#Background-Security-and-Privacy)
======================================================================

Introduction[¶](#Introduction)
------------------------------

One of the primary aims of webinos, and of future internet projects in
general, is to provide a secure, privacy-preserving internet experience.
There are many well-documented problems with security on web
applications and the web in general, including weak authentication
([BICH11](BICH11.html)) and numerous forms of content injection attacks
([OWASP10](OWASP10.html)). Furthermore, mobile devices contain enormous
amounts of private and confidential information, the protection of which
is paramount for both business and home users. The webinos project has
many of the same problems and, by creating a joined-up cross-device
application infrastructure, it could be argued that there was an
increased potential for harm: attackers - such as the webinos personas
Ethan ([D027-Ethan](D027-Ethan.html)) and Frankie
([D027-Frankie](D027-Frankie.html)) - could potentially steal valuable
data or the end user's identity on every device they own. Furthermore,
webinos has multiple stakeholders with different security requirements.
Some of these produce contradictions, for example a developer - such as
the Jimmy persona ([D027-Jimmy](D027-Jimmy.html)) - may want to find out
demographic data and take advantage of analytics to profile users,
whereas users such as Helen ([D027-Helen](D027-Helen.html)) wish to
preserve their private information. These factors, as well as the
diverse number of devices that may be supported by webinos, means that a
sound security architecture is of vital importance to the webinos
system.

Presumably the webinos personas are mentioned in your methodology
section? (John)

However, the security architecture is also an opportunity to make a
significant contribution to the current state-of-the-art in mobile
application security and privacy. By introducing a standardised and
robust security framework, webinos can potentially increase security and
privacy on the four device domains simultaneously. Part of this is due
to the fundamental webinos vision of creating a standardised application
environment: by providing a unified user interface for making access
control decisions, webinos will significantly increase usability and
therefore encourage users to make better (and more privacy-friendly)
security decisions. This is one place in which existing application
architectures are fragmented, as the major mobile operating systems such
as iOS and Android have different security models, making the experience
less familiar and potentially discouraging users from expressing their
privacy preferences. The current systems have also been criticised for
having an "all or nothing" approach, with Android and iOS requiring that
applications are installed with access to all features the developer
asked for, or not installed at all. This has proven unpopular with
users, with alternative Android systems appearing which offer the
revocation of privileges ([DEME11](DEME11.html)). It has also been noted
that many applications request more privileges than they need. This
means that users are not as cautious of applications which request many
privileges as they should be. Webinos is well positioned to provide
better solutions than the current state of the art.

The webinos security and privacy architecture is fully outlined in
deliverable ([D035](D035.html)) but the essential functional components
of the policy enforcement mechanism are explained in this document.
Implementing a policy enforcement mechanism requires several novel
features, including:

1.  Support for flexible access control policies referring to all APIs
    and data sources on the webinos platform
2.  Policies which can refer to cross-device interaction, both inside a
    webinos "personal zone" and between users with no prior trust
    relationship
3.  Synchronisation of access control policies between devices within
    the webinos personal zone
4.  Connecting application requests to privacy policies, so that users
    can make well-informed decisions about their personal privacy.

The security policy system builds on work from WAC ([WAC](WAC.html)) and
BONDI ([BONDI](BONDI.html)) and is based on the XACML language and
architecture ([XACML](XACML.html)).

Scope[¶](#Scope)
----------------

### What's in scope[¶](#Whats-in-scope)

This document describes the policy architecture for webinos, and covers
the following topics:

-   Access controls for applications. This includes permissions for:
    -   Device APIs, such as features, location services and cameras
    -   Other devices, both inside and outside of the personal zone
    -   Remote content and services
    -   Personal profile data
    -   Other applications on the same device and on other devices
-   Policy synchronisation between a users' devices
-   Privacy data-usage policies and obligations for applications
-   Application trust chains and certificates

Details on authentication and user identity management are also included
in this deliverable in later sections.

### Whats out of scope[¶](#Whats-out-of-scope)

The following issues are not included in this document, but are covered
either in another deliverable D03.5 or in the second phase of webinos
specification:

-   Remote management of devices and remote policy enforcement (phase
    2).
-   Implementation details for the protection of applications and the
    webinos runtime during use (recommendations in D03.5, further
    details in phase 2).
-   Platform integrity reporting and attestation (specified in D03.2 and
    discussed in D03.5)
-   Integration with social networking for more usable policies (phase
    2)
-   User interface specifications for policy editing and resolution
    (phase 2 and D03.5)
-   Digital rights management and content protection (phase 2).
-   Detailed specifications of privileged applications (D03.5)

Review of State of the Art[¶](#Review-of-State-of-the-Art)
----------------------------------------------------------

There is a great deal of existing work in access control in general and
mobile platforms specifically. A comprehensive summary of related work
to security is covered in deliverables D02.7, D03.5 and D03.6.

Recommendations from state of the art[¶](#Recommendations-from-state-of-the-art)
--------------------------------------------------------------------------------

The security architecture, much like the rest of the webinos
specification, has been designed to reuse as much existing technology as
possible. This is particularly important in security, as creating new
designs and writing new code will introduce new design flaws and
vulnerabilities. Many existing solutions have already undergone
extensive testing and will have been patched to fix many outstanding
issues. Therefore, we have built primarily on the existing WAC
specifications and the general XACML architecture. From the analysis, we
can see that these already solve many problems in webinos - such as
mediating access to device features - but must be modified to support
new requirements.

However, we can also improve on WAC designs by implementing features
such as privacy policies which remained underspecified. We propose to
take advantage of the work produced by the PrimeLife project to create
usable policies which protect user privacy.

### Privilege Apps and Services (Access Control)[¶](#Privilege-Apps-and-Services-Access-Control)

31 Deliverable Background Privileged Apps[¶](#31-Deliverable-Background-Privileged-Apps)
========================================================================================

Background[¶](#Background)
--------------------------

Introduction:[¶](#Introduction)
-------------------------------

**Scope**:

The scope of this section is to provide Access Control or Privileged
Apps and Services specifications. The objective of this section is to
recommend a security solution for implementation using the Privileged
Apps and Services concept in webinos project. The use of the concept of
Privileged Apps and Services is an important factor in webinos. A
webinos application will be signed with a certificate that is in the
privileged certificate store on the device. Target an application based
on its Digital Certificate and there shall be policies assigned to these
applications.

Privileged applications are those apps that request additional
capabilities, e.g. access to a location or to restricted data such as
your contacts, vehicle engine details. Although these kinds of
applications also require access to special APIs like an automotive or
home media app and the access to these APIs has to be granted by
administrator or a privileged user, these applications shall focus on
the management of the webinos runtime.

A privilege management creates, stores, and manages the attributes and
policies needed to establish criteria that can be used to decide whether
a user’s request for access to some resource should be granted. Access
control uses the data made available by authentication, privilege
management, and other information provided by the access request
provider, such as the form of access requested to make an access control
decision.

The design principles for the privileged architecture in this section
are:

1.) Guarding against threats that access critical data.\
2.) Establishing levels of security for data and other resources by
using Policies.\
3.) Implement dashboard, installer, launcher, and policy manager.\
4.) Allow direct control over API access by the API provider. E.g., a
car manufacturer can write engine monitoring APIs and allow them to
access only via the car manufacturer signed applications. Let there be a
signed certificate, Identity and Integrity checks for widget based Apps.
Protection and Security from hacks at the runtime and accessing
sensitive API's. To support these Cryptographic methods, Encryption code
be used. The Apps are signed and confirmed by the Device Manufacturer
when using Sensitive API's and Critical data, the Monitoring system
checks and manages that there is no access to critical data like Engine
Diagnose API's and HW data.\
5.) The Privileged Apps and Services shall provide information related
to Date, Event ID, Event Description, Username, Parent PID, Policy,
Application Group, Reason, Custom Token, Filename/Codebase, Type,
Instances, Description, and Certificate.

Two ways of using Privileged Apps and Services in webinos for security
purpose:\
1.) Enforce access control policies at the Runtime Environment.\
2.) An Application which uses system commands and classes which manages
the OS services, access rights, registries, roles based on the users and
so on.

State-of-the-Art:[¶](#State-of-the-Art)
---------------------------------------

In the state-of-art analysis we are going to evaluate different
solutions for Privileged Apps and Services(Access Control) in webinos
such as:\
[W3C](http://dev.w3.org/2009/dap/perms/FeaturePermissions.html)\
[WAC](http://public.wholesaleappcommunity.com/redmine/embedded/wac2pubrev/core/widget-security-privacy.html)\
"Android":
<http://developer.android.com/reference/android/Manifest.permission.html>\
"BONDI":
<http://bondi.omtp.org/1.01/security/BONDI_Architecture_and_Security_v1_01.pdf>\
Privileged Application in JavaScript and provide a recommendation, which
solution shall be incorporated into the webinos runtime.

The working of XACML with Privilege Apps and Services (Access Control):[¶](#The-working-of-XACML-with-Privilege-Apps-and-Services-Access-Control)
-------------------------------------------------------------------------------------------------------------------------------------------------

The deployment of the XACML access control system SHALL work:

• A User seeks access to some resource and submits a query to the entity
(Policy Enforcement Point (PEP)) protecting the resource.\
• The PEP forms a request (using the XACML request language) based on
the attributes of the subject, action, resource, and other relevant
information.\
• The PEP then sends this request to a Policy Decision Point (PDP) that
examines the request, retrieves policies (written in the XACML policy
language) that are applicable to this request, and determines whether
access should be granted according to the XACML rules for evaluating
policies.\
• The answer (expressed in the XACML response language) is returned to
the PEP, which can then allow or deny access to the requester.

**Policy Language and Enforcement**

-   The implementation of a policy system requires to choose algorithms
    for reconciling conflicting policies. It should independently
    administer multiple policies controlling access to the same
    resources.
-   An efficient way of locating all the policies that are potentially
    applicable to a given decision.

Scope of Privilege Apps in different areas in webinos:[¶](#Scope-of-Privilege-Apps-in-different-areas-in-webinos)
-----------------------------------------------------------------------------------------------------------------

**Authentication and Authorization**:

-   Grant security properties, like authorization and access control
    like what resources the user can access.
-   The logging of the Authentication to the personal zone (user
    authentication with the personal zone hub). The Notification and
    keeping track of the Personal zone identity and personal zone
    proxies.
-   Running retrieve data in privilege app space.
-   Updating user credential information such as password, certificates.
-   Enable access to recorded decisions when the user isn't available in
    real time.

**Authorization and Privilege**:

-   common authorization model for all the trust domains.
-   Common language for expressing security policies.
-   Support of authorizations at all levels of granularity.
-   Storing Authorization in a safe and protected place if they are not
    digitally signed
-   Identify applications which have been granted particular privileges.
-   List of all their webinos applications for the users.
-   Restrictions of the access control policies on applications from
    potentially malicious applications.
-   Ensuring that only trusted components are downloaded
-   Delegate decisions to a trusted third party when appropriate.

**Discovery**:

-   The access control should check whether the address, devices or
    services are valid or not.
-   If service driver is required to be installed for the device,
    privilege application should support the driver.
-   Device visibility control, device in multicast mode could be passive
    or active listener.
-   Access control to access different file system area and obtain user
    credentials information.
-   Specify a access format.

**Context**:

-   Defining Policies to access his (photo, photo-album, a playlist) and
    other stuffs across other webinos devices.
-   Grant and retrieve the data and the Policies based on Context.
-   Storing of device context in file system.
-   Review and manage which applications users have granted permissions
    to, and in what context.
-   Policies based on Subjects and Resources

Phase 2: Tasks in the scope of Privilege Apps and Services:[¶](#Phase-2-Tasks-in-the-scope-of-Privilege-Apps-and-Services)
--------------------------------------------------------------------------------------------------------------------------

The PZP can handle many devices and multiple Users So there should be
certain level of Permissions enforced to on a particular user for
viewing, editing files, modifying system files. Similarly, there may be
certain web apps which would try to access the restricted registry
files, drivers or at the kernel level.

So the Owner of the Device can permit privileges can delete files, view
private information, or install unwanted programs.

**Most Privileged**:\
when the user or process is able to obtain a higher level of access than
an administrator or system developer intended, possibly by performing
kernel-level operations

• An attacker may then be able to exploit this assumption so that
unauthorized code is run with the application's privileges.

• Some services are configured to run under the Local System user
account. A vulnerability such as buffer overflow may be used to execute\
 arbitrary code with privilege elevated to local system.

• Any User which accesses binary in the file system or Registry can
therefore elevate privileges.

• core dump be performed in case it crashes and then have itself killed
by another process.

• Cross Zone Scripts should be identified so that the running of the
malicious code on the client side can be prevented.

**Least Privileged**:

Least Privileged: An application allows to gain access to resources that
normally would have been protected from an application or user. The
application would perform actions but different security context than
intended by the application developer or Administrator.

**RBAC - Role Based Access Control**:

RBAC is an approach to restricting system access to authorized users.
The permissions to perform certain operations are assigned to specific
roles. The webinos shall provide a RBAC model where the Privileged Users
are assigned particular roles, and through these role assignments
acquire the permissions to perform particular system functions. Since
users are not assigned permissions directly, but only acquire them
through their role (or roles), management of individual user rights
becomes a matter of simply assigning appropriate roles to the user; this
simplifies common operations, such as adding a user devices, or changing
a user's role.

Three primary rules are defined for RBAC:\
1. Role assignment: A subject can execute a transaction only if the
subject has selected or been assigned a role.\
2. Role authorization: A subject's active role must be authorized for
the subject. This rule ensures that users can take on only roles for
which they are authorized.\
3. Transaction authorization: A subject can execute a transaction only
if the transaction is authorized for the subject's active role. With
rules 1 and 2, this rule ensures that users can execute only
transactions for which they are authorized.

**Areas to Consider**:

-   If a subject has roles R1 , R2, ... Rn enabled, can subject X access
    a given resource using a given action?
-   Is subject X allowed to have role Ri enabled?
-   If a subject has roles R1 , R2, ... Rn enabled, does that mean the
    subject will have permissions associated with a given role R'? That
    is, is role R' either equal to or junior to any of\
     roles R1 , R2, …Rn?

**Access Control Matrix**

It would be important for webinos to include the Access Control Matrix
it is a useful model for understanding the behavior and properties of
access control systems. This matrix defines the trust relationships
between the control domains and sub-domains. The implementation of the
access control matrix can be based on a combination of Access Control
Lists, permission files, and an enforcement engine, such as Java’s
Security Manager and Access Controller. Policies are based on the
relationships defined in the Access Control Matrix.

Types of accesses that are necessary to define the relationships between
the objects and subjects in webinos.

1.  File Access, which includes the following permissions: Read, Write,
    and Execute.
2.  Message Access, which is necessary because of the need to control
    the exchange of messages between trusted and non-trusted domains and
    subjects. Message Access includes the following permissions: Send
    and Receive.
3.  Process Access, which controls the start and termination of
    processes such as Core Software Download, including the following
    permissions: Initiate, and Terminate.
4.  Key Accesses. This access type includes Create and Use

Examples showing the Policy Enforcement Point in Mobile Platform and in the High Level Vehicle Bus Infrastructure:[¶](#Examples-showing-the-Policy-Enforcement-Point-in-Mobile-Platform-and-in-the-High-Level-Vehicle-Bus-Infrastructure)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Policy Enforcement Point in Mobile Platform:[¶](#Policy-Enforcement-Point-in-Mobile-Platform)

![Mobile\_Access
Control](/redmine/attachments/download/698 "Mobile_Access Control")

The security features and the policies supported by the Mobile device
are enabled or enforced in the Policies and Privilege services layer
which extends Java’s 'SecurityManager' and 'AccessController' classes.
At runtime, the Policies and Privilege services layer decides what
policies are to be enforced and what privileges can be applied when a
connection request is made. Based on the domain, device, device type and
whether the domain or device is trusted or un-trusted, the Privilege
layer can enforce application level authentication, encryption of the
session and any other specific access policies. For the Information
regarding the services that the decision is to be are available in the
manifested files and are described in hash of Policy files that are
stored securely.

The Privilege services layer provides security services:

• The Privilege Monitor stores event logs in its registers for auditing
purposes.\
• The Privilege Apps and services will provide cryptographic services,
to include asymmetric key generation, digital signatures, hashing, and
encryption.\
• The key used during access control can be securely stored using the
Certificate store’s Secure Key Storage capabilities.\
• The runtime Privilege Apps auditing functions will make full use of
the registers, Secure Data Storage, and Session Storage capabilities.

### Example for Policy Enforcement Point in High Level Vehicle Bus Infrastructure for IVI:[¶](#Example-for-Policy-Enforcement-Point-in-High-Level-Vehicle-Bus-Infrastructure-for-IVI)

![High Level Vehicle Bus
Infrastructure](/redmine/attachments/download/699 "High Level Vehicle Bus Infrastructure")

This example illustrates the Policy Enforcement Point in a High Level
Vehicle Bus Infrastructure. The in-car headunit is basically an in-car
PC connected to the infotainment bus. All infotainment relevant control
units such as the cd changer, telephone, gps module are connected to
this bus and can communicate with each other on this bus by sending
messages. At BMW MOST driver is being used as the infotainment bus (for
more information on MOST Bus see this link:
<http://en.wikipedia.org/wiki/MOST_Bus>. This infotainment bus is
connected to the Common Gateway (CGW). To this central gateway all other
vehicle buses (e.g., High speed CAN or comfort CAN) are connected as
well. At the CGW some messages from the ‘Comfort-CAN’ and ‘High Speed
CAN’ (e.g., speed, wiper status, climate) are converted to MOST messages
and routed into the MOST bus.

The MOST bus transports control data as well as data from audio, video,
navigation and other services. MOST technology provides a logical
framework model for control of the variety and complexity of data. The
MOST Application Framework organizes the functions of the overall
system. MOST is able to control and dynamically manage functions that
are distributed in the vehicle.

There are two places to enforce the access to the vehicle data. We can
place the enforcement point inside the webinos runtime: When an app
calls a specific vehicle function, the runtime checks back with a PDP,
if the access is allowed or not. If allowed, the request is pushed to
the OS service to create a MOST message and put it onto the bus. At the
OS service (before we built the MOST message for this request) we could
also check back with the PDP, if the access is allowed or not.

Technical use cases[¶](#Technical-use-cases)
--------------------------------------------

This section includes the Technical use cases and requirements
identified from the WP2.1 and WP2.2 in the area of Privileged Apps and
Services.

### User Stories, Use Cases Identified:[¶](#User-Stories-Use-Cases-Identified)

**Related User Stories**

WOS-US-7.1: Designing Policy-aware webinos Applications\
WOS-US-7.4: Privacy Controls and Analytics for Corporations and Small
Businesses

**Related Use Cases**

• WOS-UC-TA8-002: Interpreting policies and making access control
decisions\
• WOS-UC-TA8-003: Enforcing multiple policies on multiple devices\
• WOS-UC-TA8-007: Policy authoring tools\
• WOS-UC-TA4-013: Dynamically Sharing Content with other Users in a
Controlled Manner\
• WOS-UC-TA6-00X: Checking access to APIs – Refers to Content Adaption\
• WOS-UC-TA1-008: Webinos Federation\
• WOS-UC-TA4-014: Continuous sharing of a medical file through webinos
enabled devices\
• WOS-UC-TA7-008: Create contexts from a pre-defined template

**This section of the specification aims to satisfy the following
requirements**:

• PS-USR-Oxford-50\
• PS-USR-Oxford-51\
• PS-USR-Oxford-116\
• PS-DEV-ambiesense-08\
• PS-USR-TSI-4\
• PS-DWP-ISMB-202\
• PS-USR-Oxford-35\
• PS-USR-Oxford-38\
• PS-USR-Oxford-115\
• PS-USR-Oxford-72\
• PS-USR-Oxford-36\
• PS-USR-Oxford-34\
• PS-USR-Oxford-5\
• PS-USR-Oxford-17\
• PS-DEV-Oxford-28\
• PS-USR-TUM-\*(124)

### Privileges and Access Control Use Case and Requirements identified:[¶](#Privileges-and-Access-Control-Use-Case-and-Requirements-identified)

**Policy management, authoring and usage features**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf Users                 WOS-UC-TA9            UI, Policy 
  ord-50     SHALL be              -006                  layer      
             provided                                               
             with the                                               
             ability to                                             
             identify                                               
             applicatio                                             
             ns                                                     
             which have                                             
             been                                                   
             granted                                                
             particular                                             
             privileges                                             

  PS-USR-Oxf Users                 WOS-UC-TA9            UI, Policy 
  ord-51     SHALL be              -006                  layer      
             able to                                                
             view a                                                 
             list of                                                
             all their                                              
             webinos                                                
             applicatio                                             
             ns                                                     
             and show                                               
             the                                                    
             authority                                              
             that                                                   
             certified                                              
             the                                                    
             applicatio                                             
             n                                                      
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Runtime Protection**:

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf The                                         WRE, APIs  Phase 1
  ord-116    Webinos                                                
             Runtime                                                
             Environmen                                             
             t                                                      
             SHALL                                                  
             protect                                                
             applicatio                                             
             ns                                                     
             and itself                                             
             from                                                   
             potentiall                                             
             y                                                      
             malicious                                              
             applicatio                                             
             ns                                                     
             and SHALL                                              
             protect                                                
             the device                                             
             from being                                             
             made                                                   
             unusable                                               
             or damaged                                             
             by                                                     
             applicatio                                             
             ns.                                                    
             The                                                    
             Webinos                                                
             Runtime                                                
             Environmen                                             
             t                                                      
             is a                                                   
             naturally                                              
             privileged                                             
             process                                                
             that                                                   
             should be                                              
             strongly                                               
             protected                                              
             from                                                   
             applicatio                                             
             ns.                                                    
             Furthermor                                             
             e,                                                     
             it must                                                
             prevent                                                
             applicatio                                             
             ns                                                     
             from                                                   
             misusing                                               
             device                                                 
             capabiliti                                             
             es                                                     
             when they                                              
             run.                                                   

  PS-DEV-amb The                   None                  WRE        Phase 2
  iesense-08 Webinos                                                
             runtime                                                
             environmen                                             
             t                                                      
             SHALL                                                  
             support                                                
             customised                                             
             encryption                                             
             of any                                                 
             data                                                   
             stream                                                 
             (independe                                             
             nt                                                     
             of its                                                 
             data type                                              
             or format)                                             
             The main                                               
             threat is                                              
             anyone                                                 
             seeking                                                
             the                                                    
             informatio                                             
             n/                                                     
             data                                                   
             transferre                                             
             d                                                      
             in the                                                 
             data                                                   
             stream                                                 

  PS-USR-TSI Webinos                                     Policy     
  -4         shall                                       later, App 
             ensure                                      manifest   
             that only                                              
             trusted                                                
             components                                             
             are                                                    
             downloaded                                             
             ,                                                      
             and that                                               
             applicatio                                             
             ns                                                     
             are                                                    
             guaranteed                                             
             some level                                             
             of                                                     
             execution                                              
             (to                                                    
             prevent                                                
             from                                                   
             denial of                                              
             service)                                               
             Device                                                 
             integrity                                              
             – prevent                                              
             malware                                                
             compromisi                                             
             ng                                                     
             reliabilit                                             
             y +                                                    
             conf. +                                                
             availabili                                             
             ty.                                                    
             QoS. This                                              
             implies                                                
             knowledge                                              
             of the                                                 
             components                                             
             that are                                               
             trusted?                                               

  PS-DWP-ISM The        Moved from WOS-UC-TA6            WRE, APIs  
  B-202      Webinos    LC         -00X:                            
             runtime               Checking                         
             MUST                  access to                        
             ensure                APIs                             
             that an                                                
             applicatio                                             
             n                                                      
             does not                                               
             access                                                 
             device                                                 
             features,                                              
             extensions                                             
             and                                                    
             content                                                
             other than                                             
             those                                                  
             associated                                             
             to it.                                                 
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Policy management, authoring and usage features**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf Webinos    This       \*                    WRE,       
  ord-35     access     implies    WOS-UC-TA9            Policy     
             control    that       -002:                 layer      
             policies   applicatio Interpreti                       
             shall be   n          ng                               
             able to    instances  policies                         
             specify    are        and making                       
             fine-grain identifiab access                           
             ed         le         control                          
             controls              decisions                        
             involving                                              
             the source                                             
             and                                                    
             content of                                             
             an access                                              
             control                                                
             request                                                

  PS-USR-Oxf Webinos    See WAC.   \*                    Policy     
  ord-38     SHALL                 WOS-UC-TA9            layer      
             allow                 -002:                            
             policies              Interpreti                       
             which                 ng                               
             specify               policies                         
             confirmati            and making                       
             on                    access                           
             at runtime            control                          
             by a user             decisions                        
             when an                                                
             access                                                 
             request                                                
             decision                                               
             is                                                     
             required                                               
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Application policies and protection**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf Webinos                                     APIs,      
  ord-115    SHALL                                       Apps, Dev  
             encourage                                   tools      
             good                                                   
             design                                                 
             techniques                                             
             and                                                    
             principles                                             
             so users                                               
             are not                                                
             forced to                                              
             accept                                                 
             unreasonab                                             
             le                                                     
             privacy                                                
             policies                                               
             and access                                             
             control                                                
             policies.                                              
             Webinos                                                
             Applicatio                                             
             ns                                                     
             SHALL be                                               
             designed                                               
             with user                                              
             policy                                                 
             negotiatio                                             
             n                                                      
             and                                                    
             preference                                             
             s                                                      
             in mind.                                               

  PS-USR-Oxf The                   WOS-UC-TA4            WRE        Phase 2
  ord-72     Webinos               -013                             
             System                                                 
             SHALL                                                  
             support                                                
             applicatio                                             
             ns                                                     
             which                                                  
             apply                                                  
             access                                                 
             control                                                
             policies                                               
             to data                                                
             produced                                               
             or owner                                               
             by the                                                 
             applicatio                                             
             n                                                      
             developer.                                             
             These                                                  
             policies                                               
             MAY                                                    
             support                                                
             revocation                                             
             of access                                              
             control                                                
             permission                                             
             s                                                      

  PS-USR-Oxf Webinos               \*                    WRE,       Phase 1
  ord-36     APIs shall            WOS-UC-TA9            Policy     
             provide               -002:                 layer      
             error                 Interpreti                       
             results               ng                               
             when an               policies                         
             access                and making                       
             control               access                           
             request is            control                          
             denied                decisions                        
             Developers                                             
             SHALL be                                               
             aware of                                               
             how to                                                 
             program                                                
             for                                                    
             graceful                                               
             handling                                               
             of access                                              
             control                                                
             requests.                                              

  PS-USR-Oxf Webinos               \*                    WRE        Phase 1
  ord-34     shall                 WOS-UC-TA9                       
             provide               -002:                            
             complete              Interpreti                       
             mediation             ng                               
             of access             policies                         
             requests              and making                       
             by                    access                           
             applicatio            control                          
             ns                    decisions                        
             and                                                    
             enforce                                                
             all                                                    
             policies                                               
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Device discovery, communication and authentication**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf The level             \*                    Policy     
  ord-5      of                    WOS-UC-TA1            layer,     
             authority             -008:                 Comms      
             associated            Webinos                          
             with a                Federation                       
             client                                                 
             Webinos                                                
             device                                                 
             SHALL be                                               
             establishe                                             
             d                                                      
             before an                                              
             associatio                                             
             n                                                      
             is                                                     
             establishe                                             
             d                                                      
             with a                                                 
             Webinos                                                
             cloud. How                                             
             is                                                     
             authorisat                                             
             ion                                                    
             and access                                             
             control                                                
             defined by                                             
             Webinos?                                               

  PS-USR-Oxf The                   \*                    WRE, UI,   
  ord-17     Webinos               WOS-UC-TA4            Policy     
             Runtime               -014:                            
             Environmen            Continuous                       
             t                     sharing of                       
             SHALL be              a medical                        
             capable of            file                             
             setting               through                          
             dynamic               webinos                          
             access                enabled                          
             control               devices                          
             policies                                               
             for device                                             
             data when                                              
             initiating                                             
             an                                                     
             associatio                                             
             n                                                      
             to another                                             
             Webinos                                                
             Device.                                                
             What                                                   
             format do                                              
             these                                                  
             access                                                 
             rules                                                  
             take?                                                  
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Sharing and protecting personal and contextual data**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-DEV-Oxf The                   \*                    WRE, API,  Phase 1
  ord-28     Webinos               WOS-UC-TA7            Policy     
             Runtime               -008:                 layer      
             SHALL                 Create                           
             provide               contexts                         
             access                from a                           
             control               pre-define                       
             for                   d                                
             context               template                         
             structures                                             
             with                                                   
             user-defin                                             
             ed                                                     
             policies                                               
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Privilege apps for Device Manufactures**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-TUM webinos    Let there  \*                    Comms, WRE 
  -\*(124)   SHALL      be a       WOS-UC-TA8                       
             provide    signed     -002:                            
             privileged certificat Interpreti                       
             apps and   e,         ng                               
             services   Identity   policies                         
             to support and        and making                       
             the trust  Integrity  access                           
             based      checks for control                          
             factor for widget     decisions                        
             the device based                                       
             manufactur Apps.                                       
             ers,       Protection                                  
             for the    and                                         
             applicatio Security                                    
             ns         from hacks                                  
             that       at the                                      
             access     runtime                                     
             wide range and                                         
             of         accessing                                   
             critical   sensitive                                   
             informatio API's. To                                   
             n          support                                     
             from       these                                       
             vehicle    Cryptograp                                  
             data,      hic                                         
             mobile,    methods,                                    
             setupbox   Encryption                                  
             will have  code SHALL                                  
             to be      be used.                                    
             approved   The Apps                                    
             by the     SHALL be                                    
             manufactur signed and                                  
             er         confirmed                                   
             of the     by the                                      
             device     Device                                      
                        Manufactur                                  
                        er                                          
                        when using                                  
                        Sensitive                                   
                        API's and                                   
                        Critical                                    
                        data,                                       
                        there                                       
                        SHALL be a                                  
                        Monitoring                                  
                        system                                      
                        which                                       
                        checks and                                  
                        manages                                     
                        that there                                  
                        is no                                       
                        access to                                   
                        critical                                    
                        data like                                   
                        Engine                                      
                        Diagnose                                    
                        API's and                                   
                        HW data.                                    
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Note**:

-   The geolocation could possibly be also provided by the vehicle API,
    but we have already the Geolocation API.
-   Applications using the vehicle API have to be approved by the
    manufacturer of the vehicle/Device. If the application is not
    approved, then the application cannot access the vehicle API.

References[¶](#References)
--------------------------

    Should this go in a global references section?

Yes and no. For the Wiki, it's much more convenient to have the
informatiobn 'local' to the chapter. For the formal Word/PDF
deliverable, I'll copy it to a global reference section. (Christian
Fuhrhop)

So what would you like me to do?

    TODO: order alphabetically.

### ZHOU11[¶](#ZHOU11)

Yajin Zhou, Xinwen Zhang, Xuxian Jiang and Vincent W. Freeh [Taming
Information-Stealing Smartphone
Applications](www.csc.ncsu.edu/faculty/jiang/pubs/TRUST11.pdf "on Android")
to appear in the proceedings of TRUST 2011: The 4th International
Conference on Trust and Trustworthy Computing, June 2011, Springer
Berlin.

### DEME11[¶](#DEME11)

Matt Demers [CyanogenMod Adds Support For Revoking App
Permissions](http://www.androidpolice.com/2011/05/22/cyanogenmod-adds-support-for-revoking-and-faking-app-permissions/)

### BICH11[¶](#BICH11)

Patrik Bichsel, Dave Raggett and Rigo Wenning [Web authentication is
deeply flawed, and it is time to fix
it](http://www.w3.org/2011/identity-ws/papers/bichsel-raggett-wenning.html)
presented at the W3C Workshop on Identity in the Browser, May 2011.

### OWASP10[¶](#OWASP10)

Jeff Williams and Dave Wichers [OWASP Top 10 Application Security
Risks - 2010. Risk A1:
Injection](https://www.owasp.org/index.php/Top_10_2010-A1)

### D027-Ethan[¶](#D027-Ethan)

[Ethan Attacker
Persona](/wp2-7/wiki/Ethan_AttackerPersona)
, From [D2.7: User expectations on Security and Privacy - Webinos
Project
Deliverable](/wp2-7/wiki/Deliverable)
, February 2011.

### D027-Frankie[¶](#D027-Frankie)

[Frankie Attacker
Persona](/wp2-7/wiki/Frankie_AttackerPersona)
, From [D2.7: User expectations on Security and Privacy - Webinos
Project
Deliverable](/wp2-7/wiki/Deliverable)
, February 2011.

### D027-Jimmy[¶](#D027-Jimmy)

[Jimmy Assumption
Persona](/wp2-7/wiki/Jimmy_AssumptionPersona)
, From [D2.7: User expectations on Security and Privacy - Webinos
Project
Deliverable](/wp2-7/wiki/Deliverable)
, February 2011.

### D027-Helen[¶](#D027-Helen)

[Helen Assumption
Persona](/wp2-7/wiki/Helen_AssumptionPersona)
, From [D2.7: User expectations on Security and Privacy - Webinos
Project
Deliverable](/wp2-7/wiki/Deliverable)
, February 2011.

### D035[¶](#D035)

[D3.5: Security Architecture - Webinos Project
Deliverable](/t3-5/wiki/Deliverable_Outline)
, June 2011.

### WAC[¶](#WAC)

[WAC 2.0 Core Specification - Widget Security and
Privacy](http://www.wacapps.net/web/portal/wac-2.0-spec) , January 2011.

### BONDI[¶](#BONDI)

[BONDI Architecture and Security
Requirements](http://bondi.omtp.org/1.01/security/BONDI_Architecture_and_Security_v1_01.pdf)
, July 2009.

### XACML[¶](#XACML)

[eXtensible Access Control Markup Language (XACML) Version
2.0](http://docs.oasis-open.org/xacml/2.0/access_control-xacml-2.0-core-spec-os.pdf)
, February 2005.

