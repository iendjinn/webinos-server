Context Manager[¶](#Context-Manager)
====================================

Main premise[¶](#Main-premise)
------------------------------

The scope of this area encompasses all the necessary activities that
pertain to gathering, storing and making available context within
webinos, particularly the following objectives are to be addressed:

-   Identification of Context data relevant for the webinos operation.
-   Detection of Context Data within webinos (through the webinos
    entities) and related Context Sources *identification of existing
    APIs to be used*
-   Acquisition of Context Data for webinos system *identification of
    existing APIs to be used*
-   Representation of Context Data within webinos *definition of the
    necessary context structures in specific data format*
-   Storage of Context Data within webinos \_definition of suitable data
    storage facility
-   Distribution of Context Data among webinos entities *specification
    of the necessary APIs to be created*

The webinos context framework provides access to contextualized data in
order to enable the design and operation of context-driven webinos
applications/services.

The framework is responsible for collecting and storing context data
(through the identification of specific context related events that
happen within webinos enabled devices) and providing applications with a
layer to access such data either by querying against the storage or by
being notified in real time for context changes (when specific events
happen).

A context-aware application either makes use of a single piece, a
combination, or a time series of context related data, for example, the
current state of the compass on a mobile phone, the current state of the
ambient light sensor of a laptop computer or the geographic location and
the closest Wi-Fi networks, in order to make an automatic contextual
reconfiguration (e.g. increase the brightness of the monitor, enable
Wi-Fi connectivity) or enable a proximate selection (e.g. highlight
Points Of Interest geographically located near the user or print a
document on the closest printer). In order to take advantage of such
functionality, an application developer has to have access to means of
acquiring contextual data, storing them, filtering them, combining them
and performing commands based on the resulting information. For
ubiquitous, distributed and context-aware computing applications, the
aim is to provide appropriate middleware that can perform Remote Process
Calls (RPCs), while at the same time introducing an abstraction layer
that will facilitate the development process, by hiding the
heterogeneity of the networking environment, supporting advanced
coordination models among distributed entities and making as transparent
as possible the distribution of computation.

The webinos project aims to provide a cross-platform level of
abstraction for procedural calls, but at the same time, incorporate an
additional data abstraction layer for use in third party context-aware
and context-sharing applications that are webinos-enabled. The main data
construct relating to contextual information in webinos is the Context
Object. Inspired by the definition of a meme, a Context Object is a unit
for carrying data that uniquely defines a piece of contextual
information. For example, whereas a call to a GPS sensor will return a
number of outputs (latitude, longitude, heading, speed, accuracy and
altitude accuracy), one relevant Context Object that can be called
MyLocation will contain only the most relevant data that can define the
unit, by excluding some and/or adding others, in this case ending up
with latitude, longitude, accuracy, altitude accuracy and time. Context
data collection can be performed in three ways:

-   **RPC Interception**: There is an automatic mechanism that, with the
    permission of the user via the Policy Manager, can intercept RPCs
    made by webinos-enabled applications to the various webinos APIs.
    The Context Manager transforms the message to a Context Object, by
    selecting fields that are considered to be containing contextual
    information in the RPC and structuring them as Context Objects, via
    the extensive API Context Vocabulary. The API Context Vocabulary is
    a list of structures and rules for the automatic contextualization
    of intercepted RPC messages.
-   **Context Service**: Context Objects can be registered for periodic
    background data collection when the PZP is running by defining
    Context Rules for the Context Object to be stored, the polling
    interval, the conditions and the collection method.
-   **Application Context Objects**: Context Objects can be defined and
    stored independently by any application. An application can request
    the registration of a new custom Context Object and request
    permission from the Policy Manager to start storing these Objects to
    the Context DB. The application can define its own process to
    obtaining the data for these objects, as well as the frequency and
    their lifetime. An application developer can make use of the webinos
    Application Context Vocabulary to define these custom rules and
    structures for storing application-specific Context Objects, or ones
    that are derived by any process or combination of preexisting or new
    contextual data.

The database where these Context Objects are stored securely is located
at a user's Virtual PZP and is reached via a channel opened by the PZH.
The Context DB contains data from across the devices and applications in
a Personal Zone (PZ) and each database is unique for that PZ. Querying
the Context DB is achieved through a simple to use dedicated query
builder that allows the treatment of the Context DB as an
Object-Oriented Database, focusing on its main construct, the Context
Object. The developer can perform queries directly to the Context API,
with the prospect of acquiring any type of Context Objects, created by
any API, any application and any device across the user's PZ.

Context Functionality[¶](#Context-Functionality)
------------------------------------------------

The Context Manager's key functionality can be summed up in the
following points:

-   Automatically keeps a log of all RPC calls, stripped from the
    parameters and results to the PZP in a locally stored log.json file.
-   Contains the Webinos API Context Vocabulary, which is a description
    of the APIs, their methods exposed to the WRT, the expected
    structure of their parameters and the expected structure of their
    results, structured under Context Objects that would produce similar
    contextual information (e.g. MyLocation is a the same Context Object
    irrespective of whether it is produced by Geolocation API's
    getCurrentPosition, watchPosition or from a call the Vehicle's API
    GPS functionality).
-   Automatically intercepts RPC calls of API methods.
-   Automatically intercepts the registration of API listeners and
    tracks the callbacks in order to match them to the corresponding
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
    if the Virtual PZP holding the Context DB is not connected.
-   Context Objects created from RPC calls and those included in the
    context object buffer are sent to the Virtual PZP to be stored in
    the SQLite3 Context DB.
-   Allows the definition of custom Context Objects in a separate
    Webinos Application Context Vocabulary directly from the WRT.
-   Applications can request their own uniquely defined Context Objects
    to be stored in the Virtual PZP Context DB using the same structure
    as all other context data.
-   The data in the Context DB can be queried from the WRT using a
    custom Context Querying structure that allows the description of
    simple or complex queries containing sub-queries as related to
    Context Objects, treating the database as descriptive of Object
    Models. The results are returned as Context Objects.
-   Polling Rules can be registered. In these, an API call can be
    scheduled in predefined intervals and the result is automatically
    intercepted by the Context Manager.
-   Context Event Listeners can be registered. A rule can be applied,
    where the when a specific condition is met and a Context Query
    returns a result, that result will trigger an event to the
    application that registered the listener.
-   Integration with the Policy Manager gives permissions to APIs and
    applications to store Context Objects in the Virtual PZP Context DB.
-   Integration with the Policy Manager gives permissions to
    applications to run context queries to the Virtual PZP Context DB.
-   Integration with the Policy Manager gives permissions to
    applications to create and enforce Context Rules.

Context Manager Data Flow Overview[¶](#Context-Manager-Data-Flow-Overview)
--------------------------------------------------------------------------

The proposed architecture can be summed up to the following Data Flow
diagram:

![](http://dev.webinos.org/redmine/attachments/3371/context_manager_schema_v3.png)

The new requirements to be added include the registration of context
objects to be extracted and stored locally per device, either based on
simple extraction rules or more complex rules that describe Context
Objects as results of more complex queries, without the requirement of a
connection with the Virtual PZP holding the Context DB. For example, a
statistical rule applied on the MyLocations Context Objects can generate
a more permanent Context Object called MyHome or MyWorkPlace.

Another requirement is the addition of a background service that will
store API Context Objects while the PZP is running and without an
application making specific API calls. The registration of such
listeners should be implemented in the same way that Application Context
Objects are defined through the Policy Manager.

It is very clear that users are not very good at understanding the
future value of keeping personal information private and are often quick
to share the ownership of such information without evaluating the impact
of its possible uses. With this in mind, the webinos platform ensures
that the ownership of contextual information stays with the user, while
access rights to applications to store, extract or query context data
can be given by the user to the application and not the application
developer. This allows the developer to build applications that can
utilize Context Objects that are stored by the webinos platform or other
applications in the same PZA. In order to further secure the privacy of
personal data, all transactions with the Context DB are monitored by the
webinos policy manager and specific access rights to read/write, to and
from the Context DB are provided per application and per type and per
source of Context Objects.

Additionally, with the advancement of the Policy Manager and the ability
to create more complex policy rules, each Context API call will have a
number of policy events relating to it in the following axes:

-   Context API Method
-   Read/Write
-   Application making the request
-   Data Object (Context Object, rule to be added/updated etc)

Context Vocabulary[¶](#Context-Vocabulary)
------------------------------------------

The context vocabulary is based on a structure that defines context
objects in relation to the APIs they belong to. In this sense, the
structure starts from the definition of the API and the data required to
recognize it, then the name of the Context Object captured. Finally, the
structure of the methods and the data relating to either the capturing
of data as part of a Context Object, or the expected values for
validation of a specific method. A generic example of this structure is
as follows.

    {
       "APIname" : "Name of API",
       "URI" : "http://www.webinos.org/APIName",
       "ContextObjects" : [
          {
             "objectName" : "MyContextObject",
             "methods" : [
                {
                   "Errors" : [
                      {
                         "logged" : false,
                         "objectName" : "Error",
                         "type" : "object",
                         "values" : [
                            {
                               "logged" : false,
                               "objectName" : "Error Field",
                               "type" : "data type" 
                            }
                         ]
                      }
                   ],
                   "inputs" : [
                      {
                         "logged" : true,
                         "objectName" : "",
                         "required" : false,
                         "type" : "array",
                         "values" : [
                            {
                               "logged" : true,
                               "objectName" : "",
                               "required" : true,
                               "type" : "Object",
                               "values" : [
                                  {
                                     "logged" : false,
                                     "objectName" : "timeout",
                                     "type" : "long" 
                                  }
                               ]
                            }
                         ]
                      }
                   ],
                   "objectName" : "method name",
                   "outputs" : [
                      {
                         "logged" : true,
                         "objectName" : "output name",
                         "type" : "object",
                         "values" : [
                            {
                               "logged" : true,
                               "objectName" : "An output value",
                               "type" : "double" 
                            }
                         ]
                      }
                   ]
                }
             ],

          }
       ],
       "otherMethods" : [
          {
             "Errors" : [],
             "inputs" : [],
             "objectName" : "A non context method",
             "outputs" : []
          }
       ]
    }

Deployment Diagram[¶](#Deployment-Diagram)
------------------------------------------

The Context Manager/ Context API is deployed in three locations:

-   A designated Virtual PZP that holds the ContextDB and the server
    side of the Context Manager and Context API,
-   the PZH, that holds the settings necessary to reach the Virtual PZP
    that holds the ContextDB and
-   the PZP side of the Context Manager and Context API

![](http://dev.webinos.org/redmine/attachments/3017/Context_Deployment.png)

Message Interception and storage[¶](#Message-Interception-and-storage)
----------------------------------------------------------------------

The Context Manager automatically intercepts messages that are delivered
to APIs, looks them up in the Context API vocabulary, filters and
transforms their content to a format that is meaningful for context
related queries. This data is forwarded to the Virtual PZP that holds
the ContextDB and are stored. In case the PZH or the Virtual PZP are
unreachable, the data is stored on a flat file that acts as a buffer of
data to be inserted to the ContextDB, until a connection to the Virtual
PZP is established.

![](http://dev.webinos.org/redmine/attachments/3006/Message_Interception_and_storage.png)

Context Querying[¶](#Context-Querying)
--------------------------------------

Querying Context Data is performed via a querying mechanism that
translates a high lever Context Query to a low level DB query intended
for the context DB. The query builder allow the creation of queries
based on the following clauses:

-   **eq**: Equals
-   **lt**: Less than
-   **le**: Less or equal than
-   **gt**: Greater than
-   **ge**: Greater or equal than
-   **starts**: Starts with
-   **ends**: Ends with
-   **in**: In the given list. The value must be and array.
-   **contains**: Value contains the given value, only applicable to
    DOMString

The sequence of events in the case that a caller, may it be an
application or an internal call is as follows:

![](http://dev.webinos.org/redmine/attachments/3004/Context_Querying.png)

Context Rules[¶](#Context-Rules)
--------------------------------

A context rule is defined as a context query that is set to run on
specific time intervals on the ContextDB and make its results available
to any application on any connected PZP that has policy clearance to
draw the result. If the rule has a very specific condition, the event
will not be fired until the condition is met. If a Rule has not been
renewed by the application for a month, the rule becomes inactive.

![](http://dev.webinos.org/redmine/attachments/3005/Context_Rules.png)

Scheduled API Calls[¶](#Scheduled-API-Calls)
--------------------------------------------

If an application requires constant polling of a Context Object, it can
request from the policy manager to register a Scheduled API Call from a
specific list of APIs for a specific time interval. The scheduled API
calls are valid for a month since the moment they are initiated. If no
application renews the registration of the scheduled calls in that
period, the scheduled API call becomes inactive.

![](http://dev.webinos.org/redmine/attachments/3007/Scheduled_API_Calls.png)

Activity Diagrams[¶](#Activity-Diagrams)
----------------------------------------

The following activity diagram demonstrates the operations carried out
in order to trigger a context event.\
![](http://dev.webinos.org/redmine/attachments/3372/activity_diagram-context_related_app_event.png)

The following activity diagram demonstrates the storage of context
objects in the case of a connected or connectionless state.\
![](http://dev.webinos.org/redmine/attachments/3373/activity_diagram-no_connection.png)

