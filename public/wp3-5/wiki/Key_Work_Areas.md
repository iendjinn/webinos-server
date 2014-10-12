Key Work Areas[¶](#Key-Work-Areas)
==================================

    Use this page to make notes on key work areas as well as documenting design decisions, principles and any important insights you have collected.

Work areas[¶](#Work-areas)
--------------------------

-   [Policy
    architecture](/wp3/wiki/Policy_Management)
-   [User Identity and Data
    Management](/wp3/wiki/User_ID_management)
-   [Privileged
    Applications](/wp3/wiki/'Privileged_applications)'
-   [IF-MAP](.html)

Design decisions.[¶](#Design-decisions)
---------------------------------------

Security Principles.[¶](#Security-Principles)
---------------------------------------------

From [Simson Garfinkel's thesis](http://simson.net/thesis/dpat.pdf) ,
the following security patterns seem relevant. If we can highlight
anywhere example of following any of these principles, that would be
valuable.

-   *Good Security Now (Don’t Wait for Perfect)*. Ensure that systems
    offering some security features are deployed now, rather than
    leaving these systems sitting on the shelf while researchers try to
    develop “perfect” security systems for deployment later
-   *Provide Standardized Security Policies (No Policy Kit)*. Provide a
    small number of standardized security conﬁgurations that can be
    audited, documented, and\
    taught to users.
-   *Least Surprise / Least Astonishment*. Ensure that the system acts
    in accordance with the user’s expectations.
-   *Explicit User Audit*. Allow the user to inspect all user-generated
    information stored in the system to see if information is present
    and verify that it is accurate. There should be no hidden data.
-   *Explicit Item Delete*. Give the user a way to delete what is shown,
    where it is shown.
-   *Reset to Installation*. Provide a means for removing all personal
    or private information associated with an application or operating
    system in a single, conﬁrmed, and ideally delayed operation
-   *Complete Delete*. Ensure that when the user deletes the visible
    representation of something, the hidden representations are deleted
    as well
-   *Leverage Existing Identiﬁcation*. Use existing identiﬁcation
    schemes, rather than trying to create new ones.
-   *Create Keys When Needed*. Ensure that cryptographic protocols that
    can use keys will have access to keys, even if those keys were not
    signed by the private key of a well-known Certiﬁcate Authority
-   *Track Received Key*. Make it possible for the user to know if this
    is the ﬁrst time that a key has been received, if the key has been
    used just a few times, or if it is used frequently.
-   *Migrate and Backup Key*. Prevent users from losing their valuable
    secret keys.
-   *Disclose Signiﬁcant Deviations*. Inform the user when an object
    (software or physical) is likely to behave in a manner that is
    signiﬁcantly different than expected. Ideally the disclosure should
    be made by the object’s creator.
-   (Questionable) *Install Before Execute*. Ensure that programs cannot
    run unless they have been properly installed.
-   *Distinguish Between Run and Open*. Distinguish the act of running a
    program from the opening of a data ﬁle.
-   *Disable by Default*. Ensure that systems does not enable services,
    servers, and other signiﬁcant but potentially surprising and
    security-relevant functionality unless there is a need to do so.
-   *Warn When Unsafe*. Periodically warn of unsafe conﬁgurations or
    actions. It is important to limit the frequency of warnings so that
    the user does not become habituated to them.
-   *Distinguish Security Levels*. Give the user a simple way to
    distinguish between similar operations that are more-secure and
    less-secure. The visual indications should be consistent across
    products, packages and vendors.

Some general principles (many taken from [Saltzer and
Schroeder](http://www.cs.virginia.edu/~evans/cs551/saltzer/) :

-   *Economy of mechanism*: Keep the design as simple and small as
    possible. Prefer the most simple option available during design.
-   *Fail-safe defaults*: Base access decisions on permission rather
    than exclusion.
-   *Least privilege*: Every program and every user of the system should
    operate using the least set of privileges necessary to complete the
    job. This is often not possible, but is particularly relevant when
    designing components which are large enough to be considered
    potentially untrustworthy. E.g. a browser. They should be given the
    minimum privilege possible so that compromise has the least impact.
-   *Compromise recording*: It is sometimes suggested that mechanisms
    that reliably record that a compromise of information has occurred
    can be used in place of more elaborate mechanisms that completely
    prevent loss
-   Don't reinvent the wheel: use existing technology where possible
-   Reduce the number and size of trusted components
-   Isolate individual components where possible

[Privacy Pitfalls](http://portal.acm.org/citation.cfm?id=1037311) - 5
things to avoid:

-   obscuring potential information flow
-   obscuring actual information flow
-   emphasizing configuration over action
-   lacking coarse-grained control
-   inhibiting existing practice

Guidance/Suggestions.[¶](#GuidanceSuggestions)
----------------------------------------------

-   OWASP guidelines for developers - [Developer
    guide](https://www.owasp.org/index.php/Category:OWASP_Guide_Project)
    , [Code review
    guide](https://www.owasp.org/index.php/Category:OWASP_Code_Review_Project)
    , [Verification standards](https://www.owasp.org/index.php/ASVS) ,
-   [Mozilla WebAppSec
    guidelines](https://wiki.mozilla.org/WebAppSec/Secure_Coding_Guidelines)
-   [Code review
    guidance?](http://www.ibm.com/developerworks/rational/library/11-proven-practices-for-peer-review/index.html?sf1100063=1)
-   Designing APIs -
    [minimization](http://www.w3.org/2001/tag/doc/APIMinimization.html)
-   [Privacy design patterns](http://dx.doi.org/10.1145/1415472.1415481)
-   [2 Privacy design
    patterns](http://www.hpl.hp.com/techreports/2010/HPL-2010-74.pdf)
-   Perform a [Privacy Impact
    Assessment](http://www.ico.gov.uk/for_organisations/data_protection/topic_guides/privacy_impact_assessment.aspx "PIA")

