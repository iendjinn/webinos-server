Background - Context[¶](#Background-Context)
============================================

Introduction[¶](#Introduction)
------------------------------

The Context area addresses all issues relating to management of
contextual information (detection, acquisition, representation,
distribution,etc) as well as all the potential consequent capabilities
(such as content Adaptations and Reasoning) that could enabled by being
aware and process this information within webinos.

just check the sentence 'that could enabled by being aware' - (could
'be') to be added or?? (Krishna Bangalore)

Through webinos users will be able to access and use applications that
work across devices allowing them to have an uninterrupted usage
experience. Such a capability will eventually propagate activities,
events and even connections that users maintain to be expressed also
through the set of owned devices too. For example sharing a piece of
multimedia (photo, photo-album, a playlist) with another person within
the scope of using one application across several devices.

The innovation of the webinos approach in context framework is that it
structures the context data that occur from these activities/events that
are performed through connected devices in a way that could "make sense"
and make this information available in a privacy preserving way to
support the creation or context aware application that can provide a
better user experience.

Scope[¶](#Scope)
----------------

### What's in scope[¶](#Whats-in-scope)

The webinos context framework comprises the following items:

-   Context related Events and their occurring context data in the form
    of Context Objects, their Attributes and their Relationships - these
    are the entities that should be present in the model i.e. user,
    devices, apps, webinos events, webinos activities along with an
    initial set of attributes that pertain to every concept or entity as
    well as the way these entities connect among them.
-   The Form and Representation of the Context Model - specification of
    a suitable form and notation to represent the webinos context model.
-   A Storage and Extensibility Framework for the Context Model - where
    different part of the context model are stored, for example user
    context in the cloud, device context in the device and how these are
    linked among them. Additionally, the mechanism for creating custom
    context models, for example application context.
-   APIs for Context Data Acquisition and Access - identification of the
    (existing) APIs provided that can be used to acquire context data
    and the specification of on API to allow access to the stored
    context data in a homogenized way (i.e. one API that enables access
    to the entire context data volume in a privacy preserving way).

small correction in the spelling - Extensibility - corrected (Krishna
Bangalore)

### Whats out of scope[¶](#Whats-out-of-scope)

Currently the following areas are out of the scope of the webinos
context framework:

-   General data management and storage within webinos.
-   User ID management, privacy and security specificaiton within
    webinos.

Review of State of the Art[¶](#Review-of-State-of-the-Art)
----------------------------------------------------------

Context awareness and adaptation constitutes quite an extended area with
regards to underlying state of the art. The following dimensions have
been examined within the context awareness activities:

-   EU research projects that deliver relevant
    specifications/prototypes.
-   Existing and emerging standards that can enable context awareness
    and adaptations functionality with a focus in representing social
    activity.
-   Underlying technologies, academic research and prototypes coming
    either within or outside of the consortium.

Recommendations from state of the art[¶](#Recommendations-from-state-of-the-art)
--------------------------------------------------------------------------------

The underlying state of the art - particularly from dedicated context
projects - reveal some design patterns when it comes to designing
context oriented solutions, specifically:

-   Context is tightly related with the occurrence of events that
    signify the presence (or existence) of a situation.
-   Context data refer both to present moment but also to past (or even
    future) moments. This means that is is necessary to provide a
    storage facillity that holds not only current but also history
    context data.
-   Acquisition, Access or Reasoning of Context Data should take into
    consideration the User preferences, empowering the user to control
    or define these activities.

All the above points have been taken into consideration in designing and
later implementing the webinos Context Framework.

what are those conclusions?? Any brief idea?? (Krishna Bangalore) -
ADDRESSED by GeorgeG

