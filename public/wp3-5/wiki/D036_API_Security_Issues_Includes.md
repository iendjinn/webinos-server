API Security Analysis[¶](#API-Security-Analysis)
================================================

This section describes an individual analysis of each API and the
security and privacy issues they have.

Authentication API[¶](#Authentication-API)
------------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.webinos.org/specifications/new/authentication.html>

Provides information to applications about the current authentication
status of users, based on their authentication to the local device. This
API may also be used within webinos to ask the runtime to authenticate
the user.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This API could be used to monitor the current state of the user.
    e.g., requesting an authentication might show that the end user is
    present.
2.  Authentication method and Last Auth Time could be used for
    fingerprinting the user.
3.  If this is mapped to device authentication, users could be inundated
    with authentication requests. It also might confuse them into
    clicking-through or automatically entering passwords when prompted.
    This would be a particularly big problem if this password/code is
    reused on other systems.
4.  The authentication prompt could be spoofed by an application.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  Remote invocation could be misused to monitor the user's activity -
    e.g., to work out whether the user was active on the device.
2.  Misuse of authentication - if all authentication requests are
    delegated to a device which does not support (or only weakly
    supports) the Authentication API, this might be unexpectedly weak or
    strong.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

1.  The current implementation means that authentication applies to all
    apps at once - a user authenticating in one App will automatically
    be authenticated for others. This may be confusing if the API is
    misused as authorisation.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  The use of this API could create false expectations for developers.
    It is meant to be used to re-assert the users identity as the owner
    of the PZP in question. However, it is not supposed to be a strong
    authentication statement, as the method will be device-specific.
    Developers must be aware that it is weak, and may not correlate with
    the current user precisely. It should not be used to protect
    high-value or high-risk events.
2.  Similarly, authentication is not necessarily authentication for the
    current action - a user may have authenticated for another reason.
    It should not be confused with authorisation.
3.  Authentication time-outs and delays are platform-specific, and
    developers need to be aware that they should check the
    'lastAuthTime' parameter to see how fresh it is.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

### Mitigations[¶](#Mitigations)

1.  Provide examples for the correct scenarios in which the API should
    be used. Make sure that authentication is not confused with
    authorisation. Consider adding authorisation methods to this API.
2.  Allow plausible deny-ability - callbacks should trigger after
    timeouts of random periods (within certain limits) to avoid user
    monitoring.
3.  Secure UI - make sure the webinos prompt is not spoofable.
4.  Do not make use of the authentication credentials in any way.
5.  Make sure that authentication API implementations do not allow for
    excessive querying of the user. Authentication caching is required.
6.  Make explicit which application is asking for authentication when
    authentication is requested.

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

Webpages will prompt for consent (Yes / No / Always) at runtime, this
can be just a warning rather than a prompt

Default ask at runtime (one-time)

Widgets will require one-off user consent at runtime. This fact will be
visible & modifiable at install time.

Webpages will prompt for consent (Yes / No / Always) at runtime, but the
PZP will remember the setting.

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

Payment API[¶](#Payment-API)
----------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.webinos.org/specifications/new/payment.html>

"This API provides generic shopping basket functionality to provide
in-app payment. It is not linked to a specific payment service provider
and is designed to be sufficiently generic to be mapable to various
payment services like GSMA OneAPI, BlueVia, Android Payment API or
PayPal."

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

-   [Misuse case from
    2.8](/wp2-8/wiki/Risks_misusecases#Shopping-Misuse-Case-I-The-delivery-of-a-free-festival-guide-for-a-charge)
-   [Misuse case from
    2.8](/wp2-8/wiki/Risks_misusecases#Shopping-Misuse-Case-II-The-payment-for-a-service-that-never-will-be-delivered)
-   An application could add items to the shopping basket with user
    consent. This could result in the user being charged more money or
    purchasing something they didn't mean to.
-   An application could remove items from the shopping basket without
    user consent. This would be irritating, and might put them off using
    this application or payment provider.
-   An application could modify the item price, making it cost more for
    the end user. Alternatively, it could mean that the user thinks
    something is cheap. Or it could defraud the merchant.
-   An application could fail to update the basket after a change,
    resulting in an incorrect total amount being displayed.
-   An application could accidentally double-add items to the basket
-   An application could use an inappropriate out-of-band authenticator
    with the payment provider, resulting in unauthorised payment
-   The payment provider might use SMS-based authentication, which
    webinos could intercept and allow an attacker who has stolen one
    device to buy lots of things.
-   The invocation of the API may be logged by the context DB. This
    might mean that a item purchased privately or semi-anonymously is
    then recorded in the user's personal history. This could cause
    embarrassment.
-   An application might create and load a shopping basket without user
    consent.
-   The process of authenticating might reveal user contact details or
    address information.
-   The API could accidentally link payments through different
    mechanisms (e.g. PayPal and Visa) which would otherwise be
    anonymous.
-   A child might misuse an app with access to the payment API - e.g.
    downloading pay-per-view content.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

-   The API could be invoked remotely on another device owned by the
    user, resulting in the payment provider's authentication mechanism
    appearing on the wrong device. This could either be misused to trick
    the user into purchasing the wrong thing, or make it impossible for
    the user to properly authenticate.
-   The API could be invoked on someone else's device, taking advantage
    of any credentials they have for authenticating to the payment
    provider.
-   If the webinos web/widget runtime allowed unauthorised cross-origin
    communication, then the App might be able to eavesdrop or intercept
    key presses / input from the user during payment authentication.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

-   A failure of the payment API could result in the app developer
    missing out on revenue. E.g., the payment API does not work, or
    results in difficult to use behaviour, resulting in the user
    cancelling the payment.
-   Misuse of the payment API might result in the developer appearing
    fraudulent.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

-   Misuse of the payment API would cause bad publicity for any operator
    or manufacturer using/shipping webinos on their handsets.

#### Further considerations[¶](#Further-considerations)

-   The payment provider's authentication mechanism may be fundamentally
    flawed, or make assumptions that do not hold in webinos.
-   Payment doesn't fundamentally introduce anything new in webinos
    compared to the browser.

### Mitigations[¶](#Mitigations)

-   Remove from webinos? Doesn't add any innovation, does add complexity
    and an attack vector?
-   Do not allow remote invocation
-   Require user consent and authentication before invoking the checkout
    operation. However, this ought to be provided by the service rather
    than necessarily by the policy framework.
-   Recommend that a custom analysis on each payment provider is
    performed, to check that webinos is not introducing new attack
    vectors.

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

X

X

X

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

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

Rationale: the payment API does not introduce anything new compared to
regular browser payment.

Discovery API[¶](#Discovery-API)
--------------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.webinos.org/specifications/new/servicediscovery.html>

"The Webinos Discovery API provide web applications with an API to
discover services without any previous knowledge of the service. The
Discovery API is not limited to discovery of local services but also
enables discovery of remote services."

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Privacy loss – any application can read out which type of services
    that are available in the personal zone or on local networks. The
    service description contains information such as service type, name
    and a description. This information could contain the model name of
    your home TV, which type of personal phone you have in your zone.
    This information can be used by applications for fingerprinting.
    Potential candidates are targeted advertising, targeted theft or
    burglary. If an application is authorized access to a service
    availability could be used to monitor availability of different
    services. This can be used to estimate what an end user is doing and
    potential whether the end user is at home or not.
2.  Denial of Service – any application that is accidently authorized
    access to a service in the personal, could use this for DoS attacks
    and service Hijacking.
3.  Masquerade service access – when finding a services the application
    can fake which services that are found and give the end user the
    impression that service x is selected whilst service y is choosen by
    the application.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

The discovery API is an enabler for doing remote invocation but the API
as such should not be possible to invoke remotely.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

1.  Currently there are no limitations in number of discovery operations
    that can be invoked in parallel. This could be misused, resulting in
    denial of service or exploiting a bug in an underlying service
    platform.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  Unreliable application behaviour. If the discovery API produces
    unreliable results then the application will appear unreliable and
    may be unpopular with users.
2.  Discovery of privacy-invasive or insecure services. Application
    developers might be blamed for their applications making use of
    services which are invasive of their privacy or security. The
    discovery API has no way of presenting this information to the
    application.
3.  Inappropriate use of an application-defined service. If Jimmy
    develops a service designed to take, for example, public data about
    sports results with very few security implications he may get in
    trouble if it is misused by users for private data.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  The API defines that service availability shall be reported as
    events. This could generate a lot of traffic of there a lot of
    services running in parallel and could potentially be devastating
    for the power consumption and load the network with traffic.

#### Further considerations[¶](#Further-considerations)

### Mitigations[¶](#Mitigations)

1.  The API shall only be available for authorized applications or
    applications trusted by the end user.
2.  Provide feedback when services are discovered and which services
    that are discovered.
3.  There shall be means for end user to easily revoke access to the
    discovery API

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

X

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

Generic Sensor API[¶](#Generic-Sensor-API)
------------------------------------------

### Overview of API[¶](#Overview-of-API)

Link to API - <http://dev.webinos.org/specifications/new/sensors.html>

The Webinos Generic Sensor API provides web applications with an API to
access data from sensors in the device, connected to the device or in
another device.

The API consists of two interfaces:

1.  A sensor interface that provides attributes for the sensors and a
    method to configure a selected sensor.
2.  A DOM level 3 event that provides sensor data.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Sensors may be receiving data from a wide range of sources or
    inputs. These might potentially be privacy-invasive, e.g.,
    1.  A power-usage sensor might indicate the user's current activity
    2.  A sleep monitor (motion sensor) has some obvious privacy issues
    3.  Sensors might provide clues to the location of the end user -
        e.g. a temperature sensor at a known location during winter
        would expect to be warm when people are nearby and cold
        otherwise. This might be used by thieves to determine whether a
        house is occupied before a burglary.
    4.  Sound sensors might be able to overhear conversations

2.  Sensors might produce a large amount of data and therefore overuse
    the bandwidth or storage capacity of the device, resulting in slow
    network/device, high costs or denial of service altogether.
3.  Sensors may be more or less accurate than expected. If used for
    security-related tasks (such as where a door is open or closed, or
    in establishing user presence) this could cause security violations.

There are likely to be more threats for each type of sensor - this
threat analysis is vague by definition.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  Access to sensors on remote devices may be unexpected by the end
    user. They may not expect an application on a device in a different
    location to have access to this information
2.  Remote eavesdropping or spying on someone else may be enabled by
    this device, even accidentally. For example, in a shared house it
    might inform one occupant of the activities of the other by
    accident. This could cause embarrassment or expose sensitive
    information. The assumption that a sensor is only accessible for the
    place where the sensor is has been violated

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

This API has not been implemented.

Suspected implementation issues:

-   The underlying sensor is going to be controlled by a device driver.
    This driver may be running in kernel mode. It may have
    implementation flaws which are exploitable from API invocation, such
    as buffer overruns or double free vulnerabilities. This could cause
    remote code execution from webinos APIs.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  No assurance is provided to developers of the trustworthiness of the
    sensor. This should not be relied upon by developers.
2.  Apps could be fed a large stream of fake or unhelpful data by this
    API.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  Cross-zone API use could result in high network traffic,
    particularly if combined with the context API
2.  If the sensor relates to the device itself - e.g. a sensor recording
    engine temperature - it could cause end users to believe their
    devices are faulty when they are not, or vice versa. This would be a
    problem for a manufacturer.

### Mitigations[¶](#Mitigations)

1.  When adding a sensor to webinos, make it clear that this sensor is
    accessible from any device in the personal zone and provide users
    with the opportunity to disable this feature.
2.  If the sensor relates to part of a product and is known to be
    unreliable, the manufacturer may want to allow access to it only
    from applications with the manufacturer's signature.
3.  When roaming or using a mobile network, the amount of data being
    sent by this API might be limited
4.  By default, user consent should be required when accessing this API
    both locally and remotely.
5.  Use of this API by an application should be logged
6.  Recommend to implementers of sensors that any free-form untyped text
    input ( sensorType and sensorId in the initSensorEvent method )
    should be validated properly.
7.  Recommend to implementers that rate limits are set where appropriate
    on sensors.
8.  Display visual warnings on the device with the sensor when the
    sensor is in use, to avoid eavesdropping / privacy invasion by a
    remote or local app.

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

For each application type, select one of these as the default policy for
this API. This applies to an application which explicitly requests
access to this API.

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

Messaging API[¶](#Messaging-API)
--------------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.webinos.org/specifications/new/messaging.html>

Provides the capability to read, receive and send sms, mms, email and
instant messages.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  an application (or remote user) can read user sms/mms/emails/im;
    they may contain sensitive data (for example important information
    about their personal life or work activities).
2.  an application (or remote user) can send sms/mms/emails; this may be
    used, for example, to subscribe the user to a paid service.
3.  an application can modify/replace the message or the recipient list
    before sending it, causing embarassment or other problems to the
    user.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  Remote invocation of this API could have unexpected consequences as
    it might break the natural accountability that messaging would be
    expected to have. For example, an application might remotely invoke
    SMS functionality on a smartphone and the user, who is on their PC
    at the time, would only find out when they check their mobile
    device.
2.  Remote invocation could be used to impersonate the user for
    second-factor out-of-band authentication. For example, letting the
    application read an SMS created by a payment provider, or reading an
    email password reset message.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  sending many sms/mms may consume user credit; this may cause
    disappointment with the operator or platform/application developer.

### Mitigations[¶](#Mitigations)

1.  access to send functionalities by default should be prompted every
    time (and denied to untrusted apps);
2.  should the prompt allow the user to check the message to be sure
    it's not modified by the application?

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

The following features are defined for this api:

<http://webinos.org/api/messaging> (access to all functionalities)\
<http://webinos.org/api/messaging.send> (access to send message)\
<http://webinos.org/api/messaging.find> (access to find message)\
<http://webinos.org/api/messaging.subscribe> (access to message
subscription)\
<http://webinos.org/api/messaging.attach> (access to message attachment)

The control of message sending should be more restrictive than the
others.

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

Message send:

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

Default ask at runtime (every time)

Widgets will require user consent at runtime, every time. This fact will
be visible & modifiable at install time.

Web pages will prompt for consent (Yes / No / Always) at runtime

x

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

Other messaging methods:

B-A

W-R

W-U

Policy

Explanation (Widgets)

Explanation (Browser Apps)

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

NFC API[¶](#NFC-API)
--------------------

### Overview of API[¶](#Overview-of-API)

</t3-4/wiki/NFC_API>

Allows applications to read and write to NFC tags, to push messages to
other NFC devices, and to establish a temporary bidirectional
asynchronous message channel between the host device and another. NFC
uses short range inductive radio frequency communication. The range is
typically of the order of 4 centimetres. NFC tags lack batteries and are
powered through inductive coupling. The webinos phase 2 API doesn't
(yet) support more advanced techniques such as APDU messages for contact
and contact-less smart cards, as used for electronic payments.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Privacy and confidentiality loss - An attacker could place a hidden
    antenna near enough to listen into the communication protocol
    between the NFC devices as NFC communications is typically
    unencrypted. In practice with a hand held NFC device like a mobile
    phone, and a handheld NFC tag (e.g. a smart card), the risk is low.
2.  Loss of an NFC Tag - if data is held on an NFC Tag in an unencrypted
    form, there is a risk of the Tag falling into the wrong hands. This
    is analogous to losing a metro travel payment card (e.g. London's
    Oyster card), a credit card or a security access card used for
    access to restricted premises. A related scenario involves the loss
    of your NFC enabled smart phone.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

For this to work, the user would have to be persuaded to cooperate with
physically moving the NFC device close to the other device, e.g. a phone
or tag.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

NFC is sometimes used to exchange credentials for securing other
protocols, e.g. WiFi networks or Bluetooth connections. NFC has also
been suggested as part of the process for inducting new devices into the
user's personal zone. Unencrypted communication between NFC devices
could be used to compromise security, however, see above for the
practical issues in doing so.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

NFC can be used as part of payment solutions, and web developers may
feel unwarranted confidence in the security of NFC devices. We need to
explain the limitations of basic NDEF NFC devices and point people are
more secure solutions where appropriate, e.g. the use of NFC-SEC and
APDU.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  Availability - NFC is low power and not a big factor in battery
    life.

### Mitigations[¶](#Mitigations)

The wireless connection can be safeguarded through the use of NFC-SEC as
defined by ECMA-385 and ECMA 386, see:

-   [ECMA-385](http://www.ecma-international.org/publications/standards/Ecma-385.htm)
-   [ECMA-386](http://www.ecma-international.org/publications/standards/Ecma-386.htm)
-   [ECMA TC-47 NFC-SEC White
    paper](http://www.ecma-international.org/activities/Communications/tc47-2008-089-Rev1.pdf)

*Note: ECMA 385, 385 have been republished as ISO/IEC 13157-1 and -2,
respectively.*

NFC-SEC provides for a Diffie-Helman secure key exchange, allowing NFC
devices to set up a secure communication path. In principle, this could
be subject to a man-in-the-middle attack, but that would be hard to
achieve in practice due to the nature of the very short range radio
frequency communication paths involved.

Further work is needed to explore how to integrate support for NFC-SEC
in webinos, as this is dependent on the availability of support by the
underlying libraries, e.g. libnfc and the Android SDK.

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

The need for users to explicitly bring NFC devices close together acts
as barrier to silent abuse of the NFC APIs, as a result user consent
shouldn't be requested at run-time, except when the system needs to
re-format an existing Tag. It may still be a good idea to ask users for
consent to at install time as a reminder of the capability of the
application in question.

The policy language could be designed to limit the APIs applications can
use according to the need, e.g. if an application only needs to share
personal contact data (an electronic business card) then it could be
restricted to reading and writing such data to NFC devices/tags. The
policy language could further limit the capabilities to applications
that are authenticated by the host platform.

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

x

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

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
Application](/redmine/projects/t3-5/wiki/Types_of_Application). This
table provides a summary:

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

Webinos core interface[¶](#Webinos-core-interface)
--------------------------------------------------

### Overview of API[¶](#Overview-of-API)

Link to API - <http://dev.webinos.org/specifications/new/example.html>

The webinos core interface is a way of accessing all the other
interfaces.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Replacing this core interface with another, malicious core
    interface. This could access a different personal zone proxy,
    perhaps one that is not on the current device.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

1.  Are there any threats due to the way the webinos.js shim is
    implemented?

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  A developer has little assurance that the webinos object is
    communicating with the right endpoint.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

No obvious threats.

### Mitigations[¶](#Mitigations)

1.  Ensure that the browser can only talk to the right PZP through
    authentication of the IPC / WebSocket.

Widget API[¶](#Widget-API)
--------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.webinos.org/specifications/draft/widget.html>

Provides informations about the widget, the capability to store
preferences as well as methods to monitor and control widget status
(start, stop, background, foreground). It also provides a method to
install a child widget on any user's device. All data refers to the
widget itself, so a widget cannot control or access data belonging to
another widget.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This api can be used to track or change user preferences (only for
    the current widget);
2.  It is not clear what happens if this api is called from a browser
    context. Can the deployChild be used to install a child widget from
    a web page?

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  The method deployChild can be remotely called on the device where
    the widget should be installed; it can be used to install
    (maliciuos) widgets on all the devices discoverable by the
    user/device.
2.  Other attributes/methods mainly provide informations about the
    current widget, it makes no sense to call it on a remote device.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

No particular threat identified.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

No particular threat identified.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

No particular threat identified.

### Mitigations[¶](#Mitigations)

1.  Disable this api from the browser context;
2.  Disable remote invocation of this api;
3.  Require user consent before installing a child widget;

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

At the moment this api does not define a feature for policy control.\
Access to widget information or status is not a problem. Installation of
child widgets should require user approval (on both devices?).

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

Policy for access to widget info or status:

B-A

W-R

W-U

Policy

Explanation (Widgets)

Explanation (Browser Apps)

X

X

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

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

Policy for child widget installation:

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

The W3C calendar module[¶](#The-W3C-calendar-module)
----------------------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://www.w3.org/TR/2011/WD-calendar-api-20110419/>

The Calendar API defines a high-level interface to access Calendar
information such as events, reminders, alarms and other calendar
information. The API itself is designed to be agnostic of any underlying
calendaring service sources.

Security and Privacy considerations are already described in [this part
of the
specification](http://www.w3.org/TR/2011/WD-calendar-api-20110419/#security-and-privacy-considerations)
.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Distribution of user calendar details - privacy issues abound.
    Sharing with unauthorised parties may result in embarrassment, loss
    of income (meeting information may be valuable to businesses) or
    impact on the safety of the end user.
2.  Targeted advertising based on calendar event information
3.  Stalking possible if the wrong person is given access to calendar
    entries
4.  [Misuse
    case](/wp2-8/wiki/Risks_misusecases#Navigation-Misuse-Case) -
    Calendar details shared over unprotected communication medium and
    accessed by unauthorised parties, allowing them to rob the victim
    when they know he will be at an appointment.
5.  Not all calendars are created equally - some will be used for
    business, others personal, others are common events. Granting access
    to one should not automatically grant access to them all.
6.  The details of contacts who have been added to meetings or
    appointments might be revealed through use of the calendar API in an
    unexpected way.

#### Extended threats based on editing calendars[¶](#Extended-threats-based-on-editing-calendars)

1.  Spam through an unauthorised application adding calendar entries
2.  Missing appointments or loss of information due to an application
    deleting entries or adding too many unwanted entries

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  Peter might allow his application access to the Calendar on his PC,
    knowing that there is nothing important in it. However, it then has
    access to his mobile phone calendar, which is much more personal and
    sensitive.
2.  There could be an unexpected ripple-effect when deleting a calendar
    entry - deleting it on one calendar could impact all calendars on
    all devices unexpectedly.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

-   The Calendar API might return enormous amounts of data, causing any
    Web Application to crash or fail.
-   Calendar data from public calendars might be used to perform XSS or
    XSRF attacks.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

### Mitigations[¶](#Mitigations)

These apply:
<http://www.w3.org/TR/2011/WD-calendar-api-20110419/#security-and-privacy-considerations>

1.  User consent required for accessing each calendar
2.  Separation of calendars is important - access to one calendar should
    not imply access to others
3.  Could the API support "busy/free" invocation methods rather than
    precise information about each event? (this would involve a
    modification to the API)
4.  Granularity is important
    1.  Applications should state how much calendar information they
        will request and why.
    2.  permission might be granted just for an application to see
        whether a particular time is free or busy, but not any details
    3.  permission might be granted to view calendar items but not edit
        (editing is not technically in the specification)

5.  Revocation of consent is necessary.
6.  Suggest a three-phase policy per calendar: "allow all", "allow view
    busy/free", "deny"

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

Rationale: accessing a calendar ought to require explicit consent, and
most pages ought to deny it by default. For those pages and widgets
which are from known sources, it is reasonable to expect that consent is
likely to be granted after one question.

The W3C contacts module[¶](#The-W3C-contacts-module)
----------------------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.webinos.org/specifications/new/contacts.html>

Provides the capability to read, write, update and delete user contacts.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  an application can read all my contact details and send them to an
    attacker; this way the attacker can use it for spam or to collect
    sensitive information about contacts (not only phone number or
    email, but also address, birthday, photo, ...).
2.  an application can modify or delete my contacts; for example change
    the phone number to a premium rate service.
3.  giving an application/user access to a contact can give access also
    to other contacts; for example I share my work contacts, but
    accidentially I also give access to my family and friends contacts.
4.  giving an application/user access to a contact phone number can
    reveal other personal information (address, birthday, photo...); for
    example I share the phone number of my sister, but also accidentally
    it gives access to her address and photo.
5.  a malicious application (or remore user) can fill the address book
    with dummy data (this way the user cannot add other contacts);

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

No particular threats identified.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

No particular threats identified.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  an application loading all contacts details (including photos) may
    risk memory problems;
2.  data protection laws and issues might arise for remotely-hosted
    applications loading contact details.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  The privacy issues (ie the problems of private information being
    disclosed without control) convince potential users not to use the
    platform.

### Mitigations[¶](#Mitigations)

1.  The policy must support parameters to select contacts (by name, by
    detail type, by organization...); this way only selected contacts
    can be accessed;
2.  The policy must allow the user to share only some details of his
    contacts (for example share details with type="work"); this way only
    selected details can be accessed;
3.  The user should be able to verify which data are available to
    applications/users;
4.  Untrusted applications should not be allowed write access to
    contacts;
5.  It may help to have an interface to show which contacts can be
    accessed by a particular application or user.

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

Access to contacts.read feature:

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

Access to contacts.write feature:

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

X

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

X

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

The WAC devicestatus module[¶](#The-WAC-devicestatus-module)
------------------------------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://specs.wacapps.net/devicestatus/index.html>

Provides information about various "aspects" of a device.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This API could be used, accessing IMEI code or other device
    properties, to fingerprint the user of a personal device.
2.  Operating System version and Web Runtime version can be used to
    exploit version-specific vulnerabilities.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  Remote invocation could be used to access personal information. E.g.
    language (`OperatingSystem` aspect, `language` property), country
    (`CellularNetwork` aspect, `mcc` property), mobile operator
    (`CellularNetwork` aspect, `operatorName` property)
2.  It could be used to fine-tune remote DoS attack (e.g., the bettery
    level is a nice information to shape how much aggressive a DoS have
    to be). \#

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  Wrong result of this API can influence the behavior of an
    application. The result can vary from an odd feeling from the user
    to severe application faults.
2.  If the API can provide unverified results (so, especially in case of
    untrusted browser or widget) the information with the user can be
    partially compromised. E.g., an App which want to display a contract
    and a disclaimer. If the devicestatus does not provide the correct
    size of the screen, the disclaimer could be not showed to the user
    since "visualized" in a zone out of the screen.
3.  If not wisely used, may lead to excessive power consumption (e.g.
    through watchPropertyChange() method)

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  If the API provides wrong results from the sensors/components,
    components manufacturers could have bad reputation due to the
    suspects they components do not work well.

### Mitigations[¶](#Mitigations)

1.  Main problem with this API, seems information leakage. Thus, remote
    access should be provided only to trusted entities, to avoid
    information leakage and attack finetuning
2.  Set adequate limit to watch the properties change

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

Local Invocations:

B-A

W-R

W-U

Policy

Explanation (Widgets)

Explanation (Browser Apps)

Silently allow

Applications will be granted access to this API without user consent
being required. This can only be modified using a policy editor.

x

Default allow (install time)

Widgets will need user consent at install time, but users will expect to
allow it (the tick-box will automatically be filled in).

Webpages will prompt for consent (Yes / No / Always) at runtime, this
can be just a warning rather than a prompt

x

x

Default ask at runtime (one-shot)

Widgets will require one-off user consent at runtime. This fact will be
visible & modifiable at install time.

Webpages will prompt for consent (Yes / No / Always) at runtime, but the
PZP will remember the setting.

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

Remote invocations:

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

Webpages will prompt for consent (Yes / No / Always) at runtime, this
can be just a warning rather than a prompt

Default ask at runtime (one-shot)

Widgets will require one-off user consent at runtime. This fact will be
visible & modifiable at install time.

Webpages will prompt for consent (Yes / No / Always) at runtime, but the
PZP will remember the setting.

Default ask at runtime (every time)

Widgets will require user consent at runtime, every time. This fact will
be visible & modifiable at install time.

Webpages will prompt for consent (Yes / No / Always) at runtime

x

x

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Webpages will display a short notification at first-use saying that
access was denied, with a button to change settings

x

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

The WAC deviceinteraction module[¶](#The-WAC-deviceinteraction-module)
----------------------------------------------------------------------

### Overview of API[¶](#Overview-of-API)

Link to API - <http://specs.wacapps.net/deviceinteraction/index.html>

This module provides a mechanism to interact with the end-user through
features such as: device vibrator, device notifier, screen backlight,
device Wallpaper.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  Excessive use of device notification features (vibrate, backlight)
    would drain battery and be annoying. This could render the device
    unusable, or make the user (such as Peter) turn off these features
    altogether at the OS level, affecting other applications.
2.  Using notifications could embarrass the user or alert others to
    their presence, impacting their privacy. E.g., making the phone
    vibrate / notify in a public setting.
3.  Changing wallpaper could cause embarrassment or alarm. E.g., setting
    it to something work-inappropriate, or setting Georg's phone
    wallpaper to have a picture of a woman who is not his wife...

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  It could cause some panic or confusion if invoked from the wrong
    device
2.  Sending a notification to the wrong device would also render the
    notification useless - this might result in a loss of
    integrity/availability of application functionality. It could result
    in someone missing an appointment or meeting.
3.  Remote battery drain is quite possible, as the easiest mitigation
    for misuse of this API would be the fact that it is obvious if too
    much vibrating / screen light is used. If the device is remote,
    however, it will not be obvious

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

TBC.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

Nothing obvious beyond loss of application functionality.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

Nothing obvious beyond loss of application functionality. Excessive use
of certain features might damage devices?

### Mitigations[¶](#Mitigations)

Not a high risk API

1.  Remote use of this API seems relatively unlikely. Suggest that it is
    denied by default for remote invocation.
2.  Upon remote invocation of the setWallpaper API, have a mandatory
    confirm dialogue appear on remote devices.
3.  [Vibration API Mozilla
    analysis](https://wiki.mozilla.org/WebAPI/Security/Vibration)
    suggests limits on how often this make be invoked - e.g., don't
    allow hundreds of API invocations.
4.  Limits should be placed on the light on / off command.
5.  Require user consent before allowing the "setWallpaper" command.

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

For the notify, vibrate and light LOCAL invocations:

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

For the notify, vibrate and light REMOTE invocations:

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

For setWallpaper LOCAL invocations:

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

For setWallpaper REMOTE invocations:

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

The W3C DeviceOrientation Event specification[¶](#The-W3C-DeviceOrientation-Event-specification)
------------------------------------------------------------------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://www.w3.org/TR/2011/WD-orientation-event-20111201/>\
<http://www.w3.org/TR/orientation-event/>

Provides information about the physical orientation and motion of a
hosting device.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This API could be used to infer keystrokes on the touch screen.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  It could also be used to identify someone's general activities and
    whether they are moving. This might help narrow-down location, and
    give information about user habits, particularly if augmented by
    other information (e.g. what's the current user location plus some
    location specific information).

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

### Mitigations[¶](#Mitigations)

1.  Put the device on a hard surface when typing.
2.  Don't use the default on screen keyboard.
3.  Disable the orientation sensors during touch-screen keyboard
    operation, when possible.

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

X

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

### Other refs[¶](#Other-refs)

<http://static.usenix.org/events/hotsec11/tech/final_files/Cai.pdf>

The W3C File API[¶](#The-W3C-File-API)
--------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://www.w3.org/TR/2011/WD-FileAPI-20111020/>\
<http://www.w3.org/TR/FileAPI/>

Provides read-only file objects representation.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This API could be used to access local files (read only) containing
    sensitive data.

This could be exploited, for example, by Harold, who develops a free and
funny application which can provide the user a nice quote (from an
external DB of quotes) chosen on the information present on the file
system (e.g., retrieve the user name from the file system, and then look
for quotes which contains the same name). To do so, the application
access read the file system with the file API, whose behavior if not
restricted allow access even to sensitive system sections (e.g.
.webinos, where the private key is stored). Those private date can be
sent outside during the exchange with the external quote database.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  This API could be used to access remote files (read only) containing
    sensitive data.
2.  It may induce a false feeling in the user, which may assume that
    installing the application on one device limits what it can access
    to just that device, enabling access of sensitive information on
    other devices of the zone.
3.  It is also a case of minimising the surprise to the end user - they
    may assume that installing the application on one device limits what
    it can access to just that device.

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

1.  Arguments are not validated, the Jimmy and Jessica have to provide
    by itself the proper validation.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  Certain UAs, i.e., Browsers. In order to manage origin-private
    filesystems within webinos, additional information is required
2.  Encoding Subtleties: The W3C File API
    specification(<http://www.w3.org/TR/FileAPI/>) requires the IANA:
    Character Sets to be supported
    (<http://www.iana.org/assignments/character-sets>). Internally,
    JavaScript uses UTF-16; the implementation uses UTF-8 and currently
    ignores any given encoding. This direct manipulation have to pay
    attention to not introduce encoding mismatch.
3.  unproper data read by applications could contain malicious code,
    exploit bugs and enable bad application behaviour

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  it could be a first step (information leakage, device
    fingerprinting) for another threat which influence device reputation
2.  reading malicious code that enable bugs could provide root access or
    system crash

### Mitigations[¶](#Mitigations)

1.  For developers threats, provide examples which clarify how the API
    works for each ambiguous case
2.  Each application could have a filesystem section devoted to its own
    files. File access outside this area should be denied. (This can be
    done via File API - Directories and System)
3.  Files (or application's file system area) should be encrypted to
    avoid data disclosure to unauthorized readers.
4.  Files' content should be parsed to avoid malicious code execution.

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

Private Application file system

B-A

W-R

W-U

Policy

Explanation (Widgets)

Explanation (Browser apps)

Silently allow

Applications will be granted access to this API without user consent
being required. This can only be modified using a policy editor.

x

x

Default allow (install time)

Widgets will need user consent at install time, but users will expect to
allow it (the tick-box will automatically be filled in).

Webpages will prompt for consent (Yes / No / Always) at runtime, this
can be just a warning rather than a prompt

x

Default ask at runtime (one-shot)

Widgets will require one-off user consent at runtime. This fact will be
visible & modifiable at install time.

Webpages will prompt for consent (Yes / No / Always) at runtime, but the
PZP will remember the setting.

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

Non private application file system

B-A

W-R

W-U

Policy

Explanation (Widgets)

Explanation (Browser apps)

Silently allow

Applications will be granted access to this API without user consent
being required. This can only be modified using a policy editor.

Default allow (install time)

Widgets will need user consent at install time, but users will expect to
allow it (the tick-box will automatically be filled in).

Webpages will prompt for consent (Yes / No / Always) at runtime, this
can be just a warning rather than a prompt

Default ask at runtime (one-shot)

Widgets will require one-off user consent at runtime. This fact will be
visible & modifiable at install time.

Webpages will prompt for consent (Yes / No / Always) at runtime, but the
PZP will remember the setting.

Default ask at runtime (every time)

Widgets will require user consent at runtime, every time. This fact will
be visible & modifiable at install time.

Webpages will prompt for consent (Yes / No / Always) at runtime

x

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Webpages will display a short notification at first-use saying that
access was denied, with a button to change settings

x

x

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

The W3C File API - Writer[¶](#The-W3C-File-API-Writer)
------------------------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://www.w3.org/TR/2012/WD-file-writer-api-20120417/>\
<http://www.w3.org/TR/file-writer-api/>

Provides write-only file objects representation.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This API could be used to corrupt or forge local and remote files'
    content.
2.  It can be used write data to fill the local or remote file system

This open the way to multiple threats, for example, by David to change
system parameters or fill the available space of an in-car system, thus
leading a not skilled user to frequently come back to the car repairer
and spend lot of money.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  It is possible for a client to be impersonated, if not trusted
    identity is verified (and if many devices are regularly off).
2.  Ethan, the spammer, could write exploit code in remote files (or in
    file which will be accessed by remote device), making possible
    creation of cross-device botnets

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  Certain UAs, i.e., Browsers. In order to manage origin-private
    filesystems within webinos, additional information is required
2.  Encoding Subtleties: The W3C File API
    specification(<http://www.w3.org/TR/FileAPI/>) requires the IANA:
    Character Sets to be supported
    (<http://www.iana.org/assignments/character-sets>). Internally,
    JavaScript uses UTF-16; the implementation uses UTF-8 and currently
    ignores any given encoding. This direct manipulation have to pay
    attention to not introduce encoding mismatch.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  In specific device (e.g. In-car system) should be restricted to
    avoid integrity loss of important system data.

### Mitigations[¶](#Mitigations)

1.  Each application could have a filesystem section devoted to its own
    files. File access outside this area should be denied. (This can be
    done via File API - Directories and System).
2.  Files encryption can avoid data forgery but can't avoid data
    corruption.
3.  cross-device IDS to identify cross-device exploits.

### Recommended default policy rules for applications[¶](#Recommended-default-policy-rules-for-applications)

  Code   Type
  ------ ------------------------------------------------------
  B-A    Browser-based, authenticated via TLS certificates
  W-R    Widget, authenticated using a recognised certificate
  W-U    Widget, unrecognised

Private Application file system

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

Non private application file system

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

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

X

X

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

The W3C File API - Directories and System[¶](#The-W3C-File-API-Directories-and-System)
--------------------------------------------------------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://www.w3.org/TR/2012/WD-file-system-api-20120417/>\
<http://www.w3.org/TR/file-system-api/>

Provides means to navigate file system hierarchies.\
Provides means to expose sandboxed sections of a user's local
filesystem.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This API could be used to navigate file system directories and other
    local applications directories.
2.  It can take file system resources inappropriately using storage
    request API.
3.  It can prevent legitimate data access moving local or remote files
4.  it can delete data removing local or remote files

For example, if access to critical file, like credential ones (e.g.
password or private key) is incorrectly allowed, Frankie (the alienated
script kiddie) may be able to delete them, in fact "disconnecting" the
device from the zone (since no longer able to authenticate versus the
other devices), just to make "funny" annoyance to "friends"

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

1.  Some operations invalidate the entry/blob used, e.g., remove. The
    implementation does not keep track of the entries/blobs returned,
    creating copies if the same entry/blob is requested multiple times,
    thus not propagating invalidation to all affected objects. The
    validation process is left to the underlying system. This could
    create integrity weaknesses (entries supposed to be deleted but yet
    there), and allow for persistent presence of entries, which could
    lead to information leakage if sensitive information are not
    properly deleted.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

Developers could experience some discrepancies between actual
implementation and expected behavior

1.  Certain UAs, i.e., Browsers. In order to manage origin-private
    filesystems within webinos, additional information is required
2.  Encoding Subtleties: The W3C File API
    specification(<http://www.w3.org/TR/FileAPI/>) requires the IANA:
    Character Sets to be supported
    (<http://www.iana.org/assignments/character-sets>). Internally,
    JavaScript uses UTF-16; the implementation uses UTF-8 and currently
    ignores any given encoding. This direct manipulation have to pay
    attention to not introduce encoding mismatch.
3.  Some operations, e.g., removeRecursively, could continue after the
    occurrence of an error or exception. This implementation works
    differently, aborting any operation that encounters an error or
    exception. Thus, an operation may partially succeed, e.g.,
    removeRecursively may remove some (up to the occurrence of an error
    or exception) but not all children of a directory. The app developer
    have to understand and check the success of those commands to avoid
    damage and leave the system in inconsistent state.\
    Presumably an inconsistent delete operation might result in
    private/valuable data not being deleted, which might cause
    embarrassment due to unexpected data disclosure. E.g., when selling
    an old device, or even affect valuable intellectual property.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

No obvious threats. Not much significantly, an attacker could navigate
the OS file system and move or delete OS files, causing OS instability
and bad user experience.

### Mitigations[¶](#Mitigations)

1.  For developers threats, provide examples which clarify how the API
    works for each ambiguous case
2.  Each application could have a filesystem section devoted to its own
    files. File system navigation, movement, copy and deletion outside
    this area should be denied, as well as "anonymous" file system
    access

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

X

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

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

The W3C Gallery API[¶](#The-W3C-Gallery-API)
--------------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.w3.org/2009/dap/gallery/>

Provides access to the media gallery.

NOTE: at the moment there is not implementation (deferred to phase 2)
and no final decision about the specification (the W3C Gallery is a
little outdated). Thus, only quite vague threats are mentioned.

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This API could be used to access sensitive multimedia data stored in
    a local or remote gallery.
2.  Adding objects to the gallery an attacker could fill the file
    system.

An attack perpetrated by an evil person could discredit or embarrass a
specific individual, accessing sensible photos and even allowing for
ransom in the worst cases.\
The integrity of photos and gallery must be assured as well, to avoid
possible cases of vilification (e.g. by changing a photo with a modified
one).

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

### Mitigations[¶](#Mitigations)

1.  The Gallery implementation should impose restrictions to the gallery
    size,

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

X

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

Default deny (install time)

Widgets will require user consent at install time, but users will expect
NOT to allow it (the tick-box will automatically be empty).

Web pages will display a short notification at first-use saying that
access was denied, with a button to change settings

Silently deny

Applications will not be granted access to this API, and users will not
be asked at install time. This can only be modified using a policy
editor.

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

The W3C Media Capture and Streams API[¶](#The-W3C-Media-Capture-and-Streams-API)
--------------------------------------------------------------------------------

### Overview of API[¶](#Overview-of-API)

<http://dev.w3.org/2011/webrtc/editor/getusermedia.html>

This specification defines an API that provides access to the audio,
image and video capture capabilities of the device. Development on the
previously referred *W3C Media Capture API*
(<http://www.w3.org/TR/media-capture-api/>) has stopped, and further
work is taking place as part of *Media Capture and Streams*
(<http://dev.w3.org/2011/webrtc/editor/getusermedia.html>).

### Threats[¶](#Threats)

#### API-Specific threats and misuse cases[¶](#API-Specific-threats-and-misuse-cases)

1.  This API could be used to compromise the privacy of the user, as the
    accessed media may contain private information, either directly in
    audio or video form or could be derived from the shown surrounding,
    e.g. location of the user, contact/dialogues with other persons or
    in the simplest case the presence of the user.
2.  Accessed audio or video could be used to build user profiles, e.g.
    music/TV in background captured and delivered with the stream.
3.  Users will expect the same security in Web based real-time
    communication as they are used to from traditional telephony
    service, e.g. the identification of callee and caller is up the
    application. A user may be communicating with someone else than
    he/she is expecting.

#### Threats based on remote invocation of this API from another device[¶](#Threats-based-on-remote-invocation-of-this-API-from-another-device)

1.  Any mechanism that bypasses the user consent to allow the media
    capture could be misused by potentially malicious apps. As this API
    introduces programmatically privacy threats and was originally
    designed for the Web browser execution environment an user consent
    prompt is an inherent part of its rationale. Any remote invocation
    should therefore incorporate user consent as well. Implications of a
    remote prompt needs to be examined.
2.  API usage could generate high costs through generation of high
    volume data

#### Implementation threats and possible attacks[¶](#Implementation-threats-and-possible-attacks)

In the first phase of the project this API was not implemented. Only
theoretical assertions can be made currently.

1.  The concurrent access to media capture devices could be made
    possible but could have consequences of the end user. For example,
    once a user has granted access within one application and switches
    to use a different application then the first one may still have
    access to the media capture devices. This leads to a requirement of
    exclusive usage of a specific device and revocation of granted
    access rights.

#### Threats to apps and developers using this API (E.g. Jimmy and Jessica)[¶](#Threats-to-apps-and-developers-using-this-API-Eg-Jimmy-and-Jessica)

1.  In both cases exclusive and shared access to media capture devices
    unexpected behavior. Exclusivity may lead to denial of service and
    shared operation mode to non-transparency for the end user.

#### Threats to device manufacturers, operators, other stakeholders[¶](#Threats-to-device-manufacturers-operators-other-stakeholders)

1.  Enabling audio and video communication in Web applications may have
    impact on the traditional telephony via mobile/fixed operated
    networks as well as VoIP networks
2.  Device manufacturers may be forced to improve their products to
    support media processing for Web based communication (hardware media
    en/decoding) to lower the thread of high cpu usage and unresponsive
    devices

### Mitigations[¶](#Mitigations)

-   Require explicit user consent before a service may be accessed
-   Provide a notification when a device's media capture services are in
    use. Also make clear from the calling device where a media capture
    service is hosted (e.g., which device is providing the API).

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

