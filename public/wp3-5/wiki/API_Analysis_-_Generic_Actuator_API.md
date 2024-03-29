Generic Actuator API[¶](#Generic-Actuator-API)
----------------------------------------------

### Overview of API[¶](#Overview-of-API)

Link to API - <http://dev.webinos.org/specifications/new/actuators.html>

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Misuse of an actuator could damage the underlying device or local
    environment. E.g., a motor could be used so frequently it gets too
    hot.
2.  Misuse of a battery-powered actuator could cause a denial of service
    through exhausting the battery.
3.  An actuator could be capable of harming people or the environment.
    E.g., actuators for home automation could cause temperatures to drop
    or rise too high
4.  Actuators may through success or error callbacks reveal information
    about the underlying device which could, in turn, be privacy
    sensitive. E.g. an actuator that has recently been used might be
    unusable for several minutes. This would therefore be a covert
    channel.
5.  An expensive to use actuator (e.g. one with a support service or one
    which uses a limited supply of raw materials) could be expensive for
    the end user if abused.
6.  An application or webinos flaw could allow an attacker to misuse
    **all** the actuator APIs at once. This would be spectacular!

There are likely to be more threats for each type of actuator - this
threat analysis is vague by definition.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  Remote invocation of an actuator could cause alarm or surprise by a
    user who is not expecting it.
2.  Remote invocation could cause battery life issues or denial of
    service if the user did not realise they were remotely invoking it.
3.  Remote invocation greatly increases the likelihood and success of
    many of the denial of service threats.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

This API has not been implemented.

Suspected implementation issues:

-   The underlying actuator is going to be controlled by a device
    driver. This driver may be running in kernel mode. It may have
    implementation flaws which are exploitable from API invocation, such
    as buffer overruns or double free vulnerabilities. This could cause
    remote code execution from webinos APIs.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  The developer might design for the wrong kind of actuator and
    therefore accidentally damage the actuator that the API uses. They
    could be sued for this by angry users

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  Actuators related to a device might be damaged through unauthorised
    or inappropriate use. This could cause expense or product recalls.

### Mitigations[¶](#Mitigations)

1.  When the actuator is used it ought to notify the user on the device
    he or she is using it from as well as the device it is connected to.
2.  Recommend to implementers of actuators that any free-form untyped
    text input ( actuatorType and actuatorId in the initActuatorEvent
    method ) should be validated properly.
3.  Recommend to implementers that rate limits are set where appropriate
    on actuators.
4.  User consent should be required *at least* the first time the
    actuator is used
5.  When adding a new actuator, users should be alerted to warnings and,
    by default, policies should disallow access to this API remotely.
6.  Use of this API by an application should be logged
7.  If the actuator is expensive to use, or could be damaged through
    misuse, the manufacturer may want to allow access to it only from
    applications with the manufacturer's signature. A default policy
    might be bundled with the actuator driver

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

Local access:

B-A

W-R

W-U

Policy

Explanation (Widgets)

Explanation (Browser Apps)

Silently allow

Applications will be granted access to this API without user consent
being required. This can only be modified using a policy editor.

Default allow (install time)

Widgets will need user consent at install time, but users will expect to
allow it (the tick-box will automatically be filled in).

Web pages will prompt for consent (Yes / No / Always) at runtime, this
preference will be saved.

x

x

x

Default ask at runtime (one-shot)

Widgets will require one-off user consent at runtime. This fact will be
visible & modifiable at install time.

Web pages will prompt for consent (Yes / No / Always) at runtime, this
preference will be saved.

Default ask at runtime (every time)

Widgets will require user consent at runtime, every time. This fact will
be visible & modifiable at install time.

Web pages will prompt for consent (Yes / No / Always) at runtime

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

Remote access:

B-A

W-R

W-U

Policy

Explanation (Widgets)

Explanation (Browser Apps)

Silently allow

Applications will be granted access to this API without user consent
being required. This can only be modified using a policy editor.

Default allow (install time)

Widgets will need user consent at install time, but users will expect to
allow it (the tick-box will automatically be filled in).

Web pages will prompt for consent (Yes / No / Always) at runtime, this
preference will be saved.

Default ask at runtime (one-shot)

Widgets will require one-off user consent at runtime. This fact will be
visible & modifiable at install time.

Web pages will prompt for consent (Yes / No / Always) at runtime, this
preference will be saved.

x

x

x

Default ask at runtime (every time)

Widgets will require user consent at runtime, every time. This fact will
be visible & modifiable at install time.

Web pages will prompt for consent (Yes / No / Always) at runtime

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

