Remote UI access[¶](#Remote-UI-access)
======================================

Webinos application model:[¶](#Webinos-application-model)
---------------------------------------------------------

-   A Webinos complex App consists of several child apps one of them is
    the main package and the other packages can be moved and installed
    on the Fly during runtime on other devices
-   Child apps running on different devices can talk to each others via
    webinos Event API.
-   UI Sharing is not really supported. Only Resource sharing is
    supported e.g. an App running on one device can the use the Camera
    of another device.

![](/redmine/attachments/2132/webinos-app-model.png)

Visual Mashup Approach:[¶](#Visual-Mashup-Approach)
---------------------------------------------------

Mashup is composed of multiple visual components rendered on a single
page

Each visual component can be considered as a black-box and offers a
well-defined interface that allows Mashup developer to connect
components with each other to build complex applications

Mashup developer can use specific tools to create these Mashups.
Programming experience is not necessary required

This approach is more suitable to build simple applications for desktop
browsers and has a lot of limitations especially regarding the UI of the
Mashup application

Each component can only update its UI and not the UI of other components
in the same Mashup.

Three Actors:

1.  Widget Developer (with programming skills): implements widgets and
    put them in a widget repository
2.  Mashup Developer (little programming skills required): create
    Mashups using widgets from the repository
3.  Mashup Consumer (No programming skills required): (installs and)
    runs Mashup applictions

![](/redmine/attachments/2138/Mashup-Approach.png) -
![](/redmine/attachments/2137/mashup-example.png)

Distributed Mashup Approach:[¶](#Distributed-Mashup-Approach)
-------------------------------------------------------------

-   Extension for Visual Mashups
-   No changes on Widget and Mashup developer side
-   The Mashup consumer can run the Mashup on one device or connect
    other devices and move/duplicate widgets from one device on the
    other devices
-   Distributed runtime required

![](/redmine/attachments/2134/Distr-Mashup-Approach.png) -
![](/redmine/attachments/2141/dist-mashup-example1.png) -
![](/redmine/attachments/2140/dist-mashup-example2.png)

Samsung TV App Model Approach[¶](#Samsung-TV-App-Model-Approach)
----------------------------------------------------------------

-   Samsung TV SDK provides Three Application Display Types:

> 1.  Full-screen application
> 2.  Single-wide application (App is displayed only on a part of the
>     screen)
> 3.  Ticker (The App remains on the TV screen while the user do other
>     things with the TV)

-   Important Component for UI sharing:

> 1.  Scene Manager API: A scene is a kind of layer – it is what the TV
>     user sees and interacts with to perform a single task or a group
>     of tasks
> 2.  Convergence API: Samsung Smart TV SDK supports device convergence
>     by allowing a client application running on an external device to
>     communicate with a TV application to synchronize state and
>     exchange data and files
> 3.  Samsung provides a cross platform mobile App (Samsung Remote in
>     Smart mode). Running TV Apps can push UI components to connected
>     mobile devices.

![](/redmine/attachments/2142/Samsung-App-Model.png) -
![](/redmine/attachments/2143/Samsung-Convergence-Apps.png)

New Appl Model Approach[¶](#New-Appl-Model-Approach)
----------------------------------------------------

-   An App Model should consider the following aspects

> 1.  Ability to discover UI Components like any other resource e.g.
>     Camera
> 2.  Ability to share UI between Apps or App Subcomponents running on
>     the same device or multiple devices

-   Ideas/requirements

> 1.  Each application (simple or complex) consists of only one UI
> 2.  Simple applications: UI can be updated by the simple App itself
> 3.  Complex applications: the UI can be updated by each subcomponent
>     of the complex Application
> 4.  It should be possible to move only the logic, the UI or both of a
>     subcomponent from one device to another one
> 5.  By moving only the logic all UI operations will be forwarded to
>     the origin device. User interaction is only possible on the origin
>     device
> 6.  By moving only the UI of a subcomponent all UI operations will be
>     forwarded from the origin to the target device. The logic running
>     on the origin device is still able to update the UI of the complex
>     application
> 7.  By moving the Logic and the UI of a subcomponent the UI of both
>     devices can be updated from any subcomponent running on the origin
>     or target device

![](/redmine/attachments/2147/new-approach.png)

