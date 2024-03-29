Introduction and focus[¶](#Introduction-and-focus)
==================================================

Introduction ~~and gap analysis~~[¶](#Introduction-and-gap-analysis)
--------------------------------------------------------------------

The role of the policy manager is to enforce privacy and access control
requests - coming from local and remote requestors - in order to manage
the disclosure of personal data and to control access to personal zone
capabilities and features. This is done by matching requests to
resources from users and applications against written policies in order
to determine an access control decision. This decision could be to allow
or deny access to the requested resources, or involve further
interaction and consent with the resource owner.

<span style="background:yellow;">Review comment: Everything below this
line isn't really needed in a specification. Suggest removing and adding
to WP4 wiki as documentation</span>

The task 3.1 specified mainly the access control architecture and how to
integrate it with a privacy management architecture which was not
completely defined.

The specification proposed in the task 3.1 was not fully implemented
during task 4.1. In particular\
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

-   there are not PIP and Context Handler, since it was expected a
    deeper integration between policy and context manager. Management of
    obligations is not implemented as well.

<!-- -->

-   The Policy manager action is voluntary, in the sense that calls to
    policy manager functions must be explicitly inserted. This seems
    slightly contrasting with the PEP put in the XACML engine (in T3.1
    specification), that suggest a mandatory control for all APIs (BTW,
    this would be in line with the Context manager behavior, which
    listen every RPCs)

<!-- -->

-   The privacy part (DHDF, P3P etc) has been investigated but not
    implemented.

<!-- -->

-   Different prompt types are not fully implemented (the Policy manager
    is ready to be extended with "session" and blanket" prompt types,
    but at the moment only *one-shot* is fully available).
-   actual implementation lacks of a mechanism to synchronize policies
    and taken decisions (PDP Cache) among devices
-   IDs in policies are not stored in "Trusted records" and the generic
    values for targets cannot be used

Focus[¶](#Focus)
----------------

In this task the focus should be on the privacy management system
(proposed architecture review + privacy policies language) and on a more
detailed mechanism to share policies and related resources among users'
devices.\
Another point to work on are the privileged applications: for example in
this task the functionalities for a graphic policy editor could be
defined.

