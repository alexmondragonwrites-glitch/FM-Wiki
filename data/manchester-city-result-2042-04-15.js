(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2042-04-15-man-city-finn-harps-champions-league-quarterfinal-second-leg';
  const reportId='2042-04-15-man-city-finn-harps-0-3-spielbericht';

  const match={
    id:fixtureId,date:'2042-04-15',season:2042,competition:'UEFA Champions League',stage:'Viertelfinale · Rückspiel',
    home:{id:'man-city',name:'Manchester City',short:'MCI',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    score:'0:3',homeGoals:0,awayGoals:3,halfTime:'0:3',aggregateAfterMatch:'0:4',
    venue:'City of Manchester Stadium',location:'Manchester, England',attendance:58990,awayFans:945,weather:'Feucht · 12 °C',
    headline:'Papini-Doppelpack und Frame-Hammer: Finn Harps zerlegt Manchester City 3:0 und zieht mit 4:0 ins Halbfinale ein',
    verdict:'Aus einem knappen 1:0-Vorsprung wird in Manchester ein europäisches Ausrufezeichen. Giacomo Papini trifft in der 5. und 15. Minute, Daryl Frame setzt in der 41. Minute den dritten Treffer. Manchester City hat zwar mehr Abschlüsse und 1,07 xG, doch Finn Harps bringt alle sechs eigenen Schüsse aufs Tor und gewinnt mit 3:0. Über beide Spiele bleibt City ohne Tor; mit 4:0 insgesamt ziehen die Harps souverän ins Champions-League-Halbfinale ein.',
    scorers:[
      {player:'Giacomo Papini',team:'Finn Harps',goals:2,minutes:[5,15]},
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[41]}
    ],
    events:[
      {minute:5,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'0:1'},
      {minute:15,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'0:2'},
      {minute:17,type:'yellow',team:'Manchester City',player:'Juan Martín Montano',text:'Gelbe Karte'},
      {minute:41,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:3 · Schlenzer aus rund 20 Metern'}
    ],
    stats:[
      {label:'Schüsse',home:13,away:6,kind:'number'},
      {label:'Schüsse aufs Tor',home:5,away:6,kind:'number'},
      {label:'xG',home:1.07,away:0.82,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:0,kind:'number'},
      {label:'Großchancen',home:0,away:0,kind:'number'},
      {label:'Ballbesitz',home:43,away:57,kind:'percent'},
      {label:'Ecken',home:4,away:4,kind:'number'},
      {label:'Fouls',home:10,away:14,kind:'number'},
      {label:'Angekommene Pässe',home:'370/429',away:'495/574',kind:'text'},
      {label:'Passquote',home:86,away:86,kind:'percent'},
      {label:'Gewonnene Zweikämpfe',home:76,away:84,kind:'percent'},
      {label:'Gewonnene Kopfbälle',home:40,away:53,kind:'percent'},
      {label:'Gelbe Karten',home:1,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:6.51,away:7.40,kind:'decimal'},
      {label:'Intensive Sprints',home:148,away:117,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':8.1,'Callum Brennan':7.0,'Daniele Di Maio':7.2,'Torric Bruce':7.1,'Kevin Kelly':6.8,
      'Amir Mašić':7.9,'Daryl Frame':7.6,'Diego Fernández':6.8,'Giacomo Papini':8.7,'Dom Docherty':6.7,
      'Emerson Escárcega':7.8,'Gustavo da Silva':7.0,'Pol Muñoz':6.6,"Jim O'Neill":6.8,'Jake Roberts':6.7,'Romano Maisto':6.5
    },
    standout:{player:'Giacomo Papini',team:'Finn Harps',rating:8.7,goals:2,note:'Doppelpack in den ersten 15 Minuten und damit der entscheidende Mann des Rückspiels.'},
    milestones:[
      {player:'Marian Peterges',team:'Manchester City',milestone:'325. Einsatz für Manchester City'},
      {player:'Daniele Di Maio',team:'Finn Harps',milestone:'25. Einsatz für Finn Harps'},
      {player:'Torric Bruce',team:'Finn Harps',milestone:'200. Profispiel'}
    ],
    analysis:{
      firstQuarterHour:'Die Harps nehmen dem Etihad sofort die Hoffnung. Papini profitiert zunächst von einem Fehler Ruvalcabas und trifft in Minute 5. Zehn Minuten später legt er zum 0:2 nach. Aus einem 1:0-Gesamtstand wird binnen einer Viertelstunde ein 3:0.',
      frame:'Daryl Frame macht den Abend noch vor der Pause endgültig zu. Sein Schlenzer aus etwa 20 Metern zum 0:3 in der 41. Minute zwingt Manchester City zu fünf Toren für das Weiterkommen.',
      efficiency:'Manchester City kommt auf 13 Abschlüsse und 1,07 xG, Finn Harps nur auf sechs Schüsse und 0,82 xG. Der Unterschied liegt in der Präzision: Alle sechs Harps-Abschlüsse gehen aufs Tor, drei davon hinein.',
      control:'Trotz Citys Schusszahl besitzen die Harps 57 Prozent Ballbesitz und bringen 495 Pässe an. Das Rückspiel wird nicht durch einen tiefen Belagerungszustand überlebt, sondern mit eigener Ballkontrolle und hoher Zweikampfquote gemanagt.',
      cleanSheetTie:'Über 180 Minuten erzielt Manchester City kein einziges Tor. Nach dem 1:0 im Donegal Stadium folgt ein 3:0 in Manchester. Der Gesamtstand von 4:0 ist ein Statement gegen einen der teuersten Kader Europas.',
      peterges:'Marian Peterges absolviert seinen 325. Einsatz für Manchester City, erlebt gegen seinen früheren Klub aber ein bitteres Ausscheiden. Die besondere Ex-Harps-Geschichte endet diesmal klar zugunsten von Finn Harps.'
    },
    notes:[
      'Finn Harps gewinnt das Champions-League-Viertelfinal-Rückspiel bei Manchester City 3:0.',
      'Gesamtstand nach Hin- und Rückspiel: Manchester City 0:4 Finn Harps.',
      'Giacomo Papini trifft in der 5. und 15. Minute und erhält mit 8,7 die beste Harps-Note.',
      'Daryl Frame erzielt in der 41. Minute das 0:3.',
      'Paulo Henrique bleibt auch im Rückspiel ohne Gegentor und erhält die Note 8,1.',
      'Finn Harps steht im Halbfinale der UEFA Champions League 2041/42.'
    ],
    sources:['FM-Spielübersicht Manchester City – Finn Harps · 15.04.2042','Finn-Harps-Spielerstatistiken · 15.04.2042','90min.com Spielbericht · Champions-League-Viertelfinale Rückspiel']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-04-15','20:00','Manchester City','Auswärts','3:0','UEFA Champions League · Viertelfinale Rückspiel',1];
  const fidx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]==='2042-04-15'&&/Manchester City|Man City/.test(x[2]||''));
  if(fidx>=0)window.FM_FIXTURES[fidx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const city=window.FM_CLUBS.find(x=>x.id==='man-city'||x.id==='manchester-city'||x.name==='Manchester City'||x.name==='Man City');
  if(city){
    city.status='complete';city.season=2042;city.completion=Math.max(city.completion||0,96);
    city.meetings=city.meetings||[];
    const meeting={date:'15.04.2042',competition:'UEFA Champions League · Viertelfinale Rückspiel',venue:'H',result:'0:3'};
    const idx=city.meetings.findIndex(x=>x.date==='15.04.2042');
    if(idx>=0)city.meetings[idx]=meeting;else city.meetings.unshift(meeting);
    city.lastMeeting='15.04.2042 · Manchester City 0:3 Finn Harps';
    city.summary='Manchester City scheidet im Champions-League-Viertelfinale 2042 mit 0:4 insgesamt gegen Finn Harps aus. Nach dem 0:1 in Donegal verliert City das Rückspiel zuhause 0:3; Papini trifft doppelt, Frame einmal.';
    city.currentTie={competition:'UEFA Champions League',stage:'Viertelfinale',firstLeg:'Finn Harps 1:0 Manchester City',secondLeg:'Manchester City 0:3 Finn Harps',aggregate:'Manchester City 0:4 Finn Harps',status:'Beendet · Finn Harps weiter'};
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-04-15';
    season.latestHeadline='Champions League: Finn Harps zerlegt Manchester City im Rückspiel 3:0 und zieht mit 4:0 insgesamt ins Halbfinale ein.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.quarterFinal={
      ...(season.championsLeague.quarterFinal||{}),opponent:'Manchester City',
      firstLeg:{date:'2042-04-09',venue:'Donegal Stadium',result:'1:0'},
      secondLeg:{date:'2042-04-15',venue:'City of Manchester Stadium',result:'3:0'},
      aggregate:'4:0',status:'Beendet · Finn Harps im Halbfinale'
    };
    season.championsLeague.semiFinal={...(season.championsLeague.semiFinal||{}),status:'Erreicht',opponent:'Offen'};
    season.nextFocus={competition:'UEFA Champions League',stage:'Halbfinale',opponent:'Offen',status:'Qualifiziert'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='15.04.2042: Finn Harps gewinnt bei Manchester City 3:0 und zieht mit 4:0 insgesamt ins Champions-League-Halbfinale ein. Papini trifft doppelt in den ersten 15 Minuten, Frame macht vor der Pause das 0:3.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-04-15-papini-man-city-double',date:'2042-04-15',player:'Giacomo Papini',type:'standout',title:'Papini schießt City aus der Champions League',detail:'Trifft in der 5. und 15. Minute beim 3:0 in Manchester und erhält die Note 8,7.'},
    {id:'2042-04-15-frame-man-city-goal',date:'2042-04-15',player:'Daryl Frame',type:'goal',title:'Frame setzt den Halbfinal-Stempel',detail:'Schlenzt in der 41. Minute aus rund 20 Metern zum 3:0 ein.'},
    {id:'2042-04-15-henrique-man-city-clean-sheet',date:'2042-04-15',player:'Paulo Henrique',type:'standout',title:'Henrique hält City über zwei Spiele torlos',detail:'Note 8,1 im Rückspiel; Finn Harps gewinnt das Viertelfinale insgesamt 4:0 ohne Gegentor.'},
    {id:'2042-04-15-di-maio-25',date:'2042-04-15',player:'Daniele Di Maio',type:'milestone',title:'25 Harps-Einsätze für Di Maio',detail:'Erreicht beim 3:0-Auswärtssieg in Manchester seinen 25. Einsatz für Finn Harps.'},
    {id:'2042-04-15-torric-bruce-200',date:'2042-04-15',player:'Torric Bruce',type:'milestone',title:'200 Profispiele für Torric Bruce',detail:'Erreicht die Marke beim Champions-League-Sieg in Manchester.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-04-15',competition:'UEFA Champions League',fixtureDate:'15.04.2042',
    home:'Manchester City',away:'Finn Harps',score:'0:3',location:'City of Manchester Stadium · Manchester · 58.990 Zuschauer',
    headline:'Aus 1:0 wird 4:0: Finn Harps demontiert Manchester City und steht im Halbfinale',
    subheadline:'Giacomo Papini trifft zweimal in den ersten 15 Minuten, Daryl Frame legt noch vor der Pause nach. Aus dem knappen Hinspielsieg wird im Etihad ein 3:0 und ein 4:0-Gesamtsieg ohne Gegentor.',
    heroStat:{label:'Gesamtstand',value:'4:0',note:'Finn Harps gewinnt beide Viertelfinalspiele gegen Manchester City zu null'},
    sections:[
      {title:'Papini nimmt City in zehn Minuten die Hoffnung',text:'Manchester City beginnt mit einem 0:1-Rückstand aus Donegal, doch statt einer frühen Aufholjagd folgt der nächste Schlag. Papini trifft in der 5. Minute nach einem Fehler in Citys Defensive und legt in Minute 15 zum 0:2 nach. Plötzlich braucht City vier Tore nur für die Verlängerung.'},
      {title:'Frame macht aus Spannung eine Demonstration',text:'In der 41. Minute schlenzt Daryl Frame den Ball aus rund 20 Metern in den Winkel. Mit dem 0:3 ist das Viertelfinale noch vor der Pause praktisch entschieden. Der Gesamtstand lautet zu diesem Zeitpunkt 0:4.'},
      {title:'Sechs Schüsse, sechs aufs Tor',text:'City kommt auf 13 Abschlüsse und 1,07 xG, Finn Harps nur auf sechs Schüsse und 0,82 xG. Aber jeder einzelne Harps-Abschluss geht aufs Tor. Drei davon sitzen. Diese Präzision verwandelt ein statistisch engeres Spiel in einen klaren Auswärtssieg.'},
      {title:'Nicht verteidigt, sondern kontrolliert',text:'Die Harps haben 57 Prozent Ballbesitz, 495 angekommene Pässe und gewinnen 84 Prozent ihrer ausgewiesenen Zweikämpfe. Trotz des Vorsprungs ziehen sie sich nicht vollständig zurück, sondern halten City mit eigenem Ballbesitz aus langen Druckphasen heraus.'},
      {title:'Über 180 Minuten kein City-Tor',text:'Der vielleicht größte Wert dieser beiden Spiele liegt in der defensiven Bilanz. Ein Kader um Kouamé, Gül, Compagnucci und den ehemaligen Harps-Spielmacher Peterges erzielt in 180 Minuten kein einziges Tor. Das 4:0 insgesamt ist deshalb nicht nur effizient, sondern ein Statement über die Reife dieser Mannschaft.'},
      {title:'Peterges-Jubiläum endet bitter',text:'Marian Peterges absolviert seinen 325. Einsatz für Manchester City. Gegen seinen früheren Klub endet der Abend dennoch mit einem 0:3 und dem Ausscheiden. Die Rückkehrgeschichte gehört diesmal vollständig Finn Harps.'}
    ],
    verdictHeading:'Vom knappen Vorsprung zur europäischen Machtdemonstration',
    verdict:'Nach dem 1:0 im Hinspiel war alles offen. Sechs Tage später steht ein 4:0-Gesamtsieg. Finn Harps gewinnt nicht nur gegen Manchester City, sondern nimmt dem englischen Schwergewicht über beide Spiele jede Antwort. Damit ist das Halbfinale erreicht und aus einer starken Champions-League-Saison wieder ein echter Titelangriff geworden.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-04-15-man-city-finn-harps-quarterfinal',date:'2042-04-15',season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · VIERTELFINALE · GESAMT 4:0',
    title:'Papini-Doppelpack: Harps zerlegen City und stehen im Halbfinale',
    summary:'Finn Harps gewinnt nach dem 1:0 im Hinspiel auch in Manchester. Papini trifft doppelt, Frame legt nach; das 3:0 macht den 4:0-Gesamtsieg perfekt.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','man-city','giacomo-papini','daryl-frame','paulo-henrique','champions-league','season-2042']
  });
})();