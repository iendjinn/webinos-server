Application Data APIs[¶](#Application-Data-APIs)
================================================

Description[¶](#Description)
----------------------------

This section contains investigation results on APIs for access to
application data.

Resources[¶](#Resources)
------------------------

Primary contributor/editor for this API category: Fraunhofer\
Supporting contributors/reviewers: SEMC / W3C

APIs based on existing standards/implementations[¶](#APIs-based-on-existing-standardsimplementations)
-----------------------------------------------------------------------------------------------------

See [W3C current state of mobile web app technologies: data
storage](http://www.w3.org/2011/02/mobile-web-app-state.html#data) as a
good starting point.

### Contacts API[¶](#Contacts-API)

**Description:** Access/use the native contact application and its data.
e.g. the contact application of a mobile device with Android or a fixed
PC where Outlook is installed.\
**Requirement/architectural reference:**

-   WOS-US-1.1: Smart Device Integration
-   WOS-US-2.3: Converging Applications within and across Devices
-   WOS-UC-TA8-004: Install-time presentation and negotiation of
    application policies

**Phase:** 1\
**Webinos responsible:** Fraunhofer

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [WAC 2.0    A           Fraunhofer                          
  Device      JavaScript  MWR                                 
  APIs: The   API to      prototype                           
  contact     access      (partial)                           
  module](htt multiple                                        
  p://specs.w address                                         
  acapps.net/ books to                                        
  wac2_0/feb2 add,                                            
  011/devicea update,                                         
  pis/contact delete or                                       
  .html)      search for                                      
              contacts.                                       

  [W3C DAP    A           W3C ED\                 The         webinos
  Contacts    JavaScript  Mozilla                 experimenta will adapt
  API](http:/ API for     Labs                    l           this API
  /dev.w3.org finding     experimenta             Firefox     from W3C -
  /2009/dap/c contacts.   l                       add-on lags additions
  ontacts/)   Adding or   Firefox                 behind the  necessary
              updating    add-on (See             DAP API     due to
              contacts    [latest                 draft       webinos
              should be   release                 ([documente specific
              done via    announcemen             d           issues are
              existing    t](https://             here](https listed
              web         mozillalabs             ://wiki.moz below this
              platform    .com/contac             illa.org/La table
              APIs (e.g.  ts/2010/10/             bs/Contacts 
              attach a    22/contacts             /ContentAPI 
              vcard       -in-the-bro             )).         
              string or   wser-0-4-re             It also     
              file to an  leased/))\              adds a      
              html anchor [Bug                    service API 
              element).   tracking                for limited 
                          implementat             interaction 
                          ion                     with social 
                          in                      web         
                          Webkit](htt             services.   
                          ps://bugs.w                         
                          ebkit.org/s                         
                          how_bug.cgi                         
                          ?id=63223)                          

  [PhoneGap   A           Android\                            
  Contacts    JavaScript  BlackBerry                          
  API](http:/ API for     WebWorks                            
  /docs.phone creating,   (OS 5.0 and                         
  gap.com/pho updating    higher)\                            
  negap_conta and search  iOS                                 
  cts_contact for                                             
  s.md.html)  contacts.                                       

  [Nokia      A           Symbian WRT                         
  Platform    JavaScript  1.1                                 
  Services    API for                                         
  2.0         accessing                                       
  Contacts    and                                             
  API](http:/ managing                                        
  /library.fo contact                                         
  rum.nokia.c information                                     
  om/topic/We in the                                          
  b_Developer default                                         
  s_Library/G contact                                         
  UID-1EA270E database.                                       
  2-0954-4326                                                 
  -ABBA-8DC4E                                                 
  DE465B5.htm                                                 
  l)                                                          
  ----------- ----------- ----------- ----------- ----------- -----------

**webinos specific additions**\
The W3C Contacts API specification defines the concept of a user's
unified address book - where address book data may be sourced from a
plurality of sources - both online and locally. However, the selection
of sources for this unified address book is out of scope for the W3C
Contacts specification. For the multi-device useability of webinos, a
function needs to be added that allows the retrieval of a list of
contacts across devices using search/discovery criteria, most likely be
based on the Webinos ServiceDiscovery module.

### Calendar API[¶](#Calendar-API)

**Description:** Access/use to native calendar application and its data,
e.g. the calendar application of a mobile device with Android or a fixed
PC where Outlook or Thunderbird are installed.\
**Requirement/architectural reference:**

-   WOS-US-1.1: Smart Device Integration
-   WOS-US-2.3: Converging Applications within and across Devices
-   WOS-US-3.3: Social Event Sharing
-   WOS-US-8.2: Seamless Navigation
-   WOS-UC-TA1-013: Generating Reports
-   WOS-UC-TA1-014: Solving Problem with Clashing Appointments
-   WOS-UC-TA7-006: The publicity and privacy of Context Information
-   WOS-UC-TA8-004: Install-time Presentation and Negotiation of
    Application Policies
-   WOS-UC-TA8-009: User switching between personal policies

**Phase:** 1\
**Webinos responsible:** Fraunhofer

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [WAC 2.0    A           Fraunhofer                          
  Device      JavaScript  MWR                                 
  APIs: The   API to      prototype                           
  calendar    access      (partial)                           
  module](htt multiple                                        
  p://specs.w calendars                                       
  acapps.net/ defined as                                      
  wac2_0/feb2 set of                                          
  011/devicea events that                                     
  pis/calenda can be                                          
  r.html)     created,                                        
              updated,                                        
              deleted or                                      
              searched                                        
              for.                                            

  [W3C DAP    A           W3C ED                              webinos
  Calendar    JavaScript                                      will adapt
  API](http:/ API for                                         this API
  /dev.w3.org finding                                         from W3C -
  /2009/dap/c events.                                         additions
  alendar/)   Adding or                                       necessary
              updating                                        due to
              events                                          webinos
              should be                                       specific
              done via                                        issues are
              existing                                        listed
              web                                             below this
              platform                                        table
              APIs (e.g.                                      
              attach file                                     
              with \*.ics                                     
              or \*.ical                                      
              extension                                       
              to an html                                      
              anchor                                          
              element).                                       

  [Nokia      A           Symbian WRT                         
  Platform    JavaScript  1.1                                 
  Services    API for                                         
  2.0         accessing,                                      
  Calendar    creating                                        
  API](http:/ and                                             
  /library.fo managing                                        
  rum.nokia.c calendar                                        
  om/topic/We entries in                                      
  b_Developer the default                                     
  s_Library/G calendar.                                       
  UID-A359B12 Ability to                                      
  2-CB52-492C subscribe                                       
  -8C0D-0062E to calendar                                     
  D0A6A89.htm entries                                         
  l)          being                                           
              added,                                          
              modified,                                       
              deleted.                                        
  ----------- ----------- ----------- ----------- ----------- -----------

**webinos specific additions**\
The W3C Calendar API specification is designed to be agnostic of any
underlying calendaring service sources. However, the selection of
sources for this calendar information is out of scope for the W3C
Calendar specification. For the multi-device useability of webinos, a
function needs to be added that allows the retrieval of a list of
calandar data across devices using search/discovery criteria, most
likely be based on the Webinos ServiceDiscovery module.

### Messaging API[¶](#Messaging-API)

**Description:** Send and receive messages of type email, SMS, MMS.\
**Requirement/architectural reference:**

-   WOS-US-1.1: Smart Device Integration
-   WOS-US-3.3: Social Event Sharing
-   WOS-US-5.1: Context Sensitive Triggering
-   WOS-UC-TA1-011: Continuous monitoring of diabetic’s blood glucose
    levels
-   WOS-UC-TA7-006: The publicity and privacy of Context Information
-   WOS-UC-TA8-001: Receiving local messages and alerts

**Phase:** 1 (2 for instant messaging functionality)\
**Webinos responsible:** Fraunhofer

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [W3C DAP    A           W3C ED      As of May   Consider    
  Messaging   JavaScript              '11 no      extending   
  API](http:/ API for                 reading or  this API    
  /dev.w3.org sending                 subscribing for reading 
  /2009/dap/m SMS, MMS                of messages and         
  essaging/)  and email               is          subscribing 
              based on                supported.  as well.    
              URL                     Possibly                
              schemes.                planned for             
              Supports                later API               
              attachments             revisions.              
              .                                               

  [WAC 2.0    A           Fraunhofer                          webinos
  Device      JavaScript  MWR                                 will base
  APIs: The   API to      prototype                           the
  messaging   send,       (partial,                           Messaging
  module](htt search for  only sms                            API on the
  p://specs.w and         sending)                            WAC/BONDI
  acapps.net/ subscribe                                       API due to
  wac2_0/feb2 to SMS, MMS                                     the
  011/devicea and email                                       availabilit
  pis/messagi messages.                                       y
  ng.html)                                                    of
                                                              receiving
                                                              messages -
                                                              an
                                                              extension
                                                              of the W3C
                                                              API would
                                                              most likely
                                                              resemble
                                                              the WAC
                                                              API, so it
                                                              is more
                                                              convenient
                                                              to start
                                                              with that.
                                                              webinos
                                                              specific
                                                              remarks
                                                              follow this
                                                              table.

  GSMA OneAPI A RESTful   [Open                   Uses        
  SMS, MMS    API that    Source                  application 
  RESTful     allows      Reference               /x-www-form 
  Version 1.0 sending and Implementat             -urlencoded 
  ([pdf](http receiving   ion                     and         
  ://www.gsmw of SMS and  in                      application 
  orld.com/on MMS.        PHP/Java](h             /json       
  eapi/docume             ttps://gith             for         
  nts/SMS-RES             ub.com/OneA             requests    
  Tful-API-V1             PI/GSMA-One             and         
  .0f.pdf))               API)\                   application 
                          [Commercial             /json       
                          Pilot in                for         
                          Canada](htt             responses.  
                          p://canada.                         
                          oneapi.gsmw                         
                          orld.com/)                          

  [Nokia      A           Symbian WRT                         
  Platform    JavaScript  1.1                                 
  Services    API that                                        
  2.0         allows the                                      
  Messaging   sending,                                        
  API](http:/ retrieving                                      
  /library.fo and                                             
  rum.nokia.c managing of                                     
  om/topic/We SMS, MMS                                        
  b_Developer and email                                       
  s_Library/G messages.                                       
  UID-0011B83                                                 
  F-274A-445B                                                 
  -843D-4CAA8                                                 
  BA977F6.htm                                                 
  l)                                                          
  ----------- ----------- ----------- ----------- ----------- -----------

**webinos specific changes**\
In addition to the message types e-mail, SMS and MMs, the webinos
Messaging API also supports an 'Instant Messaging' (or 'Twitter'-style)
type of sending and receiving messages. These are handled similar to SMS
messaging, but require a different addressing scheme. Depending on the
underlying messaging service, the retrieval of previous messages\
might or might not be possible. To a certain extent, IM-type messages
can also be used for sending text based notification messages to devices
and applications as well as to users.\
To support this, the basic WAC API has been extended by adding a fourth
messaging type and an onInstantMessage(in OnIncomingMessage
messageHandler) function. This has been done for phase 1 of webinos to
allow experimentation, with a more specific and well defined set of
messaging modi (e.g. Notifications) to be determined for phase 2.

### Filesystem API[¶](#Filesystem-API)

**Description:** Access to device filesystem\
**Requirement/architectural reference:** CAP-DEV-SEMC-002,
CAP-DEV-SEMC-003, CAP-DEV-SEMC-014\
**Phase:** 1\
**Webinos responsible:** Stefano Vercelli / Telecom Italia

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [WAC 2.0    A           Implementat                         
  Device      JavaScript  ions                                
  APIs: The   API to      of WAC WRTs                         
  filesystem  access      by Obigo,                           
  module](htt device      Opera,                              
  p://specs.w filesystem  Aplix,                              
  acapps.net/             Borqs                               
  wac2_0/feb2                                                 
  011/devicea                                                 
  pis/filesys                                                 
  tem.html)                                                   

  [W3C File   Interface   Firefox     No gaps                 Webinos
  API &       to read     3.6+\       identified              will
  FileReader  user-select Google                              implement
  API](http:/ ed          Chrome 7+                           this api
  /dev.w3.org files                                           
  /2006/webap                                                 
  i/FileAPI/)                                                 

  [W3C File   A           TBD, spec   No gaps                 Webinos
  API:        JavaScript  as early    identified              will
  Writer](htt API to      W3C WD                              implement
  p://dev.w3. write files                                     this api
  org/2009/da                                                 
  p/file-syst                                                 
  em/file-wri                                                 
  ter.html "D                                                 
  AP")                                                        

  [W3C File   A           W3C working                         Webinos
  API:        JavaScript  draft                               will
  Directories API to                                          implement
  and         navigate                                        this api
  System](htt file system                                     
  p://www.w3. hierarchies                                     
  org/TR/file                                                 
  -system-api                                                 
  /)                                                          

  [PhoneGap   A           Android\                            
  File        JavaScript  BlackBerry                          
  API](http:/ API to      WebWorks                            
  /docs.phone access a    (OS 5.0 and                         
  gap.com/pho mobile      higher)\                            
  negap_file_ device      iOS                                 
  file.md.htm filesystem                                      
  l)          for reading                                     
              and writing                                     
              files.                                          
  ----------- ----------- ----------- ----------- ----------- -----------

### Multimedia/Gallery API[¶](#MultimediaGallery-API)

**Motivation for a Gallery API:**

There has been discussion as to whether a gallery is required and
whether file access alone is enough. The rationale being that all media
files are encapsulated as files.

There are several reasons why a gallery it would be a good idea:

-   Remote galleries: file access api will not give to access to remote
    galleries - a common use case
-   Performance: many galleries are very large. Iterating over 10,000
    files may not be best way to deal with it
-   Metadata and thumbnails: for media the most important thing is the
    meta -data - a file access method would require implementing all
    file types and tag formats on JavaScript. This it to complex and
    inefficient
-   Binary data: Javascript and file access methods do not yet support
    binary data very well

**Description:** Access to media type files (audio, video, image) and
playback.\
**Requirement/architectural reference:**

-   WOS-US-3.2: Sharing Music within a community social context
-   WOS-US-10.1: User Centric Video Playback
-   WOS-UC-TA1-012: Bridging to the Home Network
-   WOS-UC-TA4-019: Ad hoc use of Foreign Devices for Playback of Film
-   WOS-UC-TA7-004: Finding Devices in Close Physical and Social
    Proximity

**Phase:** 1\
**Webinos responsible:** Fraunhofer

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [HTML5      An HTML API W3C WD                              
  \<video\>   to playback implemented                         
  element](ht video and   with                                
  tp://dev.w3 audio files varying                             
  .org/html5/ and         supported                           
  spec/Overvi streams.    codecs in:\                         
  ew.html#vid             Firefox                             
  eo)\                    3.6+\                               
  [HTML5                  Firefox                             
  \<audio\>               Mobile\                             
  element](ht             Google                              
  tp://dev.w3             Chrome 3+\                          
  .org/html5/             Android                             
  spec/Overvi             Webbrowser                          
  ew.html#aud             (not                                
  io)                     inline)\                            
                          Apple                               
                          Safari 5+\                          
                          Internet                            
                          Explorer 9                          

  [Nokia      A           Symbian WRT                         
  Platform    JavaScript  1.1                                 
  Services    API to                                          
  2.0 Media   obtain a                                        
  Management  list of                                         
  API](http:/ media files                                     
  /library.fo and their                                       
  rum.nokia.c properties.                                     
  om/topic/We                                                 
  b_Developer                                                 
  s_Library/G                                                 
  UID-9266386                                                 
  6-20E4-4403                                                 
  -B3A9-F9CCB                                                 
  91A7A02.htm                                                 
  l)                                                          

  [W3C        A           unknown                             Webinos
  Gallery     JavaScript                                      will adapt
  API](http:/ API for                                         this API
  /dev.w3.org searching                                       from W3C -
  /2009/dap/g in multiple                                     changes
  allery/)    gallery                                         necessary
              objects for                                     due to
              media                                           webinos
              files.                                          specific
                                                              issues are
                                                              listed
                                                              below this
                                                              table

  [PhoneGap   A           Android\                Playback    
  Media       JavaScript  BlackBerry              part        
  API](http:/ API to      WebWorks                obsolete    
  /docs.phone playback    (OS 5.0 and             because of  
  gap.com/pho (and        higher)\                HTML5       
  negap_media record)     iOS                     \<audio\>,  
  _media.md.h audio files                         \<video\>.  
  tml)        on a mobile                                     
              device.                                         

  [WAC 1.0    A           [Opera                  Obsolete    
  AudioPlayer JavaScript  Widget                  because of  
  ](http://sp API that    Runtime for             HTML5       
  ecs.wacapps can         Android](ht             \<audio\>   
  .net/wac1_0 playback    tp://www.op                         
  /dec2010/au audio files era.com/pre                         
  dioplayer.h and         ss/releases                         
  tml)        streams.    /2010/12/22                         
                          /)                                  
  ----------- ----------- ----------- ----------- ----------- -----------

**webinos specific changes**\
Unlike Contacts and Calendar, the W3C Gallery API already provides a
getGalleries method that allows access not only to local, but also to
external galleries. While it might be useful to add a
"webinos.findServices(user, "Galleries"...)" method as well (for
consistency with Calendar and Contacts), this is just a possible
addition, but not a necessity.

### Payment API[¶](#Payment-API)

**Description:** And API to charge users for
apps/in-app-purchase/app-usage.\
**Requirement/architectural reference:** [State reference to Webinos
requirement or architectural component, interface, specification etc]\
**Phase:** 1\
**Webinos responsible:** Fraunhofer

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  GSMA OneAPI A RESTful   [Open                   Uses        
  Payment     API to      Source                  application 
  RESTful     enable to   Reference               /x-www-form 
  Version 1.0 charge      Implementat             -urlencoded 
  ([pdf](http mobile      ion                     and         
  ://www.gsmw subscribers in                      application 
  orld.com/on for web     PHP/Java](h             /json       
  eapi/docume application ttps://gith             for         
  nts/Payment usage or    ub.com/OneA             requests    
  -RESTful-AP content.    PI/GSMA-One             and         
  I-V1.0.pdf)             API)\                   application 
  )                       [Commercial             /json       
                          Pilot in                for         
                          Canada](htt             responses.  
                          p://canada.                         
                          oneapi.gsmw                         
                          orld.com/)                          

  PayPal      A SOAP      Java,       Specific to             
  Direct      based API   ASP.NET and one payment             
  Payment API to allow    PHP         service                 
  ([Descripti payments    wrappers/SD provider.               
  on](http:// from web    Ks                                  
  www.paypalo application available                           
  bjects.com/ s           from PayPal                         
  en_US/ebook using       SDK site                            
  /PP_APIRefe PayPal as a (<https://w                         
  rence/toc.h service     ww.paypal.c                         
  tml))       provider.   om/sdk>                             
                          )                                   

  JSR-000229  Java                    Architectur             
  Payment API specific                e                       
  ([PDF       architectur             quite Java              
  download](h e                       specific,               
  ttp://downl for payment             difficult               
  oad.oracle. handling,               to map to               
  com/otndocs unchanged               other                   
  /jcp/mpay_a since 2005.             languages/a             
  pi-1_0-fr-s                         rchitecture             
  pec-oth-JSp                         s.                      
  ec/))                               No detailed             
                                      payment                 
                                      functionali             
                                      ty                      
                                      specified               
                                      (payment                
                                      itself is               
                                      only via a              
                                      product                 
                                      name, which             
                                      needs to be             
                                      known to                
                                      the payment             
                                      provider,               
                                      hence                   
                                      essentially             
                                      only direct             
                                      payments to             
                                      shops                   
                                      (payment                
                                      service                 
                                      provider is             
                                      equal to                
                                      product                 
                                      provider)               
                                      is                      
                                      possible)               

  Android     Billing API Android SDK Useful API,             
  In-app      that links  API         but                     
  Billing API in-app      accessing   specific to             
  (<http://de purchasing  the an      Java and                
  veloper.and to the      Android     Android                 
  roid.com/gu Android     Market      Market.                 
  ide/market/ Market      service.                            
  billing/ind account.                                        
  ex.html>)                                                   
  ----------- ----------- ----------- ----------- ----------- -----------

**webinos specific changes**\
Since none of the existing solution provides a sufficiently generic
payment solution, webinos will define a generic and simple shopping
basket based solution that can be mapped to different underlying payment
systems to provide a systems that can address payments on platform bound
payment solutions as well as open payment services.

