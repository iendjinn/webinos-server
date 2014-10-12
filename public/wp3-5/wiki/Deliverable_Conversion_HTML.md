Deliverable Conversion to HTML (D 3.6)[¶](#Deliverable-Conversion-to-HTML-D-36)
===============================================================================

I followed these steps using Word 2010:

1.  Go to [D036 Includes Contentspage](.html)
2.  Export as HTML by clicking on the "Also available in: HTML" link at
    the end.
3.  While still in redmine and on the [D036 Includes
    Contentspage](.html) page, right-click on the page and "Save As".
    This will download all of the images. Delete the related html page
4.  download and save <http://dev.webinos.org/resources/webinos.css>
    1.  Search and replace '\#content ' with ''. This makes it work.

5.  Begin editing the html file...
6.  Remove the link to the stylesheet, replace it with a link to
    'webinos.css'
7.  You may want to remove the title (or at least sort it out)
8.  Change the title of the HTML to "D3.6: webinos Phase II Security
    Framework"
9.  Convert all the \<img\> tags with src values pointing to Redmine:
    1.  I used a line of sed (although this doesn't work when you have
        multiple images on the same line) -\

            sed 's/\/redmine\/attachments\/download\/\([0-9]*\)/\1/' < ./*.html > out1.html 

10. Replace all the internal links which point to redmine with other
    links:
    1.  Find:

             <a([^h]*)href=([^#]*)#([^=]*) class="wiki-page" 

    2.  Replace with :

             <a href="#\3 class="wiki-page" 

    3.  ... Most of those links are broken, but some work.

11. Replace all the remaining links to /redmine/projects:
    1.  Find:

             <a href="/redmine/projects/([^>]*)>([^<]*)</a> 

    2.  Replace:

             \2 

12. Neaten the Table of contents
    1.  tabify - <http://tools.arantius.com/tabifier>
    2.  remove lots of detail - anything after a second-level heading,
        plus references and appendicies below a first-level
    3.  The final TOC should look like:\

             <a name="TOC"></a>
            <h1>Contents<a href="#TOC" class="wiki-anchor">&para;</a></h1>
            <ul class="toc">
                <li><a href="#Introduction">Introduction</a>
                <ul>
                    <li><a href="#Intended-audience">Intended audience</a></li>
                    <li><a href="#Document-structure">Document structure</a></li>
                    <li><a href="#Security-and-Privacy-Mission">Security and Privacy Mission</a>
                    </li>
                    <li><a href="#Key-Changes-from-D35">Key Changes from D3.5</a>
                    </li>
                </ul>
                </li>
                <li><a href="#Terminology">Terminology</a>
                </li>
                </li>
                <li><a href="#Architectural-Risk-Analysis">Architectural Risk Analysis</a>
                <ul>
                    <li><a href="#Motivation">Motivation</a></li>
                    <li><a href="#Approach">Approach</a>
                    </li>
                    <li><a href="#Attack-Resistance-Analysis">Attack Resistance Analysis</a></li>
                    <li><a href="#Ambiguity-Analysis">Ambiguity Analysis</a></li>
                    <li><a href="#Weakness-Analysis">Weakness Analysis</a></li>
                    <li><a href="#Data-Security">Data Security</a>
                    </li>
                    <li><a href="#Summary">Summary</a>
                    </li>
                </ul>
                </li>
                <li><a href="#Threat-Model">Threat Model</a>
                <ul>
                    <li><a href="#Sources-of-Threat-Data">Sources of Threat Data</a>
                    </li>
                    <li><a href="#Threat-Model-and-Trusted-Components">Threat Model and Trusted Components</a>
                    </li>
                </ul>
                </li>
                <li><a href="#API-Security-and-Privacy-Analysis">API Security and Privacy Analysis</a>
                <ul>
                    <li><a href="#API-Analysis-Methodology">API Analysis Methodology</a>
                    </li>
                    <li><a href="#API-Security-and-Privacy-Analysis-Summary">API Security and Privacy Analysis Summary</a>
                    </li>
                </ul>
                </li>
                <li><a href="#Cloud-Security-and-Privacy">Cloud Security and Privacy</a>
                <ul>
                    <li><a href="#Introduction">Introduction</a></li>
                    <li><a href="#Background">Background</a>
                    </li>
                    <li><a href="#webinos-in-the-cloud">webinos in the cloud</a>
                    </li>
                    <li><a href="#Summary-and-conclusion">Summary and conclusion</a>
                    </li>
                </ul>
                </li>
                <li><a href="#Recommendations">Recommendations</a>
                <ul>
                    <li><a href="#For-Identity-Providers">For Identity Providers</a></li>
                    <li><a href="#For-PZH-Providers">For PZH Providers</a></li>
                    <li><a href="#For-Device-Manufacturers">For Device Manufacturers</a></li>
                    <li><a href="#For-Application-Developers">For Application Developers</a></li>
                    <li><a href="#For-Users">For Users</a></li>
                </ul>
                </li>
                <li><a href="#Conclusion">Conclusion</a>
                <ul>
                    <li><a href="#Summary-of-results">Summary of results</a></li>
                    <li><a href="#Making-use-of-these-findings-in-webinos">Making use of these findings in webinos</a></li>
                    <li><a href="#Making-use-of-these-findings-outside-of-webinos">Making use of these findings outside of webinos</a></li>
                    <li><a href="#Future-security-and-privacy-activities-in-webinos">Future security and privacy activities in webinos</a></li>
                </ul>
                </li>
                <li><a href="#References">References</a>
                </li>
                <li><a href="#Appendices">Appendices</a></li>
                <li><a href="#Background">Background</a>
                <ul>
                    <li><a href="#Related-Security-and-Privacy-Architectures-in-Industry">Related Security and Privacy Architectures in Industry</a>
                    </li>
                    <li><a href="#Related-Academic-Work">Related Academic Work</a>
                    </li>
                    <li><a href="#Related-Webinos-Deliverables">Related Webinos Deliverables</a>
                    </li>
                </ul>
                </li>
                <li><a href="#API-Security-Analysis">API Security Analysis</a>
                </li>
                <li><a href="#Components">Components</a>
                </li>
                <li><a href="#Attack-Surface-metrics">Attack Surface metrics</a>
                </li>
                <li><a href="#Contextualised-Attack-Patterns">Contextualised Attack Patterns</a>
                </li>
                <li><a href="#Attack-Patterns-Not-Included-in-the-Architectural-Risk-Analysis">Attack Patterns Not Included in the Architectural Risk Analysis</a>
                </li>
                <li><a href="#Complete-List-of-Actions-Defined-in-the-Trust-Model">Complete List of Actions Defined in the Trust Model</a></li>
            </ul>

13. Move the Abstract to the top.
14. Remove the title below the TOC.
15. Fix the link to 'Data Security'
16. Search for the word 'section' and add a link to the actual section.
17. Fix the introduction by adding links
18. Change images that are too big... from Components on, I think,
    anything under "structure" and "component requirements" ... ok,
    anything with a set width that is over about 300px.

