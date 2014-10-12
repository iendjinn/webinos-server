API Analysis - Template[¶](#API-Analysis-Template)
==================================================

Follow this template for each API and then add the analysis here: [API
Security Analysis](API%20Security%20Analysis.html)

API Analysis - Example API[¶](#API-Analysis-Example-API)
========================================================

Overview of API[¶](#Overview-of-API)
------------------------------------

Link to API - <http://dev.webinos.org/specifications/new/example.html>

This is a brief description of the API

Threats[¶](#Threats)
--------------------

### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  These are the obvious threats that misuse of this API could cause
    for users
2.  I have elicited these by considering the assets that the API gives
    access to, as well as what happens if the API is excessively used.
3.  I have taken into consideration several personas
4.  I have looked at the Mozilla approach for this/a similar API -
    <https://wiki.mozilla.org/WebAPI#APIs>
5.  I have taken into consideration any "security and privacy
    considerations" section of related specifications

### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  When this API is called from another device, what are the additional
    security concerns?
2.  When this API is called from another user on another device, what
    are the additional security concerns?

### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

1.  Based on my experience in implementation in phase 1, the following
    attacks might be possible...

### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  How might a developer be caused harm by relying on this API?
2.  How might an app be damaged or attacked through this API?

### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  How might other stakeholders be affected - could it cause excessive
    traffic, for example?

Mitigations[¶](#Mitigations)
----------------------------

1.  How should the API be designed, implemented or constrained such that
    the threats are mitigated?
2.  Should the API be turned off by default?
3.  Should the API require authorisation always?
4.  Should the API result in some kind of notification or logging event?

Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)
--------------------------------------------------------------------------------------------------------

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

Explanation (Browser apps)

Explanation (Widgets)

Silently allow

Applications will be granted access to this API without user consent
being required. This can only be modified using a policy editor.

Default allow (install time)

Widgets will need user consent at install time, but users will expect to
allow it (the tick-box will automatically be filled in).

Webpages will prompt for consent (Yes / No / Always) at runtime

Default ask at runtime (one-shot)

Widgets will require one-off user consent at runtime. This fact will be
visible & modifiable at install time.

Webpages will prompt for consent (Yes / No / Always) at runtime

Default ask at runtime (every time)

Widgets will require user consent at runtime, every time. This fact will
be visible & modifiable at install time.

Webpages will prompt for consent (Yes / No / Always) at runtime

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Webpages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

