Packaging an extensions[¶](#Packaging-an-extensions)
====================================================

The extension should be packaged similiar to a standard webinos
applications.

Required information about the extension[¶](#Required-information-about-the-extension)
--------------------------------------------------------------------------------------

Some meta data about the extension has to be provided by extension
developer in order to package the application and install

  ------------------ ------------------ ------------------ ------------------
  **type**           **description**    **mandatory**      **comments**

  id                 unique id of the   yes                
                     extension                             

  name               name of the        yes                
                     extension                             

  description        a short            yes                
                     description of the                    
                     extension                             

  version            version number of  no                 
                     the extension for                     
                     determin                              

  author             the author of the  yes                
                     extension                             

  platform           the supported                         
                     platforms by the                      
                     extension                             

  update-url         the url where an   no                 do we have to
                     update of the                         specify an data
                     extension can be                      scheme for
                     retrieved                             retrieving update
                                                           informations like
                                                           for [Google
                                                           extensions](http:/
                                                           /code.google.com/c
                                                           hrome/extensions/a
                                                           utoupdate.html#H2-
                                                           2)

  signature                                                
  ------------------ ------------------ ------------------ ------------------

Specification for data scheme[¶](#Specification-for-data-scheme)
----------------------------------------------------------------

The proposed format for packaging a webinos application is based on XML
[1].\
Therefore the extension packaging will be based on XML as well.

[1]
</wp3-1/wiki/Webinos_Core#Packaging>

