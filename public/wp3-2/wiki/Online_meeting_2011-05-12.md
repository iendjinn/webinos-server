Online meeting 2011-05-12[¶](#Online-meeting-2011-05-12)
========================================================

Attendees[¶](#Attendees)
------------------------

Christian Fuhrhop\
Andre Paul\
Alexander Futasz\
Dirk Thatmann\
Stefano Vercelli <stefano.vercelli@telecomitalia.it>\
Ronny Graefe <ronny.graefe@t-systems.com>\
John Lyle <john.lyle@comlab.ox.ac.uk>\
Simon Isenberg <simon.isenberg@bmw.de>\
Claes Nilsson <claes1.nilsson@sonyericsson.com>\
Ziran Sun <ziran.sun@samsung.com>\
Habib Virji <habib.virji@samsung.com>

Review of [proposed contents of WP 3.2, phase 1 delivery](http://79.125.104.127/redmine/projects/t3-2/wiki#Webinos-WP-32-phase-1-deliverable) and responsible editors[¶](#Review-of-proposed-contents-of-WP-32-phase-1-delivery-and-responsible-editors)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

No specific comments

Review of [proposed list of API specifications for WP 3.2, phase 1](http://79.125.104.127/redmine/projects/t3-2/wiki/APIs_for_WP32_phase_1)[¶](#Review-of-proposed-list-of-API-specifications-for-WP-32-phase-1)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Comments:

-   Webinos base and generic objects/interfaces: Editor TBD, Claes
    candidate
-   HW Resource APIs: Device Interaction API missing. Stefano/TIM editor
-   User and Application Data APIs: Sven to state background to "User
    Authentication API". [Task
    257](http://79.125.104.127/redmine/issues/257)
-   Eventing API is missing. Andre to state a basic simple first
    proposal. [Task 259](http://dev.webinos.org/redmine/issues/259).
    Belongs to the Communication APIs category. A phone conference on
    event handling APIs was suggested.

IDL toolchain and Git[¶](#IDL-toolchain-and-Git)
------------------------------------------------

Dominique Hazael-Massieux/W3C has updated widlproc to better match the
current version of the Web IDL spec,including support for arrays. He has
updated the binary in sources/resources/linux. However, the binaries for
macOS or windows has not been updated. So, currently the HTML generation
fails for people using windows or mac. As Nick provided the initial
version of widlproc is was suggested that Nick should update the
binaries for windows and mac. [Task
263](http://dev.webinos.org/redmine/issues/263)

Claes suggested that the pages [Getting started with the source and
tools from the Git
repository](/t3-2/wiki/Getting_started_with_the_source_and_tools_from_the_Git_repository)\
and [DL ToolChain
instructions](/t3-2/wiki/IDL_Tool_Chain_instructions)
are merged and that the contents is corrected and clarified where
needed. For example, it is stated that Cygwin is needed to run the
webinos.sh script frm windows. This is not needed as this script can be
run from Git bash. [Task 264](http://dev.webinos.org/redmine/issues/264)
on Alexander.

Specific issues:[¶](#Specific-issues)
-------------------------------------

### [Discovery and access to remote services](/t3-2/wiki/Service_Discovery_API)[¶](#Discovery-and-access-to-remote-services)

No progress since Berlin. Franhofer, Samsung and SEMC (Anders) are
willing to contribute but we have a lack of resources for the tangible
widl API specification work. Claes to discuss with Anders and propose a
way forward on this subject.

### [Application Execution APIs](/t3-2/wiki/Application_execution_APIs)[¶](#Application-Execution-APIs)

A set of APIs required are listed but what is most important and should
tangible be provided for phase1? Resource situation?\
Claes to discuss with Mikael and propose a way forward on this subject.

### APIs related to context awareness and adaption. Referring to discussion at WP3-call 11/5 (George Gionis)[¶](#APIs-related-to-context-awareness-and-adaption-Referring-to-discussion-at-WP3-call-115-George-Gionis)

Claes to contact George Gionis and propose a way forward on this
subject.

