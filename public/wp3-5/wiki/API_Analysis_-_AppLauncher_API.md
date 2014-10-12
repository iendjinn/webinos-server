AppLauncher API[¶](#AppLauncher-API)
------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.webinos.org/specifications/new/launcher.html>

Provides the capability to check if a webinos app is present on the
device and to start it.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Start applications on the device until the system crashes;
2.  Start a malicious application and send it to background; when it
    prompts for a permission, the user may allow it thinking it is
    requested by the main application;
3.  Checking which applications are installed on the device can reveal
    personal information;
4.  Using the AppLauncher API to invoke a known-vulnerable application
    and then stealing data or misusing its access to credentials.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

Remotely launching applications may cause excessive battery usage from
the target device, or may be used as part of any of the above threats,
but with the added difficulty that the user may not see what is
happening.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  Starting applications that overload cpu, memory, network access can
    cause device dysfunctions; this can result in bad publicity for the
    manufacturer. This may also cause additional cost in fixing devices
    with malicious applications installed.

### Mitigations[¶](#Mitigations)

1.  the user must be able to select which applications can be executed
    by a local or remote entity;
2.  this can be achieved with a ui showing the list of applications; the
    user can enable each app to be locally or remotely executed (and
    select which entity can execute them);
3.  make sure that the policy prompt clearly states which is the app
    requesting it;
4.  Make sure that an explicit consent step is required before an
    application is launched. This consent request should include the
    calling application's name as well as the target application.

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

Only applications selected by the user should be checkable or runnable
(localy or remotely). This means that the policy must have a parameter
identifying the invoked application.

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

Policy for general applications:

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

Default ask at runtime (every time)

Widgets will require user consent at runtime, every time. This fact will
be visible & modifiable at install time.

Web pages will prompt for consent (Yes / No / Always) at runtime

X

X

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

X

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

Policy for user selected applications:

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

X

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

X

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

