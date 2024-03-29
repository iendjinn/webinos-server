Content Adaptation: joshfire framework (in progress)[¶](#Content-Adaptation-joshfire-framework-in-progress)
===========================================================================================================

to be found at <http://framework.joshfire.com>

What does it have to offer[¶](#What-does-it-have-to-offer)
----------------------------------------------------------

-   JavaScript framework
-   clear separation of data from UI (Data Tree, which is also sort of a
    router from what i reckon; and UI Tree, where you declare components
    and bind them to data sources)
-   underscore.js templates
-   event driven; callbacks
-   native [not 100% sure on that] or at least
    aimed-at-a-specific-device components (for example iScroll) via
    adapters: "For instance playing a video can be made with the HTML5
    \<video\> element in some browsers, with Flash in older browsers,
    with Java on Android and with vendor-specific APIs on connected
    TVs."
-   "Write once, run everywhere" philosophy with more adapters planned

Adapters[¶](#Adapters)
----------------------

-   Currently supported adapters:
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

<!-- -->

-   Experimental adapters
    -   Kinect: Provides either fake mouse pointer bound to nearest
        finger or generic gestures. Prototype based on DepthJS, must
        port to newer SDKs.
    -   Sencha: More complete but slower than our iOS/Android adapters.
        May be useful for some advanced UI elements, but beware of
        performance and licensing terms.

------------------------------------------------------------------------

-   Future adapters
    -   Boxes: Boxee, Roku, ISP set-top boxes, ...
    -   Mobile OSes: Blackberry, WebOS, Bada, ...
    -   Connected TVs: LG, Philips, Toshiba, Loewe, ...
    -   Connected Objects Anything the future may bring! ;-)

Available components[¶](#Available-components)
----------------------------------------------

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

Possible shortcomings[¶](#Possible-shortcomings)
------------------------------------------------

-   **"The Joshfire framework uses PhoneGap to compile your JavaScript
    app into a native iOS app." - not sure if this can be avoided, or is
    this a standard thing when using adapters**
-   use of iScroll - Android 4 and forms issues, also: "One-finger
    scrolling on smartphones is currently done with JavaScript. Even if
    in a few years most smartphones will support it natively via CSS, it
    is still one of the biggest potential pitfalls for a HTML5
    application on smartphones. To improve performance in these lists,
    you should try to keep their DOM as simple as possible"
-   "Currently the framework has very good support for "content-based"
    applications, including text, audio and video browsing. Depending on
    user need, future releases may focus on form input and other areas."
-   still quite young and the development seems to have stalled (as of
    July 19th 2012 - version 0.9.2 is downloadable, with 0.9 being the
    first public version out in June 29th 2011),

