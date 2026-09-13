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

  const date='2042-08-01';
  const fixtureId='2042-08-01-finn-harps-sligo-rovers-premier-division';
  const reportId='2042-08-01-finn-harps-sligo-rovers-2-0-total-control';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    away:{id:'sligo-rovers',name:'Sligo Rovers',short:'SLI',score:0},
    score:'2:0',homeGoals:2,awayGoals:0,halfTime:'1:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Heiter · 11 °C',referee:'Robert Harvey',
    headline:'Totaler Würgegriff: Finn Harps schlagen Sligo 2:0 und feiern den 13. Ligasieg in Folge',
    verdict:'Das Ergebnis fällt deutlich knapper aus als die Kräfteverhältnisse. Finn Harps dominiert Sligo Rovers mit 21:2 Schüssen, 11:0 Schüssen aufs Tor, 79 Prozent Ballbesitz und 3,35:0,12 xG. Emerson Escárcega trifft in Minute 32, Jake Roberts macht in Minute 79 alles klar. Es ist der 13. Ligasieg in Folge.',
    scorers:[
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[32]},
      {player:'Jake Roberts',team:'Finn Harps',goals:1,minutes:[79]}
    ],
    events:[
      {minute:32,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'1:0'},
      {minute:44,type:'yellow',team:'Sligo Rovers',player:'Mark Hardy',text:'Gelbe Karte'},
      {minute:55,type:'yellow',team:'Sligo Rovers',player:'Sam Price',text:'Gelbe Karte'},
      {minute:79,type:'goal',team:'Finn Harps',player:'Jake Roberts',text:'2:0'}
    ],
    stats:[
      {label:'Schüsse',home:21,away:2,kind:'number'},
      {label:'Schüsse aufs Tor',home:11,away:0,kind:'number'},
      {label:'xG',home:3.35,away:0.12,kind:'decimal'},
      {label:'Ballbesitz',home:79,away:21,kind:'percent'},
      {label:'Ecken',home:10,away:1,kind:'number'},
      {label:'Fouls',home:8,away:22,kind:'number'},
      {label:'Angekommene Pässe',home:'724/805',away:'194/264',kind:'text'},
      {label:'Passquote',home:90,away:73,kind:'percent'},
      {label:'Gelbe Karten',home:0,away:2,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'}
    ],
    ratings:{
      'Evan Reilly':7.4,'Diego Fernández':7.2,'Alejandro López':7.0,'Torric Bruce':7.8,'Gustavo da Silva':6.8,
      'Amir Mašić':6.8,'Daryl Frame':7.1,'Jake Roberts':7.8,'Billy Walker':7.8,'Pol Muñoz':7.1,
      'Emerson Escárcega':7.1,'Callum Brennan':7.2,'Raúl':7.0,"Jim O'Neill":6.9,'Justin Ramsey':6.9,'Romano Maisto':6.7
    },
    standout:{player:'Billy Walker',team:'Finn Harps',rating:7.8,note:'Starker kreativer Auftritt; im Spielbericht mit 1,19 Expected Assists hervorgehoben.'},
    otherStandouts:[
      {player:'Torric Bruce',rating:7.8,note:'Dominant in der Defensive und beim Spielaufbau.'},
      {player:'Jake Roberts',rating:7.8,goals:1,note:'Krönt seinen starken Auftritt mit dem 2:0 in Minute 79.'}
    ],
    leagueAfterMatch:{played:22,wins:20,draws:0,losses:2,goalsFor:73,goalsAgainst:9,goalDifference:64,points:60,position:1},
    form:{leagueWinningStreak:13,positionAfterMatch:1},
    milestones:[
      {player:'Evan Reilly',achievement:'50. Ligaspiel seiner Karriere'}
    ],
    analysis:{
      control:'Sligo bekommt über 90 Minuten keinen einzigen Schuss aufs Tor. 79 Prozent Ballbesitz und 724 angekommene Pässe zeigen, wie vollständig Finn Harps das Spiel kontrolliert.',
      finishing:'Bei 3,35 xG und elf Schüssen aufs Tor bleiben zwei Treffer vergleichsweise wenig. Anders als beim 7:1 gegen St Patrick’s ist dies weniger ein Offensivfeuerwerk als ein permanenter Würgegriff.',
      escarcega:'Escárcega trifft erneut nach seiner Rückkehr als Weltmeister und bringt Finn Harps in Minute 32 auf Kurs.',
      roberts:'Jake Roberts setzt seine gute Phase fort und entscheidet die Partie in Minute 79 endgültig.',
      league:'Mit 20 Siegen aus 22 Ligaspielen, 73:9 Toren und 60 Punkten bleibt Finn Harps souverän Tabellenführer.'
    },
    notes:[
      'Finn Harps schlägt Sligo Rovers im Donegal Stadium 2:0.',
      'Emerson Escárcega trifft in Minute 32, Jake Roberts in Minute 79.',
      'Finn Harps gewinnt die Schussstatistik 21:2 und lässt keinen Schuss aufs Tor zu.',
      '3,35:0,12 xG und 79 Prozent Ballbesitz unterstreichen die Dominanz.',
      '13. Ligasieg in Folge.',
      'Nach 22 Spielen: 20 Siege, 0 Unentschieden, 2 Niederlagen, 73:9 Tore, 60 Punkte.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Sligo Rovers · 01.08.2042','Finn-Harps-Spielerstatistiken · 01.08.2042','Voetbalzone · Premier Division: Komfortabler 2:0-Sieg für Finn Harps']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-08-01','19:45','Sligo Rovers','Heim','2:0','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[2]==='Sligo Rovers'&&x[5]==='Premier Division'&&x[0]===date);
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const sligo=window.FM_CLUBS.find(x=>x.id==='sligo-rovers'||x.name==='Sligo Rovers'||x.name==='Sligo Rovers FC');
  if(sligo){
    sligo.meetings=sligo.meetings||[];
    const meeting={date:'01.08.2042',competition:'Premier Division',venue:'H',result:'2:0'};
    const idx=sligo.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)sligo.meetings[idx]=meeting;else sligo.meetings.unshift(meeting);
    sligo.lastMeeting='01.08.2042 · Finn Harps 2:0 Sligo Rovers';
    sligo.summary='Finn Harps kontrolliert Sligo im Donegal Stadium vollständig: 21:2 Schüsse, 11:0 aufs Tor, 79 Prozent Ballbesitz und ein souveränes 2:0 durch Escárcega und Roberts.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Finn Harps schlägt Sligo Rovers 2:0 und feiert den 13. Ligasieg in Folge. 21:2 Schüsse, 11:0 aufs Tor und 79 Prozent Ballbesitz machen das Spiel zur totalen Kontrolle.';
    season.league=season.league||{};
    season.league.current={played:22,wins:20,draws:0,losses:2,goalsFor:73,goalsAgainst:9,goalDifference:64,points:60,position:1};
    season.league.latestForm='13 Ligasiege in Folge · Platz 1';
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='01.08.2042: Finn Harps schlägt Sligo Rovers 2:0. Escárcega trifft in Minute 32, Roberts in Minute 79. Bei 21:2 Schüssen, 11:0 aufs Tor, 79 Prozent Ballbesitz und 3,35:0,12 xG ist der Sieg trotz des knappen Resultats hochdominant. Es ist der 13. Ligasieg in Folge; nach 22 Spielen stehen 60 Punkte und 73:9 Tore.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-08-01-escarcega-sligo-goal',date,player:'Emerson Escárcega',type:'goal',title:'Escárcega trifft erneut',detail:'Der Weltmeister erzielt gegen Sligo in Minute 32 das 1:0.'},
    {id:'2042-08-01-jake-roberts-sligo-goal',date,player:'Jake Roberts',type:'goal',title:'Roberts setzt starke Phase fort',detail:'Trifft in Minute 79 zum 2:0 und erhält die Note 7,8.'},
    {id:'2042-08-01-evan-reilly-50-league',date,player:'Evan Reilly',type:'milestone',title:'Reilly bei 50 Ligaspielen',detail:'Der 19-jährige Torhüter erreicht gegen Sligo sein 50. Ligaspiel der Karriere.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'01.08.2042',
    headline:'Nur 2:0, aber totale Kontrolle: Harps schnüren Sligo komplett ein',
    subheadline:'Escárcega und Roberts treffen. Sligo bleibt ohne Schuss aufs Tor, Finn Harps feiert den 13. Ligasieg in Folge.',
    label:'PREMIER DIVISION · 1. AUGUST 2042',
    heroStat:{label:'KONTROLLE',value:'79 % BALLBESITZ',note:'21:2 Schüsse · 11:0 aufs Tor · 3,35:0,12 xG'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Nach dem 7:1 bei St Patrick’s folgt kein zweites Torfestival, sondern etwas fast ebenso Eindrucksvolles: absolute Kontrolle. Finn Harps hält Sligo über 90 Minuten von einem einzigen Schuss aufs Tor fern und gewinnt im ausverkauften Donegal Stadium 2:0.',
    sections:[
      {title:'Escárcega eröffnet',text:'In Minute 32 bringt Emerson Escárcega die Harps in Führung. Der frischgebackene Weltmeister setzt damit seine starke Rückkehr in den Vereinsalltag fort.'},
      {title:'Sligo bekommt keine Luft',text:'79 Prozent Ballbesitz, 724 angekommene Pässe und 21 Abschlüsse zeigen das Kräfteverhältnis. Besonders bemerkenswert: Sligo bringt keinen einzigen seiner zwei Schüsse auf Evan Reillys Tor.'},
      {title:'Roberts entscheidet',text:'Jake Roberts erzielt in Minute 79 das längst überfällige 2:0. Nach seinem Treffer in Derry setzt der junge Mittelfeldspieler seine gute Phase fort.'},
      {title:'13 Siege in Serie',text:'Finn Harps steht nach 22 Ligaspielen bei 20 Siegen, 60 Punkten und 73:9 Toren. Die Siegesserie wächst auf 13 Ligaspiele.'}
    ],
    verdictHeading:'Ein 2:0, das wie ein 5:0 aussieht',
    verdict:'Die Chancenverwertung verhindert ein höheres Ergebnis, aber spielerisch ist der Abstand gewaltig. Nach der WM-Pause können die Harps nicht nur Gegner überrollen, sondern Spiele auch vollständig ersticken.',
    sources:['FM-Spielübersicht Finn Harps – Sligo Rovers · 01.08.2042','Finn-Harps-Spielerstatistiken · 01.08.2042']
  });

  upsert(window.FM_NEWS,{
    id:'2042-08-01-finn-harps-sligo-2-0',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 2:0',
    title:'Harps im Würgegriff-Modus: Sligo ohne Schuss aufs Tor',
    summary:'Escárcega und Roberts treffen beim 2:0. Finn Harps dominiert mit 79 Prozent Ballbesitz, 21:2 Schüssen und 3,35:0,12 xG und feiert den 13. Ligasieg in Folge.',
    href:`presse.html?id=${reportId}`
  });
})();