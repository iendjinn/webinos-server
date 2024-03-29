Application Runtime State Synchronisation[¶](#Application-Runtime-State-Synchronisation)
========================================================================================

-   [Application Runtime State
    Synchronisation](#Application-Runtime-State-Synchronisation)
    -   [Requirements](#Requirements)
    -   [General approach and scoping](#General-approach-and-scoping)
    -   [Operational modes for shared
        objects](#Operational-modes-for-shared-objects)
    -   [Object synchronisation
        protocol](#Object-synchronisation-protocol)
        -   [Terminology](#Terminology)
        -   [Overall Operation](#Overall-Operation)
        -   [Messages](#Messages)
    -   [Architectural embedding](#Architectural-embedding)
    -   [Interface for usage of shared objects in Web runtime
        environments](#Interface-for-usage-of-shared-objects-in-Web-runtime-environments)
    -   [Code table](#Code-table)

[habib] The spec says state but we are concentrating on both data&state.
Suggest renaming spec to data & state instead of just state. the other
bit missing in this specification is how these components co-relate to
PZP and PZH.

[habib] After reading specification i could not understand the
difference in between platform sync and app sync. so what does app sync
can do that platform sync cannot do? and how does it resolve conflicts?
how app sync differs from browser sync? can the message be reused as
defined in platform sync

Developers of distributed applications often need to take care of
redistributing short-lived runtime data among all interacting
application instances. This runtime data is hold in objects with
properties and values carrying the information expressing the current
state of an application or parts of it, e.g. the current round setup in
a quiz game or play position in a queried media list. To be able to
synchronise this information among participating instances messages
could be defined and exchanged. But among all the disadvantages of the
message passing approach to tackle the runtime state synchronisation
problem the most striking ones are the following. Taking care of the
synchronisation manually is repetitive, time-consuming and introduces a
bunch of message handling logic into the application code. Further, the
messages might be too coarse carrying redundant and unchanged data or
they might be too fine-grained increasing the message handling
complexity.

[habib] either it should be "participating instances", or should be
"participating devices, instance messages"

[habib] Messaging passing has not been defined before this, so saying
directly disadvantages of message passing does not lead to direct
understanding.

The application runtime state synchronisation as described in this
section provides a framework that allows to create JavaScript objects
that can be automatically synchronised across devices/applications. An
application can attach data to an object and webinos will automatically
"copy" the changed data to any registered related remote objects so that
a remote application has access to the same data. Of course, for
efficiency reasons only incremental updates are distributed to ensure
that all participants have the same and consistent view on the shared
runtime state while not redistributing information redundantly. The
shared state approach also includes possibilities to persist objects in
order to reactivate the same state when an application is executed next
time. In this case an application is not distributed in locality but in
time. Such a bootstrap mechanism is hardly feasible with an message
passing approach.

[habib] how do we define this object and who creates this object, what
if data is a blob or txt file?

Requirements[¶](#Requirements)
------------------------------

The incorporation of a JavaScript application runtime state
synchronisation mechanism as a webinos platform feature needs to satisfy
a number of key requirements to be beneficial for application
development.

-   **Simple Usage** Application developers should be able to define
    explicitly which objects are supposed to be synchronised. Ideally,
    the synchronisation handling should not affect the application code
    significantly.
-   **Consistency** All copies of objects to be synchronised should
    always remain consistent and each peer involved should have the same
    view on those object. Even, connectivity outages should not affect
    the consistency of the synchronised objects.
-   **Low latency** Updates should be perceived simultaneously and
    possible conflicts should be resolved in a fair manner. The delays
    resulting from synchronisation should be as low as possible, thus
    not to impair application experience.
-   **Persistency** It should be possible to persist a shared state if
    all peers get offline and revive the state on demand at a later
    date.
-   **Privacy** It must be possible to put control on what is
    synchronised and where, e.g. with which users and applications,
    preferably by utilizing the webinos policy system.

[habib] From where do this requirements originates? this are not
specified in webinos requirements, so mentioning as requirement does not
look apt. Better to mention these as advantages from the API.

General approach and scoping[¶](#General-approach-and-scoping)
--------------------------------------------------------------

Operational modes for shared objects[¶](#Operational-modes-for-shared-objects)
------------------------------------------------------------------------------

[habib] is this synchronization across personal zones. if we refer to
multi-user would be better to include webinos jargons that they are
refering to inter zone communication.

A shared state consists of a set of synchronised objects. Access and
visibility of those objects determine the operational mode. The access
to shared objects can be limited to a single application or can be
enabled for different applications that have the permission, e.g. token
or key to the according synchronisation session. Another differentiation
can be rest upon the visibility to users. Possible configurations are:
visibility of shared objects a) limited to a single user, b)
unconstrained to all participating users (multi user) or c) constrained
to a closed user group. The used mode should be configurable by the
application developer. The following table depicts possible combinations
of access and visibility of shared objects in a single synchronisation
session and gives for each combination example use cases.

**access \\ visibility**

*single user*

*multi user*

*closed user group*

*within one application*

application user settings, index position in lists, media playback
position

high scores in games

group chat

*across applications*

reuse of user preferences

transient user generated information

collaborative components, e.g. text processing

[habib] Does not fit in the sentence "according synchronisation". be
rest or based

Object synchronisation protocol[¶](#Object-synchronisation-protocol)
--------------------------------------------------------------------

In the following the AppState Synchronistion protocol (APSYN) is
specified. It it based on the Realtime Transaction and Synchronistion
protocol (RTSYNC) specified by the Fraunhofer FOKUS project Pulsar
[PULSAR]. The round-based protocol is tailored for a centralistic
architecture with a single synchronisation entity serving its connected
peers. The synchronisation server is responsible for the fair playout of
the update messages and resolves possible conflicts. This approach fits
well for the synchronisation of the entities present within a single
personal zone in hub mode (mainly client-server architecture). For the
purpose of synchronisation of peers that are present in different
personal zones the protocol is slightly extended. Conceptually, the
centralized synchronisation entity remains unchanged, but is given a
second role. In addition of being the central entity for the peers
within its own personal zone, the synchronisation and control component
(CTRL) may become itself a peer for the central synchronisation entity
within a different zone. Within a zone where a peer to peer mode is
active and peers are interconnected directly without intermediate PZH,
one of the peers is selected randomly to act as the synchronisation
control component. The same mechanism applies among several equitable
interconnected hubs. During the synchronisation setup the distribution
of roles (control component, peer) is determined. For the realization of
the necessary communication between peers and control component the
webinos messaging and routing may be used. In this case, participation
of two application instances in one synchronization session is only if
an communication path between these peers is provided by the underlying
webinos infrastructure. Other communication path, e.g. data channels,
are not excluded.

[habib] is it "not excluded" or excluded

### Terminology[¶](#Terminology)

-   **Synchronisation and control component (CTRL)** - The server
    component (dedicated sync-server or process), which is hosting and
    controlling the synchronised objects and is relaying them to its
    attached peers. The CTRL component may be in the role of an peer
    additionally, thus participating in a synchronization session while
    sharing its view on the shared state with its own peers.

<!-- -->

-   **Peer component (PEER)** - One of the peers connected to the
    central synchronisation and control component.

<!-- -->

-   **Synchronisation Round (round)** - The synchronisation process is
    partitioned into rounds.

<!-- -->

-   **Synchronisation message (sync)** - Message sent by the server at
    the beginning of the round, containing the latest synchronisation
    updates.

<!-- -->

-   **Request message (rqst)** - Message sent by a peer, containing
    requests for synchronisation.

<!-- -->

-   **Join message (join)** - First message sent by a peer willing to
    join a session.

<!-- -->

-   **Init message (init)** - First message sent by a server to a
    joining peer, containing the current values of all shared objects.

### Overall Operation[¶](#Overall-Operation)

The network operation between sync-server (CTRL) and peers (PEER) is
illustrated in the following sequence diagram.


        PEER                 CTRL                  PEER
          |                    |------- sync ------>|  ------------
          |------- join ------>|                    |
          |                    |<------ rqst -------|     round 0
          |                    |                    |
          |<------ init -------|------- sync ------>|  ------------
          |                    |                    |
          |------- rqst ------>|<------ rqst -------|     round 1
          |                    |                    |
          |<------ sync -------|------- sync ------>|  ------------
          |                    |                    |
          |------- rqst ------>|<------ rqst -------|     round 2
          |                    |                    |
          . . .

The sync-server sends periodically synchronisation messages to all
peers. Each peer replies with a request message. Before a peer can
participate, it has to join and gets an acknowledgement with the initial
object values from the sync-server. The corresponding message flow for a
multi user scenarios where two or more personal zones are interconnected
is depicted in the following sequence diagram. The master copy of an
shared object is still at one single entity but is synchronised with all
connected sync-servers in different zones.

[habib] in the text it says following seq diagram but the seq diagram is
above. the seq diagram specified above differs in terms of diagram
specified in other sections others uses plantuml. text explaining how
ctrl and peer co-relate to webinos architecture components will be
useful. as ctrl could be both pzh and pzp, having info in the text will
aid.

The following operation timeline shows how the synchronisation process
is constructed.


              _ _ _ _   one round   _ _ _ _       _  next round  _
            /                               \   /
           /                                 \ /                 
          |-----------|-----------|-----------|------------|-----> t
           \  wait   / \ process / \ reply   / \   wait   /
            \  -I-  /   \  -II- /   \ -III- /   \   -I-  /

A complete PEER/CTRL communication cycle is defined as a round. One
round is divided into three phases:

-   \(I) Wait for incoming requests. The synchronisation server waits until a
    request message from each peer has been received. The requests are
    instantly parsed but not yet applied, since they may interfere with each
    other. The waiting time is bounded by predefined limit.

[habib] how does sync server know how many req message will come, is it
depended on how many joins it receives? (not specified in the text)

-   \(II) Process request messages. Without reference to their accurate
    arrival times all requests issued in the same round are considered as
    simultaneous. As a consequence concurrent changes of an object value are
    conflicting and have to be detected and resolved first. Thereafter
    remaining requests are applied.

[habib] how are conflict resolved?

-   \(III) Distribute updates. Peers are notified about the resulting updates
    of this round. This phase is divided into two parts, which are executed
    sequentially:\
     (1) For each peer an individual synchronisation message is constructed,
    containing the relevant updates of this round as well as status codes
    indicating whether their requests were successful.\
     (2) The synchronisation messages are sent to the peers, initializing
    the begin of the next round.

[habib] when does next round begin and is next round details sent in the
present round update message.

### Messages[¶](#Messages)

For the communication protocol between the synchronisation control
server and its peers a light-weight, text-based protocol is used that
does not prescribe a certain transmission technology as long as the
requirements for the application state synchronisation are met. Thus,
the exchanged messages should be delivered with low latency and not
exceed a size for that the transmission time is significantly longer
than the waiting phase (I) of a synchronisation round length. The
protocol is designed to distribute small size changes to large number of
peers. Each message is a JSON ([JavaScript Object
Notation](http://tools.ietf.org/html/rfc4627)) [RFC4627] formated text
string representing a serialized object that consists of two parts. The
unified head part holds generic information like the current round
number. The body part carries the main message data and is individually
formatted for each message type. White spaces should be ommitted as far
as messages remain valid JSON text. The grammatical rules in this
document are to be interpreted as described in [Augmented BNF for Syntax
Specifications: ABNF](http://tools.ietf.org/html/rfc5234) [RFC5234]

[habib] below messages does not match the webinos message structure,
better to include examples that matches webinos messaging specification.
are these message going to use prop message (see service discovery or
synchronisation for the messages format) or they are going to be sent as
rpc payload? failed to understand message structure relation as they are
going to be sent as JSON structure, defining in this format might not be
that useful

    message = BO QM "h" QM NS head VS 
                 QM "b" QM NS body EO 
    ; Matches: {"h":head,"b":body}

    head = BO QM "p" QM NS protocol VS 
              QM "c" QM NS client_id VS 
              QM "r" QM NS round_number VS 
              QM "l" QM NS last_received EO 
    ; Matches: {"p":protocol,"c":client_id,"r":round_number,"l":last_received}

    protocol = QM "APSYN/" 2DIGIT QM
    ; Version of the protocol currently applied, current version number is 01, e.g. "APSYN/01" 

    client_id = QM *(HEXDIG) QM 
    ; Identifier of the client application, to allow differentiation of multiple instances per peer.

    round_number = QM 4HEXDIG QM
    ; Number of the current round. Rounds are numbered sequentially, beginning with 0001. 
    ; Round sequence is lineary and allows the receiver to order messages and recognize message losses.
    ; If the round number FFFF is reached it is set back to 0001. Messages not belonging to a 
    ; round (join, init) always use the reserved round number 0000. Thus, this field defines also 
    ; the type of a message.

    last_received = QM 4HEXDIG QM
    ; Identifier of last round number received by a peer or the sync server. 
    ; This enables the peer or the sync server to detect message losses.

    body = join_body / init_body / sync_body / rqst_body 
    ; The body part may be of one of four types. If the reserved round number 0000 is used then 
    ; the message type is 'join' if send by a peer (as value for round_number and last_received) 
    ; and 'init' if send by the sync server (as value for last_received). 
    ; If the round number is NOT 0000 then the message type is 'rqst' (request) if send by a peer 
    ; and 'sync' if send by the sync server.

[habib] why is the message has the client\_id is not the pzp/pzh id
sufficient, why is messaging/rpc id not suffice?

**Join message** (PEER -\> CTRL)

The initial message send by a peer to signalize its willing to
participate in a synchronisation session. The session will be created by
the sync server if the session does not exist already.

    join_body = BO QM "id" QM NS QM STR QM EO 
    ; Application identifier. This may be an name, key, URI or something else which identifies a specific session on the server. 
    ; Matches: {"id":"appName-sessionId-salt"}

[habib] same as before, message structure differs from other specs,
better to include format as specified in service discovery or sync. is
session really required to be created as you have session manager that
does task of creating session between pzp and pzh.

**Init message** (CTRL -\> PEER)

Initial message sent by the synchronisation control server to a joining
peer. Shared objects are initialized with create actions and the new
participating peer is bootstrapped. Afterwards the peer is allowed to
send request and accept and process sync messages. Unlike sync messages,
the init message type does not allow any other actions than create. Init
and sync messages are sent at the same time, both marking the beginning
of a synchronisation round.

    init_body = BO QM "sc" QM NS session_config VS 
                   QM "cr" QM NS BA create *(VS create) EA EO 
    ; Session configuration data followed by a list of objects and their initial values.

    session_config = BO QM "min" QM NS QM 1*8HEXDIG QM VS
                        QM "max" QM NS QM 1*8HEXDIG QM VS
                        QM "tout" QM NS QM 1*4HEXDIG QM EO 
    ; min round time, max round time, rounds until timeout

**Synchronisation message** (CTRL -\> PEER)

The synchronisation control server sends sync messages at the beginning
of a round. Beside object synchronisations sync messages also include
acknowledgements for peer requests. The current round number is
identified by its appropriate header part field. The main purpose of
sync messages is to distribute the most recent updates for the the
shared application runtime state. The likewise carries acknowledgements
contain information whether the peer's requests where successful during
the previous round. Sync messages are send periodically even if no
updates are to be distributed.

    sync_body = BO QM "ack" QM NS BA [acknowledgement_list] EA VS 
                   QM "syn" QM NS BA [sync_action_list] EA EO
    ; The lists with acknowledgements and updates may be empty if no state changes
    ; occured in the previous rounds.
    ; Matches the empty 'heartbeat' sync message: {"ack":[],"syn":[]}

    acknowledgement_list = code *(VS code)                     
    ; Peer requests from the previuos round are acknowledged by an chronological ordered codes list.
    ; The first entry in the list corresponds to the oldest peer request.

    code = 2DIGIT                                              
    ; Acknowledments are encoded in predefined two-digit status codes of primitive type number.
    ; See below for a full code table.

**Request message** (PEER -\> CTRL)

Request messages carry multiple requests for synchronisations. Peers
send request messages even if no state changes occurred.

    rqst_body = BA [sync_action_list] EA         
    ; Contains an ordered list of incremental object update requests.

**Actions**

    sync_action_list = sync_action *(VS sync_action)
    ; Ordered list of object creation actions or incremental object updates. 

    sync_action = create / update / delete                     
    ; Allowed object update actions.

    create = BO QM "t" QM NS QM "cre" QM VS 
                QM "i" QM NS object_info VS
                QM "m" QM NS mode VS
                QM "d" QM NS json EO
    ; Create or initialize an object. Contains the complete object in JSON text
    ; as described by the according JSON-schema.

    update = BO QM "t" QM NS QM "upd" QM VS 
                QM "i" QM NS object_info VS
                QM "d" QM NS json EO
    ; Update an object. The JSON part contains only changed values.

    delete = BO QM "t" QM NS QM "del" QM VS 
                QM "i" QM NS object_info EO
    ; Delete an object.

    object_info = BO QM "s" QM NS scope VS
                     [QM "i" QM NS scope_id VS]
                     QM "n" QM NS object_name EO
    ; Objects are identified by their scope, an optional scope identifier and the object name.

    scope = QM ( "G" / "L" / "C" ) QM
    ; Visibility of an object. (G - Global, L - Local group only, C - Client Object)

    scope_id = QM *4HEXDIG QM
    ; The id of the scope. Especially needed for client objects (scope C), where it specifies 
    ; an objects owner. 

    object_name = 1*(ALPHANUM / DLR / USC) *(DOT 1*(ALPHANUM / DLR / USC))
    ; Name of an object. This may point to a nested object or property. 

    json = JSON-text
    ; A JSON formatted text. See JSON specification [RFC4627].

    mode  = "NA" / "RO" / "RW" 
    ; Access mode (NA - No Access, RO - Read Only, RW - Read Write)

**Definitions**

The following common definitions are based on definition of structural
characters in RFC4627 [RFC4627].

    BA = WS %x5B WS  ; [ left square bracket, begin of array

    BO = WS %x7B WS  ; { left curly bracket, begin of object

    EA = WS %x5D WS  ; ] right square bracket, end of array

    EO = WS %x7D WS  ; } right curly bracket, end of object

    NS = WS %x3A WS  ; : colon, name separator

    VS = WS %x2C WS  ; , comma, value separator

    WS = *(          ; Whitespace 
            %x20 /   ; Space
            %x09 /   ; Horizontal tab
            %x0A /   ; Line feed or New line
            %x0D     ; Carriage return
        )

    QM = %x22        ; " quotation mark

    STR = QM *CHR QM ;

    CHR = UNESC /
        ESC (
            %x22 /   ; "    quotation mark  U+0022
            %x5C /   ; \    reverse solidus U+005C
            %x2F /   ; /    solidus         U+002F
            %x62 /   ; b    backspace       U+0008
            %x66 /   ; f    form feed       U+000C
            %x6E /   ; n    line feed       U+000A
            %x72 /   ; r    carriage return U+000D
            %x74 /   ; t    tab             U+0009
            %x75 4HEXDIG )  ; uXXXX                U+XXXX

    ESC = %x5C       ; \ escape symbol

    UNESC = %x20-21 / %x23-5B / %x5D-10FFFF ; valid characters without escaping

ABNF core rules plus derived rules which were used in this document.

    ALPHANUM = ALPHA / DIGIT ; Letters and digits.

    DOT = %x2E       ; . dot symbol

    DLR = %x24       ; $ dollar sign

    USC = %x5F       ; _ underscore  

    ALPHA = %x41-5A / %x61-7A ; Upper- and lower-case ASCII letters (A-Z, a-z)

    DIGIT = %x30-39  ; Decimal digits (0-9)

    HEXDIG = DIGIT /"A"/"B"/"C"/"D"/"E"/"F" ; Hexadecimal digits (0-9, A-F, a-f)

    SP = %x20        ; space

    CR = %x0D        ; carriage return

    LF = %x0A        ; linefeed

    CRLF = CR LF     ; Internet standard newline

    VCHAR = %x21-7E  ; visible (printing) characters

    CHAR = %x01-7F   ; any ASCII character, excluding NUL

    OCTET = %x00-FF  ; 8 bits of data

Architectural embedding[¶](#Architectural-embedding)
----------------------------------------------------

![](appsync_arch.png)

[habib] better to refer peer manager as session manager. what components
are introduced by this spec and what is provided by webinos architecture
is not clear. The components that look used are messaging and session
manager, are there any other component use.

Interface for usage of shared objects in Web runtime environments[¶](#Interface-for-usage-of-shared-objects-in-Web-runtime-environments)
----------------------------------------------------------------------------------------------------------------------------------------

The provision of the webinos application synchronisation in Web runtimes
should follow the specification for the [AppState Synchronisation
API](http://dev.webinos.org/specifications/new/appstatesync.html). This
interface has a high level of abstraction for the purpose of accessing
and managing shared objects. The interaction with those objects should
be perceived as if they were local. By using this interface webinos
applications do not need to take care about the synchronisation issues,
as most of it is hidden behind the API.

Code table[¶](#Code-table)
--------------------------

[habib] where are this code value relevant?

    Informational 1x

        currently none

    Succesful 2x

        20 OK - General acknowledgement
        21 Request Accepted - Your request was accepted and there was no other request on the resource.
        22 Request Preferred - There were multiple conflicting requests on the resource but yours was preferred and accepted.
        23 Multiple Requests Accepted - There were multiple non-conflicting requests on the resource and yours was accepted beside others.
        24 Majority Request Accepted - There were multiple conflicting requests on the resource but yours was supported by a majority and accepted.

    Conflict 3x

        Conflicts are mostly temporary. Thus a client may retry his request. But he should pay attention to updated values.

        30 Conflict - Unspecified conflict.
        31 Request Refused Temporary - Your request was refused due to a temporary conflict with another resource.
        32 Request Inferior - There were multiple conflicting requests on the resource and yours was inferior to one rival request and refused.
        33 Request Inferior to Multiple - There were multiple non-conflicting requests on the resource which conflicted to yours. Your request was refused.
        34 Request Inferior to Majority - There were multiple conflicting requests on the resource with a non-conflicting majority. Your request was refused.
        39 Permanent Conflict - Your request conflicted to an application rule. Do not retry.

    Client Error 4x

        40 Bad Request - The request could not be understood due to bad syntax.
        41 Unauthorized - This action requires authorization.
        42 Validation Failed - The requested update does not validate the required schema.
        43 Forbidden - You are not allowed to modify this resource.
        44 Not Found - The specified resource does not exist.
        45 Already Exist - The specified resource already exist

    Server Error 5x

        50 Internal Server Error
        51 Not Implemented
        53 Service Unavailable
        55 Version Not Supported

[PULSAR] Pulsar - Enabling the Real-Time Web, Fraunhofer FOKUS,
<http://www.fokus.fraunhofer.de/en/fame/_pdf/FOKUS-Pulsar.pdf>
(accessed: August 2nd, 2012)

