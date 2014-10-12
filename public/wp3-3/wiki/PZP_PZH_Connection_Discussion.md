PZP PZH Connection Discussion[¶](#PZP-PZH-Connection-Discussion)
================================================================

    This page is based on an email discussion initiated by Nick.

-   PZP for android/ windows/linux want to run as a service (or the
    equivalent for that platform), and default behaviour is to autostart

[JOHN] *This should be made clear on install. We ought to define default
(and pessimistic) access control rules*

[PAOLO] *I agree with John that we need to define access control rules.
Having pzp that autostarts it's okay. But what if the device isn't
connected? It needs to check if connection is available and connects
automatically to the last pzh. Otherwise it'd remain in virgin mode.*

-   We need a URL which maps to a PZP configuration administration page.
    -   This URL can be bookmarked and accessed from any browser on that
        device (indeed it will work remotely from another device – if
        you know the IP address –possible security problem?)

[JOHN] *Definite security problem, I'd say. This should be limited to
this device only. Perhaps it requires the browser to have a specific
certificate installed.*

[PAOLO] *What about the WRT? Do we have bookmarks in our runtimes or are
we talking about accessing the page from a browser anyway?*

-   The renderer (where it exists on the platform) will have an
    administration menu (sub menu) option to take you to this URL within
    the renderer

<!-- -->

-   PZP Admin page: functionality required
    -   Is PZP running – simple ping test - e.g. does get42 work (green
        red icon)..
    -   PZP auto start option
        -   Plus manual start
        -   Plus manual stop
-   PZH connection – a visual indicator on whether this is a virgin PZP,
    or has a hub but is not connected, or has a hub and IS connected.
    [JOHN] *(fixed for notation)*
-   Enrolment options a list of options to enrol a PZP – the simplest of
    which is manually enter code

[JOHN] *This functionality has to exist at the PZH not PZP.*

[PAOLO] *I agree with John, but having some kind of feedback on the PZP
it might be also useful. So far, the only way to know it it's working
it's manually do the get42*

-   Enrolment diagnostics- any specific feedback that may be needed – to
    show how far through enrolment process we have got

    Can you give some examples?

<!-- -->

-   View Log: simple view of basic diagnostic logs (is this output of
    the PZP process or more?)
-   Other Devices – a list of all other devices that this PZH/PZP is
    aware of (I know this will need sync activating) This list should
    show
    -   Devices common name
    -   Whether connected via PZH – assumes you can see PZH – and other
        device also can see PZH
    -   Connected/discoverable via PZP (assumes zeroconf discovery)
    -   Services list – shows list of all services: makes a distinction
        between
        -   Cached service list – service I have found on this device
            before
        -   Active services – services I am currently connected to ( I
            know are live – have check \> 5 mins ago)
-   Other people: same as above – but at the higher level of abstraction
    where I can see a view of my “webinos friends” – specifically this
    means people I have exchanged certificates with
-   APIs: this is a list of webinos APIs installed on this device – and
    on which we can run the diagnostic test locally – to see how
    complete the implementation is
    -   E.g. will list sensors , file, contacts – with green/red
        indicator and percentage test complete etc
-   Services (not totally complete yet): this should be a list of
    service widgets. These are widgets on PZP – that have a main.js
    start.

[JOHN] *Can we have a discussion about this? AFAIK, "service widgets"
isn't in spec, requirements or in any way implemented...? This kind of
thing needs to be defined in order for us to have any chance of doing a
proper security analysis*

-   Each service widget should have
    -   Is it running or not
    -   Admin settings to set to auto start
    -   Config page – link to Url from which customs settings of the
        service can be changed
-   An example of a service widget is
    -   A http server
    -   A gelocation logger – which broadcasts location at 1-10 minute
        intervals
    -   A hear rate monitor gateway - like zirans current demo – but
        with no UI – but brodcasts data to PZH – or another application

[PAOLO] I think that all that is out of specs. It's good that this page
is posted here, so the task leader could take this into consideration.

Other than the implementation details of running as a service – most of
the code should be platform independent node code

