Identity[¶](#Identity)
======================

  ----------------------------- -------------------- -------------------------------- ----------------
  Requirement name              API name             Interface                        Method
  Addressable applications      -                    -                                -
  App instance authentication   -                    -                                -
  App provider proof            -                    -                                -
  Application authentication    -                    -                                -
  Application identity          -                    -                                -
  Component address             -                    -                                -
  Component attestation         -                    -                                -
  Developer identity proof      -                    -                                -
  Device identity               -                    -                                -
  Device privacy preferences    -                    -                                -
  Disabled identity broadcast   -                    -                                -
  Identity claims               -                    -                                -
  Identity communication        -                    -                                -
  Mutual authentication         -                    -                                -
  Platform attestation          Attestation API      WebinosAttestationInterface      attestPlatform
  Remote device identity        -                    -                                -
  Runtime authentication        -                    -                                -
  Service identity              Discovery API        DiscoveryInterface               getServiceId
  Session device identity       -                    -                                -
  Two factor authentication     -                    -                                -
  Unlinkable user identity      -                    -                                -
  User identity                 Authentication API   WebinosAuthenticationInterface   authenticate
  ----------------------------- -------------------- -------------------------------- ----------------

Notes:[¶](#Notes)
-----------------

Some requirements could be satisfied by some restrictive hypothesis.

1.  **Attestation API** is currently considered deprecated in T3.4
2.  **Addressable applications**\
    instances of applications are identifiable using
    PZH\_name/PZP\_name/random\_number. However, presently this
    functionality is not accessible through a documented API (According
    to mail to WP4 of 23 of MArch from Andre Paul, it seems possible to
    access\
    through eventAPIToUse.myAppID or webinos.messageHandler.getOwnId(),
    However, not an API but respectively an attribute and a core webinos
    method.\
    Furthermore, this addresses instances, and from that it is not
    possible to understand what application really is, without some
    other information.
3.  **Application identity**\
    If some method would exist to derive identity from address (and
    vice-versa) the thoughts from previous point applies here. However,
    it's worth to remark that address and identity are different
    concepts (even if overlaps in some cases).
4.  **Component address**\
    Component definition is a little vague. For PZP we have the string
    PZH\_name/PZP\_name/ (see previous points). However, this restricts
    to PZH, PZP and (instance of ) applications only.
5.  **Component attestation**\
     The (no longer valid) attestation API provides only platform
    attestation, not "component" attestation
6.  **Device identity**\
     if we consider device coincident to the PZP, and we can retrieve it
    in the sense of PZP name (not through and API, but through the
    string PZH\_name/PZP\_name/)
7.  **Identity communication**\
    If identity=address, it is sent and received in any message
    exchange. In contrary case, the information is not available.
8.  **Remote device identity**\
    Same discussion as above in the device identity. This could be
    complicated by the fact that this scenario is inter-zone. In theory,
    since there is the PZH\_name in the string it should work as in the
    intra-zone device identity.
9.  **Mutual authentication**\
    It's realized at device level (after the enrollment) between PZH and
    PZP thanks to TLS security exchange (nothing to do with any API).

Review[¶](#Review)
------------------

[John] - This mapping looks good.

