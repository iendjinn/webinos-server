OAuth service[¶](#OAuth-service)
================================

-   [OAuth service](#OAuth-service)
    -   [Introduction](#Introduction)
    -   [Sequence diagram](#Sequence-diagram)
    -   [Component and connections
        diagram](#Component-and-connections-diagram)
        -   [Components](#Components)
        -   [Connectors](#Connectors)
    -   [Methods definition](#Methods-definition)
    -   [Overview](#Overview)
        -   [Web Application Description Language
            (WADL)](#Web-Application-Description-Language-WADL)
    -   [Exposed interfaces](#Exposed-interfaces)
        -   [isAlreadyAuthenticated](#isAlreadyAuthenticated)
        -   [authenticate](#authenticate)
        -   [accessToken](#accessToken)
        -   [HttpRequest](#HttpRequest)

Introduction[¶](#Introduction)
------------------------------

This informative section describes how third-party authentication via
OAuth 1 can be implemented within webinos. Because JavaScript OAuth 1.0
clients are difficult to design in a secure manner, this document aims
to helps application developers protect their credentials.

The solution described in this document is the use of an additional
developer-provided server ('devServer' in diagrams below) which is
trusted to hold on to developer OAuth credentials. This is accessed by
the client-side JavaScript of a webinos application in order to sign
OAuth requests and gain access to resources. By storing credentials on a
server, abuses of these credentials can be prevented through
rate-limiting or other mechanisms.

The following diagrams refer to a practicle implementation of the
devServer that acts as Twitter's oAuth client in the oAuth dance.

Sequence diagram[¶](#Sequence-diagram)
--------------------------------------

In this sequence diagram, a webinos application running within the
widget runtime (WRT) or browser attempts to connect to Twitter (or any
similar OAuth 1.0 service). The first section describes how the
application requests that the devServer authenticate to Twitter on the
application's behalf. Following this, an example of using the devServer
to make access requests (tweets, in this case) is shown.

![](oAuth_flow.png)

Component and connections diagram[¶](#Component-and-connections-diagram)
------------------------------------------------------------------------

This diagram shows how the WRT, devServer and Twitter service are
connected.

![](ComponentDiagram.png)

### Components[¶](#Components)

-   WRT
-   devServer
-   Twitter

### Connectors[¶](#Connectors)

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

Methods definition[¶](#Methods-definition)
------------------------------------------

A testbed implementation of the oAuth service for webinos has been
uploaded on github:

    https://github.com/paolovergori/oAuth1.0A_service.git

In the following section, methods to realize the service are defined,
specified and described.

Overview[¶](#Overview)
----------------------

The actual implemented version of the server is build on the oAuth 1.0A
model that exposes four interfaces. Three of them are needed to complete
the *"oAuth dance"* and one to post tweets through the server itself,
avoiding keys disclosure to the device.

The reason why the server has been developed supporting oAuth 1.0A
version, is that it the authentication method required by Twitter.

For the adaptation of the server, in order to make it work with oAuth
2.0 version, minor changes are required. We note that some OAuth 2.0
flows avoid the need to protect client-side credentials, making this
approach unnecessary.

### Web Application Description Language (WADL)[¶](#Web-Application-Description-Language-WADL)

In the section below, WADL is used to describe the server interfaces.
For more information see the [W3C WADL
specification](http://www.w3.org/Submission/wadl/)

Exposed interfaces[¶](#Exposed-interfaces)
------------------------------------------

The following methods that generalized the testbed implementation are
specified in order to define a more generic webservice that is able to
interact with other services that use oAuth.

### isAlreadyAuthenticated[¶](#isAlreadyAuthenticated)

This interface is needed to verify if the application has already been
granted of the oAuth permission to the server.

    <?xml version="1.0"?> 
    <application>
        <resources base="https://<webServiceAddress>:<webServicePort>"> 
            <resource path="isAlreadyAuthenticated"> 
                <method name="POST"> 
                    <request>
                        <representation mediaType="application/json"/> 
                        <param name="sessionID" type="string" required="true"/>  
                        <param name="oAuthService" type="string" required="true"/>
                    </request> 
                    <response status="200"> 
                        <representation mediaType="application/json"/>  
                        <param name="loggedin" type="boolean"/>
                    </response> 
                    <response status="400"/> 
                    <response status="500"/>
                </method> 
            </resource>  

### authenticate[¶](#authenticate)

This interface is the first step of the *"oAuth dance"*. The server acts
as follows:

-   it asks to the oAuth service for a request token
-   it responds with the authorization url that is composed with a fixed
    url part, plus a token that is returned by the oAuth service

<!-- -->

        
            <resource path="authenticate"> 
                <method name="POST"> 
                    <request>
                        <representation mediaType="application/json"/> 
                        <param name="sessionID" type="string" required="true"/>
                        <param name="oAuthService" type="string" required="true"/>
                        <param name="oAuthServiceAuthenticatePath" type="string" required="true"/>
                    </request> 
                    <response status="200"> 
                        <representation mediaType="application/json"/>  
                        <param name="authURL" type="string"/>
                    </response> 
                    <response status="400"/>
                    <response status="500"/>
                </method> 
            </resource> 

### accessToken[¶](#accessToken)

The scope of this interface is viable in oAuth 1.0A implementation.\
It has the aim to inform server that the user has granted to it the
oAuth permissions. The server behaves as follows:

-   it is now able to ask to the oAuth service for access token and
    accesstoken secret
-   it responds back to the application, closing up the webview that has
    been used to authenticate the user against the oAuth service

Considering an oAuth 2.0 implementation, this interface would be used
for returning the session token to the application that, from now on,
will handle all the communications on its own.

        
            <resource path="accessToken"> 
                <method name="GET"> 
                    <request>
                        <param name="sessionID" type="string" required="true"/>
                        <param name="oAuthService" type="string" required="true"/>
                        <param name="oAuthServiceAccessTokenPath" type="string" required="true"/>
                    </request> 
                    <response status="200">   
                        <param type="text/html"/>
                    </response> 
                    <response status="400"/> 
                    <response status="500"/>
                </method> 
            </resource>  

### HttpRequest[¶](#HttpRequest)

For security reasons it has been chosen to never disclose consumer key
and consumer secret to the application. These keys are necessary to sing
all the requests that the application will deliver against the oAuth
service.\
This restriction of the oAuth 1.0A version has forced the development of
a dedicated interface for signing incoming requests.

            <resource path="HttpRequest"> 
                <method name="POST"> 
                    <request>
                        <representation mediaType="application/json"/> 
                        <param name="sessionID" type="string" required="true"/>
                        <param name="oAuthService" type="string" required="true"/>
                        <param name="oAuthServiceRequestType" type="string" required="true"/>
                        <param name="oAuthServiceRequestPath" type="string" required="true"/>
                        <param name="oAuthServiceRequestBody" type="string"/>
                    </request> 
                    <response status="200"/> 
                    <response status="400"/> 
                    <response status="500"/>
                </method> 
            </resource> 
        </resources> 
    </application>

Taking into consideration that this is just a testbed implementation,
for a real use, more interfaces will be needed to be set up. In fact,
the server will expose an interface for each communication between the
application and Tweeter that are required to be signed.

