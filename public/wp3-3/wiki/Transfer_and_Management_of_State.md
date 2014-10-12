Transfer and Management of State[¶](#Transfer-and-Management-of-State)
======================================================================

Requirement name

API name

Interface

Method

Application data synchronisation

-

-

-

Application data synchronisation management

-

-

-

Application running state

-

-

-

Application shutdown synchronisation

-

-

-

Application startup synchronisation

-

-

-

Application state availability

-

-

-

Data subset application synchronisation

-

-

-

Disable application data synchronisation

-

-

-

Disable device synchronisation

-

-

-

Personal device application status registration

-

-

-

Personal device power status

WAC Device Status API (see note below)

DeviceStatusManager

getPropertyValue

Personal device status registration

WAC Device Status API (see note below)

DeviceStatusManager

getPropertyValue

Session re-establishment

-

-

-

State and configuration transfer

-

-

-

Synchronisation method

-

-

-

Time period based application synchronisation

-

-

-

Notes:

1.  Synchronization appears not yet developed, consequently, related
    requirements (*Application data synchronisation, Application data
    synchronisation management, Application shutdown synchronisation,
    Application startup synchronisation, Data subset application
    synchronisation, Disable application data synchronisation, Disable
    device synchronisation, Synchronisation method, Time period based
    application synchronisation*) as well as the ones related to
    transparent transfer (*Session re-establishment, State and
    configuration transfer*) seem not related to any API.
2.  Also for Application state requirements (*Application running state,
    Application state availability, Personal device application status
    registration*) no specific API seems related. However, in this case
    there are two question marks:\
    One about the *AppLauncher API*, which has a method to check if the
    application has been installed (that is however a different case in
    respect to the state mentioned in requirements).\
    The other one is about context manager. In principle Context manager
    should be related to user context. However, the Context
    implementation is quite flexible, since *subscribeContextEvent* and
    *executeQuery* methods allow for a quite generic acquisition of
    information, possibly even related to application state.
3.  Regarding *personal device power status*, could be used the aspect
    *Battery* with property *batteryLevel* and *batteryBeingCharged*
    (<http://dev.webinos.org/specifications/new/vocabulary.html>), using
    *getPropertyValue()*
4.  Regarding *persona device status registration*, in practice there is
    not an API to register explicitly the status, but using the above
    method information regarding the status, if stored by some means
    (e.g. system logging, context manager automatic data acquisition),
    could be accessed.

