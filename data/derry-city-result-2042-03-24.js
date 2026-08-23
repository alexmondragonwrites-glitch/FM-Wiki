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

  const fixtureId='2042-03-24-derry-city-finn-harps-premier-division';
  const reportId='2042-03-24-derry-city-finn-harps-2-1-spielbericht';

  const table=[
    {position:1,club:'Finn Harps',played:9,wins:7,draws:0,losses:2,goalsFor:24,goalsAgainst:3,goalDifference:21,points:21},
    {position:2,club:'Derry City',played:7,wins:6,draws:0,losses:1,goalsFor:14,goalsAgainst:5,goalDifference:9,points:18},
    {position:3,club:'Shamrock Rovers',played:9,wins:4,draws:2,losses:3,goalsFor:15,goalsAgainst:16,goalDifference:-1,points:14},
    {position:4,club:'Waterford',played:9,wins:4,draws:1,losses:4,goalsFor:11,goalsAgainst:12,goalDifference:-1,points:13},
    {position:5,club:'Bohemian',played:6,wins:3,draws:1,losses:2,goalsFor:6,goalsAgainst:7,goalDifference:-1,points:10},
    {position:6,club:'Athlone Town',played:8,wins:3,draws:1,losses:4,goalsFor:9,goalsAgainst:12,goalDifference:-3,points:10},
    {position:7,club:'Sligo Rovers',played:8,wins:3,draws:0,losses:5,goalsFor:10,goalsAgainst:16,goalDifference:-6,points:9},
    {position:8,club:'Cork City',played:9,wins:2,draws:3,losses:4,goalsFor:8,goalsAgainst:14,goalDifference:-6,points:9},
    {position:9,club:"St Patrick's Athletic",played:5,wins:1,draws:1,losses:3,goalsFor:1,goalsAgainst:4,goalDifference:-3,points:4},
    {position:10,club:'UCD',played:8,wins:1,draws:1,losses:6,goalsFor:12,goalsAgainst:21,goalDifference:-9,points:4}
  ];

  const match={
    id:fixtureId,date:'2042-03-24',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'derry-city',name:'Derry City',short:'DER',score:2},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    score:'2:1',homeGoals:2,awayGoals:1,halfTime:'1:1',
    venue:'Ryan McBride Brandywell',location:'Derry, Nordirland',attendance:7381,awayFans:369,weather:'Starker Wind · feucht · 8 °C',referee:'Robert Hennessy',
    headline:'Zweite Pleite in Folge: Derry schlägt Finn Harps im North-West-Derby 2:1',
    verdict:'Aus dem perfekten Ligastart ist innerhalb weniger Tage ein echter Warnschuss geworden. Nach dem absurden 0:1 gegen Bohemian verliert Finn Harps nun auch das North-West-Derby bei Derry City. Andy Clark trifft bereits in der 3. Minute, Romano Maisto antwortet zwei Minuten später per Freistoß, doch Kieran McClelland entscheidet die Partie in Minute 61. Finn Harps hat 70 Prozent Ballbesitz und 11:7 Schüsse, Derry erzeugt mit 5:3 Schüssen aufs Tor und 1,73:1,38 xG aber die gefährlicheren Situationen. Besonders bitter: Der Spielbericht hebt Derrys Stärke bei ruhenden Bällen als entscheidenden Faktor hervor.',
    scorers:[
      {player:'Andy Clark',team:'Derry City',goals:1,minutes:[3]},
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:[5],setPiece:'Freistoß'},
      {player:'Kieran McClelland',team:'Derry City',goals:1,minutes:[61]}
    ],
    events:[
      {minute:3,type:'goal',team:'Derry City',player:'Andy Clark',text:'1:0'},
      {minute:4,type:'yellow',team:'Derry City',player:'Calum Jenks',text:'Gelbe Karte'},
      {minute:5,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'1:1 · Freistoß'},
      {minute:61,type:'goal',team:'Derry City',player:'Kieran McClelland',text:'2:1'}
    ],
    stats:[
      {label:'Schüsse',home:7,away:11,kind:'number'},
      {label:'Schüsse aufs Tor',home:5,away:3,kind:'number'},
      {label:'xG',home:1.73,away:1.38,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:1,away:5,kind:'number'},
      {label:'Großchancen',home:2,away:0,kind:'number'},
      {label:'Ballbesitz',home:30,away:70,kind:'percent'},
      {label:'Ecken',home:6,away:3,kind:'number'},
      {label:'Fouls',home:15,away:18,kind:'number'},
      {label:'Angekommene Pässe',home:'212/292',away:'491/563',kind:'text'},
      {label:'Passquote',home:73,away:87,kind:'percent'},
      {label:'Gewonnene Zweikämpfe',home:84,away:95,kind:'percent'},
      {label:'Gewonnene Kopfbälle',home:47,away:52,kind:'percent'},
      {label:'Gelbe Karten',home:1,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:6.92,away:6.74,kind:'decimal'},
      {label:'Intensive Sprints',home:80,away:88,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':6.4,'Callum Brennan':7.3,'Daniele Di Maio':6.8,'Torric Bruce':6.7,'Gustavo da Silva':6.7,
      "Jim O'Neill":6.8,'Daryl Frame':6.5,"Cormac O'Kane":6.9,'Giacomo Papini':7.1,'Romano Maisto':7.4,
      'Justin Ramsey':6.7,'Jake Roberts':6.8,'Billy Walker':6.4,'Pol Muñoz':6.4,'Kevin Kelly':6.5,'Emerson Escárcega':6.3
    },
    standout:{player:'Romano Maisto',team:'Finn Harps',rating:7.4,goals:1,note:'Gleicht in der 5. Minute per Freistoß aus und erzielt damit sein 25. Ligator für Finn Harps.'},
    leagueAfterMatch:{
      played:9,wins:7,draws:0,losses:2,goalsFor:24,goalsAgainst:3,goalDifference:21,points:21,position:1,
      currentLeagueLosingStreak:2,previousWinningStreakEndedAt:24,table
    },
    analysis:{
      secondLoss:'Nach sieben Siegen aus sieben Ligaspielen folgen erstmals 2042 zwei Niederlagen hintereinander. Aus 23:0 Toren und 21 Punkten nach sieben Partien werden nach neun Spielen 24:3 Tore und weiterhin 21 Punkte.',
      contrast:'Das 0:1 gegen Bohemian war statistisch grotesk. Diese Niederlage ist anders: Finn Harps kontrolliert zwar den Ball, Derry erzeugt aber die besseren Abschlüsse. 5:3 Schüsse aufs Tor und 1,73:1,38 xG sprechen für die Gastgeber.',
      setPieces:'Der offizielle Spielbericht macht ruhende Bälle zum roten Faden des Derbys. Gerade gegen einen direkten Titelrivalen ist das ein deutlich ernsteres Warnsignal als die Chancenverwertung gegen Bohemian.',
      maisto:'Romano Maisto antwortet nur zwei Minuten nach dem frühen Rückstand mit einem Freistoßtor. Mit Note 7,4 ist er der beste Harps-Spieler und erreicht zugleich sein 25. Ligator für den Klub.',
      titleRace:'Finn Harps bleibt mit 21 Punkten Tabellenführer, doch Derry steht nach sieben Spielen bereits bei 18 Punkten. Der Rivale liegt nur drei Punkte zurück und hat zwei Spiele weniger absolviert.',
      attack:'Emerson Escárcega bleibt mit 6,3 unauffällig und kommt laut Spielanalyse auf keine herausgespielte Chance. Der Ballbesitz von 70 Prozent führt insgesamt nur zu drei Abschlüssen aufs Tor.'
    },
    notes:[
      'Zweite Premier-Division-Niederlage in Folge nach dem 0:1 gegen Bohemian.',
      'Finn Harps steht nach neun Ligaspielen bei 21 Punkten und 24:3 Toren.',
      'Derry City verkürzt mit zwei Spielen weniger auf drei Punkte Rückstand.',
      'Romano Maisto erzielt per Freistoß sein 25. Ligator für Finn Harps.',
      'Callum Brennan absolviert sein 175. Profispiel.',
      'Jim O’Neill absolviert sein 250. Ligaspiel seiner Karriere.',
      'Derry ist mit 5:3 Schüssen aufs Tor und 1,73:1,38 xG die gefährlichere Mannschaft.'
    ],
    sources:['FM-Spielübersicht Derry City – Finn Harps · 24.03.2042','Finn-Harps-Spielerstatistiken · 24.03.2042','Maxifoot Spielbericht · Derry City 2:1 Finn Harps']
  };

  upsert(window.FM_MATCHES,match);

  const exactFixtureIndex=window.FM_FIXTURES.findIndex(entry=>Array.isArray(entry)&&entry[0]==='2042-03-24'&&entry[2]==='Derry City'&&entry[5]==='Premier Division');
  const rescheduledFixtureIndex=window.FM_FIXTURES.findIndex(entry=>Array.isArray(entry)&&entry[0]==='2042-03-07'&&entry[2]==='Derry City'&&entry[5]==='Premier Division'&&!entry[4]);
  const scheduledResult=['2042-03-24','19:45','Derry City','Auswärts','1:2','Premier Division',0];
  if(exactFixtureIndex>=0)window.FM_FIXTURES[exactFixtureIndex]=scheduledResult;
  else if(rescheduledFixtureIndex>=0)window.FM_FIXTURES[rescheduledFixtureIndex]=scheduledResult;
  else if(!window.FM_FIXTURES.some(entry=>Array.isArray(entry)&&entry[0]==='2042-03-24'&&entry[2]==='Derry City'))window.FM_FIXTURES.push(scheduledResult);

  const derry=window.FM_CLUBS.find(x=>x.id==='derry-city'||x.name==='Derry City'||x.name==='Derry City FC');
  if(derry){
    derry.meetings=derry.meetings||[];
    const meeting={date:'24.03.2042',competition:'Premier Division',venue:'H',result:'2:1'};
    const idx=derry.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)derry.meetings[idx]=meeting;else derry.meetings.unshift(meeting);
    derry.lastMeeting='24.03.2042 · Derry City 2:1 Finn Harps';
    derry.summary='Derry gewinnt das North-West-Derby 2:1. Clark trifft früh, Maisto gleicht per Freistoß aus und McClelland entscheidet die Partie in der 61. Minute. Damit rückt Derry mit zwei Spielen weniger bis auf drei Punkte an den Tabellenführer heran.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-03-24';
    season.latestHeadline='Premier Division: Zweite Niederlage in Folge. Finn Harps verliert das North-West-Derby bei Derry City 1:2; der Vorsprung schrumpft auf drei Punkte bei zwei Spielen mehr.';
    season.league=season.league||{};
    season.league.current={played:9,wins:7,draws:0,losses:2,goalsFor:24,goalsAgainst:3,goalDifference:21,points:21,position:1};
    season.league.table=table;
    season.league.currentLosingStreak=2;
    season.league.endedWinningStreak=24;
    season.nextFocus={competition:'UEFA Champions League',stage:'Viertelfinale',status:'ausgelost',opponent:'Man City'};
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='24.03.2042: Finn Harps verliert bei Derry City 1:2 und kassiert damit die zweite Ligapleite in Folge. Maisto trifft per Freistoß zum zwischenzeitlichen 1:1; Clark und McClelland treffen für Derry. Nach neun Ligaspielen stehen 21 Punkte und 24:3 Tore. Derry liegt mit zwei Spielen weniger nur drei Punkte zurück.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-03-24-romano-maisto-25-league-goals',date:'2042-03-24',player:'Romano Maisto',type:'milestone',title:'Maisto erreicht 25 Ligatore für Finn Harps',detail:'Trifft in der 5. Minute per Freistoß zum 1:1 und erhält mit 7,4 die beste Harps-Note.'},
    {id:'2042-03-24-callum-brennan-175-pro-games',date:'2042-03-24',player:'Callum Brennan',type:'milestone',title:'Brennan absolviert 175. Profispiel',detail:'Der Außenverteidiger erreicht im North-West-Derby seinen 175. Einsatz als Profi und erhält Note 7,3.'},
    {id:'2042-03-24-jim-oneill-250-league-games',date:'2042-03-24',player:"Jim O'Neill",type:'milestone',title:'O’Neill erreicht 250 Ligaspiele',detail:'Im Derby gegen Derry absolviert Jim O’Neill sein 250. Ligaspiel der Karriere.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-03-24',competition:'Premier Division',fixtureDate:'24.03.2042',
    home:'Derry City',away:'Finn Harps',score:'2:1',location:'Ryan McBride Brandywell · Derry · 7.381 Zuschauer',
    headline:'Jetzt wird es ernst: Derry fügt Harps die zweite Niederlage in Folge zu',
    subheadline:'Andy Clark trifft nach drei Minuten, Romano Maisto antwortet sofort per Freistoß, doch Kieran McClelland entscheidet das North-West-Derby nach der Pause. Finn Harps bleibt Erster, Derry ist mit zwei Spielen weniger aber nur noch drei Punkte entfernt.',
    heroStat:{label:'Formknick',value:'2 Spiele · 0 Punkte · 1:3 Tore',note:'Zuvor: 7 Ligaspiele · 7 Siege · 23:0 Tore'},
    sections:[
      {title:'Vom Traumstart zum ersten echten Dämpfer',text:'Vor wenigen Tagen stand Finn Harps nach sieben Ligaspielen bei 21 Punkten und 23:0 Toren. Nun folgen auf das 0:1 gegen Bohemian und das 1:2 in Derry zwei Niederlagen hintereinander. Der Tabellenführer hat nach neun Partien weiterhin 21 Punkte.'},
      {title:'Maisto antwortet sofort',text:'Derry geht durch Andy Clark bereits in der 3. Minute in Führung. Nur zwei Minuten später schlägt Romano Maisto mit einem direkten Freistoß aus rund 19 Metern zurück. Für Maisto ist es zugleich das 25. Ligator im Trikot der Finn Harps.'},
      {title:'Derry ist trotz weniger Ball gefährlicher',text:'Finn Harps hat 70 Prozent Ballbesitz, 87 Prozent Passquote und 11:7 Schüsse. Entscheidend sind aber die gefährlichen Abschlüsse: Derry führt bei Schüssen aufs Tor 5:3 und beim xG 1,73:1,38. Kieran McClelland nutzt in der 61. Minute eine dieser Situationen zum Siegtreffer.'},
      {title:'Standards werden zum Warnsignal',text:'Der Spielbericht beschreibt Derrys ruhende Bälle als entscheidende Waffe. Nach der extrem unglücklichen Bohemian-Niederlage ist das diesmal ein konkreter taktischer Ansatzpunkt: Gegen einen direkten Rivalen entstehen zu viele gefährliche Situationen aus Standards und zweiten Bällen.'},
      {title:'Der Titelkampf ist plötzlich offen',text:'Finn Harps führt mit 21 Punkten aus neun Spielen. Derry City steht bei 18 Punkten aus erst sieben Partien. Aus dem komfortablen Vorsprung nach dem perfekten Saisonstart ist damit ein echter Zweikampf geworden.'}
    ],
    verdictHeading:'Keine Katastrophe, aber erstmals eine kleine Krise',
    verdict:'Die beiden Niederlagen erzählen unterschiedliche Geschichten. Gegen Bohemian versagte vor allem die Chancenverwertung, in Derry ist der Gegner tatsächlich effizienter und gefährlicher. Das macht die zweite Pleite relevanter. Finn Harps ist weiterhin Tabellenführer und europäisch im Viertelfinale, aber der nationale Autopilot ist fürs Erste ausgeschaltet.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-03-24-derry-city-finn-harps-2-1',date:'2042-03-24',type:'Liga',importance:'high',category:'Premier Division',accent:'red',featured:true,
    eyebrow:'PREMIER DIVISION · NORTH-WEST-DERBY',
    title:'Zweite Niederlage in Folge: Derry zieht Harps in den Titelkampf',
    summary:'Finn Harps verliert nach dem 0:1 gegen Bohemian auch in Derry. Maistos Freistoß reicht nicht: Clark und McClelland sorgen für das 2:1. Derry liegt mit zwei Spielen weniger nur drei Punkte zurück.',
    href:`presse.html?id=${reportId}`
  });
})();