TV Control API[¶](#TV-Control-API)
----------------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.webinos.org/specifications/new/tv.html>

Interface for TV control and managment.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This API could be used to monitor the current state of the broadcast
    service. Depending on time and channel information users could
    potentially be fingerprinted.
2.  With knowledge of channel list the location of a user could be
    derived (e.g. local channels appear in list if terrestrial service
    is used)
3.  Generation of user profiles, preferred channels (sports, adult
    shows, etc )
4.  Annoyance - an application could change channel on the end user
    unexpectedly. This could also cause embarrassment - e.g., selecting
    a not-safe-for-work channel at the wrong time.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  In case one specific TV service is accessed from two or more apps
    then the user might experience a denial of service, e.g. user could
    be prevented from watching a desired channel by an other app
    changing programmatically to other channels. This is due to API
    implementation controlling one specific service, in other words:
    lack of exclusive usage of service.
2.  Remote invocation might be used to monitor the user's presence, e.g.
    one could monitor if a user is changing channels?
3.  Remote (mobile) access to streams could increase costs for internet
    access

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

1.  The current implementation means that TV API applies to all apps at
    once.
2.  Currently, one implementation of TV API uses VLC as backend, which
    might introduce its own security issues (foreign code execution, due
    to application flaws)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  As mentioned above ("lack of exclusive usage of service") an app
    developer could experience unexpected behavior in his apps

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  Not a security threat, but some broadcasters could have concerns, as
    apps might filter them out, censor or hiding ads or overlaying
    content.

### Mitigations[¶](#Mitigations)

1.  Provide examples for the correct scenarios in which the API should
    be used.
2.  Provide a black-list option for some channels, making them unable to
    be selected by the API

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

B-A

W-R

W-U

Policy

Explanation (Widgets)

Explanation (Browser Apps)

x

Silently allow

Applications will be granted access to this API without user consent
being required. This can only be modified using a policy editor.

x

x

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

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

