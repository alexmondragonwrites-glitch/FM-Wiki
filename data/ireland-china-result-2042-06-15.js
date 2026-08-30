(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-15';
  const matchId='2042-06-15-china-ireland-world-cup';
  const reportId='2042-06-15-china-irland-0-4-wm-auftakt';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const match={
    id:matchId,date,season:2042,competition:'FIFA World Cup 2042 · Gruppe K',stage:'Gruppenphase · 1. Spieltag',
    home:'China',away:'Irland',homeScore:0,awayScore:4,score:'0:4',halfTime:'0:1',
    venue:'Willie Miller Park',location:'Aberdeen, Schottland',attendance:40800,referee:'Octavio Duffaut',
    context:'Irlands erstes Spiel der FIFA World Cup 2042. Brasilien und Südafrika hatten sich zuvor in Gruppe K 3:3 getrennt; ein Sieg brachte Irland damit sofort allein an die Tabellenspitze.',
    events:[
      {minute:7,team:'China',type:'yellow',player:'Luo Xiao',text:'Gelbe Karte'},
      {minute:8,team:'Irland',type:'goal',player:'Callum Brennan',text:'0:1 · Flachschuss aus rund 19 Metern'},
      {minute:22,team:'Irland',type:'yellow',player:"Jim O'Neill",text:'Gelbe Karte'},
      {minute:49,team:'China',type:'yellow',player:'Jin Bin',text:'Gelbe Karte'},
      {minute:57,team:'Irland',type:'goal',player:'Ben Barry',text:'0:2 · kraftvoller Abschluss'},
      {minute:64,team:'Irland',type:'goal',player:'Ben Barry',text:'0:3 · Volley aus kurzer Distanz'},
      {minute:65,team:'China',type:'yellow',player:'Haiqing Yu',text:'Gelbe Karte'},
      {minute:68,team:'Irland',type:'goal',player:'Callum Duggan',text:'0:4 · Volley aus kurzer Distanz'}
    ],
    scorers:[
      {team:'Irland',player:'Callum Brennan',minutes:[8],goals:1},
      {team:'Irland',player:'Ben Barry',minutes:[57,64],goals:2},
      {team:'Irland',player:'Callum Duggan',minutes:[68],goals:1}
    ],
    stats:{
      shots:[4,25],shotsOnTarget:[1,15],xg:[0.35,3.36],shotsOffTarget:[2,5],bigChances:[0,3],possession:[55,45],
      corners:[1,13],fouls:[14,15],yellowCards:[3,1],redCards:[0,0],completedPasses:['483/539','401/454'],
      passCompletion:[90,88],headersWon:[35,55],averageRating:[6.39,7.35],intensiveSprints:[128,150]
    },
    ratings:{
      'Evan Reilly':7.4,'Callum Brennan':8.0,'Darcy Andrews':7.9,'Callum Duggan':7.8,'Kevin Kelly':6.6,
      "Jim O'Neill":7.1,'Justin Ramsey':6.6,"Cormac O'Kane":6.7,'Giacomo Papini':7.7,'Brendan McHugh':8.0,
      "Harry O'Leary":6.9,'Billy Walker':6.8,'Ben Barry':8.3,'Simon Neville':7.1,'Colum Winnall':7.0,'Callum Lawless':6.9
    },
    playerOfMatch:{player:'Ben Barry',team:'Irland',rating:8.3,goals:2,note:'Entscheidet die Partie nach der Pause mit einem Doppelschlag in Minute 57 und 64.'},
    irelandStandouts:[
      {player:'Ben Barry',rating:8.3,goals:2,note:'Zwei Tore binnen sieben Minuten machen aus dem knappen 1:0 einen komfortablen WM-Auftakt.'},
      {player:'Callum Brennan',rating:8.0,goals:1,note:'Öffnet das Spiel bereits in Minute 8 und gibt Irland früh Kontrolle.'},
      {player:'Brendan McHugh',rating:8.0,note:'Sehr präsenter Auftritt im offensiven Verbund.'},
      {player:'Darcy Andrews',rating:7.9,note:'Starker Auftritt auf der rechten Seite.'},
      {player:'Callum Duggan',rating:7.8,goals:1,note:'Setzt in Minute 68 den Schlusspunkt.'}
    ],
    milestones:[
      'Darcy Andrews absolviert sein 75. Länderspiel für Irland.',
      'Billy Walker absolviert sein 25. Länderspiel für Irland.',
      'Luo Mingyu absolviert sein 50. Länderspiel für China.',
      'Irland übernimmt nach dem ersten eigenen Gruppenspiel mit drei Punkten und 4:0 Toren Platz eins in Gruppe K.'
    ],
    analysis:{
      start:'Callum Brennan nimmt dem Favoriten früh jede Nervosität und trifft in Minute 8 zum 1:0. China darf bis zur Pause viel Ballbesitz haben, erzeugt daraus aber kaum Gefahr.',
      secondHalf:'Nach der Pause kippt die Partie endgültig. Ben Barry trifft in Minute 57 und 64, Callum Duggan legt in Minute 68 nach. Drei Tore in elf Minuten machen aus einem kontrollierten Auftakt einen klaren Sieg.',
      efficiency:'Irland hat nur 45 Prozent Ballbesitz, produziert aber 25 Abschlüsse, 15 Schüsse aufs Tor und 3,36 xG. China kommt trotz 55 Prozent Ballbesitz nur auf vier Abschlüsse, einen aufs Tor und 0,35 xG.',
      setPiecesAndPressure:'13:1 Ecken und 150:128 intensive Sprints zeigen, wie stark Irland China in den gefährlichen Zonen einschnürt, obwohl der Gegner im reinen Ballbesitz leicht vorne liegt.',
      groupImpact:'Weil Brasilien und Südafrika zuvor 3:3 gespielt haben, steht Irland nach einem Spiel allein bei drei Punkten. Das nächste Gruppenspiel gegen Südafrika folgt am 19.06.2042.'
    },
    sources:['FM-Spielübersicht China – Irland · 15.06.2042','Irland-Spielerstatistiken · China 0:4 Irland','SPORTbible-Spielbericht · Gruppe K · China 0:4 Irland']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_IRELAND_MATCHES,match);

  const june15Results=[
    {group:'J',home:'Ukraine',away:'Deutschland',score:'3:4',homeScore:3,awayScore:4},
    {group:'J',home:'Kolumbien',away:'Ghana',score:'5:0',homeScore:5,awayScore:0},
    {group:'K',home:'Südafrika',away:'Brasilien',score:'3:3',homeScore:3,awayScore:3},
    {group:'K',home:'China',away:'Irland',score:'0:4',homeScore:0,awayScore:4,scorers:match.scorers}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=june15Results;
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    J:[
      {team:'Kolumbien',played:1,win:1,draw:0,loss:0,gf:5,ga:0,gd:5,points:3},
      {team:'Deutschland',played:1,win:1,draw:0,loss:0,gf:4,ga:3,gd:1,points:3},
      {team:'Ukraine',played:1,win:0,draw:0,loss:1,gf:3,ga:4,gd:-1,points:0},
      {team:'Ghana',played:1,win:0,draw:0,loss:1,gf:0,ga:5,gd:-5,points:0}
    ],
    K:[
      {team:'Irland',played:1,win:1,draw:0,loss:0,gf:4,ga:0,gd:4,points:3},
      {team:'Brasilien',played:1,win:0,draw:1,loss:0,gf:3,ga:3,gd:0,points:1},
      {team:'Südafrika',played:1,win:0,draw:1,loss:0,gf:3,ga:3,gd:0,points:1},
      {team:'China',played:1,win:0,draw:0,loss:1,gf:0,ga:4,gd:-4,points:0}
    ]
  });
  wc.june15Summary={
    date,
    matchesThroughIreland:4,
    goals:22,
    results:june15Results,
    headline:'Irland übernimmt Gruppe K mit einem 4:0 gegen China; Kolumbien setzt beim 5:0 gegen Ghana das größte Ausrufezeichen des bisherigen Tages.',
    note:'Erfasst sind die bis zum Ende von China – Irland ausgetragenen Partien am 15.06.2042.'
  };

  Object.assign(window.FM_IRELAND,{
    updated:'15.06.2042',competition:'FIFA World Cup 2042',
    lastMatch:match,
    latestMatch:{date,opponent:'China',venue:'Willie Miller Park · Aberdeen',result:'4:0',competition:'FIFA World Cup 2042 · Gruppe K'},
    latestHeadline:'WM-Auftakt nach Maß: Irland schlägt China 4:0 und übernimmt sofort die Tabellenführung in Gruppe K.',
    worldCup2042:Object.assign({},window.FM_IRELAND.worldCup2042||{}, {
      status:'Nach dem 1. Gruppenspiel · Platz 1',group:'K',teams:['Brasilien','China','Irland','Südafrika'],
      record:{played:1,win:1,draw:0,loss:0,gf:4,ga:0,gd:4,points:3},
      latestMatch:{date:'2042-06-15',opponent:'China',result:'4:0'},
      nextMatch:{date:'2042-06-19',opponent:'Südafrika',venue:'Neutraler WM-Spielort',competition:'FIFA World Cup 2042 · Gruppe K'},
      groupSituation:'Irland 3 Punkte; Brasilien und Südafrika je 1 Punkt; China 0 Punkte.'
    }),
    nextFocus:{competition:'FIFA World Cup 2042',stage:'Gruppenphase · Gruppe K',opponent:'Südafrika',date:'19.06.2042'},
  });

  [
    {id:'2042-06-15-ben-barry-world-cup-brace-china',date,player:'Ben Barry',type:'nationalteam',title:'Barry trifft doppelt beim WM-Auftakt',detail:'Erzielt beim 4:0 gegen China die Treffer zum 2:0 und 3:0 in Minute 57 und 64 und erhält die Note 8,3.'},
    {id:'2042-06-15-callum-brennan-world-cup-goal-china',date,player:'Callum Brennan',type:'nationalteam',title:'Brennan eröffnet Irlands WM',detail:'Trifft bereits in Minute 8 zum 1:0 gegen China und erhält die Note 8,0.'},
    {id:'2042-06-15-callum-duggan-world-cup-goal-china',date,player:'Callum Duggan',type:'nationalteam',title:'Duggan setzt den Schlusspunkt',detail:'Erzielt in Minute 68 das 4:0 gegen China und erhält die Note 7,8.'},
    {id:'2042-06-15-darcy-andrews-75-caps',date,player:'Darcy Andrews',type:'milestone',title:'Andrews erreicht 75 Länderspiele',detail:'Bestreitet beim 4:0 gegen China sein 75. Länderspiel für Irland und erhält die Note 7,9.'},
    {id:'2042-06-15-billy-walker-25-caps',date,player:'Billy Walker',type:'milestone',title:'Walker erreicht 25 Länderspiele',detail:'Bestreitet beim WM-Auftakt gegen China sein 25. Länderspiel für Irland.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht / WM-Roundup',date,competition:'FIFA World Cup 2042',fixtureDate:'Sonntag, 15.06.2042 · Gruppe K',
    home:'China',away:'Irland',score:'0:4',location:'Willie Miller Park · Aberdeen · 40.800 Zuschauer',
    headline:'Barry-Doppelpack nach der Pause: Irland eröffnet die WM mit einem 4:0',
    subheadline:'Brennan trifft früh, Barry zweimal binnen sieben Minuten und Duggan setzt den Schlusspunkt. Nach Brasiliens 3:3 gegen Südafrika übernimmt Irland sofort Platz eins in Gruppe K.',
    label:'FIFA WORLD CUP 2042 · CHINA 0:4 IRLAND',
    heroStat:{label:'WM-AUFTAKT',value:'0:4',note:'25:4 Schüsse · 15:1 aufs Tor · 3,36:0,35 xG'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM / WM'},
    intro:'Die Einladung aus dem frühen Gruppenspiel nimmt Irland ohne Zögern an. Brasilien und Südafrika hatten sich 3:3 getrennt, vier Stunden später steht Ryan Flannigans Mannschaft allein an der Spitze der Gruppe K. Das 4:0 gegen China ist dabei nicht bloß deutlich, sondern über weite Strecken kontrolliert und nach der Pause gnadenlos.',
    sections:[
      {title:'Brennan beruhigt den Auftakt nach acht Minuten',text:'China sieht früh Gelb, Irland antwortet noch früher mit Fußball: Callum Brennan trifft in Minute 8 mit einem Flachschuss aus rund 19 Metern zum 1:0. Bis zur Pause bleibt es dabei. China hat zwar etwas mehr Ballbesitz, aber praktisch keine Durchschlagskraft.'},
      {title:'Barry macht aus Kontrolle eine klare Sache',text:'Nach der Pause kommt die irische Welle. Ben Barry erhöht in Minute 57 auf 2:0 und trifft sieben Minuten später erneut, diesmal per Volley aus kurzer Distanz. Mit 18 Jahren übernimmt er damit ausgerechnet beim WM-Debütspiel Irlands die Hauptrolle und erhält mit 8,3 die beste irische Note.'},
      {title:'Duggan beendet elf wilde Minuten',text:'Callum Duggan trifft in Minute 68 zum 4:0. Zwischen Barrys erstem Treffer und Duggans Tor liegen nur elf Minuten. Aus einem Spiel, das China zur Pause noch offen halten konnte, wird in kurzer Zeit eine klare Niederlage.'},
      {title:'Wenig Ball, sehr viel Gefahr',text:'Der bemerkenswerteste statistische Kontrast liegt im Ballbesitz: China hat 55 Prozent, Irland nur 45. Trotzdem lauten die entscheidenden Zahlen 25:4 Schüsse, 15:1 aufs Tor und 3,36:0,35 xG für Irland. 13:1 Ecken unterstreichen, wo das Spiel tatsächlich stattfindet.'},
      {title:'Die Harps-Achse trägt auch im Nationaltrikot',text:'Ben Barry erzielt zwei Tore und kommt auf 8,3, Callum Brennan trifft und erhält 8,0. Giacomo Papini kommt auf 7,7, während mehrere weitere Finn-Harps-Spieler die irische Struktur prägen. Die Vereinschemie aus Donegal ist im Nationalteam deutlich sichtbar.'},
      {title:'Gruppe K gehört nach Spiel eins Irland',text:'Brasilien und Südafrika hatten zuvor 3:3 gespielt. Dadurch steht Irland nach dem 4:0 allein bei drei Punkten, Brasilien und Südafrika folgen mit je einem Punkt, China bleibt bei null. Das nächste Spiel gegen Südafrika am 19. Juni kann bereits ein großer Schritt Richtung K.-o.-Phase werden.'},
      {title:'Der restliche 15. Juni',text:'Deutschland gewinnt in Gruppe J ein wildes 4:3 gegen die Ukraine, Kolumbien zerlegt Ghana mit 5:0 und übernimmt aufgrund der Tordifferenz die Spitze der Gruppe. In Gruppe K trennen sich Südafrika und Brasilien 3:3, bevor Irland den Spieltag mit dem 4:0 gegen China aus seiner Sicht vergoldet.'}
    ],
    fanReactions:{simulated:true,label:'Simulierte Save-Welt-Fanreaktionen',quotes:[
      '„45 Prozent Ballbesitz und trotzdem 25 Abschlüsse. Das ist kein Verwalten, das ist Gegenpressing mit Zähnen.“',
      '„Barry ist 18 und spielt eine WM, als wäre das sein normaler Samstag in Donegal.“',
      '„Brasilien lässt Punkte liegen und wir antworten mit 4:0. Genau so nimmt man eine offene Tür an.“'
    ]},
    verdictHeading:'Ein Auftakt, der mehr sagt als nur vier Tore',
    verdict:'Irland erledigt die Pflicht nicht nur, sondern schafft sofort eine günstige Gruppenlage. Der frühe Treffer verhindert Nervosität, die zweite Halbzeit zeigt Tiefe und Effizienz. Vor allem Barrys Doppelpack ist ein weiteres Signal, dass der 18-Jährige längst nicht mehr nur Zukunft ist.',
    dayResults:june15Results,
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-15-china-ireland-0-4',date,season:2042,category:'World Cup',accent:'green',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · GRUPPE K',
    title:'Irland übernimmt Gruppe K: Barry trifft doppelt beim 4:0 gegen China',
    summary:'Brennan eröffnet früh, Barry trifft in Minute 57 und 64, Duggan legt zum 4:0 nach. Nach Brasiliens 3:3 gegen Südafrika steht Irland sofort allein an der Gruppenspitze.',
    href:`presse.html?id=${reportId}`,
    entities:['ireland','china','world-cup-2042','ben-barry','callum-brennan','callum-duggan','brazil','south-africa']
  });
})();