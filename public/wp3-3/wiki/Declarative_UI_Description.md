Declarative UI Description[¶](#Declarative-UI-Description)
==========================================================

*Dave: You may want to consider using JSON instead of XML. See for
example, the precedent set by JoshFire:*

-   [JoshFire
    Framework](http://framework.joshfire.com/doc/0.9/gettingstarted/overview)

*where the UI design is expressed at a concrete level with JSON and
mapped via a web page script into the actual UI in HTML. They say:
Joshfire has built-in publish/subscribe methods on many classes. They
are often the primary medium of interaction between components. Using
events reduces the coupling between components and allows greater
extensibility and modularity.*

Template approach (rough ideas)[¶](#Template-approach-rough-ideas)
------------------------------------------------------------------

The majority of information centric applications (e.g. News apps, local
based services, social network apps) share the same overall structure.
They are usually based on nested lists.

Based on this assumption a template approach coupled with a declarative
UI description for these application might be sufficient to adapt the
user interface of the application to the constraints of the hosting
device (tablet, smartphone, tablet, ivi-system, tv).

In this cases, the developer describes the GUI of the application in a
declarative manner. When an application is loaded, the GUI description
is converted to HTML/CSS code by a UI Transformer.

The approach enables a subset of applications, which can be feasible
with the webinos architecture. However, it should provide an easy entry
point for developer to build applications, which can be used on a TV,
smartphone, tablet and vehicle. The challenges to adopt the application
UI to the different device types is hidden by the GUI transformer.

### example[¶](#example)

Here is an example how an UI description could look like. (It's not the
solution to the problems. But I think the example is useful to
illustrate what I want to accomplish):

    <view id='home' class='list' icon='' header=''>
        <list>
            <item>
                <icon></icon>
                <label ></label>
            </item>
            <item>
                <icon></icon>
                <label ></label>
            </item>
            ...
        </list>
    </view>

    <view id='article' class='detail' parent='home'>

    </view>

    <view id='options-article' class='options' parent='article'>
        <list>
            <item>
                <label>Recommend</label>
                <label>Forward</label>
            </item>
        </list>    
    </view>

The ui description contains information about the user flow of an
application by defining a parent of a each view. This information could
be used to display views side by side depending on screen size and
screen rotation. In addition, this information helps to control focusing
the right element, when toggling thru links, which is important when an
application on a TV/ivi-systems is controlled with a remote control or
respectively a click wheel.

### Required information about the current device in order to adapt the layout of the application:[¶](#Required-information-about-the-current-device-in-order-to-adapt-the-layout-of-the-application)

-   screen size & rotation
-   input controls (touch, buttons, keyboard, mouse, scroll wheel,
    etc..)
-   device type

### What to we need to do?[¶](#What-to-we-need-to-do)

-   Define / find a relevant ui description
-   define rules how to convert the ui elements on the adressed
    platforms
-   implement GUI transformer (ui description -\> html/css)

