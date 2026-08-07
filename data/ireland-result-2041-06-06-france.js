(()=>{
  const match={
    id:'2041-06-06-france-ireland',
    date:'06.06.2041',
    competition:'UEFA Nations League',
    group:'Final Four · Halbfinale',
    venue:'Philips Stadion, Eindhoven',
    attendance:53892,
    weather:'27 °C · sonnig',
    referee:'Lewis Goodall',
    home:'Frankreich',
    away:'Irland',
    homeScore:4,
    awayScore:3,
    halfTime:'2:3',
    playerOfMatch:'Patrick Lafarge',
    irelandPlayerOfMatch:"Harry O'Leary",
    events:[
      {minute:6,team:'Irland',type:'goal',player:"Harry O'Leary"},
      {minute:23,team:'Irland',type:'goal',player:"Cormac O'Kane"},
      {minute:32,team:'Frankreich',type:'goal',player:'Yannick Jaffre'},
      {minute:36,team:'Irland',type:'goal',player:"Harry O'Leary"},
      {minute:37,team:'Frankreich',type:'goal',player:'Yannick Jaffre'},
      {minute:61,team:'Irland',type:'yellow',player:"Jim O'Neill"},
      {minute:64,team:'Frankreich',type:'goal',player:'Yannick Jaffre'},
      {minute:75,team:'Frankreich',type:'goal',player:'Noah Giordano'}
    ],
    stats:{
      shots:[17,7],shotsOnTarget:[8,3],xg:[3.79,2.01],bigChances:[4,2],
      possession:[50,50],corners:[8,3],fouls:[6,12],completedPasses:[469,404],attemptedPasses:[525,471],passAccuracy:[89,86],
      tacklesWon:['77% (17/22)','59% (16/27)'],headersWon:['54% (26/48)','40% (20/50)'],yellowCards:[0,1],redCards:[0,0],
      averageRating:[7.52,6.95],intenseSprints:[142,148],averageDistance:[12.4,12.7]
    },
    ratings:[
      {name:'Thomas Kenny',rating:6.6,starter:true},
      {name:'Simon Neville',rating:6.4,starter:true},
      {name:'Darcy Andrews',rating:6.6,starter:true,off:59},
      {name:'Callum Duggan',rating:6.3,starter:true},
      {name:'Kevin Kelly',rating:6.8,starter:true,off:'45+3'},
      {name:"Jim O'Neill",rating:7.3,starter:true,off:74,assists:1},
      {name:'Justin Ramsey',rating:6.6,starter:true,off:'45+3'},
      {name:"Cormac O'Kane",rating:7.0,starter:true,goals:1},
      {name:'Robert Boylan',rating:7.9,starter:true,assists:1},
      {name:'Brendan McHugh',rating:6.3,starter:true,off:74},
      {name:"Harry O'Leary",rating:9.1,starter:true,goals:2,assists:1,irelandBest:true},
      {name:'Ross Grogan',rating:6.5,starter:false,on:74},
      {name:'Mareks Istrankins',rating:6.8,starter:false,on:59},
      {name:'Callum Lawless',rating:6.5,starter:false,on:45},
      {name:'Brendan Costello',rating:6.5,starter:false,on:74},
      {name:'Billy Kendrick',rating:6.3,starter:false,on:45}
    ],
    analysis:{
      headline:'Sieben-Tore-Halbfinale: Irland unterliegt Frankreich mit 3:4.',
      summary:'Irland verpasst in Eindhoven nach einem spektakulären Nations-League-Halbfinale knapp das Endspiel. O’Leary trifft doppelt, O’Kane ebenfalls, und Irland führt kurz vor der Pause sogar 3:1. Frankreich antwortet jedoch mit Yannick Jaffres Hattrick und Noah Giordanos Siegtreffer zum 4:3. Bei 2,01 xG und drei Treffern liefert Irland offensiv ein starkes Spiel, kann Frankreichs 17 Abschlüsse und 3,79 xG aber nicht dauerhaft kontrollieren.',
      strengths:[
        'Harry O’Leary erzielt zwei Tore, liefert eine Vorlage und erhält die Note 9,1',
        'Cormac O’Kane trifft zum zwischenzeitlichen 2:0 und erreicht Note 7,0',
        'Robert Boylan erhält mit 7,9 die zweitbeste irische Note und verbucht eine Vorlage',
        'Jim O’Neill steuert ebenfalls eine Vorlage bei und kommt auf Note 7,3',
        'Irland führt nach 36 Minuten mit 3:1 gegen Frankreich',
        'Trotz nur sieben Abschlüssen erzeugt Irland 2,01 xG und erzielt drei Tore',
        '148 intensive Sprints unterstreichen den enormen Aufwand in einem offenen Halbfinale'
      ],
      limits:[
        'Frankreich kommt auf 17 Abschlüsse, acht Schüsse aufs Tor und 3,79 xG',
        'Yannick Jaffre erzielt zwischen der 32. und 64. Minute einen Hattrick',
        'Die 3:1-Führung hält nur eine Minute, weil Frankreich unmittelbar zum 2:3 antwortet',
        'Irland gewinnt nur 59 Prozent der ausgewerteten Zweikämpfe und 40 Prozent der Kopfballduelle',
        'Noah Giordano dreht das Halbfinale in der 75. Minute endgültig zum 4:3'
      ]
    },
    report:{
      title:'Ein Halbfinale für die Erinnerung, aber nicht für das Finale',
      playHeading:'Irland führt 3:1, Frankreich schlägt mit vier Toren zurück.',
      controlHeading:'Sieben irische Abschlüsse reichen für drei Tore, Frankreich erzeugt jedoch dauerhaft mehr Druck.',
      ratingsHeading:'O’Leary 9,1 · Boylan 7,9 · O’Neill 7,3.',
      standingsLabel:'UEFA NATIONS LEAGUE · FINAL FOUR',
      standingsHeading:'Das Finale wird knapp verpasst.',
      historyHeading:'Irland scheitert nach einem großen Spiel an Frankreich.'
    },
    standings:[],
    qualification:{
      stage:'UEFA Nations League · Final Four',
      label:'UEFA Nations League',
      status:'Finale verpasst',
      detail:'Irland verliert das Halbfinale im Philips Stadion nach einer 3:1-Führung mit 3:4 gegen Frankreich. Das Ergebnis beendet den Traum vom Nations-League-Finale, nicht aber den Eindruck eines außergewöhnlichen irischen Auftritts.'
    }
  };
  window.FM_IRELAND_MATCHES=[...(window.FM_IRELAND_MATCHES||[]).filter(x=>x.id!==match.id),match];
  if(window.FM_IRELAND){
    Object.assign(window.FM_IRELAND,{
      updated:'06.06.2041',position:'Halbfinale',lastMatch:match,nextMatch:null,opponentScout:null,
      group:'UEFA Nations League · Final Four',
      groupStatus:'Nations League · Halbfinale · Frankreich 4:3 Irland',
      qualification:match.qualification
    });
  }
})();