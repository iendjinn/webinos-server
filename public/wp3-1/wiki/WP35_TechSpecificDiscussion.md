WP 3.5 Technology Specific Implementation Discussions[¶](#WP-35-Technology-Specific-Implementation-Discussions)
===============================================================================================================

Unstructured thoughts[¶](#Unstructured-thoughts)
------------------------------------------------

**[Andrea Potilo] Thought 1 - Identifiers:**

-   Identifiers in webinos
    -   A different identifier for device and service?
    -   the device identifier could be (derived from) MAC or IP
        addresses?
    -   the service id should be unique?
        -   How much anonymity (unlinkability) should be achieved?
        -   How accountability could be achieved in an anonymous Webinos
            Network?
            -   what events/action/resources should be accountable?

**[Ziran Samsung] Thought 2 - UserID registration:**

Introduce a central "Longin server" in WebinOS Network for WebinOS ID
registration and management?

in Skype, a "login server" has the following functions -

-   Store User names and passwords
-   User authentication at login
-   Ensures that Skype login names are unique across the Skype name
    space

A WebinOs ID should at least formed with userid and device ID? So a full
registration might look like –

-   In registration, user use one device (have public access – “super
    device”?) to register with “login server”. After successfully
    registered, it pass this information to all his/her devices ( Maybe
    authentication would also take place at this stage to make sure only
    his/her own devices got this userID). In return, each device pass
    their device ID to the “super device”.
-   Device ID will only be unique to a user. For devices belong to
    different users, the devices ID can be the same. Because unique
    “userid” should be enough to guarantee a unique “webinos ID” as I
    guess that “webinOS ID” should at least formed with userid and
    device ID.
-   “super device” then returns his/her device lists to “login server”.
    So “login server” shall now have a full list of “user-id & device
    id”.

*Comment: we also want to avoid creating a separate identity just for
Webinos. As a webinos user, I want to be able to identify through OpenID
/ Twitter / Facebook / My workplace.*

**[Dave Raggett, W3C] Thought 3 - Reducing the attack surface:**

-   [Trusted Web Applications Considered
    Harmful](http://berjon.com/blog/2011/02/harmful-trust.html)

Robin Berjon co-chair of W3C's DAP WG notes that the use of interpreted
scripting languages for web applications lays them wide open to risk of
code injection through XSS bugs. This can occur in both client and
server side code. It is very hard to develop safe applications, although
the use of thoroughly tested security libraries can help.

-   [OWASP Enterprise Security
    API](http://www.owasp.org/index.php/Category:OWASP_Enterprise_Security_API)
-   [HTML Purifier](http://htmlpurifier.org/)

It's not exactly as if XSS bugs were rare, either. Thomas Roessler has
shown that Apple's Dashboard widgets were frequently susceptible to such
attacks. I'd be rather surprised if we couldn't find such holes in
widgets built using OMTP BONDI or JIL APIs (WAC 1.0 widgets are somewhat
safer in that some of the more powerful APIs are not exposed yet).

Firefox extensions have very elevated privileges, but this is also bad
news as a bug can give attackers access to the entire device. There are
always bugs, so blind trust is scary! Signing an app to show that it has
passed a certain level of scrutiny offers only weak assurances. Is it
possible to define a new kind of sandbox with limited privileges and
resistance to code injection attacks?

We should look at how to safely add features within the distributed code
security boundary. This reduces the burden on web application
developers, placing it instead on the browsers where it belongs.

**[Dave Raggett, W3C] Thought 4 - Privacy friendly authentication:**

Today's practices for authentication on the Web are inadequate in a
number of regards:

-   It is hard for most people to remember different ids and passwords
    for different sites. As a result, it is common for people to use the
    same id/password across many sites.
-   Users tend to pick easy to remember passwords, that are relatively
    easy to crack with dictionary attacks.
-   The common practice of using email addresses as identifiers
    facilitates linking personal data across websites.
-   Asking users to enter their id/password into web page forms
    facilitates phishing, where an attacker invites users to enter their
    credentials into a site that the user mistakes for the bona fide
    website.
-   The lack of usability for public key certificates, means that users
    will often overlook problems with certificates, for example, it is
    common to come across expired certificates, where sites have failed
    to renew them in a timely way. Phishing sites are able to obtain
    certificates with relative ease, and few users will check the
    certificate when the site appears sound (i.e. the browser displays
    the padlock icon for a secured page). This means that users don't
    have a reliable and usable means to verify the sites authenticity
-   The practice of sending user id/password in the clear, as has been
    highlighted by the firesheep extension, which eavesdrops on
    unencrypted WiFi traffic to collect user ids/passwords.

It is therefore timely to consider new approaches for authentication on
the Web, including the role of anonymous credentials as a way to ensure
greater privacy.

The starting point is to avoid users typing credentials into a web page.
We need a means for websites to indicate the requirements they have for
authentication, and for browsers to authenticate users to the device,
and the device to authenticate users to the website.\
Mozilla have been exploring this with the Firefox Account Manager:

-   [Firefox Account
    Manager](https://wiki.mozilla.org/Labs/Weave/Identity/Account_Manager)

This provides a clean user interface for users to sign on with a
website, where the website describes its interface to the browser using
a JSON-based declaration. Users never have to create or type their user
id or password, as these are automatically created for them by the
browser, with strong passwords that resist dictionary attacks. The
approach can also be used with OpenID, but that is losing ground as its
weaknesses have emerged.

I also like the idea of mutual authentication where the browser and
website securely exchange secrets when setting up an account. Both
parties use this to authenticate each other in subsequent visits.

-   [Mutual Authentication Protocol for
    HTTP](http://tools.ietf.org/id/draft-oiwa-http-mutualauth-08.txt)

There has been work on this for some time in the IETF, and we could dust
that off. I suspect that we could make do with fewer round trips than
Oiwa et al. suggest.

-   [Boosting Privacy
    Online](http://www.w3.org/QA/2010/11/boosting_privacy_online_-_anon.html)

This illustrates the role of zero knowledge proofs for proving to a
website that the user is a member of a given group, or is at least 21
years old, or lives in a given city, but without disclosing any more.
The above blog reports on work I did with IBM Research, Zurich,
combining a Firefox extension with the identity mixer library. I am now
planning on porting the core of the library to C for integration into
webkit.

Government issued credentials such as the new German ID card could in
principle be used together with zero knowledge proofs for privacy
friendly authentication, where websites have the solid assurance of the
strength of the credential, and only the minimal amount of personal data
is transferred to the website, for example, that the user is of age, or
lives in a given city or is of a particular gender.

Strong credentials could also be used to underwrite pseudonymous
identities, where the user generates a new such identity for each site.
Websites would then be able to verify that the person with a given
pseudonymous identity has the stated properties, but without learning
any more about who that user is. A break-the-glass mechanism would allow
the true identity to be revealed under a court order in the eventuality
of civil or criminal proceedings. It is time to widely deploy zero
knowledge proofs for strong authentication on the Web!

When credentials are held on smart cards, USB sticks or other devices,
including mobile phones, how does the browser discover them? A further
challenge is to look at whether anonymous credentials should be
integrated into the transport protocol (HTTP) or should remain at the
layer above as in my demo.

**[John Lyle, Oxford] Thought 5 - Device-specific security properties:**

One of the big challenges faced by Webinos is that it needs to operate
on devices in remarkably different contexts and with different hardware
assumptions. For instance, mobile phones have fairly well-established
device identifiers and roots of trust, whereas PCs have long resisted
unique identifiers, most of which are unreliable (IP/MAC). Cars and
set-top boxes are also likely to be different. Furthermore, each will
have different levels of process isolation, and probably the webinos
runtime will have different OS-level implementations. Some may support
hardware roots of trust and attestation, others will not.

How do we let applications know the limitations of the devices without
compromising privacy? And how do we let applications know this without
trusting the devices overly?

