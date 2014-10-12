WP35 Work Allocation and Planning[¶](#WP35-Work-Allocation-and-Planning)
========================================================================

Preparation for the Turin meeting[¶](#Preparation-for-the-Turin-meeting)
------------------------------------------------------------------------

This work package on Security Architecture runs for the same time as 3.1
and has its first deliverable at the end of June (month 10). To make the
most of the 5-6 months before this deadline, we would like to propose
the following quick tasks for all partners with effort in this work
package in preparation for the Turin meeting.

1.  Please could all partners contact Oxford with their plans for time
    allocation for WP3.5 and fill in the table below. As most partners
    only have a few months to spend over the course of this 18 month
    work package, we need estimates for when each partner will be
    contributing effort. If this is not clear yet, please could you make
    it available for the Turin meeting.
2.  Please could all partners prepare a short, 3-slide presentation
    containing:
    -   A summary of your security expertise / particular domain of
        interest.
    -   Their opinions on how you can contribute to the security
        architecture based on the preliminary diagrams provided by Nick
    -   Any key threats you are concerned about
    -   Which parts of 3.1 you are working on

Planned effort and schedule[¶](#Planned-effort-and-schedule)
------------------------------------------------------------

This table shows the length of the work package and highlight the months
in which deliverables a due. Please add an indication of your expected
effort over this period.

Partner

Effort in 2011

Effort in 2012

Total

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

Feb

Mar

Apr

May

Jun

Jul

Aug

Sep

Oct

Nov

Dec

Jan

Feb

Mar

Apr

May

Jun

Jul

Aug

Oxford

9.5 PM

Polito

6.0 PM

SEMCA

4.0 PM

Impleo

3.0 PM

W3C

3.0 PM

TIS

2.0 PM

BMW

2.0 PM

Samsung

2.0 PM

DOCOMO

2.0 PM

Areas of interest[¶](#Areas-of-interest)
----------------------------------------

    Currently just a rough list, please add more!  High priority = to consider for D03.5, Low = to consider for D03.6 if at all.

  ------------------ ------------------ ------------------ ------------------
  Area               Description        Who's interested / Priority
                                        has expertise?     

  Policy             Synchronising      Samsung            High
  distribution       policies between                      
                     devices, passing                      
                     around XACML,                         
                     remotely updatable                    
                     policies                              

  Policy             reference                             High
  architecture       managers, policy                      
                     enforcement/decisi                    
                     on                                    
                     points                                

  Access control in  How the Javascript                    High
  javascript APIs    APIs will reflect                     
                     access control                        
                     requests and                          
                     responses. Error                      
                     handling.                             

  OS-layer           Design of any                         High (if
  architecture       components in the                     necessary)
                     device OS                             

  Roots of trust     How to do          Oxford             High
                     assurance - where                     
                     is trust rooted?                      
                     Attestation,                          
                     storage, trusted                      
                     hardware                              

  Certificates &     Code and policy                       High
  Authorities        signing,                              
                     certificate                           
                     hierarchies                           

  Secure storage     How to provide                        High
                     secure storage of                     
                     app data and user                     
                     data while                            
                     allowing                              
                     communication                         

  Transport level    Ensuring transport                    High
  security           security is                           
                     properly                              
                     implemented and                       
                     used. Standards                       

  Authentication and Methods and        Samsung            High
  authorisation      interaction with                      
                     device features                       

  Developer security How to ensure that                    High
  model              DRM/stick-policy/u                    
                     sage                                  
                     control systems                       
                     are possible in                       
                     webinos (if not                       
                     actually                              
                     implemented                           

  Secure execution   Providing process                     High
  environments       isolation /                           
                     separation.                           
                     TrustZone, Android                    
                     model, etc.                           

  Web application    Making sure that                      Low?
  threats            recommendations by                    
                     OWASP are                             
                     followed,                             
                     implementing novel                    
                     web security                          
                     features                              

  Semantic policies  APIs for similar                      Low
  on services        services (e.g.                        
                     location based                        
                     services from                         
                     device OR cloud)                      
                     should be covered                     
                     by the same                           
                     policies                              

  Developer support  Tools for                             Low
                     authoring                             
                     policies, testing                     
                     policies, making                      
                     common user                           
                     policies available                    
                     for testing                           

  Vulnerability      Establishing a                        Low
  management         process for                           
                     dealing with                          
                     vulnerabilities                       
                     and patching in                       
                     webinos and                           
                     specifying                            
                     guidelines                            

  Security           Evaluating the                        Low
  evaluation         security of                           
                     webinos                               
                     implementations                       
                     and instances                         

  User privacy       GUIs and features                     Low? Part of WP5?
  controls           for controlling                       
                     disclosure and                        
                     tracking. "Do not                     
                     track" features?                      
  ------------------ ------------------ ------------------ ------------------

Communications in Webinos[¶](#Communications-in-Webinos)
--------------------------------------------------------

Here are a few example communication flows in webinos which highlight
issues regarding policies - e.g. the need to make decisions over
distributed devices and synchronise across multiple devices.

![](communications-webinos.png)

