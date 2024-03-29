Service discoverybinding and event handling meeting 2011-05-24[¶](#Service-discoverybinding-and-event-handling-meeting-2011-05-24)
==================================================================================================================================

Attendees[¶](#Attendees)
------------------------

Christian Fuhrhop\
Habib Virji <habib.virji@samsung.com>\
ziran sun <ziran.sun@samsung.com>\
Marco, Stefano (ISMB) <gavelli@ismb.it>\
Victor Klos <victor.klos@tno.nl>\
Anders Isberg <anders.isberg@sonyericsson.com>\
Claes Nilsson <claes1.nilsson@sonyericsson.com>\
André Paul <andre.paul@fokus.fraunhofer.de>

Service Discovery and Service Binding[¶](#Service-Discovery-and-Service-Binding)
--------------------------------------------------------------------------------

### Anders introduction[¶](#Anders-introduction)

-   First draft API reflecting the "Access to remote API session" in
    Berlin. [Service Discovery
    API](http://dev.webinos.org/specifications/draft/servicediscovery.html)
-   Dom has provided a [code example/prototype of this
    API](https://listen.fokus.fraunhofer.de/sympa/arc/webinos-wp3-ml/2011-05/msg00076.html).

### Zone id /user id as input or selected by user and Success Callback.[¶](#Zone-id-user-id-as-input-or-selected-by-user-and-Success-Callback)

Refer to e-mail discussion between Anders and Dom:
<https://listen.fokus.fraunhofer.de/sympa/arc/webinos-wp3-ml/2011-05/msg00103.html>
and
<https://listen.fokus.fraunhofer.de/sympa/arc/webinos-wp3-ml/2011-05/msg00105.html>

No yet a conclusion on way to define user id etc but Anders will adjust
API based on comments from Dom and Victor.

Should we have a Success callback for each service discovered? Or should
we have one callback that returns when the user has selected the service
to use meaning that the API implementation builds the selection list.
The latter is simpler for the delevloper but not as flexible. discovery
and bind in one call? There were no objections to have just one
callback. We can also have support both ways by having the success
callback for each service discovered and additionally create a
synchronous method through a JS lib.

### Filter Interface[¶](#Filter-Interface)

Currently empty. Which vocabulary should we used? Vicor suggests LDAP
filters (RFC 4515: Lightweight Directory Access Protocol (LDAP): String
Representation of Search Filters (see
<http://tools.ietf.org/html/rfc4515>). There are implementations in open
source supporting both LDAP formats and data base. But we don't need to
use the LDAP data base.

**Conclusion:** Use the LDAP approach as a starting point.

### Victors input[¶](#Victors-input)

See "Service discovery API wiki page (updated by Victor Klos)":
</t3-2/wiki/Service_Discovery_API>

Vicor suggests that the components in the class diagram at [Class
diagram](http://79.125.104.127/redmine/projects/t3-2/wiki/Service_Discovery_API#Class-diagram)
should be reflected in the API. Please also review "Some more cool
constructs". Good ideas but Anders thinks this might go out of service
discovery and is not sure we will have time to support this before
deadline end of June. We can continue to evolve this in phase 2 of APIs
(WP 3.2). However, Victor stressed the importance to provide intersting
functionality to developers.

**Conclusion:** Anders to continue to evolve the API based on comments
from Dom and Victor.

### Event handling - Stefano[¶](#Event-handling-Stefano)

"Event handling wiki":
<http://79.125.104.127/redmine/projects/t3-2/wiki/Informal_low_level_event_handling_API_attempt>

Introduction by Stefano.

- Low level API, not sure if application developers should use it but
for those implementing services, i.e. "Webinos internal" and building
block for higher level stuff.\
- Maybe for phase 2\
- The high level is the Service Discovery/Bind API\
- Anders: Forward event? Stefano: Inspired by XMPP publication system.\
- Victor: Looks XMPP like, use instead of XMPP or on top of XMPP?
Stefano: Don't know.\
- Anders: We should be agnostic to underlying protocol for event
exchange. Suggest a small and simple API as starting point.\
- Victor: We should limit the scope to IP.\
- Anders: This needs to be discussed within Webinos.

Two alternatives:

1.  Tangible Event handlng Widl API specification for WP 3.2 delivery.
2.  Stefano's wiki only as informative statement on a general structure
    of a low level event handling API for WP 3.2 delivery.

However, after the meeting Anders and Claes discussed a third
alternative that is a simplified event API that only supports
addEventListener, removeEventListener, dispatchEvent as a tangible Event
handlng Widl API specification for WP 3.2 delivery. This has earlier
been proposed by Andre according to
<http://79.125.104.127/redmine/issues/259>.\
**So, could Stefano and Andre coordinate on this and also coordinate
with Anders on relation with Service discovery.**

