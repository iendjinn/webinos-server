User Authentication - Gap analysis[¶](#User-Authentication-Gap-analysis)
========================================================================

**\*\***\*NOT PART OF THE SPEC (materials and thoughts developed during
the spec work, but not part of the deliverable)

According to the Specification in T3.1
(</wp3-1/wiki/Spec_-_Authentication#Conceptual-Architecture>),\

    Within webinos, the authentication and identity issues need to be addressed at two distinct levels.

       1. Intra webinos authentication: the mechanisms via which users and devices are authenticated by the personal zone
       2. Extra webinos authentication: which describe some utility capability, where the personal zone hub can assist in the authentication against multiple external web applications and services, which are not necessarily webinos based.

Main difference[¶](#Main-difference)
------------------------------------

Referring to the above statement, in case of user authentication, at
implementation there is no a clear distinction between Intra and Extra.
In particular, the method to authenticate a user against a PZH is OpenID
(which is external).

In case of device authentication, in intra case, we do authenticate
devices by personal zone i.e. through device certificate.

Authentication[¶](#Authentication)
----------------------------------

    authentication is done in two steps: first the user is authenticated to at least one of his devices. Second the device communicates on behalf of the user identifying itself with its public key and its certificate.

Actually the user is always authenticated to the PZH.

The Authentication API has been designed to provide authentication to
the present device, exploiting mechanisms of the underlying OS. And
devices communicates through a secure TLS exchange, based on
certificates signed by the PZH (which acts as a Personal CA).\
Authentication API is partially developed, for Linux and MacOSX, but was
not integrated with PZH, it should be probably be integrated to mention
we authenticate versus device using Authentication API.\
Note: the sort of the authentication API is at the moment unclear and
need some further investigation/scenarios development.

User identifiers[¶](#User-identifiers)
--------------------------------------

     For user visible identifiers we use:
        * the URI of the PZH, or
        * some piece of data (e.g. the user's email address) that reliably
    resolves (e.g. via Webfinger) to a single PZH URI.

Presently, we use data derived from openID attributes to define a PZH
name, and no webfinger mechanism is implemented.

User authentication level[¶](#User-authentication-level)
--------------------------------------------------------

Unimplemented, currently the system can distinguish only if
authenticated or not.\
There is no the required built-in secure storage (as mentioned above,
the device keyring when available) and there is no the remote delete.

User authentication notification[¶](#User-authentication-notification)
----------------------------------------------------------------------

    event-based notification of user authentication each time the user authenticates without request by the PZP

Not implemented a mandatory system authentication notification. An
application can discretionary allow this with the Event API. Moreover,
any pzp joining is do updated on PZH and its presence informed to
corresponding pzp.\
Note: It was not explicit (in the 3.1 specification) where user
authentication should be notified, and for what use.

> > > John: I don't understand this.

