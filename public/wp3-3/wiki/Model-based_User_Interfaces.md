Adaptive User Interface Engineering[¶](#Adaptive-User-Interface-Engineering)
============================================================================

Lead: Heiko (IBBT)

-   [Adaptive User Interface
    Engineering](#Adaptive-User-Interface-Engineering)
    -   [1. Introduction](#1-Introduction)
        -   [1.1 Separation of Concerns](#11-Separation-of-Concerns)
        -   [1.2 Context of Use](#12-Context-of-Use)
    -   [2. Model-based User Interfaces](#2-Model-based-User-Interfaces)
        -   [2.1 Abstraction Levels and
            Transformations](#21-Abstraction-Levels-and-Transformations)
        -   [2.2 Adaptation Granularity and
            Approaches](#22-Adaptation-Granularity-and-Approaches)
    -   [3 Model-based UI Adaptation
        Architectures](#3-Model-based-UI-Adaptation-Architectures)
        -   [3.1 Serenoa](#31-Serenoa)
    -   [References](#References)

1. Introduction[¶](#1-Introduction)
-----------------------------------

The development and deployment of ubiquitous applications introduces an
important series of resource-consuming requirements [Banavar and
Bernstein 2004]. The available combinations of hardware characteristics,
operating systems, software frameworks, etc. are virtually endless. For
software developers, this diversity has turned out to be a
double-barreled asset. It provides consumers the freedom to operate
applications at will across several devices. On the other hand, the
device diversity asset heavily fragments the application's delivery
targets. By the absence of a general native development solution,
developers often have no alternative than to create and maintain a set
of device-dependent versions of their applications. Hence, ensuring a
viable balance between development costs and an application's market
coverage will more than ever become a challenging issue.

### 1.1 Separation of Concerns[¶](#11-Separation-of-Concerns)

To accommodate with the high-variability aspect, software systems are
traditionally engineered along three orthogonal dimensions: the
development phases, the system's views, and its aspects [Schauerhuber et
al. 2007]. This approach is characterized by the separation of concerns,
as it embodies a well accepted technique to reduce the engineering
complexity of a software system [Dijkstra 1976]. First of all, the phase
dimension sets out the different stages of the Web development process,
ranging from analysis, to design, and implementation. Each of these
phases requires a number of specific views addressing the system's
content structures and application logic, the navigational structures
between content nodes, and its presentation towards the user. Hence, the
views dimension. Finally, the aspects dimension sets out the structural
(objects, attributes, relationships) and behavioral aspects (functions,
processes) of each of the above-mentioned views.

![](http://desruelle.be/webinos/dimensions.png)\
Figure 1

The growing presence and importance of mobile and ubiquitous
applications emphasizes the need for fragmentation management within the
Web engineering methodology. As identified by [Koch et al. 2008],
context-aware adaptability can be considered as an additional Web
engineering dimension, crosscutting all existing Web modeling
dimensions. [Schauerhuber et al. 2007] as well as [Linaje et al. 2010]
investigated the support for adaptability requirements within various
Web engineering methods. A number of approaches were identified to
incorporate partial Model Driven Architecture (MDA) compliance (e.g.,
UWE, WSDM, HERA, WebML, etc.). Through an MDA-based approach, software
development is started with an abstract platform-independent model (PIM)
specification of the system [Miller and Mukerji 2003]. A transformation
model is in turn applied to compile the PIM to a platform-specific model
(PSM). The transformation process is at the heart of MDA's adaptability
approach. For this purpose, MDA proposes the Query-View-Transformation
standard (QVT) as a language for specifying model-to-model
transformation rules [OMG 2011].

Nevertheless the potential flexibility of model driven approaches, the
applicability of existing Web modeling methods for handling ubiquitous
fragmentation remains rather limited. This observation can be explained
through the complex composition of the design space. The aforementioned
contextual aspects, both static and dynamic, influence a modeling
method's strength and expressiveness in terms of adaptability [Kappel et
al. 2001]. In result, adaptability requirements ought to be handled
throughout every stage of a system's development life cycle. Especially
from a ubiquitous software development perspective, the
multi-dimensional impact of adaptability puts a heavy burden on the
software engineering and development processes.

### 1.2 Context of Use[¶](#12-Context-of-Use)

The availability of detailed and reliable metadata regarding a user's
contextual situation provides an important driver for enabling rich
ubiquitous applications. The exact entities represented by this
contextual information can be of a very dynamic nature, potentially
affecting the consumer's expectations towards the application's user
interface, behavior, content, etc. In initial context-aware research,
context of use was considered a component containing only two
parameters: the end-user's location and the set of objects in the
immediate vicinity [Schilit et al. 1994]. The subsequent introduction of
extensible contextual categories has drastically increased the
flexibility of this definition [Brown et al. 1997]. Chen and Kotz hereto
identified five contextual base categories: the device context, the user
context, the environment context, the time context, and the historical
context [Chen and Kotz 2000].

The device context describes the characteristics of the target device
that is being used to access the application. A ubiquitous ecosystem
covers a diversity of screen sizes, interaction methods, software
support, etc. In Web-based environments, the device capabilities are
generally retrieved through Resource Description Framework (RDF) devices
profiles, i.e., User Agent Profile (UAProf) [OMA 2001] and Composite
Capability/Preference Profiles (CC/PP) [Kiss 2010]. The necessary device
identification step in this process is handled through HTTP header user
agent matching. In order to facilitate the collection and aggregation of
these device profiles, the W3C Mobile Web Initiative (MWI) standardized
the Device Description Repository specification (DDR). The specification
provides an API and its associated vocabulary for structured access to
context providers services [Rabin et al. 2008]. In essence, a DDR thus
provides a standardized means for retrieving contextual information
about a-priori knowledge on the characteristics of a particular target
device or Web runtime. Various open as well as proprietary DDR
implementations are actively being maintained. Most notably OpenDDR,
WURFL, and DeviceAtlas.

In a ubiquitous setting, the end-user's profile description gains more
and more importance. Besides exposing information on user preferences
and specific experience, this model should also comprise knowledge
regarding the user's specific abilities and disabilities. E.g., enabling
accessibility requirements for providing support to elderly people, and
people with disabilities. From this perspective, Heckmann proposed the
GUMO formalism as a general user model ontology for representing generic
user descriptions using the Web Ontology Language semantics (OWL)
[Heckmann 2005]. The current challenge in this domain is modeling the
enormous amount of parameters and relationships that characterize the
user context [Silva et al. 2011]. To overcome this issue, forces are
being joined with other ontology-driven projects such as Linked Data
[Heath and Bizer 2011], and UbisWorld [Heckmann et al. 2009].

The environment-, time-, and historical context aspects define where,
how, and when the interaction between the user and an application is
exactly taking place. The environment context is specified by observing
the numerous sensors available on the user's device (e.g., location,
temperatures, network service discovery, the level of background noise,
etc.). Furthermore, the notion of time and historical context is not to
be neglected. As context is a dynamic concept, support for temporal
patterns recognition and management is needed. The W3C Ubiquitous Web
Domain is currently in the process of standardizing the Delivery Context
Ontology specification (DCO) [Cantera and Rhys 2010]. The DCO provides a
formal model of the characteristics of the environment in which devices,
applications, and services are operating.

2. Model-based User Interfaces[¶](#2-Model-based-User-Interfaces)
-----------------------------------------------------------------

Recent research on model driven engineering has been particularly active
in the domain of user interface engineering. The CAMELEON Reference
Framework (CRF) defines an important foundation for this type of
approaches [Calvary et al. 2003]. The framework specifies a
context-sensitive user interface development process, driven by an
intrinsic notion of the current user context, the environment context,
as well as the platform context. According to the CRF approach, an
application's user interface development consists of multiple levels of
abstraction. Starting from an abstract representation of the interface's
task and domain model, a PSM of the user interface is subsequently
generated by means of a chained model transformations based on
contextual knowledge. A number of languages have adopted CRF: UsiXML
[Limbourg et al. 2004], useML [Meixner and Thiels 2008], and MARIA
[Paterno et al. 2009]. Moreover, the World Wide Web Consortium (W3C)
charted the Model-Based UI Working Group (MBUI-WG) as part of its
Ubiquitous Web Activity (UWA) to investigate the standardization of
context-aware user interface authoring [Cantera 2010]. Its goal is to
work on standards that enable the authoring of context-aware user
interfaces for web applications. The MBUI-WG aims to achieve this type
of adaptivity by means of a model driven design approach. In this
context, the semantically structured aspects of HTML5 will be used as
key delivery platform for the applications' adaptive user interface.

### 2.1 Abstraction Levels and Transformations[¶](#21-Abstraction-Levels-and-Transformations)

The CAMELEON Reference Framework relies on a model driven approach and
structures the development of a user interface into four subsequent
levels of abstration:

-   Specification of the **task and domain model**, defining a user's
    required activities in order to reach his goals.
-   Definition of an **abstract user interface (AUI) model**. The AUI
    model defines a platform-independent model (PIM), which expresses
    the application's interface independently from any interactors or
    modalities within the delivery context's attributes.
-   Definition of a **concrete user interface (CUI) model**, a
    platform-specific model (PSM) which generates a more concrete
    description of the AUI by including specific dependencies and
    interactor types based on the delivery context.
-   Specification of the **final user interface (FUI)**, covering the
    code that corresponds with the user interface in its runtime
    environment (e.g., HTML, Java, etc.).

Figure 2 shows the interconnections and transformations between the
above-mentioned CRF stages. The downward arrows depict reification
processes. Reification is the transformation from a higher-level
abstraction to a lower-level abstraction phase, hence inferring a more
concrete UI description. The upward arrows, on the other hand, specify
the abstraction processes. An abstraction is the inverse transformation
of reification. The third transformation type is the translation,
depicted by the horizontal arrows. The translation deals with adapting
the UI description to changes in one of the context of use models. In
this case, the UI description's abstraction level remains the same when
performing a translation.

![](http://desruelle.be/webinos/crf.png)\
Figure 2

### 2.2 Adaptation Granularity and Approaches[¶](#22-Adaptation-Granularity-and-Approaches)

The expected adaptability granularity has a major impact on a user
interface's engineering complexity. This property, e.g., indicates
whether the defined adaptation process affects the entire UI, or only a
contained number of identifiable sub-views. The Context-Aware Design
Space (CADS), proposed by Vanderdonckt et al., can be utilized as a
means to analyze and compare a software system's dimensions subject to
adaptation [Vanderdonckt et al. 2008]. As shown in Figure 3, the design
space defines by default seven adaptation dimensions, but it can be
extended with additional dimensions based on the application domain's
specific needs.

-   **Adaptation means:** denotes to which degree the adaptation should
    reconfigure the UI by inserting/deleting/modifying components, and
    whether it should also result in the re-allocation of UI components
    to different physical devices.
-   **UI Component granularity:** defines the smallest UI component unit
    that should be subjected to adaptation.
-   **State recovery:** characterizes the extent to which the state of
    performed adaptations can be transferred or recovered. This
    dimension ranges from transferring adaptation at the session level,
    to picking up the current task at the exact point in which it was
    stopped by enabling the recovery of individual actions.
-   **UI deployment:** defines whether decision regarding the deployment
    and adaptation of UI components is statically defined, or based on a
    more dynamic at-runtime model.
-   **Context coverage:** determines the UI's expected degree of context
    awareness. This dimension denotes the UI's adaptability in terms of
    the user's specific characteristics, his device(s), and a
    description of their physical environment.
-   **Technological spaces:** documents the technological diversity that
    needs to be covered by the UI. This dimension defines whether the UI
    needs to cover one or more technoligical spaces (e.g., HTML, Qt,
    Tcl, AWT, Swing, etc.) and in case of a distributed UI, whether the
    allocated components cover different spaces.
-   **Meta-UI usage:** documents the existence of a meta-UI that enables
    control over the actual UI's adaptation.

![](http://desruelle.be/webinos/cads.png)\
Figure 3

As documented by Schaefer, various approaches can be used to express the
adaptation of a model-based user interface [Schaefer 2007]. In essence,
three types of adaptation approaches can be distinguished:
model-to-model transformations, transformations on the XML
representation of models, and code transformations. The model-to-model
approach relies on the fact that most MBUI models can be designed based
on a directed graph structure. In result, adaptations between two models
are specified with model mappings by means of graph transformation
rules. As depicted in Figure 4, transformation rules consist of a Left
Hand Side (LHS) condition matching the current UI model represented by
graph G [Limbourgh et al. 2005]. To add expressiveness, one or more
Negative Application Condition (NAC), which should not match G, can be
defined. Based on the matching of these conditions a Right Hand Side
(RHS) defines the transformation result by replacing LHS occurrence in G
with RHS. This substitution operation results in an adapted UI model
represented by graph G'.

![](http://desruelle.be/webinos/transformation.png)\
Figure 4

Furthermore, for UI models represented with XML, XSLT transformations
can be used as a more declarative way to define adaptations [Kay 2007].
The transformation process takes a XML based document as input together
with an XSLT stylesheet module containing the transformation rules (see
Figure 5). Each transformation rule consists of a matching pattern and
an output template. Patterns to be matched in the input XML document are
defined by a subset of the XPath language [Berglund et al. 2010]. The
output after applying the appropriate transformations can be standard
XML, but also other formats such as (X)HTML, XSL-FO, plain text, etc.

![](http://desruelle.be/webinos/xslt.png)\
Figure 5

3 Model-based UI Adaptation Architectures[¶](#3-Model-based-UI-Adaptation-Architectures)
----------------------------------------------------------------------------------------

### 3.1 Serenoa[¶](#31-Serenoa)

TODO detailed description

![](http://desruelle.be/webinos/serenoa.png)\
Figure 6

![](http://desruelle.be/webinos/serenoa-adaptation.png)\
Figure 7

References[¶](#References)
--------------------------

[Banavar and Bernstein 2004] Banavar, G., Bernstein, A.: "Challenges in
design and software infrastructure for ubiquitous computing
applications”; Advances in com- puters, 62, 1 (2004) 179-202.

[Berglund et al. 2010] Berglund, A. Boag, S., Chamberlin, D., Fernandez,
M.F., Kay, M., Robie, J., Simeon, J. (eds.): "XML Path Language (XPath)
2.0 (Second Edition)"; W3C Recommendation (2010),
<http://www.w3.org/TR/xpath20/>

[Brown et al. 1997] Brown, P.J., Bovey, J.D., Chen, X.: “Context-aware
Applications: From the Laboratory to the Marketplace”; IEEE Personal
Communications, 4, 5 (1997), 58-64.

[Calvary et al. 2003] Calvary, G., Coutaz, J., Thevenin, D., Limbourg,
Q., Bouillon, L., Vanderdonckt, J.: “A Unifying Reference Framework for
Multi-Target User Interfaces”; Interacting with Computers, 15 (2003),
289-308.

[Cantera 2010] Cantera, J.M. (ed.): “Model-Based UI XG Final Report”;
W3C Incubator Group Report (2010),
<http://www.w3.org/2005/Incubator/model-based-ui/XGR-mbui>

[Cantera and Rhys 2010] Cantera, J.M., Rhys L. (eds.): “Delivery Context
Ontology”; W3C Working Group Note (2010),
<http://www.w3.org/TR/dcontology>

[Cantera and Tsouroulas 2010] Cantera, J.M., Tsouroulas, N.: “Context
model and universal APIs”; NEXOF-RA (2010), <http://www.nexof-ra.eu>

[Chen and Kotz 2000] Chen, G., Kotz, D.: “A Survey of Context-aware
Mobile Com- puting Research”; Tech. Rep. TR2000-381, Dept. of Computer
Science (2000)

[Dijkstra 1976] Dijkstra, E.W.: “A Discipline of Programming”;
Prentice-Hall, Engle- wood Cliffs (1976)

[Heckmann 2005] Heckmann, D.: “Ubiquitous User Modeling”; PhD thesis,
Dept. of Computer Science, Saarland University (2005)

[Heckmann et al. 2009] Heckmann, D., Loskyll, M., Math, R., Recktenwald,
P., Stahl, C.: “Ubisworld 3.0: A Semantic Tool Set for Ubiquitous User
Modeling”; Proc: 17th Int. Conf. on User Modeling, Adaptation, and
Personalization, Springer, Heidelberg (2009)

[Heath and Bizer 2011] Heath, T., Bizer, C.: “Linked data: Evolving the
web into a global data space”; Synthesis Lectures on the Semantic Web:
Theory and Technology, 1, 1 (2011) 1-136.

[Kiss 2010] Kiss, C. (ed.): “Composite Capability/Preference Profiles
(CC/PP): Struc- ture and Vocabularies 2.0”: W3C Working Group Note
(2010), <http://www.w3.org/TR/CCPP-struct-vocab2>

[Kappel et al. 2001] Kappel, G., Proll, B., Retschitzegger, W.,
Schwinger, Hofer, T.: “Modeling ubiquitous web applications - A
Comparision of Approaches”; Proc: 3rd Int. Conf. on Information
Integration and Web-based Applications and Services, Linz, Austria
(2001) 163-174.

[Kay 2007] Kay, M. (ed.): "XSL Transformations (XSLT) Version 2.0", W3C
Recommendation (2007), <http://www.w3.org/TR/xslt20/>

[Koch et al. 2008] Koch, N., Knapp, A., Zhang, G., Baumeister, H.:
“UML-Based web engineering”; Web engineering: modeling and implementing
web applications (2008) 157-191.

[Lawton 2008] Lawton, G.: “Moving the OS to the Web”; Computer, 41, 3
(2008)16-19. [Limbourg et al. 2004] Limbourg, Q., Vanderdonckt, J.,
Michotten B., Bouillon, L., Lopez, V.: “UsiXML: a Language Supporting
Multi-Path Development of User Interfaces”; Proc: 9th IFIP Working Conf.
on Engineering for Human-Computer Interaction, Springer, Heidelberg
(2004)

[Limbourgh et al. 2005] Limbourg, Q., Vanderdonckt, J., Michotte, B.,
Bouillon, L., Lopez-Jaquero, V.: "USIXML: A language supporting
multi-path development of user interfaces"; Proc: Engineering Human
Computer Interaction and Interactive Systems, Springer, Heidelberg
(2005)

[Linaje et al. 2010] Linaje, M., Preciado, J.C., Sanchez-Figuero, F.:
“Multi-Device Context-Aware RIAs Using a Model-Driven Approach”; Journal
of Universal Computer Science, 16,15 (2010), 2038-2059.

[Meixner and Thiels 2008] Meixner, G., Thiels, N.: “Tool Support for
Task Analysis”; Proc: 4th Int. Workshop on Model-Driven Development of
Advanced User Interfaces, Florence, Italy (2008)

[Miller and Mukerji 2003] Miller, J., Mukerji, J.: “MDA Guide, version
1.0.1”; OMG standard (2003), <http://www.omg.org/mda>

[OMA 2001] Open Mobile Alliance: “WAG UAProf”; Tech. Rep.
WAP-248-UAProf-20010530, OMA (2001),
<http://www1.wapforum.org/tech/terms.asp?doc=WAP-248-UAProf-20010530-p.pdf>

[OMG 2011] Ob ject Management Group; “Meta Ob ject Facility (MOF) 2.0
Query/View/Transformation (QVT)”; OMG standard (2011),
<http://www.omg.org/spec/QVT/1.1/>

[Paterno et al. 2009] Paterno, F., Santoro, C., Spano, L.D.: “MARIA: a
Universal Language for Service-Oriented Applications in Ubiquitous
Environments”; ACM Transactions on Computer-Human Interaction, 16, 4
(2009) 19.

[Rabin et al. 2008] Rabin, J., Trasatti, A., Hanrahan R. (eds.): “Device
Description Repository Core Vocabulary”; W3C Working Group Note (2008),
<http://www.w3.org/TR/ddr-core-vocabulary>

[Schaefer 2007] Schaefer, R.: "A Survey on Transformation Tools for
Model Based User Interface Development"; Proc: 12th Int. Conf. on
Human-Computer Interaction (CHI 2007), Springer, Heidelberg (2007)

[Schauerhuber et al. 2007] Schauerhuber, A., Wimmer, M., Schwinger, M.,
Kapsammer, E., Retschitzegger, W.: “Aspect-oriented modeling of
ubiquitous web applications: the aspectWebML approach”; Proc: 14th Int.
Conf. and Workshops on the Engineering of Computer-Based Systems, IEEE,
New York (2007) 569-576.

[Schilit et al. 1994] Schilit, B., Adams, N., Want, R.: “Context-aware
Computing Ap- plications”; Proc: 1st Workshop on Mobile Computing
Systems and Applications, IEEE, New York (1994) 85-90.

[Vanderdonckt et al. 2008] Vanderdonckt, J., Coutaz, D., Calvary, G.,
Stanciulescu, A.: "Multimodality for Plastic User Interfaces: Models,
Methods, and Principles"; Multimodal user interfaces: signals and
communication technology, Lecture Notes in Electrical Engineering,
Springer, Heidelberg (2007) 61-84.

