Context API[¶](#Context-API)
----------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.webinos.org/specifications/new/context.html>

Allows access to a user’s context data through either explicit queries
or a subscription model. Context events include all API calls.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Privacy loss - any application can monitor what the user is doing
    and has done, and can react to particular events. This might be used
    for targeted adverts, physical or cyber stalking, targeted theft or
    burglary, identity theft.
2.  Confidentiality loss - any application potentially see which files
    have been opened, where the user has been, contact information, etc.
    Depending on implementation, this could include the content of files
    and more. An application might use this to gain access to APIs it
    does not have permission for.
3.  Non-repudiation. Users may want to go unmonitored and need to turn
    off context collection at times. If this is hard to do or unclear,
    it might result in embarrassment, loss of reputation, etc.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

Because this API primarily uses a central database, remoting has no
obvious implications.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

1.  Availability - subscribing to common context events might slow down
    the platform considerably, rendering it unusable.
2.  Availability - too many queries to the context API might over-use
    bandwidth and cause either a loss of battery power of expensive
    mobile phone bills

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  Context data could be inconsistent or misused to provide a false
    impression for developers. For example, if a user turns on and off
    their context data, it may make them appear to have different
    behaviour to reality.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  Availability - too many queries to the context API might over-use
    bandwidth and reduce battery life.

### Mitigations[¶](#Mitigations)

1.  Turn off context collection by default
2.  Provide controls for turning on/off collection and clearing the
    database
3.  Optionally - provide more granular controls for users who are aware
    of aspects of their context they are happy to log to the database
    and make available. Allow for selective deletion.
4.  Provide feedback for when applications query context data
5.  Clean context data so that only a bare minimum of information about
    API calls is collected. This could be implemented through data
    tagging.
6.  Integrate context querying permissions with permission to access the
    underlying data. Investigate how the data in the Context Database
    can be classified based on its sources.

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

x

x

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

x

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

