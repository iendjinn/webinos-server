Minutes for discovery Meeting 30 March 2011[¶](#Minutes-for-discovery-Meeting-30-March-2011)
============================================================================================

Attendees:[¶](#Attendees)
-------------------------

1\. Claes Nilsson, SEMC\
2. Anders Isberg, SEMC\
3. Stefano, ISMB\
4. Victor K, TNO\
5. Habib Samsung\
6. Ziran Samsung

Agenda:[¶](#Agenda)
-------------------

### Web Introducer and Web Finger:[¶](#Web-Introducer-and-Web-Finger)

[1] Web introducer – Claes gave more explanations on the sequences
diagram introduced.

Vicotr: Could be part of webkit soon, and should it be part of webinos
system. Maybe we can wait and avoid double efforts.\
Habib: Should be interesting to combine DHT and web introducer to find
services available remotely and locally.

[2] WebFinger - Anders: Based on finger protocol. Means to discover
resources related to particular user. It is not standard and work in
progress, not well documented. Services associated with user are
interesting to find out.

### DNS-SD Functional API[¶](#DNS-SD-Functional-API)

Ziran explained about initial functional/API model for DNS-SD

### XMPP[¶](#XMPP)

Habib: Haven’t found Web browser implementation that support XMPP client
sent request to XMPP server.\
Stefano: why libjingle ?\
Habib: is for real time communication & P2P.\
Victor: suggest to look at TNO ppt in Turin.

### Architecture[¶](#Architecture)

Victor addressed Issues in designing architecture. Scenario has been
described.

Actions to take[¶](#Actions-to-take)
------------------------------------

[1] Investigate where WebIntroducer to fit in for discovery and overlay
network. – Claes to discuss with Dave\
[2] To investigate web service/application discovery & see where
WebFinger fits in. – maybe also investigate the mapping between multiple
email addresses with unique URI in WebFinger? - Anders\
[3] Share XMPP experiences – Habib, Stefano, Victor\
[4] DHT investigation – Habib\
 [5] Discussion on how to move forward on Functional /API architecture –
Victor, Ziran, Dave

