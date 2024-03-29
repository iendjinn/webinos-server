Attack Resistance Analysis[¶](#Attack-Resistance-Analysis)
----------------------------------------------------------

The security concerns which formed the basis of the attack resistance
analysis were initially drawn from the misuse cases in D2.8. However,
these were also supplemented by several additional security concerns
which had been identified by the project in the last year. These
concerns were used to populate 16 contextualised patterns.

The definitions for the attack patterns and their supplemental obstacle
models can be found in the appendix, but these patterns -- and the leaf
obstacles arising from them -- are summarised in the table below.

  Attack Pattern                                Attack                                                     Exploit                                                     Leaf obstacles
  --------------------------------------------- ---------------------------------------------------------- ----------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Application DoS                               Malicious Automated Software Update                        Improper Verification of Cryptographic Signature            Application blacklisted after negative reviews, Application developer signing key compromised, Application signing key not checked, Bad default policy, Bad user-selected policy, JavaScript injection overwrites webinos.js, JavaScript injection triggers security violation, Webinos backdoor
  Capture Hidden Analytics                      Spyware                                                    Lack of data provenance                                     Apps share usage data, findService API reveals permanent user identifier
  Device availability loss                      Denial of Service through Resource Depletion               Uncontrolled Resource Consumption ('Resource Exhaustion')   Installed app exploited, Installed app misbehaving, Malicious background application installed, Native malware running, Webinos widget processor bug, XSS attack on hosted app
  Exploit network bandwidth                     Repudiation Attack                                         Permissive convergence preferences                          Post spoofed message, Spoof network settings message origin
  Exploiting transitive permissions             Data Interception Attacks                                  Improper Preservation of Permissions                        Installed App allows unrestricted postMessage, Installed App allows unrestricted XHR, Installed App given API permissions, Installed App uses unauthenticated webinos event messages, Installed App vulnerable to content injection, Malicious App misuses communication interface
  Identity theft with webinos messaging         Mobile Phishing (aka MobPhishing)                          Insufficiently Protected Credentials                        Attacker obtains user password, Bad trust decisions, Malware installed, Permission prompt click-through, SMS intercepted and relayed
  Linkability through findServices              Cross Site Identification                                  Information Exposure Through Persistent Cookies             Apps share usage data, findService API reveals permanent user identifier
  Loss of personal zone administration access   Denial of Service                                          Unverified Password Change                                  Account deleted, Account lock-out, Forgotten credentials, OpenID provider offline, Password guessed and reset, Password recovery process attacked, PZH offline
  Man In The webinos Browser                    Man-in-the-browser attack                                  Inclusion of Functionality from Untrusted Control Sphere    Application data readable, Malicious plugin not detected, Widget renderer supports extensions
  Overlay network facilitated relay attack      NFC replay attack                                          System data trust                                           Malicious code evaluated, Malicious NDEF tag, Overwrite valid authentication data, Overwrite valid PZP Configuration, Revoke device from valid personal zone, Run multiple personal zone proxies, Spoof message origin
  Policy evasion through Browser APIs           Accessing Functionality Not Properly Constrained by ACLs   Missing Authorization                                       App running in browser, Browser API authorised, Policy misconfigured
  PZH Pharming                                  Pharming                                                   UI Misrepresentation of Critical Information                PZH Admin URL displayed without prominence, PZH Admin URL not well known, PZH Admin URL too complicated, User clicks on link within application
  Request footprinting                          Network Eavesdropping                                      Missing XML Validation                                      Eavesdrop Context Database, Eavesdrop Policy Manager, Eavesdrop request enforcement channel, Eavesdrop RPC Call Log
  Steal In-Car Data                             Session hijacking                                          Automatic login                                             Malicious code evaluated, Malicious NDEF tag, Overwrite valid authentication data, Overwrite valid PZP Configuration, Revoke device from valid personal zone, Run multiple personal zone proxies, Spoof message origin
  Steal webinos Session                         Cross-Site Request Forgery                                 Session Fixation                                            Malicious code evaluated, Malicious NDEF tag, Overwrite valid authentication data, Overwrite valid PZP Configuration, Revoke device from valid personal zone, Run multiple personal zone proxies, Spoof message origin
  Test footprinting                             Locate and Exploit Test APIs                               Allocation of Resources without Limits or Throttling        Ambiguous request specification, Non-mandated request, Overrestricted resource, Test API enabled, Test configuration enabled, Unrestricted request specification, Unrestricted resource, Unspecified resource


