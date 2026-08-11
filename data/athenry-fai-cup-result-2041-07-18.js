(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-07-18-finn-harps-athenry-fai-cup';
  const reportId='2041-07-18-athenry-fai-cup-spielbericht';

  const match={
    id:fixtureId,date:'2041-07-18',season:2041,competition:'Sports Direct FAI Cup',stage:'1. Runde',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:9},
    away:{id:'athenry',name:'Athenry',short:'ATH',score:0},
    score:'9:0',homeGoals:9,awayGoals:0,halfTime:'4:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12414,awayFans:254,weather:'21 °C',
    opponentStatus:'Amateurmannschaft',
    headline:'Pokalauftakt ohne Zweifel: Finn Harps schlägt Athenry 9:0',
    verdict:'Gegen den Amateurgegner Athenry entsteht von der ersten bis zur letzten Minute ein Klassenunterschied. Finn Harps lässt keinen einzigen gegnerischen Abschluss zu und kommt selbst auf 37 Schüsse, 20 davon aufs Tor, bei 7,23 xG.',
    scorers:[
      {player:'Torric Bruce',goals:1,minutes:[6]},
      {player:'Fionn Gavin',goals:3,minutes:[28,29,30]},
      {player:'Timothy Leroy',goals:1,minutes:[53]},
      {player:'Billy Walker',goals:1,minutes:[54]},
      {player:'Daryl Frame',goals:1,minutes:[63]},
      {player:'Pol Muñoz',goals:1,minutes:[],note:'Erstes Tor für Finn Harps; Minute im sichtbaren Spielbericht nicht ausgewiesen.'},
      {player:'Callum Brennan',goals:1,minutes:[],note:'Minute im sichtbaren Spielbericht nicht ausgewiesen.'}
    ],
    events:[
      {minute:6,type:'goal',team:'Finn Harps',player:'Torric Bruce',text:'1:0'},
      {minute:28,type:'goal',team:'Finn Harps',player:'Fionn Gavin',text:'2:0'},
      {minute:29,type:'goal',team:'Finn Harps',player:'Fionn Gavin',text:'3:0'},
      {minute:30,type:'goal',team:'Finn Harps',player:'Fionn Gavin',text:'4:0'},
      {minute:53,type:'goal',team:'Finn Harps',player:'Timothy Leroy',text:'5:0'},
      {minute:54,type:'goal',team:'Finn Harps',player:'Billy Walker',text:'6:0'},
      {minute:63,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'7:0'}
    ],
    stats:[
      {label:'Schüsse',home:37,away:0,kind:'number'},
      {label:'Schüsse aufs Tor',home:20,away:0,kind:'number'},
      {label:'xG',home:7.23,away:0,kind:'decimal'},
      {label:'Großchancen',home:10,away:0,kind:'number'},
      {label:'Ballbesitz',home:76,away:24,kind:'percent'},
      {label:'Ecken',home:15,away:0,kind:'number'},
      {label:'Fouls',home:9,away:29,kind:'number'},
      {label:'Angekommene Pässe',home:523,away:165,kind:'number',homeDetail:'91 % · 523/574',awayDetail:'69 % · 165/238'},
      {label:'Gelbe Karten',home:0,away:3,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Intensive Sprints',home:81,away:50,kind:'number'}
    ],
    cupRecords:{
      consecutiveWins:46,
      unbeatenRun:46,
      competition:'Sports Direct FAI Cup',
      note:'Der Spielbildschirm meldet mit dem Sieg neue Wettbewerbsrekorde sowohl für 46 Erfolge in Serie als auch für 46 ungeschlagene Spiele in Serie.'
    },
    analysis:{
      summary:'Der Amateurgegner Athenry ist über 90 Minuten vollständig überfordert. Finn Harps kontrolliert Ball, Räume und Abschlüsse so umfassend, dass Athenry keinen einzigen Schuss abgibt.',
      firstHalf:'Fionn Gavin entscheidet die Partie praktisch innerhalb von drei Minuten: Treffer in der 28., 29. und 30. Minute machen aus einem 1:0 ein 4:0 zur Pause.',
      secondHalf:'Nach der Pause bleibt das Tempo hoch. Leroy und Walker treffen innerhalb von zwei Minuten, Frame erhöht auf 7:0; Pol Muñoz und Callum Brennan komplettieren das 9:0.',
      standout:'Billy Walker erhält die perfekte Note 10,0 und liefert neben seinem Treffer drei Vorlagen. Fionn Gavin folgt mit 9,7 nach seinem Dreierpack.',
      context:'Als Erstrundenspiel gegen eine Amateurmannschaft ist das Ergebnis erwartbar. Bemerkenswert ist weniger der Sieg selbst als die totale Kontrolle und der auf 46 Spiele angewachsene FAI-Cup-Rekordlauf.'
    },
    sources:['FM-Spielübersicht Finn Harps – Athenry · 18.07.2041','Finn-Harps-Spielerstatistiken · 18.07.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-18';
    season.latestHeadline='FAI Cup: Finn Harps eröffnet den Wettbewerb mit einem 9:0 gegen Amateurklub Athenry.';
    season.faiCup={...(season.faiCup||{}),status:'2. Runde erreicht',latestResult:'18.07.2041 · Finn Harps 9:0 Athenry',round:'1. Runde',records:{consecutiveWins:46,unbeaten:46}};
    season.changes=season.changes||{notes:[]};
    const note='18.07.2041: 9:0 gegen Amateurklub Athenry in der 1. Runde des FAI Cups. Gavin erzielt einen Dreierpack innerhalb von drei Minuten; Walker erhält die Note 10,0. Finn Harps stellt mit 46 Siegen und 46 ungeschlagenen Spielen in Serie neue FAI-Cup-Rekorde auf.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const playerUpdates=[
    {id:'2041-07-18-fionn-gavin-hattrick',date:'2041-07-18',player:'Fionn Gavin',type:'hat-trick',title:'Drei Tore in drei Minuten',detail:'Trifft beim 9:0 gegen Athenry in der 28., 29. und 30. Minute und beendet das Spiel mit Note 9,7.'},
    {id:'2041-07-18-billy-walker-10',date:'2041-07-18',player:'Billy Walker',type:'standout',title:'Perfekte 10,0 im Pokal',detail:'Ein Tor, drei Vorlagen und die perfekte Note 10,0 beim 9:0 gegen Athenry.'},
    {id:'2041-07-18-pol-munoz-first-goal',date:'2041-07-18',player:'Pol Muñoz',type:'milestone',title:'Erstes Tor für Finn Harps',detail:'Pol Muñoz erzielt beim 9:0 gegen Athenry seinen ersten Treffer für Finn Harps.'},
    {id:'2041-07-18-daryl-frame-goal',date:'2041-07-18',player:'Daryl Frame',type:'goal',title:'Pokal-Tor gegen Athenry',detail:'Trifft in der 63. Minute beim 9:0 in der ersten FAI-Cup-Runde.'}
  ];
  playerUpdates.forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-07-18',competition:'Sports Direct FAI Cup',fixtureDate:'18.07.2041',
    home:'Finn Harps',away:'Athenry',score:'9:0',location:'Donegal Stadium · Stranorlar · 12.414 Zuschauer',
    headline:'37:0 Schüsse: Finn Harps eröffnet den FAI Cup mit einem 9:0',
    subheadline:'Amateurklub Athenry hat im Donegal Stadium keine Chance. Gavin trifft dreimal in drei Minuten, Walker liefert eine perfekte 10,0 und Pol Muñoz erzielt sein erstes Tor für die Harps.',
    label:'SPORTS DIRECT FAI CUP · 1. RUNDE · FINN HARPS 9:0 ATHENRY',
    heroStat:{label:'Schüsse',value:'37:0',note:'20:0 aufs Tor · 7,23:0,00 xG · 76 % Ballbesitz'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Die erste Runde des FAI Cups bringt Finn Harps einen Amateurgegner und ein entsprechend einseitiges Spiel. Athenry kommt über 90 Minuten zu keinem einzigen Abschluss, während die Harps 37-mal schießen und neun Tore erzielen. Der auffälligste Moment gehört Fionn Gavin: Innerhalb von drei Minuten macht er aus dem 1:0 ein 4:0.',
    sections:[
      {title:'Gavin erledigt die erste Hälfte in drei Minuten',text:'Torric Bruce eröffnet in der 6. Minute. Danach trifft Fionn Gavin in der 28., 29. und 30. Minute dreimal hintereinander. Zur Pause steht es 4:0, und der Wettbewerbseinzug ist faktisch entschieden.'},
      {title:'Die zweite Hälfte bleibt kompromisslos',text:'Timothy Leroy trifft in der 53. Minute, Billy Walker eine Minute später und Daryl Frame in der 63. Minute. Pol Muñoz und Callum Brennan komplettieren das 9:0; ihre Tor-Minuten sind im sichtbaren Ergebnisfenster nicht ausgewiesen.'},
      {title:'Walker mit der perfekten Note',text:'Billy Walker liefert ein Tor und drei Vorlagen und erhält die glatte 10,0. Fionn Gavin folgt mit 9,7 nach seinem Dreierpack. Pol Muñoz steuert neben seinem ersten Harps-Tor auch eine Vorlage bei.'},
      {title:'Keine einzige Athenry-Chance',text:'Die Zahlen sind ungewöhnlich selbst für ein Pokalduell gegen einen Amateurverein: 37:0 Schüsse, 20:0 Schüsse aufs Tor, 10:0 Großchancen, 15:0 Ecken und 7,23:0,00 xG.'},
      {title:'46 Spiele Pokal-Dominanz',text:'Der Football-Manager-Spielbildschirm meldet nach dem Sieg zwei neue FAI-Cup-Rekorde: Finn Harps steht bei 46 Siegen in Serie und zugleich bei 46 ungeschlagenen Spielen in Serie im Wettbewerb.'}
    ],
    strengthsTitle:'WAS DIE HARPS AUS DEM PFLICHTSIEG MACHEN',strengthsHeading:'Keine Nachlässigkeit gegen den Amateurgegner',
    strengths:['37:0 Schüsse','20:0 aufs Tor','7,23 xG','10 Großchancen','76 % Ballbesitz','Gavin-Hattrick in drei Minuten','Walker 10,0 · 1 Tor + 3 Vorlagen'],
    vulnerabilitiesTitle:'EINORDNUNG',vulnerabilitiesHeading:'Der Gegner setzt die Messlatte bewusst niedrig',
    vulnerabilities:['Athenry ist eine Amateurmannschaft','Das Ergebnis erlaubt kaum Rückschlüsse auf Spiele gegen Profiklubs','Die letzten zwei Tor-Minuten sind im sichtbaren Ergebnisfenster nicht angegeben'],
    verdictHeading:'Pflichtaufgabe, aber maximal sauber erledigt',
    verdict:'Ein 9:0 gegen einen Amateurklub ist kein internationaler Prüfstein. Trotzdem kann man solche Spiele schlampig angehen. Finn Harps macht das Gegenteil: volle Kontrolle, keine gegnerische Torchance, neun Tore und mehrere starke individuelle Leistungen. Genau so sollte ein haushoher Favorit eine erste Pokalrunde behandeln.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom FAI-Cup-Spiel am 18. Juli 2041.',
    sources:['FM-Spielübersicht Finn Harps – Athenry · 18.07.2041','Finn-Harps-Spielerstatistiken · 18.07.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-07-18-athenry-fai-cup',date:'2041-07-18',season:2041,category:'FAI Cup',accent:'gold',featured:true,
    eyebrow:'FAI CUP · 1. RUNDE · FINN HARPS 9:0 ATHENRY',title:'37:0 Schüsse und neun Tore zum Pokalauftakt',
    summary:'Finn Harps lässt Amateurklub Athenry beim 9:0 keinen einzigen Abschluss. Fionn Gavin trifft dreimal in drei Minuten, Billy Walker liefert eine 10,0 und Pol Muñoz erzielt sein erstes Harps-Tor.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','athenry','fionn-gavin','billy-walker','pol-munoz','fai-cup']
  });
})();