Introduction[¶](#Introduction)
==============================

The purpose of the [Webinos project](Webinos%20project.html) is to
define and deliver an Open Source platform, which will enable web
applications and services to be used and shared consistently and
securely over a broad spectrum of connected devices.

To achieve this, it is insufficient to limit the specification to APIs
to be provided by individual devices to allow access to device
resources, but it is also necessary to define and provide an
architecture and infrastructure to allow applications to run not only on
a single device, but also across devices and domains.

Increasingly users own more connected devices and users are no longer
satisfied to handle devices and applications on an individual basis, but
expect applications to keep preferences and status information
synchronized across multiple domains, devices and, if appropriate,
applications.

This applies to device features as well. Already many modern TV sets
allow the use of smart phones as input devices, though this is currently
handled on a proprietary manner. A modern web based platform needs to
define and provide functionality to handle such interactions in
consistent and, for the application programmer, easily accessible
manner.

Other issues that require services that go beyond the capability of
individual devices are the handling of user authentication, cross device
events, metrics and application distribution.

In all these cases, it is not sufficient to provide a simple device API,
but it is also required to describe the underlying architecture and
service requirements.

The tagline of the webinos project is "Secure Web Operating System
Application Delivery Environment", indicating that security is a
significant part of the project. In the specification part of the
project, the handling of security and privacy aspects and the creation
and definition of a security architecture was covered by an individual
project task to ensure that the topic is handled adequately.

To cover all areas adequately, the webinos specification consists of
three parts:

-   D03.1 Webinos phase I architecture and components
-   D03.2 Webinos phase I device, network, and server-side API
    specifications
-   D03.5 Webinos phase I security framework

(The numbering is an artifact of the webinos project plan. There are no
missing 3.3 and 3.4 deliverables - the numbers are reserved for an
update of the 3.1 and 3.2 deliverables in phase II of the webinos
project.)

The first deliverable (which is this one, .i.e. D03.1) covers the
architecture and required infrastructure and service components. The
intended audience for this deliverable are providers of the webinos
platform, since they will need to provide these components. For
application programmers the background sections may be of interest to
get an overview of these components and their interactions, since a good
understanding of the framework may allow for more efficient use of the
system, though an in-depth knowledge of the internal interfaces and
structures is not that useful. This is also one of the reasons to have
the background section of this document separate from the detailed
specification section.

worth to be more specific here? (Katrin)

Extended the preceeding paragraph. Conveniently this also helped to
justify the deliverable structure. (Christian)

The second deliverable (i.e. D03.2) describes the APIs that will be
available to an web application programmer on a webinos device. The
intended audience are application programmers who want to provide
webinos enabled and supported applications and are going to use the
APIs. In the implementation phase of the platform, the audience, of
course, also includes the platform providers, who will provide the APIs.

Shouldn't the audience also include providers of the platform, as they
have to build it? (Katrin)

Extended by mentioning both sides of the API. (Christian)

The third deliverable (i.e. D03.5) describes the security framework for
webinos. As security needs to encompass the full application
environment, this covers web security architecture and services as well
on-device security and policy handling.

All three deliverables together comprise the initial webinos system
specification, {background:green;color:white} which will serve as basis
for the development of the open source platform.

Based on the experiences with implementing and using webinos, an updated
versions of these deliverables will be published in August 2012.

