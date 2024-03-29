The W3C Geolocation API[¶](#The-W3C-Geolocation-API)
----------------------------------------------------

### Overview of API[¶](#Overview-of-API)

Link to API - <http://www.w3.org/TR/geolocation-API/>

"This specification defines an API that provides scripted access to
geographical location information associated with the hosting device."

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Leaking of location to unauthorised parties (e.g. through
    advertising networks or through spoofing of app identity)
2.  Misuse of location data by authorised parties (e.g. an app starts
    using location to track users rather than provide contextual
    functionality)
3.  Unintentional authorisation of malicious parties (e.g., users select
    'OK' to an app they didn't mean to. Or an app gains access through
    another app)
4.  Unexpected consequences of geolocation data disclosure (e.g., the
    user reveals their location but then realises it was a mistake in
    retrospect)

More details:

1.  This API gives applications access to the location of the end user,
    which could be privacy sensitive.
2.  It may result in advertising that the user finds annoying, it might
    be given away to third party advertisers, or be used for
    customer/user analytics at a later date (profiling). This data could
    end up on unauthorised websites.
3.  The application might publish this information in a way that the
    user has no control over, and therefore might be seen by unexpected
    people. E.g., someone's friends or family might see their location
    without the user's knowledge. This would be extremely bad if they
    were visiting a potentially sensitive or embarassing place, such as
    a hospital or police station. It may also be embarassing if someone
    learns about a relationship or interest the end user has but wishes
    to keep a secret.
4.  Multiple location details could be correlated over time to build up
    a picture of user activities. This might be used for predicting
    future behaviour and be inaccurate or misleading. It might also
    reveal habits that the user is uncomfortable with knowing.
5.  Thieves might use location data to find out whether someone is away
    from their house in order to burgle them. It could also tell a
    mugger where to wait for someone with an expensive phone, car or
    tablet device.
6.  Stalkers might use disclosed location data to track their target and
    intimidate or threaten them.
7.  In dangerous situations (e.g. in unstable countries with terrorists
    or unrest) this API could accidentally give away location data which
    would expose the end user.
8.  Inaccurate information could cause accidents or mistakes if users
    rely too heavily on the output of this API.
9.  Geolocation data could connect otherwise unlinkable user actions.
    E.g., a tweeting application and a online shopping application could
    correlate user identity by spotting that the user was in the same
    place at the same time.
10. Users might allow location data for one action, but not want to
    allow it forever. If the API made it easy for applications to gain
    and then reuse permission, this would be a problem.
11. Users might realise at a later date that their location information,
    as attached to some record somewhere online, was either inaccurate
    or privacy-invasive for some reason. E.g., it might have revealed
    their presence at a movie theatre when they had claimed to be unwell
    and off work.
12. This API might be used for a "find my phone" type application for
    lost or stolen devices. If it loses availability or is inaccurate,
    such a feature would be useless.

From Mozilla - <https://wiki.mozilla.org/WebAPI/Security/Geolocation>

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  Remote invocation can result in unexpected revelation of data. E.g.,
    an application might access location information about the users'
    car, when they were expecting it to be about their TV. Different
    devices will be in privacy sensitive or insensitive locations, so
    accidentally authorising the wrong one is a problem.
2.  Remote geolocation would allow users to pretend to be in a location
    they are not. This might be a problem for applications relying on
    this information.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  A developer might base their app on geolocation in order to
    implement a security or privacy feature. E.g., only allowing access
    to certain parts of the app if they are at work, or in a certain
    place. This would be easy to circumvent.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  Geolocation drains battery and (if it is assisted GPS) might use
    bandwidth
2.  Geolocation (if unconstrained) could slow down the phone

### Mitigations[¶](#Mitigations)

1.  Users must be prompted before geolocation is first requested or
    used.
2.  Revocation of permission to access geolocation must be possible and
    easy to access.
3.  Insist on plausible deniability. E.g., it should always be plausible
    for the API to return a "no data" result.
4.  Implement a cap on the number of one-off 'getCurrentPosition'
    requests allowed
5.  Make it visible to the end user that their location is being watched
    or accessed by a particular app. Make it easy to turn off/on
    geolocation data
6.  Make the geolocation service selection easy, and do not provide
    access to remote geolocation by default. Device-agnostic policies
    should either not be possible, or not be easy to end up with.

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

X

X

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

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

