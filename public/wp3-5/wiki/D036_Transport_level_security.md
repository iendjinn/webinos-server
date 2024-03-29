DEPRECATED - see </wp3-3/wiki/Personal_Zone_Key_Infrastructure>[¶](#DEPRECATED-see-httpdevwebinosorgredmineprojectswp3-3wikiPersonal_Zone_Key_Infrastructure)
====================================================================================================================================================================================================

Transport level security[¶](#Transport-level-security)
======================================================

TLS Servers on the PZH[¶](#TLS-Servers-on-the-PZH)
--------------------------------------------------

Port

Description

Incoming connections from PZPs (zone devices) as well as connections
from external (friend) PZHs.

Parameters

rejectUnauthorized = false, requestCert = true

Trusted certificates

PZP certificates & trusted external (connection) PZH certificates

Authentication

Entities with self-signed certificates are assumed to be new PZPs. The
enrolment process is documented ....

Entities with PZH certificates are assumed to be a device within that
user's PZH

Entities with PZP certificates are assumed to be zone devices

Outgoing TLS connections on the PZH[¶](#Outgoing-TLS-connections-on-the-PZH)
----------------------------------------------------------------------------

Port

Description

Outgoing connections to other PZHs

Parameters

Trusted certificates

Just the certificate of the PZH we are contacting. May not be entirely
trusted

Authentication

The remote party must use the certificate we are expecting

Any incoming data from this connection must be mapped to the user of the
PZH we are connecting to. They may not be trusted to do anything else.

TLS Servers on the PZP[¶](#TLS-Servers-on-the-PZP)
--------------------------------------------------

Port

Description

Incoming connections from PZPs (zone devices) as well as connections
from external (friend) PZPs.

Parameters

rejectUnauthorized = false

Trusted certificates

PZP certificates & trusted external PZH master certificates

Authentication

Entities with PZP certificates we don't recognise must go through the
peer-to-peer certificate exchange process, documented ...

Entities with PZP certificates from other zones are assumed to belong to
the user connected to the PZH CA certificate in the chain

Entities with PZP certificates from the personal zone are assumed to be
the same user

Outgoing TLS connections on the PZP[¶](#Outgoing-TLS-connections-on-the-PZP)
----------------------------------------------------------------------------

Port

Description

Outgoing connections to other PZPs

Parameters

Trusted certificates

Just the certificate of the PZP we are contacting, if they are known. If
not, then just our own CA certificate.

Authentication

The remote party must use the certificate we are expecting, if we are
expecting one.

If the remote party is new (e.g. we have not connected to them before,
no certificate known) follow the peer-to-peer certificate exchange
process, documented ... )

The remote party must be a PZP, not a PZH.

The remote party user identity must be mapped to the identity of its
master CA certificate

