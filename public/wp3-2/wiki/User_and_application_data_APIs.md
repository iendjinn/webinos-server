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


