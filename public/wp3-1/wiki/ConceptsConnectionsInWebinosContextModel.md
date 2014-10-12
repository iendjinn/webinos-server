Concepts and Connections in the Webinos Context Model[¶](#Concepts-and-Connections-in-the-Webinos-Context-Model)
================================================================================================================

-   [Concepts and Connections in the Webinos Context
    Model](#Concepts-and-Connections-in-the-Webinos-Context-Model)
    -   [User](#User)
        -   [ATTRIBUTES](#ATTRIBUTES)
        -   [CONNECTIONS](#CONNECTIONS)
    -   [Social Network Profile (of
        User)](#Social-Network-Profile-of-User)
        -   [ATTRIBUTES](#ATTRIBUTES)
    -   [User (defined) Group](#User-defined-Group)
        -   [ATTRIBUTES](#ATTRIBUTES)
    -   [Device](#Device)
        -   [ATTRIBUTES](#ATTRIBUTES)
        -   [CONNECTIONS](#CONNECTIONS)
    -   [Application](#Application)
        -   [ATTRIBUTES](#ATTRIBUTES)

In the core of the webinos context model are the basic entities (**or
otherwise called context objects**) that exist in the webinos
environment and the connections that they create among them. It is
objective of the webinos context model is to **capture** information
about **the activities** that take place within webinos and pertain to
Users, Devices, Applications and the things they connect to and provide
sufficient metadata about these activities so that a consumer of the
data can retrieve and use it in a meaningful way. The webinos context
model **does not capture** information about **every event** that occurs
within webinos.

The webinos context framework uses the (underlying) webinos runtime
engine API calls to acquire the necessary data and populate the
properties of the context objects each time a context-related activity
occurs in the system. Therefore the primary location for collecting
context data are the devices where the webinos runtime is executed.
Following, each time a device logins to the Personal Zone of a user the
collected context data are synchronized with the Users Profile in the
Personal Zone Hub.

The webinos context API provides a simple, holistic, view on the entire
set of context data, allowing consumers of these data (i.e. users,
devices or applications) to have access to the properties of the context
objects - **provided of course that they have the necessary level of
permission to access the data**.

Every object in the webinos context model has a **unigue ID**, a
corresponding **set of attributes** and it can through a set of
**connections** with other objects. Following we present an analysis of
these three basic elements of the webinos context model, meaning the
objects along with their properties and their connections to other
objects.

User[¶](#User)
--------------

The User profile in webinos.

### ATTRIBUTES[¶](#ATTRIBUTES)

  -------------- -------------- -------------- -------------- --------------
  **Name**       **Description* **Authorizatio **Return       **Acquisition
                 *              n**            Value**        Mechanism**

  *userID*       the user's ID  tbd accord. to JSON string    
                 in webinos     the                           
                                privacy/author                
                                ization                       
                                framework                     

  *displayName*  the user's     tbd accord. to JSON string    
                 name to be     the                           
                 displayed      privacy/author                
                                ization                       
                                framework                     

  *firstName*    the user's     tbd accord. to JSON string    
                 first name     the                           
                                privacy/author                
                                ization                       
                                framework                     

  *middleName*   the user's     tbd accord. to JSON string    
                 middle name    the                           
                                privacy/author                
                                ization                       
                                framework                     

  *lastName*     the user's     tbd accord. to JSON string    
                 last name      the                           
                                privacy/author                
                                ization                       
                                framework                     

  *nickname*     the user's     tbd accord. to JSON string    
                 nickname       the                           
                                privacy/author                
                                ization                       
                                framework                     

  *phoneNumbers* the user's     tbd accord. to JSON string    
                 list of phone  the            array          
                 numbers        privacy/author containing     
                                ization        *phoneNumber*  
                                framework      ,              
                                               phoneType      
                                               fields         

  *emails*       the user's     tbd accord. to JSON string    
                 list of emails the            array          
                                privacy/author containing     
                                ization        *email*        
                                framework      ,              
                                               emailType      
                                               fields         

  *addresses*    the user's     tbd accord. to JSON string    
                 list physical  the            array          
                 addresses      privacy/author containing     
                                ization        country        
                                framework      ,              
                                               city           
                                               ,              
                                               postalCode     
                                               ,              
                                               state          
                                               ,              
                                               streetAddress  
                                               ,              
                                               type           
                                               fields         

  *ims*          the user's     tbd accord. to JSON string    
                 list instant   the            array          
                 messaging      privacy/author containing     
                 service        ization        *imsID*        
                 identifiers    framework      ,              
                                               imsProvider    
                                               fields         

  *organisations the user's     tbd accord. to JSON string    
  *              list of        the            array          
                 organisation   privacy/author                
                 associated     ization                       
                 with him       framework                     

  *birthday*     the user's     tbd accord. to JSON string    
                 birth date     the                           
                                privacy/author                
                                ization                       
                                framework                     

  *gender*       the user's     tbd accord. to JSON string    
                 gender         the                           
                                privacy/author                
                                ization                       
                                framework                     

  *note*         personal notes tbd accord. to JSON string    
                 of the user    the                           
                 (free text)    privacy/author                
                                ization                       
                                framework                     

  *urls*         the user's     tbd accord. to JSON string    
                 list of urls   the            array          
                 associated     privacy/author containing     
                 with him       ization        *url*          
                 (personal      framework      ,              
                 website, blog,                urlType        
                 social network                fields         
                 accounts)                                    

  *timezone*     the user's     tbd accord. to JSON string    
                 current        the            (as a positive 
                 timezone       privacy/author or negative    
                                ization        difference     
                                framework      from UTC)      

  *revision*     the last known tbd accord. to JSON string    
                 modification   the            (containing a  
                 time the user  privacy/author IETF RFC 3339  
                 updated his    ization        datetime)      
                 profile        framework                     
  -------------- -------------- -------------- -------------- --------------

the specification of the above object has been produced taking into
concideration:

-   W3C Contacts API, Editor's Draft March 8th 2011, available at
    <http://dev.w3.org/2009/dap/contacts>
-   Portable Contacts specification v1.0 Draft C, August 5, 2008,
    available at <http://portablecontacts.net/draft-spec.html>

### CONNECTIONS[¶](#CONNECTIONS)

The User object in webinos can have the following connections to other
objects in the context model.

  -------------- -------------- -------------- -------------- --------------
  **Name**       **Description* **Authorizatio **Return       **Acquisition
                 *              n**            Value**        Mechanism**

  *Devices*      the list of    tbd accord. to JSON string    
                 Devices owned  the            array of       
                 by the user    privacy/author device         
                                ization        deviceIDs      
                                framework      ,              
                                               name           
                                               and            
                                               model          
                                               fields         

  *Applications* the list of    tbd accord. to JSON string    
                 Applications   the            array of       
                 owned by the   privacy/author application    
                 users and      ization        applicationID  
                 installed      framework      and            
                 across his                    name           
                 several device                and fields     

  *socialProfile the list of    tbd accord. to JSON string    
  s*             social network the            array          
                 profiles that  privacy/author containing     
                 the User has   ization        socialID       
                 opt to link to framework      ,              
                 his account                   displayName    
                                               and            
                                               socialNetworkP 
                                               rovider        
                                               fields         

  *userDefinedGr the list of    tbd accord. to JSON string    
  oups*          groups the     the            array          
                 user has       privacy/author containing     
                 defined and    ization        groupID        
                 linked to his  framework      ,              
                 account                       groupName      
                                               fields         

  *userBelonging the list of    tbd accord. to JSON string    
  Groups*        groups that    the            array          
                 the user has   privacy/author containing     
                 been declared  ization        groupID        
                 to be a member framework      ,              
                 of by another                 groupName      
                 user                          fields         
  -------------- -------------- -------------- -------------- --------------

Social Network Profile (of User)[¶](#Social-Network-Profile-of-User)
--------------------------------------------------------------------

The User profile on a social network provider.

### ATTRIBUTES[¶](#ATTRIBUTES)

  -------------- -------------- -------------- -------------- --------------
  **Name**       **Description* **Authorizatio **Return       **Acquisition
                 *              n**            Value**        Mechanism**

  *userID*       the user's     tbd accord. to JSON string    
                 webinos ID to  the                           
                 whom the       privacy/author                
                 social profile ization                       
                 belongs to     framework                     

  *socialNetwork the identifier tbd accord. to JSON string    
  Provider*      of the social  the                           
                 network        privacy/author                
                 provider       ization                       
                                framework                     

  *socialID*     the user's IDs tbd accord. to JSON string    
                 in the social  the                           
                 network, that  privacy/author                
                 is one or more ization                       
                 elements that  framework                     
                 can be used to                               
                 uniquely                                     
                 identify the                                 
                 user (i.e.                                   
                 userName,                                    
                 social network                               
                 ID number,                                   
                 email                                        

  *displayName*  the user's     tbd accord. to JSON string    
                 display name   the                           
                 on the social  privacy/author                
                 network        ization                       
                                framework                     

  *connectionsLi the user's     tbd accord. to JSON string    UNDER
  st*            connections    the            array          DISCUSSION
                 list (i.e.     privacy/author containing     WHETHER TO BE
                 friends,       ization        connectionDisp INTEGRATED OR
                 connections,   framework      layName        NOT
                 followers,                    ,              
                 followees) on                 connectionID   
                 the social                    ,              
                 network                       connectionChar 
                                               acterisation   
                                               ,              
                                               connectionType 
                                               fields         
  -------------- -------------- -------------- -------------- --------------

User (defined) Group[¶](#User-defined-Group)
--------------------------------------------

A group of connections, that is defined by the User and expresses
(explicitly) a grouping of the social relationship he shares with them
(i.e. family, facebook friends, close friends, colleagues, etc. The
Group members can come from several different "containers", i.e. user
contacts that have a verified webinos account (in a similar way that
group messaging apps today create their network), facebook friends in
the users facebook profile or twitter followers in the users twitter
profile (if the user has opt to link these social profiles to his
account).

### ATTRIBUTES[¶](#ATTRIBUTES)

  -------------- -------------- -------------- -------------- --------------
  **Name**       **Description* **Authorizatio **Return       **Acquisition
                 *              n**            Value**        Mechanism**

  *groupID*      the (unigue)   tbd accord. to JSON string    
                 ID of the      the                           
                 group          privacy/author                
                                ization                       
                                framework                     

  *userID*       the user's     tbd accord. to JSON string    
                 webinos ID to  the                           
                 whom the group privacy/author                
                 belongs to     ization                       
                                framework                     

  *name*         the groups     tbd accord. to JSON string    
                 name           the                           
                                privacy/author                
                                ization                       
                                framework                     

  *description*  a short        tbd accord. to JSON string    
                 description of the                           
                 what kind of   privacy/author                
                 shat this      ization                       
                 group          framework                     
                 signifies                                    
                 (optional)                                   

  *groupMembers* the list of    tbd accord. to JSON string    
                 the group      the            array          
                 member         privacy/author containing     
                                ization        connectionDisp 
                                framework      layName        
                                               ,              
                                               connectionID   
                                               ,              
                                               connectionProv 
                                               ider           
                                               fields         
  -------------- -------------- -------------- -------------- --------------

Device[¶](#Device)
------------------

The Device in webinos.

### ATTRIBUTES[¶](#ATTRIBUTES)

  -------------- -------------- -------------- -------------- --------------
  **Name**       **Description* **Authorizatio **Return       **Acquisition
                 *              n**            Value**        Mechanism**

  *deviceID*     the device's   tbd accord. to JSON string    
                 ID in webinos  the                           
                                privacy/author                
                                ization                       
                                framework                     

  *userID*       the user's     tbd accord. to JSON string    
                 webinos ID to  the                           
                 whom the       privacy/author                
                 device belongs ization                       
                 to             framework                     

  *name*         the device's   tbd accord. to JSON string    
                 Name in        the                           
                 webinos        privacy/author                
                                ization                       
                                framework                     

  *type*         the device's   tbd accord. to JSON string    
                 type with      the                           
                 regards to the privacy/author                
                 usage pattern, ization                       
                 i.e. is it a   framework                     
                 personal                                     
                 device to be                                 
                 used only by                                 
                 its owner such                               
                 as the mobile,                               
                 is it a public                               
                 device to be                                 
                 used by anyone                               
                 that has                                     
                 access to it                                 
                 i.e. the TV                                  
                 set in the                                   
                 living room,                                 
                 is it a device                               
                 that can only                                
                 be used by a                                 
                 closed group                                 
                 of people for                                
                 example the                                  
                 inCar                                        
                 entertainment                                
                 system that is                               
                 to be used                                   
                 only by family                               
                 members                                      

  *model*        the device's   tbd accord. to JSON string    
                 model          the                           
                 according to   privacy/author                
                 the            ization                       
                 manufacturer   framework                     

  *OS*           the device's   tbd accord. to JSON string    
                 (currently     the            array          
                 installed)     privacy/author containing     
                 Operating      ization        name           
                 System, name   framework      and            
                 and version                   version        
                                               fields         

  *networkConnec represents the tbd accord. to JSON string    
  tion*          connection     the            array          
                 type           privacy/author containing     
                 (ethernet,     ization        type           
                 wifi, 2G. 3G,  framework      ,              
                 4G, etc)                      currentNW      
                 currently used                ,              
                 by the device                 homeNW         
                 to connect to                 fields         
                 the internet.                                
                 if the device                                
                 is connected                                 
                 the                                          
                 information                                  
                 about the                                    
                 current                                      
                 network                                      
                 provider are                                 
                 given as well                                
                 (where                                       
                 available)                                   

  *audioCodecs*  The list of    tbd accord. to JSON string    
                 audio codecs   the            array          
                 available on   privacy/author containing     
                 the device.    ization        compFormats    
                                framework      ,              
                                               encode         
                                               ,              
                                               decode         
                                               fields         

  *videoCodecs*  The list of    tbd accord. to JSON string    
                 video codecs   the            array          
                 available on   privacy/author containing     
                 the device.    ization        compFormats    
                                framework      ,              
                                               containerForma 
                                               ts             
                                               ,              
                                               hwAccel        
                                               ,              
                                               profiles       
                                               ,              
                                               frameTypes     
                                               ,              
                                               rateTypes      
                                               fields         

  *availableCapa the amount of  tbd accord. to JSON int       
  city*          available data the                           
                 that this      privacy/author                
                 device can     ization                       
                 hold, in       framework                     
                 bytes.                                       

  *HTMLSupportVe version of     tbd accord. to JSON string    
  rsion*         HTML supported the                           
                 by device      privacy/author                
                                ization                       
                                framework                     

  *CSSSupportVer version of CSS tbd accord. to JSON string    
  sion*          supported by   the                           
                 device         privacy/author                
                                ization                       
                                framework                     

  *displayDevice The list of    tbd accord. to JSON string    
  s*             display        the            array          
                 devices        privacy/author containing     
                 available or   ization        orientation    
                 connected to   framework      ,              
                 the current                   brightness     
                 system                        ,              
                 (device).                     contrast       
                                               ,              
                                               blanked        
                                               ,              
                                               dotsPerInchW   
                                               ,              
                                               dotsPerInchH   
                                               ,              
                                               physicalWidth  
                                               ,              
                                               physicalHeight 
                                               ,              
                                               info           
                                               ,              
                                               active         
                                               fields         

  *printingDevic The list of    tbd accord. to JSON string    
  es*            printing       the            array          
                 devices        privacy/author containing     
                 available or   ization        type           
                 connected to   framework      ,              
                 the current                   resolution     
                 system                        ,              
                 (device).                     color          
                                               ,              
                                               info           
                                               ,              
                                               active         
                                               fields         

  *brailleDevice The list of    tbd accord. to JSON string    
  s*             braille        the            array          
                 devices        privacy/author containing     
                 available or   ization        nbCells        
                 connected to   framework      ,              
                 the current                   info           
                 system                        ,              
                 (device).                     active         
                                               fields         

  *audioDevices* The list of    tbd accord. to JSON string    
                 audio devices  the            array          
                 available or   privacy/author containing     
                 connected to   ization        (indicatively) 
                 the current    framework      type           
                 system                        ,              
                 (device).                     freqRangeLow   
                                               ,              
                                               freqRangeHigh  
                                               ,              
                                               volumeLevel    
                                               ,              
                                               info           
                                               ,              
                                               active         
                                               fields         

  *pointingDevic The list of    tbd accord. to JSON string    
  es*            pointing       the            array          
                 devices        privacy/author containing     
                 available on   ization        type           
                 the current    framework      ,              
                 system                        supportsMultiT 
                 (device).                     ouch           
                                               ,              
                                               info           
                                               ,              
                                               active         
                                               fields         

  *keyboards*    The list of    tbd accord. to JSON string    
                 keyboards      the            array          
                 available or   privacy/author containing     
                 connected to   ization        type           
                 the current    framework      ,              
                 system                        isHardware     
                 (device).                     ,              
                                               info           
                                               ,              
                                               active         
                                               fields         

  *cameras*      The list of    tbd accord. to JSON string    
                 cameras        the            array          
                 available or   privacy/author containing     
                 connected to   ization        supportsVideo  
                 the current    framework      ,              
                 system                        hasFlash       
                 (device).                     ,              
                                               sensorPixels   
                                               ,              
                                               maxZoomFactor  
                                               ,              
                                               active         
                                               fields         

  *microphones*  The list of    tbd accord. to JSON string    
                 microphones    the            array          
                 available or   privacy/author containing     
                 connected to   ization        type           
                 the current    framework      ,              
                 system                        freqRangeLow   
                 (device).                     ,              
                                               freqRangeHigh  
                                               ,              
                                               info           
                                               ,              
                                               name           
                                               ,              
                                               types          
                                               ,              
                                               active         
                                               fields         
  -------------- -------------- -------------- -------------- --------------

the specification of the above object has been produced taking into
concideration:

-   W3C Battery Status Event Specification, Editor's Draft 09 May 2011,
    available at
    <http://dev.w3.org/2009/dap/system-info/battery-status.html>
-   W3C Network Information API, Editor's Draft 13 April 2011, available
    at <http://dev.w3.org/2009/dap/netinfo>
-   W3C System Information API, Editor's Draft 16 March 2011, available
    at <http://dev.w3.org/2009/dap/system-info/>

### CONNECTIONS[¶](#CONNECTIONS)

The User object in webinos can have the following connections to other
objects in the context model.

  -------------- -------------- -------------- -------------- --------------
  **Name**       **Description* **Authorizatio **Return       **Acquisition
                 *              n**            Value**        Mechanism**

  *installedAppl the list of    tbd accord. to JSON string    
  ications*      Installed      the            array of       
                 Applications   privacy/author application    
                 in the Device  ization        applicationID  
                                framework      and            
                                               name           
                                               and fields     

  *authorisedUse the list of    tbd accord. to JSON string    
  rGroups*       user groups    the            array          
                 that have been privacy/author containing     
                 authorized by  ization        groupID        
                 the device     framework      ,              
                 owner to have                 groupName      
                 access and                    a fields       
                 operate the                                  
                 device                                       
  -------------- -------------- -------------- -------------- --------------

Application[¶](#Application)
----------------------------

The Application in webinos.

### ATTRIBUTES[¶](#ATTRIBUTES)

  -------------- -------------- -------------- -------------- --------------
  **Name**       **Description* **Authorizatio **Return       **Acquisition
                 *              n**            Value**        Mechanism**

  *applicationID the            tbd accord. to JSON string    
  *              applications's the                           
                 ID in webinos  privacy/author                
                                ization                       
                                framework                     

  *name*         the            ptbd accord.   JSON string    
                 applications's to the                        
                 Name in        privacy/author                
                 webinos        ization                       
                                framework                     

  *description*  the            tbd accord. to JSON string    
                 application's  the                           
                 description    privacy/author                
                 provided by    ization                       
                 the            framework                     
                 manufacturer                                 

  *category*     the            tbd accord. to JSON string    
                 application's  the                           
                 category       privacy/author                
                                ization                       
                                framework                     

  *version*      the            tbd accord. to JSON string    
                 application's  the                           
                 version        privacy/author                
                                ization                       
                                framework                     

  *installedBase the            tbd accord. to JSON string    
  *              application's  the            array          
                 installed      privacy/author containing     
                 base, that is  ization        numUsers       
                 the number of  framework      ,              
                 individual                    numDevices     
                 users and the                 fields         
                 number of                                    
                 individual                                   
                 devices that                                 
                 the                                          
                 application is                               
                 currently                                    
                 installed                                    

  *language*     the            tbd accord. to JSON string    
                 application's  the                           
                 primary        privacy/author                
                 language       ization                       
                                framework                     

  *link*         a link to the  tbd accord. to JSON string    
                 application in the                           
                 the appstore   privacy/author                
                                ization                       
                                framework                     

  *type*         the            tbd accord. to JSON string    
                 applications   the            array          
                 type (i.e.     privacy/author containing     
                 free, paid,    ization        type           
                 priviledged,   framework      ,              
                 etc) along                    price          
                 with its price                fields         
                 (if necessary)                               

  *grantedPermis the list of    tbd accord. to JSON string    
  sions*         permission the the            array of       
                 application    privacy/author permissions    
                 has been       ization                       
                 granted by the framework                     
                 user upon                                    
                 installation                                 

  *supportScreen the list of    tbd accord. to JSON string    
  s*             screen which   the            array of       
                 the            privacy/author screen         
                 application    ization        configuration  
                 supports       framework      items          

  *deviceConfigu the hardware   tbd accord. to JSON string    
  rations*       (and software) the            array          
                 features the   privacy/author containing     
                 application    ization        Audio          
                 requires. For  framework      ,              
                 example, an                   Bluetooth      
                 application                   ,              
                 might specify                 CameraType     
                 that it                       ,              
                 requires a                    Location       
                 physical                      ,              
                 keyboard or a                 Microphone     
                 particular                    ,              
                 navigation                    NFC            
                 device, like a                ,              
                 trackball. all                Sensors        
                 the supported                 ,\             
                 configurations                Telephony      
                 should be                     ,              
                 listed                        SMS            
                                               ,              
                                               Accelerometer  
                                               ,              
                                               Gyroscope      
                                               ,              
                                               magnetometer   
                                               ,              
                                               Touchscreen    
                                               ,              
                                               KeyboradType   
                                               ,              
                                               NavControlType 
                                               fields         
  -------------- -------------- -------------- -------------- --------------

the specification of the above object has been produced taking into
concideration:

-   The specification of the Android Developers Guide,
    AndroidManifest.xml File, available at
    <http://developer.android.com/guide/topics/manifest/manifest-intro.html>
-   The iOS Application Programming Guide, Build Time Configuration
    Details, available at
    [http://developer.apple.com/library/ios/\#documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BuildTimeConfiguration/BuildTimeConfiguration.html\#//apple\_ref/doc/uid/TP40007072-CH7-SW15](http://developer.apple.com/library/ios/#documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BuildTimeConfiguration/BuildTimeConfiguration.html#//apple_ref/doc/uid/TP40007072-CH7-SW15)

