Privileged Applications - Access Control[¶](#Privileged-Applications-Access-Control)
====================================================================================

Original page: ['Privileged\_applications'](.html)

Process Example:[¶](#Process-Example)
-------------------------------------

XACML defines three top-level policy elements: \<Rule\>, \<Policy\> and
\<PolicySet\>. The \<Rule\> element contains a Boolean expression that
can be evaluated in isolation, but that is not intended to be accessed
in isolation by a PDP. So, it is not intended to form the basis of an
authorization decision by itself. It is intended to exist in isolation
only within an XACML PAP, where it may form the basic unit of
management, and be re-used in multiple policies.

-   Merge two Processes Example:

<!-- -->

     1 <xs:element name="AttributeValue" type="xacml:AttributeValueType" 
     2 substitutionGroup="xacml:Expression"/>
     3 <xs:complexType name="AttributeValueType" mixed="true">
     4 <xs:complexContent>
     5 <xs:extension base="xacml:ExpressionType">
     6 <xs:sequence>
     7 <xs:any namespace="##any" processContents="lax" minOccurs="0" 
     8 maxOccurs="unbounded"/>
     9 </xs:sequence>
    10 <xs:attribute name="DataType" type="xs:anyURI" use="required"/>
    11 <xs:anyAttribute namespace="##any" processContents="lax"/>
    12 </xs:extension>
    13 </xs:complexContent>
    14 </xs:complexType>

A PDP must not return a \<StatusDetail\> element in conjunction with the
“syntax-error” status value. A syntax error may represent either a
problem with the policy being used or with the request context. The PDP
MAY return a \<StatusMessage\> describing the problem.

urn:oasis:names:tc:xacml:1.0:status:processing-error

Examples of policies for an application installer, a process viewer and policy management application[¶](#Examples-of-policies-for-an-application-installer-a-process-viewer-and-policy-management-application)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Please find Examples of policies for an application installer, a process
viewer and policy management application under the link:\
</wp3-1/wiki/Policy_Examples>

HasPrivilegesOfRole Policies and Requests:[¶](#HasPrivilegesOfRole-Policies-and-Requests)
-----------------------------------------------------------------------------------------

An XACML RBAC system may choose to support queries of the form “Does
this subject have the privileges of role X?” If so, each Permission
\<PolicySet\> must contain a HasPrivilegesOfRole \<Policy\>. For the
Permission \<PolicySet\> for critical data, the HasPrivilegesOfRole
\<Policy\> would look as follows:

     1 <!-- HasPrivilegesOfRole Policy for manager role -->
     2 <Policy PolicyId="Permission:to:have:manager:role:permissions" 
     3 RuleCombiningAlgId="&rule-combine;permit-overrides">
     4 <!-- Permission to have manager role permissions for an Engine -->
     5 <Rule RuleId="Permission:to:have:manager:permissions" 
     6 Effect="Permit">
     7 <Condition>
     8 <Apply FunctionId=”&function;and”>
     9 <Apply FunctionId=”&function;anyURI-is-in”>
    10 <AttributeValue
    11 DataType=”&xml;anyURI”>&roles;manager</AttributeValue>
    12 <ResourceAttributeDesignator
    13 AttributeId="&role;" 
    14 DataType="&xml;anyURI"/>
    15 </Apply>
    16 <Apply FunctionId=”&function;anyURI-is-in”>
    17 <AttributeValue
    18 DataType=”&xml;anyURI”>&actions;hasPrivilegesofRole</AttributeValue>
    19 <ActionAttributeDesignator
    20 AttributeId=”&action;action-id”
    21 DataType=”&xml;anyURI”/>
    22 </Apply>
    23 </Apply>
    24 </Condition>
    25 </Rule>
    26 </Policy>

Policies based on Subject and Resource attributes:[¶](#Policies-based-on-Subject-and-Resource-attributes)
---------------------------------------------------------------------------------------------------------

A common requirement is to base an authorization decision on some
characteristic of the subject other than its identity. Perhaps, the most
common application of this idea is the subject's role (RBAC - Role Based
Access Control). XACML provides facilities to support this approach.
Attributes of subjects contained in the request context may be
identified by the \<SubjectAttributeDesignator\> element. This element
contains a URN that identifies the attribute. Alternatively, the
\<AttributeSelector\> element may contain an XPath expression over the
request context to identify a particular subject attribute value by its
location in the context.

-   Example:

<!-- -->

     1 <?xml version="1.0" encoding="UTF-8"?>
     2 <Policy
     3 xmlns="urn:oasis:names:tc:xacml:2.0:policy:schema:os" 
     4 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
     5 xsi:schemaLocation="urn:oasis:names:tc:xacml:2.0:policy:schema:os
     6 http://docs.oasis-open.org/xacml/access_control-xacml-2.0-policy-schema-os.xsd" 
     7 PolicyId="urn:oasis:names:tc:example:SimplePolicy1" 
     8 RuleCombiningAlgId="identifier:rule-combining-algorithm:deny-overrides">
     9 <Description> access control policy</Description>
    10 <Target/>
    11 <Rule
    12 RuleId= "urn:oasis:names:tc:xacml:2.0:example:SimpleRule1" 
    13 Effect="Permit">
    14 <Description>
    15 Any subject with an e-mail name in the domain can perform any action on any resource.
    16 </Description>
    17 <Target>
    18 <Subjects>
    19 <Subject>
    20 <SubjectMatch
    21 MatchId="urn:oasis:names:tc:xacml:1.0:function:rfc822Name-match">
    22 <AttributeValue
    23 DataType="http://www.w3.org/2001/XMLSchema#string"> example.com
    24 </AttributeValue>
    25 <SubjectAttributeDesignator
    26 AttributeId="urn:oasis:names:tc:xacml:1.0:subject:subject-id" 
    27 DataType="urn:oasis:names:tc:xacml:1.0:data-type:rfc822Name"/>
    28 </SubjectMatch>
    29 </Subject>
    30 </Subjects>
    31 </Target>
    32 </Rule>
    33 </Policy>

-   Policy Enforcement Point in High Level Vehicle Bus Infrastructure:

![](pa2.jpg)

High Level Vehicle Bus Infrastructure:\
![](pa.jpg)[¶](#High-Level-Vehicle-Bus-Infrastructure)
------------------------------------------------------
