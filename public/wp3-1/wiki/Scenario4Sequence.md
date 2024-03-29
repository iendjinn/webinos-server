Scenario 4 Sequence Diagram[¶](#Scenario-4-Sequence-Diagram)
============================================================

<div class="uml">title : Scenario 4\nGeorge wants to listen to Paul's MP4s on his mobile\nmobile to mobile, and neither have access to the internet

actor George
participant "George's mobile" as George_mobile
participant "Paul's mobile" as Paul_mobile
actor Paul

autonumber

note over George, Paul #FF6666 : this scenario differs from scenario 3 in note before step 15

== identification ==

group identification example
	George -> George_mobile : switch on
	George_mobile -> George : ask the pin
	George -> George_mobile : provide the pin
end

== device discovery ==

group device discovery example
	note over George, George_mobile : the user may set a policy to automatically\nstart device discovery
	George --> George_mobile : <font color="gray"><i>start device discovery</i></font>
	George_mobile -> Paul_mobile : broadcast hello message
	note over Paul_mobile, Paul : For privacy reasons Paul MAY explicitly\nturn on visibility of his mobile for the\ndiscovery process
	Paul_mobile -> George_mobile: hello response
end

== personal local cloud join ==

George_mobile -> George : show available clouds\nand devices
George -> George_mobile : select Paul's mobile
George_mobile -> Paul_mobile : George's mobile tries to authenticate
note over George_mobile, Paul_mobile : authentication fails because George's mobile\ndoesn't know Paul's personal cloud secret
Paul_mobile -> George_mobile : authentication failed

George_mobile -> Paul_mobile: ask for join permission
Paul_mobile -> Paul : ask for join permission
Paul -> Paul_mobile: grant join permission

group session key exchange example
	Paul_mobile -> Paul : generate a session key
	note over George_mobile, Paul_mobile : How to communicate the session key?\n- out-of-band\n- by a clear, local channel (e.g. by bluetooth)\n- by an encrypted channel created without a trusted third party\n  (e.g. a device can send his public key to the other one)
	Paul -> George : communicate the session key out-of-band
	George -> George_mobile : insert session key
end

note over George_mobile, Paul_mobile : devices can use the session key\nto establish a secure channel
George_mobile -> Paul_mobile : establish a secure channel
 
== service provision ==

George -> George_mobile : ask for MP4 list
George_mobile -> Paul_mobile : MP4 list retrival
Paul_mobile -> Paul : ask for MP4 list\nsharing permission
note over Paul, Paul_mobile : the permission is temporary because the\napp user is a personal local cloud guest
Paul -> Paul_mobile : grant temporary permission
Paul_mobile -> George_mobile : MP4 list transmission
George_mobile -> George : MP4 list display

George -> George_mobile : MP4 selection
George_mobile -> Paul_mobile : MP4 retrieval
Paul_mobile -> Paul : ask for MP4 sharing permission
note over Paul, Paul_mobile : the permission is temporary because the\napp user is a personal local cloud guest
Paul -> Paul_mobile : grant temporary permission
Paul_mobile -> George_mobile : MP4 transmission
George_mobile -> George : MP4 consumption

George -> George_mobile : select another MP4
George_mobile -> Paul_mobile : MP4 retrieval
Paul_mobile -> George_mobile : MP4 transmission
George_mobile -> George : MP4 consumption</div>

REMARKS:

All Like in scenario 3. Just the fourth case of step 15 it is not
possible without internet access.

