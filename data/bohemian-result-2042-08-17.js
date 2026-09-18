(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-08-17';
  const fixtureId='2042-08-17-finn-harps-bohemian-premier-division';
  const reportId='2042-08-17-finn-harps-bohemian-4-0-late-surge';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    away:{id:'bohemian',name:'Bohemian',short:'BOH',score:0},
    score:'4:0',homeGoals:4,awayGoals:0,halfTime:'1:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'21 °C',referee:'Stephen Lawless',
    headline:'Lange nur 1:0, dann explodiert die Schlussphase: Finn Harps schlagen Bohemian 4:0',
    verdict:'Daryl Frame bringt Finn Harps früh in Führung, doch Bohemian hält das Spiel bis zur 74. Minute offen. Dann entscheidet die letzte Viertelstunde alles: Torric Bruce, Giacomo Papini und Emerson Escárcega treffen innerhalb von 13 Minuten. Es ist der 17. Ligasieg in Folge.',
    scorers:[
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[11]},
      {player:'Torric Bruce',team:'Finn Harps',goals:1,minutes:[74]},
      {player:'Giacomo Papini',team:'Finn Harps',goals:1,minutes:[76]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[87]}
    ],
    events:[
      {minute:4,type:'yellow-card',team:'Finn Harps',player:'Dom Docherty'},
      {minute:11,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'1:0'},
      {minute:51,type:'yellow-card',team:'Bohemian',player:'Neil Griffiths'},
      {minute:74,type:'goal',team:'Finn Harps',player:'Torric Bruce',text:'2:0'},
      {minute:76,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'3:0'},
      {minute:87,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'4:0'}
    ],
    stats:[
      {label:'Schüsse',home:17,away:3,kind:'number'},
      {label:'Schüsse aufs Tor',home:8,away:0,kind:'number'},
      {label:'xG',home:2.50,away:0.22,kind:'decimal'},
      {label:'Ballbesitz',home:75,away:25,kind:'percent'},
      {label:'Ecken',home:10,away:1,kind:'number'},
      {label:'Fouls',home:15,away:21,kind:'number'},
      {label:'Angekommene Pässe',home:'89% (579/653)',away:'78% (193/247)',kind:'text'},
      {label:'Gelbe Karten',home:2,away:1,kind:'number'}
    ],
    ratings:{
      'Evan Reilly':7.4,'Callum Brennan':6.9,'Torric Bruce':7.8,'Alejandro López':6.9,'Raúl':6.8,
      'Amir Mašić':7.0,'Daryl Frame':7.6,"Cormac O'Kane":6.8,'Giacomo Papini':9.0,'Dom Docherty':6.6,
      'Emerson Escárcega':7.6,'Diego Fernández':7.0,'Gustavo da Silva':7.1,'Jake Roberts':7.0,"Jim O'Neill":6.7,'Pol Muñoz':6.7
    },
    standout:{player:'Giacomo Papini',team:'Finn Harps',rating:9.0,goals:1,assists:2,note:'Ein Tor, zwei Vorlagen und die klare Bestnote. Papini ist das Zentrum der späten Entscheidung.'},
    leagueAfterMatch:{played:26,wins:24,draws:0,losses:2,goalsFor:91,goalsAgainst:10,goalDifference:81,points:72,position:1,currentWinningStreak:17},
    milestones:[
      'Evan Reilly ist seit 312 Minuten ohne Gegentor für Finn Harps.',
      'Callum Brennan absolviert sein 125. Ligaspiel der Karriere und für Finn Harps.',
      'Giacomo Papini erzielt sein 50. Tor für Finn Harps.',
      'Gustavo da Silva absolviert sein 125. Ligaspiel der Karriere.',
      'Jake Roberts bestreitet sein 50. Ligaspiel für Finn Harps.'
    ],
    analysis:{
      opening:'Daryl Frame trifft bereits in Minute 11, doch die frühe Führung wird nicht zum Startsignal für einen Kantersieg. Bohemian hält das 1:0 lange stabil.',
      patience:'Bis tief in die zweite Hälfte bleibt es beim knappen Vorsprung. Finn Harps kontrolliert mit 75 Prozent Ballbesitz und lässt keinen Schuss aufs Tor zu, findet aber lange nicht den zweiten Treffer.',
      lateSurge:'Die Partie kippt endgültig in der letzten Viertelstunde. Bruce trifft in Minute 74, Papini nur zwei Minuten später. Escárcega macht in Minute 87 das 4:0. Drei Tore in 13 Minuten verwandeln einen knappen Sieg in ein klares Ergebnis.',
      papini:'Papini prägt die Entscheidung mit einem eigenen Tor und zwei Vorlagen. Seine Note 9,0 ist die beste Leistung des Spiels.',
      streak:'Nach 26 Ligaspielen steht Finn Harps bei 72 Punkten und 91:10 Toren. Der 4:0-Erfolg ist der 17. Ligasieg in Folge.'
    },
    sources:['FM-Spielübersicht Finn Harps – Bohemian · 17.08.2042','Finn-Harps-Spielerstatistiken · 17.08.2042','90min-Spielbericht · 17.08.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixture=['2042-08-17','15:00','Bohemian','Heim','4:0','Premier Division',0];
  const fixtureIndex=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&['Bohemian','Bohemian FC'].includes(x[2])&&x[5]==='Premier Division');
  if(fixtureIndex>=0)window.FM_FIXTURES[fixtureIndex]=fixture;else window.FM_FIXTURES.push(fixture);

  const bohemian=window.FM_CLUBS.find(x=>x.id==='bohemian'||x.name==='Bohemian'||x.name==='Bohemian FC');
  if(bohemian){
    bohemian.meetings=bohemian.meetings||[];
    const meeting={date:'17.08.2042',competition:'Premier Division',venue:'H',result:'4:0'};
    const idx=bohemian.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)bohemian.meetings[idx]=meeting;else bohemian.meetings.unshift(meeting);
    bohemian.lastMeeting='17.08.2042 · Finn Harps 4:0 Bohemian';
    bohemian.summary='Bohemian hält das Spiel trotz früher Frame-Führung bis zur 74. Minute offen. Dann treffen Bruce, Papini und Escárcega in der Schlussphase und machen aus dem 1:0 noch ein klares 4:0.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Premier Division: Finn Harps schlägt Bohemian 4:0. Drei Treffer ab Minute 74 entscheiden die Partie endgültig.';
    season.league=season.league||{};
    season.league.current={played:26,wins:24,draws:0,losses:2,goalsFor:91,goalsAgainst:10,goalDifference:81,points:72,position:1};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='17.08.2042: Finn Harps gewinnt 4:0 gegen Bohemian. Frame trifft früh, doch erst die letzte Viertelstunde entscheidet das Spiel: Bruce (74.), Papini (76.) und Escárcega (87.) sorgen für drei späte Treffer. Papini liefert zusätzlich zwei Vorlagen und erhält Note 9,0. Liga: 26 Spiele, 72 Punkte, 91:10 Tore, 17 Ligasiege in Folge.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-08-17-daryl-frame-goal-bohemian',date,player:'Daryl Frame',type:'goal',title:'Frame trifft früh gegen Bohemian',detail:'Bringt Finn Harps in Minute 11 mit 1:0 in Führung.'},
    {id:'2042-08-17-torric-bruce-goal-bohemian',date,player:'Torric Bruce',type:'goal',title:'Bruce öffnet die Schlussphase',detail:'Erzielt in Minute 74 das 2:0 und löst damit die späte Torserie aus.'},
    {id:'2042-08-17-papini-50-goals',date,player:'Giacomo Papini',type:'milestone',title:'50 Tore für Finn Harps',detail:'Papini erzielt gegen Bohemian sein 50. Harps-Tor, liefert außerdem zwei Vorlagen und erhält Note 9,0.'},
    {id:'2042-08-17-escarcega-goal-bohemian',date,player:'Emerson Escárcega',type:'goal',title:'Escárcega setzt den Schlusspunkt',detail:'Trifft in Minute 87 zum 4:0.'},
    {id:'2042-08-17-evan-reilly-clean-sheet-run',date,player:'Evan Reilly',type:'streak',title:'312 Minuten ohne Gegentor',detail:'Reilly hält gegen Bohemian erneut die Null und baut seine Serie auf 312 Minuten aus.'},
    {id:'2042-08-17-callum-brennan-125-league',date,player:'Callum Brennan',type:'milestone',title:'125 Ligaspiele für Finn Harps',detail:'Brennan erreicht zugleich sein 125. Ligaspiel der Karriere und für Finn Harps.'},
    {id:'2042-08-17-jake-roberts-50-harps-league',date,player:'Jake Roberts',type:'milestone',title:'50 Ligaspiele für Finn Harps',detail:'Roberts absolviert gegen Bohemian seinen 50. Ligaeinsatz für den Klub.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'17.08.2042',
    headline:'Eine Stunde Geduld, dann bricht Bohemian auseinander',
    subheadline:'Frame trifft früh, doch bis zur 74. Minute bleibt es nur 1:0. Dann entscheiden Bruce, Papini und Escárcega die Partie innerhalb der letzten Viertelstunde.',
    label:'PREMIER DIVISION · 17. AUGUST 2042',
    heroStat:{label:'SCHLUSSPHASE',value:'3 TORE',note:'74. · 76. · 87. Minute'},
    intro:'Das Ergebnis sieht nach einem gewöhnlichen 4:0 der Harps aus. Der Spielverlauf war deutlich störrischer: Daryl Frame trifft früh, danach bleibt Bohemian mehr als eine Stunde im Spiel. Erst die Schlussphase sprengt das Ergebnis auf.',
    sections:[
      {title:'Frame trifft früh, Bohemian bleibt trotzdem dran',text:'Daryl Frame bringt Finn Harps bereits in Minute 11 in Führung. Danach kontrollieren die Harps zwar Ball und Raum, doch der zweite Treffer bleibt lange aus. Zur Pause steht es nur 1:0.'},
      {title:'Die letzte Viertelstunde entscheidet alles',text:'In Minute 74 köpft Torric Bruce das 2:0. Nur zwei Minuten später erhöht Giacomo Papini auf 3:0. Emerson Escárcega setzt in Minute 87 den Schlusspunkt. Drei Tore in 13 Minuten machen aus einem lange engen Spiel einen klaren Sieg.'},
      {title:'Papini mit Tor und zwei Vorlagen',text:'Papini ist an drei Treffern direkt beteiligt, erzielt dabei sein 50. Tor für Finn Harps und erhält mit 9,0 die beste Note des Spiels.'},
      {title:'Bohemian ohne Schuss aufs Tor',text:'Finn Harps beendet die Partie mit 17:3 Schüssen, 8:0 Schüssen aufs Tor, 2,50:0,22 xG und 75 Prozent Ballbesitz. Evan Reilly ist damit seit 312 Minuten ohne Gegentor.'},
      {title:'17 Ligasiege am Stück',text:'Nach 26 Spielen stehen die Harps bei 72 Punkten und 91:10 Toren. Seit 17 Ligapartien hat Finn Harps ausschließlich gewonnen.'}
    ],
    verdictHeading:'Ein 4:0, das erst spät wie ein 4:0 aussah',
    verdict:'Bohemian hält die Partie über lange Strecken erstaunlich eng, ohne selbst wirkliche Torgefahr zu entwickeln. Finn Harps bleibt geduldig und bestraft den nachlassenden Widerstand dann brutal effizient. Die entscheidende Geschichte steckt deshalb nicht im Endstand, sondern in den letzten 16 Minuten.'
  });

  upsert(window.FM_NEWS,{
    id:'2042-08-17-finn-harps-bohemian-4-0',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 4:0',
    title:'Drei späte Treffer: Harps entscheiden Bohemian in der Schlussphase',
    summary:'Frame trifft früh, doch bis Minute 74 bleibt es 1:0. Dann sorgen Bruce, Papini und Escárcega für drei Tore in 13 Minuten. Finn Harps feiert den 17. Ligasieg in Folge.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','bohemian','daryl-frame','torric-bruce','giacomo-papini','emerson-escarcega','season-2042']
  });
})();