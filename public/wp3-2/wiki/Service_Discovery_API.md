Service Discovery API[¶](#Service-Discovery-API)
================================================

Between version 7 and version 12 of this document huge changes were
made. A rationale for these changes can be found in
attachment:Webinos-WP3-ServiceDiscoveryRationale.pptx. The changes
itself can be found here:
<http://dev.webinos.org/redmine/wiki/t3-2/Service_Discovery_API/diff?version=12&version_from=7&commit=View+differences>

Comments welcome!!!!

Prerequisites[¶](#Prerequisites)
--------------------------------

Web app is installed on device and is authorized by personal zone proxy
/ runtime

Service Discovery[¶](#Service-Discovery)
----------------------------------------

### Philosophy[¶](#Philosophy)

Important webinos distinctions are reflected in the interface.

These important distinctions are:

-   Location
-   Self and Friends
-   Devices and Services

Furthermore, 'reflected in the interface' means the classes, objects and
methods of the API model location, friends and (own) devices. Other
(search) parameters that are not core webinos (like number of mega
pixels on a camera) are indeed parameters of the search functions.

### Synchronous and asynchronous[¶](#Synchronous-and-asynchronous)

Both should be possible. Clean asynchronous behaviour is demonstrated in
e.g. the GeoLocation API found at
<http://dev.w3.org/geo/api/spec-source.html>. Synchronous querying is
useful only in situations that allow for that, and always means 'give me
the situation at this point'. Could be used when working with (lists of)
friends, the (known) camera on the current device or other slow-changing
information.

More detail to be added after discussion.

### Location[¶](#Location)

Two types of location are important:

1.  location of persons (owner, friends)
2.  location of services (and the devices these run on)

Webinos provides 'easy to handle' abstractions of these, which improve
both privacy and usability. Supported abstractions are 'home', 'near',
'postal codes (in combination with country)'. Thought must be given how
the HTML5 GeoLocation API can be brought into webinos without redoing
it.

Interface design:

    1     // TODO
    2 
    3     // AND also support constructions like:
    4     location.isNearHome() // returns boolean

Thought must be given as to how webinos can use location in an optimal
manner.

### Search parameters[¶](#Search-parameters)

When searching for services, service parameters are formulated according
to RFC 4515: Lightweight Directory Access Protocol (LDAP): String
Representation of Search Filters (see
<http://tools.ietf.org/html/rfc4515>).

Examples are:\

    1     webinos.findFriends("(Email=stefani@ladygaga.com)", foundFriendCallback);
    2     webinos.findServices("(Type=navigation)", foundServiceCallback);
    3     webinos.findServices("&(Type=camera)(MP>6)", foundServiceCallback);

Benefits are:

-   simple yet powerful
-   standardised
-   resources abundantly available (documentation, examples, libraries)

### Class diagram[¶](#Class-diagram)

![](service_discovery_class_diagram.png)

Note that HTML5 GeoLocation is something different than webinos
location. How different is up for discussion.

### Interface design[¶](#Interface-design)

        Objects:
            location
            service
            device
            user
                owner
                friend

Example of a "one-shot" service discovery request:\

    1     function showPhoto(camera) {
    2       // Take and show a photo
    3     }
    4 
    5     showPhoto(webinos.currentDevice.camera);

Example of a service discovery request using a camera that is somewhere
else:\

    1     function showPhoto(camera) {
    2       // Take and show a photo
    3     }
    4 
    5     webinos.findServices("&(Type=camera)(!location=Location.HERE)", showPhoto);

Example of a service discovery request with error handling:\

     1     function showPhoto(camera) {
     2       // Take and show a photo
     3     }
     4 
     5     function errorCallBack(errno) {
     6       // Update a div element with error.message.
     7     }
     8 
     9     // Find all services of type 'camera' but take no longer than 10 seconds
    10     webinos.findServices("(Type=camera)", showPhoto, errorCallBack, {timeout:10000});

Some more cool constructs:\

     1     webinos.owner           // owner object, derived from user class
     2     webinos.friends         // array of users (from cache)
     3 
     4     webinos.location        // location object (shorthand for webinos.currentDevice.location)
     5     webinos.owner.location  // location object, indicating where the formal owner of this device is (can be different from location of device!)
     6     webinos.devices         // array of device objects
     7     webinos.services        // array of service objects (from cache, so address-ability + reach-ability + policy unknown)
     8 
     9     webinos.friend["victor@tno.nl"].findServices(LDAP query, callBack);
    10 
    11     webinos.findFriends(LDAP query, callback);
    12 
    13     webinos.onServiceChange();     // takes (anonymous) function, called until nullified
    14     webinos.onFriendChange();      // takes (anonymous) function, called until nullified

### Service Binding[¶](#Service-Binding)

After a service is found (discovered), an actual instance (“thing that
we can use”) must be available. The process of getting such an instance
is called binding.

“notice and consent”: both, service and application need to mutually
agree

-   application’s PZP checks authentication and privacy policies by
    service’s PZP
-   service’s PZP checks authentication and privacy policies by
    application’s PZP
-   webinos might present UI, save decisions

… if agreed …

Note that a service might need elevated privileges to run, but that’s
been agreed upon installation of the service / application, so doesn’t
need to be checked again here. Requested permissions might dynamically
change after installation, e.g. expansion of the use of memory.

    1     function serviceFound(s) {
    2       s.bind();
    3       // Use service
    4     }
    5 
    6     webinos.findServices("...insert query...", serviceFound);

The return code of bind() must be checked, as binding may fail:

-   binding attempt timed out
-   service no longer available
-   permissions changed

### Service Auto-binding

For common services a separate bind() should not be necessary.

