(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2042-03-05-caen-finn-harps-champions-league-round16-first-leg';
  const reportId='2042-03-05-caen-finn-harps-4-4-spielbericht';

  const match={
    id:fixtureId,date:'2042-03-05',season:2042,competition:'UEFA Champions League',stage:'Achtelfinale · Hinspiel',
    home:{id:'caen',name:'Caen',short:'CAE',score:4},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    score:'4:4',homeGoals:4,awayGoals:4,halfTime:'1:2',
    venue:'Stade Michel-d’Ornano',location:'Caen, Frankreich',attendance:20453,awayFans:563,weather:'Feucht · 10 °C',referee:'Unbekannt',
    headline:'Acht-Tore-Banger in Caen: Finn Harps und Caen trennen sich 4:4',
    verdict:'Was für ein Champions-League-Abend. Finn Harps führt 2:0 und später 3:2, Caen dreht die Partie in der Schlussphase auf 4:3, ehe Pol Muñoz in 90+2 das 4:4 rettet. Beide Teams kommen auf 16 Abschlüsse, die xG-Werte liegen mit 2,31 zu 2,33 praktisch gleichauf. Yannick Jaffre liefert mit zwei Toren und Note 9,3 eine Weltklasseleistung, Emerson Escárcega prägt das Harps-Spiel mit einem Tor, zwei Vorlagen und Note 8,1.',
    scorers:[
      {player:'Torric Bruce',team:'Finn Harps',goals:1,minutes:[24]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:['45+1']},
      {player:'Yannick Jaffre',team:'Caen',goals:2,minutes:['45+2',61]},
      {player:'Giacomo Papini',team:'Finn Harps',goals:1,minutes:[72]},
      {player:'Ayodeji Agbaji',team:'Caen',goals:1,minutes:[74]},
      {player:'Chai Miggins',team:'Caen',goals:1,minutes:[86]},
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:['90+2']}
    ],
    events:[
      {minute:24,type:'goal',team:'Finn Harps',player:'Torric Bruce',text:'0:1'},
      {minute:26,type:'yellow',team:'Finn Harps',player:'Daniele Di Maio',text:'Gelbe Karte'},
      {minute:'45+1',type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:2'},
      {minute:'45+2',type:'goal',team:'Caen',player:'Yannick Jaffre',text:'1:2'},
      {minute:61,type:'goal',team:'Caen',player:'Yannick Jaffre',text:'2:2'},
      {minute:72,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'2:3'},
      {minute:74,type:'goal',team:'Caen',player:'Ayodeji Agbaji',text:'3:3'},
      {minute:86,type:'goal',team:'Caen',player:'Chai Miggins',text:'4:3'},
      {minute:'90+2',type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'4:4'}
    ],
    stats:[
      {label:'Schüsse',home:16,away:16,kind:'number'},
      {label:'Schüsse aufs Tor',home:7,away:8,kind:'number'},
      {label:'xG',home:2.31,away:2.33,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:5,kind:'number'},
      {label:'Großchancen',home:2,away:1,kind:'number'},
      {label:'Ballbesitz',home:43,away:57,kind:'percent'},
      {label:'Ecken',home:7,away:6,kind:'number'},
      {label:'Fouls',home:12,away:9,kind:'number'},
      {label:'Angekommene Pässe',home:384,away:501,kind:'number',homeDetail:'90 % · 384/427',awayDetail:'86 % · 501/580'},
      {label:'Gewonnene Zweikämpfe',home:73,away:89,kind:'percent',homeDetail:'24/33',awayDetail:'31/35'},
      {label:'Gewonnene Kopfbälle',home:44,away:50,kind:'percent',homeDetail:'18/41',awayDetail:'20/40'},
      {label:'Gelbe Karten',home:0,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:7.23,away:6.99,kind:'decimal'},
      {label:'Intensive Sprints',home:134,away:142,kind:'number'}
    ],
    standout:[
      {player:'Yannick Jaffre',team:'Caen',rating:9.3,goals:2,note:'Doppelpack zum 1:2 und 2:2. Jaffre zieht Caen nach einem 0:2-Rückstand zurück ins Spiel und ist der beste Spieler des Abends.'},
      {player:'Emerson Escárcega',team:'Finn Harps',rating:8.1,goals:1,assists:2,note:'Ein Tor, zwei Vorlagen und erneut die Präsenz eines großen Champions-League-Spielers. Escárcega ist an drei der vier Harps-Tore direkt beteiligt.'},
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,note:'Trifft in 90+2 zum 4:4 und verhindert, dass die Harps nach zwischenzeitlicher 2:0-Führung mit einer Niederlage nach Hause fahren.'}
    ],
    analysis:{
      summary:'Das 4:4 ist statistisch fast so ausgeglichen wie das Ergebnis: 16:16 Schüsse, 7:8 aufs Tor und 2,31:2,33 xG. Finn Harps kontrolliert mit 57 Prozent Ballbesitz und 501 angekommenen Pässen längere Phasen, Caen bleibt jedoch mit Jaffre und seiner direkten Offensivqualität jederzeit gefährlich.',
      firstHalf:'Torric Bruce köpft Finn Harps in der 24. Minute in Führung. Escárcega erhöht in 45+1 auf 0:2, doch Jaffre antwortet praktisch mit dem nächsten Angriff in 45+2. Statt einer komfortablen Pausenführung steht es nur 1:2.',
      jaffre:'Jaffre ist der Mann, der das Spiel immer wieder kippt. Nach seinem Treffer unmittelbar vor der Pause gleicht er in der 61. Minute zum 2:2 aus. Mit Note 9,3 und zwei Toren bestätigt er, warum er schon beim 4:1 in der Klub-WM 2041 der große Harps-Schreck war.',
      escarcega:'Escárcega liefert auf der anderen Seite eine Antwort auf höchstem Niveau. Der 42-jährige Stürmer erzielt das 0:2 und steuert insgesamt zwei Vorlagen bei. Drei direkte Torbeteiligungen in einem Champions-League-Achtelfinale sind ein weiterer Beleg dafür, dass sein Transfer nicht nur nach Namen, sondern auch sportlich funktioniert.',
      chaos:'Papini stellt in der 72. Minute auf 2:3, doch Agbaji gleicht zwei Minuten später aus. Miggins dreht das Spiel in der 86. Minute erstmals für Caen. In einer Partie ohne Sicherheitsgurt hat Finn Harps aber das letzte Wort: Pol Muñoz trifft in 90+2 zum 4:4.',
      tie:'Nach der 1:4-Niederlage im Klub-WM-Halbfinale 2041 ist die offene Rechnung mit Caen noch nicht beglichen, aber die Harps nehmen vier Auswärtstore und ein Remis mit ins Rückspiel. Das Viertelfinale wird nun im Rückspiel entschieden.'
    },
    notes:[
      'Acht Tore im Champions-League-Achtelfinal-Hinspiel.',
      'Finn Harps führt zunächst 2:0 und später 3:2.',
      'Caen dreht die Partie in Minute 86 auf 4:3, Pol Muñoz gleicht in 90+2 aus.',
      'Yannick Jaffre: 2 Tore, Note 9,3.',
      'Emerson Escárcega: 1 Tor, 2 Vorlagen, Note 8,1.',
      'Schüsse 16:16, xG 2,31:2,33, Ballbesitz 43:57.'
    ],
    sources:['FM-Spielübersicht Caen – Finn Harps · 05.03.2042','Caen-Spielerstatistiken · 05.03.2042','Planet Football Spielbericht · Caen 4:4 Finn Harps']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const caen=window.FM_CLUBS.find(x=>x.id==='caen'||x.name==='Caen'||x.name==='Stade Malherbe Caen Calvados');
  if(caen){
    caen.meetings=caen.meetings||[];
    const meeting={date:'05.03.2042',competition:'UEFA Champions League · Achtelfinale · Hinspiel',venue:'Stade Michel-d’Ornano · Caen',result:'4:4'};
    const idx=caen.meetings.findIndex(x=>x.date===meeting.date&&x.competition===meeting.competition);
    if(idx>=0)caen.meetings[idx]=meeting;else caen.meetings.unshift(meeting);
    caen.lastMeeting='05.03.2042 · Caen 4:4 Finn Harps';
    caen.nextMeeting={competition:'UEFA Champions League',stage:'Achtelfinale · Rückspiel',opponent:'Finn Harps',firstLegResult:'4:4'};
    caen.summary='Caen und Finn Harps liefern sich im Champions-League-Achtelfinal-Hinspiel ein spektakuläres 4:4. Jaffre trifft doppelt und führt Caen nach 0:2 zurück, Escárcega antwortet für die Harps mit einem Tor und zwei Vorlagen. Pol Muñoz rettet Finn Harps in 90+2 das Remis.';
    caen.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · ACHTELFINALE',headline:'Acht Tore, zwei Ausnahmekönner: Jaffre und Escárcega prägen ein wildes 4:4'};
  }

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  current.knockoutStage=current.knockoutStage||{};
  current.knockoutStage.roundOf16=current.knockoutStage.roundOf16||{};
  current.knockoutStage.roundOf16.finnHarps={
    ...(current.knockoutStage.roundOf16.finnHarps||{}),
    opponent:'Caen',
    firstLeg:{date:'2042-03-05',venue:'A',score:'4:4',home:'Caen',away:'Finn Harps',status:'gespielt'},
    aggregate:'4:4',
    status:'offen',
    storyline:'Nach dem 1:4 im Klub-WM-Halbfinale 2041 liefern sich Caen und Finn Harps diesmal ein 4:4. Jaffre trifft doppelt, Escárcega kommt auf ein Tor und zwei Vorlagen, Muñoz rettet in 90+2 das Remis.'
  };
  current.headline='Champions-League-Achtelfinale: Caen und Finn Harps trennen sich im Hinspiel nach einem Acht-Tore-Spektakel 4:4. Das Rückspiel entscheidet über den Viertelfinaleinzug.';
  window.FM_CHAMPIONS_LEAGUE['2041-42']=current;

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-03-05';
    season.latestHeadline='Champions League: 4:4 in Caen. Jaffre und Escárcega liefern sich ein Offensivduell auf Weltklasse-Niveau, Muñoz gleicht in 90+2 aus.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.roundOf16={
      ...(season.championsLeague.roundOf16||{}),opponent:'Caen',firstLeg:'05.03.2042 · Caen 4:4 Finn Harps',aggregate:'4:4',status:'offen'
    };
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='05.03.2042: Acht-Tore-Spektakel im Champions-League-Achtelfinale. Caen und Finn Harps trennen sich 4:4; Jaffre trifft doppelt, Escárcega verbucht ein Tor und zwei Vorlagen, Pol Muñoz gleicht in 90+2 aus.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-03-05-yannick-jaffre-finn-harps-doppelpack',date:'2042-03-05',player:'Yannick Jaffre',type:'standout',title:'Jaffre bleibt der Harps-Schreck',detail:'Zwei Tore und Note 9,3 im 4:4. Nach seinem Doppelpack im Klub-WM-Halbfinale 2041 prägt Jaffre erneut ein großes Spiel gegen Finn Harps.'},
    {id:'2042-03-05-escarcega-caen-masterclass',date:'2042-03-05',player:'Emerson Escárcega',type:'standout',title:'Escárcega mit drei direkten Torbeteiligungen',detail:'Ein Tor, zwei Vorlagen und Note 8,1 im Champions-League-Achtelfinale gegen Caen.'},
    {id:'2042-03-05-pol-munoz-caen-late-equaliser',date:'2042-03-05',player:'Pol Muñoz',type:'goal',title:'Muñoz rettet das 4:4 in 90+2',detail:'Später Ausgleich im Achtelfinal-Hinspiel und damit ein völlig offenes Rückspiel.'},
    {id:'2042-03-05-torric-bruce-caen-goal',date:'2042-03-05',player:'Torric Bruce',type:'goal',title:'Bruce eröffnet das Acht-Tore-Spektakel',detail:'Trifft in der 24. Minute zum 0:1 für Finn Harps.'},
    {id:'2042-03-05-giacomo-papini-caen-goal',date:'2042-03-05',player:'Giacomo Papini',type:'goal',title:'Papini bringt die Harps erneut in Führung',detail:'Erzielt in der 72. Minute das 2:3.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-03-05',competition:'UEFA Champions League',fixtureDate:'05.03.2042',
    home:'Caen',away:'Finn Harps',score:'4:4',location:'Stade Michel-d’Ornano · Caen · 20.453 Zuschauer · 563 Harps-Auswärtsfans',
    headline:'Acht Tore, zwei Ausnahmekönner: Jaffre und Escárcega prägen ein wildes 4:4',
    subheadline:'Finn Harps führt 2:0, Caen kommt zurück, Papini bringt die Harps erneut nach vorne, Miggins dreht das Spiel spät und Pol Muñoz antwortet in 90+2. Über allem stehen Yannick Jaffres Doppelpack und Emerson Escárcegas drei direkte Torbeteiligungen.',
    label:'UEFA CHAMPIONS LEAGUE · ACHTELFINALE-HINSPIEL · CAEN 4:4 FINN HARPS',
    heroStat:{label:'Offensivfeuerwerk',value:'4:4',note:'16:16 Schüsse · xG 2,31:2,33'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Wenn ein 4:4 das Ergebnis eines Champions-League-Achtelfinals ist und die Statistik dahinter fast spiegelbildlich aussieht, braucht es kaum Übertreibung. Caen und Finn Harps haben im Stade Michel-d’Ornano einen jener Abende produziert, bei denen jede Phase eine neue Geschichte schrieb. Die Harps führten 2:0, Caen glich aus, Papini traf zum 3:2, Caen drehte auf 4:3 und Pol Muñoz schlug in der Nachspielzeit zurück.',
    sections:[
      {title:'Bruce und Escárcega bauen eine 2:0-Führung',text:'Torric Bruce bringt Finn Harps in der 24. Minute mit einem Kopfball in Führung. In 45+1 erhöht Emerson Escárcega auf 0:2. Für einen Moment sieht es so aus, als könnten die Harps die alte Klub-WM-Rechnung mit Caen sehr kontrolliert beantworten.'},
      {title:'Jaffre weigert sich, das Spiel kippen zu lassen',text:'Nur eine Minute nach Escárcegas 0:2 trifft Yannick Jaffre in 45+2 zum 1:2. In der 61. Minute folgt der Ausgleich. Jaffre beendet den Abend mit zwei Toren und Note 9,3. Dass ausgerechnet er erneut zum zentralen Gegenspieler der Harps wird, passt zur Vorgeschichte: Schon beim 4:1 im Klub-WM-Halbfinale 2041 hatte er zweimal getroffen.'},
      {title:'Escárcega antwortet mit Weltklasseproduktion',text:'Auf der anderen Seite steht Emerson Escárcega. Der 42-Jährige erzielt selbst das 0:2 und liefert insgesamt zwei Vorlagen. Mit drei direkten Torbeteiligungen und Note 8,1 ist er der wichtigste Harps-Offensivspieler des Abends. Sein Duell mit Jaffre wirkt über weite Strecken wie ein privater Wettkampf darum, wer dieses Spiel stärker verbiegt.'},
      {title:'Vier Tore in der Schlussphase',text:'Papini bringt Finn Harps in der 72. Minute mit 2:3 wieder nach vorne. Agbaji gleicht in Minute 74 sofort aus, Miggins erzielt in der 86. Minute das 4:3 für Caen. Doch der letzte Punch gehört Finn Harps: Pol Muñoz trifft in 90+2 zum 4:4.'},
      {title:'Ein Ergebnis, das die Zahlen perfekt abbilden',text:'16:16 Schüsse, 7:8 aufs Tor und 2,31:2,33 xG. Kaum ein 4:4 kann statistisch glaubwürdiger aussehen. Finn Harps hat mit 57 Prozent mehr Ballbesitz und bringt 501 Pässe an, Caen bleibt über direkte Angriffe und individuelle Klasse permanent gefährlich.'},
      {title:'Die offene Rechnung bleibt für das Rückspiel',text:'Das 1:4 aus dem Klub-WM-Halbfinale 2041 ist nicht vergessen, aber diesmal gehen die Harps nicht geschlagen vom Platz. Vier Auswärtstore und ein 4:4 bedeuten: Alles bleibt offen, und das Rückspiel entscheidet komplett neu über den Einzug ins Viertelfinale.'}
    ],
    strengthsTitle:'WAS FINN HARPS MITNIMMT',strengthsHeading:'Vier Tore auswärts und ein Angriff, der auf jede Wendung reagieren konnte',
    strengths:['4 Auswärtstore im Achtelfinal-Hinspiel','57 Prozent Ballbesitz','501 angekommene Pässe','Escárcega mit 1 Tor und 2 Vorlagen','Muñoz gleicht in 90+2 aus','Drei unterschiedliche Führungen im Spiel erarbeitet'],
    vulnerabilitiesTitle:'WAS DAS RÜCKSPIEL GEFÄHRLICH MACHT',vulnerabilitiesHeading:'Caen kann aus praktisch jeder Spielphase zurückkommen',
    vulnerabilities:['2:0-Führung nicht gehalten','Nach Papinis 3:2 nur zwei Minuten bis zum erneuten Ausgleich','Jaffre erneut mit einem Doppelpack gegen die Harps','Vier Gegentore trotz 57 Prozent Ballbesitz','Caen dreht das Spiel in der 86. Minute zwischenzeitlich komplett'],
    verdictHeading:'Ein Banger ohne Sieger, aber mit zwei Spielern, die über dem Chaos stehen',
    verdict:'Das 4:4 ist keine Partie, die man auf einen taktischen Fehler oder einen einzelnen Moment reduzieren kann. Beide Mannschaften erzeugten genug Gefahr für mehrere Spiele und beide fanden immer wieder eine Antwort. Yannick Jaffre war mit zwei Toren und Note 9,3 der herausragende Caen-Spieler. Emerson Escárcega stand ihm mit einem Tor, zwei Vorlagen und Note 8,1 kaum nach. Für Finn Harps ist vor allem entscheidend, dass Muñoz nach dem späten 3:4 noch einmal zurückschlug. Die offene Rechnung mit Caen wird im Rückspiel endgültig verhandelt.',
    sources:['FM-Spielübersicht Caen – Finn Harps · 05.03.2042','Caen-Spielerstatistiken · 05.03.2042','Planet Football Spielbericht · 05.03.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-03-05-caen-finn-harps-4-4',date:'2042-03-05',category:'Champions League',
    title:'Acht-Tore-Banger in Caen: Jaffre und Escárcega glänzen beim 4:4',
    summary:'Finn Harps führt 2:0 und 3:2, Caen dreht auf 4:3, Pol Muñoz rettet in 90+2 das Remis. Jaffre trifft doppelt, Escárcega verbucht ein Tor und zwei Vorlagen.',
    href:`presse.html?id=${reportId}`
  });
})();