Device enrolment[¶](#Device-enrolment)
======================================

Gap Analysis[¶](#Gap-Analysis)
------------------------------

Based on material given in the first deliverables - 3.3 and 3.5 - the
following differences are noted

### Sources[¶](#Sources)

#### From the requirements[¶](#From-the-requirements)

  Requirement                      Implemented?   Specified?       Details
  -------------------------------- -------------- ---------------- ----------------------------------------------------------------------------------------------------------------------------
  Default policy                   No.            No.              A default security policy shall be created for a new webinos runtime installation.
  Device-identity binding          Yes.           Needs updating   Personal devices shall be bound to its owner's identity.
  Remote device identity           Sort-of.       Needs updating   A webinos device Identifier shall be used to identify a webinos-installed device to remote servers and cloud services.
  Runtime authentication           Yes.           Needs updating   A webinos runtime installed in a device shall unambiguously authenticate itself to authorised entities.
  Two factor authentication        Sort-of.       Yes?             webinos shall provide a conjoint user and device identifier to webinos compatible end-points.
  Bound data removal               No.            No.              Configuration data shall be removed from a device once that device has been unbound from its user identity.
  Personal device management       Not really.    No.              The webinos runtime shall include interfaces to allow end-users to manage the interactions between their personal devices.
  Personal device authentication   Sort-of.       Needs updating   Personal devices shall be authenticated before their services are made available.
  Unbinding initialisation         No.            No.              webinos software and meta-data shall be initialised when a personal device is no longer bound to a user identity.

#### From T3.5 [Personal Zone Security](/t3-5/wiki/Deliverable_Specifications_Personal_Zone_Security)[¶](#From-T35-Personal-Zone-Security)

    When a new device is first configured, or webinos is installed on it for the
    first time, it needs to be registered with your personal zone. If you have a
    device that is already registered, it may be possible to peer that device with
    the new one, e.g. using some form of local device to device communication such
    as near field communication (NFC), Bluetooth, or WiFi, or even with a USB stick.
    The peering process involves a human level protocol step, such as entering a one
    time PIN, or verifying that such a PIN has been passed between the two devices.
    If this is the first device you are adding to your Personal Zone, or if the two
    devices have no means to communicate locally, then a fall back is to register
    the device directly with the Personal Zone Hub via a web browser using the
    credentials issued to you by the Zone's hosting service.

    Finally, the most user-friendly way of creating a paired device and personal
    zone hub is to ship the device to the user pre-registered with the Personal Zone
    Hub. This can be done in a number of ways. If the user has no Personal Zone Hub
    originally, the device retailer might create a new one and pair the devices
    before the user purchases them. Alternatively, they might pre-enter the user's
    existing personal zone hub address into the device to allow users to only
    perform one initial authentication.

#### From [T3.1 Authentication](/wp3-1/wiki/Spec_-_Authentication)[¶](#From-T31-Authentication)

    During the installation process, the PZP generates its new and unique
    public/private key pair. It stores the private key in its secure storage and
    submits the public key to the PZH. The PZH stores the public key and issues a
    certificate for the PZP. Once the PZP obtained the certificate, it can prove to
    other entities that it is a legitimate affiliate of the zone.

    Before installation, it is required to be sure that the PZP talks to the desired
    PZH and vice versa. Similar to the case where communication between two personal
    zones is set-up, a separate channel is used to verify that the communication end
    points are the desired ones. First, the user authenticates at the PZH and
    executes the add device feature there. Second, the user enters the identifier
    (URI) of the PZH on the new device. Third, the PZH and the new device establish
    a secure connection via Diffie-Hellman key exchange.

    Fourth, the PZH displays a random number which it also sends to the new device.
    The user has to verify that both are the same. Fifth, the user downloads and
    installs the PZP as described above. Since the new device may not have a PZP
    yet, all the steps can be performed in an ordinary Web browser on the new
    device.

#### From [T3.1 Security](/wp3-1/wiki/Spec_-_Security)[¶](#From-T31-Security)

    Registering device 'F' as being a trusted device with respect to device 'D' and device 'E':

    1. Anna has just bought a new tablet PC ('F'), and would like it to automatically synchronise with other devices
    2. She uses it to discover her mobile phone ('D'), a webinos device.
    3. On discovery, she selects the mobile phone symbol and chooses to join the "local webinos device cloud" 
    4. Untrusted message from tablet to phone: "device join", device ID
    5. This prompts her mobile phone to authenticate her
    6. She enters her credentials into the phone
    7. The phone adds this device to a "known" and "personal devices" set
    8. The tablet PC downloads the relevant set of policies (as well as profile info - out of scope ) 
       from the mobile phone and applies them. This includes the identity of other devices in the cloud.

#### From the WP4 wiki[¶](#From-the-WP4-wiki)

List of methods here:
</wp4/wiki/PZP_Device_Enrolment>

#### From the implementation[¶](#From-the-implementation)

A new PZP requires a code to join a personal zone. The hub must have
been fore-warned that this PZP is expected, and provides a limited time
period (and number of guesses of the code) in which the new device can
be added.

Enrolling a new device requires a web browser and for that devices to
have an internet connection.

#### From [T3.5 Phase 2](/t3-5/wiki/D036_Installing_a_PZP)[¶](#From-T35-Phase-2)

This page links to WP4 and a [sequence diagram for enrolment via the
PZH.](/t3-5/wiki/D036_Installing_a_PZP)

### Differences[¶](#Differences)

-   Peer-to-peer enrolment
    -   The phase 1 specs describe a peer-to-peer enrolment process
        which is unimplemented as yet. The WP4 wiki, T3.5 phase 2 and
        others also mentioned it. *Habib: This is being under
        development for sometime*
-   Pre-enrolment
    -   The phase 1 specs and the WP4 wiki mention pre-enrolment of a
        device when shipped to a user. *Habib: Is this necessary and
        possible?*
-   General level of detail and accuracy
    -   Not enough detail is provided on any of the enrolment processes,
        nor how to create and install a PZH
-   There is approximate agreement about enrolment via PZH and a web
    browser.
    -   However, the T3.1 authentication spec mention Diffie Hellman
        (not required), a compare-and-confirm method (not implemented in
        favour of code copying system). The WP4 implementation can also
        be done via the PZH on any web browser, not necessarily the
        current device.
    -   The 3.1 Security spec mentions device notifications and device
        IDs, neither of which are implemented or recommended any more.

### Summary analysis[¶](#Summary-analysis)

1.  Consolidate all material into one "enrolment specification" or even
    a "personal zone device lifecycle" specification to include:
    1.  How a PZH is created (no existing device assumed)
    2.  How a PZP is added to an existing zone
        1.  When this is the first PZP in the zone
        2.  When another device exists

    3.  How a new zone is set up (new device + no existing PZH)
    4.  How a device is de-registered from a personal zone

2.  Reduce scope to define just web-based device enrolment. This is
    implemented and mentioned in existing specifications. Remove the
    peer-to-peer enrolment processes and the pre-enrolment processes in
    the spec. Make the spec suitably extensible such that new methods
    could be slotted in.
3.  The most accurate and useful information is on the WP4 wiki - use
    and expand that, in combination with the T3.5 protocol diagram.
4.  Define a new protocol for device enrolment which does not require
    copying a code, but works from a WRT directly and uses a privileged
    webinos API.
5.  Rewrite authentication specification to remove inaccuracies defined
    earlier

Specification[¶](#Specification)
--------------------------------

....

