User ID and Data Management Discussion proposal 2[¶](#User-ID-and-Data-Management-Discussion-proposal-2)
========================================================================================================

<div class="uml">title The big picture\nInterfaces between user identity and data management, discovery, overlay network\nproposal 2

(*) --> "turn on a divice"
--> "authenticate user"
--> "device seeks for networks\nto connect to"
if "connected?" then
  --> [true] "seek for official\nIDP"
  note right: IDP is used for mapping of user ID to device ID
  if "accessible?" then
    --> [true] "register there and\nsync data cache"
    note right: data cache is a local store on the\ndevice which keeps data from IDP\n for offline use
    if "registered?" then
      --> [true] "check for other own\ndevices which are online" as devcheck
      --> "set-up a secure channel\n(TLS) for any device found" as secureconn
      --> "use any local or\nremote service" as uselocremo
      --> (*)
    else
   	--> [false] "start local discovery of\ndevices of the same owner" as startlocdisc
    endif
  else
	--> [false] startlocdisc
	note right: list of own devices is stored\nin the data cache
	--> secureconn
  endif
else
  --> [false] "only local apps and\nservices can be used"
  --> (*)
endif</div>

