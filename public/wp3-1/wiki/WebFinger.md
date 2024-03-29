WebFinger[¶](#WebFinger)
========================

Introduction[¶](#Introduction)
------------------------------

WebFinger is protocol inspired by the old Name Finger protocol defined
in [RFC 742]. The Name Finger protocol enables the possibility to get
information about a given user. WebFinger is an evolution that instead
of using a direct TCP connection, it uses HTTP, XRD and Web Host
Metadata to provide a descriptor of a single user. The protocol consists
of two parts:

-   One URI schemes to identify user accounts, e.g.
    acct:<joe@example.com>
-   A simple protocol for resolving a user account into an extensible
    descriptor formate as a XRD resource.

The protocol is not an official standard but the work has been driven by
several parties involved Identity Commons, <http://www.idcommons.net/>,
that is a community of groups working on developing the identity and
social layer of the web.

Use Cases[¶](#Use-Cases)
------------------------

-   A user would like to invite a friend to a meeting. The user knows
    the identity of the friend but is not aware about which calender
    services the friend is using. The application resolves the account
    id by sending a WebFinger request to a WebFinger service. The
    WebFinger service responds with a description of the different
    accounts that the friend is known under.

Technical Description[¶](#Technical-Description)
------------------------------------------------

WebFinger provide the means to get a descriptor of different user
accounts. The service leverage on already defined or draft standards:

-   Host-meta [IETF, draft-hammer-hostmeta-13]
-   Extensible Resource Description 1.0 XRD, [OASIS]
-   Well-Known URI [RFC5785]

The well-known URI [RFC5785] specification defines a method to find meta
data about a given host. This is accomplished by reserving a specific
URI that can be used to expose information about a particular host. The
URI reserved in RFC5785 is the URI /.well-known/. This mechanism is then
extended by the Host-meta specification that defines that
/.well-known/host-meta/ URI can be used to get a description about a
particular host. For example issuing an HTTP request to
<http://www.example.com/.well-known/host-meta/> will return a XRD
description defining the capabilities of the
[www.example.com](http://www.example.com) host. By examining XRD file it
is possible to find whether the host provides a WebFinger service and
which URI that should be used to utilise the service. The accout is the
then resolved by the WebFinger service URI and a new XRD document is
provided describing the accounts.

Comparison Analysis[¶](#Comparison-Analysis)
--------------------------------------------

  -------------- -------------- -------------- -------------- --------------
  Technology     Implementation Integrate with Network        More comparing
                                Browser        structure -    critera...
                                               central point  
                                               required       

  WebFinger      <http://webfin Yes - the API  WebFinger      
                 ger.net>       can be used    requires that  
                 <http://code.g via XHR.       there is a     
                 oogle.com/p/we                central        
                 bfinger/>                     WebFinger      
                                               Service        
                                               provider. In   
                                               addition it    
                                               also requires  
                                               that user      
                                               accounts and   
                                               services are   
                                               registered in  
                                               the webfinger  
                                               service.       
  -------------- -------------- -------------- -------------- --------------

Gap Analysis[¶](#Gap-Analysis)
------------------------------

  ----------------------- ----------------------- -----------------------
  Requirements            GAP                     Proposal Solutions

  DA-DEV-SEMC-001         There are no means to   RFC5785 in combination
                          expose availability     with XRD could be a
                                                  method to expose
                                                  capabilities

  DA-DEV-SEMC-008         WebFinger could         
                          potentially be solution 
                          if the device address   
                          is registered as an     
                          account in the          
                          webfinger service.      

  DA-USR-FHG-001          WebFinger could         
                          potentially be solution 
                          if the device are       
                          registered in the       
                          webfinger service       

  DA-USR-FHG-002          The XRD content         
                          contains meta data      
                          about the user          
                          including name.         
                          Normally the profile    
                          contains more than just 
                          the name.               

  DA-DEV-ISMB-006         WebFinger is about      
                          getting detailed        
                          information about       
                          accounts that can be    
                          addressable entities.   
  ----------------------- ----------------------- -----------------------

Conclusion[¶](#Conclusion)
--------------------------

The work with WebFinger is very much driven by implementations and is
not formalized in a traditional meaning, i.e. it is experiment of
enhancing the social layers of the web and make those discoverable. The
service as such is not well deployed yet but it describes an interesting
method for finding which accounts and services that is available for a
certain user. The technology starts to make it possible to discover
which services that are used by different users. One interesting idea is
to explore if all devices are registered in a WebFinger service. That
would require that new API's are defined to add and remove devices from
the WebFinger service. Such API's are currently not defined.

Independently of Webfinger the mechanism defined in: Well-Known URI
[RFC5785], could be interesting for Webinos to explore. It would be a
simple and efficient method if every Webinos device could expose the
capabilities under a Well-known URI and device interested in the
capabilities of a different device could just issue an HTTP request to
the device at the predefined well-known URL and thereby get information
about available resources. That could also be utilized to get
information about local resources by issuing a request using localhost
for example <http://localhost/.well-known/webinos>.

The biggest gap with the technology is that it do not attempt to solve
the issue that a service availability should be exposed and propagated
to parties that subscribes to the information. One potential way forward
would be to combine WebFinger with XMPP or with Pubsubhubbub to
propagate update in the WebFinger service.

