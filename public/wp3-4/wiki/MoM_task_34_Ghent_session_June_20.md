MoM task 3.4 Ghent session June 20[¶](#MoM-task-34-Ghent-session-June-20)
=========================================================================

Agenda[¶](#Agenda)
------------------

See [Task 3\_4 session Ghent June 20
2012](http://dev.webinos.org/redmine/attachments/2185/Task_3_4_session_Ghent_June_20_2012.pptx)

Task 3.4 status overview[¶](#Task-34-status-overview)
-----------------------------------------------------

See slide 2-4 in [Task 3\_4 session Ghent June 20
2012](http://dev.webinos.org/redmine/attachments/2185/Task_3_4_session_Ghent_June_20_2012.pptx)

General issues[¶](#General-issues)
----------------------------------

Slide 5 in [Task 3\_4 session Ghent June 20
2012](http://dev.webinos.org/redmine/attachments/2185/Task_3_4_session_Ghent_June_20_2012.pptx)

-   W3C System Applications and NFC WGs starting up. Their work is very
    relevant for Webinos APIs. We should work with these groups and
    provide input. If we want to use APIs created by these groups we can
    take them to webinos even after teh task 3.4 delivery at the end of
    August.

<!-- -->

-   widlproc for windows has been built by Paddy and Nick. Will be
    uploaded to the task 3.4 API specification Redmine repository. This
    means that windows users could test generate the API specifications
    on their local machines before pushing to the Redmine repository.

<!-- -->

-   Wrapper specifications for referred unmodified APIs. Dominique has a
    tool that extracts the raw widl from HTML specifications. This will
    be used to support the development tool chain. There seems to no
    other reasons to have Webinos wrapper specifications for unmodified
    API specifications. Dom Action: [Replace links to Webinos wrapper
    specifications with links to original referred
    specification](http://dev.webinos.org/redmine/issues/909)

Issues on existing APIs[¶](#Issues-on-existing-APIs)
----------------------------------------------------

Slide 6 and 7.

-   Service Discovery API:
    -   Removing createService, use alternative solution to get earlier
        selected default service. Alexander Action: [Service Discovery
        API - Update
        specification](http://dev.webinos.org/redmine/issues/916)
    -   Need for Device Discovery API? The conclusion was to have
        extension mechanism to the Service Discovey API where developers
        gets access to low level api’s so 3:e party developers could
        develop new discovery plug-in modules that could find new type
        of services. My view is that we should not expose a specific
        device discovery API
    -   Explanation on binding APIs to access discovered services to
        service object. Anders Isberg Action: [Service Discovery API:
        Explanation on access to remote
        Services](http://dev.webinos.org/redmine/issues/917)

<!-- -->

-   NFC API: Presentation by Dave,
    [NFC](http://dev.webinos.org/redmine/attachments/download/2157). New
    API will build upon ideas in the B2G, PhoneGap, Tizen, and webinos
    phase 1 APIs for NFC and aligned to the anticipated direction for
    the proposed W3C NFC Working Group. Dave Action: [NFC
    API](http://dev.webinos.org/redmine/issues/910)

<!-- -->

-   Payment API:
    -   Discussion objectives with Payment API. Dave Action: [Payment
        API - Initiate a discussion on the obejctives with the Webinos
        Payment API](http://dev.webinos.org/redmine/issues/911)
    -   Current API is agnostic to payment provider but opinions
        expressed that we need agreements with payment provider(s). Then
        it will be easy to create a payment API. Kamran Action: [Payment
        API - Discuss with conatcts on potential payment
        providers](http://dev.webinos.org/redmine/issues/913)

<!-- -->

-   W3C Gallery API: We refer to a W3C API that has been shelved by W3C,
    i.e. it is no longer worked on and supported. Stefano V Action:
    [Gallery API - Investigate candidates for Gallery API for webinos
    and propose a solution](http://dev.webinos.org/redmine/issues/914)

Issues on new proposed APIs[¶](#Issues-on-new-proposed-APIs)
------------------------------------------------------------

Slide 8 and 9.

Motivation / background for new APIs must be provided (comment from last
EU-review). See [mail June
5](https://listen.fokus.fraunhofer.de/sympa/arc/webinos-wp3-ml/2012-06/msg00021.html)
.

Actions for all owners of new APIs to provide this background
information and then edit the tangible API specification:

-   Generic Actuator API - Andre
-   oAuth API – Paolo
-   Telephone API – Nick
-   Privacy aware Location and Proximity API – Victor
-   Tethering API – Victor
-   Webinos management API - Habib

Regarding support for pulse meter demo Ziran has action [Add proposed
additional sensor types to Sensor
API](http://dev.webinos.org/redmine/issues/874)\
but stated that this is difficult as different pulse meters produces
different types of data. The alternative is a low level Bluetooth API.
Claes action: [Bluetooth API - Investigate existing Bluetooth API
solutions](http://dev.webinos.org/redmine/issues/921)

Web Intents for Webinos?[¶](#Web-Intents-for-Webinos)
-----------------------------------------------------

Slide 11 and 12.

[Web Intents for Webinos investigation wiki
page](/t3-4/wiki/Web_Intents_for_Webinos)

Did not take detailed discussion note. Issues are described at wiki
referred above.

**+Conclusion:+** Web Intents has a strong momentum within W3C, Google
and other players. We must investigate what Web Intents means for
Webinos but we can't take any decisions without further investigations
and prototyping. Investigation result will be included in the task 3.4
delivery report on August 31.

Actions:

-   Victor: [Web Intents demo for
    Webinos](http://dev.webinos.org/redmine/issues/922)
-   Claes: [Work in W3C Web Intents task force on Web Intents support
    for local Services](http://dev.webinos.org/redmine/issues/923)
-   Jean-Claude: [Work in W3C Web Intents task force on de-coupling Web
    Intents Agent from device
    browser](http://dev.webinos.org/redmine/issues/924)

