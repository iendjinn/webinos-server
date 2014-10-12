User ID and Data Management Discussion proposal 1[¶](#User-ID-and-Data-Management-Discussion-proposal-1)
========================================================================================================

PZH = Personal Zone Hub: combines the functionality of **registrar** and
**Identity Provider** (**IDP**) for the purpose of communicating among
own devices in the own personal zone and across personal zones of other
users\
PZP = Personal Zone Proxy: a proxy of the PZH in the case the PZH cannot
be accessed

<div class="uml">title The big picture\nInterfaces between user identity and data management, discovery, overlay network\nproposal 1

(*) --> "turn on a device"
--> "authenticate user"
--> "device seeks for networks\nto connect to"
if "connected?" then
  --> [true] "look up current address\n of the PZH by using\n webinos' WebFinger service"
  note left: webinos WebFinger service is a central service\non the Internet. For each user, an address\nis stored there if a PZH is active\n \nIf webinos' WebFinger service is not\naccessible, the network is not connected to\nthe Internet
  --> "access\nPersonal Zone Hub"
  note left: If none of the user's devices is connected to\nthe Internet at present, the WebFinger service\ndoes not return an address
  if "accessible?" then
    --> [true] "register there and\nsync data cache"
    note right: device updates its availability\nto "online", allowing other devices\nto discover and contact it\n \ndata cache is a local store on the\ndevice which keeps data from\nPZH for offline use
    if "registered?" then
      --> [true] "check for other own\ndevices which are online" as devcheck
      --> "set-up a secure channel\n(TLS) for any device found,\nif needed" as secureconn
      --> "use any local or\nremote service" as uselocremo
      --> (*)
    else
    --> [false] "start local discovery of\ndevices of the same owner" as locdisc
    endif
  else
    --> [false] locdisc
    note right: if the PZH is not accessible,\neach devices falls back to\nusing its own PZP\n \n list of own devices is stored\nin the data cache
    --> "use local services" as uselocal
    if "other own\ndevices appear?" then
      --> [true] secureconn
    else
      --> [false] uselocal
    endif
  endif
else
  --> [false] "only local apps and\nservices can be used"
  --> (*)
endif</div>

