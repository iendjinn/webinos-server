Application execution APIs[¶](#Application-execution-APIs)
==========================================================

This section contains investigation results on application execution
APIs.

Resources[¶](#Resources)
------------------------

Primary contributor/editor for this API category: VisionMobile\
Supporting contributors/reviewers: Fraunhofer

Description[¶](#Description)
----------------------------

The Application Execution API allows activation of native and webinos
applications installed on the device.

In addition, the API will support a facility for performing late
run-time binding between different webinos applications. This facility
is modeled after Intent mechanism of Android OS. An intent is an
abstract description of an operation to be performed, which holds a
passive data structure containing an abstract description of an action
to be performed. For example webinos application may request the system
to show a map using generic intent mechanism. The run-time will then
choose which mapping application should be activated to perform the
action. The requesting application is not required to have any knowledge
of which specific mapping application is installed in the device.

Policies[¶](#Policies)
----------------------

Operation of Application Execution API is guided by Application
Execution Policies, which can be modified by user. The policies control
the following aspects of API operation:

-   Enable/disable of activation of native applications
-   Enable/disable of activation of webinos installable applications
-   Enable/disable of notifications to users when a webinos application
    attempts to activate another application
-   Enable/disable application’s ability to discover installed
    applications
-   Enable/disable of logging of operations performed using the API

Application Execution API provides mechanisms for webinos applications
to discover current application execution policies, as well as test if
specific webinos application is installed in the device, or is running
in the device.

Analysis of requirements from WP2.2[¶](#Analysis-of-requirements-from-WP22)
---------------------------------------------------------------------------

The table below lists relevant requirements identified in WP2.2 and the
compliance status based on current proposal.

  ------------------ ------------------ ------------------ ------------------
  **Requirement**    **Description**    **Compliance       **Notes**
                                        Status**           

  DA-DEV-SEMC-004    Webinos SHALL      Phase 2            Postponed due to
                     provide means for                     T3.5 decision to
                     an Application to                     drop any policy
                     detect the                            querying API
                     availability of a                     
                     service.                              

  DA-ASP-FHG-006     Webinos SHALL      Phase 2            Postponed due to
                     provide means to                      T3.5 decision to
                     discover devices                      drop any policy
                     that have a                           querying API
                     specific                              
                     application                           
                     installed.                            

  DA-DEV-ISMB-002    Applications       Phase 2            Postponed due to
                     installed on a                        T3.5 decision to
                     device SHALL be                       drop any policy
                     discoverable,                         querying API
                     according to                          
                     security policies.                    

  NM-DEV-FOKUS-002   It SHALL be        Phase 2            
                     possible to                           
                     subscribe to                          
                     certain event                         
                     types in order to                     
                     get notified if                       
                     the related event                     
                     occurs.                               

  NM-USR-IBBT-002    It SHALL be        **Phase 1**        
                     possible to notify                    
                     the user of                           
                     application launch                    
                     requests                              

  PS-USR-Oxford-112  The Webinos        **Phase 1**        
                     Runtime                               
                     Environment SHALL                     
                     be capable of                         
                     specifying                            
                     fine-grained                          
                     security policies                     
                     on all features of                    
                     devices and user                      
                     data.                                 

  PS-USR-Oxford-37   Webinos SHALL      **Phase 1**        
                     allow access                          
                     control decisions                     
                     to be logged                          

  PS-USR-Oxford-38   Webinos SHALL      **Phase 1**        
                     allow policies                        
                     which specify                         
                     confirmation at                       
                     runtime by a user                     
                     when an access                        
                     request decision                      
                     is required                           

  PS-USR-Oxford-40   Users SHALL be     **Phase 1**        
                     able to modify                        
                     policies about                        
                     events before they                    
                     occur (e.g.                           
                     up-front policy                       
                     specification)                        

  PS-USR-Oxford-49   User SHALL be able **Phase 1**        
                     to view & manage                      
                     application                           
                     policies                              

  PS-USR-Oxford-52   Users SHALL be     **Phase 1**        
                     able to modify                        
                     policies to allow                     
                     or deny access to                     
                     further                               
                     functionality or                      
                     data                                  

  PS-USR-Oxford-75   The Webinos        **Phase 1**        
                     runtime SHALL be                      
                     able to alert the                     
                     user at runtime                       
                     using a visual                        
                     notification                          

  PS-USR\_DEV-Oxford Applications SHALL **Phase 1**        
  -46                request for access                    
                     rights to any                         
                     device feature or                     
                     policy-controlled                     
                     item prior to                         
                     accessing it.                         
                     Applications MUST                     
                     be able to                            
                     continue to work                      
                     in a limited                          
                     manner if an                          
                     access request to                     
                     a feature is not                      
                     granted.                              

  PS-USR-Oxford-62   Applications SHALL **Phase 1**        
                     be isolated from                      
                     each other. An                        
                     application MUST                      
                     NOT be able to                        
                     view or modify                        
                     another                               
                     application's data                    
                     or execution state                    

  LC-DWP-ISMB-116    Lifecycle          Phase 2            
                     operations                            
                     regarding the                         
                     Webinos runtime                       
                     itself SHALL                          
                     nicely integrate                      
                     with the package                      
                     management system                     
                     of the underlying                     
                     platform and SHALL                    
                     follow                                
                     platform-specific                     
                     common practices.                     

  CAP-DEV-SEMC-202   It MUST be         Phase 2            
                     possible to                           
                     register a                            
                     background                            
                     application for                       
                     automatic                             
                     execution at                          
                     device start-up.                      

  CAP-DEV-SEMC-203   Webinos runtime    Phase 2            
                     MUST be able to                       
                     start applications                    
                     based on events,                      
                     e.g. an incoming                      
                     message, detected                     
                     wifi coverage,                        
                     sensor connected                      
                     etc.                                  

  CAP-DEV-SEMC-204   The webinos        Phase 2            
                     runtime SHALL be                      
                     able to invoke                        
                     applications by a                     
                     timer based event.                    
  ------------------ ------------------ ------------------ ------------------

Functional API groups[¶](#Functional-API-groups)
------------------------------------------------

The Application Execution API contains the following groups of
functions:

1.  Activation of native app. Due to differences in security models
    between native and webinos apps, activation of native apps requires
    user consent. Optional completion code can be passed to the
    initiating webinos application.
2.  Activation of installable webinos apps. Activated application should
    be able to pass results to the originating application. The
    originating application shall be able to receive asynchronous
    notifications about completion of the activated application.
3.  Sending intents activating generic set of functions. There should be
    default handler and user selection of alternative handler.
4.  Inquire activation policies to discover current system configuration
5.  Test if specific webinos application is installed in the device
6.  Test if specific webinos application is running in the device
7.  Delivery of system-wide events (e.g. boot or shut-down,
    power-management) that start webinos app automatically whenever
    event occurs. This is similar to Android broadcast intents.
    (registration for the events is performed in webinos app manifest
    file.) This API is different from general event/messaging API, which
    is intended to be used to deliver information between two *running*
    apps. Broadcast event reception API is intended to deliver
    system-wide broadcast events, including starting an app that
    registered event, in case the app is not running.

The following table shows planned implementation status for Phase 1 and
Phase 2.

  --------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------- -------------
  **API name**                **Description**                                                                                                                                           **Phase**
  Launch native               Launch native apps installed on the device                                                                                                                Phase 2
  Launch webinos              Launch webinos apps installed on the device                                                                                                               **Phase 1**
  Launch action               Sending intents activating generic set of functions.                                                                                                      Phase 2
  Check policies              Inquire activation policies to discover current system configuration. (Postponed due to T3.5 decision to drop any policy querying API (Berlin meeting))   Phase 2
  Check local                 Test if specific webinos application is installed in the device                                                                                           **Phase 1**
  Check running               Test if specific webinos application is running in the device                                                                                             Phase 2
  Broadcast event reception   Delivery of system-wide events (e.g. boot or shut-down, power-management) that start webinos app automatically whenever event occurs.                     Phase 2
  --------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------- -------------

Phase 1 APIs[¶](#Phase-1-APIs)
------------------------------

### Webinos App Launcher API[¶](#Webinos-App-Launcher-API)

**Description:** API for launching webinos applications installed in the
device (local webinos apps)\
**Requirement/architectural reference:**

-   NM-USR-IBBT-002 - It SHALL be possible to notify the user of
    application launch requests
-   PS-USR-Oxford-36 - Webinos APIs shall provide error results when an
    access control request is denied
-   PS-USR-Oxford-62 - Applications SHALL be isolated from each other.
    An application MUST NOT be able to view or modify another
    application's data or execution state

**Phase:** 1\
**Webinos responsible:** Michael Vakulenko, VisionMobile

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [BONDI 1.1  A           BONDI RI    Use of MIME Proposal:   
  applauncher JavaScript  (reference  types for   webinos API 
  Module](htt API that    implementat identificat will be     
  p://bondi.o lists and   ion)        ion         modelled    
  mtp.org/1.1 launches                of apps is  after BONDI 
  /cr/apis/ap application             different   launcher    
  plauncher.h s                       from        API with    
  tml)        installed               webinos     necessary   
              on a mobile             approach    modificatio 
              device. The             where apps  ns          
              apps are                are         to reflect  
              identified              identified  webinos     
              by URI with             using       approach.   
              well-known              application             
              MIME types.             ID.                     
  ----------- ----------- ----------- ----------- ----------- -----------

### Check installed app API[¶](#Check-installed-app-API)

**Description:** API for checking if specific webinos application is
installed in the device

**Requirement/architectural reference:**

-   DA-DEV-SEMC-004 - Webinos SHALL provide means for an Application to
    detect the availability of a service.
-   DA-ASP-FHG-006 - Webinos SHALL provide means to discover devices
    that have a specific application installed.
-   DA-DEV-ISMB-002 - Applications installed on a device SHALL be
    discoverable, according to security policies.

**Phase:** 1\
**Webinos responsible:** Michael Vakulenko, VisionMobile

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [BONDI 1.1  A           BONDI RI    BONDI API   Proposal:   
  applauncher JavaScript  (reference  allows to   webinos API 
  Module](htt API that    implementat map apps to will be     
  p://bondi.o lists and   ion)        URI names   modelled    
  mtp.org/1.1 launches                discovering after BONDI 
  /cr/apis/ap application             all         launcher    
  plauncher.h s                       registered  API with    
  tml)        installed               apps.       necessary   
              on a mobile             webinos     modificatio 
              device. The             will allow  ns          
              apps are                to check    to reflect  
              identified              for         webinos     
              by URI with             presence of approach.   
              well-known              a specific              
              MIME types.             webinos                 
                                      app.                    
  ----------- ----------- ----------- ----------- ----------- -----------

Phase 2 APIs[¶](#Phase-2-APIs)
------------------------------

### Activation Policies API[¶](#Activation-Policies-API)

**Description:** API for discovery of current policy setting

**Requirement/architectural reference:**

-   PS-USR-Oxford-112 - The Webinos Runtime Environment SHALL be capable
    of specifying fine-grained security policies on all features of
    devices and user data.
-   PS-USR-Oxford-37 - Webinos SHALL allow access control decisions to
    be logged
-   PS-USR-Oxford-38 - Webinos SHALL allow policies which specify
    confirmation at runtime by a user when an access request decision is
    required
-   PS-USR-Oxford-40 - Users SHALL be able to modify policies about
    events before they occur (e.g. up-front policy specification)
-   PS-USR-Oxford-52 - Users SHALL be able to modify policies to allow
    or deny access to further functionality or data
-   PS-USR-Oxford-75 - The Webinos runtime SHALL be able to alert the
    user at runtime using a visual notification
-   PS-USR\_DEV-Oxford-46 - Applications SHALL request for access rights
    to any device feature or policy-controlled item prior to accessing
    it. Applications MUST be able to continue to work in a limited
    manner if an access request to a feature is not granted.

**Phase:** 2\
**Webinos responsible:** Michael Vakulenko, VisionMobile

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  No suitable                                     This API    
  candidate                                       may be      
  identified                                      folded into 
                                                  general     
                                                  policy      
                                                  control     
                                                  framework.  
                                                  The issue   
                                                  is          
                                                  discussed   
                                                  with T3.5.  
                                                  If decided  
                                                  otherwise,  
                                                  a new API   
                                                  will be     
                                                  specified   
                                                  for this    
                                                  functionali 
                                                  ty          
  ----------- ----------- ----------- ----------- ----------- -----------

### Native App Launcher API[¶](#Native-App-Launcher-API)

**Description:** API for launching native applications installed in the
device\
**Requirement/architectural reference:**

-   LC-DWP-ISMB-116 - Lifecycle operations regarding the Webinos runtime
    itself SHALL nicely integrate with the package management system of
    the underlying platform and SHALL follow platform-specific common
    practices.
-   PS-USR-Oxford-62 - Applications SHALL be isolated from each other.
    An application MUST NOT be able to view or modify another
    application's data or execution state

**Phase:** 2\
**Webinos responsible:** Michael Vakulenko, VisionMobile

### Webinos Intent API[¶](#Webinos-Intent-API)

**Description:** API for sending intents activating generic set of
functions

**Requirement/architectural reference:** Need to clarify with T3.1

**Phase:** 2\
**Webinos responsible:** Michael Vakulenko, VisionMobile

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [Web        Web         Currently   TBD         More        
  Introducer] Introducer  there is an             detailed    
  (http://web concept was experimenta             information 
  -send.org/) initiated   l                       about this  
              by Google.  pure                    API is      
              SEMC and    [HTML+JS                available   
              Mozilla is  implementat             in [Web     
              cooperating ion](http:/             Introducer  
              with Google /code.googl             investigati 
              on the      e.com/p/web             on](http:// 
              concept.    introducer/             dev.webinos 
              The goal is )                       .org/redmin 
              to make the of the Web              e/projects/ 
              concept a   Introducer              wp3-1/wiki/ 
              W3C         API that                Web_Introdu 
              recommendat works in                cer_investi 
              ion         currently               gation)     
              specificati deployed                            
              on.         modern                              
              Web         browsers.                           
              Introducer  Experimenta                         
              enables web l                                   
              application application                         
              s           s                                   
              to discover are:\                               
              a user's    - [Share                            
              personal    Link](http:                         
              resources,  //customer.                         
              no matter   web-send.or                         
              where they  g/)\                                
              are hosted  - [Get                              
              or          image](http                         
              produced,   ://semccust                         
              and gain    omer.appspo                         
              permission  t.com/)                             
              to interact                                     
              with them                                       
              via a                                           
              one-click                                       
              user                                            
              interaction                                     
              .                                               
  ----------- ----------- ----------- ----------- ----------- -----------

### Activation Test API[¶](#Activation-Test-API)

**Description:** API for checking if specific webinos application is
running in the device

**Requirement/architectural reference:**

-   DA-DEV-SEMC-004 - Webinos SHALL provide means for an Application to
    detect the availability of a service.

**Phase:** 2\
**Webinos responsible:** Michael Vakulenko, VisionMobile

### Broadcast event reception API[¶](#Broadcast-event-reception-API)

**Description:** API for reception of system-wide events. This API is
different from general event/messaging API, which is intended to be used
to deliver information between two *running* apps. Broadcast event
reception API is intended to deliver system-wide broadcast events,
including starting an app that registered event, in case the app is not
running.

**Requirement/architectural reference:**

-   NM-DEV-FOKUS-002 - It SHALL be possible to subscribe to certain
    event types in order to get notified if the related event occurs.
-   CAP-DEV-SEMC-202 - It MUST be possible to register a background
    application for automatic execution at device start-up.
-   CAP-DEV-SEMC-203 - Webinos runtime MUST be able to start
    applications based on events, e.g. an incoming message, detected
    wifi coverage, sensor connected etc.
-   CAP-DEV-SEMC-204 - The webinos runtime SHALL be able to invoke
    applications by a timer based event.

**Phase:** 2\
**Webinos responsible:** Michael Vakulenko, VisionMobile

Supporting information[¶](#Supporting-information)
--------------------------------------------------

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [WAC 2.0    URI schemes Specificati Just local  The system  
  Device      are the     on          apps.       defines     
  APIs: Web   defined     is Proposed             which       
  Standards/  method for  Released                application 
  2.8. URI    WAC         Version                 is started  
  Schemes](ht application                         depending   
  tp://specs. s                                   on scheme   
  wacapps.net to launch                           or file     
  /wac2_0/feb other                               type. E.g.  
  2011/core/w application                         `<a href="t 
  eb-standard s.                                  el:+123">di 
  s.html)                                         al</a>`     
                                                  would start 
                                                  the dialer  
                                                  or          
                                                  `<a href="d 
                                                  ata:applica 
                                                  tion/pdf:.. 
                                                  .>open</a>` 
                                                  would open  
                                                  the pdf     
                                                  data.       

  [W3C DAP    A           W3C ED      Just local  Current     
  The         JavaScript              apps.       Editor's    
  Application API for                             Draft       
  Launcher    launching                           allows to   
  API](http:/ native                              query       
  /dev.w3.org applicatino                         installed   
  /2009/dap/a s                                   application 
  pp-launcher on a                                s           
  /)          device.                             and set     
                                                  default     
                                                  application 
                                                  s.          
                                                  So you can  
                                                  either let  
                                                  the system  
                                                  decide      
                                                  which app   
                                                  to start or 
                                                  explicitly  
                                                  start an    
                                                  application 
                                                  .           
                                                  But         
                                                  multiple    
                                                  members of  
                                                  DAP want    
                                                  just URI    
                                                  schemes,    
                                                  few voices  
                                                  suggest a   
                                                  module is   
                                                  needed for  
                                                  mobile (See 
                                                  [minutes](h 
                                                  ttp://www.w 
                                                  3.org/2010/ 
                                                  11/05-dap-m 
                                                  inutes.html 
                                                  )           
                                                  and         
                                                  [current    
                                                  charter](ht 
                                                  tp://www.w3 
                                                  .org/2010/1 
                                                  1/DeviceAPI 
                                                  Charter.htm 
                                                  l)).        
                                                  Note by     
                                                  Claes       
                                                  20110331:   
                                                  According   
                                                  to DAP      
                                                  phone       
                                                  meeting     
                                                  2011-03-30  
                                                  there is a  
                                                  decision to 
                                                  not include 
                                                  the App     
                                                  Launcher in 
                                                  the         
                                                  charter.    

  [Mozilla    [Open Web   [Experiment             Besides     
  Open Web    Apps](https al                      listing and 
  Apps        ://apps.moz Firefox 4               launching   
  JavaScript  illalabs.co add-on](htt             application 
  API](https: m/)         ps://apps.m             s,          
  //developer from        ozillalabs.             installing  
  .mozilla.or Mozilla is  com/addons/             and         
  g/en/OpenWe a spec that firefox.htm             uninstallin 
  bApps/The_J can package l)\                     g           
  avaScript_A a website   [Experiment             other       
  PI)         and make it al                      application 
              installable Google                  s           
              in the      Chrome                  is also     
              browser.    extension](             supported.  
              The         https://app                         
              JavaScript  s.mozillala                         
              API handles bs.com/addo                         
              installatio ns/chrome.h                         
              n           tml)                                
              and                                             
              management                                      
              functions.                                      

  [BONDI 1.1  A           BONDI RI    Just local  Doesn't     
  applauncher JavaScript  (reference  apps.       support     
  Module](htt API that    implementat             setting     
  p://bondi.o lists and   ion)                    default     
  mtp.org/1.1 launches                            application 
  /cr/apis/ap native                              s.          
  plauncher.h application                         Application 
  tml)        s                                   can be      
              on a mobile                         explicitly  
              device.                             started.    
                                                  E.g.        
                                                  `bondi.appl 
                                                  auncher.lau 
                                                  nchApplicat 
                                                  ion(succCal 
                                                  lB, errCall 
                                                  B, "file:/b 
                                                  in/fpsgame" 
                                                  );`         
  ----------- ----------- ----------- ----------- ----------- -----------

### Background tasks[¶](#Background-tasks)

**Description:** To run task in background. This is an independent
entity and result of worker thread is updated to event.\
**Requirement/architectural reference:** CAP-DEV-FHG-200 The webinos
runtime SHALL be able to run applications in the background.\
**Phase:**\
**Webinos responsible:**

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [W3C Web    Web Workers Implementat None        Web workers 
  Workers](ht instantiate ion         identified, are         
  tp://dev.w3 scripts     of Web      except it   intended to 
  .org/html5/ which run   Workers is  has quite   facilitate  
  workers/)   in parallel present in  [high       multi-threa 
              and does    [all        performance ding        
              not require browsers](h startup     in web      
              any input   ttp://caniu time and    apps. This  
              from UI or  se.com/#sea high memory is good for 
              script      rch=webwork consumption background  
              handling    ers),       ](http://ww tasks that  
              page. To    some have   w.whatwg.or do not      
              handle I/O  basic       g/specs/web require to  
              operation   functionali -workers/cu update the  
              it can make ty          rrent-work/ DOM tree/UI 
              use of      and some    ).          directly.   
              XMLHttpRequ support                 However,    
              est         shared                  web workers 
              to get      worker                  are not     
              output.     functionali             feasible    
              Results of  ty                      for         
              Worker                              background  
              thread are                          jobs that   
              updated to                          needs to be 
              the                                 started at  
              subscribed                          system      
              event.                              start up    
                                                  etc.        
  ----------- ----------- ----------- ----------- ----------- -----------


