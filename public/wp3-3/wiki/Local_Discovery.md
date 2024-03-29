Discovery[¶](#Discovery)
========================

1 Introduction[¶](#1-Introduction)
----------------------------------

Local discovery, as a component of PZP, is to discover local devices,
services and applications and information about them. In terms of device
it has two levels of meaning:\
*Habib: local discovery is about finding other pzp, finding sever and
application is handled by service discovery.*

1\) locally attached devices. Local means local host. E.g., a USB or
built-in camera, a USB or built-in storage, a radio frequency keyboard,
a USB Wi-Fi dangle or a built-in Wi-Fi network interface.\
*habib: locally devices part is handled by pzp, the example needs some
discussion.,\
2) locally networked peer devices. Local means local network. E.g., a
Bluetooth peer device, a Wi-Fi access point, a printer in the same
Ethernet, or another computer within the same LAN.\
\_habib: local discovery we refer to is local devices I.e. USB, bt, able
to crate a network probably like wifi direct and ability to use zero of
and service discovery*

Level 1 is dealt with by the underlying native OS of the host where the
PZP resides. Usually the devices are not an independent network node but
a local device with the host where the PZ\_ resides. The device falls
into some device category of local system and has a unique ID in that
category.

Level 2 is dealt with by the networking module with the host where the
PZP resides. The detection is also taken care of by the native system,
but the detected devices are network nodes with local network addresses.
The local discovery component is responsible for getting the addressing
information and other information exposed by the networked peer
devices.\
*habib: this is th local discovery but missing upnp and zeroconf
mechanism.*

The discovery component should be able to deal with both levels of
devices. E.g., a webinos enabled mobile computer with a USB Wi-Fi dangle
should be able to handle the USB dangle, as well as to detect other
networked Wi-Fi nodes by using the Wi-Fi module. This document specifies
the level 2 discovery and leaves the level 1 to webinos API
specification.

In terms of service the discovery component should be able to detect any
networked service in level 2. Based on that, it should be able to find
any exposed web services and applications with the detected devices.
E.g., a local network printer may expose its printing service and the
discovery component should be able to find it. If the printing service
is wrapped into a web service, the discovery component should also be
able to find it. If the printer also has an editing application
installed, the discovery component should also be able to return the
application information.

Following sections specify the local discovery as a component of PZP.
There are two primary roles in the discovery specification:\
• Detecting PZP where the discovery component resides. It initiates a
local discovery by invoking local discovery function with necessary
parameters.\
• Devices, PZPs, services and applications to be discovered. The output
result of discovery function invocation. Depending on parameters or
parameter combinations used by the detecting PZP, it can be devices,
PZPs, services and/or applications found in the local networks.

