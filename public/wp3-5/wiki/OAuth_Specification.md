OAuth Specifications[¶](#OAuth-Specifications)
==============================================

Overview[¶](#Overview)
----------------------

A testbed has been implemented and is available on Github. The oAuth
service and the dedicated interfaces on the testbed implementation are
meant to authenticate and interact against the Twitter oAuth service.

    https://github.com/paolovergori/oAuth1.0A_service.git

The actual implemented version of the server is build on the oAuth 1.0A
model that exposes four interfaces. Three of them are needed to complete
the *"oAuth dance"* and one to post tweets through the server itself,
avoiding keys disclosure to the device.\
The reason why the server has been developed supporting oAuth 1.0A
version, is that it the authentication method required by Twitter.\
For the adaptation of the server, in order to make it work with oAuth
2.0 version, minor changes are required.

### Web Application Description Language (WADL)[¶](#Web-Application-Description-Language-WADL)

Following a further investigation among web services description
languages, it turned out that WSDL did not suit application service
needs.\
Noticeably, WSDL 2.0 would have been suited the description of web
applications. Moreover, it is way more powerful, as descriptive
language, for a web application. Therefore, it has been decided to use
the WADL because it fulfills all the descriptive needs of the oAuth
service.

As stated by W3C, WADL is a language designed to provide a machine
process-able description of HTTP-based Web applications.\
In the section below, WADL is used to describe the server interfaces.
For more information see the [specification web page
link.](http://www.w3.org/Submission/wadl/)

Exposed interfaces[¶](#Exposed-interfaces)
------------------------------------------

In the followings, methods that generalized the testbed implementation
are specified, in order to define a more generic webservice that is able
to interact with other services that use oAuth.

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

