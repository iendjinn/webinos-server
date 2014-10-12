OAuth service[¶](#OAuth-service)
================================

-   [OAuth service](#OAuth-service)
    -   [Background](#Background)
    -   [Preliminary investigation](#Preliminary-investigation)
    -   [Sequence diagram](#Sequence-diagram)
    -   [Component and connections
        diagram](#Component-and-connections-diagram)
    -   [Synopsis](#Synopsis)
    -   [Components](#Components)
    -   [Connectors](#Connectors)
    -   [Goal tree diagram](#Goal-tree-diagram)
    -   [Methods definition](#Methods-definition)

Background[¶](#Background)
--------------------------

[Scenario: OAuth
support](/wp2-4/wiki/Proposed_Update_OAuth_support)

Preliminary investigation[¶](#Preliminary-investigation)
--------------------------------------------------------

[oAuth
investigation](/t3-4/wiki/OAuth_investigation)

Sequence diagram[¶](#Sequence-diagram)
--------------------------------------

![](oAuth_flow.png)

Component and connections diagram[¶](#Component-and-connections-diagram)
------------------------------------------------------------------------

![](ComponentDiagram.png)

Synopsis[¶](#Synopsis)
----------------------

Model illustrating webinos oAuth 1.0A server schema

Components[¶](#Components)
--------------------------

-   WRT
-   devServer
-   Twitter

Connectors[¶](#Connectors)
--------------------------

  ---------------- ----------- ---------------- ----------- ---------------- ------- ---------- --------------
  Connector        From        Interface        To          Interface        Asset   Protocol   Access Right
  isAlreadyAuth    WRT         isAlreadyAuth    devServer   isAlreadyAuth    POST    https      trusted
  accessToken      WRT         accessToken      devServer   accessToken      POST    https      trusted
  authenticate     WRT         authenticate     devServer   authenticate     POST    https      trusted
  tweet            WRT         tweet            devServer   tweet            POST    https      trusted
  authApp          WRT         authApp          Twitter     authApp          POST    https      trusted
  requestToken     devServer   requestToken     Twitter     requestToken     POST    https      trusted
  getAccessToken   devServer   getAccessToken   Twitter     getAccessToken   POST    https      trusted
  postTweet        devServer   postTweet        Twitter     postTweet        POST    https      trusted
  ---------------- ----------- ---------------- ----------- ---------------- ------- ---------- --------------

Goal tree diagram[¶](#Goal-tree-diagram)
----------------------------------------

![](oAuthFlow-goalTree.png)

Methods definition[¶](#Methods-definition)
------------------------------------------

A testbed implementation of the oAuth service for webinos has been
uploaded on github:

    https://github.com/paolovergori/oAuth1.0A_service.git

In the following page methods to realize the service are defined,
specified and described: [oAuth Specification](.html)

