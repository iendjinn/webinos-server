[Back to Policy Examples](Back%20to%20Policy%20Examples.html)

Policy Examples: XACML Control Login[¶](#Policy-Examples-XACML-Control-Login)
=============================================================================

     1 <Policy PolicyId="SamplePolicy" RuleCombiningAlgId="urn:oasis:names:tc:xacml:1.0:rule-combining-algorithm:permit-overrides">
     2 
     3         <!-- This Policy only applies to requests on the SampleServer -->
     4         <Target>
     5                 <Subjects>
     6                         <AnySubject/>
     7                 </Subjects>
     8 
     9                 <Resources>
    10                         <ResourceMatch MatchId="urn:oasis:names:tc:xacml:1.0:function:string-equal">
    11                                 <AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">SampleServer</AttributeValue>
    12                                 <ResourceAttributeDesignator DataType="http://www.w3.org/2001/XMLSchema#string" 
    13                                                              AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id"/>
    14                         </ResourceMatch>
    15                 </Resources>
    16 
    17                 <Actions>
    18                         <AnyAction/>
    19                 </Actions>
    20         </Target>
    21 
    22         <!-- Rule to see if we should allow the Subject to login -->
    23         <Rule RuleId="LoginRule" Effect="Permit">
    24 
    25                 <!-- Only use this Rule if the action is login -->
    26                 <Target>
    27                         <Subjects>
    28                                 <AnySubject/>
    29                         </Subjects>
    30 
    31                         <Resources>
    32                                 <AnyResource/>
    33                         </Resources>
    34 
    35                         <Actions>
    36                                 <ActionMatch MatchId="urn:oasis:names:tc:xacml:1.0:function:string-equal">
    37                                         <AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">login</AttributeValue>
    38                                         <ActionAttributeDesignator DataType="http://www.w3.org/2001/XMLSchema#string" 
    39                                                                    AttributeId="ServerAction"/>
    40                                 </ActionMatch>
    41                         </Actions>
    42                 </Target>
    43 
    44                 <!-- Only allow logins from 9am to 5pm -->
    45                 <Condition FunctionId="urn:oasis:names:tc:xacml:1.0:function:and">
    46                         <Apply FunctionId="urn:oasis:names:tc:xacml:1.0:function:time-greater-than-or-equal">
    47                                 <Apply FunctionId="urn:oasis:names:tc:xacml:1.0:function:time-one-and-only">
    48                                         <EnvironmentAttributeSelector DataType="http://www.w3.org/2001/XMLSchema#time" 
    49                                                                       AttributeId="urn:oasis:names:tc:xacml:1.0:environment:current-time"/>
    50                                 </Apply>
    51 
    52                                 <AttributeValue DataType="http://www.w3.org/2001/XMLSchema#time">09:00:00</AttributeValue>
    53                         </Apply>
    54 
    55                         <Apply FunctionId="urn:oasis:names:tc:xacml:1.0:function:time-less-than-or-equal">
    56                                 <Apply FunctionId="urn:oasis:names:tc:xacml:1.0:function:time-one-and-only">
    57                                         <EnvironmentAttributeSelector DataType="http://www.w3.org/2001/XMLSchema#time" 
    58                                                                       AttributeId="urn:oasis:names:tc:xacml:1.0:environment:current-time"/>
    59                                 </Apply>
    60                                 <AttributeValue DataType="http://www.w3.org/2001/XMLSchema#time">17:00:00</AttributeValue>
    61                         </Apply>
    62                 </Condition>
    63         </Rule>
    64 
    65         <!-- We could include other Rules for different actions here -->
    66 
    67         <!-- A final, "fall-through" Rule that always Denies -->
    68         <Rule RuleId="FinalRule" Effect="Deny"/>
    69 
    70 </Policy>
