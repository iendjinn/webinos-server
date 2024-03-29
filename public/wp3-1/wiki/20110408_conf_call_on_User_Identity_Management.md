[Back to User Identity and User Data
Management](Back%20to%20User%20Identity%20and%20User%20Data%20Management.html)

20110408 conf call on User Identity and User Data Management[¶](#20110408-conf-call-on-User-Identity-and-User-Data-Management)
==============================================================================================================================

Date: 8 Apr 2011\
Time: 11:00 - 12:00 CEDT\
Bridge: PowWowNow, *Enhanced Access*, PIN: 312806, [Dial-in
numbers](http://pdf.powwownow.com/pdf/GBR_en_pwn-dial-in-numbers.pdf)

Agenda:

-   further details of the architecture, based on activity diagrams of
    the use cases

Action Items:

-   Sven: Draw flow chart of the big picture of the entire
    identification and authentication process
-   Sven: Collect questions for discovery people and post them to the
    discovery group
-   John, Steffen: flesh out details on offline case, local cache, local
    self-hosted IDP
-   Andrea: zero-proof investigations with Dave
-   Nick, Habib: small Bluetooth test
-   Sven: collect features of IDP

Attendees:

-   Nick
-   John
-   Andrea
-   Sven
-   Christian
-   Steffen
-   Habib

Discussion:

-   All today's discussion is based on the current [Authentication
    Architecture
    Draft](http://dev.webinos.org/redmine/attachments/492/webinos_AA_proposal_v2.ppt "v2")
    and the sequence diagrams for the [Use Cases](.html)
-   Discovery is similar in scenarios 1 and 2 but it might be different
    in reality once we know how discovery is actually done
    -   Discovery may affect the steps thereafter
    -   Need to discuss with the discovery people
    -   Nick: Discovery call should be intercepted by policy mechanism
        as this is security/privacy critical
    -   Nick: in online case, use IDP for mapping of user and device ID
    -   Nick: local (= no Internet access) is tricky:
        -   Find all discoverable devices, find own discoverable devices
            (no central entity available)
            -   Broadcast, nothing is known
            -   Privacy issue
        -   Physical mapping required
-   IDP
    -   Multiple independent IDP will be issued
    -   Performs
        -   Attestation and user auth
        -   Mapping of user ID and the set of devices belonging to that
            user
        -   This information needs to be cached on all devices of the
            user
            -   Crypto required to store the info securely?
            -   Sync required
            -   If there is a master among the user’s devices, sync is
                more easy
            -   Local temporary copy of the IDP should be a local Web
                server
                -   Same technologies/protocols as real IDP
                -   Sync is important
                -   Caches only data about the owner and his devices;
                    stores nothing about any other users (scalability!)
-   User data management
    -   Sync of IDP and local cache on all devices of the user
        -   Steffen: reliability problem when integrating a new device
        -   Policy management has the same problem
            -   Joining effort may make sense (John, Steffen)
        -   Can we dare to allow new devices to join only if there is
            online connectivity
-   Device discovery
    -   Agreement on using IDP for user ID / device ID mapping required
    -   Can the discovery process distinguish own devices from all other
        devices?
    -   Andrea: encrypted HELLO response (see sequence diagrams) may
        make sense during discovery. Is that possible/supported?
    -   Discovery can be costly in terms of power consumption,
        computation and time. What about limited devices?
    -   Small Bluetooth (BT) discovery test with Habib and Nick: Bind
        two devices in unconnected state and authenticate users during
        this step requires local auth server
        -   Steffen: in offline case no auth can be done on behalf of an
            online IDP
        -   Local cache of user credential from the IDP required to be
            able to authenticate the user in the offline case
-   IDP
    -   Instead of the central online IDP, it can be hosted on one of
        the own devices. Does that ease things?
    -   Cannot be a particular one as this one may not be reachable in
        offline case
-   Three cases to distinguish
    -   Own cloud: only devices of the own personal cloud of a user are
        communicating
        -   Due to pre-shared key relatively easy
    -   Access services on the web
        -   Due to Internet access and accessibility of IDP relatively
            easy
    -   Add other user’s device to a personal cloud temporarily without
        internet access
        -   Most tricky one
        -   Andrea: See the three alternatives in the sequence diagrams
            for pairing
        -   John: alternative: grant temporary token: start out-of-band
            communication (e.g. PIN in BT pairing) and then issue token
            to use
        -   Steffen: requires UI; what about sensors? All webinos
            devices have UI

Next meeting: conf call on Thu 14 Apr 16:00 - 17:00 CEDT

