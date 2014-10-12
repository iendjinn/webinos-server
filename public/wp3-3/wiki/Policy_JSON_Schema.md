Policy JSON Schema[¶](#Policy-JSON-Schema)
==========================================

The one presented below is the JSON Schema (version 03) that policies
translated from XML to JSON must comply with.

      1 {
      2     "type":[{
      3         "type":"object",
      4         "additionalProperties":false,
      5         "properties":{
      6             "policy-set": {
      7                 "type":"object",
      8                 "id": "policy-set",
      9                 "required":false,
     10                 "additionalProperties":false,
     11                 "properties":{
     12                     "$":{
     13                         "type":"object",
     14                         "id":"policysetattrs",
     15                         "required":false,
     16                         "additionalProperties":false,
     17                         "properties":{
     18                             "combine": {
     19                                 "type":"string",
     20                                 "required":false,
     21                                 "enum" : ["deny-overrides", "permit-overrides", "first-matching-target"]
     22                             },
     23                             "id": {
     24                                 "type":"string",
     25                                 "required":false
     26                             },
     27                             "description": {
     28                                 "type":"string",
     29                                 "required":false
     30                             }
     31                         }
     32                     },
     33                     "target": {
     34                         "type":"array",
     35                         "id": "target",
     36                         "required":false,
     37                         "additionalItems":false,
     38                         "maxItems" : 1,
     39                         "items":{
     40                             "type":"object",
     41                             "required":false,
     42                             "additionalProperties":false,
     43                             "properties":{
     44                                 "$":{
     45                                     "type":"object",
     46                                     "required":false,
     47                                     "additionalProperties":false,
     48                                     "properties":{
     49                                         "id": {
     50                                             "type":"string",
     51                                             "required":false
     52                                         }
     53                                     }
     54                                 },
     55                                 "subject":{
     56                                     "type":"array",
     57                                     "id": "subject",
     58                                     "required":true,
     59                                     "additionalItems":false,
     60                                     "items":{
     61                                         "type":"object",
     62                                         "required":false,
     63                                         "additionalProperties":false,
     64                                         "properties":{
     65                                             "subject-match":{
     66                                                 "type":"array",
     67                                                 "id": "subject-match",
     68                                                 "required":true,
     69                                                 "additionalItems":false,
     70                                                 "items":{
     71                                                     "type":"object",
     72                                                     "required":false,
     73                                                     "additionalProperties":false,
     74                                                     "properties":{
     75                                                         "$":{
     76                                                             "type":"object",
     77                                                             "id":"match-attrs",
     78                                                             "required":true,
     79                                                             "additionalProperties":false,
     80                                                             "properties":{
     81                                                                 "attr":{
     82                                                                     "type":"string",
     83                                                                     "required":true
     84                                                                 },
     85                                                                 "match":{
     86                                                                         "type":"string",
     87                                                                         "required":false
     88                                                                 },
     89                                                                 "func":{
     90                                                                         "type":"string",
     91                                                                         "required":false,
     92                                                                         "enum":["equal", "glob", "regexp"]
     93                                                                 }
     94                                                             }
     95                                                         },
     96                                                         "_": {
     97                                                             "type":"string",
     98                                                             "required":false
     99                                                         }
    100                                                     }
    101                                                 }
    102                                             }
    103                                         }
    104                                     }
    105                                 }
    106                             }
    107                         }
    108                     },
    109                     "dataHandlingPreferences":{
    110                         "type":"array",
    111                         "id": "dataHandlingPreferences",
    112                         "required":false,
    113                         "additionalItems":false,
    114                         "maxItems" : 1,
    115                         "items":{
    116                             "type":"object",
    117                             "required":false,
    118                             "additionalProperties":false,
    119                             "properties":{
    120                                 "$":{
    121                                     "type":"object",
    122                                     "required":true,
    123                                     "additionalProperties":false,
    124                                     "properties":{
    125                                         "policyId": {
    126                                             "type":"string",
    127                                             "required":true
    128                                         }
    129                                     }
    130                                 },
    131                                 "authorizationsSet":{
    132                                     "type":"array",
    133                                     "id": "authorizationsSet",
    134                                     "required":false,
    135                                     "additionalItems":false,
    136                                     "maxItems" : 1,
    137                                     "items":{
    138                                         "type":"object",
    139                                         "required":false,
    140                                         "additionalProperties":false,
    141                                         "properties":{
    142                                             "authzUseForPurpose":{
    143                                                 "type":"array",
    144                                                 "id": "authzUseForPurpose",
    145                                                 "required":false,
    146                                                 "additionalItems":false,
    147                                                 "items":{
    148                                                     "type":"object",
    149                                                     "required":false,
    150                                                     "additionalProperties":false,
    151                                                     "properties":{
    152                                                         "purpose": {
    153                                                             "type":"array",
    154                                                             "id": "purpose",
    155                                                             "required":false,
    156                                                             "additionalItems":false,
    157                                                             "items":{
    158                                                                 "type":"string",
    159                                                                 "required":false,
    160                                                                 "enum" : [
    161                                                                     "http://www.w3.org/2002/01/P3Pv1/current",
    162                                                                     "http://www.w3.org/2002/01/P3Pv1/admin",
    163                                                                     "http://www.w3.org/2002/01/P3Pv1/develop",
    164                                                                     "http://www.w3.org/2002/01/P3Pv1/tailoring",
    165                                                                     "http://www.w3.org/2002/01/P3Pv1/pseudo-analysis",
    166                                                                     "http://www.w3.org/2002/01/P3Pv1/pseudo-decision",
    167                                                                     "http://www.w3.org/2002/01/P3Pv1/individual-analysis",
    168                                                                     "http://www.w3.org/2002/01/P3Pv1/individual-decision",
    169                                                                     "http://www.w3.org/2002/01/P3Pv1/contact",
    170                                                                     "http://www.w3.org/2002/01/P3Pv1/historical",
    171                                                                     "http://www.w3.org/2002/01/P3Pv1/telemarketing",
    172                                                                     "http://www.w3.org/2002/01/P3Pv11/account",
    173                                                                     "http://www.w3.org/2002/01/P3Pv11/arts",
    174                                                                     "http://www.w3.org/2002/01/P3Pv11/browsing",
    175                                                                     "http://www.w3.org/2002/01/P3Pv11/charity",
    176                                                                     "http://www.w3.org/2002/01/P3Pv11/communicate",
    177                                                                     "http://www.w3.org/2002/01/P3Pv11/custom",
    178                                                                     "http://www.w3.org/2002/01/P3Pv11/delivery",
    179                                                                     "http://www.w3.org/2002/01/P3Pv11/downloads",
    180                                                                     "http://www.w3.org/2002/01/P3Pv11/education",
    181                                                                     "http://www.w3.org/2002/01/P3Pv11/feedback",
    182                                                                     "http://www.w3.org/2002/01/P3Pv11/finmgt",
    183                                                                     "http://www.w3.org/2002/01/P3Pv11/gambling",
    184                                                                     "http://www.w3.org/2002/01/P3Pv11/gaming",
    185                                                                     "http://www.w3.org/2002/01/P3Pv11/government",
    186                                                                     "http://www.w3.org/2002/01/P3Pv11/health",
    187                                                                     "http://www.w3.org/2002/01/P3Pv11/login",
    188                                                                     "http://www.w3.org/2002/01/P3Pv11/marketing",
    189                                                                     "http://www.w3.org/2002/01/P3Pv11/news",
    190                                                                     "http://www.w3.org/2002/01/P3Pv11/payment",
    191                                                                     "http://www.w3.org/2002/01/P3Pv11/sales",
    192                                                                     "http://www.w3.org/2002/01/P3Pv11/search",
    193                                                                     "http://www.w3.org/2002/01/P3Pv11/state",
    194                                                                     "http://www.w3.org/2002/01/P3Pv11/surveys",
    195                                                                     "http://www.primelife.eu/purposes/unspecified" 
    196                                                                 ]
    197                                                             }
    198                                                         }
    199                                                     }
    200                                                 }
    201                                             }
    202                                         }
    203                                     }
    204                                 },
    205                                 "obligationsSet":{
    206                                     "type":"array",
    207                                     "id": "obligationsSet",
    208                                     "required":false,
    209                                     "additionalItems":false,
    210                                     "maxItems" : 1,
    211                                     "items":{
    212                                         "type":"object",
    213                                         "required":false,
    214                                         "additionalProperties":false,
    215                                         "properties":{
    216                                             "obligation":{
    217                                                 "type":"array",
    218                                                 "id": "obligation",
    219                                                 "required":false,
    220                                                 "additionalItems":false,
    221                                                 "items":{
    222                                                     "type":[
    223                                                         {
    224                                                             "type":"object",
    225                                                             "required":true,
    226                                                             "additionalProperties":false,
    227                                                             "properties":{
    228                                                                 "triggersSet":{
    229                                                                     "type":"array",
    230                                                                     "id": "triggersSet",
    231                                                                     "required":true,
    232                                                                     "additionalItems":false,
    233                                                                     "maxItems" : 1,
    234                                                                     "items":{
    235                                                                         "type":"object",
    236                                                                         "required":false,
    237                                                                         "additionalProperties":false,
    238                                                                         "properties":{
    239                                                                             "triggerAtTime":{
    240                                                                                 "type":"array",
    241                                                                                 "id": "triggerAtTime",
    242                                                                                 "required":false,
    243                                                                                 "additionalItems":false,
    244                                                                                 "items":{
    245                                                                                     "type":"object",
    246                                                                                     "required":false,
    247                                                                                     "additionalProperties":false,
    248                                                                                     "properties":{
    249                                                                                         "startTime":{
    250                                                                                             "type":"array",
    251                                                                                             "id": "startTime",
    252                                                                                             "required":true,
    253                                                                                             "additionalItems":false,
    254                                                                                             "maxItems" : 1,
    255                                                                                             "items":{
    256                                                                                                 "type":[{
    257                                                                                                         "type":"object",
    258                                                                                                         "required":false,
    259                                                                                                         "additionalProperties":false,
    260                                                                                                         "properties":{
    261                                                                                                             "startNow":{
    262                                                                                                                 "type":"array",
    263                                                                                                                 "id": "startNow",
    264                                                                                                                 "required":false,
    265                                                                                                                 "additionalItems":false,
    266                                                                                                                 "maxItems" : 1,
    267                                                                                                                 "items":{
    268                                                                                                                     "type":"object",
    269                                                                                                                     "required":false,
    270                                                                                                                     "additionalProperties":false,
    271                                                                                                                     "properties":{
    272                                                                                                                     }
    273                                                                                                                 }
    274                                                                                                             }
    275                                                                                                         }
    276                                                                                                     },
    277                                                                                                     {
    278                                                                                                         "type":"object",
    279                                                                                                         "required":false,
    280                                                                                                         "additionalProperties":false,
    281                                                                                                         "properties":{
    282                                                                                                             "dateAndTime":{
    283                                                                                                                 "type":"array",
    284                                                                                                                 "id": "dateAndTime",
    285                                                                                                                 "required":false,
    286                                                                                                                 "additionalItems":false,
    287                                                                                                                 "maxItems" : 1,
    288                                                                                                                 "items":{
    289                                                                                                                     "type":"string",
    290                                                                                                                     "required":true
    291                                                                                                                 }
    292                                                                                                             }
    293                                                                                                         }
    294                                                                                                     }
    295                                                                                                 ]
    296                                                                                             }
    297                                                                                         },
    298                                                                                         "maxDelay":{
    299                                                                                             "type":"array",
    300                                                                                             "id": "maxDelay",
    301                                                                                             "required":true,
    302                                                                                             "additionalItems":false,
    303                                                                                             "maxItems" : 1,
    304                                                                                             "items":{
    305                                                                                                 "type":"object",
    306                                                                                                 "required":false,
    307                                                                                                 "additionalProperties":false,
    308                                                                                                 "properties":{
    309                                                                                                     "duration":{
    310                                                                                                         "type":"array",
    311                                                                                                         "id": "duration",
    312                                                                                                         "required":true,
    313                                                                                                         "additionalItems":false,
    314                                                                                                         "maxItems" : 1,
    315                                                                                                         "items":{
    316                                                                                                             "type":"string",
    317                                                                                                             "required":true
    318                                                                                                         }
    319                                                                                                     }
    320                                                                                                 }
    321                                                                                             }
    322                                                                                         }
    323                                                                                     }
    324                                                                                 }
    325                                                                             },
    326                                                                             "triggerPersonalDataAccessedForPurpose":{
    327                                                                                 "type":"array",
    328                                                                                 "id": "triggerPersonalDataAccessedForPurpose",
    329                                                                                 "required":false,
    330                                                                                 "additionalItems":false,
    331                                                                                 "items":{
    332                                                                                     "type":"object",
    333                                                                                     "required":false,
    334                                                                                     "additionalProperties":false,
    335                                                                                     "properties":{
    336                                                                                         "purpose":{"$ref":"purpose"},
    337                                                                                         "maxDelay":{"$ref":"maxDelay"}
    338                                                                                     }
    339                                                                                 }
    340                                                                             },
    341                                                                             "triggerPersonalDataDeleted":{
    342                                                                                 "type":"array",
    343                                                                                 "id": "triggerPersonalDataDeleted",
    344                                                                                 "required":false,
    345                                                                                 "additionalItems":false,
    346                                                                                 "items":{
    347                                                                                     "type":"object",
    348                                                                                     "required":false,
    349                                                                                     "additionalProperties":false,
    350                                                                                     "properties":{
    351                                                                                         "maxDelay":{"$ref":"maxDelay"}
    352                                                                                     }
    353                                                                                 }
    354                                                                             },
    355                                                                             "triggerDataSubjectAccess":{
    356                                                                                 "type":"array",
    357                                                                                 "id": "triggerDataSubjectAccess",
    358                                                                                 "required":false,
    359                                                                                 "additionalItems":false,
    360                                                                                 "items":{
    361                                                                                     "type":"object",
    362                                                                                     "required":false,
    363                                                                                     "additionalProperties":false,
    364                                                                                     "properties":{
    365                                                                                         "accessURI":{
    366                                                                                             "type":"array",
    367                                                                                             "id": "accessURI",
    368                                                                                             "required":true,
    369                                                                                             "additionalItems":false,
    370                                                                                             "maxItems" : 1,
    371                                                                                             "items":{
    372                                                                                                 "type":"string",
    373                                                                                                 "required":true
    374                                                                                             }
    375                                                                                         }
    376                                                                                     }
    377                                                                                 }
    378                                                                             }
    379                                                                         }
    380                                                                     }
    381                                                                 },
    382                                                                 "actionDeletePersonalData":{
    383                                                                     "type":"array",
    384                                                                     "id": "actionDeletePersonalData",
    385                                                                     "required":false,
    386                                                                     "additionalItems":false,
    387                                                                     "maxItems" : 1,
    388                                                                     "items":{
    389                                                                         "type":"object",
    390                                                                         "required":false,
    391                                                                         "additionalProperties":false,
    392                                                                         "properties":{
    393                                                                         }
    394                                                                     }
    395                                                                 }
    396                                                             }
    397                                                         },
    398                                                         {
    399                                                             "type":"object",
    400                                                             "required":false,
    401                                                             "additionalProperties":false,
    402                                                             "properties":{
    403                                                                 "triggersSet":{"$ref":"triggersSet"},
    404                                                                 "actionAnonymizePersonalData":{
    405                                                                     "type":"array",
    406                                                                     "id": "actionAnonymizePersonalData",
    407                                                                     "required":false,
    408                                                                     "additionalItems":false,
    409                                                                     "maxItems" : 1,
    410                                                                     "items":{
    411                                                                         "type":"object",
    412                                                                         "required":false,
    413                                                                         "additionalProperties":false,
    414                                                                         "properties":{
    415                                                                         }
    416                                                                     }
    417                                                                 }
    418                                                             }
    419                                                         },
    420                                                         {
    421                                                             "type":"object",
    422                                                             "required":false,
    423                                                             "additionalProperties":false,
    424                                                             "properties":{
    425                                                                 "triggersSet":{"$ref":"triggersSet"},
    426                                                                 "actionNotifyDataSubject":{
    427                                                                     "type":"array",
    428                                                                     "id": "actionNotifyDataSubject",
    429                                                                     "required":false,
    430                                                                     "additionalItems":false,
    431                                                                     "maxItems" : 1,
    432                                                                     "items":{
    433                                                                         "type":"object",
    434                                                                         "required":false,
    435                                                                         "additionalProperties":false,
    436                                                                         "properties":{
    437                                                                             "media":{
    438                                                                                 "type":"array",
    439                                                                                 "id": "media",
    440                                                                                 "required":true,
    441                                                                                 "additionalItems":false,
    442                                                                                 "maxItems" : 1,
    443                                                                                 "items":{
    444                                                                                     "type":"string",
    445                                                                                     "required":true
    446                                                                                 }
    447                                                                             },
    448                                                                             "address":{
    449                                                                                 "type":"array",
    450                                                                                 "id": "address",
    451                                                                                 "required":true,
    452                                                                                 "additionalItems":false,
    453                                                                                 "maxItems" : 1,
    454                                                                                 "items":{
    455                                                                                     "type":"string",
    456                                                                                     "required":true
    457                                                                                 }
    458                                                                             }
    459                                                                         }
    460                                                                     }
    461                                                                 }
    462                                                             }
    463                                                         },
    464                                                         {
    465                                                             "type":"object",
    466                                                             "required":false,
    467                                                             "additionalProperties":false,
    468                                                             "properties":{
    469                                                                 "triggersSet":{"$ref":"triggersSet"},
    470                                                                 "actionLog":{
    471                                                                     "type":"array",
    472                                                                     "id": "actionLog",
    473                                                                     "required":false,
    474                                                                     "additionalItems":false,
    475                                                                     "maxItems" : 1,
    476                                                                     "items":{
    477                                                                         "type":"object",
    478                                                                         "required":false,
    479                                                                         "additionalProperties":false,
    480                                                                         "properties":{
    481                                                                         }
    482                                                                     }
    483                                                                 }
    484                                                             }
    485                                                         },
    486                                                         {
    487                                                             "type":"object",
    488                                                             "required":false,
    489                                                             "additionalProperties":false,
    490                                                             "properties":{
    491                                                                 "triggersSet":{"$ref":"triggersSet"},
    492                                                                 "actionSecureLog":{
    493                                                                     "type":"array",
    494                                                                     "id": "actionSecureLog",
    495                                                                     "required":false,
    496                                                                     "additionalItems":false,
    497                                                                     "maxItems" : 1,
    498                                                                     "items":{
    499                                                                         "type":"object",
    500                                                                         "required":false,
    501                                                                         "additionalProperties":false,
    502                                                                         "properties":{
    503                                                                         }
    504                                                                     }
    505                                                                 }
    506                                                             }
    507                                                         }
    508                                                     ]
    509                                                 }
    510                                             }
    511                                         }
    512                                     }
    513                                 }
    514                             }
    515                         }
    516                     },
    517                     "provisionalActions":{
    518                         "type":"array",
    519                         "id": "provisionalActions",
    520                         "required":false,
    521                         "additionalItems":false,
    522                         "maxItems" : 1,
    523                         "items":{
    524                             "type":"object",
    525                             "required":false,
    526                             "additionalProperties":false,
    527                             "properties":{
    528                                 "provisionalAction":{
    529                                     "type":"array",
    530                                     "id": "provisionalAction",
    531                                     "required":false,
    532                                     "additionalItems":false,
    533                                     "items":{
    534                                         "type":"object",
    535                                         "required":false,
    536                                         "additionalProperties":false,
    537                                         "properties":{
    538                                             "attributeValue":{
    539                                                 "type":"array",
    540                                                 "id": "attributeValue",
    541                                                 "required":true,
    542                                                 "additionalItems":false,
    543                                                 "minItems" : 2,
    544                                                 "maxItems" : 2,
    545                                                 "items":{
    546                                                     "type":"string",
    547                                                     "required":true
    548                                                 }
    549                                             }
    550                                         }
    551                                     }
    552                                 }
    553                             }
    554                         }
    555                     },
    556                     "policy":{
    557                         "type":"array",
    558                         "required":false,
    559                         "additionalItems":false,
    560                         "items":{
    561                             "type":"object",
    562                             "id": "policy",
    563                             "required":false,
    564                             "additionalProperties":false,
    565                             "properties":{
    566                                 "$":{
    567                                     "type":"object",
    568                                     "required":false,
    569                                     "additionalProperties":false,
    570                                     "properties":{
    571                                         "combine": {
    572                                             "type":"string",
    573                                             "required":false,
    574                                             "enum" : ["deny-overrides", "permit-overrides", "first-applicable"]
    575                                         },
    576                                         "id": {
    577                                             "type":"string",
    578                                             "required":false
    579                                         },
    580                                         "description": {
    581                                             "type":"string",
    582                                             "required":false
    583                                         }
    584                                     }
    585                                 },
    586                                 "target":{"$ref":"target"},
    587                                 "dataHandlingPreferences":{"$ref":"dataHandlingPreferences"},
    588                                 "provisionalActions":{"$ref":"provisionalActions"},
    589                                 "rule":{
    590                                     "type":"array",
    591                                     "id": "rule",
    592                                     "required":false,
    593                                     "additionalItems":false,
    594                                     "items":{
    595                                         "type":"object",
    596                                         "required":false,
    597                                         "additionalProperties":false,
    598                                         "properties":{
    599                                             "$":{
    600                                                 "type":"object",
    601                                                 "id":"policy-set-attrs",
    602                                                 "required":false,
    603                                                 "additionalProperties":false,
    604                                                 "properties":{
    605                                                     "effect": {
    606                                                         "type":"string",
    607                                                         "required":false,
    608                                                         "enum" : ["permit", "prompt-blanket", "prompt-session", "prompt-oneshot", "deny"]
    609                                                     },
    610                                                     "require-reauth": {
    611                                                         "type":"string",
    612                                                         "required":false,
    613                                                         "enum" : ["none", "local", "remote"]
    614                                                     },
    615                                                     "auth-expires-after-min": {
    616                                                         "type":"number",
    617                                                         "required":false
    618                                                     },
    619                                                     "id": {
    620                                                         "type":"string",
    621                                                         "required":false
    622                                                     }
    623                                                 }
    624                                             },
    625                                             "dataHandlingPreferences":{"$ref":"dataHandlingPreferences"},
    626                                             "provisionalActions":{"$ref":"provisionalActions"},
    627                                             "condition":{
    628                                                 "type":"array",
    629                                                 "id": "condition",
    630                                                 "required":false,
    631                                                 "additionalItems":false,
    632                                                 "maxItems" : 1,
    633                                                 "items":{
    634                                                     "type":[
    635                                                         {
    636                                                             "type":"object",
    637                                                             "required":false,
    638                                                             "additionalProperties":false,
    639                                                             "properties":{
    640                                                                 "$":{
    641                                                                     "type":"object",
    642                                                                     "id":"condition-attrs",
    643                                                                     "required":false,
    644                                                                     "additionalProperties":false,
    645                                                                     "properties":{
    646                                                                         "combine": {
    647                                                                             "type":"string",
    648                                                                             "required":false,
    649                                                                             "enum" : ["and", "or"]
    650                                                                         }
    651                                                                     }
    652                                                                 },
    653                                                                 "condition":{"$ref":"condition"}
    654                                                             }
    655                                                         },
    656                                                         {
    657                                                             "type":"object",
    658                                                             "required":false,
    659                                                             "additionalProperties":false,
    660                                                             "properties":{
    661                                                                 "$":{"$ref":"condition-attrs"},
    662                                                                 "subject-match":{"$ref":"subject-match"}
    663                                                             }
    664                                                         },
    665                                                         {
    666                                                             "type":"object",
    667                                                             "required":false,
    668                                                             "additionalProperties":false,
    669                                                             "properties":{
    670                                                                 "$":{"$ref":"condition-attrs"},
    671                                                                 "resource-match":{
    672                                                                     "type":"array",
    673                                                                     "id": "re-match",
    674                                                                     "required":false,
    675                                                                     "additionalItems":false,
    676                                                                     "items":{
    677                                                                         "type":[
    678                                                                             {
    679                                                                                 "type":"object",
    680                                                                                 "required":true,
    681                                                                                 "additionalProperties":false,
    682                                                                                 "properties":{
    683                                                                                     "$":{"$ref":"match-attrs"},
    684                                                                                     "subject-attr":{
    685                                                                                         "type":"array",
    686                                                                                         "id": "sre-attr",
    687                                                                                         "required":false,
    688                                                                                         "additionalItems":false,
    689                                                                                         "items":{
    690                                                                                             "type":"object",
    691                                                                                             "required":false,
    692                                                                                             "additionalProperties":false,
    693                                                                                             "properties":{
    694                                                                                                 "$":{
    695                                                                                                     "type":"object",
    696                                                                                                     "required":true,
    697                                                                                                     "additionalProperties":false,
    698                                                                                                     "properties":{
    699                                                                                                         "attr": {
    700                                                                                                             "type":"string",
    701                                                                                                             "required":true
    702                                                                                                         }
    703                                                                                                     }
    704                                                                                                 }
    705                                                                                             }
    706                                                                                         }
    707                                                                                     }
    708                                                                                 }
    709                                                                             },
    710                                                                             {
    711                                                                                 "type":"object",
    712                                                                                 "required":true,
    713                                                                                 "additionalProperties":false,
    714                                                                                 "properties":{
    715                                                                                     "$":{"$ref":"match-attrs"},
    716                                                                                     "resource-attr":{"$ref":"sre-attr"}
    717                                                                                 }
    718                                                                             },
    719                                                                             {
    720                                                                                 "type":"object",
    721                                                                                 "required":true,
    722                                                                                 "additionalProperties":false,
    723                                                                                 "properties":{
    724                                                                                     "$":{"$ref":"match-attrs"},
    725                                                                                     "environment-attr":{"$ref":"sre-attr"}
    726                                                                                 }
    727                                                                             },
    728                                                                             {
    729                                                                                 "type":"object",
    730                                                                                 "required":true,
    731                                                                                 "additionalProperties":false,
    732                                                                                 "properties":{
    733                                                                                     "$":{"$ref":"match-attrs"},
    734                                                                                     "_":{
    735                                                                                         "type":"string",
    736                                                                                         "required":false
    737                                                                                     }
    738                                                                                 }
    739                                                                             }
    740                                                                         ]
    741                                                                     }
    742                                                                 }
    743                                                             }
    744                                                         },
    745                                                         {
    746                                                             "type":"object",
    747                                                             "required":false,
    748                                                             "additionalProperties":false,
    749                                                             "properties":{
    750                                                                 "$":{"$ref":"condition-attrs"},
    751                                                                 "environment-match":{"$ref":"re-match"}
    752                                                             }
    753                                                         }
    754                                                     ]
    755                                                 }
    756                                             }
    757                                         }
    758                                     }
    759                                 }
    760                             }
    761                         }
    762                     }
    763                 }
    764             }
    765         }
    766     },
    767     {
    768         "type":"object",
    769         "additionalProperties":false,
    770         "properties":{
    771             "policy-set": {
    772                 "type":"object",
    773                 "required":false,
    774                 "additionalProperties":false,
    775                 "properties":{
    776                     "$":{"$ref":"policysetattrs"},
    777                     "target": {"$ref":"target"},
    778                     "dataHandlingPreferences": {"$ref":"dataHandlingPreferences"},
    779                     "provisionalActions": {"$ref":"provisionalActions"},
    780                     "policy-set": {
    781                         "type":"array",
    782                         "required":false,
    783                         "additionalItems":false,
    784                         "items":{"$ref":"policy-set"}
    785                     }
    786                 }
    787             }
    788         }
    789     },
    790     {
    791         "type":"object",
    792         "additionalProperties":false,
    793         "properties":{
    794             "policy": { "$ref":"policy" }
    795         }
    796     }]
    797 }
