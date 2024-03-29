Tool Setup and Usage[¶](#Tool-Setup-and-Usage)
==============================================

-   [Tool Setup and Usage](#Tool-Setup-and-Usage)
    -   [Git Installation](#Git-Installation)
        -   [On Windows](#On-Windows)
    -   [Git usage](#Git-usage)
        -   [Basic Usage (with
            TortoiseGit)](#Basic-Usage-with-TortoiseGit)
    -   [Repository contents](#Repository-contents)
    -   [Using widlproc](#Using-widlproc)
    -   [WebIDL format](#WebIDL-format)

Git Installation[¶](#Git-Installation)
--------------------------------------

We use Git as version control system (instead of SVN). If you use Mac OS
or Linux see [Using
Git](/wp-0/wiki/Using_Git).

### On Windows[¶](#On-Windows)

1\. Download and install [msysgit](http://code.google.com/p/msysgit/) -
[link to
installer](http://code.google.com/p/msysgit/downloads/list?q=full+installer+official+git)\
2. And download and install
[TortoiseGit](http://code.google.com/p/tortoisegit/) which is a nice GUI
for Git - [link to
installer](http://code.google.com/p/tortoisegit/wiki/Download)

Git usage[¶](#Git-usage)
------------------------

This section explains very briefly the most basics things about Git. You
are advised to read up on Git usage elsewhere there is lots of
documentation around. Again, see [Using
Git](/wp-0/wiki/Using_Git) as a
starting point.

### Basic Usage (with TortoiseGit)[¶](#Basic-Usage-with-TortoiseGit)

1.  **Clone** the remote master repository. The repository URL is
    `http://dev.webinos.org/git/t3-2.git`.\
    Right-click in Windows Explorer to bring up the context menu in the
    directory where you want to clone the repository to. Select "Git
    Clone..." and fill in the remote repository URL and go. Use your
    Redmine login for authentication.\
    ![](git-clone.jpg)
2.  Edit your user info. Right-click in Windows Explorer for the context
    menu in the directory of your local cloned repo and select
    "TortoiseGit" -\> "Settings" and there "Git" -\> "Config" and edit
    your name and email.\
    ![](git-config.jpg)
3.  Work on the Web IDL files. See the section on how to use widlproc
    further down on this page. Always remember to **pull** changes from
    the remote repository before making changes so that you always have
    the latest version of the files you are editing. It is **important**
    that everybody who commits makes absolutely sure that their edits
    leave **valid** widl files behind as otherwise the HTML generation
    won’t be successful. So make sure to run the webinos.sh script
    locally to test the HTML generation, see below.
4.  **Commit** your changes to your local repo. From the right-click
    context menu select "Git Commit -\> master ...". Add a message to
    describe your changes and click "OK".\
    ![](git-commit.jpg)
5.  **Push** your changes from your local repo to the remote master.
    From the right-click menu select "TortoiseGit" -\> "Push..." and in
    the following dialog hit "OK".\
    ![](git-push.jpg)
6.  **Pull** changes from the remote repository that others have made so
    your local repo is always in sync. From the right-click menu select
    "TortoiseGit" -\> "Pull..." and in the following dialog hit "OK".\
    ![](git-pull.jpg)

Repository contents[¶](#Repository-contents)
--------------------------------------------

The repository contains the whole tool chain used to generate HTML
documentation from Web IDL (widl) files. WebIDL is a specification
language to describe the the API interfaces, also used by the W3C.

All the sources for the generation are available in a directory in which
three sub-directories are available:

-   sources:
    -   static: Where the static html, js or css files that compose the
        spec are stored.
    -   widl: Where the annotated WebIDLs are stored.
    -   resources: That contains the following files:
        -   win32: Directory for the widlproc executable that translates
            widls into xmls.
        -   macos: Directory for the widlproc executable that translates
            widls into xmls.
        -   linux: Directory for the widlproc executable that translates
            widls into xmls.
        -   widlprocxml.dtd: The DTD with the definition of the widl to
            xml translation.
        -   widlprocxmltohtml.xsl: An XSL to convert the XML generated
            from the widl to html.
-   webinos.sh: The shell script which generates the HTML documentation
    from the widl files.

Using widlproc[¶](#Using-widlproc)
----------------------------------

The tool is executed through the webinos.sh script that converts all the
widls in the widl folder to htmls and copies them to a folder in which
all the static resources (static folder) are also copied to. Right now
the webinos.sh is a bash shell script so it needs the bash shell. Git
for Windows (msysgit) includes bash, look for "Git Bash" in the start
menu. Or you can install [Cygwin](http://www.cygwin.com/) which provides
bash as well.

In order to execute it the following steps must be followed:

1.  Execute the script webinos.sh with two input arguments:
    1.  The folder in which all the sources are included (according to
        the structure defined in the previous section)
    2.  An existing folder in which a folder called apis will be
        generated in order to include all the specification there.

For instance, if the content of the zip file has been extracted in the
/tmp folder, the command webinos.sh /tmp/sources /tmp/spec should
generate the spec at /tmp/spec/apis.

Example:\

    $ ./webinos.sh sources/ spec/

If you get messages stating "xsltproc: command not found" on your local
machine then simply install the missing package xsltproc (ubuntu: sudo
apt-get install xsltproc).

WebIDL format[¶](#WebIDL-format)
--------------------------------

The tool is based on the [widlproc
tool](https://github.com/dontcallmedom/widlproc) which has extensive
documentation about how should it be used and what is the format of the
widl files to be processed.

If you use the [Vim](http://www.vim.org) editor you can download a
[syntax highlighting file for
widl](http://www.vim.org/scripts/script.php?script_id=3634), which eases
editing.

