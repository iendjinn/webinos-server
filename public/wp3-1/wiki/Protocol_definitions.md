Protocol definitions[¶](#Protocol-definitions)
==============================================

This section provides outline specifications for device and service
discovery module. Device discovery aspect is not limited to just one
protocol but provides support for discovery on more than one interface
and allows usage of more than one discovery mechanism.

Discovery module aims to provide wrapper interface for high level API
and low level discovery specific API. It will provide a uniform
interface for web developers to obtain addressing information on devices
and services across a wide range of interconnecting technologies. The
discovery module shall provide the following functionalities:

1.  Advertise or publish device/service’s availability and capability
2.  Query or find device/service based on certain criteria
3.  Bind with device/services that meets the searching requirement

To describe above functionalities below section covers data structure
and functional methods for discovery mechanism. All aspects covered
below differ for local and remote discovery mechanism.

Note: Webinos will provide information about interfaces based on BT and
WLAN. Discovering WiFi/BT devices and connecting to such devices is
outside scope of webinos and is underlying OS functionality. Assigning
IP address after connection establishment is also underlying OS
functionality. Though webinos can provide these functionalities but it
will be replication of service.

Advertising/Publishing Information[¶](#AdvertisingPublishing-Information)
-------------------------------------------------------------------------

In this functionality device advertise their services and allow other
devices to discover device's service. Each discovery mechanism has
different way of advertising services and allow communication
establishment with the device. Mechanism of advertising differs in local
discovery and remote discovery.

In local discovery mechanism, service availability/publishing has to be
multicast and discovery happens by looking for a service and
establishing communication with the device based on the service details.
In remote discovery, connection is established with personal hub first
and then information is exchanged to discover new devices.

### Local Discovery[¶](#Local-Discovery)

The interface that will be provided to search local device in webinos
will be USB. WiFi and BT device discovery as mentioned above will be
discovered and connected through underlying OS. Support to retrieve
information about connection to such interfaces will be supported. Both
BT and WiFi devices do not require being addressable.

Reason for including USB is to find all devices that are connected to a
device to be searchable and allow remote device to connect to the
device, for usage through USB over IP.

All interfaces are to be handled as resource and should be separately
addressable for remote device to discover it.

Device needs to advertise about the service it offers using ZeroConf or
UPnP. This advertisement provides information about capabilities of the
device and the information to establish communication with the device.

      1 #define MAC_LEN 6
      2 
      3 // Discovery structure searches for device based on interface and discovery mechanism 
      4 // Note it is not needed to use all mechanism all the time, it is user configurable option.
      5 struct discovery{
      6 
      7   // List of USB connected interfaces 
      8   USB *usb;
      9 
     10     // Holds list of printers found through SLP
     11   SLP *slp;
     12 
     13   // Devices published/advertised information as well as device found through ZeroConf resolve method 
     14   ZeroConf *zero_conf;
     15 
     16   // UPnP device discovered list
     17   UPNP *upnp;
     18 
     19   // DLNA discovered device list
     20   DLNA *dlna;
     21 };
     22 
     23 // UPNP based devices found are hold in this structure
     24 typedef struct _UPNP{
     25 
     26   // Unique id of the device
     27   char *uuid;
     28 
     29   // Device  type along with manufacturer details
     30   char *device_type;
     31 
     32   // Address of device 
     33   char *address;
     34 
     35   // Port on which service is available
     36   int port;
     37 
     38   // Description of service
     39   char *description;
     40 
     41   // Holds another UPnP discovered device 
     42   struct _UPNP *next;
     43 }UPNP;
     44 
     45 // Discover printers based on SLP 
     46 typedef struct _SLP{
     47 
     48   // Service type 
     49   char *srvtype;
     50 
     51   // Service URL
     52   char *srvurl;
     53 
     54   // TO hold other SLP discovered devices
     55   struct _SLP *next;
     56 }SLP;
     57 
     58 // Structure to hold ZeroConf information 
     59 typedef struct _ZeroConf{
     60 
     61   // Publish device details, this is first step to be done since devices need to start service before publishing service
     62   ZeroConf_Publish *publish;
     63 
     64   // Discovered ZeroConf based device details
     65   ZeroConf_Resolve *resolve;  
     66 }ZeroConf;
     67 
     68   // This structure holds information that will be used for publishing service for webinos based device
     69 typedef struct _ZeroConf_Publish{
     70 
     71  // Name of the device such as hostname@machinename
     72  char *name;
     73 
     74  // Port on which service will be available
     75  int port;
     76 
     77  // Advertised service type such as _presence._tcp
     78  char *service_type;
     79 
     80  // TXT in form of pair (type=value)
     81  char **txt;
     82 }ZeroConf_Publish;
     83 
     84 // This structure holds information of ZeroConf device available in the network 
     85 typedef struct _ZeroConf_Resolve{
     86 
     87   // user assigned name or default name
     88   char *name;  
     89 
     90   // service name of the type we are connecting to
     91   char *type;  
     92 
     93   // human friendly service description
     94   char *nice;  
     95 
     96   // numeric network interface index 
     97   char *iface;
     98 
     99   // true => IPv6, false => IPv4
    100   bool ipv6;   
    101 
    102   // IP address
    103   char *address;  
    104 
    105   // Port on which service is running
    106   int  port;
    107 
    108   // additional name/value pairs  
    109   char *txt;  
    110 
    111   // Holds next ZeroConf Resolve data;
    112   struct _ZeroConf_Resolve *next;
    113 
    114 }ZeroConf_Resolve;
    115 
    116   // This struct will hold information about searched USB devices
    117 typedef struct _USB{
    118   // Unique product number of USB device
    119   unsigned long product_number;
    120 
    121   // Vendor/Manufacturer id
    122   unsigned long vendor_id;
    123 
    124   //USB standard defined class of device
    125   unsigned long device_class;
    126 
    127  // Each device class is divided into multiple device sub class
    128   unsigned long device_sub_class;
    129 
    130   // Device number 
    131   unsigned long device_num;
    132 
    133   // Bus on which device is running
    134   unsigned long bus_num;
    135 
    136   // Text description of the vendor name
    137   char *vendor_name;  
    138 
    139   // Hold details of next USB device
    140   struct _USB *next;
    141 }USB;
    142 

Devices searched are presented to the user and once user selects device
to connect with, a bind operation is performed on the device.

Bind[¶](#Bind)
--------------

Bind based on whether user wants to find device locally or find remote
device through personal hub.

### Local Device Bind[¶](#Local-Device-Bind)

Each interface defines different bind mechanism. If binding is based on
interface, device will be connected to selected interface. In typical
socket communication it would be based getting information based on
getaddrinfo. Once information is retrieved, a socket connection is
established.

     1 struct device_bind
     2 {
     3   // protocol type
     4   unsigned char protocol;
     5 
     6   // interface 
     7   unsigned char iface;
     8 
     9   // host name of the device
    10   char *hostname;
    11 
    12   // IPv6 address 
    13   unsigned char ipv6[16];
    14 
    15   // IPv4 address 
    16   unsigned char ipv4[14];
    17 
    18   // port number to connect or the port that will be used if acting as server. This could be user input or random input
    19   int port;
    20 
    21   // MAC addr of the interface, if USB product:vendorid, rest filled with Zero
    22   char mac_addr[MAC_LEN];
    23 }LocalConn;
    24 
    25 // 1 if successful or if any error depends on iface and socket error
    26 
    27 int connect_local(LocalConn *local);

### Remote Discovery[¶](#Remote-Discovery)

There are several mechanisms that supports remote discovery. To
communicate with remote device, it requires having IP address or domain
information to establish socket communication with the device. First
step is to gather addressing information.

There are several mechanisms to perform remote discovery of devices, it
can be done through resource distributed as distributed hash tables or
use XMPP based discovery.

The reason for considering XMPP as a remote discovery mechanism is it
allows connection with same id but connection is possible with different
resources. For example provided this a connection can be established
over XMPP: <alice@example.org>/camera. In this alice is a userid,
example.org is the domain that holds information about user alice and
camera is the resource that wants to connect. It allows fetching
information about user friend list and resources online. Communication
is over TLS (Transport Layer Security) and SASL is used for
authentication with minimum of Digest-MD5 cryptographic mechanism. It
provides several security mechanisms such as end to end secure channel
establishment and secure sessions. It supports serverless messaging
which works without XMPP server and is based on ZeroConf. XMPP also
support service discovery, which is negotiated during connect establish
process. Though webinos specification is not restricted to XMPP, it is
presented in order to implement phase 1

Remote discovery happens through personal hub. The personal hub will
provide a domain name and then DNS-SRV resolution takes place to fetch
address information and then socket communication is done to the fetched
address information. The information needed from user is userid along
with domain name, resource, and password. Based on this information
connection will be established with personal hub. User can discover
other users and their devices and establish communication with the
resources.

     1 typedef struct remote_conn{
     2 
     3   // This will hold username in case of connection to XMPP server and nick in case of connecting to XMPP 
     4   // serverless messaging
     5   char *username_nick;
     6 
     7   // Domain name where user is registered with and in XMPP serverless as a machine name
     8   char* domain_machinename;
     9 
    10   // Password required for connecting with XMPP server
    11   char* password;
    12 
    13   // If same resource is to be used with multiple resources, all resource information. This could be user input 
    14   // or information is filled in automatically based on discoverable device configuration
    15   char **resources;
    16 }RemoteConn;
    17 
    18 // Error handling based on XMPP error message
    19 // This call has to be called in order to establish communication with remote XMPP server and in case of Serverless 
    20 // Messaging this will be used to start services locally, advertise service, and connect to remote device. 
    21 
    22 int connect (RemoteConn *remote);

Query Information[¶](#Query-Information)
----------------------------------------

The data structures defined support interfaces and devices. Each
interface and discovery mechanism can be queried to get device specific
information. Results might vary depending on device and mechanism used
to find the device, for example USB discovery mechanism provides
different information and if queried for device found through UPnP or
ZeroConf information provides is different.

    1 // Returns 1 if it meets filter option or else result will be based on interface results
    2 // result will be based on format that developer can understand
    3 int query (char *device_interface, char *filter_option, char *result); 
    4 
    5 // Returns the IP address depending on the interface
    6 char* getIPAddress(char *iface);

\(Q) Do we need to define structure for each device, what parameters and
factors should we consider representing in these structures?

