-   [Service Discovery RPC Messages](#Service-Discovery-RPC-Messages)
    -   [DiscoveryInterface Interface](#DiscoveryInterface-Interface)
        -   [findServices function](#findServices-function)
            -   [Request](#Request)
    -   [FindCallBack Interface](#FindCallBack-Interface)
        -   [Results from findServices /
            FindCallBack.onFound](#Results-from-findServices-FindCallBackonFound)
        -   [Results from findServices /
            FindCallBack.onLost](#Results-from-findServices-FindCallBackonLost)
        -   [Results from findServices /
            FindCallBack.onError](#Results-from-findServices-FindCallBackonError)
    -   [Service Interface](#Service-Interface)
        -   [Service.bind](#Servicebind)
        -   [Service.unbind](#Serviceunbind)
    -   [BindCallBack Interface](#BindCallBack-Interface)
        -   [BindCallBack.onBind](#BindCallBackonBind)
        -   [BindCallBack.onUnbind](#BindCallBackonUnbind)
        -   [BindCallBack.onServiceAvailable](#BindCallBackonServiceAvailable)
        -   [BindCallBack.onServiceUnavailable](#BindCallBackonServiceUnavailable)
        -   [BindCallBack.onError](#BindCallBackonError)

Service Discovery RPC Messages[¶](#Service-Discovery-RPC-Messages)
==================================================================

This section lists all RPC calls being made by the Service Discovery API
(<http://dev.webinos.org/specifications/new/servicediscovery.html>).

DiscoveryInterface Interface[¶](#DiscoveryInterface-Interface)
--------------------------------------------------------------

### findServices function[¶](#findServices-function)

This RPC request/response handles the JS API call PendingOperation
findServices(ServiceType serviceType, FindCallBack findCallBack,
optional Options options, optional Filter filter);

#### Request[¶](#Request)

The method field must be "ServiceDiscovery.findServices". The params
field is any array of length three containing the ServiceType, Options,
and Filter object (exactly in this order) as defined in the Service
Discovery API. This message allows for multiple results
(FindCallBack.onFound) so that the id provided with the JSON-RPC message
is used as object identifier for subsequent result messages.

*Note: Since service discovery is an inbuilt essential API it does not
have a specific API type and instance ID.*

Example:

``` {.javascript}
JSON:
{
    id: "25" 
    method: "DiscoveryInterface.findServices" 
    params: {
        serviceType: {
                api: "http://webinos.org/api/exampleAPI" 
            }
        filter: {},
        options: {}
    }
}
```

FindCallBack Interface[¶](#FindCallBack-Interface)
--------------------------------------------------

### Results from findServices / FindCallBack.onFound[¶](#Results-from-findServices-FindCallBackonFound)

Results of findServices will be partially used for the
FindCallBack.onFound method as described in the Discovery API. After a
findService request was made results can be received multiple times
until no more service is found or findService is stopped. The method
attribute consists of

-   id: the JSON-Request identifier used for the findService request
    where this message is an answer to / the identifier of the callback
    object that should be used to invoke onFound
-   the "." character as seperator
-   method name: the method name to be called on the receiving object
    that is identified by the id

The params object contains id, api, displayName, description, and an
icon URI as specified in the Discovery API. These attributes need to be
used to create a service object that is used as input parameter of the
FindCallback used during the findService call. The additional
serviceAddress parameter is an internal parameter to be used by the
client side JavaScript binding of the API to address the service for
subsequent calls.

Example:

``` {.javascript}
JSON:
{
    method: "25.onFound" 
    params: {
        "id": "6e6885b25a7ddb5f4658e7a599d1fc17",
        "api": "http://webinos.org/api/exampleAPI",
        "displayName": "Example Name",
        "description": "Example Module with the life answer.",
        "serviceAddress": "ExampleUser/ExampleUser_Pzp",
        "icon": null
    }
}
```

### Results from findServices / FindCallBack.onLost[¶](#Results-from-findServices-FindCallBackonLost)

The message related to invoking the onLost method of a FindCallback is
equal to the onFound method apart from the actual method name that must
be "onLost" in this case.

### Results from findServices / FindCallBack.onError[¶](#Results-from-findServices-FindCallBackonError)

In case of errors during findService the resulting JSON-Message consists
of following attributes and values

-   method: value must be a DOMString containing "\<id\>.onError" where
    \<id\> is the JSON-Request identifier used for the findService
    request where this message is an answer to / the identifier of the
    callback object that should be used to invoke onError
-   params: value must be a DOMString that represents an DOMError as
    specified in the Discovery API.

Service Interface[¶](#Service-Interface)
----------------------------------------

### Service.bind[¶](#Servicebind)

PendingOperation bind(BindCallBack bindCallBack, DOMString serviceId)

The implementation and needs to be done during onBind (e.g. requesting
hardware resources, setting up the service to be functional, etc) can be
different between the APIs. If special data must be exchanged between
client and service (e.g., to initialize the service) it is described in
the respective API sections. If not the JSON message must contain
following attributes and values:

-   method: "\<type\>@\<instance\>.Service.bind"
-   params: (optional) Unique id of the binding to the particular
    service as DOMString.

### Service.unbind[¶](#Serviceunbind)

The implementation and needs to be done during onUnbind can be different
between the APIs. If special data must be exchanged between client and
service (e.g., to initialize the service) it is described in the
respective API sections. If not the JSON message must contain following
attributes and values:

-   method: "\<type\>@\<instance\>.Service.unbind"

BindCallBack Interface[¶](#BindCallBack-Interface)
--------------------------------------------------

This sections defines the JSON-RPC protocol messages used for the
BindCallback of the Discovery API

### BindCallBack.onBind[¶](#BindCallBackonBind)

To call onBind the JSON-Message must consists of a method attribute and
a params attribute that containing following values

-   method:"\<id\>.onBind" where \<id\> is the identifier of the
    callback object that should be used to invoke the method.
-   params: an object that describes the related service (an example of
    such an object is given in the findService section).

### BindCallBack.onUnbind[¶](#BindCallBackonUnbind)

To call onUnbind the JSON-Message must consists of a method attribute
and a params attribute that containing following values

-   method:"\<id\>.onUnbind" where \<id\> is the identifier of the
    callback object that should be used to invoke the method.
-   params: an object that describes the related service (an example of
    such an object is given in the findService section).

### BindCallBack.onServiceAvailable[¶](#BindCallBackonServiceAvailable)

To call onServiceAvaiable the JSON-Message must consists of a method
attribute and a params attribute that containing following values

-   method:"\<id\>.onServiceAvailable" where \<id\> is the identifier of
    the callback object that should be used to invoke the method.
-   params: an object that describes the related service (an example of
    such an object is given in the findService section).

### BindCallBack.onServiceUnavailable[¶](#BindCallBackonServiceUnavailable)

To call onServiceUnavailable the JSON-Message must consists of a method
attribute and a params attribute that containing following values

-   method:"\<id\>.onServiceUnavailable" where \<id\> is the identifier
    of the callback object that should be used to invoke the method.
-   params: an object that describes the related service (an example of
    such an object is given in the findService section).

### BindCallBack.onError[¶](#BindCallBackonError)

To call onError the JSON-Message must consists of a method attribute and
a params attribute that containing following values

-   method:"\<id\>.onError" where \<id\> is the identifier of the
    callback object that should be used to invoke the method.
-   params: value must be a DOMString that represents an DOMError as
    specified in the Discovery API.

