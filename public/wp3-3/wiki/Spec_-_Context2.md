Spec - Context[¶](#Spec-Context)
================================

-   [Spec - Context](#Spec-Context)
    -   [Conceptual Architecture](#Conceptual-Architecture)
    -   [Technical Use Cases](#Technical-Use-Cases)
        -   [Use Case1: Acquisition of Context Data from Context Related
            Events](#Use-Case1-Acquisition-of-Context-Data-from-Context-Related-Events)
        -   [Use Case2: Query for Context
            Data](#Use-Case2-Query-for-Context-Data)
        -   [Use Case3: Subscribe to Context Changes
            Updates](#Use-Case3-Subscribe-to-Context-Changes-Updates)
    -   [Formal Specification](#Formal-Specification)
        -   [1. Context Framework](#1-Context-Framework)
        -   [1.1 A context model for
            webinos](#11-A-context-model-for-webinos)
        -   [1.2 Context representation in
            webinos](#12-Context-representation-in-webinos)
        -   [1.3 User context in webinos](#13-User-context-in-webinos)
        -   [1.4 Device context in
            webinos](#14-Device-context-in-webinos)
        -   [1.5 Application context in
            webinos](#15-Application-context-in-webinos)
        -   [2. Context API](#2-Context-API)
        -   [3. Context Storage](#3-Context-Storage)
        -   [4. Context Reasoning](#4-Context-Reasoning)
    -   [Dependencies on other
        components](#Dependencies-on-other-components)

Conceptual Architecture[¶](#Conceptual-Architecture)
----------------------------------------------------

The webinos context framework provides access to contextualized data in
order to enable the design and operation of context-driven webinos
applications/services.

The framework is responsible for collecting and storing context data
(through the identification of specific context related events that
happen within webinos enabled devices) and providing applications with a
layer to access such data either by querying against the storage or by
being notified in real time for context changes (when specific events
happen).

In addition, the context framework is closely coupled with the webinos
policy and privacy enforcement framework in order to ensure secure
handling of the often highly sensitive context data that is stored.

The following schema describes the conceptual architecture of the
Webinos Context Framework and illustrates its connection to the
Policy/Privacy enforcement framework through the Policy Enforcement
Point.

![](Context-framework_v5.png)

Technical Use Cases[¶](#Technical-Use-Cases)
--------------------------------------------

George is a webinos user that has several webinos enabled devices, a
mobile, a desktop and a set top box.

The following short use cases describes the context data acquisition
process from context related events, Querying for Context Data using the
Context Query API and Subscribing to receive context data updates using
the Context Changes Subscription API.

### Use Case1: Acquisition of Context Data from Context Related Events[¶](#Use-Case1-Acquisition-of-Context-Data-from-Context-Related-Events)

George is updating his webinos profile by adding to it one of his social
network profiles (i.e. facebook). This activity constitutes a context
related event and triggers a context acquisition process at the device.
This means that (meta)data about George’s newly added social profile
will be added to his context data, provided that George has allowed for
such context data acquisition in his privacy settings.

<div class="uml">actor George
autonumber

George -> George_Device:Update Webinos Profile with Social Profile
George_Device->Personal_Zone_Proxy:Request Extracting Event’s context data

alt extracting the event’s context data has NOT BEEN authorized by the user
Personal_Zone_Proxy-> George_Device:Reject (terminate process)

else extracting the event’s context data has BEEN authorized by the user
Personal_Zone_Proxy-> George_Device:Accept (Proceed)
George_Device -> Personal_Zone_Proxy:Extracted Context Data
Personal_Zone_Proxy -> Personal_Zone_Hub:Synchronize Event’s Context Data in Storage

end</div>

### Use Case2: Query for Context Data[¶](#Use-Case2-Query-for-Context-Data)

George is at a coffee shop with a couple of his friends John and Jos.
George has bought (and downloaded in his mobile) a new single of one of
his favorite artist and wants to stream it to his friends devices. For
that he is using an app in his mobile that allows him to stream mp3s to
other (capable for playback devices). He is accessing his app, selects
his new mp3 and invokes device discovery using a social proximity
filter. The app, using the webinos discovery APIs, discovers several
devices around George capable of receiving streaming. In order to
prioritize the discovered devices (i.e. put at the top the ones George
is most likely to want to stream music to) the app uses the Context API
to Query for context data that illustrate if George’s device has
connected with any of the discovered devices in the past or if George
has any social connection with the discovered device owners.

<div class="uml">actor George
autonumber

George->App:Discover Devices in Social Proximity
App -> Personal_Zone_Proxy:Query for Context Data 

alt the App’s Query for context data has NOT BEEN authorized by the user
Personal_Zone_Proxy-> App:Reject (Terminate Query)

else the App’s Query for context data has BEEN authorized by the user
Personal_Zone_Proxy-> Personal_Zone_Hub:Query the Context Storage
Personal_Zone_Hub -> App:Query Results

end</div>

### Use Case3: Subscribe to Context Changes Updates[¶](#Use-Case3-Subscribe-to-Context-Changes-Updates)

George has a recommendations app on his mobile TV that he has set up to
provide him real-time recommendations for alternative broadcasts
whenever he is watching an adventure film during primetime
(21:00-00:00). The app is using the Context Change Subscription API to
get notifications in real-time whenever the user sets on his TV a
channel airing an adventure film between the hours 21:00 and 00:00.

<div class="uml">actor George
autonumber

George->App:Set Parameters for Recommendations 
App -> Personal_Zone_Proxy:Context Change Subscription 

alt context data acquisition (for the context event the subscription refers to) has NOT BEEN authorized by the user
Personal_Zone_Proxy-> App:Reject (cancel subscription)

else context data acquisition (for the context event the subscription refers to) has BEEN authorized by the user
Personal_Zone_Proxy-> App:Accept (subscription made)
Personal_Zone_Proxy -> Personal_Zone_Hub:Register Subscription for Context Changes

end</div>

Formal Specification[¶](#Formal-Specification)
----------------------------------------------

### 1. Context Framework[¶](#1-Context-Framework)

The scope of providing context-awareness within webinos is three-fold:

1.  To identify context related events and register (occurring) context
    data
2.  To enable context-aware behaviour for any webinos application by
    enabling secure access to context data regulated by user- policies
3.  To be able to transform various multi-media formats for web content
    based on context data (content adaptations)

Therefore the extent of the context framework in webinos is to define
and implement the most suitable mechanisms (in terms of context data
acquisition, representation, storage and access) in the webinos context
model in such a way that a range of any webinos applications literally
can start exhibiting context-awareness support enabled by the webinos
platform and runtime in a secure way.

The following sub-sections summarise key characteristics of the webinos
context framework.

**Support for creating context aware applications by enabling access to
context data**

Context-awareness support in webinos will allow applications to access
context data that can enable such a behavior, in particular:

-   Listen for context related events happening on device level, either
    by user activities (at device level) or by applications using the
    underlying APIs.
-   Subscribe to events across applications and devices that bring about
    changes in context data.
-   Retrieve stored context data of identified/subscribed,
    context-related, events.
-   Retrieve stored context data about the current device or a target
    device where an application is to be executed.
-   Retrieve stored context data about a specific user (i.e. device
    owner) or a particular application (i.e. an app receiving a message
    on a device).
-   Retrieve real-time updates of context data from context related
    events they have subscribed to.
-   Perform reasoning based on the underlying context data, for example
    evaluate the social proximity of discovered devices based on social
    connections of their owners or previous activity (i.e. sharing a
    device feature).

**Providing for the Secure and Privacy-aware access to context
information through user-negotiated policies**

Context-awareness support will be secured by dedicated access control
functions provided by a policy manager entity (the “policy enforcement
point”). This entity constitutes a global access point that provides for
secure and authorized access to context information, specifically:

-   Allow only the permitted applications to access context information
    about the user, the device, the application, etc.
-   Inform the user about context and personal information that is
    registered, accessed and shared by applications. This is with the
    exception of context information that is private for the application
    itself.
-   Provide access control to context structures through user-defined
    policies.
-   Implement the privacy policies that the user and the application
    negotiate between them.
-   Securely store associations between device, user and context
    information and provide this information based on user preferences.
-   Register their intent to access context information provided by the
    underlying webinos platform, given that the user permits the access
    to this context information originating from the webinos platform.
-   Ensure that the user is offered the possibility to understand and
    control the access to context information originating from the
    underlying webinos system for all applications that registers an
    intent.
-   Ensure the security and integrity of any context information that is
    privately created and stored by the application, so that attackers
    and users can not tamper with the stored or shared context
    information.

**Transform various multi-media formats for web content and
Context-driven adaptation support**

Devices in general do not support all available file formats for
transcoding various multi-media formats. The result is that some files
cannot be viewed in some devices, but should the content is presented on
another device it would render fine. Context information can be used to
identify what file types and codec support a device provides. After
obtaining this information, an application may sometimes need to
transform/ transcode the content into a new file or media stream. The
following support will be provided by the webinos platform to
application as part of its context-awareness functions:

-   Check device compatibility with certain file formats.
-   Provide embedded mechanisms that transform file formats.
-   Support the integration of external content adaptation services.
-   Use device context and user context as means to adapt the delivery
    and presentation of content.
-   Use context information for pushed content to trigger the
    installation of the correct application in case the application is
    not yet installed on the device that is receiving the pushed
    content.

In order to address the needs of a multi-device and cross-platform
applications, Webinos platform defines formalized way of describing
content and layout of the page to be able to provide an integration
layer that allows to integrate external adaptation services into the
platform. The following will be provided by the platform to support
variety of existing and future adaptation services:

-   Extensible integration layer that allows for third party adaptation
    services integration.
-   Support for input transformation filters that can transform content
    as per the required format for third party adaptation service.
-   Support for output transformation filters that can transform third
    party adaptation services output to format required by the platform.
-   Support for organizing filters into filter chains performing set of
    transformations over content.

Adaptation service input consists of:

-   Device Context information reflecting actual state of the device
-   Device user-agent string identifying the device/browser details.
-   Content to transform pre-processed by filtering mechanism to fulfill
    adaptation service requirements.

Adaptation service output consists of:

-   Transformed content that can be post-processed to meet requirements
    of Webinos platform.

### 1.1 A context model for webinos[¶](#11-A-context-model-for-webinos)

A model in general can be described as a systematic description of an
object or phenomenon that shares important characteristics with the
object or phenomenon. It can be seen as a representation of relevant/
important aspects of the target object or phenomenon that is being
described.\
Context describes aspects of a situation seen from an actor/ entity's
point of view. From such a viewpoint, context acquisition in webinos
becomes the process of sensing and gathering context information to help
enhance the quality and usefulness of the application. A context model
represents (or guides) how these (retrieved) data are structured
together in a way that makes sense. The approach in webinos, is to
define a very methodical way of handling context information. We believe
this will be important for application developers to be able to add
context-awareness to their application to benefit from it. In this
section, we present the foundations for representing context information
in webinos applications. It is based on a review of existing literature
in the field, including some EU-projects that have been working with
context-aware applications and services as well as the webinos partners
existing experience in the field.

**Relating context to how humans sense, think, and act**

Our human mind is episodic in nature. We remember artefacts, objects,
people, and information easier if we are able to remember/ recall
aspects of the situation in which we experienced the entities in. Not
only do we organise our thoughts and remember in an eposidic way, also
our human communication is full of associations and references to past,
present, future and imaginative/dreamt situations. Our cogntion helps us
to perceive, remember, recall, reason, and act. In neuro-science and
psychology one distinctinguishes between episodic and semantic memory -
see for instance Tulving (1972). Consider how we reflect upon printed
magazines in a book section; We might remember them according to the
front cover, an article, some photo we saw inside it, the title of an
article, a person in a picture, or the place we read the magazine. Some
of these ‘triggers’ can be difficult to capture, and record.\
Context-aware systems are to some extent trying to mimic this kind of
cognitive behaviour based on sensing, thinking, and acting in the
situation. If a living organism is acting well within a situation, then
one would typically say that the organism is adapting well to that
situation. The notion of adaptivity is therefore related to
context-aware systems. Remembering context in a software program is
therefore about creating a facility that stores the episodic information
captured in the situation.

**Definition of context**

There are many definitions of context. This is due to research in the
topic within computer science, information science, and artificial
intelligence.\
Context is much related to the notion of a situation. In some languages
the words 'situation' and 'context' are being used to describe each
other. For instance, "it is not the right situation for this yet" could
easily be rephrased to "at the moment the context is not right for this"
and mean almost the same. For our work, we will use the following
definitions: Situations exist in the real world. There are actors/
entities involved in situations. A situation endures over a period of
time. This is true whether the time is referred to as a point in time,
an hour, a day, at night, in the summer, and so on. We define context as
a description of the aspects of a situation.\
In this way, a context captures important aspects of a situation when a
context related event occurs. This means that someone has decided which
particular aspects that are more important/ matters more than others and
through which events these aspects can be captured. Context therefore is
an explicit representation of a situation. Capturing context information
can therefore be compared with taking a snapshot of a situation when a
corresponding event happers, where only the most important things are
being developed into the preserved "photo" (ref context).

The following figure depicts the relations between Situations, Context
data, Events and webinos Entities. An entity may be any person, thing,
or system that is being active or passive for that situation.

<div class="uml">Entity "involves   *" -- "is within   *" Situation 
Situation "describes aspects of a" -- "is represented by   *" Context 
Situation "is related to *" -- "is identified by *" Event</div>

**Which entity is the context for?**

In literature and in technical implementations there are many different
types of contexts mentioned. In general, it can be observed that context
means something different for the researchers and the application
developers. The naming of the context depends quite much on the entity
or actor the context is intended for. When sharing, debating, and
reasoning about context, because of its dependency on time, people often
discuss how context changes over time. This means that in webinos the
naming of contexts will reflect the actor/entity that is involved in the
situation as the subject:

-   Contexts that describes aspects of a user's situations are referred
    to as user contexts.
-   Contexts that describes aspects of an application's situations are
    referred to as application contexts.
-   Contexts that describes aspects of a device's situations are
    referred to as device contexts.
-   Contexts that describes aspects of a user's social situations are
    referred to as social contexts. A social context is for this reason
    considered to be sub-part of a user context.

In webinos, these four kinds of contexts have been referred to in the
user stories, use cases, and requirements. In terms of inheritance
diagram, these four identified types of contexts can be depicted in UML
as:

<div class="uml">Context <|-- UserContext
Context <|-- ApplicationContext
Context <|-- DeviceContext
Context <|-- SocialContext</div>

Please note that a social context is part of a user context, but that we
have not depicted this in this inheritance diagram. We will come back to
this composition relation (i.e. a part-of relation) in another UML
diagram below.

### 1.2 Context representation in webinos[¶](#12-Context-representation-in-webinos)

**Adressing the needs of each application and the platform**

Since the purpose is to enable any application to be context-aware,
there will be a wide variety of needs for representing context
information in webinos. Some of these needs will be individual for each
application. The context-awareness support therefore would need to cater
for all these demands as means to be sufficiently generic.

This is because context information that is relevant for one application
will most likely not be relevant for another application. Secondly,
context information that is individually captured, created and
maintained by one application will need data integrity, and
should/cannot not be taken out of context nor modified by another
application.

The exception to this is when the context information originates from
the webinos platform itself - for instance from a location sensor. In
such cases, since context information is generated by the underlying
platform, and it can be personally sensitive, applications will need to
negotiate their consent with the user to access this kind of context
information. Yet when they are authorized (by the User) to access and
use such context data these should be readily available to them through
the platform mechanisms. The latter is one of the basic objectives of
the webinos context framework.

**Structured vs. unstructured context information**

Having analysed multiple system approaches to modelling and representing
context, we have identified two main approaches for the representation
of context:

1.  Structured context information
2.  Unstructured context information

Unstructured context information can be thought of as a collection of
attributes or properties that have not been classified or categorised in
a data structure. For example the phrases "in the city, tomorrow,
meeting, Helen, Alice" is considered unstructured context information.
Text queries to a web search engine can be viewed as unstructured
context information. This approach is very suitable when it is difficult
to define a context structure due to the absence of data structures.

On the other hand, a structured approach to representing context
information reflects a view that it is desirable to have some
consistency and stability in the representation, categorisation, and
expression of attributes and relations. Context information have been
represented as tree structures, property lists, arrays, semantic
networks, graphs and so on. These context structures can either be
static or dynamic. A light weight way of representing structured context
information is the use of a list of property-value pairs. With
property-value pairs, we mean the same as attribute-value pairs.

Here are two examples of such a light weight representations of context
information:

1.  "color=pink, interior=light-beige, buyer=Peter, car=BMW".
2.  "location=home, orientation=vertical, device=Experia Neo,
    time=yesterday".

In webinos, we have chosen to represent context as a hierarchical
tree-based representations of situations. The first reason for this is
that tree-structures can be mathematically proven to be a list of
elements. The second rationale is that unstructured information can
always be represented in a structure. With this is we gain the
possibility to categorise and sub-categorise the context information
where unstructured information is just categorised in one category. This
gives the developer community the opportunity to better organise and
group context information together, and to also handle unstructured
context information if needed.

**The context strucure in webinos**

The class diagram below shows core of all webinos context structures. A
context has attributes with values. One can also add relations with
other entities. A context has:

-   Name
-   Privacy
-   Attributes

A context can consist of sub-contexts to better group attributes
together, although this would not be needed if there are few context
attributes. The below class diagram for context information can
described with: context can consist of several sub-contexts, and a
context can be part of another context. A context will always comprise
one or more attributes.

<div class="uml">Context o-- "*" Context : can be part of
Context  *--  "*" Attribute
Context "*" -- "*" Entity : can be related to
Attribute o-- ValueRange
Attribute o-- ValueSet


class Context {
+ Name: String
+ Privacy: int
}

class Attribute {
+ Name: String
+ Value: DataPrimitive
}</div>

Each context attribute has a name and a value. The type of the context
attribute is a data primitive (e.g. Boolean, integer, float, double, or
string). In many cases it will be sufficient to just use string as the
data type for a context attribute.

However, it is not always needed to have attributes at the top-levels of
the context if the top-level context consists of several sub-contexts.
In this case, the attributes of the sub-contexts qualify the top-level
context to be a context in its own right. This approach to organise
contexts information allows for making meaningful contexts without
including attributes at the top-level context - as long as there are
attributes at the bottom level contexts in the structure.

The benefit of this, is that chunks of context attributes can be copied
from one context instance to another. For example, if a device context
contains a location attribute, one can copy this entire attribute for in
the user context structure. This makes the reuse of context information
across context instances effective.

**Attributes can have value sets and ranges**

In some cases it is desirable to constrain the possible values for
specific attributes. It is desirable on these cases to achieve this
through the use of finite value sets or ranges. For instnace, an
attribute with name="Capitol", type=string, could be constrained to the
values = {"London", "Edinburgh", "Berlin", "Rome", "Madrid", "Istanbul",
"Paris", "Athens", "Warsaw"}.

Here are some examples of value ranges:

-   [10, 1000], (integer)
-   [0.1, 0.12\>, (float)
-   \<-1.0, 1.0\>, (complex)
-   [false, true], (Boolean)
-   [June 1 2010, Aug 31 2010], (date)
-   [\*], (integer)

Here are some examples of value sets:

-   {"Cyan", "Magenta", "Yellow"}, (string)
-   {"None", "Little", "Medium", "High"}, (string)
-   {"A2", "A3", "A4", "A5"}, (string)
-   {10, 15, 20, 25}, (integer)
-   {false, true}, (Boolean)
-   {Jun 1 2012, Feb 1 2012}, (date)
-   {\*}, (string)

The data primitive of the value (i.e. type) are indicated in brackets.

### 1.3 User context in webinos[¶](#13-User-context-in-webinos)

The following user context model describes aspects of a situation seen
from the user's point of view (Myrhaug and Goker, 2003). This is
proposed as a framework for exploiting user contexts within and across
application domains. We believe this to be a comprehensive model that
can be used with a wide range of applications involving user contexts.
The structure is designed to enable effective matching and retrieval of
contexts. The user context structure consists of five sub-contexts:

-   Environment context
-   Personal context
-   Task context
-   Social context
-   Spatio-temporal context

Each sub-context should be considered as a container where an
application developer can insert the important context attributes with
values and types needed in the particular context-aware application, see
the UML class diagram below that shows the various parts of the user
context model:

<div class="uml">User "1" -- "*" UserContext : is related to
UserContext o-- SocialContext
UserContext o-- TaskContext 
UserContext o-- PersonalContext
UserContext o-- EnvironmentContext 
UserContext o-- SpatioTemporalContext

class PersonalContext {
+ MentalContext
+ PhysiologicalContext
}</div>

**Environment context**

This part of the user context captures the entities that surround the
user. These entities may be (but are not limited to) things, services,
temperature, light, humidity, noise, and persons. Information (e.g.
text, images, movies, sounds) that is accessed by the user can be linked
to the environment context. The various networks that are in the
surrounding area can also be described in the user’s environment
context.

**Personal context**

This part of the user context consists of two sub contexts: the
physiological context and the mental context. The physiological context
contains information such as pulse, blood pressure, weight, glucose
level, retinal pattern, and hair colour. The mental context contains
information like mood, interests, expertise, angriness, stress, etc.

**Task context**

This context describes what people are doing. The task context can be
described with explicit goals, tasks, actions, activities, or events.
Note that this can also include other persons’ tasks that are within the
situation. For example, considering a car with a driver and passengers,
the situation can include the driver driving the car, passengers doing
various activities such as reading, watching the car TV, and listening
to music on the personal stereo. The task context of the driver and the
passengers will be different.

**Social context**

This context describes the social aspects of the current user context.
It can contain information about friends, neighbours, co-workers,
relatives, and their presence. One important aspect in a social context
is the role that the user plays in the context. A role can for instance
be described with a name, the user’s status in this role, and
connections to the tasks in the task context. A role can, in addition,
be played in a social arena. A social arena can have a name like “at
work”.

**Spatio-temporal context**

This context aspect describes aspects of the user context relating to
the time and spatial location for the user context. It may contain
attributes for time, location, direction, speed, shape (of
objects/buildings/terrain), track, place, clothes of the user and so on
(i.e. the physical extension of the environment and the things in it) .

**Validation of the user context model**

Below, we relate others’ work on context models within the model above.

Environment context captures the entities around the user. It includes
objects of the surrounding environment (e.g. buildings, outdoor
facilities, infrastructure) and their state (i.e. temperature, light,
humidity, noise). It also describes information – what Lucas (2001)
calls information context – as part of the environment. Furthermore,
devices that reside in the users’ vicinity are also accounted for as
part of the environment. Attributes of these devices define the extent
with which personalisation can be performed (Chalmers and Sloman, 1999).
Examples include the processing power, screen size/resolution, colour
support, sound capabilities and the kind and number of input devices.
Similar to Goker and Myrhaug, (2002), Schmidt, Biegl, and Gellersen
(1999) also categorises contextual information about device(s) as part
of the physical environment.

Personal context is equal to the user information that is stored in a
typical user model (as also discussed later in following section). It
can be distinguished into user’s physiological context (e.g. age or body
weight) and user’s mental context (e.g. interest). This is similarly
described in Schmidt, Biegl, and Gellersen (1999), that states that
”information on the user comprises for instance knowledge of habits,
mental state or physiological characteristics”. Attributes that are
represented by the mental context can generally be found in user models.
Examples include user’s identity, preferences, knowledge and skills as
listed in Reichenbacher’s context model (2007). User’s interest is one
of the most important attributes that is commonly modelled in most user
models and has been widely applied in personalised information systems
(Brusilovsky, 1996).

Task context contains information about what the user is doing or aiming
for. It describes ”the functional relationship of the user with other
people and objects” (Bradley and Dunlop, 2004), including the benefits
and constraints of this relationship. It can be modelled as explicit
goals, actions and activities. User’s activity is a common type of
context in a number of context models such as the one described in
Reichenbacher (2007) as well as Chalmers and Sloman (1999).

Social context represents the social environment of a user. It may
describe users’ relationships to like-minded people that are connected
to the user. Social filtering systems implement one special kind of
social context modelling (Griffith and O’Riordan, 2000). The
recommendation output is solely based on a user being similar to other
users who rated items previously. This social connection is then
exploited to recommend more items. Social filtering systems have
demonstrated good results for a range of relevant topics such as music
(Shardanand and Maes, 1995) and news (Resnick et al., 1994). Social
context may model a user’s list of friends or colleagues – perhaps
explicitly expressed by that user or implicitly acquired through an
email address book or buddy list on a website.

Spatio-temporal context represents physical space and time. The spatial
aspect represents physical space. Location is the most common aspect of
a spatial context. Mobile guides such as Cyberguide (Abowd et al.,
1997), GUIDE (Cheverst et al., 2000) and the CRUMPET system (Zipf, 2002)
belong to a special class of applications that are commonly referred to
as location-based services. Based on its relevance, location modelling
has emerged as one research branch in location-based services; a
comprehensive overview is provided in Jiang and Yao (2006). Many
location-based services employ location for the personalisation of
geographic maps. Location can be represented either geographically or
semantically as described in Beigl (2002). The geographic representation
exhibits locations by its position (i.e. coordinates provided from the
Global Positioning System (GPS)). On the other hand, the semantic
representation describes locations in a more descriptive and humanly
understandable way, yet still able to be processed by a computer. The
comMotion system described in Marmasse and Schmandt (2000) for example
learned meaningful locations semantically by analysing users’ GPS logs
over time. Besides location, spatial context also models attributes such
as the direction of movement, the viewing direction and the speed of
movement.

The temporal aspect, of the spatio-temporal sub-context, refers to time
and can be represented as an absolute measurement or in a more relative
manner (e.g. ’in the evening’ or ’before a meeting’). In Hull et al.
(1997), time is part of the users’ environment. Similarly, Reichenbacher
(2007) views it together with location as part of a situation. In
Schmidt, Biegl, and Gellersen (1999), temporal context is related to all
other context attributes representing the contextual change of those
attributes over time. In Bradley and Dunlop (2004), temporal context is
described as being ”embedded within everything, and is what gives a
current situation meaning...”.

Overall, although there is some empirical work (Bierig and Goker, 2006)
that investigates more closely a context model and its attributes, there
is generally a lack of empirical work for investigating the relation
between various context attributes.

### 1.4 Device context in webinos[¶](#14-Device-context-in-webinos)

The following device context model describes aspects of a situation seen
from the device's point of view. This is proposed as a framework for
using device contexts within and across webinos applications. As with
the user context, we also believe this to be a fairly comprehensive
model that can be used with a wide range of applications involving
device contexts. It is anticipated that most, if not all, device context
information can be sub-categorised and stored within this generic
structure. The device context structure consists of five sub-contexts:

<div class="uml">DeviceContext o-- SensorContext
DeviceContext o-- DisplayContext
DeviceContext o-- SoundContext
DeviceContext o-- SystemContext
DeviceContext o-- NetworkContext</div>

**Sensor Context**

A sensor context contains context attributes where the values of the
context attributes originates from sensors connected to the device. It
describes the sensor aspects of the device. It can contain information
originating from any sensor on the device. Some examples of sensors may
result in the storage of context data are: light, camera, motion,
location, touch, temperature, biometric, microphone, keyboard, mouse,
and near-field communication. One important aspect for the sensor
context it therefore to be able to make sensors update contexts.

**Display Context**

The display context describes aspects of the display(s) connected to the
device. The context information may be (but are not limited to)
describing the screen, the type, the identifier, the resolution, the
color depth and format, if it is a 3D enabled display, its standby
state, the application being displayed, its luominosity and so on. One
could also store attributes data about a as well as the shape of the
display shape, text and line drawing capabilities.

**Sound Context**

A sound context is meant for capturing and storing context information
about the sound context of the device. This can include information
about the available loud speakers, the headset, the system volume, the
supported sound qualities such as mono, stereo, surround, and
environmental sound. It could be if the sound is muted, what the balance
between the loud speakers is set to, the various acoustic levels in the
surroundings, whether there is a microphone available or not, the type
of microphone connected, the sound card that is installed and so on.

**System Context**

This part of the device context captures the local system capabilities
of the device. The context information categorised within this can be
(but not limited to) processor, work load, identifier, name, model,
operating system, webinos runtime. Power consumption, battery, battery
status, hardware devices, multi-media codecs available, mime types
supported, the supported HTML version, the supported CSS version,
available applications, available displays, available braille devices,
printers, USB disks, hard drives, flash drives, database drivers,
filesystem, cloud system folders and so on.

**Network Context**

A network context describes aspects of the various networks that the
device either currently is conntected to - or the network bearer
capabilities assumed available on the local device. For applications
using network context, one could for instance foresee the likelihood of
capturing various network topologies, the bandwidth of a network,
measures of physical distance between network nodes, measures of latency
between network nodes, degrees of trust for network nodes etc.
Furthermode, the various attributes could be described for WLAN,
Bluetooth, USB, GSM, Ethernet, Firewire, children. Nearby/ connected
devices could be added to the network context, such as mobile phones,
printers, displays, payment terminals, laptops, car infotainment system
and so on. This, a network context is related to Quality of Service
(QoS) aspects of the network and node connectivity.

### 1.5 Application context in webinos[¶](#15-Application-context-in-webinos)

The following application context model describes aspects of a situation
seen from the application's point of view. This is proposed as a
framework for using application contexts within and across webinos
applications. As with the device context, we also believe this to be a
fairly comprehensive model that can be used with a wide range of
applications involving application contexts. We believe that there is a
potentially large amount of context information can be sub-categorised
and kept within this structure. The application context consists of the
following four sub-contexts:

<div class="uml">ApplicationContext o-- ProviderContext
ApplicationContext o-- ResourceContext
ApplicationContext o-- RuntimeContext</div>

**ProviderContext**

The provider category contains information that is related to the
provision of applications data and content. It can be information about
the provider of the application, such as the name, the authority, the
access period, if the application is enabled, and so on. It can also
contain information about what type of content/data that the application
is capable of offering to other applications including the webinos
platform. This could be sound, images, contacts, business cards etc. For
instance, if two applications on the same device would like to provide
contacts, because the user is creating contacts within each application,
there is the issue of negotiating permission with the runtime to be able
share this with other applications in a standardised way. Secondly, if
an application would like to make some of its data public, one could
alternatively specify new attributes and make them public.

**ResourceContext**

This context describes aspects of the resources available for the
application. It can contain information about the originating app store,
raw data, layouts, menus, preferences, settings, storages, XML files,
and so on. With resources we mean the resouces available for the
application, whether it is downloadable or hosted.

**RuntimeContext**

Context information relating to various runtime components could be
included in this category. This could be context data about activities,
widgets, activities, services, servers, etc. Furthermore, one could
include information about the state of the runtime, the required runtime
for an application to work, the required libraries, the minimum
libraries that has to be present, the minim html version that is needed
and so on.

### 2. Context API[¶](#2-Context-API)

The context API constitutes a layer that enables applications to access
the underlying volume of contextual data in a uniform way. It provided
two APIs that allow applications two different modes of accessing
context data:

-   Query API, enabling applications to perform queries for particular
    context data in the storage.
-   Change Subscription API, enabling application to subscribe for
    specific events that bring about a change in context data and be
    notified in real time when such events happen.\
    The following code extracts are an exemplary of the two APIs which
    are defined in detail in 3.2 along with the rest of the webinos
    APIs.

<!-- -->

    interface ContextManager {
        void executeQuery(in QuerySuccessCallback successCallback,

                          in QueryErrorCallback? errorCallback,

                          in Query query)

             raises(ContextError);

        void subscribeContextEvent(in SubscribeSuccessCallback subscribeSuccessCallback,

                          in SubscribeErrorCallback? subscribeErrorCallback,

                          in OccuringEvent eventHandler,

                          in DOMString eventIdentifier)

             raises(ContextError);
    }

### 3. Context Storage[¶](#3-Context-Storage)

The Context Storage component deals with storing and returning
contextual data. Based on the diversity of devices and operating systems
which are to be supported by the webinos platform, pinpointing a
specific storage technology and bringing it to all devices/platforms is
nearly impossible. This is why, the component operates a connector model
in order to make the storage operations independent from the underlying
database and operating system. As already mentioned, the design decision
is made in support of system portability and flexibility. By providing
additional connector implementations, the Context Storage component can
connect to various types of database technologies (e.g. relational
databases, graph databases, triple stores, etc.). Connectors can be
created by the third party webinos developers and should be deployable
at runtime.

    Interface ContextStorage{

        StoreConnector connect(in string connectorID);

        StoreConnector connect(in string connectorID, in object properties);

        object getConnectors();
    };

    Interface StoreConnector{

        boolean execute(in string statement);

        object executeQuery(in string query);

        int executeUpdate(in string update);

        object getStatus();

        void close();
    };

Store connectors can be implemented for traditional relational database
management systems (RDBMS) such as SQLite or MySQL. On the other hand,
this approach also supports but does not enforces the use of storage
mechanisms optimized for context-data persistence. Graph databases for
example are a type of NoSQL database. The graph database approach
differs from RDBMSs as it uses oriented graph structures to store data
rather than in tables. All information is represented by means of the
graph's nodes, edges, and properties. Nodes are used to represent
entities, whilst properties can be added to provide additional
information regarding an entity. In turn, the edges define node-to-node
and node-to-property connections and thus represent a certain
relationship between the two connected items.

The pros and cons of such an approach are:\
+ High flexibility by allowing nodes with dynamic properties to be
linked arbitrarily to other nodes.\
+ High scalability of NOSQL databases.\
- Lower efficiency in batch processing compared to RDBMSs.

  ---------- --------------- ------------------------------------- --------------------------------------
  **Name**   **Platforms**   **License**                           **URL**
  Neo4j      Java            Dual: GPLv3 and AGPLv3 / Commercial   <http://neo4j.org/>
  FlockDB    Java            Apache                                <http://github.com/twitter/flockdb/>
  ---------- --------------- ------------------------------------- --------------------------------------

Another example of database systems optimized for context storage are
triple stores. As with graph databases, triple stores also rely on graph
structures for storing data. In particular, triple stores provide an
optimized mechanism for the persistent storage of RDF triples. Compared
to graph databases, where focus are mainly the characteristics of the
graph (e.g. distances, reachability, etc.), triple stores mainly aim for
optimized query processing and knowledge inference. The built-in support
for semantics and formal RDF inference rules provides better means to
extract new triples. The main language for performing RDF queries is
SPARQL (Simple Protocol and RDF Query Language). SPARQL is standardized
by the W3C RDF Data Access Working Group (DAWG). It enables flexible
queries consisting of triple patterns, conjunction/disjunction patterns,
as well as optional patterns.

The pros and cons of a triple store approach are:\
+ Both data format and query language are standardized.\
+ Unlike RDBMSs, triple stores are optimized for intensive use of query
and insertion operations.\
- The development of triple stores is still in its inital phase. Lots of
triple stores are built on top of traditinoal RDBMSs, possibly
introducing performance issues.

  -------------- ------------------------------------------- ------------- ---------------------------------------------
  **Name**       **Platforms**                               **License**   **URL**
  Jena SDB       Java                                        BSD           <http://openjena.org/>
  AllegroGraph   Windows, Mac OSX, Linux, FreeBSD, Solaris   Commercial    <http://www.franz.com/agraph/allegrograph/>
  -------------- ------------------------------------------- ------------- ---------------------------------------------

### 4. Context Reasoning[¶](#4-Context-Reasoning)

Context reasoning is needed in order to infer new facts from instance
data and class descriptions in the Context Storage. The reasoners are
thus the objects that perform the task of deriving additional
information. The reasoning process allows the system to derive
higher-level context data, by combining lower-level knowledge
originating from device sensors, or applications. The reasoning
component is pluggable, supporting the addition of specialized reasoning
capabilities that are optimized for a specific task and/or environment.

![](http://www.wafl.ugent.be/webinos/high-level-context.png)

First of all, there is often a need for sensor data fusion. This action
aims at integrating different context sources in order to make the
available knowledge more reliable. A well known example is the
integration of location-aware sources. A user's location can be obtained
from various sources: GPS positioning, cell tower triangulation, IP
geolocation lookup, etc. All these source have varying accuracies,
ranging from a few meters to several kilometers. Especially when users
own multiple devices, sensor data fusion can be used to further enhance
the precision of contextual data such as location. Context reasoning is
a challenging task, as there must be a mechanism in support of mapping
lower-level context data to higher-level knowledge. Context reasoners in
general rely on two approaches for mapping different levels of context
data: the use of ontologies (e.g. OWL), and the use of probabilistic
reasoning to produce probabilistic models.

    Interface Reasoner {

        Reasoner bindOntology(in object axioms);

        void run();

        object getStatus();

        object getInferenceResults();

        void setProperty(in string key, in object value);
    };

A number of good RDF/OWL reasoners are already available. For example
Pellet, an advanced OWL reasoner. The Jena Reasoner on the other hand
provides an extensible, which allows a wide range of inference
engines/reasoners to be plugged into the Jena platform.

  ---------------- --------------- ------------- ---------------------------------------------
  **Name**         **Platforms**   **License**   **URL**
  Jena Inference   Java            BSD           <http://openjena.org/>
  Pellet           Java            AGPLv3        <http://www.franz.com/agraph/allegrograph/>
  ---------------- --------------- ------------- ---------------------------------------------

Such a reasoner approach could be easily implemented on top of the basic
mechanisms of the Context Framework in webinos, i.e. the context
acquisition, the access APIs and the context storage.

Dependencies on other components[¶](#Dependencies-on-other-components)
----------------------------------------------------------------------

The webinos Context Framework presents interdependencies with
practically every other area in the system. This is primarily due to the
nature of context, i.e. it needs to be aware of what is “happening” in
the system and acquire/provide access to relevant context data.

Specifically two broad lines of interdependencies can be identified:

-   Monitoring the operation of several areas (Discovery,
    Authentication, Messaging, Analytics, API calls, etc) in order to
    identify context related events, track their occurrence and acquire
    the necessary context data for describing the corresponding
    situation.
-   Adopting the implemented Privacy framework in order to ensure a
    privacy preserving operation of the entire Context framework,
    meaning allowing the user to enable or disable tracking of context
    data, enforcing applications to inform the user about their
    intention to access and use his context data, empowering the user to
    allow or not applications to access his context data.

