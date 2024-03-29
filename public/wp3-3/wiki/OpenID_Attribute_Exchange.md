OpenID Attribute Exchange[¶](#OpenID-Attribute-Exchange)
========================================================

As part of the OpenID authentication, the user information stored on the
[openID](http://openid.net) are gathered. as optional part of the
authentication requests in an openID exchange. The schema is detailed in
<http://openid.net/specs/openid-attribute-exchange-1_0.html>

An attribute is defined as a unit of personal identity information that
is identified by a unique URI.\
There is no mandatory schema about the kind of information attributes
can carry in.

The information model is quite straightforward and details that an
attribute is associated with a Subject Identifier (i.e. a URI that
corresponds to the end-user identifier in the authentication portion of
the messages), has a type identifier (again a URI) and a value (any kind
of data in form of a utf8 string).

At least Google and Yahoo! support OpenID authentication.

Google uses the namespace aliases "ax" for these parameters, according
to the documentation on so the code line required is of the type:\

     new openid.AttributeExchange({
        "http://axschema.org/contact/country/home": "required",
        "http://axschema.org/namePerson/first":     "required",
        "http://axschema.org/pref/language":        "required",
        "http://axschema.org/namePerson/last":      "required",
        "http://axschema.org/contact/email":        "required" 
     })

Yahoo can retrieve preferred language, nickname, full name, email and
profile image (URL):\

     new openid.AttributeExchange({
        "http://axschema.org/pref/language":        "required",
        "http://axschema.org/contact/email":        "required",
        "http://axschema.org/namePerson/friendly":  "required",
        "http://axschema.org/namePerson":           "required",
        "http://axschema.org/media/image/default":  "required" 
     })

Authenticating via Google the name of the PZH is generated concatenating
firstName (<http://axschema.org/namePerson/first>) and lastName
(<http://axschema.org/namePerson/last>).\
Authenticating via Yahoo the name of the PZH is generated starting from
the full name (<http://axschema.org/namePerson> OpenID attribute) and
removing white spaces.\
In both cases the email (<http://axschema.org/contact/email>) is used as
a user identifier.

