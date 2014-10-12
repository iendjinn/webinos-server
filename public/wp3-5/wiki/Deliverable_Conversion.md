Deliverable Conversion[¶](#Deliverable-Conversion)
==================================================

I followed these steps using Word 2010:

1.  Go to [Deliverable\_Outline\_Includes](.html)
2.  Export as HTML by clicking on the "Also available in: HTML" link at
    the end.
3.  While still in redmine and on the
    [Deliverable\_Outline\_Includes](.html) page, right-click on the
    page and "Save As". This will download all of the images. Delete the
    related html page
4.  Create a new directory structure
    1.  Copy the image files into: /images/
    2.  Copy the exported html file into: /html/

5.  Begin editing the html file...
6.  Remove the link to the stylesheet, as this can make the word
    document ignore the themes you apply later
7.  You may want to remove the title
8.  Add the following style information into the header, to make up for
    the missing style sheet:\

        <style>
        a.wiki-page {
         color: black;
         text-decoration: none;
        }

        a.wiki-anchor { display: none; margin-left: 6px; text-decoration: none; }
        a.wiki-anchor:hover { color: #aaa !important; text-decoration: none; }
        h1:hover a.wiki-anchor, h2:hover a.wiki-anchor, h3:hover a.wiki-anchor { display: inline; color: #ddd; }

        table
        {
            width:100%;
            text-align: left;
            border-collapse: collapse;
        }

        th 
        {
            font-weight: normal;
            padding: 8px;
            background: #2DA2BF;
            border-top: 4px solid #195B6C;
            border-bottom: 1px solid #fff;
            color: #000;
        }

        td
        {
            padding: 8px;
            background: #C6E9F1; 
            border-bottom: 1px solid #fff;
            color: #195B6C;
            border-top: 1px solid transparent;
        }
        </style>

9.  Change the title of the HTML to "D3.6: webinos Phase II Security
    Framework"
10. Convert all the \<img\> tags with src values pointing to Redmine:
    1.  I used a line of sed (although this doesn't work when you have
        multiple images on the same line) -\

             sed 's/\/redmine\/attachments\/download\/\([0-9]*\)/..\/images\/\1/' < ./*.html > out1.html 

11. ~~Replace the table headings using regular expressions:~~
    1.  Find:

             <td> <strong>(.*)</strong> </td> 

    2.  Replace with

             <th>\1</th> 

12. Replace all the internal links which point to redmine with other
    links:
    1.  Find:

             <a([^h]*)href=([^#]*)#([^=]*) class="wiki-page" 

    2.  Replace with :

             <a href="#\3 class="wiki-page" 

    3.  ... Most of those links are broken, but some work.

13. Replace all the remaining links to /redmine/projects:
    1.  Find:

             <a href="/redmine/projects/([^>]*)>([^<]*)</a> 

    2.  Replace:

             \2 

14. Save the HTML page.
15. Load the HTML in Word and save as a new Word file.
16. Go to File \> Home \> Info \> Related Documents and then click on
    "Edit Links to Files". Save them in the document, so images are
    embedded.
17. Apply a new word template (see attached). in Word this is applied
    through the "Developer" tag
18. Now open the attached template file in a new Word window. Copy the
    contents into the front of the Deliverable word document. This will
    add headers and footers and the original graphics.
19. Update the abstract and delete the one in the main contents. If
    there are problems, the abstract is just in "normal" font with a
    border applied.
20. Update the keywords section.
21. Create a table of contents. You may need to fiddle this a bit. I
    only showed level 1 headings, as my references used level 2
    headings.
22. Update all the fields in the header, footer, etc, so that the proper
    title is displayed
23. Check that the images all fit properly. It is likely that some need
    rotating.
24. Check that the tables fit properly.
25. If you dislike the table format, change it using a Word Macro:

<!-- -->


    Sub ApplyTableStyle()
      Dim t As Table
      For Each t In ActiveDocument.Tables
        t.Style = "Light Shading - Accent 5" 'Specify table style name here
      Next t
    End Sub

1.  Add the "page break before" option to the standard H1 style.
2.  Update the table of contents.
3.  Check that the 'webinos' graphic is up-to-date
4.  Check that the table on the front and second page has not been
    altered
5.  Convert into a PDF.

