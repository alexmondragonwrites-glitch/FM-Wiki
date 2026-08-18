(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_YEAR_CLOSEOUTS=window.FM_YEAR_CLOSEOUTS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const closeout={
    id:'calendar-year-2041-closeout',
    year:2041,
    status:'Abgeschlossen',
    closedAt:'2041-12-11',
    lastClubMatch:{date:'2041-12-11',competition:'UEFA Champions League',opponent:'Real Sociedad',venue:'Auswärts',result:'1:0'},
    clubEuropeanSnapshot:{competition:'UEFA Champions League 2041/42',stage:'Ligaphase',played:6,wins:5,draws:0,losses:1,goalsFor:12,goalsAgainst:3,goalDifference:9,points:15,position:3,status:'Läuft 2042 weiter'},
    irelandSnapshot:{competition:'FIFA-WM-Qualifikation Europa',group:'Gruppe C',played:8,wins:8,draws:0,losses:0,goalsFor:33,goalsAgainst:7,points:24,status:'WM 2042 qualifiziert · Gruppensieger'},
    handoff2042:[
      {date:'2042-01-18',team:'Irland',competition:'Finalissima',opponent:'Brasilien',venue:'Arena Castelão'},
      {date:'2042-01-22',team:'Finn Harps',competition:'UEFA Champions League · Ligaphase',opponent:'Anderlecht',venue:'Heim'},
      {date:'2042-01-29',team:'Finn Harps',competition:'UEFA Champions League · Ligaphase',opponent:'AEK',venue:'Heim'}
    ],
    note:'Der Kalenderjahrgang 2041 ist abgeschlossen. Die irische Klub-Saison ist beendet; die Champions-League-Saison 2041/42 bleibt bewusst offen und wird im Januar 2042 fortgeführt.'
  };
  upsert(window.FM_YEAR_CLOSEOUTS,closeout);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-12-11';
    season.calendarYearStatus='Abgeschlossen';
    season.calendarYearClosed=true;
    season.calendarYearClosedAt='2041-12-11';
    season.statusDetail='Kalenderjahr 2041 abgeschlossen · UEFA Champions League 2041/42 läuft 2042 weiter';
    season.yearEndSnapshot={
      finalClubMatch:'11.12.2041 · Real Sociedad 0:1 Finn Harps',
      championsLeague:'6 Spiele · 5 Siege · 15 Punkte · 12:3 Tore · Rang 3',
      ireland:'WM-Qualifikation: 8 Spiele · 8 Siege · 24 Punkte · 33:7 Tore · Gruppensieger',
      nextNationalMatch:'18.01.2042 · Finalissima · Brasilien – Irland',
      nextClubMatches:['22.01.2042 · Anderlecht · Heim','29.01.2042 · AEK · Heim']
    };
    season.latestHeadline='2041 abgeschlossen: Finn Harps beendet das Jahr mit einem 1:0 bei Real Sociedad; die Champions League 2041/42 geht im Januar weiter.';
    season.changes=season.changes||{notes:[]};
    const note='11.12.2041: Kalenderjahr 2041 abgeschlossen. Letztes Spiel: 1:0 bei Real Sociedad. Die Champions-League-Ligaphase bleibt mit 15 Punkten aus sechs Spielen offen und wird 2042 fortgesetzt.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const report={
    id:'2041-12-11-jahresabschluss-2041',type:'Jahresabschluss',date:'2041-12-11',competition:'Saisonchronik',
    headline:'2041 ist geschlossen – Europa bleibt offen',
    subheadline:'Finn Harps beendet das Pflichtspieljahr mit einem 1:0 bei Real Sociedad. Die Champions-League-Ligaphase geht mit 15 Punkten und Rang drei ins neue Jahr, während Irland nach einer perfekten WM-Qualifikation bereits Brasilien in der Finalissima erwartet.',
    label:'JAHRESABSCHLUSS · 2041 → 2042',
    heroStat:{label:'Letztes Spiel 2041',value:'Real Sociedad 0:1 Finn Harps',note:'Champions League · Ramsey 31. Minute'},
    backlink:{href:'archiv.html',label:'← ZUM ARCHIV'},
    intro:'Mit dem Sieg in San Sebastián fällt der Vorhang für das Kalenderjahr 2041. Wichtig ist die Trennlinie: Das Jahr ist abgeschlossen, die Champions-League-Saison 2041/42 aber nicht. Sie wird im Januar mit zwei Heimspielen fortgesetzt. Parallel beginnt 2042 für Irland sofort mit der Finalissima gegen Brasilien.',
    sections:[
      {title:'Ein Sieg als letzter Punkt',text:'Finn Harps gewinnt das letzte Pflichtspiel des Jahres 1:0 bei Real Sociedad. Justin Ramsey erzielt in der 31. Minute den entscheidenden Treffer.'},
      {title:'Europa geht mit 15 Punkten in die Pause',text:'Nach sechs Champions-League-Spielen stehen fünf Siege, eine Niederlage und 12:3 Tore. Mit 15 Punkten liegt Finn Harps auf Rang drei der Ligaphase.'},
      {title:'Die Champions League bleibt bewusst offen',text:'Der Jahresabschluss ist kein Wettbewerbsabschluss. Anderlecht und AEK kommen am 22. und 29. Januar 2042 nach Donegal; erst danach ist die Ligaphase komplett.'},
      {title:'Irland liefert die perfekte Qualifikation',text:'Irland beendet Gruppe C der WM-Qualifikation mit acht Siegen aus acht Spielen, 24 Punkten und 33:7 Toren und fährt als Gruppensieger zur WM 2042.'},
      {title:'2042 beginnt gegen die Nummer eins',text:'Noch vor den beiden Champions-League-Heimspielen wartet am 18. Januar die Finalissima gegen Brasilien in der Arena Castelão.'}
    ],
    verdictHeading:'Archivdeckel zu, Fortsetzung markiert',
    verdict:'2041 kann als eigener Jahrgang sauber archiviert werden, ohne die sportlichen Fäden künstlich abzuschneiden. Die irische Klub-Saison ist beendet, Europas Ligaphase läuft weiter und die Nationalmannschaft startet 2042 sofort mit einem Schwergewicht. Damit ist der Übergabepunkt für die neue 2042-Datenebene gesetzt.',
    sources:['FM-Spielübersicht Real Sociedad – Finn Harps · 11.12.2041','Champions-League-Tabelle · 11.12.2041','Irland WM-Qualifikation Gruppe C · Abschluss 18.11.2041','Finalissima-Auslosung · 28.11.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-12-11-year-closeout',date:'2041-12-11',season:2041,category:'Saison',accent:'gold',featured:true,
    eyebrow:'JAHRESABSCHLUSS · 2041',title:'2041 geschlossen – 2042 wartet schon',
    summary:'Finn Harps beendet das Jahr mit einem 1:0 bei Real Sociedad und 15 Champions-League-Punkten. Irland startet am 18. Januar 2042 gegen Brasilien in die Finalissima.',
    href:'presse.html?id=2041-12-11-jahresabschluss-2041',entities:['finn-harps','ireland','season-2041','season-2042','champions-league','finalissima']
  });
})();