microPZP enrolment[¶](#microPZP-enrolment)
==========================================

There no direct enrolment interaction between a microPZP and a PZH as
there is for a PZP. Instead, a microPZP enrolls to a Personal Zone once
enrolment credentials – i.e. the microPZP key and certificate, and the
PZH certificate – have been obtained by an offline administrative
process outside the scope of this specification.

With the credentials and PZH details, enrolment is a configuration step
for the microPZP. If the microPZP supports remote administration, this
can be performed through the admin API; otherwise it requires some local
and proprietary action at the microPZP.

Under the admin API, a number of configuration elements are defined for
such configuration; these mirror the default paths of the persisted data
in the full PZP. The following configuration elements are defined.

  ----------------------- ----------------------- -----------------------
  Configuration key       Meaning                 Type and format

  pzh                     Relevant pzh details    String, containing JSON
                                                  string representation
                                                  of pzh.json

  devicelist              Contains the list of    String, containing JSON
                          known devices and users string representation
                                                  of devicelist.json

  policy.root             Contain the root        Collection, containing
                          security policy         policy rules as strings

  policy.\<other\>        Scope for future        
                          expansion for           
                          supplementary policy    
                          fragments               

  certificates.external   Contains certificates   Collection, containing
                          of known external peers PEM-encoded certificate
                                                  strings

  certificates.internal.p Own PZP certificate     String, PEM-encoded
  zp.cert                                         certificate

  certificates.internal.p Own PZP private key     String, PEM-encoded key
  zp.key                                          

  certificates.internal.p Own PZH certificate     String, PEM-encoded
  zh.cert                                         certificate

  api.\<api\>             Root of configuration   
                          elements with           
                          API-specific            
                          configuration,          
                          defaults, etc           

  userdata.\<element\>    Root of configuration   
                          elements with           
                          user-related            
                          configuration,          
                          defaults, etc           
  ----------------------- ----------------------- -----------------------


