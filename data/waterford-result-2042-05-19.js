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

  const date='2042-05-19';
  const fixtureId='2042-05-19-waterford-finn-harps-premier-division';
  const reportId='2042-05-19-waterford-finn-harps-0-3-spielbericht';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'waterford',name:'Waterford',short:'WAT',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    score:'0:3',homeGoals:0,awayGoals:3,halfTime:'0:2',
    venue:'Regional Sports Centre',location:'Waterford, Irland',attendance:4845,weather:'Böig · feucht · 18 °C',referee:'Callum Patton',
    headline:'Blitzstart in Waterford: Barry trifft doppelt in sieben Minuten, Harps gewinnen 3:0',
    verdict:'Finn Harps nimmt Waterford das Spiel praktisch ab dem Anpfiff aus der Hand. Ben Barry trifft in der 1. und 7. Minute, Jake Roberts erhöht direkt nach der Pause auf 3:0. Danach kontrollieren die Harps den Abend ohne Hektik und feiern den neunten Ligasieg in Folge.',
    scorers:[
      {player:'Ben Barry',team:'Finn Harps',goals:2,minutes:[1,7]},
      {player:'Jake Roberts',team:'Finn Harps',goals:1,minutes:[47]}
    ],
    events:[
      {minute:1,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'0:1'},
      {minute:7,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'0:2'},
      {minute:14,type:'yellow-card',team:'Finn Harps',player:'Callum Brennan'},
      {minute:35,type:'yellow-card',team:'Waterford',player:'Lyall Haunstrup'},
      {minute:38,type:'yellow-card',team:'Finn Harps',player:'Mareks Istrankins'},
      {minute:47,type:'goal',team:'Finn Harps',player:'Jake Roberts',text:'0:3'},
      {minute:74,type:'yellow-card',team:'Waterford',player:'Alan McKenna'},
      {minute:78,type:'yellow-card',team:'Finn Harps',player:"Jim O'Neill"}
    ],
    stats:[
      {label:'Schüsse',home:4,away:11,kind:'number'},
      {label:'Schüsse aufs Tor',home:1,away:7,kind:'number'},
      {label:'xG',home:0.39,away:2.05,kind:'decimal'},
      {label:'Großchancen',home:0,away:2,kind:'number'},
      {label:'Ballbesitz',home:32,away:68,kind:'percent'},
      {label:'Ecken',home:2,away:4,kind:'number'},
      {label:'Fouls',home:18,away:12,kind:'number'},
      {label:'Angekommene Pässe',home:'81% (295/364)',away:'90% (620/692)',kind:'text'},
      {label:'Gewonnene Zweikämpfe',home:'71% (20/28)',away:'57% (8/14)',kind:'text'},
      {label:'Gewonnene Kopfbälle',home:'45% (21/47)',away:'54% (26/48)',kind:'text'},
      {label:'Gelbe Karten',home:2,away:3,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:6.35,away:7.33,kind:'decimal'},
      {label:'Intensive Sprints',home:111,away:122,kind:'number'}
    ],
    ratings:{
      'Evan Reilly':7.4,'Callum Brennan':7.3,'Daniele Di Maio':6.8,'Mareks Istrankins':7.2,'Gustavo da Silva':7.2,
      'Amir Mašić':7.1,'Daryl Frame':7.0,'Jake Roberts':7.8,'Giacomo Papini':7.2,'Romano Maisto':8.0,
      'Ben Barry':8.4,'Kevin Kelly':6.9,'Pol Muñoz':6.7,'Diego Fernández':6.7,"Jim O'Neill":6.7,'Billy Walker':6.6
    },
    standout:{player:'Ben Barry',team:'Finn Harps',rating:8.4,note:'Entscheidet die Partie praktisch sofort mit einem Doppelpack in der 1. und 7. Minute.'},
    leagueAfterMatch:{played:18,wins:16,draws:0,losses:2,goalsFor:57,goalsAgainst:6,goalDifference:51,points:48,position:1,currentWinningStreak:9,unbeatenRun:13},
    analysis:{
      blitzstart:'Waterford bekommt keine Gelegenheit, die Partie in einen zähen Ligakampf zu verwandeln. Barry trifft nach rund einer Minute und legt in Minute 7 nach. Nach sieben Minuten steht es bereits 0:2.',
      control:'Nach dem Blitzstart spielen die Harps den Vorsprung reif herunter. 68 Prozent Ballbesitz und 90 Prozent Passquote zeigen, dass Waterford kaum längere Druckphasen aufbauen kann.',
      roberts:'Jake Roberts nimmt direkt nach der Pause die letzte Restspannung aus dem Spiel. Sein Treffer in Minute 47 macht aus der komfortablen Führung endgültig einen kontrollierten Auswärtssieg.',
      barry:'Ben Barry bestätigt seine starke Phase. Nach dem Hattrick gegen Athlone und dem Treffer bei Bohemian folgt nun der nächste Doppelpack. Gerade während Escárcega verletzt fehlt, trägt Barry immer mehr offensive Verantwortung.',
      final:'Mit neun Ligasiegen in Folge und 48 Punkten aus 18 Spielen bleibt Finn Harps national im Tunnel. Der Champions-League-Showdown mit Manchester United rückt näher, ohne dass die Mannschaft im Ligaalltag an Spannung verliert.'
    },
    milestones:[
      'Giacomo Papini absolviert sein 200. Ligaspiel seiner Karriere.',
      'Pol Muñoz bestreitet sein 25. Ligaspiel für Finn Harps.',
      'Finn Harps ist nun seit 13 Spielen ungeschlagen.',
      'Finn Harps feiert den neunten Ligasieg in Folge.'
    ],
    notes:[
      'Finn Harps gewinnt 3:0 bei Waterford.',
      'Ben Barry trifft in der 1. und 7. Minute zum Blitzstart.',
      'Jake Roberts erhöht in Minute 47 auf 3:0.',
      'Finn Harps kontrolliert die Partie mit 68 Prozent Ballbesitz und 90 Prozent Passquote.',
      'Nach 18 Ligaspielen stehen 48 Punkte und 57:6 Tore.',
      'Neunter Ligasieg in Folge und 13 Spiele ungeschlagen.'
    ],
    sources:['FM-Spielübersicht Waterford – Finn Harps · 19.05.2042','Finn-Harps-Spielerstatistiken · 19.05.2042','Sportbible-Spielbericht · 19.05.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-05-19','19:45','Waterford','Auswärts','0:3','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&['Waterford','Waterford FC'].includes(x[2])&&x[5]==='Premier Division'&&x[0]===date);
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const waterford=window.FM_CLUBS.find(x=>x.id==='waterford'||x.name==='Waterford'||x.name==='Waterford FC');
  if(waterford){
    waterford.meetings=waterford.meetings||[];
    const meeting={date:'19.05.2042',competition:'Premier Division',venue:'A',result:'3:0'};
    const idx=waterford.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)waterford.meetings[idx]=meeting;else waterford.meetings.unshift(meeting);
    waterford.lastMeeting='19.05.2042 · Waterford 0:3 Finn Harps';
    waterford.summary='Ein Barry-Doppelpack in den ersten sieben Minuten nimmt Waterford früh jede Hoffnung. Roberts erhöht kurz nach der Pause, Finn Harps gewinnt kontrolliert 3:0.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Premier Division: Finn Harps gewinnt 3:0 bei Waterford. Ben Barry trifft in Minute 1 und 7, Jake Roberts direkt nach der Pause.';
    season.league=season.league||{};
    season.league.current={played:18,wins:16,draws:0,losses:2,goalsFor:57,goalsAgainst:6,goalDifference:51,points:48,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Finale',opponent:'Manchester United',venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland',status:'Finale erreicht',form:'9 Ligasiege in Folge · 13 Spiele ungeschlagen',availability:['Emerson Escárcega: Handgelenksfraktur · Finaleinsatz fraglich']};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='19.05.2042: Blitzstart in Waterford. Ben Barry trifft in Minute 1 und 7, Jake Roberts macht in Minute 47 das 3:0. Finn Harps gewinnt bei 68 Prozent Ballbesitz und 2,05:0,39 xG den neunten Ligaerfolg in Folge. Liga: 18 Spiele, 48 Punkte, 57:6 Tore.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-05-19-ben-barry-double-waterford',date,player:'Ben Barry',type:'performance',title:'Barry-Doppelpack in sieben Minuten',detail:'Trifft in Minute 1 und 7 und entscheidet das Auswärtsspiel bei Waterford praktisch schon in der Anfangsphase.'},
    {id:'2042-05-19-jake-roberts-goal-waterford',date,player:'Jake Roberts',type:'goal',title:'Roberts trifft direkt nach der Pause',detail:'Erzielt in Minute 47 das 3:0.'},
    {id:'2042-05-19-papini-200-league',date,player:'Giacomo Papini',type:'milestone',title:'200 Ligaspiele für Papini',detail:'Papini erreicht in Waterford sein 200. Ligaspiel der Karriere.'},
    {id:'2042-05-19-pol-munoz-25-league-harps',date,player:'Pol Muñoz',type:'milestone',title:'25 Ligaspiele für Muñoz bei den Harps',detail:'Muñoz absolviert sein 25. Ligaspiel für Finn Harps.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'19.05.2042',
    headline:'Blitzstart in Waterford: Barry erledigt die Vorarbeit in sieben Minuten',
    subheadline:'Ben Barry trifft in Minute 1 und 7. Jake Roberts setzt unmittelbar nach der Pause den Schlusspunkt zum 3:0.',
    label:'PREMIER DIVISION · BLITZSTART',
    heroStat:{label:'Ben Barry',value:'2 Tore in 7 Minuten',note:'0:1 in Minute 1 · 0:2 in Minute 7'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Manche Auswärtsspiele müssen erst geknackt werden. Dieses nicht. Finn Harps braucht in Waterford kaum sieben Minuten, um aus einer potenziell unangenehmen Aufgabe eine Verwaltungsfrage zu machen. Der Grund heißt Ben Barry.',
    sections:[
      {title:'Sieben Minuten, zwei Treffer, Spiel gekippt',text:'Barry erwischt Waterford vollkommen kalt. Bereits in der 1. Minute fällt das 0:1, sechs Minuten später folgt das 0:2. Waterfords Plan für einen engen Abend ist damit praktisch erledigt, bevor das Spiel überhaupt seinen Rhythmus gefunden hat.'},
      {title:'Roberts macht den Deckel drauf',text:'Direkt nach dem Seitenwechsel erhöht Jake Roberts in Minute 47 auf 3:0. Danach muss Finn Harps nichts mehr erzwingen und kontrolliert die Partie mit viel Ballbesitz und hoher Passsicherheit.'},
      {title:'Barry wird zur echten Antwort auf Escas Ausfall',text:'Der junge Angreifer setzt seine starke Serie fort. Nach dem Hattrick gegen Athlone und seinem Treffer bei Bohemian folgen nun zwei weitere Tore. In einer Phase, in der Emerson Escárcega fehlt, wächst Barry sichtbar in eine größere Rolle hinein.'},
      {title:'Reife statt Spektakel',text:'11:4 Schüsse, 7:1 aufs Tor, 68 Prozent Ballbesitz und 90 Prozent Passquote reichen für einen ungefährdeten Abend. Die Harps müssen nicht permanent Vollgas spielen, weil die Partie schon nach dem Blitzstart in die gewünschte Richtung läuft.'},
      {title:'Athen bleibt der Horizont',text:'Neun Ligasiege in Folge und 48 Punkte aus 18 Spielen zeigen, dass der Fokus trotz des nahenden Champions-League-Finals nicht abreißt. Die Mannschaft wirkt derzeit weniger wie ein Team auf dem Weg zu einem großen Spiel als wie eines, das sich längst in dessen Rhythmus befindet.'}
    ],
    verdictHeading:'Der Blitzstart war die Geschichte des Abends',
    verdict:'Waterford bekam kaum Gelegenheit, Widerstand aufzubauen. Barry entschied die Partie mit zwei Treffern in den ersten sieben Minuten, Roberts machte direkt nach der Pause alles klar. Für Finn Harps ist es der nächste souveräne Schritt auf dem Weg nach Athen.',
    sources:['FM-Spielübersicht Waterford – Finn Harps · 19.05.2042','Finn-Harps-Spielerstatistiken · 19.05.2042','Sportbible-Spielbericht · 19.05.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-05-19-waterford-finn-harps-0-3',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'LIGA · BLITZSTART · 0:3',
    title:'Barry braucht sieben Minuten: Harps gewinnen 3:0 in Waterford',
    summary:'Ben Barry trifft in Minute 1 und 7, Jake Roberts direkt nach der Pause. Finn Harps feiert den neunten Ligasieg in Folge.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','waterford','ben-barry','jake-roberts','giacomo-papini','pol-munoz','season-2042']
  });
})();