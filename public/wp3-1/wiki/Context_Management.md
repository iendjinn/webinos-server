Context Awareness - Adaptations[¶](#Context-Awareness-Adaptations)
==================================================================

-   [Context Awareness - Adaptations](#Context-Awareness-Adaptations)
    -   [Partners Involved](#Partners-Involved)
    -   [Meeting Minutes](#Meeting-Minutes)
    -   [Scope and Objectives of the
        Area](#Scope-and-Objectives-of-the-Area)
        -   [I. Management of Contextual
            Information](#I-Management-of-Contextual-Information)
        -   [II. Context Awareness Driven
            Functionality](#II-Context-Awareness-Driven-Functionality)
            -   [The following objectives are to be addressed within
                each functionality
                area:](#The-following-objectives-are-to-be-addressed-within-each-functionality-area)
    -   [Area Sub-Projects](#Area-Sub-Projects)
        -   [FINALIZED Sub-Activities Timetable (pre-Berlin)
            Meeting](#FINALIZED-Sub-Activities-Timetable-pre-Berlin-Meeting)
    -   [Envisaged Early Prototypes](#Envisaged-Early-Prototypes)
    -   [Requirements Relating to the Work in this
        Area](#Requirements-Relating-to-the-Work-in-this-Area)
    -   [State of the Art Analysis](#State-of-the-Art-Analysis)
        -   [I. Introduction](#I-Introduction)
        -   [II. Relevant Projects](#II-Relevant-Projects)
        -   [III. Standards](#III-Standards)
        -   [IV. Academic research &
            Literature](#IV-Academic-research-38-Literature)
            -   [Capability-driven Progressive
                Enhancement](#Capability-driven-Progressive-Enhancement)
            -   [A Flexible Content Adaptation System Using a Rule-Based
                Approach
                [5]](#A-Flexible-Content-Adaptation-System-Using-a-Rule-Based-Approach-5)
            -   [A context-aware mobile mashup platform for ubiquitous
                web
                [6]](#A-context-aware-mobile-mashup-platform-for-ubiquitous-web-6)
            -   [Architecture for Multimodal Mobile Applications
                [7]](#Architecture-for-Multimodal-Mobile-Applications-7)
            -   [Graceful Degradation of User Interfaces as a Design
                Method for Multiplatform Systems
                [8]](#Graceful-Degradation-of-User-Interfaces-as-a-Design-Method-for-Multiplatform-Systems-8)
            -   [Community-Driven Adaptation: Automatic Content
                Adaptation in Pervasive Environments
                [9]](#Community-Driven-Adaptation-Automatic-Content-Adaptation-in-Pervasive-Environments-9)
        -   [V. Existing Technologies](#V-Existing-Technologies)
            -   [MUSIC Middleware](#MUSIC-Middleware)
            -   [W3C example on context driven
                adaptation](#W3C-example-on-context-driven-adaptation)
            -   [Android fragments API](#Android-fragments-API)
            -   [Volantis Mobile Content
                Framework](#Volantis-Mobile-Content-Framework)
    -   [References](#References)

**[White Paper on the WEBINOS Context
Model](White%20Paper%20on%20the%20WEBINOS%20Context%20Model.html)**

Partners Involved[¶](#Partners-Involved)
----------------------------------------

-   **NTUA**
-   Ambiesense
-   IBBT
-   Volantis
-   W3C

Meeting Minutes[¶](#Meeting-Minutes)
------------------------------------

-   [March 7th, 2011 - Telco on Context-driven
    Adaptation](March%207th,%202011%20-%20Telco%20on%20Context-driven%20Adaptation.html)
-   [March 21st, 2011 - Telco on Merging Context Management,
    Context-Driven Content Adaptation](.html)
-   [March 29th, 2011 - Telco on Context Awareness and
    Adaptation](March%2029th,%202011%20-%20Telco%20on%20Context%20Awareness%20and%20Adaptation.html)
-   [May 20th, 2011 - Telco on Context Awareness and Adaptation,
    Reporting Progress Made on the Items to be
    delivered](May%2020th,%202011%20-%20Telco%20on%20Context%20Awareness%20and%20Adaptation,%20Reporting%20Progress%20Made%20on%20the%20Items%20to%20be%20delivered.html)\
    \*[May 27th, 2011 - Telco on Context Awareness and Adaptation,
    Reporting Progress Made on the Items to be delivered and points to
    be included in the oncoming 3.1/3.2
    Deliverables](May%2027th,%202011%20-%20Telco%20on%20Context%20Awareness%20and%20Adaptation,%20Reporting%20Progress%20Made%20on%20the%20Items%20to%20be%20delivered%20and%20points%20to%20be%20included%20in%20the%20oncoming%203.1/3.2%20Deliverables.html)

Scope and Objectives of the Area[¶](#Scope-and-Objectives-of-the-Area)
----------------------------------------------------------------------

The Context Awareness - Adaptations area addresses all issues relating
to management of contextual information (detection, acquisition,
representation, distribution,etc) as well as all the consequent
activities (such as content Adaptations) that could enabled by being
aware and process this information withing webinos.

In terms of its scope the present area comprises two disciplines, each
one with its specific objectives.

### I. Management of Contextual Information[¶](#I-Management-of-Contextual-Information)

The scope of this area encompasses all the necessary activities that
pertain to gathering, storing and making available context within
webinos, particularly the following objectives are to be addressed:

-   Identification of Context data relevant for the webinos operation.
-   Detection of Context Data within webinos (through the webinos
    entities) and related Context Sources *identification of existing
    APIs to be used*
-   Acquisition of Context Data for webinos system *identification of
    existing APIs to be used*
-   Representation of Context Data within webinos *definition of the
    necessary context structures in specific data format*
-   Storage of Context Data within webinos \_definition of suitable data
    storage facility
-   Distribution of Context Data among webinos entities *specification
    of the necessary APIs to be created*

### II. Context Awareness Driven Functionality[¶](#II-Context-Awareness-Driven-Functionality)

The scope of this area encompasses all the necessary functionality that
can be enabled by accessing, processing and/or reasoning on the
available Context Data. It can be considered on three levels of work
effort necessary:

1\. Adapting media content

-   Minimal solution: provide functions for discovering if device is
    capable for handling the media type.
-   Standard solution: provide functions that would simplify the process
    of converting media files using some external converter.
-   Maximum solution: provide a build-in media converter (part of WRE?)
    capable of transcoding the media to the required format.

2\. Adapting application UI

-   Minimal solution: do nothing, rely on the browser/renderer
    capabilities to adapt the UI to different devices.
-   Standard solution: provide functions/stylesheets for creating and
    rendering UI elements on different device types (part of WRE?).
-   Maximum solution: provide UI layouts, which would behave and render
    differently on different devices.

3\. Adapting graphics (canvas drawing)

-   Minimal solution: do nothing, make sure that existing functions can
    return reliable information regarding screen/viewport sizes.
-   Standard solution: provide functions for converting the canvas
    position to the position relative to the current device screen.
-   Maximum solution: provide a canvas implementation capable of scaling
    the graphics to specific sizes.

4\. Special adaptations, triggered by changing context

-   Minimal solution: do nothing, rely on the fact that the application
    functionality can be changed at any point by retrieving
    device-specific information.
-   Standard solution: provide a set of callbacks that would be
    automatically executed when context changes (e.g. a user's friend is
    in range)
-   Maximum solution: provide a mechanism for automatic adaptations and
    executing a set of actions in response to changing context (WRE with
    built-in Android Tasker functionality?)

#### The following objectives are to be addressed within each functionality area:[¶](#The-following-objectives-are-to-be-addressed-within-each-functionality-area)

1\. Context Driven Content Adaptations

-   Adapting media content, **standard or maximum** solution Webinos
    allow for using an external converter for adapting media streams.
-   Adapting application UI, **minimal or standard** solution through
    styling individual elements to have optimal behaviour and look on
    different types of devices.
-   Adapting graphics, **minimal** solution AFAIK (providing functions
    which return screen/viewport size), mostly about HTML5 canvas
    operations, but it could include SVG as well.
-   Special adaptations, **standard** solution, using old, plain Bondi
    API. The standard solution would mean extending the existing API by
    abstracting some of the concepts (e.g.check if application runs in a
    moving car by calling a single function, instead of reading a GPS
    position and checking how fast it changes).

2\. Social Proximity in Webinos

-   Definition of Social Proximity Concept within the webinos system
    (i.e. in relation to the way of operation, webinos entities, etc)
-   Discovery of webinos Users in Social Proximity *specification of the
    necessary APIs to be created*
-   Discovery of webinos Devices in Social Proximity *specification of
    the necessary APIs to be created*

*note1: this area constitutes the merging of the previous Context
Management and Context-Driven Adaptation areas*

*note2: In terms of items to be delivered, this area follows the
framework set by N. Allot in his mail on March 9th, specifically:*

> -   Research – wiki, research notes, position papers
> -   Data formats/schema – syntaxes, formal wiki
> -   Algorithms – description of processes, wiki
> -   Protocols – over the air message flows (syntax and semantics),
>     PlantUML, formal Wiki
> -   Architecture – wiki + PlantUML
> -   APIs – predominately on device, in process functions, and data
>     formats (syntax and semantics) - WebIDL
> -   Example code SVN

Area Sub-Projects[¶](#Area-Sub-Projects)
----------------------------------------

In this area the broad scope of Context Awareness and Adaptations within
webinos is divided into specific tasks whose purpose is to identify and
model the necessary architectural components and their APIs that will
enable the area's objectives.

### FINALIZED Sub-Activities Timetable (pre-Berlin) Meeting[¶](#FINALIZED-Sub-Activities-Timetable-pre-Berlin-Meeting)

  ----------- ----------- ----------- ----------- ----------- -----------
  **Item**    **Task**    **Due**     **Contribut **Status**  **Notes**
                                      ors**                   

  **Item1:    [\#200](htt mid MAY                             
  Definition  p://dev.web                                     
  of the      inos.org/re                                     
  Webinos     dmine/issue                                     
  Context     s/200 "Cont                                     
  Model**     ext Modelin                                     
              g (New)")                                       

  Item1.1:                            **NTUA**,   starting    concepts/en
  [Identify                           VisionMobil             tities
  Concepts                            e,                      that should
  and                                 Volantis,               be present
  (initial)                           others                  in the
  attributes                                                  model i.e.
  in the                                                      user,
  context                                                     devices,
  model](Iden                                                 apps,
  tify%20Conc                                                 webinos
  epts%20and%                                                 events,
  20(initial)                                                 webinos
  %20attribut                                                 activities
  es%20in%20t                                                 along with
  he%20contex                                                 an initial
  t%20model.h                                                 set of
  tml)                                                        attributes
                                                              that
                                                              pertain to
                                                              every
                                                              concept or
                                                              entity

  Item1.2:                            **AMBIESENS starting    identify
  [Define the                         E**,                    the most
  Form and                            NTUA,                   suitable
  Representat                         others                  form and
  ion                                                         notation to
  of the                                                      represent
  context                                                     the webinos
  model](Defi                                                 context
  ne%20the%20                                                 model, a
  Form%20and%                                                 good idea
  20Represent                                                 could be
  ation%20of%                                                 the
  20the%20con                                                 facebook
  text%20mode                                                 approach: a
  l.html)                                                     graph-like
                                                              representat
                                                              ion
                                                              in RDFa/xml
                                                              that will
                                                              enable us
                                                              later to
                                                              structure
                                                              also our
                                                              APIs along
                                                              it

  Item1.3                             **IBBT**,   starting    (i.e. where
  [Define the                         others                  its part of
  Storage and                                                 the context
  Extesibilit                                                 model is
  y                                                           store, for
  Framework](                                                 exmple user
  %20Define%2                                                 context in
  0the%20Stor                                                 the cloud,
  age%20and%2                                                 device
  0Extesibili                                                 context in
  ty%20Framew                                                 the device
  ork.html)                                                   and how
                                                              these are
                                                              linked
                                                              between
                                                              them and
                                                              also
                                                              provide a
                                                              mechanism
                                                              for
                                                              creating
                                                              custom
                                                              context
                                                              models, for
                                                              example
                                                              application
                                                              context

  **Item2:    \#xxx       end of June                         
  Context                                                     
  Storage and                                                 
  Access**                                                    

  Item2.1:                            **NTUA**,   pending     implement
  Implement                           others                  the
  the webinos                                                 infrastruct
  Context                                                     ure
  Storage                                                     to hold the
  Facillity                                                   webinos
                                                              context
                                                              data either
                                                              in a
                                                              centralized
                                                              or
                                                              federated
                                                              form. find
                                                              the optimal
                                                              solution
                                                              among SQL
                                                              vs. graph
                                                              vs. hybrid
                                                              Data Layer
                                                              approach

  Item2.2                             **IBBT**,   pending     a policy
  Define a                            others                  framework
  Context                                                     to regulate
  Data                                                        access to
  Privacy                                                     context
  Policy                                                      data based
                                                              on the
                                                              identity,
                                                              nature or
                                                              purpose of
                                                              every
                                                              entity that
                                                              wants to
                                                              access the
                                                              data

  Item2.3                             **AMBIESENS pending     identify
  APIs for                            E**,                    the
  Context                             ALL                     (existing)
  Data                                PARTNERS                APIs
  Acquisition                                                 provided by
  and Access                                                  other areas
                                                              to acquire
                                                              context
                                                              data and
                                                              define the
                                                              APIs to
                                                              allow
                                                              access to
                                                              the stored
                                                              context
                                                              information

  **Item3:    \#xxx                                           specific
  Context                                                     context
  Functions**                                                 driven
                                                              functionali
                                                              ty
                                                              based on
                                                              reasoning
                                                              upon
                                                              context
                                                              data

  Item3.1                             **IBBT**,   pending     infering
  Estimating                          NTUA,                   the social
  Social                              others                  proximity
  Proximity                                                   level of
                                                              any two
                                                              entities in
                                                              the webinos
                                                              context
                                                              graph
                                                              ...QUESTION
                                                              :
                                                              can we do
                                                              that for
                                                              any two
                                                              entities???

  Item3.2     [\#142](htt             **VOLANTIS* pending     i.e.
  Context     p://dev.web             *                       Multimedia
  Driven      inos.org/re             , IBBT                  adaptation,
  Adaptations dmine/issue                                     Application
              s/142 "Cont                                     layout
              ext Awarene                                     adaptation
              ss and Adap                                     (e.g.
              tation (Clo                                     mobile vs.
              sed)")                                          tablet
                                                              screen),
                                                              Application
                                                              /service
                                                              logic
                                                              adaptation
                                                              (e.g. home
                                                              vs. office
                                                              context)
  ----------- ----------- ----------- ----------- ----------- -----------

Envisaged Early Prototypes[¶](#Envisaged-Early-Prototypes)
----------------------------------------------------------

TBD

Requirements Relating to the Work in this Area[¶](#Requirements-Relating-to-the-Work-in-this-Area)
--------------------------------------------------------------------------------------------------

**Requirement ID**

**Description**

**Category**

DA-DEV-NTUA-001

Webinos SHALL provide the means to Applications to discover the status
of a device.

Context Detection

DA-DEV-NTUA-002

Webinos SHALL provide the means to Applications to identify an event
occurring in a device.

Context Detection

DA-DEV-NTUA-003

Webinos SHALL provide the means to Applications to be capable of
discovering other devices based on a piece of contextual information.

Context-Driven Device Discovery

DA-DWP-NTUA-004

Webinos SHALL be able to calculate the social proximity of webinos
Devices.

Context Reasoning

DA-DWP-NTUA-005

Webinos SHALL be able to calculate the social proximity of webinos
Users.

Context Reasoning

DA-DEV-ambiesense-040

It MUST be possible for applications to share context information across
devices, so that for instance social context can be updated when friends
enter/ leave the same situation.

Context Distribution

DA-DEV-ambiesense-041

It MUST be possible to correlate context changes to events automatically
trigger events across applications and devices based on a change in the
context information.

Context Reasoning

DA-DEV-ambiesense-044

It MUST be possible for an application to store and retrieve context
information related to both present and upcoming situations

Context storage

DA-DEV-ambiesense-045

It MUST be possible for an application developer to use device and user
context as means to adapt the delivery and presentation of content.

Context-Driven Content Adaptation

DA-DEV-ambiesense-047

It MUST be possible to use context information related to pushed content
to trigger the installation of the correct application in case the
application is not yet installed on the device that is receiving the
pushed content.

Context-Driven App Installation

DA-DEV-ambiesense-048

It SHOULD be possible to share application context across device types,
so that the user can continue the session on another device.

Context Distribution

DA-DEV-ambiesense-050

It SHALL be possible for any application to scan for, discover, address,
and maintain connections to wireless networks and devices in the
environment -- including for Bluetooth, Wifi, Near Field Communication,
and 3G.

*not pertinent?*

NM-DWP-NTUA-001

The Webinos Runtime MUST be able to set priorities on messages of
predefined notification categories, based on the current contextual
information of the device

Context Reasoning

NM-DEV-NTUA/Ambiesense-002

The application Developer SHALL be able to subscribe his application to
specific contextual changes of a webinos device.

Context Acquisition

NM-DEV-NTUA-003

The User MUST be able to confirm the contextual information an
application can subscribe to

Context Access Control

PS-USR-Oxford-111

The Webinos Runtime Environment SHALL make explicit what contextual and
personal information is shared by applications and the runtime and allow
users to prevent it from happening

Context Access Control

PS-DEV-Oxford-28

The Webinos Runtime SHALL provide access control for context structures
with user-defined policies

Context Access Control

PS-USR-IBBT-005

The Webinos system SHOULD store associations between device, user and
context information securely and provide this information based on user
preferences

Context Access Control

PS-DEV-ambiesense-14

Privacy policies change according to applications and external
circumstances and SHOULD be context-enabled.

Context Reasoning

PS-DEV-ambiesense-15

It MUST be possible to define context information as public, shared, or
private.

Context Access Control

NC-DEV-POLITO-002

An application MUST be able to retrieve device features.

Context Acquisition

CAP-DEV-SEMC-012

Webinos SHALL provide means for applications to access device system
information including; Connectivity status, Power information, CPU load,
System temperature, Audio and video codecs capabilities, Memory status,
Output devices (display etc) characteristics, Output devices (touch
screen, keyboard etc) characteristics

Context Acquisition

CAP-DEV-SEMC-013

Webinos SHALL provide means for applications to access device system
information including; Device Identity, Installed applications, Running
applications, Active (on display) applications, Connected devices
status, Connection history

Context Acquisition

TMS-DWP-NTUA-001

The System MUST be capable to identify, store, retrieve and communicate
contextual information for an Application executing on the User’s
devices.

Context Management

TMS-DWP-NTUA-002

A webinos runtime MUST be able to identify and store contextual
information for the specific the Device.

Context Detection/Representation & Storage

TMS-DWP-NTUA-003

A webinos runtime MUST be able to identify and store contextual
information for the present situation within which an Application is
executed.

Context Detection/Representation & Storage

TMS-DWP-NTUA-005

An Application SHALL be able to ask the system for contextual
information for the present situation within which the Application is
executed.

Context Acquisition

TMS-DWP-NTUA-006

An Application SHALL be able to ask the system for contextual
information for the target device where the application is (or will be)
executed.

Context Acquisition

TMS-DWP-NTUA-007

A webinos runtime MUST be able to identify and store (under a universal
social data format) contextual information on activities that create a
relationship/connection among different entities (i.e. device with
another device, application with another application).

Context Detection/Representation & Storage

NC-DEV-IBBT-005

The Webinos platform SHOULD support device independent authoring of
applications.

*not pertinent?*

NC-DEV-IBBT-003

The Webinos platform SHOULD provide standard UI widgets.

Content Adaptation\_

NC-DWP-IBBT-004

The Webinos runtime SHOULD provide a service that composes an optimized
interface layout based on the application's UI widgets and definition.

Context-Driven Content Adaptation

CAP-DEV-ambiesense-053

An application SHALL be able to provide user interface components with
the native look and feel standard for the device, and also with the W3C
look and feel inherited from the HTML web standards.

Content Adaptation

NC-DEV-IBBT-002

The Webinos platform MUST support the integration of external content
adaptation services into the platform.

Content Adaptation

NC-DWP-IBBT-006

The Webinos platform SHOULD provide services that can transform file
formats.

Content Adaptation

DA-DEV-ambiesense-045

It MUST be possible for an application developer to use device and user
context as means to adapt the delivery and presentation of content.

Context-Driven Content Adaptation

NC-DEV-IBBT-001

The Webinos platform MUST allow applications to access data describing
the user, device and application.

Context Acquisition

NC-DEV-IBBT-007

An application SHOULD be able to check device compatibility with certain
file formats.

Context Reasoning

State of the Art Analysis[¶](#State-of-the-Art-Analysis)
--------------------------------------------------------

### I. Introduction[¶](#I-Introduction)

This sections addresses collectively the (relevant) underlying state of
the art to enable context awareness and context driven adaptations
within webinos. The state of the art analysis is broken down along the
following axises:

-   EU research projects that deliver relevant
    specifications/prototypes.
-   Existing and emerging standards that can enable context awareness
    and adaptations functionality
-   Underlying technologies
-   Academic research and prototypes coming either within or outside of
    the consortium
-   Relevant Literature

### II. Relevant Projects[¶](#II-Relevant-Projects)

  -------------- -------------- -------------- -------------- --------------
  \#             **Title**      **Short        **URL and      **Relevance to
                                Description**  relevant       webinos**
                                               (direct)       
                                               Links**        

  01             NoTube         The project    <http://notube The project
                                aims to        .tv>           encompasses an
                                develop a                     interesting
                                flexible                      set of
                                end-to-end                    technologies
                                technical                     for Context
                                architecture,                 Aware
                                through                       Computing\
                                innovative use                - alignment of
                                of open Web                   existing
                                standards and                 vocabularies
                                semantics, for                and thesauri,
                                the                           interoperabili
                                personalised                  ty
                                creation,                     of content
                                distribution                  metadata, user
                                and                           profiling,
                                consumption of                content
                                TV content.                   filtering and
                                                              recommendation
                                                              s,
                                                              metadata
                                                              enrichment,
                                                              reasoning on
                                                              Linked Data,
                                                              and automatic
                                                              adaptation to
                                                              context and
                                                              devices,
                                                              ranging from
                                                              large flat
                                                              screen TVs to
                                                              small mobile
                                                              phones.\
                                                              - connecting
                                                              passive user
                                                              activities
                                                              related to the
                                                              TV (such as
                                                              watching a
                                                              specific
                                                              programme)
                                                              with dynamic
                                                              user
                                                              activities
                                                              taking place
                                                              in the Social
                                                              Web, such as
                                                              the rating,
                                                              tagging, and
                                                              sharing of TV
                                                              programmes. As
                                                              such, the
                                                              project is
                                                              investigating
                                                              ways of
                                                              re-using and
                                                              integrating
                                                              Social Web
                                                              data with the
                                                              TV experience.

  02             C-Cast         The project's  <http://www.ic The project
                                main objective t-ccast.eu>    has produced a
                                is to evolve                  set of
                                mobile                        interesting
                                multimedia                    reports that
                                multicasting                  (due to the
                                to exploit the                projects
                                increasing                    relevant focus
                                integration of                on mobile
                                mobile devices                devices) could
                                with the                      provide
                                physical world                insight in
                                and                           framing the
                                environment.                  webinos
                                The project                   context
                                research                      awareness and
                                focuses on two                adaptations
                                main                          architecture,
                                competence                    in particular
                                areas:                        the report
                                creation of                   cover the
                                context                       following
                                awareness and                 aspect\
                                multicasting                  -
                                technologies.                 Categorization
                                                              and analysis
                                                              on issues
                                                              pertaining to
                                                              Context
                                                              Awareness
                                                              (management,
                                                              representation
                                                              ,
                                                              acquisition,
                                                              distribution,
                                                              reasoning).\
                                                              - Definition
                                                              of a number of
                                                              reference
                                                              architectures
                                                              at several
                                                              levels of
                                                              detailes.

  03             I2Web (FP7)    The Future     <http://i2web. - This project
                                Internet       eu/>           will explore
                                Community that                the following
                                will be more                  Web domains:
                                mainstream in                 desktop,
                                people's                      mobile/ubiquit
                                lives, may                    ous,
                                further                       IPTV/iTV.\
                                isolate                       - Aims at
                                excluded                      developing
                                groups. I2Web                 user models
                                will provide                  and extending
                                tools to                      existing
                                develop                       device
                                inclusive                     models.\
                                Future                        - Story
                                Internet                      WOS-US-9.1:
                                services that                 Learning
                                will overcome                 assistance for
                                this widening                 disabled
                                divide. To                    students.\
                                enable the                    - Context of
                                Future                        Use (T2.7):
                                Internet to be                Distance
                                very                          learning
                                extensively                   program task.
                                used by people                Cfr.
                                with                          <http://dev.we
                                disabilities                  binos.org/redm
                                and the                       ine/projects/w
                                elderly, the                  p2-7/wiki/Dist
                                inclusiveness                 ance-learning-
                                of its service                program_Task_>
                                front-ends                    
                                will be of                    
                                paramount                     
                                importance.                   
                                I2Web                         
                                particularly                  
                                responds to                   
                                immediate                     
                                challenges of                 
                                the Future                    
                                Internet:                     
                                ubiquitous and                
                                mobile Web,                   
                                media                         
                                convergence                   
                                and                           
                                user-generated                
                                content, in                   
                                combination                   
                                with cloud                    
                                computing, Web                
                                2.0                           
                                developments,                 
                                Social                        
                                Networking,                   
                                User-Centred                  
                                Design and                    
                                Inclusive                     
                                Design                        
                                principles.                   

  04             MUSIC (FP6)    MUSIC project  <http://www.is - Defines
                                aims at        t-music.eu/>   context models
                                developing a                  and context
                                comprehensive                 query
                                open-source                   language\
                                software                      - Plugin-based
                                development                   context-awaren
                                framework that                ess
                                facilitates                   architecture\
                                the                           - Support
                                development of                self-adapting
                                self-adapting,                applications
                                reconfigurable                in ubiquitous
                                software that                 environments
                                seamlessly                    
                                adapts to the                 
                                highly dynamic                
                                user and                      
                                execution                     
                                context, and                  
                                maintains a                   
                                high level                    
                                usefulness                    
                                across context                
                                changes.                      

  05             AUTOI          AutoI has an   <http://ist-au A big
                                overall        toi.eu/autoi/> challenge has
                                objective of:                 been the
                                "Creation of a                development of
                                management                    a context
                                resource                      aware
                                overlay with                  infrastructure
                                autonomic                     for
                                characteristic                aggregation,
                                s                             refinement and
                                for the                       dissemination
                                purposes of                   in support of
                                easy, fast and                network
                                guaranteed                    bootstrapping,
                                service                       self-managemen
                                delivery."\                   t,
                                Given this                    service
                                objective,                    overlay, and
                                AutoI will                    the use of
                                design and                    network
                                develop, based                context
                                on                            information
                                well-defined                  for
                                methodologies,                self-adaptatio
                                an open                       n
                                software                      in the
                                infrastructure                provision of
                                and tools that                context-aware
                                enables the                   services.
                                composition of                These
                                better (fast                  capabilities
                                and                           will be
                                guaranteed)                   extended to
                                services in an                consider
                                efficient                     interaction
                                manner and the                with the
                                execution of                  service layer
                                these services                and to
                                in an adaptive                integrate
                                (Autonomic                    convergence of
                                form) way.                    network
                                                              infrastructure
                                                              s
                                                              as a research
                                                              task into the
                                                              AutoI project.

  06             TANGO          Many everyday  <http://spitsw Development of
                                actions take   ww.uvt.nl/tang an exact
                                place in a     o/index.html>  mathematical
                                social context                theory of
                                and affective                 emotional
                                information                   communicative
                                forms an                      behaviour.
                                important                     Based on such
                                channel of                    a theory
                                social                        combined with
                                communication.                advanced
                                The goal of                   methods from
                                the TANGO                     computer
                                project is to                 vision and
                                take these two                computer
                                familiar ideas                graphics
                                one radical                   emotional
                                step further                  interactions
                                by focussing                  can be studied
                                on the                        quantitatively
                                essential                     in detail and
                                interactive                   can be
                                nature of                     transferred in
                                social                        technical
                                communication,                systems that
                                in the domain                 simulate
                                of non verbal                 believable
                                communication                 emotional
                                based entirely                interactive
                                on facial and                 behaviour.
                                bodily                        Based on the
                                expression.                   obtained
                                                              experimental
                                                              results and
                                                              mathematical
                                                              new generation
                                                              of technical
                                                              devices
                                                              establishing
                                                              emotional
                                                              communication
                                                              between humans
                                                              and machines
                                                              will be
                                                              developed.

  07             SIEMPRE        The goal of    <http://www.in The expected
                                the SIEMPRE    fomus.org/siem results of the
                                project is to  pre/index.php/ project are:\
                                develop novel  >              -Models and
                                research                      techniques for
                                theoretical                   the measure of
                                and                           entrainment,
                                methodological                contagion,
                                frameworks,                   co-creation\
                                computational                 -Proof-of-conc
                                models, and                   epts
                                algorithms for                demonstrating
                                the analysis                  the potential
                                of creative                   of the
                                communication                 research
                                within groups                 output in
                                of people.\                   future ICT
                                Research in                   (e.g.,
                                SIEMPRE is                    “embodied”
                                focused on                    social media,
                                ensemble                      Web 2.0,
                                musical                       future
                                performance                   user-centric
                                and audience                  media)\
                                experience, an                Both of them
                                ideal test-bed                can provide
                                for the                       insight in
                                development of                framing the
                                models and                    webinos
                                techniques for                context
                                measuring                     awareness
                                creative                      
                                social                        
                                interaction in                
                                an                            
                                ecologically                  
                                valid                         
                                framework.                    

  08             OMP            OpenMediaPlatf                The project
                                orm                           will produce a
                                (OMP) aims to                 resource-aware
                                define an open                system
                                service                       specification
                                infrastructure                and design
                                for media-rich                tool.
                                end-user                      
                                devices that                  
                                will address                  
                                software                      
                                productivity                  
                                and optimal                   
                                service                       
                                delivery                      
                                challenges.                   

  09             LIQUIDPUBLICAT This project                  
                 ION            explores how                  
                                ICT and the                   
                                lessons                       
                                learned from                  
                                the social Web                
                                can be applied                
                                to provide a                  
                                radical                       
                                paradigm shift                
                                in the way                    
                                scientific                    
                                knowledge is                  
                                created,                      
                                evaluated, and                
                                maintained.                   

  10             CHOReOS        CHOReOS will   <http://www.ch CHOReOS will
                                implement a    oreos.eu/bin/M deliver
                                framework for  ain/>          formally
                                scalable                      grounded
                                choreography                  abstractions
                                development.                  and models,
                                The goal is to                dynamic
                                enable domain                 choreography-c
                                experts to                    entric
                                develop                       development
                                decentralized                 processes,
                                ultra-large                   governance and
                                scale (ULS)                   service-orient
                                solutions                     ed
                                composed of                   middleware
                                heterogeneous                 manipulated
                                services that                 via an
                                are adaptable                 Integrated
                                and QoS                       Development
                                (Quality-of-Se                Runtime
                                rvice)                        Environment
                                aware.                        (IDRE) aimed
                                                              at overcoming
                                                              the ULS impact
                                                              on software
                                                              system
                                                              development.

  11             PERSIST        The vision of  <http://www.ic This project
                                PERSIST is of  t-persist.eu/> will develop
                                a Personal                    Personal Smart
                                Smart Space,                  Spaces that
                                which is                      provide a
                                associated                    minimum set of
                                with the                      functionalitie
                                portable                      s
                                devices                       which can be
                                carried by the                extended and
                                user and which                enhanced as
                                moves around                  users
                                with him/her,                 encounter
                                providing                     other smart
                                context-aware                 spaces during
                                pervasiveness                 their everyday
                                to the user at                activities.
                                all times and                 They will be
                                places. The                   capable of
                                Personal Smart                learning and
                                Space will                    reasoning
                                cater for the                 about users,
                                needs of                      their
                                users,                        intentions,
                                adapting to                   preferences
                                their                         and context.
                                preferences                   They will be
                                and learning                  endowed with
                                new ones as                   pro-active
                                these arise.                  behaviours,
                                                              which enable
                                                              them to share
                                                              context
                                                              information
                                                              with
                                                              neighbouring
                                                              Personal Smart
                                                              Spaces,
                                                              resolve
                                                              conflicts
                                                              between the
                                                              preferences of
                                                              multiple
                                                              users, make
                                                              recommendation
                                                              s
                                                              and act upon
                                                              them,
                                                              prioritise,
                                                              share and
                                                              balance
                                                              limited
                                                              resources
                                                              between users,
                                                              services and
                                                              devices,
                                                              reason about
                                                              trustworthines
                                                              s
                                                              to protect
                                                              privacy and be
                                                              sufficiently
                                                              fault-tolerant
                                                              to guarantee
                                                              their own
                                                              robustness and
                                                              dependability.

  12             EBBITS         The ebbits     <http://www.eb The ebbits
                                project        bits-project.e platform will
                                (Enabling      u>             support
                                business-based                interoperable
                                Internet of                   business
                                Things and                    applications
                                Services) does                with
                                research in                   context-aware
                                architecture,                 processing of
                                technologies                  data separated
                                and processes,                in time and
                                which allow                   space,
                                businesses to                 information
                                semantically                  and real-world
                                integrate the                 events
                                Internet of                   (addressing
                                Things into                   tags, sensor
                                mainstream                    and actuators
                                enterprise                    as services),
                                systems and                   people and
                                support                       workflows
                                interoperable                 (operator and
                                real-world,                   maintenance
                                on-line                       crews),
                                end-to-end                    optimisation
                                business                      using high
                                applications.                 level business
                                                              rules (energy
                                                              and cost
                                                              performance
                                                              criteria),
                                                              end-to-end
                                                              business
                                                              processes
                                                              (traceability,
                                                              life-cycle
                                                              management),
                                                              or
                                                              comprehensive
                                                              consumer
                                                              demands
                                                              (product
                                                              authentication
                                                              ,
                                                              trustworthy
                                                              information,
                                                              and knowledge
                                                              sharing).

  13             SERENOA        Serenoa is                    This project
                                aimed at                      will have as
                                developing a                  an outcome
                                novel, open                   reference
                                platform for                  models,
                                enabling the                  languages and
                                creation of                   a methodology
                                context-sensit                which will
                                ive                           enable the
                                service                       rapid
                                front-ends                    prototyping
                                (SFEs). A                     and
                                context-sensit                engineering of
                                ive                           context-sensit
                                SFE provides a                ive
                                user interface                SFEs
                                (UI) that                     
                                exhibits some                 
                                capability to                 
                                be aware of                   
                                the context                   
                                and to react                  
                                to changes of                 
                                this context                  
                                in a                          
                                continuous                    
                                way. As a                     
                                result such a                 
                                UI will be                    
                                adapted to a                  
                                person s                      
                                devices,                      
                                tasks,                        
                                preferences,                  
                                and abilities,                
                                thus improving                
                                people s                      
                                satisfaction                  
                                and                           
                                performance                   
                                compared to                   
                                traditional                   
                                SFEs based on                 
                                manually                      
                                designed UIs.                 

  14             ALLOW          The core       <http://www.al This project
                                objective of   low-project.eu perceives the
                                the project is />             flow as a
                                to develop a                  programming
                                new                           paradigm that
                                programming                   is ideally
                                paradigm for                  suited for
                                human-oriented                adaptable
                                pervasive                     pervasive
                                applications.                 applications.T
                                This paradigm                 he
                                will enable                   flow can be
                                pervasive                     dynamically
                                technical                     adapted to a
                                systems to                    changing
                                adapt                         context based
                                automatically                 on the flow’s
                                and seamlessly                plan, goals,
                                to humans                     and
                                involved and                  constraints.
                                embedded in                   The plan can
                                them,                         be modified at
                                explicitly                    run-time to
                                supporting                    adapt to a new
                                people in                     context, or
                                achieving                     re-planning
                                well-defined                  can even take
                                goals in                      place
                                dynamically                   proactively by
                                changing                      taking into
                                environments                  account the
                                and contexts.                 future
                                                              behavior of
                                                              the
                                                              application
                                                              coded in the
                                                              flow’s plan.

  15             ACTIVE         ACTIVE aims to <http://www.ac This project
                                increase the   tive-project.e will have as
                                productivity   u/>            outcome the
                                of knowledge                  generation of
                                workers in a                  user-specific
                                pro-active,                   contexts by
                                contextualised                exploiting
                                ,                             tagging
                                yet easy and                  information or
                                unobtrusive                   observing user
                                way. The aim                  behaviour, and
                                is to convert                 the dynamic
                                tacit and                     adaptation of
                                unshared                      these contexts
                                knowledge –                   to changing
                                the "hidden                   user needs
                                intelligence"                 
                                of enterprises                
                                – into                        
                                transferable,                 
                                interoperable                 
                                and actionable                
                                knowledge to                  
                                support                       
                                seamless                      
                                collaboration                 
                                and to enable                 
                                problem                       
                                solving.                      

  16             MyeDirector201 The main goal  <http://www.my My-e-Director
                 2              of My          edirector2012. will built a
                                eDirector      eu>            prototype
                                2012, is to                   context-aware
                                research and                  broadcasting
                                develop a                     platform,
                                unique                        offering
                                interactive                   personalized
                                broadcasting                  streaming
                                service                       experiences to
                                enabling                      individual
                                end-users to                  users or whole
                                select focal                  user
                                actors and                    communities.
                                points of                     The
                                interest                      personalized
                                within                        selection and
                                real-time                     assembly of
                                broadcasted                   the target
                                scenes. The                   streams will
                                service will                  be based on a
                                resemble an                   context-aware
                                automated                     multi-camera
                                ambient                       selection
                                intelligent                   algorithm.The
                                director that                 latter will be
                                will operate                  implemented
                                with minimal                  according to
                                or even                       context
                                without human                 information,
                                intervention.                 which will be
                                                              derived by a
                                                              number of
                                                              underlying
                                                              pervasive and
                                                              perceptual
                                                              technologies
                                                              for
                                                              context-acquis
                                                              ition.

  17             mCuidad        M:CIUDAD's     <http://www.mc The project
                                primary goal   iudad-fp7.org> has produced
                                is to set up                  reports that
                                the basis for                 could provide
                                the                           usefull
                                engineering of                insight in the
                                a complete new                webinos
                                service                       context
                                infrastructure                awareness and
                                ,                             adaptations
                                a metropolis                  architecture,
                                of truly                      in particular
                                ubiquitous                    the report
                                services with                 cover the
                                the 'mobile as                following
                                a service                     aspect:
                                platform', the                Context-aware
                                'user adds                    recommendation
                                value'                        s
                                paradigm and                  on mobile
                                'the very long                services: the
                                tail' business                m:Ciudad
                                model as its                  approach
                                three main                    
                                pillars.                      

  18             OCEAN          OCEAN aims to  <http://www.ic OCEAN will
                                find solutions t-ocean.eu/>   design a new
                                to the                        open content
                                imminent                      delivery
                                problem of                    framework that
                                multimedia                    optimizes the
                                content                       overall
                                traffic                       quality of
                                clogging up                   experience to
                                the future                    end-users by
                                aggregation                   caching
                                networks, when                content closer
                                the offering                  to the user
                                of online                     than
                                video of high                 traditional
                                quality over                  CDNs do and by
                                the Open                      deploying
                                Internet                      network-contro
                                continues to                  lled,
                                increase.                     scalable and
                                                              adaptive
                                                              content
                                                              delivery
                                                              techniques.

  19             Serenoa (FP7)  This FP7       <http://sereno -
                                project is     a.morfeo-proje Automatically
                                aimed at       ct.org/>       adapted user
                                developing a                  interfaces
                                novel, open                   based on a
                                platform for                  rich
                                enabling the                  contextual
                                creation of                   description
                                context-sensit                (i.e. device,
                                ive                           preferences,
                                service                       user's
                                front-ends                    abilities,
                                (SFEs). A                     environment,
                                context-sensit                etc.).\
                                ive                           - Adaptability
                                SFE provides a                in ubiquitous
                                user interface                computing
                                that exhibits                 environments.
                                some                          Deal with
                                capability to                 multiple
                                be aware of                   devices,
                                the context                   interaction
                                and to react                  methods and
                                to changes of                 modalities.\
                                this context                  - Development
                                in a                          of concepts,
                                continuous                    languages,
                                way. As a                     runtimes and
                                result such a                 tools needed
                                UI will be                    to support
                                adapted to a                  multi-dimensio
                                person's                      nal
                                devices,                      context-aware
                                tasks,                        adaptation
                                preferences,                  services.
                                and abilities,                
                                thus improving                
                                people's                      
                                satisfaction                  
                                and                           
                                performance                   
                                compared to                   
                                traditional                   
                                SFEs based on                 
                                manually                      
                                designed UIs.                 

  20             DIVA (FP7)     Context-aware  <http://www.di - Provide
                                software       va-project.eu/ build-time and
                                systems able   >              run-time
                                to adapt                      management of
                                automatically                 adaptive
                                to changes in                 system
                                their                         (re)configurat
                                environment                   ion.\
                                are playing an                - Efficient
                                increasingly                  handling of
                                vital role in                 number of
                                society's                     potential
                                infrastructure                devices and
                                s.                            configurations
                                The goal of                   .
                                DIVA is to                    
                                provide a new                 
                                tool-supported                
                                methodology                   
                                with an                       
                                integrated                    
                                framework for                 
                                managing                      
                                dynamic                       
                                variability in                
                                adaptive                      
                                systems. This                 
                                goal will be                  
                                addressed by                  
                                combining                     
                                aspect-oriente                
                                d                             
                                and                           
                                model-driven                  
                                techniques in                 
                                an innovative                 
                                way.                          

  21             OPEN (FP7)     The objective  <http://www.ic - Address
                                of OPEN is to  t-open.eu/>    challenges
                                provide users                 related to
                                with migratory                device
                                interactive                   changes, state
                                services,                     persistence
                                which enable                  and content
                                users to                      adaptation.
                                change                        
                                interaction                   
                                platform while                
                                continuing                    
                                their tasks                   
                                through an                    
                                interface                     
                                adapted to the                
                                new context in                
                                which it will                 
                                be used.                      

  22             WeKnowIt       WeKnowIt is an <http://www.we WeKnowIt:\
                                Integrated     knowit.eu/>    -will try to
                                Project                       automate the
                                developing                    content
                                novel                         annotation
                                techniques for                processing\
                                exploiting                    -will also
                                multiple                      exploit and
                                layers of                     analyze all
                                intelligence                  available
                                from                          information
                                user-generated                related to
                                content, which                user submitted
                                together                      content by
                                constitute                    researching
                                Collective                    novel methods
                                Intelligence,                 for content
                                a form of                     processing and
                                intelligence                  analysis,
                                that emerges                  analyse mass
                                from the                      user feedback
                                collaboration                 and social
                                and                           interactions
                                contributions                 
                                of many                       
                                individuals.                  

  23             ALICE          ALICE aims at                 The project
                                building an                   will deliver
                                innovative                    an enviroment
                                adaptive                      which will be
                                environment                   interactive,
                                for e-learning                challenging
                                combining                     and context
                                personalizatio                aware while
                                n,                            enabling
                                collaboration                 learners
                                and simulation                demand of
                                aspects within                empowerment,
                                an                            social
                                affective/emot                identity, and
                                ional                         authentic
                                based approach                learning
                                able to                       experience
                                contribute to                 
                                the overcoming                
                                of the quoted                 
                                limitations of                
                                current                       
                                e-learning                    
                                systems and                   
                                content.                      

  24             IPAC           The IPAC       <http://ipac.d \
                                (Integrated    i.uoa.gr/>     -The IPAC
                                Platform for                  nodes will
                                Autonomic                     operate in a
                                Computing)                    collaborative
                                proposal aims                 fashion in
                                at delivering                 order to
                                a middleware                  diffuse
                                and service                   contextual
                                creation                      information
                                environment                   and broader
                                for developing                knowledge in
                                embedded,                     their
                                intelligent,                  environment.\
                                collaborative,                -IPAC will
                                context-aware                 integrate
                                services in                   techniques and
                                mobile nodes.                 algorithms for
                                                              energy-efficie
                                                              nt,
                                                              autonomic node
                                                              behaviour,
                                                              advanced
                                                              context
                                                              awareness,
                                                              embedded
                                                              service/applic
                                                              ation
                                                              modelling and
                                                              efficient
                                                              information
                                                              dissemination.

  25             OPPORTUNITY    The objective  <http://www.op OPPORTUNITY
                                of this        portunity-proj will develop a
                                project is to  ect.eu/>       novel paradigm
                                develop mobile                for context
                                systems to                    and activity
                                recognize                     recognition
                                human activity                that will
                                and user                      remove the
                                context with                  up-to-now
                                dynamically                   static
                                varying sensor                constraints
                                setups, using                 placed on
                                goal oriented,                sensor
                                cooperative                   availability,
                                sensing                       placement and
                                                              characteristic
                                                              s

  26             MADAM          The overall    <http://www.in The S/T
                                objective of   termedia.uio.n objectives
                                MADAM is to    o/display/mada were: To
                                provide        m/Project+Summ develop and
                                software       ary>           assess an open
                                engineers with                framework for
                                suitable means                the management
                                to develop                    of dynamic
                                mobile                        adaptivity.
                                adaptive                      The project
                                applications.                 approach was
                                The project                   based on the
                                investigated                  following
                                the idea that                 corner stones:
                                adaptivity can                (1) Context
                                be supported                  monitoring and
                                by generic                    decision
                                solutions in                  making managed
                                the form of                   by generic
                                extensions to                 middleware
                                methods,                      components;
                                languages,                    (2)
                                middleware and                Component-base
                                tools.                        d
                                                              architectures
                                                              and reflection
                                                              for dynamic
                                                              reconfiguratio
                                                              n
                                                              of the
                                                              application
                                                              (See MADAM
                                                              Deliverable
                                                              2.1 for UML
                                                              diagrams of
                                                              context
                                                              storage etc.)
  -------------- -------------- -------------- -------------- --------------

### III. Standards[¶](#III-Standards)

  ---- ----------- --------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  \#   **Title**   **Short Description**                                                                                           **URL and relevant Direct Links**                                     **Relevance to webinos**
  01   IDEAL2      IDEAL2 specifies a modular and extensible language for the description of device-independent user interfaces.   <https://files.morfeo-project.org/mymobileweb/public/specs/ideal2/>   - The IDEAL2 language is similar to XHTML, but claimed to be more powerful and higher level, allowing for describing user interfaces in an abstract manner, i.e. without commitment on how such a UI will be finally rendered.
  ---- ----------- --------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### IV. Academic research & Literature[¶](#IV-Academic-research-38-Literature)

#### Capability-driven Progressive Enhancement[¶](#Capability-driven-Progressive-Enhancement)

Web systems are traditionally engineered along three orthogonal
dimensions: the development phases, the system's views, and its aspects
(Schauerhuber. A. et al. 2002). The phase dimension sets out the
different stages of web development, ranging from analysis to
implementation. Each of these phases requires a number of specific views
addressing the system’s content, its navigation structure, and the
presentation. Finally, the aspects dimension defines the structural and
behavioral aspects of each of the views.

![](http://www.wafl.ugent.be/webinos/dimensions.png)

The increasing importance of ubiquitous application development
emphasizes the need for fragmentation management. This concern has to be
handled throughout every stage of the application’s development life
cycle. As proposed by Kappel et al. 2002, adaptability can be considered
as an additional web engineering dimension, crosscutting all other web
modeling dimensions (cf. Figure 1). A straightforward incorporation of
adaptability remains an important challenge (Koch. N. et al. 2008). The
remainder of this section will describe how adaptability can be
integrated in the development process of ubiquitous web applications by
use of fine-grained progressive enhancement.

Since the early days of web engineering, developers have been trying to
cope with the differences between browsers due to bugs and quirks.
Graceful degradation is a widespread design strategy that focuses on
providing optimal support for the most advanced browsers. Less capable
browsers are only considered during the last development phase. This
often results in a poor stripped-down version. The graceful degradation
approach expects users to just upgrade their browser when the degraded
version does not fit their needs. However, for most devices upgrading
the default browser is not an option.

![](http://www.wafl.ugent.be/webinos/PE.png)

Progressive enhancement reverses the graceful degradation approach and
aims at maximizing accessibility over browsers with different
capabilities (Wells. J. et al. 2007). Progressive enhancement tries to
achieve this goal by forcing developers to take the less capable devices
into account from the very start of the development process. First, a
basic markup document is created, providing an optimal experience for
devices with the lowest common denominator (LCD) of available
capabilities. Incrementally and unobtrusively, one or more layers of
structural, presentational, and behavioral enhancements are added in
function of the browser's particular capabilities (cf. Figure 2).

The progressive enhancement philosophy can be used in a ubiquitous
context to tackle fragmentation related issues. However, when turning
the theoretical approach into actual practice, a number of important
limitations come into play. Today, the use of externally linked
resources (e.g. CSS, or JavaScript files) is the most common approach
for the selection of enhancement layers. This limits the number of
detectable variability points, because browsers will only check for
coarse-grained styling and client-side scripting support. Compared to
desktop browsers, the mobile ecosystem contains far more combinations of
browsers with graded CSS and JavaScript support. To provide optimized
usability, progressive enhancement should also reckon with the different
interaction methods and hardware characteristics offered by devices. For
example, a touch-based device will often require presentational
enhancement layers, providing interfaces with more space to accurately
click buttons, etc.

In order to create a viable ubiquitous progressive enhancement solution,
it has thus become increasingly important to support the use of
fine-grained enhancement layers. As shown in Figure 3, an intelligent
mechanism is needed, supporting the automated creation of progressive
enhancement stacks based on the specific capabilities of a device.

![](http://www.wafl.ugent.be/webinos/CD-PE.png) |

#### A Flexible Content Adaptation System Using a Rule-Based Approach [5][¶](#A-Flexible-Content-Adaptation-System-Using-a-Rule-Based-Approach-5)

In this paper the author proposes a rule-based content adaptation
system. The rule-based approach should provide extensibility and
adaptivity for the content adaptation. The rules are selected based on
the content type being transformed and the client requesting the
transformation. This paper mainly focuses on transforming the table
structure object and uses fuzzy logic to model the adaptation quality
and guide the adaptation decision.

#### A context-aware mobile mashup platform for ubiquitous web [6][¶](#A-context-aware-mobile-mashup-platform-for-ubiquitous-web-6)

The authors propose that applying Web 2.0 and Ubiquitous Web concepts as
guiding principles to design middleware infrastructure may ease the
development and deployment of context-aware systems.

#### Architecture for Multimodal Mobile Applications [7][¶](#Architecture-for-Multimodal-Mobile-Applications-7)

The authors propose an architecture to enable multimodal mobile
applications.\
Accessibility!

#### Graceful Degradation of User Interfaces as a Design Method for Multiplatform Systems [8][¶](#Graceful-Degradation-of-User-Interfaces-as-a-Design-Method-for-Multiplatform-Systems-8)

This paper takes the approach opposite capability-driven progressive
enhancement and proposes, when starting with full-fledged applications,
how to make them degrade gracefully so they remain useful on low-end
devices.

#### Community-Driven Adaptation: Automatic Content Adaptation in Pervasive Environments [9][¶](#Community-Driven-Adaptation-Automatic-Content-Adaptation-in-Pervasive-Environments-9)

The authors propose a content adaptation scheme where the adaptation is
based on feedback from users. CDA groups users in communities based on
common characteristics and assumes that users of the same community have
similar adaptation requirements.

### V. Existing Technologies[¶](#V-Existing-Technologies)

#### MUSIC Middleware[¶](#MUSIC-Middleware)

This context middleware resulted from the MUSIC project (FP6,
<http://www.ist-music.eu>). The middleware is responsible for
collecting, aggregating, managing and sharing contextual information.
Its purpose is to make this data available to context clients. The
context information can be retrieved using hardware or software sensors
on a wide range of devices. MUSIC contains reasonsers which process
rough context data acquired by sensors in order to derive higher-level
context information. The middleware uses a plug-in driven architecture
to optimally support extensibility/modifiability requirements.

![](http://www.wafl.ugent.be/webinos/music.png)

#### W3C example on context driven adaptation[¶](#W3C-example-on-context-driven-adaptation)

The figure below (from <http://www.w3.org/2001/di/IntroToDI.html>) shows
a client accessing a web application. The client and application server
can interact directly, or through one or more proxies. A context-driven
adaptation process can be introduced anywhere in this path:

-   Server: e.g. device independent authoring, semantic enhancement
-   Intermediary: e.g. content transcoding services (Opera Mini,
    Navorra, etc.)
-   Client: e.g. progressive enhancement, javascript feature/preference
    detection

![](http://www.w3.org/2001/di/public/diad/di-arch.png)

#### Android fragments API[¶](#Android-fragments-API)

The fragments library introduces a mechanism that makes it easier for
applications to scale across a variety of screen sizes. It allows
developers to break up their applications into subcomponents called
"fragments". Fragments allow developers to write modular applications
with an adaptable layout the can run properly on both larger screen as
well as smaller screen devices.\
(cf. Figure below from
<http://developer.android.com/guide/topics/fundamentals/fragments.html>).

![](http://ic.tweakimg.net/ext/i/imagenormal/1299249081.png)

#### Volantis Mobile Content Framework[¶](#Volantis-Mobile-Content-Framework)

The framework consists of several components:

-   Multi-Channel Server (MCS). The main component responsible for
    adapting the page to different devices.
-   Media Access Proxy (MAP). The component responsible for converting
    the media files (images, audio, video).
-   Device Repository Web Service (DRWS). The device database which
    holds information about devices and their attributes (+8000 devices
    and +850 attributes).

MCS receives the page description, retrieves the device capabilities
using DRWS, and produces the page version optimized for the current
device. Media files can be converted using the MAP service.

The page description consists of the following parts:

-   Page definition. The page definition is created using the XDIME 2
    (xHTML Device Independent Markup Extension), a format which is
    similar to XHTML 2.
-   Page styles. The page styles are defined in the format similar to
    CSS 2, which is extended in order to allow support for custom
    layouts and images.
-   Page layouts. The page layouts are defined in the XML file. They can
    be defined either for all the page, or only for specific elements of
    the page.
-   Image definitions. As alternative to converting the images using
    MAP, it's possible to provide several image variants and to define
    rules for selecting the optimal image variant.

Page styles, page layouts and image definitions contain sections which
may be defined to be applied only to specific types of devices. The
rules for applying the specific sections are defined using device
attributes. Therefore it is possible to define, for example, that a 3
column layout is to be applied to all the devices which have the screen
width bigger than 600 pixels, while all other devices should use single
column layout. Or that a specific style should be applied to handheld
devices running Symbian S60. Or that gray-scale, low-resolution logo
should be selected when displaying the page on WAP devices.

References[¶](#References)
--------------------------

Kappel, G., Proll, B., Retschitzegger, W., Schwinger, W., 2002, Modeling
ubiquitous web applications: the WUML approach, Conceptual Modeling for
New Information Systems Technologies, pp. 183-197, Springer

Koch, N., Knapp, A., Zhang, G., Baumeister, H., 2008, UML-Based web
engineering. Web engineering: modeling and implementing web
applications, pp.157-191, Springer

Schauerhuber, A., Wimmer, M., Schwinger, W., Kapsammer, E.,
Retschitzegger, W., 2002, Aspect-oriented modeling of ubiquitous web
applications: the aspectwebml approach, Proceedings of IWWOST02
conference

Wells, J., Draganova, C., 2007, Progressive enhancement in the real
World, Proceedings of the eighteenth conference on hypertext and
hypermedia, ACM

[5] He, J., Gao, T., Hao, W., Yen, I., & Bastani, F. (2007). A flexible
content adaptation system using a rule-based approach. IEEE Transactions
on Knowledge and Data Engineering, 19(1), 127.

[6] Lopez-de Ipina, D., Vazquez, J., & Abaitua, J. (2007). A
context-aware mobile mashup platform for ubiquitous web. 3rd IET
International Conference on Intelligent Environments, 116–123.

[7] Englert, R., & Glass, G. (2006). Architecture for multimodal mobile
applications. 20th Symp. on Human Factors in Telecommunication (HFT
2006), Sophia Antipolis, France, ETSI.

[8] Florins, M., & Vanderdonckt, J. (2004). Graceful degradation of user
interfaces as a design method for multiplatform systems. IUI '04:
Proceedings of the 9th international conference on Intelligent user
interfaces.

[9] Mohomed, I., Chin, A., Cai, J., & de Lara, E. (2004).
Community-driven adaptation: Automatic content adaptation in pervasive
environments. Proceedings of the Workshop on Mobile Computing Systems
and Applications (WMCSA’04), 124–133.
doi:http://doi.ieeecomputersociety.org/10.1109/MCSA.2004.10

