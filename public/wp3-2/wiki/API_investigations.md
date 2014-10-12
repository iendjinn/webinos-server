API investigations[¶](#API-investigations)
==========================================

This section contains the results of the investigations on APIs of the
different categories and acts as background information to the APIs
supported by Webinos.

Based on Webinos requirements/use cases and architecture needed APIs are
identified. Potential existing APIs from W3C, WAC and elsewhere are
investigated and analyzed. If no existing APIs that could fulfill the
Webinos requirement is found high level requirements on a new API to be
specifed within the Webinos project are stated.

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

Communication APIs[¶](#Communication-APIs)
==========================================

Description[¶](#Description)
----------------------------

This section contains investigation results on APIs for communication
with other devices, other applications and servers.

Resources[¶](#Resources)
------------------------

Primary contributor/editor for this API category: Samsung\
Supporting contributors/reviewers: SEMC / ISMB / VisionMobile

APIs based on existing standards/implementations[¶](#APIs-based-on-existing-standardsimplementations)
-----------------------------------------------------------------------------------------------------

### Socket Communication[¶](#Socket-Communication)

API's mentioned in this section can be used by application developer to
connect to application resources once the device discovered are
presented and connected.

#### Phase 1[¶](#Phase-1)

**Description:** To establish communication between two webinos
devices.\
**Requirement/architectural reference:** CAP-DEV-SEMC-006 webinos SHALL
provide means for applications to execute streamed real-time interactive
bi-directional communication with two or more other webinos applications
running in the same device or running in different devices.\
**Phase:** Webinos Phase 1\
**Webinos responsible:**

  ---------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------
  **Candidate API**                                                      **Short Description**                                                                                                                                                                                                                                       **Implementation Status**                                                                                       **Gaps**                                                                          **Notes**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **Decision**
  [W3C HTML5 WebSockets](http://dev.w3.org/html5/websockets/)            WebSocket provides: Bi-directional communication between client and server side process, multiplex various WebSockets together in one socket, and no problem with network protected by firewall as access is done on port 80/443.                           [Supported in Chrome and Safari. Partly supported in Firefox and Opera](http://caniuse.com/#search=websocket)   No raw communication mechanism supported which leads to a requirement of proxy.   It has problem with [update command](http://www.adambarth.com/experimental/websocket.pdf) in transparent proxies which can result in changing the contents of cache. It has been revoked in [Firefox](http://hacks.mozilla.org/2010/12/websockets-disabled-in-firefox-4/) and Opera. It is relevant but only WebSockets is not suffice but a combination of various technologies suits better. [node.js](http://github.com/LearnBoost/Socket.IO-node), hides detail about underneath communication mechanism   It is already supported in modern browser and there is no need of Webinos specific implementation
  [W3C HTML5 Server-Sent Events](http://dev.w3.org/html5/eventsource/)   Server sent is designed to send messages from server and to support this it uses a push technology, it introduces DOM object event on which events are sent directly. It supports automatic reconnection. It is used as an alternative to XMLHttpRequest.   [It is implemented in all major browsers](http://caniuse.com/#search=server-sent)                               It is only relevant for receiving updates from Server.                            Main difference with WebSockets, it does not support bi-directional communication and use plain HTTP messages which does not require changes on server side, as required for WebSockets . Plus it does not have requirement of allowing devices to be connected whole time with WebServer. Both serve different purpose, for continuous client and server communication use WebSockets, for receiving server updates using push technology use Server-Sent events.                                             It is already supported in modern browser and no specific webinos implementation is required
  ---------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------

#### Phase 2[¶](#Phase-2)

  --------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------
  "Web RTC": <http://rtc-web.alvestrand.com/>   Web RTC is still in a start-up phase and the goal is to define/select api’s, protocols and codecs that are required to enable real-time bi-directional communication in a web browser. Web RTC will enable the possibility to implement video/audio conference applications without installing plug-in components. The work with Web RTC will be divided between IETF and W3C/WHATWG. IETF will define/select the protocols and codecs whilst W3C/WHATWG will define the client API’s. The new client API’s will define the possibility to: 1. get user media from a camera or microphone (GetUserMedia API), 2. connect directly to a different peer (PeerConnection API) and 3. stream media and data between the peers (Stream API). As opposed to WebSockets, PeerConnection do not require that connections are relayed via a server. For example, two devices on the same IP sub network or with public ip addresses can connect directly to each other. To establish the connection the current working assumption is that ICE [RFC5245] will be used to negotiate and discover which addresses that can utilized to communicate directly between the peers. In some cases it is not possible to find a direct path between the peers depending on the network topology. In those cases a TURN server is used to relay the traffic between the peers. The working group has tried to agree upon a single session establishment protocol. SIP and XMPP have been proposed but it seems that the group will not agree upon one protocol. The current prediction is that the session protocol will be left out of the standard and initiatives will be started to create open source JavaScript implementations and let the market decide which implementation that will be used.   Experimental implementations exists: <https://labs.ericsson.com/developer-community/blog/beyond-html5-peer-peer-conversational-video> <http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview>   Web RTC does not replaces WebSockets. However, Web RTC is much better suited for exchanging data between peer with real-time characteristics.   Work in W3C started in [Web RTC WG](http://www.w3.org/2011/04/webrtc/). If the work is successful, implementations will most likely exists in all modern browsers before Webinos is ready.   It might be provided in browser and no work might be required in webinos project
  --------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------

A common approach is to use either WebSockets or Server-Sent events and
if fails use XMLHttpRequest.

### Individual Components Communication[¶](#Individual-Components-Communication)

**Description:** To establish communication with server, which does not
require continuous communication.\
**Requirement/architectural reference:** ID-USR-Oxford-37 webinos SHALL
provides methods to make applications addressable so that other
applications can communicate with them.\
**Phase:** Webinos Phase 1\
**Webinos responsible:**

  ------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------ ---------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------
  **Candidate API**                                             **Short Description**                                                                                                                                                                                                                                              **Implementation Status**                                                **Gaps**                                                                                                   **Notes**                                                                                                                                    **Decision**
  [W3C XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest2/)   It allows performing HTTP client functionality directly from the script. It sends request directly to the WebServer without loading whole web page. Response are loaded without need to load the page, reply from server can be in XML, text, or in JSON format.   [Supported in all browsers](http://caniuse.com/#search=XMLHttpRequest)   Cross origin website access were used to be blocked but addressed via [CORS](http://www.w3.org/TR/cors/)   It is ideal where communication is required between client and server but does require communication continuously such as submitting form.   It is already supported in modern browser and there is no need of Webinos specific implementation
  ------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------ ---------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------

#### Messaging[¶](#Messaging)

**Description:** To send messages between application running on same
device but with different instances.\
**Requirement/architectural reference:** NM-DEV-FOKUS-001 It SHALL be
possible to exchange information between multiple entities in terms of
events.\
DA-DEV-ISMB-003 Applications installed on a device SHALL be addressable,
with multiple instances of the same application being separately
addressable.\
**Phase:** Webinos Phase 1\
**Webinos responsible:**

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [W3C HTML5  Two         It is       No caching              It is
  Web         independent implemented support                 already
  Messaging]( code that   in at least                         supported
  http://dev. want to     Chrome and                          in modern
  w3.org/html communicate Firefox as                          browser and
  5/postmsg/) directly.   well in                             there is no
  (Referred   It supports Android                             need of
  as Channel  port to     browser.                            Webinos
  Messaging   port        For example                         specific
  in HTML5    communicati test with                           implementat
  Document)   on.         <http://www                         ion
              Ideal for   .html5test.                         
              intra       com/>                               
              communicati                                     
              on                                              
              between two                                     
              instances                                       
              that run in                                     
              different                                       
              contexts.                                       
  ----------- ----------- ----------- ----------- ----------- -----------

APIs for which no existing standards/implementations exist[¶](#APIs-for-which-no-existing-standardsimplementations-exist)
-------------------------------------------------------------------------------------------------------------------------

### Low level event handling API[¶](#Low-level-event-handling-API)

**Description:** To send/receive/forward arbitrary data among any
entity, in particular being suited for developing higher level APIs
relying on data exchange featuring Webinos' overlay networking and
discovery\
**Requirement/architectural reference:** All [NM
requirements](/wp2-2/wiki/Remote_Notifications_and_Messaging),
[WP 3.1 event handling draft
architecture](/wp3-1/wiki/Event_handling_(subscriptionstoringforwarding)#Draft-architecture)\
**Phase:** 1\
**Webinos responsible/editor:** Stefano D'Angelo/ISMB

  ------------------------------------ ------------------------------------
  **High level Requirement**           **Notes**

  Generating events                    

  Sending/forwarding events            

  Registering/unregistering event      
  listeners for incoming events        
  ------------------------------------ ------------------------------------

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

Discovery APIs[¶](#Discovery-APIs)
==================================

Description[¶](#Description)
----------------------------

This section contains investigation results on APIs for device and
service discovery.

Resources[¶](#Resources)
------------------------

Primary contributor/editor for this API category: Samsung\
Supporting contributors/reviewers: Fraunhofer / SEMC / T-Systems / W3C

Overview of Discovery Technologies[¶](#Overview-of-Discovery-Technologies)
--------------------------------------------------------------------------

Each interconnect technology can have its own discovery mechanisms, and
some have several, each with their own terminology. Webinos will need to
provide an overlay that abstracts away from the variations and which
offers simple naming for end users and web developers. The overlay will
need to store the mapping from user friendly names to the underlying
data registered for the device and needed to communicate with it.

Interconnect technologies include:

-   3G, WiFi, WiMAX, Bluetooth, ZigBee, NFC, RJ45, USB, IEEE 1394, ...

Only some of these support IP directly. Webinos should provide a means
for an IP accessible device to proxy for devices that are not IP
addressable.

### IP based networks[¶](#IP-based-networks)

For IP based networks, three such mechanisms are:

#### Multicast DNS[¶](#Multicast-DNS)

Invented by Apple for simplifying the connection of devices in home
networks. The Apple implementation is called "Bonjour". An open source
equivalent is "Avahi". Devices start by randomly picking a link local IP
address in the range (169.254.\*.\*) and making an ARP request to see if
this address is already in use.

Devices assign themselves name in the ".local" domain, and will adjust
this if they detect other devices with the same name. Users can assign
human meaningful names with spaces in them. User agents query for
devices with multicast UDP requests. The devices check for a match and
respond with a multicast UDP packet with the IP address and port number,
the device's domain name, and a list of protocol and/or service names.
The device domain names use human meaningful conventions e.g. "Dave's
laptop.\_workstation.local". A nice feature is the ability for a device
to report on other devices including external services such as the BBC
news on the Web, or a hotel's local Web server giving details of the
hotel's services. Multicast DNS isn't designed to support tens of
thousands of devices, but this can be worked around with discovery hubs.

More information:

-   [Introductory
    talk](http://video.google.com/videoplay?docid=-7398680103951126462)
-   [Stuart Cheshire's website](http://www.multicastdns.org/)
-   [Avahi introduction](http://avahi.org/download/doxygen/)

On Linux, try

    mdns-scan

or

    avahi-browse -a -v

This only found my Linux workstation on my WiFi network and not the ADSL
Modem, nor the Samsung laser printer.

#### Simple Service Discovery Protocol (SSDP)[¶](#Simple-Service-Discovery-Protocol-SSDP)

Invented by Microsoft and considerably more complicated than Multicast
DNS. SSDP is a UPnP-based protocol and it uses HTTP for notification
announcements that give a service type URI and a unique service name.

On linux try

    gssdp-device-sniffer

On my WiFi network this found the ADSL Modem and the Laser printer, but
not the Linux workstations.

#### Service Location Protocol (SLP)[¶](#Service-Location-Protocol-SLP)

Defined in RFC 2608 and supported by Hewlett-Packard's network printers,
Novell, and Sun Microsystems, but ignored by some other large vendors.
SLP works over UDP or TCP. On UDP, devices listen on port 427 for
multicast requests. Devices advertise themselves with a URI like

    service:printer:lpr://myprinter/myqueue

This may be supplemented by a list of attributes, e.g.

     (printer-name=Hugo),
     (printer-natural-language-configured=en-us),
     (printer-location=In my home office),
     (printer-document-format-supported=application/postscript),
     (printer-color-supported=false),
     (printer-compression-supported=deflate, gzip)

If the data doesn't fit in a single packet, a flag is given that the
user agent can act on to request the SLP info via TCP. SLP also supports
discovery agents and presumably this helps with scaling up to larger
networks with bridged local networks.

#### UPnP and DLNA[¶](#UPnP-and-DLNA)

On linux try

    upnp-inspector

On my network this found the ADSL Modem but not my Laser printer.

### Other interconnect technologies[¶](#Other-interconnect-technologies)

#### WiFi[¶](#WiFi)

For WiFi it is possible to detect access points and what kind of
encryption they are using, if any, as well as devices operating in
ad-hoc mode. It should be possible to detect device MAC addresses.

#### USB[¶](#USB)

For USB see the source code for the Linux lsusb command. This lists the
bus and device number, the device ID and a human readable description
e.g. Logic3 / SpectraVideo plc A4Tech SWOP-3 Mouse, and Microdia Sonix
Integrated Webcam.

#### Bluetooth[¶](#Bluetooth)

For Bluetooth, a scan shows the device ID and type, e.g. phone. This id
can be used as a proxy identifier for people, i.e. who is present in the
room or nearby. There is a small set of known device types, e.g. phone,
input device, headset, modem, computer, network, camera, printer or
video device. Users can provide a meaningful name for their device e.g.
"Me" as seen for a phone in a car that drove past my window!

APIs based on existing standards/implementations[¶](#APIs-based-on-existing-standardsimplementations)
-----------------------------------------------------------------------------------------------------

### Low level Service Advertising APIs[¶](#Low-level-Service-Advertising-APIs)

**Description:** Service to advertise its availability and capabilities
APIs

**Requirement/architectural reference:**

-   DA-DEV-SEMC-001. The webinos network SHALL provide means for a
    service to expose its availability and capabilities on a Webinos
    Network.

**Phase:** Webinos phase 1\
**Webinos responsible:** Ziran/Samsung

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [Avahi      It uses DNS Avahi had   Native      This is low To be
  Register    service     already     Codes. It   level API - considered
  Services    locator     become the  suits Local one option  for phase 2
  API](http:/ (SRV), Text de-facto    or          is to wrap  
  /avahi.org/ Record(TXT) standard    wide-area   native code 
  download/do ,           implementat network     and expose  
  xygen/index and Pointer ion         with the    as          
  .html)      recorder    of          same        JavaScript  
  based on    (PTR)       mDNS/DNS-SD domain.     Object      
  [DNS-SD](ht records to  on free                 method -    
  tp://www.ze advertise   operating               [here](http 
  roconf.org/ Service     systems                 ://www.w3.o 
  )           Instance    such as                 rg/QA/2011/ 
              Names. The  Linux.                  04/discover 
              hosts                               y_and_the_w 
              offering                            eb_of_thing 
              services                            .html)      
              publish                             is an       
              details of                          example     
              available                                       
              services:                                       
              instance,                                       
              service                                         
              type,                                           
              domain name                                     
              and                                             
              optional                                        
              configurati                                     
              on                                              
              parameters.                                     
              In case of                                      
              mDNS, each                                      
              computer on                                     
              the LAN                                         
              stores its                                      
              own list of                                     
              DNS                                             
              resource                                        
              records                                         
              (e.g., A,                                       
              MX, SRV)                                        
              and joins                                       
              the mDNS                                        
              multicast                                       
              group. If a                                     
              unicast DNS                                     
              is                                              
              available,                                      
              two ways to                                     
              advertise                                       
              services:                                       
              via dynamic                                     
              DNS server                                      
              or manually                                     
              add DNS                                         
              records to                                      
              describing                                      
              the                                             
              services to                                     
              add.                                            

  [Strophe.js Strophe.js  Strophe.js  Strophe.js              No API will
  API](http:/ provides    is well     does not                be
  /strophe.im Javascript  used. It    needs                   developed
  /strophejs/ library for has been    particular              by WP3.2 as
  )           BOSH        tested on   support for             a
  for         implementat Firefox     specific                downloadabl
  [XEP-0124   ion,        1.5, 2.x,   XEP.                    e
  BOSH](http: which       and 3.x, IE Expanding               JS library
  //xmpp.org/ enable XMPP 6, 7, and   XEP-0060                is
  extensions/ over HTTP.  8, Safari,  implementat             available
  xep-0124.ht For service Safari      ion                     
  ml)         advertiseme Mobile,     based on                
              nt,         Google      Strophe.js              
              [XEP-0060   Chrome, and should be               
              Publish-sub it should   straightfor             
              scribe      also work   ward                    
              APIs](http: on the                              
              //xmpp.org/ mobile                              
              extensions/ Opera                               
              xep-0060.ht browser as                          
              ml)         well as the                         
              shall be    desktop                             
              implemenate Opera                               
              d           browser.                            
              on the top                                      
              the                                             
              existing                                        
              Strophe.js                                      
              library.                                        
              XEP-0060                                        
              Publish-sub                                     
              scribe                                          
              specifies                                       
              that an                                         
              entity                                          
              publishes                                       
              information                                     
              to a node                                       
              at a                                            
              publish-sub                                     
              scribe                                          
              service.                                        
              The pubsub                                      
              service                                         
              pushes an                                       
              event                                           
              notificatio                                     
              n                                               
              to all                                          
              entities                                        
              that are                                        
              authorized                                      
              to learn                                        
              about the                                       
              published                                       
              information                                     
              .                                               
  ----------- ----------- ----------- ----------- ----------- -----------

### Low level Find Service API[¶](#Low-level-Find-Service-API)

**Description:** Allows applications to find services based on
description

**Requirement/architectural reference:**

-   DA-DEV-SEMC-002. Webinos SHALL provide the means to discover new
    service advertised on a Webinos Network.
-   DA-DEV-FHG-001. webinos shall provide means for applications to be
    capable of discovering other devices based on a User.
-   DA-USR-ISMB/FHG-005. webinos shall provide means for an application
    to discover and address applications and services offered by other
    users.

**Phase:** Webinos phase 1\
**Webinos responsible:** Ziran/Samsung

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [Avahi      To browse               same as     same as     To be
  Browse      for                     advertiseme advertiseme considered
  Services    available               nt          nt          for phase 2
  API](http:/ services.                                       
  /avahi.org/ In case of                                      
  download/do mDNS,                                           
  xygen/index Updates                                         
  .html)      about the                                       
  based on    new service                                     
  [DNS-SD](ht availabilit                                     
  tp://www.ze y                                               
  roconf.org) is done by                                      
              sending the                                     
              multicast                                       
              advertiseme                                     
              nt                                              

  [Strophe.js To find     Strophe.js  Strophe.js              No API will
  API](http:/ service,    has been    does not                be
  /strophe.im [XEP-0030:  tested on   needs                   developed
  /strophejs/ Service     most        particular              by WP3.2 as
  )           discovery   well-used   support for             a
  for         API](http:/ browsers    specific                downloadabl
  [XEP-0124   /xmpp.org/e (see        XEP. To                 e
  BOSH](http: xtensions/x above).     implement               JS library
  //xmpp.org/ ep-0030.htm             discovery               is
  extensions/ l)                      over BOSH,              available
  xep-0124.ht shall be                simply send             
  ml)"        implemented             IQ-get                  
              on the top              stanzas to              
              of                      the server              
              Strophe.js.             with a                  
              XEP-0030                certain                 
              specifies               namespace.              
              discovering                                     
              service via                                     
              JID. (1)                                        
              the                                             
              identity                                        
              and                                             
              capabilitie                                     
              s                                               
              of an                                           
              entity,                                         
              including                                       
              the                                             
              protocols                                       
              and                                             
              features it                                     
              supports;                                       
              and (2) the                                     
              items                                           
              associated                                      
              with an                                         
              entity,                                         
              such as the                                     
              list of                                         
              rooms                                           
              hosted at a                                     
              multi-user                                      
              chat                                            
              service.                                        
  ----------- ----------- ----------- ----------- ----------- -----------

APIs for which no existing standards/implementations exist[¶](#APIs-for-which-no-existing-standardsimplementations-exist)
-------------------------------------------------------------------------------------------------------------------------

### High level Discovery API[¶](#High-level-Discovery-API)

**Description**

Currently there exist several methods to do service discovery. This has
been explored in the state of the art investigation for service
discovery. Some of these methods are fairly well deployed and used such
as Bluetooth service discovery, Universal Plug & Play, mDNS or DNS
Service Discovery. However, neither of these discovery methods has been
exposed to web application developers. In addition methods like
Universal Plug & Play, mDNS and DNS SD do not have any robust security
model.

The goal with the webinos high level service discovery API is to be able
to provide a simple API for application developers. The API shall
provide the means to discovery services within personal zones and from
low level service discovery methods supported by the device. The fact
webinos uses a overlaying network, service discovery will not be limited
to local services but will also enable to discover remote services. The
API hides the complexity for communicating with services residing in a
different peer in a trusted manner.

**Requirement/architectural reference**

The following 2.2 requirements are applicable for the high level
Discovery API.

**Phase:** Webinos phase 1

-   DA-DEV-SEMC-001: The webinos network SHALL provide means for a
    Service to Expose its availability and capabilities on a webinos
    Network.
-   DA-DEV-SEMC-002: Webinos SHALL provide the means to discover new
    services advertised on a Webinos Network.
-   DA-DEV-SEMC-004: webinos SHALL provide means for an Application to
    detect the availability of a service (such as being able to detect
    when a service is started, stopped or not available due to out of
    proximity).
-   DA-DEV-SEMC-005: webinos shall provide means for an Application to
    find devices and services that are available on a webinos network,
    based on the Device and Service Description.
-   DA-DEV-SEMC-006: webinos SHALL provide means for an Application to
    find devices and services in close proximity of the device
-   DA-DEV-SEMC-007: webinos SHALL provide means for an Application to
    find devices and services based on the physical location of the
    current user device.
-   DA-ASP-FHG-001: webinos SHALL provide means for applications to be
    capable of discovering other devices based on a User.
-   DA-ASP-FHG-006: webinos SHALL provide means to discover devices that
    have a specific application installed.
-   DA-DEV-ISMB-001: webinos SHALL provide means for applications to
    discover and address features and services available on devices
    owned by the user even if such devices are not directly connected to
    the device on which the application is running.
-   DA-DEV-ISMB-004: It SHALL be possible to address sensors and
    actuators that does not provide webinos support.
-   DA-DEV-ISMB/FHG-005: webinos SHALL provide means for applications to
    discover and address applications and services offered by other
    users.
-   DA-DEV-ISMB-006: It SHALL be possible to address webinos enabled
    devices based on their user information.
-   DA-DEV-NTUA-002: webinos SHALL provide the means to Applications to
    identify an event occurring in a device.

**Phase:** Webinos phase 2

-   DA-DEV-SEMC-008: webinos SHALL provide means for an Application to
    discover which user that currently is using a discovered device
    outside the personal webinos Network.
-   DA-DEV-ISMB-003: Applications installed on a device SHALL be
    addressable, with multiple instances of the same application being
    separately addressable.
-   DA-DEV-NTUA-003: webinos SHALL provide the means to Applications to
    be capable of discovering other devices based on a piece of
    contextual information.
-   DA-DEV-NTUA-004: webinos SHALL be able to calculate the social
    proximity of webinos Devices.

**Webinos responsible/editor:** Anders Isberg / SEMC

Security and Privacy APIs[¶](#Security-and-Privacy-APIs)
========================================================

Description[¶](#Description)
----------------------------

This section contains an overview of the required APIs for the webinos
security architecture and background information about related work.

Resources[¶](#Resources)
------------------------

Primary contributor/editor for this API category: Oxford\
Supporting contributors/reviewers: Polito, DOCOMO

Aims for Security and Privacy APIs[¶](#Aims-for-Security-and-Privacy-APIs)
--------------------------------------------------------------------------

The following requirements must be satisfied:

-   PS-DEV-VisionMobile-11: Webinos applications SHALL have access to
    the standardized webinos user privacy preferences
-   PS-DEV-Oxford-56: Applications shall be aware of changes to policies
    and may alter their behaviour as a result
-   ID-DEV-POLITO-005: A webinos device may be able to provide
    Attestation of the webinos Platform.

However, the first two of these requirements have been moved to phase 2
of the implementation as the security architecture is further clarified.

In addition, various requirements (PS-USR-Oxford-103, PS-USR-Oxford-26)
require users to authenticate through device-specific capabilities.
Therefore, an authentication API has been specified.

Aims for Security and Privacy APIs in phase 2[¶](#Aims-for-Security-and-Privacy-APIs-in-phase-2)
------------------------------------------------------------------------------------------------

The following proposals will be investigated in phase 2 of the webinos
platform:

-   Expose user privacy preferences to applications, including data
    retention policies and access control.
    -   Provide applications with the ability to query the *obligations*
        they will be under should they use a particular data item.
    -   Provide applications with the ability to query their own
        permissions - what have they been granted access to.
-   Expose device security capabilities
    -   Statements about whether the device can provide certain security
        features and to what level of assurance is provided. The main
        challenge with implementing this would be validating the
        results.
    -   These features might include (a) authentication methods, (b)
        attestation, (c) secure storage, (d) isolated execution, (e)
        auditing and logging, (f) event reporting / monitoring of
        platform state, (g) credentials for keys held in the platform &
        revocation lists.
-   Depending on future use cases and requirements, webinos may choose
    to expose certain cryptography APIs to applications.
-   Remote management APIs, perhaps like the [Android Device Admin
    API](http://developer.android.com/guide/topics/admin/device-admin.html)

Existing standards[¶](#Existing-standards)
------------------------------------------

The following APIs for security (e.g. cryptography and authentication)
and for attestation exist.

-   APIs for Cryptography and transport sessions
    -   [javax.crypto for
        cryptography](http://developer.android.com/reference/javax/crypto/package-summary.html)
    -   [javax.crypto.interface for
        Diffie-Hellman](http://developer.android.com/reference/javax/crypto/interfaces/package-summary.html)
    -   [javax.crypto.spec for specification of
        crypto-parameters](http://developer.android.com/reference/javax/crypto/spec/package-summary.html "e.g., the key")
    -   [java.net.ssl for
        SSL/TLS](http://developer.android.com/reference/javax/net/ssl/package-summary.html)
-   APIs for authentication
    -   [java.security.auth for authentication credential
        management](http://developer.android.com/reference/javax/net/ssl/package-summary.html)
-   APIs for policy management
    -   [android.app.admin to manage device
        policies](http://developer.android.com/reference/javax/net/ssl/package-summary.html)
-   APIs for DRM
    -   [android.drm for Digital Rights
        management](http://developer.android.com/reference/android/drm/package-summary.html)
-   Device status and attestation
    -   [WAC device status
        API](http://specs.wacapps.net/wac2_0/feb2011/deviceapis/devicestatus.html)
        as currently suggested in [HW\_Resource\_APIs](.html).
    -   Trusted Computing Group [Trusted Software
        Stack](http://www.trustedcomputinggroup.org/resources/tcg_software_stack_tss_specification)
        .
-   Secure coding APIs
    -   [OWASP
        ESAPI](http://www.owasp.org/index.php/ESAPI#tab=Downloads) -
        useful for input validation, credit card validation, etc.

APIs for which no existing standards/implementations exist[¶](#APIs-for-which-no-existing-standardsimplementations-exist)
-------------------------------------------------------------------------------------------------------------------------

### Attestation API[¶](#Attestation-API)

**Description:** The purpose of this API is to provide a secure means to
query the device to find out the identity and integrity of running
software. The example use case is [Trusted Computing Mobile Reference
Architecture](http://www.trustedcomputinggroup.org/resources/mobile_phone_work_group_mobile_reference_architecture)
. However, this is aimed at a lower layer than webinos. The aim of the
attestation API is simply to allow access to existing functionality.\
**Requirement/architectural reference:** ID-DEV-POLITO-005,
ID-DEV-POLITO-006, ID-DEV-POLITO-007, ID-DEV-POLITO-008\
**Phase:** 1\
**Webinos responsible/editor:** John Lyle

  ------------------------------------ ------------------------------------
  **High level Requirement**           **Notes**

  This API shall be capable of         
  exposing basic TCG attestation       
  capabilities                         

  This API shall not rely upon a       
  specific hardware implementation     

  This API shall provide applications  
  with the ability to fetch            
  authenticated data about the runtime 
  state of the platform                
  ------------------------------------ ------------------------------------

### Authentication API[¶](#Authentication-API)

**Description:** Provides information to applications about the current
authentication status of users, as well as allowing applications to
request re-authentication..\
**Requirement/architectural reference:** PS-USR-Oxford-103,
PS-USR-Oxford-26\
**Phase:** 1\
**Webinos responsible/editor:** John Lyle

  ------------------------------------ ------------------------------------
  **High level Requirement**           **Notes**

  This API shall allow applications to 
  request that the user authenticate   
  to the device                        

  This API shall allow applications to 
  find out when and how the user last  
  authenticated                        

  This API shall not expose identity   
  information about the user           
  ------------------------------------ ------------------------------------

User profile and context APIs[¶](#User-profile-and-context-APIs)
================================================================

Description[¶](#Description)
----------------------------

This section contains investigation results on user profile APIs and
context APIs.

The user profile API defines attributes and methods to access to user
related information (e.g. name, nickname, gender birthday, etc.) while
the application data API provide information about application related
information (e.g. installed application).

Resources[¶](#Resources)
------------------------

Primary contributor/editor for this API category: T-Systems\
Supporting contributors/reviewers: DoCoMo, NTUA

Analysis of requirements from WP2.2[¶](#Analysis-of-requirements-from-WP22)
---------------------------------------------------------------------------

The table below lists relevant requirements identified in WP2.2 and the
compliance status based on current proposal.

  ------------------ ------------------ ------------------ ------------------
  **Requirement**    **Description**    **Compliance       **Notes**
                                        Status**           

  CAP-DEV-SEMC-010   webinos SHALL      **Phase 1**        
                     provide means for                     
                     applications to                       
                     access user’s                         
                     profile data.                         

  CAP-DEV-SEMC-011   webinos SHALL      Phase 2            An secure and
                     provide means for                     optimal method to
                     applications to                       store user
                     access user’s                         preferences must
                     preference data                       be found to
                                                           provide privacy
                                                           aspects and avoid
                                                           a blow up of user
                                                           preferences (e.g.
                                                           different
                                                           applications would
                                                           like to store the
                                                           same information
                                                           in the user
                                                           preferences -\>
                                                           ColorBlind:RedGree
                                                           n
                                                           is the same as
                                                           ColorBlind:GreenRe
                                                           d).

  ID-USR-POLITO-100  webinos components **Phase 1**        The user profile
                     that have to be                       has a unique id.
                     shared or                             
                     referenced                            
                     (device,                              
                     application, data,                    
                     user) SHALL be                        
                     identifiable.                         

  DA-DEV-ambiesense- It MUST be         Phase 2            In phase 1 the
  040                possible for                          user profile API
                     applications to                       implements social
                     share context                         contact
                     information across                    information.
                     devices, so that                      Further contextual
                     for instance                          information must
                     social context can                    be evaluated for
                     be updated when                       phase 2.
                     friends enter/                        
                     leave the same                        
                     situation.                            

  PS-DEV-Oxford-86   The webinos        Phase 2            A secure method to
                     runtime SHALL                         store login
                     support the                           credentials must
                     confidential                          be evaluated for
                     storage of user                       phase 2.
                     credentials                           
                     including                             
                     usernames and                         
                     passwords.                            

  PS-USR-IBBT-005    The webinos system Phase 2            Same as
                     SHOULD store                          CAP-DEV-SEMC-011.
                     associations                          
                     between device,                       
                     user and context                      
                     information                           
                     securely and                          
                     provide this                          
                     information based                     
                     on user                               
                     preferences.                          

  PS-USR-VisionMobil webinos SHALL      Phase 2            Same as
  e-10               allow users to                        CAP-DEV-SEMC-011.
                     express their                         
                     privacy                               
                     preferences in a                      
                     consistent way.                       

  PS-USR-VisionMobil webinos            Phase 2            Same as
  e-11               applications SHALL                    CAP-DEV-SEMC-011.
                     be able to query                      
                     the webinos user                      
                     privacy                               
                     preferences.                          

  NC-DEV-IBBT-0015   Applications MUST  Phase 2            Same as
                     be able to access                     CAP-DEV-SEMC-011.
                     the user's general                    
                     webinos                               
                     preferences (with                     
                     the permission of                     
                     the user).                            
  ------------------ ------------------ ------------------ ------------------

Phase 1 APIs[¶](#Phase-1-APIs)
------------------------------

APIs for which no existing standards/implementations exist[¶](#APIs-for-which-no-existing-standardsimplementations-exist)
-------------------------------------------------------------------------------------------------------------------------

### User Profile API[¶](#User-Profile-API)

**Description:** User Information\
\*Requirement/architectural reference:

-   CAP-DEV-SEMC-010: Webinos SHALL provide means for applications to
    access user’s profile data.
-   ID-USR-POLITO-100: webinos components that have to be shared or
    referenced (device, application, data, user) SHALL be identifiable.

**Phase:** Webinos phase 1\
**Webinos responsible:** Ronny Gräfe / George Gionis

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  [W3C        Contacts    Contacts                            Decision
  Contacts    provides a  provide                             was made to
  API](http:/ basic list  only 'real                          build own
  /dev.w3.org of          life'                               API for
  /2009/dap/c information information                         webinos,
  ontacts/)   about a     about a                             based on
              person, but user, but                           elements
              is          no                                  from
              insufficien technical                           Contact and
              t           information                         Portable
              for webinos (like                               Contacts.
              needs.      preferences                         See note
                          ).                                  below
                          It also                             table.
                          doesn't                             
                          allow                               
                          granularity                         
                          of access.                          
                          And has no                          
                          specific                            
                          API for the                         
                          user (as                            
                          opposed to                          
                          other                               
                          contacts).                          

  [Portable   The                                             Decision
  Contacts](h reference                                       was made to
  ttp://porta presented                                       build own
  blecontacts by George                                       API for
  .net/draft- Gionis                                          webinos,
  spec.html)  added                                           based on
              account                                         elements
              information                                     from
              for user                                        Contact and
              accounts                                        Portable
              for                                             Contacts.
              external                                        See note
              social                                          below
              network                                         table.
              profiles,                                       
              which is                                        
              useful for                                      
              context                                         
              awareness                                       
              and                                             
              calculation                                     
              of social                                       
              proximity.                                      
              We can base                                     
              user                                            
              profile                                         
              information                                     
              on the                                          
              account                                         
              information                                     
              suggested                                       
              by portable                                     
              contacts..                                      
  ----------- ----------- ----------- ----------- ----------- -----------

The data accessible through the API for user profiles will be based on
the W3C contacts information with additional information for social
network profiles based on Portable Contacts.

Phase 2 APIs[¶](#Phase-2-APIs)
------------------------------

### User Profile API[¶](#User-Profile-API)

**Description:** User Information\
\*Requirement/architectural reference:

-   CAP-DEV-SEMC-011: webinos SHALL provide means for applications to
    access user’s preference data.
-   DA-DEV-ambiesense-040: It MUST be possible for applications to share
    context information across devices, so that for instance social
    context can be updated when friends enter/ leave the same situation.
-   PS-DEV-Oxford-86: The webinos runtime SHALL support the confidential
    storage of user credentials including usernames and passwords.
-   PS-USR-IBBT-005: The webinos system SHOULD store associations
    between device, user and context information securely and provide
    this information based on user preferences.
-   PS-USR-VisionMobile-10: webinos SHALL allow users to express their
    privacy preferences in a consistent way.
-   PS-USR-VisionMobile-11: webinos applications SHALL be able to query
    the webinos user privacy preferences.
-   NC-DEV-IBBT-0015: Applications MUST be able to access the user's
    general webinos preferences (with the permission of the user).

**Phase:** Webinos phase 2\
**Webinos responsible:** ?

  ----------- ----------- ----------- ----------- ----------- -----------
  **Candidate **Short     **Implement **Gaps**    **Notes**   **Decision*
  API**       Description ation                               *
              **          Status**                            

  No suitable                                                 
  API                                                         
  identified                                                  
  ----------- ----------- ----------- ----------- ----------- -----------


