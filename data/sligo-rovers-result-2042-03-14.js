(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2042-03-14-finn-harps-sligo-rovers-premier-division';
  const reportId='2042-03-14-finn-harps-sligo-rovers-3-0-spielbericht';

  const match={
    id:fixtureId,date:'2042-03-14',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    away:{id:'sligo-rovers',name:'Sligo Rovers',short:'SLI',score:0},
    score:'3:0',homeGoals:3,awayGoals:0,halfTime:'2:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Nieselregen · 11 °C',referee:'Robert Harvey',
    headline:'Zurück im Liga-Alltag: Escárcega-Doppelpack führt Harps zum 3:0 gegen Sligo',
    verdict:'Nur drei Tage nach dem taktisch starken 4:0 gegen Caen schaltet Finn Harps wieder auf Premier Division um. Emerson Escárcega trifft früh und kurz vor der Pause, Torric Bruce erhöht direkt nach Wiederbeginn. Danach verwalten die Harps die Partie souverän. 71 Prozent Ballbesitz, 8:0 Schüsse aufs Tor und das sechste Ligaspiel ohne Gegentor unterstreichen, wie stabil die Mannschaft zwischen den europäischen Höhepunkten arbeitet.',
    scorers:[
      {player:'Emerson Escárcega',team:'Finn Harps',goals:2,minutes:[6,41]},
      {player:'Torric Bruce',team:'Finn Harps',goals:1,minutes:[51]}
    ],
    events:[
      {minute:6,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'1:0'},
      {minute:36,type:'yellow',team:'Sligo Rovers',player:"Robbie O'Callaghan",text:'Gelbe Karte'},
      {minute:41,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'2:0'},
      {minute:51,type:'goal',team:'Finn Harps',player:'Torric Bruce',text:'3:0'},
      {minute:84,type:'yellow',team:'Sligo Rovers',player:'Henry Hubbard',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:12,away:6,kind:'number'},
      {label:'Schüsse aufs Tor',home:8,away:0,kind:'number'},
      {label:'xG',home:1.72,away:0.60,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:1,away:5,kind:'number'},
      {label:'Großchancen',home:2,away:0,kind:'number'},
      {label:'Ballbesitz',home:71,away:29,kind:'percent'},
      {label:'Ecken',home:3,away:2,kind:'number'},
      {label:'Fouls',home:10,away:37,kind:'number'},
      {label:'Mannschaftsnote',home:7.30,away:6.26,kind:'decimal'}
    ],
    ratings:{
      'Paulo Henrique':7.4,'Diego Fernández':6.9,'Torric Bruce':7.8,'Daniele Di Maio':7.4,'Kevin Kelly':7.1,
      "Jim O'Neill":7.1,'Daryl Frame':6.9,'Jake Roberts':6.9,'Giacomo Papini':7.4,'Romano Maisto':7.8,
      'Emerson Escárcega':8.6,'Callum Brennan':6.8,'Billy Walker':6.8,'Pol Muñoz':6.8,'Mareks Istrankins':6.8,'Gustavo da Silva':6.8
    },
    standout:{player:'Emerson Escárcega',team:'Finn Harps',rating:8.6,goals:2,note:'Doppelpack in der 6. und 41. Minute. Escárcega entscheidet den Liga-Alltag früh und setzt seine starke Form fort.'},
    leagueAfterMatch:{played:6,wins:6,draws:0,losses:0,goalsFor:20,goalsAgainst:0,goalDifference:20,points:18,position:1,consecutiveLeagueWinsAcrossSeasons:23},
    analysis:{
      routine:'Nach dem emotionalen Champions-League-Abend gegen Caen wirkt das 3:0 fast unspektakulär. Genau das ist die Aussage: Finn Harps findet ohne sichtbaren Spannungsabfall zurück in den nationalen Rhythmus.',
      escarcega:'Escárcega sorgt mit seinem Doppelpack vor der Pause für klare Verhältnisse. Nach seinem starken Hinspiel gegen Caen zeigt der 31-jährige Stürmer auch im Liga-Alltag, dass er nicht nur für die großen europäischen Abende geholt wurde.',
      bruce:'Bruce trifft in der 51. Minute zum zweiten Mal innerhalb weniger Tage. Nach seinem Tor gegen Caen setzt der Innenverteidiger auch gegen Sligo einen offensiven Akzent.',
      defensive:'Sligo kommt auf sechs Abschlüsse und 0,60 xG, bringt aber keinen einzigen Schuss aufs Tor. Damit bleibt Finn Harps auch im sechsten Ligaspiel der Saison ohne Gegentor.',
      streak:'Die Premier-Division-Bilanz 2042 steht nun bei sechs Siegen aus sechs Spielen und 20:0 Toren. Saisonübergreifend weist der Spielbericht 23 Ligasiege in Serie aus.'
    },
    notes:[
      'Sechster Sieg im sechsten Ligaspiel 2042.',
      'Ligabilanz 2042: 18 Punkte und 20:0 Tore.',
      'Emerson Escárcega erzielt einen Doppelpack.',
      'Torric Bruce trifft erneut nach seinem Tor gegen Caen.',
      'Sligo bringt keinen einzigen Schuss aufs Tor.',
      'Saisonübergreifend 23 Ligasiege in Serie.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Sligo Rovers · 14.03.2042','Finn-Harps-Spielerstatistiken · 14.03.2042','Irisches Fußballblatt Spielbericht · Finn Harps 3:0 Sligo Rovers']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const sligo=window.FM_CLUBS.find(x=>x.id==='sligo-rovers'||x.name==='Sligo Rovers'||x.name==='Sligo Rovers FC');
  if(sligo){
    sligo.meetings=sligo.meetings||[];
    const meeting={date:'14.03.2042',competition:'Premier Division',venue:'A',result:'0:3'};
    const idx=sligo.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)sligo.meetings[idx]=meeting;else sligo.meetings.unshift(meeting);
    sligo.lastMeeting='14.03.2042 · Finn Harps 3:0 Sligo Rovers';
    sligo.summary='Sligo verliert im Donegal Stadium 0:3. Escárcega trifft doppelt, Bruce einmal; die Rovers bringen keinen Abschluss aufs Tor.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-03-14';
    season.latestHeadline='Premier Division: 3:0 gegen Sligo. Finn Harps steht nach sechs Ligaspielen bei sechs Siegen und 20:0 Toren.';
    season.league=season.league||{};
    season.league.current={played:6,wins:6,draws:0,losses:0,goalsFor:20,goalsAgainst:0,goalDifference:20,points:18,position:1};
    season.league.consecutiveWinsAcrossSeasons=23;
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='14.03.2042: Finn Harps schlägt Sligo Rovers 3:0. Escárcega trifft doppelt, Bruce einmal. Nach sechs Ligaspielen stehen 18 Punkte und 20:0 Tore; saisonübergreifend sind es 23 Ligasiege in Serie.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-03-14-escarcega-sligo-doppelpack',date:'2042-03-14',player:'Emerson Escárcega',type:'standout',title:'Escárcega entscheidet Sligo mit Doppelpack',detail:'Trifft in Minute 6 und 41 und erhält mit 8,6 die beste Harps-Note.'},
    {id:'2042-03-14-torric-bruce-sligo-goal',date:'2042-03-14',player:'Torric Bruce',type:'goal',title:'Bruce trifft erneut',detail:'Erzielt in der 51. Minute das 3:0, nur drei Tage nach seinem Treffer gegen Caen.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-03-14',competition:'Premier Division',fixtureDate:'14.03.2042',
    home:'Finn Harps',away:'Sligo Rovers',score:'3:0',location:'Donegal Stadium · Stranorlar · 12.800 Zuschauer',
    headline:'Liga-Alltag nach Caen: Escárcega führt Harps zum 3:0 gegen Sligo',
    subheadline:'Drei Tage nach dem Champions-League-Viertelfinaleinzug erledigt Finn Harps auch die nächste nationale Aufgabe souverän. Escárcega trifft doppelt, Bruce legt nach. Nach sechs Ligaspielen stehen 18 Punkte und 20:0 Tore.',
    heroStat:{label:'Ligastart 2042',value:'6 Spiele · 6 Siege · 20:0 Tore',note:'23 Ligasiege saisonübergreifend in Serie'},
    sections:[
      {title:'Von Europa zurück in den Alltag',text:'Nach dem 4:0 gegen Caen bleibt kein Spannungsabfall sichtbar. Finn Harps kontrolliert Sligo mit 71 Prozent Ballbesitz und lässt keinen einzigen Abschluss aufs eigene Tor zu.'},
      {title:'Escárcega macht früh den Deckel drauf',text:'Der 31-jährige Stürmer trifft bereits in der 6. Minute und erhöht kurz vor der Pause auf 2:0. Mit Note 8,6 ist er erneut der prägende Offensivspieler.'},
      {title:'Bruce trifft schon wieder',text:'Torric Bruce setzt in der 51. Minute den Schlusspunkt. Nach seinem Treffer gegen Caen steht der Innenverteidiger damit innerhalb weniger Tage erneut auf der Torschützenliste.'},
      {title:'Die Null bleibt stehen',text:'Sechs Ligaspiele, sechs Siege, 20 eigene Tore und noch kein Gegentor. Die nationale Dominanz läuft parallel zum Champions-League-Viertelfinaleinzug weiter.'}
    ],
    verdictHeading:'Routine auf sehr hohem Niveau',
    verdict:'Das 3:0 ist weniger spektakulär als die europäischen Nächte, aber gerade deshalb aussagekräftig. Finn Harps verarbeitet den Caen-Höhepunkt ohne Leistungsabfall und hält die Liga weiter fest im Griff.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-03-14-finn-harps-sligo-3-0',date:'2042-03-14',type:'Liga',importance:'normal',
    title:'Escárcega-Doppelpack: Harps schlagen Sligo 3:0',
    summary:'Finn Harps bleibt auch im sechsten Ligaspiel perfekt: 18 Punkte, 20:0 Tore und saisonübergreifend 23 Siege in Serie.',
    href:`presse.html?id=${reportId}`
  });
})();