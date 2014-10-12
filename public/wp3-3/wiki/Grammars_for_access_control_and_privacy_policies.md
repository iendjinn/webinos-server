Grammars for access control and privacy policies[¶](#Grammars-for-access-control-and-privacy-policies)
======================================================================================================

Policies can be edited by users through the Policy Editor (described in
the previous section) or manually. Manual editing must be done taking in
account the grammar provided in this section in order to avoid parsing
problems. The grammars presented respect the RELAX NG Compact Syntax
([RELAXNGCS](RELAXNGCS.html))

Access control policies[¶](#Access-control-policies)
----------------------------------------------------

The grammar for access control policies comes from the one defined in
WAC ([WACXMLSP](WACXMLSP.html)) with PPL extensions.

     1 namespace a = "http://relaxng.org/ns/compatibility/annotations/1.0" 
     2 datatypes xs = "http://www.w3.org/2001/XMLSchema-datatypes" 
     3 
     4 policy-set =
     5   element policy-set {
     6     policy-set.attlist, target?, (policy-set | policy)*
     7   }
     8 policy-set.attlist &=
     9   [ a:defaultValue = "deny-overrides" ]
    10   attribute combine {
    11     "deny-overrides" | "permit-overrides" | "first-matching-target" 
    12   }?,
    13   attribute id { text }?
    14 
    15 policy = element policy { policy.attlist, target?, rule* }
    16 policy.attlist &=
    17   [ a:defaultValue = "deny-overrides" ]
    18   attribute combine {
    19     "deny-overrides" | "permit-overrides" | "first-applicable" 
    20   }?,
    21   attribute description { text }?,
    22   attribute id { text }?
    23 
    24 rule = element rule { rule.attlist, condition? }
    25 rule.attlist &=
    26   [ a:defaultValue = "permit" ]
    27   attribute effect {
    28     "permit" 
    29     | "prompt-blanket" 
    30     | "prompt-session" 
    31     | "prompt-oneshot" 
    32     | "deny" 
    33   }?,
    34   [ a:defaultValue = "none" ]
    35   attribute require-reauth {
    36     "none" 
    37     | "local" 
    38     | "remote" 
    39   }?,
    40   [ a:defaultValue = "0" ]
    41   attribute auth-expires-after-min { xs:nonNegativeInteger }?,
    42   attribute id { text }?
    43 
    44 target = element target { target.attlist, subject+ }
    45 target.attlist &= empty
    46 
    47 subject = element subject { subject.attlist, subject-match+ }
    48 subject.attlist &= empty
    49 
    50 condition =
    51   element condition {
    52     condition.attlist,
    53     (condition | subject-match | resource-match | environment-match)+
    54   }
    55 condition.attlist &=
    56   [ a:defaultValue = "and" ] attribute combine { "and" | "or" }?
    57 
    58 match-attrs =
    59   attribute attr { text },
    60   attribute match { text }?,
    61   [ a:defaultValue = "glob" ]
    62   attribute func { "equal" | "glob" | "regexp" }?
    63 
    64 subject-match = element subject-match { subject-match.attlist, text }
    65 subject-match.attlist &= match-attrs
    66 
    67 match-model = (text | subject-attr | resource-attr | environment-attr)*
    68 
    69 resource-match =
    70   element resource-match { resource-match.attlist, match-model }
    71 resource-match.attlist &= match-attrs
    72 
    73 environment-match =
    74   element environment-match { environment-match.attlist, match-model }
    75 environment-match.attlist &= match-attrs
    76 
    77 attr-attrs = attribute attr { text }
    78 subject-attr = element subject-attr { subject-attr.attlist, empty }
    79 subject-attr.attlist &= attr-attrs
    80 resource-attr = element resource-attr { resource-attr.attlist, empty }
    81 resource-attr.attlist &= attr-attrs
    82 environment-attr =
    83   element environment-attr { environment-attr.attlist, empty }
    84 environment-attr.attlist &= attr-attrs
    85 
    86 start = policy-set
    87 start |= policy

References[¶](#References)
--------------------------

### RELAXNGCS[¶](#RELAXNGCS)

[RELAX NG Compact Syntax](http://relaxng.org/compact-20021121.html)

### WACXMLSP[¶](#WACXMLSP)

[WAC: XML definition of Security
Policy](http://specs.wacapps.net/2.0/jun2011/core/wacxml.rnc "RelaxNG")

