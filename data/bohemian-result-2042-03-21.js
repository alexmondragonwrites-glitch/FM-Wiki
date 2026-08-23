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

  const fixtureId='2042-03-21-finn-harps-bohemian-premier-division';
  const reportId='2042-03-21-finn-harps-bohemian-0-1-spielbericht';

  const table=[
    {position:1,club:'Finn Harps',played:8,wins:7,draws:0,losses:1,goalsFor:23,goalsAgainst:1,goalDifference:22,points:21},
    {position:2,club:'Derry City',played:6,wins:5,draws:0,losses:1,goalsFor:12,goalsAgainst:4,goalDifference:8,points:15},
    {position:3,club:'Shamrock Rovers',played:9,wins:4,draws:2,losses:3,goalsFor:15,goalsAgainst:16,goalDifference:-1,points:14},
    {position:4,club:'Waterford',played:9,wins:4,draws:1,losses:4,goalsFor:11,goalsAgainst:12,goalDifference:-1,points:13},
    {position:5,club:'Bohemian',played:6,wins:3,draws:1,losses:2,goalsFor:6,goalsAgainst:7,goalDifference:-1,points:10},
    {position:6,club:'Athlone Town',played:7,wins:3,draws:1,losses:3,goalsFor:9,goalsAgainst:11,goalDifference:-2,points:10},
    {position:7,club:'Sligo Rovers',played:8,wins:3,draws:0,losses:5,goalsFor:10,goalsAgainst:16,goalDifference:-6,points:9},
    {position:8,club:'Cork City',played:8,wins:2,draws:2,losses:4,goalsFor:6,goalsAgainst:12,goalDifference:-6,points:8},
    {position:9,club:'UCD',played:7,wins:1,draws:0,losses:6,goalsFor:10,goalsAgainst:19,goalDifference:-9,points:3},
    {position:10,club:"St Patrick's Athletic",played:4,wins:0,draws:1,losses:3,goalsFor:0,goalsAgainst:4,goalDifference:-4,points:1}
  ];

  const match={
    id:fixtureId,date:'2042-03-21',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:0},
    away:{id:'bohemian',name:'Bohemian',short:'BOH',score:1},
    score:'0:1',homeGoals:0,awayGoals:1,halfTime:'0:1',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Windig · Schauer · 14 °C',referee:'Michael Coleman',
    headline:'3,03 xG, 20 Schüsse, null Tore: Bohemian beendet die Harps-Serie mit einem 0:1',
    verdict:'Es ist eines dieser Football-Manager-Ergebnisse, bei denen die Zahlen fast wie ein Tippfehler wirken: Finn Harps produziert 20:2 Schüsse, 4:1 Schüsse aufs Tor, 3,03:0,33 xG, drei Großchancen und 70 Prozent Ballbesitz. Bohemian braucht dagegen genau einen Schuss aufs Tor. Flavio Sulejmani verwandelt ihn in der 25. Minute zum einzigen Treffer des Abends. Damit endet die saisonübergreifende Serie der Harps nach 24 Premier-Division-Siegen, zugleich fallen das erste Ligagegentor und die erste Ligapleite 2042.',
    scorers:[
      {player:'Flavio Sulejmani',team:'Bohemian',goals:1,minutes:[25]}
    ],
    events:[
      {minute:25,type:'goal',team:'Bohemian',player:'Flavio Sulejmani',text:'0:1'}
    ],
    stats:[
      {label:'Schüsse',home:20,away:2,kind:'number'},
      {label:'Schüsse aufs Tor',home:4,away:1,kind:'number'},
      {label:'xG',home:3.03,away:0.33,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:10,away:0,kind:'number'},
      {label:'Großchancen',home:3,away:0,kind:'number'},
      {label:'Ballbesitz',home:70,away:30,kind:'percent'},
      {label:'Ecken',home:8,away:2,kind:'number'},
      {label:'Fouls',home:14,away:11,kind:'number'},
      {label:'Angekommene Pässe',home:'537/623',away:'228/300',kind:'text'},
      {label:'Passquote',home:86,away:76,kind:'percent'},
      {label:'Gewonnene Zweikämpfe',home:81,away:65,kind:'percent'},
      {label:'Gewonnene Kopfbälle',home:46,away:51,kind:'percent'},
      {label:'Gelbe Karten',home:0,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:6.67,away:7.06,kind:'decimal'},
      {label:'Intensive Sprints',home:104,away:88,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':6.5,'Diego Fernández':7.2,'Mareks Istrankins':6.4,'Torric Bruce':6.8,'Kevin Kelly':6.7,
      'Amir Mašić':6.7,'Pol Muñoz':6.7,'Jake Roberts':6.6,'Billy Walker':6.2,'Romano Maisto':6.9,
      'Emerson Escárcega':6.4,"Cormac O'Kane":6.7,'Giacomo Papini':6.5,'Daryl Frame':6.8,'Dom Docherty':6.8,'Gustavo da Silva':7.0
    },
    standout:{player:'Diego Fernández',team:'Finn Harps',rating:7.2,note:'Beste Harps-Note an einem Abend, an dem die völlige statistische Überlegenheit nicht in Tore umgemünzt wird.'},
    leagueAfterMatch:{
      played:8,wins:7,draws:0,losses:1,goalsFor:23,goalsAgainst:1,goalDifference:22,points:21,position:1,
      winningStreakEndedAt:24,currentLeagueWinningStreak:0,table
    },
    analysis:{
      fmMoment:'3,03 zu 0,33 xG und trotzdem 0:1: Die Partie ist ein Musterbeispiel dafür, wie wenig Dominanz ohne Abschlussqualität wert sein kann. Finn Harps erzeugt genug Chancen für mehrere Tore, Bohemian erzielt mit seinem einzigen Schuss aufs Tor den Siegtreffer.',
      sulejmani:'Flavio Sulejmani entscheidet das Spiel in der 25. Minute mit Bohemians einzigem Abschluss auf das Tor. Danach verteidigen die Gäste den schmalen Vorsprung durch die komplette Restspielzeit.',
      wastefulness:'Die Harps kommen auf 20 Abschlüsse und drei Großchancen, bringen aber nur vier Versuche auf das Tor. Der offizielle Spielbericht hebt zusätzlich hervor, dass viele Abschlüsse ihr Ziel deutlich verfehlen und mehrere Abseitsstellungen den Spielfluss brechen.',
      streak:'Nach 24 Premier-Division-Siegen in Serie reißt die außergewöhnliche Laufbahn. Zugleich endet der perfekte Ligastart 2042 nach sieben Siegen, und aus 23:0 Toren werden nach acht Partien 23:1.',
      goalkeeper:'Paulo Henrique wird nach 274 Minuten ohne Gegentor wieder bezwungen. Ausgerechnet der einzige Bohemian-Schuss aufs Tor beendet seine persönliche Serie.',
      table:'Finn Harps bleibt mit 21 Punkten Tabellenführer. Derry City folgt mit 15 Punkten aus erst sechs Spielen und besitzt damit zwei Spiele weniger.'
    },
    notes:[
      'Erste Premier-Division-Niederlage der Saison 2042.',
      'Erstes Ligagegentor 2042: Nach sieben Spielen mit 23:0 steht die Bilanz nun bei 23:1.',
      'Die saisonübergreifende Serie endet nach 24 Premier-Division-Siegen in Folge.',
      'Finn Harps verliert trotz 3,03 xG zu 0,33, 20:2 Schüssen und 70 Prozent Ballbesitz.',
      'Bohemian erzielt mit seinem einzigen Schuss aufs Tor den einzigen Treffer der Partie.',
      'Paulo Henriques Serie endet nach 274 Minuten ohne Gegentor.',
      'Finn Harps bleibt nach acht Ligaspielen mit 21 Punkten Tabellenführer.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Bohemian · 21.03.2042','Finn-Harps-Spielerstatistiken · 21.03.2042','Sportblatt Spielbericht · Finn Harps 0:1 Bohemian']
  };

  upsert(window.FM_MATCHES,match);

  const scheduledIndex=window.FM_FIXTURES.findIndex(entry=>Array.isArray(entry)&&entry[0]==='2042-03-21'&&entry[2]==='Bohemian'&&entry[5]==='Premier Division');
  const scheduledResult=['2042-03-21','19:45','Bohemian','Heim','0:1','Premier Division',0];
  if(scheduledIndex>=0)window.FM_FIXTURES[scheduledIndex]=scheduledResult;
  else if(!window.FM_FIXTURES.some(entry=>Array.isArray(entry)&&entry[0]==='2042-03-21'&&entry[2]==='Bohemian'))window.FM_FIXTURES.push(scheduledResult);

  const bohemian=window.FM_CLUBS.find(x=>x.id==='bohemian'||x.name==='Bohemian'||x.name==='Bohemian FC');
  if(bohemian){
    bohemian.meetings=bohemian.meetings||[];
    const meeting={date:'21.03.2042',competition:'Premier Division',venue:'A',result:'1:0'};
    const idx=bohemian.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)bohemian.meetings[idx]=meeting;else bohemian.meetings.unshift(meeting);
    bohemian.lastMeeting='21.03.2042 · Finn Harps 0:1 Bohemian';
    bohemian.summary='Bohemian gewinnt im Donegal Stadium 1:0. Sulejmani trifft in der 25. Minute mit dem einzigen Schuss der Gäste aufs Tor, während Finn Harps trotz 3,03 xG ohne Treffer bleibt.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-03-21';
    season.latestHeadline='Premier Division: Finn Harps verliert 0:1 gegen Bohemian trotz 3,03 xG und 20:2 Schüssen. Die Serie endet nach 24 Ligasiegen.';
    season.league=season.league||{};
    season.league.current={played:8,wins:7,draws:0,losses:1,goalsFor:23,goalsAgainst:1,goalDifference:22,points:21,position:1};
    season.league.table=table;
    season.league.consecutiveWinsAcrossSeasons=0;
    season.league.endedWinningStreak=24;
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='21.03.2042: Finn Harps verliert zuhause 0:1 gegen Bohemian. Trotz 20:2 Schüssen, 3,03:0,33 xG und 70 Prozent Ballbesitz fällt kein Harps-Tor. Sulejmani trifft in Minute 25; die Serie endet nach 24 Premier-Division-Siegen. Nach acht Ligaspielen stehen 21 Punkte und 23:1 Tore.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-03-21-paulo-henrique-clean-sheet-streak-ended',date:'2042-03-21',player:'Paulo Henrique',type:'streak-ended',title:'Henriques Serie endet nach 274 Minuten',detail:'Bohemians einziger Schuss aufs Tor wird zum 0:1 und beendet 274 Minuten ohne Gegentreffer.'},
    {id:'2042-03-21-diego-fernandez-bohemian',date:'2042-03-21',player:'Diego Fernández',type:'standout',title:'Fernández mit bester Harps-Note',detail:'Erhält beim 0:1 gegen Bohemian mit 7,2 die beste Bewertung der Finn Harps.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-03-21',competition:'Premier Division',fixtureDate:'21.03.2042',
    home:'Finn Harps',away:'Bohemian',score:'0:1',location:'Donegal Stadium · Stranorlar · 12.800 Zuschauer',
    headline:'3,03 xG und trotzdem 0:1: Bohemian beendet die Harps-Serie',
    subheadline:'20:2 Schüsse, 70 Prozent Ballbesitz und drei Großchancen reichen Finn Harps nicht. Flavio Sulejmani trifft mit Bohemians einzigem Schuss aufs Tor und beendet eine Serie von 24 Premier-Division-Siegen.',
    heroStat:{label:'Das Absurde daran',value:'3,03 : 0,33 xG',note:'20:2 Schüsse · Endstand 0:1'},
    sections:[
      {title:'Ein Spiel, das sich gegen seine Zahlen wehrt',text:'Finn Harps dominiert praktisch jede Kennzahl: 70 Prozent Ballbesitz, 20:2 Abschlüsse, 4:1 Schüsse aufs Tor, drei Großchancen und 3,03 xG. Auf der Anzeigetafel bleibt davon nichts übrig.'},
      {title:'Ein Schuss aufs Tor reicht Bohemian',text:'Flavio Sulejmani trifft in der 25. Minute aus kurzer Distanz zum 0:1. Es bleibt Bohemians einziger Schuss aufs Tor und zugleich der einzige Treffer des Abends.'},
      {title:'Viel Druck, zu wenig Präzision',text:'Der Spielbericht beschreibt eine Partie mit vielen Harps-Abschlüssen, die nicht einmal Richtung Tor gehen. Dazu bremsen zahlreiche Abseitsstellungen den Spielfluss. Die Überlegenheit wird dadurch zunehmend steril.'},
      {title:'Nach 24 Siegen reißt die Serie',text:'Die außergewöhnliche Premier-Division-Serie endet bei 24 Erfolgen in Folge. Gleichzeitig kassiert Finn Harps im achten Ligaspiel 2042 das erste Gegentor und die erste Niederlage.'},
      {title:'Die Tabelle bleibt grün, aber die Tür geht auf',text:'Finn Harps bleibt mit 21 Punkten aus acht Spielen Tabellenführer. Derry City steht allerdings bei 15 Punkten aus sechs Partien und hat damit zwei Spiele weniger absolviert.'}
    ],
    verdictHeading:'Peak Football Manager',
    verdict:'Wenn ein 0:1 wirklich den Namen „gegen den Spielverlauf“ verdient, dann dieses. Die Niederlage ist kein Beleg dafür, dass Bohemian Finn Harps spielerisch entschlüsselt hätte. Sie ist eine harte Erinnerung daran, dass Chancenproduktion und Ballkontrolle keine Tore garantieren. Nach 24 Ligasiegen endet die Serie nicht in einem offenen Schlagabtausch, sondern an einem einzigen gegnerischen Schuss aufs Tor.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-03-21-finn-harps-bohemian-0-1',date:'2042-03-21',season:2042,category:'Premier Division',accent:'red',featured:true,
    eyebrow:'PREMIER DIVISION · SERIE GERISSEN',
    title:'Peak Football Manager: Harps verlieren 0:1 trotz 3,03 xG',
    summary:'20:2 Schüsse, 70 Prozent Ballbesitz, drei Großchancen und trotzdem 0:1. Sulejmani trifft mit Bohemians einzigem Schuss aufs Tor und beendet 24 Harps-Ligasiege in Serie.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','bohemian','season-2042','premier-division']
  });
})();