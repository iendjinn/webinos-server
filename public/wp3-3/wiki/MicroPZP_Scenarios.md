CF: At the moment, this section looks primarily like a 'quick example
note' version of the section that's needed. First of all, there needs to
be some description of what types of microPZP scenarios exist,
essentially establishing in which cases a microPZP is needed and why a
full PZP is not appropriate here. And only **then** should there be a
number of specific examples for scenarios using microPZP, And they
should specifically relate to the reasons given for a microPZP usage in
the introduction part. There should also be a clear difference between
cases where a microPZP should be used (usually an autonomous system that
has not quite enough capabilities to run a full PZP) and cases where
sensors are logically just extensions of normal PZPs. The Bluetooth
heart-rate monitor, for example, does not really represent a microPZP
scenario - from the architectural view, the device is just a sensor
connected 'semi-magically' to the PZP of the phone. An application would
be unable to distinguish between a heart-rate sensor built into the
phone and one connected via Bluetooth - so it's not an example of a
microPZP. A microPZP is a stand-alone PZP, just with a limited
functionality set due to technical limitations. Especially the first
example even specifically mentions using an existing PZP and a "mobile
based gateway", so it's pretty much an example of a non-microPZP
scenario. The second example (parking sensor) fares slightly better, but
only if it is specifically stated that the individual 'sensors' are
fairly smart sensors with their own addressibility and computing
facility. If they are just connected to a central server, then they are
just 'dumb' sensors and will be served by the PZP of that server. I
think the idea behind the scenario is that all sensors are connected to
one router, so the sensors by themselves are 'dumb', but the router acts
as a PZP, but due to the fact that the router is limited in capability
can only host a limited version of the PZP, hence a microPZP. But that
needs to be more explicitly stated or the example is confusing.

Smart health scenario[¶](#Smart-health-scenario)
================================================

In the smart health, patients can get some benefit from continuous
long-term monitoring as a part of a diagnostic procedure through the use
of body sensor network, which is composed of different sensors such as
ECG,EEG,PPG to monitor patient's body information like blood, heart
beat. The sensor motes in the body sensor network is wearable, so it is
very tiny, small embedded on the cloths or even underneath the skin,
thus they are usually constrained not only by their size but also
computation,power,memory capability, they are in our case, the microPZP.
In order to forward the health data to the data center, a more powerful
device is needed such as mobile phone, which is considered as a PZP.\
Via PZP (mobile based gateway), it is possible to connect the body
sensor network to internet. All the health data are sent to the internet
hub, which is the PZH. By exchanging the permissions, doctors can check
the patients' condition much easier unmanned, such as temperature,
pulse, etc. In the M2M, doctors use smart phones, pads or computers to
get patients' information and the messages flow is described in Figure
2. Doctor runs web browser or application software of watcher(e.g.,
smart phone, pad and computer) to check the patient's condition.

In this scenario, data confidentiality and authentication matters more
for the microPZP.

Smart parking scenario[¶](#Smart-parking-scenario)
--------------------------------------------------

Parking sensors embedded in the pavement of the selected parking spaces
detect when a space is available. The parking sensor normally is based
on magnetic sensor, which can detect low earth magnetic level affected
by the metal material in the car. To increase the precision, infrared
sensor is used as well. These sensor platform is forming a mesh wireless
sensor network. smart routers communicate with sensors to aggregate
sensor data and the same time communicate with the cloud center to
deliver the availability of the parking spots. The intelligent network
platform captures the data and publishes it into free mobile
application, which displays real-time availability of these on-street
spaces as well as locations of off-street parking garages and lots along
with other information such as pricing and enforcement hours.

In this scenario, The parking sensors in the mesh network is the
microPZP, and the smart routers is the PZP acting as the gateway, and
cloud center is the PZH. The security issue on the microPZP is not only
the data confidentiality, device authentication, but also to prevent
theft and to avoid anyone impersonating the device to connect to the
rest of the network.

