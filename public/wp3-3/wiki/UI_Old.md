UI Old stuff[¶](#UI-Old-stuff)
==============================

Initially suggested approaches and technology[¶](#Initially-suggested-approaches-and-technology)
------------------------------------------------------------------------------------------------

### [UI Sharing](.html) (Fraunhofer)[¶](#UI-Sharing-Fraunhofer)

### [Declarative UI Description](.html) (BMW)[¶](#Declarative-UI-Description-BMW)

### [Model-based User Interfaces](.html) (IBBT)[¶](#Model-based-User-Interfaces-IBBT)

### [Evented rule-based adaptation of the DOM](.html) (IBBT)[¶](#Evented-rule-based-adaptation-of-the-DOM-IBBT)

### [Forward chaining rule engine in JavaScript](.html) (W3C)[¶](#Forward-chaining-rule-engine-in-JavaScript-W3C)

### [UI Approaches](.html) (JQuery, Sencha Touch, iUI, qooxdoo Mobile - TUM)[¶](#UI-Approaches-JQuery-Sencha-Touch-iUI-qooxdoo-Mobile-TUM)

Abstract (draft - up for discussion)[¶](#Abstract-draft-up-for-discussion)
--------------------------------------------------------------------------

The following chapter specifies how the Personal Zone Proxy (PZP)
enables the local, client-side adaptation of the user interface (UI) of
a webinos application based on the device characteristics. The
adaptation process takes several of these characteristics into
consideration, the most notable being screen size and resolution, device
type and input modalities.

To make this possible, applications will be created with a declarative
user interface description that is device-independent. This description
will stay as close to the basic web technologies as possible. At this
time, two approaches are viable: HTML annotations or JS declarations. At
runtime, this description is transformed into a HTML/CSS/JS layout
suited for a web runtime.

This chapter will also explore the possibility to share parts of the
user interface across devices. Using the basic JS mechanism to fetch DOM
elements for a local page, an application can get parts of a remote
application's user interface to incorporate into its own interface. This
allows lightweight provision of UI elements to a remote device without
the need to install a full widget or child widget there. From an
architecture point of view, the intrusion is lightweight - the necessary
mechanism for PZP to PZP communication already exists - the primary
challenge is the handling of security on the secondary devices to avoid
impersonation of a local UI by a remote application.

State-of-the-art[¶](#State-of-the-art)
--------------------------------------

### Additions to HTML tags[¶](#Additions-to-HTML-tags)

-   [jQuery mobile](jQuery%20mobile.html) (BMW F+T)
-   [Others](Others.html) (IBBT)

### User interface markup languages[¶](#User-interface-markup-languages)

-   [XUL](XUL.html) (Antenna)

*Suggest looking at W3C Model-Based UI Working Group for further
pointers to other languages, ask Dave Raggett in case of any questions*

### Other approaches[¶](#Other-approaches)

-   [Custom JS framework](Custom%20JS%20framework.html) (Antenna)
-   [Joshfire framework](Joshfire%20framework.html) (suggested by Dave;
    Antenna)

[HTML based annotations](.html)

