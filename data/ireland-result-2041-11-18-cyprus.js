(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_IRELAND=window.FM_IRELAND||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const standings=[
    {position:1,team:'Irland',played:8,wins:8,draws:0,losses:0,goalsFor:33,goalsAgainst:7,goalDifference:26,points:24,status:'WM 2042 qualifiziert · Gruppensieger'},
    {position:2,team:'Tschechien',played:8,wins:5,draws:0,losses:3,goalsFor:13,goalsAgainst:7,goalDifference:6,points:15},
    {position:3,team:'Kroatien',played:8,wins:4,draws:1,losses:3,goalsFor:22,goalsAgainst:11,goalDifference:11,points:13},
    {position:4,team:'Zypern',played:8,wins:2,draws:1,losses:5,goalsFor:14,goalsAgainst:20,goalDifference:-6,points:7},
    {position:5,team:'Aserbaidschan',played:8,wins:0,draws:0,losses:8,goalsFor:5,goalsAgainst:42,goalDifference:-37,points:0}
  ];

  const match={
    id:'2041-11-18-cyprus-ireland',
    date:'2041-11-18',
    season:2041,
    competition:'FIFA-WM-Qualifikation Europa',
    group:'Gruppe C',
    home:'Zypern',
    away:'Irland',
    homeScore:2,
    awayScore:3,
    score:'2:3',
    halfTime:'0:2',
    venue:'GSP-Stadion, Nikosia',
    location:'Nikosia, Zypern',
    attendance:11449,
    weather:'Windig · 20°C',
    referee:'Gabriel Ignea',
    events:[
      {minute:6,team:'Irland',type:'yellow',player:'Callum Brennan',text:'Gelbe Karte'},
      {minute:16,team:'Irland',type:'goal',player:'Billy Walker',text:'0:1'},
      {minute:29,team:'Irland',type:'goal',player:'Ben Barry',text:'0:2'},
      {minute:49,team:'Zypern',type:'goal',player:'Michalis Charalabous',text:'1:2'},
      {minute:56,team:'Irland',type:'penalty-missed',player:'Ben Barry',text:'Elfmeter verschossen'},
      {minute:66,team:'Irland',type:'yellow',player:"Jim O'Neill",text:'Gelbe Karte'},
      {minute:75,team:'Irland',type:'goal',player:"Jim O'Neill",text:'1:3'},
      {minute:77,team:'Zypern',type:'goal',player:'Michalis Charalabous',text:'2:3'},
      {minute:79,team:'Irland',type:'yellow',player:'Callum Duggan',text:'Gelbe Karte'},
      {minute:'90+1',team:'Zypern',type:'yellow',player:'Giorgos Zeniou',text:'Gelbe Karte'}
    ],
    scorers:[
      {team:'Irland',player:'Billy Walker',minute:16},
      {team:'Irland',player:'Ben Barry',minute:29},
      {team:'Zypern',player:'Michalis Charalabous',minute:49},
      {team:'Irland',player:"Jim O'Neill",minute:75},
      {team:'Zypern',player:'Michalis Charalabous',minute:77}
    ],
    stats:{
      shots:[4,16],
      shotsOnTarget:[4,12],
      xg:[0.70,3.10],
      bigChances:[2,4],
      possession:[40,60],
      corners:[1,12],
      fouls:[17,16],
      completedPasses:['326/387','487/563'],
      passAccuracy:[84,87],
      tacklesWon:['79% (22/28)','80% (16/20)'],
      headersWon:['43% (23/54)','56% (30/54)'],
      yellowCards:[1,3],
      redCards:[0,0],
      averageRating:[6.87,6.91],
      intensiveSprints:[101,116],
      averageDistanceKm:[11.9,12.7]
    },
    ratings:[
      {name:'Evan Reilly',starter:true,rating:6.5},
      {name:'Callum Brennan',starter:true,off:53,rating:7.5},
      {name:'Brendan Costello',starter:true,rating:7.0},
      {name:'Mareks Istrankins',starter:true,rating:7.2},
      {name:'Colum Winnall',starter:true,off:53,rating:6.5},
      {name:'Callum Duggan',starter:true,rating:6.8},
      {name:'Justin Ramsey',starter:true,off:53,rating:6.7},
      {name:"Cormac O'Kane",starter:true,off:53,rating:6.5},
      {name:'Billy Walker',starter:true,off:53,goals:1,rating:7.8,irelandBest:true},
      {name:'Shane Fox',starter:true,rating:6.7},
      {name:'Ben Barry',starter:true,goals:1,rating:7.5},
      {name:"Jim O'Neill",starter:false,on:53,goals:1,rating:7.0},
      {name:'Kevin Kelly',starter:false,on:53,rating:6.7},
      {name:'Robert Boylan',starter:false,on:53,rating:6.9},
      {name:'Simon Neville',starter:false,on:53,rating:6.9},
      {name:'Ronan Reilly',starter:false,on:53,rating:6.5}
    ],
    standings,
    irelandPlayerOfMatch:'Billy Walker',
    standout:{player:'Billy Walker',team:'Irland',rating:7.8,goals:1,note:'Eröffnet den Torreigen und wird als bester irischer Spieler geführt.'},
    rotation:{
      intentional:true,
      level:'leicht',
      note:'Flannigan nutzt das bereits bedeutungslose letzte Gruppenspiel für etwas Rotation und nimmt nach 53 Minuten fünf Wechsel auf einmal vor.'
    },
    analysis:{
      headline:'Acht aus acht: Irland beendet die Qualifikation mit einem 3:2 auf Zypern',
      summary:'Mit etwas Rotation gewinnt Irland auch das letzte Gruppenspiel. Walker und Barry sorgen für das 2:0 zur Pause, nach fünf Wechseln wird es kurz unruhig, ehe O’Neill das entscheidende dritte Tor erzielt.',
      strengths:[
        '16 Abschlüsse und 12 Schüsse aufs Tor',
        '3,10 xG und vier Großchancen',
        '60 Prozent Ballbesitz und 87 Prozent Passquote',
        'Billy Walker erneut mit direktem Torbeitrag',
        'Jim O’Neill trifft nach seiner Einwechslung',
        'Perfekte Qualifikation mit acht Siegen aus acht Spielen'
      ],
      limits:[
        'Zypern verwertet alle vier Schüsse aufs Tor zu zwei Treffern',
        'Ben Barry vergibt in der 56. Minute einen Elfmeter',
        'Nach der großen Wechselwelle geht etwas Kontrolle verloren',
        'Drei Gelbe Karten auf irischer Seite'
      ],
      rotation:'Die leichte Rotation passt zum Kontext: Platz eins und das WM-Ticket waren bereits sicher. Fünf Wechsel in der 53. Minute verteilen zusätzliche Minuten, ohne die perfekte Bilanz zu gefährden.',
      qualification:'Irland schließt Gruppe C mit 24 Punkten aus acht Spielen und 33:7 Toren ab. Der Vorsprung auf Tschechien beträgt am Ende neun Punkte.'
    },
    report:{
      title:'Perfekt durch Gruppe C: Irland gewinnt auch auf Zypern',
      playHeading:'Zwei frühe Tore, eine wilde zweite Hälfte',
      controlHeading:'Die Zahlen bleiben deutlich irisch',
      ratingsHeading:'Walker führt eine rotierte Elf zum achten Sieg',
      standingsLabel:'ABSCHLUSSTABELLE · GRUPPE C',
      standingsHeading:'Acht Spiele, acht Siege, neun Punkte Vorsprung.',
      historyHeading:'Die perfekte WM-Qualifikation ist abgeschlossen.'
    },
    note:'Irland gewinnt das letzte Qualifikationsspiel auf Zypern trotz leichter Rotation mit 3:2 und beendet Gruppe C mit der maximalen Ausbeute von 24 Punkten.'
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_IRELAND_MATCHES,match);

  Object.assign(window.FM_IRELAND,{
    title:'Irland 2041',
    season:2041,
    updated:'18.11.2041',
    competition:'FIFA-WM-Qualifikation Europa',
    group:'Gruppe C',
    position:'1. Platz',
    lastMatch:match,
    latestMatch:{date:'2041-11-18',opponent:'Zypern',venue:'Auswärts · GSP-Stadion',result:'3:2',competition:'FIFA-WM-Qualifikation Europa'},
    nextMatch:null,
    upcomingMatches:[],
    groupStatus:'WM-Qualifikation · Gruppe C · Gruppensieger · 8 Spiele · 24 Punkte · 33:7 Tore',
    qualification:{
      stage:'WM 2042',
      label:'FIFA-WM-Qualifikation Europa',
      status:'Qualifiziert',
      detail:'Irland beendet Gruppe C mit acht Siegen aus acht Spielen, 24 Punkten und 33:7 Toren. Platz eins war bereits vor dem letzten Spiel sicher.'
    },
    groupTable:standings,
    latestHeadline:'Perfekte Qualifikation: Irland gewinnt auf Zypern 3:2 und beendet Gruppe C mit acht Siegen aus acht Spielen.'
  });

  [
    {id:'2041-11-18-billy-walker-cyprus',date:'2041-11-18',player:'Billy Walker',type:'nationalteam',title:'Tor beim Quali-Finale',detail:'Trifft beim 3:2 auf Zypern in der 16. Minute zum 1:0 und wird mit Note 7,8 bester irischer Spieler.'},
    {id:'2041-11-18-ben-barry-cyprus',date:'2041-11-18',player:'Ben Barry',type:'nationalteam',title:'Tor und vergebener Elfmeter',detail:'Erzielt in der 29. Minute das 2:0, vergibt in der 56. Minute aber einen Elfmeter.'},
    {id:'2041-11-18-jim-oneill-cyprus',date:'2041-11-18',player:"Jim O'Neill",type:'nationalteam',title:'Joker trifft zum 3:1',detail:'Kommt in der 53. Minute ins Spiel und erzielt in der 75. Minute den späteren Siegtreffer.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-11-18-irland-zypern-wm-quali-finale',
    type:'Spielbericht',
    date:'2041-11-18',
    competition:'FIFA-WM-Qualifikation Europa',
    headline:'Acht aus acht: Irland macht die perfekte Qualifikation komplett',
    subheadline:'Etwas Rotation, fünf Wechsel nach 53 Minuten und trotzdem der nächste Sieg. Irland gewinnt auf Zypern 3:2 und beendet Gruppe C mit 24 Punkten.',
    label:'WM-QUALIFIKATION · GRUPPE C · ZYPERN 2:3 IRLAND',
    heroStat:{label:'Qualifikation beendet',value:'8 Spiele · 8 Siege',note:'24 Punkte · 33:7 Tore · Gruppensieger'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Das WM-Ticket war längst gebucht, also durfte die letzte Qualifikationsnacht ein wenig Luft bekommen. Flannigan rotiert leicht und wechselt nach 53 Minuten gleich fünfmal. Trotzdem bleibt Irland offensiv klar überlegen und nimmt auch aus Nikosia drei Punkte mit.',
    sections:[
      {title:'Walker und Barry schaffen früh Abstand',text:'Billy Walker trifft in der 16. Minute, Ben Barry erhöht in der 29. Minute. Mit 2:0 geht Irland in die Pause und scheint das letzte Gruppenspiel früh unter Kontrolle zu haben.'},
      {title:'Fünf Wechsel, dann wird es kurz wild',text:'Nach der Pause verkürzt Michalis Charalabous in der 49. Minute. Vier Minuten später verteilt Flannigan mit fünf Wechseln die Belastung neu. Ben Barry hat in der 56. Minute vom Punkt die Chance auf das 3:1, scheitert aber.'},
      {title:'O’Neill liefert als Joker',text:'Jim O’Neill kommt in der 53. Minute und trifft in der 75. Minute zum 3:1. Charalabous antwortet nur zwei Minuten später mit seinem zweiten Tor, doch Irland bringt das 3:2 über die Linie.'},
      {title:'Das Chancenbild ist deutlicher als das Ergebnis',text:'Irland führt die Schussstatistik 16:4 und die Schüsse aufs Tor 12:4. Dazu kommen 3,10 xG, vier Großchancen, zwölf Ecken und 60 Prozent Ballbesitz. Zypern ist effizient, aber nicht spielbestimmend.'},
      {title:'Rotation ohne Schönheitsverlust',text:'Mit bereits gesichertem Gruppensieg geht es vor allem um Belastungssteuerung. Dass Irland trotz der Wechsel und einer unruhigen zweiten Halbzeit gewinnt, passt zur gesamten Qualifikation: selbst an weniger glatten Abenden bleibt genug Qualität für drei Punkte.'},
      {title:'Eine makellose Gruppe C',text:'Irland beendet die Qualifikation mit acht Siegen aus acht Spielen, 24 Punkten und 33:7 Toren. Tschechien folgt mit 15 Punkten, Kroatien mit 13. Der Vorsprung des Gruppensiegers beträgt neun Punkte.'}
    ],
    strengths:['8 Siege aus 8 Spielen','12 Schüsse aufs Tor','3,10 xG','60 % Ballbesitz','Joker O’Neill trifft','Gruppensieg mit neun Punkten Vorsprung'],
    vulnerabilities:['Zwei Gegentore bei nur vier gegnerischen Schüssen aufs Tor','Vergebener Elfmeter von Ben Barry','Kontrollverlust nach der großen Wechselwelle','Drei Gelbe Karten'],
    verdictHeading:'Die Qualifikation endet nicht spektakulär, sondern aussagekräftig',
    verdict:'Das 3:2 ist kein weiteres Schützenfest wie das 9:0 gegen Aserbaidschan. Gerade deshalb ist es ein passender Schlusspunkt. Irland kann rotieren, fünfmal früh wechseln, einen Elfmeter liegen lassen und trotzdem gewinnen. Acht Spiele später steht eine perfekte Bilanz. Ab jetzt zählt nicht mehr die Qualifikation, sondern wie viel von dieser Stabilität sich zur WM 2042 transportieren lässt.',
    sources:['FM-Spielübersicht Zypern – Irland · 18.11.2041','FM-Irland-Spielerstatistiken · 18.11.2041','FM-WM-Qualifikation Gruppe C · Abschlusstabelle']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-11-18-ireland-perfect-qualification',
    date:'2041-11-18',
    season:2041,
    category:'Nationalteam',
    accent:'green',
    featured:true,
    eyebrow:'WM-QUALIFIKATION · GRUPPE C',
    title:'Acht aus acht: Irland beendet die Qualifikation perfekt',
    summary:'Mit etwas Rotation gewinnt Irland auf Zypern 3:2. Walker, Barry und Joker O’Neill treffen. Gruppe C endet mit 24 Punkten und 33:7 Toren.',
    href:'presse.html?id=2041-11-18-irland-zypern-wm-quali-finale',
    entities:['ireland','cyprus','billy-walker','ben-barry','jim-oneill','world-cup-qualification','season-2041']
  });
})();