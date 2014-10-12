Policy time constraints[¶](#Policy-time-constraints)
====================================================

Time constraints limit the applicability of a policy and are expressed
in terms of an interval of validity, which must result true for the
policy to apply. This interval can be one-shot or repeated (R at the
beginning of the interval, according to the ISO 8601)

We want to be able to specify interval like

Permit rule X from 8AM to 5PM from Monday to Friday

Which could be written as\
\<rule effect="permit" time ="R/2013-05-16T08:00:00Z/P0Y0M0DT9H0M"
daysOfWeek="124"\>\
...\
\</rule\>

where the parameter "time" is expressed according to ISO 8601 [time
intervals](http://en.wikipedia.org/wiki/ISO_8601#Time_intervals).

To specify time constraints for policies we can specify some parameters:

  *Param*       *Value*
  ------------- ------------------------------------------------------------------------------------------------------------------
  time          Time representation using [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601)
  daysOfMonth   bit-mask that constraints the day of month in case *time* is a repeated interval
  daysOfWeek    bit-mask that constraints the day of week in case *time* is a repeated interval eg Mon-\> Fry = 1111100(2) = 124

With ISO 8601 notation we can describe durations and (repeating) time
intervals, but not relate to any specific day of the month or of the
week (e.g. describe that a permission is valid only outside the wee-end
). So, two supplementary parameters can express a constraint based on
day of the month and of the week (e.g. business days).

Environment-match Solution[¶](#Environment-match-Solution)
----------------------------------------------------------

    1     <rule effect="prompt-blanket">
    2         <condition>
    3             <environment-match attr="timemin" match="480" func="greater-than" />
    4             <environment-match attr="timemin" match="1020" func="less-than" />
    5             <environment-match attr="daysOfWeek" match = "124"/>
    6             <environment-match attr="daysOfMonth" match = "*"/>            
    7         </condition>
    8     </rule>

XACML Solution[¶](#XACML-Solution)
----------------------------------

To specify time constraints in XACML, it's necessary calling functions
like ..:time-greater-than-or-equal, ..:time-less-than-or-equal or
..:time-one-and-only , through the Apply tag:

     1       <!-- Time constraint: from 9am to 5pm -->
     2       <Condition FunctionId="urn:oasis:names:tc:xacml:1.0:function:and">
     3         <Apply FunctionId="urn:oasis:names:tc:xacml:1.0:function:time-greater-than-or-equal">
     4           <Apply FunctionId="urn:oasis:names:tc:xacml:1.0:function:time-one-and-only">
     5             <EnvironmentAttributeSelector DataType="http://www.w3.org/2001/XMLSchema#time" 
     6                                           AttributeId="urn:oasis:names:tc:xacml:1.0:environment:current-time"/>
     7           </Apply>
     8           <AttributeValue DataType="http://www.w3.org/2001/XMLSchema#time">09:00:00</AttributeValue>
     9         </Apply>
    10         <Apply FunctionId="urn:oasis:names:tc:xacml:1.0:function:time-less-than-or-equal">
    11           <Apply FunctionId="urn:oasis:names:tc:xacml:1.0:function:time-one-and-only">
    12             <EnvironmentAttributeSelector DataType="http://www.w3.org/2001/XMLSchema#time" 
    13                                           AttributeId="urn:oasis:names:tc:xacml:1.0:environment:current-time"/>
    14           </Apply>
    15           <AttributeValue DataType="http://www.w3.org/2001/XMLSchema#time">17:00:00</AttributeValue>
    16         </Apply>
    17       </Condition>

Source: <https://www.oasis-open.org/committees/download.php/2713/>

