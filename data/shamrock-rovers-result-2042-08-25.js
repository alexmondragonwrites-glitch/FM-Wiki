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

  const date='2042-08-25';
  const fixtureId='2042-08-25-shamrock-rovers-finn-harps-premier-division';
  const reportId='2042-08-25-shamrock-rovers-finn-harps-0-2-docherty-escarcega';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'shamrock-rovers',name:'Shamrock Rovers',short:'SHR',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    score:'0:2',homeGoals:0,awayGoals:2,halfTime:'0:1',
    venue:'Tallaght Stadium',location:'Dublin, Irland',attendance:9568,awayFans:600,weather:'Stürmisch · Platzregen · 17 °C',referee:'Simon Farrelly',
    headline:'Docherty früh, Escárcega spät: Finn Harps gewinnen 2:0 bei Shamrock Rovers',
    verdict:'Dom Docherty trifft bereits in Minute 17. Danach kontrolliert Finn Harps das Spiel über weite Strecken, lässt aber den zweiten Treffer lange liegen. Erst Emerson Escárcega entscheidet die Partie in Minute 90+6 per Elfmeter. Der Sieg ist der 18. Ligaerfolg in Folge.',
    scorers:[
      {player:'Dom Docherty',team:'Finn Harps',goals:1,minutes:[17]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[96],penalties:[96]}
    ],
    events:[
      {minute:17,type:'goal',team:'Finn Harps',player:'Dom Docherty',text:'0:1'},
      {minute:88,type:'injury',team:'Shamrock Rovers',player:'Kyle Campbell',text:'Leistenverhärtung'},
      {minute:93,type:'injury',team:'Finn Harps',player:'Billy Walker',text:'Schnittwunde am Oberschenkel nach Tackling von Evan O\'Connor'},
      {minute:96,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:2 · Elfmeter'}
    ],
    stats:[
      {label:'Schüsse',home:2,away:24,kind:'number'},
      {label:'Schüsse aufs Tor',home:2,away:9,kind:'number'},
      {label:'xG',home:0.28,away:4.62,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:0,away:7,kind:'number'},
      {label:'Großchancen',home:0,away:5,kind:'number'},
      {label:'Ballbesitz',home:23,away:77,kind:'percent'},
      {label:'Ecken',home:2,away:13,kind:'number'},
      {label:'Fouls',home:18,away:16,kind:'number'},
      {label:'Angekommene Pässe',home:'68% (188/276)',away:'88% (644/730)',kind:'text'},
      {label:'Notenschnitt',home:6.53,away:7.14,kind:'decimal'},
      {label:'Intensive Sprints',home:67,away:84,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':8.0,'Diego Fernández':7.0,'Torric Bruce':7.3,'Daniele Di Maio':7.0,'Raúl':7.4,
      "Jim O'Neill":6.7,'Daryl Frame':6.9,'Jake Roberts':7.0,'Billy Walker':6.8,'Dom Docherty':7.4,
      'Ben Barry':6.4,'Callum Brennan':6.9,'Amir Mašić':6.9,'Justin Ramsey':6.8,'Emerson Escárcega':7.3,'Pol Muñoz':6.6
    },
    standout:{player:'Paulo Henrique',team:'Finn Harps',rating:8.0,note:'Hält die Null und ist mit Note 8,0 der bestbewertete Harps-Spieler.'},
    leagueAfterMatch:{played:27,wins:25,draws:0,losses:2,goalsFor:93,goalsAgainst:10,goalDifference:83,points:75,position:1,currentWinningStreak:18},
    injury:{player:'Billy Walker',minute:93,type:'Schnittwunde am Oberschenkel',expectedAbsence:'5–7 Tage',cause:'Tackling von Evan O\'Connor'},
    milestones:[
      'Wildin Glinton absolviert sein 450. Spiel als Profi.',
      'Jim O’Neill absolviert sein 425. Spiel als Profi.',
      'Ben Barry absolviert das 50. Ligaspiel seiner Karriere.',
      'Ben Barry bestreitet sein 50. Ligaspiel für Finn Harps.',
      'Pol Muñoz absolviert sein 175. Spiel als Profi.'
    ],
    analysis:{
      dominance:'24:2 Schüsse, 9:2 aufs Tor, 4,62:0,28 xG und 77 Prozent Ballbesitz zeigen eine klare Überlegenheit der Harps.',
      patience:'Trotz der Zahlen bleibt die Partie lange nur 1:0. Finn Harps erspielt sich fünf Großchancen, lässt aber mehrere Möglichkeiten liegen.',
      defense:'Shamrock Rovers bringt zwar beide Abschlüsse aufs Tor, entwickelt aber kaum dauerhaften Druck. Paulo Henrique hält erneut die Null.',
      lateDecision:'Erst tief in der Nachspielzeit fällt die Entscheidung. Escárcega verwandelt in Minute 90+6 den Elfmeter zum 2:0.',
      injury:'Der einzige echte Wermutstropfen ist Billy Walkers Schnittwunde am Oberschenkel. Er fällt voraussichtlich fünf bis sieben Tage aus.',
      streak:'Nach 27 Ligaspielen steht Finn Harps bei 75 Punkten und 93:10 Toren. Der Erfolg ist der 18. Ligasieg in Folge.'
    },
    sources:['FM-Spielübersicht Shamrock Rovers – Finn Harps · 25.08.2042','Finn-Harps-Spielerstatistiken · 25.08.2042','GOAL-Spielbericht · 25.08.2042','Medizinischer Bericht Billy Walker · 25.08.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixture=['2042-08-25','19:45','Shamrock Rovers','Auswärts','0:2','Premier Division',0];
  const fixtureIndex=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&['Shamrock Rovers','Shamrock Rovers FC'].includes(x[2])&&x[5]==='Premier Division');
  if(fixtureIndex>=0)window.FM_FIXTURES[fixtureIndex]=fixture;else window.FM_FIXTURES.push(fixture);

  const shamrock=window.FM_CLUBS.find(x=>x.id==='shamrock-rovers'||x.name==='Shamrock Rovers'||x.name==='Shamrock Rovers FC');
  if(shamrock){
    shamrock.meetings=shamrock.meetings||[];
    const meeting={date:'25.08.2042',competition:'Premier Division',venue:'A',result:'0:2'};
    const idx=shamrock.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)shamrock.meetings[idx]=meeting;else shamrock.meetings.unshift(meeting);
    shamrock.lastMeeting='25.08.2042 · Shamrock Rovers 0:2 Finn Harps';
    shamrock.summary='Docherty trifft früh, doch die Harps müssen trotz massiver Überlegenheit bis zur Nachspielzeit auf die Entscheidung warten. Escárcega macht per Elfmeter das 2:0.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Premier Division: Finn Harps gewinnt 2:0 bei Shamrock Rovers. Docherty trifft früh, Escárcega entscheidet per Elfmeter in der Nachspielzeit.';
    season.league=season.league||{};
    season.league.current={played:27,wins:25,draws:0,losses:2,goalsFor:93,goalsAgainst:10,goalDifference:83,points:75,position:1};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='25.08.2042: Finn Harps gewinnt 2:0 bei Shamrock Rovers. Docherty trifft in Minute 17, Escárcega verwandelt in Minute 90+6 einen Elfmeter. 24:2 Schüsse, 4,62:0,28 xG und 77 Prozent Ballbesitz. Billy Walker verletzt sich spät am Oberschenkel und fällt voraussichtlich 5–7 Tage aus. Liga: 27 Spiele, 75 Punkte, 93:10 Tore, 18 Ligasiege in Folge.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-08-25-dom-docherty-goal-shamrock',date,player:'Dom Docherty',type:'goal',title:'Docherty trifft früh im Tallaght Stadium',detail:'Bringt Finn Harps in Minute 17 mit 1:0 in Führung.'},
    {id:'2042-08-25-escarcega-penalty-shamrock',date,player:'Emerson Escárcega',type:'goal',title:'Escárcega entscheidet spät vom Punkt',detail:'Verwandelt in Minute 90+6 den Elfmeter zum 2:0.'},
    {id:'2042-08-25-paulo-henrique-clean-sheet',date,player:'Paulo Henrique',type:'standout',title:'Henrique hält die Null',detail:'Note 8,0 und kein Gegentor beim 2:0-Auswärtssieg gegen Shamrock Rovers.'},
    {id:'2042-08-25-billy-walker-thigh-cut',date,player:'Billy Walker',type:'injury',title:'Schnittwunde am Oberschenkel',detail:'Walker wird in der Nachspielzeit nach einem Tackling von Evan O’Connor verletzt. Erwartete Ausfallzeit: 5–7 Tage.'},
    {id:'2042-08-25-ben-barry-50-league',date,player:'Ben Barry',type:'milestone',title:'50 Ligaspiele für Finn Harps',detail:'Barry erreicht zugleich das 50. Ligaspiel seiner Karriere und für die Harps.'},
    {id:'2042-08-25-jim-oneill-425-pro',date,player:"Jim O'Neill",type:'milestone',title:'425 Profispiele',detail:'O’Neill erreicht im Tallaght Stadium seinen 425. Profieinsatz.'},
    {id:'2042-08-25-pol-munoz-175-pro',date,player:'Pol Muñoz',type:'milestone',title:'175 Profispiele',detail:'Muñoz absolviert gegen Shamrock Rovers sein 175. Spiel als Profi.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'25.08.2042',
    headline:'Dominant, aber lange offen: Harps gewinnen 2:0 im Tallaght Stadium',
    subheadline:'Docherty trifft nach 17 Minuten. Trotz 24:2 Schüssen fällt die Entscheidung erst in Minute 90+6 durch Escárcegas Elfmeter.',
    label:'PREMIER DIVISION · 25. AUGUST 2042',
    heroStat:{label:'KONTROLLE',value:'24:2',note:'Schüsse · 4,62:0,28 xG · 77 % Ballbesitz'},
    intro:'Finn Harps kontrolliert die Partie fast vollständig und führt früh. Trotzdem bleibt Shamrock Rovers bis tief in die Nachspielzeit formal im Spiel, weil die Harps aus ihrer Chancenflut lange kein zweites Tor machen.',
    sections:[
      {title:'Docherty setzt den frühen Treffer',text:'Dom Docherty bringt Finn Harps in Minute 17 mit einem Distanzschuss in Führung. Danach kippt das Spiel nicht in einen Torrausch, sondern in lange Phasen klarer Harps-Kontrolle.'},
      {title:'Viel Überlegenheit, wenig Ertrag',text:'24:2 Schüsse, 9:2 aufs Tor, fünf Großchancen und 4,62 xG hätten ein deutlich höheres Ergebnis hergegeben. Shamrock bleibt deshalb trotz kaum eigener Offensivaktionen lange in Reichweite.'},
      {title:'Escárcega macht in 90+6 endgültig zu',text:'Erst in der sechsten Minute der Nachspielzeit fällt das 2:0. Emerson Escárcega verwandelt den Elfmeter und beseitigt die letzte theoretische Spannung.'},
      {title:'Henrique hält erneut die Null',text:'Paulo Henrique erhält mit 8,0 die beste Harps-Note. Shamrock bringt zwar beide Abschlüsse aufs Tor, doch der Keeper lässt keinen Treffer zu.'},
      {title:'Walker verletzt sich spät',text:'Billy Walker wird in Minute 90+3 nach einem Tackling von Evan O’Connor am Oberschenkel verletzt. Die Diagnose lautet Schnittwunde; voraussichtliche Pause: fünf bis sieben Tage.'},
      {title:'18 Ligasiege in Folge',text:'Nach 27 Spielen steht Finn Harps bei 75 Punkten und 93:10 Toren. Die Mannschaft hat nun 18 Ligapartien hintereinander gewonnen.'}
    ],
    verdictHeading:'Ein Sieg der Kontrolle statt der Effizienz',
    verdict:'Das 2:0 ist deutlich knapper als der Spielverlauf. Finn Harps dominiert nahezu alle relevanten Kennzahlen, lässt die Partie aber durch schwache Chancenverwertung unnötig lange offen. Entscheidend ist dennoch die Stabilität: kaum gegnerische Gefahr, erneut zu null und der 18. Ligasieg in Serie.'
  });

  upsert(window.FM_NEWS,{
    id:'2042-08-25-shamrock-rovers-finn-harps-0-2',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 0:2',
    title:'Docherty früh, Escárcega spät: Harps gewinnen bei Shamrock',
    summary:'Finn Harps dominiert mit 24:2 Schüssen und 77 Prozent Ballbesitz. Docherty trifft früh, Escárcega entscheidet in 90+6 per Elfmeter. Billy Walker fällt 5–7 Tage aus.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','shamrock-rovers','dom-docherty','emerson-escarcega','billy-walker','paulo-henrique','season-2042']
  });
})();