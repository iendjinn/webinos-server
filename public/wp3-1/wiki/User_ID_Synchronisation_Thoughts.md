User ID Synchronisation[¶](#User-ID-Synchronisation)
====================================================

Issue[¶](#Issue)
----------------

-   The User -\> Device relation needs to be mapped somewhere, so that
    devices can communicate with each other
-   This may be more complicated, e.g., there may be a level of
    indirection where there are "owned" devices, "friends" devices,
    "work" devices, etc:
    -   User -\> Role
    -   Role -\> Device

<!-- -->

-   The knowledge of these things ("associations?") will change, and
    needs to be synchronised between certain devices. Furthermore, it
    needs to be cached locally so that devices do not need to contact a
    central repository to access a version of this information
-   Policy information also has similar requirements, so will also be
    considered here. Policies will need to synchronise regularly to
    reflect updates to user preferences and new applications. Examples
    of why this is needed can be seen [here](here.html)
-   Proposal to have a centralised IdP as well as each device providing
    a local IdP with cached information.

Requirements and scenarios[¶](#Requirements-and-scenarios)
----------------------------------------------------------

-   A description language for stating device groups and associations
    with users
-   An offline device-only IdP which has stored associations and
    identifiers.
    -   A way to query this
-   The protocol for synchronising stored device identifiers and lists
    -   For example: the first time a user attempts to use another
        device, the IdP is contacted. If this is successful, a brief
        synchronisation happens (unless it has happened recently).
    -   All devices attempt to synchronise periodically.
    -   Attestation of last device synchronisation date possible?

Proposed infrastructure[¶](#Proposed-infrastructure)
----------------------------------------------------

### APIs[¶](#APIs)

### Example workflow[¶](#Example-workflow)

Security and Privacy considerations[¶](#Security-and-Privacy-considerations)
----------------------------------------------------------------------------

-   Policies reveal the identity of applications and devices, as well as
    potentially the user and context. They should therefore be kept
    *confidential*.
-   Associations reveal the identity of devices and users, as well as
    how they work together and potentially routing information. They
    should therefore be kept *confidential*.
-   Policies control how device capabilities and user data are accessed.
    They must therefore be protected from unauthorised modification.
    *Integrity* and *Authorization* required.
-   Updates to policies or associations must propagate - this means
    devices must attempt to synchronise regularly. This should not be
    prevented.
-   The system as a whole must remain capable of functioning despite
    limited or no internet connectivity. *Availability* is therefore
    important.
-   Privacy aims include *anonymity*, *pseudonymity* and *unlinkability*
    where possible.

These aims mean that updates and communications about policies and
associations should be done either in a secure transport session (HTTPS)
or via message-level encryption (SAML or WS-\*). The advantage of a
secure transport session is that it is easy to establish, involves
little extra work or XML processing. The advantage of message-level
crypto is that updates can take any path, and could potentially be
forwarded like tokens by a currently-untrusted service provider or newly
authorised device.

Performance considerations[¶](#Performance-considerations)
----------------------------------------------------------

While this problem is not so much related to pure User ID Management, it
may become a problem for Policy Management as well as User Data
Management, as these areas most likely handle a much bigger portion of
data. Therefore, data should be distributed with performance issues in
mind, i.e. a mobile device that does only need information about the
user's age, should only have a local copy of this specific datum. The
complete data set may then be hold by a central instance or virtually
through all devices & IdPs.

