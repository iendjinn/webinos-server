-   [Introduction](#Introduction)
-   [RPC protocol definition](#RPC-protocol-definition)
    -   [webinos RPC Requests](#webinos-RPC-Requests)
    -   [webinos RPC Requests with
        subscriptions](#webinos-RPC-Requests-with-subscriptions)
    -   [webinos RPC Responses](#webinos-RPC-Responses)
    -   [webinos RPC errors](#webinos-RPC-errors)
-   [Mapping JavaScript APIs to RPC
    messages](#Mapping-JavaScript-APIs-to-RPC-messages)
    -   [Mapping Function Calls](#Mapping-Function-Calls)
        -   [Invoking a Remote function](#Invoking-a-Remote-function)
            -   [Mapping function names](#Mapping-function-names)
            -   [Mapping parameters](#Mapping-parameters)
        -   [Callbacks](#Callbacks)
    -   [List of additions to general
        mappings](#List-of-additions-to-general-mappings)
        -   [Service Discovery API](#Service-Discovery-API)
            -   [FindCallBack.onFound](#FindCallBackonFound)
        -   [File APIs](#File-APIs)
    -   [List of additional messages](#List-of-additional-messages)
        -   [Generic Sensor API](#Generic-Sensor-API)
            -   [getStaticData function](#getStaticData-function)
        -   [Generic Actuator API](#Generic-Actuator-API)
            -   [getStaticData function](#getStaticData-function)
    -   [Full examples](#Full-examples)

Introduction[¶](#Introduction)
==============================

This section describes the RPC mechanism and protocol used in webinos.
This section also describes the dependencies between RPC and the
messaging specification since RPC objects are sent as payload of
messaging packages rather then, for example, direct requrests on a
RESTful interface. This also means that the RPC part of a call to a
remote system follows the JSON-RPC 2.0 specification but together with
messaging part it does not. Thus, it will be not possible to post just a
JSON-RPC message to an endpoint in order to get it executed. In addition
the webinos messaging must be wrapped around the calls.

In addition to the general RPC protocol and field encoding
specifications this section also lists all RPC messages that are made
between webinos entities. This especilly means the this section provides
the mapping between webinnos JavaScript APIs and RPC calls.

RPC protocol definition[¶](#RPC-protocol-definition)
====================================================

The webinos RPC protocol should be compliant to JSON RPC 2.0 as
specified at <http://jsonrpc.org/spec.html>. Before reading further
ensure that you are familiar with the JSON RPC version 2.0
specification.

webinos RPC Requests[¶](#webinos-RPC-Requests)
----------------------------------------------

According to JSON-RPC 2.0 a RPC request object needs to have four
members that are briefly described as:

-   *jsonrpc* A String that represents the protocol version used. It
    MUST be exactly "2.0" when using webinos.
-   *method* A String containing the name of the method to be invoked.
    The naming sheme used in webinos is described further later.
-   *params* A Structured value that holds the parameter values to be
    used during the invocation of the method. This member MAY be
    omitted.
-   *id* An identifier that MUST contain a String, a Number, or NULL
    value if included.

The method field itself is encoded using three parts as follows:

**method:** \<type\>@\<instance\>.\<function\>

-   \<type\>, a service type identifier that matches the service type
    followed by a '@' symbol, for example as used to select a service
    while using the findService method of the webinos service discovery
    API
-   \<instance\>, a service instance identifier that is used to specify
    the specific service to be used followed by a '.' symbol, for
    example in case multiple services of the same type are available
-   \<function\>, a method identifier that specifies the method that
    should be invoked on the target service

The \<instance\> value is not further specified and can be
implementation specific. It must be a locally unique identifier of the
related service so the a RPC calls can be uniquely assigned to a
specific service. For example if on a PZP two services of the same type
are available then the \<instance\> must be different in order to select
the desired service for invocation. The \<instance\> value must be
propagated by the service discovery so that client side service bindings
know about the service type and the service instance id (see
ServiceDiscvoery RPC protocol). Both, in addition to the actual method,
must be used to create the method field of the RPC request for service
invocation requests.

Following a full generic request message format and an example that
invokes a function called exampleFunction of an example service with
type *<http://webinos.org/api/example>* on a PZP is provided. The actual
service address in terms of the PZP where the service is running is not
part of the JSON-RPC message, it is handled through the messaging layer
as shown in the next example.

**Generic message format**

``` {.javascript}
JSON: Object
{
    id: <id>
    jsonrpc: "2.0" 
    method: <type>@<instance>.<function>
    params: {
      <param1>: <value1>
      <param2>: <value2>
    }
}
```

To summarize the generic syntax of webinos RPC calls: *id* is a locally
unique id created by the origin of an RPC request so that responses can
be mapped to requests. The *id* field can be omitted if responses are
not expected. *jsonrpc* is the static version info field which MUST not
be other than "2.0". *params* is a RPC message specific object that can
contain any JSON data and is used as input parameters for the invoked
method.

**Example about how it can look in an implementation**

``` {.javascript}
JSON: Object
{
    id: "2" 
    jsonrpc: "2.0" 
    method: "http://webinos.org/api/example@6e6885b25a7ddb5f4658e7a599d1fc17.exampleFunction" 
    params: [
        "example result" 
    ]
}
```

In this example the params field is just an array of length 1 which is
used for a function that just takes one argument. The method field
consists of the three parts service type and instance identifier as
described above and the exampleFunction function that should be invoked
at the target service.

The example above only shows the RPC part of a message transaction. A
full example that also includes messaging and routing information is
given below.

``` {.javascript}
JSON
{
    from: "PZ_Name/example_Pzp/0" 
    id: 33
    payload: {
          id: "2" 
          jsonrpc: "2.0" 
          method: "http://webinos.org/api/test@6e6885b25a7ddb5f4658e7a599d1fc17.exampleFunction" 
          params: [
              "example input parameter" 
          ]
        }
    resp_to: "PZ_Name/example_Pzp/0" 
    to: "PZ_Name/example_Pzp" 
    type: "JSONRPC" 
}
```

This shows that a RPC relies on the messaging part which needs to know
the address of the service in order to forward the RPC request to the
needed PZP. This information must be provided by the service discovery
module (see detailed service discovery API protocol to see how this
information is propagated) in order to add the service address
information when the RPC module creates JSON-RPC messages that should be
send to another PZP or PZH using the messaging and session components of
webinos. For detailed information about the messaging related attributes
of the JSON structure please look into the Messaging and Routing
specification.

webinos RPC Requests with subscriptions[¶](#webinos-RPC-Requests-with-subscriptions)
------------------------------------------------------------------------------------

JSON-RPC directly has inbuilt support only for request/response or
notification messages. It does not support an integrated mechanism for
kind of recurring responses where one request can result in multiple
responses. For example the W3C Geolocation API provides a method called
watchPosition. The method takes a position update listener as input
argument that is called each time the position changes. Using JSON-RPC
without additions would mean that the listener can only be called on
time because afterwards the response message id would become invalid and
the receiver of the response can delete the id from the stack of
awaiting responses which would result in the inability to match
additional responses to the desired listener.

In webinos platform it is allowed to use the ID of a request message as
receiver selector for subsequent request messages that were made in
response to the original request. This basically allows for a kind of
subscribe scheme within JSON-RPC where answers to a specific JSON-RPC
request are sent also as JSON-RPC request but including a specific
selector that allows to choose the correct original requesting object
that is interested in these answers. In this case IDs will be valid
until either the subscription was canceled, for example depending on the
involved API unsubscribe, clearWatch, removeEventListener or comparable
things were called, or after the service was unbound or connection to
the service was lost.

Following the approach is described using an example.

The method addEventListener is basically a function that just returns
some data on a regular basis which can change over time but instead of
doing it synchronous as direct result it does return results using a
listener pattern. Thus, multiple results can be provided to a callback.
The message below invokes the addEventListener function a
"http://webinos.org/api/example" service. The function just takes a
callback that is used to provide the results back to the caller, for
example void addEventListener(EventListener callback).

On the client site the RPC implementation needs to record that calling
addEventListener can return multiple responses as JSON-Request messages.
Concrete the id of the JSON-Message ("2") must be used for all answers
related to this callback registration.

RPC-Request for Listener pattern:

``` {.javascript}
payload: Object
{
    id: "2" 
    jsonrpc: "2.0" 
    method: "http://webinos.org/api/test@6e6885b25a7ddb5f4658e7a599d1fc17.addEventListener" 
    params: null
}
```

RPC-Response as JSON-RPC Request message for listener pattern:

``` {.javascript}
payload: Object
{
    jsonrpc: "2.0" 
    method: "2.onEvent";
    params: {
        "msg":"example result" 
    }
}
```

``` {.javascript}
payload: Object
{
    jsonrpc: "2.0" 
    method: "2.onEvent";
    params: {
        "msg":"another example result" 
    }
}
```

The method for the callback (like onEvent) depends on the methods
exposed by the callback object (here referenced with ID 2) on the
requester side. Thus other methods may be callable too on the object
while using the same id.

``` {.javascript}
payload: Object
{
    jsonrpc: "2.0" 
    method: "2.onAnotherFunction";
    params: {
        "result": {
            "atr1": 1
            "atr2": 2
        }
    }
}
```

webinos RPC Responses[¶](#webinos-RPC-Responses)
------------------------------------------------

Following an example response to the request made in the previous
section, i.e, a positive result of invoking exampleFunction.

-   *jsonrpc* is again the JSON-RPC version identifier that MUST be set
    to "2.0".
-   *id* MUST match the provided RPC request id so that the response can
    be matched against requests being made previously.
-   *result* is an object that contains any JSON structure and
    represents the result of the method invocation. In this case its
    just a String.

``` {.javascript}
JSON
{
    jsonrpc: "2.0" 
    id: "3" 
    result: "22 something to echo" 
}
```

webinos RPC errors[¶](#webinos-RPC-errors)
------------------------------------------

In case of any errors occurred at the RPC server, either internal RPC
errors like "method not found" or an error callback of an API, negative
responses need to be created and sent back to the requester using
following format that follows the JSON-RPC specification 2.0.

JSON Object containing the attributes

-   *jsonrpc* with values "2.0"
-   *id* which is the identifier of the corresponding request
-   *error* which is an object describing the occurred error in more
    detail

The **error** attribute itself consists again of three attributes

-   *code* which is either a RPC protocol specific code as defined in
    the JSON-RPC specification v2.0 (for example -32601 "Method not
    found") or the webinos specific error code -31000. Code -31000 must
    be used when an API specific error is provided as result of a method
    invocation. Basically if an API throws an Exception or returns with
    calling an error callback as defined in the API.
-   *message* which is either a message related to the code field as
    specified in the JSON-RPC specification v2.0 or "Method Invocation
    returned with error" if code is set to -31000
-   *data* which is an API specific error object that should be provided
    to the original API caller either by throwing an exception or be
    invoking a related error callback which is registered with the ID of
    the message.

An example for a webinos specific error is shown below. The data field
contains a W3C DOMError, namely the "NotSupportedError" error, which
should be forwarded to the original requester that may await either a
success callback, error callback, or an exception to be thrown. The
original requester from an API point of view will only receive the
object stored in the data attribute as input of the error callback.

``` {.javascript}
JSON
{
    jsonrpc: "2.0" 
    id: "2" 
    error = {
    data: "NotSupportedError",
    code: -31000,
    message: 'Method Invocation returned with error'
    };
}
```

Mapping JavaScript APIs to RPC messages[¶](#Mapping-JavaScript-APIs-to-RPC-messages)
====================================================================================

For each JavaScript call a related RPC mapping must be defined to
realize the RPC binding. In this section a general approach of mapping
APIs to RPC messages is described that must be used if possible. For API
functionalities where a mapping is not trivial and cannot be described
in a generic way the differences respectively the full messages needed
are documented.

Possible cases where a simple mapping cannot be given are:

-   Supporting functions where additional not directly JS API call
    related RPC messages will be defined where suitable. For example
    pre-fetching all static attributes of the Sensor API with one RPC
    message during binding to the service rather than using one
    synchronous message for each attribute when it is accessed. This for
    example allows much better bandwidth usage and response times for
    accessing just static attributes.
-   Since the used JSON-RPC protocol is a stateless protocol additional
    attributes may be needed by certain services to match client side
    and server side objects to be used for executing methods declared
    within the RPC messages. For example calls of the DeviceStatus API
    are more like atomic calls. On request is made and one result is
    provided, any state information is not needed. For other APIs kind
    of state information is needed, for example exactly on which File
    object a read/write operation should be performed? This information
    is not reflected in the JavaScript API (and must not) but it must be
    transmitted within the RPC messages.

Beside of the general descriptions of the mappings and concrete
additional messages the end of this section lists two full examples, the
Discovery API as well as the Generic Sensors API.

As described in the previous sections each RPC call comply to JSON-RPC
2.0. Some elements are set by a compliant JSON-RPC implementation
itself, for example the 'id' and the 'jsonrpc' field, so that they are
not listed again for each following example. Only the relevant parts of
the messages are shown. The service instance identifier, as introduced
in the previous section, is also abbreviated using following the term
\<instance\>.

Mapping Function Calls[¶](#Mapping-Function-Calls)
--------------------------------------------------

### Invoking a Remote function[¶](#Invoking-a-Remote-function)

#### Mapping function names[¶](#Mapping-function-names)

The \<function\> field of the RPC message that represents the function
invoked at the target service must be mapped like follows

\<function\> = \<InterfaceName\>.\<functionName\> where

-   \<InterfaceName\> is the name of the related JavaScript interface of
    the API
-   \<functionName\> is the name of the function that is called

**Example**

**WebIDL** *the launchApplication() function of the AppLauncherManager
interface*

``` {.javascript}
JSON: Object
{
    method: "http://webinos.org/api/applauncher@<instance>.AppLauncherManager.launchApplication" 
}
```

#### Mapping parameters[¶](#Mapping-parameters)

Input parameters of functions must be encoded in a JSON object which is
assigned to the params field of the RPC message. The object must contain
any parameter that are specified in the relating JavaScript API as
mandatory while using the same parameter names as attribute names.
Optional parameters can be omitted, success and error callbacks must be
skipped because they are handled separately by the RPC protocol as
described above.

**Example**

**WebIDL:** *void launchApplication(VoidFunction successCallback,
ErrorCallback errorCallback, DOMString applicationID)*

``` {.javascript}
JSON: Object
{
    method: "http://webinos.org/api/applauncher@<instance>.AppLauncherManager.launchApplication" 
    params: {
        appURI: "http://www.example.org" 
    }
}
```

### Callbacks[¶](#Callbacks)

Both error callbacks and success callbacks must contain exactly the data
structure as defined in the related JavaScript API specifications in
their respective data fields. For error callbacks the *data* attribute
of the *error* field and for success callbacks the *result* field.

**Example**

**WebIDL:** *callback AppInstalledCallback = void (boolean result);*

``` {.javascript}
JSON
{
    result: result 
}
```

**WebIDL:** *callback ErrorCallback = void (DOMError error);*

``` {.javascript}
JSON
{
    error = {
    data: error,
    };
}
```

List of additions to general mappings[¶](#List-of-additions-to-general-mappings)
--------------------------------------------------------------------------------

This subsection lists additions needed by some APIs which can not be
reflected in general, for example for APIs where some state information
is needed to match client and server side objects. webinos compliant RPC
implementations must not rely on any other addition to the general
mapping then the ones listed here.

### Service Discovery API[¶](#Service-Discovery-API)

#### FindCallBack.onFound[¶](#FindCallBackonFound)

In addition to the service attributes that must be provided according to
the general mapping scheme on additional parameter is provided for
internal use.

-   *serviceAddress* which is the address of the PZP that hosts the
    found service. This parameter will be used in subsequent calls to
    the service so that RPC requests can be routed to the desired PZP
    and service endpoint.

The *serviceAddress* must not be provided to application developers.

### File APIs[¶](#File-APIs)

[RPC\_File\_API](.html)

List of additional messages[¶](#List-of-additional-messages)
------------------------------------------------------------

This subsection lists additional RPC messages which are not directly
related to the JavaScript API. For example for APIs where some static
data can be fetched from the service side to the client side in order to
reduce traffic and increase responsiveness when reading attributes or
invoking functions. webinos compliant RPC implementations must not rely
on any other additional RPC message then the ones listed here.

### Generic Sensor API[¶](#Generic-Sensor-API)

#### getStaticData function[¶](#getStaticData-function)

This function is used to request the values of all static sensor
specific attributes from the sensor so that they are directly available
on the client side. Thus, it is not needed to have a separate messages
to access these attributes. This message should be used during binding
to the service. The attribute names are 1:1 mappings from the JS API
specification. Namely these are:

-   maximumRange;
-   minDelay;
-   power;
-   resolution;
-   vendor;
-   version;

Request:

``` {.javascript}
JSON:
{
    method: "http://webinos.org/api/sensors@<instance>.getStaticData" 
    params: null
}
```

Response:

``` {.javascript}
JSON:
{
    result: {
        maximumRange = 100;
        minDelay = 10;
        power = 50;
        resolution = 0.05;
        vendor = "Example Vendor";  
        version = "0.1"; 
    }
}
```

### Generic Actuator API[¶](#Generic-Actuator-API)

#### getStaticData function[¶](#getStaticData-function)

This function is used to request the values of all static actuator
specific attributes from the actuator so that they are directly
available on the client side. Thus, it is not needed to have a separate
messages to access these attributes. This message should be used during
binding to the service. The attribute names are 1:1 mappings from the JS
API specification. Namely these are:

-   range;
-   unit;
-   vendor;
-   version;

Request:

``` {.javascript}
JSON:
{
    method: "http://webinos.org/api/actuators@<instance>.getStaticData" 
    params: null
}
```

Response:

``` {.javascript}
JSON:
{
    result: {
        range = [0,1];
        unit = ["OFF","ON"];
        vendor = "Example Vendor";
        version = "0.1";
    }
}
```

Full examples[¶](#Full-examples)
--------------------------------

[RPC AppLauncher](.html)\
[RPC Sensors](.html)\
[RPC Service Discovery](.html)

