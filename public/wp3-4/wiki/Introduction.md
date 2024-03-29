Introduction[¶](#Introduction)
==============================

In task 3.4, webinos phase 2 API specifications, the development of the
application programming interface specifications (APIs) has continued in
order to make the desired functionality available to webinos
applications. The phase 1 API specifications created in task 3.2 have
been further developed and new API specifications have been added.

Updates done[¶](#Updates-done)
------------------------------

The work is based on experiences from webinos implementations in WP4 and
WP5, updated use cases/requirements in WP2, evolving webinos
architecture specification in task 3.3 and progress in W3C
standardization. The work done includes for example:

-   Updating all API specifications to align with the latest W3C Web
    IDL-specification and API specification style.
-   Assuring that all API specifications are aligned with the real WP4
    API implementations.
-   Removing APIs specified in task 3.2 but found that we definitively
    don’t need.
-   Specifying, or referring, new APIs found that we need.
-   Aligning with latest versions of referred W3C or other API
    standards.
-   Continuing providing feedback to W3C standardization, working with
    task 8.1.

Overview of webinos phase 2 API categories[¶](#Overview-of-webinos-phase-2-API-categories)
------------------------------------------------------------------------------------------

One of the key elements of webinos is that the framework provides means
to bind to a service object in a remote execution environment. The
webinos Service Discovery API defines how a service is discovered and
how an application can bind to a remote service. The service object will
act as proxy for sending/receiving events to/from the remote peer and
hides the complexity of sending/receiving message between the peers in a
trusted manner. This mechanism is not limited to webinos defined APIs
but is also available for the APIs defined by W3C and referenced by
webinos as well as for user defined APIs. For example, an application
can use the webinos Service Discovery API to search for a geolocation
service on another device and then access this service through the
standard W3C Geolocation API.

The webinos APIs can be divided into a number of categories:

-   **Webinos core interface:** For example the webinos core interface
    that defines the webinos API namespace and gives information about
    the user's personal zone.

<!-- -->

-   **Service discovery and access:** Allows applications to discover
    services/applications on other devices or on network servers and
    access these remote services.

<!-- -->

-   **HW Resources APIs:** APIs allowing applications to access
    information and functionality relating to device HW resources such
    as GPS, camera, NFC, SIM and smart card readers, sensors, etc.

<!-- -->

-   **Application Data APIs:** APIs allowing applications read and write
    access to application capabilites such as contact items, calender
    information, messages, media files, etc.

<!-- -->

-   **Communication APIs:** APIs allowing applications to communicate
    with other applications in the same or another device.

<!-- -->

-   **Application execution APIs:** APIs allowing webinos applications
    to manage its execution or launch other webinos and native
    applications.

<!-- -->

-   **User profile and context APIs:** APIs allowing applications access
    to user profile data and user context.

<!-- -->

-   **Security and Privacy APIs:** APIs related to the security model
    for webinos.

All webinos phase 2 API specifications are available here: [Webinos
phase 2 Device
APIs](http://dev.webinos.org/deliverables/wp3/Deliverable34/)

Given the sensitive nature of the data to which these APIs grant access,
the APIs specified are either secure and privacy-enabling by design or
implemented so that access to APIs are controlled by the Webinos
security framework specified in D3.6.

Further work[¶](#Further-work)
------------------------------

The webinos project will continuously align with ongoing API
standardization in W3C and elsewhere. For example, the [W3C System
Applications Working
Group](http://www.w3.org/2012/05/sysapps-wg-charter.html) is starting up
and is chartered to define a runtime environment, security model, and
associated APIs for building Web applications with comparable
capabilities to native applications. This work is very relevant for
webinos. Furthermore, W3C is also standardizing [Web
Intents](http://www.w3.org/TR/web-intents/) and Web Intents based APIs
and webinos should explore this technology as it is maturing.

However, webinos should not only reuse standard specifications from W3C
or elsewhere but also collaborate with standardization organizations and
impact standardization work in progress. This is done within WP 8.1.

The repository for webinos APIs that are further updated is here:
[webinos latest Device
APIs](http://dev.webinos.org/specifications/new/).

Document structure[¶](#Document-structure)
------------------------------------------

In addition to the tangible API specifications, which of course is the
main part of the delivery, this delivery contains informative sections
which are:

-   Overview of the Web Application API Landscape.
-   Background information on all API specifications included in the
    delivery.
-   Results of the "Web Intents" for webinos investigation.

