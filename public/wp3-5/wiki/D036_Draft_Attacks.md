Attack Patterns Not Included in the Architectural Risk Analysis[¶](#Attack-Patterns-Not-Included-in-the-Architectural-Risk-Analysis)
====================================================================================================================================

Due to time constraints, the following attacks are documented but have
not been included in the full risk analysis. They are lacking obstacle
models and connection to system goals and architectural models. We
intend to add them to the CAIRIS system in the final year of the
project.

Misidentification of a PZH through disconnected TLS and HTTPS certificates.[¶](#Misidentification-of-a-PZH-through-disconnected-TLS-and-HTTPS-certificates)
-----------------------------------------------------------------------------------------------------------------------------------------------------------

#### Description[¶](#Description)

During enrolment of a PZP to a PZH, the user visits their PZH web
interface to collect a short authentication token. This web interface is
authenticated using standard web PKI and DNS. The enrolment process then
allows the PZP to connect to the same provider and present the token.
However, the PZP authentication process currently uses a different
certificate (the PZH certificate not the PZH provider web interface).
This is an opportunity for a man-in-the-middle attack. The same flaw may
be present when a PZH is first instantiated.

#### Details[¶](#Details)

  ----------------------- ---------------------------------------------------------------------------------------------------------------------------
  Attacker                Ethan
  Intent                  Automatically enrolling people to the wrong personal zone provider in order to capture and sell user data and credentials
  Motive                  Money
  Target asset            Personal data
  Exploit asset           PZP
  Target threat           CAPEC-272: Protocol Manipulation
  Exploit vulnerability   CWE-297: Improper Validation of Host-specific Certificate Data
  Known uses              None
  Related patterns        None
  ----------------------- ---------------------------------------------------------------------------------------------------------------------------

#### Consequences[¶](#Consequences)

This attack is based on a protocol flaw, and would be a vulnerability in
all deployments. As a result, any webinos user could be susceptible and
there could be widespread loss of data and credentials, affecting the
security of personal information and privacy loss.

### Participants[¶](#Participants)

  Attacker   Motives   Capabilities (Value)
  ---------- --------- ----------------------------------------------------------
  Ethan      Money     Technology (Low)/Knowledge/Methods(High), Software(High)

### Collaboration[¶](#Collaboration)

  --------- -----------------
  Target    Personal data
  Exploit   PZP Private Key
  --------- -----------------

### Implementation[¶](#Implementation)

TODO: Upload diagram

Ethan sets up a PZH. Users are then invited through means such as
phishing to enrol into the PZH. The PZH presents itself to the users as
a genuine PZH with the intention that it be misidentified.

### Obstacles[¶](#Obstacles)

  Obstacle                                                         Category        Definition
  ---------------------------------------------------------------- --------------- ------------------------------------------------------------------------------------------------------------------------------------------------
  Loss of credentials or data                                      Vulnerability   The credentials and data used by or stored on a PZP are stolen or accessed by unwanted parties
  PZP Enrolled in Wrong PZH                                        Vulnerability   A PZP is enrolled into a PZH which the user did not intend
  PZP presents credentials to PZH                                  Vulnerability   A PZP upon joining a PZH presents its credentials or credentials are synchronised as part of data synchronisation
  PZP synchronises its data with PZH                               Vulnerability   A PZP upon joining a PZH presents its credentials or credentials are synchronised as part of data synchronisation
  PZH Uses a Different TLS Certificate                             Vulnerability   A PZH uses a different TLS certificate from that used by the web server
  PZH Design allows disconnected TLS and web server certificates   Goal Support    A PZH is designed to allow the web server and TLS server to operate independently so that they can use different credentials
  Wrong Web Server Certificate                                     Vulnerability   The web server uses a wrong certificate or user ignores or fails to validate the certificate
  Correct URl But Wrong Underlying TLS Credentials                 Vulnerability   A PZH is accessed through the correct URL but its implementation uses different TLS credentials
  Incorrect PZH URL with False Credentials                         Vulnerability   The PZH URL accessed is the wrong one but the PZH presents false credentials that make it seem as though the user is accessing the correct PZH
  PZH Credentials Compromised                                      Vulnerability   Credentials stored or used by the PZH are compromised
  User Visits Wrong PZH URL                                        Vulnerability   A user visits the wrong PZH URL perhaps through redirection
  User Does Not Check PZH URL                                      Vulnerability   A user visits the wrong PZH URL without checking the actual address through redirection
  PZH Presents False Credentials                                   Vulnerability   A PZH presents credentials that seem to be correct to the user but are not genuine
  Automatically Redirected to URL                                  Vulnerability   A user is automatically redirected to some URL which she did not intend to visit
  PZH URL too complicated                                          Vulnerability   The PZH admin URL is complicated and easy to misread
  PZH URL displayed without prominence                             Vulnerability   The PZH admin URL bar is not visible or easy to miss
  Insufficiently Protected PZH Credentials                         Vulnerability   Credentials stored on the PZH are not adequately protected

#### Mitigations[¶](#Mitigations)

Make sure that the initial enrolment process identifies the PZH's TLS
certificates. Or, modify the underlying TLS certificate to use the PZH
provider's certificate rather than a different certificate.

Malicious service misuse[¶](#Malicious-service-misuse)
------------------------------------------------------

#### Description[¶](#Description)

Applications use the findService() call to find services of a particular
type. It is expected that applications will then present these services
to the user for them to select.

However, an application doesn't need to obey the user's intentions and
might invoke a different service to the one selected. Indeed, this might
be because the user is intentionally *not* selecting a service for
security reasons. E.g., the user may select a storage service with only
media files, but the application may then access files elsewhere.

The policy system can only handle this if policies refer to services at
a finer granularity rather than API types + devices.

One motivation for this attack could be corporate espionage: an
application used for a business purpose could attempt to find out extra
information from the end user.

#### Details[¶](#Details)

  ------------------------------------ ------------------------------------
  Attacker                             Jessica

  Intent                               Obtain private and confidential user
                                       information from APIs based on user
                                       anti-preferences

  Motive                               Money

  Target asset                         Personal data

  Exploit asset                        Discovery API and Policy manager

  Target threat                        

  Exploit vulnerability                

  Known uses                           None

  Related patterns                     None
  ------------------------------------ ------------------------------------

#### Consequences[¶](#Consequences)

Users unintentionally share information they had explicitly not wanted
to share or give an application access to.

#### Mitigations[¶](#Mitigations)

Restrict applications on the *service* rather than API level. Provide
visual clues as to which services an application may access.

The webinos botnet.[¶](#The-webinos-botnet)
-------------------------------------------

#### Description[¶](#Description)

Webinos is used to create a botnet. A botnet is often used to gain
personal data (credit card information, for example) en masse, or
perform DDoS attacks on target websites and web services. There are many
possible ways this could be done:

-   An implementation flaw is exploited in the widget renderer, which
    abuses its trusted relationship with the PZP to make arbitrary API
    requests and access remote services.
-   A method of enrolling rogue devices into personal zones is
    discovered which allows an attacker to join every personal zone.
    They can then install applications in every personal zone.
-   A PZP implementation flaw (perhaps a native API implementation) is
    exploited by an application in order to install native malware on
    the device. Because this API is commonly available, the malware
    spreads rapidly.
-   Native device malware (outside of webinos) steals PZP keys and
    credentials and is able to hijack the personal zone.

#### Details[¶](#Details)

These details concentrate on the possibility of an implementation flaw.

  ----------------------- -------------------------------------------------------------------------------------------------
  Attacker                Ethan
  Intent                  Create a large and powerful botnet and sell it to cybercriminals for DDoS or data theft.
  Motive                  Money
  Target asset            Personal data and the device runtime
  Exploit asset           PZP software, widget renderer, device software
  Target threat           CAPEC-8: Buffer Overflow in an API Call
  Exploit vulnerability   CWE-75: Failure to Sanitize Special Elements into a Different Plane (Special Element Injection)
  Known uses              None
  Related patterns        None
  ----------------------- -------------------------------------------------------------------------------------------------

#### Consequences[¶](#Consequences)

Loss of personal or payment data, loss of availability for a website or
service. Users being marked as 'malicious' by network providers
identifying the rogue traffic.

### Participants[¶](#Participants)

  Attacker   Motives   Capabilities (Value)
  ---------- --------- ----------------------------------------------------------
  Ethan      Money     Technology (Low)/Knowledge/Methods(High), Software(High)

### Collaboration[¶](#Collaboration)

  --------- ------------------
  Target    Personal data
  Exploit   Rendering Engine
  --------- ------------------

### Implementation\
TODO: Upload diagram[¶](#ImplementationTODO-Upload-diagram)

Ethan creates a webinos botnet and enrols several personal zones using
the following options: i) An implementation flaw is exploited in the
widget renderer, which abuses its trusted relationship with the PZP to
make arbitrary API requests and access remote services; ii) A method of
enrolling rogue devices into personal zones is discovered which allows
an attacker to join every personal zone. They can then install
applications in every personal zone; iii) A PZP implementation flaw
(perhaps a native API implementation) is exploited by an application in
order to install native malware on the device. Because this API is
commonly available, the malware spreads rapidly; iv) Native device
malware (outside of webinos) steals PZP keys and credentials and is able
to hijack the personal zone.

### Obstacles[¶](#Obstacles)

  Obstacle                                          Category                 Definition
  ------------------------------------------------- ------------------------ --------------------------------------------------------------------------------------------------------
  Personal data accessed and sold on black market   Vulnerability            An attacker accesses personal data in a personal zone and sells i on the black market
  Access Remote Services and arbitrary API calls    Vulnerability            An attacker after joining a personal zone, makes API calls that allow her to get the data she needs
  Personal Zone Enrolled in Botnet                  Vulnerability            A Personal zone is enrolled into a botnet without the consent of the owner
  Personal Zone Hijacked                            Vulnerability            A Personal zone is hijacked and now controlled by the attacker
  Attacker Joins Personal Zone                      Vulnerability            An attacker joins one or more personal zones
  PZH Credentials stolen                            Vulnerability            Credentials used and/or stored on the PZH are stolen
  PZP Credentials stolen                            Vulnerability            Credentials used to identify a PZP are stolen
  Attacker installs malware in the Personal Zone    Vulnerability            An attacker after joining a personal zone, installs malware on it
  Exploit Flaw in Widget Renderer                   Vulnerability            A flaw in the renderer engine is exploited by a malicious widget
  Insufficiently Protected PZP Credentials          Vulnerability            Credentials stored on a PZP are not adequately protected enabling malicious applications to steal them
  Insufficiently Protected PZH Credentials          Vulnerability            Credentials stored on the PZH are not adequately protected
  Malicious personal zone enrolment                 Vulnerability            A personal zone
  Native Malware Running on PZP                     Vulnerability            Malware has been installed in the native system on which a PZP runs
  Native Malware Installed on PZP                   Vulnerability            Malware has been installed in the native system on which a PZP runs
  Native Malware Running on PZH                     Vulnerability            Malware installed on the underlying system on which a PZH is installed is running
  Native Malware Installed on PZH                   Vulnerability            Malware has been installed in the native system on which a PZH runs
  Malicious code evaluated                          Vulnerability            Event handler evaluates malicious JSON content.
  Automate personal zone enrolment                  Accountability\_Threat   A device is enrolled into a personal zone without the use of an out-of-band channel.
  Disable valid personal zone proxy                 Accountability\_Threat   A valid device personal zone proxy is disabled
  Run multiple personal zone proxies                Accountability\_Threat   Valid and malicious personal zone proxies run on a single device.

#### Mitigations[¶](#Mitigations)

-   Careful design and implementation of APIs and protocols.
-   Sanitise all user or application-provided input
-   Isolate rendering components from privileged components.
-   Defence-in-depth: recommend that users have anti-malware tools and
    do not install arbitrary applications.
-   Review device enrolment implementation
-   Use hardware-based key storage, such as a Trusted Platform Module

TLS certificate management errors[¶](#TLS-certificate-management-errors)
------------------------------------------------------------------------

#### Description[¶](#Description)

The webinos platform might contain a buggy TLS certificate handling
implementation, resulting in authentication errors. E.g., accepting all
certificates or all hostnames, or not verifying the full certificate
path. This could allow a remote attacker to make them connect to invalid
PZH providers.

#### Sources[¶](#Sources)

ACM CCS Paper: "Why Eve and Mallory Love Android: An Analysis of Android
SSL (In)Security" (to appear) by Sascha Fahl, Marian Harbach, Thomas
Muders, Lars Baumgärtner, Bernd Freisleben, Matthew Smith. 2012

ACM CCS Paper: "The Most Dangerous Code in the World: Validating SSL
Certificates in Non-Browser Software." (to appear) by by M. Georgiev, S.
Iyengar, S. Jana, R. Anubhai, V. Shmatikov, and D. Boneh

#### Details[¶](#Details)

  ----------------------- -----------------------------------------------------------------------------------------------------------
  Attacker                Ethan
  Intent                  Use invalid TLS certificate checking to make users connect to the wrong personal zone hub and therefore
  Motive                  Money
  Target asset            Personal data
  Exploit asset           PZP connection manager
  Target threat           CAPEC-98: Phishing
  Exploit vulnerability   CWE-296, CWE-297, CWE-599. E.g., CWE-296: Improper Following of Chain of Trust for Certificate Validation
  Known uses              None
  Related patterns        None
  ----------------------- -----------------------------------------------------------------------------------------------------------

#### Consequences[¶](#Consequences)

User data and identity compromised.

#### Mitigations[¶](#Mitigations)

Review TLS implementations, enforce correct certificate handling.

Remote JavaScript includes[¶](#Remote-JavaScript-includes)
----------------------------------------------------------

#### Description[¶](#Description)

Taken from [You Are What You Include: Large-scale Evaluation of Remote
JavaScript
Inclusions](http://seclab.cs.ucsb.edu/media/uploads/papers/jsinclusions.pdf)

Remotely including javascript in web applications is dangerous as it is
a trust assumption many developers don't consider. Attacking one common
inclusion provider could attack multiple applications.

In this attack, we consider that Ethan might exploit a web server
hosting a popular JavaScript library imported by many trusted
applications.

Another option would be for an insider working on a popular JavaScript
library to insert an application-specific attack. this might be
fulfilled by Irwin.

#### Details[¶](#Details)

  ----------------------- ------------------------------------------------------------------------------------------------------------------------------------------------
  Attacker                Ethan
  Intent                  To gain access to multiple user devices to create a botnet or access personal data residing on a personal zone
  Motive                  Money
  Target asset            Personal data, personal zone
  Exploit asset           Application
  Target threat           CAPEC-444: Malicious Logic Insertion into Product Software via Externally Manipulated Component, CAPEC-96: Block Access to Libraries (related)
  Exploit vulnerability   CWE-114: Process Control
  Known uses              None
  Related patterns        None
  ----------------------- ------------------------------------------------------------------------------------------------------------------------------------------------

#### Consequences[¶](#Consequences)

All applications using and importing this library are compromised: their
access to APIs may be misused by the library editor to gain access to
personal data and resources. Users may suffer from data loss, identity
theft (applications could be overwritten to steal user data) and more.

#### Mitigations[¶](#Mitigations)

Disabling remote script invocation from external origins. Further, a
developer could specify that scripts may only be loaded if their
integrity matches an included checksum.

Misidentification of users requesting inter-zone certificate exchange[¶](#Misidentification-of-users-requesting-inter-zone-certificate-exchange)
------------------------------------------------------------------------------------------------------------------------------------------------

#### Description[¶](#Description)

Frankie pretends to be 'Bob' (one of Clara's friends) when requesting
access to Clara's personal zone. He does this at the certificate
exchange stage exploiting a potential lack of authentication of user
identities. Frankie does this because he is obsessed with Clara and
wants to find out more about her interests and track her activities to
arrange 'accidental meetings'.

#### Details[¶](#Details)

  ----------------------- -------------------------------------------------------------
  Attacker                Frankie
  Intent                  Access personal data, track activities
  Motive                  Stalking
  Target asset            Personal data
  Exploit asset           Certificate manager, PZH admin
  Target threat           CAPEC-196: Session Credential Falsification through Forging
  Exploit vulnerability   CWE-287: Improper Authentication
  Known uses              None
  Related patterns        None
  ----------------------- -------------------------------------------------------------

#### Consequences[¶](#Consequences)

Users may unwittingly add someone to their list of 'known users' based
on an invalid identification process and authentication. This could
result in data disclosure to unwanted entities which could cause
embarrassment, privacy loss, device damage, and more. This process could
form the basis of a large-scale attack on all webinos users, adding
invalid users to their personal zones.

#### Mitigations[¶](#Mitigations)

The webinos zone certificate exchange process requires users requesting
access to authenticate through their OpenID credentials which will tell
the PZH their email address. There are several attacks on this process,
but it should be possible to specify only OpenID providers who are
trusted, and make sure that the email address domain matches the OpenID
provider domain name. We also rely on users knowing each other's OpenID
email address or account URI. Alternative implementations might share
user identity via social networks (e.g. a Facebook plugin).

Intra-zone privacy: not sharing applications across the whole zone[¶](#Intra-zone-privacy-not-sharing-applications-across-the-whole-zone)
-----------------------------------------------------------------------------------------------------------------------------------------

#### Description[¶](#Description)

Justin has a PC and a smartphone. He shares his PC with his girlfriend,
sometimes, and so is careful to make sure that no embarrassing content
is ever displayed. However, on his smartphone he installs more risqué
applications and has a less savoury browsing history.

Unfortunately, webinos synchronises his settings and application
policies across all devices on his personal zone. When his girlfriend
goes to change some settings on his webinos-enabled PC, she realises he
has a "strip poker" application installed. A long argument ensues...

#### Details[¶](#Details)

  ----------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Attacker                None - misusability case. Arguably Justin's girlfriend or the webinos platform itself.
  Intent                  None - Justin is attempting to maintain his privacy and his girlfriend may accidentally impose on that
  Motive                  None - synchronisation of application identity and policy is used as part of the personal zone security system
  Target asset            Application data and Application identity
  Exploit asset           PZP
  Target threat           No clear mapping to CAPEC or OWASP
  Exploit vulnerability   Nothing perfect, but related - CWE-200: Information Exposure, CWE-612: Information Exposure Through Indexing of Private Data, CWE-668: Exposure of Resource to Wrong Sphere
  Known uses              None
  Related patterns        None
  ----------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Consequences[¶](#Consequences)

User embarrassment and privacy loss.

#### Mitigations[¶](#Mitigations)

Control synchronisation. Do not synchronise application manifests unless
necessary. Allow users to purge local data and settings of private
information. Restrict UI access to zone synchronisation data.

Unintentional privacy loss while sharing personal zone service addresses during inter-zone communication[¶](#Unintentional-privacy-loss-while-sharing-personal-zone-service-addresses-during-inter-zone-communication)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Description[¶](#Description)

Two webinos users (Alice and Justin) connect their personal zones and
request access to each others services. By requesting access, however,
they share the address information of their applications and services.
So Justin shares his device and application name and Alice shares her
device and service identity.

In most cases this is not a problem, but it may result in embarrassment
if it reveals the fact that Justin is in a location Alice wasn't
expecting - e.g., at home when he said he was away on holiday.

#### Details[¶](#Details)

  ----------------------- -----------------------------------
  Attacker                None: another user (e.g., Justin)
  Intent                  None
  Motive                  Loss of personal context
  Target asset            Personal data
  Exploit asset           inter-zone communication
  Target threat           None
  Exploit vulnerability   None
  Known uses              None
  Related patterns        None
  ----------------------- -----------------------------------

#### Consequences[¶](#Consequences)

Embarrassment.

#### Mitigations[¶](#Mitigations)

Remove addressing information after it leaves the personal zone.
However, this might not be reasonable if Alice (in this case) wants to
know where Justin is accessing her data from.

