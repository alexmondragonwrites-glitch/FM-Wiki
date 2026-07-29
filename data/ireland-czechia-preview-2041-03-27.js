(()=>{
  if(!window.FM_IRELAND)return;
  const players=[
    {name:'Brian Walsh',role:'Torwart',position:'TW',club:'Nottm Forest',age:32,height:'190 cm',condition:'95%',morale:'Wirklich gut',appearances:'–',goals:'–',assists:0,rating:null,starter:true,duty:'Verteidigen',slot:'GK',value:'€29Mio - €34Mio'},
    {name:'Callum Brennan',role:'Inverser Flügelverteidiger',position:'V (R)',club:'Finn Harps',age:19,height:'174 cm',condition:'90%',morale:'Geht so',appearances:'–',goals:'–',assists:2,rating:null,starter:true,duty:'Unterstützen',slot:'RB',value:'€33Mio - €42Mio'},
    {name:'Darcy Andrews',role:'Ballspielender Verteidiger',position:'V (Z)',club:'Finn Harps',age:27,height:'184 cm',condition:'88%',morale:'Ziemlich gut',appearances:'–',goals:'–',assists:1,rating:null,starter:true,duty:'Verteidigen',slot:'RCB',value:'€32Mio - €35Mio'},
    {name:'Mareks Istrankins',role:'Halbraumverteidiger',position:'V (Z)',club:'Finn Harps',age:18,height:'183 cm',condition:'95%',morale:'Perfekt',appearances:'–',goals:'–',assists:1,rating:null,starter:true,duty:'Verteidigen',slot:'LCB',value:'€22Mio - €32Mio'},
    {name:'Kevin Kelly',role:'Inverser Flügelverteidiger',position:'V (LZ)',club:'Finn Harps',age:21,height:'183 cm',condition:'86%',morale:'Außergewöhnlich',appearances:'–',goals:'–',assists:0,rating:null,starter:true,duty:'Unterstützen',slot:'LB',value:'€22Mio - €30Mio'},
    {name:'Brendan Costello',role:'Defensiver Mittelfeldspieler',position:'V (Z), DM',club:'Grenoble',age:32,height:'191 cm',condition:'100%',morale:'Gut',appearances:'–',goals:'–',assists:0,rating:null,starter:true,duty:'Verteidigen',slot:'DM',value:'€12.5Mio - €15Mio'},
    {name:"Cormac O'Kane",role:'Mezzala',position:'DM, M/OM (Z)',club:'Finn Harps',age:25,height:'185 cm',condition:'94%',morale:'Perfekt',appearances:'–',goals:'–',assists:3,rating:null,starter:true,duty:'Angreifen',slot:'RCM',value:'€35Mio - €38Mio'},
    {name:"Jim O'Neill",role:'Zurückgezogener Spielmacher',position:'DM, M/OM (Z)',club:'Finn Harps',age:27,height:'180 cm',condition:'92%',morale:'Hervorragend',appearances:'–',goals:'–',assists:0,rating:null,starter:true,duty:'Unterstützen',slot:'LCM',value:'€38Mio - €48Mio'},
    {name:'Billy Walker',role:'Flügelspieler',position:'M/OM (R)',club:'Finn Harps',age:19,height:'168 cm',condition:'89%',morale:'Extrem gut',appearances:'–',goals:'–',assists:0,rating:null,starter:true,duty:'Angreifen',slot:'RW',value:'€26Mio - €30Mio'},
    {name:'Ross Grogan',role:'Knipser',position:'OM (L), ST (Z)',club:'Celtic',age:31,height:'185 cm',condition:'84%',morale:'Wirklich gut',appearances:'–',goals:'–',assists:8,rating:null,starter:true,duty:'Angreifen',slot:'LW',value:'Steht nicht zum Verkauf'},
    {name:'Justin Ramsey',role:'Stoßstürmer',position:'M (Z), ST (Z)',club:'Finn Harps',age:21,height:'180 cm',condition:'84%',morale:'Perfekt',appearances:'–',goals:'–',assists:1,rating:null,starter:true,duty:'Angreifen',slot:'ST',value:'€48Mio - €53Mio'},
    {name:'Graham Varma',role:'Torwart',position:'TW',club:"St Patrick's Athletic",age:23,height:'186 cm',condition:'100%',morale:'Gut',appearances:'–',goals:'–',assists:0,rating:null,starter:false,value:'€5.4Mio - €7.4Mio'},
    {name:'Tariq Benson',role:'Innenverteidiger',position:'V (RZ), DM',club:'Lyon',age:23,height:'182 cm',condition:'89%',morale:'Gut',appearances:'–',goals:'–',assists:0,rating:null,starter:false,value:'€85K - €850K'},
    {name:'Brendan McHugh',role:'Knipser',position:'OM (L), ST (Z)',club:'West Ham',age:33,height:'181 cm',condition:'100%',morale:'Wirklich gut',appearances:'–',goals:'–',assists:0,rating:null,starter:false,value:'€6Mio'},
    {name:"Harry O'Leary",role:'Stoßstürmer',position:'ST (Z)',club:'Caen',age:29,height:'192 cm',condition:'87%',morale:'Ziemlich gut',appearances:'–',goals:'–',assists:4,rating:null,starter:false,value:'€181Mio - €204Mio'},
    {name:'Colum Winnall',role:'Flügelverteidiger',position:'V/FV (L)',club:'Portsmouth',age:28,height:'170 cm',condition:'92%',morale:'Hervorragend',appearances:'–',goals:'–',assists:2,rating:null,starter:false,value:'€19.5Mio - €27Mio'},
    {name:'Shane Fox',role:'Flügelspieler',position:'M/OM (RL)',club:'Almería',age:31,height:'194 cm',condition:'86%',morale:'Okay',appearances:'–',goals:'–',assists:4,rating:null,starter:false,value:'Steht nicht zum Verkauf'},
    {name:'Mikey Smith',role:'Vorgeschobener Spielmacher',position:'OM (RZ), ST (Z)',club:'Hull City',age:33,height:'176 cm',condition:'97%',morale:'Eher schlecht',appearances:'–',goals:'–',assists:1,rating:null,starter:false,value:'€110K - €1.1Mio'},
    {name:'Callum Duggan',role:'Abräumer',position:'V (RZ), DM',club:'Everton',age:26,height:'185 cm',condition:'99%',morale:'Wirklich gut',appearances:'–',goals:'–',assists:0,rating:null,starter:false,value:'€90Mio - €110Mio'},
    {name:'Callum Lawless',role:'Abräumer',position:'DM, M (Z)',club:'Stuttgart',age:30,height:'178 cm',condition:'92%',morale:'Ganz okay',appearances:'–',goals:'–',assists:1,rating:null,starter:false,value:'€170K - €1.7Mio'},
    {name:'Jayson Devitt',role:'Torwart',position:'TW',club:'Leeds Utd',age:30,height:'184 cm',condition:'100%',morale:'Okay',appearances:'–',goals:'–',assists:0,rating:null,starter:false,value:'€425K - €3.1Mio'},
    {name:'Billy Kendrick',role:'Flügelverteidiger',position:'V (RL), M (Z)',club:'Finn Harps',age:22,height:'181 cm',condition:'72%',morale:'Außergewöhnlich',appearances:'–',goals:'–',assists:0,rating:null,starter:false,value:'€9Mio - €11Mio',injured:true},
    {name:'Robert Boylan',role:'Flügelspieler',position:'M (RZ), OM (R)',club:'Norwich',age:29,height:'183 cm',condition:'99%',morale:'Sehr gut',appearances:'–',goals:'–',assists:2,rating:null,starter:false,value:'€37Mio - €42Mio'}
  ];
  Object.assign(window.FM_IRELAND,{
    title:'Irland 2041',season:2041,updated:'27.03.2041',competition:'FIFA-WM-Qualifikation Europa',group:'Qualifikationsgruppe',position:'2. Platz',formation:'4-3-3',system:'SE7EN’s Kloppdiola 4-3-3',managerContext:'Doppelfunktion: Finn Harps und Irland',
    nextMatch:{opponent:'Tschechien',venue:'Auswärts · epet ARENA',date:'Termin im Export nicht sichtbar',time:'',competition:'FIFA-WM-Qualifikation Europa',requirement:'Irland geht als Gruppenzweiter in das Duell mit dem derzeitigen Vierten.'},
    groupStatus:'WM-Qualifikation · Irland Zweiter · Tschechien Vierter',qualification:{stage:'Qualifikationsphase',label:'FIFA-WM-Qualifikation Europa',status:'Laufend',detail:'Irland steht vor dem Auswärtsspiel bei Tschechien auf Rang zwei der Gruppe.'},
    squadLabel:'März-Kader 2041',tacticsLabel:'ERWARTETE STARTELF · TSCHECHIEN',players,
    harpsCore:[
      {name:'Callum Brennan',id:'callum-brennan',role:'Inverser Flügelverteidiger'},
      {name:'Darcy Andrews',id:'darcy-andrews',role:'Ballspielender Verteidiger'},
      {name:'Mareks Istrankins',id:'mareks-istrankins',role:'Halbraumverteidiger'},
      {name:'Kevin Kelly',id:'kevin-kelly',role:'Inverser Flügelverteidiger'},
      {name:'Cormac O’Kane',id:'cormac-okane',role:'Mezzala'},
      {name:'Jim O’Neill',id:'jim-oneill',role:'Zurückgezogener Spielmacher'},
      {name:'Billy Walker',id:'billy-walker',role:'Flügelspieler'},
      {name:'Justin Ramsey',id:'justin-ramsey',role:'Stoßstürmer'}
    ],
    opponentScout:{
      name:'Tschechien',position:'4. Platz in der WM-Qualifikationsgruppe',venue:'epet ARENA',formation:'3-4-2-1',mentality:'Kontrolliert',discipline:'Strikt',summary:'Tschechien verteidigt mit drei Innenverteidigern, zwei Wingbacks und einer Doppelsechs. Das Team hält den Ball ordentlich, ist zweikampfstark und besitzt mit Papoušek sowie Ulbrich zwei Spieler aus dem europäischen Spitzenregal.',
      strengths:['Gutes Niveau beim Halten von Bällen','Mehrere Spieler mit starker Zweikampfführung','Dichte zentrale Achse aus Dreierkette und Doppelsechs','Matěj Papoušek als kompletter Stürmer bei Arsenal','Vladimír Ulbrich als wertvoller Leverkusener Sechser'],
      weaknesses:['Sieben der letzten 19 Gegentore entstanden nach Flanken','Daniel Fleišman zuletzt mit einem Notenschnitt von 5,97','Die Wingbacks können hinter sich Raum öffnen','Mehrere mögliche Starter liegen unter 90 Prozent Athletik','Die grafische Scoutelf und der Mannschaftsexport weichen deutlich voneinander ab'],
      keyPlayers:[
        {name:'Matěj Papoušek',role:'Kompletter Stürmer · Arsenal',note:'€82–97 Mio. · zentrale Abschluss- und Verbindungsspieler'},
        {name:'Vladimír Ulbrich',role:'Defensiver Mittelfeldspieler · Bayer Leverkusen',note:'€71–87 Mio. · außergewöhnliche Moral und zentrale Stabilität'},
        {name:'Jiří Pánek',role:'Vorgeschobener Spielmacher · Sparta Prag',note:'Zwischenraumspieler hinter Papoušek'},
        {name:'Radim Malý',role:'Innenverteidiger · Finn Harps',note:'Kennt die irische Harps-Achse genau, startet laut Export mit 83 Prozent Athletik'}
      ],
      probableXI:[
        {name:'Pavel Kuivalainen',role:'Mitspielender Torwart',zone:'TW'},
        {name:'Tomas Baran',role:'Kompromissloser Innenverteidiger',zone:'IVR'},
        {name:'Martin Večera',role:'Kompromissloser Innenverteidiger',zone:'IVZ'},
        {name:'Ivo Marek',role:'Halbraumverteidiger',zone:'IVL'},
        {name:'Milan Beneš',role:'Flügelverteidiger',zone:'FVR'},
        {name:'Lukáš Fišer',role:'Flügelverteidiger',zone:'FVL'},
        {name:'Vladimír Ulbrich',role:'Defensiver Mittelfeldspieler',zone:'DMR'},
        {name:'Vít Havelka',role:'Defensiver Mittelfeldspieler',zone:'DML'},
        {name:'Milan Kovář',role:'Offensiver Mittelfeldspieler',zone:'OMR'},
        {name:'Jiří Pánek',role:'Vorgeschobener Spielmacher',zone:'OML'},
        {name:'Matěj Papoušek',role:'Kompletter Stürmer',zone:'ST'}
      ],
      matchPlan:[
        'Über Walker und die linke Angriffsseite früh Breite herstellen und die dokumentierte Flankenanfälligkeit testen.',
        'Papoušek nicht isoliert mannorientiert verfolgen; Costello sichert den Raum vor der Innenverteidigung.',
        'Pánek und Kovář beim Aufdrehen zwischen den Linien aggressiv stellen.',
        'O’Neill und O’Kane sollen Tschechiens Doppelsechs seitlich auseinanderziehen, statt frontal in den Block zu spielen.',
        'Brennan und Kelly versetzt vorschieben, damit die tschechischen Wingbacks nicht frei in Umschalträume kommen.',
        'Mit O’Leary steht für die Schlussphase ein 1,92-Meter-Stürmer bereit, falls Flanken zum Hauptweg werden.'
      ]
    }
  });
})();