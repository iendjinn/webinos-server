Online meeting 2012-05-16[¶](#Online-meeting-2012-05-16)
========================================================

Attendees[¶](#Attendees)
------------------------

Paolo Vergori (ISMB) <vergori@ismb.it> 10:56 AM - 11:40 AM

Christian Fuhrhop <gotowebinos@fokus.fraunhofer.de> 10:55 AM - 11:40 AM

ziran sun <ziran.sun@samsung.com> 10:56 AM - 11:40 AM

Wei Guo <wei6.guo@partner.samsung.com> 10:56 AM - 11:40 AM

John Lyle <john.lyle@cs.ox.ac.uk> 10:57 AM - 11:40 AM

Simon Isenberg <simon.isenberg@bmw.de> 11:01 AM - 11:40 AM

Claes Nilsson <claes1.nilsson@sonymobile.com> 11:02 AM - 11:40 AM

Victor Klos (TNO) <victor.klos@tno.nl> 11:02 AM - 11:30 AM

Andrea (Polito) <shocked@polito.it> 11:03 AM - 11:40 AM

Christos Ntanos <cntanos@epu.ntua.gr> 11:22 AM - 11:40 AM

Update all task 3.2 APIs according to latest W3C widl-specification.[¶](#Update-all-task-32-APIs-according-to-latest-W3C-widl-specification)
--------------------------------------------------------------------------------------------------------------------------------------------

-   All APIs now migrated by Dom and Christian to the task 3.4 branch:
    <http://dev.webinos.org/specifications/new/>. Many thanks!!!

<!-- -->

-   Christian states that for the APIs that he migrated there are more
    to be done. Keyword for callbacks are identified as there is now a
    specific mechanism to describe callback functions (using the
    “callback” keyword) that should be used instead of
    [NoInterfaceObject] interfaces. "Action for Christian to update all
    migrated APIs to use the "calback[keyword for callback
    functions](http://dev.webinos.org/redmine/issues/893).

<!-- -->

-   Actions for original editors to review new version.

<!-- -->

-   We are still missing executable of widlproc for Windows. However,
    Christian has been editing widls locally and then uploaded to
    Redmine for specification generation, without confirming that the
    specification generation works on the local machine. Redmine
    provides error messages. Claes comment: If you are using a windows
    machine this works for smaller changes but it is probably
    inefficient for major updates or new specifications so a widlproc
    executable for windows would be advantageous. Paddy is working on
    this.

<!-- -->

-   Unchanged referred APIs from W3C and WAC to be aligned with latest
    versions of orginal specification. Most referred API are included in
    the Redmine specification repository as static html-files but a few,
    e.g. Calendar API, are included together with the Webinos API
    specifications as .widl-files. [Action for Claes to investigate
    format needed as input to development
    toolchain](http://dev.webinos.org/redmine/issues/894)

<!-- -->

-   There has been a question on the mailing list on which "frozen"
    revisions of Webinos APIs we need. See mail
    <https://listen.fokus.fraunhofer.de/sympa/arc/webinos-wp3-ml/2012-05/msg00064.html>.
    The best approach seems to be to keep the task 3.2 API
    specifications as documentation of the task 4.1 implementation and
    state any deviations in the implementation from the specification as
    implementation notes.

API specification alignment with task 4.1 API implementations and further work on APIs[¶](#API-specification-alignment-with-task-41-API-implementations-and-further-work-on-APIs)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

See
</t3-4/wiki/API_specification_alignment_with_task_41_API_implementations>

API owners for all APIs stated except:

-   Context API - NTUA or IBBT?
-   Discovery API - SoMC or Fraunhofer?

In addition we have new APIs that have been added in task 3.4,
</t3-4/wiki/New_proposed_Webinos_APIs>:

-   Generic Actuator API - Andre owner
-   W3C WebRTC APIs getUserMedia and PeerConnection APIs - Martin owner
-   oAuth API - Paolo owner
-   Telephone API - proposed by Nick
-   Victor will propose two new APIs that will be presented at next
    week's call

Aligning Webinos APIs with latest W3C and other standards[¶](#Aligning-Webinos-APIs-with-latest-W3C-and-other-standards)
------------------------------------------------------------------------------------------------------------------------

[Aligning Webinos APIs with latest W3C and other
standards](/t3-4/wiki/Aligning_Webinos_APIs_with_latest_W3C_standards).

-   Service Discovery:
    -   Web Intents for Service Discovery? Investigation in progress,
        see [Task 8.1 wiki page on Web
        Intents](/wp8-1/wiki/Web_Intents).
        Sony has submitted a proposal for extending Web Intents to
        support local network service discovery,
        <http://www.w3.org/wiki/WebIntents/SonyMobile_-_Local_Network_Service_Discovery>
    -   Ziran has submitted information on existing implementation
        status on discovery in wp4.1:
        <http://dev.webinos.org/redmine/issues/891>
    -   Need to coordinate with discovery work in task 3.3

Other[¶](#Other)
----------------

Everyone to execute their Actions stated at
</t3-4/issues>

Next meeting moved to Wednesday May 23 at 11.00.

