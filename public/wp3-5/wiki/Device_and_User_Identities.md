Device and User Identities[¶](#Device-and-User-Identities)
==========================================================

This section describes the *identifiers* used for devices and users.

Edit: this ought to link to
</wp3-3/wiki/Entity_Definitions>

We attempt to follow project guidelines:
</wp4/wiki/Recommendations_for_webinos_design>

How are devices identified?[¶](#How-are-devices-identified)
-----------------------------------------------------------

Devices are identified *internally* through their public key. This
public key has a certificate containing their friendly name?

Devices are identified *by users* through their friendly name. The
webinos PZP and PZH can translate friendly names into identifiers

How are users identified?[¶](#How-are-users-identified)
-------------------------------------------------------

Users are identified in several different ways internally and
externally.

### Internally: in policies and preferences[¶](#Internally-in-policies-and-preferences)

Users are identified by their PZH URL, which is strongly connected to
their master PZH public key\
Where no such connection can be established (e.g. they do not have a
valid SSL certificate), then the PZH public key is the identifier.

### Externally: displayed to other users, used to register a new personal zone hub.[¶](#Externally-displayed-to-other-users-used-to-register-a-new-personal-zone-hub)

User identity is established through their email address connected to
the OpenID account they used to establish the personal zone.

However, as there is no direct look-up provided from OpenID account to
webinos personal zone, webinos will also allow the PZH URL to be used as
an identifier.

    There's a confusion between identity and address here.
