Browser plug-in extension handling[¶](#Browser-plug-in-extension-handling)
==========================================================================

Enhances capability of the webinos runtime to enable the access to
uncommon and unique device features.

The Browser plug-ins / extension handling unit **provides the mechanism
to manage non-webinos client side software components**, which enhances
the functionality of the webinos runtime and **enables the execution of
this software artifacts in a secure manner**.

[Recommendation for extensions in webinos](.html)

-   [Browser plug-in extension
    handling](#Browser-plug-in-extension-handling)
    -   [Partner involved](#Partner-involved)
    -   [Conference Calls / minutes](#Conference-Calls-minutes)
    -   [State-of-the-art extensions/browser
        handling](#State-of-the-art-extensionsbrowser-handling)
        -   [Standardised plugin systems](#Standardised-plugin-systems)
        -   [Additional solutions for
            plugins](#Additional-solutions-for-plugins)
        -   [Vendor specific extension
            systems](#Vendor-specific-extension-systems)
        -   [Approaches for extending the functionalites of the
            JavaScript
            Engine](#Approaches-for-extending-the-functionalites-of-the-JavaScript-Engine)
    -   [Parts to be specified](#Parts-to-be-specified)
    -   [High-level archietcture](#High-level-archietcture)
    -   [Tasks and Actions](#Tasks-and-Actions)
    -   [Open Issures](#Open-Issures)
    -   [Presentations](#Presentations)
    -   [Relevant requirements for plug-in and extension
        handling](#Relevant-requirements-for-plug-in-and-extension-handling)

Partner involved[¶](#Partner-involved)
--------------------------------------

-   **BMW F+T**
-   TUM
-   SAMSUNG

*Security and privacy contacts: Samsung, BMW.*

Conference Calls / minutes[¶](#Conference-Calls-minutes)
--------------------------------------------------------

-   [ConfCall 11/03/04 WP3.1 plugin-extension handling](.html)

State-of-the-art extensions/browser handling[¶](#State-of-the-art-extensionsbrowser-handling)
---------------------------------------------------------------------------------------------

### Standardised plugin systems[¶](#Standardised-plugin-systems)

-   [Netscape Plug-in API
    (NPAPI)](%20Netscape%20Plug-in%20API%20(NPAPI).html) [Issues with
    NPAPI plug-ins](.html)
-   [Pepper API (PPAPI)](Pepper%20API%20(PPAPI).html)

### Additional solutions for plugins[¶](#Additional-solutions-for-plugins)

-   [Google Native Client
    (NaCl)](Google%20Native%20Client%20(NaCl).html)
-   [FireBreath - cross platform framework for building
    plug-ins](%20FireBreath%20-%20cross%20platform%20framework%20for%20building%20plug-ins%20.html)

### Vendor specific extension systems[¶](#Vendor-specific-extension-systems)

-   [Chrome Extensions](%20Chrome%20Extensions.html)
-   [FF Extensions](.html)
-   [Opera Extensions](.html)

### Approaches for extending the functionalites of the JavaScript Engine[¶](#Approaches-for-extending-the-functionalites-of-the-JavaScript-Engine)

-   [Node.js Addons](.html)
-   [js-ctypes](.html) for FF addons

Parts to be specified[¶](#Parts-to-be-specified)
------------------------------------------------

In the browser plug-in / extension handling we need to specify the
following:

  ------------------ ------------------ ------------------ ------------------
  **description**    **target           **priority**       **comments**
                     audience**                            

  [API for accessing app developer      high               Accroding to REQ
  an extension                                             LC-DWP-ISMB-009
  inside an                                                must be useable in
  application](.html                                       the same way as
  )                                                        other device
                                                           features

  [API/Interfaces    extension          high               
  for integrating    developer/provider                    
  the extensions                                           
  into the webinos                                         
  runtime](.html)                                          

  [Datascheme for    extension          high               According to REQ
  packaging an       developer/provider                    LC-3RD-ISMB-106
  extensions](.html)                                       must be packaged
                                                           as similar as
                                                           possible to
                                                           applications
  ------------------ ------------------ ------------------ ------------------

High-level archietcture[¶](#High-level-archietcture)
----------------------------------------------------

[High-Level architecture for extension handling](.html) - in development

Tasks and Actions[¶](#Tasks-and-Actions)
----------------------------------------

TODO for Berlin

Open Issures[¶](#Open-Issures)
------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------
  **Item**                                                                                                                                                                                                                                                                           **Due**
  state-of-the-art: collect relevant solutions and their features. What more information is needed or if Chrome is an appropriate technology to look forward to and use NaCl and PPAPI.                                                                                              tbd.
  derive relevant features for plug-ins & extensions handling from the requirements, the [initial architecture](initial%20architecture.html) and the Use Cases                                                                                                                       tbd .
  finalize working definition of plug-ins and extensions handling                                                                                                                                                                                                                    tbd.
  get an idea of what to specify and implement in Webinos                                                                                                                                                                                                                            tbd.
  get an idea of which we want to build upon                                                                                                                                                                                                                                         tbd.
  Prioritise our contributions                                                                                                                                                                                                                                                       tbd.
  get an idea of how interfaces could look like                                                                                                                                                                                                                                      tbd.
  What input information does plug-in handling in Webinos need?                                                                                                                                                                                                                      tbd.
  From where does this input come?                                                                                                                                                                                                                                                   tbd.
  What output information does the plug-in handling in Webinos provide?                                                                                                                                                                                                              tbd.
  How much effort is all this likely to be?                                                                                                                                                                                                                                          tbd.
  Identification by browser about plug-in should have description about. This input needs to come from the identification about syntax and format.                                                                                                                                   TBD.
  Registering of plug-ins: MIME type, browser detection (what types to include), PFS2 search API                                                                                                                                                                                     tbd.
  Device capabilities needed to identify if 2D, 3D, hardware accelerations, audio, Wifi, BT (to determine capabilities and possible network technology that could be used). Here concept of virtual device will play pivotal role and how we define and capability of each device.   tbd
  How to fetch device state and provide access to plug-in                                                                                                                                                                                                                            tbd
  Do we use API provided by pepper or NPAPI or NaCl or define a new one?                                                                                                                                                                                                             tbd
  How to handle user input, create buffer, windowless or window plugin, event handling, timer support, print support, ??                                                                                                                                                             tbd
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------

Presentations[¶](#Presentations)
--------------------------------

Presentation held during the Turin meet is available at\
<http://dev.webinos.org/redmine/attachments/download/301/wp3_1_browser_plugin_handling.pdf>

Ideas of Dave:\
</wp3-1/wiki/Extending_the_browser>

Relevant requirements for plug-in and extension handling[¶](#Relevant-requirements-for-plug-in-and-extension-handling)
----------------------------------------------------------------------------------------------------------------------

  ----------------------- ----------------------- -----------------------
  **ReqId**               **Description**         **Comment**

  CAP-DWB-FHG-002         The webinos runtime     
                          SHOULD allow access to  
                          non-webinos APIs to     
                          device features         

  PS-DWP-ISMB-202         The Webinos runtime     
                          MUST ensure that an     
                          application does not    
                          access device features, 
                          extensions and content  
                          other than those        
                          associated to it.       

  LC-DEV-ISMB-003         An application MUST be  
                          associated with         
                          required and optional   
                          APIs it MAY use, as     
                          well as their           
                          minimum/supported       
                          versions.               

  LC-ASP-ISMB-112         It SHALL be possible to 
                          define meta-packages    
                          containing a collection 
                          of applications and/or  
                          extensions.             

  LC-DWP-ISMB-009         Extensions SHALL be     
                          treated in a way that   
                          is similar and          
                          consistent with         
                          standard device         
                          features.               

  LC-3RD-ISMB-106         Extensions SHALL be     
                          packaged in a way that  
                          is as similar as        
                          possible to             
                          applications.           

  LC-3RD-ISMB-107         An Extension that       
                          contains                
                          platform-specific code  
                          MUST be associated with 
                          the supported           
                          platform(s).            
  ----------------------- ----------------------- -----------------------


