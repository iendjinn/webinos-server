Platform specified[¶](#Platform-specified)
==========================================

[UI-Widget: Navigation bar](UI-Widget:%20Navigation%20bar.html)[¶](#UI-Widget-Navigation-bar)
---------------------------------------------------------------------------------------------

[UI-Widget: Split view](UI-Widget:%20Split%20view.html)[¶](#UI-Widget-Split-view)
---------------------------------------------------------------------------------

[Font-size increase on the TV](Font-size%20increase%20on%20the%20TV.html)[¶](#Font-size-increase-on-the-TV)
-----------------------------------------------------------------------------------------------------------

The following section provides examples for the platform specified
rules, which are injected into the WRT on application launch. Inside the
manifest the app developer needs to specify, if the application is going
to make use of the predefined UI adaptation work.

<div style="float:right">

![](ergocommander.png)

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
