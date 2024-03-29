Webinos Context Framework[¶](#Webinos-Context-Framework)
========================================================

Conceptual Architecture[¶](#Conceptual-Architecture)
----------------------------------------------------

The webinos context framework provides context access to other
context-driven webinos applications/services. The framework is
responsible for context collection, storage, reasoning, querying, etc.
requested by context-driven webinos applications and services. In
addition, this context framework is closely coupled with the webinos
policy and privacy enforcement framework in order to ensure secure
handling of the often highly sensitive context data that is stored.

![](http://dev.webinos.org/redmine/attachments/599/Context-framework_v4.png)

Technical Use Cases[¶](#Technical-Use-Cases)
--------------------------------------------

### Use case: Which device to use to view my photo album?[¶](#Use-case-Which-device-to-use-to-view-my-photo-album)

Up to now, connections over social networking platforms can be described
across two broad areas:

1.  Connecting with people through some social media platform, i.e.
    friending or un-friending someone, following and un-following,
    asking and receiving answers, subscribing, or un-subscribing to his
    stream, retransmitting or replying to someone’s posts, etc.
2.  Connecting with content-items on some social media platforms, i.e.
    liking a page, posting a status update, commenting on a post,
    sharing a link, tagging a photo, rating a review or a video,
    rsvp-ing to an event, etc.

The collection of all connections for a profile constitutes the
profile’s social graph. In the majority of online social networking
sites, the underlying social graph does not contain the concept of a
“device” as an endpoint in a social connection. This is expected since
the device is the technological medium through which any user - when
authorized - can create social connections with other users or items (as
shown above). As a result we have very little knowledge on the
“connection” a user may have with a particular device. Yet, in the
(near) future, we will be able to access and use applications that work
across devices allowing us to have an uninterrupted usage experience.
Capabilities such as migrating the session of an application from one
device to another or seamlessly accessing and sharing content among
applications running on different devices that (could) belong to
different users are in the core of several research initiatives today.
Having the capability to use applications across devices allows the
connections that users maintain among themselves to be propagated to
their set of owned devices too.

Let’s try and see a potential use case of this situation. It is Friday
afternoon, Lia with a couple of her colleagues step into a bar across
their office building to have some drinks before the weekend starts.
George, who works in the same area, is also there with some colleagues
for drinks. Lia and George have never met before. That afternoon the two
companies sit side by side. Lia and George meet, they start talking,
have some drinks, and quickly the two companies mix. Lia uses her
smart-phone to take some pictures of the whole company having fun
together. She creates a new album "Friday Evening Happy Hour". Lia has
this new application installed on her device called "CrazyHats" which
uses photos from an album and puts funny looking hats on the persons in
it. Using the application she puts some funny looking hats on a photo of
her and George. After modifying the picture, she clicks the "share"
button to share it with George. She gets several options, i.e. share in
Facebook, share in Twitter, send as email, share with another device. As
they have just met, Lia does not have any connection with George through
her social networks. So she clicks the “share with another device”
option. Her phone discovers George's tablet among a number of other
devices of their friends who are nearby and have enabled bluetooth
discovery. She selects it, the handshake is completed and she passes him
the photo. After a couple of hours, the evening at the bar comes to an
end and George invites all the company to continue the evening at his
house which is nearby. The company heads over to George's house. In the
meanwhile Lia has processed all the photos in the "Friday Evening Happy
Hour" album using “CrazyHats” and now all the members of the company
have funny hats on them in the photos. George thinks it will be fun for
everyone to see the pictures together. Since Lia's smart-phone has a
very small screen, so they decide to use George's HD TV to view the
photos. Lia selects the album on her device and again she hits the
"share" button. This time George's TV comes right on top of the list
with a small label "suggested device" next to it. She selects this
option, George approves it and soon the whole company watches their
photos on high definition.

### Sequence diagram analysis[¶](#Sequence-diagram-analysis)

TODO: Sequence diagram analysis that reconciles the conceptual
architecture with the user cases, eliciting issues as we go

Formal Specification[¶](#Formal-Specification)
----------------------------------------------

### Context API Component[¶](#Context-API-Component)

TODO

### Context Storage Component[¶](#Context-Storage-Component)

The Context Storage component deals with storing and returning
contextual data. Based on the diversity of devices and operating systems
which are to be supported by the webinos platform, pinpointing a
specific storage technology and bringing it to all devices/platforms is
nearly impossible. This is why, the component operates a connector model
in order to make the storage operations independent from the underlying
datase and operating system. As already mentioned, the design decision
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

+ High flexibility by allowing nodes with dynamic properties to be
linked arbitrarily to other nodes.\
+ High scalability of NOSQL databases.\
- Lower efficiency in batch processing compared to RDBMSs.

  ---------- --------------- ------------------------------------- --------------------------------------
  **Name**   **Platforms**   **License**                           **URL**
  Neo4j      Java            Dual: GPLv3 and AGPLv3 / Commercial   <http://neo4j.org/>
  FlockDB    Java            Apache                                <http://github.com/twitter/flockdb/>
  ---------- --------------- ------------------------------------- --------------------------------------

An other example of database systems optimized for context storage are
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

### Context Reasoner Component[¶](#Context-Reasoner-Component)

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


