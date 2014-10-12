Data & Communication[¶](#Data-38-Communication)
===============================================

The UI adapatation works on an event-condition-action based approach.
The rules are stored as a separate file. Application rules are stored
inside the applications package. Each rule can contains an events,
conditions and action section:

-   The events part specifies the signal that triggers the invocation of
    the rule. The event is mapped to change in a property in the local
    Device Status Status and a type of the Sensor Service.
-   The conditions part is a logical test that, if satisfied or
    evaluates to true, causes the action to be carried out. This part
    also references information from the Device Status Service and Senor
    Services.
-   The action part consists the UI adaptations which are being
    transformed.

As there is a distinction between evented and unvevented rules, the
conditions and events section is not always necessary. The following
combinations are possible:

-   n events + n conditions (evented): The action is only performed,
    when one of the events occurs and the conditions apply
-   n events (evented): The action is performed, when one of the events
    occurs
-   n conditions (unevented): The action is performed

The rules for the enabling the content adaptation are defined using XML
notion.

Enabling the UI adaptation in the application manifest[¶](#Enabling-the-UI-adaptation-in-the-application-manifest)
------------------------------------------------------------------------------------------------------------------

Applications making use of the Adaptation Manager running on the PZP
need to indicate this in the application manifest with the parameter
`webinos:uiadaptation`, the allowed parameters are:

-   none: This is the default value. UI adaptation is not used in the
    application
-   custom: Application makes use of the Adpatatation Manager running on
    the PZP. The application package containe the file
    adapatationrules.xml
-   platformdefined: indicates that the application is making use of
    platform defined adaptation rules (see chapter: platform specified
    rules)

XML file containing the adaptation rules needs to have the name
adaptationrules.xml and need to be part of the widget package.

### Example[¶](#Example)

    1  <webinos:uiadaptation>none</webinos:uiadaptation>

Rule definition[¶](#Rule-definition)
------------------------------------

The following section outlines

### Events section[¶](#Events-section)

In the events section the triggers for a rule are defined. The events
section can contain more than one event. Events are logically connected
by an 'or'. At least one event has to be defined for the rule to be
valid.

#### Parameters[¶](#Parameters)

The type property indicates which device element is beeing monitored by
the rule. The supported types are mapped to an property of the Device
Status API [1] and to a sensor type in the generic sensor API. [2]

Value based conditions on these events should be put as conditions in
the conditions tag.

#### Examples[¶](#Examples)

The following example illustrates that the action should only be
triggered when the light sensor changes

    1 <event>sensors.light</event>
    2 <conditions>
    3   <condition>
    4     <type>sensors.light</type>
    5     <value>[0,60]</value>
    6   </condition>
    7 </conditions>

The following example illustrates that an action should only be
triggered when the battery of a device is beeing charged.

    1 <event>battery. batteryBeingCharged</event>
    2 <conditions>
    3   <condition>
    4     <type>battery. batteryBeingCharged</type>
    5     <value>true</value>
    6   </condition>
    7 </conditions>

### ConditionSet section[¶](#ConditionSet-section)

Conditions provide the means to restrict the the circumstances, when an
action shall be performed. Conditions can be aggregated by using a
ConditionSet.

Conditions are defined by the two attributes type and value.

ConditionSet can contain Conditions or ConditionSets and the
aggregatortype is an attribute of the ConditionSet

#### Parameters[¶](#Parameters)

##### type

The type property indicates on which device element the condition is
beeing applied. The supported types are mapped to an property of the
Device Status API [1] and to a sensor type in the generic sensor API.
[2]

##### value

In the value attribute it is defined, for what values the condition is
valid or not.

The value can either be an interval or a specific value of the sensor
type. Intervals are defined by providing the lower and upper limit of
the interval with square brackets [\*,\*]. If one limit is missing, the
interval is interpreted as greater or less.\
For events type derived from the Device Status API the value is mapped
to watchOptions.range. In case of a sensor type event the value is be
matched to a sensorValue^[0](#fn0)^.

#### examples[¶](#examples)

The following example illustrate, that action should only beeing
triggerd on in-car headunits.

    1 <condition>
    2  <type>device.type</type>
    3  <value>vehicle</value>
    4 </condition>

The following example illustrate, that action should only beeing
triggerd on in-car headunits when the light is below a threshold of 60.

     1 <conditionSet aggregatorType="AND">
     2   <condition>
     3     <type>device.type</type>
     4     <value>vehicle</value>
     5   </condition>
     6   <condition>
     7     <type>sensors.light</type>
     8     <value>[,60[</value>
     9   </condition>
    10 </conditionSet>

### Actions section[¶](#Actions-section)

The action section conatins the JavaScript, which is injected, when the
Event is triggered and the conditions are valid.

### Comprehensive rule examples[¶](#Comprehensive-rule-examples)

#### Event-Condition-Action rule[¶](#Event-Condition-Action-rule)

The following example illustrates that an action is triggered, when the
sensor value of the light sensor changes to 0 and 30 lux and the device
type on which the application is running is an ivi system.

     1 <rule>
     2 <events>
     3  <event>sensors.light </event>
     4 </events>
     5 <conditionSet aggregatorType="AND">
     6  <condition>
     7   <type>sensors.light</type>
     8   <value>[0,30]</value>
     9  </condition>
    10  <condition>
    11    <type>device.type</type>
    12    <value>ivi</value>
    13  </condition>
    14 </conditionSet>
    15 
    16 <action>
    17   //JavaScript code for switching the css style
    18 </action>
    19 </rule>

#### Condition-Action rule[¶](#Condition-Action-rule)

The following examples illustrates how a rule specifically for the
vehicle environment can look like.

     1 <rule>
     2 <events>
     3   <event>application.launch</event>
     4 </events>
     5 <conditionSet aggregatorType="AND">
     6  <condition>
     7    <type>device.type</type>
     8    <value>ivi</value>
     9  </condition>
    10 </conditionSet>
    11 <action>
    12  //JAVA script action
    13 </action>
    14 </rule>

References[¶](#References)
--------------------------

[1]
<http://dev.webinos.org/specifications/new/devicestatus.html#::PropQuery>\
[2] <http://dev.webinos.org/specifications/new/sensors.html#::Sensor>

------------------------------------------------------------------------
