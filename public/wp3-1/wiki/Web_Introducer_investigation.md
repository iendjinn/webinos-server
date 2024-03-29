Web Introducer investigation[¶](#Web-Introducer-investigation)
==============================================================

Introduction[¶](#Introduction)
------------------------------

In this document, we will look at the state-of-the-art technologies [Web
Introducer](http://web-send.org/) for service discovery.

The Web Introducer concept was initiated by Google. SEMC and Mozilla is
cooperating with Google on the concept. The goal is to make the concept
a W3C recommendation specification. Web Introducer enables web
applications to discover a user's personal resources, no matter where
they are hosted or produced, and gain permission to interact with them
via a one-click user interaction.

Web Introducer is a further development of "Powerbox" that was presented
by Google to the W3C DAP WG in January 2010.

As the starting point, we define typical use cases. Based on the use
cases, we will cover the following areas:

1.  Description of the Candidate Solution, i.e. the Web Introducer
2.  Gap Analysis between the existing solution with Discovery
    requirements of WebinOS
3.  Proposals to fill the Gap found in (3)

The output of this document shall contribute to architecture design.

Note that the [Web Intents](http://webintents.appspot.com/) has also
been proposed as a state-of-the-art technology for service discovery.
However, the author, also from Google, of Web Intents has, due to the
overlaps with the Web Introducer, decided to focus his efforts on the
Web Introducer project rather than supporting Web Intents further. See
[So-what-is-happening-with-web-intents](http://paul.kinlan.me/so-what-is-happening-with-web-intents).

Here is a [presenttion of the Web Introducer
concept](http://79.125.104.127/redmine/attachments/511/Web_Introducer_presentation.pdf)

Requirements[¶](#Requirements)
------------------------------

See the section Gap Analysis & Proposals

Work Scenarios - Use cases[¶](#Work-Scenarios-Use-cases)
--------------------------------------------------------

-   A web application needs to access user’s media resources, images,
    audio clips or video clips. The user selects from where the media
    resources should be fetched, from the user’s account on a media
    sharing site, from the device’s internal gallery or be dynamically
    created with the device camera or microphone, and approves that the
    web application can access the selected media resources. For an
    example see: <http://semccustomer.appspot.com/>

<!-- -->

-   A user visits a news site and wants to share a link to an
    interesting article at a social web service. The user selects, from
    a list of social web services pre-registered by the user, the social
    web service to be used for sharing the link. For an example see:
    <http://customer.web-send.org/>

<!-- -->

-   A medical web application needs access to data from a medical
    sensor, e.g. a blood glucose meter. The user approves that the web
    application can access a locally connected and pre-registered blood
    glucose meter.

Technical Details[¶](#Technical-Details)
----------------------------------------

### Background[¶](#Background)

Today's users have a great variety of personal resources beyond the
files stored on their local computing device. Web sites maintain user
collections of photos, email, contact information, documents, multimedia
and other types of content. In addition to static content, Web sites
also offer interactive resources such as discussion forums and event
planning. The level of interactivity and personal data on the Web
continues to increase. Today's computing devices are also typically
equipped with many sensors, such as a camera, microphone and GPS. These
sensors enable quick creation of new resources.

Accordingly, resources could be hosted at many places, in the user’s
current device, in another device connected through the network, at a
network server, or in a locally connected device. In such a resource
rich environment, Web content might want to support interaction with
other resources without advance knowledge of where these resources are
hosted or how they are created.

### Mechanism Overview[¶](#Mechanism-Overview)

The [Web Introducer](http://web-send.org/) enables web applications to
discover a user's personal *Resources*, no matter where they are hosted
or how they are created, and gain permission to interact with them via a
one-click user interaction. It is a user directed discovery/introduction
mechanism to create a communication relation between a web application
and a provider of a user resources, e.g. an image gallery, a social
networking site account or the local device camera provider.

The concept is based on the following actors:

-   Customer: A web page that needs access to the user's private
    resource. For example, it might be a social networking service that
    provides the option for the user to upload a profile image.

<!-- -->

-   Provider: Web content that provides access to user's Resources. For
    example, it might be a media sharing site such as Picasa, an
    in-device image gallery or the in-device camera provider.

<!-- -->

-   Resource: Resource, at web site or in the computing device, provided
    by a Provider. Resources in the Web Introducer context are *data*,
    i.e. not HW. So for a device camera the resource is not the camera
    itself but the resources are the images and the video clips/streams
    provided by the camera. Other resources are for example media files
    at a network server, a bookmark, a message or sensor data.

<!-- -->

-   Introducer: The part of a web user-agent (browser or widget engine)
    that intermediates an introduction to connect a Customer to a user
    selected Provider.

In order to make Resources available for Customers Providers must be
registered within the Introducer. A media sharing site could for example
offer the user to register his/her account so that the media will be
available for other sites requesting media. A Provider could also be
pre-registered. This applies for example to a local in-device media
gallery or the in-device camera provider. The data types supported by
the Provider and the URLs to access the data is saved by the Introducer.

When a Customer web page wants to access a Resource it performs an
"introduction", in which it declares the requested data type(s). The
user then selects a Provider among the registered Providers supporting
thee requested data type(s) and a Provider web page is loaded into the
browser. The "introduction" has been performed.

After a Customer web page has been introduced to a Provider web page
then the pages communicate through HTML5 Web Messaging postMessage
events. This allows documents to communicate with each other regardless
of their source domain through message strings. The format/APIs etc of
communication is not defined by Web Introducer so this must be defined
by other API/protocol specifications. An example of such a protocol and
API is the [Bookmark Introducer](http://web-send.org/bookmark/).

Note that a Customer and a Provider can be anonymous to each other.

### Sequence Diagrams[¶](#Sequence-Diagrams)

In the sequence diagrams below the pre-requisite is that the web browser
is "Web Introducer-enabled", either through a native implementation
(preferred) or through a downloable JavaScript library.

Prior to allowing *Customers*, i.e. web applications, access to content
*Providers* users must register selected *Providers*:

1.  User visits page that offers *Provider* registration
2.  User selects to register one or more *Providers* of required data
    types and clicks on the link to register the *Provider*
3.  The *Provider* Registrant may perform a lower level of
    device/service discovery, e.g. XMPP, UPnP, Bluetooth discovery etc,
    based on the type of *Resource* (or Service) supported by the
    *Provider*.
4.  The *Provider* Registrant downloads a web page that contains a call
    to the *introducer.register* method of the Web Introducer API to
    store meta data, e.g. id, description, list of supported data types
    and URL to access the data, about the registered *Providers*

Provider registration sequence diagram below:

![](Web_Introducer_Provider_registration_scenario.png)

The sequence when a *Customer*, i.e. Web Application, gets access to
*Provider* resources is:

1.  User accesses a Web Applicaion, *Customer*, that needs access to a
    certain type of *Resource*(Service)
2.  The *Customer* web page contains a call to the
    *introducer.introduce* method of the Web Introducer API to request
    access to a user selected *Resource Provider*
3.  The browser presents a menu of registered *Providers* supporting the
    requested data type(s) and user selects a *Provider*
4.  The browser downloads a web page from the *Provider* and opens the
    page in an iframe or a new window allowing the user to interact with
    the *Provider*
5.  The *Provider* web page contains a call to the *introducer.welcome*
    method of the Web Introducer API to establish an HTML Web Messaging
    communication relation between the *Customer* and the *Provider*
6.  Optional lower level device/service discovery, e.g. XMPP, UPnP,
    Bluetooth discovery, and communication needed to access the physical
    device and/or the requested *Resource*/service is performed by the
    *Provider*
7.  Communication between the *Customer* and the *Provider* through
    HTML5 Web Messaging, postMessage events takes place

Sequence diagram below:

![](Web_Introducer_Customer_Provider_interaction_scenario.png)

### Example Use cases in more detail[¶](#Example-Use-cases-in-more-detail)

Looking at the use cases mentioned earlier in more detail:

Access to user's media resource, e.g. an image:

A Web Application needs an image selected by the user and states “I need
a resource of type “image” ”, through a Web Introducer API. The user has
registered two providers:

-   A image sharing web site provider
-   A local device camera provider

If the user selects the image sharing web site provider this provider
allows the user to login to the image sharing web site in order to
select an image, which is then provided to the requesting web
application.

If the user selects the camera provider this provider activates the
local camera and allows the user to take a picture that is provided to
the requesting web application.

My simple prototype illustrates this use case: [Web Introducer Image
sharing example](http://semccustomer.appspot.com/). Run in Chrome or
Firefox 3.6. (Firefox 4 does not by some strange reason work). If you
want to test camera access run in Android 2.2 or later and install the
local web server that provides access to the local camera.

Share link

A web application wants to give the user the possibility to share some
content on the site, e.g. an interesting article, with a social web
service that is selected by the user. The user has registered providers
for the social web services, e.g. Twitter, Facebook and Buzz, the user
wants to allowing sharing with. After the user has selected the social
web services this provider allows the user to login to the service and
share the link to the article. The following example illustrates this
use case: [Web Introducer share link
example](http://customer.web-send.org/).

Access to medical sensor

A Web Application for diabetics needs access to blood glucose values
from the user’s blood glucose meter and states “I need a resource of
type “blood glucose meter” ”, through a Web Introducer API. The user has
registered two providers:

-   A small and portable Bluetooth Low Energy enabled blood glucose
    meter provider
-   An advanced internet-connected high precision home blood glucose
    meter provider

If the user selects the portable Bluetooth Low Energy enabled blood
glucose meter the provider performs BT discovery and communication and
the measured values are provided to the requesting web application.

If the user selects the internet-connected high precision home blood
glucose meter the provider performs discovery and communication by some
method and the measured values are provided to the requesting web
application.

Accordingly:

-   The requesting web application does not need to be aware of any low
    level discovery/communication details. It just states the type of
    resource/service it needs access to.
-   Each resource/service provider implements the low level discovery
    and communication that is needed for the resource/service it
    provides.
-   When a web application needs access to a resource/service the user
    selects the provider to use from the list of providers the user has
    registered.

### Standardization[¶](#Standardization)

The latest version of the Web Introducer predecessor Powerbox was
submitted to W3C DAP WG on May 26 2010. See[Powerbox submission
20100526](http://lists.w3.org/Archives/Public/public-device-apis/2010May/0133.html).

Web Introducer has not yet been submitted to W3C and it is currently not
clear if the proposal will be driven within the DAP WG or in any other
WG.

### Implementation[¶](#Implementation)

It is possible to implement the needed functionality without requiring
modifications to the web browser, i.e. the functionality can be
implemented as a JavaScript library. See
<http://code.google.com/p/webintroducer/>. However, a native browser
implementation will provide better usability and security and there are
experiments with a native Chrome and possibly also Firefox
implementation.

### Issues[¶](#Issues)

-   Not defined how resource data types should be globally unique. See
    <http://web-send.org/introducer/#coordinate>.
-   Associated with each data type the protocol /API for communication
    between Customer and Provider must be defined. Google has specified
    the first data type and protocol for sharing bookmarks: [Bookmark
    Introducer specification](http://web-send.org/bookmark/).
-   Usability is an issue. It could be difficult for users to understand
    the model. Could the UI be improved, for example by using tabs for
    the different providers? Could provider registration be automated?

Comparison analysis on the candidate solution[¶](#Comparison-analysis-on-the-candidate-solution)
------------------------------------------------------------------------------------------------

  -------------- -------------- -------------- -------------- --------------
  **Technology** **Implementati **Integrate    **Network      **More
                 ons**          with browser** structure -    comparing
                                               central point  criteria...**
                                               required?**    

  [Web           Currently      Yes, browser   Probably, the  
  Introducer](ht there is an    just inludes a Web Introducer 
  tp://web-send. experimental   JS library.    currently      
  org/)          pure [HTML+JS  However, for   maintains the  
                 implementation better         site           
                 ](http://code. usability and  <https://webin 
                 google.com/p/w security a     troducer.net/> 
                 ebintroducer/) native or      that maintains 
                 of the Web     plug-in        user’s         
                 Introducer API browser        registered     
                 that works in  implementation Providers.     
                 currently      is probably                   
                 deployed       needed.                       
                 modern                                       
                 browsers.                                    
                 Experimental                                 
                 applications                                 
                 are:\                                        
                 - [Share                                     
                 Link](http://c                               
                 ustomer.web-se                               
                 nd.org/)\                                    
                 - [Get                                       
                 image](http://                               
                 semccustomer.a                               
                 ppspot.com/)                                 
  -------------- -------------- -------------- -------------- --------------

Gap Analysis & Proposals[¶](#Gap-Analysis-38-Proposals)
-------------------------------------------------------

In the table below on Discovery & Addressing requirements relevant for
Service discovery are analyzed.

  ----------------------- ----------------------- -----------------------
  **Requirement**         **Gap**                 **Proposed Solution**

  DA-DEV-SEMC-001\        Web Introducer provides Extend the
  Webinos SHALL provide   means for Services to   functionality that
  means for a Service to  expose its              maintains user’s
  Expose its availability capabilities, i.e.      registered Providers
  and capabilities on a   supported data types.   with means to detect
  Webinos Network.        However, the Web        availability
                          Introducer is agnostic  
                          to the underlaying      
                          bearers used to access  
                          local or remote         
                          resources so there is   
                          currently no mechanism  
                          in the Introducer       
                          itself to expose the    
                          availability of a       
                          Service                 

  DA-DEV-SEMC-002\        Should this requirement 
  Webinos SHALL provide   be fulfilled by the     
  the means to discover   discovery mechanism or  
  new services advertised is this an application  
  on a Webinos Network.   feature?                

  DA-DEV-SEMC-003\        Probably no gaps.       
  Upon detection of a new Providers can provide   
  service Webinos SHALL   links to software       
  be able to install new  resources or            
  software resources or   application resources   
  application resources   needed to interwork     
  needed to interwork     with the new service    
  with the new service                            
  based on the Service                            
  Description.                                    

  DA-DEV-SEMC-004\        See DA-DEV-SEMC-001     
  Webinos SHALL provide                           
  means for an                                    
  Application to detect                           
  the availability of a                           
  service.                                        

  DA-DEV-SEMC-005\        Only Service discovery  
  Webinos SHALL provide   is supported            
  means for an                                    
  Application to find                             
  devices and services                            
  that are available on a                         
  Webinos network, based                          
  on the Device and                               
  Service Description.                            

  DA-DEV-SEMC-006\        Only Service discovery  Extend the Provider
  Webinos SHALL provide   is supported. Currently meta data and the
  means for an            proximity status is not Introduction request
  Application to find     supported               with proximity data
  devices and services in                         
  close proximity of the                          
  device                                          

  DA-DEV-SEMC-007\        Only Service discovery  Extend the Provider
  Webinos SHALL provide   is supported. Currently meta data and the
  means for an            physical location is    Introduction request
  Application to find     not a search criteria.  with physical location
  devices and services                            data
  based on the physical                           
  location of the device.                         

  DA-DEV-ISMB-001\        This would work. It is  
  Webinos SHALL provide   a question on how       
  means for applications  Providers are made      
  to discover and address available for           
  features and services   registration.           
  available on devices                            
  owned by the user even                          
  if such devices are not                         
  directly connected to                           
  the device on which the                         
  application is running.                         

  DA-USR-ISMB/FHG-005\    This would work. It is  
  Webinos SHALL provide   a question on how       
  means for applications  Providers are made      
  to discover and address available for           
  applications and        registration.           
  services offered by                             
  other users.                                    
  ----------------------- ----------------------- -----------------------


