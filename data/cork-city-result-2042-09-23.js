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

  const date='2042-09-23';
  const reportId='2042-09-23-cork-city-finn-harps-0-4-premier-division';

  upsert(window.FM_MATCHES,{
    id:'2042-09-23-cork-city-finn-harps-premier-division',date,season:2042,
    competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'cork-city',name:'Cork City',score:0},
    away:{id:'finn-harps',name:'Finn Harps',score:4},
    score:'0:4',homeGoals:0,awayGoals:4,halfTime:'0:1',
    venue:'Turners Cross',location:'Cork, Irland',attendance:6747,awayFans:368,
    weather:'Heiter · 12 °C',pitch:'Sehr gute Platzverhältnisse',referee:'Robert Hennessy',
    headline:'Escárcega doppelt, Ramsey und Walker legen nach: Harps zerlegen Cork 4:0',
    verdict:'Eine Halbzeit lang bleibt Cork City im Spiel, dann kippt die Partie vollständig. Emerson Escárcega trifft doppelt, Justin Ramsey und Billy Walker entscheiden die Begegnung innerhalb von acht Minuten endgültig. Finn Harps gewinnt mit 83 Prozent Ballbesitz, 19:5 Schüssen und 11:0 Schüssen aufs Tor.',
    scorers:[
      {player:'Emerson Escárcega',team:'Finn Harps',goals:2,minutes:[35,66]},
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[70]},
      {player:'Billy Walker',team:'Finn Harps',goals:1,minutes:[74]}
    ],
    events:[
      {minute:30,type:'yellow-card',team:'Finn Harps',player:'Pol Muñoz',text:'Verwarnung'},
      {minute:35,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:1'},
      {minute:57,type:'yellow-card',team:'Cork City',player:'Davit Kandelaki',text:'Verwarnung'},
      {minute:66,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:2'},
      {minute:67,type:'yellow-card',team:'Cork City',player:'Diego',text:'Verwarnung'},
      {minute:70,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'0:3'},
      {minute:74,type:'goal',team:'Finn Harps',player:'Billy Walker',text:'0:4'}
    ],
    stats:[
      {label:'Schüsse',home:5,away:19},
      {label:'Schüsse aufs Tor',home:0,away:11},
      {label:'xG',home:0.37,away:2.98},
      {label:'Großchancen',home:0,away:5},
      {label:'Ballbesitz',home:17,away:83},
      {label:'Ecken',home:4,away:12},
      {label:'Fouls',home:18,away:10},
      {label:'Angekommene Pässe',home:'68% (133/199)',away:'90% (641/715)'}
    ],
    ratings:{
      'Evan Reilly':7.5,'Diego Fernández':7.1,'Daniele Di Maio':7.9,'Mareks Istrankins':7.2,
      'Billy Kendrick':7.0,"Jim O'Neill":7.3,'Pol Muñoz':6.4,"Cormac O'Kane":7.0,
      'Giacomo Papini':7.4,'Romano Maisto':7.1,'Emerson Escárcega':8.1,'Billy Walker':8.2,
      'Jake Roberts':7.0,'Daryl Frame':6.8,'Alejandro López':7.0,'Justin Ramsey':7.4
    },
    standout:{
      player:'Billy Walker',team:'Finn Harps',rating:8.2,goals:1,
      note:'Walker setzt in Minute 74 den Schlusspunkt und erhält die höchste Harps-Note.'
    },
    milestones:[
      {player:'Diego',achievement:'75. Ligaspiel seiner Karriere'},
      {player:'Emerson Escárcega',achievement:'25. Ligaspiel für Finn Harps'},
      {player:'Billy Walker',achievement:'125. Profispiel'}
    ],
    streaks:[
      'Evan Reilly ist seit 672 Minuten ohne Gegentor für Finn Harps.',
      'Finn Harps erhöht den Saisonrekord an Siegen in Serie auf 16.',
      'Finn Harps ist seit 16 Spielen ungeschlagen.'
    ],
    sources:[
      'FM-Spielübersicht Cork City – Finn Harps · 23.09.2042',
      'Finn-Harps-Spielerstatistiken · 23.09.2042',
      'SPORTbible-Spielbericht · 23.09.2042'
    ]
  });

  const fx=['2042-09-23','19:45','Cork City','Auswärts','0:4','Premier Division',0];
  const fi=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&['Cork City','Cork City FC'].includes(x[2]));
  if(fi>=0)window.FM_FIXTURES[fi]=fx;else window.FM_FIXTURES.push(fx);

  const cork=window.FM_CLUBS.find(x=>x.id==='cork-city'||x.name==='Cork City'||x.name==='Cork City FC');
  if(cork){
    cork.meetings=cork.meetings||[];
    const meeting={date:'23.09.2042',competition:'Premier Division',venue:'A',result:'0:4'};
    const mi=cork.meetings.findIndex(x=>x.date===meeting.date);
    if(mi>=0)cork.meetings[mi]=meeting;else cork.meetings.unshift(meeting);
    cork.lastMeeting='23.09.2042 · Cork City 0:4 Finn Harps';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.snapshotDate=date;
    season.latestHeadline='Premier Division: Finn Harps gewinnt 4:0 bei Cork City. Escárcega trifft doppelt, Ramsey und Walker legen nach.';
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='23.09.2042: 4:0 bei Cork City. Escárcega (35., 66.), Ramsey (70.) und Walker (74.) treffen. 83 Prozent Ballbesitz, 19:5 Schüsse, 11:0 aufs Tor und 5:0 Großchancen. Reilly ist nun seit 672 Minuten ohne Gegentor.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-09-23-escarcega-brace-cork',date,player:'Emerson Escárcega',type:'performance',title:'Doppelpack bei Cork City',detail:'Escárcega trifft in Minute 35 und 66 beim 4:0-Auswärtssieg.'},
    {id:'2042-09-23-escarcega-25-league-harps',date,player:'Emerson Escárcega',type:'milestone',title:'25 Ligaspiele für Finn Harps',detail:'Escárcega erreicht gegen Cork City seinen 25. Ligaeinsatz für die Harps und erzielt zwei Tore.'},
    {id:'2042-09-23-billy-walker-125-pro',date,player:'Billy Walker',type:'milestone',title:'125 Profispiele',detail:'Walker absolviert sein 125. Profispiel und erzielt das 4:0.'},
    {id:'2042-09-23-evan-reilly-672-clean',date,player:'Evan Reilly',type:'streak',title:'672 Minuten ohne Gegentor',detail:'Cork City bringt keinen Schuss aufs Tor. Reilly bleibt seit 672 Minuten ohne Gegentreffer.'},
    {id:'2042-09-23-justin-ramsey-goal-cork',date,player:'Justin Ramsey',type:'goal',title:'Ramsey trifft in Cork',detail:'Ramsey erzielt in Minute 70 das 3:0.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:date,
    headline:'Acht Minuten reichen für den Knockout: Harps zerlegen Cork nach der Pause',
    subheadline:'Escárcega trifft doppelt, Ramsey und Walker legen nach. Finn Harps gewinnt 4:0 bei Cork City und lässt keinen einzigen Schuss aufs eigene Tor zu.',
    label:'PREMIER DIVISION · CORK CITY 0:4 FINN HARPS',
    heroStat:{label:'BALLBESITZ',value:'83%',note:'19:5 Schüsse · 11:0 aufs Tor'},
    intro:'Zur Pause führt Finn Harps nur 1:0. Danach wächst der Druck weiter, bis Cork innerhalb weniger Minuten auseinanderbricht. Zwischen Minute 66 und 74 fallen drei Tore.',
    sections:[
      {title:'Escárcega öffnet die Partie',text:'In Minute 35 bringt Emerson Escárcega die Harps per Kopfball aus kurzer Distanz in Führung. Es bleibt bis zur Pause der einzige Treffer.'},
      {title:'Cork bekommt keinen Abschluss aufs Tor',text:'Die Kontrolle ist erdrückend: 83 Prozent Ballbesitz, 19 Schüsse und elf Abschlüsse aufs Tor für Finn Harps. Cork kommt auf fünf Versuche, aber keinen einzigen aufs Tor und nur 0,37 xG.'},
      {title:'66, 70, 74: das Spiel kippt komplett',text:'Escárcega erzielt in Minute 66 sein zweites Tor. Vier Minuten später erhöht Justin Ramsey per Kopfball auf 3:0, weitere vier Minuten danach setzt Billy Walker mit einem kompromisslosen Flachschuss den Schlusspunkt.'},
      {title:'Reillys Serie wächst weiter',text:'Da Cork keinen Schuss aufs Tor bringt, bleibt Evan Reilly erneut ohne Gegentreffer. Seine Serie steht nun bei 672 Minuten.'},
      {title:'Walker und Escárcega setzen die Akzente',text:'Walker erhält mit 8,2 die höchste Harps-Note, Escárcega folgt mit 8,1 nach seinem Doppelpack. Daniele Di Maio überzeugt dahinter mit 7,9.'}
    ],
    verdictHeading:'Eine Halbzeit Geduld, dann acht Minuten Abriss',
    verdict:'Cork hält das Ergebnis bis weit in die zweite Hälfte knapp, aber nicht das Spiel. Die Harps kontrollieren Ball, Raum und Abschlüsse beinahe vollständig. Sobald Escárcega das zweite Tor erzielt, fällt das Kartenhaus schnell zusammen.',
    sources:['FM-Spielübersicht Cork City – Finn Harps · 23.09.2042','Finn-Harps-Spielerstatistiken · 23.09.2042','SPORTbible-Spielbericht · 23.09.2042']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-09-23-cork-city-finn-harps-0-4',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 0:4',
    title:'Escárcega-Doppelpack eröffnet Harps-Gala in Cork',
    summary:'Escárcega trifft doppelt, Ramsey und Walker ebenfalls. Finn Harps gewinnt 4:0 bei Cork City mit 83 Prozent Ballbesitz und 11:0 Schüssen aufs Tor.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','cork-city','emerson-escarcega','justin-ramsey','billy-walker','evan-reilly','season-2042']
  });
})();