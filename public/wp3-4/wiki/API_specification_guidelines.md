API specification guidelines[¶](#API-specification-guidelines)
==============================================================

Robin Berjon, chair of the W3C Device API WG, has created [Web API
Design Cookbook](http://darobin.github.com/api-design-cookbook/). This
is work in progress but provides valuable input on common practices for
specifying APIs and based on the latest [W3C Web IDL
specification](http://dev.w3.org/2006/webapi/WebIDL/). It is recommended
that Webinos follows these guidelines.

Dom and Christian have already made basic changes required to comply
with the latest W3C Web IDL specification, see [API Specification update
due to new W3C WIDL
specification](/t3-4/wiki/API_specification_update_due_to_new_W3C_widlspecification#Changes),
but still updates are needed.

Below is a list of general changes to be done in Webinos API
specifications compared to the phase 1 versions that we can see as a
"checklist" when moving our API specifications further.

"Partial" is to be used to state that an interface extends the core Webinos interface.[¶](#Partial-is-to-be-used-to-state-that-an-interface-extends-the-core-Webinos-interface)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Example:

Previously:

    1 [NoInterfaceObject] 
    2 interface WebinosTV {
    3   readonly attribute TVManager tv;
    4 };
    5 
    6 webinoscore::Webinos implements WebinosTV;

Now:

    1 partial interface Webinos {
    2   readonly attribute TVManager tv;
    3 };

Use dictionaries instead of "[NoInterfaceObject] interface MyInterface.."[¶](#Use-dictionaries-instead-of-NoInterfaceObject-interface-MyInterface)
--------------------------------------------------------------------------------------------------------------------------------------------------

Dictionaries should be used to define bag of properties. Interfaces had
to be used before.\
See: <http://dev.w3.org/2006/webapi/WebIDL/#idl-dictionaries>.

Example:

Previously:

     1 [NoInterfaceObject]
     2 interface Channel {
     3   const unsigned short TYPE_TV = 0;
     4 
     5   const unsigned short TYPE_RADIO = 1;
     6 
     7   readonly attribute unsigned short channelType;
     8 
     9   readonly attribute DOMString name;
    10 
    11   ......
    12 
    13 };

Now:

    1 dictionary Channel {
    2    ChannelType channelType;
    3 
    4    DOMString name;
    5 
    6    ......
    7 
    8 };

Use enums instead of constants.[¶](#Use-enums-instead-of-constants)
-------------------------------------------------------------------

Example:

Previously:

    1   const unsigned short TYPE_TV = 0;
    2 
    3   const unsigned short TYPE_RADIO = 1;
    4 
    5   readonly attribute unsigned short channelType;

Now:

    1   enum ChannelType { "tv", "radio"};

Callbacks[¶](#Callbacks)
------------------------

There is now a specific mechanism to describe callback functions (using
the “callback” keyword) that should be used instead of
[NoInterfaceObject] interfaces.

Example:

Previously:

    1 [Callback=FunctionOnly, NoInterfaceObject]
    2 interface TVDisplaySuccessCB {
    3   void onSuccess(Channel channel);
    4 };

Now:

    1 callback TVDisplaySuccessCB = void (Channel channel);

Reuse DOMError instead of per API errors[¶](#Reuse-DOMError-instead-of-per-API-errors)
--------------------------------------------------------------------------------------

As much as possible, re-use [DOMError
objects](http://dvcs.w3.org/hg/domcore/raw-file/default/Overview.html#error-types-table)
in error callbacks instead of minting new errors for each API. We should
only define a new interface if the error somehow needs to transmit more
than a name.

Use DOMException if exceptions are needed[¶](#Use-DOMException-if-exceptions-are-needed)
----------------------------------------------------------------------------------------

See: <http://dev.w3.org/2006/webapi/WebIDL/#idl-exceptions> and
<http://dvcs.w3.org/hg/domcore/raw-file/default/Overview.html#domexception>.
Re-using DOMException with a specific type is now preferred. In the
descriptive text it should be stated which exception is throwed in
certain situations.

Pending Operation, cancel() method for asynchronous operations[¶](#Pending-Operation-cancel-method-for-asynchronous-operations)
-------------------------------------------------------------------------------------------------------------------------------

-   There is no requirement to have a general cancel() method for all
    asynchronous APIs. The need for a cancel() must be judged from API
    to API.

<!-- -->

-   In those cases when a cancel() method is specified the semantics for
    cancel must be stated.

<!-- -->

-   As cancel() is not currently implemented for any Webinos API we need
    more investigations and implementation experiences to be able to
    definitively define the approach here.

Event based APIs[¶](#Event-based-APIs)
--------------------------------------

TBD

