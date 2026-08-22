(()=>{
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const drawDate='2042-02-24';
  const previewDate='2042-03-02';
  const reportId='2042-02-24-champions-league-achtelfinale-auslosung';
  const previewReportId='2042-03-02-caen-finn-harps-achtelfinale-preview';
  const ties=[
    {id:1,home:'Benfica',away:'Chelsea'},
    {id:2,home:'Newcastle',away:'Barcelona'},
    {id:3,home:'Caen',away:'Finn Harps',finnHarps:true},
    {id:4,home:'Grenoble',away:'Man City'},
    {id:5,home:'Man Utd',away:'Arsenal'},
    {id:6,home:'Roma',away:'Monaco'},
    {id:7,home:'Milan',away:'Tottenham'},
    {id:8,home:'Napoli',away:'Inter'}
  ];

  const squadSnapshot=[
    {name:'Matteo Marchetti',position:'DM, M (LZ)',nation:'ITA',age:22,appearances:'16 (11)',goals:0,assists:4,rating:6.86,value:'€10,5–13 Mio.',contract:'30.06.2044'},
    {name:'Pasquale Mazza',position:'TW',nation:'ITA',age:22,appearances:'4',goals:0,assists:0,rating:6.87,value:'€7,6–11,5 Mio.',contract:'30.06.2044'},
    {name:'Abderrahmane Jaouhari',position:'ST (Z)',nation:'BEL',age:23,appearances:'1 (7)',goals:2,assists:1,rating:7.36,value:'€0,325–3,2 Mio.',contract:'30.06.2043'},
    {name:'Yannick Jaffre',position:'OM (RLZ), ST (Z)',nation:'FRA',age:23,appearances:'31 (3)',goals:16,assists:8,rating:7.18,value:'€304–332 Mio.',contract:'30.06.2046'},
    {name:'Francisco Rosendo',position:'V (Z)',nation:'POR',age:27,appearances:'13 (2)',goals:2,assists:0,rating:6.88,value:'€37–54 Mio.',contract:'30.06.2045'},
    {name:'Emerson',position:'M (RZ), OM (Z)',nation:'BRA',age:27,appearances:'28 (1)',goals:2,assists:8,rating:7.10,value:'€268–295 Mio.',contract:'30.06.2044'},
    {name:'Chai Miggins',position:'OM (RZ), ST (Z)',nation:'ENG',age:28,appearances:'12 (17)',goals:10,assists:4,rating:7.13,value:'€96–113 Mio.',contract:'30.06.2045'},
    {name:'Milan Beneš',position:'V/FV (R)',nation:'CZE',age:29,appearances:'17 (4)',goals:0,assists:1,rating:6.79,value:'€16–23 Mio.',contract:'30.06.2042'},
    {name:'Gürsel Özçimen',position:'V (Z), DM',nation:'TUR',age:29,appearances:'34',goals:1,assists:2,rating:7.06,value:'€199–238 Mio.',contract:'30.06.2045'},
    {name:"Harry O'Leary",position:'ST (Z)',nation:'IRL',age:30,appearances:'30 (2)',goals:19,assists:4,rating:7.21,value:'€270–294 Mio.',contract:'30.06.2044',status:'Verletzt'},
    {name:'Benjamín Cué',position:'M/OM (R)',nation:'MEX',age:26,appearances:'5 (13)',goals:4,assists:3,rating:7.46,value:'€62–75 Mio.',contract:'30.06.2045'},
    {name:'Matteo Spataro',position:'DM, M (Z)',nation:'ITA',age:31,appearances:'30 (2)',goals:1,assists:6,rating:7.00,value:'€62–90 Mio.',contract:'30.06.2043'},
    {name:'Ferhat Eyüpoğlu',position:'V (RZ), DM',nation:'TUR',age:31,appearances:'13 (3)',goals:0,assists:0,rating:6.96,value:'€31–45 Mio.',contract:'30.06.2044'},
    {name:'Ahmed Mansouri',position:'V (Z), DM, M/OM (Z)',nation:'MAR',age:32,appearances:'10 (14)',goals:0,assists:1,rating:6.89,value:'€23–28 Mio.',contract:'30.06.2043'},
    {name:'Éric Belinga',position:'V (RLZ)',nation:'BEL',age:32,appearances:'11 (3)',goals:0,assists:1,rating:7.03,value:'€0,95 Mio.',contract:'30.06.2042'},
    {name:'Kacper Stankiewicz',position:'V (R), DM',nation:'POL',age:33,appearances:'7',goals:0,assists:2,rating:7.29,value:'€25–30 Mio.',contract:'30.06.2042'},
    {name:'David Pinedo',position:'M/OM (Z)',nation:'PER',age:31,appearances:'3 (9)',goals:2,assists:1,rating:6.94,value:'€34–48 Mio.',contract:'30.06.2042'},
    {name:'Christian Donatiello',position:'V (RZ)',nation:'ITA',age:32,appearances:'27 (2)',goals:0,assists:0,rating:6.82,value:'€24–35 Mio.',contract:'30.06.2043'},
    {name:'Kiichi Wakabayashi',position:'TW',nation:'JPN',age:33,appearances:'36',goals:0,assists:0,rating:7.01,value:'Steht nicht zum Verkauf',contract:'30.06.2043'},
    {name:'José',position:'V/FV/OM (L)',nation:'ESP',age:33,appearances:'32',goals:1,assists:5,rating:7.22,value:'Steht nicht zum Verkauf',contract:'30.06.2043'},
    {name:'Ayodeji Agbaji',position:'V/FV/M/OM (L), ST (Z)',nation:'NGA',age:34,appearances:'24',goals:5,assists:3,rating:7.13,value:'€33–39 Mio.',contract:'30.06.2043'},
    {name:'Adama Koné',position:'M/OM (R)',nation:'CIV',age:31,appearances:'22 (7)',goals:5,assists:6,rating:7.31,value:'€62–73 Mio.',contract:'30.06.2043'},
    {name:'Léo Gilles',position:'M (RZ), OM (R), ST (Z)',nation:'FRA',age:34,appearances:'20 (13)',goals:4,assists:4,rating:6.92,value:'€7,4–10,5 Mio.',contract:'30.06.2042'}
  ];

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,
    season:'2041/42',
    roundOf16Draw:{date:drawDate,ties,finnHarpsOpponent:'Caen',headline:'Finn Harps trifft im Champions-League-Achtelfinale auf Caen.'},
    knockoutStage:{
      ...(current.knockoutStage||{}),
      roundOf16:{
        drawDate,
        ties,
        finnHarps:{
          opponent:'Caen',
          firstLegPairing:'Caen – Finn Harps',
          previewDate,
          opponentProfile:{league:'Ligue 1 Uber Eats',position:4,played:23,wins:12,draws:6,losses:5,goalDifference:18,points:42,clubValue:'€1,24 Mrd.',stadium:'Stade Michel-d’Ornano',capacity:21215}
        }
      }
    },
    headline:'Vor dem Achtelfinale: Caen ist Frankreichs Vierter, verfügt über enorme individuelle Qualität und hat Bayern München in der Zwischenrunde ausgeschaltet.'
  };

  let caen=window.FM_CLUBS.find(x=>x.id==='caen'||x.name==='Caen'||x.name==='Stade Malherbe Caen Calvados');
  if(!caen){
    caen={id:'caen',name:'Caen',country:'Frankreich',meetings:[]};
    window.FM_CLUBS.push(caen);
  }
  Object.assign(caen,{
    id:'caen',
    name:'Stade Malherbe Caen Calvados',
    shortName:'Caen',
    country:'Frankreich',
    city:'Caen',
    founded:1913,
    status:'Professionell',
    reputation:'Weltweit',
    estimatedValue:'€1,24 Mrd.',
    socialFollowers:18004272,
    seasonTicketHolders:19146,
    averageSquadAge:29.3,
    league:{name:'Ligue 1 Uber Eats',position:4,played:23,wins:12,draws:6,losses:5,goalDifference:18,points:42},
    stadium:{name:'Stade Michel-d’Ornano',city:'Caen',capacity:21215,built:1993,condition:'Sehr gut',surface:'Hybridrasen',pitch:'105 x 68 m'},
    facilities:{training:'Hochmodern',youth:'Hochmodern',youthRecruitment:19},
    honours:{coupeDeFrance:2,uefaEuropaConferenceLeague:1,ligue2:3,tropheeDesChampions:1},
    currentCoach:'Dean Burton',
    captain:'Léo Gilles',
    viceCaptain:'Gürsel Özçimen',
    keyPlayer:'Emerson',
    biggestTalent:'Joshua Poulain',
    bestEleven:['Kiichi Wakabayashi','Kacper Stankiewicz','Éric Belinga','Gürsel Özçimen','José','Benjamín Cué','Matteo Spataro','Emerson','Ayodeji Agbaji','Yannick Jaffre',"Harry O'Leary"],
    scouting:{
      strengths:[
        'Gefährlich nach Standards: durchschnittlich 0,23 xG aus 6,7 Standardsituationen pro Spiel, ligaweit Rang drei.',
        'Hoher kollektiver Mut und gute Balance.',
        'Starke Grundfitness, Technik, Passspiel und Einsatzfreude.',
        'Harry O’Leary ist mit 13 Ligatoren einer der besten Torjäger der Ligue 1.',
        'Bei gegnerischen Standards gewinnt Caen am kurzen Pfosten sehr häufig den ersten Kontakt.',
        'José links und Gürsel Özçimen im Zentrum werden vom Scouting als besonders starke Verteidiger hervorgehoben.'
      ],
      weaknesses:[
        'Der Scoutingbericht sieht Probleme bei hohen Bällen im Torhüterbereich.',
        'Acht der letzten 20 Gegentore entstanden nach Steilpässen.',
        'Milan Beneš befindet sich laut Bericht in schwacher Form mit einer Durchschnittsnote von 6,18 über die letzten sechs Spiele.'
      ],
      inFormPlayer:{name:'Benjamín Cué',lastFiveRating:7.68},
      topLeagueScorer:{name:"Harry O'Leary",goals:13},
      goalkeeperCleanSheets:{name:'Kiichi Wakabayashi',cleanSheets:5}
    },
    squadSnapshotDate:previewDate,
    squadSnapshot,
    nextMeeting:{competition:'UEFA Champions League',stage:'Achtelfinale',opponent:'Finn Harps',drawDate,previewDate},
    summary:'Caen ist vor dem Champions-League-Achtelfinale ein deutlich gefährlicherer Gegner, als der Name zunächst vermuten lässt: Rang vier in Frankreich, 42 Punkte aus 23 Spielen, ein Kader mit mehreren Spielern im dreistelligen Millionenbereich und der Erfolg gegen Bayern München in der Zwischenrunde.',
    pressReport:{id:previewReportId,href:`presse.html?id=${previewReportId}`,label:'CHAMPIONS LEAGUE · GEGNERANALYSE',headline:'Kein Freilos: Caen wartet mit Milliardenkader und Bayern-Skalp'}
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=previewDate;
    season.latestHeadline='Champions League: Caen-Analyse vor dem Achtelfinale. Der französische Vierte bringt enorme individuelle Qualität mit und eliminierte Bayern München in der Zwischenrunde.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.roundOf16={
      ...(season.championsLeague.roundOf16||{}),
      drawDate,
      opponent:'Caen',
      pairing:'Caen – Finn Harps',
      allTies:ties,
      previewDate,
      opponentSnapshot:{leaguePosition:4,played:23,points:42,goalDifference:18,clubValue:'€1,24 Mrd.',stadiumCapacity:21215}
    };
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const drawNote='24.02.2042: Das Champions-League-Achtelfinale steht. Finn Harps trifft auf Caen; weitere Duelle sind Benfica–Chelsea, Newcastle–Barcelona, Grenoble–Man City, Man Utd–Arsenal, Roma–Monaco, Milan–Tottenham und Napoli–Inter.';
    if(!season.changes.notes.includes(drawNote))season.changes.notes.push(drawNote);
    const previewNote='02.03.2042: Gegneranalyse Caen. Frankreichs Tabellenvierter steht bei 42 Punkten aus 23 Spielen, verfügt über einen geschätzten Klubwert von 1,24 Mrd. € und hat Bayern München in der Champions-League-Zwischenrunde ausgeschaltet.';
    if(!season.changes.notes.includes(previewNote))season.changes.notes.push(previewNote);
  }

  const drawReport={
    id:reportId,type:'Auslosung',date:drawDate,competition:'UEFA Champions League',fixtureDate:'Achtelfinale 2041/42',
    headline:'Achtelfinale steht: Finn Harps bekommt Caen zugelost',
    subheadline:'Nach Platz zwei in der Ligaphase führt der Weg der Harps im Champions-League-Achtelfinale nach Frankreich. Caen ist der Gegner, während mehrere europäische Schwergewichte bereits direkt aufeinandertreffen.',
    label:'CHAMPIONS LEAGUE · ACHTELFINALE-AUSLOSUNG · 24.02.2042',
    heroStat:{label:'Harps-Gegner',value:'Caen',note:'Achtelfinale · UEFA Champions League'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Der nächste europäische Schritt ist ausgelost. Finn Harps trifft im Achtelfinale der Champions League auf Caen. Die Harps gehen damit einem der ganz großen Namen zunächst aus dem Weg, während die Auslosung an anderer Stelle mehrere Schwergewichtsduelle produziert.',
    sections:[
      {title:'Caen wartet auf die Harps',text:'Das dritte gezogene Duell lautet Caen gegen Finn Harps. Nach dem zweiten Platz in der Ligaphase kennt der irische Meister damit seinen ersten Gegner in der K.-o.-Phase.'},
      {title:'England räumt sich teilweise selbst aus dem Weg',text:'Mit Manchester United gegen Arsenal kommt es zu einem rein englischen Duell. Chelsea muss zu Benfica, Newcastle trifft auf Barcelona und Manchester City bekommt Grenoble.'},
      {title:'Italienischer Block mit großen Namen',text:'Roma trifft auf Monaco, Milan auf Tottenham und Napoli auf Inter. Damit steht auch ein rein italienisches Achtelfinale auf dem Programm.'},
      {title:'Alle acht Paarungen',text:'Benfica – Chelsea · Newcastle – Barcelona · Caen – Finn Harps · Grenoble – Man City · Man Utd – Arsenal · Roma – Monaco · Milan – Tottenham · Napoli – Inter.'}
    ],
    verdictHeading:'Ein Los, das sofort Träume erlaubt',
    verdict:'Caen ist im Vergleich zu Barcelona, Manchester City oder Chelsea das weniger glamouröse Los. Genau darin liegt aber die Gefahr eines K.-o.-Duells: Namen gewinnen keine Spiele. Für Finn Harps ist es dennoch eine Auslosung, bei der der Blick auf das Viertelfinale erlaubt sein dürfte, ohne den französischen Gegner zu unterschätzen.',
    sourcesHeading:'Grundlage',
    sourcesNote:'Die acht Achtelfinalpaarungen basieren auf dem FM-Screenshot der Champions-League-Auslosung.',
    sources:['FM24 · UEFA Champions League · Achtelfinale-Auslosung · 24.02.2042']
  };
  upsert(window.FM_PRESS_REPORTS,drawReport);

  const previewReport={
    id:previewReportId,type:'Gegneranalyse',date:previewDate,competition:'UEFA Champions League',fixtureDate:'Achtelfinale 2041/42',
    home:'Caen',away:'Finn Harps',
    headline:'Kein Freilos: Caen wartet mit Milliardenkader und Bayern-Skalp',
    subheadline:'Der französische Vierte ist kein romantischer Außenseiter. Caen steht auf Rang vier der Ligue 1, verfügt über einen geschätzten Klubwert von 1,24 Milliarden Euro und bringt mit Jaffre, O’Leary, Emerson und Özçimen außergewöhnlich teure Spitzenkräfte mit.',
    label:'CHAMPIONS LEAGUE · GEGNERANALYSE · 02.03.2042',
    heroStat:{label:'Ligue 1',value:'4. Platz · 42 Punkte',note:'23 Spiele · 12 Siege · +18 Tordifferenz'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Das Los klang zunächst freundlich. Der Blick unter die Motorhaube macht Caen jedoch zu einem Gegner, bei dem jedes Gefühl von Freilos sofort verschwindet. Der Klub ist Vierter in Frankreich, besitzt hochmoderne Infrastruktur, hat einen Kader mit mehreren Marktwerten jenseits von 200 Millionen Euro und setzte sich in der Champions-League-Zwischenrunde gegen Bayern München durch.',
    sections:[
      {title:'Frankreichs Nummer vier',text:'Nach 23 Ligaspielen steht Caen bei 12 Siegen, sechs Unentschieden und fünf Niederlagen. 42 Punkte und eine Tordifferenz von +18 bedeuten Rang vier hinter Monaco, Grenoble und Paris Saint-Germain.'},
      {title:'Ein Kader, der den Namen des Klubs überstrahlt',text:'Yannick Jaffre wird mit 304 bis 332 Mio. € bewertet, Emerson mit 268 bis 295 Mio. €, Harry O’Leary mit 270 bis 294 Mio. € und Gürsel Özçimen mit 199 bis 238 Mio. €. Caen ist damit personell deutlich näher an Europas Spitzenklasse als an einem klassischen Achtelfinal-Außenseiter.'},
      {title:'Jaffre und O’Leary als Doppelspitze',text:'Die beste Elf wird im Scouting als 4-4-2 dargestellt. Yannick Jaffre kommt im Export auf 16 Tore und acht Vorlagen in allen erfassten Einsätzen, Harry O’Leary auf 19 Tore und vier Vorlagen. In der Ligue 1 führt O’Leary Caens Torjägerliste mit 13 Treffern an. Der irische Stürmer ist im aktuellen Export allerdings als verletzt markiert.'},
      {title:'Standards, Technik und Erfahrung',text:'Das Scouting hebt Caens Standardstärke, Technik, Passqualität, Fitness und kollektiven Mut hervor. Besonders nach ruhenden Bällen produziert die Mannschaft mit durchschnittlich 0,23 xG aus 6,7 Standardsituationen pro Spiel eine der besten Bilanzen der Ligue 1.'},
      {title:'Wo die Harps ansetzen können',text:'Der Bericht nennt Probleme bei hohen Bällen im Torhüterbereich und zeigt eine auffällige Verwundbarkeit gegen Steilpässe: Acht der letzten 20 Gegentore entstanden auf diesem Weg. Genau dort könnten die vertikalen Läufe der Harps und die Bewegungen zwischen den Linien ansetzen.'},
      {title:'Bayern ist die Warnleuchte',text:'Caen kommt nicht als unbeschriebenes Blatt in dieses Achtelfinale. Der Klub setzte sich in der Champions-League-Zwischenrunde gegen Bayern München durch. Wer diesen Gegner nur nach seinem Namen bewertet, ignoriert den wichtigsten Beweis seiner europäischen Qualität.'}
    ],
    strengthsTitle:'CAENS GRÖSSTE WAFFEN',
    strengthsHeading:'Mehr Spitzenklasse als Außenseiterromantik',
    strengths:[
      'Vierter der Ligue 1 mit 42 Punkten aus 23 Spielen.',
      'Mehrere Schlüsselspieler mit Marktwerten zwischen rund 200 und 330 Mio. €.',
      'Gefährliche Standards und technisch starkes Mittelfeld.',
      'Harry O’Leary mit 13 Ligatoren, Yannick Jaffre mit enormer Gesamtproduktion.',
      'Bayern München bereits in der Zwischenrunde ausgeschaltet.'
    ],
    vulnerabilitiesTitle:'WO FINN HARPS DRUCK MACHEN KANN',
    vulnerabilitiesHeading:'Tiefe Bälle und Luftduelle',
    vulnerabilities:[
      'Acht der letzten 20 Gegentore resultierten aus Steilpässen.',
      'Das Scouting sieht Unsicherheit bei hohen Bällen im Torhüterbereich.',
      'Milan Beneš befindet sich in schwacher Form.',
      'Der Kader ist mit einem Durchschnittsalter von 29,3 Jahren deutlich erfahrener, aber weniger jung als der Harps-Kader.'
    ],
    verdictHeading:'Angenehmer Name, unangenehmer Gegner',
    verdict:'Caen ist kein Barcelona und kein Manchester City. Aber genau das darf nicht mit einem leichten Los verwechselt werden. Die Franzosen sind national klar auf Champions-League-Kurs, verfügen über enorme individuelle Qualität und haben Bayern bereits aus dem Wettbewerb gedrängt. Finn Harps gehen aufgrund ihrer eigenen europäischen Entwicklung mit berechtigtem Selbstvertrauen in das Duell, aber nicht mit einem Freifahrtschein.',
    sourcesHeading:'Grundlage',
    sourcesNote:'Liga- und Vereinsdaten basieren auf den FM-Screenshots vom 2. März 2042. Kader, Einsätze, Tore, Vorlagen, Noten, Vertragsenden und Transferwerte stammen aus dem hochgeladenen FM-Kaderexport.',
    sources:['FM24 · Caen Vereinsübersicht · 02.03.2042','FM24 · Caen Scoutingbericht · 02.03.2042','FM24 · Ligue-1-Tabelle und Spielerstatistiken · 02.03.2042','FM24 · Caen Kaderexport · 02.03.2042']
  };
  upsert(window.FM_PRESS_REPORTS,previewReport);

  upsert(window.FM_NEWS,{
    id:'2042-02-24-champions-league-round-of-16-draw',date:drawDate,season:2042,category:'Champions League',accent:'blue',featured:false,
    eyebrow:'CHAMPIONS LEAGUE · ACHTELFINALE',title:'Caen wartet: Harps kennen ihren Achtelfinalgegner',
    summary:'Finn Harps trifft im Achtelfinale auf Caen. Gleichzeitig gibt es unter anderem Man Utd gegen Arsenal, Newcastle gegen Barcelona und Napoli gegen Inter.',
    href:`presse.html?id=${reportId}`,reportId
  });
  upsert(window.FM_NEWS,{
    id:'2042-03-02-caen-finn-harps-preview',date:previewDate,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · GEGNERANALYSE',title:'Kein Freilos: Caen ist Frankreichs Vierter und hat Bayern ausgeschaltet',
    summary:'42 Punkte aus 23 Ligaspielen, ein Klubwert von 1,24 Mrd. € und mehrere Stars jenseits der 200-Millionen-Marke: Vor dem Achtelfinale zeigt das Dossier, wie gefährlich Caen wirklich ist.',
    href:`presse.html?id=${previewReportId}`,reportId:previewReportId
  });
})();