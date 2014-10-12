Implementation objectives from a technical perspective

• microPZP applies to a device with 2Mb memory, no display and where
full PZP is not possible .\
• microPZP always has a co-responding PZP which manages functions on
it’s behalf\
• microPZP should have access to a network connection\
• Enrolment microPZP should be via the co-responding PZP.\
• Certificate management - microPZPs can handle certificates.\
• MicroPZP APIs - it have to device specific and are restricted to no
more than two APOs. The APOs should be specific purpose PZP and not
general purpose PZP.\
• microPZP administration –This should be same as standard PZP\
• Connection manager functionality –microPZP should find other PZP and
connect. So microPZP should have its private key prior to connect to
peer PZP.\
• Discoverability (must be discoverable) - It should be able to find
other PZPs.\
• Secure communication is managed by TLS

The following represent implementation guidelines and suggestions for
microPZP.\
Since microPZP allows native implementations, the technologies suggested
here are indicative

-   nodejs is good but is quite heavy weight. The v8 engine or TinyJS is
    recommended
-   Connectivity could be Bluetooth/ZigBee/Serial.
-   polarssl and matrixssl for secure connections via TLS.
-   COAP and MQTT will be universal protocols for the internet of
    things, COAP might be more used for configuration or actuation
    control while MQTT is often used in sending real time events.

