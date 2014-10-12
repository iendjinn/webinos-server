Components[¶](#Components)
==========================

This section was automatically generated based on the contents of the
webinos WP 2 git repository at <http://dev.webinos.org/git/wp2.git>.

Application Client[¶](#Application-Client)
------------------------------------------

### Description[¶](#Description)

Application using webinos APIs.

### Interfaces[¶](#Interfaces)

  Interface      Type       Access Right    Privilege
  -------------- ---------- --------------- -----------
  shareTag       provided   authenticated   normal
  findServices   provided   authenticated   normal
  getTVSources   provided   authenticated   normal

### Structure[¶](#Structure)

![](Application_ClientAssetModel.jpg)

  Name                Type          Description                                                                                               Surface                  Access Rights
  ------------------- ------------- --------------------------------------------------------------------------------------------------------- ------------------------ ---------------
  Custom Event        Software      webinos event                                                                                             JSON                     anonymous
  Device API          Software      API for accessing device-specific functionality                                                           Undefined                Undefined
  Event               Information   An object incorporating messaging attributes and additional webinos specific payload data and meta-data   Undefined                Undefined
  JSON-RPC Handler    Software      JSON-RPC Handler                                                                                          Privileged application   trusted
  NFC Service         Software      NFC Service Implementation                                                                                Privileged application   authenticated
  NFC Service Proxy   Software      NFC Service Proxy                                                                                         Client application       authenticated
  Service Proxy       Software      webinos service interface                                                                                 Client application       authenticated
  Webinos Object      Software      webinos singleton                                                                                         Client application       authenticated

### Component Requirements[¶](#Component-Requirements)

None

Certificate Manager[¶](#Certificate-Manager)
--------------------------------------------

### Description[¶](#Description)

Generates certificates for PZPs before device enrolement.

### Interfaces[¶](#Interfaces)

  Interface                  Type       Access Right   Privilege
  -------------------------- ---------- -------------- ------------
  createCertificateRequest   required   trusted        privileged

### Structure[¶](#Structure)

![](Certificate_ManagerAssetModel.jpg)

  Name                          Type          Description                                                                                                         Surface                  Access Rights
  ----------------------------- ------------- ------------------------------------------------------------------------------------------------------------------- ------------------------ ---------------
  Certificate Signing Request   Information   A message sent from an applicant to a certificate authority in order to apply for a digital identity certificate.   Structured Text          trusted
  PZP CA Certificate            Information   PZP CA Certificate                                                                                                  Structured Text          authenticated
  TLS Server                    Software      TLS Server                                                                                                          Privileged application   trusted

### Component Requirements[¶](#Component-Requirements)

None

Context API[¶](#Context-API)
----------------------------

### Description[¶](#Description)

Context API client

### Interfaces[¶](#Interfaces)

  Interface      Type       Access Right    Privilege
  -------------- ---------- --------------- -----------
  queryContext   provided   authenticated   normal

### Structure[¶](#Structure)

![](Context_APIAssetModel.jpg)

  Name             Type          Description                        Surface   Access Rights
  ---------------- ------------- ---------------------------------- --------- ---------------
  Access Request   Information   Request for a resources            JSON      authenticated
  Context Object   Information   Structure contextual information   JSON      authenticated
  Context Query    Information   Query from context database        JSON      authenticated

### Component Requirements[¶](#Component-Requirements)

None

Context Database[¶](#Context-Database)
--------------------------------------

### Description[¶](#Description)

Database of context objects

### Interfaces[¶](#Interfaces)

  Interface           Type       Access Right    Privilege
  ------------------- ---------- --------------- -----------
  handleContextData   required   authenticated   normal

### Structure[¶](#Structure)

![](Context_DatabaseAssetModel.jpg)

  Name                  Type          Description                        Surface                  Access Rights
  --------------------- ------------- ---------------------------------- ------------------------ ---------------
  Access Request        Information   Request for a resources            JSON                     authenticated
  Context DB Instance   Software      SQLite context database instance   Privileged application   trusted
  Context Object        Information   Structure contextual information   JSON                     authenticated
  RPC Call Log          Information   RPC call log                       JSON                     trusted

### Component Requirements[¶](#Component-Requirements)

None

Context Manager[¶](#Context-Manager)
------------------------------------

### Description[¶](#Description)

Context Manager implementation

### Interfaces[¶](#Interfaces)

  Interface           Type       Access Right    Privilege
  ------------------- ---------- --------------- -----------
  enforceRequest      provided   trusted         normal
  logContext          required   trusted         normal
  handleContextData   provided   authenticated   normal
  queryContext        required   authenticated   normal

### Structure[¶](#Structure)

![](Context_ManagerAssetModel.jpg)

  Name               Type          Description                        Surface              Access Rights
  ------------------ ------------- ---------------------------------- -------------------- ---------------
  Access Request     Information   Request for a resources            JSON                 authenticated
  Access Requestor   Software      Requests access to resources       Client application   authenticated
  Context Object     Information   Structure contextual information   JSON                 authenticated
  JSON-RPC Object    Information   JSON-RPC Object                    JSON                 authenticated

### Component Requirements[¶](#Component-Requirements)

None

Discovery Manager[¶](#Discovery-Manager)
----------------------------------------

### Description[¶](#Description)

Discovery Manager

### Interfaces[¶](#Interfaces)

  Interface               Type       Access Right    Privilege
  ----------------------- ---------- --------------- ------------
  findServices            required   authenticated   privileged
  enforceRequest          provided   authenticated   normal
  getAllServices          required   authenticated   normal
  getRegisteredServices   required   authenticated   normal

### Structure[¶](#Structure)

![](Discovery_ManagerAssetModel.jpg)

  Name                Type       Description                      Surface                  Access Rights
  ------------------- ---------- -------------------------------- ------------------------ ---------------
  Service Discovery   Software   Service Discovery module         Privileged application   authenticated
  Webinos Service     Software   Webinos Service Implementation   Privileged application   authenticated

### Component Requirements[¶](#Component-Requirements)

None

Keystore Manager[¶](#Keystore-Manager)
--------------------------------------

### Description[¶](#Description)

Keystore Manager

### Interfaces[¶](#Interfaces)

  Interface   Type       Access Right   Privilege
  ----------- ---------- -------------- -----------
  get         required   trusted        normal

### Structure[¶](#Structure)

![](Keystore_ManagerAssetModel.jpg)

  Name                          Type          Description                                                                                                         Surface           Access Rights
  ----------------------------- ------------- ------------------------------------------------------------------------------------------------------------------- ----------------- ---------------
  Certificate Signing Request   Information   A message sent from an applicant to a certificate authority in order to apply for a digital identity certificate.   Structured Text   trusted
  PZP Private Key               Information   Device-held private key                                                                                             JSON              trusted

### Component Requirements[¶](#Component-Requirements)

None

NFC Manager[¶](#NFC-Manager)
----------------------------

### Description[¶](#Description)

NFC API implementation

### Interfaces[¶](#Interfaces)

  Interface   Type       Access Right    Privilege
  ----------- ---------- --------------- -----------
  shareTag    required   authenticated   normal
  peer        provided   authenticated   normal

### Structure[¶](#Structure)

![](NFC_ManagerAssetModel.jpg)

  Name              Type          Description                                                                                               Surface                  Access Rights
  ----------------- ------------- --------------------------------------------------------------------------------------------------------- ------------------------ ---------------
  Event             Information   An object incorporating messaging attributes and additional webinos specific payload data and meta-data   Undefined                Undefined
  NFC Event         Information   NFC Event                                                                                                 JSON                     authenticated
  NFC Listener      Software      NFC                                                                                                       Privileged application   authenticated
  NFC Message       Information   NFC Message                                                                                               NDEF                     authenticated
  NFC Record        Information   NFC Record                                                                                                NDEF                     authenticated
  NFC Service       Software      NFC Service Implementation                                                                                Privileged application   authenticated
  NFC Tag           Information   NFC Tag                                                                                                   NDEF                     anonymous
  Webinos Service   Software      Webinos Service Implementation                                                                            Privileged application   authenticated

### Component Requirements[¶](#Component-Requirements)

None

NFC Manager B[¶](#NFC-Manager-B)
--------------------------------

### Description[¶](#Description)

NFC API implementation

### Interfaces[¶](#Interfaces)

  Interface   Type       Access Right    Privilege
  ----------- ---------- --------------- -----------
  shareTag    required   authenticated   normal
  peer        required   authenticated   normal

### Structure[¶](#Structure)

![](NFC_Manager_BAssetModel.jpg)

  Name              Type          Description                                                                                               Surface                  Access Rights
  ----------------- ------------- --------------------------------------------------------------------------------------------------------- ------------------------ ---------------
  Event             Information   An object incorporating messaging attributes and additional webinos specific payload data and meta-data   Undefined                Undefined
  NFC Event         Information   NFC Event                                                                                                 JSON                     authenticated
  NFC Listener      Software      NFC                                                                                                       Privileged application   authenticated
  NFC Message       Information   NFC Message                                                                                               NDEF                     authenticated
  NFC Record        Information   NFC Record                                                                                                NDEF                     authenticated
  NFC Service       Software      NFC Service Implementation                                                                                Privileged application   authenticated
  NFC Tag           Information   NFC Tag                                                                                                   NDEF                     anonymous
  Webinos Service   Software      Webinos Service Implementation                                                                            Privileged application   authenticated

### Component Requirements[¶](#Component-Requirements)

None

OpenID Proxy[¶](#OpenID-Proxy)
------------------------------

### Description[¶](#Description)

OpenID Proxy

### Interfaces[¶](#Interfaces)

  Interface      Type       Access Right    Privilege
  -------------- ---------- --------------- -----------
  authenticate   required   authenticated   normal

### Structure[¶](#Structure)

![](OpenID_ProxyAssetModel.jpg)

  Name                 Type          Description                                                                                       Surface     Access Rights
  -------------------- ------------- ------------------------------------------------------------------------------------------------- ----------- ---------------
  Attribute Exchange   Information   Attribute Exchange                                                                                JSON        authenticated
  Identity Provider    Systems       Interface through which an Identity Provider registers and provides authentication credentials.   Undefined   Undefined
  OpenID credentials   Information   OpenID credentials                                                                                Plaintext   authenticated
  Relying Party        Information   Relying Party                                                                                     JSON        authenticated

### Component Requirements[¶](#Component-Requirements)

  Name                     Definition                                                                           Concerns            Responsibility
  ------------------------ ------------------------------------------------------------------------------------ ------------------- ----------------
  OpenID provider online   PZH administrative access shall be possible only if the OpenID provider is online.   Identity Provider   None

Policy Manager[¶](#Policy-Manager)
----------------------------------

### Description[¶](#Description)

XACML based policy manager component.

### Interfaces[¶](#Interfaces)

  Interface        Type       Access Right   Privilege
  ---------------- ---------- -------------- -----------
  enforceRequest   required   trusted        normal

### Structure[¶](#Structure)

![](Policy_ManagerAssetModel.jpg)

  Name               Type          Description                                                                    Surface                  Access Rights
  ------------------ ------------- ------------------------------------------------------------------------------ ------------------------ ---------------
  Access Manager     Software      Makes policy decisions                                                         Privileged application   trusted
  Access Request     Information   Request for a resources                                                        JSON                     authenticated
  Application Data   Information   Application Data                                                               JSON                     authenticated
  Data Reader        Software      Data Reader                                                                    Privileged application   trusted
  Decision Wrapper   Software      Manages the dialogue between clients and the policy manager                    Privileged application   trusted
  DHDF Engine        Software      Provides privacy and data handling functionality                               Privileged application   trusted
  PDP Cache          Software      PDP Cache                                                                      Privileged application   trusted
  Policy File        Information   XACML Policy File                                                              Unconstrained XML        trusted
  Request Context    Information   Encapsulates the data and credentials released by a user in a given session.   Unconstrained XML        trusted

### Component Requirements[¶](#Component-Requirements)

![](Policy_ManagerGoalModel.jpg)

  Name                                 Definition                                                                                                                                                                                                  Concerns           Responsibility
  ------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------ -------------------------------
  Access request validation            Access requests shall contain a validating DTD or schema.                                                                                                                                                   Access Request     Developer of webinos Platform
  API control                          Users and other stakeholders shall be able to control access by web applications to JavaScript APIs. These APIs may allow access to local and remote resources.                                             Access Requestor   None
  Canonical request specification      The request specification shall be verified before use.                                                                                                                                                     Access Request     Developer of webinos Platform
  Context-sensitive access control     The platform shall allow context-sensitive access control decisions: e.g. these may change depending on the environment.                                                                                    Request Context    None
  Data Usage Request                   Users shall specify how they will use data they are requesting.                                                                                                                                             Access Request     Developer of webinos Apps
  Device policy                        Users shall be able to create both device-specific and device-agnostic policies.                                                                                                                            Access Requestor   None
  Mandated request                     Access requests shall be non-repudiable.                                                                                                                                                                    None               None
  Messaging authentication             Messaging API users shall be authenticated before API use.                                                                                                                                                  None               None
  Permissive default policy            The default webinos policy shall be permissive enough to require no modification for the majority of webinos applications.                                                                                  Policy File        None
  Policy file validation               Policy files shall contain a validating DTD or schema.                                                                                                                                                      Policy File        Developer of webinos Platform
  Policy management secrecy            Policy management requests shall be visible only to authorised users.                                                                                                                                       Access Request     Developer of webinos Platform
  Policy synchronisation               The platform shall provide synchronisation for access control policies, so that policies can be desceibed on one platform and enforced on all.                                                              PDP Cache          None
  Qualified data use                   The platform shall protect user privacy: access requestors shall be able to qualify how they will use the data they are requesting, and users shall be able to express constraints about data disclosure.   Request Context    None
  Restricted request specifications    User agent requests to network resources shall be restricted.                                                                                                                                               Access Request     Developer of webinos Apps
  Restricted resource                  Resource restrictions shall be commensurate with their specifications.                                                                                                                                      Access Request     Developer of webinos Apps
  Secret request enforcement channel   Request enforcement channels shall be visible only to authorised users.                                                                                                                                     None               Developer of webinos Platform
  Specified resource                   Access requests shall specify the resources required authorisation.                                                                                                                                         Access Request     Developer of webinos Apps
  Usage Constraint                     Users shall specify constraints about data disclosure.                                                                                                                                                      None               None
  Usage Request                        Access requestors shall specify how they will use the data they are requesting.                                                                                                                             None               None
  User identifier permission           Application shall be authorised to access to user interface.                                                                                                                                                None               None

PZH Provider[¶](#PZH-Provider)
------------------------------

### Description[¶](#Description)

PZH Provider

### Interfaces[¶](#Interfaces)

  Interface      Type       Access Right    Privilege
  -------------- ---------- --------------- ------------
  on             required   trusted         privileged
  addPzh         provided   authenticated   privileged
  authenticate   provided   authenticated   normal
  connect        required   trusted         normal

### Structure[¶](#Structure)

![](PZH_ProviderAssetModel.jpg)

  Name                 Type          Description        Surface                  Access Rights
  -------------------- ------------- ------------------ ------------------------ ---------------
  Farm Configuration   Information   Configuration      JSON                     authenticated
  JSON Object          Information   JSON Object        JSON                     authenticated
  TLS Server           Software      TLS Server         Privileged application   trusted
  Web Server           Software      Web Server         Privileged application   trusted
  XML HTTP Request     Information   XML HTTP Request   JSON                     trusted

### Component Requirements[¶](#Component-Requirements)

![](PZH_ProviderGoalModel.jpg)

  Name                                       Definition                                                                                         Concerns                 Responsibility
  ------------------------------------------ -------------------------------------------------------------------------------------------------- ------------------------ ----------------
  Authenticate authentication data changes   Re-authentication shall be necessary to update authentication data.                                None                     None
  Authenticate PZP changes                   Re-authentication shall be necessary to update PZP configuration data.                             None                     None
  Click-through controls                     Permission prompts shall prevent dialog click-through.                                             None                     None
  Device revocation authentication           Re-authentication shall be necessary to revoke devices from a personal zone.                       None                     None
  Hub reachability                           When online, personal zone hubs shall be reachable from the public internet.                       TLS Server, Web Server   None
  Hub zone uniqueness                        A personal zone hub shall be associated with no more than one personal zone.                       None                     None
  Zone hub uniqueness                        Each personal zone shall be associated with a single personal zone hub.                            None                     None
  Zone router                                If required, the personal zone hub shall route communication between devices in a personal zone.   None                     None

PZH Session Handler[¶](#PZH-Session-Handler)
--------------------------------------------

### Description[¶](#Description)

PZH

### Interfaces[¶](#Interfaces)

  Interface            Type       Access Right    Privilege
  -------------------- ---------- --------------- ------------
  addPzh               required   authenticated   privileged
  getAllServices       provided   authenticated   normal
  registeredServices   provided   authenticated   normal
  addNewPZPCert        required   trusted         normal

### Structure[¶](#Structure)

![](PZH_Session_HandlerAssetModel.jpg)

  Name                Type          Description         Surface                  Access Rights
  ------------------- ------------- ------------------- ------------------------ ---------------
  PZH Configuration   Information   PZH Configuration   JSON                     authenticated
  TLS Server          Software      TLS Server          Privileged application   trusted

### Component Requirements[¶](#Component-Requirements)

![](PZH_Session_HandlerGoalModel.jpg)

  Name                     Definition                                                                                                                      Concerns   Responsibility
  ------------------------ ------------------------------------------------------------------------------------------------------------------------------- ---------- ----------------
  CA certificate signing   The personal zone's CA certificate shall be signed by the service provider who owns the infrastructure the PZH is running on.   None       None
  Personal zone CA         The personal zone hub shall be the certificate authority for a personal zone.                                                   None       None

PZP Session Handler[¶](#PZP-Session-Handler)
--------------------------------------------

### Description[¶](#Description)

Responsible for the creation of sessions, loading sessions during
reconnections, and loading user preferences

### Interfaces[¶](#Interfaces)

  Interface                  Type       Access Right    Privilege
  -------------------------- ---------- --------------- ------------
  createCertificateRequest   provided   trusted         privileged
  connect                    provided   trusted         normal
  addNewPZPCert              provided   trusted         normal
  getKey                     provided   trusted         normal
  getRegisteredService       provided   authenticated   normal
  registerServices           required   authenticated   normal

### Structure[¶](#Structure)

![](PZP_Session_HandlerAssetModel.jpg)

  Name                          Type          Description                                                                                                         Surface                  Access Rights
  ----------------------------- ------------- ------------------------------------------------------------------------------------------------------------------- ------------------------ ---------------
  Certificate                   Information   X.509 Certificate                                                                                                   Structured Text          authenticated
  Certificate Signing Request   Information   A message sent from an applicant to a certificate authority in order to apply for a digital identity certificate.   Structured Text          trusted
  Enrollment Token              Information   Token generated by PZH in order that a PZP can be enrolled into a personal zone.                                    Structured Text          authenticated
  Message Handler               Software      Message Handler                                                                                                     Privileged application   trusted
  PZP CA Certificate            Information   PZP CA Certificate                                                                                                  Structured Text          authenticated
  PZP Configuration             Information   PZP Configuration                                                                                                   JSON                     authenticated
  TLS Server                    Software      TLS Server                                                                                                          Privileged application   trusted
  WebSocket Server              Software      WebSocket Server                                                                                                    Privileged application   trusted

### Component Requirements[¶](#Component-Requirements)

![](PZP_Session_HandlerGoalModel.jpg)

  Name                                        Definition                                                                                                                 Concerns   Responsibility
  ------------------------------------------- -------------------------------------------------------------------------------------------------------------------------- ---------- ----------------
  Device CA                                   The personal zone proxy shall be the certificate authority for a device enrolled in a personal zone.                       None       None
  Installed app communication verification    Installed applications shall verify communication to webinos applications.                                                 None       None
  Installed app message non-repudiation       Installed applications shall verify the authenticity of event message origin.                                              None       None
  Installed app postMessage non-repudiation   Installed applications shall disallow postMessages from unrecognised origins.                                              None       None
  Message non-repudiation                     Event messages shall be non-repudiable.                                                                                    None       None
  PZP message authenticity                    PZPs shall authenticate the origin of messages they send.                                                                  None       None
  PZP token                                   A token generated by the personal zone's hub shall be presented by the PZP when enrolling a device to the personal zone.   None       None

TV Manager[¶](#TV-Manager)
--------------------------

### Description[¶](#Description)

TV API implementation implementation

### Interfaces[¶](#Interfaces)

  Interface        Type       Access Right    Privilege
  ---------------- ---------- --------------- -----------
  enforceRequest   provided   authenticated   normal
  getTVSources     required   authenticated   normal

### Structure[¶](#Structure)

![](TV_ManagerAssetModel.jpg)

  Name                 Type          Description                      Surface                  Access Rights
  -------------------- ------------- -------------------------------- ------------------------ ---------------
  Channel              Information   Channel                          JSON                     authenticated
  Remote TV Manager    Software      Remote TV Manager                Privileged application   authenticated
  TV Display Manager   Software      TV Display Manager               Privileged application   authenticated
  TV Source            Information   List of channels with a name     JSON                     authenticated
  TV Tuner Manager     Software      TV Tuner Manager                 Privileged application   authenticated
  Webinos Service      Software      Webinos Service Implementation   Privileged application   authenticated

### Component Requirements[¶](#Component-Requirements)

None

User Agent[¶](#User-Agent)
--------------------------

### Description[¶](#Description)

Browser user agent

### Interfaces[¶](#Interfaces)

  Interface   Type       Access Right   Privilege
  ----------- ---------- -------------- ------------
  post        required   trusted        privileged

### Structure[¶](#Structure)

![](User_AgentAssetModel.jpg)

  Name                                   Type          Description                                            Surface              Access Rights
  -------------------------------------- ------------- ------------------------------------------------------ -------------------- ---------------
  JSON Object                            Information   JSON Object                                            JSON                 authenticated
  Personal Zone Administration Console   Systems       The web interface used to control the personal zone.   Undefined            Undefined
  PZH Proxy                              Information   PZH Proxy                                              JSON                 authenticated
  Rendering Engine                       Software      Rendering Engine                                       Client application   anonymous
  XML HTTP Request                       Information   XML HTTP Request                                       JSON                 trusted

### Component Requirements[¶](#Component-Requirements)

None

webinos API[¶](#webinos-API)
----------------------------

### Description[¶](#Description)

General webinos API

### Interfaces[¶](#Interfaces)

  Interface    Type       Access Right   Privilege
  ------------ ---------- -------------- -----------
  logContext   provided   trusted        normal

### Structure[¶](#Structure)

![](webinos_APIAssetModel.jpg)

  Name             Type          Description                        Surface   Access Rights
  ---------------- ------------- ---------------------------------- --------- ---------------
  Access Request   Information   Request for a resources            JSON      authenticated
  Context Object   Information   Structure contextual information   JSON      authenticated

### Component Requirements[¶](#Component-Requirements)

None

Widget Manager[¶](#Widget-Manager)
----------------------------------

### Description[¶](#Description)

W3C based Widget Manager

### Interfaces[¶](#Interfaces)

  Interface        Type       Access Right   Privilege
  ---------------- ---------- -------------- ------------
  validatePolicy   provided   trusted        privileged

### Structure[¶](#Structure)

![](Widget_ManagerAssetModel.jpg)

  Name                      Type          Description                                                                                                                                Surface                  Access Rights
  ------------------------- ------------- ------------------------------------------------------------------------------------------------------------------------------------------ ------------------------ ---------------
  Access Request            Information   Request for a resources                                                                                                                    JSON                     authenticated
  Configuration Document    Information   The XML vocabulary that declares metadata and configuration parameters for a widget.                                                       Unconstrained XML        authenticated
  Configuration Processor   Software      Configuration Processor                                                                                                                    Privileged application   trusted
  File                      Information   A decompressed physical representation of a file entry.                                                                                    Unconstrained Image      anonymous
  Icon                      Information   File used to represent the widget in various application contexts; this helps users of visual browsers recognise the widget at a glance.   Unconstrained Image      authenticated
  Start File                Information   A file from the widget package to be loaded by the user agent when it instantiates the widget.                                             HTML                     authenticated
  WARP File                 Information   Extension to the configuration document controlling network access from within a widget.                                                   Unconstrained XML        trusted
  Widget Package            Software      Client side application packaged for distribution.                                                                                         Client application       authenticated
  Widget Persistence        Software      Widget Persistence implementation                                                                                                          Privileged application   trusted
  Widget Processor          Software      Widget Processor                                                                                                                           Privileged application   trusted
  Widget Signature          Information   Widget Digital Signature                                                                                                                   Constrained XML          trusted
  Widget Validator          Software      Widget Validator                                                                                                                           Privileged application   trusted
  ZIP Archive               Information   Archive conforming to PKWare ZIP specification.                                                                                            Client application       anonymous

### Component Requirements[¶](#Component-Requirements)

![](Widget_ManagerGoalModel.jpg)

  Name                                 Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Concerns                             Responsibility
  ------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------ ---------------------------
  Addressing Scheme                    A conforming specification MUST recommend a hierarchical addressing scheme that can be used to address the individual resources within a widget package from within a configuration document. The hierarchical addressing scheme MUST be capable of expressing both absolute and relative relationships between a resource and the widget package. In addition, the hierarchical addressing scheme MUST be interoperable with resources that might also need to address other resources within the widget package (e.g., HTML documents, CSS documents, JavaScript documents, etc.). The hierarchical addressing scheme SHOULD be one that Web authors would feel comfortable using or to which they are already accustomed.   Configuration Document               None
  Application signing key verified     Update procedure shall verify the update signing key matches the original signing key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         None                                 None
  Automatic Localization               A conforming specification SHOULD specify a processing model that automatically localizes content when authors follow the localization guidelines.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             Configuration Processor              None
  Data Compression                     A conforming specification MUST recommend a packaging format that supports both uncompressed data and OPTIONAL data compression. A conforming specification SHOULD also recommend at least one royalty-free default compression/decompression algorithm that is compatible with market-leading widget user agents and implementations of the packaging format on mobile devices.                                                                                                                                                                                                                                                                                                                                               ZIP Archive                          None
  Derive the Media Type of Resources   In the case that the packaging format does not support labeling resources with a media type, a conforming specification MUST either specify or recommend a means of deriving the media type of resources for the purposes of rendering. A conforming specification MAY define a means to override how a widget user agent derives the media type of a resource (e.g., treat resources with the file extension .php as text/html), but MUST NOT force a widget user agent to process resources of one media type as that of another type (e.g. treating a jpeg image at text/html).                                                                                                                                             Configuration Document               None
  Device Independent Delivery          A conforming specification MUST recommend a packaging format that is suitable for delivery on many devices, particularly Web-enabled mobile devices.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ZIP Archive                          None
  File Extension                       A conforming specification MUST specify a file extension that authors MAY assign to widget packages in contexts that rely on file extensions to indicate the content type, such is the case on many popular file systems.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ZIP Archive                          None
  Internal Abstract Structure          A conforming specification MUST recommend a packaging format that supports structuring resources into collections such as files and directories (understood in this document in a broader sense than in some popular file systems, namely as forms of generic logical containers). In addition, the packaging format SHOULD allow authors to add and remove resources of a widget package without needing to recreate the widget package.                                                                                                                                                                                                                                                                                      Configuration Processor              None
  Localization Guidelines              A conforming specification MUST provide guidelines that explain to authors how collections of resources need to be structured for the purpose of internationalization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Configuration Document               None
  Media Type                           A conforming specification MUST recommend that a conforming widget package be sent over HTTP with a formally registered media type that is specific to the Widgets 1.0 Family of specifications. The Working Group MUST formally register the media type with the Internet Assigned Numbers Authority (IANA). A conforming specification MUST specify how a widget user agent will process a widget package that was served with an unsupported media type or when the media type is unspecified.                                                                                                                                                                                                                              Widget Package                       Developer of webinos Apps
  Multilingual File Names              A conforming specification MUST recommend a packaging format that allows for non-ASCII characters in file and directory names, allowing authors to create widgets suitable for various cultures and languages, as well as multilingual contexts. The packaging format MUST either provide some means to declare the character encoding or specify what the character encoding is. The UTF-8 character encoding SHOULD be either the default (if multiple encodings are allowed) or sole encoding used.                                                                                                                                                                                                                         Widget Package                       None
  Packaging Format                     A conforming specification must recommend a packaging format that is royalty free, open, and widely implemented across market-leading widget user agents and compatible with mobile devices. In addition, a conforming specification must specify exactly which aspects of the packaging format are to be supported by conforming widget user agents.                                                                                                                                                                                                                                                                                                                                                                          Widget Package                       None
  Reserved Resource Names              A conforming specification MUST indicate if any resources (files or directories or similar logical containers) are mandatory or reserved and what specific function they serve in the widget package. A conforming specification SHOULD specify graceful error handling/recovery procedures if those resources are used erroneously or missing.                                                                                                                                                                                                                                                                                                                                                                                Configuration Document               None
  Verified application installation    webinos applications shall be verified before installation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Widget Processor, Widget Validator   None

Widget Renderer[¶](#Widget-Renderer)
------------------------------------

### Description[¶](#Description)

W3C based Widget Manager

### Interfaces[¶](#Interfaces)

  Interface      Type       Access Right    Privilege
  -------------- ---------- --------------- -----------
  findServices   required   authenticated   normal

### Structure[¶](#Structure)

![](Widget_RendererAssetModel.jpg)

  Name                 Type          Description                                               Surface                  Access Rights
  -------------------- ------------- --------------------------------------------------------- ------------------------ ---------------
  Application Module   Information   Application source module                                 Structured Text          anonymous
  Code Module          Information   Source code module                                        Structured Text          anonymous
  File                 Information   A decompressed physical representation of a file entry.   Unconstrained Image      anonymous
  Rendering Engine     Software      Rendering Engine                                          Client application       anonymous
  Service Proxy        Software      webinos service interface                                 Client application       authenticated
  Webinos Module       Information   webinos source module                                     Structured Text          anonymous
  Webinos Service      Software      Webinos Service Implementation                            Privileged application   authenticated

### Component Requirements[¶](#Component-Requirements)

None

Attack Surface metrics[¶](#Attack-Surface-metrics)
==================================================

Access Rights[¶](#Access-Rights)
--------------------------------

These metrics define the access rights necessary for a subject to make
use of a protocol, privilege level, or asset.

  Name            Description                                                        Value
  --------------- ------------------------------------------------------------------ -------
  anonymous       Subject can access resource anonymously.                           1
  authenticated   Subject needs to be explicitly authenticated to access resource.   5
  trusted         Subject needs to be trusted to access resource.                    10
  Undefined       Access rights undefined.                                           10

Protocols[¶](#Protocols)
------------------------

These metrics define the protocol used in component connections.

  Name        Description                         Value
  ----------- ----------------------------------- -------
  TLS         Transport Layer Security (TLS)      1
  PC          Synchronous procedural call         5
  JSON-RPC    Unencrypted JSON-RPC                10
  LLCP        NFC Logical Link Control Protocol   10
  RPC         Generic remote procedure call       10
  Undefined   Protocol undefined                  10

Privileges[¶](#Privileges)
--------------------------

These metrics define the level of privilege that a component interface
operates at.

  Name         Description                                                Value
  ------------ ---------------------------------------------------------- -------
  normal       Subject operates at a non-privileged level of operation.   1
  privileged   Subject operates at a privileged level of operation.       10
  Undefined    Subject operates at an unknown level of privilege.         10

Surface Types[¶](#Surface-Types)
--------------------------------

These metrics define the type of surface used by component assets.

  Name                     Description                                                                                          Value
  ------------------------ ---------------------------------------------------------------------------------------------------- -------
  Constrained XML          Well-formed, non-externally validated XML document.                                                  1
  HTML                     HTML document                                                                                        1
  Privileged application   Trusted webinos application or software component, usually running at an elevated privilege level.   1
  Unconstrained Image      Image files                                                                                          1
  NDEF                     NFC Data Exchange Format                                                                             5
  Plaintext                ASCII plaintext                                                                                      5
  Structured Text          Structured Text                                                                                      5
  Unconstrained XML        Well-formed, non-externally validated XML document.                                                  5
  Client application       Untrusted client application or software component.                                                  10
  JSON                     JavaScript Object Notation (JSON) representing data structures and algorithms.                       10
  Undefined                Access rights undefined.                                                                             10

Damage potential for untrusted asset surface: Colour codes[¶](#Damage-potential-for-untrusted-asset-surface-Colour-codes)
-------------------------------------------------------------------------------------------------------------------------

![](DERColour.jpg)

Architectural Patterns[¶](#Architectural-Patterns)
==================================================

This section was automatically generated based on the contents of the
webinos WP 2 git repository at <http://dev.webinos.org/git/wp2.git>.

Context Policy Management[¶](#Context-Policy-Management)
--------------------------------------------------------

![](Context_Policy_ManagementComponentModel.jpg)

### Synopsis[¶](#Synopsis)

Model illustrating how policy management mediates the

### Components[¶](#Components)

-   Context API
-   Context Database
-   Context Manager
-   Policy Manager
-   webinos API

### Connectors[¶](#Connectors)

  From              Role (Interface)                            To                 Role (Interface)                            Protocol   Access Right
  ----------------- ------------------------------------------- ------------------ ------------------------------------------- ---------- ---------------
  Context Manager   request-insertContext (handleContextData)   Context Database   provide-insertContext (handleContextData)   RPC        authenticated
  webinos API       request-logcontext (logContext)             Context Manager    provide-logcontext (logContext)             RPC        authenticated
  Context Manager   request-permission (enforceRequest)         Policy Manager     provide-permission (enforceRequest)         TLS        trusted
  Context API       request-queryContext (queryContext)         Context Manager    provide-queryContext (queryContext)         RPC        authenticated

NFC[¶](#NFC)
------------

![](NFCComponentModel.jpg)

### Synopsis[¶](#Synopsis)

Model illustrating the components associated with NFC

### Components[¶](#Components)

-   Application Client
-   NFC Manager
-   NFC Manager B

### Connectors[¶](#Connectors)

  From                 Role (Interface)              To              Role (Interface)              Protocol   Access Right
  -------------------- ----------------------------- --------------- ----------------------------- ---------- ---------------
  Application Client   request-nfcapi (shareTag)     NFC Manager     provide-nfcapi (shareTag)     JSON-RPC   authenticated
  NFC Manager          request-peerservices (peer)   NFC Manager B   provide-peerservices (peer)   LLCP       authenticated

PZH Authentication[¶](#PZH-Authentication)
------------------------------------------

![](PZH_AuthenticationComponentModel.jpg)

### Synopsis[¶](#Synopsis)

Model illustrating the components associated PZH authentication.

### Components[¶](#Components)

-   Discovery Manager
-   OpenID Proxy
-   PZH Provider
-   PZH Session Handler
-   User Agent

### Connectors[¶](#Connectors)

  From                  Role (Interface)                              To                    Role (Interface)                              Protocol   Access Right
  --------------------- --------------------------------------------- --------------------- --------------------------------------------- ---------- ---------------
  PZH Provider          request-addpzh (addPzh)                       PZH Session Handler   provide-addpzh (addPzh)                       JSON-RPC   authenticated
  PZH Session Handler   request-registeredservices (getAllServices)   Discovery Manager     provide-registeredservices (getAllServices)   JSON-RPC   authenticated
  PZH Provider          request-authenticate (authenticate)           OpenID Proxy          provide-authenticate (authenticate)           JSON-RPC   authenticated
  User Agent            post-http (post)                              PZH Provider          receive-https (on)                            TLS        trusted

PZP Enrolment[¶](#PZP-Enrolment)
--------------------------------

![](PZP_EnrolmentComponentModel.jpg)

### Synopsis[¶](#Synopsis)

Components associated with enrolling and authenticating PZPs to PZHs

### Components[¶](#Components)

-   Certificate Manager
-   Discovery Manager
-   Keystore Manager
-   PZH Provider
-   PZH Session Handler
-   PZP Session Handler

### Connectors[¶](#Connectors)

  From                  Role (Interface)                               To                    Role (Interface)                                     Protocol   Access Right
  --------------------- ---------------------------------------------- --------------------- ---------------------------------------------------- ---------- ---------------
  PZP Session Handler   request-addPZPCert (addNewPZPCert)             PZH Session Handler   provide-addPZPCert (addNewPZPCert)                   TLS        authenticated
  PZP Session Handler   request-createCSR (createCertificateRequest)   Certificate Manager   provide-createCSR (createCertificateRequest)         TLS        authenticated
  PZP Session Handler   request-keyservices (getKey)                   Keystore Manager      provide-keyservices (get)                            PC         trusted
  PZP Session Handler   request-pzpconnect (connect)                   PZH Provider          provide-pzpconnect (connect)                         TLS        trusted
  PZP Session Handler   request-allservices (getRegisteredServices)    Discovery Manager     provide-registeredservices (getRegisteredServices)   JSON-RPC   authenticated
  PZP Session Handler   send-remoteservices (registerServices)         PZH Session Handler   recv-remoteservices (registeredServices)             JSON-RPC   authenticated

TV Service Discovery[¶](#TV-Service-Discovery)
----------------------------------------------

![](TV_Service_DiscoveryComponentModel.jpg)

### Synopsis[¶](#Synopsis)

Model illustrating discovery and use of TV services

### Components[¶](#Components)

-   Application Client
-   Discovery Manager
-   Policy Manager
-   TV Manager

### Connectors[¶](#Connectors)

  From                 Role (Interface)                      To                  Role (Interface)                      Protocol   Access Right
  -------------------- ------------------------------------- ------------------- ------------------------------------- ---------- ---------------
  Discovery Manager    request-permission (enforceRequest)   Policy Manager      provide-permission (enforceRequest)   TLS        trusted
  Application Client   request-service (findServices)        Discovery Manager   provide-service (findServices)        JSON-RPC   authenticated
  Application Client   request-tvapi (getTVSources)          TV Manager          provide-tvapi (getTVSources)          JSON-RPC   authenticated
  TV Manager           request-permission (enforceRequest)   Policy Manager      provide-permission (enforceRequest)   TLS        trusted

Widget Processing[¶](#Widget-Processing)
----------------------------------------

![](Widget_ProcessingComponentModel.jpg)

### Synopsis[¶](#Synopsis)

Model illustrating the components associated with widget processing

### Components[¶](#Components)

-   Policy Manager
-   Widget Manager

### Connectors[¶](#Connectors)

  From             Role (Interface)                          To               Role (Interface)                          Protocol   Access Right
  ---------------- ----------------------------------------- ---------------- ----------------------------------------- ---------- --------------
  Widget Manager   request-validatePolicy (validatePolicy)   Policy Manager   provide-validatePolicy (enforceRequest)   RPC        trusted

Widget Rendering[¶](#Widget-Rendering)
--------------------------------------

![](Widget_RenderingComponentModel.jpg)

### Synopsis[¶](#Synopsis)

Model illustrating the components associated with widget rendering

### Components[¶](#Components)

-   Discovery Manager
-   Widget Renderer

### Connectors[¶](#Connectors)

  From              Role (Interface)                      To                  Role (Interface)                      Protocol   Access Right
  ----------------- ------------------------------------- ------------------- ------------------------------------- ---------- ---------------
  Widget Renderer   request-findservices (findServices)   Discovery Manager   provide-findservices (findServices)   JSON-RPC   authenticated


