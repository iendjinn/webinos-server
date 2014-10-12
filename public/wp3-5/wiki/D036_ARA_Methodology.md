Architectural Risk Analysis[¶](#Architectural-Risk-Analysis)
============================================================

Motivation[¶](#Motivation)
--------------------------

The design of webinos did not start with a blank page, but with a
bricolage of different model elements. By re-using existing software
components, we introduced design elements into our architecture.
Assumptions about possible attacks might also influence architectural
decision making. Even designers with a good understanding of both the
problem and solution domains may not appreciate the implications of
protocol selection, or the wording of requirements. Moreover, because
the abstractions used by a designer don't always match those used by an
attacker then flaws missed by the former may be found and exploited by
the latter. Consequently, we need tools that help us assess the security
consequences of bringing together different model elements.

The aim of an architectural risk analysis is to identify design-level
flaws in a software architecture. This process was first described by
McGraw ([McGraw2006](McGraw2006.html)), and motivated by the claim that
design flaws account for a significant number of security problems; such
flaws cannot be identified by code-inspection alone. An architectural
risk analysis shares many of the characteristics of classic risk
analysis: it emphasises tangible assets of business value and, as a
process, is knowledge intensive, requiring knowledge of both the problem
domain and security expertise about potential flaws and attacks. In
other respects, however, architectural risk analysis is more
challenging. It relies on additional knowledge about solution-based
models that form the basis of a software architecture, along with a
sense of the requirements and constraints implicitly assumed when these
are adopted.

In D2.7 and D2.8, we illustrated how the IRIS meta-model can deal with
risks in the broader socio-technical environment within which a software
system is situated. The IRIS (Integrating Requirements and Information
Security) meta-model was developed at the University of Oxford to
integrate concepts from Usability, Security, and Requirements
Engineering ([Faily2010b](Faily2010b.html)); this laid the foundations
for subsequent work that evaluated the security and usability
implications of mitigating risks ([Faily2010b](Faily2010b.html)), and
representations for archetypical attackers behind these risks
([Atzeni2011](Atzeni2011.html)). This work has also contributed to the
development of the open-source Computer Aided Integration of
Requirements and Information Security (CAIRIS) requirements management
tool ([CAIRIS](CAIRIS.html)), which has been validated using real-world
case studies, e.g. ([Faily2010c](Faily2010c.html),
[Faily2011a](Faily2011a.html)).

Two further augmentations are needed for undertaking a more detailed
analysis of software architectures. First, although the IRIS meta-model
provides substantial support for modelling the problem domain, solution
domain concepts are limited to the notion of assets. While modelling
assets is necessary for architectural risk analysis, it is not
sufficient as many features of an architecture warrant analysis in their
own right; these include the architecture's *attack surface* -- the
measure of its exposure to attack -- and the properties of connections
between its elements. Second, model representations are needed for
specifying the elements of software architecture and the attacks these
need to resist. These representations need to match the thinking that
designers might have about different perspectives of a system, and it
should be possible for them to quickly evaluate the consequences that
attack and defence elements might have on each other.

Approach[¶](#Approach)
----------------------

The approach prescribed by McGraw for carrying out an architectural risk
analysis involves carrying out three steps. In the first step, an
*attack resistance analysis* is carried out to identify general flaws
from the literature and knowledge bases of known attacks and, based on
these, identifying potential risks and their viability. In the second
step an *ambiguity analysis* is carried out to discover new risks
resulting from ambiguity and inconsistency in a design. In the final
step, a *weakness analysis* identifies weaknesses that might arise due
to the impact of the architecture's dependencies. Interested readers may
wish to refer to ([McGraw2006](McGraw2006.html)) for a more detailed
presentation of this process, although Khan et al.
([Khan2011](Khan2011.html)) provide a more recent illustrative example
based on an analysis of the Chromium browser.

To support a *model-driven* architectural risk analysis, we build two
model-based constructs: architectural patterns and contextualised attack
patterns. The following sections describe how these constructs are
defined and used.

### Architectural patterns[¶](#Architectural-patterns)

Architectural patterns were proposed by Buschmann et al.
([Buschmann1996](Buschmann1996.html)) to express a model of a software
system, provide a set of pre-defined sub-systems, specify
responsibilities, and include rules and guidelines for organising the
relationships between model elements. To capture the elements of an
architectural design pattern, we introduce new concepts to the IRIS
meta-model, while making use of existing concepts and relationships.
Collectively, the architectural patterns meta-model in Figure 1 provides
three different views of an architectural pattern.

![](ArchitecturalPatternMetaModel.jpg)

*Figure 1: Architectural Pattern Meta-Model*

The first of these is a component and connector view, which is expressed
using UML component diagrams. This captures the runtime attributes of a
system in terms of its computational elements (components) and the
interaction pathways between them. Components are attached to connectors
via interfaces; these are services or methods through which component
interaction takes place. Interfaces are associated with an access right
to indicate the level of authorisation needed to use the interface.
Interfaces also have a particular privilege level. Connectors, like
components, are characterised by their access rights and also by the
protocol upon which the connector runs. These meta-model components are
closely aligned with the model of software architecture described by
Gennari & Garlan, which was recently adapted to capture the elements of
a software architecture's attack surface
([Gennari2012](Gennari2012.html)). This involves specifying the model
elements associated with components and connectors, and assigning
numeric privilege, access right, and protocol values to these elements.
These values range between 0 and 10 and represent an element's exposure
to attack; the higher the value, the greater the exposure. These values
make it possible to formally evaluate the damage potential associated
with interfaces, data transmitted through a connector, and untrusted
data items with respect to restrictions placed on the data they contain.
This model is described in more detail in the ambiguity analysis
section.

The second is a goal view, and is characterised by the system
requirements that motivate or constrain the architectural components;
within the IRIS meta-model, these system requirements are expressed
using KAOS (Knowledge Acquisition in automated Specification) goals and
goal models. ([VanLamsweerde2009](VanLamsweerde2009.html)). KAOS
responsibility links describe the roles responsible for satisfying the
behaviour associated with requirements, while concern links are used to
describe instances where requirements reference or constrain assets.

The third view is based on a module view of assets. These assets are
salient concepts of value that are specific to components or connectors;
this view is expressed using UML class diagrams.

### Contextualised attack patterns[¶](#Contextualised-attack-patterns)

Attack patterns are descriptions of common methods for exploiting
software that both provide an attacker's perspective, together with
guidance towards mitigating them ([CAPEC](CAPEC.html)). In recent years,
work on attack patterns has been popularised by the development of
open-source intelligence Common Attack Pattern Enumeration and
Classification (CAPEC) ([CAPEC](CAPEC.html)) and Common Weakness
Enumeration (CWE) ([CWE](CWE.html)) repositories. Although these
repositories offer a wealth of useful attack data, the patterns are
deliberately abstract in order that they can be applicable in as many
contexts as possible. To provide this context and re-use as much
existing model data as possible when applying these patterns, we have
developed a meta-model for *contextualised attack patterns*. These model
both the attack and design elements necessary to instantiate an attack
within a specific context of use.

The model upon which contextualised attack patterns are based is the
*Gang of Four* design pattern template ([Gamma1995](Gamma1995.html)).
However, the meta-model is based exclusively on existing concepts and
associations in the IRIS meta-model. As such, when a contextualised
attack pattern is introduced into CAIRIS, it introduces a new risk,
together with the IRIS model elements that act as its rationale. The
relationship between the contextualised attack pattern structure and the
meta-model is illustrated in Figure 2 by the UML comment nodes denoting
the name of the pattern elements.

The intent and consequences elements are used to describe the overall
intent of the attack, and the external impact of the attack being
successful. This impact is broader than the impact of a particular
architectural pattern and is described using terminology that all system
stakeholders can understand. The applicability element states the
environment within which the attack pattern will be introduced. This is
also the same environment within which architectural patterns will be
situated to determine whether the design elements are resistant to this
or other attack patterns within the environment.

The structure element describes the details of the attack itself.
Attacks and Exploits are drawn from both CAPEC and CWE. The structure is
closely complemented by the participant element, which models
information about the attack; this includes the attacker's capabilities
and motives for carrying out the attack. This information is derived
from personas that have been created for possible attackers. Personas
are specifications of archetypical user behaviour that are grounded in
empirical data collected from representative users
([Pruitt2006](Pruitt2006.html)). These add a substantial amount of
context to the analysis because not only do these add a human face to
the attackers behind attack patterns, these are grounded in data sources
about real attackers.

To describe how the attack defined by the structure might be
implemented, leaf obstacles are associated with threats and
vulnerabilities and a KAOS obstacle model is defined to describe how
these might arise. Like the KAOS goal model in the architectural
pattern, these obstacles might concern assets, and responsibility
associations describe the roles responsible for satisfying obstacles.

As van Lamsweerde et al. have observed
([VanLamsweerde1998](VanLamsweerde1998.html)), a KAOS obstacle model can
be seen as a goal-driven form of a fault tree. However, unlike fault
trees, our approach to obstacle modelling is closely tied to other
artifacts such as previous knowledge about attacks and information about
the attackers that might carry these out. Collectively, where useful
statistical data about possible attacks exists, this information can
help us predict the likelihood of particular obstacles being satisfied.
When a probability value is specified for this likelihood then a
rationale statement also needs to be provided to justify it. This is
necessary because, when attack patterns are imported into a CAIRIS
model, it may not be immediately obvious that the obstacle or the
obstacle model arose from them. By proving this justification, we have
some way of understanding the thinking that motivated this value. Based
on these values, we can evaluate the probability of a particular cut of
an obstacle tree based on the same equations used to evaluate the faults
in a fault tree. For example, for an obstacle O\_x with leaf goals O\_1
and O\_2, the probability of O\_x (i.e. P(O\_x)) where O\_1 and O\_2 are
AND-refinements is O\_1 x O\_2; where O\_1 and O\_2 are OR-refinements
then P(O\_x) is O\_1 + O\_2.

Like classic design patterns, the collaboration concept describes the
classes necessary to achieve the designer's intent. However, in the case
of attack patterns, the classes are assets and the designers are
attackers. As such, the collaborating assets are those which are
targeted by threats or exploited by vulnerabilities. Closely aligned
with this concept are motivating security properties of interest to an
attacker realising this pattern.

![](AttackPatternMetaModel.jpg)

*Figure 2: Attack Pattern Meta-Model*

### Architectural Risk Analysis Process[¶](#Architectural-Risk-Analysis-Process)

For D3.6, we have applied an architectural risk analysis process which
is based on that proposed by McGraw. These are described in more detail
in the following steps.

#### Attack resistance analysis[¶](#Attack-resistance-analysis)

In this step, we begin to populate the contextualised attack pattern
template based on potential security concerns that may be associated
with the pattern. This includes searching the imported knowledge bases
for the pattern structure elements, and identifying attacker personas
with the ability to carry out the identified attack. If the existing
attacker personas do not have either the capabilities or motives for
carrying out the attack, then it may be necessary to create a new, more
meaningful attacker persona. The process for doing this is beyond the
scope of this paper, but is described in more detail by
([Atzeni2011](Atzeni2011.html)).

To illustrate how each attack pattern comes about, KAOS obstacle models
are developed to illustrate the conditions that make the attack
possible. Where appropriate, attack and exploit elements are associated
with root or leaf obstacles in the obstacle model. As further obstacles
are elicited, these are refined to identify other potential threats and
vulnerabilities. As this model evolves then, where possible, probability
values are assigned to obstacles, and potential goal and responsibility
links are assigned to known system assets and roles referenced in the
contextualised attack pattern.

Once the attack patterns were finalised, the leaf obstacles in each
attack pattern obstacle model were noted for subsequent ambiguity
analysis. These would either need to be satisfied by the software
architecture, or their non-satisfaction would need to be motivated.

#### Ambiguity analysis[¶](#Ambiguity-analysis)

For a specific areas of architectural significance, architectural
patterns are created to encompass the component and connector,
requirement, and asset views associated with this area. As McGraw
suggests ([McGraw2006](McGraw2006.html)), this is the most
intellectually demanding part of the process because the information
necessary to populate the pattern needs to be elicited from various
sources, including design documentation and source code. It is also
necessary to involve other designers and domain experts to validate the
architectural pattern as it is specified. For this reason, the pattern
itself will invariably be revised throughout the architectural risk
analysis process.

Once the architectural patterns have been finalised, the *Damage Effort
Ratios* (DER) were calculated for each architectural pattern. The DERs
are a ratio of the potential damage done by exploiting resources over
the amount of effort an attacker expends to access it
([Gennari2012](Gennari2012.html)). Building on previous work by Gennari
and Garlan [ibid], it is possible to evaluate the damage potential
across the interfaces (DER\_m), channels (DER\_c), and untrusted
surfaces (DER\_i) are calculated. These formulae for these ratios are
defined below:

-   DER\_m: Privilege / Access right
-   DER\_c: Protocol / Access right
-   DER\_i: Surface type / Access right

These ratios not only provide a high-level quantative measure of the
webinos attack surface, their automatic evaluation also provides a quick
spot check for unexpected results that might suggest an incomplete
analysis, or hitherto unaddressed areas of the architectural risk
analysis. If there are unusual or unexpected values, the source
architectural patterns can be reviewed and, where appropriate, revised
before proceeding.

The next step in this analysis involves taking the leaf obstacles from
the attack resistance analysis, and eliciting one or more requirements
that mitigate them. Each mitigating requirement is categorised with the
affected architectural pattern component/s, an indication of whether it
is satisfied or not, and the rationale for how the mitigating
requirement is treated. Where mitigating requirements are satisfied, the
requirements are added to the architectural patterns and incorporated
into the KAOS goal model associated with each component. A KAOS
*resolution* link is also added to the attack pattern obstacle model to
indicate that the leaf obstacle has been mitigated. Where mitigating
requirements are not satisfied, a KAOS domain property object is created
to capture the rationale for not addressing the requirement. These
domain properties represent hypothesis or assertions about the
environment that assume as part of our analysis, e.g. that a particular
requirement is out of scope. Like mitigating requirements, the KAOS
obstacle model associated with the respective attack pattern is updated
to reflect that the obstacle is resolved [albeit imperfectly] by the
domain property.

#### Weakness analysis[¶](#Weakness-analysis)

The final step in the architectural risk analysis considers whether any
residual weaknesses remain in each architectural pattern. This analysis
involves considering assets that are associated with both architectural
and contextualised attack pattern, and -- for threats or vulnerabilities
associated these assets -- whether the software architecture adequately
addresses them. For each architectural pattern, the measures in place to
address the affected threats or vulnerabilities are described.

![](PMAPView.jpg)

*Figure 3: Asset, Goal and Component Views of Contextual Policy
Management Architectural Pattern*

#### Tool-support[¶](#Tool-support)

To support it, we modified CAIRIS to support the aforementioned changes
to the IRIS meta-model. We have also modelled architectural patterns and
contextualised attack patterns as XML Data Type Descriptions; these
facilitate the import of both types of artifact directly into CAIRIS.
Because these patterns make use of existing models from previous work
from other deliverables, D2.4, D2.5, D2.7, and D2.8) as well as
open-source intelligence from CAPEC, CWE and OWASP, we have stored these
pattern files in the webinos WP 2 git repository, and have updated the
specification build scripts (developed for D2.5) to import both the
patterns and directories of potential threats and vulnerabilities into
CAIRIS. More information about CAIRIS's facilities for importing threat
and vulnerability directories can be found in
([Faily2011b](Faily2011b.html)).

