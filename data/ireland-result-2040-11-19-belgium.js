(()=>{
  const match={
    id:'2040-11-19-belgium-ireland',
    date:'19.11.2040',
    competition:'UEFA Nations League A',
    group:'Gruppe 4',
    venue:'Stade Roi Baudouin, Brüssel',
    attendance:46992,
    weather:'15 °C',
    home:'Belgien',
    away:'Irland',
    homeScore:1,
    awayScore:1,
    halfTime:'0:0',
    playerOfMatch:'Thierry Aymes',
    irelandPlayerOfMatch:'Robert Boylan',
    events:[
      {minute:70,team:'Irland',type:'goal',player:'Justin Ramsey',assist:'Robert Boylan'},
      {minute:75,team:'Belgien',type:'goal',player:'Thierry Aymes'},
      {minute:86,team:'Belgien',type:'yellow',player:'Luís Soares'}
    ],
    stats:{
      shots:[13,7],
      shotsOnTarget:[5,4],
      xg:[1.05,1.54],
      shotsOffTarget:[6,1],
      bigChances:[0,2],
      possession:[49,51],
      corners:[7,3],
      fouls:[10,17],
      completedPasses:[359,374],
      attemptedPasses:[424,440],
      passAccuracy:[85,85],
      tacklesWon:['95% (18/19)','76% (22/29)'],
      headersWon:['47% (27/57)','49% (29/59)'],
      yellowCards:[1,0],
      redCards:[0,0],
      averageRating:[6.77,6.68],
      intenseSprints:[99,97],
      averageDistance:[11.8,11.7]
    },
    ratings:[
      {name:'Thomas Kenny',rating:6.5,starter:true},
      {name:'Tariq Benson',rating:6.9,starter:true},
      {name:'Callum Duggan',rating:6.6,starter:true},
      {name:'Darcy Andrews',rating:6.8,starter:true,off:55},
      {name:'Kevin Kelly',rating:6.8,starter:true,off:55},
      {name:'Brendan Costello',rating:6.8,starter:true},
      {name:"Cormac O'Kane",rating:6.6,starter:true,off:45},
      {name:"Jim O'Neill",rating:6.4,starter:true},
      {name:'Robert Boylan',rating:7.2,starter:true,assists:1,irelandBest:true},
      {name:'Ross Grogan',rating:6.4,starter:true,off:45},
      {name:"Harry O'Leary",rating:6.4,starter:true,off:45},
      {name:'Jonathan Douglas',rating:6.5,starter:false,on:55},
      {name:'Justin Ramsey',rating:7.1,starter:false,on:45,goals:1},
      {name:'Colum Winnall',rating:6.4,starter:false,on:55},
      {name:'Shane Fox',rating:6.3,starter:false,on:45},
      {name:'Callum Lawless',rating:6.5,starter:false,on:45}
    ],
    analysis:{
      headline:'Der Joker trifft, der eine Punkt trägt Irland ins Halbfinale.',
      summary:'Irland musste in Brüssel nicht dominieren, sondern die entscheidenden Momente sauber überstehen. Belgien schoss häufiger, doch Irland erzeugte mit nur sieben Abschlüssen 1,54 xG und die beiden einzigen Großchancen der Partie. Ramsey traf nach seiner Einwechslung auf Boylans Vorlage. Aymes antwortete fünf Minuten später, aber das 1:1 genügte zum ungeschlagenen Gruppensieg.',
      strengths:[
        '1,54 xG aus nur sieben Abschlüssen und damit höhere Chancenqualität als Belgien',
        'Zwei Großchancen zugunsten Irlands bei keiner belgischen Großchance',
        'Ramsey trifft als Einwechselspieler zum entscheidenden 1:0',
        'Boylan liefert die Vorlage und ist mit Note 7,2 Irlands bester Spieler',
        'Ungeschlagener Gruppensieg mit zwölf Punkten aus sechs Spielen'
      ],
      limits:[
        'Die Führung hielt nur fünf Minuten',
        'Belgien kam zu 13 Abschlüssen und fünf Schüssen aufs Tor',
        '17 irische Fouls nahmen dem Spiel zeitweise den Rhythmus',
        'O’Neill blieb mit Note 6,4 deutlich unter seinem normalen Einfluss',
        'Die ursprüngliche Offensivbesetzung musste zur Pause umfassend korrigiert werden'
      ]
    },
    standings:[
      {position:1,team:'Irland',played:6,wins:3,draws:3,losses:0,goalsFor:10,goalsAgainst:6,goalDifference:4,points:12},
      {position:2,team:'Deutschland',played:6,wins:3,draws:2,losses:1,goalsFor:10,goalsAgainst:6,goalDifference:4,points:11},
      {position:3,team:'Belgien',played:6,wins:2,draws:2,losses:2,goalsFor:11,goalsAgainst:12,goalDifference:-1,points:8},
      {position:4,team:'Schottland',played:6,wins:0,draws:1,losses:5,goalsFor:3,goalsAgainst:10,goalDifference:-7,points:1}
    ],
    qualification:{stage:'Halbfinale',label:'UEFA Nations League A',status:'Qualifiziert',detail:'Irland gewinnt Gruppe 4 ungeschlagen mit zwölf Punkten.'}
  };
  window.FM_IRELAND_MATCHES=[...(window.FM_IRELAND_MATCHES||[]),match];
  if(window.FM_IRELAND){
    Object.assign(window.FM_IRELAND,{
      position:'1. Platz',
      lastMatch:match,
      nextMatch:null,
      groupStatus:'Gruppensieger · ungeschlagen · Nations-League-Halbfinale',
      qualification:match.qualification
    });
  }
})();