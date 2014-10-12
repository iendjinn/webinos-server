User ID and Data Management[¶](#User-ID-and-Data-Management)
============================================================

-   [User ID and Data Management](#User-ID-and-Data-Management)
    -   [Partners Involved in this
        Theme](#Partners-Involved-in-this-Theme)
    -   [Future work (Thoughts to be elaborated for phase
        II)](#Future-work-Thoughts-to-be-elaborated-for-phase-II)
    -   [Deliverable D3.1 Structure](#Deliverable-D31-Structure)
    -   [Technical Details](#Technical-Details)
    -   [Open Issues and First Steps](#Open-Issues-and-First-Steps)
    -   [State-of-the-art in User Identity
        Management](#State-of-the-art-in-User-Identity-Management)
    -   [(Technical) Problems to Work on in
        webinos](#Technical-Problems-to-Work-on-in-webinos)
        -   [Overview](#Overview)
        -   [(Technical) Problems in
            Detail](#Technical-Problems-in-Detail)
            -   [01 - Identify the user to any webinos device and
                application](#01-Identify-the-user-to-any-webinos-device-and-application)
            -   [02 - perform SSO of the user for any device and
                application belonging to the
                user](#02-perform-SSO-of-the-user-for-any-device-and-application-belonging-to-the-user)
            -   [03 - perform SSO of the user to certain hosted
                services/applications](#03-perform-SSO-of-the-user-to-certain-hosted-servicesapplications)
            -   [04 - Identity Provider (IDP) which is known by and
                accessibly by any
                entity](#04-Identity-Provider-IDP-which-is-known-by-and-accessibly-by-any-entity)
            -   [05 - SSO is supported by IDP and without involvement of
                IDP for local
                networks](#05-SSO-is-supported-by-IDP-and-without-involvement-of-IDP-for-local-networks)
            -   [06 - partial identities and pseudonyms are issued by
                the
                IDP](#06-partial-identities-and-pseudonyms-are-issued-by-the-IDP)
            -   [07 - Build on the defined data schema for “identifying
                user” to reflect that the user may have different
                identities](#07-Build-on-the-defined-data-schema-for-“identifying-user”-to-reflect-that-the-user-may-have-different-identities)
            -   [08 - interfacing with existing identities and IDM
                services is supported (e.g.
                Facebook)](#08-interfacing-with-existing-identities-and-IDM-services-is-supported-eg-Facebook)
            -   [09 - User authentication is based on the identities
                provided by our
                IDM](#09-User-authentication-is-based-on-the-identities-provided-by-our-IDM)
            -   [10 - IDP supports conversion of credentials (due to
                heterogenity of existing
                services/protocols)](#10-IDP-supports-conversion-of-credentials-due-to-heterogenity-of-existing-servicesprotocols)
            -   [11 - IDP holds list of devices which belong to a user
                for addressing/discovery
                purposes](#11-IDP-holds-list-of-devices-which-belong-to-a-user-for-addressingdiscovery-purposes)
            -   [12 - initiate a secure communication channel for
                identification and
                authentication](#12-initiate-a-secure-communication-channel-for-identification-and-authentication)
            -   [13 - key managent with lightweight
                PKI](#13-key-managent-with-lightweight-PKI)
            -   [14 - mobile phone/SIM card for user identification and
                authentication
                bootstrap](#14-mobile-phoneSIM-card-for-user-identification-and-authentication-bootstrap)
    -   [Minutes of Meetings/Phone
        Calls/Discussions](#Minutes-of-MeetingsPhone-CallsDiscussions)

Partners Involved in this Theme[¶](#Partners-Involved-in-this-Theme)
--------------------------------------------------------------------

-   **Impleo**
-   DOCOMO
-   DTAG
-   Polito
-   W3C

*Security and privacy contacts: DOCOMO, Polito, W3C, Impleo.*

Future work (Thoughts to be elaborated for phase II)[¶](#Future-work-Thoughts-to-be-elaborated-for-phase-II)
------------------------------------------------------------------------------------------------------------

[User ID and Data Management - Phase II](.html) contains all the issues
which we identified while writing D3.1 and thereafter. This is all to be
considered in the specification for phase II.

Deliverable D3.1 Structure[¶](#Deliverable-D31-Structure)
---------------------------------------------------------

[Draft Deliverable Structure](.html)

Technical Details[¶](#Technical-Details)
----------------------------------------

[Use Cases](.html)

[User ID and Data Management Discussion](.html) on technical details,
open issues, hurdles and more. Please contribute!

Open Issues and First Steps[¶](#Open-Issues-and-First-Steps)
------------------------------------------------------------

  ------------------ ------------------ ------------------ ------------------
  Item               Due                Lead               Status

  state-of-the-art:  March 7 COB        see                started
  collect relevant                      [State-of-the-art] 
  solutions and                         (State-of-the-art. 
  their features                        html)              

  crate an initial   March 7 COB        Polito             started
  architecture daft                                        
  for user identity                                        
  management in                                            
  webinos                                                  

  derive relevant    March 7                               
  features for IDM                                         
  from the                                                 
  requirements and                                         
  the [initial                                             
  architecture](init                                       
  ial%20architecture                                       
  .html)                                                   

  Working definition March 7                               
  of User ID                                               
  management                                               

  get an idea of                                           
  what to specify                                          
  and implement in                                         
  Webinos                                                  

  get an idea of                                           
  which [existing                                          
  work](existing%20w                                       
  ork.html)                                                
  we want to build                                         
  upon                                                     

  adjust work                                              
  closely with                                             
  [device                                                  
  discovery](device%                                       
  20discovery.html),                                       
  [overlay                                                 
  network](overlay%2                                       
  0network.html),                                          
  privacy & security                                       

  Prioritise our                                           
  contributions                                            

  get an idea of how                                       
  interfaces could                                         
  look like                                                

  What input                                               
  information does                                         
  IDM in Webinos                                           
  need?                                                    

  From where does                                          
  this input come?                                         

  What output                                              
  information does                                         
  the IDM in Webinos                                       
  provide?                                                 

  How much effort is                                       
  all this likely to                                       
  be?                                                      
  ------------------ ------------------ ------------------ ------------------

Cited from Christian Fuhrhop's email sent on 1 Feb 2011, 11:15 CEST:

> From the requirements and the first basic architecture, we should have
> a reasonable idea what elements are needed to get a working webinos
> environment.

> So the first part, based on requirements, existing solutions,
> experience and common sense, would be to give a definition of the
> architecture element and a description of what information this
> element needs from other elements, what information it will provide to
> other elements and where it (conceptually) will run.

The initial proposal of how to do IDM in webinos is depicted in the
attached slides. They are the basis for discussion for the Turin
meeting.

Cited from Nick Allot's email sent on 1 Mar 2011, 12:26 CEST

> From a architectural perspective – the concrete things I expect as
> outputs are

-   Data formats – syntaxes
-   Algorithms – description of processes
-   Protocols – over the air message flows (syntax and semantics)
-   APIs – predominately on device, in process functions, and data
    formats (syntax and semantics)
-   Data schemas: databases and stores
-   Other….

> As always – where we can reuse other technologies directly, or reuse
> with minor amendments – this is ALWAYS preferred to inventing
> something new 

The discussions in the Turin meeting (23/24 Feb 2011) allowed to focus
the work for this theme further. It is still all to be seen as proposals
and drafts. Please contribute! A list of features which should be
supported by User IDM in webinos follows further down.

State-of-the-art in User Identity Management[¶](#State-of-the-art-in-User-Identity-Management)
----------------------------------------------------------------------------------------------

**All**: please find additional relevant state-of-the-art which is not
yet listed in the table below!

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  \#         Name       Short      Main       URL        Relevance  Lead
                        explanatio features              for        
                        n                                Webinos    

  01         OpenID     OpenID is  OpenID is  [OpenID    It is      DOCOMO
                        a user     a          main       relevant   
                        centric,   decentrali page](http for        
                        decentrali zed        ://openid. Webinos as 
                        zed        authentica net/)      OpenID is  
                        authentica tion                  a web      
                        tion       protocol              standard   
                        protocol   without a             and is     
                        using web  central               based on   
                        technologi authority             web        
                        es         and uses              technologi 
                        allowing   standard              es.        
                        single     HTTP (S)              It         
                        sign on.   requests              supports   
                        An OpenID  and                   decentrali 
                        provider   responses.            zed        
                        can do the Protocol              authentica 
                        authentica extensions            tion       
                        tion       exist for             and is     
                        of a user  example               extensible 
                        for some   for                   by other   
                        service    attribute             protocols  
                        and the    exchange.             building   
                        service    The                   them on    
                        does not   identifier            top.       
                        have to    used is               Similar to 
                        store      either a              other      
                        identity   HTTP (S)              protocols  
                        or         URI or an             it relies  
                        credential XRI                   on a       
                        informatio (Extensibl            constant   
                        n.         e                     data       
                                   Resource              connection 
                                   Identifier            to a third 
                                   )                     party thus 
                                                         changes    
                                                         are        
                                                         necessary  
                                                         (if        
                                                         possible)  
                                                         for the    
                                                         P2P        
                                                         inter-devi 
                                                         ce         
                                                         authentica 
                                                         tion       
                                                         scenario.  

  02         Oauth      The        OAuth uses [OAuth     It is      DOCOMO
                        descriptio web        main       relevant   
                        n          technology page](http for        
                        is         (HTTP (S)) ://oauth.n Webinos    
                        referring  to give    et/)       but is     
                        to OAuth   fine                  only       
                        2.0 which  grained               concerned  
                        is in the  access to             with       
                        final      resources.            authorizat 
                        stages of  Resource              ion        
                        specificat owners                to         
                        ion        don't have            resources. 
                        with IETF  to provide            A problem  
                        and        their                 in some    
                        already    credential            P2P ad-hoc 
                        implemente s                     scenarios  
                        d          to the                might be   
                        by         clients.              that       
                        Facebook.  The                   clients    
                        OAuth      protocol              need to be 
                        allows a   flow is               pre-regist 
                        resource   dependent             ered       
                        owner to   on the                to get an  
                        grant a    client                access     
                        client     i.e. a                token to a 
                        access to  client in             resource.  
                        some       the web               Also the   
                        resource   browser or            authentica 
                        without    client on             tion       
                        giving     a secure              of         
                        away its   server.               resource   
                        credential                       owners is  
                        s                                out of     
                        for the                          scope of   
                        resource.                        the        
                                                         protocol.  

  03         Friend of                                              postponed
             a Friend                                               

  04         Zero                                                   W3C???
             knowledge                                              
             proofs                                                 

  05         federation                                             
             identity                                               

  06         Liberty    Liberty    The        [Liberty   ID-FF is   Polito
             Aliance /  alliance   Alliance   Alliance]( relevant   
             Kantara    is a       adopts and http://www as an      
                        consortium extends    .projectli authentica 
                        for        industry   berty.org/ tion       
                        developing standards, )\         framework. 
                        a          rather     [Kantara   Not        
                        distribute than       Initiative suitable   
                        d          attempt to ](http://k for P2P    
                        identity   develop    antarainit scenario   
                        management similar    iative.org because    
                        system. It specificat /)         the need   
                        includes   ions.\                of the     
                        an         ID-FF                 IDP.\      
                        Identity   Liberty               ID-WSF is  
                        Federation architectu            relevant   
                        Framework  re                    as a       
                        (ID-FF),   needs an              framework  
                        an         Identity              to provide 
                        Identity   Provider              services   
                        Web        (IDP) and             to support 
                        Service    uses http             ID         
                        Framework  protocol              management 
                        (ID-WSF)   to                    .          
                        and        exchange                         
                        Identity   messages                         
                        Services   between                          
                        Interface  IDP and                          
                        Specificat Service                          
                        ions       Provider                         
                        (ID-SIS).  to                               
                        ID-FF      authentica                       
                        enables    te                               
                        identity   the User                         
                        federation Agent.\                          
                        and        ID-WSF is                        
                        management a                                
                        and it is  foundation                       
                        designed   al                               
                        to work    layer that                       
                        with       utilizes                         
                        heterogene the ID-FF                        
                        ous        and                              
                        platforms  provides                         
                        and with   services.                        
                        all types  The                              
                        of network Discovery                        
                        devices;   Service                          
                        ID-WSF     determines                       
                        provides a where the                        
                        framework  needed                           
                        for        resources                        
                        creating,  are                              
                        discoverin located                          
                        g,         (e.g. user                       
                        and        attributes                       
                        consuming  ).                               
                        interopera The                              
                        ble        Interactio                       
                        identity   n                                
                        services;  Service                          
                        ID-SIS are allows an                        
                        a          IDP to                           
                        collection interact                         
                        of         with the                         
                        specificat owner of                         
                        ions       the                              
                        for        resource                         
                        interopera that it is                       
                        ble        exposing.                        
                        services   The Data                         
                        to be      Services                         
                        build on   supports                         
                        top of     the                              
                        ID-WSF.\   storage                          
                        The work   and update                       
                        of the     of                               
                        Liberty    specific                         
                        Alliance   data                             
                        is         attributes                       
                        transition regarding                        
                        ing        a user.\                         
                        to the     ID-SIS                           
                        Kantara    provides                         
                        Initiative specificat                       
                        .          ions                             
                                   for                              
                                   interopera                       
                                   ble                              
                                   services                         
                                   (e.g.                            
                                   Geo-locati                       
                                   on                               
                                   Service,                         
                                   Personal                         
                                   Profile                          
                                   Service                          
                                   Specificat                       
                                   ion,                             
                                   Employee                         
                                   Profile                          
                                   Service                          
                                   Specificat                       
                                   ion,                             
                                   Contact                          
                                   Book                             
                                   Service                          
                                   Specificat                       
                                   ion).                            

  07         Shibboleth It's an    SAML 2.0   [Shibbolet Its SSO    Polito
                        open       is an      h](http:// and        
                        source     XML-based  shibboleth attribute  
                        implementa open       .internet2 exchange   
                        tion       standard   .edu/)\    functional 
                        of SAML    for        [SAML      ities      
                        2.0        exchanging 2.0](http: are        
                        specificat authentica //www.oasi relevant   
                        ions.      tion       s-open.org for        
                        It         and        /specs/ind Webinos.   
                        provides   authorizat ex.php#sam Not        
                        an         ion        l)         suitable   
                        authentica data                  for P2P    
                        tion       between an            scenario   
                        and        identity              because    
                        authorizat provider              the need   
                        ion        and a                 of the     
                        infrastruc service               IDP.       
                        ture       provider.                        
                        to allow   Its                              
                        federated  specificat                       
                        web single ions                             
                        sign on    recommend                        
                        and        SSL 3.0 or                       
                        attribute  TLS 1.0                          
                        exchange.  for                              
                        A user     transport-                       
                        authentica level                            
                        tes        security;                        
                        with his   XML                              
                        organizati Signature                        
                        onal       and XML                          
                        credential Encryption                       
                        s.         for                              
                        The        message-le                       
                        organizati vel                              
                        on         security.                        
                        (or        SAML 2.0                         
                        identity   permits                          
                        provider)  direct use                       
                        passes the of XML                           
                        minimal    Encryption                       
                        identity   in various                       
                        informatio places,                          
                        n          including                        
                        necessary  an                               
                        to the     \<Encrypte                       
                        service    dID\>                            
                        manager to element                          
                        enable an  that can                         
                        authorizat replace                          
                        ion        the usual                        
                        decision.  \<NameID\>                       
                                   element.\                        
                                   SAML 2.0                         
                                   allows for                       
                                   arbitrary                        
                                   mappings                         
                                   between                          
                                   any two                          
                                   formats by                       
                                   using the                        
                                   \<NameIDPo                       
                                   licy\>                           
                                   element to                       
                                   describe                         
                                   the                              
                                   properties                       
                                   of the                           
                                   identifier                       
                                   to be                            
                                   returned.                        

  08         Identity                                               postponed
             Metasystem                                             
             / Infocard                                             

  09         Kerberos   Kerberos   Kerberos   [Kerberos  Kerberos   Oxford
                        is a       requires a at         is a       
                        mutual     trusted    MIT](http: distribute 
                        client/ser third      //web.mit. d,         
                        ver        party and  edu/kerber scalable   
                        authentica uses       os/)       authentica 
                        tion       *tickets*             tion       
                        system     and                   system     
                        designed   *ticket               which      
                        to         granting              might be   
                        establish  tickets*              attractive 
                        sessions   to allow              for        
                        and        it to                 managing   
                        support    scale to              capabiliti 
                        the secure multiple              es         
                        transfer   services              on         
                        of data.   without               distribute 
                        Kerberos   repeated              d          
                        can be     user                  devices.   
                        used as a  authentica            It also    
                        single     tion.                 can be     
                        sign on    Kerberos              used for   
                        mechanism  does not              SSO, one   
                                   require               of the     
                                   the use of            requiremen 
                                   asymmetric            ts         
                                   cryptograp            for        
                                   hy                    Webinos.   
                                   and uses              However,   
                                   time                  the        
                                   stamps for            reliance   
                                   validity              on a       
                                   periods.              trusted    
                                                         third      
                                                         party      
                                                         might make 
                                                         it         
                                                         inappropri 
                                                         ate        
                                                         when a     
                                                         data       
                                                         connection 
                                                         is lost    
                                                         and not    
                                                         suitable   
                                                         for a P2P  
                                                         inter-devi 
                                                         ce         
                                                         authentica 
                                                         tion       
                                                         scenario.  

  10         SIM                                                    DOCOMO
             Identity                                               

  11         Stork                                                  Polito

  12         Direct     The Direct The DAA    [DAA sides It would   Polito
             Anonymous  Anonymous  protocol   on TGC     relevant   
             Attestatio Attestatio is based   website](h for        
             n          n          on three   ttp://www. webinos to 
             (DAA)      (DAA) is a entities:  trustedcom allow      
                        protocol   the DAA    putinggrou anonymous  
                        which      issuer,    p.org/reso authentica 
                        enables    who        urces/dire tion.\     
                        the remote verifies   ct_anonymo The        
                        authentica the        us_attesta availabili 
                        tion       trusted    tion)      ty         
                        of a       platform              of the     
                        trusted    and issues            security   
                        platform   DAA                   chip can   
                        while      credential            be         
                        preserving to the                circumvent 
                        the user's platform;             ed         
                        privacy.   the DAA               using a    
                        DAA is     signer, in            software   
                        adopted by other                 implementa 
                        the        words the             tion.\     
                        Trusted    host,                 A major    
                        Computing  equipped              drawback   
                        Group      with the              is the     
                        (TCG) in   security              lack of    
                        the        chip, who             support    
                        Trusted    uses the              for        
                        Platform   DAA                   authorized 
                        Module     credential            sharing of 
                        (TPM)      ;                     SK and     
                        specificat the DAA               credential 
                        ion        verifier,             among      
                        version    an                    devices of 
                        1.2.       external              the same   
                                   partner               personal   
                                   which can             cloud.     
                                   verify the                       
                                   credential                       
                                   without                          
                                   violating                        
                                   the                              
                                   platform's                       
                                   privacy.\                        
                                   The DAA                          
                                   signer                           
                                   locally                          
                                   generates                        
                                   a secret                         
                                   key SK and                       
                                   send to                          
                                   the issuer                       
                                   a                                
                                   commitment                       
                                   on SK, and                       
                                   the                              
                                   security                         
                                   chip                             
                                   certificat                       
                                   e.                               
                                   The issuer                       
                                   validates                        
                                   the                              
                                   received                         
                                   certificat                       
                                   e                                
                                   and issues                       
                                   the DAA                          
                                   credential                       
                                   .\                               
                                   To sign a                        
                                   message,                         
                                   the signer                       
                                   computes                         
                                   the                              
                                   digital                          
                                   signature                        
                                   from SK                          
                                   and DAA                          
                                   credential                       
                                   .                                
                                   The                              
                                   verifier,                        
                                   using the                        
                                   issuer                           
                                   public                           
                                   key, can                         
                                   check the                        
                                   received                         
                                   signature                        
                                   without                          
                                   any                              
                                   informatio                       
                                   n                                
                                   on the                           
                                   identity                         
                                   of the                           
                                   signer.                          

  13         Group      Group      Each group [Foundatio It could   Polito
             signatures signature  member     ns         be an      
             /authentic allows     holds its  of Group   interestin 
             ation      members of own        Signatures g          
                        a group to private    :          mechanism  
                        sign       key to     Formal     to allow   
                        messages   sign       Definition anonymous  
                        on behalf  messages.  s,         authentica 
                        of the     Signature  Simplified tion       
                        group.     do not     Requiremen in         
                        Signatures reveal the ts,        webinos,   
                        can be     identity   and a      but this   
                        verified   of the     Constructi research   
                        with       signer. It on         topic is   
                        respect to is not     Based on   not yet in 
                        a single   possible   General    an         
                        group      to decide  Assumption implementa 
                        public     whether    s](http:// tion       
                        key.       two        cseweb.ucs phase.     
                                   signatures d.edu/user            
                                   have been  s/mihir/pa            
                                   issued by  pers/gs.ht            
                                   the same   ml)\                  
                                   group      [Foundatio            
                                   member.    ns                    
                                   Exists a   of Group              
                                   designated Signatures            
                                   group      :                     
                                   manager    The Case              
                                   who can    of Dynamic            
                                   revoke the Groups](ht            
                                   anonymity  tp://csewe            
                                   and reveal b.ucsd.edu            
                                   the        /users/mih            
                                   identity   ir/papers/            
                                   of the     dgs.html)             
                                   signer.\                         
                                   It is                            
                                   possible                         
                                   to                               
                                   dynamicall                       
                                   y                                
                                   join the                         
                                   group. Due                       
                                   to                               
                                   anonymity                        
                                   of                               
                                   signatures                       
                                   it is not                        
                                   possible                         
                                   to ban a                         
                                   group                            
                                   member in                        
                                   a simple                         
                                   way: after                       
                                   the                              
                                   standard                         
                                   signature                        
                                   verificati                       
                                   on,                              
                                   the                              
                                   verifier                         
                                   should                           
                                   contact                          
                                   the group                        
                                   manager to                       
                                   do a                             
                                   membership                       
                                   check.                           
                                   Alternativ                       
                                   ely                              
                                   a new                            
                                   group                            
                                   should be                        
                                   created                          
                                   and the                          
                                   previous                         
                                   group                            
                                   public key                       
                                   should be                        
                                   in some                          
                                   way                              
                                   blackliste                       
                                   d                                
                                   or                               
                                   inserted                         
                                   in a CRL.\                       
                                   AFAIK                            
                                   there is                         
                                   not yet a                        
                                   practical                        
                                   implementa                       
                                   tion                             
                                   of group                         
                                   signatures                       
                                   .                                

  14         Identity   XMPP is an The XMPP   [XMPP Core The        DOCOMO
             mechanisms XML based  identifier Protocol]( interestin 
             of XMPP    protocol   (e.g.      http://too g          
                        for        node@domai ls.ietf.or parts for  
                        near-real- n/resource g/html/rfc Webinos    
                        time       )          3920)      are the    
                        messaging, has as     and        addressing 
                        presence   mandatory  [SASL -    schema and 
                        and        field only Simple     the usage  
                        request-re the domain Authentica of the     
                        sponse     identifier tion       SASL       
                        services   and is     and        protocol   
                        using for  used to    Security   as this    
                        confidenti address an Layer](htt enables    
                        al         endpoint.  p://tools. support    
                        and        To         ietf.org/h for        
                        integral   authentica tml/rfc222 several    
                        message    te         2)         authentica 
                        exchange   an                    tion       
                        TLS.       endpoint              mechanisms 
                                   SASL is               .          
                                   used                             
                                   enabling a                       
                                   server to                        
                                   offer                            
                                   multiple                         
                                   authentica                       
                                   tion                             
                                   methods                          
                                   from which                       
                                   a client                         
                                   can                              
                                   choose.                          

  15         Identity                                               DOCOMO
             mechanisms                                             
             of SIP                                                 

  16         Idemix     Idemix is  To get a   [Idemix](h Idemix can Polito
                        an         credential ttp://www. allow      
                        anonymous  the user   zurich.ibm anonymous  
                        credential contact    .com/~pbi/ authentica 
                        system     the issuer identityMi tion       
                        which      and        xer_gettin in         
                        anonymize  establishe gStarted/) webinos,   
                        the user   s          \          but to     
                        towards    a          [Identity  share      
                        the        pseudonym  Mixer      credential 
                        service    N.\        cryptograp s          
                        provider   If N is    hic        among      
                        and        eligible,  library](h personal   
                        minimize   the issuer ttp://prim cloud      
                        the        produces a e.inf.tu-d devices    
                        release of credential resden.de/ can be     
                        personal   C by       idemix/)   very       
                        informatio signing a             dangerous: 
                        n.\        statement             a guest,   
                        It is a    containing            obtaining  
                        project of attributes            a          
                        IBM Zurich and N, and            credential 
                        Research   sends C to            of another 
                        Laboratory U.\                   user, can  
                        and the    To get a              access the 
                        Identity   service,              user       
                        Mixer      the user              master     
                        cryptograp shows this            secret and 
                        hic        credential            pose as    
                        library is to the                him in the 
                        publicly   verifier              system.    
                        available  using a                          
                        free-of-ch zero-knowl                       
                        arge.\     edge                             
                        Idemix     proof (the                       
                        allows     user does                        
                        users to   not send                         
                        identify   the                              
                        themselves credential                       
                        using      nor the                          
                        pseudonyms pseudonym                        
                        ,          N, this                          
                        and        ensure the                       
                        different  unlinkabil                       
                        pseudonyms ity).\                           
                        of same    Credential                       
                        user       s                                
                        cannot be  can have                         
                        linked\    attributes                       
                        The user   and the                          
                        can prove  user can                         
                        the        choose                           
                        possession which                            
                        of a       attributes                       
                        credential to prove                         
                        without    something                        
                        revealing  about and                        
                        the        what to                          
                        credential prove                            
                        itself,    about them                       
                        and he can (e.g do                          
                        choose     not show                         
                        which      the age                          
                        credential but only                         
                        attributes prove that                       
                        to reveal  it is over                       
                        to the     18).\                            
                        service    To deter                         
                        provider.  users from                       
                                   pool                             
                                   credential                       
                                   s                                
                                   Idemix use                       
                                   an                               
                                   all-or-not                       
                                   hing                             
                                   non-transf                       
                                   erability                        
                                   mechanism.                       
                                   User                             
                                   credential                       
                                   s                                
                                   are linked                       
                                   to his                           
                                   master                           
                                   secret and                       
                                   sharing                          
                                   just one                         
                                   pseudonym                        
                                   or                               
                                   credential                       
                                   implies                          
                                   sharing                          
                                   all of the                       
                                   user's                           
                                   other                            
                                   credential                       
                                   s                                
                                   and                              
                                   pseudonyms                       
                                   in the                           
                                   system.\                         
                                   Idemix                           
                                   offer an                         
                                   optional                         
                                   mechanism                        
                                   of                               
                                   anonymity                        
                                   revocation                       
                                   ,                                
                                   which                            
                                   require                          
                                   the                              
                                   existence                        
                                   of an                            
                                   entity                           
                                   named                            
                                   de-anonymi                       
                                   zer,                             
                                   and the                          
                                   user                             
                                   cooperatio                       
                                   n                                
                                   when                             
                                   showing a                        
                                   credential                       
                                   .\                               
                                   When the                         
                                   user ask                         
                                   for a                            
                                   service,                         
                                   he sends                         
                                   to the                           
                                   verifier                         
                                   his                              
                                   pseudonym                        
                                   N ecrypted                       
                                   with the                         
                                   de-anonymi                       
                                   zer                              
                                   public                           
                                   key. The                         
                                   verifier                         
                                   has proof                        
                                   that the                         
                                   de-anonymi                       
                                   zer                              
                                   can                              
                                   decrypt                          
                                   and reveal                       
                                   N.                               
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

(Technical) Problems to Work on in webinos[¶](#Technical-Problems-to-Work-on-in-webinos)
----------------------------------------------------------------------------------------

### Overview[¶](#Overview)

The order of this list currently does not represent prioritisation.

  -------------- -------------- -------------- -------------- --------------
  \#             Problem/Featur Existing       Effort (in PM) Lead
                 e              solutions                     

  01             Identify the                                 
                 user to any                                  
                 webinos device                               
                 and                                          
                 application                                  

  02             perform SSO of                               
                 the user for                                 
                 any device and                               
                 application                                  
                 belonging to                                 
                 the user                                     

  03             perform SSO of                               
                 the user to                                  
                 certain hosted                               
                 services/appli                               
                 cations                                      

  04             Identity                                     
                 Provider (IDP)                               
                 which is known                               
                 by and                                       
                 accessibly by                                
                 any entity                                   

  05             SSO is                                       
                 supported by                                 
                 IDP and                                      
                 without                                      
                 involvement of                               
                 IDP for local                                
                 networks                                     

  06             partial                                      
                 identities and                               
                 pseudonyms are                               
                 issued by the                                
                 IDP                                          

  07             Build on the                                 
                 defined data                                 
                 schema for                                   
                 “identifying                                 
                 user” to                                     
                 reflect that                                 
                 the user may                                 
                 have different                               
                 identities                                   

  08             interfacing                                  
                 with existing                                
                 identities and                               
                 IDM services                                 
                 is supported                                 
                 (e.g.                                        
                 Facebook)                                    

  09             User                                         
                 authentication                               
                 is based on                                  
                 the identities                               
                 provided by                                  
                 our IDM                                      

  10             IDP supports                                 
                 conversion of                                
                 credentials                                  
                 (due to                                      
                 heterogenity                                 
                 of existing                                  
                 services/proto                               
                 cols)                                        

  11             IDP holds list                               
                 of devices                                   
                 which belong                                 
                 to a user for                                
                 addressing/dis                               
                 covery                                       
                 purposes                                     

  12             initiate a                                   
                 secure                                       
                 communication                                
                 channel for                                  
                 identification                               
                 and                                          
                 authentication                               

  13             key managent                                 
                 with                                         
                 lightweight                                  
                 PKI                                          

  14             mobile                                       
                 phone/SIM card                               
                 for user                                     
                 identification                               
                 and                                          
                 authentication                               
                 bootstrap                                    

                                                              

                                                              

                                                              
  -------------- -------------- -------------- -------------- --------------

Explanations on how to read the table:

-   **Feature**: the feature which webinos will support
-   **Existing solution**: the solution from the state-of-the-art on
    which the feature can be based on
-   **Effort**: effort of implementing the feature by taking into
    account the existing solutions. I.e. there is almost no complexity
    if we can just reuse existing solutions but there is effort if we
    have to extend/modify existing solutions.
-   **Lead**: the partner of the webinos consortium who has the lead in
    specifying this feature. HAving the lead means **being main
    contributor *and* coordinating contribution of other partners**.

### (Technical) Problems in Detail[¶](#Technical-Problems-in-Detail)

#### 01 - Identify the user to any webinos device and application[¶](#01-Identify-the-user-to-any-webinos-device-and-application)

-   Privacy issues: should not respond to any request by any device
-   Identification for devices with multiple users on one device (e.g.
    set-top box) can be tricky

#### 02 - perform SSO of the user for any device and application belonging to the user[¶](#02-perform-SSO-of-the-user-for-any-device-and-application-belonging-to-the-user)

-   essential for webinos (see for instance the *Single Sign-On,
    Multiple Devices* Story

#### 03 - perform SSO of the user to certain hosted services/applications[¶](#03-perform-SSO-of-the-user-to-certain-hosted-servicesapplications)

-   difference to \#02 is that here third parties with already existing
    identification/authentication schemes are involved
-   we will address this later after the other SSO topic \#02
-   privacy issues
-   support of other IDM protocols required -- see \#08

#### 04 - Identity Provider (IDP) which is known by and accessibly by any entity[¶](#04-Identity-Provider-IDP-which-is-known-by-and-accessibly-by-any-entity)

-   issues partial IDs and pseudonyms; see also
    [\#6](http://dev.webinos.org/redmine/issues/6 "Mobile OS (New)")
-   Device discovery may use the IDP to find devices of a user
-   Dose not necessarily have to be known by all entities
-   Not necessarily required to be only one IDP
-   Closely related to user data management; could be combined

#### 05 - SSO is supported by IDP and without involvement of IDP for local networks[¶](#05-SSO-is-supported-by-IDP-and-without-involvement-of-IDP-for-local-networks)

-   this is essential for webinos as there may be no online connection
    and SSO should also work without IDP

#### 06 - partial identities and pseudonyms are issued by the IDP[¶](#06-partial-identities-and-pseudonyms-are-issued-by-the-IDP)

-   could be a first solution but should be made more flexible and
    robust later

#### 07 - Build on the defined data schema for “identifying user” to reflect that the user may have different identities[¶](#07-Build-on-the-defined-data-schema-for-“identifying-user”-to-reflect-that-the-user-may-have-different-identities)

-   essential for webinos

#### 08 - interfacing with existing identities and IDM services is supported (e.g. Facebook)[¶](#08-interfacing-with-existing-identities-and-IDM-services-is-supported-eg-Facebook)

-   essential for webinos, as users have existing identities elsewhere
-   outsource IDM to Facebook rather than interfacing? Could make sense
    as it reduces implementation effort for webinos

#### 09 - User authentication is based on the identities provided by our IDM[¶](#09-User-authentication-is-based-on-the-identities-provided-by-our-IDM)

-   Essential for webinos
-   Should be based on user identifier
-   User authentication should depend on device capabilities (e.g.
    finger print, user name/password, ...)
-   Tightly related to device authentication (e.g. Android); first user
    authenticates with one device, then the device authenticates towards
    other devices on behalf of the user

#### 10 - IDP supports conversion of credentials (due to heterogenity of existing services/protocols)[¶](#10-IDP-supports-conversion-of-credentials-due-to-heterogenity-of-existing-servicesprotocols)

-   Covered by \#08 (*interfacing …*) above

#### 11 - IDP holds list of devices which belong to a user for addressing/discovery purposes[¶](#11-IDP-holds-list-of-devices-which-belong-to-a-user-for-addressingdiscovery-purposes)

-   could be used for device discovery, see \#04
-   Talk to discovery subtopic group
-   privacy issues

#### 12 - initiate a secure communication channel for identification and authentication[¶](#12-initiate-a-secure-communication-channel-for-identification-and-authentication)

-   we have to address but reuse existing stuff

#### 13 - key managent with lightweight PKI[¶](#13-key-managent-with-lightweight-PKI)

-   avoiding PKI is good but we should not discard it right from the
    beginning
-   some trusted components may need it (e.g. operators)
-   using symmetric crypto is also difficult -- we should not ban PKI
    from the beginning
    -   light PKIs with short lifetime keys without CRL does exist
    -   a not fully fledged PKI is preferred

#### 14 - mobile phone/SIM card for user identification and authentication bootstrap[¶](#14-mobile-phoneSIM-card-for-user-identification-and-authentication-bootstrap)

-   easier than with devices with multiple users on a device
-   good starting point
-   there may be users without a mobile phone

Minutes of Meetings/Phone Calls/Discussions[¶](#Minutes-of-MeetingsPhone-CallsDiscussions)
------------------------------------------------------------------------------------------

-   2011/02/21-25 webinos meeting in Turin: this wiki page was created
    and the attached presentation was presented
-   [2011/03/01 conf call on User Identity Management](.html)
-   [2011/03/08 conf call on User Identity Management](.html)
-   [2011/03/21 conf call on User Identity Management](.html)
-   [2011/03/28 conf call on User Identity Management](.html)
-   [2011/03/30 conf call on User Identity Management](.html)
-   [2011/04/04 conf call on User Identity Management](.html)
-   [2011/04/08 conf call on User Identity and User Data
    Management](2011/04/08%20conf%20call%20on%20User%20Identity%20and%20User%20Data%20Management.html)
-   [2011/04/14 conf call on User Identity and User Data
    Management](2011/04/14%20conf%20call%20on%20User%20Identity%20and%20User%20Data%20Management.html)
-   [2011/04/18 conf call on User Identity and User Data
    Management](2011/04/18%20conf%20call%20on%20User%20Identity%20and%20User%20Data%20Management.html)
-   [2011/04/26 conf call on User Identity and User Data
    Management](2011/04/26%20conf%20call%20on%20User%20Identity%20and%20User%20Data%20Management.html)
-   [2011/04/28 conf call on User Identity and User Data
    Management](2011/04/28%20conf%20call%20on%20User%20Identity%20and%20User%20Data%20Management.html)
-   [2011/05/02 conf call on User Identity and User Data
    Management](2011/05/02%20conf%20call%20on%20User%20Identity%20and%20User%20Data%20Management.html)
-   [2011/05/03-05 WP3 meeting in Berlin](.html)
-   [2011/06/05-10 webinos meeting in Sophia Antipolis](.html)

