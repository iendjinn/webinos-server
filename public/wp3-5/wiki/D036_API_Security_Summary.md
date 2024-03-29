API Security and Privacy Analysis Summary[¶](#API-Security-and-Privacy-Analysis-Summary)
----------------------------------------------------------------------------------------

The API security and privacy analysis makes the following suggestions
which are not yet incorporated into the API specifications or webinos
platform, including:

### Investigate a more privacy-friendly way to implement the Discovery API[¶](#Investigate-a-more-privacy-friendly-way-to-implement-the-Discovery-API)

An issue also highlighted as part of the architectural risk analysis,
the Discovery API is privacy-invasive because due to its use of
persistant identifiers for webinos services; this facilitates user
fingerprinting. For applications needing only relatively impersonal
services, this API provides unnecessary information. We propose that web
intents would be a potential alternative.

### Provide an alternative interface to the Messaging API[¶](#Provide-an-alternative-interface-to-the-Messaging-API)

For applications which require only visibility to certain incoming
patterns and the need to send occasional messages, an alternative API
should be available. The current API is more invasive than may be
strictly necessary. A new API might include greater restrictions - such
as only being able to send a message if it has first been viewed by the
end user - but could also be allowed by default to applications.

### Provide an alternative interface to the Calendar API[¶](#Provide-an-alternative-interface-to-the-Calendar-API)

The Calendar API, like the Messaging API, exposes a great deal of
information to requesting applications. This is unnecessarily dangerous
for an application which requires only the free/busy status of an
application rather than precise entry details.

### Create a 'system level' and 'web app level' distinction[¶](#Create-a-system-level-and-web-app-level-distinction)

A final consideration for webinos is that there are two quite separate
use cases considered by the APIs.

-   Smaller applications requiring only slightly more functionality than
    that provided by the web browser. These are currently given more
    resources than they need by the Messaging, Calendar and Discovery
    API.
-   System-level applications which are more trusted and need to have
    greater access to device features. More needs to do more to ensure
    their webinos runtime environment is secure and immune to attacks on
    any hosted components.

'web app level' apps should be allowed to run in the browser, and use a
more privacy-friendly discovery system. At the same time, these apps
should restrict access to some APIs completely.

'system level' apps should run exclusively in a widget renderer, but
have the potential to access more APIs. We recommend these only be
installed from app stores and must be pre-vetted.

