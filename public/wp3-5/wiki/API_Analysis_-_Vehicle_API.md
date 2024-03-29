Vehicle API[¶](#Vehicle-API)
----------------------------

### Overview of API[¶](#Overview-of-API)

Link to API - <http://dev.webinos.org/specifications/new/vehicle.html>

The API provides read access to vehicle specific data.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  The API could be used to generate driving profiles of a user based
    on the trip computer data. this might be wanted by targeted
    advertisers trying to profile the user to send them product
    advertisements.
2.  The API could be used to monitor the state of the vehicle (e.g.
    enginge-oil status and trip computer).
3.  Inferring the location of the end user, based on vehicle data

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  Vehicle properties with high update frequencies can slow down the
    communciation within the personal zone.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

1.  One implementation of the Vehilce API has access to the MOST-Bus.
    Depending of the vehicle property the update frequency is short (a
    few ms). Registering listeners to more high frequency properties can
    crash the PZP.
2.  Updates on a high frequency properties can freeze the GUI

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  Binding to too many vehicle properties can lead to unresponsiveness
    of the app, as the communication channel between PZP and browser is
    flooded with RPC messages of the API . The updates can also freeze
    the GUI of the application for a few seconds.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  bad publicity for device manufactures, especially as the car is
    still perceived as one system. Currently customers still do not
    distinguish between a problem with the engine or with a third
    application running on in-car headunit. It is perceived as a problem
    with the car.

### Mitigations[¶](#Mitigations)

1.  Provide examples for the correct scenarios in which the API should
    be used.
2.  Use thresholds for updates on high frequency vehicle properties
3.  Limit the amount of vehicle properties an application can register
    listeners to.
4.  Suggest that manufacturers consider only allowing signed apps from
    known authors or distributors to access this API

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

The following 'types' of application are supported in webinos: [Types of
Application](.html). This table provides a summary:

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

For each application type, select one of these as the default policy for
this API. This applies to an application which explicitly requests
access to this API.

B-A

W-R

W-U

Policy

Explanation (Widgets)

Explanation (Browser Apps)

Silently allow

Applications will be granted access to this API without user consent
being required. This can only be modified using a policy editor.

X

Default allow (install time)

Widgets will need user consent at install time, but users will expect to
allow it (the tick-box will automatically be filled in).

Web pages will prompt for consent (Yes / No / Always) at runtime, this
preference will be saved.

X

Default ask at runtime (one-shot)

Widgets will require one-off user consent at runtime. This fact will be
visible & modifiable at install time.

Web pages will prompt for consent (Yes / No / Always) at runtime, this
preference will be saved.

Default ask at runtime (every time)

Widgets will require user consent at runtime, every time. This fact will
be visible & modifiable at install time.

Web pages will prompt for consent (Yes / No / Always) at runtime

X

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

