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

  const fixtureId='2042-02-18-finn-harps-waterford-premier-division';
  const reportId='2042-02-18-finn-harps-waterford-report';

  const match={
    id:fixtureId,date:'2042-02-18',season:2042,competition:'SSE Airtricity League Premier Division',stage:'2. Spieltag',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    away:{id:'waterford',name:'Waterford',short:'WAT',score:0},
    score:'4:0',homeGoals:4,awayGoals:0,halfTime:'3:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12549,awayFans:389,weather:'12 °C',referee:'James Carey',
    headline:'Neun Tore, null Gegentore: Finn Harps schlägt Waterford 4:0',
    verdict:'Der Ligaauftakt bleibt makellos. Vier Tage nach dem 5:0 bei Shamrock legt Finn Harps im Donegal Stadium ein kontrolliertes 4:0 gegen Waterford nach. Justin Ramsey eröffnet früh, Mareks Istrankins erhöht, Pol Muñoz trifft vor und nach der Pause. Nach zwei Ligaspielen stehen neun eigene Tore, kein Gegentor und sechs Punkte.',
    scorers:[
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[7]},
      {player:'Mareks Istrankins',team:'Finn Harps',goals:1,minutes:[22]},
      {player:'Pol Muñoz',team:'Finn Harps',goals:2,minutes:[39,71]}
    ],
    events:[
      {minute:7,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'1:0'},
      {minute:22,type:'goal',team:'Finn Harps',player:'Mareks Istrankins',text:'2:0'},
      {minute:39,type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'3:0'},
      {minute:58,type:'yellow',team:'Finn Harps',player:"Cormac O'Kane",text:'Gelbe Karte'},
      {minute:71,type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'4:0'},
      {minute:74,type:'yellow',team:'Waterford',player:'Darcy Morling',text:'Gelbe Karte'},
      {minute:76,type:'yellow',team:'Waterford',player:'Ger Malone',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:10,away:4,kind:'number'},
      {label:'Schüsse aufs Tor',home:7,away:0,kind:'number'},
      {label:'xG',home:1.68,away:0.36,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:2,kind:'number'},
      {label:'Ballbesitz',home:67,away:33,kind:'percent'},
      {label:'Ecken',home:0,away:2,kind:'number'},
      {label:'Fouls',home:10,away:18,kind:'number'},
      {label:'Angekommene Pässe',home:557,away:270,kind:'number',homeDetail:'89 % · 557/629',awayDetail:'79 % · 270/340'},
      {label:'Gelbe Karten',home:1,away:2,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:7.41,away:6.24,kind:'decimal'}
    ],
    standout:{player:'Pol Muñoz',team:'Finn Harps',rating:9.3,goals:2,note:'Zwei Tore und Note 9,3. Muñoz entscheidet die Partie mit dem 3:0 vor und dem 4:0 nach der Pause endgültig.'},
    analysis:{
      summary:'Finn Harps muss Waterford nicht mit einem Chancensturm überrollen. Sieben der zehn Abschlüsse kommen aufs Tor, vier landen im Netz, während Waterford keinen einzigen Schuss auf das Harps-Tor bringt.',
      firstHalf:'Ramsey trifft bereits in Minute 7. Istrankins erhöht nach 22 Minuten, ehe Muñoz sechs Minuten vor der Pause das 3:0 erzielt. Damit ist die Partie zur Halbzeit praktisch entschieden.',
      secondHalf:'Nach der Pause kontrollieren die Harps das Tempo. Muñoz setzt in der 71. Minute mit seinem zweiten Treffer den Schlusspunkt.',
      cleanSheet:'Besonders auffällig ist der defensive Saisonstart: Nach 5:0 bei Shamrock folgt das zweite Zu-null-Spiel. Waterford kommt auf vier Abschlüsse, aber keinen einzigen aufs Tor.',
      table:'Mit zwei Siegen, 9:0 Toren und sechs Punkten führt Finn Harps die Premier Division nach zwei Spieltagen an.'
    },
    notes:[
      'Finn Harps gewinnt am 2. Spieltag der Premier Division 2042 mit 4:0 gegen Waterford.',
      'Justin Ramsey, Mareks Istrankins und Pol Muñoz treffen; Muñoz erzielt einen Doppelpack.',
      'Pol Muñoz erhält mit 9,3 die beste Harps-Note.',
      'Waterford bringt keinen seiner vier Abschlüsse aufs Tor.',
      'Finn Harps steht nach zwei Ligaspielen bei 9:0 Toren und sechs Punkten.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Waterford · 18.02.2042','FM-Spielerstatistiken Finn Harps · 18.02.2042']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const waterford=window.FM_CLUBS.find(x=>x.id==='waterford'||x.name==='Waterford'||x.name==='Waterford FC');
  if(waterford){
    waterford.meetings=waterford.meetings||[];
    const meeting={date:'18.02.2042',venue:'A',result:'0:4',competition:'Premier Division'};
    const idx=waterford.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)waterford.meetings[idx]=meeting;else waterford.meetings.push(meeting);
    waterford.lastMeeting='18.02.2042 · Finn Harps 4:0 Waterford';
    waterford.summary='Waterford verliert am zweiten Spieltag der Premier Division 2042 mit 0:4 im Donegal Stadium. Die Gäste bringen keinen Schuss aufs Tor.';
    waterford.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'PREMIER DIVISION · 2. SPIELTAG',headline:'Harps setzen mit 4:0 gegen Waterford nach'};
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-02-18';
    season.latestHeadline='Premier Division: Finn Harps schlägt Waterford 4:0 und steht nach zwei Spielen bei 9:0 Toren und sechs Punkten.';
    season.league=season.league||{};
    Object.assign(season.league,{played:2,wins:2,draws:0,losses:0,goalsFor:9,goalsAgainst:0,goalDifference:9,points:6,position:1,latestResult:'18.02.2042 · Finn Harps 4:0 Waterford'});
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='18.02.2042: Zweiter Ligasieg im zweiten Spiel. Finn Harps schlägt Waterford 4:0; Pol Muñoz trifft doppelt. Saisonstart: 6 Punkte, 9:0 Tore.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-02-18-pol-munoz-waterford-double',date:'2042-02-18',player:'Pol Muñoz',type:'standout',title:'Doppelpack gegen Waterford',detail:'Muñoz trifft beim 4:0 in Minute 39 und 71 und erhält mit 9,3 die beste Note des Spiels.'},
    {id:'2042-02-18-justin-ramsey-waterford-goal',date:'2042-02-18',player:'Justin Ramsey',type:'goal',title:'Ramsey eröffnet früh',detail:'Ramsey erzielt in der 7. Minute das 1:0 gegen Waterford.'},
    {id:'2042-02-18-mareks-istrankins-waterford-goal',date:'2042-02-18',player:'Mareks Istrankins',type:'goal',title:'Istrankins trifft zum 2:0',detail:'Istrankins erhöht in der 22. Minute und hilft, das Spiel früh zu entscheiden.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-02-18',competition:'SSE Airtricity League Premier Division',fixtureDate:'18.02.2042',
    home:'Finn Harps',away:'Waterford',score:'4:0',location:'Donegal Stadium · Stranorlar · 12.549 Zuschauer',
    headline:'Neun Tore, null Gegentore: Harps setzen mit 4:0 gegen Waterford nach',
    subheadline:'Nach dem 5:0 bei Shamrock folgt das nächste klare Signal. Ramsey und Istrankins treffen früh, Pol Muñoz doppelt. Waterford bleibt ohne einen einzigen Schuss aufs Tor.',
    label:'PREMIER DIVISION · 2. SPIELTAG · 18.02.2042',
    heroStat:{label:'Saisonstart',value:'9 : 0 Tore',note:'2 Spiele · 2 Siege · 6 Punkte'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Die Liga beginnt für Finn Harps mit der Präzision eines Metronoms. Vier Tage nach dem 5:0 bei Shamrock reicht gegen Waterford eine kontrollierte, effiziente Leistung für das nächste klare Ergebnis. Nach zwei Spieltagen steht der Meister bei neun Toren und noch immer ohne Gegentreffer.',
    sections:[
      {title:'Ramsey eröffnet, Istrankins legt nach',text:'Justin Ramsey bringt die Harps bereits in der 7. Minute in Führung. Mareks Istrankins erhöht nach 22 Minuten auf 2:0. Waterford findet offensiv kaum Zugriff und bringt im gesamten Spiel keinen Abschluss auf das Tor.'},
      {title:'Muñoz übernimmt',text:'Pol Muñoz trifft in der 39. Minute zum 3:0 und legt in Minute 71 das 4:0 nach. Mit seinem Doppelpack und Note 9,3 ist er der herausragende Spieler des Abends.'},
      {title:'Effizient statt spektakulär',text:'Im Gegensatz zum 5:0 bei Shamrock braucht Finn Harps diesmal keine 22 Abschlüsse. Zehn Schüsse reichen, sieben davon kommen aufs Tor. Die Harps erzielen vier Treffer bei 1,68 xG und zeigen damit eine ausgesprochen kalte Chancenverwertung.'},
      {title:'Defensiv weiterhin makellos',text:'Waterford kommt auf vier Schüsse, aber keinen einzigen aufs Tor. Nach zwei Ligaspielen steht damit noch immer die Null. Der Saisonstart ist nicht nur offensiv dominant, sondern auch defensiv beinahe steril.'},
      {title:'Sechs Punkte, 9:0 Tore',text:'Zwei Spiele, zwei Siege, neun Treffer, kein Gegentor. Finn Harps steht direkt wieder an der Tabellenspitze und lässt nach dem President’s-Cup-Dämpfer keinen Zweifel daran, wie der Ligaalltag 2042 aussehen soll.'}
    ],
    strengthsTitle:'WAS DEN SIEG AUSMACHT',
    strengthsHeading:'Frühe Kontrolle und kalte Effizienz',
    strengths:['Drei Tore bereits vor der Pause.','Pol Muñoz mit Doppelpack und Note 9,3.','Sieben von zehn Abschlüssen kommen aufs Tor.','Waterford bleibt ohne Schuss aufs Tor.'],
    vulnerabilitiesTitle:'KAUM ANGRIFFSFLÄCHE',
    vulnerabilitiesHeading:'Mehr Verwaltung als Problem',
    vulnerabilities:['Die Harps produzieren weniger Chancen als beim 5:0 in Tallaght.','Nach dem 3:0 sinkt das Tempo sichtbar, ohne dass Waterford daraus Kapital schlagen kann.'],
    verdictHeading:'Der Liga-Motor läuft sofort rund',
    verdict:'Das 4:0 ist weniger spektakulär als der Auftaktsieg gegen Shamrock, aber vielleicht noch typischer für die Harps-Dominanz: früh führen, das Spiel kontrollieren, die entscheidenden Chancen nutzen und hinten nichts zulassen. Nach zwei Spieltagen steht bereits wieder eine kleine, makellose Zahlenwand: 6 Punkte, 9:0 Tore.',
    sourcesHeading:'Grundlage',
    sourcesNote:'Ergebnis, Torschützen, Spielstatistiken und Zuschauerzahl basieren auf den FM-Screenshots vom 18. Februar 2042.',
    sources:['FM24 · Finn Harps 4:0 Waterford · 18.02.2042','FM24 · Finn-Harps-Spielerstatistiken · 18.02.2042']
  };

  upsert(window.FM_PRESS_REPORTS,report);
  upsert(window.FM_NEWS,{
    id:'2042-02-18-finn-harps-waterford-league',date:'2042-02-18',season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 2. SPIELTAG',title:'9:0 nach zwei Spielen: Harps schlagen Waterford 4:0',
    summary:'Ramsey, Istrankins und Doppelpacker Pol Muñoz treffen. Waterford bleibt ohne Schuss aufs Tor, Finn Harps startet mit zwei Siegen und 9:0 Toren.',
    href:`presse.html?id=${reportId}`,reportId
  });
})();