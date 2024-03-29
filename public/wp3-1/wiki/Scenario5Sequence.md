Scenario 5 Sequence Diagram[¶](#Scenario-5-Sequence-Diagram)
============================================================

<div class="uml">title : Scenario 5\nGeorge has music hosted on a web service,\nand wants to listen to them on his own mobile device

actor George
participant "George's mobile" as George_mobile
participant WAP
participant UR
participant IDP
participant SP

autonumber

== identification ==

group identification example
	George -> George_mobile : switch on
	George_mobile -> George : ask the pin
	George -> George_mobile : provide the pin
end

== authentication ==

George -> George_mobile : insert address of\nService Provider (SP)
George_mobile -> SP : try to access Service Provider
SP -> George_mobile : redirect to Webinos Authentication Provider (WAP)
George_mobile -> WAP : ask for authentication
WAP -> UR : ask for user account list
UR -> WAP : return the user\nIdentity Provider (IDP) list
WAP -> George_mobile : return the IDP list
note over George_mobile, George : IDP can be automatically selected\nby the mobile using a policy or a\nstored user preference
George_mobile --> George : <font color="gray">present an IDP selector</font>
George --> George_mobile : <font color="gray">select an IDP</font>
George_mobile -> IDP : autheticate
IDP -> George_mobile : return the SAML token
George_mobile -> WAP : give WAP the SAML token
WAP -> George_mobile : issue the WeST
George_mobile -> SP : transmit the WeST (with timestamp and user signature)

== service provision ==

George -> George_mobile : ask for music list
George_mobile -> SP : music list retrieval
SP -> George_mobile : music list transmission
George_mobile -> George : music list display

George -> George_mobile : music file selection
George_mobile -> SP : music file retrieval
SP -> George_mobile : music file transmission
George_mobile -> George : music file consumption</div>

REMARKS:

Standard Webinos authentication protocol (SWAP?)

