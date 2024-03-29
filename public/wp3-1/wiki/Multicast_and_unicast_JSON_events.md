Multicast and unicast JSON events[¶](#Multicast-and-unicast-JSON-events)
========================================================================

It would be very easy to introduce a means to support inter browser
communication across local area networks. This could be exploited for
games and a variety of applications.

For browser to browser eventing on local area networks, where you can
send a JSON encoded event to a specific browser via a unicast message or
to all that are listening via a multicast message, the demo script would
look something like:

    var message_hub = {
      receive: null, // message delivery handler

      // to is a string for an IP address, this
      // argument is omitted for multicast events
      send: function (object, to)
      {
        var plugin = document.getElementById("my_plugin");
        plugin.send(message_hub, JSON.stringify(object), to);
      },

      // called by the plugin on receiving a message
      dispatch: function (message, from)
      {
        if (message_hub.receive)
          message_hub.receive(JSON.parse(message, from);
      }
    };

where the above is hidden in a library included by the web page. The
multicast address and port for the service would be registered with
IANA. The above functionality could be standardized as a new object
available as a property of the Window object.

A more sophisticated approach would allow you as a web page developer to
designate a markup element as a message hub. You could then register DOM
event listeners to handle incoming messages, and send events by
targeting events at the hub. The library script would look for elements
with a given attribute and add the above behavior. This is feasible as
the DOM allows scripts to define new kinds of events. We could then
standardize the attribute and the event format.

Note that the library could be written to start and stop listening when
the web page registers a listener or removes that listener. This could
be implemented via a function exposed by the plugin that takes the
listener count as an argument. The use of UDP datagrams imposes a
practical limit of a little over 1000 bytes to avoid packet
fragmentation. The existing Web Sockets API would be used for larger
messages, or for a streamed connection with a given browser.

