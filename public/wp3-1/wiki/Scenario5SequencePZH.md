Scenario5SequencePZH[¶](#Scenario5SequencePZH)
==============================================

<div class="uml">title : Scenario 5\nGeorge has music hosted on a web service,\nand wants to listen to them on his own mobile device

actor George
participant "George's mobile" as George_mobile
participant "George's\npersonal\nzone proxy" as pzp
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
alt first step: contact the SP
	George_mobile -> SP : try to access Service Provider
	SP -> George_mobile : redirect to PZP
	note over SP, George_mobile
		Doesn't works. How can SP know
		where to redirect the connection?
	end note
else first step: contact the PZP
	autonumber 5
	George_mobile -> pzp : authenticate
	pzp -> George_mobile : return the credential
	George_mobile -> SP : transmit the credential
end

== service provision ==

George -> George_mobile : ask for music list
George_mobile -> SP : music list retrieval
SP -> George_mobile : music list transmission
George_mobile -> George : music list display

George -> George_mobile : music file selection
George_mobile -> SP : music file retrieval
SP -> George_mobile : music file transmission
George_mobile -> George : music file consumption</div>

