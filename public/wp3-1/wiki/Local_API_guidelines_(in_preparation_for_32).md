Local API guidelines (in preparation for 32)[¶](#Local-API-guidelines-in-preparation-for-32)
============================================================================================

Webinos APIs are going to be led by different companies and created by
different people. It is very important all the Webinos APIs adhere to a
set of common patterns and best practices so that:

-   All Webinos can be used in the same way by developers.
-   Duplication of work is avoided.
-   Webinos looks like a unique project rather than as the aggregation
    of different ones.

In order to achieve this consistency, it is very important the tools
used by all the authors are the same. A set of guidelines are needed
such as:

Which methods should be made asynchronous and which ones should be
synchronous. E.g. lengthy operations, security sensitive ones...

Which is the pattern for asynchronous calls:

1.  listeners, one callback, multiple callbacks.
2.  Order of the callbacks.
3.  Are all the callbacks mandatory? Are error callbacks always
    optional?
4.  Can a success callback be invoked many times? e.g. what happens if a
    message is sent to multiple recipients?

Filtering: Different APIs may need data filtering, a common pattern
should be defined for them.

Data exposed: Should APIs try to expose as much data as possible or
should they try to focus on the less common denominator?

Error Handling:

1.  How should we specify errors, unique Error interface or distributed
    in every module? how do we handle error codes and error code
    collision?
2.  Can asynchronous methods throw errors? If so, under which
    circumstances?
3.  What is a valid type? (Note that ES is a very loosely typed
    language), what is a valid argument?

All these questions are not new and have been already raised/discussed
in other fora, however it is important we try to answer them as soon as
possible so we can start specifying APIs based on some assumptions.

I already created some guidelines for WAC, see:
<http://specs.wacapps.net/wac2_0/feb2011/deviceapis/patterns.html>. We
can use them as starting point for this discussion.

