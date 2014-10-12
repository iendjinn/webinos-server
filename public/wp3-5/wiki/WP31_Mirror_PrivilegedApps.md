WP31 Mirror PrivilegedApps[¶](#WP31-Mirror-PrivilegedApps)
==========================================================

This reflections came from [privileged application T3.1 sub
task](/wp3-1/wiki/%27Privileged_applications%27)

Initial threat analysis[¶](#Initial-threat-analysis)
----------------------------------------------------

"restricted APIs access control point" could (likely) be the PEP. A
different term is used until would be defined if privileged APIs need a
different mechanisms for access control or, on the contrary, can use (as
likely will be) the same policy architecture suitable for unprivileged
applications.

If privileged applications would be managed by the same policy
architecture and standard policy workflow, many of the threats would be
in common with [policy
ones](/t3-5/wiki/WP31_Mirror_PolicyManagement)

  ------------------ ------------------ ------------------ ------------------
  Component of       Threats            Severity           Likelihood
  Webinos                                                  

  Runtime            Integrity          High               
  environment        violation of the                      
                     Runtime                               
                     environment from                      
                     privileged                            
                     applications                          
                     (PS-USR-Oxford-116                    
                     )                                     

  restricted APIs    Bypass to break    High               dependent on the
  access control     security control                      architecture/imple
  point              to access to                          mentation
                     restricted APIs                       

  restricted APIs    Integrity:         High               dependent on the
  access policies    deletion,                             architecture/imple
                     modification.                         mentation
                     Change policies to                    
                     gain access to                        
                     unauthorised APIs                     

  Certificates       Authority          High - it can      
                     identification:    allow acceptance   
                     How to allow user  of malicious code  
                     to recognize                          
                     trusted                               
                     certification                         
                     authorities (req                      
                     PS-USR-Oxford-51)                     
  ------------------ ------------------ ------------------ ------------------

Relevant requirements[¶](#Relevant-requirements)
------------------------------------------------

**New Use Case and Requirements: from (5/4/2011 - Conf call)**

  -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------ ------------------
  **ReqID**            **Requirement**                                                                                                                                                                                                                                                                          **Notes**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **Use Case Refs**                                                              **Architecture**
  PS-USR-TUM-\*(124)   webinos SHALL provide privileged apps and services to support the trust based factor for the device manufacturers, for the applications that access wide range of critical information from vehicle data, mobile, settopbox will have to be approved by the manufacturer of the device   Let there be a signed certificate, Identity and Integrity checks for widget based Apps. Protection and Security from hacks at the runtime and accessing sensitive API's. To support these Cryptographic methods, Encryption code SHALL be used. The Apps SHALL be signed and confirmed by the Device Manufacturer when using Sensitive API's and Critical data, there SHALL be a Monitoring system which checks and manages that there is no access to critical data like Engine Diagnose API's and HW data.   \* WOS-UC-TA8-002: Interpreting policies and making access control decisions   Comms, WRE
  -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------ ------------------

Privileges and Access Control Use Case and Requirements identified:[¶](#Privileges-and-Access-Control-Use-Case-and-Requirements-identified)
-------------------------------------------------------------------------------------------------------------------------------------------

**Policy management, authoring and usage features**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf Users                 WOS-UC-TA9            UI, Policy 
  ord-50     SHALL be              -006                  layer      
             provided                                               
             with the                                               
             ability to                                             
             identify                                               
             applicatio                                             
             ns                                                     
             which have                                             
             been                                                   
             granted                                                
             particular                                             
             privileges                                             

  PS-USR-Oxf Users                 WOS-UC-TA9            UI, Policy 
  ord-51     SHALL be              -006                  layer      
             able to                                                
             view a                                                 
             list of                                                
             all their                                              
             webinos                                                
             applicatio                                             
             ns                                                     
             and show                                               
             the                                                    
             authority                                              
             that                                                   
             certified                                              
             the                                                    
             applicatio                                             
             n                                                      
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Runtime Protection**:

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf The                                         WRE, APIs  Phase 1
  ord-116    Webinos                                                
             Runtime                                                
             Environmen                                             
             t                                                      
             SHALL                                                  
             protect                                                
             applicatio                                             
             ns                                                     
             and itself                                             
             from                                                   
             potentiall                                             
             y                                                      
             malicious                                              
             applicatio                                             
             ns                                                     
             and SHALL                                              
             protect                                                
             the device                                             
             from being                                             
             made                                                   
             unusable                                               
             or damaged                                             
             by                                                     
             applicatio                                             
             ns.                                                    
             The                                                    
             Webinos                                                
             Runtime                                                
             Environmen                                             
             t                                                      
             is a                                                   
             naturally                                              
             privileged                                             
             process                                                
             that                                                   
             should be                                              
             strongly                                               
             protected                                              
             from                                                   
             applicatio                                             
             ns.                                                    
             Furthermor                                             
             e,                                                     
             it must                                                
             prevent                                                
             applicatio                                             
             ns                                                     
             from                                                   
             misusing                                               
             device                                                 
             capabiliti                                             
             es                                                     
             when they                                              
             run.                                                   

  PS-DEV-amb The                   None                  WRE        Phase 2
  iesense-08 Webinos                                                
             runtime                                                
             environmen                                             
             t                                                      
             SHALL                                                  
             support                                                
             customised                                             
             encryption                                             
             of any                                                 
             data                                                   
             stream                                                 
             (independe                                             
             nt                                                     
             of its                                                 
             data type                                              
             or format)                                             
             The main                                               
             threat is                                              
             anyone                                                 
             seeking                                                
             the                                                    
             informatio                                             
             n/                                                     
             data                                                   
             transferre                                             
             d                                                      
             in the                                                 
             data                                                   
             stream                                                 

  PS-USR-TSI Webinos                                     Policy     
  -4         shall                                       later, App 
             ensure                                      manifest   
             that only                                              
             trusted                                                
             components                                             
             are                                                    
             downloaded                                             
             ,                                                      
             and that                                               
             applicatio                                             
             ns                                                     
             are                                                    
             guaranteed                                             
             some level                                             
             of                                                     
             execution                                              
             (to                                                    
             prevent                                                
             from                                                   
             denial of                                              
             service)                                               
             Device                                                 
             integrity                                              
             – prevent                                              
             malware                                                
             compromisi                                             
             ng                                                     
             reliabilit                                             
             y +                                                    
             conf. +                                                
             availabili                                             
             ty.                                                    
             QoS. This                                              
             implies                                                
             knowledge                                              
             of the                                                 
             components                                             
             that are                                               
             trusted?                                               

  PS-DWP-ISM The        Moved from WOS-UC-TA6            WRE, APIs  
  B-202      Webinos    LC         -00X:                            
             runtime               Checking                         
             MUST                  access to                        
             ensure                APIs                             
             that an                                                
             applicatio                                             
             n                                                      
             does not                                               
             access                                                 
             device                                                 
             features,                                              
             extensions                                             
             and                                                    
             content                                                
             other than                                             
             those                                                  
             associated                                             
             to it.                                                 
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Policy management, authoring and usage features**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf Webinos    This       \*                    WRE,       
  ord-35     access     implies    WOS-UC-TA9            Policy     
             control    that       -002:                 layer      
             policies   applicatio Interpreti                       
             shall be   n          ng                               
             able to    instances  policies                         
             specify    are        and making                       
             fine-grain identifiab access                           
             ed         le         control                          
             controls              decisions                        
             involving                                              
             the source                                             
             and                                                    
             content of                                             
             an access                                              
             control                                                
             request                                                

  PS-USR-Oxf Webinos    See WAC.   \*                    Policy     
  ord-38     SHALL                 WOS-UC-TA9            layer      
             allow                 -002:                            
             policies              Interpreti                       
             which                 ng                               
             specify               policies                         
             confirmati            and making                       
             on                    access                           
             at runtime            control                          
             by a user             decisions                        
             when an                                                
             access                                                 
             request                                                
             decision                                               
             is                                                     
             required                                               
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Application policies and protection**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf Webinos                                     APIs,      
  ord-115    SHALL                                       Apps, Dev  
             encourage                                   tools      
             good                                                   
             design                                                 
             techniques                                             
             and                                                    
             principles                                             
             so users                                               
             are not                                                
             forced to                                              
             accept                                                 
             unreasonab                                             
             le                                                     
             privacy                                                
             policies                                               
             and access                                             
             control                                                
             policies.                                              
             Webinos                                                
             Applicatio                                             
             ns                                                     
             SHALL be                                               
             designed                                               
             with user                                              
             policy                                                 
             negotiatio                                             
             n                                                      
             and                                                    
             preference                                             
             s                                                      
             in mind.                                               

  PS-USR-Oxf The                   WOS-UC-TA4            WRE        Phase 2
  ord-72     Webinos               -013                             
             System                                                 
             SHALL                                                  
             support                                                
             applicatio                                             
             ns                                                     
             which                                                  
             apply                                                  
             access                                                 
             control                                                
             policies                                               
             to data                                                
             produced                                               
             or owner                                               
             by the                                                 
             applicatio                                             
             n                                                      
             developer.                                             
             These                                                  
             policies                                               
             MAY                                                    
             support                                                
             revocation                                             
             of access                                              
             control                                                
             permission                                             
             s                                                      

  PS-USR-Oxf Webinos               \*                    WRE,       Phase 1
  ord-36     APIs shall            WOS-UC-TA9            Policy     
             provide               -002:                 layer      
             error                 Interpreti                       
             results               ng                               
             when an               policies                         
             access                and making                       
             control               access                           
             request is            control                          
             denied                decisions                        
             Developers                                             
             SHALL be                                               
             aware of                                               
             how to                                                 
             program                                                
             for                                                    
             graceful                                               
             handling                                               
             of access                                              
             control                                                
             requests.                                              

  PS-USR-Oxf Webinos               \*                    WRE        Phase 1
  ord-34     shall                 WOS-UC-TA9                       
             provide               -002:                            
             complete              Interpreti                       
             mediation             ng                               
             of access             policies                         
             requests              and making                       
             by                    access                           
             applicatio            control                          
             ns                    decisions                        
             and                                                    
             enforce                                                
             all                                                    
             policies                                               
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Device discovery, communication and authentication**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-Oxf The level             \*                    Policy     
  ord-5      of                    WOS-UC-TA1            layer,     
             authority             -008:                 Comms      
             associated            Webinos                          
             with a                Federation                       
             client                                                 
             Webinos                                                
             device                                                 
             SHALL be                                               
             establishe                                             
             d                                                      
             before an                                              
             associatio                                             
             n                                                      
             is                                                     
             establishe                                             
             d                                                      
             with a                                                 
             Webinos                                                
             cloud. How                                             
             is                                                     
             authorisat                                             
             ion                                                    
             and access                                             
             control                                                
             defined by                                             
             Webinos?                                               

  PS-USR-Oxf The                   \*                    WRE, UI,   
  ord-17     Webinos               WOS-UC-TA4            Policy     
             Runtime               -014:                            
             Environmen            Continuous                       
             t                     sharing of                       
             SHALL be              a medical                        
             capable of            file                             
             setting               through                          
             dynamic               webinos                          
             access                enabled                          
             control               devices                          
             policies                                               
             for device                                             
             data when                                              
             initiating                                             
             an                                                     
             associatio                                             
             n                                                      
             to another                                             
             Webinos                                                
             Device.                                                
             What                                                   
             format do                                              
             these                                                  
             access                                                 
             rules                                                  
             take?                                                  
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

**Sharing and protecting personal and contextual data**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-DEV-Oxf The                   \*                    WRE, API,  Phase 1
  ord-28     Webinos               WOS-UC-TA7            Policy     
             Runtime               -008:                 layer      
             SHALL                 Create                           
             provide               contexts                         
             access                from a                           
             control               pre-define                       
             for                   d                                
             context               template                         
             structures                                             
             with                                                   
             user-defin                                             
             ed                                                     
             policies                                               
  ---------- ---------- ---------- ---------- ---------- ---------- ----------


