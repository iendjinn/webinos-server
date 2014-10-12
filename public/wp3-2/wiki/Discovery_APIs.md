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

Overlay networking[¶](#Overlay-networking)
------------------------------------------

-   [Overlay networking](.html)

The overlay networking model shields users and web developers from lower
level details for each interconnect technology. Lower level APIs are
exposed by browser extensions and made use of by 3rd party libraries
written in JavaScript. These libraries in turn expose higher level APIs
for discovery, browsing the context and sending messages between
devices. We need to prototype the overlay network model, but the
emphasis will be on the usability of the high level APIs. The low level
APIs will need to be standardized, but that can be done in a later
phase.

Access to APIs on remote devices[¶](#Access-to-APIs-on-remote-devices)
----------------------------------------------------------------------

This wiki page documents brainstorming proposals: [Access to APIs on
remote
devices](/t3-2/wiki/Access_to_APIs_on_remote_devices)

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

