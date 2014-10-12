Policy Protection[¶](#Policy-Protection)
========================================

If the device supports a private folder in the internal storage, we can
store policies in this folder and sign them in order to guarantee
authenticity and integrity.

State of Art[¶](#State-of-Art)
------------------------------

### BONDI[¶](#BONDI)

In BONDI policies are stored in xml fragments secured by the XML
Signature Syntax and Processing (Second Edition)
[<http://www.w3.org/TR/xmldsig-core/>]: “This document specifies XML
digital signature processing rules and syntax. XML Signatures provide
integrity, message authentication, and/or signer authentication services
for data of any type, whether located within the XML that includes the
signature or elsewhere.”

Open issues[¶](#Open-issues)
----------------------------

-   What if a device cannot store policies in a private folder, or
    cannot store them at all?
-   Trusting remote PAP
-   Avoid tampering during synchronization and update processes

