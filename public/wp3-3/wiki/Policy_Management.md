Policy Management[¶](#Policy-Management)
========================================

Introduction and gap analysis[¶](#Introduction-and-gap-analysis)
----------------------------------------------------------------

The role of the policy manager is to enforce privacy and access control
requests - coming from local/remote requestors - to manage the
disclosure of user's personal data and to control the access to the
local device capabilities and features. This is done matching the
requests against written policies in order to determine a decision which
could be to allow or deny the access to the requested resources.\
The task 3.1 specified mainly the access control architecture and how to
integrate it with a privacy management architecture which was not
completely defined.

The specification proposed in the task 3.1 was not fully implemented
during task 4.1.

In the current implementation the policies are written in an xml file
(following the format specified
[here](/wp3-1/wiki/Spec_-_Security#Policy-Format)
in task 3.1). In this file it's possible to specify multiple sets of
policies: every set has a "combine" rule that is used to determine which
policy shall be applied, eg. with the "first-matching-target" combine
rule, every request shall be matched against the first policy which
matches the request's target. At the actual stage of implementation, the
target of a policy could be users, apps, devices or mix of them.\
The policy manager can recognize every feature specified for APIs in the
task 3.2 ([APIs
specs](http://dev.webinos.org/specifications/draft/index.html)) and also
the ones specified
[here](/wp3-1/wiki/Spec_-_Security#Action-features)
in the task 3.1.\
The policy manager defines also through it's Node.js wrapper, a method
to enforce requests: an example of usage can be found
[here](/wp4/wiki/W3C_contacts_module)
.\
At the moment only the Contacts Module, Device Status API, the Context
Manager and some demos have integrated the policy enforcement.

### Main differences: 3.1 specs vs 4.1 implementation[¶](#Main-differences-31-specs-vs-41-implementation)

These are the main differences between the current implementation and
what has been specified:

-   IDs in policies are not stored in "Trusted records" and the generic
    values for targets cannot be used
-   actual implementation lacks of a mechanism to synchronize policies
    and taken decisions (PDP Cache) among devices

Focus[¶](#Focus)
----------------

In this task the focus should be on the privacy management system
(proposed architecture review + privacy policies language) and on a more
detailed mechanism to share policies and related resources among users'
devices.\
Another point to work on are the privileged applications: for example in
this task the functionalities for a graphic policy editor could be
defined.