2 Local networked device and service discovery[¶](#2-Local-networked-device-and-service-discovery)
--------------------------------------------------------------------------------------------------

This section specifies how to discover local networked devices and the
collection of basic information of them. Webinos provides a mechanism
for searching for devices and available services residing with those
devices. Devices here specified can be the user’s own devices inside
his/her personal zone. They can also be devices from another personal
zone. The assumption is that the devices discussed here are networked
smart devices with PZP running with it, unless mentioned purposely.
Other attached device discovery to a host machine, e.g. USB devices, is
specified with relevant APIs.

Webinos device and identity definition can be found in [webinos Entity
Definition]. Usually a device exposes itself by advertising networked
services it provides on the local network. E.g., a network printer will
register itself and advertise the printing service.

Intra-personal zone discovery is the basic discovery use case for
detecting webinos devices. It can happen when the calling device in hub
mode or peer mode. While in virgin mode there is no webinos entity
activated so device discovery totally depends on the native discovery
mechanism of the calling device and is out of the scope of this
specification.

### 2.1 Device and service registration[¶](#21-Device-and-service-registration)

Devices can be found because they are networked and advertise their
presences. The device is identified by its network address. Physical
addresses and/or local IP address can be used. If applicable other types
of network addresses may also be used. At the overlay network layer, a
device should register itself with its PZH after startup. When the
status or other information of the device is changed, it is also
responsible for updating its entry with the PZH immediately (real-time
synchronisation).

To reduce network traffic load the PZH won’t proactively advertise the
status change of a device unless a local policy requests so. In other
words, device discovery happens on demand, which can be described as
“lazy discovery”. This demand may come from an application, with or
without user involvement.

The detailed registration is specified in [webinos device enrolment].

### 2.2 Hub mode local device discovery[¶](#22-Hub-mode-local-device-discovery)

In hub mode a discovery process is done with the assistance of a PZH.
There is a device list with the PZH, which stores each device and
information about it. Every device is registered and synchronised with
the PZH so that it can be found directly by querying the PZH for the
device list. Hub mode is the quickest way to find local devices with
just a query action. However, it may not get all local device
information accurately and in time, as synchronisation takes time,
especially devices from other personal zones, which are not registered
with the detecting PZP's personal zone.

Figure 1 shows the mechanism of the hub mode discovery. The secured
transport, TLS, between the PZP and its PZH is already there enabling
the overlay networking. The PZP where the discovery is invoked then
sends a query directly to the PZH. The later responds with a device list
containing devices within the personal zone. Thus the PZP gets a full
copy of the device list of the PZH. The device list is specified in
following sub-section 2.4.

![](hub-mode.png)\
Figure 1: Hub mode local device discovery

### 2.3 Peer mode local device discovery[¶](#23-Peer-mode-local-device-discovery)

In peer mode, a PZP where the device discovery is invoked is not
querying its PZH, perhaps because this overlay networking is not
available or for any other reasons. The invoking PZP should be able to
find other devices, which are in peer mode or hub mode, within the local
network in its own right. It provides a snapshot of current local
devices.

The discovery happens in three steps and levels.\
Step 1) On the infrastructure network level use zeroconf or other means
to find peer devices. This specification takes zeroconf as an example.
The network addresses of found devices are returned, which can be used
in step 2).\
Step 2) On the overlay network level find PZP residing with the found
device. The invoking PZP sends queries to the found network address and
the common port for PZP.\
Step 3) (Optional) Set up TLS connection and copy the device list from
the detected PZP to the detecting PZP.

In step 1) dumb and super dumb devices can also be found, although for
super dumb devices in step 2) there won’t be webinos entities found with
the device.

Step 3) is an extended discovery which is optional. If it is executed
the device list should be filtered according to criteria of the
discovery. This filtering is to ensure the devices listed with the
detected device should be visible for the detecting device.

Figure 2 shows the mechanism of the peer mode discovery. Firstly device1
invoking discovery finds device2 with zeroconf. With mutual
authentication then the overlay networking is set up between device1 and
the found device2. PZP1 residing with device1 sends a query directly to
device2. The later responds with a local device list with it. Thus the
PZP1 gets a full copy of the device list of PZP2.

![](peer-mode.png)\
Figure 2: Peer mode local device discovery

There may be more than one device found with zeroconf. For each found
device an entry is created with the invoking PZP. Controlled by local
policy the invoking PZP (PZP1 in the figure) may choose to stop sending
out queries after the first response is received and processed.
Alternately, the invoking PZP may choose not to query at the overlay
network layer at all, in which case the local device list will be purely
the results returned from zeroconf discovery.

If the invoking PZP received multiple responses from different found
PZPs, the device list processing will follow for each received local
device list. Duplicated entries are updated, according to each entry’s
status. E.g. if both lists, from PZP2 and PZP3, include an entry for
devcie4, then the latest updated entry will be used as the entry with
the invoking PZP. At the same time, an update is called with the latest
entry to update the entry with the PZP where the obsolete entry came
from. Synchronisation between PZPs on device status is achieved in this
way.

Step 1) may use other discovery mechanisms than zeroconf, as long as it
can find peer networked devices. The supported infrastructure network
may be Ethernet, WLAN and any other types.

### 2.4 Device list[¶](#24-Device-list)

The PZP has a device list to store found devices and relevant
information. It is a table as shown in Figure3. In the table each
discovered device has an entry/record. The record includes device ID,
device name, network addresses, personal zone it belongs to, PZP it is
with, last update of the device status, and human-readable description.
A found dumb device can also have an entry in the list, while personal
zone fields of which could be null.

