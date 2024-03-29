D3.5 Retrospective / Post Mortem[¶](#D35-Retrospective-Post-Mortem)
===================================================================

As we have just finished the D3.5 deliverable, I believe it would be a
good opportunity to have a brief retrospective on how the task went.

Please feel free to add (or comment) however you like. If you want to
agree with something that has already been said, please do so. I would
be very pleased to get feedback on how to manage the task better, too.

For anonymous feedback, I'm going to suggest that we have a better
project-wise retrospective at the end of the year (unless Stephan has
already got one planned).

-   <span style="color:blue;"> Blue comments by John</span>
-   <span style="color:green;"> Green comments by Sven</span>
-   <span style="color:maroon;"> Dave - thanks John for a well managed
    deliverable!</span>
-   <span style="color:darkOrange;"> Orange comments by Dieter</span>

What went well?[¶](#What-went-well)
-----------------------------------

-   <span style="color:blue;">We delivered on time and produced a
    substantial document</span> -- <span style="color:green;"> I
    agree</span>
-   <span style="color:blue;">We delivered several new ideas and
    proposals, including things such as:</span> -- <span
    style="color:green;"> I agree</span>
    -   <span style="color:blue;">A new permissions framework
        incorporating privacy controls</span>
    -   <span style="color:blue;">A new authentication approach</span>
    -   <span style="color:blue;">An attestation API</span>
    -   <span style="color:blue;">An authentication API</span>
    -   <span style="color:blue;">An XACML-driven policy
        architecture</span>
-   <span style="color:blue;">We covered most security and privacy
    issues, most of the key areas were addressed</span> -- <span
    style="color:green;"> I agree</span>
-   <span style="color:blue;">Most of the architectural questions got
    answered</span> -- <span style="color:green;"> I agree</span>

What didn't go so well?[¶](#What-didnt-go-so-well)
--------------------------------------------------

-   <span style="color:blue;"> Specifications weren't - still high-level
    and not detailed enough. There are many places where we are
    distinctly underspecified.</span> -- <span style="color:green;"> I
    agree</span>
-   <span style="color:blue;"> We didn't keep it simple. The
    specifications still require a fairly complex
    architecture.</span> -- <span style="color:green;"> I agree</span>
-   <span style="color:blue;"> I am not convinced we covered some of the
    more human issues - usability, etc. User interfaces are crucial to
    better privacy controls, so perhaps we failed to innovate
    there.</span> -- <span style="color:green;"> I agree</span>
-   <span style="color:blue;"> Lack of prototyping new ideas.</span> --
    <span style="color:green;"> I agree</span>
-   <span style="color:blue;"> The open forum and "security/privacy
    leads" in each work area of 3.1 didn't really work.</span> -- <span
    style="color:green;"> At least in the IDM and authN subtask it
    worked</span>
-   <span style="color:blue;"> We didn't assess the APIs or most of 3.1
    for security and privacy issues.</span> -- <span
    style="color:green;"> I agree</span>
-   <span style="color:blue;"> We didn't manage to specify the following
    ideas:</span>
    -   <span style="color:blue;"> Policy outsourcing and
        delegation</span> -- <span style="color:green;"> Did we ever
        intend to do so?</span>
    -   <span style="color:blue;"> Digital rights management
        interfaces</span> -- <span style="color:green;"> Did we ever
        intend to do so?</span>
    -   <span style="color:blue;"> Business use cases: remote deletion,
        etc</span> -- <span style="color:green;"> I agree</span>
    -   <span style="color:blue;"> inter-personal policies</span> --
        <span style="color:green;"> I agree</span>
-   <span style="color:blue;"> Lack of rigour in the process and
    methodology: no formal threat and risk analysis</span> -- <span
    style="color:green;"> I agree</span>, <span style="color:maroon;">
    this can and should come as we have a crisper view of the webinos
    platorm</span>

Why did problems occur?[¶](#Why-did-problems-occur)
---------------------------------------------------

-   <span style="color:blue;"> Lack of communication between partners in
    3.5, 3.1 and 3.2.</span> -- <span style="color:green;"> I
    agree</span>
    -   <span style="color:blue;"> Reading redmine was a difficult way
        of keeping track with the development of the architecture, many
        places in which security-relevant decisions were made.</span> --
        <span style="color:green;"> I agree! There were phases in our
        work where I spent several days only to grasp what the others
        did</span>
    -   <span style="color:blue;"> Question: did partners not involved
        in security - FOKUS, DT, Sony Ericsson, Volantis, VisionMobile,
        NTUA, ISMB, etc - know who to contact, what was important, what
        needed to be discussed? Should we do something differently to
        encourage collaboration? Are privacy and security seen as an
        inconvenience and a potential time-waster? Do we need to be
        "adding more value"?</span>
    -   <span style="color:green;"> Experience shows that very often
        non-security people consider it as time-waster. Probably we
        should advertise our work and its usefulness more. As soon as
        people come to us to ask us for our opinion on the stuff they
        did, we succeeded. But this is a process. It needs time.</span>
-   <span style="color:blue;"> I felt it was difficult to make and
    commit to decisions about the security architecture.</span>
    -   <span style="color:blue;"> We should have been much faster in
        coming up with a baseline architecture.</span>
    -   <span style="color:blue;"> Partly due to uncertainty in the
        webinos architecture in general.</span> -- <span
        style="color:green;"> I believe this is the main reason forw why
        we have been slow, especially in the beginning.</span>
    -   <span style="color:blue;"> Partly because we had a number of
        daunting high-level theoretical challenges without obvious
        solutions, which meant problems stayed open longer than they
        should have.</span> -- <span style="color:green;"> Well, yes,
        but this is just how things start in a big project such as
        webinos. People have to find their pieces of work and relevant
        issues have to be separated from irrelevant ones. This requires
        a common goal. And to form that, it takes also time.</span>
        -   <span style="color:blue;"> This was, in turn, because we
            didn't have useful use cases available. This should have
            been our starting point.</span>
-   <span style="color:blue;"> Timing of the 2.8 work package meant that
    we couldn't reuse their results</span>
-   <span style="color:green;"> Timing of the 3.5 Task: it should have
    been started some time (e.g. 2 months) after</span> 3.1. How can we
    create a security architecture without knowing what to secure?%
    -   <span style="color:green;"> This is the reason why 3.5 was quite
        quiet in the beginning. We actually did not have the
        choice.</span>
-   <span style="color:green;"> We had a tight schedule! There are many
    things to secure and to solve in webinos and we already addressed
    most of the security work. However, with the time we had, the early
    start in parallel to 3.1, and the number of people we had, I believe
    we were fully kept busy with what we did. Would we have had time for
    additional things (e.g. a formal threat analysis)? I don't think
    so.</span>

What should we change in the future?[¶](#What-should-we-change-in-the-future)
-----------------------------------------------------------------------------

-   <span style="color:blue;"> Have two-day workshops like the 2.7/2.8
    sessions concentrating on specific issues and collecting
    ideas.</span> <span style="color:green;"> Oh yes, definitely! This
    will speed-up the whole thing. When you can meet in front of a
    whiteboard and spend the time to discuss/solve a particular issue
    for some hours, it is very likely to succeed. We have proven that in
    the 2.7/2.8 workshops.</span> <span style="color:maroon;"> face to
    face time is also good for coming up with and discussing pertinent
    use cases.</span> <span style="color:darkOrange;">it would be good
    if one representative of each domain (e.g. auth, context, ...) was
    there to aid in the discussion. I feel the communication between
    domains started too late now, and this could speed it up.</span>
-   <span style="color:blue;"> Greater use of redmine issues for
    tracking tasks and partner contributions.</span> -- <span
    style="color:green;"> Maybe. I'm not that sure. I can see the value,
    but I felt them being a pain. I was fully involved in my technical
    work and did not want to find the issues relevant for me, hidden
    somewhere in the huge list of issues. The 3.5 team is small enough
    to directly agree on how to spread work by talking to another. f2f
    meetings will also improve on that.</span>
-   <span style="color:blue;"> Better isolation of individual work areas
    and tasks, so that we have fewer meetings and have a better defined
    scope of activities</span> -- <span style="color:green;"> If
    possible, yes! But some will be overlapping. IT would help if people
    were a bit more verbose on what they do and if people were
    interested in what the others do.</span>
-   <span style="color:blue;"> Work in more depth and less breadth: now
    we have a starting point, chose smaller areas to work on
    improvements, rather than specifying the whole system at
    once.</span> -- <span style="color:green;"> I agree, but as stated
    above, in the beginning, such a big project always starts
    broad.</span>
-   <span style="color:blue;"> Now we have a baseline, spend more time
    assessing the architecture than developing new features</span> --
    <span style="color:green;"> I agree. Now that the architecture is
    there, we can do.</span>
-   <span style="color:blue;"> More iterative development</span> --
    <span style="color:green;"> I agree. This is always efficient
    because of the feedback we get from implementation. This will bring
    our feet back on the ground from academic spheres high up in the
    sky.</span>

What should we keep the same?[¶](#What-should-we-keep-the-same)
---------------------------------------------------------------

-   <span style="color:blue;"> The people! I think we worked well
    together.</span> -- <span style="color:green;"> I think so,
    too!</span>

What would you like to see developed in the rest of T3.5?[¶](#What-would-you-like-to-see-developed-in-the-rest-of-T35)
----------------------------------------------------------------------------------------------------------------------

Go crazy - feel free to suggest anything you like! I might collect these
at the end and then have a voting system to decide which we focus on in
the coming year.

-   <span style="color:blue;"> Spend time working out what we can
    simplify and remove from the security architecture: possibly remove
    having both privileged applications and extensions.</span>
-   <span style="color:blue;"> Integration of IF-MAP into the personal
    zone concept</span>
-   <span style="color:blue;"> Look into Application DRM</span>
-   <span style="color:blue;"> Remote management and remote data
    deletion controls</span>
-   <span style="color:blue;"> Devices belonging to multiple personal
    zones</span>
-   <span style="color:blue;"> High integrity cloud-based PZH using
    TClouds research</span>
-   <span style="color:blue;"> Better privacy user interfaces based on
    work from PRiMMA</span>
-   <span style="color:blue;"> Trusted Execution Environments</span>
-   <span style="color:blue;"> Look further into solutions to web-based
    threats: XSS, CSRF, etc</span>
-   <span style="color:blue;"> Integration with social networks for
    reputation of applications</span>
-   <span style="color:blue;"> XHR + Attestation</span>
-   <span style="color:blue;"> Investigate Identity based Encryption and
    ECC for more usable OKI</span>
-   <span style="color:green;"> Develop a sound extra-webinos
    authentication architecture with SSO. (We anyhow intend to do so,
    but since this is complex and a crucial and sensitive component of
    the entire webinos, I believe we should discuss details together to
    make sure we don't miss important details. A small group of two to
    four people should not do that alone.</span>)
-   <span style="color:maroon;"> Examine what is needed from the
    platform to enable anonymous logging of applications usage of APIs
    as a basis for third party assessments of trust and security.</span>
-   <span style="color:maroon;"> Study opportunities for better
    usability for trust and privacy by analyzing existing practice, and
    looking at possible innovations, there is too much to write about
    this to put it here.</span>

