[Back to User Identity and User Data
Management](Back%20to%20User%20Identity%20and%20User%20Data%20Management.html)

20110328 conf call on User Identity Management[¶](#20110328-conf-call-on-User-Identity-Management)
==================================================================================================

Date: 28 Mar 2011\
Time: 15:00 - 16:00 CEDT\
Bridge: PowWowNow, *Enhanced Access*, PIN: 312806, [Dial-in
numbers](http://pdf.powwownow.com/pdf/GBR_en_pwn-dial-in-numbers.pdf)

Agenda:

-   Discussion of the new version of the user identity management
    architecture
-   Discussion of interfaces to the other subtopics
-   Presentation of latest findings on related work

Action Items:

-   all: check new arch doc until 30 Mar 2011
-   Nick: talk to Dave about authentication (browser or own
    authentication architecture) during review meeting 1 Apr
-   Nick: iterate through identity management use cases until 29 Mar
-   DOCOMO: finalise SotA investigation on SIM identification and
    SIP/XMPP comparison

Attendees:

-   Sven Lachmund (DOCOMO)
-   Christian Schaefer (DOCOMO)
-   Nick Allott (Impleo)
-   Andrea Atzeni (Polito)

Discussion:

-   architecture update (Polito)
    -   Out there on the wiki since today
    -   Little updates on the core
    -   No further comments received since last 2 weeks
        -   No need for authentication if User wants to connect to
            services which need no authentication
        -   Nick: user is always to be authenticated to know who wants
            to access the resource even if there is no need for
            authentication for an app/device for using the resource, but
            this can only be checked in the policy if the user is known
    -   Anonymity
        -   Group signature, DAA and Idemix investigated
        -   Anonymous cloud allows devices to use a sig which is shared
            among all members of the same anonymous cloud, thus users
            cannot be distinguished
            -   If the webinos network = anonymous cloud, only the
                device used is anonymised, but not the user
            -   Makes probably sense to defer anonymity to second
                project phase
            -   Zero knowledge proofs may make sense here (ask Dave)
    -   Auth in the browser
        -   Idea by Dave: credentials reside in each user’s browser on
            all devices
            -   How to allow SSO across all devices of the same user?
            -   How to exploit non-webinos identities for auth?
        -   This is why the auth arch is proposed for webinos
    -   Next steps
        -   Check new arch document (all)
        -   Go through Nick’s use cases and see if the arch covers them
        -   Check against policy examples of John (implicit binding of
            user and app after authenticating the user)
        -   match SotA with arch
-   other subtasks
    -   discovery
        -   addressing the user based on crypto identifiers should be
            discussed with discovery and overlay subtopic people
        -   common identification of users and devices to be sorted out
            in the f2f meeting in May as both subtopic groups are not
            yet ready for such a discussion
    -   overlay network
        -   to be discussed with Dave
    -   Privacy & security
        -   Currently only requirement: unlinkability of users and
            identifiers
-   SotA
    -   SIP and XMPP ongoing investigations (needs more time due to
        complexity)
    -   DAA, group signatures and Idemix are updated on the wiki
    -   SIM identification ongoing investigations
-   General remarks by Nick: to push integration with other subtopics
    forward, we can
    -   Integrate with Dave’s demo
    -   Think from developer’s perspective in order to understand their
        needs
        -   Start with existing APIs and see how far they meet our
            requirements

Next meeting: conf call on Wed 30 Mar 2011, 17:00 CEDT

