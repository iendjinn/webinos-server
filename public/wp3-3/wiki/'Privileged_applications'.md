'Privileged applications'[¶](#Privileged-applications)
======================================================

    John comment: this shouldn't be a specification right now.

Introduction[¶](#Introduction)
------------------------------

A Privileged application is an application that has full access to the
webinos runtime and can use non-public APIs. It can potentially access
and modify standard system controls (policies) and check for specific
user IDs (UIDs), group IDs (GIDs), authorizations, or privileges.
Privileged applications and services in webinos are necessary for the
following situations:

1\. To modify and view security and privacy policies\
2. To modify and view stored context data\
3. To create applications which take advantage of non-public webinos
APIs. These applications should become non-privileged as soon as the
APIs are published\
4. To access system commands and classes which manage OS services and
other sensitive data.\
5. Monitoring system activity and report errors for debugging.

Use Cases Identified[¶](#Use-Cases-Identified)
----------------------------------------------

**Accepted Related UseCases**:

• WOS-UC-TA8-002: Interpreting policies and making access control
decisions\
• WOS-UC-TA8-003: Enforcing multiple policies on multiple devices

**Deferred UseCases**:

• WOS-UC-TA1-008: Webinos Federation\
• WOS-UC-TA4-014: Continuous sharing of a medical file through webinos
enabled devices

**Rejected UseCases**:

• WOS-UC-TA8-007: Policy authoring tools\
• WOS-UC-TA4-013: Dynamically Sharing Content with other Users in a
Controlled Manner\
• WOS-UC-TA7-008: Create contexts from a pre-defined template

Privileged Application Analysis[¶](#Privileged-Application-Analysis)
--------------------------------------------------------------------

-   A privileged application, is like any other webinos application, is
    signed by a private signing key.
-   This key must have a certificate held on the device in and marked in
    the system policy as being valid for privileged applications.
-   Applications signed with a certificate from an authority deemed to
    be capable of giving full privileges (i.e. one who's certificate is
    marked by the policy as being allowed to do so) can execute with
    privileged permissions and therefore have full access to the webinos
    device.

Looking at the updated requirements, there is no specific privileged
application that we can have for webinos. However there are requirements
that exist for having a policy editor which acts as a privileged
application and that fulfils the need for privileged applications.
Though policy system exists at the moment, but we don’t have a User
Interface that users can edit policies. E.g., some kind of application
which is capable of modifying XACML files with a GUI.

**Requirements that exist and that can be looked upon**:

-   Security policies shall be authorable by users.
-   Policies shall be created and modified by users using a webinos
    policy editor.
-   The webinos policy editor shall allow asset-based policy
    specification, including objects, subjects, signing authorities and
    APIs.
-   The webinos policy editor shall incorporate example textual
    descriptions of how particular policy changes affect system
    behavior.

Focus area:[¶](#Focus-area)
---------------------------

Privileged applications specifications from WP 3.1 was not considered in
the first phase of WP 4, WP 5 implementations, but since there is a need
and these are useful can be considered for the second phase of
implementation in WP 3.3, WP 3.5, WP 4 and WP 5. By using a policy
editor we can identify the limitations in webinos platform, This could
also help in providing or identifying the missing components to the
webinos platform. However privileged applications are a need for webinos
but since they have a significant risk and should be avoided where
possible. So we are proposing to have a policy editor as a privileged
application.

Policy Editor Notes:[¶](#Policy-Editor-Notes)
---------------------------------------------

</t3-5/wiki/PolicyEditor>

