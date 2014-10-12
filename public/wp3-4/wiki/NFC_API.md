APIs: The NFC module[¶](#APIs-The-NFC-module)
=============================================

Webinos API Specifications[¶](#Webinos-API-Specifications)
----------------------------------------------------------

30 July 2012

Author[¶](#Author)
------------------

-   Dave Raggett (W3C), \<<dsr@w3.org>\>

Copyright © 2012 [webinos consortium](http://www.webinos.org)

Abstract[¶](#Abstract)
----------------------

Near Field Communication (NFC) is an international standard (ISO/IEC
18092) that specifies an interface and protocol for simple wireless
interconnection of closely coupled devices operating at 13.56 MHz.
(<http://www.nfc-forum.org/specs/spec_list/>). There are three groups of
application scenarios for NFC: The first one is to hold a device close
to a wireless tag to exchange some digital information or data. The
second is to hold two devices close to each other in order to exchange
some information or data between them. The third one is to make payments
by holding mobile phones close to point of sales terminals instead of
swiping smart cards.

Table of Contents[¶](#Table-of-Contents)
----------------------------------------

-   [Introduction](%20Introduction.html)
    -   [Listening for a Tag](%20Listening%20for%20a%20Tag.html)
    -   [Writing to a Tag](%20Writing%20to%20a%20Tag.html)
    -   [Setting Tag to
        read-only](%20Setting%20Tag%20to%20read-only.html)
    -   [Pushing NDEF Message to another
        device](%20Pushing%20NDEF%20Message%20to%20another%20device.html)
    -   [Peer to Peer Communications with
        LLCP](%20Peer%20to%20Peer%20Communications%20with%20LLCP.html)
-   [NFC Interface](%20NFC%20Interface.html)
    -   [addListener](%20addListener.html)
    -   [addTextTypeListener](%20addTextTypeListener.html)
    -   [addUriTypeListener](%20addUriTypeListener.html)
    -   [addMimeTypeListener](%20addMimeTypeListener.html)
    -   [shareTag](%20shareTag.html)
    -   [unshareTag](%20unshareTag.html)
    -   [peer](%20peer%20.html)
    -   [stringToBytes](%20stringToBytes.html)
    -   [bytesToString](%20bytesToString.html)
-   [Callbacks](%20Callbacks.html)
    -   [NfcEventCallBack](%20NfcEventCallBack.html)
    -   [SuccessCallBack](%20SuccessCallBack.html)
    -   [FailCallBack](%20FailCallBack.html)
    -   [LLCPCallBack](%20LLCPCallBack.html)
    -   [CloseCallBack](%20CloseCallBack.html)
-   [NFC Tag](%20NFC%20Tag.html)
    -   [NFC Technologies](%20NFC%20Technologies.html)
    -   [NDEF Message](%20NDEF%20Message.html)
    -   [write](%20write.html)
    -   [makeReadOnly](%20makeReadOnly.html)
-   [Complete WebIDL](%20Complete%20WebIDL.html)
-   [Acknowledgements](%20Acknowledgements.html)
-   [References](%20References.html)

