Related Academic Work[¶](#Related-Academic-Work)
------------------------------------------------

This section covers the key related academic material and concludes with
an explanation for how these have been taken into account in the webinos
security framework.

### Papers[¶](#Papers)

#### Exposing additional capabilities to web browsers[¶](#Exposing-additional-capabilities-to-web-browsers)

The Gibraltar system ([Gibraltar](Gibraltar.html)) takes a similar
approach to webinos in exposing device-level capabilities to web
browsers. This work takes a capability approach (issuing tokens to
trusted sites) in contrast to the policy-based system implemented in
webinos.

#### Cross-device synchronisation[¶](#Cross-device-synchronisation)

The Cloudberry system ([Cloudberry](Cloudberry.html)) is related to
webinos but is more cloud-driven.

#### Access control, permissions and API security[¶](#Access-control-permissions-and-API-security)

-   "On the Incoherencies in Web Browser Access Control Policies,"
    ([Singh2010](Singh2010.html))
-   "How to ask for Permission" ([PorterFelt2012](PorterFelt2012.html))
-   "Android Permissions: User Attention, Comprehension, and Behavior"
    ([PorterFelt2012b](PorterFelt2012b.html))
-   "The Effectiveness of Application Permissions"
    ([PorterFelt2012c](PorterFelt2012c.html))
-   "An Evaluation of the Google Chrome Extension Security Architecture"
    ([Carlini2012](Carlini2012.html))
-   "Privilege Separation in HTML5 Applications"
    ([Akhawe2012](Akhawe2012.html))

#### Web Browsers[¶](#Web-Browsers)

-   The Gazelle Web Browser ([Wang2009](Wang2009.html))
-   The Tahoma Web Browser ([Cox2006](Cox2006.html))
-   FlowFox ([DeGrouf2012](DeGrouf2012.html))

#### Mobile Malware[¶](#Mobile-Malware)

-   An analysis of Android malware is presented in
    ([Zhou2012](Zhou2012.html))
-   A wider survey of mobile malware can be found in
    ([PorterFelt2011](PorterFelt2011.html))

#### Principles and Design patterns[¶](#Principles-and-Design-patterns)

-   Chapter 10 of ([Garfinkel2005](Garfinkel2005.html)), and an analysis
    of their application to the web by The University of Oxford
    ([LyleBlog2012](LyleBlog2012.html)).
-   We aim to avoid the Privacy Pitfalls described by Lederer et al.
    ([Lederer04](Lederer04.html))
-   We also aim to follow the principles outlined in the classic Saltzer
    and Schroeder paper ([Saltzer75](Saltzer75.html)).

More details of our guiding principles are available in the D3.5
deliverable.

### Workshops[¶](#Workshops)

W3C API Security and Privacy Workshops from 2010 and 2008

-   ([W3CApiSec](W3CApiSec.html))
-   ([W3CApiPriv](W3CApiPriv.html))

### Recommendations for webinos[¶](#Recommendations-for-webinos)

-   The principle of least privilege should be followed through the
    policy architecture.
-   Motivations and attacks based on existing mobile malware should be
    fed into risk analysis.
-   Recommendations for web application based on the Google Chrome
    Extension Security Architecture should be considered as part of the
    security architecture.
-   Garfinkel's design patterns - install before execute - are relevant
    for webinos.
-   We recommend the use of status icons ("Sensor Widgets") based on the
    Gibraltar paper for consideration as a future webinos security
    control.

