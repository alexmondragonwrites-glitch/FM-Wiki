(()=>{
  const match={
    id:'2041-03-29-czechia-ireland',
    date:'29.03.2041',
    competition:'FIFA-WM-Qualifikation Europa',
    group:'Gruppe C',
    venue:'epet ARENA, Prag',
    attendance:17426,
    weather:'10 °C · windig',
    referee:'Cristian Cesana',
    home:'Tschechien',
    away:'Irland',
    homeScore:0,
    awayScore:1,
    halfTime:'0:1',
    playerOfMatch:'Callum Brennan',
    irelandPlayerOfMatch:'Callum Brennan',
    events:[
      {minute:18,team:'Tschechien',type:'yellow',player:'Tomas Baran'},
      {minute:20,team:'Tschechien',type:'yellow',player:'Radim Malý'},
      {minute:24,team:'Irland',type:'yellow',player:'Callum Brennan'},
      {minute:31,team:'Irland',type:'goal',player:'Callum Brennan'},
      {minute:'45+1',team:'Tschechien',type:'yellow',player:'Milan Beneš'},
      {minute:68,team:'Irland',type:'yellow',player:'Kevin Kelly'}
    ],
    stats:{
      shots:[14,11],shotsOnTarget:[4,4],xg:[0.95,0.81],shotsOffTarget:[7,2],bigChances:[1,1],
      possession:[44,56],corners:[5,8],fouls:[15,16],completedPasses:[377,478],attemptedPasses:[439,557],passAccuracy:[86,86],
      tacklesWon:['82% (18/22)','69% (18/26)'],headersWon:['49% (26/53)','50% (26/52)'],yellowCards:[3,2],redCards:[0,0],
      averageRating:[6.65,6.94],intenseSprints:[111,104],averageDistance:[12.0,12.3]
    },
    ratings:[
      {name:'Brian Walsh',rating:7.4,starter:true},
      {name:'Callum Brennan',rating:7.9,starter:true,goals:1,irelandBest:true},
      {name:'Darcy Andrews',rating:7.4,starter:true},
      {name:'Mareks Istrankins',rating:6.9,starter:true,debut:true},
      {name:'Kevin Kelly',rating:6.6,starter:true,off:58},
      {name:'Brendan Costello',rating:6.6,starter:true},
      {name:"Cormac O'Kane",rating:6.7,starter:true},
      {name:"Jim O'Neill",rating:6.5,starter:true,off:58},
      {name:'Billy Walker',rating:7.3,starter:true,off:50},
      {name:'Ross Grogan',rating:6.5,starter:true,off:50},
      {name:'Justin Ramsey',rating:6.5,starter:true,off:58},
      {name:'Brendan McHugh',rating:6.8,starter:false,on:50},
      {name:"Harry O'Leary",rating:6.6,starter:false,on:58},
      {name:'Callum Lawless',rating:6.9,starter:false,on:58},
      {name:'Billy Kendrick',rating:6.9,starter:false,on:58},
      {name:'Robert Boylan',rating:6.7,starter:false,on:50}
    ],
    analysis:{
      headline:'Brennan trifft, der Europameister nimmt Prag ein.',
      summary:'Irland gewinnt sein erstes Spiel der WM-Qualifikation mit 1:0 in Tschechien. Callum Brennan erzielt in der 31. Minute das einzige Tor und ist mit Note 7,9 der beste Spieler. Die Gastgeber schießen häufiger, doch Irland kontrolliert mit 56 Prozent Ballbesitz, 478 angekommenen Pässen und acht Ecken große Teile der Partie.',
      strengths:[
        'Callum Brennan erzielt das Siegtor und erhält mit 7,9 die höchste irische Note',
        'Brian Walsh und Darcy Andrews stabilisieren die Null mit jeweils Note 7,4',
        'Mareks Istrankins gibt beim Auswärtssieg sein Debüt für Irland',
        '56 Prozent Ballbesitz und 478 angekommene Pässe in Prag',
        'Acht irische Ecken gegenüber fünf tschechischen',
        'Nur vier tschechische Schüsse erreichen das Tor'
      ],
      limits:[
        'Irland erzeugt trotz elf Abschlüssen nur 0,81 xG',
        'Die Analyse bewertet die Qualität der irischen Angriffe im letzten Drittel als schwach',
        'Jim O’Neill bleibt mit Note 6,5 und wenig offensivem Einfluss unter seinem üblichen Niveau',
        'Tschechien kommt zu 14 Abschlüssen und einer Großchance',
        'Irland gewinnt nur 69 Prozent seiner ausgewerteten Zweikämpfe',
        'Ramsey und Grogan bleiben ohne Torbeteiligung'
      ]
    },
    report:{
      title:'Brennans Tor macht aus Kontrolle drei Punkte',
      playHeading:'Ein Außenverteidiger entscheidet den Auftakt.',
      controlHeading:'Mehr Ball, weniger Gefahr, trotzdem gewonnen.',
      ratingsHeading:'Brennan glänzt, Istrankins debütiert.',
      standingsLabel:'WM-QUALIFIKATION · GRUPPE C',
      standingsHeading:'Irland startet punktgleich mit Kroatien.',
      historyHeading:'Vom Nations-League-Halbfinalisten zum WM-Qualifikanten.'
    },
    standings:[
      {position:1,team:'Kroatien',played:1,wins:1,draws:0,losses:0,goalsFor:3,goalsAgainst:1,goalDifference:2,points:3},
      {position:2,team:'Irland',played:1,wins:1,draws:0,losses:0,goalsFor:1,goalsAgainst:0,goalDifference:1,points:3},
      {position:3,team:'Aserbaidschan',played:0,wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,goalDifference:0,points:0},
      {position:4,team:'Tschechien',played:1,wins:0,draws:0,losses:1,goalsFor:0,goalsAgainst:1,goalDifference:-1,points:0},
      {position:5,team:'Zypern',played:1,wins:0,draws:0,losses:1,goalsFor:1,goalsAgainst:3,goalDifference:-2,points:0}
    ],
    qualification:{stage:'Qualifikationsgruppe C',label:'FIFA-WM-Qualifikation Europa',status:'2. Platz',detail:'Irland beginnt die Qualifikation mit drei Punkten und ohne Gegentor.'}
  };
  window.FM_IRELAND_MATCHES=[...(window.FM_IRELAND_MATCHES||[]),match];
  if(window.FM_IRELAND){
    Object.assign(window.FM_IRELAND,{
      updated:'29.03.2041',position:'2. Platz',lastMatch:match,nextMatch:null,
      group:'Gruppe C',groupStatus:'WM-Qualifikation · 3 Punkte · 1:0 Tore · Rang zwei',qualification:match.qualification
    });
  }
})();