Synchronisation and coherence[¶](#Synchronisation-and-coherence)
================================================================

<span style="background:yellow;">Suggest rewording from
'synchronisation' based on new definitions. Perhaps 'consistency' not
coherence?</span>

-   [Synchronisation and coherence](#Synchronisation-and-coherence)
    -   [Access control policy elements to
        synchronise](#Access-control-policy-elements-to-synchronise)
    -   [Cross-Device Policy Synchronisation Scenarios (to
        update)](#Cross-Device-Policy-Synchronisation-Scenarios-to-update)

Access control policy elements to synchronise[¶](#Access-control-policy-elements-to-synchronise)
------------------------------------------------------------------------------------------------

This section describe which elements of a policy can be synchronized in
order to share policies among PZPs and PZH in a coherent way.

In the access control policies grammar
([Grammars\_for\_access\_control\_and\_privacy\_policies](.html)), some
elements (i.e. policy-set, policy, rule) contain an id attribute useful
for synchronisation purposes.

Cross-Device Policy Synchronisation Scenarios (to update)[¶](#Cross-Device-Policy-Synchronisation-Scenarios-to-update)
----------------------------------------------------------------------------------------------------------------------

<span style="background:yellow;">As per conversation with Salvatore -
needs updating.</span>

***Installing an app ('A') on device 'D', granting it permissions, and
then wanting to allow it to use device 'E':***

-   Assume device 'D' and 'E' are used only by the user Justin.
-   Justin "installs" 'A' on 'D'.
-   At end of install process, after granting the application some
    permissions, Justin is prompted "This application can be used on
    multiple devices. Install on [list of user devices and tick box]"
-   Justin selects that the application should be installed on device
    'E' as well.
-   Prompt: "Give application permission to access the same resources? /
    Customise permissions / Ask me later?"
-   Justin clicks "give same resources"
-   Webinos runtime creates a message to device 'E' containing
    instructions for doing this.\
     o Name of application, permissions granted on this device\
     o Justin's credentials/signature
-   Message queued to be sent on the overlay network to the other
    device, using a secure transport session. This may happen
    immediately if possible (e.g. if device 'D' is a home server) or may
    wait for a proximity event, or may be queued on a cloud service
    waiting for the user to interact with device 'D' in the future.

***Using device 'D' to remove permission for app 'A' to access resource
'R' on all devices (Device 'D' and 'E'):***

-   Peter has been using app 'A' and decides he doesn't trust it after
    being told by a friend that it sends data to advertisers.
-   He is using device 'D', as this is his main device
-   He navigates to the policy management area (or maybe he right-clicks
    on the application icon) and selects "remove".
-   He is asked whether he wants it to be removed across all of his
    devices (a list of his local devices might be selected) and he
    clicks on all of them.
-   Webinos runtime generates a signed update message to each device in
    his cloud, including device 'E', in a secure manner:\
     o "Remove app", app name\
     o user credentials, device credentials
-   These are sent when the device is able to connect to other devices
    and when these devices are capable of authenticating themselves
-   Depending on the device security policies, the deletion may happen
    automatically, or the app might be isolated and require local
    permission to delete

***Using device 'D' to authorise app 'A' to access resource 'P' on
device 'E' (E and D owned by the same user):***\
***Using device 'D' to authorise app 'A' to access resource 'P' on
device 'E' (E and D owned by different users):***

-   Helen is using app 'A' and wants to use it to access her friend
    Gloria's photos on device 'D'.
-   She selects to discover other devices, and finds Gloria's device 'D'
-   She requests access to photos on 'D'.
-   Gloria's device prompts Gloria to allow this and presents Alice's
    device details, as well as the history of communication with this
    device.
-   Gloria approves the communication
-   Gloria's runtime adds a temporary permission for the photo app
    (resource 'P') on Gloria's phone

***Updating labels on stored user data - marking some as 'private' on
device 'D' and having the same data on device 'E' automatically
tagged:***

-   Gloria decides to make sure her personal data is being protected
    appropriately
-   She looks at her webinos device to see what data about her is known
-   Some data is marked as "private" and other data is not.
-   She notes that her "place of work" is listed but not marked as
    private
-   She tags this data as "private" and therefore all policies apply to
    it that apply to other private data.
-   She tells webinos to update this setting on all her devices
-   Webinos queues a signed policy update request for device 'E':\
     o Update policy, data item, new XACML\
     o User credentials, device credentials

***Registering device 'F' as being a trusted device with respect to
device 'D' and device 'E':***

-   Anna has just bought a new tablet PC ('F'), and would like it to
    automatically synchronise with other devices
-   She uses it to discover her mobile phone ('D'), a webinos device.
-   On discovery, she selects the mobile phone symbol and chooses to
    join the "local webinos device cloud"
-   Untrusted message from tablet to phone:\
     o "device join", device ID
-   This prompts her mobile phone to authenticate her
-   She enters her credentials into the phone
-   The phone adds this device to a "known" and "personal devices" set
-   The tablet PC downloads the relevant set of policies (as well as
    profile info - out of scope ) from the mobile phone and applies
    them. This includes the identity of other devices in the cloud.

