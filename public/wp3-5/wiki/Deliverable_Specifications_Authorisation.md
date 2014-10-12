Runtime Authorisation and User Interfaces[¶](#Runtime-Authorisation-and-User-Interfaces)
----------------------------------------------------------------------------------------

### Introduction[¶](#Introduction)

One aspect of security architectures which is often overlooked is the
process of authorisation: obtaining consent from the user for a
particular action. This involves logical processes as well as graphical
user interfaces. This section does not provide precise implementation
guidelines but specifies the data that will be presented to users during
authorisation and gives examples. This work relates heavily to the
[design principles](design%20principles.html).

This section of the deliverable primarily refers to *runtime user
authorisation*: that is, it does not cover purely policy-dictated
decisions or those based on certificates. in addition, identity
management and log-in/log-out events are not covered here.

### Background[¶](#Background)

#### Requirements[¶](#Requirements)

The following security and privacy requirements from
([Webinos-D22](Webinos-D22.html)) are related to this part of the
platform.

-   [PS-DEV-ambiesense-25](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-25)
    : The webinos runtime shall protect policies from tampering or
    modification by unauthorised applications. The only authorised
    applications shall be from signed, trusted sources, which may be
    defined by the manufacturer, network provider, or end user.
-   [PS-DEV-IBBT-004](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-IBBT-004)
    : A publish-subscribe system for event shall exist which requires
    authorisation for application subscriptions. webinos should provide
    a policy system regarding events.
-   [PS-USR-ISMB-036](/wp2-2/wiki/DeliverableVersionAll#PS-USR-ISMB-036)
    : The webinos runtime shall support the download, install, update,
    and removal of security policies. These operations shall required
    authorisation by the user and policies must be checked for
    authenticity and integrity.
-   [PS-USR-Oxford-101](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-101)
    : The user should be able to allow detection of sensors/actuators
    only to authenticated and authorised entities and shall be able to
    prohibit detection.
-   [PS-USR-Oxford-103](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-103)
    : The webinos Runtime Environment shall only allow associations to
    be made between devices when predefined network security practices
    are followed, including transport level security, device
    authentication and user and device authorisation.
-   [PS-USR-Oxford-120](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-120)
    : A webinos Cloud shall determine the services a webinos Device is
    authorised to use before providing access to its services.
-   [PS-USR-Oxford-67](/wp2-2/wiki/DeliverableVersionAll#PS-USR-Oxford-67)
    : webinos shall remove access to any additional authorisation
    credentials when a user logs out.
-   [NC-DWP-POLITO-007](/wp2-2/wiki/DeliverableVersionAll#NC-DWP-POLITO-007)
    : The webinos runtime must be able to provide information to
    authorised applications about device physical features. Some
    examples are screen resolution and size, number of audio
    input/output channels, microphone availability, touch screen
    support, proximity.

Based on these requirements and the rest of the specification,
authorisation is required for the following actions:

-   installation and execution of applications;
-   application actions, including:
    -   use, storage and disclosure of application data;
    -   use of device features;
    -   querying device specifications, including supported media
        formats and platform software state;
    -   use, storage and disclosure of contextual user data;
-   granting particular end users access to applications and services;
-   installation and use of policies;
-   the destination of webinos event messages (primarily devices and
    applications);
-   the installation and selection of signing authorities;
-   updating applications and policies; and
-   device and service discovery/detection.

The majority of these do not present any obvious challenges to the user,
or are out of scope of this phase of webinos development (policy
editing, selecting signing authorities). However, in the following
section we identify several areas where some data is expected to be
presented to the user.

We have not considered unauthorised copying and distribution of
applications in this phase of the security architecture, as per
[PS-DEV-ambiesense-02](/wp2-2/wiki/DeliverableVersionAll#PS-DEV-ambiesense-02)
.

#### Related technology and research[¶](#Related-technology-and-research)

##### GUIs from Android:

![](android-install-authZ.png) ![](android-Location-security.png)
![](android-Permissions.png)

##### GUIs from iOS

![](iPhone-location-authZ.png) ![](iPhone-settings.png)

### Threats and challenges[¶](#Threats-and-challenges)

Authorisation is used to mitigate threats where entities (applications,
users, devices) attempt to perform an undesirable action. The main
challenges associated with runtime authorisation is usability:
presenting users with enough information to make informed decisions at
runtime (informed consent) while not overloading them with too many
decisions. The result of requiring too many authorisation decisions is
potentially to train users to always select the same "yes" or "no"
response regardless of the situation.

Authorisation decisions may also be cached by the system, an example of
which is the the "sudo" command in some UNIX operating systems. The
caching of these decisions may result in undesired behaviour unless this
is managed appropriately.

### Authorisation User Interfaces[¶](#Authorisation-User-Interfaces)

#### Install-time authorisation[¶](#Install-time-authorisation)

We do not specify the precise interface that must be implemented by the
webinos runtime, as this may differ slightly on each platform. However,
the following example demonstrates our expectations:

![](authorisation-install-app-webinos.jpg)

Note that the key difference between this example and that on Android is
that fine-grained permissions can be granted or denied on a
per-permission basis. Furthermore, each permission can state details
about why it is requested and what will happen to the data given to the
application.

#### Inter-device authorisation[¶](#Inter-device-authorisation)

Another place where authorisation will occur is when two devices in
different personal zones attempt to use each others' resources. This is
discussed in the authentication section of Deliverable 3.1.

#### GUIs for authorising discovery and controlling identity[¶](#GUIs-for-authorising-discovery-and-controlling-identity)

While not strictly just to do with authorisation, many requirements
specify that users should be able to control whether their device is
visible and discoverable to others. Similarly, users often assume that
controls on location data are quickly available. The following
interfaces demonstrate our expectations:

![](i-am-dropdown-logged-in.png)

The above example shows the interface presented to the end user when
they are logged in and have made certain online identities available.

![](i-am-dropdown-anon-further-options.png)

The above example shows a more sophisticated interface presented to the
user who wants to remain anonymous and turn off location and device
discovery.

#### GUIs for identifying application data usage[¶](#GUIs-for-identifying-application-data-usage)

Following the principle of "not obscuring actual information flow"
([Lederer04](Lederer04.html)), we have also considered our expectations
of GUIs for showing application behaviour.

![](access-control-history.png)

### Future directions[¶](#Future-directions)

The proposed solutions still have many security and privacy issues.
Firstly, it is unclear whether authorisation dialogues can provide
sufficient information so that *informed consent* is practical. If not,
users will be forced to make decisions without the knowledge they need
to make the right choice. This is fundamental to privacy and a major
problem that webinos aims to avoid. It is expected that further
modification to GUIs will be necessary to get this right.

Another common problem in security and usability is that runtime
authorisation is used inappropriately. Often the runtime must make a
decision about whether to trust another entity (a device, application,
network) and this is pushed to the user who is not able to make a
reasonable choice and will always chose the most convenient option.
Runtime authorisation must occur infrequently and the user must be
reasonably likely to chose to *not* authorise a decision, otherwise it
serves little purpose. To this end, we intend to try and take advantage
of the related research in the PRIMMA project ([PRiMMA](PRiMMA.html))
investigating the use of the most appropriate notification system for
user privacy decisions.

