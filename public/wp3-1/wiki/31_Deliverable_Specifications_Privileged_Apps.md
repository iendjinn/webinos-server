3.1 Deliverable Specifications Privileged Apps[¶](#31-Deliverable-Specifications-Privileged-Apps)
=================================================================================================

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

[Analysis - JavaScript, BONDI and Android](.html)

