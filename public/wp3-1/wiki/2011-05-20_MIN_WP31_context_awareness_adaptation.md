2011-05-20 MIN WP31 context awareness adaptation[¶](#2011-05-20-MIN-WP31-context-awareness-adaptation)
======================================================================================================

**Participant**\
GeorgeG (NTUA)\
Heiko (IBBT)\
Dieter (IBBT)\
John (Oxford)\
Grzegorz (Antenna Volantis)\
Christian Fuhrhop (Fraunhofer FOKUS)\
Ronny (T-Systems)\
GeorgeV (VisionMobilie)\
Hans (AMBIESENSE)\
Iosif (NTUA)

**Item1.1: Identify Concepts and (initial) attributes in the context
model**\
GeorgeV/GeorgeG: To provide an Analytics Framework that can work
side-by-side with context awareness we need to sort-out two things:\
define the level of detail of the required (to be captured information)
for analytics to work\
define the frequency of collection of such information and the
collection mechanism

GeorgeV: An additionall architecture to context awareness needs to be
proposed for collecting Analytics Data (by Friday May 27th)

Christian: we need to be able to represent within webinos the
information about the User’s social connections (i.e. in an online
social network) YET we should opt for a solution that will not duplicate
the data (relationships) that the user has in online platforms

John: by default Apps will not be given access to “anything”. Probably
upon installation time they will ask the User for the right permission
to use specific information. In particular when a User is not logged
into his Personl Zone by default he does not give away anything

GeorgeG: Do we have a list of permissions already defined???

John: Currenlty we have not any permissions defined. It is a good
opportunity to start doing it within the Context Awareness part. We need
to keep in mind that in different situations users with to associate
themselve with different identities (i.e. at work use my linked in
profile at home my facebook profile)

John: Default policies in WAC - low down the page -
<http://public.wholesaleappcommunity.com/redmine/embedded/wac2pubrev/core/widget-security-privacy.html>

GeorgeG: NTUA will contribute in defining permissions.

Heiko: Are we planning to combine objects/attributes at a higher level
to assist functions such as proximity or others?

GeorgeG: for the moment we do not have such an approach but we could
examine such possiblities when we have an analytic list of the context
objects. we will provide this within the next week by Friday May 20th.

Grzeq: we could make some structuralized information - i.e.
location-street-citgy - but be carefull to combine information that
represent true items in a meaningful way.

Ronny (later on a phonecall with GeorgeG): we should design a URI
structurte in order to point to external user profiles in social
networking platforms. then we canl supplement the User profile in
webinos by adding a “relationships []”.

**Item1.2: Define the Form and Representation of the context model**\
Hans: our view is to have context models or representations for each
applications. Each application can define/use its own model. Each
objects have a list of attributes and all attributes should be under a
namespace, we need to discuss what the form of this namespace should be?

GeorgeG: can we setup a different page about what we do in Form and
Representation of the Context model

Hans: OK

Hans: instead of returning a JSON string we could return a serializable
object (i.e. a photo).

GeorgeG: JSON was chosen as a form to return descriptors of information
(i.e. the URI of a photo object (Heiko)) but also to have a common
format across webinos platform (referencing NAllot).

Hans: for computational purposes we could examine having a context
object which is then represented in JSON.

Heiko: Agree with JSON representation

GeorgeG: Hans to create new page linked from Item 1.2 (Define the Form
and representation of context model) and put his research there for
everybody to see and contribute.

**Item1.3 Define the Storage and Extensibility Framework**\
Heiko: we are currently looking at things such as couch DB and
approaches of retrieving data form Android Devices and synchronising
them up in the cloud. The list also contains more things i.e. graphDB
Neo4J.

Dietter: As the list in 1.1 become richer we can use this as a basis.

GeorgeG: I will do some research on defining access Policy.

Hans: could you talk a bit more aobut the differences of couch DB vs.
SQL.

Dietter: it is document base and supports JSON.

Hans: Scalability can be an issue

George: Several various database technologies were already discussed,
but no decission was done.

George: Scalability is very important and needs to be deeply discussed.

Dieter: Scalability should not be the main driver of the architectural
approach.

George: Agree, but scalability cannot be left off. The more scalable
solution we have, the better.

Hans: Did you do any research on synchronization of couch DB?

Heiko: Not yet. We need some time to check it.

Dieter: The synchronization mechanism will have to very sophisticated.
Sometimes user does not want specific information to be stored on
device. Synchronization will be supported on level of PZ and PZH

Dieter: Let’s create WIKI page with all details and solution comparison
to help us decide what to choose.

