Context Management[¶](#Context-Management)
==========================================

    This is currently work-in-progress.

Main premise[¶](#Main-premise)
------------------------------

The webinos context framework provides access to contextualized data in
order to enable the design and operation of context-driven webinos
applications/services.

The framework is responsible for collecting and storing context data
(through the identification of specific context related events that
happen within webinos enabled devices) and providing applications with a
layer to access such data either by querying against the storage or by
being notified in real time for context changes (when specific events
happen).

The current state of implementation[¶](#The-current-state-of-implementation)
----------------------------------------------------------------------------

The Context Manager's key functionality can be summed up in the
following points:

-   Automatically keeps a log of all RPC calls, stripped from the
    parameters and results to the PZP in a locally stored log.json file.
-   Contains the Webinos Context Vocabulary, which is a description of
    the APIs, their methods exposed to the WRT, the expected structure
    of their parameters and the expected structure of their results,
    structured under Context Objects that would produce similar
    contextual information (e.g. MyLocation is a the same Context Object
    irrespective of whether it is produced by Geolocation API's
    getCurrentPosition, watchPosition or from a call the Vehicle's API
    GPS functionality).
-   Automatically intercepts RPC calls of API methods.
-   Automatically intercepts the registration of listeners and tracks
    the callbacks in order to match them to the corresponding
    registration call, structuring them as unique RPC calls.
-   Automatically looks up every RPC call in the Webinos Context
    Vocabulary, finds the corresponding match based on the API making
    the call, the name of the method called and in some cases the
    parameters used to match the call to a Context Object. The call's
    input and output data are structured based on the Webinos Context
    Vocabulary's rules, disallowing data like passwords and other
    sensitive information that are excluded from any contextual query
    and are not to be passed to the Policy Manager.
-   Context Objects created from RPC calls are stored in a buffer file
    if a PZH is not connected.
-   Context Objects created from RPC calls and those included in the
    context object buffer are sent to the PZH to be stored in the
    SQLite3 Context DB.
-   Allows the definition of custom Context Objects in a separate
    Webinos Application Context Vocabulary directly from the WRT.
-   Applications can request their own uniquely defined Context Objects
    to be stored in the PZH Context DB using the same structure as all
    other context data.
-   The data in the Context DB can be queried from the WRT using a
    custom Context Querying structure that allows the description of
    simple or complex queries containing sub-queries as related to
    Context Objects, treating the database as descriptive of Object
    Models. The results are returned as Context Objects.
-   Integration with the Policy Manager gives permissions to APIs and
    applications to store Context Objects in the PZH Context DB.
-   Integration with the Policy Manager gives permissions to
    applications to run context queries to the PZH Context DB.

Differences between 3.1, 4.1[¶](#Differences-between-31-41)
-----------------------------------------------------------

In the 3.1 deliverable for context the focus was on the integration of
the Context API with the rest of the proposed (then) webinos
architecture, together with a set of specifications revolving around the
potential usage of the API by webinos applications, while providing a
few points on the actual implementation architecture. It was soon
discovered during 4.1 that there was an important strategic decision to
be taken. The Context API had to leave part of the data handling of the
contextual information to the application developers by providing a
number of tools to create, store, extract and analyse contextual
information, while at the same time provide automatic mechanisms that
store contextual information already transferred throughout the
platform. The result was the introduction of the term and structure of
"Context Object". A Context Object refers to a notion similar to a meme.
It's the minimum of data that are required to define any single personal
contextual piece of information (e.g. MyLocation, MyHouse, MyFriend,
MyFavoriteTVChannel etc).

The definitions of what pieces of data form a complete Context Object,
where, when and how to find them are included in Context Vocabularies.
These are text files in json structure. There are two forms of Context
Vocabularies that were created in 4.1. The first one is the API Context
Vocabulary, which is read-only to the application developer and contains
definitions of Context Objects that utilise the RPC API calls that are
made by applications to automatically store Context Objects. The second
one is the Application Context Vocabulary, which contains the
definitions of Context Objects created by applications. Application
Context Objects are not stored automatically, but rather are requested
to be stored by the application that defined each.

The Context Objects are flattened and stored on an SQLite3 database
located on the PZH. If a connection to the PZH is not available (Virgin
Mode), the data are stored in a temporary file as a buffer, until a
connection to the PZH is available. The extraction of the Context
Objects is performed via a custom SQL query builder created for the
Context API. All the events relating to Context pass through the Policy
Manager.

Main points to be added in the new specifications.[¶](#Main-points-to-be-added-in-the-new-specifications)
---------------------------------------------------------------------------------------------------------

The proposed architecture can be summed up to the following schema:

![](http://dev.webinos.org/redmine/attachments/2116/Context_Schema2.png)

The new requirements to be added include the registration of context
objects to be extracted and stored locally per device, either based on
simple extraction rules or more complex rules that describe Context
Objects as results of more complex queries, without the requirement of a
connection with the PZH. For example, a statistical rule applied on the
MyLocations Context Objects can generate a more permanent Context Object
called MyHome or MyWorkPlace.

Another requirement is the addition of a background service that will
store API Context Objects while the PZP is running and without an
application making specific API calls. The registration of such
listeners should be implemented in the same way that Application Context
Objects are defined through the Policy Manager.

Additionally, with the advancement of the Policy Manager and the ability
to create more complex policy rules, each Context API call will have a
number of policy events relating to it in the following axes:

-   Context API Method
-   Read/Write
-   Application making the request
-   Data Object (Context Object, rule to be added/updated etc)

