Task 3.4 API specifications, phase 2[¶](#Task-34-API-specifications-phase-2)
============================================================================

-   [Task 3.4 API specifications, phase
    2](#Task-34-API-specifications-phase-2)
    -   [Introduction](#Introduction)
        -   [Deliverable 3.4](#Deliverable-34)
        -   [Final webinos device API specifications
            delivery](#Final-webinos-device-API-specifications-delivery)
        -   [Links for task 3.2, API specifications phase
            1](#Links-for-task-32-API-specifications-phase-1)
        -   [Links for task 3.4, API specifications phase
            2](#Links-for-task-34-API-specifications-phase-2)
        -   [Further work (after task 3.4 delivery August 31
            2012)](#Further-work-after-task-34-delivery-August-31-2012)
    -   [Time schedule](#Time-schedule)
    -   [Resources](#Resources)
    -   [Webinos phase 2 API specification
        overview](#Webinos-phase-2-API-specification-overview)
        -   [Phase 1 APIs further
            development](#Phase-1-APIs-further-development)
        -   [New phase 2 APIs](#New-phase-2-APIs)
    -   [Task 3.4 major goals](#Task-34-major-goals)
    -   [Work Plan](#Work-Plan)
        -   [Prestudy phase](#Prestudy-phase)
        -   [Specification phase](#Specification-phase)
    -   [Miscellaneous links](#Miscellaneous-links)
    -   [Meetings](#Meetings)
        -   [Online meetings](#Online-meetings)
        -   [Ghent F2F meetings June 18 -
            22](#Ghent-F2F-meetings-June-18-22)
        -   [Uploaded files](#Uploaded-files)

Introduction[¶](#Introduction)
------------------------------

This task will continue to develop the application programming interface
specifications (APIs) to make the desired functionalities available to
webinos applications.

### Deliverable 3.4[¶](#Deliverable-34)

[Task 3.4 Deliverable](/wp3-4/wiki/Task_34_Deliverable)\
[Task 3.4 Deliverable (includes) (Full version for paper deliverable -
do not edit here.)](/wp3-4/wiki/Task_34_Deliverable_(includes)_(Full_version_for_paper_deliverable_-_do_not_edit_here))

The final report in word and pdf formats is here: [BSCW D3.4: webinos
phase II device, network, and server-side API
specifications](https://bscw.fokus.fraunhofer.de/bscw/bscw.cgi/1748249).

The repository for the "frozen" D3.4 API specifications is here: [D3.4
API
specifications](http://dev.webinos.org/deliverables/wp3/Deliverable34/)

### Final webinos device API specifications delivery[¶](#Final-webinos-device-API-specifications-delivery)

[Task 3.4 Final Deliverable](/wp3-4/wiki/Task_34_Final_Deliverable)

### Links for task 3.2, API specifications phase 1[¶](#Links-for-task-32-API-specifications-phase-1)

-   wiki (investigation results, delivery etc): [Task 3.2
    wiki](/wp3-2/wiki)

<!-- -->

-   [Webinos phase 1 API
    specifications](http://dev.webinos.org/specifications/draft/)

### Links for task 3.4, API specifications phase 2[¶](#Links-for-task-34-API-specifications-phase-2)

-   The current landscape of APIs for Web Applications is described at
    the following page: [Web Application API landscape](/wp3-4/wiki/Web_Application_API_landscape). This
    page is an update from the "Landscape" section in the task 3.2
    delivery.

<!-- -->

-   [Webinos phase 2 API
    specifications](http://dev.webinos.org/specifications/new/)

<!-- -->

-   [Phase 1 APIs to
    remove](/wp3-4/wiki/Task_32_APIs_to_remove)

<!-- -->

-   [Further work on phase 1
    APIs](/wp3-4/wiki/API_specification_alignment_with_task_41_API_implementations)

<!-- -->

-   [New APIs for phase
    2](/wp3-4/wiki/New_proposed_Webinos_APIs)

<!-- -->

-   [How to edit and upload Webinos phase 2 API specifications](/wp3-4/wiki/How_to_edit_and_upload_Webinos_phase_2_API_specifications)

<!-- -->

-   For guidelines and common practices on specifying APIs see: [API
    specification guidelines](/wp3-4/wiki/API_specification_guidelines)

### Further work (after task 3.4 delivery August 31 2012)[¶](#Further-work-after-task-34-delivery-August-31-2012)

[webinos API specifications further work](/wp3-4/wiki/Webinos_API_specifications_further_work)

Time schedule[¶](#Time-schedule)
--------------------------------

Start: April 1, 2012\
End: August 30, 2012

Resources[¶](#Resources)
------------------------

Offically estimated effort in PM for task 3.4 for each partner could be
found in [Webinos Plan Staff Effort
document](https://docs.google.com/spreadsheet/ccc?key=0AvWom5skhWLEdEtqeGdyMkdSLXhtZW1td0lvREVyc2c#gid=17).
Each partner should fill in the table below and state planned workarea
in task 3.4.

  ----------------------- ----------------------- -----------------------
  **Company**             **Estimated effort in   **Workarea**
                          PM**                    

  AmbieSense              1.4                     To be confirmed

  Antenna                                         

  BMW                     2                       Vehicle Api 2.0,
                                                  alignement with
                                                  upcoming Genivi API

  Deutsche Telecom        2                       Payment

  ERCIM                   0.75                    revised NFC API and new
                                                  Secure Elements API

  Fraunhofer              2                       TV API 2.0?, rework of
                                                  Event API to better
                                                  match existing W3C
                                                  event/messaging
                                                  models?, Actuator API,
                                                  others

  IBBT                                            

  Impleo                  0 (officially but but   
                          am happy to divert      
                          effort from 3.3 /3.5 if 
                          there is need )         

  ISMB                    1                       Contacts module
                                                  wrapper, oAuth API
                                                  preliminary
                                                  investigation

  NTUA                    0 (officially)          oAuth API?

  Oxford                  0 (officially)          Browser-safe APIs,
                                                  security APIs

  Polito                                          

  Samsung                 2                       discovery - Web Intents
                                                  for local discovery,
                                                  sensor - heart rate
                                                  monitor sensor type

  Sony                    4                       Task 3.4 lead

  TIM                     3                       

  TIS                                             

  TNO                     tba                     tba

  TUB                                             

  UniCT                                           

  VisionMobile            0                       
  ----------------------- ----------------------- -----------------------

Webinos phase 2 API specification overview[¶](#Webinos-phase-2-API-specification-overview)
------------------------------------------------------------------------------------------

### Phase 1 APIs further development[¶](#Phase-1-APIs-further-development)

  ------------------ ------------------ ------------------ ------------------
  **API**            **Owner**          **Reviewers**      **Status**

  Context API        Christos / NTUA    Dieter/IBBT, John  Context API is
                                        Lyle/Oxford        updated. The
                                                           issues in
                                                           [Problems with
                                                           Context
                                                           API](http://dev.we
                                                           binos.org/redmine/
                                                           issues/877)
                                                           were addressed.
                                                           Discussions with
                                                           Victor on
                                                           including
                                                           functionality for
                                                           privacy aware
                                                           location and
                                                           proximity but this
                                                           will be added
                                                           after the
                                                           delivery.

  App2App Messaging  Fabian             Ziran Sun/Samsung, Replaces the old
  API                Walraven/TNO       Victor Klos/TNO,   Event Handling API
                                        Andre              and is smaller,
                                        Paul/FRaunhofer,   more secure and
                                        Anders Isberg/Sony more
                                                           implementable.
                                                           Specification and
                                                           background
                                                           information in
                                                           place. Review
                                                           done.

  AppLauncher API    Andre              Claes Nilsson/Sony Specification and
                     Paul/Fraunhofer                       background
                                                           information in
                                                           place. Review
                                                           done.

  Messaging API      Christian          Stefano            Specification and
                     Fuhrhop/Fraunhofer Vercelli/TIM       background
                                                           information in
                                                           place. Review
                                                           done.

  NFC API            Dave Raggett/W3C,  Stefano            Specification and
                     Christian          Vercelli/TIM       background
                     Fuhrhop/Fraunhofer                    information in
                                                           place. Review in
                                                           progress

  Payment API        Christian          Claes Nilsson/Sony Specification and
                     Fuhrhop/Fraunhofer                    background
                                                           information in
                                                           place. Review
                                                           done.

  The Generic Sensor Claes Nilsson/Sony Stefano            Specification and
  API                                   Vercelli/TIM       background
                                                           information in
                                                           place. Review
                                                           done.

  Discovery API      Andre              Ziran Sun/Samsung, Specification and
                     Paul/Fraunhofer    Anders and         background
                                        Claes/Sony         information in
                                                           place. Review
                                                           done.

  TV Control API     Martin             Ziran Sun/Samsung  Specification and
                     Lasak/Fraunhofer                      background
                                                           information in
                                                           place. Review
                                                           done.

  Vehicle API        Simon Isenberg /   Claes Nilsson/Sony Specification and
                     BMW                                   background
                                                           information in
                                                           place. Review
                                                           done.

  Webinos core       Claes              Claes, John,       Specification and
  interface          Nilsson/Sony,      Christian          background
                     Habib Viri/Samsung                    information in
                                                           place. Review in
                                                           progress
                                                           (additions of
                                                           personal zone
                                                           information).

  Widget API         Andre              TNO (Victor etc)   Specification and
                     Paul/Fraunhofe                        background
                                                           information in
                                                           place. Review in
                                                           progress

  Contacts API       Christian          Stefano            Specification and
                     Fuhrhop/Fraunhofer Vercelli/TIM       background
                                                           information in
                                                           place. Review
                                                           done.

  Authentication API Andrea             John Lyle/Oxford   Specification and
                     Atzeni/Polito                         background
                                                           information in
                                                           place. Reviewed?

  MediaContent API   Stefano            Claes Nilsson/Sony Replaces the old
                     Vercelli/Telecom                      shelved W3C
                     Italia                                Gallery API.
                                                           Specification and
                                                           background
                                                           information in
                                                           place. Review
                                                           done.

  Device Status API  Christian          Stefano            Specification and
                     Fuhrhop/Fraunhofer Vercelli/TIM,      background
                                        Salvatore          information in
                                        Monteleone/UNICT   place. Review
                                                           done.

  Device Interaction Christian          Claes Nilsson/Sony Specification and
  API                Fuhrhop/Fraunhofer                    background
                                                           information in
                                                           place. Review
                                                           done.

  The W3C Calendar   owner?                                Not implemented in
  API                                                      phase 1. Continue
                                                           to refer to W3C
                                                           Calendar. Consider
                                                           later alignment
                                                           with expected W3C
                                                           System
                                                           Applications WG
                                                           and DAP work on
                                                           Calendar APIs,
                                                           potentially Web
                                                           Intents based.

  The W3C            Paddy Byers /                         Implemented in
  DeviceOrientation  Impleo                                phase 1. Continue
  Event                                                    to refer to W3C
  specification                                            specification.

  The W3C File       Felix-Johannes                        Implemented in
  API/File           Jendrusch -                           phase 1. Continue
  Writer/Directories Fraunhofer                            to refer to W3C
  and System                                               specifications.

  The W3C            Victor Klos/TNO                       Implemented in
  Geolocation API    (implemented by                       phase 1. Continue
                     Paddy/Impleo                          to refer to W3C
                                                           specification.
  ------------------ ------------------ ------------------ ------------------

### New phase 2 APIs[¶](#New-phase-2-APIs)

  ------------------ ------------------ ------------------ ------------------
  **API**            **Owner**          **Reviewers**      **Status**

  The Generic        Andre              Claes Nilsson/Sony Specification and
  Actuator API       Paul/Fraunhofer                       background
                                                           information in
                                                           place. Review
                                                           done.

  AppState           Martin             Habib Viri/Samsung Specification and
  Synchronization    Lasak/Fraunhofer                      background
  API                                                      information in
                                                           place. Review in
                                                           progress

  oAuth API          Paolo Vergori,     John Lyle/Oxford   This will not be a
                     Michelle                              task 3.4 API as it
                     Morello/ISMB                          will be
                                                           implemented on a
                                                           server as a
                                                           service. he
                                                           current background
                                                           information on the
                                                           task 3.4 wiki will
                                                           be removed.
                                                           Instead the task
                                                           3.3 delivery will
                                                           contain
                                                           informative text
                                                           on the oAuth API.

  Telephone API      Nick Allot/Impleo                     Withdrawn from
                                                           task 3.4. To be
                                                           added later and
                                                           coordinated with
                                                           W3C System
                                                           Applications WG
                                                           when it is
                                                           running.

  Secure Elements    Dave Raggett/W3C   Stefano            Background
  API                                   Vercelli/TIM       information and
                                                           specification in
                                                           place. Review in
                                                           progress.

  The W3C Media      Martin             Anders Isberg/Sony Specification
  Capture and        Lasak/Fraunhofer                      reference and
  Streams API                                              background
                                                           information in
                                                           place.

  WebRTC 1.0:        Martin Lasak /     Anders Isberg/Sony Specification
  Real-time          Fraunhofer                            reference and
  Communication                                            background
  Between Browsers                                         information in
                                                           place.

  Web Notifications  Andre              Claes Nilsson/Sony Specification and
                     Paul/Fraunhofer                       background
                                                           information in
                                                           place. Review
                                                           done.

  Navigation API     Simon Isenberg/BMW Claes Nilsson/Sony Specification and
                                                           background
                                                           information in
                                                           place. Review
                                                           done.

  Remote UI API      Christian          Anders Isberg/Sony Specification and
                     Fuhrhop/Fraunhofer                    background
                                                           information in
                                                           place. Review
                                                           done.
  ------------------ ------------------ ------------------ ------------------

Task 3.4 major goals[¶](#Task-34-major-goals)
---------------------------------------------

Based on experiences from our implementations in WP4 and WP5, updated
use cases/requirements in WP2, evolving webinos architecture
specification in task 3.3, progress in W3C API standardization and
developer community feedback we should continue the API specification
work started in task 3.2.

This includes for example:

-   Updating all API specifications to align with the latest W3C Web
    IDL-specification.
-   Assuring that all API specifications are aligned with the real WP4
    API implementations.
-   Removing APIs specified in task 3.2 but found that we definitively
    don’t need.
-   Specifying, or referring, new APIs found that we need.
-   Aligning with latest versions of referred W3C or other API
    standards.
-   Continuing providing feedback to W3C standardization, working with
    task 8.1

Work Plan[¶](#Work-Plan)
------------------------

### Prestudy phase[¶](#Prestudy-phase)

The prestudy phase runs until end of June 2012. At this date the
following must be achieved:

-   Scope of task 3.4 delivery, i.e. the API specifications that will be
    included, defined.
-   Investigation results on progressing existing task 3.2 APIs and on
    new APIs documented.

Details:

  ---------- ----------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --------------
  **Task**   **Description**                                                                                             **Details**                                                                                                                                                                                                        **Deadline**
  1          Decide on task 3.2 APIs to remove                                                                           See [Task 3.2 APIs to remove](/wp3-2/wiki)                                                                                                                                                                               June 29
  2          Investigate API updates needed to align with task 4.1 API implementations                                   See [API specification alignment with task 4.1 API implementations and further work on the APIs](/wp3-4/wiki/API_specification_alignment_with_task_41_API_implementations)   May 31
  3          State proposed improvements and additions to existing Webinos APIs                                          See [API specification alignment with task 4.1 API implementations and further work on the APIs](/wp3-4/wiki/API_specification_alignment_with_task_41_API_implementations)   June 29
  4          Identify new APIs found that we need and background information/motivation for adding the API to Webinos.   See [New proposed Webinos APIs](/wp3-4/wiki/New_proposed_Webinos_APIs)                                                                                                                                                                             June 29
  5          Identify alignment with latest versions of referred W3C standards                                           See [Aligning Webinos APIs with latest W3C standards](/wp3-4/wiki/Aligning_Webinos_APIs_with_latest_W3C_standards)                                                                                                                                                       June 29
  6          Prestudy on Web Intents for Webinos                                                                         [Web Intents for Webinos](/wp3-4/wiki/Web_Intents_for_Webinos)                                                                                                                                                                                   June 29
  ---------- ----------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ --------------

### Specification phase[¶](#Specification-phase)

The specification phase ends August 31.

For API specification tool chain see: [How to edit and upload Webinos
phase 2 API
specifications](/wp3-4/wiki/How_to_edit_and_upload_Webinos_phase_2_API_specifications)

For guidelines and common practices on specifying APIs see: [API
specification guidelines](/wp3-4/wiki/API_specification_guidelines)

Details:

  ------------------ ------------------ ------------------ ------------------
  **Task**           **Description**    **Details**        **Deadline**

  1                  Align with latest  See this page for  May 23
                     W3C Web            details [API       
                     IDL-specification  specification      
                                        update due to new  
                                        W3C                
                                        widlspecification] 
                                        (/wp3-4/wiki/API_specification_update_due_to_new_W3C_widlspecification)            

  2                  Update existing    See [API           August 27
                     specifications     specification      
                     based on           alignment with     
                     experiences from   task 4.1 API       
                     task 4.1           implementations    
                     implementation and and further work   
                     other improvements on the             
                     discovered         APIs](/wp3-4/wik 
                                        i/API_specificatio 
                                        n_alignment_with_t 
                                        ask_41_API_impleme 
                                        ntations)          

  3                  Specification of   See [New proposed  August 27
                     new APIs           Webinos            
                                        APIs](/wp3-4/wik 
                                        i/New_proposed_Web 
                                        inos_APIs)         

  4                  Editing of                            August 27
                     delivery                              
                     background                            
                     information                           

  5                  Full delivery                         August 30
                     review                                
  ------------------ ------------------ ------------------ ------------------

Miscellaneous links[¶](#Miscellaneous-links)
--------------------------------------------

-   [API Security Issues - task
    3.5](/wp3-5/wiki/D036_API_Security_Issues)
-   [Feature strings for referred
    APIs](/wp3-4/wiki/Webinos_feature_URIs_for_referred_APIs)

Meetings[¶](#Meetings)
----------------------

### Online meetings[¶](#Online-meetings)

Weekly task 3.4 online meetings are held. See [WP3.4 online meeting
details](/wp3-4/wiki/WP34_online_meeting_details).

[Online meeting 2012-08-16](/wp3-4/wiki/Online_meeting_2012-08-16)\
[Online meeting 2012-08-09](/wp3-4/wiki/Online_meeting_2012-08-09)\
[Online meeting 2012-08-02](/wp3-4/wiki/Online_meeting_2012-08-02)\
[Online meeting 2012-06-28](/wp3-4/wiki/Online_meeting_2012-06-28)\
[Online meeting 2012-06-07](/wp3-4/wiki/Online_meeting_2012-06-07)\
[Online meeting 2012-05-23](/wp3-4/wiki/Online_meeting_2012-05-23)\
[Online meeting 2012-05-16](/wp3-4/wiki/Online_meeting_2012-05-16)\
[Online meeting 2012-05-10](/wp3-4/wiki/Online_meeting_2012-05-10)\
[Online meeting 2012-05-03](/wp3-4/wiki/Online_meeting_2012-05-03)\
[Online meeting 2012-04-26](/wp3-4/wiki/Online_meeting_2012-04-26)\
[Online meeting 2012-04-19](/wp3-4/wiki/Online_meeting_2012-04-19)

### Ghent F2F meetings June 18 - 22[¶](#Ghent-F2F-meetings-June-18-22)

[Webinos APIs - presentation for launch day June 19
2012](http://dev.webinos.org/redmine/attachments/2174/Webinos_launch_day_2012-06-19_-_APIs.pptx)\
[Task 3\_4 session Ghent June 20
2012](http://dev.webinos.org/redmine/attachments/2185/Task_3_4_session_Ghent_June_20_2012.pptx)

[MoM task 3.4 Ghent session June 20](/wp3-4/wiki/MoM_task_34_Ghent_session_June_20)

### Uploaded files[¶](#Uploaded-files)
