Spec - Authentication ModifiedScenario1[¶](#Spec-Authentication-ModifiedScenario1)
==================================================================================

Major changes compared to Scenario 1:

-   authentication is detailed further
-   set-up of secure channel is detailed further
-   sequence of message flow is changed so that repeatedly required
    messages are always the same regardless of the purpose of
    establishing the connection
-   establishing connection between two devices of the same zone is
    always the same regardless of availability of the PZH. Only the
    steps before establishing the connection differ.

<div class="uml">title Modified Scenario 1\nGeorge wants to view his mobile hosted MP4s on his set-top-box\nand both devices have access to the internet

actor George
box "Mobile" #lightgreen
	participant "George's\nmobile\nWRT" as George_mobile
	participant "George's\nmobile\npersonal zone\nproxy" as mpzp
end box
participant "George's\npersonal\nzone hub" as pzh
box "Set-Top-Box" #FF8888
	participant "George's\nset-top-box\npersonal zone\nproxy" as spzp
	participant "George's\nset-top-box\nWRT" as George_set_top_box
end box

autonumber

== identification ==

group identification example
	George -> George_mobile : switch on
	George_mobile -> George : ask for the pin
	George -> George_mobile : provide the pin

	note over George, George_mobile
		Once the user is authenticated, the PZP has
		access to the local credential store on the
		device which stores private and secret keys
	end note
	
end

== personal zone join ==

George_mobile -> mpzp : join the personal zone
alt Personal Zone Hub available
	mpzp -> pzh : authenticate
	pzh -> mpzp : authenticate
	note over mpzp, pzh
		Keys from the credential store
		are used for authentication
	end note
	mpzp -> pzh : set-up secure\ncommunication channel
	note over mpzp, pzh
		TLS is used for authentication
		and for establishing the secure
		channel
	end note
	mpzp -> pzh : register online status
	note over mpzp, pzh
		device and all the running
		services are registered at
		the PZH
	end note
	pzh -> mpzp : synchronise local\ndata cache\n(includes device list)
	mpzp -> George_mobile : transmit the device list
else Personal Zone Hub unavailable
	autonumber 5
	pzh --> mpzp : timeout
	mpzp -> George_mobile : transmit the\ncached device list
end

== connection establishment ==

George_mobile -> George : show the device list
George -> George_mobile : select the set-top-box
George_mobile -> mpzp : establish a channel\nwith the set-top-box
alt Personal Zone Hub available
	mpzp -> pzh : check online status\nof the set-top-box
else Personal Zone Hub unavailable
	autonumber 10
	pzh --> mpzp : timeout
	mpzp -> spzp : locally discover the set-top-box
end

mpzp -> spzp : establish a secure channel

note over mpzp, spzp
	TLS is used for authentication and for 
	establishing the secure channel
end note

spzp -> George_set_top_box : establish a channel with the mobile

George_set_top_box -> George_mobile: connection established
George_mobile -> George: notify connection

== service provision ==

George -> George_mobile : ask for MP4 list
George_mobile -> George_set_top_box : MP4 list retrieval
George_set_top_box -> George_mobile : MP4 list transmission
George_mobile -> George : MP4 list display
George -> George_mobile : MP4 selection
George_mobile -> George_set_top_box : MP4 retrieval
George_set_top_box -> George_mobile : MP4 transmission
George_mobile -> George : MP4 consumption</div>

