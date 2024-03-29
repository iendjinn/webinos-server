Scenario 9 Sequence[¶](#Scenario-9-Sequence)
============================================

<div class="uml">title : Scenario 9\nGloria is already logged-in to Facebook\nwhile accessing a hosted webinos music service

actor Gloria
participant "Gloria's mobile" as Gloria_mobile
participant WAP
participant UR
participant SP

note over Gloria, SP #FF6666 : this scenario differs form scenario 5 in the lack\nof identification phase and IPD contact phase

autonumber

== authentication ==

Gloria -> Gloria_mobile : insert address of\nService Provider (SP)
Gloria_mobile -> SP : try to access Service Provider
SP -> Gloria_mobile : redirect to Webinos Authentication Provider (WAP)
Gloria_mobile -> WAP : ask for authentication
WAP -> UR : ask for user account list
UR -> WAP : return the user\nIdentity Provider (IDP) list
WAP -> Gloria_mobile : return the IDP list

note over SP, Gloria : here webinos runtime needs to check if it already holds a\nSAML token received from an IDP included in the returned list

Gloria_mobile -> WAP : give WAP the SAML token
WAP -> Gloria_mobile : issue the WeST
Gloria_mobile -> SP : transmit the WeST (with timestamp and user signature)

== service provision ==

Gloria -> Gloria_mobile : ask for music list
Gloria_mobile -> SP : music list retrieval
SP -> Gloria_mobile : music list transmission
Gloria_mobile -> Gloria : music list display

Gloria -> Gloria_mobile : music file selection
Gloria_mobile -> SP : music file retrieval
SP -> Gloria_mobile : music file transmission
Gloria_mobile -> Gloria : music file consumption</div>

