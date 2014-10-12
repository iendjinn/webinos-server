Threat Model and Trusted Components[¶](#Threat-Model-and-Trusted-Components)
----------------------------------------------------------------------------

In this section we describe the activities and actions that each of the
core webinos components are trusted or explicitly *not* trusted to
perform. The value of this threat model is that it makes explicit the
assumptions behind which components we are relying on and, therefore,
how each may be exploited to attack the overall system. The threat model
helped to inform the attack patterns and obstacles described in the risk
analysis.

This trust model is taken from the perspective of a webinos personal
zone user.

The following components are covered in this model:

-   Personal Zone Proxy (PZP)
-   Personal Zone Hub (PZH)
-   Identity Provider
-   Name resolution service
-   Platform: device + OS + other applications
-   Widget Renderer
-   Browser
-   Widget Processor
-   Applications

A complete list of potential actions and activities is given in the
appendix. Some actions are generic and therefore a *modifier* may exist
to explain what this action refers to in this context. For example,
"Storing data - confidentiality" may have the modifier "policies"
referring to the fact that this component is trusted to store policies
confidentially. This is represented as a separate column.

### Personal Zone Proxy (PZP)[¶](#Personal-Zone-Proxy-PZP)

Users need to trust the PZP to have almost complete control of the local
device, and to access all *local* APIs it provides. However, as
designers should be wary of trusting every PZP absolutely. The inability
of a PZP to protect itself against malware makes the possibility of a
zone being hijacked by a rogue PZP extremely likely. It should also not
be overly trusted for authenticating the end user: different devices
will have different capabilities with regards to authenticating users.

There is also a significant threat from a device being joined into a
malicious personal zone without the user's knowledge. This is why it is
trusted to maintain the integrity of certificates and policies.

##### Trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Access control via                              The PZP is the main
  policy enforcement                              area for policy
                                                  enforcement

  Storing data -          policies, app data      The PZP must be able to
  confidentiality                                 store policies without
                                                  outside modification

  Editing XACML policies                          The PZP will need to
  (local)                                         make changes to XACML
                                                  policies based on user
                                                  input

  Handling device keys                            Passing keys to the
                                                  operating system to
                                                  store

  Storing data -          policies, app data, PZP PZPs could be attacked
  integrity               and PZH certificates    by changing their
                                                  certificate hierarchy

  Authenticating devices                          PZPs may authenticate
  against device                                  other PZPs and PZHs via
  certificates                                    their public key
                                                  certificates

  Displaying information                          PZPs may present
  to the local user                               information to the user
                                                  for policy enforcement
                                                  or installation reasons

  Taking user input       Policy decisions,       PZPs need to take
                          installation            access control
                                                  decisions from users

  Routing                 To the PZH              PZPs route data from
                                                  applications to the PZH
                                                  and peer-connected PZPs

  Creating sessions       To the PZH, other local PZPs establish TLS
                          PZPs                    connections to other
                                                  PZHs

  Authenticating users to                         PZPs call operating
  local device                                    system methods to
                                                  authenticate users to
                                                  the local device, thus
                                                  implementing the
                                                  Authentication API

  Untrusted Input         incoming API requests   PZPs must validate all
  validation              and messages            input from web runtimes
                                                  and browsers

  Authenticating the                              PZPs must be able to
  widget runtime and web                          authenticate their
  browser                                         input to protect
                                                  against unauthorised
                                                  local software

  Name resolution         Applications, the PZH   PZPs need to resolve
                                                  the names of
                                                  applications and the
                                                  PZH, which will be
                                                  hosted on a web server
  -----------------------------------------------------------------------

##### Sometimes trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Authenticating user's                           The PZP may be
  online identities                               configured as a
                                                  "blessed" device, where
                                                  no online
                                                  authentication is
                                                  needed.
  -----------------------------------------------------------------------

##### Explicitly not trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Adding personal zone                            PZPs should not be able
  devices                                         to add new PZPs to a
                                                  personal zone as they
                                                  do not hold zone-wide
                                                  CA keys

  Maintaining platform                            Delegated to the
  integrity                                       underlying platform
  -----------------------------------------------------------------------

### Personal Zone Hub (PZH)[¶](#Personal-Zone-Hub-PZH)

The Personal Zone Hub is trusted with some of the most important aspects
of the personal zone. It is not given access to individual device
private keys (this allows any device to implement its own storage and
generation mechanism) or allowed to edit local policies on individual
devices, but almost everything else is permitted.

##### Trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Access control via                              
  policy enforcement                              

  Adding personal zone                            
  devices                                         

  Authenticating devices                          
  against device                                  
  certificates                                    

  Authenticating identity                         
  providers                                       

  Authenticating user's                           
  online identities                               

  Certificate and                                 
  signature processing                            

  Content isolation                               

  Creating sessions                               

  Displaying information                          
  to the local user                               

  Editing XACML policies                          
  (zone-wide)                                     

  Identifying                                     
  applications                                    

  Protect itself against                          
  runtime attack                                  

  Revocation of devices                           

  Routing                                         

  Storing data –          settings and            
  integrity               certificates            

  Storing data –          settings and            
  confidentiality         certificates            

  Storing keys                                    

  Taking user input                               

  Untrusted Input                                 
  validation                                      
  -----------------------------------------------------------------------

### Sometimes trusted for[¶](#Sometimes-trusted-for)

  Action                           Modifier                                                         Description and rationale
  -------------------------------- ---------------------------------------------------------------- ---------------------------------------------------------------
  Storing data – integrity         Yes: settings and certificates. No: application & context data   The PZH is not used to store application data or context data
  Storing data – confidentiality   Yes: settings and certificates. No: application & context data   The PZH is not used to store application data or context data

##### Explicitly not trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Editing XACML policies                          There are local device
  (local)                                         policies the PZH is not
                                                  trusted to edit

  Handling device keys                            The PZH never receives
                                                  the private keys
                                                  created by PZPs
  -----------------------------------------------------------------------

### Identity Provider (OpenID Provider)[¶](#Identity-Provider-OpenID-Provider)

We *require* that the user has a trustworthy identity provider. However,
the webinos framework has no way of enforcing this, and therefore must
trust that users select an appropriate option. In addition, we have no
mitigation for attacks resulting from flaws in OpenID

##### Trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Authenticating user's                           
  online identities                               

  Authenticating web                              
  domains                                         

  Protect itself against                          
  runtime attacks                                 
  -----------------------------------------------------------------------

##### Explicitly not trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Maintaining sessions    User sessions to the    
                          OpenID provider         

  Authenticating users to                         
  the local device                                
  -----------------------------------------------------------------------

### Name resolution service (WebFinger / User lookup service)[¶](#Name-resolution-service-WebFinger-User-lookup-service)

The name resolution service converts user identities into personal zone
hub URLs. We assume that the name resolution service is either provided
by a well known authority (such as webinos.org) or the identity provider
themselves.

##### Trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Name resolution         User email addresses to This is the primary
                          PZH URLs                function of this entity

  Authenticating user's                           Updating routing
  online identities                               information requires
                                                  authorisation from the
                                                  correct user

  Revocation of devices   PZH, not PZPs           The name resolution
                                                  service is used to
                                                  revoke a PZH by linking
                                                  to a different location
  -----------------------------------------------------------------------

### Platform: device + OS + other applications[¶](#Platform-device-OS-other-applications)

The webinos PZP software will run on an existing platform, including an
operating system and applications. This is the source of many potential
attacks, particularly related to malware. Device operating systems and
applications are responsible for protecting themselves against malware.
However, this is often shown not to be reasonable as new malware and
vulnerabilities are published frequently. As such, a key threat is the
presence of malware on a device and therefore on webinos.

##### Trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Process isolation       Isolation of the PZP    
                          from other              
                          applications, Isolation 
                          of two PZPs on the same 
                          platform                

  Storing keys                                    webinos uses the key
                                                  storage mechanisms
                                                  provided by the
                                                  platform

  Authenticating users to                         webinos calls local
  local device                                    authentication
                                                  mechanisms to implement
                                                  the Authentication API

  Storing data –          Application data,       
  confidentiality         webinos platform data   

  Protecting itself                               Protecting against
  against runtime attacks                         native malware
  -----------------------------------------------------------------------

##### Explicitly not trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Authenticating user's                           The platform has no way
  online identities                               of authenticating the
                                                  user online
  -----------------------------------------------------------------------

### Widget Renderer[¶](#Widget-Renderer)

The widget render displays widgets to the end user. They may be
vulnerable to a wide range of attacks from malicious users or
applications, including:

-   Shoulder-surfing attacks
-   Widgets could be designed to exploit the renderer code, either by
    modifying what is rendered or by launching attacks on the underlying
    system
-   XSS, CSRF, session hijacking

##### Trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Rendering applications                          This is the Widget
                                                  Renderer's primary task

  Communicating with the                          Establishing a secure
  local PZP                                       connection with the PZP

  Taking user input                               

  Displaying information                          
  to the local user                               

  Authenticating web                              Checking SSL domain
  domains                                         certificates for hosted
                                                  applications

  Enforcing cross-origin  Enforcing WARP          
  restrictions                                    

  Certificate and                                 Authenticating the PZP
  signature processing                            

  Identifying                                     Being able to identify
  applications                                    the application being
                                                  rendered is essential
                                                  for maintaining a
                                                  trusted path

  Sandboxing applications                         The widget renderer
                                                  does not expose other
                                                  APIs to widgets except
                                                  for those defined in
                                                  webinos
  -----------------------------------------------------------------------

##### Explicitly not trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Access control via                              Delegated to the PZP
  policy enforcement                              
  -----------------------------------------------------------------------

### Web Browser[¶](#Web-Browser)

Applications in webinos may be displayed from within a web browser.
These are vulnerable to a wide range of attacks, similar to a widget
renderer.

##### Trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Rendering applications                          This is the Widget
                                                  Renderer's primary task

  Communicating with the                          Establishing a secure
  local PZP                                       connection with the PZP

  Taking user input                               

  Displaying information                          
  to the local user                               

  Authenticating web                              Checking SSL domain
  domains                                         certificates for hosted
                                                  applications

  Enforcing cross-origin  Enforcing same-origin   
  restrictions            policies and CSP        
                          restrictions            

  Certificate and                                 Authenticating the PZP
  signature processing                            

  Identifying                                     Being able to identify
  applications                                    the application being
                                                  rendered is essential
                                                  for maintaining a
                                                  trusted path

  Sandboxing applications                         The browser should not
                                                  expose other APIs to
                                                  widgets except for
                                                  those defined in
                                                  webinos
  -----------------------------------------------------------------------

##### Explicitly not trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Access control via                              Delegated to the PZP
  policy enforcement                              
  -----------------------------------------------------------------------

### Widget Processor[¶](#Widget-Processor)

Widget processors unpack widget packages and install them onto the
personal zone. They must be able to validate signatures and maintain
records of trusted applications. A widget processor may be part of a
widget runtime environment (WRT).

##### Trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Validating application                          Checking that
  content                                         application signatures
                                                  are valid

  Authenticating users to                         Authentication may be
  local device                                    needed for installing
                                                  applications

  Certificate and                                 Processing signatures
  signature processing                            for applications

  Displaying information                          Presenting install
  to the local user                               screens

  Installing web                                  This is the primary
  applications                                    function of a widget
                                                  processor

  Untrusted Input                                 Protecting against
  validation                                      malformed application
                                                  packages

  Editing XACML policies                          Changing XACML policies
  (zone-wide)                                     based on application
                                                  installation
  -----------------------------------------------------------------------

### Applications[¶](#Applications)

Applications are generally not trusted with user data or APIs unless
granted explicit permission. They can be a significant attack vector, as
well as being attacked themselves.

Applications can be attacked through:

-   Content injection attacks such as XSS and CSRF
-   Code could be stolen by competing developers
-   Content could be stolen
-   Any tokens or secrets contained within the application may be stolen

Applications can be attack vectors:

-   Stealing user data
-   Privacy violations - monitoring, tracking
-   Acting as a botnet client
-   Denial of service attacks on the end user
-   Exploiting vulnerabilities in the renderers

We have not tried to account for attacks on content within the
application.

##### Trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Untrusted Input                                 Applications may
  validation                                      receive input from many
                                                  untrusted sources

  Storing data –                                  Applications may store
  confidentiality                                 confidential data on
                                                  remote servers

  Storing data –                                  Applications may store
  integrity                                       high-integrity data on
                                                  remote servers

  Self-imposed least                              Applications must only
  privilege                                       request permissions
                                                  they use to avoid being
                                                  misused

  Maintaining sessions                            Any sessions being
                                                  established between the
                                                  client and the hosted
                                                  page must be maintained

  Fulfilling data                                 Applications may store
  handling policies                               private data on remote
                                                  servers
  -----------------------------------------------------------------------

##### Sometimes trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Installing web                                  Some applications are
  applications                                    allowed to install
                                                  child applications

  Correct API use (after                          Some APIs may be
  permission has been                             vulnerable to misuse by
  granted)                                        applications, but most
                                                  will impose rate limits

  Protecting itself                               The hosted portion of
  against runtime attacks                         an application must
                                                  resist attacks, the
                                                  local is not expected
                                                  to
  -----------------------------------------------------------------------

##### Explicitly not trusted for

  -----------------------------------------------------------------------
  Action                  Modifier                Description and
                                                  rationale
  ----------------------- ----------------------- -----------------------
  Access control via                              Applications must gain
  policy enforcement                              permission through the
                                                  user granting access

  Authenticating users to                         Applications have no
  local device                                    way of directly
                                                  authenticating the user
                                                  to webinos, they may
                                                  trust that webinos does
                                                  it for them.

  Authenticating user's                           Applications are not
  online identities                               (by default) granted
                                                  access to user identity
                                                  information

  Maintaining platform                            Applications may be
  integrity                                       actively trying to
                                                  modify the underlying
                                                  system

  Editing XACML policies                          
  (local)                                         

  Editing XACML policies                          
  (zone-wide)                                     

  Validating application                          Applications may be
  content                                         corrupted
  -----------------------------------------------------------------------


