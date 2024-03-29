ZeroConfig[¶](#ZeroConfig)
==========================

Main purpose of ZeroConfig is to create usable IP network in absence of
DHCP and DNS servers. Its objective is to get IP network ready for user
without any configuration from user side.

It is set of technologies to address following issues:

1.  Address configuration (assigned address using DHCP or link local
    address)
2.  Resolving host name to IP Address using Multicast DNS
3.  Description of services supported on device and way to communicate
    with the device, using DNS Service Discovery

It is implemented by Apple's Rendezvous/Bonjour and Open source Avahi.
UPnP is based on similar idea and add some more steps to define protocol
for particular device to make it ready after discovery.

In this document we will analyse

1.  Use Cases
2.  Technical Description
3.  Gap Analysis
4.  ZeroConf vs UPnP
5.  Conclusion

Use Cases[¶](#Use-Cases)
------------------------

Similar use cases as defined for UPnP, [UPnP\_Information](.html)

Technical Description[¶](#Technical-Description)
------------------------------------------------

Major steps in ZeroConf includes: resolving IP address -\> Name
resolution -\> Find entities in network to speak to. It is done using
Multicast DNS and DNS Service Discovery. It does not define any new
protocol but instead enables communication over TCP using existing
protocols.

### Addressing[¶](#Addressing)

Devices assign link local address in case it fails to get DHCP assigned
IP address. Devices can assign self address in range of 169.254.0.0/16
but this can lead to conflict with other connected devices. It needs
resolution of IP address. It also needs to resolve IP address to name
resolution which is resolved both by Multicast DNS, which sends message
similar to DNS queries with name getting resolved for a particular IP
address. If no response is received then address is assigned to device.
Both request and response are handled using DNS query messages over UDP
on multicast address(224.0.0.251)over port 5353. DNS query mechanism
supports both one shot queries and continuous ongoing multicast queries.

mDNS uses local namespace to address the hosts in local area network.
Any multicast query ending with .local. is sent on multicast address. To
support name resolution each device needs to have DNS record stored
locally.

In comparison to UPnP which sends ARP probe to resolve IP address, mDNS
uses simplified DNS query. Both are standardised processes, but mDNS at
the moment seems to have more wider implementation than ARP probe
resolution and the other advantage is IP address to name resolution.
There are multiple IP address implementations available, for more
description please see
<http://en.wikipedia.org/wiki/Zero_configuration_networking#Link-local_IPv4_addresses>

### Service Discovery - DNS-SD (Service Discovery)[¶](#Service-Discovery-DNS-SD-Service-Discovery)

After address and name are resolved, it find services available in the
network. It does not try to find about different device but instead
services they provide. To find information about services it uses
DNS-Service Discovery (DNS-SD).

DNS service discovery uses DNS Query and is compatible with Multicast
DNS. It makes use of following 3 commands to browse, find address and
named instances.

-   Register (Services)
-   Browse (Named instances)
-   Resolve (Address and ports)

It fetches following information at end of DNS service discovery:

-   Pointer record - PTR : mapping address to name (e.g.
    operator.\_ip.\_udp.local, operator is user visible name which is
    unique no other node can have same name, \_ip.udp is service type,
    and local is domain)
-   Service locator - SRV record (hostname + port) (e.g. operator.local
    port 6313). Specifies service location for fetching information
    about the protocol. Its format is also used in XMPP/SIP messages.
-   Text Record - TXT (e.g. pdf:application/postscript).

Service types are recognized by what protocol it uses. List of protocol
names are located at [Service
Type](http://dns-sd.org/serviceTypes.html), it has information about
service types. Host offering publishes instances, service type, domain
name and config parameters. See above link for examples of the format.

Depending on the messages, they are sent as unicast or multicast query.
To see status of device, a query is done per hour. New services announce
about its presence. It resolve address before sending packet, if it
fails to find devices, it updates other devices too about the service
unavailability.

In wide area network if domain is specified such as dns-sd.org. It will
fetch the services available in this domain. This could solve the
problem of service discovery outside local domain but limitation of
having domain registered for each user is not practical.

Comparison Analysis[¶](#Comparison-Analysis)
--------------------------------------------

  ------------ ---------------- ----------------------------------------------------------------------------------------------------------- -------------------
  Technology   Implementation   Integrate with Browser                                                                                      Network Structure
  ZeroConf     Bonjour, Avahi   Yes in all major browsers, <http://bonjourfoxy.net/>, <http://developer.apple.com/opensource/>, avahi.org   Peer to Peer
  ------------ ---------------- ----------------------------------------------------------------------------------------------------------- -------------------

Gap Analysis[¶](#Gap-Analysis)
------------------------------

The functionality provided by both UPnP and ZeroConf is similar but
underlying approach is different. UPnP defines for each device type
separate protocol. Gap analysis done for UPnP apply here
too.[UPnP\_Information](.html)

ZeroConf vs UPnP[¶](#ZeroConf-vs-UPnP)
--------------------------------------

  -------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------
  **Feature**          **ZeroConf**                                                                                                                                                                                                                                                            **UPnP**
  **Protocol**         Uses standard DNS protocol in multicast mode for address resolution and service discovery                                                                                                                                                                               Uses multiple protocols, ARP Probe for address resolution, SSDP for service discovery, SOAP for control message and GENA for event handling
  **Driver Support**   After finding device and way to communicate with device, ZeroConf role is over. Which is correct for service discovery, it does not define application layer protocol or API format to communicate with device. It is upto application layer protocols to handle this   UPnP defines a new protocols in means of schema for each device specific type. This way it solves the API and communication handling part with the device
  -------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------

Conclusion[¶](#Conclusion)
--------------------------

ZeroConfig appears to be more relevant for webinos for IP address
resolution and service discovery. But getting API to communicate with
the device is not available and left for application layer, which is
usually lacking. Extending is not possible in ZeroConfig as it uses
standard DNS format.

Personal experience with Bonjour and UPnP: After installing Bonjour it
find devices but it will not have driver interface to talk with the
devices. UPnP in contrast find devices but most device do not provide
much information about services they support i.e. API part of UPnP is
usually missing.

