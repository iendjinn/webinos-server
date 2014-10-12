Key Storage[¶](#Key-Storage)
============================

     I suggest we cover platform specific details for key storage in pzp deployment, no need to keep a separate section 

Scope[¶](#Scope)
----------------

All devices and services within webinos use private keys to authenticate
themselves. These keys are vital to securing personal zones and the
policy framework. This informative specification defines a number of
options for how keys can be stored on each platform to best protect
against certain threats. This includes the PZH and all PZPs.

Gap Analysis[¶](#Gap-Analysis)
------------------------------

    Once the user is authenticated to a device, the device reveals access to the secure storage which keeps the private key in a protected environment.

Secure storage has been investigated
(</wp4/wiki/Secure_Storage_Analysis>)
and an implementation proof of secure storage was provided for node 0.4.
It was no longer developed so presently is in the status of early
prototype. Where available, the system keyring is used to securely store
attributes.

    The PZP is the only entity which can access the private key. The PZP uses the private key for mutual authentication within the zone and
    across zones, and for integrity and confidentiality of communication between devices.

Private keys are usually stored in plain in the file system, so easily
accessible by any other entity on the same device. The use of keyring
provide some encryption, and it requires authentication before being
accesible. However, even if stored in the keyring, other authorized
entities (outside webinos) can access it as well, since it's not a
specific PZP store.

Key storage on the PZH[¶](#Key-storage-on-the-PZH)
--------------------------------------------------

Initially discussed: [PZH\_key\_storage](.html)

Key storage on Android[¶](#Key-storage-on-Android)
--------------------------------------------------

Key storage on OSX[¶](#Key-storage-on-OSX)
------------------------------------------

Key storage on Ubuntu (PC)[¶](#Key-storage-on-Ubuntu-PC)
--------------------------------------------------------

Key storage on Ubuntu (Media centre)[¶](#Key-storage-on-Ubuntu-Media-centre)
----------------------------------------------------------------------------

Key storage on Arduino (M2M)[¶](#Key-storage-on-Arduino-M2M)
------------------------------------------------------------

Key storage on Vehicle[¶](#Key-storage-on-Vehicle)
--------------------------------------------------

Key storage on cloud-resident PZP[¶](#Key-storage-on-cloud-resident-PZP)
------------------------------------------------------------------------

Security discussion[¶](#Security-discussion)
--------------------------------------------

Link to the T3.5 Risk Analysis.

