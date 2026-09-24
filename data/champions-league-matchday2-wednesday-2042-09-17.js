(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-09-17';
  const reportId='2042-09-17-champions-league-wednesday-roundup';

  const wednesdayResults=[
    {home:'AEK',away:'Grenoble Foot 38',score:'2:2',scorers:{home:['S. Nkosi ET (6.)','J. Townsley (54.)'],away:['T. Cuenot (14.)','E. Del Portillo ET (83.)']}},
    {home:'Barcelona',away:'Liverpool',score:'1:1',scorers:{home:['T. Yefremov (75.)'],away:['I. Omrani (72.)']}},
    {home:'Cagliari',away:"St Patrick's Athletic",score:'0:0',scorers:{home:[],away:[]}},
    {home:'Celtic',away:'Bodø/Glimt',score:'2:1',scorers:{home:['L. Gómez (45+2., 55.)'],away:['A. Ramezani (47.)']}},
    {home:'Galatasaray SK',away:'Dynamo Kyiv',score:'2:2',scorers:{home:['H. Delattre (63.)','T. Britschgi (90+3.)'],away:['O. Pasichnyk (31.)','O. Kovaliov (66.)']}},
    {home:'Manchester United',away:'Milan',score:'2:1',scorers:{home:['Y. Kricheli (7.)','R. López (57.)'],away:['J. Alonso (90+3.)']}},
    {home:'Sporting CP',away:'Crvena zvezda',score:'2:4',scorers:{home:['Marco (33.)','I. Semedo (52.)'],away:['J. Benker (16.)','C. Aliyu (39., 62.)','E. Rivero (48.)']},events:['E. Rivero – rote Karte (72.)']},
    {home:'Tottenham',away:'Wolfsburg',score:'2:0',scorers:{home:['Mário Lúcio (7., Elf. 32.)'],away:[]}},
    {home:'West Ham',away:'Napoli',score:'1:0',scorers:{home:['H. Taylor (19.)'],away:[]}},
    {home:'Young Boys',away:'Red Bull Salzburg',score:'2:1',scorers:{home:['R. Ajdini (68.)','E. Andre (74.)'],away:['J. Meijer (44.)']}}
  ];

  const cl=window.FM_CHAMPIONS_LEAGUE['2042-43']||{};
  const leaguePhase=cl.leaguePhase||{};
  const matchday2=leaguePhase.matchday2||{};
  window.FM_CHAMPIONS_LEAGUE['2042-43']={
    ...cl,
    leaguePhase:{
      ...leaguePhase,
      matchday2:{
        ...matchday2,
        status:'2. Spieltag abgeschlossen',
        wednesdayDate:date,
        wednesdayResults
      }
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.snapshotDate=date;
    season.latestHeadline='Champions League: Der zweite Spieltag ist komplett. Manchester United schlägt Milan 2:1, Tottenham Wolfsburg 2:0, Crvena zvezda gewinnt 4:2 bei Sporting CP.';
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='17.09.2042: Champions-League-Spieltag 2 komplett. Mittwoch: AEK 2:2 Grenoble, Barcelona 1:1 Liverpool, Cagliari 0:0 St Patrick’s Athletic, Celtic 2:1 Bodø/Glimt, Galatasaray 2:2 Dynamo Kyiv, Man Utd 2:1 Milan, Sporting CP 2:4 Crvena zvezda, Tottenham 2:0 Wolfsburg, West Ham 1:0 Napoli, Young Boys 2:1 Salzburg.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Europapokal-Rundschau',date,competition:'UEFA Champions League',fixtureDate:date,
    headline:'Mittwoch in Europa: United schlägt Milan, Tottenham bleibt makellos – Crvena zvezda gewinnt 4:2 in Lissabon',
    subheadline:'Der zweite Champions-League-Spieltag ist komplett. Manchester United reagiert mit einem 2:1 gegen Milan, Tottenham besiegt Wolfsburg 2:0 und Crvena zvezda liefert bei Sporting CP den spektakulärsten Auswärtssieg des Abends.',
    label:'CHAMPIONS LEAGUE · MITTWOCHSRUNDSCHAU · 17.09.2042',
    heroStat:{label:'TORREICHSTES SPIEL',value:'2:4',note:'Sporting CP gegen Crvena zvezda'},
    intro:'Der Mittwoch liefert zehn weitere Partien des zweiten Ligaphasen-Spieltags. Besonders auffällig: Crvena zvezda gewinnt trotz später Unterzahl 4:2 bei Sporting CP, Manchester United schlägt Milan und Tottenham bleibt nach dem 2:0 gegen Wolfsburg weiter ohne Punktverlust.',
    sections:[
      {title:'AEK 2:2 Grenoble',text:'AEK und Grenoble teilen die Punkte. Nkosi trifft früh per Eigentor für AEK, Townsley legt nach; Cuenot und ein spätes Eigentor von Del Portillo retten Grenoble das Remis.'},
      {title:'Barcelona 1:1 Liverpool',text:'Liverpool geht durch Omrani in Minute 72 in Führung, doch Yefremov gleicht drei Minuten später für Barcelona aus.'},
      {title:'Cagliari 0:0 St Patrick’s Athletic',text:'Keine Tore auf Sardinien. St Patrick’s nimmt damit erneut einen Punkt aus der Ligaphase mit.'},
      {title:'Celtic 2:1 Bodø/Glimt',text:'L. Gómez erzielt beide Celtic-Tore. Ramezani trifft kurz nach der Pause für Bodø/Glimt, doch der Ausgleich fällt nicht.'},
      {title:'Galatasaray 2:2 Dynamo Kyiv',text:'Dynamo führt zweimal, Galatasaray antwortet zweimal. Britschgi rettet den Türken in der Nachspielzeit den Punkt.'},
      {title:'Manchester United 2:1 Milan',text:'Kricheli trifft früh, Ricardo López erhöht nach der Pause. Milans später Anschlusstreffer durch Alonso kommt zu spät.'},
      {title:'Sporting CP 2:4 Crvena zvezda',text:'Das Spektakel des Abends im Estádio José Alvalade. Benker, Aliyu mit Doppelpack und Rivero treffen für Crvena zvezda; Marco und Semedo für Sporting. Rivero sieht später noch Rot.'},
      {title:'Tottenham 2:0 Wolfsburg',text:'Mário Lúcio entscheidet das Spiel praktisch allein: Treffer in Minute 7 und ein Elfmeter in Minute 32.'},
      {title:'West Ham 1:0 Napoli',text:'Taylor trifft früh zum einzigen Tor. Vor 82.401 Zuschauern bleibt Napoli erneut ohne Sieg.'},
      {title:'Young Boys 2:1 Red Bull Salzburg',text:'Salzburg führt durch Meijer, doch Ajdini und Andre drehen die Partie innerhalb von sechs Minuten.'}
    ],
    verdictHeading:'Der zweite Spieltag wird enger',
    verdict:'Mehrere Schwergewichte lassen Punkte liegen, während Manchester United, Tottenham und Crvena zvezda wichtige Siege holen. Für Finn Harps bleibt die eigene Bilanz mit sechs Punkten und 5:0 Toren damit weiterhin ein ausgesprochen starker Start.',
    results:wednesdayResults,
    sources:['Champions-League-Ergebnisse · Mittwoch, 17.09.2042','FM-Wettbewerbsübersicht · UEFA Champions League · 17.09.2042']
  });

  upsert(window.FM_NEWS,{
    id:'2042-09-17-champions-league-wednesday-roundup',date,season:2042,category:'Champions League',accent:'blue',featured:false,
    eyebrow:'2. SPIELTAG KOMPLETT',
    title:'United schlägt Milan, Crvena zvezda gewinnt 4:2 bei Sporting',
    summary:'Die Mittwochsspiele des zweiten Champions-League-Spieltags: Tottenham besiegt Wolfsburg 2:0, Barcelona spielt 1:1 gegen Liverpool und West Ham schlägt Napoli.',
    href:`presse.html?id=${reportId}`,
    entities:['champions-league','man-utd','milan','tottenham','sporting-cp','crvena-zvezda','season-2042']
  });
})();