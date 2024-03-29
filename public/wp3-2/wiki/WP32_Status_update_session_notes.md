WP32 Status update session notes[¶](#WP32-Status-update-session-notes)
======================================================================

See [Webinos-WP3\_2-APIs Status update presentation Sophia Antipolis
June
7](http://dev.webinos.org/redmine/attachments/644/Webinos-WP3_2-APIs_Status_update_Sophia_Antipolis_June_7.pptx)

Event handling APIs.[¶](#Event-handling-APIs)
---------------------------------------------

Stefano plans to submit API proposal prior to deadline.

Dom asked why we need this low level API. Is it for developers? Use
cases need to be clarified.

Daniel proposed multicast.

Issue - Webinos wrappers for references API specifications from W3C and WAC[¶](#Issue-Webinos-wrappers-for-references-API-specifications-from-W3C-and-WAC)
----------------------------------------------------------------------------------------------------------------------------------------------------------

Daniel offered to create Webinos wrappers for referred W3C and WAC
specifications [Task 371](http://dev.webinos.org/redmine/issues/371)
created

Issue - "Feature" URI string[¶](#Issue-Feature-URI-string)
----------------------------------------------------------

**Action for all API editors to define "feature" strings, used e.g. to
identify API features in findServices(), in section 4 of each API
specification.** Se example [Sensors feature
URIs](http://dev.webinos.org/specifications/draft/sensors.html#api-features)

Nick: Should developers always use service discovery to access Webinos
APIs, even for local resources.

Anders: No, we can't override existing implementations of for example
the W3C Geolocation API. However, all Webinos APIs should be
discoverable through ServiceDiscovery.

Issue - Extended IDL attributes[¶](#Issue-Extended-IDL-attributes)
------------------------------------------------------------------

Dom: No need to make this 100% consistent within Webinos.
Implementations will work anyway. However, when we take API
specifications to standardization this has to be correct.

Claes proposes that we as starting point follow the W3C DAP way, which
means:

-   All interfaces define [NoInterfaceObject]
-   Callback interfaces also define [Callback=FunctionOnly]

**Action for all API editors to update their APIs according to above**

Issue - APIs start page[¶](#Issue-APIs-start-page)
--------------------------------------------------

Dom has updated webinos.sh to generate [APIs start
page](http://dev.webinos.org/specifications/draft/)

The summary text is fetched from the first paragraph in the section 1
Introduction of the API specification.

**Action for all API editors to check the first paragraph in the section
1 Introduction of the API specification and update it if it doesn't look
good in the summary at the API start page**

Issue – event based APIs consistency[¶](#Issue-–-event-based-APIs-consistency)
------------------------------------------------------------------------------

**Action for all API editors to add ”initEvent method” for DOM events
(if used) if not there already. Proposed wording: see [Sensor
event](http://dev.webinos.org/specifications/draft/sensors.html#::sensors::SensorEvent)**

Statement on "addEventListener" under investigation. Will come back on
this.

Issue – Date and version and copyright in API heading[¶](#Issue-–-Date-and-version-and-copyright-in-API-heading)
----------------------------------------------------------------------------------------------------------------

**Action [374](http://dev.webinos.org/redmine/issues/374) on Stephan to
state the wording on copyright and Daniel to include the statements in
the idl toolchain.**

