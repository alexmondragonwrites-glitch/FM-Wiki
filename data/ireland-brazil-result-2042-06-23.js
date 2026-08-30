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

  const date='2042-06-23';
  const matchId='2042-06-23-brazil-ireland-world-cup';
  const reportId='2042-06-23-brasilien-irland-2-2-gruppensieg';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const match={
    id:matchId,date,season:2042,competition:'FIFA World Cup 2042 · Gruppe K',stage:'Gruppenphase · 3. Spieltag',
    home:'Brasilien',away:'Irland',homeScore:2,awayScore:2,score:'2:2',halfTime:'0:1',
    venue:'Stadion an der Anfield Road',location:'Liverpool, England',attendance:61276,referee:'Abel Kidane',weather:'19°C',
    context:'Irland geht zweimal gegen Brasilien in Führung, wird zweimal eingeholt und verteidigt das 2:2 in der Schlussphase mit einem gehaltenen Elfmeter von Evan Reilly. Mit sieben Punkten und 7:2 Toren gewinnt Irland ungeschlagen Gruppe K.',
    events:[
      {minute:40,team:'Irland',type:'goal',player:"Harry O'Leary",text:'0:1 · Kopfball aus kurzer Distanz'},
      {minute:51,team:'Brasilien',type:'goal',player:'Flavio Henrique',text:'1:1'},
      {minute:58,team:'Irland',type:'goal',player:"Cormac O'Kane",text:'1:2 · harter Abschluss'},
      {minute:70,team:'Brasilien',type:'goal',player:'Heriberto',text:'2:2 · Flachschuss'},
      {minute:72,team:'Brasilien',type:'penalty_missed',player:'Mário Lúcio',text:'Elfmeter vergeben; Evan Reilly hält'}
    ],
    scorers:[
      {team:'Brasilien',player:'Flavio Henrique',minutes:[51],goals:1},
      {team:'Brasilien',player:'Heriberto',minutes:[70],goals:1},
      {team:'Irland',player:"Harry O'Leary",minutes:[40],goals:1},
      {team:'Irland',player:"Cormac O'Kane",minutes:[58],goals:1}
    ],
    stats:{
      shots:[13,8],shotsOnTarget:[5,4],xg:[1.71,1.39],shotsOffTarget:[6,2],bigChances:[1,2],possession:[49,51],
      corners:[7,6],fouls:[2,10],yellowCards:[0,0],redCards:[0,0],completedPasses:['472/520','496/567'],
      passCompletion:[91,87],duelsWon:['20/30','26/29'],duelWinPct:[67,90],headersWon:['26/44','17/43'],headerWinPct:[59,40],
      averageRating:[6.89,6.81],intensiveSprints:[110,106]
    },
    ratings:{
      'Evan Reilly':7.2,'Simon Neville':6.2,'Mareks Istrankins':6.9,'Callum Duggan':6.8,'Colum Winnall':6.8,
      "Jim O'Neill":6.7,'Justin Ramsey':7.4,'Robert Boylan':6.9,'Giacomo Papini':6.0,'Brendan McHugh':6.6,
      "Harry O'Leary":7.3,'Billy Walker':6.7,'Ben Barry':7.1,"Cormac O'Kane":7.1,'Callum Lawless':6.7,'Shane Fox':6.7
    },
    irelandStandouts:[
      {player:'Justin Ramsey',rating:7.4,assists:1,note:'Stärkste irische Feldspieler-Note; liefert eine Vorlage und hilft beim Ballbesitzspiel.'},
      {player:"Harry O'Leary",rating:7.3,goals:1,note:'Bringt Irland in der 40. Minute gegen Brasilien in Führung.'},
      {player:'Evan Reilly',rating:7.2,penaltySaved:true,note:'Hält in Minute 72 den Elfmeter von Mário Lúcio und sichert damit den Punkt.'},
      {player:"Cormac O'Kane",rating:7.1,goals:1,note:'Stellt in der 58. Minute auf 2:1.'}
    ],
    analysis:{
      statement:'Irland nimmt Brasilien nicht nur einen Punkt ab, sondern führt gegen den Turnierfavoriten zweimal. Das 2:2 ist damit mehr als ein Verwaltungsremis.',
      control:'Trotz des Qualitätsunterschieds hält Irland 51 Prozent Ballbesitz und kommt auf 87 Prozent Passquote. Brasilien hat mehr Abschlüsse, aber Irland die höhere Zahl an Großchancen (2:1).',
      reillyMoment:'Beim Stand von 2:2 bekommt Brasilien in Minute 72 einen Elfmeter. Evan Reilly hält gegen Mário Lúcio und verhindert die erste irische Niederlage dieser WM.',
      groupImpact:'Irland beendet Gruppe K mit sieben Punkten und 7:2 Toren auf Platz eins. Brasilien wird mit fünf Punkten Zweiter, Südafrika mit vier Punkten Dritter.',
      nextStep:'In der 2. Runde wartet Italien. Damit trifft Irland auf den Dritten der Gruppe G, der vier Punkte und 8:4 Tore gesammelt hat.'
    },
    sources:['FM-Spielübersicht Brasilien – Irland · 23.06.2042','Irland-Spielerstatistiken · Brasilien 2:2 Irland','SPORTbible-Spielbericht · Gruppe K · Brasilien 2:2 Irland']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_IRELAND_MATCHES,match);

  const june23Results=[
    {group:'J',home:'Deutschland',away:'Ghana',score:'1:0',homeScore:1,awayScore:0,scorers:[{team:'Deutschland',player:'S. Halleux',minutes:[1],goals:1}]},
    {group:'J',home:'Ukraine',away:'Kolumbien',score:'4:1',homeScore:4,awayScore:1,scorers:[
      {team:'Ukraine',player:'V. Omelchenko',minutes:[33],goals:1},
      {team:'Ukraine',player:'T. Yefremov',minutes:[51,64],goals:2},
      {team:'Ukraine',player:'P. Oliynyk',minutes:['90+6'],goals:1},
      {team:'Kolumbien',player:'H. Morán',minutes:[65],goals:1}
    ]},
    {group:'K',home:'Brasilien',away:'Irland',score:'2:2',homeScore:2,awayScore:2,scorers:match.scorers,events:[{minute:72,team:'Brasilien',type:'penalty_missed',player:'Mário Lúcio'}]},
    {group:'K',home:'Südafrika',away:'China',score:'3:1',homeScore:3,awayScore:1,scorers:[
      {team:'Südafrika',player:'K. Dube',minutes:[48,73],goals:2,note:'beide per Elfmeter'},
      {team:'Südafrika',player:'G. Hlatshwayo',minutes:[68],goals:1},
      {team:'China',player:'Y. Zhao',minutes:[83],goals:1}
    ],events:[{minute:24,team:'China',type:'red',player:'Y. Zheng',text:'Rote Karte'}]},
    {group:'L',home:'Barbados',away:'Spanien',score:'0:4',homeScore:0,awayScore:4,scorers:[
      {team:'Spanien',player:'H. Fornés',minutes:[39],goals:1},
      {team:'Spanien',player:'José Luis',minutes:[60,66,72],goals:3}
    ]},
    {group:'L',home:'Japan',away:'DR Kongo',score:'1:2',homeScore:1,awayScore:2,scorers:[
      {team:'Japan',player:'T. Kobayashi',minutes:[20],goals:1},
      {team:'DR Kongo',player:'E. Mwamba',minutes:[33],goals:1},
      {team:'DR Kongo',player:'C. Kalala',minutes:['90+2'],goals:1}
    ]}
  ];

  wc.status='Gruppenphase abgeschlossen · K.-o.-Phase';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=june23Results;
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    J:[
      {team:'Deutschland',played:3,win:3,draw:0,loss:0,gf:6,ga:3,gd:3,points:9},
      {team:'Ukraine',played:3,win:2,draw:0,loss:1,gf:12,ga:6,gd:6,points:6},
      {team:'Kolumbien',played:3,win:1,draw:0,loss:2,gf:6,ga:5,gd:1,points:3},
      {team:'Ghana',played:3,win:0,draw:0,loss:3,gf:1,ga:11,gd:-10,points:0}
    ],
    K:[
      {team:'Irland',played:3,win:2,draw:1,loss:0,gf:7,ga:2,gd:5,points:7},
      {team:'Brasilien',played:3,win:1,draw:2,loss:0,gf:9,ga:6,gd:3,points:5},
      {team:'Südafrika',played:3,win:1,draw:1,loss:1,gf:6,ga:5,gd:1,points:4},
      {team:'China',played:3,win:0,draw:0,loss:3,gf:2,ga:11,gd:-9,points:0}
    ],
    L:[
      {team:'Spanien',played:3,win:3,draw:0,loss:0,gf:10,ga:0,gd:10,points:9},
      {team:'DR Kongo',played:3,win:2,draw:0,loss:1,gf:4,ga:6,gd:-2,points:6},
      {team:'Japan',played:3,win:1,draw:0,loss:2,gf:3,ga:4,gd:-1,points:3},
      {team:'Barbados',played:3,win:0,draw:0,loss:3,gf:1,ga:8,gd:-7,points:0}
    ]
  });

  wc.june23Summary={
    date,matches:6,results:june23Results,
    headline:'Irland hält Brasilien 2:2, gewinnt Gruppe K und zieht ungeschlagen in die K.-o.-Phase ein. Deutschland und Spanien beenden ihre Gruppen mit neun Punkten.',
    groupWinners:['Deutschland','Irland','Spanien'],
    directTopTwo:{J:['Deutschland','Ukraine'],K:['Irland','Brasilien'],L:['Spanien','DR Kongo']},
    thirdPlaced:['Kolumbien','Südafrika','Japan']
  };

  wc.knockoutPairings=wc.knockoutPairings||[];
  const italyPairing={id:'2042-world-cup-round2-ireland-italy',stage:'2. Runde',home:'Irland',away:'Italien',status:'angesetzt',date:'noch nicht im aktuellen Material eingeblendet',note:'Irland kommt als Sieger der Gruppe K; Italien als Dritter der Gruppe G mit vier Punkten und 8:4 Toren.'};
  const pairingIndex=wc.knockoutPairings.findIndex(item=>item&&item.id===italyPairing.id);
  if(pairingIndex>=0)wc.knockoutPairings[pairingIndex]=italyPairing;else wc.knockoutPairings.push(italyPairing);
  wc.irelandKnockout={stage:'2. Runde',opponent:'Italien',status:'angesetzt',story:'Irland trifft nach dem Gruppensieg auf Italien. Mit Daniele Di Maio und Romano Maisto stehen dabei Finn-Harps-Teamkollegen auf der anderen Seite.'};

  Object.assign(window.FM_IRELAND,{
    updated:'23.06.2042',competition:'FIFA World Cup 2042',
    lastMatch:match,
    latestMatch:{date,opponent:'Brasilien',venue:'Stadion an der Anfield Road · Liverpool',result:'2:2',competition:'FIFA World Cup 2042 · Gruppe K'},
    latestHeadline:'Zweimal geführt, Elfmeter gehalten, Gruppe gewonnen: Irland trotzt Brasilien ein 2:2 ab.',
    worldCup2042:Object.assign({},window.FM_IRELAND.worldCup2042||{}, {
      status:'Gruppensieger · 2. Runde erreicht',group:'K',teams:['Brasilien','China','Irland','Südafrika'],
      record:{played:3,win:2,draw:1,loss:0,gf:7,ga:2,gd:5,points:7},
      latestMatch:{date:'2042-06-23',opponent:'Brasilien',result:'2:2'},
      finalGroupPosition:1,
      groupSituation:'Irland gewinnt Gruppe K ungeschlagen mit sieben Punkten vor Brasilien (5), Südafrika (4) und China (0).',
      knockout:{stage:'2. Runde',opponent:'Italien',date:'noch nicht im aktuellen Material eingeblendet'}
    }),
    nextFocus:{competition:'FIFA World Cup 2042',stage:'2. Runde · K.-o.-Phase',opponent:'Italien',date:'noch nicht im aktuellen Material eingeblendet'}
  });

  [
    {id:'2042-06-23-evan-reilly-penalty-save-brazil',date,player:'Evan Reilly',type:'nationalteam',title:'Reilly hält Irland gegen Brasilien im Spiel',detail:'Pariert in Minute 72 beim Stand von 2:2 den Elfmeter von Mário Lúcio. Irland bleibt ungeschlagen und gewinnt Gruppe K.'},
    {id:'2042-06-23-harry-oleary-goal-brazil',date,player:"Harry O'Leary",type:'nationalteam',title:"O'Leary trifft gegen Brasilien",detail:'Kopfballtor in Minute 40 zur 1:0-Führung, Note 7,3.'},
    {id:'2042-06-23-cormac-okane-goal-brazil',date,player:"Cormac O'Kane",type:'nationalteam',title:"O'Kane bringt Irland ein zweites Mal in Führung",detail:'Trifft in Minute 58 zum 2:1 gegen Brasilien, Note 7,1.'},
    {id:'2042-06-23-justin-ramsey-assist-brazil',date,player:'Justin Ramsey',type:'nationalteam',title:'Ramsey liefert gegen Brasilien',detail:'Eine Vorlage und mit 7,4 die höchste irische Feldspieler-Note beim 2:2.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht / WM-Gruppenabschluss',date,competition:'FIFA World Cup 2042',fixtureDate:'Montag, 23.06.2042 · Gruppe K',
    home:'Brasilien',away:'Irland',score:'2:2',location:'Stadion an der Anfield Road · Liverpool · 61.276 Zuschauer',
    headline:'Was für ein Spiel: Irland hält Brasilien 2:2 und gewinnt Gruppe K',
    subheadline:'O’Leary und O’Kane bringen Irland zweimal in Führung. Brasilien kommt zweimal zurück, doch Evan Reilly hält in Minute 72 einen Elfmeter und konserviert den Gruppensieg.',
    label:'FIFA WORLD CUP 2042 · BRASILIEN 2:2 IRLAND',
    heroStat:{label:'GRUPPE K',value:'IRLAND · 7 PUNKTE · 7:2 TORE',note:'ungeschlagen · Gruppensieger vor Brasilien'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM / WM'},
    intro:'Das war kein bedeutungsloses letztes Gruppenspiel. Irland geht gegen Brasilien zweimal in Führung, muss zweimal den Ausgleich hinnehmen und überlebt schließlich sogar einen Elfmeter. Evan Reilly hält gegen Mário Lúcio, das 2:2 bleibt stehen und Irland gewinnt eine Gruppe mit Brasilien auf Platz zwei.',
    sections:[
      {title:'O’Leary setzt den ersten Stich',text:'Nach 40 Minuten trifft Harry O’Leary per Kopf zur irischen Führung. Irland nimmt das 1:0 mit in die Pause und zwingt Brasilien damit, nach dem Seitenwechsel sofort mehr Risiko zu gehen.'},
      {title:'Brasilien antwortet – O’Kane antwortet zurück',text:'Flavio Henrique gleicht in Minute 51 aus. Nur sieben Minuten später bringt Cormac O’Kane Irland erneut nach vorn. Heriberto stellt in Minute 70 auf 2:2. Das Spiel kippt nun endgültig in einen offenen Schlagabtausch.'},
      {title:'Minute 72: Reillys WM-Moment',text:'Brasilien bekommt beim Stand von 2:2 einen Elfmeter. Mário Lúcio tritt an, Evan Reilly bleibt Sieger. In einem Spiel mit nur einem brasilianischen Großchance ist ausgerechnet diese Szene die größte – und Reilly nimmt sie Brasilien weg.'},
      {title:'Irland hält nicht nur dagegen, Irland spielt mit',text:'Brasilien kommt auf 13:8 Abschlüsse und 1,71:1,39 xG. Irland hält aber 51 Prozent Ballbesitz, spielt 496 erfolgreiche Pässe und gewinnt 90 Prozent der erfassten Zweikämpfe. Die zwei irischen Großchancen übertreffen sogar Brasiliens eine.'},
      {title:'Sieben Punkte, 7:2 Tore, Platz eins',text:'Irland beendet Gruppe K ungeschlagen mit sieben Punkten. Brasilien folgt mit fünf, Südafrika mit vier und China ohne Punkt. Nach dem 4:0 gegen China und dem 1:0 gegen Südafrika ist dieses 2:2 der stärkste Nachweis, dass Irland nicht nur aufgrund des Spielplans Gruppensieger geworden ist.'},
      {title:'Jetzt Italien – und plötzlich spielen Harps gegen Harps',text:'In der 2. Runde wartet Italien, Dritter der Gruppe G mit vier Punkten und 8:4 Toren. Damit bekommt die nächste Partie eine zusätzliche Finn-Harps-Ebene: Daniele Di Maio und Romano Maisto können auf italienischer Seite auf ihre irischen Klubkollegen treffen.'},
      {title:'Der übrige Spieltag',text:'Deutschland schlägt Ghana 1:0 und beendet Gruppe J mit neun Punkten. Die Ukraine schlägt Kolumbien 4:1. Südafrika bezwingt China 3:1. Spanien bleibt mit einem 4:0 gegen Barbados makellos, während DR Kongo Japan durch ein Tor in der 90.+2 Minute 2:1 schlägt.'}
    ],
    verdictHeading:'Das ist bisher Irlands stärkstes WM-Signal',
    verdict:'China war der Pflichtsieg, Südafrika der unangenehme Härtetest. Gegen Brasilien zeigt Irland nun, dass es auch mit einem technisch und finanziell deutlich größeren Kader auf Augenhöhe bestehen kann. Zweimal geführt, einen Elfmeter überlebt, Gruppe gewonnen. Italien bekommt keinen gewöhnlichen Gruppensieger.',
    groupTable:wc.groupTables.K,
    nextRound:{stage:'2. Runde',opponent:'Italien',note:'Italien wurde Dritter der Gruppe G mit vier Punkten und 8:4 Toren.'},
    sources:['FM-Spielübersicht Brasilien – Irland · 23.06.2042','FM-Spielerstatistiken Irland · 23.06.2042','SPORTbible-Spielbericht · Brasilien 2:2 Irland','FM World Cup 2042 Wettbewerbsübersicht · 23.06.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-06-23-ireland-brazil-draw-group-winner',date,type:'world-cup',
    title:'Irland gewinnt Gruppe K nach wildem 2:2 gegen Brasilien',
    text:'O’Leary und O’Kane treffen, Evan Reilly hält einen Elfmeter. Irland beendet die Gruppe mit sieben Punkten auf Platz eins und trifft in der 2. Runde auf Italien.',
    href:'presse.html?id=2042-06-23-brasilien-irland-2-2-gruppensieg'
  });
})();