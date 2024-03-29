Content Adaptation: custom JS framework[¶](#Content-Adaptation-custom-JS-framework)
===================================================================================

First of all I apologize for writing bits of this page in a more
personal way, as it will be about something I did for Webinos back in
march, it was a short period of development, the whole thing ended as a
prototype only; also it may contain my thoughts/opinions - we can make
it more formal later (or scrap the whole page altogether if this concept
is stupid) -- Michal T. Kozak (<mtkozak@antennasoftware.com> - with
limited access from 22.07 to 05.08)

The general problem[¶](#The-general-problem)
--------------------------------------------

Let's look at a visualization of the problem - comparison of the low-end
smartphone's resolution (i.e. Samsung Galaxy Y) to a Full HD one [pic
resized by 50%]:

![](resolutions2.png)

Clearly it's not only about making things look the same on every
platform; it's also not exactly about making "widgets" (or any other
page segment however we call them) resize according to resolution (but
that of course could be part of the solution) - it's more about making
decisions how to divide page to chunks and create sub-pages.

Real example[¶](#Real-example)
------------------------------

The initial design for the Webinos Enabled Twitter (WET) app had quite a
big visual difference between the large and small screen (colourized by
me, so you can know what goes where):

![](wet-mock.png)

Not only one TV screen could contain two different screens of a mobile
app, but it also had to have a different menu (and possibly other
stuff). And of course all of that makes sense. But since it's all
client-side it generates a problem: do we make the app single-page
application (SPA) with one .html file and conditional code inside, or do
we break it all apart into segments and load them when needed? For me
the more sensible approach was the latter.

What I had in mind[¶](#What-I-had-in-mind)
------------------------------------------

To create a framework based NOT on pages or "views" (like i.e. jquery
mobile or dojo mobile), but upon segments (small files containing html
fragments) and containers (defined in layout definition - you control
what goes where for a given screen size). Last touches would be provided
with the means of CSS media queries (see
<http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/>).

Why not just media queries and ad hoc JS?[¶](#Why-not-just-media-queries-and-ad-hoc-JS)
---------------------------------------------------------------------------------------

If you took a peek at the link above, you could think that media queries
could be enough - rearrange stuff with css, hide unnecessary visuals.\
Or you could divide a page manually with JS by adding links/menu to
hide/display what needed. Heck, I did it myself during development of
Webinos Travel.\
But it wasn't really handy, for just 3 parts of a page you had to add a
lot of conditionals. And the WET example would not work just with media
queries alone too - not only it could be A LOT of scrolling, but also
those two list are a two distinct logical segments that shouldn't be on
one small page of a mobile phone.

Where did I left the development at[¶](#Where-did-I-left-the-development-at)
----------------------------------------------------------------------------

Sample of the layout definition (prototype, subject to change because it
wasn't very comfortable to use):

     1 (...)
     2 'menucreate': [
     3     'Create Tweet', //name to make the whole array cohesive, it's also used too
     4     "create.htm", //def. file to be loaded for the 'create'; else - go deeper; this will not go into the secondary menu
     5     ['PUTALL ||| Users', //PUTALL - when clicked, load all of it for a pc; else just take the first html
     6         ['PUTINTO=Contacts Container ||| Device contacts', "users/contacts.htm"],
     7         ['PUTINTO=Contacts Container ||| Twitter contacts', "users/twitter-contacts.htm"],
     8         ['PC ||| Create Tweet', "create.htm"] //PC - skip it on mobile (both menu and parsing)
     9     ],
    10 (...)

The framework would put it all together, load every segment via an ajax
call and then fire up a "post-process" function for each one of them if
needed - of course there could be anything in that function.

In the end it would look like this (two mobile sub-pages against one pc
page; menus used the same html, styled using media queries, some
framework magic going on with secondary menu for the mobile version;
again colourized for convenience):

![](wet-resultColor.png)

Close enough.

What was still missing[¶](#What-was-still-missing)
--------------------------------------------------

-   no queue for the loaded segments (see above: PUTINTO=Contacts
    Container - those two segments could switch their places - whichever
    was loaded first)
-   no loading indicator
-   no history (via address hash - for the pc at least)
-   more stuff that could be useful - it was just a PoC :)

Pros[¶](#Pros)
--------------

-   no need to learn any new language, creating the layout definition
    should be quite simple
-   everything can be organized using separate files
-   a lot of control over the layout
-   being a home-brew we could implement only what we truly need

Cons[¶](#Cons)
--------------

-   if there's a lot of segments on the page it could generate a bit of
    an overhead?
-   the whole thing right now is a prototype providing just the basic
    functionality :)
-   really important problem right now (that is out of scope for this
    framework; it's a css issue) is a header/footer issues on different
    mobiles. Ideally if we could have them drawn OUTSIDE of a webview
    (as a native part of the app) then we're all set.

How I see it in the end[¶](#How-I-see-it-in-the-end)
----------------------------------------------------

-   layout map in a more convenient format; when coupled with html
    segments creating something that one could call flexible templates
-   as many screen dimension variants as the user needs (currently it
    was only mobile or pc) with a suggested few common ones
-   loading of off-screen segments in the background? (but maybe loading
    on demand is good enough for a local app? less memory intensive, and
    usually one has to process the data for a page anyway)
-   (optional) integration with LESS (<http://lesscss.org/>) to simplify
    page size variants
-   main goal: provide not a series of prefabricated widgets which are
    always limited, but a solid foundation for creating whatever the
    designer REALLY wants to.

------------------------------------------------------------------------
