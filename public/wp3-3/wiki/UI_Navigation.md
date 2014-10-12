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

![](navbar_tv.PNG)

#### Smartphone[¶](#Smartphone)

Depending on the amount of enteries in the navigation bar, the
navigation is displayed at a fixed position at the top of the screen .
If there are more than 5 (defined by the platform provider) entries in
the navigation bar, the navigation bar is displayed as a single button
at the top of the screen, if the user presses on the button, the
navigation list is displayed.

![](navbar_smartphone.PNG)

#### In-vehicle system[¶](#In-vehicle-system)

The navigation bar is displayed fullscreen on application startup and
receives the focus on the startup. Other UI elements are hidden.\
When the MENU button is pressed on the ergo commander, the navigation
bar is displayed again.

![](navbar_vehicle.PNG)

#### TV system[¶](#TV-system)

The navigation is bar displayed on the left side of the screen. The
container fills the height to 100%. On application start-up the
navigation bar is focused. Pressing the 'tbd' button on the remote
control the navigation receives the focus again.

![](navbar_tablet.PNG)

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
