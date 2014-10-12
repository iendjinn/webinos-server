Vehicle API[¶](#Vehicle-API)
============================

Exposed Vehicle Data[¶](#Exposed-Vehicle-Data)
----------------------------------------------

### General info[¶](#General-info)

-   brand
-   model
-   year
-   transmission
-   fuel

### Boardcomputer[¶](#Boardcomputer)

-   consumption1
-   consumption2
-   averageSpeed1
-   averageSpeed2
-   tripDistance
-   mileage
-   range

### Climate[¶](#Climate)

-   desiredTemperature
-   ventStatus

### Wiper[¶](#Wiper)

-   front
-   back

### Lights[¶](#Lights)

-   day
-   headlight
-   hibeam
-   parking
-   fog
-   turn signal

### Navigation[¶](#Navigation)

-   setDestination

### Park Distance Control[¶](#Park-Distance-Control)

-   front
    -   Status
    -   Right
    -   Midright
    -   Mid
    -   Midleft
    -   Left
-   Rear

### Driving info[¶](#Driving-info)

-   speed
-   gear
-   acceleration
    -   lateral
    -   Longitudinal
-   wheel speed
    -   front left
    -   front right
    -   rear left
    -   rear right

Available standards[¶](#Available-standards)
--------------------------------------------

### OSGi VEG (discontinued)[¶](#OSGi-VEG-discontinued)

OSGI defined in JSR 298 a Telematics API for Java. The Vehicle Expert
Group responsible for the specification was discontinued. The
specification is available here:\
<http://jcp.org/en/jsr/summary?id=Telematics>

### Volkswage Vehicle API / Serial Line Automotive Protocol[¶](#Volkswage-Vehicle-API-Serial-Line-Automotive-Protocol)

In other EU projects the Serial Line Automotive Protocol (SLAP)
introduced by Volkwagen is used to retrieve vehicle data. The SLAP is
based on XML. A client sends XML messages to the vehicle server to
request car properties. A binding to data is possible as well

### BMW Car 2.0 (internal project)[¶](#BMW-Car-20-internal-project)

BMW Technology Office defined a JavaScript for accessing the vehicle
data. The Vehicle is a scriptable object.

Drafs on Vehicle API for webinos[¶](#Drafs-on-Vehicle-API-for-webinos)
----------------------------------------------------------------------

### Proposal for a Vehicle API based on DOM 3 Events[¶](#Proposal-for-a-Vehicle-API-based-on-DOM-3-Events)

-   A lot of vehicle specific events have to be defined
-   Some properties could flood the application with updates

<http://dev.webinos.org/redmine/attachments/532/vehicle.html>

### Vehicle as a scriptable object[¶](#Vehicle-as-a-scriptable-object)

<http://dev.webinos.org/redmine/attachments/533/vehicle2.html>

