XMPP for Event handling[¶](#XMPP-for-Event-handling)
====================================================

Abbreviations[¶](#Abbreviations)
--------------------------------

  ----------------- ------------------------------------------------------------------------------------------
  Abbreviation      Description
  Ad-Hoc Commands   Application-specific commands (see [XEP-0050](http://xmpp.org/extensions/xep-0050.html))
  IETF              Internet Engineering Task Force
  IP                Internet Protocol
  JID               Jabber ID
  PubSub            Publish-Subscribe (see [XEP-0060](http://xmpp.org/extensions/xep-0060.html))
  RFC               Request For Comments
  SASL              Simple Authentication and Security Layer
  TLS               Transport Layer Security
  XEP               XMPP Extension Protocol
  XML               Extensible Markup Language
  XMPP              Extensible Messaging and Presence Protocol
  ----------------- ------------------------------------------------------------------------------------------

Introduction[¶](#Introduction)
------------------------------

This document investigates the possibility of using XMPP as a mechanism
to transmit events over the network for Webinos.

As the starting point, we define a set of typical use cases. Based on
the use cases, we will cover the following areas:

1.  Candidate solution using XMPP
2.  Gap Analysis between the proposed solution with Remote Notifications
    and Messaging requirements of Webinos
3.  Proposals to fill the Gaps found in 2.

The output of this document shall contribute to architecture design of
the Event handling mechanism of Webinos.

Requirements[¶](#Requirements)
------------------------------

It is possible to summarize the desired functionality by the following
high-level requirements:

-   It SHALL be possible to exchange data among multiple entities in
    terms of events.
-   It SHALL be possible to subscribe/unsubscribe to certain events,
    according to some criteria (e.g., event source, event type), in
    order to be notified about the occurrence of such events.
-   Events that cannot be immediately delivered SHALL be cached,
    possibly within certain timing constraints, if any are given.

Work Scenarios - Use cases[¶](#Work-Scenarios-Use-cases)
--------------------------------------------------------

-   Alice wants to notify Bob about a concert taking place in the
    weekend. She sends such notification through an application that
    generates a Webinos notification event, and, if he's not currently
    available, such notification event is delivered to Bob as soon as he
    connects to the Internet with any device he owns.
-   A group of friends in a room want to play a Webinos game. Once their
    devices are connected, the game application updates the shared
    status using Webinos events that are exchanged among the different
    application instances on each device.
-   A Webinos-enabled GPS sensor provides positioning information in
    terms of Webinos events. Subscribed listeners are delivered this
    information as soon as it is published.
-   An online service aggregates and forwards the content of a bunch of
    RSS feeds in terms of Webinos events. Subscribed listeners are
    delivered such content as soon as it is published (i.e., information
    is pushed to the listeners rather than pulled by them). If a
    listener is not able to receive events (e.g., not connected), events
    are cached and forwarded to it later.
-   A Webinos-enabled navigator device on a car has an application that
    can receive traffic information in terms of Webinos events from a
    remote server. It works by registering as a listener to the remote
    traffic information event source and regularly sends to it GPS fix
    data and suggested/selected route. Moreover, the user is allowed to
    report further information to the server, in terms of events,
    regarding, e.g., traffic jams and incidents.

Candidate technology[¶](#Candidate-technology)
----------------------------------------------

XMPP seems to be a natural candidate to perform event trasmission over
the network, since it does already address most of the issues hereby
discussed.

### XMPP[¶](#XMPP)

#### Technical details[¶](#Technical-details)

-   Formerly known as Jabber, XMPP is an open, decentralized and
    extensible protocol for near-real-time XML data exchange, is backed
    and formalized by IETF (RFCs 3920-3923, 4854, 4979, 5122) and
    further developed by the [XMPP Standards
    Foundation](http://xmpp.org/). In particular, the XMPP Standard
    Foundation has developed a series of extensions to the protocol,
    known as XEPs, that address quite a significant number of concrete
    applications beyond the scope of the core protocol.
-   The use of XMPP inside Webinos is being considered in several
    different areas, since it seems to offer concrete solutions to a
    significant number of problems that we are facing. Furthermore,
    several mature implementations are already available, some of which
    are open source and Javascript-only, and also its decentralized and
    extensible design should be attractive for our purposes, also w.r.t.
    future and/or unforeseen developments.
-   The protocol is decentralized in the sense that there is no central
    authoritative server. Instead, domain names (or IP addresses) in
    JIDs are used in a similar fashion to e-mails to refer to servers.
-   A typical message delivery scenario between two entities involves
    four actors: the two said entites and the two XMPP servers they are
    connected to (or just one server if they both are connected to the
    same server). The message is routed from the sender entity to the
    XMPP server it is connected to, then to the server the other entity
    is connected to and, eventually, to the receiving entity. However,
    it is possible to also have other means of exchanging data, e.g.,
    serverless using
    [XEP-0174](http://xmpp.org/extensions/xep-0174.html).
-   Typically. when a client connects to a server, it goes through an
    authentication procedure based on SASL and the traffic is encrypted
    using TLS.
-   Two of the most important XEPs are [XEP-0060:
    Publish-Subscribe](http://xmpp.org/extensions/xep-0060.html), that
    is a protocol enabling "entities to create nodes (topics) at a
    pubsub service and publish information at those nodes", so that "an
    event notification (with or without payload) is then broadcasted to
    all entities that have subscribed to the node", and [XEP-0050:
    Ad-Hoc Commands](http://xmpp.org/extensions/xep-0050.html), that is
    a "protocol extension for advertising and executing
    application-specific commands, such as those related to a
    configuration workflow".
-   Messages exchanged via XMPP are in XML format. The core protocol
    specifies three message types: "presence" that carry user presence
    information, "message" used for instant messaging, and "iq" that
    stands for info/query (often used by extensions to define more
    message types).

#### Gap Analysis and Proposals[¶](#Gap-Analysis-and-Proposals)

-   The following gap analysis assumes that the "ontology" (i.e., the
    definition of generic information it contains) of a Webinos event is
    previously defined.

  ------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Requirement        Gap                                                                                                                                                                                                                                                                                                                                               Proposed solution
  NM-DEV-FOKUS-001   A bidirectional mapping between Webinos events and XMPP messages is needed                                                                                                                                                                                                                                                                        Definition of the XML XMPP payload that describes a Webinos event
  NM-DEV-FOKUS-002   W.r.t. events that are "managed" by a third-party (e.g., XMPP server) a bidirectional mapping between XMPP PubSub requests and Webinos subscription/unsubscription requests may be needed (i.e., to avoid requiring special handling on the server side), otherwise subscription requests may very well be "regular" Webinos events themselves.   Definition of such mapping
  NM-DEV-FOKUS-003   W.r.t. events that are "managed" by a third-party (e.g., XMPP server) a bidirectional mapping between XMPP PubSub nodes and Webinos event sources may be needed (i.e., to avoid requiring special handling on the server side)                                                                                                                    Definition of such mapping
  NM-DEV-FOKUS-005   Time-sensitive message processing is not part of the core protocol                                                                                                                                                                                                                                                                                [XEP-0079: Advanced Message Processing](http://xmpp.org/extensions/xep-0079.html) defines an "expire-at" condition that "is used to ensure delivery before an absolute point in time" - in case we need more advanced semantic, that could be similarly defined
  NM-DEV-FOKUS-006   Message delivery receipts are not part of the core protocol                                                                                                                                                                                                                                                                                       [XEP-0184: Message Delivery Receipts](http://xmpp.org/extensions/xep-0184.html) defines a way to ask for message delivery receipts
  NM-DWP-ISMB-001    Server-side archiving of messages is not part of the core protocol                                                                                                                                                                                                                                                                                [XEP-0136: Message Archiving](http://xmpp.org/extensions/xep-0136.html) defines mechanisms and preferences for the server-side archiving and retrieval of XMPP messages
  NM-USR-ISMB-005    Notifications involving user interaction                                                                                                                                                                                                                                                                                                          Those could be implemented by means of Ad-Hoc Commands; we might need to define special rules to cover these cases
  NM-DEV-FOKUS-101   XMPP allows, but does not force, stanzas to have a unique identifier                                                                                                                                                                                                                                                                              We could enforce this condition within Webinos
  NM-DEV-FOKUS-105   Sending XMPP stanzas to multiple recipients is not part of the core protocol                                                                                                                                                                                                                                                                      [XEP-0033: Extended Stanza Addressing](http://xmpp.org/extensions/xep-0033.html) defines a XEP that enables entities to include RFC822-style address headers within XMPP stanzas in order to specify multiple recipients or sub-addresses
  NM-DEV-FOKUS-107   The core protocol does not allow to efficiently transmit binary data                                                                                                                                                                                                                                                                              Use of [XEP-0065: SOCKS5 Bytestreams](http://xmpp.org/extensions/xep-0065.html) to establish out-of-band bytestreams and [XEP-0047: In-Band Bytestreams](http://xmpp.org/extensions/xep-0047.html) as a fallback when the former is not usable (or alternatively, [XEP-0260: Jingle SOCKS5 Bytestreams Transport Method](http://xmpp.org/extensions/xep-0260.html) and [XEP-0261: Jingle In-Band Bytestreams Transport Method](http://xmpp.org/extensions/xep-0261.html) if [XEP-0166: Jingle](http://xmpp.org/extensions/xep-0166.html) is preferred), while [XEP-0231: Bits of Binary](http://xmpp.org/extensions/xep-0231.html) can be used for small bits of binary data
  ------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Conclusions[¶](#Conclusions)

XMPP is a very good candidate technology for handling event transmission
over the network for Webinos: all of the requirements can be met by
using already existing XEPs, maybe with tiny improvements, and with
little effort in defining some Webinos-specific data types (i.e., event
format and types), but this latter issue would be true of any other
technology we might choose.

Furthermore, its extensibility and decentralization are extremely
attractive features for our purposes.

