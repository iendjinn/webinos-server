'Privilege Apps and Services Usecases Requirements Sequence Diagram'[¶](#Privilege-Apps-and-Services-Usecases-Requirements-Sequence-Diagram)
============================================================================================================================================

Conf Call (18/4/11):[¶](#Conf-Call-18411)
-----------------------------------------

### Action Points:[¶](#Action-Points)

1.) Result from "Privileged Apps and Services" was that we will be
merging Privileged Apps and Services with Policy Management.\
2.) It will be a Sub Task now in the Policy Management.\
3.) Considering Policy management from the perspective of an User,
Operator or Device manufacturer. We need to consider how authorities and
certificate hierarchies will work.\
4.) Bring in some data from Content Adaption and Content Awareness,
Extension Handling, Cross Domain Platforms with Privileged Apps and
Services.

### Some Issues to look into:[¶](#Some-Issues-to-look-into)

• Where do webinos installers, policy managers and device settings apps
sit in the webinos architecture? Do they need special consideration?\
• How do proprietary applications (E.g. those installed by the device
manufacturer) get installed and how do users know their provenance (e.g.
why they were installed, who trusts them)\
• How are application certificates, developer certificates, and general
root certificates handled?

Conf Call Details (5/4/2011):[¶](#Conf-Call-Details-542011)
-----------------------------------------------------------

Intial Background work done on Java Script, Android, BONDI, W3C.

</wp3-1/wiki/%27Privilege_Apps_and_Services_related_to_Browser_and_Policies%27>

### Action Points:[¶](#Action-Points)

**TUM, BMW**: Describe and Create Use cases, Requirements for engine
diagnose API.\
**Polito** with **Oxford**: To follow up and produce sequence diagrams
in connection to Policy Management Data.

### Issues Addressed:[¶](#Issues-Addressed)

-   Privilege apps and services to Look into issues like Trust boundary,
    Identity and Integrity checks, Engine and HW management and some
    critical info of the Engine
-   Access sensitive API's of vehicle, mobile, setup box
-   How to protect Runtime Enviroment from Hacks?
-   The Applications to be signed and confirmed by the Device
    Manufacturer when using Sensitive API's and Critical data
-   To Monitor Engine data, mobile and setup box
-   To use Cryptographic methods, Encryption code for Security purposes

TUM, BMW: Describe Use case for engine diagnose API and\
Polito: To follow up and work on how to bring it on with Policy
management this and will provide a sequense diagram.

**New Use Case and Requirements: from (5/4/2011 - Conf call)**

  ---------- ---------- ---------- ---------- ---------- ---------- ----------
  **ReqID**  **Requirem **Notes**  **Use Case **Review** **Architec **Priority
             ent**                 Refs**                ture**     **

  PS-USR-TUM webinos    Let there  \*                    Comms, WRE 
  -\*(124)   SHALL      be a       WOS-UC-TA8                       
             provide    signed     -002:                            
             privileged certificat Interpreti                       
             apps and   e,         ng                               
             services   Identity   policies                         
             to support and        and making                       
             the trust  Integrity  access                           
             based      checks for control                          
             factor for widget     decisions                        
             the device based                                       
             manufactur Apps.                                       
             ers,       Protection                                  
             for the    and                                         
             applicatio Security                                    
             ns         from hacks                                  
             that       at the                                      
             access     runtime                                     
             wide range and                                         
             of         accessing                                   
             critical   sensitive                                   
             informatio API's. To                                   
             n          support                                     
             from       these                                       
             vehicle    Cryptograp                                  
             data,      hic                                         
             mobile,    methods,                                    
             setupbox   Encryption                                  
             will have  code SHALL                                  
             to be      be used.                                    
             approved   The Apps                                    
             by the     SHALL be                                    
             manufactur signed and                                  
             er         confirmed                                   
             of the     by the                                      
             device     Device                                      
                        Manufactur                                  
                        er                                          
                        when using                                  
                        Sensitive                                   
                        API's and                                   
                        Critical                                    
                        data,                                       
                        there                                       
                        SHALL be a                                  
                        Monitoring                                  
                        system                                      
                        which                                       
                        checks and                                  
                        manages                                     
                        that there                                  
                        is no                                       
                        access to                                   
                        critical                                    
                        data like                                   
                        Engine                                      
                        Diagnose                                    
                        API's and                                   
                        HW data.                                    
  ---------- ---------- ---------- ---------- ---------- ---------- ----------

### General Idea behind this:[¶](#General-Idea-behind-this)

**Trip logger**: We have an application which logs vehicle data for the
trip. The User chooses which kind of vehicle properties he is willing to
record. In General the vehicle API will provide access to wide range
vehicle data (speed, fuel consumption, odometer, Geolocation).

**Note**:

-   The geolocation could possibly be also provided by the vehicle API,
    but we have already the Geolocation API.
-   Applications using the vehicle API have to be approved by the
    manufacturer of the vehicle/Device. If the application is not
    approved, then the application cannot access the vehicle API.

### Related User Stories[¶](#Related-User-Stories)

WOS-US-7.1: Designing Policy-aware webinos Applications\
WOS-US-7.4: Privacy Controls and Analytics for Corporations and Small
Businesses

### Related Use Cases[¶](#Related-Use-Cases)

• WOS-UC-TA8-002: Interpreting policies and making access control
decisions – Found in All\
• WOS-UC-TA8-003: Enforcing multiple policies on multiple devices –
Found in All\
• WOS-UC-TA8-007: Policy authoring tools – Found in All\
• PS-USR-Oxford-50 (Found in Requirements): WOS-UC-TA9-006 (on wiki,
Requirements Doc, But missing in Use Case Doc), (Important Use Case)\
• WOS-UC-TA9-006 (on wiki, Requirements Doc, But missing in Use Case
Doc),\
• WOS-UC-TA4-013 – Found in All\
• WOS-UC-TA6-00X: Checking access to APIs – Refers to Content Adaption –
Found in All\
• WOS-UC-TA9-002: Interpreting policies and making access control
decisions (on wiki, Requirements Doc, But missing in Use Case Doc)\
• WOS-UC-TA1-008: Webinos Federation - Found in All\
• WOS-UC-TA4-014: Continuous sharing of a medical file through webinos
enabled devices – Found in All\
• WOS-UC-TA7-008: Create contexts from a pre-defined template – Found in
All

-   Found in All- On the wiki, Requirements Doc and Use Cases Doc

**Note:** PS-USR-Oxford-50: WOS-UC-TA9-006 found in
D2.2\_Requirements\_v1.0.3 (requirements document) but couldn't find
WOS-UC-TA9-006 in D21\_Scenarios\_and\_use\_cases\_v1 (Use Cases
document) for Privileges.

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

Sequence diagrams[¶](#Sequence-diagrams)
----------------------------------------

### WOS-UC-TA8-002: Interpreting policies and making access control decisions[¶](#WOS-UC-TA8-002-Interpreting-policies-and-making-access-control-decisions)

<div class="uml">title usecase WOS-UV-TA8-002

actor "User" as usr

participant "photo-sharing\napplication" as app
participant "PEP" as pep
participant "PDP" as pdp
participant "shared\nrepository" as rep

autonumber
note over usr
	this entity includes
	both the real user and
	the webinos front-end
end note

app -> pep : photos upload attempt
pep -> pdp : policies check

alt normal flow
	note over pep, pdp
		policies allow photo upload
	end note
	pdp -> pep : operation granted
	pep -> app : action allowed
	app -> rep : photos upload
else alternate flow
	autonumber 3
	note over pep, pdp
		policies do not allow photo upload
	end note
	pdp -> pep : operation denied
	pep -> app : action not allowed
	app -> usr : upload aborted
	note over usr, app
		the access control
		decision is logged
	end note
else alternate flow
	autonumber 3
	note over pep, pdp
		policies require user confirm
		before allowing photo upload
	end note
	pdp -> pep : confirm requested
	pep -> usr : ask for confirm
	usr -> pep : operation granted
	pep -> app : action allowed
	app -> rep : photos upload
end</div>

### WOS-UC-TA8-003: Enforcing multiple policies on multiple devices (normal flow)[¶](#WOS-UC-TA8-003-Enforcing-multiple-policies-on-multiple-devices-normal-flow)

<div class="uml">title usecase WOS-UV-TA8-003\nnormal flow

actor "User" as usr
participant "mobile privacy\ndashboard" as mobile_pd
participant "mobile discovery\nservice" as mobile_sd
participant "mobile\nPEP" as mobile_pep
participant "mobile\nPDP" as mobile_pdp
participant "cloud\nPDPC" as cloud_pdpc
participant "in-car\nPDP" as car_pdp
participant "in-car\nPEP" as car_pep
participant "in-car discovery\nservice" as car_sd

autonumber

usr -> mobile_pd : set hidden mode
mobile_pd -> mobile_pep : privacy setting modification attempt
mobile_pep -> mobile_pdp : policies check
mobile_pdp -> mobile_pep : operation granted
mobile_pep -> mobile_pd : action allowed
mobile_pd -> mobile_pdp : new privacy settings
note over mobile_pdp, cloud_pdpc
	through mobile PDPC
	and mobile W-Agent
end note
mobile_pdp -> cloud_pdpc : policy update
note over cloud_pdpc, car_pdp
	through in-car W-Agent
	and in-car PDPC
end note
cloud_pdpc -> car_pdp : policy update

== mobile discovery ==

note over mobile_pdp
	assumption: a hello message arrives to the discovery service
	alternative assumption: the PEP may recognize a hello message and filter
	it accordingly to the policy, avoiding to send it to the discovery service
end note

note over mobile_sd
	a nearby device tries
	to sense the mobile
end note

mobile_sd -> mobile_pep : discovery attempt
mobile_pep -> mobile_pdp : policies check
mobile_pdp -> mobile_pep : operation denied
mobile_pep -> mobile_sd : action not allowed</div>

== in-car system discovery==

note over car_sd
	a nearby device tries to
	sense the in-car system
end note

car_sd -> car_pep : discovery attempt
car_pep -> car_pdp : policies check
car_pdp -> car_pep : operation denied
car_pep -> car_sd : action not allowed</div>

### WOS-UC-TA8-007: Policy authoring tools[¶](#WOS-UC-TA8-007-Policy-authoring-tools)

<div class="uml">actor "developer" as dev
participant "policy tool" as tool
participant "PEP" as pep
participant "PDP" as pdp

autonumber

note over tool
	assumption: policies are tested into the
	device and not into a policy tool environment
end note

dev -> tool : set up company policies
tool -> pep : policies modification attempt

pep -> pdp : policies check
pdp -> pep : operation granted
pep -> tool : action allowed
tool -> pdp : new policies set up

== test ==

dev -> tool : company data sharing test
tool -> pep : share company data
pep -> pdp : policies check
pdp -> pep : operation denied
pep -> tool : action not allowed
tool -> dev : company data sharing not allowed

dev -> tool : personal data sharing test
tool -> pep : share personal data
pep -> pdp : policies check

alt normal flow
	pdp -> pep : operation granted
	pep -> tool : action allowed
	tool -> dev : personal data sharing allowed
	note over dev, tool
		Test succesfull. The developer saves
		the policy and signs it to mark it
		as a trusted company policy
	end note
else alternate flow
	autonumber 16
	pdp -> pep : operation denied
	pep -> tool : action not allowed
	tool -> dev : personal data sharing not allowed
	note over dev, tool
		Test unsuccesfull. The developer 
		modifies policies
	end note
end</div>

