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

  const date='2042-05-16';
  const fixtureId='2042-05-16-bohemian-finn-harps-premier-division';
  const reportId='2042-05-16-bohemian-finn-harps-0-5-spielbericht';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'bohemian',name:'Bohemian',short:'BOH',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    score:'0:5',homeGoals:0,awayGoals:5,halfTime:'0:1',
    venue:'Dalymount Park',location:'Dublin, Irland',attendance:5957,awayFans:320,weather:'Windig · 17 °C',referee:'Ronan Collins',
    headline:'Eine Halbzeit hält Bohemian dagegen, dann zerlegt Finn Harps die Partie beim 5:0',
    verdict:'Bohemian zwingt Finn Harps fast eine komplette Halbzeit lang zu Geduld. Pol Muñoz bricht den Widerstand in Minute 43, danach kippt die Partie vollständig: Papini, Ramsey, Barry und Docherty machen aus dem knappen 1:0 noch einen klaren 5:0-Auswärtssieg. Es ist der achte Ligasieg in Folge.',
    scorers:[
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:[43]},
      {player:'Giacomo Papini',team:'Finn Harps',goals:1,minutes:[65]},
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[70],penalties:[70]},
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:[77]},
      {player:'Dom Docherty',team:'Finn Harps',goals:1,minutes:[88]}
    ],
    events:[
      {minute:43,type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'0:1'},
      {minute:49,type:'yellow-card',team:'Bohemian',player:'Sunday Kelechi'},
      {minute:65,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'0:2'},
      {minute:66,type:'yellow-card',team:'Bohemian',player:'Cameron Clark'},
      {minute:70,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'0:3 · Elfmeter'},
      {minute:77,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'0:4'},
      {minute:88,type:'goal',team:'Finn Harps',player:'Dom Docherty',text:'0:5'}
    ],
    stats:[
      {label:'Schüsse',home:2,away:24,kind:'number'},
      {label:'Schüsse aufs Tor',home:2,away:8,kind:'number'},
      {label:'xG',home:0.24,away:3.71,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:0,away:11,kind:'number'},
      {label:'Großchancen',home:0,away:2,kind:'number'},
      {label:'Ballbesitz',home:24,away:76,kind:'percent'},
      {label:'Ecken',home:2,away:10,kind:'number'},
      {label:'Fouls',home:22,away:6,kind:'number'},
      {label:'Angekommene Pässe',home:'72% (154/214)',away:'90% (489/544)',kind:'text'},
      {label:'Gewonnene Zweikämpfe',home:'84% (16/19)',away:'86% (12/14)',kind:'text'},
      {label:'Gewonnene Kopfbälle',home:'39% (21/54)',away:'55% (30/55)',kind:'text'},
      {label:'Gelbe Karten',home:2,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:6.18,away:7.23,kind:'decimal'},
      {label:'Intensive Sprints',home:68,away:114,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':7.4,'Diego Fernández':7.3,'Daniele Di Maio':7.2,'Torric Bruce':7.0,'Gustavo da Silva':7.1,
      'Amir Mašić':6.8,'Daryl Frame':6.7,"Cormac O'Kane":7.0,'Pol Muñoz':7.4,'Romano Maisto':6.7,
      'Justin Ramsey':8.1,'Giacomo Papini':8.3,'Callum Brennan':7.0,"Jim O'Neill":7.0,'Dom Docherty':7.5,'Ben Barry':7.9
    },
    standout:{player:'Giacomo Papini',team:'Finn Harps',rating:8.3,note:'Kommt zur zweiten Halbzeit und prägt die endgültige Entscheidung mit dem 2:0. Höchste Harps-Note des Abends.'},
    leagueAfterMatch:{played:17,wins:15,draws:0,losses:2,goalsFor:54,goalsAgainst:6,goalDifference:48,points:45,position:1,currentWinningStreak:8,unbeatenRun:12},
    analysis:{
      resistance:'Bohemian hält die Partie 42 Minuten lang offen. Finn Harps kontrolliert zwar Ball und Raum, bekommt den Widerstand aber erst kurz vor der Pause durch Pol Muñoz gebrochen.',
      secondHalf:'Nach dem Seitenwechsel verschwindet die Spannung nahezu vollständig. Zwischen Minute 65 und 88 treffen Papini, Ramsey, Barry und Docherty. Aus einem zähen Auswärtsspiel wird innerhalb von 23 Minuten eine Machtdemonstration.',
      dominance:'24:2 Schüsse, 76 Prozent Ballbesitz und 3,71:0,24 xG zeigen, wie klar die Kräfteverhältnisse über 90 Minuten waren. Bohemian bringt zwar beide Abschlüsse aufs Tor, entwickelt aber praktisch keinen dauerhaften Druck.',
      depth:'Fünf verschiedene Torschützen unterstreichen erneut die Breite der Offensive. Gerade mit Blick auf das Champions-League-Finale verteilt Finn Harps die Last weiter auf viele Schultern.',
      final:'Der nationale Rhythmus bleibt vor Athen unangetastet. Acht Ligasiege in Folge und zwölf Pflichtspiele ohne Niederlage sorgen dafür, dass die Harps mit maximalem Selbstvertrauen Richtung Finale gegen Manchester United gehen.'
    },
    milestones:[
      'Paulo Henrique bleibt nun seit 505 Minuten ohne Gegentor für Finn Harps.',
      'Finn Harps ist seit 12 Spielen ungeschlagen.',
      'Finn Harps feiert den achten Ligasieg in Folge.'
    ],
    notes:[
      'Finn Harps gewinnt 5:0 bei Bohemian.',
      'Zur Halbzeit steht es nach Pol Muñoz’ Treffer in Minute 43 nur 1:0.',
      'Papini (65.), Ramsey (70./Elfmeter), Barry (77.) und Docherty (88.) entscheiden die Partie in der zweiten Halbzeit deutlich.',
      '24:2 Schüsse, 76 Prozent Ballbesitz und 3,71:0,24 xG.',
      'Finn Harps steht nach 17 Ligaspielen bei 45 Punkten und 54:6 Toren.',
      'Achter Ligasieg in Folge, zwölf Spiele ungeschlagen.',
      'Der Blick richtet sich weiter auf das Champions-League-Finale gegen Manchester United in Athen.'
    ],
    sources:['FM-Spielübersicht Bohemian – Finn Harps · 16.05.2042','Finn-Harps-Spielerstatistiken · 16.05.2042','Planet-Football-Spielbericht · 16.05.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-05-16','19:45','Bohemian','Auswärts','0:5','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&['Bohemian','Bohemian FC'].includes(x[2])&&x[5]==='Premier Division'&&x[0]===date);
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const bohemian=window.FM_CLUBS.find(x=>x.id==='bohemian'||x.name==='Bohemian'||x.name==='Bohemian FC');
  if(bohemian){
    bohemian.meetings=bohemian.meetings||[];
    const meeting={date:'16.05.2042',competition:'Premier Division',venue:'A',result:'5:0'};
    const idx=bohemian.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)bohemian.meetings[idx]=meeting;else bohemian.meetings.unshift(meeting);
    bohemian.lastMeeting='16.05.2042 · Bohemian 0:5 Finn Harps';
    bohemian.summary='Bohemian hält im Dalymount Park fast eine Halbzeit lang dagegen, wird nach Pol Muñoz’ 0:1 kurz vor der Pause aber im zweiten Durchgang überrollt. Finn Harps gewinnt 5:0.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Premier Division: Finn Harps gewinnt 5:0 bei Bohemian. Nach nur 1:0 zur Pause fallen vier weitere Treffer im zweiten Durchgang.';
    season.league=season.league||{};
    season.league.current={played:17,wins:15,draws:0,losses:2,goalsFor:54,goalsAgainst:6,goalDifference:48,points:45,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Finale',opponent:'Manchester United',venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland',status:'Finale erreicht',form:'8 Ligasiege in Folge · 12 Spiele ungeschlagen',availability:['Emerson Escárcega: Handgelenksfraktur · Finaleinsatz fraglich']};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='16.05.2042: Finn Harps gewinnt 5:0 bei Bohemian. Muñoz trifft kurz vor der Pause, danach machen Papini, Ramsey, Barry und Docherty innerhalb der zweiten Halbzeit alles klar. 24:2 Schüsse, 76 Prozent Ballbesitz, 3,71:0,24 xG. Liga: 17 Spiele, 45 Punkte, 54:6 Tore; acht Ligasiege in Folge und zwölf Spiele ungeschlagen.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-05-16-pol-munoz-goal-bohemian',date,player:'Pol Muñoz',type:'goal',title:'Muñoz bricht Bohemians Widerstand',detail:'Erzielt in Minute 43 das 1:0 und öffnet damit die Partie.'},
    {id:'2042-05-16-papini-bohemian-standout',date,player:'Giacomo Papini',type:'standout',title:'Papini prägt die zweite Halbzeit',detail:'Trifft zum 2:0 und erhält mit 8,3 die beste Harps-Note.'},
    {id:'2042-05-16-ramsey-goal-bohemian',date,player:'Justin Ramsey',type:'goal',title:'Ramsey trifft vom Punkt',detail:'Verwandelt in Minute 70 den Elfmeter zum 3:0.'},
    {id:'2042-05-16-paulo-henrique-505-clean-sheet',date,player:'Paulo Henrique',type:'streak',title:'505 Minuten ohne Gegentor',detail:'Der Torhüter baut seine Serie im 5:0 bei Bohemian auf 505 Minuten aus.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'16.05.2042',
    headline:'Eine Halbzeit Widerstand, dann brechen die Dämme: Harps gewinnen 5:0',
    subheadline:'Bohemian hält bis kurz vor der Pause mit. Pol Muñoz öffnet die Partie, danach treffen Papini, Ramsey, Barry und Docherty im zweiten Durchgang.',
    label:'PREMIER DIVISION · AUF DEM WEG NACH ATHEN',
    heroStat:{label:'Zweite Halbzeit',value:'4:0',note:'Finn Harps macht aus einem zähen Abend eine klare Angelegenheit'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Für 42 Minuten sieht das im Dalymount Park nach einem jener Abende aus, an denen ein Außenseiter den Favoriten in einen unangenehmen Kampf zieht. Dann trifft Pol Muñoz. Nach der Pause bleibt von diesem Gleichgewicht nichts mehr übrig.',
    sections:[
      {title:'Bohemian hält eine Halbzeit dagegen',text:'Finn Harps kontrolliert das Spiel, doch Bohemian verteidigt kompakt und hält das 0:0 bis kurz vor dem Pausenpfiff. Erst Pol Muñoz findet in Minute 43 die Lücke und sorgt für die knappe Halbzeitführung.'},
      {title:'Nach der Pause rollt die Welle',text:'Giacomo Papini erhöht in Minute 65, Justin Ramsey trifft fünf Minuten später per Elfmeter. Ben Barry macht in Minute 77 das 4:0, Dom Docherty setzt in Minute 88 den Schlusspunkt. Vier Tore in 23 Minuten nehmen dem Spiel jede Restspannung.'},
      {title:'Die Zahlen erzählen von totaler Kontrolle',text:'24:2 Schüsse, 8:2 aufs Tor, 76 Prozent Ballbesitz und 3,71:0,24 xG. Bohemian bringt seine beiden Abschlüsse zwar auf Paulo Henriques Tor, doch die Harps lassen insgesamt kaum etwas zu.'},
      {title:'Breite statt Abhängigkeit',text:'Fünf verschiedene Torschützen und starke Beiträge von Papini, Ramsey, Barry und Docherty zeigen erneut, dass Finn Harps nicht von einer einzigen offensiven Figur lebt. Das ist vor dem Champions-League-Finale besonders wertvoll.'},
      {title:'Der Countdown nach Athen läuft',text:'Acht Ligasiege in Folge, zwölf Spiele ungeschlagen und Paulo Henrique seit 505 Minuten ohne Gegentor: Finn Harps hält die Spannung hoch, ohne in der Liga Energie zu verschenken. Der nationale Alltag wird immer stärker zur Bühne für den europäischen Höhepunkt.'}
    ],
    verdictHeading:'Erst Geduld, dann Wucht',
    verdict:'Das 5:0 wirkt am Ende beiläufig, war aber nicht von Beginn an selbstverständlich. Gerade deshalb ist es ein gutes Signal: Finn Harps kann ein zähes Spiel aushalten, den ersten Riss finden und anschließend gnadenlos beschleunigen. Vor Athen ist diese Mischung aus Ruhe und Schlagkraft vielleicht wertvoller als ein früher Kantersieg.',
    sources:['FM-Spielübersicht Bohemian – Finn Harps · 16.05.2042','Finn-Harps-Spielerstatistiken · 16.05.2042','Planet-Football-Spielbericht · 16.05.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-05-16-bohemian-finn-harps-0-5',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'DALYMOUNT PARK · 0:5',
    title:'Eine Halbzeit Gegenwehr, danach überrollen die Harps Bohemian',
    summary:'Pol Muñoz trifft kurz vor der Pause. Danach sorgen Papini, Ramsey, Barry und Docherty für ein klares 5:0. Finn Harps feiert den achten Ligasieg in Folge und bleibt seit zwölf Spielen ungeschlagen.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','bohemian','pol-munoz','giacomo-papini','justin-ramsey','ben-barry','dom-docherty','season-2042']
  });
})();