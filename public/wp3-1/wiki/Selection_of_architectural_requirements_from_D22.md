Selection of architectural requirements from D2.2[¶](#Selection-of-architectural-requirements-from-D22)
=======================================================================================================

Back-link to the [Policy Management main
page](Policy%20Management%20main%20page.html).\
Back-link to the [Policy Architecture main
page](Policy%20Architecture%20main%20page.html).

Identity[¶](#Identity)
----------------------

### webinos component identification[¶](#webinos-component-identification)

  ReqID              Requirement                                                                                                                                    References
  ------------------ ---------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------
  ID-USR-Oxford-20   The webinos Runtime SHALL maintain a record of the user and device identifiers that are allowed to make use of device capabilities remotely.   WOS-UC-TA1-001: Virtual Device

### webinos component authentication[¶](#webinos-component-authentication)

  ReqID               Requirement                                                                                                                                                  References
  ------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------ ----------------------------------------------------
  ID-DWP-POLITO-101   Simple authentication at least, and mutual authentication at best, SHALL be assured between webinos Components (e.g. applications and the webinos runtime)   WOS-UC-TA1-007: Linking device to a user account
  ID-DEV-POLITO-004   An Application SHOULD be able to unambiguously authenticate itself to authorized entities (e.g webinos runtime)                                              WOS-UC-Ta1-002: Network Independent Virtual Device
  ID-DEV-POLITO-017   An application SHOULD be able to unambiguously prove its developer's identity                                                                                WOS-UC-Ta1-002: Network Independent Virtual Device
  ID-DEV-POLITO-018   An application SHOULD be able to unambiguously prove its application provider's identity                                                                     WOS-UC-Ta1-002: Network Independent Virtual Device

### webinos component integrity[¶](#webinos-component-integrity)

  ReqID               Requirement                                                                     References
  ------------------- ------------------------------------------------------------------------------- ------------------------------------------
  ID-DWP-POLITO-102   Proof of webinos component integrity SHOULD be provided to authorized parties   WOS-UC-Ta1-003: Virtual Device Ownership

### Privacy Management[¶](#Privacy-Management)

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ReqID               Requirement                                                                                                                                                                                                                               References
  ------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------
  ID-USR-POLITO-103   Leakage of identity information during authentication MUST and during communication phases SHOULD be avoided                                                                                                                              WOS-UC-TA1-007: Linking device to a user account

  ID-USR-DT-02        The webinos System MUST minimize exposure of personal individual identifiers or canonical identifiers of webinos entities                                                                                                                 WOS-UC-TA1-007: Linking device to a user account\
                                                                                                                                                                                                                                                                WOS-UC-TA9-014: End user cross platform privacy analytics in healthcare, smart grids and home environments

  ID-USR-POLITO-010   A webinos entity SHOULD be able to identify itself to a webinos application using an astraction (such as a Pseudonym) that is not directly linkable to an existing the unique identifier of the entity (such as a canonical device ID).   WOS-UC-TA1-007: Linking device to a user account

  ID-USR-POLITO-011   A user MAY disable the advertising of its identity to webinos components and remote applications                                                                                                                                          WOS-UC-TA1-006: Pairing a new device to clone settings

  ID-USR-POLITO-013   A user SHOULD be able to choose the acceptable identity "privacy level" for other webinos enabled devices that are trying to communicate with his own device                                                                              WOS-UC-TA1-006: Pairing a new device to clone settings

  ID-DWP-POLITO-014   The communication between devices at non mutually acceptable identity "privacy level" MUST be avoided                                                                                                                                     WOS-UC-TA1-006: Pairing a new device to clone settings
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Discovery and Addressing[¶](#Discovery-and-Addressing)
------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ReqID             Requirement                                                                                    References
  ----------------- ---------------------------------------------------------------------------------------------- --------------------------------------------------------
  DA-DEV-ISMB-004   It SHALL be possible to address sensors and actuators that does not provide webinos support.   1.1.5. WOS-UC-Ta1-005: Sensors and Actuators

  DA-DEV-NTUA-002   webinos SHALL provide the means to Applications to identify an event occurring in a device.    7.1.1. WOS-UC-TA7-001: Device Based Context Retrieval\
                                                                                                                   7.1.2. WOS-UC-TA7-002: Event Based Context Retrieval
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Remote Notifications and Messaging[¶](#Remote-Notifications-and-Messaging)
--------------------------------------------------------------------------

### Eventing System[¶](#Eventing-System)

  -----------------------------------------------------------------------
  ReqID                   Requirement             References
  ----------------------- ----------------------- -----------------------
  NM-DEV-FOKUS-001        It SHALL be possible to 
                          exchange information    
                          between multiple        
                          entities in terms of    
                          events.                 

  NM-DEV-FOKUS-002        It SHALL be possible to 
                          subscribe to specific   
                          event types in order to 
                          get notified if the     
                          related event occurs.   

  NM-DEV-FOKUS-003        It SHALL be possible to 
                          subscribe to events     
                          that are created by a   
                          specific entity.        

  NM-DEV-FOKUS-004        It SHALL be possible to 
                          unsubscribe from        
                          notifications           
                          aboutspecific event     
                          types.                  

  NM-DEV-FOKUS-005        It SHALL be possible to 
                          specify a time limit    
                          that defines until when 
                          an event should be      
                          delivered to its        
                          destinations before it  
                          is marked as outdated   
                          and no further          
                          deliveries are tried.   

  NM-DEV-FOKUS-006        The originator of an    
                          event MAY request       
                          notification upon       
                          delivery of an event.   

  NM-DWP-ISMB-001         Incoming and outgoing   1.1.4. WOS-UC-Ta1-004:
                          messages that are yet   Communication between
                          to be delivered SHALL   webinos Applications
                          be cached.              

  NM-DWP-ISMB-003         webinos SHALL           1.1.4. WOS-UC-Ta1-004:
                          distribute events to    Communication between
                          all subscribed and      webinos Applications\
                          authorized              1.2.2. WOS-UC-TA1-011:
                          destinations.           Continuous monitoring
                                                  of diabetic's blood
                                                  glucose levels\
                                                  4.1.1. WOS-UC-TA4-001:
                                                  Subscribe and Publish
                                                  Events\
                                                  4.1.6. WOS-UC-TA4-006:
                                                  Sharing Application
                                                  States Across Several
                                                  Devices\
                                                  4.1.8. WOS-UC-TA4-008:
                                                  End Session when out of
                                                  Proximity

  NM-DWP-ISMB-004         The webinos system      4.1.2. WOS-UC-TA4-002:
                          SHALL start/awake       Synchronisation and
                          applications invoked    uploading of data
                          by/waiting for an       
                          event, when it occurs,  
                          in a controlled manner. 
  -----------------------------------------------------------------------

### Event description[¶](#Event-description)

  -----------------------------------------------------------------------
  ReqID                   Requirement             References
  ----------------------- ----------------------- -----------------------
  NM-DEV-FOKUS-101        Events MUST be          
                          distinguishable in      
                          order to decide if the  
                          same event occurred     
                          multiple times or the   
                          same event was          
                          delivered multiple      
                          times.                  

  NM-DEV-FOKUS-102        An event SHALL provide  
                          information about its   
                          type in order to        
                          distinguish between     
                          different events.       

  NM-DEV-FOKUS-103        The type of an event    
                          SHALL be either a       
                          predefined event (e.g., 
                          boot completed, device  
                          in standby, new devices 
                          available, etc.) or an  
                          arbitrary application   
                          specific event type.    

  NM-DEV-FOKUS-104        An event MAY provide    
                          information about its   
                          source, i.e., about the 
                          entity that created the 
                          event, in order to      
                          allow replies.          

  NM-DEV-FOKUS-105        An event MAY specify a  
                          set of specific         
                          destinations of the     
                          event in order to       
                          restrict the visibility 
                          of the event.           

  NM-DEV-FOKUS-106        It SHALL be possible to 
                          optionally attach       
                          payload data to events. 

  NM-DEV-FOKUS-107        The payload data MAY    
                          contain arbitrary       
                          application specific    
                          data.                   

  NM-DEV-FOKUS-108        Events SHALL provide    
                          information about the   
                          date and time when the  
                          event occured resp.     
                          when the event was      
                          created.                

  NM-DEV-ISMB-101         Events MAY be           7.1.11. WOS-UC-TA7-011:
                          associated with         Discovering and
                          event-specific          updating context
                          Metadata.               information of a shared
                                                  capability
  -----------------------------------------------------------------------

Policy and Security[¶](#Policy-and-Security)
--------------------------------------------

### Device discovery, communication and authentication[¶](#Device-discovery-communication-and-authentication)

  -----------------------------------------------------------------------
  ReqID                   Requirement             References
  ----------------------- ----------------------- -----------------------
  PS-USR-Oxford-103       The webinos Runtime     
                          Environment SHALL only  
                          allow associations to   
                          be made between devices 
                          when predefined network 
                          security practices are  
                          followed, including     
                          transport level         
                          security, device        
                          authentication and user 
                          and device              
                          authorisation           

  PS-USR-Oxford-104       The webinos runtime     
                          SHALL mediate during    
                          service discovery and   
                          apply appropriate       
                          controls where not      
                          provided by another     
                          layer or protocol for   
                          the purpose of enabling 
                          and automating privacy  
                          and security            
                          preferences.            

  PS-USR-Oxford-16        Users SHALL be alerted  WOS-UC-TA1-006
                          of an attempt to        
                          authenticate a webinos  
                          device with another     
                          webinos device, unless  
                          a policy overrides      
                          this.                   

  PS-USR-Oxford-17        The webinos Runtime     WOS-UC-TA4-014:
                          Environment SHALL be    Continuous sharing of a
                          capable of setting      medical file through
                          dynamic access control  webinos enabled devices
                          policies for device     
                          data when initiating an 
                          association to another  
                          webinos Device.         

  PS-USR-Oxford-41        The creation of device  WOS-UC-TA9-003:
                          discovery policies      Enforcing multiple
                          SHALL support the       policies on multiple
                          specification of        devices
                          policies that are       
                          conditionally enforced  
                          across all of the       
                          user's devices.         

  ~~PS-DMA-IBBT-003~~     ~~The webinos runtime   ~~WOS-UC-TA3-004~~
                          SHOULD be able          
                          toprovide access to     
                          custom API's to         
                          devices~~               

  PS-USR-POLITO-012       A user MAY choose the   WOS-UC-TA1-006: Pairing
                          "privacy level" of the  a new device to clone
                          identity used to        settings
                          advertise other webinos 
                          enabled devices.        
  -----------------------------------------------------------------------

### User identification and behaviour[¶](#User-identification-and-behaviour)

  -----------------------------------------------------------------------
  ReqID                   Requirement             References
  ----------------------- ----------------------- -----------------------
  PS-USR-Oxford-67        webinos SHALL remove    WOS-UC-TA2-006
                          access to any           
                          additional              
                          authorization           
                          credentials when a user 
                          logs out                

  PS-USR-TSI-13           webinos SHALL provide a 
                          mechanism for           
                          applications to use     
                          Identifications which   
                          safeguard personal      
                          privacy needs on one    
                          hand side but allow     
                          data sharing for        
                          applications on basis   
                          of a general profile    
                          (e.g. temporary unique  
                          ID for a given maximum  
                          duration).              
  -----------------------------------------------------------------------

### Sharing and protecting personal and contextual data[¶](#Sharing-and-protecting-personal-and-contextual-data)

  ReqID                    Requirement                                                                                                                                      References
  ------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------ ---------------------------------------------------------------
  PS-DEV-Oxford-28         The webinos Runtime SHALL provide access control for context structures with user-defined policies                                               WOS-UC-TA7-008: Create contexts from a pre-defined template
  PS-USR-Oxford-30         webinos shall allow user data to be marked as "personal" in order to specify policies on it.                                                     WOS-UC-TA9-001: Receiving local messages and alerts
  PS-USR-Oxford-54         webinos policies SHALL be able to refer to stored data                                                                                           WOS-UC-TA9-006
  PS-USR-Oxford-55         webinos policies SHALL be able to refer to personal profile information                                                                          WOS-UC-TA9-006
  PS-DEV-Oxford-87         The webinos runtime SHALL be capable of limiting access to user credentials to only a specific user, a specific device and set of applications   WOS-UC-TA9-011
  PS-USR-ambiesense-32     webinos SHALL be able to protect the privacy of each user in line with the EU privacy directives.                                                WOS-US-7.3: Implementing Government-mandated Privacy Controls
  PS-USR-VisionMobile-10   webinos SHALL allow users to express their privacy preferences in a consistent way.                                                              Developer experience analysis
  PS-DEV-VisionMobile-11   webinos applications SHALL be able to query the webinos user privacy preferences                                                                 Developer experience analysis
  PS-DWP-VisionMobile-12   webinos shall use user privacy preferences when granting/denying access to user private information.                                             Developer experience analysis
  PS-DEV-ambiesense-14     Privacy policies change according to applications and external circumstances and SHOULD be context-enabled.                                      Derived from: WOS-US-7.2: Usable Privacy Controls for webinos
  PS-DEV-ambiesense-15     It MUST be possible to define context information as public, shared, or private.                                                                 Derived from: WOS-US-12.1: Multiple Device Gaming

### Policy management, authoring and usage features[¶](#Policy-management-authoring-and-usage-features)

  -----------------------------------------------------------------------
  ReqID                   Requirement             References
  ----------------------- ----------------------- -----------------------
  PS-USR-Oxford-113       There SHALL be a method 
                          for users to view and   
                          edit policies at both a 
                          fine-grained level and  
                          separately for coarse,  
                          quick-to-use actions    

  ~~PS-USR-Oxford-35~~    ~~webinos access        ~~WOS-UC-TA9-002:
                          control policies shall  Interpreting policies
                          be able to specify      and making access
                          fine-grained controls   control decisions~~
                          involving the source    
                          and content of an       
                          access control          
                          request~~               

  PS-USR-Oxford-37        webinos SHALL allow     WOS-UC-TA9-002:
                          access control          Interpreting policies
                          decisions to be logged  and making access
                                                  control decisions

  PS-USR-Oxford-38        webinos SHALL allow     WOS-UC-TA9-002:
                          policies which specify  Interpreting policies
                          confirmation at runtime and making access
                          by a user when an       control decisions
                          access request decision 
                          is required             

  PS-USR-Oxford-40        Users SHALL be able to  WOS-UC-TA9-003:
                          modify policies about   Enforcing multiple
                          events before they      policies on multiple
                          occur (e.g. up-front    devices
                          policy specification)   

  PS-USR-Oxford-49        User SHALL be able to   WOS-UC-TA9-006,
                          view & manage           WOS-UC-Ta6-003:
                          application policies    Modification of
                                                  application policies

  PS-USR-Oxford-50        Users SHALL be provided WOS-UC-TA9-006
                          with the ability to     
                          identify applications   
                          which have been granted 
                          particular privileges   

  PS-USR-Oxford-52        Users SHALL be able to  WOS-UC-TA9-006
                          modify policies         

  ~~PS-USR-Oxford-53~~    ~~webinos policies      ~~WOS-UC-TA9-006,
                          SHALL be capable of     WOS-UC-TA9-002~~
                          referring to and        
                          specifying restrictions 
                          on device capabilities  
                          and features,           
                          application data,       
                          context and personal    
                          information held in     
                          webinos, and access to  
                          other devices and       
                          applications.~~         

  PS-DWP-POLITO-003       Non-necessary           WOS-UC-TA5-001
                          information leakage     Discovering the
                          SHOULD be prevented to  application
                          protect user privacy.   

  PS-USR-Oxford-58        If users are prevented  WOS-UC-TA9-006
                          from modifying some     
                          policy settings,        
                          webinos shall present   
                          users with an           
                          explanation of why      
                          modification is denied. 

  PS-USR-Oxford-75        The webinos runtime     WOS-UC-TA4-014
                          SHALL be able to alert  
                          the user at runtime     

  PS-USR-Oxford-80        There SHALL be a method WOS-UC-TA9-009\
                          for switching the       WOS-UC-Ta6-004\
                          currently-applied user  WOS-UC-Ta6-005,\
                          policy.                 WOS-UC-Ta(x)-00x:
                                                  Building and Deploying
                                                  the webinos Application
                                                  Package\
                                                   WOS-UC-Ta(x)-00x:
                                                  Debugging Applications
                                                  on Real Device

  PS-USR-Oxford-84        Users SHALL be able to  WOS-UC-TA9-010
                          override policy         
                          decisions made by a     
                          third-party policy      
                          management service      

  PS-DEV-IBBT-004         A publish-subscribe     WOS-UC-TA4-001
                          system for events SHALL 
                          exist which requires    
                          authorisation for       
                          application             
                          subscriptions. webinos  
                          SHOULD provide a policy 
                          system regarding        
                          events.                 
  -----------------------------------------------------------------------

### Protection and Lifecycle of policies[¶](#Protection-and-Lifecycle-of-policies)

  -----------------------------------------------------------------------
  ReqID                   Requirement             References
  ----------------------- ----------------------- -----------------------
  PS-USR-Oxford-114       Policies are subject to 
                          install, update,        
                          revocation, deletion.   
                          webinos SHALL provide   
                          systems and mechanisms  
                          for supporting these    
                          activities.             

  PS-USR-Oxford-42        webinos shall be able   WOS-UC-TA9-003:
                          to enforce multiple     Enforcing multiple
                          policies in a           policies on multiple
                          hierarchy.              devices

  PS-USR-Oxford-43        A more privileged user  WOS-UC-TA9-003:
                          (or owner) shall be     Enforcing multiple
                          able to specify a       policies on multiple
                          policy which overrides  devices
                          a less-privileged user. 

  ~~PS-DMA-DEV-Oxford-47~ ~~It SHALL be possible  ~~WOS-UC-TA9-005~~
  ~                       for the webinos runtime 
                          to be installed with    
                          default policies~~      

  PS-USR-Oxford-48        The authenticity and    WOS-UC-TA9-005
                          integrity of policies   
                          shall be enforced       

  PS-DEV-Oxford-56        Applications shall be   WOS-UC-TA9-006
                          aware of changes to     
                          policies and may alter  
                          their behaviour as a    
                          result                  

  PS-ALL-Oxford-61        All webinos             (From the policy story)
                          stakeholders SHALL be   
                          able to author          
                          policies.               

  PS-USR-Oxford-73        The webinos System      WOS-UC-TA4-013
                          SHALL support policies  
                          which can be remotely   
                          updated                 

  PS-DEV-Oxford-79        There SHALL be an       WOS-UC-TA8-007
                          online resource which   
                          provides examples of    
                          common (anonymised)     
                          user policies for use   
                          by developers           

  PS-USR-Oxford-81        webinos SHALL support   WOS-UC-TA9-010
                          outsourced policy       
                          management              

  PS-USR-Oxford-82        A webinos application   WOS-UC-TA9-010
                          store MAY support the   
                          configuration of a      
                          "Policy management      
                          service" which provides 
                          outsourced policy       
                          decisions               

  PS-USR-Oxford-83        The webinos runtime     WOS-UC-TA9-010
                          SHALL support "linking" 
                          a user account to a     
                          policy management       
                          service and integrate   
                          this service into the   
                          policy process          

  PS-USR-ISMB-036         The webinos Runtime     9.1.5. WOS-UC-TA9-005:
                          SHALL support the       Download and install of
                          download, install,      webinos policies
                          update and removal of   
                          security policies.      
                          These operations SHALL  
                          require authorisation   
                          by the user and         
                          policies MUST be        
                          checked for             
                          authenticity and        
                          integrity.              

  PS-DEV-ambiesense-25    The webinos runtime     WOS-UC-TA8-005 Download
                          SHALL protect policies  and Install of webinos
                          from tampering or       Policies
                          modification by         
                          unauthorised            
                          applications. The only  
                          authorised applications 
                          SHALL be from signed,   
                          trusted sources, which  
                          may be defined by the   
                          manufacturer, network   
                          provider or end user.   
                          Users SHALL be warned   
                          if an application       
                          requests permission to  
                          modify policies.        
  -----------------------------------------------------------------------

### Application policies and protection[¶](#Application-policies-and-protection)

  -----------------------------------------------------------------------
  ReqID                   Requirement             References
  ----------------------- ----------------------- -----------------------
  ~~PS-USR\_DEV-Oxford-44 ~~Applications shall    ~~WOS-UC-TA9-004:
  ~~                      specify at install time Install-time
                          (or first use) the      presentation and
                          functionality they      negotiation of
                          require access to.~~    application policies~~

  PS-USR\_DEV-Oxford-45   Users shall be able to  WOS-UC-TA9-004:
                          specify at application  Install-time
                          install time (or first  presentation and
                          use) which              negotiation of
                          functionality they      application policies
                          permit an application   
                          to have access to.      

  PS-USR\_DEV-Oxford-46   Applications SHALL      WOS-UC-TA9-004:
                          request for access      Install-time
                          rights to any device    presentation and
                          feature or              negotiation of
                          policy-controlled item  application policies,
                          prior to accessing it.  WOS-US-7.1 Designing
                          If an access request is Policy-aware webinos
                          denied, applications    Applications
                          shall be notified to    
                          deal with this          
                          gracefully              

  PS-USR-Oxford-57        webinos shall deny      WOS-UC-TA9-006
                          users the ability to    
                          modify some policy      
                          settings if a policy by 
                          a more privileged       
                          authority exists which  
                          overrides them.         

  PS-DEV-Oxford-64        The webinos Runtime     WOS-UC-TA4-015 involves
                          SHALL use the most      sending a medical file
                          secure communication    with assumed private
                          option available unless information
                          otherwise specified by  
                          an application or user. 

  PS-USR-Oxford-69        Users SHALL be informed WOS-UC-TA3-001
                          of any intended access  
                          to critical APIs used   
                          by a webinos            
                          application at install  
                          time.                   

  PS-USR-Oxford-72        The webinos System      WOS-UC-TA4-013
                          SHALL support           
                          applications which      
                          apply access control    
                          policies to data        
                          produced or owned by    
                          the application         
                          developer. These        
                          policies MAY support    
                          revocation of access    
                          control permissions     

  PS-DEV-Oxford-88        A method MUST be        WOS-UC-TA9-013,
                          provided to enable      WOS-US-7.1 Designing
                          webinos applications to Policy-aware webinos
                          explain why access to   Applications
                          data or APIs is being   
                          requested               

  PS-DEV-Oxford-89        A method MUST be        PS-DEV-Oxford-88,
                          provided to enable      WOS-UC-TA5-001,
                          webinos applications to WOS-UC-TA5-002,
                          explain how collected   WOS-UC-TA5-003,
                          sensitive data will be  WOS-UC-TA5-004
                          managed (e.g., company  
                          name, purpose           
                          description).           

  ~~PS-USR-Oxford-102~~   ~~Installation SHALL be ~~WOS-UC-Ta6-007:
                          granted or denied       Installing an
                          according to security   application~~
                          policies~~              

  PS-USR-Oxford-123       The webinos runtime     
                          MUST enforce any        
                          application             
                          restrictions specifying 
                          whether an application  
                          may run on the device   

  PS-DEV-ambiesense-21    An application          WOS-US-7.1 Designing
                          developer MUST be able  Policy-aware webinos
                          to define and control a Applications
                          privacy policy for his  
                          or her application that 
                          is separate from all    
                          other applications. Any 
                          changes to an existing  
                          policy MUST be approved 
                          by the end user.        
  -----------------------------------------------------------------------

### Runtime protection[¶](#Runtime-protection)

  -----------------------------------------------------------------------
  ReqID                   Requirement             References
  ----------------------- ----------------------- -----------------------
  ~~PS-USR-Oxford-116~~   ~~The webinos Runtime   
                          Environment SHALL       
                          protect applications    
                          and itself from         
                          potentially malicious   
                          applications and SHALL  
                          protect the device from 
                          being made unusable or  
                          damaged by              
                          applications.~~         

  PS-USR-Oxford-34        webinos shall provide   WOS-UC-TA9-002:
                          complete mediation of   Interpreting policies
                          access requests by      and making access
                          applications and        control decisions
                          enforce all policies    

  PS-USR-Oxford-59        The webinos runtime     WOS-UC-TA9-012
                          environment SHALL       
                          securely store          
                          application data to     
                          prevent disclosure to   
                          unauthorised entities   

  PS-USR-TSI-3            webinos shall ensure    
                          that no application can 
                          use more resources      
                          (e.g., CPU, memory,     
                          ...) than declared      
                          ahead                   

  PS-DWP-ISMB-202         The webinos runtime     WOS-UC-TA6-00X:
                          MUST ensure that an     Checking access to APIs
                          application does not    
                          access device features, 
                          extensions and content  
                          other than those        
                          associated to it.       
  -----------------------------------------------------------------------

### webinos component authorization[¶](#webinos-component-authorization)

  ReqID               Requirement                                                                                                                   References
  ------------------- ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------
  PS-USR-Oxford-120   A webinos Cloud shall determine the services a webinos Device is authorised to use before providing access to its services.   WOS-UC-TA5-001: Discovering the application

Negotiation and Compatibility[¶](#Negotiation-and-Compatibility)
----------------------------------------------------------------

### Policy Negotiation[¶](#Policy-Negotiation)

  ReqID                  Requirement                                                                                                         References
  ---------------------- ------------------------------------------------------------------------------------------------------------------- --------------------------
  NC-DEV-IBBT-009        An application MUST be able to define preferences regarding the resources it needs to access.                       4.1.1 WOS-UC-TA4-001
  NC-DWP-IBBT-0010       The webinos platform MUST be able to check differences in application policies between versions.                    5.1.5 WOS-UC-TA5-005
  ~~NC-DEV-IBBT-0015~~   ~~Applications MUST be able to access the user's general webinos preferences (with the permission of the user).~~   ~~2.1.2 WOS-UC-TA2-002~~

Lifecycle[¶](#Lifecycle)
------------------------

### Application Metadata[¶](#Application-Metadata)

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ReqID             Requirement                                                                                                                                               References
  ----------------- --------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------
  LC-DEV-ISMB-003   An application MUST be associated with required and optional APIs it MAY use, as well as their minimum/supported versions.                                3.1.4. WOS-UC-TA3-004: Embedding Proprietary Extensions\
                                                                                                                                                                              5.1.1. WOS-UC-TA5-001: Discovering the application\
                                                                                                                                                                              5.1.2. WOS-UC-TA5-002: Executing the application from the web or another device (no installation)\
                                                                                                                                                                              5.1.3. WOS-UC-TA5-003: Executing the application from the web or another device (partial installation)\
                                                                                                                                                                              5.1.4. WOS-UC-TA5-004: Installation and update of webinos applications\
                                                                                                                                                                              9.1.4. WOS-UC-TA9-004: Install-time presentation and negotiation of application policies\
                                                                                                                                                                              9.1.11. WOS-UC-TA9-011: Developing an application which requires access to policy-controlled device functions

  LC-DEV-ISMB-006   An application MUST be associated with a method (e.g. digital signature) for the webinos runtime to perform origin authenticity and integrity checking.   5.1.2. WOS-UC-TA5-002: Executing the application from the web or another device (no installation)\
                                                                                                                                                                              5.1.3. WOS-UC-TA5-003: Executing the application from the web or another device (partial installation)\
                                                                                                                                                                              5.1.4. WOS-UC-TA5-004: Installation and update of webinos applications
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### ~~Application lifecycle~~[¶](#Application-lifecycle)

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ReqID                 Requirement                                                                                                                                                                                                                                            References
  --------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ---------------------------------------------------------------------------------------------------------
  ~~LC-USR-ISMB-037~~   ~~The user SHALL be able to transfer, install, update or remove Installable Applications from/to the devices he/she owns at any time, also remotely.~~                                                                                                 ~~1.1.6. WOS-UC-Ta1-006: Pairing a new device to clone settings\
                                                                                                                                                                                                                                                                               1.1.8. WOS-UC-TA1-008: webinos Federation\
                                                                                                                                                                                                                                                                               3.1.1. WOS-UC-TA3-001: Application Push\
                                                                                                                                                                                                                                                                               3.1.3. WOS-UC-TA3-003: Application Advertisement\
                                                                                                                                                                                                                                                                               5.1.1. WOS-UC-TA5-001: Discovering the application\
                                                                                                                                                                                                                                                                               5.1.3. WOS-UC-TA5-003: Executing the application from the web or another device (partial installation)\
                                                                                                                                                                                                                                                                               5.1.4. WOS-UC-TA5-004: Installation and update of webinos applications\
                                                                                                                                                                                                                                                                               5.1.7. WOS-UC-TA5-007: Update of applications\
                                                                                                                                                                                                                                                                               8.1.1. WOS-UC-TA8-001: Pairing a new device to configure webinos~~

  ~~LC-USR-ISMB-038~~   ~~The user SHALL be able to transfer, install, update or remove Installable Applications from/to the devices he/she owns from within other applications.~~                                                                                             ~~3.1.1. WOS-UC-TA3-001: Application Push~~

  ~~LC-USR-ISMB-039~~   ~~It SHALL be possible for an authorized entity that is not the user to transfer, install, update or remove Installable Applications from/to one or more devices owned by the user. Such authorized entity SHALL provide a motivation to the user.~~   ~~5.1.8. WOS-UC-TA5-008: Removal of applications~~
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Device and Service Functional Capability[¶](#Device-and-Service-Functional-Capability)
--------------------------------------------------------------------------------------

### Access to HW and SW resources[¶](#Access-to-HW-and-SW-resources)

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ReqID              Requirement                                                                                                                                       References
  ------------------ ------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------
  CAP-DWB-FHG-002    The webinos runtime SHOULD allow access to non-webinos APIs to device features                                                                    WOS-UC-TA3-004: Embedding Proprietary Extensions

  CAP-DEV-SEMC-001   A webinos user agent MUST support access control for webinos applications access to the user's HW and SW resources that need access protection.   WOS-UC-TA1-001: Virtual Device\
                                                                                                                                                                       WOS-UC-TA1-002: Network Independent Virtual Device\
                                                                                                                                                                       WOS-UC-Ta1-003: Virtual Device Ownership\
                                                                                                                                                                       WOS-UC-TA1-005: Sensors and Actuators\
                                                                                                                                                                       Etc.
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Access to remote devices and applications[¶](#Access-to-remote-devices-and-applications)

  ----------------------------------------------------------------------------------------------------------------------------------
  ReqID             Requirement                                                References
  ----------------- ---------------------------------------------------------- -----------------------------------------------------
  CAP-DEV-FHG-100   Access to resources on remote devices SHALL be available   WOS-UC-TA1-002: Network Independent Virtual Device\
                                                                               WOS-UC-TA1-003: Virtual Device Ownership\
                                                                               WOS-UC-TA1-005: Sensors and Actuators\
                                                                               WOS-UC-TA3-002: Code Outsourcing
  ----------------------------------------------------------------------------------------------------------------------------------

### Application execution[¶](#Application-execution)

  ReqID             Requirement                                                                                                 References
  ----------------- ----------------------------------------------------------------------------------------------------------- --------------------------------------------------------
  CAP-DEV-FHG-204   It SHALL be possible to 'park' a session state in the cloud and continue the session from another device.   WOS-UC-TA4-016: Handover VoD Context from PC to Mobile

Transfer and Management of State[¶](#Transfer-and-Management-of-State)
----------------------------------------------------------------------

### State definition and access[¶](#State-definition-and-access)

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ReqID                Requirement                                                                                                                           References
  -------------------- ------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------
  TMS-DWP-POLITO-002   Attributes values that describe application state SHALL be available to authorized entities (e.g. applications) only                  5.1.1. WOS-UC-TA5-001: Discovering the application\
                                                                                                                                                             5.1.2. WOS-UC-TA5-002: Executing the application from the web or another device (no installation)\
                                                                                                                                                             5.1.3. WOS-UC-TA5-003: Executing the application from the web or another device (partial installation)\
                                                                                                                                                             5.1.4. WOS-UC-TA5-004: Installation and update of webinos applications - Policy and Security, APIs, WRE

  TMS-DWP-POLITO-004   The webinos runtime MAY protect confidentiality of state data when transferred from one authorized device to another                  5.1.1. WOS-UC-TA5-001: Discovering the application\
                                                                                                                                                             5.1.2. WOS-UC-TA5-002: Executing the application from the web or another device (no installation)\
                                                                                                                                                             5.1.3. WOS-UC-TA5-003: Executing the application from the web or another device (partial installation)\
                                                                                                                                                             5.1.4. WOS-UC-TA5-004: Installation and update of webinos applications\
                                                                                                                                                             WOS-UC-TA4-006: Sharing Application States across Several Devices\
                                                                                                                                                             Policy and Security, WRT, webinos Agent

  TMS-DWP-POLITO-005   The webinos runtime SHALL protect integrity of state data when transferred from one authorized device to another                      5.1.1. WOS-UC-TA5-001: Discovering the application\
                                                                                                                                                             5.1.2. WOS-UC-TA5-002: Executing the application from the web or another device (no installation)\
                                                                                                                                                             5.1.3. WOS-UC-TA5-003: Executing the application from the web or another device (partial installation)\
                                                                                                                                                             5.1.4. WOS-UC-TA5-004: Installation and update of webinos applications\
                                                                                                                                                             Policy and Security, WRT, webinos Agent

  TMS-DWP-POLITO-006   The webinos runtime SHALL ensure originator's authenticity of state attributes when exchanged from one authorized device to another   5.1.1. WOS-UC-TA5-001: Discovering the application\
                                                                                                                                                             5.1.2. WOS-UC-TA5-002: Executing the application from the web or another device (no installation)\
                                                                                                                                                             5.1.3. WOS-UC-TA5-003: Executing the application from the web or another device (partial installation)\
                                                                                                                                                             5.1.4. WOS-UC-TA5-004: Installation and update of webinos applications - Policy and Security, WRT, webinos Agent
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Transferring Application State Between Devices Belonging to the Same User[¶](#Transferring-Application-State-Between-Devices-Belonging-to-the-Same-User)

  ReqID                  Requirement                                                                                                                                             References
  ---------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------
  TMS-DEV-VOLANTIS-004   A webinos application SHOULD be able to synchronize its data with an application working on another authorized device at specific time periods.         WOS-UC-TA1-014
  TMS-DEV-VOLANTIS-005   A webinos application SHOULD be able to synchronize its data with an application working on another authorized device when launching the application.   WOS-UC-TA1-014
  TMS-DEV-VOLANTIS-006   A webinos application SHOULD be able to synchronize its data with an application working on another authorized device when exiting the application.     WOS-UC-TA1-014
  TMS-DEV-VOLANTIS-007   A webinos application MUST be able to synchronize just a subset of data with an application working on another authorized device.                       WOS-UC-TA4-005
  TMS-USR-POLITO-008     A webinos application SHOULD allow user to define which attribute to synchronize with an application working on another authorized device.              4.1.5 WOS-UC-TA4-005: Progressive Download and Store Content in a Secure File Storage

### Methods of Transferring the Application State[¶](#Methods-of-Transferring-the-Application-State)

  ReqID                  Requirement                                                                                                         References
  ---------------------- ------------------------------------------------------------------------------------------------------------------- ----------------
  TMS-DWP-VOLANTIS-013   The webinos platform MAY be able to select the most appropriate way method of synchronizing the application data.   WOS-UC-TA4-002

### Managing the Application State[¶](#Managing-the-Application-State)

  -----------------------------------------------------------------------
  ReqID                   Requirement             References
  ----------------------- ----------------------- -----------------------
  TMS-USR-VOLANTIS-015    The webinos user SHOULD 
                          be able to disable      
                          synchronization for     
                          selected applications.  

  TMS-USR-VOLANTIS-016    The webinos user SHOULD 
                          be able to disable      
                          synchronization for     
                          selected devices.       

  TMS-USR-VOLANTIS-017    The webinos user SHOULD 
                          be able to list and to  
                          manage all the          
                          applications which      
                          synchronize their data  
                          with other webinos      
                          devices.                
  -----------------------------------------------------------------------

### Online Collaboration[¶](#Online-Collaboration)

  ReqID              Requirement                                                                                                                                     References
  ------------------ ----------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------
  TMS-DEV-SEMC-018   The webinos system SHALL support the possibility to share and edit data objects for online collaborative applications in a responsive manner.   WOS-UC-TA4-006: Sharing Application States across Several Devices
  TMS-DEV-SEMC-019   The webinos system MUST be able to resolve inconsistencies if two or more parties are modifying the same data object.                           WOS-UC-TA4-006: Sharing Application States across Several Devices

### Various other requirements[¶](#Various-other-requirements)

  ReqID               Requirement                                                                                     References
  ------------------- ----------------------------------------------------------------------------------------------- ---------------------------------
  TMS-USR-Oxford-29   For each identified device on a webinos cloud, the current device status shall be registered.   WOS-UC-TA4-017: Wake-on-webinos


