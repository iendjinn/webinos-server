Lifecyle[¶](#Lifecyle)
======================

  -------------------------------------- ---------------------------------------------- ----------- ----------------------------------------------------------------------------------------------------------
  Requirement name                       API name                                       Interface   Method
  Application API                        - (config.xml plus appropriate feature URIs)   -           -
  Application maintenance                - (wrt feature)                                -           -
  Application meta-data                  Widget API (based on config.xml)               Widget      various attributes
  Application-like extension packaging   -                                              -           -
  Contact details                        Widget API                                     Widget      authorEmail and authorHref attributes + webinos extension distributor, distributorEmail, distributorhref
  Deferred install                       -                                              -           -
  Development tools (low)                -                                              -           -
  Device personal data uninstall         - (wrt feature)                                -           -
  Digital signature                      - (wrt + app packaging / W3C widget spec)      -           -
  Distribution and usage conditions      Widget API (+config.xml, webinos extension)    Widget      validfor and validuntil attributes
  Human-readable version                 Widget API (webinos extension)                 Widget      versionName attribute
  Installation initialisation            -                                              -           -
  Installed application data             - (wrt feature only?)                          -           -
  Maintenance authorisation              - (wrt feature)                                -           -
  Meta-data inspection                   Widget API (+wrt feature)                      -           -
  Multi-device install                   Widget API (+wrt feature)                      Widget      deployChild
  Network download transfer              -                                              -           -
  Platform-specific extension binding    -                                              -           -
  Standard-like extension                -                                              -           -
  Unbinding initialisation               -                                              -           -
  Version name                           Widget API                                     Widget      version attribute
  -------------------------------------- ---------------------------------------------- ----------- ----------------------------------------------------------------------------------------------------------


