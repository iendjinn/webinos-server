Policy Architecture[¶](#Policy-Architecture)
============================================

![](PolicyArchitecture.jpg)

Synopsis[¶](#Synopsis)
----------------------

Model illustrating webinos policy architecture

Components[¶](#Components)
--------------------------

-   Policy Manager
-   Discovery Module
-   Discovery Client

Connectors[¶](#Connectors)
--------------------------

  ------------------- ------------------ ---------------- ------------------ ---------------- ----------------- ---------- --------------
  Connector           From               Interface        To                 Interface        Asset             Protocol   Access Right
  Discovery AuthN     Discovery Client   authenticate     Discovery Module   authenticate     JSON-RPC Object   JSON-RPC   trusted
  Policy connection   Discovery Module   enforceRequest   Policy Manager     enforceRequest   JSON Object       TLS        trusted
  ------------------- ------------------ ---------------- ------------------ ---------------- ----------------- ---------- --------------


