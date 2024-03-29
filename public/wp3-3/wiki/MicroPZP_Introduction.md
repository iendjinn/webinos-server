microPZP Introduction[¶](#microPZP-Introduction)
================================================

A full-featured PZP implements a rich set of functionality, including
the ability to run interactive webinos apps, to expose
locally-implemented APIs to those apps, and to remote connected clients.
This functionality naturally entails that the device hosting the PZP has
certain capabilities – either explicitly (for example means for display
and user interaction) and also implicitly (for example having sufficient
memory and connectivity to be able to support a PZP).

However, there is a wide class of potential webinos platforms, ranging
from small personal devices to mass-deployed IOT nodes, that are not
required to support the full range of PZP functionality and have only
limited hardware capability; factors such as device cost, battery life
or connectivity would prevent such devices from being able to host a
fully-featured PZP. These might be intended to expose
locally-implemented APIs to remote clients, but are not required to
support other PZP functionality such as being able to run local
applications.

The microPZP, specification establishes the basis on which such limited
devices can expose services conforming to the webinos architecture.

Characteristics of a micro PZP[¶](#Characteristics-of-a-micro-PZP)
------------------------------------------------------------------

A device may be unable implement a full PZP if one or more of the
following conditions are satisfied.

-   the device is minimally interactive, or its interaction is not
    user-programmable;
-   the device has limited available memory, either code space or
    runtime heap, for the PZP and/or insufficient memory to be able to
    run applications locally;
-   the device has limited network connectivity, or is connected but
    unable to support TLS or even TCP/IP.

Despite these constraints, such a device may support a microPZP if it is
technically capable of hosting at least one locally-implemented API that
can be exposed to remote clients and is capable of conformance with the
relevant webinos API specification.

Differences between a microPZP and a standalone device[¶](#Differences-between-a-microPZP-and-a-standalone-device)
------------------------------------------------------------------------------------------------------------------

webinos supports interconnection of a standalone sensor or actuator
(such as an ambient temperature sensor) to a PZP. The interconnection of
such standalone devices is not standardized by webinos but would
typically use a sensor-specific protocol (such as the Bluetooth Health
Device Profile for a blood pressure monitor). In this case the relevant
webinos API is implemented at the PZP based on data obtained from the
attached sensor, but the webinos protocol(s) terminate at the
controlling PZP.

The microPZP architecture, on the other hand, allows the webinos
protocol to be extended all the way to the end device. Certain devices
could be attached as PZP-hosted sensors or as a microPZP in their own
right. The following factors should be considered when deciding whether
a given end device should be integrated as a PZP-attached sensor or
actuator, or as a microPZP.

-   A microPZP might be intrinsically associated with a user – either it
    is natural for it to be discovered by searching for devices or
    services associated with that user, or it has state that is relevant
    to a user. A sensor, by contrast, provides information based only on
    how and where it is deployed, and this might be only indirectly
    associated with a user. For example, compare a GPS sensor which only
    reports location, with a GPS-based navigation device that also
    contains a user’s favourites, preferences, settings and history.
-   A microPZP contains sufficient local state, or sufficient
    interactive capability, that it can make non-trivial access control
    decisions itself, involving webinos subject attributes, rather than
    simply being configured to enable or disable access based on fixed
    connection parameters.
-   A microPZP is capable of attachment to a network, either via a proxy
    or directly, so as to be able to provide a service autonomously
    without continuous support from a PZP.

It is perhaps most natural to think of a micro PZP as a device with a
recognizable identity as opposed to an accessory attached to another
device.

Micro PZP implementation[¶](#Micro-PZP-implementation)
------------------------------------------------------

It is possible to implement a microPZP by subsetting the reference PZP
implementation. However, in recognition of the range of potential
microPZP devices and their limited resources, it is also appropriate to
explore alternative implementations that are entirely new and are able
to operate within a much smaller footprint by being focused on the
limited functional requirements of a microPZP.

Classes of microPZP[¶](#Classes-of-microPZP)
--------------------------------------------

There are no defined microPZP profiles. Implementations, however, fall
into the following two classes:

-   TLS-capable devices. These are capable of attachment to an IP
    network, of securely storing keys and certificates, and sustaining
    end-to-end TLS connections with clients. Other networking
    limitations may exist relative to a full PZP: for example there may
    be support for only a strictly limited number of connections.
    However, following enrolment, service discovery and binding, a
    client can interact with a service using the standard webinos
    JSON-RPC/TLS protocol.

<!-- -->

-   Tethered devices. These do not support TLS end-to-end and do not
    necessarily support IP connections. They are attached via a bus or
    Personal Area Network (PAN), and connectivity to the IP network is
    via an intermediary proxy. The requirements for the bus and the
    proxy are described in the sections that follow.

