Introduction[¶](#Introduction)
==============================

It is becoming increasingly common for smart phones and other devices to
include support for NFC. NFC Tags are inexpensive and widely used. There
are many potential applications, e.g. here are just a few:

-   Electronic payments (tap to pay)
-   Exchange of contact details (an electronic business card)
-   Exchange of security credentials e.g. for a WiFi network
-   Credentials for induction of a new device into a user's Personal
    Zone
-   Tap to play - automatic induction into a multiplayer game

The phase 2 NFC API provides for a range of capabilities.

-   The means to register listeners for the presence of NFC Tags
-   The means to read and write NDEF records to NFC Tags
-   The means to set Tags to prevent further write operations
-   The means to configure a NFC device to push NDEF messages to other
    such devices
-   The means to establish a temporary bidirectional asynchronous
    message channel

This specification starts with some informative examples for how the API
can be used. The next section deals with the normative definition of the
API and is followed by the full WebIDL definition of API. The
specification closes with acknowledgements and references.

