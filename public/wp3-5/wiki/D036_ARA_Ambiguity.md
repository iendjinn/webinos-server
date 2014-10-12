Ambiguity Analysis[¶](#Ambiguity-Analysis)
------------------------------------------

Based on our review of the webinos software architecture, we have
defined 7 architectural patterns that characterise the webinos attack
surface. For brevity, these are defined within the appendix, but are
summarised in the table below:

  Architectural pattern       Description                                                            Components                                                                                                         No. of assets
  --------------------------- ---------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------ ---------------
  Context Policy Management   Model illustrating how policy management mediates the                  Context API, Context Database, Context Manager, Policy Manager, webinos API                                        15
  NFC                         Model illustrating the components associated with NFC                  Application Client, NFC Manager, NFC Manager B                                                                     14
  PZH Authentication          Model illustrating the components associated PZH authentication.       Discovery Manager, OpenID Proxy, PZH Provider, PZH Session Handler, User Agent                                     15
  PZP Enrolment               Components associated with enrolling and authenticating PZPs to PZHs   Certificate Manager, Discovery Manager, Keystore Manager, PZH Provider, PZH Session Handler, PZP Session Handler   16
  TV Service Discovery        Model illustrating discovery and use of TV services                    Application Client, Discovery Manager, Policy Manager, TV Manager                                                  24
  Widget Processing           Model illustrating the components associated with widget processing    Policy Manager, Widget Manager                                                                                     21
  Widget Rendering            Model illustrating the components associated with widget rendering     Discovery Manager, Widget Renderer                                                                                 8

Based on both the pattern specifications and the damage effort ratio
formula defined the methodology, the quantitative attack surface of
webinos is summarised in the below table:

  Architectural pattern       DER\_m   DER\_c   DER\_i
  --------------------------- -------- -------- --------
  Context Policy Management   1.2      6.1      28.6
  NFC                         1.4      4        39.5
  PZH Authentication          9.6      6.1      29.7
  PZP Enrolment               11.2     5        16.6
  TV Service Discovery        3.7      4.2      29
  Widget Processing           1.1      1        22.9
  Widget Rendering            2.8      2        28.6

At a one-day workshop held in Berlin in August 2012, the leaf obstacles
resulting from the attack resistance analysis were reviewed and, based
on these, 71 mitigating requirements were elicited. Each requirement was
analysed to determine its affected components and whether these were
adequately addressed by the webinos software architecture. A summary of
this analysis is documented in the table below:

  -----------------------------------------------------------------------
  Obstacle    Mitigating  Mitigating  Affected    Satisfied   Rationale
              Requirement Requirement Components  (Y/N)       
              Name        Definition                          
  ----------- ----------- ----------- ----------- ----------- -----------
  Account     Authorised  The OpenID  N/A         N           Deletion of
  deleted     account     account                             OpenID
              removal     shall be                            account out
                          removed                             of scope
                          only by an                          
                          authorised                          
                          user.                               

  Account     OpenID      Locked out  OpenID      N           OpenID
  lock-out    lock-out    OpenID      Proxy                   account
              recovery    credentials                         recovery
                          shall be                            procedure
                          recoverable                         is out of
                          .                                   scope.

  Ambiguous   Canonical   The request Policy      Y           Each
  request     request     specificati Manager                 request is
  specificati specificati on                                  enforced
  on          on          shall be                            separately
                          validated                           by
                          before use.                         definition.
                                                              Hence, it's
                                                              impossible
                                                              to grant
                                                              access to
                                                              more
                                                              resources
                                                              than
                                                              required.

  Ambiguous   Canonical   The request Policy      Y           Each
  resource    request     specificati Manager                 request is
  spec        specificati on                                  enforced
              on          shall be                            separately
                          validated                           by
                          before use.                         definition.
                                                              Hence, it's
                                                              impossible
                                                              to grant
                                                              access to
                                                              more
                                                              resources
                                                              than
                                                              required.

  App running App running webinos     Widget      N           There are
  in browser  in widget   application Renderer                no approved
              renderer    s                                   widget
                          shall run                           renderers.
                          only in                             
                          approved                            
                          widget                              
                          renderers.                          

  Application Application webinos     Widget      N           webinos
  blacklisted blacklist   supported   Manager                 supported
  after       checks      app stores                          app stores
  negative                shall                               are out of
  reviews                 periodicall                         scope.
                          y                                   
                          check the                           
                          validity of                         
                          submitted                           
                          reviews.                            

  Application Widget data Application Widget      N           Although
  data        authorisati data from   Manager                 application
  intercepted on          widgets                             s
                          shall be                            shall only
                          accessible                          access data
                          only to                             permitted
                          authorised                          by the
                          components.                         underlying
                                                              system,
                                                              circumventi
                                                              ng
                                                              cross-origi
                                                              n
                                                              resource
                                                              sharing
                                                              restriction
                                                              s
                                                              via native
                                                              application
                                                              access to
                                                              application
                                                              data is out
                                                              of scope.

  Application Widget data Application Widget      N           Although
  data        authorisati data from   Manager                 application
  readable    on          widgets                             s
                          shall be                            shall only
                          accessible                          access data
                          only to                             permitted
                          authorised                          by the
                          components.                         underlying
                                                              system,
                                                              circumventi
                                                              ng
                                                              cross-origi
                                                              n
                                                              resource
                                                              sharing
                                                              restriction
                                                              s
                                                              via native
                                                              application
                                                              access to
                                                              application
                                                              data is out
                                                              of scope.

  Application Application The         Keystore    N           Keys are
  developer   developer   application Manager                 currently
  signing key signing key developer's                         saved in
  compromised storage     signing key                         \$HOME/.web
                          shall be                            inos.
                          safeguarded                         If we use
                          from                                the
                          unauthorise                         keyring,
                          d                                   platform
                          access.                             application
                                                              s
                                                              can access
                                                              contained
                                                              keys once
                                                              keyring is
                                                              unlocked

  Application User        Application Policy      Y           User
  has user    identifier  shall be    Manager                 identifier
  identifier  permission  authorised                          is a
  without                 to access                           controllabl
  permission              to user                             e
                          identifier.                         resource.

  Application Application A webinos   Application N           We have no
  impossible  QoS         application Client                  way of
  to use                  shall                               asserting
                          satisfy its                         how an
                          specified                           application
                          quality of                          's
                          service                             quality of
                          expectation                         service
                          s.                                  expectation
                                                              s
                                                              might be
                                                              expressed
                                                              or
                                                              satisfied.

  Application Application Update      Widget      Y           widgetmanag
  signing key signing key procedure   Manager                 er.js
  not checked verified    shall                               performs
                          verify that                         the author
                          the update                          matching
                          signing key                         (calling
                          matches the                         matching
                          original                            code in
                          signing                             comparisonr
                          key.                                esult.js)

  Apps share  Usage data  The sharing Context     N           Because
  usage data  sharing     of usage    Manager,                there are
              restriction data shall  Widget                  several
                          be          runtime                 ways
                          restricted                          application
                          between                             s
                          application                         can share
                          s.                                  data,
                                                              including
                                                              server-side
                                                              out of band
                                                              methods,
                                                              usage
                                                              sharing
                                                              restriction
                                                              s
                                                              are out of
                                                              scope.
                                                              However,
                                                              privacy
                                                              policies
                                                              can explain
                                                              what an
                                                              application
                                                              proposes to
                                                              do with
                                                              user
                                                              supplied
                                                              data, which
                                                              may allow
                                                              users to
                                                              make
                                                              informed
                                                              choices at
                                                              install
                                                              time.

  Attacker    User        Authorisati PZH         N           While we
  obtains     password    on          Provider                can
  user        authorisati shall be                            recommend
  password    on          necessary                           safe OpenID
                          to obtain a                         providers
                          user login                          and make
                          password.                           recommendat
                                                              ions,
                                                              controlling
                                                              how OpenID
                                                              providers
                                                              are run is
                                                              out of
                                                              scope.

  Authenticat OpenID      OpenID      OpenID      N           webinos
  ion         authorisati authenticat Proxy                   should use
  failure     on          ion                                 PAPE
                          process                             extension
                          shall                               and set
                          authenticat                         max\_auth\_
                          e                                   age=0
                          users.                              in order to
                                                              prevent
                                                              authenticat
                                                              ion
                                                              caching

  Automate    Manual      Devices     PZH         N           Manual
  personal    personal    shall be    Provider,               personal
  zone        zone        enrolled    PZP Session             zone
  enrolment   enrolment.  into a      Handler                 enrolment
                          personal                            is
                          zone only                           circumvente
                          through the                         d
                          use of an                           by the
                          out-of-boun                         latest
                          d                                   specificati
                          challenge.                          on
                                                              which
                                                              allows
                                                              in-band
                                                              authenticat
                                                              ion.

  Bad default Permissive  The default Policy      Y           The API
  policy      default     webinos     Manager                 default
              policy      policy                              options are
                          shall be                            reasonable
                          permissive                          given the
                          enough to                           majority of
                          require no                          expected
                          modificatio                         application
                          n                                   s.
                          for the                             
                          majority of                         
                          webinos                             
                          application                         
                          s.                                  

  Bad trust   Trust       Users shall Widget      N           Recommendin
  decisions   information be provided Manager                 g
              .           sufficient                          what might
                          information                         be
                          to identify                         sufficient
                          malware                             information
                          when making                         to identify
                          authorisati                         prospective
                          on                                  malware is
                          decisions.                          out of
                                                              scope.

  Bad         Best-practi The user                N           The default
  user-select ce          shall                               policy is
  ed          policy      select                              only a
  policy                  best-practi                         static
                          ce                                  template
                          policy                              rather than
                          settings.                           anything
                                                              specific to
                                                              a device or
                                                              personal
                                                              zone.

  Badly       Best-practi The user                N           The default
  configured  ce          shall                               policy is
  policy      policy      select                              only a
                          best-practi                         static
                          ce                                  template
                          policy                              rather than
                          settings.                           anything
                                                              specific to
                                                              a device or
                                                              personal
                                                              zone.

  Browser API Browser API The use of  Widget      N           Forbidding
  authorised  unauthorise browser     Renderer                access to
              d           APIs shall                          browser-pro
                          be                                  vided
                          forbidden                           APIs is not
                          in webinos                          possible
                          application                         without
                          s.                                  specifying
                                                              a webinos
                                                              specific
                                                              browser.

  Browser     Browser API The use of  Widget      N           Forbidding
  Geolocation unauthorise browser     Renderer                access to
  API         d           APIs shall                          browser-pro
  accessed                be                                  vided
                          forbidden                           APIs is not
                          in webinos                          possible
                          application                         without
                          s.                                  specifying
                                                              a webinos
                                                              specific
                                                              browser.

  Credentials Credentials OpenID      N/A         N           Changing
  changed     change      credentials                         OpenID
              authorisati shall be                            credentials
              on.         changed                             out of
                          only by                             scope
                          authorised                          
                          users.                              

  Eavesdrop   Policy      Policy      Policy      Y           Policy
  Context     management  management  Manager                 management
  Database    secrecy     requests                            calls are
                          shall be                            sent over
                          visible                             TLS
                          only to                             
                          authorised                          
                          users.                              

  Eavesdrop   Policy      Policy      Policy      Y           Policy
  Context     management  management  Manager                 management
  Manager     secrecy     requests                            calls are
                          shall be                            sent over
                          visible                             TLS
                          only to                             
                          authorised                          
                          users.                              

  Eavesdrop   Policy      Policy      Policy      Y           Policy
  Policy      management  management  Manager                 management
  Manager     secrecy     requests                            calls are
                          shall be                            sent over
                          visible                             TLS
                          only to                             
                          authorised                          
                          users.                              

  Eavesdrop   Secret      Request     PZP Session Y           Access
  request     request     enforcement Handler,                requests
  enforcement enforcement channels    Policy                  come either
  channel     channel     shall be    Manager                 over the
                          visible                             overlay
                          only to                             network
                          authorised                          (which is
                          users.                              only served
                                                              using TLS)
                                                              or between
                                                              the widget
                                                              renderer
                                                              and PZP
                                                              using a
                                                              secure
                                                              websocket.
                                                              However,
                                                              there is
                                                              the
                                                              potential
                                                              for
                                                              man-in-the-
                                                              browser
                                                              attacks.

  Eavesdrop   Secret RPC  RPC call    PZP Session N           Misusing
  RPC Call    Call Log    logs shall  Handler,                the secrecy
  Log                     be visible  Context                 of the
                          only to     Manager                 context
                          authorised                          database
                          users.                              can be
                                                              misused for
                                                              this
                                                              purpose.
                                                              However,
                                                              context
                                                              logging is
                                                              turned off
                                                              by default
                                                              and must be
                                                              requested
                                                              with
                                                              permissions
                                                              .

  findService Pseudonymou The output  Discovery   N           Pseudonymou
  API reveals s           of the      Manager                 s
  permanent   API user    findService                         identifiers
  user        identifier  s                                   are
  identifier              API shall                           currently
                          be a                                not
                          temporary                           supported.
                          pseudonymou                         
                          s                                   
                          identifier.                         

  Forgotten   Memorable   webinos     PZH         N           The
  credentials credentials user        Provider                creation of
                          credentials                         memorable
                          shall be                            credentials
                          memorable.                          for
                                                              managing
                                                              PZHs is not
                                                              mandated.

  Installed   Installed   Installed   PZP Session Y           Origins can
  App allows  app         application Handler                 be verified
  unrestricte postMessage s                                   on
  d           non-repudia shall                               Messaging.
  postMessage tion        disallow                            
                          postMessage                         
                          s                                   
                          from                                
                          unrecognise                         
                          d                                   
                          origins                             

  Installed   Installed   Installed   PZH         N           While use
  App allows  app XHR     application Provider,               of W3C WARP
  unrestricte non-repudia s           PZP Session             or
  d           tion        shall       Handler                 Mozilla's
  XHR                     disallow                            Content
                          XHRs from                           Security
                          unrecognise                         Policy can
                          d                                   achieve
                          origins.                            this
                                                              non-repudia
                                                              tion,
                                                              this is not
                                                              explicitly
                                                              supported
                                                              by webinos.

  Installed   Application An          Widget      N           Verifying
  app         use         installed   Manager                 the
  exploited   authenticy  application                         authenticit
                          shall be                            y
                          controlled                          of
                          only by                             prospective
                          authorised                          malware is
                          users and                           out of
                          application                         scope.
                          s.                                  

  Installed   Personal    Installed   N/A         N           Controlling
  App given   data        apps shall                          whether or
  API         unauthorise be unable                           not webinos
  permissions d           to access                           application
              to trusted  personal                            s
              apps        data.                               may be
                                                              trusted
                                                              with
                                                              personal
                                                              data is out
                                                              of scope.

  Installed   Installed   The         PZH         N           Protecting
  app         application behaviour   Provider,               the
  misbehaving behaviour   of          PZP Session             integrity
              cannot be   installed   Handler,                of the
              interfered  application Policy                  application
              with        s           Manager,                packages
                          shall not   Discovery               and
                          changed     Manager                 isolation /
                          based on                            freedom
                          outside                             from
                          influence                           influence
                          or                                  by other
                          attackers.                          entities is
                                                              not
                                                              currently
                                                              supported.

  Installed   Installed   Installed   PZP Session Y           We can rely
  App uses    app message application Handler                 on the
  unauthentic non-repudia s                                   Events API
  ated        tion        shall                               read-only
  webinos                 verifiy the                         "from"
  event                   authenticit                         field that
  messages                y                                   is written
                          of event                            only by
                          message                             PZP.
                          origin.                             

  Installed   Installed   Installed   Widget      N           Control
  App         app content application Renderer                over
  vulnerable  injection   s                                   browser
  to content  tests       shall be                            based
  injection               resistant                           widget
                          to content                          renderers
                          injection                           is out of
                          attacks                             scope.

  JavaScript  Immutable   webinos     Application N           There are
  injection   webinos     code        Client                  no File API
  overwrites  modules     modules                             restriction
  webinos.js              shall be                            s
                          non-modifia                         for
                          ble                                 accessing
                          by webinos                          webinos
                          application                         code
                          s.                                  modules

  JavaScript  Verified    The         Widget      N           Verifying
  injection   webinos.js  integrity   renderer                webinos.js
  overwrites              of                                  is out of
  webinos.js              webinos.js                          scope while
                          is verified                         webinos
                          by the                              supports
                          widget                              web
                          renderer                            browsers
                                                              and web
                                                              apps must
                                                              include
                                                              their own
                                                              webinos.js
                                                              file.
                                                              Having a
                                                              common
                                                              include
                                                              path for
                                                              webinos.js
                                                              may be an
                                                              improvement
                                                              ,
                                                              or
                                                              replacing
                                                              this
                                                              approach in
                                                              a browser
                                                              model.

  JavaScript  Prevent     Prevent     Widget      N           Preventing
  injection   javascript  malicious   renderer                hosted
  triggers    from other  entities                            application
  security    domains     from                                s
  violation               injecting                           from being
                          javascript                          vulnerable
                          into web                            from
                          application                         JavaScript
                          s                                   injection
                                                              is out of
                                                              scope.
                                                              Various
                                                              approaches
                                                              can protect
                                                              against
                                                              attacks on
                                                              the client
                                                              side, such
                                                              as CSP
                                                              restriction
                                                              s,
                                                              but these
                                                              are not
                                                              implemented
                                                              .

  JavaScript  Verified    Injected    Widget      N           Verificatio
  injection   injected    javascript  renderer                n
  triggers    javascript  running                             against
  security                within                              code
  violation               webinos                             injection
                          components                          is not
                          is                                  currently
                          verified.                           implemented
                                                              for
                                                              webinos.js
                                                              and
                                                              javascript
                                                              from other
                                                              domains.

  Malicious   Verified    webinos     Widget      Y           widgetproce
  App         application application Manager                 ssor.js
  installed   installatio s                                   performs
              n           shall be                            the
                          verified                            signature
                          before                              validation
                          installatio                         (the called
                          n.                                  validation
                                                              code is in
                                                              widgetvalid
                                                              ator.js)

  Malicious   Verified    webinos     Widget      Y           widgetproce
  background  application application Manager                 ssor.js
  application installatio s                                   performs
  installed   n           shall be                            the
                          verified                            signature
                          before                              validation
                          installatio                         (the called
                          n.                                  validation
                                                              code is in
                                                              widgetvalid
                                                              ator.js)

  Malicious   Installed   Installed   PZP Session Y           Application
  App misuses app         application Handler                 could read
  communicati communicati s                                   the "from"
  on          on          shall                               field of
  interface   verificatio verify                              the
              n           communicati                         received
                          on                                  event and
                          to webinos                          attest it.
                          application                         
                          s.                                  

  Malicious   Verified    The         PZP, Widget N           While we
  background  background  behaviour   manager                 can
  application application of                                  recommend
  running                 background                          the use of
                          application                         app stores
                          s                                   with
                          shall be                            verified
                          verified.                           application
                                                              s
                                                              and suggest
                                                              the setting
                                                              of sensible
                                                              default
                                                              policies,
                                                              satisfying
                                                              this goal
                                                              is out of
                                                              scope.

  Malicious   Malicious   Event       Application N           There are
  code        code        handlers    Client, PZP             no
  evaluated   unevaluated shall       Session                 restriction
                          process     Handler                 s
                          only                                within
                          non-executa                         event
                          ble                                 handlers
                          JSON                                for
                          content.                            executing
                                                              JSON.

  Malicious   Trusted     Processed   NDEF        N           There are
  NDEF tag    NDEF        NDEF        Manager                 no
              message     messages                            restriction
              content     shall                               s
                          contain                             planned on
                          trusted                             how NDEF
                          code.                               messages
                                                              shall be
                                                              processed
                                                              within
                                                              webinos.

  Malicious   Plugin      Plugins     Widget      N           Control
  plugin not  verificatio shall be    Renderer                over
  detected    n           verified                            browser
                          before user                         based
                          installatio                         widget
                          n.                                  renderers
                                                              is out of
                                                              scope.

  Malware     Verificatio Software    Widget      N           While we
  installed   n           shall be    Manager                 can
              before      verified                            recommend
              installatio before it                           the use of
              n           is                                  app stores
                          installed                           with
                          by end                              verified
                          users.                              application
                                                              s,
                                                              satisfying
                                                              this goal
                                                              is out of
                                                              scope.

  Missing     Access      Access      Policy      Y           Currently
  Access      request     requests    Manager                 being
  Request     validation  shall                               implemented
  validation              contain a                           for the
                          validating                          second
                          DTD or                              phase.
                          schema                              

  Missing     Policy file Policy      Policy      Y           Currently
  Policy file validation  files shall Manager                 being
  validation              contain a                           implemented
                          validating                          for the
                          DTD or                              second
                          schema                              phase.

  Native      Native      webinos     N/A         N           webinos
  malware     malware not software                            makes no
  running     running     shall be                            assurances
                          isolated                            about a
                          from native                         potentially
                          malware                             compromised
                          running on                          platform.
                          a device.                           

  Non-mandate Mandated    Access      Policy      Y           All access
  d           request     requests    Manager                 requests
  request                 shall be                            are served
                          non-repudia                         between
                          ble.                                PZPs over
                                                              TLS

  OpenID      OpenID      PZH         OpenID      Y           If the
  provider    provider    administrat Proxy                   OpenID
  offline     online      ive                                 provider is
                          access                              offline it
                          shall be                            is not
                          possible                            possible to
                          only if the                         carry out
                          OpenID                              the OpenID
                          provider is                         authenticat
                          online.                             ion

  Overrestric Restricted  Resource    Policy      Y           Each
  ted         resource    restriction Manager                 request is
  resource                s                                   enforced
                          shall be                            separately
                          commensurat                         by
                          e                                   definition.
                          with their                          Hence, it's
                          specificati                         impossible
                          ons.                                to grant
                                                              access to
                                                              more
                                                              resources
                                                              than
                                                              required.

  Unrestricte Restricted  Resource    Policy      Y           Each
  d           resource    restriction Manager                 request is
  resource                s                                   enforced
                          shall be                            separately
                          commensurat                         by
                          e                                   definition.
                          with their                          Hence, it's
                          specificati                         impossible
                          ons.                                to grant
                                                              access to
                                                              more
                                                              resources
                                                              than
                                                              required.

  Overwrite   Authenticat Re-authenti PZH         Y           Need to
  valid       e           cation      Provider                authenticat
  authenticat authenticat shall be                            e
  ion         ion         necessary                           to the hub
  data        data        to update                           to change
              changes     authenticat                         synchronise
                          ion                                 d
                          data.                               policies

  Overwrite   Authenticat Re-authenti PZP Session Y           Every time
  valid PZP   e           cation      Handler                 PZP has
  Configurati PZP changes shall be                            update
  on                      necessary                           configurati
                          to update                           on
                          PZP                                 data, it
                          configurati                         will be
                          on                                  treated as
                          data                                a new PZP
                                                              to
                                                              authenticat
                                                              e

  Password    Password    OpenID      OpenID      N           OpenID
  guessed and brute force credentials Proxy                   credentials
  reset       resistance  used for                            '
                          personal                            details,
                          zone                                which are a
                          authenticat                         secret
                          ion                                 shared
                          shall be                            between
                          resistant                           OpenID
                          to brute                            providers
                          force                               and users,
                          attacks.                            are out of
                                                              scope.

  Password    Password    The reset   OpenID      N           OpenID
  recovery    recovery    of personal Proxy                   account
  process     resistance  zone                                recovery
  attacked                credentials                         procedure
                          shall be                            is out of
                          isolated                            scope.
                          from the                            
                          OpenID                              
                          account                             
                          recovery                            
                          procedure.                          

  Permission  Click-throu Permission  PZH         Y           Based on a
  prompt      gh          prompts     Provider                proposed
  click-throu controls    shall                               mock-up,
  gh                      prevent                             click-throu
                          dialog                              ghs
                          click-throu                         will not
                          gh.                                 result in a
                                                              default
                                                              policy.

  Policy      Policy      Policy      Policy      N           Supporting
  misconfigur validation  settings    Manager                 the user
  ed                      shall be                            validation
                          user                                of policy
                          validated                           files is
                          before use.                         out of
                                                              scope.

  Post        Message     Event       PZP Session Y           Message
  spoofed     non-repudia messages    Handler                 'from'
  message     tion        shall be                            fields are
                          non-repudia                         filled in
                          ble.                                by the PZP,
                                                              which is
                                                              able to
                                                              authenticat
                                                              e
                                                              the source
                                                              of each
                                                              message.

  Spoof       Message     Event       PZP Session Y           Message
  message     non-repudia messages    Handler                 'from'
  origin      tion        shall be                            fields are
                          non-repudia                         filled in
                          ble.                                by the PZP,
                                                              which is
                                                              able to
                                                              authenticat
                                                              e
                                                              the source
                                                              of each
                                                              message.

  Spoof       Message     Event       PZP Session Y           Message
  network     non-repudia messages    Handler                 'from'
  settings    tion        shall be                            fields are
  message                 non-repudia                         filled in
  origin                  ble.                                by the PZP,
                                                              which is
                                                              able to
                                                              authenticat
                                                              e
                                                              the source
                                                              of each
                                                              message.

  Post        PZP message PZP shall   PZP Session Y           PZPs add
  spoofed     authenticit authenticat Handler                 the 'from'
  message     y           e                                   field to
                          the origin                          messages
                          of messages                         based on
                          it sends.                           the sender
                                                              who has
                                                              been
                                                              authenticat
                                                              ed
                                                              through the
                                                              webinos PKI

  Spoof       PZP message PZP shall   PZP Session Y           PZPs add
  message     authenticit authenticat Handler                 the 'from'
  origin      y           e                                   field to
                          the origin                          messages
                          of messages                         based on
                          it sends.                           the sender
                                                              who has
                                                              been
                                                              authenticat
                                                              ed
                                                              through the
                                                              webinos PKI

  Spoof       PZP message PZP shall   PZP Session Y           PZPs add
  network     authenticit authenticat Handler                 the 'from'
  settings    y           e                                   field to
  message                 the origin                          messages
  origin                  of messages                         based on
                          it sends.                           the sender
                                                              who has
                                                              been
                                                              authenticat
                                                              ed
                                                              through the
                                                              webinos PKI

  PZH Admin   PZH admin   The PZH     PZH         N           While a
  URL         URL         admin URL   Provider                customised
  displayed   displayed   bar is                              browser
  without     prominently visible on                          could
  prominence              supported                           present
                          webinos                             additional
                          device                              GUIs which
                          platforms.                          authenticat
                                                              e
                                                              the PZH to
                                                              the user in
                                                              a more
                                                              visible
                                                              way,
                                                              control
                                                              over
                                                              browser
                                                              displays is
                                                              out of
                                                              scope.

  PZH Admin   PZH Admin   The PZH     PZH         N           While
  URL not     URL well    Admin URL   Provider                recommendat
  well known  known       shall be                            ions
                          recognisabl                         can be made
                          e                                   for how
                          to users.                           admin URLs
                                                              should be
                                                              formatted,
                                                              we cannot
                                                              control the
                                                              format of
                                                              URLs, which
                                                              users are
                                                              bad at
                                                              parsing.

  PZH Admin   Human-reada PZH admin   PZH         N           We cannot
  URL too     ble         URLs shall  Provider                control the
  complicated PZH admin   be human                            format of
              URL         readable.                           URLs but
                                                              the
                                                              specificati
                                                              ons
                                                              should
                                                              recommend
                                                              their
                                                              format.

  Revoke      Device      Re-authenti PZH         Y           Authenticat
  device from revocation  cation      Provider                ion
  valid       authenticat shall be                            carried out
  personal    ion         necessary                           via the PZH
  zone                    to revoke                           admin
                          devices                             interface.
                          from                                
                          personal                            
                          zone.                               

  Run         Single      Running     PZP Session N           There are
  multiple    personal    more than a Handler                 currently
  personal    zone proxy  single                              no explicit
  zone                    personal                            checks for
  proxies                 zone proxy                          instances
                          on a device                         of multiple
                          shall be                            PZP
                          disallowed.                         configurati
                                                              on
                                                              data on a
                                                              single
                                                              device.

  SMS         Messaging   Messaging   Policy      Y           This can be
  intercepted authenticat API users   Manager                 configured
  and relayed ion         shall be                            using the
                          authenticat                         policy
                          ed                                  framework,
                          before API                          but this is
                          use.                                not the
                                                              default.

  Test API    Test API    Test APIs   Widget      N           There are
  enabled     disabled    shall be    Manager                 no
                          disabled in                         supported
                          installatio                         means for
                          n                                   distinguish
                          environment                         ing
                          s.                                  test APIs
                                                              from those
                                                              which are
                                                              officially
                                                              supported.
                                                              We do,
                                                              however,
                                                              intend to
                                                              impose a
                                                              naming
                                                              scheme that
                                                              will enable
                                                              the
                                                              disabling
                                                              of test
                                                              API's in
                                                              installatio
                                                              n
                                                              environment
                                                              ,
                                                              either when
                                                              packaging/b
                                                              uilding
                                                              webinos or
                                                              on install
                                                              time.

  Test        Test        Test and    Widget      N           There are
  configurati configurati sample      Manager                 no
  on          on          configurati                         supported
  enabled     disabled    on                                  means for
                          data shall                          distinguish
                          be disabled                         ing
                          in                                  test and
                          installatio                         sample
                          n                                   configurati
                          environment                         on
                          s.                                  data from
                                                              valid
                                                              platform or
                                                              application
                                                              data. But
                                                              we intend
                                                              to impose a
                                                              naming
                                                              scheme that
                                                              will enable
                                                              the
                                                              disabling
                                                              of test and
                                                              sample
                                                              configurati
                                                              on
                                                              in
                                                              installatio
                                                              n
                                                              environment
                                                              ,
                                                              either when
                                                              packaging/b
                                                              uilding
                                                              webinos or
                                                              on install
                                                              time.

  Unrestricte Restricted  User agent  Policy      Y           Requests to
  d           request     requests to Manager                 access
  request     specificati network                             network
  specificati ons         resources                           resources
  on                      shall be                            are
                          restricted.                         represented
                                                              by the
                                                              feature
                                                              <http://web
                                                              inos.org/ac
                                                              tion/networ
                                                              k-access>

  Unspecified Specified   Access      Policy      Y           Policy
  resource    resource    requests    Manager                 manager
                          shall                               permits or
                          specify the                         denies
                          resources                           access to
                          requiring                           resources
                          authorisati                         only after
                          on.                                 matching
                                                              the
                                                              requested
                                                              feature
                                                              list
                                                              against
                                                              policies.
                                                              Therefore
                                                              all
                                                              required
                                                              resources
                                                              must be
                                                              specified
                                                              in the
                                                              requests.
                                                              However,
                                                              resources
                                                              that don't
                                                              have
                                                              associated
                                                              resources
                                                              cannot be
                                                              directly
                                                              controlled
                                                              by the
                                                              policy
                                                              manager

  User clicks Unspoofable PZH admin   PZH         N           Control
  on link     PZH admin   page URLs   Provider                over URLs
  within      URLs        shall be                            visited by
  application             non-spoofab                         browsers is
                          le                                  out of
                                                              scope.

  Webinos     Webinos     webinos     N/A         N           Testing for
  backdoor    backdoor    platform                            the
              tests       shall test                          presence of
                          for the                             backdoors
                          presence of                         is not
                          backdoor                            currently
                          procedures.                         within
                                                              scope.
                                                              Gatekeeping
                                                              processes
                                                              are
                                                              currently
                                                              being
                                                              considered
                                                              for change
                                                              requests
                                                              which will
                                                              consider
                                                              the
                                                              potential
                                                              for such
                                                              backdoors
                                                              being
                                                              introduced.

  Webinos     Widget      Webinos     Widget      N           Widget
  widget      processor   widget      Manager                 processors
  processor   verificatio processors                          are not
  bug         n           shall be                            part of the
                          verified                            webinos
                          before                              system
                          release.                            specificati
                                                              on.

  Widget      Authorised  Widget      Widget      N           Security of
  renderer    widget      renderers   Renderer                the widget
  supports    renderer    shall                               renderers
  extensions  extensions  support                             is out of
                          only                                scope.
                          authorised                          
                          extensions                          

  XSS attack  Hosted app  Hosted      Widget      N           Security of
  on hosted   XSS         application Renderer                hosted
  app         resistance  s                                   application
                          shall be                            s
                          resistant                           is out of
                          to known                            scope.
                          XSS                                 
                          attacks.                            
  -----------------------------------------------------------------------


