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

  const date='2042-05-09';
  const fixtureId='2042-05-09-finn-harps-athlone-town-premier-division';
  const reportId='2042-05-09-finn-harps-athlone-town-5-1-spielbericht';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    away:{id:'athlone-town',name:'Athlone Town',short:'ATH',score:1},
    score:'5:1',homeGoals:5,awayGoals:1,halfTime:'2:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12355,weather:'Böig · 19 °C',referee:'Callum Gallagher',
    headline:'Barry übernimmt im Ligaalltag: Finn Harps schlagen Athlone 5:1',
    verdict:'Nach dem kräftezehrenden Champions-League-Halbfinale gegen Barcelona schaltet Finn Harps ohne Anlaufprobleme zurück in den Ligaalltag. Ben Barry erzielt einen Hattrick, Jake Roberts und Rückkehrer Justin Ramsey treffen ebenfalls. Es ist der siebte Ligasieg in Folge.',
    scorers:[
      {player:'Ben Barry',team:'Finn Harps',goals:3,minutes:[10,55,69],penalties:[69]},
      {player:'Jake Roberts',team:'Finn Harps',goals:1,minutes:[17]},
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[72]},
      {player:'Galdur Guðmundsson',team:'Athlone Town',goals:1,minutes:[61]}
    ],
    events:[
      {minute:10,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'1:0'},
      {minute:17,type:'goal',team:'Finn Harps',player:'Jake Roberts',text:'2:0'},
      {minute:55,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'3:0'},
      {minute:61,type:'goal',team:'Athlone Town',player:'Galdur Guðmundsson',text:'3:1'},
      {minute:69,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'4:1 · Elfmeter'},
      {minute:72,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'5:1'}
    ],
    stats:[
      {label:'Schüsse',home:26,away:3,kind:'number'},
      {label:'Schüsse aufs Tor',home:10,away:2,kind:'number'},
      {label:'xG',home:4.10,away:0.42,kind:'decimal'},
      {label:'Ballbesitz',home:77,away:23,kind:'percent'},
      {label:'Ecken',home:19,away:2,kind:'number'},
      {label:'Fouls',home:9,away:30,kind:'number'},
      {label:'Angekommene Pässe',home:'88% (560/624)',away:'69% (164/236)',kind:'text'}
    ],
    ratings:{
      'Evan Reilly':6.8,'Diego Fernández':6.8,'Daniele Di Maio':6.6,'Mareks Istrankins':6.8,'Kevin Kelly':6.9,
      'Amir Mašić':7.2,'Daryl Frame':6.9,'Jake Roberts':8.2,'Giacomo Papini':6.7,'Dom Docherty':7.3,
      'Ben Barry':9.4,'Gustavo da Silva':6.8,'Pol Muñoz':8.2,'Callum Brennan':6.7,"Jim O'Neill":6.9,'Justin Ramsey':7.2
    },
    standout:{player:'Ben Barry',team:'Finn Harps',rating:9.4,note:'Hattrick in den Minuten 10, 55 und 69. Der 18-Jährige übernimmt im ersten Ligaspiel nach dem Barcelona-Halbfinale die Hauptrolle.'},
    leagueAfterMatch:{played:16,wins:14,draws:0,losses:2,goalsFor:49,goalsAgainst:6,goalDifference:43,points:42,position:1},
    analysis:{
      everyday:'Nach dem 120-Minuten-Kampf gegen Barcelona wirkt der Wechsel zurück in den Ligaalltag erstaunlich reibungslos. Finn Harps kontrolliert Athlone mit 77 Prozent Ballbesitz und 26:3 Schüssen.',
      barry:'Ben Barry setzt ein starkes Zeichen. Mit drei Treffern übernimmt der 18-Jährige genau in jener Phase offensive Verantwortung, in der Emerson Escárcega verletzt fehlt und für das Champions-League-Finale fraglich ist.',
      youth:'Jake Roberts trifft ebenfalls und unterstreicht, wie viel junge Qualität inzwischen selbst in einer rotierenden Harps-Elf steckt.',
      ramsey:'Justin Ramsey erzielt in Minute 72 das 5:1 und sammelt nach seiner Verletzung weitere wertvolle Minuten und Rhythmus vor dem Saisonhöhepunkt.',
      final:'Der Blick bleibt trotz Ligaalltag auf Athen gerichtet. Manchester United wartet im Champions-League-Finale, doch Finn Harps verliert national weder Fokus noch Intensität.'
    },
    milestones:[
      'Justin Ramsey absolviert sein 200. Spiel als Profi.',
      'Ben Barry erzielt einen Hattrick gegen Athlone Town.',
      'Finn Harps feiert den siebten Ligasieg in Folge.'
    ],
    notes:[
      'Finn Harps gewinnt 5:1 gegen Athlone Town.',
      'Ben Barry trifft dreifach: 10., 55. und 69. Minute per Elfmeter.',
      'Jake Roberts trifft in Minute 17, Justin Ramsey in Minute 72.',
      'Athlones Galdur Guðmundsson erzielt in Minute 61 das zwischenzeitliche 3:1.',
      'Finn Harps steht nach 16 Ligaspielen bei 42 Punkten und 49:6 Toren.',
      'Der Fokus bleibt auf dem Champions-League-Finale gegen Manchester United in Athen.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Athlone Town · 09.05.2042','Finn-Harps-Spielerstatistiken · 09.05.2042','Planet-Football-Spielbericht · 09.05.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-05-09','19:45','Athlone Town','Heim','5:1','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&['Athlone Town','Athlone Town FC'].includes(x[2])&&x[5]==='Premier Division'&&x[0]===date);
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const athlone=window.FM_CLUBS.find(x=>x.id==='athlone-town'||x.name==='Athlone Town'||x.name==='Athlone Town FC');
  if(athlone){
    athlone.meetings=athlone.meetings||[];
    const meeting={date:'09.05.2042',competition:'Premier Division',venue:'H',result:'5:1'};
    const idx=athlone.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)athlone.meetings[idx]=meeting;else athlone.meetings.unshift(meeting);
    athlone.lastMeeting='09.05.2042 · Finn Harps 5:1 Athlone Town';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Premier Division: Finn Harps schlägt Athlone Town 5:1. Ben Barry erzielt einen Hattrick, Roberts und Ramsey treffen ebenfalls.';
    season.league=season.league||{};
    season.league.current={played:16,wins:14,draws:0,losses:2,goalsFor:49,goalsAgainst:6,goalDifference:43,points:42,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Finale',opponent:'Manchester United',venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland',status:'Finale erreicht',form:'7 Ligasiege in Folge',availability:['Emerson Escárcega: Handgelenksfraktur · Finaleinsatz sehr fraglich']};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='09.05.2042: Zurück im Ligaalltag gewinnt Finn Harps 5:1 gegen Athlone Town. Ben Barry erzielt einen Hattrick (10., 55., 69./Elfmeter), Jake Roberts trifft zum 2:0 und Justin Ramsey zum 5:1. 26:3 Schüsse, 77 Prozent Ballbesitz, siebter Ligasieg in Folge. Liga: 16 Spiele, 42 Punkte, 49:6 Tore.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-05-09-ben-barry-hattrick-athlone',date,player:'Ben Barry',type:'performance',title:'Barry-Hattrick gegen Athlone',detail:'Der 18-Jährige erzielt beim 5:1 die Treffer zum 1:0, 3:0 und 4:1 und wird mit 9,4 bester Spieler.'},
    {id:'2042-05-09-jake-roberts-goal-athlone',date,player:'Jake Roberts',type:'goal',title:'Roberts trifft gegen Athlone',detail:'Erzielt in Minute 17 das 2:0.'},
    {id:'2042-05-09-ramsey-200-pro',date,player:'Justin Ramsey',type:'milestone',title:'200 Profispiele für Ramsey',detail:'Ramsey absolviert gegen Athlone sein 200. Profispiel und krönt den Abend mit dem Treffer zum 5:1.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'09.05.2042',
    headline:'Zurück im Ligaalltag: Barry führt Harps beim 5:1 an',
    subheadline:'Drei Tage nach dem Finaleinzug gegen Barcelona schalten die Harps sofort wieder um. Ben Barry erzielt einen Hattrick, Roberts und Ramsey treffen ebenfalls.',
    label:'PREMIER DIVISION · ZWISCHEN HALBFINALE UND ATHEN',
    heroStat:{label:'Ben Barry',value:'3 Tore',note:'Hattrick beim 5:1 gegen Athlone Town'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Nach 120 Minuten gegen Barcelona hätte ein emotionales und körperliches Loch niemanden überrascht. Stattdessen behandelt Finn Harps den Ligaalltag mit erstaunlicher Nüchternheit: Athlone wird mit 5:1 geschlagen, der siebte Ligasieg in Folge ist früh auf Kurs und ein 18-Jähriger übernimmt die Schlagzeilen.',
    sections:[
      {title:'Barry übernimmt die Bühne',text:'Ben Barry trifft bereits in Minute 10, legt nach der Pause in Minute 55 nach und komplettiert seinen Hattrick in Minute 69 per Elfmeter. Mit der Note 9,4 ist er klarer Spieler des Spiels. Gerade während Escárcega verletzt fehlt, ist diese offensive Antwort bemerkenswert.'},
      {title:'Roberts und Ramsey runden den Abend ab',text:'Jake Roberts erhöht in Minute 17 auf 2:0. Nach Athlones Anschlusstreffer macht Justin Ramsey in Minute 72 das 5:1. Für Ramsey ist der Abend doppelt besonders: Er absolviert sein 200. Profispiel.'},
      {title:'Ligaalltag unter Vollkontrolle',text:'26:3 Schüsse, 10:2 aufs Tor, 4,10:0,42 xG und 77 Prozent Ballbesitz lassen kaum Zweifel an der Kräfteverteilung. Finn Harps bleibt trotz des europäischen Ausnahmezustands im nationalen Rhythmus.'},
      {title:'Athen bleibt im Hintergrund präsent',text:'Die Tabelle sagt Alltag, die Gedanken wandern trotzdem Richtung Finale. Manchester United wartet in Athen, Escárcegas Einsatz bleibt fraglich. Umso wertvoller ist, dass Barry, Roberts und Ramsey zeigen, wie viele offensive Lösungen diese Mannschaft inzwischen besitzt.'}
    ],
    verdictHeading:'Vom europäischen Drama direkt zurück zur Routine',
    verdict:'Das 5:1 ist mehr als ein Pflichtsieg. Es zeigt, wie selbstverständlich Finn Harps inzwischen zwischen maximaler Champions-League-Anspannung und Ligaalltag wechseln kann. Der auffälligste Befund ist Barry: Während Escárcega fehlt, meldet sich das nächste offensive Gesicht mit drei Toren.',
    sources:['FM-Spielübersicht Finn Harps – Athlone Town · 09.05.2042','Finn-Harps-Spielerstatistiken · 09.05.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-05-09-finn-harps-athlone-town-5-1',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'LIGAALLTAG · 5:1',
    title:'Barry-Hattrick: Harps schalten nach Barcelona sofort wieder um',
    summary:'Finn Harps schlägt Athlone Town 5:1. Ben Barry erzielt drei Tore, Jake Roberts und Justin Ramsey treffen ebenfalls. Es ist der siebte Ligasieg in Folge.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','athlone-town','ben-barry','jake-roberts','justin-ramsey','season-2042']
  });
})();