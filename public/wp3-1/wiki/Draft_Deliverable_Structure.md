![](http://dev.webinos.org/resources/webinos.jpg)

-   [Introduction](#Introduction)
-   [Scope](#Scope)
    -   [What's in scope](#Whats-in-scope)
    -   [Whats out of scope](#Whats-out-of-scope)
-   [Review of State of the Art](#Review-of-State-of-the-Art)
-   [Recommendations from state of the
    art](#Recommendations-from-state-of-the-art)
-   [Conceptual Architecture](#Conceptual-Architecture)
-   [Technical Use Cases](#Technical-Use-Cases)
    -   [Sequence diagram analysis](#Sequence-diagram-analysis)
-   [Formal Specification](#Formal-Specification)
    -   [UML components analysis](#UML-components-analysis)
    -   [UML sequence analysis](#UML-sequence-analysis)
    -   [Functional and non functional
        requirements](#Functional-and-non-functional-requirements)
    -   [Protocol definitions](#Protocol-definitions)
    -   [JavaScript APIs](#JavaScript-APIs)
    -   [Dependencies on other
        components](#Dependencies-on-other-components)
    -   [Implementation Architecture](#Implementation-Architecture)

Introduction[¶](#Introduction)
==============================

A friendly introduction to the subject area

-   one
-   two
    -   three

1.  one
2.  two
    1.  three

The introduction should highlight webinos innovations, since reviewers
and other readers will be asking that question very early on.

Scope[¶](#Scope)
================

What's in scope[¶](#Whats-in-scope)
-----------------------------------

Precise statements of what we are considering in this section

Whats out of scope[¶](#Whats-out-of-scope)
------------------------------------------

Explicit statement of things we are holding out of scope, including
items we are deferring to phase 2.

Review of State of the Art[¶](#Review-of-State-of-the-Art)
==========================================================

Document and evaluate the existing technologies in this space

Recommendations from state of the art[¶](#Recommendations-from-state-of-the-art)
================================================================================

Make some conclusions on what aspects of state of the art we can use

Conceptual Architecture[¶](#Conceptual-Architecture)
====================================================

[webinos architecture](.html)

Technical Use Cases[¶](#Technical-Use-Cases)
============================================

Discrete technical use cases that unfold the requirements one by one.

Sequence diagram analysis[¶](#Sequence-diagram-analysis)
--------------------------------------------------------

Sequence diagram analysis that reconciles the conceptual architecture
with the user cases, eliciting issues as we go

Formal Specification[¶](#Formal-Specification)
==============================================

This section is where we get into formal specification and architecture

NOTE: when it comes to formal specification the distinctions between the
subject areas may collapse

UML components analysis[¶](#UML-components-analysis)
----------------------------------------------------

Detail the specifics of the individual components required, using UML
and accompanying prose.

UML sequence analysis[¶](#UML-sequence-analysis)
------------------------------------------------

Using sequence and state diagrams describe the behaviour of the system\
and define and algorithmic elements

Functional and non functional requirements[¶](#Functional-and-non-functional-requirements)
------------------------------------------------------------------------------------------

A holding place for any formal requirements (not easily testable or
provably interoperable) that are not part of the specification.

Protocol definitions[¶](#Protocol-definitions)
----------------------------------------------

Define any protocols that must exist between elements - and data
structures.

may be done be reference to pre-existing specs - or create new ones.

JavaScript APIs[¶](#JavaScript-APIs)
------------------------------------

WebIDL definitions of 3rd party accessible functionality

     1 
     2 function Login(theUserName, thePassword)
     3 {
     4   //an option for the application to explicitly log in gathering credentials from data files or user interface
     5 
     6   //question - should this be allowed? does it introduce security issues
     7 }
     8 
     9 function IsUserIdentified()
    10 {
    11   //returns a bool - whether the runtime has logged in or not
    12   //many possible credential systems are possible here
    13 }
    14 
    15 function GetUserData(theKey)
    16 {
    17   //returns theValue - key value pairs associated with the user
    18   //access to this info is via the policy
    19 }
    20 
    21 function GetToken()
    22 {
    23   //returns a cyptographic token that represents the user
    24   //some how this must reconcile with discovery and messaging
    25 }
    26 

Dependencies on other components[¶](#Dependencies-on-other-components)
----------------------------------------------------------------------

identify interface points to other components:

e.g. ID -\> Policy points

Implementation Architecture[¶](#Implementation-Architecture)
------------------------------------------------------------

Start to look at actual **implementation** issues for code - this does
not presume interopatbiity and will consider platform specific issues

