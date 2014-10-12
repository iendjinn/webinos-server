-   [Sensors RPC Messages](#Sensors-RPC-Messages)
    -   [Supporting functions](#Supporting-functions)
        -   [getStaticData function](#getStaticData-function)
    -   [Sensor Interface](#Sensor-Interface)
        -   [configureSensor function](#configureSensor-function)
        -   [addEventListener function](#addEventListener-function)
        -   [removeEventListener
            function](#removeEventListener-function)
    -   [EventListener interface](#EventListener-interface)
        -   [handleEvent function](#handleEvent-function)

Sensors RPC Messages[¶](#Sensors-RPC-Messages)
==============================================

This section lists all RPC calls being made by the generic sensors API
(<http://dev.webinos.org/deliverables/wp3/Deliverable32/static$ed3498fde13006f3ee55fb9356300307.html>).

Supporting functions[¶](#Supporting-functions)
----------------------------------------------

### getStaticData function[¶](#getStaticData-function)

This function is used to request the values of all static sensor
specific attributes from the sensor so that they are directly available
on the client side. The attribute names are 1:1 mappings from the JS API
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
        maximumRange: 100;
        minDelay: 10;
        power: 50;
        resolution: 0.05;
        vendor: "FhG";  
        version: "0.1"; 
    }
}
```

Sensor Interface[¶](#Sensor-Interface)
--------------------------------------

### configureSensor function[¶](#configureSensor-function)

This RPC request/response handles the JS API call PendingOp
configureSensor(ConfigureSensorOptions options, ConfigureSensorCB
successCB, SensorErrorCB errorCB). The params attribute of the request
message holds an object that matches the attributes of the
ConfigureSensorOptions object as specified in the sensors JS API. For
example:

``` {.javascript}
JSON:
{
    method: "http://webinos.org/api/sensors@<instance>.Sensor.configureSensor" 
    params: {
        timeout: 0
        rate: 2
        interrupt: true
    }
}
```

Since configuring a sensor does not return any data the responses result
field is null in case of a successful configuration. In the error case
the data field of the error contains a related DOMError, for example the
success case:

``` {.javascript}
JSON:
{
    result: null
}
```

Example error case:

``` {.javascript}
JSON:
{
    error: {
            data: "NotFoundError" 
        }
}
```

### addEventListener function[¶](#addEventListener-function)

Adding an event listener

``` {.javascript}
JSON:
{
    id: <id> //where <id> is the identifier used to identify the callback object for the callback which will receive the result via the listener pattern.
    method: "http://webinos.org/api/sensors@<instance>.Sensor.addEventListener" 
}
```

### removeEventListener function[¶](#removeEventListener-function)

Removing an event listener

``` {.javascript}
JSON:
{
    id: <id> //where <id> is the identifier used to identify the callback object for the callback which will receive the result via the listener pattern.
    method: "http://webinos.org/api/sensors@<instance>.Sensor.removeEventListener" 
    params: {
        type: "eventtype",
        id: <listenerID> // where <listenerID> must be the JSON message ID used by the Sensor API after addEventListener was called for sending the events/notifications 
    }

}
```

EventListener interface[¶](#EventListener-interface)
----------------------------------------------------

### handleEvent function[¶](#handleEvent-function)

The handleEvent function receives event data from a sensor. The
following attributes must be contained in the message:

-   method: "\<id\>.handleEvent" //where \<id\> is the identifier of the
    callback object that should be used to invoke the method.
-   params: SensorEvent // where SensorEvent is an object that includes
    parameters as specified in the Sensors API but without the derived
    features of the W3C Event interface. The enumerations are handled as
    DOMString in the message and must be converted to Enum when calling
    the original callback.

An example message could be:

``` {.javascript}
JSON:
{
    method: "2363.handleEvent" 
    params: {
        sensorType: "http://webinos.org/api/sensors.temperature" 
        sensorId: "34z22zwz94u2z" 
        accuracy: "medium" 
        rate: "fastest" 
        eventFireMode: "fixedinterval" 
        sensorValues: [27]
    }
}
```
