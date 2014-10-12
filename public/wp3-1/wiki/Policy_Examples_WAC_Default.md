[Back to Policy Examples](Back%20to%20Policy%20Examples.html)

Policy Examples: WAC Default Security Policy[¶](#Policy-Examples-WAC-Default-Security-Policy)
=============================================================================================

      1 <policy-set combine="first-matching-target">
      2     <policy combine="first-applicable" description="Operator">
      3         <target>
      4             <subject>
      5                 <subject-match attr="distributor-key-root-fingerprint" match="(Operator root fingerprint)"/>
      6             </subject>
      7         </target>
      8 
      9         <rule effect="prompt-blanket">
     10             <condition combine="and">
     11                 <condition combine="or">
     12                     <resource-match attr="device-cap" match="messaging.send"/>
     13                     <resource-match attr="device-cap" match="XMLHttpRequest"/>
     14                     <resource-match attr="device-cap" match="externalNetworkAccess"/>
     15                 </condition>
     16                 <environment-match attr="roaming" match='true'/>
     17             </condition>
     18         </rule>
     19 
     20         <rule effect="permit">
     21             <condition>
     22                 <resource-match attr="device-cap" match="*"/>
     23             </condition>
     24         </rule>
     25     </policy>
     26 
     27     <policy combine="first-applicable" description="WAC">
     28         <target combine="first-matching-target">
     29             <subject>
     30                 <subject-match attr="distributor-key-root-fingerprint" match="(WAC root fingerprint)"/>
     31             </subject>
     32         </target>
     33 
     34         <rule effect="permit">
     35             <condition combine="and">
     36                 <resource-match attr="device-cap" match="filesystem"/>
     37                 <resource-match attr="param:location" func="glob" match="wgt-*"/>
     38             </condition>
     39         </rule>
     40 
     41         <rule effect="prompt-blanket">
     42             <condition combine="and">
     43                 <resource-match attr="device-cap" match="devicestatus"/>
     44                 <resource-match attr="param:property" match="IMEI"/>
     45             </condition>
     46         </rule>
     47 
     48         <rule effect="prompt-session">
     49             <condition combine="and">
     50                 <condition combine="or">
     51                     <resource-match attr="device-cap" match="messaging.send"/>
     52                     <resource-match attr="device-cap" match="XMLHttpRequest"/>
     53                     <resource-match attr="device-cap" match="externalNetworkAccess"/>
     54                 </condition>
     55                 <environment-match attr="roaming" match='true'/>
     56             </condition>
     57         </rule>
     58 
     59         <rule effect="prompt-blanket">
     60             <condition combine="or">
     61                 <resource-match attr="device-cap" match="camera"/>
     62                 <resource-match attr="device-cap" match="pim.contact"/>
     63                 <resource-match attr="device-cap" match="pim.calendar"/>
     64                 <resource-match attr="device-cap" match="pim.task"/>
     65                 <resource-match attr="device-cap" match="pim.calendar"/>
     66                 <resource-match attr="device-cap" match="devicestatus"/>
     67                 <resource-match attr="device-cap" match="messaging.write"/>
     68                 <resource-match attr="device-cap" match="messaging.send"/>
     69                 <resource-match attr="device-cap" match="messaging.find"/>
     70                 <resource-match attr="device-cap" match="messaging.subscribe"/>
     71                 <resource-match attr="device-cap" match="geolocation.position"/>
     72                 <resource-match attr="device-cap" match="XMLHttpRequest"/>
     73                 <resource-match attr="device-cap" match="externalNetworkAccess"/>
     74                 <resource-match attr="device-cap" match="filesystem"/>
     75             </condition>
     76         </rule>
     77 
     78         <rule effect="permit">
     79             <condition>
     80                 <resource-match attr="device-cap" match="*"/>
     81             </condition>
     82         </rule>
     83     </policy>
     84 
     85     <policy combine="first-applicable" description="Untrusted">
     86         <rule effect="permit">
     87             <condition combine="or">
     88                 <condition combine="and">
     89                     <resource-match attr="device-cap" match="filesystem"/>
     90                     <resource-match attr="param:location" func="glob" match="wgt-*"/>
     91                 </condition>
     92                 <resource-match attr="device-cap" match="deviceinteraction"/>
     93                 <resource-match attr="device-cap" match="camera.show"/>
     94                 <resource-match attr="device-cap" match="messaging"/>
     95             </condition>
     96         </rule>
     97 
     98         <rule effect="prompt-blanket">
     99             <condition combine="or">
    100                 <resource-match attr="device-cap" match="accelerometer"/>
    101                 <resource-match attr="device-cap" match="orientation"/>
    102             </condition>
    103         </rule>
    104 
    105         <rule effect="deny">
    106             <condition combine="or">
    107                 <condition combine="and">
    108                     <resource-match attr="device-cap" match="devicestatus"/>
    109                     <resource-match attr="param:property" match="IMEI"/>
    110                 </condition>
    111                 <condition combine="and">
    112                     <condition combine="or">
    113                         <resource-match attr="device-cap" match="messaging.send"/>
    114                         <resource-match attr="device-cap" match="XMLHttpRequest"/>
    115                         <resource-match attr="device-cap" match="externalNetworkAccess"/>
    116                     </condition>
    117                     <environment-match attr="roaming" match='true'/>
    118                 </condition>
    119             </condition>
    120         </rule>
    121 
    122         <rule effect="prompt-session">
    123             <condition>
    124                 <resource-match attr="device-cap" match="devicestatus"/>
    125             </condition>
    126         </rule>
    127 
    128         <rule effect="prompt-oneshot">
    129             <condition combine="or">
    130                 <resource-match attr="device-cap" match="camera"/>
    131                 <resource-match attr="device-cap" match="camera.capture"/>
    132                 <resource-match attr="device-cap" match="pim.contact"/>
    133                 <resource-match attr="device-cap" match="pim.calendar"/>
    134                 <resource-match attr="device-cap" match="pim.task"/>
    135                 <resource-match attr="device-cap" match="pim.calendar"/>
    136                 <resource-match attr="device-cap" match="messaging.write"/>
    137                 <resource-match attr="device-cap" match="messaging.send"/>
    138                 <resource-match attr="device-cap" match="messaging.find"/>
    139                 <resource-match attr="device-cap" match="messaging.subscribe"/>
    140                 <resource-match attr="device-cap" match="geolocation.position"/>
    141                 <resource-match attr="device-cap" match="XMLHttpRequest"/>
    142                 <resource-match attr="device-cap" match="externalNetworkAccess"/>
    143             </condition>
    144         </rule>
    145 
    146         <rule effect="deny">
    147             <condition>
    148                 <resource-match attr="device-cap" match="*"/>
    149             </condition>
    150         </rule>
    151     </policy>
    152 </policy-set>