![](device-list.png)\
Figure3: An exemplary device list within PZP and PZH

### 2.5 Inter-personal zone device discovery and roaming[¶](#25-Inter-personal-zone-device-discovery-and-roaming)

Local discovery can be inter-personal zone. This may be caused by one or
more of the following conditions:\
• The two or more personal zones overlap physically (both detecting PZP
and devices to be discovered are fixed)\
• The detecting PZP moves into another personal zone (the detecting PZP
is roaming and devices to be discovered are fixed)\
• The devices from other persons move into the detecting PZP’s personal
zone (the detecting PZP is fixed and devices to be discovered are
roaming)\
• The detecting PZP and devices from other personal zones move to a same
local network (both the detecting PZP and devices to be discovered are
roaming)

In all cases above the discovered devices belong to another person,
while they are in the same network as the detecting PZP. As they are
physically located within the same local network they the devices can be
discovered together with the devices from the same personal zone. Only
because at the overlay network level they belong to different person,
the discovery is inter-personal zone. Authentication is performed with
the found devices to make sure they can communicate at overlay network
level.

In hub mode, it is implemented with PZH discovery and a remote PZH
device list lookup. The inter-personal zone discovery consists of two
steps:\
Step 1: Discover PZHs;\
Step 2: Discover devices from the found PZHs, which is a secured device
list lookup on remote PZHs.

For Step 1, PZPs and PZHs store a list of other known PZHs to it. If new
PZHs need to be found, a PZH discovery can be invoked from the local
PZH. PZH discovery can be implemented with XMPP, Webfinger, or any other
suitable technologies. Whichever technology is used, the result of PZH
discovery is PZH URIs, specified in [Entity Definitions]. The found PZH
URIs are returned directly to the discovery caller, whether it is a PZP
or a PZH, and used to update the local PZH list.

The PZH list is used as an index to search for devices within another
personal zone. For each entry in the PZH list, a query is sent out to it
for devices in that personal zone. When received the query a PZH will
return a device list to the caller, which is controlled by local policy.

When a mobile device is away from home area, roaming doesn’t affect
discovery mechanism, form the overlay networking viewpoint. The mobile
PZP can initiate a local discovery in hub mode by querying its PZH,
which may be away from the PZP’s current location. In peer mode, a PZP
can also use zeroconf to detect devices. From the information returned
it finds the devices belong to another person.

3 Local web service and application discovery[¶](#3-Local-web-service-and-application-discovery)
------------------------------------------------------------------------------------------------

The discovery component of a PZP should be able to discover any web
services locally, which are provided by devices discovered. The
networked services can be packaged as web services and discovered as
well. Webinos provides application developers an API of local service
discovery that can be used to conveniently discovery local web services.

Figure 4 shows the web service list on PZP. It can be implemented as a
table within the PZP. All services available to the PZP, including newly
discovered ones, are listed in the table. It can be used as the input to
the findService API for a quick lookup based on certain custom criteria,
which is also an input to the findService call. A “Find All Services”
invocation from the PZP can be used to update the table with the
resulting output.

![](local-service-list.png)\
Figure 4: An exemplary service list within local PZP

Applications can also be provided by a device. A PZP maintains an
application list which stores all available application from local
device. After a device is detected the installed application information
which is exposed to the detecting PZP is returned.

![](appcache.png)\
Figure 5: An exemplary application list residing on PZP

It should be noticed that a service and/or an application can be
provided by multiple devices collaboratively, while a device can provide
more than one service and/or application.

4 Security[¶](#4-Security)
--------------------------

During discovery all the communication between the webinos entities
should be secured.

For intra-personal zone discovery, the communication between the PZP and
PZH (hub mode), and that between PZPs (peer mode), should be mutually
authenticated. For inter-personal zone discovery the communications
between two personal zones should be mutually authenticated and
controlled by authorisation policy where the discovery is carried out.

The detailed specification for security can be found in webinos
deliverable [D3.6].

