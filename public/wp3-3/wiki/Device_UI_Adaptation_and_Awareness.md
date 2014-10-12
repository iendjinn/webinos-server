Device UI Adaptation and Awareness[¶](#Device-UI-Adaptation-and-Awareness)
==========================================================================

[Old support material](Old%20support%20material.html)

Deliverable[¶](#Deliverable)
----------------------------

-   [Introduction](Introduction.html)
-   [State Of The Art](State%20Of%20The%20Art.html)
-   Technical specification
    -   [Static diagrams](Static%20diagrams.html)
    -   [Sequence diagrams](Sequence%20diagrams.html)
    -   [Data + communication
        structures](Data%20+%20communication%20structures.html)
    -   [Platform specified rules](Platform%20specified%20rules.html)

------------------------------------------------------------------------

-   [Device UI Adaptation and
    Awareness](#Device-UI-Adaptation-and-Awareness)
    -   [Deliverable](#Deliverable)
-   [1 Introduction](#1-Introduction)
-   [UI Adaptation - Introduction](#UI-Adaptation-Introduction)
-   [2 State of the Art](#2-State-of-the-Art)
-   [UI Adaptation - State of The Art](#UI-Adaptation-State-of-The-Art)
    -   [Introduction](#Introduction)
    -   [Model-based User Interfaces](#Model-based-User-Interfaces)
        -   [Abstraction Levels and
            Transformations](#Abstraction-Levels-and-Transformations)
        -   [Adaptation Granularity and
            Approaches](#Adaptation-Granularity-and-Approaches)
    -   [Declarative UI Description](#Declarative-UI-Description)
        -   [XUL](#XUL)
    -   [JS-based framework](#JS-based-framework)
        -   [jQueryMobile](#jQueryMobile)
        -   [iUI - User Interface (UI) Framework for WebApp
            development](#iUI-User-Interface-UI-Framework-for-WebApp-development)
        -   [qooxdoo Mobile](#qooxdoo-Mobile)
        -   [Sencha Touch](#Sencha-Touch)
        -   [JQTouch](#JQTouch)
        -   [Joshfire Framework](#Joshfire-Framework)
    -   [Conclusions](#Conclusions)
    -   [References](#References)
-   [3 Technical specification](#3-Technical-specification)
-   [Static diagrams](#Static-diagrams)
-   [Sequence diagrams](#Sequence-diagrams)
    -   [Application launch/bootstrap](#Application-launchbootstrap)
    -   [An event is triggered.](#An-event-is-triggered)
-   [Data & Communication](#Data-38-Communication)
    -   [Enabling the UI adaptation in the application
        manifest](#Enabling-the-UI-adaptation-in-the-application-manifest)
        -   [Example](#Example)
    -   [Rule definition](#Rule-definition)
        -   [Events section](#Events-section)
            -   [Parameters](#Parameters)
            -   [Examples](#Examples)
        -   [ConditionSet section](#ConditionSet-section)
            -   [Parameters](#Parameters)
            -   [examples](#examples)
        -   [Actions section](#Actions-section)
        -   [Comprehensive rule examples](#Comprehensive-rule-examples)
            -   [Event-Condition-Action
                rule](#Event-Condition-Action-rule)
            -   [Condition-Action rule](#Condition-Action-rule)
    -   [References](#References)
-   [Platform specified](#Platform-specified)
    -   [UI-Widget: Navigation bar](#UI-Widget-Navigation-bar)
    -   [UI-Widget: Split view](#UI-Widget-Split-view)
    -   [Font-size increase on the TV](#Font-size-increase-on-the-TV)
-   [UI-Widget: Navigation Bar](#UI-Widget-Navigation-Bar)
    -   -   [UI rules](#UI-rules)
            -   [PC and Tablet](#PC-and-Tablet)
            -   [Smartphone](#Smartphone)
            -   [In-vehicle system](#In-vehicle-system)
            -   [TV system](#TV-system)
        -   [Code example](#Code-example)

-   [UI-Widget: Split View](#UI-Widget-Split-View)
    -   -   [Rendering rules](#Rendering-rules)
            -   [PC and Tablet](#PC-and-Tablet)
            -   [Smartphone](#Smartphone)
            -   [In-vehicle system and TV](#In-vehicle-system-and-TV)
        -   [Code example](#Code-example)

-   [Font-size increase on the
    TV/Vehicle](#Font-size-increase-on-the-TVVehicle)
    -   -   [Rendering rules](#Rendering-rules)
            -   [PC and Tablet](#PC-and-Tablet)
            -   [Smartphone](#Smartphone)
            -   [In-vehicle system and TV.](#In-vehicle-system-and-TV)
        -   [Code example](#Code-example)
    -   [References](#References)

1 Introduction[¶](#1-Introduction)
==================================

UI Adaptation - Introduction[¶](#UI-Adaptation-Introduction)
============================================================

UI adaptation is a process of transforming the UI of an application
according to the device capabilities, which can be:

-   different screen resolutions, as depicted below\
    ![](/redmine/attachments/download/2701)
-   different input methods: keyboard, mouse, tv remote, in-car
    controller knob
-   different output methods: screen, voice
-   different hardware resources (e.g. camera) that need their specific
    UI components

The transformation itself should be based upon a shared code and a set
of rules, meaning it should conform to the "write once, run anywhere"
principle. It would help not only the developers, but also the end-users
to receive an app, that is best suited to the device on which it runs,
providing an equally positive experience. And because you never know
what future will bring, the solution has to be flexible and ready for
extensions.

Since webinos is a cross-platform application delivery environment
across a wide range of devices, UI adaptation is needed.

------------------------------------------------------------------------

2 State of the Art[¶](#2-State-of-the-Art)
==========================================

UI Adaptation - State of The Art[¶](#UI-Adaptation-State-of-The-Art)
====================================================================

Introduction[¶](#Introduction)
------------------------------

Before creating the UI adaptation specification, we performed a state of
the art research to check for existing adaptation methods. At first we
overruled possibility of server-side adaptation, as everything needs to
happen client-side.\
Following approches have been investigated:

-   Additions to HTML tags / JS-based frameworks (e.g. jQuery mobile)
-   User inteface markup languages (XUL)
-   Other approaches (custom JS framework, Joshfire framework)

Next chapters describe the results of the research.

Model-based User Interfaces[¶](#Model-based-User-Interfaces)
------------------------------------------------------------

Recent research on model driven engineering has been particularly active
in the domain of user interface engineering [Desruelle et al. 2011]. The
CAMELEON Reference Framework (CRF) defines an important foundation for
this type of approaches [Calvary et al. 2003]. The framework specifies a
context-sensitive user interface development process, driven by an
intrinsic notion of the current user context, the environment context,
as well as the platform context. According to the CRF approach, an
application's user interface development consists of multiple levels of
abstraction. Starting from an abstract representation of the interface's
task and domain model, a PSM of the user interface is subsequently
generated by means of a chained model transformations based on
contextual knowledge. A number of languages have adopted CRF: UsiXML
[Limbourg et al. 2004], useML [Meixner and Thiels 2008], and MARIA
[Paterno et al. 2009]. Moreover, the World Wide Web Consortium (W3C)
charted the Model-Based UI Working Group (MBUI-WG) as part of its
Ubiquitous Web Activity (UWA) to investigate the standardization of
context-aware user interface authoring [Cantera 2010]. Its goal is to
work on standards that enable the authoring of context-aware user
interfaces for web applications. The MBUI-WG aims to achieve this type
of adaptivity by means of a model driven design approach. In this
context, the semantically structured aspects of HTML5 will be used as
key delivery platform for the applications' adaptive user interface.

### Abstraction Levels and Transformations[¶](#Abstraction-Levels-and-Transformations)

The CAMELEON Reference Framework relies on a model driven approach and
structures the development of a user interface into four subsequent
levels of abstration:

-   Specification of the **task and domain model**, defining a user's
    required activities in order to reach his goals.
-   Definition of an **abstract user interface (AUI) model**. The AUI
    model defines a platform-independent model (PIM), which expresses
    the application's interface independently from any interactors or
    modalities within the delivery context's attributes.
-   Definition of a **concrete user interface (CUI) model**, a
    platform-specific model (PSM) which generates a more concrete
    description of the AUI by including specific dependencies and
    interactor types based on the delivery context.
-   Specification of the **final user interface (FUI)**, covering the
    code that corresponds with the user interface in its runtime
    environment (e.g., HTML, Java, etc.).

Figure 2 shows the interconnections and transformations between the
above-mentioned CRF stages. The downward arrows depict reification
processes. Reification is the transformation from a higher-level
abstraction to a lower-level abstraction phase, hence inferring a more
concrete UI description. The upward arrows, on the other hand, specify
the abstraction processes. An abstraction is the inverse transformation
of reification. The third transformation type is the translation,
depicted by the horizontal arrows. The translation deals with adapting
the UI description to changes in one of the context of use models. In
this case, the UI description's abstraction level remains the same when
performing a translation.

![](http://desruelle.be/webinos/crf.png)\
Figure 2

### Adaptation Granularity and Approaches[¶](#Adaptation-Granularity-and-Approaches)

The expected adaptability granularity has a major impact on a user
interface's engineering complexity. This property, e.g., indicates
whether the defined adaptation process affects the entire UI, or only a
contained number of identifiable sub-views. The Context-Aware Design
Space (CADS), proposed by Vanderdonckt et al., can be utilized as a
means to analyze and compare a software system's dimensions subject to
adaptation [Vanderdonckt et al. 2008]. As shown in Figure 3, the design
space defines by default seven adaptation dimensions, but it can be
extended with additional dimensions based on the application domain's
specific needs.

-   **Adaptation means:** denotes to which degree the adaptation should
    reconfigure the UI by inserting/deleting/modifying components, and
    whether it should also result in the re-allocation of UI components
    to different physical devices.
-   **UI Component granularity:** defines the smallest UI component unit
    that should be subjected to adaptation.
-   **State recovery:** characterizes the extent to which the state of
    performed adaptations can be transferred or recovered. This
    dimension ranges from transferring adaptation at the session level,
    to picking up the current task at the exact point in which it was
    stopped by enabling the recovery of individual actions.
-   **UI deployment:** defines whether decision regarding the deployment
    and adaptation of UI components is statically defined, or based on a
    more dynamic at-runtime model.
-   **Context coverage:** determines the UI's expected degree of context
    awareness. This dimension denotes the UI's adaptability in terms of
    the user's specific characteristics, his device(s), and a
    description of their physical environment.
-   **Technological spaces:** documents the technological diversity that
    needs to be covered by the UI. This dimension defines whether the UI
    needs to cover one or more technoligical spaces (e.g., HTML, Qt,
    Tcl, AWT, Swing, etc.) and in case of a distributed UI, whether the
    allocated components cover different spaces.
-   **Meta-UI usage:** documents the existence of a meta-UI that enables
    control over the actual UI's adaptation.

![](http://desruelle.be/webinos/cads.png)\
Figure 3

As documented by Schaefer, various approaches can be used to express the
adaptation of a model-based user interface [Schaefer 2007]. In essence,
three types of adaptation approaches can be distinguished:
model-to-model transformations, transformations on the XML
representation of models, and code transformations. The model-to-model
approach relies on the fact that most MBUI models can be designed based
on a directed graph structure. In result, adaptations between two models
are specified with model mappings by means of graph transformation
rules. As depicted in Figure 4, transformation rules consist of a Left
Hand Side (LHS) condition matching the current UI model represented by
graph G [Limbourgh et al. 2005]. To add expressiveness, one or more
Negative Application Condition (NAC), which should not match G, can be
defined. Based on the matching of these conditions a Right Hand Side
(RHS) defines the transformation result by replacing LHS occurrence in G
with RHS. This substitution operation results in an adapted UI model
represented by graph G'.

![](http://desruelle.be/webinos/transformation.png)\
Figure 4

Furthermore, for UI models represented with XML, XSLT transformations
can be used as a more declarative way to define adaptations [Kay 2007].
The transformation process takes a XML based document as input together
with an XSLT stylesheet module containing the transformation rules (see
Figure 5). Each transformation rule consists of a matching pattern and
an output template. Patterns to be matched in the input XML document are
defined by a subset of the XPath language [Berglund et al. 2010]. The
output after applying the appropriate transformations can be standard
XML, but also other formats such as (X)HTML, XSL-FO, plain text, etc.

![](http://desruelle.be/webinos/xslt.png)\
Figure 5

Declarative UI Description[¶](#Declarative-UI-Description)
----------------------------------------------------------

A separate language would be introduced to describe components on a
page; this language would then be interpreted during run-time by the app
taking into consideration what the device is capable of and generating
the required HTML/JS code. Typically a language of that kind is a XML
dialect, but a there's also a possibility to use for example JSON (see
Clutter's example here:
<http://docs.clutter-project.org/docs/clutter-cookbook/1.0/script-ui.html>).
The whole purpose of it would be to hide the specific implementations
from the developer, so he could concentrate on the actual UI building.
Main problem with this solution is the need to write our own
interpeters, which not only adds overhead, but also takes more
memory/disk space.

### XUL[¶](#XUL)

XUL is a user interface markup language developed by Mozilla. Being a
dialect of XML it is of course cross-platform.

**Features**:

-   Widgets and Controls:
    -   Box Model
    -   Buttons, Menus, Trees, Input boxes
    -   Content widgets - browser, iframe and editor
-   Templates - allow separation of data from the presentation layer via
    RDF datasource files
-   mature (over 10 years)
-   the XUL itself is easy to learn
-   ability to test the app without installing any additional software
    except for Firefox

JS-based framework[¶](#JS-based-framework)
------------------------------------------

At first glance a pure HTML + JS solution seems like a perfect solution
for modern devices (out-of-box support), given a closer inspection
though many problems arise - the amount of webkit variants for the
Android-based devices alone is overwhelming, as well as the distinct
troubles they could give. And that's just one family of products. That's
where the JS-based frameworks step in - usually an amalgam of pure
HTML + it's extensions (like "data-role" in JQuery Mobile) and
components created by JavaScript (JoshFire Framework).

### [jQueryMobile](http://jquerymobile.com/)[¶](#jQueryMobile)

**Cross-platform & cross-device**: Instead of writing unique apps for
each mobile device or OS, the jQuery mobile framework will allow you to
design a single highly branded and customized web application that works
on all platforms. It is feasible to use JQuery Framework since it
supports iOS, Windows Phone, Android

**Touch-optimized layouts & UI widgets**: Dynamic touch interfaces that
will adapt to a range of devices, the system will include both layouts
(lists, detail panes, overlays) and a rich set of form controls and UI
widgets (toggles, sliders, tabs).

**CSS framework**: To have the power to design full applications.
support for more CSS3 properties.

**jQuery Mobile**: Touch-Optimized Web Framework for Smartphones &
Tablets A unified user interface system across all popular mobile device
platforms, Provides lightweight code that is built with progressive
enhancement.

-   jQuery Mobile event handling, Methods and Utilities, Data attribute
    reference and Theme Framework [1]
-   jQuery Mobile UI - The UI is declared by using HTML 5 style
    "data-role". This makes the UI development a breeze. Building a
    prototype of jQuery Mobile UI (wireframe) would not require any
    coding, but just html tags.

**jQuery Mobile API**: Consists Page Loading, Transition, Dialog box
handling, List View manipulation, item click and so on [2].

**Code Example**:

-   Include needed Javascript and CSS

<!-- -->

    <head>

    <link rel="stylesheet" href="/jquery.mobile-1.0a1.min.css" /> 
    <script src="jquery-1.4.3.min.js"></script> 
    <script src="jquery.mobile-1.0a1.min.js"></script>

    </head>

-   Declare different Pages, Header and Navigation

<!-- -->

    <body>

         <div data-role="page" id="home"> 
              .....
         </div>

         <div data-role="page" id="search"> 
              .....
         </div>

         <div data-role="page" id="recent"> 
              .....
         </div>

    </body>

**jQuery mobile handling the Issues**:

-   Scrollbar issues - to start below header and end above footer [3]
-   Header and Footer issues to be fixed [3]

### [iUI - User Interface (UI) Framework for WebApp development](http://www.iui-js.org/)[¶](#iUI-User-Interface-UI-Framework-for-WebApp-development)

iUI is a framework consisting of a JavaScript library, CSS, and images
for developing advanced mobile webapps. Made with only iPhone in mind in
the first place (reason of i UI), now supports most smartphones &
tablets.

**iUI has the following features**:

-   Create Navigational Menus and iPhone-style interfaces from standard
    HTML
-   Use or knowledge of JavaScript is not required to create modern
    mobile web pages
-   Ability to handle phone orientation changes
-   Provide a more "iPhone-like" experience in your Web apps

**Lightweight**:

iUI doesn't come with dozens of transitions styles or hundreds of
built-in UI elements like you can find in bigger frameworks like
JQueryMobile or Sencha. And this is on purpose. Since iUI wants keep
core code as lightweight as possible [4].

**HTML Markup**:

-   iUI is just plain HTML, CSS and Javascript.
-   No compilation, no code generation, no alteration [4].

### [qooxdoo Mobile](http://qooxdoo.org/)[¶](#qooxdoo-Mobile)

qx.Mobile is qooxdoo's mobile framework. It provides specific UI classes
for touch devices, handling of mobile events like swiping, and specific
styling. It is suitable for various mobile web browsers on iOS and
Android platforms.

**Features** [5]

-   Mobile widget set
-   Theming via CSS and LESS
-   iOS theme
-   Android theme
-   Touch events: touchstart, touchmove, touchend, touchcancel
-   Gesture events: swipe, tap
-   Animations between pages
-   Touch event emulation for debugging in desktop browsers
-   Fixed toolbars and momentum scrolling via iScroll
-   Basic PhoneGap support

**Development**:

**Mobile and tablet switch, Tablet support out of the box**: It provides
a detection of device type the application runs on. Based upon this
distinction the page manager navigation pages are optimized for device
class mobile

**To get device type and enable device-based layouting**: The device
type is accessible by the environment variable 'device.type'

The device-based layouting is handled by qx.ui.mobile.page.Manager.

**Example**:

    var isTablet = false;
    var manager = new qx.ui.mobile.page.Manager(isTablet);
    var page = new qx.ui.mobile.page.NavigationPage();
    manager.addDetail(page);
    page.show();

The manager has an optional constructor parameter isTablet. It indicates
whether the page manager uses the mobile or the tablet layouting mode.
In this examples, It shows the deactivated tablet layout mode with
isTablet=false. If parameter isTablet is not defined at constructor, the
page manager always calls environment variable device.type to determine
the layout mode. Tablet layout mode is active by default, if environment
variable is desktop or tablet [5].

**page manager arrange pages and layout modes**: There are 3 different
layouting modes that 'qx.ui.mobile.page.Manager' offers [5].

-   Mobile Layout
-   Tablet Landscape Layout
-   Tablet Portrait Layout

**Example**:

    var manager = new qx.ui.mobile.page.Manager();

    var masterPage = new qx.ui.mobile.page.NavigationPage();
    var detailPage1 = new qx.ui.mobile.page.NavigationPage();
    var detailPage2 = new qx.ui.mobile.page.NavigationPage();

    manager.addMaster(masterPage);
    manager.addDetail([detailPage1,detailPage2]);

    masterPage.show();
    detailPage1.show();

**Theming**

-   CSS and LESS: Theming in qooxdoo mobile is done with LESS and CSS.
    LESS is an extension for CSS to enable style sheets to be more
    dynamic. In LESS you can you use variables, reuse CSS statement
    inside of CSS file, import CSS files and create mixins [5].

For example the LESS mixin for border-radius:

     
    .border-radius() {
        -webkit-border-radius: @arguments;
        -moz-border-radius: @arguments;
        border-radius: @arguments;
    } 

This mixin helps you creating border-radius for most browsers, just by
writing something like:

    .border-radius(4px);

Creating a Twitter Client with qooxdoo mobile can be found under the
link:
<http://manual.qooxdoo.org/current/pages/mobile/tutorial.html#requirements-getting-started>

### [Sencha Touch](http://www.sencha.com/products/touch/)[¶](#Sencha-Touch)

Sencha Touch 2, a high-performance HTML5 mobile application framework,
is the cornerstone of the Sencha HTML5 platform. Built for enabling
world-class user experiences, Sencha Touch 2 is the only framework that
enables developers to build fast and impressive apps that work on iOS,
Android, BlackBerry, Kindle Fire, and more [6].

The Application, Component, Plugins, Utility Examples can be found under
the link:
<http://dev.sencha.com/deploy/touch/examples/production/index.html>

**Features**:

-   AJAX - Sencha Touch provides full AJAX support, including CORS and
    JSON-P
-   DOM manipulation - Full DOM manipulation support available
-   Feature Detection - Automatically detects the presence of features
    like geolocation, canvas and orientation support
-   Geolocation - Provides a simple wrapper around geolocation on
    devices that support it
-   Icons - 300 icons included
-   Example apps - 8 full example apps included
-   Touch events - Provides a full range of touch events and gestures
    like tap, swipe and pinch [6]

**Components**:

**Navigation View and Component DataView**: Navigation View provides
automatic back button management when transition between screens take
place. Component DataView enables and builds interfaces based on a Model
and a Store.

**Advanced List Plugins**: Plugins are activated with a single line of
code, delivers a List experience out of the box.

**Native Packaging**: Sencha SDK Tools provides a way to wrap web app in
a native shell. whether it is Mac or Windows deploying to the Apple App
Store or Android Market.

**Adaptive Layouts**: Switching from landscape to portrait happens
nearly instantaneously, and applications load in fractions of a second
as Sencha Touch 2’s advanced layout engine ensures pixel perfection [7].

### [JQTouch](http://www.jqtouch.com/)[¶](#JQTouch)

A Zepto/jQuery plugin for mobile web development on the iPhone, Android,
iPod Touch, and other forward-thinking devices [8]. Part of Sencha Labs.
Visually it aims at iPhone-like UI.

Basic documentation can be found here:
<https://github.com/senchalabs/jQTouch/wiki/Getting-Started>

**Features**:

-   Easy Setup
-   Native WebKit Animations
-   Image Preloading
-   Callback Events
-   Flexible Themes
-   MIT Licensed
-   Swipe Detection
-   Extensions

**Features (Beta 4 release candidate)**:

-   Sass-based Theming
-   Zepto Support
-   iOS5 Scrolling
-   Improved File Size

### [Joshfire Framework](http://framework.joshfire.com)[¶](#Joshfire-Framework)

**What does it have to offer**:

-   JavaScript framework
-   clear separation of data from UI
-   underscore.js templates
-   event driven; callbacks
-   native or at least aimed-at-a-specific-device components (for
    example iScroll) via adapters: "For instance playing a video can be
    made with the HTML5 \<video\> element in some browsers, with Flash
    in older browsers, with Java on Android and with vendor-specific
    APIs on connected TVs."
-   "Write once, run everywhere" philosophy with more adapters planned
-   Phonegap support

**Currently supported adapters**:

-   Web Browsers
    -   Internet Explorer 6+
    -   Firefox 3.5+
    -   Chrome latest public version
    -   Safari 5+
    -   Any other standards-compliant browser
-   Mobiles and tablets
    -   iOS 3.0+
    -   Android 2.2+
-   TVs
    -   Samsung TVs and blu-ray players, SDK 2.3+
    -   Google TV
-   Headless environments
    -   Node.js: Share code between the server and the client.
    -   Arduino: Control apps from hardware through Arduinos and
        websockets.

**Experimental adapters**:

-   Kinect: Provides either fake mouse pointer bound to nearest finger
    or generic gestures. Prototype based on DepthJS, must port to newer
    SDKs.
-   Sencha: More complete but slower than our iOS/Android adapters. May
    be useful for some advanced UI elements, but beware of performance
    and licensing terms.

**Future adapters**:

-   Boxes: Boxee, Roku, ISP set-top boxes, ...
-   Mobile OSes: Blackberry, WebOS, Bada, ...
-   Connected TVs: LG, Philips, Toshiba, Loewe, ...
-   Connected Objects: "Anything the future may bring"

**Available components**:

-   Panel - "A Panel is a container, that you'll mainly use to wrap
    around other UI elements."
-   Panel Manager - "The Panel Manager component is used as a view
    switcher."
-   List
-   Button
-   Video MediaElement
-   Video - "Video in a new window"
-   MediaControls - "Your media controls: play, pause, stop, forward, …"
-   Map

Conclusions[¶](#Conclusions)
----------------------------

After the research the conclusion has been reached, that none of the
existing adaptation methods will fully meet Webinos platform's needs.
Hence we decided to create our own, custom approach, which takes what we
need from other methods.\
Main assumptions for the new approach are:

-   Based on existing frameworks (model-based and
    event-conditions-action rules)
-   Making it flexible for developers and allow them freedom
-   Still allowing developers to do everything in-app (e.g. with
    progressive enhancement) and disable all webinos adaptations

References[¶](#References)
--------------------------

[1] <http://jquerymobile.com/demos/1.0/docs/api/events.html>

[2] <http://jquerymobile.com/demos/>

[3] <http://jquerymobile.com/test/experiments/scrollview>

[4] <http://www.iui-js.org/about>

[5]
<http://manual.qooxdoo.org/current/pages/mobile/mobile_overview.html#supported-mobile-operating-systems>

[6] <http://www.sencha.com/products/touch/>

[7] <http://www.sencha.com/products/touch/features/>

[8] <http://www.jqtouch.com/>

[Banavar and Bernstein 2004] Banavar, G., Bernstein, A.: "Challenges in
design and software infrastructure for ubiquitous computing
applications”; Advances in com- puters, 62, 1 (2004) 179-202.

[Berglund et al. 2010] Berglund, A. Boag, S., Chamberlin, D., Fernandez,
M.F., Kay, M., Robie, J., Simeon, J. (eds.): "XML Path Language (XPath)
2.0 (Second Edition)"; W3C Recommendation (2010),
<http://www.w3.org/TR/xpath20/>

[Brown et al. 1997] Brown, P.J., Bovey, J.D., Chen, X.: “Context-aware
Applications: From the Laboratory to the Marketplace”; IEEE Personal
Communications, 4, 5 (1997), 58-64.

[Calvary et al. 2003] Calvary, G., Coutaz, J., Thevenin, D., Limbourg,
Q., Bouillon, L., Vanderdonckt, J.: “A Unifying Reference Framework for
Multi-Target User Interfaces”; Interacting with Computers, 15 (2003),
289-308.

[Cantera 2010] Cantera, J.M. (ed.): “Model-Based UI XG Final Report”;
W3C Incubator Group Report (2010),
<http://www.w3.org/2005/Incubator/model-based-ui/XGR-mbui>

[Cantera and Rhys 2010] Cantera, J.M., Rhys L. (eds.): “Delivery Context
Ontology”; W3C Working Group Note (2010),
<http://www.w3.org/TR/dcontology>

[Cantera and Tsouroulas 2010] Cantera, J.M., Tsouroulas, N.: “Context
model and universal APIs”; NEXOF-RA (2010), <http://www.nexof-ra.eu>

[Chen and Kotz 2000] Chen, G., Kotz, D.: “A Survey of Context-aware
Mobile Computing Research”; Tech. Rep. TR2000-381, Dept. of Computer
Science (2000)

[Desruelle et al. 2011] Desruelle, H., Blomme, D., Gionis, G., Gielen,
F.: "Adaptive user interface support for ubiquitous computing
environments"; Proc: Workshop on Software Support for User Interface
Description Language (UIDL 2011), Lisbon, Portugal (2011)

[Dijkstra 1976] Dijkstra, E.W.: “A Discipline of Programming”;
Prentice-Hall, Englewood Cliffs (1976)

[Heckmann 2005] Heckmann, D.: “Ubiquitous User Modeling”; PhD thesis,
Dept. of Computer Science, Saarland University (2005)

[Heckmann et al. 2009] Heckmann, D., Loskyll, M., Math, R., Recktenwald,
P., Stahl, C.: “Ubisworld 3.0: A Semantic Tool Set for Ubiquitous User
Modeling”; Proc: 17th Int. Conf. on User Modeling, Adaptation, and
Personalization, Springer, Heidelberg (2009)

[Heath and Bizer 2011] Heath, T., Bizer, C.: “Linked data: Evolving the
web into a global data space”; Synthesis Lectures on the Semantic Web:
Theory and Technology, 1, 1 (2011) 1-136.

[Kiss 2010] Kiss, C. (ed.): “Composite Capability/Preference Profiles
(CC/PP): Struc- ture and Vocabularies 2.0”: W3C Working Group Note
(2010), <http://www.w3.org/TR/CCPP-struct-vocab2>

[Kappel et al. 2001] Kappel, G., Proll, B., Retschitzegger, W.,
Schwinger, Hofer, T.: “Modeling ubiquitous web applications - A
Comparision of Approaches”; Proc: 3rd Int. Conf. on Information
Integration and Web-based Applications and Services, Linz, Austria
(2001) 163-174.

[Kay 2007] Kay, M. (ed.): "XSL Transformations (XSLT) Version 2.0", W3C
Recommendation (2007), <http://www.w3.org/TR/xslt20/>

[Koch et al. 2008] Koch, N., Knapp, A., Zhang, G., Baumeister, H.:
“UML-Based web engineering”; Web engineering: modeling and implementing
web applications (2008) 157-191.

[Lawton 2008] Lawton, G.: “Moving the OS to the Web”; Computer, 41, 3
(2008)16-19. [Limbourg et al. 2004] Limbourg, Q., Vanderdonckt, J.,
Michotten B., Bouillon, L., Lopez, V.: “UsiXML: a Language Supporting
Multi-Path Development of User Interfaces”; Proc: 9th IFIP Working Conf.
on Engineering for Human-Computer Interaction, Springer, Heidelberg
(2004)

[Limbourgh et al. 2005] Limbourg, Q., Vanderdonckt, J., Michotte, B.,
Bouillon, L., Lopez-Jaquero, V.: "USIXML: A language supporting
multi-path development of user interfaces"; Proc: Engineering Human
Computer Interaction and Interactive Systems, Springer, Heidelberg
(2005)

[Linaje et al. 2010] Linaje, M., Preciado, J.C., Sanchez-Figuero, F.:
“Multi-Device Context-Aware RIAs Using a Model-Driven Approach”; Journal
of Universal Computer Science, 16,15 (2010), 2038-2059.

[Meixner and Thiels 2008] Meixner, G., Thiels, N.: “Tool Support for
Task Analysis”; Proc: 4th Int. Workshop on Model-Driven Development of
Advanced User Interfaces, Florence, Italy (2008)

[Miller and Mukerji 2003] Miller, J., Mukerji, J.: “MDA Guide, version
1.0.1”; OMG standard (2003), <http://www.omg.org/mda>

[OMA 2001] Open Mobile Alliance: “WAG UAProf”; Tech. Rep.
WAP-248-UAProf-20010530, OMA (2001),
<http://www1.wapforum.org/tech/terms.asp?doc=WAP-248-UAProf-20010530-p.pdf>

[OMG 2011] Ob ject Management Group; “Meta Ob ject Facility (MOF) 2.0
Query/View/Transformation (QVT)”; OMG standard (2011),
<http://www.omg.org/spec/QVT/1.1/>

[Paterno et al. 2009] Paterno, F., Santoro, C., Spano, L.D.: “MARIA: a
Universal Language for Service-Oriented Applications in Ubiquitous
Environments”; ACM Transactions on Computer-Human Interaction, 16, 4
(2009) 19.

[Rabin et al. 2008] Rabin, J., Trasatti, A., Hanrahan R. (eds.): “Device
Description Repository Core Vocabulary”; W3C Working Group Note (2008),
<http://www.w3.org/TR/ddr-core-vocabulary>

[Schaefer 2007] Schaefer, R.: "A Survey on Transformation Tools for
Model Based User Interface Development"; Proc: 12th Int. Conf. on
Human-Computer Interaction (CHI 2007), Springer, Heidelberg (2007)

[Schauerhuber et al. 2007] Schauerhuber, A., Wimmer, M., Schwinger, M.,
Kapsammer, E., Retschitzegger, W.: “Aspect-oriented modeling of
ubiquitous web applications: the aspectWebML approach”; Proc: 14th Int.
Conf. and Workshops on the Engineering of Computer-Based Systems, IEEE,
New York (2007) 569-576.

[Schilit et al. 1994] Schilit, B., Adams, N., Want, R.: “Context-aware
Computing Ap- plications”; Proc: 1st Workshop on Mobile Computing
Systems and Applications, IEEE, New York (1994) 85-90.

[Vanderdonckt et al. 2008] Vanderdonckt, J., Coutaz, D., Calvary, G.,
Stanciulescu, A.: "Multimodality for Plastic User Interfaces: Models,
Methods, and Principles"; Multimodal user interfaces: signals and
communication technology, Lecture Notes in Electrical Engineering,
Springer, Heidelberg (2007) 61-84.

3 Technical specification[¶](#3-Technical-specification)
========================================================

Static diagrams[¶](#Static-diagrams)
====================================

The adaptation is regulated and executed by two main components. The WRT
is linked to the webinos bootstrap component (which is injected at
start-up time). This component contains an *Adaptation Client* which is
bootstrapped at application launch and will execute all the UI
adaptations. The second component is the *Adaptation Manager*, which
resides in the PZP. The Adaptation Manager aggregates all the rules,
analyzes the rules and stores them in an Adaptation Rule Engine,
registers itself with various services, fetches properties and fires
adaptation rules by sending them to the Adaptation Client.

![](/redmine/attachments/download/2821)

As the figure above demonstrates, the Application is the packaged
application as explained in the section "webinos Applications and Widget
Runtime specification". The application contains its content and various
metadata. Newly defined here are the application rules, which can be
defined by application developers who want to adapt their application to
the running context and context changes. The metadata will also contain
two settings:

-   A setting which can disable the adaptation process completely
-   and one that will only disable the generic platform adaptation rules
    contained in the Adaptation Manager.

Sequence diagrams[¶](#Sequence-diagrams)
========================================

Application launch/bootstrap[¶](#Application-launchbootstrap)
-------------------------------------------------------------

![](/redmine/attachments/download/2824)

When an application is launched, it bootstraps webinos. Bootstrapping
webinos will also entail starting the adaptation process - unless the
application developer has disabled it explicitly in the application's
metadata. A first step is starting the Adaptation Client, which will
fetch the application adaptation rules from the application's package.
Afterwards, it will connect to the Adaptation Manager in the PZP. The
latter will then fetch the platform rules from the Adaptation Rule
Engine.

For each rule, the adaptation manager analyzes the rule's events and
check the rule's event type. It will feed the rule to an event type
specific instance of the Rule Engine and register itself with the
appropriate webinos service for a callback so it can launch the
adaptation rule when the event occurs. For rules with the
application.launch event, it will match the rules based on properties
also fetched from webinos services. After analyzing all the rules, it
will extract the actions to be performed and send them to the Adaptation
Client, who will execute the adaptations.

An event is triggered.[¶](#An-event-is-triggered)
-------------------------------------------------

When an event is triggered, the API will trigger a callback function on
each changed value for a certain property, e.g. the light sensor. The
Adaptation Manager will activate the event type's instance of the Rule
Engine to analyze the rule and fire the adaptation rule if the value
falls within the range of the event and the conditions are met.\
![](/redmine/attachments/download/2826)

------------------------------------------------------------------------

Data & Communication[¶](#Data-38-Communication)
===============================================

The UI adapatation works on an event-condition-action based approach.
The rules are stored as a separate file. Application rules are stored
inside the applications package. Each rule can contains an events,
conditions and action section:

-   The events part specifies the signal that triggers the invocation of
    the rule. The event is mapped to change in a property in the local
    Device Status Status and a type of the Sensor Service.
-   The conditions part is a logical test that, if satisfied or
    evaluates to true, causes the action to be carried out. This part
    also references information from the Device Status Service and Senor
    Services.
-   The action part consists the UI adaptations which are being
    transformed.

As there is a distinction between evented and unvevented rules, the
conditions and events section is not always necessary. The following
combinations are possible:

-   n events + n conditions (evented): The action is only performed,
    when one of the events occurs and the conditions apply
-   n events (evented): The action is performed, when one of the events
    occurs
-   n conditions (unevented): The action is performed

The rules for the enabling the content adaptation are defined using XML
notion.

Enabling the UI adaptation in the application manifest[¶](#Enabling-the-UI-adaptation-in-the-application-manifest)
------------------------------------------------------------------------------------------------------------------

Applications making use of the Adaptation Manager running on the PZP
need to indicate this in the application manifest with the parameter
`webinos:uiadaptation`, the allowed parameters are:

-   none: This is the default value. UI adaptation is not used in the
    application
-   custom: Application makes use of the Adpatatation Manager running on
    the PZP. The application package containe the file
    adapatationrules.xml
-   platformdefined: indicates that the application is making use of
    platform defined adaptation rules (see chapter: platform specified
    rules)

XML file containing the adaptation rules needs to have the name
adaptationrules.xml and need to be part of the widget package.

### Example[¶](#Example)

    1  <webinos:uiadaptation>none</webinos:uiadaptation>

Rule definition[¶](#Rule-definition)
------------------------------------

The following section outlines

### Events section[¶](#Events-section)

In the events section the triggers for a rule are defined. The events
section can contain more than one event. Events are logically connected
by an 'or'. At least one event has to be defined for the rule to be
valid.

#### Parameters[¶](#Parameters)

The type property indicates which device element is beeing monitored by
the rule. The supported types are mapped to an property of the Device
Status API [1] and to a sensor type in the generic sensor API. [2]

Value based conditions on these events should be put as conditions in
the conditions tag.

#### Examples[¶](#Examples)

The following example illustrates that the action should only be
triggered when the light sensor changes

    1 <event>sensors.light</event>
    2 <conditions>
    3   <condition>
    4     <type>sensors.light</type>
    5     <value>[0,60]</value>
    6   </condition>
    7 </conditions>

The following example illustrates that an action should only be
triggered when the battery of a device is beeing charged.

    1 <event>battery. batteryBeingCharged</event>
    2 <conditions>
    3   <condition>
    4     <type>battery. batteryBeingCharged</type>
    5     <value>true</value>
    6   </condition>
    7 </conditions>

### ConditionSet section[¶](#ConditionSet-section)

Conditions provide the means to restrict the the circumstances, when an
action shall be performed. Conditions can be aggregated by using a
ConditionSet.

Conditions are defined by the two attributes type and value.

ConditionSet can contain Conditions or ConditionSets and the
aggregatortype is an attribute of the ConditionSet

#### Parameters[¶](#Parameters)

##### type

The type property indicates on which device element the condition is
beeing applied. The supported types are mapped to an property of the
Device Status API [1] and to a sensor type in the generic sensor API.
[2]

##### value

In the value attribute it is defined, for what values the condition is
valid or not.

The value can either be an interval or a specific value of the sensor
type. Intervals are defined by providing the lower and upper limit of
the interval with square brackets [\*,\*]. If one limit is missing, the
interval is interpreted as greater or less.\
For events type derived from the Device Status API the value is mapped
to watchOptions.range. In case of a sensor type event the value is be
matched to a sensorValue^[0](#fn0)^.

#### examples[¶](#examples)

The following example illustrate, that action should only beeing
triggerd on in-car headunits.

    1 <condition>
    2  <type>device.type</type>
    3  <value>vehicle</value>
    4 </condition>

The following example illustrate, that action should only beeing
triggerd on in-car headunits when the light is below a threshold of 60.

     1 <conditionSet aggregatorType="AND">
     2   <condition>
     3     <type>device.type</type>
     4     <value>vehicle</value>
     5   </condition>
     6   <condition>
     7     <type>sensors.light</type>
     8     <value>[,60[</value>
     9   </condition>
    10 </conditionSet>

### Actions section[¶](#Actions-section)

The action section conatins the JavaScript, which is injected, when the
Event is triggered and the conditions are valid.

### Comprehensive rule examples[¶](#Comprehensive-rule-examples)

#### Event-Condition-Action rule[¶](#Event-Condition-Action-rule)

The following example illustrates that an action is triggered, when the
sensor value of the light sensor changes to 0 and 30 lux and the device
type on which the application is running is an ivi system.

     1 <rule>
     2 <events>
     3  <event>sensors.light </event>
     4 </events>
     5 <conditionSet aggregatorType="AND">
     6  <condition>
     7   <type>sensors.light</type>
     8   <value>[0,30]</value>
     9  </condition>
    10  <condition>
    11    <type>device.type</type>
    12    <value>ivi</value>
    13  </condition>
    14 </conditionSet>
    15 
    16 <action>
    17   //JavaScript code for switching the css style
    18 </action>
    19 </rule>

#### Condition-Action rule[¶](#Condition-Action-rule)

The following examples illustrates how a rule specifically for the
vehicle environment can look like.

     1 <rule>
     2 <events>
     3   <event>application.launch</event>
     4 </events>
     5 <conditionSet aggregatorType="AND">
     6  <condition>
     7    <type>device.type</type>
     8    <value>ivi</value>
     9  </condition>
    10 </conditionSet>
    11 <action>
    12  //JAVA script action
    13 </action>
    14 </rule>

References[¶](#References)
--------------------------

[1]
<http://dev.webinos.org/specifications/new/devicestatus.html#::PropQuery>\
[2] <http://dev.webinos.org/specifications/new/sensors.html#::Sensor>

------------------------------------------------------------------------

Platform specified[¶](#Platform-specified)
==========================================

[UI-Widget: Navigation bar](/redmine/projects/wp3-3/wiki/UI_Navigation)[¶](#UI-Widget-Navigation-bar)
-----------------------------------------------------------------------------------------------------

[UI-Widget: Split view](/redmine/projects/wp3-3/wiki/UI_Split)[¶](#UI-Widget-Split-view)
----------------------------------------------------------------------------------------

[Font-size increase on the TV](/redmine/projects/wp3-3/wiki/UI_Font)[¶](#Font-size-increase-on-the-TV)
------------------------------------------------------------------------------------------------------

The following section provides examples for the platform specified
rules, which are injected into the WRT on application launch. Inside the
manifest the app developer needs to specify, if the application is going
to make use of the predefined UI adaptation work.

<div style="float:right">

![](/redmine/attachments/download/2693)

</div>

The platform specified rules extend the jQuery mobile framework and make
use of the data-\* attributes for DOM elements. As for now, for the use
inside the vehicle as a input controller the BMW iDrive controller is
assumed. The iDrive controller is mapped to the following inpute
controllers from the Device Status API [1] jogDial and fourWayScroller.
For the TV we assume that at least a fourWayController is supported.

UI-Widget: Navigation Bar[¶](#UI-Widget-Navigation-Bar)
=======================================================

The navigation bar is the top level navigation element for the
application. Depending on the device type and enteries in the navigation
bar, the element is rendered differently. The navigation bar is a
container with the attibute data-role='navigation' and embeds a ul
element. The elements of the embedded ul object can be displayed with an
icon by annotating the element with the attribute data-icon

### UI rules[¶](#UI-rules)

#### PC and Tablet[¶](#PC-and-Tablet)

On the tablet and a PC the navigation bar is rendered diplayed at a
fixed position at the top of the screen as depicted in the following
pictures.

![](/redmine/attachments/download/2815)

#### Smartphone[¶](#Smartphone)

Depending on the amount of enteries in the navigation bar, the
navigation is displayed at a fixed position at the top of the screen .
If there are more than 5 (defined by the platform provider) entries in
the navigation bar, the navigation bar is displayed as a single button
at the top of the screen, if the user presses on the button, the
navigation list is displayed.

![](/redmine/attachments/download/2816)

#### In-vehicle system[¶](#In-vehicle-system)

The navigation bar is displayed fullscreen on application startup and
receives the focus on the startup. Other UI elements are hidden.\
When the MENU button is pressed on the ergo commander, the navigation
bar is displayed again.

![](/redmine/attachments/download/2818)

#### TV system[¶](#TV-system)

The navigation is bar displayed on the left side of the screen. The
container fills the height to 100%. On application start-up the
navigation bar is focused. Pressing the 'tbd' button on the remote
control the navigation receives the focus again.

![](/redmine/attachments/download/2817)

### Code example[¶](#Code-example)

The following exemplifies how to annotate the HTML code of the
application in order to allow the UI adaption.

     1 <div data-role='navbar'>
     2  <ul>
     3   <li data-icon='path/to/iconimage'><a href='#'>....</a></li>
     4   <li data-icon='path/to/iconimage'><a href='#'>....</a></li>
     5   <li data-icon='path/to/iconimage'><a href='#'>....</a></li>
     6   <li data-icon='path/to/iconimage'><a href='#'>....</a></li>
     7   <li data-icon='path/to/iconimage'><a href='#'>....</a></li>
     8   <li data-icon='path/to/iconimage'><a href='#'>....</a></li>
     9   <li data-icon='path/to/iconimage'><a href='#'>....</a></li>
    10  </ul>
    11 </div>

------------------------------------------------------------------------

UI-Widget: Split View[¶](#UI-Widget-Split-View)
===============================================

A split view is an application screen which is divided in two logical
elements. Most split screens have a menu on the left screen and content
related to the selected menu item on the (larger) right screen. To give
a better view, a mock-up of this type of interface can be seen below.

![](/redmine/attachments/download/2689)

### Rendering rules[¶](#Rendering-rules)

Assuming the developer doesn't use fixed-widths for the main navigation
elements so they expand or shrink along with the screen size, this view
is good for most screens. The most notable exception to this, are
smartphones. An overview of platform-specific rendering rules can be
found below.

#### PC and Tablet[¶](#PC-and-Tablet)

Next to smartphones, PC's and tablets are the most used computing
devices that offer an easy interaction method and decent screen sizes. A
split view is used in a significant number of applications on these
devices, so it is very likely the developer was designing for these
platforms when creating the interface. So no significant generic
adaptations can be made for these platforms.

#### Smartphone[¶](#Smartphone)

Smartphones are the notable exception for this widget type. Their screen
is usually too small to contain the menu from the left-hand side and the
content from the right-hand side on-screen at the same time. The generic
adaptation that can be used works in the following matter:

-   On start-up of the application (screen), the right-hand side with
    the content is hidden by letting the menu take up the entire screen
    so the user can easily make their selection.
-   When an item is selected, the menu is shifted to the left out of
    view, so the content is shown. Filling the content element with the
    correct content should be taken care of by the application.
-   When the user presses the back button, the menu is shifted into view
    from the left and covers the content area again, so the user can
    make a new selection.

#### In-vehicle system and TV[¶](#In-vehicle-system-and-TV)

The main restriction for this type of widget on these systems, is the
interaction method. When the screen is shown, focus should be placed on
the first menu element automatically. When the user is scrolling (down),
focus should not be moved out of the menu, but remain on the menu items
until the user has made a selection. After that has happened, the focus
is shifted to the content area, until the user presses the back button.

### Code example[¶](#Code-example)

The following exemplifies how to annotate the HTML code of the
application in order to allow the UI adaption for list views.

     1 <div data-role="splitview">
     2     <div data-role="split-left">
     3         <ul data-role='listview'>
     4            <li> ... </li>
     5            <li> ... </li>
     6            <li> ... </li>
     7            <li> ... </li>
     8            <li> ... </li>
     9         <ul>
    10     </div>
    11     <div data-role="split-right">
    12     </div>
    13 </div>

------------------------------------------------------------------------

Font-size increase on the TV/Vehicle[¶](#Font-size-increase-on-the-TVVehicle)
=============================================================================

Text is one of the primary content types. It is important for it to be
easy for the user to consume it, without having to strain his eyes.

### Rendering rules[¶](#Rendering-rules)

We are used to watching content on desktop, tablet and mobile screens.
These have similar, high resolutions optimized for the distance at which
we view the content. TV's and automotive screens aren't optimized for
this. Text has to be displayed bigger on these screens to be readable by
the end user.

#### PC and Tablet[¶](#PC-and-Tablet)

No adaptation is needed.

#### Smartphone[¶](#Smartphone)

No adaptation is needed.

#### In-vehicle system and TV.[¶](#In-vehicle-system-and-TV)

A procentual increase in font-size throughout the application is
required. This will make sure the font-size remain the same relative to
each other.

### Code example[¶](#Code-example)

This is a very generic adaptation rule, no relevant code example can be
given here.

------------------------------------------------------------------------

References[¶](#References)
--------------------------

[1]
<http://dev.webinos.org/specifications/new/devicestatus.html#::InputType>

------------------------------------------------------------------------

------------------------------------------------------------------------
