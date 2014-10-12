HW Resource APIs[¶](#HW-Resource-APIs)
======================================

Description[¶](#Description)
----------------------------

This section contains investigation results on APIs for access to HW
related resources.

Resources[¶](#Resources)
------------------------

Primary contributor/editor for this API category: Telecom Italia\
Supporting contributors/reviewers: SEMC / AmbiSense / Fraunhofer / BMW

APIs based on existing standards/implementations[¶](#APIs-based-on-existing-standardsimplementations)
-----------------------------------------------------------------------------------------------------

### Device Orientation API[¶](#Device-Orientation-API)

**Description:** Information about the physical orientation of a device,
typically implemented by using information from accelerometer,
magnetometer and gyro.\
**Requirement/architectural reference:** CAP-DEV-SEMC-009:Webinos SHALL
provide means for applications to access device physical orientation\
**Phase:** Webinos phase 1\
**Webinos responsible:** Claes Nilsson/SEMC

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [W3C        Two DOM     iOS 4.2\    No gaps                 Webinos
  DeviceOrien event types Android     identified              will use
  tation      that        3.0\                                this API
  Event](http provide     Chrome 7\                           
  ://dev.w3.o information Opera                               
  rg/geo/api/ about the   Mobile for                          
  spec-source physical    Android                             
  -orientatio orientation (experiment                         
  n.html)     of a        al)                                 
              hosting                                         
              device.\                                        
              - The first                                     
              event is a                                      
              simple,                                         
              high-level                                      
              source of                                       
              information                                     
              about the                                       
              physical                                        
              orientation                                     
              of a                                            
              device,                                         
              expressed                                       
              as device                                       
              rotation in                                     
              angles                                          
              around 3                                        
              different                                       
              axes. While                                     
              the spec is                                     
              agnostic to                                     
              the source                                      
              of                                              
              information                                     
              ,                                               
              this is                                         
              typically                                       
              implemented                                     
              by                                              
              combining                                       
              information                                     
              from an                                         
              acceleromet                                     
              er                                              
              and a                                           
              magnetomete                                     
              r.\                                             
              - The                                           
              second                                          
              event                                           
              provides                                        
              direct                                          
              access to                                       
              motion data                                     
              from an                                         
              acceleromet                                     
              er                                              
              and                                             
              gyroscope                                       
              and is                                          
              intended                                        
              for more                                        
              sophisticat                                     
              ed                                              
              application                                     
              s.                                              
              Acceleratio                                     
              n                                               
              is                                              
              expressed                                       
              in m/s2 and                                     
              rotation                                        
              rate is                                         
              expressed                                       
              as                                              
              degrees/s.                                      

  [WAC 2.0    Device      Existing    No gaps                 
  Device      orientation 3rd party   identified              
  APIs: The   information implementat                         
  orientation ,           ions                                
  module](htt expressed   of WAC WRT                          
  p://public. as device   clients                             
  wholesaleap rotation in from Obigo,                         
  pcommunity. angles      Opera,                              
  com/redmine around 3    Aplix, etc,                         
  /embedded/w different   for Android                         
  ac2pubrev/d axes.       and other                           
  eviceapis/o             platforms                           
  rientation.                                                 
  html)                                                       

  [WAC 2.0    Provides    Existing    The API                 
  Device      access to   3rd party   does not                
  APIs: The   the device  implementat provide a               
  acceleromet acceleromet ions        means to                
  er          er          of WAC WRT  separate                
  module](htt information clients     acceleratio             
  p://public. expressed   from Obigo, n                       
  wholesaleap in m/s2 in  Opera,      due to                  
  pcommunity. 3 different Aplix, etc, movement                
  com/redmine axis.       for Android from                    
  /embedded/w             and other   acceleratio             
  ac2pubrev/d             platforms   n                       
  eviceapis/a                         due to                  
  cceleromete                         gravity,                
  r.html)                             which could             
                                      be provided             
                                      by devices              
                                      containing              
                                      both an                 
                                      acceleromet             
                                      er                      
                                      and a                   
                                      gyroscope.              
  ----------- ----------- ----------- ----------- ----------- -----------

### Generic SensorActuator API[¶](#Generic-SensorActuator-API)

**Description:** It currently exist a set of APIs tailored for specific
sensor data. Examples are the W3C Geolocation API (GPS), the W3C
DeviceOrientation Event (accelerometer etc) and the W3C HTML Media
Capture API (camera, microphone). However, there is also a need for a
generic/extensible API to get access to sensors. This is needed as new
types of sensors are frequently introduced. These sensors could be:

-   Built in the user's current device, for example a built thermometer
    or barometer
-   Connected with the user's current device through a local
    connectivity method such as USB, Bluetooth or ANT+, for example a
    Bluetooth enabled medical sensor.
-   Located anywhere in "the cloud”.

The API should be agnostic to the location of the sensors and to
underlying discovery and connection methods.

**Requirement/architectural references:**

-   CAP-DEV-SEMC-015: Webinos MUST support a generic/extensible API for
    allowing applications access to locally connected non-Webinos
    enabled sensors/actuators.
-   CAP-DEV-SEMC-016: Webinos MUST support a generic/extensible API for
    allowing applications access to Webinos enabled sensors/actuators
    connected to the Webinos cloud.

**Phase:** Webinos phase 1

**Webinos responsible:** Claes Nilsson / SEMC

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [W3C The    A           No known    Gaps:\      This API    
  System      high-level  implentatio - For each  has been    
  Information API to      ns          additional  criticized  
  API](http:/ system                  sensor a    within W3C  
  /dev.w3.org information             new sensor  and the     
  /2009/dap/s and                     property    future for  
  ystem-info/ sensors.\               has to be   this API is 
  )           - A set of              defined\    uncertain.  
              simple                  - Reading   See: [Sys   
              sensor APIs             only,       Info        
              is included             writing     feedback](h 
              in the                  data or     ttp://lists 
              specificati             control     .w3.org/Arc 
              on\                     sensor not  hives/Publi 
              - Agnostic              supported\  c/public-de 
              to                      - Only one  vice-apis/2 
              underlying              single      011Feb/0091 
              sensor                  value for   .html).     
              access                  each sensor There is a  
              method\                 property,   proposal to 
              - All APIs              compound    create a    
              are                     data        set a       
              asynchronou             patterns    smaller     
              s.\                     not         discrete    
              - Simple                supported   APIs to     
              get value                           specific    
              or watch                            system      
              for                                 properties  
              continuous                          such as     
              "callbacks"                         network and 
              when the                            battery.    
              values                              For sensors 
              change or                           a set of    
              when the                            discrete    
              values                              event based 
              reach below                         APIs        
              or above                            similar to  
              certain                             the         
              defined                             DeviceOrien 
              threshold                           tation      
              values.\                            Event has   
              - The                               been        
              sensor                              proposed.   
              properties                          In addition 
              currently                           it is       
              included in                         proposed to 
              the                                 break out   
              specificati                         the current 
              on                                  sensor part 
              are:\                               from The    
                                                  System      
              AmbientLigh                         Information 
              t\                                  API to      
                                                  create a    
              AmbientNois                         separate    
              e\                                  "Generic    
                                                  sensor      
              AmbientTemp                         API".       
              erature\                                        
                                                              
              AmbientAtmo                                     
              sphericPres                                     
              sure\                                           
               Proximity                                      

  [The Bondi  \*Sensor    Unknown                             
  sensor      API Sensors                                     
  Module -    are                                             
  Version     classified                                      
  1.5](http:/ by type.                                        
  /bondi.omtp Sensor type                                     
  .org/1.5/PW names are                                       
  D-2/sensor. defined                                         
  htm)        Strings,                                        
              and                                             
              creation                                        
              new type                                        
              names must                                      
              be                                              
              centrally                                       
              defined (by                                     
              the owner                                       
              of this API                                     
              definition)                                     

  [WAC 2.0    Access to   Existing    Gaps:\                  
  devicestatu various     3rd party   -                       
  s           information implementat Extensions              
  module](htt regarding   ions        to the WAC              
  p://specs.w the status  of WAC WRT  vocabulary              
  acapps.net/ of the      clients     is needed               
  wac2_0/feb2 device.\    from Obigo, to cover                
  011/devicea - All APIs  Opera,      not only                
  pis/devices are         Aplix, etc, internal                
  tatus.html) asynchronou for Android device                  
              s.\         and other   status but              
              - Simple    platforms   also                    
              get value               internal                
              or watch                and                     
              for                     external                
              continuous              sensors.\               
              "callbacks"             - Reading               
              when the                only,                   
              values                  writing                 
              change or               data or                 
              when the                control                 
              values                  sensor not              
              changes a               supported               
              certain                                         
              percent.\                                       
              - Compound                                      
              data                                            
              patterns                                        
              supported                                       

  [Symbian    Access to   Nokia/Symbi Gaps:\                  
  WRT         sensor      an          -                       
  Platform    data:\      WRT         Extensions,             
  Service 2.0 -                       i.e.                    
  Sensors     Asynchronou             additional              
  API](http:/ s                       sensor                  
  /library.fo event                   channels                
  rum.nokia.c based\                  need to be              
  om/index.js - Compound              specified               
  p?topic=/We data                    for all                 
  b_Developer patterns                sensors                 
  s_Library/G supported               supported\              
  UID-6C74942                         - Seems as              
  D-1C2F-4B7A                         not                     
  -A501-2434B                         possible to             
  54611E2.htm                         trigger on              
  l)                                  threshold               
                                      values\                 
                                      - Reading               
                                      only,                   
                                      writing                 
                                      data or                 
                                      control                 
                                      sensor not              
                                      supported               
  ----------- ----------- ----------- ----------- ----------- -----------

**Decision:**

A new generic sensor API will be specified. This API is inspired by [W3C
DeviceOrientation Event
Specification](http://dev.w3.org/geo/api/spec-source-orientation.html),
[W3C Battery Status Event
Specification](http://dev.w3.org/2009/dap/system-info/battery-status.html)
and the Android sensor API. For phase 1 only reading, not writing,
sensor data will be supported.

**Editor:** Claes Nilsson / SEMC

  ------------------------------------ ------------------------------------
  **High level Requirement**           **Notes**

  Find sensors in device, locally      
  connected to the device or in the    
  cloud                                

  Configure a selected sensor          

  Provide sensor data as a DOM event   
  ------------------------------------ ------------------------------------

### Microphone API[¶](#Microphone-API)

**Description:** Capture audio samples from microphone\
**Requirement/architectural reference:** CAP-DEV-SEMC-004\
**Phase:** Webinos phase 1\
**Webinos responsible:** Stefano Vercelli / Telecom Italia

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  W3C Media   Api for     W3C working Only useful             Webinos
  Capture Api capturing   draft.      for                     will use
  (see\       audio/video Implemented capturing               this API
  <http://www /image      by Phonegap media                   due to
  .w3.org/TR/ data        project.    files,                  security
  media-captu             See         doesn't                 and remote
  re-api/>)               [PhoneGap   give access             access
                          Capture](ht to live                 reasons
                          tp://docs.p stream                  
                          honegap.com                         
                          /phonegap_m                         
                          edia_captur                         
                          e_capture.m                         
                          d.html)                             

  W3C HTML    Defines a   W3C working Not an API              
  Media       new         draft,      in itself,              
  Capture Api interface   under       more an                 
  (see\       for media   implementat add-on to               
  <http://www files, a    ion         file                    
  .w3.org/TR/ new         for         upload.                 
  html-media- parameter   [Android    Only useful             
  capture/>)  for the     3.0](http:/ for                     
              accept      /developer. capturing               
              attribute   android.com media                   
              of the HTML /sdk/androi files,                  
              input       d-3.0.html) doesn't                 
              element in  and a [Bug  give access             
              file upload tracking    to live                 
              state, and  implementat stream                  
              recommendat ion                                 
              ions        in                                  
              for         WebKit](htt                         
              providing   ps://bugs.w                         
              optimized   ebkit.org/s                         
              access to   how_bug.cgi                         
              the         ?id=63062)                          
              microphone                                      
              and camera                                      
              of a                                            
              hosting                                         
              device                                          

  WhatWG      Provides a  WhatWG                              
  Device      Stream API  draft,                              
  Element     to be used  experimenta                         
  (see\       on top of   l                                   
  <http://www user-select impl. in                            
  .whatwg.org ed          WebKit                              
  /specs/web- sources of  (e.g.                               
  apps/curren input.\     Ericsson's)                         
  t-work/comp Note:                                           
  lete/comman Probably                                        
  ds.html#dev replaced by                                     
  ices>)      getUserMedi                                     
  and Stream  a                                               
  API                                                         

  WhatWG      Early draft [Experiment             Work in W3C Proposed to
  getUserMedi in WHAT WG. al                      started in  support in
  a           Provides a  implementat             [Web RTC    phase 2
  (see\       Stream API  ion                     WG](http:// 
  <http://www to be used  for Opera               www.w3.org/ 
  .whatwg.org on top of   Mobile](htt             2011/04/web 
  /specs/web- user-select p://my.oper             rtc/)       
  apps/curren ed          a.com/core/                         
  t-work/comp sources of  blog/2011/0                         
  lete/video- input.      3/23/webcam                         
  conferencin             -orientatio                         
  g-and-peer-             n-preview)                          
  to-peer-com                                                 
  munication.                                                 
  html>)                                                      
  ----------- ----------- ----------- ----------- ----------- -----------

### Camera API[¶](#Camera-API)

**Description:** Capture video stream from device camera\
**Requirement/architectural reference:** CAP-DEV-SEMC-005\
**Phase:** Webinos phase 1\
**Webinos responsible:** Stefano Vercelli / Telecom Italia

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  WAC 2.0     Interface   Implementat                         
  camera      to device   ions                                
  module      camera for  of WAC WRTs                         
  (see\       capturing   by Obigo,                           
  <http://spe video or    Opera,                              
  cs.wacapps. image       Aplix,                              
  net/wac2_0/             Borqs                               
  feb2011/dev                                                 
  iceapis/cam                                                 
  era.html>)                                                  

  W3C Media   Api for     W3C working Only useful             Webinos
  Capture Api capturing   draft.      for                     will use
  (see\       audio/video Implemented capturing               this API
  <http://www /image      by Phonegap media                   due to
  .w3.org/TR/ data        project.    files,                  security
  media-captu             See         doesn't                 and remote
  re-api/>)               [PhoneGap   give access             access
                          Capture](ht to live                 reasons
                          tp://docs.p stream                  
                          honegap.com                         
                          /phonegap_m                         
                          edia_captur                         
                          e_capture.m                         
                          d.html)                             

  W3C HTML    Defines a   W3C working Not an API              
  Media       new         draft,      in itself,              
  Capture Api interface   under       more an                 
  (see\       for media   implementat add-on to               
  <http://www files, a    ion         file                    
  .w3.org/TR/ new         for         upload.                 
  html-media- parameter   [Android    Only useful             
  capture/>)  for the     3.0](http:/ for                     
              accept      /developer. capturing               
              attribute   android.com media                   
              of the HTML /sdk/androi files,                  
              input       d-3.0.html) doesn't                 
              element in  and and a   give access             
              file upload [Bug        to live                 
              state, and  tracking    stream                  
              recommendat implementat                         
              ions        ion                                 
              for         in                                  
              providing   WebKit](htt                         
              optimized   ps://bugs.w                         
              access to   ebkit.org/s                         
              the         how_bug.cgi                         
              microphone  ?id=63062)                          
              and camera                                      
              of a                                            
              hosting                                         
              device                                          

  WhatWG      Provides a  WhatWG                              
  Device      Stream API  draft,                              
  Element     to be used  experimenta                         
  (see\       on top of   l                                   
  <http://www user-select impl. in                            
  .whatwg.org ed          WebKit                              
  /specs/web- sources of  (e.g.                               
  apps/curren input.\     Ericsson's)                         
  t-work/comp Note:                                           
  lete/comman Probably                                        
  ds.html#dev replaced by                                     
  ices>)      getUserMedi                                     
  and Stream  a                                               
  API                                                         

  WhatWG      Early draft [Experiment             Work in W3C Proposed to
  getUserMedi in WHAT WG. al                      started in  support in
  a           Provides a  implementat             [Web RTC    phase 2
  (see\       Stream API  ion                     WG](http:// 
  <http://www to be used  for Opera               www.w3.org/ 
  .whatwg.org on top of   Mobile](htt             2011/04/web 
  /specs/web- user-select p://my.oper             rtc/)       
  apps/curren ed          a.com/core/                         
  t-work/comp sources of  blog/2011/0                         
  lete/video- input.      3/23/webcam                         
  conferencin             -orientatio                         
  g-and-peer-             n-preview)                          
  to-peer-com                                                 
  munication.                                                 
  html>)                                                      
  ----------- ----------- ----------- ----------- ----------- -----------

Here is an analisys of Media Capture and HTML Media Capture. Notice that
both apis require the File api (<http://www.w3.org/TR/FileAPI/>).

**W3C HTML Media Capture api**

It looks like it has been designed for uploading pictures/audio/videos
(it uses the HTML input tag). A "file picker" is launched and it can
select an existing file or take a new picture/audio/wideo (I guess using
an external app). No options are available before launching the app. It
looks like there's no way to know at js level when the
picture/audio/video has been taken. It is not clear if the
picture/audio/video is saved on the filesystem.\
Supposing we want an app that takes a picture and displays it, here's a
theorical code snippet with HTML Media Capture:

`    ...    <script type="text/javascript">        function displayImage() {            var captureInput = document.getElementById('capture');            var file = captureInput.files[0];            document.getElementById("myImage").src = file.url;        }    </script>    ...    <body>        ...        <input type="file" accept="image/*;capture=camera" id="capture">        <img id="myImage" src="defaultImage.jpg"/>        ...    </body>`

Notice that the displayImage() function should probably be invoked
explicitly by the user.

**W3C Media Capture api**

It uses an external app to take the picture/audio/video. A few options
are available before launching the app ("limit", that is the number of
pictures/videos/audios to take; the duration of the video), and a few
have been proposed (height and width of image, format of the output,
duration of audio). Error and success callbacks are available. It is not
clear if the picture/audio/video is saved on the filesystem (it depends
on the external app?).\
Supposing we want an app that takes a picture and displays it, here's a
theorical code snippet with Media Capture:

`    ...    <script type="text/javascript">        function takePicture() {            navigator.device.capture.captureImage(successCB, errorCB, { limit: 1 }); //it takes 1 picture and exits        }        fucntion successCB(data) {            document.getElementById("myImage").src = data[0].url;        }        function errorCB(err) {            alert("an error occurred");        }    </script>    ...    <body>        ...        <button onClick="takePicture()">Take picture</button>        <img id="myImage" src="defaultImage.jpg"/>        ...    </body>`

### Geolocation API[¶](#Geolocation-API)

**Description:** Access to device location information\
**Requirement/architectural reference:** CAP-DEV-SEMC-008\
**Phase:** Webinos phase 1\
**Webinos responsible:** Stefano Vercelli / Telecom Italia

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [W3C        Access to   Implemented No gaps     A 2nd       Webinos
  Geolocation device      in modern   identified  version of  will use
  API](http:/ location    browers                 the API     this API
  /dev.w3.org regardless  such as                 will also   
  /geo/api/sp of the      Chrome,                 provide     
  ec-source.h source of   Firefox,                civic       
  tml)        information iOS,                    address     
              (it may be  Android,                information 
              GPS,        Opera                               
              GSM/CDMA    Mobile, etc                         
              cell id,                                        
              wifi, ...)                                      

  [GSMA       A RESTful   [Open       Possibly no This method 
  OneAPI      API for     Source      GPS         asks the    
  Location    querying    Reference   support.    network for 
  RESTful     the         Implementat             location    
  API](https: location of ion                     based on    
  //gsma.secu one or more in                      the MSISDN  
  respsite.co mobile      PHP/Java](h             of the      
  m/access/Ac devices.    ttps://gith             device      
  cess%20API%             ub.com/OneA                         
  20Wiki/Loca             PI/GSMA-One                         
  tion%20REST             API)\                               
  ful%20API.a             [Commercial                         
  spx)                    Pilot in                            
                          Canada](htt                         
                          p://canada.                         
                          oneapi.gsmw                         
                          orld.com/)                          
  ----------- ----------- ----------- ----------- ----------- -----------

### Devicestatus API[¶](#Devicestatus-API)

**Description:** Access to device status informations\
**Requirement/architectural reference:** CAP-DEV-SEMC-012,
CAP-DEV-SEMC-013\
**Phase:** Webinos phase 1\
**Webinos responsible:** Stefano Vercelli / Telecom Italia

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [WAC 2.0    Access to   Implementat An          [WAC Device This API
  devicestatu various     ions        extension   Status      will be
  s           information of WAC WRTs of the WAC  Vocabulary] used, with
  module](htt s           by Obigo,   vocabulary  (http://spe an extended
  p://specs.w regarding   Opera,      is needed   cs.wacapps. vocabulary
  acapps.net/ the status  Aplix,      to cover    net/2.0/feb 
  wac2_0/feb2 of the      Borqs       all info    2011/device 
  011/devicea device                  needed (CPU apis/vocabu 
  pis/devices                         load,       lary.html)  
  tatus.html)                         system                  
                                      temperature             
                                      ,                       
                                      audio/video             
                                      codecs                  
                                      capabilitie             
                                      s,                      
                                      input                   
                                      devices,                
                                      ...)                    

  [W3C System "Access to  Not                     This API    
  Info        various     implemented             has been    
  API](http:/ properties                          critiized   
  /www.w3.org of the                              within W3C  
  /TR/system- system                              and the     
  info-api/)  which they                          future for  
              are running                         this API is 
              on"                                 uncertain.  
                                                  See: [Sys   
                                                  Info        
                                                  feedback](h 
                                                  ttp://lists 
                                                  .w3.org/Arc 
                                                  hives/Publi 
                                                  c/public-de 
                                                  vice-apis/2 
                                                  011Feb/0091 
                                                  .html).     
                                                  There is    
                                                  also a      
                                                  proposal to 
                                                  rework the  
                                                  sensor APi  
                                                  to a set of 
                                                  event based 
                                                  APIs        
                                                  according   
                                                  to the      
                                                  DeviceOrien 
                                                  tation      
                                                  Event. For  
                                                  example see 
                                                  see         
                                                  <http://lis 
                                                  ts.w3.org/A 
                                                  rchives/Pub 
                                                  lic/public- 
                                                  device-apis 
                                                  /2011Mar/01 
                                                  22.html>    
                                                  and         
                                                  <http://lis 
                                                  ts.w3.org/A 
                                                  rchives/Pub 
                                                  lic/public- 
                                                  device-apis 
                                                  /2011Mar/01 
                                                  23.html>    

  [GSMA       A RESTful   unknown     Provides                
  OneAPI 2.0  API to                  access to               
  Device      query                   static                  
  Capability] capabilitie             information             
  (https://gs s                       only like               
  ma.securesp of a                    hardware                
  site.com/ac device.                 and                     
  cess/Access                         software                
  %20API%20Wi                         platform                
  ki/Device%2                         properties.             
  0Capability                         No access               
  .aspx)                              to e.g.                 
                                      battery                 
                                      status.                 
  ----------- ----------- ----------- ----------- ----------- -----------

### TV and STB control API[¶](#TV-and-STB-control-API)

**Description:** Control TV/STB via API so other devices can act as a
remote control.\
**Requirement/architectural reference:**

-   WOS-US-3.3: Social Event Sharing
-   WOS-US-10.1: User Centric Video Playback
-   WOS-UC-TA1-001: Virtual Device
-   WOS-UC-TA4-019: Ad hoc use of Foreign Devices for Playback of Film
-   WOS-UC-TA7-005: Seamless Session Transfer between Devices

**Phase:** Webinos phase 1\
**Webinos responsible:** Fraunhofer

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  Open IPTV   Based on    Unknown. TV Addresses   The         
  Forum Rel 2 CE-HTML     sets        much more   [HbbTV](htt 
  Vol 5       this        supporting  than what   p://www.ets 
  Declarative includes a  CE-HTML     is needed   i.org/deliv 
  Application JavaScript  exist.      to          er/etsi_ts/ 
  Environment API for                 access/cont 102700_1027 
  (See        apps on a               rol         99/102796/0 
  [pdf](http: TV/STB.                 features    1.01.01_60/ 
  //www.openi Supports                related to  ts_102796v0 
  ptvforum.or e.g. app                the         10101p.pdf) 
  g/docs/Rele installatio             broadcast.  standard is 
  ase2/OIPF-T n                                   also based  
  1-R2-Specif and                                 on this.    
  ication-Vol management,                                     
  ume-5-Decla channel                                         
  rative-Appl configurati                                     
  ication-Env on,                                             
  ironment-v2 video                                           
  _0-2010-09- playback,                                       
  07.pdf))    recordings,                                     
              etc.                                            

  [BBC        A RESTful   BBC         There seems Discussion  
  Universal   API which   prototypes  to be no    on the      
  Control     returns XML (See [blog  way to get  mailing     
  API](http:/ responses   announcemen access to   list wether 
  /www.bbc.co to GET      t](http://w the         all device  
  .uk/rd/publ requests to ww.bbc.co.u broadcast   features    
  ications/wh control TV  k/blogs/res stream;     should be   
  itepaper194 and STB.    earchanddev e.g. to     exposed via 
  .shtml)                 elopment/20 embedded it API on the  
                          11/02/unive into an     server      
                          rsal-contro app.        (TV/STB, TV 
                          l.shtml)).              watching as 
                                                  "app") and  
                                                  client      
                                                  (e.g.       
                                                  smartphone  
                                                  as remote   
                                                  control) or 
                                                  should they 
                                                  be just     
                                                  accessible  
                                                  to clients. 
                                                  For the     
                                                  former the  
                                                  proposed    
                                                  data model  
                                                  may be too  
                                                  strict and  
                                                  limiting.   
                                                  [See        
                                                  announcemen 
                                                  t           
                                                  and         
                                                  following   
                                                  discussion  
                                                  in          
                                                  replies](ht 
                                                  tp://lists. 
                                                  w3.org/Arch 
                                                  ives/Public 
                                                  /public-dev 
                                                  ice-apis/20 
                                                  11Mar/0076. 
                                                  html)       

  [The        A RESTful   [DBox2      No support  A community 
  Dreambox    API that is Linux       for         based       
  Webinterfac used on the Distro](htt accessing   project.    
  e           DBox2 STB   p://wiki.db the                     
  API](http:/ (for        ox2-tuning. broadcast               
  /wiki.dbox2 DVB-S, -C). net/wiki/in stream to               
  -tuning.net The API     dex.php/DBo embedded in             
  /wiki/index allows to   x2_Software own app,                
  .php/Enigma control     _Projekt)   instead a               
  2:WebInterf volume,                 control                 
  ace)        audio                   functionali             
              tracks,                 ty                      
              channel,                only. Used              
              EPG,                    only by                 
              messaging,              dreambox                
              etc.                    hardware.               
              Responses                                       
              are in XML.                                     
  ----------- ----------- ----------- ----------- ----------- -----------

**Decision:** A new TV control API will be specified. This API makes
available access to TV channel streams that can then be plugged into a
HTML5 HTMLVideoElement. Alternatively, it also provides means to control
the channel playback of a native hardware component.

### Deviceinteraction API[¶](#Deviceinteraction-API)

**Description:** Access to apis for interacting with the end user\
**Requirement/architectural reference:**\
**Phase:** Webinos phase 1\
**Webinos responsible:** Stefano Vercelli / Telecom Italia

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [WAC        Interaction Implementat                         This API
  waikiki     with the    ions                                will be
  deviceinter user        of WAC WRTs                         used as W3C
  action      through     by Obigo,                           device
  module](htt features    Opera,                              interaction
  p://specs.w like device Aplix,                              API is not
  acapps.net/ vibrator    Borqs                               yet in
  wac2_0/feb2 and screen                                      place.
  011/devicea backlight                                       
  pis/devicei                                                 
  nteraction.                                                 
  html)                                                       

  [Chrome     Chrome                                          
  extension   offers                                          
  for UI      several                                         
  interaction apis for                                        
  ](http://co customizing                                     
  de.google.c the browser                                     
  om/chrome/e UI (add                                         
  xtensions/d menus,                                          
  evguide.htm tabs,                                           
  l)          desktop                                         
              notificatio                                     
              ns)                                             

  [Bondi User Allows                                          
  Interaction customizati                                     
  module](htt on                                              
  p://bondi.o of menus                                        
  mtp.org/1.1 related to                                      
  /apis/index specific                                        
  .html)      phone keys                                      
              as well as                                      
              control of                                      
              beeping,                                        
              vibration,                                      
              backlight,                                      
              screen                                          
              orientation                                     
  ----------- ----------- ----------- ----------- ----------- -----------

### Barcode API[¶](#Barcode-API)

**Description:** APIs for decoding barcodes using the camera of the
device.\
**Requirement/architectural reference:** CAP-DWP-ambiesense-51\
**Phase:** Webinos phase 1\
**Webinos responsible/editor:** Stefano Vercelli / Telecom Italia.\
**Contributor:** Hans Myrhaug, AmbieSense Ltd

  ------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Candidate API**                          **Short Description**                                                                                                                                                                                                                                                                                                                                         **Implementation Status**                                                                                                                                                                                                                                                                                                             **Gaps**                                                   **Notes**                                                                                                                                                                                                                                                                                                                                                                                                                                              **Decision**
  [ZXing](http://code.google.com/p/zxing/)   ZXing (pronounced "zebra crossing") is an open-source (Apache 2.0 licensed), multi-format 1D and 2D barcode image processing library implemented in Java. The focus is on using the built-in camera on mobile phones to photograph and decode barcodes on the device, without communicating with a server. A JavaScript library based on ZXing is proposed.   In reality ZXing is becoming the open source industry standard for barcode recognition in mobile applications and there are fully working implementations on Android and other mobile platforms. [See here for a way to use the library on a mobile device on a webpage.](http://code.google.com/p/zxing/wiki/ScanningFromWebPages)   There are concerns that a JavaScript port might be slow.   This (possibly 3rd party provided) library would not be part of a device API but apps could choose to include this library or not based on whether they need the functionality. See [Measurements](http://tobeytailor.s3.amazonaws.com/get_barcode_from_image/index.html) that states it takes 40-60 ms to process the image on a Gingerbread Android device with a 1GHz processor. That indicates that porting of Zxing to JS is probably feasible.   Bar code reading will be supported through a JavaScript port of the ZXing Java library. This means that bar code reading is out of scope for further work within WP 3.2
  ------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

APIs for which no existing standards/implementations exist[¶](#APIs-for-which-no-existing-standardsimplementations-exist)
-------------------------------------------------------------------------------------------------------------------------

### Vehicle API[¶](#Vehicle-API)

**Description:** Provides access to vehicle proberties (e.g. current
speed, mileage, fuel consumption)\
**Requirement/architectural reference:** Extension Handling\
**Phase:** phase 1\
**Webinos responsible/editor:** Simon Isenberg, BMW

  ------------------------------------ ------------------------------------
  **High level Requirement**           **Notes**

  Access to the Automotive API MUST be 
  authorized based on applications     

  In case of a denied access to the    
  vehicle API the requesting           
  application SHALL be informed.       

  The following car properties SHALL   
  be available read-only for           
  applications\                        
  - model\                             
  - speed\                             
  - current fuel consumption\          
  - average fuel consumption\          
  - trip kilometers/miles\             
  - total kilometers/miles\            
  - current units\                     
  - gear\                              
  - engine status\                     
  - position of the steering wheel     

  An application MUST be able to bind  
  to car properties and be infomend    
  about the new value                  

  An API for communicating with the    
  in-car navigation system SHOULD be   
  available                            

  It SHALL be possible to set time     
  intervals for applications to access 
  a car property                       
  ------------------------------------ ------------------------------------

A possible solution is to see this api as an extension of devicestatus
for vehicles.

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [WAC 2.0    Access to   Implementat An                      
  devicestatu various     ions        extension               
  s           information of WAC WRTs of the [WAC             
  module](htt s           by Obigo,   vocabulary]             
  p://specs.w regarding   Opera,      (http://spe             
  acapps.net/ the status  Aplix,      cs.wacapps.             
  wac2_0/feb2 of the      Borqs       net/wac2_0/             
  011/devicea device                  feb2011/dev             
  pis/devices                         iceapis/voc             
  tatus.html)                         abulary.htm             
                                      l)                      
                                      is needed               
                                      (for                    
                                      example you             
                                      can add a               
                                      new Aspect              
                                      ("vehicleIn             
                                      fo")                    
                                      with                    
                                      properties              
                                      "model",                
                                      "speed",                
                                      ...)                    

  [W3C System "Access to  W3C working             This API    
  Info        various     draft                   has been    
  API](http:/ properties                          critiized   
  /www.w3.org of the                              within W3C  
  /TR/system- system                              and the     
  info-api/)  which they                          future for  
              are running                         this API is 
              on"                                 uncertain.  
                                                  See: [Sys   
                                                  Info        
                                                  feedback](h 
                                                  ttp://lists 
                                                  .w3.org/Arc 
                                                  hives/Publi 
                                                  c/public-de 
                                                  vice-apis/2 
                                                  011Feb/0091 
                                                  .html).     
                                                  There is    
                                                  also a      
                                                  proposal to 
                                                  rework the  
                                                  sensor APi  
                                                  to a set of 
                                                  event based 
                                                  APIs        
                                                  according   
                                                  to the      
                                                  DeviceOrien 
                                                  tation      
                                                  Event.      
                                                  Comment by  
                                                  Claes/SEMC: 
                                                  Seems as    
                                                  W3C is      
                                                  taking an   
                                                  event model 
                                                  route now   
                                                  for         
                                                  sensors.    
                                                  Consider to 
                                                  make a DOM  
                                                  level 3     
                                                  event model 
                                                  based       
                                                  Vehice API  
                                                  similar to  
                                                  [DeviceOrie 
                                                  ntation     
                                                  Event       
                                                  specificati 
                                                  on](http:// 
                                                  dev.w3.org/ 
                                                  geo/api/spe 
                                                  c-source-or 
                                                  ientation.h 
                                                  tml)        
                                                  and         
                                                  [Battery    
                                                  Status      
                                                  Event       
                                                  specificati 
                                                  on](http:// 
                                                  dev.w3.org/ 
                                                  2009/dap/sy 
                                                  stem-info/b 
                                                  attery-stat 
                                                  us.html)    
  ----------- ----------- ----------- ----------- ----------- -----------

**Decision:** A separate Vehilce API will be specified. The API will
provide read-access to car data in the first phase of the project. This
API is inspired by W3C DeviceOrientation Event Specification, W3C
Battery Status Event Specification.

Background information on the vehicle API for the 3.2 deliverable[¶](#Background-information-on-the-vehicle-API-for-the-32-deliverable)
---------------------------------------------------------------------------------------------------------------------------------------

In the browser/web domain no developer API has been specified to access
vehicle data so far. In other domains there are a few APIs publicly
available which provide access to vehicle data, but haven't been largely
used yet.

In JSR 298 the OSGI vehicle expert group (VEG) defined a Telematics API
for JAVA. This API provides access to the vehicle data for JAVA Me
developers. The OSGI VEG was discontinued in 2006. The API has not been
refined afterwards. The specification is available at:
<http://jcp.org/en/jsr/summary?id=Telematics>.

In other EU founded projects the Serial Line Automotive Protocol (SLAP)
introduced by Volkwagen has been used to retrieve vehicle data. The SLAP
is based on XML-formatted messages to request and receive vehicle data.

Due to the lack of an feasible API for vehicle data inside the browser
domain, we define a new API which provides read-only access to the
following data:

-   static/general information (brand, model, year, transmission, fuel)
-   trip computer (average consumption1, average consumption2, average
    speed 1, average speed 2, trip distance, mileage, range)
-   climate control (zone, desired temperature, vent status (automatic
    or level))
-   controls (lights (including signals, hibeam, fog), whiper )
-   engine (gear, speed, acceleration)
-   park sensors

Furthermore the API provides access to the following functions:

-   setting the destination of the in-car navigation system
-   canceling the guidance of the in-car navigation system
-   querying the in-car navigation system for POIs

The API is aligned to the current W3C's approach of event based APIs.
The vehicle API does not provide information about the geolocation,
speed and acceleration. These attributes are already accessible using
the W3C Geolocation API for speed and position and the W3C Device
Orientation API for acceleration.

In the first iteration of the project the vehicle API focuses on the
access of read-only data, which is available on the infotainment bus due
to the fact that the in-car headunit is usually connected this bus
system as shown in the following depiction.

![](http://dev.webinos.org/redmine/attachments/download/668/vehicle_bus_architecture.jpg)

For the second iteration of webinos the extension of the vehicle API to
data outsite of the infotainment bus (MOST) as well as more methods for
interacting with the vehicle system seems beneficial.

### NFC API[¶](#NFC-API)

Near Field Communication (NFC) is an international standard (ISO/IEC
18092) that specifies an interface and protocol for simple wireless
interconnection of closely coupled devices operating at 13.56 MHz. The
overall application scenario is to hold a device close to a wireless tag
to exchange some digital information or data. Alternatively, the
scenario is to hold two devices close to each other in order to exchange
some information or data between them. NFC is also sometimes referred to
as contactless communication.

There are three use case categories for NFC driven by NFC Forum,
[www.nfc-forum.org](http://www.nfc-forum.org):

1.  NFC peer to peer communication, with use cases for sharing data
    between devices, and for pairing with other devices.
2.  Tag R/W mode, with use cases for any application provider
    proposition integrate real world objects with Internet and
    applications.
3.  Card Emulation mode, is to move the existing smart cards that you
    have in your wallet today into the phone and make use of contactless
    NFC connections.

All three propositions addressed by use cases of the NFC forum are
indeed relevant to the webinos user stories and use cases. Ideally,
webinos application developers will therefore need all of these
implemented. Thus, in terms of webinos implementaiton priority, we
recommend the following order: first 2, then 1, and then 3, because our
target group is application developers, and most of them will most
likely be doing 2 in the beginning. 1 will become increasingly common
when there are a lot of smartphones with NFC capabilities around in the
market. Currently, in June 2011, the following NFC enabled devices are
being sold in the mass market: Samsung Nexus S and Nokia Oro. The
Samsung Galaxy S2 and the Nokia C7 will also be shipped with NFC
capability.

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  Android NFC             Read write                          This is our
                          mode is                             choice
                          complete.                           because
                          Peer to                             Android is
                          peer mode                           now shipped
                          is being                            more than
                          implemented                         iPhone, the
                                                              activity is
                                                              high
                                                              Android
                                                              NFC, and
                                                              the license
                                                              is Apache
                                                              2.0

  Open NFC                There are                           This is not
                          several                             a choice
                          versions                            because the
                          for various                         Android
                          platforms                           implementat
                          becoming                            ion
                          available.                          is based on
                          The                                 the Android
                          information                         NFC API,
                          about what                          and it is
                          is being                            unclear how
                          implemented                         much
                          is unclear.                         activity
                                                              this open
                                                              source
                                                              project.

  Libnfc                  The                                 This is not
                          implementat                         our choice,
                          ion                                 because of
                          is in C and                         the LGPL
                          can be                              license.
                          cross                               
                          compiled                            
                          for                                 
                          different                           
                          operating                           
                          systems.                            

  J2ME                    The                                 This is not
  (JSR-257)               implementat                         our choice,
  NFC                     ion                                 because of
                          is complete                         the shift
                          several                             from J2ME
                          years ago.                          enabled
                          Due to the                          devices
                          current                             towards
                          shift in                            Android in
                          the market,                         the current
                          it is less                          market.
                          likely that                         
                          there will                          
                          be any peer                         
                          to peer                             
                          mode                                
                          supported.                          

  QT Mobility             The                                 Due to the
  NFC                     implementat                         Nokia
                          ion                                 announcemen
                          is                                  t
                          complete.                           on the
                                                              Microsoft
                                                              alliance,
                                                              this seems
                                                              more risky
                                                              in the long
                                                              term.

  Symbian NFC             The                                 Due to the
                          implementat                         Nokia
                          ion                                 announcemen
                          is                                  t
                          complete.                           on the
                                                              Microsoft
                                                              alliance,
                                                              this seems
                                                              more risky
                                                              in the long
                                                              term.
  ----------- ----------- ----------- ----------- ----------- -----------

**Decision:** An NFC API will be specified within Webinos.

**Requirement/architectural reference:** TBD\
**Phase:** Phase 1\
**Webinos responsible/editor:** Hans Myrhaug / AmbiSense, Stefano
Vercelli / TIM

  ------------------------------------- --------------------------------------
  **High level Requirement**            **Notes**
  Tag R/W mode                          Based on Android NFC API Gingerbread
  NFC peer to peer communication mode   Based on Android upcoming NFC API
  ------------------------------------- --------------------------------------

Below is the proposed roadmap for the webinos API implementation. It
seems clear that NFC peer to peer it will be supported on Android and\
that it already is supported on both QT and Symbian. Thus, we believe
that NFC peer to peer should also be supported by webinos after the NFC
read and write capabilities (v=implemented, x=not yet implemented).

  --------------------------------------------------------------------- ------------- --------------
  **Proposed roadmap for implementation of the webinos NFC API**        **Phase I**   **Phase II**
  **Register to launch application**                                    v             v
  Launch application on a specific NFC tag type                         v             v
  Launch application on connection to a specified service name (LLCP)   x             v
  **Listening to NFC discovery events**                                 v             v
  An NDEF tag has been discovered                                       v             v
  A specified NDEF record type has been discovered                      v             v
  An NFC target has been detected                                       v             v
  **Reading and writing to NFC tags**                                   v             v
  Read NDEF messages and records from an NFC tag                        v             v
  Write NDEF messages and records to an NFC tag                         v             v
  **Peer to peer communcation between NFC devices**                     x             v
  Open connection to an NFC device (LLCP)                               x             v
  Send data to an NFC device (LLCP)                                     x             v
  Receive data from an NFC device (LLCP)                                x             v
  --------------------------------------------------------------------- ------------- --------------


