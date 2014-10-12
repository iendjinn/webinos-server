Component and connector diagrams[¶](#Component-and-connector-diagrams)
======================================================================

user authentication[¶](#user-authentication)
--------------------------------------------

### Components and connector architectural view[¶](#Components-and-connector-architectural-view)

![](openid_auth_cnc_odg.png)

### Synopsis[¶](#Synopsis)

Model illustrating OpenID user authentication.

### Components[¶](#Components)

-   Browser
-   Browser's webinos script (webinosPzh.js)
-   OpenID Module
-   Identity Provider
-   PZH Webserver (pzh\_webserver.js)

### Connectors[¶](#Connectors)

  ---------------------- ------------------- ---------------------------------- ------------------- -------------------------------------------------- ------------- ---------- --------------
  Connector              From                Interface                          To                  Interface                                          Asset         Protocol   Access Right
  authenticate           browser             webinosPZH.commands.authenticate   webinosPzh.js       commands.authenticate                              JSON Object   -          untrusted
  send\_authenticate     webinosPzh.js       webinosPZH.send                    pzh\_webserver.js   listener on "message" connection event (no name)   JSON Object   https      trusted
  openid\_authenticate   pzh\_webserver.js   authenticate                       OpenID Module       -                                                  JSON Object   -          trusted
  send\_auth-url         pzh\_webserver.js   connection.send                    webinosPzh.js       messageReceived                                    JSON Object   https      trusted
  load                   webinosPzh.js       window.location.href               browser             -                                                  JSON Object   -          untrusted
  callback               Identity Provider   -                                  pzh\_webserver.js   callback (no name)                                 JSON Object   https      trusted
  redirect               pzh\_webserver.js   writeHead                          browser             -                                                  JSON Object   https      trusted
  ---------------------- ------------------- ---------------------------------- ------------------- -------------------------------------------------- ------------- ---------- --------------

Device Authentication[¶](#Device-Authentication)
------------------------------------------------

### Components and connector architectural view[¶](#Components-and-connector-architectural-view)

![](device-held_private_key_cnc_odg.png)

### Synopsis[¶](#Synopsis)

Model illustrating authentication via device-held private key.

### Components[¶](#Components)

-   Authentication API (webinos.authentication.rpc.js)
-   keystore manager (keystore.node)
-   PZP (pzp\_sessionHandling.js)
-   PZP starting script (webinos\_pzp.js)
-   PZH Farm (pzh\_farm.js)

### Connectors[¶](#Connectors)

  --------------- ------------------------- --------------- ------------------------------- -------------------- ------------- ---------- --------------
  Connector       From                      Interface       To                              Interface            Asset         Protocol   Access Right
  authenticate    keystore.node             authenticate    webinos.authentication.rpc.js   authenticate         JSON Object   -          trusted
  get             pzp\_sessionHandling.js   get             keystore.node                   get                  JSON Object   -          trusted
  connect         pzp\_sessionHandling.js   connect         pzh\_farm.js                    callback (no name)   JSON Object   TLS        trusted
  initializePzp   webinos\_pzp.js           initializePzp   pzp\_sessionHandling.js         initializePzp        JSON Object   -          trusted
  --------------- ------------------------- --------------- ------------------------------- -------------------- ------------- ---------- --------------

Presence[¶](#Presence)
----------------------

![](presence_cnc_odg.png)

### Synopsis[¶](#Synopsis)

Model illustrating how to autenticationg to the local device.

### Components[¶](#Components)

-   Authentication API (webinos.authentication.rpc.js)
-   PZP
-   OpenID Authentication
-   Policy Manager (policymanager.js)

### Connectors[¶](#Connectors)

  ---------------------- ------ -------------- ------------------------------- ---------------- ------------- ---------- --------------
  Connector              From   Interface      To                              Interface        Asset         Protocol   Access Right
  authenticate           PZP    authenticate   webinos.authentication.rpc.js   authenticate     JSON Object   -          trusted
  openid\_authenticate   PZP    -              OpenID Authentication           -                JSON Object   -          trusted
  enforceRequest         PZP    -              policymanager.js                enforceRequest   JSON Object   -          trusted
  ---------------------- ------ -------------- ------------------------------- ---------------- ------------- ---------- --------------


