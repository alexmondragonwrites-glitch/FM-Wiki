(()=>{
  const match={
    id:'2041-06-09-spain-ireland',
    date:'09.06.2041',
    competition:'UEFA Nations League',
    group:'Final Four · Spiel um Platz 3',
    venue:'Philips Stadion, Eindhoven',
    attendance:53892,
    weather:'17 °C',
    referee:'Dennis Maurer',
    home:'Spanien',
    away:'Irland',
    homeScore:1,
    awayScore:0,
    halfTime:'1:0',
    playerOfMatch:'Alberto',
    irelandPlayerOfMatch:'Darcy Andrews',
    events:[
      {minute:41,team:'Spanien',type:'goal',player:'Hugo'},
      {minute:61,team:'Irland',type:'yellow',player:'Callum Duggan'},
      {minute:64,team:'Spanien',type:'injury',player:'Adrián Palacios'},
      {minute:80,team:'Irland',type:'red',player:"Jim O'Neill"}
    ],
    stats:{
      shots:[13,4],shotsOnTarget:[3,0],xg:[1.13,0.11],shotsOffTarget:[6,2],bigChances:[1,0],
      possession:[44,56],corners:[4,3],fouls:[7,15],completedPasses:[416,519],attemptedPasses:[471,596],passAccuracy:[88,87],
      tacklesWon:['76% (16/21)','62% (16/26)'],headersWon:['44% (16/36)','54% (21/39)'],yellowCards:[0,1],redCards:[0,1],
      averageRating:[7.01,6.52],intenseSprints:[100,87],averageDistance:[12.5,12.5]
    },
    ratings:[
      {name:'Thomas Kenny',rating:6.5,starter:true},
      {name:'Billy Kendrick',rating:6.4,starter:true,off:56},
      {name:'Darcy Andrews',rating:7.0,starter:true,irelandBest:true},
      {name:'Callum Duggan',rating:6.7,starter:true,yellow:61},
      {name:'Kevin Kelly',rating:6.5,starter:true,off:'45+2'},
      {name:'Brendan Costello',rating:6.8,starter:true},
      {name:'Justin Ramsey',rating:6.4,starter:true,off:'45+2'},
      {name:"Cormac O'Kane",rating:6.8,starter:true,off:'45+2'},
      {name:'Shane Fox',rating:6.3,starter:true},
      {name:'Ross Grogan',rating:6.0,starter:true},
      {name:"Harry O'Leary",rating:6.5,starter:true,off:56},
      {name:'Colum Winnall',rating:6.6,starter:false,on:45},
      {name:'Brendan McHugh',rating:6.6,starter:false,on:56},
      {name:'Callum Lawless',rating:6.7,starter:false,on:45},
      {name:"Jim O'Neill",rating:6.2,starter:false,on:45,red:80},
      {name:'Simon Neville',rating:6.7,starter:false,on:56}
    ],
    analysis:{
      headline:'Irland beendet das Nations-League-Final-Four nach einem 0:1 gegen Spanien auf Rang vier.',
      summary:'Irland hat im Spiel um Platz drei mehr Ballbesitz, findet gegen Spanien aber keinen Weg aufs Tor. Hugo erzielt in der 41. Minute den einzigen Treffer. Irland kommt bei 56 Prozent Ballbesitz nur auf vier Abschlüsse, keinen Schuss aufs Tor und 0,11 xG. Jim O’Neill sieht in der 80. Minute Rot.',
      strengths:[
        'Darcy Andrews ist mit Note 7,0 Irlands bester bewerteter Spieler',
        'Irland hält 56 Prozent Ballbesitz und bringt 519 von 596 Pässen an',
        'Die Mannschaft gewinnt 54 Prozent der ausgewerteten Kopfballduelle',
        'Spanien wird trotz 13 Abschlüssen auf nur drei Schüsse aufs Tor begrenzt'
      ],
      limits:[
        'Kein einziger irischer Abschluss kommt auf das spanische Tor',
        'Nur 0,11 xG aus vier Abschlüssen',
        'Hugo erzielt in der 41. Minute den einzigen Treffer',
        'Jim O’Neill sieht nach seiner Einwechslung in der 80. Minute Rot',
        '15 Fouls und nur 62 Prozent gewonnene ausgewertete Zweikämpfe'
      ]
    },
    report:{
      title:'Rang vier nach engem 0:1 gegen Spanien',
      playHeading:'Hugos Treffer vor der Pause entscheidet das Spiel um Platz drei.',
      controlHeading:'Mehr Ballbesitz, aber kaum Durchschlagskraft im letzten Drittel.',
      ratingsHeading:'Andrews 7,0 · Costello 6,8 · O’Kane 6,8.',
      standingsLabel:'UEFA NATIONS LEAGUE · FINAL FOUR',
      standingsHeading:'Irland beendet das Turnier auf Platz vier.',
      historyHeading:'Nach dem 3:4 im Halbfinale folgt ein knappes 0:1 gegen Spanien.'
    },
    standings:[],
    qualification:{
      stage:'UEFA Nations League · Final Four',
      label:'UEFA Nations League',
      status:'4. Platz',
      detail:'Irland verliert das Spiel um Platz drei im Philips Stadion mit 0:1 gegen Spanien und beendet das Nations-League-Final-Four auf Rang vier.'
    }
  };
  const final={
    date:'09.06.2041',
    competition:'UEFA Nations League',
    stage:'Finale',
    venue:'De Kuip',
    attendance:51137,
    home:'Frankreich',
    away:'Niederlande',
    homeScore:0,
    awayScore:3,
    events:[
      {minute:19,team:'Niederlande',type:'goal',player:'M. ter Avest'},
      {minute:41,team:'Niederlande',type:'goal',player:'G. Hardley'},
      {minute:80,team:'Niederlande',type:'goal',player:'A. Verlaat'}
    ]
  };
  window.FM_IRELAND_MATCHES=[...(window.FM_IRELAND_MATCHES||[]).filter(x=>x.id!==match.id),match];
  window.FM_NATIONS_LEAGUE_2041={
    updated:'2041-06-09',
    winner:'Niederlande',
    runnerUp:'Frankreich',
    third:'Spanien',
    fourth:'Irland',
    final,
    thirdPlace:match
  };
  if(window.FM_IRELAND){
    Object.assign(window.FM_IRELAND,{
      updated:'09.06.2041',
      position:'4. Platz',
      lastMatch:match,
      nextMatch:null,
      opponentScout:null,
      group:'UEFA Nations League · Final Four',
      groupStatus:'Nations League · 4. Platz · Spanien 1:0 Irland',
      qualification:match.qualification,
      tournamentWinner:'Niederlande'
    });
  }
})();