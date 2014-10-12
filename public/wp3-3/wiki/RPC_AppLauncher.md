-   [AppLauncher RPC Messages](#AppLauncher-RPC-Messages)
    -   [AppLauncherManager Interface](#AppLauncherManager-Interface)
        -   [launchApplication function](#launchApplication-function)
        -   [appInstalled function](#appInstalled-function)

AppLauncher RPC Messages[¶](#AppLauncher-RPC-Messages)
======================================================

This section lists all RPC calls being made by the application launcher
API
(<http://dev.webinos.org/deliverables/wp3/Deliverable32/static$c6d86178a3d4bcd9e13e97832ae81b97.html>).

AppLauncherManager Interface[¶](#AppLauncherManager-Interface)
--------------------------------------------------------------

### launchApplication function[¶](#launchApplication-function)

This RPC request/response handles the JS API call PendingOperation
launchApplication(SuccessCallback successCallback, ErrorCallback
errorCallback, applicationID appID, ObjectArray params)

Request Example:

``` {.javascript}
JSON:
{
    method: "http://webinos.org/api/applauncher@<instance>AppLauncherManager.launchApplication" 
    params: {
        appURI: "an_application_id" 
    }
}
```

Response Example:

Since launching an application does not returns any data the response
message is empty.

``` {.javascript}
JSON:
{
    result: {}
}
```

Error case example:

The error callback of launchApplication needs to provide a data object
that is a related DOMError.

``` {.javascript}
JSON:
{
    error: {
            data: "NotFoundError" 
        }
}
```

### appInstalled function[¶](#appInstalled-function)

This RPC request/response handles the JS API call void
appInstalled(AppInstalledCallback callback, ErrorCallback errorCallback,
applicationID appID); A request must be:

``` {.javascript}
JSON:
{
    method: "http://webinos.org/api/applauncher@<instance>AppLauncherManager.appInstalled" 
    params: {
        appURI: "the applicationID to look-up" 
    }
}
```

The response to appInstalled provides just information about weather an
application is installed or not. Thus, the result attribute must be a
string that is either "TRUE" or "FALSE".

``` {.javascript}
JSON:
{
    result: DOMString // "TRUE" or "FALSE" 
}
```

The error callback of launchApplication needs to provide a data object
that is a related DOMError, for example:

``` {.javascript}
JSON:
{
    error: {
            data: "NotFoundError" 
        }
}
```
