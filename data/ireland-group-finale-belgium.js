(()=>{
  if(!window.FM_IRELAND)return;
  const belgiumSquad=[
    {slot:'TW',name:'Yod Kunsorn',position:'TW',club:'Newcastle',age:23,height:'187 cm',weight:'83 kg',condition:90,conditionText:'Ausgezeichnet',appearances:'5',goals:0,assists:0,rating:7.04,value:'€154–180 Mio.',starter:true},
    {slot:'VR',name:'Mouloud Zidane',position:'V (R)',club:'Wolfsburg',age:31,height:'179 cm',weight:'75 kg',condition:64,conditionText:'Schwach',appearances:'5',goals:1,assists:0,rating:6.80,value:'Nicht zum Verkauf',starter:true},
    {slot:'VZR',name:'Joni Hermans',position:'V (RLZ)',club:'Napoli',age:31,height:'188 cm',weight:'82 kg',condition:72,conditionText:'Ordentlich',appearances:'3 (1)',goals:1,assists:0,rating:6.93,value:'€84–118 Mio.',starter:true},
    {slot:'VZL',name:'Said Toufiqui',position:'V (LZ)',club:'Manchester United',age:31,height:'185 cm',weight:'79 kg',condition:68,conditionText:'Ordentlich',appearances:'3',goals:0,assists:0,rating:6.77,value:'Nicht zum Verkauf',starter:true},
    {slot:'VL',name:'Guychel Mukanya',position:'V (RLZ), FV (L)',club:'Barcelona',age:31,height:'181 cm',weight:'77 kg',condition:66,conditionText:'Ordentlich',appearances:'2 (2)',goals:0,assists:0,rating:7.20,value:'€56–79 Mio.',starter:true},
    {slot:'DMZR',name:'Alan Barth',position:'V (Z), DM',club:'Juventus',age:31,height:'186 cm',weight:'82 kg',condition:63,conditionText:'Schwach',appearances:'5',goals:1,assists:0,rating:6.98,value:'Nicht zum Verkauf',starter:true},
    {slot:'DMZL',name:'Luís Soares',position:'V (Z), DM, M (Z)',club:'Real Madrid',age:31,height:'179 cm',weight:'77 kg',condition:60,conditionText:'Schwach',appearances:'5',goals:0,assists:0,rating:6.68,value:'Nicht zum Verkauf',starter:true,yellow:true},
    {slot:'OMR',name:'Vivaldy Shabani',position:'M (RZ), OM (R)',club:'Atlético Madrid',age:24,height:'184 cm',weight:'75 kg',condition:56,conditionText:'Schwach',appearances:'3',goals:1,assists:0,rating:6.77,value:'€231–252 Mio.',starter:true},
    {slot:'OMZ',name:'Marian Peterges',position:'M/OM (Z)',club:'Manchester City',age:25,height:'172 cm',weight:'70 kg',condition:64,conditionText:'Schwach',appearances:'4',goals:1,assists:2,rating:7.18,value:'€317–386 Mio.',starter:true},
    {slot:'OML',name:'Rudiger Evrard',position:'V (RL), FV/OM (L)',club:'Tottenham',age:28,height:'182 cm',weight:'76 kg',condition:69,conditionText:'Ordentlich',appearances:'3 (1)',goals:0,assists:0,rating:6.57,value:'€128–154 Mio.',starter:true},
    {slot:'STZ',name:'Noa Van der Heyden',position:'M/OM (Z), ST (Z)',club:'Villarreal',age:31,height:'178 cm',weight:'73 kg',condition:62,conditionText:'Schwach',appearances:'4',goals:2,assists:1,rating:7.25,value:'Nicht zum Verkauf',starter:true},
    {slot:'E1',name:'Jocelyn Metz-Riehl',position:'TW',club:'Real Sociedad',age:31,height:'186 cm',weight:'81 kg',condition:96,conditionText:'Erstklassig',appearances:'–',goals:0,assists:0,rating:null,value:'Nicht zum Verkauf',starter:false},
    {slot:'E2',name:'Oscar Michiels',position:'V (RZ)',club:'Napoli',age:27,height:'188 cm',weight:'82 kg',condition:88,conditionText:'Ausgezeichnet',appearances:'3 (2)',goals:0,assists:0,rating:6.88,value:'€171–200 Mio.',starter:false},
    {slot:'E3',name:'Thierry Aymes',position:'V (RLZ)',club:'Wolves',age:30,height:'187 cm',weight:'81 kg',condition:93,conditionText:'Ausgezeichnet',appearances:'0 (1)',goals:0,assists:0,rating:null,value:'€89–107 Mio.',starter:false},
    {slot:'E4',name:'Reinout Smets',position:'M (Z), OM (RZ)',club:'Wolfsburg',age:32,height:'180 cm',weight:'76 kg',condition:94,conditionText:'Ausgezeichnet',appearances:'1 (1)',goals:0,assists:0,rating:6.55,value:'Nicht zum Verkauf',starter:false},
    {slot:'E5',name:'Philippe Boulay',position:'M/OM (R), ST (Z)',club:'Lazio',age:30,height:'175 cm',weight:'71 kg',condition:92,conditionText:'Ausgezeichnet',appearances:'1 (1)',goals:0,assists:0,rating:6.40,value:'€116–163 Mio.',starter:false},
    {slot:'E6',name:'Julian Caron',position:'M (R), OM (RL), ST (Z)',club:'Brentford',age:30,height:'186 cm',weight:'80 kg',condition:91,conditionText:'Ausgezeichnet',appearances:'1 (1)',goals:1,assists:0,rating:6.80,value:'€66–96 Mio.',starter:false},
    {slot:'E7',name:'Tom Larre',position:'M (L), OM (RL)',club:'Atlético Madrid',age:31,height:'175 cm',weight:'70 kg',condition:93,conditionText:'Ausgezeichnet',appearances:'2 (1)',goals:0,assists:1,rating:7.65,value:'€61–74 Mio.',starter:false},
    {slot:'E8',name:'Warre Heinen',position:'M/OM (R), ST (Z)',club:'Milan',age:28,height:'173 cm',weight:'68 kg',condition:100,conditionText:'Erstklassig',appearances:'–',goals:0,assists:0,rating:null,value:'€82–121 Mio.',starter:false},
    {slot:'E9',name:'Alexandre Irigaray',position:'M (L), OM (RL)',club:'Tenerife',age:31,height:'179 cm',weight:'72 kg',condition:86,conditionText:'Ausgezeichnet',appearances:'0 (1)',goals:0,assists:0,rating:6.60,value:'Nicht zum Verkauf',starter:false},
    {slot:'E10',name:'Lukas De Backer',position:'ST (Z)',club:'Napoli',age:27,height:'184 cm',weight:'77 kg',condition:98,conditionText:'Erstklassig',appearances:'–',goals:0,assists:0,rating:null,value:'€49–73 Mio.',starter:false},
    {slot:'E11',name:'Leonardo Meeus',position:'TW',club:'Benfica',age:31,height:'186 cm',weight:'80 kg',condition:96,conditionText:'Erstklassig',appearances:'–',goals:0,assists:0,rating:null,value:'Nicht zum Verkauf',starter:false},
    {slot:'E12',name:'Noah Vandenbussche',position:'ST (Z)',club:'Roma',age:31,height:'175 cm',weight:'71 kg',condition:88,conditionText:'Ausgezeichnet',appearances:'1 (1)',goals:0,assists:0,rating:6.55,value:'Nicht zum Verkauf',starter:false}
  ];
  window.FM_IRELAND.nextMatch={
    opponent:'Belgien',venue:'Stade Roi Baudouin, Belgien',date:'19.11.2040',time:'Noch nicht erfasst',weather:'Nieselregen · 11 °C',stage:'6. und letzter Spieltag',opponentPosition:'3. Platz',daysUntil:3,
    requirement:'Ein Unentschieden reicht zum Weiterkommen',
    winScenario:'Ein Sieg bestätigt Irland aus eigener Kraft als Gruppensieger.',
    drawScenario:'Ein Remis sichert das Weiterkommen ohne Blick auf das Parallelspiel.',
    lossScenario:'Bei einer Niederlage wäre Irland vom Ausgang des Parallelspiels abhängig.',
    suspension:'Callum Brennan ist gesperrt.',
    substitutionRule:'Bis zu zwölf Spieler dürfen auf der Bank sitzen; maximal fünf Wechsel in drei Wechselzeitpunkten.',
    expectedShape:'4-2-3-1',
    opponentSquad:belgiumSquad,
    opponentAnalysis:{
      headline:'Milliardenwert, aber müde Beine.',
      summary:'Belgien bringt einen hochkarätigen Kader aus Europas Spitzenklubs mit. Gleichzeitig liegen acht der elf voraussichtlichen Starter bei höchstens 69 Prozent Kondition. Das macht die Partie weniger zu einer Frage des Namensglanzes als des Tempos und der Belastungssteuerung.',
      keyPlayers:[
        'Marian Peterges · Manchester City · Marktwert €317–386 Mio. · 1 Tor und 2 Vorlagen',
        'Vivaldy Shabani · Atlético Madrid · Marktwert €231–252 Mio.',
        'Noa Van der Heyden · Villarreal · 2 Tore, 1 Vorlage, Note 7,25',
        'Yod Kunsorn · Newcastle · Note 7,04 und 90 Prozent Kondition'
      ],
      opportunities:[
        'Belgiens erwartete Doppelsechs liegt bei nur 63 und 60 Prozent Kondition.',
        'Die voraussichtliche offensive Dreierreihe startet bei 56, 64 und 69 Prozent.',
        'Die belgische Bank ist deutlich frischer als die Startelf; ein früher irischer Zugriff könnte den Gegner zu Wechseln zwingen.',
        'Callum Brennans Sperre verlangt auf Irlands rechter Abwehrseite eine neue Lösung.'
      ]
    }
  };
  window.FM_IRELAND.groupStatus='Tabellenführer nach fünf Spielen · Remis gegen Belgien reicht zum Weiterkommen';
})();