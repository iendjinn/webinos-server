Components[¶](#Components)
==========================

Policy Manager[¶](#Policy-Manager)
----------------------------------

### Description[¶](#Description)

XACML based policy manager component.

### Interfaces[¶](#Interfaces)

  ---------------- ---------- -------------- -----------
  Interface        Type       Access Right   Privilege
  enforceRequest   provided   trusted        normal
  ---------------- ---------- -------------- -----------

### Structure[¶](#Structure)

![](pmAssetModel.jpg)

### System Requirements[¶](#System-Requirements)

  ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------ ----------- ---------------
  Name                               Description                                                                                                                                                                                                 Asset              Rationale   Fit Criterion
  API control                        Users and other stakeholders shall be able to control access by web applications to JavaScript APIs. These APIs may allow access to local and remote resources.                                             Access Requestor   None        None
  Context-sensitive access control   The platform shall allow context-sensitive access control decisions: e.g. these may change depending on the environment.                                                                                    Request Context    None        None
  Device policy                      Users shall be able to create both device-specific and device-agnostic policies.                                                                                                                            Access Requestor   None        None
  Policy synchronisation             The platform shall provide synchronisation for access control policies, so that policies can be desceibed on one platform and enforced on all.                                                              PDP Cache          None        None
  Qualified data use                 The platform shall protect user privacy: access requestors shall be able to qualify how they will use the data they are requesting, and users shall be able to express constraints about data disclosure.   Request Context    None        None
  ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------ ----------- ---------------

Discovery Module[¶](#Discovery-Module)
--------------------------------------

### Description[¶](#Description)

Discovery API implementation

### Interfaces[¶](#Interfaces)

  ---------------- ---------- -------------- -----------
  Interface        Type       Access Right   Privilege
  enforceRequest   required   trusted        normal
  authenticate     provided   trusted        normal
  ---------------- ---------- -------------- -----------

### Structure[¶](#Structure)

![](dmAssetModel.jpg)

### Requirements[¶](#Requirements)

None

Discovery Client[¶](#Discovery-Client)
--------------------------------------

### Description[¶](#Description)

Discovery API client

### Interfaces[¶](#Interfaces)

  -------------- ---------- --------------- -----------
  Interface      Type       Access Right    Privilege
  authenticate   required   authenticated   normal
  -------------- ---------- --------------- -----------

### Structure[¶](#Structure)

![](dcAssetModel.jpg)

### Requirements[¶](#Requirements)

None

